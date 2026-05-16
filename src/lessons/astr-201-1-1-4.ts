import { Shield, Rocket, AlertTriangle } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const impactHazardsOnEarth: Lesson = {
  id: 'astr-201-1-1-4',
  title: 'Impact Hazards on Earth',
  track: 'ast',
  trackName: 'Planetary Geology',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: `The same impact physics that shaped planetary surfaces throughout Solar System history remains an active hazard today. From the global catalogue of near-Earth asteroids to the 2022 DART deflection demonstration, this lesson connects the geological record of past impacts to humanity\'s emerging capacity for planetary defence.`,
  sources: [
    { org: 'NASA', title: 'NASA Planetary Defense Coordination Office — Near-Earth Object Surveys and Hazard Assessment', url: 'https://www.nasa.gov/planetary-defense/' },
    { org: 'Nature', title: 'Thomas et al. (2023) — DART mission: Dimorphos orbit change of 33 minutes, Nature 616', url: 'https://doi.org/10.1038/s41586-023-05805-2' },
    { org: 'Icarus', title: 'Toon, O.B. et al. (1997) — Environmental Perturbations Caused by the Impacts of Asteroids and Comets, Rev. Geophys. 35', url: 'https://doi.org/10.1029/96RG03038' },
    { org: 'NASA', title: 'Chesley, S.R. et al. (2022) — Apophis 2029 close approach analysis and 2036 impact probability removal', url: 'https://cneos.jpl.nasa.gov/news/news196.html' },
    { org: 'LPI', title: 'Chapman, C.R. & Morrison, D. (1994) — Impacts on the Earth by Asteroids and Comets: Assessing the Hazard, Nature 367', url: 'https://doi.org/10.1038/367033a0' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The ongoing hazard: asteroids in a populated Solar System',
      body: `On 15 February 2013, the same day that 40-metre asteroid 2012 DA14 safely flew past Earth at 27,700 km (17213 mi) altitude, an unrelated 20-metre bolide entered the atmosphere over Chelyabinsk, Russia without warning. The airburst injured over 1,500 people, made international headlines, and provided a sobering reminder that impact hazards are not merely historical footnotes. The Solar System is not an empty place, and the gravitational dynamics of the inner Solar System continuously deliver small bodies into Earth-crossing orbits on timescales of millions to billions of years.

The good news is that humanity has made remarkable progress in characterising the near-Earth object (NEO) population over the past three decades. The **Spaceguard Survey**, mandated by the US Congress in 1998, achieved its goal of cataloguing >90% of **potentially hazardous asteroids (PHAs)** with diameters >1 km (0.6 mi) — those capable of causing global catastrophe — by 2010. As of 2024, approximately **25,000 near-Earth asteroids (NEAs)** are known, including ~900 objects with diameters >1 km (0.6 mi). A 2005 Congressional mandate extended the survey goal to catalogue 90% of NEOs larger than 140 m (459 ft) — a size capable of devastating a country-sized region — by 2020, though this goal remains incomplete due to funding constraints. NASA's upcoming **NEO Surveyor** space telescope, in development for launch in the late 2020s, is designed to rapidly complete this survey from an infrared vantage point near the Earth-Sun L1 Lagrange point.

But finding asteroids is only the first step in planetary defence. The second step — determining whether any known object will strike Earth — requires precise orbital determination over many observation arcs and sophisticated computational methods that account for the subtle Yarkovsky effect (non-gravitational thermal acceleration). The third step — deflecting a confirmed hazard — was demonstrated for the first time in September 2022 when NASA's **DART (Double Asteroid Redirection Test)** spacecraft deliberately impacted the moonlet Dimorphos, shortening its orbital period around the larger asteroid Didymos by 33 minutes — far exceeding the 73-second minimum required for mission success. Humanity now has a proven method for deflecting an asteroid on a collision course with Earth, given sufficient warning time.`,
      keyTerms: [
        { term: 'near-Earth asteroid (NEA)', def: 'An asteroid whose orbit brings it within 1.3 AU of the Sun at perihelion, meaning it can approach Earth\'s orbit at 1.0 AU. NEAs are subdivided into four dynamical classes based on their orbital elements relative to Earth: Atiras (orbits entirely inside Earth\'s orbit), Atens (semi-major axis <1 AU, cross Earth\'s orbit), Apollos (semi-major axis >1 AU, cross Earth\'s orbit), and Amors (orbits just outside Earth\'s orbit, 1.017–1.3 AU perihelion). Most NEAs originate from the Main Belt through gravitational perturbations by Jupiter or Mars into chaotic orbital resonances that pump up their orbital eccentricities until they become Earth-crossing. As of 2024, ~25,000 NEAs are known, with the database growing at ~3,000 per year from ongoing sky surveys (Catalina Sky Survey, Pan-STARRS, ATLAS).' },
        { term: 'potentially hazardous asteroid (PHA)', def: 'An asteroid classified as both large enough to cause significant regional or global damage if it struck Earth (absolute magnitude H ≤ 22, corresponding roughly to diameter ≥ 140 m (459 ft)) and close enough to Earth\'s orbit to pose a realistic long-term collision threat (minimum orbit intersection distance, MOID ≤ 0.05 AU). PHAs receive the most intensive follow-up observation and orbital determination. As of 2024, ~2,300 PHAs are known. The largest known PHA is 1999 JM8, approximately 7 km (4.3 mi) in diameter. Note that "potentially hazardous" does not mean "on a collision course" — it means the orbit geometry does not currently preclude a future collision and the object is large enough to matter if one occurred.' },
        { term: 'Torino Scale', def: 'A public communication tool for assessing and communicating the collision hazard posed by a newly discovered near-Earth object, on a scale of 0 to 10. Torino 0 means no hazard (object will miss or burn up harmlessly); Torino 10 means a certain collision capable of causing a global catastrophe. The Torino Scale combines two factors: the probability of Earth collision and the estimated kinetic energy of the impactor. It was adopted at a 1999 IAU workshop in Turin, Italy. Most newly discovered NEOs are assigned Torino 0 after initial orbital determination. The highest Torino rating ever assigned to a real asteroid was Torino 4, briefly given to Apophis (99942) in December 2004 before additional observations reduced the probability of 2029 impact to essentially zero.' },
        { term: 'Palermo Technical Scale', def: 'A logarithmic hazard index used by professional planetary defence scientists (as opposed to the public-communication Torino Scale) to assess the relative hazard of a specific asteroid-Earth encounter. The Palermo Scale compares the probability of a specific predicted impact against the "background" probability of any impact of equivalent or greater energy occurring from the general NEO population in the same time window. A Palermo Scale value of 0 means the probability equals the background rate; negative values mean the object is less hazardous than background; positive values (rare) indicate an object more hazardous than the expected background, warranting urgent attention. Currently no known NEO has a positive Palermo Scale value.' },
        { term: 'Yarkovsky effect', def: 'A non-gravitational force on rotating asteroids caused by the anisotropic thermal re-radiation of sunlight: the sun-warmed surface radiates infrared photons preferentially in the "afternoon" direction due to thermal lag, imparting a tiny but cumulative thrust in or against the direction of orbital motion (depending on the spin orientation). Over millions of years, the Yarkovsky effect can change an asteroid\'s semi-major axis by tenths of an AU, delivering Main Belt asteroids into orbital resonances that inject them into Earth-crossing orbits. For planetary defence, the Yarkovsky effect is critical because small uncertainties in its magnitude (which depends on poorly known surface thermal properties) translate into large uncertainties in an asteroid\'s position centuries in the future, making long-term impact probability calculations difficult.' },
        { term: 'kinetic impactor', def: 'A planetary defence strategy in which a spacecraft is deliberately crashed into a threatening asteroid at high velocity, transferring momentum to change the asteroid\'s velocity by a tiny amount — enough, if executed years to decades before impact, to cause the asteroid to miss Earth. The momentum transfer depends on the spacecraft\'s mass and velocity but also on the momentum enhancement factor β (beta), which accounts for the ejecta plume generated by the impact: excavated material flying away from the asteroid contributes additional momentum, enhancing the deflection beyond the spacecraft\'s own mass. The DART mission demonstrated a β ≈ 2.2–4.9 for the Dimorphos impact, meaning ejecta enhanced the deflection by 2–5× compared to a perfectly inelastic collision. This is the only currently demonstrated asteroid deflection technology.' },
      ],
    },
    {
      type: 'concept',
      title: 'Impact frequency, energy scales, and consequences by size',
      body: `Understanding the relationship between impactor size, impact frequency, and consequences is fundamental to rational risk assessment. The key empirical relationship is that **impact frequency decreases steeply with impactor size** — small objects strike Earth far more often than large ones. This is captured by the cumulative frequency relationship N(>D) ∝ D^(−2.5) approximately, meaning that every factor of 10 increase in diameter corresponds to a ~300× decrease in impact frequency.

At the smallest end, objects up to roughly **25 metres** are largely destroyed by aerodynamic ram pressure as they decelerate in the atmosphere, depositing most of their energy as a hypersonic shock wave (airburst) at altitudes of 10–30 km (19 mi) without reaching the ground intact. These events occur many times per year globally but are mostly over uninhabited areas or oceans. The **1-metre class** objects strike Earth hundreds of times per day, almost all burning up as "shooting stars." **Chelyabinsk-class events (~20 m (66 ft))** occur roughly every 50–100 years; the Chelyabinsk 2013 event (500 kt energy) was the largest natural explosion on Earth since Tunguska 1908.

**Tunguska-class events (40–80 metres)** occur roughly every 500–1,000 years and can devastate areas of thousands of square kilometres even without a crater forming. The 1908 Tunguska airburst flattened ~2,150 km² (830 sq mi) of Siberian boreal forest in a radial pattern — if it had occurred over a major city, fatalities could have numbered in the millions. **100-metre to 1-km class** objects represent a transition from regional to global consequences: a 200-metre iron asteroid would penetrate to the surface and create a crater with regional devastation extending hundreds of kilometres; a 500-metre object striking the Atlantic Ocean would generate tsunamis threatening all Atlantic coastlines; a 1-km asteroid would inject enough dust and aerosols into the stratosphere to reduce global temperatures by 1–5°C (41°F) for years, causing significant agricultural disruption. **1-km to 10-km class** objects cause global catastrophe: the Chicxulub impactor (~10 km (6.2 mi)) triggered an impact winter, global acid rain, and a mass extinction ending 75% of species. These "civilisation-ending" impacts occur at frequencies of ~100 million years.`,
      cards: [
        {
          name: 'Impact Frequency-Energy Relationship',
          icon: AlertTriangle,
          color: BRAND.coral,
          desc: 'N(>D) ∝ D^(−2.5) approximately: each 10× increase in diameter gives ~300× fewer impacts. Frequency estimates: <1 m (3 ft) (shooting stars): thousands/day; ~20 m (66 ft) (Chelyabinsk-class): ~50–100 years; ~40 m (131 ft) (Tunguska-class): ~500–1,000 years; ~140 m (459 ft) (PHA threshold): ~10,000–30,000 years; ~1 km (0.6 mi): ~500,000 years; ~10 km (6.2 mi) (Chicxulub-class): ~100 million years. Key uncertainty: frequency estimates for 50–200 m (656 ft) objects are poorly constrained because this size range is too small to leave preserved craters but too large to be fully catalogued by current surveys.',
          examples: 'Chelyabinsk 2013: 20 m (66 ft), ~500 kt, 1,500 injured; predicted return period ~50–100 years; no warning possible with ground-based surveys · Tunguska 1908: ~40 m (131 ft), 10–15 Mt airburst; 2,150 km² (830 sq mi) forest flattened; no confirmed casualties due to remoteness · Meteor Crater (Barringer): ~50 m (164 ft) iron asteroid, ~50,000 years ago; 1.2 km (0.7 mi) crater; equivalent frequency ~50,000 years for iron impactor of this size',
        },
        {
          name: 'Impact Effects by Impactor Size',
          icon: AlertTriangle,
          color: BRAND.gold,
          desc: 'D < 25 m (82 ft): atmospheric disruption destroys object (airburst); local shock wave and light flash; no crater. D = 25–200 m (656 ft): transition from airburst to surface impact depending on composition; stony = airburst; iron = crater; regional destruction radius 10–300 km (186 mi). D = 200 m (656 ft) – 1 km (0.6 mi): guaranteed surface impact; crater formation; regional catastrophe + potential ocean impact tsunami; stratospheric injection of dust begins. D = 1–2 km (1.2 mi): global stratospheric dust injection; photosynthesis disruption for months; crop failure; ~1 billion casualties estimated. D > 10 km (6.2 mi): mass extinction class; Chicxulub-scale winter, acid rain, ozone depletion; >75% species extinction.',
          examples: 'Airburst threshold: altitude of peak energy deposition scales as H_burst ∝ ρ_i^(1/3) v^(2/3) D / (C_D ρ_atm)^(1/3); stony 50-m object bursts at ~5–10 km (6.2 mi); iron 50-m object reaches surface · Pacific Ocean impact by 500-m asteroid: tsunami wave heights estimated 10–30 m (98 ft) along North American and Asian coastlines (Toon et al. 1997) · Chicxulub impact winter: ~15°C (59°F) global cooling for ~3–4 years; photosynthesis shutdown for >1 year; estimated 75% of species extinct',
        },
        {
          name: 'Apophis: A Real-World Hazard Assessment',
          icon: Shield,
          color: BRAND.amethyst,
          desc: 'Asteroid 99942 Apophis (~340 m (1116 ft) diameter, ~6 × 10¹⁰ kg) was discovered 19 June 2004. Initial orbital calculations suggested a 2.7% probability of Earth impact on 13 April 2029 — the highest Torino Scale rating (4) ever assigned to a real object, triggering global media coverage. Additional observations in December 2004 ruled out the 2029 impact: Apophis will instead make a remarkably close flyby at ~31,000 km (19263 mi) altitude — inside the geostationary satellite belt (GEO at 35,786 km (22237 mi)) — on 13 April 2029. This flyby will be visible to the naked eye in Europe and Africa. A potential 2036 impact through a gravitational "keyhole" was subsequently ruled out in 2021 by Goldstone radar observations reducing position uncertainty. No significant impact probability for the next 100 years.',
          examples: 'Apophis 2029 flyby: 31,000 km (19263 mi) (vs GEO at 35,786 km (22237 mi) and Moon at 384,400 km (238866 mi)); closest approach of a known PHA in recorded history · Apophis energy if impacted: ~1,200 Mt TNT equivalent (~1,200 Hiroshima bombs); regional devastation comparable to a country; not global-extinction class but catastrophic · OSIRIS-APEX mission: NASA repurposed OSIRIS-REx spacecraft (after Bennu sample return) to rendezvous with Apophis during its 2029 flyby, studying tidal and thermal effects',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Planetary defence: from detection to deflection',
      body: `Planetary defence is the application of science, engineering, and policy to protect Earth from asteroid and comet impacts. It encompasses three sequential challenges: finding threatening objects before they find us (**detection and cataloguing**), determining with sufficient accuracy whether a specific object will strike Earth (**orbit determination and impact probability**), and if necessary, deflecting the object (**active deflection**).

**Detection** relies on wide-field sky surveys continuously monitoring the ecliptic plane and surrounding sky for moving objects. The current principal surveys — the Catalina Sky Survey, Pan-STARRS (Panoramic Survey Telescope and Rapid Response System), and ATLAS (Asteroid Terrestrial-impact Last Alert System) — together discover ~3,000 new NEAs per year and provide the last-line warning system for small (10–100 m (328 ft)) objects, sometimes with only hours of warning (as with Chelyabinsk 2013, which was not detected before impact). The forthcoming **Vera C. Rubin Observatory (LSST)** will survey the entire visible sky every three nights, dramatically accelerating the completion of the NEO catalogue. NASA's **NEO Surveyor** infrared space telescope will detect objects coming from the Sun-facing direction that are invisible to ground-based observatories.

**Orbit determination** requires tracking a newly discovered object over multiple observational arcs to reduce the uncertainty ellipsoid of its predicted future position. For objects discovered years to decades before a predicted impact, the Yarkovsky thermal drift must be modelled precisely, requiring knowledge of the asteroid\'s size, shape, rotation state, and surface thermal properties. Impact probabilities are maintained in real-time by JPL\'s **Sentry** system and ESA\'s **CLOMON2** system, which continuously recalculate impact probabilities as new observations arrive.

**Active deflection** strategies depend on warning time. With decades of lead time, a **kinetic impactor** (crashing a spacecraft into the asteroid at high velocity) is the most practical and technologically ready option — now demonstrated by DART. With centuries of lead time, a **gravity tractor** (hovering a massive spacecraft near the asteroid without touching it, using mutual gravitational attraction to gradually nudge the orbit) would work for even friable objects that might shatter under kinetic impact. For short warning times (<5 years), a **nuclear standoff detonation** — detonating a nuclear device near the asteroid to ablate and vaporise surface material, creating a thrust — is the only option with sufficient energy, though it remains undemonstrated and presents political challenges.`,
      cards: [
        {
          name: 'DART Mission: Deflection Demonstrated',
          icon: Rocket,
          color: BRAND.jade,
          desc: 'DART (Double Asteroid Redirection Test) launched 24 November 2021; impacted Dimorphos (160 m (525 ft) moonlet of Didymos binary asteroid system) on 26 September 2022 at 6.14 km/s. Mission success criterion: change Dimorphos orbital period by ≥73 seconds. Actual result: orbital period shortened by 33 minutes (from 11 h 55 min to 11 h 22 min) — 27× the minimum requirement. Momentum enhancement factor β ≈ 2.2–4.9 (ejecta plume enhanced deflection by 2–5×, confirmed by Hubble and James Webb observations of ejecta tail). ESA Hera mission (launch Oct 2024) will characterise Dimorphos and Didymos post-impact to fully characterise deflection efficiency.',
          examples: 'DART spacecraft mass: 570 kg (1,257 lb); impact velocity: 6.14 km/s; KE delivered: ~10.7 GJ (~2.5 tonnes (2.8 tons) TNT) — tiny compared to target mass but sufficient to change orbit · Dimorphos pre-impact shape: contact binary or squashed ellipsoid, ~163 m (535 ft) mean diameter; DART images show heavily cratered rubble-pile surface · Ejecta cone: LICIACube cubesat (deployed 15 days before impact) imaged 5,000 tonne (5510.0 tons) ejecta plume extending >10,000 km (6214 mi) from Dimorphos within hours',
        },
        {
          name: 'Deflection Strategies and Lead Time',
          icon: Shield,
          color: BRAND.accentHot,
          desc: 'Kinetic impactor (demonstrated by DART): requires years to decades of warning; effective for solid objects up to ~1 km (0.6 mi); β enhancement critical; multiple impactors needed for large objects. Gravity tractor: spacecraft hovers near asteroid using ion thrusters to counteract mutual gravity; imparts continuous tiny acceleration; requires decades of lead time; works for rubble piles without fragmentation risk. Nuclear standoff: detonate nuclear device near surface; ablation of surface material creates thrust; ~10–100× more efficient than kinetic impactor per kg; requires <5 years warning; undemonstrated; political treaty complexities (Outer Space Treaty 1967). Slow push (laser ablation): continuous laser heating ablates surface material; very low thrust over very long timescales (decades–centuries); technically challenging at scale.',
          examples: 'Gravity tractor: proposed by Lu & Love (2005, Nature); requires ~1 tonne (1.1 tons) spacecraft hovering ~300 m (984 ft) from a 200-m asteroid for ~20 years to deflect it 1 Earth radius · Nuclear standoff: classified JASON study (2007) estimated a 1-megaton device could deflect a 1-km asteroid with 1 year of warning if detonated at correct standoff distance · B612 Foundation Sentinel: proposed private space telescope (2012–2019, never launched) that would have surveyed from Venus orbit to complete the 140-m catalogue',
        },
        {
          name: 'The NEO Catalogue and Risk Communication',
          icon: AlertTriangle,
          color: BRAND.ruby,
          desc: 'As of 2024: ~25,000 NEAs known; ~2,300 PHAs (D > 140 m (459 ft), MOID < 0.05 AU); ~900 objects D > 1 km (0.6 mi) (>90% complete per Spaceguard mandate). Torino Scale (0–10): public communication; 0 = no hazard, 10 = certain global catastrophe. Palermo Scale (logarithmic): technical use; 0 = background rate; positive = above background. Risk perception challenge: impact risk is real but average; annual fatality risk from asteroid impact (~1 in 700,000 per year from all sizes combined) comparable to risk of dying in a plane crash. Policy: NASA PDCO coordinates US response; UN-endorsed International Asteroid Warning Network (IAWN) and Space Mission Planning Advisory Group (SMPAG) coordinate internationally.',
          examples: 'Apophis: Torino 4 (Dec 2004) → Torino 0 (Jan 2005) within weeks; dramatic illustration of how rapidly risk assessment changes with new observations · 2023 BU: 4-metre asteroid that passed 3,600 km (2237 mi) above Earth in January 2023 — closer than many satellites; discovered only 4 days before closest approach · Bennu (101955): 492 m (1614 ft) diameter; highest cumulative impact probability of any known PHA (~1 in 1,750 chance of Earth impact 2178–2290); OSIRIS-REx returned 4.5 g sample to Earth in September 2023',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From Discovery to Deflection: The Planetary Defence Pipeline',
      body: 'This flow diagram traces the sequence of actions required in a planetary defence response, from initial discovery of a potentially threatening asteroid through characterisation, decision-making, and active deflection mission execution.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Follow the planetary defence response sequence from initial discovery of a near-Earth asteroid through impact probability calculation, public communication, and deflection mission execution',
        nodes: [
          {
            id: 'discovery',
            label: 'Discovery and Initial Detection',
            description: 'Wide-field sky surveys (Catalina, Pan-STARRS, ATLAS, future Rubin LSST) detect moving objects. ~3,000 new NEAs discovered per year. New object assigned temporary designation; initial orbit calculated from discovery arc. Most objects immediately assigned Torino 0; a few require follow-up. NEO Surveyor (infrared, L1 orbit) will detect Sun-approaching objects invisible to ground-based surveys.',
            color: BRAND.accent,
          },
          {
            id: 'orbit-determination',
            label: 'Orbit Determination',
            description: 'Follow-up observations reduce position uncertainty ellipsoid. Radar ranging (Goldstone, Arecibo before closure) provides most precise measurements. Yarkovsky effect modelled using observed size, shape, rotation, and thermal inertia. JPL Sentry and ESA CLOMON2 compute impact probabilities continuously. Warning times: years to decades for catalogued PHAs; hours to days for small undiscovered objects.',
            color: BRAND.gold,
          },
          {
            id: 'hazard-assessment',
            label: 'Hazard Assessment and Communication',
            description: 'Torino Scale assigned for public communication (0–10). Palermo Scale for technical assessment. Impact probability threshold for action: ~1% probability of impact considered sufficient to begin deflection mission planning. NASA PDCO, IAWN, and SMPAG coordinate international response. Historical case: Apophis reached Torino 4 in Dec 2004, dropped to 0 within weeks as orbit refined.',
            color: BRAND.coral,
          },
          {
            id: 'characterisation',
            label: 'Physical Characterisation',
            description: 'Determine size, mass, density, composition, rotation, and internal structure — all critical for deflection mission design. Rubble piles vs monoliths respond very differently to kinetic impactor. Spectroscopy identifies composition (C-type vs S-type vs M-type). Radar imaging maps shape. Spacecraft flyby or rendezvous provides best characterisation (OSIRIS-REx at Bennu, Hayabusa2 at Ryugu).',
            color: BRAND.amethyst,
          },
          {
            id: 'deflection-decision',
            label: 'Deflection Mission Decision',
            description: 'International deliberation required (no single nation owns planetary defence). Lead time determines strategy: decades → kinetic impactor (preferred, demonstrated by DART); ~20 years → gravity tractor; <5 years → nuclear standoff (undemonstrated, politically complex). Multiple kinetic impactors may be needed for objects >500 m (1640 ft). Mission preparation: typically 5–10 years from decision to impact.',
            color: BRAND.jade,
          },
          {
            id: 'deflection-execution',
            label: 'Deflection Execution and Verification',
            description: 'Kinetic impactor demonstrated: DART changed Dimorphos period by 33 minutes (27× minimum). β ≈ 2.2–4.9 from ejecta enhancement. Verify deflection by ground-based astrometry and radar; follow-up spacecraft (ESA Hera) fully characterises result. If deflection insufficient, second mission may be required — hence importance of maximum warning time. DART proves concept works; scaled-up mission for larger object needed.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'discovery', to: 'orbit-determination', label: 'follow-up observations' },
          { from: 'orbit-determination', to: 'hazard-assessment', label: 'impact probability calculated' },
          { from: 'hazard-assessment', to: 'characterisation', label: 'if Palermo > 0 or Torino > 0' },
          { from: 'characterisation', to: 'deflection-decision', label: 'physical properties inform mission design' },
          { from: 'deflection-decision', to: 'deflection-execution', label: 'international consensus and funding' },
          { from: 'deflection-execution', to: 'orbit-determination', label: 'verify orbit change; re-assess' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The Spaceguard Survey mandate (1998) aimed to catalogue >90% of near-Earth objects larger than 1 km (0.6 mi) diameter. Why was this specific diameter threshold chosen as the primary initial goal, rather than a smaller threshold like 140 m (459 ft)?',
          a: [
            'Objects >1 km (0.6 mi) are the minimum size capable of causing global civilisation-threatening effects (impact winter, global crop failure, potential extinction-level consequences), making them the highest priority for cataloguing; the 1-km threshold represents the boundary between regional and global catastrophic effects',
            'Objects >1 km (0.6 mi) are the only ones detectable by late-1990s survey technology; smaller objects were simply invisible to telescopes of that era regardless of survey duration or sky coverage',
            'Objects >1 km (0.6 mi) are the most common impactors in the current Solar System because the Main Belt preferentially produces large fragments; smaller objects were thought to be too rare to constitute a significant hazard',
            '1 km (0.6 mi) was chosen because it is the approximate minimum size required to penetrate Earth\'s magnetic field; smaller objects are deflected by the magnetosphere before reaching the atmosphere',
          ],
          correct: 0,
          explain: `The 1-km threshold was chosen for a combination of hazard and feasibility reasons. On the hazard side: objects >1 km (0.6 mi) striking Earth would inject sufficient dust, aerosols, and sulphur dioxide into the stratosphere to reduce global temperatures by 1–5°C (41°F) for years, triggering photosynthesis disruption, agricultural collapse, and potentially causing mass casualties in the billions — a "civilisation-threatening" impact. The death toll would be determined not by direct blast effects but by subsequent famine and societal disruption, affecting the entire global population. On the feasibility side: 1-km objects are bright enough (absolute magnitude H ~17.7) to be detected by late-1990s wide-field telescopes in modest exposure times, making a >90% complete census achievable within about 10 years. Smaller objects (140 m (459 ft), H ~22) are ~1,000× fainter, requiring much larger telescopes and longer exposures to survey comprehensively — a goal that even 2025 surveys have not yet fully achieved. Option B is incorrect: 140-m objects are detectable with 1990s technology, just not as efficiently. Option C is incorrect: smaller objects (50 m (164 ft) – 1 km (0.6 mi)) are far more numerous than 1-km objects by the N ∝ D^(−2.5) size distribution. Option D is scientifically incorrect: Earth\'s magnetic field has no effect on asteroid trajectories (asteroids are not charged in the way the magnetic field could deflect).`,
        },
        {
          q: `The DART spacecraft impacted Dimorphos at 6.14 km/s and shortened its orbital period around Didymos by 33 minutes — far more than the spacecraft\'s own momentum transfer would predict. What physical process explains this "bonus" deflection, and why is it quantified by the parameter β (beta)?`,
          a: [
            'The impact excavated material from Dimorphos\'s surface that was ejected backward (away from the direction of impact) at high velocity; by Newton\'s third law, this ejecta plume imparted additional forward momentum to Dimorphos beyond the spacecraft\'s own contribution; β = total momentum change / spacecraft momentum, and DART achieved β ≈ 2.2–4.9',
            'The intense heat of the DART impact triggered a chain of underground explosions inside Dimorphos from volatile-rich material; the steam and gas jetting provided thrust in the direction opposite to impact, amplifying the deflection; β measures the ratio of chemical energy release to kinetic impact energy',
            'The impact permanently altered Dimorphos\'s rotation rate, converting rotational kinetic energy into orbital energy through tidal coupling with Didymos; β measures the efficiency of this spin-to-orbit energy transfer',
            'DART carried a chemical rocket booster that ignited on impact with Dimorphos to provide additional thrust beyond the kinetic momentum; β is the ratio of rocket thrust to spacecraft mass, pre-programmed to maximise deflection efficiency',
          ],
          correct: 0,
          explain: `When DART struck Dimorphos at 6.14 km/s, it excavated a crater and ejected thousands of tonnes of surface material. Because these ejecta were launched backward relative to the impact direction (downrange of the spacecraft\'s approach), by conservation of momentum the ejecta plume imparted additional forward momentum to Dimorphos — analogous to how a gun recoils when firing a bullet. The parameter β (momentum enhancement factor) quantifies this bonus: β = (total momentum change of Dimorphos) / (momentum delivered by spacecraft alone). For a perfectly inelastic collision with no ejecta, β = 1.0. For DART, LICIACube images showed a massive ejecta plume extending >10,000 km (6214 mi) from Dimorphos, and ground-based astrometry measured the total orbital period change at 33 minutes. This corresponds to β ≈ 2.2–4.9 (the uncertainty reflects the poorly known mass of Dimorphos). The high β value is why kinetic impactors are practical for planetary defence even for spacecraft much smaller than the target asteroid: the ejecta amplification allows a modest spacecraft (570 kg (1,257 lb)) to deflect a body orders of magnitude more massive. Option B is incorrect: Dimorphos has no known volatile-rich interior explosive material. Option C is incorrect: spin-orbit coupling is a real effect but is not what β measures or how the deflection primarily occurred. Option D is incorrect: DART carried no rocket booster; its deflection was entirely kinetic.`,
        },
        {
          q: 'Asteroid 99942 Apophis (340 m (1116 ft) diameter) received a Torino Scale rating of 4 in December 2004 — the highest ever assigned to a real object — after initial orbital calculations suggested a 2.7% probability of Earth impact in 2029. Within weeks, the rating was reduced to 0. What does this sequence of events illustrate about the Torino Scale and the process of asteroid hazard assessment?',
          a: [
            'It illustrates that high Torino Scale values are often transient: initial orbital solutions based on short observation arcs have large uncertainties, and as more observations reduce the uncertainty ellipsoid, the predicted position narrows and usually shows Earth is not in the impact corridor; it also demonstrates that the Torino Scale effectively communicates evolving risk to the public without being alarmist',
            'It illustrates a fundamental flaw in the Torino Scale: a 2.7% impact probability (1-in-37 chance) should immediately trigger deflection mission planning rather than waiting for additional observations, because the risk is too high to allow normal orbital refinement procedures to proceed',
            'It illustrates that all Torino Scale ratings above 1 are unreliable and should be replaced by the Palermo Scale for all public communications; the Apophis episode shows that public Torino Scale announcements cause unnecessary panic and should be suppressed until impact is certain',
            'It illustrates that asteroid discovery teams often intentionally overstate impact probabilities in initial reports to secure funding for follow-up observations; the Apophis rating was known to be temporary and was used strategically to increase public awareness of asteroid hazards',
          ],
          correct: 0,
          explain: 'The Apophis episode is a textbook illustration of normal asteroid hazard assessment. When an object is newly discovered, only a short arc of orbital positions is available, and the uncertainty in the extrapolated future orbit is large. This large uncertainty ellipsoid may overlap with Earth, giving a non-negligible collision probability. As additional observations are made over days, weeks, and months, the uncertainty ellipsoid shrinks, and in the vast majority of cases the refined orbit shows Earth is not within the predicted corridor — and the Torino rating drops to 0. This is called "discovery bias" for newly discovered objects: they frequently show apparent hazard that disappears with additional data. The Apophis case is notable because the initial 2.7% probability was unusually high (most objects never exceed Torino 1), but the outcome (rapid demotion to 0) was entirely typical. The Torino Scale serves a communication function: at Torino 4, observatories worldwide were alerted to prioritise follow-up observations, which is exactly what should happen. Option B is incorrect: deflection mission planning is not triggered by initial uncertain orbital solutions — that would waste enormous resources on objects that later prove harmless. Option C incorrectly suggests the Torino Scale caused panic; in reality, the media response to Apophis was disproportionate, but the Torino Scale itself performed its designed function. Option D is incorrect and unfair to the discovery teams, who followed standard protocols.',
        },
        {
          q: `A 200-metre stony asteroid and a 200-metre iron asteroid enter Earth\'s atmosphere at the same velocity and angle. Why does the stony asteroid present a fundamentally different hazard profile than the iron asteroid, despite having nearly the same size?`,
          a: [
            'Stony asteroids (density ~2,500–3,500 kg/m³) have lower tensile strength than iron meteorites (~200–400 MPa) and fragment catastrophically under atmospheric ram pressure at ~5–15 km (9.3 mi) altitude, depositing most energy as an airburst; iron asteroids survive atmospheric transit to the surface and create a hypervelocity crater, with effects concentrated locally but much smaller regional airburst component',
            'Stony asteroids are more hazardous than iron asteroids of the same size because they are more common; the higher frequency of stony impactors means the expected annual risk from 200-m stony objects exceeds that from 200-m iron objects by a factor of ~30',
            'Iron asteroids are more dangerous because their higher density (~7,900 kg/m³ vs ~2,500 kg/m³) means they carry ~3× more kinetic energy than a stony asteroid of the same diameter; both reach the surface and form craters, but iron craters are always larger',
            'There is no significant difference in hazard profile between stony and iron asteroids of the same diameter: atmospheric entry heating vaporises both completely before they reach the ground, and the hazard is determined entirely by total kinetic energy, which is the same for objects of equal diameter at equal velocity',
          ],
          correct: 0,
          explain: `This is one of the most practically important distinctions in impact hazard assessment. A 200-m stony asteroid has lower bulk tensile strength (~1–10 MPa for porous chondrite material) than a 200-m iron object (~200–400 MPa for solid iron-nickel). As the stony object decelerates from ~15–20 km/s in the upper atmosphere, aerodynamic ram pressure (ρ_atm × v² / 2) quickly exceeds the object\'s tensile strength, causing it to fragment and explode at altitude as an airburst — distributing its kinetic energy over a large volume of atmosphere rather than concentrating it at a surface point. The resulting blast wave can devastate a wide area (thousands of km²) but leaves no crater. A 200-m iron meteorite, by contrast, has sufficient strength to remain intact through atmospheric passage, striking the ground at hypervelocity and creating a ~4–5 km (3.1 mi) diameter crater, with effects concentrated in the immediate crater region but extending regionally from the impact blast. The key point: both scenarios are catastrophic for any nearby population, but the stony airburst is harder to predict in advance (since radar and optical observation are needed to determine composition) and distributes energy differently. Option B is factually correct that stony asteroids are more common but irrelevant to the hazard profile of a specific object at a specific size. Option C has a factual error: both objects reach the surface in this scenario only for the iron case; stony objects of this size airburst. Option D is incorrect: the two objects carry different kinetic energy because they have different densities at equal diameter (iron is ~3× denser), and neither is completely vaporised in the atmosphere at this size.`,
        },
        {
          q: 'The gravity tractor concept proposes hovering a spacecraft near a threatening asteroid without touching it to gradually deflect its orbit. What is the physical principle behind this method, and what is the key advantage and key disadvantage compared to a kinetic impactor?',
          a: [
            'The gravity tractor uses mutual gravitational attraction between spacecraft and asteroid: the spacecraft uses its thrusters to hover slightly ahead of the asteroid in its orbit, and gravity pulls the asteroid forward toward the spacecraft while the thrusters counteract the reaction force on the spacecraft; advantage: works on rubble piles that would shatter under kinetic impact; disadvantage: requires decades of hover time and very large spacecraft for modest deflection',
            'The gravity tractor uses the spacecraft\'s solar panels to focus sunlight onto the asteroid\'s surface, ablating material and creating a thrust plume; advantage: works at any distance without physical contact; disadvantage: requires a spacecraft with panels larger than the asteroid itself to focus enough power',
            'The gravity tractor uses electromagnetic repulsion between the spacecraft\'s charged hull and the asteroid\'s natural electrostatic charge; advantage: instantaneous deflection without travel time; disadvantage: requires knowing the asteroid\'s charge state precisely, which varies with solar wind conditions',
            'The gravity tractor uses a high-powered ion beam directed at the asteroid\'s surface to ablate material; advantage: more energy-efficient than kinetic impactor; disadvantage: the beam reaction force pushes the spacecraft away from the asteroid, requiring constant orbital corrections',
          ],
          correct: 0,
          explain: `The gravity tractor concept (proposed by Lu & Love in Nature, 2005) exploits mutual gravitational attraction. The spacecraft maintains a fixed position slightly ahead of the asteroid along its orbital path, using its ion thrusters to counteract the gravitational pull of the asteroid (which would otherwise cause the spacecraft to fall onto the asteroid\'s surface). The reaction to this hovering is that the asteroid experiences a small but continuous gravitational tug toward the spacecraft — and since the spacecraft is positioned ahead of the asteroid in its orbit, this tug has a component that changes the asteroid\'s orbital velocity. Given enough time (decades), even this tiny continuous force can deflect a hazardous asteroid enough to miss Earth. The key advantage is that the gravity tractor works for any surface composition and structure, including rubble piles that would shatter and scatter under kinetic impact — potentially making the situation worse by replacing one large threat with many smaller ones. The key disadvantage is the extremely long lead time required: a ~1-tonne spacecraft would need ~20 years to deflect a 200-m asteroid by one Earth radius, requiring discovery decades in advance. Option B describes laser ablation, not the gravity tractor. Option C incorrectly describes an electromagnetic mechanism; asteroids have very small electrostatic charges insufficient for practical deflection. Option D describes the "ion beam shepherd" concept, a real alternative proposal but distinct from the gravity tractor.`,
        },
      ],
    },
  ],
}

export default impactHazardsOnEarth
