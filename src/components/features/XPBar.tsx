'use client'

import { Zap, Flame } from 'lucide-react'
import { xpProgress } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface Props {
  xp: number
  level: number
  streak?: number
  size?: 'sm' | 'md' | 'lg'
  showStreak?: boolean
  className?: string
}

export default function XPBar({ xp, level, streak = 0, size = 'md', showStreak = true, className }: Props) {
  const progress = xpProgress(xp)
  const xpInLevel = xp - (level - 1) * 500
  const nextLevelXp = 500

  return (
    <div className={cn('space-y-2', className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className={cn(
            'rounded-lg bg-cyan-500/15 border border-cyan-500/20 flex items-center justify-center font-black text-cyan-400',
            size === 'sm' ? 'w-6 h-6 text-xs' : size === 'lg' ? 'w-10 h-10 text-base' : 'w-8 h-8 text-sm'
          )}>
            {level}
          </div>
          <div>
            <p className={cn('font-semibold text-[#e6edf3]', size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm')}>
              Level {level}
            </p>
            <p className={cn('text-[#8b949e]', size === 'sm' ? 'text-[10px]' : 'text-xs')}>
              {xpInLevel} / {nextLevelXp} XP to next level
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-cyan-400">
            <Zap className={cn(size === 'sm' ? 'w-3 h-3' : 'w-4 h-4')} />
            <span className={cn('font-bold', size === 'sm' ? 'text-xs' : 'text-sm')}>{xp.toLocaleString()}</span>
          </div>
          {showStreak && streak > 0 && (
            <div className="flex items-center gap-1 text-orange-400">
              <Flame className={cn(size === 'sm' ? 'w-3 h-3' : 'w-4 h-4')} />
              <span className={cn('font-bold', size === 'sm' ? 'text-xs' : 'text-sm')}>{streak}</span>
            </div>
          )}
        </div>
      </div>

      <div className={cn('rounded-full bg-white/5 overflow-hidden', size === 'sm' ? 'h-1.5' : size === 'lg' ? 'h-3' : 'h-2')}>
        <div
          className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.4)] transition-all duration-1000"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
