'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { notFound, useRouter } from 'next/navigation'
import { AlertTriangle, RefreshCw, Zap } from 'lucide-react'
import { LESSONS, LEARNING_PATHS } from '@/lessons/index'
import LessonRenderer from '@/components/lesson/LessonRenderer'
import LessonErrorBoundary from '@/components/lesson/LessonErrorBoundary'
import { BRAND } from '@/lib/brand'
import { useLiveProfileStore } from '@/lib/liveProfileStore'

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
  const [saveError, setSaveError] = useState<'auth' | 'network' | null>(null)
  const [saving, setSaving] = useState(false)
  const [pendingXp, setPendingXp] = useState<number | null>(null)
  const [pendingQuizScore, setPendingQuizScore] = useState<{ correct: number; total: number } | undefined>(undefined)
  const [xpConfirm, setXpConfirm] = useState<{ base: number; bonus: number } | null>(null)
  const savePromiseRef = useRef<Promise<boolean> | null>(null)
  const updateLiveProfile = useLiveProfileStore(s => s.update)

  const lesson = LESSONS[id]
  if (!lesson) notFound()

  const nextLesson = findNextLesson(id)

  async function saveProgress(xpEarned: number, quizScore?: { correct: number; total: number }): Promise<boolean> {
    // Guests have no session — skip the API call and let navigation proceed.
    if (isGuest) return true

    setSaveError(null)
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
      if (res.status === 401) { setSaveError('auth'); setSaving(false); return false }
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data = await res.json() as { ok: boolean; alreadyCompleted?: boolean; bonusXp?: number; newXp?: number; newLevel?: number; newStreak?: number }
      if (!data.alreadyCompleted) {
        setXpConfirm({ base: xpEarned, bonus: data.bonusXp ?? 0 })
        if (data.newXp !== undefined && data.newLevel !== undefined && data.newStreak !== undefined) {
          updateLiveProfile(data.newXp, data.newLevel, data.newStreak)
        }
      }
      setSaving(false)
      return true
    } catch {
      setSaveError('network')
      setSaving(false)
      savePromiseRef.current = null
      return false
    }
  }

  function handleQuizPass(xpEarned: number, quizScore: { correct: number; total: number }) {
    if (isGuest || savePromiseRef.current) return
    savePromiseRef.current = saveProgress(xpEarned, quizScore)
  }

  async function handleComplete(xpEarned: number, quizScore?: { correct: number; total: number }) {
    const result = savePromiseRef.current
      ? await savePromiseRef.current
      : await saveProgress(xpEarned, quizScore)
    savePromiseRef.current = null
    if (result) {
      if (isGuest) {
        router.push('/learn')
      } else {
        await new Promise(r => setTimeout(r, 800))
        window.location.href = '/dashboard'
      }
    }
  }

  async function handleCompleteAndNext(xpEarned: number, quizScore?: { correct: number; total: number }) {
    const result = savePromiseRef.current
      ? await savePromiseRef.current
      : await saveProgress(xpEarned, quizScore)
    savePromiseRef.current = null
    if (result && nextLesson) {
      await new Promise(r => setTimeout(r, 800))
      router.push(`/learn/${nextLesson.id}`)
    }
  }

  async function handleCompleteAndGoTo(xpEarned: number, quizScore: { correct: number; total: number } | undefined, lessonId: string) {
    const result = savePromiseRef.current
      ? await savePromiseRef.current
      : await saveProgress(xpEarned, quizScore)
    savePromiseRef.current = null
    if (result) {
      await new Promise(r => setTimeout(r, 800))
      router.push(`/learn/${lessonId}`)
    }
  }

  async function retry() {
    if (pendingXp !== null) await handleComplete(pendingXp, pendingQuizScore)
  }

  return (
    <div className="relative">
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
                href={`/login?next=/learn/${lesson.id}`}
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

      <LessonErrorBoundary>
        <LessonRenderer
          lesson={lesson}
          onClose={() => router.push(isGuest ? '/learn' : '/dashboard')}
          onComplete={handleComplete}
          nextLesson={nextLesson ?? undefined}
          onCompleteAndNext={nextLesson ? handleCompleteAndNext : undefined}
          onCompleteAndGoTo={handleCompleteAndGoTo}
          onQuizPass={handleQuizPass}
          isGuest={isGuest}
        />
      </LessonErrorBoundary>
    </div>
  )
}
