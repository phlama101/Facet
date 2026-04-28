'use client'

import { useState } from 'react'
import { CreditCard } from 'lucide-react'

export default function ManageBillingButton() {
  const [loading, setLoading] = useState(false)

  async function openPortal() {
    setLoading(true)
    try {
      const res = await fetch('/api/stripe/portal', { method: 'POST' })
      const json = await res.json() as { url?: string; error?: string }
      if (json.url) window.location.href = json.url
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={openPortal}
      disabled={loading}
      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-sm text-xs font-semibold transition-opacity hover:opacity-70 disabled:opacity-50"
      style={{ border: '1px solid #3A3E4D', color: '#9CA0AE', backgroundColor: 'transparent' }}
    >
      {loading ? (
        <span className="w-3 h-3 border border-current/40 border-t-current rounded-full animate-spin" />
      ) : (
        <CreditCard size={12} />
      )}
      Manage Billing
    </button>
  )
}
