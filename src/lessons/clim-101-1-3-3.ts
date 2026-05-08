import { Thermometer, Globe, Wind } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const lesson: Lesson = {
  id: 'clim-101-1-3-3',
  title: 'Climate Impacts: Ecosystems, Food, Water, and Human Health',
  description: 'How observed and projected warming is reshaping ecosystems, threatening food and water security, and creating compounding risks for human populations worldwide.',
  track: 'cli',
  trackName: 'Climate Science',
  xpReward: 140,
  level: 'Beginner',
  type: 'concept',
  icon: Globe,
  color: BRAND.jade,
  cards: [
    {
      title: 'Ecosystem Disruption and Biodiversity',
      body: `Ecosystems are shifting poleward and upslope as species track changing temperature envelopes. The geographic range of 47 % of terrestrial species has already shifted measurably since pre-industrial times. Key impacts:\n\n**Phenological mismatch:** Warming causes earlier spring flowering and insect emergence, but if birds that rely on insects do not adjust their migration timing, food supply and reproduction misalign. This "ecological trap" is documented in European pied flycatchers and North American migratory songbirds.\n\n**Coral bleaching:** Corals expel symbiotic algae (zooxanthellae) when sea-surface temperatures exceed their thermal threshold by ~1 °C for several weeks. Major bleaching events occurred in 1998, 2010, 2016, 2017, and 2020. At +1.5 °C of global warming, 70–90 % of coral reefs are projected to experience annual-frequency bleaching (effectively functional collapse); at +2 °C, >99 % face the same fate.\n\n**Biome shifts and fire:** Higher temperatures, altered precipitation, and longer fire seasons have pushed many ecosystems toward fire-adapted states. Amazon dieback risk increases above +3–4 °C regional warming as drought and fire interact in a positive feedback. Boreal forests are shifting northward, replacing tundra and releasing soil carbon.\n\n**Ocean deoxygenation:** Warmer water holds less dissolved O₂. Oxygen minimum zones (OMZs) are expanding, stressing marine fauna and reducing fishery productivity.`,
      icon: Globe,
      color: BRAND.jade,
    },
    {
      title: 'Food Security, Water Stress, and Cascading Risks',
      body: `**Agriculture:** For every additional 1 °C of warming, global wheat yields are projected to decline ~6 %, maize ~7 %, rice ~3 %, and soybean ~3 % in the absence of adaptation. Heat stress at flowering is particularly damaging; nighttime warming that prevents crop recovery compounds daytime heat impacts. The agricultural systems most at risk are in tropical and subtropical regions, where many crops are already near their thermal tolerance limits and where smallholder subsistence farmers have the least adaptive capacity.\n\n**Cryosphere and freshwater:** Glaciers in the Hindu Kush–Himalaya, Andes, and Alps provide dry-season meltwater to billions of people. "Peak water" — the point at which accelerating glacier retreat produces maximum runoff before declining as ice mass is lost — has been passed or is imminent for many catchments. Regions dependent on snowmelt face shifts from slow spring release to rapid winter rain-on-snow events, increasing flood risk while reducing summer low flows.\n\n**Compound events:** Multiple hazards combining simultaneously or sequentially are disproportionately damaging. A single heat wave is manageable; a heat wave coinciding with drought, crop failure, wildfire smoke, and grid-stress electricity shortages creates systemic risk. Compound flooding (simultaneous coastal storm surge + river flooding) is increasing in frequency. Such cascading risks are often underestimated by analyses that treat hazards individually.\n\n**Climate migration:** By 2050, internal climate migration (within countries) may displace 216 million people in six regions (World Bank estimate), reshaping urban growth patterns and increasing conflict risk in receiving areas.`,
      icon: Thermometer,
      color: BRAND.jade,
    },
    {
      title: 'Human Health and Equity Dimensions',
      body: `**Heat mortality:** Extreme heat is the leading weather-related cause of death globally. The 2003 European heat wave killed ~70,000 people; the 2021 Pacific Northwest heat dome (~1,400 excess deaths) was attributed to be virtually impossible without climate change. Wet-bulb temperatures approaching human physiological limits (35 °C Tw = ~45 °C apparent temperature) are rare today but will affect densely populated tropical and subtropical regions seasonally by mid-century under high-emission scenarios.\n\n**Infectious disease:** Range expansion of disease vectors (Aedes aegypti mosquito, Ixodes ticks) is shifting the geographic distribution of dengue, malaria, Lyme disease, and West Nile virus poleward and to higher elevations. Warming and flooding increase diarrheal disease incidence; drought and heatwaves exacerbate mental health crises and cardiovascular mortality.\n\n**Air quality:** Higher temperatures promote the formation of ground-level ozone (O₃ = NOₓ + VOC + heat) and extend wildfire smoke seasons. By 2050 climate change alone may increase ozone-related premature deaths by tens of thousands per year globally, independent of emission controls.\n\n**Equity and climate justice:** Climate impacts disproportionately fall on low-income nations, Indigenous communities, and marginalised populations that have contributed least to cumulative emissions. Small island developing states (SIDS) and low-lying deltas face existential threats. Mortality risk from climate change is projected to be 10× higher in low-income countries than in high-income countries at +2 °C of warming.`,
      icon: Wind,
      color: BRAND.jade,
    },
  ],
  quiz: [
    {
      question: 'Research shows that 70–90 % of coral reefs face annual bleaching at 1.5 °C of global warming, and >99 % at 2 °C. What does this imply about the 0.5 °C difference between these targets?',
      options: [
        'That the 0.5 °C difference between 1.5 °C and 2 °C targets is not marginal — it represents the difference between severely degraded and functionally collapsed reef ecosystems globally',
        'That coral reefs are more sensitive than most ecosystems and are outliers; the same threshold difference matters little for terrestrial biodiversity',
        'That the 1.5 °C target should be abandoned since most reefs are already lost beyond recovery',
        'That the difference is irrelevant because coral bleaching is driven primarily by ocean acidification, not temperature',
      ],
      correctIndex: 0,
      explain: 'This is one of the most cited reasons the 1.5 °C vs 2 °C distinction is scientifically meaningful. For coral reefs the 0.5 °C translates to the difference between 70–90 % and >99 % of reefs experiencing annual bleaching — essentially functional ecosystem collapse. Each fraction of a degree matters for vulnerable systems.',
    },
    {
      question: 'Compound climate events — simultaneous or sequential combinations of multiple hazards — are considered more dangerous than summed individual hazard risks. What is the primary reason?',
      options: [
        'Compound events overwhelm coping capacity and critical infrastructure simultaneously, and their joint probability is often underestimated when hazards are analysed independently',
        'Individual hazards are now fully managed by early warning systems, so only compound events remain dangerous',
        'Compound events always occur in regions that lack any adaptive infrastructure',
        'Climate models cannot simulate individual hazards, so only compound scenarios provide useful projections',
      ],
      correctIndex: 0,
      explain: 'A heat wave, drought, wildfire, and power-grid stress occurring together strain emergency response, medical systems, food supply, and infrastructure simultaneously. Each hazard interacts with and amplifies the others. Analysing each risk in isolation misses these interaction terms and leads to underestimating total impact.',
    },
    {
      question: 'Climate impacts are described as inequitable — disproportionately harming populations that have contributed least to historical emissions. What is the primary structural reason for this inequity?',
      options: [
        'Low-income tropical and subtropical nations are geographically more exposed to heat, drought, and flooding, have less financial and institutional capacity to adapt, and have emitted far less CO₂ historically than wealthy industrialised nations',
        'International climate agreements have legally excluded low-income nations from receiving adaptation funds',
        'Tropical regions are warming faster than temperate regions, so the physical forcing is fundamentally higher',
        'Low-income countries rely on subsistence agriculture that is inherently more vulnerable regardless of climate',
      ],
      correctIndex: 0,
      explain: 'Climate injustice arises from a combination of geographic exposure, adaptive capacity, and historical responsibility. High-income nations (historically large emitters) have resources to build sea walls, insulate buildings, diversify agriculture, and deploy air conditioning. Low-income nations in the tropics bear the brunt of heat, water stress, and extreme events while having emitted a small fraction of cumulative GHGs.',
    },
  ],
}

export default lesson
