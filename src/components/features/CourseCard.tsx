'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Clock, Zap, BookOpen, Lock, Sparkles } from 'lucide-react'
import { cn, difficultyColor } from '@/lib/utils'
import type { Course } from '@/types'

interface Props {
  course: Course
  progress?: number
  enrolled?: boolean
}

export default function CourseCard({ course, progress, enrolled }: Props) {
  return (
    <Link href={`/courses/${course.slug}`} className="group block h-full focus:outline-none">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4 }}
        whileTap={{ scale: 0.985 }}
        className={cn(
          'relative h-full flex flex-col p-6 rounded-2xl bg-gradient-to-br border border-white/6 overflow-hidden',
          'transition-[border-color,box-shadow] duration-300',
          'group-hover:border-white/15 group-hover:shadow-[0_18px_40px_-18px_rgba(0,0,0,0.7)] group-focus-visible:ring-2 group-focus-visible:ring-cyan-500/40',
          course.gradient
        )}
      >
        {/* Sheen sweep on hover */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-[1100ms] ease-out bg-gradient-to-r from-transparent via-white/[0.06] to-transparent"
        />

        {/* Premium lock */}
        {course.is_premium && !enrolled && (
          <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-500/10 border border-amber-500/25 backdrop-blur-sm">
            <Lock className="w-3 h-3 text-amber-400" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">Pro</span>
          </div>
        )}

        {/* Icon + difficulty */}
        <div className="relative flex items-start justify-between mb-4">
          <motion.span
            className="text-4xl leading-none drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)]"
            whileHover={{ rotate: [0, -8, 8, -4, 0], scale: 1.08 }}
            transition={{ duration: 0.6 }}
          >
            {course.icon}
          </motion.span>
          {(!course.is_premium || enrolled) && (
            <span className={cn(
              'text-[11px] px-2.5 py-1 rounded-full border font-semibold uppercase tracking-wide',
              difficultyColor(course.difficulty)
            )}>
              {course.difficulty}
            </span>
          )}
        </div>

        {/* Title + desc */}
        <h3 className="relative text-base font-bold text-[#e6edf3] group-hover:text-white mb-2 leading-snug tracking-tight transition-colors">
          {course.title}
        </h3>
        <p className="relative text-sm text-[#8b949e] flex-1 leading-relaxed line-clamp-3">
          {course.description}
        </p>

        {/* Progress bar (if enrolled) */}
        {enrolled && typeof progress === 'number' && (
          <div className="relative mt-4 space-y-1.5">
            <div className="flex justify-between text-xs text-[#8b949e]">
              <span className="flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-400" /> Progress
              </span>
              <span className="text-cyan-400 font-semibold tabular-nums">{Math.round(progress)}%</span>
            </div>
            <div className="relative h-1.5 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-300"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                style={{ boxShadow: '0 0 10px rgba(6,182,212,0.4)' }}
              />
            </div>
          </div>
        )}

        {/* Meta */}
        <div className="relative mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#8b949e]">
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
      </motion.div>
    </Link>
  )
}
