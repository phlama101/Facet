import { Flame, Thermometer, Map, Activity, TrendingDown } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const lavaFlowModeling: Lesson = {
  id: 'volc-201-1-4-2',
  title: 'Lava Flow Modeling',
  track: 'vol',
  trackName: 'Igneous Petrology',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: `How rheology, topography, and effusion rate combine to determine where lava flows go and how fast — from Kilauea\'s 2018 lower East Rift Zone flows that advanced 13 km in 12 hours, to probabilistic flow mapping with MOLASSES and PyFLOWGO that now guides land-use planning in volcanic hazard zones.`,
  sources: [
    { org: 'USGS', title: 'Hawaiian Volcano Observatory — 2018 Kīlauea Lower East Rift Zone Eruption Reports', url: 'https://www.usgs.gov/observatories/hvo/news/leilani-estates-lower-east-rift-zone-eruption-2018' },
    { org: 'Smithsonian GVP', title: 'Global Volcanism Program — Mauna Loa 2022 Eruption Bulletin', url: 'https://volcano.si.edu/volcano.cfm?vn=332020' },
    { org: 'Journal of Volcanology and Geothermal Research', title: 'Harris & Rowland — FLOWGO: A Kinematic Thermo-Rheological Model for Lava Flowing in a Channel', url: 'https://doi.org/10.1016/S0377-0273(01)00330-1' },
    { org: 'USGS', title: 'MOLASSES — MOdular LAva Simulation Software Environment for Probabilistic Flow Mapping', url: 'https://volcanoes.usgs.gov/vhp/lava_flows.html' },
    { org: 'GNS Science', title: 'InSAR and Thermal Remote Sensing Applications for Lava Flow Monitoring, New Zealand', url: 'https://www.gns.cri.nz/research/natural-hazards/volcanic-hazards/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The river of fire that outruns a car',
      body: `On the night of 3–4 May 2018, fissure 17 opened in the Leilani Estates subdivision on Kilauea's lower East Rift Zone and began erupting basaltic lava at effusion rates that would reach 100–200 m³/s at the peak of the crisis. Within 12 hours, a lava flow had advanced **13 kilometres** from its vent — overtaking roads, destroying infrastructure, and entering the ocean at Kapoho Bay in a catastrophic bench collapse. The speed was possible because the lava exploited pre-existing topographic lows and developed an insulating **lava tube system**: a self-formed conduit of crusted lava within which molten basalt can travel tens of kilometres with minimal heat loss, arriving at the flow front still near eruption temperature and maintaining high mobility. The 2018 Kilauea eruption destroyed 716 homes and consumed 35 km² of land — the most destructive Hawaiian eruption in recorded history — and it unfolded within hours to days, faster than most emergency planning scenarios had anticipated.

Understanding lava flow behaviour requires integrating **rheology** (how the lava resists deformation), **thermodynamics** (how the flow cools and stiffens as it moves), **topography** (which channels, valleys, and obstacles the flow encounters), and **effusion rate** (how much lava is being supplied per unit time). Lava flows span an enormous range of behaviours: a basaltic lava at 1,200°C with viscosity ~100 Pa·s flows readily over gentle slopes at walking pace, while a rhyolitic lava at 900°C with viscosity ~10¹²⁻¹⁴ Pa·s barely flows at all and instead oozes as a lava dome. Between these extremes lie the andesitic and dacitic lavas of many stratovolcanoes, which produce short, stubby, hazardous flows at higher slopes. The key message from both theory and field observation is that **cooling controls everything**: a lava flow that forms a stable insulating tube or crust can travel far beyond what its effusion rate would suggest, while a flow that remains fully exposed to atmospheric cooling stiffens rapidly and stalls.

Lava flow forecasting has advanced dramatically over the past two decades from simple empirical relationships to **physics-based numerical models**: FLOWGO (Flow of Lava Over Ground) simulates cooling and rheology along a central channel flowline; PyFLOWGO implements this in Python with updated physics; MOLASSES (MOdular LAva Simulation Software Environment) runs probabilistic flow path ensembles using digital elevation models. The 2022 Mauna Loa eruption provided a critical real-world test of these models: USGS Hawaiian Volcano Observatory (HVO) volcanologists used DEM-based flow routing and FLOWGO simulations to forecast that flows from the northeast rift zone would reach populated areas in Hilo within days if effusion rates were maintained — a forecast that ultimately proved correct in its directionality even as the eruption waned before flows reached the city.

**InSAR (Interferometric Synthetic Aperture Radar)** and **airborne thermal infrared** have become the workhorses of real-time lava flow monitoring. InSAR from Sentinel-1 and ALOS-2 can detect surface deformation and new flow emplacement within a 6–12 day repeat cycle; airborne thermal IR cameras mounted on USGS helicopters can map the active flow margin, measure surface temperatures, and estimate effusion rates from flow velocity and cross-section measurements. Together, these data streams feed lava flow models in near-real time, improving forecasts as eruptions evolve.`,
      keyTerms: [
        {
          term: 'Lava tube system',
          def: 'A self-formed underground conduit of crusted lava within which molten basalt flows with dramatically reduced heat loss compared to an open channel or sheet flow. The outer crust insulates the interior, allowing lava to travel tens of kilometres at near-eruption temperatures (1,100–1,200°C) and maintain high mobility. Tubes form when the surface of a pahoehoe flow crust over while the interior remains molten, or when an open channel develops continuous roof arches. The Kilauea 2018 LERZ flow reached 13 km in 12 hours because it exploited a tube system.',
        },
        {
          term: 'Bingham plastic rheology',
          def: 'A flow model in which a material does not deform until an applied stress exceeds a critical yield strength (τ₀), after which it deforms as a viscous fluid. Lava behaves as a Bingham plastic when it contains significant crystal content (>~30 vol%): the interlocking crystal network resists flow until stress exceeds the yield strength. Relevant formula: τ = τ₀ + η(dv/dz), where η is the viscosity. Yield strength increases rapidly as lava cools and crystallinity increases — this is why the flow front is thicker and slower than the interior channel.',
        },
        {
          term: 'FLOWGO / PyFLOWGO',
          def: 'A one-dimensional kinematic thermo-rheological model that simulates the cooling, crystallisation, and rheological evolution of lava flowing in a channel from vent to flow front. FLOWGO integrates heat loss terms (radiation, convection, conduction to ground) along a channel flowline defined by slope, channel width, and effusion rate. PyFLOWGO is the modern Python implementation with updated heat balance equations. The model predicts where a channelised flow will stall (when viscosity becomes too high to sustain flow) given input effusion rate, initial temperature, and channel geometry.',
        },
        {
          term: 'Effusion rate',
          def: 'The volumetric flux of lava erupted at the vent per unit time, expressed in m³/s or km³/year. Effusion rate is the primary control on lava flow advance rate and ultimate flow length: higher effusion rates supply more heat and material, allowing flows to travel farther before stalling. The relationship is nonlinear — flow length scales approximately as effusion rate^0.5 for simple tube-fed flows. Kilauea 2018 fissure 8 peak effusion rate was ~100–200 m³/s; Mauna Loa 2022 reached ~200–400 m³/s in the first days.',
        },
        {
          term: 'Probabilistic flow mapping',
          def: 'A hazard assessment approach that runs hundreds to thousands of lava flow simulations with varied input parameters (flow start location, effusion rate, DEM uncertainty) to produce a probability map showing the likelihood of inundation at each grid cell across the landscape. MOLASSES, PyFLOWGO ensembles, and the older LAHARZ-type approaches all implement this philosophy. The result is a map where warm colours indicate high probability of inundation (>50%) and cool colours indicate low probability (<5%), informing land-use planning and emergency routing.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Rheology and the temperature-viscosity relationship',
      body: `Lava rheology — how lava resists flowing — is the foundational variable in all lava flow modelling. Two idealised end-members bracket the observed range. A **Newtonian fluid** has viscosity independent of applied shear rate: it flows proportionally to stress. Pure melts at high temperature (>1,200°C, low crystal content) approximate Newtonian behaviour. A **Bingham plastic** has a yield strength that must be exceeded before flow begins, after which it behaves as a viscous fluid. Lavas with >~30 vol% crystals exhibit Bingham behaviour: the crystal skeleton resists deformation until stress is sufficient to shear the crystal network. Real lavas transition between these regimes as they cool and crystallise.

The **temperature-viscosity relationship** in silicate melts is described by the Vogel-Fulcher-Tammann (VFT) equation: log₁₀(η) = A + B/(T − C), where A, B, C are constants dependent on melt composition (primarily SiO₂ content). This relationship is highly non-linear: viscosity increases by orders of magnitude over relatively small temperature decreases. **Basaltic melt** at 1,200°C has η ~100–1,000 Pa·s (similar to honey), while at 1,100°C it rises to ~10³–10⁴ Pa·s as crystallisation accelerates. **Rhyolitic melt** at 900°C has η ~10¹²–10¹⁴ Pa·s — a range of 10 orders of magnitude relative to basalt. This difference is dominated by the polymerisation of the silicate network: high SiO₂ melts form extensive chain and ring structures of SiO₄ tetrahedra linked by bridging oxygens, creating a highly viscous, elastic-like structure that does not flow easily.

Crystal content amplifies viscosity non-linearly: the **Einstein-Roscoe relationship** and its successors predict that viscosity increases approximately as (1 − φ/φ_max)^(-2.5), where φ is the crystal volume fraction and φ_max (~0.6) is the maximum packing fraction above which flow essentially ceases and the lava behaves as a solid. The implication for flow modelling is that as a lava flow cools even 50–100°C from its eruption temperature, crystallinity can jump from 5% to 40%, increasing bulk viscosity by 3–4 orders of magnitude — essentially stalling the flow regardless of slope.`,
      cards: [
        {
          name: 'Basalt vs. Rhyolite Viscosity',
          icon: Thermometer,
          color: BRAND.coral,
          desc: 'Melt viscosity is controlled by SiO₂ content (polymerisation) and temperature. Basalt at 1,200°C: η ~100–1,000 Pa·s → flows at 1–10 km/h on shallow slopes. Andesite at 1,050°C: η ~10⁵–10⁶ Pa·s → slow, blocky flows, metres per hour. Rhyolite at 900°C: η ~10¹²–10¹⁴ Pa·s → essentially no flow; forms lava domes and obsidian. Temperature drop of 100°C can increase viscosity by 2–4 orders of magnitude. Crystal content amplifies: Einstein-Roscoe correction → above 40 vol% crystals, bulk viscosity increases by 10³× beyond melt alone.',
          examples: '2018 Kilauea LERZ fissure 8 basalt: 1,150–1,200°C, η ~10²–10³ Pa·s, advance 13 km in 12 hrs · 1980 Mount St. Helens dacite dome lava: ~900°C, η ~10¹⁰ Pa·s, growth <1 m/day · 1992 Etna basalt flow: 1,050–1,100°C, η ~10³–10⁴ Pa·s, advance ~0.5–2 km/day on 15° slope',
        },
        {
          name: 'Lava Tube Systems and Thermal Insulation',
          icon: Flame,
          color: BRAND.ruby,
          desc: 'Open channel heat loss: ~30–50 kW/m² by radiation from exposed surface. Lava tube heat loss: ~1–3 kW/m² by conduction through insulating crust (2–5 m thick). Insulation factor: 10–30×. Result: tube-fed flows maintain eruption-temperature lava tens of kilometres from the vent. Tubes form when pahoehoe surface crust arches over flowing interior, or when open channel develops continuous roof. Once established, tube-fed systems can transport lava for weeks to months at near-constant advance rates.',
          examples: '2018 Kilauea LERZ: tube system enabled lava advance to ocean entry point 13 km from fissure 8 in ~12 hrs · Mauna Loa 1950: tube-fed basalt reached the ocean 24 km from the vent in ~3 hours at peak · Etna 2001: tubes maintained 1,150°C lava 8 km from vent for 3 weeks, allowing multiple flow pulses',
        },
        {
          name: 'Topographic Controls: Channelled vs. Sheet Flow',
          icon: Map,
          color: BRAND.gold,
          desc: 'Pre-existing topography (valleys, ridges, scarps) strongly controls flow paths. Channelised flows concentrate in valleys → faster advance, greater depth, higher hazard along channel axis but lower lateral spread. Sheet flows on flat terrain spread laterally → lower advance rate but wider hazard footprint. Barrier construction (earth berms) has been used at Etna and Mauna Loa to divert channelised flows away from infrastructure. DEM resolution (1 m LiDAR vs 10 m SRTM) critically affects MOLASSES/PyFLOWGO simulation accuracy in complex terrain.',
          examples: 'Mauna Loa 2022: NE rift flows preferentially followed 1859 flow lava channel topography initially, then switched paths as channel filled — modellers had to update DEMs in near-real time · Etna 2001 diversion berm: 2 km berm constructed in 11 days successfully diverted channelised flow · Kilauea 2018: high-resolution lidar DEM (1 m) enabled accurate MOLASSES probabilistic maps that correctly predicted ocean entry at Kapoho',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Physics-based flow models and probabilistic mapping',
      body: `FLOWGO (Harris & Rowland 2001) was the first widely adopted physics-based kinematic model for channelised lava flows. It integrates a heat balance along a one-dimensional channel flowline, computing at each downslope step the lava temperature, crystallinity, viscosity, yield strength, and resulting flow velocity. Heat losses include radiation (Stefan-Boltzmann from the exposed surface), convection (wind-driven), and conduction into the substrate. Input parameters: eruption temperature, initial effusion rate, channel dimensions (width, depth), DEM slope profile, and lava composition. The model predicts at what downslope distance the flow velocity drops to zero — defining the predicted flow front stall position. PyFLOWGO (Chevrel et al. 2018) updated this with improved heat balance equations and an open-source Python implementation allowing Monte Carlo ensemble runs.

**MOLASSES** (MOdular LAva Simulation Software Environment) takes a different approach: it uses a probabilistic cellular automaton or shallow-water equation solver on a DEM grid, distributing lava across all downslope neighbours according to elevation differences. It does not explicitly model rheology or cooling but is computationally efficient enough to run thousands of simulations in minutes, making it ideal for probabilistic flow path mapping. By varying vent location, effusion rate, and total erupted volume across an ensemble, MOLASSES produces probability maps that capture uncertainty in flow paths due to topographic variability and model parameter uncertainty. USGS HVO uses MOLASSES routinely for operational flow hazard mapping in Hawaii.

**Remote sensing integration** is now transforming the operational practice of lava flow monitoring. **InSAR** from Sentinel-1 (6–12 day repeat) detects new flow emplacement as areas of coherence loss; **airborne thermal IR** from HVO helicopters provides direct surface temperature and flow margin mapping every 1–2 days during active eruptions; **MODIS and VIIRS** provide daily flow extent estimates from space. Effusion rate can be estimated from the satellite-derived flow area growth rate (via the erupted volume–flow area relationship) or from airborne measurements of flow velocity and cross-section. These real-time estimates feed model updates, allowing forecasters to issue revised flow path projections as eruption conditions evolve. During the 2022 Mauna Loa eruption, HVO published updated flow front position maps every 6 hours using this integrated approach.`,
      cards: [
        {
          name: 'FLOWGO / PyFLOWGO Channel Model',
          icon: Activity,
          color: BRAND.accent,
          desc: 'One-dimensional heat-balance model along channel flowline. Integrates: radiation heat loss (σT⁴ from exposed lava surface), convective loss (wind-driven), conductive loss to substrate, and heat generated by crystallisation (latent heat). At each step, updates: temperature → crystallinity (from phase diagram) → viscosity (VFT + Einstein-Roscoe) → yield strength → velocity. Stall criterion: velocity = 0. Outputs: predicted flow length and advance rate as function of effusion rate and initial conditions. Monte Carlo ensembles explore parameter uncertainty.',
          examples: 'Harris & Rowland (2001) calibrated on 1984 Mauna Loa and 1991 Etna flows → reproduced final flow lengths within 15% · PyFLOWGO applied to 2018 Kilauea fissure 8: predicted stall at ~5 km for Q = 50 m³/s but tube formation extended actual reach to 13 km · Validation metric: predicted vs. observed flow velocity at mapped channel cross-sections (±20–30%)',
        },
        {
          name: 'MOLASSES Probabilistic Mapping',
          icon: TrendingDown,
          color: BRAND.amethyst,
          desc: 'Cellular automaton or shallow-water solver on DEM grid. Distributes lava across downslope cells proportional to elevation difference. Runs 1,000–10,000 simulations in minutes (unlike physics-based models that take hours per run). Varies: vent location (uncertainty zone), effusion rate, total volume. Outputs: probability-of-inundation maps. Hot colours = high probability. Integrates with 1-m LiDAR DEMs for Hawaii. Used operationally by USGS HVO for Mauna Loa and Kilauea. Limitation: no cooling physics → cannot predict when flow stalls on gentle terrain without empirical volume cap.',
          examples: '2018 Kilauea LERZ: MOLASSES ensemble correctly identified Kapoho Bay area at >80% inundation probability within 24 hrs of fissure 8 opening · 2022 Mauna Loa: MOLASSES NE rift flows showed >50% probability of reaching Daniel K. Inouye Highway within 5 days of eruption onset — flows arrived in 10 days before waning · MOLASSES vs. FLOWGO: MOLASSES faster for probabilistic maps; FLOWGO better for understanding cooling controls on individual flow behaviour',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Lava flow lifecycle: from effusion rate to flow front',
      body: 'This flow diagram traces how lava rheology, tube formation, and topographic routing combine with real-time monitoring and physics-based modelling to produce operational lava flow hazard maps during an active eruption.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'The chain of physical processes and monitoring tools that connect eruption source conditions to operational lava flow hazard assessment, from vent effusion through rheological evolution, tube formation, topographic routing, and probabilistic model-based mapping',
        nodes: [
          {
            id: 'effusion',
            label: 'Vent Effusion Rate',
            description: 'The volumetric flux of lava at the vent (m³/s) is the primary control on lava flow behaviour. Higher effusion rates supply more thermal energy and material, allowing flows to travel farther and advance faster before stalling. Effusion rate varies during eruptions — typically high at the start, declining as magma reservoir pressure drops. During Kilauea 2018 fissure 8, peak effusion reached ~100–200 m³/s; Mauna Loa 2022 reached ~200–400 m³/s. Estimated by integrating lava velocity and cross-section from airborne measurements, or from flow area growth rate using satellite imagery.',
            color: BRAND.ruby,
          },
          {
            id: 'rheology',
            label: 'Thermal and Rheological Evolution',
            description: 'As lava moves away from the vent, it cools by radiation (~30–50 kW/m² from exposed surface), convection, and conduction into the substrate. Each degree of cooling increases crystallinity (from the phase diagram) and therefore viscosity by the Einstein-Roscoe relationship. Basalt loses mobility rapidly: at 1,050°C, crystallinity can reach 40 vol%, raising bulk viscosity to ~10⁶ Pa·s and halting open-channel flow. The critical transition is whether a cooling-dominated open channel or an insulating tube system controls the thermal budget.',
            color: BRAND.coral,
          },
          {
            id: 'tube-formation',
            label: 'Lava Tube Formation',
            description: 'When the surface of a pahoehoe flow crust over while the interior remains molten — or when an open lava channel develops continuous roof arches — a tube system forms. The tube crust (2–5 m thick) reduces heat loss by a factor of 10–30 compared to an open channel, maintaining lava at near-eruption temperature tens of kilometres from the vent. Once a tube system establishes, it extends flow reach dramatically beyond what FLOWGO open-channel models predict. Tube development can occur within hours to days of eruption onset.',
            color: BRAND.accentHot,
          },
          {
            id: 'topography',
            label: 'Topographic Routing and DEM',
            description: 'Pre-existing topography — valleys, ridges, lava benches, road cuts — controls flow path geometry. Channelised flows concentrate in valleys, achieving higher advance rates but narrower hazard footprints. Sheet flows on flat terrain spread broadly. MOLASSES and PyFLOWGO require high-resolution DEMs (1-m LiDAR preferred) to route flows accurately through complex terrain. As active flows fill channels and create new topography, DEMs must be updated in near-real time using airborne lidar or structure-from-motion photogrammetry.',
            color: BRAND.gold,
          },
          {
            id: 'remote-sensing',
            label: 'Real-Time Remote Sensing',
            description: 'InSAR (Sentinel-1, 6–12 day repeat): detects new lava emplacement as coherence loss; measures surface deformation from magma withdrawal. Airborne thermal IR: maps active flow margins, surface temperatures, effusion rate from velocity × cross-section. MODIS/VIIRS: daily flow extent from space. Webcam networks: continuous visual monitoring. Together these constrain model inputs — current effusion rate, flow area, active tube locations — enabling model updates every few hours during active eruptions.',
            color: BRAND.accent,
          },
          {
            id: 'probabilistic-model',
            label: 'MOLASSES / PyFLOWGO Forecast',
            description: 'Physics-based and probabilistic models integrate effusion rate, DEM, and rheological parameters to produce flow front position forecasts and probability-of-inundation maps. MOLASSES runs thousands of ensemble members in minutes to capture path uncertainty; PyFLOWGO tracks cooling and stall position for specific scenarios. Outputs are updated every 6–12 hours as new remote sensing data revise input parameters. Maps are delivered to civil defence and emergency managers with uncertainty envelopes clearly communicated.',
            color: BRAND.jade,
          },
        ],
        edges: [
          { from: 'effusion', to: 'rheology', label: 'effusion rate determines heat supply rate and initial flow velocity' },
          { from: 'rheology', to: 'tube-formation', label: 'cooling trajectory determines whether open channel or insulating tube system develops' },
          { from: 'tube-formation', to: 'topography', label: 'tube geometry and open-channel flow interact with topographic routing' },
          { from: 'topography', to: 'probabilistic-model', label: 'DEM defines flow paths for ensemble simulation' },
          { from: 'remote-sensing', to: 'effusion', label: 'airborne thermal IR and satellite data estimate current effusion rate' },
          { from: 'remote-sensing', to: 'probabilistic-model', label: 'observed flow extent and margin position update model initial conditions' },
          { from: 'probabilistic-model', to: 'topography', label: 'model iterates as active flows create new topography' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: `A basaltic lava flow at 1,200°C has viscosity ~500 Pa·s. After advancing 5 km in an open channel and cooling to 1,050°C, its crystallinity increases from 5% to 40 vol%. Using the Einstein-Roscoe relationship, which best describes the approximate change in bulk viscosity and the flow\'s behaviour?`,
          a: [
            'Viscosity increases by a factor of ~2, from ~500 to ~1,000 Pa·s — a modest change that allows the flow to continue advancing at a slightly reduced rate on the same slope',
            'Viscosity increases by 3–4 orders of magnitude (to ~10⁶–10⁷ Pa·s) as the crystal network approaches maximum packing, effectively stalling the open-channel flow front; the flow can only continue if new lava is supplied from the vent to maintain the pressure gradient and if a tube system provides insulation against further cooling',
            'Viscosity decreases as crystallisation releases latent heat, temporarily reheating the melt fraction and lowering its viscosity; this "crystallisation reheating" effect prolongs flow advance and is the primary reason high-crystallinity basalt flows travel farther than low-crystallinity ones',
            'Viscosity increases by a factor of ~10, from 500 to 5,000 Pa·s — the Einstein-Roscoe correction is linear in crystal fraction, so a 35 percentage point increase in crystallinity corresponds to a 35-fold viscosity increase above the melt value',
          ],
          correct: 1,
          explain: 'The Einstein-Roscoe relationship gives relative viscosity ηᵣ = (1 − φ/φ_max)^(-2.5), where φ_max ≈ 0.6. At φ = 0.40: ηᵣ = (1 − 0.40/0.60)^(-2.5) = (0.333)^(-2.5) = (3.0)^(2.5) ≈ 15.6. But this is the multiplicative correction to the melt viscosity alone. The melt viscosity itself also increases enormously with cooling from 1,200°C to 1,050°C — from ~500 Pa·s to perhaps ~10⁴–10⁵ Pa·s for the melt fraction alone (VFT non-linearity). Combined: ~10⁵ Pa·s × 15.6 ≈ 10⁶ Pa·s. The bulk viscosity increase is 3–4 orders of magnitude, consistent with B. At these viscosities, an open-channel flow on typical Hawaiian slopes (5–15°) cannot maintain sufficient driving stress to exceed the Bingham yield strength and essentially stalls. Option A underestimates the non-linearity of the combined thermal + crystallisation effect. Option C reverses the sign: latent heat does partially offset cooling (FLOWGO explicitly includes this term), but it is never sufficient to reverse the net viscosity increase — the cooling effect dominates. Option D describes a linear relationship (Einstein-Roscoe is not linear; it diverges as φ approaches φ_max).',
        },
        {
          q: 'The 2018 Kilauea LERZ fissure 8 flow advanced 13 km in approximately 12 hours. FLOWGO open-channel model predictions suggested the flow should have stalled at ~5 km given the measured effusion rate of ~100 m³/s. What physical mechanism explains the discrepancy, and what monitoring signature would confirm this mechanism was operating?',
          a: [
            'The model underestimated the initial eruption temperature — if the lava was actually erupting at 1,300°C rather than the assumed 1,200°C, the additional thermal budget would allow the flow to travel 13 km; the monitoring signature would be anomalously bright thermal IR measurements at the vent',
            'The flow developed a lava tube system that insulated the interior lava from atmospheric cooling, reducing heat loss by a factor of 10–30 compared to the open-channel assumption in FLOWGO; monitoring signatures include: (1) thermal IR showing a narrow hot corridor rather than a broad cooling flow sheet, (2) active skylight openings where the tube roof has collapsed showing bright (~1,100°C) interior lava, and (3) consistent high-temperature lava arriving at the distal flow front despite being tens of km from the vent',
            'The slope of the terrain steepened significantly beyond 5 km from the vent due to the scarp topography of the lower East Rift Zone; FLOWGO\'s assumption of constant slope was wrong; the monitoring signature would be a sudden increase in flow advance rate and thinning of the flow at the scarp crest',
            'Rainfall interacted with the flow beyond 5 km, generating steam explosions that fragmented the flow crust and prevented insulating skin formation, paradoxically keeping the flow hotter by continuously exposing fresh lava; the monitoring signature would be steam plumes and phreatomagmatic ash emission beyond 5 km from the vent',
          ],
          correct: 1,
          explain: 'The systematic discrepancy between open-channel FLOWGO predictions and observed flow travel distances in tube-fed systems is a well-documented and fundamental issue in lava flow modelling. FLOWGO assumes continuous heat loss from an exposed lava surface; once a tube forms, heat loss drops by 10–30× because the tube crust conductivity is ~1–3 kW/m² compared to ~30–50 kW/m² for an exposed radiating surface. As a result, tube-fed lava arrives at the distal flow front at temperatures only slightly below the eruption temperature — maintaining mobility that an open-channel flow would have lost kilometres earlier. The monitoring signatures described in B are all field-confirmed indicators of an active tube system: thermal IR anomalies showing a narrow hot corridor, skylight thermal emissions at ~1,100°C, and high-temperature lava at distal entry points. Option A is incorrect: eruption temperatures for Kilauea 2018 fissure 8 basalt were well-constrained at ~1,140–1,170°C by thermal measurements; a 100°C underestimate is implausible and would be evident in vent thermal data. Option C is partially plausible (slope does influence flow velocity) but was not the primary documented cause; the DEM for the LERZ area is well-constrained and the model used appropriate slope data. Option D mischaracterises the phreatomagmatic interaction effect: rainfall on active lava does cause steam explosions and can disrupt crust formation locally, but does not systematically sustain flow over 13 km — rather, it tends to fragment and disrupt flows and increase hazard, not extend travel distance.',
        },
        {
          q: 'MOLASSES probabilistic flow mapping runs 1,000 ensemble simulations to produce a probability-of-inundation map. A civil defence officer asks why the 90th percentile model run (showing flow reaching a coastal town) should be communicated alongside the median run (showing flow stalling 8 km short), rather than just presenting the most likely (median) outcome. What is the correct justification?',
          a: [
            'The 90th percentile run should be presented because lava flow models always underestimate flow travel distance; the median run is systematically biased toward shorter flows and should be corrected upward by a factor of ~2 as standard practice',
            'Probabilistic communication is necessary because lava flow path uncertainty is irreducible given current monitoring capabilities; the 90th percentile represents a plausible, not just theoretical, scenario given parameter uncertainties in effusion rate, DEM accuracy, and tube formation likelihood; for life-safety decisions, emergency managers need to understand the full range of credible outcomes — a 10% probability of the town being inundated is operationally significant and should inform evacuation planning even if it is not the most likely single outcome',
            'The 90th percentile run should be the primary product because it represents the worst case, and civil defence must always plan for the worst case; median runs are irrelevant to emergency management and should not be communicated to avoid causing public complacency',
            'Presenting the 90th percentile alongside the median is required by USGS standard operating procedure, but both runs have essentially the same probability and the distinction between "median" and "90th percentile" is a modelling artefact with no physical meaning in lava flow forecasting',
          ],
          correct: 1,
          explain: 'Probabilistic hazard communication involves conveying uncertainty in a way that is both scientifically honest and operationally useful. The median model run represents the single most likely outcome given the current best estimate of input parameters, but it does not capture the full range of outcomes that could credibly occur. In lava flow modelling, key uncertainties include: effusion rate (which can change rapidly and unpredictably), the timing and extent of tube system formation (which can dramatically extend flow reach), DEM accuracy (particularly in areas with recent lava flows that have altered topography), and the possibility of flow field expansion into new vent locations. A 10% probability of the coastal town being inundated — especially when the consequence is loss of life or major property damage — is not negligible from an emergency management perspective. Risk = probability × consequence; even low probabilities of high-consequence outcomes warrant protective action. Option A is incorrect: MOLASSES and PyFLOWGO are not systematically biased toward shorter flows; calibration studies show variable bias depending on eruption scenario. A blanket 2× correction factor has no scientific basis. Option C oversimplifies: always planning for the worst case (90th or 99th percentile) would require evacuating areas that have >1% probability of flow inundation, which may include large portions of Hawaii permanently; risk-based decision-making requires communicating the full distribution, not just the extreme. Option D is incorrect: median and 90th percentile runs do have different probabilities and reflect real physical uncertainty in the ensemble — the spread is meaningful and reflects genuine model parameter uncertainty.',
        },
        {
          q: 'InSAR from Sentinel-1 is used to detect new lava emplacement during an eruption. A scientist notes coherence loss over a 15 km² area consistent with a new lava flow, but the 6-day repeat cycle means the data shows cumulative emplacement over the past 6 days. What additional monitoring technique provides the highest temporal resolution for tracking the active lava flow margin position in near-real time?',
          a: [
            'Ground-based GPS networks surrounding the volcano, since GPS can detect millimetre-scale deformation caused by lava loading of the crust in near-real time, providing indirect evidence of where the flow front is located',
            'Seismic arrays calibrated to detect the tremor generated by lava flowing over rough terrain, since the seismic amplitude at various stations triangulates the position of the active flow front with hourly resolution',
            'Airborne thermal infrared cameras mounted on helicopters flown along the flow margins, providing direct surface temperature maps with 1–2 day temporal resolution and spatial resolution of ~0.5–2 m per pixel — enabling detection of active flow margins (bright thermal anomalies >500°C) against cooled flow surfaces (<100°C) and allowing effusion rate estimation from velocity and cross-section measurements',
            'MODIS Terra and Aqua multispectral satellite imagery, which provides multiple observations per day globally and detects active lava flows through the MIROVA (Middle InfraRed Observation of Volcanic Activity) system at up to 4 daily overpasses with 250–1000 m pixel resolution',
          ],
          correct: 2,
          explain: 'For tracking active lava flow margins in near-real time with the highest spatial resolution and operational utility during a fast-moving eruption, airborne thermal IR is the gold standard. During the 2018 Kilauea LERZ and 2022 Mauna Loa eruptions, USGS HVO conducted daily (sometimes twice-daily) helicopter flights with thermal IR cameras, producing georeferenced temperature maps of the entire active flow field at ~0.5–2 m resolution. These maps could distinguish: active flow fronts and channels (bright, >500°C), recently cooled but still hot lava (100–500°C), and fully cooled flows (<100°C). From these maps, flow advance rates could be measured by comparing positions from consecutive flights (daily resolution), and effusion rate could be estimated by measuring flow velocity (from time-lapse thermal imagery of floating crust) and channel cross-section. Option A (GPS) is correct that GPS detects deformation from lava loading, but this gives an indirect and spatially coarse measure of flow location — not direct margin mapping. Option B (seismic tremor triangulation) is used for eruption source location but not for distal lava flow front position tracking with useful accuracy. Option D (MODIS/MIROVA) is a genuinely important complement providing daily-to-multiple-daily global coverage, but at 250–1000 m resolution it cannot resolve individual flow margins or measure advance rates accurately enough for emergency management during a fast-moving event like the 2018 Kilauea LERZ; it is most useful for total flow area estimation and erupted volume tracking.',
        },
        {
          q: 'The Mauna Loa 2022 eruption began from the summit caldera and then migrated to the northeast rift zone, generating flows that advanced toward populated areas on the Hilo side of the island. Models showed flows could reach the Daniel K. Inouye Highway (a critical supply route) within 5–10 days at sustained effusion rates. What key parameter uncertainty most limited the accuracy of flow-length predictions during the first 48 hours of the northeast rift zone phase?',
          a: [
            'The composition of the erupting magma was unknown for the first 48 hours, making it impossible to calculate accurate melt viscosity using the VFT equation and therefore impossible to predict flow advance rate',
            'The effusion rate — the volume of lava erupted per unit time — was poorly constrained during the first 48 hours because the DEM of the eruption zone predated the 2022 eruption and did not capture the 2022 vent geometry; only the USGS airborne lidar flight conducted on day 3 of the eruption provided the first accurate effusion rate estimate',
            'The effusion rate was the dominant uncertainty: during the first 24–48 hours, lava output rates fluctuated rapidly and could only be estimated from satellite-derived flow area growth rates (MODIS, VIIRS) with large uncertainties (factor of 2–5); the flow length predicted by both MOLASSES and FLOWGO scales strongly with effusion rate, so this uncertainty propagated into factor-of-2–3 uncertainty in predicted flow length and timing',
            'The atmospheric temperature and wind speed were unknown, preventing accurate calculation of the convective heat loss term in FLOWGO; since convective cooling dominates over radiative cooling in the windy northeast flank of Mauna Loa, this uncertainty made all flow model predictions unreliable until weather station data became available on day 2',
          ],
          correct: 2,
          explain: 'In the early stages of any new eruption, effusion rate is the most important and most poorly constrained input parameter for lava flow models. During the 2022 Mauna Loa northeast rift zone phase, effusion rates were initially estimated from satellite imagery (MODIS, VIIRS, Planet imagery) by differencing flow area maps from successive overpasses and dividing by the average flow thickness (itself estimated from flow type and effusion rate — a circular dependency). These estimates carried uncertainties of a factor of 2–5 during the first 48 hours. Since flow length scales approximately as Q^0.5 in FLOWGO (and linearly in volume-limited MOLASSES simulations), a factor of 4 uncertainty in effusion rate translates to a factor of 2 uncertainty in predicted flow length — the difference between "flows stall 5 km from the highway" and "flows reach the highway within 2 days." Airborne thermal IR measurements of flow velocity and channel cross-section, conducted from Day 1 of the rift zone eruption, progressively reduced this uncertainty. Option A (magma composition) is not the primary uncertainty: Mauna Loa basalt composition is extremely well-characterised from previous eruptions (1984, 1950), and the 2022 lava was compositionally similar; viscosity uncertainty from composition is small compared to effusion rate uncertainty. Option B (DEM) is partially true (the pre-eruption DEM did not capture the new vent structure) but airborne lidar was flown within the first 24 hours, and the broader DEM of the northeast rift was from a 2017 acquisition of adequate quality for routing. Option D (atmospheric heat loss) is incorrect: radiative cooling dominates over convective cooling for basaltic flows on slopes, and convective heat loss contributes typically <20% of total heat loss; its uncertainty does not substantially degrade flow model accuracy.',
        },
      ],
    },
  ],
}

export default lavaFlowModeling
