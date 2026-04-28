import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { cn, difficultyColor } from '@/lib/utils'
import EnrollButton from '@/components/features/EnrollButton'
import { Clock, Zap, BookOpen, CheckCircle2, Lock, ChevronRight, BarChart3 } from 'lucide-react'
import type { Course, Module } from '@/types'

interface Props { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  const { data } = await (supabase.from('courses') as any).select('title').eq('slug', slug).single()
  return { title: (data as { title: string } | null)?.title ?? 'Course' }
}

export default async function CourseDetailPage({ params }: Props) {
  const { slug } = await params
  const supabase = await createClient()

  const { data: courseData } = await (supabase.from('courses') as any).select('*').eq('slug', slug).single()
  const course = courseData as Course | null
  if (!course) notFound()

  const { data: { user } } = await supabase.auth.getUser()

  let enrolled = false, progress = 0, completedLessonIds: string[] = []
  let userSubscription: 'free' | 'pro' | 'expert' = 'free'

  if (user) {
    const [enrollRes, lpRes, profileRes] = await Promise.all([
      supabase.from('user_course_enrollments').select('progress_percentage').eq('user_id', user.id).eq('course_id', course.id).single(),
      supabase.from('user_lesson_progress').select('lesson_id').eq('user_id', user.id),
      (supabase.from('profiles') as any).select('subscription').eq('id', user.id).single(),
    ])
    const safeEnroll = enrollRes.data as { progress_percentage: number } | null
    enrolled = !!safeEnroll
    progress = safeEnroll?.progress_percentage ?? 0
    completedLessonIds = (lpRes.data as { lesson_id: string }[] | null)?.map(r => r.lesson_id) ?? []
    userSubscription = (profileRes.data as { subscription: 'free' | 'pro' | 'expert' } | null)?.subscription ?? 'free'
  }

  const { data: modulesData } = await (supabase.from('modules') as any)
    .select('*, lessons(*)')
    .eq('course_id', course.id)
    .order('order_index')
  const modules: Module[] = ((modulesData ?? []) as any[]).map(m => ({
    ...m,
    lessons: [...(m.lessons ?? [])].sort((a: any, b: any) => a.order_index - b.order_index),
  }))

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero */}
      <div className={cn('relative p-8 rounded-2xl bg-gradient-to-br overflow-hidden', course.gradient, 'border border-white/6')}>
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="relative z-10 flex flex-col md:flex-row md:items-start gap-6">
          <span className="text-6xl shrink-0">{course.icon}</span>
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className={cn('text-xs px-2.5 py-1 rounded-full border font-semibold capitalize', difficultyColor(course.difficulty))}>
                {course.difficulty}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[#8b949e] capitalize">{course.category}</span>
              {course.is_premium && <span className="text-xs px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-semibold">Pro</span>}
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-[#e6edf3] mb-3">{course.title}</h1>
            <p className="text-[#8b949e] leading-relaxed max-w-2xl">{course.description}</p>
            <div className="flex flex-wrap gap-5 mt-4 text-sm text-[#8b949e]">
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{course.estimated_hours}h estimated</span>
              <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-cyan-400" />{course.total_xp} XP</span>
              <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" />{modules.length} modules</span>
            </div>
          </div>

          <div className="md:w-60 shrink-0">
            <div className="p-5 rounded-2xl bg-[#0d1117]/70 backdrop-blur border border-white/10 space-y-4">
              {enrolled && (
                <div className="space-y-1.5">
                  <div className="flex justify-between text-xs text-[#8b949e]">
                    <span>Progress</span><span className="text-cyan-400 font-semibold">{Math.round(progress)}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400" style={{ width: `${progress}%` }} />
                  </div>
                </div>
              )}
              <EnrollButton courseId={course.id} enrolled={enrolled} isPremium={course.is_premium} slug={course.slug} userSubscription={userSubscription} />
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Modules */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-xl font-bold text-[#e6edf3]">Course Content</h2>
          {modules.length > 0 ? (
            <div className="space-y-3">
              {modules.map((mod, mi) => (
                <div key={mod.id} className="rounded-2xl bg-[#161b22] border border-white/5 overflow-hidden">
                  <div className="flex items-center gap-4 p-4 border-b border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center text-xs font-black text-cyan-400">{mi + 1}</div>
                    <div className="flex-1">
                      <p className="font-semibold text-[#e6edf3]">{mod.title}</p>
                      {mod.description && <p className="text-xs text-[#8b949e] mt-0.5">{mod.description}</p>}
                    </div>
                    <span className="text-xs text-cyan-400 font-bold">+{mod.xp_reward} XP</span>
                  </div>

                  {mod.lessons && mod.lessons.length > 0 ? (
                    <div className="divide-y divide-white/3">
                      {mod.lessons.map((lesson, li) => {
                        const done = completedLessonIds.includes(lesson.id)
                        return (
                          <div key={lesson.id} className={cn('flex items-center gap-3 px-4 py-3 text-sm', !enrolled && 'opacity-60')}>
                            <span className="w-5 shrink-0 text-center">
                              {done ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> :
                               !enrolled ? <Lock className="w-3.5 h-3.5 text-[#8b949e]" /> :
                               <span className="text-xs text-[#8b949e]">{li + 1}</span>}
                            </span>
                            {enrolled ? (
                              <Link href={`/lessons/${lesson.id}`} className="flex-1 text-[#8b949e] hover:text-[#e6edf3] transition-colors">
                                {lesson.title}
                              </Link>
                            ) : (
                              <span className="flex-1 text-[#8b949e]">{lesson.title}</span>
                            )}
                            <span className="text-xs text-[#8b949e] flex items-center gap-1"><Clock className="w-3 h-3" />{lesson.read_time}m</span>
                          </div>
                        )
                      })}
                    </div>
                  ) : (
                    <p className="px-4 py-3 text-sm text-[#8b949e]">Content coming soon</p>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-[#161b22] border border-white/5 text-center">
              <p className="text-[#8b949e]">Module content is being prepared. Enroll to get notified!</p>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-[#161b22] border border-white/5">
            <h3 className="font-bold text-[#e6edf3] mb-4">What You&apos;ll Learn</h3>
            <ul className="space-y-2.5">
              {(course.tags as string[]).map(tag => (
                <li key={tag} className="flex items-center gap-2.5 text-sm text-[#8b949e]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="capitalize">{tag}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-5 rounded-2xl bg-[#161b22] border border-white/5 space-y-3">
            <h3 className="font-bold text-[#e6edf3]">Course Info</h3>
            {[
              { label: 'Level', value: course.difficulty, icon: <BarChart3 className="w-4 h-4" /> },
              { label: 'Duration', value: `${course.estimated_hours} hours`, icon: <Clock className="w-4 h-4" /> },
              { label: 'XP Reward', value: `${course.total_xp} XP`, icon: <Zap className="w-4 h-4 text-cyan-400" /> },
              { label: 'Modules', value: String(modules.length), icon: <BookOpen className="w-4 h-4" /> },
            ].map(r => (
              <div key={r.label} className="flex items-center gap-3 text-sm">
                <span className="text-[#8b949e]">{r.icon}</span>
                <span className="text-[#8b949e]">{r.label}</span>
                <span className="ml-auto font-medium text-[#e6edf3] capitalize">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
