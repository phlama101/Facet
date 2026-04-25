import { Metadata } from 'next'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import { MOCK_COURSES, MOCK_LEADERBOARD } from '@/lib/mock-data'
import XPBar from '@/components/features/XPBar'
import CourseCard from '@/components/features/CourseCard'
import { BookOpen, Zap, Trophy, Flame, ArrowRight, Star, CheckCircle2, Clock } from 'lucide-react'
import { cn, difficultyColor } from '@/lib/utils'

export const metadata: Metadata = { title: 'Dashboard' }

export default async function DashboardPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: profile } = await supabase.from('profiles').select('*').eq('id', user!.id).single()
  const safeProfile = profile ?? { xp: 0, level: 1, streak: 0, longest_streak: 0, display_name: null, username: user?.email?.split('@')[0] ?? 'Explorer', avatar_color: '#06b6d4' }

  const { data: enrollments } = await supabase
    .from('user_course_enrollments').select('*, courses(*)').eq('user_id', user!.id).limit(3)

  const { data: achievements } = await supabase
    .from('user_achievements').select('*, achievements(*)').eq('user_id', user!.id).limit(4)

  const enrolledCourses = enrollments ?? []
  const recentAchievements = achievements ?? []
  const suggestedCourses = MOCK_COURSES.filter(c => !c.is_premium).slice(0, 3)

  const name = safeProfile.display_name || safeProfile.username || 'Explorer'
  const hour = new Date().getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening'

  const QUICK_STATS = [
    { icon: <BookOpen className="w-5 h-5" />, label: 'Courses Enrolled', value: enrolledCourses.length, color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
    { icon: <Zap className="w-5 h-5" />,      label: 'Total XP',         value: safeProfile.xp.toLocaleString(), color: 'text-amber-400', bg: 'bg-amber-400/10' },
    { icon: <Flame className="w-5 h-5" />,    label: 'Day Streak',       value: safeProfile.streak, color: 'text-orange-400', bg: 'bg-orange-400/10' },
    { icon: <Trophy className="w-5 h-5" />,   label: 'Achievements',     value: recentAchievements.length, color: 'text-purple-400', bg: 'bg-purple-400/10' },
  ]

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Greeting */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black text-[#e6edf3]">
            {greeting}, {name.split(' ')[0]} 👋
          </h1>
          <p className="text-[#8b949e] mt-1">
            {safeProfile.streak > 0
              ? `You're on a ${safeProfile.streak}-day streak. Keep it up!`
              : 'Start a lesson today to begin your streak.'}
          </p>
        </div>
        <Link href="/courses" className="hidden sm:flex items-center gap-2 px-4 py-2 bg-cyan-500/15 border border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/25 rounded-xl text-sm font-semibold transition-colors">
          Browse Courses <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* XP Bar */}
      <div className="p-5 rounded-2xl bg-[#161b22] border border-white/5">
        <XPBar xp={safeProfile.xp} level={safeProfile.level} streak={safeProfile.streak} size="lg" />
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {QUICK_STATS.map(s => (
          <div key={s.label} className="p-5 rounded-2xl bg-[#161b22] border border-white/5 flex items-center gap-4">
            <div className={cn('w-10 h-10 rounded-xl flex items-center justify-center shrink-0', s.bg, s.color)}>
              {s.icon}
            </div>
            <div className="min-w-0">
              <p className="text-xl font-black text-[#e6edf3]">{s.value}</p>
              <p className="text-xs text-[#8b949e] truncate">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* My courses */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-[#e6edf3]">My Courses</h2>
            <Link href="/courses" className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors">
              View all <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {enrolledCourses.length > 0 ? (
            <div className="space-y-3">
              {enrolledCourses.map((e: any) => {
                const course = e.courses
                return (
                  <Link key={e.id} href={`/courses/${course?.slug ?? e.course_id}`}
                    className="flex items-center gap-4 p-4 rounded-xl bg-[#161b22] border border-white/5 hover:border-white/10 transition-all group">
                    <span className="text-3xl shrink-0">{course?.icon ?? '📚'}</span>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[#e6edf3] group-hover:text-white truncate">{course?.title ?? 'Course'}</p>
                      <div className="flex items-center gap-3 mt-1.5">
                        <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                          <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400" style={{ width: `${e.progress_percentage ?? 0}%` }} />
                        </div>
                        <span className="text-xs text-cyan-400 font-medium shrink-0">{Math.round(e.progress_percentage ?? 0)}%</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8b949e] group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all shrink-0" />
                  </Link>
                )
              })}
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-[#161b22] border border-white/5 border-dashed text-center">
              <p className="text-3xl mb-3">🌍</p>
              <p className="text-[#e6edf3] font-semibold mb-1">No courses yet</p>
              <p className="text-sm text-[#8b949e] mb-5">Enroll in your first course to start earning XP</p>
              <Link href="/courses" className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-[#0d1117] rounded-xl text-sm font-bold transition-colors">
                Explore Courses <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}

          {/* Suggested */}
          {enrolledCourses.length < 2 && (
            <>
              <h3 className="text-sm font-semibold text-[#8b949e] uppercase tracking-wide pt-2">Suggested for You</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {suggestedCourses.slice(0, 2).map(c => (
                  <CourseCard key={c.id} course={c} />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right panel */}
        <div className="space-y-4">
          {/* Leaderboard snapshot */}
          <div className="p-5 rounded-2xl bg-[#161b22] border border-white/5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-[#e6edf3]">Top Learners</h2>
              <Link href="/leaderboard" className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors">
                Full board <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="space-y-2.5">
              {MOCK_LEADERBOARD.slice(0, 5).map(entry => (
                <div key={entry.id} className="flex items-center gap-3">
                  <span className={cn('text-sm font-bold w-5 text-center shrink-0', entry.rank <= 3 ? 'text-amber-400' : 'text-[#8b949e]')}>
                    {entry.rank === 1 ? '🥇' : entry.rank === 2 ? '🥈' : entry.rank === 3 ? '🥉' : entry.rank}
                  </span>
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-black text-[#0d1117] shrink-0"
                    style={{ background: entry.avatar_color }}>
                    {(entry.display_name || entry.username)[0].toUpperCase()}
                  </div>
                  <p className="text-sm text-[#e6edf3] flex-1 truncate">{entry.display_name || entry.username}</p>
                  <span className="text-xs text-cyan-400 font-bold shrink-0">{entry.xp.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="p-5 rounded-2xl bg-[#161b22] border border-white/5">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base font-bold text-[#e6edf3]">Achievements</h2>
              <Link href="/profile" className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1">View all <ArrowRight className="w-3 h-3" /></Link>
            </div>
            {recentAchievements.length > 0 ? (
              <div className="grid grid-cols-4 gap-3">
                {recentAchievements.map((ua: any) => (
                  <div key={ua.id} title={(ua.achievements as any)?.title} className="flex flex-col items-center gap-1 group">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                      {(ua.achievements as any)?.icon ?? '🏅'}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-[#8b949e] text-center py-3">Complete lessons to earn badges!</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
