import { Layers, Globe, Activity, Zap, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const snowHydrology: Lesson = {
  id: 'hyd-101-1-1-4',
  title: 'Snow Hydrology and the Mountain Water Tower',
  track: 'geo',
  trackName: 'Hydrology',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 120,
  description: 'Mountains store winter precipitation as snowpack and release it gradually as meltwater through spring and summer — acting as natural reservoirs that supply freshwater to over 1.9 billion people worldwide. Understanding snow accumulation, ripening, melt energetics, rain-on-snow floods, and permafrost thaw is fundamental to water resource management in a warming climate.',
  sources: [
    { org: 'NSIDC', title: 'NSIDC — Snow and the Water Cycle',          url: 'https://nsidc.org/cryosphere/snow/science/water-cycle.html' },
    { org: 'USGS',  title: 'USGS — Snow and Ice',                        url: 'https://www.usgs.gov/special-topics/water-science-school/science/snow-and-ice' },
    { org: 'NASA',  title: 'NASA — GRACE-FO Water Storage Changes',      url: 'https://grace.jpl.nasa.gov/' },
    { org: 'IPCC',  title: 'IPCC AR6 WGI — Cryosphere Changes',          url: 'https://www.ipcc.ch/report/ar6/wg1/' },
  ],
  sections: [
    {
      type: 'intro',
      title: `Snowpack as nature\'s reservoir: storing winter precipitation for summer rivers`,
      body: `In cold climates and mountains worldwide, winter snowpack functions as a natural reservoir, storing precipitation as snow from November through April and releasing it gradually as meltwater during spring and summer. Mountains have been called "water towers of the world": the Hindu Kush-Himalaya, the Andes, the Western US Rockies, the Alps, and the Tianshan collectively supply freshwater to over 1.9 billion people downstream. In the Colorado River basin, snowmelt provides ~85% of annual flow; in the Sacramento-San Joaquin watershed of California, mountain snowpack provides over 30% of the state\'s water supply.

Snow water equivalent (SWE) is the depth of liquid water that would result from melting a snowpack. SWE integrates the full winter accumulation history and is the critical metric for water supply forecasting. In the Western United States, April 1 SWE historically explained ~70% of annual streamflow variability in snow-dominated basins. Snowmelt is driven by the energy balance of the snowpack: net radiation dominates during clear spring days (accounting for 60–80% of melt energy), while turbulent fluxes (sensible and latent heat from warm, moist air) dominate during rain-on-snow events. The simple degree-day (temperature index) method — melt rate = degree-day factor × (T − 0°C (32°F)) — captures 70–80% of melt variability with just air temperature data.

Rain-on-snow (ROS) events occur when warm rain falls on existing snowpack, triggering rapid melt that combines with rain for extreme runoff. Historic ROS floods include the 1964 Christmas Flood in the Pacific Northwest (river flows 5-10× normal January levels) and the January 1997 Northern California floods (50+ mm of rain on a 600 mm (23.62 in) SWE snowpack, causing $1.6 billion in damages). Under climate warming, the snowmelt season is shifting earlier and ROS events are becoming more frequent at higher elevations as the rain-snow transition zone moves upward.

Permafrost — ground that remains below 0°C (32°F) for two or more consecutive years — underlies about 25% of the Northern Hemisphere land area and stores vast amounts of water and carbon. Thermokarst landscapes form as permafrost thaws: ground ice melts, creating ponds, lakes, and irregular terrain. In the Arctic, permafrost thaw is altering drainage patterns, converting lakes to bogs, increasing dissolved organic carbon export to rivers, and releasing stored methane and CO₂. In mountain regions, the loss of glaciers and permafrost is reducing dry-season baseflow — the late-summer low-flow period when many communities and ecosystems depend on stored meltwater.`,
      keyTerms: [
        {
          term: 'Snow Water Equivalent (SWE)',
          def: 'Depth of liquid water contained in the snowpack; the critical metric for water supply forecasting.',
        },
        {
          term: 'Degree-Day Factor',
          def: 'Daily melt rate per degree above 0°C (32°F); empirical parameter for temperature-index snowmelt models.',
        },
        {
          term: 'Rain-on-Snow (ROS)',
          def: 'Warm rain falling on existing snowpack; combines with rapid melt to generate extreme runoff and flooding.',
        },
        {
          term: 'Permafrost',
          def: 'Ground remaining below 0°C (32°F) for ≥2 consecutive years; underlies ~25% of Northern Hemisphere land area.',
        },
        {
          term: 'Water Tower',
          def: 'Term for mountains that store winter precipitation as snow/ice and release it as summer meltwater for downstream populations.',
        },
      ],
    },
    {
      type: 'callout' as const,
      variant: 'warning',
      headline: 'Floods are the world\'s deadliest natural hazard',
      body: 'Floods are the world\'s deadliest natural hazard, causing more deaths and economic damage globally than any other geophysical event. A 100-year flood — one with a 1% chance of occurring in any given year — has a 26% chance of occurring at least once in a 30-year mortgage period.',
    },
    {
      type: 'concept',
      title: 'Components of the Snow Hydrological Cycle',
      body: `Snowpack accumulates, ripens, and melts through distinct phases controlled by the energy balance. Each phase has distinct hydrological signatures. Climate change is compressing snowpack duration, shifting melt timing earlier, and increasing rain-on-snow frequency — with major consequences for water supply and flood risk.`,
      cards: [
        {
          name: 'Accumulation',
          icon: Layers,
          color: BRAND.amethyst,
          desc: 'New snow adds to the snowpack. Density: 50-100 kg/m³ for fresh snow, 300-500 kg/m³ for settled pack. SWE = depth × density/ρw.',
          examples: 'Sierra Nevada: April 1 SWE up to 1,500 mm (59.06 in) in exceptional years; current trend: -25% since 1950 due to warming.',
        },
        {
          name: 'Ripening',
          icon: Zap,
          color: BRAND.gold,
          desc: 'Snowpack warms to 0°C (32°F) throughout. Liquid water retained in pore spaces. No melt output until pack is "ripe" (liquid water content ~3-5%).',
          examples: 'A 500 mm (19.69 in) SWE snowpack must absorb ~2.1 MJ/m² of energy just to warm to 0°C (32°F) before any melt runoff occurs.',
        },
        {
          name: 'Melt & Runoff',
          icon: Activity,
          color: BRAND.coral,
          desc: 'Once ripe, 335 kJ/kg needed to melt ice. Energy inputs: net radiation (60-80%), turbulent fluxes, ground heat. Degree-day factor ~3-8 mm/°C/day.',
          examples: 'Colorado River annual flow: ~85% from snowmelt. Peak runoff May-June as Sierra/Rockies melt; timing now 1-4 weeks earlier than 1950.',
        },
        {
          name: 'Rain-on-Snow',
          icon: Globe,
          color: BRAND.ruby,
          desc: 'Warm rain accelerates melt by adding energy (condensation releases 2,500 kJ/kg) and liquid water simultaneously. Highest runoff rates.',
          examples: '1997 California ROS floods: 50 mm (1.97 in) rain on 600 mm (23.62 in) SWE snowpack → $1.6 B damage. Projected to become more frequent as rain-snow line rises.',
        },
        {
          name: 'Permafrost Thaw',
          icon: ArrowRight,
          color: BRAND.jade,
          desc: 'Thawing permafrost creates thermokarst (sink holes, lakes). Alters drainage; releases stored carbon; reduces late-season baseflow.',
          examples: 'Siberian permafrost: 1,700 Gt carbon stored. Warming at 2-3× global average rate. Permafrost lake area declining in continuous zones.',
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
            description: 'Solar energy drives water from ocean surfaces into the atmosphere as water vapour — the primary input to the water cycle. Globally, ~505,000 km³ (121,150 cu mi) evaporate per year from the oceans, equivalent to a global ocean layer ~1.4 m (5 ft) thick. Sea surface temperature directly controls the evaporation rate, making the ocean\'s energy budget central to understanding precipitation patterns and hurricane intensification.',
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
            description: 'Water returns to Earth\'s surface as rain, snow, sleet, or hail when cloud droplets combine into drops large enough to fall. Global average precipitation is ~990 mm/year but distributed very unevenly: tropical rainforests receive >2,000 mm/year while deserts receive <250 mm (9.84 in). The monsoon systems of South and East Asia deliver 70–80% of the year\'s rain in just 3–4 months.',
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
      title: 'Mountain Snowpack: Seasonal Water Storage Cycle',
      body: 'How snowpack accumulates in winter, ripens in spring, and releases meltwater to drive summer river flows.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how winter snowfall accumulates as mountain snowpack, is driven to melt by energy balance inputs, and delivers meltwater through rivers to downstream populations',
        nodes: [
          {
            id: 'winter-snowfall',
            label: 'Winter Snowfall',
            description: 'Cold-season precipitation accumulates as snowpack. Mountain ranges receive 500-3,000 mm (118.11 in) SWE. Acts as frozen reservoir through winter.',
            color: BRAND.amethyst,
          },
          {
            id: 'snowpack-storage',
            label: 'Snowpack Storage',
            description: `Peak SWE typically reached around April 1 in western North America. Integrates the entire winter\'s precipitation. Measured by snow courses, SNOTEL sensors, Landsat.`,
            color: BRAND.accent,
          },
          {
            id: 'energy-inputs',
            label: 'Energy Balance Inputs',
            description: 'Net shortwave radiation dominates (60-80% of melt). Sensible heat from warm air. Latent heat from condensing rain during ROS events. Ground heat flux minor.',
            color: BRAND.gold,
          },
          {
            id: 'snowmelt',
            label: 'Spring Snowmelt',
            description: 'Pack warms to 0°C (ripening), then melts at 335 kJ/kg. Temperature-index models: melt = DDF × (T - 0°C (32°F)). Peak melt: April-June at mid-elevations.',
            color: BRAND.coral,
          },
          {
            id: 'meltwater-flow',
            label: 'Meltwater to Rivers',
            description: 'Meltwater infiltrates soil (if unfrozen) or flows directly to streams. Mountain rivers peak May-July; provides summer baseflow for months after snowpack gone.',
            color: BRAND.jade,
          },
          {
            id: 'downstream-supply',
            label: 'Downstream Water Supply',
            description: '1.9 billion people depend on mountain snowmelt. Irrigation, hydropower, municipal water, and ecosystems all timed to melt schedule. Climate shift = supply timing mismatch.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'winter-snowfall',   to: 'snowpack-storage',  label: 'Accumulation phase' },
          { from: 'energy-inputs',     to: 'snowmelt',          label: 'Drives melting' },
          { from: 'snowpack-storage',  to: 'snowmelt',          label: 'Spring warming' },
          { from: 'snowmelt',          to: 'meltwater-flow',    label: 'Liquid water release' },
          { from: 'meltwater-flow',    to: 'downstream-supply', label: 'River delivery' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What is snow water equivalent (SWE) and why is it used instead of snow depth for water supply forecasting?',
          a: [
            'SWE measures snowpack temperature; used because cold snowpacks contain more usable water than warm ones',
            'SWE is the equivalent liquid water depth if the snowpack melted; used because snow density varies widely (50-500 kg/m³) making depth alone a poor predictor of water volume',
            'SWE is the rate at which snow melts; used to predict river peak flow timing',
            'SWE measures the area covered by snow; used because coverage determines total basin-wide melt volume',
          ],
          correct: 1,
          explain: 'Snow depth tells you how tall the snowpack is, but snow density varies enormously: fresh dendritic snowflakes have density ~50–100 kg/m³ (98% air by volume), while spring corn snow reaches 400–500 kg/m³. A 2 m (7 ft) deep snowpack of light powder contains far less water than a 2 m (7 ft) deep pack of dense spring snow. SWE = snow depth × (snow density / water density), giving the water depth equivalent. For a 1 m (3 ft) deep snowpack with density 300 kg/m³: SWE = 1.0 × (300/1000) = 0.3 m (1 ft) = 300 mm (11.81 in). SNOTEL (SNOpack TELemetry) sensors in the US West automatically measure both depth and SWE (via snow pillow lysimeters) to support seasonal streamflow forecasting.',
        },
        {
          q: 'Why are "mountains" described as "water towers of the world"?',
          a: [
            'Mountains physically tower above surrounding terrain, causing rainwater to flow downhill toward populated valleys',
            'Mountains store winter precipitation as snowpack and glacial ice, releasing it gradually as meltwater during warm, dry seasons when downstream demand is highest',
            'Mountain catchments have near-zero evapotranspiration, so nearly all precipitation becomes river flow',
            'Mountain ranges create orographic precipitation that is 10× greater than lowland rainfall, generating far more water per unit area',
          ],
          correct: 1,
          explain: 'The water tower metaphor captures how mountains function as seasonal freshwater reservoirs. Cold temperatures allow winter precipitation to accumulate as snow and ice rather than running off immediately. This water is then released gradually through spring and summer melt — precisely when lowland areas are driest and irrigation, municipal, and ecosystem demands are highest. Without mountain snowpack, many rivers would peak in winter during wet storms and run nearly dry in summer. The Hindu Kush-Himalaya, Andes, Alps, Tianshan, and Rocky Mountains collectively supply 1.9+ billion people with meltwater-derived freshwater. Climate change is eroding this "tower" by shifting more precipitation from snow to rain and accelerating melt timing.',
        },
        {
          q: 'During a rain-on-snow (ROS) event, why does runoff often exceed both the rain input and the melt rate individually?',
          a: [
            'Rain changes the albedo of snow from white to dark, dramatically increasing solar energy absorption',
            'Rain adds liquid water directly while simultaneously releasing latent heat during condensation (2,500 kJ/kg) that accelerates snowmelt, and both fluxes combine',
            'Rain compacts the snowpack, reducing its permeability and forcing water to flow over the surface',
            'Snow absorbs rainfall into its crystal matrix, then releases both simultaneously when the pack collapses',
          ],
          correct: 1,
          explain: 'ROS events produce extreme runoff through two simultaneous processes: (1) the rainfall itself adds liquid water directly — 50 mm (1.97 in) of rain is 50 mm (1.97 in) of runoff potential; (2) when warm, moist air meets the cold snowpack, water vapour condenses on the snow surface, releasing ~2,500 kJ/kg of latent heat. This condensation energy is far more effective at melting snow than the same mass of rainfall would be through sensible heat exchange. Together, the direct rainfall plus accelerated snowmelt can generate 100–200 mm (7.87 in) of runoff in 24–48 hours. This is why ROS events in mountainous terrain produce some of the highest-magnitude floods on record.',
        },
        {
          q: 'How does warming climate affect mountain snowpack and downstream water availability?',
          a: [
            'Warmer temperatures increase evaporation from snowpack, concentrating minerals and improving water quality',
            'Warming shifts precipitation from snow to rain, reduces peak SWE, advances melt timing, and may cause summer streamflow deficits when historical melt would have still been occurring',
            'Higher temperatures increase vegetation growth in mountains, which intercepts more rain and reduces erosion',
            'Climate warming makes snowpack denser and more stable, extending the melt season further into summer',
          ],
          correct: 1,
          explain: 'Climate warming has multiple compounding effects on mountain hydrology: (1) rising temperatures shift the rain-snow transition elevation upward, reducing the area receiving snow and increasing winter rain runoff that cannot be stored; (2) where snow still falls, the pack is thinner and less dense, reducing peak SWE; (3) warmer springs advance the melt onset by 1–4 weeks in many ranges, shifting peak river flows earlier by weeks to over a month; (4) by mid-summer, rivers that historically received ongoing melt input may run nearly dry once the earlier-melting snowpack is gone. This timing mismatch — peak supply moving earlier while peak demand (irrigation, hot dry season) stays the same — is one of the most significant water security impacts of climate change.',
        },
        {
          q: 'Permafrost underlies approximately what fraction of Northern Hemisphere land area, and what is one major hydrological consequence of its thawing?',
          a: [
            'About 5%; thawing creates small isolated wetlands with negligible hydrological impact',
            'About 25%; thawing creates thermokarst landscapes (sinkholes, irregular lakes), alters drainage patterns, and reduces late-season baseflow in mountain streams',
            'About 50%; thawing completely drains all Arctic lakes and rivers as water seeps into the newly opened subsurface',
            'About 75%; thawing dramatically increases spring flooding by releasing centuries of stored water simultaneously',
          ],
          correct: 1,
          explain: 'Permafrost underlies ~25% of the Northern Hemisphere land surface — most of Siberia, northern Canada, Alaska, and high mountain regions. Where permafrost is continuous and shallow, it acts as an impermeable layer that keeps water near the surface, maintaining wetlands, lakes, and a shallow active layer. As permafrost thaws, several hydrological changes occur: (1) thermokarst formation — ground ice melts, causing subsidence, ponds, and irregular microtopography; (2) drainage changes — some lakes drain as water escapes through newly-opened pathways; others grow; (3) reduced late-season baseflow in glaciated mountain rivers as permafrost no longer releases stored water slowly; (4) increased dissolved organic carbon and nutrient export to Arctic rivers and the ocean, affecting coastal ecosystems and contributing to climate feedback through CO₂ and methane release.',
        },
      ],
    },
  ],
}

export default snowHydrology
