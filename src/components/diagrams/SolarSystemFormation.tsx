'use client'

// Solar system formation sequence (nebular hypothesis).
// Five stages from molecular cloud to mature solar system.
export function SolarSystemFormation() {
  const c = {
    nebula:  '#B57EDC',   // amethyst — molecular cloud / gas
    dust:    '#9CA0AE',   // gray — dust / solid grains
    disk:    '#7AD7F0',   // accent — protoplanetary disk
    star:    '#E4B74A',   // gold — protostar / Sun
    planet:  '#F28C76',   // coral — planets
    bg:      '#0E0F14',
    surface: '#16181F',
    border:  '#2A2D38',
    text:    '#EDEEF2',
    textDim: '#9CA0AE',
    textSubtle: '#6B6F7C',
  }

  // 5 panels arranged horizontally
  const stages = [
    {
      title: '① Molecular Cloud',
      time: '~5 Gyr before solar system',
      desc: ['Cold H₂, He, and', 'dust; triggered by', 'supernova shockwave'],
    },
    {
      title: '② Collapse &',
      titleB: 'Disk Formation',
      time: '~4.6 Gyr ago',
      desc: ['Gravity compresses', 'cloud; conservation', 'of angular momentum', 'flattens it into disk'],
    },
    {
      title: '③ Protostar',
      titleB: '+ Disk',
      time: '~4.57 Gyr ago',
      desc: ['Nuclear fusion begins;', 'disk of gas and dust', 'surrounds young Sun;', 'temperature gradient'],
    },
    {
      title: '④ Planetesimals',
      titleB: '& Planets',
      time: '4.57–4.5 Gyr ago',
      desc: ['Dust grains clump;', 'planetesimals form;', 'runaway accretion;', 'Late Heavy Bombardment'],
    },
    {
      title: '⑤ Solar System',
      titleB: 'Today',
      time: 'Present',
      desc: ['8 planets, asteroid', 'belt, Kuiper belt;', 'debris cleared by', 'Jupiter/Saturn'],
    },
  ]

  const panelW = 100
  const gap    = 12
  const startX = 14
  const panelH = 210
  const panelY = 50

  const cx = (i: number) => startX + i * (panelW + gap) + panelW / 2

  // Stage visual SVG shapes
  const StageVisual = ({ i, panX, panY }: { i: number; panX: number; panY: number }) => {
    const vcx = panX + panelW / 2
    const vcy = panY + 55
    switch (i) {
      case 0: // Amorphous molecular cloud
        return (
          <g opacity="0.75">
            {[[-15,-10,20,14],[10,-15,16,10],[-8,10,18,12],[5,8,14,10],[-18,2,15,10]].map(([dx,dy,rx,ry],j) => (
              <ellipse key={j} cx={vcx+dx} cy={vcy+dy} rx={rx} ry={ry} fill={c.nebula} opacity="0.35" />
            ))}
          </g>
        )
      case 1: // Collapsing disk forming
        return (
          <g>
            <ellipse cx={vcx} cy={vcy} rx="30" ry="8" fill={c.disk} opacity="0.4" />
            <ellipse cx={vcx} cy={vcy} rx="20" ry="5" fill={c.disk} opacity="0.5" />
            <circle  cx={vcx} cy={vcy} r="5" fill={c.star} opacity="0.7" />
            {[30,60,90,120,150,210,240,270,300,330].map((deg,j) => (
              <line key={j}
                x1={vcx + 28*Math.cos(deg*Math.PI/180)} y1={vcy + 7*Math.sin(deg*Math.PI/180)}
                x2={vcx + 20*Math.cos(deg*Math.PI/180)} y2={vcy + 5*Math.sin(deg*Math.PI/180)}
                stroke={c.disk} strokeWidth="0.8" opacity="0.5" />
            ))}
          </g>
        )
      case 2: // Protostar + disk
        return (
          <g>
            <ellipse cx={vcx} cy={vcy} rx="35" ry="7" fill={c.disk} opacity="0.35" />
            <ellipse cx={vcx} cy={vcy} rx="22" ry="5" fill={c.disk} opacity="0.45" />
            <circle  cx={vcx} cy={vcy} r="10" fill={c.star} opacity="0.9" />
            <circle  cx={vcx} cy={vcy} r="14" fill="none" stroke={c.star} strokeWidth="0.8" opacity="0.3" />
            {/* Jets */}
            <line x1={vcx} y1={vcy-10} x2={vcx} y2={vcy-30} stroke={c.star} strokeWidth="1.5" opacity="0.5" />
            <line x1={vcx} y1={vcy+10} x2={vcx} y2={vcy+30} stroke={c.star} strokeWidth="1.5" opacity="0.5" />
          </g>
        )
      case 3: // Planetesimals and growing planets
        return (
          <g>
            <circle cx={vcx} cy={vcy} r="9" fill={c.star} opacity="0.9" />
            {/* 3 orbiting planetesimals/planets at different distances */}
            {[18, 28, 38].map((r, j) => (
              <g key={j}>
                <ellipse cx={vcx} cy={vcy} rx={r} ry={r * 0.35} fill="none" stroke={c.dust} strokeWidth="0.5" opacity="0.3" />
                <circle cx={vcx + r * Math.cos(j*2)} cy={vcy + r * 0.35 * Math.sin(j*2)} r={2+j*0.8} fill={c.planet} opacity="0.8" />
              </g>
            ))}
            {/* Scattered debris */}
            {[-30,-15,0,15,30].map((dx,j) => (
              <circle key={j} cx={vcx+dx} cy={vcy+22+j%2*4} r="1.2" fill={c.dust} opacity="0.5" />
            ))}
          </g>
        )
      case 4: // Mature solar system
        return (
          <g>
            <circle cx={vcx} cy={vcy} r="8" fill={c.star} opacity="1" />
            {[13, 18, 24, 32].map((r, j) => (
              <g key={j}>
                <ellipse cx={vcx} cy={vcy} rx={r} ry={r * 0.35} fill="none" stroke={c.border} strokeWidth="0.5" opacity="0.4" />
                <circle cx={vcx+r} cy={vcy} r={1.5+j*0.4} fill={j < 2 ? c.planet : c.nebula} opacity="0.85" />
              </g>
            ))}
            {/* Asteroid belt (dots) */}
            {[0,1,2,3,4].map(j => (
              <circle key={j} cx={vcx + 20 * Math.cos(j * 1.3)} cy={vcy + 7 * Math.sin(j * 1.3)} r="0.8" fill={c.dust} opacity="0.5" />
            ))}
          </g>
        )
      default: return null
    }
  }

  return (
    <svg viewBox="0 0 560 310" width="100%" style={{ display: 'block' }}
      role="img" aria-label="Solar system formation sequence: molecular cloud collapse, disk formation, protostar, planetesimals, to mature solar system">
      <rect width="560" height="310" fill={c.bg} rx="4" />

      {/* Arrow connectors between panels */}
      {[0,1,2,3].map(i => (
        <g key={i}>
          <line
            x1={startX + (i+1) * panelW + i * gap - 2}
            y1={panelY + panelH / 2}
            x2={startX + (i+1) * (panelW + gap) + 4}
            y2={panelY + panelH / 2}
            stroke={c.border} strokeWidth="1.5"
          />
          <polygon
            points={`${startX + (i+1) * (panelW + gap) + 4},${panelY + panelH / 2 - 4} ${startX + (i+1) * (panelW + gap) + 4},${panelY + panelH / 2 + 4} ${startX + (i+1) * (panelW + gap) + 10},${panelY + panelH / 2}`}
            fill={c.border}
          />
        </g>
      ))}

      {stages.map((stage, i) => {
        const panX = startX + i * (panelW + gap)
        return (
          <g key={i}>
            {/* Panel background */}
            <rect x={panX} y={panelY} width={panelW} height={panelH} rx="3"
              fill={c.surface} stroke={c.border} strokeWidth="1" />

            {/* Stage visual */}
            <StageVisual i={i} panX={panX} panY={panelY} />

            {/* Stage title */}
            <text x={cx(i)} y={panelY + 100} textAnchor="middle" fill={c.text} fontSize="8.5" fontWeight="700" fontFamily="monospace">{stage.title}</text>
            {'titleB' in stage && (
              <text x={cx(i)} y={panelY + 112} textAnchor="middle" fill={c.text} fontSize="8.5" fontWeight="700" fontFamily="monospace">{(stage as { titleB?: string }).titleB}</text>
            )}

            {/* Time label */}
            <text x={cx(i)} y={panelY + 128} textAnchor="middle" fill={c.textSubtle} fontSize="7" fontFamily="sans-serif">{stage.time}</text>

            {/* Description */}
            {stage.desc.map((line, j) => (
              <text key={j} x={cx(i)} y={panelY + 146 + j * 12} textAnchor="middle" fill={c.textDim} fontSize="7.5" fontFamily="sans-serif">{line}</text>
            ))}
          </g>
        )
      })}

      <text x="280" y="302" textAnchor="middle" fill={c.textSubtle} fontSize="7.5" fontFamily="sans-serif">
        Nebular hypothesis · Schmidt (1944), Safronov (1969) · visuals schematic
      </text>
    </svg>
  )
}
