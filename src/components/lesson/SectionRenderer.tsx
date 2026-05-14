'use client'

import type { Section } from '@/lessons/types'
import IntroBlock from './blocks/IntroBlock'
import ConceptBlock from './blocks/ConceptBlock'
import VisualizationBlock from './blocks/VisualizationBlock'
import LabBlock from './blocks/LabBlock'
import ChallengeBlock from './blocks/ChallengeBlock'
import QuizBlock from './blocks/QuizBlock'
import SectionTheory from './SectionTheory'
import SectionCaseStudy from './SectionCaseStudy'
import SectionDataLab from './SectionDataLab'
import CalloutBlock from './blocks/CalloutBlock'

interface Props {
  section: Section
  sectionIndex: number
  lessonId: string
  onQuizComplete?: (correct: number, total: number) => void
}

export default function SectionRenderer({ section, sectionIndex, lessonId, onQuizComplete }: Props) {
  const sectionKey = `${lessonId}-s${sectionIndex}`

  switch (section.type) {
    case 'intro':
      return <IntroBlock section={section} />
    case 'concept':
      return <ConceptBlock section={section} />
    case 'visualization':
      return <VisualizationBlock section={section} />
    case 'lab':
      return <LabBlock section={section} sectionKey={sectionKey} />
    case 'challenge':
      return <ChallengeBlock section={section} sectionKey={sectionKey} />
    case 'quiz':
      return (
        <QuizBlock
          section={section}
          sectionKey={sectionKey}
          onComplete={onQuizComplete}
        />
      )
    case 'theory':
      return <SectionTheory section={section} />
    case 'case-study':
      return <SectionCaseStudy section={section} />
    case 'data-lab':
      return <SectionDataLab section={section} />
    case 'callout':
      return <CalloutBlock section={section} />
    default:
      return null
  }
}
