'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Zap } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { PLANS } from '@/lib/stripe'
import { cn } from '@/lib/utils'

interface Props {
  courseId: string
  enrolled: boolean
  isPremium: boolean
  slug: string
  userSubscription?: 'free' | 'pro' | 'expert'
}

export default function EnrollButton({ courseId, enrolled, isPremium, slug, userSubscription = 'free' }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const hasPaidSub = userSubscription === 'pro' || userSubscription === 'expert'

  async function enroll() {
    setLoading(true)
    try {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/login'); return }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await (supabase.from('user_course_enrollments') as any).upsert(
        { user_id: user.id, course_id: courseId },
        { onConflict: 'user_id,course_id' }
      )
      router.refresh()
    } finally {
      setLoading(false)
    }
  }

  async function upgrade() {
    setLoading(true)
    try {
      const supabase = createClient()
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { router.push('/register?next=/pricing'); return }

      const priceId = PLANS.pro.priceId
      if (!priceId) { router.push('/pricing'); return }

      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      })
      const json = await res.json() as { url?: string; error?: string }
      if (json.url?.startsWith('https://')) window.location.href = json.url
      else router.push('/pricing')
    } finally {
      setLoading(false)
    }
  }

  const spinner = (
    <span className="w-4 h-4 border-2 border-[#0d1117]/30 border-t-[#0d1117] rounded-full animate-spin" />
  )

  if (enrolled) {
    return (
      <motion.a
        href={`/courses/${slug}`}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative w-full flex items-center justify-center gap-2 py-3 bg-cyan-500 hover:bg-cyan-400 text-[#0d1117] font-bold rounded-xl text-sm transition-colors shadow-[0_8px_24px_-8px_rgba(6,182,212,0.6)] overflow-hidden"
      >
        <span aria-hidden className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms] ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <BookOpen className="w-4 h-4" />
        <span className="relative">Continue Learning</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
      </motion.a>
    )
  }

  if (isPremium && !hasPaidSub) {
    return (
      <div className="space-y-2">
        <motion.button
          onClick={upgrade}
          disabled={loading}
          whileHover={loading ? undefined : { scale: 1.02 }}
          whileTap={loading ? undefined : { scale: 0.98 }}
          className={cn(
            'group relative w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold overflow-hidden',
            'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400',
            'text-[#0d1117] shadow-[0_8px_28px_-8px_rgba(245,158,11,0.7)]',
            'disabled:opacity-60 disabled:cursor-not-allowed transition-colors'
          )}
        >
          <span aria-hidden className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms] ease-out bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          {loading ? spinner : (
            <>
              <Zap className="w-4 h-4 fill-[#0d1117]" />
              <span className="relative">Unlock with Pro</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </>
          )}
        </motion.button>
        <p className="text-xs text-center text-[#8b949e]">
          Cancel anytime ·{' '}
          <a href="/pricing" className="underline underline-offset-2 hover:text-[#e6edf3] transition-colors">
            See all plans
          </a>
        </p>
      </div>
    )
  }

  return (
    <motion.button
      onClick={enroll}
      disabled={loading}
      whileHover={loading ? undefined : { scale: 1.02 }}
      whileTap={loading ? undefined : { scale: 0.98 }}
      className={cn(
        'group relative w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold overflow-hidden',
        'bg-cyan-500 hover:bg-cyan-400 text-[#0d1117]',
        'shadow-[0_8px_24px_-8px_rgba(6,182,212,0.6)]',
        'disabled:opacity-60 disabled:cursor-not-allowed transition-colors'
      )}
    >
      <span aria-hidden className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms] ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      {loading ? spinner : (
        <>
          <BookOpen className="w-4 h-4" />
          <span className="relative">Enroll for Free</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </>
      )}
    </motion.button>
  )
}
