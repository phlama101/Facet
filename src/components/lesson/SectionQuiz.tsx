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
  const [index, setIndex]   = useState(0)
  const [answer, setAnswer] = useState<number | null>(null)
  const [correct, setCorrect] = useState(0)

  const q = section.questions[index]
  const total = section.questions.length
  const answered = answer !== null

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
      onComplete(answer === q.correct ? correct + 1 : correct, total)
    }
  }

  const isLast = index === total - 1

  return (
    <div>
      <div
        className="text-[10px] tracking-[0.25em] uppercase mb-3"
        style={{ color: BRAND.accent }}
      >
        Checkpoint · Question {index + 1} of {total}
      </div>

      {/* Progress pips */}
      <div className="flex gap-1 mb-6">
        {section.questions.map((_, i) => (
          <div
            key={i}
            className="flex-1 h-1 rounded-full transition-colors"
            style={{ backgroundColor: i <= index ? BRAND.accent : BRAND.border }}
          />
        ))}
      </div>

      <h2
        className="font-serif mb-6"
        style={{ fontSize: 'clamp(22px, 3vw, 28px)', lineHeight: 1.2 }}
      >
        {q.q}
      </h2>

      <div className="space-y-2">
        {q.a.map((option, i) => {
          const isCorrect = i === q.correct
          const isSelected = answer === i
          const show = answered

          return (
            <button
              key={i}
              onClick={() => handleAnswer(i)}
              disabled={show}
              className="w-full text-left px-4 py-3.5 rounded-sm flex items-center justify-between text-sm transition-all"
              style={{
                backgroundColor: show && isCorrect
                  ? 'rgba(127,194,155,0.15)'
                  : show && isSelected
                  ? 'rgba(226,91,110,0.15)'
                  : BRAND.surface,
                border: `1px solid ${
                  show && isCorrect ? BRAND.jade
                  : show && isSelected ? BRAND.ruby
                  : BRAND.border
                }`,
                color: show && isCorrect ? BRAND.jade
                  : show && isSelected ? BRAND.ruby
                  : BRAND.text,
                cursor: show ? 'default' : 'pointer',
              }}
            >
              <span className="flex items-center gap-3">
                <span className="font-mono text-[10px]" style={{ color: BRAND.textSubtle }}>
                  {String.fromCharCode(65 + i)}
                </span>
                {option}
              </span>
              {show && isCorrect  && <Check size={16} />}
              {show && isSelected && !isCorrect && <X size={16} />}
            </button>
          )
        })}
      </div>

      {answered && (
        <div
          className="mt-5 p-4 rounded-sm"
          style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
        >
          <div
            className="text-[10px] tracking-[0.2em] uppercase mb-2"
            style={{ color: answer === q.correct ? BRAND.jade : BRAND.coral }}
          >
            {answer === q.correct ? 'Correct' : 'Not quite'}
          </div>
          <p className="text-sm leading-relaxed" style={{ color: BRAND.text }}>
            {q.explain}
          </p>
          <button
            onClick={handleNext}
            className="mt-4 w-full py-3 rounded-sm text-xs font-semibold tracking-[0.15em] uppercase flex items-center justify-center gap-2 transition-opacity hover:opacity-80"
            style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
          >
            {isLast ? <>Finish Quiz <Check size={12} /></> : <>Next Question <ArrowRight size={12} /></>}
          </button>
        </div>
      )}
    </div>
  )
}
