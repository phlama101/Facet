'use client'

// Ocean depth zones: epipelagic, mesopelagic, bathypelagic, abyssopelagic, hadalpelagic.
// Proportional depth scale with light penetration gradient and organism examples.
export function OceanDepthZones() {
  const c = {
    surface: '#7AD7F0',   // accent — surface light
    mid:     '#2A6080',   // mid-water
    deep:    '#16304A',   // deep
    abyssal: '#0E1E2E',   // abyss
    hadal:   '#080F18',   // hadal
    light:   '#E4B74A',   // gold — sunlight
    text:    '#EDEEF2',
    textDim: '#9CA0AE',
    textSubtle: '#6B6F7C',
    bg:      '#0E0F14',
    border:  '#2A2D38',
  }

  const W = 560, H = 360
  const leftPad = 70, rightPad = 200
  const colW = W - leftPad - rightPad
  const topPad = 40

  // Depth zones (m): [from, to, label, fill, textColor]
  const zones = [
    { from: 0,    to: 200,   label: 'Epipelagic',    sub: '(Sunlight zone)',  fill: c.surface, fillOpacity: 0.25, example: 'tuna, jellyfish, phytoplankton' },
    { from: 200,  to: 1000,  label: 'Mesopelagic',   sub: '(Twilight zone)',  fill: c.mid,     fillOpacity: 0.35, example: 'lanternfish, squid' },
    { from: 1000, to: 4000,  label: 'Bathypelagic',  sub: '(Midnight zone)', fill: c.deep,    fillOpacity: 0.45, example: 'anglerfish, viperfish' },
    { from: 4000, to: 6000,  label: 'Abyssopelagic', sub: '(Abyssal zone)',  fill: c.abyssal, fillOpacity: 0.55, example: 'sea cucumbers, amphipods' },
    { from: 6000, to: 11000, label: 'Hadalpelagic',  sub: '(Hadal zone)',    fill: c.hadal,   fillOpacity: 0.70, example: 'Mariana Trench organisms' },
  ]

  const maxDepth = 11000
  // Log-compressed scale: y = topPad + sqrt(depth/maxDepth) * chartH
  const chartH = H - topPad - 30
  const yScale = (depth: number) => topPad + (Math.sqrt(depth / maxDepth)) * chartH

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}
      role="img" aria-label="Ocean depth zones from epipelagic to hadalpelagic with light penetration and example organisms">
      <rect width={W} height={H} fill={c.bg} rx="4" />

      {/* Ocean gradient background */}
      <defs>
        <linearGradient id="oceanGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%"   stopColor={c.surface} stopOpacity="0.4" />
          <stop offset="15%"  stopColor={c.mid}     stopOpacity="0.4" />
          <stop offset="40%"  stopColor={c.deep}    stopOpacity="0.5" />
          <stop offset="70%"  stopColor={c.abyssal} stopOpacity="0.6" />
          <stop offset="100%" stopColor={c.hadal}   stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <rect x={leftPad} y={topPad} width={colW} height={chartH} fill="url(#oceanGrad)" />

      {/* Zone bands */}
      {zones.map((zone, i) => {
        const y0 = yScale(zone.from)
        const y1 = yScale(zone.to)
        return (
          <g key={i}>
            {/* Zone boundary */}
            <line x1={leftPad} y1={y0} x2={leftPad + colW} y2={y0}
              stroke={c.border} strokeWidth="0.8" opacity="0.6" />
            {/* Zone label */}
            <text x={leftPad + colW + 8} y={(y0 + y1) / 2 - 5}
              fill={c.text} fontSize="9" fontWeight="700" fontFamily="monospace">{zone.label}</text>
            <text x={leftPad + colW + 8} y={(y0 + y1) / 2 + 7}
              fill={c.textDim} fontSize="8" fontFamily="sans-serif">{zone.sub}</text>
            <text x={leftPad + colW + 8} y={(y0 + y1) / 2 + 18}
              fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">{zone.example}</text>
          </g>
        )
      })}

      {/* Bottom line */}
      <line x1={leftPad} y1={yScale(maxDepth)} x2={leftPad + colW} y2={yScale(maxDepth)}
        stroke={c.border} strokeWidth="0.8" opacity="0.6" />

      {/* Depth axis (left) */}
      {[0, 200, 1000, 4000, 6000, 11000].map(d => {
        const y = yScale(d)
        const label = d >= 1000 ? `${d / 1000} km` : `${d} m`
        return (
          <g key={d}>
            <line x1={leftPad - 5} y1={y} x2={leftPad} y2={y} stroke={c.border} strokeWidth="1" />
            <text x={leftPad - 8} y={y + 3} textAnchor="end"
              fill={c.textSubtle} fontSize="7.5" fontFamily="monospace">{label}</text>
          </g>
        )
      })}
      <text x="14" y={topPad + chartH / 2} textAnchor="middle"
        fill={c.textDim} fontSize="8" fontFamily="monospace"
        transform={`rotate(-90, 14, ${topPad + chartH / 2})`}>Depth</text>

      {/* Light penetration rays */}
      {[20, 30, 40].map((xOff, i) => {
        const lx = leftPad + xOff
        const lightBot = yScale(200) - 10
        return (
          <line key={i} x1={lx} y1={topPad} x2={lx + i * 3} y2={lightBot}
            stroke={c.light} strokeWidth="1.2" opacity={0.5 - i * 0.1} strokeDasharray="5 3" />
        )
      })}
      <text x={leftPad + 30} y={topPad - 4} textAnchor="middle" fill={c.light} fontSize="8" fontFamily="monospace">☀ Sunlight</text>
      <text x={leftPad + 28} y={yScale(200) + 12} fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">1% light level</text>

      {/* Temperature annotation */}
      <text x={leftPad + colW / 2} y={yScale(500)} textAnchor="middle"
        fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">2–4°C</text>
      <text x={leftPad + colW / 2} y={yScale(2500)} textAnchor="middle"
        fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">~2°C</text>
      <text x={leftPad + colW / 2} y={yScale(8000)} textAnchor="middle"
        fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">~1°C</text>

      {/* Title */}
      <text x="280" y="20" textAnchor="middle" fill={c.text} fontSize="11" fontWeight="700" fontFamily="monospace">Ocean Depth Zones</text>
      <text x="280" y="32" textAnchor="middle" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">(depth axis log-compressed for readability)</text>

      {/* Mariana Trench callout */}
      <text x={leftPad + colW / 2} y={yScale(10920)}
        textAnchor="middle" fill={c.textSubtle} fontSize="7" fontFamily="sans-serif">Mariana Trench 10,920 m</text>
    </svg>
  )
}
