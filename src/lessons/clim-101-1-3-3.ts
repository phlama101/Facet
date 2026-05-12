import { Thermometer, Globe, Wind } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const lesson: Lesson = {
  id: 'clim-101-1-3-3',
  title: 'Climate Impacts: Ecosystems, Food, Water, and Human Health',
  track: 'cli',
  trackName: 'Climate Science',
  level: 'Beginner',
  duration: '18 min',
  xpReward: 180,
  description: 'How observed and projected warming is reshaping ecosystems, threatening food and water security, and creating compounding risks for human populations — with disproportionate harm falling on those least responsible for emissions.',
  sources: [
    { org: 'IPCC',     title: 'IPCC AR6 WGII — Impacts, Adaptation and Vulnerability (2022)',                          url: 'https://www.ipcc.ch/report/ar6/wg2/' },
    { org: 'NOAA',     title: 'NOAA National Centers for Environmental Information — Billion-Dollar Weather Disasters', url: 'https://www.ncei.noaa.gov/access/billions/' },
    { org: 'NASA',     title: 'NASA Global Climate Change — Effects of Climate Change on Coral Reefs and Oceans',      url: 'https://climate.nasa.gov/effects/' },
    { org: 'OpenStax', title: 'Environmental Science — Climate Change Impacts (CC-BY 4.0)',                            url: 'https://openstax.org/books/environmental-science-ap' },
    { org: 'AGI',      title: 'Glossary of Geology — Extreme Event Attribution, Compound Risk, Climate Justice',       url: 'https://www.americangeosciences.org/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'A planet already responding',
      body: `Climate change is no longer a distant future threat — it is reshaping ecosystems, food systems, and human health today, at just over 1 °C of warming above pre-industrial levels. The IPCC AR6 Working Group II report (2022) compiled thousands of studies documenting observed impacts on every inhabited continent and across every ocean. Half of all species assessed have already shifted their geographic range or seasonal timing in response to warming. The 2021 Pacific Northwest heat dome killed an estimated 1,400 people in a region with no air conditioning infrastructure; attribution science showed the event was "virtually impossible" without climate change. The Great Barrier Reef has experienced five mass bleaching events since 2016 alone.

What makes climate impacts particularly challenging to manage is their **compound and cascading nature**. A single hazard — a heat wave, a flood, a drought — can be managed. But a heat wave coinciding with a drought, wildfire, and electricity grid stress creates systemic failure that overwhelms emergency response and infrastructure simultaneously. These compound events are becoming more frequent and more correlated as the climate shifts.

The distribution of impacts is profoundly inequitable. The populations most exposed to climate risk — small island states, Sub-Saharan Africa, South and Southeast Asia — have contributed the least to cumulative greenhouse gas emissions. This gap between responsibility for emissions and exposure to consequences is the central moral challenge of climate policy, captured in the concept of **climate justice**. At the same time, no region is immune: heat mortality is rising in Europe and North America, glacial retreat is threatening freshwater supply in the Andes and Alps, and wildfire seasons are expanding on every continent.`,
      keyTerms: [
        { term: 'Phenological mismatch', def: 'A disruption to the synchrony between the life cycle timing of interacting species (e.g., flowering plants and their pollinators; caterpillar emergence and insectivorous bird arrival) caused by differential responses to warming. If two species that rely on each other respond to warming at different rates, their life cycle events can become temporally decoupled, reducing reproductive success. Documented examples include European pied flycatchers (arrival timing not advancing as fast as caterpillar peak emergence) and many plant-pollinator networks in alpine environments. Phenological mismatch can reduce ecosystem productivity and resilience.' },
        { term: 'Coral bleaching', def: 'The expulsion by stressed corals of their symbiotic photosynthetic algae (zooxanthellae), which provide up to 90 % of the coral\'s energy via photosynthesis. Bleaching occurs when sea-surface temperature (SST) exceeds the coral\'s thermal tolerance by ~1 °C for several weeks. Without zooxanthellae, coral turns white ("bleaches"); prolonged bleaching leads to starvation and death. Mass bleaching events occurred globally in 1998, 2010, 2016, 2017, and 2020. At +1.5 °C global warming, 70–90 % of coral reefs are projected to bleach annually; at +2 °C, >99 %. Coral reefs support ~25 % of all marine species and provide food and income for ~500 million people.' },
        { term: 'Compound climate event', def: 'The simultaneous or sequential occurrence of multiple climate hazards that creates impacts greater than the sum of individual events. Examples: heat wave + drought (increases wildfire risk and crop failure); storm surge + river flooding + high tide (coastal compound flooding); heat + humidity + air quality degradation + grid failure. Compound events are disproportionately dangerous because they exceed the coping capacity of emergency response and infrastructure systems simultaneously. Research shows that compound hot-dry events have doubled in frequency since 1950 and are increasing faster than individual extremes.' },
        { term: 'Wet-bulb temperature', def: 'A measure of heat stress that accounts for both temperature and humidity. The wet-bulb temperature (Tw) represents the lowest temperature achievable by evaporative cooling; it is measured by a thermometer covered in a wet cloth. A Tw of 35 °C represents the physiological limit for human thermoregulation — at this threshold, the human body cannot cool itself through sweating even in the shade, and core temperature rises fatally within hours. Tw ≥ 32–35 °C has already been briefly recorded in the Persian Gulf and South Asia; climate models project these conditions will be seasonal in densely populated tropical and subtropical regions at +2–3 °C of global warming.' },
        { term: 'Climate justice', def: 'The recognition that climate change disproportionately harms communities that have contributed least to cumulative greenhouse gas emissions, particularly low-income nations, Indigenous communities, and marginalised populations. Rooted in both distributive justice (who bears the burden) and procedural justice (who has a voice in decisions). Mortality risk from climate change is projected to be ~10× higher in low-income countries than high-income countries at +2 °C. Climate justice frameworks inform international negotiations over emissions targets, adaptation finance (the $100 billion/yr pledge), and the Loss and Damage mechanism established at COP27 (2022).' },
      ],
    },
    {
      type: 'concept',
      title: 'Ecosystems, food and water security, and compounding human risks',
      body: `**Ecosystem disruption and biodiversity.** Species are responding to warming by shifting their geographic ranges poleward and upslope, or by advancing their seasonal timing. The geographic range of ~47 % of terrestrial species has already shifted measurably since pre-industrial times. However, not all species shift at the same rate, producing **phenological mismatches** — the decoupling of interdependent species' life cycles. Coral reefs are particularly vulnerable: they support ~25 % of all marine species and provide food and income for ~500 million people, yet 70–90 % will experience annual bleaching at +1.5 °C and >99 % at +2 °C. The Amazon rainforest faces an additional risk beyond direct warming: drought and fire interact in a positive feedback cycle that could push the forest toward a semi-arid "savannisation" at +3–4 °C of regional warming. Ocean deoxygenation — warmer water holds less dissolved O₂ — is expanding oxygen minimum zones, stressing marine fauna and reducing fishery productivity.

**Food security and freshwater.** For every additional 1 °C of warming, global crop yields are projected to decline on average: wheat ~6 %, maize ~7 %, rice ~3 %, soy ~3 %, in the absence of adaptation. Heat stress at flowering is particularly damaging; nighttime warming (which prevents crop recovery) compounds daytime heat effects. Tropical and subtropical regions are most at risk because many crops are already near their thermal tolerance limits and smallholder farmers have the least adaptive capacity. Glaciers in the Hindu Kush–Himalaya, Andes, Alps, and other mountain regions provide dry-season meltwater to billions of people. Many catchments have already passed "peak water" — the point of maximum runoff as accelerating glacier retreat temporarily increases meltwater before declining as ice mass is exhausted. Regions dependent on snowmelt face shift from slow spring release to rapid winter rain-on-snow events, increasing flood risk while reducing summer low flows.

**Human health and compound risks.** Extreme heat is the leading weather-related cause of mortality globally. Wet-bulb temperature approaching human physiological limits (35 °C) has already been recorded briefly in the Persian Gulf and parts of South Asia; climate models project these conditions will be seasonal in densely populated tropical regions at 2–3 °C of warming. Vector-borne diseases are expanding their range poleward as tick and mosquito habitats shift with temperature and precipitation. Ground-level ozone formation increases with temperature, worsening air quality. **Compound events** — simultaneous heat, drought, wildfire, and grid stress — overwhelm emergency systems and cascade into cascading social crises. The equity dimension is stark: at +2 °C, mortality risk from climate change is projected to be ~10× higher in low-income countries than high-income countries, despite low-income nations having contributed a tiny fraction of cumulative emissions.`,
      cards: [
        {
          name: 'Ecosystem Disruption and Biodiversity',
          icon: Globe,
          color: BRAND.coral,
          desc: '47 % of terrestrial species ranges already shifted measurably. Phenological mismatch: differential warming responses decoupling interacting species. Coral bleaching: 70–90 % of reefs annually bleached at +1.5 °C; >99 % at +2 °C; 500 million people depend on reefs. Amazon tipping point: +3–4 °C regional → drought + fire feedback → savannisation. Ocean deoxygenation: warming reduces dissolved O₂; expanding OMZs; declining fisheries. Boreal forest migrating northward, releasing soil carbon and reducing albedo. Species extinction rate 100–1,000× background rate attributable to climate + land-use combined.',
          examples: 'European pied flycatcher: 90 % population decline in some Dutch populations due to caterpillar mismatch · Great Barrier Reef: 5 mass bleaching events 2016–2022; >50 % coral cover lost · Mountain pine beetle: range expanded 1,000 km north/east; killed billions of trees in western North America · Monarch butterfly: 80 % population decline since 1990s; multiple climate-related stressors',
        },
        {
          name: 'Food, Water, and Agricultural Security',
          icon: Thermometer,
          color: BRAND.gold,
          desc: 'Crop yield losses per 1 °C: wheat −6 %, maize −7 %, rice −3 %, soy −3 %; heat stress at flowering especially damaging. Tropical regions most vulnerable: near thermal limit already + least adaptive capacity. Glacier melt and freshwater: 800 million people in HKH region depend on meltwater; peak water passed or imminent in many catchments. Snowmelt shift: slow spring release → rapid winter rain-on-snow; more floods + less summer baseflow. 216 million internal climate migrants projected by 2050 (World Bank). Ocean fisheries: 60 % could be sustainably exploited under high emissions — shifting distributions, declining total productivity.',
          examples: '2022 Pakistan floods: 33 million displaced; accelerated glacier melt + monsoon intensification; $30B damage · Mekong River Delta: saltwater intrusion threatening rice production for 20 million people · Californian Central Valley: groundwater depletion as snowpack declines — "stranded" agriculture · Sahel: 30-year drought trend; contributed to political instability, migration, and conflict',
        },
        {
          name: 'Human Health, Compound Events, and Climate Justice',
          icon: Wind,
          color: BRAND.amethyst,
          desc: 'Heat mortality: 2003 European heat wave: ~70,000 excess deaths; 2021 Pacific NW: ~1,400 excess deaths; virtually impossible without climate change (attribution). Wet-bulb limit 35 °C: physiologically unsurvivable; already briefly recorded in Persian Gulf; seasonal in densely populated tropics by 2050 at +2 °C. Disease vectors expanding: dengue, malaria, Lyme disease; Aedes aegypti range 1 °C north per decade. Compound events: 2× increase in compound hot-dry events since 1950. Climate mortality inequality: 10× higher risk in low-income vs. high-income nations at +2 °C. Loss and Damage Fund: COP27 (2022) — addressing irreversible harms exceeding adaptation capacity.',
          examples: '2021 Pacific NW heat dome: Portland reached 46 °C; 9/10 attribution; hundreds of communities had no cooling infrastructure · India/Pakistan heat wave May 2022: wet-bulb >30 °C across densely populated areas; Jacobabad reached 51 °C dry-bulb · Bangladesh flooding: 40 % of country submerged annually; >20 million flood-exposed; contributes <0.3 % global emissions · Small island states: Kiribati, Tuvalu, Marshall Islands — existential threat from sea level rise despite near-zero emissions',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Cascading climate impacts: from warming to compound risks',
      body: `Climate impacts do not act in isolation — they form interconnected chains in which one disruption triggers others, compounding the harm beyond what any single hazard would produce. This flow diagram traces the pathways from global warming through ecosystem disruption, food and freshwater insecurity, and extreme heat to the compound events that disproportionately harm the world's most vulnerable populations. Explore each node to see the mechanism and magnitude of each link.`,
      interaction: {
        type: 'flow-simulator',
        description: 'Cascade of climate impacts from global warming to compound risks and climate injustice',
        nodes: [
          {
            id: 'warming',
            label: 'Global Warming',
            description: 'Currently +1.2 °C above pre-industrial; projected +1.5–4 °C by 2100 depending on emissions pathway. Even at current levels, impacts are observed on every inhabited continent. Each additional fraction of a degree narrows options for adaptation.',
            color: BRAND.ruby,
          },
          {
            id: 'ecosystem',
            label: 'Ecosystem Disruption',
            description: '47 % of species ranges already shifted. Coral reefs bleach annually at +1.5 °C (70–90 %) and >99 % at +2 °C. Amazon savannisation risk at +3–4 °C regional warming. Ocean deoxygenation expanding oxygen minimum zones.',
            color: BRAND.coral,
          },
          {
            id: 'food',
            label: 'Food Security',
            description: 'Crop yields decline ~6 % (wheat), ~7 % (maize) per 1 °C of warming. Fisheries shift poleward and decline in total productivity. 216 million internal climate migrants projected by 2050 as agriculture becomes untenable in some regions.',
            color: BRAND.gold,
          },
          {
            id: 'water',
            label: 'Freshwater Supply',
            description: '800 million people in the Hindu Kush–Himalaya depend on glacier meltwater. Many catchments have passed "peak water." Snowmelt shift from slow spring release to rapid winter events increases floods and reduces summer flow.',
            color: BRAND.accent,
          },
          {
            id: 'health',
            label: 'Human Health',
            description: 'Wet-bulb temperature of 35 °C is the physiological survival limit — already briefly recorded in the Persian Gulf and South Asia. Dengue, malaria, and Lyme disease ranges expanding poleward. 2003 European heat wave killed ~70,000.',
            color: BRAND.amethyst,
          },
          {
            id: 'compound',
            label: 'Compound Events',
            description: 'Simultaneous heat + drought + wildfire + grid stress overwhelm emergency response. Compound hot-dry events have doubled in frequency since 1950. 2021 Pacific NW heat dome and 2022 Pakistan floods are recent case studies.',
            color: BRAND.jade,
          },
          {
            id: 'equity',
            label: 'Climate Injustice',
            description: 'Mortality risk from climate change is ~10× higher in low-income vs. high-income nations at +2 °C. Small island states and Sub-Saharan Africa face existential risk while contributing <1 % of historical emissions. COP27 established a Loss and Damage Fund to address irreversible harms.',
            color: BRAND.textDim,
          },
        ],
        edges: [
          { from: 'warming',   to: 'ecosystem', label: 'SST anomalies, drought, fire' },
          { from: 'warming',   to: 'food',      label: 'heat stress at crop flowering' },
          { from: 'warming',   to: 'water',     label: 'glacier retreat, snowpack loss' },
          { from: 'warming',   to: 'health',    label: 'extreme heat, vector range shift' },
          { from: 'ecosystem', to: 'food',      label: 'pollinator loss, fishery decline' },
          { from: 'water',     to: 'food',      label: 'irrigation failure, salinity intrusion' },
          { from: 'food',      to: 'compound',  label: 'co-occurring with heat and flood' },
          { from: 'health',    to: 'compound',  label: 'cascading infrastructure failure' },
          { from: 'water',     to: 'compound',  label: 'rain-on-snow + heatwave co-occurrence' },
          { from: 'compound',  to: 'equity',    label: 'overwhelms low-income coping capacity' },
          { from: 'food',      to: 'equity',    label: 'subsistence farmers most exposed' },
          { from: 'water',     to: 'equity',    label: 'glacier-dependent populations at risk' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: '70–90 % of coral reefs face annual bleaching at 1.5 °C of global warming, and >99 % at 2 °C. What does this imply about the 0.5 °C difference between these targets?',
          a: [
            'The 0.5 °C difference represents the gap between severely degraded and functionally collapsed reef ecosystems globally — each fraction of a degree matters for vulnerable systems',
            'The difference is marginal for reefs since most are already lost; the framing mainly matters for other ecosystems',
            'The 1.5 °C target should be abandoned since most reefs are already beyond recovery',
            'The difference is irrelevant because coral bleaching is driven primarily by ocean acidification, not temperature',
          ],
          correct: 0,
          explain: 'The 0.5 °C difference between the 1.5 and 2 °C targets is widely called the most consequential half-degree in climate policy — for coral reefs specifically, it represents the gap between a degraded but partially functional global reef system and a functionally collapsed one. Option B incorrectly suggests the framing matters primarily for other ecosystems; coral reefs are among the most temperature-sensitive large ecosystems on Earth, and the specific 70–90 % vs. >99 % projection makes this the single clearest case where the 0.5 °C distinction has quantitative bite. Option C misreads the current status — many reefs are stressed but not permanently lost, and limiting warming preserves the possibility of recovery and reef-dependent livelihoods for ~500 million people; this framing also contradicts the scientific and policy consensus. Option D confuses two distinct stressors: ocean acidification (from CO₂ dissolving into seawater) is a major long-term threat to reef calcification, but mass bleaching events are directly caused by sea-surface temperature anomalies of just +1 °C above seasonal maxima for several weeks; attribution science confirms that recent bleaching events at the Great Barrier Reef in 2016, 2017, 2020, and 2022 would have been virtually impossible without climate change. Each fraction of a degree genuinely matters because corals in most tropical oceans are already near their thermal tolerance limits, meaning even small additional warming tips them over the edge.',
        },
        {
          q: 'Compound climate events are considered more dangerous than summed individual hazard risks. What is the primary reason?',
          a: [
            'Compound events overwhelm coping capacity and critical infrastructure simultaneously, and their joint probability is often underestimated when hazards are analysed independently',
            'Individual hazards are now fully managed by early warning systems, so only compound events remain dangerous',
            'Compound events always occur in regions that lack any adaptive infrastructure',
            'Climate models cannot simulate individual hazards, so only compound scenarios provide useful projections',
          ],
          correct: 0,
          explain: 'Compound events are more dangerous because each constituent hazard amplifies the others — heat wave + drought increases wildfire risk, wildfire smoke degrades air quality and increases heat-related mortality, and simultaneous grid stress removes the cooling that would otherwise save lives; emergency medical systems, firefighting, and supply chains are all strained at once in ways that single-hazard preparedness cannot anticipate. Option B is empirically false: even well-prepared, high-income regions have been overwhelmed by single hazards reframed as compound events — the 2021 Pacific Northwest heat dome (a region with robust emergency services but little air conditioning infrastructure) killed approximately 1,400 people in a week, and western Europe\'s 2003 heat wave killed ~70,000 despite a functional public health system. Option C incorrectly restricts compound event risk to underdeveloped regions; California — with extensive emergency infrastructure — experienced simultaneous megadrought, record-breaking wildfire seasons, and heat domes in 2020–2021 that strained the state\'s grid and firefighting capacity beyond design limits. Option D is factually wrong: climate models routinely produce reliable projections of individual hazard changes (heat wave frequency, precipitation extremes, drought metrics); the specific challenge is in jointly modelling the conditional probabilities of co-occurring hazards, but this does not mean individual hazard projections are absent. Global research documents a 2× increase in compound hot-dry events since 1950, with the rate of increase accelerating as global mean temperature rises.',
        },
        {
          q: 'Climate impacts are described as inequitable — disproportionately harming populations that have contributed least to historical emissions. What is the primary structural reason for this inequity?',
          a: [
            'Low-income tropical and subtropical nations are geographically more exposed to heat, drought, and flooding, have less financial and institutional capacity to adapt, and have emitted far less CO₂ historically',
            'International climate agreements have legally excluded low-income nations from receiving adaptation funds',
            'Tropical regions are warming faster than temperate regions, so the physical forcing is fundamentally higher',
            'Low-income countries rely on subsistence agriculture that is inherently more vulnerable regardless of climate',
          ],
          correct: 0,
          explain: 'Climate injustice arises from the convergence of three independent factors: geographic exposure (tropical and subtropical locations experience greater warming impacts per degree of global mean temperature change, more intense precipitation extremes, and greater dependence on climate-sensitive sectors like rainfed agriculture and coastal fisheries), adaptive capacity (low-income nations lack the financial reserves, insurance systems, infrastructure redundancy, and institutional capacity to absorb climate shocks), and historical responsibility (those nations bearing the greatest burden contributed a tiny fraction of cumulative emissions). Option B directly contradicts the international policy landscape: climate finance mechanisms — including the Adaptation Fund, the Green Climate Fund, the $100 billion/yr pledge under the Paris Agreement, and the Loss and Damage Fund established at COP27 (2022) — are explicitly designed to direct resources to low-income vulnerable nations; the critique is that delivery has been inadequate, not that exclusion is legally mandated. Option C has a kernel of truth (some tropical ocean regions are warming faster than the global mean) but overstates the physical component; the primary injustice driver is adaptive capacity, not that physical forcing alone is larger — a wealthy Gulf state and a low-income delta farming community face very different outcomes even if local warming is identical. Option D notes a real vulnerability (rainfed subsistence agriculture is climate-sensitive) but captures only one dimension; climate vulnerability is multidimensional, spanning urban heat mortality, coastal flooding from sea level rise, water security, disease vectors, and conflict driven by resource scarcity. At +2 °C, mortality risk from climate change is projected to be ~10× higher in low-income than high-income countries despite the latter being responsible for the vast majority of cumulative emissions.',
        },
        {
          q: 'A wet-bulb temperature of 35 °C is described as the upper physiological limit for human survival, even at rest and in the shade. What physical mechanism makes this threshold so dangerous, and why is it particularly significant for densely populated tropical regions?',
          a: [
            'At Tw = 35 °C, the human body can no longer cool itself through radiation or conduction because air and surface temperatures exceed body temperature; the limit reflects the point at which all sensible heat transfer pathways are blocked simultaneously',
            'At Tw = 35 °C, the vapour pressure of the air equals the vapour pressure at the skin surface, making evaporative cooling thermodynamically impossible; the body can no longer dissipate metabolic heat through sweating regardless of sweat rate, causing fatal hyperthermia within hours even at rest',
            'The 35 °C wet-bulb limit applies specifically to the elderly and immunocompromised; healthy adults can physiologically tolerate wet-bulb temperatures up to ~40 °C because cardiovascular conditioning allows more efficient sweat-based cooling at high humidity',
            'At Tw = 35 °C, the partial pressure of oxygen drops below physiological minima as water vapour crowds out O₂ molecules; the 35 °C limit is primarily a respiratory threshold rather than a thermoregulatory one',
          ],
          correct: 1,
          explain: 'The wet-bulb temperature limit is a hard thermodynamic constraint, not a soft physiological one. The human body maintains a core temperature of ~37 °C and generates metabolic heat (~80 W at rest, several hundred watts during exertion) that must be continuously rejected to the environment. Below Tw ~35 °C, the vapour pressure at the moist skin surface exceeds the ambient vapour pressure, so sweat evaporates and carries latent heat (2.4 MJ per litre) away from the body. At Tw = 35 °C, these vapour pressures equalise — the air is already holding as much water vapour as the skin surface can produce, so no net evaporation occurs regardless of how hard the body sweats. Metabolic heat accumulates and core temperature rises at approximately 1–2 °C per hour, leading to heat stroke and organ failure. Option A incorrectly identifies radiation and conduction as the blocked pathways; at ambient temperatures above ~37 °C, radiation and conduction do add heat to the body rather than removing it, but this is a separate effect from the wet-bulb limit — the 35 °C threshold specifically describes the evaporative cooling breakdown. Option C is incorrect: the physiological limit applies to all healthy adults; the critical constraint is thermodynamic (vapour pressure equilibrium), not cardiovascular, so no degree of fitness bypasses it. Option D misunderstands atmospheric composition: humid air at 100 % relative humidity at sea level contains essentially the same 21 % oxygen mole fraction as dry air; the danger is thermal, not respiratory. For densely populated tropical regions — South Asia, West Africa, the Persian Gulf, the Mekong Delta — Tw ≥ 31–35 °C events that are currently rare could become seasonally recurring under +2–3 °C of global warming, affecting over a billion people with limited access to air conditioning.',
        },
        {
          q: 'The European pied flycatcher has experienced up to 90 % population decline in some Dutch populations. This has been linked to phenological mismatch driven by climate change. What does this case reveal about why phenological mismatch is structurally difficult for affected species to correct through natural selection?',
          a: [
            'Phenological mismatch is primarily driven by habitat fragmentation, not climate change; the flycatcher decline in the Netherlands reflects agricultural intensification and forest loss rather than temperature-driven timing differences between species',
            'Migratory species that use photoperiod (day length) as their migration trigger face a structural constraint: day length does not change with climate warming, while the food sources they depend on respond to local temperature; natural selection can shift migration timing but cannot fully decouple it from photoperiod, so the mismatch tends to persist even under strong selection pressure',
            'The flycatcher decline is temporary — natural selection will produce evolutionary rescue within 3–5 generations because fitness penalties for arriving late are intense, and sufficient genetic variation for earlier arrival exists in the population',
            'Phenological mismatch is only a concern for specialist feeders; generalist species like most migratory birds can switch food sources when their primary prey is no longer available at peak abundance, so population-level impacts are negligible',
          ],
          correct: 1,
          explain: 'The Dutch pied flycatcher study (Both et al., 2006) is a landmark case in climate change ecology because it quantified the mismatch mechanism precisely: populations in forest patches where caterpillar emergence had advanced the most (tracking warming temperatures) showed the steepest flycatcher declines, while populations where caterpillar timing had changed less showed smaller declines; this spatial structure directly implicates phenological mismatch rather than a confounding variable like habitat loss. Option A misidentifies the causal agent — while habitat fragmentation is a genuine and independent driver of bird population declines broadly, the Both et al. study's spatial correlation between degree of caterpillar timing advance and degree of flycatcher decline at matched forest patches specifically implicates phenological mismatch as the proximate mechanism. Option C overstates the likelihood of evolutionary rescue: pied flycatchers do show some heritable variation in migration timing, and populations have advanced arrival slightly in recent decades, but the rate of evolutionary change (~1–2 days per decade) is far slower than the rate of caterpillar advancement in the warmest years (~10+ days per decade); moreover, the photoperiod constraint limits how much earlier arrival can evolve without leaving birds vulnerable to late cold snaps and broader food scarcity on arrival. Option D incorrectly characterises flycatchers as ecological generalists capable of food switching; pied flycatchers are highly specialised for the caterpillar peak, which provides the high-calorie surplus needed to fuel breeding; they cannot easily substitute other food sources at the required rate. The broader lesson is systemic: phenological mismatch is a structural vulnerability for any migratory species that synchronises movement to a fixed calendar cue (photoperiod, magnetic field, endogenous clock) while relying on a food source that tracks a different cue (temperature); this mismatch is expected to worsen with continued warming across hundreds of species pairs globally.',
        },
      ],
    },
  ],
}

export default lesson
