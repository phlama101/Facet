'use client'

import dynamic from 'next/dynamic'
import { useState, useMemo, useRef, useEffect } from 'react'
import Link from 'next/link'
import {
  Map, Lock, BookOpen, ChevronRight, Waves, Flame, Globe,
  Search, X, Zap,
} from 'lucide-react'
import { BRAND } from '@/lib/brand'
import {
  ATLAS_LAYERS,
  PLATE_BOUNDARIES,
  VOLCANOES,
  OCEAN_CURRENTS,
  HOTSPOTS,
  type AtlasLayerId,
} from '@/lib/atlas-data'
import type { SelectedFeature } from './AtlasMapLeaflet'

const AtlasMapLeaflet = dynamic(() => import('./AtlasMapLeaflet'), { ssr: false })

// ── Static look-up tables ────────────────────────────────────────────────────

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

const BOUNDARY_COLORS: Record<string, string> = {
  divergent: BRAND.jade, convergent: BRAND.coral, transform: BRAND.gold,
}
const CURRENT_COLORS: Record<string, string> = { warm: '#FF9B6A', cold: BRAND.accent }

const LAYER_COUNTS: Record<AtlasLayerId, number> = {
  'plate-boundaries': PLATE_BOUNDARIES.length,
  'volcanoes':        VOLCANOES.length,
  'ocean-currents':   OCEAN_CURRENTS.length,
  'hotspots':         HOTSPOTS.length,
}

// ── Searchable features ──────────────────────────────────────────────────────

type SearchHit = {
  type: 'boundary' | 'volcano' | 'current' | 'hotspot'
  id: string
  name: string
  subtitle: string
  color: string
  lat: number
  lng: number
}

const ALL_FEATURES: SearchHit[] = [
  ...PLATE_BOUNDARIES.map(b => ({
    type: 'boundary' as const, id: b.id, name: b.name,
    subtitle: b.type + ' boundary',
    color: BOUNDARY_COLORS[b.type],
    lat: b.coordinates[Math.floor(b.coordinates.length / 2)][0],
    lng: b.coordinates[Math.floor(b.coordinates.length / 2)][1],
  })),
  ...VOLCANOES.map(v => ({
    type: 'volcano' as const, id: v.id, name: v.name,
    subtitle: v.country + (v.isActive ? ' · active' : ' · dormant'),
    color: v.isActive ? BRAND.ruby : BRAND.textSubtle,
    lat: v.lat, lng: v.lng,
  })),
  ...OCEAN_CURRENTS.map(c => ({
    type: 'current' as const, id: c.id, name: c.name,
    subtitle: c.type + ' current',
    color: CURRENT_COLORS[c.type],
    lat: c.coordinates[Math.floor(c.coordinates.length / 2)][0],
    lng: c.coordinates[Math.floor(c.coordinates.length / 2)][1],
  })),
  ...HOTSPOTS.map(h => ({
    type: 'hotspot' as const, id: h.id, name: h.name,
    subtitle: 'Mantle hotspot',
    color: BRAND.amethyst,
    lat: h.lat, lng: h.lng,
  })),
]

// ── Feature info panel ───────────────────────────────────────────────────────

function FeaturePanel({
  feature, completedLessonIds, onClose,
}: {
  feature: SelectedFeature
  completedLessonIds: string[]
  onClose: () => void
}) {
  const boundary = feature.type === 'boundary' ? PLATE_BOUNDARIES.find(b => b.id === feature.id) : null
  const volcano  = feature.type === 'volcano'  ? VOLCANOES.find(v => v.id === feature.id)  : null
  const current  = feature.type === 'current'  ? OCEAN_CURRENTS.find(c => c.id === feature.id) : null
  const hotspot  = feature.type === 'hotspot'  ? HOTSPOTS.find(h => h.id === feature.id)  : null

  const accentColor =
    feature.type === 'boundary' ? BOUNDARY_COLORS[boundary?.type ?? 'divergent']
    : feature.type === 'volcano'  ? (volcano?.isActive ? BRAND.ruby : BRAND.textSubtle)
    : feature.type === 'current'  ? CURRENT_COLORS[current?.type ?? 'cold']
    : BRAND.amethyst

  const typeLabel =
    feature.type === 'boundary' ? (boundary?.type ?? '') + ' boundary'
    : feature.type === 'volcano'  ? (volcano?.type ?? 'volcano').replace(/-/g, ' ') + (volcano?.isActive ? ' · active' : ' · dormant')
    : feature.type === 'current'  ? (current?.type ?? '') + ' current'
    : 'Mantle Hotspot'

  const name        = boundary?.name ?? volcano?.name ?? current?.name ?? hotspot?.name ?? ''
  const description = boundary?.description ?? volcano?.description ?? current?.description ?? hotspot?.description ?? ''

  const linkedLesson =
    feature.type === 'boundary' ? 'geol-101-1-4-1'
    : feature.type === 'volcano'  ? 'geol-101-1-5-1'
    : feature.type === 'current'  ? 'ocea-101-1-2-3'
    : 'geol-101-1-4-4'

  const lessonLabel =
    feature.type === 'boundary' ? 'Study plate tectonics'
    : feature.type === 'volcano'  ? 'Study volcanic landforms'
    : feature.type === 'current'  ? 'Study ocean circulation'
    : 'Study hotspots & plumes'

  const hasStudied = completedLessonIds.includes(linkedLesson)

  return (
    <div
      className="absolute bottom-4 left-4 w-72 rounded-sm overflow-hidden animate-slide-up z-[1000]"
      style={{
        backgroundColor: BRAND.surface,
        border: `1px solid ${accentColor}50`,
        boxShadow: `0 8px 40px rgba(0,0,0,0.6), 0 0 0 1px ${BRAND.border}`,
      }}
    >
      {/* Color top stripe */}
      <div className="h-0.5 w-full" style={{ backgroundColor: accentColor }} />

      {/* Header */}
      <div
        className="px-4 pt-3 pb-2.5 flex items-start justify-between gap-3"
        style={{ borderBottom: `1px solid ${BRAND.border}` }}
      >
        <div className="min-w-0 flex-1">
          <div
            className="text-[9px] tracking-[0.2em] uppercase font-mono font-bold mb-1"
            style={{ color: accentColor }}
          >
            {typeLabel}
          </div>
          <div className="font-serif leading-tight" style={{ fontSize: '16px', color: BRAND.text }}>
            {name}
          </div>
          {/* Feature-specific subtitle */}
          {volcano && (
            <div className="text-[10px] mt-0.5 leading-snug" style={{ color: BRAND.textSubtle }}>
              {volcano.country} · {volcano.elevationM.toLocaleString()} m
              <span className="ml-1">· Last eruption: {volcano.lastEruption}</span>
            </div>
          )}
          {boundary && (
            <div className="text-[10px] mt-0.5" style={{ color: BRAND.textSubtle }}>{boundary.plates}</div>
          )}
          {hotspot && (
            <div className="text-[10px] mt-0.5" style={{ color: BRAND.textSubtle }}>{hotspot.features}</div>
          )}
        </div>
        <button
          onClick={onClose}
          className="shrink-0 p-1 rounded-sm transition-opacity hover:opacity-70 mt-0.5"
          style={{ color: BRAND.textSubtle }}
          aria-label="Close"
        >
          <X size={13} />
        </button>
      </div>

      {/* Description */}
      <div className="px-4 py-3">
        <p className="text-[12px] leading-relaxed" style={{ color: BRAND.textDim }}>
          {description}
        </p>

        {/* Lesson link */}
        <Link
          href={`/learn/${linkedLesson}`}
          className="flex items-center gap-1.5 mt-3 text-[10px] tracking-[0.1em] uppercase transition-opacity hover:opacity-80 group"
          style={{ color: hasStudied ? BRAND.jade : accentColor }}
        >
          <BookOpen size={10} />
          {lessonLabel}
          <ChevronRight size={9} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  )
}

function LockedPanel({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="absolute bottom-4 left-4 w-72 rounded-sm overflow-hidden animate-slide-up z-[1000]"
      style={{
        backgroundColor: BRAND.surface,
        border: `1px solid ${BRAND.accent}40`,
        boxShadow: `0 8px 40px rgba(0,0,0,0.6)`,
      }}
    >
      <div className="h-0.5 w-full" style={{ backgroundColor: BRAND.accent }} />
      <div className="p-4">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div className="flex items-center gap-2">
            <Lock size={12} color={BRAND.accent} />
            <span
              className="text-[10px] tracking-[0.2em] uppercase font-mono font-bold"
              style={{ color: BRAND.accent }}
            >
              Scholar Plan
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-0.5 rounded-sm transition-opacity hover:opacity-70"
            style={{ color: BRAND.textSubtle }}
          >
            <X size={13} />
          </button>
        </div>
        <p className="text-[12px] leading-relaxed mb-3" style={{ color: BRAND.textDim }}>
          Unlock volcanoes, ocean currents, and mantle hotspots with a Scholar subscription.
        </p>
        <Link
          href="/billing"
          className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-sm text-[10px] tracking-[0.12em] uppercase font-semibold transition-opacity hover:opacity-85"
          style={{ backgroundColor: BRAND.accent, color: BRAND.bg }}
        >
          <Zap size={10} fill={BRAND.bg} /> Upgrade to Scholar
        </Link>
      </div>
    </div>
  )
}

// ── Main component ───────────────────────────────────────────────────────────

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
  const [selectedFeature, setSelectedFeature] = useState<SelectedFeature | null>(null)
  const [flyTarget, setFlyTarget] = useState<{ lat: number; lng: number; zoom?: number } | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const searchRef = useRef<HTMLInputElement>(null)

  function toggleLayer(id: AtlasLayerId) {
    setLayerVisibility(prev => ({ ...prev, [id]: !prev[id] }))
  }

  function handleSelect(feature: SelectedFeature | null) {
    setSelectedFeature(feature)
  }

  function handleSearchHit(hit: SearchHit) {
    setSearchQuery('')
    setFlyTarget({ lat: hit.lat, lng: hit.lng, zoom: 5 })
    setSelectedFeature({ type: hit.type, id: hit.id, lat: hit.lat, lng: hit.lng })
  }

  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return []
    const filtered = ALL_FEATURES.filter(f => {
      if (!isScholar && f.type !== 'boundary') return false
      return f.name.toLowerCase().includes(q) || f.subtitle.toLowerCase().includes(q)
    })
    return filtered.slice(0, 8)
  }, [searchQuery, isScholar])

  // Close search dropdown on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setSearchQuery('')
        searchRef.current?.blur()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div
      className="flex gap-0 rounded-sm overflow-hidden"
      style={{ height: 'calc(100vh - 148px)', border: `1px solid ${BRAND.border}` }}
    >

      {/* ── Sidebar ───────────────────────────────────────────────────── */}
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

        {/* Search */}
        <div className="relative px-3 py-2.5" style={{ borderBottom: `1px solid ${BRAND.border}` }}>
          <Search
            size={12}
            className="absolute left-6 top-1/2 -translate-y-1/2 pointer-events-none"
            style={{ color: BRAND.textSubtle }}
          />
          <input
            ref={searchRef}
            type="text"
            placeholder="Search features…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-7 pr-6 py-1.5 rounded-sm text-[12px] bg-transparent outline-none"
            style={{
              backgroundColor: BRAND.surfaceHi,
              border: `1px solid ${searchQuery ? BRAND.accent : BRAND.border}`,
              color: BRAND.text,
            }}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-6 top-1/2 -translate-y-1/2"
              style={{ color: BRAND.textSubtle }}
            >
              <X size={11} />
            </button>
          )}

          {/* Search results dropdown */}
          {searchResults.length > 0 && (
            <div
              className="absolute left-3 right-3 top-full mt-1 rounded-sm overflow-hidden z-50"
              style={{
                backgroundColor: BRAND.surface,
                border: `1px solid ${BRAND.border}`,
                boxShadow: `0 8px 24px rgba(0,0,0,0.5)`,
              }}
            >
              {searchResults.map(hit => (
                <button
                  key={`${hit.type}-${hit.id}`}
                  onClick={() => handleSearchHit(hit)}
                  className="w-full text-left px-3 py-2 flex items-center gap-2.5 transition-colors hover:bg-white/[0.04]"
                >
                  <div
                    className="shrink-0 w-2 h-2 rounded-full"
                    style={{ backgroundColor: hit.color }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="text-[12px] truncate" style={{ color: BRAND.text }}>{hit.name}</div>
                    <div className="text-[10px] truncate" style={{ color: BRAND.textSubtle }}>{hit.subtitle}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
          {searchQuery.trim() && searchResults.length === 0 && (
            <div
              className="absolute left-3 right-3 top-full mt-1 rounded-sm px-3 py-2.5 z-50"
              style={{ backgroundColor: BRAND.surface, border: `1px solid ${BRAND.border}` }}
            >
              <span className="text-[11px]" style={{ color: BRAND.textSubtle }}>No features found</span>
            </div>
          )}
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
            const count = LAYER_COUNTS[id]

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
                  {/* Toggle pill */}
                  <div
                    className="shrink-0 relative transition-colors"
                    style={{
                      width: '32px', height: '18px', borderRadius: '9px',
                      backgroundColor: locked ? BRAND.borderHi : (isOn ? color : BRAND.border),
                    }}
                  >
                    <div
                      className="absolute"
                      style={{
                        width: '14px', height: '14px', borderRadius: '50%', top: '2px',
                        left: isOn && !locked ? '16px' : '2px',
                        backgroundColor: locked ? BRAND.textSubtle : BRAND.bg,
                        transition: 'left 0.15s ease',
                      }}
                    />
                  </div>

                  {/* Icon */}
                  <div
                    className="shrink-0 w-6 h-6 rounded-sm flex items-center justify-center"
                    style={{
                      backgroundColor: locked ? `${BRAND.border}80` : `${color}18`,
                      border: `1px solid ${locked ? BRAND.border : color + '40'}`,
                    }}
                  >
                    {locked ? <Lock size={10} color={BRAND.textSubtle} /> : <Icon size={11} color={color} />}
                  </div>

                  {/* Label + count */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <div className="text-[12px] font-medium truncate" style={{ color: locked ? BRAND.textSubtle : BRAND.text }}>
                        {layer.label}
                      </div>
                      <span
                        className="text-[9px] font-mono shrink-0 px-1.5 py-0.5 rounded-sm"
                        style={{
                          backgroundColor: `${BRAND.borderHi}60`,
                          color: BRAND.textSubtle,
                        }}
                      >
                        {count}
                      </span>
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
        <div className="px-4 py-3 space-y-2" style={{ borderTop: `1px solid ${BRAND.border}` }}>
          <div className="text-[9px] tracking-[0.2em] uppercase mb-1" style={{ color: BRAND.textSubtle }}>
            Boundary Legend
          </div>
          {[
            { label: 'Divergent',   color: BRAND.jade },
            { label: 'Convergent',  color: BRAND.coral },
            { label: 'Transform',   color: BRAND.gold, dashed: true },
          ].map(({ label, color, dashed }) => (
            <div key={label} className="flex items-center gap-2">
              <div style={{
                width: '20px', height: '2px',
                background: dashed
                  ? `repeating-linear-gradient(90deg, ${color} 0, ${color} 4px, transparent 4px, transparent 8px)`
                  : color,
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

      {/* ── Map ───────────────────────────────────────────────────────── */}
      <div className="flex-1 relative">
        <AtlasMapLeaflet
          layerVisibility={layerVisibility}
          subscription={subscription}
          completedLessonIds={completedLessonIds}
          onSelect={handleSelect}
          flyTarget={flyTarget}
        />

        {/* Feature info panel (overlaid on map) */}
        {selectedFeature && selectedFeature.type !== 'locked' && (
          <FeaturePanel
            key={selectedFeature.id}
            feature={selectedFeature}
            completedLessonIds={completedLessonIds}
            onClose={() => setSelectedFeature(null)}
          />
        )}
        {selectedFeature?.type === 'locked' && (
          <LockedPanel onClose={() => setSelectedFeature(null)} />
        )}
      </div>
    </div>
  )
}
