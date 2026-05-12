'use client'

// Three main volcanic cone morphologies: shield, composite (stratovolcano), cinder cone.
// Profiles drawn to approximate shape ratios.
export function VolcanicConeTypes() {
  const c = {
    lava:    '#F28C76',   // coral — lava / basaltic
    ash:     '#9CA0AE',   // gray  — tephra / ash layers
    magma:   '#B57EDC',   // amethyst — magma chamber
    cinder:  '#E4B74A',   // gold — cinder/pyroclastic
    bg:      '#0E0F14',
    surface: '#16181F',
    border:  '#2A2D38',
    text:    '#EDEEF2',
    textDim: '#9CA0AE',
    textSubtle: '#6B6F7C',
    ground:  '#1E2028',
  }

  // Ground level y
  const groundY = 250
  const W = 560

  // Panel positions and widths
  const panels = [
    { cx: 94,  label: 'SHIELD VOLCANO',    sub: 'basaltic · gentle slopes' },
    { cx: 280, label: 'STRATOVOLCANO',     sub: 'andesitic · steep slopes' },
    { cx: 466, label: 'CINDER CONE',       sub: 'scoriaceous · very steep' },
  ]

  return (
    <svg viewBox="0 0 560 330" width="100%" style={{ display: 'block' }}
      role="img" aria-label="Three volcanic cone types: shield volcano, stratovolcano (composite), and cinder cone">
      <rect width="560" height="330" fill={c.bg} rx="4" />

      {/* Ground layer */}
      <rect x="0" y={groundY} width={W} height={80} fill={c.ground} />
      <line x1="0" y1={groundY} x2={W} y2={groundY} stroke={c.border} strokeWidth="1" />

      {/* Panel dividers */}
      <line x1="187" y1="20" x2="187" y2={groundY} stroke={c.border} strokeWidth="0.8" strokeDasharray="4 3" opacity="0.5" />
      <line x1="373" y1="20" x2="373" y2={groundY} stroke={c.border} strokeWidth="0.8" strokeDasharray="4 3" opacity="0.5" />

      {/* ── SHIELD VOLCANO ── */}
      {/* Very wide, low profile: width ~160px, height ~80px */}
      {/* Lava profile */}
      <polygon
        points={`${panels[0].cx - 80},${groundY} ${panels[0].cx - 60},${groundY - 30} ${panels[0].cx - 20},${groundY - 60} ${panels[0].cx},${groundY - 80} ${panels[0].cx + 20},${groundY - 60} ${panels[0].cx + 60},${groundY - 30} ${panels[0].cx + 80},${groundY}`}
        fill={c.lava}
        opacity="0.7"
      />
      {/* Lava flow layers (thin streaks) */}
      {[20, 40, 58].map((h, i) => (
        <line key={i}
          x1={panels[0].cx - 80 + i * 8} y1={groundY - h}
          x2={panels[0].cx + 80 - i * 8} y2={groundY - h}
          stroke={c.lava} strokeWidth="0.8" opacity="0.3" strokeDasharray="4 2" />
      ))}
      {/* Summit crater */}
      <ellipse cx={panels[0].cx} cy={groundY - 80} rx="10" ry="4" fill={c.bg} stroke={c.magma} strokeWidth="1" />
      {/* Magma pipe */}
      <line x1={panels[0].cx} y1={groundY - 76} x2={panels[0].cx} y2={groundY + 40}
        stroke={c.magma} strokeWidth="1.5" opacity="0.5" strokeDasharray="3 3" />
      {/* Magma chamber */}
      <ellipse cx={panels[0].cx} cy={groundY + 52} rx="28" ry="12" fill={c.magma} opacity="0.25" stroke={c.magma} strokeWidth="1" />

      {/* Labels */}
      <text x={panels[0].cx - 78} y={groundY - 18} fill={c.lava} fontSize="7.5" fontFamily="sans-serif">Lava flows</text>
      <text x={panels[0].cx} y={groundY + 22} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">Width: tens of km</text>
      <text x={panels[0].cx} y={groundY + 34} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">Slope: 2–10°</text>
      <text x={panels[0].cx} y={groundY + 46} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">Example: Mauna Loa (Hawaii)</text>

      {/* ── STRATOVOLCANO ── */}
      {/* Tall, steep profile: width ~140px, height ~170px */}
      <polygon
        points={`${panels[1].cx - 70},${groundY} ${panels[1].cx - 50},${groundY - 90} ${panels[1].cx - 20},${groundY - 155} ${panels[1].cx},${groundY - 175} ${panels[1].cx + 20},${groundY - 155} ${panels[1].cx + 50},${groundY - 90} ${panels[1].cx + 70},${groundY}`}
        fill={c.ash}
        opacity="0.65"
      />
      {/* Alternating lava and ash layers */}
      {[30, 60, 90, 115, 138, 155].map((h, i) => (
        <line key={i}
          x1={panels[1].cx - (70 - i * 10)} y1={groundY - h}
          x2={panels[1].cx + (70 - i * 10)} y2={groundY - h}
          stroke={i % 2 === 0 ? c.lava : c.ash}
          strokeWidth="1.5"
          opacity="0.4"
        />
      ))}
      {/* Lava overlay */}
      <polygon
        points={`${panels[1].cx - 70},${groundY} ${panels[1].cx - 50},${groundY - 90} ${panels[1].cx - 20},${groundY - 155} ${panels[1].cx},${groundY - 175} ${panels[1].cx + 20},${groundY - 155} ${panels[1].cx + 50},${groundY - 90} ${panels[1].cx + 70},${groundY}`}
        fill="none"
        stroke={c.lava}
        strokeWidth="1.5"
        opacity="0.5"
      />
      {/* Summit crater with eruption */}
      <ellipse cx={panels[1].cx} cy={groundY - 175} rx="7" ry="4" fill={c.bg} stroke={c.magma} strokeWidth="1" />
      <polygon points={`${panels[1].cx - 8},${groundY - 180} ${panels[1].cx},${groundY - 200} ${panels[1].cx + 8},${groundY - 180}`} fill={c.magma} opacity="0.7" />
      {/* Magma pipe */}
      <line x1={panels[1].cx} y1={groundY - 171} x2={panels[1].cx} y2={groundY + 40}
        stroke={c.magma} strokeWidth="1.5" opacity="0.5" strokeDasharray="3 3" />
      <ellipse cx={panels[1].cx} cy={groundY + 52} rx="22" ry="10" fill={c.magma} opacity="0.2" stroke={c.magma} strokeWidth="1" />

      {/* Labels */}
      <text x={panels[1].cx + 55} y={groundY - 100} fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">Lava &amp;</text>
      <text x={panels[1].cx + 55} y={groundY - 90}  fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">ash layers</text>
      <text x={panels[1].cx} y={groundY + 22} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">Slope: 30–35°</text>
      <text x={panels[1].cx} y={groundY + 34} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">Example: Mt Fuji, Mt St Helens</text>

      {/* ── CINDER CONE ── */}
      {/* Small, very steep: width ~80px, height ~90px */}
      <polygon
        points={`${panels[2].cx - 45},${groundY} ${panels[2].cx - 20},${groundY - 85} ${panels[2].cx},${groundY - 95} ${panels[2].cx + 20},${groundY - 85} ${panels[2].cx + 45},${groundY}`}
        fill={c.cinder}
        opacity="0.7"
      />
      {/* Crater rim */}
      <ellipse cx={panels[2].cx} cy={groundY - 95} rx="18" ry="6" fill={c.bg} stroke={c.cinder} strokeWidth="1.5" />
      {/* Ejected material arcs */}
      {[[-20, -25], [20, -25], [-30, -15], [30, -15]].map(([dx, dy], i) => (
        <circle key={i} cx={panels[2].cx + dx} cy={groundY - 95 + dy} r="2.5" fill={c.cinder} opacity="0.6" />
      ))}
      {/* No persistent magma chamber - vent only */}
      <line x1={panels[2].cx} y1={groundY - 89} x2={panels[2].cx} y2={groundY + 20}
        stroke={c.cinder} strokeWidth="1.2" opacity="0.4" strokeDasharray="3 3" />

      <text x={panels[2].cx} y={groundY + 22} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">Height: &lt; 300 m</text>
      <text x={panels[2].cx} y={groundY + 34} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">Slope: 30–40°</text>
      <text x={panels[2].cx} y={groundY + 46} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">Example: Paricutín (Mexico)</text>

      {/* ── Panel titles ── */}
      {panels.map(({ cx, label, sub }) => (
        <g key={label}>
          <text x={cx} y="20" textAnchor="middle" fill={c.text}    fontSize="10.5" fontWeight="700" fontFamily="monospace">{label}</text>
          <text x={cx} y="32" textAnchor="middle" fill={c.textSubtle} fontSize="8"   fontFamily="sans-serif">{sub}</text>
        </g>
      ))}

      <text x="280" y="322" textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">
        Relative heights and widths schematic · not to scale with each other
      </text>
    </svg>
  )
}
