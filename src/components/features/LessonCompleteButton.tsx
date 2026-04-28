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
  const [burst, setBurst] = useState(false)

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
      setBurst(true)
      setTimeout(() => { setBurst(false); router.refresh() }, 1600)
    }
    setLoading(false)
  }

  return (
    <div className="relative inline-block">
      {/* Floating XP popup */}
      <AnimatePresence>
        {burst && (
          <motion.div
            initial={{ opacity: 0, y: 0, scale: 0.8 }}
            animate={{ opacity: 1, y: -52, scale: 1 }}
            exit={{ opacity: 0, y: -72 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="absolute left-1/2 -translate-x-1/2 -top-2 flex items-center gap-1 text-cyan-300 font-black text-xl pointer-events-none drop-shadow-[0_2px_8px_rgba(6,182,212,0.6)]"
          >
            <Zap className="w-5 h-5 fill-cyan-400" />+{xpReward}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Particle burst */}
      <AnimatePresence>
        {burst && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            {[...Array(10)].map((_, i) => {
              const angle = (i / 10) * Math.PI * 2
              const dist = 60 + Math.random() * 30
              return (
                <motion.span
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                  animate={{ x: Math.cos(angle) * dist, y: Math.sin(angle) * dist, opacity: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  className="absolute w-1.5 h-1.5 rounded-full bg-cyan-400"
                  style={{ boxShadow: '0 0 6px rgba(6,182,212,0.8)' }}
                />
              )
            })}
          </div>
        )}
      </AnimatePresence>

      {completed ? (
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 380, damping: 22 }}
          className="flex items-center gap-2 px-6 py-3 bg-emerald-500/12 border border-emerald-500/25 text-emerald-300 rounded-xl text-sm font-semibold shadow-[0_0_20px_-8px_rgba(16,185,129,0.5)]"
        >
          <CheckCircle2 className="w-4 h-4" /> Completed!
        </motion.div>
      ) : (
        <motion.button
          onClick={markComplete}
          disabled={loading}
          whileHover={loading ? undefined : { scale: 1.03 }}
          whileTap={loading ? undefined : { scale: 0.97 }}
          className="group relative flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed text-[#0d1117] rounded-xl text-sm font-bold transition-colors shadow-[0_8px_24px_-8px_rgba(6,182,212,0.6)] overflow-hidden"
        >
          <span aria-hidden className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms] ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          {loading ? (
            <span className="w-4 h-4 border-2 border-[#0d1117]/30 border-t-[#0d1117] rounded-full animate-spin" />
          ) : (
            <>
              <CheckCircle2 className="w-4 h-4" />
              <span className="relative">Mark Complete</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </>
          )}
        </motion.button>
      )}
    </div>
  )
}
