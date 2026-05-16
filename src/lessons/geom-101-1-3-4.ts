import { Layers, Activity, Globe, Zap } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const periglacialPermafrost: Lesson = {
  id: 'geom-101-1-3-4',
  title: 'Periglacial Processes and Permafrost',
  track: 'cli',
  trackName: 'Geomorphology',
  level: 'Foundations',
  duration: '13 min',
  xpReward: 130,
  description: 'Frozen ground processes that shape Arctic and alpine landscapes — permafrost degradation, patterned ground, pingos, and the carbon climate feedback from thawing permafrost',
  sources: [
    { org: 'IPA',  title: 'IPA — International Permafrost Association',       url: 'https://www.permafrost-ipcc.net' },
    { org: 'NSIDC', title: 'NSIDC — Permafrost',                              url: 'https://nsidc.org/cryosphere/frozenground' },
    { org: 'USGS', title: 'USGS',                                             url: 'https://www.usgs.gov' },
    { org: 'GPCN', title: 'Global Permafrost Carbon Network',                 url: 'https://www.permafrostcarbon.org' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Periglacial environments, permafrost, and the frozen carbon store',
      body: `The periglacial environment encompasses regions subject to intense frost action without being covered by glaciers — principally Arctic and sub-Arctic tundra and alpine zones. These areas cover approximately 25% of Earth\'s land surface and are defined by extreme freeze-thaw cycling, persistent ground ice, and the presence of permafrost.

Permafrost is ground (soil or rock) that remains at or below 0°C (32°F) for two or more consecutive years. It is classified by spatial extent: continuous permafrost (>90% of area frozen, mean annual ground temperature typically below −5°C (23°F)), discontinuous permafrost (50–90% coverage, temperatures between −5°C (23°F) and 0°C (32°F)), and sporadic permafrost (<10% coverage, near the southern limit of permafrost). The active layer is the surface zone that thaws seasonally each summer; it ranges from 0.3 m (1 ft) in high-Arctic tundra to 2 m (7 ft) or more in warmer, discontinuous zones. Below the active layer, the permafrost table marks the upper boundary of perennially frozen ground.

Permafrost is an immense carbon store: approximately 1,500 Gt of organic carbon — roughly twice the amount currently in the atmosphere as CO₂ — is locked in frozen soils. This material consists of ancient plant material, animal remains, and Pleistocene-era vegetation preserved by cold temperatures that have inhibited microbial decomposition for thousands to hundreds of thousands of years.

Key periglacial landforms include ice-wedge polygons, which form by thermal contraction cracking of frozen ground in winter. When temperatures drop below −10°C to −20°C, the ground contracts and cracks open; meltwater infiltrates and refreezes each spring, adding a thin ice vein. Repeated over centuries, these cycles build ice wedges 1–3 m wide and 3–5 m deep, creating a polygonal patterned ground network visible from satellite. Low-centred polygons have raised rims and a depressed, wet centre; high-centred polygons occur where ice wedge melt has lowered the rims and raised the central block.

Pingos are ice-cored mounds 3–70 m high with two distinct origins. Hydraulic (open-system) pingos form where artesian groundwater under pressure forces upward through thin permafrost and freezes near the surface. Hydrostatic (closed-system) pingos form under drained lake beds where the talik (unfrozen zone beneath the lake) refreezes from above and sides, trapping and pressurising porewater that freezes and uplifts the overlying surface. Palsas are smaller peat-covered permafrost mounds. Solifluction is the slow downslope flow of water-saturated active-layer soil at rates of 1–25 cm/yr; the impermeable permafrost table below prevents drainage and waterlogging reduces shear strength, allowing flow even on 2–3° gradients, producing solifluction lobes and sheets. Stone sorting into circles, stripes, and nets results from differential frost heave.

Thermokarst describes the irregular, hummocky terrain produced by subsidence as ice-rich permafrost thaws and the volume formerly occupied by ground ice collapses. Thermokarst lakes form in these depressions and are a significant source of CH₄ from anaerobic decomposition. Under current warming, permafrost temperatures have risen approximately 0.3°C per decade globally, the active layer is deepening, thermokarst is expanding, and Arctic communities face accelerating infrastructure damage as the ground beneath roads, buildings, and pipelines destabilises.`,
      keyTerms: [
        {
          term: 'Permafrost',
          def: `Ground remaining at or below 0°C for ≥2 consecutive years. Covers ~25% of Earth\'s land; classified as continuous (>90%), discontinuous (50–90%), or sporadic (<10%).`,
        },
        {
          term: 'Active Layer',
          def: 'Seasonally thawing surface layer above permafrost, typically 0.3–2 m thick. Supports plant growth; its deepening drives thermokarst and solifluction.',
        },
        {
          term: 'Ice-Wedge Polygon',
          def: 'Polygonal patterned ground landform formed by repeated winter thermal contraction cracking and spring meltwater refreezing, building ice wedges over centuries.',
        },
        {
          term: 'Thermokarst',
          def: 'Irregular subsidence terrain produced when ice-rich permafrost thaws and ground collapses into the voids; source of thermokarst lakes and major CH₄ emissions.',
        },
        {
          term: 'Solifluction',
          def: 'Slow downslope flow of water-saturated active-layer soil (1–25 cm/yr) over impermeable frozen permafrost; produces lobes and terraces on gentle slopes.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Periglacial Processes and Landforms',
      body: `Periglacial landscapes are shaped by frost action, ground ice, and the freeze-thaw dynamics of the active layer. Understanding permafrost structure, patterned ground formation, distinctive ice-cored mounds, and the implications of permafrost carbon release underpins both geomorphology and climate science.`,
      cards: [
        {
          name: 'Permafrost: Structure and Distribution',
          icon: Layers,
          color: BRAND.accent,
          desc: 'Continuous permafrost (>90% frozen, <−5°C) grades into discontinuous (50–90%) and sporadic (<10%) zones southward. Thermal regime controlled by mean annual air temperature and insulating snow cover. Talik: unfrozen zone within or beneath permafrost (e.g., under lakes). Permafrost thickness ranges from 0.3 m at southern margins to 1,500 m in Siberia.',
          examples: 'Siberian permafrost reaches up to 1,600 m thick in the Verkhoyansk region — the deepest on Earth. McMurdo Dry Valleys (Antarctica) permafrost surface dates back millions of years, preserving ancient organic material. The Trans-Alaska Pipeline was engineered on thermosyphon pilings above permafrost to prevent heat transfer from the warm oil destabilising the frozen ground.',
        },
        {
          name: 'Patterned Ground and Ice-Wedge Polygons',
          icon: Activity,
          color: BRAND.jade,
          desc: 'Winter thermal contraction cracks open when ground temperatures fall below −10°C to −20°C. Spring snowmelt infiltrates the crack; refreezing adds ~1 mm of ice per year. After hundreds to thousands of annual cycles, ice wedges 1–3 m wide and 3–5 m deep form a polygonal network. Low-centred polygons have wet centres; high-centred polygons develop as wedge melt lowers rims. Polygon diameter ~10–30 m reflects ground temperature and crack spacing.',
          examples: 'Siberian and Alaskan tundra polygonal networks cover thousands of km² and are clearly visible from satellite imagery. Devonian ice-wedge casts preserved in UK sedimentary rocks provide evidence of past periglacial climates in formerly temperate regions. Individual polygon size of 10–30 m is related to the magnitude of ground temperature fluctuations and contraction crack spacing during formation.',
        },
        {
          name: 'Pingos and Solifluction Landforms',
          icon: Globe,
          color: BRAND.coral,
          desc: 'Hydraulic (open-system) pingos: artesian groundwater forced upward through thin permafrost freezes near the surface, arching a mound — common in valley floors. Hydrostatic (closed-system) pingos: refreezing talik beneath a drained lake traps pressurised porewater that uplifts the surface — common on drained lake floors in groups. Solifluction lobes: saturated active layer flows at 1–25 cm/yr on slopes as low as 2–3°. Stone circles and stripes form by differential frost heave.',
          examples: `Ibyuk Pingo in the Mackenzie Delta, Canada stands 49 m tall and is one of the world\'s largest — a classic closed-system (hydrostatic) pingo. Solifluction terraces are widespread on Scottish mountain slopes, recording Pleistocene periglacial conditions. Stone circles and stone stripes in Svalbard are actively forming today, with frost heave rates measurable by repeat survey.`,
        },
        {
          name: 'Permafrost Carbon Feedback and Climate Change',
          icon: Zap,
          color: BRAND.gold,
          desc: '~1,500 Gt of organic carbon (≈2× atmospheric CO₂) stored in permafrost from plant material frozen over millennia. Thawing resumes microbial decomposition: CO₂ released under aerobic conditions, CH₄ under anaerobic (waterlogged) settings. Thermokarst lakes are a major CH₄ source. Arctic warming occurs at 2–4× the global average (Arctic amplification). Active layer deepening and thermokarst lake formation and drainage create net carbon sources.',
          examples: 'Modelling studies estimate 120–195 Gt C may be released from permafrost by 2100 under high warming scenarios — equivalent to decades of current global emissions. Arctic warming of 2–4× the global average is accelerating permafrost degradation faster than projected. Thermokarst lake formation followed by drainage (as banks erode and lakes drain) creates a complex but net CO₂ and CH₄ source. Siberian Arctic shelf methane seeps have been documented releasing CH₄ from thawing subsea permafrost.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Periglacial Process Chain: From Cold Climate to Landscape Change',
      body: 'How persistent cold climate conditions generate permafrost, drive patterned ground formation, and — under warming — trigger active layer deepening, thermokarst, and carbon release.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how cold climate conditions produce permafrost and periglacial landforms through contraction cracking and ice wedge growth, and how warming drives active layer deepening and thermokarst landscape change',
        nodes: [
          {
            id: 'cold-climate',
            label: 'Cold Climate',
            description: `Mean annual air temperatures below 0°C sustain frozen ground year-round. Arctic and alpine zones; ~25% of Earth\'s land surface. Snow cover modulates ground temperature: thick snow insulates, thin snow allows deep freeze.`,
            color: BRAND.accent,
          },
          {
            id: 'permafrost-formation',
            label: 'Permafrost Formation',
            description: 'Ground at or below 0°C for ≥2 consecutive years. Continuous zone: >90% area, temperature <−5°C. Discontinuous: 50–90%. Sporadic: <10%. Talik persists under lakes and rivers. Thickness 0.3–1,600 m.',
            color: BRAND.jade,
          },
          {
            id: 'contraction-cracking',
            label: 'Contraction Cracking',
            description: 'Winter temperature plunge below −10°C to −20°C causes thermal contraction of frozen ground. Ground cracks open along lines of weakness, creating a polygonal fracture network. Crack width ~5–10 mm; depth up to several metres.',
            color: BRAND.coral,
          },
          {
            id: 'ice-wedge-growth',
            label: 'Ice Wedge Growth',
            description: 'Spring meltwater infiltrates the crack and refreezes, adding ~1 mm of ice annually. Over hundreds to thousands of years, repeated cycles build ice wedges 1–3 m wide and 3–5 m deep. Cracks preferentially reopen along existing ice planes.',
            color: BRAND.gold,
          },
          {
            id: 'polygon-network',
            label: 'Polygon Network',
            description: 'Intersecting ice wedges produce a polygonal patterned ground network of 10–30 m diameter. Low-centred polygons: raised rims, wet centre; high-centred: lowered rims from ice melt. Covers vast areas of Arctic tundra; visible from satellite.',
            color: BRAND.amethyst,
          },
          {
            id: 'thermokarst',
            label: 'Active Layer Deepening / Thermokarst',
            description: 'Under warming, active layer deepens and ice-rich permafrost melts. Ground collapses into voids left by melting ice wedges and pore ice, forming thermokarst depressions and lakes. CH₄ and CO₂ release from decomposing organic matter creates a positive carbon-climate feedback. Infrastructure damage accelerates.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'cold-climate',         to: 'permafrost-formation', label: 'Sustained below-zero ground temperature' },
          { from: 'permafrost-formation',  to: 'contraction-cracking', label: 'Brittle frozen ground contracts in winter' },
          { from: 'contraction-cracking',  to: 'ice-wedge-growth',     label: 'Meltwater infiltrates and refreezes' },
          { from: 'ice-wedge-growth',      to: 'polygon-network',      label: 'Centuries of ice accumulation' },
          { from: 'permafrost-formation',  to: 'thermokarst',          label: 'Warming degrades ice-rich permafrost' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Permafrost stores approximately 1,500 Gt of organic carbon — roughly twice the amount currently in the atmosphere. Why has this organic matter not decomposed, and what happens as permafrost thaws?',
          a: [
            'Frozen soil temperatures prevent microbial decomposition: organic matter from ancient tundra plants, mammal remains, and Pleistocene vegetation has been preserved in frozen conditions for thousands to hundreds of thousands of years; when permafrost thaws under warming, microbial decomposition resumes, releasing CO₂ aerobically and CH₄ in anaerobic (waterlogged) settings; this carbon-climate feedback could release 120–195 Gt C by 2100, equivalent to decades of current global emissions',
            'The organic matter is locked inside mineral crystals in the permafrost matrix and cannot be accessed by microbes regardless of temperature; thawing permafrost releases carbon only through physical erosion and fluvial transport to the ocean, not decomposition',
            'Cold temperatures increase the rate of chemical oxidation rather than biological decomposition; organic carbon in permafrost is converted to CO₂ by abiotic oxidation reactions that accelerate when temperatures rise above −5°C',
            'Permafrost organic carbon is primarily in the form of peat, which is already partially decomposed and therefore releases very little additional carbon when permafrost thaws; the climate feedback is negligible compared to fossil fuel emissions',
          ],
          correct: 0,
          explain: 'Microbial decomposition of organic matter requires liquid water and temperatures above ~0°C. In permafrost, the ground has remained frozen for thousands to hundreds of thousands of years, preventing microbial activity and preserving vast quantities of organic material from ancient tundra ecosystems, Pleistocene megafauna, and boreal forests that existed during warmer interglacial periods. When permafrost thaws, liquid water returns and microbial communities resume decomposition. In aerobic (well-drained) settings this produces CO₂; in anaerobic (waterlogged) settings — characteristic of thermokarst lakes and wetlands — decomposition produces CH₄, a greenhouse gas with ~80× the warming potential of CO₂ over 20 years. The estimated release of 120–195 Gt C by 2100 under high warming scenarios represents a significant amplification of human-caused climate change, and is a major source of uncertainty in climate projections because it is not yet fully incorporated into coupled Earth system models.',
        },
        {
          q: 'Ice-wedge polygons are one of the most distinctive periglacial landforms. What annual mechanism drives ice wedge growth?',
          a: [
            'Summer thermokarst melting of the polygon centres forces ice upward into the polygon rims, thickening the wedges laterally over time by hydraulic pressure from meltwater',
            'Frost heave during spring freeze-back pushes ice crystals horizontally toward polygon boundaries, concentrating ice in wedge-shaped zones aligned with thermal contraction crack orientations',
            'Thermal contraction cracking in winter: when air temperatures plunge below −10°C to −20°C, frozen ground contracts and cracks open (thermal contraction fracture); meltwater infiltrates the crack in spring and refreezes, adding a thin ice vein (~1 mm/yr); over hundreds to thousands of years, repeated cycles build ice wedges 1–3 m wide and 3–5 m deep; the polygon network develops as cracks preferentially reopen along existing weak planes; ancient ice-wedge casts in sedimentary rocks record past periglacial climates',
            'Artesian groundwater under hydraulic pressure is injected into pre-existing fractures in frozen ground during spring snowmelt, freezing to form ice wedges that grow vertically from below as porewater pressure increases',
          ],
          correct: 2,
          explain: 'Ice wedge growth is driven by an annual two-stage mechanism. In winter, when ground temperatures drop sharply (often below −20°C in continental Arctic climates), the frozen ground contracts at a rate of about 0.5 mm per metre per degree of cooling. Thermal stress exceeds the tensile strength of frozen ground and it cracks, typically in the same locations as previous cracks — the inherited network of weak planes. In spring, snowmelt water infiltrates the open crack (a few millimetres wide) and refreezes, forming a thin ice vein. Each annual cycle adds approximately 1 mm of ice. After 500 years this produces a wedge ~0.5 m wide; after several thousand years, wedges 1–3 m wide and 3–5 m deep are typical. The polygonal network pattern reflects the geometry of thermal stress relief — cracks intersect at roughly 90° (orthogonal network) or 120° (hexagonal network) depending on crack propagation mechanics. Ice-wedge casts (sand or sediment-filled relict wedge forms) in UK and European sedimentary sequences are important indicators of Pleistocene periglacial conditions.',
        },
        {
          q: 'Two types of pingos exist: open-system (hydraulic) and closed-system (hydrostatic). What is the difference in their formation mechanism?',
          a: [
            'Open-system pingos form in continuous permafrost zones where artesian pressure is highest; closed-system pingos form only in discontinuous permafrost where the permafrost is thin enough for porewater to escape laterally during freezing',
            'Source of pressurised water: open-system pingos form where artesian groundwater under hydraulic pressure is forced upward through a thin section of permafrost and freezes just below the surface, arching up a mound; they are common in valley bottoms where artesian flow is focused; closed-system pingos form under recently drained lake beds where talik (unfrozen zone under the lake) refreezes from above and the sides, trapping pressurised porewater that freezes and lifts the surface; they form in groups on drained lake floors in areas like the Mackenzie Delta',
            'The difference is purely in size: open-system pingos are larger (>20 m) because continuous artesian recharge maintains ice growth indefinitely; closed-system pingos are smaller (<20 m) because porewater supply is finite and growth ceases when the talik fully freezes',
            'Open-system pingos form by extrusion of liquid water through a ruptured permafrost surface that then refreezes into a dome; closed-system pingos form entirely by in-situ freezing of sediment porewater without any water movement toward the growing ice core',
          ],
          correct: 1,
          explain: `The fundamental distinction is the water source and pressure mechanism. Open-system (hydraulic) pingos: subpermafrost groundwater flowing under artesian pressure (head provided by distant recharge areas at higher elevation) is forced upward where permafrost is locally thin or absent, typically in valley floors or taliks beneath rivers. As this pressurised water freezes near the surface, the expanding ice dome lifts the overlying sediment. These pingos can be continuously recharged and may persist for thousands of years; they are common in Greenland, Svalbard, and alpine areas. Closed-system (hydrostatic) pingos: when a lake drains (by channel capture, shoreline erosion, or human drainage), the talik beneath — which was kept unfrozen by the relatively warm lake — begins to refreeze. As freezing progresses from above and the sides, the remaining porewater in the shrinking talik is pressurised by the volume increase of freezing. This water is injected as an intrusive ice mass that domes the overlying sediment. The Mackenzie Delta, Northwest Territories, Canada contains over 1,400 pingos — the world\'s highest density — primarily of closed-system origin on drained lake floors.`,
        },
        {
          q: 'Solifluction lobes are common on sub-Arctic and alpine hillslopes. Why does the water-saturated active layer flow downslope even on gentle gradients of just 2–3°?',
          a: [
            'Frost creep during freeze-back displaces soil particles toward the slope during upward ice crystal growth, producing a net downslope movement that accumulates over many freeze-thaw cycles without requiring liquid water saturation',
            'Ice segregation at the permafrost table pushes the active layer upslope during freezing, but gravity pulls the thawed layer down in summer; the net effect is downslope movement driven by the asymmetry between the steeper angle of freeze-back and the shallower angle of thaw',
            'Thawing from the top down releases a thin liquid water film at the soil surface that acts as a lubricating layer, allowing the entire active layer to slide as a coherent slab over the dry, unfrozen soil below',
            'The permafrost table below acts as an impermeable base: as the active layer thaws from the top down in summer, meltwater cannot drain downward (blocked by frozen permafrost below) or upward (surface frost is gone); the saturated soil layer loses most of its shear strength through high pore water pressure; even slight slope angles produce driving stress that exceeds the greatly reduced frictional resistance; rates of 1–25 cm/yr are typical; solifluction deposits (head deposits) fill valleys in formerly periglacial regions like the UK',
          ],
          correct: 3,
          explain: 'Solifluction occurs because two conditions coincide during active-layer thaw. First, the permafrost table acts as an aquiclude — an impermeable base that prevents downward drainage of meltwater from the thawing soil above. Second, thawing progresses downward from the surface, creating a progressively deepening zone of saturated soil trapped between the melting surface and the frozen base. In saturated soil, pore water pressure approaches the total normal stress, reducing effective stress and therefore frictional resistance (Mohr-Coulomb failure criterion: shear strength = cohesion + effective normal stress × tan(friction angle)). When effective stress approaches zero, even a 2–3° slope provides sufficient gravitational shear stress to cause slow viscous flow. Rates of 1–25 cm/yr are typical, varying with slope angle, fine sediment content (clays retain more water), and freeze-thaw intensity. Solifluction is distinct from frost creep (a related but drier process). In the UK, thick valley-floor deposits of "head" or "coombe rock" are relict solifluction deposits from Pleistocene periglacial conditions, often filling valleys to depths of several metres.',
        },
        {
          q: 'Arctic amplification (Arctic warming 2–4× the global average) is accelerating permafrost degradation. What is the most immediate geomorphic consequence for built infrastructure in Arctic communities?',
          a: [
            'Increased thermokarst lake formation raises local water tables around settlements, causing lateral erosion of building foundations and road embankments by wave action rather than ground subsidence',
            'Differential subsidence (thermokarst subsidence) damaging buildings, roads, and pipelines: as ice-rich permafrost thaws, the volume of ice (which occupies more space than liquid water) is lost, causing irregular ground settlement of 0.1–3 m; buildings tilt, crack, or collapse; roads develop sinkholes and differential subsidence; the Yamal Peninsula in Russia and Alaskan North Slope communities are experiencing accelerating infrastructure damage; the Trans-Alaska Pipeline was designed with heat-dissipating pilings but even this system requires monitoring; estimated 3.6 trillion USD of Arctic infrastructure at risk by 2050',
            'Active layer deepening increases the depth of seasonal frost heave, which lifts building foundations vertically during freeze-back; the damage is primarily upward heave rather than subsidence, and primarily occurs in winter rather than summer',
            'Permafrost thaw releases pressurised water that erupts as springs through building floors and road surfaces; hydrostatic pressure from thawing talik is the primary mechanism of infrastructure damage rather than ground volume loss',
          ],
          correct: 1,
          explain: 'The primary infrastructure hazard from permafrost degradation is differential settlement caused by the phase change of ground ice from solid to liquid. Ice occupies ~9% more volume than liquid water; when ice-rich permafrost thaws, this volume is lost and the overlying ground subsides by 0.1–3 m depending on the ice content of the permafrost (expressed as excess ice: the ice present above the pore space that would exist if the soil were unfrozen). Subsidence is spatially heterogeneous — it follows the distribution of ice-rich layers and thermokarst initiation points — producing differential settlement that is particularly destructive to rigid structures. In Russia, which has the largest permafrost area, approximately 60% of oil and gas infrastructure and 40% of buildings in permafrost zones are showing damage attributed to permafrost degradation. The 3.6 trillion USD estimate of at-risk Arctic infrastructure (AMAP, 2017) includes buildings, roads, airports, pipelines, and port facilities. Arctic communities including Shishmaref, Newtok, and Kivalina (Alaska) are planning complete relocations because their foundations are failing and coastal permafrost erosion is accelerating.',
        },
      ],
    },
  ],
}

export default periglacialPermafrost
