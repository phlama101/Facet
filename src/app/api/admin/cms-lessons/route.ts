import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getAllDbLessons, upsertDbLesson } from '@/lib/lesson-store'
import type { DbLesson } from '@/lib/lesson-store'

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

export async function GET() {
  const auth = await requireAdmin()
  if (auth instanceof NextResponse) return auth

  const lessons = await getAllDbLessons()
  return NextResponse.json({ lessons })
}

export async function POST(req: NextRequest) {
  const auth = await requireAdmin()
  if (auth instanceof NextResponse) return auth

  const body = await req.json() as Partial<DbLesson>

  if (!body.id || !body.title || !body.track) {
    return NextResponse.json({ error: 'id, title, and track are required' }, { status: 400 })
  }

  const result = await upsertDbLesson(
    {
      id: body.id,
      title: body.title,
      track: body.track,
      trackName: body.trackName ?? body.track,
      level: body.level ?? 'Beginner',
      duration: body.duration ?? '10 min',
      xpReward: body.xpReward ?? 100,
      description: body.description ?? '',
      sources: body.sources ?? [],
      sections: body.sections ?? [],
      isPremium: body.isPremium ?? false,
      status: body.status ?? 'draft',
    },
    auth.userId
  )

  if (!result.ok) return NextResponse.json({ error: result.error }, { status: 500 })
  return NextResponse.json({ ok: true })
}
