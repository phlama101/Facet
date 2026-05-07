'use client'

import { useState } from 'react'
import { notFound, useRouter } from 'next/navigation'
import { LESSONS } from '@/lessons/index'
import { LESSONS_V2, isLessonV2 } from '@/lessons-v2/index'
import LessonViewer from '@/components/lesson/LessonViewer'
import LessonRenderer from '@/lessons-v2/components/lesson/LessonRenderer'

interface Props {
  id: string
}

export default function LessonClient({ id }: Props) {
  const router = useRouter()
  const [completed, setCompleted] = useState(false)

  const lessonV2 = LESSONS_V2[id]
  const lessonV1 = LESSONS[id]

  if (!lessonV2 && !lessonV1) notFound()

  async function handleComplete(xpEarned: number) {
    setCompleted(true)
    const lessonId = lessonV2?.id ?? lessonV1?.id ?? id
    await fetch('/api/complete-lesson', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lessonId, xpReward: xpEarned }),
    })
    router.push('/dashboard')
  }

  if (lessonV2 && isLessonV2(lessonV2)) {
    return (
      <LessonRenderer
        lesson={lessonV2}
        onClose={() => router.back()}
        onComplete={handleComplete}
      />
    )
  }

  return (
    <LessonViewer
      lesson={lessonV1}
      alreadyCompleted={completed}
      onClose={() => router.back()}
      onComplete={handleComplete}
    />
  )
}
