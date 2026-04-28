'use client'

import type { V2Section } from '@/lessons-v2/types'
import IntroBlock from '../blocks/IntroBlock'
import ConceptBlock from '../blocks/ConceptBlock'
import VisualizationBlock from '../blocks/VisualizationBlock'
import LabBlock from '../blocks/LabBlock'
import ChallengeBlock from '../blocks/ChallengeBlock'
import QuizBlock from '../blocks/QuizBlock'

interface Props {
  section: V2Section
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
    default:
      return null
  }
}
