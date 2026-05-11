'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Pencil, X, Check, Loader2 } from 'lucide-react'
import { BRAND } from '@/lib/brand'

interface Props {
  displayName: string
  bio: string | null
}

export default function ProfileEditForm({ displayName, bio }: Props) {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [name, setName] = useState(displayName)
  const [bioVal, setBioVal] = useState(bio ?? '')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')

  function openForm() {
    setName(displayName)
    setBioVal(bio ?? '')
    setError('')
    setOpen(true)
  }

  function close() {
    setOpen(false)
    setError('')
  }

  async function save(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setSaving(true)
    try {
      const res = await fetch('/api/profile/update', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ display_name: name, bio: bioVal }),
      })
      const data = await res.json() as { error?: string }
      if (!res.ok) {
        setError(data.error ?? 'Something went wrong.')
        return
      }
      setOpen(false)
      router.refresh()
    } catch {
      setError('Network error — please try again.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <>
      <button
        onClick={openForm}
        aria-label="Edit profile"
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-[10px] tracking-[0.12em] uppercase font-semibold transition-opacity hover:opacity-70"
        style={{ border: `1px solid ${BRAND.borderHi}`, color: BRAND.textDim }}
      >
        <Pencil size={10} /> Edit
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-5"
          style={{ backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
          role="dialog"
          aria-modal="true"
          aria-label="Edit profile"
        >
          <div
            className="w-full max-w-md rounded-sm p-6 space-y-5"
            style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.borderHi}` }}
          >
            <div className="flex items-center justify-between">
              <h2 className="font-serif" style={{ fontSize: '22px' }}>Edit Profile</h2>
              <button
                onClick={close}
                aria-label="Close"
                className="p-1 rounded-sm transition-opacity hover:opacity-70"
                style={{ color: BRAND.textSubtle }}
              >
                <X size={16} />
              </button>
            </div>

            <form onSubmit={save} className="space-y-4">
              <div className="space-y-1.5">
                <label
                  className="text-[10px] tracking-[0.2em] uppercase font-mono"
                  style={{ color: BRAND.textSubtle }}
                >
                  Display Name <span style={{ color: BRAND.textSubtle }}>(max 50)</span>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  maxLength={50}
                  required
                  className="w-full px-3 py-2.5 rounded-sm text-sm bg-transparent outline-none"
                  style={{
                    backgroundColor: BRAND.bg,
                    border: `1px solid ${BRAND.borderHi}`,
                    color: BRAND.text,
                  }}
                  aria-label="Display name"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  className="text-[10px] tracking-[0.2em] uppercase font-mono"
                  style={{ color: BRAND.textSubtle }}
                >
                  Bio <span style={{ color: BRAND.textSubtle }}>(max 300, optional)</span>
                </label>
                <textarea
                  value={bioVal}
                  onChange={e => setBioVal(e.target.value)}
                  maxLength={300}
                  rows={3}
                  className="w-full px-3 py-2.5 rounded-sm text-sm bg-transparent outline-none resize-none"
                  style={{
                    backgroundColor: BRAND.bg,
                    border: `1px solid ${BRAND.borderHi}`,
                    color: BRAND.text,
                  }}
                  aria-label="Bio"
                />
                <div className="text-right text-[10px] font-mono" style={{ color: BRAND.textSubtle }}>
                  {bioVal.length} / 300
                </div>
              </div>

              {error && (
                <p className="text-xs" style={{ color: BRAND.ruby }}>
                  {error}
                </p>
              )}

              <div className="flex gap-3 justify-end pt-1">
                <button
                  type="button"
                  onClick={close}
                  className="px-4 py-2 rounded-sm text-[10px] tracking-[0.12em] uppercase font-semibold transition-opacity hover:opacity-70"
                  style={{ border: `1px solid ${BRAND.borderHi}`, color: BRAND.textDim }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving || name.trim().length === 0}
                  className="flex items-center gap-2 px-5 py-2 rounded-sm text-[10px] tracking-[0.12em] uppercase font-semibold transition-opacity hover:opacity-80 disabled:opacity-50"
                  style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
                >
                  {saving ? <Loader2 size={11} className="animate-spin" /> : <Check size={11} />}
                  {saving ? 'Saving…' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
