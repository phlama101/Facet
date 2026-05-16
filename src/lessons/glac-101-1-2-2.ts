import { Layers, Globe, Activity, Zap, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const antarcticIceSheet: Lesson = {
  id: 'glac-101-1-2-2',
  title: 'The Antarctic Ice Sheet: Continent of Ice',
  track: 'cli',
  trackName: 'Glaciology',
  level: 'Foundations',
  duration: '12 min',
  xpReward: 120,
  description: `Structure, dynamics, and vulnerabilities of the Antarctic Ice Sheet — Earth\'s largest reservoir of ice and fresh water`,
  sources: [
    { org: 'BAS',   title: 'British Antarctic Survey — Ice Sheet Science',                  url: 'https://www.bas.ac.uk' },
    { org: 'IMBIE', title: 'IMBIE — Ice Sheet Mass Balance Inter-comparison Exercise',       url: 'https://imbie.org' },
    { org: 'NASA',  title: 'NASA — Operation IceBridge / ICESat-2',                         url: 'https://icebridge.gsfc.nasa.gov' },
    { org: 'SCAR',  title: 'SCAR — Scientific Committee on Antarctic Research',             url: 'https://scar.org' },
  ],
  sections: [
    {
      type: 'intro',
      title: `26.5 million cubic kilometres of ice: Antarctica\'s role in Earth\'s climate and sea level`,
      body: `Antarctica is the coldest, driest, and windiest continent on Earth, yet it holds the planet\'s greatest concentration of freshwater: approximately 26.5 million km³ (6,357,350 cu mi) of ice covering an area of 14 million km² (5,405,400 sq mi). At its thickest, the ice reaches 4,776 m (15,669 ft) at Astrolabe Subglacial Basin — deep enough to bury the Alps. This single reservoir contains roughly 58 m (190 ft) of sea level equivalent (SLE), dwarfing all other freshwater sources combined.

The ice sheet is divided into two distinct regions by the Transantarctic Mountains. The East Antarctic Ice Sheet (EAIS) sits primarily on bedrock above sea level and holds approximately 54 m SLE — the majority of Antarctica\'s ice. Its high elevation and cold temperatures make it relatively stable under current climate projections. The West Antarctic Ice Sheet (WAIS) is fundamentally different: grounded largely below sea level on a bed that deepens inland from the coast, holding approximately 3.3 m (11 ft) SLE, and theoretically vulnerable to self-reinforcing retreat. The Antarctic Peninsula, the northernmost arm of the continent, holds a further ~0.2 m SLE and has already experienced dramatic ice shelf collapses.

Beneath the ice, a remarkable hidden world exists. Radar surveys and satellite altimetry have detected approximately 400 subglacial lakes, maintained by geothermal heat from Earth\'s interior and pressure-melting under the immense weight of overlying ice. The largest, Lake Vostok, measures roughly 250 × 50 km (155 × 31 mi) with an estimated volume of ~5,400 km³ (1,295 cu mi) — the largest freshwater lake on Earth by volume. These lakes are connected in active hydrological networks that modulate ice stream dynamics and have been isolated from the surface atmosphere for millions of years.

Ice shelves — floating extensions of grounded ice — fringe approximately 75% of Antarctica\'s coastline, covering ~1.5 million km² (579,150 sq mi). These shelves are not merely passive features; they provide critical buttressing back-stress that restrains the flow of inland ice. Where ice shelves thin or collapse, tributary glaciers accelerate dramatically, as demonstrated by the 2002 Larsen B collapse.

The most urgent concern is the Amundsen Sea sector of the WAIS. Thwaites and Pine Island glaciers are losing mass at accelerating rates, driven by the intrusion of relatively warm Circumpolar Deep Water (CDW) onto the continental shelf and beneath ice shelves. CDW, at 1–2°C above the in-situ freezing point, melts ice shelves from below at rates of 20–70 m/yr (66–230 ft/yr). The EAIS, while showing near-zero or slightly positive mass balance from increased snowfall, cannot offset the accelerating losses from West Antarctica. Antarctica as a whole is now losing approximately 150 Gt (~165.3 billion tons) of ice per year, contributing ~0.4 mm/yr (0.02 in/yr) to sea level rise — a rate that has roughly tripled since the 1990s.`,
      keyTerms: [
        {
          term: 'East Antarctic Ice Sheet',
          def: 'The larger portion of the Antarctic Ice Sheet, grounded primarily above sea level; holds ~54 m sea level equivalent and is relatively stable compared to WAIS.',
        },
        {
          term: 'West Antarctic Ice Sheet',
          def: 'Marine-based ice sheet grounded up to 2,500 m (8,202 ft) below sea level; holds ~3.3 m (11 ft) SLE and is considered the most vulnerable large ice mass on Earth due to retrograde bed slopes.',
        },
        {
          term: 'Ice shelf',
          def: 'A thick floating platform of ice attached to a coastline or ice sheet; provides buttressing back-stress that restrains inland ice flow. Thinning ice shelves accelerate discharge.',
        },
        {
          term: 'Subglacial lake',
          def: 'A body of liquid water at the base of an ice sheet, maintained by geothermal heat and pressure-melting; ~400 detected beneath Antarctica including Lake Vostok.',
        },
        {
          term: 'Circumpolar Deep Water',
          def: 'A relatively warm (1–2°C above freezing), salty water mass circulating in the Antarctic Circumpolar Current that can intrude onto continental shelves and melt ice shelves from below.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Structure and Dynamics of the Antarctic Ice Sheet',
      body: 'The Antarctic Ice Sheet is not a single uniform mass but a complex system of distinct ice bodies, each with different bed topography, flow dynamics, and vulnerability to climate change. Understanding the contrasts between East and West Antarctica is essential to projecting future sea level contributions.',
      cards: [
        {
          name: 'East vs. West Antarctic Ice Sheets',
          icon: Layers,
          color: BRAND.accent,
          desc: 'EAIS rests primarily on bedrock above sea level — more stable; WAIS is a marine ice sheet grounded below sea level — potentially unstable; they are separated by the Transantarctic Mountains.',
          examples: 'EAIS average bed elevation: ~200 m (656 ft) above sea level; WAIS: ~1,000 m (3,281 ft) below sea level — a critical vulnerability. The Transantarctic Mountains (>4,500 m (>14,764 ft)) form a 3,500 km (2,175 mi) spine dividing East from West Antarctica. EAIS shows small positive or near-zero mass balance from increased snowfall; WAIS is losing ~150 Gt/yr (~165.3 billion tons/yr).',
        },
        {
          name: 'Subglacial Lakes and Hydrological System',
          icon: Globe,
          color: BRAND.jade,
          desc: '~400 subglacial lakes detected by radar and satellite altimetry, maintained by geothermal heat and pressure-melting; Lake Vostok is the largest freshwater lake on Earth by volume; subglacial water routes drive ice stream dynamics.',
          examples: 'Lake Vostok (15,690 km² (6,058 sq mi), ~5,400 km³ (1,295 cu mi)) is isolated from the surface for ~15 million years — extreme life forms found. Subglacial drainage connects many lakes in "active" systems that fill and drain over months, producing surface elevation signals. Ice stream dynamics at Siple Coast ice streams are modulated by subglacial water routing between connected lake systems.',
        },
        {
          name: 'Thwaites and the Amundsen Sea Sector',
          icon: Activity,
          color: BRAND.coral,
          desc: 'Thwaites and Pine Island glaciers are losing mass fastest; Circumpolar Deep Water (CDW) intrudes under ice shelves, melting them from below; retrograde bed slopes threaten runaway retreat.',
          examples: 'Thwaites Glacier (Florida-sized) is retreating at 0.6–1 km/yr (0.4–0.6 mi/yr); its loss alone could raise sea level 0.5 m (1.6 ft). Pine Island Glacier thinned 4 m/yr (13 ft/yr) 1994–2012 from basal melt by CDW at +1.5°C above the freezing point. "Doomsday Glacier" nickname reflects scientific concern: full WAIS collapse could raise sea level 3.3 m (11 ft) over centuries.',
        },
        {
          name: 'Antarctic Ice Shelves and Buttressing',
          icon: Zap,
          color: BRAND.gold,
          desc: `Ice shelves fringe 75% of Antarctica\'s coastline; they slow discharge by providing back-stress; Larsen B collapse (2002) demonstrated how ice shelf loss accelerates tributary glaciers; warm oceans threaten shelf stability.`,
          examples: 'Larsen B Ice Shelf (3,250 km² (1,255 sq mi)) collapsed in 35 days in 2002; tributary glaciers accelerated 2–8× within months. Ross Ice Shelf (500,000 km² (193,050 sq mi)) provides critical buttressing to WAIS — its loss would be transformative for sea level. Basal melt rates under the Amundsen Sea ice shelves: 20–70 m/yr (66–230 ft/yr) from CDW — among the highest on Earth.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Antarctic Ice Flow: From Polar Plateau to Southern Ocean',
      body: 'Follow ice from the polar plateau through ice streams and ice shelves to the Southern Ocean.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Follow ice from the polar plateau through ice streams and ice shelves to the Southern Ocean',
        nodes: [
          {
            id: 'polar-plateau',
            label: 'Polar Plateau (EAIS)',
            description: 'High, cold, dry centre of East Antarctica. Summit at Dome A (4,093 m (13,428 ft)). Very slow flow (~1 m/yr (3 ft/yr)).',
            color: BRAND.accent,
          },
          {
            id: 'transantarctic',
            label: 'Transantarctic Mountains',
            description: '3,500 km (2,175 mi) barrier separating EAIS and WAIS. Glaciers flow through passes.',
            color: BRAND.accentHot,
          },
          {
            id: 'wais-basin',
            label: 'WAIS Basin (Below Sea Level)',
            description: 'West Antarctic basins 1,000–2,500 m (3,281–8,202 ft) below sea level. Vulnerable to marine instability.',
            color: BRAND.jade,
          },
          {
            id: 'ice-stream',
            label: 'Ice Streams (Thwaites, PIG, Siple)',
            description: 'Fast-flowing corridors draining WAIS. 1–10 km/yr (0.6–6.2 mi/yr). Controlled by subglacial water and geology.',
            color: BRAND.coral,
          },
          {
            id: 'ice-shelf',
            label: 'Ice Shelves (Ross, Ronne, Amery)',
            description: 'Floating extensions of grounded ice. Provide buttressing. Thinning from CDW basal melt.',
            color: BRAND.gold,
          },
          {
            id: 'calving-ocean',
            label: 'Calving Front / Southern Ocean',
            description: 'Icebergs calve. CDW intrusion melts from below. Total Antarctic discharge: ~2,200 km³ (528 cu mi)/yr.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'polar-plateau',  to: 'transantarctic',  label: 'Slow EAIS flow' },
          { from: 'transantarctic', to: 'ice-stream',      label: 'Outlet glaciers through mountain passes' },
          { from: 'wais-basin',     to: 'ice-stream',      label: 'WAIS drainage via fast outlets' },
          { from: 'ice-stream',     to: 'ice-shelf',       label: 'Ice thins and goes afloat' },
          { from: 'ice-shelf',      to: 'calving-ocean',   label: 'Calving + basal melt' },
          { from: 'wais-basin',     to: 'calving-ocean',   label: 'Direct marine exposure at grounding line' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Why is the West Antarctic Ice Sheet (WAIS) considered more vulnerable to rapid collapse than the East Antarctic Ice Sheet (EAIS)?',
          a: [
            'The WAIS is thinner and therefore has less total ice to lose',
            'The WAIS is largely grounded below sea level on retrograde bed slopes, making it susceptible to Marine Ice Sheet Instability (MISI) — a self-reinforcing retreat mechanism',
            'The WAIS is exposed to more solar radiation because it faces toward the equator',
            'The WAIS has no ice shelves to protect it from ocean waves and calving',
          ],
          correct: 1,
          explain: `Marine Ice Sheet Instability (MISI) arises on retrograde bed slopes — where the bed deepens inland from the coast. When the grounding line retreats onto a retrograde slope, the ice column above the grounding line becomes thicker and therefore produces more driving stress and ice flux. This increased flux further accelerates retreat, producing a positive feedback. The theoretical framework (Weertman 1974) showed that grounding lines on retrograde slopes have no stable equilibrium — once retreat initiates, it accelerates. The WAIS is grounded up to 2,500 m (8,202 ft) below sea level on retrograde slopes throughout the Amundsen and Weddell Sea sectors, making it theoretically susceptible. EAIS basins are primarily above sea level, so their grounding lines are not vulnerable to this mechanism. Whether MISI is currently active in WAIS remains actively debated.`,
        },
        {
          q: 'Lake Vostok, the largest Antarctic subglacial lake, has been isolated from the surface for approximately 15 million years. What maintains liquid water in a lake buried under ~4 km of ice at −55°C surface temperatures?',
          a: [
            'Magmatic heat from a volcanic hotspot beneath the lake',
            'Pressure-melting (the weight of overlying ice lowers the freezing point) combined with geothermal heat from Earth\'s interior',
            'Chemical antifreeze compounds (salts and methane hydrates) dissolved in the lake water',
            'Tidal flexing of the Antarctic crust generates frictional heat that melts the base',
          ],
          correct: 1,
          explain: `The melting point of ice decreases by approximately 0.074°C per MPa of pressure. At Lake Vostok\'s depth of ~4 km (2.5 mi), the pressure is ~40 MPa, reducing the melting point to approximately −3°C. Combined with geothermal heat flux (~50–60 mW/m², sufficient to melt ~5–6 mm of ice per year), the base of the ice sheet reaches the pressure-melting point. The ice above the lake is partially at the melting point (warm-based), and basal melt produces water that drains to the subglacial topographic depression where Lake Vostok sits. The lake water column is continuously replenished by basal melt from the overlying ice. Despite isolation for ~15 million years, Lake Vostok\'s water has measurable microbial life — one of the most extreme biotopes on Earth.`,
        },
        {
          q: 'What is Circumpolar Deep Water (CDW) and why is it important for Antarctic ice sheet stability?',
          a: [
            'Cold, fresh meltwater that circulates around Antarctica and protects ice shelves from warm ocean water',
            'A relatively warm (~1–2°C), salty water mass that circulates around Antarctica and can be upwelled onto the continental shelf, melting ice shelves from below',
            'A deep, cold water mass formed by sea ice brine rejection that sinks to the ocean floor around Antarctica',
            'The seasonal layer of warm surface water in summer that accelerates calving of icebergs',
          ],
          correct: 1,
          explain: `Circumpolar Deep Water (CDW) is a water mass circulating in the Antarctic Circumpolar Current at depths of ~200–800 m, with temperatures 1–3°C above the in-situ freezing point of seawater. Under natural conditions, CDW is kept offshore by the Antarctic Slope Front — a density boundary that limits intrusion onto the continental shelf. However, in the Amundsen Sea, the continental shelf is broad and the bathymetry allows CDW to intrude and access ice shelf cavities. Where CDW contacts ice shelves, basal melt rates reach 20–70 m/yr (66–230 ft/yr) (vs. ~1 m/yr (3 ft/yr) for cold-water shelf melting). Climate models suggest that shifts in Southern Ocean wind patterns (linked to stratospheric ozone depletion and greenhouse gas forcing) may be enhancing CDW intrusion, amplifying WAIS mass loss. This ocean-ice feedback is central to uncertainty in Antarctic sea level projections.`,
        },
        {
          q: 'Following the collapse of the Larsen B Ice Shelf in 2002, what happened to the tributary glaciers that had previously flowed into it?',
          a: [
            'Tributary glaciers slowed dramatically as they lost the driving force of ice shelf flow',
            'Tributary glaciers accelerated 2–8× within months as the buttressing back-stress was removed',
            'Tributary glaciers advanced and thickened as they filled the void left by the ice shelf',
            'Tributary glaciers were unaffected because they were grounded and not floating',
          ],
          correct: 1,
          explain: `The Larsen B collapse was a natural experiment that directly confirmed the buttressing hypothesis. Before collapse, the ice shelf exerted back-stress on eight tributary glaciers, restraining their flow. Within months of the February–March 2002 collapse (3,250 km² in ~35 days), Eric Rignot and Robert Thomas measured glacier velocities using InSAR. Glaciers that had flowed into Larsen B accelerated 2–8× — the Crane Glacier quadrupled from ~0.7 to ~3 km/yr within one year. Glaciers that flowed into the remaining Larsen C shelf (which has not collapsed) showed no change. This direct before-and-after comparison provided the clearest evidence that ice shelves actively buttress inland ice, and by extension that ice shelf loss from ocean warming can directly accelerate ice sheet discharge and sea level contribution.`,
        },
        {
          q: `Antarctica\'s total ice volume of ~26.5 million km³ represents approximately how much potential sea level rise?`,
          a: [
            'About 5.8 m — roughly equal to Greenland\'s contribution',
            'About 58 m — enough to transform Earth\'s coastlines beyond recognition',
            'About 580 m — but most ice is below sea level so it does not count',
            'About 0.58 m — Antarctica is too cold to contribute significantly',
          ],
          correct: 1,
          explain: `Converting Antarctic ice volume to sea level equivalent (SLE): ice density (917 kg/m³) / seawater density (1,025 kg/m³) × volume above floatation / ocean area. The EAIS contains ~53.3 m SLE, the WAIS ~3.3 m SLE, and the Antarctic Peninsula ~0.2 m SLE, totalling ~58 m. This dwarfs all other freshwater sources: Greenland (~7.4 m), mountain glaciers (~0.4 m), and permafrost. However, the timescale matters critically: full deglaciation of Antarctica would require sustained multi-millennial warming far beyond any scenario in the next few centuries. Under IPCC AR6 scenarios, Antarctic contribution by 2100 is projected at 0.03–0.28 m (medium confidence), with low-likelihood but high-impact scenarios (involving Marine Ice Cliff Instability) potentially contributing up to 0.56 m from Antarctica alone by 2100. The 58 m figure represents the long-term ultimate risk, not the near-term projection.`,
        },
      ],
    },
  ],
}

export default antarcticIceSheet
