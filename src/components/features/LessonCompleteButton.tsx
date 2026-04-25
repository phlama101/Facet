'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CheckCircle2, ArrowRight, Zap } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { motion, AnimatePresence } from 'framer-motion'

interface Props { lessonId: string; completed: boolean; xpReward: number }

export default function LessonCompleteButton({ lessonId, completed, xpReward }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [showXP, setShowXP] = useState(false)

  async function markComplete() {
    if (completed) return
    setLoading(true)
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { router.push('/login'); return }

    const { error } = await (supabase.from('user_lesson_progress') as any).upsert(
      { user_id: user.id, lesson_id: lessonId },
      { onConflict: 'user_id,lesson_id' }
    )

    if (!error) {
      await (supabase.rpc as any)('award_xp', { p_user_id: user.id, p_xp: xpReward })
      setShowXP(true)
      setTimeout(() => { setShowXP(false); router.refresh() }, 1500)
    }
    setLoading(false)
  }

  return (
    <div className="relative">
      <AnimatePresence>
        {showXP && (
          <motion.div
            initial={{ opacity: 0, y: 0 }} animate={{ opacity: 1, y: -40 }} exit={{ opacity: 0 }}
            className="absolute -top-2 right-0 flex items-center gap-1 text-cyan-400 font-black text-lg pointer-events-none"
          >
            <Zap className="w-5 h-5" />+{xpReward}
          </motion.div>
        )}
      </AnimatePresence>

      {completed ? (
        <div className="flex items-center gap-2 px-6 py-3 bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 rounded-xl text-sm font-semibold">
          <CheckCircle2 className="w-4 h-4" /> Completed!
        </div>
      ) : (
        <button onClick={markComplete} disabled={loading}
          className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 text-[#0d1117] rounded-xl text-sm font-bold transition-all"
        >
          {loading
            ? <span className="w-4 h-4 border-2 border-[#0d1117]/30 border-t-[#0d1117] rounded-full animate-spin" />
            : <><CheckCircle2 className="w-4 h-4" /> Mark Complete <ArrowRight className="w-4 h-4" /></>}
        </button>
      )}
    </div>
  )
}
