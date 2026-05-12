'use client'

// Ocean wave anatomy: crest, trough, wavelength, amplitude, wave base, orbital motion.
export function WaveAnatomy() {
  const c = {
    water:   '#7AD7F0',   // accent — water
    wave:    '#4AB8D8',   // deeper accent
    orbital: '#7FC29B',   // jade — orbital circles
    seabed:  '#4A3828',   // dark — seafloor
    depth:   '#0E2030',   // deep ocean
    bg:      '#0E0F14',
    surface: '#16181F',
    border:  '#2A2D38',
    text:    '#EDEEF2',
    textDim: '#9CA0AE',
    textSubtle: '#6B6F7C',
  }

  const W = 560, H = 320
  const waveY = 130       // mean sea level
  const seabedY = 270
  const A = 38            // amplitude
  const λ = 160           // wavelength pixels

  // Wave path across the SVG
  const wavePoints = () => {
    const pts: string[] = []
    for (let x = 0; x <= W; x += 4) {
      const y = waveY + A * Math.sin((2 * Math.PI * x) / λ)
      pts.push(`${x},${y.toFixed(1)}`)
    }
    return pts.join(' ')
  }

  // Water fill polygon (wave surface + bottom)
  const waterFill = () => {
    const pts: string[] = [`0,${H}`]
    for (let x = 0; x <= W; x += 4) {
      const y = waveY + A * Math.sin((2 * Math.PI * x) / λ)
      pts.push(`${x},${y.toFixed(1)}`)
    }
    pts.push(`${W},${H}`)
    return pts.join(' ')
  }

  // Orbital motion circles at depth beneath a crest (x ~ λ/4 after left edge)
  const orbitX = 380
  const orbitDepths = [
    { dy: 0,  r: 22 },
    { dy: 40, r: 14 },
    { dy: 75, r: 8  },
    { dy: 105,r: 4  },
    { dy: 128,r: 1.5},
  ]

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}
      role="img" aria-label="Ocean wave anatomy showing crest, trough, wavelength, amplitude, wave base, and orbital water motion">
      <rect width={W} height={H} fill={c.bg} rx="4" />

      {/* Deep ocean background */}
      <rect x="0" y={waveY} width={W} height={H - waveY} fill={c.depth} />

      {/* Water fill */}
      <polygon points={waterFill()} fill={c.water} opacity="0.18" />

      {/* Seafloor */}
      <rect x="0" y={seabedY} width={W} height={H - seabedY} fill={c.seabed} opacity="0.7" />
      <line x1="0" y1={seabedY} x2={W} y2={seabedY} stroke={c.border} strokeWidth="1.2" />
      <text x="10" y={seabedY + 16} fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">Seafloor</text>

      {/* Wave surface line */}
      <polyline points={wavePoints()} fill="none" stroke={c.water} strokeWidth="2.5" />

      {/* Mean sea level dashed */}
      <line x1="0" y1={waveY} x2={W} y2={waveY} stroke={c.textSubtle} strokeWidth="0.8" strokeDasharray="6 4" opacity="0.5" />
      <text x="6" y={waveY - 4} fill={c.textSubtle} fontSize="7.5" fontFamily="monospace">Mean SL</text>

      {/* ── Wavelength annotation (first crest to second crest) ── */}
      {/* First crest at x where sin=1 → x = λ/4 */}
      {(() => {
        const x1 = λ / 4        // ~40
        const x2 = λ / 4 + λ    // ~200
        const y  = waveY - A
        return (
          <g>
            <line x1={x1} y1={y - 6} x2={x2} y2={y - 6} stroke={c.textDim} strokeWidth="1" markerEnd="none" />
            <line x1={x1} y1={y - 10} x2={x1} y2={y - 2} stroke={c.textDim} strokeWidth="1" />
            <line x1={x2} y1={y - 10} x2={x2} y2={y - 2} stroke={c.textDim} strokeWidth="1" />
            <line x1={x1} y1={y - 6} x2={x1 + 12} y2={y - 6} stroke={c.textDim} strokeWidth="1.2" />
            <line x1={x2} y1={y - 6} x2={x2 - 12} y2={y - 6} stroke={c.textDim} strokeWidth="1.2" />
            <text x={(x1 + x2) / 2} y={y - 10} textAnchor="middle" fill={c.textDim} fontSize="9" fontWeight="600" fontFamily="monospace">λ  Wavelength</text>
          </g>
        )
      })()}

      {/* ── Crest label ── */}
      <text x={λ / 4} y={waveY - A - 14} textAnchor="middle" fill={c.water} fontSize="9" fontWeight="700" fontFamily="monospace">Crest</text>

      {/* ── Trough label ── */}
      <text x={λ / 4 + λ / 2} y={waveY + A + 18} textAnchor="middle" fill={c.textDim} fontSize="9" fontWeight="700" fontFamily="monospace">Trough</text>

      {/* ── Amplitude annotation (vertical at crest) ── */}
      {(() => {
        const xc = λ / 4
        return (
          <g>
            <line x1={xc - 18} y1={waveY} x2={xc - 18} y2={waveY - A}
              stroke={c.orbital} strokeWidth="1.2" />
            <line x1={xc - 22} y1={waveY} x2={xc - 14} y2={waveY} stroke={c.orbital} strokeWidth="1" />
            <line x1={xc - 22} y1={waveY - A} x2={xc - 14} y2={waveY - A} stroke={c.orbital} strokeWidth="1" />
            <text x={xc - 32} y={waveY - A / 2 + 3} textAnchor="middle" fill={c.orbital} fontSize="8.5" fontFamily="monospace">A</text>
          </g>
        )
      })()}

      {/* ── Wave base horizontal dashed line ── */}
      {/* Wave base ≈ λ/2 depth */}
      {(() => {
        const wbY = waveY + λ / 2
        return (
          <g>
            <line x1="200" y1={wbY} x2={W - 10} y2={wbY}
              stroke={c.orbital} strokeWidth="1" strokeDasharray="5 3" opacity="0.6" />
            <text x={W - 12} y={wbY - 4} textAnchor="end" fill={c.orbital} fontSize="8" fontFamily="monospace">Wave base (λ/2)</text>
            <text x={W - 12} y={wbY + 10} textAnchor="end" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">No orbital motion below</text>
          </g>
        )
      })()}

      {/* ── Orbital circles (under a crest at orbitX) ── */}
      {orbitDepths.map(({ dy, r }, i) => {
        const oy = waveY - A + dy
        if (oy > seabedY - 4) return null
        return (
          <g key={i}>
            <circle cx={orbitX} cy={oy} r={r} fill="none" stroke={c.orbital} strokeWidth="0.9" opacity="0.6" />
            {/* Arrow to show circular direction */}
            {r > 3 && (
              <circle cx={orbitX + r} cy={oy} r="1.5" fill={c.orbital} opacity="0.7" />
            )}
          </g>
        )
      })}
      <text x={orbitX} y={waveY - A - 12} textAnchor="middle" fill={c.orbital} fontSize="8" fontFamily="monospace">Orbital motion</text>
      <text x={orbitX} y={waveY - A + 0}  textAnchor="middle" fill={c.textSubtle} fontSize="7" fontFamily="sans-serif">(shrinks with depth)</text>

      {/* ── Shallow vs deep water label ── */}
      <text x="60" y={seabedY - 8} fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">Shallow water: d &lt; λ/20</text>
      <text x="60" y={seabedY + 24} textAnchor="start" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">c = √(gd)  (depth-controlled speed)</text>

      {/* ── Key equations ── */}
      <rect x="210" y="8" width="160" height="54" rx="3" fill={c.surface} stroke={c.border} strokeWidth="1" />
      <text x="290" y="24" textAnchor="middle" fill={c.textDim} fontSize="8.5" fontWeight="600" fontFamily="monospace">Deep-water wave</text>
      <text x="290" y="38" textAnchor="middle" fill={c.water} fontSize="8.5" fontFamily="monospace">c = √(gλ / 2π)</text>
      <text x="290" y="52" textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">speed depends only on wavelength</text>

      <text x="280" y={H - 6} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">
        Wave energy ∝ A²  ·  g = 9.8 m s⁻²  ·  schematic cross-section
      </text>
    </svg>
  )
}
