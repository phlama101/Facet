import { redirect } from 'next/navigation'
import Link from 'next/link'
import {
  Zap, Flame, BookOpen, TrendingUp, Play, ChevronRight,
  Check, ArrowRight, Trophy, Calendar, Clock,
  Mountain, Waves, Wind, Thermometer, Telescope,
} from 'lucide-react'
import { createClient } from '@/lib/supabase/server'
import { BRAND } from '@/lib/brand'
import {
  LESSON_LIST, TRACK_MAP,
  GEOL_101_MODULES, GEOL_201_MODULES,
  OCEA_101_MODULES, ATMO_101_MODULES,
  VOLC_101_MODULES, CLIM_101_MODULES, ASTR_101_MODULES,
  type CourseModule,
} from '@/lessons/index'
import { levelFromXp, xpProgressPct, xpInLevel, xpNeededForLevel, levelTitle } from '@/lib/utils'
import FacetedProgressRing from '@/components/brand/FacetedProgressRing'
import StatCard from '@/components/ui/StatCard'
import type { Profile } from '@/types'

export const metadata = { title: 'Dashboard' }

type Props = { searchParams?: Promise<Record<string, string>> }
type ProgressRow = { lesson_id: string; completed_at: string | null }

interface CourseConfig {
  id: string
  code: string
  title: string
  modules: CourseModule[]
  color: string
  icon: React.ComponentType<{ size?: number; color?: string }>
}

const COURSES: CourseConfig[] = [
  { id: 'geol-101', code: 'GEOL 101', title: 'Reading the Earth',               modules: GEOL_101_MODULES, color: BRAND.coral,     icon: Mountain   },
  { id: 'geol-201', code: 'GEOL 201', title: 'Earth Through Time',              modules: GEOL_201_MODULES, color: BRAND.coral,     icon: Mountain   },
  { id: 'ocea-101', code: 'OCEA 101', title: 'Introduction to Oceanography',    modules: OCEA_101_MODULES, color: BRAND.accent,    icon: Waves      },
  { id: 'atmo-101', code: 'ATMO 101', title: 'Introduction to Meteorology',     modules: ATMO_101_MODULES, color: BRAND.gold,      icon: Wind       },
  { id: 'volc-101', code: 'VOLC 101', title: 'Introduction to Volcanology',     modules: VOLC_101_MODULES, color: BRAND.ruby,      icon: Flame      },
  { id: 'clim-101', code: 'CLIM 101', title: 'Introduction to Climate Science', modules: CLIM_101_MODULES, color: BRAND.jade,      icon: Thermometer},
  { id: 'astr-101', code: 'ASTR 101', title: 'Introduction to Planetary Science', modules: ASTR_101_MODULES, color: BRAND.amethyst, icon: Telescope },
]

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

function utcDayKey(isoString: string): string { return isoString.slice(0, 10) }
function localDayKey(daysAgo: number): string {
  const d = new Date()
  d.setDate(d.getDate() - daysAgo)
  return d.toISOString().slice(0, 10)
}

function shortModuleName(title: string): string {
  const parts = title.split('—')
  return parts.length >= 2 ? parts.slice(1).join('—').trim() : title
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
  const completedSet = new Set(allProgress.map(r => r.lesson_id))

  const xp = profile.xp
  const level = levelFromXp(xp)
  const pct = xpProgressPct(xp)
  const xpThisLevel = xpInLevel(xp)
  const xpForNextLevel = xpNeededForLevel(level)
  const xpToGo = xpForNextLevel - xpThisLevel

  const combinedList = LESSON_LIST.map(l => ({ id: l.id, title: l.title, trackName: l.trackName, level: l.level, description: l.description, xpReward: l.xpReward, track: l.track, duration: l.duration }))
  const lessonMap = Object.fromEntries(combinedList.map(l => [l.id, l]))

  // Per-course stats
  const courseStats = COURSES.map(course => {
    const availableIds = course.modules.flatMap(m => m.lessonIds).filter(id => lessonMap[id])
    const doneIds = availableIds.filter(id => completedSet.has(id))
    const nextId = availableIds.find(id => !completedSet.has(id)) ?? null
    const pctDone = availableIds.length ? Math.round((doneIds.length / availableIds.length) * 100) : 0
    return { course, availableIds, doneIds, nextId, pctDone }
  })

  // Hero: pick the course with the most completions but not 100% done; fallback to any
  const activeCourseStats = courseStats
    .filter(s => s.doneIds.length > 0 && s.nextId !== null)
    .sort((a, b) => b.doneIds.length - a.doneIds.length)[0]
    ?? courseStats.find(s => s.nextId !== null)

  const nextLessonId = activeCourseStats?.nextId
    ?? combinedList.find(l => !completedSet.has(l.id))?.id
    ?? combinedList[0]?.id
  const nextLesson = lessonMap[nextLessonId ?? ''] ?? combinedList[0]

  // Recent activity
  const recentActivity = allProgress
    .slice(0, 5)
    .map(r => ({ lesson: lessonMap[r.lesson_id] ?? null, completedAt: r.completed_at }))
    .filter((r): r is { lesson: typeof combinedList[0]; completedAt: string | null } => r.lesson !== null)

  // 7-day activity
  const activityByDay = new Map<string, number>()
  for (const row of allProgress) {
    if (!row.completed_at) continue
    const key = utcDayKey(row.completed_at)
    activityByDay.set(key, (activityByDay.get(key) ?? 0) + 1)
  }
  const weekActivity = Array.from({ length: 7 }, (_, i) => {
    const daysAgo = 6 - i
    return { label: getDayLabel(daysAgo), count: activityByDay.get(localDayKey(daysAgo)) ?? 0, isToday: daysAgo === 0 }
  })
  const totalWeekLessons = weekActivity.reduce((sum, d) => sum + d.count, 0)
  const maxDayCount = Math.max(...weekActivity.map(d => d.count), 1)

  // Daily missions
  const todayKey = new Date().toISOString().slice(0, 10)
  const todayCount = activityByDay.get(todayKey) ?? 0
  const DAILY_MISSIONS = [
    { label: 'First Lesson', target: 1,  bonusXp: 25,  color: BRAND.jade  },
    { label: 'On a Roll',    target: 3,  bonusXp: 75,  color: BRAND.gold  },
    { label: 'Day Champion', target: 5,  bonusXp: 150, color: BRAND.coral },
  ] as const

  // Sort courses: started (most progress first) → unstarted
  const sortedCourseStats = [...courseStats].sort((a, b) => {
    if (a.doneIds.length > 0 && b.doneIds.length === 0) return -1
    if (a.doneIds.length === 0 && b.doneIds.length > 0) return  1
    return b.doneIds.length - a.doneIds.length
  })

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Upgrade banner */}
      {justUpgraded && (
        <div
          className="flex items-center gap-3 px-5 py-3.5 rounded-sm"
          style={{ backgroundColor: `${BRAND.jade}15`, border: `1px solid ${BRAND.jade}40` }}
        >
          <Trophy size={16} color={BRAND.jade} />
          <div className="flex-1">
            <div className="text-sm font-medium" style={{ color: BRAND.jade }}>Welcome to your new plan!</div>
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
              {completedSet.size === 0 ? `Welcome, ${profile.display_name ?? profile.username}` : 'Continue your study'}
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
        <StatCard label="Total XP" value={xp.toLocaleString()} icon={Zap}       accent={BRAND.gold}   />
        <StatCard label="Lessons"  value={completedSet.size}  sub={`/ ${combinedList.length}`} icon={BookOpen} accent={BRAND.jade} />
        <StatCard label="Streak"   value={profile.streak}     sub="days"          icon={Flame}     accent={BRAND.coral}  />
        <StatCard label="Level"    value={level}              icon={TrendingUp}  accent={BRAND.accent} />
      </div>

      {/* Progress + Activity */}
      <div className="grid md:grid-cols-2 gap-3">
        {/* XP Level Progress */}
        <div className="p-5 rounded-sm" style={{ border: `1px solid ${BRAND.border}`, backgroundColor: BRAND.surface }}>
          <div className="text-[10px] tracking-[0.25em] uppercase mb-3" style={{ color: BRAND.textSubtle }}>Level Progress</div>
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
            <div className="h-full rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: BRAND.accent }} />
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-[10px]" style={{ color: BRAND.textSubtle }}>{pct}% complete</span>
            <span className="text-[10px] font-mono" style={{ color: BRAND.textSubtle }}>{xpToGo.toLocaleString()} XP to Lv {level + 1}</span>
          </div>
        </div>

        {/* 7-Day Activity */}
        <div className="p-5 rounded-sm" style={{ border: `1px solid ${BRAND.border}`, backgroundColor: BRAND.surface }}>
          <div className="flex items-center justify-between mb-3">
            <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: BRAND.textSubtle }}>7-Day Activity</div>
            <div className="text-[10px] font-mono" style={{ color: totalWeekLessons > 0 ? BRAND.jade : BRAND.textSubtle }}>
              {totalWeekLessons} lesson{totalWeekLessons !== 1 ? 's' : ''} this week
            </div>
          </div>
          <div className="flex items-end justify-between gap-1.5 h-14">
            {weekActivity.map(({ label, count, isToday }) => {
              const barHeight = count > 0 ? Math.max(16, Math.round((count / maxDayCount) * 48)) : 6
              const barColor = count === 0 ? BRAND.border : isToday ? BRAND.accent : BRAND.jade
              return (
                <div key={label} className="flex-1 flex flex-col items-center justify-end gap-1">
                  <div className="w-full rounded-sm transition-all" style={{ height: `${barHeight}px`, backgroundColor: barColor, opacity: count === 0 ? 0.4 : 1 }} />
                  <div className="text-[9px] font-mono" style={{ color: isToday ? BRAND.accent : BRAND.textSubtle }}>{label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Daily Missions */}
      <div className="rounded-sm overflow-hidden" style={{ border: `1px solid ${BRAND.border}`, backgroundColor: BRAND.surface }}>
        <div className="px-5 py-3 flex items-center justify-between" style={{ borderBottom: `1px solid ${BRAND.border}`, backgroundColor: BRAND.surfaceHi }}>
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
                    : { backgroundColor: BRAND.surfaceHi, border: `1px solid ${BRAND.border}` }}
                >
                  {done
                    ? <Check size={12} color={color} strokeWidth={2.5} />
                    : <span className="text-[9px] font-mono" style={{ color: BRAND.textSubtle }}>{progress}/{target}</span>}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-medium" style={{ color: done ? color : BRAND.textDim }}>{label}</span>
                    <span className="text-[10px] font-mono" style={{ color: done ? color : BRAND.textSubtle }}>+{bonusXp} XP</span>
                  </div>
                  <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: BRAND.border }}>
                    <div className="h-full rounded-full transition-all" style={{ width: `${pctFill}%`, backgroundColor: done ? color : `${color}80` }} />
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
        <div className="rounded-sm overflow-hidden" style={{ border: `1px solid ${BRAND.border}`, backgroundColor: BRAND.surface }}>
          <div className="px-5 py-3 flex items-center justify-between" style={{ borderBottom: `1px solid ${BRAND.border}`, backgroundColor: BRAND.surfaceHi }}>
            <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: BRAND.textSubtle }}>Recent Activity</div>
            <Clock size={12} color={BRAND.textSubtle} />
          </div>
          <div className="divide-y" style={{ borderColor: BRAND.border }}>
            {recentActivity.map(({ lesson, completedAt }, i) => (
              <Link
                key={`${lesson.id}-${i}`}
                href={`/learn/${lesson.id}`}
                className="px-5 py-3 flex items-center gap-4 transition-colors hover:bg-white/[0.02]"
              >
                <div className="w-7 h-7 rounded-sm flex items-center justify-center shrink-0" style={{ backgroundColor: `${BRAND.jade}18`, border: `1px solid ${BRAND.jade}30` }}>
                  <Check size={12} color={BRAND.jade} strokeWidth={2.5} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm truncate" style={{ color: BRAND.text }}>{lesson.title}</div>
                  <div className="text-[10px] mt-0.5" style={{ color: BRAND.textSubtle }}>{lesson.trackName} · {lesson.level}</div>
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

      {/* Curriculum — all 7 courses */}
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

        <div className="grid md:grid-cols-2 gap-4">
          {sortedCourseStats.map(({ course, availableIds, doneIds, nextId, pctDone }) => {
            const isComplete = availableIds.length > 0 && doneIds.length === availableIds.length
            const hasStarted = doneIds.length > 0
            const nextLesson = nextId ? lessonMap[nextId] : null
            const Icon = course.icon

            return (
              <div
                key={course.id}
                className="rounded-sm overflow-hidden"
                style={{ border: `1px solid ${hasStarted ? `${course.color}30` : BRAND.border}`, backgroundColor: BRAND.surface }}
              >
                {/* Course header */}
                <div
                  className="px-5 py-4"
                  style={{ borderBottom: `1px solid ${BRAND.border}`, backgroundColor: hasStarted ? `${course.color}08` : BRAND.surfaceHi }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${course.color}18`, border: `1px solid ${course.color}40` }}
                      >
                        <Icon size={14} color={course.color} />
                      </div>
                      <div className="min-w-0">
                        <div
                          className="text-[9px] tracking-[0.2em] uppercase font-mono font-bold"
                          style={{ color: course.color }}
                        >
                          {course.code}
                        </div>
                        <div className="font-serif leading-tight truncate" style={{ fontSize: '16px', color: BRAND.text }}>
                          {course.title}
                        </div>
                      </div>
                    </div>

                    {isComplete ? (
                      <span
                        className="shrink-0 flex items-center gap-1 text-[9px] tracking-[0.12em] uppercase px-2 py-1 rounded-sm"
                        style={{ backgroundColor: `${BRAND.jade}18`, color: BRAND.jade, border: `1px solid ${BRAND.jade}40` }}
                      >
                        <Check size={9} strokeWidth={2.5} /> Complete
                      </span>
                    ) : nextLesson ? (
                      <Link
                        href={`/learn/${nextLesson.id}`}
                        className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-[10px] tracking-[0.1em] uppercase font-semibold transition-opacity hover:opacity-80"
                        style={{ backgroundColor: `${course.color}18`, color: course.color, border: `1px solid ${course.color}35` }}
                      >
                        {hasStarted ? 'Continue' : 'Start'}
                        <ArrowRight size={10} />
                      </Link>
                    ) : null}
                  </div>

                  {/* Course-level progress bar */}
                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: `${course.color}20` }}>
                      <div
                        className="h-full rounded-full transition-all"
                        style={{ width: `${pctDone}%`, backgroundColor: isComplete ? BRAND.jade : course.color }}
                      />
                    </div>
                    <span className="text-[10px] font-mono shrink-0" style={{ color: BRAND.textSubtle }}>
                      {doneIds.length} / {availableIds.length}
                    </span>
                    {hasStarted && !isComplete && (
                      <span className="text-[10px] font-mono shrink-0" style={{ color: course.color }}>{pctDone}%</span>
                    )}
                  </div>
                </div>

                {/* Module rows */}
                <div className="divide-y" style={{ borderColor: BRAND.border }}>
                  {course.modules.map((module, mi) => {
                    const avail = module.lessonIds.filter(id => lessonMap[id])
                    const done = avail.filter(id => completedSet.has(id))
                    const modNextId = avail.find(id => !completedSet.has(id)) ?? null
                    const modNextLesson = modNextId ? lessonMap[modNextId] : null
                    const modPct = avail.length ? Math.round((done.length / avail.length) * 100) : 0
                    const modDone = avail.length > 0 && done.length === avail.length
                    const modStarted = done.length > 0

                    return (
                      <div key={module.id} className="px-4 py-3 flex items-center gap-3">
                        {/* Module number / check */}
                        <div
                          className="w-5 h-5 rounded-sm flex items-center justify-center text-[9px] font-mono font-bold shrink-0"
                          style={modDone
                            ? { backgroundColor: `${BRAND.jade}18`, color: BRAND.jade, border: `1px solid ${BRAND.jade}35` }
                            : { backgroundColor: `${course.color}10`, color: modStarted ? course.color : BRAND.textSubtle, border: `1px solid ${modStarted ? course.color : BRAND.border}30` }}
                        >
                          {modDone ? <Check size={9} strokeWidth={2.5} /> : mi + 1}
                        </div>

                        {/* Module name + progress */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span
                              className="text-[11px] font-mono truncate"
                              style={{ color: modDone ? BRAND.textDim : modStarted ? BRAND.textDim : BRAND.textSubtle }}
                            >
                              {shortModuleName(module.title)}
                            </span>
                            {avail.length > 0 && (
                              <span className="text-[10px] font-mono shrink-0" style={{ color: BRAND.textSubtle }}>
                                {done.length}/{avail.length}
                              </span>
                            )}
                          </div>

                          {/* Next lesson title — show only if module is started but not done */}
                          {modStarted && !modDone && modNextLesson && (
                            <div className="text-[10px] mt-0.5 truncate" style={{ color: course.color }}>
                              → {modNextLesson.title}
                            </div>
                          )}

                          {avail.length === 0 && (
                            <div className="text-[10px] mt-0.5" style={{ color: BRAND.textSubtle }}>Coming soon</div>
                          )}

                          {/* Mini progress bar */}
                          {avail.length > 0 && modStarted && !modDone && (
                            <div className="mt-1.5 h-0.5 rounded-full overflow-hidden w-full" style={{ backgroundColor: `${course.color}20` }}>
                              <div className="h-full rounded-full" style={{ width: `${modPct}%`, backgroundColor: course.color }} />
                            </div>
                          )}
                        </div>

                        {/* Action: only show on the first incomplete module */}
                        {!modDone && avail.length > 0 && modNextLesson && !modStarted && (
                          <Link
                            href={`/learn/${modNextLesson.id}`}
                            className="shrink-0 p-1.5 rounded-sm transition-opacity hover:opacity-70"
                            style={{ color: BRAND.textSubtle }}
                            title={`Start ${shortModuleName(module.title)}`}
                          >
                            <ChevronRight size={13} />
                          </Link>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
