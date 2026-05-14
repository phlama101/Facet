import Link from 'next/link'
import { Lock, Check, Zap, Star, Trophy, ArrowRight, UserPlus } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'
import { BRAND } from '@/lib/brand'
import { LEARNING_PATHS, LESSON_LIST } from '@/lessons/index'
import { ACHIEVEMENTS } from '@/lib/achievements'
import type { Achievement, AchCtx } from '@/lib/achievements'
import type { LearningPath } from '@/lessons/types'
import type { Profile } from '@/types'
import { xpInLevel, xpNeededForLevel, xpProgressPct } from '@/lib/utils'
import { FREE_LESSON_IDS } from '@/lib/access'

export const metadata = { title: 'Skill Tree' }

// Map path IDs to their achievement objects (some IDs differ from path IDs)
const PATH_ACHIEVEMENT_ID: Record<string, string> = {
  'atmosphere-weather':    'path-atmosphere',
  'climate-past-future':  'path-climate',
}
function pathAchievement(pathId: string): Achievement | undefined {
  const achId = PATH_ACHIEVEMENT_ID[pathId] ?? `path-${pathId}`
  return ACHIEVEMENTS.find(a => a.id === achId)
}

export default async function SkillTreePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  const isGuest = !user

  const blankProfile: Profile = {
    id: '', username: '', display_name: null, bio: null, avatar_color: '#7AD7F0',
    xp: 0, level: 1, streak: 0, longest_streak: 0, last_active: new Date().toISOString(),
    subscription: 'free', created_at: new Date().toISOString(),
  }

  let profile: Profile = blankProfile
  let completed = new Set<string>()

  if (user) {
    const { data: profileRow } = await supabase.from('profiles').select('*').eq('id', user.id).single()
    profile = (profileRow as Profile | null) ?? { ...blankProfile, id: user.id }

    const { data: progressRows } = await supabase
      .from('user_lesson_progress' as never)
      .select('lesson_id')
      .eq('user_id', user.id)
      .eq('completed', true)
    completed = new Set(((progressRows ?? []) as { lesson_id: string }[]).map(r => r.lesson_id))
  }

  const lessonMap = Object.fromEntries(LESSON_LIST.map(l => [l.id, l]))
  const subscription = profile.subscription ?? 'free'
  const isPaid = subscription === 'pro' || subscription === 'expert'

  // Achievement context for evaluating which are earned
  const achCtx: AchCtx = {
    count: completed.size,
    total: LESSON_LIST.length,
    streak: profile.streak,
    xp: profile.xp,
    level: profile.level,
    ids: [...completed],
  }

  function calcPct(path: LearningPath): number {
    const available = path.chapters.flatMap(ch => ch.lessonIds.filter(id => lessonMap[id]))
    const done = available.filter(id => completed.has(id))
    return available.length ? Math.round((done.length / available.length) * 100) : 0
  }

  const pctMap = Object.fromEntries(LEARNING_PATHS.map(p => [p.id, calcPct(p)]))

  // Which advanced paths does each path unlock?
  const pathUnlocks: Record<string, LearningPath[]> = {}
  for (const p of LEARNING_PATHS) {
    for (const prereqId of (p.prerequisites ?? [])) {
      if (!pathUnlocks[prereqId]) pathUnlocks[prereqId] = []
      pathUnlocks[prereqId].push(p)
    }
  }

  function getLockInfo(path: LearningPath): { locked: boolean; reason: string | null } {
    if (!path.prerequisites?.length) return { locked: false, reason: null }

    // All paths with prerequisites require a paid subscription
    if (!isPaid) {
      return { locked: true, reason: 'Naturalist plan required — upgrade to unlock' }
    }

    // Check each prerequisite path meets the 80% threshold
    for (const prereqId of path.prerequisites) {
      const prereqPct = pctMap[prereqId] ?? 0
      if (prereqPct < 80) {
        const prereqPath = LEARNING_PATHS.find(p => p.id === prereqId)!
        const prereqAvail = prereqPath.chapters.flatMap(ch => ch.lessonIds.filter(id => lessonMap[id]))
        const needed = Math.ceil(prereqAvail.length * 0.8) - prereqAvail.filter(id => completed.has(id)).length
        return {
          locked: true,
          reason: `${needed} more lesson${needed !== 1 ? 's' : ''} needed in ${prereqPath.title} (${prereqPct}% → 80%)`,
        }
      }
    }

    return { locked: false, reason: null }
  }

  // Overall stats
  const totalAvail = LEARNING_PATHS.flatMap(p => p.chapters.flatMap(ch => ch.lessonIds.filter(id => lessonMap[id])))
  const totalDone  = totalAvail.filter(id => completed.has(id))
  const overallPct = totalAvail.length ? Math.round((totalDone.length / totalAvail.length) * 100) : 0

  // Level / XP bar
  const xpThis  = xpInLevel(profile.xp)
  const xpNext  = xpNeededForLevel(profile.level)
  const xpPct   = xpProgressPct(profile.xp)

  return (
    <div className="space-y-6 animate-fade-in">

      {/* ── Guest banner ────────────────────────────────────────────────────── */}
      {isGuest && (
        <div
          className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 rounded-sm"
          style={{
            backgroundColor: `${BRAND.accent}0D`,
            border: `1px solid ${BRAND.accent}35`,
          }}
        >
          <div className="flex items-center gap-2">
            <UserPlus size={15} style={{ color: BRAND.accent, flexShrink: 0 }} />
            <span className="text-sm" style={{ color: BRAND.text }}>
              Create a free account to track progress, earn XP, and unlock achievements.
            </span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <Link
              href="/login"
              className="text-xs px-3 py-1.5 rounded-sm transition-opacity hover:opacity-80"
              style={{ color: BRAND.textDim, border: `1px solid ${BRAND.border}` }}
            >
              Sign in
            </Link>
            <Link
              href="/register"
              className="text-xs px-3 py-1.5 rounded-sm font-semibold transition-opacity hover:opacity-80"
              style={{ backgroundColor: BRAND.accent, color: '#0A0E1A' }}
            >
              Sign up free
            </Link>
          </div>
        </div>
      )}

      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="text-[10px] tracking-[0.25em] uppercase mb-1" style={{ color: BRAND.textSubtle }}>
            Curriculum
          </div>
          <h1 className="font-serif" style={{ fontSize: 'clamp(26px, 4vw, 38px)' }}>Skill Tree</h1>
          <p className="text-sm mt-1 max-w-xl" style={{ color: BRAND.textDim }}>
            Complete lessons to earn XP, unlock achievements, and advance through every earth science discipline.
          </p>
        </div>

        {/* Level + XP progress + overall progress — authenticated users only */}
        {!isGuest && (
          <div className="flex items-stretch gap-3 shrink-0">
            {/* Level / XP bar */}
            <div
              className="hidden sm:flex flex-col justify-center px-4 py-3 rounded-sm min-w-[160px]"
              style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[9px] tracking-[0.15em] uppercase font-mono" style={{ color: BRAND.textSubtle }}>
                  Level {profile.level}
                </span>
                <span className="text-[9px] font-mono" style={{ color: BRAND.textSubtle }}>
                  {xpThis.toLocaleString()} / {xpNext.toLocaleString()} XP
                </span>
              </div>
              <div className="h-[3px] rounded-full overflow-hidden" style={{ backgroundColor: BRAND.border }}>
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${xpPct}%`,
                    background: `linear-gradient(90deg, ${BRAND.accent}, ${BRAND.amethyst})`,
                    boxShadow: `0 0 6px ${BRAND.accent}60`,
                  }}
                />
              </div>
              <div className="mt-1.5 text-[9px] font-mono" style={{ color: BRAND.accent }}>
                {(xpNext - xpThis).toLocaleString()} XP to level {profile.level + 1}
              </div>
            </div>

            {/* Overall progress pill */}
            <div
              className="hidden sm:flex flex-col items-center justify-center px-4 py-3 rounded-sm"
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
        )}
      </div>

      {/* ── Learning paths ──────────────────────────────────────────────────── */}
      <div className="space-y-4">
        {LEARNING_PATHS.map((path) => {
          const { locked, reason: lockReason } = getLockInfo(path)
          const pct         = pctMap[path.id] ?? 0
          const isComplete  = pct === 100
          const PathIcon    = path.icon

          const allAvail    = path.chapters.flatMap(ch => ch.lessonIds.filter(id => lessonMap[id]))
          const doneLessons = allAvail.filter(id => completed.has(id))
          const nextId      = locked ? null : (allAvail.find(id => !completed.has(id)) ?? null)

          // XP totals
          const pathXpTotal  = allAvail.reduce((s, id) => s + (lessonMap[id]?.xpReward ?? 0), 0)
          const pathXpEarned = doneLessons.reduce((s, id) => s + (lessonMap[id]?.xpReward ?? 0), 0)

          // Achievement for this path
          const ach        = pathAchievement(path.id)
          const achEarned  = ach ? ach.check(achCtx) : false

          // Paths this one unlocks
          const unlocks = pathUnlocks[path.id] ?? []

          // Derived colors
          const accentColor = isComplete ? BRAND.jade : path.color
          const borderColor = locked ? BRAND.border : `${accentColor}40`
          const headerBg    = `${locked ? BRAND.border : accentColor}0C`

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
              {/* ── Path header ────────────────────────────────────────────── */}
              <div
                className="px-5 py-5"
                style={{
                  background: `linear-gradient(135deg, ${headerBg} 0%, transparent 60%)`,
                  borderBottom: `1px solid ${locked ? BRAND.border : `${accentColor}22`}`,
                }}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div
                    className="w-11 h-11 rounded-sm flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${locked ? BRAND.border : accentColor}18`,
                      border: `1px solid ${locked ? BRAND.border : accentColor}38`,
                    }}
                  >
                    <PathIcon size={21} strokeWidth={1.5} style={{ color: locked ? BRAND.textSubtle : accentColor }} />
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
                          style={{ backgroundColor: `${BRAND.jade}18`, color: BRAND.jade, border: `1px solid ${BRAND.jade}38` }}
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

                    {/* Unlocks → indicator */}
                    {!locked && unlocks.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2 mt-2">
                        {unlocks.map(u => (
                          <span
                            key={u.id}
                            className="inline-flex items-center gap-1 text-[9px] tracking-[0.08em] uppercase font-mono px-1.5 py-0.5 rounded-sm"
                            style={{
                              backgroundColor: `${u.color}10`,
                              border: `1px solid ${u.color}30`,
                              color: isComplete ? u.color : BRAND.textSubtle,
                            }}
                          >
                            <ArrowRight size={7} />
                            Unlocks {u.title}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Progress + XP totals */}
                  <div className="shrink-0 hidden sm:flex flex-col items-end gap-1">
                    <div className="text-sm font-mono font-bold" style={{ color: accentColor }}>
                      {pct}%
                    </div>
                    <div className="w-20 h-1 rounded-full overflow-hidden" style={{ backgroundColor: BRAND.border }}>
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{ width: `${pct}%`, backgroundColor: accentColor }}
                      />
                    </div>
                    <div className="text-[9px] font-mono" style={{ color: BRAND.textSubtle }}>
                      {doneLessons.length} / {allAvail.length} lessons
                    </div>
                    {/* XP earned vs total */}
                    <div className="flex items-center gap-1 mt-0.5" style={{ color: isComplete ? BRAND.jade : BRAND.textSubtle }}>
                      <Zap size={8} />
                      <span className="text-[9px] font-mono">
                        {pathXpEarned.toLocaleString()} / {pathXpTotal.toLocaleString()} XP
                      </span>
                    </div>
                  </div>
                </div>

                {/* Achievement badge — shown for all paths that have one */}
                {ach && (
                  <div
                    className="mt-3 flex items-center gap-2 px-3 py-2 rounded-sm w-fit"
                    style={{
                      backgroundColor: achEarned ? `${ach.color}12` : `${BRAND.border}40`,
                      border: `1px solid ${achEarned ? `${ach.color}40` : BRAND.border}`,
                      opacity: achEarned ? 1 : 0.55,
                    }}
                  >
                    <Trophy
                      size={11}
                      style={{ color: achEarned ? ach.color : BRAND.textSubtle }}
                      fill={achEarned ? `${ach.color}40` : 'none'}
                    />
                    <span
                      className="text-[9px] tracking-[0.12em] uppercase font-mono font-semibold"
                      style={{ color: achEarned ? ach.color : BRAND.textSubtle }}
                    >
                      {ach.name}
                    </span>
                    <span
                      className="text-[9px] font-mono"
                      style={{ color: achEarned ? ach.color : BRAND.textSubtle, opacity: 0.75 }}
                    >
                      +{ach.xpBonus.toLocaleString()} XP
                    </span>
                    {achEarned && (
                      <span
                        className="text-[8px] tracking-[0.15em] uppercase font-mono px-1 py-0.5 rounded-sm"
                        style={{ backgroundColor: `${BRAND.jade}20`, color: BRAND.jade, border: `1px solid ${BRAND.jade}35` }}
                      >
                        Earned
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* ── Chapters ───────────────────────────────────────────────── */}
              <div style={{ backgroundColor: BRAND.surface }}>
                {path.chapters.map((chapter, ci) => {
                  const lessonIds         = chapter.lessonIds.filter(id => lessonMap[id])
                  const chDone            = lessonIds.filter(id => completed.has(id))
                  const isChapterComplete = lessonIds.length > 0 && chDone.length === lessonIds.length
                  const isStarted         = chDone.length > 0
                  const chXpTotal         = lessonIds.reduce((s, id) => s + (lessonMap[id]?.xpReward ?? 0), 0)
                  const chXpEarned        = chDone.reduce((s, id) => s + (lessonMap[id]?.xpReward ?? 0), 0)

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

                          <div className="flex items-center gap-2 shrink-0">
                            {/* Chapter XP */}
                            <span
                              className="flex items-center gap-0.5 text-[9px] font-mono"
                              style={{ color: isChapterComplete ? BRAND.jade : BRAND.textSubtle }}
                            >
                              <Zap size={8} />
                              {isChapterComplete
                                ? chXpTotal.toLocaleString()
                                : `${chXpEarned.toLocaleString()}/${chXpTotal.toLocaleString()}`
                              }
                            </span>
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

                        {/* Horizontal lesson nodes */}
                        <div className="overflow-x-auto" style={{ paddingBottom: '2px' }}>
                          <div className="flex items-start" style={{ minWidth: 'max-content', paddingLeft: '28px' }}>
                            {lessonIds.map((id, li) => {
                              const lesson   = lessonMap[id]
                              if (!lesson) return null

                              const isDone      = completed.has(id)
                              const isNext      = id === nextId
                              const isFree      = FREE_LESSON_IDS.has(id)
                              // For guests, non-free lessons in otherwise-unlocked paths are gated
                              const isGuestLocked = isGuest && !isFree
                              const prevId      = li > 0 ? lessonIds[li - 1] : null
                              const prevDone    = prevId ? completed.has(prevId) : false

                              const lineColor = prevDone
                                ? isDone ? BRAND.jade : `${path.color}70`
                                : BRAND.border

                              return (
                                <div key={id} className="flex items-start">
                                  {/* Connector */}
                                  {li > 0 && (
                                    <div
                                      className="shrink-0 transition-colors duration-500"
                                      style={{ width: '20px', height: '2px', backgroundColor: lineColor, marginTop: '21px' }}
                                    />
                                  )}

                                  {/* Node */}
                                  <div className="flex flex-col items-center gap-1" style={{ width: '54px' }}>
                                    {locked || isGuestLocked ? (
                                      <Link
                                        href={isGuestLocked ? '/register' : '#'}
                                        className="block shrink-0"
                                        title={isGuestLocked ? 'Sign up free to access' : undefined}
                                      >
                                        <div
                                          className="w-11 h-11 rounded-full flex items-center justify-center border-2 shrink-0"
                                          style={{ backgroundColor: BRAND.surfaceHi, borderColor: BRAND.border }}
                                        >
                                          <Lock size={11} style={{ color: BRAND.textSubtle }} />
                                        </div>
                                      </Link>
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
                                          <span className="text-[12px] font-bold font-mono" style={{ color: path.color }}>
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

                                    {/* XP chip / Free badge */}
                                    {isGuest && isFree ? (
                                      <div
                                        className="flex items-center gap-0.5 px-1 rounded-sm"
                                        style={{
                                          backgroundColor: `${BRAND.jade}15`,
                                          border: `1px solid ${BRAND.jade}30`,
                                        }}
                                      >
                                        <span style={{ fontSize: '7px', color: BRAND.jade }} className="font-mono font-semibold">FREE</span>
                                      </div>
                                    ) : (
                                      <div
                                        className="flex items-center gap-0.5"
                                        style={{ color: isDone ? BRAND.jade : BRAND.textSubtle }}
                                      >
                                        <Zap size={7} />
                                        <span style={{ fontSize: '8px' }} className="font-mono">{lesson.xpReward}</span>
                                      </div>
                                    )}
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
