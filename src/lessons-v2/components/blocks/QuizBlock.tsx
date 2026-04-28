'use client'

import { useState } from 'react'
import { CheckCircle2, XCircle } from 'lucide-react'
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
        const correct = newAnswered.filter((a) => a.correct).length
        onComplete?.(correct, questions.length)
      }
    }, 1400)
  }

  if (done) {
    return (
      <div className="space-y-6 text-center">
        <div className="space-y-2">
          <p className="text-xs tracking-widest uppercase" style={{ color: BRAND.textSubtle }}>
            Quiz Complete
          </p>
          <p
            className="font-mono text-5xl font-bold"
            style={{ color: totalCorrect === questions.length ? BRAND.jade : BRAND.gold }}
          >
            {totalCorrect}/{questions.length}
          </p>
          <p className="text-sm" style={{ color: BRAND.textDim }}>
            {totalCorrect === questions.length
              ? 'Perfect score!'
              : `+${totalCorrect * xpPerQ} XP earned`}
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-xs tracking-widest uppercase" style={{ color: BRAND.textSubtle }}>
          Quiz
        </p>
        <span className="text-xs font-mono" style={{ color: BRAND.textSubtle }}>
          {qIdx + 1} / {questions.length}
        </span>
      </div>

      {/* Progress bar */}
      <div className="h-[2px] rounded-full" style={{ backgroundColor: BRAND.border }}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${((qIdx) / questions.length) * 100}%`, backgroundColor: BRAND.accent }}
        />
      </div>

      <h3 className="text-base font-semibold leading-snug" style={{ color: BRAND.text }}>
        {current.q}
      </h3>

      <div className="space-y-2">
        {current.a.map((answer, i) => {
          const isSelected = selected === i
          const isCorrect = i === current.correct
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
            }
          }

          return (
            <button
              key={i}
              onClick={() => choose(i)}
              disabled={selected !== null}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-sm transition-all disabled:cursor-default"
              style={{ border: `1px solid ${borderColor}`, backgroundColor: bgColor, color: textColor }}
            >
              <span
                className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono border"
                style={{ borderColor, color: textColor }}
              >
                {selected !== null && isCorrect ? (
                  <CheckCircle2 size={14} />
                ) : selected !== null && isSelected ? (
                  <XCircle size={14} />
                ) : (
                  String.fromCharCode(65 + i)
                )}
              </span>
              {answer}
            </button>
          )
        })}
      </div>

      {selected !== null && (
        <div
          className="rounded-lg p-4 text-sm leading-relaxed"
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
        </div>
      )}
    </div>
  )
}
