'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Zap, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'

interface Props {
  priceId: string
  planKey: string
  label?: string
  accent: string
  solid?: boolean
}

export default function BillingUpgradeButton({ priceId, planKey, label = 'Upgrade', accent, solid = true }: Props) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleClick() {
    setLoading(true)
    try {
      const res = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ priceId }),
      })
      const json = await res.json() as { url?: string; error?: string }
      if (json.error === 'Unauthorized') { router.push('/login?next=/billing'); return }
      if (json.url) window.location.href = json.url
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm text-xs font-semibold tracking-[0.1em] uppercase transition-opacity hover:opacity-80 disabled:opacity-50"
      style={solid
        ? { backgroundColor: accent, color: BRAND.bg }
        : { backgroundColor: `${accent}15`, border: `1px solid ${accent}40`, color: accent }
      }
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
      ) : (
        <>
          <Zap size={12} />
          {label}
          <ArrowRight size={12} />
        </>
      )}
    </button>
  )
}
