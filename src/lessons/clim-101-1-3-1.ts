import { Thermometer, Globe, Wind } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const lesson: Lesson = {
  id: 'clim-101-1-3-1',
  title: 'Observed Warming: Instrumental Records and Attribution',
  track: 'cli',
  trackName: 'Climate Science',
  level: 'Beginner',
  duration: '11 min',
  xpReward: 140,
  description: 'How scientists measure global temperature change, what the instrumental record shows over 170 years, and how fingerprinting techniques conclusively link observed warming to human greenhouse gas emissions.',
  sources: [
    { org: 'NASA',     title: 'NASA GISS Surface Temperature Analysis (GISTEMP v4)',                          url: 'https://data.giss.nasa.gov/gistemp/' },
    { org: 'NOAA',     title: 'NOAA National Centers for Environmental Information — Global Surface Temperature', url: 'https://www.ncei.noaa.gov/products/land-based-station/global-historical-climatology-network-monthly' },
    { org: 'IPCC',     title: 'IPCC Sixth Assessment Report (AR6) WGI — The Physical Science Basis (2021)',   url: 'https://www.ipcc.ch/report/ar6/wg1/' },
    { org: 'Berkeley Earth', title: 'Berkeley Earth — Global Temperature Report and Data',                   url: 'https://berkeleyearth.org/global-temperature-report/' },
    { org: 'AGI',      title: 'Glossary of Geology — Climate Forcing, Attribution, Climate Sensitivity',      url: 'https://www.americangeosciences.org/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Reading the thermometer of a planet',
      body: `The question of whether Earth is warming — and why — is one of the most consequential in science. To answer it, researchers have assembled one of the most carefully checked datasets in history: the global mean surface temperature (GMST) record, constructed from over a billion individual thermometer observations spanning land stations, ocean buoys, and ship measurements going back to the 1850s. Four independent research groups — NASA GISS, NOAA GlobalTemp, the UK's HadCRUT, and Berkeley Earth — have produced GMST time series using different raw data selections, quality-control procedures, and statistical approaches. All agree to within measurement uncertainty: Earth has warmed approximately **+1.2 °C (+2.2°F)** above its 1850–1900 pre-industrial baseline as of 2023. The warmest ten calendar years on record all fall within the last decade.

But establishing that warming has occurred is only half the scientific task. **Attribution** asks: *what caused it?* Natural factors alone — changes in the Sun's output and volcanic eruptions — cannot reproduce the observed pattern of warming. Only when human-caused greenhouse gas increases are added to climate models does the simulated record match observations. This fingerprinting result, repeated by dozens of independent research groups using different models and methods, represents one of the most robustly replicated findings in modern science.

Understanding the instrumental record and attribution methods is foundational for all that follows in this module: sea level rise, ecosystem disruption, extreme events, and the policy choices that depend on knowing how much warming will occur under different emission scenarios. The IPCC AR6 (2021) stated for the first time that human influence on the climate is "unequivocal" — the strongest language the Panel has ever used.`,
      keyTerms: [
        { term: 'Global mean surface temperature (GMST)', def: 'The area-weighted average of land surface air temperature and sea-surface temperature (SST) anomalies relative to a baseline period (typically 1850–1900 pre-industrial, or 1961–1990). Constructed from thousands of station and ship/buoy observations. Four independent GMST datasets (NASA GISS, NOAA GlobalTemp, HadCRUT, Berkeley Earth) agree closely, providing strong evidence for the robustness of the warming signal. As of 2023, GMST is approximately +1.2 °C (+2.2°F) above the 1850–1900 baseline.' },
        { term: 'Climate attribution', def: 'The science of determining the causal contribution of different factors (greenhouse gases, solar variability, aerosols, volcanoes, natural variability) to observed climate changes. Uses optimal fingerprinting: observed temperature patterns are compared against patterns predicted by climate models driven with different combinations of forcings. The fingerprint of greenhouse gas forcing — tropospheric warming, stratospheric cooling, greater land than ocean warming, polar amplification — is distinct from that of solar forcing and cannot be reproduced by natural forcings alone.' },
        { term: 'Transient Climate Response (TCR)', def: 'The global mean surface temperature increase at the time of CO₂ doubling in a model experiment where CO₂ increases at 1 % per year. Measures the near-term climate sensitivity, incorporating the ocean\'s heat uptake delay. IPCC AR6 assessed TCR = 1.8 °C (likely range 1.2–2.4 °C (2.2–4.3°F)). TCR is used to estimate warming expected over the 21st century under different emission scenarios.' },
        { term: 'Equilibrium Climate Sensitivity (ECS)', def: 'The equilibrium global mean surface temperature increase following a sustained doubling of atmospheric CO₂. Represents the full, long-term response after all fast feedbacks (water vapour, lapse rate, sea ice, clouds) equilibrate. IPCC AR6 assessed ECS = 3.0 °C (likely range 2.5–4.0 °C (4.5–7.2°F)), narrowed by combining the instrumental record, paleoclimate evidence, and process-level understanding. ECS is relevant for projecting long-term warming beyond 2100.' },
        { term: 'Remaining carbon budget', def: 'The total net CO₂ emissions compatible with limiting global warming to a given temperature level. IPCC AR6 estimated approximately 500 GtCO₂ remaining from 2020 for a 50 % probability of staying below 1.5 °C (2.7°F). At 2023 emission rates (~40 GtCO₂/yr), this budget is exhausted in ~12 years. The budget is sensitive to assumptions about non-CO₂ gases, aerosols, and carbon cycle feedbacks (permafrost, land-use). Each additional 1,000 GtCO₂ of cumulative emissions corresponds to roughly 0.45 °C (0.81°F) of additional GMST (the TCRE relationship).' },
      ],
    },
    {
      type: 'concept',
      title: 'The instrumental record, attribution fingerprinting, and the carbon budget',
      body: `**The global surface temperature record and what it shows.** Four independent groups — NASA GISS, NOAA GlobalTemp, HadCRUT (UK Met Office and Climatic Research Unit), and Berkeley Earth — each construct a GMST time series independently. They use different raw station networks, different approaches to filling data gaps, and different statistical models. The close agreement among the four records across the full period 1850–present is one of the strongest lines of evidence that the warming signal is real rather than an artefact of any single methodology.

The record shows approximately **+1.2 °C (+2.2°F)** of warming above the 1850–1900 baseline (IPCC AR6, 2021). Warming is not uniform in space: land warms ~2× faster than ocean; the Arctic warms ~3–4× the global average (polar amplification driven by ice-albedo and water vapour feedbacks); and the Northern Hemisphere has warmed faster than the Southern Hemisphere due to the greater land fraction and faster aerosol reductions. The warming has also accelerated: the rate from 2011–2020 was +0.2 °C (+0.4°F)/decade, compared to +0.15 °C (+0.3°F)/decade from 1980–2010. Ocean heat content (OHC), measured by the Argo float network since 2000, provides an independent and physically robust measure of Earth's energy imbalance — approximately 90 % of the excess energy trapped by greenhouse gases ends up in the ocean.

**Detection and attribution: fingerprinting human influence.** The detection-attribution method compares the spatial and vertical patterns ("fingerprints") of observed temperature change against those predicted by climate models driven by different forcings. The greenhouse gas fingerprint is characterised by: (1) strong warming at the surface; (2) cooling of the stratosphere (where CO₂ traps heat below); (3) greater warming over land than ocean; (4) polar amplification; (5) greater warming at night than day; and (6) more warming in the Northern Hemisphere. This multi-dimensional pattern is distinct from solar forcing (which would warm both troposphere and stratosphere equally) and cannot be reproduced by models run with only natural forcings (solar + volcanoes). IPCC AR6 concluded that human influence has warmed the climate at a rate unprecedented in at least 2,000 years, and that approximately 1.0 °C (1.8°F) of the observed 1.07 °C (1.9°F) warming since 1850–1900 is attributable to net human influence.

**Committed warming and the remaining carbon budget.** Even if all CO₂ emissions stopped today, the climate would continue to warm by ~0.3–0.5 °C (0.5–0.9°F) as the ocean reaches thermal equilibrium with the elevated GHG concentrations already in the atmosphere. This "warming in the pipeline" reflects the ocean's enormous heat capacity and slow response time. The relationship between cumulative CO₂ emissions and eventual warming — the **Transient Climate Response to Cumulative CO₂ Emissions (TCRE)** — is approximately linear: each additional 1,000 GtCO₂ of cumulative emissions adds roughly 0.45 °C (0.8°F). This allows direct calculation of the remaining carbon budget for any target temperature. For 1.5 °C (2.7°F), approximately 500 GtCO₂ remained as of 2020; at current rates this is exhausted within ~12 years, highlighting the urgency of rapid emissions reductions.`,
      cards: [
        {
          name: 'The Instrumental Temperature Record',
          icon: Thermometer,
          color: BRAND.gold,
          desc: 'GMST constructed from land (GHCN) and ocean (HadSST, Argo) observations by four independent groups (NASA GISS, NOAA GlobalTemp, HadCRUT, Berkeley Earth). All agree: +1.2 °C (+2.2°F) above 1850–1900 baseline as of 2023. Warming rate has accelerated to +0.2 °C (+0.4°F)/decade (2011–2020). Land warms 2× faster than ocean. Arctic warms 3–4× global mean (polar amplification). Warmest 10 years all in last decade. Satellite tropospheric data (RSS, UAH) independently confirm surface trends since 1979. Ocean heat content (Argo floats) shows ~90% of excess heat in ocean.',
          examples: '1998 El Niño spike: +0.6 °C (+1.1°F) above 1961–1990 baseline; then 2016 and 2023 both set new annual records · Berkeley Earth analysis uses ~36,000 station records vs ~7,500 in earlier datasets · Satellite MSU data: agreement with surface record strengthened by orbital drift corrections after reanalysis',
        },
        {
          name: 'Detection and Attribution Fingerprinting',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Optimal fingerprinting compares observed patterns against model-predicted forcing fingerprints. GHG fingerprint: surface warming + stratospheric cooling + greater land than ocean warming + polar amplification + night-warming > day-warming. Solar fingerprint: uniform troposphere + stratosphere warming; no polar amplification asymmetry. Natural forcings only: cannot reproduce observed trend 1950–present; match only ~1900–1950 period. IPCC AR6: "unequivocal" human influence; ~1.0 °C (~1.8°F) of 1.07 °C (1.9°F) warming attributable to net human influence. ECS = 3.0 °C (2.5–4.0 °C (4.5–7.2°F) likely).',
          examples: 'Volcanic cooling test: 1991 Pinatubo produced −0.5 °C (-0.9°F) 1–2 years later (captured in models); validates model sensitivity · Solar output: satellite measurements since 1978 show slight decline since 1980; cannot explain 0.5 °C (0.9°F) of warming over same period · Day/night asymmetry: nighttime Tmin warming faster than daytime Tmax globally — GHG signature, not UHI artifact',
        },
        {
          name: 'Carbon Budgets and Committed Warming',
          icon: Wind,
          color: BRAND.coral,
          desc: 'TCRE (Transient Climate Response to Cumulative CO₂ Emissions): ~0.45 °C (~0.8°F) per 1,000 GtCO₂. Remaining budget for 1.5 °C (2.7°F) (50 %): ~500 GtCO₂ from 2020; ~12 years at current rates (~40 GtCO₂/yr). Budget for 2 °C (3.6°F) (67 %): ~1,150 GtCO₂ from 2020; ~29 years. Committed warming ("pipeline"): ~0.3–0.5 °C (0.5–0.9°F) even at zero emissions today, due to ocean thermal inertia. Budget uncertainties: non-CO₂ gases, aerosol cooling estimate, permafrost feedbacks. TCRE relationship allows direct policy-science translation: every GtCO₂ emitted reduces remaining budget by 0.45/1000 °C.',
          examples: 'Cumulative emissions to 2023: ~2,500 GtCO₂ from fossil fuels + ~200 GtCO₂ from land use change ≈ 2,700 GtCO₂ total · Pre-industrial CO₂: 280 ppm; 2023: 420 ppm — 50% increase. Keeling Curve at Mauna Loa shows uninterrupted rise since 1958 · Aerosol unmasking: rapid elimination of sulphate aerosol pollution could briefly add +0.5–1.0 °C (0.9–1.8°F) before CO₂ warming dominates',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Four independent research groups produce global surface temperature datasets from different raw data and methods. Their close agreement is best interpreted as:',
          a: [
            'Strong evidence the warming signal is real and not an artefact of any single dataset or methodology',
            'Proof that climate scientists share data and coordinate to produce matching results',
            'Evidence that all datasets use the same underlying station network',
            'An indication that only one accurate dataset is needed going forward',
          ],
          correct: 0,
          explain: 'Independent replication with different methods is the strongest form of scientific corroboration. Agreement across groups using different raw data, quality-control procedures, and infilling algorithms demonstrates the robustness of the warming signal rather than reflecting coordination or data-sharing.',
        },
        {
          q: 'Why does the detection-attribution fingerprint method compare observed warming patterns with model simulations, rather than simply comparing global mean temperature trends?',
          a: [
            'Patterns (stratospheric cooling, polar amplification, greater land warming) are predicted specifically by GHG forcing and cannot be explained by solar forcing alone',
            'Global mean temperature is too noisy to detect trends over decades, making patterns more statistically reliable',
            'Model simulations are only credible for regional patterns, not global averages',
            'Natural variability is larger at the global mean scale than at the regional scale',
          ],
          correct: 0,
          explain: 'The "fingerprint" exploits distinct spatial and vertical signatures from different forcings. Solar brightening warms the stratosphere; GHG forcing cools it while warming the troposphere. Polar amplification and land/ocean warming ratios further distinguish the GHG signal. This spatial structure allows attribution even when global-mean trends might seem ambiguous.',
        },
        {
          q: 'Even if global CO₂ emissions fell to zero tomorrow, scientists expect an additional ~0.3–0.5 °C (0.5–0.9°F) of warming. What is the primary physical cause?',
          a: [
            'Ocean thermal inertia: the ocean has not yet reached thermal equilibrium with elevated CO₂ already in the atmosphere',
            'Permafrost methane will continue to be released for decades regardless of human emissions',
            'CO₂ already emitted will continue to increase in concentration as forests release stored carbon',
            'Aerosol pollution will rapidly dissipate, unmasking warming that was being suppressed',
          ],
          correct: 0,
          explain: 'The ocean absorbs ~90 % of excess heat and has a long thermal equilibration timescale. Because the ocean has been warming more slowly than the atmosphere, substantial committed warming remains even at fixed GHG concentrations. Aerosol unmasking and permafrost are real concerns but are secondary to ocean thermal inertia for the specific framing of "zero emissions starting now."',
        },
        {
          q: 'The IPCC AR6 concluded that human influence has warmed the climate at a rate "unprecedented in at least 2,000 years" and attributed approximately 1.0 °C (1.8°F) of the observed 1.07 °C (1.9°F) warming since 1850–1900 to net human influence. One distinctive fingerprint used in attribution is the simultaneous warming of the troposphere alongside cooling of the stratosphere. Why does greenhouse gas forcing produce stratospheric cooling while solar brightening would not, and why is this pattern important for attribution?',
          a: [
            'Greenhouse gases cool the stratosphere because CO₂ is a strong absorber of incoming solar ultraviolet radiation in the stratosphere; as CO₂ increases, more UV is absorbed before reaching the troposphere, warming the stratosphere; this UV absorption would not occur with solar brightening because solar increases affect all wavelengths equally; the stratospheric warming from CO₂ UV absorption is what makes greenhouse forcing distinct from solar forcing',
            'Greenhouse gas forcing and solar brightening produce opposite stratospheric responses because of the different altitudes at which they alter the radiation budget: increased solar output warms the stratosphere by increasing the solar UV energy absorbed by ozone; increased CO₂ concentration enhances longwave emission to space from the stratosphere (where CO₂ acts as an efficient radiative cooler), removing more heat from the stratospheric layer and causing it to cool even as the troposphere warms; this simultaneous tropospheric warming and stratospheric cooling is a specific fingerprint of greenhouse gas forcing that cannot be replicated by solar brightening alone, and has been directly observed by satellite temperature records since the late 1970s',
            'The observed stratospheric cooling is caused by ozone depletion from chlorofluorocarbons, not by greenhouse gases; attributing stratospheric cooling to CO₂ is a misinterpretation — ozone absorbs UV radiation that heats the stratosphere; as ozone decreases from CFC emissions, the stratosphere loses its UV heating and cools; greenhouse gas attribution incorrectly claims credit for a cooling that is actually ozone-related',
            'Solar brightening would also produce stratospheric cooling for the same reason as greenhouse gases — a brighter Sun increases evaporation from the ocean surface, putting more water vapour into the troposphere, which absorbs longwave radiation before it reaches the stratosphere, cooling the stratosphere by reducing the upward longwave flux; the stratospheric cooling fingerprint therefore cannot distinguish greenhouse gas forcing from solar forcing',
          ],
          correct: 1,
          explain: 'CO₂ does not absorb solar ultraviolet radiation significantly — CO₂ absorption of solar radiation is mainly in the near-infrared, and the amount absorbed in the stratosphere is small; the stratospheric cooling from CO₂ operates through longwave (infrared) emission, not solar UV absorption; A reverses the physical mechanism and incorrectly attributes the stratospheric response to solar UV absorption by CO₂. The stratospheric cooling is indeed partly contributed to by ozone depletion from CFCs, and both effects must be considered; however, ozone depletion does not explain all of the stratospheric cooling trend, and it began primarily after the 1980s; attribution studies that separate ozone depletion from CO₂ contributions both confirm stratospheric cooling from CO₂ increases; moreover, stratospheric cooling from ozone depletion has a different vertical and latitudinal structure from CO₂-driven cooling (C is partially correct about ozone but incorrectly dismisses CO₂ as a cause and overstates the ozone explanation). The mechanism proposed in D is physically incorrect: solar brightening increases UV reaching the stratosphere and heating ozone-containing layers; increased evaporation from a brighter Sun puts more water vapour in the troposphere, but this would slightly warm the stratosphere through increased upward longwave radiation, not cool it; moreover, if solar brightening were the dominant forcing, atmospheric models predict stratospheric warming, not cooling (D inverts the physical relationship). The correct answer is B: the stratosphere cools under enhanced greenhouse forcing because of how CO₂ and other greenhouse gases alter the radiation balance at stratospheric altitudes. CO₂ is a very efficient emitter of infrared radiation — it emits radiation both upward (to space) and downward (to the troposphere). In the stratosphere, where CO₂ is well-mixed but the temperature profile is such that CO₂ emits more energy than it absorbs from below, increasing CO₂ enhances net longwave emission from the stratosphere to space, cooling it. In the troposphere, the opposite happens — CO₂ absorbs more longwave from the warm surface and re-emits it back downward, trapping heat and warming the surface and troposphere. A brighter Sun would increase absorbed solar radiation at all atmospheric levels including the stratosphere, warming the stratosphere alongside the troposphere — a pattern distinctly different from greenhouse gas forcing. Satellite measurements of lower stratosphere temperature (MSU channel 4) show a cooling trend of approximately −0.3 to −0.5 °C (-0.5 to -0.9°F)/decade since 1979, punctuated by temporary warmings from major volcanic eruptions (El Chichón 1982, Pinatubo 1991) that injected aerosols that absorb solar radiation in the stratosphere. This stratospheric cooling, combined with tropospheric warming, is one of the most robust multi-dimensional fingerprints confirming that greenhouse gas forcing, not solar brightening, is the dominant driver of observed warming.',
        },
      ],
    },
  ],
}

export default lesson
