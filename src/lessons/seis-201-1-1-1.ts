import { Globe, Activity, Layers, Zap } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const bodyWaveTomography: Lesson = {
  id: 'seis-201-1-1-1',
  title: 'Body Wave Tomography',
  track: 'geo',
  trackName: 'Advanced Seismology',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: 'Seismic tomography images the deep Earth by inverting millions of earthquake travel times. P-wave velocity anomalies reveal the thermal and compositional structure of the mantle — from subducted slabs to the enigmatic Large Low Shear Velocity Provinces at the base of the mantle.',
  sources: [
    { org: 'IRIS',    title: 'Incorporated Research Institutions for Seismology — Tomography Overview',          url: 'https://www.iris.edu/hq/inclass/lesson/seismic_tomography' },
    { org: 'ISC',     title: 'International Seismological Centre — Global Earthquake Bulletin',                url: 'https://www.isc.ac.uk/iscbulletin/' },
    { org: 'USGS',    title: 'USGS — Earthquake Hazards Program: Seismicity and Earth Structure',              url: 'https://earthquake.usgs.gov/learn/topics/interior.php' },
    { org: 'CRUST1', title: 'Laske et al. (2013) — CRUST1.0: A New Global Crustal Model (GPGU)',              url: 'https://igppweb.ucsd.edu/~gabi/crust1.html' },
    { org: 'Grand',   title: 'Grand (1994) — Mantle shear structure beneath the Americas, JGR',               url: 'https://doi.org/10.1029/94JB00042' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'X-raying the planet with earthquake waves',
      body: `Medical CAT scans reconstruct three-dimensional images of the body by measuring how X-rays pass through tissue at many angles. Seismic tomography does the same thing for the Earth's interior, using earthquake waves instead of X-rays. When a large earthquake ruptures, it broadcasts seismic energy in all directions. That energy travels through the mantle at speeds controlled by temperature, composition, and pressure. Cold, dense material transmits waves faster; hot, partially molten material slows them down. By recording at hundreds of seismograph stations the precise arrival times of these waves from thousands of earthquakes in every direction, seismologists can invert the data — solving for the three-dimensional velocity field that best explains all the observed travel-time anomalies simultaneously.

The result is a global velocity model of the mantle expressed as dVp (P-wave velocity anomaly, in percent relative to a reference model) or dVs (S-wave velocity anomaly). Regions that are faster than the reference model appear blue in tomographic images — they are cold, or compositionally dense; slower regions appear red — they are hot, or partially molten. The colour scale is literally a temperature map of the deep Earth, albeit one with important caveats about resolution and non-uniqueness.

The reference against which anomalies are measured is PREM — the Preliminary Reference Earth Model (Dziewonski & Anderson, 1981) — which describes velocity as a function of depth only, with no lateral variation. Every tomographic model measures departures from PREM. The ISC (International Seismological Centre) global bulletin currently contains approximately 20 million P-wave arrival times from stations worldwide, providing the raw material for global body-wave tomography models.`,
      keyTerms: [
        {
          term: 'Seismic tomography',
          def: `The technique of imaging the three-dimensional velocity structure of the Earth\'s interior by inverting large sets of earthquake travel-time residuals. Analogous to medical CAT scanning. Produces models of dVp (P-wave velocity perturbation) and dVs (S-wave velocity perturbation) relative to a 1-D reference model such as PREM. Resolution is limited by the distribution of earthquakes and stations.`,
        },
        {
          term: 'Travel-time residual',
          def: 'The difference between the observed arrival time of a seismic phase at a station and the arrival time predicted by a reference Earth model (e.g. PREM). Positive residuals (late arrivals) indicate the wave traversed slower-than-average material; negative residuals (early arrivals) indicate faster-than-average material. Tomography inverts thousands to millions of these residuals simultaneously to map velocity anomalies.',
        },
        {
          term: 'PREM (Preliminary Reference Earth Model)',
          def: 'The 1-D reference Earth model of Dziewonski & Anderson (1981), describing seismic velocity, density, and attenuation as functions of depth only. PREM averages out all lateral heterogeneity and serves as the background model against which travel-time residuals and tomographic anomalies are defined. Still the standard global reference model for seismology.',
        },
        {
          term: 'dVp / dVs',
          def: 'Fractional P-wave or S-wave velocity perturbation relative to PREM, expressed in percent. Positive dVp (blue in most colour schemes) indicates faster-than-average material — typically cold, subducted oceanic lithosphere. Negative dVp (red) indicates slower-than-average material — hot upwellings, partial melt, or anomalous composition. dVs is more sensitive to temperature and partial melt than dVp.',
        },
        {
          term: 'LLSVP (Large Low Shear Velocity Province)',
          def: `Two continent-sized anomalies at the base of the mantle (the D" layer, ~2,800 km depth) beneath Africa and the central Pacific, characterised by 2–3% slower-than-average shear-wave velocities and sharply defined edges. Each is ~2,000 km across and ~1,000 km tall. LLSVPs may represent primordial, chemically distinct reservoirs of dense material dating to Earth\'s accretion (~4.5 Ga). Their edges are correlated with the eruption sites of large igneous provinces and continental flood basalts.`,
        },
        {
          term: 'Ray theory (geometric ray approximation)',
          def: `The high-frequency approximation in which seismic energy propagates along infinitely thin rays whose paths are governed by Fermat\'s principle: the ray travels the path of stationary travel time (in a smoothly varying medium, the path of minimum time). Rays bend toward slower material — the seismic equivalent of Snell\'s law in optics. Ray theory is the basis for most global body-wave tomography; finite-frequency (banana-doughnut) kernels are a more accurate alternative for lower-frequency waves.`,
        },
      ],
    },
    {
      type: 'concept',
      title: `Ray theory, Fermat's principle, and reading tomographic images`,
      body: `**How rays bend through the mantle.** Seismic rays obey Fermat's principle: between two points, a ray follows the path of stationary travel time. In a homogeneous medium, this is a straight line; in a medium where velocity varies, rays curve. The key rule — the seismic analogue of Snell's law — is that rays bend toward slower material and away from faster material. This is because a ray entering a faster region from a slower one is refracted toward the normal (perpendicular to the interface), allowing it to spend more of its path in the faster medium and arrive sooner. Conversely, a ray passing through a slow region is bent so that its path length there is minimised.

This bending means that rays from a given earthquake do not sample the mantle uniformly. Rays travelling at steep angles to a subducted slab are refracted around it; those passing through it arrive early. The pattern of early and late arrivals at different stations maps the slab geometry — which is the inversion problem.

**Colour codes in tomographic images.** Convention across the field: blue = fast = cold (or dense); red = slow = hot (or partially molten). The magnitude is typically a few percent — the whole mantle varies in P-wave velocity by only ±2–3% laterally, yet this small variation produces measurable travel-time anomalies of several seconds over paths of thousands of kilometres.

**ISC bulletins and inversion.** The ISC global earthquake bulletin compiles ~20 million P-wave arrival times reported by seismograph networks worldwide. Tomographic inversions use these as input, computing predicted travel times through a trial model, comparing to observed times, and iteratively adjusting the model to minimise residuals. The solution is non-unique — many velocity models can fit the same data equally well — so regularisation (smoothing, damping) is imposed to prefer smooth, minimum-norm solutions. This regularisation is a major source of uncertainty in global models.

**What tomography has revealed.** Global P-wave tomography has produced several landmark findings: (1) subducted oceanic slabs are visible as fast (blue) curtains extending from surface trenches into the mantle, in some cases all the way to the core-mantle boundary (CMB); (2) the LLSVPs at the base of the mantle are the largest velocity anomalies in the planet; (3) the mid-mantle (1,000–2,000 km depth) is relatively homogeneous compared with the upper mantle and D" layer, suggesting either efficient mixing at those depths or lower sensitivity of rays to structure there; (4) the African LLSVP is tilted relative to the Pacific LLSVP, consistent with the history of subduction that has shaped each hemisphere differently.`,
      cards: [
        {
          name: 'Fermat\'s Principle and Ray Bending',
          icon: Zap,
          color: BRAND.coral,
          desc: `Fermat\'s principle: rays follow paths of stationary travel time — equivalent to Snell\'s law in optics. Rays bend toward slower material. A cold, fast subducted slab refracts rays passing through it toward the slab interior, producing early arrivals (negative residuals) at stations beyond the slab. Rays deflected around slow (hot) anomalies arrive late. The pattern of travel-time residuals at surface networks maps the velocity structure below — this is the forward problem; inversion recovers the velocity model from the residuals.`,
          examples: 'Farallon slab: P-waves crossing eastern North America arrive 1–3 s early → fast slab at depth · Yellowstone: stations above the plume record P-wave delays of 0.5–1 s → slow anomaly below',
        },
        {
          name: 'Subducted Slabs in Global Tomography',
          icon: Layers,
          color: BRAND.accent,
          desc: 'Cold oceanic crust subducting into the mantle retains its thermal anomaly for tens of millions of years. At 100 km depth, slab temperatures may be 500–800°C cooler than ambient mantle — producing dVp of +2 to +3%. Slabs appear as coherent fast (blue) curtains in tomographic sections. Grand (1994) imaged the Farallon slab — the ancient Pacific plate that subducted beneath North America — as a nearly continuous fast anomaly from the western United States down to the CMB at ~2,800 km, evidence that some slabs penetrate through the 660 km discontinuity into the lower mantle.',
          examples: 'Farallon slab (Grand 1994): continuous fast anomaly to ~2,800 km under eastern North America · Tonga slab: fast anomaly to >1,000 km, stagnant above 660 km in places · Cocos slab: visible beneath Mexico to ~400 km',
        },
        {
          name: 'LLSVPs and Primordial Mantle',
          icon: Globe,
          color: BRAND.amethyst,
          desc: `The two Large Low Shear Velocity Provinces at the base of the mantle (D" layer, ~2,700–2,900 km) are the most enigmatic features in global tomography. Each spans ~2,000 km horizontally with dVs of −2 to −3% relative to PREM. Their edges are sharp — sometimes velocity changes by 3% over <100 km — inconsistent with purely thermal origin. Leading hypothesis: chemically distinct, iron-enriched primordial reservoirs surviving from Earth\'s magma ocean differentiation ~4.5 Ga. Hotspot tracks (Hawaii, Samoa, Iceland, Afar) appear to originate at LLSVP edges.`,
          examples: 'African LLSVP: centred at ~10°E, 10°S at CMB, ~2,000 km wide · Pacific LLSVP: centred beneath central Pacific, comparable size · Correlation: all large igneous province eruption sites project to LLSVP margins at CMB (Torsvik et al. 2006)',
        },
        {
          name: 'Resolution Limits and Non-Uniqueness',
          icon: Activity,
          color: BRAND.gold,
          desc: 'Global body-wave tomography has several inherent limitations. Ray coverage is uneven: earthquake-sparse regions (central oceans, Antarctica) have poor resolution. Finite-frequency effects matter for lower-frequency waves: the "banana-doughnut" sensitivity kernel (Dahlen et al. 2000) shows that rays are sensitive to velocity off their geometric path, not just along it — ignored in ray-theory inversions. Inversion non-uniqueness: the same travel-time dataset is fit equally well by many models. Regularisation (smoothing) preferentially damps short-wavelength anomalies, potentially smearing or erasing small features. Resolution tests (checkerboard tests) characterise where the model is reliable.',
          examples: `Checkerboard test: synthetic anomaly pattern injected into inversion — recovered where rays cross, lost where coverage is poor · Sub-ocean mantle: resolution ~500 km vs ~100 km under dense continental networks · Finite-frequency: Montelli et al. (2004) found plume conduits \'missed\' by ray theory due to narrow width`,
        },
      ],
    },
    {
      type: 'concept',
      title: 'Global tomographic models and what they tell us',
      body: `**The landscape of global models.** Dozens of global tomographic models now exist, produced by groups at Harvard, Caltech, Berkeley, Utrecht, and elsewhere. They differ in the dataset used (P-waves only, S-waves only, surface waves, or joint inversion), the parametrisation (blocks, spherical harmonics, irregular grids), and the regularisation applied. Despite these differences, the major features are robust across models: the LLSVPs, subducted slabs in the main subduction zones, and the broad mid-mantle transition zone.

**P-wave vs S-wave sensitivity.** P-waves and S-waves respond differently to temperature and composition. Both slow down in hot regions, but S-waves are much more sensitive to partial melt and to compositional changes involving iron content. In the LLSVPs, the ratio dVs/dVp is higher than expected for a purely thermal anomaly, which is part of the evidence for a chemical origin. Conversely, the subducted Farallon slab is seen more clearly in P-wave models than in some S-wave models, which is consistent with a cold but compositionally ordinary rock volume.

**The ISC catalogue as the data backbone.** The ISC global bulletin (International Seismological Centre, Thatcham, UK) has compiled reported phase arrivals from thousands of seismograph networks since 1964. The current database contains approximately 20 million P-wave picks and 3 million S-wave picks. The large number is essential: individual travel-time picks have uncertainties of 0.5–2 s (due to clock errors, picking uncertainties, and source mislocation), but averaged over millions of rays, the systematic anomalies emerge with high confidence. Station corrections — station-by-station time offsets that absorb crustal effects and clock biases — are essential for extracting mantle signal cleanly.

**From residuals to images: the inversion workflow.** (1) Collect observed arrival times. (2) Compute predicted times through PREM. (3) Calculate residuals (observed − predicted). (4) Correct for source-side effects (earthquake depth and location errors), receiver-side effects (local crustal thickness), and ellipticity of the Earth. (5) Assign residuals to ray segments passing through volume elements (voxels or blocks) in the mantle. (6) Solve the large linear system of equations (millions of equations, thousands of unknowns) by iterative least squares with regularisation. (7) Assess resolution via synthetic tests. The result is dVp or dVs at each block in the model, visualised as tomographic cross-sections and depth slices.`,
      cards: [
        {
          name: 'ISC Bulletin and Data Volume',
          icon: Activity,
          color: BRAND.coral,
          desc: '~20 million P-wave arrival times in the ISC global bulletin (as of mid-2020s), reported by thousands of seismograph stations worldwide. Individual pick uncertainty: 0.5–2 s. Systematic mantle anomalies: 0.5–5 s over long paths. Signal-to-noise improves with data volume — averaging millions of rays stabilises the inversion. Station corrections absorb crustal and instrumental biases. Source relocation (joint hypocenter-velocity inversion) is often done simultaneously to avoid mapping source errors into the mantle model.',
          examples: 'ISC-EHB dataset (Engdahl et al.): relocations using robust phases → reduced source error · ~1,800 permanent seismograph stations reporting to ISC globally · Global networks: GSN (IRIS/USGS), GEOSCOPE, IDA — standardised broadband instruments',
        },
        {
          name: 'Major P-wave Models',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Key global P-wave tomography models: Iyer & Hirahara (1993) early review; Grand (1994, 1997) — mantle S-wave models with Farallon slab imaged to CMB; van der Hilst et al. (1997) — P-wave model resolving slab penetration through 660 km; Bijwaard et al. (1998) — high-resolution irregular-grid P-wave model; Becker & Boschi (2002) — compilation of S-wave models. Modern era: LLSVP geometry refined in TX2005, SEMUCB-WM1, S40RTS, GLAD-M25 (full-waveform). Key agreement: LLSVPs, major slabs, circum-Pacific fast ring in lower mantle.',
          examples: 'van der Hilst et al. 1997: P-wave model showing Farallon slab penetration into lower mantle · Grand et al. 1997 Science: "Global seismic tomography: a snapshot of convection in the Earth" · TX2005: shows LLSVP sharp edges inconsistent with pure thermal origin',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Body-wave tomography: from earthquake to mantle image',
      body: 'Trace the full workflow of body-wave tomography — from an earthquake rupture through the data collection, inversion, and interpretation of deep-mantle structure. Each node represents a key step or physical process in the imaging chain.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'The body-wave tomography workflow, from earthquake source to mantle velocity model',
        nodes: [
          {
            id: 'earthquake',
            label: 'Earthquake Source',
            description: 'A magnitude 6+ earthquake ruptures a fault, radiating P-waves and S-waves in all directions. The source parameters (location, depth, origin time, focal mechanism) must be known or determined simultaneously with the velocity model. Source mislocation of even a few kilometres biases travel-time residuals and must be corrected. The ISC bulletin contains ~30,000 well-located earthquakes suitable for global tomography.',
            color: BRAND.coral,
          },
          {
            id: 'ray-propagation',
            label: 'Ray Propagation Through the Mantle',
            description: `Seismic energy propagates as P-waves (compressional) or S-waves (shear) along paths that curve through the mantle, refracting according to Fermat\'s principle. Rays from a shallow earthquake that arrive at a distant station bottom out in the lower mantle or CMB. Rays sampling shallower depths are those recorded at shorter distances. The geometry of ray paths determines which parts of the mantle are sampled — and where coverage gaps exist.`,
            color: BRAND.accent,
          },
          {
            id: 'station-recording',
            label: 'Seismograph Station Recording',
            description: 'Broadband seismographs at hundreds of permanent stations worldwide (Global Seismographic Network, GEOSCOPE, IDA) record the arriving waveform. The P-wave first-arrival time is measured by an analyst or automated picker. Uncertainty: typically 0.3–1.5 s. Station corrections (mean residuals from many events) absorb local crustal effects and clock drift. ~1,800 stations report to the ISC bulletin continuously.',
            color: BRAND.gold,
          },
          {
            id: 'residual-calculation',
            label: 'Travel-Time Residual Computation',
            description: 'For each ray path, the observed arrival time is compared with the predicted time through PREM. The residual (observed − predicted) carries the integrated velocity anomaly along the entire ray path — it is a line integral of slowness perturbations weighted by path length. Corrections are applied for: ellipticity of Earth, crustal thickness at source and receiver, water depth for ocean-bottom stations, and source depth. The corrected residual is the input to the inversion.',
            color: BRAND.amethyst,
          },
          {
            id: 'inversion',
            label: 'Tomographic Inversion',
            description: 'Millions of residual equations (one per ray) are assembled into a sparse linear system. Each equation says: the sum of (velocity perturbation × path length) in each block equals the travel-time residual for that ray. Iterative least-squares solvers (LSQR) find the velocity model that minimises the misfit to all data simultaneously, subject to regularisation. Damping and smoothing prevent over-fitting noise and suppress spurious short-wavelength features. The inversion is ill-posed — many models fit equally well — so regularisation choices significantly shape the result.',
            color: BRAND.jade,
          },
          {
            id: 'mantle-image',
            label: 'Mantle Velocity Model (dVp / dVs)',
            description: 'The output is a 3-D grid of velocity perturbations relative to PREM. Visualised as colour maps on depth slices or vertical cross-sections: blue (fast) for cold material (subducted slabs, ancient cratonic roots), red (slow) for hot material (plume upwellings, mid-ocean ridges, LLSVPs). Key features: fast Farallon slab beneath North America, fast circum-Pacific ring of subducted material in the lower mantle, large slow LLSVPs at the CMB beneath Africa and the Pacific, slow anomalies under Iceland and Yellowstone.',
            color: BRAND.accentHot,
          },
        ],
        edges: [
          { from: 'earthquake',         to: 'ray-propagation',     label: 'P/S-wave energy radiates from rupture, paths determined by Fermat\'s principle through the mantle velocity structure' },
          { from: 'ray-propagation',     to: 'station-recording',   label: 'waves arrive at surface stations after traversing mantle paths; travel time encodes integrated velocity anomaly' },
          { from: 'station-recording',   to: 'residual-calculation', label: 'analyst or autopicker measures P-wave arrival time; residual computed vs PREM prediction and corrected for crustal effects' },
          { from: 'residual-calculation', to: 'inversion',           label: 'millions of corrected residuals assembled into sparse linear system for simultaneous mantle velocity inversion' },
          { from: 'inversion',           to: 'mantle-image',        label: 'iterative least-squares solution with regularisation yields 3-D dVp/dVs model visualised as tomographic cross-sections' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'A seismograph station records P-waves that arrive 2.5 seconds earlier than predicted by PREM from an earthquake 5,000 km away. What does this negative travel-time residual indicate, and what geological structure most commonly produces such anomalies?',
          a: [
            'A negative residual means the station clock is running fast; it indicates instrument malfunction rather than mantle structure',
            'A negative residual means P-waves traversed faster-than-average material along part of their path; the most common geological cause is a cold, dense subducted oceanic slab, which retains temperatures 500–800°C below ambient mantle and produces P-wave velocities 2–3% faster than PREM',
            'A negative residual means the earthquake was shallower than the catalogue depth, making the path shorter than assumed; shallow-focus earthquakes always produce early arrivals at distant stations',
            'A negative residual means S-waves converted to P-waves at the core-mantle boundary; this conversion shortens the effective path and produces early arrivals independent of mantle temperature',
          ],
          correct: 1,
          explain: 'Travel-time residuals encode the integrated velocity anomaly along the ray path. A negative residual (arrival earlier than PREM predicts) means the average P-wave velocity along the path exceeds PREM — the wave traversed anomalously fast material. The most common cause in global tomography is a cold subducted oceanic slab: oceanic lithosphere cools conductively over millions of years, reaching densities and velocities well above ambient mantle. At 100 km depth, slab temperatures may be 500–800°C colder than surrounding mantle, producing dVp of +2 to +3% — sufficient to generate multi-second travel-time advances over long ray paths. Clock errors (A) are real concerns but are corrected using station correction terms derived from many events; a single anomaly in one direction would not be attributed to clock error. Source-depth errors (C) do affect travel times, but this is corrected during the inversion and does not produce the systematic pattern required to map mantle structure. PcP phase conversions (D) are a separate seismic phase entirely and are not what is described here.',
        },
        {
          q: `Fermat\'s principle governs seismic ray paths through the mantle. Which statement correctly describes what it predicts about how a ray behaves when it encounters a fast velocity anomaly such as a subducted slab?`,
          a: [
            'The ray is deflected away from the fast anomaly, bending toward slower surrounding mantle to minimize travel time by avoiding the region where it would spend more time per kilometre',
            'The ray travels in a straight line regardless of velocity contrasts — Fermat\'s principle only applies to light, not seismic waves; seismic rays follow the path of minimum distance between source and receiver',
            'The ray bends toward the fast anomaly; entering faster material refracts the ray toward the normal at the interface, causing it to spend more of its path in the high-velocity zone and arrive at the receiver sooner than a straight-line path through slower material',
            'The ray splits into two equal-energy branches at the edge of the fast anomaly; one branch passes through the slab and one diffracts around it, and the station records both as separate arrivals',
          ],
          correct: 2,
          explain: `Fermat\'s principle states that a ray follows the path of stationary travel time — in a heterogeneous medium this is the path of minimum time, which means the ray bends toward faster material. The analogy is Snell\'s law in optics: a light ray entering a denser (faster) medium bends toward the normal; a seismic ray entering a faster velocity region likewise refracts toward the normal, spending proportionally more of its path in the high-velocity material. For a subducted slab, rays passing at an oblique angle through the fast material are pulled toward it — they exit the other side with a time advance relative to rays that travelled only through slower ambient mantle. This is why stations on the far side of a slab record early arrivals. Option A describes the opposite of what Fermat\'s principle predicts. Option B is incorrect — Fermat\'s principle applies equally to seismic waves, and geometric ray theory is the standard approximation used in global tomography. Option D describes diffraction, which does occur at sharp edges, but is not what Fermat\'s principle primarily predicts for wave propagation through a velocity anomaly.`,
        },
        {
          q: 'The Large Low Shear Velocity Provinces (LLSVPs) at the base of the mantle have dVs anomalies of −2 to −3% and sharply defined edges. Why do these characteristics suggest a chemical rather than purely thermal origin?',
          a: [
            'Because −2 to −3% dVs is too large to be explained by any reasonable temperature anomaly; only phase transitions from mineral assemblages denser than the surrounding mantle can produce such velocity reductions',
            'A purely thermal anomaly at the CMB would have gradational boundaries controlled by heat diffusion, which operates slowly; thermal anomalies would also produce similar proportional reductions in both Vp and Vs; the sharp LLSVP edges and the high dVs/dVp ratio are both inconsistent with temperature alone and suggest dense, chemically distinct material of different composition from the surrounding mantle',
            'Because thermal anomalies at CMB depths would increase rather than decrease shear-wave velocity; only compositional changes involving iron depletion can produce slow S-wave anomalies at pressures above 130 GPa',
            'The evidence for chemical origin comes entirely from the size of the LLSVPs — at 2,000 km across they are too large to represent transient thermal upwellings, which convective timescales show would disperse within 10–20 Ma at CMB temperatures',
          ],
          correct: 1,
          explain: 'Two lines of evidence point toward a chemical (not purely thermal) origin for the LLSVPs. First, the boundaries: thermal anomalies are governed by diffusion (thermal diffusivity of mantle ~10⁻⁶ m²/s), which over billions of years produces smooth, gradational temperature gradients rather than sharp interfaces. The LLSVPs have velocity contrasts of ~3% over distances of tens to ~100 km — far sharper than diffusion would produce. This sharpness requires a compositional boundary (a change in mineralogy or iron content) to maintain the contrast against billions of years of diffusion. Second, the dVs/dVp ratio: in a purely thermal anomaly, both P and S velocities decrease proportionally. In the LLSVPs, S-waves are anomalously slow relative to P-waves — the dVs/dVp ratio is higher than thermal predictions. S-waves are more sensitive than P-waves to iron content and to the presence of partial melt; enrichment in iron (which lowers the bulk and shear moduli differently) or small amounts of partial melt (which severely reduces shear modulus but barely affects bulk modulus) both produce high dVs/dVp ratios. Option A is incorrect — thermal anomalies of 500–1,000 K can produce dVs of 1–3% depending on mineral physics parameterisations. Option C has the sign wrong — high pressure at the CMB means different mineral physics, but hot anomalies still produce slow velocities. Option D is a valid physical argument but is not the primary evidence and is not what seismologists cite for the chemical origin inference.',
        },
        {
          q: 'Why is inversion non-uniqueness a fundamental limitation of seismic tomography, and how do tomographers address it?',
          a: [
            'Non-uniqueness arises because earthquakes only occur in subduction zones and continental interiors, leaving vast regions of the mantle under ocean basins entirely unsampled; it is addressed by deploying ocean-bottom seismometers',
            'Non-uniqueness means that many different velocity models can produce travel-time residuals that fit the observed data equally well within the noise level; it is addressed by imposing regularisation (damping and smoothing) that prefers the simplest model consistent with the data, and by performing checkerboard or synthetic recovery tests to quantify where the inversion is reliable',
            'Non-uniqueness arises because P-waves and S-waves travel at different speeds, so the same velocity anomaly produces different residuals depending on phase type; it is resolved by jointly inverting P and S data simultaneously',
            'Non-uniqueness means that multiple earthquake sources can produce the same waveform at a given station, making it impossible to separate source from structure effects; it is resolved by using only earthquakes with well-constrained focal mechanisms',
          ],
          correct: 1,
          explain: 'The tomographic inversion problem is mathematically ill-posed: the dataset (travel-time residuals from a finite number of ray paths) underdetermines the model (velocity at millions of volume elements). Infinitely many velocity distributions produce predicted travel times that fit the observations within their uncertainty. This is non-uniqueness in the strict mathematical sense — it does not mean the data are worthless, but it means the solution is not unique without additional constraints. The standard approach is regularisation: adding mathematical penalties that favour models with small amplitude (damping) or smooth spatial variation (Laplacian smoothing). Damping suppresses spurious features by penalising large velocity anomalies; smoothing connects nearby model parameters, preferring spatially coherent structures over point anomalies. The chosen regularisation controls the effective resolution: too little gives unstable, noisy solutions; too much smears real features and underestimates amplitudes. Resolution is assessed by recovery tests: inject a known synthetic velocity model into the inversion (checkerboard of alternating fast/slow blocks, or a synthetic plume), verify that the inversion recovers it where ray coverage is adequate. Poor ray coverage in ocean basins (A) contributes to resolution gaps but is a coverage issue, not non-uniqueness per se. Jointly inverting P and S (C) helps constrain the temperature/composition tradeoff but does not resolve mathematical non-uniqueness. Source-structure trade-off (D) is a real complication addressed by simultaneous relocation, but is distinct from non-uniqueness of the mantle model itself.',
        },
        {
          q: 'Grand (1994) imaged the Farallon slab as a fast (dVp > 0) anomaly extending from the western United States down to ~2,800 km depth — the core-mantle boundary. What does this tell us about mantle convection, and why is it significant for our understanding of the 660 km discontinuity?',
          a: [
            'The Farallon slab image confirms that the 660 km discontinuity acts as a complete barrier to downward flow, deflecting all slabs horizontally into the transition zone; the deep fast anomaly is from a separate ancient subduction event unrelated to Farallon',
            'The Farallon slab image shows that subducted oceanic lithosphere can penetrate through the 660 km phase transition and descend into the lower mantle as a coherent fast anomaly, reaching the CMB over geological time; this implies whole-mantle convection rather than layered convection and shows that the 660 km discontinuity does not completely block slab penetration',
            'The Farallon slab image demonstrates that the lower mantle is compositionally identical to the upper mantle, because a slab of different composition would have been seismically invisible below 660 km depth; composition controls visibility, not temperature',
            'The fast anomaly at 2,800 km depth simply reflects the higher intrinsic velocity of the lower mantle; all material reaching CMB pressures has elevated Vp regardless of temperature, making it impossible to distinguish the Farallon slab from normal lower-mantle material',
          ],
          correct: 1,
          explain: `One of the central debates in mantle dynamics for decades was whether convection operates as a single whole-mantle system or as two layered systems separated at 660 km depth. The 660 km discontinuity corresponds to the ringwoodite → bridgmanite + ferropericlase phase transition, which has a negative Clapeyron slope (the transition occurs at lower pressure, i.e. shallower depth, in cold material). This negative slope means that a cold downgoing slab experiences extra negative buoyancy at the 660, which should resist penetration — potentially supporting layered convection. Grand\'s (1994) S-wave tomography, and van der Hilst et al.\'s (1997) P-wave model, showed the Farallon slab as a coherent, continuous fast anomaly from ~100 km depth under the western US all the way to the CMB under the eastern US, a vertical span of ~2,700 km. This was compelling evidence for whole-mantle convection — at least some slabs do penetrate 660 km and descend to the CMB. The Farallon plate subducted primarily from ~170 Ma to ~30 Ma; the slab material has had tens of millions of years to sink through the lower mantle and accumulate at the CMB. Option A contradicts the observation — Grand explicitly imaged the slab below 660 km as continuous. Option C is incorrect — thermal anomalies in cold slabs do remain visible in the lower mantle because the thermal relaxation time at lower mantle pressures is long. Option D misunderstands the observation — the fast anomaly is localised to the region of the expected Farallon slab, not uniformly present throughout the lower mantle.`,
        },
      ],
    },
  ],
}

export default bodyWaveTomography
