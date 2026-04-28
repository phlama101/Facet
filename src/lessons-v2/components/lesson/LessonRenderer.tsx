'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight, Zap } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import { TRACK_MAP } from '@/lessons/index'
import { useProgressStore } from '@/lessons-v2/store/progressStore'
import type { LessonV2 } from '@/lessons-v2/types'
import FacetBackground from '@/components/brand/FacetBackground'
import SectionRenderer from './SectionRenderer'

interface Props {
  lesson: LessonV2
  onClose: () => void
  onComplete: (xpEarned: number) => void
}

export default function LessonRenderer({ lesson, onClose, onComplete }: Props) {
  const [sectionIdx, setSectionIdx] = useState(0)
  const [quizDone, setQuizDone] = useState(false)
  const [quizResult, setQuizResult] = useState<{ correct: number; total: number } | null>(null)

  const { xp: sessionXP, reset } = useProgressStore()

  const track = TRACK_MAP[lesson.track as keyof typeof TRACK_MAP]
  const trackColor = track?.color ?? BRAND.accent
  const sections = lesson.sections
  const total = sections.length
  const cur = sections[sectionIdx]
  const progress = ((sectionIdx + 1) / total) * 100

  const isLastSection = sectionIdx === total - 1
  const isQuizSection = cur?.type === 'quiz'
  const showNav = !isQuizSection && !(isLastSection && quizDone)

  function goNext() {
    if (sectionIdx < total - 1) setSectionIdx(sectionIdx + 1)
  }
  function goPrev() {
    if (sectionIdx > 0) setSectionIdx(sectionIdx - 1)
  }

  function handleQuizComplete(correct: number, total: number) {
    setQuizResult({ correct, total })
    setQuizDone(true)
  }

  function handleFinish() {
    const totalXP = sessionXP + lesson.xpReward
    onComplete(totalXP)
    reset()
  }

  const nextLabel: Record<string, string> = {
    concept: 'Concept',
    visualization: 'Visualization',
    lab: 'Lab',
    challenge: 'Challenge',
    quiz: 'Quiz',
    intro: 'Intro',
  }

  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: BRAND.bg, color: BRAND.text, fontFamily: 'var(--font-sans)' }}
    >
      <FacetBackground />

      {/* Sticky top bar */}
      <div
        className="relative z-10 border-b sticky top-0 backdrop-blur-sm"
        style={{ borderColor: BRAND.border, backgroundColor: 'rgba(14,15,20,0.9)' }}
      >
        <div className="max-w-3xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-xs tracking-wider uppercase transition-opacity hover:opacity-70"
            style={{ color: BRAND.textDim }}
          >
            <ArrowLeft size={14} /> Exit
          </button>

          {/* Progress bar */}
          <div className="flex-1 max-w-xs">
            <div className="h-[3px] rounded-full overflow-hidden" style={{ backgroundColor: BRAND.border }}>
              <div
                className="h-full transition-all duration-500"
                style={{ width: `${progress}%`, backgroundColor: trackColor }}
              />
            </div>
          </div>

          {/* Session XP */}
          <div className="flex items-center gap-1 text-[10px] font-mono tracking-widest" style={{ color: BRAND.gold }}>
            <Zap size={10} />
            {sessionXP} XP
          </div>

          <div className="text-[10px] tracking-[0.2em] uppercase font-mono" style={{ color: BRAND.textSubtle }}>
            {sectionIdx + 1} / {total}
          </div>
        </div>
      </div>

      <main className="relative z-10 max-w-3xl mx-auto px-5 py-8 md:py-12">
        {/* Lesson header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            {track?.icon && <track.icon size={14} color={trackColor} />}
            <span className="text-[10px] tracking-[0.25em] uppercase" style={{ color: trackColor }}>
              {lesson.trackName} · {lesson.level}
            </span>
          </div>
          <h1
            className="font-serif"
            style={{ fontSize: 'clamp(32px, 5vw, 48px)', lineHeight: 1.05 }}
          >
            {lesson.title}
          </h1>
        </div>

        {/* Section content */}
        <div className="mb-12">
          {!quizDone && (
            <SectionRenderer
              section={cur}
              sectionIndex={sectionIdx}
              lessonId={lesson.id}
              onQuizComplete={handleQuizComplete}
            />
          )}

          {/* Lesson complete screen */}
          {quizDone && quizResult && (
            <div className="text-center space-y-6 py-8">
              <div
                className="inline-flex items-center justify-center w-20 h-20 rounded-full"
                style={{ backgroundColor: `${trackColor}1A` }}
              >
                <Zap size={36} color={trackColor} />
              </div>
              <div className="space-y-2">
                <h2 className="font-serif text-3xl" style={{ color: BRAND.text }}>
                  Lesson Complete
                </h2>
                <p className="text-sm" style={{ color: BRAND.textDim }}>
                  Quiz: {quizResult.correct}/{quizResult.total} correct
                </p>
              </div>
              <div
                className="inline-block px-6 py-4 rounded-xl"
                style={{ backgroundColor: BRAND.surfaceHi, border: `1px solid ${BRAND.border}` }}
              >
                <p className="text-xs uppercase tracking-widest mb-1" style={{ color: BRAND.textSubtle }}>
                  Total XP Earned
                </p>
                <p className="text-4xl font-mono font-bold" style={{ color: trackColor }}>
                  +{sessionXP + lesson.xpReward}
                </p>
              </div>
              <button
                onClick={handleFinish}
                className="flex items-center gap-2 mx-auto px-8 py-3 rounded-lg text-sm font-semibold tracking-wider uppercase transition-opacity hover:opacity-80"
                style={{ backgroundColor: trackColor, color: BRAND.bg }}
              >
                Save & Continue <ArrowRight size={14} />
              </button>
            </div>
          )}
        </div>

        {/* Navigation */}
        {showNav && (
          <div
            className="flex items-center justify-between pt-6 border-t"
            style={{ borderColor: BRAND.border }}
          >
            <button
              onClick={goPrev}
              disabled={sectionIdx === 0}
              className="flex items-center gap-2 text-xs tracking-[0.12em] uppercase px-4 py-2 rounded-sm disabled:opacity-30 transition-opacity"
              style={{ color: BRAND.textDim }}
            >
              <ArrowLeft size={12} /> Previous
            </button>
            <button
              onClick={goNext}
              disabled={isLastSection}
              className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase px-5 py-2.5 rounded-sm transition-opacity hover:opacity-80 disabled:opacity-30"
              style={{ backgroundColor: trackColor, color: BRAND.bg }}
            >
              {sections[sectionIdx + 1]
                ? `To ${nextLabel[sections[sectionIdx + 1].type] ?? 'Next'}`
                : 'Continue'}
              <ArrowRight size={12} />
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
