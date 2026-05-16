import { Zap, Layers, FlaskConical } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const impactCrateringMechanics: Lesson = {
  id: 'astr-201-1-1-1',
  title: 'Impact Cratering Mechanics',
  track: 'ast',
  trackName: 'Planetary Geology',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: 'Hypervelocity impacts are the most energetic geological process in the Solar System, reshaping planetary surfaces in seconds. Explore the physics of contact and compression, excavation, and modification — and the mineralogical fingerprints left behind at pressures exceeding 100 GPa.',
  sources: [
    { org: 'NASA', title: 'NASA Planetary Defense Coordination Office — Impact Physics Overview', url: 'https://www.nasa.gov/planetary-defense/' },
    { org: 'LPI', title: 'Lunar and Planetary Institute — Impact Cratering: A Geologic Process (Melosh 1989)', url: 'https://www.lpi.usra.edu/publications/books/impact_cratering/' },
    { org: 'USGS', title: 'USGS Astrogeology Science Center — Shock Metamorphism of Natural Materials', url: 'https://astrogeology.usgs.gov/' },
    { org: 'Icarus', title: 'Melosh, H.J. (1989) — Scaling of Impact Crater Dimensions: Pi-Group Scaling Laws', url: 'https://doi.org/10.1016/0019-1035(80)90072-1' },
    { org: 'Nature', title: 'Schulte et al. (2010) — The Chicxulub Asteroid Impact and Mass Extinction at the K-Pg Boundary, Science 327', url: 'https://doi.org/10.1126/science.1177265' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'When worlds collide at 20 kilometres per second',
      body: `On the morning of 15 February 2013, a 20-metre chunk of rock entered Earth's atmosphere at roughly 19 km/s over the Russian city of Chelyabinsk. The resulting airburst released energy equivalent to approximately 500 kilotons of TNT — about 30 times the Hiroshima bomb — shattering windows across six cities and injuring 1,500 people, mostly from broken glass. Yet by planetary geology standards, Chelyabinsk was a minor event. The impactor that ended the Cretaceous 66 million years ago was roughly 10 kilometres in diameter and struck the Yucatán Peninsula with an energy estimated at ~10²⁴ joules — equivalent to a billion Hiroshima bombs firing simultaneously. These are not geological curiosities; **hypervelocity impacts** are the dominant resurfacing process on planets and moons that lack active volcanism, erosion, or tectonics, and they have punctuated Earth's biological history at intervals ranging from thousands to hundreds of millions of years.

Impact cratering is a three-stage process that unfolds over timescales ranging from milliseconds to minutes, depending on impactor size. The **contact and compression stage** begins the instant the projectile touches the target surface, initiating a release of kinetic energy so rapid that the target material behaves not as a solid but as a compressible fluid under the passing shock wave. In the **excavation stage**, a hemispherical cavity — the transient crater — opens as material is ejected along parabolic trajectories. Finally, in the **modification stage**, the transient crater collapses under gravity: for small craters the walls slump inward; for large craters the floor rebounds upward to form central peaks or peak rings. Each stage leaves diagnostic signatures in the rocks — from shattered minerals to glass to high-pressure polymorphs that could only have formed under the extreme conditions of a hypervelocity impact.

Understanding impact mechanics is foundational to comparative planetology for two reasons. First, craters are the universal geological record: every solid Solar System surface bears their imprint, and their size-frequency distributions encode the age and bombardment history of planetary surfaces. Second, impacts have biological consequences — delivering volatiles, triggering mass extinctions, and potentially providing energy sources for early life. The Chicxulub impact structure in Mexico, 180 km (112 mi) in diameter and 66 million years old, is perhaps the most consequential geological event in the last 500 million years of Earth history, and unravelling its formation requires understanding the physics covered in this lesson.`,
      keyTerms: [
        { term: 'hypervelocity impact', def: 'A collision between a projectile and a target body at velocities far exceeding the speed of sound in the target material, typically >1 km/s and in planetary contexts 11–72 km/s. At these velocities the projectile\'s kinetic energy (½mv²) is so large that both projectile and target undergo shock compression and partial or complete vaporisation. The lower bound of ~11 km/s corresponds to Earth\'s escape velocity, the minimum approach speed for any object falling from infinity. The upper bound of ~72 km/s corresponds to a head-on collision with an object in a retrograde orbit at Mercury\'s perihelion. Typical asteroidal impacts on Earth occur at 11–30 km/s; cometary impacts may reach 50–72 km/s.' },
        { term: 'Hugoniot equations', def: 'The set of three conservation equations (mass, momentum, and energy) that describe the state of a material immediately behind a shock wave front. Named after Pierre-Henri Hugoniot (1887), these equations relate the pressure, density, particle velocity, and internal energy of the shocked material to those of the unshocked material ahead of the wave. Together they define the Rankine-Hugoniot conditions. In impact cratering, solving the Hugoniot equations for the shock pressure generated at contact yields the peak pressures — typically >100 GPa at the impactor-target interface — that drive shock metamorphism of minerals. The solutions are expressed graphically as Hugoniot curves in pressure-volume or pressure-particle-velocity space for each rock type.' },
        { term: 'shock metamorphism', def: 'Permanent, irreversible changes to minerals and rocks caused by the passage of a hypervelocity impact shock wave, producing features that cannot be replicated by any other geological process (volcanic eruption, tectonic metamorphism, or lightning). Diagnostic shock metamorphic features include: planar deformation features (PDFs) in quartz and feldspar at >10 GPa; coesite (a dense SiO₂ polymorph) at >30 GPa; stishovite (an even denser SiO₂ polymorph, stable above ~100 GPa) at >100 GPa; maskelynite (diaplectic glass formed from plagioclase feldspar) at >30–45 GPa; and bulk melting producing suevite (a breccia containing impact melt) and coherent impact melt sheets. The presence of any of these features in a rock outcrop is considered definitive evidence of a meteorite impact.' },
        { term: 'transient crater', def: 'The maximum-depth, bowl-shaped cavity produced during the excavation stage of crater formation, before gravitational collapse alters the final morphology. The transient crater grows as the excavation flow field drives material downward and outward; at its maximum extent it may be up to 1.5× the depth of the final crater and somewhat larger in diameter. For simple craters (below the transition diameter), the transient crater closely approximates the final crater. For complex craters, the transient crater is significantly larger and deeper than the final form because gravitational collapse substantially reduces depth while increasing apparent diameter. The depth-to-diameter ratio of the transient crater is approximately 1:3, consistent across crater-forming events from laboratory experiments to planetary-scale impacts.' },
        { term: 'Pi-group scaling', def: 'A dimensional analysis framework for predicting crater dimensions from impactor properties, developed by Edgar Schmidt and refined by Keith Holsapple and Richard Schmidt in the 1980s. By expressing all relevant physical quantities as dimensionless groups (Pi groups) combining impactor diameter d, velocity v, density ρ_i, target density ρ_t, gravitational acceleration g, and target strength Y, the scaling laws collapse laboratory cratering data across many orders of magnitude into compact power-law relationships. The resulting crater diameter scaling law takes the form D_c ∝ ρ_i^(1/3) g^(-1/3) v^(2/3) m^(1/3) in the gravity-dominated regime, where m is impactor mass. Pi-group scaling allows predictions of crater diameter to be extrapolated from laboratory experiments (~cm scale) to planetary impacts (~km scale) with estimated uncertainties of ±30–50%.' },
        { term: 'impact melt', def: 'Rock that was completely melted by the heat generated during a hypervelocity impact and subsequently quenched to form a glassy or fine-crystalline igneous-textured material. Impact melt forms preferentially in the central zone of the transient cavity, where peak shock pressures and temperatures are highest. Melt volume scales approximately with the kinetic energy of the impactor: for a Chicxulub-scale event (~10²⁴ J), an estimated ~10⁴–10⁵ km³ of impact melt was generated. Impact melt can be distinguished from volcanic material by its characteristic chemical composition (mixing of projectile and target rock), presence of shocked mineral clasts, and elevated concentrations of siderophile elements (Ni, Ir, Pt) from the meteoritic projectile. Suevite is a breccia comprising a mix of impact melt glass and shocked rock fragments, classically described from the Nördlingen Ries crater, Germany.' },
      ],
    },
    {
      type: 'concept',
      title: 'Three stages: contact, excavation, and modification',
      body: `Impact cratering is conventionally divided into three overlapping stages, each governed by different physics and each leaving distinct signatures in the final crater and surrounding target rocks.

**Contact and compression** begins at the instant the leading edge of the projectile touches the target surface. At impact velocities of 11–72 km/s, both the projectile and target behave as compressible fluids on the timescale of the collision. A shock wave propagates downward and outward into the target at velocities of 6–10 km/s, while a second shock wave propagates upward into the projectile. Peak pressures at the projectile-target interface exceed 100 GPa — comparable to conditions in Earth's lower mantle. For a 10-km impactor striking at 20 km/s, this stage lasts only ~0.5 seconds. The shock wave decays rapidly with distance, falling from >100 GPa at the contact zone to ~50 GPa at one impactor radius, ~10 GPa at several radii, and eventually reaching sub-GPa pressures at the crater rim. The pressure gradient produces a corresponding gradient of shock metamorphism: complete melting and vaporisation near the contact, through coesite and stishovite formation, PDF development in quartz, and finally unshocked fractured rock at the margins.

**Excavation** begins as rarefaction (release) waves follow the shock wave, converting compressive energy into kinetic energy of particle motion. An excavation flow field develops: material near the surface is ejected at high angles while material at greater depth moves primarily downward and outward. The transient crater grows in approximately hemispherical geometry, with a diameter-to-depth ratio of roughly 3:1. Ejecta leaves the crater in a continuous curtain at ~45° from vertical, landing to form the ejecta blanket — a continuous deposit whose thickness decreases approximately as r⁻³ with distance from the crater centre. For large impacts, distal ejecta (impact spherules and tektites) may be globally distributed. The Chicxulub impact ejected enough material to form a global layer of iridium-enriched clay — the K-Pg boundary — detectable worldwide. Excavation timescales range from seconds for small craters to minutes for basin-scale events.

**Modification** begins when the excavation flow field reverses. For craters below the simple-to-complex transition diameter (~4 km (2.5 mi) on the Moon, ~2–4 km (2.5 mi) on Earth), modification is limited to wall slumping and infill — the crater retains its bowl shape with a depth-to-diameter ratio of ~0.2. Above the transition diameter, gravitational forces overcome rock strength and the transient crater floor rebounds upward, forming a central peak (uplift of deep target material by kilometres in seconds), while the rim collapses inward to form terraces. In the largest impacts, the central peak itself collapses outward to form a peak ring. The transition from simple to complex craters occurs at smaller diameters on lower-gravity bodies: the transition is at ~15 km (9.3 mi) on Mars and ~4 km (2.5 mi) on the Moon, versus ~2–4 km (2.5 mi) on Earth.`,
      cards: [
        {
          name: 'Contact & Compression: Shock Wave Physics',
          icon: Zap,
          color: BRAND.coral,
          desc: 'At first contact, projectile kinetic energy launches shock waves into both impactor and target simultaneously. Peak pressures exceed 100 GPa at the interface — governed by the Hugoniot equations for each material. The impactor is entirely consumed within ~1 projectile diameter of penetration: at 20 km/s, a 10-km impactor is vaporised in ~0.5 seconds. Shock pressure decays as roughly P ∝ r⁻n (n ≈ 2–3) with distance, creating concentric zones of shock metamorphism: vaporisation (>200 GPa), melting (60–200 GPa), coesite/stishovite formation (>30–100 GPa), PDF development in quartz (>10 GPa), and fracturing (<10 GPa).',
          examples: 'Chicxulub impactor (~10 km (6.2 mi), ~20 km/s): peak interface pressure ~200 GPa; impactor completely vaporised · Sudbury, Canada (1.85 Ga, ~200 km (124 mi) diameter): preserved melt sheet >2.5 km (1.6 mi) thick, one of largest confirmed impact structures · Coesite first synthesised by Loring Coes (1953) in laboratory; first found in nature at Meteor Crater, Arizona (1960) by Shoemaker — proving hypervelocity impact origin',
        },
        {
          name: 'Excavation: Transient Crater and Ejecta',
          icon: Layers,
          color: BRAND.gold,
          desc: 'Rarefaction waves following the shock convert compressive energy to kinetic energy, driving an excavation flow field. The transient crater grows to ~3× depth as diameter; ejecta exits at ~45° forming a continuous blanket thinning as r⁻³. Pi-group scaling: D_c ∝ ρ_i^(1/3) g^(-1/3) v^(2/3) m^(1/3) in gravity-dominated regime. Impact melt volume scales with kinetic energy: V_melt ∝ KE^0.8 approximately. Distal ejecta — impact spherules, tektites, and shocked mineral grains — may be globally distributed. The excavation cavity for a Chicxulub-scale event reached ~40 km (25 mi) depth before modification.',
          examples: 'Meteor Crater (Barringer), Arizona: 1.2 km (0.7 mi) diameter, ~50,000 years old; ejecta blanket visible to 3 km (1.9 mi) radius; ~10⁶ tonnes of shocked Coconino sandstone ejected · K-Pg iridium layer (Alvarez et al. 1980): globally uniform ~30 ppb Ir in 2.5-cm clay layer marking Chicxulub ejecta fallout, confirmed at >200 sites worldwide · Moldavite tektites (Czech Republic): green glass formed from silica-rich ejecta melted and re-quenched during Ries Crater impact 14.8 Ma, ~450 km (280 mi) distant',
        },
        {
          name: 'Modification: Collapse, Rebound, and Final Form',
          icon: FlaskConical,
          color: BRAND.jade,
          desc: 'Gravitational collapse of the transient crater determines final morphology. Simple craters (D < ~4 km (2.5 mi) on Moon, < ~2 km (1.2 mi) on Earth): walls slump, crater retains bowl shape, d/D ≈ 0.2. Complex craters (D > transition): floor rebounds upward (structural uplift of km-scale), rim collapses to form terraces; central peak exposes formerly deep target rocks. Multi-ring basins (D > ~300 km (186 mi) on Moon): multiple concentric fault-bounded rings form by inward collapse of large volumes of target. Transition diameter scales inversely with gravity: D_trans ∝ g^-1, explaining why Moon (1/6 g) has transition at ~15 km (9.3 mi) vs Earth at ~2–4 km (2.5 mi).',
          examples: 'Copernicus Crater, Moon (93 km (58 mi), ~800 Ma): textbook complex crater with three-peaked central peak rising 1.2 km (0.7 mi), terraced walls, and well-preserved ejecta blanket · Vredefort Dome, South Africa (>200 km (124 mi), 2.02 Ga): largest confirmed impact structure on Earth; central uplift exposes Archean basement rocks normally buried >25 km (16 mi) deep · Orientale Basin, Moon (930 km (578 mi)): three-ring multi-ring basin; Lunar Reconnaissance Orbiter mapping confirmed innermost ring = collapsed peak ring',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Scaling laws, melt volumes, and real events',
      body: `**Pi-group scaling** is the practical tool that allows planetary scientists to estimate crater diameters from impactor properties — and vice versa, to infer impactor properties from observed crater dimensions. The key result in the gravity-dominated regime (appropriate for craters larger than ~a few hundred metres on Earth) is that the crater diameter scales as D_c ∝ g^(-1/3) v^(2/3) (m/ρ_t)^(1/3), where g is surface gravity, v is impact velocity, m is impactor mass, and ρ_t is target density. This means that a given impactor produces a much larger crater on a low-gravity body (Moon, Mars) than on Earth. Doubling impact velocity increases crater diameter by 2^(2/3) ≈ 1.59×; doubling impactor mass increases diameter by 2^(1/3) ≈ 1.26×. Velocity matters more than mass.

**Impact melt scaling** is similarly important for understanding the thermal consequences of large impacts. Melt volume scales approximately with impactor kinetic energy: V_melt ≈ (KE / ΔH_fus × ρ_target)^0.8 in simplified form, where ΔH_fus is the enthalpy of fusion of the target rock. For the Chicxulub impactor (~10 km (6.2 mi) diameter, ~2.5 g/cm³, ~20 km/s), the kinetic energy was approximately 4 × 10²³ J, and the estimated melt volume ranges from ~10,000 to ~100,000 km³ (23990 cu mi) — enough to fill Lake Superior seven times over.

Historical examples illustrate the range of impact energy scales: **Tunguska, Siberia (30 June 1908)** — a ~40-metre stony asteroid entered Earth's atmosphere and exploded as an airburst at ~8–10 km (6.2 mi) altitude, releasing energy equivalent to ~10–15 megatons of TNT (~4 × 10¹⁶ J). The airburst flattened ~2,150 km² (830 sq mi) of Siberian forest in a radial pattern centred on the burst point. No crater was formed because the impactor was destroyed before reaching the surface. **Chelyabinsk, Russia (15 February 2013)** — a ~20-metre bolide released ~500 kilotons (~2 × 10¹⁵ J) as a daytime fireball visible across 1,000 km (621 mi), with the shock wave breaking windows across six Russian cities and injuring over 1,500 people — the largest confirmed impact-related injuries since Tunguska. **Chicxulub, Yucatán (66.0 Ma)** — a ~10-km diameter asteroid or comet impacted at ~20 km/s with kinetic energy ~4 × 10²³ J (~100 million megatons), producing the 180-km diameter Chicxulub crater and triggering the end-Cretaceous mass extinction that eliminated ~75% of species, including all non-avian dinosaurs.`,
      cards: [
        {
          name: 'Pi-Group Scaling Laws',
          icon: Zap,
          color: BRAND.amethyst,
          desc: 'Dimensional analysis reduces crater-forming physics to dimensionless Pi groups. In the gravity-dominated regime (large craters): D_c ∝ ρ_i^(1/3) g^(-1/3) v^(2/3) m^(1/3). In the strength-dominated regime (small craters, D < ~200 m (656 ft) on Earth): D_c ∝ ρ_i^(1/3) Y^(-1/3) v^(2/3) m^(1/3), where Y is target strength. Pi-group scaling allows extrapolation from laboratory (~cm) to planetary (~100 km (62 mi)) scales with ±30–50% uncertainty. Key insight: impact velocity has the strongest influence (v^(2/3)); doubling v yields 1.6× larger crater. Gravity strongly controls final morphology: same impactor produces larger craters on Moon (g = 1.62 m/s²) than Earth (g = 9.81 m/s²) by a factor of (9.81/1.62)^(1/3) ≈ 1.8×.',
          examples: 'Holsapple & Schmidt (1982, 1987): foundational Pi-group papers calibrated against >500 laboratory impact experiments · Meteor Crater (Arizona): 1.2 km (0.7 mi) diameter from ~50-m impactor at ~12 km/s — matches Pi-group prediction within 20% · Moon vs Earth comparison: 1-km impactor at 20 km/s → ~15 km (9.3 mi) crater on Moon, ~8 km (5.0 mi) on Earth (gravity scaling)',
        },
        {
          name: 'Impact Energy and Melt Volume',
          icon: FlaskConical,
          color: BRAND.accentHot,
          desc: 'Impact melt volume scales approximately as V_melt ∝ KE^0.8, where KE = ½mv² is impactor kinetic energy. For Chicxulub (~10 km (6.2 mi), ρ = 2,500 kg/m³, v = 20 km/s): KE ≈ 4 × 10²³ J; estimated melt volume ~10⁴–10⁵ km³. Atmospheric effects scale similarly: impactors >1 km (0.6 mi) diameter inject enough material into the stratosphere to block sunlight globally for months to years ("impact winter"), causing photosynthesis shutdown and crop failure. The Chicxulub impact ejected an estimated ~100 trillion tonnes of sulphur dioxide from the target Cretaceous carbonates, causing global acid rain and decade-scale cooling of ~10–15°C (59°F).',
          examples: 'Chicxulub KE ≈ 4 × 10²³ J ≈ 10⁸ megatons TNT — global effects inevitable at this scale · Tunguska 1908: ~4 × 10¹⁶ J (10–15 megatons); regional destruction, no crater, no global effects · Chelyabinsk 2013: ~2 × 10¹⁵ J (500 kilotons); local/regional effects, 1,500 injured from window glass · K-Pg iridium anomaly: ~30 ppb Ir globally, corresponding to ~6 × 10¹⁵ g of meteoritic material distributed worldwide',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'The Impact Event: From Contact to Crater',
      body: 'This flow diagram traces the sequence of physical processes from the moment of impact to the formation of the final crater morphology, showing how energy is partitioned at each stage.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Follow the progression of a hypervelocity impact from first contact through shock wave propagation, excavation flow, and final crater modification',
        nodes: [
          {
            id: 'contact',
            label: 'Contact & Compression',
            description: 'Projectile touches target surface at 11–72 km/s. Shock waves propagate into both projectile and target at 6–10 km/s. Peak pressures >100 GPa at interface; projectile vaporised within ~0.5 s for a 10-km impactor. Hugoniot equations govern shock state.',
            color: BRAND.ruby,
          },
          {
            id: 'shock-metamorphism',
            label: 'Shock Metamorphism',
            description: 'Pressure gradient creates concentric zones: vaporisation (>200 GPa), impact melt (60–200 GPa), stishovite/coesite (30–100 GPa), planar deformation features in quartz (>10 GPa), fracturing (<10 GPa). These mineral assemblages are the diagnostic fingerprints of impact.',
            color: BRAND.coral,
          },
          {
            id: 'excavation',
            label: 'Excavation Flow Field',
            description: 'Rarefaction waves convert compressive energy to kinetic energy. Excavation flow field drives material outward and upward; transient crater grows to ~3× depth as diameter. Ejecta curtain exits at ~45°, forming continuous blanket thinning as r⁻³.',
            color: BRAND.gold,
          },
          {
            id: 'transient-crater',
            label: 'Transient Crater Maximum',
            description: 'Hemispherical cavity reaches maximum extent: depth/diameter ≈ 1/3. Scaled by Pi-group law: D_c ∝ g^(−1/3) v^(2/3) m^(1/3). This is the reference geometry before gravity-driven collapse begins.',
            color: BRAND.accent,
          },
          {
            id: 'modification',
            label: 'Gravitational Modification',
            description: 'Below transition diameter: wall slumping fills crater floor; bowl shape preserved. Above transition: floor rebounds upward (central peak uplift of km-scale in seconds); rim terraces form by inward collapse. Basin scale: peak ring forms by collapse of central peak.',
            color: BRAND.jade,
          },
          {
            id: 'final-crater',
            label: 'Final Crater Morphology',
            description: 'Simple (D < ~4 km (2.5 mi) on Moon): bowl-shaped, d/D ≈ 0.2. Complex (D = 4–300 km (186 mi)): central peak, terraced walls, shallower d/D. Multi-ring basin (D > 300 km (186 mi)): concentric fault-bounded rings. Preserved as the geological record of bombardment history on all solid Solar System surfaces.',
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'contact', to: 'shock-metamorphism', label: 'shock wave propagation' },
          { from: 'contact', to: 'excavation', label: 'rarefaction wave follows shock' },
          { from: 'shock-metamorphism', to: 'excavation', label: 'energy partitioning' },
          { from: 'excavation', to: 'transient-crater', label: 'cavity growth' },
          { from: 'transient-crater', to: 'modification', label: 'gravity overcomes strength' },
          { from: 'modification', to: 'final-crater', label: 'collapse and rebound' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'During the contact and compression stage of a hypervelocity impact, what determines the peak shock pressure at the projectile-target interface, and why does this pressure far exceed the yield strength of rock?',
          a: [
            'Peak pressure is determined by the impactor\'s kinetic energy density and both materials\' Hugoniot equations; at 11–72 km/s velocities the momentum flux generates pressures >100 GPa, while rock yield strength is only ~1 GPa — so the target behaves as a compressible fluid',
            'Peak pressure equals the impactor\'s weight per unit area; a dense impactor simply pushes harder on the surface, and the rock fractures in tension like any brittle material under a heavy load',
            'Peak pressure is set by the speed of sound in the target material; once the impactor exceeds this speed the rock is supersaturated with energy and detonates like an explosive, which is why impact craters are circular regardless of impact angle',
            'Peak pressure depends only on impactor density, not velocity; heavier impactors generate higher pressures while faster but lighter impactors merely excavate larger volumes without reaching high peak pressures',
          ],
          correct: 0,
          explain: 'The Rankine-Hugoniot conditions govern the shock state: for a given impact velocity and material pair, the conservation equations of mass, momentum, and energy (the Hugoniot equations) uniquely determine the peak pressure. At 20 km/s, the momentum flux ρv² ≈ 3,000 kg/m³ × (20,000 m/s)² ≈ 1.2 × 10¹² Pa = 1,200 GPa in the simplest estimate — far exceeding the ~1 GPa yield strength of granite. This is why both materials behave hydrodynamically (as fluids) during the shock: the pressure is so far above yield strength that deviatoric (shear) stresses are negligible. Option B confuses hydrostatic with shock loading; option C correctly identifies circular craters but misattributes the mechanism; option D incorrectly deprioritises velocity, which enters as v² and dominates the energy budget.',
        },
        {
          q: 'Pi-group scaling predicts crater diameter scales as D_c ∝ g^(−1/3) v^(2/3) m^(1/3) in the gravity-dominated regime. A 1-km diameter asteroid strikes both Earth and the Moon at the same velocity. Approximately how much larger is the lunar crater compared to the terrestrial crater?',
          a: [
            'About 1.8× larger on the Moon, because D_c ∝ g^(−1/3) and g_Moon/g_Earth = 1/6, giving (g_Earth/g_Moon)^(1/3) = 6^(1/3) ≈ 1.82',
            'About 6× larger on the Moon, because gravitational acceleration is 6× lower and the scaling is linear in 1/g',
            'The same size, because crater diameter depends only on impactor kinetic energy which is identical in both cases',
            'About 3× larger on the Moon, because gravity controls the depth not the diameter; diameter is set entirely by impactor mass and velocity',
          ],
          correct: 0,
          explain: `The Pi-group gravity scaling gives D_c ∝ g^(−1/3). If g_Moon = g_Earth/6, then D_Moon/D_Earth = (g_Earth/g_Moon)^(1/3) = 6^(1/3) ≈ 1.82. So the same impactor produces a crater roughly 1.8× larger in diameter on the Moon than on Earth. This is why the Moon\'s surface is saturated with craters that would have been much smaller (or might not have reached the complex crater threshold) if they had formed on Earth. Option B incorrectly uses linear scaling (g^−1 rather than g^−1/3). Option C is wrong because gravity controls how large the transient crater grows during excavation, even if kinetic energy is the same. Option D incorrectly states that gravity only controls depth.`,
        },
        {
          q: 'Which of the following mineral assemblages provides the most definitive evidence that a geological structure is an impact crater rather than a volcanic explosion crater or a salt dome?',
          a: [
            'Coesite and stishovite (high-pressure SiO₂ polymorphs) together with planar deformation features (PDFs) in quartz grains and maskelynite (diaplectic feldspar glass)',
            'Basaltic glass and fractured basement rock beneath a circular topographic depression filled with fine-grained sediment',
            'Elevated concentrations of nickel and chromium in the surface soils, combined with a circular ring of hills and a central topographic low',
            'A brecciated zone of mixed lithologies beneath a circular depression, with evidence of hydrothermal alteration and elevated heat flow',
          ],
          correct: 0,
          explain: 'Coesite (stable above ~3 GPa, ~30 km (19 mi) depth in static conditions), stishovite (stable above ~9–10 GPa), and PDFs in quartz (requiring >10 GPa for creation on nanosecond timescales) cannot be produced by any geological process other than hypervelocity impact shock. Volcanic pressures at the surface are <0.1 GPa. Maskelynite (diaplectic glass preserving the original crystal shape but with amorphous structure) requires >30–45 GPa and nanosecond-duration pressure pulse — impossible to replicate with static geological processes. Option B describes features consistent with maar volcanoes or diatremes; option C is suggestive but not diagnostic (nickel-chrome enrichment could reflect mafic/ultramafic intrusions); option D describes features consistent with hydrothermal systems, phreatomagmatic activity, or kimberlites. The combination of high-pressure polymorphs and PDFs in quartz is the definitive "smoking gun" of impact.',
        },
        {
          q: 'The Tunguska event (1908) released ~10–15 megatons of energy but produced no crater, while a ~50-metre impactor at Barringer/Meteor Crater created a 1.2-km crater ~50,000 years ago. What property of the Tunguska bolide most likely explains the difference in outcome?',
          a: [
            'The Tunguska object was a stony or cometary body with insufficient strength to survive atmospheric passage intact, fragmenting and exploding as an airburst at ~8–10 km (6.2 mi) altitude before reaching the surface',
            'Tunguska occurred over a swampy forest that absorbed all the energy, while Barringer struck desert bedrock; the substrate determines whether a crater forms',
            'Tunguska was a smaller object with less kinetic energy, so it decelerated to terminal velocity before impact and hit the ground with insufficient speed to form a crater',
            'The Tunguska impactor struck at a very oblique angle (<5°), causing it to skip off the atmosphere like a stone off water rather than penetrating to the surface',
          ],
          correct: 0,
          explain: `The key distinction is impactor composition and strength. Stony meteorites and cometary bodies (low density, ~1–2 g/cm³, low tensile strength) are disrupted by aerodynamic ram pressure as they decelerate in the atmosphere. For the ~40-metre Tunguska body, atmospheric ram pressure exceeded the object\'s material strength at ~8–10 km (6.2 mi) altitude, causing explosive fragmentation and energy deposition as an airburst — no solid object reached the surface to form a crater. The Barringer impactor, by contrast, was a dense iron meteorite (~7.9 g/cm³, high tensile strength ~200–400 MPa), which survived atmospheric transit largely intact and struck the Colorado Plateau sandstone at ~12 km/s. Option B is incorrect — substrate matters for crater morphology but not whether an airburst occurs versus surface impact. Option C is incorrect: Tunguska released 10–15 megatons, far more than sufficient to crater if it had reached the surface; the issue is atmospheric disruption, not insufficient energy. Option D is incorrect; very oblique entry angles do occur but the Tunguska trajectory was estimated at ~30–40° from horizontal, not nearly horizontal enough to skip off.`,
        },
        {
          q: 'Impact melt volume scales approximately as V_melt ∝ KE^0.8, where KE is impactor kinetic energy. If a second impactor has the same mass as the Chicxulub impactor (~10 km (6.2 mi), ~10¹⁵ kg) but strikes at 40 km/s instead of 20 km/s, by approximately what factor does the impact melt volume increase?',
          a: [
            'By a factor of ~3.0×, because KE scales as v², so KE doubles by 4×, and V_melt ∝ KE^0.8 gives 4^0.8 ≈ 3.03',
            'By a factor of 2×, because doubling velocity doubles energy and melt volume is proportional to energy',
            'By a factor of 4×, because kinetic energy is proportional to v² and melt volume tracks KE linearly',
            'By a factor of ~1.7×, because the exponent 0.8 applies to velocity directly, giving 2^0.8 ≈ 1.74',
          ],
          correct: 0,
          explain: 'Kinetic energy KE = ½mv². If velocity doubles (20 → 40 km/s) while mass stays constant, KE increases by 2² = 4×. Since V_melt ∝ KE^0.8, the melt volume increases by 4^0.8 ≈ 3.03×. So doubling impact velocity increases melt volume by about 3×, not 4× (because the exponent is 0.8, not 1.0). Option B incorrectly uses a linear relationship between energy and melt volume. Option C incorrectly uses a linear relationship (exponent = 1 rather than 0.8). Option D incorrectly applies the 0.8 exponent to velocity rather than to energy; it should be applied to KE (which already has v²), not v alone.',
        },
      ],
    },
  ],
}

export default impactCrateringMechanics
