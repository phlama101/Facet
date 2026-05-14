import { Activity, Layers, Globe, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const massWasting: Lesson = {
  id: 'geom-101-1-1-3',
  title: 'Mass Wasting: Landslides, Debris Flows, and Slope Failure',
  track: 'cli',
  trackName: 'Geomorphology',
  level: 'Foundations',
  duration: '12 min',
  xpReward: 120,
  description: 'The spectrum of gravity-driven slope failures — from slow soil creep to catastrophic rockslides — their triggers, mechanics, and hazard assessment',
  sources: [
    { org: 'USGS',  title: 'USGS — Landslide Hazards Program',                                   url: 'https://www.usgs.gov/programs/landslide-hazards' },
    { org: 'BGS',   title: 'BGS — Landslides',                                                    url: 'https://www.bgs.ac.uk' },
    { org: 'IAEG',  title: 'IAEG — International Association for Engineering Geology',             url: 'https://www.iaeg.info' },
    { org: 'AGU',   title: 'AGU — Landslide and Mass Movement Research',                          url: 'https://agupubs.onlinelibrary.wiley.com' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The spectrum of gravity-driven slope failures — from slow soil creep to catastrophic rockslides — their triggers, mechanics, and hazard assessment',
      body: `Mass wasting encompasses all gravity-driven downslope movement of rock, debris, and soil. The Varnes classification organises movements by material type (rock, debris, earth) and movement style (fall, slide, flow, creep), giving a matrix of failure modes that range in velocity from millimetres per year (soil creep) to more than 100 m/s (rock avalanche). Understanding which mode will occur — and how fast — is central to hazard assessment.

Slope stability is quantified by the Factor of Safety (FS), defined as the ratio of resisting forces to driving forces: FS = τ_resisting / τ_driving. A slope with FS > 1 is stable; FS = 1 is at the verge of failure; FS < 1 means failure is occurring. Engineering practice typically requires FS ≥ 1.3–1.5 to accommodate uncertainty in soil parameters. The governing failure criterion is the Mohr-Coulomb equation: τ = c + σ\'tanφ, where c is cohesion, φ is the internal friction angle, and σ\' is effective normal stress. Effective normal stress equals total stress minus pore water pressure u: σ\' = σ − u.

Heavy rainfall is the most common trigger. Infiltrating water raises pore pressure u, reducing σ\' and therefore shear strength, while the driving stress (weight of the slope material) remains unchanged — FS decreases. The 2014 Oso debris avalanche in Washington State killed 43 people when a hillslope underlain by saturated glacial outwash and till liquefied after weeks of above-normal rainfall; FS dropped below 1 rapidly once pore pressures reached critical levels. Earthquakes are a second major trigger: the 2008 Mw 7.9 Wenchuan earthquake in Sichuan, China generated approximately 15,000 landslides, burying towns and blocking rivers to form hazardous landslide dams. Seismic shaking generates excess pore pressure in saturated soils and can fracture intact rock masses. Slope undercutting by rivers, coastal erosion, road construction, and deforestation are widespread anthropogenic triggers. Volcanic activity combines seismic shaking, hydrothermal alteration of rock strength, and crater-lake drainage to produce some of the largest mass movements on record — the 1970 Nevado Huascarán rockslide-debris flow in Peru killed approximately 22,000 people and travelled more than 160 km.

Debris flows are a particularly lethal sub-type: water-saturated granular material moves as a viscous slurry at 1–30 m/s, confined to channels before spreading across alluvial fans. Lahars — volcanic debris flows incorporating ash and pyroclastic material — can travel more than 100 km from the source volcano. The 1985 Nevado del Ruiz lahar buried the town of Armero, killing ~23,000. Alluvial fans in mountain valleys are archives of past debris-flow events and define the primary hazard footprint for future flows. Hazard zonation maps combine topographic analysis, geological mapping, rainfall frequency statistics, and runout modelling to delineate risk zones. Modern early warning systems couple rain-gauge networks, soil-moisture sensors, and seismometers with automated alerts, demonstrating that mass-wasting fatalities are substantially reducible with adequate monitoring infrastructure.`,
      keyTerms: [
        {
          term: 'Factor of Safety',
          def: 'FS = resisting forces / driving forces. FS > 1: stable; FS = 1: incipient failure; FS < 1: active failure.',
        },
        {
          term: 'Mohr-Coulomb Failure',
          def: `Shear strength criterion τ = c + σ\'tanφ; failure occurs when applied shear stress exceeds cohesion plus frictional resistance on the failure plane.`,
        },
        {
          term: 'Debris Flow',
          def: 'Rapid mass movement of water-saturated coarse debris moving as a viscous slurry at 1–30 m/s; highly destructive and channelised.',
        },
        {
          term: 'Rotational Slide',
          def: 'Landslide moving on a curved, concave-upward failure surface producing a backward-tilting head scarp; also called a slump.',
        },
        {
          term: 'Soil Creep',
          def: 'Imperceptibly slow downslope movement of soil at mm–cm/yr driven by freeze-thaw, wet-dry cycling, and gravity; bends tree trunks and tilts fence posts.',
        },
      ],
    },
    {
      type: 'callout' as const,
      variant: 'data',
      headline: 'The Grand Canyon is 446 km long, up to 29 km wide, and over 1,800 m deep',
      body: 'The Grand Canyon is 446 km long, up to 29 km wide, and over 1,800 m deep. The Colorado River carved it by removing an estimated 10 km³ of rock over 5-6 million years. The exposed rock layers span 1.8 billion years of Earth\'s history — nearly 40% of the planet\'s age.',
    },
    {
      type: 'concept',
      title: 'Mechanics and Types of Mass Wasting',
      body: `The Varnes classification links material type and movement kinematics to produce a practical taxonomy of landslides and related phenomena. Each type has a characteristic velocity range, failure geometry, and set of preconditions. Stability analysis using the Mohr-Coulomb framework links material properties to slope angle and pore pressure, providing a quantitative basis for hazard assessment and engineering design.`,
      cards: [
        {
          name: 'Classification by Material and Movement',
          icon: Activity,
          color: BRAND.accent,
          desc: 'Varnes classification: falls (free fall of rock/debris), slides (planar or rotational/slump), flows (debris, earth, mud), creep (slow continuous deformation). Velocity spans from mm/yr (creep) to 100+ m/s (rock avalanche). Material ranges from intact rock to saturated fine earth.',
          examples: 'Rock falls dominate cliff coasts and glacially oversteepened valleys; debris flows are the dominant hazard on alluvial fans in alpine and tropical settings; creep is ubiquitous on vegetated hillslopes and is diagnosed by curved tree trunks and terraced soil (terracettes).',
        },
        {
          name: 'Factor of Safety and Slope Stability',
          icon: Layers,
          color: BRAND.jade,
          desc: `FS = τ_resisting / τ_driving. Resisting forces depend on cohesion (c), friction angle (φ), and effective normal stress (σ\' = σ − u). Rainfall raises pore pressure u, reducing σ\' and shear strength while slope geometry (driving stress) is unchanged — FS decreases toward failure. Engineering slopes are designed to FS ≥ 1.3–1.5.`,
          examples: '2014 Oso, Washington: weeks of above-normal rainfall saturated glacial outwash deposits; FS dropped below 1 producing a debris avalanche that killed 43 and buried 1 km² of valley floor in seconds. Post-failure analysis showed the deposit had low residual friction angle (~20°).',
        },
        {
          name: 'Triggering Factors: Water, Earthquakes, and Humans',
          icon: Globe,
          color: BRAND.coral,
          desc: 'Rainfall infiltration raises pore pressure (most common trigger). Seismic shaking generates excess pore pressure in saturated soils and fractures rock masses. Road cuts, deforestation, and irrigation remove buttressing, add weight, and intercept runoff — reducing FS. Volcanic unrest combines all three mechanisms.',
          examples: '2008 Mw 7.9 Wenchuan earthquake triggered ~15,000 landslides across 50,000 km², blocking rivers and killing thousands. Deforestation-linked shallow debris flows are recurrent in the Philippines, Central America, and Brazil — root cohesion loss reduces FS by 0.1–0.5 on steep tropical slopes.',
        },
        {
          name: 'Debris Flows and Lahar Hazards',
          icon: ArrowRight,
          color: BRAND.gold,
          desc: 'Water-saturated debris moves as a viscous slurry at 1–30 m/s; pressure surges and boulders in the flow front cause structural destruction. Lahars (volcanic debris flows) incorporate ash and hydrothermally altered material and can travel 100+ km. Alluvial fans mark past deposition zones and define future hazard footprints.',
          examples: `1985 Nevado del Ruiz lahar buried Armero, Colombia, killing ~23,000 — the deadliest volcanic disaster of the 20th century. Hong Kong\'s 1976 rainstorm triggered hundreds of debris flows killing 18 people, directly driving the establishment of the Geotechnical Engineering Office (GEO) and systematic slope safety programmes.`,
        },
      ],
      interaction: {
        type: 'annotated-image' as const,
        src: '/visuals/geom.svg',
        alt: 'Cross-section of a hillslope showing soil horizon layers, frost wedging, a landslide failure plane, colluvial debris, and a stream channel at the base',
        aspectRatio: '16/9',
        credit: 'Facet Earth Sciences',
        annotations: [
          {
            id: 'soil-profile',
            x: 25,
            y: 60,
            label: 'Soil Horizon A',
            description: 'The uppermost soil layer (A horizon or topsoil), dark with organic matter derived from decomposed plant material (humus). This biologically active zone contains most soil organisms — bacteria, fungi, earthworms — and is the source of nutrients for plant growth. A horizon formation requires thousands of years; its loss to erosion or agricultural compaction severely degrades productivity and accelerates runoff.',
          },
          {
            id: 'failure-plane',
            x: 55,
            y: 70,
            label: 'Landslide Failure Plane',
            description: 'The surface along which a landslide or slump mass slides relative to stable material below. Failure planes often coincide with geological boundaries — clay layers, bedding planes, fractures, or the base of the regolith above bedrock. Water saturation increases pore pressure, reducing effective friction along the plane and triggering mass movement. The 2014 Oso (Washington) landslide killed 43 people along a saturated clay failure plane.',
          },
          {
            id: 'frost-wedging',
            x: 67,
            y: 56,
            label: 'Frost Wedging',
            description: 'A mechanical weathering process where water entering rock cracks freezes and expands by ~9%, exerting pressures up to 200 MPa. Repeated freeze-thaw cycles progressively widen cracks and shatter rock into angular fragments. Frost wedging is most active in periglacial environments where temperature repeatedly cycles around 0°C, and is responsible for the jagged appearance of alpine rock faces and talus slopes.',
          },
          {
            id: 'colluvium',
            x: 68,
            y: 88,
            label: 'Colluvium & Debris',
            description: 'Poorly sorted, mixed sediment accumulated at the slope base by gravity-driven mass movements: rockfall, landslides, debris flows, and soil creep. Unlike river-sorted alluvium, colluvium preserves no grain-size stratification. It signals past slope instability and can be remobilised by heavy rainfall, making colluvium-covered slopes hazardous for construction and vulnerable to debris flows during intense storm events.',
          },
          {
            id: 'stream-channel',
            x: 50,
            y: 94,
            label: 'Stream Channel',
            description: 'The channel at the base of the hillslope collects runoff and eroded sediment, transferring them downslope toward larger rivers and the ocean. The stream exerts basal erosion on the hillslope — if it incises downward, it steepens the slope above and increases mass movement frequency. Stream channels are the ultimate sediment sink and the basal boundary condition controlling long-term hillslope evolution.',
          },
        ],
      },
    },
    {
      type: 'visualization',
      title: 'Mass Wasting Process Chain: From Trigger to Deposition',
      body: 'Trace the sequence from an initial triggering event through slope failure to final deposition, identifying the key physical transitions at each stage.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Trace the sequence from an initial triggering event through slope failure to final deposition, identifying the key physical transitions at each stage.',
        nodes: [
          {
            id: 'trigger',
            label: 'Rainfall / Earthquake Trigger',
            description: 'Heavy rainfall infiltrates the slope, raising pore water pressure. Seismic shaking transmits stress waves that generate excess pore pressure in saturated soils and can fracture rock. Both mechanisms reduce effective normal stress and shear strength.',
            color: BRAND.accent,
          },
          {
            id: 'pore-pressure',
            label: 'Pore Pressure Increase',
            description: `Rising pore pressure u reduces effective normal stress σ\' = σ − u. By the Mohr-Coulomb equation τ = c + σ\'tanφ, lower σ\' means lower shear strength on the failure plane. The Factor of Safety (FS) begins declining toward 1.`,
            color: BRAND.jade,
          },
          {
            id: 'fs-drop',
            label: 'FS Drops Below 1',
            description: 'When shear stress on the failure surface exceeds shear strength, FS < 1 and the slope is no longer in equilibrium. Failure initiation can be rapid (seconds for rock falls) or progressive (hours to days for slow rotational slumps as cracks propagate).',
            color: BRAND.coral,
          },
          {
            id: 'initiation',
            label: 'Slope Initiation',
            description: 'The failure mass detaches. Falls involve free flight; slides maintain contact with the basal surface (planar or curved); flows incorporate water and behave as a slurry. The volume and saturation of material control subsequent mobility.',
            color: BRAND.gold,
          },
          {
            id: 'transport',
            label: 'Mass Movement Transport',
            description: 'Material travels downslope, potentially entraining additional sediment and water. Debris flows travel at 1–30 m/s in channels; rock avalanches can exceed 100 m/s on steep terrain. Runout distance scales with volume and slope gradient.',
            color: BRAND.amethyst,
          },
          {
            id: 'deposition',
            label: 'Deposition / Alluvial Fan',
            description: 'Movement ceases where slope angle decreases or material spreads and loses momentum. Debris-flow lobes and levées mark the runout path; coarser material is deposited first. Repeated events build alluvial fans — the primary hazard footprint for future flows.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'trigger',       to: 'pore-pressure', label: 'Infiltration or seismic shaking raises u' },
          { from: 'pore-pressure', to: 'fs-drop',        label: 'Reduced σ\' lowers shear strength' },
          { from: 'fs-drop',       to: 'initiation',     label: 'Shear stress exceeds strength → failure' },
          { from: 'initiation',    to: 'transport',      label: 'Mass detaches and accelerates downslope' },
          { from: 'transport',     to: 'deposition',     label: 'Energy dissipated; material spreads on fan' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The Factor of Safety (FS) for a slope is the ratio of resisting forces to driving forces. What FS value indicates a slope is on the verge of failure?',
          a: [
            'FS = 1.0 exactly',
            'FS = 0.5',
            'FS = 2.0',
            'FS = 1.5',
          ],
          correct: 0,
          explain: `FS = 1.0 means resisting forces exactly equal driving forces — the slope is in limit equilibrium, on the verge of failure. Above this value the slope is stable; below it, failure is occurring. Engineering practice uses FS ≥ 1.3–1.5 as a safety margin to account for uncertainty in soil parameters such as cohesion, friction angle, and pore pressure distribution. A slope with FS = 1.5 has resisting forces 50% greater than driving forces, providing a substantial buffer against unexpected increases in pore pressure or reduction in strength.`,
        },
        {
          q: 'How does heavy rainfall trigger slope failure without changing the slope geometry?',
          a: [
            'Rainfall adds weight to the slope, increasing the driving stress until it exceeds the fixed shear strength',
            'Rainfall chemically dissolves the cohesive bonds between soil particles, reducing cohesion to zero',
            'Infiltrating water raises pore water pressure, reducing effective normal stress and therefore shear strength while driving stress remains unchanged',
            'Rainfall cools the soil, causing thermal contraction that opens tension cracks along the failure surface',
          ],
          correct: 2,
          explain: `Infiltrating water raises pore water pressure u. By the Mohr-Coulomb equation τ = c + (σ − u)tanφ, increased pore pressure u reduces effective normal stress (σ − u), directly lowering the frictional component of shear strength. The driving stress (gravity component along the slope, determined by slope angle and material weight) is essentially unchanged during a rainfall event. As shear strength falls while driving stress stays constant, FS = strength/driving approaches 1 and eventually drops below it. This mechanism explains why many slopes fail during or shortly after intense or prolonged rainfall even though they have been stable for years under the same geometry.`,
        },
        {
          q: 'What distinguishes a rotational slide (slump) from a translational (planar) slide?',
          a: [
            'A rotational slide moves faster than a translational slide because the curved surface reduces friction',
            'A rotational slide moves on a curved, concave failure surface with a backward-tilting head scarp; a translational slide moves on a planar surface often parallel to bedding or a soil/bedrock contact',
            'A rotational slide always involves rock, whereas a translational slide always involves unconsolidated soil',
            'A rotational slide occurs only on coastal cliffs; a translational slide occurs only on inland hillslopes',
          ],
          correct: 1,
          explain: `A rotational slide (slump) moves on a curved, spoon-shaped failure surface. As the mass rotates, the head of the slide tilts backward, creating a distinctive backward-tilting scarp. This geometry tends to be self-stabilising to some degree because the rotating mass changes the stress distribution on the failure plane. A translational (planar) slide moves on a flat or gently undulating surface, typically coinciding with a geological weak plane such as a bedding plane, joint, or the soil/bedrock interface. Translational slides tend to travel longer distances and are less self-stabilising. Both types can occur in rock or soil depending on material properties and geological structure.`,
        },
        {
          q: 'The 2014 Oso landslide in Washington State was catastrophic partly because of the failure mode. What type of movement caused such rapid, long-runout destruction?',
          a: [
            'A rotational slump that slowly subsided over several hours, allowing evacuation',
            'A translational slide that moved along a bedding plane and stopped at the valley margin',
            'A rock fall that fragmented on impact and spread as a granular avalanche',
            'A debris avalanche: the saturated glacial outwash liquefied upon failure and transitioned from a slide to a rapid flow, travelling at high speed across the valley floor',
          ],
          correct: 3,
          explain: `The Oso (SR-530) landslide mobilised approximately 8 million cubic metres of glacial outwash and till that had been saturated by above-average winter and spring rainfall. Upon failure, the high pore pressure caused near-complete liquefaction of the deposit — the material transitioned from a slide to a debris avalanche that crossed the North Fork Stillaguamish River and spread more than 1 km across the valley floor in approximately 60 seconds. The combination of high water content (lowering residual friction to ~20°), a gentle runout surface, and large volume gave the flow extreme mobility — a hallmark of liquefaction-enhanced debris avalanches. Forty-three people were killed, making it the deadliest single landslide in US history.`,
        },
        {
          q: 'Why are tropical steep hillslopes particularly prone to shallow debris flows during intense rainfall events?',
          a: [
            'Tropical soils are entirely cohesionless sands with no plant roots, providing zero resistance to sliding',
            'Tropical vegetation intercepts all rainfall and delivers it directly to the slope surface as stemflow, concentrating runoff',
            'Deep, highly weathered regolith has low cohesion; intense rainfall quickly saturates thin permeable soil over impermeable weathered rock, raising pore pressure to critical levels combined with high clay content, steep slopes, and concentrated intense rainfall',
            'Tropical slopes are underlain by soluble limestone that dissolves during rainfall, creating subsurface voids that cause sudden collapse',
          ],
          correct: 2,
          explain: `Tropical weathering produces deep saprolite and regolith with high clay and sesquioxide content. Although clay minerals can provide some cohesion when dry, that cohesion drops dramatically at saturation. Tropical rainstorms are often intense (>50 mm/hr), rapidly saturating the upper few metres of permeable regolith while the underlying weathered bedrock or laterite horizon acts as a relatively impermeable barrier. Pore pressures build quickly at this interface, reducing FS in the shallow soil to below 1. The combination of deeply weathered low-cohesion material, steep slopes typical of dissected tropical highlands, and high-intensity rainfall creates optimum conditions for shallow translational failures that mobilise into debris flows. Deforestation exacerbates this by removing root cohesion (which can contribute 1–20 kPa of apparent cohesion) and increasing peak rainfall input to the soil.`,
        },
      ],
    },
  ],
}

export default massWasting
