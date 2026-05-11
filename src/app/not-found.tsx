import Link from 'next/link'
import { Compass } from 'lucide-react'
import { BRAND } from '@/lib/brand'

export default function NotFound() {
  return (
    <html>
      <body style={{ backgroundColor: BRAND.bg, color: BRAND.text, fontFamily: 'Inter, sans-serif', margin: 0 }}>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div style={{ textAlign: 'center', maxWidth: '420px' }}>
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                backgroundColor: `${BRAND.accent}18`,
                border: `1px solid ${BRAND.accent}40`,
              }}
            >
              <Compass size={24} color={BRAND.accent} />
            </div>
            <p style={{ fontFamily: 'monospace', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: BRAND.accent, marginBottom: 12 }}>
              404
            </p>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 36, margin: '0 0 12px', lineHeight: 1.1 }}>
              Page not found
            </h1>
            <p style={{ fontSize: 13, color: BRAND.textDim, lineHeight: 1.6, margin: '0 0 32px' }}>
              This page doesn&apos;t exist or may have been moved.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
              <Link
                href="/"
                style={{
                  padding: '10px 20px',
                  borderRadius: 4,
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  backgroundColor: BRAND.accent,
                  color: BRAND.bg,
                  textDecoration: 'none',
                }}
              >
                Go home
              </Link>
              <Link
                href="/learn"
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
                Browse lessons
              </Link>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
