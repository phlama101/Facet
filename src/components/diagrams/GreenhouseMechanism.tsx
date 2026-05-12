'use client'

// Molecular-level greenhouse effect mechanism.
// Shows: shortwave solar passing through atmosphere, surface IR emission,
// GHG absorption/re-emission, and net surface warming.
export function GreenhouseMechanism() {
  const c = {
    solar:    '#E4B74A',   // gold — incoming solar (shortwave)
    ir:       '#F28C76',   // coral — outgoing/downward IR (longwave)
    ghg:      '#7AD7F0',   // accent — greenhouse gas molecules
    surface:  '#7FC29B',   // jade — Earth surface
    bg:       '#0E0F14',
    atmo:     '#1A2030',   // atmosphere band
    border:   '#2A2D38',
    text:     '#EDEEF2',
    textDim:  '#9CA0AE',
    textSubtle: '#6B6F7C',
  }

  // Layout zones
  const spaceTop   = 10
  const atmoTop    = 65
  const atmoBot    = 230
  const surfaceTop = 240
  const surfaceBot = 270

  // Arrow helper (angled)
  const Ray = ({ x1, y1, x2, y2, color, dashed = false, width = 2 }: {
    x1: number; y1: number; x2: number; y2: number; color: string; dashed?: boolean; width?: number
  }) => {
    const dx = x2 - x1, dy = y2 - y1
    const len = Math.sqrt(dx * dx + dy * dy)
    const ux = dx / len, uy = dy / len
    const aw = 5
    const p1x = x2 - ux * 9 + uy * aw, p1y = y2 - uy * 9 - ux * aw
    const p2x = x2 - ux * 9 - uy * aw, p2y = y2 - uy * 9 + ux * aw
    return (
      <g opacity="0.85">
        <line x1={x1} y1={y1} x2={x2 - ux * 9} y2={y2 - uy * 9}
          stroke={color} strokeWidth={width}
          strokeDasharray={dashed ? '6 3' : undefined} />
        <polygon points={`${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}`} fill={color} />
      </g>
    )
  }

  // GHG molecule (wavy symbol)
  const Molecule = ({ cx, cy, label }: { cx: number; cy: number; label: string }) => (
    <g>
      <ellipse cx={cx} cy={cy} rx="18" ry="10" fill={c.ghg} opacity="0.2" stroke={c.ghg} strokeWidth="1" />
      <text x={cx} y={cy + 4} textAnchor="middle" fill={c.ghg} fontSize="8" fontFamily="monospace">{label}</text>
    </g>
  )

  return (
    <svg viewBox="0 0 560 300" width="100%" style={{ display: 'block' }}
      role="img" aria-label="Greenhouse effect mechanism: shortwave solar passes through atmosphere, surface emits IR, greenhouse gases absorb and re-emit IR warming the surface">
      <rect width="560" height="300" fill={c.bg} rx="4" />

      {/* ── Zone backgrounds ── */}
      <rect x="10" y={spaceTop}   width="540" height={atmoTop - spaceTop}    fill={c.bg}   />
      <rect x="10" y={atmoTop}    width="540" height={atmoBot - atmoTop}     fill={c.atmo} rx="2" />
      <rect x="10" y={surfaceTop} width="540" height={surfaceBot - surfaceTop} fill={c.surface} opacity="0.4" rx="2" />

      {/* Zone labels */}
      <text x="18" y={spaceTop + 18}  fill={c.textSubtle} fontSize="8" fontFamily="monospace">SPACE</text>
      <text x="18" y={atmoTop + 18}   fill={c.textDim}    fontSize="8" fontFamily="monospace">ATMOSPHERE</text>
      <text x="18" y={surfaceTop + 20} fill={c.surface}   fontSize="8" fontFamily="monospace">SURFACE</text>

      {/* Sun symbol */}
      <circle cx="50" cy="40" r="14" fill={c.solar} opacity="0.8" />
      <text x="50" y="44" textAnchor="middle" fill={c.bg} fontSize="8" fontFamily="monospace">SUN</text>
      {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => {
        const rad = deg * Math.PI / 180
        return <line key={deg} x1={50 + 17 * Math.cos(rad)} y1={40 + 17 * Math.sin(rad)}
          x2={50 + 22 * Math.cos(rad)} y2={40 + 22 * Math.sin(rad)}
          stroke={c.solar} strokeWidth="1.5" opacity="0.7" />
      })}

      {/* ── Column 1: Incoming solar (shortwave) ── */}
      {/* Solar rays pass STRAIGHT THROUGH atmosphere */}
      <Ray x1={90} y1={atmoTop + 5}  x2={90}  y2={surfaceTop - 5} color={c.solar} width={2.5} />
      <Ray x1={120} y1={atmoTop + 5} x2={120} y2={surfaceTop - 5} color={c.solar} width={2.5} />
      <Ray x1={150} y1={atmoTop + 5} x2={150} y2={surfaceTop - 5} color={c.solar} width={2.5} />
      {/* Label */}
      <text x="120" y={atmoTop + 60} textAnchor="middle" fill={c.solar} fontSize="9" fontWeight="600" fontFamily="monospace">Shortwave solar</text>
      <text x="120" y={atmoTop + 74} textAnchor="middle" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">Passes through</text>
      <text x="120" y={atmoTop + 85} textAnchor="middle" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">GHG transparent</text>

      {/* ── GHG molecules in atmosphere ── */}
      <Molecule cx={270} cy={atmoTop + 50}  label="CO₂" />
      <Molecule cx={310} cy={atmoTop + 80}  label="H₂O" />
      <Molecule cx={250} cy={atmoTop + 110} label="CH₄" />
      <Molecule cx={295} cy={atmoTop + 130} label="CO₂" />
      <Molecule cx={330} cy={atmoTop + 55}  label="H₂O" />
      <Molecule cx={355} cy={atmoTop + 100} label="N₂O" />

      {/* ── Column 2: Surface IR emission upward ── */}
      <Ray x1={240} y1={surfaceTop - 5} x2={240} y2={atmoTop + 40}  color={c.ir} width={2} />
      <text x="240" y={atmoTop - 6} textAnchor="middle" fill={c.ir} fontSize="8.5" fontWeight="600" fontFamily="monospace">IR from surface</text>
      <text x="240" y={atmoTop + 10} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">longwave, blocked</text>

      {/* Absorption: ray hits molecule and scatters */}
      <circle cx="270" cy={atmoTop + 42} r="3" fill={c.ir} opacity="0.8" />

      {/* ── Column 3: GHG re-emission (back radiation) ── */}
      {/* Back toward surface */}
      <Ray x1={310} y1={atmoTop + 90} x2={310} y2={surfaceTop - 5} color={c.ir} width={2.5} />
      {/* Upward toward space */}
      <Ray x1={330} y1={atmoTop + 80} x2={330} y2={atmoTop + 5}   color={c.ir} width={1.5} dashed />

      <text x="360" y={atmoTop + 50} fill={c.ir} fontSize="9" fontWeight="600" fontFamily="monospace">Re-emitted IR</text>
      <text x="360" y={atmoTop + 64} fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">~50% downward</text>
      <text x="360" y={atmoTop + 76} fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">~50% to space</text>

      {/* Back radiation label */}
      <text x="310" y={surfaceTop + 15} textAnchor="middle" fill={c.ir} fontSize="8.5" fontWeight="600" fontFamily="monospace">Back-radiation</text>
      <text x="310" y={surfaceTop + 26} textAnchor="middle" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">~333 W m⁻² warms surface</text>

      {/* Net result annotation */}
      <rect x="400" y={atmoTop} width="148" height="120" rx="3" fill={c.bg} stroke={c.border} strokeWidth="1" opacity="0.9" />
      <text x="474" y={atmoTop + 18} textAnchor="middle" fill={c.text} fontSize="9" fontWeight="700" fontFamily="monospace">Net Effect</text>
      <text x="474" y={atmoTop + 34} textAnchor="middle" fill={c.textDim} fontSize="8" fontFamily="sans-serif">Surface 33°C warmer</text>
      <text x="474" y={atmoTop + 46} textAnchor="middle" fill={c.textDim} fontSize="8" fontFamily="sans-serif">than without GHGs</text>
      <text x="474" y={atmoTop + 62} textAnchor="middle" fill={c.solar} fontSize="8" fontFamily="monospace">Solar in: 161 W m⁻²</text>
      <text x="474" y={atmoTop + 76} textAnchor="middle" fill={c.ir} fontSize="8" fontFamily="monospace">Back-rad: 333 W m⁻²</text>
      <text x="474" y={atmoTop + 90} textAnchor="middle" fill={c.textDim} fontSize="8" fontFamily="sans-serif">Surface absorbs</text>
      <text x="474" y={atmoTop + 103} textAnchor="middle" fill={c.textDim} fontSize="8" fontFamily="sans-serif">494 W m⁻² total</text>

      <text x="280" y="292" textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">
        Natural greenhouse effect: +33°C  ·  Enhanced (anthropogenic): additional +1.2°C so far
      </text>
    </svg>
  )
}
