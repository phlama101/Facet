import { Radio, Waves, Globe, Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const surfaceWaveTomography: Lesson = {
  id: 'seis-201-1-1-2',
  title: 'Surface Wave Tomography and Ambient Noise',
  track: 'geo',
  trackName: 'Advanced Seismology',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: `Surface waves sample shear velocity from the crust to the deep upper mantle. Ambient noise tomography — cross-correlating continuous noise records between station pairs — extracts surface-wave Green\'s functions without earthquakes, enabling high-resolution imaging of the crust and uppermost mantle beneath densely instrumented regions like the USArray Transportable Array.`,
  sources: [
    { org: 'IRIS',    title: 'USArray Transportable Array — EarthScope Data Portal',                          url: 'https://www.earthscope.org/data/transportable-array/' },
    { org: 'Nature',  title: 'Shapiro et al. (2005) — High-Resolution Surface-Wave Tomography from Ambient Seismic Noise, Science', url: 'https://doi.org/10.1126/science.1108339' },
    { org: 'USGS',    title: `USGS — Surface Waves and Earth\'s Interior Structure`,                         url: 'https://earthquake.usgs.gov/learn/topics/seismology/waves.php' },
    { org: 'CIG',     title: 'Computational Infrastructure for Geodynamics — Seismic Wave Propagation',       url: 'https://geodynamics.org/' },
    { org: 'NCEDC',   title: 'Northern California Earthquake Data Center — Seismic Waveform Archive',         url: 'https://ncedc.org/' },
  ],
  sections: [
    {
      type: 'intro',
      title: `Listening to the Earth\'s hum`,
      body: `Long after the sharp body-wave arrivals from an earthquake have passed, seismograms continue to show rhythmic oscillations at periods of 5–300 seconds. These are surface waves — seismic energy that propagates along the Earth's surface rather than through its interior, their amplitude decaying more slowly with distance than body waves and their sensitivity to structure concentrated in the uppermost few hundred kilometres of the mantle.

Surface waves come in two fundamental types. Rayleigh waves cause the ground to move in an elliptical retrograde orbit in the vertical plane — particles move up and forward as the wave crest passes, backward and down in its trough — analogous to ocean surface waves. Love waves cause purely horizontal shear motion perpendicular to the direction of propagation, with no vertical component. Both types are dispersive: their velocity depends on frequency (or equivalently, period). Long-period (low-frequency) surface waves sample deep structure; short-period (high-frequency) waves are sensitive only to shallow structure. This dispersion is not a complication — it is the key to their imaging power, because measuring phase or group velocity as a function of period gives a depth-sensitive measurement of shear velocity.

The crucial insight of ambient noise tomography, pioneered around 2004–2005, is that the Earth is never seismically quiet. Oceans continuously generate surface waves at periods of 5–30 seconds (ocean microseisms) through wave-wave interactions and wave-seafloor coupling. These microseisms propagate in all directions across the continents. If you cross-correlate the continuous seismic noise records at two stations, the correlation function converges, after long averaging, to the empirical Green's function between those two stations — the surface wave that would arrive from a virtual source at one station recorded at the other. This breakthrough meant that densely instrumented networks could extract surface-wave measurements between every pair of stations without waiting for earthquakes — dramatically increasing dataset size and enabling imaging at depths of 5–50 km that are inaccessible to teleseismic surface waves.`,
      keyTerms: [
        {
          term: 'Rayleigh wave',
          def: 'A surface wave with retrograde elliptical particle motion in the vertical plane containing the direction of propagation. Sensitive to both P-wave and S-wave velocity (primarily Vs), and to density. Rayleigh wave phase velocity at a given period is primarily controlled by Vs at a depth of roughly one-third the wavelength. Used extensively in surface wave tomography to image Vs from the crust into the upper mantle.',
        },
        {
          term: 'Love wave',
          def: 'A surface wave with purely horizontal transverse particle motion; requires a low-velocity layer (typically the crust) overlying faster material (mantle) to exist. Sensitive only to Vs and density, not Vp. Love waves at a given period sample Vs at similar depths to Rayleigh waves of the same period but with different sensitivity kernels. Discrepancies between Love and Rayleigh wave tomography models (Love-Rayleigh discrepancy) are often attributed to seismic anisotropy.',
        },
        {
          term: 'Dispersion',
          def: 'The frequency (or period) dependence of surface wave velocity. Long-period surface waves penetrate deeper and travel faster (because deeper mantle material is faster); short-period waves are trapped in the crust and travel more slowly. Dispersion curves — velocity as a function of period — are the primary observable in surface wave tomography. Inverting dispersion curves for a depth-velocity profile is the surface wave equivalent of body-wave travel-time inversion.',
        },
        {
          term: 'Phase velocity vs group velocity',
          def: 'Phase velocity (c) is the speed at which the wave crest of a single-frequency component advances. Group velocity (U) is the speed at which the wave packet (energy) travels. In a dispersive medium, c ≠ U; the two are related by U = c − λ(dc/dλ) where λ is wavelength. Phase velocity measurements require tracking the phase of a coherent wave; group velocity is measured from the envelope of a wave packet. Phase velocity tomography is generally more accurate but requires careful earthquake source corrections.',
        },
        {
          term: 'Ambient noise tomography',
          def: `A method that extracts empirical Green\'s functions — effectively surface waves between every pair of seismograph stations — by cross-correlating long records (months to years) of continuous ambient seismic noise. The noise field is dominated by ocean microseisms (5–30 s period). Cross-correlation converges to the Green\'s function when the noise field is isotropic. First demonstrated regionally by Shapiro et al. (2005) using USArray data; now applied globally. Enables imaging at 5–50 km depth, largely inaccessible to teleseismic body waves.`,
        },
        {
          term: 'USArray Transportable Array (TA)',
          def: 'A rolling array of ~400 broadband seismograph stations spaced ~70 km apart that traversed the contiguous United States from west to east between 2004 and 2012, as part of the EarthScope program. Each station was installed for ~2 years before being moved eastward. The TA provided the densest seismic coverage ever achieved at continental scale in North America, enabling high-resolution ambient noise and surface wave tomography of the crust and upper mantle beneath the entire continent.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'How surface waves image shear velocity structure',
      body: `**Depth sensitivity and the dispersion relation.** A surface wave at period T samples Vs at a depth of roughly T × (Vs/4) — at 20 s period and Vs ~ 4 km/s, the sensitivity peak is at ~20 km depth (mid-crust); at 100 s period, the peak is near 100 km (upper mantle lithosphere). This simple scaling means that measuring surface-wave phase velocity over a range of periods effectively measures a depth profile of Vs — longer periods give deeper information. The full depth-velocity relationship is encoded in the dispersion curve.

Inverting a dispersion curve for a Vs depth profile is itself an ill-posed problem: the dispersion curve at 20 periods cannot uniquely determine Vs at every depth. Joint inversion of Rayleigh (sensitive to vertically polarised Vs) and Love (sensitive to horizontally polarised Vs) wave dispersion can constrain radial anisotropy — the difference between horizontally and vertically polarised Vs — which is linked to the preferred orientation of anisotropic minerals (olivine in the mantle).

**What Vs tells us geologically.** Shear velocity in the upper mantle is controlled primarily by temperature, with important secondary effects from water content, grain size, and partial melt. Hot asthenosphere has Vs of ~4.2–4.4 km/s; cold cratonic lithosphere roots can reach Vs of 4.7–4.9 km/s — a 10–15% range that is far larger than the ±2–3% variation in global body-wave tomography. This large dynamic range makes surface wave tomography particularly powerful for imaging lithospheric structure.

Key lithospheric features revealed by Vs tomography:
- **Cratons**: ancient (~2+ Ga) continental cores with cold, depleted lithospheric roots extending to 200–300 km depth. Vs is anomalously fast — the cold, water-poor, iron-depleted composition of Archean lithosphere produces Vs up to 4.8 km/s at 100–150 km depth. The Kaapvaal craton (southern Africa) and Superior Province (Canada) are archetypal examples.
- **Mid-ocean ridges**: shallow, slow Vs anomaly centred at 20–80 km depth directly beneath ridge axes — partial melt (even 1–2% melt reduces Vs dramatically) and elevated temperature. Vs of 4.0–4.2 km/s or lower beneath active spreading centres.
- **Oceanic plates**: Vs increases as plates cool and thicken with age. Young plates (0–10 Ma): Vs ~ 4.2 km/s at 60 km; old plates (80+ Ma): Vs ~ 4.5+ km/s at 80 km, reflecting a 50–80 km thick thermal lithosphere.

**The partial melt effect.** Even small fractions of partial melt (0.5–2%) dramatically lower shear velocity because melt has near-zero shear modulus. This high sensitivity makes Vs the best seismic proxy for partial melt. The slow Vs anomaly beneath Yellowstone (4.0–4.1 km/s at 40–60 km depth) is partly attributed to crustal partial melt associated with the hotspot. The low-velocity zone (LVZ) in the upper mantle at 80–200 km depth globally is attributed to a small melt fraction in the asthenosphere.`,
      cards: [
        {
          name: 'Dispersion and Depth Sensitivity',
          icon: Waves,
          color: BRAND.coral,
          desc: 'Rayleigh wave sensitivity to Vs peaks at depth ~ T×Vs/4. At 10 s period: sensitivity at ~10 km (upper crust). At 50 s: ~50 km (lower lithosphere). At 150 s: ~150 km (asthenosphere). Dispersion curve shape reflects Vs profile: sharp velocity increases with depth produce rapid phase velocity increase with period; low-velocity zones produce anomalous group velocity minima. Joint Rayleigh + Love inversion constrains radial anisotropy (VSH vs VSV), linked to olivine fabric and mantle flow direction.',
          examples: 'Western US at 20 s: phase velocity 3.5 km/s (slow, thin crust + hot Basin and Range) · Eastern US at 20 s: 3.7 km/s (cold, thick Appalachian crust) · Global 150-s Rayleigh: fast under cratons (4.7 km/s), slow under ridges (4.1 km/s)',
        },
        {
          name: 'Cratonic Roots and Oceanic Structure',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Cratons have deep (200–300 km), cold, depleted lithospheric roots with Vs 4.7–4.9 km/s — fast relative to warm phanerozoic lithosphere (4.3–4.5 km/s at same depths). The depletion (low iron, low water) stabilises the root against convective erosion — it is positively buoyant despite being colder than the surrounding asthenosphere. Oceanic lithosphere thickens as it ages (GDH1 model: thickness ~ 11√(age in Ma) km). Old Pacific lithosphere (100+ Ma) is ~90 km thick with Vs > 4.5 km/s; young lithosphere at ridges has no fast lid at all.',
          examples: 'Kaapvaal craton: Vs 4.85 km/s at 150 km (James et al. 2001) · Superior Province (Canada): fast root to 250 km · East Pacific Rise: Vs 3.9 km/s at 50 km depth (partial melt in asthenosphere) · Atlantic basin at 140 Ma age: Vs ~ 4.55 km/s at 80 km',
        },
        {
          name: 'Ambient Noise: Green\'s Function from Noise Cross-Correlation',
          icon: Radio,
          color: BRAND.amethyst,
          desc: `Theory (Weaver & Lobkis 2001; Shapiro & Campillo 2004): in an equipartitioned diffuse wave field, the cross-correlation of noise records at two stations converges to the Green\'s function (impulse response) between them. In practice, ocean microseisms (peak at 5–10 s, second peak at ~14 s) create a nearly isotropic noise field across continents. Cross-correlating 6–24 months of continuous records at station pairs extracts Rayleigh and Love wave dispersion measurements. No earthquakes needed. Measurements between every station pair — for N stations, N(N-1)/2 paths — far exceed teleseismic surface wave datasets from earthquakes alone.`,
          examples: 'USArray TA with 400 stations: ~80,000 station pairs → 80,000 dispersion measurements at each period · Averaging time needed: 6–18 months for signal-to-noise ratio > 10 at 10 s period · Noise sources: storm waves in North Atlantic and North Pacific drive continental microseisms',
        },
        {
          name: 'USArray and High-Resolution Continental Tomography',
          icon: Activity,
          color: BRAND.gold,
          desc: 'The USArray Transportable Array (2004–2012) deployed ~400 broadband stations on a 70 km grid, rolling eastward across the contiguous US. Ambient noise tomography (Shapiro et al. 2005; Lin et al. 2008; Moschetti et al. 2010) produced Vs maps at 5–80 km depth with ~100 km horizontal resolution — unprecedented for a continent. Key results: Basin and Range province (slow Vs, thin crust, extensional tectonics); Yellowstone hotspot anomaly (slow, ~10% below ambient at 40–60 km); Cascadia subduction (slow volcanic arc, fast Juan de Fuca slab imaged in body waves); Colorado Plateau (fast cratonic core compared with surrounding Basin and Range).',
          examples: 'Moschetti et al. 2010 JGR: Vs maps of US crust and uppermost mantle from TA ambient noise · Yang et al. 2008: Yellowstone low-velocity body at 40–80 km depth, ΔVs ~ −8% · Cascadia: slow Vs under Cascades volcanic arc at 30–50 km depth',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Practice and limits of ambient noise tomography',
      body: `**Processing pipeline.** Ambient noise tomography involves several careful processing steps. Raw continuous records are first inspected and cleaned: instrumental glitches, large earthquakes, and data gaps are removed or down-weighted. The records are then normalised in time (to suppress the dominance of earthquake signals, which are not diffuse noise) and in frequency (spectral whitening, to flatten the noise spectrum). Cross-correlations are computed for every station pair over monthly or longer time windows, then stacked. The symmetric component (average of causal and acausal lags) is the empirical Green's function. Dispersion is measured by frequency-time analysis (multiple filter technique) or phase velocity measurement along rows of stations.

**Strengths relative to earthquake-based methods.** (1) No earthquakes needed — suitable for aseismic regions and for imaging at short periods where teleseismic earthquakes have little energy. (2) Short-period coverage (5–30 s) images crustal structure at 5–40 km depth — including sedimentary basins, the lower crust, and Moho topography — that teleseismic surface waves cannot reach because long-period waves sample too deeply. (3) Continuous operation produces ever-growing datasets; resolution improves automatically as recording time lengthens. (4) Dense arrays generate extraordinary path coverage with millions of station pairs.

**Limitations.** The assumption of an isotropic, equipartitioned noise field is imperfect. Ocean microseisms are generated primarily in the North Atlantic and North Pacific, so the noise field is azimuthally anisotropic — some inter-station azimuths are better illuminated than others. This can bias phase velocity measurements and introduce apparent anisotropy. Very long periods (>50 s) are poorly extracted from noise because the microseismic noise field weakens at long periods — teleseismic earthquakes remain essential for mantle-depth imaging (50–300 s). Depth resolution in Vs inversion from surface waves is limited by the non-uniqueness of dispersion curve inversion — shallow and deep Vs trade off.

**Global ambient noise.** The technique has been extended globally using continent-wide networks. Global ambient noise models at 5–50 s period constrain crustal thickness and Vs globally, complementing body-wave and long-period surface wave models. The combination of ambient noise (shallow), teleseismic surface waves (intermediate), and body waves (deep) is now standard in joint inversions for full Earth structure.`,
      cards: [
        {
          name: 'Noise Cross-Correlation Processing',
          icon: Radio,
          color: BRAND.coral,
          desc: 'Pipeline: (1) Download continuous waveforms. (2) Remove mean, trend, instrument response. (3) Identify and down-weight earthquake windows. (4) Temporal normalisation (one-bit or clipping). (5) Spectral whitening. (6) Compute cross-correlations between all station pairs for each day. (7) Stack daily cross-correlations over months to years. (8) Measure group/phase velocity dispersion from symmetric cross-correlation. (9) Tomographic inversion: travel-time anomalies from dispersion measurements, then 2-D phase velocity maps at each period, then depth inversion for Vs profile.',
          examples: 'Typical stack: 12–24 months; SNR > 10 at 10 s period for station pairs < 1,000 km · Cross-correlation length: retain times from −max_dist/c to +max_dist/c · Bensen et al. (2007): widely used processing guide for ambient noise cross-correlation',
        },
        {
          name: 'Yellowstone and Basin and Range from TA',
          icon: Activity,
          color: BRAND.accent,
          desc: 'The US Transportable Array revealed dramatic Vs contrasts across the western US. Basin and Range Province: Vs 3.4–3.6 km/s at 20–30 km depth (thin, hot crust; Moho at 25–30 km). Yellowstone hotspot: prominent slow body centred at 40–80 km depth (ΔVs ~ −8 to −10%), interpreted as a combination of partial melt, elevated temperature, and possible fluids from the underlying mantle plume. The Yellowstone slow anomaly tilts NW with depth, consistent with southwestward motion of the North American plate over a fixed heat source. Colorado Plateau: faster Vs (3.9 km/s at 30 km), thick (40–50 km) crust; resistant to Basin and Range extension.',
          examples: 'Yellowstone caldera: heat flow up to 2,000 mW/m² (100× global average) · Basin and Range crustal thickness: 25–35 km vs 40–50 km for Colorado Plateau · Smith et al. (2009): Yellowstone hotspot imaged to 200 km depth using body waves',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From noise cross-correlation to Vs tomography',
      body: 'Trace the ambient noise tomography workflow from continuous seismograph recordings to a shear-velocity depth profile of the crust and upper mantle. Each node represents a key processing step or physical concept.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Ambient noise tomography: from continuous seismic noise to Vs structure of the lithosphere',
        nodes: [
          {
            id: 'ocean-microseisms',
            label: 'Ocean Microseisms (Noise Source)',
            description: 'Storm-driven ocean waves interact with the seafloor and with opposing wave trains to generate continuous seismic surface waves at periods of 5–30 seconds. The dominant microseismic peak at ~14 s (secondary microseisms) is generated by nonlinear wave-wave interactions in the deep ocean. These signals propagate as Rayleigh and Love waves across entire continents, arriving at seismograph stations from all azimuths — creating the continuous, diffuse background noise field that ambient noise tomography exploits.',
            color: BRAND.accent,
          },
          {
            id: 'continuous-recording',
            label: 'Continuous Broadband Recording',
            description: 'Broadband seismometers at permanent network stations record ground motion continuously at sample rates of 1–100 Hz. The USArray Transportable Array (400 stations, 70 km spacing) was the prototype large-scale deployment. Modern processing uses 12–24 months of continuous data per station pair to accumulate sufficient signal-to-noise ratio in the cross-correlation. Data are archived in SEED format at data centres (IRIS DMC, NCEDC) and freely available.',
            color: BRAND.coral,
          },
          {
            id: 'preprocessing',
            label: 'Noise Record Preprocessing',
            description: `Raw records are cleaned before cross-correlation. Steps: remove instrument response (convert to displacement or velocity), apply bandpass filter (0.05–1 Hz for microseismic band), identify and clip earthquake arrivals (temporal normalisation or one-bit normalisation), apply spectral whitening to flatten the noise spectrum. These steps are critical — without them, large earthquake signals would dominate the cross-correlation and the resulting Green\'s function would be contaminated by non-diffuse energy.`,
            color: BRAND.gold,
          },
          {
            id: 'cross-correlation',
            label: 'Noise Cross-Correlation',
            description: `For each station pair, the preprocessed records are cross-correlated. The cross-correlation function has a causal (positive lag) and acausal (negative lag) component corresponding to waves travelling in opposite directions between the stations. These are symmetrised and stacked over many months of data. The stacked, symmetric cross-correlation function is the empirical Green\'s function — it contains the surface wave signal that propagates between the two stations as if one were a virtual source. Group and phase velocity are measured from this function using frequency-time analysis.`,
            color: BRAND.amethyst,
          },
          {
            id: 'dispersion-measurement',
            label: 'Surface Wave Dispersion Measurement',
            description: 'Phase velocity or group velocity is measured as a function of period (typically 5–50 s for ambient noise; 20–300 s for earthquake surface waves). At each period, the measured velocity encodes the average Vs from the surface to a characteristic depth (~period × Vs / 4). Dispersion measurements from many station pairs at each period are combined into 2-D phase velocity maps — essentially one tomographic map per period. These maps are then inverted depth-by-depth for Vs as a function of depth.',
            color: BRAND.jade,
          },
          {
            id: 'vs-model',
            label: 'Shear Velocity (Vs) Model of the Lithosphere',
            description: 'Inverting the period-dependent phase velocity maps yields a 3-D Vs model of the crust and upper mantle. Fast Vs regions (blue): cold cratonic lithosphere, subducted slabs. Slow Vs regions (red): hot asthenosphere, partial melt, rifts, active volcanic regions. At 100 km depth across North America, USArray ambient noise tomography shows a dramatic contrast: Vs > 4.5 km/s under the stable Archean craton of the Canadian Shield vs Vs < 4.1 km/s under the Basin and Range, Cascades, and Yellowstone hotspot.',
            color: BRAND.accentHot,
          },
        ],
        edges: [
          { from: 'ocean-microseisms',  to: 'continuous-recording',  label: 'ocean-generated Rayleigh and Love waves propagate across continents, recorded as continuous background noise at seismograph stations' },
          { from: 'continuous-recording', to: 'preprocessing',       label: 'raw continuous SEED records downloaded from IRIS DMC; instrument response removed; earthquake windows identified and normalised' },
          { from: 'preprocessing',       to: 'cross-correlation',    label: 'cleaned, normalised daily records cross-correlated between all station pairs; stacked over 12–24 months to converge to empirical Green\'s function' },
          { from: 'cross-correlation',   to: 'dispersion-measurement', label: 'symmetric cross-correlation function analysed by multiple-filter technique to extract Rayleigh and Love wave group and phase velocities vs period' },
          { from: 'dispersion-measurement', to: 'vs-model',          label: 'period-by-period phase velocity maps tomographically inverted for 3-D Vs; depth resolution from sensitivity kernels of each period' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'A Rayleigh wave at 50-second period travels at 4.3 km/s across the Canadian Shield but only 3.8 km/s across the Basin and Range Province. What does this difference reveal about the upper mantle beneath these two regions, and why is Vs the key parameter?',
          a: [
            'The difference reveals that the Basin and Range has a thicker crust, which slows surface waves; crustal thickness is the only parameter that controls Rayleigh wave phase velocity',
            'The difference reveals that the upper mantle beneath the Canadian Shield is colder and has a thicker, faster-Vs lithospheric root than beneath the Basin and Range; shear velocity is sensitive to temperature and partial melt — cold, depleted cratonic lithosphere has Vs up to 4.8 km/s at 100 km depth, while hot, thin extensional lithosphere has Vs of 4.0–4.2 km/s at the same depth; at 50 s period, Rayleigh waves are most sensitive to Vs at ~50 km depth, sampling well into the lithospheric mantle',
            'The 50-s Rayleigh wave difference reflects primarily differences in crustal composition — the Canadian Shield is underlain by felsic granodiorite while the Basin and Range has mafic lower crust; crustal composition controls Rayleigh wave velocity at this period',
            'The velocity difference is due to differences in surface topography — the Basin and Range has lower mean elevation and the Canadian Shield is near sea level; topography changes the effective path length of surface waves and thus their apparent velocity',
          ],
          correct: 1,
          explain: 'Rayleigh waves at 50 s period have their peak sensitivity to Vs at approximately 50 km depth — well into the lithospheric mantle beneath a thick craton, and into the asthenosphere beneath thin, extended lithosphere. Shear velocity (Vs) is sensitive primarily to temperature and the presence of partial melt. The Canadian Shield (Archean craton) has a cold, depleted lithospheric root extending to 200–300 km depth, with Vs of 4.6–4.85 km/s in the uppermost mantle. The Basin and Range Province is in active extensional rifting: thin lithosphere (~50 km), elevated heat flow (80–120 mW/m² vs 40–60 mW/m² for shield), and possible small fractions of partial melt in the asthenosphere give Vs of 4.0–4.2 km/s at 50 km depth. The 0.5 km/s difference in surface wave phase velocity directly reflects this ~500°C temperature difference in the uppermost mantle. Crustal thickness (A) does affect Rayleigh waves at shorter periods (10–30 s) but is secondary to mantle Vs at 50 s. Crustal composition (C) has a modest effect on velocities but cannot explain the 0.5 km/s contrast — temperature and melt dominate. Topography (D) is irrelevant to intrinsic wave velocity measurements corrected for path length.',
        },
        {
          q: 'What is the physical basis of ambient noise tomography, and why does cross-correlating continuous noise records between two stations extract useful information about surface wave propagation?',
          a: [
            'Ambient noise cross-correlation works because earthquake surface waves from regional events are simultaneously recorded at all stations; the cross-correlation of two records identifies the time difference of the same earthquake wave arriving at the two stations, giving inter-station travel time',
            'Cross-correlating ambient noise records extracts the empirical Green\'s function between the two stations: if the noise field is sufficiently isotropic and equipartitioned (energy arriving from all directions equally), the cross-correlation converges to the surface wave that would be recorded at one station if the other were a point source — providing inter-station Rayleigh and Love wave dispersion measurements without any earthquakes',
            'Ambient noise cross-correlation exploits the fact that seismic noise is periodic; the dominant 14-s microseismic peak acts as a monochromatic source whose phase shifts between stations can be measured to determine inter-station velocity',
            'The cross-correlation works because seismograph stations are all synchronised to GPS time; taking the cross-correlation of two synchronised records automatically removes station-specific noise and leaves only the signal propagating between them',
          ],
          correct: 1,
          explain: `The theoretical foundation (Weaver & Lobkis 2001; Shapiro & Campillo 2004) is that in a diffuse, equipartitioned seismic wave field, the cross-correlation of noise records at two points converges to the Green\'s function between them — specifically, the imaginary part of the Green\'s function, which is the displacement response to an impulsive source. Physically: if noise arrives from all directions with equal power, contributions from noise sources near the inter-station path add coherently in the cross-correlation, while sources off the path cancel. After averaging over many months, the residual signal is dominated by surface waves propagating along the inter-station path in both directions, appearing as a symmetric cross-correlation with group and phase velocity encoding the Vs structure along that path. Option A describes classical earthquake cross-correlation (which is a different, simpler measurement) and misidentifies the noise source. Option C is incorrect — the microseismic peak is not monochromatic and ambient noise tomography does not rely on a single-frequency sinusoid. GPS synchronisation (D) is a practical requirement for accurate timing but is not the physical mechanism that makes the cross-correlation yield structural information.`,
        },
        {
          q: 'The USArray Transportable Array had ~400 stations spaced 70 km apart and moved across the US from 2004–2012. Why does a rolling array configuration achieve better tomographic resolution than a fixed array of the same number of stations?',
          a: [
            'A rolling array is better because it re-uses the same expensive seismograph hardware across a larger geographic area, providing complete continental coverage with limited instrumentation; the seismological resolution is identical to a permanent fixed array of the same station count and spacing',
            'A rolling array provides complete continental-scale coverage — every part of the continent has high-density station coverage for ~2 years — whereas 400 fixed stations spread over the contiguous US would have 200–300 km spacing, giving coarser resolution everywhere; the rolling design concentrates the same station density (70 km) successively over each region, so each region gets the same high-density coverage as if the full array were dedicated to it permanently',
            'The rolling array is beneficial because stations are moved before their electronics degrade, ensuring consistently high data quality; the movement itself is the key advantage, not the geographic coverage',
            'Rolling arrays achieve better resolution because moving stations experience different local noise environments, randomising the noise field and making ambient noise cross-correlation theory more valid than for fixed stations in a single noise environment',
          ],
          correct: 1,
          explain: 'The Transportable Array design solved a resource-allocation problem. Installing and maintaining 400 permanent stations across the entire US simultaneously would provide only ~250–300 km station spacing on average — too coarse for high-resolution crust and upper mantle imaging. But if 400 stations are deployed in a dense 70 km grid over the western US for 2 years, then moved to the central US for 2 years, then to the eastern US, every subregion receives the same dense coverage for 2 years. The result is continental-scale coverage with 70 km resolution everywhere, using the same 400 instruments sequentially. Because ambient noise tomography accumulates measurements over the recording period, 2 years per station provides sufficient SNR in the cross-correlations. The trade-off is temporal: no single location is monitored continuously, so time-varying features (episodic volcanism, changing aquifer levels) are captured only during the 2-year window. Option A is incorrect — resolution is not identical; a fixed array of 400 stations across the CONUS would have much coarser spacing. Option C has the logic backwards — instrument quality is maintained by careful calibration regardless of movement; the movement is about coverage, not hardware longevity. Option D is not a valid physical mechanism — noise randomisation from different environments is not the reason for the rolling design.',
        },
        {
          q: 'Surface wave tomography reveals that the low-velocity zone (LVZ) in the upper mantle — a layer from ~80 to 220 km depth where Vs is anomalously slow — is more pronounced under oceans than under old continental cratons. What is the best physical explanation?',
          a: [
            'The LVZ is caused by water released from the subducting oceanic slab, which lowers Vs in the overlying mantle wedge; it is absent under cratons because there is no subduction beneath them',
            'The LVZ beneath oceans reflects elevated temperature and the presence of a small amount of partial melt (0.5–2%) in the asthenosphere, which drastically lowers shear velocity; beneath Archean cratons, the lithospheric root extends to 200–300 km depth, so the asthenosphere — and the LVZ — are displaced below the depth range sampled at typical surface wave periods; the cold, dry, depleted craton root itself has high Vs and masks the global asthenosphere',
            'The LVZ is a phase-transition artefact: at depths of 80–220 km, olivine undergoes a partial structural transformation that reduces Vs; this transformation is suppressed under cratons because the higher pressure from the thick crust accelerates the transition through the LVZ depth range',
            'The LVZ does not actually exist beneath oceans; it is a tomographic artefact caused by poor station coverage over the oceans, where few seismograph networks operate; the smooth inversion regularisation smears crustal anomalies downward, creating the false appearance of a slow zone at 80–220 km depth',
          ],
          correct: 1,
          explain: 'The low-velocity zone is the seismic expression of the asthenosphere — the rheologically weak, partially molten upper mantle layer that underlies the more rigid lithosphere. Its Vs reduction (typically 4–6% below the overlying lithosphere) is caused by elevated temperature (close to or above the mantle solidus for peridotite) and by the presence of a small melt fraction. Even 0.5–2% partial melt dramatically reduces shear modulus because melt has essentially zero shear rigidity. Under oceanic lithosphere (which is 50–100 km thick depending on age), the asthenosphere begins at 50–100 km depth and the LVZ is easily imaged by surface waves at 40–100 s period. Under Archean continental cratons, the situation is different: the cold, thick lithospheric root (200–300 km of depleted peridotite, ~500°C cooler than the oceanic asthenosphere at the same depth) means the asthenosphere is displaced to much greater depths, below the sensitivity of typical surface-wave measurements. The cratonic lithosphere itself has high Vs, and the 50–300 s period surface waves sample mostly this high-velocity root, masking any deep asthenospheric LVZ. Option A confuses asthenospheric processes with subduction-related serpentinisation, which is localised to wedge regions. Option C is incorrect — there is no olivine phase transition at 80–220 km under normal upper mantle conditions (olivine transitions to wadsleyite at ~410 km). Option D misidentifies the LVZ as a resolution artefact; the LVZ has been confirmed by body-wave studies, refraction surveys, and receiver functions independently of surface-wave tomography.',
        },
      ],
    },
  ],
}

export default surfaceWaveTomography
