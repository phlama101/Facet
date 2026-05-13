import Stripe from 'stripe'

let _stripe: Stripe | null = null
export function getStripe(): Stripe {
  if (!_stripe) {
    const key = process.env.STRIPE_SECRET_KEY
    if (!key) throw new Error('STRIPE_SECRET_KEY is not set')
    _stripe = new Stripe(key, { apiVersion: '2024-06-20', typescript: true })
  }
  return _stripe
}

export const PLANS = {
  free: {
    name: 'Explorer',
    price: 0,
    priceId: null,
    features: [
      'Earth Foundations Ch. 1 & 2 — 8 lessons',
      'Chapter 1 of every other learning path',
      'XP, levels & streak system',
      'Achievement badges & progress dashboard',
    ],
  },
  pro: {
    name: 'Scholar',
    price: 12,
    priceId: process.env.STRIPE_PRO_PRICE_ID,
    features: [
      'Everything in Explorer',
      'Full Earth Foundations — all 5 chapters',
      'Deep Time — Earth Through History',
      'All current & future learning paths',
      'New paths added regularly',
    ],
  },
  expert: {
    name: 'Earth Scientist',
    price: 25,
    priceId: process.env.STRIPE_EXPERT_PRICE_ID,
    features: [
      'Everything in Scholar',
      'Expert & advanced paths',
      'Early access before public launch',
      'Priority support',
    ],
  },
} as const
