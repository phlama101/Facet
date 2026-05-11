import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { getAllDbLessons, upsertDbLesson, deleteDbLesson } from '@/lib/lesson-store'
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

interface RouteContext {
  params: Promise<{ id: string }>
}

export async function GET(_req: NextRequest, { params }: RouteContext) {
  const auth = await requireAdmin()
  if (auth instanceof NextResponse) return auth

  const { id } = await params
  const all = await getAllDbLessons()
  const lesson = all.find(l => l.id === decodeURIComponent(id))

  if (!lesson) return NextResponse.json({ error: 'Not found' }, { status: 404 })
  return NextResponse.json({ lesson })
}

export async function PUT(req: NextRequest, { params }: RouteContext) {
  const auth = await requireAdmin()
  if (auth instanceof NextResponse) return auth

  const { id } = await params
  const body = await req.json() as Partial<DbLesson>

  if (!body.title || !body.track) {
    return NextResponse.json({ error: 'title and track are required' }, { status: 400 })
  }

  const result = await upsertDbLesson(
    {
      id: decodeURIComponent(id),
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

export async function DELETE(_req: NextRequest, { params }: RouteContext) {
  const auth = await requireAdmin()
  if (auth instanceof NextResponse) return auth

  const { id } = await params
  const result = await deleteDbLesson(decodeURIComponent(id))

  if (!result.ok) return NextResponse.json({ error: result.error }, { status: 500 })
  return NextResponse.json({ ok: true })
}
