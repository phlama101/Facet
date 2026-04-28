'use client'

import { BRAND } from '@/lib/brand'
import type { V2VisualizationSection } from '@/lessons-v2/types'
import InteractionRenderer from '../interactions/InteractionRenderer'

interface Props {
  section: V2VisualizationSection
}

export default function VisualizationBlock({ section }: Props) {
  return (
    <div className="space-y-6">
      <div className="space-y-1">
        <p className="text-xs tracking-widest uppercase" style={{ color: BRAND.textSubtle }}>
          Visualization
        </p>
        <h2
          className="font-serif"
          style={{ fontSize: 'clamp(22px, 3.5vw, 32px)', lineHeight: 1.15, color: BRAND.text }}
        >
          {section.title}
        </h2>
      </div>

      <p className="text-base leading-relaxed" style={{ color: BRAND.textDim }}>
        {section.body}
      </p>

      <InteractionRenderer interaction={section.interaction} />
    </div>
  )
}
