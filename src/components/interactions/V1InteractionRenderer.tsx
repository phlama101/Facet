'use client'

import type { InteractionConfig } from '@/lessons-v2/types'

// V2 interaction components (already built, reused here for V1 lessons)
import SliderSimulation from '@/lessons-v2/components/interactions/SliderSimulation'
import NodeExplorer from '@/lessons-v2/components/interactions/NodeExplorer'
import TimelineScrubber from '@/lessons-v2/components/interactions/TimelineScrubber'
import SandboxSimulator from '@/lessons-v2/components/interactions/SandboxSimulator'

// New interaction types (built in src/components/interactions/)
import LayeredVisual from './LayeredVisual'
import FlowSimulator from './FlowSimulator'

interface Props {
  interaction: InteractionConfig
}

export default function V1InteractionRenderer({ interaction }: Props) {
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
