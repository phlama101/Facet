import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

const DISPLAY_NAME_MAX = 50
const BIO_MAX = 300

export async function POST(req: NextRequest) {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const body = await req.json() as { display_name?: unknown; bio?: unknown }

    const updates: Record<string, string> = {}

    if (typeof body.display_name === 'string') {
      const name = body.display_name.trim().slice(0, DISPLAY_NAME_MAX)
      if (name.length === 0) {
        return NextResponse.json({ error: 'Display name cannot be empty' }, { status: 400 })
      }
      updates.display_name = name
    }

    if (typeof body.bio === 'string') {
      updates.bio = body.bio.trim().slice(0, BIO_MAX)
    }

    if (Object.keys(updates).length === 0) {
      return NextResponse.json({ error: 'Nothing to update' }, { status: 400 })
    }

    const admin = createAdminClient()
    const { error } = await admin.from('profiles').update(updates).eq('id', user.id)
    if (error) throw error

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[profile-update]', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
