'use client'

// Earth's global energy budget diagram.
// Values from Trenberth, Fasullo & Kiehl (2009) / CERES EBAF.
// All fluxes in W m⁻² (global-mean annual average).
export function EarthEnergyBudget() {
  const c = {
    gold:       '#E4B74A',
    accent:     '#7AD7F0',
    coral:      '#F28C76',
    jade:       '#7FC29B',
    amethyst:   '#B57EDC',
    bg:         '#0E0F14',
    surface:    '#16181F',
    surfaceHi:  '#1E2028',
    border:     '#2A2D38',
    text:       '#EDEEF2',
    textDim:    '#9CA0AE',
    textSubtle: '#6B6F7C',
  }

  // Layout zones (y ranges)
  const spaceY  = { top: 18,  bot: 85  }
  const atmosY  = { top: 120, bot: 205 }
  const surfaceY = { top: 260, bot: 320 }

  // Zone label helper
  const zoneMid = (z: { top: number; bot: number }) => (z.top + z.bot) / 2

  // Arrow helper: vertical arrow with arrowhead
  const VArrow = ({
    x, yFrom, yTo, color, width = 1.8, label, labelX, labelSide = 'right', value,
  }: {
    x: number; yFrom: number; yTo: number; color: string; width?: number
    label: string; labelX?: number; labelSide?: 'left' | 'right'; value: string
  }) => {
    const down = yTo > yFrom
    const aw = width + 5  // arrowhead width
    const al = 7          // arrowhead length
    const lx = labelX ?? (labelSide === 'right' ? x + 10 : x - 10)
    const midY = (yFrom + yTo) / 2
    return (
      <g>
        <line x1={x} y1={yFrom} x2={x} y2={yTo - (down ? al : -al)} stroke={color} strokeWidth={width} />
        {down
          ? <polygon points={`${x - aw/2},${yTo - al} ${x + aw/2},${yTo - al} ${x},${yTo}`} fill={color} />
          : <polygon points={`${x - aw/2},${yTo + al} ${x + aw/2},${yTo + al} ${x},${yTo}`} fill={color} />}
        <text
          x={lx} y={midY - 7}
          fill={color} fontSize="9" fontWeight="600" fontFamily="monospace"
          textAnchor={labelSide === 'right' ? 'start' : 'end'}
        >{value}</text>
        <text
          x={lx} y={midY + 5}
          fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif"
          textAnchor={labelSide === 'right' ? 'start' : 'end'}
        >{label}</text>
      </g>
    )
  }

  return (
    <svg
      viewBox="0 0 560 350"
      width="100%"
      style={{ display: 'block' }}
      role="img"
      aria-label="Earth's global energy budget showing solar input, reflection, greenhouse effect, and outgoing longwave radiation"
    >
      <rect width="560" height="350" fill={c.bg} rx="4" />

      {/* ── Zone backgrounds ── */}
      {/* Space */}
      <rect x="20" y={spaceY.top} width="520" height={spaceY.bot - spaceY.top} rx="3" fill={c.surfaceHi} opacity="0.4" />
      <text x="30" y={spaceY.top + 16} fill={c.textSubtle} fontSize="8.5" fontFamily="monospace" fontWeight="600">SPACE</text>

      {/* Atmosphere */}
      <rect x="20" y={atmosY.top} width="520" height={atmosY.bot - atmosY.top} rx="3" fill={c.surface} />
      <rect x="20" y={atmosY.top} width="520" height={atmosY.bot - atmosY.top} rx="3" fill={c.accent} opacity="0.05" />
      <text x="30" y={atmosY.top + 16} fill={c.accent} fontSize="8.5" fontFamily="monospace" fontWeight="600">ATMOSPHERE</text>
      {/* Greenhouse effect note */}
      <text x="30" y={atmosY.top + 30} fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">H₂O · CO₂ · CH₄ · N₂O absorb &amp; re-emit IR</text>

      {/* Surface */}
      <rect x="20" y={surfaceY.top} width="520" height={surfaceY.bot - surfaceY.top} rx="3" fill={c.coral} opacity="0.12" />
      <text x="30" y={surfaceY.top + 20} fill={c.coral} fontSize="8.5" fontFamily="monospace" fontWeight="600">SURFACE</text>
      <text x="30" y={surfaceY.top + 33} fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">Ocean · Land · Ice</text>

      {/* ── Incoming solar (left column) ── */}
      {/* Total incoming: 340 W/m² from sun to atmosphere top */}
      <VArrow
        x={100} yFrom={spaceY.top + 4} yTo={atmosY.top}
        color={c.gold} width={3.5}
        value="340 W/m²" label="incoming solar" labelX={110} labelSide="right"
      />
      {/* Solar through atmosphere to surface: 161 W/m² */}
      <VArrow
        x={100} yFrom={atmosY.top} yTo={surfaceY.top}
        color={c.gold} width={2.2}
        value="161 W/m²" label="absorbed by surface" labelX={110} labelSide="right"
      />

      {/* ── Reflected solar (second column) ── */}
      {/* Reflected by clouds/atmosphere: 77 W/m² */}
      <VArrow
        x={195} yFrom={atmosY.top} yTo={spaceY.bot}
        color={c.textSubtle} width={1.5}
        value="77 W/m²" label="reflected (clouds)" labelX={205} labelSide="right"
      />
      {/* Reflected by surface: 23 W/m² */}
      <VArrow
        x={225} yFrom={surfaceY.top} yTo={atmosY.bot}
        color={c.textSubtle} width={1.2}
        value="23 W/m²" label="reflected (surface)" labelX={235} labelSide="right"
      />
      {/* Note: 30% total albedo */}
      <text x={196} y={spaceY.top + 34} fill={c.textSubtle} fontSize="7.5" fontFamily="monospace">30% albedo total</text>

      {/* ── Atmospheric absorption label (inside atmosphere box) ── */}
      <text x={100} y={zoneMid(atmosY) - 5} fill={c.textDim} fontSize="8" fontFamily="sans-serif" textAnchor="middle">
        79 W/m² absorbed by atm.
      </text>

      {/* ── Outgoing longwave radiation (right columns) ── */}
      {/* Surface IR emission upward: 396 W/m² */}
      <VArrow
        x={360} yFrom={surfaceY.top} yTo={atmosY.bot}
        color={c.coral} width={3.5}
        value="396 W/m²" label="IR emitted by surface" labelX={370} labelSide="right"
      />
      {/* Greenhouse back-radiation (atmosphere → surface): 333 W/m² */}
      <VArrow
        x={330} yFrom={atmosY.bot} yTo={surfaceY.top}
        color={c.amethyst} width={3}
        value="333 W/m²" label="greenhouse back-radiation" labelX={340} labelSide="right"
      />
      {/* Outgoing IR to space from atmosphere: 199 W/m² */}
      <VArrow
        x={360} yFrom={atmosY.top} yTo={spaceY.bot}
        color={c.coral} width={2}
        value="199 W/m²" label="outgoing IR to space" labelX={370} labelSide="right"
      />

      {/* ── Net balance note ── */}
      <text x="280" y="342" textAnchor="middle" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">
        In equilibrium: incoming absorbed (240 W/m²) = outgoing IR (240 W/m²)  ·  values: Trenberth et al. 2009
      </text>
    </svg>
  )
}
