import { Lightbulb, AlertTriangle, Sparkles, BarChart2 } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { CalloutSection } from '@/lessons/types'

const VARIANTS = {
  fact:    { Icon: Lightbulb,     color: BRAND.accent,    label: 'Did You Know?' },
  warning: { Icon: AlertTriangle, color: BRAND.coral,     label: 'Important'     },
  insight: { Icon: Sparkles,      color: BRAND.amethyst,  label: 'Insight'       },
  data:    { Icon: BarChart2,     color: BRAND.jade,      label: 'By the Numbers'},
} as const

interface Props {
  section: CalloutSection
}

export default function CalloutBlock({ section }: Props) {
  const { Icon, color, label } = VARIANTS[section.variant]
  return (
    <div
      className="px-4 py-4 rounded-sm"
      style={{
        backgroundColor: `${color}0D`,
        border: `1px solid ${color}30`,
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <Icon size={14} style={{ color, flexShrink: 0 }} />
        <span
          className="text-[10px] tracking-[0.2em] uppercase font-mono font-semibold"
          style={{ color }}
        >
          {label}
        </span>
      </div>
      <div className="text-sm font-semibold mb-1" style={{ color: BRAND.text }}>
        {section.headline}
      </div>
      <p className="text-sm leading-relaxed" style={{ color: BRAND.textDim }}>
        {section.body}
      </p>
    </div>
  )
}
