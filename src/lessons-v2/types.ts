// ──────────────────────────────────────────────
// Interaction configs
// ──────────────────────────────────────────────

export interface SliderConfig {
  type: 'slider-simulation'
  label: string
  min: number
  max: number
  step: number
  unit: string
  defaultValue: number
  outputLabel: string
  formula: (value: number) => string | number
  description?: string
}

export interface NodeDef {
  id: string
  label: string
  description: string
  connections: string[]
}

export interface NodeExplorerConfig {
  type: 'node-explorer'
  nodes: NodeDef[]
}

export interface TimelineEvent {
  year: number | string
  label: string
  description: string
}

export interface TimelineScrubberConfig {
  type: 'timeline-scrubber'
  events: TimelineEvent[]
}

export interface SandboxVariable {
  id: string
  label: string
  min: number
  max: number
  default: number
  unit: string
}

export interface SandboxSimulatorConfig {
  type: 'sandbox-simulator'
  prompt: string
  variables: SandboxVariable[]
  outputDescription: (vars: Record<string, number>) => string
}

export interface LayerDef {
  id: string
  label: string
  sublabel?: string
  color: string
  thickness: number
  state?: string
  temperature?: string
  description: string
  facts: string[]
}

export interface LayeredVisualConfig {
  type: 'layered-visual'
  description: string
  layers: LayerDef[]
}

export interface FlowNode {
  id: string
  label: string
  description: string
  color: string
}

export interface FlowEdge {
  from: string
  to: string
  label: string
}

export interface FlowSimulatorConfig {
  type: 'flow-simulator'
  description: string
  nodes: FlowNode[]
  edges: FlowEdge[]
}

export type InteractionConfig =
  | SliderConfig
  | NodeExplorerConfig
  | TimelineScrubberConfig
  | SandboxSimulatorConfig
  | LayeredVisualConfig
  | FlowSimulatorConfig

// ──────────────────────────────────────────────
// Section types
// ──────────────────────────────────────────────

export interface V2IntroSection {
  type: 'intro'
  title: string
  body: string
  interaction?: InteractionConfig
}

export interface V2ConceptSection {
  type: 'concept'
  title: string
  body: string
  points?: string[]
  interaction?: InteractionConfig
}

export interface V2VisualizationSection {
  type: 'visualization'
  title: string
  body: string
  interaction: InteractionConfig
}

export interface V2LabStep {
  instruction: string
  hint?: string
}

export interface V2LabSection {
  type: 'lab'
  title: string
  premise: string
  steps: V2LabStep[]
  interaction?: InteractionConfig
  xpReward?: number
}

export interface V2ChallengeSection {
  type: 'challenge'
  title: string
  prompt: string
  interaction?: InteractionConfig
  xpReward?: number
}

export interface V2QuizQuestion {
  q: string
  a: [string, string, string, string]
  correct: 0 | 1 | 2 | 3
  explain: string
}

export interface V2QuizSection {
  type: 'quiz'
  questions: V2QuizQuestion[]
  xpPerQuestion?: number
}

export type V2Section =
  | V2IntroSection
  | V2ConceptSection
  | V2VisualizationSection
  | V2LabSection
  | V2ChallengeSection
  | V2QuizSection

// ──────────────────────────────────────────────
// Top-level LessonV2
// ──────────────────────────────────────────────

export interface LessonV2 {
  version: 2
  id: string
  title: string
  track: string
  trackName: string
  level: string
  duration: string
  xpReward: number
  description: string
  sections: V2Section[]
}
