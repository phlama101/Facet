import { Layers, Globe, Activity, Zap, Mountain } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const liquefactionLandslides: Lesson = {
  id: 'seis-101-1-3-2',
  title: 'Liquefaction, Landslides, and Secondary Hazards',
  track: 'geo',
  trackName: 'Seismology',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 130,
  description: 'When the ground turns to liquid: secondary hazards that can exceed direct shaking damage',
  sources: [
    { org: 'USGS', title: 'USGS — Liquefaction',                                     url: 'https://earthquake.usgs.gov/hazards/urban/liq.php' },
    { org: 'USGS', title: 'USGS — Landslide Hazards',                               url: 'https://www.usgs.gov/natural-hazards/landslide-hazards' },
    { org: 'EERI', title: 'EERI — 2011 Christchurch Earthquake Reconnaissance',      url: 'https://www.eeri.org/projects/earthquake-reconnaissance/' },
    { org: 'USGS', title: 'USGS — 1964 Alaska Good Friday Earthquake',              url: 'https://earthquake.usgs.gov/earthquakes/eventpage/official19640328033616_30/executive' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'When the ground turns to liquid: secondary hazards that can exceed direct shaking damage',
      body: `Earthquakes trigger a cascade of secondary hazards that often cause more damage and death than direct shaking. Liquefaction, landslides, fires, and dam failures can kill thousands and destroy infrastructure across areas far larger than the zone of strong shaking. Understanding these secondary hazards is essential for comprehensive earthquake risk reduction.

Liquefaction occurs when water-saturated cohesionless sediment (loose sand, silt) is subjected to rapid cyclic loading during an earthquake. Seismic shaking increases pore water pressure, reducing effective stress between grains to near zero. The sediment loses its shear strength and behaves like a viscous fluid. Buildings sink or tilt, buried utilities float to the surface, and sand volcanoes erupt as pressurised water-sand mixtures vent through cracks. The 2011 Christchurch, New Zealand earthquake (M 6.2) caused widespread liquefaction in residential suburbs built on Holocene alluvial sands, rendering thousands of homes uninhabitable and contributing to a NZ$40 billion reconstruction cost.

Seismically triggered landslides occur when earthquake shaking reduces the shear strength of slopes already near failure. Three mechanisms dominate: (1) undrained loading of saturated slopes causes pore pressure spikes similar to liquefaction; (2) seismic acceleration adds a horizontal body force that can exceed the factor-of-safety margin on steep slopes; (3) in areas with weak geological layers (clays, volcanic ash), even moderate shaking can trigger deep-seated rotational slides. The 1970 Ancash earthquake (Peru, Mw 7.9) triggered the Huascarán avalanche, killing ~18,000 people — the deadliest landslide in recorded history.

Fire following earthquake is a historically devastating secondary hazard. The 1906 San Francisco earthquake caused a fire that burned for three days and destroyed 28,000 buildings — far more than the earthquake shaking alone. Broken gas lines and ruptured water mains create both ignition sources and firefighting incapacity simultaneously. Modern cities with aging gas infrastructure in high-seismicity zones (Tokyo, Los Angeles) maintain earthquake-triggered automatic gas shutoff systems and fire-break planning to mitigate this risk. Tsunami generation (addressed in the next lesson) and dam/levee failures round out the full portfolio of earthquake secondary hazards.`,
      keyTerms: [
        {
          term: 'Liquefaction',
          def: 'Loss of shear strength in saturated cohesionless sediment due to earthquake-induced pore pressure increase.',
        },
        {
          term: 'Pore Pressure',
          def: 'Water pressure in sediment pore spaces; high pore pressure reduces effective stress between grains.',
        },
        {
          term: 'Newmark Displacement',
          def: 'Method to estimate permanent seismic slope displacement by integrating accelerations exceeding yield acceleration.',
        },
        {
          term: 'Sand Volcano',
          def: 'Surface vent of liquefied sand-water mixture, erupting through cracks during liquefaction.',
        },
        {
          term: 'Lateral Spreading',
          def: 'Horizontal movement of a liquefied layer toward a free face (riverbank, coast), displacing surface structures.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Secondary Hazard Mechanisms',
      body: 'Secondary hazards are governed by site-specific conditions: soil type, saturation, slope angle, and proximity to free faces or water bodies. Hazard maps for liquefaction and landslide susceptibility, combined with building codes that prohibit certain uses on vulnerable sites, reduce risk substantially.',
      cards: [
        {
          name: 'Liquefaction',
          icon: Layers,
          color: BRAND.coral,
          desc: 'Saturated loose sand loses shear strength when pore pressure equals overburden. Buildings sink; pipes float.',
          examples: '2011 Christchurch M 6.2: ~10,000 homes on liquefiable alluvial sand damaged or destroyed. Suburbs abandoned.',
        },
        {
          name: 'Lateral Spreading',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Liquefied layer spreads toward riverbank or coast. Surface cracks open; bridges and pipelines rupture.',
          examples: '1964 Alaska M 9.2: Turnagain Heights lateral spread destroyed 75 homes; 130-hectare block displaced 600 m seaward.',
        },
        {
          name: 'Seismic Landslide',
          icon: Mountain,
          color: BRAND.gold,
          desc: 'Shaking adds horizontal force to slopes. Saturated soils or weak layers fail. Run-out can be kilometres.',
          examples: '1970 Peru M 7.9: Huascarán avalanche 50 million m³ debris, 280 km/h, buried Yungay. ~18,000 dead.',
        },
        {
          name: 'Fire Following EQ',
          icon: Zap,
          color: BRAND.ruby,
          desc: 'Broken gas lines ignite; ruptured water mains impede firefighting. Can exceed structural damage.',
          examples: '1906 San Francisco: earthquake shaking moderate; 3-day fire destroyed 28,000 buildings, 3,000+ dead.',
        },
        {
          name: 'Dam/Levee Failure',
          icon: Activity,
          color: BRAND.amethyst,
          desc: 'Earthfill dams on liquefiable foundations fail; concrete dams crack. Downstream flooding amplifies casualties.',
          examples: '2008 Sichuan M 7.9: 1,996 dams damaged, 69 barrier lakes formed; 300,000 downstream evacuated.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Liquefaction: From Stable Soil to Fluid Ground',
      body: `The step-by-step physical process that turns stable saturated sand into a destructive fluid during an earthquake.`,
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how stable water-saturated sand progressively loses shear strength during earthquake shaking as pore pressure builds to produce a liquefied state, surface manifestations, and ultimately drives mitigation strategies',
        nodes: [
          {
            id: 'stable-soil',
            label: 'Stable Saturated Sand',
            description: 'Water-saturated loose sand below water table. Effective stress holds grains together. Shear strength adequate to support structures.',
            color: BRAND.jade,
          },
          {
            id: 'seismic-shaking',
            label: 'Earthquake Shaking',
            description: 'Cyclic loading from seismic waves compresses the loose sand structure. Grains try to rearrange into denser packing.',
            color: BRAND.coral,
          },
          {
            id: 'pore-pressure',
            label: 'Pore Pressure Build-Up',
            description: `Water cannot drain fast enough; pore water pressure increases. Effective stress (σ\' = σ - u) decreases toward zero.`,
            color: BRAND.gold,
          },
          {
            id: 'liquefied',
            label: 'Liquefied State',
            description: 'Effective stress = 0. Sand-water mixture behaves as a dense fluid with essentially zero shear strength.',
            color: BRAND.ruby,
          },
          {
            id: 'surface-effects',
            label: 'Surface Manifestations',
            description: 'Sand volcanoes erupt; buildings tilt and sink; buried pipes and tanks float; lateral spreading toward free faces.',
            color: BRAND.amethyst,
          },
          {
            id: 'remediation',
            label: 'Mitigation Measures',
            description: 'Densification (vibro-compaction, dynamic compaction), drainage (stone columns), grouting, or structural deep foundations bypass liquefiable layer.',
            color: BRAND.accent,
          },
        ],
        edges: [
          { from: 'stable-soil',     to: 'seismic-shaking', label: 'Earthquake strikes' },
          { from: 'seismic-shaking', to: 'pore-pressure',   label: 'Undrained cyclic loading' },
          { from: 'pore-pressure',   to: 'liquefied',       label: 'Effective stress → 0' },
          { from: 'liquefied',       to: 'surface-effects', label: 'Loss of bearing capacity' },
          { from: 'liquefied',       to: 'remediation',     label: 'Recognised vulnerability' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What physical condition must exist for liquefaction to occur?',
          a: [
            'Dry sand on steep slopes with vertical fractures',
            'Water-saturated cohesionless sediment (loose sand or silt) subjected to cyclic loading',
            'Overconsolidated clay with low plasticity index under static loading',
            'Dense gravel with interlocking angular grains near the water table',
          ],
          correct: 1,
          explain: 'Liquefaction requires three conditions simultaneously: (1) cohesionless sediment (sand, silt) — clay particles have electrical cohesion that resists liquefaction; (2) saturation — pore water must be present to build up pressure; (3) loose packing — densely packed sands drain or rearrange quickly enough to resist liquefaction. Cyclic earthquake shaking is the triggering mechanism that builds up pore pressure in this susceptible material. Dense sands and gravels are generally resistant; loose fills placed without compaction in coastal or riverine areas are most vulnerable.',
        },
        {
          q: 'During liquefaction, which observable phenomenon involves pressurised water-sand mixtures erupting at the surface?',
          a: [
            'Lateral spreading',
            'Newmark displacement',
            'Sand volcanoes (sand boils)',
            'Turbidite formation',
          ],
          correct: 2,
          explain: 'Sand volcanoes (also called sand boils or sand blows) form when liquefied sand-water mixtures under excess pore pressure find weak points in the ground surface and erupt upward. They look like small volcanoes or craters surrounded by ejected sand. Sand volcanoes are visible surface evidence of subsurface liquefaction and were observed across much of Christchurch, NZ after the 2011 earthquakes, as well as after the 1964 Alaska earthquake and numerous other liquefaction events.',
        },
        {
          q: 'The 1964 Alaska earthquake triggered "lateral spreading" at Turnagain Heights. What does lateral spreading mean?',
          a: [
            'Vertical settlement of buildings into liquefied ground',
            'Horizontal movement of a liquefied surface layer toward a free face such as a riverbank or coastline',
            'Lateral propagation of seismic surface waves into adjacent geological basins',
            'Horizontal extension of fault rupture beyond the locked seismogenic zone',
          ],
          correct: 1,
          explain: 'Lateral spreading is a particularly destructive form of liquefaction failure where the liquefied layer flows horizontally toward a free face — typically a riverbank, coastal bluff, or excavation. The overlying non-liquefied crust moves with it, opening large ground cracks perpendicular to the direction of movement. At Turnagain Heights in Anchorage, a 130-hectare block of land moved up to 600 m toward Cook Inlet, destroying 75 homes. Lateral spreading is especially damaging to bridges and pipelines that cross the spreading zone.',
        },
        {
          q: 'What made the 1970 Ancash earthquake in Peru so catastrophically deadly beyond the direct shaking?',
          a: [
            'Liquefaction destroyed all buildings within 50 km of the epicentre',
            'The earthquake triggered the Huascarán avalanche, which travelled at 280 km/h and buried entire towns',
            'A dam failure flooded the coastal lowlands, drowning tens of thousands',
            'Fire following the earthquake burned the densely populated capital city',
          ],
          correct: 1,
          explain: 'The Mw 7.9 Ancash earthquake destabilised the glaciated north peak of Mount Huascarán (6,654 m). About 50 million cubic metres of rock, ice, and glacial debris avalanched down the steep Llanganuco valley at speeds estimated at 280 km/h. The flow buried the city of Yungay (population ~18,000) under several metres of debris within minutes. Total death toll from the earthquake and associated mass movements reached ~70,000, making it the deadliest earthquake disaster in South American history. The Huascarán avalanche alone is the deadliest landslide in recorded history.',
        },
        {
          q: 'Why is fire-following-earthquake considered a major urban hazard even in modern cities?',
          a: [
            'Modern buildings use highly flammable composite materials that ignite from frictional heat',
            'Broken gas lines provide ignition sources while ruptured water mains simultaneously impair firefighting capacity',
            'Seismic shaking increases atmospheric oxygen concentration, promoting combustion',
            'Urban heat islands concentrate electrical discharge, igniting fires across the city grid',
          ],
          correct: 1,
          explain: 'Fire following earthquake creates a deadly combination: gas leaks from fractured distribution pipes provide numerous ignition sources, while broken water mains drain pressure from firefighting hydrants. In the 1906 San Francisco earthquake, the shaking was actually moderate (M 7.9 at distance) but the subsequent 3-day conflagration destroyed 28,000 buildings and killed most of the ~3,000 victims. Modern mitigation includes earthquake-triggered automatic gas shutoff valves, distributed water storage cisterns independent of the main distribution network, and urban fire-break planning. Tokyo and Los Angeles have invested heavily in these systems given their high seismic exposure.',
        },
      ],
    },
  ],
}

export default liquefactionLandslides
