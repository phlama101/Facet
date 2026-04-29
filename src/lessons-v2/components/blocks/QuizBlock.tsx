'use client'

import { useState } from 'react'
import { CheckCircle2, XCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { BRAND } from '@/lib/brand'
import { useProgressStore } from '@/lessons-v2/store/progressStore'
import type { V2QuizSection } from '@/lessons-v2/types'

interface Props {
  section: V2QuizSection
  sectionKey: string
  onComplete?: (correct: number, total: number) => void
}

export default function QuizBlock({ section, sectionKey, onComplete }: Props) {
  const [qIdx, setQIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answered, setAnswered] = useState<{ chosen: number; correct: boolean }[]>([])
  const [done, setDone] = useState(false)
  const { addXP, hasSectionXP } = useProgressStore()

  const xpPerQ = section.xpPerQuestion ?? 20
  const questions = section.questions
  const current = questions[qIdx]
  const totalCorrect = answered.filter((a) => a.correct).length

  function choose(i: number) {
    if (selected !== null) return
    const correct = i === current.correct
    setSelected(i)
    const newAnswered = [...answered, { chosen: i, correct }]
    if (correct && !hasSectionXP(`${sectionKey}-q${qIdx}`)) {
      addXP(xpPerQ, `${sectionKey}-q${qIdx}`)
    }

    setTimeout(() => {
      if (qIdx < questions.length - 1) {
        setQIdx(qIdx + 1)
        setSelected(null)
        setAnswered(newAnswered)
      } else {
        setAnswered(newAnswered)
        setDone(true)
        const finalCorrect = newAnswered.filter((a) => a.correct).length
        onComplete?.(finalCorrect, questions.length)
      }
    }, 1400)
  }

  if (done) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-4 text-center"
      >
        <div className="space-y-2">
          <p className="text-xs tracking-widest uppercase" style={{ color: BRAND.textSubtle }}>Quiz Complete</p>
          <motion.p
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 18 }}
            className="font-mono text-5xl font-bold"
            style={{ color: totalCorrect === questions.length ? BRAND.jade : BRAND.gold }}
          >
            {totalCorrect}/{questions.length}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-sm"
            style={{ color: BRAND.textDim }}
          >
            {totalCorrect === questions.length ? 'Perfect score!' : `+${totalCorrect * xpPerQ} XP earned`}
          </motion.p>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs tracking-widest uppercase"
          style={{ color: BRAND.textSubtle }}
        >
          Quiz
        </motion.p>
        <span className="text-xs font-mono" style={{ color: BRAND.textSubtle }}>
          {qIdx + 1} / {questions.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-[2px] rounded-full overflow-hidden" style={{ backgroundColor: BRAND.border }}>
        <motion.div
          className="h-full rounded-full"
          animate={{ width: `${(qIdx / questions.length) * 100}%` }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ backgroundColor: BRAND.accent, boxShadow: `0 0 8px ${BRAND.accent}80` }}
        />
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.h3
          key={qIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-base font-semibold leading-snug"
          style={{ color: BRAND.text }}
        >
          {current.q}
        </motion.h3>
      </AnimatePresence>

      {/* Answers */}
      <AnimatePresence mode="wait">
        <motion.div
          key={qIdx}
          className="space-y-2"
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } } }}
        >
          {current.a.map((answer, i) => {
            const isSelected = selected === i
            const isCorrect = i === current.correct
            const isWrongPick = selected !== null && isSelected && !isCorrect

            let borderColor: string = BRAND.border
            let bgColor: string = BRAND.surfaceHi
            let textColor: string = BRAND.textDim

            if (selected !== null) {
              if (isCorrect) {
                borderColor = BRAND.jade
                bgColor = `${BRAND.jade}15`
                textColor = BRAND.jade
              } else if (isSelected && !isCorrect) {
                borderColor = BRAND.ruby
                bgColor = `${BRAND.ruby}15`
                textColor = BRAND.ruby
              } else {
                textColor = BRAND.textSubtle
                bgColor = `${BRAND.surfaceHi}80`
              }
            }

            return (
              <motion.button
                key={i}
                variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { ease: [0.16, 1, 0.3, 1] } } }}
                onClick={() => choose(i)}
                disabled={selected !== null}
                animate={isWrongPick ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
                transition={isWrongPick ? { duration: 0.4 } : { type: 'spring', stiffness: 380, damping: 26 }}
                whileHover={selected === null ? { x: 3 } : undefined}
                whileTap={selected === null ? { scale: 0.99 } : undefined}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-sm transition-colors disabled:cursor-default"
                style={{ border: `1px solid ${borderColor}`, backgroundColor: bgColor, color: textColor }}
              >
                <span
                  className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono border"
                  style={{ borderColor, color: textColor }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    {selected !== null && isCorrect ? (
                      <motion.span key="ok" initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 400, damping: 18 }}>
                        <CheckCircle2 size={14} />
                      </motion.span>
                    ) : selected !== null && isSelected ? (
                      <motion.span key="x" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 400, damping: 18 }}>
                        <XCircle size={14} />
                      </motion.span>
                    ) : (
                      <motion.span key={`letter-${i}`} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                        {String.fromCharCode(65 + i)}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
                {answer}
              </motion.button>
            )
          })}
        </motion.div>
      </AnimatePresence>

      {/* Explanation */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -6 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-lg p-4 text-sm leading-relaxed overflow-hidden"
            style={{
              backgroundColor: selected === current.correct ? `${BRAND.jade}10` : `${BRAND.ruby}10`,
              border: `1px solid ${selected === current.correct ? `${BRAND.jade}33` : `${BRAND.ruby}33`}`,
              color: BRAND.textDim,
            }}
          >
            <span
              className="font-semibold mr-1"
              style={{ color: selected === current.correct ? BRAND.jade : BRAND.ruby }}
            >
              {selected === current.correct ? 'Correct.' : 'Not quite.'}
            </span>
            {current.explain}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
