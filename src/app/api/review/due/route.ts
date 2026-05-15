import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { LESSONS } from '@/lessons/index'
import type { QuizSection } from '@/lessons/types'

type RawCard = {
  id: string
  lesson_id: string
  question_index: number
  interval_days: number
  review_count: number
}

export async function GET() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const now = new Date().toISOString()

  const [dueResult, totalResult] = await Promise.all([
    supabase
      .from('user_review_cards' as never)
      .select('id, lesson_id, question_index, interval_days, review_count')
      .eq('user_id', user.id)
      .lte('due_at', now)
      .order('due_at', { ascending: true })
      .limit(20),
    supabase
      .from('user_review_cards' as never)
      .select('*', { count: 'exact', head: true })
      .eq('user_id', user.id),
  ])

  const rawCards = (dueResult.data ?? []) as RawCard[]
  const total = (totalResult as { count: number | null }).count ?? 0

  const cards = rawCards.flatMap(card => {
    const lesson = LESSONS[card.lesson_id]
    if (!lesson) return []
    const questions = lesson.sections
      .filter((s): s is QuizSection => s.type === 'quiz')
      .flatMap(s => s.questions)
    const q = questions[card.question_index]
    if (!q) return []
    return [{
      id:            card.id,
      lessonId:      card.lesson_id,
      lessonTitle:   lesson.title,
      trackName:     lesson.trackName,
      questionIndex: card.question_index,
      intervalDays:  card.interval_days,
      reviewCount:   card.review_count,
      q:             q.q,
      a:             q.a,
      correct:       q.correct,
      explain:       q.explain,
    }]
  })

  return NextResponse.json({ cards, total })
}
