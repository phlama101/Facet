import { Globe, Layers, Activity, ArrowRight, Zap } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const glacierTypes: Lesson = {
  id: 'glac-101-1-1-4',
  title: 'Types and Global Distribution of Glaciers',
  track: 'cli',
  trackName: 'Glaciology',
  level: 'Foundations',
  duration: '12 min',
  xpReward: 120,
  description: 'The major classes of glaciers — from cirque glaciers to ice sheets — their morphology, thermal regime, and global distribution',
  sources: [
    { org: 'NSIDC', title: 'NSIDC — Glacier classification',           url: 'https://nsidc.org' },
    { org: 'WGMS',  title: 'WGMS — Fluctuations of Glaciers',          url: 'https://wgms.ch' },
    { org: 'RGI',   title: 'RGI — Randolph Glacier Inventory',         url: 'https://glims.org/RGI' },
    { org: 'IPCC',  title: 'IPCC — Chapter 2: High Mountain Areas',    url: 'https://ipcc.ch' },
  ],
  sections: [
    {
      type: 'intro',
      title: `From cirque hollows to continent-covering ice sheets: a guide to the world\'s ice`,
      body: `The Randolph Glacier Inventory (RGI) catalogues approximately 220,000 glaciers covering roughly 705,000 km² of Earth\'s surface — and that figure excludes the Greenland and Antarctic Ice Sheets entirely. Including those giants, the cryosphere stores roughly 26.9 million km³ of ice, enough to raise global sea level by ~65 m if melted completely. Understanding this ice requires two classification frameworks: morphological (how a glacier relates to underlying topography) and thermal (the temperature structure of the ice).

Morphological classification divides glaciers into unconstrained types — ice caps and ice sheets, which spread independently of bedrock relief — and topographically constrained types, which are shaped by the terrain they occupy. Cirque glaciers occupy the armchair-shaped hollows (cirques) eroded into mountain flanks; they are small, highly climate-sensitive, and found on every major mountain range. Valley glaciers flow down pre-existing river valleys, can extend tens to hundreds of kilometres, and transport ice from high accumulation zones to lower ablation zones. Piedmont glaciers spread onto flat plains after leaving a confining valley. Ice fields are plateau ice masses drained by outlet glaciers that follow underlying topography, while ice caps are smooth domes whose flow is independent of the bed. Ice sheets are continental-scale ice caps exceeding 50,000 km²; only two exist today — Antarctica and Greenland.

Thermal classification controls dynamics: cold (polar) glaciers are frozen to their beds and flow only by internal creep; warm (temperate) glaciers are everywhere at the pressure-melting point, enabling basal sliding and abundant meltwater production; polythermal glaciers have cold upper ice and margins but warm, sliding-capable basal zones, producing complex drainage and surge behaviour.

Geographically, glacier ice is concentrated at high latitudes and high altitudes. The largest volumes outside the ice sheets are in Alaska and adjacent Yukon (~86,000 km²), the Canadian Arctic Archipelago (~150,000 km²), Svalbard (~34,000 km²), and High Mountain Asia (~100,000 km²). Patagonia holds South America\'s largest ice masses (the Northern and Southern Patagonian Icefields). Smaller but highly visible glaciers exist in the Alps, New Zealand, East Africa (Kilimanjaro, Mount Kenya), and Papua. It is important to distinguish glacier ice — ice formed by the compaction of snow on land — from sea ice, which forms by direct freezing of ocean water and has negligible effect on sea level.`,
      keyTerms: [
        {
          term: 'valley glacier',
          def: 'A glacier constrained by and flowing down a pre-existing valley; can extend 10s–100s km from high accumulation zones to lower ablation zones.',
        },
        {
          term: 'ice cap',
          def: 'A dome-shaped glacier (<50,000 km²) that spreads radially independent of underlying topography; e.g., Vatnajökull, Iceland (8,100 km²).',
        },
        {
          term: 'ice sheet',
          def: `A continental-scale ice mass exceeding 50,000 km²; only Antarctica and Greenland qualify today, containing 99% of Earth\'s glacier ice.`,
        },
        {
          term: 'polythermal glacier',
          def: 'A glacier with cold (sub-freezing) ice near its surface and margins but warm (at pressure-melting point) ice at its base, enabling partial basal sliding.',
        },
        {
          term: 'Randolph Glacier Inventory',
          def: 'A globally complete, community-driven inventory of ~220,000 glaciers (RGI 7.0, 2023) providing standardised outlines, areas, and metadata for all glaciers excluding the Greenland and Antarctic Ice Sheets.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Glacier Types, Thermal Regimes, and Ice Sheets',
      body: 'Glaciers are classified by their relationship to underlying topography and by their internal thermal structure. These two frameworks together determine how a glacier flows, how sensitive it is to climate, and how it contributes to sea level. Ice sheets and ice shelves operate at continental scale, with dynamics that differ fundamentally from mountain glaciers.',
      cards: [
        {
          name: 'Morphological Classification',
          icon: Globe,
          color: BRAND.accent,
          desc: 'Glaciers classified by their relationship to underlying topography; unconstrained (ice caps, ice sheets) vs. topographically constrained (cirque, valley, piedmont).',
          examples: `Cirque glaciers occupy armchair-shaped hollows eroded into mountain sides; common in high peaks worldwide. Valley glaciers flow down pre-existing valleys; can be 10s–100s km long (e.g., Hubbard Glacier, Alaska: 122 km). Ice caps are dome-shaped, unconstrained by topography; Vatnajökull, Iceland (8,100 km²) is Europe\'s largest.`,
        },
        {
          name: 'Thermal Classification: Cold, Warm, and Polythermal',
          icon: Layers,
          color: BRAND.jade,
          desc: 'Thermal regime controls basal sliding capacity and meltwater production; cold (polar) ice is frozen to bed; warm (temperate) ice is at pressure-melting point throughout; polythermal has cold upper zone and warm base.',
          examples: 'Temperate glaciers (Alps, Cascades, Alaska) are at pressure-melting point — highly mobile, producing abundant meltwater. Cold-based polar glaciers (interior Antarctica) are frozen to bed — no basal sliding, extremely slow flow. Polythermal glaciers (Svalbard, Arctic Canada) have warm cores but cold margins — complex drainage and surge behaviour.',
        },
        {
          name: 'Ice Sheets and Ice Shelves',
          icon: Activity,
          color: BRAND.coral,
          desc: 'Continental-scale ice masses covering bedrock; Antarctica (26.5 million km³) and Greenland (2.85 million km³) contain 99% of glacier ice; ice shelves are floating extensions of ice sheets.',
          examples: 'If the Antarctic Ice Sheet melted entirely, global sea level would rise ~58 m; Greenland adds ~7.4 m. The Ross Ice Shelf (Texas-sized) slows West Antarctic ice discharge by providing back-stress. East Antarctic Ice Sheet (EAIS) is primarily grounded above sea level; West Antarctic (WAIS) is largely below — more unstable.',
        },
        {
          name: 'Global Distribution and Glacier Inventories',
          icon: ArrowRight,
          color: BRAND.gold,
          desc: 'Glaciers exist on every continent except Australia; concentration in polar and subpolar regions and high mountains; the Randolph Glacier Inventory (RGI 7.0) provides standardised outlines for all glaciers excluding ice sheets.',
          examples: 'High Mountain Asia (Hindu Kush–Himalaya–Karakoram–Tibetan Plateau) holds the largest concentration of ice outside the poles: ~100,000 km². Alaska and adjacent Yukon (~86,000 km²) contribute more to sea level rise than any other non-polar region. Tropical glaciers (Andes, Kilimanjaro, Papua) are critically threatened — many will disappear within decades at current warming rates.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Glacier Types: From Cirque to Ice Sheet',
      body: 'Explore how glacier type, thermal regime, and setting determine ice dynamics and climate sensitivity.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Explore how glacier type, thermal regime, and setting determine ice dynamics and climate sensitivity',
        nodes: [
          {
            id: 'cirque',
            label: 'Cirque Glacier',
            description: 'Small, bowl-shaped glacier in a mountain hollow. Highly sensitive to climate. Can disappear within decades.',
            color: BRAND.accent,
          },
          {
            id: 'valley',
            label: 'Valley Glacier',
            description: 'Long glacier constrained by valley walls. Flows 10–100s km. Common in Alps, Alaska, Andes.',
            color: BRAND.jade,
          },
          {
            id: 'ice-cap',
            label: 'Ice Cap',
            description: 'Dome-shaped mass independent of topography (<50,000 km²). E.g., Vatnajökull, Severny Island.',
            color: BRAND.accentHot,
          },
          {
            id: 'ice-field',
            label: 'Ice Field',
            description: 'Plateau ice mass drained by outlet glaciers following topography. E.g., Patagonian Icefields.',
            color: BRAND.gold,
          },
          {
            id: 'outlet-glacier',
            label: 'Outlet Glacier / Ice Stream',
            description: 'Fast-moving tongue draining an ice cap or ice sheet into a fjord or ocean.',
            color: BRAND.coral,
          },
          {
            id: 'ice-sheet',
            label: 'Ice Sheet (>50,000 km²)',
            description: `Continental-scale: Antarctica and Greenland. 99% of Earth\'s glacier ice. Contains centuries of sea level.`,
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'cirque',         to: 'valley',          label: 'Glacier growth connects cirques' },
          { from: 'valley',         to: 'ice-field',       label: 'Coalescing valley glaciers' },
          { from: 'ice-cap',        to: 'outlet-glacier',  label: 'Ice drains via outlet tongues' },
          { from: 'ice-field',      to: 'outlet-glacier',  label: 'Mountain topography channels flow' },
          { from: 'ice-cap',        to: 'ice-sheet',       label: 'Scale distinction only (50,000 km²)' },
          { from: 'outlet-glacier', to: 'ice-sheet',       label: 'Outlet glaciers drain ice sheets' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The Randolph Glacier Inventory (RGI) catalogues approximately how many glaciers worldwide, and notably excludes which major ice masses?',
          a: [
            '~2,200 glaciers — excludes only sea ice and snow fields',
            '~220,000 glaciers — excludes the Greenland and Antarctic Ice Sheets, which are tracked separately',
            '~22,000 glaciers — excludes all glaciers in Antarctica and the Arctic',
            '~2.2 million glaciers — excludes glaciers smaller than 1 km² in area',
          ],
          correct: 1,
          explain: `The Randolph Glacier Inventory (RGI), maintained by GLIMS (Global Land Ice Measurements from Space), contains approximately 220,000 glaciers covering ~705,000 km² of Earth\'s surface. The Greenland and Antarctic Ice Sheets are explicitly excluded from the RGI because they are tracked by dedicated ice sheet programs (e.g., IMBIE — Ice Sheet Mass Balance Inter-comparison Exercise). Including their peripheral glaciers (glaciers attached to but dynamically distinct from the main ice sheets) is a recent addition. The RGI provides standardised outlines, areas, and metadata essential for global glacier mass change assessments. The latest major release (RGI 7.0, 2023) improved coverage of previously under-mapped regions including High Mountain Asia, Arctic Russia, and the Antarctic periphery.`,
        },
        {
          q: 'A polythermal glacier has cold ice near the surface and margins but warm (temperate) ice at its base. What is the key implication of this thermal structure for glacier dynamics?',
          a: [
            'Polythermal glaciers cannot flow because cold ice is too viscous',
            'Polythermal glaciers can experience basal sliding in warm-based zones while being frozen to the bed in cold margins, creating complex surge behaviour and drainage',
            'Polythermal glaciers always advance because cold ice at the surface suppresses ablation',
            'The thermal structure has no effect on dynamics — only ice thickness matters',
          ],
          correct: 1,
          explain: `In polythermal glaciers, the warm-based interior reaches the pressure-melting point and can slide over the bed, while cold margins are frozen to the substrate and resist motion. This creates a complex pattern: fast-flowing interior ice is laterally constrained by cold frozen margins, building up stresses. Some polythermal glaciers exhibit surge behaviour — episodic rapid advances where the warm-based zone suddenly overcomes cold-margin constraints, releasing stored mass downglacier in short bursts (months to years). Svalbard (Norway) is the global centre of surging glacier research; many of its ~2,000 glaciers have polythermal structure and ~13% are classified as surge-type. The thermal regime also controls where subglacial meltwater forms and drains, affecting fjord oceanography.`,
        },
        {
          q: 'Which of the following correctly ranks glacier types from smallest to largest in terms of total global ice volume?',
          a: [
            'Cirque glaciers < valley glaciers < ice caps < ice fields < Greenland Ice Sheet < Antarctic Ice Sheet',
            'Ice caps < valley glaciers < cirque glaciers < Greenland Ice Sheet < Antarctic Ice Sheet',
            'Valley glaciers < cirque glaciers < ice caps < Greenland Ice Sheet < Antarctic Ice Sheet',
            'Cirque glaciers = valley glaciers < ice caps < Antarctic Ice Sheet < Greenland Ice Sheet',
          ],
          correct: 0,
          explain: `This ranking follows logically from glacier scale. Cirque glaciers occupy small hollows and are typically <1 km³ each (total ~2,000 km³ globally). Valley glaciers are larger (individual glaciers up to a few hundred km³; globally ~100,000 km³). Ice caps are continent-free domes; e.g., all Arctic island caps total ~170,000 km³. The Greenland Ice Sheet contains ~2.85 million km³ (~7.4 m sea level equivalent). The Antarctic Ice Sheet (26.5 million km³, ~58 m sea level equivalent) dwarfs everything else. Note that while there are 220,000 individual mountain glaciers, their combined volume (~170,000 km³) is less than 1% of the Antarctic Ice Sheet — yet they contribute disproportionately to near-term sea level rise because they respond to climate change on decadal time scales, not millennia.`,
        },
        {
          q: 'Ice shelves are floating extensions of ice sheets grounded on the ocean floor. What is their most important dynamic role?',
          a: [
            'They protect coastal regions from erosion by absorbing wave energy',
            'They provide back-stress (buttressing) that slows the flow of upstream ice streams and outlet glaciers',
            'They prevent seawater from reaching the grounding line and causing basal melting',
            'They act as reservoirs that store meltwater and release it gradually to regulate sea level',
          ],
          correct: 1,
          explain: `Ice shelves exert back-stress (buttressing) on the grounded ice flowing into them from the interior. Where an ice shelf is pinned by submarine ridges (ice rises and rumples), it transmits this resistance upstream, slowing the ice streams that feed it. When ice shelves collapse or thin, the buttressing force is lost and upstream ice accelerates. The dramatic collapse of the Larsen B Ice Shelf in 2002 (3,250 km² disintegrated in ~35 days) was followed by 2–8× acceleration of the tributary glaciers — a real-world experiment demonstrating buttressing. This is why the stability of ice shelves like the Ross (500,000 km²) and Filchner-Ronne (440,000 km²) is critical for West Antarctic Ice Sheet stability and long-term sea level projections.`,
        },
        {
          q: `The term \'temperate glacier\' refers to which glaciological property?`,
          a: [
            'A glacier located in a temperate climate zone (30°–60° latitude)',
            'A glacier whose ice is at the pressure-melting point throughout its thickness, allowing liquid water to exist within the ice',
            'A glacier with a gentle surface slope (<5°)',
            'A glacier that does not advance or retreat significantly over decades',
          ],
          correct: 1,
          explain: `In glaciology, \'temperate\' is a thermal classification, not a geographic one. A temperate (or warm-based) glacier has ice that is everywhere at the pressure-melting point — the temperature at which ice melts under the local pressure. At the pressure-melting point, liquid water can coexist with ice within the glacier body (in veins, grain boundaries, and pores). This has important consequences: (1) basal sliding occurs because a water film lubricates the bed; (2) the glacier is highly mobile and dynamically active; (3) meltwater is produced and routed through the glacier even in winter; (4) heat generated by deformation goes to melting rather than warming ice. Examples include glaciers in the Alps, New Zealand, tropical Andes, and southeast Alaska. They contrast with polar (cold-based) glaciers frozen to their beds, and polythermal glaciers with mixed thermal structure.`,
        },
      ],
    },
  ],
}

export default glacierTypes
