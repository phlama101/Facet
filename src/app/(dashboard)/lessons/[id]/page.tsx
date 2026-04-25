import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { MOCK_LESSON, MOCK_MODULES } from '@/lib/mock-data'
import { MOCK_COURSES } from '@/lib/mock-data'
import { BookOpen, ChevronLeft, ChevronRight, Clock, Zap, CheckCircle2 } from 'lucide-react'
import LessonCompleteButton from '@/components/features/LessonCompleteButton'
import LessonContent from '@/components/features/LessonContent'

interface Props { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params
  const lesson = id === MOCK_LESSON.id ? MOCK_LESSON : null
  return { title: lesson?.title ?? 'Lesson' }
}

export default async function LessonPage({ params }: Props) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // Use mock lesson for demo; real app fetches from Supabase
  const lesson = id === MOCK_LESSON.id ? MOCK_LESSON : { ...MOCK_LESSON, id, title: 'Earth Science Lesson' }

  let completed = false
  if (user) {
    const { data } = await supabase.from('user_lesson_progress').select('id').eq('user_id', user.id).eq('lesson_id', id).single()
    completed = !!data
  }

  const course = MOCK_COURSES[0]

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[#8b949e]">
        <Link href="/courses" className="hover:text-[#e6edf3] transition-colors">Courses</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href={`/courses/${course.slug}`} className="hover:text-[#e6edf3] transition-colors truncate max-w-[120px]">{course.title}</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-[#e6edf3] truncate max-w-[160px]">{lesson.title}</span>
      </nav>

      <div className="grid lg:grid-cols-4 gap-6">
        {/* Main content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Header */}
          <div className="p-6 rounded-2xl bg-[#161b22] border border-white/5">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1.5 text-sm text-[#8b949e]">
                <Clock className="w-4 h-4" /> {lesson.read_time} min read
              </div>
              <div className="flex items-center gap-1.5 text-sm text-cyan-400 font-medium">
                <Zap className="w-4 h-4" /> +{lesson.xp_reward} XP
              </div>
              {completed && (
                <div className="flex items-center gap-1.5 text-sm text-emerald-400 font-medium ml-auto">
                  <CheckCircle2 className="w-4 h-4" /> Completed
                </div>
              )}
            </div>
            <h1 className="text-2xl md:text-3xl font-black text-[#e6edf3]">{lesson.title}</h1>
          </div>

          {/* Lesson body */}
          <div className="p-6 md:p-8 rounded-2xl bg-[#161b22] border border-white/5">
            <LessonContent content={lesson.content} />
          </div>

          {/* Fun fact */}
          {lesson.fun_fact && (
            <div className="p-5 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/5 border border-cyan-500/15">
              <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">⚡ Fun Fact</p>
              <p className="text-sm text-[#e6edf3] leading-relaxed">{lesson.fun_fact}</p>
            </div>
          )}

          {/* Navigation + complete */}
          <div className="flex items-center justify-between gap-4 pt-2">
            <Link href={`/courses/${course.slug}`} className="flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-[#e6edf3] rounded-xl text-sm font-semibold transition-colors">
              <ChevronLeft className="w-4 h-4" /> Back to Course
            </Link>
            <LessonCompleteButton lessonId={id} completed={completed} xpReward={lesson.xp_reward} />
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Key concepts */}
          {lesson.key_concepts && lesson.key_concepts.length > 0 && (
            <div className="p-5 rounded-2xl bg-[#161b22] border border-white/5">
              <h3 className="text-sm font-bold text-[#e6edf3] mb-3 uppercase tracking-wide">Key Concepts</h3>
              <div className="flex flex-wrap gap-2">
                {lesson.key_concepts.map(c => (
                  <span key={c} className="px-2.5 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/15 text-xs text-cyan-400 font-medium">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* XP callout */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/15">
            <p className="text-sm font-bold text-amber-400 mb-1">Complete to earn</p>
            <p className="text-3xl font-black text-[#e6edf3]">+{lesson.xp_reward} <span className="text-base text-[#8b949e] font-normal">XP</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
