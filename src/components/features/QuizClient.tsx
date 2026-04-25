'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, XCircle, ArrowRight, Trophy, Zap, RotateCcw } from 'lucide-react'
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
  const progress = ((current) / totalQ) * 100

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
      // Calculate final score
      const finalAnswers = { ...answers, [q.id]: selected! }
      let correct = 0
      questions.forEach(qq => {
        if (finalAnswers[qq.id] === qq.correct_answer) correct++
      })
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
      results.score === 100 ? { label: 'Perfect!',    emoji: '🏆', color: 'text-amber-400' } :
      results.score >= 80   ? { label: 'Excellent!',  emoji: '⭐', color: 'text-cyan-400'  } :
      results.passed        ? { label: 'Well Done!',  emoji: '✅', color: 'text-emerald-400'} :
                              { label: 'Keep Going',  emoji: '💪', color: 'text-orange-400' }

    return (
      <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12 px-6 space-y-6">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.2, type: 'spring', stiffness: 200 }} className="text-7xl">
          {grade.emoji}
        </motion.div>
        <div>
          <h2 className={cn('text-4xl font-black mb-1', grade.color)}>{grade.label}</h2>
          <p className="text-[#8b949e]">{quizTitle}</p>
        </div>

        {/* Score ring */}
        <div className="relative w-36 h-36 mx-auto">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
            <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="8" />
            <motion.circle
              cx="60" cy="60" r="52" fill="none"
              stroke={results.passed ? '#06b6d4' : '#f97316'}
              strokeWidth="8" strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 52}`}
              initial={{ strokeDashoffset: 2 * Math.PI * 52 }}
              animate={{ strokeDashoffset: 2 * Math.PI * 52 * (1 - results.score / 100) }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.4 }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-[#e6edf3]">{results.score}%</span>
            <span className="text-xs text-[#8b949e]">Score</span>
          </div>
        </div>

        {/* XP earned */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500/15 border border-cyan-500/20 rounded-xl text-cyan-400 font-bold">
          <Zap className="w-4 h-4" />
          +{results.xpEarned} XP earned
        </motion.div>

        <div className="flex gap-3 justify-center pt-2">
          {!results.passed && (
            <button onClick={handleRetry} className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-[#e6edf3] rounded-xl font-semibold text-sm transition-colors">
              <RotateCcw className="w-4 h-4" /> Try Again
            </button>
          )}
          <a href="/courses" className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-[#0d1117] rounded-xl font-bold text-sm transition-colors">
            {results.passed ? 'Continue' : 'Back to Courses'}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    )
  }

  /* ── Quiz screen ────────────────────────────────────────── */
  return (
    <div className="space-y-8">
      {/* Progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-xs text-[#8b949e]">
          <span>Question {current + 1} of {totalQ}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400"
            initial={{ width: 0 }}
            animate={{ width: `${((current + (phase === 'feedback' ? 1 : 0)) / totalQ) * 100}%` }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div key={q.id} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.3 }}>
          <h2 className="text-xl md:text-2xl font-bold text-[#e6edf3] leading-snug">{q.question}</h2>
        </motion.div>
      </AnimatePresence>

      {/* Options */}
      <div className="grid gap-3">
        {q.options.map((opt, i) => {
          const letter = ['A', 'B', 'C', 'D'][i]
          const isSelected = selected === opt
          const isAnswer = opt === q.correct_answer

          let optStyle = 'bg-[#161b22] border-white/8 text-[#8b949e] hover:border-white/20 hover:text-[#e6edf3]'
          if (isSelected && phase === 'quiz') optStyle = 'bg-cyan-500/15 border-cyan-500/40 text-cyan-400'
          if (phase === 'feedback') {
            if (isAnswer) optStyle = 'bg-emerald-500/15 border-emerald-500/40 text-emerald-400'
            else if (isSelected && !isAnswer) optStyle = 'bg-red-500/15 border-red-500/40 text-red-400'
            else optStyle = 'bg-[#161b22] border-white/5 text-[#8b949e] opacity-50'
          }

          return (
            <motion.button
              key={opt}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              onClick={() => handleSelect(opt)}
              disabled={phase === 'feedback'}
              className={cn('w-full flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer disabled:cursor-default', optStyle)}
            >
              <span className={cn(
                'w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold shrink-0',
                phase === 'feedback' && isAnswer ? 'bg-emerald-500/20' : 'bg-white/5'
              )}>
                {phase === 'feedback' && isAnswer ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> :
                 phase === 'feedback' && isSelected && !isAnswer ? <XCircle className="w-4 h-4 text-red-400" /> :
                 letter}
              </span>
              <span className="text-sm font-medium leading-snug">{opt}</span>
            </motion.button>
          )
        })}
      </div>

      {/* Explanation */}
      <AnimatePresence>
        {phase === 'feedback' && q.explanation && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={cn(
              'p-4 rounded-xl border text-sm leading-relaxed',
              isCorrect
                ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-300'
                : 'bg-orange-500/10 border-orange-500/20 text-orange-300'
            )}
          >
            <span className="font-bold mr-2">{isCorrect ? '✓ Correct!' : '✗ Not quite.'}</span>
            {q.explanation}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action button */}
      <div className="flex justify-end">
        {phase === 'quiz' ? (
          <button
            onClick={handleConfirm}
            disabled={!selected}
            className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 disabled:cursor-not-allowed text-[#0d1117] rounded-xl font-bold text-sm transition-all"
          >
            Confirm Answer
          </button>
        ) : (
          <button onClick={handleNext} className="flex items-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-[#0d1117] rounded-xl font-bold text-sm transition-all">
            {current < totalQ - 1 ? 'Next Question' : 'See Results'}
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  )
}
