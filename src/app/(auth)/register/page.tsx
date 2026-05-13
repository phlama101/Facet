'use client'

import { Suspense, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Eye, EyeOff, ArrowRight, Check } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { BRAND } from '@/lib/brand'
import FacetLogo from '@/components/brand/FacetLogo'
import FacetBackground from '@/components/brand/FacetBackground'
import FacetInput from '@/components/ui/FacetInput'

const PERKS = [
  'Free forever — no credit card',
  'Track progress across all courses',
  'Earn XP, badges & climb the leaderboard',
]

function RegisterForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [form, setForm]       = useState({ username: '', email: searchParams.get('email') ?? '', password: '', displayName: '' })
  const [showPw, setShowPw]   = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]     = useState('')

  const set = (k: string) => (v: string) => setForm(f => ({ ...f, [k]: v }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!form.username.trim()) { setError('Username is required'); return }
    if (!form.email.trim())    { setError('Email is required'); return }
    if (form.password.length < 6) { setError('Password must be at least 6 characters'); return }
    setLoading(true)
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: form.email,
          password: form.password,
          username: form.username,
          displayName: form.displayName,
        }),
      })
      const json = await res.json()
      if (!res.ok) { setError(json.error ?? 'Registration failed'); setLoading(false); return }

      const supabase = createClient()
      const { error: signInErr } = await supabase.auth.signInWithPassword({
        email: form.email,
        password: form.password,
      })
      if (signInErr) { setError(signInErr.message); setLoading(false); return }
      const next = searchParams.get('next')
      router.push(next && next.startsWith('/') ? next : '/onboard')
      router.refresh()
    } catch {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  const pwStrength    = form.password.length === 0 ? 0 : form.password.length < 6 ? 1 : form.password.length < 10 ? 2 : 3
  const strengthLabel = ['', 'Weak', 'Good', 'Strong'][pwStrength]
  const strengthColor = ['', BRAND.ruby, BRAND.gold, BRAND.jade][pwStrength]

  return (
    <div className="relative z-10 w-full max-w-md">
      <div className="text-center mb-10">
        <Link href="/" className="inline-flex items-center gap-3">
          <FacetLogo size={32} />
          <div className="font-serif" style={{ fontSize: '28px', letterSpacing: '-0.02em', lineHeight: 1 }}>
            Facet
          </div>
        </Link>
        <div className="text-[10px] tracking-[0.25em] uppercase mt-4" style={{ color: BRAND.accent }}>
          Begin
        </div>
        <h1 className="font-serif mt-1" style={{ fontSize: '32px', lineHeight: 1 }}>
          Create your account
        </h1>
        <p className="text-xs mt-2" style={{ color: BRAND.textDim }}>
          Join thousands of earth science learners.
        </p>
      </div>

      <ul className="flex flex-col gap-2 mb-6">
        {PERKS.map(p => (
          <li key={p} className="flex items-center gap-2.5 text-xs" style={{ color: BRAND.textDim }}>
            <Check size={12} color={BRAND.jade} className="flex-shrink-0" /> {p}
          </li>
        ))}
      </ul>

      <form
        onSubmit={handleSubmit}
        className="p-8 rounded-sm space-y-4"
        style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
      >
        {error && (
          <div
            className="p-3 rounded-sm text-xs"
            style={{ backgroundColor: 'rgba(226,91,110,0.1)', border: `1px solid ${BRAND.ruby}`, color: BRAND.ruby }}
          >
            {error}
          </div>
        )}

        <FacetInput label="Display Name" value={form.displayName} onChange={set('displayName')} placeholder="Ada Karimi" />
        <FacetInput label="Username *"   value={form.username}    onChange={set('username')}    placeholder="fieldgeo99" />
        <FacetInput label="Email *"      value={form.email}       onChange={set('email')}       type="email" placeholder="you@example.com" />
        <div>
          <FacetInput
            label="Password *"
            value={form.password}
            onChange={set('password')}
            type={showPw ? 'text' : 'password'}
            placeholder="At least 6 characters"
            rightButton={
              <button type="button" onClick={() => setShowPw(s => !s)} style={{ color: BRAND.textDim }}>
                {showPw ? <EyeOff size={14} /> : <Eye size={14} />}
              </button>
            }
          />
          {form.password && (
            <div className="flex items-center gap-2 mt-1.5">
              <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ backgroundColor: BRAND.border }}>
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${(pwStrength / 3) * 100}%`, backgroundColor: strengthColor }}
                />
              </div>
              <span className="text-[10px] font-medium" style={{ color: strengthColor }}>
                {strengthLabel}
              </span>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-sm text-xs font-semibold tracking-[0.15em] uppercase flex items-center justify-center gap-2 disabled:opacity-50 transition-opacity hover:opacity-80"
          style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
        >
          {loading
            ? <span className="w-4 h-4 border-2 rounded-full animate-spin" style={{ borderColor: `${BRAND.bg}40`, borderTopColor: BRAND.bg }} />
            : <>Create Account <ArrowRight size={12} /></>
          }
        </button>
      </form>

      <p className="text-center mt-6 text-xs" style={{ color: BRAND.textDim }}>
        Already have an account?{' '}
        <Link href="/login" className="font-semibold transition-opacity hover:opacity-70" style={{ color: BRAND.accent }}>
          Sign in
        </Link>
      </p>
    </div>
  )
}

export default function RegisterPage() {
  return (
    <div
      className="min-h-screen relative flex items-center justify-center px-4 py-16"
      style={{ backgroundColor: BRAND.bg, color: BRAND.text, fontFamily: 'var(--font-sans)' }}
    >
      <FacetBackground />
      <Suspense>
        <RegisterForm />
      </Suspense>
    </div>
  )
}
