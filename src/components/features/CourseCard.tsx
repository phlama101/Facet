import Link from 'next/link'
import { Clock, Zap, BookOpen, Lock } from 'lucide-react'
import { cn, difficultyColor } from '@/lib/utils'
import type { Course } from '@/types'

interface Props {
  course: Course
  progress?: number
  enrolled?: boolean
}

export default function CourseCard({ course, progress, enrolled }: Props) {
  return (
    <Link href={`/courses/${course.slug}`} className="group block h-full">
      <div className={cn(
        'relative h-full flex flex-col p-6 rounded-2xl bg-gradient-to-br border border-white/6 transition-all duration-300',
        course.gradient,
        'hover:border-white/12 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
      )}>
        {/* Premium lock */}
        {course.is_premium && !enrolled && (
          <div className="absolute top-4 right-4 w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
            <Lock className="w-3.5 h-3.5 text-[#8b949e]" />
          </div>
        )}

        {/* Icon + difficulty */}
        <div className="flex items-start justify-between mb-4">
          <span className="text-4xl leading-none">{course.icon}</span>
          <span className={cn(
            'text-[11px] px-2.5 py-1 rounded-full border font-semibold uppercase tracking-wide',
            difficultyColor(course.difficulty)
          )}>
            {course.difficulty}
          </span>
        </div>

        {/* Title + desc */}
        <h3 className="text-base font-bold text-[#e6edf3] group-hover:text-white mb-2 leading-snug">
          {course.title}
        </h3>
        <p className="text-sm text-[#8b949e] flex-1 leading-relaxed line-clamp-3">
          {course.description}
        </p>

        {/* Progress bar (if enrolled) */}
        {enrolled && typeof progress === 'number' && (
          <div className="mt-4 space-y-1.5">
            <div className="flex justify-between text-xs text-[#8b949e]">
              <span>Progress</span>
              <span className="text-cyan-400 font-medium">{Math.round(progress)}%</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
              <div
                className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Meta */}
        <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#8b949e]">
          <span className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {course.estimated_hours}h
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            {course.total_xp} XP
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            {course.lesson_count ?? '–'} lessons
          </span>
        </div>
      </div>
    </Link>
  )
}
