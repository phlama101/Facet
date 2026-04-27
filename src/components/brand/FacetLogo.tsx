import { BRAND } from '@/lib/brand'

interface FacetLogoProps {
  size?: number
  accent?: string
}

export default function FacetLogo({ size = 36, accent = BRAND.accent }: FacetLogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="facetGrad" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0%"   stopColor={accent} stopOpacity="1" />
          <stop offset="100%" stopColor={accent} stopOpacity="0.5" />
        </linearGradient>
      </defs>
      {/* Outer diamond */}
      <path d="M20 2 L38 16 L32 36 L8 36 L2 16 Z"
        stroke={accent} strokeWidth="1.5"
        fill="url(#facetGrad)" fillOpacity="0.12" />
      {/* Inner facet lines */}
      <path d="M20 2 L8 36"  stroke={accent} strokeWidth="1" opacity="0.6" />
      <path d="M20 2 L32 36" stroke={accent} strokeWidth="1" opacity="0.6" />
      <path d="M20 2 L2 16"  stroke={accent} strokeWidth="1" opacity="0.6" />
      <path d="M20 2 L38 16" stroke={accent} strokeWidth="1" opacity="0.6" />
      <path d="M2 16 L38 16" stroke={accent} strokeWidth="1" opacity="0.6" />
      <path d="M8 36 L2 16"  stroke={accent} strokeWidth="1" opacity="0.6" />
      <path d="M32 36 L38 16" stroke={accent} strokeWidth="1" opacity="0.6" />
      {/* Center point highlight */}
      <circle cx="20" cy="16" r="1.5" fill={accent} />
    </svg>
  )
}
