'use client'

import { use, useState } from 'react'
import { notFound, useRouter } from 'next/navigation'
import { LESSONS } from '@/lessons/index'
import { createClient } from '@/lib/supabase/client'
import LessonViewer from '@/components/lesson/LessonViewer'

interface Props {
  params: Promise<{ id: string }>
}

export default function LessonPage({ params }: Props) {
  const { id } = use(params)
  const router = useRouter()
  const lesson = LESSONS[id]
  if (!lesson) notFound()

  // We optimistically mark completion — no pre-fetch needed for guest
  const [completed, setCompleted] = useState(false)

  async function handleComplete(xpEarned: number) {
    setCompleted(true)
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      // Record lesson completion
      await (supabase.from('user_lesson_progress' as never) as any).upsert({
        user_id: user.id,
        lesson_id: lesson.id,
        completed: true,
        completed_at: new Date().toISOString(),
      })
      // Award XP via RPC (best-effort)
      await (supabase.rpc as any)('award_xp', { p_user_id: user.id, p_xp: xpEarned })
    }
    router.push('/dashboard')
  }

  return (
    <LessonViewer
      lesson={lesson}
      alreadyCompleted={completed}
      onClose={() => router.back()}
      onComplete={handleComplete}
    />
  )
}
