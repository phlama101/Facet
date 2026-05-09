import { Thermometer, Globe, Wind } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const lesson: Lesson = {
  id: 'clim-101-1-3-3',
  title: 'Climate Impacts: Ecosystems, Food, Water, and Human Health',
  track: 'cli',
  trackName: 'Climate Science',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 140,
  description: 'How observed and projected warming is reshaping ecosystems, threatening food and water security, and creating compounding risks for human populations — with disproportionate harm falling on those least responsible for emissions.',
  sources: [
    { org: 'IPCC',  title: 'IPCC AR6 WGII — Impacts, Adaptation and Vulnerability (2022)',                          url: 'https://www.ipcc.ch/report/ar6/wg2/' },
    { org: 'NOAA',  title: 'NOAA National Centers for Environmental Information — Billion-Dollar Weather Disasters', url: 'https://www.ncei.noaa.gov/access/billions/' },
    { org: 'NASA',  title: 'NASA Global Climate Change — Effects of Climate Change on Coral Reefs and Oceans',      url: 'https://climate.nasa.gov/effects/' },
    { org: 'OpenStax', title: 'Environmental Science — Climate Change Impacts (CC-BY 4.0)',                         url: 'https://openstax.org/books/environmental-science-ap' },
    { org: 'AGI',   title: 'Glossary of Geology — Extreme Event Attribution, Compound Risk, Climate Justice',       url: 'https://www.americangeosciences.org/' },
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
          color: BRAND.jade,
          desc: '47 % of terrestrial species ranges already shifted measurably. Phenological mismatch: differential warming responses decoupling interacting species. Coral bleaching: 70–90 % of reefs annually bleached at +1.5 °C; >99 % at +2 °C; 500 million people depend on reefs. Amazon tipping point: +3–4 °C regional → drought + fire feedback → savannisation. Ocean deoxygenation: warming reduces dissolved O₂; expanding OMZs; declining fisheries. Boreal forest migrating northward, releasing soil carbon and reducing albedo. Species extinction rate 100–1,000× background rate attributable to climate + land-use combined.',
          examples: 'European pied flycatcher: 90 % population decline in some Dutch populations due to caterpillar mismatch · Great Barrier Reef: 5 mass bleaching events 2016–2022; >50 % coral cover lost · Mountain pine beetle: range expanded 1,000 km north/east; killed billions of trees in western North America · Monarch butterfly: 80 % population decline since 1990s; multiple climate-related stressors',
        },
        {
          name: 'Food, Water, and Agricultural Security',
          icon: Thermometer,
          color: BRAND.jade,
          desc: 'Crop yield losses per 1 °C: wheat −6 %, maize −7 %, rice −3 %, soy −3 %; heat stress at flowering especially damaging. Tropical regions most vulnerable: near thermal limit already + least adaptive capacity. Glacier melt and freshwater: 800 million people in HKH region depend on meltwater; peak water passed or imminent in many catchments. Snowmelt shift: slow spring release → rapid winter rain-on-snow; more floods + less summer baseflow. 216 million internal climate migrants projected by 2050 (World Bank). Ocean fisheries: 60 % could be sustainably exploited under high emissions — shifting distributions, declining total productivity.',
          examples: '2022 Pakistan floods: 33 million displaced; accelerated glacier melt + monsoon intensification; $30B damage · Mekong River Delta: saltwater intrusion threatening rice production for 20 million people · Californian Central Valley: groundwater depletion as snowpack declines — "stranded" agriculture · Sahel: 30-year drought trend; contributed to political instability, migration, and conflict',
        },
        {
          name: 'Human Health, Compound Events, and Climate Justice',
          icon: Wind,
          color: BRAND.jade,
          desc: 'Heat mortality: 2003 European heat wave: ~70,000 excess deaths; 2021 Pacific NW: ~1,400 excess deaths; virtually impossible without climate change (attribution). Wet-bulb limit 35 °C: physiologically unsurvivable; already briefly recorded in Persian Gulf; seasonal in densely populated tropics by 2050 at +2 °C. Disease vectors expanding: dengue, malaria, Lyme disease; Aedes aegypti range 1 °C north per decade. Compound events: 2× increase in compound hot-dry events since 1950. Climate mortality inequality: 10× higher risk in low-income vs. high-income nations at +2 °C. Loss and Damage Fund: COP27 (2022) — addressing irreversible harms exceeding adaptation capacity.',
          examples: '2021 Pacific NW heat dome: Portland reached 46 °C; 9/10 attribution; hundreds of communities had no cooling infrastructure · India/Pakistan heat wave May 2022: wet-bulb >30 °C across densely populated areas; Jacobabad reached 51 °C dry-bulb · Bangladesh flooding: 40 % of country submerged annually; >20 million flood-exposed; contributes <0.3 % global emissions · Small island states: Kiribati, Tuvalu, Marshall Islands — existential threat from sea level rise despite near-zero emissions',
        },
      ],
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
          explain: 'This is one of the most cited reasons the 1.5 vs 2 °C distinction is scientifically meaningful. For coral reefs, 0.5 °C translates to the difference between 70–90 % and >99 % of reefs experiencing annual bleaching — essentially the difference between severely degraded and functionally collapsed ecosystems worldwide.',
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
          explain: 'A heat wave, drought, wildfire, and power-grid stress occurring together strain emergency response, medical systems, food supply, and infrastructure simultaneously. Each hazard interacts with and amplifies the others. Analysing each risk in isolation misses these interaction terms and leads to systematic underestimation of total impact.',
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
          explain: 'Climate injustice arises from the combination of geographic exposure, adaptive capacity, and historical responsibility. High-income nations (large historical emitters) have resources to build sea walls, insulate buildings, diversify agriculture, and deploy cooling. Low-income nations in the tropics bear the brunt of heat, water stress, and extreme events while having emitted a tiny fraction of cumulative GHGs.',
        },
      ],
    },
  ],
}

export default lesson
