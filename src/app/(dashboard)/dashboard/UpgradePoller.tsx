'use client'

import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

// Polls by calling router.refresh() until the server-rendered page shows a
// non-free subscription (meaning the Stripe webhook landed) or we give up
// after ~16 seconds (8 attempts × 2s).
export default function UpgradePoller() {
  const router = useRouter()
  const attempts = useRef(0)

  useEffect(() => {
    const interval = setInterval(() => {
      attempts.current += 1
      router.refresh()
      if (attempts.current >= 8) clearInterval(interval)
    }, 2000)
    return () => clearInterval(interval)
  }, [router])

  return null
}
