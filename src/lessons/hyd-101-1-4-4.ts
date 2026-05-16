import { Waves, AlertTriangle, TrendingUp, Map, Shield } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const floodsRiskFuture: Lesson = {
  id: 'hyd-101-1-4-4',
  title: 'Floods: Frequency, Risk, and the Future',
  track: 'geo',
  trackName: 'Hydrology',
  level: 'Beginner',
  duration: '14 min',
  xpReward: 150,
  description: `Floods are the world\'s deadliest and costliest natural hazard, yet our understanding of flood risk is often trapped in a probabilistic framework built for a stationary climate. This lesson examines how hydrologists quantify flood probability, why human choices amplify flood damage, and how a warming atmosphere is rewriting the rules of what we thought was a "100-year flood."`,
  sources: [
    { org: 'USGS',   title: 'USGS — Flood Frequency Analysis',                                           url: 'https://water.usgs.gov/osw/bulletin17c/bulletin17C.html' },
    { org: 'NOAA',   title: 'NOAA — National Weather Service Flood Information',                         url: 'https://www.weather.gov/safety/flood' },
    { org: 'UNDRR',  title: 'UNDRR — Global Assessment Report on Disaster Risk Reduction 2022',         url: 'https://www.undrr.org/gar2022-our-world-risk' },
    { org: 'WMO',    title: 'WMO — State of Global Climate 2023',                                        url: 'https://library.wmo.int/records/item/68836-state-of-global-climate-2023' },
    { org: 'Nature', title: 'Blöschl et al. (2019) — Changing climate shifts timing of European floods', url: 'https://www.science.org/doi/10.1126/science.aah3397' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'A 1% chance every year: understanding flood probability in a changing world',
      body: `Floods kill more people and cause more economic damage than almost any other natural hazard. Between 2000 and 2019, floods affected approximately 1.65 billion people globally, more than any other disaster type. Yet flood risk is not simply a product of geography and precipitation: it is deeply shaped by human decisions about where to build, how to manage land and rivers, and how to design infrastructure. As the climate warms, many of the statistical assumptions underlying flood risk management are becoming dangerously outdated.

The concept of **return period** is central to flood risk communication but is widely misunderstood. A **100-year flood** does not mean a flood that occurs once every century; it means a flood with a **1% annual exceedance probability (AEP)** — a flood level that is equalled or exceeded with a probability of 1% in any given year. For a structure expected to last 100 years, the probability that it will experience a 100-year flood at least once during its design life is not 100%; it is actually approximately **63%** (calculated as 1 − (1 − 0.01)^100 ≈ 0.634). A 50-year flood (2% AEP) has a 64% chance of occurring in 50 years. This has profound implications for infrastructure design: facilities sited in "100-year floodplains" face a better-than-even chance of flooding over their typical operational lives.

**Compound flooding** — the simultaneous or sequential occurrence of multiple flood-generating mechanisms — poses threats that exceed what any single mechanism alone would produce. The most dangerous compound events pair **coastal storm surge** (sea level raised by wind-driven onshore flow during tropical cyclones or extratropical storms) with **riverine flooding** (high river discharge after intense rainfall in the catchment). When both arrive together, the storm surge raises the coastal water level, blocking river drainage, while the river simultaneously carries high discharge — a "bathtub effect" where neither the sea can absorb the river nor the river drain to the sea. Hurricane Harvey (2017) produced compound flooding across the Houston metropolitan area: over four days, 60 cm (23.6 in) of rain fell (a world record for a US tropical system), flood peaks on Brays and Addicks Bayous were orders of magnitude above previous records, and the Army Corps of Engineers was forced to make controlled releases from two flood-control reservoirs that inundated thousands of additional homes.

The **Zhengzhou flash flood of July 20, 2021** illustrated the extreme rainfall intensities now being recorded globally. During that event, **201.9 mm (7.95 in) of rain fell in a single hour** at Zhengzhou weather station in China's Henan Province — equivalent to nearly a year of London's average annual rainfall in 60 minutes. The city's metro system flooded, trapping hundreds in underground stations; at least 380 people died. The event was consistent with atmospheric warming: a warmer atmosphere holds more water vapour (~7% more per degree Celsius following the Clausius-Clapeyron equation), intensifying extreme precipitation events even in regions that may experience declining average rainfall.

The **2023 Derna, Libya dam failure** demonstrated how dam failures can catastrophically amplify flood casualties. On 10–11 September 2023, Mediterranean cyclone Daniel produced extreme rainfall over the Green Mountain region of eastern Libya. Two dams on the Wadi Derna — the Mansour and Derna dams, constructed in the 1970s and un-maintained for years — failed in rapid succession. A wall of water estimated at 7 metres high struck the city of Derna, sweeping entire neighbourhoods into the sea. Over 11,000 people were killed, with thousands more missing; more than a quarter of Derna was destroyed. The disaster was a compound event combining natural extreme precipitation, decades of infrastructure neglect, lack of early warning systems, and a city built in a narrow coastal wadi with no safe evacuation route.

**Floodplain encroachment** — the development of homes, businesses, and infrastructure in areas that naturally flood — is the primary reason flood losses have risen globally even as flood forecasting and emergency response have improved. The expected number of people living in the 100-year global floodplain will grow from ~1.2 billion in 2010 to ~1.6 billion by 2050 under moderate growth projections. Each new building in a floodplain is not just at risk itself; it often increases peak flood levels for neighbours by reducing permeable surface and channel storage.`,
      keyTerms: [
        {
          term: 'Return Period',
          def: 'The average interval between flood events of a given magnitude; the inverse of annual exceedance probability (AEP). A 100-year flood has 1% AEP — roughly a 63% chance of occurring in any 100-year period.',
        },
        {
          term: 'Annual Exceedance Probability (AEP)',
          def: 'The probability that a flood of a given magnitude will be equalled or exceeded in any single year. AEP = 1 / return period. A 50-year flood has 2% AEP; a 10-year flood has 10% AEP.',
        },
        {
          term: 'Compound Flooding',
          def: 'Simultaneous or sequential occurrence of multiple flood drivers (storm surge + riverine flooding; coastal + heavy rainfall) producing impacts greater than either driver alone.',
        },
        {
          term: 'Flash Flood',
          def: 'Rapid-onset flood produced by intense, localised precipitation over short durations (<6 hours). Response times are too short for conventional flood warning systems. Zhengzhou 2021: 201.9 mm (7.95 in) in one hour.',
        },
        {
          term: 'Floodplain Encroachment',
          def: 'Development of human infrastructure in areas naturally inundated by floods. The primary driver of rising global flood losses; reduces natural flood storage and increases exposure of people and assets.',
        },
        {
          term: 'Green Infrastructure',
          def: 'Natural or semi-natural flood management approaches — wetland restoration, urban trees and permeable surfaces, floodplain reconnection — that attenuate floods through storage and infiltration rather than hard engineering.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Understanding Flood Probability and Risk',
      body: `Flood risk has two components: **hazard** (the probability and magnitude of flooding) and **exposure/vulnerability** (the people, assets, and systems in harm's way). Engineering has historically focused on reducing hazard through hard defences; modern risk management increasingly addresses exposure and vulnerability — where people build, how they are warned, and how communities recover.`,
      cards: [
        {
          name: 'Return Period Statistics',
          icon: TrendingUp,
          color: BRAND.accent,
          desc: 'Flood frequency analysis fits statistical distributions to peak flow records to estimate AEP. A 100-yr flood has 1% AEP per year — ~63% chance in 100 years. Critical for infrastructure design standards.',
          examples: 'US: FEMA defines the Special Flood Hazard Area (SFHA) as the 100-yr floodplain (1% AEP). Buildings in SFHA require federally backed flood insurance. Hurricane Harvey peaked above the 0.1% AEP (1,000-yr) level in parts of Houston.',
        },
        {
          name: 'Compound Flooding',
          icon: Waves,
          color: BRAND.ruby,
          desc: 'Storm surge + river flooding, or rainfall + tidal + groundwater simultaneously. Compound events are disproportionately more damaging because drainage systems are overwhelmed from multiple directions.',
          examples: 'Hurricane Harvey (2017): ~60 cm (23.6 in) rainfall over Houston in 4 days; storm surge blocked Gulf drainage; river flooding exceeded all records. NYC Hurricane Sandy (2012): 4-m storm surge + peak river flow flooded subway and tunnels.',
        },
        {
          name: 'Floodplain Encroachment',
          icon: Map,
          color: BRAND.gold,
          desc: 'Development in floodplains increases both exposure (more people/assets at risk) and hazard (impervious surfaces raise peak flows; structures reduce natural storage). Loss spiral: flood → rebuild → flood again.',
          examples: 'Houston: 30% impervious surface cover in Harris County; 500,000 homes in 100-yr floodplain. Jakarta: 40% of city on floodplain below sea level; annual flooding displaces hundreds of thousands.',
        },
        {
          name: 'Climate Non-Stationarity',
          icon: AlertTriangle,
          color: BRAND.coral,
          desc: 'Historical flood statistics assume a stationary climate; warming violates this. Clausius-Clapeyron: ~7% more moisture per 1°C (34°F) warming → more intense extreme precipitation. 100-yr floods may recur every 30–50 years by 2100.',
          examples: 'European floods: Blöschl et al. (2019) documented systematic shifts in flood timing across Europe due to earlier snowmelt and changed storm tracks. German 2021 Ahr Valley flood exceeded any historical record by a factor of 2–3.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Flood Defence: Hard vs. Green Approaches',
      body: `Flood management has traditionally relied on hard infrastructure — levees, floodwalls, retention basins — that protects existing development by containing or diverting floodwaters. Green and hybrid approaches work with natural processes to attenuate floods upstream, reducing peak flows before they reach populated areas. Both have roles; the question is how to combine them most effectively.`,
      cards: [
        {
          name: 'Hard Flood Defences',
          icon: Shield,
          color: BRAND.amethyst,
          desc: 'Levees, floodwalls, concrete channels, and retention basins provide quantifiable protection to specific flood levels. Effective up to design standard; fail catastrophically if exceeded ("levee effect").',
          examples: 'Netherlands Delta Works: surge barriers and dike network protect 26% of Dutch territory below sea level. US Army Corps: ~100,000 km (62140 mi) of levees protect agricultural and urban land; many not inspected since construction.',
        },
        {
          name: 'Green Infrastructure',
          icon: Waves,
          color: BRAND.jade,
          desc: 'Wetland restoration, afforestation of headwaters, permeable urban paving, and floodplain reconnection attenuate floods naturally. Lower cost per unit area; co-benefits for water quality, biodiversity, carbon.',
          examples: 'Flood meadow restoration on River Cherwell, UK: reconnected 3 km² (1.2 sq mi) of floodplain; reduced downstream flood peaks 30%. NYC green infrastructure (green roofs, bioswales): $1.5B investment reduces combined sewer overflow to harbour.',
        },
        {
          name: 'Early Warning Systems',
          icon: AlertTriangle,
          color: BRAND.gold,
          desc: 'Flood forecasting using weather model precipitation + hydrological routing gives communities hours to days of warning. Effective warnings require public trust, clear protocols, and accessible evacuation routes.',
          examples: 'Bangladesh cyclone + flood warning system: reduced cyclone mortality from 500,000 (1970 Bhola) to ~150 (Cyclone Sidr 2007) through community shelters and mobile alerts — a model cited globally for early warning success.',
        },
        {
          name: 'Managed Retreat',
          icon: Map,
          color: BRAND.coral,
          desc: 'Buyout and relocation of repeatedly flooded properties removes exposure from floodplains permanently. Expensive in the short term but eliminates the flood-rebuild-flood cycle. Increasing in climate-adapted planning.',
          examples: 'Post-Katrina New Orleans: US$100M+ in voluntary buyouts in the Lower Ninth Ward and other frequently flooded areas. Post-Harvey: Harris County (Houston) funded buyouts of ~3,000 repetitive-loss properties.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'The Flood Risk System: Hazard, Exposure, and Response',
      body: 'How natural flood hazard combines with human choices about land use and infrastructure to determine flood risk — and how management interventions can reduce each component.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how natural flood hazard combines with human exposure choices to create flood risk, and how flood defences, early warning, green infrastructure, and managed retreat can reduce each component of risk',
        nodes: [
          {
            id: 'precipitation',
            label: 'Extreme Precipitation',
            description: 'Rainfall intensity increasing with warming atmosphere (Clausius-Clapeyron ~7%/°C). Zhengzhou 2021: 201.9 mm/hr. Compound events: storm surge + heavy rain. Return periods changing.',
            color: BRAND.accent,
          },
          {
            id: 'catchment-response',
            label: 'Catchment Runoff Response',
            description: 'Impervious surfaces accelerate runoff; wetlands and forests attenuate peaks. Urban catchments: 30–80% runoff coefficient vs. 5–15% for forested catchments at same rainfall.',
            color: BRAND.jade,
          },
          {
            id: 'flood-peak',
            label: 'Flood Peak',
            description: 'Peak discharge is the defining hazard metric. Return period analysis assigns AEP: 100-yr flood = 1% annual probability. Non-stationarity in warming climate makes historical estimates unreliable.',
            color: BRAND.gold,
          },
          {
            id: 'floodplain-exposure',
            label: 'Floodplain Exposure',
            description: '~1.2 billion people in 100-yr global floodplain. Floodplain development continues globally, driven by economic value of riverside land. Derna 2023: city in narrow coastal wadi with no safe egress.',
            color: BRAND.coral,
          },
          {
            id: 'damage',
            label: 'Flood Damage',
            description: 'Function of hazard intensity × exposure × vulnerability. Global economic losses from floods average ~$100B/yr (2010s); deaths ~7,000/yr. Both rising with urbanisation and climate change.',
            color: BRAND.ruby,
          },
          {
            id: 'risk-reduction',
            label: 'Risk Reduction',
            description: 'Hard defences protect to design standard; green infrastructure reduces peaks; early warning saves lives; managed retreat eliminates exposure. Combination most effective and climate-resilient.',
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'precipitation',       to: 'catchment-response',  label: 'Rainfall drives runoff' },
          { from: 'catchment-response',  to: 'flood-peak',          label: 'Runoff accumulates to peak' },
          { from: 'flood-peak',          to: 'floodplain-exposure', label: 'Flood inundates developed floodplain' },
          { from: 'floodplain-exposure', to: 'damage',              label: 'Assets and people at risk' },
          { from: 'risk-reduction',      to: 'catchment-response',  label: 'Green infra attenuates peaks' },
          { from: 'risk-reduction',      to: 'floodplain-exposure', label: 'Managed retreat reduces exposure' },
          { from: 'risk-reduction',      to: 'damage',              label: 'Early warning reduces casualties' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: `A bridge is designed to withstand the "100-year flood" (1% annual exceedance probability). What is the probability that this flood level will be equalled or exceeded at least once during the bridge\'s 100-year design life?`,
          a: [
            'Exactly 100% — by definition, the 100-year flood must occur once during a 100-year period',
            'Approximately 63% — each year has an independent 1% chance, and the cumulative probability over 100 years is 1 − (0.99)^100 ≈ 0.634',
            'Exactly 1% — the probability is the same each year and does not accumulate over the design life',
            'Approximately 10% — engineering standards conservatively define the design-life probability as one tenth of the return period',
          ],
          correct: 1,
          explain: 'A is wrong: "100-year flood" is a statistical term meaning 1% annual probability, not a guarantee of exactly one occurrence per century; the flood could happen multiple times or not at all in 100 years. B is correct: each year has an independent 1% probability of exceeding the 100-year flood level. The probability of NOT exceeding it in a single year is 99% (0.99). The probability of not exceeding it in any of 100 independent years is (0.99)^100 ≈ 0.366. Therefore the probability of experiencing it at least once in 100 years is 1 − 0.366 ≈ 0.634, or ~63%. This means a structure designed to withstand the 100-year flood faces better-than-even odds of being challenged during its design life. C confuses annual probability with cumulative probability; D has no statistical basis.',
        },
        {
          q: 'Zhengzhou, China recorded 201.9 mm (7.95 in) of rainfall in a single hour on July 20, 2021. How does atmospheric warming contribute to such extreme hourly rainfall intensities?',
          a: [
            'Warming increases wind speed, which carries more precipitation inland from the ocean; the extra water simply falls faster over inland cities',
            'Warming allows the atmosphere to hold more water vapour (approximately 7% more per 1°C (34°F) following the Clausius-Clapeyron relation); when this additional moisture is rapidly lifted, it condenses and falls as proportionally more intense precipitation',
            'Warming dries the land surface, which creates stronger surface heating and larger temperature differences between land and sea, causing more frequent and intense rainfall',
            'Warming melts mountain glaciers, releasing large volumes of meltwater into the atmosphere as vapour; this extra continental moisture falls as extreme rainfall events in interior cities',
          ],
          correct: 1,
          explain: `A is wrong: wind speed has no simple linear relationship with extreme precipitation intensity; moisture transport increases with warming but the primary mechanism is increased atmospheric water vapour capacity. B is correct: the Clausius-Clapeyron equation describes how saturation vapour pressure increases with temperature (~7% per 1°C (34°F)). A warmer atmosphere can hold more water vapour. When a storm system forces this moisture-laden air upward rapidly — through orographic lifting, convective instability, or frontal boundaries — the excess moisture condenses explosively, releasing disproportionately intense precipitation. Zhengzhou\'s extreme event was enhanced by warm, moist air from Typhoon In-fa colliding with terrain, with the extra atmospheric moisture from warming amplifying the rainfall. Global observations confirm that extreme precipitation events are intensifying at approximately 6–7% per degree of warming. C describes a plausible secondary effect but not the primary mechanism; D greatly overstates glacier vapour contributions.`,
        },
        {
          q: 'What is "compound flooding" and why did Hurricane Harvey (2017) provide such a clear example of it?',
          a: [
            'Compound flooding occurs when two rivers join and their combined discharge overtops a levee designed for each separately; Harvey caused compound flooding where the Brazos and Colorado rivers met downstream of Houston',
            'Compound flooding is the simultaneous or sequential occurrence of multiple flood-generating mechanisms; Harvey produced extreme rainfall (60 cm (23.6 in) in 4 days) that coincided with storm surge blocking coastal drainage, overwhelming the Houston area from multiple directions',
            'Compound flooding describes the combination of surface water and groundwater flooding; Harvey raised groundwater levels in the Houston area, causing water to bubble up through streets even away from rivers',
            'Compound flooding refers to flooding that occurs in multiple seasons; Harvey caused summer flooding followed by a secondary winter flood event as retained soil moisture rapidly produced runoff in the following rainy season',
          ],
          correct: 1,
          explain: 'A misdefines the term; compound flooding refers to multiple simultaneous hazard mechanisms, not the confluence of two rivers. B is correct: compound flooding describes scenarios where two or more flood drivers co-occur and their combined impact exceeds what either would produce alone. Harvey produced compound flooding through: (1) ~60 cm (23.6 in) of rainfall over 4 days (a US continental record for a tropical cyclone), saturating soils and overwhelming drainage; (2) Gulf of Mexico storm surge that raised coastal water levels, blocking drainage of bayous and rivers to the sea; (3) decisions to make controlled releases from Barker and Addicks Reservoirs (full from initial rainfall) that deliberately flooded downstream neighbourhoods to protect the dam structures. The interaction of these mechanisms made Harvey catastrophic: the storm surge prevented rivers draining to the Gulf while record rainfall continued upstream. C describes a real but separate mechanism; D misdefines the term.',
        },
        {
          q: 'The 2023 Derna, Libya dam failure caused catastrophic casualties. What combination of factors transformed a heavy rainfall event into a disaster killing over 11,000 people?',
          a: [
            'The primary cause was a design flaw in the dams\' spillways that caused simultaneous overtopping; dam engineers failed to account for Mediterranean cyclone rainfall intensities when designing the structures in the 1970s',
            'Multiple converging factors: extreme rainfall from Mediterranean cyclone Daniel, decades of deferred dam maintenance, absence of functional early warning systems, a city built in a narrow coastal wadi, and no safe evacuation route — the failures cascaded faster than any response was possible',
            'The main cause was that international sanctions prevented Libya from importing the concrete needed to repair the dams; the specific failure mode was reinforcement corrosion that would not have occurred in better-maintained infrastructure',
            'The catastrophe resulted primarily from a local municipal decision to release water from Mansour Dam to lower reservoir levels before the storm, inadvertently overloading Derna Dam downstream and causing a chain reaction',
          ],
          correct: 1,
          explain: `A partially describes a contributing factor (inadequate design for rare events is plausible) but is oversimplified; the disaster had multiple converging causes, not a single design flaw. B is correct: the Derna disaster was a compound event involving at least five interacting factors. (1) Hazard amplification: cyclone Daniel produced rainfall rates in the Green Mountain region estimated at 100–150 mm (5.91 in) in less than 24 hours — a rare but not unprecedented Mediterranean "medicane." (2) Infrastructure failure: the Mansour and Derna dams had not received maintenance for years, reportedly since the 2011 civil conflict, with known structural problems unaddressed. (3) Warning failure: there was no functional early warning system and no evacuation orders reached most residents before the dams failed sequentially within hours. (4) Urban exposure: Derna\'s historic core was built in the narrow bottom of Wadi Derna, directly in the path of the dam-failure surge estimated at 7 m (23 ft) height. (5) Governance failure: the political fragmentation of Libya since 2011 prevented coordinated infrastructure management or emergency response. C and D present plausible-sounding but unsupported specific mechanisms.`,
        },
        {
          q: 'Why do hard flood defences (levees and floodwalls) sometimes increase long-term flood losses despite protecting against frequent floods — the so-called "levee effect"?',
          a: [
            'Levees increase flood losses because they are made of concrete, which expands in warm weather and breaks apart, adding debris to floodwaters and damaging downstream infrastructure',
            'Hard defences create a false sense of security, encouraging denser development in the protected floodplain; when defences are eventually overtopped or fail, the resulting flood strikes far more people and assets than if development had been restricted',
            'Levees reduce groundwater recharge in adjacent floodplains, which lowers the water table and causes land subsidence that increases flood vulnerability in surrounding areas over decades',
            'Hard defences increase flood losses because they focus flood energy into narrower channels, doubling or tripling peak velocities and causing more erosion damage downstream than undefended rivers',
          ],
          correct: 1,
          explain: `A is physically incorrect; thermal expansion of concrete does not cause structural failure under normal operating conditions. B is correct: the "levee effect" — first described by Gilbert White in 1945 — is the counterintuitive observation that building flood defences can increase total long-term flood losses by encouraging development. Before a levee, floodplain land may be used only for agriculture (low-value, flood-tolerant use). After construction, the same land is "protected" and developers build homes, shopping centres, and infrastructure. Property values and population density increase dramatically. But levees are built to protect against a specific flood level, typically the 100-year flood. When a flood exceeds the design level — which climate change is making more likely — or when the levee is poorly maintained and fails, the resulting inundation strikes a much higher-value, more densely populated area. The failure is often catastrophic rather than gradual. New Orleans pre-Katrina exemplified this: decades of levee construction enabled dense low-lying development; Hurricane Katrina\'s overtopping killed ~1,800 people and caused ~$125 billion in damage. C (subsidence from levees) is a real but secondary effect; D overstates channel velocity effects.`,
        },
      ],
    },
  ],
}

export default floodsRiskFuture
