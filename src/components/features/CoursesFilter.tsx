'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

const DIFFICULTIES = [
  { value: 'all',          label: 'All Levels' },
  { value: 'beginner',     label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced',     label: 'Advanced' },
  { value: 'expert',       label: 'Expert' },
]

interface Category { value: string; label: string; icon?: string }

export default function CoursesFilter({ categories }: { categories: Category[] }) {
  const router = useRouter()
  const pathname = usePathname()
  const params = useSearchParams()
  const activeCategory = params.get('category') ?? 'all'
  const activeDifficulty = params.get('difficulty') ?? 'all'

  function update(key: string, value: string) {
    const p = new URLSearchParams(params.toString())
    if (value === 'all') p.delete(key)
    else p.set(key, value)
    router.push(`${pathname}?${p.toString()}`)
  }

  return (
    <div className="space-y-4">
      {/* Category pills */}
      <div className="flex flex-wrap gap-2">
        {categories.map(c => {
          const active = activeCategory === c.value
          return (
            <motion.button
              key={c.value}
              onClick={() => update('category', c.value)}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.96 }}
              className={cn(
                'relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium border transition-colors',
                active
                  ? 'border-cyan-500/40 text-cyan-300'
                  : 'bg-[#161b22] border-white/5 text-[#8b949e] hover:border-white/15 hover:text-[#e6edf3]'
              )}
            >
              {active && (
                <motion.span
                  layoutId="categoryActive"
                  className="absolute inset-0 rounded-xl bg-cyan-500/15 border border-cyan-500/30 shadow-[0_0_18px_-4px_rgba(6,182,212,0.45)]"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative flex items-center gap-1.5">
                {c.icon && <span className="text-base leading-none">{c.icon}</span>}
                {c.label}
              </span>
            </motion.button>
          )
        })}
      </div>

      {/* Difficulty pills */}
      <div className="flex flex-wrap gap-2">
        {DIFFICULTIES.map(d => {
          const active = activeDifficulty === d.value
          return (
            <motion.button
              key={d.value}
              onClick={() => update('difficulty', d.value)}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'relative px-3 py-1.5 rounded-lg text-xs font-semibold border transition-colors',
                active
                  ? 'border-white/20 text-[#e6edf3]'
                  : 'bg-transparent border-white/5 text-[#8b949e] hover:border-white/15'
              )}
            >
              {active && (
                <motion.span
                  layoutId="difficultyActive"
                  className="absolute inset-0 rounded-lg bg-white/8 border border-white/20"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative">{d.label}</span>
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}
