import { Layers, Activity, Globe, Zap } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const seismicDiscontinuities: Lesson = {
  id: 'seis-201-1-1-3',
  title: 'Seismic Discontinuities and the Transition Zone',
  track: 'geo',
  trackName: 'Advanced Seismology',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: `Velocity discontinuities in the mantle — the Moho, 410, 520, and 660 km boundaries — are phase transitions in mantle minerals. Receiver functions convert P-to-S conversions at these interfaces into crustal thickness maps and transition zone topography, revealing where cold slabs and hot upwellings distort Earth\'s mineral phase boundaries.`,
  sources: [
    { org: 'IRIS',    title: 'IRIS — Receiver Function Analysis and Crustal Structure',                           url: 'https://www.iris.edu/hq/inclass/lesson/receiver_functions' },
    { org: 'AGU',     title: 'Flanagan & Shearer (1998) — Global mapping of topography on transition zone velocity discontinuities, JGR', url: 'https://doi.org/10.1029/98JB00016' },
    { org: 'Nature',  title: `Garnero & McNamara (2008) — Structure and Dynamics of Earth\'s Lower Mantle, Science`, url: 'https://doi.org/10.1126/science.1148028' },
    { org: 'USGS',    title: `USGS — Earth\'s Interior Structure`,                                               url: 'https://earthquake.usgs.gov/learn/topics/interior.php' },
    { org: 'IRIS',    title: 'Dziewonski & Anderson (1981) — PREM, Physics of the Earth and Planetary Interiors', url: 'https://doi.org/10.1016/0031-9201(81)90046-7' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Where minerals transform: the architecture of the deep Earth',
      body: `Earth's mantle is not a uniform medium. Even before tomography revealed its lateral heterogeneity, seismologists identified sharp boundaries at specific depths where seismic velocity jumps abruptly. These boundaries — seismic discontinuities — separate regions with different mineralogy, and most are caused by pressure-induced phase transitions: the same chemical composition rearranges its crystal structure to a denser form as depth (and pressure) increase.

The most familiar discontinuity is the Mohorovičić discontinuity, or Moho — the boundary between crust and mantle, where Vp jumps from roughly 6.5 km/s to 8.1 km/s over less than a few kilometres. Deeper in the mantle, two major discontinuities bracket the transition zone: one at ~410 km depth (where olivine transforms to its high-pressure polymorph wadsleyite) and one at ~660 km depth (where ringwoodite breaks down to bridgmanite and ferropericlase). A less sharp discontinuity at ~520 km (wadsleyite to ringwoodite) is also detectable in high-quality data.

The phase transitions at 410 and 660 km are not merely seismological curiosities — they have dynamic consequences. The Clapeyron slope (the rate of pressure-temperature change along the phase boundary) determines whether a phase transition helps or hinders mantle flow. The 410 km transition has a positive Clapeyron slope: cold material encounters the transition shallower (at lower pressure), making it denser relative to ambient mantle and accelerating slab sinking. The 660 km transition has a negative Clapeyron slope: cold slabs encounter it at greater depth, creating anomalous buoyancy that resists penetration into the lower mantle. The topography of these discontinuities — observed by seismology — is therefore a direct probe of where the mantle is anomalously cold or hot.`,
      keyTerms: [
        {
          term: 'Mohorovičić discontinuity (Moho)',
          def: 'The seismic boundary between the crust and the mantle, characterised by a jump in Vp from ~6.5 km/s (lower crust) to ~8.1 km/s (uppermost mantle peridotite). Named for Croatian seismologist Andrija Mohorovičić, who discovered it in 1909. Moho depth varies from ~6–10 km beneath oceanic crust to 20–70 km beneath continental crust (average ~35 km). The Moho represents a compositional change (mafic crust to ultramafic peridotite mantle), not a phase transition.',
        },
        {
          term: '410-km discontinuity',
          def: 'A seismic velocity discontinuity at ~410 km depth caused by the pressure-induced phase transition of olivine (α-phase) to wadsleyite (β-phase). Vp increases by ~3–4% across the boundary. The Clapeyron slope is positive (~+2 to +3 MPa/K): in cold material (e.g. a subducting slab), the transition occurs at shallower pressure (shallower depth), so the 410 is elevated (shallower) in cold regions. Wadsleyite has similar composition to olivine but a denser crystal structure.',
        },
        {
          term: '660-km discontinuity',
          def: 'A seismic velocity discontinuity at ~660 km depth caused by the breakdown of ringwoodite (γ-olivine) to bridgmanite (formerly perovskite) + ferropericlase (magnesiowüstite). Vp increases by ~4–5% across the boundary. The Clapeyron slope is negative (~−2 to −3 MPa/K): cold slabs encounter the transition at greater depth (660 is depressed in cold regions). This negative slope creates anomalous resistance to downward flow and may temporarily impede slab penetration into the lower mantle.',
        },
        {
          term: 'Receiver function',
          def: 'A seismological technique that isolates P-to-S converted waves (Ps phases) generated at velocity interfaces beneath a seismograph station. A teleseismic P wave arriving from an earthquake excites Ps conversions at the Moho and other discontinuities; these conversions appear on the transverse (SH) component with a travel-time delay relative to the direct P wave that depends on the depth and velocity contrast of the interface. Receiver functions are the primary tool for mapping crustal thickness globally.',
        },
        {
          term: 'Ultra-Low Velocity Zone (ULVZ)',
          def: 'Thin (5–40 km) patches at the core-mantle boundary characterised by P-wave velocity reductions of 10–30% and S-wave reductions of 20–50%. Detected by reflections and diffractions of core-reflected phases (PcP, ScS, Sdiff). Located preferentially at the edges of the LLSVPs. Leading hypotheses: partial melt of iron-enriched peridotite, iron-rich chemical piles, or reaction products between core iron and mantle silicates.',
        },
        {
          term: 'D″ layer',
          def: 'The lowermost ~200–300 km of the mantle, above the core-mantle boundary. Characterised by a seismic velocity discontinuity attributed to the post-perovskite phase transition (bridgmanite transforms to post-perovskite at ~125 GPa, near CMB pressures), strong seismic anisotropy, large lateral heterogeneity, and the presence of ULVZs. The D" layer is the thermal boundary layer between the hot outer core (~4,000–5,000 K) and the overlying mantle.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Phase transitions and the mantle transition zone',
      body: `**Mineral physics of the transition zone.** The dominant mineral in the upper mantle is olivine — (Mg,Fe)₂SiO₄ — which makes up ~60% of the upper mantle by volume. As pressure increases with depth, olivine undergoes a series of phase transitions to increasingly dense crystal structures while maintaining the same bulk composition:

- **< 410 km**: olivine (α-phase), Vp ~ 8.2–9.7 km/s increasing with depth
- **410 km**: olivine → wadsleyite (β-phase); Vp jumps ~3–4%; transition width ~4–10 km; positive Clapeyron slope (+2 to +3 MPa/K)
- **520 km**: wadsleyite → ringwoodite (γ-phase); smaller velocity jump (~1–2%); less sharp; Clapeyron slope near zero
- **660 km**: ringwoodite → bridgmanite + ferropericlase; Vp jumps ~4–5%; transition involves breakdown into two separate phases; negative Clapeyron slope (−2 to −3 MPa/K)

The transition zone (410–660 km) contains wadsleyite and ringwoodite — phases with no natural occurrence at the Earth's surface and first synthesised in laboratory high-pressure experiments. The thickness of the transition zone (nominally 250 km) varies with temperature: in cold regions, the 410 shallows and the 660 deepens (due to their opposite Clapeyron slopes), thickening the transition zone; in hot regions, the opposite occurs.

**The 660 and mantle layering.** The negative Clapeyron slope of the 660 km discontinuity has profound dynamic implications. As a cold slab penetrates toward 660 km, the ringwoodite-to-bridgmanite transition occurs at greater depth than in ambient mantle — meaning the slab material at 660 km is still in the ringwoodite phase while surrounding warmer mantle has already transformed to the denser bridgmanite. This makes the slab at the 660 less dense than the surrounding lower mantle (because bridgmanite is denser than ringwoodite at that P-T condition), creating an upward buoyancy force that resists slab penetration. This is why some slabs appear to stagnate at or near 660 km rather than penetrating directly into the lower mantle — though as we saw in Lesson 1.1.1, many slabs do eventually penetrate.

**The D" layer and post-perovskite.** At the base of the mantle (~125 GPa, ~2,600–2,900 km depth), bridgmanite undergoes another phase transition to post-perovskite — a layered structure with different elastic properties. This transition was first predicted experimentally by Murakami et al. (2004) and provides a likely explanation for the D" seismic discontinuity observed ~200–300 km above the CMB. Post-perovskite is also more anisotropic than bridgmanite, helping to explain the strong seismic anisotropy observed in D". Because the post-perovskite transition has a large positive Clapeyron slope, it may occur twice in regions of anomalous temperature: once going down through the thermal boundary layer, and again at the top of an LLSVP where the transition reverts back to bridgmanite (the "anti-crossing").`,
      cards: [
        {
          name: 'Mantle Discontinuities in PREM',
          icon: Layers,
          color: BRAND.coral,
          desc: 'Key velocity jumps in PREM (1-D average): Moho ~6.5→8.1 km/s Vp at 20–35 km (varies greatly laterally); 410 km: Vp +3–4% (olivine→wadsleyite, positive Clapeyron slope); 520 km: Vp +1–2% (wadsleyite→ringwoodite, weakly positive slope); 660 km: Vp +4–5% (ringwoodite→bridgmanite+ferropericlase, negative Clapeyron slope −2 MPa/K); CMB at 2,891 km: Vp drops from ~13.7 (mantle) to ~8.0 km/s (liquid outer core), Vs drops from ~7.3 to 0 (shear waves cannot propagate in liquid).',
          examples: 'PREM discontinuities directly observed as precursors to PP, SS, and as P410s, P660s receiver function conversions · Vs at 660: 5.57→5.95 km/s (PREM) — transition adds +0.38 km/s · Lower mantle (670–2,891 km): gradual velocity increase with pressure; relatively uniform laterally compared with upper mantle',
        },
        {
          name: 'Transition Zone Topography and Slabs',
          icon: Activity,
          color: BRAND.accent,
          desc: 'Topography of the 410 and 660 km discontinuities is mapped by SS and PP precursors (underside reflections from these boundaries) and receiver functions. In cold subducting slabs: 410 shallows by 10–30 km (positive Clapeyron slope), 660 deepens by 10–30 km (negative slope) → transition zone thickens by 20–60 km. This thickening is observed under Japan (Niu et al. 2000), Tonga (Flanagan & Shearer 1998), and western Pacific subduction zones. Hot regions (Iceland, Yellowstone): 410 deepens slightly, 660 shallows slightly → thinner transition zone.',
          examples: 'Flanagan & Shearer (1998) JGR: global SS precursor study → transition zone 5–10% thicker under major subduction zones · Japan: 410 at 385 km, 660 at 695 km → TZ thickness 310 km vs 250 km globally · Iceland: TZ slightly thinner, consistent with hot anomaly',
        },
        {
          name: 'D″ Layer and Ultra-Low Velocity Zones',
          icon: Globe,
          color: BRAND.amethyst,
          desc: 'D" layer: 200–300 km above CMB, bounded by post-perovskite phase transition above and CMB below; strong seismic anisotropy (VSH > VSV — horizontal polarisation faster than vertical, suggesting horizontal flow); lateral velocity variations ±5–10%. ULVZs: 5–40 km thick patches at CMB; Vp reduction 10–30%, Vs reduction up to 50%; concentrated at LLSVP margins. ULVZs may be: partial melt of iron-enriched peridotite near the melting point (CMB temperature ~3,800–4,000 K), iron-rich reaction products from core-mantle interaction, or remnants of ancient differentiation.',
          examples: 'Garnero et al. (1993): first detection of ULVZ using ScS amplitude anomalies beneath the central Pacific · Murakami et al. (2004): laboratory synthesis of post-perovskite at 125 GPa, ~2,500 K · D" velocity jump: Vp +3–4% at base of some regions, coinciding with post-perovskite transition',
        },
        {
          name: 'Receiver Functions: Imaging Local Moho and TZ',
          icon: Zap,
          color: BRAND.gold,
          desc: 'A teleseismic P wave (arriving at ~30–95° epicentral distance) converts to an S wave (Ps phase) at velocity interfaces beneath a station. The P-to-S conversion time relative to direct P encodes interface depth: delay ≈ depth × (1/Vs − 1/Vp). For Moho: Ps arrives 3–8 s after P (depending on crustal thickness 25–70 km). For 410 km: Ps arrives ~42–44 s after P. For 660 km: ~68–70 s. Multiple back-azimuths are stacked to improve SNR; crustal multiple arrivals (PpPs, PsPs+PpSs) provide additional constraints. Receiver functions are the method of choice for mapping crustal thickness beneath individual seismograph stations and for detecting lateral variation in transition zone depth.',
          examples: 'Global Moho map from receiver functions: Laske et al. CRUST1.0 (2013) — Moho at 6 km beneath midocean ridges to 70 km beneath Tibet · P410s and P660s used to map TZ topography with receiver function migration (Li & van der Hilst 2010) · ZHu & Kanamori (2000): H-κ stacking for robust Moho depth from receiver functions',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Receiver functions in practice: from waveforms to Earth structure',
      body: `**The receiver function method.** When a P wave from a distant earthquake arrives at a seismograph station at a steep incidence angle (~25–30° from vertical), it is partially converted to an S wave at every velocity interface it passes beneath the station on its way to the surface. The converted Ps wave travels upward more slowly than the direct P but arrives at the surface as a distinct pulse on the horizontal (SH) component — the P-to-S conversion isolates the structural signal from the dominant vertical P arrival.

The receiver function is computed by deconvolving the vertical component from the radial horizontal component: this removes the source time function and instrument response, leaving a signal that encodes only the Earth structure beneath the station. The result is a time series where positive pulses represent velocity increases with depth (P-to-S conversions from interfaces where Vs increases downward) and negative pulses represent velocity decreases.

**Moho mapping.** The largest and most consistent conversion in most receiver functions is the Ps from the Moho — the crust-mantle boundary. The delay time (typically 3–8 s) combined with an estimate of average crustal velocity yields the crustal thickness. Stacking many receiver functions from earthquakes at different back-azimuths reduces noise. The H-κ stacking method (Zhu & Kanamori 2000) simultaneously uses the direct Ps, the PpPs multiple, and the PpSs+PsPs multiple to jointly constrain both Moho depth (H) and the Vp/Vs ratio of the crust (κ). This approach is now applied routinely at seismograph networks worldwide.

**Detecting the transition zone from receiver functions.** At teleseismic distances (60–95°), the P wave refracts through the lower mantle and the upgoing P-to-S conversions at the 410 and 660 km discontinuities arrive 42–44 s and 68–70 s after the direct P arrival. By migrating receiver functions from many events and back-azimuths — correcting for the incidence angle and moveout — the Ps410s and Ps660s arrivals can be imaged to map transition zone topography beneath a seismograph array. This technique has been applied to map the depression of the 660 beneath subduction zones (thicker transition zone) and its elevation beneath hot upwellings.

**Practical limitations.** Receiver functions require clean teleseismic P waveforms from earthquakes at 30–95° distance. Data coverage is uneven: regions with few nearby earthquakes or few stations have poorly constrained receiver functions. The deconvolution is sensitive to noise and can produce ringing artefacts. Multiple reflections within the crust (crustal multiples) arrive at similar times to deeper Ps conversions and must be identified and separated. Despite these challenges, receiver functions have provided the primary observational basis for the global Moho map (CRUST1.0, Laske et al. 2013), the most accurate available constraint on crustal thickness worldwide.`,
      cards: [
        {
          name: 'Receiver Function Computation',
          icon: Activity,
          color: BRAND.coral,
          desc: 'Workflow: (1) Select teleseismic events (Mw > 5.5, distance 30–95°). (2) Extract P-wave windows (−5 to +60 s relative to P). (3) Rotate to radial-transverse coordinates. (4) Deconvolve vertical from radial (frequency-domain water-level deconvolution or iterative time-domain deconvolution). (5) Stack receiver functions from multiple events and back-azimuths. (6) Apply H-κ stacking for Moho depth + Vp/Vs. (7) Migrate stacks for transition zone imaging. Typical station requires 20–100 high-quality events for robust receiver function.',
          examples: 'Tibet: Ps delay ~8–9 s → crustal thickness 60–75 km (thickest on Earth outside ice sheets) · Iceland: Ps ~2.5 s → Moho at ~20 km (anomalously thin oceanic crust + hotspot) · Global average: Ps ~4 s → ~35 km continental crust',
        },
        {
          name: 'Transition Zone Thickness as Slab Thermometer',
          icon: Layers,
          color: BRAND.accent,
          desc: 'In cold subducting slabs: 410 shallows (positive Clapeyron slope, cold shifts transition to lower pressure), 660 deepens (negative Clapeyron slope, cold shifts transition to higher pressure). Net effect: transition zone (TZ) thickens. Observed TZ thickening of 20–60 km under Japan, Tonga, Marianas — confirmed by SS precursor studies (Flanagan & Shearer 1998) and receiver function migration (Li & van der Hilst 2010). Quantitative: 1 km of TZ thickening ~ 2–4°C of temperature anomaly (using known Clapeyron slopes and olivine mineral physics). In hot regions (plumes, mid-ocean ridges): TZ thins.',
          examples: 'Japan subduction: TZ 290–310 km thick (vs global average ~250 km) · Tonga: TZ locally 300+ km · Iceland: TZ ~230 km — consistent with ~100–200 K thermal excess · Plume-associated TZ thinning: Hawaii receiver functions suggest TZ ~240 km',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Mantle phase transitions and their seismic signatures',
      body: 'Explore the depth-velocity structure of the mantle from the crust to the core, tracing each major discontinuity to its mineralogical cause and its dynamic consequences for slab penetration and mantle circulation.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Mantle discontinuities: from mineral physics to seismic observables and dynamic consequences',
        nodes: [
          {
            id: 'moho',
            label: 'Moho (~20–70 km): Crust-Mantle Boundary',
            description: 'A compositional boundary where mafic/felsic crustal rocks (Vp 6.0–7.0 km/s) give way to ultramafic mantle peridotite (Vp 7.8–8.2 km/s). Not a phase transition — two different rock types. Depth varies: 6–10 km under oceans, 25–40 km under stable continents, 60–75 km under Tibet and Andes. Detected by: refracting Pn waves, reflection Moho, receiver function Ps conversion. The largest velocity jump in the Earth above the CMB.',
            color: BRAND.coral,
          },
          {
            id: 'd410',
            label: '410-km Discontinuity: Olivine → Wadsleyite',
            description: 'Olivine (α-(Mg,Fe)₂SiO₄) transforms to wadsleyite (β-phase) at ~13.5 GPa, ~1,500°C. Vp increases ~3–4%. Clapeyron slope: +2 to +3 MPa/K (positive). In cold subducting slabs: the transition occurs at lower pressure (shallower depth) than in ambient warm mantle — the 410 is elevated by 10–30 km beneath cold slabs. In hot upwellings: the 410 is slightly depressed. Wadsleyite can store significant water (up to 3 wt%), making this transition important for the deep water cycle.',
            color: BRAND.accent,
          },
          {
            id: 'd520',
            label: '520-km Discontinuity: Wadsleyite → Ringwoodite',
            description: `Wadsleyite (β-phase) transforms to ringwoodite (γ-spinel phase) at ~18 GPa, ~1,600°C. Smaller velocity jump (~1–2%) and broader transition width than the 410 or 660. Clapeyron slope near zero. Detected in high-quality stacked seismic data (SS and PP precursors) but not consistently visible as a receiver function conversion at individual stations. Ringwoodite is also a hydrous mineral, capable of storing water equal to the mass of Earth\'s oceans in the transition zone.`,
            color: BRAND.gold,
          },
          {
            id: 'd660',
            label: '660-km Discontinuity: Ringwoodite → Bridgmanite + Ferropericlase',
            description: 'Ringwoodite (γ-(Mg,Fe)₂SiO₄) dissociates at ~23 GPa, ~1,700°C into bridgmanite ((Mg,Fe)SiO₃, formerly called MgSiO₃ perovskite) and ferropericlase ((Mg,Fe)O). Vp increases ~4–5%. Clapeyron slope: −2 to −3 MPa/K (negative). In cold slabs: transition occurs at higher pressure (greater depth), so 660 is depressed 10–30 km — creating upward buoyancy that resists slab penetration. This is the main barrier to whole-mantle convection, though many slabs eventually overcome it.',
            color: BRAND.amethyst,
          },
          {
            id: 'lower-mantle',
            label: 'Lower Mantle (660–2,891 km): Bridgmanite Domain',
            description: 'The lower mantle is dominated by bridgmanite (~75%), ferropericlase (~20%), and Ca-perovskite (~5%). Velocity increases smoothly with depth (self-compression). Relatively homogeneous laterally compared with upper mantle and D" — tomographic models show ±1–2% variations, much less than the ±5–10% in the upper mantle and D". The large viscosity increase at 660 km (factor of 10–30) partly isolates upper and lower mantle convection styles.',
            color: BRAND.jade,
          },
          {
            id: 'd-layer',
            label: 'D″ Layer (~2,600–2,891 km) and CMB',
            description: 'D" is the lowermost 200–300 km of the mantle: thermally and seismically anomalous. Features: (1) Post-perovskite phase transition ~200 km above CMB (bridgmanite → post-perovskite at ~125 GPa) producing a velocity discontinuity; (2) strong seismic anisotropy (VSH > VSV), interpreted as preferential alignment of post-perovskite crystals by horizontal shear flow; (3) ULVZs (5–40 km thick, 10–30% slow in Vp) at CMB in discrete patches; (4) LLSVPs rising from CMB. The CMB itself (2,891 km) is where solid mantle meets liquid iron outer core: Vp drops from ~13.7 to ~8.0 km/s, Vs drops to zero.',
            color: BRAND.accentHot,
          },
        ],
        edges: [
          { from: 'moho',         to: 'd410',         label: 'upper mantle olivine gradually compressed with depth until phase transition threshold at ~13.5 GPa' },
          { from: 'd410',         to: 'd520',         label: 'wadsleyite stable in mid-transition zone; hydrous capacity important for deep water cycling' },
          { from: 'd520',         to: 'd660',         label: 'ringwoodite stable in lower transition zone; negative Clapeyron slope of 660 creates dynamic resistance to slab penetration' },
          { from: 'd660',         to: 'lower-mantle', label: 'dissociation into bridgmanite + ferropericlase marks entry to lower mantle; viscosity jumps 10–30× inhibiting rapid convective mixing' },
          { from: 'lower-mantle', to: 'd-layer',      label: 'near CMB: bridgmanite transitions to post-perovskite; thermal boundary layer heats from below; ULVZs and LLSVPs are embedded here' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The 660-km discontinuity has a negative Clapeyron slope of approximately −2 to −3 MPa/K. What does this mean for a cold subducting slab approaching 660 km depth, and how does it differ from the effect of the 410-km transition on the same slab?',
          a: [
            'The negative Clapeyron slope means the 660-km transition occurs at lower temperature in cold material; slabs encounter the transition at shallower depth than ambient mantle, making them denser and accelerating their sinking — the same direction as at the 410 km',
            'The negative Clapeyron slope means the 660-km transition occurs at higher pressure (greater depth) in cold material; a cold slab at 660 km depth is still in the ringwoodite phase while surrounding warmer mantle has already converted to the denser bridgmanite; the slab is therefore less dense than the surrounding lower mantle at that depth, creating an upward buoyancy force that resists penetration — opposite to the 410, where cold material converts to denser wadsleyite at shallower depth than ambient mantle, increasing the slab\'s negative buoyancy',
            'The negative Clapeyron slope means that seismic velocity across the 660 is lower in cold regions; this makes the 660 seismically invisible in slab-affected regions, which is why it is not observed in receiver functions beneath subduction zones',
            'The negative Clapeyron slope applies only to the pyroxene fraction of the slab; the olivine component of the slab behaves normally at 660 km; the net dynamic effect is therefore small and the 660 acts as neither a barrier nor an accelerant to slab sinking',
          ],
          correct: 1,
          explain: 'The Clapeyron slope describes how the equilibrium pressure of a phase transition changes with temperature: dP/dT. A negative slope means that at lower temperature, the transition requires higher pressure (greater depth) to occur. For a cold subducting slab at 660 km depth: the ambient warm mantle has already completed the ringwoodite → bridgmanite transition (because at that pressure, the warm mantle is above the phase boundary). But the cold slab interior is still below the depressed phase boundary — still in the ringwoodite phase. Since bridgmanite is denser than ringwoodite at the same P-T conditions, the slab in the ringwoodite phase is less dense than the surrounding lower-mantle bridgmanite. This creates a positive (upward) buoyancy force that resists downward slab motion — the 660 acts as a dynamic barrier. The 410 km transition has the opposite (positive) Clapeyron slope: cold material undergoes the olivine→wadsleyite transition at shallower depth, converting to denser wadsleyite before the ambient mantle at that depth would, so the slab is denser than ambient mantle — negative buoyancy that accelerates sinking. Option A has the sign wrong — negative slope means deeper transition in cold material, not shallower. Option C conflates dynamic and seismic effects; the 660 is still detectable in subduction zones. Option D is incorrect — the Clapeyron slope effect applies to the olivine system that dominates transition zone mineralogy.',
        },
        {
          q: 'A seismograph records a receiver function with a clear Ps conversion arriving 5.8 seconds after the direct P-wave arrival from a distant earthquake. Assuming an average crustal Vp/Vs of 1.73 and Vp of 6.5 km/s, approximately what is the Moho depth?',
          a: [
            'Moho depth ≈ 38 km; calculated using delay time = depth × (1/Vs − 1/Vp) with Vs = Vp/1.73 ≈ 3.76 km/s: depth = 5.8 / (1/3.76 − 1/6.5) = 5.8 / (0.266 − 0.154) = 5.8 / 0.112 ≈ 51.8 km — this is approximately 52 km',
            'Moho depth ≈ 52 km; using delay time = depth × (1/Vs − 1/Vp), with Vs = 6.5/1.73 ≈ 3.76 km/s, the calculation gives depth = 5.8 / (1/3.76 − 1/6.5) = 5.8 / 0.112 ≈ 52 km',
            'Moho depth ≈ 25 km; the Ps delay time of 5.8 s divided by the average crustal velocity (6.5 km/s) gives the one-way travel time distance: 5.8/2 × 6.5 = 18.85 km, approximately 25 km when adjusted for the Vp/Vs ratio',
            'Moho depth ≈ 70 km; at a typical Ps velocity of 4 km/s, 5.8 s × 4 km/s / 2 (two-way path) = 11.6 km; since receiver functions image reflections not conversions, the depth is doubled again to give 70 km',
          ],
          correct: 1,
          explain: 'The receiver function Ps conversion delay time formula is: Δt = H × (1/Vs − 1/Vp), where H is the Moho depth, Vs is the average crustal shear velocity, and Vp is the average crustal P velocity. The ray parameter (horizontal slowness) correction is often small for teleseismic distances and is neglected here. Given: Δt = 5.8 s, Vp = 6.5 km/s, Vp/Vs = 1.73 → Vs = 6.5/1.73 ≈ 3.757 km/s. Then: H = Δt / (1/Vs − 1/Vp) = 5.8 / (1/3.757 − 1/6.5) = 5.8 / (0.2663 − 0.1538) = 5.8 / 0.1125 ≈ 51.6 km. Option A writes 38 km in the opening but then correctly calculates 51.8 km in the working — a mismatch; the written answer is wrong even though the math is shown correctly. Option C incorrectly uses a simple distance/speed formula (Δt = distance/velocity) applicable to body wave travel times, not to differential times between converted and direct phases. Option D confuses receiver functions (one-way conversion) with reflection seismic (two-way reflection); receiver functions measure one-way conversion, not two-way reflection.',
        },
        {
          q: 'Ultra-Low Velocity Zones (ULVZs) at the core-mantle boundary have P-wave velocity reductions of 10–30% over thicknesses of only 5–40 km. Why do seismologists consider partial melt a leading explanation, and what observational evidence supports the CMB location?',
          a: [
            'Partial melt is the leading explanation because the CMB is cooler than the surrounding mantle, causing iron-rich minerals to crystallise out of solution and form slow-velocity inclusions; ULVZs are detected at the CMB by the anomalously late arrival of surface waves that travel along the ocean floor',
            'Partial melt is a leading explanation because it requires only small melt fractions to dramatically reduce shear velocity (melt has near-zero shear modulus), while the 10–30% Vp reduction suggests iron-enriched melt with density close to the surrounding mantle; ULVZs are detected using core-reflected and diffracted body-wave phases (PcP, ScP, ScS, Sdiff, PKKPbc) whose amplitude and waveform anomalies require a thin, ultra-slow layer just above the CMB',
            'Partial melt is inferred from the ULVZ thickness of 5–40 km; at these depths, layers thinner than 50 km can only form by melting because tectonic processes such as folding and thrusting cannot operate at CMB pressures; the location at the CMB is confirmed by receiver function Ps conversions similar to Moho imaging',
            'Partial melt is proposed because ULVZs co-locate spatially with the LLSVPs, which are themselves thought to be hot; the excess heat from LLSVPs melts surrounding peridotite; ULVZs are detected by the absence of P-to-S conversions in teleseismic receiver functions from earthquakes at 90–100° distance',
          ],
          correct: 1,
          explain: 'Partial melt is a compelling ULVZ hypothesis for several reasons. First, the shear modulus of melt is essentially zero, so even a small melt fraction (1–5%) dramatically reduces Vs — consistent with the observed 20–50% Vs reductions. Second, at CMB conditions (~135 GPa, ~4,000 K), peridotite approaches its solidus, making partial melting thermally plausible. Third, if the melt is iron-rich (either because iron-bearing phases melt preferentially at high pressure, or because of iron leaching from the outer core), the melt density could match the surrounding solid mantle, preventing melt from migrating upward and allowing stable ponding in thin layers just above the CMB. The detection uses core-interacting seismic phases. PcP (P reflected off the CMB), ScS (S reflected off the CMB), and Sdiff (S diffracted along the CMB) all sample the base of the mantle. Amplitude anomalies — unusually strong or weak reflections — in these phases from specific CMB regions indicate anomalous structures. The waveform modelling requires a thin layer with dramatic velocity reductions to fit observed amplitude patterns. Receiver functions (option D) are used for Moho and transition zone imaging but are not the technique for CMB structure at ~2,891 km depth — Ps conversions from that depth arrive hundreds of seconds after P and are swamped by other phases. Option A incorrectly describes the thermal gradient (the CMB is hot from the outer core heat) and uses the wrong detection method. Option C makes an incorrect claim about the only mechanism for thin-layer formation at depth.',
        },
        {
          q: `The transition zone (410–660 km) can store significant amounts of water in the crystal structures of wadsleyite and ringwoodite — potentially equal to several times the volume of the surface oceans. Why does this matter for understanding Earth\'s global water budget and mantle dynamics?`,
          a: [
            'The water stored in transition zone minerals is irrelevant to surface geology because it cannot escape the transition zone — the high pressure prevents any upward migration of water or hydrous fluids',
            'Transition zone water matters because subducting slabs carry hydrated minerals into the transition zone; as slabs sink through 410–660 km, dehydration reactions release water into the surrounding mantle, lowering the solidus and potentially triggering partial melting; the amount of water cycling through the transition zone controls the long-term volatile budget of the mantle and may influence the stability of subducting slabs at the 660 boundary',
            'The water in wadsleyite and ringwoodite is primarily important for surface volcanism because these minerals are continuously erupted through volcanoes; the high water content causes explosive eruptions at subduction zones',
            'Transition zone water is geologically unimportant because the high pressure and temperature at 410–660 km decompose water molecules into hydrogen and oxygen ions that become incorporated into the mantle\'s oxide phases',
          ],
          correct: 1,
          explain: 'Wadsleyite can incorporate up to ~3 wt% H₂O and ringwoodite up to ~2 wt% H₂O into their crystal structures as hydroxyl (OH) groups. If the transition zone is fully hydrated, it could contain 2–5 times the mass of all surface ocean water — making it the largest water reservoir in the planet. This has several dynamic implications. First, the hydration state of the transition zone affects its rheology (wet mantle flows more easily than dry) and potentially its density structure. Second, subducting slabs deliver hydrated minerals into the transition zone; as the slab dehydrates with increasing pressure and temperature, released water lowers the local solidus and can trigger partial melting. Third, dehydration at the 660 km boundary, where ringwoodite breaks down to bridgmanite + ferropericlase (which store much less water), may release a large pulse of water into the lower mantle — this "transition zone water filter" hypothesis (Bercovici & Karato 2003) proposes that the 660 acts as a chemical filter controlling water exchange between upper and lower mantle. The long-term surface water budget is controlled by the balance between water delivered to the mantle by subduction and water returned by volcanism — the transition zone reservoir is a key unknown in this budget. Option A is incorrect — water does migrate out of the transition zone through melt fraction and volcanic degassing. Option C confuses transition zone minerals (which are stable only at high pressure and transform to other phases upon decompression) with volcanic eruptive products. Option D incorrectly describes water decomposition; OH groups in minerals are stable at high pressure and temperature in the transition zone.',
        },
        {
          q: 'Seismologists observe that the transition zone (distance between the 410 and 660 km discontinuities, measured by PP/SS precursors or receiver function migration) is about 280–310 km thick beneath the Japan subduction zone, compared with ~250 km globally. What quantitative constraint does this provide on the thermal structure of the subducting slab?',
          a: [
            'A 30–60 km thickening of the transition zone provides no temperature constraint because the Clapeyron slopes of the 410 and 660 are both uncertain by ±50%; the observation is only qualitatively consistent with cold material but cannot be used for quantitative estimates',
            'Using the Clapeyron slopes of the 410 (+2.5 MPa/K) and 660 (−2 MPa/K) and the density/gravity at those depths, a 30 km elevation of the 410 and 30 km depression of the 660 relative to ambient mantle corresponds to a temperature anomaly of approximately −400 to −800 K relative to ambient mantle at those depths, consistent with the thermal anomaly expected in a subducting slab that has been cold at the surface for millions of years',
            'The 30–60 km thickening indicates that the slab is chemically distinct from ambient mantle — it cannot be explained by temperature alone because the Clapeyron slopes only produce 5–10 km of discontinuity topography per 100 K of temperature anomaly; the Japan slab must therefore contain a different mineralogy from the surrounding mantle',
            'The TZ thickening of 30–60 km under Japan indicates the slab has stagnated horizontally in the transition zone for at least 50 Ma; the thickening represents sediment accumulation on top of the flat-lying slab rather than a temperature effect on phase transitions',
          ],
          correct: 1,
          explain: 'The Clapeyron slope relates the depth shift of a phase boundary to the temperature anomaly: ΔP = (dP/dT) × ΔT. Converting pressure to depth using the density gradient (dP/dz = ρg ≈ 3,300 kg/m³ × 10 m/s² = 33 MPa/km at 410 km). For the 410 (positive Clapeyron slope γ₄₁₀ ≈ +2.5 MPa/K): Δz₄₁₀ = −ΔT × γ₄₁₀ / (ρg). A cold slab with ΔT = −500 K: Δz₄₁₀ = −(−500) × 2.5 / 33 = +37.9 km elevation. For the 660 (negative Clapeyron slope γ₆₆₀ ≈ −2 MPa/K): Δz₆₆₀ = −(−500) × (−2) / 33 ≈ −30 km depression. Total TZ thickening: +37.9 + 30 = ~68 km for a 500 K cold anomaly. Observed thickening of 30–60 km under Japan is consistent with slab temperature anomalies of ~300–500 K below ambient mantle at those depths — physically reasonable for a slab that was at the surface (0°C) and has sunk to 400–600 km depth over ~10–20 Ma, warming conductively from ambient mantle. Option A underestimates the quantitative power of the method — while there are uncertainties, the Clapeyron slopes are reasonably well constrained from laboratory mineral physics and the temperature inference is meaningful. Option C is incorrect — the Clapeyron slopes do produce 10–20 km of topography per 200–300 K, and the ~30 km per element is consistent with realistic slab temperature anomalies, without requiring compositional differences. Option D invents a sedimentation mechanism that has no physical basis at 410–660 km depth.',
        },
      ],
    },
  ],
}

export default seismicDiscontinuities
