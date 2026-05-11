'use client'

import { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import { TRACK_MAP } from '@/lessons/index'
import type { Lesson } from '@/lessons/types'
import FacetBackground from '@/components/brand/FacetBackground'
import FacetLogo from '@/components/brand/FacetLogo'
import SectionIntro from './SectionIntro'
import SectionConcept from './SectionConcept'
import SectionVisualization from './SectionVisualization'
import SectionTheory from './SectionTheory'
import SectionCaseStudy from './SectionCaseStudy'
import SectionDataLab from './SectionDataLab'
import SectionQuiz from './SectionQuiz'
import LessonComplete from './LessonComplete'

interface LessonViewerProps {
  lesson: Lesson
  alreadyCompleted: boolean
  onClose: () => void
  onComplete: (xpEarned: number) => void
}

export default function LessonViewer({
  lesson,
  alreadyCompleted,
  onClose,
  onComplete,
}: LessonViewerProps) {
  const [sectionIdx, setSectionIdx] = useState(0)
  const [done, setDone]             = useState(false)
  const [quizResult, setQuizResult] = useState<{ correct: number; total: number } | null>(null)

  const track = TRACK_MAP[lesson.track]
  const sections = lesson.sections
  const total = sections.length
  const cur = sections[sectionIdx]
  const progress = ((sectionIdx + 1) / total) * 100

  let conceptCount = 0

  function goNext() { if (sectionIdx < total - 1) setSectionIdx(sectionIdx + 1) }
  function goPrev() { if (sectionIdx > 0) setSectionIdx(sectionIdx - 1) }

  function handleQuizComplete(correct: number, totalQ: number) {
    setQuizResult({ correct, total: totalQ })
    setDone(true)
  }

  function handleSave() {
    const xpEarned = alreadyCompleted
      ? Math.floor(lesson.xpReward * 0.25)
      : lesson.xpReward
    onComplete(xpEarned)
  }

  // Count concept sections before current for numbering
  for (let i = 0; i < sectionIdx; i++) {
    if (sections[i].type === 'concept') conceptCount++
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
        style={{
          borderColor: BRAND.border,
          backgroundColor: 'rgba(14,15,20,0.9)',
        }}
      >
        <div className="max-w-3xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            aria-label="Exit lesson"
            className="flex items-center gap-2 text-xs tracking-wider uppercase transition-opacity hover:opacity-70"
            style={{ color: BRAND.textDim }}
          >
            <ArrowLeft size={14} /> Exit
          </button>

          <div className="flex-1 max-w-xs">
            <div
              role="progressbar"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Lesson progress: section ${sectionIdx + 1} of ${total}`}
              className="h-[3px] rounded-full overflow-hidden"
              style={{ backgroundColor: BRAND.border }}
            >
              <div
                className="h-full transition-all duration-500"
                style={{ width: `${progress}%`, backgroundColor: track.color }}
              />
            </div>
          </div>

          <div
            className="text-[10px] tracking-[0.2em] uppercase font-mono"
            style={{ color: BRAND.textSubtle }}
          >
            {sectionIdx + 1} / {total}
          </div>
        </div>
      </div>

      <main className="relative z-10 max-w-3xl mx-auto px-5 py-8 md:py-12">
        {/* Lesson header */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <track.icon size={14} color={track.color} />
            <span
              className="text-[10px] tracking-[0.25em] uppercase"
              style={{ color: track.color }}
            >
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
          {!done && cur.type === 'intro' && (
            <SectionIntro section={cur} />
          )}
          {!done && cur.type === 'concept' && (
            <SectionConcept section={cur} sectionNumber={conceptCount + 1} />
          )}
          {!done && cur.type === 'visualization' && (
            <SectionVisualization section={cur} />
          )}
          {!done && cur.type === 'theory' && (
            <SectionTheory section={cur} />
          )}
          {!done && cur.type === 'case-study' && (
            <SectionCaseStudy section={cur} />
          )}
          {!done && cur.type === 'data-lab' && (
            <SectionDataLab section={cur} />
          )}
          {!done && cur.type === 'quiz' && (
            <SectionQuiz section={cur} onComplete={handleQuizComplete} />
          )}
          {done && quizResult && (
            <LessonComplete
              lesson={lesson}
              correctCount={quizResult.correct}
              totalQuestions={quizResult.total}
              xpEarned={alreadyCompleted ? Math.floor(lesson.xpReward * 0.25) : lesson.xpReward}
              alreadyCompleted={alreadyCompleted}
              onSave={handleSave}
            />
          )}
        </div>

        {/* Prev / Next nav (not shown on quiz or complete screen) */}
        {!done && cur.type !== 'quiz' && (
          <div
            className="flex items-center justify-between pt-6 border-t"
            style={{ borderColor: BRAND.border }}
          >
            <button
              onClick={goPrev}
              disabled={sectionIdx === 0}
              aria-label="Previous section"
              className="flex items-center gap-2 text-xs tracking-[0.12em] uppercase px-4 py-2 rounded-sm disabled:opacity-30 transition-opacity"
              style={{ color: BRAND.textDim }}
            >
              <ArrowLeft size={12} /> Previous
            </button>
            <button
              onClick={goNext}
              aria-label="Continue to next section"
              className="flex items-center gap-2 text-xs font-semibold tracking-[0.12em] uppercase px-5 py-2.5 rounded-sm transition-opacity hover:opacity-80"
              style={{ backgroundColor: track.color, color: BRAND.bg }}
            >
              {(({ quiz: 'To Quiz', theory: 'To Theory', 'case-study': 'To Case Study', 'data-lab': 'To Data Lab', visualization: 'To Visualization' } as Record<string, string>)[sections[sectionIdx + 1]?.type ?? '']) ?? 'Continue'}
              <ArrowRight size={12} />
            </button>
          </div>
        )}
      </main>
    </div>
  )
}
