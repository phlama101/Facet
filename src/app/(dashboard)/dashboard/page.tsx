import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Zap, Flame, BookOpen, TrendingUp, Play, ChevronRight, Check, ArrowRight } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'
import { BRAND } from '@/lib/brand'
import { LESSON_LIST, TRACK_MAP, GEOL_101_MODULES, GEOL_201_MODULES } from '@/lessons/index'
import type { CourseModule } from '@/lessons/index'
import { LESSONS_V2_LIST } from '@/lessons-v2/index'
import { levelFromXp, xpProgressPct, xpInLevel } from '@/lib/utils'
import FacetedProgressRing from '@/components/brand/FacetedProgressRing'
import StatCard from '@/components/ui/StatCard'
import type { Profile } from '@/types'

export const metadata = { title: 'Dashboard' }

export default async function DashboardPage() {
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
    .select('lesson_id')
    .eq('user_id', user.id)
    .eq('completed', true)
  const completed: string[] = ((progressRows ?? []) as { lesson_id: string }[]).map(r => r.lesson_id)

  const xp = profile.xp
  const level = levelFromXp(xp)
  const pct = xpProgressPct(xp)

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

  // Compute per-module stats
  function moduleStats(module: CourseModule) {
    const available = module.lessonIds.filter(id => lessonMap[id])
    const done = available.filter(id => completed.includes(id))
    const nextId = available.find(id => !completed.includes(id)) ?? null
    return { available, done, nextId, pct: available.length ? Math.round((done.length / available.length) * 100) : 0 }
  }

  return (
    <div className="space-y-6 animate-fade-in">
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

      {/* Curriculum */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: BRAND.textSubtle }}>Curriculum</div>
            <h2 className="font-serif" style={{ fontSize: '26px' }}>Course progress</h2>
          </div>
          <Link
            href="/learn"
            className="text-xs tracking-wider uppercase flex items-center gap-1 transition-opacity hover:opacity-70"
            style={{ color: BRAND.accent }}
          >
            All lessons <ChevronRight size={14} />
          </Link>
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
