'use client'

// Three-cell model of global atmospheric circulation.
// Shows Hadley, Ferrel, and Polar cells with surface wind belts.
// Valid for both hemispheres (shown as Northern Hemisphere by convention).
export function AtmosphericCirculationCells() {
  const c = {
    hadley:  '#F28C76',   // coral — Hadley cell
    ferrel:  '#E4B74A',   // gold  — Ferrel cell
    polar:   '#7AD7F0',   // accent — Polar cell
    itcz:    '#B57EDC',   // amethyst — ITCZ
    bg:      '#0E0F14',
    surface: '#16181F',
    border:  '#2A2D38',
    text:    '#EDEEF2',
    textDim: '#9CA0AE',
    textSubtle: '#6B6F7C',
  }

  // Layout: hemisphere shown as a rectangle
  // Y: latitude from Equator (bottom, y=310) to North Pole (top, y=30)
  // X: ground (left, x=90) to tropopause (right, x=290)
  const groundX  = 90
  const tropoX   = 290
  const eqY      = 310   // equator
  const lat30Y   = 185   // 30°N (descending limb of Hadley / ascending of Ferrel)
  const lat60Y   = 95    // 60°N (ascending limb of Polar / descending of Ferrel)
  const poleY    = 30    // 90°N

  // Arrow helper: a simple arrow with arrowhead
  const Arrow = ({ x1, y1, x2, y2, color, dash = false }: {
    x1: number; y1: number; x2: number; y2: number; color: string; dash?: boolean
  }) => {
    const dx = x2 - x1, dy = y2 - y1
    const len = Math.sqrt(dx * dx + dy * dy)
    const ux = dx / len, uy = dy / len
    const aw = 5
    const p1x = x2 - ux * 8 + uy * aw, p1y = y2 - uy * 8 - ux * aw
    const p2x = x2 - ux * 8 - uy * aw, p2y = y2 - uy * 8 + ux * aw
    return (
      <g>
        <line x1={x1} y1={y1} x2={x2 - ux * 8} y2={y2 - uy * 8}
          stroke={color} strokeWidth="1.5" opacity="0.85"
          strokeDasharray={dash ? '5 3' : undefined} />
        <polygon points={`${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}`} fill={color} opacity="0.85" />
      </g>
    )
  }

  // Cell loop helper (curved path on tropopause or surface)
  // Each cell has: rising air, poleward aloft, sinking air, equatorward at surface
  return (
    <svg viewBox="0 0 560 360" width="100%" style={{ display: 'block' }}
      role="img" aria-label="Three-cell atmospheric circulation model showing Hadley, Ferrel, and Polar cells with trade winds, westerlies, and polar easterlies">
      <rect width="560" height="360" fill={c.bg} rx="4" />

      {/* ── Coordinate box ── */}
      <rect x={groundX} y={poleY} width={tropoX - groundX} height={eqY - poleY}
        fill={c.surface} rx="2" />

      {/* Latitude boundary lines */}
      {[{ y: lat30Y, label: '30°N', dash: true }, { y: lat60Y, label: '60°N', dash: true }].map(({ y, label, dash }) => (
        <g key={y}>
          <line x1={groundX} y1={y} x2={tropoX} y2={y} stroke={c.border} strokeWidth="1" strokeDasharray={dash ? '4 3' : undefined} />
          <text x={groundX - 6} y={y + 4} textAnchor="end" fill={c.textSubtle} fontSize="8.5" fontFamily="monospace">{label}</text>
        </g>
      ))}
      {/* Pole and Equator labels */}
      <text x={groundX - 6} y={poleY + 4} textAnchor="end" fill={c.textSubtle} fontSize="8.5" fontFamily="monospace">90°N</text>
      <text x={groundX - 6} y={eqY + 4}   textAnchor="end" fill={c.textSubtle} fontSize="8.5" fontFamily="monospace">0° Eq</text>

      {/* Ground and tropopause lines */}
      <line x1={groundX} y1={poleY} x2={groundX} y2={eqY} stroke={c.border} strokeWidth="1.5" />
      <line x1={tropoX}  y1={poleY} x2={tropoX}  y2={eqY} stroke={c.border} strokeWidth="1"   strokeDasharray="4 3" />
      <text x={tropoX + 5} y={poleY + 4} fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">Tropopause</text>
      <text x={groundX - 6} y={(poleY + eqY) / 2} textAnchor="end" fill={c.textDim} fontSize="8" fontFamily="sans-serif"
        transform={`rotate(-90 ${groundX - 30} ${(poleY + eqY) / 2})`}>Ground surface</text>

      {/* ── Cell backgrounds ── */}
      <rect x={groundX} y={lat30Y} width={tropoX - groundX} height={eqY - lat30Y} fill={c.hadley} opacity="0.07" />
      <rect x={groundX} y={lat60Y} width={tropoX - groundX} height={lat30Y - lat60Y} fill={c.ferrel} opacity="0.07" />
      <rect x={groundX} y={poleY}  width={tropoX - groundX} height={lat60Y - poleY}  fill={c.polar}  opacity="0.07" />

      {/* Cell labels */}
      <text x={(groundX + tropoX) / 2} y={(lat30Y + eqY) / 2 - 5} textAnchor="middle" fill={c.hadley} fontSize="11" fontWeight="700" fontFamily="monospace">Hadley Cell</text>
      <text x={(groundX + tropoX) / 2} y={(lat60Y + lat30Y) / 2 - 5} textAnchor="middle" fill={c.ferrel} fontSize="11" fontWeight="700" fontFamily="monospace">Ferrel Cell</text>
      <text x={(groundX + tropoX) / 2} y={(poleY + lat60Y) / 2 - 5}  textAnchor="middle" fill={c.polar}  fontSize="11" fontWeight="700" fontFamily="monospace">Polar Cell</text>

      {/* ══ HADLEY CELL circulation arrows ══ */}
      {/* 1. Rising air at ITCZ (equator, along ground side) */}
      <Arrow x1={groundX + 20} y1={eqY} x2={groundX + 20} y2={lat30Y + 20} color={c.hadley} />
      {/* 2. Poleward flow aloft → 30°N */}
      <Arrow x1={groundX + 20} y1={lat30Y + 20} x2={tropoX - 20} y2={lat30Y + 5} color={c.hadley} />
      {/* 3. Sinking air at 30°N (along tropo side) */}
      <Arrow x1={tropoX - 20} y1={lat30Y + 5} x2={tropoX - 20} y2={eqY - 10} color={c.hadley} />
      {/* 4. Equatorward return flow at surface (trade winds) */}
      <Arrow x1={tropoX - 20} y1={eqY - 10} x2={groundX + 20} y2={eqY - 5} color={c.hadley} />

      {/* ══ FERREL CELL circulation arrows ══ */}
      {/* 1. Rising at 60°N (surface) */}
      <Arrow x1={groundX + 20} y1={lat30Y} x2={groundX + 20} y2={lat60Y + 10} color={c.ferrel} />
      {/* 2. Poleward aloft → 60°N */}
      <Arrow x1={groundX + 20} y1={lat60Y + 10} x2={tropoX - 20} y2={lat60Y + 5} color={c.ferrel} />
      {/* 3. Sinking at 30°N */}
      <Arrow x1={tropoX - 20} y1={lat60Y + 5} x2={tropoX - 20} y2={lat30Y + 5} color={c.ferrel} />
      {/* 4. Surface return 30→60° (westerlies) */}
      <Arrow x1={tropoX - 20} y1={lat30Y + 5} x2={groundX + 20} y2={lat30Y} color={c.ferrel} />

      {/* ══ POLAR CELL circulation arrows ══ */}
      {/* 1. Rising at 60°N (surface) */}
      <Arrow x1={tropoX - 20} y1={lat60Y} x2={tropoX - 20} y2={poleY + 15} color={c.polar} />
      {/* 2. Aloft toward pole */}
      <Arrow x1={tropoX - 20} y1={poleY + 15} x2={groundX + 20} y2={poleY + 10} color={c.polar} />
      {/* 3. Sinking at pole */}
      <Arrow x1={groundX + 20} y1={poleY + 10} x2={groundX + 20} y2={lat60Y} color={c.polar} />
      {/* 4. Surface polar easterlies */}
      <Arrow x1={groundX + 20} y1={lat60Y} x2={tropoX - 20} y2={lat60Y + 5} color={c.polar} />

      {/* ── Surface wind belt labels (right side) ── */}
      <g>
        <text x={320} y={(lat30Y + eqY) / 2 + 4} fill={c.hadley} fontSize="10" fontWeight="600" fontFamily="monospace">Trade Winds</text>
        <text x={320} y={(lat30Y + eqY) / 2 + 16} fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">(NE in NH; surface)</text>

        <text x={320} y={(lat60Y + lat30Y) / 2 + 4} fill={c.ferrel} fontSize="10" fontWeight="600" fontFamily="monospace">Westerlies</text>
        <text x={320} y={(lat60Y + lat30Y) / 2 + 16} fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">(SW in NH; surface)</text>

        <text x={320} y={(poleY + lat60Y) / 2 + 4} fill={c.polar} fontSize="10" fontWeight="600" fontFamily="monospace">Polar Easterlies</text>
        <text x={320} y={(poleY + lat60Y) / 2 + 16} fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">(NE in NH; surface)</text>
      </g>

      {/* ── Special zones ── */}
      {/* ITCZ */}
      <line x1={groundX} y1={eqY - 8} x2={tropoX} y2={eqY - 8} stroke={c.itcz} strokeWidth="1.5" strokeDasharray="5 2" />
      <text x={320} y={eqY - 4} fill={c.itcz} fontSize="8.5" fontWeight="600" fontFamily="monospace">ITCZ</text>
      <text x={320} y={eqY + 7} fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">Intertropical Convergence Zone</text>

      {/* Subtropical high / Horse latitudes */}
      <text x={320} y={lat30Y - 4} fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">Subtropical High (30°N)</text>

      {/* Sub-polar low */}
      <text x={320} y={lat60Y - 4} fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">Subpolar Low (60°N)</text>

      <text x="280" y="350" textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">
        Idealised symmetric atmosphere · actual cells are asymmetric by season and geography
      </text>
    </svg>
  )
}
