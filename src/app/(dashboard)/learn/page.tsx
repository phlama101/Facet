import { createClient } from '@/lib/supabase/server'
import { LESSON_LIST, LEARNING_PATHS, TRACKS } from '@/lessons/index'
import LibraryClient from './LibraryClient'
import type { LeanLesson, LeanPath, LeanTrack, ContinueInfo } from './LibraryClient'

// ─── Lean metadata — computed once at module init, not per-request ─────────────
// Only 7 display fields per lesson; full section/quiz data stays server-side.

const LEAN_LESSONS: Record<string, LeanLesson> = Object.fromEntries(
  LESSON_LIST.map(l => [l.id, {
    id: l.id,
    title: l.title,
    description: l.description,
    track: l.track,
    level: l.level,
    duration: l.duration,
    xpReward: l.xpReward,
  }])
)

const LEAN_PATHS: LeanPath[] = LEARNING_PATHS.map(p => ({
  id: p.id,
  title: p.title,
  subtitle: p.subtitle,
  track: p.track,
  level: p.level,
  color: p.color,
  iconId: p.iconId,
  prerequisites: p.prerequisites,
  chapters: p.chapters.map(ch => ({
    id: ch.id,
    title: ch.title,
    description: ch.description,
    iconId: ch.iconId,
    lessonIds: ch.lessonIds,
  })),
}))

const LEAN_TRACKS: LeanTrack[] = TRACKS.map(t => ({
  id: t.id,
  name: t.name,
  color: t.color,
}))

const PATH_LESSON_ID_SET = new Set(LEARNING_PATHS.flatMap(p => p.chapters.flatMap(c => c.lessonIds)))
const STANDALONE_IDS = LESSON_LIST.map(l => l.id).filter(id => !PATH_LESSON_ID_SET.has(id))

// ─── Page (server component) ──────────────────────────────────────────────────

export default async function LearnPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  let initialCompletedIds: string[] = []
  let initialSubscription = 'free'
  let continueInfo: ContinueInfo | null = null

  if (user) {
    const [progressRes, profileRes] = await Promise.all([
      (supabase.from('user_lesson_progress') as any)
        .select('lesson_id, completed_at')
        .eq('user_id', user.id)
        .order('completed_at', { ascending: false }),
      (supabase.from('profiles') as any)
        .select('subscription')
        .eq('id', user.id)
        .single(),
    ])

    const profileData = (profileRes.data as { subscription?: string } | null)
    if (profileData?.subscription) initialSubscription = profileData.subscription

    const rows = (progressRes.data ?? []) as { lesson_id: string; completed_at: string }[]
    initialCompletedIds = rows.map(r => r.lesson_id)

    if (rows.length > 0) {
      const completedSet = new Set(initialCompletedIds)
      const mostRecentId = rows[0].lesson_id
      const activePath = LEAN_PATHS.find(p =>
        p.chapters.some(c => c.lessonIds.includes(mostRecentId))
      )

      if (activePath) {
        const availableIds = activePath.chapters
          .flatMap(c => c.lessonIds)
          .filter(id => LEAN_LESSONS[id])
        const completedInCourse = availableIds.filter(id => completedSet.has(id)).length
        const totalInCourse = availableIds.length

        let nextId: string | null = null
        outer: for (const ch of activePath.chapters) {
          for (const id of ch.lessonIds) {
            if (!completedSet.has(id) && LEAN_LESSONS[id]) {
              nextId = id
              break outer
            }
          }
        }

        if (nextId) {
          continueInfo = {
            lessonId: nextId,
            pathTitle: activePath.title,
            courseColor: activePath.color,
            completedInCourse,
            totalInCourse,
          }
        }
      }
    }
  }

  return (
    <LibraryClient
      paths={LEAN_PATHS}
      lessons={LEAN_LESSONS}
      standaloneIds={STANDALONE_IDS}
      tracks={LEAN_TRACKS}
      initialCompletedIds={initialCompletedIds}
      initialSubscription={initialSubscription}
      continueInfo={continueInfo}
    />
  )
}
