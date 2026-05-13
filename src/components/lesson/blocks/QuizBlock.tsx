'use client'

import { useState, useRef, useEffect } from 'react'
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { BRAND } from '@/lib/brand'
import { useProgressStore } from '@/lib/progressStore'
import { QUIZ_PASSING_SCORE } from '@/lib/quiz'
import type { QuizSection } from '@/lessons/types'

interface Props {
  section: QuizSection
  sectionKey: string
  onComplete?: (correct: number, total: number) => void
}

export default function QuizBlock({ section, sectionKey, onComplete }: Props) {
  const [qIdx, setQIdx] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  const [answered, setAnswered] = useState<{ chosen: number; correct: boolean }[]>([])
  const [done, setDone] = useState(false)

  const processingRef = useRef(false)

  const { addXP, hasSectionXP } = useProgressStore()
  const xpPerQ = section.xpPerQuestion ?? 20
  const questions = section.questions
  const passMark = Math.ceil(questions.length * QUIZ_PASSING_SCORE)

  useEffect(() => {
    if (!done) return
    setAnswered(prev => {
      const correct = prev.filter(a => a.correct).length
      if (correct / questions.length >= QUIZ_PASSING_SCORE) {
        onComplete?.(correct, questions.length)
      }
      return prev
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done])

  function choose(idx: number) {
    if (processingRef.current) return
    processingRef.current = true

    const isCorrect = idx === questions[qIdx].correct
    const capturedQIdx = qIdx
    const isLast = capturedQIdx === questions.length - 1

    setSelected(idx)

    if (isCorrect && !hasSectionXP(`${sectionKey}-q${capturedQIdx}`)) {
      addXP(xpPerQ, `${sectionKey}-q${capturedQIdx}`)
    }

    setTimeout(() => {
      setAnswered(prev => [...prev, { chosen: idx, correct: isCorrect }])

      if (!isLast) {
        setQIdx(capturedQIdx + 1)
        setSelected(null)
      } else {
        setDone(true)
      }

      processingRef.current = false
    }, 1400)
  }

  function handleRetry() {
    setQIdx(0)
    setSelected(null)
    setAnswered([])
    setDone(false)
    processingRef.current = false
  }

  const totalCorrect = answered.filter(a => a.correct).length
  const current = questions[qIdx]

  if (done) {
    const passed = totalCorrect / questions.length >= QUIZ_PASSING_SCORE

    if (!passed) {
      return (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-5 text-center"
        >
          <div className="space-y-2">
            <p className="text-xs tracking-widest uppercase" style={{ color: BRAND.textSubtle }}>Quiz Result</p>
            <motion.p
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, type: 'spring', stiffness: 260, damping: 18 }}
              className="font-mono text-5xl font-bold"
              style={{ color: BRAND.ruby }}
            >
              {totalCorrect}/{questions.length}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-sm"
              style={{ color: BRAND.textDim }}
            >
              You need at least {passMark}/{questions.length} to pass.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="inline-block px-4 py-3 rounded-sm text-xs leading-relaxed"
            style={{ backgroundColor: `${BRAND.ruby}0d`, border: `1px solid ${BRAND.ruby}30`, color: BRAND.textDim }}
          >
            Review your notes and try again — no XP is awarded until you pass.
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleRetry}
            className="flex items-center gap-2 mx-auto px-6 py-2.5 rounded-sm text-xs font-semibold tracking-[0.12em] uppercase"
            style={{ backgroundColor: BRAND.surfaceHi, border: `1px solid ${BRAND.border}`, color: BRAND.text }}
          >
            <RotateCcw size={12} /> Try Again
          </motion.button>
        </motion.div>
      )
    }

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-4 text-center"
      >
        <div className="space-y-2">
          <p className="text-xs tracking-widest uppercase" style={{ color: BRAND.textSubtle }}>Quiz Passed</p>
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
            {totalCorrect === questions.length ? 'Perfect score!' : 'Nice work — lesson complete.'}
          </motion.p>
        </div>
      </motion.div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <p className="text-xs tracking-widest uppercase" style={{ color: BRAND.textSubtle }}>Quiz</p>
          <span className="text-[10px] font-mono px-1.5 py-0.5 rounded" style={{ color: BRAND.textSubtle, backgroundColor: BRAND.surfaceHi, border: `1px solid ${BRAND.border}` }}>
            Pass: {passMark}/{questions.length}
          </span>
        </div>
        <span className="text-xs font-mono" style={{ color: BRAND.textSubtle }}>
          {qIdx + 1} / {questions.length}
        </span>
      </div>

      <div className="h-[2px] rounded-full overflow-hidden" style={{ backgroundColor: BRAND.border }}>
        <motion.div
          className="h-full rounded-full"
          animate={{ width: `${(qIdx / questions.length) * 100}%` }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ backgroundColor: BRAND.accent, boxShadow: `0 0 8px ${BRAND.accent}80` }}
        />
      </div>

      <motion.h3
        key={qIdx}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="text-base font-semibold leading-snug"
        style={{ color: BRAND.text }}
      >
        {current.q}
      </motion.h3>

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
            if (isCorrect) { borderColor = BRAND.jade; bgColor = `${BRAND.jade}15`; textColor = BRAND.jade }
            else if (isSelected) { borderColor = BRAND.ruby; bgColor = `${BRAND.ruby}15`; textColor = BRAND.ruby }
            else { textColor = BRAND.textSubtle; bgColor = `${BRAND.surfaceHi}80` }
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
            <span className="font-semibold mr-1" style={{ color: selected === current.correct ? BRAND.jade : BRAND.ruby }}>
              {selected === current.correct ? 'Correct.' : 'Not quite.'}
            </span>
            {current.explain}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
