'use client'

import type { InteractionConfig } from '@/lessons/types'
import InteractionRenderer from './InteractionRenderer'

interface Props {
  interaction: InteractionConfig
}

export default function V1InteractionRenderer({ interaction }: Props) {
  return <InteractionRenderer interaction={interaction} />
}
