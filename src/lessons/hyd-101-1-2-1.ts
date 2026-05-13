import { Globe, Layers, ArrowRight, Activity, Zap } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const drainageBasins: Lesson = {
  id: 'hyd-101-1-2-1',
  title: 'Drainage Basins, Stream Networks, and Watershed Geometry',
  track: 'geo',
  trackName: 'Hydrology',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 120,
  description: 'Every raindrop has an address: the watershed as the fundamental unit of hydrology',
  sources: [
    { org: 'USGS', title: 'USGS — Watersheds and Drainage Basins',  url: 'https://www.usgs.gov/special-topics/water-science-school/science/watersheds-and-drainage-basins' },
    { org: 'EPA',  title: 'US EPA — Watershed Academy Web',          url: 'https://cfpub.epa.gov/watertrain/' },
    { org: 'USGS', title: 'USGS — StreamStats',                      url: 'https://streamstats.usgs.gov/ss/' },
    { org: 'FAO',  title: 'FAO — Watershed Management',              url: 'https://www.fao.org/watershed-management/en/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Every raindrop has an address: the watershed as the fundamental unit of hydrology',
      body: `A watershed (or drainage basin or catchment) is the area of land that drains all precipitation and surface water to a common outlet point — typically a stream gauge, lake, estuary, or ocean. Watersheds are defined by topographic divides: ridgelines and high points that separate water flowing to one outlet from water flowing to another. Every point on Earth\'s land surface belongs to exactly one watershed. Watersheds nest hierarchically: a large river basin (e.g., the Mississippi, ~3.2 million km²) is composed of thousands of smaller sub-basins, each with its own tributary network.

Arthur Strahler (1952) developed a widely-used system for classifying stream order that quantifies network complexity. First-order streams are headwater streams with no tributaries. When two first-order streams join, they create a second-order stream. When two streams of the same order join, the resulting stream is one order higher; joining streams of different orders yields the higher order. Large rivers like the Mississippi are about 10th-order. Robert Horton\'s "laws" of drainage composition describe statistical regularities across networks: the bifurcation ratio (average number of streams of order u to order u+1) is typically 3–5; stream lengths increase by a ratio of ~2 between orders.

Drainage patterns reflect the underlying geology and structure. Dendritic patterns (branching like a tree) form on homogeneous rock with no strong structural control. Parallel patterns develop on uniformly sloping surfaces. Trellis patterns (main stem with right-angle tributaries) occur on folded or faulted rock where erosion has exploited alternating hard and soft beds — characteristic of the Appalachian Valley and Ridge province. Radial patterns develop around isolated volcanoes or domes. Annular patterns form when erosion cuts into circular domed structures exposing concentric rock belts. Structural geologists read drainage patterns as evidence of subsurface geology.

Digital elevation models (DEMs) and GIS tools have transformed watershed analysis. USGS StreamStats and similar tools automatically delineate watershed boundaries, compute morphometric parameters (area, perimeter, mean slope, hypsometric integral, stream density), and extract stream networks from 1/3 arc-second (~10 m) or 1 arc-second (~30 m) DEMs. These parameters feed into hydrological models and flood frequency analysis. The hypsometric integral — the ratio of the area under the hypsometric curve (elevation vs. normalised area) to the total area — indicates watershed erosional maturity: young (integral > 0.6), mature (~0.4–0.6), and monadnock (< 0.35) stages.`,
      keyTerms: [
        {
          term: 'Watershed',
          def: 'Area of land draining to a common outlet; defined by topographic divides. Also called drainage basin or catchment.',
        },
        {
          term: 'Strahler Stream Order',
          def: 'Classification system where first-order streams have no tributaries; order increases when two streams of equal order merge.',
        },
        {
          term: 'Bifurcation Ratio',
          def: 'Ratio of number of streams of order u to order u+1; typically 3-5 in natural drainage networks.',
        },
        {
          term: 'Drainage Pattern',
          def: 'Plan-view geometry of stream networks; reflects underlying geology (dendritic, trellis, radial, parallel, annular).',
        },
        {
          term: 'Hypsometric Integral',
          def: 'Area under the hypsometric curve; indicates watershed erosional stage: youthful (>0.6), mature (~0.4-0.6), monadnock (<0.35).',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Watershed Geometry and Network Properties',
      body: `Watershed geometry affects flood response, sediment yield, and water quality. Compact, steep basins with high drainage density generate fast, flashy responses. Large, flat basins with low drainage density attenuate floods and sustain baseflow longer. These geometric controls are encoded in standard morphometric parameters used in flood frequency and erosion modelling.`,
      cards: [
        {
          name: 'Watershed Area',
          icon: Globe,
          color: BRAND.accent,
          desc: 'Primary control on peak discharge: larger area → more water, but longer lag time. Q ∝ A^0.7-0.8 empirically.',
          examples: 'Mississippi Basin: 3.2 M km². Congo: 3.7 M km². Amazon: 6.1 M km² (world\'s largest). All drain to single ocean outlet.',
        },
        {
          name: 'Stream Order',
          icon: Layers,
          color: BRAND.jade,
          desc: 'Strahler order quantifies network complexity. 1st order: headwaters. 10th order: major rivers. Bifurcation ratio 3-5.',
          examples: 'Missouri River: ~8th order. Amazon main stem: ~10th order. First-order streams constitute ~80% of total stream length in most networks.',
        },
        {
          name: 'Drainage Density',
          icon: ArrowRight,
          color: BRAND.coral,
          desc: 'Total stream length / watershed area (km/km²). High: flashy response, high erosion. Low: slow response, high infiltration.',
          examples: 'Badlands, SD: 40-150 km/km² (highest known). Forested humid basins: 1-5 km/km². Desert: 0.5-2 km/km² despite flashy response.',
        },
        {
          name: 'Drainage Patterns',
          icon: Activity,
          color: BRAND.gold,
          desc: 'Dendritic (homogeneous rock), trellis (folded/faulted), radial (volcano/dome), parallel (uniform slope), annular (eroded dome).',
          examples: 'Appalachian trellis: reflects Paleozoic fold-thrust belt. Mt Rainier: radial pattern from volcanic cone. Mississippi valley: dendritic tributaries.',
        },
        {
          name: 'Shape Factor',
          icon: Zap,
          color: BRAND.amethyst,
          desc: 'Elongated basins: lower, delayed peaks. Circular compact basins: higher, faster peaks. Affects flood hydrograph shape.',
          examples: 'Elongated tributary basins (e.g., mountain canyon rivers) lag storms by hours. Circular basins with converging tributaries → synchronous arrival → high flood peaks.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Hierarchical Drainage Basin Structure',
      body: 'From headwater first-order streams to a major river outlet — the nested hierarchy of watersheds and stream orders.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how first-order headwater streams merge through successive stream orders into major rivers, nested within a hierarchy of watershed divides that route every raindrop to a single ocean outlet',
        nodes: [
          {
            id: 'first-order',
            label: 'First-Order Streams',
            description: 'Headwater streams with no tributaries. Spring-fed or intermittent. Constitute ~80% of total stream length. Sensitive to land-use change.',
            color: BRAND.jade,
          },
          {
            id: 'second-order',
            label: 'Second-Order Streams',
            description: 'Two first-order streams join. Small perennial streams. Fish habitat begins. Channel begins to show floodplain development.',
            color: BRAND.accent,
          },
          {
            id: 'third-fourth',
            label: '3rd–4th Order Streams',
            description: 'Tributary streams recognisable on maps. Larger floodplains. Important fish nursery habitat. Agricultural drainage often targets these.',
            color: BRAND.gold,
          },
          {
            id: 'fifth-seventh',
            label: '5th–7th Order Rivers',
            description: 'Named rivers on regional maps. Significant flood plains. Major water supply sources. Impacted by dams for irrigation and hydropower.',
            color: BRAND.coral,
          },
          {
            id: 'major-river',
            label: '8th–10th Order Rivers',
            description: 'Continental rivers: Mississippi (~8th), Amazon (~10th). Massive discharge. Delta formation at ocean entry. International water management.',
            color: BRAND.ruby,
          },
          {
            id: 'watershed-divide',
            label: 'Watershed Divides',
            description: 'Topographic ridges separating adjacent drainage basins. Continental divides separate ocean-draining basins. Every raindrop is assigned to one outlet.',
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'first-order',      to: 'second-order',   label: 'Two 1st-order streams merge' },
          { from: 'second-order',     to: 'third-fourth',   label: 'Network builds' },
          { from: 'third-fourth',     to: 'fifth-seventh',  label: 'Tributaries join main stem' },
          { from: 'fifth-seventh',    to: 'major-river',    label: 'Multiple sub-basins converge' },
          { from: 'watershed-divide', to: 'first-order',    label: 'Defines headwater positions' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What defines the boundary of a watershed (drainage basin)?',
          a: [
            'The main river channel that collects all local surface water',
            'Topographic divides — ridgelines and high points that separate water flowing to different outlets',
            'Political boundaries such as state or national borders that coincide with river corridors',
            'The extent of the 100-year floodplain mapped by FEMA on either side of the main river channel',
          ],
          correct: 1,
          explain: 'Watershed boundaries are defined by topography — specifically the ridgelines, hills, and high points where a raindrop would flow one way versus another. On one side of a divide, water flows to outlet A; on the other side, to outlet B. This is purely a physical concept based on the land surface geometry, not political boundaries. Watershed delineation is now routinely automated from digital elevation models (DEMs) using GIS software that traces flow directions from each grid cell downhill to the outlet. The resulting watershed polygon represents the complete contributing area for that outlet.',
        },
        {
          q: 'According to the Strahler stream order system, what happens when a third-order stream joins a fourth-order stream?',
          a: [
            'The resulting stream becomes a seventh-order stream (3 + 4 = 7)',
            'The resulting stream is fourth-order — joining streams of different orders yields the higher order',
            'The resulting stream is a fifth-order stream — one higher than the larger input',
            'The resulting stream is a third-order stream — tributaries reduce the order of the main channel',
          ],
          correct: 1,
          explain: 'The Strahler (1952) stream order rule is: when two streams of the same order (u) join, the result is order u+1. When two streams of different orders join, the result is the higher order unchanged. So a 3rd-order joining a 4th-order gives a 4th-order. Two 4th-order streams joining gives a 5th-order. This asymmetric rule means that order only increases when equal-order tributaries merge, which correctly captures the branching structure of natural drainage networks. First-order streams (no tributaries) constitute about 80% of total stream length in most drainage networks, while large rivers of 8th+ order are rare.',
        },
        {
          q: 'A trellis drainage pattern (main channel with right-angle tributaries) is characteristic of what geological setting?',
          a: [
            'Volcanic islands where radial drainage has been modified by lava flows',
            'Regions with folded or faulted sedimentary rock where erosion exploits alternating hard and soft beds',
            'Flat alluvial plains where channels meander freely without structural control',
            'Glaciated terrain where valleys were cut by ice and later drowned by rising sea level',
          ],
          correct: 1,
          explain: 'Trellis drainage develops where the landscape has a regular alternating pattern of resistant and weak rock — typically folded or faulted sedimentary sequences. Main streams follow valleys carved in soft rock (shale, limestone); tributaries cut through the ridges of harder rock (sandstone, quartzite) at nearly right angles. The Valley and Ridge province of the Appalachians is the classic example: resistant Silurian sandstone ridges alternate with valleys in more erodible Devonian shale and limestone, creating the characteristic trellis pattern visible from satellite. The pattern is essentially a geological map readable from drainage geometry alone.',
        },
        {
          q: 'What does a high drainage density (km of stream per km² of watershed) indicate about a watershed\'s hydrological behaviour?',
          a: [
            'High drainage density indicates deep, permeable soils that rapidly convey water underground to the stream network',
            'High drainage density means more total stream length is available to route water quickly to the outlet, producing flashier flood responses and more rapid runoff',
            'High drainage density results from high annual precipitation, which creates many more stream channels than arid areas',
            'High drainage density basins have lower peak floods because more channels means more floodplain storage',
          ],
          correct: 1,
          explain: 'Drainage density (total stream length / basin area) reflects the efficiency of the stream network at routing water from hillslopes to the outlet. High drainage density means hillslopes are short — water reaches a channel quickly with minimal travel time. This produces flashy hydrological responses: rapid rises after storms, sharp peaks, and quick recession. The Badlands of South Dakota have drainage densities of 40–150 km/km², creating some of the most extreme flash flood environments in North America. Conversely, low drainage density (common in permeable soils or forested humid basins) means longer hillslope travel times, slower channel concentration, and more attenuated flood peaks.',
        },
        {
          q: 'How do modern hydrologists delineate watershed boundaries compared to traditional methods?',
          a: [
            'Field surveys with GPS track ridgelines on foot; streams are identified by actual water flow during site visits',
            'GIS algorithms automatically extract drainage networks and watershed boundaries from digital elevation models (DEMs) by routing flow downhill from each cell',
            'Aerial photography is compared with 1:25,000 topographic maps to manually trace divides; validated by helicopter survey',
            'Stable isotope tracers are applied to headwater streams and traced downstream to determine contributing areas',
          ],
          correct: 1,
          explain: 'Modern watershed delineation uses DEM-based flow routing algorithms. Starting from a DEM (commonly 10 m or 30 m resolution from SRTM, USGS NED, or LiDAR), GIS software: (1) fills sinks (spurious pits in the DEM); (2) computes flow direction for each grid cell (typically D8 method — flow toward the steepest of 8 neighbours); (3) accumulates upslope area for each cell; (4) identifies stream cells above a threshold accumulation; (5) traces watershed boundaries upstream from any selected outlet point. USGS StreamStats provides this as a web service for any US location. This automated approach can delineate thousands of sub-watersheds in minutes that would take months by hand digitising from paper maps.',
        },
      ],
    },
  ],
}

export default drainageBasins
