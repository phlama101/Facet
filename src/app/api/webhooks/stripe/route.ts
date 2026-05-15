import { NextRequest, NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { createAdminClient } from '@/lib/supabase/admin'
import * as Sentry from '@sentry/nextjs'
import Stripe from 'stripe'

// Statuses where the subscriber has live, paid access.
// past_due is intentionally included — Stripe retries payment for several days
// and we don't want to lock out users during that window.
const PAID_STATUSES = new Set(['active', 'trialing', 'past_due'])

async function syncTier(
  admin: ReturnType<typeof createAdminClient>,
  customerId: string,
  tier: 'free' | 'pro',
  eventType: string,
): Promise<boolean> {
  const { data: updated, error } = await admin
    .from('profiles')
    .update({ subscription: tier })
    .eq('stripe_customer_id', customerId)
    .select('id')

  if (error) {
    Sentry.captureException(new Error(`[stripe-webhook] ${eventType}: DB update failed`), { extra: { customerId, tier, error } })
    console.error(`[stripe-webhook] ${eventType}: DB update failed`, { customerId, tier, error })
    return false
  }

  // No profile matched — the stripe_customer_id may not have been stored yet
  // (e.g. checkout.session.completed race, or a failed write in the checkout route).
  // Fall back to the supabase_user_id stored in the Stripe customer metadata.
  if (!updated?.length) {
    let customer: Stripe.Customer | Stripe.DeletedCustomer
    try {
      customer = await getStripe().customers.retrieve(customerId)
    } catch (err) {
      Sentry.captureException(err, { extra: { context: `${eventType}: customer retrieve failed`, customerId } })
      console.error(`[stripe-webhook] ${eventType}: customer retrieve failed`, { customerId, err })
      return false
    }

    if ((customer as Stripe.DeletedCustomer).deleted) {
      // Customer was deleted in Stripe — nothing we can do.
      return true
    }

    const userId = (customer as Stripe.Customer).metadata?.supabase_user_id
    if (!userId) {
      Sentry.captureMessage(`[stripe-webhook] ${eventType}: no profile for customer and no metadata fallback`, { extra: { customerId }, level: 'error' })
      console.error(`[stripe-webhook] ${eventType}: no profile for customer and no metadata fallback`, { customerId })
      return false
    }

    const { error: fallbackError } = await admin
      .from('profiles')
      .update({ subscription: tier, stripe_customer_id: customerId })
      .eq('id', userId)

    if (fallbackError) {
      Sentry.captureException(new Error(`[stripe-webhook] ${eventType}: metadata fallback failed`), { extra: { userId, tier, error: fallbackError } })
      console.error(`[stripe-webhook] ${eventType}: metadata fallback failed`, { userId, tier, error: fallbackError })
      return false
    }
  }

  return true
}

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event
  try {
    event = getStripe().webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  const admin = createAdminClient()

  switch (event.type) {
    case 'checkout.session.completed': {
      // Primary grant path. Fires immediately when payment is confirmed — closes
      // the race window between the Stripe redirect and subscription webhook delivery.
      const session = event.data.object as Stripe.Checkout.Session
      if (session.mode !== 'subscription' || !session.customer) break

      const customerId = session.customer as string

      // Try customer ID first (fast path).
      const { data: byCustomer, error } = await admin
        .from('profiles')
        .update({ subscription: 'pro' })
        .eq('stripe_customer_id', customerId)
        .select('id')

      if (error) {
        console.error('[stripe-webhook] checkout.session.completed: DB update failed', { customerId, error })
        return NextResponse.json({ error: 'DB update failed' }, { status: 500 })
      }

      // Fast path missed — fall back to client_reference_id (Supabase user ID
      // attached to the session in the checkout route).
      if (!byCustomer?.length && session.client_reference_id) {
        const { error: refError } = await admin
          .from('profiles')
          .update({ subscription: 'pro', stripe_customer_id: customerId })
          .eq('id', session.client_reference_id)

        if (refError) {
          console.error('[stripe-webhook] checkout.session.completed: client_reference_id fallback failed', {
            userId: session.client_reference_id, error: refError,
          })
          return NextResponse.json({ error: 'DB update failed' }, { status: 500 })
        }
      }
      break
    }

    case 'customer.subscription.created':
    case 'customer.subscription.updated': {
      const sub = event.data.object as Stripe.Subscription
      // Guard on status — only live/healthy subscriptions grant paid access.
      // incomplete, incomplete_expired, unpaid, and canceled all revert to free.
      const tier: 'free' | 'pro' = PAID_STATUSES.has(sub.status) ? 'pro' : 'free'
      const ok = await syncTier(admin, sub.customer as string, tier, event.type)
      if (!ok) return NextResponse.json({ error: 'DB update failed' }, { status: 500 })
      break
    }

    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription
      const ok = await syncTier(admin, sub.customer as string, 'free', event.type)
      if (!ok) return NextResponse.json({ error: 'DB update failed' }, { status: 500 })
      break
    }
  }

  return NextResponse.json({ received: true })
}
