'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, ArrowRight, Zap, RotateCcw, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { QuizQuestion } from '@/types'

interface Props {
  questions: QuizQuestion[]
  quizTitle: string
  xpReward: number
  passingScore: number
  onComplete?: (score: number, passed: boolean) => void
}

type Phase = 'quiz' | 'feedback' | 'results'

export default function QuizClient({ questions, quizTitle, xpReward, passingScore, onComplete }: Props) {
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [selected, setSelected] = useState<string | null>(null)
  const [phase, setPhase] = useState<Phase>('quiz')
  const [results, setResults] = useState<{ score: number; passed: boolean; xpEarned: number } | null>(null)

  const q = questions[current]
  const totalQ = questions.length
  const progress = ((current + (phase === 'feedback' ? 1 : 0)) / totalQ) * 100

  function handleSelect(option: string) {
    if (phase === 'feedback') return
    setSelected(option)
  }

  function handleConfirm() {
    if (!selected) return
    setAnswers(prev => ({ ...prev, [q.id]: selected }))
    setPhase('feedback')
  }

  function handleNext() {
    if (current < totalQ - 1) {
      setCurrent(c => c + 1)
      setSelected(null)
      setPhase('quiz')
    } else {
      const finalAnswers = { ...answers, [q.id]: selected! }
      let correct = 0
      questions.forEach(qq => { if (finalAnswers[qq.id] === qq.correct_answer) correct++ })
      const score = Math.round((correct / totalQ) * 100)
      const passed = score >= passingScore
      const xpEarned = passed ? xpReward : Math.floor(xpReward * 0.2)
      setResults({ score, passed, xpEarned })
      setPhase('results')
      onComplete?.(score, passed)
    }
  }

  function handleRetry() {
    setCurrent(0)
    setAnswers({})
    setSelected(null)
    setPhase('quiz')
    setResults(null)
  }

  const isCorrect = phase === 'feedback' && selected === q?.correct_answer

  /* ── Results screen ─────────────────────────────────────── */
  if (phase === 'results' && results) {
    const grade =
      results.score === 100 ? { label: 'Perfect!',    emoji: '🏆', color: 'text-amber-400',  ring: '#f59e0b' } :
      results.score >= 80   ? { label: 'Excellent!',  emoji: '⭐', color: 'text-cyan-400',   ring: '#06b6d4' } :
      results.passed        ? { label: 'Well Done!',  emoji: '✅', color: 'text-emerald-400',ring: '#10b981' } :
                              { label: 'Keep Going',  emoji: '💪', color: 'text-orange-400', ring: '#f97316' }

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative text-center py-12 px-6 space-y-6 overflow-hidden"
      >
        {/* Confetti burst for passing scores */}
        {results.passed && (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            {[...Array(18)].map((_, i) => {
              const angle = (i / 18) * Math.PI * 2
              const dist = 140 + Math.random() * 80
              const colors = ['#06b6d4', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899']
              return (
                <motion.span
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 0 }}
                  animate={{
                    x: Math.cos(angle) * dist,
                    y: Math.sin(angle) * dist,
                    opacity: 0,
                    scale: 1,
                    rotate: Math.random() * 360,
                  }}
                  transition={{ duration: 1.4, delay: 0.3 + Math.random() * 0.2, ease: 'easeOut' }}
                  className="absolute w-2 h-2 rounded-sm"
                  style={{ background: colors[i % colors.length] }}
                />
              )
            })}
          </div>
        )}

        <motion.div
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 220, damping: 14 }}
          className="text-7xl drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]"
        >
          {grade.emoji}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
          <h2 className={cn('text-4xl font-black mb-1 tracking-tight', grade.color)}>{grade.label}</h2>
          <p className="text-[#8b949e]">{quizTitle}</p>
        </motion.div>

        {/* Score ring */}
        <div className="relative w-40 h-40 mx-auto">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
            <motion.circle
              cx="60" cy="60" r="52" fill="none"
              stroke={grade.ring}
              strokeWidth="8" strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 52}`}
              initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
              animate={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - results.score / 100) }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              style={{ filter: `drop-shadow(0 0 10px ${grade.ring}80)` }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-4xl font-black text-[#e6edf3] tabular-nums"
            >
              {results.score}%
            </motion.span>
            <span className="text-xs uppercase tracking-wider text-[#8b949e]">Score</span>
          </div>
        </div>

        {/* XP earned */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 1.1, type: 'spring', stiffness: 260, damping: 18 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500/15 to-cyan-400/10 border border-cyan-500/25 rounded-xl text-cyan-300 font-bold shadow-[0_0_24px_rgba(6,182,212,0.15)]"
        >
          <Zap className="w-4 h-4 fill-cyan-400" />
          +{results.xpEarned} XP earned
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25 }}
          className="flex gap-3 justify-center pt-2"
        >
          {!results.passed && (
            <motion.button
              onClick={handleRetry}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-[#e6edf3] rounded-xl font-semibold text-sm transition-colors"
            >
              <RotateCcw className="w-4 h-4" /> Try Again
            </motion.button>
          )}
          <motion.a
            href="/courses"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-[#0d1117] rounded-xl font-bold text-sm transition-colors shadow-[0_8px_24px_-8px_rgba(6,182,212,0.6)]"
          >
            {results.passed ? 'Continue' : 'Back to Courses'}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </motion.a>
        </motion.div>
      </motion.div>
    )
  }

  /* ── Quiz screen ────────────────────────────────────────── */
  return (
    <div className="space-y-8">
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-[#8b949e]">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            Question <span className="text-[#e6edf3] font-semibold">{current + 1}</span> of {totalQ}
          </span>
          <span className="tabular-nums">{Math.round(progress)}% complete</span>
        </div>
        <div className="relative h-1.5 rounded-full bg-white/5 overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{ boxShadow: '0 0 12px rgba(6,182,212,0.45)' }}
          />
          <motion.div
            className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '600%' }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={q.id}
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -28 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-[#e6edf3] leading-snug tracking-tight">{q.question}</h2>
        </motion.div>
      </AnimatePresence>

      {/* Options */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`opts-${q.id}`}
          className="grid gap-3"
          initial="hidden"
          animate="show"
          exit="hidden"
          variants={{
            hidden: { transition: { staggerChildren: 0.03 } },
            show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
          }}
        >
          {q.options.map((opt, i) => {
            const letter = ['A', 'B', 'C', 'D'][i]
            const isSelected = selected === opt
            const isAnswer = opt === q.correct_answer
            const isWrongPick = phase === 'feedback' && isSelected && !isAnswer

            let optStyle = 'bg-[#161b22] border-white/8 text-[#8b949e] hover:border-white/25 hover:bg-[#1c222b] hover:text-[#e6edf3]'
            if (isSelected && phase === 'quiz') optStyle = 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300 shadow-[0_0_0_4px_rgba(6,182,212,0.08)]'
            if (phase === 'feedback') {
              if (isAnswer) optStyle = 'bg-emerald-500/12 border-emerald-500/45 text-emerald-300 shadow-[0_0_0_4px_rgba(16,185,129,0.08)]'
              else if (isSelected && !isAnswer) optStyle = 'bg-red-500/10 border-red-500/40 text-red-300'
              else optStyle = 'bg-[#161b22] border-white/5 text-[#8b949e] opacity-40'
            }

            return (
              <motion.button
                key={opt}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={phase === 'quiz' ? { scale: 1.01, x: 2 } : undefined}
                whileTap={phase === 'quiz' ? { scale: 0.99 } : undefined}
                animate={isWrongPick ? { x: [0, -6, 6, -4, 4, 0] } : undefined}
                transition={isWrongPick ? { duration: 0.4 } : { type: 'spring', stiffness: 380, damping: 26 }}
                onClick={() => handleSelect(opt)}
                disabled={phase === 'feedback'}
                className={cn(
                  'relative w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-colors duration-200 cursor-pointer disabled:cursor-default',
                  optStyle
                )}
              >
                <span className={cn(
                  'w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold shrink-0 transition-colors',
                  phase === 'feedback' && isAnswer ? 'bg-emerald-500/25 text-emerald-300' :
                  phase === 'feedback' && isSelected && !isAnswer ? 'bg-red-500/25 text-red-300' :
                  isSelected && phase === 'quiz' ? 'bg-cyan-500/25 text-cyan-300' :
                  'bg-white/5 text-[#8b949e]'
                )}>
                  <AnimatePresence mode="wait" initial={false}>
                    {phase === 'feedback' && isAnswer ? (
                      <motion.span key="ok" initial={{ scale: 0, rotate: -90 }} animate={{ scale: 1, rotate: 0 }} transition={{ type: 'spring', stiffness: 400, damping: 18 }}>
                        <CheckCircle2 className="w-4 h-4" />
                      </motion.span>
                    ) : phase === 'feedback' && isSelected && !isAnswer ? (
                      <motion.span key="x" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 400, damping: 18 }}>
                        <XCircle className="w-4 h-4" />
                      </motion.span>
                    ) : (
                      <motion.span key={letter} initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                        {letter}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </span>
                <span className="text-sm font-medium leading-snug">{opt}</span>
              </motion.button>
            )
          })}
        </motion.div>
      </AnimatePresence>

      {/* Explanation */}
      <AnimatePresence>
        {phase === 'feedback' && q.explanation && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className={cn(
              'overflow-hidden p-4 rounded-xl border text-sm leading-relaxed',
              isCorrect
                ? 'bg-emerald-500/8 border-emerald-500/20 text-emerald-200'
                : 'bg-orange-500/8 border-orange-500/20 text-orange-200'
            )}
          >
            <span className="font-bold mr-2">{isCorrect ? '✓ Correct!' : '✗ Not quite.'}</span>
            {q.explanation}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action button */}
      <div className="flex justify-end">
        <AnimatePresence mode="wait">
          {phase === 'quiz' ? (
            <motion.button
              key="confirm"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              whileHover={!selected ? undefined : { scale: 1.03 }}
              whileTap={!selected ? undefined : { scale: 0.97 }}
              onClick={handleConfirm}
              disabled={!selected}
              className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed text-[#0d1117] rounded-xl font-bold text-sm transition-colors shadow-[0_8px_24px_-8px_rgba(6,182,212,0.6)] disabled:shadow-none"
            >
              Confirm Answer
            </motion.button>
          ) : (
            <motion.button
              key="next"
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleNext}
              className="group flex items-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-[#0d1117] rounded-xl font-bold text-sm transition-colors shadow-[0_8px_24px_-8px_rgba(6,182,212,0.6)]"
            >
              {current < totalQ - 1 ? 'Next Question' : 'See Results'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
