import { Globe, Activity, Thermometer, Droplets } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const catchmentWaterBalance: Lesson = {
  id: 'hyd-201-1-1-4',
  title: 'Catchment Water Balance and the Budyko Framework',
  track: 'geo',
  trackName: 'Advanced Hydrology',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: 'Annual water balance equation, potential vs actual evapotranspiration, the Budyko curve and aridity index, energy and water limits to AET, runoff ratio gradients across climates, streamflow elasticity to climate change, and the CAMELS dataset for catchment hydrology.',
  sources: [
    { org: 'USGS',    title: 'USGS Water Resources — National Streamflow Statistics',          url: 'https://www.usgs.gov/mission-areas/water-resources/science/national-streamflow-statistics' },
    { org: 'AGU',     title: 'Water Resources Research — Budyko Framework',                    url: 'https://agupubs.onlinelibrary.wiley.com/journal/19447973' },
    { org: 'NCAR',    title: 'CAMELS: Catchment Attributes and Meteorology for Large-sample Hydrology', url: 'https://ncar.github.io/hydrology/datasets/CAMELS_timeseries.html' },
    { org: 'Nature',  title: 'Budyko, M.I. (1974) — Climate and Life',                        url: 'https://www.sciencedirect.com/book/9780121394509/climate-and-life' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The planetary water ledger',
      body: `Every catchment keeps a water ledger. Precipitation deposits water into the catchment account; evapotranspiration and streamflow withdraw it; changes in soil moisture and groundwater storage represent the running balance. Over long periods, the accounts balance: what comes in as rain or snow must eventually leave as vapour or river flow. This simple bookkeeping, expressed mathematically as the **annual water balance**, is one of the most powerful tools in hydrology for understanding how catchments partition precipitation into runoff versus evapotranspiration — and for predicting how that partition will shift as climate changes.

**The annual water balance** for a catchment states: P = Q + ET + ΔS, where P is precipitation, Q is streamflow (runoff), ET is actual evapotranspiration, and ΔS is the change in water storage (soil moisture, groundwater, snow). Over multiple-year periods, storage changes average close to zero (ΔS → 0), simplifying to the long-term water balance: P ≈ Q + ET. This equation is deceptively simple. It tells us that once we know any two of the three variables — precipitation, streamflow, and evapotranspiration — we can infer the third. It also establishes the fundamental constraint governing catchment hydrology: evapotranspiration cannot exceed precipitation (the water limit) and cannot exceed the available energy to evaporate water (the energy limit).

**Evapotranspiration terminology.** Distinguishing between potential and actual evapotranspiration is critical. **Potential evapotranspiration (PET)** is the amount of evapotranspiration that would occur if water were unlimited — it is determined purely by available energy (solar radiation, temperature, humidity, wind) and is estimated by equations such as Penman-Monteith (the FAO standard), Hargreaves-Samani (temperature-based, data-sparse environments), or Priestley-Taylor (equilibrium ET over moist surfaces). **Actual evapotranspiration (AET)** is what really happens, constrained by both available energy and available water. In humid regions, AET ≈ PET (water is abundant, energy is the limit). In arid regions, AET << PET (water is scarce, not energy). The **Evaporative Index (EI = AET/P)** and its complement the **runoff coefficient (Q/P = 1 − AET/P)** describe the catchment's tendency to partition precipitation into evaporation versus streamflow.

**The Budyko (1974) framework** organises these relationships onto a single elegant diagram. The x-axis is the **aridity index** φ = PET/P — the ratio of potential evapotranspiration to precipitation. When φ < 1, the climate is humid (more water available than energy to evaporate it); when φ > 1, the climate is arid (more energy available than water). The y-axis is the evaporative index EI = AET/P. The Budyko curve traces the mean behaviour of catchments from perfectly humid (AET/P → 1 as φ → ∞) to perfectly arid (AET/P → φ = PET/P as φ → 0). Two limiting straight lines constrain all possible behaviour: the **water limit line** (AET = P, i.e., EI = 1, no runoff — all precipitation evaporates) and the **energy limit line** (AET = PET, i.e., EI = φ — evaporation is limited only by energy). All real catchments lie between these two limits, and the Budyko curve lies between them.

Mikhail Budyko's original formulation used a simple empirical curve: AET/P = [φ tanh(1/φ)(1 − e^(−φ))]^0.5. Later **parametric Budyko equations** — such as the Choudhury-Yang equation AET/P = 1/(1 + (P/PET)^n)^(1/n) and the Fu equation AET/P = 1 + φ − (1 + φ^ω)^(1/ω) — introduce a single shape parameter (n or ω) that captures the degree to which individual catchments deviate from the mean Budyko curve due to vegetation, soils, geology, and seasonality. These deviations are important: two catchments with the same aridity index φ can have very different runoff ratios depending on their underlying catchment characteristics.

**Streamflow elasticity** quantifies how sensitively runoff responds to changes in precipitation or PET — a key metric for predicting hydrological impacts of climate change. The precipitation elasticity of streamflow: ε_P = (∂Q/Q) / (∂P/P) = the fractional change in streamflow per unit fractional change in precipitation. For humid catchments (φ << 1), ε_P ≈ 1 (streamflow changes proportionally with precipitation). For semi-arid catchments (φ ≈ 1), ε_P ≈ 2–3 (a 1% change in precipitation causes a 2–3% change in streamflow — amplified sensitivity from the steep Budyko curve slope near the water limit). This amplification has profound implications: climate change projections that reduce precipitation by 5–10% in already-arid regions may reduce streamflow by 10–30%, severely threatening water supply for agriculture and urban areas.

The **CAMELS dataset** (Catchment Attributes and Meteorology for Large-sample Hydrology, Newman et al. 2015; Addor et al. 2017) provides standardised hydrometeorological data for 671 US catchments with 30+ years of daily records, spanning a wide range of climates and physiographies. CAMELS enables large-sample hydrology — statistical analysis of hydrological behaviour across many catchments — revealing systematic relationships between catchment attributes (geology, soils, land cover, topography) and hydrological signatures (mean annual runoff ratio, baseflow index, streamflow elasticity, flashiness). Similar datasets have since been compiled for Chile (CAMELS-CL), Brazil (CAMELS-BR), Great Britain (CAMELS-GB), and Australia (CAMELS-AUS), enabling global comparative catchment hydrology.`,
      keyTerms: [
        {
          term: 'annual water balance',
          def: 'P = Q + ET + ΔS, where P is precipitation, Q is streamflow, ET is actual evapotranspiration, and ΔS is change in water storage (soil moisture, groundwater, snow). Over multi-year periods ΔS → 0, giving the long-term balance P ≈ Q + ET. Establishes two constraints: AET ≤ P (water limit) and AET ≤ PET (energy limit). The runoff ratio Q/P = 1 − AET/P is the fraction of precipitation that becomes streamflow.',
        },
        {
          term: 'potential evapotranspiration (PET)',
          def: 'The evapotranspiration that would occur from a well-watered reference surface (short grass or open water) under prevailing atmospheric conditions if water supply were unlimited. Determined by available energy, temperature, humidity, and wind. Estimated using Penman-Monteith (FAO-56 standard), Hargreaves-Samani (temperature-only), or Priestley-Taylor (α × equilibrium ET). PET represents the atmospheric demand for water; AET is what the land surface can supply.',
        },
        {
          term: 'Budyko curve',
          def: 'An empirical relationship showing that catchment-mean actual evapotranspiration AET, normalised by precipitation P, is a function of the aridity index φ = PET/P. Proposed by Mikhail Budyko (1974) from analysis of river basins worldwide. The curve runs between two limits: the water limit (AET = P, all rain evaporates, no runoff) and the energy limit (AET = PET, ET is energy-constrained). Parametric extensions (Fu, Choudhury-Yang) add one free parameter to capture vegetation and soil effects.',
        },
        {
          term: 'aridity index (φ)',
          def: 'φ = PET/P, the ratio of potential evapotranspiration to mean annual precipitation. φ < 1: humid (water-limited only by energy); φ = 1: semi-arid boundary; φ > 1: arid (water-limited). Controls where catchments plot on the Budyko diagram and thus their long-term runoff ratio. Global range: Amazon φ ≈ 0.3 (very humid); Mediterranean φ ≈ 1.5–2.5 (semi-arid); Sahara φ > 10 (hyperarid). Increasing warming raises PET and thus φ, shifting catchments toward the arid end of the spectrum.',
        },
        {
          term: 'streamflow elasticity',
          def: 'ε = (∂Q/Q) / (∂P/P): the fractional change in mean annual streamflow per unit fractional change in precipitation. Derived analytically from the Budyko curve: ε_P = 1 + φ f\'(φ) / (f(φ) − φ f\'(φ)), where f(φ) = AET/P on the Budyko curve. Values: humid catchments ε ≈ 1; semi-arid ε ≈ 2–3. Implies that dryland catchments are disproportionately sensitive to precipitation variability and climate change — a 10% precipitation decline may cause a 20–30% streamflow decline.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'The Budyko framework: energy limits, water limits, and catchment partitioning',
      body: `**Two hard limits govern evapotranspiration.** No matter how sophisticated the soil-vegetation-atmosphere model, every catchment must obey two physical constraints. First, the **water limit**: actual evapotranspiration cannot exceed precipitation. If AET = P, there is no runoff. In practice, some precipitation always makes it to streams, so all real catchments fall slightly below the water limit line. Second, the **energy limit**: actual evapotranspiration cannot exceed the rate at which energy is available to evaporate water. The energy available for evapotranspiration is the net radiation Rn minus the ground heat flux G; dividing by the latent heat of vaporisation λ gives the maximum ET rate Rn/λ in mm/day (equivalently, PET ≈ Rn/λ for an open water surface by the Priestley-Taylor equation at α = 1). In very arid environments where soils are dry for most of the year, AET approaches the Priestley-Taylor equilibrium value limited by net radiation, not water supply.

**Reading the Budyko diagram.** The Budyko diagram is a scatterplot with φ = PET/P on the x-axis and EI = AET/P on the y-axis. The 1:1 diagonal (EI = φ) is the energy limit — along this line, AET = PET. The horizontal line at EI = 1 is the water limit — all rain evaporates. The Budyko curve runs from the lower-left (humid, φ → 0, AET/P → 0, Q/P → 1 — all rain becomes runoff) toward the upper-right (arid, φ → ∞, AET/P → 1, Q/P → 0 — all rain evaporates), always remaining between the two limit lines.

**Deviation from the Budyko curve** — catchments plotting above or below the mean — reflects ecological and geological controls. Catchments with deep-rooted vegetation (forests, savanna) plot above the curve (higher AET/P than predicted by φ alone): their roots access water stored in deep soil and bedrock, evaporating more than shallow-rooted grassland catchments in the same climate. Catchments with permeable geologies or high drainage density plot below the curve (lower AET/P, higher runoff ratio). Seasonal rainfall concentration also affects position: catchments where rain falls in winter (cold season) and ET demand peaks in summer (warm season) have lower AET/P than catchments where both peak together.

**Global runoff ratio patterns.** The Budyko curve's prediction of Q/P = 1 − AET/P translates directly to the global pattern of water availability. The Amazon basin (φ ≈ 0.3–0.5): Q/P ≈ 0.45–0.55, generating ~6,000 km³/yr of freshwater, the largest river discharge on Earth. The Congo basin (φ ≈ 0.6–0.8): Q/P ≈ 0.30–0.40, second largest river discharge. Mediterranean Europe (φ ≈ 1.5–2.0): Q/P ≈ 0.15–0.25, sensitive to any PET increase. Sahel (φ ≈ 3–5): Q/P ≈ 0.03–0.08, low but non-zero — seasonal high-intensity rains generate runoff before infiltration can absorb them. Central Australia (φ > 5): Q/P ≈ 0.01–0.03, with many years of zero streamflow in ephemeral systems.`,
      cards: [
        {
          name: 'Budyko Curve: AET/P = f(PET/P)',
          icon: Activity,
          color: BRAND.accent,
          desc: 'Original Budyko (1974): EI = [φ tanh(1/φ)(1 − e^−φ)]^0.5. Fu (1981) parametric: AET/P = 1 + φ − (1+φ^ω)^(1/ω), ω > 1. Choudhury-Yang: AET/P = 1/(1+(P/PET)^n)^(1/n). Fu ω → 1 approaches water-energy limit intersection; ω → ∞ approaches the piecewise linear limit. Median ω ≈ 2.5 globally. Catchment deviates above: deep roots, seasonality mismatch. Below: permeable geology, high drainage density.',
          examples: 'Amazon (φ=0.4): AET/P = 0.55, Q/P = 0.45 · Rhine (φ=1.0): AET/P ≈ 0.65, Q/P = 0.35 · Murray-Darling (φ=3.5): AET/P ≈ 0.95, Q/P ≈ 0.05 · Colorado (φ=2.2): AET/P ≈ 0.85, Q/P ≈ 0.15 · CAMELS: Fu ω ranges 1.4–4.5 across 671 US catchments',
        },
        {
          name: 'Energy and Water Limits to AET',
          icon: Thermometer,
          color: BRAND.jade,
          desc: 'Energy limit: AET ≤ Rn/λ ≈ PET. Priestley-Taylor: PET = α × (Δ/(Δ+γ)) × (Rn − G)/λ, α = 1.26 for well-watered surfaces. Penman-Monteith (FAO-56): full aerodynamic and radiation terms. Hargreaves: PET = 0.0023 × Ra × (T_max − T_min)^0.5 × (T_mean + 17.8). Water limit: AET ≤ P — if AET = P, Q = 0. Real catchments: both limits active simultaneously. Warm climate → higher PET → larger Budyko φ → more catchments water-limited → Q/P falls.',
          examples: 'Tropical Amazon: Rn ≈ 5 mm/day; PET ≈ 4.5 mm/day; P ≈ 8 mm/day → energy limited · Sahara: Rn ≈ 4 mm/day; PET ≈ 7 mm/day; P ≈ 0.5 mm/day → water limited · Penman-Monteith at Davis CA: PET = 1,200 mm/yr vs P = 450 mm/yr → φ = 2.7 · Global mean PET ≈ 1,100 mm/yr; global mean P ≈ 720 mm/yr (land); φ ≈ 1.5',
        },
        {
          name: 'Runoff Ratio Q/P Across the Globe',
          icon: Globe,
          color: BRAND.gold,
          desc: 'Q/P = 1 − AET/P. Humid (φ<0.5): Q/P 0.5–0.8 — most rain becomes runoff. Sub-humid (φ≈1): Q/P 0.25–0.45. Semi-arid (φ=2–3): Q/P 0.05–0.20. Arid (φ>3): Q/P <0.05. Global average Q/P ≈ 0.38 (Q ≈ 37,000 km³/yr from rivers; P ≈ 107,000 km³/yr land). Variability: catchment controls — geology, soils, vegetation — cause Q/P to vary by ±0.10–0.20 around Budyko prediction.',
          examples: 'Amazon at Obidos: Q/P = 0.48 (5,500 km³/yr) · Congo at Brazzaville: Q/P = 0.32 (1,300 km³/yr) · Rhine at Lobith: Q/P = 0.38 · Sacramento: Q/P = 0.35 (water year) · Colorado headwaters: Q/P = 0.50 (snow-fed) vs Colorado total: Q/P = 0.10 (internal losses) · Australia average: Q/P = 0.11 (high PET)',
        },
        {
          name: 'Streamflow Elasticity and Climate Change',
          icon: Droplets,
          color: BRAND.amethyst,
          desc: 'ε_P = (ΔQ/Q) / (ΔP/P). From Budyko: ε_P = 1 + φ·dEI/dφ / (EI − φ·dEI/dφ). Humid: ε ≈ 1. Semi-arid: ε ≈ 2–3. PET elasticity ε_PET = −ε_P × (AET/Q). Climate change: 2°C warming → PET +5–8%. Semi-arid catchment: +8% PET → −16–24% Q. Australia: ε_P ≈ 2.4 → 10% rainfall decline → 24% runoff decline. CMIP6 projections: Mediterranean, southwestern US, southern Africa → Q decline 20–50% by 2100 (SSP5-8.5).',
          examples: 'Murray-Darling: ε_P ≈ 2.8 — 1% rain change = 2.8% Q change · Western Cape, SA: ε_P ≈ 2.5; Cape Town 2018 "Day Zero" near-miss traced to 25% P reduction → 60% dam storage loss · Colorado River: 3% warming-driven PET increase 2000–2021 reduced Q by ~10% above P decline alone · CAMELS elasticity: Q/P ratio halved from wettest to driest quintile of catchments',
        },
      ],
    },
    {
      type: 'concept',
      title: 'CAMELS dataset and large-sample catchment hydrology',
      body: `**From case studies to statistical ensembles.** For most of hydrological history, insights came from intensive study of a handful of well-instrumented experimental catchments — Hubbard Brook, Coweeta, H.J. Andrews, Plynlimon. These catchments taught us the mechanisms of runoff generation, solute transport, and energy balance in detail. But they also introduced selection bias: experimental catchments were chosen partly for their scientific tractability, not their representativeness of broader landscapes.

The **large-sample hydrology** movement, enabled by open data policies at agencies like USGS and the UK Centre for Ecology and Hydrology, shifted the field toward statistical analysis of many catchments simultaneously. The CAMELS dataset (Catchment Attributes and Meteorology for Large-sample Hydrology) exemplifies this approach. For each of 671 hydro-climatically diverse US catchments, CAMELS provides: daily streamflow (from USGS gauges), daily meteorological forcings (precipitation, temperature, PET, solar radiation, humidity), and 59 catchment attributes spanning topography (slope, elevation, drainage density), land cover (forest fraction, vegetation height, leaf area index), soils (clay fraction, depth, hydraulic conductivity), geology (dominant rock type, permeability, porosity), and climatology (mean annual P, PET, and their seasonality).

**Systematic patterns from CAMELS.** Analysis across the 671 catchments reveals robust statistical relationships between catchment attributes and hydrological signatures. Geology exerts a strong control on baseflow index (BFI): catchments on sedimentary rocks with high porosity have BFI > 0.7; catchments on crystalline basement rock (granite, gneiss) average BFI ≈ 0.30–0.50; urban catchments with impervious cover can have BFI < 0.20. Forest fraction shows a U-shaped relationship with BFI: heavily forested catchments have higher ET but also higher infiltration, maintaining moderate BFI; deforested agricultural catchments often have lower BFI. Mean annual runoff ratio Q/P correlates most strongly with the aridity index φ (r² ≈ 0.80 across CAMELS), confirming that the Budyko framework captures the dominant climate control on water partitioning.

**Catchment response time** — the lag between the centroid of rainfall and the centroid of direct runoff, or the lag from storm centroid to peak discharge — integrates the effects of drainage density, channel slope, catchment elongation, and land cover. Dense drainage networks, steep slopes, short hillslope lengths, and sparse vegetation all reduce response time and make catchments more flashy (rapid peak, fast recession). The **flashiness index** (Baker et al. 2004) quantifies this: it is the mean of the absolute day-to-day changes in flow, normalised by total flow. Urban catchments are far flashier than their rural counterparts — impervious surfaces reduce response time from hours to minutes and eliminate the natural baseflow buffering of the soil matrix. This contrast between urban and rural flashiness is one of the most dramatic and well-documented consequences of land use change in catchment hydrology.

**Using CAMELS for model benchmarking.** The CAMELS dataset has become the standard benchmark for testing rainfall-runoff models, machine learning hydrological predictions, and hydrological model parameter regionalisation. Deep learning models (Long Short-Term Memory LSTM networks, Kratzert et al. 2019) trained on CAMELS across many catchments simultaneously outperform individually calibrated conceptual models (HBV, SAC-SMA) on most catchments, including ungauged basins when transferred using physical similarity approaches. This finding — that data-driven pattern learning across many catchments can outperform physics-based models calibrated individually — is reshaping how hydrologists approach prediction at ungauged basins.`,
      cards: [
        {
          name: 'CAMELS: 671 Catchments, 59 Attributes',
          icon: Globe,
          color: BRAND.accent,
          desc: 'US CAMELS (Newman et al. 2015; Addor et al. 2017): 671 minimally disturbed USGS catchments, 1980–2014. Attributes: topographic (DEM-derived slope, elevation, drainage density), land cover (NLCD forest, agricultural, urban %), soils (STATSGO clay/sand/silt, depth, porosity), geology (GLHYMPS permeability), climate (P, PET, T, seasonality). Global extensions: CAMELS-CL, CAMELS-BR, CAMELS-GB, CAMELS-AUS, CARAVAN (global synthesis). Standard ML hydrology benchmark.',
          examples: 'CAMELS aridity range: φ = 0.25 (Pacific NW rainforest) to 5.8 (Mojave-adjacent desert) · BFI range: 0.08 (impervious urban NY) to 0.97 (carbonate spring-fed FL) · Mean annual Q/P: 0.05–0.75 across 671 catchments · LSTM trained on CAMELS: median NSE = 0.838 vs HBV calibrated: NSE = 0.80 (Kratzert et al. 2019)',
        },
        {
          name: 'Catchment Response Time and Flashiness',
          icon: Activity,
          color: BRAND.coral,
          desc: 'Lag to centroid (LC): time from storm centroid to runoff centroid. Controlled by drainage density D_d (km/km²) and hillslope length L_h. Higher D_d → shorter travel paths → shorter LC. Urban flashiness: impervious surfaces reduce LC by 50–70%; Baker flashiness index increases 3–5× post-urbanisation. Baker flashiness = Σ|Qᵢ − Qᵢ₋₁| / ΣQᵢ. Bankfull recurrence interval shortens from ~2 yr (natural) to ~1.2–1.5 yr (urban) due to increased flood frequency.',
          examples: 'Chicago urban vs rural: time to peak 45 min vs 4 hr for same 50mm storm · Baltimore impervious cover 50%: 3× pre-development flood frequency · CAMELS flashiness: forest catchments 0.08–0.15; urban 0.25–0.40 · Rocky Mountain headwaters: LC = 3–8 hr (steep, high D_d) vs Gulf Coast lowlands: LC = 24–72 hr (low D_d, flat)',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'The Budyko framework: from catchment water balance to global runoff patterns',
      body: `Follow how precipitation is partitioned between evapotranspiration and streamflow across the full range of climates — from humid rainforests where most rain becomes river flow, to hyperarid deserts where nearly all rain evaporates. Each node represents a climate zone, process, or diagnostic; each edge represents a controlling relationship or analytical step. The Budyko framework organises all of this onto a single diagram whose two limiting lines — water and energy — constrain all catchment behaviour on Earth.`,
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Budyko water balance framework from precipitation inputs through energy and water limits to streamflow generation across global climate zones',
        nodes: [
          {
            id: 'precipitation',
            label: 'Precipitation Input (P)',
            description: 'Annual precipitation P (mm/yr) is the primary water input to the catchment. It ranges from <25 mm/yr in hyperarid deserts (Atacama, Sahara) to >6,000 mm/yr in tropical orographic belts (Cherapunji, India; Fiordland, New Zealand). Together with PET, it determines the aridity index φ = PET/P — the master variable controlling where a catchment plots on the Budyko diagram. Interannual variability in P drives variability in Q via the elasticity relationship; semi-arid catchments show amplified Q variability because they operate near the steep portion of the Budyko curve.',
            color: BRAND.accent,
          },
          {
            id: 'pet',
            label: 'Potential Evapotranspiration (PET)',
            description: 'PET (mm/yr) is the atmospheric demand for water — the evaporation that would occur from an unlimited water supply. It is controlled by net radiation, temperature, humidity, and wind. PET ranges from <300 mm/yr in cold humid regions (Arctic, Scotland) to >2,500 mm/yr in hot desert margins (Sahel, Arabian Peninsula). Climate warming increases PET everywhere (approximately +2–5% per °C of warming for Penman-Monteith), shifting the aridity index φ upward and reducing runoff ratios in already-marginal climates.',
            color: BRAND.gold,
          },
          {
            id: 'aridity-index',
            label: 'Aridity Index φ = PET / P',
            description: 'The aridity index φ = PET/P is the horizontal axis of the Budyko diagram and the primary organising variable of catchment hydrology. φ < 0.5: very humid (Amazon, Pacific NW); φ = 0.5–1.0: humid (most of Europe, eastern US); φ = 1.0–2.0: semi-arid (Mediterranean, SW US, S Africa); φ = 2.0–5.0: arid (Sahel, Australia interior, Argentina Pampas); φ > 5: hyperarid (Sahara, Atacama, Arabia). The Budyko curve maps φ to AET/P — and hence to Q/P = 1 − AET/P.',
            color: BRAND.amethyst,
          },
          {
            id: 'energy-limit',
            label: 'Energy Limit: AET ≤ PET',
            description: 'The energy limit states that actual evapotranspiration cannot exceed the available energy for evaporation, expressed as PET (the rate at which energy could evaporate water if it were freely available). In the Budyko diagram, the energy limit is the 1:1 diagonal line (EI = AET/P = φ = PET/P). Humid catchments (small φ) are constrained primarily by energy — they have abundant water but limited incoming radiation drives ET only up to the PET rate. Vegetation with deep roots and high stomatal conductance can push AET close to PET even in humid climates by accessing deep soil moisture and recycling precipitation efficiently.',
            color: BRAND.accentHot,
          },
          {
            id: 'water-limit',
            label: 'Water Limit: AET ≤ P',
            description: 'The water limit states that actual evapotranspiration cannot exceed precipitation — the catchment cannot evaporate water it does not have. In the Budyko diagram, the water limit is the horizontal line at EI = 1 (AET/P = 1, meaning all precipitation evaporates and Q = 0). Arid catchments (large φ) are constrained primarily by water — they have abundant energy but insufficient precipitation to sustain high AET. Plants in arid environments reach the water limit and reduce transpiration through stomatal closure, CAM photosynthesis, deep root systems, and leaf area reduction under drought stress.',
            color: BRAND.ruby,
          },
          {
            id: 'budyko-curve',
            label: 'Budyko Curve: AET/P = f(φ)',
            description: 'The Budyko curve describes the mean relationship between aridity (φ) and evaporative fraction (AET/P) across many catchments worldwide. It runs between the two limiting lines: from the origin (humid: φ → 0, AET/P → 0, all rain becomes runoff) toward the water limit (arid: φ → ∞, AET/P → 1, all rain evaporates). Individual catchments scatter around the curve based on vegetation type (deep-rooted → above curve), geology (permeable → below curve), seasonality, and human land use. The Fu parametric form AET/P = 1 + φ − (1 + φ^ω)^(1/ω) fits individual catchments with one free parameter ω (median ≈ 2.5 globally).',
            color: BRAND.coral,
          },
          {
            id: 'aet-partition',
            label: 'Actual Evapotranspiration (AET)',
            description: 'AET is the water lost from the catchment by evaporation from soil and water surfaces plus transpiration through plant stomata. AET = min(PET, P) approximately — but the Budyko framework provides a more nuanced view of how AET interpolates between the energy and water limits. Global mean AET over land is approximately 480 mm/yr (of 720 mm/yr mean precipitation), generating approximately 36,000 km³/yr of streamflow. AET is the largest outflow from most catchments by volume, yet it is the hardest variable to measure directly (typically inferred as P − Q − ΔS from the water balance, or estimated from remote sensing products such as MODIS ET and GLEAM).',
            color: BRAND.jade,
          },
          {
            id: 'runoff-ratio',
            label: 'Runoff Ratio Q/P = 1 − AET/P',
            description: 'The runoff ratio Q/P is the complement of the evaporative index — it represents the fraction of annual precipitation that leaves the catchment as streamflow rather than vapour. It varies from >0.70 for wet, energy-limited catchments (Pacific NW, Scandinavia, Amazon headwaters) to <0.02 for arid, water-limited catchments (central Australia, Sahel, Kalahari). The runoff ratio is the key output variable for water resource planning: multiplied by catchment area and precipitation, it gives mean annual streamflow — the renewable freshwater supply available for human use, irrigation, and ecosystem maintenance.',
            color: BRAND.accent,
          },
          {
            id: 'climate-change-arrow',
            label: 'Climate Change: Warming Shifts φ Rightward',
            description: 'Global warming raises temperatures and hence PET everywhere (approximately 2–5% per °C via Penman-Monteith). With precipitation changes uncertain and smaller than PET changes in many regions, φ = PET/P increases — catchments shift rightward on the Budyko diagram. In humid catchments (already operating on the steeply sloped part of the Budyko curve), a small rightward shift produces a modest runoff decline. In semi-arid catchments (operating near the inflection in the curve where the slope is steep), the same φ increase produces a much larger runoff decline — the amplification captured by streamflow elasticity ε ≈ 2–3. CMIP6 projections for already-arid regions (Mediterranean, SW US, southern Africa, SE Australia) project runoff reductions of 20–50% under high emissions by 2100.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'precipitation',    to: 'aridity-index',      label: 'P enters denominator of aridity index φ = PET/P' },
          { from: 'pet',              to: 'aridity-index',      label: 'PET enters numerator of φ; warming raises PET and shifts φ rightward' },
          { from: 'aridity-index',    to: 'energy-limit',       label: 'φ < 1: humid catchment operates on energy-limited portion of Budyko space' },
          { from: 'aridity-index',    to: 'water-limit',        label: 'φ > 1: arid catchment operates near water-limited portion; AET → P' },
          { from: 'energy-limit',     to: 'budyko-curve',       label: 'energy limit sets upper bound on AET/P for humid catchments (diagonal line)' },
          { from: 'water-limit',      to: 'budyko-curve',       label: 'water limit sets upper bound on AET/P for arid catchments (horizontal line at 1)' },
          { from: 'budyko-curve',     to: 'aet-partition',      label: 'Budyko curve predicts AET/P = f(φ); multiply by P to get catchment mean AET (mm/yr)' },
          { from: 'aet-partition',    to: 'runoff-ratio',       label: 'Q/P = 1 − AET/P; multiply by P × A to get mean annual streamflow volume (m³/yr)' },
          { from: 'climate-change-arrow', to: 'aridity-index',  label: 'warming increases PET → φ shifts right → runoff ratio decreases; amplified in semi-arid zones by high elasticity ε ≈ 2–3' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'In the long-term water balance P = Q + ET + ΔS, what happens to ΔS over multi-year averaging, and what does this imply for the relationship between precipitation, streamflow, and evapotranspiration?',
          a: [
            'Over multi-year averaging, ΔS increases steadily as groundwater aquifers fill from annual recharge; this means that P > Q + ET in the long run and the difference ΔS represents the accumulation of groundwater that will eventually be discharged to the ocean over geological timescales',
            'Over multi-year periods, ΔS → 0 because the catchment cannot accumulate or deplete water storage indefinitely; the long-term balance simplifies to P ≈ Q + ET, meaning all precipitation must leave the catchment either as streamflow or as evapotranspiration — this constrains the possible range of runoff ratios Q/P to the interval [0, 1]',
            'ΔS over multi-year periods is equal to the baseflow recession constant k multiplied by mean annual precipitation; for humid catchments this is large (aquifer stores fill each year) while for arid catchments it is negligible, so arid catchments follow P ≈ Q + ET but humid catchments do not',
            'ΔS is always positive because evapotranspiration removes water from storage faster than precipitation replaces it; as a result, Q = P − ET − ΔS is always less than P − ET, meaning the water balance equation overestimates streamflow unless the storage depletion term is measured and subtracted',
          ],
          correct: 1,
          explain: 'Option A is incorrect: groundwater aquifers do not fill indefinitely — they reach a dynamic equilibrium where average recharge equals average discharge (to streams, springs, and deep drainage). Hydrological storage is bounded, and over multi-year periods the mean change in storage approaches zero. Option C is incorrect on two counts: ΔS is not equal to k × P (k is the recession constant in the flow equation Q = Q₀e^(−t/k), not a storage accumulation parameter), and the claim that humid catchments have large positive ΔS over multi-year periods is incorrect — both humid and arid catchments converge to ΔS ≈ 0 over sufficient averaging periods. Option D is incorrect: ΔS is not systematically positive. On average over many years, ΔS oscillates around zero — wetter-than-average years add to storage, drier-than-average years draw it down. ET does not systematically deplete storage; it is fully replaced by precipitation in the long-term average. The correct answer is B: over periods of many years (typically 10+ years to average out drought-to-wet-year storage fluctuations), hydrological storage in a catchment neither fills indefinitely nor empties completely — the mean ΔS/year → 0. This is simply because storage is bounded: a finite soil, groundwater, and snowpack system cannot accumulate or lose water forever. With ΔS → 0, the water balance collapses to P ≈ Q + ET, giving the fundamental constraint: every millimetre of precipitation must leave as either vapour (ET) or liquid water flowing to the sea (Q). This means Q/P + ET/P = 1, so the runoff ratio Q/P and evaporative index ET/P are complements constrained to the interval [0,1]. The Budyko framework builds directly on this constraint, showing how the long-term partition between Q and ET is determined by the aridity index φ = PET/P.',
        },
        {
          q: 'What is the aridity index φ = PET/P and how does it determine where a catchment plots on the Budyko diagram?',
          a: [
            'The aridity index φ = PET/P is the ratio of potential evapotranspiration to precipitation; when φ < 1 the climate is humid (energy limits evapotranspiration because water supply exceeds atmospheric demand) and catchments plot on the left side of the Budyko curve with high Q/P; when φ > 1 the climate is arid (water limits evapotranspiration because demand exceeds supply) and catchments plot on the right side with low Q/P',
            'The aridity index φ = PET/P is the ratio of actual evapotranspiration to precipitation; when φ < 1 the catchment generates more runoff than it evapotranspires (humid), and when φ > 1 the catchment evapotranspires more than it receives as precipitation (impossible by the water balance constraint, but observed when deep groundwater is tapped)',
            'The aridity index φ = PET/P represents the fraction of incoming solar radiation used for evapotranspiration; φ < 1 means less than 100% of radiation drives ET (some is used for sensible heating and soil warming), while φ > 1 is physically impossible because more energy cannot be used for ET than arrives as radiation',
            'The aridity index φ = PET/P is dimensionless and measures the Bowen ratio (sensible-to-latent heat flux ratio) at the land surface; humid catchments have Bowen ratios less than 1 (latent heat dominates), while arid catchments have Bowen ratios greater than 1 (sensible heat dominates), consistent with φ < 1 and φ > 1 respectively',
          ],
          correct: 0,
          explain: 'Option B has the definition wrong: the aridity index uses PET (potential, not actual evapotranspiration) in the numerator. Actual ET is bounded by both P and PET, so it cannot exceed P — meaning AET/P ≤ 1 always. The observation that AET > P is physically impossible on a multi-year average (water cannot disappear faster than it arrives) — though it can happen briefly in specific circumstances such as irrigation from imported water. Option C conflates PET (which has units of mm/yr — a volume rate) with a fraction of solar radiation (which has units of W/m²). PET is the amount of water that could be evaporated given available energy; it is not dimensionless and cannot be directly equated to the fraction of radiation used. φ > 1 is perfectly physically possible and common — it simply means that the atmosphere has energy to evaporate more water than actually falls as rain. Option D confuses the aridity index with the Bowen ratio. The Bowen ratio β = H/LE (sensible heat / latent heat) is related to aridity (arid catchments have β > 1, humid have β < 1) but is not equal to PET/P. The Bowen ratio is determined by land surface temperature, humidity, and aerodynamic resistance, not just precipitation and potential ET. The correct answer is A: the aridity index φ = PET/P is the ratio of potential evapotranspiration (atmospheric demand for water) to precipitation (water supply). When φ < 1, the supply of water exceeds atmospheric demand — the landscape is persistently moist, and evapotranspiration is limited by energy, not water availability (AET ≈ PET). These energy-limited catchments (Amazon, Pacific Northwest, Scandinavia) plot on the left side of the Budyko diagram with Q/P of 0.4–0.8. When φ > 1, atmospheric demand exceeds supply — the landscape is dry for significant portions of the year, and evapotranspiration is water-limited (AET < PET; AET ≈ P). These water-limited catchments (Australia, Sahel, Mediterranean) plot on the right side of the Budyko curve with Q/P of 0.01–0.20. The Budyko curve shows that as φ increases from 0 to ∞, AET/P increases from 0 toward 1 (and Q/P decreases from 1 toward 0), always remaining between the water limit (AET/P = 1) and the energy limit (AET/P = φ).',
        },
        {
          q: 'What does streamflow elasticity ε = (ΔQ/Q) / (ΔP/P) mean, and why is it higher for semi-arid catchments than for humid catchments?',
          a: [
            'Streamflow elasticity ε measures the fractional change in streamflow per unit fractional change in precipitation; it is higher in semi-arid catchments (ε ≈ 2–3) than humid catchments (ε ≈ 1) because the Budyko curve is steeply sloped near the water limit (φ ≈ 1), meaning a small change in precipitation produces a disproportionately large change in the water available for streamflow — runoff responds more sensitively to precipitation in already-dry catchments',
            'Streamflow elasticity ε measures the fractional change in streamflow per unit fractional change in potential evapotranspiration; it is higher in semi-arid catchments because vegetation is more sensitive to heat stress in dry climates, reducing transpiration more dramatically under warming and freeing more water for streamflow',
            'Streamflow elasticity ε measures the absolute change in annual streamflow (mm) per unit change in annual precipitation (mm); it equals 1 for all catchments on the Budyko curve and deviates from 1 only for catchments with unusual soils or geology; the observed higher values in semi-arid catchments simply reflect measurement error due to the difficulty of accurately measuring low streamflows',
            'Streamflow elasticity ε is the complement of the evaporative fraction: ε = 1 − AET/P; since semi-arid catchments have high AET/P (most precipitation evaporates), their ε is actually lower than humid catchments, reflecting the fact that a 1% change in precipitation produces less than 1% change in streamflow when most precipitation is being evaporated',
          ],
          correct: 0,
          explain: 'Option B describes PET elasticity (ε_PET), not precipitation elasticity (ε_P). PET elasticity has a different formula and physical meaning: ε_PET = −(AET/Q) × (∂AET/∂PET). It is negative (higher PET reduces streamflow) and is also larger in magnitude for semi-arid catchments. But the question asks about ε_P, which is the response to precipitation changes, not PET changes. Option C is incorrect in two ways: (1) ε is defined as a fractional change ratio (dimensionless elasticity), not an absolute ratio — it measures ΔQ/Q divided by ΔP/P, not ΔQ/ΔP; (2) ε is NOT equal to 1 for all catchments on the Budyko curve — it varies from approximately 1 in very humid catchments to 2–3 in semi-arid catchments, precisely because of the varying slope of the Budyko curve. Option D has the formula wrong. The complement of AET/P is Q/P (the runoff ratio), not streamflow elasticity. Streamflow elasticity is not simply 1 − AET/P. Moreover, the implied direction is backwards: semi-arid catchments do have high AET/P, but their streamflow elasticity ε_P is higher, not lower, than humid catchments. The correct answer is A: precipitation elasticity ε_P = (ΔQ/Q) / (ΔP/P) measures how sensitively streamflow responds to rainfall variability — it is the slope of the Q–P relationship in fractional (relative) terms. For a humid catchment with Q/P ≈ 0.60 and AET/P ≈ 0.40, the Budyko curve is relatively flat — a 1% increase in P increases Q by about 1% (ε ≈ 1). For a semi-arid catchment with Q/P ≈ 0.10 and AET/P ≈ 0.90, the catchment is near the steep portion of the Budyko curve, where the transition from the water-limit line (slope 0) to the energy-limit line (slope 1) occurs rapidly. Here a 1% increase in P translates to a 2–3% increase in Q because AET can barely absorb more water (it is at or near PET), so most of the additional precipitation flows directly to streams. This amplification — quantified by ε ≈ 2–3 — is why semi-arid and arid catchments are highly vulnerable to precipitation reductions from climate change: a 10% decline in P causes a 20–30% decline in Q, with severe consequences for water security.',
        },
        {
          q: 'What is the CAMELS dataset and how has it transformed hydrological research?',
          a: [
            'CAMELS is the Coupled Atmosphere-Modelling-and-Energy-Land-Surface model, a global climate model that simulates the hydrological cycle at 25 km spatial resolution; it has transformed hydrology by providing the first fully coupled land-atmosphere simulations of evapotranspiration for all major river basins, allowing direct validation against streamflow observations',
            'CAMELS (Catchment Attributes and Meteorology for Large-sample Hydrology) is a standardised, openly available dataset of daily streamflow, meteorological forcings, and 59+ catchment attributes for 671 US catchments spanning 30+ years; it enabled large-sample comparative catchment hydrology, systematic model benchmarking, and training of machine learning models that outperform individually calibrated conceptual models',
            'CAMELS is a field measurement protocol (Catchment Automatic Multi-parameter Experimental Logging System) for real-time monitoring of catchment hydrology; it standardises sensor networks for soil moisture, groundwater, streamflow, and ET across 671 USGS experimental watersheds, providing the data backbone for operational flood forecasting',
            'CAMELS represents a single large-scale hydrological experiment conducted across 671 catchments simultaneously from 2010–2015; experimental forest harvesting, prescribed burning, and irrigation were applied across subsets of catchments to measure the causal effects of land cover change on streamflow generation',
          ],
          correct: 1,
          explain: 'Option A describes a numerical climate model (which might use the acronym CAMELS for its components), but the actual CAMELS dataset described in this lesson is not a climate model — it is an observational data compilation. Option C misidentifies CAMELS as a real-time monitoring protocol or sensor network. CAMELS is a static dataset compiled from existing gauge networks (primarily USGS), not a new monitoring system or instrument deployment. Option D describes a manipulative experiment, which CAMELS is not. CAMELS catchments were selected specifically as minimally disturbed catchments (limited human influence) to provide natural baseline hydrological behaviour — they were not subject to experimental manipulation. The correct answer is B: CAMELS (Catchment Attributes and Meteorology for Large-sample Hydrology) was assembled by NCAR and collaborators (Newman et al. 2015; Addor et al. 2017) as an open benchmark dataset. For 671 hydro-climatically diverse, minimally disturbed US catchments, it provides: daily streamflow records from USGS gauges (mostly 1980–2014, some longer); daily meteorological forcings (precipitation, temperature, PET, radiation) from gridded products; and 59 catchment attributes spanning topography, land cover, soils, geology, and climatology. This enabled "large-sample hydrology" — instead of intensive study of a few experimental catchments, researchers could analyse 671 simultaneously, discovering statistically robust relationships between catchment attributes and hydrological signatures. The dataset became the standard benchmark for rainfall-runoff models (comparing HBV, VIC, SAC-SMA, and others) and, most notably, enabled Kratzert et al. (2019) to demonstrate that LSTM deep learning models trained across many catchments outperform individually calibrated conceptual models on most validation catchments — including genuinely ungauged sites when transferred using physical similarity approaches. CAMELS has since spawned global extensions (CAMELS-CL, CAMELS-BR, CAMELS-GB, CAMELS-AUS, and the global CARAVAN dataset), creating a worldwide infrastructure for comparative catchment hydrology.',
        },
        {
          q: 'How does the Budyko framework predict the impact of climate warming on streamflow, and which catchments are most vulnerable?',
          a: [
            'Climate warming uniformly increases precipitation globally by enhancing atmospheric moisture holding capacity (Clausius-Clapeyron: 7% more moisture per °C), which shifts all catchments leftward on the Budyko diagram (lower φ = PET/P) and universally increases runoff ratios — humid catchments benefit most because they already have high runoff efficiency',
            'Climate warming raises PET by increasing atmospheric evaporative demand, shifting φ = PET/P rightward on the Budyko diagram; where precipitation decreases as well (projected for Mediterranean, SW US, southern Africa), both effects reduce Q/P; the most vulnerable catchments are those in semi-arid climates (φ ≈ 1–2) because they have the steepest portion of the Budyko curve and the highest streamflow elasticity (ε ≈ 2–3), amplifying precipitation changes by 2–3× in Q',
            'Climate warming has opposite effects on humid vs arid catchments: humid catchments lose streamflow because warming increases PET above precipitation (pushing AET past the water limit), while arid catchments gain streamflow because warming increases convective rainfall intensity, reducing the aridity index φ',
            'The Budyko framework cannot be used to predict climate change impacts on streamflow because it assumes stationarity (constant catchment attributes over time); since vegetation, soils, and land use change under warming, the catchment-specific Fu parameter ω changes, invalidating any prediction from the mean Budyko curve',
          ],
          correct: 1,
          explain: 'Option A is incorrect on two counts. First, while the Clausius-Clapeyron relationship does link atmospheric moisture capacity to temperature, actual precipitation changes are highly regional — many subtropical and mid-latitude regions are projected to receive less precipitation (not more) under warming. Second, even where precipitation increases, PET increases faster at many locations, so φ = PET/P can still increase. The statement that "all catchments shift leftward" is contradicted by projections showing Mediterranean and SW US drying. Option C has contradictory physics. Humid catchments cannot "lose streamflow because warming pushes AET past the water limit" — the water limit is absolute: AET cannot exceed P, so AET/P cannot exceed 1. If warming increases PET, AET may increase toward P (reducing Q/P toward 0), but AET cannot exceed P. The claim that arid catchments gain streamflow because "warming increases convective rainfall intensity" partially reflects one climate signal (intensification of extreme events) but misrepresents the dominant direction: most arid and semi-arid regions face precipitation declines and PET increases. Option D overstates the limitation. While the Budyko framework assumes that vegetation and soil properties are captured by the Fu parameter ω (and ω may shift under climate change), the framework is still highly useful for scenario analysis: it identifies which catchments are most sensitive to precipitation and PET changes, and the directional predictions (semi-arid catchments lose proportionally more Q than humid ones) are robust to moderate changes in ω. The correct answer is B: climate warming raises PET primarily through increased atmospheric evaporative demand (higher temperatures, reduced relative humidity in some regions). This raises φ = PET/P for all catchments where precipitation does not increase proportionally — particularly in subtropical and mid-latitude dry regions where CMIP6 models project precipitation declines alongside PET increases. As φ increases, catchments shift rightward on the Budyko diagram; the Q/P = 1 − AET/P ratio decreases. The critical insight is that the Budyko curve is not linear: its slope is steepest near φ ≈ 1 (the semi-arid transition zone). Catchments in this zone — Mediterranean Europe, SW US, southern Africa, SE Australia — have streamflow elasticities of ε_P ≈ 2–3. This means a 10% precipitation decline causes a 20–30% streamflow decline, and a 5% PET increase (from ~1°C warming) may cause an additional 10–15% streamflow decline. By contrast, very humid catchments (φ << 1) have ε ≈ 1 — proportional response — and very arid catchments (φ >> 1) have nearly zero Q to lose. The "semi-arid amplification zone" is where water security risk is most acute: places like the Murray-Darling Basin (Australia), Colorado River basin (US), and Iberian Peninsula face 20–50% runoff reductions by 2100 under high-emissions scenarios, driven by the combined effect of modest precipitation declines and significant PET increases amplified by high streamflow elasticity.',
        },
      ],
    },
  ],
}

export default catchmentWaterBalance
