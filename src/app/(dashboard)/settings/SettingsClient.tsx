'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Key, Trash2, CheckCircle2, Loader, AlertTriangle,
  CreditCard, Zap, ArrowRight, XCircle,
} from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { BRAND } from '@/lib/brand'

type PwState = 'idle' | 'sending' | 'sent' | 'error'
type PortalState = 'idle' | 'loading' | 'error'
type DeleteStep = 'idle' | 'confirm' | 'deleting'

interface Props {
  email: string
  displayName: string | null
  username: string
  subscription: 'free' | 'pro' | 'expert'
  hasStripeCustomer: boolean
}

export default function SettingsClient({ email, displayName, username, subscription, hasStripeCustomer }: Props) {
  const [pwState, setPwState]           = useState<PwState>('idle')
  const [manageState, setManageState]   = useState<PortalState>('idle')
  const [cancelState, setCancelState]   = useState<PortalState>('idle')
  const [deleteStep, setDeleteStep]     = useState<DeleteStep>('idle')
  const [deleteConfirm, setDeleteConfirm] = useState('')

  const isPaid = subscription === 'pro' || subscription === 'expert'
  const planLabel = isPaid ? 'Naturalist' : 'Explorer'
  const planColor = isPaid ? BRAND.accent : BRAND.jade

  async function sendPasswordReset() {
    setPwState('sending')
    const supabase = createClient()
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    if (error) { setPwState('error'); return }
    setPwState('sent')
    setTimeout(() => setPwState('idle'), 6000)
  }

  async function openPortal(endpoint: '/api/stripe/portal' | '/api/stripe/cancel') {
    const setter = endpoint === '/api/stripe/cancel' ? setCancelState : setManageState
    setter('loading')
    try {
      const res = await fetch(endpoint, { method: 'POST' })
      const json = await res.json() as { url?: string; error?: string }
      if (json.url) { window.location.href = json.url; return }
      setter('error')
    } catch {
      setter('error')
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

  const card = {
    backgroundColor: BRAND.surface,
    border: `1px solid ${BRAND.border}`,
  }

  return (
    <div className="space-y-6 max-w-2xl">

      {/* ── Account ───────────────────────────────────────────────────── */}
      <section className="p-6 rounded-sm" style={card}>
        <h2 className="font-serif mb-4" style={{ fontSize: '22px' }}>Account</h2>
        <div className="space-y-4">
          <div>
            <div className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: BRAND.textSubtle }}>Email</div>
            <div className="text-sm font-mono" style={{ color: BRAND.textDim }}>{email}</div>
            <div className="text-[10px] mt-1" style={{ color: BRAND.textSubtle }}>
              To change your email address, contact support.
            </div>
          </div>
          <div>
            <div className="text-[10px] tracking-[0.2em] uppercase mb-1" style={{ color: BRAND.textSubtle }}>Display name</div>
            <div className="text-sm" style={{ color: BRAND.text }}>{displayName ?? username}</div>
            <div className="text-[10px] mt-1" style={{ color: BRAND.textSubtle }}>
              Edit your display name and bio on your{' '}
              <Link href="/profile" className="underline" style={{ color: BRAND.accent }}>Profile page</Link>.
            </div>
          </div>
        </div>
      </section>

      {/* ── Subscription ──────────────────────────────────────────────── */}
      <section className="rounded-sm overflow-hidden" style={{ border: `1px solid ${planColor}40`, backgroundColor: BRAND.surface }}>
        {/* Header */}
        <div
          className="px-6 py-4 flex items-center justify-between"
          style={{ backgroundColor: `${planColor}08`, borderBottom: `1px solid ${planColor}25` }}
        >
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase font-mono mb-0.5" style={{ color: planColor }}>
              Current Plan
            </div>
            <div className="font-serif" style={{ fontSize: '20px' }}>
              {planLabel}
              {isPaid && (
                <span className="ml-2 text-xs font-sans font-normal" style={{ color: BRAND.textSubtle }}>$10/mo</span>
              )}
            </div>
          </div>
          <div
            className="px-2.5 py-1 rounded-sm text-[10px] tracking-[0.15em] uppercase font-semibold"
            style={{
              backgroundColor: isPaid ? `${BRAND.jade}15` : `${planColor}15`,
              border: `1px solid ${isPaid ? BRAND.jade : planColor}30`,
              color: isPaid ? BRAND.jade : planColor,
            }}
          >
            {isPaid ? 'Active' : 'Free Forever'}
          </div>
        </div>

        {/* Actions */}
        <div className="px-6 py-5">
          {isPaid && hasStripeCustomer ? (
            <div className="space-y-3">
              <p className="text-xs" style={{ color: BRAND.textDim }}>
                Your subscription renews monthly. You can update your payment method, download invoices,
                or cancel at any time below.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {/* Manage billing (full portal) */}
                <button
                  onClick={() => openPortal('/api/stripe/portal')}
                  disabled={manageState === 'loading' || cancelState === 'loading'}
                  className="flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-semibold tracking-[0.1em] uppercase transition-opacity hover:opacity-80 disabled:opacity-50"
                  style={{ backgroundColor: BRAND.surfaceHi, border: `1px solid ${BRAND.border}`, color: BRAND.text }}
                >
                  {manageState === 'loading'
                    ? <Loader size={12} className="animate-spin" />
                    : <CreditCard size={12} />
                  }
                  Manage billing
                </button>

                {/* Cancel subscription — direct to cancel flow */}
                <button
                  onClick={() => openPortal('/api/stripe/cancel')}
                  disabled={cancelState === 'loading' || manageState === 'loading'}
                  className="flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-semibold tracking-[0.1em] uppercase transition-opacity hover:opacity-80 disabled:opacity-50"
                  style={{ backgroundColor: `${BRAND.ruby}10`, border: `1px solid ${BRAND.ruby}35`, color: BRAND.ruby }}
                >
                  {cancelState === 'loading'
                    ? <Loader size={12} className="animate-spin" />
                    : <XCircle size={12} />
                  }
                  Cancel subscription
                </button>
              </div>

              {(manageState === 'error' || cancelState === 'error') && (
                <div
                  className="flex items-center gap-2 text-xs px-3 py-2 rounded-sm"
                  style={{ backgroundColor: `${BRAND.ruby}12`, border: `1px solid ${BRAND.ruby}35`, color: BRAND.ruby }}
                >
                  <AlertTriangle size={12} />
                  Couldn&apos;t open the billing portal — please try again.
                </div>
              )}

              <p className="text-[11px]" style={{ color: BRAND.textSubtle }}>
                Cancellation takes effect at the end of your current billing period — you keep full access until then.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs" style={{ color: BRAND.textDim }}>
                You&apos;re on the free Explorer plan. Upgrade to Naturalist to unlock every learning path.
              </p>
              <Link
                href="/billing"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs font-semibold tracking-[0.12em] uppercase transition-opacity hover:opacity-80"
                style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
              >
                <Zap size={12} /> Upgrade to Naturalist <ArrowRight size={12} />
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── Security ──────────────────────────────────────────────────── */}
      <section className="p-6 rounded-sm" style={card}>
        <h2 className="font-serif mb-1" style={{ fontSize: '22px' }}>Security</h2>
        <p className="text-xs mb-4" style={{ color: BRAND.textDim }}>
          A password reset link will be sent to <span className="font-mono">{email}</span>.
        </p>

        {pwState === 'sent' ? (
          <div
            className="flex items-center gap-2 px-4 py-3 rounded-sm text-sm"
            style={{ backgroundColor: `${BRAND.jade}15`, border: `1px solid ${BRAND.jade}40`, color: BRAND.jade }}
          >
            <CheckCircle2 size={14} /> Reset email sent — check your inbox.
          </div>
        ) : pwState === 'error' ? (
          <div
            className="flex items-center gap-2 px-4 py-3 rounded-sm text-sm"
            style={{ backgroundColor: `${BRAND.ruby}15`, border: `1px solid ${BRAND.ruby}40`, color: BRAND.ruby }}
          >
            <AlertTriangle size={14} /> Couldn&apos;t send reset email — try again.
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

      {/* ── Danger Zone ───────────────────────────────────────────────── */}
      <section
        className="p-6 rounded-sm"
        style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.ruby}40` }}
      >
        <h2 className="font-serif mb-1" style={{ fontSize: '22px', color: BRAND.ruby }}>Danger Zone</h2>
        <p className="text-xs mb-4" style={{ color: BRAND.textDim }}>
          Permanently deletes your account, all progress, and associated data. This cannot be undone.
          {isPaid && ' Your subscription will also be cancelled immediately.'}
        </p>

        {deleteStep === 'idle' && (
          <button
            onClick={() => setDeleteStep('confirm')}
            className="flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-semibold tracking-[0.1em] uppercase transition-opacity hover:opacity-80"
            style={{ backgroundColor: `${BRAND.ruby}12`, border: `1px solid ${BRAND.ruby}40`, color: BRAND.ruby }}
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
              value={deleteConfirm}
              onChange={e => setDeleteConfirm(e.target.value)}
              placeholder="DELETE"
              className="w-full px-3 py-2 rounded-sm text-sm font-mono outline-none"
              style={{ backgroundColor: BRAND.bg, border: `1px solid ${BRAND.border}`, color: BRAND.text }}
            />
            <div className="flex gap-2">
              <button
                onClick={deleteAccount}
                disabled={deleteConfirm !== 'DELETE'}
                className="flex items-center gap-2 px-4 py-2 rounded-sm text-xs font-semibold tracking-[0.1em] uppercase transition-opacity hover:opacity-80 disabled:opacity-30"
                style={{ backgroundColor: BRAND.ruby, color: '#fff' }}
              >
                <Trash2 size={12} /> Confirm delete
              </button>
              <button
                onClick={() => { setDeleteStep('idle'); setDeleteConfirm('') }}
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
