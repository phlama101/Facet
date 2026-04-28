'use client'

import { use, useState } from 'react'
import { notFound, useRouter } from 'next/navigation'
import { LESSONS } from '@/lessons/index'
import { LESSONS_V2, isLessonV2 } from '@/lessons-v2/index'
import { createClient } from '@/lib/supabase/client'
import LessonViewer from '@/components/lesson/LessonViewer'
import LessonRenderer from '@/lessons-v2/components/lesson/LessonRenderer'

interface Props {
  params: Promise<{ id: string }>
}

export default function LessonPage({ params }: Props) {
  const { id } = use(params)
  const router = useRouter()
  const [completed, setCompleted] = useState(false)

  // Check LessonV2 catalog first, then fall back to V1
  const lessonV2 = LESSONS_V2[id]
  const lessonV1 = LESSONS[id]

  if (!lessonV2 && !lessonV1) notFound()

  async function handleComplete(xpEarned: number) {
    setCompleted(true)
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      const lessonId = lessonV2?.id ?? lessonV1?.id ?? id
      await (supabase.from('user_lesson_progress' as never) as any).upsert({
        user_id: user.id,
        lesson_id: lessonId,
        completed: true,
        completed_at: new Date().toISOString(),
      })
      await (supabase.rpc as any)('award_xp', { p_user_id: user.id, p_xp: xpEarned })
    }
    router.push('/dashboard')
  }

  // LessonV2 path
  if (lessonV2 && isLessonV2(lessonV2)) {
    return (
      <LessonRenderer
        lesson={lessonV2}
        onClose={() => router.back()}
        onComplete={handleComplete}
      />
    )
  }

  // LessonV1 fallback
  return (
    <LessonViewer
      lesson={lessonV1}
      alreadyCompleted={completed}
      onClose={() => router.back()}
      onComplete={handleComplete}
    />
  )
}
