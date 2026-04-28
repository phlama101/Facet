'use client'

import { motion } from 'framer-motion'
import { cn, rarityColor } from '@/lib/utils'
import type { Achievement } from '@/types'

interface Props {
  achievement: Achievement
  earned?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const RARITY_BORDER: Record<string, string> = {
  common:    'border-white/10',
  rare:      'border-blue-500/35',
  epic:      'border-purple-500/35',
  legendary: 'border-amber-500/45',
}

const RARITY_BG: Record<string, string> = {
  common:    'bg-gradient-to-br from-white/4 to-white/[0.02]',
  rare:      'bg-gradient-to-br from-blue-500/15 to-blue-500/5',
  epic:      'bg-gradient-to-br from-purple-500/15 to-purple-500/5',
  legendary: 'bg-gradient-to-br from-amber-500/20 to-amber-600/5',
}

const RARITY_GLOW: Record<string, string> = {
  common:    '',
  rare:      'shadow-[0_0_18px_rgba(59,130,246,0.2)]',
  epic:      'shadow-[0_0_18px_rgba(139,92,246,0.22)]',
  legendary: 'shadow-[0_0_24px_rgba(245,158,11,0.35)]',
}

const RARITY_RING: Record<string, string> = {
  common:    'before:bg-transparent',
  rare:      'before:bg-blue-500/30',
  epic:      'before:bg-purple-500/30',
  legendary: 'before:bg-amber-500/40',
}

export default function AchievementBadge({ achievement, earned = true, size = 'md' }: Props) {
  const sizeMap = { sm: 'w-12 h-12', md: 'w-16 h-16', lg: 'w-20 h-20' }
  const iconSize = { sm: 'text-xl', md: 'text-3xl', lg: 'text-4xl' }
  const isLegendary = achievement.rarity === 'legendary'

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      whileHover={earned ? { y: -4 } : undefined}
      className={cn('flex flex-col items-center gap-2 text-center group', !earned && 'opacity-30 grayscale')}
    >
      <motion.div
        whileHover={earned ? { scale: 1.12, rotate: [0, -6, 6, 0] } : undefined}
        transition={{ duration: 0.5 }}
        className={cn(
          'relative rounded-2xl flex items-center justify-center border transition-shadow duration-300',
          'before:absolute before:inset-0 before:rounded-2xl before:opacity-0 before:blur-md before:transition-opacity before:duration-500',
          earned && 'group-hover:before:opacity-100',
          sizeMap[size],
          RARITY_BG[achievement.rarity],
          RARITY_BORDER[achievement.rarity],
          RARITY_GLOW[achievement.rarity],
          RARITY_RING[achievement.rarity]
        )}
      >
        {/* Legendary shimmer */}
        {earned && isLegendary && (
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-2xl overflow-hidden"
          >
            <motion.span
              className="absolute inset-y-0 -left-1/2 w-1/2 bg-gradient-to-r from-transparent via-amber-300/40 to-transparent skew-x-12"
              animate={{ x: ['-100%', '300%'] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
            />
          </motion.span>
        )}
        <span className={cn('relative drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]', iconSize[size])}>
          {achievement.icon}
        </span>
      </motion.div>
      {size !== 'sm' && (
        <>
          <p className="text-xs font-bold text-[#e6edf3] leading-tight">{achievement.title}</p>
          <p className={cn('text-[10px] font-semibold uppercase tracking-wider', rarityColor(achievement.rarity))}>
            {achievement.rarity}
          </p>
        </>
      )}
    </motion.div>
  )
}
