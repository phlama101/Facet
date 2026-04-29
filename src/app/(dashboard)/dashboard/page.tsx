import { redirect } from 'next/navigation'
import Link from 'next/link'
import { Zap, Flame, BookOpen, TrendingUp, Play, ChevronRight, Check } from 'lucide-react'
import { createClient } from '@/lib/supabase/server'
import { BRAND } from '@/lib/brand'
import { LESSON_LIST, TRACK_MAP } from '@/lessons/index'
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
  // Prefer v2 lessons in "next lesson" recommendation; fall back to v1
  const v2BaseIds = new Set(LESSONS_V2_LIST.map(l => l.id.replace(/-v2$/, '')))
  const combinedList = [
    ...LESSONS_V2_LIST.map(l => ({ id: l.id, title: l.title, trackName: l.trackName, level: l.level, description: l.description })),
    ...LESSON_LIST.filter(l => !v2BaseIds.has(l.id)).map(l => ({ id: l.id, title: l.title, trackName: l.trackName, level: l.level, description: l.description })),
  ]
  const nextLesson = combinedList.find(l => !completed.includes(l.id)) ?? combinedList[0]

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

      {/* Lesson list preview */}
      <div
        className="p-5 md:p-6 rounded-sm"
        style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
      >
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="text-[10px] tracking-[0.25em] uppercase" style={{ color: BRAND.textSubtle }}>
              Curriculum
            </div>
            <h2 className="font-serif" style={{ fontSize: '26px' }}>Available lessons</h2>
          </div>
          <Link
            href="/learn"
            className="text-xs tracking-wider uppercase flex items-center gap-1 transition-opacity hover:opacity-70"
            style={{ color: BRAND.accent }}
          >
            All <ChevronRight size={14} />
          </Link>
        </div>

        <div className="grid gap-2">
          {combinedList.slice(0, 4).map(lesson => {
            const isDone = completed.includes(lesson.id)
            // Find track from v1 TRACK_MAP using lesson's track field
            const fullLesson = LESSONS_V2_LIST.find(l => l.id === lesson.id) ?? LESSON_LIST.find(l => l.id === lesson.id)
            const trackKey = fullLesson?.track as keyof typeof TRACK_MAP | undefined
            const track = trackKey ? TRACK_MAP[trackKey] : null
            if (!track) return null
            return (
              <Link
                key={lesson.id}
                href={`/learn/${lesson.id}`}
                className="flex items-center gap-4 p-3 rounded-sm text-left group transition-colors"
                style={{ backgroundColor: BRAND.bg, border: `1px solid ${BRAND.border}` }}
              >
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${track.color}20`, border: `1px solid ${track.color}60` }}
                >
                  <track.icon size={16} color={track.color} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-serif truncate" style={{ fontSize: '17px' }}>{lesson.title}</span>
                    {isDone && <Check size={12} color={BRAND.jade} className="flex-shrink-0" />}
                  </div>
                  <div className="text-[10px] tracking-[0.15em] uppercase mt-0.5" style={{ color: BRAND.textSubtle }}>
                    {lesson.trackName} · {lesson.level}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-xs flex-shrink-0" style={{ color: BRAND.gold }}>
                  <Zap size={10} fill={BRAND.gold} />
                  <span className="font-mono">{fullLesson?.xpReward ?? '—'}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
