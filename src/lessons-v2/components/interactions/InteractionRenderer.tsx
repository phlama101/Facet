'use client'

import type { InteractionConfig } from '@/lessons-v2/types'
import SliderSimulation from './SliderSimulation'
import NodeExplorer from './NodeExplorer'
import TimelineScrubber from './TimelineScrubber'
import SandboxSimulator from './SandboxSimulator'

interface Props {
  interaction: InteractionConfig
}

export default function InteractionRenderer({ interaction }: Props) {
  switch (interaction.type) {
    case 'slider-simulation':
      return <SliderSimulation config={interaction} />
    case 'node-explorer':
      return <NodeExplorer config={interaction} />
    case 'timeline-scrubber':
      return <TimelineScrubber config={interaction} />
    case 'sandbox-simulator':
      return <SandboxSimulator config={interaction} />
    default:
      return null
  }
}
