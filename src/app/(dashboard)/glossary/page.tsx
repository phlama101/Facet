import { LESSONS } from '@/lessons/index'
import GlossaryClient from './GlossaryClient'
import type { IntroSection, ConceptSection } from '@/lessons/types'

export const metadata = { title: 'Glossary · Facet' }

export type GlossaryEntry = {
  term: string
  definition: string
  examples?: string
  lessonId: string
  lessonTitle: string
  trackName: string
  type: 'keyterm' | 'concept'
}

function extractEntries(): GlossaryEntry[] {
  const entries: GlossaryEntry[] = []
  for (const lesson of Object.values(LESSONS)) {
    for (const section of lesson.sections) {
      if (section.type === 'intro') {
        const intro = section as IntroSection
        for (const kt of intro.keyTerms ?? []) {
          entries.push({
            term:        kt.term,
            definition:  kt.def,
            lessonId:    lesson.id,
            lessonTitle: lesson.title,
            trackName:   lesson.trackName,
            type:        'keyterm',
          })
        }
      }
      if (section.type === 'concept') {
        const concept = section as ConceptSection
        for (const card of concept.cards ?? []) {
          entries.push({
            term:        card.name,
            definition:  card.desc,
            examples:    card.examples,
            lessonId:    lesson.id,
            lessonTitle: lesson.title,
            trackName:   lesson.trackName,
            type:        'concept',
          })
        }
      }
    }
  }
  return entries.sort((a, b) => a.term.localeCompare(b.term))
}

// Computed once when the module is first loaded (shared across all requests
// in the same Node.js process), not rebuilt on every incoming request.
const GLOSSARY_ENTRIES = extractEntries()

export default function GlossaryPage() {
  return <GlossaryClient entries={GLOSSARY_ENTRIES} />
}
