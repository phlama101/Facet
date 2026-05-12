'use client'

// Ocean floor topographic cross-section from continent to trench.
// Depth values from GEBCO / NOAA ocean floor data.
export function OceanFloorTopography() {
  const c = {
    continent:  '#F28C76',   // coral
    shelf:      '#7AD7F0',   // accent — shallow ocean
    slope:      '#6B9DC2',   // mid-blue
    abyss:      '#2D4E6A',   // deep blue
    ridge:      '#B57EDC',   // amethyst — mid-ocean ridge
    trench:     '#E25B6E',   // ruby — trench
    bg:         '#0E0F14',
    border:     '#2A2D38',
    text:       '#EDEEF2',
    textDim:    '#9CA0AE',
    textSubtle: '#6B6F7C',
    water:      '#1A2E4A',
  }

  const W = 560
  const seaY = 70      // sea surface y coordinate
  const maxDepthPx = 240  // pixels for max depth (11 km)

  // depth (metres) → y position
  const dy = (m: number) => seaY + (m / 11000) * maxDepthPx

  // Cross-section profile points (x, depth_m)
  // Left: continent above sea level, then shelf, slope, abyss, ridge, abyss, trench
  const profile: [number, number][] = [
    [0,   -800],   // continent surface (above sea)
    [70,  -600],
    [100, -200],   // coastline
    [115,  0   ],  // sea surface
    [130,  50  ],  // shallow shelf start
    [200,  200 ],  // shelf break (200m)
    [240, 1500 ],  // upper continental slope
    [270, 3000 ],  // lower continental slope
    [300, 4000 ],  // abyssal plain begins
    [330, 4100 ],
    [360, 4000 ],
    [390, 3500 ],  // approaching mid-ocean ridge
    [420, 2500 ],  // ridge flank
    [440, 2000 ],  // ridge crest (~2000m below surface)
    [460, 2500 ],  // ridge flank other side
    [480, 3500 ],
    [490, 4000 ],  // abyssal plain resumes
    [510, 4200 ],
    [520, 5000 ],  // trench approach
    [530, 8000 ],  // trench wall
    [535, 11000],  // trench bottom (Mariana ~11km)
    [540, 8000 ],  // trench wall
    [550, 4000 ],  // beyond trench
    [560, 3500 ],
  ]

  // Convert to SVG points for ocean floor polygon
  const floorPts = profile.map(([x, d]) => {
    const y = d < 0 ? seaY - (Math.abs(d) / 800) * 40 : dy(d)  // scale land height for visibility
    return `${x},${Math.min(y, 310)}`
  })

  // Sea water fill polygon (between sea surface and floor)
  const waterPts = [
    `115,${seaY}`,
    ...profile.filter(([x]) => x >= 115).map(([x, d]) => `${x},${Math.min(dy(d), 310)}`),
    `560,${seaY}`,
  ]

  // Depth gridlines
  const depthLines = [0, 1000, 2000, 3000, 4000, 6000, 8000, 11000]

  return (
    <svg viewBox="0 0 560 340" width="100%" style={{ display: 'block' }}
      role="img" aria-label="Ocean floor topography cross-section showing continental shelf, slope, abyssal plain, mid-ocean ridge, and trench">
      <rect width="560" height="340" fill={c.bg} rx="4" />

      {/* Ocean water fill */}
      <polygon points={waterPts.join(' ')} fill={c.water} opacity="0.5" />

      {/* Depth gridlines */}
      {depthLines.filter(d => d > 0 && d <= 11000).map((d) => (
        <g key={d}>
          <line x1="115" y1={dy(d)} x2="555" y2={dy(d)} stroke={c.border} strokeWidth="0.5" opacity="0.4" />
        </g>
      ))}

      {/* Sea surface line */}
      <line x1="115" y1={seaY} x2="560" y2={seaY} stroke={c.shelf} strokeWidth="1.5" opacity="0.6" />
      <text x="118" y={seaY - 5} fill={c.shelf} fontSize="8" fontFamily="monospace">Sea level (0 m)</text>

      {/* Continent fill (above sea level) */}
      <polygon
        points={`0,310 0,${dy(-800) - 40} ${floorPts.slice(0, 4).join(' ')} 115,${seaY} 0,${seaY}`}
        fill={c.continent}
        opacity="0.8"
      />

      {/* Ocean floor profile line */}
      <polyline
        points={floorPts.join(' ')}
        fill="none"
        stroke={c.textDim}
        strokeWidth="1.5"
      />

      {/* Depth axis labels (left side) */}
      {depthLines.map((d) => (
        <g key={d}>
          <line x1="108" y1={dy(d)} x2="115" y2={dy(d)} stroke={c.textSubtle} strokeWidth="0.8" />
          <text x="105" y={dy(d) + 3} textAnchor="end" fill={c.textSubtle} fontSize="7.5" fontFamily="monospace">
            {d === 0 ? '0' : `-${(d / 1000).toFixed(0)}km`}
          </text>
        </g>
      ))}
      <text x="80" y="185" textAnchor="middle" fill={c.textDim} fontSize="8.5" fontFamily="sans-serif"
        transform="rotate(-90 80 185)">Depth</text>

      {/* Feature labels */}
      {/* Continent */}
      <text x="40" y="45" textAnchor="middle" fill={c.continent} fontSize="9" fontWeight="700" fontFamily="monospace">Continent</text>
      {/* Continental shelf */}
      <text x="162" y={dy(100) - 8} textAnchor="middle" fill={c.shelf} fontSize="8" fontFamily="monospace">Shelf</text>
      <text x="162" y={dy(100) + 4} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">0–200 m</text>
      {/* Continental slope */}
      <text x="255" y={dy(1800) - 8} textAnchor="middle" fill={c.textDim} fontSize="8" fontFamily="monospace">Continental</text>
      <text x="255" y={dy(1800) + 4} textAnchor="middle" fill={c.textDim} fontSize="8" fontFamily="monospace">Slope</text>
      {/* Abyssal plain */}
      <text x="345" y={dy(4050) - 10} textAnchor="middle" fill={c.textDim} fontSize="8" fontFamily="monospace">Abyssal Plain</text>
      <text x="345" y={dy(4050) + 2} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">~4,000 m avg depth</text>
      {/* Mid-ocean ridge */}
      <text x="440" y={dy(1950) - 10} textAnchor="middle" fill={c.ridge} fontSize="8" fontWeight="700" fontFamily="monospace">Mid-Ocean Ridge</text>
      <text x="440" y={dy(1950) + 2} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">magma upwelling</text>
      {/* Trench */}
      <text x="535" y={dy(11000) - 10} textAnchor="middle" fill={c.trench} fontSize="8" fontWeight="700" fontFamily="monospace">Trench</text>
      <text x="535" y={dy(11000) + 2} textAnchor="middle" fill={c.trench} fontSize="7.5" fontFamily="sans-serif">~11 km</text>

      <text x="280" y="330" textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">
        Horizontal scale not linear · depths and features schematic · GEBCO / NOAA
      </text>
    </svg>
  )
}
