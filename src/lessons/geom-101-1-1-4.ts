import { Layers, Activity, Globe, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const hillslopeEvolution: Lesson = {
  id: 'geom-101-1-1-4',
  title: 'Hillslope Processes and Landscape Evolution',
  track: 'cli',
  trackName: 'Geomorphology',
  level: 'Foundations',
  duration: '12 min',
  xpReward: 120,
  description: 'How hillslopes develop their characteristic convexo-concave profiles through the interplay of diffusive creep, overland flow, and base-level control',
  sources: [
    { org: 'AGU',      title: 'AGU — Earth Surface Processes and Landforms',  url: 'https://agupubs.onlinelibrary.wiley.com' },
    { org: 'USGS',     title: 'USGS — Hillslope Processes',                   url: 'https://www.usgs.gov' },
    { org: 'OpenStax', title: 'OpenStax Physical Geography',                  url: 'https://openstax.org' },
    { org: 'BGS',      title: 'BGS — Mass Movement and Slope Processes',      url: 'https://www.bgs.ac.uk' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'How hillslopes develop their characteristic convexo-concave profiles through the interplay of diffusive creep, overland flow, and base-level control',
      body: `The hillslope is the fundamental geomorphic unit linking drainage divides and ridges to river channels. It is on hillslopes that rock is weathered, soil is formed, and sediment is mobilised and routed to the fluvial network. Understanding hillslope form and process is therefore central to understanding how landscapes evolve over timescales ranging from years to millions of years.

The most characteristic feature of hillslopes in humid, soil-mantled landscapes is the convexo-concave profile. The upper portion of the hillslope is convex — it curves away from a viewer standing on the ridge. Here soil creep dominates: the slow, diffusive downslope movement of soil driven by bioturbation, freeze-thaw cycling, and wetting-drying. The sediment flux for creep follows a simple geomorphic transport law: qs = −K × dz/dx, where K is a diffusivity constant (m²/yr), dz/dx is the local slope gradient, and the negative sign means flux is directed downslope. Because flux increases with gradient, the hilltop must curve (become convex) to route all the material produced by weathering downslope. The lower portion of the hillslope is concave — it curves toward a viewer at the base. Here overland flow and wash processes dominate. As flow accumulates downslope, its erosive power increases, but the gradient decreases because fluvial incision is most efficient there; the result is the concave form.

The two geomorphic transport laws that govern hillslope and channel erosion are closely linked. For creep: qs = −K × dz/dx. For fluvial incision: E = K × A^m × S^n, where A is upstream drainage area (a proxy for discharge), S is channel slope, and m and n are empirically determined exponents (typically m ≈ 0.5, n ≈ 1). These laws encode how the landscape adjusts to boundary conditions set by tectonics and climate.

Base level — the elevation to which a river can erode, ultimately sea level — is the critical lower boundary condition for hillslopes. When a river incises (cuts down), it lowers the base level at the foot of adjacent hillslopes. This steepens the hillslope, increases creep rates and overland flow erosion, and delivers more sediment to the channel. The channel and hillslope are therefore tightly coupled: rivers set the boundary condition, hillslopes respond. Drivers of base-level fall include tectonic uplift (rock rises faster than the river can erode), sea-level fall, and river capture.

Slopes are classified by which process limits their erosion rate. On weathering-limited (supply-limited) slopes, transport capacity exceeds the rate at which weathering produces mobile sediment; bare rock surfaces are common; this is typical of steep, arid, or tectonically active terrain. On transport-limited slopes, the rate of sediment production by weathering exceeds the ability of surface processes to move it; thick soils develop; this is typical of humid, low-gradient landscapes with high bioturbation rates.

The concept of the steady-state hillslope is powerful: if the rate of material supply by weathering equals the rate of removal by creep and overland flow over the long term, the hillslope form reaches a dynamic equilibrium — the profile shape is maintained even as material continuously moves through it, like a conveyor belt. Drainage density (the total length of channels per unit area) controls hillslope length: high drainage density produces short hillslopes with rapid sediment delivery; low drainage density produces long hillslopes with more internal storage.

Climate change and tectonics both perturb hillslopes from steady state. Increased precipitation intensifies overland flow and can trigger landsliding. Vegetation loss from drought or fire removes the bioturbation and root cohesion that stabilise soil. Tectonic uplift steepens channels and drives progressive hillslope steepening. The geomorphic response time — the time for a hillslope to adjust to a new boundary condition — can range from decades for shallow soils to hundreds of thousands of years for deep, slowly eroding landscapes.

Cosmogenic nuclide dating has revolutionised the measurement of hillslope erosion rates. Cosmic rays penetrating Earth\'s surface produce rare isotopes — principally ¹⁰Be and ²⁶Al — in quartz minerals at rates that decrease exponentially with depth. If erosion is steady, the concentration of ¹⁰Be in surface quartz is inversely proportional to the erosion rate: fast erosion = low concentration (grains spend little time near the surface); slow erosion = high concentration. Global compilations show hillslope erosion rates spanning 0.01 mm/yr on ancient stable cratons to 1–10 mm/yr in rapidly uplifting mountain belts, beautifully capturing the coupling between tectonics and surface processes.`,
      keyTerms: [
        {
          term: 'Soil Creep',
          def: 'Slow, continuous downslope movement of soil driven by bioturbation, freeze-thaw, and wetting-drying cycles; follows diffusion equation qs = −K × dz/dx.',
        },
        {
          term: 'Geomorphic Transport Law',
          def: 'Mathematical expression relating sediment flux or erosion rate to measurable landscape properties such as slope gradient, drainage area, or rock strength.',
        },
        {
          term: 'Base Level',
          def: 'The lowest elevation to which a river can erode, ultimately sea level; sets the lower boundary condition for hillslope processes.',
        },
        {
          term: 'Weathering-Limited Slope',
          def: 'A slope where erosion is limited by the rate of weathering that produces mobile sediment; transport capacity exceeds supply; bare rock surfaces common.',
        },
        {
          term: 'Transport-Limited Slope',
          def: 'A slope where erosion is limited by the capacity of surface processes to move sediment; weathering supply exceeds transport capacity; thick soils typical.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Hillslope Form and Process',
      body: `Hillslope morphology reflects the balance between the processes acting on it and the boundary conditions imposed by climate, tectonics, and the fluvial network. Four key concepts underpin hillslope geomorphology: the convexo-concave profile, diffusive creep, base-level coupling, and cosmogenic nuclide dating of erosion rates.`,
      cards: [
        {
          name: 'The Convexo-Concave Hillslope Profile',
          icon: Layers,
          color: BRAND.accent,
          desc: 'Upper convex zone: soil creep dominates, sediment flux proportional to slope gradient, curvature required to route material downslope. Lower concave zone: overland flow and wash processes dominate, gradient decreases as runoff accumulates. Inflection point position controlled by the relative rates of diffusive vs. fluvial processes.',
          examples: 'Smooth rounded summits in humid temperate forests (e.g., Appalachians, English Lake District) contrast sharply with angular, rocky ridges in arid terrain (e.g., Mojave Desert) where sparse vegetation limits bioturbation and creep.',
        },
        {
          name: 'Soil Creep and Diffusive Transport',
          icon: Activity,
          color: BRAND.jade,
          desc: 'Slow downslope movement driven by bioturbation (tree throw, burrowing animals, root growth), freeze-thaw expansion, and wetting-drying volume changes. Typical rates 0.5–5 cm/yr of surface displacement. Follows the diffusion equation qs = −K × dz/dx: flux increases with slope gradient. Geomorphic evidence includes tilted gravestones, bent trees (pistol-butted), and soil-mantled bedrock steps.',
          examples: 'Soil creep rates measured by erosion pins and peg networks in UK hillslopes average 1–3 cm/yr. Bioturbation by burrowing mammals (badgers, moles, rabbits) contributes 50+ kg/m²/yr of soil disturbance in British grasslands.',
        },
        {
          name: 'Base Level and Channel-Hillslope Coupling',
          icon: Globe,
          color: BRAND.coral,
          desc: 'Rivers set the basal boundary elevation for hillslopes. Channel incision lowers base level, steepening the adjacent hillslope and increasing sediment delivery — a positive feedback. Tectonic uplift raises rock relative to the erosional base, driving channel incision and progressive hillslope steepening. Sea-level fall propagates incision waves (knickpoints) upstream. Steady-state hillslopes exist when erosion rate equals uplift rate.',
          examples: `The Colorado Plateau has been deeply dissected by the Colorado River\'s incision over the past 5–6 Ma, producing steep canyon walls and rapid hillslope retreat. Post-glacial stream incision in UK valleys (e.g., the Wye, the Derwent) has steepened valley-side hillslopes, triggering renewed landsliding.`,
        },
        {
          name: 'Erosion Rates and Cosmogenic Nuclide Dating',
          icon: ArrowRight,
          color: BRAND.gold,
          desc: 'Cosmic rays produce ¹⁰Be and ²⁶Al in surface quartz at rates that decrease exponentially with depth (~1 m attenuation length). At steady state, surface nuclide concentration is inversely proportional to erosion rate. Sampling river sand integrates erosion over entire catchments. Global data reveal erosion rates spanning three orders of magnitude — from 0.01 mm/yr on cratons to 1–10 mm/yr in active orogens.',
          examples: 'Erosion rates of 0.01 mm/yr on the Pilbara craton (Western Australia) vs. 1–10 mm/yr in the Southern Alps of New Zealand and the Himalaya. Sierra Nevada (California) ¹⁰Be studies yield erosion rates of 0.05–0.15 mm/yr, consistent with slow tectonic uplift and resistant granitic lithology.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Hillslope-Channel Feedback System',
      body: 'Trace the cascade of processes linking tectonic forcing through channel incision to hillslope response and sediment delivery.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Trace the cascade of processes linking tectonic forcing through channel incision to hillslope response and sediment delivery.',
        nodes: [
          {
            id: 'tectonic-uplift',
            label: 'Tectonic Uplift / Base Level Fall',
            description: 'Rock uplift or sea-level fall steepens river longitudinal profiles and drives knickpoint migration upstream. The rate of uplift relative to erosion determines whether hillslopes steepen or remain in steady state.',
            color: BRAND.amethyst,
          },
          {
            id: 'river-incision',
            label: 'River Incision',
            description: 'Channels cut down through bedrock and alluvium, lowering the base level for adjacent hillslopes. Incision rate follows E = K × A^m × S^n. Knickpoints migrate upstream at rates proportional to drainage area and channel steepness.',
            color: BRAND.accent,
          },
          {
            id: 'hillslope-steepening',
            label: 'Hillslope Steepening',
            description: 'As the channel lowers, the foot of the hillslope is undercut and the gradient increases. Steeper hillslopes drive faster creep (higher qs = −K × dz/dx) and more frequent overland flow and shallow landsliding.',
            color: BRAND.coral,
          },
          {
            id: 'soil-creep',
            label: 'Soil Creep (Upper Slope)',
            description: 'Diffusive transport dominates the convex upper slope. Bioturbation, freeze-thaw, and wetting-drying drive slow downslope flux proportional to gradient. Produces smooth, rounded hilltops. Rates typically 0.5–5 cm/yr.',
            color: BRAND.jade,
          },
          {
            id: 'overland-flow',
            label: 'Overland Flow (Lower Slope)',
            description: 'Runoff accumulates downslope on the concave lower hillslope. Wash processes and rilling detach and transport fine sediment. Sediment flux increases with drainage area and slope — governed by fluvial transport laws.',
            color: BRAND.gold,
          },
          {
            id: 'sediment-delivery',
            label: 'Sediment Delivery to Channel',
            description: 'Hillslope-derived sediment reaches the channel via creep, wash, and landsliding. Sediment supply modulates channel aggradation vs. incision. At steady state, sediment delivery equals the product of erosion rate and hillslope area.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'tectonic-uplift',     to: 'river-incision',       label: 'Steepens channel gradient' },
          { from: 'river-incision',       to: 'hillslope-steepening', label: 'Lowers base level' },
          { from: 'hillslope-steepening', to: 'soil-creep',           label: 'Increases diffusive flux' },
          { from: 'hillslope-steepening', to: 'overland-flow',        label: 'Increases runoff erosion' },
          { from: 'soil-creep',           to: 'sediment-delivery',    label: 'Landscape lowering' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'In a transport-limited landscape, erosion rates are controlled by the capacity of processes to move sediment downslope. What is the counterpart landscape type, and what controls erosion there?',
          a: [
            'A discharge-limited landscape, where erosion is limited by the amount of water available to transport sediment; common in arid environments with high sediment supply',
            'A tectonically limited landscape, where uplift rate is so slow that erosion cannot keep pace; rock strength is the primary control on relief',
            'A weathering-limited (supply-limited) landscape, where erosion is limited by the rate of rock weathering that produces mobile sediment; transport capacity exceeds supply, so bare rock surfaces are common; characteristic of steep, arid, or rapidly uplifting terrain',
            'A diffusion-limited landscape, where soil creep is the sole transport mechanism and overland flow is negligible; thick soils and low gradients dominate',
          ],
          correct: 2,
          explain: `In a weathering-limited (also called supply-limited) landscape, the rate-limiting step is the conversion of bedrock to mobile regolith by chemical and physical weathering. Transport processes are efficient enough to remove all weathered material as fast as it is produced, so no thick soil mantle accumulates and bare rock surfaces are common. This regime is typical of steep, arid, or rapidly uplifting settings where rock is strong and precipitation limited. By contrast, in a transport-limited landscape (e.g., humid, low-gradient terrain with deep soils), weathering outpaces the ability of creep and overland flow to evacuate material, so thick soils develop. The distinction has profound implications for how these landscapes respond to climate and tectonic perturbations.`,
        },
        {
          q: 'The geomorphic transport law for soil creep states qs = −K × dz/dx. What does the negative sign signify?',
          a: [
            'The diffusivity constant K has a negative value in most natural settings, making the overall flux positive',
            'Sediment flux is directed downslope (in the direction of decreasing elevation); a positive slope gradient dz/dx produces downslope flux; the negative sign ensures flux is positive when moving downhill following standard sign conventions',
            'Creep processes remove material from the hillslope over time, causing net lowering; the negative sign records this mass loss',
            'The equation only applies to concave lower hillslopes where the curvature is negative; the sign has no physical meaning on convex upper slopes',
          ],
          correct: 1,
          explain: `In the standard hillslope coordinate system, elevation z decreases downslope, so the slope gradient dz/dx is positive when measured in the upslope direction (or negative in the downslope direction, depending on convention). The negative sign in qs = −K × dz/dx ensures that sediment flux is positive in the downslope direction: where the slope gradient is positive (hillslope rising in the x-direction), flux is directed in the negative x-direction (downslope). This is the standard sign convention inherited from the heat diffusion equation (Fourier\'s law), which has the same mathematical structure. The key physical insight is that flux is proportional to and directed down the gradient — steeper slopes produce greater creep flux.`,
        },
        {
          q: 'How does tectonic uplift affect hillslope morphology over time?',
          a: [
            'Uplift steepens river channels, lowering base level; this increases the gradient that drives hillslope erosion and creep; hillslopes steepen until a new steady-state is reached where erosion rate equals uplift rate; high uplift rates produce steep, actively eroding hillslopes with thin soils',
            'Uplift raises the entire landscape uniformly, preserving relative hillslope gradients; only absolute elevation changes, not hillslope form or erosion rate',
            'Uplift triggers immediate mass wasting that rapidly removes hillslope material, lowering slopes back to their pre-uplift gradient within a few decades',
            'Uplift primarily affects river channels through increased discharge from orographic precipitation; hillslopes are relatively insensitive to tectonic forcing',
          ],
          correct: 0,
          explain: `Tectonic uplift steepens river channels by raising the source region relative to the ocean base level. Steeper channels incise faster (E = K × A^m × S^n), lowering the valley floor and reducing the base level at the foot of adjacent hillslopes. This steepens the hillslopes, increasing both creep flux (qs = −K × dz/dx) and overland flow erosion. Over time, if uplift is sustained, hillslopes reach a new, steeper steady state where the erosion rate matches the uplift rate — the classic concept of dynamic equilibrium. Rapidly uplifting mountain belts (Himalaya, Southern Alps of New Zealand) therefore have steep hillslopes, thin soils, frequent landslides, and high erosion rates measured by cosmogenic nuclides (1–10 mm/yr).`,
        },
        {
          q: `Cosmogenic nuclide dating uses ¹⁰Be produced in quartz minerals at Earth\'s surface. If a soil sample has very low ¹⁰Be concentration, what does this suggest?`,
          a: [
            'The sample has been deeply buried for a long time, shielding it from cosmic rays and preventing ¹⁰Be accumulation',
            'The landscape is very old and stable; low concentrations indicate that ¹⁰Be has decayed away over millions of years',
            'The quartz minerals are poor targets for cosmic ray spallation, producing less ¹⁰Be regardless of erosion rate',
            'Rapid erosion: if material is eroded quickly, grains spend little time at the surface accumulating ¹⁰Be; low concentrations indicate fast erosion rates (material cycled through the near-surface quickly); high concentrations indicate slow erosion and long surface exposure; the steady-state erosion rate is inversely proportional to the nuclide concentration',
          ],
          correct: 3,
          explain: `At steady state, the concentration of ¹⁰Be in surface quartz reflects the balance between production (by cosmic ray spallation, roughly 4–5 atoms/g/yr at sea level in high-latitude quartz) and removal by erosion. If erosion is fast, grains are brought to the surface from depth (where ¹⁰Be = 0), exposed briefly, and then eroded away, so concentrations remain low. If erosion is slow, grains reside near the surface for a long time, accumulating ¹⁰Be until the concentration reaches a steady state determined by radioactive decay (¹⁰Be half-life: 1.39 Ma). The steady-state erosion rate is: ε = P / (N × λ), where P is production rate, N is measured concentration, and λ is the decay constant. This approach has been validated globally and now underpins most quantitative geomorphology of hillslope and catchment erosion rates.`,
        },
        {
          q: 'Why do hillslopes in humid, forested environments typically have smoother, more rounded profiles than hillslopes in arid environments?',
          a: [
            'Humid climates produce more rainfall, which chemically weathers rock to a finer grain size that is more easily rounded by transport processes',
            'Forest soils support intensive bioturbation (tree throw, burrowing animals, root action) which produces high rates of diffusive creep, smoothing convexities; water lubricates soil movement; in arid environments, sparse vegetation means less bioturbation and creep, and episodic overland flow produces sharper, more angular relief',
            'Arid hillslopes are composed of harder, more resistant rock types that resist rounding; humid hillslopes typically form in softer sedimentary rocks that are more easily shaped',
            'Higher temperatures in arid climates cause thermal expansion of rock surfaces, producing angular fractures and sharp ridges; cool, humid climates prevent thermal cracking',
          ],
          correct: 1,
          explain: `The smooth, rounded form of humid forested hillslopes is a direct product of high diffusive creep rates driven by intense bioturbation. Tree throw (uprooting by wind) alone can move 10–20 tonnes of soil per hectare per year, mixing and displacing soil downslope. Burrowing animals, root growth and decay, and wetting-drying cycles collectively produce high K values in the creep law qs = −K × dz/dx, causing rapid diffusive smoothing of any topographic irregularities. In arid environments, sparse vegetation drastically reduces bioturbation and creep rates; the dominant process becomes episodic overland flow and rilling, which is a threshold-dominated, non-diffusive process that tends to incise rather than smooth the hillslope. The result is the angular, rocky terrain characteristic of deserts, where individual bedrock outcrops persist because there is insufficient creep to bury and smooth them.`,
        },
      ],
    },
  ],
}

export default hillslopeEvolution
