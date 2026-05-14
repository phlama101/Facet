'use client'

import { useState } from 'react'
import { notFound, useRouter } from 'next/navigation'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { LESSONS, LEARNING_PATHS } from '@/lessons/index'
import LessonRenderer from '@/components/lesson/LessonRenderer'
import LessonErrorBoundary from '@/components/lesson/LessonErrorBoundary'
import { BRAND } from '@/lib/brand'

interface Props {
  id: string
  isGuest?: boolean
}

function findNextLesson(currentId: string): { id: string; title: string } | null {
  for (const path of LEARNING_PATHS) {
    const allIds = path.chapters.flatMap(ch => ch.lessonIds)
    const idx = allIds.indexOf(currentId)
    if (idx !== -1 && idx < allIds.length - 1) {
      const nextId = allIds[idx + 1]
      const next = LESSONS[nextId]
      if (next) return { id: nextId, title: next.title }
    }
  }
  return null
}

export default function LessonClient({ id, isGuest = false }: Props) {
  const router = useRouter()
  const [saveError, setSaveError] = useState(false)
  const [saving, setSaving] = useState(false)
  const [pendingXp, setPendingXp] = useState<number | null>(null)
  const [pendingQuizScore, setPendingQuizScore] = useState<{ correct: number; total: number } | undefined>(undefined)

  const lesson = LESSONS[id]
  if (!lesson) notFound()

  const nextLesson = findNextLesson(id)

  async function saveProgress(xpEarned: number, quizScore?: { correct: number; total: number }): Promise<boolean> {
    // Guests have no session — skip the API call and let navigation proceed.
    if (isGuest) return true

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
      if (isGuest) {
        router.push('/learn')
      } else {
        router.refresh()
        router.push('/dashboard')
      }
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
          isGuest={isGuest}
        />
      </LessonErrorBoundary>
    </div>
  )
}
