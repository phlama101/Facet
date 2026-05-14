import { Telescope, Activity, Waves, Globe } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const exoplanetDetection: Lesson = {
  id: 'abio-101-1-3-1',
  title: 'Detecting Exoplanets',
  track: 'ast',
  trackName: 'Astrobiology',
  level: 'Foundations',
  duration: '13 min',
  xpReward: 130,
  description: 'Transit photometry, radial velocity, direct imaging, and microlensing — the techniques that revealed a universe teeming with planets',
  sources: [
    { org: 'NASA',   title: 'NASA Exoplanet Archive',                   url: 'https://exoplanetarchive.ipac.caltech.edu/' },
    { org: 'ESA',    title: 'ESA CHEOPS and PLATO Missions',            url: 'https://www.esa.int/' },
    { org: 'STScI',  title: 'Space Telescope Science Institute — JWST', url: 'https://www.stsci.edu/' },
    { org: 'Nature', title: 'Nature — Exoplanet Research',              url: 'https://www.nature.com/' },
  ],
  sections: [
    {
      type: 'intro',
      title: '5,000 worlds and counting: how astronomers detect planets orbiting other stars',
      body: `For most of human history, the existence of planets beyond our Solar System was philosophical speculation rather than empirical science. That changed on 6 October 1995, when Michel Mayor and Didier Queloz announced the discovery of **51 Pegasi b** — a Jupiter-sized world orbiting a Sun-like star just 50 light-years away with a period of only 4.23 days. The discovery, made using the radial velocity technique at the Observatoire de Haute-Provence, overturned received wisdom that giant planets must orbit far from their stars and earned Mayor and Queloz the **Nobel Prize in Physics in 2019**. By the close of 2023, astronomers had confirmed more than **5,500 exoplanets**, with thousands more candidates awaiting verification.

**Transit photometry** is now the most productive detection method. When a planet\'s orbit carries it across the face of its host star as seen from Earth, the star\'s apparent brightness dips by a small but measurable amount. The fractional flux decrease is equal to the ratio of the planet\'s cross-sectional area to the star\'s: **ΔF/F = (Rp/Rs)²**, where Rp is the planet radius and Rs is the stellar radius. A Jupiter-sized planet transiting a Sun-like star produces a ~1% dip; an Earth-sized planet produces only ~0.008% — requiring space-based photometry to detect. The **geometric transit probability** — the chance that orbital geometry aligns for any given planet-star pair to be seen in transit from Earth — is approximately Rs/a, where a is the orbital semi-major axis. For an Earth-Sun analogue this probability is only ~0.5%, which is why large photometric surveys covering hundreds of thousands of stars simultaneously are necessary.

The **Kepler Space Telescope** (2009–2018) was the instrument that transformed exoplanet science from a niche observational specialty into a statistical discipline. Staring continuously at a single 115-square-degree field in the Cygnus-Lyra region, Kepler monitored over 150,000 stars with unprecedented photometric precision and discovered approximately **2,700 confirmed planets**, with a pipeline of thousands more candidates. Kepler\'s legacy is not just in the individual discoveries but in planetary occurrence rates: it established that most Sun-like stars host planets, that **super-Earths** (radii 1.25–2 R⊕) and **sub-Neptunes** are the most common planet types in the galaxy, and that roughly 20–50% of Sun-like stars host a rocky planet in the habitable zone. Kepler\'s successor, **TESS** (Transiting Exoplanet Survey Satellite, 2018–present), tiles the entire sky in two-year sectors, focusing on the nearest and brightest stars — ideal targets for follow-up spectroscopy.

The **radial velocity (RV) method**, also called the Doppler method, detects the gravitational tug a planet exerts on its host star. As the planet orbits, the star traces a small reflex orbit around the system\'s common centre of mass, causing its spectral lines to shift periodically toward blue (approaching) and red (receding) wavelengths. Modern high-resolution spectrographs such as HARPS (High Accuracy Radial velocity Planet Searcher) can detect stellar velocity wobbles as small as ~30 cm/s — comparable to a brisk walking pace. The RV method yields the planet\'s orbital period, eccentricity, and **m sin(i)** — the product of the planet mass and the sine of the orbital inclination — creating an irreducible ambiguity unless the inclination is independently known. **HD 209458b** was the first exoplanet confirmed to transit its star (1999), and by combining the transit-derived radius with the RV-derived mass, astronomers obtained the planet\'s bulk density — proving it was unambiguously a gas giant.

**Direct imaging** attempts to spatially resolve the light from the planet itself, separated from the blinding glare of its host star. This is extraordinarily difficult: a Sun-like star outshines a Jupiter analogue at optical wavelengths by a factor of ~10⁹. **Coronagraphs** block the central starlight, and adaptive optics correct for atmospheric blurring, allowing thermal emission from young, self-luminous giant planets to be detected in the near-infrared. The **HR 8799 system** (imaged in 2008) hosts four directly imaged super-Jupiters orbiting at wide separations; their spectra revealed atmospheric water, methane, and carbon monoxide. The **James Webb Space Telescope (JWST)**, with its 6.5-metre mirror and mid-infrared capabilities, extends direct imaging sensitivity to lower-mass and cooler objects than was previously possible.

**Gravitational microlensing** exploits general relativity: when a foreground star (with or without planets) passes near the line of sight to a background star, the foreground object\'s gravity acts as a lens, amplifying the background star\'s light in a characteristic light-curve spike. A planet orbiting the lensing star produces an additional brief perturbation on the main lensing event. Microlensing is uniquely sensitive to planets at orbital distances of 1–10 AU and can even detect **free-floating planets** — worlds ejected from their birth systems — by their solo lensing events without any associated stellar host. The Roman Space Telescope (formerly WFIRST) is expected to discover thousands of microlensing planets.

Beyond detection, **transmission spectroscopy** during a transit probes the planet\'s atmosphere: starlight filtered through the planetary atmosphere carries absorption signatures of molecular species. JWST has revolutionised atmospheric characterisation — in 2023, it detected **carbon dioxide (CO₂)** in the atmosphere of TRAPPIST-1c, and produced high-precision atmospheric spectra of multiple targets in the TRAPPIST-1 system, with ongoing characterisation of the potentially habitable TRAPPIST-1e, f, and g. **Emission spectroscopy** during the secondary eclipse (when the planet passes behind the star) allows the planet\'s own thermal emission spectrum to be measured. **Hot Jupiters** — giant planets with orbital periods under ~10 days — are present around roughly **1% of FGK dwarf stars** and were disproportionately represented in early RV surveys due to their strong observational signal, but Kepler established that they are genuinely rare compared to the ubiquitous super-Earths and sub-Neptunes that populate the galaxy.`,
      keyTerms: [
        {
          term: 'Transit photometry',
          def: `A detection method in which a planet passing in front of its host star as seen from Earth causes a periodic, fractional dimming of the star\'s observed brightness. The depth of the flux decrease equals (Rp/Rs)², directly yielding the ratio of the planet radius to the stellar radius. The method requires precise photometry over long baselines and favours planets in tight orbits around small stars, where transit probability and frequency are both higher. Kepler and TESS are the canonical transit survey missions.`,
        },
        {
          term: 'Radial velocity method',
          def: `Also called the Doppler method, this technique measures the periodic shift in a star\'s spectral lines caused by the gravitational tug of an orbiting planet. As the planet orbits, the star undergoes a small reflex motion; spectrographs detect the resulting Doppler shifts to precisions of ~30 cm/s (HARPS, ESPRESSO). The method yields the orbital period, eccentricity, and m sin(i) — the planet\'s minimum mass, with a degeneracy due to the unknown orbital inclination i.`,
        },
        {
          term: 'Transmission spectroscopy',
          def: 'A technique in which starlight filtered through the thin atmospheric annulus of a transiting planet carries wavelength-dependent absorption fingerprints of molecular species in the planetary atmosphere. At wavelengths where atmospheric gases absorb, the planet appears slightly larger (the atmosphere is opaque), deepening the transit. By comparing transit depths across many wavelengths, atmospheric composition — including H₂O, CO₂, CH₄, Na, K, and hazes — can be inferred. JWST has transformed this technique with infrared coverage and unprecedented sensitivity.',
        },
        {
          term: 'Microlensing',
          def: `An exoplanet detection method based on gravitational lensing: when a foreground star with orbiting planets aligns with a background source star, the foreground star\'s gravity amplifies the background light in a characteristic spike. A planet orbiting the lensing star creates a brief additional perturbation in the light curve. Microlensing is most sensitive to planets at 1–10 AU separations and is the only method capable of detecting free-floating (ejected) planets. Events are transient and non-repeating, making follow-up difficult.`,
        },
        {
          term: 'Kepler Space Telescope',
          def: `NASA\'s Kepler mission (2009–2018) was dedicated to transit photometry, monitoring ~150,000 stars simultaneously in a fixed 115-square-degree field. It discovered approximately 2,700 confirmed exoplanets and established planet occurrence rates across stellar types. Its core finding — that nearly every star hosts planets, with super-Earths and sub-Neptunes the most common types — fundamentally reshaped our understanding of planetary system demographics. A reaction-wheel failure in 2013 ended the primary mission; the repurposed K2 mission continued until fuel exhaustion in 2018.`,
        },
      ],
    },
    {
      type: 'concept',
      title: 'Four Major Exoplanet Detection Techniques',
      body: `Each detection method is sensitive to a different region of planet-parameter space — orbital distance, planet mass, radius, and age — so the ensemble of methods together samples the full diversity of planetary systems. No single technique is sufficient; the richest science emerges when multiple methods are combined for the same system, as in the transit + radial velocity combination that yields both radius and mass, and therefore bulk density.`,
      cards: [
        {
          name: 'Transit Photometry',
          icon: Telescope,
          color: BRAND.accent,
          desc: `Measures the fractional dimming of a star\'s light as a planet crosses its disk. Transit depth = (Rp/Rs)² directly gives the planet-to-star radius ratio. Best suited to short-period planets around small stars. Enabled by space-based photometry (Kepler, TESS, CHEOPS) due to the tiny signals involved for Earth-sized worlds.`,
          examples: 'Kepler-22b (first Kepler habitable-zone planet, R = 2.4 R⊕, 2011) · TRAPPIST-1 system (7 Earth-sized planets, TRAPPIST telescope + Spitzer + TESS) · HD 209458b (first transiting exoplanet confirmed, 1999) · TOI-700d (TESS rocky habitable-zone planet)',
        },
        {
          name: 'Radial Velocity (Doppler Method)',
          icon: Waves,
          color: BRAND.jade,
          desc: `Detects the stellar wobble induced by an orbiting planet via periodic Doppler shifts in stellar spectral lines. Yields m sin(i) — the planet\'s minimum mass — and orbital parameters including eccentricity. HARPS achieves ~30 cm/s precision. Historically the first method to confirm exoplanets around Sun-like stars.`,
          examples: '51 Pegasi b (Mayor & Queloz 1995, first confirmed exoplanet around a Sun-like star, Nobel 2019) · HD 40307g (super-Earth habitable-zone candidate, HARPS) · Proxima Centauri b (nearest known exoplanet, 1.27 M⊕ minimum mass, 2016) · 55 Cancri e (ultra-short-period super-Earth, period 17.7 h)',
        },
        {
          name: 'Direct Imaging and Spectroscopy',
          icon: Globe,
          color: BRAND.accentHot,
          desc: `Spatially resolves planet light from stellar glare using coronagraphs and adaptive optics. Sensitive to young, massive, self-luminous planets at wide orbital separations (>10 AU). JWST\'s NIRCam and MIRI extend infrared imaging capability. Atmospheric spectra obtained directly without transit geometry required.`,
          examples: 'HR 8799 bcde (4 super-Jupiters imaged simultaneously, 2008–2010; spectra show H₂O, CO, CH₄) · Beta Pictoris b (directly imaged planet in a debris disk system) · AF Lep b (low-mass directly imaged planet, 2023) · JWST coronagraphic imaging of the Fomalhaut debris disk',
        },
        {
          name: 'Gravitational Microlensing',
          icon: Activity,
          color: BRAND.gold,
          desc: 'Detects planets via brief gravitational lensing perturbations on background star light curves as a foreground star-planet system transits the line of sight. Sensitive to cool planets at 1–10 AU and free-floating planets. Events are non-repeating. The Roman Space Telescope will conduct a large-scale microlensing survey.',
          examples: 'OGLE-2005-BLG-390Lb (first cool super-Earth detected via microlensing, 5.5 M⊕) · MOA-2011-BLG-262L (candidate free-floating planet–moon system) · KMT-2020-BLG-0414 (white dwarf host planet via microlensing) · Roman Space Telescope: projected ~1,400 new microlensing planets from Galactic Bulge survey',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From Stellar Light Curve to Planet Characterisation',
      body: `Detecting a transiting exoplanet is only the first step in a chain of progressively deeper characterisation — from a periodic flux dip in a light curve, through mass and density determination, to atmospheric chemistry probed by spectroscopy. Follow the six-stage pipeline below to see how raw photometric data becomes a fully characterised world.`,
      interaction: {
        type: 'flow-simulator' as const,
        description: 'The observational pipeline from raw stellar photometry to atmospheric characterisation of a transiting exoplanet',
        nodes: [
          {
            id: 'light-curve',
            label: 'Stellar light curve monitoring',
            description: 'A space telescope (Kepler, TESS, CHEOPS) records the brightness of a target star continuously over months to years, producing a time-series photometric record called the light curve. Photometric precision must reach parts-per-million (ppm) levels to detect Earth-sized planets around Sun-like stars. The raw light curve contains instrumental systematics, stellar variability (star spots, flares, granulation), and — if a planet is present — the transit signal. Detrending algorithms remove astrophysical and instrumental noise to isolate the transit signature.',
            color: BRAND.accent,
          },
          {
            id: 'transit-detected',
            label: 'Transit signal detected',
            description: 'A periodic, box-shaped dip in the detrended light curve signals a candidate transit event. The Box Least Squares (BLS) algorithm searches systematically for such signals across a grid of trial periods and transit durations. A candidate is flagged when the signal exceeds a detection threshold (typically 7.1σ for Kepler). False positives — eclipsing binary stars, background eclipsing binaries, instrumental artefacts — must be ruled out through a vetting process that includes centroid analysis (does the photometric centroid shift during the event, indicating a contaminating background source?) and statistical validation.',
            color: BRAND.accentHot,
          },
          {
            id: 'period-radius',
            label: 'Period and radius derived',
            description: `The transit light curve directly yields three fundamental parameters: the orbital period P (time between successive transits), the transit duration T (contact timing), and the transit depth ΔF/F = (Rp/Rs)². Combining the depth with the stellar radius Rs — obtained from stellar spectroscopy, photometry, and parallax (Gaia) — gives the planet radius Rp. Kepler\'s third law (P² ∝ a³/M★) then yields the semi-major axis a given the stellar mass M★. If multiple transits are observed, transit timing variations (TTVs) can reveal additional gravitational perturbers — other planets in the system — even if those planets never transit.`,
            color: BRAND.jade,
          },
          {
            id: 'rv-followup',
            label: 'Radial velocity follow-up',
            description: `High-resolution ground-based spectrographs (HARPS, ESPRESSO, NEID, iSHELL) measure the Doppler shift of the host star\'s spectral lines over the planet\'s orbital period. The radial velocity semi-amplitude K — the maximum line-of-sight velocity of the star — depends on the planet mass Mp, orbital inclination i, and stellar mass M★: K = (2πG/P)^(1/3) × Mp sin(i) / (M★ + Mp)^(2/3) / √(1−e²). Because the inclination i is independently known from the transit geometry (sin i ≈ 1 for transiting planets), the RV measurement yields the true planet mass Mp rather than merely Mp sin(i). This is the critical step where RV and transit methods combine synergistically.`,
            color: BRAND.gold,
          },
          {
            id: 'mass-density',
            label: 'Planet mass and density',
            description: `With both radius Rp (from transit depth) and mass Mp (from radial velocity), the planet\'s mean bulk density ρ = 3Mp / (4π Rp³) can be calculated. Bulk density is one of the most informative single quantities in planetary science: it distinguishes rocky planets (ρ ~ 4–8 g/cm³), water worlds or mini-Neptunes with thick volatile envelopes (ρ ~ 1–3 g/cm³), and gas-dominated giants (ρ ~ 0.1–2 g/cm³). Mass-radius diagrams constructed from Kepler + RV surveys show a clear bimodal gap — the "radius gap" or Fulton gap near 1.7 R⊕ — separating bare rocky super-Earths from gas-rich sub-Neptunes, likely shaped by photoevaporation of hydrogen/helium envelopes by stellar XUV radiation.`,
            color: BRAND.amethyst,
          },
          {
            id: 'transmission-spectroscopy',
            label: 'Atmospheric transmission spectroscopy',
            description: `During transit, starlight passes through the planet\'s atmospheric limb. Molecules in the atmosphere absorb specific wavelengths, making the planet appear slightly larger (the atmosphere is opaque) at those wavelengths and smaller (transparent) at others. By measuring transit depth as a function of wavelength with an infrared spectrograph (JWST NIRSpec, NIRCam grism, MIRI LRS), a transmission spectrum is obtained — a direct fingerprint of atmospheric composition. JWST has detected CO₂, SO₂, H₂O, and Na in exoplanet atmospheres and provided the first detailed atmospheric spectrum of a TRAPPIST-1 planet. Emission spectroscopy during secondary eclipse (when the planet passes behind the star) measures the planet\'s dayside thermal emission spectrum, constraining temperature and day-night heat redistribution.`,
            color: BRAND.coral,
          },
        ],
        edges: [
          { from: 'light-curve',      to: 'transit-detected',         label: 'BLS period search identifies periodic flux dip' },
          { from: 'transit-detected', to: 'period-radius',             label: 'transit depth and timing yield P, Rp/Rs, and a' },
          { from: 'period-radius',    to: 'rv-followup',               label: 'confirmed planet triggers spectrograph observing campaign' },
          { from: 'rv-followup',      to: 'mass-density',              label: 'RV amplitude K + known inclination gives true Mp' },
          { from: 'mass-density',     to: 'transmission-spectroscopy', label: 'bulk density constrains interior structure; atmosphere targeted with JWST' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: `A transiting exoplanet causes its host star\'s brightness to decrease by 0.01 (1%) during transit. The host star has a radius of 1.0 R☉ (solar radius). What does this transit depth tell us about the planet, and what is the planet\'s approximate radius?`,
          a: [
            'The transit depth equals (Rp/Rs)², so (Rp/Rs)² = 0.01 means Rp/Rs = 0.1, giving Rp = 0.1 × 1.0 R☉ ≈ 0.1 R☉ ≈ 10 R⊕ — a Jupiter-sized planet; transit depth measures the ratio of the planet\'s cross-sectional area to the star\'s disk area, so a deeper transit means a larger planet relative to the star',
            'The transit depth equals Rp/Rs directly, so Rp = 0.01 × 1.0 R☉ ≈ 0.01 R☉ ≈ 1 R⊕ — an Earth-sized planet; transit depth is a linear measure of planet-to-star size ratio',
            'The transit depth equals (Rs/Rp)², so a 1% depth means Rs/Rp = 0.1 and Rp = 10 R☉ — a planet larger than the star, which is physically impossible; this shows that 1% transit depths cannot originate from a planetary companion',
            'The transit depth tells us nothing about planet radius without knowing the planet\'s orbital period; the depth only constrains the planet\'s surface albedo — a highly reflective planet blocks more light even at small size',
          ],
          correct: 0,
          explain: `The correct answer is A. Transit depth is defined as ΔF/F = (Rp/Rs)² — the fractional decrease in flux equals the ratio of the projected areas, which is the square of the radius ratio. A 1% (= 0.01) depth means (Rp/Rs)² = 0.01, so Rp/Rs = √0.01 = 0.1. With Rs = 1.0 R☉ = 109 R⊕, we get Rp = 0.1 × 109 R⊕ ≈ 10.9 R⊕ — solidly in Jupiter territory (Jupiter\'s radius is ~11 R⊕). This is precisely the depth of the transit of HD 209458b, the first transiting exoplanet confirmed. Option B confuses depth with the linear radius ratio: depth = (Rp/Rs)² not Rp/Rs. Using the linear ratio would give Rp = 0.01 R☉ ≈ 1.1 R⊕, which is systematically wrong — it would require a transit depth of (0.01)² = 0.0001 (0.01%) to detect an Earth around the Sun, which is correct, but the formula stated is wrong. Option C inverts the ratio, which produces nonsensical results. Option D is wrong because transit depth is entirely controlled by geometry (the ratio of cross-sectional areas) and is independent of albedo; reflected light from the planet during transit is negligible compared to the blocking effect. The geometric interpretation of transit depth is one of the most fundamental and clean relationships in exoplanet science: the star\'s effective brightness is reduced in proportion to the fraction of its disk covered by the opaque planet disk.`,
        },
        {
          q: `The radial velocity method measures the Doppler shift of a star\'s spectral lines as a planet orbits it. What physical quantity does the measured radial velocity semi-amplitude K directly constrain, and what fundamental ambiguity limits the planet mass determination?`,
          a: [
            'The RV semi-amplitude K constrains the product Mp sin(i) — the planet mass multiplied by the sine of the orbital inclination; because the orbital inclination i (the tilt of the orbit to the plane of the sky) is generally unknown from RV data alone, the method yields only the minimum mass Mp sin(i); the true mass could be much larger if the orbit is viewed nearly face-on (i ≈ 0°), in which case sin(i) ≈ 0 and K would be tiny even for a very massive companion',
            'The RV semi-amplitude K directly yields the planet\'s true mass Mp without ambiguity because the method measures the full three-dimensional orbital velocity; the radial component of the stellar velocity is always proportional to the planet mass regardless of inclination, so inclination does not enter the mass determination',
            'The RV method constrains the planet\'s density rather than its mass; combined with the orbital period, K determines the planet\'s bulk composition; the ambiguity in the method is the unknown stellar radius, not the orbital inclination',
            'The RV semi-amplitude K constrains only the planet\'s orbital eccentricity; the planet\'s mass requires independent knowledge of the stellar luminosity because more luminous stars have stronger radiation pressure that perturbs the orbit; this radiation-mass degeneracy is the limiting ambiguity of the radial velocity technique',
          ],
          correct: 0,
          explain: 'The correct answer is A. The radial velocity equation K = (2πG/P)^(1/3) × Mp sin(i) / (M★ + Mp)^(2/3) / √(1−e²) shows that the observable (K) is proportional to Mp sin(i), not Mp alone. The factor sin(i) encodes the orbital inclination: only the component of the stellar velocity along the line of sight is Doppler-shifted and detectable. If an orbit is face-on (i = 0°, orbital plane perpendicular to the sky), there is no radial component and K = 0 regardless of the planet mass — a massive brown dwarf in a face-on orbit would be invisible to RV surveys. If the orbit is edge-on (i = 90°), sin(i) = 1 and the full Mp is recovered. For a random ensemble of orbits the average sin(i) is π/4 ≈ 0.79, so statistically the measured Mp sin(i) values are about 79% of the true masses on average, but individual systems can be wildly discrepant. This is called the **sin(i) degeneracy** or inclination ambiguity. It is resolved when the same planet is also detected in transit — transit geometry tightly constrains i ≈ 90° for transiting systems, so RV + transit together give the true mass. Option B is wrong: only the line-of-sight (radial) velocity component is measured, not the full 3-D orbital velocity, which is why the sin(i) ambiguity exists. Option C is wrong: K depends on mass, not density, and inclination is the relevant uncertainty. Option D is wrong: eccentricity is inferred from the shape of the RV curve (whether the velocity varies sinusoidally or asymmetrically), and stellar luminosity is irrelevant to the mass determination in the RV method.',
        },
        {
          q: 'The Kepler Space Telescope (2009–2018) is described as revolutionary for establishing planet occurrence rates. What specific capability made Kepler transformative compared to ground-based surveys that preceded it, and what was its most statistically significant finding about the overall frequency of planets?',
          a: [
            'Kepler\'s continuous, high-precision space-based photometry of ~150,000 stars simultaneously — free from atmospheric noise and day-night interruptions that plagued ground surveys — allowed it to detect Earth-sized planets and establish statistically robust occurrence rates across the full range of planet sizes; its most significant finding was that most Sun-like stars host planets and that super-Earths and sub-Neptunes (radii 1.5–4 R⊕) are the most common planet type in the galaxy, far outnumbering hot Jupiters',
            'Kepler was revolutionary because it was the first instrument to use the radial velocity method from space, eliminating atmospheric seeing that limited ground-based spectrograph precision; its most significant finding was that planets more massive than Jupiter are ubiquitous around all stellar types, revising the estimate that hot Jupiters orbit ~20% of Sun-like stars',
            'Kepler\'s main advantage was its ability to image planet surfaces directly using a coronagraph sensitive to reflected starlight; its most significant finding was that rocky planets with liquid water oceans are common, with over 1,000 confirmed ocean worlds detected in the Kepler field',
            'Kepler was transformative because it was the first mission to conduct gravitational microlensing surveys toward the Galactic Bulge from space, where confusion from stellar crowding limited ground-based sensitivity; its most important finding was that free-floating planets outnumber stars by at least 10 to 1 in the Milky Way',
          ],
          correct: 0,
          explain: `The correct answer is A. Pre-Kepler exoplanet surveys were dominated by radial velocity detections, which are inherently biased toward detecting the most massive and closest-in planets (hot Jupiters), because these produce the largest Doppler signals. Ground-based transit surveys existed but were limited by atmospheric scintillation (turbulence-induced brightness fluctuations), day-night gaps, weather, and the fact that they monitored far fewer stars simultaneously with limited precision. Kepler operated above the atmosphere in continuous sunlight, measuring the brightness of ~150,000 solar-type stars simultaneously to ppm-level precision for four years. This allowed it to detect planets as small as 1 R⊕ and to build a statistically complete sample from which occurrence rates — the fraction of stars hosting planets of a given size and period — could be robustly calculated. The headline demographic result was that ~50% of Sun-like FGK stars host at least one planet with a period under 85 days, that super-Earths and sub-Neptunes are about 10× more common than hot Jupiters, and that the "radius gap" near 1.7 R⊕ divides rocky super-Earths from volatile-rich sub-Neptunes. Option B is wrong: Kepler used transit photometry, not radial velocity, and hot Jupiters are found around ~1% of FGK stars, not 20%. Option C is wrong: Kepler is a photometrist, not an imager with coronagraphic capability — it measured flux dips, not reflected light from planet surfaces, and ocean world surfaces cannot be imaged at Kepler\'s angular resolution or sensitivity. Option D is wrong: Kepler observed a fixed field in Cygnus-Lyra using transit photometry, not microlensing toward the Galactic Bulge; that role belongs to ground-based surveys like OGLE and MOA, and to the future Roman Space Telescope.`,
        },
        {
          q: 'Transmission spectroscopy during a planetary transit is used to characterise exoplanet atmospheres. What physical process makes this technique work, and what does a "transmission spectrum" actually measure?',
          a: [
            'During transit, starlight grazing the planet\'s atmospheric limb is absorbed at wavelengths specific to molecules present in the atmosphere, making the planet appear larger at those wavelengths (higher effective radius) than at wavelengths where the atmosphere is transparent; a transmission spectrum plots effective planet radius (or transit depth) as a function of wavelength, and molecular absorption features — such as CO₂ at 4.3 μm, H₂O at 1.4 μm, and CH₄ at 3.3 μm — appear as bumps corresponding to an apparently larger planet',
            'During transit, the planet\'s reflected starlight mixes with the direct stellar flux, creating constructive interference at wavelengths matching the atmospheric molecular resonances; a transmission spectrum measures the ratio of reflected to transmitted light, and molecular features appear as sharp emission lines in the resulting ratio spectrum',
            'Transmission spectroscopy works because the planet\'s magnetic field deflects charged stellar wind particles differently at different energies, modulating the observed stellar UV flux during transit; a transmission spectrum is a plot of UV flux versus time, with molecular species identified from the frequency of modulation',
            'During transit, heat from the stellar surface passes through the planet\'s atmosphere and is re-emitted at characteristic molecular rotation frequencies; a transmission spectrum measures this re-emitted thermal radiation and molecular features appear as narrow spectral peaks at millimetre and radio wavelengths',
          ],
          correct: 0,
          explain: `The correct answer is A. The physical basis of transmission spectroscopy is straightforward: at transit, the planet does not fully occult the star but passes across it, leaving an annular ring of planetary atmosphere around the planet\'s opaque body through which starlight must pass to reach the observer. Different molecules absorb light at characteristic wavelengths — H₂O absorbs strongly in several near-infrared bands around 1.4, 1.9, and 2.7 μm; CO₂ absorbs at 4.3 μm and 2.7 μm; CH₄ at 3.3 μm; Na and K produce prominent optical doublet features. At wavelengths where atmospheric opacity is high, the effective "edge" of the planet extends to higher altitude (the atmosphere is opaque higher up), making the planet appear larger and the transit deeper. At transparent windows, the atmosphere is nearly invisible and the transit depth reflects only the opaque solid or cloud deck. The resulting spectrum of transit depth versus wavelength — the transmission spectrum — encodes the atmospheric scale height, molecular abundances, and the presence of clouds or hazes. JWST\'s 2023 observations of TRAPPIST-1b and 1c produced the first reliable JWST transmission spectra of TRAPPIST worlds. Option B is wrong: reflected light from the planet is negligible at the ppm level during transit and does not produce constructive interference; transmission spectroscopy is an absorption measurement, not a reflection ratio. Option C is wrong: magnetic field deflection of stellar wind has no role in transmission spectroscopy; the technique works at infrared to optical wavelengths, not primarily UV, and the signal is geometric (transit depth variation), not a time-modulation. Option D is wrong: transmission spectroscopy is performed at optical and infrared wavelengths using differential transit depth, not by detecting re-emitted millimetre-wave radiation from the atmosphere.`,
        },
        {
          q: `The James Webb Space Telescope (JWST) has been described as a step-change improvement over the Hubble Space Telescope for characterising exoplanet atmospheres. What are JWST\'s specific advantages over Hubble for this application, and why are those advantages scientifically critical for studying potentially habitable planets?`,
          a: [
            'JWST\'s 6.5-metre primary mirror (versus Hubble\'s 2.4 m) provides ~7× greater light-collecting area, dramatically improving the signal-to-noise ratio per transit; more critically, JWST covers 0.6–28 μm in the near-to-mid infrared with multiple spectrographs (NIRSpec, NIRCam grism, MIRI LRS), while Hubble\'s infrared coverage with WFC3 was limited to ~1–1.7 μm; this broad infrared coverage is essential because CO₂, CH₄, O₃, and N₂O — biosignature-relevant gases — have their strongest absorption features in the mid-infrared (2–20 μm) that Hubble simply could not access',
            'JWST\'s main advantage is a coronagraph capable of directly blocking the host star\'s light to a contrast ratio of 10⁻¹⁰, enabling the direct imaging of rocky planets in the habitable zones of Sun-like stars at distances up to 100 light-years; Hubble\'s coronagraph was limited to 10⁻⁶ contrast, insufficient for detecting Earth-sized planets; direct imaging is the primary mode JWST uses for TRAPPIST-1 atmospheric characterisation',
            'JWST improves on Hubble by operating in low Earth orbit at a lower altitude where atmospheric drag has been eliminated, providing a more stable pointing platform; Hubble\'s periodic passage through the South Atlantic Anomaly introduced radiation-noise gaps in its light curves, which JWST avoids; the stability improvement is the dominant factor enabling transmission spectroscopy of TRAPPIST-1 worlds',
            'JWST\'s principal advantage over Hubble is its ability to observe at ultraviolet wavelengths below 200 nm, where water vapour and oxygen have their strongest absorption cross-sections; Hubble\'s UV sensitivity degraded after its final servicing mission in 2009, making it unreliable for UV transmission spectroscopy; detecting UV water absorption is the key observational goal for TRAPPIST-1 habitability assessment',
          ],
          correct: 0,
          explain: `The correct answer is A. JWST\'s advantages for exoplanet atmospheric characterisation are primarily its larger collecting area and, crucially, its broad infrared spectral coverage. Hubble\'s workhorse instrument for transmission spectroscopy was WFC3 (Wide Field Camera 3) using its infrared grism, which covers approximately 1.1–1.7 μm — a narrow wavelength window that can detect H₂O absorption but has very limited access to CO₂, SO₂, CH₄, or other important species. JWST\'s NIRSpec covers 0.6–5.3 μm with multiple grating-filter combinations; NIRCam grism covers 2.4–5.0 μm; MIRI\'s LRS covers 5–12 μm. This means JWST can simultaneously probe H₂O (near-infrared), CO₂ (4.3 μm), CH₄ (3.3 μm), CO (4.7 μm), and potentially SO₂ (7.7 μm) and O₃ (9.6 μm). For potentially habitable rocky planets like the TRAPPIST-1 worlds, the ability to detect CO₂ (a proxy for a thick atmosphere), the CO₂/CO ratio (a disequilibrium biosignature indicator), and eventually N₂O or CH₄ in combination with O₂ requires mid-infrared access that Hubble fundamentally lacked. JWST also has ~7× more collecting area, reducing the number of transits needed for a given signal-to-noise ratio — critical when studying TRAPPIST-1 planets that transit only every 4–12 days. Option B is wrong: JWST does have coronagraphs (NIRCam coronagraph, MIRI coronagraph), but they achieve contrast ratios of ~10⁻⁵ to 10⁻⁶ — useful for imaging young giant planets at wide separations but far insufficient for rocky habitable-zone planets around Sun-like stars. JWST\'s TRAPPIST-1 work uses transmission spectroscopy during transit, not coronagraphic direct imaging (TRAPPIST-1 is an ultra-cool dwarf at 12 pc, making the angular separation of its planets tiny). Option C is wrong: JWST does not orbit in low Earth orbit — it orbits at the Sun-Earth L2 Lagrange point, 1.5 million km from Earth, which is actually far more stable for observations than LEO and avoids the South Atlantic Anomaly and albedo interruptions that affected Hubble. Option D is wrong: JWST does not observe below ~600 nm and has no ultraviolet capability; it is an infrared-optimised telescope. UV exoplanet spectroscopy remains Hubble\'s domain (and future missions like the Habitable Worlds Observatory). Water\'s strongest absorption for transmission spectroscopy is in the near-infrared, not the UV.`,
        },
      ],
    },
  ],
}

export default exoplanetDetection
