import { NextRequest, NextResponse } from 'next/server'
import { getStripe, PLANS } from '@/lib/stripe'
import { createClient } from '@/lib/supabase/server'

// Only allow price IDs that belong to our known plans.
// This prevents a tampered client request from initiating a checkout session
// for an arbitrary Stripe price.
const VALID_PRICE_IDS = new Set(
  [PLANS.pro.priceId].filter((id): id is string => Boolean(id))
)

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json() as { priceId?: unknown }
  const priceId = typeof body.priceId === 'string' ? body.priceId.trim() : ''

  if (!priceId || !VALID_PRICE_IDS.has(priceId)) {
    return NextResponse.json({ error: 'Invalid plan' }, { status: 400 })
  }

  // Get or create a Stripe customer tied to this user
  const { data: profileData } = await supabase
    .from('profiles')
    .select('stripe_customer_id')
    .eq('id', user.id)
    .single()
  const profile = profileData as { stripe_customer_id: string | null } | null

  let customerId = profile?.stripe_customer_id ?? null

  if (!customerId) {
    const customer = await getStripe().customers.create({
      email: user.email,
      metadata: { supabase_user_id: user.id },
    })
    customerId = customer.id
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    await (supabase.from('profiles') as any)
      .update({ stripe_customer_id: customerId })
      .eq('id', user.id)
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'

  const session = await getStripe().checkout.sessions.create({
    customer: customerId,
    mode: 'subscription',
    payment_method_types: ['card'],
    line_items: [{ price: priceId, quantity: 1 }],
    success_url: `${appUrl}/dashboard?upgraded=1`,
    cancel_url: `${appUrl}/pricing`,
    allow_promotion_codes: true,
  })

  return NextResponse.json({ url: session.url })
}
