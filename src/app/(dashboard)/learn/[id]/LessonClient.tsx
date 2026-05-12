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

export default function LessonClient({ id }: Props) {
  const router = useRouter()
  const [saveError, setSaveError] = useState(false)
  const [saving, setSaving] = useState(false)
  const [pendingXp, setPendingXp] = useState<number | null>(null)

  const lesson = LESSONS[id]

  if (!lesson) notFound()

  const nextLesson = findNextLesson(id)

  async function saveProgress(xpEarned: number): Promise<boolean> {
    setSaveError(false)
    setSaving(true)
    setPendingXp(xpEarned)
    try {
      const res = await fetch('/api/complete-lesson', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lessonId: lesson.id }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      return true
    } catch {
      setSaveError(true)
      setSaving(false)
      return false
    }
  }

  async function handleComplete(xpEarned: number) {
    if (await saveProgress(xpEarned)) {
      router.refresh()
      router.push('/dashboard')
    }
  }

  async function handleCompleteAndNext(xpEarned: number) {
    if (await saveProgress(xpEarned) && nextLesson) {
      router.push(`/learn/${nextLesson.id}`)
    }
  }

  async function retry() {
    if (pendingXp !== null) await handleComplete(pendingXp)
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
        />
      </LessonErrorBoundary>
    </div>
  )
}
