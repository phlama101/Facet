import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

export async function DELETE() {
  try {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

    const admin = createAdminClient()

    // Delete the auth user first — if this fails, nothing has been touched and the
    // user can still log in normally. The DB trigger cascades to the profiles row.
    const { error } = await admin.auth.admin.deleteUser(user.id)
    if (error) throw new Error(error.message)

    // Clean up progress data that doesn't cascade from the auth user deletion.
    // At this point the user is already removed so a failure here only leaves
    // orphaned rows, not a broken account.
    await admin.from('user_lesson_progress').delete().eq('user_id', user.id)

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[delete-account]', err)
    return NextResponse.json({ error: 'Internal error' }, { status: 500 })
  }
}
