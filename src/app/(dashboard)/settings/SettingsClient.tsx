'use client'

import { useState } from 'react'
import { Key, Trash2, CheckCircle2, Loader, AlertTriangle } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { BRAND } from '@/lib/brand'

interface Props {
  email: string
  displayName: string | null
  username: string
}

type PwState = 'idle' | 'sending' | 'sent' | 'error'
type DeleteStep = 'idle' | 'confirm' | 'deleting'

export default function SettingsClient({ email, displayName, username }: Props) {
  const [pwState, setPwState] = useState<PwState>('idle')
  const [deleteStep, setDeleteStep] = useState<DeleteStep>('idle')
  const [deleteConfirmText, setDeleteConfirmText] = useState('')

  async function sendPasswordReset() {
    setPwState('sending')
    const supabase = createClient()
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    if (error) {
      setPwState('error')
    } else {
      setPwState('sent')
      setTimeout(() => setPwState('idle'), 6000)
    }
  }

  async function deleteAccount() {
    setDeleteStep('deleting')
    try {
      const res = await fetch('/api/delete-account', { method: 'DELETE' })
      if (!res.ok) throw new Error()
      const supabase = createClient()
      await supabase.auth.signOut()
      window.location.href = '/'
    } catch {
      setDeleteStep('confirm')
    }
  }

  const sectionStyle = {
    backgroundColor: BRAND.surface,
    border: `1px solid ${BRAND.border}`,
  }

  return (
    <div className="space-y-6 max-w-2xl">

      {/* Account info */}
      <section className="p-6 rounded-sm" style={sectionStyle}>
        <h2 className="font-serif mb-4" style={{ fontSize: '22px' }}>Account</h2>
        <div className="space-y-4">
          <div>
            <div className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: BRAND.textSubtle }}>
              Email
            </div>
            <div className="text-sm font-mono" style={{ color: BRAND.textDim }}>{email}</div>
            <div className="text-[10px] mt-1" style={{ color: BRAND.textSubtle }}>
              Email address cannot be changed directly — contact support if needed.
            </div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: BRAND.textSubtle }}>
              Display name
            </div>
            <div className="text-sm" style={{ color: BRAND.text }}>{displayName ?? username}</div>
            <div className="text-[10px] mt-1" style={{ color: BRAND.textSubtle }}>
              Edit your display name and bio from your{' '}
              <a href="/profile" className="underline" style={{ color: BRAND.accent }}>profile page</a>.
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="p-6 rounded-sm" style={sectionStyle}>
        <h2 className="font-serif mb-1" style={{ fontSize: '22px' }}>Security</h2>
        <p className="text-xs mb-4" style={{ color: BRAND.textDim }}>
          A password reset link will be sent to <span className="font-mono">{email}</span>.
        </p>

        {pwState === 'sent' ? (
          <div
            className="flex items-center gap-2 px-4 py-3 rounded-sm text-sm"
            style={{ backgroundColor: `${BRAND.jade}15`, border: `1px solid ${BRAND.jade}40`, color: BRAND.jade }}
          >
            <CheckCircle2 size={14} />
            Reset email sent — check your inbox.
          </div>
        ) : pwState === 'error' ? (
          <div
            className="flex items-center gap-2 px-4 py-3 rounded-sm text-sm"
            style={{ backgroundColor: `${BRAND.ruby}15`, border: `1px solid ${BRAND.ruby}40`, color: BRAND.ruby }}
          >
            <AlertTriangle size={14} />
            Couldn&apos;t send reset email — try again.
          </div>
        ) : (
          <button
            onClick={sendPasswordReset}
            disabled={pwState === 'sending'}
            className="flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-semibold tracking-[0.1em] uppercase transition-opacity hover:opacity-80 disabled:opacity-50"
            style={{ backgroundColor: BRAND.surfaceHi, border: `1px solid ${BRAND.border}`, color: BRAND.text }}
          >
            {pwState === 'sending'
              ? <><Loader size={12} className="animate-spin" /> Sending…</>
              : <><Key size={12} /> Change password</>
            }
          </button>
        )}
      </section>

      {/* Danger zone */}
      <section
        className="p-6 rounded-sm"
        style={{ ...sectionStyle, border: `1px solid ${BRAND.ruby}40` }}
      >
        <h2 className="font-serif mb-1" style={{ fontSize: '22px', color: BRAND.ruby }}>Danger Zone</h2>
        <p className="text-xs mb-4" style={{ color: BRAND.textDim }}>
          Permanently deletes your account, progress, and all associated data. This cannot be undone.
        </p>

        {deleteStep === 'idle' && (
          <button
            onClick={() => setDeleteStep('confirm')}
            className="flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-semibold tracking-[0.1em] uppercase transition-opacity hover:opacity-80"
            style={{ backgroundColor: `${BRAND.ruby}15`, border: `1px solid ${BRAND.ruby}40`, color: BRAND.ruby }}
          >
            <Trash2 size={12} /> Delete account
          </button>
        )}

        {deleteStep === 'confirm' && (
          <div className="space-y-3">
            <p className="text-xs" style={{ color: BRAND.textDim }}>
              Type <span className="font-mono font-semibold" style={{ color: BRAND.text }}>DELETE</span> to confirm.
            </p>
            <input
              type="text"
              value={deleteConfirmText}
              onChange={e => setDeleteConfirmText(e.target.value)}
              placeholder="DELETE"
              className="w-full px-3 py-2 rounded-sm text-sm font-mono outline-none"
              style={{
                backgroundColor: BRAND.bg,
                border: `1px solid ${BRAND.border}`,
                color: BRAND.text,
              }}
            />
            <div className="flex gap-2">
              <button
                onClick={deleteAccount}
                disabled={deleteConfirmText !== 'DELETE'}
                className="flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-semibold tracking-[0.1em] uppercase transition-opacity hover:opacity-80 disabled:opacity-30"
                style={{ backgroundColor: BRAND.ruby, color: '#fff' }}
              >
                <Trash2 size={12} /> Confirm delete
              </button>
              <button
                onClick={() => { setDeleteStep('idle'); setDeleteConfirmText('') }}
                className="px-4 py-2 rounded-sm text-xs tracking-[0.1em] uppercase transition-opacity hover:opacity-70"
                style={{ color: BRAND.textDim }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {deleteStep === 'deleting' && (
          <div className="flex items-center gap-2 text-sm" style={{ color: BRAND.textDim }}>
            <Loader size={14} className="animate-spin" /> Deleting account…
          </div>
        )}
      </section>
    </div>
  )
}
