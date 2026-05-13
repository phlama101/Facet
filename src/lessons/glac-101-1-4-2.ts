import { Waves, AlertTriangle, TrendingDown, Globe, Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const iceSheetsSeaLevel: Lesson = {
  id: 'glac-101-1-4-2',
  title: 'Ice Sheets, Marine Ice Instability, and Sea Level Futures',
  track: 'cli',
  trackName: 'Glaciology',
  level: 'Beginner',
  duration: '14 min',
  xpReward: 150,
  description: 'The West Antarctic Ice Sheet rests on a retrograde bed that could make its retreat self-sustaining and irreversible once it begins. This lesson examines how marine ice dynamics, tipping-point feedbacks, and structural uncertainty in ice sheet models translate into IPCC sea level projections — and why the upper tail of those projections matters more than the central estimate.',
  sources: [
    { org: 'IPCC',   title: 'IPCC AR6 WGI — Chapter 9: Ocean, Cryosphere and Sea Level Change (2021)',          url: 'https://www.ipcc.ch/report/ar6/wg1/' },
    { org: 'NASA',   title: 'NASA — Thwaites Glacier Research: International Thwaites Glacier Collaboration',    url: 'https://thwaitesglacier.org' },
    { org: 'Nature', title: 'Pollard et al. (2015) — Potential Antarctic Ice Sheet retreat driven by hydrofracturing', url: 'https://www.nature.com/articles/nature14160' },
    { org: 'PNAS',   title: 'Bamber et al. (2019) — Ice sheet contributions to future sea-level rise from structured expert judgement', url: 'https://www.pnas.org/doi/10.1073/pnas.1817205116' },
    { org: 'AGU',    title: 'DeConto & Pollard (2016) — Contribution of Antarctica to past and future sea-level rise', url: 'https://www.nature.com/articles/nature17145' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Thwaites and the threshold: why some ice retreat may be irreversible',
      body: `Sea level rise is one of the most consequential physical consequences of climate change, affecting low-lying coastlines that house hundreds of millions of people worldwide. Ice sheets — the Greenland Ice Sheet (GIS) and the Antarctic Ice Sheet (AIS) — together hold enough ice to raise global mean sea level by approximately 7.2 m (Greenland) and 58.3 m (Antarctica) if fully melted, though complete melting would require millennia of sustained warming. The relevant question is not total melt, but the rate of discharge over the coming decades to centuries, and whether any of that discharge crosses thresholds that make it difficult or impossible to halt.

The most alarming instability mechanism is **Marine Ice Sheet Instability (MISI)**. The West Antarctic Ice Sheet (WAIS) is a **marine-based ice sheet**: most of its bed lies below sea level, and the ice is grounded on rock that slopes downward away from the coast — a **retrograde bed slope**. The **grounding line** is the boundary where grounded ice transitions to floating ice shelf. On a retrograde slope, if the grounding line retreats inland, the ice entering the ocean from deeper water is thicker, so the ice flux to the ocean increases — causing further retreat. This positive feedback is theoretically self-sustaining once initiated: the grounding line continues retreating even without additional warming. The key question is whether the Thwaites and Pine Island basins of West Antarctica have already initiated MISI, or how close they are to doing so.

**Thwaites Glacier** in West Antarctica has attracted intense scientific attention. It is roughly the size of Florida (~190,000 km²), contains ice equivalent to approximately **0.6 m of global sea level rise**, and acts as a "keystone" buttressing adjacent ice. Its grounding line has retreated ~14 km since the 1990s. The **International Thwaites Glacier Collaboration (ITGC)** — a major US-UK research programme launched in 2018 — deployed autonomous submarines, sensors, and ice-penetrating radar to examine ocean-ice interactions at the grounding zone. Observations revealed warm Circumpolar Deep Water (CDW, ~1°C above freezing) is accessing the cavity beneath the Thwaites ice shelf, melting it from below at ~50 Gt/yr. Cracks and rifts propagating across the Thwaites Eastern Ice Shelf suggest it could fracture within a decade.

A second and more speculative mechanism is **Marine Ice Cliff Instability (MICI)**. If a floating ice shelf collapses (through fracturing, surface melt ponding, and hydrofracturing of crevasses), it exposes a tall exposed ice cliff at the grounding line. Ice cliffs taller than ~100 m are mechanically unstable — the vertical stress at the base of the cliff exceeds the strength of ice, causing successive cliff calving that cannot be halted by buttressing. MICI has been invoked to explain rapid sea level contributions during past warm periods (Last Interglacial sea level ~6–9 m above present when global temperatures were only ~1–2°C warmer) but remains scientifically debated: not all models find MICI necessary to match palaeoclimate sea level data, and observational constraints are limited.

IPCC AR6 (2021) assessed **likely** sea level rise of 0.3–1.0 m by 2100 (medium emissions, SSP2-4.5) and 0.6–1.0 m (high emissions, SSP5-8.5), with a **low-confidence** upper end extending beyond 1.5–2.0 m if ice sheet instabilities are triggered. Post-AR6 studies extending projections to 2300 under high emissions show potential rises of several metres, with high structural uncertainty from poorly constrained Antarctic outlet glacier dynamics. The IPCC also assessed **isostatic rebound**: as ice melts off Greenland and Antarctica, the underlying crust rises (glacial isostatic adjustment, GIA), affecting relative sea level differently in different locations — land near former ice masses rises, reducing local sea level, while far-field sites experience different patterns of rise.`,
      keyTerms: [
        {
          term: 'Marine Ice Sheet Instability (MISI)',
          def: 'A positive feedback mechanism on retrograde-bedded marine ice sheets: grounding line retreat on a bed sloping downward inland increases ice flux to the ocean, causing further retreat — potentially irreversible once initiated.',
        },
        {
          term: 'grounding line',
          def: 'The boundary where grounded ice transitions to floating ice shelf. On a retrograde bed, grounding line retreat is self-reinforcing: deeper water means thicker ice, greater buoyancy, and greater calving flux.',
        },
        {
          term: 'retrograde bed slope',
          def: 'A bed that slopes downward away from the coast (inland); characteristic of West Antarctica. Combined with marine conditions, this geometry makes MISI theoretically possible and complicates ice sheet stability analysis.',
        },
        {
          term: 'Marine Ice Cliff Instability (MICI)',
          def: 'A hypothetical mechanism where exposed ice cliffs taller than ~100 m are mechanically unstable and collapse sequentially after ice shelf loss; would dramatically accelerate Antarctica\'s sea level contribution but remains scientifically debated.',
        },
        {
          term: 'glacial isostatic adjustment (GIA)',
          def: 'The slow rebound of Earth\'s crust as ice masses melt and their gravitational load is removed; reduces relative sea level near formerly glaciated regions while contributing to slight rise elsewhere through the "gravitational fingerprint" effect.',
        },
        {
          term: 'structured uncertainty',
          def: 'In sea level projections, the distinction between well-characterized probabilistic uncertainty (quantifiable from ensembles) and deep or "scenario" uncertainty arising from possible but poorly-quantified ice sheet tipping points; drives the long upper tail in IPCC projections.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Ice Sheet Dynamics and Instability Mechanisms',
      body: `Understanding why the ice sheets are more than just passive responders to temperature — they contain internal dynamic feedbacks that could produce non-linear, threshold-crossing behaviour — is essential to interpreting the full range of sea level projections. MISI is the best-supported mechanism; MICI remains under active research and debate.`,
      cards: [
        {
          name: 'Marine Ice Sheet Instability (MISI)',
          icon: Waves,
          color: BRAND.accent,
          desc: 'operates on retrograde bed slopes where grounding line is the critical boundary; if the grounding line retreats to deeper water, thicker ice discharges faster (ice flux scales with ice thickness cubed approximately); increased discharge causes more retreat — a positive runaway feedback; buttressing ice shelves can stabilise the system by providing back-stress against the grounding line; removal of buttressing (by ice shelf thinning or collapse) removes this restraint',
          examples: 'Pine Island Glacier: grounding line retreated ~30 km between 1992 and 2011 on a retrograde slope. Thwaites Glacier: grounding line retreated ~14 km since 1990s; warm Circumpolar Deep Water melting ice shelf at ~50 Gt/yr. Modelling studies show that Thwaites basin alone has enough ice for ~0.6 m SLR; full WAIS collapse over centuries would contribute 3.3 m. The 2020 discovery of a cavity the size of Manhattan growing beneath Thwaites confirmed warm water intrusion is already well advanced.',
        },
        {
          name: 'Ice Shelf Buttressing and Its Loss',
          icon: AlertTriangle,
          color: BRAND.gold,
          desc: 'floating ice shelves extending from grounded ice provide back-pressure (buttressing) that slows grounding line ice flow; when ice shelves thin by basal melt or fracture by surface processes, this backstress is reduced and grounded ice accelerates; ocean warming is the primary driver of basal melt in West Antarctica; warming surface temperatures drive hydrofracturing (surface meltwater fills crevasses, pressure-wedging them open)',
          examples: 'Larsen B Ice Shelf (Antarctic Peninsula): 3,250 km² collapsed in 35 days in 2002; tributary glaciers behind it accelerated 3–8× within months. Ross Ice Shelf (world\'s largest, ~500,000 km²): currently stable but basal melt rate sensitive to CDW incursion. Thwaites Eastern Ice Shelf: cracks detected in 2021 propagating across the entire width; researchers estimated possible major fracture event within 3–5 years from that assessment.',
        },
        {
          name: 'Marine Ice Cliff Instability (MICI): The Contested Mechanism',
          icon: TrendingDown,
          color: BRAND.coral,
          desc: 'proposed by DeConto & Pollard (2016): after ice shelf collapse by hydrofracturing, exposed ice cliffs >~100 m tall are mechanically unstable — deviatoric stresses exceed ice strength; successive cliff calving could expose progressively deeper, taller ice, accelerating beyond any plausible calving law; invoked to explain ~6–9 m of sea level during Last Interglacial; controversial: not all model groups can reproduce the mechanism, and direct observational constraints are limited',
          examples: 'No modern ice cliff has been observed calving continuously at the rates MICI predicts — Jakobshavn Isbræ (Greenland) is among the fastest-retreating glaciers with cliff heights ~90 m but has not shown unlimited instability. Helheim and Kangerdlugssuaq glaciers showed rapid retreat then restabilisation, inconsistent with pure MICI runaway. DeConto & Pollard revised their projections in 2021, reducing the extreme upper-end Antarctic contribution after incorporating better constraints on ice shelf hydrology and cliff failure mechanics.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Sea Level Projections: IPCC AR6 and Beyond',
      body: `IPCC AR6 represents the most comprehensive probabilistic assessment of sea level projections to date, but it also explicitly distinguishes between the "likely range" (where model ensembles are well-constrained) and the "low-likelihood, high-impact" upper tail (where ice sheet instability processes may operate but are poorly constrained). Planners must engage with both.`,
      cards: [
        {
          name: 'IPCC AR6 Likely Range (2100)',
          icon: Activity,
          color: BRAND.jade,
          desc: 'AR6 "likely" (66% probability) sea level rise by 2100: 0.3–0.6 m under SSP1-2.6 (low emissions); 0.4–0.7 m under SSP2-4.5; 0.6–1.0 m under SSP5-8.5 (high emissions); the likely range does not include MISI/MICI tipping point contributions, which require a separate "low-confidence" assessment; global mean does not reflect local variations due to GIA, ocean circulation, and gravitational fingerprints',
          examples: 'Under SSP5-8.5, the 83rd percentile (upper end of likely range) is ~1.0 m; the low-likelihood but physically plausible upper end extends to ~1.5–2.0 m by 2100 if Antarctic instabilities are triggered. Structured expert judgement assessments (Bamber et al., 2019) found a 5% chance of >2 m rise under 5°C warming — a risk that matters for critical infrastructure. Paris, Tokyo, Shanghai, Mumbai, Jakarta, Miami: all have major assets within 2 m of sea level.',
        },
        {
          name: '2100–2300 Projections and Committed Rise',
          icon: Globe,
          color: BRAND.amethyst,
          desc: 'beyond 2100, structural uncertainty from ice sheet dynamics grows rapidly; AR6 assessed that under high emissions, sea level could reach 2–5 m by 2300, with the low-confidence upper end exceeding 15 m if MICI and full WAIS collapse operate; committed sea level rise — the eventual equilibrium rise for a given atmospheric CO₂ — is much larger than 2100 projections because ice sheets respond over centuries to millennia; even at current CO₂, long-term commitment is likely several metres',
          examples: 'Palaeoclimate analogue: Last Interglacial (~125,000 BP) with global temperatures ~1–2°C above pre-industrial had sea level ~6–9 m above present — implying both Greenland and West Antarctica contributed significantly under sustained warming near current targets. Pliocene (~3 Ma, ~3–4°C warmer): sea level ~15–25 m higher, consistent with significant East Antarctic Ice Sheet contribution. These analogues bracket the upper-range scenarios for committed sea level rise under Paris Agreement temperature targets.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From Warm Ocean to Sea Level Rise: The WAIS Instability Chain',
      body: 'Trace how warming Southern Ocean waters access the Thwaites glacier cavity and how marine ice sheet feedbacks could propagate into metres of sea level rise over coming centuries.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Trace the chain from Southern Ocean warming through marine ice sheet instability to sea level consequences',
        nodes: [
          {
            id: 'southern-ocean-warming',
            label: 'Southern Ocean Warming (CDW)',
            description: 'Circumpolar Deep Water (CDW) at ~1°C above freezing is being deflected onto the continental shelf by changes in wind patterns linked to ozone recovery and greenhouse forcing. CDW temperatures are ~3–4°C warmer than surface water and have much higher melt potential.',
            color: BRAND.coral,
          },
          {
            id: 'sub-shelf-melt',
            label: 'Sub-shelf Basal Melt (~50 Gt/yr)',
            description: 'CDW accesses the cavity beneath the Thwaites ice shelf, melting ice from below at ~50 Gt/yr. A cavity the size of Manhattan has been detected growing under the glacier. Basal melt weakens the ice shelf and reduces its buttressing capacity.',
            color: BRAND.gold,
          },
          {
            id: 'ice-shelf-fracture',
            label: 'Ice Shelf Thinning and Fracture',
            description: 'As the ice shelf thins, surface crevasses propagate. Eastern Thwaites Ice Shelf shows major crack systems. Once buttressing is reduced, grounded ice behind accelerates toward the ocean. Full shelf collapse could expose tall ice cliffs.',
            color: BRAND.accent,
          },
          {
            id: 'grounding-line-retreat',
            label: 'Grounding Line Retreat (MISI)',
            description: 'On Thwaites\'s retrograde bed, once the grounding line retreats past a shallow sill, deeper warmer water access increases and ice flux rises further — triggering the MISI positive feedback. The grounding line has retreated ~14 km since the 1990s.',
            color: BRAND.amethyst,
          },
          {
            id: 'wais-acceleration',
            label: 'WAIS Ice Discharge Acceleration',
            description: 'If MISI propagates across Thwaites basin and adjacent glaciers (Pine Island, Kohler, Smith), total ice discharge could increase dramatically. Full Thwaites basin collapse: ~0.6 m SLR. Full WAIS collapse: ~3.3 m SLR over centuries.',
            color: BRAND.ruby,
          },
          {
            id: 'sea-level-rise',
            label: 'Global Sea Level Rise',
            description: 'Ice mass entering the ocean raises global mean sea level. Fingerprint effects mean rise is non-uniform: regions far from the melting ice see more rise (gravitational pull of ice sheet decreases). Low-lying coastlines and island nations face existential risk at 1–2+ m.',
            color: BRAND.jade,
          },
        ],
        edges: [
          { from: 'southern-ocean-warming', to: 'sub-shelf-melt',      label: 'CDW accesses ice shelf cavity' },
          { from: 'sub-shelf-melt',         to: 'ice-shelf-fracture',  label: 'Shelf thinning reduces structural integrity' },
          { from: 'ice-shelf-fracture',     to: 'grounding-line-retreat', label: 'Reduced buttressing accelerates grounding line' },
          { from: 'grounding-line-retreat', to: 'wais-acceleration',   label: 'MISI feedback: deeper bed → more ice flux' },
          { from: 'wais-acceleration',      to: 'sea-level-rise',      label: 'Ice discharge raises ocean volume' },
          { from: 'grounding-line-retreat', to: 'grounding-line-retreat', label: 'Retrograde slope sustains positive feedback' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Marine Ice Sheet Instability (MISI) is a positive feedback mechanism specific to ice sheets with retrograde bed slopes. What is the fundamental physical reason why grounding line retreat on a retrograde slope is self-sustaining?',
          a: [
            'On a retrograde slope, retreating ice is exposed to warmer air temperatures at lower elevations, increasing surface melt and accelerating mass loss beyond what ocean-driven basal melt alone could cause',
            'On a retrograde slope, as the grounding line retreats to greater depth, the ice at the grounding line is thicker; ice discharge flux scales approximately with the cube of ice thickness at the grounding line, so thicker ice discharges faster, removing more mass and causing further retreat — a self-reinforcing loop',
            'Retrograde slopes mean the ocean floor tilts toward the ice sheet, allowing warm ocean water to flow more efficiently toward the grounding line as it retreats, delivering increasing amounts of heat',
            'The retrograde slope creates a hydrostatic pressure difference that draws ocean water into the sub-shelf cavity with increasing force as the grounding line retreats, preventing refreezing of basal meltwater',
          ],
          correct: 1,
          explain: 'MISI is fundamentally about the relationship between ice thickness at the grounding line and ice discharge. The flux of ice crossing the grounding line (entering the ocean as discharge) scales approximately as ice thickness to the power of ~4–5 in standard ice dynamics formulations. On a prograde slope (bed rising toward the coast), grounding line retreat moves to shallower water — thinner ice, less discharge, negative feedback that stabilises the retreat. On a retrograde slope (bed deepening away from coast), grounding line retreat moves to deeper water — thicker ice, greater discharge, positive feedback that sustains and accelerates retreat. This is an internal dynamic instability: no additional warming is needed once initiated. Option A describes the elevation-melt feedback, which is real but applies to surface mass balance, not the ice discharge mechanism of MISI. Option C is partially related but misdescribes the geometry: the driving factor is not the slope of the ocean floor per se but rather the ice thickness at the grounding line. Option D invokes hydrostatic pressure incorrectly — the relevant physics is ice dynamics, not hydrostatic fluid flow.',
        },
        {
          q: 'Thwaites Glacier in West Antarctica is sometimes called the "Doomsday Glacier." What makes it scientifically distinctive, and what does current monitoring show about its state?',
          a: [
            'Thwaites is distinctive because it is the world\'s fastest-moving glacier (>100 m/day); monitoring shows it has been completely stable for the past decade and the "doomsday" label is media hyperbole',
            'Thwaites is distinctive because it contains ~0.6 m SLR equivalent, sits on a retrograde bed grounded below sea level, and buttresses adjacent WAIS glaciers; monitoring shows warm Circumpolar Deep Water melting its ice shelf at ~50 Gt/yr, grounding line retreat of ~14 km since 1990, a growing sub-glacial cavity, and major cracks across its Eastern Ice Shelf that could precipitate fracture within years',
            'Thwaites is distinctive because it is the only Antarctic glacier flowing into the Atlantic Ocean, which creates unique heat exchange dynamics; it is currently thickening due to increased snowfall that more than compensates for basal melt',
            'Thwaites is distinctive because it sits above an active geothermal hotspot that causes significant basal melting independent of ocean warming; this geothermal source has been the primary driver of recent retreat',
          ],
          correct: 1,
          explain: 'Thwaites\'s significance stems from multiple converging factors: (1) ice volume — its drainage basin contains ~0.6 m SLR equivalent, and it buttresses adjacent glaciers holding an additional 3 m or more; (2) retrograde bed geometry — the bed slopes downward inland from the current grounding line position, placing it in the MISI-susceptible configuration; (3) ocean warming — Circumpolar Deep Water (CDW) at ~1°C above the pressure melting point of ice has been detected accessing the cavity beneath the Thwaites ice shelf, causing basal melt at ~50 Gt/yr; (4) observed retreat — the grounding line has retreated approximately 14 km since the 1990s and current rates appear to be accelerating; (5) structural vulnerability — the 2021–2022 ITGC surveys found major fracture systems propagating across the Eastern Ice Shelf, with some scientists estimating possible major calving within a decade. Option A is wrong — Jakobshavn Isbræ in Greenland (~40–50 m/day) is faster. Option C is wrong — Thwaites drains into the Amundsen Sea in West Antarctica, not the Atlantic. Option D has some factual basis (there is modest geothermal heat in parts of West Antarctica) but overstates its role relative to ocean warming.',
        },
        {
          q: 'IPCC AR6 gave a "likely" (66% probability) sea level rise of 0.6–1.0 m by 2100 under high emissions, but also assessed a separate "low-likelihood, high-impact" range extending potentially to 1.5–2.0 m. Why are these treated differently rather than as part of a single probability distribution?',
          a: [
            'They are treated differently because political considerations in the IPCC process prevent including ice sheet tipping points in the main projections; the scientific evidence for MISI and MICI is considered too politically sensitive to include in the likely range',
            'The two ranges reflect fundamentally different types of uncertainty: the likely range is derived from model ensembles with well-characterised spread that can be assigned probabilities; the higher range involves ice sheet instability mechanisms (MISI, MICI) that are physically plausible but too poorly constrained in current models to assign reliable probabilities — they represent "deep uncertainty" where the probability distribution itself is not well known',
            'The two ranges reflect two different time horizons: the likely range applies to 2100 and the higher range applies to 2300; combining them would be scientifically incorrect because sea level projections must be kept separate by time period',
            'The likely range applies to global average sea level and the higher range applies to local relative sea level in specific vulnerable regions; they cannot be combined because they measure different quantities',
          ],
          correct: 1,
          explain: 'This distinction is one of the most important methodological points in IPCC AR6\'s sea level chapter. Standard probabilistic projections are possible when you have a well-characterised ensemble of models whose spread captures most of the uncertainty — you can assign percentiles and a probability distribution. For the ice sheet instability contributions (MISI, MICI), the situation is fundamentally different: different model groups with different parameterisations of cliff mechanics, ice shelf hydrology, and ocean-ice interaction produce dramatically different results (from near-zero to >1 m of Antarctic contribution by 2100), and there is no scientific consensus on which model representation is correct. This means the probability distribution itself is uncertain — not just the value within a known distribution. IPCC terms this "deep uncertainty" or "structured uncertainty," and handles it by providing a separate low-confidence assessment with wider, less well-defined bounds rather than forcing false precision. For risk management and infrastructure planning, the prudent approach is to treat the upper range as plausible even if its probability is not well-constrained. Option A is incorrect — the treatment reflects genuine scientific epistemology, not political considerations. Option C misidentifies time horizons as the reason. Option D confuses global mean with local relative sea level.',
        },
        {
          q: 'Glacial isostatic adjustment (GIA) causes land to rise after deglaciation. How does GIA affect local sea level in different regions, and why does a melting Greenland Ice Sheet paradoxically reduce sea level near Greenland?',
          a: [
            'GIA raises land near melting ice, reducing local relative sea level by lifting the coastline; melting Greenland causes sea level rise near Greenland because the meltwater accumulates locally before dispersing to the global ocean over centuries',
            'GIA raises previously glaciated land, reducing relative sea level in those regions by lifting them above the rising ocean; melting Greenland reduces sea level near Greenland because the ice sheet\'s gravitational pull currently draws ocean water toward it — as it melts, this gravitational attraction diminishes, allowing that "held" water to migrate toward other ocean basins, lowering sea level near Greenland while raising it slightly more than average in the far field',
            'GIA and melting ice produce identical sea level effects everywhere because water redistributes evenly across the global ocean within days; regional differences in sea level change are caused entirely by tectonic subsidence, not GIA or gravitational effects',
            'GIA only affects sea level in the Arctic and Antarctic; in tropical regions and mid-latitudes, sea level rise is perfectly uniform and equal to the global mean regardless of which ice sheet melts',
          ],
          correct: 1,
          explain: 'Two distinct mechanisms create regional sea level "fingerprints" from ice sheet melt. The first is GIA: as ice melts and unloads the crust, the bedrock beneath slowly rebounds upward (on timescales of thousands to tens of thousands of years), directly raising the land surface and thus reducing local relative sea level. Scandinavia is still rebounding from the last ice age at ~5–8 mm/yr in some locations. The second, and counterintuitive, mechanism is gravitational: large ice sheets exert a significant gravitational pull on nearby ocean water, drawing it toward themselves and creating a local "mound" of ocean several metres higher than the global average near Greenland and Antarctica. If the Greenland Ice Sheet melts, this gravitational attraction diminishes, and the ocean water that was gravitationally held near Greenland migrates away to the far-field ocean. The net result is that sea level near Greenland actually falls (or rises less than the global average) while sea level in the tropical Pacific and Indian Ocean rises somewhat more than the global mean — the "gravitational fingerprint" of Greenland melt points away from Greenland. This is not intuitive but is well-established in glaciological and geodetic science. Option A is factually wrong about the Greenland-local sea level direction. Option C is wrong — the time-dependence of redistribution matters and regional effects are well-established. Option D is wrong — fingerprints extend globally.',
        },
        {
          q: 'The Last Interglacial (approximately 125,000 years ago) had global temperatures only 1–2°C above pre-industrial and yet sea level was approximately 6–9 m higher than today. What does this imply about modern committed sea level rise?',
          a: [
            'The Last Interglacial data are unreliable because sea level 125,000 years ago cannot be accurately measured; modern projections are therefore not constrained by palaeoclimate analogues and must be based entirely on model projections from 2000 onward',
            'Since temperatures only 1–2°C above pre-industrial produced 6–9 m of sea level rise during the Last Interglacial, current warming (already ~1.2°C above pre-industrial) implies a multi-metre committed sea level rise on timescales of centuries to millennia — even if emissions ceased today, the ice sheets are not yet in equilibrium with current temperatures and will continue losing mass until a new equilibrium is reached, committing several metres of eventual sea level rise',
            'The Last Interglacial sea level of 6–9 m above present was entirely due to a much smaller West Antarctic Ice Sheet at that time — Greenland and East Antarctica contributed nothing; modern warming only affects West Antarctica, so today\'s committed sea level rise is at most 0.6 m (Thwaites equivalent)',
            'The Last Interglacial high sea level proves that natural variability can produce 6–9 m of sea level change; this means modern sea level rise is likely natural and cannot be attributed to anthropogenic warming',
          ],
          correct: 1,
          explain: 'Palaeoclimate evidence is a powerful constraint on ice sheet sensitivity. The Last Interglacial (Marine Isotope Stage 5e, ~125,000 BP) — sometimes called the Eemian — had orbital forcing that produced summer insolation higher than today, with global mean temperatures estimated at ~0.5–1.5°C above pre-industrial. Yet sea level was 6–9 m above present (synthesised from coral terraces, beach deposits, and speleothems worldwide). This 6–9 m of excess sea level relative to today must have come primarily from Greenland (~1–4 m contribution) and West Antarctica (~3–5 m contribution), with possible East Antarctic contributions. The implication for today: since we are already at ~1.2°C above pre-industrial and heading toward ~1.5–2°C under even ambitious emissions reductions, the ice sheets are not yet in equilibrium with today\'s temperatures. They are committed to multi-metre eventual loss — but on timescales of centuries to millennia. The 2100 projections of 1–2 m represent only the first instalment of this committed change; the century-scale projections are where the full palaeoclimate analogue becomes directly relevant. Option A incorrectly dismisses palaeoclimate data — Last Interglacial sea levels are extremely well-constrained globally. Option C incorrectly attributes the full LIG excess to West Antarctica only — evidence indicates significant Greenland and possibly East Antarctic contributions. Option D attempts natural-variability attribution, which is incorrect: orbital forcing drove the LIG warmth, but that does not negate the reality of anthropogenic forcing driving current change.',
        },
      ],
    },
  ],
}

export default iceSheetsSeaLevel
