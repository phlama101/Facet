'use client'

import { useState } from 'react'
import { Check, X, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { QuizSection } from '@/lessons/types'

interface SectionQuizProps {
  section: QuizSection
  onComplete: (correct: number, total: number) => void
}

export default function SectionQuiz({ section, onComplete }: SectionQuizProps) {
  const [index, setIndex]     = useState(0)
  const [answer, setAnswer]   = useState<number | null>(null)
  const [correct, setCorrect] = useState(0)

  const q        = section.questions[index]
  const total    = section.questions.length
  const answered = answer !== null
  const isRight  = answer === q.correct
  const isLast   = index === total - 1

  function handleAnswer(i: number) {
    if (answered) return
    setAnswer(i)
    if (i === q.correct) setCorrect(c => c + 1)
  }

  function handleNext() {
    if (index < total - 1) {
      setIndex(index + 1)
      setAnswer(null)
    } else {
      onComplete(correct, total)
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: BRAND.accent }}>
          Checkpoint
        </div>
        <div className="font-mono text-xs" style={{ color: BRAND.textSubtle }}>
          {index + 1}
          <span className="mx-1" style={{ color: BRAND.border }}>/</span>
          {total}
        </div>
      </div>

      {/* Segmented progress — answered = jade, current = accent, remaining = border */}
      <div className="flex gap-1 mb-8">
        {section.questions.map((_, i) => (
          <div
            key={i}
            className="flex-1 h-[3px] rounded-full"
            style={{
              backgroundColor:
                i < index  ? BRAND.jade
                : i === index ? BRAND.accent
                : BRAND.border,
            }}
          />
        ))}
      </div>

      {/* Question */}
      <h2
        className="font-serif mb-7"
        style={{ fontSize: 'clamp(20px, 2.8vw, 27px)', lineHeight: 1.25 }}
      >
        {q.q}
      </h2>

      {/* Answer choices */}
      <div className="space-y-2">
        {q.a.map((option, i) => {
          const isCorrectOption  = i === q.correct
          const isSelectedOption = answer === i
          const dimmed = answered && !isCorrectOption && !isSelectedOption

          // Dynamic styles per state
          let borderColor: string = BRAND.border
          let bgColor: string     = BRAND.surface
          let badgeBg: string     = BRAND.surfaceHi
          let badgeColor: string  = BRAND.textSubtle
          let textColor: string   = BRAND.text

          if (answered) {
            if (isCorrectOption) {
              borderColor = BRAND.jade
              bgColor     = `${BRAND.jade}12`
              badgeBg     = BRAND.jade
              badgeColor  = BRAND.bg
              textColor   = BRAND.jade
            } else if (isSelectedOption) {
              borderColor = BRAND.ruby
              bgColor     = `${BRAND.ruby}12`
              badgeBg     = BRAND.ruby
              badgeColor  = BRAND.bg
              textColor   = BRAND.ruby
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={answered}
              className="w-full text-left flex items-center gap-3 px-4 py-3.5 rounded-sm"
              style={{
                backgroundColor: bgColor,
                border: `1px solid ${borderColor}`,
                cursor: answered ? 'default' : 'pointer',
                opacity: dimmed ? 0.4 : 1,
                transition: 'opacity 0.15s',
              }}
            >
              {/* Letter badge */}
              <div
                className="w-6 h-6 rounded-sm flex items-center justify-center text-[11px] font-mono font-bold shrink-0"
                style={{ backgroundColor: badgeBg, color: badgeColor, transition: 'background-color 0.15s' }}
              >
                {String.fromCharCode(65 + i)}
              </div>

              <span className="text-sm flex-1 leading-snug" style={{ color: textColor, transition: 'color 0.15s' }}>
                {option}
              </span>

              {answered && isCorrectOption  && <Check size={15} color={BRAND.jade} className="shrink-0" />}
              {answered && isSelectedOption && !isCorrectOption && <X size={15} color={BRAND.ruby} className="shrink-0" />}
            </button>
          )
        })}
      </div>

      {/* Explanation panel */}
      {answered && (
        <div
          className="mt-5 rounded-sm overflow-hidden"
          style={{
            border: `1px solid ${isRight ? BRAND.jade : BRAND.ruby}40`,
            borderLeft: `3px solid ${isRight ? BRAND.jade : BRAND.ruby}`,
          }}
        >
          {/* Status bar */}
          <div
            className="px-4 py-2.5 flex items-center gap-2"
            style={{ backgroundColor: `${isRight ? BRAND.jade : BRAND.ruby}12` }}
          >
            {isRight
              ? <Check size={13} color={BRAND.jade} />
              : <X size={13} color={BRAND.ruby} />
            }
            <span
              className="text-xs font-semibold tracking-[0.12em] uppercase"
              style={{ color: isRight ? BRAND.jade : BRAND.ruby }}
            >
              {isRight ? 'Correct' : 'Not quite'}
            </span>
          </div>

          {/* Explanation text */}
          <div className="px-4 py-4" style={{ backgroundColor: BRAND.surface }}>
            <p className="text-sm leading-[1.7]" style={{ color: BRAND.textDim }}>
              {q.explain}
            </p>
            <button
              onClick={handleNext}
              className="mt-4 w-full py-2.5 rounded-sm text-xs font-semibold tracking-[0.15em] uppercase flex items-center justify-center gap-2 transition-opacity hover:opacity-80"
              style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
            >
              {isLast
                ? <><Check size={12} /> Finish Quiz</>
                : <>Next Question <ArrowRight size={12} /></>
              }
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
