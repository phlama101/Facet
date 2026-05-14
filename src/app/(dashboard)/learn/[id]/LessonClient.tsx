'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import LessonRenderer from '@/components/lesson/LessonRenderer'
import LessonErrorBoundary from '@/components/lesson/LessonErrorBoundary'
import { BRAND } from '@/lib/brand'
import type { Lesson } from '@/lessons/types'

interface Props {
  lesson: Lesson
  nextLesson: { id: string; title: string } | null
}

export default function LessonClient({ lesson, nextLesson }: Props) {
  const router = useRouter()
  const [saveError, setSaveError] = useState(false)
  const [saving, setSaving] = useState(false)
  const [pendingXp, setPendingXp] = useState<number | null>(null)
  const [pendingQuizScore, setPendingQuizScore] = useState<{ correct: number; total: number } | undefined>(undefined)

  async function saveProgress(xpEarned: number, quizScore?: { correct: number; total: number }): Promise<boolean> {
    setSaveError(false)
    setSaving(true)
    setPendingXp(xpEarned)
    setPendingQuizScore(quizScore)
    try {
      const body: Record<string, unknown> = { lessonId: lesson.id }
      if (quizScore) {
        body.quizCorrect = quizScore.correct
        body.quizTotal = quizScore.total
      }
      const res = await fetch('/api/complete-lesson', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return true
    } catch {
      setSaveError(true)
      setSaving(false)
      return false
    }
  }

  async function handleComplete(xpEarned: number, quizScore?: { correct: number; total: number }) {
    if (await saveProgress(xpEarned, quizScore)) {
      router.refresh()
      router.push('/dashboard')
    }
  }

  async function handleCompleteAndNext(xpEarned: number, quizScore?: { correct: number; total: number }) {
    if (await saveProgress(xpEarned, quizScore) && nextLesson) {
      router.push(`/learn/${nextLesson.id}`)
    }
  }

  async function handleCompleteAndGoTo(xpEarned: number, quizScore: { correct: number; total: number } | undefined, lessonId: string) {
    if (await saveProgress(xpEarned, quizScore)) {
      router.push(`/learn/${lessonId}`)
    }
  }

  async function retry() {
    if (pendingXp !== null) await handleComplete(pendingXp, pendingQuizScore)
  }

  return (
    <div className="relative">
      {saveError && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-sm shadow-xl whitespace-nowrap"
          style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.ruby}40`, color: BRAND.text }}
          role="alert"
          aria-live="assertive"
        >
          <AlertTriangle size={14} color={BRAND.ruby} className="shrink-0" />
          <span className="text-sm">Couldn&apos;t save progress — check your connection.</span>
          <button
            onClick={retry}
            disabled={saving}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-[10px] tracking-[0.1em] uppercase font-semibold transition-opacity hover:opacity-80 disabled:opacity-50"
            style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
            aria-label="Retry saving progress"
          >
            <RefreshCw size={10} className={saving ? 'animate-spin' : ''} />
            {saving ? 'Saving…' : 'Retry'}
          </button>
        </div>
      )}

      <LessonErrorBoundary>
        <LessonRenderer
          lesson={lesson}
          onClose={() => router.back()}
          onComplete={handleComplete}
          nextLesson={nextLesson ?? undefined}
          onCompleteAndNext={nextLesson ? handleCompleteAndNext : undefined}
          onCompleteAndGoTo={handleCompleteAndGoTo}
        />
      </LessonErrorBoundary>
    </div>
  )
}
