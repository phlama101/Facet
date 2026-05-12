'use client'

// Seismic shadow zone diagram.
// Shows P-wave and S-wave paths through Earth and the shadow zones
// that proved the outer core is liquid.
export function SeismicShadowZone() {
  const cx = 195, cy = 190  // Earth center
  const R = 155              // Earth radius

  // Layer radii (same proportions as EarthCrossSection)
  const rOC = Math.round((3471 / 6371) * R)  // outer core boundary (~84 px)
  const rIC = Math.round((1271 / 6371) * R)  // inner core radius  (~31 px)

  const c = {
    crust:      '#F28C76',
    mantle:     '#E4B74A',
    outerCore:  '#7AD7F0',
    innerCore:  '#B57EDC',
    pWave:      '#7AD7F0',  // cyan - P waves
    sWave:      '#E4B74A',  // gold - S waves
    shadow:     '#F28C76',  // coral - shadow zone
    bg:         '#0E0F14',
    surface:    '#16181F',
    border:     '#2A2D38',
    text:       '#EDEEF2',
    textDim:    '#9CA0AE',
    textSubtle: '#6B6F7C',
  }

  // Point on the Earth's surface at angle θ (standard math: 0° = right, CCW positive)
  const surfPt = (deg: number) => ({
    x: cx + R * Math.cos((deg * Math.PI) / 180),
    y: cy - R * Math.sin((deg * Math.PI) / 180),
  })

  // Earthquake source at the top of the Earth
  const srcDeg = 90
  const src = surfPt(srcDeg)

  // Shadow zone edges: 104° from source in each direction
  const shadowLeftDeg  = srcDeg + 104   // 194°
  const shadowRightDeg = srcDeg - 104   // −14°
  const antiSrcDeg     = srcDeg - 180   // −90° (bottom)

  const shL = surfPt(shadowLeftDeg)
  const shR = surfPt(shadowRightDeg)
  const bot = surfPt(antiSrcDeg)

  // Helper: SVG arc flag. For two points on a circle, determines large-arc and sweep.
  // We want the short arc going in the specified direction.
  const arcPath = (from: {x:number;y:number}, to: {x:number;y:number}, r: number, sweep: 0|1) =>
    `A ${r} ${r} 0 0 ${sweep} ${to.x.toFixed(1)} ${to.y.toFixed(1)}`

  // S-wave shadow zone: surface arcs from 104° edge to bottom (anti-source)
  // Left shadow zone: from shL to bot, going clockwise (sweep=1 in SVG)
  const leftShadowPath = `
    M ${cx} ${cy}
    L ${shL.x.toFixed(1)} ${shL.y.toFixed(1)}
    ${arcPath(shL, bot, R, 1)}
    Z
  `
  // Right shadow zone: from bot to shR, going clockwise (sweep=1)
  const rightShadowPath = `
    M ${cx} ${cy}
    L ${bot.x.toFixed(1)} ${bot.y.toFixed(1)}
    ${arcPath(bot, shR, R, 1)}
    Z
  `

  // Simplified seismic ray paths as Bezier curves (from source to destination surface point)
  // P-wave paths: go all the way around (fan of angles in the lit zone and some into shadow)
  const pWaveDests = [-14, -40, -65, -90, -116, 180+14, 180+40, 180+65]
    .map(d => ({ deg: srcDeg - (srcDeg - (d > 90 ? d - 360 : d)), dest: surfPt(d) }))

  // S-wave paths: only within ±104° of source (i.e., not reaching shadow zone)
  const sWaveDests = [65, 40, 15, -15, -40, -65].map(d => surfPt(srcDeg - (srcDeg - d)))

  // Simple curved path through Earth (using quadratic bezier toward center)
  const wavePath = (from: {x:number;y:number}, to: {x:number;y:number}, bend: number) => {
    const midX = (from.x + to.x) / 2 + (cy - (from.y + to.y) / 2) * bend
    const midY = (from.y + to.y) / 2 + (cx - (from.x + to.x) / 2) * bend * 0.5
    return `M ${from.x.toFixed(1)} ${from.y.toFixed(1)} Q ${midX.toFixed(1)} ${midY.toFixed(1)} ${to.x.toFixed(1)} ${to.y.toFixed(1)}`
  }

  return (
    <svg
      viewBox="0 0 560 380"
      width="100%"
      style={{ display: 'block' }}
      role="img"
      aria-label="Seismic shadow zone diagram: P-waves reach all sides of Earth, S-waves cannot penetrate the liquid outer core creating shadow zones from 104° to 180°"
    >
      <rect width="560" height="380" fill={c.bg} rx="4" />

      {/* ── Earth base layers ── */}
      <circle cx={cx} cy={cy} r={R}   fill={c.crust} />
      <circle cx={cx} cy={cy} r={R-13} fill={c.mantle} />
      <circle cx={cx} cy={cy} r={rOC} fill={c.outerCore} />
      <circle cx={cx} cy={cy} r={rIC} fill={c.innerCore} />

      {/* Layer separators */}
      {[rIC, rOC, R - 13, R].map(r => (
        <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke={c.bg} strokeWidth="1" opacity="0.6" />
      ))}

      {/* ── S-wave shadow zones (semi-transparent wedges) ── */}
      <path d={leftShadowPath}  fill={c.shadow} opacity="0.22" />
      <path d={rightShadowPath} fill={c.shadow} opacity="0.22" />

      {/* Shadow zone hatching (visual reinforcement) */}
      <path d={leftShadowPath}  fill="url(#hatch)" opacity="0.15" />
      <path d={rightShadowPath} fill="url(#hatch)" opacity="0.15" />

      <defs>
        <pattern id="hatch" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="6" stroke={c.shadow} strokeWidth="1.5" />
        </pattern>
      </defs>

      {/* 104° angle markers on surface */}
      {[shL, shR].map((pt, i) => (
        <circle key={i} cx={pt.x} cy={pt.y} r="3.5" fill={c.shadow} opacity="0.8" />
      ))}

      {/* ── S-wave paths (in the lit zone) ── */}
      {[65, 40, 15, -15, -40, -65].map((deg, i) => {
        const dest = surfPt(deg)
        const spread = Math.abs(srcDeg - deg) / 90
        return (
          <path
            key={i}
            d={wavePath(src, dest, 0.18 + spread * 0.08)}
            fill="none"
            stroke={c.sWave}
            strokeWidth="1.2"
            opacity="0.65"
            strokeDasharray="5 3"
          />
        )
      })}

      {/* ── P-wave paths (fan to all stations) ── */}
      {[-14, -40, -70, -90, -116, -145, 180, 145+180-360].map((deg, i) => {
        const dest = surfPt(deg)
        const spread = Math.abs(90 - deg) / 180
        return (
          <path
            key={i}
            d={wavePath(src, dest, 0.15 + spread * 0.1)}
            fill="none"
            stroke={c.pWave}
            strokeWidth="1.4"
            opacity="0.5"
          />
        )
      })}

      {/* ── Earthquake star icon ── */}
      <circle cx={src.x} cy={src.y} r="7" fill={c.shadow} opacity="0.2" />
      <circle cx={src.x} cy={src.y} r="4" fill={c.shadow} />
      <text x={src.x} y={src.y - 12} textAnchor="middle" fill={c.shadow} fontSize="8.5" fontFamily="monospace">★ Earthquake</text>

      {/* ── Labels panel (right side) ── */}
      <g>
        {/* P-wave legend */}
        <line x1="380" y1="60" x2="408" y2="60" stroke={c.pWave} strokeWidth="1.8" />
        <text x="412" y="64" fill={c.pWave} fontSize="9.5" fontWeight="600" fontFamily="monospace">P-waves</text>
        <text x="412" y="77" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">Detected everywhere</text>
        <text x="412" y="88" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">Pass through liquid</text>

        {/* S-wave legend */}
        <line x1="380" y1="108" x2="408" y2="108" stroke={c.sWave} strokeWidth="1.8" strokeDasharray="5 3" />
        <text x="412" y="112" fill={c.sWave} fontSize="9.5" fontWeight="600" fontFamily="monospace">S-waves</text>
        <text x="412" y="125" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">Only within 104° of source</text>
        <text x="412" y="136" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">Cannot pass through liquid</text>

        {/* Shadow zone legend */}
        <rect x="380" y="152" width="22" height="14" fill={c.shadow} opacity="0.35" rx="2" />
        <text x="412" y="163" fill={c.shadow} fontSize="9.5" fontWeight="600" fontFamily="monospace">Shadow zone</text>
        <text x="412" y="176" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">104°–180° from source</text>
        <text x="412" y="187" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">S-waves absent → outer</text>
        <text x="412" y="198" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">core is liquid</text>
      </g>

      {/* ── Layer labels on circle ── */}
      <text x={cx} y={cy - rIC - 4}    textAnchor="middle" fill={c.innerCore}  fontSize="7.5" fontFamily="monospace">Inner core</text>
      <text x={cx + rIC + 8} y={cy + 4} fill={c.outerCore} fontSize="7.5" fontFamily="monospace">Outer core</text>
      <text x={cx + rOC + 8} y={cy - 4} fill={c.mantle}    fontSize="7.5" fontFamily="monospace">Mantle</text>

      {/* 104° arc labels */}
      <text x={shL.x - 12} y={shL.y + 16} fill={c.shadow} fontSize="8" fontFamily="monospace">104°</text>
      <text x={shR.x + 2}  y={shR.y + 16} fill={c.shadow} fontSize="8" fontFamily="monospace">104°</text>

      {/* Bottom note */}
      <text x="280" y="370" textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">
        Wave paths shown schematically · actual paths curve continuously due to refraction with depth
      </text>
    </svg>
  )
}
