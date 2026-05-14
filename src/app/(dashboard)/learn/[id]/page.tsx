import { type Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { LESSONS } from '@/lessons/index'
import { getDbLesson } from '@/lib/lesson-store'
import { canAccessLesson, FREE_LESSON_IDS } from '@/lib/access'
import LessonClient from './LessonClient'
import DbLessonClient from './DbLessonClient'
import LessonAccessGate from '@/components/features/LessonAccessGate'

export async function generateStaticParams() {
  return Object.keys(LESSONS).map(id => ({ id }))
}

interface Props {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const lesson = LESSONS[id]
  const dbLesson = lesson ? null : await getDbLesson(id)
  const title = lesson?.title ?? dbLesson?.title ?? 'Lesson'
  const description = lesson?.description ?? dbLesson?.description ?? 'Learn earth science with Facet.'
  return {
    title,
    description,
    openGraph: { title: `${title} — Facet`, description, type: 'article' },
    twitter: { card: 'summary', title: `${title} — Facet`, description },
  }
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

  // Allow unauthenticated users to view free lessons (crawlers, guests)
  if (!user && !FREE_LESSON_IDS.has(id)) redirect(`/login?next=/learn/${id}`)

  const subscription = user
    ? await supabase.from('profiles').select('subscription').eq('id', user.id).single()
        .then(({ data }) => (data as { subscription?: string } | null)?.subscription ?? 'free')
    : 'free'

  if (!canAccessLesson(id, subscription)) {
    const title = dbLesson?.title ?? lesson?.title ?? 'This lesson'
    return <LessonAccessGate lessonTitle={title} />
  }

  if (dbLesson) {
    return <DbLessonClient dbLesson={dbLesson} />
  }

  return <LessonClient id={id} isGuest={!user} />
}
