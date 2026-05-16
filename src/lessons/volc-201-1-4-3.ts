import { Wind, Radio, Satellite, FlaskConical, Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const volcanicGasMonitoring: Lesson = {
  id: 'volc-201-1-4-3',
  title: 'Volcanic Gas Monitoring',
  track: 'vol',
  trackName: 'Igneous Petrology',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: 'Volcanic gases are the messengers of ascending magma — SO₂ flux surges at Soufrière Hills predicted dome collapses hours in advance, while CO₂/SO₂ ratios from MultiGAS instruments distinguish deep magma degassing from shallow hydrothermal noise. From DOAS traverses to TROPOMI satellite retrievals, explore the tools volcanologists use to read the invisible signals of volcanic unrest.',
  sources: [
    { org: 'USGS', title: 'Volcanic Gas Studies — Kilauea and Hawaiian Volcano Observatory Gas Monitoring Program', url: 'https://www.usgs.gov/observatories/hvo/science/volcanic-gases' },
    { org: 'Smithsonian GVP', title: 'Global Volcanism Program — Soufrière Hills Montserrat Monitoring Record', url: 'https://volcano.si.edu/volcano.cfm?vn=360050' },
    { org: 'INGV', title: 'Etna and Stromboli SO₂ Flux Monitoring — Network of Scanning DOAS Instruments', url: 'https://www.ct.ingv.it/en/research/geochemistry' },
    { org: 'Journal of Volcanology and Geothermal Research', title: 'Aiuppa et al. — MultiGAS Measurements of CO₂/SO₂ Ratios as Eruption Precursors', url: 'https://doi.org/10.1016/j.jvolgeores.2007.09.001' },
    { org: 'GNS Science', title: 'TROPOMI SO₂ Monitoring of New Zealand Volcanoes — Whakaari/White Island Case Study', url: 'https://www.gns.cri.nz/research/natural-hazards/volcanic-hazards/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The invisible precursor',
      body: `Before lava emerges, before the ground shakes with the tremor of ascending magma, the gases tell their story. As magma rises through the crust, decreasing pressure allows dissolved volatiles to exsolve — to bubble out of solution — and migrate toward the surface through fractures and fumarolic conduits. The critical insight that transformed gas monitoring from a passive observation into an active eruption forecasting tool is that different gases exsolve at different depths and different times: **CO₂** exsolves earliest, at depths of 20–40 km (25 mi) as magma ascends from the mantle; **SO₂** exsolves much later, at 1–5 km (3.1 mi) depth as it separates from the hydrothermal system. By measuring gas ratios — particularly CO₂/SO₂ — in real time, volcanologists can distinguish the arrival of deep fresh magma (high CO₂/SO₂) from the shallow degassing of magma already stalled in the upper crust (low CO₂/SO₂, high SO₂ flux).

The practical consequence of this understanding was demonstrated repeatedly at **Soufrière Hills, Montserrat** — perhaps the most intensively gas-monitored volcano in the world during its 1995–2013 eruptive period. At Soufrière Hills, SO₂ flux measured by COSPEC (Correlation Spectrometer) traverses and later DOAS scanning instruments showed characteristic surges — rises in SO₂ output from <500 to >1,500 tonnes (1653.0 tons)/day — that consistently preceded **dome collapse events** by hours to days. The mechanism is straightforward: dome collapse occurs when a growing, degassed lava dome becomes gravitationally unstable; but the critical precursory signal is the pressurisation of the system that precedes collapse, which drives additional SO₂ from the conduit. Tragically, the lessons of gas monitoring were demonstrated by their temporary absence: in June 1997, a premature partial relaxation of the exclusion zone — based partly on reduced SO₂ flux that was misinterpreted as system quiescence — was followed by a catastrophic dome collapse that killed 19 people, including farmers who had returned to tend their crops.

Volcanic gas monitoring today integrates multiple techniques spanning local networks to global satellites. **DOAS (Differential Optical Absorption Spectroscopy)** on UV scanning instruments or vehicle traverses provides SO₂ column amounts in real time. **MultiGAS sensors** deployed at fumaroles or deployed by drone measure in-situ molar ratios of SO₂, CO₂, H₂S, and H₂O. **FTIR (Fourier Transform Infrared Spectrometry)** provides remote sensing of HCl, HF, CO, OCS, and other trace gases in volcanic plumes. From space, the **TROPOMI instrument** on Copernicus Sentinel-5P maps global SO₂ columns daily at 3.5×5.5 km (3.4 mi) resolution — detecting eruptions from VEI 2 upward anywhere on the planet within hours. Together, this multi-scale network enables a picture of volcanic degassing that spans from molecular-level gas chemistry to hemisphere-wide aerosol tracking.`,
      keyTerms: [
        {
          term: 'SO₂ flux',
          def: 'The mass of sulfur dioxide emitted per unit time from a volcanic source, expressed in tonnes/day or kg/s. SO₂ flux is the most widely used eruption monitoring parameter because it directly reflects the degassing rate of fresh magma arriving at shallow depths (<~5 km (3.1 mi)), where SO₂ exsolves from the melt. Background SO₂ flux from open-system degassing at persistently active volcanoes (Stromboli, Etna, Kilauea) is typically 500–5,000 t/day; pre-eruptive surges can reach >10,000 t/day; the Pinatubo 1991 eruption injected ~20 Mt SO₂ in a single day. Measured by COSPEC, DOAS traverses, or scanning DOAS networks.',
        },
        {
          term: 'DOAS (Differential Optical Absorption Spectroscopy)',
          def: 'A UV spectroscopic technique that measures SO₂ column amounts in volcanic plumes by detecting the characteristic absorption fingerprint of SO₂ at 300–320 nm wavelengths in scattered skylight or direct sunlight passing through the plume. Instruments can be ground-based scanning DOAS (permanent networks), vehicle-mounted traversing DOAS (driven beneath the plume), or drone/airborne. The "differential" refers to the removal of broadband extinction effects to isolate the structured molecular absorption. DOAS networks at Etna and Stromboli provide 5-minute SO₂ flux data continuously.',
        },
        {
          term: 'MultiGAS sensor',
          def: 'A portable instrument that simultaneously measures molar concentrations of multiple volcanic gases (typically SO₂, CO₂, H₂S, H₂O) using electrochemical sensors and non-dispersive infrared detectors. Deployed at fumaroles, on crater rims, or carried by drones into active plumes. The key output is gas molar ratios (CO₂/SO₂, H₂S/SO₂), which reflect depth of degassing and magma supply rate. MultiGAS instruments enable near-real-time gas ratio monitoring that complements total flux measurements from DOAS.',
        },
        {
          term: 'CO₂/SO₂ molar ratio',
          def: 'The molar ratio of carbon dioxide to sulfur dioxide in a volcanic gas mixture, used to infer the depth of magma degassing. CO₂ exsolves at high pressure (>500 MPa, >20 km (12 mi) depth) while SO₂ exsolves at low pressure (<100 MPa, <5 km (3.1 mi) depth). High CO₂/SO₂ (>10) indicates deep magma degassing — fresh magma ascending from depth before significant SO₂ exsolution. Low CO₂/SO₂ (<2) indicates shallow, SO₂-dominated degassing of magma already resident in the upper conduit. Rising CO₂/SO₂ often precedes eruption reactivation by days to weeks.',
        },
        {
          term: 'TROPOMI (TROPOspheric Monitoring Instrument)',
          def: 'A UV-visible-NIR-SWIR imaging spectrometer aboard the Copernicus Sentinel-5P satellite (launched 2017) that measures atmospheric trace gas columns globally with a swath of 2,600 km (1616 mi) and resolution of 3.5×5.5 km (3.4 mi). For volcanic monitoring, TROPOMI measures SO₂ column density in Dobson Units (DU) with sensitivity to emissions as small as ~1–5 kt SO₂ — capable of detecting eruptions as small as VEI 2. Daily global coverage enables systematic tracking of degassing at hundreds of volcanoes simultaneously, providing a global baseline for volcanic SO₂ emissions.',
        },
        {
          term: 'Vog (volcanic air pollution)',
          def: `A hazy, sulfurous air pollution event caused by the reaction of volcanic SO₂ with atmospheric water vapour and oxygen to form sulfate aerosol (H₂SO₄ and SO₄²⁻ particles). Vog is a persistent hazard downwind of continuously degassing volcanoes, particularly in Hawaii (from Kilauea\'s summit and rift eruptions) and Vanuatu. It causes respiratory problems, reduces visibility, and damages crops. During Kilauea\'s 2018 eruption, vog conditions persisted across the entire Big Island for months, with SO₂ concentrations exceeding EPA health standards across affected districts.`,
        },
      ],
    },
    {
      type: 'concept',
      title: 'The volcanic gas species and what they reveal',
      body: `Volcanic gases are dominated by **water vapour (H₂O)**, typically comprising 60–80 mol% of the total gas mixture. Most of this water is magmatic in origin — dissolved in the melt at depth and exsolving as pressure decreases — but shallow hydrothermal systems can add meteoric and hydrothermal water to the mixture, making H₂O fraction a poor indicator of eruption state. The next most abundant species is **CO₂** (typically 10–20 mol%), which is the key deep-source indicator. CO₂ is virtually insoluble in basaltic melt above ~1 GPa (~30 km (19 mi) depth) and exsolves from ascending magma long before it reaches the upper crust. A rising CO₂/SO₂ ratio therefore signals that fresh, undegassed magma is ascending from depth — often the earliest gas-based precursor to eruption.

**SO₂** (1–10 mol%) is the workhorse monitoring gas because it is strongly UV-absorbing (enabling DOAS remote sensing), relatively easy to distinguish from background, and its flux directly tracks shallow magma degassing. Unlike CO₂, SO₂ dissolves efficiently in hydrothermal water, so at volcanoes with extensive hydrothermal systems (Soufrière-type) SO₂ may be "scrubbed" from the gas mixture before reaching the surface — a dangerous situation where reduced SO₂ flux may not indicate reduced magmatic activity but instead increased aqueous absorption in the hydrothermal system. **Monitoring the SO₂/H₂S ratio** helps: high H₂S relative to SO₂ indicates hydrothermal scrubbing (H₂S is the reduced form of sulfur, stable in hydrothermal fluids), while high SO₂/H₂S indicates direct magmatic gas input bypassing hydrothermal processing.

**HCl and HF** are measured by FTIR and indicate magma degassing at very shallow depths (<1 km (0.6 mi)) since both chlorine and fluorine are highly soluble in silicate melts and only exsolve in the uppermost conduit. Rising HCl/SO₂ can indicate shallower magma or a shift in degassing style. HF is particularly hazardous — the 1783 Laki eruption in Iceland released massive amounts of HF, causing **fluorosis** in ~80% of Iceland's sheep and cattle and contributing to the famine that killed ~20% of Iceland's population.`,
      cards: [
        {
          name: 'The H₂O–CO₂–SO₂ Degassing Sequence',
          icon: FlaskConical,
          color: BRAND.jade,
          desc: 'Gas exsolution is pressure-controlled: CO₂ exsolves at 500–1,000 MPa (20–40 km (25 mi) depth), H₂O at 100–300 MPa (5–10 km (6.2 mi)), SO₂ at <100 MPa (<5 km (3.1 mi)). This depth sequencing means CO₂/SO₂ ratios are a "depth radar" for ascending magma. Typical volcanic gas composition: H₂O 60–80%, CO₂ 10–20%, SO₂ 1–10%, HCl 0.1–1%, HF <0.1%. Hydrothermal scrubbing removes SO₂ preferentially in wet systems, masking magmatic input. Rising CO₂/SO₂ from baselines of ~2–5 to >10 is a documented eruption precursor at Etna, Stromboli, and Soufrière Hills.',
          examples: 'Etna 2011 paroxysm precursors: CO₂/SO₂ rose from ~2 to >8 in 24 hrs before each paroxysmal episode (MultiGAS at Bocca Nuova) · Soufrière Hills 2010 dome growth: CO₂/SO₂ consistently elevated at >5 during accelerated dome growth phases vs ~1–2 during quiescence · Whakaari/White Island 2019: SO₂ flux dropped to <100 t/day before the lethal eruption — misinterpreted as quiescence but reflected SO₂ scrubbing by a hot hydrothermal system',
        },
        {
          name: 'DOAS Networks and SO₂ Flux Monitoring',
          icon: Radio,
          color: BRAND.accent,
          desc: 'Scanning DOAS: UV spectrometer scans horizon-to-horizon below the plume, integrating SO₂ column amount across the scan. Multiplied by plume speed (from wind data or anemometer) → SO₂ flux in t/day. Networks of 3–6 scanning instruments provide continuous flux at 5-min resolution. COSPEC traverse: vehicle drives perpendicular to plume under it; older method but still used operationally. Drone DOAS: UAV flown under or through plume for direct in-plume column measurements. Detection limit: ~5–20 t/day. Saturation above ~10,000 t/day (column optical depth >1).',
          examples: `Etna permanent DOAS network (FLAME): 10 scanning stations, 5-min SO₂ flux → detected pre-paroxysm surges from ~2,000 to >10,000 t/day at 15-min lead time · Soufrière Hills COSPEC monitoring: SO₂ surges to >2,000 t/day 12–24 hrs before major dome collapses · Masaya (Nicaragua): persistent SO₂ emission 1,500–4,000 t/day — one of world\'s largest persistent volcanic SO₂ sources, monitored continuously since 1998`,
        },
        {
          name: 'FTIR and Trace Gas Chemistry',
          icon: Activity,
          color: BRAND.gold,
          desc: 'Fourier Transform Infrared spectrometry remotely measures column amounts of HCl, HF, CO, OCS, SiF₄, H₂O, CO₂, and SO₂ simultaneously in volcanic plumes using sun, lava, or open-path emission as IR source. Key ratios: HCl/SO₂ (shallow degassing indicator), CO₂/SO₂ (depth), H₂O/CO₂ (hydrothermal vs magmatic water). Deployed on crater rims (Etna, Kilauea, Popocatépetl) or from aircraft. Resolution: detect individual gas puffs from Strombolian explosions at 0.01-second sampling. Limitation: requires line-of-sight to bright IR source; impractical in cloud cover.',
          examples: 'Popocatépetl (Mexico): FTIR monitoring HCl/SO₂ showed shallow magma intrusion preceding dome-building phases; SO₂ flux correlates with lava dome extrusion rate · Kilauea 2008 summit lava lake: FTIR measured SO₂/HCl ratio changes correlated with lava lake level fluctuations at hourly timescale · Etna 2001: FTIR detected CO/CO₂ ratio increase indicating reducing magmatic conditions during the flank eruption — evidence of deep basaltic recharge',
        },
        {
          name: 'TROPOMI and Global Satellite SO₂',
          icon: Satellite,
          color: BRAND.amethyst,
          desc: 'TROPOMI (Sentinel-5P): 2,600 km (1616 mi) swath, 3.5×5.5 km (3.4 mi) resolution, daily global coverage. Measures SO₂ in Dobson Units at sensitivity ~1–5 kt per pixel. Superseded OMI (13×24 km (15 mi)) for eruption monitoring. TOMS (1978–2005), OMI (2004–present), TROPOMI (2017–present): the progressive archive. Key capability: detects SO₂ at volcanoes not otherwise monitored, providing global baseline of ~500 persistently degassing volcanoes tracked simultaneously. Provides total SO₂ burden for mass-balance and climate impact estimation. Limitation: misses small eruptions in cloudy tropical settings; requires plume to be above boundary layer for satellite detection.',
          examples: 'Pinatubo 1991: TOMS tracked 20 Mt SO₂ cloud globally — first confirmation of stratospheric injection extent · Sarychev 2009 (Kuril Islands): OMI detected 1.2 Mt SO₂ at 15 km (9.3 mi) in remote Pacific with no ground monitoring · Hunga Tonga 2022: TROPOMI measured 0.4 Mt SO₂ within 2 hrs; unprecedented injection to 57 km (35 mi) altitude detected within 6 hrs by multiple satellites · Cumbre Vieja La Palma 2021: TROPOMI tracked SO₂ plume daily for 85 days of eruption — 1.5 Mt total SO₂ emitted',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From magma to atmosphere: the volcanic gas monitoring chain',
      body: 'This flow diagram traces how volcanic gases migrate from degassing magma through the volcanic system to the atmosphere, and how different monitoring techniques intercept and measure these gases at different points along the pathway — from fumarolic vents to global satellite retrievals.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'The pathway of volcanic gases from deep magma degassing through conduit transport and surface emission to atmospheric dispersal, with monitoring instruments positioned at each interception point',
        nodes: [
          {
            id: 'deep-degassing',
            label: 'Deep Magma Degassing',
            description: 'CO₂ exsolves from ascending magma at 500–1,000 MPa (20–40 km (25 mi) depth) as it exceeds the CO₂ solubility limit in silicate melt. This deep exsolution creates a CO₂-rich gas phase that rises through the magma column faster than the melt itself (buoyancy-driven gas segregation). The deep CO₂ signal reaches monitoring instruments at the surface days to weeks before the magma itself arrives — making CO₂ the earliest gas-based eruption precursor. A rising CO₂/SO₂ ratio measured at the surface signals this deep magma ascent.',
            color: BRAND.ruby,
          },
          {
            id: 'conduit-transport',
            label: 'Conduit and Hydrothermal Interaction',
            description: 'As the magma-derived gas mixture ascends through the upper conduit and hydrothermal system, its composition is modified. SO₂ is highly soluble in water and is efficiently "scrubbed" by hydrothermal fluids at temperatures <350°C (662°F) — converting SO₂ to H₂SO₄ and SO₄²⁻ in solution, and SO₂ to H₂S in reducing conditions. Volcanoes with extensive hydrothermal systems (Soufrière-type, many arc stratovolcanoes) can mask magmatic SO₂ signals during recharge phases. When magmatic gas flux overwhelms the hydrothermal buffer, SO₂ suddenly breaks through — a key monitoring indicator.',
            color: BRAND.accentHot,
          },
          {
            id: 'fumarole-emission',
            label: 'Fumarole and Plume Emission',
            description: 'Volcanic gases emerge at fumaroles (T = 100–900°C (1652°F)), from lava lake surfaces, from lava flow degassing, or from open conduits. The emitted gas mixture reflects the combination of deep magmatic input and shallow hydrothermal processing. MultiGAS instruments deployed at fumaroles or on the crater rim measure in-situ SO₂, CO₂, H₂S, and H₂O simultaneously, providing molar ratios (CO₂/SO₂, H₂S/SO₂) that constrain degassing depth and system state. FTIR also intercepts the emission here — measuring multiple species simultaneously with high time resolution.',
            color: BRAND.gold,
          },
          {
            id: 'plume-column',
            label: 'Volcanic Plume Column',
            description: 'The volcanic gas and particulate plume rises to altitudes of 0.1–5 km (3.1 mi) for passive degassing and up to 35 km (22 mi) for Plinian eruptions. As it rises and mixes with the atmosphere, SO₂ is diluted and begins the slow oxidation to H₂SO₄ aerosol (timescale: hours to days in troposphere, weeks to months in stratosphere). DOAS instruments — both scanning (fixed networks on crater rim) and traversing (vehicle or drone driven beneath the plume) — measure SO₂ column amounts by UV absorption, providing SO₂ flux when integrated with plume speed.',
            color: BRAND.accent,
          },
          {
            id: 'satellite-retrieval',
            label: 'Satellite SO₂ Retrieval',
            description: 'TROPOMI (Sentinel-5P), OMI (Aura), and GOES-R/ABI instruments detect SO₂ column amounts in UV and infrared wavelengths from orbit. TROPOMI provides daily global coverage at 3.5×5.5 km (3.4 mi) resolution with sensitivity to SO₂ burdens >~1–5 kt — sufficient to detect eruptions as small as VEI 2. Satellite data provide: (1) total SO₂ burden for climate impact assessment; (2) plume height via shadow height methods or stereophotogrammetry; (3) global monitoring of ~500 persistently degassing volcanoes simultaneously, providing systematic baseline data impossible with ground networks alone.',
            color: BRAND.amethyst,
          },
          {
            id: 'integrated-alert',
            label: 'Integrated Monitoring and Alert',
            description: 'Volcano observatories integrate gas data streams with seismicity, ground deformation (InSAR, GPS), and visual observations. At Soufrière Hills MVO (Montserrat Volcano Observatory), SO₂ flux surges > 1,500 t/day trigger heightened alert protocols and review of the exclusion zone boundaries. At Etna (INGV), SO₂ paroxysm precursors detected by the FLAME network trigger aviation warnings within minutes. MultiGAS CO₂/SO₂ ratios feed into probabilistic eruption hazard models. The co-monitoring approach — gases + seismics + deformation — reduces false alarm rates and improves eruption forecast lead times.',
            color: BRAND.jade,
          },
        ],
        edges: [
          { from: 'deep-degassing', to: 'conduit-transport', label: 'CO₂-rich gas phase ascends through conduit faster than magma' },
          { from: 'conduit-transport', to: 'fumarole-emission', label: 'partially scrubbed gas mixture emerges at fumaroles; SO₂ breakthrough when hydrothermal buffer overwhelmed' },
          { from: 'fumarole-emission', to: 'plume-column', label: 'emitted gases form rising plume; MultiGAS and FTIR measure here' },
          { from: 'plume-column', to: 'satellite-retrieval', label: 'plume disperses atmospherically; DOAS traverses and satellite instruments intercept SO₂' },
          { from: 'deep-degassing', to: 'integrated-alert', label: 'CO₂/SO₂ ratio from MultiGAS flags deep magma ascent weeks before eruption' },
          { from: 'satellite-retrieval', to: 'integrated-alert', label: 'TROPOMI global SO₂ maps feed VAACs and observatory alert systems within hours' },
          { from: 'fumarole-emission', to: 'integrated-alert', label: 'DOAS SO₂ flux time series provides eruption precursor and co-eruptive intensity signal' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'MultiGAS monitoring at a restless stratovolcano shows that CO₂/SO₂ molar ratios increased from a background of ~2 to values consistently >10 over a 2-week period, while SO₂ flux (measured by DOAS traverse) remained low at <300 t/day. Seismicity showed no unusual activity. What is the most volcanologically significant interpretation of this observation, and what additional monitoring data would best test this interpretation?',
          a: [
            'The high CO₂/SO₂ with low SO₂ flux indicates that the volcano is in a quiescent phase — CO₂/SO₂ is naturally higher when a volcano is not erupting because SO₂ production requires active shallow magma degassing; the observation is reassuring and suggests no unusual magmatic activity',
            'The elevated CO₂/SO₂ with low SO₂ flux indicates hydrothermal scrubbing of SO₂ from magmatic gases rising through the hydrothermal system; the high CO₂/SO₂ reflects the fact that CO₂ is less soluble in hydrothermal water than SO₂, so CO₂ passes through preferentially; this pattern can indicate that fresh magma is arriving at depth, with its SO₂ being absorbed by the hydrothermal system — a potentially dangerous situation where the apparent low SO₂ flux masks elevated magmatic activity; ground deformation and seismic tomography for new high-velocity magma bodies would best test whether deep intrusion is occurring',
            'The elevated CO₂/SO₂ simply reflects changes in atmospheric CO₂ background levels due to seasonal vegetation changes near the monitoring site; MultiGAS CO₂ measurements are unreliable when biological CO₂ sources are active and the reading has no volcanic significance',
            'The data indicate that SO₂ is converting rapidly to H₂SO₄ aerosol in the plume before reaching the MultiGAS sensor, artificially lowering measured SO₂ and raising the apparent CO₂/SO₂ ratio; correcting for in-plume aerosol conversion would restore the true CO₂/SO₂ to background values of ~2',
          ],
          correct: 1,
          explain: `Elevated CO₂/SO₂ ratios with simultaneously low SO₂ flux is one of the most important — and most easily misinterpreted — patterns in volcanic gas monitoring. It indicates hydrothermal scrubbing: SO₂ from ascending magmatic gases is being absorbed in the volcano\'s hydrothermal system (converted to SO₄²⁻ or H₂S), while CO₂ — which is far less soluble in water — passes through and reaches surface sensors. The critical implication is that reduced SO₂ flux does not necessarily mean reduced magmatic activity; it may mean that the hydrothermal system is acting as a chemical buffer, masking the signal. This exact pattern preceded the deadly 2019 eruption at Whakaari/White Island (New Zealand), where SO₂ flux had dropped to <100 t/day before the eruption while hydrothermal activity was intense. Ground deformation from GPS/InSAR (detecting volume changes from fluid injection into the hydrothermal system) and seismic tomography (imaging new high-velocity mafic intrusions) would be the best independent tests for deep magma arrival. Option A reverses the interpretation — low SO₂ is not inherently reassuring when CO₂/SO₂ is anomalously high. Option C is incorrect: biological CO₂ sources cause elevated CO₂ backgrounds that are constant, not the fluctuating elevated ratios seen in volcanic settings; MultiGAS instruments are calibrated with zero-gas and span checks that account for background. Option D is also incorrect: in-plume SO₂ to H₂SO₄ conversion takes hours to days in the atmosphere — the time for SO₂ to travel from the fumarole to a MultiGAS sensor a few hundred metres away is seconds to minutes, insufficient for significant in-plume conversion.`,
        },
        {
          q: 'At Soufrière Hills Montserrat, SO₂ flux surges from <500 t/day to >2,000 t/day have been documented as precursors to dome collapse events, with lead times of 12–48 hours. What is the physical mechanism linking SO₂ flux surges to impending dome collapse?',
          a: [
            'The SO₂ flux surge reflects increased volcanic gas production as the dome cools — cooling lavas release more SO₂ from crystallising minerals as the dome temperature drops below the SO₂ solubility threshold, so SO₂ flux is highest just before and during collapse when the dome is coldest',
            'SO₂ flux surges before dome collapse because the growing dome traps and pressurises magmatic gas in the conduit below; as the dome approaches its gravitational stability limit, increased overburden pressure forces SO₂-rich gas from the shallow magma column upward through permeable pathways in the dome carapace at higher flux, providing a measurable precursor; dome collapse then occurs when pressure exceeds the mechanical strength of the dome structure',
            'The SO₂ flux surge is caused by sea water infiltrating the conduit through faults activated by the growing dome load — seawater reacts with SO₂-bearing magmatic gas to form H₂SO₄, which then decomposes at the hot conduit walls to release SO₂ at the surface; the SO₂ surge therefore indicates seawater ingress, not magmatic pressurisation',
            'The dome collapse triggers the SO₂ flux surge rather than the reverse — the act of collapse decompresses the underlying magma, causing rapid SO₂ exsolution from the freshly decompressed melt; the apparent precursor signal is a monitoring artefact caused by measurement lag between collapse initiation and SO₂ flux detection',
          ],
          correct: 1,
          explain: `Dome collapse at Soufrière Hills and similar lava dome volcanoes results from the accumulation of conduit overpressure — the dome\'s mechanical strength resisting the pressure of ascending, degassing magma until the dome fails structurally. The pressurisation of the conduit-dome system that precedes failure drives increased gas flux: the elevated pressure gradient from the over-pressurised conduit forces more magmatic gas through permeable pathways in the dome and its surrounding talus, increasing the SO₂ flux detectable by COSPEC and DOAS. The lead time of 12–48 hours reflects the time required for this pressurisation to reach a critical mechanical threshold for dome failure. This mechanism was directly documented at Soufrière Hills by correlating conduit overpressure estimated from GPS-measured ground deformation with SO₂ flux time series and dome collapse timing. Option A reverses the thermal argument: crystallising lavas do release latent heat and the SO₂ solubility in the residual melt decreases during crystallisation, but this is a long-term process unrelated to the rapid precursor surges; cooling lavas actually crystallise SO₂ out of solution slowly over weeks, not in 12–48 hour surges. Option C invents a mechanism with no observational basis — seawater ingress would produce phreatomagmatic activity and H₂S or acidic steam emissions, not clean SO₂ flux surges. Option D is incorrect: while decompression during collapse does cause rapid SO₂ exsolution, the precursor surges at Soufrière Hills were documented at 12–48 hours before collapse — they clearly precede collapse rather than following it. The monitoring record at MVO unambiguously shows SO₂ flux rising before, not after, dome collapse events.`,
        },
        {
          q: 'TROPOMI SO₂ data shows a volcano in a remote region has emitted 50 kt of SO₂ over 3 days at a column height estimated from cloud top temperature at ~8 km (5.0 mi). No ground-based monitoring exists at this volcano. What can be inferred about the eruption, and what is the key limitation of using only TROPOMI data for hazard assessment?',
          a: [
            'The 50 kt SO₂ burden and 8 km (5.0 mi) column height indicate a VEI 3–4 eruption with significant Plinian activity; the key limitation is that TROPOMI cannot detect lava flows or ashfall, so the full hazard suite cannot be assessed from satellite data alone',
            'The 50 kt SO₂ over 3 days suggests an average SO₂ emission rate of ~16 kt/day (~190 t/day), which is consistent with sustained but moderate volcanic activity; the 8 km (5.0 mi) column height suggests eruption in the upper troposphere but below the stratosphere; the key limitation is that TROPOMI detects SO₂ column amounts but not cloud concentration profile — without knowing the vertical distribution of the SO₂ or the eruption column height with better precision, MER estimation is uncertain; additionally TROPOMI misses emissions in cloudy conditions (common in tropical volcanic regions), and cannot distinguish magmatic SO₂ from hydrothermal SO₂ without gas ratio data',
            'The 50 kt SO₂ burden indicates this is a minor eruption with no significant hazard — major eruptions like Pinatubo 1991 emitted 20,000 kt SO₂, so 50 kt represents only 0.25% of a major event; TROPOMI\'s limitation is its coarse 3.5 km (2.2 mi) resolution, which cannot image the vent structure needed for lava flow hazard mapping',
            'The eruption definitely has no impact on aviation safety since the 8 km (5.0 mi) cloud top is below the cruise altitude of commercial aircraft; TROPOMI\'s key limitation is that it cannot detect ash particle concentrations, so the volcanic ash cloud may extend above 8 km (5.0 mi) without being detected',
          ],
          correct: 1,
          explain: `50 kt SO₂ over 3 days is ~16 kt/day average, or roughly 185–190 t/day — a significant but not extreme SO₂ emission rate. For context: Etna\'s typical background is 2,000–10,000 t/day during active phases; Pinatubo 1991 emitted ~20,000 kt total. An 8 km (5.0 mi) column top (upper troposphere, typical of VEI 2–3 events) with this SO₂ rate suggests sustained moderate activity, potentially a VEI 2–3 eruption with persistent lava fountaining or small Plinian episodes. The limitations described in B are the most complete and operationally relevant: TROPOMI measures integrated SO₂ column amounts in Dobson Units, which reflect total SO₂ mass but not vertical distribution — a plume at 3 km (1.9 mi) altitude and one at 8 km (5.0 mi) with the same column amount have very different aviation impacts. Cloud top temperature provides a rough altitude estimate but has uncertainty of ±1–2 km (1.2 mi) in tropical settings. Persistent cloud cover in tropical regions can prevent TROPOMI detection entirely (the satellite measures reflected UV, which requires cloud-free conditions or plume above clouds). The lack of ground monitoring means gas ratios (CO₂/SO₂, H₂S/SO₂) are unknown, preventing inference about degassing depth or system state. Option C trivialises 50 kt by comparing to Pinatubo\'s total — but 50 kt/3 days is a high sustained emission rate that would warrant aviation warnings and health advisories downwind. Option D is incorrect: the 8 km (5.0 mi) column top is within commercial cruising altitudes (FL200–FL330 = 6–10 km (6.2 mi)), not below them, so aviation safety is absolutely a concern; TROPOMI can detect the SO₂ plume (though not ash concentration, correctly noted) but the response framing of "no aviation impact" is wrong.`,
        },
        {
          q: 'A seismically quiet volcano shows persistently elevated H₂S/SO₂ ratios (H₂S > SO₂) in fumarolic emissions, but CO₂ flux is modestly elevated above background. What does this gas ratio combination indicate about the state of the volcanic system?',
          a: [
            'High H₂S/SO₂ indicates active shallow magma degassing at very low pressure — H₂S is the dominant sulfur species in low-pressure volcanic gases, so this pattern reflects fresh magma very close to the surface; the modest CO₂ elevation confirms shallow but active degassing and indicates the volcano is in a pre-eruptive state',
            'High H₂S/SO₂ with modestly elevated CO₂ indicates a predominantly hydrothermal system in which magmatic SO₂ is being reduced to H₂S in the hydrothermal reservoir by reaction with reduced species (HS⁻, S²⁻, Fe²⁺); the volcanic system is buffered by hydrothermal fluids, suggesting that magmatic input is modest and being processed through a mature hydrothermal system rather than reaching the surface directly; this is a common background state at many arc volcanoes between eruptive episodes',
            'High H₂S/SO₂ is a diagnostic indicator of phreatomagmatic activity — the H₂S is produced by the reaction of magmatic SO₂ with seawater infiltrating through fractures; this pattern specifically indicates that an explosive phreatomagmatic eruption is imminent within 24–48 hours and requires immediate evacuation of all monitoring personnel',
            'The H₂S/SO₂ ratio is controlled solely by atmospheric oxidation rates — H₂S is oxidised to SO₂ in sunlit conditions, so high H₂S/SO₂ simply means the fumarolic gas was sampled on a cloudy day; the modest CO₂ elevation is within natural variability and neither measurement has volcanic significance',
          ],
          correct: 1,
          explain: 'H₂S/SO₂ ratios in volcanic fumarolic emissions are fundamentally controlled by the redox state and temperature of the hydrothermal-magmatic fluid system. In reducing, lower-temperature hydrothermal environments (T < ~300°C (572°F)), sulfur exists predominantly as the reduced species H₂S — produced by the reaction of magmatic SO₂ with hydrothermal water and dissolved reductants. In direct magmatic gas emissions from high-temperature fumaroles (T > ~400°C (752°F)) or open conduits, SO₂ dominates because the high-temperature, oxidising conditions of the magmatic gas favour SO₂ over H₂S. Therefore, persistently high H₂S/SO₂ (H₂S dominant) indicates that emitted gases have passed through and been processed by a mature hydrothermal system rather than being directly degassed from a high-temperature magma. The modest CO₂ elevation is consistent with background degassing from a deep magmatic source, but the predominance of H₂S over SO₂ suggests the system is not in a state of high-flux direct magmatic degassing. This is the classic "quiescent" or "background" hydrothermal state between eruptive episodes, as seen at many arc stratovolcanoes. Option A reverses the geochemistry: H₂S dominates in reducing hydrothermal conditions, not at low-pressure near-surface magmatic degassing; the latter produces high SO₂ as SO₂ stability increases at low pressures. Option C associates H₂S/SO₂ specifically with phreatomagmatic eruption imminence — while phreatomagmatic activity can produce H₂S (if seawater reacts with magmatic SO₂), H₂S/SO₂ > 1 alone is not a specific or reliable precursor to phreatomagmatic eruption within 24–48 hours; it is a chronic condition at many dormant hydrothermal volcanoes. Option D is incorrect: atmospheric oxidation does remove H₂S over hours, but the timescale for in-plume oxidation is much longer than the transit time from fumarole to monitoring instrument; and the statement that CO₂ elevation has no significance is contradicted by decades of monitoring data showing CO₂ flux as a sensitive eruption precursor.',
        },
        {
          q: 'The 2019 eruption at Whakaari/White Island (New Zealand) killed 22 people who were on a tourist visit to the active crater when an unexpected phreatic explosion occurred. Gas monitoring prior to the eruption had shown low SO₂ flux (<100 t/day) and elevated CO₂/SO₂. What does this monitoring signature indicate about the type of eruption, and why did it provide insufficient warning for the rapid hazard response required?',
          a: [
            'Low SO₂ flux before the eruption indicates that the volcano was in a quiescent state and the eruption was not related to magmatic activity — it was a phreatic (steam-driven) explosion caused by an independent hydrothermal system triggered by an external event such as heavy rainfall or a tectonic earthquake, not preceded by any detectable precursor',
            'Low SO₂ flux with elevated CO₂/SO₂ indicates SO₂ hydrothermal scrubbing — SO₂ from ascending magmatic or deep hydrothermal gases was being absorbed in the hydrothermal system, masking the true level of gas flux; the phreatic or phreatomagmatic eruption was driven by rapid pressurisation and vaporisation of the hydrothermal reservoir, a process that can occur without clear seismic or large-amplitude SO₂ precursors, providing only minutes of warning; this highlights the hazard-assessment challenge of hydrothermal systems, where conventional gas monitoring can mask the true state of pressurisation',
            'The low SO₂ flux conclusively proves that no magmatic contribution was involved in the Whakaari eruption — it was purely a tectonic event unrelated to the volcanic plumbing system; gas monitoring was therefore the wrong tool for this type of hazard, and the eruption could only have been predicted by tectonic seismic monitoring',
            'Elevated CO₂/SO₂ with low SO₂ flux would have provided a 24–48 hour warning of the eruption if the monitoring data had been properly interpreted by the observatory; the real failure was not a gap in monitoring capability but a communication failure between the observatory and the tourist operator, which is a management rather than a scientific problem',
          ],
          correct: 1,
          explain: 'The Whakaari/White Island 2019 eruption is a tragic case study in the limitations of volcanic gas monitoring for phreatic hazards. The monitoring signature — low SO₂ flux with elevated CO₂/SO₂ — is consistent with SO₂ hydrothermal scrubbing: SO₂ from ascending gases was being absorbed in the extensive hydrothermal system, while CO₂ (less soluble) passed through and was detected. This pattern does not directly indicate that the hydrothermal system is approaching rupture — it indicates that the hydrothermal system is active and processing magmatic gas input, but does not provide a quantitative measure of hydrothermal reservoir pressure or how close it is to the mechanical failure threshold. Phreatic and phreatomagmatic eruptions driven by sudden hydrothermal pressurisation can occur within seconds to minutes once triggered — they are extremely difficult to warn against at the hour-to-day timescale needed for tourist activity management. Post-event analysis showed that SO₂ flux had been declining (consistent with increased scrubbing / increased hydrothermal activity) and that the eruption was likely triggered by a sudden pressure excursion in the hydrothermal system — possibly related to permeability changes from seismic activity or rainfall. Option A is incorrect: while phreatic eruptions are hydrothermally driven, this does not mean they are unrelated to the volcanic system — the Whakaari eruption was energised by magmatic heat and gases from an active magmatic source. Option C is incorrect: "purely tectonic" contradicts the elevated CO₂/SO₂ indicating active volcanic gas flux, and tectonic seismic monitoring also does not reliably predict phreatic eruptions. Option D overstates what the monitoring data could have provided: the 24–48 hour warning claim is not supported by the data — the CO₂/SO₂ elevation had been sustained for weeks without eruption, so it was not a sharp precursor; it indicated a hydrothermal state, not an imminent explosion time.',
        },
      ],
    },
  ],
}

export default volcanicGasMonitoring
