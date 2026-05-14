import type { LucideIcon } from 'lucide-react'

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

export interface ScientificDiagramConfig {
  type: 'scientific-diagram'
  id: string
  caption?: string
  credit?: string
}

export interface AnnotatedImageAnnotation {
  id: string
  x: number          // percentage from left (0–100)
  y: number          // percentage from top (0–100)
  label: string
  description: string
}

export interface AnnotatedImageConfig {
  type: 'annotated-image'
  src: string
  alt: string
  aspectRatio?: string   // CSS aspect-ratio value, default '16/9'
  credit?: string
  annotations: AnnotatedImageAnnotation[]
}

export type InteractionConfig =
  | SliderConfig
  | NodeExplorerConfig
  | TimelineScrubberConfig
  | SandboxSimulatorConfig
  | LayeredVisualConfig
  | FlowSimulatorConfig
  | ScientificDiagramConfig
  | AnnotatedImageConfig

// ──────────────────────────────────────────────
// Shared primitives
// ──────────────────────────────────────────────

export type TrackId = 'geo' | 'oce' | 'atm' | 'vol' | 'cli' | 'ast'

export type PathLevel = 'Foundations' | 'Intermediate' | 'Advanced' | 'Expert'

export interface Chapter {
  id: string
  title: string
  description?: string
  lessonIds: string[]
  iconId?: string
}

export interface LearningPath {
  id: string
  title: string
  subtitle: string
  tagline?: string
  track: TrackId
  level: PathLevel
  chapters: Chapter[]
  color: string
  icon: LucideIcon
  prerequisites?: string[]
  iconId?: string
}

export type LessonLevel = 'Foundations' | 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | 'SME'

export interface Source {
  org: string
  title: string
  url: string
}

export interface KeyTerm {
  term: string
  def: string
}

export interface ConceptCard {
  name: string
  icon: LucideIcon
  color: string
  desc: string
  examples?: string
}

export interface Equation {
  label: string
  tex: string
  note?: string
}

export interface CaseStudyFinding {
  label: string
  detail: string
}

export interface DataLabStep {
  instruction: string
  result: string
}

// ──────────────────────────────────────────────
// Section types
// ──────────────────────────────────────────────

export interface IntroSection {
  type: 'intro'
  title: string
  body: string
  keyTerms?: KeyTerm[]
  interaction?: InteractionConfig
}

export interface ConceptSection {
  type: 'concept'
  title: string
  body: string
  cards?: ConceptCard[]
  points?: string[]
  interaction?: InteractionConfig
}

export interface VisualizationSection {
  type: 'visualization'
  title: string
  body: string
  interaction: InteractionConfig
}

export interface QuizQuestion {
  q: string
  a: [string, string, string, string]
  correct: 0 | 1 | 2 | 3
  explain: string
}

export interface QuizSection {
  type: 'quiz'
  questions: QuizQuestion[]
  xpPerQuestion?: number
}

export interface TheorySection {
  type: 'theory'
  title: string
  body: string
  equations?: Equation[]
}

export interface CaseStudySection {
  type: 'case-study'
  title: string
  location: string
  body: string
  findings: CaseStudyFinding[]
  citation: string
  doi?: string
}

export interface DataLabSection {
  type: 'data-lab'
  title: string
  premise: string
  steps: DataLabStep[]
  conclusion: string
}

export interface LabStep {
  instruction: string
  hint?: string
}

export interface LabSection {
  type: 'lab'
  title: string
  premise: string
  steps: LabStep[]
  interaction?: InteractionConfig
  xpReward?: number
}

export interface ChallengeSection {
  type: 'challenge'
  title: string
  prompt: string
  interaction?: InteractionConfig
  xpReward?: number
}

export interface CalloutSection {
  type: 'callout'
  variant: 'fact' | 'warning' | 'insight' | 'data'
  headline: string
  body: string
}

export type Section =
  | IntroSection
  | ConceptSection
  | VisualizationSection
  | QuizSection
  | TheorySection
  | CaseStudySection
  | DataLabSection
  | LabSection
  | ChallengeSection
  | CalloutSection

// ──────────────────────────────────────────────
// Top-level Lesson
// ──────────────────────────────────────────────

export interface Lesson {
  id: string
  title: string
  track: TrackId
  trackName: string
  level: LessonLevel
  duration: string
  xpReward: number
  description: string
  sources?: Source[]
  sections: Section[]
}
