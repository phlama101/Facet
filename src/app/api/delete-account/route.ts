import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function DELETE() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const admin = createAdminClient()

    // Delete progress data first (profile row deleted via cascade when auth user is removed)
    await admin.from('user_lesson_progress').delete().eq('user_id', user.id)

    // Delete the Supabase Auth user — cascades to profiles via DB trigger
    const { error } = await admin.auth.admin.deleteUser(user.id)
    if (error) throw new Error(error.message)

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[delete-account]', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
