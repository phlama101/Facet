'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import { resolveIcon } from '@/lib/icon-map'
import type { DbLesson, DbSection, DbConceptSection } from '@/lib/lesson-store'
import type { Lesson, Section, ConceptSection } from '@/lessons/types'
import LessonViewer from '@/components/lesson/LessonViewer'

interface Props {
  dbLesson: DbLesson
}

// Hydrate icon name strings in concept card sections back to LucideIcon components.
function hydrateSection(section: DbSection): Section {
  if (section.type !== 'concept') return section as Section
  const cs = section as DbConceptSection
  return {
    ...cs,
    cards: cs.cards?.map(card => ({
      ...card,
      icon: resolveIcon(card.icon),
    })),
  } as ConceptSection
}

function hydrateLesson(db: DbLesson): Lesson {
  return {
    id: db.id,
    title: db.title,
    track: db.track,
    trackName: db.trackName,
    level: db.level,
    duration: db.duration,
    xpReward: db.xpReward,
    description: db.description,
    sources: db.sources,
    sections: db.sections.map(hydrateSection),
  }
}

export default function DbLessonClient({ dbLesson }: Props) {
  const router = useRouter()
  const [saveError, setSaveError] = useState(false)
  const [saving, setSaving] = useState(false)
  const [pendingXp, setPendingXp] = useState<number | null>(null)

  const lesson = hydrateLesson(dbLesson)

  async function handleComplete(xpEarned: number) {
    setSaveError(false)
    setSaving(true)
    setPendingXp(xpEarned)
    try {
      const res = await fetch('/api/complete-lesson', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lessonId: dbLesson.id, xpReward: xpEarned }),
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

      <LessonViewer
        lesson={lesson}
        alreadyCompleted={false}
        onClose={() => router.back()}
        onComplete={handleComplete}
      />
    </div>
  )
}
