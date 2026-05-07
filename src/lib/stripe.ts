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
      'GEOL 101 Modules 1.1 & 1.2 — 8 lessons',
      'XP, level & streak system',
      'Achievement badges',
      'Progress dashboard',
    ],
  },
  pro: {
    name: 'Scholar',
    price: 12,
    priceId: process.env.STRIPE_PRO_PRICE_ID,
    features: [
      'Everything in Explorer',
      'Full GEOL 101 — all 5 modules (26 lessons)',
      'GEOL 201 + all future 100/200-level courses',
      'Interactive labs & simulations',
      'Global leaderboards & rankings',
    ],
  },
  expert: {
    name: 'Earth Scientist',
    price: 25,
    priceId: process.env.STRIPE_EXPERT_PRICE_ID,
    features: [
      'Everything in Scholar',
      'Expert & 300-level modules',
      'Early access to new courses',
      'Priority support',
    ],
  },
} as const
