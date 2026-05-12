'use client'

import { BRAND } from '@/lib/brand'
import type { ScientificDiagramConfig } from '@/lessons/types'
import { EarthCrossSection } from '@/components/diagrams/EarthCrossSection'
import { AtmosphereProfile } from '@/components/diagrams/AtmosphereProfile'
import { EarthEnergyBudget } from '@/components/diagrams/EarthEnergyBudget'
import { RockCycleDiagram } from '@/components/diagrams/RockCycleDiagram'
import { SeismicShadowZone } from '@/components/diagrams/SeismicShadowZone'

const DIAGRAMS: Record<string, React.FC> = {
  'earth-cross-section':     EarthCrossSection,
  'atmosphere-temp-profile': AtmosphereProfile,
  'earth-energy-budget':     EarthEnergyBudget,
  'rock-cycle':              RockCycleDiagram,
  'seismic-shadow-zone':     SeismicShadowZone,
}

interface Props {
  config: ScientificDiagramConfig
}

export default function ScientificDiagram({ config }: Props) {
  const Diagram = DIAGRAMS[config.id]
  if (!Diagram) return null

  return (
    <div className="rounded-sm overflow-hidden" style={{ border: `1px solid ${BRAND.border}` }}>
      <Diagram />
      {(config.caption || config.credit) && (
        <div
          className="px-4 py-2.5 flex items-start justify-between gap-4"
          style={{ backgroundColor: BRAND.surface, borderTop: `1px solid ${BRAND.border}` }}
        >
          {config.caption && (
            <p className="text-[10px] leading-relaxed flex-1" style={{ color: BRAND.textSubtle }}>
              {config.caption}
            </p>
          )}
          {config.credit && (
            <p className="text-[10px] font-mono shrink-0" style={{ color: BRAND.textSubtle }}>
              {config.credit}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
