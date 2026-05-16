import { Flame, Layers, Mountain, Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const magmaChambersMushSystems: Lesson = {
  id: 'volc-201-1-2-1',
  title: 'Magma Chambers & Crystal Mush Systems',
  track: 'vol',
  trackName: 'Volcanology',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: 'The modern view of sub-volcanic plumbing — crystal-rich mushes replacing the classic magma chamber model, melt connectivity thresholds, recharge events, and seismic imaging of magmatic systems.',
  sources: [
    { org: 'USGS',    title: 'Yellowstone Volcano Observatory — Magmatic System Overview',          url: 'https://www.usgs.gov/observatories/yvo/science/yellowstone-magmatic-system' },
    { org: 'AGU',     title: 'Sparks & Cashman (2017) — Dynamic Magma Systems, Elements',          url: 'https://doi.org/10.2138/gselements.13.3.153' },
    { org: 'Nature',  title: 'Edmonds et al. (2019) — Magma and Volatile Supply to Volcanic Arcs', url: 'https://doi.org/10.1038/s41561-019-0488-7' },
    { org: 'USGS',    title: 'Long Valley Observatory — Caldera Unrest and Monitoring',            url: 'https://www.usgs.gov/observatories/calvo' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'From liquid lake to crystal mush: rethinking the magma chamber',
      body: `For most of the 20th century, volcanologists imagined the magma chamber as a subterranean lake of liquid rock — a large, convecting reservoir of molten silicate melt sitting beneath a volcano, slowly cooling, crystallising, and occasionally erupting when overpressure drove melt up through the conduit. This model was intuitive, it appeared in textbooks, and it explained broad patterns of volcanism well enough. It was also, in its simplest form, wrong.

The revolution came from converging lines of evidence. **Seismic tomography** — using networks of seismometers to measure how P-waves and S-waves travel through the crust — revealed that the regions beneath active volcanic systems are not characterised by broad zones of pure melt. Instead, wave speed anomalies indicate regions with only 5–20% partial melt distributed through a framework of interlocking crystals. **Petrological constraints** from zoning patterns in crystals (temperature and pressure recorded by chemical gradients across individual feldspars, pyroxenes, and amphiboles) showed that crystals spend thousands of years in near-solidus conditions before being rapidly heated and erupted. **Geodetic observations** using InSAR (interferometric synthetic aperture radar) and GPS networks document inflation and deflation of volcanic edifices reflecting the migration of small melt batches through crystalline frameworks rather than surging liquid through open chambers.

The modern consensus, often called the **trans-crustal magmatic system** (sometimes abbreviated TAMI — trans-crustal, amalgamated, and magmatically interconnected), replaces the single liquid magma chamber with a vertically extensive column of magmatic material stretching from the lower crust to the near surface. At any given level, the system may be dominated by **crystal mush**: a mixture with more than 50% crystals by volume, in which a small fraction of interstitial silicate melt occupies the spaces between a rigid or semi-rigid crystal framework. This mush is not inert — it can be mobilised, remobilised, and drawn upon for eruption — but it behaves very differently from a liquid-dominated reservoir.

**Melt fraction** is the controlling variable in mush rheology. Below roughly 40–50% melt (the **rheological lock** or **rigidity threshold**), the crystal network bears stress and the system behaves mechanically like a very weak solid. Extracting eruptible magma from a locked mush requires some perturbation to fluidise the system. Above ~50% melt, the mush crosses into a mechanically fluid regime where crystals are suspended in melt and the system can flow. The transition between these regimes is sharp in experimental silicates and coincides with the **melt connectivity threshold** — the fraction above which melt films percolating through crystal contacts form a continuous, permeable network, allowing melt to segregate and migrate upward by compaction-driven flow or deformation-enhanced extraction.

**Mush rejuvenation by recharge** is the most volcanologically significant process. When fresh, hot, volatile-rich basaltic or mafic magma intrudes from the mantle into the base of a crustal mush column, it delivers both heat and volatiles (primarily H₂O, CO₂, and SO₂). The heat raises melt fraction in the overlying silicic mush, potentially pushing regions above the rigidity threshold. The volatiles lower liquidus temperatures of the mush minerals (because H₂O depresses feldspar and quartz melting temperatures) and contribute to overpressure. If enough melt is mobilised and connected, a volume of magma can accumulate that is both eruptible and overpressured — the precondition for an eruption.

Two of the world's best-studied transcrustal magmatic systems are **Yellowstone** (Wyoming, USA) and **Long Valley** (California, USA). At Yellowstone, seismic tomography has resolved an upper rhyolitic mush at 5–17 km (11 mi) depth (with an estimated melt fraction of ~5–15%) underlain by a broader basaltic partial-melt body at ~20–50 km (31 mi) depth, fed ultimately by a mantle plume. Ground deformation at Yellowstone — measured by continuous GPS and InSAR campaigns — shows episodic uplift and subsidence at rates up to 7 cm/year, reflecting hydrothermal fluid migration and small melt batch intrusions within the mush. At Long Valley, a 760,000-year-old caldera formed by a VEI 7–8 eruption (the Bishop Tuff, ~600 km³ (144 cu mi) of rhyolite), modern unrest manifests as swarms of small earthquakes, CO₂ emissions, and ground deformation; ambient noise tomography has imaged a crystal mush with ~10% melt beneath the resurgent dome.

The implications for eruption forecasting are profound. If large silicic calderas are underlain by mostly-solid mush rather than liquid magma chambers, the question is not "when will the chamber erupt?" but "what recharge event is capable of remobilising enough mush to assemble an eruptible magma body, and on what timescale?" Experimental and modelling studies suggest this mobilisation can happen on timescales of decades to centuries for large recharge pulses — far shorter than the geological recurrence intervals of caldera-forming eruptions, which may be tens of thousands to hundreds of thousands of years. This asymmetry means that geophysical unrest (seismicity, deformation, gas emission) may precede eruption by centuries, complicating the interpretation of monitoring signals.`,
      keyTerms: [
        {
          term: 'crystal mush',
          def: 'A sub-volcanic mixture containing more than ~50% crystals by volume with interstitial silicate melt occupying pore spaces between the crystal framework. Mush is rheologically complex: below ~40–50% melt fraction the crystal framework bears stress (rigid mush, cannot erupt); above ~50% melt the system becomes fluid-like (eruptible). Mushes store heat, volatiles, and potential eruptive material for thousands of years before being remobilised by recharge events.',
        },
        {
          term: 'trans-crustal magmatic system (TAMI)',
          def: 'The modern model of sub-volcanic plumbing in which magma does not reside in a single liquid chamber but is distributed through a vertically extensive column of crystal mush, partial melts, and small melt lenses spanning the entire crust from the mantle to the shallow sub-volcanic environment. Heat, melt, and volatiles migrate upward through this column over timescales of thousands to hundreds of thousands of years.',
        },
        {
          term: 'melt connectivity threshold',
          def: 'The critical melt fraction (~40–50% by volume) above which interstitial melt films between crystals form a continuous, permeable network. Below the threshold, melt is isolated in pockets and cannot migrate; above it, melt can segregate upward by compaction-driven or deformation-enhanced flow. Closely related to the rheological lock — the threshold below which the crystal framework bears shear stress and the mush cannot flow.',
        },
        {
          term: 'mush rejuvenation',
          def: 'The process by which intrusion of hot, volatile-rich mafic magma into the base of a crustal crystal mush raises local melt fractions above the rheological lock threshold, fluidising previously rigid mush and potentially assembling an eruptible magma body. Heat raises melt fraction; dissolved H₂O lowers mineral liquidus temperatures; overpressure can drive melt extraction toward the surface. May occur on timescales of decades to centuries.',
        },
        {
          term: 'ambient noise tomography',
          def: `A seismic imaging technique that uses the cross-correlation of continuous ambient seismic noise (generated by ocean waves, wind, and human activity) recorded at pairs of seismometers to extract surface-wave Green\'s functions between stations. These are inverted to produce 3-D models of seismic velocity (VP, VS) sensitive to temperature, melt fraction, and rock type. Unlike earthquake tomography, it does not require natural earthquakes and can image shallow crustal structure at high resolution, making it well-suited for imaging magmatic plumbing.`,
        },
      ],
    },
    {
      type: 'concept',
      title: 'Four pillars of the mush paradigm',
      body: `**Classic chamber vs. transcrustal mush.** The 20th-century magma chamber concept — a discrete, roofed, liquid-dominated reservoir — was convenient for modelling but inconsistent with geophysical and petrological evidence. Seismic tomography beneath Yellowstone, Long Valley, and the Taupo Volcanic Zone (New Zealand) shows P-wave velocity anomalies of only –3% to –8% relative to background crust. A fully molten rhyolite would produce anomalies of –20% to –30%. The observed anomalies are consistent with 5–20% partial melt distributed through crystalline framework — a mush, not a lake. Crystal zoning records in quartz and feldspar from Yellowstone rhyolites show that crystals lived at near-solidus temperatures for 10³–10⁵ years before being rapidly heated (by recharge) and erupted within decades to centuries — incompatible with residence in a convecting liquid chamber. The TAMI model accommodates both observations: long cold storage in mush, rapid pre-eruptive remobilisation.

**Melt extraction and the rheological lock.** Experimental deformation of crystal-melt mixtures across the full range of crystallinity shows a sharp rheological transition near 40–50% melt. Above this threshold (crystal-poor side), viscosity increases gradually with crystal content — the melt is the continuous phase and crystals are suspended. Below this threshold (crystal-rich side), viscosity increases by many orders of magnitude — the crystals form a load-bearing framework and the mixture behaves as a weak solid. This is the **rheological lock**. Extracting melt from a locked mush requires one of three mechanisms: (1) **compaction** — the weight of overlying rock squeezes melt upward through connected porosity; (2) **shear-enhanced extraction** — regional tectonic stress or magmatic overpressure deforms the mush, creating permeable pathways; (3) **remelting by recharge** — thermal and volatile injection raises melt fraction above the lock threshold locally, fluidising the mush. All three mechanisms are thought to operate in natural systems; their relative importance varies with crustal level, strain rate, and recharge flux.

**Yellowstone: the type example of a transcrustal system.** The Yellowstone magmatic system is the most intensively monitored large silicic caldera on Earth. The upper crust (5–17 km (11 mi) depth) contains a rhyolitic crystal mush with ~5–15% melt fraction, imaged by both body-wave and surface-wave tomography. Below it, at ~20–50 km (31 mi) depth, a broader, lower-velocity body represents basaltic partial melt fed by the Yellowstone mantle plume. The upper mush sits above a magmatic hydrothermal system that drives Yellowstone\'s geysers and hot springs. Ground deformation (measured since the 1970s by levelling surveys and since the 2000s by continuous GPS and InSAR) shows episodic caldera floor uplift and subsidence at up to 7 cm/year, interpreted as reflecting hydrothermal fluid migration and small basaltic intrusions into the lower mush — normal, non-eruptive unrest driven by the ongoing recharge of the system. The last three Yellowstone supereruptions (2.1 Ma, 1.3 Ma, 0.64 Ma, each VEI 8) occurred after sufficient melt accumulated above the lock threshold to form an eruptible magma body — a process that may require centuries of sustained recharge.

**Seismic imaging and geodetic monitoring.** Two observational techniques anchor modern understanding of mush systems. (1) **Seismic velocity anomalies**: VP/VS ratios are diagnostic of melt fraction because melt dramatically reduces VS (shear-wave velocity) while having a smaller effect on VP (P-wave velocity) — so a high VP/VS ratio signals partial melt. Ambient noise tomography using dense seismic networks (such as the EarthScope Transportable Array across the western USA, or the AIRA-net at Aira caldera, Japan) resolves mush geometry at 1–5 km (3.1 mi) horizontal resolution. At Aira (Sakurajima\'s source caldera), VP/VS anomalies delineate a shallow mush at 3–10 km (6.2 mi) depth that inflates during inter-eruption intervals and deflates during eruption sequences. (2) **Geodetic deformation**: InSAR measures ground surface deformation to millimetre precision from orbiting radar satellites. Inflation (surface doming) signals melt or fluid injection; deflation signals withdrawal or compaction. At Long Valley caldera, an ongoing episode of unrest since 1980 has produced ~80 cm (31.5 in) of total uplift of the resurgent dome, attributed to intrusion of small basaltic sills into the base of the mush — recharge events that have not yet triggered eruption but demonstrate active mush-column dynamics.`,
      cards: [
        {
          name: 'Crystal Mush Architecture',
          icon: Layers,
          color: BRAND.amethyst,
          desc: 'Transcrustal magmatic column: crystal mush (>50% crystals) from lower crust to near-surface. Melt fraction 5–20% in typical imaged systems. Rheological lock at ~40–50% melt. Long cold storage (10³–10⁵ yr) followed by rapid remobilisation. Replaces single liquid-dominated magma chamber model.',
          examples: 'Yellowstone upper mush: 5–17 km (11 mi) depth, ~5–15% melt · Long Valley: ~10% melt under resurgent dome · Taupo Volcanic Zone (NZ): distributed mush column beneath 350-km-long rift',
        },
        {
          name: 'Mush Rejuvenation by Recharge',
          icon: Flame,
          color: BRAND.coral,
          desc: 'Basaltic recharge from below delivers heat (raises melt fraction) and volatiles (H₂O lowers liquidus temperatures, increases overpressure). Pushes mush above rheological lock locally. Melt extraction via compaction, shear, or remelting. Mobilisation timescales: decades to centuries for large pulses.',
          examples: 'Yellowstone: episodic basaltic intrusions drive caldera floor uplift up to 7 cm/yr without eruption · Long Valley: 80 cm (31.5 in) cumulative uplift since 1980 from basaltic sill intrusions · Santorini 2011–2012 unrest: seismic and geodetic signals interpreted as basaltic recharge into rhyolitic mush',
        },
        {
          name: 'Seismic Imaging of Mush',
          icon: Activity,
          color: BRAND.jade,
          desc: 'Body-wave tomography: VP anomalies of –3% to –8% = 5–20% melt (vs. –20 to –30% for pure melt). High VP/VS ratio diagnostic of partial melt. Ambient noise tomography: cross-correlates continuous seismic noise; resolves shallow mush at 1–5 km (3.1 mi) resolution without earthquakes. S-wave shadows indicate melt-rich lenses.',
          examples: 'Yellowstone: dual-level anomaly — rhyolitic upper mush (5–17 km (11 mi)) + basaltic lower body (20–50 km (31 mi)) · Aira caldera, Japan: VP/VS anomaly delineates 3–10 km (6.2 mi) mush; inflates between Sakurajima eruption sequences · Long Valley: ambient noise tomography maps partial-melt zone beneath Bishop Tuff caldera',
        },
        {
          name: 'Geodetic Monitoring & Forecasting',
          icon: Mountain,
          color: BRAND.gold,
          desc: 'InSAR: millimetre-precision surface deformation from radar satellites. GPS: continuous 3-D displacement. Inflation = melt/fluid injection; deflation = withdrawal or compaction. Mush mobilisation timescales (centuries) shorter than eruption recurrence intervals (10⁴–10⁵ yr): unrest ≠ imminent eruption. Distinguishing recharge-driven unrest from pre-eruptive unrest remains the central forecasting challenge.',
          examples: 'Long Valley InSAR: 80 cm (31.5 in) total resurgent dome uplift 1980–present, ongoing non-eruptive unrest · Yellowstone GPS: 2004–2010 uplift at 7 cm/yr followed by subsidence; no eruption · Campi Flegrei (Italy): bradyseismic crises in 1970–72 and 1982–84 lifted caldera floor 3.5 m (11 ft) total; town of Pozzuoli evacuated twice; eruption has not occurred since 1538',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Trans-crustal magmatic system: from mantle recharge to surface eruption',
      body: 'This flow diagram traces the pathway of magmatic material from deep mantle-derived basalt through the transcrustal mush column to the surface. Each node represents a distinct physical domain with its own rheological state, melt fraction, and dominant processes. Edges show the fluxes and transformations that connect them — heat, melt, volatiles, and deformation — culminating in either non-eruptive unrest or an actual eruption at the surface.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'A six-node diagram of the trans-crustal magmatic system, showing how mantle-derived basaltic recharge propagates upward through the crystal mush column, triggers rejuvenation, and either stalls as geodetically detectable unrest or drives melt extraction toward eruption.',
        nodes: [
          {
            id: 'mantle-source',
            label: 'Mantle Source / Recharge',
            description: 'Decompression melting or flux melting (subduction volatiles) generates primary basaltic melt in the upper mantle at 50–100 km (62 mi) depth. Melt fraction 2–5%. Buoyant melt segregates and ascends through dunite channels and dykes. Volatile content (H₂O, CO₂) controls explosive potential of eventual eruption.',
            color: BRAND.ruby,
          },
          {
            id: 'lower-crust-mush',
            label: 'Lower Crustal Mush',
            description: 'Basaltic melt ponds at density barriers in the lower crust (20–40 km (25 mi)). Fractional crystallisation and assimilation produce intermediate to silicic melts. Melt fraction 10–30%. Volatile exsolution begins. Heat flux drives partial melting of crustal country rock — the MASH zone (melting, assimilation, storage, homogenisation).',
            color: BRAND.coral,
          },
          {
            id: 'mid-crust-mush',
            label: 'Mid-Crustal Crystal Mush',
            description: 'Silicic crystal mush at 10–20 km (12 mi) depth. Melt fraction typically 5–15% — below the rheological lock. Crystals (feldspar, quartz, amphibole, biotite) record long thermal histories in zoning profiles. Recharge from below can raise local melt fraction above ~40–50%, triggering mobilisation. Primary locus of long-term magma storage.',
            color: BRAND.amethyst,
          },
          {
            id: 'melt-lens',
            label: 'Extracted Melt Lens',
            description: 'When melt fraction exceeds the connectivity threshold (~40–50%), compaction and deformation extract melt upward into discrete lenses or sills. Melt fraction >50%: eruptible. Overpressure builds as exsolved volatiles expand. Seismically imaged as low-VP, high-VP/VS anomalies and S-wave shadows at 5–10 km (6.2 mi) depth.',
            color: BRAND.gold,
          },
          {
            id: 'unrest-monitor',
            label: 'Geodetic & Seismic Unrest',
            description: 'Melt and fluid migration into the upper crust produces detectable surface deformation (InSAR, GPS inflation) and induced seismicity (fluid-triggered earthquakes, long-period tremor). Most recharge episodes stall here — producing unrest without eruption. Distinguishing recharge-only unrest from pre-eruptive signals is the central challenge of volcano monitoring.',
            color: BRAND.jade,
          },
          {
            id: 'eruption',
            label: 'Eruption / Surface Output',
            description: 'If overpressure exceeds the tensile strength of the roof rock, a dyke propagates to surface. Melt fraction, volatile content, and ascent rate determine eruption style: low-crystallinity rhyolite + high H₂O + rapid ascent = Plinian; basaltic recharge reaching surface directly = effusive to Strombolian. Erupted products carry the petrological record of the entire mush column.',
            color: BRAND.accent,
          },
        ],
        edges: [
          { from: 'mantle-source',    to: 'lower-crust-mush',  label: 'Basaltic melt ascent; heat and volatile flux' },
          { from: 'lower-crust-mush', to: 'mid-crust-mush',    label: 'Silicic melt segregation; MASH processing' },
          { from: 'mid-crust-mush',   to: 'melt-lens',         label: 'Recharge-driven melt extraction above lock threshold' },
          { from: 'melt-lens',        to: 'unrest-monitor',    label: 'Sill intrusion; fluid migration; surface inflation' },
          { from: 'unrest-monitor',   to: 'eruption',          label: 'Roof rupture if overpressure exceeds tensile strength' },
          { from: 'lower-crust-mush', to: 'unrest-monitor',    label: 'Deep recharge; long-period seismicity; slow uplift' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Seismic tomography beneath a large silicic caldera resolves a P-wave velocity anomaly of –6% relative to background crust in a region at 8–14 km (8.7 mi) depth. A fully molten rhyolite would produce an anomaly of approximately –25%. What does this observation most directly imply about the state of the sub-caldera magmatic system?',
          a: [
            'The imaged region contains approximately 20–25% partial melt distributed through a crystal framework — a crystal mush well below the rheological lock threshold — rather than a dominantly liquid magma chamber; the small anomaly is diagnostic of mush, not a liquid reservoir',
            'The seismic anomaly indicates the region is fully solidified granite with no melt present; the –6% anomaly reflects elevated temperatures increasing crystal lattice spacing, not the presence of melt at all',
            'The anomaly is too small to be caused by magma and most likely reflects a deep saline aquifer or overpressured hydrothermal fluid; volcanic systems are routinely confused with hydrothermal systems in tomographic images',
            'The –6% anomaly indicates ~50% melt fraction, just at the rheological lock threshold; the system is on the verge of complete fluidisation and represents an immediate eruption hazard',
          ],
          correct: 0,
          explain: 'Fully solidified granite with elevated temperatures (B) would produce velocity anomalies of at most –1% to –2% from thermal expansion alone — nowhere near –6%; melt is required to explain the magnitude. Saline aquifers (C) can reduce seismic velocities slightly but not to –6% at crustal depth where pressures would suppress fluid-induced anomalies to that magnitude; moreover, the VP/VS ratio distinguishes melt (dramatically lowers VS more than VP) from fluid (affects VP more strongly). The –6% anomaly does not correspond to ~50% melt (D): the relationship between melt fraction and velocity anomaly is approximately –0.25% to –0.30% per 1% melt fraction for rhyolitic partial melts, so –6% corresponds to roughly 20–25% melt, not 50%. The correct answer is A: the –6% anomaly, compared to the expected –25% for pure melt, implies ~20–25% partial melt in a crystal-dominated framework. This is characteristic of a crystal mush state. At 20–25% melt the system is below the ~40–50% rheological lock — it cannot erupt without significant perturbation. This finding underpins the modern TAMI view: large silicic calderas store magma as crystal mush, not as liquid chambers.',
        },
        {
          q: 'Crystal zoning profiles in quartz phenocrysts from a large rhyolitic ignimbrite show Ti concentrations consistent with temperatures of ~720°C (1328°F) throughout most of the crystal interior, with a sharp high-Ti rim recording ~850°C (1562°F) grown just before eruption. Using Ti-in-quartz thermometry and diffusion modelling, the high-temperature rim is estimated to have grown within 100–300 years before eruption. What is the volcanological significance of this petrological observation?',
          a: [
            'The crystals demonstrate that the magma chamber was liquid at 850°C (1562°F) for its entire pre-eruptive history and only cooled to 720°C (1328°F) after eruption during lava flow emplacement; the zoning records post-eruptive cooling, not pre-eruptive storage',
            'The low-temperature interior records long-duration (thousands of years) storage of the crystal in a cold (~720°C (1328°F)) crystal mush near the solidus; the high-temperature rim records thermal rejuvenation by a recharge event in the centuries before eruption that raised melt fraction above the rheological lock and mobilised the mush; the observation supports mush remobilisation on century timescales by recharge',
            'The zoning profile indicates the eruption was triggered by a meteorite impact that instantaneously heated the upper crust from 720°C (1328°F) to 850°C (1562°F); only an external thermal input of this magnitude could explain the sharp compositional boundary between interior and rim',
            'The temperature jump from 720°C (1328°F) to 850°C (1562°F) recorded in the rim indicates the crystal was transported from a shallow cold storage region to a deeper hotter region shortly before eruption — downward transport of crystals by convection in a liquid magma chamber is the most parsimonious explanation',
          ],
          correct: 1,
          explain: 'Post-eruptive cooling (A) is ruled out by the sequence: the low-temperature interior is the older part of the crystal (grown during storage) and the high-temperature rim is the younger part (grown just before eruption); post-eruption lava flows cool far faster (days to weeks) than the 100–300 year timescale estimated from diffusion modelling of the rim thickness. Meteorite impact (C) is not a mechanism that can selectively heat a sub-volcanic crystal mush to 850°C (1562°F) without leaving unambiguous geological evidence including an impact crater, ejecta layer, and shocked mineral assemblage, none of which are reported in this scenario. Downward convective transport in a liquid chamber (D) contradicts both the long cold storage duration (thousands of years in the crystal interior, far too long for a convecting liquid to maintain without reheating all crystals uniformly) and the modern evidence against liquid-dominated chambers. The correct answer is B: this type of crystal zoning record — cold interior recording near-solidus mush storage, sharp hot rim recording pre-eruptive thermal rejuvenation — is now widely documented in silicic volcanic systems (Yellowstone, Taupo, Fish Canyon Tuff). It is one of the key petrological pillars of the TAMI model. The ~100–300 year duration of the high-temperature rim growth sets a timescale for mush mobilisation by recharge: centuries, not millennia — fast enough to be relevant for monitoring but too slow to appear in historical records for many calderas with recurrence intervals of 10⁴–10⁵ years.',
        },
        {
          q: 'The floor of Yellowstone caldera has undergone episodic uplift and subsidence measured by GPS and InSAR at rates up to 7 cm/year since the 1970s, with no eruption occurring. The USGS Yellowstone Volcano Observatory characterises the current state as "elevated background unrest." Why does the detection of ground deformation at a large caldera not automatically indicate an elevated eruption probability, and what monitoring signals would shift the assessment toward genuine pre-eruptive unrest?',
          a: [
            'Ground deformation at Yellowstone is entirely caused by the seasonal expansion and contraction of the hydrothermal system in response to snowmelt and rainfall; it has no magmatic component and is therefore irrelevant to eruption forecasting; magmatic unrest would only be detected by changes in eruption rate of the geysers',
            'Caldera ground deformation at Yellowstone and similar systems is normal background behaviour driven by hydrothermal fluid migration and small basaltic intrusions into the crystal mush — processes that have occurred continuously for hundreds of thousands of years without triggering eruption; the mush is below the rheological lock and cannot erupt without major sustained recharge; signals suggesting pre-eruptive remobilisation would include rapidly accelerating uplift combined with LP and VLP seismicity indicating magma ascent, a large increase in magmatic gas (SO₂, CO₂) flux, and seismic evidence of a newly forming high-melt-fraction body shallowing toward the surface',
            'Any ground deformation at a supervolcano should be treated as an imminent eruption warning; the precautionary principle requires immediate evacuation of the Yellowstone region whenever uplift exceeds 1 cm/year; historical caldera eruptions worldwide show that unrest episodes of this type last only days to weeks before eruption',
            'Ground deformation indicates that Yellowstone has already entered its eruption cycle and will erupt within the next 10,000 years; the current rate of uplift means the magma chamber will reach the surface within a geologically short time and monitoring should focus on preparing for the inevitable eruption rather than assessing probability',
          ],
          correct: 1,
          explain: `The seasonal hydrothermal explanation (A) dramatically understates the magmatic component of Yellowstone deformation: the multi-year episodic uplift and subsidence patterns (e.g., the 2004–2010 uplift episode at ~7 cm/yr) are clearly correlated with seismic activity and are too large and sustained to reflect only seasonal hydrology; they reflect genuine fluid and possibly melt migration in the mid-crust. The precautionary 1 cm/year evacuation threshold (C) is not used by any volcano observatory because it would require permanent evacuation of thousands of communities near active calderas worldwide (including Long Valley, Campi Flegrei, Taupo, and dozens of others) where such deformation is normal; this would be both scientifically unjustified and operationally impossible. The "inevitable eruption in 10,000 years" framing (D) is scientifically meaningless — deformation rates cannot be extrapolated linearly to a chamber-reaching-surface scenario; Yellowstone\'s deformation reflects episodic intrusive events, not steady linear uplift toward eruption. The correct answer is B: at transcrustal mush systems, ground deformation is a normal expression of ongoing hydrothermal and mafic intrusive activity within a mush column that has been geodynamically active for millions of years. The rheological lock means most recharge events are absorbed by the mush without producing eruptible magma. A genuine pre-eruptive shift would require convergent signals: accelerating deformation, long-period and very-long-period seismicity (indicating fluid/melt movement in dykes), dramatically increased magmatic SO₂ flux (SO₂ is poorly soluble in melt and degasses from shallow magma), and seismic tomographic evidence of a new high-melt-fraction body at shallow crustal levels.`,
        },
        {
          q: 'At what approximate melt fraction does a silicic crystal mush transition from a state where the crystal framework bears stress (rheological lock) to a state where melt is the continuous phase and crystals are suspended, allowing the mixture to flow and potentially erupt?',
          a: [
            'Approximately 10–15% melt fraction; below this threshold the mush is completely rigid and above it melt percolates freely through crystal contacts',
            'Approximately 70–80% melt fraction; silicic magmas require a nearly liquid state before any flow is possible because of the very high viscosity of rhyolitic melt',
            'Approximately 40–50% melt fraction; below this threshold (the rheological lock) the crystal network bears stress and the mush cannot flow; above it, crystals become suspended in melt and the system becomes mechanically fluid and potentially eruptible',
            'The rheological transition is gradual and continuous across all melt fractions from 0% to 100%; there is no threshold behaviour in crystal-melt mixtures and the concept of a rheological lock is a simplification without physical basis',
          ],
          correct: 2,
          explain: 'A threshold at 10–15% melt (A) is far too low: at this melt fraction, melt exists in isolated pockets with no continuous melt network (below the percolation threshold), the crystal framework is load-bearing, and viscosity is many orders of magnitude above any eruptible value; basaltic partial melts in the mantle begin to segregate at 1–3% melt, but silicic crustal mushes require much higher melt fractions. A threshold at 70–80% melt (B) is far too high and confuses magma viscosity with rheological phase transition: even very viscous rhyolitic magmas (10⁶–10⁸ Pa·s) can erupt explosively; the key transition is not about absolute viscosity but about whether the crystal framework or the melt phase controls the mechanical behaviour. Gradual continuous behaviour (D) is contradicted by both experimental data and theoretical percolation physics: the liquid-solid transition in crystal-melt systems shows threshold (critical-point-like) behaviour around the crystal network percolation threshold, which experiments consistently place near 40–50% melt for silicic compositions; this is why the rheological lock is a well-established concept in experimental petrology. The correct answer is C: the ~40–50% melt fraction threshold (equivalently, ~50–60% crystal fraction) marks the rheological lock. Below it, the mush is a weak solid incapable of flowing or erupting without external perturbation. Above it, the mush is a crystal-bearing fluid capable of ascending through the crust. This threshold is why recharge events that push local melt fractions above ~50% are so significant: they can convert large volumes of inert mush into eruptible magma on century timescales.',
        },
        {
          q: 'Petrological and geochronological studies of pre-eruptive crystals from several large silicic ignimbrites (including the Bishop Tuff from Long Valley and rhyolites from Yellowstone) consistently find crystal residence times of 10³–10⁵ years in near-solidus mush conditions, with evidence of thermal rejuvenation in the centuries to millennia before eruption. Large caldera-forming eruptions at these systems recur every 10⁴–10⁵ years. What is the primary implication of this timescale mismatch for volcano monitoring and hazard assessment at large caldera systems?',
          a: [
            'Because mush mobilisation timescales (centuries) are much shorter than eruption recurrence intervals (tens of thousands of years), many recharge events will mobilise the mush and produce geophysically detectable unrest without leading to eruption; monitoring signals indicating active mush remobilisation do not reliably forecast imminent eruption and must be interpreted in the context of long-term baseline activity',
            'Because crystals spend up to 100,000 years in the mush, any crystal-bearing eruption at a caldera system requires 100,000 years of precursory unrest before it can occur; if a caldera has not shown unrest for 100,000 years it is safe to conclude it will not erupt in the foreseeable future',
            'The timescale mismatch proves that large caldera eruptions are not preceded by any detectable precursors because the mush remobilisation is complete before it produces surface signals; the only useful monitoring tool for large calderas is retrospective geological mapping rather than real-time geophysical monitoring',
            'Because mush mobilisation takes centuries, any ground deformation episode at a caldera lasting more than 100 years is definitive evidence of an impending caldera-forming eruption and should trigger permanent evacuation of surrounding regions',
          ],
          correct: 0,
          explain: '100,000 years of precursory unrest before every eruption (B) is the opposite of the correct interpretation: the mismatch means that mobilisation takes a short time (centuries) relative to the long recurrence interval (tens of thousands of years), so most caldera lifetimes include many mobilisation episodes that never produce an eruption; unrest is not a reliable predictor of eruption on short timescales. Absence of detectable precursors (C) is contradicted by documented pre-eruptive unrest at multiple caldera systems (e.g., the months-long seismic crisis before the 1991 Pinatubo eruption; documented unrest years before historical eruptions at Rabaul, Campi Flegrei, and others); moreover, rejuvenation timescales of centuries would produce decades of geophysically detectable signals before eruption — these signals can be monitored in real time. A 100-year deformation threshold for permanent evacuation (D) is operationally impossible and scientifically unjustified: Long Valley has had continuous elevated unrest since 1980 (45+ years) without eruption; Campi Flegrei has had episodic bradyseismic crises for decades without a magmatic eruption since 1538. The correct answer is A: the fundamental monitoring challenge at large caldera systems is that the timescale of mush mobilisation (centuries) is far shorter than eruption recurrence (tens of thousands of years), meaning that over any human monitoring baseline (decades), active mush remobilisation and geophysically detectable unrest are expected to occur many times between eruptions. Elevated unrest is not synonymous with impending eruption. Monitoring strategies must establish long-term baselines, identify trend changes (acceleration, new signal types, increasing SO₂), and use probabilistic frameworks that account for the base rate of non-eruptive unrest at each specific system.',
        },
      ],
    },
  ],
}

export default magmaChambersMushSystems
