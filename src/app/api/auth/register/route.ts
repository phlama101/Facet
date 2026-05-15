import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import * as Sentry from '@sentry/nextjs'
import { z } from 'zod'
import { sendEmail } from '@/lib/email'
import { welcomeEmail } from '@/lib/emails/welcome'
import { rateLimit } from '@/lib/rate-limit'

const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  username: z
    .string()
    .min(1, 'Username is required')
    .max(30, 'Username must be 30 characters or fewer')
    .regex(
      /^[a-zA-Z0-9_.-]+$/,
      'Username may only contain letters, numbers, underscores, hyphens, and dots',
    ),
  displayName: z.string().max(50, 'Display name must be 50 characters or fewer').optional(),
})

export async function POST(request: NextRequest) {
  // Rate limit: 5 registration attempts per IP per 15 minutes
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    request.headers.get('x-real-ip') ??
    'anonymous'

  const { allowed } = rateLimit(`register:${ip}`, 5, 15 * 60 * 1000)
  if (!allowed) {
    return NextResponse.json(
      { error: 'Too many registration attempts. Please try again later.' },
      { status: 429 },
    )
  }

  try {
    const body = await request.json().catch(() => null)

    const parsed = registerSchema.safeParse(body)
    if (!parsed.success) {
      const message = parsed.error.issues[0]?.message ?? 'Invalid request'
      return NextResponse.json({ error: message }, { status: 400 })
    }

    const { email, password, username, displayName } = parsed.data

    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!url || !url.startsWith('https://')) {
      return NextResponse.json(
        { error: 'Server misconfiguration: NEXT_PUBLIC_SUPABASE_URL is missing or not a valid HTTPS URL.' },
        { status: 500 },
      )
    }
    if (!serviceKey || serviceKey.length < 20) {
      return NextResponse.json(
        { error: 'Server misconfiguration: SUPABASE_SERVICE_ROLE_KEY is missing.' },
        { status: 500 },
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
      if (error.message.includes('already registered') || error.message.includes('already been registered')) {
        return NextResponse.json({ error: 'An account with this email already exists.' }, { status: 400 })
      }
      return NextResponse.json({ error: error.message }, { status: 400 })
    }

    const name = (displayName || username).trim()
    const { subject, html } = welcomeEmail(name)
    void sendEmail(email, subject, html)

    return NextResponse.json({ ok: true })
  } catch (err) {
    Sentry.captureException(err)
    return NextResponse.json(
      { error: 'Registration failed. Please try again.' },
      { status: 500 },
    )
  }
}
