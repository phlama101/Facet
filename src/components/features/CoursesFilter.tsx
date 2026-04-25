'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'
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
        {categories.map(c => (
          <button key={c.value} onClick={() => update('category', c.value)}
            className={cn(
              'flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium border transition-all',
              activeCategory === c.value
                ? 'bg-cyan-500/15 border-cyan-500/30 text-cyan-400'
                : 'bg-[#161b22] border-white/5 text-[#8b949e] hover:border-white/15 hover:text-[#e6edf3]'
            )}>
            {c.icon && <span className="text-base leading-none">{c.icon}</span>}
            {c.label}
          </button>
        ))}
      </div>

      {/* Difficulty pills */}
      <div className="flex flex-wrap gap-2">
        {DIFFICULTIES.map(d => (
          <button key={d.value} onClick={() => update('difficulty', d.value)}
            className={cn(
              'px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all',
              activeDifficulty === d.value
                ? 'bg-white/10 border-white/20 text-[#e6edf3]'
                : 'bg-transparent border-white/5 text-[#8b949e] hover:border-white/15'
            )}>
            {d.label}
          </button>
        ))}
      </div>
    </div>
  )
}
