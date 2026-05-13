import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Lock, Check, Zap, Star } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'
import { BRAND } from '@/lib/brand'
import { LEARNING_PATHS, LESSON_LIST } from '@/lessons/index'
import type { LearningPath } from '@/lessons/types'
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

  const lessonMap = Object.fromEntries(LESSON_LIST.map(l => [l.id, l]))

  function calcPct(path: LearningPath): number {
    const available = path.chapters.flatMap(ch => ch.lessonIds.filter(id => lessonMap[id]))
    const done = available.filter(id => completed.has(id))
    return available.length ? Math.round((done.length / available.length) * 100) : 0
  }

  const pctMap = Object.fromEntries(LEARNING_PATHS.map(p => [p.id, calcPct(p)]))
  const efPct = pctMap['earth-foundations'] ?? 0
  const subscription = profile.subscription ?? 'free'

  function getLockInfo(path: LearningPath): { locked: boolean; reason: string | null } {
    if (!path.prerequisites?.length) return { locked: false, reason: null }
    if (path.id === 'deep-time') {
      if (subscription === 'free') {
        return { locked: true, reason: 'Naturalist plan required — upgrade at /billing to unlock' }
      }
      if (efPct < 80) {
        const efPath = LEARNING_PATHS.find(p => p.id === 'earth-foundations')!
        const efAvail = efPath.chapters.flatMap(ch => ch.lessonIds.filter(id => lessonMap[id]))
        const efDone = efAvail.filter(id => completed.has(id))
        const needed = Math.ceil(efAvail.length * 0.8) - efDone.length
        return {
          locked: true,
          reason: `${needed} more lesson${needed !== 1 ? 's' : ''} needed in Earth Foundations (${efPct}% → 80%)`,
        }
      }
    }
    return { locked: false, reason: null }
  }

  // Total stats across all paths
  const totalAvail  = LEARNING_PATHS.flatMap(p => p.chapters.flatMap(ch => ch.lessonIds.filter(id => lessonMap[id])))
  const totalDone   = totalAvail.filter(id => completed.has(id))
  const overallPct  = totalAvail.length ? Math.round((totalDone.length / totalAvail.length) * 100) : 0

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <div className="text-[10px] tracking-[0.25em] uppercase mb-1" style={{ color: BRAND.textSubtle }}>
            Curriculum
          </div>
          <h1 className="font-serif" style={{ fontSize: 'clamp(26px, 4vw, 38px)' }}>Skill Tree</h1>
          <p className="text-sm mt-1 max-w-xl" style={{ color: BRAND.textDim }}>
            Master earth science by completing chapters in sequence — each lesson earns XP and unlocks the next.
          </p>
        </div>

        {/* Overall progress pill */}
        <div
          className="shrink-0 px-4 py-3 rounded-sm text-center hidden sm:block"
          style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
        >
          <div className="text-[9px] tracking-[0.15em] uppercase font-mono mb-1" style={{ color: BRAND.textSubtle }}>
            Overall
          </div>
          <div className="text-xl font-bold font-mono" style={{ color: BRAND.accent }}>
            {overallPct}%
          </div>
          <div className="text-[9px] font-mono mt-0.5" style={{ color: BRAND.textSubtle }}>
            {totalDone.length}/{totalAvail.length}
          </div>
        </div>
      </div>

      {/* Learning paths */}
      <div className="space-y-4">
        {LEARNING_PATHS.map((path) => {
          const { locked, reason: lockReason } = getLockInfo(path)
          const pct     = pctMap[path.id] ?? 0
          const isComplete = pct === 100
          const PathIcon   = path.icon

          const allAvail   = path.chapters.flatMap(ch => ch.lessonIds.filter(id => lessonMap[id]))
          const doneLessons = allAvail.filter(id => completed.has(id))
          const nextId     = locked ? null : (allAvail.find(id => !completed.has(id)) ?? null)

          // Derived colors
          const accentColor  = isComplete ? BRAND.jade : path.color
          const borderColor  = locked ? BRAND.border : `${accentColor}40`
          const headerBg     = `${locked ? BRAND.border : accentColor}0C`

          return (
            <div
              key={path.id}
              className="rounded-sm overflow-hidden"
              style={{
                border: `1px solid ${borderColor}`,
                opacity: locked ? 0.62 : 1,
                boxShadow: isComplete ? `0 0 24px ${BRAND.jade}12` : 'none',
              }}
            >
              {/* ── Path header ── */}
              <div
                className="px-5 py-5"
                style={{
                  background: `linear-gradient(135deg, ${headerBg} 0%, transparent 60%)`,
                  borderBottom: `1px solid ${locked ? BRAND.border : `${accentColor}22`}`,
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Track icon */}
                  <div
                    className="w-11 h-11 rounded-sm flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${locked ? BRAND.border : accentColor}18`,
                      border: `1px solid ${locked ? BRAND.border : accentColor}38`,
                    }}
                  >
                    <PathIcon
                      size={21}
                      strokeWidth={1.5}
                      style={{ color: locked ? BRAND.textSubtle : accentColor }}
                    />
                  </div>

                  {/* Title + badges */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5 mb-1">
                      <span
                        className="text-[9px] tracking-[0.2em] uppercase font-mono px-1.5 py-0.5 rounded-sm"
                        style={{
                          backgroundColor: `${locked ? BRAND.border : accentColor}1A`,
                          color: locked ? BRAND.textSubtle : accentColor,
                          border: `1px solid ${locked ? BRAND.border : accentColor}38`,
                        }}
                      >
                        {path.level}
                      </span>

                      {isComplete && (
                        <span
                          className="text-[9px] tracking-[0.1em] uppercase font-mono px-1.5 py-0.5 rounded-sm flex items-center gap-1 animate-path-shimmer"
                          style={{
                            backgroundColor: `${BRAND.jade}18`,
                            color: BRAND.jade,
                            border: `1px solid ${BRAND.jade}38`,
                          }}
                        >
                          <Star size={8} fill={BRAND.jade} strokeWidth={0} />
                          Path Mastered
                        </span>
                      )}

                      {locked && <Lock size={11} style={{ color: BRAND.textSubtle }} />}
                    </div>

                    <div
                      className="font-serif"
                      style={{ fontSize: '19px', color: locked ? BRAND.textDim : BRAND.text, lineHeight: 1.25 }}
                    >
                      {path.title}
                    </div>

                    <div
                      className="text-[11px] mt-0.5 leading-relaxed"
                      style={{
                        color: BRAND.textSubtle,
                        overflow: 'hidden',
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {lockReason ?? path.subtitle}
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="shrink-0 text-right hidden sm:flex flex-col items-end gap-1">
                    <div
                      className="text-sm font-mono font-bold"
                      style={{ color: accentColor }}
                    >
                      {pct}%
                    </div>
                    <div
                      className="w-20 h-1 rounded-full overflow-hidden"
                      style={{ backgroundColor: BRAND.border }}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${pct}%`, backgroundColor: accentColor }}
                      />
                    </div>
                    <div className="text-[9px] font-mono" style={{ color: BRAND.textSubtle }}>
                      {doneLessons.length} / {allAvail.length}
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Chapters ── */}
              <div style={{ backgroundColor: BRAND.surface }}>
                {path.chapters.map((chapter, ci) => {
                  const lessonIds        = chapter.lessonIds.filter(id => lessonMap[id])
                  const chDone           = lessonIds.filter(id => completed.has(id))
                  const isChapterComplete = lessonIds.length > 0 && chDone.length === lessonIds.length
                  const isStarted        = chDone.length > 0

                  const chapterAccent = isChapterComplete ? BRAND.jade : isStarted ? path.color : 'transparent'

                  return (
                    <div
                      key={chapter.id}
                      className={ci < path.chapters.length - 1 ? 'border-b' : ''}
                      style={{
                        borderColor: BRAND.border,
                        borderLeft: `3px solid ${chapterAccent}`,
                        backgroundColor: isChapterComplete ? `${BRAND.jade}05` : 'transparent',
                      }}
                    >
                      <div className="px-4 py-4">
                        {/* Chapter header */}
                        <div className="flex items-center gap-2 mb-4">
                          <div
                            className="w-5 h-5 rounded-sm flex items-center justify-center text-[8px] font-mono font-bold shrink-0"
                            style={
                              isChapterComplete
                                ? { backgroundColor: `${BRAND.jade}20`, color: BRAND.jade, border: `1px solid ${BRAND.jade}40` }
                                : isStarted
                                ? { backgroundColor: `${path.color}14`, color: path.color, border: `1px solid ${path.color}35` }
                                : { backgroundColor: BRAND.surfaceHi, color: BRAND.textSubtle, border: `1px solid ${BRAND.border}` }
                            }
                          >
                            {isChapterComplete ? <Check size={9} strokeWidth={3} /> : ci + 1}
                          </div>

                          <span
                            className="flex-1 text-xs font-semibold"
                            style={{ color: isChapterComplete ? BRAND.jade : isStarted ? BRAND.text : BRAND.textDim }}
                          >
                            {chapter.title}
                          </span>

                          <div className="flex items-center gap-1.5 shrink-0">
                            {isChapterComplete && (
                              <span
                                className="text-[8px] tracking-[0.08em] uppercase font-mono px-1.5 py-0.5 rounded-sm flex items-center gap-1"
                                style={{ backgroundColor: `${BRAND.jade}12`, color: BRAND.jade, border: `1px solid ${BRAND.jade}28` }}
                              >
                                <Check size={6} strokeWidth={3} /> Complete
                              </span>
                            )}
                            <span className="text-[9px] font-mono" style={{ color: BRAND.textSubtle }}>
                              {chDone.length}/{lessonIds.length}
                            </span>
                          </div>
                        </div>

                        {/* Horizontal lesson nodes with connectors */}
                        <div className="overflow-x-auto" style={{ paddingBottom: '2px' }}>
                          <div className="flex items-start" style={{ minWidth: 'max-content', paddingLeft: '28px' }}>
                            {lessonIds.map((id, li) => {
                              const lesson  = lessonMap[id]
                              if (!lesson) return null

                              const isDone  = completed.has(id)
                              const isNext  = id === nextId
                              const prevId  = li > 0 ? lessonIds[li - 1] : null
                              const prevDone = prevId ? completed.has(prevId) : false

                              const lineColor = prevDone
                                ? isDone
                                  ? BRAND.jade
                                  : `${path.color}70`
                                : BRAND.border

                              return (
                                <div key={id} className="flex items-start">
                                  {/* Connector line */}
                                  {li > 0 && (
                                    <div
                                      className="shrink-0 transition-colors duration-500"
                                      style={{ width: '20px', height: '2px', backgroundColor: lineColor, marginTop: '21px' }}
                                    />
                                  )}

                                  {/* Node column */}
                                  <div className="flex flex-col items-center gap-1" style={{ width: '54px' }}>
                                    {/* Circle */}
                                    {locked ? (
                                      <div
                                        className="w-11 h-11 rounded-full flex items-center justify-center border-2 shrink-0"
                                        style={{ backgroundColor: BRAND.surfaceHi, borderColor: BRAND.border }}
                                      >
                                        <Lock size={11} style={{ color: BRAND.textSubtle }} />
                                      </div>
                                    ) : isDone ? (
                                      <div
                                        className="w-11 h-11 rounded-full flex items-center justify-center border-2 shrink-0"
                                        style={{ backgroundColor: `${BRAND.jade}18`, borderColor: BRAND.jade }}
                                      >
                                        <Check size={14} strokeWidth={2.5} style={{ color: BRAND.jade }} />
                                      </div>
                                    ) : isNext ? (
                                      <Link href={`/learn/${id}`} className="block shrink-0">
                                        <div
                                          className="w-11 h-11 rounded-full flex items-center justify-center border-2 animate-lesson-pulse"
                                          style={{
                                            backgroundColor: `${path.color}22`,
                                            borderColor: path.color,
                                            boxShadow: `0 0 14px ${path.color}45`,
                                          }}
                                        >
                                          <span
                                            className="text-[12px] font-bold font-mono"
                                            style={{ color: path.color }}
                                          >
                                            {li + 1}
                                          </span>
                                        </div>
                                      </Link>
                                    ) : (
                                      <Link href={`/learn/${id}`} className="block shrink-0 transition-transform hover:scale-105">
                                        <div
                                          className="w-11 h-11 rounded-full flex items-center justify-center border-2"
                                          style={{ backgroundColor: BRAND.surfaceHi, borderColor: BRAND.border }}
                                        >
                                          <span className="text-[11px] font-mono" style={{ color: BRAND.textSubtle }}>
                                            {li + 1}
                                          </span>
                                        </div>
                                      </Link>
                                    )}

                                    {/* Lesson title */}
                                    <div
                                      className="text-center leading-tight"
                                      style={{
                                        fontSize: '8px',
                                        color: isDone ? BRAND.jade : isNext ? path.color : BRAND.textSubtle,
                                        maxWidth: '50px',
                                        display: '-webkit-box',
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: 'vertical',
                                        overflow: 'hidden',
                                      }}
                                    >
                                      {lesson.title}
                                    </div>

                                    {/* XP chip */}
                                    <div
                                      className="flex items-center gap-0.5"
                                      style={{ color: isDone ? BRAND.jade : BRAND.textSubtle }}
                                    >
                                      <Zap size={7} />
                                      <span style={{ fontSize: '8px' }} className="font-mono">{lesson.xpReward}</span>
                                    </div>
                                  </div>
                                </div>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
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
