import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

import { LESSONS } from '@/lessons/index'
import { canAccessLesson } from '@/lib/access'

const DAILY_MISSIONS = [
  { target: 1, bonusXp: 25 },
  { target: 3, bonusXp: 75 },
  { target: 5, bonusXp: 150 },
] as const

// Postgres unique-violation error code
const PG_UNIQUE_VIOLATION = '23505'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as { lessonId?: unknown }
    const lessonId = typeof body.lessonId === 'string' ? body.lessonId.trim() : null

    if (!lessonId) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }

    // Validate lesson exists server-side and get authoritative xpReward (never trust client)
    const lesson = LESSONS[lessonId]
    if (!lesson) {
      return NextResponse.json({ error: 'Lesson not found' }, { status: 404 })
    }
    const xpReward = lesson.xpReward

    // Verify user session
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const admin = createAdminClient()

    // Fetch profile — only need subscription for access validation;
    // XP/streak/level are updated atomically by the award_xp DB function.
    const { data: profile } = await admin
      .from('profiles')
      .select('subscription')
      .eq('id', user.id)
      .single()

    if (!profile) return NextResponse.json({ error: 'Profile not found' }, { status: 404 })

    const subscription = (profile as { subscription?: string }).subscription ?? 'free'
    if (!canAccessLesson(lessonId, subscription)) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
    }

    // Count today's completions BEFORE inserting (for mission threshold check)
    const todayUTC = new Date().toISOString().slice(0, 10)
    const todayUTCStart = `${todayUTC}T00:00:00.000Z`
    const { count: countBefore } = await admin
      .from('user_lesson_progress')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .eq('completed', true)
      .gte('completed_at', todayUTCStart) as { count: number | null }

    const previousTodayCount = countBefore ?? 0
    const newTodayCount = previousTodayCount + 1

    // Use INSERT (not upsert) so the database's unique constraint on (user_id, lesson_id)
    // makes this atomic — two concurrent requests can't both succeed, eliminating the
    // read-check-then-write race condition that would double-award XP.
    const { error: insertError } = await admin
      .from('user_lesson_progress')
      .insert({ user_id: user.id, lesson_id: lessonId, completed: true, completed_at: new Date().toISOString() })

    if (insertError) {
      if (insertError.code === PG_UNIQUE_VIOLATION) {
        return NextResponse.json({ ok: true, alreadyCompleted: true })
      }
      throw new Error(insertError.message)
    }

    // Award bonus XP for daily mission thresholds crossed by this completion
    let bonusXp = 0
    for (const { target, bonusXp: reward } of DAILY_MISSIONS) {
      if (previousTodayCount < target && newTodayCount >= target) bonusXp += reward
    }

    const xpToAward = xpReward + bonusXp

    // award_xp uses SELECT FOR UPDATE, so concurrent lesson completions queue at
    // the DB level rather than racing on stale profile.xp reads.
    const { data: awardRows, error: awardError } = await admin.rpc('award_xp', {
      p_user_id: user.id,
      p_xp: xpToAward,
    }) as { data: { new_xp: number; new_level: number; new_streak: number }[] | null; error: unknown }

    if (awardError || !awardRows?.length) {
      throw new Error('award_xp failed')
    }

    const { new_xp: finalXp, new_level: finalLevel, new_streak: newStreak } = awardRows[0]

    return NextResponse.json({ ok: true, newXp: finalXp, newLevel: finalLevel, newStreak, bonusXp })
  } catch (err) {
    console.error('[complete-lesson]', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
