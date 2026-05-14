import { Globe, Layers, Activity, Zap, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const cryosphereHydrology: Lesson = {
  id: 'hyd-201-1-3-3',
  title: 'Cryosphere-Hydrology Interactions',
  track: 'geo',
  trackName: 'Advanced Hydrology',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: 'Snow, glaciers, and permafrost as natural water reservoirs — how their retreat is reshaping streamflow timing, downstream water security, and flood hazard across mountain and polar watersheds.',
  sources: [
    { org: 'USDA',   title: 'NRCS SNOTEL Network — Snowpack Data',                                                  url: 'https://www.nrcs.usda.gov/wps/portal/wcc/home/snowClimateMonitoring/' },
    { org: 'IPCC',   title: 'IPCC Special Report on the Ocean and Cryosphere in a Changing Climate (SROCC)',         url: 'https://www.ipcc.ch/srocc/' },
    { org: 'ICIMOD', title: 'ICIMOD — Hindu Kush Himalaya Assessment Report',                                        url: 'https://www.icimod.org/what-we-do/mountain-environment/cryosphere/' },
    { org: 'USGS',   title: 'USGS — Rain-on-Snow Events and Flooding',                                              url: 'https://www.usgs.gov/news/featured-story/rain-snow-flooding' },
    { org: 'WMO',    title: 'WMO — Global Cryosphere Watch',                                                        url: 'https://globalcryospherewatch.org/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Snow and ice as natural water towers: how cryosphere change is reshaping river flows from the Sierras to the Himalayas',
      body: `The cryosphere — the frozen portion of the Earth system — functions as a vast natural reservoir that stores winter precipitation and releases it as meltwater during the warm season, supplementing streamflow precisely when other sources are at their lowest. Snowpack, glaciers, and permafrost each regulate hydrology through distinct mechanisms and on different timescales, and all three are undergoing rapid change under anthropogenic warming.

Snowpack is the most important natural reservoir for water supply in mid-latitude mountain watersheds. In the western United States, approximately 70% of annual streamflow derives from snowmelt. The SNOTEL (Snow Telemetry) network of over 800 automated monitoring stations, supplemented by airborne gamma-ray snow water equivalent (SWE) surveys and MODIS satellite snow-cover mapping, tracks snowpack across the western US in near real time. April 1 snowpack — the traditional date for peak snow water equivalent — has declined significantly: Sierra Nevada −20 to −30% since 1950, Cascades −15 to −25%, with mixed trends in the Rockies depending on elevation and aspect. These declines reflect not only reduced total precipitation but also the shift from snow to rain at lower elevations and the earlier onset of melt due to warming springs.

Glaciers act as multi-year to multi-century water reservoirs. The "peak water" concept describes a three-phase trajectory of glacierised watersheds: Phase 1, when glacier mass balance is positive or only slightly negative, sees enhanced summer meltwater as an increasing fraction of ice is exported from the glacier; Phase 2 ("peak water"), when glacier retreat is rapid and significant melt occurs from the shrinking ice mass, sees maximum meltwater delivery; Phase 3, as glaciers shrink to remnants or disappear, meltwater supply collapses, eliminating the late-summer buffer that sustained streamflow through dry periods. The Hindu Kush-Himalaya (HKH) region — the "Third Pole" — contains the largest concentration of ice outside the polar regions. ICIMOD studies estimate that glacier meltwater contributes roughly 10–15% of dry-season flow in the Indus and Ganges basins, but this figure rises substantially in dry years when precipitation is scarce and glacier melt becomes the dominant water source.

Rain-on-snow (ROS) events illustrate a mechanism by which warming can increase short-term flood hazard even as it reduces long-term water supply. When rain falls on an existing snowpack — an event that becomes more common as warming shifts precipitation from snow to rain at lower elevations — the rain plus snowmelt can combine to generate runoff rates far exceeding what either source alone would produce. The 1996 Pacific Northwest floods, among the most destructive in the region's history, were driven by ROS events. The 2017 Oroville Dam crisis (California) was partly triggered by extraordinary rainfall and snowmelt in combination following an extreme wet period. As climate warms, the elevation band susceptible to ROS events expands upward, affecting larger contributing areas.

Permafrost — ground that remains frozen for at least two consecutive years — underlies approximately 25% of the Northern Hemisphere land surface and is a major control on Arctic and subarctic hydrology. As warming increases the depth of the active layer (the seasonally thawed surface layer), more soil volume participates in the annual freeze-thaw cycle, altering drainage pathways. Thermokarst — the irregular, hummocky terrain formed by subsidence of permafrost-rich ground — creates new ponds and lakes that intercept runoff that would otherwise reach streams. Paradoxically, permafrost degradation has increased winter baseflow in many Siberian and Alaskan rivers by allowing water stored in newly thawed ground to drain slowly to streams year-round, whereas previously it was locked as ice. Glacial Lake Outburst Floods (GLOFs) represent a distinct and growing hazard: as warming melts glaciers, ice-dammed or moraine-dammed lakes form and grow in glacial valleys. When the dam fails, either by overtopping or structural collapse, the resulting outburst flood can carry peak discharges hundreds to thousands of times greater than normal streamflow. Over 300 glacial lakes globally are currently identified as potentially dangerous; Pakistan and Nepal have established early-warning systems using real-time lake level monitoring and downstream alert networks.`,
      keyTerms: [
        {
          term: 'Snow Water Equivalent (SWE)',
          def: 'The depth of water that would result from melting a snowpack. Measured by SNOTEL weighing lysimeters, airborne gamma surveys, and estimated from MODIS snow cover data.',
        },
        {
          term: 'Peak Water',
          def: 'The phase in glacierised watershed evolution when glacial meltwater delivery is at its maximum before ice volume becomes too small to sustain high melt rates. After peak water, late-season streamflow declines.',
        },
        {
          term: 'Rain-on-Snow (ROS) Event',
          def: 'Rainfall on an existing snowpack that combines rain and meltwater to produce runoff rates exceeding either source alone. Becomes more common as warming raises the rain-snow elevation transition.',
        },
        {
          term: 'Thermokarst',
          def: 'Irregular hummocky terrain formed by thaw and subsidence of ice-rich permafrost. Creates ponds and altered drainage that intercept and store runoff that previously reached streams.',
        },
        {
          term: 'Glacial Lake Outburst Flood (GLOF)',
          def: 'Sudden release of water from an ice-dammed or moraine-dammed lake. Peak discharges can be thousands of times normal streamflow, with travel times of hours to days to downstream communities.',
        },
        {
          term: 'Active Layer',
          def: 'The seasonally thawed surface layer above permafrost. Deepening under warming increases drainage connectivity and alters the timing and volume of runoff from Arctic and subarctic catchments.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Snowpack as a Natural Reservoir',
      body: `Snowpack regulates the timing and magnitude of streamflow across mountain watersheds on seasonal timescales, acting as a natural dam that holds winter precipitation and releases it during spring and early summer. The decline of this reservoir under warming is reshaping water availability for agriculture, municipalities, and ecosystems across the western United States and other mountain-fed basins worldwide.`,
      cards: [
        {
          name: 'SNOTEL and SWE Measurement',
          icon: Layers,
          color: BRAND.accent,
          desc: 'The USDA SNOTEL network (800+ stations) measures SWE via snow pillows and precipitation gauges. Airborne gamma surveys measure SWE from the attenuation of natural terrestrial gamma radiation by overlying snow. MODIS provides daily snow-covered area at 500 m resolution globally.',
          examples: 'SNOTEL sites are located at 1,500–3,500 m elevation across 13 western states. Data feed directly into seasonal streamflow forecasts used by the Colorado River Basin water managers and western state water agencies for annual allocation decisions.',
        },
        {
          name: 'April 1 SWE Declines',
          icon: Activity,
          color: BRAND.jade,
          desc: 'Sierra Nevada: −20 to −30% SWE since 1950. Cascades: −15 to −25%. Rockies: mixed, with higher elevations showing smaller declines. Two mechanisms: less total precipitation falling as snow (rain-snow shift) and earlier melt onset from warmer springs.',
          examples: '2015 Sierra Nevada: April 1 SWE was only 5% of the historical average — the lowest in the instrumental record and likely in centuries. California reservoir storage reached critically low levels, triggering statewide mandatory water restrictions of 25%.',
        },
        {
          name: 'Rain-Snow Elevation Transition',
          icon: Globe,
          color: BRAND.coral,
          desc: 'The elevation at which precipitation falls as rain rather than snow rises ~150 m per °C of warming. Lower-elevation snowpack disappears first. The rain-snow line rising into the mountains increases the proportion of the watershed generating liquid runoff in winter, reducing snowpack storage.',
          examples: 'Cascade Range: the rain-snow line has risen ~100 m since 1950, affecting approximately 15% of the snowpack-generating area. Projections at 2°C warming: a further ~300 m rise, which could eliminate snowpack below ~1,500 m elevation across much of the Pacific Northwest.',
        },
        {
          name: 'Rain-on-Snow Floods',
          icon: Zap,
          color: BRAND.gold,
          desc: 'Rain on snowpack can generate runoff 2–5× greater than rain alone because snowmelt adds to rain-generated runoff. Most damaging when snowpack is deep and rain is prolonged. 1996 PNW floods and 2017 Oroville Dam crisis were partly driven by ROS.',
          examples: 'February 1996 Willamette River (Oregon): 1-in-50-year flood driven by warm rain on ~1 m snowpack. Peak discharge at Salem: 15,000 m³/s vs. median February flow of ~1,000 m³/s. As warming elevates the rain-snow line, more catchment area is exposed to ROS events.',
        },
        {
          name: 'Streamflow Timing Shifts',
          icon: ArrowRight,
          color: BRAND.amethyst,
          desc: 'Earlier snowmelt advances peak streamflow by 2–3 weeks across western US since 1950. Summer baseflows decline because the snowpack reservoir is depleted earlier. Municipal water supply and irrigation systems designed for July–August delivery face growing shortfalls.',
          examples: 'Columbia River: centre-of-volume date (the date by which 50% of annual flow has passed) has advanced ~15 days since 1948. Pacific salmon spawning runs timed to cooler late-summer flows are disrupted by earlier, warmer low-flow periods.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Glaciers, Permafrost, and GLOFs',
      body: `Beyond seasonal snowpack, glaciers and permafrost regulate water availability on decadal to millennial timescales. Their rapid degradation is producing a complex mosaic of hydrological consequences: some regions are temporarily gaining meltwater (Phase 2 of peak water), while others have already crossed peak water and face declining late-season flows; meanwhile, permafrost thaw is transforming Arctic drainage, and glacial lake formation is creating growing GLOF hazards.`,
      cards: [
        {
          name: 'Peak Water in Glacierised Basins',
          icon: Activity,
          color: BRAND.accent,
          desc: 'Phase 1: glacier growing → stable summer meltwater. Phase 2: glacier retreating rapidly → peak meltwater (maximum delivery). Phase 3: glacier nearly gone → loss of late-summer buffer. Many HKH basins are in Phase 2; Andean and European Alpine basins increasingly in Phase 3.',
          examples: 'Central Andes (e.g., Maipo River, Chile): multiple tributaries have passed peak water and show declining summer flows as glaciers shrink. Indus Basin: modelling suggests peak water for total basin runoff may be reached mid-century; Karakoram glaciers (anomalous advance) are delaying peak water locally.',
        },
        {
          name: 'HKH Glaciers and Dry-Season Flow',
          icon: Globe,
          color: BRAND.jade,
          desc: `Hindu Kush-Himalaya (Third Pole): glacier meltwater contributes ~10–15% of dry-season flow in Indus and Ganges basins on average, rising to >25% in dry years. ICIMOD\'s HKH Assessment: glaciers losing mass at accelerating rates; entire region warming 0.2°C/decade above global mean.`,
          examples: `Upper Indus: some tributaries above 4,000 m elevation derive >50% of summer discharge from glacier melt. Pakistan\'s Karakoram: anomalous glacier balance (locally stable to advancing), partially buffering the melt signal from Hindu Kush and Himalayas, though the Karakoram anomaly may be diminishing under further warming.`,
        },
        {
          name: 'Permafrost Hydrology',
          icon: Layers,
          color: BRAND.coral,
          desc: 'Permafrost underlies ~25% of Northern Hemisphere land. Active layer deepening increases drainage connectivity; thermokarst ponds capture runoff. Arctic rivers show increased winter baseflow (thawed permafrost releasing stored water year-round) but altered summer hydrographs.',
          examples: 'Siberian rivers (Ob, Lena, Yenisei): winter discharge has increased 5–10% since 1936, attributed partly to permafrost thaw expanding the active layer and allowing groundwater contributions to rivers that were previously frozen. Alaska: widespread thermokarst lake formation and drainage is reorganising watershed connectivity.',
        },
        {
          name: 'Glacial Lake Outburst Floods',
          icon: Zap,
          color: BRAND.gold,
          desc: 'Warming creates new ice-dammed and moraine-dammed lakes. 300+ globally identified as potentially dangerous. GLOF peak discharges can reach 10,000–100,000 m³/s from a valley glacier lake — orders of magnitude above normal. Travel times hours to days.',
          examples: `2013 Chorabari Lake GLOF, India (Kedarnath): released ~6 million m³ in minutes; killed ~5,700 people. Pakistan\'s Hunza Valley: Attabad Lake formed by 2010 landslide impounding river; nearly triggered GLOF. Nepal: 47 glacial lakes monitored in real-time with downstream alert systems.`,
        },
        {
          name: 'GLOF Early Warning Systems',
          icon: ArrowRight,
          color: BRAND.amethyst,
          desc: 'Nepal and Pakistan have installed lake-level sensors, satellite lake area monitoring, and automated downstream sirens. Automated weather stations measure temperature and precipitation to predict melt contributions. Community early-warning drills train downstream populations on evacuation routes.',
          examples: 'Imja Lake, Nepal: lake area grew from 0.1 km² (1960s) to >1.5 km² (2015). UNDP-supported early-warning system installed 2016: lake outlet lowered by 3.4 m to reduce outburst risk. Pakistan GLOF-II programme: covers 16 districts with automated alerts and community preparedness.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Cryosphere Water Tower: From Snowfall to Downstream Delivery',
      body: 'Tracing the pathways by which snow and glacial ice store water, modulate streamflow seasonality, and generate hazards — and how warming is restructuring this system from the mountain snowfield to the downstream river valley.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how winter snowfall and glacier accumulation store water in the mountain cryosphere, which then releases as meltwater through seasonal snowmelt, glacier melt, and rain-on-snow events to supply downstream rivers, with permafrost acting as a separate subsurface pathway and GLOF representing a hazardous extreme release mode',
        nodes: [
          {
            id: 'winter-precipitation',
            label: 'Winter Precipitation & Snow Accumulation',
            description: 'Snow falls above the rain-snow elevation line (~1,500–3,500 m depending on latitude) and accumulates through winter. Snow water equivalent (SWE) peaks in late winter to early spring. SNOTEL monitors accumulation continuously. Warming raises the rain-snow line, reducing the area that contributes to snowpack storage.',
            color: BRAND.accent,
          },
          {
            id: 'snowpack-reservoir',
            label: 'Seasonal Snowpack',
            description: 'Peak SWE typically occurs on April 1 in the western US. The snowpack is a temporary natural reservoir: melt begins when incoming solar radiation and air temperatures exceed the energy balance threshold. April 1 SWE has declined 20–30% in the Sierra Nevada since 1950. Earlier melt shifts the seasonal hydrograph.',
            color: BRAND.jade,
          },
          {
            id: 'glacier-storage',
            label: 'Glacier Ice Storage',
            description: 'Multi-year to multi-century storage reservoir. Net mass balance = accumulation minus ablation. Negative mass balance (warm phase) releases stored ice as meltwater. Peak water: maximum meltwater delivery occurs during the rapid retreat phase. HKH glaciers losing mass at rates of 0.3–0.8 m water equivalent/year.',
            color: BRAND.gold,
          },
          {
            id: 'ros-event',
            label: 'Rain-on-Snow Events',
            description: 'Warm rain falls on existing snowpack, triggering simultaneous snowmelt. Combined runoff (rain + melt) can be 2–5× greater than rain alone. Most hazardous when snowpack is deep and rain is prolonged. As warming raises the rain-snow line, more catchment area is susceptible to ROS events in winter storms.',
            color: BRAND.coral,
          },
          {
            id: 'glof',
            label: 'Glacial Lake Outburst Flood',
            description: 'Rapid catastrophic release from an ice-dammed or moraine-dammed lake. As glaciers retreat, new lakes form in overdeepenings. Dam failure by overtopping, ice melt, or earthquake can release millions of m³ in minutes to hours, generating peak flows 100–10,000× normal. 300+ lakes globally at high risk.',
            color: BRAND.ruby,
          },
          {
            id: 'permafrost-baseflow',
            label: 'Permafrost & Winter Baseflow',
            description: 'Active layer deepening allows water stored in newly thawed ground to drain to streams year-round rather than remaining locked as ice. Arctic rivers show increasing winter baseflow. Thermokarst ponds intercept summer runoff. Long-term: permafrost loss reduces aquifer function and increases runoff variability.',
            color: BRAND.amethyst,
          },
          {
            id: 'seasonal-river-supply',
            label: 'Downstream River Supply',
            description: 'Snowmelt drives spring floods and summer baseflow. Glacial melt sustains late-summer flows when precipitation is minimal. Permafrost drainage adds winter baseflow. All three components are shifting: earlier spring peaks, lower late-summer flows, declining total supply in many basins. Impacts on agriculture, hydropower, and ecosystems are already measurable.',
            color: BRAND.accent,
          },
        ],
        edges: [
          { from: 'winter-precipitation', to: 'snowpack-reservoir',    label: 'Accumulation above rain-snow elevation line' },
          { from: 'winter-precipitation', to: 'glacier-storage',       label: 'Glacier accumulation zone in high mountains' },
          { from: 'snowpack-reservoir',   to: 'seasonal-river-supply', label: 'Spring and early summer snowmelt runoff' },
          { from: 'snowpack-reservoir',   to: 'ros-event',             label: 'Warm rain episode triggers combined melt' },
          { from: 'ros-event',            to: 'seasonal-river-supply', label: 'Amplified flood peak: rain plus melt combined' },
          { from: 'glacier-storage',      to: 'seasonal-river-supply', label: 'Late-summer meltwater buffering dry-season flows' },
          { from: 'glacier-storage',      to: 'glof',                  label: 'Retreating glacier creates moraine-dammed lake' },
          { from: 'glof',                 to: 'seasonal-river-supply', label: 'Catastrophic outburst discharge to downstream valley' },
          { from: 'permafrost-baseflow',  to: 'seasonal-river-supply', label: 'Thawed groundwater year-round drainage to streams' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What is the "peak water" concept for glacierised watersheds, and what are the hydrological implications of Phases 2 and 3 for downstream water users?',
          a: [
            'Peak water refers to maximum reservoir storage in hydropower dams located downstream of glaciers; Phase 2 is when reservoirs are full, Phase 3 is when they are drawn down during drought, and the concept describes dam operation rather than natural glaciology',
            'Peak water describes the three-phase evolution of glacierised watershed meltwater delivery: Phase 2 (current rapid retreat) provides maximum summer meltwater as large ice volumes melt, temporarily enhancing water supply; Phase 3 (glacier near-disappearance) causes summer meltwater to collapse, eliminating the late-season buffer that sustained downstream irrigation, hydropower, and ecosystems through dry periods',
            'Peak water refers to the timing of maximum annual streamflow in glacierised basins, which occurs in July in the Northern Hemisphere; Phase 2 means peak flows are advancing earlier in the year, Phase 3 means peak flows return to their historical timing once glaciers stabilise at a smaller extent',
            'Peak water describes the maximum glacier size (Phase 2) during the Little Ice Age, followed by Phase 3 retreat; it is primarily a palaeoglaciology concept used to reconstruct past water availability and is not directly relevant to contemporary water management',
          ],
          correct: 1,
          explain: 'The peak water concept, formalised by Huss and Hock (2018, Nature Climate Change), describes how meltwater delivery from glacierised catchments evolves as glaciers lose mass. In Phase 1 (glacier in near-equilibrium or slightly negative mass balance), meltwater delivery is stable. In Phase 2 (rapid ice loss), the accelerating retreat melts large volumes of ice that had accumulated over decades to centuries, temporarily increasing summer meltwater supply beyond what precipitation or snowmelt alone would deliver — a transient enhancement of water availability. In Phase 3 (glacier remnants or disappearance), the ice volume is too small to sustain significant melt rates; late-summer meltwater — which previously buffered streamflow through the driest months — effectively disappears. The practical consequences of Phase 3 for water users are severe: irrigation systems in semi-arid Andean, Central Asian, and HKH valleys that rely on glacial melt to supply crops through July–September face catastrophic shortfalls; run-of-river hydropower plants timed to summer glacier melt lose generating capacity precisely when electricity demand peaks; and cold-water fish habitats that depend on glacier-cooled temperatures lose their thermal refugia.',
        },
        {
          q: 'Rain-on-snow (ROS) events are expected to become more frequent as warming raises the rain-snow elevation transition. What physical mechanism makes ROS events hydrologically more extreme than rain events of equal intensity on a bare catchment?',
          a: [
            'Rain on snow has lower infiltration rates than rain on bare soil because the snowpack is frozen and impermeable, causing all rainfall to immediately become overland flow; this reduces the time to peak discharge and increases peak magnitude relative to bare-catchment rain of the same intensity',
            'Rain falling on snowpack triggers a rapid energy release: the warm rain transfers latent heat to the snowpack, accelerating melt; runoff is the sum of rain plus snowmelt, with snowmelt adding 5–30 mm/day of additional water depending on snowpack depth; on a bare catchment, only rain reaches the channel; on a snow-covered catchment, both rain and melt-generated water reach the channel simultaneously',
            'Rain-on-snow events generate more extreme floods because snowpack acts as an impermeable layer that channels all rainfall laterally as interflow through the snowpack base, bypassing the soil matrix and reaching streams far faster than subsurface vertical infiltration would allow',
            'Rain-on-snow events are more extreme because rainfall warms the snowpack above 0°C, causing phase change from ice to liquid that releases the latent heat of fusion directly into the soil, liquefying frozen ground and generating additional runoff from the formerly frozen soil water',
          ],
          correct: 1,
          explain: 'In a rain-on-snow event, the total runoff generation from the watershed is the sum of two simultaneous sources: (1) direct rainfall, which contributes to runoff through normal infiltration-excess or saturation-excess mechanisms; and (2) snowmelt, driven by the energy input of the warm rain (sensible heat transfer from rain to snowpack) plus any concurrent turbulent heat fluxes from warm, humid air. Even a moderate rain event of 20 mm/day falling on a deep snowpack can generate an additional 10–30 mm/day of snowmelt, effectively doubling the water delivered to the soil and channel system. If the soil is already saturated from previous rainfall or shallow groundwater, the additional snowmelt water has no place to go except into stream channels. This mechanism explains why the 1996 Pacific Northwest floods were so catastrophic: winter storms delivered warm rain on top of existing 0.5–1 m snowpacks across vast areas of the Cascades and Coast Ranges, generating runoff rates that overwhelmed major rivers. The 2017 Oroville Dam crisis similarly involved extraordinary rainfall augmented by a period of active snowmelt from a below-normal snowpack that had received unusual late-season accumulation. As the rain-snow elevation transition rises with warming, previously snow-covered higher elevations become exposed to ROS events, expanding the catchment area contributing to potentially amplified winter flood events.',
        },
        {
          q: 'Permafrost thaw has been observed to increase winter baseflow in Siberian and Alaskan rivers. What mechanism explains this counterintuitive effect of warming on cold-season streamflow?',
          a: [
            'Permafrost thaw warms the soil above the permafrost table, which reduces viscosity of the remaining groundwater and allows it to flow faster to streams during winter, increasing discharge rates without changing the total volume of water released',
            'Warming increases summer evapotranspiration enough to lower the water table, which allows deeper winter infiltration during freeze-up, storing more water in the deep soil layer that then slowly drains to streams in winter rather than freezing in the surface active layer',
            'As permafrost degrades, the active layer deepens and previously frozen ground becomes a functioning groundwater reservoir that slowly drains to streams year-round; water that was formerly locked as ice for the entire winter now releases to streams continuously even during cold months, increasing winter baseflow while potentially reducing summer peak flows',
            'Thermokarst ponds formed by permafrost thaw collect summer precipitation and store it above the ground surface; in winter, these ponds freeze from the top but continue to discharge from the base through subpermafrost conduits that remain liquid due to the thermal mass of the open water',
          ],
          correct: 2,
          explain: 'In permafrost-underlain catchments, groundwater storage and drainage are fundamentally controlled by the presence of ice in the subsurface. In an intact permafrost system, the active layer freezes to the permafrost table in autumn, cutting off connectivity between the soil water reservoir and stream channels. Streams fed primarily by surface runoff and shallow active-layer drainage become ice-covered and receive minimal baseflow during winter. As warming deepens the active layer over decades, previously frozen ground becomes a functioning supra-permafrost aquifer — connected to streams — that can store and release water throughout the year rather than only during the thaw season. This expanded, unfrozen zone acts as a shallow groundwater reservoir that continuously drains to stream channels even during winter when temperatures are below freezing at the surface. The drainage is slow enough to sustain baseflow rather than producing sharp flood peaks. Multiple studies on Siberian rivers (Ob, Lena, Yenisei), Alaskan rivers (Yukon, Tanana), and Canadian subarctic rivers have documented statistically significant trends of increasing winter low-flow over the past 50–70 years that are consistent with active layer deepening and cannot be explained by changes in precipitation timing alone. The long-term consequence, however, is that once permafrost is fully degraded, the groundwater storage function may diminish as drainage pathways become more efficient, potentially reducing future baseflow even as current trends are positive.',
        },
        {
          q: 'Glacial Lake Outburst Floods (GLOFs) represent one of the fastest-growing flood hazards in mountain regions. What physical processes trigger GLOFs and why are early warning systems particularly critical for this hazard compared to rainfall-generated floods?',
          a: [
            'GLOFs are triggered exclusively by earthquakes that fracture the moraine dam; early warning systems are critical because there is no meteorological precursor signal (unlike rainfall floods), meaning seismic monitoring must substitute for hydrological monitoring at glacial lakes',
            'GLOFs are triggered by gradual overtopping of the moraine dam as the lake fills during the melt season; early warning systems are particularly important because the melt season is predictable and warnings can be issued months in advance, giving communities time to permanently relocate',
            'GLOFs are triggered by several mechanisms — ice dam melt-through, moraine dam piping or overtopping, ice avalanches into the lake generating displacement waves, or subglacial drainage — and are critical to warn for because peak discharge can be orders of magnitude above normal in minutes with very short lead times (hours to days for downstream communities), versus the 24–72-hour warning lead times typical for large rainfall-generated floods',
            'GLOFs are triggered only by sudden temperature increases above 30°C that cause catastrophic ice melt within hours; early warning systems focus on temperature forecasting, and GLOFs are predictable 5–7 days in advance using standard meteorological models without any in-situ lake monitoring',
          ],
          correct: 2,
          explain: 'Glacial Lake Outburst Floods are triggered by a variety of mechanisms, each with different warning lead times: (1) Moraine dam overtopping: as the lake level rises during the melt season, water overtops the dam and erodes it, leading to progressive or catastrophic failure. Warning lead times: potentially hours to days if lake level is monitored. (2) Moraine dam piping: internal erosion through the dam structure; often sudden and with little external precursor signal. (3) Ice avalanche or rock/ice avalanche into the lake: generates an impact wave that overtops the dam. Warning lead time: minutes to hours. (4) Ice dam failure: thermal erosion and buoyancy effects can cause rapid ice dam failure. The resulting peak discharges from GLOFs are extraordinary — the 2013 Kedarnath GLOF reached an estimated 10,000–30,000 m³/s from a lake that released ~6 million m³ — and travel times from lake to downstream communities in steep Himalayan and Andean valleys can be as short as 1–2 hours. By comparison, large rainfall-driven floods typically provide 24–72 hours of warning time from numerical weather prediction models and upstream gauge observations. This extreme brevity of the GLOF threat window means that early warning systems must be automated (no time for human decision chains), community evacuation drills must be practiced regularly so responses are instinctive, and downstream populations must be within range of audible or electronic alert systems. Real-time lake level monitoring (staff gauges with satellite telemetry, time-lapse cameras, or radar level sensors) provides the earliest possible detection of lake overflow or rapid level change.',
        },
      ],
    },
  ],
}

export default cryosphereHydrology
