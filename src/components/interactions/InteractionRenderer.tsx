'use client'

import type { InteractionConfig } from '@/lessons/types'
import SliderSimulation from './SliderSimulation'
import NodeExplorer from './NodeExplorer'
import TimelineScrubber from './TimelineScrubber'
import SandboxSimulator from './SandboxSimulator'
import LayeredVisual from './LayeredVisual'
import FlowSimulator from './FlowSimulator'

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
    case 'layered-visual':
      return <LayeredVisual config={interaction} />
    case 'flow-simulator':
      return <FlowSimulator config={interaction} />
    default:
      return null
  }
}
