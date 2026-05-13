'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Zap, X } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import { ACHIEVEMENTS, RARITY_LABEL, type Achievement } from '@/lib/achievements'

const STORAGE_KEY = 'facet_seen_achievements'
const DISPLAY_MS  = 4000

interface Props {
  unlockedIds: string[]
}

export default function AchievementNotifier({ unlockedIds }: Props) {
  const [queue, setQueue] = useState<Achievement[]>([])
  const [visible, setVisible] = useState<Achievement | null>(null)

  useEffect(() => {
    try {
      const seen: string[] = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
      const newIds = unlockedIds.filter(id => !seen.includes(id))
      if (!newIds.length) return

      localStorage.setItem(STORAGE_KEY, JSON.stringify(unlockedIds))

      const newAchs = newIds
        .map(id => ACHIEVEMENTS.find(a => a.id === id))
        .filter((a): a is Achievement => Boolean(a))

      setQueue(newAchs)
    } catch { /* localStorage blocked */ }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (visible || !queue.length) return
    const [next, ...rest] = queue
    setVisible(next)
    setQueue(rest)
  }, [visible, queue])

  useEffect(() => {
    if (!visible) return
    const t = setTimeout(() => setVisible(null), DISPLAY_MS)
    return () => clearTimeout(t)
  }, [visible])

  return (
    <div className="fixed bottom-24 sm:bottom-6 right-4 z-[100] pointer-events-none">
      <AnimatePresence>
        {visible && (
          <motion.div
            key={visible.id}
            initial={{ opacity: 0, y: 20, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 340, damping: 24 }}
            className="pointer-events-auto flex items-start gap-3 px-4 py-3.5 rounded-sm shadow-2xl max-w-[280px]"
            style={{
              backgroundColor: BRAND.surface,
              border: `1px solid ${visible.color}50`,
              boxShadow: `0 0 32px ${visible.color}20`,
            }}
          >
            <div
              className="shrink-0 w-9 h-9 rounded-sm flex items-center justify-center mt-0.5"
              style={{ backgroundColor: `${visible.color}18`, border: `1px solid ${visible.color}40` }}
            >
              <Zap size={16} color={visible.color} fill={visible.color} />
            </div>

            <div className="flex-1 min-w-0">
              <div className="text-[9px] tracking-[0.2em] uppercase font-mono mb-0.5" style={{ color: visible.color }}>
                Achievement Unlocked · {RARITY_LABEL[visible.rarity]}
              </div>
              <div className="text-sm font-semibold leading-tight" style={{ color: BRAND.text }}>
                {visible.name}
              </div>
              <div className="text-[11px] mt-0.5 leading-snug" style={{ color: BRAND.textDim }}>
                {visible.desc}
              </div>
              <div className="text-[10px] font-mono mt-1.5" style={{ color: visible.color }}>
                +{visible.xpBonus} XP bonus
              </div>
            </div>

            <button
              onClick={() => setVisible(null)}
              className="shrink-0 p-0.5 mt-0.5 transition-opacity hover:opacity-60"
              style={{ color: BRAND.textSubtle }}
            >
              <X size={12} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
