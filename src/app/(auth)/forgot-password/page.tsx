'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, ArrowRight, Mail } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { BRAND } from '@/lib/brand'
import FacetLogo from '@/components/brand/FacetLogo'
import FacetBackground from '@/components/brand/FacetBackground'
import FacetInput from '@/components/ui/FacetInput'

export default function ForgotPasswordPage() {
  const [email, setEmail]     = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError]     = useState('')

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
    <div
      className="min-h-screen relative flex items-center justify-center px-4 py-16"
      style={{ backgroundColor: BRAND.bg, color: BRAND.text, fontFamily: 'var(--font-sans)' }}
    >
      <FacetBackground />
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-3">
            <FacetLogo size={32} />
            <div className="font-serif" style={{ fontSize: '28px', lineHeight: 1 }}>Facet</div>
          </Link>
        </div>

        <div
          className="p-8 rounded-sm"
          style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
        >
          {success ? (
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-sm flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: `${BRAND.accent}15`, border: `1px solid ${BRAND.accent}40` }}
              >
                <Mail size={28} color={BRAND.accent} />
              </div>
              <h1 className="font-serif" style={{ fontSize: '24px' }}>Check your email</h1>
              <p className="text-sm mt-2" style={{ color: BRAND.textDim }}>Reset link sent to</p>
              <p className="font-semibold mt-1" style={{ color: BRAND.accent }}>{email}</p>
              <p className="text-xs mt-4 leading-relaxed" style={{ color: BRAND.textDim }}>
                Click the link to set a new password. Check your spam folder if you don&apos;t see it.
              </p>
              <Link
                href="/login"
                className="inline-block mt-6 text-xs font-semibold tracking-[0.1em] uppercase transition-opacity hover:opacity-70"
                style={{ color: BRAND.accent }}
              >
                Back to sign in
              </Link>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h1 className="font-serif" style={{ fontSize: '24px' }}>Reset your password</h1>
                <p className="text-xs mt-2" style={{ color: BRAND.textDim }}>
                  Enter your email and we&apos;ll send a reset link.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div
                    className="p-3 rounded-sm text-xs"
                    style={{ backgroundColor: 'rgba(226,91,110,0.1)', border: `1px solid ${BRAND.ruby}`, color: BRAND.ruby }}
                  >
                    {error}
                  </div>
                )}

                <FacetInput label="Email" value={email} onChange={setEmail} type="email" placeholder="you@example.com" />

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-sm text-xs font-semibold tracking-[0.15em] uppercase flex items-center justify-center gap-2 disabled:opacity-50 transition-opacity hover:opacity-80"
                  style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
                >
                  {loading
                    ? <span className="w-4 h-4 border-2 rounded-full animate-spin" style={{ borderColor: `${BRAND.bg}40`, borderTopColor: BRAND.bg }} />
                    : <>Send Reset Link <ArrowRight size={12} /></>
                  }
                </button>
              </form>

              <div className="mt-6 text-center">
                <Link
                  href="/login"
                  className="inline-flex items-center gap-1.5 text-xs transition-opacity hover:opacity-70"
                  style={{ color: BRAND.textDim }}
                >
                  <ArrowLeft size={12} /> Back to sign in
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
