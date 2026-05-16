import { Layers, Globe, Activity, Zap, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const chemicalPhysicalWeathering: Lesson = {
  id: 'geom-101-1-1-1',
  title: 'Chemical and Physical Weathering',
  track: 'cli',
  trackName: 'Geomorphology',
  level: 'Foundations',
  duration: '12 min',
  xpReward: 120,
  description: 'How rocks break down through mechanical disintegration and chemical decomposition — the first step in shaping all landscapes',
  sources: [
    { org: 'USGS',      title: 'USGS Geology',                           url: 'https://www.usgs.gov' },
    { org: 'BGS',       title: 'BGS British Geological Survey',          url: 'https://www.bgs.ac.uk' },
    { org: 'OpenStax',  title: 'OpenStax Physical Geography',            url: 'https://openstax.org' },
    { org: 'GSA',       title: 'GSA Geological Society of America',      url: 'https://www.geosociety.org' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Breaking rocks down: the physical and chemical forces that turn solid rock into sediment and soil',
      body: `Weathering is the in-place breakdown of rock at or near Earth\'s surface, and it is the essential first step in producing sediment, soil, and the landforms that define every landscape. Two broad categories of weathering operate simultaneously and reinforce each other: physical (mechanical) weathering, which disintegrates rock into smaller pieces without changing its mineral chemistry, and chemical weathering, which decomposes minerals through chemical reactions, transforming rock from the inside out.

Physical weathering processes are most effective wherever temperature fluctuates across critical thresholds or where confining pressure changes. Freeze-thaw cycling (frost wedging) is the most powerful mechanical agent in alpine and periglacial environments. Water is anomalous in that it expands approximately 9% on freezing, exerting pressures of up to 207 MPa in confined rock pores and joints. The process is most effective between 0°C and −5°C, because in that range water remains liquid in larger pores but begins to freeze in smaller ones, maximising the hydraulic pressure differential. Below −5°C, most pore water is already frozen and volumetric change is small; above 0°C no freezing occurs. Thermal expansion and contraction acts primarily in deserts and on bare rock surfaces, where diurnal temperature swings of ~40°C stress mineral grain boundaries through differential thermal expansion — a mechanism called insolation weathering or thermoclasty. Salt crystallisation (haloclasty) is critical in coastal, arid, and urban environments: halite and gypsum crystals grow in rock pores as saline solutions evaporate, exerting disruptive pressures that exceed the tensile strength of many lithologies. Pressure unloading or exfoliation occurs when deep plutonic rocks — granite, gneiss — are exposed by erosion: removal of overlying rock (overburden) releases confining pressure and the rock expands outward, generating curved sheeting joints parallel to the topographic surface and producing the characteristic exfoliation domes seen at Yosemite\'s Half Dome.

Chemical weathering attacks the mineral lattice itself, converting thermodynamically unstable primary minerals (crystallised at high temperatures and pressures deep in Earth) into secondary minerals stable under low-temperature, water-rich surface conditions. Hydrolysis is the most important chemical weathering reaction globally: water molecules dissociate and H⁺ ions attack silicate mineral frameworks, releasing cations and producing clay minerals. The reaction of potassium feldspar (orthoclase) illustrates the process: K-feldspar + water → kaolinite + K⁺ in solution + dissolved SiO₂. Hydrolysis rates are controlled by temperature (following the Arrhenius equation — rates approximately double per 10°C increase) and by mineral surface area, which is why physical weathering and chemical weathering are synergistic: fracturing increases surface area and accelerates subsequent chemical attack. Carbonation dissolves carbonate rocks: CO₂ dissolves in rainwater to form carbonic acid (H₂CO₃), which reacts with calcium carbonate as CaCO₃ + CO₂ + H₂O → Ca²⁺ + 2HCO₃⁻, carrying dissolved ions into groundwater and rivers. This reaction underpins all karst topography. Oxidation converts ferrous iron (Fe²⁺) in minerals such as biotite and pyroxene to ferric iron (Fe³⁺) in goethite and hematite, producing the red and orange colours of lateritic soils and ferricretes. Hydration incorporates water molecules directly into mineral structures, expanding volume and weakening mineral bonds.

Climate exerts master control over weathering intensity. Chemical reaction rates roughly double with each 10°C rise in temperature; humid tropical regions with year-round warmth and abundant rainfall therefore develop the deepest and most chemically advanced weathering profiles on Earth. Tropical laterites and bauxites can extend 30–100 m below the surface, whereas polar and high-alpine areas experience shallow weathering dominated by physical processes. The balance between the rate of rock exposure by erosion (supply-limited) and the rate of chemical transformation (weathering-limited) determines the nature of regolith: transport-limited landscapes accumulate deep weathering mantles, while weathering-limited landscapes expose near-fresh bedrock at the surface.

Weathering products depend on the intensity of leaching. Moderate hydrolysis produces smectite and illite clays; intense, prolonged tropical leaching produces kaolinite and ultimately gibbsite (Al(OH)₃) as silica is progressively removed. Quartz is highly resistant and concentrates as a residual mineral in soils and sand deposits worldwide. Iron oxides (hematite, goethite) are nearly universal in oxidising, well-drained tropical soils. Together these secondary minerals constitute the regolith — the mantle of altered, unconsolidated material covering bedrock — which is the foundation for soil formation and the primary medium for terrestrial ecosystems.`,
      keyTerms: [
        {
          term: 'frost wedging',
          def: 'Mechanical breakdown of rock caused by the ~9% volumetric expansion of water on freezing in pores and joints; most effective between 0°C and −5°C where pressure can reach up to 207 MPa.',
        },
        {
          term: 'hydrolysis',
          def: 'The dominant chemical weathering reaction globally, in which H⁺ ions from water attack silicate mineral frameworks, releasing cations and producing secondary clay minerals such as kaolinite from K-feldspar.',
        },
        {
          term: 'carbonation',
          def: 'Dissolution of carbonate minerals (especially CaCO₃) by carbonic acid formed when CO₂ dissolves in rainwater; the chemical mechanism driving karst landscape development.',
        },
        {
          term: 'exfoliation',
          def: `Formation of curved sheeting joints parallel to the rock surface, caused by stress release as overlying rock is removed by erosion and confining pressure decreases; responsible for features such as Yosemite\'s Half Dome.`,
        },
        {
          term: 'laterite',
          def: 'A deeply weathered, iron- and aluminium-rich regolith formed under intense tropical chemical weathering; characterised by red or orange hematite and goethite, and can extend 30–100 m below the surface.',
        },
      ],
    },
    {
      type: 'callout' as const,
      variant: 'insight',
      headline: 'Frost wedging is most effective between 0°C and −5°C — not at very cold temperatures',
      body: 'Frost wedging is most effective between 0°C and −5°C — not at very cold temperatures. In this range, water in larger pores remains liquid while freezing in smaller cracks, creating hydraulic pressure up to 207 MPa. That\'s 5 times more pressure than at the bottom of the deepest ocean trench.',
    },
    {
      type: 'concept',
      title: 'Weathering Processes and Products',
      body: `Physical and chemical weathering operate in concert. Physical processes increase rock surface area, accelerating chemical attack; chemical alteration weakens mineral bonds, facilitating further mechanical disintegration. The dominant process varies with climate: cold, arid, and high-relief settings favour physical weathering; warm, humid, low-relief settings favour deep chemical weathering. The mineral products — clay minerals, iron oxides, and residual quartz — record the intensity and duration of weathering and form the parent material for soils.`,
      cards: [
        {
          name: 'Physical Weathering Processes',
          icon: Layers,
          color: BRAND.accent,
          desc: 'Mechanical disintegration without chemical change. Key mechanisms: freeze-thaw cycling (frost wedging), thermal expansion and contraction (thermoclasty), salt crystallisation (haloclasty), and pressure unloading (exfoliation). All increase rock surface area, amplifying subsequent chemical weathering.',
          examples: `Frost wedging drives alpine rockfalls in the Alps and Himalayas; thermal spalling produces ventifacts and desert pavements; pressure-release exfoliation creates domes like Yosemite\'s Half Dome and Stone Mountain, Georgia.`,
        },
        {
          name: 'Chemical Weathering: Hydrolysis and Carbonation',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Hydrolysis converts unstable primary silicate minerals (feldspars, micas) to stable secondary clay minerals; rate doubles per 10°C. Carbonation dissolves carbonate rocks via H₂CO₃, creating karst. Both reactions require water and are strongest in warm, humid climates.',
          examples: 'Feldspar → kaolinite in granite saprolite (deeply weathered rock retaining parent rock structure but chemically altered throughout); limestone karst towers in Guilin, China and Yucatán cenotes; bauxite (gibbsite-rich) formation in tropical West Africa and Jamaica.',
        },
        {
          name: 'Weathering Products: From Primary to Secondary Minerals',
          icon: Activity,
          color: BRAND.coral,
          desc: 'Primary minerals (quartz, K-feldspar, plagioclase, micas) transform to secondary minerals under surface conditions. Moderate weathering yields smectite and illite; intense tropical weathering yields kaolinite, gibbsite, hematite, and goethite. Quartz is the most resistant residual mineral.',
          examples: 'Tropical laterites in the Congo Basin and Amazonia reach 30+ m depth; quartz sand — the ultimate weathering residue of granite — forms continental dune fields and beaches worldwide.',
        },
        {
          name: 'Climate Controls and Weathering Intensity',
          icon: ArrowRight,
          color: BRAND.gold,
          desc: 'Temperature and moisture are master variables. Chemical weathering rates approximately double per 10°C (Arrhenius kinetics). Humid tropical regions develop 10–100× deeper weathering profiles than polar or arid regions. The ratio of weathering rate to erosion rate determines whether landscapes are weathering-limited or transport-limited.',
          examples: 'Deep saprolite (deeply weathered rock that retains the parent rock\'s original structure but has been chemically altered throughout; common in tropical landscapes) in the Piedmont of the southeastern USA reaches 30 m+; transport-limited landscapes in humid tropics have thick regolith; weathering-limited Arctic and alpine landscapes expose near-fresh bedrock.',
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
      title: 'Weathering Cascade: From Fresh Bedrock to Regolith',
      body: 'Follow the weathering cascade as fresh bedrock is progressively broken down by physical and chemical processes, tracing the transformation from intact rock to the clay- and oxide-rich regolith that forms the foundation of soils.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Follow the weathering cascade as fresh bedrock is progressively broken down by physical and chemical processes, tracing the transformation from intact rock to the clay- and oxide-rich regolith that forms the foundation of soils.',
        nodes: [
          {
            id: 'fresh-bedrock',
            label: 'Fresh Bedrock',
            description: `Intact, unweathered rock (granite, limestone, basalt). Primary minerals — quartz, feldspars, micas, carbonates — are thermodynamically unstable at Earth\'s surface. Permeability is low; chemical weathering is slow until fractures develop.`,
            color: BRAND.textDim,
          },
          {
            id: 'physical-fracturing',
            label: 'Physical Fracturing',
            description: 'Frost wedging, thermal expansion, salt crystallisation, and pressure unloading create joints, fractures, and cleavage planes. Rock is mechanically disintegrated into smaller blocks and grains without mineral chemistry change. Critical first step: fractures allow water ingress.',
            color: BRAND.accent,
          },
          {
            id: 'increased-surface-area',
            label: 'Increased Surface Area',
            description: 'Fragmentation dramatically increases reactive surface area. A 1 m cube broken into 1 mm³ cubes increases surface area by a factor of 1,000. Greater surface exposure to water and dissolved CO₂ accelerates all chemical weathering reactions by orders of magnitude.',
            color: BRAND.gold,
          },
          {
            id: 'chemical-alteration',
            label: 'Chemical Alteration Front',
            description: 'Hydrolysis, carbonation, and oxidation attack mineral surfaces. Feldspars dissolve and reprecipitate as clay minerals; carbonate grains dissolve entirely; Fe²⁺ oxidises to Fe³⁺. The alteration front migrates downward as long as water and CO₂ are available. Defines the base of the weathering profile.',
            color: BRAND.jade,
          },
          {
            id: 'clay-oxide-products',
            label: 'Clay / Oxide Products',
            description: 'Secondary minerals crystallise in place: kaolinite, smectite, illite (clay minerals); hematite and goethite (iron oxides); gibbsite (aluminium hydroxide in intense tropical weathering). These products are stable at surface conditions and accumulate as the weathering profile matures.',
            color: BRAND.coral,
          },
          {
            id: 'regolith-saprolite',
            label: 'Regolith / Saprolite',
            description: `The complete weathering mantle — from freshly fractured rock at the base to fully altered material at the surface. Saprolite retains the original rock\'s texture and fabric but is chemically transformed. Thickness ranges from centimetres in polar regions to 100+ m in humid tropics. Foundation for all terrestrial soils.`,
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'fresh-bedrock',         to: 'physical-fracturing',    label: 'Freeze-thaw, thermal stress, salt crystallisation, unloading' },
          { from: 'physical-fracturing',    to: 'increased-surface-area', label: 'Fragmentation multiplies reactive surface' },
          { from: 'increased-surface-area', to: 'chemical-alteration',    label: 'Water and CO₂ penetrate fractures' },
          { from: 'chemical-alteration',    to: 'clay-oxide-products',    label: 'Hydrolysis, carbonation, oxidation reactions' },
          { from: 'clay-oxide-products',    to: 'regolith-saprolite',     label: 'Accumulation and maturation of weathering profile' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Why is freeze-thaw weathering most effective when temperatures cycle between 0°C and −5°C?',
          a: [
            'Below −5°C ice contracts, exerting maximum tension on rock walls',
            'Water expands 9% on freezing, generating up to 207 MPa; below −5°C pore water is already frozen and little further expansion occurs; above 0°C no freezing takes place',
            'At exactly 0°C water is in a supercooled state that maximises its corrosive power',
            'Temperatures below −5°C cause thermal contraction that seals fractures, preventing water entry',
          ],
          correct: 1,
          explain: `Frost wedging depends on the phase change of liquid water to ice. Water is anomalous in expanding ~9% when it freezes, and in confined rock pores this expansion can generate pressures up to 207 MPa — far exceeding the tensile strength of most rocks (typically 5–25 MPa). The temperature window of 0°C to −5°C is optimal because larger pores still contain liquid water that can migrate and refreeze while smaller pores freeze first, maximising the hydraulic pressure differential. Below −5°C, nearly all pore water has already frozen and volumetric change is small; above 0°C no freezing occurs. Repeated daily or seasonal cycling through this range drives progressive crack propagation and rockfall in alpine and periglacial environments.`,
        },
        {
          q: 'In the hydrolysis of K-feldspar, what are the three main products?',
          a: [
            'Kaolinite (clay mineral), K⁺ ions in solution, and dissolved silica (SiO₂)',
            'Quartz, potassium carbonate (K₂CO₃), and water',
            'Hematite (Fe₂O₃), silicic acid, and calcium bicarbonate',
            'Smectite clay, calcium ions (Ca²⁺), and carbon dioxide',
          ],
          correct: 0,
          explain: `The hydrolysis of potassium feldspar (KAlSi₃O₈) produces three main products: kaolinite Al₂Si₂O₅(OH)₄ — a stable secondary clay mineral; K⁺ ions released into soil solution and eventually carried to the ocean; and dissolved silicic acid (H₄SiO₄ / SiO₂ in solution) that may be leached away or precipitate as opaline silica. Note that quartz (crystalline SiO₂) is a primary mineral formed at high temperature and is the most weathering-resistant common mineral — it is not a hydrolysis product. The rate of this reaction is temperature-sensitive and approximately doubles per 10°C warming, making tropical granite weathering far more intense than polar equivalents.`,
        },
        {
          q: 'Why does carbonation dissolve limestone but has little effect on granite?',
          a: [
            'Granite is harder than limestone, so carbonic acid cannot penetrate its surface',
            'Limestone is more porous than granite, allowing acid to percolate through freely',
            'Granite contains silicate minerals not susceptible to carbonic acid; limestone consists of CaCO₃ which reacts directly with H₂CO₃ to produce soluble Ca²⁺ and HCO₃⁻',
            'Carbonic acid is too dilute to affect any crystalline rock at ambient temperatures',
          ],
          correct: 2,
          explain: `The key is mineral chemistry, not rock hardness or porosity. Carbonation works because carbonic acid (H₂CO₃, formed when CO₂ dissolves in rainwater) reacts specifically with carbonate minerals: CaCO₃ + CO₂ + H₂O → Ca²⁺ + 2HCO₃⁻. Both Ca²⁺ and bicarbonate ions are soluble and are carried away in solution, leaving no solid residue — the entire rock dissolves. Granite is composed primarily of quartz, potassium feldspar, plagioclase, and micas. These silicate minerals do not react significantly with carbonic acid; they are instead attacked by hydrolysis. Hardness (granite Mohs ~6–7, calcite Mohs 3) is relevant to abrasion, not chemical dissolution, which depends entirely on the thermodynamic solubility of the mineral in the acid solution.`,
        },
        {
          q: 'Exfoliation (sheeting) joints in massive granite batholiths form as curved fractures parallel to the topographic surface. What is the primary mechanism driving their formation?',
          a: [
            'Thermal expansion and contraction cycling that preferentially fractures the outer rock shell',
            'Stress release and pressure unloading as overlying rock is removed by erosion; confining pressure decreases and the rock expands outward, generating curved fractures parallel to the surface',
            'Chemical hydration of feldspars that causes volume expansion in the outer rock layer',
            'Freeze-thaw action concentrated along sub-horizontal joint sets inherited from original magma cooling',
          ],
          correct: 1,
          explain: `Granite and other plutonic rocks crystallise under enormous confining pressures several kilometres below the surface. When erosion strips away the overlying rock (overburden), the confining pressure is gradually released. The rock, no longer held under compression from above, expands elastically outward — perpendicular to the now-free surface. This expansion generates tensile stresses parallel to the surface that propagate as curved sheeting joints (also called pressure-release joints or unloading joints), typically spaced metres to tens of metres apart and following the topographic surface of the dome. The result is a characteristic onion-skin layering of curved slabs. Yosemite\'s Half Dome and Stone Mountain, Georgia are textbook examples. While thermal and freeze-thaw weathering exploit these joints once formed, they do not create the primary sheeting geometry.`,
        },
        {
          q: 'Why do humid tropical regions develop weathering profiles 10–100 times deeper than cold-temperate or polar regions?',
          a: [
            'Tropical rocks are mineralogically weaker, containing more carbonate and less quartz than high-latitude rocks',
            'Greater seasonal temperature contrasts in the tropics drive more intense frost wedging',
            'Tropical rivers transport more sediment, exposing fresh rock surfaces more rapidly',
            'Higher temperatures accelerate chemical reaction rates (Arrhenius kinetics); abundant rainfall drives continuous hydrolysis and carbonation year-round; there is no frost-limited dormant season, so weathering operates continuously for millions of years',
          ],
          correct: 3,
          explain: `Weathering profile depth reflects the integrated product of reaction rate and time. In humid tropical environments, three factors combine to maximise chemical weathering intensity: (1) High temperature — following the Arrhenius equation, chemical reaction rates approximately double per 10°C increase, so tropical mean temperatures of 25–30°C yield reaction rates 4–8× faster than temperate regions at 5–15°C; (2) Abundant water — high rainfall and humidity maintain saturated conditions that sustain hydrolysis, carbonation, and oxidation throughout the year; (3) Continuous operation — unlike temperate and polar regions where freezing temperatures halt chemical reactions for months, tropical systems operate year-round without dormant seasons. Over millions of years of tectonic stability, these conditions produce saprolite and laterite profiles 30–100 m deep in the Congo Basin, Amazonia, West Africa, and tropical Australia, compared to metres in temperate regions and centimetres in Arctic areas.`,
        },
      ],
    },
  ],
}

export default chemicalPhysicalWeathering
