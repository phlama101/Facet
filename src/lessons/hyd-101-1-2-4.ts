import { Activity, Globe, Layers, Zap, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const floodHazards: Lesson = {
  id: 'hyd-101-1-2-4',
  title: 'Flood Hazards, Floodplains, and Flood Risk Management',
  track: 'geo',
  trackName: 'Hydrology',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 120,
  description: `The 100-year flood isn\'t what you think: probability, floodplains, and the science of managing water excess`,
  sources: [
    { org: 'FEMA',  title: 'FEMA — National Flood Insurance Program',                         url: 'https://www.fema.gov/flood-insurance' },
    { org: 'USGS',  title: 'USGS — Floods',                                                   url: 'https://www.usgs.gov/special-topics/water-science-school/science/floods-and-recurrence-intervals' },
    { org: 'NOAA',  title: 'NOAA — Advanced Hydrologic Prediction Service',                   url: 'https://water.weather.gov/ahps/' },
    { org: 'UNDRR', title: 'UNDRR — Global Risk Assessment: Floods',                          url: 'https://www.undrr.org/gar' },
  ],
  sections: [
    {
      type: 'intro',
      title: `The 100-year flood isn\'t what you think: probability, floodplains, and the science of managing water excess`,
      body: `Floods are the most costly and deadly natural hazard globally, causing an average $40–60 billion in annual damages and 5,000–10,000 deaths per year. A flood occurs when water inundates land that is normally dry — through river overbank flow, coastal storm surge, flash flooding, urban drainage failure, or dam/levee breach. Understanding flood hydrology is essential for land-use planning, infrastructure design, emergency management, and insurance.

The "100-year flood" is one of the most misunderstood concepts in natural hazard communication. It does not mean a flood that occurs once per century. It means a flood with a 1% annual exceedance probability (AEP) — a 1-in-100 chance of being equalled or exceeded in any given year. This implies a ~26% probability of being exceeded during a 30-year mortgage period, and a ~40% probability during a typical 50-year building design life. FEMA replaced the "100-year flood" language with "1% annual chance flood" in official communications precisely because the return period framing misleads the public into believing such events are rare. Houston experienced three separate "500-year" flood events in three consecutive years (2015, 2016, Harvey 2017) — a reminder that rare events do occur.

The 1% annual chance floodplain (Special Flood Hazard Area, SFHA) is the standard regulatory boundary in the US National Flood Insurance Program (NFIP). Properties within the SFHA must carry flood insurance if they have a federally backed mortgage. FEMA publishes Flood Insurance Rate Maps (FIRMs) showing the SFHA and flood zone classifications. However, FIRMs are often outdated — based on older topographic data and without accounting for urbanisation, climate change, or compound events (storm surge combined with river flooding). First Street Foundation estimates that the true count of US properties at substantial flood risk is 2–3× the number shown on current FEMA maps.

Flood risk management integrates structural and non-structural measures. Structural measures include levees (earthen embankments that contain floods but transfer risk downstream and create false security leading to floodplain development), detention/retention basins (store floodwater temporarily), and channel modifications (enlargement, realignment). Non-structural measures — often more cost-effective — include floodplain zoning (prohibiting development), acquisition and relocation of repeatedly flooded properties, flood early warning systems, building elevation requirements, and nature-based solutions (floodplain reconnection, wetland restoration, urban green infrastructure). The 2023 Libya floods (Derna dam failures; ~10,000–20,000 deaths) highlight the catastrophic consequences of inadequate dam safety inspection and flood risk communication.`,
      keyTerms: [
        {
          term: 'Annual Exceedance Probability (AEP)',
          def: '1% AEP = 1-in-100 chance per year of being exceeded. The 100-year flood = 1% AEP = 26% chance in 30 years.',
        },
        {
          term: 'Special Flood Hazard Area (SFHA)',
          def: 'FEMA-mapped 1% annual chance floodplain; mandatory flood insurance zone for federally backed mortgages.',
        },
        {
          term: 'Levee',
          def: 'Earthen or concrete embankment containing floodwater; transfers risk downstream; encourages development behind it.',
        },
        {
          term: 'Compound Flooding',
          def: 'Simultaneous or sequential occurrence of multiple flood types (river + coastal + rainfall); produces hazard greater than any component alone.',
        },
        {
          term: 'Nature-Based Solutions',
          def: 'Flood risk reduction using ecological features: floodplain reconnection, wetland restoration, urban green infrastructure.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Flood Risk: Hazard, Exposure, and Vulnerability',
      body: `Flood risk = Hazard × Exposure × Vulnerability. Hazard (flood magnitude and frequency) is partly natural, partly human-modified. Exposure (people and assets in the floodplain) reflects land-use decisions. Vulnerability (susceptibility to damage) depends on building quality, warning systems, and insurance. Reducing any of the three factors reduces risk.`,
      cards: [
        {
          name: 'Return Period',
          icon: Activity,
          color: BRAND.coral,
          desc: '100-yr flood = 1% AEP. 26% chance in 30 years. 40% chance in 50 years. Climate change is shifting return periods.',
          examples: 'What was the 100-year flood in 1980 is now a ~70-year event in many US river basins due to increased heavy precipitation.',
        },
        {
          name: 'SFHA / FIRM Maps',
          icon: Globe,
          color: BRAND.jade,
          desc: 'FEMA 1%-chance flood boundary. Mandatory insurance for federally backed mortgages. Many maps 10-30 years outdated.',
          examples: 'Hurricane Harvey flooded 75% of properties OUTSIDE the 100-year floodplain. Harris County has since updated its FIRMs.',
        },
        {
          name: 'Levees',
          icon: Layers,
          color: BRAND.gold,
          desc: 'Contain floods but create false security → floodplain development. Levee failure (overtop or breach) more catastrophic than no levee.',
          examples: '2005 Katrina: New Orleans levee failures killed ~1,800. 2019 Missouri River: 9,000 km² (3,475 sq mi) flooded when levees overtopped or failed.',
        },
        {
          name: 'Compound Floods',
          icon: Zap,
          color: BRAND.ruby,
          desc: 'River + coastal storm surge + heavy rain simultaneously. Non-linear interaction exceeds individual component hazards.',
          examples: '2017 Harvey: record rainfall (1,350 mm (53.15 in) in 5 days) + urban drainage failure + bayou overbank flooding = $125 billion damages.',
        },
        {
          name: 'Nature-Based Solutions',
          icon: ArrowRight,
          color: BRAND.amethyst,
          desc: 'Floodplain reconnection, wetland restoration, urban green infrastructure. Often cheaper and more resilient than hard structures.',
          examples: `New York City\'s "Big U" park protects Manhattan\'s Lower East Side from storm surge. Reconnected floodplains on Rhine reduced peak floods 10-20%.`,
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Flood Risk Chain: From Hazard to Consequence',
      body: 'How physical flood hazard becomes economic damage and social disruption through exposure and vulnerability factors.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how physical flood hazard propagates through inundation extent, exposed assets, and vulnerability to produce flood consequences and inform risk reduction decisions',
        nodes: [
          {
            id: 'flood-hazard',
            label: 'Flood Hazard',
            description: 'River overbank flow, flash flood, coastal storm surge, or dam/levee failure. Characterised by depth, velocity, duration, and frequency. Partly modified by upstream land use.',
            color: BRAND.coral,
          },
          {
            id: 'floodplain-extent',
            label: 'Inundation Extent',
            description: 'Hazard mapped as floodplain for different AEP levels (10%, 2%, 1%, 0.2%). Depends on channel capacity, valley geometry, and levee locations.',
            color: BRAND.gold,
          },
          {
            id: 'exposure',
            label: 'Exposed Assets',
            description: 'People, buildings, infrastructure in the floodplain. Determined by land-use decisions. Dense urban development near rivers dramatically increases potential losses.',
            color: BRAND.jade,
          },
          {
            id: 'vulnerability',
            label: 'Vulnerability',
            description: 'Proportion of exposed assets damaged at a given flood depth. Improved by: elevated structures, flood-proof construction, early warning systems, and insurance.',
            color: BRAND.ruby,
          },
          {
            id: 'consequence',
            label: 'Flood Consequence',
            description: 'Direct losses (structural, content, agriculture) + indirect losses (business interruption, displacement, health impacts). Risk = Hazard × Exposure × Vulnerability.',
            color: BRAND.amethyst,
          },
          {
            id: 'risk-reduction',
            label: 'Risk Reduction Options',
            description: 'Hazard reduction: floodplain reconnection, detention basins. Exposure reduction: zoning, buyouts. Vulnerability reduction: elevation, insurance, warning systems.',
            color: BRAND.accent,
          },
        ],
        edges: [
          { from: 'flood-hazard',      to: 'floodplain-extent', label: 'Hydraulic modelling' },
          { from: 'floodplain-extent', to: 'exposure',          label: 'Overlays with development' },
          { from: 'exposure',          to: 'vulnerability',     label: 'Depth-damage functions' },
          { from: 'vulnerability',     to: 'consequence',       label: 'Risk = H × E × V' },
          { from: 'consequence',       to: 'risk-reduction',    label: 'Informs management decisions' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What does "1% annual exceedance probability" mean for a flood of a given discharge?',
          a: [
            'The flood will occur exactly once every 100 years',
            'There is a 1% chance in any given year that this flood discharge will be equalled or exceeded',
            'The flood has occurred once in the last 100 years of records',
            'The probability decreases by 1% each year after the flood occurs',
          ],
          correct: 1,
          explain: `Annual exceedance probability (AEP) describes the chance of a flood of given magnitude being exceeded in any single year. A 1% AEP flood has a 1-in-100 chance per year. Crucially, each year is an independent trial — like flipping a biased coin. The 1% chance applies every year regardless of when the last flood occurred. This means: (1) the flood can occur in consecutive years; (2) over a 30-year mortgage period, P(at least one occurrence) = 1 - (0.99)^30 ≈ 26%; (3) over 50 years, P ≈ 40%. This probabilistic framing replaced the misleading "100-year flood" terminology in FEMA communications because it correctly conveys the cumulative risk over a building\'s lifetime.`,
        },
        {
          q: 'Why do levees sometimes increase total flood damages compared to having no levee?',
          a: [
            'Levees increase river velocity, which erodes the riverbed and deepens the channel, increasing peak discharge',
            'Levees create false security that encourages intensive floodplain development; when levees fail or are overtopped, the resulting flood is catastrophic because more assets are in harm\'s way',
            'Levees reduce groundwater recharge, which destabilises the land surface, causing subsidence that increases future flood depths',
            'Levees are always built to insufficient heights because engineers intentionally underestimate design floods to save construction costs',
          ],
          correct: 1,
          explain: 'The "levee paradox" or "levee effect" describes how flood control infrastructure can paradoxically increase total risk. Before a levee, the floodplain is periodically flooded — people know it floods and avoid intensive development. After a levee is built, the apparent protection encourages development of the floodplain: houses, businesses, factories, and infrastructure fill the formerly-flooded area. Now, if the levee fails (overtops, breaches due to seepage or structural failure), the flood hits a densely developed floodplain and damages are far greater than they would have been without the levee. The 2005 New Orleans catastrophe exemplifies this: levee failures from Katrina killed ~1,800 people and caused ~$125 billion in damages in a city developed below sea level behind "protected" levees.',
        },
        {
          q: 'What are compound flooding events and why are they particularly dangerous?',
          a: [
            'Compound floods occur in series over multiple years, each one larger than the last due to sediment accumulation',
            'Compound floods involve two or more flooding mechanisms (e.g., river + coastal storm surge + heavy rain) occurring simultaneously or in quick succession, producing hazard greater than any individual component',
            'Compound floods occur when two separate river basins merge, doubling the discharge at the confluence',
            'Compound floods are caused by dam failures that cascade from one reservoir to the next downstream',
          ],
          correct: 1,
          explain: 'Compound flooding occurs when multiple flood drivers co-occur in ways that amplify total impact. For example: heavy rainfall raises river levels (fluvial flooding) at the same time a storm surge blocks drainage at the river mouth (coastal flooding) — the combination produces deeper, longer-lasting inundation than either alone. Hurricane Harvey (2017) exemplified this: record rainfall (1,350 mm (53.15 in) in 5 days) inundated Houston from above, while storm surge in Galveston Bay backed up into Galveston Bay tributaries from below, while the pre-existing urban drainage system was already overwhelmed. Compound events are increasing in frequency as sea level rise extends the coastal influence farther inland and climate change intensifies extreme precipitation.',
        },
        {
          q: `FEMA\'s Flood Insurance Rate Maps (FIRMs) define the Special Flood Hazard Area (SFHA). What is a key limitation of these maps?`,
          a: [
            'FIRMs are classified documents not available to homeowners or insurance companies',
            'FIRMs are often outdated, based on older elevation data and not accounting for recent urbanisation, climate change trends, or compound event scenarios',
            'FIRMs are only required by law for properties within 100 metres of a navigable waterway, excluding most suburban flood risk',
            'FIRMs show storm surge risk only; river flooding is mapped by the Army Corps of Engineers on separate, incompatible maps',
          ],
          correct: 1,
          explain: `FEMA\'s FIRMs are critical regulatory tools but have well-documented limitations. Many maps were last updated 10–30 years ago, before significant watershed development, climate trend changes, and improvements in topographic data (lidar). They use a deterministic "Line A" approach showing the 1% chance flood boundary without confidence intervals, suggesting false precision. Most critically, research by First Street Foundation and others has found that FIRMs substantially undercount flood risk: First Street estimates that the US has 14.6 million properties at substantial flood risk, compared to 8.7 million shown on FIRMs. This matters because NFIP mandatory purchase requirements only apply within SFHA, so millions of at-risk properties go without flood insurance.`,
        },
        {
          q: 'Which flood risk reduction strategy typically provides the best long-term benefit-cost ratio for repeatedly flooded properties?',
          a: [
            'Building higher and stronger levees to permanently contain all flood events up to the 500-year flood level',
            'Acquiring and relocating repeatedly flooded properties to remove them permanently from the floodplain',
            'Installing flood shields and temporary barriers that homeowners can deploy when a flood warning is issued',
            'Deepening and widening river channels to increase their capacity to contain large floods',
          ],
          correct: 1,
          explain: `Managed retreat — purchasing and demolishing repeatedly flooded properties and converting the land to open space or restored floodplain — consistently shows the highest benefit-cost ratios in FEMA analyses. Once a property is removed from the floodplain and the land returned to natural condition, there are no more flood insurance claims from that property forever. FEMA\'s Hazard Mitigation Grant Program has funded over 45,000 acquisitions since 1989. For properties that flood repeatedly (some with NFIP claims exceeding the structure value multiple times), buyout costs are typically recovered in 5–10 years of avoided future claims. Channel enlargement has a poor track record — channels enlarged to handle bigger floods then encourage more development, requiring further enlargement in a cycle of infrastructure escalation.`,
        },
      ],
    },
  ],
}

export default floodHazards
