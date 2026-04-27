'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, ArrowRight } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { cn } from '@/lib/utils'

export default function ResetPasswordPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const pwStrength = password.length === 0 ? 0 : password.length < 6 ? 1 : password.length < 10 ? 2 : 3
  const strengthLabel = ['', 'Weak', 'Good', 'Strong'][pwStrength]
  const strengthColor = ['', 'bg-red-500', 'bg-amber-400', 'bg-emerald-500'][pwStrength]

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (password.length < 6) { setError('Password must be at least 6 characters'); return }
    if (password !== confirm) { setError('Passwords do not match'); return }
    setLoading(true)
    const supabase = createClient()
    const { error: err } = await supabase.auth.updateUser({ password })
    if (err) { setError(err.message); setLoading(false); return }
    router.push('/dashboard')
    router.refresh()
  }

  return (
    <div className="min-h-screen bg-[#0d1117] hero-bg flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2.5 font-black text-2xl">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-glow-cyan">🌍</div>
            <span className="text-[#e6edf3]">Facet</span>
          </Link>
          <h1 className="mt-6 text-2xl font-black text-[#e6edf3]">Set new password</h1>
          <p className="mt-2 text-sm text-[#8b949e]">Choose a strong password for your account</p>
        </div>

        <form onSubmit={handleSubmit} className="glass border border-white/8 rounded-2xl p-8 space-y-5">
          {error && (
            <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400">{error}</div>
          )}

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#8b949e] uppercase tracking-wide">New Password</label>
            <div className="relative">
              <input
                type={showPw ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
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
            {password && (
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

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-[#8b949e] uppercase tracking-wide">Confirm Password</label>
            <input
              type={showPw ? 'text' : 'password'}
              value={confirm}
              onChange={e => setConfirm(e.target.value)}
              required
              placeholder="Repeat your password"
              className={cn(
                'w-full bg-white/5 border hover:border-white/15 focus:outline-none text-[#e6edf3] placeholder-[#8b949e] rounded-xl px-4 py-3 text-sm transition-colors',
                confirm && confirm !== password
                  ? 'border-red-500/50 focus:border-red-500/70'
                  : 'border-white/8 focus:border-cyan-500/50'
              )}
            />
            {confirm && confirm !== password && (
              <p className="text-xs text-red-400">Passwords don't match</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 text-[#0d1117] font-bold rounded-xl text-sm transition-all shadow-glow-cyan"
          >
            {loading
              ? <span className="w-4 h-4 border-2 border-[#0d1117]/30 border-t-[#0d1117] rounded-full animate-spin" />
              : <>Update Password <ArrowRight className="w-4 h-4" /></>
            }
          </button>
        </form>
      </div>
    </div>
  )
}
