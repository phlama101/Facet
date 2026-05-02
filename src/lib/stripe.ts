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
      'GEOL 101 — full 26-lesson course',
      'Quiz & XP progression system',
      'Achievements & level titles',
      'Personal progress dashboard',
      'Community access',
    ],
  },
  pro: {
    name: 'Geologist',
    price: 12,
    priceId: process.env.STRIPE_PRO_PRICE_ID,
    features: [
      'Everything in Explorer',
      'GEOL 201 + all future courses',
      'Advanced labs & data exercises',
      'Global leaderboards & rankings',
      'Downloadable PDF study guides',
      'Priority support',
    ],
  },
  expert: {
    name: 'Earth Scientist',
    price: 25,
    priceId: process.env.STRIPE_EXPERT_PRICE_ID,
    features: [
      'Everything in Geologist',
      'Expert & PhD-level modules',
      'Monthly live Q&A sessions',
      'Verified course certificates',
      'Research paper library access',
      'Early access to new courses',
    ],
  },
} as const
