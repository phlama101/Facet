import { notFound, redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { LESSONS_V2 } from '@/lessons-v2/index'
import { LESSONS } from '@/lessons/index'
import { getDbLesson } from '@/lib/lesson-store'
import { canAccessLesson } from '@/lib/access'
import LessonClient from './LessonClient'
import DbLessonClient from './DbLessonClient'
import LessonAccessGate from '@/components/features/LessonAccessGate'

interface Props {
  params: Promise<{ id: string }>
}

export default async function LessonPage({ params }: Props) {
  const { id } = await params

  // DB lesson takes priority over static files.
  // Falls back to V2 interactive, then V1 static.
  const [dbLesson, supabase] = await Promise.all([
    getDbLesson(id),
    createClient(),
  ])

  const lessonV2 = LESSONS_V2[id]
  const lessonV1 = LESSONS[id]

  if (!dbLesson && !lessonV2 && !lessonV1) notFound()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/login?next=/learn/${id}`)

  const { data: profile } = await supabase
    .from('profiles')
    .select('subscription')
    .eq('id', user.id)
    .single()

  const subscription = (profile as { subscription?: string } | null)?.subscription ?? 'free'

  if (!canAccessLesson(id, subscription)) {
    const title =
      dbLesson?.title ??
      lessonV2?.title ??
      (lessonV1 as { title?: string } | undefined)?.title ??
      'This lesson'
    return <LessonAccessGate lessonTitle={title} />
  }

  // DB lesson overrides static — render without bundling static lesson data.
  if (dbLesson) {
    return <DbLessonClient dbLesson={dbLesson} />
  }

  return <LessonClient id={id} />
}
