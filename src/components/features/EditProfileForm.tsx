'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Save, Check } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'

const AVATAR_COLORS = ['#06b6d4','#f97316','#10b981','#8b5cf6','#f59e0b','#ef4444','#3b82f6','#ec4899']

interface Props { currentDisplayName: string; currentBio: string; currentColor: string }

export default function EditProfileForm({ currentDisplayName, currentBio, currentColor }: Props) {
  const router = useRouter()
  const [displayName, setDisplayName] = useState(currentDisplayName)
  const [bio, setBio] = useState(currentBio)
  const [color, setColor] = useState(currentColor)
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)

  async function save(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    await (supabase.from('profiles') as any).update({ display_name: displayName, bio, avatar_color: color }).eq('id', user.id)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
    setLoading(false)
    router.refresh()
  }

  return (
    <form onSubmit={save} className="space-y-5">
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider">Display Name</label>
        <input
          value={displayName}
          onChange={e => setDisplayName(e.target.value)}
          className="w-full bg-white/[0.04] border border-white/8 focus:border-cyan-500/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-cyan-500/20 focus:outline-none text-[#e6edf3] placeholder-[#8b949e] rounded-xl px-4 py-3 text-sm transition-all duration-200"
        />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider">Bio</label>
        <textarea
          value={bio}
          onChange={e => setBio(e.target.value)}
          rows={3}
          placeholder="Tell us about your interest in earth sciences..."
          className="w-full bg-white/[0.04] border border-white/8 focus:border-cyan-500/60 focus:bg-white/[0.06] focus:ring-2 focus:ring-cyan-500/20 focus:outline-none text-[#e6edf3] placeholder-[#8b949e] rounded-xl px-4 py-3 text-sm transition-all duration-200 resize-none"
        />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider">Avatar Color</label>
        <div className="flex flex-wrap gap-2.5">
          {AVATAR_COLORS.map(c => {
            const active = color === c
            return (
              <motion.button
                key={c}
                type="button"
                onClick={() => setColor(c)}
                whileHover={{ scale: 1.18, y: -2 }}
                whileTap={{ scale: 0.92 }}
                animate={{ scale: active ? 1.15 : 1 }}
                transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                className={cn(
                  'relative w-9 h-9 rounded-full border-2 transition-shadow',
                  active ? 'shadow-[0_0_18px_rgba(255,255,255,0.4)]' : 'shadow-none'
                )}
                style={{ background: c, borderColor: active ? '#fff' : 'transparent' }}
                aria-label={`Select avatar color ${c}`}
              >
                <AnimatePresence>
                  {active && (
                    <motion.span
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                      className="absolute inset-0 flex items-center justify-center text-[#0d1117]"
                    >
                      <Check className="w-4 h-4" strokeWidth={3} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            )
          })}
        </div>
      </div>

      <motion.button
        type="submit"
        disabled={loading}
        whileHover={loading ? undefined : { scale: 1.02 }}
        whileTap={loading ? undefined : { scale: 0.98 }}
        className={cn(
          'group relative flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold overflow-hidden',
          'bg-cyan-500 hover:bg-cyan-400 text-[#0d1117]',
          'shadow-[0_8px_24px_-8px_rgba(6,182,212,0.6)]',
          'disabled:opacity-60 disabled:cursor-not-allowed transition-colors'
        )}
      >
        <span aria-hidden className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[900ms] ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        <AnimatePresence mode="wait">
          {saved ? (
            <motion.span
              key="saved"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative flex items-center gap-2"
            >
              <Check className="w-4 h-4" strokeWidth={3} /> Saved!
            </motion.span>
          ) : loading ? (
            <motion.span
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-4 h-4 border-2 border-[#0d1117]/30 border-t-[#0d1117] rounded-full animate-spin"
            />
          ) : (
            <motion.span
              key="default"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative flex items-center gap-2"
            >
              <Save className="w-4 h-4" /> Save Changes
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </form>
  )
}
