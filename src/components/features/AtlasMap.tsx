'use client'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import Link from 'next/link'
import { Map, Lock, BookOpen, ChevronRight, Waves, Flame, Globe } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import { ATLAS_LAYERS, type AtlasLayerId } from '@/lib/atlas-data'

const AtlasMapLeaflet = dynamic(() => import('./AtlasMapLeaflet'), { ssr: false })

const LAYER_ICONS: Record<AtlasLayerId, React.ElementType> = {
  'plate-boundaries': Globe,
  'volcanoes':        Flame,
  'ocean-currents':   Waves,
  'hotspots':         Map,
}

const LAYER_COLORS: Record<AtlasLayerId, string> = {
  'plate-boundaries': BRAND.jade,
  'volcanoes':        BRAND.ruby,
  'ocean-currents':   BRAND.accent,
  'hotspots':         BRAND.amethyst,
}

interface Props {
  subscription: string
  completedLessonIds: string[]
}

export default function AtlasMap({ subscription, completedLessonIds }: Props) {
  const isScholar = subscription === 'pro' || subscription === 'expert'

  const [layerVisibility, setLayerVisibility] = useState<Record<AtlasLayerId, boolean>>({
    'plate-boundaries': true,
    'volcanoes':        true,
    'ocean-currents':   true,
    'hotspots':         true,
  })

  function toggleLayer(id: AtlasLayerId) {
    setLayerVisibility(prev => ({ ...prev, [id]: !prev[id] }))
  }

  return (
    <div className="flex gap-0 rounded-sm overflow-hidden" style={{ height: 'calc(100vh - 148px)', border: `1px solid ${BRAND.border}` }}>

      {/* ── Sidebar ─────────────────────────────────────────────────── */}
      <aside
        className="w-64 shrink-0 flex flex-col"
        style={{ backgroundColor: BRAND.surface, borderRight: `1px solid ${BRAND.border}` }}
      >
        {/* Header */}
        <div className="px-4 py-4" style={{ borderBottom: `1px solid ${BRAND.border}` }}>
          <div className="text-[10px] tracking-[0.25em] uppercase mb-1" style={{ color: BRAND.accent }}>
            Living Atlas
          </div>
          <div className="font-serif" style={{ fontSize: '20px', lineHeight: 1.1 }}>
            Earth Science Map
          </div>
          <p className="text-[11px] mt-1.5" style={{ color: BRAND.textSubtle }}>
            Click any feature on the map for details and lesson connections.
          </p>
        </div>

        {/* Layer controls */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          <div className="text-[9px] tracking-[0.2em] uppercase mb-2 px-1" style={{ color: BRAND.textSubtle }}>
            Layers
          </div>

          {ATLAS_LAYERS.map(layer => {
            const id = layer.id as AtlasLayerId
            const Icon = LAYER_ICONS[id]
            const color = LAYER_COLORS[id]
            const locked = layer.requiresSubscription && !isScholar
            const isOn = layerVisibility[id]
            const hasLesson = !layer.linkedLessonId || completedLessonIds.includes(layer.linkedLessonId)

            return (
              <div
                key={id}
                className="rounded-sm overflow-hidden"
                style={{
                  border: `1px solid ${isOn && !locked ? color + '40' : BRAND.border}`,
                  opacity: locked ? 0.65 : 1,
                }}
              >
                <button
                  onClick={() => !locked && toggleLayer(id)}
                  className="w-full text-left px-3 py-2.5 flex items-center gap-2.5 transition-colors"
                  style={{ backgroundColor: isOn && !locked ? `${color}0c` : 'transparent' }}
                >
                  {/* Toggle */}
                  <div
                    className="shrink-0 w-8 h-4.5 rounded-full relative transition-colors"
                    style={{
                      width: '32px', height: '18px', borderRadius: '9px',
                      backgroundColor: locked ? BRAND.borderHi : (isOn ? color : BRAND.border),
                    }}
                  >
                    <div
                      className="absolute top-0.5 transition-transform"
                      style={{
                        width: '14px', height: '14px', borderRadius: '50%', top: '2px',
                        left: isOn && !locked ? '16px' : '2px',
                        backgroundColor: locked ? BRAND.textSubtle : BRAND.bg,
                        transition: 'left 0.15s ease',
                      }}
                    />
                  </div>

                  {/* Icon + label */}
                  <div
                    className="shrink-0 w-6 h-6 rounded-sm flex items-center justify-center"
                    style={{ backgroundColor: locked ? `${BRAND.border}80` : `${color}18`, border: `1px solid ${locked ? BRAND.border : color + '40'}` }}
                  >
                    {locked
                      ? <Lock size={10} color={BRAND.textSubtle} />
                      : <Icon size={11} color={color} />
                    }
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[12px] font-medium truncate" style={{ color: locked ? BRAND.textSubtle : BRAND.text }}>
                      {layer.label}
                    </div>
                    <div className="text-[10px] truncate" style={{ color: BRAND.textSubtle }}>
                      {layer.description}
                    </div>
                  </div>
                </button>

                {/* Lesson connection */}
                {isOn && !locked && (
                  <div style={{ borderTop: `1px solid ${BRAND.border}` }}>
                    <Link
                      href={`/learn/${layer.linkedLessonId}`}
                      className="flex items-center gap-2 px-3 py-2 transition-colors hover:opacity-80"
                      style={{ backgroundColor: hasLesson ? `${BRAND.jade}08` : 'transparent' }}
                    >
                      <BookOpen size={9} color={hasLesson ? BRAND.jade : BRAND.textSubtle} />
                      <span
                        className="text-[9px] tracking-[0.1em] uppercase truncate flex-1"
                        style={{ color: hasLesson ? BRAND.jade : BRAND.textSubtle }}
                      >
                        {layer.linkedLessonLabel}
                      </span>
                      <ChevronRight size={9} color={BRAND.textSubtle} />
                    </Link>
                  </div>
                )}

                {/* Scholar upsell */}
                {locked && (
                  <div style={{ borderTop: `1px solid ${BRAND.border}` }}>
                    <Link
                      href="/billing"
                      className="flex items-center gap-1.5 px-3 py-1.5 transition-opacity hover:opacity-70"
                    >
                      <Lock size={8} color={BRAND.accent} />
                      <span className="text-[9px] tracking-[0.1em] uppercase" style={{ color: BRAND.accent }}>
                        Unlock with Scholar
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Legend */}
        <div
          className="px-4 py-3 space-y-2"
          style={{ borderTop: `1px solid ${BRAND.border}` }}
        >
          <div className="text-[9px] tracking-[0.2em] uppercase mb-1" style={{ color: BRAND.textSubtle }}>
            Boundary Legend
          </div>
          {[
            { label: 'Divergent', color: BRAND.jade },
            { label: 'Convergent', color: BRAND.coral },
            { label: 'Transform', color: BRAND.gold, dashed: true },
          ].map(({ label, color, dashed }) => (
            <div key={label} className="flex items-center gap-2">
              <div style={{ width: '20px', height: '2px', backgroundColor: color, opacity: dashed ? 1 : 1,
                background: dashed ? `repeating-linear-gradient(90deg, ${color} 0, ${color} 4px, transparent 4px, transparent 8px)` : color,
              }} />
              <span className="text-[10px]" style={{ color: BRAND.textDim }}>{label}</span>
            </div>
          ))}
          <div className="flex items-center gap-2 mt-1">
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: BRAND.ruby }} />
            <span className="text-[10px]" style={{ color: BRAND.textDim }}>Active volcano</span>
          </div>
          <div className="flex items-center gap-2">
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: BRAND.amethyst, opacity: 0.7 }} />
            <span className="text-[10px]" style={{ color: BRAND.textDim }}>Mantle hotspot</span>
          </div>
        </div>
      </aside>

      {/* ── Map ─────────────────────────────────────────────────────── */}
      <div className="flex-1 relative">
        <AtlasMapLeaflet
          layerVisibility={layerVisibility}
          subscription={subscription}
          completedLessonIds={completedLessonIds}
        />
      </div>
    </div>
  )
}
