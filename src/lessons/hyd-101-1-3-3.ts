import { Globe, Layers, Zap, Activity, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const springsGeothermal: Lesson = {
  id: 'hyd-101-1-3-3',
  title: 'Springs, Geothermal Systems, and Groundwater-Surface Water Exchange',
  track: 'cli',
  trackName: 'Hydrology',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 130,
  description: 'Where the water table meets the surface: springs, hot springs, geysers, and the invisible river beneath rivers',
  sources: [
    { org: 'USGS', title: 'USGS — Springs',                                        url: 'https://www.usgs.gov/special-topics/water-science-school/science/springs-and-water-cycle' },
    { org: 'USGS', title: 'USGS — Geothermal Energy and Hydrothermal Features',    url: 'https://www.usgs.gov/programs/volcano-hazards/hydrrothermal' },
    { org: 'NPS',  title: 'NPS — Yellowstone Geothermal Features',                 url: 'https://www.nps.gov/yell/learn/nature/geothermalfeatures.htm' },
    { org: 'USGS', title: 'USGS — Submarine Groundwater Discharge',                url: 'https://www.usgs.gov/special-topics/water-science-school/science/submarine-groundwater-discharge' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Where the water table meets the surface: springs, hot springs, geysers, and the invisible river beneath rivers',
      body: `A spring is any location where groundwater discharges naturally to the surface. Springs form when the water table intersects the land surface — at hillside seeps and valley-floor wetlands — or when confined aquifer pressure forces water upward through faults, fractures, or permeable beds to the surface. Springs are among the most ecologically important freshwater habitats: their constant temperature (equal to mean annual air temperature), stable discharge, and high water quality support unique assemblages of endemic species. The world\'s largest spring systems include the springs of the Ozarks (Big Spring, Missouri: ~12 m³/s mean discharge), the Wakulla Springs system in Florida, and the springs of the Dinaric karst.

Geothermal springs and geysers occur where groundwater circulates deeply enough to be heated by Earth\'s geothermal gradient (~25–30°C/km in non-volcanic areas) or by direct magmatic heat near volcanic systems. Yellowstone National Park contains over 10,000 geothermal features — the world\'s densest concentration — heated by magma sitting 5–10 km below the surface. Hot springs range from warm (< 50°C) to boiling (100°C at sea level). Geysers require a very specific plumbing system: a constricted tube or cavity that allows water to superheat under pressure above the surface boiling point; when pressure from below forces water into the constriction, the superheated water flashes to steam and explodes upward. Old Faithful erupts every ~44–125 minutes, propelling 14,000–32,000 litres of boiling water 30–55 m into the air.

Baseflow — the portion of streamflow sustained by groundwater discharge between storm events — is critical to river ecosystems and downstream water users. In humid climates, baseflow may constitute 50–80% of mean annual streamflow. Groundwater\'s constant temperature buffers stream temperatures, providing cool summer refugia for cold-water fish in streams where air temperature would otherwise warm surface runoff to lethal levels. Streamflow permanence — whether a stream flows year-round or dries up seasonally or during drought — is determined primarily by the depth to the water table relative to the channel bed. In regions undergoing groundwater depletion, previously perennial streams are becoming ephemeral.

Submarine groundwater discharge (SGD) is the flow of terrestrial freshwater (and recirculated seawater) through coastal aquifers to the ocean. SGD was historically ignored but has been shown to supply nutrients (nitrogen, phosphorus, silica) and contaminants to coastal waters at rates comparable to river inputs in some regions. SGD is measured using seepage meters (direct measurement), radon-222 as a natural tracer (highly enriched in groundwater vs. seawater), and thermal infrared remote sensing (fresh groundwater often colder than nearshore seawater). In carbonate coastal settings (Florida, Caribbean), blue holes — submarine springs — discharge visibly cold, fresh water, creating distinct buoyancy-driven plumes visible from the surface or from orbit.`,
      keyTerms: [
        {
          term: 'Spring',
          def: 'Natural discharge of groundwater at the land surface; occurs where water table intersects topography or artesian pressure reaches surface.',
        },
        {
          term: 'Geyser',
          def: 'Periodic eruption of superheated water and steam from a constricted geothermal plumbing system. Old Faithful erupts every 44-125 min.',
        },
        {
          term: 'Baseflow',
          def: 'Streamflow sustained by groundwater discharge between storms. Typically 50-80% of mean annual flow in humid climates.',
        },
        {
          term: 'Submarine Groundwater Discharge (SGD)',
          def: 'Flow of groundwater through coastal sediments to the ocean; important nutrient and contaminant pathway.',
        },
        {
          term: 'Streamflow Permanence',
          def: 'Whether a stream flows year-round (perennial), seasonally (intermittent), or only during storms (ephemeral); controlled by water table depth.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Types of Springs and Geothermal Features',
      body: `Springs and geothermal features reflect the hydrogeology, heat flux, and plumbing of the systems that produce them. From cold hillside seeps sustained by local water tables to boiling geysers powered by shallow magma chambers, each type tells a story about the subsurface geology and hydrology of its setting.`,
      cards: [
        {
          name: 'Contact Springs',
          icon: Layers,
          color: BRAND.jade,
          desc: 'Form where permeable rock overlies impermeable rock. Water table perches on impermeable bed; discharges at contact. Reliable, often cool.',
          examples: 'Many springs at base of sandstone mesas in the Colorado Plateau. Springs at the base of lava flows over impermeable basement rock in the Pacific Northwest.',
        },
        {
          name: 'Artesian Springs',
          icon: ArrowRight,
          color: BRAND.accent,
          desc: 'Confined aquifer pressure forces water upward through fractures or faults to the surface without pumping. Stable, high-quality water.',
          examples: 'Crystal Springs (SF Bay Area): fault-guided artesian discharge from the San Andreas fault zone. Flow sustained for decades without pumping.',
        },
        {
          name: 'Karst Springs',
          icon: Globe,
          color: BRAND.coral,
          desc: 'Conduit-fed discharge from karst aquifer. Highly variable flow (1000× range). Turbid after rain. Major water supply for millions.',
          examples: 'Fontaine de Vaucluse, France: largest spring in Europe, 630 m³/s peak. Blue Springs, Missouri: constant 12-14°C, 12 m³/s mean flow.',
        },
        {
          name: 'Geysers',
          icon: Zap,
          color: BRAND.ruby,
          desc: 'Superheated water in constricted tube flashes to steam when pressure drops. Very rare: requires specific plumbing geometry near magmatic heat.',
          examples: 'Yellowstone: 500 geysers (60% of world total). Old Faithful: ~44-125 min interval, ~20 m³ per eruption, 30-55 m height.',
        },
        {
          name: 'Submarine SGD',
          icon: Activity,
          color: BRAND.amethyst,
          desc: 'Coastal aquifer discharges fresh + brackish water to ocean. Delivers N, P, Si; comparable to river input in some regions.',
          examples: 'Florida carbonate coast: SGD supplies significant DIN to coastal zone, driving seagrass and coral dynamics. Radon-222 traces SGD extent.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Yellowstone Geothermal System: From Deep Heat to Surface Feature',
      body: `How magmatic heat, deep groundwater circulation, and surface plumbing produce Yellowstone\'s remarkable diversity of geothermal features.`,
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how magmatic heat drives deep groundwater circulation at Yellowstone, producing hot springs, geysers, mud pots, and fumaroles depending on the geometry and chemistry of the surface plumbing',
        nodes: [
          {
            id: 'magma-source',
            label: 'Yellowstone Magma Chamber',
            description: 'Partial melt sits 5-10 km below surface. Provides heat flux of 40-50 mW/m² above (vs. 60 mW/m² global average). Source of heat for all geothermal features.',
            color: BRAND.ruby,
          },
          {
            id: 'deep-circulation',
            label: 'Deep Groundwater Circulation',
            description: 'Surface water infiltrates and circulates to depth, heated by magma. Geothermal gradient ~60°C/km in Yellowstone vs. normal 25-30°C/km.',
            color: BRAND.gold,
          },
          {
            id: 'hot-spring',
            label: 'Hot Springs',
            description: 'Heated water reaches surface through wide, unrestricted vents. No pressure build-up; continuous discharge. Grand Prismatic Spring: 87°C, 2,100 m² surface area.',
            color: BRAND.coral,
          },
          {
            id: 'geyser-plumbing',
            label: 'Geyser Plumbing',
            description: 'Constricted tube with chamber. Water fills and superheats under pressure. When temperature reaches flash point (~121°C at depth), steam bubble formation starts eruption.',
            color: BRAND.ruby,
          },
          {
            id: 'eruption',
            label: 'Geyser Eruption',
            description: 'Flash boiling propagates upward, ejecting water and steam. Old Faithful: 32,000-44,000 litres, 30-55 m high. Interval reflects time to refill and reheat.',
            color: BRAND.amethyst,
          },
          {
            id: 'mud-pots',
            label: 'Mud Pots & Fumaroles',
            description: 'Where H₂S gas oxidises to sulfuric acid in acid-sulfate features: dissolves rock to clay minerals. Fumaroles where water evaporates before reaching surface.',
            color: BRAND.jade,
          },
        ],
        edges: [
          { from: 'magma-source',    to: 'deep-circulation', label: 'Heats circulating groundwater' },
          { from: 'deep-circulation', to: 'hot-spring',       label: 'Wide fractures allow free flow' },
          { from: 'deep-circulation', to: 'geyser-plumbing',  label: 'Fills constricted tube' },
          { from: 'geyser-plumbing', to: 'eruption',          label: 'Superheating triggers flash boil' },
          { from: 'deep-circulation', to: 'mud-pots',         label: 'H₂S oxidation in vadose zone' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What physical conditions are required for a geyser to form, and why are geysers so rare?',
          a: [
            'Geysers require a large open chamber with no restriction; they are rare because most volcanic areas have insufficient water supply',
            'Geysers require a specific plumbing geometry — a constricted tube or chamber — plus proximity to magmatic heat and abundant recharging groundwater; this combination is extremely rare globally',
            'Geysers form wherever hydrothermal springs exist and a geothermal gradient exceeds 100°C/km; they are rare because this gradient only occurs in Iceland',
            'Geysers form only in silica-rich rhyolite terrain because silica deposits seal the geyser tube; they are rare because most volcanic areas have basaltic geology',
          ],
          correct: 1,
          explain: 'Geysers require an unusual combination of conditions: (1) a heat source — typically proximity to magma (5–15 km depth), not just a normal geothermal gradient; (2) abundant groundwater recharge to continuously refill the system; (3) a very specific plumbing geometry — a constricted tube or chamber system that allows water to superheat above the surface boiling point without boiling; (4) sufficient rock strength (silica-mineralised rhyolite in most cases) to maintain the tube integrity under repeated eruptions. When all these conditions align, the constricted tube allows pressure to build until the superheat overcomes inertial confinement, triggering a flash-boiling eruption. The geometry must be just right — most hydrothermal systems lack the constriction and erupt as continuous hot springs. Globally, only ~1,000 active geysers exist, with ~500 in Yellowstone alone.',
        },
        {
          q: 'Why does constant-temperature groundwater discharge in springs and rivers provide an ecological benefit to aquatic organisms?',
          a: [
            'Groundwater is warmer than stream water in summer, providing a thermal refuge for warm-water species during cold winter periods',
            'Groundwater temperature equals mean annual air temperature (~10-15°C in temperate regions), creating stable, cool summer conditions that serve as thermal refugia for cold-water fish species like trout and salmon',
            'Groundwater contains dissolved minerals that neutralise stream acidity, increasing pH to levels optimal for invertebrate communities',
            'Groundwater discharges in summer when river levels are lowest, increasing depth and reducing stranding risk for large fish',
          ],
          correct: 1,
          explain: 'Groundwater temperature approximately equals the mean annual air temperature at any given location — about 10–15°C in temperate regions. This means that groundwater discharge is cool in summer (when air temperatures may be 25–35°C) and relatively warm in winter (when surface water can approach 0°C). Stream reaches fed by substantial groundwater discharge maintain stable temperatures year-round. In summer, groundwater discharge zones create thermal refugia — cool patches where cold-water species (trout, salmon, crayfish, sensitive invertebrates) can survive when surface water temperatures in the main channel exceed thermal tolerance limits. As climate warming heats stream temperatures and groundwater depletion reduces baseflow contributions, these refugia are shrinking — a major threat to cold-water fisheries.',
        },
        {
          q: 'What is streamflow permanence and what hydrogeological factor primarily controls it?',
          a: [
            'Streamflow permanence is determined primarily by annual precipitation; streams in regions receiving more than 500 mm/yr are perennial',
            'Streamflow permanence — whether a stream flows year-round, seasonally, or only during storms — is primarily controlled by the relationship between the water table depth and the channel bed elevation',
            'Streamflow permanence is controlled by watershed area; only streams draining more than 10 km² maintain perennial flow',
            'Streamflow permanence depends entirely on upstream dam regulation; regulated rivers are perennial while unregulated rivers are ephemeral',
          ],
          correct: 1,
          explain: 'A stream flows perennially when the regional water table is at or above the channel bed elevation — groundwater continuously seeps into the channel, sustaining baseflow even without recent precipitation. When the water table drops below the channel bed, the stream becomes a losing reach — water drains from the stream into the aquifer. If the water table is deep enough, the channel dries completely between storms (ephemeral). Climate (precipitation determines recharge), geology (permeable aquifers sustain high water tables), vegetation (high ET can draw down water tables), and groundwater extraction all affect the water table position relative to channel beds. In regions experiencing aquifer depletion from irrigation, historically perennial streams are becoming intermittent or ephemeral as the water table declines below channel beds.',
        },
        {
          q: 'How is submarine groundwater discharge (SGD) measured and what environmental significance does it have?',
          a: [
            'SGD is measured by tidal gauging stations at coastal outlets; it is significant mainly for sea level monitoring',
            'SGD is measured using seepage meters, radon-222 as a groundwater tracer, and thermal infrared sensing; it delivers nutrients and contaminants to coastal waters comparable to river inputs in some regions',
            'SGD is calculated by subtracting evaporation from coastal wetlands from total precipitation in the watershed; significant only for isolated islands without rivers',
            'SGD is measured by comparing salinities of submarine springs with ocean water; significant only in arid regions where freshwater scarcity drives exploration for offshore water resources',
          ],
          correct: 1,
          explain: 'SGD is invisible (below the ocean surface), diffuse (across wide areas rather than concentrated point sources), and variable (driven by tides, seasonal head gradients, and waves). Three key measurement approaches: (1) seepage meters — benthic chambers that directly measure the volume flux of water through the seafloor; (2) radon-222 — a radioactive tracer that is orders of magnitude more concentrated in groundwater than seawater; where radon is elevated in coastal waters, SGD is occurring; (3) thermal infrared remote sensing — fresh groundwater entering the sea is often cooler (or warmer) than nearshore surface water, creating detectable thermal anomalies. SGD exports dissolved inorganic nitrogen, phosphorus, silica, and contaminants (nitrate from agricultural areas, pharmaceuticals) to coastal ecosystems, contributing to eutrophication, seagrass decline, and coral reef stress in many coastal regions.',
        },
        {
          q: 'What type of spring forms where a permeable geological layer overlies an impermeable one, and what makes it reliable?',
          a: [
            'An artesian spring, formed where confined aquifer pressure forces water upward regardless of topography',
            'A contact spring, formed where a permeable rock unit meets an impermeable unit; a perched water table above the impermeable layer discharges steadily at the contact',
            'A fault spring, formed where a fault zone creates a pathway for deep artesian water to reach the surface at topographic lows',
            'A depression spring, formed where the valley floor is cut below the regional water table by stream erosion',
          ],
          correct: 1,
          explain: 'Contact springs form at the geological contact between a permeable unit (sandstone, limestone, gravel) and an underlying impermeable unit (shale, clay, unfractured crystalline rock). Recharge enters the permeable unit on higher ground, flows laterally, and is forced to discharge at the surface where the overlying permeable rock is exposed at the hillside and the impermeable base prevents downward drainage. These springs are relatively reliable because they tap perched aquifers with substantial storage, their discharge correlates with recharge events but lags by weeks to months, and their temperature is buffered by the subsurface travel. Springs at the base of Colorado Plateau sandstone mesas and at the perimeter of volcanic plateaux in the Pacific Northwest are classic contact spring examples, historically used as reliable water sources by indigenous peoples and homesteaders.',
        },
      ],
    },
  ],
}

export default springsGeothermal
