import { NextResponse } from 'next/server'
import { getStripe } from '@/lib/stripe'
import { createClient } from '@/lib/supabase/server'

// Opens the Stripe billing portal pre-navigated to the subscription cancel screen.
// Stripe's flow_data API requires the subscription ID, so we fetch it live from
// the customer's active subscriptions rather than storing it in our DB.
export async function POST() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: profileData } = await supabase
    .from('profiles')
    .select('stripe_customer_id')
    .eq('id', user.id)
    .single()
  const customerId = (profileData as { stripe_customer_id: string | null } | null)?.stripe_customer_id ?? null
  if (!customerId) return NextResponse.json({ error: 'No billing account found' }, { status: 400 })

  const stripe = getStripe()
  const subscriptions = await stripe.subscriptions.list({ customer: customerId, status: 'active', limit: 1 })
  const subscriptionId = subscriptions.data[0]?.id
  if (!subscriptionId) return NextResponse.json({ error: 'No active subscription found' }, { status: 400 })

  const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000'

  const session = await stripe.billingPortal.sessions.create({
    customer: customerId,
    return_url: `${appUrl}/settings`,
    flow_data: {
      type: 'subscription_cancel',
      subscription_cancel: { subscription: subscriptionId },
    },
  })

  return NextResponse.json({ url: session.url })
}
