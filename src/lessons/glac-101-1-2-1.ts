import { Globe, Layers, Activity, Zap, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const greenlandIceSheet: Lesson = {
  id: 'glac-101-1-2-1',
  title: 'The Greenland Ice Sheet: Structure, Dynamics, and Change',
  track: 'cli',
  trackName: 'Glaciology',
  level: 'Foundations',
  duration: '12 min',
  xpReward: 120,
  description: `Architecture, ice streams, surface melt processes, and accelerating mass loss of the world\'s second-largest ice sheet`,
  sources: [
    { org: 'NSIDC',    title: 'NSIDC — Greenland Ice Sheet Today',                              url: 'https://nsidc.org/greenland-today' },
    { org: 'NASA',     title: 'NASA — Oceans Melting Greenland',                                url: 'https://omg.jpl.nasa.gov' },
    { org: 'IMBIE',    title: 'IMBIE — Ice Sheet Mass Balance Inter-comparison Exercise',       url: 'https://imbie.org' },
    { org: 'PROMICE',  title: 'PROMICE — Programme for Monitoring of the Greenland Ice Sheet',  url: 'https://promice.dk' },
  ],
  sections: [
    {
      type: 'intro',
      title: `A 3-kilometre-thick island of ice: Greenland\'s frozen heritage and uncertain future`,
      body: `The Greenland Ice Sheet (GIS) covers approximately 1.71 million km² (660,163 sq mi) — about 80% of Greenland\'s land area — and reaches a maximum thickness of ~3,400 m (11,155 ft) near the Camp Century area in the northwest. Its total ice volume is estimated at ~2.85 million km³ (683,715 cu mi), equivalent to ~7.4 m (24 ft) of global mean sea level rise if fully melted. The ice sheet is not simply a featureless dome: bed topography is highly irregular, with deep subglacial troughs and basins in the central and northern interior lying well below sea level, while peripheral mountain ranges along the eastern and western coasts confine ice flow into discrete outlet fjords.

Two primary mechanisms drain ice from the Greenland Ice Sheet. The first is surface meltwater runoff: summer warming melts the lower-elevation ablation zone, producing meltwater that drains to the ocean via supraglacial streams and rivers, moulins, and subglacial conduits. The second is dynamic ice discharge: fast-moving outlet glaciers — ice streams — carry interior ice to the coast, where icebergs calve directly into the ocean. The partitioning between these two pathways, and their relative acceleration under warming, is a central question in cryosphere science.

Major ice streams include Jakobshavn Isbrae (Sermeq Kujalleq) on the west coast — historically the world\'s fastest glacier, flowing at ~40–46 m/day — as well as Helheim Glacier and Kangerdlugssuaq Glacier on the southeast coast, Petermann Glacier in the northwest, and Zachariae Isbrae in the northeast. Together these fast-flowing outlets drain the majority of the ice sheet\'s accumulation and represent focal points of mass loss acceleration.

The surface hydrological system is highly dynamic. During summer, melt ponds — supraglacial lakes — form on the ice surface across wide areas of the ablation and lower accumulation zones. These lakes can drain catastrophically through moulins: near-vertical shafts that route large pulses of meltwater directly to the glacier bed in hours. This sudden delivery of water raises basal water pressure, reducing friction and temporarily accelerating ice flow. Englacial and subglacial drainage networks evolve over the melt season from inefficient distributed systems (which maximise velocity response) to efficient channelised systems (which reduce it).

Ocean warming is a powerful driver of mass loss at marine-terminating glaciers. Warm, salty Atlantic Water (AW) at depths of 150–800 m intrudes into Greenland fjords, producing subaqueous melt rates 10–100× higher than surface melt rates. This ocean-driven melt has been identified as a primary cause of calving front retreat, glacier acceleration, and dynamic thinning at Jakobshavn, Helheim, Kangerdlugssuaq, and other major outlets during the warm period 2000–2012. NASA\'s Oceans Melting Greenland (OMG) mission documented AW temperatures up to 4°C above the freezing point at terminus depths of 300–600 m.

Total Greenland mass loss has accelerated markedly. IMBIE assessments estimate average loss of ~137 Gt/yr during 2003–2010, rising to ~286 Gt/yr during 2010–2018. Cumulative loss 2002–2020 exceeded ~4,700 Gt — equivalent to approximately 13 mm of global sea level rise. These trends, driven by both increased surface melt (responding to atmospheric warming) and increased dynamic discharge (responding to ocean warming and calving front retreat), are projected to continue and intensify under all emissions scenarios.`,
      keyTerms: [
        {
          term: 'Greenland Ice Sheet',
          def: 'The second-largest ice body on Earth, covering ~1.71 million km² with a volume of ~2.85 million km³ — equivalent to ~7.4 m of global sea level rise.',
        },
        {
          term: 'ice stream',
          def: 'A fast-moving corridor of ice within an ice sheet that flows much faster than surrounding ice, typically occupying a deep bedrock trough and draining large catchments.',
        },
        {
          term: 'moulin',
          def: 'A near-vertical shaft in glacier ice through which surface meltwater drains rapidly to the glacier bed, raising basal water pressure and potentially accelerating ice flow.',
        },
        {
          term: 'marine-terminating glacier',
          def: 'A glacier whose terminus ends in the ocean or a fjord, losing mass by both calving of icebergs and subaqueous melt driven by warm ocean water.',
        },
        {
          term: 'subglacial lake',
          def: 'A liquid water body beneath a glacier or ice sheet, maintained by geothermal heat and insulation by the overlying ice; can affect basal sliding and ice dynamics.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Greenland Ice Sheet: Architecture, Dynamics, and Change',
      body: 'Four interlocking systems govern how the Greenland Ice Sheet is structured, how it moves, and why it is losing mass. Understanding each — from bed topography to ocean-ice interaction — is essential for projecting future sea level contributions.',
      cards: [
        {
          name: 'Ice Sheet Architecture and Bed Topography',
          icon: Globe,
          color: BRAND.accentHot,
          desc: 'Central dome ~3,200 m above sea level; peripheral mountains channel ice into outlet fjords; BedMachine dataset reveals deep troughs below sea level vulnerable to ocean intrusion.',
          examples: `BedMachine v3 (Morlighem et al. 2017) shows deep fjords: Jakobshavn trough reaches 1,500 m below sea level. The central basin (\'Camp Century\' area) lies 500–1,000 m below sea level under 3 km of ice. Peripheral mountains (Watkins Range, Stauning Alps) act as barriers that channel ice into discrete outlet glaciers.`,
        },
        {
          name: 'Jakobshavn and the Major Ice Streams',
          icon: Activity,
          color: BRAND.jade,
          desc: 'Jakobshavn Isbrae (Sermeq Kujalleq) is the fastest glacier on Earth at ~40–46 m/day; deep trough enables warm Atlantic Water intrusion; other major outlets: Helheim, Kangerdlugssuaq, Petermann.',
          examples: 'Jakobshavn has retreated ~50 km since 1850 and contributed ~1 mm to global sea level since 1997. Helheim and Kangerdlugssuaq doubled in velocity 2000–2005 following calving front retreat. Petermann Glacier shed 30 km² ice islands in 2010 and 2012 as its floating tongue thinned.',
        },
        {
          name: 'Surface Melt, Moulins, and the Hydrological System',
          icon: Layers,
          color: BRAND.coral,
          desc: 'Summer surface melt area expands from peripheral ablation zones; supraglacial lakes drain rapidly through moulins, delivering large pulses of meltwater to the bed; englacial and subglacial drainage evolves seasonally.',
          examples: `In July 2012, >97% of Greenland\'s surface experienced melt — an unprecedented event in satellite records. A single supraglacial lake (7 km diameter) can drain through a moulin in 2 hours, routing 0.044 km³ to the bed. Efficient channelised subglacial drainage develops by midsummer, reducing the velocity response to meltwater inputs.`,
        },
        {
          name: 'Ocean-Driven Melt and Mass Loss Acceleration',
          icon: Zap,
          color: BRAND.gold,
          desc: 'Warm salty Atlantic Water (AW) at depth intrudes into Greenland fjords, melting marine-terminating glacier fronts from below; subaqueous melt rates 10–100× higher than surface melt rates.',
          examples: `OMG mission (NASA) found AW warming of up to 4°C above freezing at terminus depths of 300–600 m. Jakobshavn\'s acceleration is linked to warming of Ilulissat Icefjord by 1–2°C of AW intrusion since the 1990s. Greenland total mass loss 2002–2020: ~4,700 Gt — equivalent to ~13 mm of global sea level rise.`,
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Greenland Mass Loss: Two Pathways to the Ocean',
      body: 'Follow the two pathways by which Greenland loses mass: surface runoff and dynamic ice discharge.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Follow the two pathways by which Greenland loses mass: surface runoff and dynamic ice discharge',
        nodes: [
          {
            id: 'central-dome',
            label: 'Central Ice Dome',
            description: 'Summit at ~3,200 m. Slow interior flow. Annual accumulation ~30–50 cm ice-eq.',
            color: BRAND.accent,
          },
          {
            id: 'firn-plateau',
            label: 'Firn Plateau',
            description: 'High-elevation accumulation zone. Snow preserved year-round. Percolation refreezing adds superimposed ice.',
            color: BRAND.jade,
          },
          {
            id: 'ice-stream-trunk',
            label: 'Ice Stream / Outlet Glacier',
            description: 'Flow accelerates in deep bedrock troughs. Velocities 1–50 m/day. Marine-terminating ends.',
            color: BRAND.accentHot,
          },
          {
            id: 'supraglacial-lake',
            label: 'Supraglacial Lake',
            description: 'Meltwater ponds on the ice surface in summer. Can drain catastrophically via moulins.',
            color: BRAND.gold,
          },
          {
            id: 'moulin-subglacial',
            label: 'Moulin → Subglacial System',
            description: 'Rapid drainage to the bed. Raises basal water pressure. Temporary velocity acceleration.',
            color: BRAND.coral,
          },
          {
            id: 'ocean-calving',
            label: 'Fjord / Ocean Interface',
            description: 'Calving of icebergs + subaqueous melt from warm Atlantic Water intrusion. ~50% of total mass loss.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'central-dome',      to: 'firn-plateau',      label: 'Slow interior creep' },
          { from: 'firn-plateau',      to: 'ice-stream-trunk',  label: 'Ice accelerates into troughs' },
          { from: 'ice-stream-trunk',  to: 'ocean-calving',     label: 'Dynamic discharge (calving)' },
          { from: 'firn-plateau',      to: 'supraglacial-lake', label: 'Summer surface melt' },
          { from: 'supraglacial-lake', to: 'moulin-subglacial', label: 'Rapid lake drainage' },
          { from: 'moulin-subglacial', to: 'ocean-calving',     label: 'Subglacial runoff to fjord' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'If the entire Greenland Ice Sheet (volume ~2.85 million km³) melted, by approximately how much would global sea level rise?',
          a: [
            'About 0.74 m — comparable to 20th-century sea level rise',
            'About 7.4 m — enough to inundate major coastal cities worldwide',
            'About 74 m — enough to submerge most of the world\'s continental shelves',
            'About 0.074 m — a negligible contribution given the ice sheet\'s remoteness',
          ],
          correct: 1,
          explain: `Converting ice volume to sea level equivalent requires accounting for ice density (~917 kg/m³) vs. seawater (~1,025 kg/m³), the area of the global ocean (3.62 × 10¹⁴ m²), and the fact that not all Greenland ice is above the marine floatation line. The standard estimate is ~7.4 m of global mean sea level rise if Greenland melted completely. This would be catastrophic: it would inundate coastal cities including Mumbai, Miami, Amsterdam, Shanghai, and New York. The 7.4 m estimate assumes current ocean area; as land formerly below sea level is flooded, the ocean area would increase, reducing the final level slightly. At current melt rates (~280 Gt/yr), Greenland contributes ~0.75 mm/yr — contributing ~7.4 m on a ~10,000 year time scale at today\'s rate (though rates will accelerate with warming).`,
        },
        {
          q: `Jakobshavn Isbrae is notable for being one of the world\'s fastest glaciers. What is the primary physical reason for its extreme velocity?`,
          a: [
            'It receives exceptional snowfall accumulation that drives unusually high driving stress',
            'It occupies a deep bedrock trough that channels warm ocean water to the calving front, while the trough geometry concentrates ice flux and basal sliding',
            'It is located at a tectonic plate boundary where geothermal heat maximises basal melting',
            'Surface melting is so intense that a thick water layer keeps the glacier permanently floating',
          ],
          correct: 1,
          explain: `Jakobshavn Isbrae\'s exceptional velocity results from multiple compounding factors: (1) it drains a large catchment (~6.5% of the GIS area) through a very narrow, deep trough (bottom ~1,500 m below sea level); (2) the deep trough allows warm Atlantic Water (AW at +1 to +3°C) to reach the calving front at depth, producing extremely high subaqueous melt rates (10–100 m/day); (3) AW intrusion has caused the calving front to retreat ~50 km since 1850, releasing buttressing and allowing acceleration; (4) the narrow trough concentrates basal melt and deformation into a small cross-section, maximising velocity. At ~40–46 m/day, Jakobshavn discharges enough ice to produce ~20–30 km³/yr — making it among the largest single contributors to Greenland mass loss.`,
        },
        {
          q: 'In July 2012, satellite observations showed surface melt occurring over >97% of the Greenland Ice Sheet. What made this event so scientifically remarkable?',
          a: [
            'It was the first time surface melt had been observed on Greenland using satellites',
            'It exceeded all previous satellite-era records — prior maximum melt extent was ~55%; ice cores show similar events only occur approximately once per ~150 years',
            'The melt was caused by an unusual volcanic eruption that warmed the atmosphere above Greenland',
            'It directly triggered a 3 mm global sea level rise in a single month',
          ],
          correct: 1,
          explain: `The July 8–12, 2012 melt event was extraordinary: within days, the melt area expanded from ~40% to >97% of the ice sheet surface — including the normally cold, dry Summit Station at 3,216 m elevation. NASA scientists initially questioned their instruments before cross-validating with multiple satellites. Ice cores from Summit reveal that a similar near-total surface melt event occurred in ~1889, and before that approximately every 150 years during an anomalously warm period. The 2012 event was caused by an unusually persistent high-pressure ridge (a "heat dome") that drove warm southerly air across Greenland. While the melt refroze quickly in the cold interior and did not directly cause proportional runoff (much refroze as ice lenses in firn), it demonstrated the ice sheet\'s vulnerability to extreme atmospheric circulation events that are increasing in frequency.`,
        },
        {
          q: 'Subaqueous (underwater) melting at marine-terminating glacier fronts in Greenland is driven primarily by:',
          a: [
            'Tidal flexing that fractures ice at the waterline, exposing fresh ice to seawater',
            'Warm Atlantic Water (AW) at depth (100–600 m) intruding into glacial fjords, melting ice 10–100× faster than surface processes',
            'Geothermal heat from mid-Atlantic Ridge volcanism conducted through the seafloor',
            'Freshwater runoff from land mixing with seawater and warming the fjord surface layer',
          ],
          correct: 1,
          explain: `Greenland\'s major outlet glaciers terminate in deep fjords filled with cold, fresh Polar Water in the surface layer (0–150 m) and warm, salty Atlantic Water (AW) at depth (150–800 m). AW has temperatures +1 to +4°C above the melting point of ice, producing extraordinarily high melt rates at the submerged calving front — estimates range from 10 to >100 m/day of submarine melt. Subglacial freshwater discharge from the glacier bed creates turbulent plumes that rise along the calving face, entraining warm AW from depth and continuously supplying heat to the ice. NASA\'s Oceans Melting Greenland (OMG) mission documented AW warming of ~2°C in several fjords over 2016–2021. This submarine melt drove calving front retreat at Jakobshavn, Helheim, and Kangerlussuaq during the warm period 2000–2010.`,
        },
        {
          q: 'The BedMachine dataset revealed that many Greenland fjords penetrate much deeper below sea level than previously known. Why does this matter for projections of future ice loss?',
          a: [
            'Deeper fjords mean glaciers are thicker, so they will take longer to melt completely',
            'Deeper troughs allow warm ocean water to reach further inland below the grounding line, potentially triggering sustained retreat once initiated — similar to marine ice sheet instability',
            'Deeper fjords have more stable grounding lines that resist the retreat driven by ocean warming',
            'The depth of fjords is irrelevant — only surface temperature controls Greenland mass loss',
          ],
          correct: 1,
          explain: `BedMachine v3 (2017) used mass conservation and new airborne radar to map Greenland\'s bed at 150 m resolution, revealing fjords ~1,000 m deeper than previous maps. This matters because many Greenland outlet glaciers have retrograde bed slopes (bed deepening inland from the coast). If warm AW drives the grounding line to retreat past a ridge onto a retrograde slope, the ice above the grounding line becomes thicker and faster-flowing — triggering further retreat in a positive feedback (Marine Ice Sheet Instability, MISI). Previously, this instability was considered primarily an Antarctic problem. BedMachine revealed that ~40% of Greenland\'s marine-terminating catchments have retrograde beds, making them potentially vulnerable to MISI. This revised understanding has led to upward revisions in Greenland sea level contribution projections under high-emissions scenarios.`,
        },
      ],
    },
  ],
}

export default greenlandIceSheet
