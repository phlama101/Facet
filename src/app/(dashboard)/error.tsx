'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { BRAND } from '@/lib/brand'

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div
      className="min-h-[60vh] flex items-center justify-center px-5"
      style={{ color: BRAND.text }}
    >
      <div className="text-center max-w-md">
        <div
          className="w-14 h-14 rounded-sm flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: `${BRAND.ruby}15`, border: `1px solid ${BRAND.ruby}40` }}
        >
          <AlertTriangle size={24} color={BRAND.ruby} />
        </div>
        <h1 className="font-serif" style={{ fontSize: '28px' }}>Something went wrong</h1>
        <p className="text-sm mt-3 leading-relaxed" style={{ color: BRAND.textDim }}>
          We couldn&apos;t load this page. This is usually a temporary issue.
        </p>
        {error.digest && (
          <p className="font-mono text-[10px] mt-2" style={{ color: BRAND.textSubtle }}>
            ref: {error.digest}
          </p>
        )}
        <div className="mt-8 flex gap-3 justify-center">
          <button
            onClick={reset}
            className="px-5 py-2.5 rounded-sm text-xs font-semibold tracking-[0.12em] uppercase flex items-center gap-2 transition-opacity hover:opacity-80"
            style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
          >
            <RefreshCw size={12} /> Try again
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 rounded-sm text-xs font-semibold tracking-[0.12em] uppercase"
            style={{ border: `1px solid ${BRAND.borderHi}`, color: BRAND.text }}
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}
