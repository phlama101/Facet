import { Waves, Globe, TrendingUp, Shield, Map } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const coastalGeomorphology: Lesson = {
  id: 'geom-101-1-4-3',
  title: 'Coastal Geomorphology and Sea Level Change',
  track: 'cli',
  trackName: 'Geomorphology',
  level: 'Beginner',
  duration: '14 min',
  xpReward: 150,
  description: `Uncover the dynamic processes that shape coastlines — wave erosion, littoral sediment transport, delta subsidence, and barrier island migration — and how accelerating sea level rise is redrawing humanity\'s most densely inhabited and ecologically vital landscapes.`,
  sources: [
    { org: 'NOAA',       title: 'NOAA — Sea Level Trends and Coastal Change',         url: 'https://tidesandcurrents.noaa.gov/sltrends/' },
    { org: 'IPCC',       title: 'IPCC AR6 — Sea Level Change (Chapter 9)',             url: 'https://www.ipcc.ch/report/ar6/wg1/' },
    { org: 'USGS',       title: 'USGS — Coastal and Marine Hazards Program',          url: 'https://www.usgs.gov/programs/cmhrp' },
    { org: 'EEA',        title: 'European Environment Agency — Coastal Erosion',       url: 'https://www.eea.europa.eu/en/topics/in-depth/coasts-and-seas' },
    { org: 'CoastalWiki', title: 'Coastal Wiki — Encyclopedia of Coastal Science',    url: 'https://www.coastalwiki.org' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Where land meets sea: erosion, sediment transport, and the rising ocean',
      body: `Coastlines are among Earth's most dynamic and rapidly changing landforms — shaped by the relentless energy of breaking waves, longshore currents, tides, and storms, and now increasingly by accelerating sea level rise and direct human modification. Approximately 40% of the world's population lives within 100 km (62 mi) of a coast, and more than 1 billion people live in the low-elevation coastal zone below 10 m (33 ft) above sea level, making coastal geomorphology a discipline with immediate consequences for human settlement, infrastructure, and ecosystem services.

Wave energy is the primary driver of coastal erosion and sediment transport. **Wave-cut platforms** form as waves focus hydraulic action, abrasion, and solution at the base of cliffs, cutting a notch that eventually causes cliff retreat and leaves behind a gently inclined bedrock bench extending seaward. The width of the platform — up to several hundred metres on weakly resistant rocks — records the cumulative amount of cliff retreat since the platform began forming. Wave refraction concentrates energy on headlands and diffracts it into bays, creating the characteristic plan-view geometry of irregular coastlines. **Beach compartments** are bounded sediment cells in which littoral (longshore) drift carries sand and gravel from sources (river mouths, eroding cliffs) to sinks (submarine canyons, inlets, lagoons). Disrupting this sediment budget — by building groins, jetties, or breakwaters — starves beaches downdrift, causing accelerated erosion.

**Barrier islands** — elongated sand ridges separated from the mainland by a lagoon — are among the most extensive coastal landforms on Earth and home to some of the most intensely developed coastlines in North America, Europe, and West Africa. Barrier islands are dynamic, migrating landward during sea level rise through a process called **rollover**: storm overwash carries sand from the ocean face across the barrier crest and deposits it on the lagoon side, effectively translating the island toward the mainland. The rate of barrier migration scales with sea level rise rate and storm frequency. Under a rise rate of **1–2 mm/yr (0.04–0.08 in/yr)** (20th century average), many barriers reached quasi-equilibrium; under projected rises of **3–8 mm/yr (0.1–0.3 in/yr) or more** during the 21st century, rollover will accelerate dramatically, threatening communities built on these inherently migratory features.

**Salt marshes and mangroves** are coastal wetland ecosystems of profound geomorphic importance: their dense vegetation baffle waves, trap suspended sediment, and can accrete vertically at rates of 2–10 mm/yr (0.08–0.39 in/yr) — keeping pace with historical sea level rise rates while storing enormous quantities of carbon. Salt marshes provide natural flood protection for coastal communities, dissipating up to 50% of incoming wave energy within 100 m of marsh edge. As sea level rise accelerates beyond the accretion capacity of marshes (threshold approximately 5–7 mm/yr under high sediment supply), marshes drown and are replaced by open water, removing both the sediment sink and the wave buffer. The UK has lost ~85% of its historic salt marsh area since the medieval period, largely through land reclamation.

**River deltas** represent perhaps the most acute intersection of coastal geomorphology and human vulnerability. The world's great deltas — Mississippi, Nile, Ganges-Brahmaputra, Mekong — support populations of tens to hundreds of millions and are among Earth's most productive agricultural and fisheries zones. Yet deltas are inherently unstable: they are built from compacting sediment, and natural compaction combined with **groundwater and hydrocarbon extraction** drives subsidence rates of **10–100 mm/yr (0.4–3.9 in/yr)** in some urban delta settings — far exceeding eustatic sea level rise. Jakarta (Indonesia) has subsided by up to **4 m (13 ft)** in parts of its northern coastal districts over the last 30 years due to groundwater extraction, while Venice has subsided **23 cm (9 in)** over the 20th century and the Mississippi delta loses ~75 km² (29 sq mi) of land per year due to the combined effects of subsidence, sediment starvation from upstream dams and levee construction, and sea level rise. The **managed retreat** concept — deliberately allowing low-value agricultural or engineered land to return to intertidal habitat — is emerging as a more sustainable alternative to hard coastal defences. The **Medmerry managed realignment** (Sussex, UK, completed 2013) created 183 ha of new intertidal habitat by breaching a maintained shingle bank, providing flood protection, carbon storage, and ecological value at lower long-term cost than rebuilding the engineered structure.`,
      keyTerms: [
        {
          term: 'Wave-Cut Platform',
          def: 'A gently inclined bedrock bench extending seaward from a sea cliff, formed by wave erosion and abrasion at the cliff base; platform width records cumulative cliff retreat since formation.',
        },
        {
          term: 'Littoral Drift',
          def: 'The net longshore (shore-parallel) transport of sand and gravel by breaking waves approaching the shore at an oblique angle; disruption of littoral drift cells by structures causes beach starvation downdrift.',
        },
        {
          term: 'Barrier Island Rollover',
          def: 'The landward migration of a barrier island via storm overwash: sand is eroded from the ocean face, transported across the barrier crest, and deposited on the lagoon side; rate scales with sea level rise and storm frequency.',
        },
        {
          term: 'Delta Subsidence',
          def: 'Sinking of river delta surfaces due to compaction of young sediment, groundwater or hydrocarbon extraction, and sediment starvation; rates of 10–100 mm/yr (0.4–3.9 in/yr) in some urban deltas far exceed eustatic sea level rise, causing relative sea level rise of several cm/yr.',
        },
        {
          term: 'Managed Retreat',
          def: 'Deliberate removal of hard coastal defences to allow sea water to reclaim low-value land, creating new intertidal habitat; considered more sustainable than perpetual hard defence in areas of rising relative sea level. Exemplified by the Medmerry realignment (UK, 2013).',
        },
        {
          term: 'Salt Marsh Accretion',
          def: 'Vertical build-up of intertidal sediment trapped by marsh vegetation at rates of 2–10 mm/yr (0.08–0.39 in/yr); allows marshes to keep pace with sea level rise within limits (~5–7 mm/yr threshold); provides natural wave attenuation and blue carbon storage.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Coastal Landforms and Sediment Systems',
      body: `Coastal morphology reflects the balance between wave energy, sediment supply, sea level position, and the resistance of underlying geology. Understanding how these factors interact across different coastal environments — from hard-rock cliffs to sandy barriers to coral reefs — is essential for predicting how coastlines will respond to future forcing.`,
      cards: [
        {
          name: 'Erosional Coasts: Cliffs and Wave-Cut Platforms',
          icon: Waves,
          color: BRAND.accent,
          desc: 'Rocky cliffs erode by hydraulic action (compression of air in fractures by wave impact — up to 600 kPa), abrasion (sand and gravel impact), corrosion (chemical dissolution of carbonate and basic rocks by seawater), and attrition (grain-to-grain wear as wave-transported clasts collide and abrade each other). Cliff retreat rates range from <0.01 m/yr on granite to >1 m/yr (3 ft/yr) on weak chalk or soft unconsolidated cliffs. Chalk cliffs (Sussex, UK; Normandy, France) retreat at 0.1–0.4 m/yr (4–16 in/yr). The wave-cut platform widens as the cliff retreats; the platform itself is eventually abraded to a smooth, gently inclined bedrock surface. Platform width is limited by attenuation of wave energy as it crosses the widening platform.',
          examples: 'Holderness coast (Yorkshire, UK) erodes at up to 2 m/yr (7 ft/yr) in weak glacial till — the fastest eroding soft-rock coast in Europe. The Twelve Apostles (Victoria, Australia) are wave-cut stacks isolated by accelerated retreat of the Portland Limestone coast. Seven Sisters chalk cliffs (Sussex) show individual block failures during winter storms, with 1–3 m retreat events separated by years of stability — an episodic rather than continuous pattern.',
        },
        {
          name: 'Depositional Coasts: Beaches, Barriers, and Deltas',
          icon: Map,
          color: BRAND.jade,
          desc: `Sandy and gravelly beaches are transient sediment stores within littoral drift cells; net drift direction is set by the dominant wave approach angle. Beach profile steepness reflects grain size (coarser = steeper). Barrier islands, spits, and tombolos build where sediment supply exceeds removal rate. Deltas prograde into the sea where river sediment flux overwhelms coastal erosion and dispersal. Delta lobes switch over hundreds to thousands of years (avulsion); the Mississippi has switched lobes six times in the last 7,000 years, creating the distinctive bird\'s foot lobe pattern of the modern delta.`,
          examples: `The Outer Banks (North Carolina, USA) barrier islands have migrated landward ~100 m (328 ft) over the past century; some communities have been repeatedly relocated. The Nile Delta is losing 30–60 m (98–197 ft) of coastline per year near the river mouths because the Aswan High Dam (built 1970) traps ~98% of the sediment that once nourished the delta face. The Ganges-Brahmaputra delta is the world\'s largest, yet Bangladesh faces loss of 17% of its land area under 1 m (3 ft) sea level rise.`,
        },
        {
          name: 'Coral Reefs and Coastal Protection',
          icon: Shield,
          color: BRAND.coral,
          desc: 'Coral reefs act as biological wave breakers, dissipating 97% of incoming wave energy across the reef crest and reducing shoreline erosion. The reef flat and lagoon provide the hydrodynamic buffer that allows low-lying reef islands (motu) to exist despite being only 1–3 m (3–10 ft) above sea level. Reef bleaching and degradation under ocean warming remove this protection. Reef carbonate sediment production (1–10 mm/yr on healthy reefs) has historically kept reef islands in pace with sea level rise, but this capacity is diminished by bleaching and acidification.',
          examples: `Maldives, Tuvalu, Kiribati, and Marshall Islands are entirely dependent on reef-derived sediment and reef wave attenuation for the physical existence of their land. Studies show that wave energy reaching some Maldivian islands has increased 30–50% following bleaching events, accelerating shoreline erosion. The Great Barrier Reef (Australia) protects Queensland\'s coast from cyclone surge; its degradation (50% coral cover lost 1985–2012) is reducing this protection. Reef restoration projects using coral gardening can partially rebuild wave attenuation on degraded reefs.`,
        },
      ],
    },
    {
      type: 'concept',
      title: 'Sea Level Change: Rates, Drivers, and Coastal Response',
      body: `Sea level is not uniform across the global ocean, and its changes — from millimetres to metres — are driven by a combination of thermal expansion of ocean water, land ice melt, groundwater extraction, and vertical land motion. For coastal communities, it is relative sea level change (combining eustatic rise with local land uplift or subsidence) that determines flooding risk and shoreline behaviour.`,
      cards: [
        {
          name: 'Historic and Projected Sea Level Rise',
          icon: TrendingUp,
          color: BRAND.gold,
          desc: 'Global mean sea level has risen ~20 cm (8 in) since 1900, at an average rate of ~1–2 mm/yr (0.04–0.08 in/yr) for most of the 20th century. Since 1993 (satellite altimetry era), the rate has accelerated to ~3.7 mm/yr (0.15 in/yr). By 2100, IPCC AR6 projects likely ranges of 28–55 cm (11–22 in) under SSP1-2.6 (low emissions) to 63–101 cm (25–40 in) under SSP5-8.5 (high emissions), with low-likelihood high-end scenarios exceeding 1.5–2 m if ice sheet instabilities are triggered. Each 10 cm (4 in) of sea level rise displaces shorelines horizontally by the Bruun factor — typically 50–100 m (164–328 ft) on a gently sloping beach (Bruun Rule: shoreline retreat = sea level rise / beach slope).',
          examples: 'Miami, Florida has experienced 25 cm (10 in) of sea level rise since 1920, now flooding streets at king tides. Nuuk (Greenland) shows local sea level fall despite global rise, because the receding Greenland ice sheet exerts less gravitational pull on ocean water and the land is rebounding isostatically faster than the ocean rises. Jakarta sank 1–4 m (3–13 ft) over 30 years from groundwater extraction, giving a local relative sea level rise rate of 100–250 mm/yr (3.9–9.8 in/yr) — 25–60× the global average.',
        },
        {
          name: 'Managed Retreat and Beach Nourishment',
          icon: Globe,
          color: BRAND.amethyst,
          desc: 'Coastal management options span a spectrum from "hold the line" (hard engineering: seawalls, breakwaters) through "soft engineering" (beach nourishment, dune restoration) to managed retreat (deliberate landward relocation of the defence line). Beach nourishment places sand dredged from offshore onto an eroding beach; cost is £1–5 million/km in Europe and must be repeated every 3–10 years as placed sand is dispersed. Managed retreat creates new intertidal habitats with higher ecological value and lower long-term cost, but requires compensation for landowners and community acceptance. The Medmerry scheme (Sussex, 2013) created 183 ha of habitat for £28 million — cheaper than rebuilding the coastal defences it replaced.',
          examples: `Miami Beach has invested >$100 million in beach nourishment since the 1970s, placing 10+ million m³ of sand — but rising sea level and storms erode placed sand in 5–8 year cycles. The Dutch Room for the River programme relocated 22,000 people and created river bypasses and floodplain areas as a hybrid managed retreat strategy, protecting the Netherlands against 1-in-1,250-year Rhine floods. The Wallasea Island Wild Coast Project (Essex, UK) created Europe\'s largest coastal realignment, converting 665 ha of arable land to intertidal marsh using spoil from London Crossrail tunnelling.`,
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Coastal Sediment Budget: From Supply to Erosion Under Sea Level Rise',
      body: 'How coastal sediment systems balance inputs and outputs — and how accelerating sea level rise, upstream damming, and hard coastal structures are tipping that balance toward widespread shoreline recession.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'tracing sediment inputs and outputs in a coastal compartment from river supply and cliff erosion through beach transport to the effects of sea level rise and human intervention',
        nodes: [
          {
            id: 'sediment-sources',
            label: 'Sediment Sources',
            description: 'Sandy and gravelly sediment enters the coastal system from rivers (the dominant global source historically), eroding cliffs and bluffs, reworking of seafloor sediment, and carbonate production by biological organisms (reefs, shells). Globally, rivers deliver ~15–20 Gt of sediment to the coast per year, but dams now intercept ~25% of this flux, starving many coastlines of their primary sand supply.',
            color: BRAND.jade,
          },
          {
            id: 'littoral-transport',
            label: 'Littoral Transport Cell',
            description: 'Within a coastal compartment, sand moves along shore by wave-driven littoral drift. Net drift direction is set by the dominant wave approach angle. Drift rates of 100,000–500,000 m³/yr are typical on energetic sandy coasts. The compartment is bounded by headlands, submarine canyons, or inlets that intercept the drift. Loss of sediment through a submarine canyon to deep water is the most common coastal sediment sink.',
            color: BRAND.accent,
          },
          {
            id: 'beach-store',
            label: 'Beach and Dune Store',
            description: 'The beach and foredune act as the primary sediment buffer, adjusting their profile within hours to days in response to storm waves (erosion) and swell (accretion). Dunes store 10–100× the volume of sand in the active beach, providing a long-term sediment reservoir. Healthy dune systems allow the beach to recover from storm erosion; dune loss from development or trampling removes this resilience.',
            color: BRAND.gold,
          },
          {
            id: 'sea-level-forcing',
            label: 'Sea Level Rise Forcing',
            description: 'Rising sea level shifts the beach profile landward by the Bruun Rule: each 10 cm (4 in) of rise retreats a beach ~50–100 m (164–328 ft) on a gentle slope. More importantly, it increases storm surge inundation depth, accelerates barrier rollover, drowns salt marshes and mangroves that cannot accrete fast enough, and exposes previously protected backshore areas to direct wave attack. Accelerated rise (>3.7 mm/yr current rate) is already measurable as increased erosion in tide gauge records globally.',
            color: BRAND.ruby,
          },
          {
            id: 'human-intervention',
            label: 'Human Intervention',
            description: 'Coastal structures (groins, jetties, seawalls) interrupt longshore transport, starving beaches downdrift. Dams trap river sediment, removing the primary source. Groundwater extraction causes local subsidence. Beach nourishment and managed retreat offer partial mitigation. Globally, ~70% of sandy beaches are estimated to be in a state of erosion, with human alteration of sediment supply and rising sea level as the primary causes.',
            color: BRAND.coral,
          },
          {
            id: 'shoreline-change',
            label: 'Shoreline Change Outcome',
            description: `The net result of sediment supply, wave energy, sea level, and management determines whether the shoreline advances (accretion), is stable, or retreats (erosion). Under current trajectories, the USGS projects that >40% of US sandy beaches will face critical erosion this century. Global analysis suggests 50% of the world\'s beaches could be critically eroded or submerged under RCP 8.5 by 2100, disproportionately affecting small island states and deltaic coasts.`,
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'sediment-sources',    to: 'littoral-transport',  label: 'Rivers and cliffs supply sand to drift cells' },
          { from: 'littoral-transport',  to: 'beach-store',         label: 'Longshore drift feeds beach and dune' },
          { from: 'sea-level-forcing',   to: 'beach-store',         label: 'Rise shifts beach profile landward, increases storm impact' },
          { from: 'human-intervention',  to: 'littoral-transport',  label: 'Structures and dams interrupt and deplete sediment supply' },
          { from: 'beach-store',         to: 'shoreline-change',    label: 'Sediment budget balance determines net shoreline position' },
          { from: 'human-intervention',  to: 'shoreline-change',    label: 'Management (nourishment, retreat) modifies outcome' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'A groin field is constructed along a sandy coast to trap sand and widen a beach. What is the typical geomorphic consequence for the beach immediately downdrift of the last groin?',
          a: [
            'The beach downdrift widens because the groins slow the entire longshore drift system, causing sand to accumulate evenly on both sides',
            'The downdrift beach erodes and narrows because the groins intercept the sand that would normally move along the shore to feed it — this is called terminal groin scour or downdrift starvation',
            'The downdrift beach deepens in the offshore zone, allowing larger waves to reach the shore with less dissipation, which actually increases sand deposition on the beach face',
            'Groin construction has no effect on beaches more than 50 m away; coastal engineering structures only influence the local sediment within the length of the structure itself',
          ],
          correct: 1,
          explain: `Groins are shore-perpendicular structures designed to interrupt longshore drift and trap sand. They are effective at accumulating sand on their updrift side, but this trapping comes entirely at the expense of the downdrift coast, which is starved of its natural sand supply. The beach immediately downdrift of the final groin in a field — and often for kilometres beyond — erodes because sand that previously migrated past this point is now trapped permanently by the structures. This is one of the most well-documented and predictable consequences in coastal engineering, and it has been repeated hundreds of times globally: groins installed to protect one property accelerate erosion of the neighbour\'s beach. The Holderness coast (UK) and numerous US East Coast barrier island communities have experienced severe downdrift starvation from groin construction. Option A is incorrect: groins do not slow the overall littoral drift system; they create a local updrift accumulation and equivalent downdrift deficit. Options C and D are physically incorrect.`,
        },
        {
          q: 'The Mississippi River Delta is losing ~75 km² (29 sq mi) of land per year. Which combination of factors is primarily responsible for this land loss?',
          a: [
            'Rising global sea level (~4 mm/yr) is submerging the delta surface faster than sediment deposition can build it up; the primary driver is eustatic sea level change from global ice melt',
            'Hurricanes are eroding the delta marshes at an accelerating rate; the land loss reflects increased tropical cyclone intensity from climate change since 2005',
            'Compaction and subsidence of young deltaic sediments, combined with sediment starvation caused by levee confinement and upstream dams that prevent river flooding and overbank deposition, and hydrocarbon extraction driving additional subsidence — together producing relative sea level rise of 9–10 mm/yr, far exceeding eustatic rise alone; the engineered Mississippi now delivers its sediment directly to the continental slope instead of building new delta land',
            'Salt water intrusion from rising seas is killing marsh vegetation, which then loses its root structure and the organic sediment it was holding, causing the surface to collapse; vegetation die-off is the primary geomorphic driver of land loss',
          ],
          correct: 2,
          explain: `Mississippi Delta land loss is a multi-causal problem, but the dominant drivers are (1) delta plain subsidence and (2) sediment starvation — both substantially human-driven, which is why the loss rate has accelerated dramatically over the past century. Young deltaic sediment compacts under its own weight (autocompaction); this has always occurred, but was historically balanced by overbank flooding that deposited new sediment on the delta surface every flood season. Since the levee system was completed in the 1930s–1950s and the Atchafalaya diversion was controlled, virtually no sand or silt is deposited on the deltaic plain. Meanwhile, more than 80% of the Mississippi\'s pre-dam sediment load has been trapped in upstream reservoirs. Oil and gas extraction in the delta region adds a further 20–30 mm/yr of local subsidence in some areas. The combined subsidence and sediment starvation gives a relative sea level rise of 9–10 mm/yr in parts of coastal Louisiana — 2–3 times the global eustatic rate. Eustatic rise (Option A) is real but contributes only ~10–15% of the relative sea level change. Option B (hurricane erosion) is a secondary contributing factor, not the primary driver. Option D (vegetation die-off) is a consequence and positive feedback, not a primary cause.`,
        },
        {
          q: 'Barrier island rollover is the natural landward migration mechanism of sandy barriers. At what rate and through what physical process does rollover occur, and why does accelerating sea level rise threaten to overwhelm this process?',
          a: [
            'Rollover occurs by gradual dune migration driven by onshore winds; sea level rise threatens this by raising wave energy on the ocean side, which removes sand faster than wind can move it landward',
            'Storm overwash transports sand from the ocean face of the barrier, across the barrier crest, and deposits it as washover fans on the lagoon side, translating the entire barrier landward; sea level rise accelerates this by increasing storm surge height and frequency, initially maintaining rollover, but when development eliminates dunes and elevates barrier crests with seawalls, the natural migration is blocked, causing barriers to narrow and eventually be overwhelmed',
            'Rollover is driven by tidal currents flowing through barrier inlets; rising sea level increases tidal prism, strengthening the ebb-delta currents that push sand toward the lagoon; beyond ~5 mm/yr sea level rise, inlet migration becomes too fast for barrier crests to keep pace',
            'Rollover occurs through submarine sediment transport only: sand moves from the ocean-facing shoreface, underneath the water table, and emerges on the lagoon floor; as sea level rises, this submarine pathway is submerged too deep for the process to operate efficiently',
          ],
          correct: 1,
          explain: 'Barrier island rollover is the process by which storm overwash — waves breaking over the barrier crest and depositing sand on the lagoon side — translates the physical barrier landward over decades to centuries. It is the natural adaptation mechanism that has allowed barrier islands to survive through postglacial sea level rise over the past 10,000 years. Storm wash fans are the primary depositional feature of this process, and their stratigraphy preserved in the lagoon sediment records the history of storm and sea level forcing. The problem created by coastal development is that buildings, roads, and especially seawalls prevent this natural process: when storm waves cannot overwash the barrier and deposit sand on the lagoon side, the barrier cannot migrate landward and instead progressively erodes from the ocean face, narrowing until the barrier is eventually breached or submerged. Examples of this development-blocked migration include Galveston Island (Texas) and large parts of the New Jersey and Florida coast. Projected sea level rise of 3–8 mm/yr by late century will require rollover rates 2–5× faster than the 20th century average, which even undeveloped barriers may struggle to achieve. Option A incorrectly identifies wind as the primary mechanism (wind dune migration is a slow secondary contribution). Options C and D describe processes that do not represent the dominant rollover mechanism.',
        },
        {
          q: 'Salt marshes dissipate wave energy and trap sediment, helping them keep pace with sea level rise. At what rate can healthy salt marshes accrete vertically, and at what sea level rise rate does this natural defence begin to fail?',
          a: [
            'Salt marshes accrete at 0.1–0.5 mm/yr; they have already been overwhelmed by current sea level rise rates of ~3.7 mm/yr and are universally declining globally',
            'Salt marshes accrete at 2–10 mm/yr (0.08–0.39 in/yr) through trapping of inorganic suspended sediment and accumulation of organic matter from marsh plants; they can keep pace with sea level rise up to approximately 5–7 mm/yr under high suspended sediment concentrations, but drown when rise rate exceeds organic and inorganic accretion capacity; reduced suspended sediment supply from upstream dams and human modifications lowers the upper threshold',
            'Salt marshes accrete at >50 mm/yr through rapid mangrove peat formation and can withstand any rate of sea level rise projected for the 21st century; their loss is driven entirely by direct reclamation, not sea level',
            'Salt marsh accretion rate exactly equals the local sea level rise rate through a biotic feedback mechanism; when sea level rises faster, marsh grasses simply grow taller to compensate, maintaining a constant elevation relative to sea level regardless of the absolute rise rate',
          ],
          correct: 1,
          explain: 'Salt marsh accretion is the combination of two processes: (1) inorganic sediment trapping — marsh grasses slow water flow and allow suspended mineral particles to settle (0.5–8 mm/yr depending on suspended sediment concentration); and (2) organic matter accumulation — plant roots and decomposing organic matter add to the marsh surface (0.5–2 mm/yr). Combined rates of 2–10 mm/yr have been measured in sediment-rich estuaries. The critical threshold is approximately 5–7 mm/yr under high sediment supply, and considerably lower (~2–3 mm/yr) in sediment-starved settings like the US East Coast, where dams have reduced river sediment supply. When sea level rise rate exceeds the accretion capacity, marsh surfaces fall below the optimal tidal range for marsh grass growth (a narrow window of 20–80% tidal submersion), the vegetation dies back, and the organic component of accretion is lost — a tipping point that converts productive marsh to open water (ponding). The "drowning" of marshes has been documented on the UK coast and in Louisiana, where subsidence has created effective sea level rise rates far exceeding marsh accretion capacity. Option A underestimates accretion rates. Option C is incorrect for temperate salt marshes (mangrove peat is a related but separate system). Option D describes a real feedback (the "elevation capital" concept by Morris et al.) but it has limits — the feedback breaks down once the marsh is submerged beyond vegetation tolerance.',
        },
        {
          q: 'Jakarta, Indonesia is sinking at up to 250 mm/yr in its northern coastal districts — far exceeding global mean sea level rise. What is the primary driver of this extreme subsidence, and what are its geomorphic consequences?',
          a: [
            'Jakarta is located on an active tectonic plate boundary; subduction of the Sunda Plate is causing vertical crustal subsidence at rates that will eventually submerge the entire city regardless of sea level rise',
            'Groundwater extraction from aquifers beneath the city by millions of private wells and industrial users is the primary driver; removing water from compressible sediment layers causes irreversible compaction and surface subsidence of up to 250 mm/yr in the most affected northern districts; consequences include permanent inundation of low-lying coastal areas, saltwater intrusion into aquifers, damage to building foundations and infrastructure, and loss of drainage gradient that worsens urban flooding',
            'Rapid urban construction has added enormous building loads to soft Holocene alluvial sediments beneath the city; the weight of buildings compresses the sediment and drives surface subsidence at rates proportional to building density',
            'Dredging of Jakarta Bay for port expansion removes the submarine sediment that was previously providing buoyancy support to the coastal sediment beneath the city; without this hydrostatic support, the sediment compacts under its own weight',
          ],
          correct: 1,
          explain: `Jakarta\'s extreme subsidence — up to 4 m (13 ft) total in some northern neighbourhoods over the past 30 years — is primarily driven by groundwater extraction from deep sedimentary aquifers. The city\'s piped water network is insufficient; millions of residents and businesses pump groundwater from private wells, depleting aquifer pressure. When pore water is removed from compressible clay and sand layers, the grains bear more load, causing irreversible consolidation — the same process described in Terzaghi\'s consolidation theory. The geomorphic consequences are profound: by 2050, an estimated 95% of North Jakarta could be below sea level without massive pumping protection. Current consequences include (1) seawater intrusion into groundwater, (2) chronic inundation during normal tidal cycles ("sunny day flooding"), (3) structural damage to buildings and roads as the land tilts and settles differentially, (4) collapse of gravity drainage systems (sewers and drains designed for a surface above sea level), and (5) increased exposure to tsunami and storm surge flooding. Jakarta\'s experience mirrors other rapidly developing deltaic megacities including Bangkok, Ho Chi Minh City, Shanghai, and Lagos. The Indonesian government\'s response has been to plan a new capital city (Nusantara, Borneo) partly to relieve Jakarta\'s groundwater demand. Option A incorrectly attributes the subsidence to tectonics — while Java is in a tectonically active region, tectonic subsidence rates are 1–3 mm/yr, negligible compared to anthropogenic rates. Option C (building load) contributes perhaps 5–15% of total subsidence. Option D is physically incorrect.`,
        },
      ],
    },
  ],
}

export default coastalGeomorphology
