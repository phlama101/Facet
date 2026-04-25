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
      '3 beginner courses',
      'Basic quizzes',
      'Progress tracking',
      'Community access',
    ],
  },
  pro: {
    name: 'Geologist',
    price: 12,
    priceId: process.env.STRIPE_PRO_PRICE_ID,
    features: [
      'All 8 courses',
      'Advanced quizzes & labs',
      'Leaderboards',
      'Achievement badges',
      'Downloadable study guides',
      'Priority support',
    ],
  },
  expert: {
    name: 'Earth Scientist',
    price: 25,
    priceId: process.env.STRIPE_EXPERT_PRICE_ID,
    features: [
      'Everything in Geologist',
      'Expert & PhD-level content',
      'Live Q&A sessions',
      'Course certificates',
      'Research paper access',
      'Offline mode',
    ],
  },
} as const
