import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { levelFromXp } from '@/lib/utils'

const DAILY_MISSIONS = [
  { target: 1, bonusXp: 25 },
  { target: 3, bonusXp: 75 },
  { target: 5, bonusXp: 150 },
] as const

export async function POST(req: NextRequest) {
  try {
    const { lessonId, xpReward } = await req.json() as { lessonId: string; xpReward: number }

    if (!lessonId || typeof xpReward !== 'number') {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }

    // Verify user session
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const admin = createAdminClient()

    // Check if already completed (idempotent)
    const { data: existing } = await admin
      .from('user_lesson_progress')
      .select('completed')
      .eq('user_id', user.id)
      .eq('lesson_id', lessonId)
      .single()

    if (existing?.completed) {
      return NextResponse.json({ ok: true, alreadyCompleted: true })
    }

    // Count today's completions BEFORE marking this one (for mission threshold check)
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

    // Mark lesson complete
    await admin.from('user_lesson_progress').upsert(
      { user_id: user.id, lesson_id: lessonId, completed: true, completed_at: new Date().toISOString() },
      { onConflict: 'user_id,lesson_id' }
    )

    // Fetch current profile state
    const { data: profile } = await admin
      .from('profiles')
      .select('xp, level, streak, longest_streak, last_active')
      .eq('id', user.id)
      .single()

    if (!profile) return NextResponse.json({ error: 'Profile not found' }, { status: 404 })

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
