'use client'

// Hertzsprung-Russell diagram: luminosity vs temperature.
// Shows main sequence, giant branch, supergiant, white dwarf regions with named stars.
export function StellarHRDiagram() {
  const c = {
    mainSeq:  '#7AD7F0',   // accent — main sequence band
    giant:    '#F28C76',   // coral — red giants
    supergiant:'#E25B6E',  // ruby — supergiants
    whiteDwarf:'#EDEEF2',  // text-light — white dwarfs
    sun:      '#E4B74A',   // gold — Sun marker
    bg:       '#0E0F14',
    surface:  '#16181F',
    border:   '#2A2D38',
    text:     '#EDEEF2',
    textDim:  '#9CA0AE',
    textSubtle:'#6B6F7C',
  }

  const W = 560, H = 360
  const leftPad = 64, rightPad = 20, topPad = 44, botPad = 50
  const chartW = W - leftPad - rightPad
  const chartH = H - topPad - botPad

  // X: Temperature (K) — NOTE: x-axis is REVERSED (hot left, cool right)
  // Log scale: 50,000 K (left) to 2,500 K (right)
  const Tmin = 2500, Tmax = 50000
  const xT = (T: number) => leftPad + (1 - (Math.log10(T) - Math.log10(Tmin)) / (Math.log10(Tmax) - Math.log10(Tmin))) * chartW

  // Y: Luminosity (L☉) log scale: 0.001 to 1,000,000
  const Lmin = 0.0001, Lmax = 1000000
  const yL = (L: number) => topPad + chartH - ((Math.log10(L) - Math.log10(Lmin)) / (Math.log10(Lmax) - Math.log10(Lmin))) * chartH

  // Main sequence approximate curve points (T, L)
  const mainSeqPts: [number, number][] = [
    [40000, 500000], [20000, 10000], [10000, 80], [7500, 8],
    [6000, 1.5], [5778, 1], [4500, 0.1], [3500, 0.01], [2800, 0.001],
  ]

  const msPath = mainSeqPts.map(([T, L], i) =>
    `${i === 0 ? 'M' : 'L'} ${xT(T).toFixed(1)} ${yL(L).toFixed(1)}`
  ).join(' ')

  // Named stars
  const stars = [
    { name: 'Rigel',     T: 12100, L: 120000, color: '#C0D8FF', r: 5 },
    { name: 'Betelgeuse',T: 3500,  L: 100000, color: '#FF8040', r: 8 },
    { name: 'Aldebaran', T: 3910,  L: 518,    color: '#FF9050', r: 5 },
    { name: 'Sun ☀',    T: 5778,  L: 1,      color: c.sun,     r: 5 },
    { name: 'Sirius A',  T: 9940,  L: 25,     color: '#D0E8FF', r: 4 },
    { name: 'Vega',      T: 9602,  L: 40,     color: '#E0EEFF', r: 4 },
    { name: 'Proxima Cen',T:3042, L: 0.0017,  color: '#FF5030', r: 3 },
    { name: 'Sirius B',  T: 25200, L: 0.03,   color: '#FFFFFF', r: 3 },
  ]

  // Spectral classes (OBAFGKM) with approx T ranges
  const spectralClasses = [
    { cls: 'O', T: 35000, color: '#9BB0FF' },
    { cls: 'B', T: 15000, color: '#AABFFF' },
    { cls: 'A', T: 8500,  color: '#CDDEFF' },
    { cls: 'F', T: 6750,  color: '#F8F7FF' },
    { cls: 'G', T: 5500,  color: '#FFF4EA' },
    { cls: 'K', T: 4200,  color: '#FFDDB4' },
    { cls: 'M', T: 3000,  color: '#FF9868' },
  ]

  // Luminosity grid labels
  const lumLabels = [0.001, 0.01, 0.1, 1, 10, 100, 1000, 10000, 100000, 1000000]
  const tempLabels = [40000, 20000, 10000, 7000, 5000, 3500]

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}
      role="img" aria-label="Hertzsprung-Russell diagram showing stellar luminosity vs temperature with main sequence, giant branch, and named stars">
      <rect width={W} height={H} fill={c.bg} rx="4" />

      <text x="280" y="18" textAnchor="middle" fill={c.text} fontSize="11" fontWeight="700" fontFamily="monospace">
        Hertzsprung–Russell Diagram
      </text>
      <text x="280" y="30" textAnchor="middle" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">
        Luminosity (L☉) vs. Effective Temperature (K) — temperature increases left to right
      </text>

      {/* Chart background */}
      <rect x={leftPad} y={topPad} width={chartW} height={chartH} fill={c.surface} stroke={c.border} strokeWidth="1" />

      {/* Temperature grid */}
      {tempLabels.map(T => (
        <g key={T}>
          <line x1={xT(T)} y1={topPad} x2={xT(T)} y2={topPad + chartH}
            stroke={c.border} strokeWidth="0.6" opacity="0.5" />
          <text x={xT(T)} y={topPad + chartH + 14} textAnchor="middle"
            fill={c.textSubtle} fontSize="7.5" fontFamily="monospace">
            {T >= 1000 ? `${T / 1000}k` : T}
          </text>
        </g>
      ))}

      {/* Luminosity grid */}
      {lumLabels.filter(L => L >= Lmin && L <= Lmax).map(L => (
        <g key={L}>
          <line x1={leftPad} y1={yL(L)} x2={leftPad + chartW} y2={yL(L)}
            stroke={c.border} strokeWidth="0.6" opacity="0.5" />
          <text x={leftPad - 5} y={yL(L) + 3} textAnchor="end"
            fill={c.textSubtle} fontSize="7" fontFamily="monospace">
            {L >= 1 ? (L >= 1000 ? `10${Math.round(Math.log10(L))}` : L.toString()) : `10⁻${Math.abs(Math.round(Math.log10(L)))}` }
          </text>
        </g>
      ))}

      {/* Spectral class headers */}
      {spectralClasses.map(sc => (
        <g key={sc.cls}>
          <rect x={xT(sc.T) - 12} y={topPad - 14} width="24" height="12" rx="2"
            fill={sc.color} opacity="0.3" />
          <text x={xT(sc.T)} y={topPad - 4} textAnchor="middle"
            fill={sc.color} fontSize="8.5" fontWeight="700" fontFamily="monospace">{sc.cls}</text>
        </g>
      ))}

      {/* Main sequence band */}
      <path d={msPath} fill="none" stroke={c.mainSeq} strokeWidth="12" opacity="0.15" strokeLinecap="round" strokeLinejoin="round" />
      <path d={msPath} fill="none" stroke={c.mainSeq} strokeWidth="2" opacity="0.7" />

      {/* Giant branch */}
      <path d={`M ${xT(5000)} ${yL(10)} Q ${xT(4500)} ${yL(100)} ${xT(3800)} ${yL(1000)}`}
        fill="none" stroke={c.giant} strokeWidth="8" opacity="0.2" />
      <path d={`M ${xT(5000)} ${yL(10)} Q ${xT(4500)} ${yL(100)} ${xT(3800)} ${yL(1000)}`}
        fill="none" stroke={c.giant} strokeWidth="1.5" opacity="0.6" />
      <text x={xT(4200)} y={yL(200) - 10} fill={c.giant} fontSize="8.5" fontWeight="600" fontFamily="monospace">Giant Branch</text>

      {/* Supergiant region */}
      <text x={xT(8000)} y={yL(200000)} fill={c.supergiant} fontSize="8.5" fontWeight="600" fontFamily="monospace">Supergiants</text>

      {/* White dwarf region */}
      <text x={xT(15000)} y={yL(0.002)} fill={c.whiteDwarf} fontSize="8.5" fontWeight="600" fontFamily="monospace">White Dwarfs</text>

      {/* Stars */}
      {stars.map((star, i) => (
        <g key={i}>
          <circle cx={xT(star.T)} cy={yL(star.L)} r={star.r}
            fill={star.color} opacity="0.9" stroke={c.bg} strokeWidth="0.5" />
          <text x={xT(star.T) + star.r + 3} y={yL(star.L) + 3}
            fill={star.color} fontSize="7.5" fontFamily="monospace">{star.name}</text>
        </g>
      ))}

      {/* Axis labels */}
      <text x={leftPad + chartW / 2} y={topPad + chartH + 30} textAnchor="middle"
        fill={c.textDim} fontSize="9" fontFamily="monospace">← Hotter · Temperature (K) · Cooler →</text>
      <text x="18" y={topPad + chartH / 2} textAnchor="middle"
        fill={c.textDim} fontSize="9" fontFamily="monospace"
        transform={`rotate(-90, 18, ${topPad + chartH / 2})`}>Luminosity (L☉)</text>

      <text x="280" y={H - 8} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">
        ~90% of stars lie on the main sequence · Hertzsprung (1911), Russell (1914)
      </text>
    </svg>
  )
}
