'use client'

import { motion } from 'framer-motion'
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
        <div className="flex items-center gap-2.5">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
            className={cn(
              'relative rounded-lg bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/30 flex items-center justify-center font-black text-cyan-300',
              'shadow-[0_0_12px_rgba(6,182,212,0.25)]',
              size === 'sm' ? 'w-6 h-6 text-xs' : size === 'lg' ? 'w-10 h-10 text-base' : 'w-8 h-8 text-sm'
            )}
          >
            {level}
          </motion.div>
          <div>
            <p className={cn('font-semibold text-[#e6edf3] tracking-tight', size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-base' : 'text-sm')}>
              Level {level}
            </p>
            <p className={cn('text-[#8b949e] tabular-nums', size === 'sm' ? 'text-[10px]' : 'text-xs')}>
              {xpInLevel} / {nextLevelXp} XP to next level
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1 text-cyan-400"
          >
            <Zap className={cn('fill-cyan-400/40', size === 'sm' ? 'w-3 h-3' : 'w-4 h-4')} />
            <span className={cn('font-bold tabular-nums', size === 'sm' ? 'text-xs' : 'text-sm')}>{xp.toLocaleString()}</span>
          </motion.div>
          {showStreak && streak > 0 && (
            <motion.div
              whileHover={{ scale: 1.05 }}
              animate={{ filter: ['drop-shadow(0 0 0 transparent)', 'drop-shadow(0 0 6px rgba(249,115,22,0.6))', 'drop-shadow(0 0 0 transparent)'] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
              className="flex items-center gap-1 text-orange-400"
            >
              <Flame className={cn('fill-orange-400/30', size === 'sm' ? 'w-3 h-3' : 'w-4 h-4')} />
              <span className={cn('font-bold tabular-nums', size === 'sm' ? 'text-xs' : 'text-sm')}>{streak}</span>
            </motion.div>
          )}
        </div>
      </div>

      <div className={cn('relative rounded-full bg-white/5 overflow-hidden', size === 'sm' ? 'h-1.5' : size === 'lg' ? 'h-3' : 'h-2')}>
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-300"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{ boxShadow: '0 0 10px rgba(6,182,212,0.5)' }}
        />
        <motion.div
          className="absolute inset-y-0 w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: '-100%' }}
          animate={{ x: '900%' }}
          transition={{ duration: 3.2, repeat: Infinity, ease: 'linear', delay: 1 }}
        />
      </div>
    </div>
  )
}
