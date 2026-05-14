'use client'

import { useState } from 'react'
import { ImageOff } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { AnnotatedImageConfig } from '@/lessons/types'

interface Props {
  config: AnnotatedImageConfig
}

/** Route external image URLs through our proxy so hotlinking blocks never affect users. */
function proxySrc(src: string): string {
  try {
    const { hostname } = new URL(src)
    // Already a local/relative URL — serve directly
    if (!hostname || src.startsWith('/')) return src
    return `/api/img?url=${encodeURIComponent(src)}`
  } catch {
    return src
  }
}

/** Convert a CSS aspect-ratio string like "16/9" to a percentage for the padding-bottom trick. */
function ratioToPct(ratio: string): string {
  const [w, h] = ratio.split('/').map(Number)
  if (!w || !h) return '56.25%' // fallback 16:9
  return `${(h / w) * 100}%`
}

export default function AnnotatedImage({ config }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [imgError, setImgError] = useState(false)

  const active = config.annotations.find(a => a.id === activeId) ?? null
  const activeIdx = active ? config.annotations.indexOf(active) : -1

  const ratio = config.aspectRatio ?? '16/9'
  const paddingPct = ratioToPct(ratio)
  const proxied = proxySrc(config.src)

  function toggle(id: string) {
    setActiveId(prev => (prev === id ? null : id))
  }

  return (
    <div className="space-y-3">
      {/* Image + markers — padding-bottom trick for universal aspect-ratio support */}
      <div
        className="relative w-full overflow-hidden rounded-sm"
        style={{
          paddingBottom: paddingPct,
          border: `1px solid ${BRAND.border}`,
          backgroundColor: BRAND.surfaceHi,
        }}
      >
        {imgError ? (
          /* Placeholder when image fails */
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-2"
            style={{ backgroundColor: BRAND.surfaceHi }}
          >
            <ImageOff size={28} style={{ color: BRAND.textSubtle }} />
            <span className="text-[11px] font-mono" style={{ color: BRAND.textSubtle }}>
              Image unavailable
            </span>
          </div>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={proxied}
            alt={config.alt}
            onError={() => setImgError(true)}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        )}

        {/* Numbered annotation markers */}
        {!imgError && config.annotations.map((ann, i) => {
          const isActive = ann.id === activeId
          return (
            <button
              key={ann.id}
              onClick={() => toggle(ann.id)}
              aria-label={`Annotation ${i + 1}: ${ann.label}`}
              className="absolute flex items-center justify-center rounded-full font-bold font-mono transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              style={{
                // min 44×44 tap target per Apple HIG / WCAG 2.5.5
                width: '44px',
                height: '44px',
                left: `${ann.x}%`,
                top: `${ann.y}%`,
                transform: 'translate(-50%, -50%)',
                // Visual dot is 28px; tap target is 44px via padding
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                zIndex: isActive ? 10 : 5,
              }}
            >
              <span
                className="flex items-center justify-center rounded-full transition-all duration-200"
                style={{
                  width: '28px',
                  height: '28px',
                  fontSize: '11px',
                  fontWeight: 700,
                  backgroundColor: isActive ? BRAND.accent : `${BRAND.accent}CC`,
                  color: '#0A0E1A',
                  border: `2px solid ${isActive ? '#fff' : `${BRAND.accent}80`}`,
                  boxShadow: isActive
                    ? `0 0 0 3px ${BRAND.accent}40, 0 2px 8px rgba(0,0,0,0.6)`
                    : `0 0 0 2px ${BRAND.accent}20, 0 2px 6px rgba(0,0,0,0.5)`,
                  transform: isActive ? 'scale(1.15)' : 'scale(1)',
                }}
              >
                {i + 1}
              </span>
            </button>
          )
        })}
      </div>

      {/* Active annotation detail card */}
      {active && (
        <div
          className="px-4 py-3 rounded-sm"
          style={{
            backgroundColor: `${BRAND.accent}0D`,
            border: `1px solid ${BRAND.accent}35`,
          }}
        >
          <div className="flex items-center gap-2 mb-1.5">
            <span
              className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold font-mono shrink-0"
              style={{ backgroundColor: BRAND.accent, color: '#0A0E1A' }}
            >
              {activeIdx + 1}
            </span>
            <span className="text-sm font-semibold" style={{ color: BRAND.text }}>
              {active.label}
            </span>
          </div>
          <p className="text-sm leading-relaxed" style={{ color: BRAND.textDim }}>
            {active.description}
          </p>
        </div>
      )}

      {/* Legend — tap any chip to expand */}
      <div className="grid gap-1.5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
        {config.annotations.map((ann, i) => {
          const isActive = ann.id === activeId
          return (
            <button
              key={ann.id}
              onClick={() => toggle(ann.id)}
              className="flex items-start gap-2 text-left rounded-sm transition-colors"
              style={{
                // min 44px height for touch targets
                minHeight: '44px',
                padding: '10px 12px',
                backgroundColor: isActive ? `${BRAND.accent}12` : BRAND.surface,
                border: `1px solid ${isActive ? `${BRAND.accent}40` : BRAND.border}`,
              }}
            >
              <span
                className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold font-mono shrink-0 mt-0.5"
                style={{ backgroundColor: BRAND.accent, color: '#0A0E1A' }}
              >
                {i + 1}
              </span>
              <div className="min-w-0">
                <div className="text-[11px] font-semibold leading-tight" style={{ color: BRAND.text }}>
                  {ann.label}
                </div>
                {!isActive && (
                  <div
                    className="text-[10px] leading-tight mt-0.5"
                    style={{
                      color: BRAND.textSubtle,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {ann.description}
                  </div>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {/* Credit line */}
      {config.credit && (
        <p className="text-[10px]" style={{ color: BRAND.textSubtle }}>
          Source: {config.credit}
        </p>
      )}
    </div>
  )
}
