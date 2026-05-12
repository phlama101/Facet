'use client'

import { useState } from 'react'
import { Zap, CheckCircle2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { BRAND } from '@/lib/brand'
import { useProgressStore } from '@/lib/progressStore'
import type { ChallengeSection } from '@/lessons/types'
import InteractionRenderer from '@/components/interactions/InteractionRenderer'

interface Props { section: ChallengeSection; sectionKey: string }

export default function ChallengeBlock({ section, sectionKey }: Props) {
  const [claimed, setClaimed] = useState(false)
  const { addXP, hasSectionXP } = useProgressStore()

  const xp = section.xpReward ?? 75
  const alreadyClaimed = hasSectionXP(sectionKey)
  const isDone = alreadyClaimed || claimed

  function claimXP() {
    if (isDone) return
    addXP(xp, sectionKey)
    setClaimed(true)
  }

  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <motion.p
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="text-xs tracking-widest uppercase"
          style={{ color: BRAND.gold }}
        >
          Challenge
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif"
          style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', lineHeight: 1.15, color: BRAND.text }}
        >
          {section.title}
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.14 }}
        className="rounded-xl p-5 relative overflow-hidden"
        style={{ backgroundColor: `${BRAND.gold}0D`, border: `1px solid ${BRAND.gold}33` }}
      >
        <motion.span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-amber-300/10 to-transparent skew-x-12"
          animate={{ x: ['-100%', '400%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
        />
        <p className="text-sm leading-relaxed" style={{ color: BRAND.textDim }}>
          {section.prompt}
        </p>
      </motion.div>

      {section.interaction && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.22 }}
        >
          <InteractionRenderer interaction={section.interaction} />
        </motion.div>
      )}

      <motion.button
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.28 }}
        onClick={claimXP}
        disabled={isDone}
        whileHover={isDone ? undefined : { scale: 1.02 }}
        whileTap={isDone ? undefined : { scale: 0.98 }}
        className="flex items-center justify-center gap-2 w-full py-3 rounded-lg text-sm font-semibold tracking-wider uppercase relative overflow-hidden"
        style={{
          backgroundColor: BRAND.gold,
          color: BRAND.bg,
          opacity: isDone ? 0.7 : 1,
          boxShadow: isDone ? 'none' : `0 8px 24px -8px ${BRAND.gold}80`,
        }}
      >
        <AnimatePresence mode="wait">
          {isDone ? (
            <motion.span
              key="done"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-2"
            >
              <CheckCircle2 size={14} /> +{xp} XP Earned
            </motion.span>
          ) : (
            <motion.span
              key="cta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2"
            >
              <Zap size={14} /> Complete Challenge · +{xp} XP
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  )
}
