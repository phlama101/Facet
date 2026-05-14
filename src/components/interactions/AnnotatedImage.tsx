'use client'

import { useState } from 'react'
import { BRAND } from '@/lib/brand'
import type { AnnotatedImageConfig } from '@/lessons/types'

interface Props {
  config: AnnotatedImageConfig
}

export default function AnnotatedImage({ config }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null)

  const active = config.annotations.find(a => a.id === activeId) ?? null
  const activeIdx = active ? config.annotations.indexOf(active) : -1

  function toggle(id: string) {
    setActiveId(prev => (prev === id ? null : id))
  }

  return (
    <div className="space-y-3">
      {/* Image + markers */}
      <div
        className="relative rounded-sm overflow-hidden w-full"
        style={{
          aspectRatio: config.aspectRatio ?? '16/9',
          border: `1px solid ${BRAND.border}`,
          backgroundColor: BRAND.surfaceHi,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={config.src}
          alt={config.alt}
          className="w-full h-full object-cover"
          loading="lazy"
        />

        {/* Numbered markers */}
        {config.annotations.map((ann, i) => {
          const isActive = ann.id === activeId
          return (
            <button
              key={ann.id}
              onClick={() => toggle(ann.id)}
              aria-label={`Annotation ${i + 1}: ${ann.label}`}
              className="absolute flex items-center justify-center rounded-full font-bold font-mono transition-all duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2"
              style={{
                left: `${ann.x}%`,
                top: `${ann.y}%`,
                transform: 'translate(-50%, -50%)',
                width: '28px',
                height: '28px',
                fontSize: '11px',
                backgroundColor: isActive ? BRAND.accent : `${BRAND.accent}CC`,
                color: '#0A0E1A',
                border: `2px solid ${isActive ? BRAND.accent : `${BRAND.accent}80`}`,
                boxShadow: isActive
                  ? `0 0 0 4px ${BRAND.accent}30, 0 2px 8px rgba(0,0,0,0.5)`
                  : `0 0 0 2px ${BRAND.accent}20, 0 2px 6px rgba(0,0,0,0.4)`,
                zIndex: isActive ? 10 : 5,
              }}
            >
              {i + 1}
            </button>
          )
        })}
      </div>

      {/* Active annotation detail */}
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

      {/* Legend — all annotations as clickable chips */}
      <div className="grid gap-1.5" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))' }}>
        {config.annotations.map((ann, i) => {
          const isActive = ann.id === activeId
          return (
            <button
              key={ann.id}
              onClick={() => toggle(ann.id)}
              className="flex items-start gap-2 text-left px-3 py-2 rounded-sm transition-colors"
              style={{
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

      {/* Credit */}
      {config.credit && (
        <p className="text-[10px]" style={{ color: BRAND.textSubtle }}>
          Source: {config.credit}
        </p>
      )}
    </div>
  )
}
