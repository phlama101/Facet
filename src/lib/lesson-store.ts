// lesson-store.ts — server-side lesson data access layer
//
// Priority: cms_lessons DB table (published) → static TypeScript LESSONS map.
// Allows content editors to create/update/publish lessons through the admin UI
// without a code deployment. Static files remain as the fallback source of truth.
//
// DB sections store ConceptCard.icon as a string name; callers hydrate to the
// LucideIcon component themselves (see DbLessonClient.tsx).

import { createClient } from '@supabase/supabase-js'
import * as Sentry from '@sentry/nextjs'
import type { TrackId, LessonLevel, Source } from '@/lessons/types'

// ─── Serialisable DB types ────────────────────────────────────────────────────
// Mirrors src/lessons/types.ts but replaces LucideIcon with a string name.

export interface DbKeyTerm { term: string; def: string }

export interface DbConceptCard {
  name: string
  icon: string   // resolveIcon(icon) → LucideIcon
  color: string
  desc: string
  examples?: string
}

export interface DbIntroSection {
  type: 'intro'
  title: string
  body: string
  keyTerms?: DbKeyTerm[]
}

export interface DbConceptSection {
  type: 'concept'
  title: string
  body: string
  cards?: DbConceptCard[]
}

export interface DbQuizQuestion {
  q: string
  a: [string, string, string, string]
  correct: 0 | 1 | 2 | 3
  explain: string
}

export interface DbQuizSection {
  type: 'quiz'
  questions: DbQuizQuestion[]
}

export interface DbEquation { label: string; tex: string; note?: string }

export interface DbTheorySection {
  type: 'theory'
  title: string
  body: string
  equations?: DbEquation[]
}

export interface DbCaseStudyFinding { label: string; detail: string }

export interface DbCaseStudySection {
  type: 'case-study'
  title: string
  location: string
  body: string
  findings: DbCaseStudyFinding[]
  citation: string
  doi?: string
}

export interface DbDataLabStep { instruction: string; result: string }

export interface DbDataLabSection {
  type: 'data-lab'
  title: string
  premise: string
  steps: DbDataLabStep[]
  conclusion: string
}

export type DbSection =
  | DbIntroSection
  | DbConceptSection
  | DbQuizSection
  | DbTheorySection
  | DbCaseStudySection
  | DbDataLabSection

export interface DbLesson {
  id: string
  title: string
  track: TrackId
  trackName: string
  level: LessonLevel
  duration: string
  xpReward: number
  description: string
  sources: Source[]
  sections: DbSection[]
  isPremium: boolean
  status: 'draft' | 'review' | 'published'
  createdAt: string
  updatedAt: string
}

// ─── Raw DB row shape ─────────────────────────────────────────────────────────

interface CmsLessonRow {
  id: string
  title: string
  track: string
  track_name: string
  level: string
  duration: string
  xp_reward: number
  description: string
  sources: Source[]
  sections: DbSection[]
  is_premium: boolean
  status: string
  created_at: string
  updated_at: string
  created_by: string | null
}

function rowToDbLesson(row: CmsLessonRow): DbLesson {
  return {
    id: row.id,
    title: row.title,
    track: row.track as TrackId,
    trackName: row.track_name,
    level: row.level as LessonLevel,
    duration: row.duration,
    xpReward: row.xp_reward,
    description: row.description,
    sources: row.sources ?? [],
    sections: row.sections ?? [],
    isPremium: row.is_premium,
    status: row.status as DbLesson['status'],
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  }
}

// Use the service role to bypass RLS for server-side reads.
function getAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  )
}

// ─── Public API ───────────────────────────────────────────────────────────────

/** Returns a published DB lesson by slug, or null if none exists. */
export async function getDbLesson(id: string): Promise<DbLesson | null> {
  try {
    const admin = getAdminClient()
    const { data, error } = await admin
      .from('cms_lessons')
      .select('*')
      .eq('id', id)
      .eq('status', 'published')
      .single()

    if (error) {
      Sentry.captureException(new Error(`getDbLesson(${id}): ${error.message}`))
      return null
    }
    if (!data) return null
    return rowToDbLesson(data as CmsLessonRow)
  } catch (err) {
    Sentry.captureException(err)
    return null
  }
}

/** Returns all DB lessons (all statuses) — for the admin UI. */
export async function getAllDbLessons(): Promise<DbLesson[]> {
  try {
    const admin = getAdminClient()
    const { data, error } = await admin
      .from('cms_lessons')
      .select('*')
      .order('updated_at', { ascending: false })

    if (error) {
      Sentry.captureException(new Error(`getAllDbLessons: ${error.message}`))
      return []
    }
    if (!data) return []
    return (data as CmsLessonRow[]).map(rowToDbLesson)
  } catch (err) {
    Sentry.captureException(err)
    return []
  }
}

/** Upsert a lesson row — used by the admin editor and seed script. */
export async function upsertDbLesson(
  lesson: Omit<DbLesson, 'createdAt' | 'updatedAt'>,
  createdBy?: string
): Promise<{ ok: boolean; error?: string }> {
  try {
    const admin = getAdminClient()
    const row = {
      id: lesson.id,
      title: lesson.title,
      track: lesson.track,
      track_name: lesson.trackName,
      level: lesson.level,
      duration: lesson.duration,
      xp_reward: lesson.xpReward,
      description: lesson.description,
      sources: lesson.sources,
      sections: lesson.sections,
      is_premium: lesson.isPremium,
      status: lesson.status,
      ...(createdBy ? { created_by: createdBy } : {}),
    }

    const { error } = await admin
      .from('cms_lessons')
      .upsert(row, { onConflict: 'id' })

    if (error) return { ok: false, error: error.message }
    return { ok: true }
  } catch (e) {
    return { ok: false, error: String(e) }
  }
}

/** Delete a lesson by id — admin only. */
export async function deleteDbLesson(id: string): Promise<{ ok: boolean; error?: string }> {
  try {
    const admin = getAdminClient()
    const { error } = await admin.from('cms_lessons').delete().eq('id', id)
    if (error) return { ok: false, error: error.message }
    return { ok: true }
  } catch (e) {
    return { ok: false, error: String(e) }
  }
}
