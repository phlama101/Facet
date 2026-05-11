// POST /api/admin/seed-lessons
//
// Migrates all static TypeScript V1 lessons into cms_lessons as 'draft' records.
// Only seeds lessons that don't already exist in the DB.
// Concept card icons are converted from LucideIcon components to name strings
// by looking up the component's displayName.
//
// This is a one-time operation used to bootstrap the CMS from the existing
// static lesson files. Run it once per environment after applying migration 005.

import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { upsertDbLesson, getAllDbLessons } from '@/lib/lesson-store'
import { LESSONS } from '@/lessons/index'
import type { Lesson, Section, ConceptSection } from '@/lessons/types'
import type { DbSection, DbConceptSection, DbConceptCard } from '@/lib/lesson-store'
import type { LucideIcon } from 'lucide-react'

async function requireAdmin(): Promise<{ userId: string } | NextResponse> {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data: profile } = await supabase
    .from('profiles')
    .select('is_admin')
    .eq('id', user.id)
    .single()

  const isAdmin = (profile as { is_admin?: boolean } | null)?.is_admin ?? false
  if (!isAdmin) return NextResponse.json({ error: 'Forbidden' }, { status: 403 })

  return { userId: user.id }
}

function iconName(icon: LucideIcon): string {
  // LucideIcon components expose their name via displayName
  return (icon as unknown as { displayName?: string }).displayName ?? 'Globe'
}

function convertSection(section: Section): DbSection {
  if (section.type !== 'concept') return section as DbSection

  const cs = section as ConceptSection
  const dbCs: DbConceptSection = {
    type: 'concept',
    title: cs.title,
    body: cs.body,
    cards: cs.cards?.map((card): DbConceptCard => ({
      name: card.name,
      icon: iconName(card.icon),
      color: card.color,
      desc: card.desc,
      examples: card.examples,
    })),
  }
  return dbCs
}

function convertLesson(lesson: Lesson) {
  return {
    id: lesson.id,
    title: lesson.title,
    track: lesson.track,
    trackName: lesson.trackName,
    level: lesson.level,
    duration: lesson.duration,
    xpReward: lesson.xpReward,
    description: lesson.description,
    sources: lesson.sources,
    sections: lesson.sections.map(convertSection),
    isPremium: false,
    status: 'draft' as const,
  }
}

export async function POST() {
  const auth = await requireAdmin()
  if (auth instanceof NextResponse) return auth

  const existing = await getAllDbLessons()
  const existingIds = new Set(existing.map(l => l.id))

  const toSeed = Object.values(LESSONS).filter(l => !existingIds.has(l.id))

  const results: { id: string; ok: boolean; error?: string }[] = []

  for (const lesson of toSeed) {
    const converted = convertLesson(lesson as Lesson)
    const result = await upsertDbLesson(converted, auth.userId)
    results.push({ id: lesson.id, ...result })
  }

  const succeeded = results.filter(r => r.ok).length
  const failed = results.filter(r => !r.ok)

  return NextResponse.json({
    seeded: succeeded,
    skipped: existingIds.size,
    failed: failed.length,
    errors: failed.map(f => ({ id: f.id, error: f.error })),
  })
}
