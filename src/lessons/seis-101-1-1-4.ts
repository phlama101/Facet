import { Layers, Globe, Zap, ArrowDown, Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const earthInteriorSeismology: Lesson = {
  id: 'seis-101-1-1-4',
  title: `Earth\'s Interior Revealed by Seismology`,
  track: 'geo',
  trackName: 'Seismology',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 120,
  description: `Before seismology, Earth\'s interior was pure speculation. Today, seismic waves give us a more detailed picture of Earth\'s layered interior — from crust to inner core — than we have of the deep ocean floor.`,
  sources: [
    { org: 'USGS',       title: 'USGS — Inside the Earth',                    url: 'https://earthquake.usgs.gov/learn/topics/seismology/inside_earth.php' },
    { org: 'EarthScope', title: `EarthScope Consortium — Earth\'s Interior`,   url: 'https://www.earthscope.org/education/' },
    { org: 'IRIS',       title: `IRIS — The Earth\'s Interior`,                url: 'https://www.iris.edu/hq/inclass/animation/traveling_seismic_waves' },
    { org: 'AGI',        title: 'AGI Glossary of Geology',                     url: 'https://www.americangeosciences.org/' },
  ],
  sections: [
    {
      type: 'intro',
      title: `Four layers, four billion years: reading Earth\'s interior from the outside`,
      body: `Before the invention of seismology, Earth's interior was pure speculation. Geologists knew from surface rocks and volcanic lavas that Earth had a hot interior, and from its bulk density (~5.5 g/cm³, much higher than surface rocks at ~2.7 g/cm³) that the deep interior must be much denser — almost certainly iron-rich. But the exact structure, the depth of major boundaries, and the physical state of each layer remained unknown until seismic waves provided the first direct probe. Today we know Earth's interior in more detail than we know the deep oceans' floors, thanks entirely to seismology — the analysis of how seismic waves are refracted, reflected, and blocked by different layers.

The Mohorovičić discontinuity (Moho) marks the base of the crust — Earth's outermost rigid shell. In oceanic regions, the crust is only ~7 km thick and composed of basalt and gabbro (mafic rocks); in continental regions, it is 25-70 km thick (average ~35 km) and composed of a heterogeneous mix of granite and metamorphic rocks overlying a more mafic lower crust. P-wave velocity jumps from ~6.5 km/s in continental crust to ~8.0 km/s in the uppermost mantle (peridotite) at the Moho. The transition zone at 410 km and 660 km depth marks major phase transitions in mantle minerals: olivine transforms to wadsleyite at 410 km (the "olivine-β transition") and to ringwoodite at ~520 km, then to the lower-mantle assemblage of bridgmanite (MgSiO₃ perovskite) + ferropericlase + calcium perovskite at 660 km. These phase transitions cause step-like increases in seismic velocity that are clearly visible in seismological data and act as reflectors for short-period seismic waves.

The core-mantle boundary (CMB) at 2,891 km depth is the most dramatic velocity discontinuity in Earth. P-wave velocity drops abruptly from ~13.7 km/s (at the base of the D" layer, the lowermost mantle) to ~8.1 km/s (at the top of the liquid outer core). S-wave velocity drops from ~7.3 km/s to zero, because the outer core is liquid iron (with ~10% light elements — oxygen, silicon, sulphur, hydrogen — mixed in to lower the density from pure iron to Earth's observed core density). The outer core, 2,891-5,150 km depth, is the site of Earth's geodynamo: convection in the liquid iron driven by secular cooling, solidification of the inner core, and chemical buoyancy generates the electric currents that produce Earth's magnetic field. The inner core boundary (ICB) at 5,150 km depth marks the transition to a solid iron-nickel inner core ~1,220 km in radius, discovered in 1936 by Inge Lehmann from anomalous P-wave arrivals (PKIKP phases) within the P-wave shadow zone.

The D" layer (D-double-prime) — the ~200-300 km thick zone immediately above the CMB — is one of the most seismologically complex regions in Earth. It shows dramatic lateral velocity heterogeneities (hot upwelling plumes vs cold subducted slabs reaching the CMB), a seismic discontinuity that may represent a phase transition from bridgmanite to post-perovskite at ~125 GPa, and ultralow velocity zones (ULVZs) where P-wave velocity decreases by 5-10% over distances of just 5-40 km — possibly partial melt from ancient subducted oceanic crust at the CMB temperature. The D" layer is where Earth's two great heat reservoirs — the mantle and the core — exchange thermal energy, and where the deepest mantle plumes originate, rising to produce hotspot volcanism at the surface billions of years later.`,
      interaction: {
        type: 'annotated-image' as const,
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Northridge_earthquake_fault.jpg/1200px-Northridge_earthquake_fault.jpg',
        alt: 'Northridge earthquake fault rupture showing surface rupture trace, displacement, and damaged zone used to measure earthquake size',
        aspectRatio: '16/9',
        credit: 'Wikimedia Commons',
        annotations: [
          {
            id: 'fault-rupture-trace',
            x: 50,
            y: 45,
            label: 'Fault rupture trace',
            description: 'The fault rupture trace is the line where the fault plane intersects the ground surface. Its length is a key parameter in estimating earthquake magnitude: longer ruptures release more seismic moment. The 1994 Northridge earthquake had a blind thrust fault with no surface rupture, while the 1999 Hector Mine M7.1 produced ~45 km of visible surface rupture.',
          },
          {
            id: 'surface-rupture-displacement',
            x: 40,
            y: 55,
            label: 'Surface rupture displacement',
            description: 'The offset measured across the fault at the surface directly records the slip — the relative motion of the two fault blocks during the earthquake. Typical coseismic slip in large earthquakes ranges from 1 to 10 metres. This displacement, integrated over the entire rupture area, yields the seismic moment M₀ = μ × A × D (shear modulus × area × average slip).',
          },
          {
            id: 'undisturbed-ground',
            x: 20,
            y: 40,
            label: 'Undisturbed ground',
            description: 'Rock and sediment far from the fault plane remain largely intact, preserving the pre-earthquake ground surface as a reference datum. Comparing displaced markers — roads, fences, stream channels — across the fault to undisturbed terrain allows geologists to measure both horizontal and vertical components of coseismic slip.',
          },
          {
            id: 'damaged-zone',
            x: 60,
            y: 50,
            label: 'Damaged zone',
            description: 'A zone of fractured and brecciated rock several metres to tens of metres wide surrounds the main fault plane. This damage zone is created by repeated earthquake ruptures and by off-fault stress concentrations. The width and properties of the damage zone affect how seismic waves propagate through the fault zone and influence aftershock patterns.',
          },
          {
            id: 'measuring-tape-offset',
            x: 45,
            y: 60,
            label: 'Measuring offset',
            description: 'Field geologists measure coseismic surface displacement by stretching measuring tapes across offset features — fences, roads, and drainage channels provide ideal reference markers. These field measurements constrain the magnitude and style of faulting and validate geodetic measurements from GPS and satellite radar interferometry (InSAR).',
          },
        ],
      },
      keyTerms: [
        {
          term: 'Mohorovičić discontinuity',
          def: 'The seismic boundary between the crust and the mantle, marked by a P-wave velocity jump from ~6.5 km/s (crust) to ~8.0 km/s (uppermost mantle peridotite). Depth is ~7 km beneath oceanic crust and ~35-70 km beneath continental crust. Discovered in 1909 by Croatian seismologist Andrija Mohorovičić. Defined entirely by the seismic velocity jump; chemically, it marks the base of felsic/mafic crustal rocks above ultramafic peridotite mantle. The 1960s Mohole Project attempted to drill through it in oceanic crust but was cancelled; modern IODP drilling reaches ~2.5 km below the oceanic seafloor.',
        },
        {
          term: 'Transition zone',
          def: 'The mantle region between 410 km and 660 km depth, marked by two sharp seismic velocity discontinuities produced by olivine phase transitions: olivine converts to wadsleyite at 410 km and eventually to bridgmanite + ferropericlase at 660 km. Each phase change increases density by ~3-7% and is detectable as a sharp reflector for high-frequency body waves. These transitions absorb or release latent heat and the 660 km boundary may act as a partial barrier to mantle convection, potentially separating upper and lower mantle circulation.',
        },
        {
          term: 'D" layer (D-double-prime)',
          def: 'The lowermost ~200-300 km of the mantle immediately above the core-mantle boundary. Highly seismically heterogeneous, with lateral temperature variations of ±1000 K from cold subducted slabs vs rising plumes. May host a post-perovskite phase transition at ~125 GPa and 2700 K. Contains ultralow velocity zones (ULVZs) where P-wave velocity decreases by 5-10% over very short distances. Acts as the site of core-mantle heat and chemical exchange and the origin of deep mantle plumes.',
        },
        {
          term: 'Core-mantle boundary (CMB)',
          def: 'The seismic boundary at 2,891 km depth between the silicate mantle and the liquid iron outer core — the largest velocity discontinuity in Earth. P-wave velocity drops from ~13.7 km/s to ~8.1 km/s; S-wave velocity drops from ~7.3 km/s to zero, confirming the outer core is liquid. First detected by Oldham in 1906 and measured precisely by Gutenberg in 1914 (giving the alternative name "Gutenberg discontinuity"). Site of intense thermal and chemical exchange between the mantle and core.',
        },
        {
          term: 'Inner core boundary (ICB)',
          def: `The boundary at 5,150 km depth (inner core radius ~1,221 km) between the liquid outer core and the solid inner core. P-wave velocity increases from ~10.4 km/s to ~11.0 km/s; S-waves reappear in the inner core at ~3.5 km/s, confirming it is solid. The inner core displays seismic anisotropy — ~3-4% faster along Earth\'s rotation axis — and differential rotation ~0.3-0.5°/yr faster than the mantle. The inner core grows at ~1 mm/yr as Earth cools. Discovered by Inge Lehmann in 1936 from anomalous PKIKP arrivals.`,
        },
      ],
    },
    {
      type: 'callout' as const,
      variant: 'data',
      headline: 'Each magnitude step releases ~32 times more energy',
      body: 'The moment magnitude scale (Mw) is logarithmic: each whole number increase represents about 32 times more energy released. A magnitude 9.0 earthquake releases ~1,000 times more energy than a magnitude 7.0 — which itself releases 32,000 times more energy than a magnitude 5.0.',
    },
    {
      type: 'concept',
      title: `Five seismic boundaries that define Earth\'s structure`,
      body: `Earth's layered structure was revealed not by drilling — the deepest borehole ever drilled (the Kola Superdeep Borehole in Russia) reached only 12.2 km, barely scratching the crust — but by the behaviour of seismic waves as they travel through the planet. Each major layer boundary in Earth produces a characteristic change in seismic wave velocity: where velocity increases abruptly, waves are refracted and reflected back toward the surface; where velocity drops to zero for S-waves, the overlying material must be liquid. By analysing the travel times of thousands of waves from hundreds of earthquakes recorded at seismograph networks worldwide, seismologists have assembled a detailed one-dimensional velocity model of Earth (PREM — Preliminary Reference Earth Model) that maps five major boundaries: the Moho (crust-mantle), the 410 km discontinuity, the 660 km discontinuity, the core-mantle boundary (CMB), and the inner core boundary (ICB). Each boundary represents either a change in mineralogy, a phase transition, or a fundamental change in physical state from solid to liquid or back again.

The most dramatic of these boundaries are controlled not by composition alone but by changes in physical state. At the CMB, chemically the mantle above and the core below are utterly different materials (silicate rock vs iron metal), and the S-wave velocity dropping to zero unambiguously confirms the outer core is liquid. At the ICB, the pressure becomes high enough that iron solidifies despite the extreme temperature (~5,400 K) — the melting point of iron rises steeply with pressure, and at 330 GPa the solid inner core is thermodynamically stable. The transition zone discontinuities at 410 and 660 km are subtler: the composition stays the same (olivine-dominated peridotite), but the crystal structure reorganises into progressively denser polymorphs under increasing pressure, each reorganisation increasing both bulk modulus and density and thus boosting seismic velocity in a step-wise fashion visible globally on seismograms.`,
      cards: [
        {
          name: 'The Crust and Moho — Earth\'s Rocky Shell',
          icon: Layers,
          color: BRAND.coral,
          desc: `Earth\'s crust is its thin, rigid outermost layer, fundamentally different in composition from the mantle below. Oceanic crust (5-7 km thick) is composed of basalt and gabbro — dense mafic rocks formed at mid-ocean ridges — with a density of ~3.0 g/cm³; it is continuously created at spreading centres and destroyed at subduction zones, so no oceanic crust is older than ~200 million years. Continental crust (25-70 km, average ~35 km) is more compositionally diverse — granites, gneisses, and schists in the upper crust overlying a more mafic lower crust — with an average density of ~2.7-2.9 g/cm³ and ages up to 4.0 Ga (the Acasta Gneiss of northwestern Canada). The Moho marks the base of the crust wherever P-wave velocity jumps by ~1.5 km/s (from ~6.5 km/s in crust to ~8.0 km/s in peridotite mantle). Seismic refraction surveys map Moho depth globally. Airy isostasy explains why thick, low-density continental crust floats higher on the denser mantle, like an iceberg: where the crust is thickest, the Moho is deepest.`,
          examples: 'Tibet: Moho ~80 km deep (crust doubled by India-Asia collision). Oceanic back-arc basins: Moho ~12 km. Andes: ~60-70 km. Normal oceanic crust near mid-ocean ridges: ~7 km.',
        },
        {
          name: 'The Mantle — 84% of Earth\'s Volume',
          icon: Globe,
          color: BRAND.amethyst,
          desc: `The mantle extends from the Moho to the CMB at 2,891 km, comprising 84% of Earth\'s volume. The upper mantle (Moho to 410 km) is olivine-dominated peridotite; within it, the asthenosphere (~80-200 km depth) is a weak, slightly partially molten zone over which tectonic plates slide. The 410 km discontinuity marks the olivine-to-wadsleyite phase transition (~3% density increase). The 660 km discontinuity (post-spinel transition to bridgmanite + ferropericlase) separates the upper and lower mantle and may act as a partial barrier to whole-mantle convection. The lower mantle (660-2,891 km) is dominated by bridgmanite (MgSiO₃), the most abundant mineral in Earth, with density rising from ~4.0 to ~5.5 g/cm³. Seismic tomography images cold subducted slabs as fast anomalies and hot mantle plumes as slow anomalies, revealing the three-dimensional thermal structure of the mantle in detail.`,
          examples: 'Farallon Plate remnant: visible as fast anomaly at 500-1000 km depth under eastern North America. African superplume: large slow anomaly in lower mantle beneath Africa. Hawaii plume: slow anomaly traceable from surface to ~1000 km depth.',
        },
        {
          name: 'The Core — Liquid Iron Dynamo and Solid Inner Sphere',
          icon: Zap,
          color: BRAND.gold,
          desc: `Earth\'s core begins at the CMB at 2,891 km depth. The outer core (2,891-5,150 km) is liquid iron-nickel alloyed with ~10% light elements (oxygen, silicon, sulphur, hydrogen) that lower its density from pure iron to the observed value; P-wave velocity rises from 8.1 to 10.4 km/s and S-wave velocity is zero throughout, confirming liquid state. Convection in the outer core, driven by secular cooling, inner core solidification, and chemical buoyancy from light elements expelled during solidification, generates Earth\'s geodynamo and magnetic field. The inner core (radius 1,221 km) is solid iron-nickel with P-velocity ~11 km/s, S-velocity ~3.5 km/s, seismic anisotropy of ~3-4% (faster along the rotation axis), and differential rotation ~0.3-0.5°/yr faster than the mantle. Temperature at the ICB is ~5,400 K; the inner core grows at ~1 mm/yr and is still growing today.`,
          examples: 'PKIKP arrival time difference between polar and equatorial paths: ~2 seconds over 10,000 km (anisotropy). Free oscillation of the inner core: ~5 second period. Inner core has likely been growing for the last ~1-1.5 Ga based on some geodynamo models.',
        },
      ],
    },
    {
      type: 'visualization',
      title: `Seismic velocity profile: Earth\'s layers from surface to centre`,
      body: `The seismic velocity profile of Earth — how fast P-waves and S-waves travel as a function of depth — is the single most information-rich dataset in all of solid-earth geophysics. Each layer's velocity reflects its composition, mineralogy, and physical state: velocity generally increases with depth as pressure compresses minerals and stiffens rock, but sharp jumps at layer boundaries reveal discontinuous changes in either crystal structure (phase transitions), bulk composition, or physical state (solid to liquid). The most striking feature is the dramatic velocity drop at the CMB where both P and S velocities plunge — S-wave velocity to zero — as the solid silicate mantle gives way to the liquid iron outer core. The flow diagram below follows seismic waves downward through each layer, tracking how the P and S velocities change at each boundary and what drives those changes.`,
      interaction: {
        type: 'flow-simulator' as const,
        description: `Earth\'s layered interior from surface to centre, showing each layer\'s seismic properties, boundaries, and the major phase transitions and state changes that control seismic wave behaviour`,
        nodes: [
          {
            id: 'crust',
            label: 'Crust (0–35 km continental / 0–7 km oceanic)',
            description: 'P-wave velocity 5.5-6.5 km/s; S-wave velocity 3.2-3.8 km/s. Continental crust is 25-70 km thick, composed of granitic to metamorphic rocks; oceanic crust is 5-7 km thick, composed of basalt and gabbro. The Moho marks the base of the crust everywhere on Earth. Oldest continental crust ~4.0 Ga (Acasta Gneiss, Canada). Density ~2.7-3.0 g/cm³ — far lower than the mantle below, which is why continents float high and ocean floors sit deep.',
            color: BRAND.coral,
          },
          {
            id: 'upper-mantle',
            label: 'Upper Mantle + Asthenosphere (35–410 km)',
            description: 'Peridotite composition (olivine + pyroxene + garnet). P-wave velocity ~8.0-9.5 km/s; S-wave velocity ~4.4-5.0 km/s. The asthenosphere (low-velocity zone, ~80-200 km depth) is slightly partially molten and mechanically weak, enabling tectonic plate motion above it. Seismic anisotropy from flow-aligned olivine crystals records present and ancient mantle flow directions. Lithospheric mantle above the asthenosphere is cold, rigid, and moves with the overlying crust as a single tectonic plate.',
            color: BRAND.gold,
          },
          {
            id: 'transition-zone',
            label: 'Transition Zone (410–660 km)',
            description: 'Dominated by olivine phase transitions that increase mineral density without changing bulk composition. The 410 km discontinuity marks olivine converting to the denser wadsleyite polymorph; the 660 km discontinuity marks ringwoodite breaking down to bridgmanite + ferropericlase + calcium perovskite. Each step increases density by ~3-7% and P-wave velocity correspondingly. Acts as a partial barrier to mantle convection; subducted slabs appear as cold fast anomalies that pool temporarily at 660 km before some penetrate into the lower mantle.',
            color: BRAND.amethyst,
          },
          {
            id: 'lower-mantle',
            label: 'Lower Mantle (660–2891 km)',
            description: 'Bridgmanite (MgSiO₃ in a perovskite structure) is the dominant mineral — the most abundant single mineral in Earth by volume. P-wave velocity rises from 10.3 to 13.7 km/s with depth; density rises from 4.4 to 5.5 g/cm³. The lower mantle is broadly homogeneous in velocity but shows lateral variations from cold subducted slabs (fast anomalies) and hot rising plumes (slow anomalies) imaged by seismic tomography. The D" layer at the base (post-perovskite phase, ULVZs) is the most heterogeneous zone.',
            color: BRAND.jade,
          },
          {
            id: 'outer-core',
            label: 'Outer Core (2891–5150 km) — Liquid',
            description: `Liquid iron-nickel alloyed with ~10% light elements (O, Si, S, H). P-wave velocity 8.1-10.4 km/s; S-wave velocity = 0 (liquid — no shear rigidity). Vigorous convection in the outer core, driven by secular cooling and inner core solidification, generates Earth\'s geodynamo and magnetic field. The CMB is the largest seismic velocity discontinuity in Earth: P-velocity drops from 13.7 to 8.1 km/s and S-velocity drops from 7.3 to 0, creating the P-wave shadow zone that first revealed the liquid core\'s existence.`,
            color: BRAND.accent,
          },
          {
            id: 'inner-core',
            label: 'Inner Core (5150–6371 km) — Solid',
            description: `Solid iron-nickel, stabilised at ~330 GPa where the melting curve of iron rises above the actual temperature. P-wave velocity ~11 km/s; S-wave velocity ~3.5 km/s (reappears, confirming solid state). Seismically anisotropic: ~3-4% faster along Earth\'s rotation axis than equatorially, detected from PKIKP travel-time differences. Differentially rotates ~0.3-0.5°/yr faster than the mantle. Temperature at ICB ~5,400 K; grows at ~1 mm/yr as Earth cools. Discovered in 1936 by Inge Lehmann from anomalous PKIKP arrivals within the P-wave shadow zone.`,
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'crust',          to: 'upper-mantle',   label: 'Moho: P-velocity jumps ~6.5→8.0 km/s; base of crust; 35 km continental, 7 km oceanic' },
          { from: 'upper-mantle',   to: 'transition-zone', label: '410 km discontinuity: olivine→wadsleyite phase transition; ~3% velocity and density increase' },
          { from: 'transition-zone', to: 'lower-mantle',  label: '660 km discontinuity: ringwoodite→bridgmanite; largest mantle discontinuity; acts as partial barrier to convection' },
          { from: 'lower-mantle',   to: 'outer-core',     label: 'CMB at 2891 km: P-velocity 13.7→8.1 km/s (decrease); S-velocity 7.3→0; liquid outer core begins; Gutenberg discontinuity' },
          { from: 'outer-core',     to: 'inner-core',     label: 'ICB at 5150 km: P-velocity increases 10.4→11.0 km/s; S-velocity reappears (~3.5 km/s); solid inner core; Lehmann discontinuity' },
          { from: 'inner-core',     to: 'outer-core',     label: 'inner core slowly growing at ~1 mm/yr as liquid iron solidifies; releases latent heat and light elements that drive outer core convection and geodynamo' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The olivine-to-wadsleyite phase transition at 410 km and the post-spinel transition at 660 km produce seismic discontinuities visible globally. Why do these mineralogical phase transitions produce detectable seismic velocity jumps?',
          a: [
            'Phase transitions produce jumps in both density (ρ) and elastic moduli (K and μ) because the crystal structure and atomic packing change: wadsleyite has a denser crystal structure than olivine (~3% higher density at 410 km) with stronger atomic bonds, increasing both K and μ; since P-wave velocity = √((K+4μ/3)/ρ), the moduli increase proportionally more than the density, producing a net velocity increase; the transition occurs over a narrow pressure range corresponding to ~10-20 km depth, producing a sharp enough boundary to reflect high-frequency waves; exothermic transitions (like 410 km) produce a positive Clapeyron slope — the transition depth varies with temperature, making it shallower in cold subducted slabs and deeper under hot mantle plumes',
            'Phase transitions produce velocity jumps because the chemical composition changes at the boundary: olivine (Mg₂SiO₄) is chemically converted to wadsleyite by reaction with subducting oceanic crust that introduces water, changing the Si/Mg ratio and therefore the bulk modulus; the velocity jump magnitude depends entirely on the amount of water delivered by slabs, which is why the 410 km discontinuity is stronger beneath subduction zones than beneath oceanic plates',
            'The velocity jumps at 410 and 660 km are produced by temperature discontinuities rather than phase transitions: the mantle is heated from below by the core, and convective instabilities create sharp horizontal temperature contrasts at these depths; P-wave velocity is sensitive to temperature (higher temperature lowers velocity), so the velocity jumps simply reflect a step-change in temperature at the boundary between warmer and cooler convection cells',
            'Velocity jumps at these depths are artifacts of the seismic travel-time inversion method: the PREM reference model imposes sharp boundaries at 410 and 660 km by construction, and tomographic models inherit these discontinuities from the reference model; actual mantle mineralogy changes continuously with depth, producing gradual velocity gradients rather than the sharp jumps seen in standard Earth models',
          ],
          correct: 0,
          explain: 'Mineralogical phase transitions produce seismic velocity jumps because they change the crystal structure of the mineral without changing its bulk chemical composition — but the new crystal structure packs atoms more tightly and bonds them more strongly, simultaneously increasing both the bulk modulus K (resistance to compression) and shear modulus μ (resistance to shearing). Since P-wave velocity = √((K + 4μ/3)/ρ) and S-wave velocity = √(μ/ρ), increases in K and μ that outpace the accompanying density increase produce net velocity increases. At the 410 km discontinuity, olivine (Mg₂SiO₄, orthorhombic structure) transforms to wadsleyite (also Mg₂SiO₄, but a denser modified spinel structure), increasing density by ~3% and moduli by ~5-6%, yielding a net P-velocity increase of ~3-5%. At 660 km, ringwoodite (a spinel-structure polymorph) breaks down to bridgmanite (MgSiO₃ perovskite) + ferropericlase (MgO), a more complex transition with a ~7% density increase and a velocity jump of ~3-5%. The sharpness of these boundaries — critical for them to reflect high-frequency seismic energy — depends on the width of the two-phase coexistence region in pressure-temperature space, typically corresponding to only 5-20 km depth. The Clapeyron slope (dP/dT of the phase boundary) has opposite signs at the two discontinuities: positive at 410 km (olivine-wadsleyite transition is exothermic — cold slabs push the boundary shallower, hot plumes push it deeper) and negative at 660 km (ringwoodite-bridgmanite transition is endothermic — cold slabs are deflected upward by this boundary, which partially resists slab penetration into the lower mantle). This negative Clapeyron slope at 660 km helps explain why some subducted slabs temporarily pond at this depth before breaking through episodically, and why the 660 km boundary may act as an intermittent filter for mantle convection, segregating geochemical reservoirs on timescales of hundreds of millions of years.',
        },
        {
          q: 'The outer core is liquid iron while the inner core is solid iron, yet they are at approximately the same composition and pressure. What determines the solid vs liquid state at the inner core boundary?',
          a: [
            'The inner core boundary is at a temperature very close to the melting point of iron at that pressure (~330 GPa): the outer core above the ICB is above the melting temperature (liquid), while the inner core below is at or just below the melting temperature (solid); as Earth has cooled over 4.5 billion years, the ICB has migrated outward as more outer core material solidifies; the progressive solidification of the inner core is not just thermal but also chemical: iron solidifies preferentially while light elements (O, Si, S) partition into the remaining liquid, enriching the outer core in light elements and providing chemical buoyancy that drives convection and the geodynamo; without the geodynamo feedback, the inner core would not grow as rapidly',
            'The solid inner core and liquid outer core are at the same temperature throughout; the difference in physical state is controlled entirely by pressure: at pressures above ~250 GPa, the iron phase diagram shows a body-centred cubic (bcc) to hexagonal close-packed (hcp) structural transition that makes iron mechanically rigid without changing its temperature; the ICB therefore marks a pressure-driven crystallographic transition rather than a melting boundary, which is why the ICB temperature profile is isothermal',
            'The inner core is solid because it is enriched in nickel compared to the outer core: nickel raises the melting point of iron by ~500 K at core pressures, so the inner core\'s higher Ni content pushes it above the melting point curve at the ICB temperature; the outer core, depleted in nickel from billions of years of preferential nickel solidification into the inner core, has a lower melting point and remains liquid at the same temperature',
            'The inner core solidified as a single event ~1.5 billion years ago when Earth\'s core temperature dropped below the melting point of iron at all pressures below ~200 GPa; before this event, Earth had no solid inner core and therefore no geodynamo, which explains the palaeomagnetic record gap between 2.5 and 1.5 Ga; the ICB is fixed in depth because the inner core is now too cold to exchange heat with the outer core and will never grow further',
          ],
          correct: 0,
          explain: `The solid-vs-liquid distinction at the inner core boundary is controlled by the relationship between the actual temperature profile in the core and the pressure-dependent melting point of iron (the melting curve, or liquidus). At the ICB (~330 GPa), the melting temperature of iron is approximately 5,000-6,000 K (experimental estimates vary depending on the measurement technique). The outer core is at a temperature slightly above this melting curve — it is liquid. The inner core is at or just below the melting curve — it is solid. Critically, the melting point of iron increases steeply with pressure (the Clapeyron slope of the solid-liquid iron boundary is strongly positive at core pressures: roughly +10-13 K/GPa), meaning that at greater depth and pressure, iron needs to be hotter to remain liquid. As Earth has cooled over 4.5 billion years, the ICB has migrated progressively outward as the outer core slowly loses heat to the mantle. Some geodynamo models suggest the inner core may only have started forming 1-1.5 Ga ago (the nucleation problem remains debated). The chemical feedback is crucial: as iron solidifies at the ICB, it preferentially excludes light elements (O, Si, S, H) that are less compatible in the solid iron crystal lattice. These light elements are released into the overlying liquid outer core, making it less dense relative to the iron above it, generating chemically-driven convection (compositional buoyancy). This compositional buoyancy, combined with the thermal buoyancy from latent heat released at the ICB, drives the vigorous outer core convection that powers the geodynamo. The coupling between inner core growth, chemical stratification, convective vigour, and magnetic field strength means that understanding the inner core\'s age and growth rate is central to understanding Earth\'s magnetic history.`,
        },
        {
          q: 'Seismic tomography images cold subducted oceanic slabs penetrating deep into the mantle — some reaching the CMB. How does this observation affect our understanding of whole-mantle vs layered mantle convection?',
          a: [
            'If convection were strictly layered (upper mantle convects separately from lower mantle, separated at the 660 km discontinuity), then subducted slabs should pond at 660 km and never penetrate to the lower mantle; the clear tomographic evidence for slabs penetrating through the 660 km boundary into the lower mantle (e.g., Tonga slab to ~1500 km, Farallon plate remnant at 500-1000 km depth under North America) proves that whole-mantle convection does occur — at least episodically; the 660 km boundary does impede convection (slabs sometimes pond temporarily at this depth before breaking through), but it is not an absolute barrier; this has implications for how Earth\'s mantle mixes geochemically and removes heat from the core',
            'Slab penetration through the 660 km discontinuity confirms strictly layered convection: in layered convection models, cold material accumulates at the 660 km boundary until a gravitational instability causes a catastrophic avalanche of slab material into the lower mantle; each tomographically imaged deep slab represents the aftermath of such an avalanche; between avalanches, convection is fully layered; whole-mantle convection in the strict sense never occurs because the lower mantle viscosity is 30-100× higher than the upper mantle, preventing continuous flow across the boundary',
            'The tomographic images of deep slabs actually disprove slab subduction: high-velocity anomalies in the lower mantle are produced by cold downwellings of lower mantle material that rise to the surface as anti-plumes, not by subducted oceanic lithosphere; the apparent continuity of fast anomalies from subduction zones into the lower mantle is a velocity model artifact caused by improper reference model subtraction; geochemical evidence for the survival of distinct mantle reservoirs over billions of years is incompatible with whole-mantle convection mixing the mantle on timescales shorter than ~500 Myr',
            'Slab penetration to the CMB indicates that mantle convection is driven from the bottom by heat from the core rather than from the top by subduction; cold slabs do not sink under their own negative buoyancy but are drawn down by large-scale return flow from deep core-heated upwellings; the tomographic fast anomalies beneath subduction zones extend continuously to the CMB because they are root zones of superplumes, not subducted oceanic slabs; this bottom-driven convection model eliminates the need for any boundary at 660 km',
          ],
          correct: 0,
          explain: 'The debate between strictly layered mantle convection and whole-mantle convection was one of the central controversies in geodynamics for decades, and seismic tomography has largely — though not completely — resolved it in favour of whole-mantle (or at least intermittently whole-mantle) convection. In the strictly layered model, the 660 km discontinuity acts as an impermeable barrier: upper mantle and lower mantle circulate in separate closed cells, exchange heat by conduction across the boundary, and never mix. This model predicted that subducted slabs would pond at 660 km, flatten along the discontinuity, and eventually be reincorporated into the upper mantle. Geochemical evidence supported the existence of distinct mantle reservoirs — mid-ocean ridge basalts (MORB) and ocean island basalts (OIB) have different isotopic compositions suggesting different source regions that have remained separated for billions of years. The whole-mantle convection model, by contrast, predicted that slabs would sink freely through 660 km into the lower mantle. Global seismic tomography models from the 1990s and 2000s (van der Hilst et al. 1997, Grand et al. 1997) provided compelling images of high-velocity (cold) anomalies extending continuously from subduction zones at the surface down through the 660 km boundary and into the lower mantle — some slabs imaged as deep as 1,500 km (Tonga-Kermadec slab) and the ancient Farallon plate remnant visible at 500-1,000 km depth under eastern North America. The current consensus is a mixed picture: whole-mantle convection does occur (slabs do penetrate 660 km), but the 660 km boundary does impede flow — slabs often temporarily pond or buckle at this depth before breaking through. The negative Clapeyron slope at 660 km (endothermic transition) provides a resistance force opposing slab penetration; slabs that arrive with sufficient negative buoyancy eventually break through. This picture is compatible with the two-reservoir geochemical model if geochemically distinct "blobs" (recycled oceanic crust, ancient depleted lithosphere) survive as heterogeneities in the lower mantle for billions of years without being fully homogenised by convective stirring.',
        },
        {
          q: 'The D" layer at the base of the mantle is seismically heterogeneous — some regions show 5-10% reductions in P-wave velocity over very short distances (ultralow velocity zones). What do these ULVZs indicate?',
          a: [
            'ULVZs likely represent patches of partial melt: at the CMB, temperatures are close to the melting point of the deepest mantle material; ancient subducted oceanic crust (eclogite) has a lower melting temperature than surrounding mantle peridotite, so MORB-composition material that has sunk to the CMB over billions of years may be partially or fully molten there; partial melt has dramatically lower seismic velocity (a few percent melt reduces velocity by 5-10% because melt has μ=0), consistent with the observed ULVZs; alternatively, ULVZs might represent iron-enriched mantle material that accumulated at the CMB from core-mantle chemical interaction; distinguishing these possibilities is an active research area',
            'ULVZs represent pockets of primordial liquid iron that was never incorporated into the core during Earth\'s differentiation: when the proto-Earth accreted and differentiated ~4.5 Ga ago, small blebs of iron melt were trapped at the base of the silicate mantle and have persisted there ever since because they are too dense to descend further into the core but too viscous to mix upward into the mantle; their iron composition explains both the density anomaly and the low seismic velocity; the distribution of ULVZs correlates with ancient impact craters that delivered the primordial iron',
            'ULVZs mark the locations of current or recent deep mantle earthquakes (deep-focus events below 660 km): the P-wave velocity reduction is caused by fracture damage and micro-crack porosity created by the rupture; deep mantle earthquakes occur by transformational faulting (phase transition from bridgmanite to post-perovskite) and the resulting porous shear zones maintain low velocity for millions of years after the seismic event; the correlation of ULVZs with convergent margins above supports this interpretation',
            'ULVZs are produced by the post-perovskite phase transition in the D" layer: where the temperature is highest (above mantle plumes), the post-perovskite back-transition to bridgmanite occurs, and the resulting bridgmanite has anomalously low seismic velocity relative to post-perovskite; the 5-10% velocity reduction accurately matches the predicted bridgmanite-post-perovskite velocity contrast; because the transition is temperature-dependent, ULVZs trace hot plume roots at the CMB, providing a direct seismic map of where future mantle plumes will originate',
          ],
          correct: 0,
          explain: 'Ultralow velocity zones (ULVZs) are among the most intriguing features in all of deep-Earth seismology. They are patches, typically 5-40 km thick and 100-1,000 km in lateral extent, where P-wave velocity is 5-10% lower and S-wave velocity is 10-30% lower than the surrounding D" layer — anomalies far too large to be explained by temperature alone (a 1,000 K temperature anomaly changes velocity by only ~1-2%). The most favoured explanation is partial melting. The CMB temperature is close to the solidus (melting onset temperature) of lower mantle silicates, which at ~136 GPa is approximately 3,700-4,000 K. Ancient subducted oceanic crust that has accumulated at the CMB — the "slab graveyard" concept — has a different (basaltic) composition with a lower solidus than surrounding harzburgite mantle, potentially allowing partial melting of this MORB-composition material at CMB temperatures. Even a small fraction of melt (1-5%) dramatically reduces seismic velocity because melt has zero shear modulus (μ = 0) and low bulk modulus, weakening the aggregate far out of proportion to its volume fraction. An alternative hypothesis is iron enrichment: core-mantle chemical reactions may have enriched the lowermost mantle in iron (FeO), increasing density and reducing velocity without requiring melt. A third possibility — small-scale chemical heterogeneities from ancient differentiation events — cannot be excluded. ULVZs are detected primarily by the diffraction and scattering of ScP, PcP, and SKS phases near the CMB; their locations correlate in some studies with the margins of large low-shear-velocity provinces (LLSVPs) such as the African and Pacific superplumes, suggesting that ULVZ material may represent the deepest and hottest part of these thermochemical piles. Understanding ULVZs is fundamental to tracing the fate of subducted oceanic crust over billions of years and the geochemical cycling of material between the surface and the deep interior.',
        },
        {
          q: 'The geomagnetic field reverses roughly every 200,000-300,000 years on average, with the last reversal ~780,000 years ago. Why is Earth currently overdue for a reversal, and what does seismological evidence of the inner core tell us about the reversal process?',
          a: [
            'The geomagnetic field is maintained by convection in the liquid outer core; reversals occur when the pattern of convective flow becomes chaotic enough to disrupt the self-sustaining dynamo; the field strength has declined ~9% in the past 170 years (since systematic monitoring began), and a weak feature called the South Atlantic Anomaly (where the field is ~30-40% weaker than average) may indicate an ongoing instability; seismological evidence: the inner core\'s ~0.3-0.5°/yr differential rotation is linked to electromagnetic coupling with the outer core; tomographic studies suggest the inner core\'s crystalline structure records the history of field reversals as patterns of anisotropy; some models propose that the inner core\'s slow thermal conductivity and its magnetic coupling to the outer core play a role in pacing reversals, though the mechanism remains debated',
            'Earth is precisely overdue for a reversal because reversals follow a 300,000-year clock set by Milankovitch orbital cycles: at each eccentricity maximum, increased tidal forcing from Jupiter and Saturn perturbs core convection enough to trigger a reversal; the last reversal (Brunhes-Matuyama, 780 ka) coincided with an eccentricity maximum, and the next eccentricity maximum in ~20,000 years will trigger the next reversal; seismological evidence supports this because inner core anisotropy correlates with the 100,000-year eccentricity cycle, confirming orbital forcing of core dynamics',
            'The current field decline is not evidence of an impending reversal but of the next geomagnetic excursion — a temporary decrease in field intensity without polarity reversal; excursions occur every 20,000-30,000 years and last 1,000-5,000 years; the seismic anisotropy of the inner core shows a 20,000-year periodicity matching the precession cycle, confirming that excursions and reversals are both driven by lunisolar tidal forcing rather than internal dynamo dynamics; the last true reversal was 780 ka ago and the next full reversal is not expected for another 500,000 years',
            'The geomagnetic field cannot reverse because the solid inner core acts as a permanent magnet that anchors the polarity of the geodynamo; paleomagnetic evidence for past reversals records changes in the orientation of remnant magnetisation in oceanic crust caused by asymmetric spreading at mid-ocean ridges — not actual reversals of Earth\'s magnetic dipole; the inner core\'s seismic anisotropy (3-4% faster along the rotation axis) confirms that iron crystals are permanently aligned with the rotation axis and cannot be reoriented by outer core flow changes',
          ],
          correct: 0,
          explain: `The term "overdue" applied to a geomagnetic reversal is technically misleading, and this is an important nuance: geomagnetic reversals are stochastic (random in time), not periodic or clocked by any known regular mechanism. The average recurrence interval of ~200,000-300,000 years is simply a long-term average over the past ~80 million years of palaeomagnetic record; individual intervals range from a few thousand years to tens of millions of years (the Cretaceous Normal Superchron lasted ~40 million years with no reversals). The fact that 780,000 years have elapsed since the Brunhes-Matuyama reversal means the current chron is somewhat longer than average, but there is no physical mechanism that makes a reversal increasingly "due" — the probability of a reversal in any given short time window does not increase with the elapsed time since the last reversal. That said, observational evidence does suggest the current field is in an unusual state: the ~9% decline in dipole moment over 170 years of systematic measurement, and the South Atlantic Anomaly (a region centred over the South Atlantic where the field is 30-40% weaker than the global average at the same latitude), are sometimes interpreted as early signs of a future reversal or excursion — though the field has weakened and recovered before without reversing. Seismological contributions to understanding reversals come primarily from two sources: (1) the differential rotation of the inner core (~0.3-0.5°/yr faster than the mantle), detected from changes in PKIKP travel times over decades, is driven by electromagnetic torque between the inner core and the outer core\'s magnetic field, coupling the inner core dynamically to the dynamo process; (2) the seismic anisotropy of the inner core (hexagonal close-packed iron crystals preferentially aligned with the rotation axis, giving ~3-4% faster P-wave velocity along the polar axis than equatorially) has been proposed to carry a "memory" of past magnetic field configurations, since the crystal alignment is set by electromagnetic forcing during solidification at the ICB; some models suggest the inner core\'s anisotropy structure may constrain or influence the dynamo\'s large-scale geometry, potentially playing a role in why reversals have the statistical properties they do — though this remains an open and active research question.`,
        },
      ],
    },
  ],
}

export default earthInteriorSeismology
