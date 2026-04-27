import { BRAND } from '@/lib/brand'

interface FacetedAvatarProps {
  initials: string
  size?: 'md' | 'lg'
}

export default function FacetedAvatar({ initials, size = 'lg' }: FacetedAvatarProps) {
  const dim = size === 'lg' ? 'w-20 h-20 md:w-24 md:h-24' : 'w-12 h-12'
  const fontSize = size === 'lg' ? '26px' : '14px'

  return (
    <div className={`${dim} relative flex-shrink-0`}>
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <defs>
          <linearGradient id="avatarGrad" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%"   stopColor={BRAND.accent} />
            <stop offset="100%" stopColor={BRAND.amethyst} />
          </linearGradient>
        </defs>
        <path d="M50 5 L90 25 L85 80 L50 95 L15 80 L10 25 Z"
          fill="url(#avatarGrad)" />
        <path d="M50 5 L15 80"  stroke={BRAND.bg} strokeWidth="0.5" opacity="0.4" />
        <path d="M50 5 L85 80"  stroke={BRAND.bg} strokeWidth="0.5" opacity="0.4" />
        <path d="M10 25 L90 25" stroke={BRAND.bg} strokeWidth="0.5" opacity="0.4" />
      </svg>
      <div
        className="absolute inset-0 flex items-center justify-center font-serif"
        style={{ fontSize, color: BRAND.bg }}
      >
        {initials}
      </div>
    </div>
  )
}
