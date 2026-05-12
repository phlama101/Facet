'use client'

// Rock cycle flow diagram showing interconversion pathways between the
// three rock families: igneous, sedimentary, and metamorphic.
export function RockCycleDiagram() {
  const c = {
    coral:      '#F28C76',  // igneous
    gold:       '#E4B74A',  // sedimentary
    amethyst:   '#B57EDC',  // metamorphic
    accent:     '#7AD7F0',  // magma
    bg:         '#0E0F14',
    surface:    '#16181F',
    surfaceHi:  '#1E2028',
    border:     '#2A2D38',
    text:       '#EDEEF2',
    textDim:    '#9CA0AE',
    textSubtle: '#6B6F7C',
  }

  // Rock type node positions (center of box)
  const igneous    = { x: 280, y: 68  }
  const sedimentary = { x: 88,  y: 285 }
  const metamorphic = { x: 472, y: 285 }
  const magmaY = 345  // magma pool y center

  const BOX_W = 116
  const BOX_H = 52

  // Curved arrow helper: uses SVG cubic Bezier
  const CurvedArrow = ({
    x1, y1, x2, y2, cx1, cy1, cx2, cy2, color, label, labelX, labelY,
  }: {
    x1: number; y1: number; x2: number; y2: number
    cx1: number; cy1: number; cx2: number; cy2: number
    color: string; label: string[]; labelX: number; labelY: number
  }) => {
    // Arrowhead at (x2, y2) pointing in direction of curve end
    const dx = x2 - cx2, dy = y2 - cy2
    const len = Math.sqrt(dx * dx + dy * dy)
    const ux = dx / len, uy = dy / len
    const aw = 6
    const p1x = x2 - ux * 9 + uy * aw, p1y = y2 - uy * 9 - ux * aw
    const p2x = x2 - ux * 9 - uy * aw, p2y = y2 - uy * 9 + ux * aw
    return (
      <g>
        <path
          d={`M ${x1} ${y1} C ${cx1} ${cy1} ${cx2} ${cy2} ${x2} ${y2}`}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          opacity="0.8"
        />
        <polygon points={`${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}`} fill={color} opacity="0.8" />
        {label.map((line, i) => (
          <text key={i} x={labelX} y={labelY + i * 11} textAnchor="middle" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">
            {line}
          </text>
        ))}
      </g>
    )
  }

  const RockBox = ({
    pos, color, name, sub,
  }: { pos: { x: number; y: number }; color: string; name: string; sub: string }) => (
    <g>
      <rect
        x={pos.x - BOX_W / 2} y={pos.y - BOX_H / 2}
        width={BOX_W} height={BOX_H}
        rx="4"
        fill={c.surfaceHi}
        stroke={color}
        strokeWidth="1.5"
      />
      <text x={pos.x} y={pos.y - 8} textAnchor="middle" fill={color} fontSize="11" fontWeight="700" fontFamily="monospace">
        {name}
      </text>
      <text x={pos.x} y={pos.y + 8} textAnchor="middle" fill={c.textDim} fontSize="8.5" fontFamily="sans-serif">
        {sub}
      </text>
    </g>
  )

  return (
    <svg
      viewBox="0 0 560 380"
      width="100%"
      style={{ display: 'block' }}
      role="img"
      aria-label="Rock cycle diagram showing how igneous, sedimentary, and metamorphic rocks convert between each other through geological processes"
    >
      <rect width="560" height="380" fill={c.bg} rx="4" />

      {/* Background triangle hint */}
      <polygon
        points={`${igneous.x},${igneous.y + BOX_H/2 + 2} ${sedimentary.x},${sedimentary.y - BOX_H/2 - 2} ${metamorphic.x},${metamorphic.y - BOX_H/2 - 2}`}
        fill="none"
        stroke={c.border}
        strokeWidth="0.8"
        strokeDasharray="4 4"
        opacity="0.5"
      />

      {/* ── Process arrows ── */}

      {/* Igneous → Sedimentary (left-down arc)
          Start: left edge of Igneous box, End: top edge of Sedimentary box */}
      <CurvedArrow
        x1={igneous.x - BOX_W / 2} y1={igneous.y + 8}
        x2={sedimentary.x + 10}    y2={sedimentary.y - BOX_H / 2}
        cx1={igneous.x - 160}      cy1={igneous.y + 60}
        cx2={sedimentary.x + 60}   cy2={sedimentary.y - 80}
        color={c.coral}
        label={['Weathering,', 'erosion, transport,', 'lithification']}
        labelX={128} labelY={155}
      />

      {/* Sedimentary → Metamorphic (bottom straight)
          Start: right edge of Sedimentary, End: left edge of Metamorphic */}
      <CurvedArrow
        x1={sedimentary.x + BOX_W / 2} y1={sedimentary.y + 8}
        x2={metamorphic.x - BOX_W / 2} y2={metamorphic.y + 8}
        cx1={sedimentary.x + BOX_W / 2 + 60} cy1={sedimentary.y + 55}
        cx2={metamorphic.x - BOX_W / 2 - 60} cy2={metamorphic.y + 55}
        color={c.gold}
        label={['Burial, heat', '& pressure']}
        labelX={280} labelY={312}
      />

      {/* Metamorphic → Igneous (right-up arc)
          Start: top edge of Metamorphic, End: right edge of Igneous box */}
      <CurvedArrow
        x1={metamorphic.x - 10}    y1={metamorphic.y - BOX_H / 2}
        x2={igneous.x + BOX_W / 2} y2={igneous.y + 8}
        cx1={metamorphic.x - 60}   cy1={metamorphic.y - 80}
        cx2={igneous.x + 160}      cy2={igneous.y + 60}
        color={c.amethyst}
        label={['Melting →', 'magma →', 'crystallization']}
        labelX={432} labelY={155}
      />

      {/* Igneous → Metamorphic direct (heat & pressure from intrusions) */}
      <CurvedArrow
        x1={igneous.x + BOX_W / 2 - 10} y1={igneous.y + BOX_H / 2}
        x2={metamorphic.x - BOX_W / 2 + 10} y2={metamorphic.y - BOX_H / 2}
        cx1={igneous.x + 100}        cy1={igneous.y + 130}
        cx2={metamorphic.x - 40}     cy2={metamorphic.y - 90}
        color={c.coral}
        label={['Heat & pressure', '(contact metamorphism)']}
        labelX={395} labelY={198}
      />

      {/* Sedimentary → Igneous (via melting at subduction) */}
      <CurvedArrow
        x1={sedimentary.x + BOX_W / 2 - 10} y1={sedimentary.y - BOX_H / 2}
        x2={igneous.x - BOX_W / 2 + 10}     y2={igneous.y + BOX_H / 2}
        cx1={sedimentary.x + 80}             cy1={sedimentary.y - 80}
        cx2={igneous.x - 100}                cy2={igneous.y + 100}
        color={c.gold}
        label={['Melting', '(subduction)']}
        labelX={165} labelY={196}
      />

      {/* ── Magma pool at bottom center ── */}
      <ellipse cx={280} cy={magmaY} rx={70} ry={18} fill={c.accent} opacity="0.12" stroke={c.accent} strokeWidth="1" />
      <text x={280} y={magmaY + 5} textAnchor="middle" fill={c.accent} fontSize="9.5" fontWeight="600" fontFamily="monospace">MAGMA</text>

      {/* Magma → Igneous arrow */}
      <line x1={280} y1={magmaY - 18} x2={igneous.x} y2={igneous.y + BOX_H / 2} stroke={c.accent} strokeWidth="1.5" strokeDasharray="4 3" opacity="0.6" />

      {/* ── Rock type nodes (drawn last so they're on top) ── */}
      <RockBox pos={igneous}     color={c.coral}     name="IGNEOUS"     sub="basalt · granite · obsidian" />
      <RockBox pos={sedimentary} color={c.gold}      name="SEDIMENTARY" sub="sandstone · limestone · shale" />
      <RockBox pos={metamorphic} color={c.amethyst}  name="METAMORPHIC" sub="schist · marble · quartzite" />

      {/* Title */}
      <text x="280" y="15" textAnchor="middle" fill={c.textSubtle} fontSize="9" fontFamily="sans-serif">
        The Rock Cycle
      </text>
    </svg>
  )
}
