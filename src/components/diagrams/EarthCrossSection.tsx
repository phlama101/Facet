'use client'

// Scientifically accurate Earth interior cross-section.
// Layer proportions are correct; crust is exaggerated ~8× for visibility.
export function EarthCrossSection() {
  const cx = 175
  const cy = 180
  const R = 155

  // Proportional layer radii. Actual km / 6371km * R.
  const rMoho     = 142  // crust ring is 13 px (~8× exaggerated)
  const rOuterCore = Math.round((3471 / 6371) * R) // 84 px  (outer core boundary at 2,900 km)
  const rInnerCore = Math.round((1271 / 6371) * R) // 31 px  (inner core radius)

  const c = {
    crust:      '#F28C76',
    mantle:     '#E4B74A',
    outerCore:  '#7AD7F0',
    innerCore:  '#B57EDC',
    bg:         '#0E0F14',
    border:     '#2A2D38',
    text:       '#EDEEF2',
    textDim:    '#9CA0AE',
    textSubtle: '#6B6F7C',
  }

  // Point on circle perimeter: standard-math angle (CCW from +x), mapped to SVG coords
  const pt = (r: number, deg: number) => {
    const rad = (deg * Math.PI) / 180
    return { x: cx + r * Math.cos(rad), y: cy - r * Math.sin(rad) }
  }

  // Connector dot positions (mid-radius of each layer, at chosen angle)
  const crustDot     = pt((rMoho + R) / 2,         50)  // upper-right of crust ring
  const mantleDot    = pt((rOuterCore + rMoho) / 2, 12)  // right of mantle
  const outerCoreDot = pt((rInnerCore + rOuterCore) / 2, -15) // right of outer core
  const innerCoreDot = pt(rInnerCore * 0.55,        -40) // inside inner core

  const lx = 358  // x start of label panel

  const labels = [
    { dot: crustDot,     ly: 54,  color: c.crust,     name: 'CRUST',      sub: '0 – 70 km · solid silicate',       note: '~1% of volume · Moho at base' },
    { dot: mantleDot,    ly: 132, color: c.mantle,     name: 'MANTLE',     sub: '70 – 2,900 km · solid silicate',   note: '~84% of volume · flows over Myr' },
    { dot: outerCoreDot, ly: 206, color: c.outerCore,  name: 'OUTER CORE', sub: '2,900 – 5,100 km · liquid Fe-Ni', note: 'S-waves cannot pass · generates field' },
    { dot: innerCoreDot, ly: 282, color: c.innerCore,  name: 'INNER CORE', sub: '5,100 – 6,371 km · solid Fe-Ni',  note: '~5,400 °C · solid under pressure' },
  ]

  return (
    <svg
      viewBox="0 0 560 360"
      width="100%"
      style={{ display: 'block' }}
      role="img"
      aria-label="Earth cross-section showing four interior layers: crust, mantle, outer core, and inner core"
    >
      <rect width="560" height="360" fill={c.bg} rx="4" />

      {/* --- Concentric circles, outermost first --- */}
      <circle cx={cx} cy={cy} r={R}          fill={c.crust} />
      <circle cx={cx} cy={cy} r={rMoho}      fill={c.mantle} />
      <circle cx={cx} cy={cy} r={rOuterCore} fill={c.outerCore} />
      <circle cx={cx} cy={cy} r={rInnerCore} fill={c.innerCore} />

      {/* Subtle inner-glow / depth shading on each layer */}
      <circle cx={cx} cy={cy} r={R}          fill="none" stroke="#ffffff" strokeWidth="6"  opacity="0.04" />
      <circle cx={cx} cy={cy} r={rMoho}      fill="none" stroke="#ffffff" strokeWidth="4"  opacity="0.06" />
      <circle cx={cx} cy={cy} r={rOuterCore} fill="none" stroke="#ffffff" strokeWidth="3"  opacity="0.06" />
      <circle cx={cx} cy={cy} r={rInnerCore} fill="none" stroke="#ffffff" strokeWidth="2"  opacity="0.08" />

      {/* Layer boundary lines */}
      {[rInnerCore, rOuterCore, rMoho, R].map((r) => (
        <circle key={r} cx={cx} cy={cy} r={r} fill="none" stroke={c.bg} strokeWidth="1.2" opacity="0.7" />
      ))}

      {/* "Moho" label directly on boundary */}
      <text
        x={cx + rMoho - 3}
        y={cy - rMoho - 5}
        fill={c.textSubtle}
        fontSize="7.5"
        fontFamily="monospace"
        textAnchor="middle"
        transform={`rotate(-90, ${cx + rMoho}, ${cy - rMoho})`}
      >Moho</text>

      {/* --- Connector lines + dots --- */}
      {labels.map(({ dot, ly, color }, i) => (
        <g key={i}>
          <line
            x1={dot.x} y1={dot.y}
            x2={lx - 4} y2={ly + 6}
            stroke={color}
            strokeWidth="0.75"
            strokeDasharray="3 2"
            opacity="0.65"
          />
          <circle cx={dot.x} cy={dot.y} r="2.5" fill={color} opacity="0.9" />
        </g>
      ))}

      {/* --- Labels --- */}
      {labels.map(({ ly, color, name, sub, note }, i) => (
        <g key={i}>
          <rect x={lx - 2} y={ly - 13} width="4" height="4" fill={color} rx="1" />
          <text x={lx + 6} y={ly - 4}  fill={color}    fontSize="10.5" fontWeight="700" fontFamily="monospace">{name}</text>
          <text x={lx + 6} y={ly + 10} fill={c.textDim}    fontSize="9"   fontFamily="sans-serif">{sub}</text>
          <text x={lx + 6} y={ly + 22} fill={c.textSubtle} fontSize="8.5" fontFamily="monospace">{note}</text>
        </g>
      ))}

      {/* Scale note */}
      <text x={cx} y={350} textAnchor="middle" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">
        Crust exaggerated ~8× for visibility · all other proportions to scale
      </text>
    </svg>
  )
}
