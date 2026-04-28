'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
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
      if (json.url) window.location.href = json.url
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
      <a
        href={`/courses/${slug}`}
        className="w-full flex items-center justify-center gap-2 py-3 bg-cyan-500 hover:bg-cyan-400 text-[#0d1117] font-bold rounded-xl text-sm transition-colors"
      >
        <BookOpen className="w-4 h-4" /> Continue Learning
      </a>
    )
  }

  if (isPremium && !hasPaidSub) {
    return (
      <div className="space-y-2">
        <button
          onClick={upgrade}
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 py-3 bg-amber-500 hover:bg-amber-400 disabled:opacity-60 text-[#0d1117] font-bold rounded-xl text-sm transition-colors"
        >
          {loading ? spinner : <><Zap className="w-4 h-4" /> Unlock with Pro <ArrowRight className="w-4 h-4" /></>}
        </button>
        <p className="text-xs text-center text-[#8b949e]">
          7-day free trial ·{' '}
          <a href="/pricing" className="underline underline-offset-2 hover:text-[#e6edf3] transition-colors">
            See all plans
          </a>
        </p>
      </div>
    )
  }

  return (
    <button
      onClick={enroll}
      disabled={loading}
      className={cn(
        'w-full flex items-center justify-center gap-2 py-3',
        'bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60',
        'text-[#0d1117] font-bold rounded-xl text-sm transition-all'
      )}
    >
      {loading ? spinner : <><BookOpen className="w-4 h-4" /> Enroll for Free <ArrowRight className="w-4 h-4" /></>}
    </button>
  )
}
