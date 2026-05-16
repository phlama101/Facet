'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { AlertTriangle, RefreshCw, Zap } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import { resolveIcon } from '@/lib/icon-map'
import { LESSONS, LEARNING_PATHS } from '@/lessons/index'
import type { DbLesson, DbSection, DbConceptSection } from '@/lib/lesson-store'
import type { Lesson, Section, ConceptSection } from '@/lessons/types'
import LessonViewer from '@/components/lesson/LessonViewer'

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

interface Props {
  dbLesson: DbLesson
  isGuest?: boolean
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

export default function DbLessonClient({ dbLesson, isGuest = false }: Props) {
  const router = useRouter()
  const [saveError, setSaveError] = useState<'auth' | 'network' | null>(null)
  const [saving, setSaving] = useState(false)
  const [pendingXp, setPendingXp] = useState<number | null>(null)
  const [xpConfirm, setXpConfirm] = useState<{ base: number; bonus: number } | null>(null)

  const lesson = hydrateLesson(dbLesson)
  const nextLesson = findNextLesson(dbLesson.id)

  async function saveProgress(xpEarned: number): Promise<boolean> {
    if (isGuest) return true
    setSaveError(null)
    setSaving(true)
    setPendingXp(xpEarned)
    try {
      const res = await fetch('/api/complete-lesson', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lessonId: dbLesson.id }),
      })
      if (res.status === 401) { setSaveError('auth'); setSaving(false); return false }
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json() as { ok: boolean; alreadyCompleted?: boolean; bonusXp?: number }
      if (!data.alreadyCompleted) {
        setXpConfirm({ base: xpEarned, bonus: data.bonusXp ?? 0 })
      }
      setSaving(false)
      return true
    } catch {
      setSaveError('network')
      setSaving(false)
      return false
    }
  }

  async function handleComplete(xpEarned: number) {
    if (await saveProgress(xpEarned)) {
      await new Promise(r => setTimeout(r, 800))
      window.location.href = '/dashboard'
    }
  }

  async function handleCompleteAndNext(xpEarned: number) {
    if (await saveProgress(xpEarned) && nextLesson) {
      await new Promise(r => setTimeout(r, 800))
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
          {saveError === 'auth' ? (
            <>
              <span className="text-sm">Sign in to save your progress.</span>
              <Link
                href={`/login?next=/learn/${dbLesson.id}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-[10px] tracking-[0.1em] uppercase font-semibold transition-opacity hover:opacity-80"
                style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
              >
                Sign in
              </Link>
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      )}

      {xpConfirm && (
        <div
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3 rounded-sm shadow-xl whitespace-nowrap"
          style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.gold}50`, color: BRAND.text }}
          role="status"
          aria-live="polite"
        >
          <Zap size={14} color={BRAND.gold} fill={BRAND.gold} className="shrink-0" />
          <span className="text-sm font-semibold" style={{ color: BRAND.gold }}>
            +{xpConfirm.base + xpConfirm.bonus} XP saved
          </span>
          {xpConfirm.bonus > 0 && (
            <span className="text-xs" style={{ color: BRAND.textDim }}>
              · +{xpConfirm.bonus} daily bonus
            </span>
          )}
        </div>
      )}

      <LessonViewer
        lesson={lesson}
        alreadyCompleted={false}
        onClose={() => router.push(isGuest ? '/learn' : '/dashboard')}
        onComplete={handleComplete}
        nextLesson={nextLesson ?? undefined}
        onCompleteAndNext={nextLesson ? handleCompleteAndNext : undefined}
      />
    </div>
  )
}
