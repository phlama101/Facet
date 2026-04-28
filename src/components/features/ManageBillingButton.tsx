'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
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
    <motion.button
      onClick={openPortal}
      disabled={loading}
      whileHover={loading ? undefined : { scale: 1.03, y: -1 }}
      whileTap={loading ? undefined : { scale: 0.97 }}
      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border border-white/10 bg-white/[0.03] text-[#9CA0AE] hover:text-[#e6edf3] hover:border-white/20 hover:bg-white/[0.06] transition-colors disabled:opacity-50"
    >
      {loading ? (
        <span className="w-3 h-3 border border-current/40 border-t-current rounded-full animate-spin" />
      ) : (
        <CreditCard size={12} />
      )}
      Manage Billing
    </motion.button>
  )
}
