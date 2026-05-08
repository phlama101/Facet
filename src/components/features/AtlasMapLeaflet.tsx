'use client'

import { useState, useCallback } from 'react'
import { MapContainer, TileLayer, Polyline, CircleMarker, Popup, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { Lock, Zap, BookOpen, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { BRAND } from '@/lib/brand'
import {
  PLATE_BOUNDARIES,
  VOLCANOES,
  OCEAN_CURRENTS,
  HOTSPOTS,
  type AtlasLayerId,
} from '@/lib/atlas-data'

const BOUNDARY_COLORS: Record<string, string> = {
  divergent:  BRAND.jade,
  convergent: BRAND.coral,
  transform:  BRAND.gold,
}

const VOLCANO_COLORS = { active: BRAND.ruby, inactive: BRAND.textSubtle }
const CURRENT_COLORS = { warm: '#FF9B6A', cold: BRAND.accent }

interface PopupInfo {
  type: 'boundary' | 'volcano' | 'current' | 'hotspot' | 'locked'
  id: string
  lat: number
  lng: number
}

interface Props {
  layerVisibility: Record<AtlasLayerId, boolean>
  subscription: string
  completedLessonIds: string[]
}

export default function AtlasMapLeaflet({ layerVisibility, subscription, completedLessonIds }: Props) {
  const [popupInfo, setPopupInfo] = useState<PopupInfo | null>(null)

  const isScholar = subscription === 'pro' || subscription === 'expert'
  const hasLesson = useCallback(
    (lessonId: string | null) => !lessonId || completedLessonIds.includes(lessonId),
    [completedLessonIds],
  )

  function handleLockedClick(lat: number, lng: number) {
    setPopupInfo({ type: 'locked', id: 'locked', lat, lng })
  }

  // Find feature data for current popup
  const boundary = popupInfo?.type === 'boundary' ? PLATE_BOUNDARIES.find(b => b.id === popupInfo.id) : null
  const volcano  = popupInfo?.type === 'volcano'  ? VOLCANOES.find(v => v.id === popupInfo.id) : null
  const current  = popupInfo?.type === 'current'  ? OCEAN_CURRENTS.find(c => c.id === popupInfo.id) : null
  const hotspot  = popupInfo?.type === 'hotspot'  ? HOTSPOTS.find(h => h.id === popupInfo.id) : null

  return (
    <MapContainer
      center={[15, 10]}
      zoom={2}
      minZoom={2}
      maxZoom={8}
      maxBounds={[[-85, -180], [85, 180]]}
      maxBoundsViscosity={1.0}
      style={{ height: '100%', width: '100%' }}
      zoomControl
    >
      {/* Dark map tiles — English labels, no world wrapping */}
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        subdomains="abcd"
        maxZoom={20}
        noWrap
      />

      {/* ── Plate Boundaries (free) ─────────────────────────────────────── */}
      {layerVisibility['plate-boundaries'] && PLATE_BOUNDARIES.map(boundary => (
        <Polyline
          key={boundary.id}
          positions={boundary.coordinates}
          pathOptions={{
            color: BOUNDARY_COLORS[boundary.type],
            weight: boundary.type === 'transform' ? 2 : 2.5,
            opacity: 0.85,
            dashArray: boundary.type === 'transform' ? '8 4' : undefined,
          }}
          eventHandlers={{
            click: (e) => {
              setPopupInfo({ type: 'boundary', id: boundary.id, lat: e.latlng.lat, lng: e.latlng.lng })
            },
          }}
        >
          <Tooltip
            sticky
            className="facet-tooltip"
            pane="tooltipPane"
          >
            <span style={{ fontSize: '11px', color: BOUNDARY_COLORS[boundary.type] }}>
              {boundary.name}
            </span>
          </Tooltip>
        </Polyline>
      ))}

      {/* ── Volcanoes ───────────────────────────────────────────────────── */}
      {layerVisibility['volcanoes'] && VOLCANOES.map(v => {
        const locked = !isScholar
        const color = locked ? '#3A3E4D' : (v.isActive ? VOLCANO_COLORS.active : VOLCANO_COLORS.inactive)
        return (
          <CircleMarker
            key={v.id}
            center={[v.lat, v.lng]}
            radius={v.isActive ? 5 : 3.5}
            pathOptions={{
              color,
              fillColor: color,
              fillOpacity: locked ? 0.3 : (v.isActive ? 0.9 : 0.5),
              weight: locked ? 0.5 : 1.5,
            }}
            eventHandlers={{
              click: (e) => {
                if (locked) {
                  handleLockedClick(e.latlng.lat, e.latlng.lng)
                } else {
                  setPopupInfo({ type: 'volcano', id: v.id, lat: v.lat, lng: v.lng })
                }
              },
            }}
          >
            {!locked && (
              <Tooltip sticky pane="tooltipPane">
                <span style={{ fontSize: '11px', color: v.isActive ? VOLCANO_COLORS.active : BRAND.textDim }}>
                  {v.name}
                </span>
              </Tooltip>
            )}
          </CircleMarker>
        )
      })}

      {/* ── Ocean Currents ──────────────────────────────────────────────── */}
      {layerVisibility['ocean-currents'] && OCEAN_CURRENTS.map(current => {
        const locked = !isScholar
        const color = locked ? '#2A2D38' : CURRENT_COLORS[current.type]
        return (
          <Polyline
            key={current.id}
            positions={current.coordinates}
            pathOptions={{
              color,
              weight: 2,
              opacity: locked ? 0.3 : 0.7,
              dashArray: '12 6',
            }}
            eventHandlers={{
              click: (e) => {
                if (locked) {
                  handleLockedClick(e.latlng.lat, e.latlng.lng)
                } else {
                  setPopupInfo({ type: 'current', id: current.id, lat: e.latlng.lat, lng: e.latlng.lng })
                }
              },
            }}
          >
            {!locked && (
              <Tooltip sticky pane="tooltipPane">
                <span style={{ fontSize: '11px', color: CURRENT_COLORS[current.type] }}>
                  {current.name}
                </span>
              </Tooltip>
            )}
          </Polyline>
        )
      })}

      {/* ── Hotspots ────────────────────────────────────────────────────── */}
      {layerVisibility['hotspots'] && HOTSPOTS.map(h => {
        const locked = !isScholar
        const color = locked ? '#2A2D38' : BRAND.amethyst
        return (
          <CircleMarker
            key={h.id}
            center={[h.lat, h.lng]}
            radius={7}
            pathOptions={{
              color,
              fillColor: color,
              fillOpacity: locked ? 0.2 : 0.6,
              weight: locked ? 1 : 2,
            }}
            eventHandlers={{
              click: (e) => {
                if (locked) {
                  handleLockedClick(e.latlng.lat, e.latlng.lng)
                } else {
                  setPopupInfo({ type: 'hotspot', id: h.id, lat: h.lat, lng: h.lng })
                }
              },
            }}
          >
            {!locked && (
              <Tooltip sticky pane="tooltipPane">
                <span style={{ fontSize: '11px', color: BRAND.amethyst }}>{h.name}</span>
              </Tooltip>
            )}
          </CircleMarker>
        )
      })}

      {/* ── Popup ───────────────────────────────────────────────────────── */}
      {popupInfo && (
        <Popup
          position={[popupInfo.lat, popupInfo.lng]}
          className="facet-popup"
          eventHandlers={{ remove: () => setPopupInfo(null) }}
          maxWidth={280}
        >
          {/* Locked layer popup */}
          {popupInfo.type === 'locked' && (
            <div style={{ padding: '16px' }}>
              <div className="flex items-center gap-2 mb-2">
                <Lock size={13} color={BRAND.accent} />
                <span style={{ fontSize: '11px', color: BRAND.accent, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600 }}>
                  Scholar Plan
                </span>
              </div>
              <p style={{ fontSize: '12px', color: BRAND.textDim, lineHeight: 1.5, marginBottom: '12px' }}>
                Upgrade to Scholar to explore interactive data layers — volcanoes, ocean currents, and mantle hotspots.
              </p>
              <Link
                href="/billing"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                  padding: '7px 12px', borderRadius: '4px', fontSize: '11px', fontWeight: 600,
                  letterSpacing: '0.1em', textTransform: 'uppercase', textDecoration: 'none',
                  backgroundColor: BRAND.accent, color: BRAND.bg,
                }}
              >
                Upgrade to Scholar
              </Link>
            </div>
          )}

          {/* Plate boundary popup */}
          {boundary && (
            <div>
              <div style={{ padding: '12px 14px 10px', borderBottom: `1px solid ${BRAND.border}` }}>
                <span style={{
                  fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: BOUNDARY_COLORS[boundary.type], fontWeight: 600,
                }}>
                  {boundary.type} boundary
                </span>
                <div style={{ fontSize: '14px', fontWeight: 500, marginTop: '2px', color: BRAND.text }}>
                  {boundary.name}
                </div>
                <div style={{ fontSize: '10px', color: BRAND.textSubtle, marginTop: '2px' }}>
                  {boundary.plates}
                </div>
              </div>
              <div style={{ padding: '10px 14px 12px' }}>
                <p style={{ fontSize: '12px', color: BRAND.textDim, lineHeight: 1.55 }}>
                  {boundary.description}
                </p>
                {!hasLesson('geol-101-1-4-1') && (
                  <Link href="/learn/geol-101-1-4-1" style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '10px', fontSize: '10px', color: BRAND.accent, textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    <BookOpen size={10} /> Study plate tectonics
                  </Link>
                )}
              </div>
            </div>
          )}

          {/* Volcano popup */}
          {volcano && (
            <div>
              <div style={{ padding: '12px 14px 10px', borderBottom: `1px solid ${BRAND.border}` }}>
                <div className="flex items-center gap-2">
                  <span style={{
                    fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600,
                    color: volcano.isActive ? VOLCANO_COLORS.active : BRAND.textSubtle,
                    padding: '1px 6px', borderRadius: '2px',
                    border: `1px solid ${volcano.isActive ? VOLCANO_COLORS.active + '50' : BRAND.border}`,
                    backgroundColor: volcano.isActive ? VOLCANO_COLORS.active + '18' : 'transparent',
                  }}>
                    {volcano.isActive ? 'Active' : 'Dormant'}
                  </span>
                  <span style={{ fontSize: '9px', color: BRAND.textSubtle }}>
                    {volcano.type.replace('-', ' ')}
                  </span>
                </div>
                <div style={{ fontSize: '14px', fontWeight: 500, marginTop: '4px', color: BRAND.text }}>
                  {volcano.name}
                </div>
                <div style={{ fontSize: '10px', color: BRAND.textSubtle, marginTop: '1px' }}>
                  {volcano.country} · {volcano.elevationM.toLocaleString()} m elevation
                </div>
                <div style={{ fontSize: '10px', color: BRAND.textSubtle }}>
                  Last eruption: {volcano.lastEruption}
                </div>
              </div>
              <div style={{ padding: '10px 14px 12px' }}>
                <p style={{ fontSize: '12px', color: BRAND.textDim, lineHeight: 1.55 }}>
                  {volcano.description}
                </p>
                {!hasLesson('geol-101-1-5-1') && (
                  <Link href="/learn/geol-101-1-5-1" style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '10px', fontSize: '10px', color: BRAND.accent, textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    <BookOpen size={10} /> Study volcanic landforms
                  </Link>
                )}
              </div>
            </div>
          )}

          {/* Ocean current popup */}
          {current && (
            <div>
              <div style={{ padding: '12px 14px 10px', borderBottom: `1px solid ${BRAND.border}` }}>
                <span style={{
                  fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600,
                  color: CURRENT_COLORS[current.type],
                }}>
                  {current.type} current
                </span>
                <div style={{ fontSize: '14px', fontWeight: 500, marginTop: '2px', color: BRAND.text }}>
                  {current.name}
                </div>
              </div>
              <div style={{ padding: '10px 14px 12px' }}>
                <p style={{ fontSize: '12px', color: BRAND.textDim, lineHeight: 1.55 }}>
                  {current.description}
                </p>
                <div style={{ marginTop: '10px', display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', color: BRAND.textSubtle }}>
                  <Zap size={9} color={BRAND.gold} />
                  OCEA 101 — Oceanography course coming soon
                </div>
              </div>
            </div>
          )}

          {/* Hotspot popup */}
          {hotspot && (
            <div>
              <div style={{ padding: '12px 14px 10px', borderBottom: `1px solid ${BRAND.border}` }}>
                <span style={{
                  fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 600,
                  color: BRAND.amethyst,
                }}>
                  Mantle Hotspot
                </span>
                <div style={{ fontSize: '14px', fontWeight: 500, marginTop: '2px', color: BRAND.text }}>
                  {hotspot.name}
                </div>
                <div style={{ fontSize: '10px', color: BRAND.textSubtle, marginTop: '1px' }}>
                  {hotspot.features}
                </div>
              </div>
              <div style={{ padding: '10px 14px 12px' }}>
                <p style={{ fontSize: '12px', color: BRAND.textDim, lineHeight: 1.55 }}>
                  {hotspot.description}
                </p>
                {!hasLesson('geol-101-1-4-4') && (
                  <Link href="/learn/geol-101-1-4-4" style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '10px', fontSize: '10px', color: BRAND.accent, textDecoration: 'none', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    <BookOpen size={10} /> Study hotspots &amp; plumes
                  </Link>
                )}
              </div>
            </div>
          )}
        </Popup>
      )}
    </MapContainer>
  )
}
