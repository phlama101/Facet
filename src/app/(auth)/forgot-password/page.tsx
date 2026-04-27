'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Mail } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const supabase = createClient()
    const { error: err } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/reset-password`,
    })
    setLoading(false)
    if (err) { setError(err.message); return }
    setSuccess(true)
  }

  return (
    <div className="min-h-screen bg-[#0d1117] hero-bg flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2.5 font-black text-2xl">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center shadow-glow-cyan">🌍</div>
            <span className="text-[#e6edf3]">Facet</span>
          </Link>
        </div>

        <div className="glass border border-white/8 rounded-2xl p-8">
          {success ? (
            <div className="text-center">
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-cyan-400" />
              </div>
              <h1 className="text-xl font-black text-[#e6edf3] mb-3">Check your email</h1>
              <p className="text-[#8b949e] text-sm mb-1">We sent a password reset link to</p>
              <p className="text-cyan-400 font-semibold mb-6">{email}</p>
              <p className="text-sm text-[#8b949e] mb-8">
                Click the link to set a new password. Check your spam folder if you don't see it.
              </p>
              <Link href="/login" className="text-sm text-cyan-400 hover:text-cyan-300 font-semibold transition-colors">
                Back to sign in
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h1 className="text-xl font-black text-[#e6edf3] mb-2">Reset your password</h1>
                <p className="text-sm text-[#8b949e]">Enter your email and we'll send you a reset link.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400">{error}</div>
                )}

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#8b949e] uppercase tracking-wide">Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    placeholder="you@example.com"
                    className="w-full bg-white/5 border border-white/8 hover:border-white/15 focus:border-cyan-500/50 focus:outline-none text-[#e6edf3] placeholder-[#8b949e] rounded-xl px-4 py-3 text-sm transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 text-[#0d1117] font-bold rounded-xl text-sm transition-all shadow-glow-cyan"
                >
                  {loading
                    ? <span className="w-4 h-4 border-2 border-[#0d1117]/30 border-t-[#0d1117] rounded-full animate-spin" />
                    : <>Send Reset Link <ArrowRight className="w-4 h-4" /></>
                  }
                </button>
              </form>

              <div className="mt-6 text-center">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1.5 text-sm text-[#8b949e] hover:text-[#e6edf3] transition-colors"
                >
                  <ArrowLeft className="w-3.5 h-3.5" /> Back to sign in
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
