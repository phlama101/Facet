import { BRAND } from '@/lib/brand'

interface FacetedProgressRingProps {
  value: number   // 0–100
  level: number
}

export default function FacetedProgressRing({ value, level }: FacetedProgressRingProps) {
  const r = 75
  const circumference = 2 * Math.PI * r
  const offset = circumference - (circumference * value / 100)

  return (
    <div className="relative w-44 h-44">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="200" y2="200">
            <stop offset="0%"   stopColor={BRAND.accent} />
            <stop offset="100%" stopColor={BRAND.amethyst} />
          </linearGradient>
        </defs>

        {/* Octagonal gem outline */}
        <path
          d="M100 10 L160 40 L180 100 L160 160 L100 190 L40 160 L20 100 L40 40 Z"
          fill="none" stroke={BRAND.border} strokeWidth="1.5"
        />

        {/* Track ring */}
        <circle cx="100" cy="100" r={r} fill="none"
          stroke={BRAND.border} strokeWidth="2" />

        {/* Progress ring */}
        <circle cx="100" cy="100" r={r} fill="none"
          stroke="url(#ringGrad)" strokeWidth="2.5"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform="rotate(-90 100 100)"
        />

        {/* Inner facet lines */}
        <g opacity="0.3">
          <line x1="100" y1="10"  x2="100" y2="190" stroke={BRAND.accent} strokeWidth="0.5" />
          <line x1="20"  y1="100" x2="180" y2="100" stroke={BRAND.accent} strokeWidth="0.5" />
          <line x1="40"  y1="40"  x2="160" y2="160" stroke={BRAND.accent} strokeWidth="0.5" />
          <line x1="160" y1="40"  x2="40"  y2="160" stroke={BRAND.accent} strokeWidth="0.5" />
        </g>
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div
          className="text-[9px] tracking-[0.25em] uppercase"
          style={{ color: BRAND.textSubtle }}
        >
          Level {level}
        </div>
        <div
          className="font-serif leading-none"
          style={{ fontSize: '44px', color: BRAND.text }}
        >
          {Math.round(value)}
          <span style={{ fontSize: '20px', color: BRAND.textDim }}>%</span>
        </div>
        <div
          className="text-[9px] tracking-[0.25em] uppercase mt-0.5"
          style={{ color: BRAND.accent }}
        >
          To next
        </div>
      </div>
    </div>
  )
}
