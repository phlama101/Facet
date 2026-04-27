'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, ArrowRight, Check, Mail } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { BRAND } from '@/lib/brand'
import FacetLogo from '@/components/brand/FacetLogo'
import FacetBackground from '@/components/brand/FacetBackground'
import FacetInput from '@/components/ui/FacetInput'
import { cn } from '@/lib/utils'

const PERKS = [
  'Free forever — no credit card',
  'Track progress across all courses',
  'Earn XP, badges & climb the leaderboard',
]

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm]     = useState({ username: '', email: '', password: '', displayName: '' })
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError]   = useState('')
  const [success, setSuccess] = useState(false)

  const set = (k: string) => (v: string) => setForm(f => ({ ...f, [k]: v }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (form.password.length < 6) { setError('Password must be at least 6 characters'); return }
    setLoading(true)
    const supabase = createClient()
    const { data, error: err } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: { username: form.username, display_name: form.displayName || form.username },
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    })
    if (err) { setError(err.message); setLoading(false); return }
    if (data.session) { router.push('/dashboard'); router.refresh(); return }
    setSuccess(true)
    setLoading(false)
  }

  const pwStrength = form.password.length === 0 ? 0 : form.password.length < 6 ? 1 : form.password.length < 10 ? 2 : 3
  const strengthLabel = ['', 'Weak', 'Good', 'Strong'][pwStrength]
  const strengthColor = ['', BRAND.ruby, BRAND.gold, BRAND.jade][pwStrength]

  if (success) {
    return (
      <div
        className="min-h-screen relative flex items-center justify-center px-4 py-16"
        style={{ backgroundColor: BRAND.bg, color: BRAND.text, fontFamily: 'var(--font-sans)' }}
      >
        <FacetBackground />
        <div className="relative z-10 w-full max-w-md text-center">
          <Link href="/" className="inline-flex items-center gap-3 mb-10">
            <FacetLogo size={32} />
            <div className="font-serif" style={{ fontSize: '28px', lineHeight: 1 }}>Facet</div>
          </Link>
          <div
            className="p-10 rounded-sm"
            style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
          >
            <div
              className="w-16 h-16 rounded-sm flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: `${BRAND.accent}15`, border: `1px solid ${BRAND.accent}40` }}
            >
              <Mail size={28} color={BRAND.accent} />
            </div>
            <h1 className="font-serif" style={{ fontSize: '28px' }}>Check your email</h1>
            <p className="text-sm mt-2" style={{ color: BRAND.textDim }}>We sent a confirmation link to</p>
            <p className="font-semibold mt-1" style={{ color: BRAND.accent }}>{form.email}</p>
            <p className="text-xs mt-4 leading-relaxed" style={{ color: BRAND.textDim }}>
              Click the link to activate your account and start learning.
              Check your spam folder if you don&apos;t see it.
            </p>
            <Link
              href="/login"
              className="inline-block mt-6 text-xs font-semibold tracking-[0.1em] uppercase transition-opacity hover:opacity-70"
              style={{ color: BRAND.accent }}
            >
              Back to sign in
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className="min-h-screen relative flex items-center justify-center px-4 py-16"
      style={{ backgroundColor: BRAND.bg, color: BRAND.text, fontFamily: 'var(--font-sans)' }}
    >
      <FacetBackground />
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
              className="flex items-start gap-2 p-3 rounded-sm text-xs"
              style={{ backgroundColor: 'rgba(226,91,110,0.1)', border: `1px solid ${BRAND.ruby}`, color: BRAND.ruby }}
            >
              {error}
            </div>
          )}

          <FacetInput label="Display Name" value={form.displayName} onChange={set('displayName')} placeholder="Ada Karimi" />
          <FacetInput label="Username"     value={form.username}    onChange={set('username')}    placeholder="fieldgeo99" />
          <FacetInput label="Email"        value={form.email}       onChange={set('email')}       type="email" placeholder="you@example.com" />
          <div>
            <FacetInput
              label="Password"
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
    </div>
  )
}
