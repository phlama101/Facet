import { Thermometer, Globe, Wind } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const lesson: Lesson = {
  id: 'clim-101-1-3-1',
  title: 'Observed Warming: Instrumental Records and Attribution',
  description: 'How scientists measure global temperature change, what the instrumental record shows, and how attribution science links observed warming to human greenhouse gas emissions.',
  track: 'cli',
  trackName: 'Climate Science',
  xpReward: 140,
  level: 'Beginner',
  type: 'concept',
  icon: Thermometer,
  color: BRAND.jade,
  cards: [
    {
      title: 'The Instrumental Temperature Record',
      body: `Global mean surface temperature (GMST) is reconstructed from land-based weather station networks (GHCN), marine sea-surface temperature (SST) datasets (HadSST), and ocean buoys. Four major independent groups — NASA GISS, NOAA GlobalTemp, HadCRUT (UK Met Office/CRU), and Berkeley Earth — produce GMST series that agree closely despite using different methodologies and raw data subsets.\n\nThe record shows approximately +1.2 °C of GMST warming since the 1850–1900 pre-industrial baseline (as of 2023). The warming is not uniform: land warms roughly twice as fast as ocean; the Arctic warms three to four times the global average (polar amplification). The warmest ten calendar years on record all fall within the last decade.\n\nSatellite microwave sounding data (RSS, UAH) monitor tropospheric temperatures since 1979 and confirm surface trends, though the record is shorter and requires careful calibration for orbital drift. Ocean heat content (OHC) — measured by the Argo float network since ~2000 — provides the most physically robust measure of Earth's energy imbalance, as ~90 % of excess heat accumulates in the ocean.`,
      icon: Thermometer,
      color: BRAND.jade,
    },
    {
      title: 'Detection and Attribution of Human Influence',
      body: `Climate attribution uses optimal fingerprinting: observational patterns of warming (latitude, altitude, day vs. night, land vs. ocean) are compared against patterns predicted by climate models driven by different forcings. The "fingerprint" of greenhouse gas forcing — strong surface warming, stratospheric cooling, greater warming over land — cannot be reproduced by models run with natural forcing only (solar variability + volcanoes).\n\nKey attribution findings (IPCC AR6, 2021):\n• Human influence has warmed the climate at a rate unprecedented in at least 2,000 years. It is unequivocal.\n• Observed global mean surface temperature increase since 1850–1900 is approximately 1.07 °C, of which ~1.0 °C is attributable to net human influence.\n• Natural forcings (solar, volcanic) contribute a small fraction and cannot explain the post-1950 trend.\n\nTransient Climate Response (TCR) — the warming at the time of CO₂ doubling in a 1 %/yr ramp scenario — is assessed at 1.8 °C (likely 1.2–2.4 °C). Equilibrium Climate Sensitivity (ECS) is 3.0 °C (likely 2.5–4.0 °C), refined by combining multiple lines of evidence: instrumental record, paleoclimate, and process-level understanding.`,
      icon: Globe,
      color: BRAND.jade,
    },
    {
      title: 'Remaining Carbon Budget and Committed Warming',
      body: `The remaining carbon budget is the total net CO₂ emissions compatible with limiting warming to a given level. IPCC AR6 estimated ~500 GtCO₂ remaining from 2020 for a 50 % likelihood of staying below 1.5 °C — at 2023 emission rates (~40 GtCO₂/yr) this budget is exhausted in about 12 years.\n\nCommitted warming ("warming in the pipeline") arises because ocean thermal inertia delays the full equilibrium response to current GHG concentrations. Even if all CO₂ emissions stopped today, the climate would continue to warm by ~0.3–0.5 °C as the ocean adjusts. However, short-lived climate forcers (methane, aerosols) complicate this: eliminating aerosol cooling would briefly accelerate warming, while eliminating methane would produce rapid cooling within a decade.\n\nCarbon budgets are sensitive to the assumed role of non-CO₂ gases, the treatment of permafrost feedbacks, and the historical aerosol cooling estimate. Each additional 1,000 GtCO₂ of cumulative emissions corresponds to roughly 0.45 °C of additional GMST, a relationship known as the Transient Climate Response to Cumulative CO₂ Emissions (TCRE).`,
      icon: Wind,
      color: BRAND.jade,
    },
  ],
  quiz: [
    {
      question: 'Four independent research groups (NASA GISS, NOAA, HadCRUT, Berkeley Earth) produce global surface temperature datasets from different raw data and methods. The fact that they closely agree is best interpreted as:',
      options: [
        'Strong evidence that the warming signal is real and not an artefact of any single dataset or methodology',
        'Proof that climate scientists share data and coordinate to produce matching results',
        'Evidence that all datasets use the same underlying station network',
        'An indication that only one accurate dataset is needed going forward',
      ],
      correctIndex: 0,
      explain: 'Independent replication with different methods is the strongest form of scientific corroboration. Agreement across groups that use different raw data, quality-control procedures, and infilling algorithms demonstrates the robustness of the warming signal rather than reflecting coordination or data-sharing.',
    },
    {
      question: 'Why does the detection-attribution fingerprint method compare observed warming patterns with model simulations, rather than simply comparing global mean temperature trends?',
      options: [
        'Patterns (e.g., stratospheric cooling, greater land warming, polar amplification) are predicted specifically by greenhouse gas forcing and cannot be explained by solar forcing alone, providing a physical test',
        'Global mean temperature is too noisy to trend over decades, so patterns are more statistically reliable',
        'Model simulations are only credible for regional patterns, not global averages',
        'Natural variability is larger at the global mean scale than at the regional scale',
      ],
      correctIndex: 0,
      explain: 'Pattern matching — the "fingerprint" — exploits the fact that different forcings produce distinct spatial and vertical signatures. Solar brightening would warm the stratosphere; GHG forcing cools it while warming the troposphere. This spatial structure allows attribution even when the global mean trend alone might be ambiguous.',
    },
    {
      question: 'Even if global CO₂ emissions fell to zero tomorrow, scientists expect an additional ~0.3–0.5 °C of warming. What is the primary physical cause?',
      options: [
        'Ocean thermal inertia: the ocean has not yet reached thermal equilibrium with the elevated CO₂ already in the atmosphere',
        'Permafrost methane will continue to be released for decades regardless of human emissions',
        'The CO₂ already emitted will continue to increase in concentration as forests release stored carbon',
        'Aerosol pollution will rapidly dissipate, unmasking warming that was being suppressed',
      ],
      correctIndex: 0,
      explain: 'The ocean absorbs ~90 % of excess heat and has a long thermal equilibration timescale. Because the ocean has been warming more slowly than the atmosphere, substantial committed warming remains even at fixed GHG concentrations. Aerosol unmasking and permafrost are real concerns but are secondary to ocean thermal inertia for the specific framing of "zero emissions starting now."',
    },
  ],
}

export default lesson
