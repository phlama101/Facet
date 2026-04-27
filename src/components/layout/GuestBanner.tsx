import Link from 'next/link'
import { Info, UserPlus } from 'lucide-react'
import { BRAND } from '@/lib/brand'

export default function GuestBanner() {
  return (
    <div
      style={{
        borderBottom: `1px solid ${BRAND.border}`,
        backgroundColor: 'rgba(122,215,240,0.06)',
      }}
    >
      <div className="max-w-6xl mx-auto px-5 py-2.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 text-xs" style={{ color: BRAND.text }}>
          <Info size={14} color={BRAND.accent} className="flex-shrink-0" />
          <span>
            Exploring as a guest.{' '}
            <span className="hidden sm:inline" style={{ color: BRAND.textDim }}>
              Create a free account to save your progress.
            </span>
          </span>
        </div>
        <Link
          href="/register"
          className="flex items-center gap-1.5 px-3 py-1 rounded-sm text-[10px] font-semibold tracking-[0.12em] uppercase whitespace-nowrap transition-opacity hover:opacity-80"
          style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
        >
          <UserPlus size={10} /> Sign Up
        </Link>
      </div>
    </div>
  )
}
