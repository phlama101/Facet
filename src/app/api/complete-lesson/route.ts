import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

import { LESSONS } from '@/lessons/index'
import { getDbLesson } from '@/lib/lesson-store'
import { canAccessLesson } from '@/lib/access'
import { QUIZ_PASSING_SCORE } from '@/lib/quiz'

const DAILY_MISSIONS = [
  { target: 1, bonusXp: 25 },
  { target: 3, bonusXp: 75 },
  { target: 5, bonusXp: 150 },
] as const

// Postgres unique-violation error code
const PG_UNIQUE_VIOLATION = '23505'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as { lessonId?: unknown; quizCorrect?: unknown; quizTotal?: unknown }
    const lessonId = typeof body.lessonId === 'string' ? body.lessonId.trim() : null
    const quizCorrect = typeof body.quizCorrect === 'number' ? body.quizCorrect : null
    const quizTotal = typeof body.quizTotal === 'number' ? body.quizTotal : null

    if (!lessonId) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }

    // Validate lesson exists server-side and get authoritative xpReward (never trust client).
    // Check static lessons first, then fall back to published CMS lessons so that
    // lessons created through the admin CMS (not in the TS bundle) are also completable.
    const staticLesson = LESSONS[lessonId]
    const xpReward = staticLesson
      ? staticLesson.xpReward
      : await getDbLesson(lessonId).then(db => db?.xpReward ?? null)

    if (xpReward === null) {
      return NextResponse.json({ error: 'Lesson not found' }, { status: 404 })
    }

    // If the lesson has quiz sections, enforce the server-side passing threshold.
    // Quiz answers live in the TS bundle (not DB), so we trust the client-reported
    // score but enforce the minimum fraction as defense-in-depth. The once-only
    // unique constraint remains the primary anti-farming protection.
    const hasQuiz = staticLesson?.sections.some(s => s.type === 'quiz') ?? false
    if (hasQuiz) {
      if (quizCorrect === null || quizTotal === null || quizTotal === 0) {
        return NextResponse.json({ error: 'Quiz score required' }, { status: 422 })
      }
      if (quizCorrect / quizTotal < QUIZ_PASSING_SCORE) {
        return NextResponse.json({ error: 'Quiz not passed' }, { status: 422 })
      }
    }

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

    // Single reference timestamp anchors both the progress row and the streak
    // calculation. Without this, a lesson completed at 23:59:59 UTC could be
    // inserted with completed_at = Jan 15 but award_xp could run at 00:00:01
    // Jan 16, seeing a 2-day gap and incorrectly resetting the streak.
    const nowISO = new Date().toISOString()
    const todayUTC = nowISO.slice(0, 10)
    const todayUTCStart = `${todayUTC}T00:00:00.000Z`

    // INSERT first. The unique constraint on (user_id, lesson_id) ensures atomicity —
    // two concurrent requests for the same lesson can't both succeed.
    const { error: insertError } = await admin
      .from('user_lesson_progress')
      .insert({ user_id: user.id, lesson_id: lessonId, completed: true, completed_at: nowISO })

    if (insertError) {
      if (insertError.code === PG_UNIQUE_VIOLATION) {
        return NextResponse.json({ ok: true, alreadyCompleted: true })
      }
      throw new Error(insertError.message)
    }

    // Count today's completions AFTER inserting so the count is stable and includes
    // this row. Deriving previousTodayCount as (newCount - 1) is safe because the
    // insert above confirmed exactly one new row was added for this user+lesson pair.
    // This avoids the pre-insert read race that could double-award mission bonuses
    // when two different lessons are completed nearly simultaneously.
    const { count: countAfter } = await admin
      .from('user_lesson_progress')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .eq('completed', true)
      .gte('completed_at', todayUTCStart) as { count: number | null }

    const newTodayCount = countAfter ?? 1
    const previousTodayCount = newTodayCount - 1

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
      p_now: nowISO,
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
