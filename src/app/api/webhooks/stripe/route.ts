import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { createAdminClient } from '@/lib/supabase/admin'
import Stripe from 'stripe'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')!

  let event: Stripe.Event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  // Must use the admin (service-role) client here — there is no user session in a
  // webhook request, so the anon client would be blocked by RLS on profiles.UPDATE.
  const admin = createAdminClient()

  switch (event.type) {
    case 'customer.subscription.created':
    case 'customer.subscription.updated': {
      const sub = event.data.object as Stripe.Subscription
      const customerId = sub.customer as string
      const priceId = sub.items.data[0]?.price.id
      const tier: 'free' | 'pro' | 'expert' =
        priceId === process.env.STRIPE_EXPERT_PRICE_ID ? 'expert' :
        priceId === process.env.STRIPE_PRO_PRICE_ID    ? 'pro'    : 'free'

      const { error } = await admin
        .from('profiles')
        .update({ subscription: tier })
        .eq('stripe_customer_id', customerId)

      if (error) {
        console.error('[stripe-webhook] subscription update failed', { customerId, tier, error })
        return NextResponse.json({ error: 'DB update failed' }, { status: 500 })
      }
      break
    }
    case 'customer.subscription.deleted': {
      const sub = event.data.object as Stripe.Subscription
      const customerId = sub.customer as string

      const { error } = await admin
        .from('profiles')
        .update({ subscription: 'free' })
        .eq('stripe_customer_id', customerId)

      if (error) {
        console.error('[stripe-webhook] subscription delete failed', { customerId, error })
        return NextResponse.json({ error: 'DB update failed' }, { status: 500 })
      }
      break
    }
  }

  return NextResponse.json({ received: true })
}
