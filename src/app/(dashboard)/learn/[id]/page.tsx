import { type Metadata } from 'next'
import { notFound, redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { LESSONS, LEARNING_PATHS } from '@/lessons/index'
import { getDbLesson } from '@/lib/lesson-store'
import { canAccessLesson, FREE_LESSON_IDS } from '@/lib/access'
import LessonClient from './LessonClient'
import DbLessonClient from './DbLessonClient'
import LessonAccessGate from '@/components/features/LessonAccessGate'
import PrerequisiteGate from '@/components/features/PrerequisiteGate'

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
  const rawDesc = lesson?.description ?? dbLesson?.description ?? 'Learn earth science with Facet.'
  const trackName = lesson?.trackName ?? dbLesson?.trackName ?? 'Earth Sciences'
  const level = lesson?.level ?? dbLesson?.level ?? ''
  const description = level ? `${trackName} · ${level} — ${rawDesc}` : `${trackName} — ${rawDesc}`
  const ogTitle = `${title} — Facet Earth Sciences`
  return {
    title,
    description,
    openGraph: {
      title: ogTitle,
      description,
      type: 'article',
      images: [{ url: '/og-default.png', width: 1200, height: 630, alt: ogTitle }],
    },
    twitter: { card: 'summary_large_image', title: ogTitle, description },
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

  // Prerequisite enforcement: intermediate paths require the foundation path's capstone
  if (user) {
    const lessonPath = LEARNING_PATHS.find(p =>
      p.chapters.some(ch => ch.lessonIds.includes(id))
    )
    if (lessonPath?.prerequisites?.length) {
      const prereqPaths = LEARNING_PATHS.filter(p => lessonPath.prerequisites!.includes(p.id))
      const capstoneLessonIds = prereqPaths.map(p => p.chapters[p.chapters.length - 1].lessonIds[0])

      const { count } = await supabase
        .from('user_lesson_progress')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id)
        .eq('completed', true)
        .in('lesson_id', capstoneLessonIds)

      if (!count) {
        const lessonTitle = dbLesson?.title ?? lesson?.title ?? 'This lesson'
        return (
          <PrerequisiteGate
            lessonTitle={lessonTitle}
            prerequisitePathTitle={prereqPaths[0].title}
            prerequisitePathId={prereqPaths[0].id}
          />
        )
      }
    }
  }

  if (dbLesson) {
    return <DbLessonClient dbLesson={dbLesson} isGuest={!user} />
  }

  return <LessonClient id={id} isGuest={!user} />
}
