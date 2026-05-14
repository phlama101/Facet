import { Layers, Globe, Activity, ArrowRight, Zap } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const infiltrationRunoff: Lesson = {
  id: 'hyd-101-1-1-3',
  title: 'Infiltration, Soil Moisture, and Runoff Generation',
  track: 'geo',
  trackName: 'Hydrology',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 120,
  description: 'When rain falls on a watershed, it faces a fundamental decision at the soil surface: infiltrate into the soil or flow overland. This partitioning controls how quickly rivers rise after storms, how much water recharges groundwater, and how prone a landscape is to flooding and erosion.',
  sources: [
    { org: 'USGS', title: 'USGS — Infiltration and the Water Cycle',                          url: 'https://www.usgs.gov/special-topics/water-science-school/science/infiltration-and-water-cycle' },
    { org: 'USDA', title: 'USDA — Soil Water Movement',                                       url: 'https://www.nrcs.usda.gov/wps/portal/nrcs/detail/soils/edu/?cid=nrcs142p2_054028' },
    { org: 'FAO',  title: 'FAO — Land and Water Division: Soil Hydrology',                    url: 'https://www.fao.org/land-water/en/' },
    { org: 'USGS', title: 'USGS — Streamflow and Runoff',                                     url: 'https://www.usgs.gov/special-topics/water-science-school/science/streamflow-and-water-cycle' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Horton versus Dunne: two ways soil turns rain into rivers',
      body: `When rain falls on a watershed, it faces a fundamental decision at the soil surface: infiltrate into the soil or flow overland. This partitioning between infiltration and runoff determines how quickly and how high rivers rise after storms, how much water recharges groundwater, and how prone a landscape is to flooding and erosion. The fraction that runs off is controlled by rainfall intensity relative to soil infiltration capacity, antecedent soil moisture, soil type, land cover, and topography.

Robert Horton (1933) described the most intuitive runoff mechanism: when rainfall intensity exceeds the soil\'s infiltration capacity, excess water ponds and flows overland — Hortonian overland flow. Infiltration capacity declines over a storm as pores fill with water: the Green-Ampt model predicts this decline as f = Ks × (1 + ψΔθ/F), where Ks is saturated hydraulic conductivity, ψ is the wetting front suction, Δθ is the moisture deficit, and F is cumulative infiltration. Hortonian runoff dominates in arid regions, on compacted urban soils, and during intense convective storms. Thomas Dunne (1970s) identified a second mechanism: when the soil becomes fully saturated (from the top down or via a rising water table), even very low-intensity rain generates saturation-excess overland flow.

The variable source area (VSA) concept, developed from Dunne\'s work in humid forested catchments, recognises that only a small, dynamic fraction of the watershed generates runoff at any time. Saturated areas (near streams, in hollows, on shallow soils) expand during storms and shrink in dry periods. A 10 mm storm might generate runoff from only 5% of the watershed; a 50 mm storm might activate 30% of the watershed. This concept underpins the TOPMODEL hydrological model, which uses topographic wetness index (TWI = ln(a/tan β), where a is upslope area and β is local slope) to predict where soil is likely to saturate first.

Urbanisation profoundly alters the infiltration-runoff relationship. Impermeable surfaces (roads, roofs, car parks) eliminate infiltration, creating near-100% runoff from impervious areas. Studies show that watersheds with > 10% impervious cover show measurable stream degradation; above 25–30% impervious cover, stream ecosystems are severely impaired. Urban stormwater travels to streams 3–10× faster than in natural catchments, creating flashier hydrographs and more frequent bank-erosion events. Green infrastructure (permeable pavements, bioswales, rain gardens, green roofs) aims to restore pre-development infiltration and slow stormwater delivery.`,
      keyTerms: [
        {
          term: 'Infiltration Capacity',
          def: 'Maximum rate at which soil can absorb water; declines during rain as pores fill. Controls Hortonian runoff.',
        },
        {
          term: 'Hortonian Overland Flow',
          def: 'Runoff generated when rainfall intensity exceeds infiltration capacity; dominant in arid regions and on compacted soils.',
        },
        {
          term: 'Saturation-Excess Runoff',
          def: 'Runoff generated when soil is fully saturated; occurs even at low rainfall intensities over saturated areas.',
        },
        {
          term: 'Topographic Wetness Index (TWI)',
          def: 'TWI = ln(a/tan β); predicts soil saturation likelihood from upslope contributing area and local slope.',
        },
        {
          term: 'Variable Source Area',
          def: 'Dynamic fraction of a watershed that generates runoff; expands during storms, contracts in dry periods.',
        },
      ],
    },
    {
      type: 'callout' as const,
      variant: 'insight',
      headline: 'Groundwater accounts for 30% of all freshwater on Earth',
      body: 'Groundwater accounts for 30% of all freshwater on Earth and is the primary water source for over 2 billion people. The Ogallala Aquifer beneath the US Great Plains took 10,000 years to fill with glacial meltwater — but at current extraction rates, it could be depleted in as few as 25 years.',
    },
    {
      type: 'concept',
      title: 'Runoff Generation Mechanisms',
      body: 'Hortonian and Dunne mechanisms operate in different climates and land types. Understanding which dominates in a given watershed is essential for flood prediction, water resource management, and designing effective green infrastructure.',
      cards: [
        {
          name: 'Hortonian Flow',
          icon: Zap,
          color: BRAND.coral,
          desc: 'Rainfall > infiltration capacity → overland flow. Declines as soil wets. Dominates arid zones and urban areas.',
          examples: 'Savanna soils: Ks = 5-20 mm/hr. A 40 mm/hr thunderstorm generates immediate overland flow from bare-soil areas.',
        },
        {
          name: 'Saturation-Excess',
          icon: Layers,
          color: BRAND.jade,
          desc: 'Soil fills from below (rising water table) or above. Common in humid forests, valley bottoms, and shallow soils.',
          examples: 'Vermont hillslopes (Dunne, 1978): storm runoff came from saturated valley floors (<10% of watershed area), not bare hillslopes.',
        },
        {
          name: 'Variable Source Area',
          icon: Globe,
          color: BRAND.gold,
          desc: 'Saturated areas expand during storms; stream network effectively grows. TOPMODEL uses TWI = ln(a/tanβ) to map it.',
          examples: 'Humid British catchments: contributing area grows from 2% in dry periods to 20-30% during wet winters.',
        },
        {
          name: 'Macropore Flow',
          icon: ArrowRight,
          color: BRAND.amethyst,
          desc: 'Preferential flow through earthworm channels, root holes, cracks. Bypasses matrix; can dominate subsurface stormflow.',
          examples: 'Forest soils: macropores (>0.5 mm diameter) can transmit 10-100× more water than soil matrix saturated conductivity.',
        },
        {
          name: 'Urban Impervious',
          icon: Activity,
          color: BRAND.ruby,
          desc: 'Impermeable surfaces eliminate infiltration. > 10% impervious: measurable stream degradation. > 25%: severe ecosystem impact.',
          examples: 'Houston: 30-40% impervious cover contributed to catastrophic flooding during Hurricane Harvey (2017, ~1,300 mm in 5 days).',
        },
      ],
      interaction: {
        type: 'annotated-image' as const,
        src: '/visuals/hyd.svg',
        alt: 'Diagram of the hydrological (water) cycle showing evaporation from the ocean, cloud formation, precipitation, surface runoff, infiltration, and groundwater flow',
        aspectRatio: '16/9',
        credit: 'Facet Earth Sciences',
        annotations: [
          {
            id: 'evaporation',
            x: 8,
            y: 55,
            label: 'Evaporation',
            description: 'Solar energy drives water from ocean surfaces into the atmosphere as water vapour — the primary input to the water cycle. Globally, ~505,000 km³ evaporate per year from the oceans, equivalent to a global ocean layer ~1.4 m thick. Sea surface temperature directly controls the evaporation rate, making the ocean\'s energy budget central to understanding precipitation patterns and hurricane intensification.',
          },
          {
            id: 'cloud-formation',
            x: 30,
            y: 21,
            label: 'Cloud Formation',
            description: 'Rising, moisture-laden air cools adiabatically (~10°C/km for unsaturated air). When it cools to the dew point, water vapour condenses onto tiny aerosol particles (dust, sea salt, pollen) forming cloud droplets. Clouds store only ~0.001% of the hydrosphere\'s water but play a crucial role in reflecting solar radiation (cooling effect) and trapping outgoing infrared radiation (warming effect).',
          },
          {
            id: 'precipitation',
            x: 37,
            y: 37,
            label: 'Precipitation',
            description: 'Water returns to Earth\'s surface as rain, snow, sleet, or hail when cloud droplets combine into drops large enough to fall. Global average precipitation is ~990 mm/year but distributed very unevenly: tropical rainforests receive >2,000 mm/year while deserts receive <250 mm. The monsoon systems of South and East Asia deliver 70–80% of the year\'s rain in just 3–4 months.',
          },
          {
            id: 'surface-runoff',
            x: 62,
            y: 67,
            label: 'Surface Runoff',
            description: 'Precipitation that flows across the land surface rather than infiltrating into the soil, reaching rivers and eventually the ocean. Runoff is increased by compacted or frozen soils, impervious urban surfaces (asphalt, concrete), and intense rainfall exceeding infiltration capacity. Rivers carry dissolved nutrients, sediment, and pollutants to the ocean, shaping landscapes through erosion and deposition.',
          },
          {
            id: 'groundwater',
            x: 40,
            y: 90,
            label: 'Groundwater Flow',
            description: 'Water that infiltrates through soil and rock, slowly flowing through porous aquifer formations toward the ocean or emerging as springs. Groundwater is the world\'s largest reservoir of unfrozen fresh water (~10.6 million km³) and supplies ~50% of global drinking water and 40% of irrigation. Aquifer recharge takes years to millennia; over-pumping causes irreversible compaction and land subsidence in cities worldwide.',
          },
        ],
      },
    },
    {
      type: 'visualization',
      title: 'Rainfall to Runoff: Partitioning at the Soil Surface',
      body: `How a rainstorm\'s water is partitioned into overland flow, soil storage, subsurface flow, and deep drainage.`,
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how rainfall at the soil surface is partitioned between Hortonian overland flow, soil moisture storage, saturation-excess runoff, and deep groundwater recharge depending on infiltration capacity and antecedent soil moisture',
        nodes: [
          {
            id: 'rainfall',
            label: 'Rainfall Event',
            description: 'Precipitation falls on the watershed. Intensity and duration determine total input. Canopy intercepts 15-40% in forested areas.',
            color: BRAND.accent,
          },
          {
            id: 'infiltration-test',
            label: 'Infiltration Capacity Check',
            description: 'Is rainfall intensity > soil infiltration capacity? If yes: Hortonian overland flow. If no: water enters soil.',
            color: BRAND.gold,
          },
          {
            id: 'hortonian',
            label: 'Hortonian Overland Flow',
            description: 'Excess rainfall flows over the surface. Dominant on impervious surfaces, crusted soils, and arid regions. Fast delivery to streams.',
            color: BRAND.coral,
          },
          {
            id: 'soil-moisture',
            label: 'Soil Moisture Zone',
            description: 'Water infiltrates and fills pore spaces. Field capacity (~10-40% by volume) is maximum water soil holds against gravity.',
            color: BRAND.jade,
          },
          {
            id: 'saturation-check',
            label: 'Soil Saturation Check',
            description: 'Is soil fully saturated? If yes: saturation-excess overland flow. If no: water drains to groundwater or becomes subsurface stormflow.',
            color: BRAND.ruby,
          },
          {
            id: 'groundwater',
            label: 'Groundwater Recharge',
            description: 'Water drains below the root zone to the water table. Slow process: weeks to millennia. Sustains baseflow to streams between storms.',
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'rainfall',           to: 'infiltration-test', label: 'Reaches soil surface' },
          { from: 'infiltration-test',  to: 'hortonian',         label: 'Intensity > Ks' },
          { from: 'infiltration-test',  to: 'soil-moisture',     label: 'Intensity ≤ Ks' },
          { from: 'hortonian',          to: 'saturation-check',  label: 'Parallel path' },
          { from: 'soil-moisture',      to: 'saturation-check',  label: 'As soil fills' },
          { from: 'saturation-check',   to: 'groundwater',       label: 'Unsaturated drainage' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What is the difference between Hortonian and Dunne (saturation-excess) overland flow?',
          a: [
            'Hortonian occurs only on clay soils; Dunne occurs only on sandy soils',
            'Hortonian occurs when rainfall exceeds infiltration capacity; Dunne occurs when the soil is fully saturated, even at low rainfall rates',
            'Hortonian is subsurface lateral flow; Dunne is surface overland flow',
            'Hortonian requires urban impervious surfaces; Dunne requires forested hillslopes',
          ],
          correct: 1,
          explain: `Hortonian overland flow (Horton, 1933) is generated when rainfall intensity exceeds the soil\'s infiltration capacity — the excess water cannot enter the soil and flows overland. This is common on compacted, crusted, or impervious surfaces and during intense convective storms. Saturation-excess overland flow (Dunne, 1970s) occurs when the soil profile is completely saturated — the pores are full and no more water can enter regardless of intensity. Even a drizzle generates runoff from saturated areas. In humid forested catchments, Dunne mechanism typically dominates because soils have high infiltration capacity but shallow water tables in valley bottoms.`,
        },
        {
          q: 'The topographic wetness index TWI = ln(a/tan β) is used in TOPMODEL. What does a high TWI value indicate?',
          a: [
            'The hillslope is very steep and prone to landsliding',
            'The location has large upslope contributing area and gentle slope — likely to be saturated first in a storm',
            'The soil has high organic matter content and high water-holding capacity',
            'The area receives more orographic precipitation than surrounding terrain',
          ],
          correct: 1,
          explain: `The topographic wetness index ln(a/tan β) combines two controls on soil moisture: a is the upslope contributing area (how much catchment drains to this point), and tan β is the local slope (how fast water drains away). A location with large a (lots of water draining toward it) and small tan β (gentle slope, slow drainage) has a high TWI — it accumulates water and tends to saturate first during a rainstorm. Valley bottoms, hollows, and convergent topography (concave in plan view) typically have high TWI values and are the variable source areas that expand during storms.`,
        },
        {
          q: 'Why does urbanisation typically increase flood peaks in streams?',
          a: [
            'Urban areas receive more rainfall because building heat islands enhance convective precipitation',
            'Impervious surfaces eliminate infiltration, so more rainfall becomes immediate runoff, and stormwater systems deliver it to streams much faster',
            'Urban vegetation has higher transpiration rates that saturate soils more quickly',
            'Urban streams are channelised at greater depths, which slows water and causes it to back up into streets',
          ],
          correct: 1,
          explain: `In natural catchments, soil infiltration absorbs much of the rainfall, and subsurface flow delivers water to streams slowly over days to weeks. In urban areas, impervious surfaces (rooftops, roads, car parks) cover 30–60% or more of the watershed. Water cannot infiltrate and instead flows over the surface directly into storm drains designed to rapidly evacuate water. The result is: (1) more total runoff volume (less lost to infiltration); (2) faster delivery (pipes vs. soil pathways); (3) sharper peak discharge (stormwater from across the watershed arrives simultaneously). This fundamentally alters the stream hydrograph — urban streams peak higher and faster than pre-development, increasing flood frequency and bank erosion.`,
        },
        {
          q: 'What is "field capacity" in soil hydrology and why is it important?',
          a: [
            'The maximum amount of water a soil can hold against gravity after drainage has ceased; controls how much water is available for plants',
            'The rate at which water enters the soil during rainfall; determines Hortonian vs Dunne runoff generation',
            'The depth to the water table below which soil is permanently saturated',
            'The total porosity of the soil; determines how quickly water moves through the vadose zone',
          ],
          correct: 0,
          explain: `Field capacity is the water content remaining in the soil after gravity drainage has essentially stopped, typically 2–3 days after the soil was fully saturated. At field capacity, the large macropores have drained but mesopores and micropores still hold water against gravity. It represents the maximum plant-available water that is retained without draining to groundwater. For agricultural management, the plant-available water (PAW) is the water between field capacity and the permanent wilting point (where plants can no longer extract water). Sandy soils have low PAW (low field capacity); clay-rich soils have higher PAW but drain slowly.`,
        },
        {
          q: 'The variable source area concept states that runoff comes primarily from which part of a watershed during a storm?',
          a: [
            'Steep hillslopes where gravity accelerates overland flow toward the channel',
            'Dynamic saturated areas (valley bottoms, hollows, shallow soils) that expand during storms and contract during dry periods',
            'Forest canopies that intercept rain and channel it to the stream network via stemflow',
            'Areas directly adjacent to the stream channel regardless of topography or soil type',
          ],
          correct: 1,
          explain: `The variable source area (VSA) concept, developed by Hewlett, Hibbert, and Dunne through field observations in humid forested catchments, showed that most storm runoff is generated from a small fraction of the watershed — not uniformly from hillslopes as Horton assumed. The contributing areas are at valley bottoms, in topographic hollows (convergent flow paths), on shallow soils, and near streams — places where water tables are shallow and soils saturate quickly. During dry periods, these areas might occupy only 2–5% of the watershed; during a major storm event they expand to 20–40%. The TOPMODEL and VIC hydrological models are built on this concept.`,
        },
      ],
    },
  ],
}

export default infiltrationRunoff
