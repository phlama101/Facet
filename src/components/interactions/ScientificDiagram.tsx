'use client'

import { BRAND } from '@/lib/brand'
import type { ScientificDiagramConfig } from '@/lessons/types'
import { EarthCrossSection } from '@/components/diagrams/EarthCrossSection'
import { AtmosphereProfile } from '@/components/diagrams/AtmosphereProfile'
import { EarthEnergyBudget } from '@/components/diagrams/EarthEnergyBudget'
import { RockCycleDiagram } from '@/components/diagrams/RockCycleDiagram'
import { SeismicShadowZone } from '@/components/diagrams/SeismicShadowZone'
import { PlateBoundaries } from '@/components/diagrams/PlateBoundaries'
import { GeologicTimescale } from '@/components/diagrams/GeologicTimescale'
import { OceanFloorTopography } from '@/components/diagrams/OceanFloorTopography'
import { AtmosphericCirculationCells } from '@/components/diagrams/AtmosphericCirculationCells'
import { MohsHardnessScale } from '@/components/diagrams/MohsHardnessScale'
import { GreenhouseMechanism } from '@/components/diagrams/GreenhouseMechanism'
import { VolcanicConeTypes } from '@/components/diagrams/VolcanicConeTypes'
import { IceAlbedoFeedback } from '@/components/diagrams/IceAlbedoFeedback'
import { SolarSystemFormation } from '@/components/diagrams/SolarSystemFormation'
import { IgneousRockTextures } from '@/components/diagrams/IgneousRockTextures'
import { WaveAnatomy } from '@/components/diagrams/WaveAnatomy'
import { MilankovitchCycles } from '@/components/diagrams/MilankovitchCycles'
import { CO2TemperatureRecord } from '@/components/diagrams/CO2TemperatureRecord'
import { OceanDepthZones } from '@/components/diagrams/OceanDepthZones'
import { MetamorphicGrade } from '@/components/diagrams/MetamorphicGrade'
import { RadiometricDecay } from '@/components/diagrams/RadiometricDecay'
import { MagmaViscosity } from '@/components/diagrams/MagmaViscosity'
import { ThermohalineCirculation } from '@/components/diagrams/ThermohalineCirculation'
import { StellarHRDiagram } from '@/components/diagrams/StellarHRDiagram'
import { PlanetComparison } from '@/components/diagrams/PlanetComparison'
import { SubductionZone } from '@/components/diagrams/SubductionZone'
import { CoriolisDeflection } from '@/components/diagrams/CoriolisDeflection'

const DIAGRAMS: Record<string, React.FC> = {
  'earth-cross-section':          EarthCrossSection,
  'atmosphere-temp-profile':      AtmosphereProfile,
  'earth-energy-budget':          EarthEnergyBudget,
  'rock-cycle':                   RockCycleDiagram,
  'seismic-shadow-zone':          SeismicShadowZone,
  'plate-boundaries':             PlateBoundaries,
  'geologic-timescale':           GeologicTimescale,
  'ocean-floor-topography':       OceanFloorTopography,
  'atmospheric-circulation-cells':AtmosphericCirculationCells,
  'mohs-hardness-scale':          MohsHardnessScale,
  'greenhouse-mechanism':         GreenhouseMechanism,
  'volcanic-cone-types':          VolcanicConeTypes,
  'ice-albedo-feedback':          IceAlbedoFeedback,
  'solar-system-formation':       SolarSystemFormation,
  'igneous-rock-textures':        IgneousRockTextures,
  'wave-anatomy':                 WaveAnatomy,
  'milankovitch-cycles':          MilankovitchCycles,
  'co2-temperature-record':       CO2TemperatureRecord,
  'ocean-depth-zones':            OceanDepthZones,
  'metamorphic-grade':            MetamorphicGrade,
  'radiometric-decay':            RadiometricDecay,
  'magma-viscosity':              MagmaViscosity,
  'thermohaline-circulation':     ThermohalineCirculation,
  'stellar-hr-diagram':           StellarHRDiagram,
  'planet-comparison':            PlanetComparison,
  'subduction-zone':              SubductionZone,
  'coriolis-deflection':          CoriolisDeflection,
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
