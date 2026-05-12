'use client'

// Milankovitch cycles: eccentricity (100 kyr), obliquity (41 kyr), precession (23 kyr).
// Shows waveform approximations and their combined insolation effect.
export function MilankovitchCycles() {
  const c = {
    eccentric: '#E4B74A',   // gold — eccentricity
    obliq:     '#7AD7F0',   // accent — obliquity
    precess:   '#B57EDC',   // amethyst — precession
    combined:  '#F28C76',   // coral — combined signal
    bg:        '#0E0F14',
    surface:   '#16181F',
    border:    '#2A2D38',
    text:      '#EDEEF2',
    textDim:   '#9CA0AE',
    textSubtle:'#6B6F7C',
  }

  const W = 560, chartH = 52, gap = 28
  const leftPad = 110, rightPad = 20
  const chartW = W - leftPad - rightPad
  const timeSpan = 400 // kyr

  // Row positions
  const rows = [
    { label: 'Eccentricity',  sub: '~100 kyr',  color: c.eccentric, y: 50,  period: 100, amp: 18 },
    { label: 'Obliquity',     sub: '~41 kyr',   color: c.obliq,     y: 150, period: 41,  amp: 18 },
    { label: 'Precession',    sub: '~23 kyr',   color: c.precess,   y: 250, period: 23,  amp: 18 },
    { label: 'Combined',      sub: 'insolation', color: c.combined, y: 335, period: 0,   amp: 18 },
  ]

  const xScale = (kyr: number) => leftPad + (kyr / timeSpan) * chartW

  const sinePoints = (period: number, amp: number, baseY: number, phase = 0) => {
    const pts: string[] = []
    for (let t = 0; t <= timeSpan; t += 2) {
      const x = xScale(t)
      const y = baseY + chartH / 2 + amp * Math.sin((2 * Math.PI * t) / period + phase)
      pts.push(`${x.toFixed(1)},${y.toFixed(1)}`)
    }
    return pts.join(' ')
  }

  const combinedPoints = () => {
    const pts: string[] = []
    for (let t = 0; t <= timeSpan; t += 2) {
      const x = xScale(t)
      const e = Math.sin((2 * Math.PI * t) / 100)
      const o = Math.sin((2 * Math.PI * t) / 41 + 0.8)
      const p = Math.sin((2 * Math.PI * t) / 23 + 0.3)
      const y = rows[3].y + chartH / 2 + 14 * (e * 0.5 + o * 0.35 + p * 0.15)
      pts.push(`${x.toFixed(1)},${y.toFixed(1)}`)
    }
    return pts.join(' ')
  }

  // Time axis ticks (every 50 kyr)
  const ticksKyr = [0, 50, 100, 150, 200, 250, 300, 350, 400]

  return (
    <svg viewBox={`0 0 ${W} 420`} width="100%" style={{ display: 'block' }}
      role="img" aria-label="Milankovitch cycles: eccentricity, obliquity, and precession orbital cycles and their combined effect on insolation">
      <rect width={W} height="420" fill={c.bg} rx="4" />

      {/* Title */}
      <text x="280" y="22" textAnchor="middle" fill={c.text} fontSize="11" fontWeight="700" fontFamily="monospace">
        Milankovitch Orbital Cycles
      </text>
      <text x="280" y="36" textAnchor="middle" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">
        Three overlapping cycles drive long-term insolation changes and glacial–interglacial transitions
      </text>

      {/* Row panels */}
      {rows.map((row, ri) => (
        <g key={ri}>
          <rect x={leftPad} y={row.y} width={chartW} height={chartH}
            fill={c.surface} stroke={c.border} strokeWidth="0.8" rx="2" />

          {/* Baseline */}
          <line x1={leftPad} y1={row.y + chartH / 2} x2={leftPad + chartW} y2={row.y + chartH / 2}
            stroke={c.border} strokeWidth="0.8" opacity="0.5" />

          {/* Waveform */}
          {ri < 3 ? (
            <polyline points={sinePoints(row.period, row.amp, row.y)}
              fill="none" stroke={row.color} strokeWidth="1.8" opacity="0.9" />
          ) : (
            <polyline points={combinedPoints()}
              fill="none" stroke={row.color} strokeWidth="2" opacity="0.9" />
          )}

          {/* Row label */}
          <text x={leftPad - 8} y={row.y + chartH / 2 - 4} textAnchor="end"
            fill={row.color} fontSize="9.5" fontWeight="700" fontFamily="monospace">{row.label}</text>
          <text x={leftPad - 8} y={row.y + chartH / 2 + 10} textAnchor="end"
            fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">{row.sub}</text>
        </g>
      ))}

      {/* Time axis */}
      {ticksKyr.map(t => (
        <g key={t}>
          <line x1={xScale(t)} y1={rows[3].y + chartH} x2={xScale(t)} y2={rows[3].y + chartH + 5}
            stroke={c.border} strokeWidth="1" />
          <text x={xScale(t)} y={rows[3].y + chartH + 16} textAnchor="middle"
            fill={c.textSubtle} fontSize="7.5" fontFamily="monospace">{t === 0 ? 'Now' : `-${t}`}</text>
        </g>
      ))}
      <text x={leftPad + chartW / 2} y={rows[3].y + chartH + 30} textAnchor="middle"
        fill={c.textDim} fontSize="8" fontFamily="sans-serif">kyr BP (thousands of years before present)</text>

      {/* Orbital diagrams on left */}
      {/* Eccentricity: slightly elliptical orbit */}
      {(() => {
        const x0 = 55, y0 = rows[0].y + chartH / 2
        return (
          <g>
            <ellipse cx={x0} cy={y0} rx="22" ry="17" fill="none" stroke={c.eccentric} strokeWidth="1" opacity="0.7" />
            <circle cx={x0 - 6} cy={y0} r="4" fill={c.eccentric} opacity="0.8" />
            <circle cx={x0 + 14} cy={y0 - 8} r="2" fill={c.text} opacity="0.6" />
          </g>
        )
      })()}

      {/* Obliquity: axial tilt diagram */}
      {(() => {
        const x0 = 55, y0 = rows[1].y + chartH / 2
        return (
          <g>
            <circle cx={x0} cy={y0} r="10" fill="none" stroke={c.border} strokeWidth="0.8" />
            <circle cx={x0} cy={y0} r="10" fill={c.obliq} opacity="0.08" />
            {/* Axis tilted at 23° */}
            <line x1={x0 - 8} y1={y0 + 12} x2={x0 + 8} y2={y0 - 12}
              stroke={c.obliq} strokeWidth="1.5" opacity="0.8" />
            {/* Vertical reference */}
            <line x1={x0} y1={y0 - 16} x2={x0} y2={y0 + 16}
              stroke={c.border} strokeWidth="0.8" strokeDasharray="3 2" />
          </g>
        )
      })()}

      {/* Precession: spin-top arrow */}
      {(() => {
        const x0 = 55, y0 = rows[2].y + chartH / 2
        return (
          <g>
            <circle cx={x0} cy={y0} r="10" fill={c.precess} opacity="0.12" stroke={c.precess} strokeWidth="1" />
            <path d={`M ${x0 - 14} ${y0 - 4} A 14 6 0 0 1 ${x0 + 14} ${y0 - 4}`}
              fill="none" stroke={c.precess} strokeWidth="1.2" strokeDasharray="3 2" />
            <polygon
              points={`${x0 + 14},${y0 - 4} ${x0 + 10},${y0 - 8} ${x0 + 10},${y0 - 0}`}
              fill={c.precess} opacity="0.8" />
          </g>
        )
      })()}

      {/* Glacial-interglacial annotation */}
      <rect x="14" y="380" width="532" height="28" rx="3" fill={c.surface} stroke={c.border} strokeWidth="0.8" />
      <text x="280" y="393" textAnchor="middle" fill={c.textDim} fontSize="8.5" fontFamily="sans-serif">
        Glacial cycles correlate with ~100 kyr eccentricity; last ice age maximum ~21 kyr BP
      </text>
      <text x="280" y="404" textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">
        Milankovitch (1941) · Hays, Imbrie &amp; Shackleton (1976) · Berger &amp; Loutre (1991)
      </text>
    </svg>
  )
}
