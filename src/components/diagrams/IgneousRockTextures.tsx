'use client'

// Igneous rock texture comparison: intrusive (coarse-grained) vs extrusive (fine-grained).
// Shows crystal size as a proxy for cooling rate and emplacement depth.
export function IgneousRockTextures() {
  const c = {
    felsic:  '#F28C76',   // coral — felsic minerals (feldspar, quartz)
    mafic:   '#7AD7F0',   // accent — mafic minerals (pyroxene, olivine)
    dark:    '#4A3828',   // dark — biotite, amphibole
    glassy:  '#9CA0AE',   // gray — volcanic glass / obsidian
    magma:   '#B57EDC',   // amethyst — magma
    bg:      '#0E0F14',
    surface: '#16181F',
    border:  '#2A2D38',
    text:    '#EDEEF2',
    textDim: '#9CA0AE',
    textSubtle: '#6B6F7C',
  }

  // Two panels
  const p1x = 20, p2x = 290
  const panW = 245, panH = 250
  const panY = 44

  // Generate interlocking crystal shapes for intrusive rock
  const IntrusiveCrystals = ({ x, y, w, h }: { x: number; y: number; w: number; h: number }) => {
    // Large crystals (~20-30px) in varied orientations
    const crystals = [
      { cx: x+30,  cy: y+35,  rx: 22, ry: 12, rot: 20,  fill: c.felsic },
      { cx: x+75,  cy: y+28,  rx: 18, ry: 10, rot: -15, fill: '#E0C5A0' },
      { cx: x+120, cy: y+40,  rx: 20, ry: 11, rot: 35,  fill: c.felsic },
      { cx: x+165, cy: y+32,  rx: 16, ry: 10, rot: -25, fill: '#C8B090' },
      { cx: x+50,  cy: y+70,  rx: 19, ry: 12, rot: 45,  fill: c.mafic },
      { cx: x+100, cy: y+75,  rx: 22, ry: 13, rot: 10,  fill: '#E0C5A0' },
      { cx: x+150, cy: y+68,  rx: 17, ry: 10, rot: -30, fill: c.felsic },
      { cx: x+200, cy: y+72,  rx: 20, ry: 12, rot: 55,  fill: c.mafic },
      { cx: x+25,  cy: y+108, rx: 21, ry: 11, rot: -10, fill: '#C8B090' },
      { cx: x+75,  cy: y+112, rx: 18, ry: 11, rot: 25,  fill: c.felsic },
      { cx: x+130, cy: y+105, rx: 20, ry: 13, rot: -40, fill: c.mafic },
      { cx: x+185, cy: y+110, rx: 19, ry: 11, rot: 15,  fill: '#C8B090' },
      { cx: x+220, cy: y+108, rx: 16, ry: 10, rot: -20, fill: c.felsic },
      { cx: x+45,  cy: y+148, rx: 22, ry: 12, rot: 30,  fill: c.felsic },
      { cx: x+100, cy: y+152, rx: 17, ry: 10, rot: -15, fill: c.mafic },
      { cx: x+155, cy: y+145, rx: 21, ry: 13, rot: 45,  fill: '#E0C5A0' },
      { cx: x+205, cy: y+150, rx: 18, ry: 10, rot: -35, fill: '#C8B090' },
    ]
    return (
      <g clipPath="url(#intrClip)">
        <defs>
          <clipPath id="intrClip">
            <rect x={x} y={y} width={w} height={h} />
          </clipPath>
        </defs>
        <rect x={x} y={y} width={w} height={h} fill="#2A1810" />
        {crystals.map((cr, i) => (
          <ellipse key={i} cx={cr.cx} cy={cr.cy} rx={cr.rx} ry={cr.ry}
            fill={cr.fill} opacity="0.85"
            transform={`rotate(${cr.rot} ${cr.cx} ${cr.cy})`}
            stroke={c.bg} strokeWidth="0.5"
          />
        ))}
      </g>
    )
  }

  // Generate fine-grained texture for extrusive rock
  const ExtrusiveCrystals = ({ x, y, w, h }: { x: number; y: number; w: number; h: number }) => {
    const tinyCount = 200
    const seed = [
      ...Array.from({ length: tinyCount }, (_, i) => ({
        cx: x + (i * 137.5 % w),
        cy: y + (i * 89.3 % h),
        r: 1 + (i * 23 % 3),
        fill: i % 5 < 2 ? c.felsic : i % 5 < 4 ? '#4A3828' : c.mafic,
      }))
    ]
    return (
      <g clipPath="url(#extrClip)">
        <defs>
          <clipPath id="extrClip">
            <rect x={x} y={y} width={w} height={h} />
          </clipPath>
        </defs>
        <rect x={x} y={y} width={w} height={h} fill="#1A1210" />
        {seed.map((dot, i) => (
          <circle key={i} cx={dot.cx} cy={dot.cy} r={dot.r} fill={dot.fill} opacity="0.6" />
        ))}
        {/* Vesicles (gas bubbles) */}
        {[{x:x+30,y:y+40},{x:x+90,y:y+95},{x:x+150,y:y+55},{x:x+60,y:y+130},{x:x+200,y:y+160}].map((v,i) => (
          <ellipse key={i} cx={v.x} cy={v.y} rx={3+i%3} ry={2+i%2} fill={c.bg} opacity="0.4" />
        ))}
      </g>
    )
  }

  return (
    <svg viewBox="0 0 560 340" width="100%" style={{ display: 'block' }}
      role="img" aria-label="Igneous rock texture comparison: coarse-grained intrusive (granite) vs fine-grained extrusive (basalt)">
      <rect width="560" height="340" fill={c.bg} rx="4" />

      {/* Panel 1: Intrusive (Granite) */}
      <rect x={p1x} y={panY} width={panW} height={panH} rx="3" fill={c.surface} stroke={c.felsic} strokeWidth="1.2" />
      <IntrusiveCrystals x={p1x+10} y={panY+40} w={panW-20} h={165} />
      <text x={p1x + panW/2} y={panY + 16}  textAnchor="middle" fill={c.felsic} fontSize="11" fontWeight="700" fontFamily="monospace">INTRUSIVE</text>
      <text x={p1x + panW/2} y={panY + 30}  textAnchor="middle" fill={c.textSubtle} fontSize="8.5" fontFamily="sans-serif">example: Granite</text>

      {/* Panel 1 labels */}
      <text x={p1x + panW/2} y={panY + 220} textAnchor="middle" fill={c.textDim} fontSize="9" fontFamily="monospace">Coarse-grained (phaneritic)</text>
      <text x={p1x + panW/2} y={panY + 234} textAnchor="middle" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">Crystals: 1–50 mm, visible to naked eye</text>
      <text x={p1x + panW/2} y={panY + 246} textAnchor="middle" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">Cooling: millions of years underground</text>

      {/* Panel 2: Extrusive (Basalt) */}
      <rect x={p2x} y={panY} width={panW} height={panH} rx="3" fill={c.surface} stroke={c.mafic} strokeWidth="1.2" />
      <ExtrusiveCrystals x={p2x+10} y={panY+40} w={panW-20} h={165} />
      <text x={p2x + panW/2} y={panY + 16}  textAnchor="middle" fill={c.mafic} fontSize="11" fontWeight="700" fontFamily="monospace">EXTRUSIVE</text>
      <text x={p2x + panW/2} y={panY + 30}  textAnchor="middle" fill={c.textSubtle} fontSize="8.5" fontFamily="sans-serif">example: Basalt</text>

      {/* Panel 2 labels */}
      <text x={p2x + panW/2} y={panY + 220} textAnchor="middle" fill={c.textDim} fontSize="9" fontFamily="monospace">Fine-grained (aphanitic)</text>
      <text x={p2x + panW/2} y={panY + 234} textAnchor="middle" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">Crystals: &lt;1 mm, not visible to eye</text>
      <text x={p2x + panW/2} y={panY + 246} textAnchor="middle" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">Cooling: days to years at surface</text>

      {/* Key principle */}
      <text x="280" y="310" textAnchor="middle" fill={c.text} fontSize="9.5" fontWeight="600" fontFamily="monospace">
        Crystal size = cooling rate = emplacement depth
      </text>
      <text x="280" y="326" textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">
        Same magma composition can produce granite (intrusive) or rhyolite (extrusive) depending only on where it cools
      </text>
    </svg>
  )
}
