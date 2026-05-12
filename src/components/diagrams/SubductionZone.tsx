'use client'

// Subduction zone cross-section: oceanic plate subducting under continental plate.
// Shows trench, accretionary wedge, volcanic arc, mantle wedge, forearc basin.
export function SubductionZone() {
  const c = {
    oceanic:   '#2A6080',   // dark blue — oceanic crust
    continental:'#7FC29B',  // jade — continental crust
    mantle:    '#B57EDC',   // amethyst — mantle
    wedge:     '#9C7A3C',   // tan — mantle wedge / melt
    sediment:  '#9CA0AE',   // gray — accretionary wedge / sediment
    magma:     '#F28C76',   // coral — magma / volcano
    water:     '#7AD7F0',   // accent — ocean water
    bg:        '#0E0F14',
    surface:   '#16181F',
    border:    '#2A2D38',
    text:      '#EDEEF2',
    textDim:   '#9CA0AE',
    textSubtle:'#6B6F7C',
    ground:    '#1E2028',
  }

  const W = 560, H = 340
  const seaLevel = 80

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}
      role="img" aria-label="Subduction zone cross-section showing oceanic plate descending under continental plate with trench, volcanic arc, and magma generation">
      <rect width={W} height={H} fill={c.bg} rx="4" />

      {/* Ocean water */}
      <rect x="0" y={seaLevel} width={W * 0.55} height={120} fill={c.water} opacity="0.08" />

      {/* ── Mantle background ── */}
      <rect x="0" y="140" width={W} height={H - 140} fill={c.mantle} opacity="0.08" />

      {/* ── Oceanic plate (descending, left to right, angling down) ── */}
      {/* Surface at y=140 left, descending to y=290 at x=380 */}
      <polygon
        points={`0,140 ${W * 0.52},140 380,290 0,310`}
        fill={c.oceanic} opacity="0.5"
      />
      {/* Oceanic crust top surface */}
      <line x1="0" y1="140" x2={W * 0.52} y2="140"
        stroke={c.oceanic} strokeWidth="2" opacity="0.8" />
      <line x1={W * 0.52} y1="140" x2="380" y2="290"
        stroke={c.oceanic} strokeWidth="2" opacity="0.8" />

      {/* ── Trench ── */}
      <polygon
        points={`${W * 0.44},${seaLevel + 120} ${W * 0.52},140 ${W * 0.6},${seaLevel + 120}`}
        fill={c.bg}
      />
      <text x={W * 0.52} y={seaLevel + 108} textAnchor="middle"
        fill={c.textSubtle} fontSize="7.5" fontFamily="monospace">Trench</text>

      {/* ── Continental plate ── */}
      <polygon
        points={`${W * 0.52},140 ${W},90 ${W},220 380,220`}
        fill={c.continental} opacity="0.45"
      />
      {/* Continental surface */}
      <line x1={W * 0.52} y1="140" x2={W} y2="90"
        stroke={c.continental} strokeWidth="2" opacity="0.7" />

      {/* ── Accretionary wedge (sediment scraped off subducting plate) ── */}
      <polygon
        points={`${W * 0.44},${seaLevel + 120} ${W * 0.52},140 ${W * 0.6},${seaLevel + 120} ${W * 0.62},155 ${W * 0.58},160`}
        fill={c.sediment} opacity="0.5"
      />
      <text x={W * 0.55} y={seaLevel + 140} fill={c.sediment} fontSize="7.5" fontFamily="monospace">Accret.</text>
      <text x={W * 0.55} y={seaLevel + 151} fill={c.sediment} fontSize="7.5" fontFamily="monospace">wedge</text>

      {/* ── Mantle wedge (above subducting slab) ── */}
      <polygon
        points={`${W * 0.6},158 380,220 380,290 ${W * 0.6},220`}
        fill={c.wedge} opacity="0.3"
      />
      <text x="360" y="210" textAnchor="middle" fill={c.textDim} fontSize="8" fontFamily="monospace">Mantle</text>
      <text x="360" y="222" textAnchor="middle" fill={c.textDim} fontSize="8" fontFamily="monospace">wedge</text>

      {/* ── Volcanic arc ── */}
      {/* Magma rising through continental crust */}
      <line x1="420" y1="220" x2="430" y2="120"
        stroke={c.magma} strokeWidth="2" strokeDasharray="4 3" opacity="0.6" />
      <line x1="450" y1="220" x2="458" y2="108"
        stroke={c.magma} strokeWidth="2" strokeDasharray="4 3" opacity="0.6" />
      {/* Volcano 1 */}
      <polygon points="418,120 430,88 442,120"
        fill={c.magma} opacity="0.8" />
      <polygon points="445,108 458,72 471,108"
        fill={c.magma} opacity="0.6" />
      {/* Eruption plume */}
      <ellipse cx="430" cy="80" rx="8" ry="12" fill={c.magma} opacity="0.3" />
      <text x="445" y="66" textAnchor="middle" fill={c.magma} fontSize="8.5" fontWeight="700" fontFamily="monospace">Volcanic arc</text>

      {/* ── Dewatering arrows (fluids from slab into mantle wedge) ── */}
      {[240, 270, 300].map((y, i) => {
        const x = W * 0.52 + (y - 140) * 0.56
        return (
          <g key={i}>
            <line x1={x - 6} y1={y} x2={x + 12} y2={y - 15}
              stroke={c.water} strokeWidth="1" opacity="0.5" />
            <polygon points={`${x + 12},${y - 15} ${x + 6},${y - 8} ${x + 18},${y - 8}`}
              fill={c.water} opacity="0.5" />
          </g>
        )
      })}
      <text x="320" y="238" fill={c.water} fontSize="7" fontFamily="sans-serif">H₂O flux</text>

      {/* ── Motion arrows ── */}
      {/* Oceanic plate moving right and down */}
      <line x1="60" y1="125" x2="120" y2="125"
        stroke={c.oceanic} strokeWidth="1.5" opacity="0.7" />
      <polygon points="120,125 112,121 112,129" fill={c.oceanic} opacity="0.7" />
      <text x="88" y="116" textAnchor="middle" fill={c.oceanic} fontSize="7.5" fontFamily="sans-serif">→</text>

      {/* Labels */}
      <text x="80" y="155" textAnchor="middle" fill={c.oceanic} fontSize="8.5" fontWeight="600" fontFamily="monospace">Oceanic crust</text>
      <text x="80" y="167" textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">~7 km thick · mafic</text>

      <text x="490" y="145" textAnchor="middle" fill={c.continental} fontSize="8.5" fontWeight="600" fontFamily="monospace">Continental</text>
      <text x="490" y="157" textAnchor="middle" fill={c.continental} fontSize="8.5" fontWeight="600" fontFamily="monospace">crust</text>
      <text x="490" y="169" textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">~35 km · felsic</text>

      {/* Ocean water label */}
      <text x="110" y={seaLevel + 30} fill={c.water} fontSize="8.5" fontWeight="600" fontFamily="monospace">Ocean</text>

      {/* Depth scale */}
      {[0, 50, 100, 150].map(km => {
        const y = 140 + km * 1.0
        if (y > H - 10) return null
        return (
          <g key={km}>
            <line x1="8" y1={y} x2="14" y2={y} stroke={c.border} strokeWidth="0.8" />
            <text x="6" y={y + 3} textAnchor="end" fill={c.textSubtle} fontSize="7" fontFamily="monospace">{km}</text>
          </g>
        )
      })}
      <text x="4" y={140 + 80} textAnchor="middle" fill={c.textSubtle} fontSize="7" fontFamily="monospace"
        transform={`rotate(-90, 4, ${140 + 80})`}>km</text>

      {/* Title */}
      <rect x="160" y="4" width="240" height="24" rx="3" fill={c.bg} opacity="0.7" />
      <text x="280" y="20" textAnchor="middle" fill={c.text} fontSize="11" fontWeight="700" fontFamily="monospace">
        Subduction Zone
      </text>

      <text x="280" y={H - 6} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">
        Subducted slab releases H₂O → lowers mantle melt point → arc magmatism · Wadati-Benioff zone
      </text>
    </svg>
  )
}
