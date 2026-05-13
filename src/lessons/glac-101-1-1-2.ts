import { Activity, Layers, Globe, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const glacierDynamics: Lesson = {
  id: 'glac-101-1-1-2',
  title: 'Glacier Flow and Ice Dynamics',
  track: 'cli',
  trackName: 'Glaciology',
  level: 'Foundations',
  duration: '12 min',
  xpReward: 120,
  description: 'How glaciers move through internal deformation and basal sliding, and what controls ice flow velocity',
  sources: [
    { org: 'NSIDC', title: 'NSIDC — National Snow and Ice Data Center',                           url: 'https://nsidc.org/' },
    { org: 'BAS',   title: 'British Antarctic Survey — Ice Dynamics',                             url: 'https://www.bas.ac.uk/' },
    { org: 'AGU',   title: 'AGU — Journal of Geophysical Research: Earth Surface',               url: 'https://agupubs.onlinelibrary.wiley.com/' },
    { org: 'NASA',  title: 'NASA — Oceans Melting Greenland Mission',                            url: 'https://omg.jpl.nasa.gov/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Ice that flows like a very slow river: the physics of glacier motion',
      body: `Glaciers are not static masses of ice — they flow, albeit slowly, under the influence of gravity and their own weight. The fundamental relationship governing ice deformation is Glen\'s flow law: strain rate (ε̇) is proportional to shear stress (τ) raised to the power n, where n ≈ 3 for ice (ε̇ = A × τⁿ). This power-law relationship means ice deformation is highly nonlinear: doubling the shear stress increases the strain rate approximately eight-fold. The rate factor A is strongly temperature-dependent — cold polar ice at −30°C is roughly 1,000 times more viscous than temperate ice near the melting point.

Ice movement occurs through two primary mechanisms: internal deformation (creep) and basal sliding. Internal deformation involves the slow creep of ice by dislocation movement within individual ice crystals and grain boundary sliding between adjacent crystals. Over time, crystals develop preferred orientations (crystal fabric), which enhances deformation in the direction of maximum shear — a process that progressively softens the ice in fast-flowing zones. Basal sliding occurs where the glacier sole is at the pressure melting point; a thin film of meltwater reduces friction at the ice-bed interface. Geothermal heat (~65 mW/m² on average) and frictional heating from sliding itself generate this meltwater. Where the bed is composed of soft, water-saturated sediment (till), deformation of the subglacial till can also contribute significantly to glacier motion.

Ice velocities span a remarkable range. Cold polar glaciers frozen to their beds move only a few metres per year entirely by internal creep. Temperate mountain glaciers typically move tens to hundreds of metres per year. Ice streams — narrow corridors of fast-moving ice that drain the interiors of large ice sheets — can move kilometres per year; Jakobshavn Isbrae in Greenland reaches ~40–50 m/day. The velocity profile through the ice column is parabolic in creep-dominated flow: fastest at the surface, decreasing to near-zero at the bed. Where basal sliding dominates, the column translates at the sliding velocity plus a creep component.

Flow regime — extending versus compressive — controls glacier structure. In extending flow, ice accelerates (over steepening bed or through a narrowing), creating longitudinal tensile stress. When tensile stress exceeds ice tensile strength (~100–200 kPa), crevasses fracture the ice surface perpendicular to flow. Icefalls are spectacular manifestations of extreme extending flow, with seracs and a maze of crevasses. In compressive flow, ice decelerates (flattening bed, spreading terminus), creating thrust faults, pressure ridges, and folded ice. Understanding these flow regimes is essential for interpreting glacier hazards, predicting calving rates at marine-terminating glaciers, and projecting ice-sheet contributions to sea level rise.`,
      keyTerms: [
        {
          term: 'Glen\'s flow law',
          def: 'Power-law relationship between ice strain rate and shear stress: ε̇ = A × τⁿ, with n ≈ 3; ice deformation is highly nonlinear with stress.',
        },
        {
          term: 'internal deformation',
          def: 'Ice flow by crystal creep (dislocation movement within grains) and grain boundary sliding; produces a parabolic velocity profile fastest at the surface.',
        },
        {
          term: 'basal sliding',
          def: 'Glacier motion by sliding over bedrock or deforming subglacial till, enabled by a meltwater film that reduces basal friction.',
        },
        {
          term: 'ice stream',
          def: 'Narrow corridor of fast-flowing ice (km/yr) within a slower-moving ice sheet, controlled by subglacial topography, geology, and water.',
        },
        {
          term: 'crevasse',
          def: 'Fracture in glacier ice where tensile stress exceeds ice tensile strength (~100–200 kPa); forms in extending flow zones.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Four Mechanisms of Glacier Motion',
      body: `Glacier flow integrates contributions from crystal-scale creep, basal sliding, till deformation, and the influence of water pressure. Each mechanism dominates under different thermal and substrate conditions, and their relative importance determines whether a glacier moves metres or kilometres per year.`,
      cards: [
        {
          name: 'Glen\'s Flow Law and Ice Creep',
          icon: Activity,
          color: BRAND.accent,
          desc: 'Power-law relationship between strain rate and shear stress; ice deforms by dislocation creep within individual crystals and grain boundary sliding; temperature strongly controls ice viscosity.',
          examples: 'Glen\'s flow law: ε̇ = A × τⁿ (n ≈ 3); doubling stress increases strain rate ~8×. Cold polar ice (−30°C) is ~1,000× more viscous than temperate ice near 0°C. Crystal fabric development (preferred c-axis orientation) enhances deformation in fast-flowing ice.',
        },
        {
          name: 'Basal Sliding and Meltwater Lubrication',
          icon: Layers,
          color: BRAND.jade,
          desc: 'Ice slides over bedrock when a thin water film reduces friction; subglacial water pressure controls effective normal stress; hard bed vs. soft bed (till deformation) sliding.',
          examples: 'Basal meltwater generated by geothermal heat (average ~65 mW/m²) and frictional heating lubricates the bed. Subglacial lakes (e.g., Lake Vostok, 250 km long) form where melt exceeds drainage capacity. Moulin drainage routes surface meltwater to the bed in minutes, causing velocity spikes.',
        },
        {
          name: 'Ice Streams: Fast-Moving Corridors',
          icon: Globe,
          color: BRAND.coral,
          desc: 'Narrow zones of fast flow (km/yr) draining interior ice sheets, bounded by slow-moving inter-stream ice ridges; controlled by subglacial topography, geology, and water.',
          examples: 'Jakobshavn Isbrae, Greenland: ~40–50 m/day — one of the world\'s fastest glaciers. West Antarctic Ice Streams (Pine Island, Thwaites) drain ~30% of the WAIS into the Amundsen Sea. Ice stream margins are zones of intense shear, producing highly crevassed chaotic ice.',
        },
        {
          name: 'Extending and Compressive Flow Regimes',
          icon: ArrowRight,
          color: BRAND.gold,
          desc: 'Extending flow where ice accelerates (glacier steepens or narrows) → crevasses open; compressive flow where ice decelerates (flattens or widens) → pressure ridges and ice folds.',
          examples: 'Icefalls (seracs, crevasses) mark extending flow over steep bedrock steps. Compressive flow at glacier termini produces thrust faults and folded ice. Calving fronts of tidewater glaciers experience extreme extension and rifting.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Glacier Flow: From Accumulation Zone to Terminus',
      body: 'Trace the journey of ice from the accumulation zone through the glacier system to the terminus.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Trace the journey of ice from the accumulation zone through the glacier system to the terminus',
        nodes: [
          {
            id: 'accumulation',
            label: 'Accumulation Zone',
            description: 'Snow and firn build up above the ELA. Ice thickens and begins to flow downslope under gravity.',
            color: BRAND.accent,
          },
          {
            id: 'firn-compaction',
            label: 'Firn Compaction',
            description: 'Firn transforms to glacier ice. Overburden pressure drives initial flow by internal creep.',
            color: BRAND.accentHot,
          },
          {
            id: 'internal-deform',
            label: 'Internal Deformation Zone',
            description: 'Glen\'s flow law governs creep. Ice velocity profile parabolic — fastest at surface.',
            color: BRAND.jade,
          },
          {
            id: 'basal-zone',
            label: 'Basal Sliding Zone',
            description: 'Meltwater lubricates the bed. Enhanced sliding in warm-based temperate glaciers.',
            color: BRAND.gold,
          },
          {
            id: 'icefall',
            label: 'Icefall / Crevasse Zone',
            description: 'Extending flow over steep bed. Crevasses open perpendicular to flow direction.',
            color: BRAND.coral,
          },
          {
            id: 'terminus',
            label: 'Terminus / Snout',
            description: 'Ablation zone. Ice lost by melt, sublimation, or calving. Net mass balance negative.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'accumulation',   to: 'firn-compaction',  label: 'Gravity-driven flow begins' },
          { from: 'firn-compaction', to: 'internal-deform', label: 'Ice creep (Glen\'s law)' },
          { from: 'internal-deform', to: 'basal-zone',      label: 'Heat generation at base' },
          { from: 'basal-zone',     to: 'icefall',          label: 'Velocity increase over step' },
          { from: 'icefall',        to: 'terminus',         label: 'Extending flow → calving/melt' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Glen\'s flow law relates shear stress (τ) to strain rate (ε̇) as ε̇ = A × τⁿ with n ≈ 3. If shear stress triples, by approximately what factor does ice strain rate increase?',
          a: [
            '3× (linear relationship)',
            '27× (stress cubed)',
            '9× (stress squared)',
            '81× (stress to the fourth power)',
          ],
          correct: 1,
          explain: `Glen\'s flow law is a power law with exponent n ≈ 3, meaning ice deformation is highly nonlinear with respect to stress. If shear stress increases by a factor of 3, strain rate increases by 3³ = 27. This non-linearity has profound implications: small increases in driving stress (from thickening, steepening, or reduced basal friction) produce very large increases in flow velocity. This explains why glaciers can accelerate dramatically in response to relatively modest perturbations, such as the loss of a floating ice shelf that was providing back-stress. Glen (1955) derived the flow law from laboratory deformation experiments on polycrystalline ice cylinders; the exponent n has been confirmed by borehole deformation measurements in glaciers worldwide.`,
        },
        {
          q: 'What is the primary mechanism by which surface meltwater accelerates glacier flow?',
          a: [
            'Surface meltwater cools the glacier, reducing ice viscosity and enabling faster creep',
            'Meltwater drains through moulins and crevasses to the glacier bed, increasing subglacial water pressure and reducing effective normal stress, enhancing basal sliding',
            'Meltwater ponds on the glacier surface add weight, increasing driving stress',
            'Surface meltwater lubricates crevasse walls, allowing them to open faster',
          ],
          correct: 1,
          explain: `When surface meltwater drains rapidly to the glacier bed via moulins (vertical drainage shafts) or crevasses, it raises subglacial water pressure. The effective normal stress at the bed is σ_eff = σ_ice − P_water. When water pressure approaches the overburden ice pressure, effective stress approaches zero and the glacier can essentially float on a water film, dramatically reducing basal friction and enabling rapid sliding. This mechanism was dramatically demonstrated at Jakobshavn Isbrae, Greenland, where ice velocity increased ~45% over 10 years as surface melting intensified. However, over longer time scales, efficient subglacial drainage networks can form, routing meltwater away quickly and reducing the sustained pressure — a regulation that means the relationship between meltwater and velocity is not simple.`,
        },
        {
          q: 'Ice streams drain the interior of large ice sheets much faster than surrounding ice. What primarily controls where ice streams form?',
          a: [
            'Ice thickness — streams only form where ice exceeds 3,000 m depth',
            'Subglacial topography and geology — channels of soft, water-saturated sediment or low-friction bedrock focus fast flow',
            'Atmospheric temperature — ice streams only exist where surface temperatures exceed −10°C',
            'Distance from the coast — streams are restricted to the outermost 100 km of ice sheets',
          ],
          correct: 1,
          explain: `Ice streams are controlled predominantly by subglacial conditions. Two main types: (1) topographically controlled streams that occupy bedrock troughs (fjords), where the ice is thicker and driving stress higher; (2) streams overlying soft subglacial sediment (till) that deforms plastically at low driving stresses, enabling fast flow even on relatively flat terrain (e.g., Siple Coast ice streams of West Antarctica). The Siple Coast streams are separated by ice ridges grounded on harder substrate. Water is essential in both cases: saturated till or water-lubricated hard beds are required for sustained fast flow. Ice stream margins (lateral shear zones) are among the most dynamically active parts of ice sheets, where slow ice is entrained and accelerated.`,
        },
        {
          q: 'Crevasses form in glacier ice when tensile stress exceeds the tensile strength of ice (~100–200 kPa). In which flow regime do crevasses predominantly form?',
          a: [
            'Compressive flow zones where ice decelerates against obstacles',
            'Extending flow zones where ice accelerates over steeper bed or through narrow cross-sections',
            'At the exact ELA where accumulation transitions to ablation',
            'At the glacier base where basal sliding produces tensile stresses',
          ],
          correct: 1,
          explain: `Crevasses form in extending flow regimes where ice is accelerating, causing longitudinal tension. As ice moves faster downslope (over a convex bed, through a narrowing, or at the top of an icefall), the ice on the downstream side is moving faster than the upstream ice, creating tensile stress perpendicular to the flow direction. When this tensile stress exceeds the ice tensile strength (~100–200 kPa), fractures propagate downward to form crevasses. Transverse crevasses (perpendicular to flow) indicate longitudinal extension; marginal crevasses form at an angle at glacier margins where shear stress is highest. Icefalls are zones of extreme extending flow — heavily crevassed and seracked, dangerous for mountaineers. Compressive flow zones (where ice decelerates) produce compression and thickening, not crevassing.`,
        },
        {
          q: 'The velocity profile across the depth of a glacier (from surface to bed) is typically:',
          a: [
            'Uniform from surface to bed due to plug flow',
            'Fastest at the surface, decreasing with depth as internal deformation accumulates from the base',
            'Fastest at the bed due to basal sliding, with slower creep above',
            'Symmetric, with maximum velocity at mid-depth',
          ],
          correct: 1,
          explain: `In a glacier dominated by internal deformation (creep), velocity increases from zero at the bed (no-slip boundary) to maximum at the surface. This produces a parabolic profile where shear strain is greatest near the base (where shear stress from overburden is highest) and integrates upward. The surface therefore moves fastest. When basal sliding is present (soft-bed or warm-based glaciers), the entire column translates at the basal sliding velocity, added to the creep component — the basal sliding velocity is the "plug" that shifts the entire parabolic profile upward. In pure plug flow (all motion from sliding), velocity is uniform with depth. Borehole inclinometry directly measures velocity profiles — sensors placed at different depths and resurveyed over time reveal the relative contributions of internal deformation and basal sliding to total surface motion.`,
        },
      ],
    },
  ],
}

export default glacierDynamics
