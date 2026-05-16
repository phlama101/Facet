import { Globe, Layers, Activity, Zap, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const precipitationET: Lesson = {
  id: 'hyd-101-1-1-2',
  title: 'Precipitation, Evapotranspiration, and the Energy Balance',
  track: 'geo',
  trackName: 'Hydrology',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 120,
  description: 'Precipitation is the primary freshwater input to land surfaces, delivered by convective, orographic, and frontal mechanisms. Evapotranspiration returns ~65% of that water to the atmosphere — governed by the Penman-Monteith equation and described globally by the Budyko framework.',
  sources: [
    { org: 'NOAA',  title: 'NOAA — Precipitation Education',                              url: 'https://www.noaa.gov/education/resource-collections/weather-atmosphere/precipitation' },
    { org: 'USGS',  title: 'USGS — Evapotranspiration and the Water Cycle',               url: 'https://www.usgs.gov/special-topics/water-science-school/science/evapotranspiration-and-water-cycle' },
    { org: 'FAO',   title: 'FAO — Crop Evapotranspiration Guidelines (FAO-56)',            url: 'https://www.fao.org/3/x0490e/x0490e00.htm' },
    { org: 'NASA',  title: 'NASA — TRMM and GPM Precipitation Missions',                  url: 'https://gpm.nasa.gov/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'From orographic uplift to the Penman-Monteith equation: where water enters and leaves the land surface',
      body: `Precipitation begins when water vapour in rising air cools to the dewpoint and condenses onto tiny aerosol particles — condensation nuclei — to form cloud droplets that grow until they fall. Three main mechanisms lift air to the dewpoint: convective lifting (instability-driven; typical of tropical thunderstorms and afternoon showers), orographic lifting (forced ascent over mountain barriers; produces 5,000+ mm/yr in windward ranges like the Western Ghats and Hawaiian Ko\'olau), and frontal/cyclonic lifting (lifting along weather fronts and within extratropical cyclones). Global mean precipitation is about 990 mm/yr over land, but with extreme variability: the Atacama Desert receives < 0.1 mm/yr while Cherrapunji, India received 26,470 mm (1042.12 in) in a single year (1861).

Evapotranspiration (ET) is the combined flux of water vapour from land surfaces — including direct evaporation from soil, open water, and wet canopies, plus transpiration through plant stomata. ET accounts for ~73,000 km³ (17,513 cu mi)/yr globally — about 65% of all land precipitation returns directly to the atmosphere this way. In humid climates ET is energy-limited; in arid climates it is water-limited. The Penman-Monteith equation (1948, adopted as FAO standard in 1998) is the accepted method for calculating reference ET from meteorological variables — net radiation, air temperature, wind speed, and vapour pressure deficit — and forms the basis for irrigation scheduling worldwide.

The water balance equation links these fluxes: precipitation (P) equals evapotranspiration (ET) plus runoff (Q) plus the change in storage (ΔS), or P = ET + Q + ΔS. Over long time periods, storage change averages to near zero and the equation simplifies to: precipitation is partitioned between what evapotranspires and what runs off. Globally, about 65% of land precipitation evapotranspires and ~35% becomes river discharge. The Budyko framework describes this partitioning as a function of the aridity index (PET/P): in humid catchments the ratio of actual ET to precipitation approaches 1.0; in hyper-arid ones it falls toward 0.

Remote sensing has transformed precipitation and ET measurement. NASA\'s Global Precipitation Measurement (GPM) mission (launched 2014, successor to TRMM) provides near-global precipitation estimates at 0.1° × 0.1° resolution every 30 minutes by combining active radar measurements (DPR) with passive microwave radiometry from a constellation of satellites. For ET, eddy covariance flux towers (FLUXNET network: >900 sites globally) measure vertical turbulent fluxes of water vapour and CO₂ directly, while remote sensing algorithms (MODIS MOD16, SSEBop, SEBS) estimate ET from land surface temperature, vegetation indices, and meteorological reanalyses at regional to global scales.`,
      keyTerms: [
        {
          term: 'Orographic Precipitation',
          def: 'Precipitation caused by forced lifting of moist air over mountain barriers; creates dramatic wet/dry contrasts across ranges.',
        },
        {
          term: 'Penman-Monteith Equation',
          def: 'FAO standard method to calculate reference ET (ET₀) from net radiation, temperature, wind speed, and vapour pressure deficit.',
        },
        {
          term: 'Potential ET (PET)',
          def: 'Maximum possible evapotranspiration with unlimited water; energy-limited. Actual ET ≤ PET always.',
        },
        {
          term: 'Vapour Pressure Deficit (VPD)',
          def: 'Difference between saturation vapour pressure and actual vapour pressure of air; drives evapotranspiration.',
        },
        {
          term: 'Budyko Framework',
          def: 'Describes AET/P as a function of aridity index (PET/P); predicts how much precipitation evapotranspires vs runs off.',
        },
      ],
    },
    {
      type: 'callout' as const,
      variant: 'fact',
      headline: 'The Amazon River discharges about 20% of all freshwater entering the world\'s oceans',
      body: 'The Amazon River discharges about 20% of all freshwater entering the world\'s oceans — roughly 209,000 cubic metres per second. The Amazon\'s plume of freshwater extends 200 km (124 mi) into the Atlantic Ocean and is detectable by satellite as a band of lower salinity.',
    },
    {
      type: 'concept',
      title: 'Three Precipitation Mechanisms',
      body: `Most precipitation results from air cooling below the dewpoint during ascent. The three lifting mechanisms produce distinct spatial and temporal patterns of rainfall — orographic produces persistent windward enhancement; convective produces intense but localised events; frontal produces widespread but moderate rainfall.`,
      cards: [
        {
          name: 'Convective',
          icon: Zap,
          color: BRAND.coral,
          desc: 'Unstable air rises rapidly. Short, intense precipitation. Afternoon peaks in tropics and continental interiors.',
          examples: `Amazon basin: 2,000-3,000 mm/yr convective rainfall. ITCZ receives most of world\'s convective rain.`,
        },
        {
          name: 'Orographic',
          icon: Layers,
          color: BRAND.jade,
          desc: 'Moist air forced over mountains. Windward wet, leeward dry (rain shadow). Can produce extreme annual totals.',
          examples: 'Cherrapunji, India: 11,430 mm (450.00 in) annual avg (record year: 26,470 mm (1042.12 in)). Death Valley rain shadow: ~60 mm/yr.',
        },
        {
          name: 'Frontal/Cyclonic',
          icon: ArrowRight,
          color: BRAND.gold,
          desc: 'Lifting along weather fronts and within mid-latitude cyclones. Widespread, moderate intensity precipitation.',
          examples: 'UK and NW Europe: 600-1,500 mm/yr from frontal systems. Pacific Northwest: 1,000-3,000 mm (118.11 in) in Cascades.',
        },
        {
          name: 'Penman-Monteith',
          icon: Activity,
          color: BRAND.amethyst,
          desc: 'ET₀ = f(Rn, T, u₂, VPD). FAO-56 standard. Multiply by crop coefficient (Kc) for actual crop water demand.',
          examples: 'California Central Valley wheat: ET₀ ≈ 5 mm/day in June. Irrigation scheduling saves 20-30% water vs fixed schedules.',
        },
        {
          name: 'Budyko Curve',
          icon: Globe,
          color: BRAND.accent,
          desc: 'AET/P = f(PET/P). Humid: water-limited (AET≈P). Arid: energy-limited (AET≈PET). Global mean AET/P ≈ 0.65.',
          examples: 'Congo basin (humid): AET/P ≈ 0.65. Sahel: AET/P ≈ 0.95 (nearly all rain evapotranspires). Arctic tundra: AET/P ≈ 0.4.',
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
      title: 'Water Movement at the Land Surface: Energy and Water Balance',
      body: 'How solar energy and moisture availability jointly control evapotranspiration and runoff generation.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how solar radiation and precipitation drive evapotranspiration, soil moisture storage, and runoff generation at the land surface',
        nodes: [
          {
            id: 'solar-input',
            label: 'Solar Radiation Input',
            description: 'Global mean ~340 W/m² incoming solar. About 30% reflected (albedo). Net radiation Rn drives ET and warms land surface.',
            color: BRAND.gold,
          },
          {
            id: 'precipitation',
            label: 'Precipitation',
            description: 'Convective, orographic, or frontal. Global land mean ~990 mm/yr. Highly variable: <0.1 mm/yr (Atacama) to >10,000 mm/yr (windward tropics).',
            color: BRAND.accent,
          },
          {
            id: 'interception',
            label: 'Canopy Interception',
            description: 'Forest canopies intercept 15-40% of precipitation. Intercepted water evaporates directly (throughfall and stemflow deliver rest to soil).',
            color: BRAND.jade,
          },
          {
            id: 'evapotranspiration',
            label: 'Evapotranspiration',
            description: 'Combined soil evaporation + transpiration. Returns ~65% of land precipitation to atmosphere. PET limited by Rn; AET limited by water availability.',
            color: BRAND.coral,
          },
          {
            id: 'soil-storage',
            label: 'Soil Moisture',
            description: 'Soil stores 0-400+ mm of plant-available water. Controls partitioning between ET and runoff. Replenished by infiltration; depleted by ET and drainage.',
            color: BRAND.ruby,
          },
          {
            id: 'runoff',
            label: 'Runoff & Streamflow',
            description: 'Remainder after ET and soil storage. ~35% of global land precipitation (~38,000 km³ (9,116 cu mi)/yr) leaves as river discharge to the ocean.',
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'solar-input',       to: 'evapotranspiration', label: 'Provides latent heat energy' },
          { from: 'precipitation',     to: 'interception',       label: 'Canopy captures 15-40%' },
          { from: 'precipitation',     to: 'soil-storage',       label: 'Infiltration to soil' },
          { from: 'interception',      to: 'evapotranspiration', label: 'Direct evaporation' },
          { from: 'soil-storage',      to: 'evapotranspiration', label: 'Root water uptake' },
          { from: 'soil-storage',      to: 'runoff',             label: 'Drainage when soil saturated' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What causes orographic precipitation and where is it most intense?',
          a: [
            'Orographic precipitation is caused by coastal sea breezes; most intense on flat coastal plains',
            'Moist air forced to rise over mountain barriers cools and condenses; most intense on windward slopes of mountain ranges in moist climates',
            'Solar heating of mountain peaks creates updrafts; most intense on equator-facing slopes in summer',
            'Orographic precipitation forms when cold fronts stall at mountain ranges; only occurs in winter',
          ],
          correct: 1,
          explain: `Orographic precipitation occurs when horizontally moving moist air encounters a topographic barrier and is forced to rise. As it ascends, the air cools at the dry adiabatic lapse rate (~9.8°C/km) until saturation, then at the moist adiabatic rate (~6°C/km). Condensation forms clouds and precipitation on the windward slope. The descending air on the leeward side warms and dries — creating rain shadows. Cherrapunji, India (mean ~11,430 mm/yr) and the Ko\'olau Range in Hawaii both experience intense orographic rainfall from moist trade winds. The Pacific Northwest Cascades, Olympic Peninsula, and the western Western Ghats are other examples of extreme orographic precipitation.`,
        },
        {
          q: 'What is the Penman-Monteith equation used to calculate?',
          a: [
            'Total annual precipitation at a meteorological station from atmospheric sounding data',
            'Reference evapotranspiration (ET₀) from meteorological variables including net radiation, temperature, wind speed, and vapour pressure deficit',
            'Groundwater recharge rate from soil permeability and rainfall intensity data',
            'Runoff volume from a watershed during a single storm event using the rational method',
          ],
          correct: 1,
          explain: 'The Penman-Monteith (PM) equation combines the energy balance (net radiation drives latent heat flux) with an aerodynamic resistance term (vapour pressure deficit and wind speed drive atmospheric vapour demand) to compute reference evapotranspiration ET₀. The FAO-56 version (Allen et al., 1998) standardises ET₀ for a hypothetical 0.12 m (0 ft) tall grass reference surface. To get actual crop ET, multiply ET₀ by a crop coefficient Kc that accounts for crop type (deep-rooted vs shallow), phenological stage, and local practices. This method underpins agricultural water management on every irrigated continent.',
        },
        {
          q: 'In the Budyko framework, what happens to actual evapotranspiration (AET) when aridity index (PET/P) is very high (> 3)?',
          a: [
            'AET increases because more solar energy is available to drive evaporation',
            'AET approaches precipitation (P) — almost all rain evapotranspires and very little becomes runoff',
            'AET decreases to near zero because plants close stomata in hot dry conditions',
            'AET equals PET because the aridity index is no longer relevant above a threshold of 2',
          ],
          correct: 1,
          explain: 'In the Budyko curve, when aridity index PET/P >> 1, the system is water-limited: almost all available precipitation is consumed by evapotranspiration and very little remains as runoff. AET/P approaches 1.0 (100% of rain evapotranspires). This is the condition in semi-arid to arid regions like the Sahel, where annual rainfall is 300–500 mm (19.69 in) but PET exceeds 2,000 mm (78.74 in) — every drop of rain either evapotranspires or soaks into the dry soil. Conversely, when PET/P << 1 (very humid climates), the system is energy-limited: even though water is abundant, there is only enough solar energy to evaporate a fraction of it, and the rest becomes runoff.',
        },
        {
          q: 'What advantage does the GPM (Global Precipitation Measurement) satellite mission provide over rain gauges?',
          a: [
            'GPM measures precipitation at the exact same locations as historical rain gauges, improving long-term records',
            'GPM provides near-global coverage at high temporal resolution (every 30 min), measuring over oceans and data-sparse land areas where gauges are absent',
            'GPM eliminates uncertainty in precipitation measurement because satellite radar is more accurate than ground instruments',
            'GPM specifically measures soil moisture directly, from which precipitation can be calculated',
          ],
          correct: 1,
          explain: `Traditional rain gauges sample only the point where they are located. Networks are dense in populated regions but sparse over oceans, rainforests, polar areas, and developing nations — covering only a tiny fraction of Earth\'s surface. GPM\'s core satellite combines a dual-frequency precipitation radar (DPR) measuring vertical structure of precipitation with passive microwave radiometers. Combined with a constellation of partner satellites, GPM estimates precipitation at 0.1° × 0.1° spatial resolution every 30 minutes globally. This near-global coverage is essential for understanding global water fluxes, improving weather forecasting, and studying climate change effects on precipitation patterns — especially over the 70% of Earth covered by ocean.`,
        },
        {
          q: 'In a humid climate watershed receiving 1,200 mm/yr of precipitation, approximately how much becomes annual streamflow?',
          a: [
            'Nearly all 1,200 mm (47.24 in) — humid climates have near-zero evapotranspiration',
            'About 35-40% (~420-480 mm (18.90 in)) — the rest evapotranspires back to the atmosphere',
            'About 5% (~60 mm (2.36 in)) — most moisture is stored in the soil permanently',
            'Exactly 50% (600 mm (23.62 in)) in all humid climates regardless of vegetation type',
          ],
          correct: 1,
          explain: 'The Budyko framework and global water balance both indicate that globally about 65% of land precipitation returns to the atmosphere as evapotranspiration, leaving ~35% as runoff and groundwater discharge. For a humid temperate watershed receiving 1,200 mm/yr, a typical ET of 600–700 mm/yr (driven by available solar energy, roughly 1,200–1,500 MJ/m²/yr in temperate latitudes) would leave 500–600 mm/yr as streamflow and groundwater recharge. Actual ratios vary by vegetation type (forests ET more than grasslands), soil depth, and aspect. Tropical humid forests can ET 70–80% of precipitation; boreal forests and tundra ET only 40–50%.',
        },
      ],
    },
  ],
}

export default precipitationET
