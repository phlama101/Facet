'use client'

// Metamorphic grade diagram: pressure-temperature field with index minerals and facies.
// Shows Barrovian sequence: chlorite → biotite → garnet → staurolite → kyanite → sillimanite.
export function MetamorphicGrade() {
  const c = {
    chlorite:   '#7FC29B',   // jade
    biotite:    '#E4B74A',   // gold
    garnet:     '#E25B6E',   // ruby
    staurolite: '#F28C76',   // coral
    kyanite:    '#7AD7F0',   // accent
    sillimanite:'#B57EDC',   // amethyst
    melt:       '#F28C76',   // coral — partial melt
    bg:         '#0E0F14',
    surface:    '#16181F',
    border:     '#2A2D38',
    text:       '#EDEEF2',
    textDim:    '#9CA0AE',
    textSubtle: '#6B6F7C',
  }

  const W = 560, H = 340
  const leftPad = 60, rightPad = 16, topPad = 46, botPad = 50
  const chartW = W - leftPad - rightPad
  const chartH = H - topPad - botPad

  // Axes: T (°C) x-axis 0–800, P (kbar) y-axis 0–12 (y inverted: 0 at bottom)
  const Tmin = 0, Tmax = 800
  const Pmin = 0, Pmax = 12

  const xT = (T: number) => leftPad + ((T - Tmin) / (Tmax - Tmin)) * chartW
  const yP = (P: number) => topPad + chartH - ((P - Pmin) / (Pmax - Pmin)) * chartH

  // Geothermal gradient lines (P ~ depth × ρg)
  // Normal continental: ~30°C/km → 1 kbar ≈ 3.5 km → 30°C, so T ≈ P * 30/0.285
  // High-P (blueschist): ~10°C/km
  // Low-P (contact): ~100°C/km
  const geoGrad = (dTdkbar: number, maxP: number) => {
    const pts: string[] = []
    for (let P = 0; P <= maxP; P += 0.5) {
      const T = P * dTdkbar
      pts.push(`${xT(T).toFixed(1)},${yP(P).toFixed(1)}`)
    }
    return pts.join(' ')
  }

  // Facies fields (approximate polygons in T-P space)
  const facies = [
    {
      label: 'Zeolite', color: c.chlorite, opacity: 0.12,
      pts: [[0,0],[200,0],[200,2],[80,4],[0,4]],
    },
    {
      label: 'Greenschist', color: c.chlorite, opacity: 0.18,
      pts: [[200,0],[400,0],[400,5],[200,6],[200,2]],
    },
    {
      label: 'Amphibolite', color: c.biotite, opacity: 0.18,
      pts: [[400,0],[650,0],[650,8],[400,8],[400,5]],
    },
    {
      label: 'Granulite', color: c.sillimanite, opacity: 0.18,
      pts: [[550,0],[800,0],[800,10],[650,10],[550,8],[550,0]],
    },
    {
      label: 'Blueschist', color: c.kyanite, opacity: 0.15,
      pts: [[100,4],[250,4],[250,10],[100,12],[80,4]],
    },
    {
      label: 'Eclogite', color: c.garnet, opacity: 0.15,
      pts: [[250,8],[500,8],[500,12],[250,12]],
    },
  ]

  const ptsToPath = (pts: number[][], xFn: (v: number) => number, yFn: (v: number) => number) =>
    pts.map(([T, P], i) => `${i === 0 ? 'M' : 'L'}${xFn(T).toFixed(1)},${yFn(P).toFixed(1)}`).join(' ') + 'Z'

  // Barrovian index mineral zones (approximate T at ~3 kbar)
  const barrovian = [
    { T: 300, label: 'Chlorite',    color: c.chlorite },
    { T: 380, label: 'Biotite',     color: c.biotite },
    { T: 450, label: 'Garnet',      color: c.garnet },
    { T: 520, label: 'Staurolite',  color: c.staurolite },
    { T: 580, label: 'Kyanite',     color: c.kyanite },
    { T: 650, label: 'Sillimanite', color: c.sillimanite },
  ]

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}
      role="img" aria-label="Metamorphic grade pressure-temperature diagram showing Barrovian index minerals and metamorphic facies fields">
      <rect width={W} height={H} fill={c.bg} rx="4" />

      <text x="280" y="18" textAnchor="middle" fill={c.text} fontSize="11" fontWeight="700" fontFamily="monospace">
        Metamorphic Grade: P–T Diagram
      </text>
      <text x="280" y="30" textAnchor="middle" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">
        Barrovian sequence · index minerals at ~3 kbar · facies fields schematic
      </text>

      {/* Chart background */}
      <rect x={leftPad} y={topPad} width={chartW} height={chartH} fill={c.surface} stroke={c.border} strokeWidth="1" />

      {/* Facies fields */}
      {facies.map((f, i) => (
        <g key={i}>
          <path d={ptsToPath(f.pts, xT, yP)} fill={f.color} opacity={f.opacity} />
        </g>
      ))}

      {/* Grid lines */}
      {[200, 400, 600, 800].map(T => (
        <g key={T}>
          <line x1={xT(T)} y1={topPad} x2={xT(T)} y2={topPad + chartH}
            stroke={c.border} strokeWidth="0.6" opacity="0.5" />
          <text x={xT(T)} y={topPad + chartH + 14} textAnchor="middle"
            fill={c.textSubtle} fontSize="8" fontFamily="monospace">{T}</text>
        </g>
      ))}
      {[2, 4, 6, 8, 10, 12].map(P => (
        <g key={P}>
          <line x1={leftPad} y1={yP(P)} x2={leftPad + chartW} y2={yP(P)}
            stroke={c.border} strokeWidth="0.6" opacity="0.5" />
          <text x={leftPad - 5} y={yP(P) + 3} textAnchor="end"
            fill={c.textSubtle} fontSize="8" fontFamily="monospace">{P}</text>
        </g>
      ))}

      {/* Axis labels */}
      <text x={leftPad + chartW / 2} y={topPad + chartH + 30} textAnchor="middle"
        fill={c.textDim} fontSize="9" fontFamily="monospace">Temperature (°C)</text>
      <text x="16" y={topPad + chartH / 2} textAnchor="middle"
        fill={c.textDim} fontSize="9" fontFamily="monospace"
        transform={`rotate(-90, 16, ${topPad + chartH / 2})`}>Pressure (kbar)</text>

      {/* Geothermal gradients */}
      <polyline points={geoGrad(30, 11)} fill="none" stroke={c.textSubtle} strokeWidth="1" strokeDasharray="5 3" opacity="0.5" />
      <text x={xT(330)} y={yP(11) - 4} fill={c.textSubtle} fontSize="7" fontFamily="sans-serif">Normal (30°C/km)</text>

      {/* Facies labels */}
      {facies.map((f, i) => {
        const avgT = f.pts.reduce((s, p) => s + p[0], 0) / f.pts.length
        const avgP = f.pts.reduce((s, p) => s + p[1], 0) / f.pts.length
        return (
          <text key={i} x={xT(avgT)} y={yP(avgP)} textAnchor="middle"
            fill={f.color} fontSize="8" fontWeight="600" fontFamily="monospace" opacity="0.9">{f.label}</text>
        )
      })}

      {/* Barrovian index mineral line at P=3 kbar */}
      <line x1={xT(Tmin)} y1={yP(3)} x2={xT(Tmax)} y2={yP(3)}
        stroke={c.biotite} strokeWidth="1" strokeDasharray="4 2" opacity="0.3" />
      <text x={leftPad + 4} y={yP(3) - 3} fill={c.textSubtle} fontSize="7" fontFamily="sans-serif">Barrovian path (~3 kbar)</text>

      {/* Index mineral dots on Barrovian line */}
      {barrovian.map((m, i) => (
        <g key={i}>
          <circle cx={xT(m.T)} cy={yP(3)} r="5" fill={m.color} opacity="0.85" />
          <text x={xT(m.T)} y={yP(3) - 10} textAnchor="middle"
            fill={m.color} fontSize="7.5" fontWeight="600" fontFamily="monospace">{m.label}</text>
        </g>
      ))}

      {/* Depth axis (right) — 1 kbar ≈ 3.5 km */}
      {[0, 14, 28, 42].map((km, i) => {
        const P = km / 3.5
        if (P > Pmax) return null
        return (
          <g key={km}>
            <text x={leftPad + chartW + 5} y={yP(P) + 3}
              fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">{km} km</text>
          </g>
        )
      })}
      <text x={leftPad + chartW + 36} y={topPad + chartH / 2} textAnchor="middle"
        fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif"
        transform={`rotate(90, ${leftPad + chartW + 36}, ${topPad + chartH / 2})`}>Depth</text>
    </svg>
  )
}
