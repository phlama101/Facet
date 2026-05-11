import Link from 'next/link'
import { Compass } from 'lucide-react'
import { BRAND } from '@/lib/brand'

export default function DashboardNotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <div
          className="w-14 h-14 rounded-sm flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: `${BRAND.accent}18`, border: `1px solid ${BRAND.accent}40` }}
        >
          <Compass size={24} color={BRAND.accent} />
        </div>
        <div
          className="text-[10px] tracking-[0.25em] uppercase mb-3 font-mono"
          style={{ color: BRAND.accent }}
        >
          404
        </div>
        <h1 className="font-serif mb-3" style={{ fontSize: 'clamp(28px, 4vw, 36px)', lineHeight: 1.1 }}>
          Page not found
        </h1>
        <p className="text-sm leading-relaxed mb-8" style={{ color: BRAND.textDim }}>
          This page doesn&apos;t exist or may have been moved.
        </p>
        <div className="flex gap-3 justify-center">
          <Link
            href="/dashboard"
            className="px-5 py-2.5 rounded-sm text-xs font-semibold tracking-[0.12em] uppercase transition-opacity hover:opacity-80"
            style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
          >
            Dashboard
          </Link>
          <Link
            href="/learn"
            className="px-5 py-2.5 rounded-sm text-xs font-semibold tracking-[0.12em] uppercase transition-opacity hover:opacity-70"
            style={{ border: `1px solid ${BRAND.borderHi}`, color: BRAND.text }}
          >
            Browse lessons
          </Link>
        </div>
      </div>
    </div>
  )
}
