// POST /api/admin/seed-lessons
//
// Migrates all static TypeScript lessons into cms_lessons.
// Body: { autoPublish?: boolean }
//   autoPublish=false (default): only seeds new lessons as 'draft'
//   autoPublish=true: seeds new lessons AND promotes existing drafts/reviews to 'published'
// Concept card icons are converted from LucideIcon components to name strings
// by looking up the component's displayName.

import { NextRequest, NextResponse } from 'next/server'
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

function convertLesson(lesson: Lesson, status: 'draft' | 'published') {
  return {
    id: lesson.id,
    title: lesson.title,
    track: lesson.track,
    trackName: lesson.trackName,
    level: lesson.level,
    duration: lesson.duration,
    xpReward: lesson.xpReward,
    description: lesson.description,
    sources: lesson.sources ?? [],
    sections: lesson.sections.map(convertSection),
    isPremium: false,
    status,
  }
}

export async function POST(req: NextRequest) {
  const auth = await requireAdmin()
  if (auth instanceof NextResponse) return auth

  const body = await req.json().catch(() => ({})) as { autoPublish?: boolean }
  const autoPublish = body.autoPublish === true
  const targetStatus = autoPublish ? 'published' : 'draft'

  const existing = await getAllDbLessons()
  const existingById = new Map(existing.map(l => [l.id, l]))

  const allLessons = Object.values(LESSONS)

  // autoPublish: include new lessons + existing ones not yet published
  // default: only include lessons not yet in the DB
  const toSeed = autoPublish
    ? allLessons.filter(l => {
        const ex = existingById.get(l.id)
        return !ex || ex.status !== 'published'
      })
    : allLessons.filter(l => !existingById.has(l.id))

  const results: { id: string; ok: boolean; error?: string }[] = []

  for (const lesson of toSeed) {
    const converted = convertLesson(lesson as Lesson, targetStatus)
    const result = await upsertDbLesson(converted, auth.userId)
    results.push({ id: lesson.id, ...result })
  }

  const succeeded = results.filter(r => r.ok).length
  const failed = results.filter(r => !r.ok)
  const skipped = allLessons.length - toSeed.length

  return NextResponse.json({
    seeded: succeeded,
    skipped,
    failed: failed.length,
    errors: failed.map(f => ({ id: f.id, error: f.error })),
  })
}
