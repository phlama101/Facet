import { Telescope, Thermometer, Globe, Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const habitableZones: Lesson = {
  id: 'abio-101-1-3-2',
  title: 'Habitable Zones and Planetary Conditions',
  track: 'ast',
  trackName: 'Astrobiology',
  level: 'Foundations',
  duration: '13 min',
  xpReward: 130,
  description: 'The classical circumstellar habitable zone, its inner and outer edges, and the many additional factors that determine planetary habitability',
  sources: [
    { org: 'NASA',   title: 'NASA Exoplanet Archive',           url: 'https://exoplanetarchive.ipac.caltech.edu/' },
    { org: 'ESA',    title: 'ESA PLATO Mission',                url: 'https://www.esa.int/' },
    { org: 'Nature', title: 'Nature — Habitable Zone Research', url: 'https://www.nature.com/' },
    { org: 'AGU',    title: 'AGU — Planetary Science',          url: 'https://www.agu.org/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Where stars are just right: the habitable zone concept and its complications',
      body: `The search for life beyond Earth begins with a deceptively simple question: around which stars, and at which distances from those stars, could a rocky planet maintain liquid water on its surface? The **circumstellar habitable zone** (CHZ) — colloquially the "Goldilocks zone" — is the annular region around a star where the stellar flux is neither so intense that a planet\'s water boils away irreversibly, nor so weak that water freezes globally and permanently. The concept was introduced qualitatively by astrophysicist Su-Shu Huang in 1959 and placed on a rigorous radiative-convective climate-model footing by James Kasting, Daniel Whitmire, and Ray Reynolds in their landmark 1993 paper in *Icarus*. The most widely used modern update is the Kopparapu et al. (2013) formulation, which uses one-dimensional climate models with updated H₂O and CO₂ absorption coefficients to calculate flux boundaries as a function of stellar effective temperature.

The **inner edge** of the habitable zone is set by two related but distinct thresholds. The **moist greenhouse threshold** (~0.99 AU for the Sun) occurs when a planet\'s stratosphere becomes water-vapour-rich; UV photolysis of stratospheric H₂O and subsequent hydrogen escape to space then irreversibly desiccates the planet over geological time — this is thought to be the fate Earth would face if insolation increased by ~10%. The more extreme **runaway greenhouse threshold** (~0.97 AU for the Sun) occurs when the planet\'s oceans evaporate entirely; above this flux no liquid water can exist at the surface regardless of atmospheric pressure. Venus, orbiting at 0.72 AU with a present-day surface temperature of 465°C, is the archetype of a world that has passed both thresholds, and isotopic evidence from its atmospheric D/H ratio (~150× Earth\'s) records the loss of a prior water inventory.

The **outer edge** is bounded by CO₂ greenhouse limitations. As a planet moves further from its star, surface temperatures drop and more CO₂ must accumulate (via the carbonate-silicate geochemical cycle) to maintain warmth. The **maximum CO₂ greenhouse limit** (~1.67 AU for the Sun) is the distance at which even a pure CO₂ atmosphere at 8 bar cannot maintain above-freezing surface temperatures, because CO₂ also backscatters incoming shortwave radiation. Beyond ~1.70 AU, CO₂ itself begins to condense as dry ice, collapsing the greenhouse effect — the **first CO₂ condensation limit**. The Sun\'s conservative habitable zone spans approximately **0.99–1.70 AU**; adopting the more optimistic early-Mars limit (Mars shows evidence of liquid water ~3.8 Ga) and the recent Venus limit expands the range to **0.75–1.77 AU** (Kopparapu et al. 2013).

Discoveries of exoplanets around M-dwarf (red dwarf) stars — which constitute ~75% of all stars in the galaxy — have highlighted several unique habitability challenges. M-dwarf habitable zones lie much closer to the star (0.1–0.4 AU typically, compared to ~1 AU for Sun-like G dwarfs), and at such short orbital periods planets are susceptible to **tidal locking** (also called synchronous rotation): gravitational tidal torques despun the planet\'s rotation until the same hemisphere permanently faces the star, creating extreme thermal gradients between a perpetually-illuminated dayside and a perpetually-dark nightside. 3D general circulation models suggest that atmospheric heat redistribution may keep night-side temperatures above freezing for sufficiently thick atmospheres, but the dynamics remain uncertain and may depend strongly on ocean circulation. A second challenge is the intense UV and X-ray radiation environment: young M dwarfs are prolific flare stars that emit powerful UV/XUV bursts capable of ionising and sputtering away planetary atmospheres, particularly if the planet lacks a strong intrinsic magnetic field. Proxima Centauri b — a ~1.30 Earth-mass planet orbiting Proxima Centauri at 0.0485 AU with an orbital period of 11.2 days, discovered in 2016 — is the nearest known exoplanet in a habitable zone but faces all these challenges as it orbits a highly active M-dwarf flare star just 4.24 light-years from Earth.

The **TRAPPIST-1 system** (discovered 2017, 39.6 light-years away) is the most astrobiologically compelling planetary system known. The star is an ultracool M8 dwarf (0.089 solar masses, 0.121 solar radii) orbited by seven Earth-sized rocky planets (TRAPPIST-1b through h) at orbital distances of 0.011–0.063 AU. Three of these — **TRAPPIST-1d, e, and f** — fall within the conservative-to-optimistic habitable zone, with TRAPPIST-1e receiving almost exactly Earth-like stellar flux. The system\'s compactness means each planet is in or near mean-motion orbital resonance, producing measurable transit-timing variations that allow precise mass determinations: the planets have bulk densities consistent with rocky compositions, with some evidence for water-rich or volatile-rich mantles in the outer members.

Even if a planet orbits within the classical CHZ, habitability is not guaranteed. A planetary **magnetic field** — generated by a dynamo in a convecting metallic core — deflects the stellar wind and high-energy particles that would otherwise strip the atmosphere over geological time; Mars lost its magnetic field ~4.0 Ga and subsequently lost most of its atmosphere and surface water. **Plate tectonics** drives the carbonate-silicate cycle that regulates atmospheric CO₂ and maintains surface temperatures in the habitable range over billion-year timescales; without plate tectonics a planet may stagnate into a "lid" regime with elevated volcanism and CO₂ build-up (super-greenhouse) or atmospheric depletion. **Obliquity** (axial tilt) and **orbital eccentricity** modulate seasonal extremes: high eccentricity can drive annual temperature swings that freeze oceans during aphelion or bake them during perihelion, while extreme obliquity can lead to polar ice caps that migrate to the equator. The **ocean:land ratio** affects weathering rates, biological productivity, and climate stability.

At the galactic scale, the **galactic habitable zone** (GHZ) concept, developed by Charles Lineweaver and colleagues, adds a further spatial filter. Stars near the galactic centre experience high supernova rates and intense radiation fields that sterilise planetary surfaces and strip atmospheres; stars in the outer galaxy have low metallicity and may lack sufficient heavy elements to form rocky planets. The GHZ — roughly 7–9 kpc from the galactic centre for a Milky Way-like galaxy — coincides with intermediate metallicity and lower supernova rates, and this is where most Sun-like stars with confirmed exoplanets reside. This is also the core argument of the **Rare Earth hypothesis** (Ward & Brownlee 2000): Earth is habitable not just because of distance from the Sun, but because of an improbably fortunate combination of galactic location, stellar type, planetary mass, moon stabilisation of obliquity, Jupiter acting as an impact shield, and plate tectonics operating for 4 billion years.

Finally, liquid water and thus habitability need not be confined to planetary surfaces within the CHZ. **Subsurface oceans** maintained by tidal heating — such as those inferred beneath the ice shells of Europa (Jovian system) and Enceladus (Saturnian system), both well beyond the classical snow line — demonstrate that the CHZ is a necessary condition only for surface liquid water. The discovery of active plumes of water vapour and organic compounds venting from Enceladus\'s south pole, sampled directly by the Cassini spacecraft, has made sub-ice habitability a central focus of planetary science. This forces a broader definition: the habitable zone for life as we might conceive it is considerably larger than the classical CHZ, extending wherever liquid water, chemical energy gradients, and organic chemistry can coexist — even in the outer solar system and beyond.`,
      keyTerms: [
        {
          term: 'circumstellar habitable zone',
          def: 'The range of orbital distances around a star within which a rocky planet with a CO₂-H₂O-N₂ atmosphere could maintain liquid water on its surface. The boundaries are set by the runaway greenhouse effect at the inner edge and CO₂ condensation or maximum greenhouse warming at the outer edge. For the Sun, the conservative CHZ spans approximately 0.99–1.70 AU (Kopparapu et al. 2013).',
        },
        {
          term: 'runaway greenhouse threshold',
          def: `The stellar flux level (~0.97 AU equivalent for the Sun) at which a planet\'s surface oceans evaporate entirely and water vapour dominates the atmosphere, creating an irreversible positive feedback loop. Solar radiation absorbed by the water-vapour atmosphere cannot be balanced by thermal emission, so temperatures rise without limit until all surface water is lost. Venus is the archetype of a world that has crossed this threshold.`,
        },
        {
          term: 'tidal locking',
          def: `A state in which a planet\'s rotation period equals its orbital period, so the same hemisphere permanently faces the host star. Caused by gravitational tidal dissipation over timescales that scale as the inverse sixth power of orbital distance, tidal locking is expected for all rocky planets in M-dwarf habitable zones. It creates permanent day-night temperature contrasts that complicate atmospheric and ocean circulation models.`,
        },
        {
          term: 'galactic habitable zone',
          def: `The annular region of a galaxy — roughly 7–9 kpc from the Milky Way\'s centre — where stellar metallicity is sufficient to form rocky planets, supernova rates are low enough not to sterilise planetary surfaces, and the radiation environment is clement enough for complex chemistry to persist over geological timescales. Proposed by Lineweaver et al. (2004) as a galactic-scale filter on planetary habitability analogous to the circumstellar habitable zone.`,
        },
        {
          term: 'TRAPPIST-1',
          def: 'An ultracool M8-dwarf star 39.6 light-years from Earth, hosting seven Earth-sized rocky planets discovered via transit photometry. Three planets (d, e, f) lie in the conservative-to-optimistic habitable zone, with TRAPPIST-1e receiving near-Earth-equivalent stellar flux. The system is the premier laboratory for comparative terrestrial planet science and the search for biosignatures in M-dwarf habitable zones.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'The Habitable Zone: Classical Boundaries and Complicating Factors',
      body: `The classical circumstellar habitable zone provides the foundational framework for targeting exoplanet searches, but a planet\'s true habitability is determined by the interplay of stellar properties, planetary geophysics, atmospheric chemistry, and even galactic environment. Understanding each factor is essential for evaluating which worlds are most likely to harbour life.`,
      cards: [
        {
          name: 'The Classical Circumstellar Habitable Zone',
          icon: Thermometer,
          color: BRAND.accent,
          desc: 'Defined by Kasting et al. (1993) and refined by Kopparapu et al. (2013), the CHZ spans ~0.99–1.70 AU (conservative) around the Sun. The inner edge is set by the moist/runaway greenhouse effect; the outer edge by maximum CO₂ greenhouse warming and CO₂ condensation. The boundaries scale with stellar luminosity and effective temperature.',
          examples: 'Sun conservative CHZ: 0.99–1.70 AU; optimistic: 0.75–1.77 AU. Venus at 0.72 AU: past runaway greenhouse (D/H ratio ~150× Earth). Mars at 1.52 AU: marginally in optimistic zone, evidence of past liquid water ~3.8 Ga. Proxima Centauri b in CHZ at 0.0485 AU.',
        },
        {
          name: 'M-Dwarf Habitability Challenges',
          icon: Telescope,
          color: BRAND.accentHot,
          desc: 'M dwarfs host the closest-in habitable zones (0.1–0.4 AU), making planets vulnerable to tidal locking, intense UV/XUV flares, and atmospheric erosion by stellar wind. Despite comprising ~75% of all stars, M dwarfs present unique obstacles — yet TRAPPIST-1 and Proxima Centauri b remain prime biosignature targets.',
          examples: `TRAPPIST-1: 7 Earth-sized planets, 3 in HZ (d, e, f), 39.6 ly away; ultracool M8 dwarf. Proxima Centauri b: 1.30 Earth mass, 11.2-day orbit, strong UV flaring. M-dwarf HZ period: days to weeks vs. Earth\'s 365-day orbit. Atmospheric escape rate elevated by XUV flux orders of magnitude above solar.`,
        },
        {
          name: 'Planetary Factors Beyond Distance',
          icon: Globe,
          color: BRAND.jade,
          desc: `A planet\'s position in the CHZ is necessary but not sufficient for habitability. Magnetic field strength, plate tectonic activity, obliquity, orbital eccentricity, and ocean:land ratio all modulate long-term climate stability, atmospheric retention, and the availability of chemical energy and nutrients for life.`,
          examples: `Mars: lost magnetic field ~4.0 Ga, atmosphere stripped by solar wind, surface water lost. Venus: no plate tectonics, runaway CO₂ build-up, 465°C surface. Earth: plate tectonics regulates CO₂ via carbonate-silicate cycle, magnetic field protects atmosphere. Moon stabilises Earth\'s obliquity at ~23.5° ± 2.4°.`,
        },
        {
          name: 'The Galactic Habitable Zone',
          icon: Activity,
          color: BRAND.gold,
          desc: 'Habitability operates at the galactic scale too: the GHZ (Lineweaver et al. 2004) filters out galactic-centre regions (high supernova rates, radiation) and outer-galaxy regions (low metallicity, insufficient rock-forming elements), leaving a ring at ~7–9 kpc as the optimal locale for complex life — supporting the Rare Earth hypothesis.',
          examples: `Galactic centre: supernova rate ~10× Solar neighbourhood, sterilising radiation fields. Outer galaxy: [Fe/H] < −1, insufficient heavy elements for rocky planets. Solar neighbourhood at 8 kpc: intermediate metallicity, low supernova rate. Rare Earth (Ward & Brownlee 2000): Earth\'s habitability requires ~8 simultaneous improbable factors.`,
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Habitable Zone Boundaries: From Stellar Flux to Surface Conditions',
      body: 'This flow diagram traces how the physical and chemical chain from stellar properties to surface liquid water determines whether a planet falls within the habitable zone — and how additional planetary and galactic factors further refine whether that zone translates to true habitability.',
      interaction: {
        type: 'flow-simulator' as const,
        description: `Follow the causal chain from a star\'s luminosity and spectral type through orbital distance and atmospheric physics to the surface conditions required for liquid water and, ultimately, habitability classification`,
        nodes: [
          {
            id: 'stellar-luminosity',
            label: 'Stellar Luminosity and Type',
            description: `A star\'s luminosity (L★) and effective temperature (T★) set the flux received at any given orbital distance. Luminosity scales as ~L★/4πd² at distance d. G dwarfs like the Sun (L★ = 1 L☉, T★ = 5778 K) have CHZs near 1 AU; M dwarfs (L★ ~ 0.001–0.08 L☉) have CHZs at 0.05–0.4 AU. The stellar spectrum also determines UV/XUV output and potential for flares — critical for atmospheric retention.`,
            color: BRAND.gold,
          },
          {
            id: 'orbital-distance',
            label: 'Orbital Distance',
            description: `The planet\'s semi-major axis determines the stellar flux incident at the top of the atmosphere. The effective flux (S_eff) relative to Earth is the key parameter in Kopparapu et al. (2013) CHZ calculations. Inner edge: S_eff ~ 1.0107 (moist greenhouse) to ~1.0776 (runaway greenhouse). Outer edge: S_eff ~ 0.3507 (maximum CO₂ greenhouse) to ~0.3207 (first CO₂ condensation). Orbital eccentricity modulates instantaneous flux throughout the year.`,
            color: BRAND.accent,
          },
          {
            id: 'surface-temperature',
            label: 'Surface Temperature and Pressure',
            description: 'Radiative-convective atmospheric models translate stellar flux, planetary albedo, atmospheric composition (H₂O, CO₂, N₂), and surface pressure into surface temperature. Below 0°C globally → freeze; above ~374°C (critical point of water) → no liquid phase. The carbonate-silicate cycle acts as a thermostat on billion-year timescales by drawing down or releasing CO₂ in response to temperature — but only if plate tectonics is active.',
            color: BRAND.accentHot,
          },
          {
            id: 'liquid-water',
            label: 'Liquid Water Stability',
            description: 'Liquid water is stable at the surface only within its phase diagram conditions: 0–100°C at 1 bar, but extending to higher temperatures under elevated pressure. Venus demonstrates the inner-edge fate: past its runaway greenhouse threshold, all water was photolysed and hydrogen escaped. Beyond the outer edge, CO₂ condensation triggers a snowball state from which recovery may be impossible. Subsurface liquid water (e.g., tidal heating on icy moons) extends beyond these surface limits.',
            color: BRAND.jade,
          },
          {
            id: 'additional-factors',
            label: 'Additional Habitability Factors',
            description: `Planetary magnetic field strength (shields from stellar wind and cosmic rays, preserves atmosphere); plate tectonic activity (drives carbonate-silicate cycle, delivers nutrients, regulates CO₂); obliquity stability (Earth\'s Moon stabilises tilt to ~23.5°, avoiding extreme seasonal cycles); ocean:land ratio (affects weathering, CO₂ drawdown, nutrient cycling); galactic location (supernova rate, metallicity, UV background from galactic centre).`,
            color: BRAND.amethyst,
          },
          {
            id: 'habitable-classification',
            label: 'Habitable World Classification',
            description: 'Integrating stellar flux, atmospheric physics, and planetary geophysical factors yields a habitability assessment. Conservative CHZ: high confidence for surface liquid water (0.99–1.70 AU for the Sun). Optimistic CHZ: plausible with additional greenhouse gases or subsurface oceans (0.75–1.77 AU). Beyond CHZ: subsurface habitability possible via tidal heating (Europa, Enceladus). Rare Earth filter: most CHZ planets may lack the geophysical and galactic conditions for sustained complex life.',
            color: BRAND.coral,
          },
        ],
        edges: [
          { from: 'stellar-luminosity', to: 'orbital-distance',    label: 'Flux = L★ / 4πd² — luminosity and distance set incident stellar energy' },
          { from: 'orbital-distance',   to: 'surface-temperature', label: 'Radiative-convective climate models (Kasting 1993; Kopparapu 2013) translate flux to surface T' },
          { from: 'surface-temperature', to: 'liquid-water',       label: 'Phase equilibrium: 0–100°C at 1 bar permits liquid surface water; CO₂ greenhouse extends outer edge' },
          { from: 'liquid-water',        to: 'additional-factors', label: 'Liquid water is necessary but not sufficient — geophysical and galactic filters apply' },
          { from: 'additional-factors',  to: 'habitable-classification', label: 'Combined assessment: conservative CHZ + magnetic field + tectonics + galactic location → habitability score' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The inner edge of the circumstellar habitable zone is defined by two related flux thresholds. What physical process determines the inner edge, and what distinguishes the moist greenhouse threshold from the runaway greenhouse threshold?',
          a: [
            'The inner edge is defined by the point at which a planet\'s surface pressure exceeds 100 bar due to CO₂ volcanic outgassing; the moist greenhouse threshold occurs when CO₂ pressure reaches 10 bar and the runaway threshold when it exceeds 100 bar, causing irreversible atmospheric collapse',
            'The inner edge is defined by water-loss processes: the moist greenhouse threshold (~0.99 AU equivalent) occurs when a water-vapour-rich stratosphere allows UV photolysis and hydrogen escape to slowly desiccate the planet over geological time, while the runaway greenhouse threshold (~0.97 AU equivalent) occurs when incoming stellar energy exceeds the maximum thermal emission possible from a water-vapour atmosphere, causing the oceans to evaporate entirely and irreversibly',
            'Both thresholds mark the same physical process — total ocean evaporation — but differ only in timescale: the moist greenhouse threshold triggers ocean loss in 10 million years whereas the runaway greenhouse threshold triggers ocean loss in less than 1 million years, and this timescale difference is used to define the conservative versus optimistic inner-edge boundaries',
            'The inner edge is defined by photochemical ozone destruction: the moist greenhouse threshold is where UV radiation destroys 50% of stratospheric ozone, and the runaway greenhouse threshold is where ozone is completely destroyed, exposing the surface to lethal UV that sterilises any life and drives water photolysis at the surface rather than the stratosphere',
          ],
          correct: 1,
          explain: `The inner edge of the habitable zone is governed by the fate of atmospheric and surface water under increasing stellar flux. At the moist greenhouse threshold (S_eff ~ 1.0107 for a Sun-like star, corresponding to ~0.99 AU), surface temperatures rise enough that water vapour permeates the stratosphere rather than being cold-trapped at the tropopause. Ultraviolet photons then photodissociate stratospheric H₂O into H and OH; the light hydrogen atoms achieve escape velocity and are lost to space. This process is slow — planetary desiccation takes hundreds of millions to billions of years — but irreversible on geological timescales. At the runaway greenhouse threshold (S_eff ~ 1.0776, ~0.97 AU), a more dramatic instability is triggered: the Stefan-Boltzmann thermal emission from a water-vapour-dominated atmosphere reaches a maximum value (the Simpson-Nakajima limit, ~310 W/m² for Earth) that cannot balance the incoming stellar flux. No amount of radiative cooling can prevent the oceans from evaporating entirely; the planet enters a permanent runaway state. Venus at 0.72 AU exemplifies a world past both thresholds, evidenced by its extreme D/H ratio (~150× Earth\'s) indicating the isotopic enrichment produced by preferential loss of lighter ¹H over deuterium during atmospheric escape. Options A and C misidentify the physical mechanism. Option D conflates ozone photochemistry (a secondary effect) with the primary habitability threshold.`,
        },
        {
          q: 'The TRAPPIST-1 system, discovered in 2017, is considered one of the most astrobiologically significant planetary systems known. What specific properties of this system make it so important for the search for life beyond Earth?',
          a: [
            'TRAPPIST-1 is significant because it is the nearest known star system to Earth with planets in the habitable zone; at 4.24 light-years, its planets could theoretically be reached by a spacecraft within a human lifetime, making it the primary target for near-term interstellar mission planning and direct atmospheric sampling',
            'TRAPPIST-1 hosts seven Earth-sized rocky planets around an ultracool M8 dwarf 39.6 light-years away, with three planets (d, e, f) in the conservative-to-optimistic habitable zone — including TRAPPIST-1e, which receives near-Earth-equivalent stellar flux. Their transit geometry and orbital resonances allow precise mass measurements confirming rocky compositions, enabling comparative atmospheric characterisation with JWST across multiple habitable-zone worlds simultaneously',
            'TRAPPIST-1 is significant because the star\'s low luminosity means habitable-zone planets orbit with very long periods of several Earth years, reducing the probability of tidal locking and making TRAPPIST-1 the only known M-dwarf system where habitable-zone planets are unlikely to be tidally locked — thus avoiding the day-night thermal extreme that threatens atmospheric stability',
            'TRAPPIST-1 is significant primarily because spectroscopic observations with the Hubble Space Telescope have already detected oxygen and water vapour absorption features in the atmospheres of two of its habitable-zone planets, providing the first direct evidence of potentially habitable conditions on rocky exoplanets and making it a confirmed biosignature candidate',
          ],
          correct: 1,
          explain: 'The TRAPPIST-1 system is exceptional for several compounding reasons. The host star is an ultracool dwarf (M8 spectral type, 0.089 solar masses, T★ ~ 2566 K) located 39.6 light-years from Earth. Its seven rocky planets (b through h) span orbital distances of 0.011–0.063 AU with periods of 1.5–18.8 days. Critically, three planets — d, e, and f — fall within the habitable zone as defined by Kopparapu et al. (2013), with TRAPPIST-1e receiving a stellar flux of ~0.66 S☉ placing it comfortably in the conservative zone; planet d is at the inner optimistic edge (~1.14 S☉) and planet f at the outer optimistic edge (~0.38 S☉). The compact orbital configuration produces transit-timing variations (TTVs) that allow masses to be determined to ~5–10% precision, confirming all seven planets are rocky with bulk densities ranging from ~0.6–1.0 g/cm³ relative to Earth. The edge-on orbital geometry (system nearly face-on from Earth) means all planets transit, making atmospheric characterisation with JWST transmission spectroscopy feasible for multiple worlds simultaneously — no other known system offers this combination. Option A describes Proxima Centauri, not TRAPPIST-1 (39.6 vs 4.24 ly). Option C is incorrect: habitable-zone planets around M8 dwarfs orbit at ~0.03–0.05 AU with ~10-day periods and are strongly expected to be tidally locked. Option D is false: no biosignatures have been confirmed in any exoplanet atmosphere; JWST results as of 2025 are preliminary and inconclusive.',
        },
        {
          q: 'Tidal locking is considered a major habitability challenge for rocky planets in M-dwarf habitable zones. Why does tidal locking occur preferentially for these planets, and what are the primary habitability implications of a planet being tidally locked to its host star?',
          a: [
            'Tidal locking occurs because M dwarfs emit intense magnetic fields that couple to the planetary interior and brake its rotation via electromagnetic torques; this is fundamentally different from the gravitational mechanism that locked the Moon to Earth, and the magnetic braking is irreversible even if the planet migrates to a larger orbital distance later in the system\'s history',
            'Tidal locking timescales scale as the sixth power of orbital distance (τ ∝ d⁶ / M★), so planets in M-dwarf habitable zones — which orbit at 0.05–0.4 AU compared to ~1 AU for Sun-like stars — experience tidal dissipation rates orders of magnitude higher, achieving synchronous rotation within hundreds of millions of years. The result is a permanent dayside receiving constant stellar flux and a dark nightside potentially cold enough to trap all atmospheric volatiles as surface ice, threatening atmospheric collapse',
            'Tidal locking is significant primarily because it doubles the incident UV radiation on the dayside hemisphere relative to an unlocked planet; since the tidally-locked planet never rotates, the dayside accumulates UV damage continuously without the night-side recovery period that allows DNA repair enzymes to function, sterilising any surface life through cumulative photochemical damage',
            'Tidal locking creates habitability problems because it causes the planet to develop a toroidal magnetic field geometry instead of a dipolar one; this toroidal geometry cannot deflect the stellar wind efficiently, so the dayside atmosphere is rapidly stripped even if the planetary dynamo is active, and only the night-side retains any atmosphere — creating a thin crescent of potentially habitable conditions at the terminator',
          ],
          correct: 1,
          explain: `Tidal locking arises from gravitational tidal dissipation: the host star raises a tidal bulge on the planet, and if the planet rotates faster than its orbital period, friction between the deforming interior and the tidal bulge transfers angular momentum from the planet\'s spin to the orbit, slowing rotation. The synchronisation timescale scales approximately as τ_sync ∝ (a/R_p)⁶ × (M_p/M★) × Q, where a is orbital distance, R_p is planetary radius, and Q is the tidal quality factor. Because M-dwarf habitable zones are at 0.05–0.4 AU (vs. ~1 AU for G dwarfs), this d⁶ scaling makes tidal locking many orders of magnitude faster — most M-dwarf habitable-zone planets are expected to synchronise within < 1 Gyr, well within stellar lifetimes. The primary habitability concern is atmospheric collapse: the dark nightside can reach temperatures well below −150°C, potentially cold-trapping CO₂ and N₂ as ices at the nightside surface and draining the atmosphere. 3D general circulation model (GCM) studies (Joshi et al. 1997; Wordsworth et al. 2011) show that sufficiently thick atmospheres (> ~0.1 bar CO₂ or > ~1 bar N₂) can redistribute heat and prevent collapse, but this remains an open question dependent on ocean circulation, topography, and initial atmospheric inventory. Option A incorrectly attributes locking to magnetic braking (a separate process operating on stellar rotation, not planetary spin). Option C confuses tidal locking with UV exposure effects — these are separate concerns. Option D describes a real but secondary concern; magnetic geometry changes with rotation rate but the primary concern is thermal, not magnetic.`,
        },
        {
          q: 'The galactic habitable zone (GHZ) extends the concept of habitability to the galactic scale. What two opposing constraints define the GHZ, and how does this concept complement or challenge the classical circumstellar habitable zone framework?',
          a: [
            'The GHZ is bounded on the inner side by the galactic magnetic field, which deflects cosmic rays away from the galactic plane and sterilises planets through secondary radiation; on the outer side it is bounded by the absence of brown dwarf companions, which are required to gravitationally shield rocky planets from asteroid impacts. The GHZ thus adds an impact-rate filter that the CHZ framework ignores entirely',
            'The GHZ (Lineweather et al. 2004) is bounded on its inner side by elevated supernova rates and intense radiation fields near the galactic centre that sterilise planetary surfaces and erode atmospheres, and on its outer side by low stellar metallicity ([Fe/H] ≪ 0) in the outer galaxy that limits the formation of rocky planets from insufficient heavy elements. Located at ~7–9 kpc from the Milky Way\'s centre, the GHZ shows that even CHZ planets in the wrong galactic neighbourhood may be sterilised or never form in the first place — making galactic context a necessary additional filter',
            'The GHZ is bounded on the inner side by the high density of M-dwarf stars near the galactic centre, which outcompete G-type stars for planetary material and produce only tidally locked rocky planets incapable of sustaining life; on the outer side it is bounded by the galactic dark matter halo density, which imposes an upper limit on stellar metallicity beyond 15 kpc, preventing the formation of the Moon-forming impactors required for planetary obliquity stabilisation',
            'The GHZ is essentially equivalent to the circumstellar habitable zone scaled to galactic dimensions and adds no new physical constraints beyond those already captured by the CHZ; its primary function is pedagogical — helping students visualise that stars themselves have preferred habitable locations, analogous to the preferred orbital distances captured by the CHZ',
          ],
          correct: 1,
          explain: `The galactic habitable zone, proposed by Lineweaver, Fenner, and Gibson (2004), recognises that habitability is not determined solely by a planet\'s relationship to its host star but also by its location within the galaxy. Two opposing gradients define its boundaries. Moving inward toward the galactic centre, the stellar density and supernova rate increase dramatically: core-collapse supernovae and Type Ia events produce intense gamma-ray and X-ray bursts (beaming and isotropic respectively) and energetic cosmic rays that can trigger mass extinctions, strip ozone layers, and ionise atmospheres within ~8 pc of the event. The galactic centre also hosts a supermassive black hole (Sgr A*) whose periodic activity and the surrounding dense stellar population create an inhospitable radiation environment. Moving outward toward the galactic periphery, stellar metallicity — the abundance of elements heavier than helium — declines sharply (the galactic metallicity gradient is roughly −0.05 dex/kpc). At [Fe/H] ≪ 0, the protoplanetary disk contains insufficient Si, Fe, Mg, and O to build Earth-mass rocky planets or supply the silicate mantle and iron core needed for plate tectonics and a magnetic dynamo. The GHZ is therefore a ring at ~7–9 kpc where both conditions are simultaneously satisfied. This concept directly complements the CHZ: a planet can occupy the CHZ of its star yet still be sterilised by a nearby supernova or fail to form a rocky body at all due to low metallicity. Option A invents non-existent mechanisms. Option C conflates stellar demographics with dark matter physics and misrepresents metallicity trends. Option D is incorrect: the GHZ introduces substantive physical constraints with observational support from exoplanet occurrence rates as a function of galactic metallicity.`,
        },
        {
          q: `Icy moons such as Europa (Jupiter system) and Enceladus (Saturn system) are considered prime targets in the search for extraterrestrial life despite orbiting far beyond the Sun\'s classical habitable zone. What mechanism sustains potentially habitable liquid water oceans on these bodies, and what evidence supports the existence of these oceans?`,
          a: [
            'Europa and Enceladus maintain liquid water oceans through radioactive decay in their rocky cores: the decay of uranium, thorium, and potassium-40 generates sufficient heat to melt ice at depth, and because both moons formed with high concentrations of radioactive elements (being outer solar system bodies with high metallicity), this heat flux has persisted for 4.5 billion years and will continue for another ~5 billion years',
            'Europa and Enceladus sustain subsurface liquid water oceans primarily through **tidal heating**: gravitational interactions with their massive host planets (Jupiter and Saturn respectively) and neighbouring moons maintain non-zero orbital eccentricities via orbital resonance, causing repeated tidal flexing of the moon\'s interior that dissipates as frictional heat. For Europa, Hubble magnetometer data and the Galileo spacecraft\'s induced magnetic field measurements confirm a global conducting layer (saltwater ocean) beneath the ice; for Enceladus, Cassini directly sampled water vapour, ice particles, H₂, CO₂, and organic compounds venting from south polar plumes fed by a global subsurface ocean confirmed by libration measurements',
            'Both moons sustain liquid water through pressure-melting at the base of their thick ice shells: the overlying ice weight creates pressures exceeding 100 MPa at depth, which depresses the melting point of water ice below the ambient temperature of the outer solar system. This pressure-melting mechanism requires no internal heat source and is the same process responsible for glacier movement on Earth, scaled up to planetary dimensions by the greater mass of the overlying ice',
            'Europa and Enceladus retain liquid water because they orbit within Jupiter\'s and Saturn\'s magnetospheres respectively, which trap solar wind particles and use them to heat the moon interiors via ohmic dissipation; without this magnetospheric insulation the moons would freeze solid, and future missions plan to exploit this heating by deploying magnetic field amplifiers in the magnetosphere to increase the ohmic heating rate and confirm liquid water persistence',
          ],
          correct: 1,
          explain: `Tidal heating is the primary mechanism sustaining liquid-water oceans on Europa and Enceladus. Both moons are locked in mean-motion orbital resonances — Europa in the Laplace resonance with Io and Ganymede (1:2:4 period ratio), Enceladus in a 2:1 resonance with Dione — that prevent their orbits from circularising. Maintained orbital eccentricity means each moon is periodically closer to then farther from its host planet, causing the tidal bulge to vary in size and direction; the repeated deformation dissipates mechanical energy as heat within the moon\'s silicate interior and/or ice shell. For Europa, the Galileo spacecraft measured an induced magnetic field that is best explained by a global saline (conducting) ocean ~80–170 km deep beneath a ~15–25 km ice shell. Hubble Space Telescope observations of transient water-vapour plumes from the south polar region provide additional support. For Enceladus, Cassini\'s multiple fly-throughs of the south polar plume directly detected H₂O, CO₂, CH₄, NH₃, H₂, and complex organic molecules (including mass > 200 Da fragments suggesting hydrothermal organic chemistry), and measured silica nanoparticles indicating water-rock interaction at >90°C — compelling evidence for active hydrothermal vents at the ocean floor. These discoveries demonstrate that the habitable zone for liquid water is not synonymous with the surface-liquid-water CHZ; tidal energy can substitute for stellar flux wherever orbital resonances are maintained, extending the potentially habitable volume of a stellar system far beyond the classical CHZ boundaries. Option A incorrectly attributes the heat primarily to radiogenic decay (a minor contributor in these moons). Option C is incorrect: pressure-melting is negligible at the conditions found in Europa\'s ice shell and cannot alone explain the observed heat flux. Option D is entirely fabricated.`,
        },
      ],
    },
  ],
}

export default habitableZones
