import { notFound, redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
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

  const [dbLesson, supabase] = await Promise.all([
    getDbLesson(id),
    createClient(),
  ])

  const lesson = LESSONS[id]

  if (!dbLesson && !lesson) notFound()

  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect(`/login?next=/learn/${id}`)

  const { data: profile } = await supabase
    .from('profiles')
    .select('subscription')
    .eq('id', user.id)
    .single()

  const subscription = (profile as { subscription?: string } | null)?.subscription ?? 'free'

  if (!canAccessLesson(id, subscription)) {
    const title = dbLesson?.title ?? lesson?.title ?? 'This lesson'
    return <LessonAccessGate lessonTitle={title} />
  }

  if (dbLesson) {
    return <DbLessonClient dbLesson={dbLesson} />
  }

  return <LessonClient id={id} />
}
