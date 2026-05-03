import type { LucideIcon } from 'lucide-react'
import type { InteractionConfig } from '@/lessons-v2/types'

export type { InteractionConfig }

export type TrackId = 'geo' | 'oce' | 'atm' | 'vol' | 'cli' | 'ast'

export type LessonLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | 'SME'

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

export interface IntroSection {
  type: 'intro'
  title: string
  body: string
  keyTerms?: KeyTerm[]
}

export interface ConceptSection {
  type: 'concept'
  title: string
  body: string
  cards?: ConceptCard[]
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
}

export interface Equation {
  label: string
  tex: string
  note?: string
}

export interface TheorySection {
  type: 'theory'
  title: string
  body: string
  equations?: Equation[]
}

export interface CaseStudyFinding {
  label: string
  detail: string
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

export interface DataLabStep {
  instruction: string
  result: string
}

export interface DataLabSection {
  type: 'data-lab'
  title: string
  premise: string
  steps: DataLabStep[]
  conclusion: string
}

export type Section = IntroSection | ConceptSection | VisualizationSection | QuizSection | TheorySection | CaseStudySection | DataLabSection

export interface Lesson {
  id: string
  title: string
  track: TrackId
  trackName: string
  level: LessonLevel
  duration: string
  xpReward: number
  description: string
  sources: Source[]
  sections: Section[]
}
