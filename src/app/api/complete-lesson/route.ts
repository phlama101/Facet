import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { levelFromXp } from '@/lib/utils'
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

    // Fetch profile — need subscription for access validation
    const { data: profile } = await admin
      .from('profiles')
      .select('xp, level, streak, longest_streak, last_active, subscription')
      .eq('id', user.id)
      .single()

    if (!profile) return NextResponse.json({ error: 'Profile not found' }, { status: 404 })

    // Validate the user's subscription allows access to this lesson
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

    const baseXp = (profile.xp ?? 0) + xpReward

    // Compute streak using UTC day comparison
    const lastActiveDate = profile.last_active
      ? new Date(profile.last_active).toISOString().slice(0, 10)
      : null

    let newStreak: number
    if (!lastActiveDate) {
      newStreak = 1
    } else if (lastActiveDate === todayUTC) {
      newStreak = profile.streak ?? 1
    } else {
      const yesterday = new Date()
      yesterday.setUTCDate(yesterday.getUTCDate() - 1)
      const yesterdayUTC = yesterday.toISOString().slice(0, 10)
      newStreak = lastActiveDate === yesterdayUTC ? (profile.streak ?? 0) + 1 : 1
    }

    const newLongest = Math.max(profile.longest_streak ?? 0, newStreak)

    // Award bonus XP for daily mission thresholds crossed by this completion
    let bonusXp = 0
    for (const { target, bonusXp: reward } of DAILY_MISSIONS) {
      if (previousTodayCount < target && newTodayCount >= target) bonusXp += reward
    }

    const finalXp = baseXp + bonusXp
    const finalLevel = levelFromXp(finalXp)

    await admin.from('profiles').update({
      xp: finalXp,
      level: finalLevel,
      streak: newStreak,
      longest_streak: newLongest,
      last_active: new Date().toISOString(),
    }).eq('id', user.id)

    return NextResponse.json({ ok: true, newXp: finalXp, newLevel: finalLevel, newStreak, bonusXp })
  } catch (err) {
    console.error('[complete-lesson]', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
