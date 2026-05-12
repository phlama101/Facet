'use client'

import { useState } from 'react'
import { notFound, useRouter } from 'next/navigation'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { LESSONS } from '@/lessons/index'
import LessonRenderer from '@/components/lesson/LessonRenderer'
import { BRAND } from '@/lib/brand'

interface Props {
  id: string
}

export default function LessonClient({ id }: Props) {
  const router = useRouter()
  const [saveError, setSaveError] = useState(false)
  const [saving, setSaving] = useState(false)
  const [pendingXp, setPendingXp] = useState<number | null>(null)

  const lesson = LESSONS[id]

  if (!lesson) notFound()

  async function handleComplete(xpEarned: number) {
    setSaveError(false)
    setSaving(true)
    setPendingXp(xpEarned)
    try {
      const res = await fetch('/api/complete-lesson', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lessonId: lesson.id, xpReward: xpEarned }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      router.push('/dashboard')
    } catch {
      setSaveError(true)
      setSaving(false)
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

      <LessonRenderer
        lesson={lesson}
        onClose={() => router.back()}
        onComplete={handleComplete}
      />
    </div>
  )
}
