'use client'

// Proportional geologic timescale with split scale:
// upper section zooms in on Phanerozoic; lower section compresses Precambrian.
// All boundaries from ICS 2023 International Chronostratigraphic Chart.
export function GeologicTimescale() {
  const c = {
    phanerozoic: '#7AD7F0',   // accent — Phanerozoic (complex life)
    proterozoic: '#7FC29B',   // jade    — Proterozoic (early O₂, eukaryotes)
    archean:     '#E4B74A',   // gold    — Archean (first life)
    hadean:      '#F28C76',   // coral   — Hadean (hot, no life)
    cenozoic:    '#B57EDC',   // amethyst — Cenozoic
    mesozoic:    '#7FC29B',   // jade    — Mesozoic
    paleozoic:   '#7AD7F0',   // accent  — Paleozoic
    bg:          '#0E0F14',
    surface:     '#16181F',
    border:      '#2A2D38',
    text:        '#EDEEF2',
    textDim:     '#9CA0AE',
    textSubtle:  '#6B6F7C',
  }

  const barX = 140    // left edge of main timeline bar
  const barW = 40     // width of bar

  // Phanerozoic zoomed (y=40 to y=230, 190px for 541 Ma)
  const phanTop = 40
  const phanBot = 230
  const phanH   = phanBot - phanTop   // 190 px
  const phanMa  = 541

  // Pre-Phanerozoic compressed (y=236 to y=330, 94px for 3999 Ma)
  const preTop = 236
  const preBot = 330
  const preH   = preBot - preTop     // 94 px
  const preMa  = 3999

  // Scale-break decoration
  const breakY = 232

  // Phanerozoic era boundaries (Ma → y)
  const phY = (ma: number) => phanTop + (ma / phanMa) * phanH
  // Pre-Phanerozoic eon boundaries (Ma offset from 541 → y)
  const preY = (maTotalFromPresent: number) => preTop + ((maTotalFromPresent - 541) / preMa) * preH

  // Key eras within Phanerozoic
  const eras = [
    { name: 'Cenozoic',  start: 0,   end: 66,  color: c.cenozoic },
    { name: 'Mesozoic',  start: 66,  end: 252, color: c.mesozoic },
    { name: 'Paleozoic', start: 252, end: 541, color: c.paleozoic },
  ]

  // Eons outside Phanerozoic
  const preEons = [
    { name: 'Proterozoic', start: 541,  end: 2500, color: c.proterozoic },
    { name: 'Archean',     start: 2500, end: 4000, color: c.archean },
    { name: 'Hadean',      start: 4000, end: 4540, color: c.hadean },
  ]

  // Notable events
  const events = [
    { ma: 0.3,  label: 'Ice Age peak' },
    { ma: 66,   label: 'K-Pg mass extinction (end-Cretaceous)' },
    { ma: 252,  label: 'P-T mass extinction (end-Permian, ~96% marine species)' },
    { ma: 443,  label: 'Ordovician mass extinction' },
    { ma: 538,  label: 'Cambrian explosion — first complex animals' },
  ]

  return (
    <svg viewBox="0 0 560 360" width="100%" style={{ display: 'block' }}
      role="img" aria-label="Proportional geologic timescale showing Earth's 4.54 billion year history">
      <rect width="560" height="360" fill={c.bg} rx="4" />

      {/* Column header */}
      <text x={barX + barW / 2} y={28} textAnchor="middle" fill={c.text} fontSize="11" fontWeight="700" fontFamily="monospace">Ma ago</text>

      {/* ── Phanerozoic eons (zoomed) ── */}
      {eras.map((era) => {
        const y1 = phY(era.start), y2 = phY(era.end)
        return (
          <g key={era.name}>
            <rect x={barX} y={y1} width={barW} height={y2 - y1} fill={era.color} opacity="0.75" />
            <line x1={barX} y1={y1} x2={barX + barW} y2={y1} stroke={c.bg} strokeWidth="1" />
            <text x={barX + barW + 8} y={(y1 + y2) / 2 + 4} fill={era.color} fontSize="10" fontWeight="600" fontFamily="monospace">{era.name}</text>
          </g>
        )
      })}
      {/* "Phanerozoic" bracket */}
      <line x1={barX - 2} y1={phanTop} x2={barX - 2} y2={phanBot} stroke={c.phanerozoic} strokeWidth="1.5" />
      <text x={barX - 8} y={(phanTop + phanBot) / 2} textAnchor="end" fill={c.phanerozoic} fontSize="9.5" fontWeight="700" fontFamily="monospace"
        transform={`rotate(-90 ${barX - 8} ${(phanTop + phanBot) / 2})`}>Phanerozoic</text>

      {/* Phanerozoic time labels (left) */}
      {[0, 66, 100, 200, 252, 300, 400, 443, 500, 541].map((ma) => (
        <g key={ma}>
          <line x1={barX - 6} y1={phY(ma)} x2={barX} y2={phY(ma)} stroke={c.textSubtle} strokeWidth="0.8" />
          <text x={barX - 8} y={phY(ma) + 3} textAnchor="end" fill={c.textSubtle} fontSize="7.5" fontFamily="monospace">{ma}</text>
        </g>
      ))}

      {/* Notable events in Phanerozoic */}
      {events.filter(e => e.ma <= 541).map((ev) => (
        <g key={ev.ma}>
          <line x1={barX + barW} y1={phY(ev.ma)} x2={barX + barW + 4} y2={phY(ev.ma)} stroke={c.textDim} strokeWidth="0.8" strokeDasharray="2 2" />
          <text x={barX + barW + 50} y={phY(ev.ma) + 3} textAnchor="middle" fill={c.textSubtle} fontSize="7" fontFamily="sans-serif">{ev.label}</text>
          <line x1={barX + barW + 4} y1={phY(ev.ma)} x2={barX + barW + 24} y2={phY(ev.ma)} stroke={c.textSubtle} strokeWidth="0.5" strokeDasharray="2 2" />
        </g>
      ))}

      {/* Scale break marker */}
      <line x1={barX - 10} y1={breakY - 2} x2={barX + barW + 10} y2={breakY - 2} stroke={c.border} strokeWidth="1" strokeDasharray="4 2" />
      <text x={barX + barW / 2} y={breakY + 4} textAnchor="middle" fill={c.textSubtle} fontSize="7" fontFamily="monospace">✂ scale break</text>
      <line x1={barX - 10} y1={breakY + 6} x2={barX + barW + 10} y2={breakY + 6} stroke={c.border} strokeWidth="1" strokeDasharray="4 2" />

      {/* ── Pre-Phanerozoic eons (compressed) ── */}
      {preEons.map((eon) => {
        const y1 = preY(eon.start), y2 = preY(eon.end)
        return (
          <g key={eon.name}>
            <rect x={barX} y={y1} width={barW} height={Math.max(y2 - y1, 8)} fill={eon.color} opacity="0.75" />
            <line x1={barX} y1={y1} x2={barX + barW} y2={y1} stroke={c.bg} strokeWidth="1" />
            <text x={barX + barW + 8} y={(y1 + y2) / 2 + 4} fill={eon.color} fontSize="10" fontWeight="600" fontFamily="monospace">{eon.name}</text>
            <text x={barX - 8} y={y1 + 3} textAnchor="end" fill={c.textSubtle} fontSize="7.5" fontFamily="monospace">{eon.start}</text>
          </g>
        )
      })}
      <text x={barX - 8} y={preBot + 3} textAnchor="end" fill={c.textSubtle} fontSize="7.5" fontFamily="monospace">4,540</text>

      {/* Key Precambrian events */}
      {[
        { ma: 541,  label: 'Cambrian explosion' },
        { ma: 1200, label: 'First sexual reproduction' },
        { ma: 2100, label: 'First eukaryotes' },
        { ma: 2400, label: 'Great Oxidation Event' },
        { ma: 3500, label: 'Earliest microbial fossils' },
        { ma: 4540, label: 'Earth forms' },
      ].map((ev) => (
        <g key={ev.ma}>
          <line x1={barX + barW} y1={preY(ev.ma)} x2={barX + barW + 4} y2={preY(ev.ma)} stroke={c.textDim} strokeWidth="0.8" />
          <text x={barX + barW + 8} y={preY(ev.ma) + 3} fill={c.textSubtle} fontSize="7" fontFamily="sans-serif">{ev.label}</text>
        </g>
      ))}

      {/* ── Right side proportional note ── */}
      <text x="450" y="55" fill={c.phanerozoic} fontSize="9" fontWeight="600" fontFamily="monospace">Phanerozoic</text>
      <text x="450" y="68" fill={c.textDim}    fontSize="8.5" fontFamily="sans-serif">541 Ma — today</text>
      <text x="450" y="80" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">12% of Earth history</text>

      <text x="450" y="108" fill={c.proterozoic} fontSize="9" fontWeight="600" fontFamily="monospace">Proterozoic</text>
      <text x="450" y="121" fill={c.textDim}    fontSize="8.5" fontFamily="sans-serif">2,500–541 Ma</text>
      <text x="450" y="133" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">43% of Earth history</text>

      <text x="450" y="161" fill={c.archean} fontSize="9" fontWeight="600" fontFamily="monospace">Archean</text>
      <text x="450" y="174" fill={c.textDim}    fontSize="8.5" fontFamily="sans-serif">4,000–2,500 Ma</text>
      <text x="450" y="186" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">33% of Earth history</text>

      <text x="450" y="214" fill={c.hadean} fontSize="9" fontWeight="600" fontFamily="monospace">Hadean</text>
      <text x="450" y="227" fill={c.textDim}    fontSize="8.5" fontFamily="sans-serif">4,540–4,000 Ma</text>
      <text x="450" y="239" fill={c.textSubtle} fontSize="8" fontFamily="sans-serif">12% of Earth history</text>

      <text x="280" y="350" textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">
        ICS 2023 · Ma = millions of years ago · Upper section zoomed ×5 relative to lower
      </text>
    </svg>
  )
}
