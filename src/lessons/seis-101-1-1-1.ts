import { Waves, Zap, Layers, Activity, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const seismicWaveTypes: Lesson = {
  id: 'seis-101-1-1-1',
  title: 'P-Waves, S-Waves, and the Seismic Wave Family',
  track: 'geo',
  trackName: 'Seismology',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 120,
  description: `Every earthquake sends out four distinct wave types — P-waves, S-waves, Love waves, and Rayleigh waves — each travelling at different speeds and shaking the ground in different ways. Understanding these wave families is the foundation of seismology, earthquake engineering, and our ability to image Earth\'s deep interior.`,
  sources: [
    { org: 'USGS',      title: 'USGS Earthquake Hazards Program — Seismic Waves',                          url: 'https://earthquake.usgs.gov/learn/topics/seismology/seismicwaves.php' },
    { org: 'EarthScope', title: 'EarthScope Consortium — Understanding Earthquakes',                       url: 'https://www.earthscope.org/education/' },
    { org: 'OpenStax',  title: 'Astronomy 2e — Earthquakes and Seismic Waves (CC-BY 4.0)',                 url: 'https://openstax.org/books/university-physics-volume-1/pages/17-7-resonance' },
    { org: 'AGI',       title: 'AGI Glossary of Geology',                                                  url: 'https://www.americangeosciences.org/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The four languages of a shaking Earth',
      body: `Every earthquake releases energy that radiates outward as seismic waves — elastic disturbances in rock that travel at kilometres per second through Earth\'s interior. Seismologists divide these waves into two families. Body waves travel through Earth\'s interior along curved paths dictated by velocity gradients and density contrasts; they arrive first at distant seismographs. Surface waves are trapped near Earth\'s surface and travel more slowly, but their long wavelengths mean they shake the ground for far longer and at lower frequencies — making them the dominant cause of structural damage in large earthquakes. Understanding the four main wave types is the foundation of seismology, earthquake engineering, and our ability to image Earth\'s deep interior.

The two body wave types differ in how they deform the rock they pass through. P-waves (primary waves, or compressional waves) compress and extend the rock in the direction of wave propagation — like sound waves in air, the rock alternately squeezes together and pulls apart along the direction of travel. P-wave velocity in continental crust is typically 5–7 km/s, rising to ~8 km/s in the uppermost mantle. Because P-waves involve volumetric compression, they can travel through any medium — solid rock, liquid outer core, water, and air (the sonic booms sometimes heard before shaking arrives are P-waves that entered the atmosphere). S-waves (secondary waves, or shear waves) distort rock perpendicular to the direction of travel — like a wave in a rope shaken sideways. S-wave velocity in continental crust is typically 3–4 km/s, roughly 1/√3 ≈ 0.577 times the P-wave velocity in the same material. Crucially, shear motion requires the material to have rigidity; liquids and gases have no shear modulus, so S-waves cannot travel through them. This property proved Earth has a liquid outer core: no S-waves arrive in the shadow zone on the far side of the planet.

P-wave velocity is given by v_P = √((K + 4μ/3)/ρ) where K is the bulk modulus (resistance to compression), μ is the shear modulus (resistance to shearing), and ρ is density. S-wave velocity is v_S = √(μ/ρ). The ratio v_P/v_S = √((K/μ + 4/3)) is always greater than √(4/3) ≈ 1.16, which is why P-waves always arrive before S-waves. In typical crustal rock, v_P/v_S ≈ 1.73. The time difference between P and S arrivals at a seismograph station — the S-P time — directly indicates the distance to the earthquake: distance ≈ S-P interval (in seconds) × ~8 km.

Surface waves arise from the interaction of body waves with Earth\'s free surface. Love waves are shear-type surface waves: they shake the ground horizontally, transverse to the propagation direction, with no vertical motion. They are generally the fastest surface waves. Rayleigh waves combine vertical and horizontal (along-propagation) motion in a retrograde elliptical path — like a wave rolling backward — and are slightly slower than Love waves but typically carry the most energy of any wave type. Surface wave amplitudes decay less rapidly with distance than body waves (1/r rather than 1/r²), so they dominate the seismogram at large distances. The period of surface waves relevant to building damage is 1–10 seconds, matching the natural resonance period of multi-storey buildings, which is why large distant earthquakes can topple skyscrapers in sediment-filled basins far from the epicentre (as happened in Mexico City in 1985, 350 km from the M8.0 Michoacán earthquake).`,
      keyTerms: [
        {
          term: 'P-wave',
          def: `A compressional (primary) body wave in which particle motion is parallel to the direction of wave propagation — the rock alternately compresses and extends along the travel direction, like sound waves in air. P-waves travel at 5–8 km/s in continental crust and can propagate through solids, liquids, and gases, including Earth\'s liquid outer core. They are always the first seismic wave type to arrive at a seismograph after an earthquake.`,
        },
        {
          term: 'S-wave',
          def: `A shear (secondary) body wave in which particle motion is perpendicular to the direction of wave propagation — the rock distorts sideways relative to the travel direction, like a transverse wave in a rope. S-waves travel at 3–5 km/s in continental crust and can only propagate through materials with a non-zero shear modulus (μ > 0). Because liquids have μ = 0, S-waves cannot enter Earth\'s liquid outer core, creating the S-wave shadow zone and proving the outer core is molten.`,
        },
        {
          term: 'Love wave',
          def: `A surface wave in which particle motion is purely horizontal shear, directed transverse to the propagation direction, with no vertical component. Love waves are generally the fastest-travelling surface wave type and are particularly destructive to structures and foundations susceptible to horizontal shear forces. They are guided by a low-velocity layer near Earth\'s surface and were named after A.E.H. Love, who derived the mathematical theory of their existence in 1911.`,
        },
        {
          term: 'Rayleigh wave',
          def: 'A surface wave in which particle motion follows a retrograde elliptical path combining vertical and horizontal (in-plane) motion — the ground surface rolls backward like an ocean wave. Rayleigh waves travel slightly slower than Love waves but typically carry the most energy at large epicentral distances. Their periods of 1–10 seconds match the natural resonance periods of multi-storey buildings, making them the dominant cause of structural collapse in large distant earthquakes. Named after Lord Rayleigh, who predicted their existence mathematically in 1885.',
        },
        {
          term: 'S-P time',
          def: `The time interval between the arrival of the S-wave and the arrival of the P-wave at a seismograph station. Because P-waves travel faster than S-waves, the S-P time grows proportionally with the distance from the earthquake to the station: distance (km) ≈ S-P time (seconds) × ~8 km/s. By measuring the S-P time at three or more stations and drawing circles of the corresponding distances, seismologists triangulate the earthquake\'s epicentre and locate the hypocenter.`,
        },
      ],
    },
    {
      type: 'concept',
      title: 'Body waves, surface waves, and why each one matters',
      body: `The physical difference between the four seismic wave types comes down to how each one deforms the material it passes through. P-waves involve volumetric compression: particles move back and forth in the same direction the wave travels, alternately squeezing rock together and pulling it apart. This compressional motion can be sustained in any elastic medium — solid, liquid, or gas — because all of them resist volume change. S-waves involve shear deformation: particles move perpendicular to the travel direction, and the wave exists only where the material resists this sideways distortion. Only solids have a non-zero shear modulus; liquids and gases flow freely under shear stress instead of storing elastic energy, so they cannot transmit S-waves. Surface waves are fundamentally different from both: they exist only at or near a boundary, and their energy is trapped in the near-surface layer rather than radiating spherically into the interior. Love waves are guided shear waves that oscillate horizontally; Rayleigh waves involve a coupled vertical-horizontal motion whose amplitude decays exponentially with depth, confining their energy to within roughly one wavelength of the surface.

Understanding wave types matters enormously for both earthquake engineering and Earth imaging. For engineering, Love and Rayleigh waves are the primary concern in large earthquakes because their 1/r amplitude decay (versus 1/r² for body waves) means they remain large at great distances, and their long periods (1–10 s) coincide with the natural resonance periods of medium-to-tall buildings. A building whose natural period matches the dominant wave period will resonate, accumulating damage over many cycles. For Earth imaging, the inability of S-waves to enter the outer core was the first direct proof that the outer core is liquid; the reappearance of weak S-wave energy transmitted through the inner core (PKJKP phases) confirms the inner core is solid. Seismic tomography exploits tiny variations in P- and S-wave travel times to map temperature and composition anomalies in the mantle at the scale of hundreds of kilometres — the closest thing we have to a medical scanner for the planetary interior.`,
      cards: [
        {
          name: 'P-Waves and S-Waves — Body Waves Through the Interior',
          icon: Layers,
          color: BRAND.coral,
          desc: 'P-wave: compressional body wave; particle motion parallel to propagation direction; velocity v_P = √((K + 4μ/3)/ρ); 5–7 km/s in continental crust, ~8 km/s in uppermost mantle, ~13.7 km/s just above core-mantle boundary; travels through solids, liquids, and gases. S-wave: shear body wave; particle motion perpendicular to propagation; velocity v_S = √(μ/ρ); 3–4 km/s in crust, ~7 km/s in lower mantle; travels only through solids (requires μ > 0); cannot enter liquid outer core, proving it is molten. v_P/v_S ≈ 1.73 in typical crustal rock. S-P time method: distance ≈ S-P (seconds) × ~8 km.',
          examples: 'P-wave: 6 km/s in continental crust; 13 km/s in lower mantle; detected as faint initial "thud" on seismogram before main shaking. S-wave: 3.5 km/s in crust; ~7 km/s in lower mantle. In water: v_P ≈ 1.5 km/s, v_S = 0 (no shear strength). v_P/v_S ratio ≈ 1.73 in typical crustal rock. S-P time of 10 seconds → ~80 km from epicentre.',
        },
        {
          name: 'Love and Rayleigh Waves — Surface Waves and Building Damage',
          icon: Waves,
          color: BRAND.gold,
          desc: 'Love wave: horizontal shear surface wave; particle motion transverse to propagation, no vertical component; fastest surface wave; particularly damages foundations and horizontally flexible structures; guided by near-surface low-velocity layer. Rayleigh wave: retrograde elliptical particle motion (vertical + horizontal in-plane); period 1–30 s; dominant energy carrier at teleseismic distances; amplitude decays as 1/r (not 1/r² as for body waves); amplified by soft sediments (site amplification). Both wave types dominate damage in large distant earthquakes.',
          examples: 'Mexico City 1985: Rayleigh waves from M8.0 epicentre 350 km away amplified ~40× in ancient lake-bed sediments (lakebed resonant period matched 6–15 storey buildings), killing ~10,000. Love wave particle motion: horizontal arrow perpendicular to travel direction. Rayleigh wave: retrograde ellipse — foot moves back, then up, then forward, then down. Surface waves complete 1.5–4 full oscillations per second at 1–10 s period.',
        },
        {
          name: 'Wave Velocities and Earth\'s Composition',
          icon: Zap,
          color: BRAND.amethyst,
          desc: `Velocity depends on bulk modulus K (resistance to compression), shear modulus μ (resistance to shear), and density ρ. Velocity generally increases with depth because rising pressure increases K and μ faster than ρ. Sudden velocity changes occur at major boundaries: Moho (~6.5 → ~8.0 km/s P-wave), 410 km discontinuity, 660 km discontinuity, and core-mantle boundary (v_S drops to 0 — liquid outer core; v_P drops from ~13.7 to ~8.1 km/s then rises to ~10.4 km/s at base of outer core). Inner core: v_S re-appears (~3.5 km/s), confirming it is solid. Poisson\'s ratio σ = (v_P² − 2v_S²)/(2(v_P² − v_S²)) changes with fluid saturation — useful for detecting fluids in the crust.`,
          examples: 'Moho: P-wave velocity jumps from ~6.5 to ~8.0 km/s. Outer core: v_S = 0 (liquid iron alloy); v_P falls from ~13.7 to ~8.1 km/s at CMB then rises to ~10.4 km/s at base of outer core. Inner core: v_S ~3.5 km/s (solid). Granite: v_P ≈ 5.5–6.0 km/s. Basalt: v_P ≈ 6.4–7.0 km/s. Water-saturated sand: v_P ≈ 1.5–2.0 km/s, v_S near 0 (liquefaction risk).',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Wave propagation: from fault rupture to seismograph',
      body: 'When a fault ruptures, it simultaneously launches all four seismic wave types from the hypocenter. Each wave type travels at a different speed and via a different path through — or along — the Earth. A broadband seismograph hundreds of kilometres away records their arrivals in sequence: the faint P-wave first, followed by the larger-amplitude S-wave, and finally the long, rolling surface-wave trains that carry the most energy and last the longest. The time separations between these arrivals encode the distance to the earthquake, and the relative amplitudes and waveforms encode the source mechanism and the structure of the Earth the waves passed through.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how P, S, Love and Rayleigh waves originate at a fault rupture, travel through different earth layers at different speeds, and arrive at a seismograph in sequence',
        nodes: [
          {
            id: 'fault-rupture',
            label: 'Fault Rupture (Hypocenter)',
            description: 'Sudden slip on a fault releases elastic strain energy stored in crustal rock over years or decades. The rupture front propagates along the fault at roughly 2–3 km/s, and from every point on the rupture front all four seismic wave types radiate simultaneously outward into the surrounding rock. The total energy released by a large earthquake (M7+) is equivalent to hundreds of nuclear weapons, though most is dissipated as heat along the fault rather than carried by seismic waves.',
            color: BRAND.ruby,
          },
          {
            id: 'p-waves',
            label: 'P-Waves (Compressional, 5–8 km/s)',
            description: 'P-waves leave the hypocenter as compressional pulses and are the first to arrive at any distant seismograph. Their particle motion — alternating compression and dilation along the ray path — can be sustained in any elastic medium, so P-waves travel through both solid mantle and the liquid outer core (as PKP phases). The initial P arrival on a seismogram is small in amplitude but sharp in onset, detected as a brief "thud" before the main shaking begins.',
            color: BRAND.coral,
          },
          {
            id: 's-waves',
            label: 'S-Waves (Shear, 3–5 km/s)',
            description: `S-waves depart the hypocenter simultaneously with P-waves but travel ~40% more slowly, so the S-P time at any station directly encodes the source-to-station distance. Their shear particle motion cannot be sustained in the liquid outer core, creating a large S-wave shadow zone from 105° to 180° epicentral distance. Within the shadow zone the absence of S arrivals was the first seismological evidence that Earth\'s outer core is liquid. At moderate distances S-waves are responsible for the strongest felt shaking.`,
            color: BRAND.gold,
          },
          {
            id: 'surface-waves',
            label: 'Surface Waves (Love + Rayleigh, 2–4 km/s)',
            description: `Surface waves are generated where body waves interact with Earth\'s free surface, and they travel more slowly than either P or S waves, arriving last on the seismogram. Their energy is confined to within roughly one wavelength of the surface, but because their amplitude decays as 1/r rather than 1/r², they become the dominant signal at large epicentral distances. Periods of 1–10 seconds match the natural resonance of multi-storey buildings, making surface waves the primary cause of structural damage in large distant earthquakes.`,
            color: BRAND.amethyst,
          },
          {
            id: 'seismograph',
            label: 'Seismograph Record (Seismogram)',
            description: 'A broadband seismometer records ground velocity as a function of time. The seismogram shows a characteristic sequence: P arrival first (small amplitude, high frequency, sharp onset), then the S arrival (larger amplitude), then the long-period, high-amplitude surface-wave trains that can last tens of minutes for a large earthquake. The S-P time interval is measured to calculate distance; three stations are required to triangulate the epicentre; the pattern of first-motion polarities on many stations reveals the fault mechanism (focal mechanism solution).',
            color: BRAND.jade,
          },
        ],
        edges: [
          { from: 'fault-rupture', to: 'p-waves',       label: 'rupture launches P-waves in all directions; compressional energy propagates at 5–8 km/s through crustal rock' },
          { from: 'fault-rupture', to: 's-waves',       label: 'rupture simultaneously launches S-waves; shear energy propagates at 3–5 km/s, cannot enter outer core' },
          { from: 'fault-rupture', to: 'surface-waves', label: 'body waves reaching the surface generate Love and Rayleigh waves that propagate along the surface at 2–4 km/s' },
          { from: 'p-waves',       to: 'seismograph',   label: 'P-waves arrive first; initial small-amplitude compression signal; P arrival marks time zero for distance calculation' },
          { from: 's-waves',       to: 'seismograph',   label: 'S-waves arrive ~S-P seconds after P; larger amplitude shaking; S-P interval gives distance' },
          { from: 'surface-waves', to: 'seismograph',   label: 'surface waves arrive last but with largest amplitude and longest duration; low frequency (0.01–1 Hz) wavepackets' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "An earthquake\'s S-wave arrives at a seismograph station 24 seconds after the P-wave. Using the approximation that P-wave velocity is ~6 km/s and S-wave velocity is ~3.5 km/s, approximately how far away is the earthquake epicentre?",
          a: [
            "Using travel-time equations: if P arrives at time t_P and S at t_S, then t_P = d/v_P and t_S = d/v_S; S-P time = d/v_S - d/v_P = d(1/v_S - 1/v_P) = d(1/3.5 - 1/6) = d × 0.119; so d = 24/0.119 ≈ 202 km; approximately 200 km from the epicentre",
            "The S-P time of 24 seconds at average seismic velocity 4.75 km/s gives distance = 24 × 4.75 = 114 km; this is the correct method because you should use the average of P and S velocities rather than the difference in their travel times",
            "S-P time × speed of light = distance in light-seconds; this is incorrect for seismic waves but the calculation would give 24 × 3×10⁸ = enormous distance, confirming seismic waves are far slower than electromagnetic radiation",
            "The S-P time cannot be used to determine distance because it depends on the earthquake depth as well as the epicentral distance; a deep earthquake and a shallow earthquake at the same epicentral distance will produce identical S-P times making depth-independent distance calculation impossible",
          ],
          correct: 0,
          explain: "Option A uses the correct formula. The S-P time equals d(1/v_S − 1/v_P). Substituting: d(1/3.5 − 1/6) = d × (0.2857 − 0.1667) = d × 0.1190. Setting this equal to 24 s gives d = 24/0.119 ≈ 202 km — approximately 200 km from the epicentre. Note that the familiar rule of thumb, S-P time (seconds) × ~8 km, gives 24 × 8 = 192 km, closely consistent with the more precise calculation. Option B incorrectly averages P and S velocities rather than working with their inverse difference; the average-velocity approach has no physical basis for this calculation. Option C is absurd — seismic waves travel at a few km/s, not 3 × 10⁸ m/s. Option D is partially valid — earthquake depth does affect travel times and strictly speaking the S-P time gives the slant distance to the hypocenter rather than the horizontal distance to the epicentre. However, for shallow earthquakes (depth ≪ epicentral distance) the approximation is excellent, and in practice the S-P method is routinely used as a first estimate of epicentral distance, with the full 3D hypocenter then solved precisely using multiple stations and computer modelling. The key formula to remember: d ≈ S-P (seconds) × ~8 km.",
        },
        {
          q: "Why can S-waves not travel through Earth\'s liquid outer core, and what does this tell us about the outer core\'s physical state?",
          a: [
            "S-waves require a non-zero shear modulus (μ > 0) to propagate; liquids have μ = 0 because they flow freely under shear stress rather than storing elastic energy; the outer core\'s liquid iron alloy has μ = 0, so S-wave particle motion cannot be transmitted; the S-wave shadow zone (105°–180° from an earthquake) where no S-waves arrive is direct evidence that the outer core is liquid; this property was recognized by Richard Dixon Oldham in 1906",
            "S-waves cannot travel through the outer core because the extreme temperature (>4,000 K) causes thermal dissipation that absorbs all S-wave energy within milliseconds; P-waves survive because they travel through compression and rarefaction, not shear, and compression is not thermally dissipated at high temperatures; the outer core could be solid but the thermal absorption prevents S-wave transmission",
            "S-waves are blocked by the outer core because their wavelength at typical seismic frequencies (~1 Hz) is shorter than the grain size of crystallised iron minerals in the outer core; this creates total internal reflection at the CMB analogous to light reflecting from a mirror; the fact that P-waves pass through proves the outer core is crystalline, not liquid",
            "S-waves cannot travel through the outer core because the magnetic field generated by the dynamo suppresses shear oscillations in the conducting fluid; the Lorentz force damps S-wave motion in the same way it damps fluid oscillations; P-waves are not affected because compression does not involve transverse motion across field lines",
          ],
          correct: 0,
          explain: "Option A correctly identifies the physical mechanism. S-wave propagation requires the medium to have a non-zero shear modulus μ — the material must resist shear deformation elastically, storing energy and releasing it to propagate the wave. Liquids by definition have μ = 0: when you apply a shear stress to a liquid, it flows rather than deforming elastically. The liquid iron-nickel alloy of the outer core therefore cannot sustain S-wave motion. Richard Dixon Oldham first identified the S-wave shadow zone in 1906; Beno Gutenberg determined the depth of the core-mantle boundary at ~2,900 km in 1914 using P-wave travel times. The inner core, in contrast, does transmit S-waves (detected as extremely weak PKJKP phases), confirming it is solid. Option B is incorrect: thermal dissipation does not explain the sharp S-wave shadow zone cutoff at 105°; if temperature were the cause, S-waves would attenuate gradually rather than being completely absent in a defined zone. Option C incorrectly describes grain-size scattering — this mechanism operates at ultrasonic frequencies, not earthquake frequencies (~0.01–1 Hz), and the outer core being liquid (not crystalline) is the real explanation. Option D is physically wrong: the Lorentz force in the outer core is far too weak to suppress kilometre-wavelength elastic wave propagation; seismic wavelengths in the outer core are thousands of kilometres, completely unaffected by dynamo magnetic fields.",
        },
        {
          q: "Rayleigh waves shake the ground in a retrograde elliptical motion. Why is this motion pattern — and the associated long period of 1–10 seconds — particularly dangerous for buildings?",
          a: [
            "Retrograde elliptical motion applies both vertical and horizontal forces to building foundations simultaneously at the same frequency; when the Rayleigh wave period matches a building\'s natural resonance period (~0.1 s per floor of height), the building absorbs maximum energy from the wave — resonance amplification can increase shaking by a factor of 5–10 above the free-field ground motion; 6–15 storey buildings (natural period ~0.6–1.5 s) are most vulnerable to Rayleigh waves with 0.6–1.5 s periods; this explains catastrophic failures of mid-rise buildings in soft-sediment basins (Mexico City 1985)",
            "Retrograde elliptical motion is dangerous because it mimics the circular ground displacement that topples un-reinforced masonry walls; walls can withstand horizontal or vertical forces individually but fail when both are applied simultaneously in a rotating sense; the 1–10 s period is dangerous because it falls within the natural frequency of the human inner ear\'s balance detection range, causing mass panic that worsens building evacuation",
            "Rayleigh waves\' retrograde motion creates a surface pressure wave in the ground; this pressure oscillation liquefies the upper 1–5 m of soil at the building foundation by cycling the pore water pressure above and below the liquefaction threshold; all buildings are vulnerable because all foundations are in the upper 5 m of soil; the 1–10 s period is dangerous because it takes ~1–2 wave cycles to fully liquefy the soil",
            "The 1–10 s period of Rayleigh waves is dangerous because it exactly matches the resonant period of the human thoracic cavity and internal organs; direct exposure to 1–10 s seismic waves causes internal organ damage even without building collapse; this is why earthquake fatalities occur even in open areas far from collapsing structures; the retrograde motion maximises organ resonance because it stimulates both vertical and horizontal organ oscillation modes",
          ],
          correct: 0,
          explain: "Option A correctly describes structural resonance — the dominant mechanism of building damage from surface waves. The natural period of a multi-storey building scales approximately as 0.1 seconds per floor: a 10-storey building has a natural period of ~1 second, placing it squarely in the 1–10 s band of Rayleigh waves. When the wave period matches the building\'s natural period, the structure resonates — each successive wave cycle adds energy to the oscillation rather than letting it decay, exactly as pushing a child on a swing at its natural frequency. Resonance amplification factors of 5–10 are common; in very soft sediment basins (ancient lake beds, river deltas) the soft sediment itself resonates with the bedrock signal, adding an extra amplification stage. The Mexico City 1985 disaster exemplifies this perfectly: the M8.0 Michoacán earthquake epicentre was 350 km away, but Rayleigh waves were amplified up to ~40 times in the former lakebed sediments of the Valley of Mexico, which resonated at 2–3 seconds — matching 6–15 storey concrete-frame buildings. Around 10,000 people died, predominantly in that height range of buildings. Option B invents a spurious masonry-rotation mechanism and incorrectly invokes the inner ear. Option C confuses Rayleigh wave ground motion with liquefaction-inducing pore-pressure cycling — liquefaction is driven by S-waves and cyclic shear strain, not by Rayleigh wave pressure oscillations specifically. Option D is medically incorrect; organ resonance is not an established cause of earthquake fatalities.",
        },
        {
          q: "The velocity of P-waves is given by v_P = √((K + 4μ/3)/ρ). How does this formula explain why P-wave velocity generally increases with depth in the mantle despite increasing density ρ?",
          a: [
            "Although density ρ increases with depth, the bulk modulus K and shear modulus μ increase even faster due to increasing confining pressure; at greater pressure, rock is more resistant to both compression and shear deformation; the numerator (K + 4μ/3) increases faster than ρ, so the ratio and thus v_P increases overall; this is confirmed by seismic tomography: P-wave velocity in the upper mantle (~8 km/s) roughly doubles to ~14 km/s at the base of the lower mantle",
            "P-wave velocity increases with depth because temperature, not pressure, controls wave velocity; higher temperatures in the deep mantle increase thermal vibrations of atoms, which propagate compressional waves more efficiently; the temperature gradient in the mantle is the primary control on v_P, with density and elastic moduli being secondary factors; v_P would decrease with depth if the Earth cooled uniformly",
            "P-wave velocity increases with depth because the mineral composition changes to denser, stiffer polymorphs (olivine → wadsleyite at 410 km, wadsleyite → ringwoodite at 520 km, ringwoodite → bridgmanite + ferropericlase at 660 km); each phase transition increases K faster than ρ; outside phase-transition zones, v_P would remain constant because pressure effects on K and ρ cancel out exactly",
            "P-wave velocity increases with depth due to geometric focusing of seismic ray paths; as waves propagate deeper into a spherical Earth, they are focused by the spherical geometry toward the centre, which concentrates seismic energy and makes waves appear faster; this is a geometric illusion in seismograms rather than a genuine increase in wave velocity in the rock",
          ],
          correct: 0,
          explain: "Option A is correct. The velocity formula v_P = √((K + 4μ/3)/ρ) shows that velocity depends on the ratio of elastic stiffness to density. As depth increases in the mantle, all three quantities rise, but the elastic moduli (K and μ) increase faster than density because pressure stiffens rock: under greater confining pressure, atoms are packed more tightly and resist both compression and shear more strongly. The net result is that the numerator rises faster than the denominator, so v_P increases. Actual values: v_P ≈ 8.0 km/s in the uppermost mantle, ~10.3 km/s at 400 km depth, ~11.1 km/s at 600 km, and ~13.7 km/s just above the core-mantle boundary at 2,890 km. Option B is wrong: temperature actually decreases wave velocity (hot rock is less stiff), so the geotherm works against the pressure effect; pressure dominates, which is why velocity increases despite rising temperature. Option C contains truth — phase transitions at 410, 520, and 660 km do cause step increases in velocity — but it is wrong that velocity would be constant between phase transitions; the continuous pressure increase continuously stiffens rock and raises velocity throughout each mineralogical stability field. Option D describes Snell\'s-law ray curving (which is real and causes rays to bend back toward the surface) but this is not what causes the velocity itself to increase; it is a consequence of velocity increasing, not the cause.",
        },
        {
          q: "Love waves produce horizontal shear motion while Rayleigh waves produce retrograde elliptical motion. Given these differences, which structures are most vulnerable to each wave type, and why does this distinction matter for earthquake engineering?",
          a: [
            "Love waves are most destructive to structures with high lateral stiffness but low horizontal ductility (un-reinforced masonry walls, brittle concrete shear walls): the purely horizontal shear motion places maximum stress on the weakest horizontal plane of these structures; Rayleigh waves are most destructive to tall flexible structures (moment-resisting steel frames, slender towers): the elliptical motion combines horizontal sway with vertical pumping, amplifying the tip deflection of tall structures; distinguishing the two helps engineers design buildings that are robust to both by combining horizontal ductility with base isolation",
            "Love waves and Rayleigh waves are equally destructive to all building types because modern seismic building codes require all structures to resist multi-directional ground motion from any wave type; the distinction was historically important but is no longer relevant since the 1994 Northridge and 1995 Kobe earthquakes led to revised codes that mandate omnidirectional structural resistance; earthquake engineers today design for the maximum observed ground motion regardless of wave type",
            "Love waves are more dangerous than Rayleigh waves because they have no vertical component; vertical motion helps \'lift\' buildings slightly off their foundations during strong shaking, which briefly reduces the horizontal frictional force resisting lateral movement; buildings that lift slightly off foundations survive better than those that remain firmly in contact with the ground; Rayleigh waves\' vertical component actually protects buildings by enabling this \'lift\' mechanism",
            "Rayleigh waves are always more destructive than Love waves because they carry more energy per unit area at all distances; the retrograde elliptical motion excites torsional oscillation modes in buildings that cannot be predicted or designed against; building codes therefore specify a Rayleigh wave amplification factor of 1.5× applied uniformly to all structural elements; Love waves are considered a secondary hazard category only",
          ],
          correct: 0,
          explain: "Option A correctly identifies the structural vulnerability distinction. Love waves apply purely horizontal shear forces — the most damaging load for structures that are stiff horizontally but brittle under lateral shear: un-reinforced brick or stone masonry (extremely common in developing countries), adobe construction, and older unreinforced concrete buildings. These structures can carry vertical loads well but fail catastrophically when horizontal shear is applied. Rayleigh waves apply a combination of vertical and horizontal loading in the same plane as the wave direction; the elliptical motion at the same frequency as the building\'s natural period induces resonant swaying in flexible structures such as steel moment-resisting frames and slender towers. The distinction is not merely academic: in a developing-country urban environment dominated by low-rise un-reinforced masonry, Love waves from a moderate nearby earthquake may be the primary killer; in a high-income city with tall steel and reinforced-concrete buildings, the Rayleigh wave period match to building height is the governing concern. In practice, any real earthquake ground motion record contains both wave types, and modern structural analysis uses recorded time-histories or synthetic ground motions that include all wave components. However, the distinction guides hazard assessment, site selection, and the choice of seismic isolation or damping system. Option B is wrong to dismiss the distinction as obsolete — the underlying physics governs actual structural performance regardless of code changes. Options C and D invent physically incorrect mechanisms (lift protection, torsional amplification factors).",
        },
      ],
    },
  ],
}

export default seismicWaveTypes
