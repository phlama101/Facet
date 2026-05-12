'use client'

// Thermohaline circulation (global ocean conveyor belt).
// Simplified map-style schematic showing warm surface flow and cold deep return flow.
export function ThermohalineCirculation() {
  const c = {
    warm:    '#F28C76',   // coral — warm surface current
    cold:    '#7AD7F0',   // accent — cold deep current
    sink:    '#B57EDC',   // amethyst — deep water formation / sinking
    upwell:  '#7FC29B',   // jade — upwelling
    land:    '#2A3020',   // dark green — continents
    ocean:   '#0E1E2E',   // dark blue — ocean
    bg:      '#0E0F14',
    surface: '#16181F',
    border:  '#2A2D38',
    text:    '#EDEEF2',
    textDim: '#9CA0AE',
    textSubtle: '#6B6F7C',
  }

  const W = 560, H = 340

  // Simplified continent polygons (schematic)
  // North America, South America, Europe/Africa, Asia, Antarctica
  const continents = [
    // North America
    { d: 'M 60 80 L 120 70 L 140 90 L 150 130 L 130 160 L 100 170 L 70 150 L 50 120 Z', fill: c.land },
    // South America
    { d: 'M 100 185 L 130 180 L 140 220 L 130 265 L 110 270 L 90 240 L 90 200 Z', fill: c.land },
    // Europe/Africa
    { d: 'M 250 75 L 280 70 L 295 90 L 300 130 L 290 180 L 280 230 L 265 265 L 248 260 L 238 220 L 240 170 L 235 130 L 240 90 Z', fill: c.land },
    // Asia/Australia
    { d: 'M 330 72 L 420 68 L 450 90 L 460 120 L 440 140 L 410 130 L 380 120 L 350 130 L 330 110 L 320 90 Z', fill: c.land },
    // Australia
    { d: 'M 390 200 L 440 195 L 455 215 L 450 235 L 420 240 L 390 230 L 382 212 Z', fill: c.land },
    // Antarctica
    { d: 'M 80 310 L 480 310 L 490 330 L 70 330 Z', fill: c.land },
  ]

  // Circulation path: warm surface (coral arrows), cold deep (accent dashed)
  // Simplified as bezier curves across the ocean basins

  // Arrow helper
  const Arrow = ({ path, color, dashed = false, width = 2 }: {
    path: string; color: string; dashed?: boolean; width?: number
  }) => (
    <path d={path} fill="none" stroke={color} strokeWidth={width}
      strokeDasharray={dashed ? '6 4' : undefined} opacity="0.85"
      markerEnd={`url(#arrow-${color === c.warm ? 'warm' : 'cold'})`} />
  )

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}
      role="img" aria-label="Thermohaline circulation showing warm surface Gulf Stream and cold deep Atlantic meridional overturning circulation">
      <rect width={W} height={H} fill={c.ocean} rx="4" />
      <rect width={W} height={H} fill={c.bg} rx="4" opacity="0.3" />

      <defs>
        <marker id="arrow-warm" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={c.warm} opacity="0.85" />
        </marker>
        <marker id="arrow-cold" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={c.cold} opacity="0.85" />
        </marker>
        <marker id="arrow-sink" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={c.sink} opacity="0.85" />
        </marker>
      </defs>

      {/* Ocean background */}
      <rect width={W} height={H} fill={c.ocean} opacity="0.6" />

      {/* Continents */}
      {continents.map((cont, i) => (
        <path key={i} d={cont.d} fill={cont.fill} opacity="0.8" stroke={c.border} strokeWidth="0.8" />
      ))}

      {/* ── Warm surface current (Gulf Stream / North Atlantic Drift) ── */}
      {/* Up the western North Atlantic */}
      <path d="M 155 230 Q 160 180 165 150 Q 170 110 180 88" fill="none"
        stroke={c.warm} strokeWidth="3" opacity="0.85" />
      {/* Across North Atlantic */}
      <path d="M 180 88 Q 215 78 248 78" fill="none"
        stroke={c.warm} strokeWidth="3" opacity="0.85"
        markerEnd="url(#arrow-warm)" />
      {/* Down African coast */}
      <path d="M 238 165 Q 230 200 225 240 Q 215 270 200 280" fill="none"
        stroke={c.warm} strokeWidth="2" opacity="0.7" />
      {/* Indian Ocean surface */}
      <path d="M 310 200 Q 340 220 380 210 Q 420 200 440 185" fill="none"
        stroke={c.warm} strokeWidth="2.5" opacity="0.8" markerEnd="url(#arrow-warm)" />
      {/* Pacific surface */}
      <path d="M 440 145 Q 510 130 530 110 Q 540 90 520 78" fill="none"
        stroke={c.warm} strokeWidth="2.5" opacity="0.8" markerEnd="url(#arrow-warm)" />

      {/* ── Deep cold water (NADW) sinking in North Atlantic ── */}
      <circle cx="200" cy="88" r="8" fill="none" stroke={c.sink} strokeWidth="2" opacity="0.8" />
      <text x="200" y="78" textAnchor="middle" fill={c.sink} fontSize="7.5" fontFamily="monospace">NADW</text>
      <text x="200" y="68" textAnchor="middle" fill={c.sink} fontSize="7" fontFamily="sans-serif">sinking</text>

      {/* Deep cold flow south */}
      <path d="M 200 96 Q 210 150 215 200 Q 218 240 215 280" fill="none"
        stroke={c.cold} strokeWidth="2" strokeDasharray="6 3" opacity="0.7"
        markerEnd="url(#arrow-cold)" />
      {/* Deep flow around Antarctica */}
      <path d="M 215 290 Q 260 300 310 298 Q 380 296 440 290" fill="none"
        stroke={c.cold} strokeWidth="2" strokeDasharray="6 3" opacity="0.7"
        markerEnd="url(#arrow-cold)" />
      {/* Deep flow into Indian/Pacific */}
      <path d="M 440 290 Q 470 270 480 240 Q 490 200 480 170" fill="none"
        stroke={c.cold} strokeWidth="2" strokeDasharray="6 3" opacity="0.7"
        markerEnd="url(#arrow-cold)" />

      {/* Upwelling zones */}
      {[
        { x: 480, y: 160, label: 'Upwelling' },
        { x: 80,  y: 220, label: 'Upwelling' },
      ].map((u, i) => (
        <g key={i}>
          <circle cx={u.x} cy={u.y} r="6" fill={c.upwell} opacity="0.3" stroke={c.upwell} strokeWidth="1" />
          <text x={u.x} y={u.y + 18} textAnchor="middle" fill={c.upwell} fontSize="7" fontFamily="monospace">{u.label}</text>
        </g>
      ))}

      {/* Title */}
      <rect x="0" y="0" width={W} height="36" fill={c.bg} opacity="0.8" />
      <text x="280" y="16" textAnchor="middle" fill={c.text} fontSize="11" fontWeight="700" fontFamily="monospace">
        Thermohaline Circulation
      </text>
      <text x="280" y="28" textAnchor="middle" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">
        Warm surface (coral) and cold deep (blue) flow driven by density differences in temperature and salinity
      </text>

      {/* Legend */}
      <rect x="14" y="260" width="148" height="56" rx="3" fill={c.bg} stroke={c.border} strokeWidth="0.8" opacity="0.9" />
      <line x1="20" y1="274" x2="44" y2="274" stroke={c.warm} strokeWidth="3" />
      <text x="50" y="278" fill={c.warm} fontSize="8.5" fontFamily="sans-serif">Warm surface current</text>
      <line x1="20" y1="292" x2="44" y2="292" stroke={c.cold} strokeWidth="2" strokeDasharray="5 3" />
      <text x="50" y="296" fill={c.cold} fontSize="8.5" fontFamily="sans-serif">Cold deep current</text>
      <circle cx="28" cy="308" r="6" fill="none" stroke={c.sink} strokeWidth="1.5" />
      <text x="50" y="312" fill={c.sink} fontSize="8.5" fontFamily="sans-serif">Deep water formation</text>

      <text x="280" y={H - 6} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">
        Overturning timescale ~1,000 years · Broecker (1991) "Ocean conveyor" · AMOC
      </text>
    </svg>
  )
}
