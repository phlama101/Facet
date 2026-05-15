import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'
import * as Sentry from '@sentry/nextjs'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as { quizId?: unknown; answers?: unknown }
    const quizId = typeof body.quizId === 'string' ? body.quizId.trim() : null

    if (!quizId) {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
    }

    // Extract answers safely — accept only string → string pairs, ignore anything else
    const rawAnswers = body.answers
    const answers: Record<string, string> = {}
    if (rawAnswers && typeof rawAnswers === 'object' && !Array.isArray(rawAnswers)) {
      for (const [k, v] of Object.entries(rawAnswers as Record<string, unknown>)) {
        if (typeof v === 'string') answers[k] = v
      }
    }

    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const admin = createAdminClient()

    // Fetch quiz metadata server-side — authoritative xp_reward and passing_score
    const { data: quizRow } = await admin
      .from('quizzes')
      .select('xp_reward, passing_score')
      .eq('id', quizId)
      .single()

    if (!quizRow) return NextResponse.json({ error: 'Quiz not found' }, { status: 404 })
    const quiz = quizRow as { xp_reward: number; passing_score: number }

    // Fetch correct answers server-side — never trust the client
    const { data: questionRows } = await admin
      .from('quiz_questions')
      .select('id, correct_answer')
      .eq('quiz_id', quizId)

    if (!questionRows || questionRows.length === 0) {
      return NextResponse.json({ error: 'Quiz has no questions' }, { status: 422 })
    }
    const questions = questionRows as { id: string; correct_answer: string }[]

    // Score server-side
    const correctCount = questions.filter(q => answers[q.id] === q.correct_answer).length
    const score = Math.round((correctCount / questions.length) * 100)
    const passed = score >= quiz.passing_score

    // XP policy: award XP only on the first attempt per quiz.
    // First pass → full xp_reward; first fail → 20% participation XP.
    // Any subsequent attempt → 0 XP (prevents farming).
    const { count: prevCount } = await admin
      .from('user_quiz_attempts')
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id)
      .eq('quiz_id', quizId) as { count: number | null }

    const isFirstAttempt = (prevCount ?? 0) === 0
    const xpEarned = isFirstAttempt
      ? (passed ? quiz.xp_reward : Math.floor(quiz.xp_reward * 0.2))
      : 0

    // Record the attempt
    const { error: insertError } = await admin
      .from('user_quiz_attempts')
      .insert({
        user_id: user.id,
        quiz_id: quizId,
        score,
        passed,
        xp_earned: xpEarned,
        answers,
      })

    if (insertError) throw new Error(insertError.message)

    // Award XP if earned
    let finalXp: number | null = null
    let finalLevel: number | null = null
    let newStreak: number | null = null

    if (xpEarned > 0) {
      const { data: awardRows, error: awardError } = await admin.rpc('award_xp', {
        p_user_id: user.id,
        p_xp: xpEarned,
      }) as { data: { new_xp: number; new_level: number; new_streak: number }[] | null; error: unknown }

      if (awardError || !awardRows?.length) throw new Error('award_xp failed')
      finalXp = awardRows[0].new_xp
      finalLevel = awardRows[0].new_level
      newStreak = awardRows[0].new_streak
    }

    return NextResponse.json({
      ok: true, score, passed, xpEarned,
      newXp: finalXp, newLevel: finalLevel, newStreak,
    })
  } catch (err) {
    Sentry.captureException(err)
    console.error('[complete-quiz]', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
