'use client'

import { Suspense, useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Eye, EyeOff, ArrowRight } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { BRAND } from '@/lib/brand'
import FacetLogo from '@/components/brand/FacetLogo'
import FacetBackground from '@/components/brand/FacetBackground'
import FacetInput from '@/components/ui/FacetInput'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [showPw, setShowPw]     = useState(false)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)
    const supabase = createClient()
    const { error: err } = await supabase.auth.signInWithPassword({ email, password })
    if (err) { setError(err.message); setLoading(false); return }
    const next = searchParams.get('next')
    // Reject protocol-relative URLs (//evil.com) and anything with a scheme
    const safe = next && next.startsWith('/') && !next.startsWith('//') && !next.includes(':') ? next : '/dashboard'
    router.push(safe)
    router.refresh()
  }

  return (
    <div className="relative z-10 w-full max-w-md">
      {/* Logo */}
      <div className="text-center mb-10">
        <Link href="/" className="inline-flex items-center gap-3">
          <FacetLogo size={32} />
          <div className="font-serif" style={{ fontSize: '28px', letterSpacing: '-0.02em', lineHeight: 1 }}>
            Facet
          </div>
        </Link>
        <div className="text-[10px] tracking-[0.25em] uppercase mt-4" style={{ color: BRAND.accent }}>
          Return
        </div>
        <h1 className="font-serif mt-1" style={{ fontSize: '32px', lineHeight: 1 }}>
          Sign in
        </h1>
        <p className="text-xs mt-2" style={{ color: BRAND.textDim }}>
          Continue where you left off.
        </p>
      </div>

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

        <FacetInput label="Email"    value={email}    onChange={setEmail}    type="email"    placeholder="you@example.com" />
        <FacetInput
          label="Password"
          value={password}
          onChange={setPassword}
          type={showPw ? 'text' : 'password'}
          placeholder="Your password"
          onEnter={handleSubmit as never}
          rightButton={
            <button type="button" onClick={() => setShowPw(s => !s)} style={{ color: BRAND.textDim }}>
              {showPw ? <EyeOff size={14} /> : <Eye size={14} />}
            </button>
          }
        />

        <div className="flex justify-end">
          <Link href="/forgot-password" className="text-xs" style={{ color: BRAND.accent }}>
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-3 rounded-sm text-xs font-semibold tracking-[0.15em] uppercase flex items-center justify-center gap-2 disabled:opacity-50 transition-opacity hover:opacity-80"
          style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
        >
          {loading
            ? <span className="w-4 h-4 border-2 rounded-full animate-spin" style={{ borderColor: `${BRAND.bg}40`, borderTopColor: BRAND.bg }} />
            : <>Sign In <ArrowRight size={12} /></>
          }
        </button>
      </form>

      <p className="text-center mt-6 text-xs" style={{ color: BRAND.textDim }}>
        New here?{' '}
        <Link href="/register" className="font-semibold transition-opacity hover:opacity-70" style={{ color: BRAND.accent }}>
          Create a free account
        </Link>
      </p>
    </div>
  )
}

export default function LoginPage() {
  return (
    <div
      className="min-h-screen relative flex items-center justify-center px-4 py-16"
      style={{ backgroundColor: BRAND.bg, color: BRAND.text, fontFamily: 'var(--font-sans)' }}
    >
      <FacetBackground />
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  )
}
