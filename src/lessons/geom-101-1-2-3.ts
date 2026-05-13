import { Waves, Globe, Layers, Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const deltasEstuaries: Lesson = {
  id: 'geom-101-1-2-3',
  title: 'Deltas, Estuaries, and Coastal Landforms',
  track: 'geo',
  trackName: 'Geomorphology',
  level: 'Foundations',
  duration: '12 min',
  xpReward: 120,
  description: 'Where rivers meet the sea — the geomorphology of deltas, estuaries, beaches, and barrier islands, shaped by river, wave, and tidal forces',
  sources: [
    { org: 'USGS',     title: 'USGS Coastal and Marine Geology Program',          url: 'https://www.usgs.gov/programs/cmgp' },
    { org: 'NOAA',     title: 'NOAA Coastal Science',                             url: 'https://coastalscience.noaa.gov' },
    { org: 'GSA',      title: 'Geological Society of America',                    url: 'https://www.geosociety.org' },
    { org: 'Elsevier', title: 'Estuarine, Coastal and Shelf Science',             url: 'https://www.journals.elsevier.com' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Where rivers meet the sea — the geomorphology of deltas, estuaries, beaches, and barrier islands, shaped by river, wave, and tidal forces',
      body: `Where rivers meet the sea, three competing forces — river discharge, wave energy, and tidal prism — determine the shape and character of the coastline. Galloway\'s ternary classification of deltas captures this beautifully: river-dominated deltas (Mississippi\'s bird-foot) form where high sediment supply and weak wave energy allow distributary channels to extend far into the basin; wave-dominated deltas (Nile, Niger) develop arcuate, smooth shorelines as waves redistribute sediment laterally; tide-dominated deltas (Ganges-Brahmaputra) produce funnel-shaped, sandbar-rich mouths where strong tidal currents shape elongate sand bodies perpendicular to the coast.

Delta processes are dynamic. Distributary channels carry sediment to the delta front, where deposition builds natural levees and delta lobes. Crevasse splays — breaches through levees — create new lobes and can divert entire channels. Over centuries, delta switching (avulsion) abandons old lobes and builds new ones. The Mississippi has undergone at least five major lobe switches in the Holocene; the modern bird-foot lobe is only ~1,000 years old and is already overextended, with the river primed to switch to the Atchafalaya route.

Estuaries — semi-enclosed coastal bodies where fresh and salt water mix — are classified by their mixing regime. Salt-wedge estuaries (strong river discharge, weak tides) maintain a sharp salinity front with a lens of fresh water riding over denser saline water (e.g., Mississippi mouth, Fraser River). Partially mixed estuaries show gradual salinity gradients with bidirectional flow (Chesapeake Bay, Thames). Well-mixed estuaries occur where strong tides homogenise the water column (Delaware Bay, Severn Estuary). The turbidity maximum — a zone of elevated suspended sediment concentration — forms near the head of the salt intrusion where residual circulation converges, causing flocculation and settling of fine particles. This makes estuaries highly efficient sediment traps and among the most biologically productive coastal environments.

Beyond deltas and estuaries, coastal geomorphology encompasses a rich array of landforms. Sea cliffs and wave-cut platforms develop where wave energy attacks resistant rock coasts. Pocket beaches form in embayments between headlands. Barrier islands — elongate sandy islands paralleling the coast — form on gently sloping shelves where wave action builds and maintains sand barriers (Outer Banks, NC; Padre Island, TX). Spits extend from headlands into open water along the direction of longshore drift; tombolos connect islands to the mainland through sediment deposition.

Longshore drift (littoral transport) is the engine of beach systems. Waves approaching the shore at an angle drive a net transport of sand along the coast. The littoral sediment budget balances inputs (river supply, cliff erosion, onshore transport) against outputs (offshore loss, inlet bypassing, human removal). Where the budget is negative, beaches erode; where positive, they accrete. Coastal erosion rates of 0.5–5 m/yr are common on soft coasts globally, with some areas exceeding 10 m/yr during storms.

Human impacts have profoundly disrupted coastal sediment systems. Dam construction reduces river sediment supply to deltas, triggering subsidence and shoreline retreat — the Aswan Dam (1970) cut Nile sediment delivery by ~98%, and the Nile delta shoreline has retreated up to 3 km since. The Mississippi delta is losing approximately 50 km² of land per year due to compaction, subsidence, reduced sediment supply from upstream levees and dams, and sea level rise. Groundwater and hydrocarbon extraction accelerate delta subsidence. The Mekong delta in Vietnam is subsiding 1–2 cm/yr — faster than sea level rise — threatening millions of people. Hard coastal engineering (seawalls, groins, jetties) provides local protection but often displaces erosion downdrift, exporting the problem to unprotected shores.`,
      keyTerms: [
        {
          term: 'River-Dominated Delta',
          def: 'Delta shaped primarily by high fluvial sediment supply and weak wave/tidal energy; produces elongate distributary lobes (e.g., Mississippi bird-foot).',
        },
        {
          term: 'Wave-Dominated Delta',
          def: 'Delta with a smooth, arcuate shoreline formed when wave energy redistributes river sediment laterally (e.g., Nile, Niger).',
        },
        {
          term: 'Estuary',
          def: 'Semi-enclosed coastal body of water where fresh river water mixes with saline ocean water; classified as salt-wedge, partially mixed, or well-mixed.',
        },
        {
          term: 'Longshore Drift',
          def: 'Net transport of sediment along a shoreline driven by waves approaching at an angle; the engine of beach and barrier island dynamics.',
        },
        {
          term: 'Barrier Island',
          def: 'Elongate sandy island parallel to the coast, separated from the mainland by a lagoon; maintained by wave action and longshore sediment transport.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Coastal and Delta Geomorphology',
      body: `River, wave, and tidal forces compete at every river mouth and shoreline, producing a spectrum of landforms from bird-foot deltas to barrier island chains. Understanding these systems requires integrating sediment supply, energy regime, sea level, and increasingly, human modification.`,
      cards: [
        {
          name: 'Delta Classification: River, Wave, and Tide Dominance',
          icon: Waves,
          color: BRAND.accent,
          desc: 'Galloway\'s ternary diagram places every delta in a triangle of three competing forces. River-dominated deltas prograde rapidly; wave-dominated deltas are smoothed into arcuate shorelines; tide-dominated deltas develop funnel mouths with parallel sand bars. Most deltas occupy intermediate positions, shifting over time as climate and sea level change.',
          examples: 'Mississippi bird-foot (river-dominated): distributary lobes extend ~300 km into the Gulf. Nile arcuate (wave-dominated): ~250 km smooth shoreline. Ganges-Brahmaputra tidal funnel: world\'s largest delta, shaped by 4–6 m tidal range.',
        },
        {
          name: 'Estuaries: Where Salt Meets Fresh Water',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Estuarine mixing type is controlled by the ratio of river discharge to tidal prism. Salt-wedge estuaries maintain sharp stratification; partially mixed estuaries show two-layer flow; well-mixed estuaries are homogeneous. The turbidity maximum, where residual estuarine circulation converges fine sediment, is a key ecological and biogeochemical zone.',
          examples: 'Chesapeake Bay (partially mixed): largest US estuary, turbidity maximum in upper bay. San Francisco Bay (well-mixed in summer, partially mixed in winter). Thames Estuary: historically anoxic from sewage; restored after 1960s pollution controls.',
        },
        {
          name: 'Barrier Islands, Beaches, and Longshore Drift',
          icon: Layers,
          color: BRAND.coral,
          desc: 'Barrier islands form on low-gradient shelves when wave action builds and maintains sand barriers above sea level. They are not static — they migrate landward via overwash and inlet processes in response to sea level rise. Longshore drift transports sediment along the shoreface; groins and jetties interrupt this transport, protecting updrift beaches while starving downdrift ones.',
          examples: 'Outer Banks, NC: 300 km barrier island chain, retreating 1–2 m/yr on average; Cape Hatteras Lighthouse moved 870 m in 1999. Padre Island, TX: longest US barrier island (210 km). Post-hurricane Katrina: Chandeleur Islands lost 85% of area.',
        },
        {
          name: 'Coastal Erosion, Human Impacts, and Sediment Budgets',
          icon: Activity,
          color: BRAND.gold,
          desc: 'Coastal erosion rates of 0.5–5 m/yr are common on soft coasts. Delta subsidence accelerates when dams cut sediment supply and groundwater extraction compacts sediments. Sea level rise shifts the balance of every coastal budget toward erosion. Hard engineering (seawalls, groins) provides local protection but disrupts natural sediment transport, often exporting erosion downdrift.',
          examples: 'Mississippi delta: ~50 km²/yr land loss; subsidence 5–25 mm/yr from compaction and fluid extraction. Nile delta: shoreline retreating up to 3 km since Aswan Dam (1970) cut sediment by ~98%. Mekong delta: subsiding 1–2 cm/yr, faster than sea level rise, threatening 17 million people.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From River Sediment to Coastal Landform: The Littoral Cascade',
      body: 'Trace sediment from river input through delta formation, wave reworking, longshore transport, and final deposition or erosion at the coast.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Trace sediment from river input through delta formation, wave reworking, longshore transport, and final deposition or erosion at the coast.',
        nodes: [
          {
            id: 'river-sediment',
            label: 'River Sediment Load',
            description: 'Rivers deliver sand, silt, and clay to the coast. Global fluvial sediment flux ~19 billion t/yr, but dams now trap ~25–30% before it reaches the sea. Supply rate controls whether deltas prograde or retreat.',
            color: BRAND.accent,
          },
          {
            id: 'delta-estuary',
            label: 'Delta / Estuary Formation',
            description: 'At the river mouth, sediment is deposited in the delta front and prodelta. Estuaries trap fine sediment via the turbidity maximum. Delta morphology (bird-foot, arcuate, funnel) reflects the balance of river, wave, and tidal energy.',
            color: BRAND.jade,
          },
          {
            id: 'wave-reworking',
            label: 'Wave Reworking',
            description: 'Wave energy redistributes delta-front sediment along the shoreline, smoothing bird-foot lobes into arcuate fronts. Storm waves overwash barrier islands and transport sediment onshore or offshore. Wave power determines shoreline stability.',
            color: BRAND.coral,
          },
          {
            id: 'longshore-drift',
            label: 'Longshore Drift',
            description: 'Oblique wave approach drives net alongshore sediment transport at rates of 100,000–1,000,000 m³/yr on active coasts. Interruptions (headlands, inlets, groins) cause updrift accumulation and downdrift starvation.',
            color: BRAND.amethyst,
          },
          {
            id: 'beach-barrier',
            label: 'Beach / Barrier Island',
            description: 'Sandy shoreline environments in dynamic equilibrium between wave energy, sediment supply, and sea level. Barrier islands migrate landward at 0.5–2 m/yr on average. Beach profiles adjust seasonally between summer accretion (swell) and winter erosion (storm).',
            color: BRAND.gold,
          },
          {
            id: 'erosion-accretion',
            label: 'Coastal Erosion / Accretion',
            description: 'The net outcome of sediment budget: positive budget = accretion; negative = erosion. Global trend is toward erosion as dams cut supply, sea level rises, and hard engineering interrupts transport pathways. ~70% of sandy beaches are eroding worldwide.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'river-sediment',  to: 'delta-estuary',    label: 'Fluvial sediment delivery' },
          { from: 'delta-estuary',   to: 'wave-reworking',   label: 'Delta-front sediment reworked by waves' },
          { from: 'wave-reworking',  to: 'longshore-drift',  label: 'Oblique waves drive alongshore transport' },
          { from: 'longshore-drift', to: 'beach-barrier',    label: 'Sediment feeds beaches and barrier islands' },
          { from: 'beach-barrier',   to: 'erosion-accretion', label: 'Sediment budget determines net change' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The Mississippi River delta has a distinctive \'bird-foot\' morphology. What process dominates its formation, and why?',
          a: [
            'River dominance: high sediment supply and weak wave energy allow distributary channels to extend far into the Gulf of Mexico without being reworked into an arcuate form; the low wave energy of the Gulf means sediment is not redistributed laterally; weak tides also prevent tidal shaping; the result is finger-like distributary lobes extending hundreds of km offshore',
            'Wave dominance: strong Gulf of Mexico waves continuously redistribute delta sediment into elongate finger-like lobes aligned with the prevailing wave direction, creating the distinctive radiating pattern',
            'Tidal dominance: the Gulf of Mexico\'s microtidal range drives strong tidal currents that shape the distributary channels into parallel finger-like lobes perpendicular to the coastline',
            'Subsidence dominance: rapid delta subsidence causes the delta surface to sink below sea level, creating the appearance of elongate lobes as only the highest natural levees remain above water',
          ],
          correct: 0,
          explain: `The Mississippi bird-foot delta is the classic example of river dominance in Galloway\'s ternary classification. The Mississippi delivers enormous sediment loads (~400 million t/yr historically) to a microtidal sea (Gulf of Mexico tidal range < 0.5 m) with relatively low wave energy. Without strong waves to redistribute sediment laterally or strong tides to rework it into parallel sand ridges, sediment accumulates at the mouths of each distributary channel, building elongate lobes that extend hundreds of kilometres offshore. The result is the distinctive bird-foot plan view. In contrast, the Nile and Niger deltas face higher wave energy that smooths their fronts into arcuate shapes, while the Ganges-Brahmaputra faces a 4–6 m tidal range that dominates its morphology.`,
        },
        {
          q: 'In an estuary, where does the turbidity maximum typically occur, and why?',
          a: [
            'At the estuary mouth, where wave energy resuspends bottom sediments deposited during river floods and lifts fine particles into the water column',
            'Evenly distributed throughout the estuary, because tidal mixing homogenises suspended sediment concentrations between the fresh and salt water zones',
            'At the landward limit of the salt wedge/mixing zone; this is where the convergence of seaward-flowing fresh water and landward-flowing bottom saline water creates a zone of net convergence (null zone); suspended particles also flocculate in the mixing zone as salinity increases, rapidly settling from suspension; the turbidity maximum is an important ecological zone and a major site of sediment accumulation',
            'In the deepest part of the estuary channel, where gravitational settling concentrates all suspended particles regardless of salinity gradients or circulation patterns',
          ],
          correct: 2,
          explain: `The turbidity maximum is one of the most important and counter-intuitive features of estuarine circulation. It forms where two residual flows converge: seaward-flowing surface fresh water and landward-flowing bottom saline water meet at the null point, creating a zone of flow convergence where horizontal transport in both directions brings particles to the same location. Additionally, when fresh water mixes with saline water, the increase in ionic strength causes clay particles and organic matter to flocculate — forming larger aggregates that settle rapidly. These two mechanisms combine to concentrate suspended sediment concentrations 10–100× higher than in either the river or the ocean. The turbidity maximum migrates up- and down-estuary with seasonal changes in river discharge and tidal range, making it a dynamic feature with major ecological and management implications.`,
        },
        {
          q: 'Barrier islands like the Outer Banks of North Carolina are highly dynamic. What is the primary long-term process threatening their stability?',
          a: [
            'Increased hurricane frequency is directly eroding barrier island sediment at rates unprecedented in the Holocene, overwhelming natural recovery processes',
            'Sea level rise combined with reduced sediment supply: barrier islands migrate landward (via overwash and inlet processes) to maintain dynamic equilibrium with rising sea level; when sea level rise rate exceeds sediment supply, the barrier thins, drowns, and eventually disappears; human development (buildings, roads) fixes the barrier in place, preventing natural migration, leading to accelerated erosion of the seaward face',
            'Tidal inlet migration progressively breaks barrier islands into shorter segments, eventually fragmenting them until they can no longer maintain their form against wave energy',
            'Longshore drift permanently removes sediment from barrier islands to offshore sinks, and without continuous river sediment input directly to the barriers, they are inherently self-destructing systems',
          ],
          correct: 1,
          explain: `Barrier islands are not fixed geomorphic features — they are mobile sediment bodies that naturally migrate landward in response to sea level rise through overwash (storm waves carry sand from the ocean face to the back-barrier) and inlet processes (tidal inlets migrate and close, redistributing sediment). This rollover process has maintained barrier islands through thousands of years of Holocene sea level rise. The critical problem in the modern era is that human infrastructure (roads, buildings, utilities) physically prevents this natural landward migration. When barriers cannot roll over, the only response to continued sea level rise and wave attack is erosion of the seaward face with no compensating accretion on the landward side — the barrier narrows and eventually drowns. Reduced sediment supply from dams and inlet jetties compounds the problem by cutting off the sand budget that supports barrier maintenance.`,
        },
        {
          q: 'Groin fields are built along beaches to trap longshore drift. What unintended consequence do they typically cause downdrift?',
          a: [
            'Groins increase wave reflection offshore, creating standing wave patterns that destabilise the seabed and cause widespread offshore sediment loss beyond the groined area',
            'Groins accelerate tidal current velocities between structures, causing scour and erosion of the beach face between individual groins within the groin field itself',
            'Groins cause beach accretion on both the updrift and downdrift sides simultaneously, but the accreted material has different grain sizes that make it unsuitable for natural beach processes',
            'Sediment starvation and erosion: groins intercept the longshore sediment transport, accumulating sand on the updrift side but depriving the downdrift coast of its normal sediment supply; beaches downdrift from groin fields erode as the longshore drift budget becomes negative; this \'coastal protection exporting the problem\' is a classic example of unintended geomorphic consequences of hard engineering',
          ],
          correct: 3,
          explain: `Groins work by interrupting longshore drift — they extend seaward from the beach far enough to intercept the moving sediment stream, trapping sand on the updrift side and building up the protected beach. The fundamental problem is that the longshore drift continues downdrift of the last groin with the same energy but a reduced sediment load, because the groin field has already sequestered the available sand. The downdrift beach is therefore in sediment deficit: the same wave energy that would normally transport sediment along the coast now has excess energy relative to supply, and begins eroding the beach instead. This problem is well-documented at groin fields worldwide — the protected stretch gains sand while immediately adjacent unprotected beaches lose it. This is why modern coastal management increasingly favours beach nourishment (adding sand to restore the sediment budget) over hard structures that simply redistribute the erosion problem.`,
        },
        {
          q: 'A river\'s sediment supply is reduced 80% after dam construction. What geomorphic response is expected in the downstream delta over decades?',
          a: [
            'Delta progradation accelerates because clearer water carries the remaining sediment more efficiently to the delta front, concentrating deposition in a narrower zone',
            'Delta recession and subsidence: with reduced sediment input, the delta lobe no longer receives enough material to offset compaction, subsidence, and wave erosion; the shoreline retreats; delta plain elevation decreases; saltwater intrudes; low-lying delta areas flood; this is occurring at the Aswan-dammed Nile, Colorado dammed delta in the Gulf of California, and many other regulated rivers globally',
            'The delta switches lobes more rapidly as the reduced sediment load causes avulsion frequency to increase, building new lobes while abandoning old ones at an accelerated rate',
            'Delta morphology transitions from river-dominated to wave-dominated as sediment supply decreases, producing a more arcuate shoreline with no net land loss because wave redistribution compensates for the reduced fluvial input',
          ],
          correct: 1,
          explain: `Deltas are maintained by a balance between sediment input (from the river) and losses (compaction, subsidence, wave erosion, sea level rise). When sediment supply is severely cut — as happens downstream of major dams — this balance becomes strongly negative. The delta plain, built of unconsolidated mud and sand, compacts under its own weight at rates of millimetres to centimetres per year. Normally this compaction is offset by new sediment deposition. Without that input, the surface subsides below sea level, saltwater invades, wetland vegetation dies, and the shoreline retreats. Wave erosion attacks the unprotected delta front. The Nile delta is the most cited example: the Aswan High Dam (1970) reduced Nile sediment delivery from ~120 million t/yr to < 3 million t/yr, and the Nile delta shoreline has since retreated up to 3 km in some areas. Similar but smaller-scale responses are observed at virtually every dammed river delta globally, from the Colorado (no longer reaches the sea most years) to the Ebro, Volta, and Indus.`,
        },
      ],
    },
  ],
}

export default deltasEstuaries
