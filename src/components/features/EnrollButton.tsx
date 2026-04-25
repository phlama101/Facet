'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, BookOpen, Lock } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'

interface Props { courseId: string; enrolled: boolean; isPremium: boolean; slug: string }

export default function EnrollButton({ courseId, enrolled, isPremium, slug }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function enroll() {
    setLoading(true)
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { router.push('/login'); return }

    await (supabase.from('user_course_enrollments') as any).upsert({ user_id: user.id, course_id: courseId }, { onConflict: 'user_id,course_id' })
    router.refresh()
    setLoading(false)
  }

  if (enrolled) {
    return (
      <a href={`/courses/${slug}`} className="w-full flex items-center justify-center gap-2 py-3 bg-cyan-500 hover:bg-cyan-400 text-[#0d1117] font-bold rounded-xl text-sm transition-colors">
        <BookOpen className="w-4 h-4" /> Continue Learning
      </a>
    )
  }

  if (isPremium) {
    return (
      <div className="space-y-2">
        <button className="w-full flex items-center justify-center gap-2 py-3 bg-amber-500 hover:bg-amber-400 text-[#0d1117] font-bold rounded-xl text-sm transition-colors">
          <Lock className="w-4 h-4" /> Upgrade to Unlock
        </button>
        <p className="text-xs text-center text-[#8b949e]">Available on Pro & Expert plans</p>
      </div>
    )
  }

  return (
    <button onClick={enroll} disabled={loading}
      className="w-full flex items-center justify-center gap-2 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 text-[#0d1117] font-bold rounded-xl text-sm transition-all"
    >
      {loading ? <span className="w-4 h-4 border-2 border-[#0d1117]/30 border-t-[#0d1117] rounded-full animate-spin" /> : <><BookOpen className="w-4 h-4" /> Enroll for Free <ArrowRight className="w-4 h-4" /></>}
    </button>
  )
}
