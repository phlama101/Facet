import { Wind, BarChart2, AlertTriangle, Globe, Layers } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const eruptionColumnPhysics: Lesson = {
  id: 'volc-201-1-4-1',
  title: 'Eruption Column Physics',
  track: 'vol',
  trackName: 'Igneous Petrology',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: 'From the vent to the stratosphere: how buoyant volcanic plumes rise, collapse, and spread — and why the 1991 Pinatubo eruption injected 20 Mt of SO₂ to 35 km (22 mi) altitude while Eyjafjallajökull in 2010 grounded 100,000 flights. Master the physics of eruption columns, pyroclastic density currents, and modern ash-dispersion modelling.',
  sources: [
    { org: 'USGS', title: 'Eruption Column and Pyroclastic Density Current Hazards — Volcano Hazards Program', url: 'https://volcanoes.usgs.gov/vhp/pyroclastic_density_currents.html' },
    { org: 'Smithsonian GVP', title: 'Global Volcanism Program — Pinatubo 1991 Eruption Record', url: 'https://volcano.si.edu/volcano.cfm?vn=273083' },
    { org: 'INGV', title: 'Volcanic Ash Advisory — Operational VAAC Framework and NAME Model Applications', url: 'https://www.ingv.it/en/research/research-infrastructure/monitoring-and-surveillance' },
    { org: 'Journal of Volcanology and Geothermal Research', title: 'Morton, Taylor & Turner (1956) Turbulent Gravitational Convection from Maintained and Instantaneous Sources', url: 'https://www.sciencedirect.com/journal/journal-of-volcanology-and-geothermal-research' },
    { org: 'GNS Science', title: 'HYSPLIT Ash Transport Modelling for Aviation Safety — New Zealand Case Studies', url: 'https://www.gns.cri.nz/research/natural-hazards/volcanic-hazards/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The column that shook the planet',
      body: `On 15 June 1991, Mount Pinatubo in the Philippines unleashed a Plinian eruption that injected approximately **20 megatonnes of SO₂** into the stratosphere at altitudes reaching **35 km (22 mi)**. The resulting aerosol veil — droplets of sulfuric acid distributed globally — reduced incoming solar radiation by ~2.5 W/m² and cooled the planet's mean surface temperature by ~0.5°C (1°F) for nearly two years. This single eruption was not unusual in geological terms, but it demonstrated why understanding the physics of eruption columns — how they rise, how high they reach, when they collapse — is essential not just for academic volcanology but for aviation safety, climate modelling, and emergency management worldwide.

The behaviour of an eruption column is governed by the interplay between two forces: the **momentum of the gas-pyroclast jet** emerging from the vent (the high-velocity region near the base) and **buoyancy** acquired as the column mixes with and heats surrounding air. The classic theoretical framework, developed by Morton, Taylor, and Turner in 1956 from studies of fluid plumes, describes a **buoyant plume** that entrains ambient air continuously, becoming progressively diluted and cooler until it reaches the **neutral buoyancy level (NBL)** — the altitude where the column density matches the surrounding atmosphere. At the NBL, the column spreads laterally, forming the characteristic umbrella cloud seen above Plinian eruptions. The height of the NBL is directly related to the **mass eruption rate (MER)** by a well-established power-law relationship: column height H ∝ MER^(1/4), spanning MERs from ~10⁵ kg/s (small Vulcanian events, H ~10 km (6.2 mi)) to ~10⁹ kg/s (super-eruptions, H ~45 km (28 mi)).

The critical instability in this system — the transition from a **sustained convective column** to catastrophic **column collapse** — occurs when the mass eruption rate becomes too high for the column to entrain sufficient air to maintain buoyancy. If the erupted material is too dense relative to the surrounding atmosphere at any altitude, the column overturns and generates **pyroclastic density currents (PDCs)**: fast-moving (100–300 km/h (186 mph)), hot (300–700°C (1292°F)) avalanches of gas and fragmented rock that hug the topography and are typically the deadliest volcanic hazard. Pinatubo generated both: a sustained Plinian column through much of the climactic eruption, interspersed with partial column collapses that sent PDCs racing down all flanks of the volcano simultaneously.

Modern volcanic crisis management relies on **ash dispersion models** — notably the UK Met Office NAME model and NOAA's HYSPLIT — that ingest eruption source parameters (column height, MER, grain-size distribution) and meteorological data to produce probabilistic ash-cloud forecasts for aviation. The global network of **Volcanic Ash Advisory Centres (VAACs)** — nine centres covering specific airspace regions — issues VAACs to aviation authorities within minutes of ash-producing eruptions. The 2010 Eyjafjallajökull eruption in Iceland demonstrated the costly consequences of ash-cloud uncertainty: conservative no-fly rules based on initial models grounded over **100,000 flights** and caused ~€1.3 billion in airline losses before revised concentration thresholds allowed partial resumption of service.`,
      keyTerms: [
        {
          term: 'Mass eruption rate (MER)',
          def: 'The rate at which magma and pyroclastic material is discharged from a volcanic vent, expressed in kg/s. MER is the single most important parameter controlling eruption column behaviour: it determines column height (H ∝ MER^0.25), the probability of column collapse versus sustained convection, and the total atmospheric loading of ash and gases. Estimates range from ~10⁵ kg/s for small Vulcanian eruptions to ~10⁹ kg/s for the largest Plinian events. MER can be estimated in real time from radar measurements of column height.',
        },
        {
          term: 'Neutral buoyancy level (NBL)',
          def: 'The altitude at which an eruption column has the same bulk density as the surrounding atmosphere, causing lateral spreading rather than continued vertical rise. Above the momentum-driven jet region, the column rises as a thermally buoyant plume; when sufficient cooling and dilution by entrained air reduce its excess buoyancy, it spreads at the NBL to form the umbrella cloud. For the 1991 Pinatubo eruption the NBL was approximately 25–35 km (22 mi) — within the lower stratosphere.',
        },
        {
          term: 'Pyroclastic density current (PDC)',
          def: 'A fast-moving, gravity-driven flow of hot gas, ash, and fragmented volcanic rock produced by the collapse of an eruption column or the gravitational failure of a lava dome or flow front. PDCs travel at 100–300 km/h (186 mph), at temperatures of 300–700°C (1292°F), and are lethal at distances of tens of kilometres. They represent the primary cause of volcanic fatalities in most major eruptions. PDCs include both dilute ash-rich surges and dense, coarse-grained pyroclastic flows.',
        },
        {
          term: 'VAAC (Volcanic Ash Advisory Centre)',
          def: 'One of nine internationally designated centres — operated by national meteorological services — responsible for monitoring and issuing advisories on volcanic ash clouds that may affect aviation. VAACs use satellite imagery, pilot reports, and atmospheric dispersion models (NAME, HYSPLIT) to issue Volcanic Ash Advisories (VAAs) and graphical Volcanic Ash Graphic products every 6 hours, covering a specific global airspace region. The London and Washington VAACs cover the North Atlantic, where high-latitude eruptions from Iceland or the Aleutians most commonly threaten aviation.',
        },
        {
          term: 'VEI (Volcanic Explosivity Index)',
          def: 'A logarithmic scale (0–8) quantifying the relative explosivity of volcanic eruptions based on the total volume of tephra ejected and the column height. Each unit increase represents roughly a 10-fold increase in erupted volume. VEI 4 eruptions (e.g., Eyjafjallajökull 2010) eject ~0.1 km³ (0.024 cu mi); VEI 6 (e.g., Pinatubo 1991) eject ~10 km³ (2.4 cu mi); VEI 8 super-eruptions (Toba, ~74 ka) eject >1,000 km³ (240 cu mi). The scale does not directly capture mass eruption rate, duration, or atmospheric impact from SO₂ injection.',
        },
        {
          term: 'Morton-Taylor-Turner plume model',
          def: 'The classical theoretical description of a turbulent buoyant plume rising from a maintained source, developed by B.R. Morton, G.I. Taylor, and J.S. Turner in 1956. The model describes entrainment of ambient fluid into the plume at a rate proportional to the local upward velocity, yielding predictable relationships between source flux, plume height, and radius. Applied to volcanic eruption columns, it predicts column height as a function of MER and atmospheric stratification, underpinning empirical calibrations used to estimate MER from observed column heights.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Column dynamics: jets, plumes, and collapse',
      body: `An eruption column passes through distinct dynamical regimes between vent and stratosphere. In the **gas-thrust region** immediately above the vent (typically the lowest 1–5 km (3.1 mi)), the column is driven upward by the momentum of the erupting gas-pyroclast mixture — a supersonic jet that decelerates rapidly as it expands and mixes with ambient air. The mixture at this stage is denser than air, but the high ejection velocity temporarily overcomes gravity. Above this zone, if sufficient air has been entrained and heated, the column becomes **convectively buoyant**: the mixture is now less dense than the surrounding atmosphere and continues to rise under thermal buoyancy, entraining more air as it does. This is the bulk of the tall Plinian column observable during large eruptions.

The **stability threshold** — whether a column sustains to the stratosphere or collapses — depends on whether buoyancy can be maintained throughout the column. At very high MERs, the gas-thrust jet is so powerful that it cannot entrain air fast enough to dilute and heat the mixture sufficiently; the column may initially rise but then become negatively buoyant at some altitude and collapse catastrophically back to the surface. Numerical models (e.g., Sparks 1986, Woods 1988) show that the critical MER for column collapse at typical conditions is roughly 10⁸–10⁹ kg/s, though topography, vent geometry, and magma volatile content all modulate this threshold.

**Partial collapse** — where the outermost margins of the column detach and collapse while a central sustained column continues — generates PDCs simultaneously with maintained eruption columns, as observed at Pinatubo 1991. **Total collapse** produces massive PDC-dominated eruptions: the deposit record of the Campanian Ignimbrite (~40 ka, ~280 km³ (67 cu mi)) or the Fish Canyon Tuff (~28 Ma, ~5,000 km³ (1200 cu mi)) reflects total column collapse over sustained periods.`,
      cards: [
        {
          name: 'Gas-Thrust to Convective Transition',
          icon: Wind,
          color: BRAND.accent,
          desc: 'Immediately above the vent, the column is a supersonic or near-sonic gas-particle jet — dense, momentum-driven, decelerating rapidly as it entrains and heats ambient air. When the heated mixture becomes less dense than surrounding air, the column transitions to convective buoyancy. This "thermal boundary" sits typically 1–5 km (3.1 mi) above the vent. Above it, the column rises as a classic Morton-Taylor-Turner buoyant plume, entraining air at ~10–20% of vertical velocity. Column height H scales with MER^0.25: doubling column height requires a 16-fold increase in MER.',
          examples: 'Pinatubo 1991 peak MER ~2×10⁹ kg/s → column height ~35 km (22 mi) · Eyjafjallajökull 2010 MER ~3×10⁵ to 10⁶ kg/s → column 5–9 km (5.6 mi) · Sinabung 2014 partial collapse MER threshold exceeded intermittently → PDC generation with simultaneous column',
        },
        {
          name: 'Column Collapse and Pyroclastic Density Currents',
          icon: AlertTriangle,
          color: BRAND.ruby,
          desc: 'When MER exceeds the entrainment capacity of the column, the mixture fails to achieve buoyancy and collapses back to the surface, generating PDCs. PDCs travel 100–300 km/h (186 mph) at 300–700°C (1292°F), overtop ridges up to 1,000 m (3281 ft), and are lethal to tens of km. Collapse may be total (all material collapses, producing ignimbrites) or partial (margin collapses while core sustains). The transition from column-forming to collapse-dominated behaviour is abrupt and can occur mid-eruption as MER fluctuates.',
          examples: 'Pinatubo June 15 1991: simultaneous PDCs on all flanks + sustained column → 800 deaths despite pre-evacuation · Merapi 2010 dome collapse: PDCs to 15 km (9.3 mi) at 300 km/h (186 mph) · Campi Flegrei 39 ka Campanian Ignimbrite: ~280 km³ (67 cu mi) total collapse PDC reaching 100+ km (62+ mi) from vent',
        },
        {
          name: 'VEI Scale and Mass Eruption Rates',
          icon: BarChart2,
          color: BRAND.gold,
          desc: `The Volcanic Explosivity Index (VEI, 0–8) is logarithmic: VEI 4 = ~0.1 km³ (0.024 cu mi) tephra; VEI 5 = ~1 km³ (0.24 cu mi); VEI 6 = ~10 km³ (2.4 cu mi). Column height correlates: VEI 4 ≈ 10–25 km (16 mi), VEI 6 ≈ 25–35 km (22 mi). MER estimated from H: log(MER) ≈ 4×log(H) − 4.3 (Wilson & Walker 1987). VEI does not capture duration or SO₂ injection, so climate impact can be under-predicted by VEI alone — Laki 1783 (VEI 4 effusive) killed ~20% of Iceland\'s population via SO₂ haze with negligible tephra.`,
          examples: 'Eyjafjallajökull 2010: VEI 4, column 5–9 km (5.6 mi), MER ~3×10⁵–10⁶ kg/s, 100,000 flights cancelled · Pinatubo 1991: VEI 6, column 35 km (22 mi), MER ~2×10⁹ kg/s, 20 Mt SO₂, global cooling ~0.5°C (1°F) · Tambora 1815: VEI 7, ~160 km³ (38 cu mi) tephra, "Year Without a Summer" 1816',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Ash dispersal modelling and aviation hazard',
      body: `Once a volcanic eruption column is established, its ash and gas content are advected downwind by stratospheric and tropospheric winds — potentially affecting aviation over hemispheric scales within hours to days. The 2010 Eyjafjallajökull eruption injected ash to 5–9 km (5.6 mi) altitude, directly within busy North Atlantic flight corridors. The UK Met Office **NAME (Numerical Atmospheric Modelling Environment)** model, and NOAA's **HYSPLIT (Hybrid Single Particle Lagrangian Integrated Trajectory)** model, track millions of virtual particles released from the eruption source through three-dimensional atmospheric wind fields. The models require **eruption source parameters (ESPs)**: column height, MER, total grain-size distribution, and eruption duration. Uncertainty in ESPs — particularly early in an eruption when real-time observations are limited — propagates directly into forecast uncertainty.

**Satellite SO₂ monitoring** provides a complementary observational constraint. The TOMS (Total Ozone Mapping Spectrometer), OMI (Ozone Monitoring Instrument, aboard Aura), and TROPOMI (Copernicus Sentinel-5P) instruments detect SO₂ columns in UV wavelengths globally, providing near-real-time mapping of the volcanic SO₂ cloud. The 20 Mt SO₂ cloud from Pinatubo was tracked by TOMS across the globe within two weeks. For aviation, SO₂ itself at volcanic concentrations is damaging to aircraft engines and passenger health, but the dispersion of ash particles — particularly fine glass shards with sizes 1–100 µm — that can melt within jet turbines (at ~1,200°C (2192°F), above the solidification temperature of many volcanic glasses) is the primary threat.

The current international aviation framework uses **concentration-based thresholds** (introduced after 2010): zones with ash concentrations >4×10⁻³ g/m³ are closed to all traffic; zones with 2–4×10⁻³ g/m³ require airline risk assessment; zones <2×10⁻³ g/m³ are generally open with enhanced monitoring. **VONA (Volcano Observatory Notices for Aviation)** are issued directly from volcano observatories to aviation authorities and VAACs, describing observed or inferred ash cloud altitude, intensity, and movement — the first alert in the aviation warning chain.`,
      cards: [
        {
          name: 'NAME and HYSPLIT Dispersion Models',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Lagrangian particle-tracking models ingest meteorological reanalysis or forecast wind fields and track millions of virtual ash particles released from the eruption source. Key eruption source parameters: column height (proxy for MER), total grain-size distribution (controls sedimentation rate), and eruption duration. Outputs: probabilistic ash-concentration maps at flight levels, updated every 6 hours. Ensemble runs with varied ESPs produce uncertainty envelopes. Validated against satellite retrievals and aircraft in-situ measurements during past eruptions.',
          examples: 'Eyjafjallajökull 2010: NAME ensemble showed ash over central Europe at >2×10⁻³ g/m³ for 6 days → widespread airspace closure · Raikoke 2019: HYSPLIT correctly predicted trans-Pacific ash dispersal to 12 km (7.5 mi) altitude, tracked by TROPOMI · Hunga Tonga 2022: stratospheric SO₂ plume reached 58 km (36 mi) altitude — far exceeding model inputs calibrated for tropospheric eruptions',
        },
        {
          name: 'Satellite SO₂ and Ash Monitoring',
          icon: Layers,
          color: BRAND.amethyst,
          desc: 'UV/IR satellite instruments detect SO₂ columns (DU = Dobson units) and ash optical depth globally. TOMS (1978–2005), OMI (2004–present), TROPOMI (2018–present, 3.5×5.5 km (3.4 mi) resolution): map SO₂ columns hours after eruption. MODIS and VIIRS: ash optical depth in IR. SEVIRI on Meteosat: 15-min repeat cycle for rapid ash evolution. SO₂ burden provides top-down constraint on MER when column height estimates are uncertain. TROPOMI detects eruptions as small as VEI 2 globally — improving precursor SO₂ monitoring at restless volcanoes.',
          examples: 'Pinatubo 1991: TOMS mapped 20 Mt SO₂ globally; aerosol optical depth 0.1–0.15 persisted 18 months · Sarychev 2009: OMI detected 1.2 Mt SO₂ at 15 km (9.3 mi) altitude from Kuril Islands eruption · Hunga Tonga 2022: TROPOMI captured 0.4 Mt SO₂ within first hour; umbrella cloud reached 57 km (35 mi) altitude at 900 km/h (559 mph) lateral spread',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From vent to stratosphere: the eruption column lifecycle',
      body: 'This flow diagram traces the physical evolution of a Plinian eruption column from vent ejection through the critical stability decision — sustained column or collapse — to eventual dispersion as an umbrella cloud and ash plume tracked by aviation authorities worldwide.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Physical stages of a Plinian eruption column from vent to stratospheric dispersal, illustrating the key transitions between jet momentum, convective buoyancy, and column collapse that determine volcanic hazard',
        nodes: [
          {
            id: 'vent',
            label: 'Vent Ejection',
            description: 'Magma fragmentation in the conduit produces a gas-particle mixture ejected at 100–600 m/s. At the vent, the mixture is denser than air (bulk density ~1–10 kg/m³ vs. air ~1 kg/m³). The initial kinetic energy — proportional to mass eruption rate and ejection velocity — determines how far the jet penetrates into the atmosphere before gravity decelerates it. Vent diameter ranges from tens of metres (Vulcanian) to several kilometres (caldera-forming events).',
            color: BRAND.ruby,
          },
          {
            id: 'gas-thrust',
            label: 'Gas-Thrust Region',
            description: 'From 0 to ~1–5 km (3.1 mi) above the vent, the column behaves as a momentum-driven jet. Despite being denser than air, high ejection velocity carries the mixture upward. Turbulent mixing begins: ambient air is entrained at the jet margins, heated by the hot pyroclasts, and incorporated into the rising column. The mixture becomes progressively less dense as it expands and dilutes. If MER is very high (>10⁸ kg/s), this region may not generate sufficient buoyancy before the jet loses momentum — collapse risk is highest here.',
            color: BRAND.accentHot,
          },
          {
            id: 'convective',
            label: 'Convective Plume Region',
            description: 'When entrained and heated air reduces the column bulk density below that of the surrounding atmosphere, the column becomes thermally buoyant and rises as a classic Morton-Taylor-Turner plume. It continues to entrain ambient air, expanding in radius (proportional to height) and decelerating. Column height scales with MER^0.25 — the fundamental relationship used to estimate MER from radar or satellite-observed column tops in real time. For Pinatubo 1991, peak MER ~2×10⁹ kg/s yielded a 35 km (22 mi) column.',
            color: BRAND.accent,
          },
          {
            id: 'stability-decision',
            label: 'Stability Threshold: Column or Collapse?',
            description: 'The critical juncture: if the column has entrained sufficient air and maintained buoyancy throughout ascent, it rises to the neutral buoyancy level and forms an umbrella cloud. If at any altitude the column bulk density exceeds the surrounding atmosphere — because MER is too high for the available entrainment to dilute and heat the mixture — the column becomes gravitationally unstable and collapses. Partial collapse generates PDCs on volcano flanks while the column core may sustain. Total collapse generates massive ignimbrites. This transition is often abrupt and can occur within minutes as MER fluctuates.',
            color: BRAND.gold,
          },
          {
            id: 'umbrella-cloud',
            label: 'Umbrella Cloud and Stratospheric Injection',
            description: 'At the neutral buoyancy level, the column material spreads radially outward as the umbrella cloud — the characteristic "anvil" shape visible in satellite imagery of large eruptions. Fine ash and volcanic gases (SO₂, HCl, HF) are injected into the stratosphere at 20–35+ km (22+ mi) altitude. Stratospheric winds then advect the plume hemisphericaly or globally within days to weeks. SO₂ oxidises to H₂SO₄ aerosol droplets, forming the global aerosol layer that reduces insolation. Coarser ash settles within hours to days close to the volcano.',
            color: BRAND.amethyst,
          },
          {
            id: 'dispersion-monitoring',
            label: 'Ash Dispersion and Aviation Warning',
            description: 'VAAC meteorologists ingest eruption source parameters — column height (from weather radar, satellite, or observer reports), MER estimates, and grain-size assumptions — into NAME or HYSPLIT models within minutes to hours of eruption onset. Ash advisory graphics are issued every 6 hours for defined flight levels (FL050–FL450). VONAs from the erupting volcano observatory provide the first rapid alert. Satellite SO₂ and ash optical depth retrievals constrain model accuracy. Concentration-based thresholds (>4×10⁻³ g/m³ = closed airspace) guide operational decisions.',
            color: BRAND.jade,
          },
        ],
        edges: [
          { from: 'vent', to: 'gas-thrust', label: 'kinetic energy of ejection drives initial upward momentum' },
          { from: 'gas-thrust', to: 'convective', label: 'sufficient air entrainment and heating achieves thermal buoyancy' },
          { from: 'gas-thrust', to: 'stability-decision', label: 'MER too high → buoyancy never achieved → collapse risk' },
          { from: 'convective', to: 'stability-decision', label: 'buoyancy maintained throughout ascent → column sustains or collapses at NBL' },
          { from: 'stability-decision', to: 'umbrella-cloud', label: 'buoyancy sustained → neutral buoyancy level reached → umbrella spreads laterally' },
          { from: 'stability-decision', to: 'dispersion-monitoring', label: 'column collapse → PDC generation on flanks; ash still monitored remotely' },
          { from: 'umbrella-cloud', to: 'dispersion-monitoring', label: 'ash and SO₂ injected to stratosphere; VAACs and HYSPLIT track global dispersal' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Column height H scales with mass eruption rate (MER) as H ∝ MER^0.25. If a Vulcanian eruption produces a 10 km (6.2 mi) column, what MER increase would be needed to produce a 20 km (12 mi) column?',
          a: [
            'A twofold increase in MER — doubling the mass eruption rate doubles the column height',
            'A fourfold increase in MER — the exponent 0.25 means column height is proportional to the fourth root of MER',
            'A sixteenfold increase in MER — because H ∝ MER^0.25, doubling H requires MER to increase by 2^4 = 16',
            'A tenfold increase in MER — the VEI scale is logarithmic, so each doubling of column height corresponds to one VEI step and a 10× increase in erupted volume',
          ],
          correct: 2,
          explain: 'If H ∝ MER^0.25, then to double H from 10 km (6.2 mi) to 20 km (12 mi): (H₂/H₁) = (MER₂/MER₁)^0.25 → 2 = (MER₂/MER₁)^0.25 → MER₂/MER₁ = 2^(1/0.25) = 2^4 = 16. This strong sensitivity — a 16-fold MER increase for a mere factor-of-two column height increase — explains why column height is a robust but compressive proxy for MER. Doubling the height requires enormously more eruption power, reflecting the thermodynamic work needed to lift and heat progressively larger air masses as the plume rises through increasingly stable atmospheric layers. Option A (linear) ignores the power-law; option B (fourfold) confuses the exponent; option D incorrectly invokes the VEI logarithmic scale, which describes cumulative volume, not the height-MER scaling relationship.',
        },
        {
          q: 'The 2010 Eyjafjallajökull eruption (VEI 4, column 5–9 km (5.6 mi)) caused more aviation disruption than the 2009 Sarychev eruption (VEI 4, column 15 km (9.3 mi)). What factor best explains why a lower-column eruption caused greater aviation impact?',
          a: [
            'Eyjafjallajökull injected more SO₂ into the stratosphere than Sarychev, producing a longer-lasting aerosol cloud that persisted over European airspace for months',
            'Eyjafjallajökull\'s column height of 5–9 km (5.6 mi) placed ash directly within busy North Atlantic and European flight levels (FL050–FL330), and its location in Iceland sat upwind of the most densely trafficked airspace in the world; the Sarychev eruption, though taller, occurred over the remote North Pacific with far fewer flight paths directly downwind',
            'Eyjafjallajökull produced finer ash particles than Sarychev, which were more hazardous to jet engines and required lower concentration thresholds to trigger airspace closure; grain size is the primary determinant of aviation hazard, not column height or location',
            'Eyjafjallajökull erupted during Northern Hemisphere winter when upper-atmosphere winds were faster, transporting ash to European airports within hours; Sarychev erupted in June when summer wind patterns directed ash away from populated areas',
          ],
          correct: 1,
          explain: `Aviation hazard from volcanic ash depends not just on eruption intensity but on the geometric and logistical relationship between the ash cloud and flight corridors. Eyjafjallajökull\'s column reached 5–9 km (5.6 mi) — directly within the altitude range of commercial aircraft operating the world\'s busiest oceanic routes across the North Atlantic. Iceland lies directly upwind of mainland Europe under the prevailing westerly jet stream. Sarychev erupted in the Kuril Islands with a taller column (15 km (9.3 mi), reaching the lower stratosphere) but over the remote North Pacific where far fewer flight paths cross. The taller column actually placed some of its ash above most commercial aircraft altitudes. Additionally, the 2010 disruption was amplified by conservative regulatory responses based on pre-2010 "zero tolerance" ash policies; the concentration-based thresholds introduced afterward would have permitted more operations. Options A, C, and D each identify real factors but none is the primary explanation: Eyjafjallajökull was not a major SO₂ eruption; grain-size differences between the two eruptions were not the documented primary cause of the closure decisions; and the "winter winds" framing is incorrect — Eyjafjallajökull erupted in April–May 2010.`,
        },
        {
          q: 'A monitoring network detects that an eruption column at a stratovolcano transitions from a sustained Plinian column to generating pyroclastic density currents (PDCs) on all flanks within minutes, while the eruption continues. What physical mechanism most likely caused this transition?',
          a: [
            'The vent radius suddenly decreased, concentrating the same mass eruption rate into a narrower jet that exceeded the terminal velocity of the gas-pyroclast mixture, causing the column to overshoot the neutral buoyancy level and fall back',
            'A sudden increase in mass eruption rate exceeded the column\'s capacity to entrain and heat sufficient ambient air to maintain thermal buoyancy, causing the bulk density of the column to become greater than the surrounding atmosphere at mid-column altitudes — triggering gravitational collapse while eruption continued at the vent',
            'The column reached the tropopause where the temperature inversion prevents further buoyant ascent; the sudden halt in vertical rise forced all erupted material sideways and then downward as PDCs, a predictable consequence of any eruption column reaching the tropopause',
            'A heavy rain event associated with the eruption injected cold water into the hot column, rapidly quenching the buoyancy by cooling the entrained air back to ambient temperature and causing density-driven collapse',
          ],
          correct: 1,
          explain: `Column collapse is fundamentally a buoyancy failure: when MER increases sufficiently, the volume of erupted material per unit time outpaces the rate at which turbulent entrainment can incorporate and heat ambient air to reduce the column\'s bulk density below atmospheric density. If at any altitude the column mixture is denser than the surrounding atmosphere — because it is too concentrated with heavy pyroclasts relative to hot air — it decelerates, stops, and falls back under gravity. The eruption does not need to stop: collapse can be partial (margins fall while core sustains) or total. At Pinatubo on June 15, 1991, this is precisely what occurred: a sudden surge in MER during the climactic phase caused simultaneous PDC generation on all flanks while an eruption column continued above the vent. Option A is incorrect — narrowing the vent would increase exit velocity but not necessarily change the MER or the buoyancy outcome in the way described. Option C is a misconception: eruption columns regularly penetrate the tropopause and the temperature inversion does not mechanically block column ascent — it merely reduces atmospheric lapse rate, requiring more thermal excess to continue rising. The Pinatubo column reached 35 km (22 mi), well into the stratosphere above the tropopause. Option D describes phreatomagmatic interaction (magma-water explosions), which is a real process that can alter eruption style but is not the standard mechanism for simultaneous PDC generation across all flanks during a dry Plinian eruption.`,
        },
        {
          q: `The Pinatubo 1991 eruption injected ~20 Mt of SO₂ at 35 km (22 mi) altitude, producing a global aerosol layer that cooled Earth\'s surface by ~0.5°C (1°F) for two years. Why did SO₂ injection at stratospheric altitudes produce a longer-lasting climate effect than an equivalent SO₂ injection into the troposphere would have?`,
          a: [
            'Stratospheric SO₂ reacts more efficiently with water vapour to form H₂SO₄ aerosol because the stratosphere is colder and the reaction kinetics are faster at lower temperatures; tropospheric SO₂ forms aerosol too slowly to affect climate significantly',
            'The stratosphere lacks the precipitation and rapid vertical mixing of the troposphere; once SO₂ is oxidised to H₂SO₄ aerosol in the stratosphere (over weeks to months), the resulting droplets have residence times of 1–2 years because they cannot be washed out by rain; tropospheric aerosols are removed by wet deposition within days to weeks, giving them insufficient time to produce a significant global radiative forcing',
            'SO₂ in the stratosphere directly absorbs incoming solar UV radiation, blocking it before it reaches the surface; tropospheric SO₂ is transparent to the UV wavelengths that drive climate, so it has no direct radiative effect regardless of concentration',
            'Stratospheric winds are much faster than tropospheric winds, so SO₂ injected at 35 km (22 mi) is distributed globally within hours, covering the entire planetary surface; tropospheric SO₂ remains regional because surface winds are too slow to achieve global distribution before the SO₂ is removed',
          ],
          correct: 1,
          explain: 'The key distinction is atmospheric residence time, which is controlled by removal mechanisms. In the troposphere, SO₂ and its oxidation product H₂SO₄ are removed by wet deposition (incorporation into cloud droplets and precipitation) and dry deposition within days to weeks — far too short for global distribution and significant radiative forcing. In the stratosphere above the tropopause, there is no precipitation (the stratosphere is extremely dry), no turbulent wet-removal processes, and much slower vertical exchange with the troposphere (stratospheric "overturning" timescale ~1–2 years). SO₂ injected into the stratosphere is oxidised slowly by OH radicals over weeks to months, forming submicron H₂SO₄–H₂O aerosol droplets. These droplets scatter incoming shortwave solar radiation (reducing insolation at the surface) and absorb outgoing longwave radiation, producing a net radiative forcing. Because they are not rained out, they persist for 1–2 years and disperse globally via stratospheric circulation. The Pinatubo aerosol optical depth of ~0.1–0.15 was sufficient to reduce global mean surface temperature by ~0.5°C (1°F). Option A reverses the temperature-kinetics argument — SO₂ oxidation by OH actually proceeds faster at higher temperatures, so the cold stratosphere slows the conversion, but the residence time argument dominates. Option C is incorrect: the radiative effect of volcanic aerosols is primarily through scattering shortwave radiation by sub-micron droplets (Mie scattering), not direct absorption of UV by SO₂ gas. Option D is partially correct about stratospheric transport speed but overstates it — global distribution takes weeks, not hours — and does not address the fundamental residence time difference that governs climate impact.',
        },
        {
          q: 'A VAAC meteorologist receives a VONA from a volcano observatory reporting a new eruption with an estimated column height of 12 km (7.5 mi). She runs the NAME dispersion model but has no real-time aircraft or radiosonde data to verify the ash cloud location. What additional observational data source would most improve the reliability of the ash-cloud forecast within the first 2–3 hours of the eruption?',
          a: [
            'Seismograph records from the volcano, since the amplitude of seismic tremor is directly proportional to the volume of ash in the eruption column and can provide precise real-time MER estimates without atmospheric observations',
            'Ground-based webcam imagery of the eruption column, since human visual estimates of column height from cameras calibrated to known topographic features provide the most accurate eruption source parameter for dispersion modelling',
            'Geostationary satellite imagery in thermal infrared and SO₂-sensitive UV channels from instruments such as SEVIRI (Meteosat) or GOES-18 ABI, which provide 10–15 minute repeat cycle imagery of the evolving ash cloud — enabling direct tracking of cloud top height, lateral extent, and SO₂ loading that can be assimilated into model initial conditions and used to validate or correct the NAME/HYSPLIT forecast within the first few hours',
            'Weather balloon (radiosonde) data from the nearest upper-air station to characterise the atmospheric wind profile above the eruption, since wind field errors in the meteorological analysis are the dominant source of forecast uncertainty in dispersion models',
          ],
          correct: 2,
          explain: 'For rapid volcanic ash advisory purposes, the most impactful observational data within the first 2–3 hours are those that directly characterise the ash and SO₂ cloud itself — its location, altitude, extent, and movement — rather than inferring it from proxies. Geostationary satellite instruments with high repeat rates (SEVIRI/Meteosat every 15 minutes; GOES-18 ABI every 5–10 minutes; Himawari AHI every 10 minutes) are uniquely positioned to provide near-real-time tracking of the ash cloud top height (using the infrared brightness temperature method), lateral extent and drift direction, and SO₂ column density in UV bands. This information can be directly compared against model output to identify systematic wind biases, and the observed cloud movement can constrain actual atmospheric transport even before the model fully converges. Option A is incorrect: seismic tremor amplitude correlates broadly with eruption intensity but is not a direct or precise proxy for MER or ash volume — it reflects acoustic energy release but is affected by conduit geometry, magma properties, and seismic path effects; the uncertainty is too large for operational model input. Option B (webcams) provides useful qualitative information and is used operationally, but is limited to clear-sky conditions, short range, and subjective height estimation — insufficient for high-confidence aviation safety decisions. Option D is a genuinely valuable data source — wind profile errors are indeed a major forecast uncertainty — but in the first 2–3 hours, meteorological analyses are already assimilating available radiosonde and satellite wind data; the biggest additional value comes from observing the actual ash cloud position rather than refining the wind field at a nearby point.',
        },
      ],
    },
  ],
}

export default eruptionColumnPhysics
