'use client'

// Magma viscosity spectrum: basaltic (low) to rhyolitic (high).
// Shows SiO₂ content, temperature, gas content as controlling factors.
export function MagmaViscosity() {
  const c = {
    basalt:   '#7AD7F0',   // accent — low viscosity / basaltic
    andesite: '#7FC29B',   // jade — intermediate
    dacite:   '#E4B74A',   // gold — dacite
    rhyolite: '#F28C76',   // coral — high viscosity / rhyolitic
    eruption: '#E25B6E',   // ruby — explosive
    bg:       '#0E0F14',
    surface:  '#16181F',
    border:   '#2A2D38',
    text:     '#EDEEF2',
    textDim:  '#9CA0AE',
    textSubtle:'#6B6F7C',
  }

  const W = 560, H = 340
  const barY = 60, barH = 40
  const arrowY = 120

  // Spectrum bar: left=low viscosity (basalt), right=high viscosity (rhyolite)
  const barX = 40, barW = W - 80

  // SiO₂ scale: 45% (basalt) to 75% (rhyolite)
  const sio2ToX = (pct: number) => barX + ((pct - 45) / 30) * barW

  const magmaTypes = [
    { name: 'Basalt',    sio2: 50,  T: 1200, viscPa: '10²',  color: c.basalt,   erupt: 'Effusive flows' },
    { name: 'Andesite',  sio2: 57,  T: 1050, viscPa: '10⁵',  color: c.andesite, erupt: 'Lava flows / domes' },
    { name: 'Dacite',    sio2: 65,  T: 900,  viscPa: '10⁸',  color: c.dacite,   erupt: 'Explosive / domes' },
    { name: 'Rhyolite',  sio2: 72,  T: 800,  viscPa: '10¹¹', color: c.rhyolite, erupt: 'Highly explosive' },
  ]

  // Viscosity bar rows
  const rows = [
    { label: 'SiO₂',       left: '~45%',   right: '~75%',  subleft: '(basalt)',   subright: '(rhyolite)' },
    { label: 'Temperature', left: '~1200°C',right: '~800°C',subleft: 'higher T',   subright: 'lower T' },
    { label: 'Gas content', left: 'low',    right: 'high',  subleft: 'CO₂, H₂O',  subright: 'trapped gas' },
    { label: 'Eruption',    left: 'effusive',right:'explosive',subleft:'Mauna Loa',subright:'Mt. Pinatubo' },
  ]

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}
      role="img" aria-label="Magma viscosity spectrum from low-viscosity basalt to high-viscosity rhyolite showing the role of SiO₂ content, temperature, and gas content">
      <rect width={W} height={H} fill={c.bg} rx="4" />

      <text x="280" y="20" textAnchor="middle" fill={c.text} fontSize="11" fontWeight="700" fontFamily="monospace">
        Magma Viscosity Spectrum
      </text>
      <text x="280" y="34" textAnchor="middle" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">
        Higher SiO₂ → longer silicate chains → higher viscosity → more explosive eruptions
      </text>

      {/* Gradient bar */}
      <defs>
        <linearGradient id="viscGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%"   stopColor={c.basalt}   stopOpacity="0.9" />
          <stop offset="33%"  stopColor={c.andesite} stopOpacity="0.9" />
          <stop offset="66%"  stopColor={c.dacite}   stopOpacity="0.9" />
          <stop offset="100%" stopColor={c.rhyolite} stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect x={barX} y={barY} width={barW} height={barH} rx="4" fill="url(#viscGrad)" opacity="0.5" />
      <rect x={barX} y={barY} width={barW} height={barH} rx="4" fill="none" stroke={c.border} strokeWidth="1" />

      {/* Magma type markers on bar */}
      {magmaTypes.map((m, i) => {
        const mx = sio2ToX(m.sio2)
        return (
          <g key={i}>
            <line x1={mx} y1={barY - 2} x2={mx} y2={barY + barH + 2}
              stroke={m.color} strokeWidth="1.5" opacity="0.8" />
            <text x={mx} y={barY - 8} textAnchor="middle"
              fill={m.color} fontSize="8.5" fontWeight="700" fontFamily="monospace">{m.name}</text>
            <text x={mx} y={barY + barH + 14} textAnchor="middle"
              fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">{m.sio2}% SiO₂</text>
            <text x={mx} y={barY + barH + 24} textAnchor="middle"
              fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">{m.T}°C</text>
            <text x={mx} y={barY + barH + 34} textAnchor="middle"
              fill={m.color} fontSize="7" fontFamily="monospace">η≈{m.viscPa} Pa·s</text>
          </g>
        )
      })}

      {/* Viscosity arrow */}
      <line x1={barX + 10} y1={arrowY + 60} x2={barX + barW - 10} y2={arrowY + 60}
        stroke={c.textDim} strokeWidth="2" />
      <polygon points={`${barX + barW - 10},${arrowY + 56} ${barX + barW - 10},${arrowY + 64} ${barX + barW + 2},${arrowY + 60}`}
        fill={c.textDim} />
      <text x={barX + barW / 2} y={arrowY + 54} textAnchor="middle"
        fill={c.textDim} fontSize="9" fontWeight="700" fontFamily="monospace">Increasing viscosity →</text>
      <text x={barX + 10} y={arrowY + 74} fill={c.basalt} fontSize="8" fontFamily="monospace">~10² Pa·s (water: 10⁻³)</text>
      <text x={barX + barW} y={arrowY + 74} textAnchor="end" fill={c.rhyolite} fontSize="8" fontFamily="monospace">~10¹¹ Pa·s (tar: 10⁶)</text>

      {/* Factor rows */}
      {rows.map((row, i) => {
        const ry = arrowY + 100 + i * 36
        return (
          <g key={i}>
            <rect x="14" y={ry} width="72" height="26" rx="2" fill={c.surface} stroke={c.border} strokeWidth="0.8" />
            <text x="50" y={ry + 16} textAnchor="middle" fill={c.textDim} fontSize="8.5" fontWeight="600" fontFamily="monospace">{row.label}</text>
            {/* Left */}
            <text x={barX + 4} y={ry + 11} fill={c.basalt} fontSize="8" fontFamily="monospace">{row.left}</text>
            <text x={barX + 4} y={ry + 22} fill={c.textSubtle} fontSize="7" fontFamily="sans-serif">{row.subleft}</text>
            {/* Right */}
            <text x={barX + barW} y={ry + 11} textAnchor="end" fill={c.rhyolite} fontSize="8" fontFamily="monospace">{row.right}</text>
            <text x={barX + barW} y={ry + 22} textAnchor="end" fill={c.textSubtle} fontSize="7" fontFamily="sans-serif">{row.subright}</text>
            {/* Gradient bar */}
            <rect x={barX} y={ry + 2} width={barW} height={22} rx="2"
              fill={i === 3 ? c.eruption : c.textDim} opacity="0.05" stroke={c.border} strokeWidth="0.5" />
          </g>
        )
      })}

      <text x="280" y={H - 8} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">
        Water (H₂O) dissolved in magma lowers viscosity · degassing as magma rises causes explosive fragmentation
      </text>
    </svg>
  )
}
