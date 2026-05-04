import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Zap, Flame, BookOpen, TrendingUp, Play, ChevronRight, Check, ArrowRight, Trophy, Calendar, Clock } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'
import { BRAND } from '@/lib/brand'
import { LESSON_LIST, TRACK_MAP, GEOL_101_MODULES, GEOL_201_MODULES } from '@/lessons/index'
import type { CourseModule } from '@/lessons/index'
import { LESSONS_V2_LIST } from '@/lessons-v2/index'
import { levelFromXp, xpProgressPct, xpInLevel, xpNeededForLevel, levelTitle } from '@/lib/utils'
import FacetedProgressRing from '@/components/brand/FacetedProgressRing'
import StatCard from '@/components/ui/StatCard'
import type { Profile } from '@/types'

export const metadata = { title: 'Dashboard' }

// Next.js passes searchParams as a prop to page components
type Props = { searchParams?: Promise<Record<string, string>> }

type ProgressRow = { lesson_id: string; completed_at: string | null }

function timeAgo(isoString: string | null): string {
  if (!isoString) return ''
  const diff = Date.now() - new Date(isoString).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 60) return mins <= 1 ? 'just now' : `${mins}m ago`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  if (days === 1) return 'yesterday'
  if (days < 7) return `${days}d ago`
  return new Date(isoString).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

function getDayLabel(daysAgo: number): string {
  const d = new Date()
  d.setDate(d.getDate() - daysAgo)
  return d.toLocaleDateString('en-US', { weekday: 'short' }).slice(0, 2)
}

function utcDayKey(isoString: string): string {
  return isoString.slice(0, 10) // "YYYY-MM-DD"
}

function localDayKey(daysAgo: number): string {
  const d = new Date()
  d.setDate(d.getDate() - daysAgo)
  // Use UTC date string that matches database UTC timestamps
  return d.toISOString().slice(0, 10)
}

export default async function DashboardPage({ searchParams }: Props) {
  const params = await (searchParams ?? Promise.resolve({} as Record<string, string>))
  const justUpgraded = (params as Record<string, string>).upgraded === '1'
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')

  const { data: profileRow } = await supabase.from('profiles').select('*').eq('id', user.id).single()
  const profile: Profile = (profileRow as Profile | null) ?? {
    id: user.id,
    username: user.email?.split('@')[0] ?? 'explorer',
    display_name: user.user_metadata?.display_name ?? null,
    bio: null,
    avatar_color: '#7AD7F0',
    xp: 0,
    level: 1,
    streak: 0,
    longest_streak: 0,
    last_active: new Date().toISOString(),
    subscription: 'free',
    created_at: new Date().toISOString(),
  }

  const { data: progressRows } = await supabase
    .from('user_lesson_progress' as never)
    .select('lesson_id, completed_at')
    .eq('user_id', user.id)
    .eq('completed', true)
    .order('completed_at', { ascending: false })
  const allProgress: ProgressRow[] = (progressRows ?? []) as ProgressRow[]
  const completed: string[] = allProgress.map(r => r.lesson_id)

  const xp = profile.xp
  const level = levelFromXp(xp)
  const pct = xpProgressPct(xp)
  const xpThisLevel = xpInLevel(xp)
  const xpForNextLevel = xpNeededForLevel(level)
  const xpToGo = xpForNextLevel - xpThisLevel

  const v2BaseIds = new Set(LESSONS_V2_LIST.map(l => l.id.replace(/-v2$/, '')))
  const combinedList = [
    ...LESSONS_V2_LIST.map(l => ({ id: l.id, title: l.title, trackName: l.trackName, level: l.level, description: l.description, xpReward: l.xpReward, track: l.track })),
    ...LESSON_LIST.filter(l => !v2BaseIds.has(l.id)).map(l => ({ id: l.id, title: l.title, trackName: l.trackName, level: l.level, description: l.description, xpReward: l.xpReward, track: l.track })),
  ]
  const lessonMap = Object.fromEntries(combinedList.map(l => [l.id, l]))

  // Find next lesson from structured courses first, then fall back to any
  const allCourseIds = [...GEOL_101_MODULES, ...GEOL_201_MODULES].flatMap(m => m.lessonIds)
  const nextCourseLesson = allCourseIds.find(id => lessonMap[id] && !completed.includes(id))
  const nextLesson = (nextCourseLesson ? lessonMap[nextCourseLesson] : null)
    ?? combinedList.find(l => !completed.includes(l.id))
    ?? combinedList[0]

  // Recent activity: last 5 completions with lesson details
  const recentActivity = allProgress
    .slice(0, 5)
    .map(r => ({ lesson: lessonMap[r.lesson_id] ?? null, completedAt: r.completed_at }))
    .filter(r => r.lesson !== null) as { lesson: typeof combinedList[0]; completedAt: string | null }[]

  // 7-day activity: count lessons per UTC day
  const activityByDay = new Map<string, number>()
  for (const row of allProgress) {
    if (!row.completed_at) continue
    const key = utcDayKey(row.completed_at)
    activityByDay.set(key, (activityByDay.get(key) ?? 0) + 1)
  }
  const weekActivity = Array.from({ length: 7 }, (_, i) => {
    const daysAgo = 6 - i
    const key = localDayKey(daysAgo)
    return { label: getDayLabel(daysAgo), count: activityByDay.get(key) ?? 0, isToday: daysAgo === 0 }
  })
  const totalWeekLessons = weekActivity.reduce((sum, d) => sum + d.count, 0)
  const maxDayCount = Math.max(...weekActivity.map(d => d.count), 1)

  // Daily missions: count lessons completed today (UTC)
  const todayKey = new Date().toISOString().slice(0, 10)
  const todayCount = activityByDay.get(todayKey) ?? 0
  const DAILY_MISSIONS = [
    { label: 'First Lesson', target: 1,  bonusXp: 25,  color: BRAND.jade },
    { label: 'On a Roll',    target: 3,  bonusXp: 75,  color: BRAND.gold },
    { label: 'Day Champion', target: 5,  bonusXp: 150, color: BRAND.coral },
  ] as const

  // Compute per-module stats
  function moduleStats(module: CourseModule) {
    const available = module.lessonIds.filter(id => lessonMap[id])
    const done = available.filter(id => completed.includes(id))
    const nextId = available.find(id => !completed.includes(id)) ?? null
    return { available, done, nextId, pct: available.length ? Math.round((done.length / available.length) * 100) : 0 }
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Upgrade success banner */}
      {justUpgraded && (
        <div
          className="flex items-center gap-3 px-5 py-3.5 rounded-sm"
          style={{ backgroundColor: `${BRAND.jade}15`, border: `1px solid ${BRAND.jade}40` }}
        >
          <Trophy size={16} color={BRAND.jade} />
          <div className="flex-1">
            <div className="text-sm font-medium" style={{ color: BRAND.jade }}>
              Welcome to your new plan!
            </div>
            <div className="text-[11px] mt-0.5" style={{ color: BRAND.textDim }}>
              Your subscription is active. All unlocked content is available immediately.
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <div
        className="relative overflow-hidden rounded-sm"
        style={{ border: `1px solid ${BRAND.border}`, backgroundColor: BRAND.surface }}
      >
        <div
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{ background: `radial-gradient(ellipse at top right, ${BRAND.accent}30 0%, transparent 60%)` }}
        />
        <div className="relative p-6 md:p-10 grid md:grid-cols-5 gap-6 items-center">
          <div className="md:col-span-3">
            <div className="text-[10px] tracking-[0.25em] uppercase mb-2" style={{ color: BRAND.accent }}>
              {completed.length === 0 ? `Welcome, ${profile.display_name ?? profile.username}` : 'Continue your study'}
            </div>
            <h1 className="font-serif" style={{ fontSize: 'clamp(28px, 5vw, 48px)', lineHeight: 1.05 }}>
              {nextLesson.title}
              <br />
              <em style={{ color: BRAND.accent }}>{nextLesson.trackName}</em>
              <span style={{ color: BRAND.textDim }}> · {nextLesson.level}</span>
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-relaxed" style={{ color: BRAND.textDim }}>
              {nextLesson.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Link
                href={`/learn/${nextLesson.id}`}
                className="px-5 py-2.5 rounded-sm flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase transition-all hover:scale-[1.02]"
                style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
              >
                <Play size={12} fill={BRAND.bg} /> Start Lesson
              </Link>
              <Link
                href="/learn"
                className="px-5 py-2.5 rounded-sm text-xs font-semibold tracking-[0.1em] uppercase"
                style={{ border: `1px solid ${BRAND.borderHi}`, color: BRAND.text }}
              >
                All Lessons
              </Link>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <FacetedProgressRing value={pct} level={level} />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <StatCard label="Total XP" value={xp.toLocaleString()} icon={Zap}        accent={BRAND.gold} />
        <StatCard label="Lessons"  value={completed.length}    sub={`/ ${combinedList.length}`} icon={BookOpen} accent={BRAND.jade} />
        <StatCard label="Streak"   value={profile.streak}      sub="days"         icon={Flame}      accent={BRAND.coral} />
        <StatCard label="Level"    value={level}               icon={TrendingUp}  accent={BRAND.accent} />
      </div>

      {/* Progress + Activity Row */}
      <div className="grid md:grid-cols-2 gap-3">
        {/* XP Level Progress */}
        <div
          className="p-5 rounded-sm"
          style={{ border: `1px solid ${BRAND.border}`, backgroundColor: BRAND.surface }}
        >
          <div className="text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: BRAND.textSubtle }}>
            Level Progress
          </div>
          <div className="flex items-end justify-between mb-3">
            <div>
              <span className="font-serif" style={{ fontSize: '28px', color: BRAND.accent }}>Lv {level}</span>
              <span className="text-xs ml-2" style={{ color: BRAND.textDim }}>{levelTitle(level)}</span>
            </div>
            <div className="text-right">
              <div className="text-[11px] font-mono" style={{ color: BRAND.textSubtle }}>
                {xpThisLevel.toLocaleString()} / {xpForNextLevel.toLocaleString()} XP
              </div>
            </div>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: BRAND.border }}>
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${pct}%`, backgroundColor: BRAND.accent }}
            />
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-[10px]" style={{ color: BRAND.textSubtle }}>{pct}% complete</span>
            <span className="text-[10px] font-mono" style={{ color: BRAND.textSubtle }}>
              {xpToGo.toLocaleString()} XP to Lv {level + 1}
            </span>
          </div>
        </div>

        {/* 7-Day Activity */}
        <div
          className="p-5 rounded-sm"
          style={{ border: `1px solid ${BRAND.border}`, backgroundColor: BRAND.surface }}
        >
          <div className="flex items-center justify-between mb-3">
            <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: BRAND.textSubtle }}>
              7-Day Activity
            </div>
            <div className="text-[10px] font-mono" style={{ color: totalWeekLessons > 0 ? BRAND.jade : BRAND.textSubtle }}>
              {totalWeekLessons} lesson{totalWeekLessons !== 1 ? 's' : ''} this week
            </div>
          </div>
          <div className="flex items-end justify-between gap-1.5 h-14">
            {weekActivity.map(({ label, count, isToday }) => {
              const barHeight = count > 0 ? Math.max(16, Math.round((count / maxDayCount) * 48)) : 6
              const barColor = count === 0 ? BRAND.border
                : isToday ? BRAND.accent
                : BRAND.jade
              return (
                <div key={label} className="flex-1 flex flex-col items-center justify-end gap-1">
                  <div
                    className="w-full rounded-sm transition-all"
                    style={{ height: `${barHeight}px`, backgroundColor: barColor, opacity: count === 0 ? 0.4 : 1 }}
                  />
                  <div
                    className="text-[9px] font-mono"
                    style={{ color: isToday ? BRAND.accent : BRAND.textSubtle }}
                  >
                    {label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Daily Missions */}
      <div
        className="rounded-sm overflow-hidden"
        style={{ border: `1px solid ${BRAND.border}`, backgroundColor: BRAND.surface }}
      >
        <div
          className="px-5 py-3 flex items-center justify-between"
          style={{ borderBottom: `1px solid ${BRAND.border}`, backgroundColor: BRAND.surfaceHi }}
        >
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: BRAND.textSubtle }}>Daily Missions</div>
            <div className="text-[11px] mt-0.5" style={{ color: BRAND.textDim }}>
              Resets at midnight UTC · {todayCount} lesson{todayCount !== 1 ? 's' : ''} completed today
            </div>
          </div>
          <Calendar size={14} color={BRAND.textSubtle} />
        </div>
        <div className="divide-y" style={{ borderColor: BRAND.border }}>
          {DAILY_MISSIONS.map(({ label, target, bonusXp, color }) => {
            const progress = Math.min(todayCount, target)
            const done = progress >= target
            const pctFill = Math.round((progress / target) * 100)
            return (
              <div key={label} className="px-5 py-3 flex items-center gap-4">
                <div
                  className="w-7 h-7 rounded-sm flex items-center justify-center shrink-0"
                  style={done
                    ? { backgroundColor: `${color}20`, border: `1px solid ${color}40` }
                    : { backgroundColor: `${BRAND.surfaceHi}`, border: `1px solid ${BRAND.border}` }
                  }
                >
                  {done
                    ? <Check size={12} color={color} strokeWidth={2.5} />
                    : <span className="text-[9px] font-mono" style={{ color: BRAND.textSubtle }}>{progress}/{target}</span>
                  }
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className="text-[11px] font-medium"
                      style={{ color: done ? color : BRAND.textDim }}
                    >
                      {label}
                    </span>
                    <span className="text-[10px] font-mono" style={{ color: done ? color : BRAND.textSubtle }}>
                      +{bonusXp} XP
                    </span>
                  </div>
                  <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: BRAND.border }}>
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ width: `${pctFill}%`, backgroundColor: done ? color : `${color}80` }}
                    />
                  </div>
                  <div className="text-[9px] mt-0.5 font-mono" style={{ color: BRAND.textSubtle }}>
                    Complete {target} lesson{target !== 1 ? 's' : ''} today
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Recent Activity */}
      {recentActivity.length > 0 && (
        <div
          className="rounded-sm overflow-hidden"
          style={{ border: `1px solid ${BRAND.border}`, backgroundColor: BRAND.surface }}
        >
          <div
            className="px-5 py-3 flex items-center justify-between"
            style={{ borderBottom: `1px solid ${BRAND.border}`, backgroundColor: BRAND.surfaceHi }}
          >
            <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: BRAND.textSubtle }}>
              Recent Activity
            </div>
            <Clock size={12} color={BRAND.textSubtle} />
          </div>
          <div className="divide-y" style={{ borderColor: BRAND.border }}>
            {recentActivity.map(({ lesson, completedAt }, i) => (
              <Link
                key={`${lesson.id}-${i}`}
                href={`/learn/${lesson.id}`}
                className="px-5 py-3 flex items-center gap-4 transition-colors hover:bg-white/[0.02]"
              >
                <div
                  className="w-7 h-7 rounded-sm flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${BRAND.jade}18`, border: `1px solid ${BRAND.jade}30` }}
                >
                  <Check size={12} color={BRAND.jade} strokeWidth={2.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm truncate" style={{ color: BRAND.text }}>{lesson.title}</div>
                  <div className="text-[10px] mt-0.5" style={{ color: BRAND.textSubtle }}>
                    {lesson.trackName} · {lesson.level}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-[11px] font-mono" style={{ color: BRAND.gold }}>+{lesson.xpReward} XP</div>
                  <div className="text-[10px] mt-0.5" style={{ color: BRAND.textSubtle }}>{timeAgo(completedAt)}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Curriculum */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: BRAND.textSubtle }}>Curriculum</div>
            <h2 className="font-serif" style={{ fontSize: '26px' }}>Course progress</h2>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/skill-tree"
              className="text-xs tracking-wider uppercase flex items-center gap-1 transition-opacity hover:opacity-70"
              style={{ color: BRAND.amethyst }}
            >
              Skill tree <Trophy size={12} />
            </Link>
            <Link
              href="/learn"
              className="text-xs tracking-wider uppercase flex items-center gap-1 transition-opacity hover:opacity-70"
              style={{ color: BRAND.accent }}
            >
              All lessons <ChevronRight size={14} />
            </Link>
          </div>
        </div>

        {/* GEOL 101 */}
        <CourseBlock
          code="GEOL 101"
          title="Earth's Structure and Processes"
          color={BRAND.coral}
          modules={GEOL_101_MODULES}
          moduleStats={moduleStats}
          lessonMap={lessonMap}
          completed={completed}
        />

        {/* GEOL 201 */}
        <CourseBlock
          code="GEOL 201"
          title="Earth Through Time"
          color={BRAND.amethyst}
          modules={GEOL_201_MODULES}
          moduleStats={moduleStats}
          lessonMap={lessonMap}
          completed={completed}
        />
      </div>
    </div>
  )
}

function CourseBlock({
  code, title, color, modules, moduleStats, lessonMap, completed,
}: {
  code: string
  title: string
  color: string
  modules: CourseModule[]
  moduleStats: (m: CourseModule) => { available: string[]; done: string[]; nextId: string | null; pct: number }
  lessonMap: Record<string, { id: string; title: string }>
  completed: string[]
}) {
  const allAvailable = modules.flatMap(m => m.lessonIds.filter(id => lessonMap[id]))
  const allDone = allAvailable.filter(id => completed.includes(id))
  const coursePct = allAvailable.length ? Math.round((allDone.length / allAvailable.length) * 100) : 0

  return (
    <div
      className="rounded-sm overflow-hidden"
      style={{ border: `1px solid ${BRAND.border}`, backgroundColor: BRAND.surface }}
    >
      {/* Course header */}
      <div
        className="px-5 py-3 flex items-center justify-between"
        style={{ borderBottom: `1px solid ${BRAND.border}`, backgroundColor: BRAND.surfaceHi }}
      >
        <div className="flex items-center gap-3">
          <span
            className="text-[10px] tracking-[0.2em] uppercase font-mono px-2 py-0.5 rounded-sm"
            style={{ backgroundColor: `${color}18`, color, border: `1px solid ${color}40` }}
          >
            {code}
          </span>
          <span className="font-serif" style={{ fontSize: '17px' }}>{title}</span>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <span className="text-[11px] font-mono" style={{ color: BRAND.textSubtle }}>
            {allDone.length}/{allAvailable.length}
          </span>
          <div className="w-20 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: BRAND.border }}>
            <div
              className="h-full rounded-full transition-all"
              style={{ width: `${coursePct}%`, backgroundColor: coursePct === 100 ? BRAND.jade : color }}
            />
          </div>
        </div>
      </div>

      {/* Module rows */}
      <div className="divide-y" style={{ borderColor: BRAND.border }}>
        {modules.map((module, mi) => {
          const stats = moduleStats(module)
          const isComplete = stats.done.length > 0 && stats.done.length === stats.available.length
          const hasAny = stats.available.length > 0
          const nextLesson = stats.nextId ? lessonMap[stats.nextId] : null

          return (
            <div key={module.id} className="px-5 py-3 flex items-center gap-4">
              {/* Module number */}
              <div
                className="w-6 h-6 rounded-sm flex items-center justify-center text-[10px] font-mono font-bold shrink-0"
                style={isComplete
                  ? { backgroundColor: `${BRAND.jade}20`, color: BRAND.jade, border: `1px solid ${BRAND.jade}40` }
                  : { backgroundColor: `${color}12`, color, border: `1px solid ${color}30` }
                }
              >
                {isComplete ? <Check size={11} strokeWidth={2.5} /> : mi + 1}
              </div>

              {/* Module info */}
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-mono truncate" style={{ color: BRAND.textDim }}>
                  {module.title}
                </div>
                {hasAny && (
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1 rounded-full overflow-hidden" style={{ backgroundColor: BRAND.border }}>
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${stats.pct}%`, backgroundColor: isComplete ? BRAND.jade : color }}
                      />
                    </div>
                    <span className="text-[10px] font-mono shrink-0" style={{ color: BRAND.textSubtle }}>
                      {stats.done.length}/{stats.available.length}
                    </span>
                  </div>
                )}
                {!hasAny && (
                  <div className="text-[10px] mt-0.5" style={{ color: BRAND.textSubtle }}>Coming soon</div>
                )}
              </div>

              {/* Action */}
              {nextLesson && (
                <Link
                  href={`/learn/${nextLesson.id}`}
                  className="shrink-0 flex items-center gap-1 px-3 py-1.5 rounded-sm text-[10px] tracking-[0.12em] uppercase font-semibold transition-opacity hover:opacity-80"
                  style={{ backgroundColor: `${color}18`, color, border: `1px solid ${color}35` }}
                >
                  {stats.done.length > 0 ? 'Continue' : 'Start'}
                  <ArrowRight size={10} />
                </Link>
              )}
              {isComplete && (
                <span
                  className="shrink-0 flex items-center gap-1 text-[10px] tracking-[0.12em] uppercase"
                  style={{ color: BRAND.jade }}
                >
                  <Check size={10} strokeWidth={2.5} /> Done
                </span>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
