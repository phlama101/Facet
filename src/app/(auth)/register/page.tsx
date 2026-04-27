'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, ArrowRight, Check, Mail } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'

const PERKS = [
  'Free forever — no credit card',
  'Track progress across all courses',
  'Earn XP, badges & climb the leaderboard',
]

export default function RegisterPage() {
  const router = useRouter()
  const [form, setForm] = useState({ username: '', email: '', password: '', displayName: '' })
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

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

    // If Supabase returned a session, email confirmation is disabled — go straight in
    if (data.session) {
      router.push('/dashboard')
      router.refresh()
      return
    }

    // Email confirmation required — show success screen
    setSuccess(true)
    setLoading(false)
  }

  const pwStrength = form.password.length === 0 ? 0 : form.password.length < 6 ? 1 : form.password.length < 10 ? 2 : 3
  const strengthLabel = ['', 'Weak', 'Good', 'Strong'][pwStrength]
  const strengthColor = ['', 'bg-red-500', 'bg-amber-400', 'bg-emerald-500'][pwStrength]

  if (success) {
    return (
      <div className="min-h-screen bg-[#0d1117] hero-bg flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md text-center">
          <Link href="/" className="inline-flex items-center gap-2.5 font-black text-2xl mb-10">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-glow-cyan">🌍</div>
            <span className="text-[#e6edf3]">Facet</span>
          </Link>
          <div className="glass border border-white/8 rounded-2xl p-10">
            <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-cyan-400" />
            </div>
            <h1 className="text-2xl font-black text-[#e6edf3] mb-3">Check your email</h1>
            <p className="text-[#8b949e] mb-1">We sent a confirmation link to</p>
            <p className="text-cyan-400 font-semibold mb-6">{form.email}</p>
            <p className="text-sm text-[#8b949e] mb-8">
              Click the link in the email to activate your account and start learning.
              Check your spam folder if you don't see it within a minute.
            </p>
            <Link
              href="/login"
              className="text-sm text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
            >
              Back to sign in
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0d1117] hero-bg flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2.5 font-black text-2xl">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-glow-cyan">🌍</div>
            <span className="text-[#e6edf3]">Facet</span>
          </Link>
          <h1 className="mt-6 text-2xl font-black text-[#e6edf3]">Start exploring for free</h1>
          <p className="mt-2 text-sm text-[#8b949e]">Join 12,000+ earth science learners today</p>
        </div>

        <ul className="flex flex-col gap-2 mb-6">
          {PERKS.map(p => (
            <li key={p} className="flex items-center gap-2.5 text-sm text-[#8b949e]">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />{p}
            </li>
          ))}
        </ul>

        <form onSubmit={handleSubmit} className="glass border border-white/8 rounded-2xl p-8 space-y-4">
          {error && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400">{error}</div>
          )}

          {[
            { key: 'displayName', label: 'Display Name', type: 'text',  placeholder: 'Your name' },
            { key: 'username',    label: 'Username',     type: 'text',  placeholder: 'geo_explorer' },
            { key: 'email',       label: 'Email',        type: 'email', placeholder: 'you@example.com' },
          ].map(f => (
            <div key={f.key} className="space-y-1.5">
              <label className="text-xs font-semibold text-[#8b949e] uppercase tracking-wide">{f.label}</label>
              <input
                type={f.type}
                value={form[f.key as keyof typeof form]}
                onChange={set(f.key)}
                required
                placeholder={f.placeholder}
                className="w-full bg-white/5 border border-white/8 hover:border-white/15 focus:border-cyan-500/50 focus:outline-none text-[#e6edf3] placeholder-[#8b949e] rounded-xl px-4 py-3 text-sm transition-colors"
              />
            </div>
          ))}

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#8b949e] uppercase tracking-wide">Password</label>
            <div className="relative">
              <input
                type={showPw ? 'text' : 'password'}
                value={form.password}
                onChange={set('password')}
                required
                placeholder="Min. 6 characters"
                className="w-full bg-white/5 border border-white/8 hover:border-white/15 focus:border-cyan-500/50 focus:outline-none text-[#e6edf3] placeholder-[#8b949e] rounded-xl px-4 py-3 pr-12 text-sm transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPw(s => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8b949e] hover:text-[#e6edf3]"
              >
                {showPw ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            {form.password && (
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className={cn('h-full rounded-full transition-all', strengthColor)}
                    style={{ width: `${(pwStrength / 3) * 100}%` }}
                  />
                </div>
                <span className={cn('text-xs font-medium',
                  pwStrength === 3 ? 'text-emerald-400' : pwStrength === 2 ? 'text-amber-400' : 'text-red-400'
                )}>{strengthLabel}</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3.5 mt-2 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 text-[#0d1117] font-bold rounded-xl text-sm transition-all shadow-glow-cyan"
          >
            {loading
              ? <span className="w-4 h-4 border-2 border-[#0d1117]/30 border-t-[#0d1117] rounded-full animate-spin" />
              : <>Create Free Account <ArrowRight className="w-4 h-4" /></>
            }
          </button>

          <p className="text-xs text-center text-[#8b949e]">
            By creating an account, you agree to our{' '}
            <Link href="/terms" className="text-cyan-400 hover:text-cyan-300">Terms</Link>{' '}and{' '}
            <Link href="/privacy" className="text-cyan-400 hover:text-cyan-300">Privacy Policy</Link>.
          </p>
        </form>

        <p className="text-center mt-6 text-sm text-[#8b949e]">
          Already have an account?{' '}
          <Link href="/login" className="text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">Sign in</Link>
        </p>
      </div>
    </div>
  )
}
