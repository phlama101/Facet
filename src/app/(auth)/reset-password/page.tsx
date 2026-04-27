'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff, ArrowRight } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { BRAND } from '@/lib/brand'
import FacetLogo from '@/components/brand/FacetLogo'
import FacetBackground from '@/components/brand/FacetBackground'
import FacetInput from '@/components/ui/FacetInput'

export default function ResetPasswordPage() {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [confirm, setConfirm]   = useState('')
  const [showPw, setShowPw]     = useState(false)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState('')

  const pwStrength = password.length === 0 ? 0 : password.length < 6 ? 1 : password.length < 10 ? 2 : 3
  const strengthLabel = ['', 'Weak', 'Good', 'Strong'][pwStrength]
  const strengthColor = ['', BRAND.ruby, BRAND.gold, BRAND.jade][pwStrength]

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
          <h1 className="font-serif mt-6" style={{ fontSize: '32px', lineHeight: 1 }}>Set new password</h1>
          <p className="text-xs mt-2" style={{ color: BRAND.textDim }}>Choose a strong password for your account.</p>
        </div>

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

          <div>
            <FacetInput
              label="New Password"
              value={password}
              onChange={setPassword}
              type={showPw ? 'text' : 'password'}
              placeholder="At least 6 characters"
              rightButton={
                <button type="button" onClick={() => setShowPw(s => !s)} style={{ color: BRAND.textDim }}>
                  {showPw ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              }
            />
            {password && (
              <div className="flex items-center gap-2 mt-1.5">
                <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ backgroundColor: BRAND.border }}>
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${(pwStrength / 3) * 100}%`, backgroundColor: strengthColor }}
                  />
                </div>
                <span className="text-[10px] font-medium" style={{ color: strengthColor }}>{strengthLabel}</span>
              </div>
            )}
          </div>

          <FacetInput
            label="Confirm Password"
            value={confirm}
            onChange={setConfirm}
            type={showPw ? 'text' : 'password'}
            placeholder="Repeat your password"
          />
          {confirm && confirm !== password && (
            <p className="text-[10px]" style={{ color: BRAND.ruby }}>Passwords don&apos;t match</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-sm text-xs font-semibold tracking-[0.15em] uppercase flex items-center justify-center gap-2 disabled:opacity-50 transition-opacity hover:opacity-80"
            style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
          >
            {loading
              ? <span className="w-4 h-4 border-2 rounded-full animate-spin" style={{ borderColor: `${BRAND.bg}40`, borderTopColor: BRAND.bg }} />
              : <>Update Password <ArrowRight size={12} /></>
            }
          </button>
        </form>
      </div>
    </div>
  )
}
