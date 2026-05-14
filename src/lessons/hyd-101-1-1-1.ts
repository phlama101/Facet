import { Globe, Layers, ArrowRight, Zap, Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const globalWaterCycle: Lesson = {
  id: 'hyd-101-1-1-1',
  title: 'The Global Water Cycle and Water Budget',
  track: 'geo',
  trackName: 'Hydrology',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 120,
  description: `97% ocean, 2% ice, 0.01% rivers: following a water molecule through Earth\'s endless cycle`,
  sources: [
    { org: 'USGS',  title: 'USGS — The Water Cycle',               url: 'https://www.usgs.gov/special-topics/water-science-school/science/water-cycle' },
    { org: 'NOAA',  title: 'NOAA — Water Cycle',                   url: 'https://oceanservice.noaa.gov/facts/water-cycle.html' },
    { org: 'NASA',  title: 'NASA GRACE — Global Water Storage',    url: 'https://grace.jpl.nasa.gov/' },
    { org: 'WMO',   title: 'WMO — Global Water Resources',         url: 'https://public.wmo.int/en/our-mandate/water' },
  ],
  sections: [
    {
      type: 'intro',
      title: `97% ocean, 2% ice, 0.01% rivers: following a water molecule through Earth\'s endless cycle`,
      body: `Water is Earth\'s most abundant surface compound and the foundation of all known life. Of the approximately 1.386 billion km³ of water on Earth, 97.5% is saline ocean water and only 2.5% is fresh. Of that freshwater, 68.9% is locked in ice caps and glaciers, 30.8% is groundwater, and only 0.3% flows through rivers, lakes, and streams — the surface freshwater that most land life depends on. The atmosphere holds another 12,900 km³ of water vapour, equivalent to a global layer just 25 mm deep, yet this tiny reservoir drives the entire precipitation-evaporation cycle.

The water cycle (hydrological cycle) describes the continuous movement of water through Earth\'s reservoirs via evaporation, condensation, precipitation, runoff, and infiltration. Solar energy powers the cycle: roughly 86,000 km³ of water evaporates from the oceans each year, while 78,000 km³ falls back as ocean precipitation. The net transport to land — about 8,000 km³/year — balances the river and groundwater discharge back to the sea. The water balance equation summarises this at any watershed scale: Precipitation (P) = Evapotranspiration (ET) + Streamflow (Q) + Change in Storage (ΔS). Over a long average, ΔS ≈ 0 and P = ET + Q.

Residence time — the average time a water molecule spends in each reservoir — varies enormously. Ocean water has a mean residence time of ~3,200 years; deep groundwater can exceed 10,000 years; glacial ice in Antarctica averages ~20,000 years (with some ice dated to 800,000 years). In contrast, soil moisture turns over in weeks, rivers in ~16 days, and water vapour in the atmosphere in just ~8–9 days. Short residence times mean rapid cycling: a water molecule evaporated from the tropical Pacific may precipitate over the Amazon within a week.

Human activities have significantly altered the water cycle. Dams store ~10,000 km³ of water in reservoirs — equivalent to 10% of all river discharge — delaying flow and trapping sediment. Groundwater extraction (now ~1,000 km³/year globally) depletes aquifers faster than recharge. Urbanisation increases impermeable surfaces, raising runoff and reducing infiltration. Irrigation returns water to the atmosphere via evapotranspiration, shifting regional precipitation patterns. NASA\'s GRACE satellite mission (2002–2017) and GRACE-FO (2018–present) track these changes by measuring tiny variations in Earth\'s gravitational field caused by shifting water mass, revealing aquifer depletion in the Ganges basin, the High Plains, and the Middle East.`,
      keyTerms: [
        {
          term: 'Water Balance',
          def: 'P = ET + Q + ΔS. Precipitation equals evapotranspiration plus streamflow plus change in water storage.',
        },
        {
          term: 'Residence Time',
          def: 'Average time a water molecule spends in a reservoir. Ocean: ~3,200 yr; rivers: ~16 days; atmosphere: ~8 days.',
        },
        {
          term: 'Evapotranspiration (ET)',
          def: 'Combined water flux from direct evaporation and plant transpiration back to the atmosphere.',
        },
        {
          term: 'GRACE',
          def: 'Gravity Recovery and Climate Experiment; satellite mission measuring water storage changes via gravitational anomalies.',
        },
        {
          term: 'Hydrological Cycle',
          def: 'Continuous movement of water through ocean, atmosphere, land surface, and subsurface reservoirs powered by solar energy.',
        },
      ],
    },
    {
      type: 'callout' as const,
      variant: 'data',
      headline: 'The global water cycle moves about 505,000 km³ of water per year',
      body: 'The global water cycle moves about 505,000 km³ of water per year — equivalent to evaporating and reprecipitating the entire volume of the Baltic Sea every 7 days. Of all Earth\'s water, only 2.5% is fresh, and two-thirds of that is locked in glaciers and ice caps.',
    },
    {
      type: 'concept',
      title: `Earth\'s Water Reservoirs`,
      body: `The global water budget is dominated by the ocean. Each terrestrial reservoir has a characteristic size, residence time, and role in the cycle. Residence time determines how quickly a reservoir responds to climate change — fast reservoirs (soil moisture, atmosphere) respond in weeks; slow reservoirs (deep groundwater, ice sheets) respond over centuries to millennia.`,
      cards: [
        {
          name: 'Ocean',
          icon: Globe,
          color: BRAND.accent,
          desc: 'Holds 97.5% of all water. Mean residence ~3,200 yr. Drives evaporation that feeds all precipitation over land.',
          examples: 'Mediterranean nearly dried out 5.9 Ma (Messinian Salinity Crisis) — then refilled in as little as ~1,000 years.',
        },
        {
          name: 'Ice & Glaciers',
          icon: Layers,
          color: BRAND.amethyst,
          desc: '2.1% of total water; 68.9% of freshwater. Full melt would raise sea level ~65 m. Antarctic ice up to 800,000 yr old.',
          examples: 'GRACE shows Greenland losing ~280 Gt/yr of ice mass since 2002, contributing ~0.7 mm/yr to sea level rise.',
        },
        {
          name: 'Groundwater',
          icon: ArrowRight,
          color: BRAND.jade,
          desc: '30.8% of freshwater; 0.6% of all water. Recharge takes decades to millennia. Provides 30% of global river baseflow.',
          examples: 'High Plains (Ogallala) Aquifer: ~3,600 km³ storage. Declining 1-3 m/yr in heavily pumped areas of Kansas, Texas.',
        },
        {
          name: 'Soil Moisture',
          icon: Zap,
          color: BRAND.gold,
          desc: 'Small volume (0.001% total) but critical for plant growth and evapotranspiration. Residence: days to weeks.',
          examples: 'SMAP satellite maps global soil moisture at 9 km resolution every 2-3 days. Drives agricultural water use forecasts.',
        },
        {
          name: 'Rivers & Lakes',
          icon: Activity,
          color: BRAND.coral,
          desc: '0.3% of freshwater; just 0.0001% of total water. Residence ~16 days. Critical for human supply despite tiny volume.',
          examples: 'Amazon River alone carries ~17% of all river discharge to ocean. Lake Baikal holds 22% of global unfrozen surface freshwater.',
        },
      ],
      interaction: {
        type: 'annotated-image' as const,
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Water_cycle.png/1200px-Water_cycle.png',
        alt: 'Diagram of the global water cycle showing evaporation, cloud formation, precipitation, runoff, and groundwater processes',
        aspectRatio: '16/9',
        credit: 'Wikimedia Commons',
        annotations: [
          {
            id: 'evaporation',
            x: 20,
            y: 65,
            label: 'Ocean Evaporation',
            description: 'The ocean surface is the primary source of evaporation, supplying ~86,000 km³ of water vapour to the atmosphere each year — driven by solar energy.',
          },
          {
            id: 'cloud-formation',
            x: 40,
            y: 25,
            label: 'Cloud Formation',
            description: 'Water vapour rises, cools, and condenses around aerosol particles to form clouds. The atmosphere holds ~12,900 km³ of water vapour at any one time, with a residence time of just 8–9 days.',
          },
          {
            id: 'precipitation',
            x: 55,
            y: 40,
            label: 'Precipitation',
            description: 'Rain and snow fall when cloud droplets coalesce. Global land precipitation averages ~111,000 km³/yr; ~78,000 km³/yr falls back over the ocean.',
          },
          {
            id: 'surface-runoff',
            x: 65,
            y: 70,
            label: 'Surface Runoff',
            description: 'Excess precipitation flows over the land surface into streams and rivers, carrying ~38,000 km³/yr of water back to the ocean as river discharge.',
          },
          {
            id: 'groundwater',
            x: 75,
            y: 75,
            label: 'Groundwater Infiltration',
            description: 'Water percolates through soil and rock to recharge groundwater aquifers, which store ~10.5 million km³ of freshwater and sustain river baseflow between storms.',
          },
        ],
      },
    },
    {
      type: 'visualization',
      title: 'The Global Water Cycle: Fluxes and Reservoirs',
      body: `Follow the major water fluxes connecting Earth\'s reservoirs, with volumes and transfer rates.`,
      interaction: {
        type: 'flow-simulator' as const,
        description: `Follow the major water fluxes connecting Earth\'s reservoirs, with volumes and transfer rates.`,
        nodes: [
          {
            id: 'ocean',
            label: 'Ocean',
            description: '1,338,000,000 km³ of water. Receives 78,000 km³/yr precipitation; loses 86,000 km³/yr to evaporation. Net export to land: 8,000 km³/yr.',
            color: BRAND.accent,
          },
          {
            id: 'atmosphere',
            label: 'Atmosphere',
            description: '12,900 km³ of water vapour — ~8-9 day residence time. Annual throughput: ~496,000 km³ (evaporation + precipitation globally).',
            color: BRAND.jade,
          },
          {
            id: 'land-surface',
            label: 'Land Surface',
            description: 'Receives ~111,000 km³/yr precipitation. Loses ~73,000 km³/yr to ET and ~38,000 km³/yr as runoff/discharge.',
            color: BRAND.gold,
          },
          {
            id: 'groundwater',
            label: 'Groundwater',
            description: '10,530,000 km³ — largest liquid freshwater reservoir. Recharge from land: ~13,000 km³/yr. Discharge to rivers and ocean.',
            color: BRAND.coral,
          },
          {
            id: 'ice-cryosphere',
            label: 'Ice & Cryosphere',
            description: '26,350,000 km³. Long-term store; melting accelerating. Greenland: -280 Gt/yr; Antarctica: -150 Gt/yr (GRACE-FO).',
            color: BRAND.amethyst,
          },
          {
            id: 'rivers-lakes',
            label: 'Rivers & Lakes',
            description: '93,100 km³. Annual river discharge to ocean: ~38,000 km³/yr. Critical freshwater supply despite tiny fraction of total.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'ocean',          to: 'atmosphere',    label: 'Evaporation 86,000 km³/yr' },
          { from: 'atmosphere',     to: 'ocean',         label: 'Precipitation 78,000 km³/yr' },
          { from: 'atmosphere',     to: 'land-surface',  label: 'Precipitation 111,000 km³/yr' },
          { from: 'land-surface',   to: 'atmosphere',    label: 'Evapotranspiration 73,000 km³/yr' },
          { from: 'land-surface',   to: 'groundwater',   label: 'Infiltration & recharge' },
          { from: 'land-surface',   to: 'rivers-lakes',  label: 'Surface runoff' },
          { from: 'groundwater',    to: 'rivers-lakes',  label: 'Baseflow discharge' },
          { from: 'rivers-lakes',   to: 'ocean',         label: 'River discharge 38,000 km³/yr' },
          { from: 'ice-cryosphere', to: 'ocean',         label: 'Meltwater & calving' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: `What percentage of Earth\'s total water is accessible as liquid freshwater in rivers and lakes?`,
          a: [
            'About 30% of total water',
            'About 2.5% of total water',
            'About 0.01% of total water',
            'About 0.3% of total freshwater only',
          ],
          correct: 2,
          explain: `Of Earth\'s ~1.386 billion km³ of total water, only 2.5% is fresh. Of that freshwater, 68.9% is in ice and glaciers, 30.8% is groundwater, and less than 0.9% is accessible surface and atmospheric fresh water. Rivers and lakes together contain only about 0.3% of all freshwater — or roughly 0.0075% of all water on Earth (~93,100 km³). Despite this tiny fraction, rivers supply most of humanity\'s water and support vast freshwater ecosystems. This extreme scarcity of accessible freshwater is why water security is one of the defining challenges of the 21st century.`,
        },
        {
          q: 'The water balance equation P = ET + Q + ΔS means that over a long time average for a watershed, what is true?',
          a: [
            'Precipitation always exceeds evapotranspiration in every watershed',
            'Change in storage averages to zero, so precipitation equals ET plus streamflow',
            'Streamflow equals evapotranspiration in all humid climates',
            'The equation only applies to ocean basins, not land watersheds',
          ],
          correct: 1,
          explain: `The water balance equation P = ET + Q + ΔS states that all precipitation must go somewhere: it either evapotranspires back to the atmosphere (ET), leaves as streamflow or groundwater discharge (Q), or is stored in the watershed (soil moisture, groundwater, snowpack, lakes). Over a long time average, ΔS ≈ 0 because storage cannot grow or shrink indefinitely — what fills must eventually empty. This gives the steady-state form P = ET + Q, which is the basis for estimating streamflow from climate data and for understanding how land-use changes (more ET from irrigation, less ET from deforestation) alter river discharge.`,
        },
        {
          q: 'Which reservoir has the shortest water residence time?',
          a: [
            'Deep ocean water',
            'Glacial ice in Antarctica',
            'Water vapour in the atmosphere',
            'Groundwater in deep confined aquifers',
          ],
          correct: 2,
          explain: `Residence time is the ratio of reservoir volume to throughput rate. The atmosphere holds ~12,900 km³ of water vapour, while global evaporation/precipitation is ~496,000 km³/yr — a ratio of only 12,900/496,000 ≈ 0.026 years ≈ 9 days. This extremely short residence time means atmospheric water turns over rapidly, with water vapour evaporated from the tropical oceans potentially precipitating within a week. In contrast, deep groundwater has residence times of thousands of years, Antarctic ice averages ~20,000 years (some ice is 800,000 years old), and ocean water averages ~3,200 years.`,
        },
        {
          q: 'How does the NASA GRACE satellite mission detect changes in groundwater storage?',
          a: [
            'By photographing groundwater-fed springs and wetlands from orbit',
            'By measuring tiny variations in Earth\'s gravitational field caused by shifting water mass',
            'By using radar to image aquifer depths through the soil',
            'By tracking evaporation rates from reservoir surfaces via infrared sensors',
          ],
          correct: 1,
          explain: `GRACE (Gravity Recovery and Climate Experiment, 2002–2017) and its successor GRACE-FO (2018–present) use two satellites flying in formation ~220 km apart. As the pair passes over a region with more or less mass than average, the gravitational pull changes the distance between the satellites by nanometres. By precisely measuring these inter-satellite distance changes using microwave ranging, GRACE reconstructs maps of Earth\'s gravitational field changes over time. Because water is dense and its redistribution is the dominant cause of month-to-month gravity field changes, GRACE effectively measures changes in total water storage (ice, groundwater, surface water, soil moisture) with ~1 cm water-equivalent accuracy averaged over ~300 km regions.`,
        },
        {
          q: 'What is the primary driver of the global water cycle?',
          a: [
            'Earth\'s internal heat conducting through the crust and warming ocean water',
            'Solar energy that evaporates water from ocean and land surfaces',
            'Gravitational tidal forces from the Moon pulling water vapour into the atmosphere',
            'Geothermal springs and hydrothermal vents releasing water from Earth\'s interior',
          ],
          correct: 1,
          explain: `Solar energy is the engine of the water cycle. About 23% of the solar energy reaching Earth\'s surface is used to evaporate water — transforming it from liquid to vapour. This latent heat is stored in water vapour and released when it condenses to form clouds and precipitation, driving atmospheric circulation and powering storms. Without solar energy, evaporation would cease and the water cycle would stop. Earth\'s internal heat plays a negligible role in the surface water cycle, contributing only through hydrothermal vents (a tiny flux) and volcanic outgassing (< 1 km³/yr, negligible compared to the 496,000 km³/yr evaporation-precipitation cycle).`,
        },
      ],
    },
  ],
}

export default globalWaterCycle
