import { GitBranch, BarChart2, AlertTriangle, Wind, Target } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const ensembleForecastingUncertainty: Lesson = {
  id: 'atmo-201-1-4-2',
  title: 'Ensemble Forecasting and Uncertainty',
  track: 'atm',
  trackName: 'Dynamic Meteorology',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: 'A single deterministic forecast is a lie of false precision — the atmosphere is chaotic, and any small error in initial conditions will eventually grow to destroy predictability. Ensemble forecasting, pioneered by ECMWF in 1992, replaces the single forecast with a probabilistic cloud of possible futures, quantifying forecast uncertainty directly and enabling the calculation of event probabilities that save lives and guide billion-dollar decisions. This lesson covers the mathematics of ensemble perturbation strategies, verification methods, and the extraordinary predictability of extended-range events like blocking and the Madden-Julian Oscillation.',
  sources: [
    { org: 'ECMWF', title: 'ECMWF — Ensemble Prediction System (EPS) Documentation', url: 'https://www.ecmwf.int/en/forecasts/documentation-and-support/changes-ecmwf-model/ensemble-prediction-system' },
    { org: 'NOAA', title: 'NCEP — Global Ensemble Forecast System (GEFS)', url: 'https://www.emc.ncep.noaa.gov/emc/pages/numerical_forecast_systems/gefs.php' },
    { org: 'WMO', title: 'WMO — Subseasonal to Seasonal (S2S) Prediction Project', url: 'https://www.wmo.int/pages/prog/arep/wwrp/new/s2s/index.html' },
    { org: 'BAMS', title: 'Buizza et al. (2019) — 25 Years of Ensemble Forecasting at ECMWF, QJRMS', url: 'https://doi.org/10.1002/qj.3370' },
    { org: 'NCAR', title: 'Hamill (2006) — Ensemble-Based Atmospheric Data Assimilation, Predictability of Weather and Climate', url: 'https://doi.org/10.1017/CBO9780511617652.006' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The cloud of possible futures',
      body: `On the morning of 28 October 2012, the ECMWF Ensemble Prediction System (EPS) was already showing something extraordinary. Roughly half of its 51 members were tracking a powerful Atlantic hurricane into the northeastern United States — at a time when the storm was still more than 1,000 km (621 mi) from landfall. The deterministic GFS model, by contrast, was showing Sandy recurving harmlessly out to sea. Over the next 72 hours, as Sandy executed its unprecedented left turn into New Jersey, the ensemble had been right — and forecasters who trusted it had additional days to prepare the largest mandatory evacuation in New York City's history. The lesson was not that ECMWF's deterministic model was better, but that the ensemble's spread of solutions contained the truth even when the most likely solution did not — demonstrating the fundamental principle that **probability, not point forecasts, is the honest language of atmospheric prediction**.

The chaotic nature of the atmosphere means that a deterministic forecast — a single model run from a single initial state — is inherently misleading. Because of sensitive dependence on initial conditions (Lorenz, 1963), two initially nearly identical atmospheric states will diverge exponentially, eventually becoming as different as two randomly chosen states. In practice, observational errors in the initial analysis are typically 10–100 times larger than the smallest atmospheric scales; the forecast is therefore already uncertain from the moment it begins. Presenting a single deterministic forecast without uncertainty information is analogous to reporting a blood pressure measurement without any indication of whether it was taken by a careful clinician or a drunk robot — the number has no actionable meaning without a context for its reliability.

**Ensemble forecasting** addresses this by running the forecast model multiple times from slightly perturbed initial conditions (and, in modern systems, with perturbed physical parameterisations), generating a sample of possible futures that collectively characterise the probability distribution of atmospheric states at each lead time. The ECMWF EPS, launched in 1992, runs 51 members (1 unperturbed control + 50 perturbed members) at slightly lower resolution than the deterministic forecast (TCo639 vs TCo1279 for recent configurations). NCEP's Global Ensemble Forecast System (GEFS) runs 31 members. The spread of ensemble members at a given lead time and location — the **ensemble spread** — provides a direct, flow-dependent estimate of forecast uncertainty. Days when the spread is small indicate the atmosphere is in a more predictable regime; days of large spread warn that the forecast is highly uncertain and multiple scenarios must be considered.

The **spread-skill relationship** — the empirical observation that ensemble spread correlates with ensemble mean forecast error — is the bedrock justification for ensemble forecasting. In a perfectly calibrated ensemble, the root-mean-square error (RMSE) of the ensemble mean should approximately equal the ensemble spread. If the RMSE consistently exceeds the spread (**underspread**), the ensemble is overconfident, likely because initial perturbation amplitudes are too small or model error is unrepresented. If the spread consistently exceeds the RMSE (**overspread**), the ensemble is underconfident — perturbations are too large. Calibration is assessed systematically using **rank histograms (Talagrand diagrams)**: for each observed quantity, the observation is ranked among the ensemble members; a flat histogram indicates a well-calibrated ensemble, while U-shaped histograms indicate underdispersion and dome-shaped histograms indicate overdispersion.

Beyond the traditional 0–10-day medium range, ensemble systems are increasingly used for **extended-range** (10–30 day) and **subseasonal-to-seasonal** (S2S, 2–8 week) prediction. At these timescales, deterministic skill is effectively zero for day-to-day weather, but meaningful probabilistic skill for weekly-averaged anomalies remains in regions and situations influenced by slowly evolving boundary conditions: the **Madden-Julian Oscillation (MJO)**, stratospheric polar vortex state, soil moisture anomalies, and sea ice conditions all provide real sources of predictability beyond the 2-week chaos barrier. ECMWF's extended-range ensemble runs out to 46 days at lower resolution, and research forecasts from the S2S database have demonstrably positive skill for MJO phase and amplitude at 3–4 week lead times, with downstream impacts on tropical rainfall, extratropical circulation, and cold air outbreak probability.`,
      keyTerms: [
        {
          term: 'Ensemble spread',
          def: 'The standard deviation (or range) of ensemble member forecasts at a given location and lead time, measuring the diversity of possible futures sampled by the ensemble. A physically meaningful proxy for forecast uncertainty in a well-calibrated ensemble, the spread increases with lead time as initial condition errors grow through chaotic dynamics. Flow-dependent spread — larger in active cyclogenesis regions, smaller in quiescent regimes — is a key advantage of ensemble systems over static uncertainty estimates.',
        },
        {
          term: 'Singular vectors',
          def: 'The initial perturbation patterns that grow most rapidly in a given forecast model over a specified optimisation time, computed as the leading eigenvectors of the propagator of the tangent-linear forecast model. ECMWF uses singular vectors to initialise EPS perturbations — seeding the ensemble with initial condition differences that, by construction, amplify along the most dynamically active directions of atmospheric phase space. Singular vectors are concentrated in baroclinically unstable regions like storm tracks and frontal zones.',
        },
        {
          term: 'Probability of precipitation (PoP)',
          def: 'The fraction of ensemble members forecasting precipitation exceeding a specified threshold (e.g., 1 mm (0.04 in)/6h) at a given location and time. Computed directly from the ensemble, PoP quantifies the probability that precipitation occurs, distinct from the intensity if it does occur. A 60% PoP for rain does not mean it will rain 60% of the day; it means the ensemble assesses a 60% chance that the precipitation threshold will be exceeded in that period.',
        },
        {
          term: 'Continuous Ranked Probability Score (CRPS)',
          def: 'A proper scoring rule for probabilistic forecasts that measures the integrated squared difference between the forecast cumulative distribution function and the observed CDF (a step function at the observation value). Unlike RMSE, CRPS rewards probabilistic sharpness alongside accuracy — a sharp, accurate forecast scores better than a spread-out forecast of similar accuracy. The Continuous Ranked Probability Skill Score (CRPSS) normalises CRPS against a reference climatological forecast.',
        },
        {
          term: 'Madden-Julian Oscillation (MJO)',
          def: 'The dominant mode of intraseasonal atmospheric variability in the tropics — a coherent, eastward-propagating envelope of enhanced and suppressed convection that circumnavigates the globe over 30–60 days. The MJO modulates tropical cyclone activity, influences monsoon strength, and forces extratropical teleconnections that affect precipitation and temperature anomalies at mid-latitudes 1–3 weeks after a given MJO phase. It is a primary source of predictability in the 2–4-week extended range.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Ensemble perturbation strategies',
      body: `**How to sample the distribution of possible initial conditions.** The fundamental design challenge of an ensemble system is: given computational constraints, how should the initial perturbations be chosen to maximally span the uncertainty in the initial atmospheric state? If perturbations are chosen arbitrarily, many ensemble members will be nearly identical, wasting compute. If perturbations are chosen optimally — along the directions of maximum error growth — even a small ensemble can sample the most forecast-relevant uncertainty modes. Modern ensemble systems combine dynamically optimal initial condition perturbations with stochastic model perturbations to represent both initial condition uncertainty and model structural uncertainty.`,
      cards: [
        {
          name: 'Singular Vectors (ECMWF EPS)',
          icon: GitBranch,
          color: BRAND.accent,
          desc: 'ECMWF initialises EPS perturbations using singular vectors — the fastest-growing perturbation patterns in the tangent-linear model over a 48-hour optimisation window. These patterns concentrate perturbation energy in the most baroclinically unstable regions: developing cyclone cores, active frontal zones, and tropical convective systems. Using singular vectors ensures the ensemble samples the most forecast-relevant uncertainty rather than random noise.',
          examples: '51-member EPS: 1 control + 25 pairs of ±singular vector perturbations · Singular vector amplitude scaled to match estimated initial condition error (~1 K temperature, ~1 m/s wind) · Initial perturbation energy concentrated in: North Atlantic storm track, Pacific storm track, tropical regions · Post-processing with ensemble transform (ET) ensures global balance and orthogonality · 48-h total energy norm singular vectors identify: developing Shapiro-Keyser cyclones, cutoff lows, tropical convective clusters',
        },
        {
          name: 'GEFS Perturbations: Ensemble Kalman Filter',
          icon: Target,
          color: BRAND.gold,
          desc: `NCEP\'s GEFS uses the Ensemble Kalman Filter (EnKF) to generate initial perturbations. The 80-member GDAS EnKF produces analysis ensemble members that directly sample the background error covariance; 31 of these form the GEFS initial conditions. This approach has the advantage of physically consistent perturbations derived from the actual observational analysis cycle, ensuring perturbations are in dynamically balanced regions of the state space.`,
          examples: '31-member GEFS: initialised from 80-member GDAS EnKF analysis ensemble · GEFS upgraded to EnKF-based perturbations in 2020 (replacing ETR perturbations) · Hybrid 4DEnVar data assimilation: 80% ensemble, 20% static covariance · Vertical levels: 64 hybrid sigma-pressure levels to ~0.2 hPa (~60 km (37 mi)) · GEFS output: 0.5° grid, lead times to 35 days (16 days at standard distribution)',
        },
        {
          name: 'Stochastic Physics: Representing Model Error',
          icon: AlertTriangle,
          color: BRAND.coral,
          desc: 'Initial condition perturbations alone systematically underestimate ensemble spread at longer lead times because model error — from imperfect parameterisations of convection, turbulence, and radiation — introduces additional uncertainty not captured by initial condition sampling. Stochastic physics schemes add random perturbations to parameterised tendencies (SPPT: stochastic perturbation of parameterisation tendencies) or represent backscatter of kinetic energy from sub-grid to resolved scales (SKEB: stochastic kinetic energy backscatter).',
          examples: 'ECMWF SPPT: random multiplicative perturbation applied to all parameterised tendencies (convection, boundary layer, radiation, gravity wave drag) · SPPT spatial correlation scale: ~500 km (311 mi); temporal correlation: ~6 hours · SKEB: adds random rotational wind perturbations to represent upscale energy transfer from unresolved convection · Benefit: SPPT reduces underdispersion at day 7–10 by ~15–20%; improves CRPSS for 2-m temperature by ~5%',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Communicating ensemble uncertainty',
      body: `**From spaghetti to probabilities: making ensemble output actionable.** An ensemble of 51 different forecast tracks, rainfall fields, or pressure maps contains enormous amounts of information — but it is cognitively overwhelming without smart visualisation and aggregation. The choice of how to present ensemble uncertainty is not merely aesthetic; it directly affects how forecasters, emergency managers, and the public interpret and act on probability information. Different products illuminate different aspects of ensemble uncertainty, and skilled meteorologists use multiple visualisation strategies in combination.`,
      cards: [
        {
          name: 'Spaghetti Diagrams and Stamp Maps',
          icon: Wind,
          color: BRAND.jade,
          desc: 'Spaghetti diagrams overlay selected contour lines (e.g., the 500-hPa 5640-m geopotential height contour) from all ensemble members on a single map. Where lines cluster tightly, the forecast is confident; where they spread widely, uncertainty is high. Stamp maps display miniature individual forecast maps for all members side by side, allowing visual identification of distinct weather scenarios — particularly useful for showing bimodal ensemble distributions (two distinct weather regimes).',
          examples: 'Classic spaghetti plot: 500-hPa 5760-m contour from 51 EPS members at day 7 · Sandy 2012 day 7 spaghetti: tight cluster of ~25 members showing US landfall vs dispersed "recurve" scenario group of ~20 members — bimodal distribution clearly visible · Stamp maps: 51 individual 300-hPa wind speed panels at day 5 — useful for identifying jet stream scenarios · ENS plume diagrams: time series of all member forecasts for a single station, showing probabilistic range evolution',
        },
        {
          name: 'Probability Maps and PoP',
          icon: BarChart2,
          color: BRAND.amethyst,
          desc: 'Probability maps show the fraction of ensemble members exceeding a threshold (e.g., precipitation >10 mm (0.39 in), temperature <0°C (32°F), wind speed >50 kt) at each grid point. Probability of precipitation (PoP) is the most widely used ensemble-derived product in public forecasting. For extreme events, the probability of exceeding high thresholds — estimated from the fraction of ensemble members in the tail — provides early warning capability days before a deterministic forecast would show a clear signal.',
          examples: 'Standard PoP: fraction of EPS members with 6-h precipitation >0.2 mm (0.01 in)/6h · Heavy rain PoP: fraction with >50 mm (1.97 in)/24h — useful for flash flood guidance 3–5 days ahead · Extreme wind probability: fraction with 10-m wind >50 kt — key for shipping rerouting · Sandy 2012: 7 days before landfall, EPS showed ~25% probability of wind >50 kt over New Jersey coast — too low for mandatory evacuation but sufficient to trigger contingency planning · ECMWF extreme forecast index (EFI): measures how far the EPS distribution has shifted relative to climate CDF',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Hurricane Sandy ensemble evolution, 2012',
      body: `Trace the evolution of the ECMWF ensemble forecast for Hurricane Sandy from 10 days before landfall to the final hours before impact on 29 October 2012. Sandy\'s extraordinary forecast serves as the definitive demonstration of the value of ensemble prediction — showing how probabilistic spread across ensemble members can reveal the true forecast uncertainty, how an early minority scenario in the ensemble can represent the correct future, and how ensemble-based probability products enabled life-saving early action when deterministic models were still showing an incorrect solution.`,
      interaction: {
        type: 'flow-simulator' as const,
        description: 'ECMWF EPS forecast evolution for Hurricane Sandy — 10 days before landfall to impact',
        nodes: [
          {
            id: 'day-10',
            label: 'Day −10: Large Ensemble Spread',
            description: 'At 10 days before landfall (19 October 2012), Sandy was a Category 1 hurricane tracking northward through the Caribbean. The ECMWF EPS spaghetti diagram for day-10 500-hPa heights showed enormous spread — roughly two-thirds of members tracking Sandy out to sea to the northeast (the climatologically favoured recurvature for Atlantic hurricanes at that latitude and time of year), and about one-third showing tracks that approached or reached the US coast. The ensemble mean was ambiguous, but the spread itself communicated actionable information: the probability of US landfall was non-trivial, and emergency managers should begin contingency planning. At this lead time, the deterministic GFS was showing clear recurvature; the ECMWF deterministic forecast was already slightly more onshore-biased than GFS.',
            color: BRAND.accent,
          },
          {
            id: 'day-7',
            label: 'Day −7: Two Distinct Scenarios',
            description: 'At 7 days before landfall (22 October), the ensemble had evolved into a clearly bimodal distribution — visible in stamp maps of individual member tracks. Approximately 40% of EPS members (the "recurvature cluster") showed Sandy moving northeast into the open Atlantic; approximately 50% (the "left turn cluster") showed the hurricane executing an anomalous westward or northwestward turn into the Mid-Atlantic coast. A small minority showed intermediate tracks. The bimodality reflected genuine atmospheric uncertainty about the interaction between Sandy and a blocking high-pressure ridge over Greenland combined with an approaching mid-latitude trough — two dynamically distinct scenarios for how that interaction would unfold. Probability of hurricane-force winds reaching the New Jersey coast had risen to roughly 25% in EPS output.',
            color: BRAND.accentHot,
          },
          {
            id: 'day-5',
            label: 'Day −5: Probability Rising, Deterministic Divergence',
            description: `At 5 days before landfall (24 October), the EPS probability of landfall on the US Mid-Atlantic coast had risen to 45–55% in ECMWF products, while the majority of GFS ensemble members still showed recurvature. The ECMWF deterministic forecast was now showing a clear US landfall track; the GFS deterministic was still showing recurvature. The divergence between the two centre\'s deterministic forecasts, paradoxically, reinforced confidence in the ensemble approach: both could not be correct, and the EPS distribution showed that the true outcome was uncertain. Emergency managers in New York and New Jersey began activating response plans; the New York Metropolitan Transportation Authority (MTA) began reviewing tunnel-closure procedures.`,
            color: BRAND.gold,
          },
          {
            id: 'day-3',
            label: 'Day −3: High-Confidence Landfall',
            description: 'At 3 days before landfall (26 October), ensemble convergence was essentially complete. More than 85% of EPS members and 75% of GEFS members showed landfall in the New Jersey to Delaware area. The EPS ensemble mean track was within 50 km (31 mi) of the eventual landfall point. New York Governor Andrew Cuomo declared a state of emergency; the National Hurricane Center issued the first hurricane watch for the New Jersey coast; Mayor Bloomberg ordered the first-ever mandatory evacuation of Zone A in New York City (370,000 residents). Probabilistic storm surge guidance from SLOSH model ensembles was being used to determine evacuation zone boundaries — a direct application of ensemble uncertainty products to life-safety decision-making.',
            color: BRAND.jade,
          },
          {
            id: 'day-1',
            label: 'Day −1: Near-Certainty and Impact Preparation',
            description: 'At 24 hours before landfall (28 October), the ensemble had converged to near-deterministic certainty on the track and intensity. Sandy made landfall near Brigantine, New Jersey at 23:30 UTC on 29 October 2012 as a post-tropical cyclone with 90 mph sustained winds — the second-costliest Atlantic storm on record at the time ($65 billion in damages, 233 deaths). Post-event analysis confirmed that the ECMWF EPS had shown non-trivial landfall probability 10 days in advance, significant probability 7 days in advance, and high probability 5 days in advance — well ahead of the US GFS deterministic model. The case became the defining demonstration of ensemble forecast value for high-impact weather, accelerating US investment in ensemble prediction and probabilistic product development.',
            color: BRAND.coral,
          },
        ],
        edges: [
          { from: 'day-10', to: 'day-7', label: 'bimodal scenario structure emerges as Sandy\'s interaction with blocking ridge becomes dynamically critical' },
          { from: 'day-7', to: 'day-5', label: 'left-turn scenario gains ensemble weight as blocking ridge strengthens; EPS probability of US landfall rises to ~50%' },
          { from: 'day-5', to: 'day-3', label: 'GFS/ECMWF deterministic divergence highlights value of ensemble uncertainty quantification; emergency activation begins' },
          { from: 'day-3', to: 'day-1', label: 'ensemble convergence triggers mandatory evacuations and infrastructure pre-positioning across 3 US states' },
          { from: 'day-1', to: 'day-10', label: 'post-event verification confirms EPS showed actionable landfall probability 10 days ahead — validating ensemble investment' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What is the "spread-skill relationship" in ensemble forecasting, and what does a systematically underdispersed ensemble imply about the forecasting system?',
          a: [
            'The spread-skill relationship states that ensemble spread increases monotonically with forecast lead time; an underdispersed ensemble (spread less than RMSE) means the ensemble has been run for too short a lead time, and extending the forecast period would bring spread and skill back into calibration',
            'The spread-skill relationship is the empirical correlation between ensemble spread at a given lead time and location and the subsequent error of the ensemble mean forecast; an underdispersed ensemble — where RMSE consistently exceeds spread — indicates the ensemble is overconfident, most likely because initial perturbations are too small, model error is unaccounted for, or the perturbation methodology fails to sample the true uncertainty directions',
            'The spread-skill relationship describes the proportional relationship between the number of ensemble members and forecast accuracy; an underdispersed ensemble indicates that too few members have been run, and doubling the ensemble size would bring the spread-RMSE ratio back to calibration without changing the initial perturbation method',
            'The spread-skill relationship refers to the inverse relationship between ensemble spread and the skill of individual deterministic members; an underdispersed ensemble indicates that the deterministic control run has higher skill than the perturbed members, suggesting the perturbation strategy is degrading rather than exploring forecast uncertainty',
          ],
          correct: 1,
          explain: 'Option A confuses spread-skill relationship with lead-time evolution of spread — while spread does increase with lead time, the spread-skill relationship specifically refers to the correlation between spread and error at the same lead time across different situations. Underdispersion cannot be fixed simply by extending lead time; it reflects a structural mismatch between the ensemble and the true uncertainty. Option C confuses underdispersion with insufficient ensemble size — while very small ensembles (say, 3–5 members) can suffer from sampling error, systematic underdispersion in operationally-sized ensembles (20–50 members) is not primarily a member-count issue but reflects incorrect perturbation amplitude or missing model error. Option D inverts the interpretation — underdispersion means the ensemble collectively underestimates uncertainty, not that the control run is individually more skilful than perturbed members (though this can sometimes be true). The correct answer is B: in a perfectly calibrated ensemble, the ensemble spread (standard deviation of member forecasts) should equal the RMSE of the ensemble mean across a large sample of forecasts and locations. When RMSE consistently exceeds spread, the ensemble is underdispersed — it is presenting futures that cluster more closely together than the true distribution of outcomes justifies. This overconfidence can arise from: (1) initial perturbations that are too small in amplitude; (2) using perturbation directions that do not correspond to the most error-prone modes; (3) neglecting model error, so all members share the same systematic errors and do not diverge as much as reality; (4) insufficient perturbation in the tropics or in mesoscale features. Modern ensemble systems address underdispersion by calibrating perturbation amplitudes to match historical error statistics, adding stochastic physics (SPPT, SKEB), and using large ensembles to sample the full distribution of initial and model uncertainty.',
        },
        {
          q: 'ECMWF uses "singular vectors" to initialise ensemble perturbations. What is a singular vector, and why is it preferred over randomly chosen perturbations?',
          a: [
            'A singular vector is a spatially smooth, horizontally uniform perturbation that is added to the analysis field to represent large-scale analysis uncertainty; it is preferred over random perturbations because large-scale uncertainties are more predictable and grow more slowly than small-scale noise, resulting in ensemble members that remain physically realistic throughout the forecast',
            'A singular vector is the leading eigenvector of the background error covariance matrix B from the data assimilation system; using it as a perturbation ensures that initial perturbations are statistically consistent with the actual analysis uncertainty distribution; random perturbations would not respect the spatial covariance structure of analysis errors and would therefore degrade forecast quality',
            'A singular vector is a perturbation pattern that grows most rapidly in the tangent-linear forecast model over a specified optimisation time window, computed as the leading eigenvector of the propagator matrix; using singular vectors ensures ensemble perturbations are seeded along the atmospheric directions of maximum error growth — the directions that will contribute most to ensemble spread and forecast uncertainty at the optimisation time',
            'A singular vector is a statistically balanced perturbation computed from the time-mean climatological background flow; it represents the climatological variability of the atmosphere and is preferred because it produces an ensemble whose spread matches the long-term climate variability of the atmosphere, providing a natural baseline against which anomalous forecast uncertainty can be identified',
          ],
          correct: 2,
          explain: 'Option A describes a spatially smooth, large-scale perturbation strategy — not the mathematical definition of a singular vector. Singular vectors are computed from the dynamical properties of the forecast model, not from spatial smoothness criteria. Option B describes an eigenvector of the background error covariance matrix B, which is the basis for ensemble Kalman filter perturbations — a distinct methodology from singular vectors. Singular vectors are eigenvectors of the propagator (the tangent-linear model), not of B. Option D describes a climatological perturbation strategy (sometimes called climatological resampling), which would produce an ensemble with climatologically appropriate spread but without flow-dependent information about which directions are growing most rapidly in the current atmospheric state. The correct answer is C: a singular vector is mathematically defined as the leading eigenvector of the matrix S = M^T M, where M is the propagator (tangent-linear forecast model) from initial time to optimisation time. The singular value associated with each singular vector is the square root of the corresponding eigenvalue of M^T M, measuring the amplification of that perturbation pattern from initial to final time. The leading singular vectors (with the largest singular values) identify the initial condition patterns that amplify most rapidly over the specified optimisation window — typically 48 hours in the ECMWF EPS. These patterns concentrate in baroclinically unstable regions: frontal zones, storm track cyclone cores, and tropical convective clusters where the atmosphere is in a state of maximum potential instability. By seeding ensemble perturbations along these rapidly growing directions, ECMWF ensures that even with only 50 perturbations, the ensemble samples the most dynamically relevant uncertainty in the initial state — the directions where small initial errors will have the largest impact on the forecast.',
        },
        {
          q: 'The ECMWF EPS correctly showed a significant probability of Hurricane Sandy making US landfall 7 days in advance, while the GFS deterministic forecast still showed recurvature. What dynamical reason explains why the ensemble identified the correct solution before the deterministic model?',
          a: [
            'The ECMWF EPS uses a higher-resolution model than the GFS deterministic forecast, allowing it to resolve the small-scale convective processes within Sandy that were critical for determining whether the storm would recurve or make landfall; the GFS deterministic model\'s coarser grid could not capture these features',
            'The EPS showed the correct solution because ensemble averaging systematically reduces model biases — averaging 51 members cancels out individual model errors that would cause any single member to forecast recurvature; the ensemble mean is therefore structurally more accurate than the deterministic GFS regardless of the specific meteorological situation',
            'The EPS identified the correct solution because it sampled multiple possible atmospheric states, including initial conditions that led to the blocking ridge developing strongly enough to deflect Sandy westward; the deterministic GFS started from a single initial state that happened to correspond to a trajectory where the blocking was insufficient to prevent recurvature, but ensemble perturbations explored nearby initial states where the blocking was stronger',
            'The EPS has access to a larger observational dataset than the GFS because ECMWF collects more observations from the European network; the better initial conditions from European station data allowed the EPS to correctly represent the Greenland blocking ridge that was critical for Sandy\'s left turn, while the GFS was limited by fewer observations in the critical region',
          ],
          correct: 2,
          explain: `Option A attributes the difference to model resolution — while resolution matters for intensity prediction, the EPS and deterministic ECMWF model share the same dynamical core; the resolution difference between EPS and ECMWF deterministic is modest, and both outperformed the GFS deterministic, indicating the difference was not simply resolution. Option B claims ensemble averaging reduces model biases — this is true for systematic biases over many cases, but for a single event like Sandy, the ensemble mean is not necessarily more accurate than a correctly initialised deterministic run. The advantage of the ensemble for Sandy was not bias cancellation but scenario sampling. Option D claims ECMWF has access to more observations than NCEP — this is not accurate; both centres assimilate the same global observing system data via the WMO\'s GTS. The ECMWF data assimilation system (4D-Var) is arguably more sophisticated, but the advantage for Sandy was about initial condition uncertainty sampling, not data access. The correct answer is C: the fundamental reason the ensemble identified the correct solution is that it sampled a distribution of initial atmospheric states, some of which led to tracks where the anomalous Greenland blocking ridge — the critical dynamic forcing that redirected Sandy westward — was strong enough to deflect the hurricane toward the coast. The deterministic GFS started from a single initial state where the analysis happened to produce a blocking ridge of insufficient amplitude or at a slightly different position, leading the model dynamics down the recurvature pathway. Among the 51 EPS members, a significant fraction started from perturbed states where the blocking ridge was stronger or positioned differently, and those members tracked Sandy into the coast. The ensemble spread revealed that the atmospheric evolution was genuinely uncertain — the block-Sandy interaction was in a sensitive state where small initial differences would lead to dramatically different outcomes — and the distribution of member tracks quantified that uncertainty as actionable probabilities.`,
        },
        {
          q: 'What is the Continuous Ranked Probability Score (CRPS) and why is it preferred over RMSE for evaluating ensemble forecast quality?',
          a: [
            'The CRPS is the correlation coefficient between the ensemble mean and the observed value across a large verification dataset; it is preferred over RMSE because correlation accounts for the systematic bias of the ensemble mean in a way that RMSE does not, making CRPS more sensitive to forecast regime shifts and model biases',
            'The CRPS is the integrated squared difference between the forecast cumulative distribution function (CDF) and the observed CDF (a Heaviside step function at the observed value); it rewards both forecast accuracy and sharpness (narrow uncertainty), making it a proper scoring rule suitable for evaluating probabilistic forecasts where RMSE only evaluates the deterministic ensemble mean and ignores whether the probability distribution is calibrated',
            'The CRPS is the fraction of ensemble members that correctly predict the observed outcome category (above/below median, above/below threshold); it is preferred over RMSE for ensemble evaluation because it directly measures the percentage of successful ensemble members rather than the average error of the ensemble mean, which can be misleadingly small even when all members are wrong in the same direction',
            'The CRPS is the mean absolute error (MAE) of the ensemble mean forecast, calculated as the average absolute difference between ensemble mean and observed value; it is preferred over RMSE because MAE is less sensitive to large individual forecast errors (outliers), providing a more robust measure of typical ensemble accuracy in the presence of a few large forecast busts',
          ],
          correct: 1,
          explain: 'Option A describes a correlation coefficient — not the CRPS. Correlation and RMSE are related but measure different things; neither is the CRPS, which evaluates the full probability distribution rather than a single central tendency measure. Option C describes a category hit rate or Brier score variant — not the CRPS. Hit rate measures whether observations fall within a predicted category but ignores the spread of the distribution and is not a proper scoring rule. Option D describes Mean Absolute Error (MAE) of the ensemble mean — a legitimate metric but not the CRPS. MAE evaluates the deterministic ensemble mean just as RMSE does, and it shares the fundamental limitation of ignoring the spread and shape of the ensemble distribution. The correct answer is B: the CRPS is defined as CRPS(F, y) = ∫_{-∞}^{∞} [F(x) − 1(x ≥ y)]² dx, where F(x) is the forecast CDF and 1(x ≥ y) is the empirical CDF of the single observation y. For a deterministic forecast (collapsed distribution), the CRPS reduces to the mean absolute error. For probabilistic forecasts, CRPS rewards both accuracy (the forecast CDF should be centred near the observation) and sharpness (the CDF should be steep — narrow distribution). A forecast that places 100% of its probability far from the observation scores poorly; a forecast with appropriate spread centred near the observation scores well. Crucially, CRPS is a proper scoring rule — it cannot be improved by deliberate miscalibration. The CRPSS (Continuous Ranked Probability Skill Score) normalises CRPS against a reference climatological forecast, expressing skill as the fractional improvement over climatology. CRPSS > 0 indicates the ensemble has skill beyond climatology; CRPSS = 1 indicates perfect probabilistic forecast.',
        },
        {
          q: 'What are the primary sources of extended-range (10–30 day) predictability that allow ensemble systems to maintain useful skill beyond the 2-week chaos limit for day-to-day weather?',
          a: [
            'Extended-range predictability derives primarily from the predictable component of large-scale synoptic weather patterns — blocking anticyclones, extratropical cyclones, and frontal systems are intrinsically more predictable than mesoscale convection because of their larger scale and slower dynamics, allowing ensemble systems to maintain skill for these features beyond the 2-week limit',
            'Extended-range predictability is impossible beyond 2 weeks for any atmospheric variable; the theoretical Lorenz predictability limit applies universally to all scales and all time-averaging periods, meaning that week-3 and week-4 ensemble forecasts have no skill beyond climatology regardless of ensemble size or model resolution',
            'The primary sources of extended-range predictability are slowly evolving boundary conditions and large-scale circulation modes with intrinsic timescales longer than synoptic weather: the Madden-Julian Oscillation (MJO, 30–60 day period), stratospheric polar vortex anomalies (2–6 week tropospheric coupling timescale), soil moisture anomalies (weeks to months), sea ice extent, and sea surface temperature anomalies collectively provide probabilistic skill for weekly-averaged anomalies beyond the 2-week day-to-day predictability limit',
            'Extended-range predictability derives from the predictability of tropical precipitation — unlike mid-latitude weather, tropical convection is driven primarily by sea surface temperature gradients, which change slowly; ensemble models with accurate SST boundary conditions can therefore predict tropical rainfall patterns at 3–4 week lead times, and this tropical forcing then propagates to mid-latitudes via Rossby wave teleconnections within 1–2 weeks',
          ],
          correct: 2,
          explain: 'Option A claims large-scale synoptic features (blocking, cyclones) are predictable beyond 2 weeks — this is not supported by verification studies. Individual blocking events and cyclone tracks exceed the 2-week predictability horizon; extended-range skill requires slowly evolving forcing mechanisms, not larger synoptic features. Option B claims extended-range predictability is impossible beyond 2 weeks — this is the Lorenz predictability limit for day-to-day weather, but it does not apply to probabilistic weekly-averaged anomalies or variables influenced by slowly evolving boundary conditions. Operational verification confirms positive CRPSS for week-3/4 temperature anomalies, particularly in MJO-active periods. Option D is partially correct about SST-driven tropical predictability but understates the diversity of extended-range predictability sources and the role of extratropical processes. It also overstates tropical SST predictability (tropical convection is also strongly influenced by atmospheric internal variability). The correct answer is C: extended-range predictability (beyond ~2 weeks) does not come from the chaotic day-to-day atmospheric dynamics that dominate medium-range weather; it comes from slowly evolving forcing mechanisms with timescales longer than synoptic weather. The MJO is the most important source in the tropics — its 30–60-day eastward propagation provides predictable phase and amplitude signals at 3–4-week lead times, with associated extratropical teleconnections affecting precipitation and temperature at mid-latitudes. The stratospheric polar vortex provides 2–6-week predictability windows following sudden stratospheric warmings (Baldwin-Dunkerton mechanism). Soil moisture anomalies from recent precipitation persist for weeks and influence boundary layer heating and convection. Sea ice anomalies persist for months. These slowly evolving boundary conditions do not guarantee predictability for individual weather events — they shift the probability distribution of weather outcomes in a probabilistic sense that can be detected and communicated through well-calibrated ensemble systems and S2S prediction databases.',
        },
      ],
    },
  ],
}

export default ensembleForecastingUncertainty
