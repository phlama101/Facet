'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { BRAND } from '@/lib/brand'

export default function GlobalError({
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
    <html>
      <body style={{ backgroundColor: BRAND.bg, color: BRAND.text, fontFamily: 'Inter, sans-serif' }}>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '400px' }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                backgroundColor: `${BRAND.ruby}15`,
                border: `1px solid ${BRAND.ruby}40`,
              }}
            >
              <AlertTriangle size={24} color={BRAND.ruby} />
            </div>
            <h1 style={{ fontFamily: 'serif', fontSize: 28, marginBottom: 12 }}>Something went wrong</h1>
            <p style={{ fontSize: 13, color: BRAND.textDim, lineHeight: 1.6 }}>
              An unexpected error occurred. This is usually temporary.
            </p>
            {error.digest && (
              <p style={{ fontFamily: 'monospace', fontSize: 10, color: BRAND.textSubtle, marginTop: 8 }}>
                ref: {error.digest}
              </p>
            )}
            <div style={{ marginTop: 32, display: 'flex', gap: 12, justifyContent: 'center' }}>
              <button
                onClick={reset}
                style={{
                  padding: '10px 20px',
                  borderRadius: 4,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  backgroundColor: BRAND.accent,
                  color: BRAND.bg,
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <RefreshCw size={12} /> Try again
              </button>
              <Link
                href="/"
                style={{
                  padding: '10px 20px',
                  borderRadius: 4,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  border: `1px solid ${BRAND.borderHi}`,
                  color: BRAND.text,
                  textDecoration: 'none',
                }}
              >
                Go home
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
