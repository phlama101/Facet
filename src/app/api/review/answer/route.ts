import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

type RawCard = { interval_days: number; ease_factor: number; review_count: number }

function nextSR(intervalDays: number, easeFactor: number, correct: boolean) {
  if (correct) {
    return {
      interval_days: Math.min(Math.round(intervalDays * easeFactor), 180),
      ease_factor:   Math.min(easeFactor + 0.1, 3.0),
    }
  }
  return {
    interval_days: 1,
    ease_factor:   Math.max(1.3, easeFactor - 0.2),
  }
}

export async function POST(req: NextRequest) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const body = await req.json() as { cardId?: unknown; correct?: unknown }
  const cardId = typeof body.cardId === 'string' ? body.cardId : null
  const correct = typeof body.correct === 'boolean' ? body.correct : null

  if (!cardId || correct === null) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 })
  }

  const { data: rawCard } = await supabase
    .from('user_review_cards' as never)
    .select('interval_days, ease_factor, review_count')
    .eq('id', cardId)
    .eq('user_id', user.id)
    .single()

  const card = rawCard as RawCard | null
  if (!card) return NextResponse.json({ error: 'Card not found' }, { status: 404 })

  const next = nextSR(card.interval_days, card.ease_factor, correct)
  const now = new Date()
  const dueAt = new Date(now.getTime() + next.interval_days * 86_400_000)

  await supabase
    .from('user_review_cards' as never)
    .update({
      interval_days:    next.interval_days,
      ease_factor:      next.ease_factor,
      due_at:           dueAt.toISOString(),
      last_reviewed_at: now.toISOString(),
      review_count:     card.review_count + 1,
    } as never)
    .eq('id', cardId)
    .eq('user_id', user.id)

  return NextResponse.json({ ok: true, nextDue: dueAt.toISOString() })
}
