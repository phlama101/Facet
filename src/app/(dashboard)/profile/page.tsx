import { Metadata } from 'next'
import { createClient } from '@/lib/supabase/server'
import { MOCK_COURSES } from '@/lib/mock-data'
import XPBar from '@/components/features/XPBar'
import AchievementBadge from '@/components/features/AchievementBadge'
import EditProfileForm from '@/components/features/EditProfileForm'
import { BookOpen, CheckCircle2, Zap, Trophy, Flame, Calendar, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

export const metadata: Metadata = { title: 'Profile' }

export default async function ProfilePage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const { data: profile } = await supabase.from('profiles').select('*').eq('id', user!.id).single()
  const safe = profile ?? { xp: 0, level: 1, streak: 0, longest_streak: 0, display_name: null, username: user?.email?.split('@')[0] ?? 'Explorer', bio: '', avatar_color: '#06b6d4', created_at: new Date().toISOString() }

  const { data: enrollments } = await supabase.from('user_course_enrollments').select('course_id, progress_percentage, completed_at').eq('user_id', user!.id)
  const { data: lessonProgress } = await supabase.from('user_lesson_progress').select('id').eq('user_id', user!.id)
  const { data: quizAttempts } = await supabase.from('user_quiz_attempts').select('passed, score').eq('user_id', user!.id) as { data: { passed: boolean; score: number }[] | null }
  const { data: userAchievements } = await supabase.from('user_achievements').select('*, achievements(*)').eq('user_id', user!.id)
  const { data: allAchievements } = await supabase.from('achievements').select('*')

  const stats = [
    { icon: <BookOpen className="w-5 h-5" />,    label: 'Courses Enrolled',   value: enrollments?.length ?? 0,     color: 'text-cyan-400',   bg: 'bg-cyan-400/10' },
    { icon: <CheckCircle2 className="w-5 h-5" />, label: 'Lessons Complete',  value: lessonProgress?.length ?? 0,  color: 'text-emerald-400',bg: 'bg-emerald-400/10' },
    { icon: <Trophy className="w-5 h-5" />,       label: 'Quizzes Passed',    value: quizAttempts?.filter(a => a.passed).length ?? 0, color: 'text-amber-400', bg: 'bg-amber-400/10' },
    { icon: <Flame className="w-5 h-5" />,        label: 'Longest Streak',    value: `${safe.longest_streak}d`,   color: 'text-orange-400', bg: 'bg-orange-400/10' },
    { icon: <Zap className="w-5 h-5" />,          label: 'Total XP',          value: safe.xp.toLocaleString(),     color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { icon: <Calendar className="w-5 h-5" />,     label: 'Member Since',      value: new Date(safe.created_at).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }), color: 'text-blue-400', bg: 'bg-blue-400/10' },
  ]

  const earnedIds = new Set(userAchievements?.map((ua: any) => ua.achievement_id) ?? [])

  return (
    <div className="space-y-8 animate-fade-in max-w-4xl">
      {/* Profile header */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#161b22] border border-white/5">
        <div className="flex flex-col sm:flex-row items-start gap-6">
          {/* Avatar */}
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-black text-[#0d1117] shrink-0"
            style={{ background: safe.avatar_color }}>
            {(safe.display_name || safe.username)[0].toUpperCase()}
          </div>

          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-black text-[#e6edf3]">{safe.display_name || safe.username}</h1>
            <p className="text-[#8b949e] text-sm">@{safe.username}</p>
            {safe.bio && <p className="text-sm text-[#8b949e] mt-2 leading-relaxed">{safe.bio}</p>}
            <div className="mt-4">
              <XPBar xp={safe.xp} level={safe.level} streak={safe.streak} size="md" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map(s => (
          <div key={s.label} className="p-4 rounded-2xl bg-[#161b22] border border-white/5 flex items-center gap-3">
            <div className={cn('w-9 h-9 rounded-xl flex items-center justify-center shrink-0', s.bg, s.color)}>{s.icon}</div>
            <div className="min-w-0">
              <p className="text-lg font-black text-[#e6edf3] truncate">{s.value}</p>
              <p className="text-xs text-[#8b949e]">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Achievements */}
      <div className="p-6 rounded-2xl bg-[#161b22] border border-white/5">
        <h2 className="text-lg font-bold text-[#e6edf3] mb-5">
          Achievements
          <span className="ml-2 text-sm font-normal text-[#8b949e]">{earnedIds.size} / {allAchievements?.length ?? 15}</span>
        </h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
          {(allAchievements ?? []).map((a: any) => (
            <AchievementBadge
              key={a.id}
              achievement={a}
              earned={earnedIds.has(a.id)}
              size="sm"
            />
          ))}
        </div>
      </div>

      {/* Courses progress */}
      {enrollments && enrollments.length > 0 && (
        <div className="p-6 rounded-2xl bg-[#161b22] border border-white/5">
          <h2 className="text-lg font-bold text-[#e6edf3] mb-5">My Courses</h2>
          <div className="space-y-4">
            {enrollments.map((e: any) => {
              const course = MOCK_COURSES.find(c => c.id === e.course_id)
              if (!course) return null
              return (
                <div key={e.course_id} className="flex items-center gap-4">
                  <span className="text-2xl shrink-0">{course.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-semibold text-[#e6edf3] truncate">{course.title}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <div className="flex-1 h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400" style={{ width: `${e.progress_percentage ?? 0}%` }} />
                      </div>
                      <span className="text-xs text-cyan-400 font-medium shrink-0">{Math.round(e.progress_percentage ?? 0)}%</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Edit profile */}
      <div className="p-6 rounded-2xl bg-[#161b22] border border-white/5">
        <h2 className="text-lg font-bold text-[#e6edf3] mb-5">Edit Profile</h2>
        <EditProfileForm currentDisplayName={safe.display_name ?? ''} currentBio={safe.bio ?? ''} currentColor={safe.avatar_color} />
      </div>
    </div>
  )
}
