'use client'

// Coriolis effect: deflection of moving air/water to the right in NH, left in SH.
// Shows globe with deflection arrows and hurricane/cyclone spin directions.
export function CoriolisDeflection() {
  const c = {
    nh:      '#7AD7F0',   // accent — Northern Hemisphere
    sh:      '#F28C76',   // coral — Southern Hemisphere
    wind:    '#E4B74A',   // gold — wind / air parcel
    earth:   '#7FC29B',   // jade — Earth
    bg:      '#0E0F14',
    surface: '#16181F',
    border:  '#2A2D38',
    text:    '#EDEEF2',
    textDim: '#9CA0AE',
    textSubtle: '#6B6F7C',
  }

  const W = 560, H = 340

  // Globe (left panel) center
  const gcx = 150, gcy = 170, gr = 100

  // Arrow helper
  const Arr = ({ x1, y1, x2, y2, color, width = 2 }: {
    x1: number; y1: number; x2: number; y2: number; color: string; width?: number
  }) => {
    const dx = x2 - x1, dy = y2 - y1
    const len = Math.sqrt(dx * dx + dy * dy)
    if (len === 0) return null
    const ux = dx / len, uy = dy / len
    const aw = 5
    const p1x = x2 - ux * 9 + uy * aw, p1y = y2 - uy * 9 - ux * aw
    const p2x = x2 - ux * 9 - uy * aw, p2y = y2 - uy * 9 + ux * aw
    return (
      <g>
        <line x1={x1} y1={y1} x2={x2 - ux * 9} y2={y2 - uy * 9}
          stroke={color} strokeWidth={width} opacity="0.85" />
        <polygon points={`${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}`} fill={color} opacity="0.85" />
      </g>
    )
  }

  // Deflected path (curved arrow) — parametric
  const CurvedPath = ({ pts, color, width = 2 }: { pts: [number, number][]; color: string; width?: number }) => {
    if (pts.length < 2) return null
    const d = pts.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x},${y}`).join(' ')
    return <path d={d} fill="none" stroke={color} strokeWidth={width} opacity="0.85" />
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}
      role="img" aria-label="Coriolis effect diagram showing rightward deflection in Northern Hemisphere and leftward in Southern Hemisphere with hurricane spin directions">
      <rect width={W} height={H} fill={c.bg} rx="4" />

      <text x="280" y="20" textAnchor="middle" fill={c.text} fontSize="11" fontWeight="700" fontFamily="monospace">
        Coriolis Effect
      </text>
      <text x="280" y="32" textAnchor="middle" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">
        Earth&apos;s rotation deflects moving air/water: right in NH, left in SH
      </text>

      {/* ── Globe ── */}
      <circle cx={gcx} cy={gcy} r={gr} fill={c.earth} opacity="0.12" stroke={c.border} strokeWidth="1.2" />
      {/* Equator */}
      <line x1={gcx - gr} y1={gcy} x2={gcx + gr} y2={gcy}
        stroke={c.border} strokeWidth="0.8" strokeDasharray="4 3" opacity="0.6" />
      <text x={gcx + gr + 4} y={gcy + 4} fill={c.textSubtle} fontSize="7.5" fontFamily="monospace">Equator</text>
      {/* Latitude lines */}
      {[0.5, -0.5].map((sign, i) => (
        <ellipse key={i} cx={gcx} cy={gcy + sign * gr * 0.5}
          rx={gr * Math.sqrt(1 - 0.25)} ry={gr * 0.15}
          fill="none" stroke={c.border} strokeWidth="0.5" strokeDasharray="3 2" opacity="0.4" />
      ))}
      {/* Rotation arrow */}
      <path d={`M ${gcx - 20} ${gcy - gr - 14} A 20 8 0 0 1 ${gcx + 20} ${gcy - gr - 14}`}
        fill="none" stroke={c.earth} strokeWidth="1.5" opacity="0.6" />
      <polygon points={`${gcx + 20},${gcy - gr - 14} ${gcx + 14},${gcy - gr - 18} ${gcx + 14},${gcy - gr - 10}`}
        fill={c.earth} opacity="0.6" />
      <text x={gcx} y={gcy - gr - 20} textAnchor="middle" fill={c.earth} fontSize="7.5" fontFamily="sans-serif">rotation</text>

      {/* NH label */}
      <text x={gcx} y={gcy - 60} textAnchor="middle" fill={c.nh} fontSize="9" fontWeight="700" fontFamily="monospace">NH</text>
      {/* SH label */}
      <text x={gcx} y={gcy + 70} textAnchor="middle" fill={c.sh} fontSize="9" fontWeight="700" fontFamily="monospace">SH</text>

      {/* ── NH deflection arrows (rightward) ── */}
      {/* Straight intended path */}
      <Arr x1={gcx - 40} y1={gcy - 40} x2={gcx + 40} y2={gcy - 40} color={c.textSubtle} width={1.5} />
      {/* Deflected path (rightward = upward on globe = poleward+right) */}
      <CurvedPath pts={[
        [gcx - 40, gcy - 40],
        [gcx - 10, gcy - 52],
        [gcx + 30, gcy - 65],
      ]} color={c.nh} width={2.5} />
      <circle cx={gcx + 30} cy={gcy - 65} r="3" fill={c.nh} />
      <text x={gcx + 34} y={gcy - 64} fill={c.nh} fontSize="7.5" fontFamily="monospace">deflected right</text>
      <text x={gcx - 40} y={gcy - 32} fill={c.textSubtle} fontSize="7" fontFamily="sans-serif">intended path</text>

      {/* ── SH deflection arrows (leftward) ── */}
      <Arr x1={gcx - 40} y1={gcy + 40} x2={gcx + 40} y2={gcy + 40} color={c.textSubtle} width={1.5} />
      <CurvedPath pts={[
        [gcx - 40, gcy + 40],
        [gcx - 10, gcy + 52],
        [gcx + 30, gcy + 65],
      ]} color={c.sh} width={2.5} />
      <circle cx={gcx + 30} cy={gcy + 65} r="3" fill={c.sh} />
      <text x={gcx + 34} y={gcy + 64} fill={c.sh} fontSize="7.5" fontFamily="monospace">deflected left</text>

      {/* ── Cyclone spin panels (right side) ── */}
      {/* NH: counterclockwise (low pressure) */}
      {(() => {
        const cx2 = 370, cy2 = 120, r2 = 55
        return (
          <g>
            <circle cx={cx2} cy={cy2} r={r2} fill={c.nh} opacity="0.08" stroke={c.nh} strokeWidth="1" />
            <text x={cx2} y={cy2 - 62} textAnchor="middle" fill={c.nh} fontSize="9" fontWeight="700" fontFamily="monospace">NH Cyclone</text>
            <text x={cx2} y={cy2 - 50} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">Low pressure</text>
            {/* CCW spiral arrows */}
            {[0, 90, 180, 270].map((deg, i) => {
              const rad = (deg - 30) * Math.PI / 180
              const ax = cx2 + r2 * 0.7 * Math.cos(rad)
              const ay = cy2 + r2 * 0.7 * Math.sin(rad)
              const drad = rad - 0.5
              return (
                <Arr key={i}
                  x1={cx2 + r2 * 0.7 * Math.cos(rad + 0.4)}
                  y1={cy2 + r2 * 0.7 * Math.sin(rad + 0.4)}
                  x2={ax} y2={ay}
                  color={c.nh} width={1.5} />
              )
            })}
            <text x={cx2} y={cy2 + 4} textAnchor="middle" fill={c.nh} fontSize="9" fontWeight="600" fontFamily="monospace">↺ CCW</text>
            <text x={cx2} y={cy2 + 16} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">e.g. hurricanes</text>
          </g>
        )
      })()}

      {/* SH: clockwise (low pressure) */}
      {(() => {
        const cx2 = 490, cy2 = 240, r2 = 55
        return (
          <g>
            <circle cx={cx2} cy={cy2} r={r2} fill={c.sh} opacity="0.08" stroke={c.sh} strokeWidth="1" />
            <text x={cx2} y={cy2 - 62} textAnchor="middle" fill={c.sh} fontSize="9" fontWeight="700" fontFamily="monospace">SH Cyclone</text>
            <text x={cx2} y={cy2 - 50} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">Low pressure</text>
            {[0, 90, 180, 270].map((deg, i) => {
              const rad = (deg + 30) * Math.PI / 180
              return (
                <Arr key={i}
                  x1={cx2 + r2 * 0.7 * Math.cos(rad - 0.4)}
                  y1={cy2 + r2 * 0.7 * Math.sin(rad - 0.4)}
                  x2={cx2 + r2 * 0.7 * Math.cos(rad)}
                  y2={cy2 + r2 * 0.7 * Math.sin(rad)}
                  color={c.sh} width={1.5} />
              )
            })}
            <text x={cx2} y={cy2 + 4} textAnchor="middle" fill={c.sh} fontSize="9" fontWeight="600" fontFamily="monospace">↻ CW</text>
            <text x={cx2} y={cy2 + 16} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">e.g. cyclones</text>
          </g>
        )
      })()}

      {/* Divider */}
      <line x1="310" y1="44" x2="310" y2={H - 20} stroke={c.border} strokeWidth="0.8" strokeDasharray="4 3" opacity="0.4" />

      <text x="280" y={H - 6} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">
        Coriolis parameter f = 2Ω sin(φ) · zero at equator · maximum at poles · Coriolis (1835)
      </text>
    </svg>
  )
}
