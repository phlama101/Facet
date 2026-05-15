'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CheckCircle, ChevronRight, Brain } from 'lucide-react'
import { BRAND } from '@/lib/brand'

type ReviewCard = {
  id: string
  lessonId: string
  lessonTitle: string
  trackName: string
  questionIndex: number
  intervalDays: number
  reviewCount: number
  q: string
  a: [string, string, string, string]
  correct: number
  explain: string
}

export default function ReviewClient() {
  const [cards, setCards] = useState<ReviewCard[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [sessionStats, setSessionStats] = useState({ correct: 0, wrong: 0 })
  const [done, setDone] = useState(false)

  useEffect(() => {
    fetch('/api/review/due')
      .then(r => r.json())
      .then(data => {
        setCards(data.cards ?? [])
        setTotal(data.total ?? 0)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const card = cards[currentIndex]
  const revealed = selectedAnswer !== null

  function handleSelect(idx: number) {
    if (revealed) return
    setSelectedAnswer(idx)
  }

  function handleNext() {
    if (!card || selectedAnswer === null) return
    const isCorrect = selectedAnswer === card.correct

    fetch('/api/review/answer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cardId: card.id, correct: isCorrect }),
    }).catch(() => {})

    setSessionStats(prev => ({
      correct: prev.correct + (isCorrect ? 1 : 0),
      wrong:   prev.wrong   + (isCorrect ? 0 : 1),
    }))

    if (currentIndex >= cards.length - 1) {
      setDone(true)
    } else {
      setCurrentIndex(i => i + 1)
      setSelectedAnswer(null)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <div
          className="w-5 h-5 rounded-full border-2 animate-spin"
          style={{ borderColor: `${BRAND.accent}30`, borderTopColor: BRAND.accent }}
        />
      </div>
    )
  }

  if (!loading && cards.length === 0) {
    return (
      <div className="max-w-lg mx-auto flex flex-col items-center py-20 text-center gap-5">
        <div
          className="w-14 h-14 rounded-sm flex items-center justify-center"
          style={{ backgroundColor: `${BRAND.jade}15`, border: `1px solid ${BRAND.jade}30` }}
        >
          <CheckCircle size={24} color={BRAND.jade} />
        </div>
        <div>
          <div className="font-serif text-2xl mb-2" style={{ color: BRAND.text }}>
            {total === 0 ? 'No cards yet' : 'All caught up'}
          </div>
          <div className="text-sm leading-relaxed" style={{ color: BRAND.textDim }}>
            {total === 0
              ? 'Complete lessons to unlock review cards. Quiz questions from every lesson you finish are added to your review deck.'
              : 'No cards are due right now. Keep learning and check back tomorrow.'}
          </div>
        </div>
        <Link
          href="/learn"
          className="px-5 py-2.5 rounded-sm text-xs font-semibold tracking-[0.1em] uppercase transition-opacity hover:opacity-80"
          style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
        >
          Continue Learning
        </Link>
      </div>
    )
  }

  if (done) {
    const reviewedCount = sessionStats.correct + sessionStats.wrong
    const pct = reviewedCount > 0 ? Math.round((sessionStats.correct / reviewedCount) * 100) : 0
    return (
      <div className="max-w-lg mx-auto flex flex-col items-center py-16 text-center gap-6">
        <div
          className="w-16 h-16 rounded-sm flex items-center justify-center"
          style={{ backgroundColor: `${BRAND.accent}15`, border: `1px solid ${BRAND.accent}30` }}
        >
          <Brain size={28} color={BRAND.accent} />
        </div>
        <div>
          <div className="font-serif text-2xl mb-1" style={{ color: BRAND.text }}>Session complete</div>
          <div className="text-sm" style={{ color: BRAND.textDim }}>{reviewedCount} card{reviewedCount !== 1 ? 's' : ''} reviewed</div>
        </div>

        <div
          className="flex gap-10 px-8 py-5 rounded-sm w-full justify-center"
          style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
        >
          <div className="flex flex-col items-center gap-1">
            <div className="text-2xl font-mono font-bold" style={{ color: BRAND.jade }}>{sessionStats.correct}</div>
            <div className="text-[10px] tracking-[0.1em] uppercase" style={{ color: BRAND.textSubtle }}>Correct</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="text-2xl font-mono font-bold" style={{ color: BRAND.coral }}>{sessionStats.wrong}</div>
            <div className="text-[10px] tracking-[0.1em] uppercase" style={{ color: BRAND.textSubtle }}>Wrong</div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="text-2xl font-mono font-bold" style={{ color: BRAND.accent }}>{pct}%</div>
            <div className="text-[10px] tracking-[0.1em] uppercase" style={{ color: BRAND.textSubtle }}>Accuracy</div>
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            href="/dashboard"
            className="px-5 py-2.5 rounded-sm text-xs font-semibold tracking-[0.1em] uppercase"
            style={{ border: `1px solid ${BRAND.borderHi}`, color: BRAND.text }}
          >
            Dashboard
          </Link>
          <Link
            href="/learn"
            className="px-5 py-2.5 rounded-sm text-xs font-semibold tracking-[0.1em] uppercase transition-opacity hover:opacity-80"
            style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
          >
            Continue Learning
          </Link>
        </div>
      </div>
    )
  }

  if (!card) return null

  const isCorrect = selectedAnswer === card.correct

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain size={14} color={BRAND.accent} />
          <span className="text-[10px] tracking-[0.2em] uppercase" style={{ color: BRAND.textSubtle }}>
            Spaced Review
          </span>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-1.5 w-32 rounded-full overflow-hidden" style={{ backgroundColor: BRAND.surface }}>
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${(currentIndex / cards.length) * 100}%`,
                backgroundColor: BRAND.accent,
              }}
            />
          </div>
          <span className="text-[10px] font-mono tabular-nums" style={{ color: BRAND.textSubtle }}>
            {currentIndex + 1} / {cards.length}
          </span>
        </div>
      </div>

      {/* Card */}
      <div
        className="rounded-sm p-6"
        style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
      >
        <div
          className="text-[10px] tracking-[0.15em] uppercase mb-4"
          style={{ color: BRAND.textSubtle }}
        >
          {card.trackName} · {card.lessonTitle}
          {card.reviewCount > 0 && (
            <span className="ml-2 font-mono" style={{ color: `${BRAND.textSubtle}80` }}>
              reviewed {card.reviewCount}×
            </span>
          )}
        </div>

        <p className="text-base font-medium leading-relaxed mb-6" style={{ color: BRAND.text }}>
          {card.q}
        </p>

        <div className="space-y-2">
          {card.a.map((option, idx) => {
            let borderColor: string = BRAND.border
            let bgColor: string = 'transparent'
            let textColor: string = BRAND.textDim
            let labelColor: string = BRAND.textSubtle

            if (!revealed) {
              textColor = BRAND.text
            } else if (idx === card.correct) {
              borderColor = BRAND.jade
              bgColor = `${BRAND.jade}12`
              textColor = BRAND.jade
              labelColor = BRAND.jade
            } else if (idx === selectedAnswer) {
              borderColor = BRAND.ruby
              bgColor = `${BRAND.ruby}12`
              textColor = BRAND.ruby
              labelColor = BRAND.ruby
            } else {
              textColor = BRAND.textSubtle
              labelColor = `${BRAND.textSubtle}60`
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={revealed}
                className="w-full flex items-start gap-3 px-4 py-3 rounded-sm text-left text-sm transition-colors"
                style={{ border: `1px solid ${borderColor}`, backgroundColor: bgColor, color: textColor }}
              >
                <span
                  className="font-mono text-[11px] mt-0.5 shrink-0 w-4"
                  style={{ color: labelColor }}
                >
                  {['A', 'B', 'C', 'D'][idx]}
                </span>
                <span className="leading-snug">{option}</span>
              </button>
            )
          })}
        </div>

        {revealed && (
          <div
            className="mt-4 px-4 py-3 rounded-sm text-xs leading-relaxed"
            style={{
              backgroundColor: isCorrect ? `${BRAND.jade}10` : `${BRAND.coral}10`,
              border: `1px solid ${isCorrect ? `${BRAND.jade}25` : `${BRAND.coral}25`}`,
              color: BRAND.textDim,
            }}
          >
            <span className="font-semibold" style={{ color: isCorrect ? BRAND.jade : BRAND.coral }}>
              {isCorrect ? 'Correct. ' : 'Incorrect. '}
            </span>
            {card.explain}
          </div>
        )}
      </div>

      {/* Action */}
      {revealed && (
        <div className="flex items-center justify-between">
          <Link
            href={`/learn/${card.lessonId}`}
            className="text-[11px] tracking-wider"
            style={{ color: BRAND.textSubtle }}
          >
            Review lesson →
          </Link>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-semibold tracking-[0.1em] uppercase transition-opacity hover:opacity-80"
            style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
          >
            {currentIndex < cards.length - 1 ? 'Next Card' : 'Finish'} <ChevronRight size={12} />
          </button>
        </div>
      )}
    </div>
  )
}
