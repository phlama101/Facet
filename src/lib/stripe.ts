import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2024-06-20',
  typescript: true,
})

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
