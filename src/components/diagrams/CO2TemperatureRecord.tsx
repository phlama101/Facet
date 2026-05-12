'use client'

// CO₂ and temperature anomaly from Antarctic ice cores (Vostok/EPICA) + modern instrumental.
// Shows 420 kyr of glacial-interglacial cycles with CO₂ and temp co-variation.
export function CO2TemperatureRecord() {
  const c = {
    co2:       '#F28C76',   // coral — CO₂
    temp:      '#7AD7F0',   // accent — temperature anomaly
    modern:    '#E25B6E',   // ruby — modern spike
    bg:        '#0E0F14',
    surface:   '#16181F',
    border:    '#2A2D38',
    text:      '#EDEEF2',
    textDim:   '#9CA0AE',
    textSubtle:'#6B6F7C',
  }

  const W = 560, H = 340
  const leftPad = 48, rightPad = 16
  const topPad = 44, botPad = 50
  const chartW = W - leftPad - rightPad
  const chartH = (H - topPad - botPad - 20) / 2   // two sub-charts
  const co2Y = topPad
  const tempY = topPad + chartH + 20

  // Approximate Vostok/EPICA data (simplified, ~8 control points per cycle)
  // CO₂ in ppm, time in kyr BP (0 = present, 420 = oldest)
  // Four interglacial peaks and glacial troughs
  const co2Data = [
    [0, 420], [50, 185], [130, 280], [150, 200], [240, 180], [330, 280],
    [340, 200], [420, 190],
  ]
  // Add modern spike at t=0
  const co2DataFull = [[0, 422], ...co2Data.slice(1)]

  // Temperature anomaly relative to mean (°C)
  const tempData = [
    [0, 2.0], [20, -4], [50, -8], [130, 2.0], [150, -2], [240, -8],
    [330, 1.5], [340, -2.5], [420, -6],
  ]

  const co2Min = 170, co2Max = 430
  const tempMin = -10, tempMax = 4

  const x = (kyr: number) => leftPad + (kyr / 420) * chartW
  const yCO2 = (ppm: number) =>
    co2Y + chartH - ((ppm - co2Min) / (co2Max - co2Min)) * chartH
  const yTemp = (deg: number) =>
    tempY + chartH - ((deg - tempMin) / (tempMax - tempMin)) * chartH

  const toPath = (data: number[][], xFn: (v: number) => number, yFn: (v: number) => number) => {
    return data.map(([t, v], i) => `${i === 0 ? 'M' : 'L'} ${xFn(t).toFixed(1)} ${yFn(v).toFixed(1)}`).join(' ')
  }

  // Interglacial shading bands (approx)
  const interglacials = [
    { t0: 0, t1: 15 },
    { t0: 115, t1: 145 },
    { t0: 315, t1: 340 },
  ]

  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" style={{ display: 'block' }}
      role="img" aria-label="CO₂ and temperature record from Antarctic ice cores showing 420,000 years of glacial-interglacial cycles">
      <rect width={W} height={H} fill={c.bg} rx="4" />

      {/* Title */}
      <text x="280" y="18" textAnchor="middle" fill={c.text} fontSize="11" fontWeight="700" fontFamily="monospace">
        CO₂ &amp; Temperature — Ice Core Record
      </text>
      <text x="280" y="30" textAnchor="middle" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">
        420,000 years · Vostok / EPICA Dome C · Antarctic ice cores
      </text>

      {/* ── CO₂ panel ── */}
      <rect x={leftPad} y={co2Y} width={chartW} height={chartH} fill={c.surface} stroke={c.border} strokeWidth="0.8" />
      {/* Interglacial shading */}
      {interglacials.map((ig, i) => (
        <rect key={i} x={x(ig.t0)} y={co2Y} width={x(ig.t1) - x(ig.t0)} height={chartH}
          fill={c.co2} opacity="0.06" />
      ))}
      {/* Y grid */}
      {[200, 250, 300, 350, 400].map(v => (
        <g key={v}>
          <line x1={leftPad} y1={yCO2(v)} x2={leftPad + chartW} y2={yCO2(v)}
            stroke={c.border} strokeWidth="0.6" opacity="0.5" />
          <text x={leftPad - 4} y={yCO2(v) + 3} textAnchor="end"
            fill={c.textSubtle} fontSize="7" fontFamily="monospace">{v}</text>
        </g>
      ))}
      {/* CO₂ path */}
      <path d={toPath(co2DataFull, t => x(t), yCO2)}
        fill="none" stroke={c.co2} strokeWidth="1.8" strokeLinejoin="round" />
      {/* Modern spike marker */}
      <circle cx={x(0)} cy={yCO2(422)} r="3.5" fill={c.modern} />
      <text x={x(0) + 6} y={yCO2(422) + 3} fill={c.modern} fontSize="7.5" fontFamily="monospace">422 ppm (2024)</text>
      {/* Label */}
      <text x={leftPad + 6} y={co2Y + 14} fill={c.co2} fontSize="9" fontWeight="700" fontFamily="monospace">CO₂ (ppm)</text>

      {/* ── Temperature panel ── */}
      <rect x={leftPad} y={tempY} width={chartW} height={chartH} fill={c.surface} stroke={c.border} strokeWidth="0.8" />
      {interglacials.map((ig, i) => (
        <rect key={i} x={x(ig.t0)} y={tempY} width={x(ig.t1) - x(ig.t0)} height={chartH}
          fill={c.temp} opacity="0.06" />
      ))}
      {/* Y grid */}
      {[-8, -4, 0, 2].map(v => (
        <g key={v}>
          <line x1={leftPad} y1={yTemp(v)} x2={leftPad + chartW} y2={yTemp(v)}
            stroke={v === 0 ? c.textDim : c.border} strokeWidth={v === 0 ? 0.9 : 0.6} opacity="0.5" />
          <text x={leftPad - 4} y={yTemp(v) + 3} textAnchor="end"
            fill={c.textSubtle} fontSize="7" fontFamily="monospace">{v > 0 ? `+${v}` : v}</text>
        </g>
      ))}
      <path d={toPath(tempData, t => x(t), yTemp)}
        fill="none" stroke={c.temp} strokeWidth="1.8" strokeLinejoin="round" />
      <text x={leftPad + 6} y={tempY + 14} fill={c.temp} fontSize="9" fontWeight="700" fontFamily="monospace">Temp. anomaly (°C)</text>

      {/* Shared time axis */}
      {[0, 100, 200, 300, 400].map(t => (
        <g key={t}>
          <line x1={x(t)} y1={tempY + chartH} x2={x(t)} y2={tempY + chartH + 5}
            stroke={c.border} strokeWidth="1" />
          <text x={x(t)} y={tempY + chartH + 14} textAnchor="middle"
            fill={c.textSubtle} fontSize="7.5" fontFamily="monospace">{t === 0 ? '0' : `${t}`}</text>
        </g>
      ))}
      <text x={leftPad + chartW / 2} y={tempY + chartH + 26} textAnchor="middle"
        fill={c.textDim} fontSize="8" fontFamily="sans-serif">kyr BP (thousands of years before present)</text>

      {/* Interglacial annotation */}
      <text x={x(7)} y={co2Y - 4} textAnchor="middle" fill={c.textSubtle} fontSize="7" fontFamily="sans-serif">←Now</text>

      {/* Note */}
      <text x="280" y={H - 8} textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">
        CO₂ and temperature rise and fall together · modern CO₂ exceeds natural range by ~50%
      </text>
    </svg>
  )
}
