'use client'

import { useState } from 'react'
import { CheckCircle2, ChevronDown, ChevronUp, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { BRAND } from '@/lib/brand'
import { useProgressStore } from '@/lib/progressStore'
import type { LabSection } from '@/lessons/types'
import InteractionRenderer from '@/components/interactions/InteractionRenderer'

interface Props { section: LabSection; sectionKey: string }

export default function LabBlock({ section, sectionKey }: Props) {
  const [completed, setCompleted] = useState<Set<number>>(new Set())
  const [openHints, setOpenHints] = useState<Set<number>>(new Set())
  const [claimed, setClaimed] = useState(false)
  const { addXP, hasSectionXP } = useProgressStore()

  const xp = section.xpReward ?? 50
  const allDone = completed.size === section.steps.length
  const alreadyClaimed = hasSectionXP(sectionKey)

  function toggle(i: number) {
    setCompleted((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  function toggleHint(i: number) {
    setOpenHints((prev) => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })
  }

  function claimXP() {
    if (alreadyClaimed || claimed) return
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
          style={{ color: BRAND.jade }}
        >
          Lab
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

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.12 }}
        className="text-sm leading-relaxed"
        style={{ color: BRAND.textDim }}
      >
        {section.premise}
      </motion.p>

      {section.interaction && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.18 }}
        >
          <InteractionRenderer interaction={section.interaction} />
        </motion.div>
      )}

      {/* Steps */}
      <motion.div
        className="space-y-3"
        initial="hidden"
        animate="show"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } } }}
      >
        {section.steps.map((step, i) => {
          const done = completed.has(i)
          const hintOpen = openHints.has(i)
          return (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { ease: [0.16, 1, 0.3, 1] } } }}
              className="rounded-lg overflow-hidden"
              style={{ border: `1px solid ${done ? BRAND.jade : BRAND.border}`, backgroundColor: done ? `${BRAND.jade}0D` : BRAND.surfaceHi }}
            >
              <div className="flex items-start gap-3 p-4">
                <motion.button
                  onClick={() => toggle(i)}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="mt-0.5 shrink-0 transition-colors"
                  style={{ color: done ? BRAND.jade : BRAND.border }}
                >
                  <motion.div animate={{ scale: done ? [1, 1.3, 1] : 1 }} transition={{ duration: 0.35 }}>
                    <CheckCircle2 size={18} />
                  </motion.div>
                </motion.button>
                <div className="flex-1 space-y-2">
                  <motion.p
                    animate={{ color: done ? BRAND.textDim : BRAND.text }}
                    className="text-sm leading-relaxed"
                    style={{ textDecoration: done ? 'line-through' : 'none' }}
                  >
                    <span className="font-mono text-xs mr-2" style={{ color: BRAND.textSubtle }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {step.instruction}
                  </motion.p>

                  {step.hint && (
                    <motion.button
                      onClick={() => toggleHint(i)}
                      whileHover={{ x: 2 }}
                      className="flex items-center gap-1 text-xs transition-opacity hover:opacity-80"
                      style={{ color: BRAND.gold }}
                    >
                      {hintOpen ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
                      {hintOpen ? 'Hide hint' : 'Show hint'}
                    </motion.button>
                  )}

                  <AnimatePresence>
                    {hintOpen && step.hint && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xs leading-relaxed pl-3 border-l overflow-hidden"
                        style={{ color: BRAND.gold, borderColor: `${BRAND.gold}40` }}
                      >
                        {step.hint}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      {/* XP claim */}
      <AnimatePresence>
        {allDone && (
          <motion.button
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            onClick={claimXP}
            disabled={alreadyClaimed || claimed}
            whileHover={alreadyClaimed || claimed ? undefined : { scale: 1.02 }}
            whileTap={alreadyClaimed || claimed ? undefined : { scale: 0.98 }}
            className="w-full py-3 rounded-lg text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2 disabled:opacity-70"
            style={{ backgroundColor: BRAND.jade, color: BRAND.bg, boxShadow: `0 8px 24px -8px ${BRAND.jade}80` }}
          >
            <Zap size={14} />
            {alreadyClaimed || claimed ? `✓ +${xp} XP Earned` : `Claim +${xp} XP`}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
