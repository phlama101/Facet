export type TrackId = 'geo' | 'oce' | 'atm' | 'vol' | 'cli' | 'ast'

export type LessonLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert'

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
  icon: string
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

export type Section = IntroSection | ConceptSection | QuizSection

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
