import type { LucideIcon } from 'lucide-react'
import { BRAND } from '@/lib/brand'

interface StatCardProps {
  label: string
  value: string | number
  sub?: string
  icon: LucideIcon
  accent: string
}

export default function StatCard({ label, value, sub, icon: Icon, accent }: StatCardProps) {
  return (
    <div
      className="p-4 rounded-sm relative overflow-hidden group transition-all duration-300"
      style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
    >
      {/* Glow blob — expands on hover */}
      <div
        className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl pointer-events-none transition-all duration-500 opacity-10 group-hover:opacity-25 group-hover:scale-150"
        style={{ backgroundColor: accent }}
      />
      <div className="flex items-start justify-between mb-2">
        <Icon size={14} color={accent} />
        <span className="text-[9px] tracking-[0.2em] uppercase" style={{ color: BRAND.textSubtle }}>
          {label}
        </span>
      </div>
      <div className="flex items-baseline gap-1">
        <span
          className="font-serif leading-none"
          style={{ fontSize: '32px', color: accent }}
        >
          {value}
        </span>
        {sub && (
          <span className="text-xs" style={{ color: BRAND.textSubtle }}>{sub}</span>
        )}
      </div>
    </div>
  )
}
