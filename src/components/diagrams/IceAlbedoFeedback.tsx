'use client'

// Ice-albedo positive feedback loop diagram.
// Shows how warming → ice melt → lower albedo → more solar absorption → more warming.
export function IceAlbedoFeedback() {
  const c = {
    warm:    '#F28C76',   // coral — warming
    ice:     '#7AD7F0',   // accent — ice / albedo
    solar:   '#E4B74A',   // gold — solar absorption
    positive:'#E25B6E',   // ruby — positive feedback
    bg:      '#0E0F14',
    surface: '#16181F',
    border:  '#2A2D38',
    text:    '#EDEEF2',
    textDim: '#9CA0AE',
    textSubtle: '#6B6F7C',
  }

  // Five nodes in a pentagon arrangement
  // Center: 280, 185
  const cx = 280, cy = 185, R = 120

  const nodes = [
    { id: 0, deg: 270, label: 'Temperature',  sub: 'rises',     color: c.warm,   box: 64 },
    { id: 1, deg: 342, label: 'Ice &',         sub: 'snow melt', color: c.ice,    box: 64 },
    { id: 2, deg: 54,  label: 'Ice extent',    sub: 'decreases', color: c.ice,    box: 64 },
    { id: 3, deg: 126, label: 'Surface',       sub: 'albedo ↓',  color: c.solar,  box: 64 },
    { id: 4, deg: 198, label: 'Solar energy',  sub: 'absorbed ↑',color: c.solar,  box: 72 },
  ]

  const pt = (deg: number, r: number = R) => ({
    x: cx + r * Math.cos((deg * Math.PI) / 180),
    y: cy + r * Math.sin((deg * Math.PI) / 180),
  })

  // Curved arrow between adjacent nodes (along circle edge)
  const CurvedArrow = ({ from, to, color }: { from: { x: number; y: number }; to: { x: number; y: number }; color: string }) => {
    const midX = (from.x + to.x) / 2 + (cy - (from.y + to.y) / 2) * 0.25
    const midY = (from.y + to.y) / 2 + (cx - (from.x + to.x) / 2) * 0.25
    const dx = to.x - midX, dy = to.y - midY
    const len = Math.sqrt(dx * dx + dy * dy)
    const ux = dx / len, uy = dy / len
    const aw = 6
    const p1x = to.x - ux * 10 + uy * aw, p1y = to.y - uy * 10 - ux * aw
    const p2x = to.x - ux * 10 - uy * aw, p2y = to.y - uy * 10 + ux * aw
    return (
      <g>
        <path d={`M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x - ux * 10} ${to.y - uy * 10}`}
          fill="none" stroke={color} strokeWidth="2" opacity="0.8" />
        <polygon points={`${to.x},${to.y} ${p1x},${p1y} ${p2x},${p2y}`} fill={color} opacity="0.8" />
      </g>
    )
  }

  return (
    <svg viewBox="0 0 560 370" width="100%" style={{ display: 'block' }}
      role="img" aria-label="Ice-albedo positive feedback loop: warming causes ice to melt, reducing albedo, increasing solar absorption, causing more warming">
      <rect width="560" height="370" fill={c.bg} rx="4" />

      {/* Title */}
      <text x="280" y="28" textAnchor="middle" fill={c.positive} fontSize="12" fontWeight="700" fontFamily="monospace">
        Positive Feedback Loop
      </text>
      <text x="280" y="42" textAnchor="middle" fill={c.textSubtle} fontSize="8.5" fontFamily="sans-serif">
        Each step amplifies the original warming — no external trigger needed to sustain the cycle
      </text>

      {/* ── Arrows between nodes (clockwise) ── */}
      {nodes.map((node, i) => {
        const next = nodes[(i + 1) % nodes.length]
        const fromPt = pt(node.deg, R - 36)
        const toPt   = pt(next.deg, R - 36)
        return <CurvedArrow key={i} from={fromPt} to={toPt} color={node.color} />
      })}

      {/* ── Nodes ── */}
      {nodes.map((node) => {
        const pos = pt(node.deg)
        const bw = node.box
        return (
          <g key={node.id}>
            <rect x={pos.x - bw / 2} y={pos.y - 24} width={bw} height={46} rx="4"
              fill={c.surface} stroke={node.color} strokeWidth="1.5" />
            <text x={pos.x} y={pos.y - 8}  textAnchor="middle" fill={node.color} fontSize="10" fontWeight="700" fontFamily="monospace">{node.label}</text>
            <text x={pos.x} y={pos.y + 8}  textAnchor="middle" fill={c.textDim}  fontSize="8.5" fontFamily="sans-serif">{node.sub}</text>
          </g>
        )
      })}

      {/* Center label */}
      <text x={cx} y={cy - 10} textAnchor="middle" fill={c.positive} fontSize="13" fontWeight="700" fontFamily="monospace">＋</text>
      <text x={cx} y={cy + 8}  textAnchor="middle" fill={c.textDim}  fontSize="8"  fontFamily="sans-serif">self-amplifying</text>

      {/* ── Albedo data panel (right) ── */}
      <rect x="415" y="190" width="130" height="130" rx="3" fill={c.surface} stroke={c.border} strokeWidth="1" />
      <text x="480" y="208" textAnchor="middle" fill={c.textDim} fontSize="8.5" fontWeight="600" fontFamily="monospace">Albedo values</text>
      {[
        { surface: 'Fresh snow',    val: '0.80–0.90', color: c.ice },
        { surface: 'Sea ice',       val: '0.50–0.70', color: c.ice },
        { surface: 'Old snow',      val: '0.40–0.60', color: c.textDim },
        { surface: 'Open ocean',    val: '0.06',       color: c.solar },
        { surface: 'Bare soil',     val: '0.10–0.25', color: c.solar },
      ].map(({ surface: s, val, color }, i) => (
        <g key={i}>
          <text x="420" y={228 + i * 18} fill={color} fontSize="8" fontFamily="monospace">{s}</text>
          <text x="540" y={228 + i * 18} textAnchor="end" fill={c.textSubtle} fontSize="8" fontFamily="monospace">{val}</text>
        </g>
      ))}

      {/* ── Polar amplification note ── */}
      <text x="280" y="320" textAnchor="middle" fill={c.textDim} fontSize="8.5" fontFamily="sans-serif">
        Arctic has warmed ~3–4× faster than the global average since 1979 (polar amplification)
      </text>
      <text x="280" y="334" textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">
        Summer Arctic sea ice extent has declined ~40% since satellite observations began
      </text>
      <text x="280" y="360" textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">
        Ice-albedo feedback · IPCC AR6 · NSIDC
      </text>
    </svg>
  )
}
