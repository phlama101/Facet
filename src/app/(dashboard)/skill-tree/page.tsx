import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Lock, Check, ChevronRight, Zap } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'
import { BRAND } from '@/lib/brand'
import { LESSON_LIST, GEOL_101_MODULES, GEOL_201_MODULES } from '@/lessons/index'
import type { Chapter } from '@/lessons/index'
import { levelFromXp } from '@/lib/utils'
import type { Profile } from '@/types'

export const metadata = { title: 'Skill Tree' }

export default async function SkillTreePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profileRow } = await supabase.from('profiles').select('*').eq('id', user.id).single()
  const profile: Profile = (profileRow as Profile | null) ?? {
    id: user.id, username: '', display_name: null, bio: null, avatar_color: '#7AD7F0',
    xp: 0, level: 1, streak: 0, longest_streak: 0, last_active: new Date().toISOString(),
    subscription: 'free', created_at: new Date().toISOString(),
  }

  const { data: progressRows } = await supabase
    .from('user_lesson_progress' as never)
    .select('lesson_id')
    .eq('user_id', user.id)
    .eq('completed', true)
  const completed = new Set(((progressRows ?? []) as { lesson_id: string }[]).map(r => r.lesson_id))

  const allLessons = LESSON_LIST.map(l => ({ id: l.id, title: l.title, trackName: l.trackName, level: l.level, xpReward: l.xpReward }))
  const lessonMap = Object.fromEntries(allLessons.map(l => [l.id, l]))

  function pathPct(chapters: Chapter[]) {
    const available = chapters.flatMap(ch => ch.lessonIds.filter(id => lessonMap[id]))
    const done = available.filter(id => completed.has(id))
    return available.length ? Math.round((done.length / available.length) * 100) : 0
  }

  const earthFoundationsPct = pathPct(GEOL_101_MODULES)
  const deepTimePct = pathPct(GEOL_201_MODULES)
  const subscription = profile.subscription ?? 'free'

  // Deep Time requires Scholar plan + 80% completion of Earth Foundations
  const deepTimeLockedBySubscription = subscription === 'free'
  const deepTimeLockedByProgress = earthFoundationsPct < 80
  const deepTimeLocked = deepTimeLockedBySubscription || deepTimeLockedByProgress

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <div className="text-[10px] tracking-[0.25em] uppercase mb-1" style={{ color: BRAND.textSubtle }}>Curriculum</div>
        <h1 className="font-serif" style={{ fontSize: 'clamp(28px, 5vw, 42px)' }}>Skill Tree</h1>
        <p className="text-sm mt-1" style={{ color: BRAND.textDim }}>
          Your learning path through earth science — complete chapters in sequence to unlock advanced paths.
        </p>
      </div>

      {/* Earth Foundations */}
      <PathTree
        level="Foundations"
        title="Earth Foundations"
        color={BRAND.coral}
        chapters={GEOL_101_MODULES}
        lessonMap={lessonMap}
        completed={completed}
        pathPct={earthFoundationsPct}
        locked={false}
      />

      {/* Deep Time */}
      <PathTree
        level="Intermediate"
        title="Deep Time"
        color={BRAND.coral}
        chapters={GEOL_201_MODULES}
        lessonMap={lessonMap}
        completed={completed}
        pathPct={deepTimePct}
        locked={deepTimeLocked}
        lockReason={
          deepTimeLockedBySubscription
            ? 'Scholar plan required — upgrade to unlock'
            : 'Complete 80% of Earth Foundations to unlock'
        }
      />
    </div>
  )
}

function PathTree({
  level, title, color, chapters, lessonMap, completed, pathPct, locked, lockReason,
}: {
  level: string
  title: string
  color: string
  chapters: Chapter[]
  lessonMap: Record<string, { id: string; title: string; level: string; xpReward: number }>
  completed: Set<string>
  pathPct: number
  locked: boolean
  lockReason?: string
}) {
  const allAvailable = chapters.flatMap(ch => ch.lessonIds.filter(id => lessonMap[id]))
  const allDone = allAvailable.filter(id => completed.has(id))

  const nextId = allAvailable.find(id => !completed.has(id)) ?? null

  return (
    <div
      className="rounded-sm overflow-hidden"
      style={{ border: `1px solid ${locked ? BRAND.border : color + '40'}`, opacity: locked ? 0.7 : 1 }}
    >
      {/* Path header */}
      <div
        className="px-5 py-4 flex items-center justify-between"
        style={{ backgroundColor: `${color}10`, borderBottom: `1px solid ${color}30` }}
      >
        <div className="flex items-center gap-3">
          {locked && <Lock size={14} color={BRAND.textSubtle} />}
          <span
            className="text-[10px] tracking-[0.2em] uppercase font-mono px-2 py-0.5 rounded-sm"
            style={{ backgroundColor: `${color}20`, color, border: `1px solid ${color}50` }}
          >
            {level}
          </span>
          <div>
            <div className="font-serif" style={{ fontSize: '18px', color: locked ? BRAND.textDim : BRAND.text }}>
              {title}
            </div>
            {lockReason && locked && (
              <div className="text-[10px] mt-0.5" style={{ color: BRAND.textSubtle }}>{lockReason}</div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-[11px] font-mono" style={{ color: BRAND.textSubtle }}>
            {allDone.length}/{allAvailable.length}
          </span>
          <div className="w-24 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: BRAND.border }}>
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${pathPct}%`, backgroundColor: pathPct === 100 ? BRAND.jade : color }}
            />
          </div>
          <span className="text-[10px] font-mono" style={{ color: pathPct === 100 ? BRAND.jade : color }}>
            {pathPct}%
          </span>
        </div>
      </div>

      {/* Chapters */}
      <div
        className="divide-y"
        style={{ backgroundColor: BRAND.surface, borderColor: BRAND.border }}
      >
        {chapters.map((chapter, ci) => {
          const lessonIds = chapter.lessonIds.filter(id => lessonMap[id])
          const chapterDone = lessonIds.filter(id => completed.has(id))
          const isChapterComplete = lessonIds.length > 0 && chapterDone.length === lessonIds.length

          return (
            <div key={chapter.id} className="px-5 py-4">
              {/* Chapter label */}
              <div className="flex items-center gap-2 mb-3">
                <div
                  className="w-5 h-5 rounded-sm flex items-center justify-center text-[9px] font-mono font-bold shrink-0"
                  style={isChapterComplete
                    ? { backgroundColor: `${BRAND.jade}20`, color: BRAND.jade, border: `1px solid ${BRAND.jade}40` }
                    : { backgroundColor: `${color}12`, color, border: `1px solid ${color}30` }
                  }
                >
                  {isChapterComplete ? <Check size={9} strokeWidth={2.5} /> : ci + 1}
                </div>
                <div className="text-[11px] font-mono" style={{ color: BRAND.textDim }}>
                  {chapter.title}
                </div>
                <div className="text-[9px] font-mono ml-auto" style={{ color: BRAND.textSubtle }}>
                  {chapterDone.length}/{lessonIds.length}
                </div>
              </div>

              {/* Lesson nodes */}
              <div className="flex flex-wrap gap-2 pl-7">
                {lessonIds.map((id, li) => {
                  const lesson = lessonMap[id]
                  if (!lesson) return null
                  const isDone = completed.has(id)
                  const isNext = id === nextId
                  const isLocked = locked

                  let nodeColor: string = BRAND.border
                  let textColor: string = BRAND.textSubtle
                  let bgColor: string = BRAND.surfaceHi
                  let borderColor: string = BRAND.border

                  if (isDone) {
                    nodeColor = BRAND.jade
                    textColor = BRAND.jade
                    bgColor = `${BRAND.jade}0D`
                    borderColor = `${BRAND.jade}35`
                  } else if (!isLocked && isNext) {
                    nodeColor = color
                    textColor = color
                    bgColor = `${color}10`
                    borderColor = `${color}50`
                  } else if (!isLocked) {
                    nodeColor = BRAND.textSubtle
                    textColor = BRAND.textDim
                    bgColor = BRAND.surfaceHi
                    borderColor = BRAND.border
                  }

                  const nodeContent = (
                    <div
                      className="flex flex-col gap-1 p-2.5 rounded-sm"
                      style={{
                        width: '148px',
                        backgroundColor: bgColor,
                        border: `1px solid ${borderColor}`,
                        cursor: isDone || !isLocked ? 'pointer' : 'default',
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div
                          className="w-4 h-4 rounded-sm flex items-center justify-center text-[8px] font-mono"
                          style={{ backgroundColor: `${nodeColor}20`, color: nodeColor, border: `1px solid ${nodeColor}40` }}
                        >
                          {isDone ? <Check size={8} strokeWidth={2.5} /> : isLocked ? <Lock size={7} /> : li + 1}
                        </div>
                        <div className="flex items-center gap-0.5" style={{ color: isDone ? BRAND.jade : BRAND.textSubtle }}>
                          <Zap size={8} />
                          <span className="text-[9px] font-mono">{lesson.xpReward}</span>
                        </div>
                      </div>
                      <div
                        className="text-[10px] leading-snug"
                        style={{
                          color: textColor,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                        }}
                      >
                        {lesson.title}
                      </div>
                    </div>
                  )

                  if (isLocked) return <div key={id}>{nodeContent}</div>

                  return (
                    <Link key={id} href={`/learn/${id}`} className="block transition-transform hover:scale-[1.02]">
                      {nodeContent}
                    </Link>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
