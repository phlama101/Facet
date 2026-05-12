'use client'

// Solar system planet size comparison and key properties.
// Planets drawn to relative scale (radius proportional to actual), with data table.
export function PlanetComparison() {
  const c = {
    mercury: '#9CA0AE',
    venus:   '#E4B74A',
    earth:   '#7AD7F0',
    mars:    '#F28C76',
    jupiter: '#C8906A',
    saturn:  '#E0C88A',
    uranus:  '#7FC29B',
    neptune: '#4A90D9',
    bg:      '#0E0F14',
    surface: '#16181F',
    border:  '#2A2D38',
    text:    '#EDEEF2',
    textDim: '#9CA0AE',
    textSubtle: '#6B6F7C',
  }

  const planets = [
    { name: 'Mercury', rEarth: 0.38,  color: c.mercury, dist: '0.39 AU', moons: 0,   type: 'Rocky',     temp: '167°C',   atmo: 'none' },
    { name: 'Venus',   rEarth: 0.95,  color: c.venus,   dist: '0.72 AU', moons: 0,   type: 'Rocky',     temp: '464°C',   atmo: 'CO₂' },
    { name: 'Earth',   rEarth: 1.00,  color: c.earth,   dist: '1.00 AU', moons: 1,   type: 'Rocky',     temp: '15°C',    atmo: 'N₂,O₂' },
    { name: 'Mars',    rEarth: 0.53,  color: c.mars,    dist: '1.52 AU', moons: 2,   type: 'Rocky',     temp: '-65°C',   atmo: 'CO₂ (thin)' },
    { name: 'Jupiter', rEarth: 11.21, color: c.jupiter, dist: '5.20 AU', moons: 95,  type: 'Gas giant', temp: '-110°C',  atmo: 'H₂,He' },
    { name: 'Saturn',  rEarth: 9.45,  color: c.saturn,  dist: '9.58 AU', moons: 146, type: 'Gas giant', temp: '-140°C',  atmo: 'H₂,He' },
    { name: 'Uranus',  rEarth: 4.01,  color: c.uranus,  dist: '19.2 AU', moons: 28,  type: 'Ice giant', temp: '-195°C',  atmo: 'H₂,He,CH₄' },
    { name: 'Neptune', rEarth: 3.86,  color: c.neptune, dist: '30.1 AU', moons: 16,  type: 'Ice giant', temp: '-200°C',  atmo: 'H₂,He,CH₄' },
  ]

  const W = 560, H = 340
  const vizH = 160
  const tableY = 175

  const earthPx = 12
  const maxPx = 52
  const scaleR = (re: number) => Math.min(re * earthPx, maxPx)

  // Place planets left to right
  const positions: Array<typeof planets[0] & { r: number; cx: number }> = []
  let curX = 12
  planets.forEach(p => {
    const r = scaleR(p.rEarth)
    positions.push({ ...p, r, cx: curX + r })
    curX += r * 2 + 8
  })

  const cols = [
    { label: 'Planet',   x: 14  },
    { label: 'Type',     x: 84  },
    { label: 'Radius',   x: 154 },
    { label: 'Distance', x: 218 },
    { label: 'Moons',    x: 296 },
    { label: 'Avg Temp', x: 340 },
    { label: 'Atmosphere', x: 406 },
  ]

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}
      role="img" aria-label="Solar system planet comparison showing relative sizes and key properties of all 8 planets">
      <rect width={W} height={H} fill={c.bg} rx="4" />

      <text x="280" y="18" textAnchor="middle" fill={c.text} fontSize="11" fontWeight="700" fontFamily="monospace">
        Solar System: Planet Comparison
      </text>
      <text x="280" y="30" textAnchor="middle" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">
        Sizes to scale relative to each other (not to distance from Sun)
      </text>

      {/* Planet circles */}
      {positions.map((p, i) => (
        <g key={i}>
          {p.name === 'Saturn' && (
            <ellipse cx={p.cx} cy={vizH / 2 + 36} rx={p.r * 1.8} ry={p.r * 0.35}
              fill="none" stroke={c.saturn} strokeWidth="3" opacity="0.5" />
          )}
          <circle cx={p.cx} cy={vizH / 2 + 36} r={p.r}
            fill={p.color} opacity="0.85" stroke={c.bg} strokeWidth="0.5" />
          <text x={p.cx} y={vizH / 2 + 36 + p.r + 13} textAnchor="middle"
            fill={p.color} fontSize={p.r > 30 ? 8.5 : 7.5} fontFamily="monospace">{p.name}</text>
          <text x={p.cx} y={vizH / 2 + 36 + p.r + 23} textAnchor="middle"
            fill={c.textSubtle} fontSize="7" fontFamily="sans-serif">{p.rEarth}R⊕</text>
        </g>
      ))}

      {/* Table header */}
      <rect x="0" y={tableY} width={W} height="16" fill={c.surface} />
      {cols.map(col => (
        <text key={col.label} x={col.x} y={tableY + 11}
          fill={c.textDim} fontSize="8" fontWeight="600" fontFamily="monospace">{col.label}</text>
      ))}

      {/* Planet rows */}
      {planets.map((p, i) => {
        const ry = tableY + 18 + i * 18
        const isAlt = i % 2 === 1
        return (
          <g key={i}>
            {isAlt && <rect x="0" y={ry - 3} width={W} height="18" fill={c.surface} opacity="0.5" />}
            <circle cx="6" cy={ry + 6} r="4" fill={p.color} opacity="0.8" />
            <text x={cols[0].x + 10} y={ry + 10} fill={p.color}     fontSize="8.5" fontFamily="monospace">{p.name}</text>
            <text x={cols[1].x}       y={ry + 10} fill={c.textDim}  fontSize="8"   fontFamily="sans-serif">{p.type}</text>
            <text x={cols[2].x}       y={ry + 10} fill={c.textDim}  fontSize="8"   fontFamily="monospace">{p.rEarth}×</text>
            <text x={cols[3].x}       y={ry + 10} fill={c.textDim}  fontSize="8"   fontFamily="monospace">{p.dist}</text>
            <text x={cols[4].x}       y={ry + 10} fill={c.textDim}  fontSize="8"   fontFamily="monospace">{p.moons}</text>
            <text x={cols[5].x}       y={ry + 10} fill={c.textDim}  fontSize="8"   fontFamily="monospace">{p.temp}</text>
            <text x={cols[6].x}       y={ry + 10} fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">{p.atmo}</text>
          </g>
        )
      })}

      <text x="280" y={H - 6} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">
        R⊕ = Earth radii · IAU 2006 planet definition · data: NASA planetary fact sheets
      </text>
    </svg>
  )
}
