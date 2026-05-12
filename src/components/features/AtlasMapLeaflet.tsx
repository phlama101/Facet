'use client'

import { useEffect, useRef, Fragment } from 'react'
import {
  MapContainer, TileLayer, Polyline, Polygon, CircleMarker, Tooltip,
  Marker, useMap,
} from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { BRAND } from '@/lib/brand'
import {
  PLATE_BOUNDARIES,
  VOLCANOES,
  OCEAN_CURRENTS,
  HOTSPOTS,
  TECTONIC_PLATES,
  MAJOR_EARTHQUAKES,
  HYDROTHERMAL_VENTS,
  CORAL_REEFS,
  type AtlasLayerId,
} from '@/lib/atlas-data'

export interface SelectedFeature {
  type: 'boundary' | 'volcano' | 'current' | 'hotspot' | 'plate' | 'earthquake' | 'vent' | 'reef' | 'locked'
  id: string
  lat: number
  lng: number
}

type FlyTarget = { lat: number; lng: number; zoom?: number }

const BOUNDARY_COLORS: Record<string, string> = {
  divergent:  BRAND.jade,
  convergent: BRAND.coral,
  transform:  BRAND.gold,
}

const VOLCANO_COLORS = { active: BRAND.ruby, inactive: BRAND.textSubtle }
const CURRENT_COLORS: Record<string, string> = { warm: '#FF9B6A', cold: BRAND.accent }
const VENT_COLOR = '#FF7A3A'

const REEF_COLORS: Record<string, string> = {
  critical: BRAND.ruby,
  high:     BRAND.coral,
  moderate: BRAND.gold,
  low:      BRAND.jade,
}

function earthquakeColor(mag: number): string {
  if (mag >= 9.0) return BRAND.ruby
  if (mag >= 8.5) return BRAND.coral
  if (mag >= 8.0) return '#F5A65B'
  return BRAND.gold
}

function earthquakeRadius(mag: number): number {
  if (mag >= 9.0) return 10
  if (mag >= 8.5) return 8
  if (mag >= 8.0) return 6
  return 4
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function pathMidpoint(coords: [number, number][]): [number, number] {
  return coords[Math.floor(coords.length / 2)]
}

function pathDirectionDeg(coords: [number, number][]): number {
  if (coords.length < 2) return 0
  const mid = Math.floor(coords.length / 2)
  const p1 = coords[Math.max(0, mid - 1)]
  const p2 = coords[mid]
  return Math.atan2(p2[1] - p1[1], p2[0] - p1[0]) * (180 / Math.PI)
}

function makeArrowIcon(color: string, angleDeg: number): L.DivIcon {
  return L.divIcon({
    className: '',
    html: `<div style="
      width:0; height:0;
      border-left:5px solid transparent;
      border-right:5px solid transparent;
      border-bottom:11px solid ${color};
      transform:rotate(${angleDeg}deg);
      opacity:0.85;
      transform-origin:center center;
    "></div>`,
    iconSize: [10, 11],
    iconAnchor: [5, 5],
  })
}

// ── Map sub-components ───────────────────────────────────────────────────────

function MapController({ flyTarget }: { flyTarget: FlyTarget | null }) {
  const map = useMap()
  const prevRef = useRef<FlyTarget | null>(null)
  useEffect(() => {
    if (flyTarget && flyTarget !== prevRef.current) {
      map.flyTo([flyTarget.lat, flyTarget.lng], flyTarget.zoom ?? 5, { duration: 1.2 })
      prevRef.current = flyTarget
    }
  }, [flyTarget, map])
  return null
}

// ── Main component ───────────────────────────────────────────────────────────

interface Props {
  layerVisibility: Record<AtlasLayerId, boolean>
  subscription: string
  completedLessonIds: string[]
  onSelect: (feature: SelectedFeature | null) => void
  flyTarget: FlyTarget | null
}

export default function AtlasMapLeaflet({
  layerVisibility, subscription, onSelect, flyTarget,
}: Props) {
  const isScholar = subscription === 'pro' || subscription === 'expert'

  function stopAndSelect(e: L.LeafletMouseEvent, feature: SelectedFeature) {
    L.DomEvent.stopPropagation(e)
    onSelect(feature)
  }

  function stopAndLocked(e: L.LeafletMouseEvent) {
    L.DomEvent.stopPropagation(e)
    onSelect({ type: 'locked', id: 'locked', lat: e.latlng.lat, lng: e.latlng.lng })
  }

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
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        subdomains="abcd"
        maxZoom={20}
        noWrap
      />

      <MapController flyTarget={flyTarget} />

      {/* ── Tectonic Plate Fills (bottom layer) ──────────────────────── */}
      {layerVisibility['tectonic-fills'] && TECTONIC_PLATES.map(plate =>
        plate.coordinates.map((ring, i) => (
          <Polygon
            key={`${plate.id}-${i}`}
            positions={ring}
            pathOptions={{
              color: plate.color,
              fillColor: plate.color,
              fillOpacity: 0.07,
              weight: 0.5,
              opacity: 0.25,
            }}
            eventHandlers={{
              click: (e) => stopAndSelect(e, { type: 'plate', id: plate.id, lat: e.latlng.lat, lng: e.latlng.lng }),
            }}
          >
            <Tooltip sticky className="facet-tooltip" pane="tooltipPane">
              <span style={{ fontSize: '11px', color: plate.color }}>{plate.name}</span>
            </Tooltip>
          </Polygon>
        ))
      )}

      {/* ── Coral Reefs ───────────────────────────────────────────────── */}
      {layerVisibility['coral-reefs'] && CORAL_REEFS.map(r => {
        const locked = !isScholar
        const color = locked ? '#2A2D38' : REEF_COLORS[r.bleachingRisk]
        return (
          <Polyline
            key={r.id}
            positions={r.coordinates}
            pathOptions={{
              color,
              weight: 3,
              opacity: locked ? 0.3 : 0.8,
              dashArray: '1 0',
            }}
            eventHandlers={{
              click: (e) => locked
                ? stopAndLocked(e)
                : stopAndSelect(e, { type: 'reef', id: r.id, lat: e.latlng.lat, lng: e.latlng.lng }),
            }}
          >
            {!locked && (
              <Tooltip sticky pane="tooltipPane" className="facet-tooltip">
                <span style={{ fontSize: '11px', color }}>{r.name}</span>
              </Tooltip>
            )}
          </Polyline>
        )
      })}

      {/* ── Plate Boundaries ──────────────────────────────────────────── */}
      {layerVisibility['plate-boundaries'] && PLATE_BOUNDARIES.map(b => (
        <Polyline
          key={b.id}
          positions={b.coordinates}
          pathOptions={{
            color: BOUNDARY_COLORS[b.type],
            weight: b.type === 'transform' ? 2 : 2.5,
            opacity: 0.85,
            dashArray: b.type === 'transform' ? '8 4' : undefined,
          }}
          eventHandlers={{
            click: (e) => stopAndSelect(e, { type: 'boundary', id: b.id, lat: e.latlng.lat, lng: e.latlng.lng }),
          }}
        >
          <Tooltip sticky className="facet-tooltip" pane="tooltipPane">
            <span style={{ fontSize: '11px', color: BOUNDARY_COLORS[b.type] }}>{b.name}</span>
          </Tooltip>
        </Polyline>
      ))}

      {/* ── Ocean Currents ────────────────────────────────────────────── */}
      {layerVisibility['ocean-currents'] && OCEAN_CURRENTS.map(c => {
        const locked = !isScholar
        const color = locked ? '#2A2D38' : CURRENT_COLORS[c.type]
        const midpoint = pathMidpoint(c.coordinates)
        const arrowAngle = pathDirectionDeg(c.coordinates)
        return (
          <Fragment key={c.id}>
            <Polyline
              positions={c.coordinates}
              pathOptions={{
                color,
                weight: 2.5,
                opacity: locked ? 0.3 : 0.75,
                dashArray: c.type === 'cold' ? '8 6' : '14 5',
              }}
              eventHandlers={{
                click: (e) => locked
                  ? stopAndLocked(e)
                  : stopAndSelect(e, { type: 'current', id: c.id, lat: e.latlng.lat, lng: e.latlng.lng }),
              }}
            >
              {!locked && (
                <Tooltip sticky pane="tooltipPane" className="facet-tooltip">
                  <span style={{ fontSize: '11px', color }}>{c.name}</span>
                </Tooltip>
              )}
            </Polyline>
            {!locked && (
              <Marker
                position={midpoint}
                icon={makeArrowIcon(color, arrowAngle)}
                interactive={false}
              />
            )}
          </Fragment>
        )
      })}

      {/* ── Major Earthquakes ─────────────────────────────────────────── */}
      {layerVisibility['earthquakes'] && MAJOR_EARTHQUAKES.map(eq => {
        const color = earthquakeColor(eq.magnitude)
        const radius = earthquakeRadius(eq.magnitude)
        return (
          <CircleMarker
            key={eq.id}
            center={[eq.lat, eq.lng]}
            radius={radius}
            pathOptions={{
              color,
              fillColor: color,
              fillOpacity: 0.75,
              weight: 1.5,
            }}
            eventHandlers={{
              click: (e) => stopAndSelect(e, { type: 'earthquake', id: eq.id, lat: eq.lat, lng: eq.lng }),
            }}
          >
            <Tooltip sticky pane="tooltipPane" className="facet-tooltip">
              <span style={{ fontSize: '11px', color }}>M{eq.magnitude} · {eq.name} ({eq.year})</span>
            </Tooltip>
          </CircleMarker>
        )
      })}

      {/* ── Hotspots ──────────────────────────────────────────────────── */}
      {layerVisibility['hotspots'] && HOTSPOTS.map(h => {
        const locked = !isScholar
        const color = locked ? '#2A2D38' : BRAND.amethyst
        return (
          <Fragment key={h.id}>
            {!locked && (
              <CircleMarker
                center={[h.lat, h.lng]}
                radius={14}
                pathOptions={{
                  color: BRAND.amethyst,
                  fillColor: BRAND.amethyst,
                  fillOpacity: 0.1,
                  weight: 1.5,
                  className: 'hotspot-ring',
                } as L.PathOptions}
                interactive={false}
              />
            )}
            <CircleMarker
              center={[h.lat, h.lng]}
              radius={6}
              pathOptions={{
                color,
                fillColor: color,
                fillOpacity: locked ? 0.2 : 0.75,
                weight: locked ? 1 : 2,
              }}
              eventHandlers={{
                click: (e) => locked
                  ? stopAndLocked(e)
                  : stopAndSelect(e, { type: 'hotspot', id: h.id, lat: h.lat, lng: h.lng }),
              }}
            >
              {!locked && (
                <Tooltip sticky pane="tooltipPane" className="facet-tooltip">
                  <span style={{ fontSize: '11px', color: BRAND.amethyst }}>{h.name}</span>
                </Tooltip>
              )}
            </CircleMarker>
          </Fragment>
        )
      })}

      {/* ── Volcanoes ─────────────────────────────────────────────────── */}
      {layerVisibility['volcanoes'] && VOLCANOES.map(v => {
        const locked = !isScholar
        const color = locked ? '#3A3E4D' : (v.isActive ? VOLCANO_COLORS.active : VOLCANO_COLORS.inactive)
        return (
          <Fragment key={v.id}>
            {v.isActive && !locked && (
              <CircleMarker
                center={[v.lat, v.lng]}
                radius={13}
                pathOptions={{
                  color: VOLCANO_COLORS.active,
                  fillColor: VOLCANO_COLORS.active,
                  fillOpacity: 0.12,
                  weight: 1,
                  className: 'volcano-ring',
                } as L.PathOptions}
                interactive={false}
              />
            )}
            <CircleMarker
              center={[v.lat, v.lng]}
              radius={v.isActive ? 5 : 3.5}
              pathOptions={{
                color,
                fillColor: color,
                fillOpacity: locked ? 0.3 : (v.isActive ? 0.9 : 0.5),
                weight: locked ? 0.5 : 1.5,
              }}
              eventHandlers={{
                click: (e) => locked
                  ? stopAndLocked(e)
                  : stopAndSelect(e, { type: 'volcano', id: v.id, lat: v.lat, lng: v.lng }),
              }}
            >
              {!locked && (
                <Tooltip sticky pane="tooltipPane" className="facet-tooltip">
                  <span style={{ fontSize: '11px', color: v.isActive ? VOLCANO_COLORS.active : BRAND.textDim }}>
                    {v.name}
                  </span>
                </Tooltip>
              )}
            </CircleMarker>
          </Fragment>
        )
      })}

      {/* ── Hydrothermal Vent Fields ──────────────────────────────────── */}
      {layerVisibility['vent-fields'] && HYDROTHERMAL_VENTS.map(v => {
        const locked = !isScholar
        const color = locked ? '#2A2D38' : VENT_COLOR
        return (
          <Fragment key={v.id}>
            {!locked && (
              <CircleMarker
                center={[v.lat, v.lng]}
                radius={12}
                pathOptions={{
                  color: VENT_COLOR,
                  fillColor: VENT_COLOR,
                  fillOpacity: 0.1,
                  weight: 1,
                  className: 'vent-ring',
                } as L.PathOptions}
                interactive={false}
              />
            )}
            <CircleMarker
              center={[v.lat, v.lng]}
              radius={5}
              pathOptions={{
                color,
                fillColor: color,
                fillOpacity: locked ? 0.2 : 0.85,
                weight: locked ? 0.5 : 1.5,
              }}
              eventHandlers={{
                click: (e) => locked
                  ? stopAndLocked(e)
                  : stopAndSelect(e, { type: 'vent', id: v.id, lat: v.lat, lng: v.lng }),
              }}
            >
              {!locked && (
                <Tooltip sticky pane="tooltipPane" className="facet-tooltip">
                  <span style={{ fontSize: '11px', color: VENT_COLOR }}>{v.name}</span>
                </Tooltip>
              )}
            </CircleMarker>
          </Fragment>
        )
      })}
    </MapContainer>
  )
}
