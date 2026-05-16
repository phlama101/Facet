import { Activity, Globe, Layers, BarChart } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const earthSystemModels: Lesson = {
  id: 'clim-201-1-3-2',
  title: 'Earth System Models & Climate Simulation',
  track: 'cli',
  trackName: 'Climatology',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: `How scientists simulate Earth\'s climate — from general circulation models to fully coupled Earth system models, parameterization challenges, CMIP6, and using models to attribute extreme events.`,
  sources: [
    { org: 'IPCC',   title: 'IPCC Sixth Assessment Report WG1',              url: 'https://www.ipcc.ch/' },
    { org: 'WCRP',   title: 'WCRP CMIP6 Model Documentation',                url: 'https://www.wcrp-climate.org/wgcm-cmip/wgcm-cmip6' },
    { org: 'NCAR',   title: 'NCAR Community Earth System Model (CESM)',       url: 'https://www.cesm.ucar.edu/' },
    { org: 'Nature', title: 'Nature — Earth System Modelling',                url: 'https://www.nature.com/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Simulating a planet: from simple energy budgets to fully coupled Earth system models',
      body: `Climate models are the most sophisticated scientific tools humanity has ever built. At their simplest they are zero-dimensional energy balance models (EBMs) that treat Earth as a single point exchanging solar radiation and infrared heat — capable of estimating equilibrium climate sensitivity in a few lines of algebra. At their most complex they are fully coupled **Earth system models (ESMs)** running on petaflop supercomputers, simultaneously simulating the atmosphere, ocean, land surface, sea ice, carbon cycle, vegetation dynamics, tropospheric chemistry, and aerosol microphysics — all interacting with each other at horizontal resolutions of 25–100 km (62 mi) and time steps of minutes.

**The GCM-to-ESM distinction** is fundamental. A **General Circulation Model (GCM)** in the original sense simulates atmospheric and oceanic fluid dynamics — the equations of motion, thermodynamics, and radiation — but treats the land surface as a static lower boundary and prescribes atmospheric CO₂ concentration externally. An **Earth System Model (ESM)** extends this framework by explicitly simulating the biogeochemical cycles that determine CO₂ and other greenhouse gas concentrations. ESMs add interactive carbon cycle components (terrestrial vegetation and soil carbon; ocean biogeochemistry including phytoplankton and dissolved organic carbon), dynamic vegetation models that allow the spatial distribution of plant functional types to shift in response to climate, tropospheric chemistry modules that simulate the oxidative capacity of the atmosphere, and detailed aerosol schemes tracking the lifecycle of sea salt, mineral dust, sulfate, black carbon, and organic carbon particles. The distinction matters profoundly: a GCM can simulate what happens if CO₂ doubles, but an ESM can simulate how much CO₂ accumulates in the atmosphere given a trajectory of fossil fuel emissions, because it predicts the strength of the land and ocean carbon sinks dynamically.

**Components and coupling** in a modern ESM involve four primary modules joined by a coupler that exchanges fluxes at every time step. The **atmospheric component** solves the primitive equations (momentum, thermodynamics, moisture, continuity) on a three-dimensional grid typically with 30–100 vertical levels, resolving synoptic weather systems but not convective updrafts. The **ocean component** solves analogous equations for seawater, typically at finer horizontal resolution than the atmosphere (~0.1–1°) to capture mesoscale eddy dynamics. The **land surface component** calculates energy, water, and carbon fluxes from soil layers, vegetation canopy, and snowpack. The **sea ice component** tracks the thermodynamics and dynamics (fracture, ridging, advection) of sea ice, including melt pond formation. These components exchange heat, moisture, momentum, and carbon at their interfaces.

**Parameterization** is the fundamental technical challenge of ESMs and the primary source of model uncertainty. Many processes that critically affect climate occur at scales far smaller than a model grid cell — including deep cumulus convection (individual thunderstorm updrafts are ~1 km (0.6 mi) wide, a grid cell is ~50 km (31 mi)), boundary layer turbulence (centimetre to metre scales), cloud microphysics (droplets are micrometres), and subgrid orographic drag. Since these processes cannot be resolved explicitly, they must be **parameterized** — represented by empirical equations that relate the large-scale, grid-box-mean state to the average effect of the unresolved small-scale processes. The mass-flux parameterization of deep convection, for example, relates the convective precipitation and cloud formation in a grid box to the grid-box-mean temperature, moisture, and instability profile. Parameterization choices are tuned against observations and are a major source of the spread across models — particularly for clouds, the most important unresolved process for climate sensitivity.

**CMIP6** (the sixth phase of the Coupled Model Intercomparison Project, coordinated by the World Climate Research Programme) is the framework through which modelling groups worldwide run standardised experiments to allow systematic model comparison. Over 100 model configurations from 49 modelling centres contributed to CMIP6. A key finding was that several CMIP6 models produced unexpectedly high equilibrium climate sensitivity (ECS) values — some exceeding 5°C (9.0°F) per CO₂ doubling — compared with the assessed likely range of 2.5–4.0°C (4.5–7.2°F) (IPCC AR6). This elevated CMIP6 tail was traced partly to changes in cloud parameterizations (particularly low-cloud feedback), illustrating how parameterization choices propagate into long-term projections. The assessed ECS range is therefore informed not only by model output but by independent observational constraints from paleoclimate records and instrumental observations — a process of **emergent constraints**.

**Detection and attribution (D&A)** is the methodology by which climate models are used to quantify the human influence on observed weather and climate events. The fundamental approach compares two sets of model simulations: one with all forcings (anthropogenic greenhouse gases, aerosols, land use change, plus natural forcings from volcanoes and solar variability) and one with natural forcings only. If the observed climate trend lies outside the distribution of natural-only simulations but within the all-forcing simulations, the human signal is detected and attributed. D&A is now applied to individual extreme weather events in the growing field of **extreme event attribution** — quantifying, for example, how much more likely a specific heat wave was made by anthropogenic climate change. Studies using models from multiple CMIP6 ensembles have attributed probability increases of 2× to more than 50× for recent extreme heat events to human emissions.`,
      keyTerms: [
        {
          term: 'Earth System Model (ESM)',
          def: `A coupled climate model that extends the atmospheric and oceanic fluid dynamics of a General Circulation Model (GCM) by adding interactive biogeochemical cycles: the terrestrial and ocean carbon cycles, dynamic vegetation, tropospheric chemistry, and detailed aerosol schemes. ESMs can simulate how much CO₂ accumulates in the atmosphere given a prescribed emissions pathway — rather than requiring CO₂ to be specified externally — because they predict carbon sink strength dynamically. Examples include NCAR\'s CESM2, NOAA/GFDL\'s GFDL-CM4, and MPI\'s MPI-ESM1.2. ESMs are the primary tool for CMIP6 ScenarioMIP projections under shared socioeconomic pathways (SSPs).`,
        },
        {
          term: 'parameterization',
          def: `The representation of physical processes that occur at scales smaller than a model\'s grid cells using empirical or semi-empirical equations relating the grid-box-mean state to the average effect of unresolved small-scale processes. Key parameterized processes in climate models include deep cumulus convection, boundary layer turbulence, cloud microphysics, subgrid orographic drag, and land surface fluxes. Parameterization is the dominant source of inter-model spread in climate sensitivity, particularly through its treatment of clouds. Improving parameterizations — or replacing them with explicit simulation via kilometre-scale "storm-resolving" models — is a central frontier of climate modelling.`,
        },
        {
          term: 'CMIP6',
          def: `The sixth phase of the Coupled Model Intercomparison Project, coordinated by the World Climate Research Programme\'s Working Group on Coupled Modelling. CMIP6 defines a standardised set of model experiments and output variables that allow systematic comparison of over 100 model configurations from 49 international modelling centres. Key experiments include DECK (Diagnostic, Evaluation and Characterisation of Klima: piControl, abrupt-4xCO2, 1pctCO2, amip), HistoricalMIP (1850–2014), and ScenarioMIP (future SSP pathways). CMIP6 results, submitted from 2018 onward, underpinned the IPCC Sixth Assessment Report (AR6, 2021).`,
        },
        {
          term: 'emergent constraint',
          def: 'A relationship between an observable quantity in the current or historical climate (such as the seasonal low-cloud response to SST variability) and a future climate property (such as equilibrium climate sensitivity) that appears consistently across an ensemble of climate models. If the observed present-day quantity is known, it constrains the plausible range of the future property in models. Emergent constraints are used to narrow the uncertainty in ECS and other climate projections beyond what model diversity alone provides, and were a key input to the IPCC AR6 "likely" ECS range of 2.5–4.0°C (4.5–7.2°F). They implicitly assume the model ensemble correctly captures the relevant physical processes.',
        },
        {
          term: 'detection and attribution (D&A)',
          def: 'A statistical methodology used to quantify the contribution of human activities to observed climate changes or specific extreme events. The approach compares fingerprints — spatial and temporal patterns of observed change — against model simulations run with all forcings (anthropogenic plus natural) and with natural forcings only. When the observed trend is inconsistent with natural variability alone but consistent with all-forcing simulations, a human influence is detected and attributed. Applied to individual extreme events (extreme event attribution), D&A estimates how much climate change altered the probability or magnitude of a specific event, such as a heat wave or flood.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Key Concepts',
      body: `Modern Earth system models rest on four interlocking foundations: the hierarchy of model complexity from simple energy balance models to full ESMs; the challenge of parameterizing unresolved processes that govern cloud feedbacks and carbon cycle responses; the CMIP6 multi-model ensemble as the primary tool for quantifying projection uncertainty; and the detection and attribution framework that connects model simulations to observed climate change and extreme events.`,
      cards: [
        {
          name: 'Model Hierarchy: EBMs to Full ESMs',
          icon: Layers,
          color: BRAND.accent,
          desc: 'Model complexity spans zero-dimensional energy balance models (ECS in closed form) through atmospheric GCMs, coupled atmosphere-ocean GCMs, to full ESMs adding carbon cycle, vegetation, chemistry, and aerosols. Higher complexity enables interactive biogeochemistry but requires petaflop supercomputers and months of compute time per simulation.',
          examples: 'Zero-dimensional EBM: ECS ≈ S·ΔF/4 in one equation · Intermediate: MIT 2D zonally averaged ocean-atmosphere · CESM2 (NCAR): ~1° atmosphere, 1° ocean, interactive land carbon, sea ice, chemistry · MPI-ESM1.2: fully coupled ESM contributing to CMIP6 · Storm-resolving models (3–5 km (3.1 mi)): next frontier, beginning to resolve deep convection explicitly',
        },
        {
          name: 'Parameterization and the Cloud Problem',
          icon: Activity,
          color: BRAND.gold,
          desc: 'Sub-grid processes — deep convection (~1 km (0.6 mi)), boundary layer turbulence, cloud microphysics — cannot be resolved on 25–100 km (62 mi) grids and must be parameterized. Low-cloud parameterizations are the dominant source of spread in CMIP6 ECS values (2.5–5.7°C (4.5–10.3°F)). Parameterization tuning against present-day observations does not guarantee correct future behavior under novel forcing.',
          examples: 'Mass-flux convection schemes (Arakawa-Schubert, Tiedtke): relate convective mass flux to large-scale instability · CLUBB (Cloud Layers Unified By Binormals): unified boundary layer and shallow cloud scheme in CESM2 · CMIP6 high-ECS tail (>5°C (9.0°F) in some models) traced to revised low-cloud parameterizations · HighResMIP: testing impact of higher resolution (~25 km (16 mi)) on cloud and precipitation simulation',
        },
        {
          name: 'CMIP6 Ensemble and Projection Uncertainty',
          icon: BarChart,
          color: BRAND.jade,
          desc: 'Over 100 model configurations from 49 centres; standardised ScenarioMIP runs under SSP1-2.6 through SSP5-8.5. Ensemble spread quantifies structural model uncertainty. CMIP6 ECS range: 1.8–5.7°C (3.2–10.3°F), wider than CMIP5 due to new cloud parameterizations. IPCC AR6 assessed likely ECS: 2.5–4.0°C (4.5–7.2°F), constrained by paleoclimate and observational evidence beyond model spread alone.',
          examples: 'ScenarioMIP SSP2-4.5: ~2.7°C (~4.9°F) global mean warming by 2100 (multi-model median) · CMIP6 models with ECS >4.5°C (8.1°F) inconsistent with Pliocene and Last Glacial Maximum paleoclimate constraints · Pattern effect: spatial structure of SST warming affects effective ECS in CMIP6 — a source of uncertainty not present in idealised 4×CO2 experiments · Model democracy vs. model weighting by performance metrics: active research area for reducing ensemble spread',
        },
        {
          name: 'Detection, Attribution & Extreme Events',
          icon: Globe,
          color: BRAND.coral,
          desc: 'D&A compares all-forcing vs. natural-only model runs to fingerprint human influence. Optimal fingerprinting uses signal-to-noise maximising patterns to detect trends. Extreme event attribution (EEA) quantifies probability ratios for specific events. Human warming now detectably increases the likelihood of heat waves, heavy precipitation, and marine heat waves in most regions.',
          examples: 'Pacific Northwest heat dome (June 2021): multiple attribution studies found event virtually impossible without anthropogenic warming · Human influence on global mean temperature: detected at >5σ confidence · World Weather Attribution (WWA) rapid studies: probability ratios for extreme heat events typically 2–50×  · IPCC AR6: human influence detected in changes to hot extremes, heavy precipitation, agricultural drought, and Atlantic hurricane rainfall',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'How an Earth System Model Simulates Climate',
      body: 'Trace the flow of information and physical coupling within a modern ESM — from prescribed emissions through interactive component models to climate projections and event attribution.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how prescribed greenhouse gas emissions are processed through coupled ESM components to produce climate projections and enable extreme event attribution',
        nodes: [
          {
            id: 'emissions-forcing',
            label: 'Emissions & Forcing',
            description: 'Prescribed anthropogenic CO₂ and other greenhouse gas emissions (SSP scenarios in CMIP6) and aerosol precursor emissions enter the model as boundary conditions. Natural forcings — solar irradiance variations and volcanic stratospheric aerosol injections — are also prescribed from reconstructions. In a fully coupled ESM, fossil fuel CO₂ emissions (rather than concentrations) drive the carbon cycle, which then predicts atmospheric CO₂ dynamically.',
            color: BRAND.ruby,
          },
          {
            id: 'atmosphere',
            label: 'Atmospheric Component',
            description: 'Solves the primitive equations (Navier-Stokes + thermodynamics + moisture) on a 3D grid, typically at ~50–100 km (62 mi) horizontal resolution with 30–100 vertical levels. Radiation scheme computes shortwave and longwave fluxes. Parameterizations handle deep convection, boundary layer turbulence, gravity wave drag, and cloud microphysics. Exchanges heat, moisture, momentum, and carbon fluxes with all other components via the coupler every 30–60 minutes.',
            color: BRAND.accentHot,
          },
          {
            id: 'land-carbon',
            label: 'Land Surface & Carbon Cycle',
            description: 'Dynamic global vegetation model (DGVM) calculates photosynthesis, plant respiration, leaf litter, and soil carbon decomposition across multiple plant functional types. Tracks soil moisture and permafrost carbon stocks. Net land carbon flux (currently ~3 Pg C/yr uptake) is passed to the atmospheric component and modifies CO₂ concentration in ESM runs. Responds to changing temperature, precipitation, and elevated CO₂ — predicting whether the land remains a sink or flips to a source under high warming.',
            color: BRAND.jade,
          },
          {
            id: 'ocean-biogeochem',
            label: 'Ocean & Biogeochemistry',
            description: 'Ocean general circulation model (typically ~0.1–1° horizontal resolution) simulates heat transport, thermohaline circulation, and sea level. The biogeochemistry module tracks dissolved inorganic and organic carbon, phytoplankton productivity, nutrient cycles (N, P, Fe, Si), and air-sea CO₂ exchange (~2.8 Pg C/yr currently). Ocean acidification (declining pH) emerges from dissolved CO₂. Sea ice component exchanges freshwater, albedo, and heat fluxes with both atmosphere and ocean.',
            color: BRAND.accent,
          },
          {
            id: 'model-ensemble',
            label: 'CMIP6 Multi-Model Ensemble',
            description: 'Standardised CMIP6 protocols ensure all contributing models run identical experiments (historical: 1850–2014; ScenarioMIP: SSP1-2.6 to SSP5-8.5). Over 100 model configurations from 49 centres provide an ensemble that samples structural uncertainty in parameterizations. Ensemble spread quantifies projection uncertainty. Models are evaluated against paleoclimate records (LGM, Pliocene) and instrumental observations to identify outliers and apply emergent constraints.',
            color: BRAND.amethyst,
          },
          {
            id: 'attribution-projections',
            label: 'Projections & Attribution',
            description: `Climate projections (temperature, precipitation, sea level, extremes) under SSP scenarios are derived from model output. Detection and attribution analyses compare all-forcing vs. natural-only ensembles: the observed trend\'s signal-to-noise ratio in the all-forcing minus natural-only fingerprint quantifies human influence. Extreme event attribution studies compare probability distributions of event metrics across counterfactual (natural climate) and factual (current climate) simulations — quantifying how much anthropogenic warming altered the event\'s probability.`,
            color: BRAND.gold,
          },
        ],
        edges: [
          { from: 'emissions-forcing',  to: 'atmosphere',           label: 'Greenhouse gas & aerosol forcings drive radiative imbalance' },
          { from: 'atmosphere',         to: 'land-carbon',          label: 'Heat, precipitation, CO₂ concentration — drives vegetation and soil carbon' },
          { from: 'atmosphere',         to: 'ocean-biogeochem',     label: 'Wind stress, heat, freshwater, CO₂ — drives ocean circulation and air-sea exchange' },
          { from: 'land-carbon',        to: 'model-ensemble',       label: 'Carbon flux, albedo, and moisture feedbacks fed into standardised CMIP6 runs' },
          { from: 'ocean-biogeochem',   to: 'model-ensemble',       label: 'Ocean heat uptake, sea ice, carbon uptake contribute to ensemble spread' },
          { from: 'model-ensemble',     to: 'attribution-projections', label: 'Ensemble distributions used for projections and D&A fingerprinting' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What distinguishes an Earth System Model (ESM) from a General Circulation Model (GCM), and why does this distinction matter for climate projections?',
          a: [
            'ESMs add interactive biogeochemical cycles — including the terrestrial and ocean carbon cycles, dynamic vegetation, and tropospheric chemistry — to the atmospheric and oceanic fluid dynamics of a GCM; this allows ESMs to simulate how much CO₂ accumulates in the atmosphere given a trajectory of fossil fuel emissions rather than requiring CO₂ to be prescribed externally',
            'ESMs run at higher horizontal resolution (~10 km (6.2 mi)) than GCMs (~100 km (62 mi)), enabling them to explicitly resolve deep convection and cloud microphysics; the higher resolution reduces parameterization uncertainty and produces more accurate precipitation projections',
            'ESMs couple the atmosphere to the ocean using a synchronous coupler that exchanges fluxes every model time step, whereas GCMs use asynchronous flux correction to maintain stable coupling; this difference makes ESM projections more physically consistent and eliminates the drift that affects GCM simulations',
            'ESMs incorporate stochastic parameterizations that introduce random perturbations into unresolved processes, enabling ensemble forecasting; GCMs use deterministic equations throughout and can therefore only produce a single climate trajectory rather than a probabilistic distribution of outcomes',
          ],
          correct: 0,
          explain: 'The resolution distinction in Answer B conflates HighResMIP experiments with the GCM-to-ESM transition — ESMs are not defined by higher resolution, and many state-of-the-art ESMs still run at ~50–100 km (62 mi) atmospheric resolution. The coupler architecture described in Answer C is a mischaracterisation — both GCMs and ESMs use synchronous or near-synchronous coupling, and flux correction was a workaround used in some 1990s models but is not a defining difference. Answer D describes an approach to ensemble generation (stochastic parameterization) that is used in some models but is not the defining characteristic of ESMs. The correct answer is A: an ESM extends GCM physics by adding interactive biogeochemical components — principally the carbon cycle (terrestrial and marine), dynamic vegetation (which allows plant functional type distributions to shift in response to climate change), tropospheric chemistry (hydroxyl radical chemistry governing methane lifetime, ozone), and detailed aerosol lifecycle schemes. This matters enormously for projections: a GCM can simulate what the climate does under a prescribed doubling of CO₂, but an ESM can project how much CO₂ doubles given a specified trajectory of fossil fuel emissions, because it dynamically computes carbon sink efficiency. When land or ocean carbon sinks weaken under high warming (carbon-climate feedback), an ESM captures the resulting higher CO₂ concentration and its additional warming — a feedback absent from GCM-only projections.',
        },
        {
          q: 'What is parameterization in climate modelling, and why is it the primary source of uncertainty in model projections of equilibrium climate sensitivity?',
          a: [
            'Parameterization is the process of tuning model constants (such as drag coefficients and diffusion rates) against observational datasets; it is the primary source of ECS uncertainty because different tuning datasets produce different optimal parameter values, leading to divergent climate sensitivities across modelling groups',
            'Parameterization refers to the coordinate system used to represent the spherical Earth on a computational grid; ECS uncertainty arises because different grid projections (spectral, finite-volume, icosahedral) introduce different truncation errors that accumulate over multi-century simulations',
            'Parameterization is the representation of physical processes occurring at scales smaller than the model grid using empirical equations that relate grid-box-mean variables to the average effect of those unresolved processes; it is the dominant source of ECS uncertainty because low clouds, convection, and boundary layer turbulence — all sub-grid processes — determine the sign and magnitude of cloud feedbacks, the largest contributor to model spread in climate sensitivity',
            'Parameterization is the assignment of physical units (Kelvin, Pascal, m/s) to the dimensionless output of model differential equation solvers; numerical instabilities arising from unit conversion errors are amplified over long simulations, producing the spread in projected temperature changes seen across CMIP6 models',
          ],
          correct: 2,
          explain: `Answer A describes parameter tuning, which does occur and contributes to model differences, but conflates it with parameterization — the tuning process adjusts the empirical constants within parameterization schemes but does not define parameterization itself. Answer B describes grid geometry and discretisation, a real numerical consideration but not the primary source of ECS spread. Answer D is incorrect — unit assignment is handled algorithmically and is not a source of ECS uncertainty. The correct answer is C: parameterization is the representation of sub-grid processes through empirical or semi-empirical relationships derived from observations or high-resolution simulations. The irreducible need for parameterization arises from the disparity between grid cell sizes (~50 km (31 mi)) and the scales of cloud formation (~μm–km), convective updrafts (~1 km (0.6 mi)), and boundary layer turbulence (~cm–m). Because marine low clouds — the dominant contributor to the shortwave cloud radiative effect — form in the boundary layer at sub-grid scales, how they respond to warming is controlled entirely by parameterization choices. CMIP6 models that revised their low-cloud parameterizations (e.g., introducing more sophisticated boundary layer schemes like CLUBB in CESM2) showed larger positive low-cloud feedbacks and correspondingly higher ECS values, producing the expanded CMIP6 ECS range of 1.8–5.7°C (3.2–10.3°F) compared with CMIP5\'s 2.1–4.7°C (3.8–8.5°F). This illustrates directly how parameterization decisions drive ECS uncertainty.`,
        },
        {
          q: 'The CMIP6 ensemble produced several models with equilibrium climate sensitivity exceeding 5°C (9.0°F) — higher than the IPCC AR6 assessed likely range of 2.5–4.0°C (4.5–7.2°F). How did scientists reconcile this discrepancy?',
          a: [
            'The high-ECS CMIP6 models were found to have coding errors in their radiation schemes that were subsequently corrected; the corrected versions all fell within the 2.5–4.0°C (4.5–7.2°F) likely range, and the discrepancy was therefore an artefact of software bugs rather than a genuine physical uncertainty',
            'The high-ECS CMIP6 models were assigned lower weight in the assessment because they were submitted by modelling centres with less historical expertise; the IPCC AR6 likely range reflects a weighted average that gives more influence to established modelling groups with longer publication records',
            'The high-ECS CMIP6 models produced warming patterns over the historical period that were too large compared with observations and were inconsistent with paleoclimate evidence from the Last Glacial Maximum and Pliocene; IPCC AR6 used these independent lines of evidence — observational constraints, paleoclimate, and process understanding — to constrain the ECS range beyond the raw model spread, excluding the highest-ECS models as implausible',
            'The high-ECS CMIP6 models were identified as outliers using a principal component analysis of model output; models in the tails of the CMIP6 distribution were automatically excluded from the assessment because statistical protocols require removal of outliers beyond two standard deviations from the ensemble mean',
          ],
          correct: 2,
          explain: 'Answer A is incorrect — there were no systematic coding errors identified as the cause of elevated ECS in high-sensitivity CMIP6 models; the elevations were traced to genuine changes in cloud parameterizations (notably improved boundary layer and low-cloud schemes). Answer B misrepresents the assessment process — IPCC AR6 used evidence-based constraints, not institutional reputation, and the assessment was based on multiple lines of evidence rather than a weighted average by modelling group history. Answer D misrepresents the assessment methodology — no automatic statistical outlier removal was applied; models were evaluated on physical grounds. The correct answer is C: IPCC AR6 synthesised three independent lines of evidence to constrain ECS: (1) process understanding from climate model simulations and observations (the model ensemble itself); (2) instrumental observations of the climate response to historical forcings (transient climate sensitivity from the warming trend); and (3) paleoclimate evidence from periods with very different climate states (the Last Glacial Maximum ~21,000 years ago and the Pliocene warm period ~3 million years ago). High-ECS models (ECS > ~4.5–5°C (8.1–9°F)) predicted warming during the LGM and Pliocene that was inconsistent with proxy reconstructions of those past climates. This ruled out the highest-ECS CMIP6 models as physically implausible, narrowing the assessed likely range to 2.5–4.0°C (4.5–7.2°F) despite the wider raw model spread. This process — combining model projections with paleoclimate and observational constraints — exemplifies how emergent constraints function in practice.',
        },
        {
          q: 'What is the detection and attribution (D&A) methodology, and how is it used to quantify the human contribution to a specific extreme weather event?',
          a: [
            'D&A uses pattern recognition algorithms trained on historical weather data to identify extreme events with the same spatial signature as CO₂-forced climate change; the human contribution is quantified as the percentage of extreme events in the historical record whose pattern matches the trained classifier',
            'D&A is a data assimilation technique that combines model output with weather observations to reconstruct the most likely state of the atmosphere at the time of an extreme event; the human contribution is calculated as the difference between the assimilated state and a model run initialised from pre-industrial conditions',
            'D&A relies on isotope measurements in precipitation and ice cores to identify the radiative fingerprint of anthropogenic greenhouse gases; events with anomalously high δ¹⁸O values are attributed to anthropogenic forcing because CO₂-enriched air produces distinctive oxygen isotope fractionation in the hydrological cycle',
            'D&A compares observations against two sets of climate model simulations — one with all forcings (anthropogenic plus natural) and one with natural forcings only (no greenhouse gases or aerosols) — and uses statistical fingerprinting to quantify how much more (or less) likely or intense a given event or trend is in the all-forcing world versus the counterfactual natural climate; for extreme events this yields a probability ratio or fraction of attributable risk',
          ],
          correct: 3,
          explain: 'Answer A describes a pattern classification approach that is not standard D&A methodology; the "same spatial signature as CO₂ forcing" criterion is not how attribution studies distinguish forced change from internal variability. Answer B describes data assimilation, which is used for numerical weather prediction initialisation and reanalysis, not for D&A of climate change or extreme events. Answer C incorrectly invokes isotope measurements — while isotopes do record climate information, isotope anomalies in precipitation are not the basis of D&A and the described mechanism for CO₂ isotope fractionation in the hydrological cycle is incorrect. The correct answer is D: detection and attribution compares two probability distributions — the all-forcing world (model simulations that include anthropogenic greenhouse gases, aerosols, and land use change alongside natural volcanic and solar forcings) and the natural-world counterfactual (simulations with only natural forcings). For long-term trends, optimal fingerprinting identifies the spatial-temporal pattern (fingerprint) of anthropogenic forcing and tests whether the observed trend projects significantly onto this fingerprint relative to the noise of internal variability. For extreme event attribution, large ensembles of climate model simulations are used to construct probability distributions of event metrics (e.g., maximum 3-day temperature) in both the factual climate (with human forcing) and the counterfactual natural climate. The ratio of probabilities (probability ratio, PR) quantifies how much more likely the event was in the human-influenced climate. For the June 2021 Pacific Northwest heat dome, attribution studies found that the event was effectively impossible (PR > 150) in the pre-industrial climate, making it a clear example of extreme event attribution in practice.',
        },
        {
          q: `A climate model\'s land carbon cycle component predicts that the terrestrial biosphere will transition from a carbon sink to a carbon source by 2070 under SSP5-8.5. What physical mechanisms drive this transition, and what role does model parameterization play in the uncertainty?`,
          a: [
            'The transition from sink to source occurs because rising CO₂ concentrations eventually saturate photosynthetic enzymes, causing net primary productivity to decline below ecosystem respiration; parameterization uncertainty is low because the CO₂ saturation threshold is set by well-constrained enzyme kinetics from laboratory experiments',
            'The land carbon sink weakens and reverses primarily because: (1) soil and ecosystem respiration rates increase faster with temperature than photosynthesis in many ecosystems (Q10 effect); (2) permafrost thaw releases soil carbon that has been frozen for millennia; (3) drought-driven tree mortality and wildfire increase carbon emissions; (4) CO₂ fertilisation of photosynthesis saturates in nutrient-limited ecosystems; parameterization uncertainty is high because soil carbon decomposition rates, permafrost dynamics, drought mortality thresholds, and fire regimes are all sub-grid processes represented by empirical schemes with large observational uncertainty',
            'The transition is primarily driven by shifts in ocean circulation that reduce marine carbon uptake, forcing more atmospheric CO₂ to be absorbed by land ecosystems in proportion, until the land carbon cycle reverses direction as it reaches its storage capacity; parameterization uncertainty derives mainly from the difficulty of representing mesoscale ocean eddies in climate model ocean components',
            'Land carbon sink reversal is caused solely by increased wildfire frequency under warming; parameterization uncertainty is entirely from fire weather parameterizations, since all other aspects of the land carbon cycle (photosynthesis, respiration, soil decomposition) are directly resolved at model grid scales of 50 km (31 mi) and require no parameterization',
          ],
          correct: 1,
          explain: 'Answer A incorrectly states that photosynthetic enzyme saturation is the primary mechanism — while Rubisco kinetics do set limits on photosynthesis, real-world CO₂ saturation of terrestrial ecosystems is controlled by multiple co-limitations (nutrients, water, light), not enzyme kinetics alone; furthermore, parameterization uncertainty for this process is not low. Answer C incorrectly attributes the land-to-source transition to changes in ocean circulation and a "storage capacity" mechanism — the ocean and land carbon cycles do interact through atmospheric CO₂, but the land carbon cycle does not reverse because the ocean changes its uptake; the mechanisms are biophysical and biochemical within the terrestrial component. Answer D is incorrect on two grounds: wildfire is an important but not exclusive driver of land carbon source behaviour, and soil carbon dynamics and photosynthesis-respiration at 50 km (31 mi) grid scale still require parameterization because individual plant physiology and decomposer communities operate at micro to metre scales. The correct answer is B: the sink-to-source transition in ESM land carbon projections involves multiple interacting mechanisms, all substantially parameterized. (1) The Q10 effect: soil heterotrophic respiration roughly doubles per 10°C (18°F) warming (Q10 ≈ 2), while photosynthesis responds more weakly to high temperatures and may decline above ~25–35°C (77–95°F) in many plant types, causing net ecosystem productivity to decline. (2) Permafrost carbon: ~1,500 Pg C is stored in Arctic permafrost; as permafrost thaws, microbial decomposition releases CO₂ and CH₄ — a potential runaway feedback estimated to release 37–174 Pg C by 2100 under high emissions. (3) Drought and mortality: extended droughts increase tree mortality and reduce gross primary production; models use empirical drought stress functions and mortality thresholds. (4) CO₂ fertilisation saturation: initial photosynthetic stimulation from elevated CO₂ (beta effect) saturates when nitrogen, phosphorus, or water becomes limiting — but how quickly this saturation occurs is represented through highly uncertain nutrient cycling parameterizations. The large spread in ESM land carbon projections (~200–800 Pg C additional atmospheric CO₂ from land-climate feedback by 2100 under high emissions) reflects this compound parameterization uncertainty.',
        },
      ],
    },
  ],
}

export default earthSystemModels
