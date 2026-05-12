'use client'

// Three plate boundary types shown as cross-sections side by side.
// Scientifically accurate geometry for divergent, convergent, and transform.
export function PlateBoundaries() {
  const c = {
    continental: '#F28C76',  // coral — continental crust (thick, felsic)
    oceanic:     '#7AD7F0',  // accent — oceanic crust (thin, mafic)
    mantle:      '#E4B74A',  // gold — mantle
    magma:       '#B57EDC',  // amethyst — magma / melt
    fault:       '#E25B6E',  // ruby — fault zone
    bg:          '#0E0F14',
    surface:     '#16181F',
    surfaceHi:   '#1E2028',
    border:      '#2A2D38',
    text:        '#EDEEF2',
    textDim:     '#9CA0AE',
    textSubtle:  '#6B6F7C',
  }

  // Panel dimensions (3 equal panels across 560px)
  const panelW  = 158
  const gap     = 14
  const p1x     = 18    // Divergent
  const p2x     = p1x + panelW + gap   // Convergent
  const p3x     = p2x + panelW + gap   // Transform
  const panelH  = 220
  const panelY  = 54    // top of panel drawing area
  const crustY  = panelY + 60   // top of crust surface
  const mohoY   = panelY + 110  // crust-mantle boundary
  const bottomY = panelY + panelH

  // Shared: mantle background for each panel
  const MantleRect = ({ x }: { x: number }) => (
    <rect x={x} y={mohoY} width={panelW} height={bottomY - mohoY} fill={c.mantle} opacity="0.5" rx="0 0 3 3" />
  )

  // Panel title
  const Title = ({ x, label, sub }: { x: number; label: string; sub: string }) => (
    <g>
      <text x={x + panelW / 2} y={panelY - 8} textAnchor="middle" fill={c.text} fontSize="10.5" fontWeight="700" fontFamily="monospace">{label}</text>
      <text x={x + panelW / 2} y={panelY + 4} textAnchor="middle" fill={c.textSubtle} fontSize="8.5" fontFamily="sans-serif">{sub}</text>
    </g>
  )

  return (
    <svg
      viewBox="0 0 560 330"
      width="100%"
      style={{ display: 'block' }}
      role="img"
      aria-label="Three plate boundary types: divergent, convergent, and transform"
    >
      <rect width="560" height="330" fill={c.bg} rx="4" />

      {/* ════ PANEL 1: DIVERGENT BOUNDARY ════ */}
      <Title x={p1x} label="DIVERGENT" sub="plates move apart" />
      <MantleRect x={p1x} />

      {/* Magma upwelling in center gap */}
      <polygon
        points={`${p1x + 69},${mohoY - 20} ${p1x + 79},${mohoY - 20} ${p1x + 84},${crustY + 45} ${p1x + 79},${crustY + 38} ${p1x + 69},${crustY + 38} ${p1x + 64},${crustY + 45}`}
        fill={c.magma}
        opacity="0.75"
      />
      {/* New crust forming at ridge */}
      <rect x={p1x + 67} y={crustY + 30} width={24} height={8} fill={c.oceanic} opacity="0.8" rx="2" />

      {/* Left oceanic plate */}
      <polygon
        points={`${p1x},${crustY} ${p1x + 62},${crustY} ${p1x + 62},${mohoY} ${p1x},${mohoY}`}
        fill={c.oceanic}
        opacity="0.8"
      />
      {/* Right oceanic plate */}
      <polygon
        points={`${p1x + 96},${crustY} ${p1x + panelW},${crustY} ${p1x + panelW},${mohoY} ${p1x + 96},${mohoY}`}
        fill={c.oceanic}
        opacity="0.8"
      />

      {/* Surface topography: ridge in center */}
      <polyline
        points={`${p1x},${crustY} ${p1x + 55},${crustY} ${p1x + 62},${crustY - 12} ${p1x + 74},${crustY - 18} ${p1x + 86},${crustY - 12} ${p1x + 96},${crustY} ${p1x + panelW},${crustY}`}
        fill="none" stroke={c.oceanic} strokeWidth="0" />
      {/* Ridge fill */}
      <polygon
        points={`${p1x + 55},${crustY} ${p1x + 62},${crustY - 12} ${p1x + 74},${crustY - 18} ${p1x + 86},${crustY - 12} ${p1x + 96},${crustY}`}
        fill={c.oceanic}
        opacity="0.6"
      />

      {/* Motion arrows */}
      {[[-28, -1], [28, 1]].map(([dx, dir], i) => {
        const ax = p1x + 79 + dx + (dir < 0 ? -20 : 0)
        return (
          <g key={i}>
            <line x1={ax} y1={crustY - 30} x2={ax + dir * 22} y2={crustY - 30} stroke={c.fault} strokeWidth="1.5" />
            <polygon points={`${ax + dir * 22 - dir * 5},${crustY - 34} ${ax + dir * 22 - dir * 5},${crustY - 26} ${ax + dir * 22},${crustY - 30}`} fill={c.fault} />
          </g>
        )
      })}

      {/* Labels */}
      <text x={p1x + 10} y={crustY + 26} fill={c.oceanic} fontSize="7.5" fontFamily="monospace">Oceanic crust</text>
      <text x={p1x + panelW / 2} y={mohoY + 30} textAnchor="middle" fill={c.mantle} fontSize="7.5" fontFamily="monospace">Mantle</text>
      <text x={p1x + panelW / 2} y={crustY - 28} textAnchor="middle" fill={c.magma} fontSize="7.5" fontFamily="monospace">Magma</text>
      <text x={p1x + panelW / 2} y={crustY - 18} textAnchor="middle" fill={c.magma} fontSize="7.5" fontFamily="monospace">rising</text>
      <text x={p1x + panelW / 2} y={crustY - 6} textAnchor="middle" fill={c.oceanic} fontSize="7" fontFamily="sans-serif">Mid-ocean ridge</text>

      {/* ════ PANEL 2: CONVERGENT BOUNDARY ════ */}
      <Title x={p2x} label="CONVERGENT" sub="oceanic → continental" />
      <MantleRect x={p2x} />

      {/* Continental crust (right, thick) */}
      <polygon
        points={`${p2x + 60},${crustY - 15} ${p2x + panelW},${crustY - 15} ${p2x + panelW},${mohoY} ${p2x + 70},${mohoY}`}
        fill={c.continental}
        opacity="0.8"
      />
      {/* Oceanic plate surface (left, thin, subducting) */}
      <polygon
        points={`${p2x},${crustY} ${p2x + 62},${crustY} ${p2x + 70},${mohoY} ${p2x},${mohoY}`}
        fill={c.oceanic}
        opacity="0.8"
      />
      {/* Subducting slab going down-right */}
      <polygon
        points={`${p2x + 67},${mohoY} ${p2x + 80},${mohoY} ${p2x + 100},${bottomY} ${p2x + 86},${bottomY}`}
        fill={c.oceanic}
        opacity="0.6"
      />

      {/* Trench at surface */}
      <polygon
        points={`${p2x + 56},${crustY} ${p2x + 65},${crustY + 16} ${p2x + 74},${crustY}`}
        fill={c.bg}
        opacity="0.9"
      />

      {/* Magma wedge forming above slab */}
      <polygon
        points={`${p2x + 80},${mohoY} ${p2x + 95},${mohoY} ${p2x + 90},${mohoY - 25}`}
        fill={c.magma}
        opacity="0.6"
      />

      {/* Volcano on continent surface */}
      <polygon
        points={`${p2x + 98},${crustY - 15} ${p2x + 110},${crustY - 40} ${p2x + 122},${crustY - 15}`}
        fill={c.continental}
        opacity="0.9"
      />
      <polygon
        points={`${p2x + 108},${crustY - 37} ${p2x + 110},${crustY - 44} ${p2x + 112},${crustY - 37}`}
        fill={c.magma}
        opacity="0.85"
      />

      {/* Motion arrows */}
      <line x1={p2x + 20} y1={crustY - 30} x2={p2x + 45} y2={crustY - 30} stroke={c.fault} strokeWidth="1.5" />
      <polygon points={`${p2x + 45 - 5},${crustY - 34} ${p2x + 45 - 5},${crustY - 26} ${p2x + 45},${crustY - 30}`} fill={c.fault} />

      {/* Labels */}
      <text x={p2x + 5} y={crustY + 26} fill={c.oceanic} fontSize="7.5" fontFamily="monospace">Oceanic</text>
      <text x={p2x + 90} y={crustY - 4} fill={c.continental} fontSize="7.5" fontFamily="monospace">Continental</text>
      <text x={p2x + panelW / 2} y={mohoY + 40} textAnchor="middle" fill={c.magma} fontSize="7" fontFamily="sans-serif">Slab dehydration</text>
      <text x={p2x + panelW / 2} y={mohoY + 52} textAnchor="middle" fill={c.magma} fontSize="7" fontFamily="sans-serif">drives magma</text>
      <text x={p2x + 64} y={crustY + 10} fill={c.textSubtle} fontSize="7" fontFamily="sans-serif">Trench</text>
      <text x={p2x + 108} y={crustY - 46} textAnchor="middle" fill={c.magma} fontSize="7.5" fontFamily="monospace">Volcano</text>

      {/* ════ PANEL 3: TRANSFORM BOUNDARY ════ */}
      <Title x={p3x} label="TRANSFORM" sub="plates slide past" />
      <MantleRect x={p3x} />

      {/* Left plate */}
      <polygon
        points={`${p3x},${crustY} ${p3x + 70},${crustY} ${p3x + 70},${mohoY} ${p3x},${mohoY}`}
        fill={c.continental}
        opacity="0.8"
      />
      {/* Right plate */}
      <polygon
        points={`${p3x + 70},${crustY} ${p3x + panelW},${crustY} ${p3x + panelW},${mohoY} ${p3x + 70},${mohoY}`}
        fill={c.continental}
        opacity="0.8"
      />
      {/* Fault zone */}
      <rect x={p3x + 68} y={crustY} width="4" height={mohoY - crustY} fill={c.fault} opacity="0.6" />

      {/* Offset landscape features showing horizontal motion */}
      <line x1={p3x + 20} y1={crustY} x2={p3x + 20} y2={crustY - 12} stroke={c.textSubtle} strokeWidth="1" strokeDasharray="3 2" />
      <line x1={p3x + 20} y1={crustY - 12} x2={p3x + 50} y2={crustY - 12} stroke={c.textSubtle} strokeWidth="1" strokeDasharray="3 2" />
      <line x1={p3x + 90} y1={crustY} x2={p3x + 90} y2={crustY - 12} stroke={c.textSubtle} strokeWidth="1" strokeDasharray="3 2" />
      <line x1={p3x + 90} y1={crustY - 12} x2={p3x + 120} y2={crustY - 12} stroke={c.textSubtle} strokeWidth="1" strokeDasharray="3 2" />

      {/* Motion arrows (opposite directions) */}
      {/* Left plate moves up */}
      <line x1={p3x + 35} y1={crustY - 42} x2={p3x + 35} y2={crustY - 25} stroke={c.fault} strokeWidth="1.5" />
      <polygon points={`${p3x + 31},${crustY - 42} ${p3x + 39},${crustY - 42} ${p3x + 35},${crustY - 48}`} fill={c.fault} />
      {/* Right plate moves down */}
      <line x1={p3x + 105} y1={crustY - 48} x2={p3x + 105} y2={crustY - 30} stroke={c.fault} strokeWidth="1.5" />
      <polygon points={`${p3x + 101},${crustY - 25} ${p3x + 109},${crustY - 25} ${p3x + 105},${crustY - 30}`} fill={c.fault} />

      {/* Labels */}
      <text x={p3x + panelW / 2} y={crustY + 26} textAnchor="middle" fill={c.continental} fontSize="7.5" fontFamily="monospace">Continental crust</text>
      <text x={p3x + panelW / 2} y={mohoY + 30} textAnchor="middle" fill={c.mantle} fontSize="7.5" fontFamily="monospace">Mantle (unchanged)</text>
      <text x={p3x + 70} y={mohoY + 15} textAnchor="middle" fill={c.fault} fontSize="7" fontFamily="monospace">Fault</text>
      <text x={p3x + panelW / 2} y={mohoY + 60} textAnchor="middle" fill={c.textSubtle} fontSize="7" fontFamily="sans-serif">No crust created or destroyed</text>

      {/* Bottom citation */}
      <text x="280" y="320" textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">
        Not to scale · mantle wedge magma generation and volcanic arc simplified
      </text>
    </svg>
  )
}
