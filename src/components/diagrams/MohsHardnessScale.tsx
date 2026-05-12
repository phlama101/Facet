'use client'

// Mohs hardness scale (1–10) with mineral examples and everyday reference objects.
export function MohsHardnessScale() {
  const c = {
    bg:        '#0E0F14',
    surface:   '#16181F',
    border:    '#2A2D38',
    text:      '#EDEEF2',
    textDim:   '#9CA0AE',
    textSubtle:'#6B6F7C',
    coral:     '#F28C76',
    gold:      '#E4B74A',
    jade:      '#7FC29B',
    accent:    '#7AD7F0',
    amethyst:  '#B57EDC',
    ruby:      '#E25B6E',
  }

  const minerals = [
    { h: 1,  name: 'Talc',      color: c.coral,    ref: 'Scratched by fingernail (2.5)' },
    { h: 2,  name: 'Gypsum',    color: c.coral,    ref: 'Scratched by fingernail (2.5)' },
    { h: 3,  name: 'Calcite',   color: '#D4874A',  ref: 'Scratched by copper coin (3.5)' },
    { h: 4,  name: 'Fluorite',  color: c.gold,     ref: 'Scratched easily by knife blade' },
    { h: 5,  name: 'Apatite',   color: '#B4B44A',  ref: 'Scratched by knife (5.5); scratches glass' },
    { h: 6,  name: 'Feldspar',  color: c.jade,     ref: 'Scratches glass (5.5); scratched by steel file' },
    { h: 7,  name: 'Quartz',    color: c.accent,   ref: 'Scratches steel; very common in crust' },
    { h: 8,  name: 'Topaz',     color: '#8EB7DC',  ref: 'Scratches quartz; gemstone' },
    { h: 9,  name: 'Corundum',  color: c.amethyst, ref: 'Ruby & sapphire; only diamond harder' },
    { h: 10, name: 'Diamond',   color: c.ruby,     ref: 'Hardest natural substance; cuts everything' },
  ]

  const barAreaX  = 130
  const barMaxW   = 260
  const rowH      = 28
  const startY    = 28

  return (
    <svg viewBox="0 0 560 320" width="100%" style={{ display: 'block' }}
      role="img" aria-label="Mohs hardness scale from 1 (talc) to 10 (diamond) with mineral examples">
      <rect width="560" height="320" fill={c.bg} rx="4" />

      {/* Column headers */}
      <text x="20"          y="18" fill={c.textSubtle} fontSize="8.5" fontFamily="monospace">H</text>
      <text x="38"          y="18" fill={c.textSubtle} fontSize="8.5" fontFamily="monospace">Mineral</text>
      <text x={barAreaX}    y="18" fill={c.textSubtle} fontSize="8.5" fontFamily="monospace">Relative hardness</text>
      <text x={barAreaX + barMaxW + 12} y="18" fill={c.textSubtle} fontSize="8.5" fontFamily="monospace">Reference</text>

      {/* Reference lines at common scratch points */}
      {[2.5, 3.5, 5.5].map(h => (
        <line
          key={h}
          x1={barAreaX + (h / 10) * barMaxW} y1={startY - 4}
          x2={barAreaX + (h / 10) * barMaxW} y2={startY + rowH * 10 - 4}
          stroke={c.border}
          strokeWidth="1"
          strokeDasharray="3 2"
          opacity="0.5"
        />
      ))}
      <text x={barAreaX + 2.5 / 10 * barMaxW} y={startY + rowH * 10 + 10} fill={c.textSubtle} fontSize="7" fontFamily="sans-serif" textAnchor="middle">Fingernail</text>
      <text x={barAreaX + 3.5 / 10 * barMaxW} y={startY + rowH * 10 + 10} fill={c.textSubtle} fontSize="7" fontFamily="sans-serif" textAnchor="middle">Coin</text>
      <text x={barAreaX + 5.5 / 10 * barMaxW} y={startY + rowH * 10 + 10} fill={c.textSubtle} fontSize="7" fontFamily="sans-serif" textAnchor="middle">Glass / Knife</text>

      {minerals.map(({ h, name, color, ref }, i) => {
        const y = startY + i * rowH
        const bw = (h / 10) * barMaxW
        return (
          <g key={h}>
            {/* Row background alt */}
            <rect x="8" y={y - 2} width="544" height={rowH - 2} fill={i % 2 === 0 ? c.surface : 'transparent'} rx="2" />

            {/* Hardness number */}
            <text x="22" y={y + rowH / 2 + 4} textAnchor="middle" fill={color} fontSize="11" fontWeight="700" fontFamily="monospace">{h}</text>

            {/* Mineral name */}
            <text x="38" y={y + rowH / 2 + 4} fill={c.text} fontSize="9.5" fontFamily="monospace">{name}</text>

            {/* Hardness bar */}
            <rect x={barAreaX} y={y + 4} width={bw} height={rowH - 10} fill={color} opacity="0.7" rx="2" />

            {/* Reference object */}
            <text x={barAreaX + barMaxW + 12} y={y + rowH / 2 + 4} fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">{ref}</text>
          </g>
        )
      })}

      <text x="280" y="312" textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">
        Mohs (1812) · scale is ordinal not linear · diamond (~1,500 Vickers) is ~4× harder than corundum (~2,000 Vickers gap)
      </text>
    </svg>
  )
}
