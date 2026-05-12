'use client'

// Radioactive decay curves showing exponential decay and half-life concept.
// Four common isotope systems used in geochronology.
export function RadiometricDecay() {
  const c = {
    u238:    '#E4B74A',   // gold — U-238/Pb-206
    k40:     '#F28C76',   // coral — K-40/Ar-40
    c14:     '#7FC29B',   // jade — C-14
    rb87:    '#B57EDC',   // amethyst — Rb-87/Sr-87
    halfLine:'#9CA0AE',   // gray
    bg:      '#0E0F14',
    surface: '#16181F',
    border:  '#2A2D38',
    text:    '#EDEEF2',
    textDim: '#9CA0AE',
    textSubtle: '#6B6F7C',
  }

  const W = 560, H = 340
  const leftPad = 52, rightPad = 16, topPad = 46, botPad = 50
  const chartW = W - leftPad - rightPad
  const chartH = H - topPad - botPad

  // X axis: 0 to 5 half-lives (normalized)
  const maxHL = 5
  const xHL = (h: number) => leftPad + (h / maxHL) * chartW
  const yFrac = (f: number) => topPad + chartH - f * chartH   // f: 0-1 fraction remaining

  const decayCurve = (color: string, maxPlot: number) => {
    const pts: string[] = []
    const steps = 100
    for (let i = 0; i <= steps; i++) {
      const h = (i / steps) * maxPlot
      const f = Math.pow(0.5, h)
      pts.push(`${xHL(h).toFixed(1)},${yFrac(f).toFixed(1)}`)
    }
    return (
      <polyline points={pts.join(' ')} fill="none" stroke={color} strokeWidth="2" opacity="0.9" />
    )
  }

  // Half-life reference lines
  const halfLines = [1, 2, 3, 4, 5]

  const isotopes = [
    { label: 'U-238 → Pb-206', halfLife: '4.47 Gyr', color: c.u238, range: 'Rocks > 1 Ma' },
    { label: 'K-40 → Ar-40',   halfLife: '1.25 Gyr', color: c.k40,  range: 'Rocks > 100 ka' },
    { label: 'Rb-87 → Sr-87',  halfLife: '48.8 Gyr', color: c.rb87, range: 'Ancient rocks' },
    { label: 'C-14 → N-14',    halfLife: '5,730 yr',  color: c.c14,  range: 'Organic < 50 ka' },
  ]

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}
      role="img" aria-label="Radioactive decay curves showing exponential half-life decay for U-238, K-40, Rb-87, and C-14 isotope systems">
      <rect width={W} height={H} fill={c.bg} rx="4" />

      <text x="280" y="18" textAnchor="middle" fill={c.text} fontSize="11" fontWeight="700" fontFamily="monospace">
        Radioactive Decay &amp; Half-Lives
      </text>
      <text x="280" y="30" textAnchor="middle" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">
        N(t) = N₀ · (½)^(t/t½)  ·  all systems follow the same exponential form
      </text>

      {/* Chart background */}
      <rect x={leftPad} y={topPad} width={chartW} height={chartH}
        fill={c.surface} stroke={c.border} strokeWidth="1" />

      {/* Y grid (fraction) */}
      {[0, 0.25, 0.5, 0.75, 1.0].map(f => (
        <g key={f}>
          <line x1={leftPad} y1={yFrac(f)} x2={leftPad + chartW} y2={yFrac(f)}
            stroke={c.border} strokeWidth="0.6" opacity="0.5" />
          <text x={leftPad - 5} y={yFrac(f) + 3} textAnchor="end"
            fill={c.textSubtle} fontSize="8" fontFamily="monospace">{(f * 100).toFixed(0)}%</text>
        </g>
      ))}

      {/* Half-life vertical dashed markers */}
      {halfLines.map(h => (
        <g key={h}>
          <line x1={xHL(h)} y1={topPad} x2={xHL(h)} y2={topPad + chartH}
            stroke={c.halfLine} strokeWidth="0.6" strokeDasharray="4 3" opacity="0.35" />
          <text x={xHL(h)} y={topPad + chartH + 14} textAnchor="middle"
            fill={c.textSubtle} fontSize="8" fontFamily="monospace">{h} t½</text>
          {/* Fraction label */}
          <text x={xHL(h)} y={yFrac(Math.pow(0.5, h)) - 5} textAnchor="middle"
            fill={c.halfLine} fontSize="7" fontFamily="monospace">{(Math.pow(0.5, h) * 100).toFixed(1)}%</text>
        </g>
      ))}

      {/* 50% reference line */}
      <line x1={leftPad} y1={yFrac(0.5)} x2={leftPad + chartW} y2={yFrac(0.5)}
        stroke={c.halfLine} strokeWidth="0.8" strokeDasharray="6 3" opacity="0.4" />

      {/* Decay curves — all normalized to half-lives, so all follow same shape */}
      {decayCurve(c.u238, maxHL)}
      {/* Offset curves slightly to show they're the same shape */}
      {[c.k40, c.rb87, c.c14].map((col, i) => (
        <polyline key={i} points={
          Array.from({ length: 101 }, (_, j) => {
            const h = (j / 100) * maxHL
            const f = Math.pow(0.5, h)
            const xOff = i * 0
            return `${(xHL(h) + xOff).toFixed(1)},${yFrac(f).toFixed(1)}`
          }).join(' ')
        } fill="none" stroke={col} strokeWidth="1.5" opacity="0.6" strokeDasharray={`${4 + i * 2} ${2 + i}`} />
      ))}

      {/* Axis labels */}
      <text x={leftPad + chartW / 2} y={topPad + chartH + 30} textAnchor="middle"
        fill={c.textDim} fontSize="9" fontFamily="monospace">Number of half-lives elapsed</text>
      <text x="16" y={topPad + chartH / 2} textAnchor="middle"
        fill={c.textDim} fontSize="9" fontFamily="monospace"
        transform={`rotate(-90, 16, ${topPad + chartH / 2})`}>Parent remaining</text>

      {/* Legend */}
      <rect x={leftPad + chartW - 200} y={topPad + 10} width="196" height="76" rx="3"
        fill={c.bg} stroke={c.border} strokeWidth="0.8" opacity="0.9" />
      {isotopes.map((iso, i) => (
        <g key={i}>
          <line x1={leftPad + chartW - 194} y1={topPad + 24 + i * 17}
            x2={leftPad + chartW - 176} y2={topPad + 24 + i * 17}
            stroke={iso.color} strokeWidth="2.5" />
          <text x={leftPad + chartW - 172} y={topPad + 28 + i * 17}
            fill={iso.color} fontSize="8" fontFamily="monospace">{iso.label}</text>
          <text x={leftPad + chartW - 172} y={topPad + 37 + i * 17}
            fill={c.textSubtle} fontSize="7" fontFamily="sans-serif">t½ = {iso.halfLife} · {iso.range}</text>
        </g>
      ))}
    </svg>
  )
}
