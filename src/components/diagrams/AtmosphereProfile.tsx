'use client'

// Standard-atmosphere temperature–altitude profile (0–100 km).
// Temperature values from ICAO Standard Atmosphere + NRLMSISE-00 model.
export function AtmosphereProfile() {
  // Plot area bounds
  const PX0 = 88, PX1 = 420   // temperature axis (left to right)
  const PY0 = 28, PY1 = 332   // altitude axis (top = high, bottom = 0 km)

  const T_MIN = -100, T_MAX = 20    // °C range on x-axis
  const ALT_MIN = 0, ALT_MAX = 100  // km range on y-axis

  const tx = (t: number) => PX0 + ((t - T_MIN) / (T_MAX - T_MIN)) * (PX1 - PX0)
  const ay = (km: number) => PY1 - ((km - ALT_MIN) / (ALT_MAX - ALT_MIN)) * (PY1 - PY0)

  const c = {
    crust:      '#F28C76',  // troposphere
    gold:       '#E4B74A',  // stratosphere
    jade:       '#7FC29B',  // mesosphere
    accent:     '#7AD7F0',  // thermosphere
    bg:         '#0E0F14',
    border:     '#2A2D38',
    text:       '#EDEEF2',
    textDim:    '#9CA0AE',
    textSubtle: '#6B6F7C',
  }

  // Standard atmosphere temperature-altitude data (ICAO + extensions)
  const profile: [number, number][] = [
    [15,    0  ],  // surface
    [-57,   11 ],  // tropopause
    [-57,   20 ],  // isothermal lower stratosphere
    [-44.5, 32 ],  // warming upper stratosphere
    [-2.5,  47 ],  // stratopause (temperature maximum)
    [-14,   53 ],  // just above stratopause
    [-86,   80 ],  // mesopause (coldest point in atmosphere)
    [-70,   90 ],  // lower thermosphere
    [-60,  100 ],  // 100 km (thermosphere; temp rises sharply above here)
  ]

  const pointsStr = profile.map(([t, km]) => `${tx(t).toFixed(1)},${ay(km).toFixed(1)}`).join(' ')

  const layers = [
    { name: 'Troposphere',  altMin: 0,  altMax: 11, color: c.crust, note: '0–11 km · all weather' },
    { name: 'Stratosphere', altMin: 11, altMax: 47, color: c.gold,  note: '11–47 km · ozone layer' },
    { name: 'Mesosphere',   altMin: 47, altMax: 80, color: c.jade,  note: '47–80 km · meteors burn here' },
    { name: 'Thermosphere', altMin: 80, altMax: 100, color: c.accent, note: '80–100 km · temp rises sharply above' },
  ]

  // Layer boundary altitudes → pause labels
  const pauses = [
    { km: 11, label: 'Tropopause',  sub: '−57 °C' },
    { km: 47, label: 'Stratopause', sub: '−2.5 °C' },
    { km: 80, label: 'Mesopause',   sub: '−86 °C (coldest)' },
  ]

  const tempTicks = [-100, -80, -60, -40, -20, 0, 20]
  const altTicks  = [0, 20, 40, 60, 80, 100]

  return (
    <svg
      viewBox="0 0 560 370"
      width="100%"
      style={{ display: 'block' }}
      role="img"
      aria-label="Atmosphere temperature profile: temperature changes with altitude through four atmospheric layers"
    >
      <rect width="560" height="370" fill={c.bg} rx="4" />

      {/* --- Layer background bands --- */}
      {layers.map((layer) => (
        <rect
          key={layer.name}
          x={PX0}
          y={ay(layer.altMax)}
          width={PX1 - PX0}
          height={ay(layer.altMin) - ay(layer.altMax)}
          fill={layer.color}
          opacity="0.10"
        />
      ))}

      {/* --- Layer boundary dashed lines --- */}
      {pauses.map(({ km }) => (
        <line
          key={km}
          x1={PX0} y1={ay(km)}
          x2={PX1} y2={ay(km)}
          stroke={c.border}
          strokeWidth="1"
          strokeDasharray="4 3"
          opacity="0.7"
        />
      ))}

      {/* --- Grid lines (temperature) --- */}
      {tempTicks.map((t) => (
        <line
          key={t}
          x1={tx(t)} y1={PY0}
          x2={tx(t)} y2={PY1}
          stroke={c.border}
          strokeWidth="0.5"
          opacity="0.5"
        />
      ))}

      {/* --- Temperature profile line --- */}
      <polyline
        points={pointsStr}
        fill="none"
        stroke={c.text}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />

      {/* Profile dots at key boundaries */}
      {pauses.map(({ km }) => {
        const idx = profile.findIndex(([, a]) => a === km)
        const [t] = profile[idx] ?? [0]
        return (
          <circle key={km} cx={tx(t)} cy={ay(km)} r="3" fill={c.bg} stroke={c.text} strokeWidth="1.5" />
        )
      })}

      {/* Arrow indicating thermosphere continues upward */}
      <line x1={tx(-60)} y1={ay(100)} x2={tx(-60)} y2={PY0 - 4} stroke={c.accent} strokeWidth="1" strokeDasharray="3 2" opacity="0.7" />
      <polygon points={`${tx(-60) - 4},${PY0 - 4} ${tx(-60) + 4},${PY0 - 4} ${tx(-60)},${PY0 - 11}`} fill={c.accent} opacity="0.7" />

      {/* --- Axes borders --- */}
      <rect x={PX0} y={PY0} width={PX1 - PX0} height={PY1 - PY0} fill="none" stroke={c.border} strokeWidth="1" />

      {/* --- Temperature x-axis ticks + labels --- */}
      {tempTicks.map((t) => (
        <g key={t}>
          <line x1={tx(t)} y1={PY1} x2={tx(t)} y2={PY1 + 4} stroke={c.textSubtle} strokeWidth="1" />
          <text x={tx(t)} y={PY1 + 14} textAnchor="middle" fill={c.textSubtle} fontSize="8.5" fontFamily="monospace">
            {t > 0 ? `+${t}` : t}°
          </text>
        </g>
      ))}
      <text x={(PX0 + PX1) / 2} y={PY1 + 28} textAnchor="middle" fill={c.textDim} fontSize="9" fontFamily="sans-serif">
        Temperature (°C)
      </text>

      {/* --- Altitude y-axis ticks + labels --- */}
      {altTicks.map((km) => (
        <g key={km}>
          <line x1={PX0 - 4} y1={ay(km)} x2={PX0} y2={ay(km)} stroke={c.textSubtle} strokeWidth="1" />
          <text x={PX0 - 7} y={ay(km) + 3} textAnchor="end" fill={c.textSubtle} fontSize="8.5" fontFamily="monospace">
            {km}
          </text>
        </g>
      ))}
      <text
        x={PX0 - 42}
        y={(PY0 + PY1) / 2}
        textAnchor="middle"
        fill={c.textDim}
        fontSize="9"
        fontFamily="sans-serif"
        transform={`rotate(-90, ${PX0 - 42}, ${(PY0 + PY1) / 2})`}
      >
        Altitude (km)
      </text>

      {/* --- Layer name labels (right side) --- */}
      {layers.map((layer) => {
        const midY = ay((layer.altMin + layer.altMax) / 2)
        return (
          <g key={layer.name}>
            <text x={PX1 + 8} y={midY - 4} fill={layer.color} fontSize="9.5" fontWeight="700" fontFamily="monospace">{layer.name}</text>
            <text x={PX1 + 8} y={midY + 8} fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">{layer.note}</text>
          </g>
        )
      })}

      {/* --- Pause labels (left of boundary lines) --- */}
      {pauses.map(({ km, label, sub }) => (
        <g key={km}>
          <text x={PX0 + 4} y={ay(km) - 5} fill={c.textDim} fontSize="8" fontFamily="sans-serif" fontStyle="italic">{label}</text>
          <text x={PX0 + 4} y={ay(km) + 9} fill={c.textSubtle} fontSize="7.5" fontFamily="monospace">{sub}</text>
        </g>
      ))}

      {/* Ozone layer callout */}
      <line x1={tx(-50)} y1={ay(25)} x2={PX1 - 20} y2={ay(22)} stroke={c.gold} strokeWidth="0.8" strokeDasharray="3 2" opacity="0.6" />
      <text x={PX1 - 18} y={ay(22) - 4} fill={c.gold} fontSize="7.5" fontFamily="sans-serif">Ozone layer</text>
      <text x={PX1 - 18} y={ay(22) + 7} fill={c.textSubtle} fontSize="7" fontFamily="monospace">15–35 km</text>
    </svg>
  )
}
