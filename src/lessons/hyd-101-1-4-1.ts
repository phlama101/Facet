import { Droplets, Globe, TrendingDown, AlertTriangle, Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const globalFreshwaterScarcity: Lesson = {
  id: 'hyd-101-1-4-1',
  title: 'Global Freshwater Scarcity and the Water Cycle\'s Future',
  track: 'geo',
  trackName: 'Hydrology',
  level: 'Beginner',
  duration: '14 min',
  xpReward: 150,
  description: 'Only 2.5% of Earth\'s water is fresh, and just 0.3% of all water is accessible surface water — yet growing populations, agricultural demand, and shifting precipitation patterns are pushing this sliver of supply toward the edge. This lesson examines who faces water stress today, what drives it, and how the water cycle itself is changing under a warming climate.',
  sources: [
    { org: 'WRI',  title: 'WRI Aqueduct Water Risk Atlas',                                               url: 'https://www.wri.org/aqueduct' },
    { org: 'USGS', title: 'USGS — Where Is Earth\'s Water?',                                            url: 'https://www.usgs.gov/special-topics/water-science-school/science/where-earths-water' },
    { org: 'NASA', title: 'NASA GRACE-FO — Groundwater and Drought Monitoring',                         url: 'https://grace.jpl.nasa.gov/applications/groundwater/' },
    { org: 'UN',   title: 'UN-Water — World Water Development Report 2023',                             url: 'https://www.unwater.org/publications/un-world-water-development-report-2023' },
    { org: 'IPCC', title: 'IPCC AR6 — Water Chapter (Chapter 4, WG II)',                               url: 'https://www.ipcc.ch/report/ar6/wg2/chapter/chapter-4/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'A planet of water, a crisis of freshwater',
      body: `Water covers 71% of Earth's surface, yet the vast majority is saline ocean water. Of all Earth's water, only **2.5% is fresh**, and nearly 70% of that is locked in glaciers and ice caps. Groundwater holds most of the remainder. Surface water — rivers, lakes, and swamps — constitutes just **0.3% of all water on Earth**, the thin accessible fraction that civilisations have relied upon for agriculture and drinking. Global freshwater withdrawals have more than tripled since 1950, reaching ~4,600 km³/year, and demand continues to rise with population and per-capita consumption. Agriculture accounts for ~70% of all freshwater withdrawals globally; industry takes ~20% and municipalities ~10%.

**Water stress** occurs when annual freshwater withdrawals exceed 40% of available renewable supply. The World Resources Institute's **Aqueduct** platform maps water risk at sub-watershed scale globally. As of 2023, approximately 4 billion people — more than half of humanity — experience severe water scarcity for at least one month per year. Twenty-five countries, home to one quarter of the world's population, face extremely high water stress every year, drawing down more than 80% of their renewable supply annually. The Middle East, North Africa, South Asia, and the southwestern United States are among the most stressed regions.

The concept of **virtual water** (also called embedded or hidden water) helps explain why water stress is a global problem even for water-rich nations. Virtual water is the water consumed in producing a traded good: 1 kg of wheat requires ~1,800 litres; 1 kg of beef ~15,000 litres. When a water-scarce country imports food rather than growing it locally, it effectively imports the water that would have been needed for domestic production. Global food trade transfers ~2,300 km³ of virtual water annually — more than the annual flow of the Amazon River. Nations such as Jordan and Egypt survive their severe water deficits partly through massive food imports, exporting their water stress to exporting nations' aquifers.

The **Aral Sea collapse** is history's starkest example of freshwater mismanagement at scale. Once the world's fourth-largest lake at 68,000 km², Soviet irrigation diversions of the Amu Darya and Syr Darya rivers beginning in the 1960s shrank the Aral Sea to less than 10% of its original volume by 2007. The exposed seabed became a salt and pesticide desert; fishing communities were destroyed; regional climate became more extreme. **Cape Town's Day Zero** crisis of 2018 illustrated how rapidly a modern city can approach the point of tap shutoff: after three consecutive drought years, reservoir levels in the Western Cape fell below 14% total capacity and daily per-capita limits were cut to 50 litres. Day Zero — the date taps would be turned off — was averted only by emergency demand reduction, cloud-seeding, and above-average rains in 2018. Climate projections suggest such droughts will become more frequent in Mediterranean-climate regions.

NASA's **GRACE and GRACE-FO satellites** (2002–present) measure tiny changes in Earth's gravitational field caused by shifting masses of water. By tracking monthly gravity anomalies, GRACE revealed that major aquifer systems — the Ogallala, Central Valley, Arabian, Ganges–Brahmaputra, and Northern China aquifers — are losing groundwater at rates far exceeding recharge. Between 2002 and 2016, GRACE detected a loss of ~280 km³/year of groundwater globally, equivalent to more than four times the annual flow of the Colorado River. Climate change is amplifying freshwater scarcity by intensifying the water cycle: evaporation increases in warmer temperatures, **wet regions become wetter and dry regions drier**, and precipitation is increasingly delivered in concentrated extreme events rather than gentle sustained rains that can infiltrate.`,
      keyTerms: [
        {
          term: 'Water Stress',
          def: 'Condition where annual freshwater withdrawals exceed 40% of renewable supply. Extremely high stress is defined as >80%. Affects ~4 billion people for at least one month per year.',
        },
        {
          term: 'Virtual Water',
          def: 'The volume of freshwater consumed in producing a traded good or service. 1 kg of beef requires ~15,000 litres. Global food trade transfers ~2,300 km³ of virtual water annually.',
        },
        {
          term: 'WRI Aqueduct',
          def: 'World Resources Institute platform mapping water risk indicators — including water stress, seasonal variability, and drought risk — at sub-watershed scale for every river basin on Earth.',
        },
        {
          term: 'GRACE Satellites',
          def: 'NASA twin satellites (2002–present) that detect groundwater depletion by measuring minute changes in Earth\'s gravity field caused by shifting water mass. Revealed global groundwater loss of ~280 km³/year.',
        },
        {
          term: 'Day Zero',
          def: 'Term coined during Cape Town\'s 2018 drought crisis: the projected date when municipal water supply would be shut off and residents would queue at distribution points. Averted through emergency demand reduction.',
        },
        {
          term: 'Aral Sea Collapse',
          def: 'Catastrophic shrinkage of Central Asia\'s Aral Sea from 68,000 km² (1960) to <10% of original volume by 2007, caused by Soviet irrigation diversions; a defining example of large-scale hydrological mismanagement.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Drivers of Freshwater Scarcity',
      body: `Freshwater scarcity has both physical and economic dimensions. **Physical scarcity** occurs when natural water supplies are genuinely insufficient for demand — common in hyperarid regions. **Economic scarcity** occurs where water exists but infrastructure, governance, or finance to access it is absent — affecting much of sub-Saharan Africa. Understanding the drivers clarifies why technical solutions alone are insufficient.`,
      cards: [
        {
          name: 'Agricultural Demand',
          icon: Droplets,
          color: BRAND.accent,
          desc: 'Agriculture consumes ~70% of all global freshwater withdrawals, mostly for irrigation. Irrigated land covers only 20% of cultivated area but produces 40% of global food supply.',
          examples: 'India withdraws ~761 km³/year for agriculture — more than any other nation. Pakistan\'s Indus basin irrigation network is the world\'s largest contiguous system, covering ~14 million ha.',
        },
        {
          name: 'Population & Urbanisation',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Global population reached 8 billion in 2022 and is projected to reach ~9.7 billion by 2050. Urbanisation concentrates demand in large cities, straining local surface and groundwater supplies.',
          examples: 'Karachi, Pakistan (22M people) relies largely on a single canal from the Indus River. Chennai, India experienced near-total reservoir failure in 2019, leaving 10 million people without piped water for weeks.',
        },
        {
          name: 'Groundwater Depletion',
          icon: TrendingDown,
          color: BRAND.coral,
          desc: 'Overpumping fossil aquifers mines water accumulated over millennia. GRACE satellites detected loss of ~280 km³/year of groundwater globally 2002–2016, largely irreplaceable on human timescales.',
          examples: 'Saudi Arabia depleted the majority of its non-renewable fossil aquifer reserves irrigating wheat in the 1980s–2000s. Libya\'s Great Man-Made River pumps Saharan fossil water formed 10,000–38,000 years ago.',
        },
        {
          name: 'Climate Shift',
          icon: AlertTriangle,
          color: BRAND.gold,
          desc: 'Warming increases evapotranspiration demand and intensifies the water cycle. Wet regions get wetter; dry regions drier. Snowpack — a natural reservoir — declines at lower elevations.',
          examples: 'Colorado River headwaters snowpack declined ~20% 1955–2021. Western US megadrought 2000–2022 was the driest 22-year period in 1,200 years, partly attributable to human-caused warming.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Responses and Trade-offs',
      body: `Addressing freshwater scarcity involves supply-side augmentation (desalination, water transfer, aquifer recharge) and demand-side efficiency, as well as governance reforms and nature-based solutions. Each approach carries trade-offs of cost, energy, environmental impact, and equity.`,
      cards: [
        {
          name: 'Desalination',
          icon: Activity,
          color: BRAND.amethyst,
          desc: 'Removes salt from seawater or brackish water using reverse osmosis or thermal processes. Global capacity: ~100 million m³/day. Energy-intensive: 3–10 kWh per m³ for seawater RO.',
          examples: 'Saudi Arabia and UAE together account for ~20% of global desalination capacity. Israel meets >60% of municipal drinking water demand through desalination and water recycling.',
        },
        {
          name: 'Irrigation Efficiency',
          icon: Droplets,
          color: BRAND.jade,
          desc: 'Drip irrigation applies water directly to root zones, reducing consumption by 30–50% vs. flood irrigation. Precision agriculture using soil sensors and satellite data further optimises timing and application.',
          examples: 'Israel pioneered drip irrigation in the 1960s; now irrigates with ~90% drip/micro systems. India\'s PM-KUSUM scheme targets expanding drip and sprinkler systems to 10 million ha.',
        },
        {
          name: 'Water Recycling',
          icon: Globe,
          color: BRAND.accent,
          desc: 'Treated wastewater reused for agriculture, industry, or (via aquifer recharge) drinking water. Singapore\'s NEWater recycles >40% of wastewater to near-ultrapure quality for industrial and indirect potable use.',
          examples: 'Orange County, California produces 130 million gallons/day of purified recycled water for aquifer injection. Windhoek, Namibia has used direct potable reuse since 1968 — the world\'s longest-running scheme.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'The Freshwater Scarcity System',
      body: 'How physical water availability, demand drivers, and governance failures interact to produce water stress — and how responses can interrupt the cycle.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how physical water availability combines with demand pressures and governance failures to produce water stress, and how supply augmentation and demand management can interrupt the cycle',
        nodes: [
          {
            id: 'physical-supply',
            label: 'Physical Water Supply',
            description: 'Renewable supply set by precipitation minus evapotranspiration. Globally ~40,000 km³/yr, but distributed unevenly. ~60% occurs as flood pulses too rapid to capture.',
            color: BRAND.accent,
          },
          {
            id: 'demand-pressure',
            label: 'Demand Pressure',
            description: 'Agriculture (70%), industry (20%), municipalities (10%). Growing population + dietary shifts toward meat + industrialisation steadily increases demand globally.',
            color: BRAND.gold,
          },
          {
            id: 'climate-change',
            label: 'Climate Change',
            description: 'Warming intensifies evaporation; shifts precipitation timing and geography. Snowpack declines at lower elevations; glaciers retreat. Wet/dry extremes amplified.',
            color: BRAND.coral,
          },
          {
            id: 'water-stress',
            label: 'Water Stress',
            description: 'Withdrawals >40% of renewable supply. WRI Aqueduct: 25 countries face extremely high stress (>80%). 4B people experience severe scarcity ≥1 month/yr.',
            color: BRAND.ruby,
          },
          {
            id: 'consequences',
            label: 'Consequences',
            description: 'Food insecurity, groundwater depletion, conflict over transboundary rivers, ecosystem damage, forced migration. Cape Town 2018 and Aral Sea collapse are canonical case studies.',
            color: BRAND.amethyst,
          },
          {
            id: 'responses',
            label: 'Responses & Solutions',
            description: 'Demand reduction (drip irrigation, recycling), supply augmentation (desalination, aquifer recharge), governance reform (water pricing, transboundary treaties), and nature-based solutions.',
            color: BRAND.jade,
          },
        ],
        edges: [
          { from: 'physical-supply',  to: 'water-stress',   label: 'Supply sets the ceiling' },
          { from: 'demand-pressure',  to: 'water-stress',   label: 'Demand exceeds supply' },
          { from: 'climate-change',   to: 'physical-supply', label: 'Reduces and shifts availability' },
          { from: 'climate-change',   to: 'demand-pressure', label: 'Higher temperatures increase crop water needs' },
          { from: 'water-stress',     to: 'consequences',   label: 'Supply failure cascade' },
          { from: 'responses',        to: 'demand-pressure', label: 'Efficiency reduces demand' },
          { from: 'responses',        to: 'physical-supply', label: 'Augmentation increases effective supply' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What percentage of all Earth\'s water is accessible surface freshwater (rivers, lakes, swamps)?',
          a: [
            'About 2.5% — the total fraction of Earth\'s water that is fresh',
            'About 0.3% — the thin sliver of fresh surface water accessible in rivers, lakes, and swamps',
            'About 30% — roughly the amount stored in groundwater aquifers',
            'About 10% — the proportion that falls as precipitation each year',
          ],
          correct: 1,
          explain: 'A is wrong because 2.5% is the total fresh water fraction, which includes ice caps, glaciers, and groundwater as well as surface water. B is correct: surface freshwater — rivers, lakes, swamps, and soil moisture — constitutes only about 0.3% of all water on Earth. The vast majority of fresh water (roughly 69%) is locked in glaciers and polar ice; another ~30% is groundwater. C is wrong because groundwater holds about 30% of fresh water, not all water; as a fraction of total Earth water it is roughly 0.76%. D is wrong because annual precipitation recycles the same water stock rather than adding a new 10% to total reserves each year.',
        },
        {
          q: 'What is "virtual water" and why is it relevant to global water scarcity?',
          a: [
            'Virtual water is the water stored in digital models of river basins, used by hydrologists to predict future scarcity without monitoring real rivers',
            'Virtual water is the water embedded in traded goods — such as the ~15,000 litres to produce 1 kg of beef — meaning food imports effectively transfer water consumption between countries',
            'Virtual water refers to desalinated seawater that is treated to potable quality but not yet consumed, held in reserve in urban distribution systems',
            'Virtual water is water vapour in the atmosphere that has not yet precipitated; it represents potential future freshwater supply tracked by GRACE satellites',
          ],
          correct: 1,
          explain: 'A is wrong; virtual water has nothing to do with computer models. B is correct: the concept of virtual water (introduced by John Allan in the 1990s) refers to the volume of freshwater consumed in producing goods and services. When water-scarce countries import water-intensive products like grain or meat, they avoid using their own scarce domestic water — effectively importing the water that production would have required. This matters globally because ~2,300 km³ of virtual water is traded annually via food, helping water-stressed nations survive deficits they could not otherwise bridge. C and D are incorrect; these describe physical, not virtual, water resources.',
        },
        {
          q: 'How did NASA\'s GRACE satellites detect groundwater depletion, and what did they find globally?',
          a: [
            'GRACE used radar to image aquifer surfaces directly, finding that most major aquifers had declined by 50% since 2002',
            'GRACE measured tiny changes in Earth\'s gravitational field caused by shifting masses of water; between 2002 and 2016 it detected global groundwater loss of ~280 km³/year',
            'GRACE tracked chlorophyll signals from irrigated crops, allowing scientists to infer groundwater use by measuring agricultural greenness from space',
            'GRACE used multispectral imaging to map the colour of rivers and lakes, inferring that freshwater bodies had shrunk by 15% since 2000',
          ],
          correct: 1,
          explain: 'A is wrong: GRACE cannot image aquifer surfaces directly; radar cannot see through rock to measure water table depth at basin scale. B is correct: the GRACE twin satellites, launched in 2002, measured microscopic month-to-month changes in Earth\'s gravitational field. Because water mass is measurable through gravity, redistributions of groundwater cause detectable gravity anomalies. By comparing monthly gravity maps, scientists found that major aquifer systems — including the Ogallala, Central Valley, Arabian Peninsula, Ganges–Brahmaputra, and North China Plain aquifers — are losing groundwater far faster than they are being recharged, totalling roughly 280 km³/year globally. C and D describe unrelated remote sensing methods (NDVI for vegetation, optical for surface water) and are wrong.',
        },
        {
          q: 'Cape Town\'s 2018 "Day Zero" crisis illustrated which key vulnerability of urban water systems?',
          a: [
            'That desalination plants can fail simultaneously during heatwaves, cutting off the only source of freshwater for coastal cities',
            'That cities highly dependent on surface reservoir storage from rain-fed catchments are acutely vulnerable to multi-year droughts, particularly as climate change increases drought frequency in Mediterranean-climate regions',
            'That aging pipe infrastructure leaks so much water that cities can experience scarcity even during normal rainfall years',
            'That groundwater over-pumping beneath Cape Town caused land subsidence, preventing reservoirs from filling to capacity',
          ],
          correct: 1,
          explain: 'A is wrong: Cape Town\'s crisis was not related to desalination failure; the city had very little desalination capacity at the time, which was part of the problem. B is correct: Cape Town\'s Western Cape system relies almost entirely on six surface reservoirs fed by winter rainfall in the Fynbos mountains. Three consecutive dry winters (2015–17) depleted combined storage from ~100% to below 14% of capacity by early 2018. The city imposed strict per-capita limits (50 L/day) and Day Zero — when taps would be shut off — was projected for April 2018 before rains arrived. IPCC projections indicate Mediterranean-climate regions (California, Chile, SW Australia, SW South Africa, and the Mediterranean basin) face significantly increased drought risk under continued warming, making this crisis a preview of future challenges. C (pipe leakage) and D (subsidence) were not the primary factors.',
        },
        {
          q: 'The WRI Aqueduct tool defines "extremely high water stress" as annual withdrawals exceeding what fraction of available renewable supply?',
          a: [
            'More than 10% of renewable supply — ensuring a buffer remains at all times',
            'More than 40% of renewable supply — the threshold at which meaningful scarcity typically begins',
            'More than 80% of renewable supply — leaving virtually no buffer for dry years or ecosystem needs',
            'More than 100% of renewable supply — meaning the region is mining groundwater or relying on imports',
          ],
          correct: 2,
          explain: 'A is wrong: 10% withdrawal of renewable supply represents low water stress, characteristic of many water-abundant nations. B is wrong: 40% is the WRI threshold for "high" water stress, not "extremely high." C is correct: WRI Aqueduct classifies "extremely high" water stress as annual withdrawals exceeding 80% of available renewable freshwater, leaving less than a 20% buffer for ecosystem minimum flows, dry-year variability, and emergency reserves. Twenty-five countries, home to ~25% of the global population, operate under these conditions every year. D is wrong: withdrawals exceeding 100% would require mining fossil groundwater or receiving massive virtual water imports, and while some regions do this, WRI classifies the >80% band as the highest standard stress category.',
        },
      ],
    },
  ],
}

export default globalFreshwaterScarcity
