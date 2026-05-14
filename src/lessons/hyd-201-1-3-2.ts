import { Globe, Layers, Activity, Zap, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const hydrologicalExtremes: Lesson = {
  id: 'hyd-201-1-3-2',
  title: 'Hydrological Extremes: Floods and Droughts',
  track: 'geo',
  trackName: 'Advanced Hydrology',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: 'Flood frequency analysis, extreme value statistics, non-stationary design floods, compound flooding, and modern drought metrics — the quantitative tools for assessing water extremes in a changing climate.',
  sources: [
    { org: 'WMO',    title: 'WMO Manual on Flood Forecasting and Warning',                                        url: 'https://library.wmo.int/records/item/35927-manual-on-flood-forecasting-and-warning' },
    { org: 'NOAA',   title: 'NOAA NCEI — Billion-Dollar Weather and Climate Disasters',                           url: 'https://www.ncei.noaa.gov/access/billions/' },
    { org: 'WWA',    title: 'World Weather Attribution — 2021 Pacific Northwest Heat Dome',                       url: 'https://www.worldweatherattribution.org/western-north-american-extreme-heat-virtually-impossible-without-human-caused-climate-change/' },
    { org: 'GRACE',  title: 'NASA GRACE-FO — Terrestrial Water Storage Anomalies',                               url: 'https://grace.jpl.nasa.gov/' },
    { org: 'IPCC',   title: 'IPCC AR6 WG1 Chapter 11 — Weather and Climate Extreme Events',                      url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/chapter-11/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The statistics of rare events: how engineers and scientists quantify floods, droughts, and the extremes that infrastructure must withstand',
      body: `Hydrological extremes — floods that overwhelm rivers and droughts that drain them — are the most economically and ecologically consequential phenomena in hydrology. Quantifying their frequency and magnitude is central to infrastructure design, water management, and climate risk assessment. The statistical framework of extreme value theory provides the mathematical foundation.

Flood frequency analysis fits probability distributions to observed peak flow records. The classical approach uses the Annual Maximum Series (AMS) — one peak per year — or the Peaks Over Threshold (POT) method (also called the Partial Duration Series), which fits a Generalised Pareto Distribution (GPD) to all peaks above a defined threshold. The GPD can capture more of the extremal behaviour in short records by using multiple events per year. The Generalised Extreme Value (GEV) distribution governs AMS data and has three forms depending on its shape parameter ξ: when ξ = 0, the distribution is Gumbel (exponential tail, used for light-tailed processes); when ξ > 0, it is Fréchet (heavy algebraic tail, appropriate for rivers with extreme flood potential); when ξ < 0, it is Weibull (bounded upper tail, rare in hydrology). Parameter estimation historically used method of moments or maximum likelihood; L-moments estimation (probability-weighted moments) is now widely preferred because it is more robust to outliers and small samples, which are common in hydrology.

Traditional frequency analysis assumed stationarity — that the statistical properties of floods do not change through time. The recognition that climate, land use, and catchment characteristics are changing has driven the development of non-stationary frequency analysis. Non-stationary GEV models allow the location (μ), scale (σ), and shape (ξ) parameters to vary as functions of time or climate covariates such as the Atlantic Multidecadal Oscillation (AMO), El Niño-Southern Oscillation (ENSO) indices, or simple trend terms. This allows the estimated 100-year flood to evolve through time as the climate state changes, producing time-varying flood frequency curves that better reflect actual risk.

Compound flooding — the co-occurrence of two or more distinct flood-generating mechanisms — poses challenges that univariate frequency analysis cannot address. Hurricane Harvey (2017) devastated Houston through the combination of extreme rainfall (producing pluvial flooding) and a storm surge from the Gulf Coast that prevented drainage: neither mechanism alone was sufficient to explain the inundation. Compound drought-heat events (Europe 2003, 2018) are similarly more damaging than either drought or heat alone because high temperatures increase transpiration demand and reduce the productivity benefit of any residual soil moisture. The Probable Maximum Precipitation (PMP) and Probable Maximum Flood (PMF) concepts — used for dam safety design — represent the theoretically largest precipitation and flood that could occur in a given watershed, determined by maximising the moisture efficiency of observed historical storms, and are used when consequences of failure (a dam breach) are catastrophic.

Drought types form a progression: meteorological drought (precipitation deficit), which leads to agricultural drought (soil moisture deficit affecting crops), which leads to hydrological drought (reduced streamflow and groundwater levels), which ultimately manifests as socioeconomic drought (water demand exceeds supply). Tracking this cascade requires multiple indices. The Palmer Drought Severity Index (PDSI) integrates a simplified water balance. The Standardised Precipitation Index (SPI) quantifies precipitation departures at multiple timescales (1, 3, 6, 12, 24 months), making it versatile for different drought types. The SPEI (Standardised Precipitation Evapotranspiration Index) incorporates potential evapotranspiration, capturing the warming-driven "demand drought" signal that PDSI and SPI miss. The 2012 US drought — the worst since the Dust Bowl — affected approximately 65% of the contiguous US and caused ~$30 billion in agricultural losses. Flash droughts — droughts that develop over 2–4 weeks rather than months — are increasingly recognised: the 2012 and 2016 Southeast US flash droughts developed rapidly from near-normal conditions through a combination of precipitation deficits and anomalously high evapotranspiration driven by hot, dry air masses. Satellite-based monitoring has transformed drought tracking: GRACE measures terrestrial water storage anomalies from gravity changes; MODIS and Landsat provide vegetation stress and snow cover; GPM measures precipitation globally; VIC and Noah land surface models generate soil moisture estimates at continental scale.`,
      keyTerms: [
        {
          term: 'Generalised Extreme Value (GEV) Distribution',
          def: 'Probability distribution governing annual maximum flood series. Contains three forms: Gumbel (ξ=0), Fréchet (ξ>0, heavy tail), and Weibull (ξ<0, bounded). Shape parameter ξ is estimated from data.',
        },
        {
          term: 'L-Moments',
          def: 'Linear combinations of order statistics used to estimate GEV and other extreme value distribution parameters. More robust than conventional moments for small, outlier-prone hydrological records.',
        },
        {
          term: 'Non-Stationary Frequency Analysis',
          def: 'Flood frequency approach where GEV parameters vary as functions of time or climate covariates (AMO, ENSO, trend terms), producing time-varying flood return period estimates.',
        },
        {
          term: 'Compound Flooding',
          def: 'Co-occurrence of two or more flood-generating mechanisms (e.g., river flood + storm surge, drought + heat wave) whose joint probability and joint impacts exceed those of individual hazards.',
        },
        {
          term: 'SPEI (Standardised Precipitation Evapotranspiration Index)',
          def: 'Drought index combining precipitation deficit with evapotranspiration demand at multiple timescales. Captures warming-driven "demand drought" that precipitation-only indices miss.',
        },
        {
          term: 'Flash Drought',
          def: 'A drought that develops over 2–4 weeks through rapid soil moisture depletion driven by anomalous precipitation deficit combined with high evapotranspiration. More difficult to forecast than slow-onset droughts.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Flood Frequency Analysis: Statistics of Extremes',
      body: `Estimating how often catastrophic floods occur — and how that frequency may change — requires careful application of extreme value statistics. The choice of sampling method, distribution family, parameter estimation technique, and stationarity assumption all substantially affect the resulting return period estimates that govern infrastructure design and flood mapping.`,
      cards: [
        {
          name: 'AMS vs POT Sampling',
          icon: Layers,
          color: BRAND.accent,
          desc: 'Annual Maximum Series: one peak per year, fitted to GEV. Peaks Over Threshold: all peaks above a threshold, fitted to GPD. POT extracts more information from short records; AMS is simpler and most widely used in regulatory contexts.',
          examples: 'A 30-year AMS record has 30 data points. A POT analysis with a threshold capturing 3 peaks per year on average has 90 data points — a 3× increase that substantially reduces parameter estimation uncertainty for the GEV tail.',
        },
        {
          name: 'GEV Distribution Forms',
          icon: Activity,
          color: BRAND.jade,
          desc: 'ξ=0 (Gumbel): light exponential tail. ξ>0 (Fréchet): heavy power-law tail — extreme floods possible. ξ<0 (Weibull): upper-bounded distribution — rarest in hydrology. Most rivers have ξ in the range −0.2 to +0.3.',
          examples: 'UK rainfall extremes: ξ typically 0.1–0.2 (moderately heavy-tailed Fréchet). Mediterranean: ξ can exceed 0.3, indicating heavy-tailed behaviour — flash floods of disproportionate magnitude relative to mean flow are more likely than Gumbel would suggest.',
        },
        {
          name: 'Non-Stationary GEV',
          icon: Globe,
          color: BRAND.coral,
          desc: 'Allow μ(t), σ(t), or ξ to vary with time or climate indices. AMO or ENSO covariates capture multi-decadal flood modulation. Trend terms capture gradual urbanisation or land use change. Time-varying return periods are more honest about evolving risk.',
          examples: 'US Gulf Coast rivers: incorporating Atlantic Multidecadal Oscillation index as a covariate in GEV reduces the 100-year flood estimate during AMO cold phase and raises it during warm phase. Upper Missouri: incorporating snow-water-equivalent as a covariate improves spring flood frequency estimation.',
        },
        {
          name: 'Compound Flooding: Harvey 2017',
          icon: Zap,
          color: BRAND.gold,
          desc: 'Hurricane Harvey: extreme rainfall (1,320 mm in 4 days over Houston) coincided with Gulf storm surge blocking bayou drainage. Neither event alone explains observed inundation depth. Copula models are used to estimate joint exceedance probabilities of two dependent hazards.',
          examples: 'Harvey: 25-trillion-gallon total rainfall. Copula analysis showed the joint probability of the rainfall amount AND storm surge magnitude was approximately 1 in 1,000 years. Univariate analysis of each component gave misleadingly lower risk estimates.',
        },
        {
          name: 'PMP and PMF for Dam Safety',
          icon: ArrowRight,
          color: BRAND.amethyst,
          desc: 'Probable Maximum Precipitation: derived by moisture-maximising historical storm transposition over a watershed — the largest storm physically possible. PMF is the resulting flood. Used for spillway design at large dams where failure is catastrophic.',
          examples: 'Oroville Dam (California) 2017: record storms generated flows exceeding design capacity of the main spillway. The emergency spillway, not designed for sustained flow, was activated for the first time and partially failed, forcing evacuation of 188,000 people downstream.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Drought Types, Indices, and Attribution',
      body: `Drought is not a single phenomenon but a cascade of deficits progressing from the atmosphere through the soil column to streams and groundwater. Each stage requires different metrics, different monitoring approaches, and different management responses. Attribution science has begun quantifying how climate change alters drought probability and severity.`,
      cards: [
        {
          name: 'Drought Progression: Four Types',
          icon: Layers,
          color: BRAND.accent,
          desc: 'Meteorological (precipitation deficit) → Agricultural (soil moisture deficit) → Hydrological (streamflow/groundwater deficit) → Socioeconomic (supply < demand). Each type lags the previous by weeks to months. Groundwater droughts can persist for years after precipitation recovers.',
          examples: '2012 US drought: meteorological drought in April became agricultural drought in June (65% of US in drought by July), then hydrological drought in rivers and reservoirs. Total economic impact: ~$30B in agricultural losses alone.',
        },
        {
          name: 'SPI and SPEI',
          icon: Activity,
          color: BRAND.jade,
          desc: 'SPI: normalised precipitation anomaly at multiple timescales (1, 3, 6, 12 months). SPI-3 for agricultural drought; SPI-12 for hydrological drought. SPEI adds ET demand: identifies warming-driven drying where SPI shows no trend.',
          examples: 'US Southwest: SPI shows neutral to slightly positive trend 1950–2020 (stable precipitation), while SPEI shows increasing drought because rising temperatures have increased ET demand. The divergence isolates the warming-driven signal from the precipitation signal.',
        },
        {
          name: 'Flash Droughts',
          icon: Zap,
          color: BRAND.coral,
          desc: 'Onset in 2–4 weeks rather than months. Driven by anomalous heat and high VPD rapidly depleting soil moisture, often with moderate precipitation deficit. 2012 US and 2016 Southeast US flash droughts: crop losses before monitoring systems detected severity.',
          examples: '2012 Midwest flash drought: soil moisture in Missouri went from near-normal to D4 (exceptional drought) in 8 weeks. VPD anomaly was more important than precipitation deficit in driving the rapid onset — illustrating warming-era drought dynamics.',
        },
        {
          name: 'Attribution: 2021 Pacific NW Heat Dome',
          icon: Globe,
          color: BRAND.gold,
          desc: 'June 2021: unprecedented heat dome killed ~1,400 people in Pacific Northwest (Canada/USA) and drove streamflow to record lows. World Weather Attribution: this event was made ~150× more likely by anthropogenic climate change.',
          examples: `Lytton, British Columbia: 49.6°C — Canada\'s all-time temperature record — followed by a wildfire the next day that destroyed 90% of the town. WWA analysis showed the event was "virtually impossible" without climate change; under 2°C warming it becomes a ~1-in-5-year event.`,
        },
        {
          name: 'Satellite Drought Monitoring',
          icon: ArrowRight,
          color: BRAND.amethyst,
          desc: 'GRACE: terrestrial water storage anomalies from gravity. MODIS: vegetation stress indices (NDVI, EVI). GPM: global precipitation at 0.1°/30-minute. VIC/Noah: land surface model soil moisture at continental scale. Multi-sensor synthesis underpins USDM and global early warning.',
          examples: 'GRACE data revealed the 2006–2009 Syrian drought depleted groundwater across the Fertile Crescent faster than surface indicators suggested, contributing to agricultural collapse and rural-urban migration that preceded the 2011 Syrian civil war.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Compound Extreme Cascade: From Hazard Co-occurrence to Amplified Impact',
      body: 'How the co-occurrence and sequential compounding of flood and drought mechanisms — each individually analysable with GEV statistics — produce joint impacts that exceed the sum of their parts, and how attribution science quantifies the climate change contribution.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how individual flood and drought hazards compound through physical co-occurrence (e.g., rainfall plus storm surge, drought plus heat wave) and temporal sequencing (pre-conditioned soils amplifying subsequent events), producing impacts that univariate frequency analysis cannot capture, with attribution science quantifying the climate change signal',
        nodes: [
          {
            id: 'rainfall-extreme',
            label: 'Extreme Precipitation Event',
            description: 'GEV-distributed annual maxima or GPD-distributed POT peaks. Intensified by Clausius-Clapeyron scaling under warming. Estimated return periods assume stationarity — an assumption that breaks down under non-stationary climate.',
            color: BRAND.accent,
          },
          {
            id: 'storm-surge',
            label: 'Coastal Storm Surge',
            description: 'Wind-driven ocean water piling onto coast. Independent hazard with its own frequency distribution. Sea level rise raises the baseline, increasing exceedance probability of any given surge height at a rate of ~10–15% per cm of sea level rise.',
            color: BRAND.jade,
          },
          {
            id: 'compound-flood',
            label: 'Compound Flood (Harvey-Type)',
            description: 'Simultaneous or near-simultaneous occurrence of river flood and coastal storm surge. Joint exceedance probability modelled with copulas — bivariate distributions that capture the statistical dependence (correlation) between the two marginal hazard distributions. Harvey 2017: joint probability ~1-in-1,000 years.',
            color: BRAND.coral,
          },
          {
            id: 'drought-heat',
            label: 'Compound Drought-Heat',
            description: 'Co-occurring drought and heat wave: soil moisture deficit reduces evaporative cooling, amplifying temperatures; high temperatures accelerate soil drying via increased VPD. Europe 2003 and 2018: compound event losses far exceeded the sum of independent drought and heat impacts. Agricultural yield losses 20–50% above what either individual hazard would cause.',
            color: BRAND.gold,
          },
          {
            id: 'preconditioned-soil',
            label: 'Pre-Conditioning: Baked Soil Effect',
            description: 'Drought-hardened soils develop hydrophobic crusts and deep moisture deficits. When heavy rainfall subsequently occurs, infiltration capacity is reduced, converting more precipitation to surface runoff. Increases flash flood risk even when total precipitation is unchanged. Relevant to post-wildfire hydrology (hydrophobic ash layers).',
            color: BRAND.ruby,
          },
          {
            id: 'attribution-risk',
            label: 'Attribution & Changing Return Periods',
            description: 'World Weather Attribution framework: compare event probability in actual climate vs. counterfactual pre-industrial climate using large GCM ensembles. 2021 Pacific NW heat dome: 150× more likely with anthropogenic forcing. IPCC AR6: 1-in-50-year precipitation extremes become 1-in-10-year events at 2°C global warming.',
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'rainfall-extreme',    to: 'compound-flood',      label: 'Simultaneous with storm surge' },
          { from: 'storm-surge',         to: 'compound-flood',      label: 'Blocks drainage of inland flood' },
          { from: 'drought-heat',        to: 'preconditioned-soil', label: 'Soil moisture depletion and surface hardening' },
          { from: 'preconditioned-soil', to: 'compound-flood',      label: 'Reduced infiltration amplifies runoff from subsequent rain' },
          { from: 'compound-flood',      to: 'attribution-risk',    label: 'Attribution quantifies climate change contribution to joint probability' },
          { from: 'drought-heat',        to: 'attribution-risk',    label: 'Attribution identifies warming as driver of compound drought-heat frequency' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Flood frequency analysis uses the Generalised Extreme Value (GEV) distribution with a shape parameter ξ. What does the sign of ξ imply about the tail behaviour of flood risk, and why does it matter for infrastructure design?',
          a: [
            'ξ > 0 (Fréchet) implies a bounded upper tail, meaning there is a finite maximum possible flood magnitude; ξ < 0 (Weibull) implies an unbounded heavy tail with increasingly probable catastrophic floods; infrastructure in Fréchet regions is therefore safer than in Weibull regions',
            'ξ = 0 (Gumbel) implies the heaviest tail behaviour with the fastest-growing extreme quantiles; ξ > 0 and ξ < 0 both represent lighter-tailed distributions; most engineering standards therefore use the Gumbel as the conservative default',
            'ξ > 0 (Fréchet) implies a heavy power-law tail where extreme quantile estimates grow rapidly with return period — catastrophic floods much larger than the historical maximum are plausible; ξ < 0 (Weibull) implies a bounded distribution with a finite theoretical maximum flood; most rivers have ξ > 0, meaning infrastructure designed from historical maxima may substantially underestimate the true design flood',
            'ξ only controls the shape of the GEV distribution near the median, not in the tails; the sign of ξ is irrelevant to extreme quantile estimation and matters only for goodness-of-fit tests of intermediate return periods within the observational record',
          ],
          correct: 2,
          explain: 'The shape parameter ξ of the GEV distribution controls how rapidly the estimated quantile (flood magnitude) grows as the return period increases beyond the range of observed data. For ξ > 0 (Fréchet family), the upper tail is a heavy power-law: the T-year flood grows as T^ξ, meaning that as the return period doubles, the flood magnitude grows faster than linearly. A river with ξ = 0.3, for example, will have a 10,000-year flood estimate substantially larger relative to its 100-year flood estimate than a Gumbel (ξ = 0) river. For ξ < 0 (Weibull), the distribution has a finite upper bound — a physical maximum flood that can never be exceeded, which is theoretically meaningful for some meteorologically constrained systems. For ξ = 0 (Gumbel), the tail grows logarithmically with return period, a middle case. Infrastructure design is sensitive to ξ because dams and spillways must be designed for extreme return periods (up to the Probable Maximum Flood). Using a Gumbel when the true distribution is Fréchet (ξ > 0) can dramatically underestimate the design flood. Most rivers in humid and flash-flood-prone regions have estimated ξ values > 0, justifying heavy-tailed distributions for infrastructure design.',
        },
        {
          q: 'Hurricane Harvey (2017) caused catastrophic flooding in Houston that exceeded what either the storm surge or the rainfall alone would have produced. What statistical tool is used to estimate the joint probability of compound flooding events, and why is the joint probability lower (i.e., the event rarer) than either individual hazard probability?',
          a: [
            'Joint probabilities of compound flooding are estimated by simply multiplying the individual marginal probabilities, which gives a probability lower than either individual hazard because the product of two numbers less than 1 is always smaller than either factor; Harvey\'s joint probability equals the rainfall probability times the surge probability',
            'Joint probabilities of compound flooding are estimated using copulas — bivariate (or multivariate) statistical functions that model the dependence structure between two hazard variables independently of their marginal distributions; when two hazards are positively correlated (more likely to co-occur than independence would predict), the joint exceedance probability is higher than the simple product of the marginal probabilities, but still lower than either marginal probability alone',
            'Joint probabilities of compound flooding are always estimated assuming the two hazards are perfectly correlated (always co-occur), which gives the joint probability equal to the probability of the rarer hazard; Harvey\'s joint probability therefore equals the storm surge probability alone, as the surge was rarer than the rainfall',
            'Joint probabilities of compound flooding cannot be estimated statistically because compound events are by definition non-recurrent; instead, they are assessed using physical deterministic models that simulate the worst-case combination of all possible hazard inputs, regardless of their individual probability',
          ],
          correct: 1,
          explain: `Copulas are mathematical functions that separate the marginal distributions of individual variables (each hazard modelled independently) from the dependence structure between them. In compound flooding, the key statistical question is not just "how rare is each hazard?" but "how likely are they to co-occur?" For Harvey, the dependence between extreme rainfall and coastal storm surge is positive — both are driven by the same tropical cyclone, so they are far more likely to co-occur than if they were independent. If the marginal annual exceedance probability of Harvey\'s rainfall was 1/1,000 and the storm surge was 1/100, and they were independent, the joint probability would be 1/(1,000 × 100) = 1/100,000. But because they are positively correlated (driven by the same storm), the joint probability is higher than this — copula analysis estimated approximately 1/1,000. Crucially, the joint probability is still lower than either individual hazard probability (1/1,000 for rainfall alone), meaning the compound event is rarer than either component — but not as rare as independence would suggest. This matters enormously for risk assessment: using independence assumptions for compound hazards grossly underestimates event probability, while ignoring dependence structure (simply taking the rarer marginal) equally misrepresents the risk.`,
        },
        {
          q: 'The SPEI detects drought where the SPI shows no trend. In what physical scenario does this divergence occur, and what does it reveal about drought mechanisms under climate change?',
          a: [
            'SPEI detects drought where SPI does not when precipitation increases but falls as more intense events, leading to more runoff and less infiltration; SPEI accounts for the runoff/infiltration partitioning while SPI treats all precipitation as equally available for soil moisture, so SPEI correctly identifies the infiltration deficit',
            'SPEI detects drought where SPI does not when temperatures are rising but precipitation is stable; SPEI incorporates potential evapotranspiration (PET), which increases with temperature, increasing atmospheric moisture demand from soils and vegetation; SPI measures only precipitation departure, missing the demand-side driver of soil moisture depletion',
            'SPEI detects drought where SPI does not when vegetation cover changes: deforestation reduces ET and increases runoff, and SPEI accounts for this ET reduction while SPI does not; the divergence therefore diagnoses land-use change rather than climate change',
            'SPEI detects drought where SPI does not only in regions with Mediterranean climates where winter precipitation and summer drought are climatologically normal; SPEI correctly removes the seasonal cycle while SPI fails to do so, producing false drought signals in standard SPI calculations',
          ],
          correct: 1,
          explain: 'The SPI quantifies how anomalous precipitation is at a given timescale relative to the historical distribution. If precipitation is at its long-term average, SPI = 0, indicating no drought regardless of temperature. The SPEI adds potential evapotranspiration — estimated by Penman-Monteith, Thornthwaite, or Hargreaves equations — to account for the water demand side. Under warming, even unchanged precipitation produces drought conditions because higher temperatures increase the vapour pressure deficit, which drives more evaporation from soils and more transpiration from plants. The soil water balance deficit (precipitation minus PET) becomes more negative even when precipitation alone is neutral. This "demand drought" is the dominant new drought mechanism under anthropogenic warming in many temperate and tropical regions. It explains why PDSI and SPI trends can be near-neutral while plant water stress, soil moisture deficits, and streamflow are deteriorating. The 2012 US flash drought and ongoing drying trends in the US Southwest, Amazon, and Mediterranean are partly attributable to VPD-driven demand drought invisible to precipitation-only indices.',
        },
        {
          q: 'Non-stationary flood frequency analysis allows GEV parameters to vary with time or climate covariates. What are the advantages and key limitations of this approach for infrastructure design?',
          a: [
            'The main advantage is that non-stationary analysis eliminates all uncertainty in flood frequency estimates by incorporating the physical drivers of change; the main limitation is computational cost, which restricts its use to large national hydrological agencies',
            'Non-stationary analysis captures time-varying flood risk more honestly by conditioning on measurable climate state (ENSO, AMO, warming trend), producing time-varying return period curves; the key limitations are increased parameter uncertainty (more parameters to estimate from limited records), the requirement to forecast future covariate values (which introduces GCM uncertainty), and the lack of consensus on statistical frameworks and testing procedures',
            'Non-stationary analysis is most useful for design purposes because it always gives a higher design flood estimate than stationary analysis, providing a conservative safety margin; the limitation is that it tends to overestimate flood risk in drying regions where future floods will be smaller than historical ones',
            'Non-stationary analysis avoids the need for climate projections by fitting trends directly to the observed streamflow record; it is therefore less uncertain than GCM-based approaches and should always replace stationary analysis in infrastructure design codes',
          ],
          correct: 1,
          explain: 'Non-stationary flood frequency analysis represents a genuinely more physically honest approach to the problem that Milly et al. (2008) highlighted: historical records are from a different climate than the infrastructure will face. By conditioning GEV parameters on measurable climate indices (ENSO phase, AMO index, temperature trend), the model produces return period curves that vary with climate state, reflecting the actual time-varying risk. However, the approach has substantial limitations that explain why it has not yet replaced stationary methods in most regulatory and design contexts: (1) Parameter uncertainty — fitting a non-stationary GEV model requires estimating additional parameters (the coefficients of the covariate relationships) from the same short flood record, typically 50–100 years. More parameters with the same data means wider confidence intervals on all estimates, including the critical design quantiles. (2) Covariate projection — to estimate a future design flood, the future values of the climate covariates must be projected, which requires GCM outputs with their associated uncertainty cascade. The result is that non-stationary quantile estimates often have wider uncertainty bands than stationary estimates, complicating their use in risk-averse infrastructure design codes. (3) Lack of consensus — no agreed framework exists for selecting which covariates to include, how to test for their significance, or how to combine non-stationary uncertainty with other engineering design uncertainties.',
        },
        {
          q: 'World Weather Attribution reported that the 2021 Pacific Northwest heat dome was ~150× more likely due to anthropogenic climate change. What does this ratio mean quantitatively, and how is it calculated?',
          a: [
            'The 150× ratio means that 150 such events occurred globally in the same year due to climate change; WWA counted observed heat extremes worldwide and compared the total to a baseline of 1 event in pre-industrial climate conditions',
            'The 150× ratio is the ratio of the event\'s return period in the actual (anthropogenically forced) climate to its return period in a counterfactual pre-industrial climate; if the event has a return period of 1,000 years in the pre-industrial climate and 7 years in the current climate, the ratio is ~143×, meaning the event is ~143× more likely today than in the pre-industrial era',
            'The 150× ratio means that climate change increased the peak temperature of the event by 150%; a 30°C pre-industrial extreme was amplified to a 75°C extreme under anthropogenic forcing, and the ratio reflects the temperature multiplication factor',
            'The 150× ratio is calculated by dividing the total economic damages from the 2021 event by the expected damages from an average (1-in-1-year) heat event, standardised to 2021 dollars; it is an economic loss ratio rather than a probability ratio',
          ],
          correct: 1,
          explain: 'World Weather Attribution (WWA) calculates attribution ratios using the "probability ratio" (PR) framework, also expressible as a return period ratio. The method runs large ensembles of climate model simulations under two scenarios: (1) the actual observed climate, including anthropogenic greenhouse gas forcing; and (2) a counterfactual climate representing conditions as they would have been without human emissions (typically representing pre-industrial or early-industrial climate). For the 2021 Pacific Northwest event, the analysis estimated the return period in the current climate at approximately 1,000 years (an extremely rare event even with current forcing) and in the counterfactual pre-industrial climate at approximately 150,000 years (essentially impossible). The probability ratio PR = (1/1,000) ÷ (1/150,000) ≈ 150 — meaning the event is approximately 150× more probable in the actual climate than in the pre-industrial counterfactual. WWA also noted that the observed temperature was approximately 2°C higher than the models simulated even with anthropogenic forcing, suggesting either natural variability contributed a rare excursion or the models underestimate the tail behaviour. The 150× figure is a central estimate with substantial uncertainty; the 95% confidence interval spanned from "clearly more likely" to "essentially impossible without climate change," which led WWA to conclude the event was "virtually impossible" in a pre-industrial world.',
        },
      ],
    },
  ],
}

export default hydrologicalExtremes
