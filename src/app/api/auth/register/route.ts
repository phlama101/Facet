import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const USERNAME_MAX = 30
const DISPLAY_NAME_MAX = 50

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password, username, displayName } = body as {
      email: string
      password: string
      username: string
      displayName?: string
    }

    if (!email || !password || !username) {
      return NextResponse.json(
        { error: 'Email, password, and username are required' },
        { status: 400 }
      )
    }

    if (typeof username !== 'string' || username.trim().length === 0) {
      return NextResponse.json({ error: 'Username is required' }, { status: 400 })
    }
    if (username.trim().length > USERNAME_MAX) {
      return NextResponse.json(
        { error: `Username must be ${USERNAME_MAX} characters or fewer` },
        { status: 400 }
      )
    }
    if (!/^[a-zA-Z0-9_.-]+$/.test(username.trim())) {
      return NextResponse.json(
        { error: 'Username may only contain letters, numbers, underscores, hyphens, and dots' },
        { status: 400 }
      )
    }
    if (displayName && typeof displayName === 'string' && displayName.trim().length > DISPLAY_NAME_MAX) {
      return NextResponse.json(
        { error: `Display name must be ${DISPLAY_NAME_MAX} characters or fewer` },
        { status: 400 }
      )
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      )
    }

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!url || !url.startsWith('https://')) {
      return NextResponse.json(
        { error: 'Server misconfiguration: NEXT_PUBLIC_SUPABASE_URL is missing or not a valid HTTPS URL.' },
        { status: 500 }
      )
    }
    if (!serviceKey || serviceKey.length < 20) {
      return NextResponse.json(
        { error: 'Server misconfiguration: SUPABASE_SERVICE_ROLE_KEY is missing.' },
        { status: 500 }
      )
    }

    const supabaseAdmin = createClient(url, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    })

    const { error } = await supabaseAdmin.auth.admin.createUser({
      email,
      password,
      user_metadata: {
        username: username.trim(),
        display_name: (displayName || username).trim(),
      },
      email_confirm: true,
    })

    if (error) {
      // Surface the most common errors with friendly messages
      if (error.message.includes('already registered') || error.message.includes('already been registered')) {
        return NextResponse.json({ error: 'An account with this email already exists.' }, { status: 400 })
      }
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json(
      { error: 'Registration failed. Please try again.' },
      { status: 500 }
    )
  }
}
