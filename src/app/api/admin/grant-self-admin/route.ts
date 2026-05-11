// POST /api/admin/grant-self-admin
//
// Bootstrap endpoint: grants admin access to the authenticated user when NO
// admins exist yet (prevents privilege escalation once an admin is set).
// Used once during initial setup after the 005_cms_lessons migration runs.

import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { createClient as createServerClient } from '@/lib/supabase/server'

export async function POST() {
  const supabase = await createServerClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  // Use admin client to check/set is_admin
  const admin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false } }
  )

  // Safety check: only allow if no admins exist yet
  const { data: existingAdmins, error: countError } = await admin
    .from('profiles')
    .select('id')
    .eq('is_admin', true)
    .limit(1)

  if (countError) {
    // Column likely doesn't exist yet — migration hasn't been run
    return NextResponse.json(
      { error: 'Migration 005_cms_lessons.sql has not been applied. Run it in the Supabase SQL editor first.' },
      { status: 400 }
    )
  }

  if (existingAdmins && existingAdmins.length > 0) {
    return NextResponse.json(
      { error: 'An admin already exists. Ask an existing admin to grant you access.' },
      { status: 403 }
    )
  }

  // No admins yet — grant access to requesting user
  const { error: updateError } = await admin
    .from('profiles')
    .update({ is_admin: true })
    .eq('id', user.id)

  if (updateError) {
    return NextResponse.json({ error: updateError.message }, { status: 500 })
  }

  return NextResponse.json({ ok: true, message: `Admin access granted to ${user.email}` })
}
