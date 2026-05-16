import { Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const seis101Capstone: Lesson = {
  id: 'seis-101-capstone',
  title: 'Earthquakes & Seismology: Path Assessment',
  track: 'geo',
  trackName: 'Seismology',
  level: 'Advanced',
  duration: '25 min',
  xpReward: 500,
  description: 'Comprehensive assessment across all three chapters of Earthquakes & Seismology',
  sources: [
    { org: 'USGS', title: 'USGS — Earthquake Hazards Program', url: 'https://earthquake.usgs.gov/' },
    { org: 'IRIS', title: 'IRIS — Education and Public Outreach', url: 'https://www.iris.edu/hq/programs/education_and_outreach' },
    { org: 'AGU',  title: 'AGU — Seismology Section', url: 'https://connect.agu.org/seismology/home' },
    { org: 'NOAA', title: 'NOAA — Natural Hazards', url: 'https://www.noaa.gov/natural-hazards' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Comprehensive assessment across all three chapters of Earthquakes & Seismology',
      body: `This capstone covers the full Earthquakes & Seismology learning path: seismic waves and Earth\'s interior (Chapter 1), earthquake mechanics and the seismic cycle (Chapter 2), and ground motion hazards and risk reduction (Chapter 3). Twenty questions test conceptual understanding, quantitative reasoning, and the ability to apply seismological principles to real-world earthquake scenarios.

You\'ll be asked to interpret seismic data, evaluate hazard scenarios, reason about physical processes from P-wave propagation to tsunami shoaling, and assess risk reduction strategies. A score of 80% or higher earns full XP and path completion. Take your time — each question has exactly one correct answer, and the explanations will reinforce your understanding regardless of the outcome.`,
      keyTerms: [],
    },
    {
      type: 'quiz',
      questions: [
        // ── Chapter 1: Seismic Waves and Earth Structure ──────────────────────
        {
          q: 'Which seismic wave type travels as a compressional wave and can propagate through solids, liquids, and gases?',
          a: [
            'S-waves (secondary waves)',
            'P-waves (primary waves)',
            'Love waves',
            'Rayleigh waves',
          ],
          correct: 1,
          explain: `P-waves (primary or compressional waves) propagate by alternating compression and dilation of the medium in the direction of travel. Because all three states of matter resist compression (have a non-zero bulk modulus), P-waves can travel through solids, liquids, and gases. This distinguishes them from S-waves, which require shear rigidity and therefore cannot travel through liquids. The ability of P-waves to pass through Earth\'s liquid outer core while S-waves cannot was the key observation that established the outer core\'s liquid state.`,
        },
        {
          q: 'What happens to seismic waves at the Mohorovičić discontinuity?',
          a: [
            'Waves are completely reflected back toward the surface',
            'Wave velocity abruptly increases as waves enter denser, faster mantle rocks from the crust',
            'S-waves convert entirely to P-waves due to changing material rigidity',
            'Wave velocity decreases because the mantle is hotter than the crust',
          ],
          correct: 1,
          explain: 'The Moho (Mohorovičić discontinuity) marks the crust-mantle boundary, typically at 30–50 km (31 mi) depth beneath continents and 5–10 km (6.2 mi) beneath ocean floors. Mantle rocks (peridotite) have higher seismic velocities than crustal rocks (granite/basalt): P-wave velocities jump from ~6–7 km/s in the lower crust to ~8 km/s in the upper mantle. Andrija Mohorovičić discovered this boundary in 1909 by observing that seismograms at distances > 200 km (124 mi) showed two P-wave arrivals: the direct crustal wave and a faster refracted wave that had travelled as a head wave through the faster mantle.',
        },
        {
          q: 'The P-wave shadow zone exists between 105° and 140° from an earthquake epicentre. What causes it?',
          a: [
            'The outer core refracts P-waves away from this angular zone due to the velocity decrease at the core-mantle boundary',
            'S-wave conversion at the inner core boundary blocks P-waves from reaching this zone',
            'The mantle transition zone at 660 km (410 mi) completely absorbs P-wave energy in this angular range',
            'Surface wave interference constructively cancels P-wave energy between 105° and 140°',
          ],
          correct: 0,
          explain: `As P-waves enter the liquid outer core, velocity drops sharply from ~13 km/s in the lowermost mantle to ~8 km/s in the outer core. By Snell\'s law, this velocity decrease causes refraction away from the normal, bending waves toward the Earth\'s axis. Waves entering the core at the critical angle emerge on the opposite side of Earth at angles > 140°. The zone between 105° (last direct mantle P-wave) and 140° (first refracted core P-wave) receives no P-wave energy — this is the shadow zone. Its discovery in the early 20th century was the first evidence that Earth has a liquid core.`,
        },
        {
          q: `Which seismic wave type travels as horizontal shear motion and can only propagate along Earth\'s surface in the uppermost layers?`,
          a: [
            'Rayleigh waves',
            'Love waves',
            'P-waves',
            'PKP waves',
          ],
          correct: 1,
          explain: 'Love waves are surface waves that travel as horizontal transverse (shear) motion perpendicular to the direction of propagation, confined to the surface layers of the Earth. They require a velocity increase with depth to exist — they are essentially shear waves trapped by constructive interference in the surface layer. Love waves typically arrive before Rayleigh waves on a seismogram and produce the horizontal "shearing" ground motion that is particularly damaging to building foundations. They were theoretically described by A.E.H. Love in 1911. Love waves travel only in the horizontal plane; Rayleigh waves produce both vertical and horizontal (retrograde elliptical) motion.',
        },
        {
          q: `Inge Lehmann\'s 1936 discovery was based on seismic waves arriving in the P-wave shadow zone. What did she conclude?`,
          a: [
            'The mantle is divided into upper and lower sections by a velocity discontinuity at 660 km (410 mi)',
            'Earth has a solid inner core that refracts P-waves into the shadow zone as PKIKP phases',
            'The outer core is partially solid, creating a mushy zone that scatters P-waves',
            'Deep-focus earthquakes occur in the transition zone between the upper and lower mantle',
          ],
          correct: 1,
          explain: `By carefully analysing seismograms from large earthquakes, Inge Lehmann noticed that small P-wave arrivals appeared within the shadow zone (105°–140°) where no P-waves were expected if Earth had only a uniform liquid outer core. She proposed in her 1936 paper "P\'" that these arrivals were P-waves that had been refracted by a solid inner core — the PKIKP phase (P-wave that travels through the outer core, reflects off the inner core boundary, travels through the inner core, and emerges on the far side). This correctly identified the inner core as a distinct solid body ~1,220 km (758 mi) in radius, confirmed by later studies of normal modes and inner core anisotropy.`,
        },
        // ── Chapter 2: Earthquake Mechanics ──────────────────────────────────
        {
          q: 'According to elastic rebound theory, what is stored in the crust before an earthquake?',
          a: [
            'Chemical potential energy in hydrated minerals',
            'Elastic strain energy accumulated as rocks deform under tectonic stress',
            'Gravitational potential energy from crustal thickening',
            'Thermal energy conducted from the mantle',
          ],
          correct: 1,
          explain: 'Elastic rebound theory (Reid, 1910, based on the 1906 San Francisco earthquake) explains that rocks on either side of a fault deform elastically as tectonic plates continue moving while the locked fault resists displacement. This bends and stretches the rock like a spring, storing elastic strain energy. When accumulated stress exceeds fault friction, the fault suddenly slips and the elastic energy is released as seismic waves, heat, and rock fracturing. The rocks "rebound" elastically — like a released spring — to a less-strained configuration. GPS measurements of strain accumulation directly confirm this model for locked fault segments worldwide.',
        },
        {
          q: 'A fault where the hanging wall moves downward relative to the footwall is called a:',
          a: [
            'Reverse fault',
            'Normal fault',
            'Strike-slip fault',
            'Thrust fault',
          ],
          correct: 1,
          explain: 'In a normal fault, the hanging wall (the block above the fault plane) moves downward relative to the footwall (below the fault plane). Normal faults form in extensional tectonic settings where the crust is being pulled apart and thinned — the Basin and Range Province in the American West, the East African Rift, and mid-ocean ridges are dominated by normal faults. On a beach ball focal mechanism, a normal fault shows a white (dilatational) center. This contrasts with a reverse fault, where the hanging wall moves upward (compression), and a strike-slip fault, where motion is horizontal.',
        },
        {
          q: 'Moment magnitude (Mw) is derived from the seismic moment M₀ = μ × A × D. What does D represent?',
          a: [
            'Depth of the earthquake hypocenter in km',
            'Average fault displacement across the rupture area',
            'Dynamic stress drop during rupture',
            'Duration of ground shaking in seconds',
          ],
          correct: 1,
          explain: 'In the seismic moment equation M₀ = μ × A × D: μ is the shear modulus of the rock (rigidity, ~30 GPa in the crust), A is the area of the fault surface that ruptured, and D is the average displacement — how far the two sides of the fault moved past each other during the earthquake. For a M 7.0 earthquake, typical values are μ = 30 GPa, A ≈ 20 km (12 mi) × 10 km (6.2 mi) = 200 km² (77 sq mi), D ≈ 0.6 m (2 ft), giving M₀ ≈ 3.6 × 10¹⁸ N·m, consistent with Mw 6.9. Larger earthquakes have both larger rupture areas and greater average slip.',
        },
        {
          q: 'What does a four-quadrant alternating dark-light beach ball focal mechanism indicate?',
          a: [
            'A reverse fault with a steeply dipping plane',
            'A pure strike-slip fault with horizontal motion',
            'A normal fault with the hanging wall dropping',
            'An oblique thrust fault with significant along-strike component',
          ],
          correct: 1,
          explain: 'A focal mechanism beach ball shows compressional (dark) and dilatational (white) quadrants based on P-wave first-motion polarities. A pure strike-slip fault produces the classic four-quadrant alternating pattern because its P axis (maximum compression) and T axis (minimum compression) are both approximately horizontal. One pair of opposite quadrants is compressional, the other dilatational. In contrast, a thrust fault shows a dark center (P-axis nearly vertical looking from above), and a normal fault shows a white center. The San Andreas Fault system, being right-lateral strike-slip, displays the four-quadrant pattern. Oblique faults produce intermediate patterns.',
        },
        {
          q: 'Coulomb stress transfer after the 1999 Mw 7.6 Izmit earthquake increased ΔCFS on the adjacent Düzce fault segment. What happened 87 days later?',
          a: [
            'The Düzce segment locked more tightly, suppressing seismicity for 50 years',
            'A Mw 7.2 earthquake ruptured the Düzce segment, consistent with stress transfer triggering',
            'The Düzce segment experienced slow aseismic creep releasing the accumulated stress',
            'Aftershocks migrated away from the Düzce segment due to the stress shadow effect',
          ],
          correct: 1,
          explain: `Coulomb stress transfer (ΔCFS = Δτ − μ\'Δσ_n) provides a physical mechanism for earthquake triggering. When a mainshock ruptures, it increases shear stress (Δτ > 0) and/or decreases normal (clamping) stress (Δσ_n < 0) on adjacent fault segments, bringing them closer to failure. The 1999 Izmit earthquake loaded the Düzce segment of the North Anatolian Fault; the positive ΔCFS of ~0.5–1 bar was estimated to advance its next rupture by decades. The Mw 7.2 Düzce earthquake 87 days later is one of the most compelling examples of mainshock-triggered secondary rupture through Coulomb stress transfer.`,
        },
        // ── Chapter 3: Hazards and Risk Reduction ────────────────────────────
        {
          q: 'A building site has VS30 = 150 m/s. What does this indicate about earthquake hazard at the site?',
          a: [
            'The site is bedrock with minimal amplification — NEHRP Class A',
            'The site is very soft soil (NEHRP Class E) susceptible to significant ground motion amplification',
            'The site will experience only P-wave motion; S-waves are blocked by the low velocity layer',
            'The site has VS30 below the liquefaction threshold and will definitely liquefy in a M 6+ earthquake',
          ],
          correct: 1,
          explain: 'VS30 is the time-averaged shear-wave velocity to 30 m (98 ft) depth, used as a proxy for site stiffness. NEHRP site class boundaries: Class A (rock): VS30 > 1,500 m/s; Class B: 760–1,500 m/s; Class C: 360–760 m/s; Class D: 180–360 m/s; Class E (soft soil): VS30 < 180 m/s. A VS30 of 150 m/s falls in Class E — very soft soil such as soft bay muds, lacustrine clays, or loose fills. Class E sites can amplify ground motion 3–5× relative to Class A bedrock, and are prone to soil nonlinearity (additional amplification reduction at very high strain) and liquefaction if saturated.',
        },
        {
          q: 'The 1985 Mexico City earthquake caused catastrophic damage despite the epicentre being ~350 km (217 mi) away. What was the primary mechanism?',
          a: [
            'The earthquake was unusually shallow, increasing effective magnitude near the surface',
            'Ancient lake-bed sediments (Vs ~60 m/s) resonated at ~0.5 Hz, amplifying long-period surface waves 5-50× and matching building natural periods',
            'Mexico City\'s water supply was disrupted, preventing firefighting after building collapse fires',
            'The earthquake triggered massive liquefaction of the lake-bed sediment, causing widespread subsidence',
          ],
          correct: 1,
          explain: `Mexico City\'s catastrophe is the canonical example of site resonance amplification. The city sits on soft clay from drained Lake Texcoco with shear-wave velocities as low as 60 m/s and thicknesses of 50–100 m (328 ft). Natural period T = 4H/Vs ≈ 4 × 75 / 60 ≈ 5 s (0.2 Hz) to T = 2 s (0.5 Hz) for different areas. The Mw 8.1 Michoacán earthquake 350 km (217 mi) away generated strong surface waves at these exact periods. Mexico City\'s lake sediments amplified shaking 5–50× over nearby rock sites. Buildings of 8–15 storeys (natural period ~0.8–1.5 s) in the resonant frequency band experienced catastrophic collapse. Over 10,000 people died. The disaster became a landmark study in site effects and urban seismic risk.`,
        },
        {
          q: 'Which soil condition makes a site most susceptible to liquefaction?',
          a: [
            'Dry, densely packed gravel above the water table',
            'Saturated, loosely packed cohesionless sand or silt below the water table',
            'Stiff overconsolidated clay with high plasticity',
            'Intact bedrock with water-filled fractures',
          ],
          correct: 1,
          explain: 'Liquefaction susceptibility depends on three factors: (1) grain type — cohesionless material (sand, silt) is required; clay particles have interparticle cohesion that resists liquefaction; (2) saturation — pore water must be present; (3) loose packing — densely packed sands have inter-grain contact forces that resist rearrangement under cyclic loading. Saturated, loosely packed cohesionless sand below the water table is maximally susceptible. Recent hydraulic fills, alluvial fan deposits, beach sands, and aeolian dunes near water tables are classic liquefaction-prone environments. The 2011 Christchurch suburbs built on Holocene alluvial sands were prime examples.',
        },
        {
          q: 'A tsunami is observed to have retreated dramatically from the beach, exposing the seafloor. What should people on the beach do?',
          a: [
            'Approach the exposed seafloor to observe marine life stranded by the drawback',
            'Immediately move to high ground as far and fast as possible — a large wave crest will arrive within minutes',
            'Wait for official warnings from the tsunami warning centre before evacuating',
            'Swim away from shore at right angles to escape the incoming wave',
          ],
          correct: 1,
          explain: 'Sea drawback (the sudden, dramatic retreat of the ocean exposing normally submerged seafloor) indicates that the trough of the first tsunami wave has arrived. The wave crest will follow within minutes. Historically, curious observers have approached the exposed seafloor, assuming the sea has merely gone out, only to be struck by the arriving wave crest. The correct response is immediate evacuation to high ground — as high and as far inland as possible. Do not wait for official warnings, which may not have been issued yet for near-source tsunamis. Speed and distance are paramount: move immediately, move fast, and move high.',
        },
        {
          q: 'Tsunami speed in the deep ocean follows v = √(g×d). If depth halves from 4,000 m (13124 ft) to 2,000 m (6562 ft), what happens to wave speed?',
          a: [
            'Speed stays the same because tsunami wavelength adjusts',
            'Speed decreases by a factor of √2 (~1.41×), slowing from ~200 m/s to ~140 m/s',
            'Speed doubles because energy is conserved',
            'Speed decreases by exactly 50% from 200 m/s to 100 m/s',
          ],
          correct: 1,
          explain: `Tsunami phase speed follows v = √(g×d). If depth d decreases from 4,000 m (13124 ft) to 2,000 m (6562 ft), the speed changes by √(2,000/4,000) = √(0.5) = 1/√2 ≈ 0.707. So speed decreases by factor √2: from √(9.8×4000) ≈ 198 m/s to √(9.8×2000) ≈ 140 m/s. This deceleration causes energy concentration and amplitude increase (shoaling). Note: the factor is exactly √2 ≈ 1.414, not 2 (speed doesn\'t halve when depth halves). This square-root relationship means tsunamis slow down relatively gradually in moderate depth changes but decelerate rapidly in shallow coastal waters.`,
        },
        {
          q: 'What is the "blind zone" in earthquake early warning systems?',
          a: [
            'Areas where radio interference prevents EEW alerts from being received',
            'The region so close to the earthquake source that S-waves arrive before or simultaneously with EEW alerts, providing no warning',
            'Underground areas where seismometers cannot detect P-wave arrivals',
            'High-rise buildings where EEW signals are blocked by steel frames',
          ],
          correct: 1,
          explain: 'The blind zone (or warning zone) is the area surrounding the earthquake epicentre where EEW provides no useful warning because the time for P-wave detection, magnitude estimation, and alert transmission exceeds the S-wave travel time to that location. With a processing time of ~5 seconds and a P-wave velocity of ~6 km/s, the blind zone radius is approximately 25–35 km (22 mi). Communities within this zone experience strong shaking with zero warning time. For large earthquakes (which have extended rupture zones), the effective blind zone is larger. EEW is most beneficial for distant targets: a city 150 km (93 mi) from an M 7.5 epicentre might receive 20–40 seconds of warning — enough for many automated and human responses.',
        },
        {
          q: 'Probabilistic Seismic Hazard Analysis (PSHA) produces hazard curves expressing "probability of exceedance in 50 years." Why is this framing used rather than return periods?',
          a: [
            'Return periods are only valid for earthquakes occurring on a regular schedule',
            'The probabilistic framing communicates risk in terms directly relevant to building lifetime and decision-making',
            'PSHA cannot calculate return periods — it only outputs exceedance probabilities',
            'Return periods assume Poisson process which does not apply to seismicity',
          ],
          correct: 1,
          explain: 'The "probability of exceedance in T years" framing directly addresses the question an engineer or building owner faces: what is the chance this building experiences dangerous shaking during its design lifetime? A 10% probability of exceedance in 50 years (~475-year return period) is the standard code level because 50 years is a typical building design life and 10% exceedance probability represents an acceptable risk tolerance for most occupancies. The return period equivalent (1/annual exceedance rate) is mathematically equivalent but less intuitive to communicate. Both framings assume a Poisson process (events are independent) which is approximately correct for background seismicity, though characteristic earthquake models deviate from this.',
        },
        {
          q: 'Which combination of factors contributed most to the high death toll from the 2011 Tōhoku tsunami?',
          a: [
            'The tsunami was unexpected — Japan had no warning systems in place',
            'Near-source warning time was insufficient, tsunami exceeded seawall heights by 3-4×, and vast inundation area overwhelmed evacuation routes',
            'Building collapses from shaking killed most victims before the tsunami arrived',
            'The Fukushima nuclear accident occurred simultaneously, preventing emergency response',
          ],
          correct: 1,
          explain: `The Tōhoku tsunami\'s ~18,500 deaths resulted from several compounding factors: (1) near-source communities within the 20–30 km (19 mi) blind zone had only 15–20 minutes from initial shaking to first wave arrival — insufficient for full evacuation; (2) the initial JMA magnitude estimate (M 7.9) predicted 3–6 m (20 ft) waves; actual runup reached 15–40 m (131 ft), overtopping seawalls designed for smaller historical tsunamis; (3) the Sendai Plain extends 10 km (6.2 mi) inland — unprecedented inundation distances cut off evacuation routes; (4) some community members trusted seawalls and did not evacuate, a behaviour called "tsunami complacency" from the period of no large Sanriku tsunamis since 1960. The disaster has since driven major improvements in EEW magnitude estimation, seawall design philosophy (resilience vs. protection), and evacuation culture.`,
        },
        {
          q: 'What geological evidence do paleoseismologists look for in trenches to identify past earthquake events?',
          a: [
            'Increased uranium concentration in sediment layers near fault zones',
            'Offset strata, colluvial wedges, liquefaction features, and peat submergence layers that can be radiocarbon dated',
            'Magnetic polarity reversals at the fault trace indicating ancient slip events',
            'Pressure solution seams in limestone indicating paleoseismic compressive stress',
          ],
          correct: 1,
          explain: 'Paleoseismology uses fault-crossing trench excavations to read the physical record of past earthquakes in sediment stratigraphy. Key evidence types include: (1) offset or faulted sediment layers with measurable displacement amounts; (2) colluvial wedges — debris that accumulated against a fresh fault scarp after it formed coseismically; (3) liquefaction features (sand dikes, sand blows) that intrude through overlying sediment; (4) peat or organic-rich layers that were suddenly submerged (coastal coseismic subsidence) and can be precisely radiocarbon dated; (5) disturbed or "crumpled" stratigraphy from strong ground motion. These features enable determination of the number, timing, and approximate magnitude of prehistoric earthquakes on a specific fault segment.',
        },
        {
          q: 'Which statement best summarises the relationship between earthquake magnitude, ground motion, and building damage?',
          a: [
            'Higher magnitude always produces more building damage regardless of distance, depth, or site conditions',
            'Damage depends on ground motion intensity (PGA, MMI) at the site, which is controlled by magnitude, distance, depth, directivity, and local site conditions',
            'Magnitude 7+ earthquakes always cause structural collapse; magnitudes below 6 never damage engineered structures',
            'Ground motion decreases linearly with distance, so doubling distance always halves damage',
          ],
          correct: 1,
          explain: 'Earthquake damage is a complex chain from source to structure. Magnitude characterises energy at the source, but what matters for damage is ground motion intensity (peak ground acceleration, velocity, spectral acceleration) at each specific location. Ground motion depends on: (1) source magnitude — larger magnitudes produce stronger motion; (2) distance — attenuation reduces motion with distance; (3) focal depth — shallow earthquakes produce stronger surface shaking; (4) rupture directivity — forward-directivity amplifies motion in the rupture propagation direction; (5) path effects — attenuation varies by geological province; (6) site effects — soft sediment amplifies; (7) building characteristics — resonance amplifies structural response. A M 7.0 at 10 km (6.2 mi) on soft sediment can far exceed a M 8.0 at 500 km (311 mi) on bedrock in terms of both ground motion and damage.',
        },
      ],
    },
  ],
}

export default seis101Capstone
