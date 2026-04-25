import { cn, rarityColor } from '@/lib/utils'
import type { Achievement } from '@/types'

interface Props {
  achievement: Achievement
  earned?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const RARITY_BORDER: Record<string, string> = {
  common:    'border-white/10',
  rare:      'border-blue-500/30',
  epic:      'border-purple-500/30',
  legendary: 'border-amber-500/40',
}

const RARITY_BG: Record<string, string> = {
  common:    'bg-white/3',
  rare:      'bg-blue-500/8',
  epic:      'bg-purple-500/8',
  legendary: 'bg-amber-500/10',
}

const RARITY_GLOW: Record<string, string> = {
  common:    '',
  rare:      'shadow-[0_0_12px_rgba(59,130,246,0.15)]',
  epic:      'shadow-[0_0_12px_rgba(139,92,246,0.15)]',
  legendary: 'shadow-[0_0_16px_rgba(245,158,11,0.25)]',
}

export default function AchievementBadge({ achievement, earned = true, size = 'md' }: Props) {
  const sizeMap = { sm: 'w-12 h-12', md: 'w-16 h-16', lg: 'w-20 h-20' }
  const iconSize = { sm: 'text-xl', md: 'text-3xl', lg: 'text-4xl' }

  return (
    <div className={cn('flex flex-col items-center gap-2 text-center group', !earned && 'opacity-35')}>
      <div className={cn(
        'rounded-2xl flex items-center justify-center border transition-all',
        sizeMap[size],
        RARITY_BG[achievement.rarity],
        RARITY_BORDER[achievement.rarity],
        RARITY_GLOW[achievement.rarity],
        earned && 'group-hover:scale-110 transition-transform duration-200'
      )}>
        <span className={iconSize[size]}>{achievement.icon}</span>
      </div>
      {size !== 'sm' && (
        <>
          <p className="text-xs font-bold text-[#e6edf3] leading-tight">{achievement.title}</p>
          <p className={cn('text-[10px] font-semibold capitalize', rarityColor(achievement.rarity))}>
            {achievement.rarity}
          </p>
        </>
      )}
    </div>
  )
}
