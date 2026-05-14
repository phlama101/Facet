import { Thermometer, Globe, Activity, BarChart } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const climateSensitivityForcing: Lesson = {
  id: 'clim-201-1-2-1',
  title: 'Climate Sensitivity and Radiative Forcing',
  track: 'cli',
  trackName: 'Climate',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: 'ECS, TCR, and radiative forcing — the fundamental parameters linking greenhouse gas concentrations to global temperature change',
  sources: [
    { org: 'IPCC',   title: 'IPCC Sixth Assessment Report WG1',      url: 'https://www.ipcc.ch/' },
    { org: 'NOAA',   title: 'NOAA AGGI Radiative Forcing',            url: 'https://gml.noaa.gov/' },
    { org: 'Nature', title: 'Nature — Climate Sensitivity',           url: 'https://www.nature.com/' },
    { org: 'AGU',    title: 'AGU — Climate Dynamics',                 url: 'https://www.agu.org/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Quantifying climate change: forcing, sensitivity, and response',
      body: `To predict how much the planet will warm in response to rising greenhouse gas concentrations, climate science relies on two foundational quantities: **radiative forcing** and **climate sensitivity**. Together, they provide the physical framework linking a change in atmospheric composition to a change in global mean surface temperature — a chain of causation that runs from molecules in the stratosphere to ocean heat uptake to ice sheets in Greenland.

**Radiative forcing (RF)** is defined as the change in net downward radiative flux at the tropopause after stratospheric temperatures have adjusted to the perturbation, but before surface or tropospheric temperatures have changed. It is expressed in watts per square metre (W/m²) and serves as a standardised measure of the energy imbalance imposed on the climate system by a given agent. A positive RF warms the planet; a negative RF cools it. The logarithmic relationship between CO₂ concentration and forcing — RF ≈ 5.35 × ln(C/C₀) W/m² — means that each successive doubling of CO₂ adds roughly 3.7 W/m² of forcing, regardless of the starting concentration. This logarithmic dependence arises because the major CO₂ absorption bands are already saturated near the band centres; additional CO₂ absorbs in the increasingly opaque wings of the spectrum.

**Effective radiative forcing (ERF)** extends the RF concept by also accounting for rapid adjustments in the troposphere and land surface that occur on timescales of days to weeks — before the slow ocean and surface temperature response has had time to develop. These rapid adjustments include changes in clouds, water vapour, and atmospheric lapse rates driven directly by the forcing agent rather than by the surface temperature response. ERF is now the preferred diagnostic in IPCC AR6 because it better captures the actual energy imbalance that drives long-term warming. For CO₂, ERF and RF are nearly identical; for aerosols and short-lived forcing agents, the rapid adjustments can be substantial.

Total anthropogenic ERF in 2019 relative to 1750 is estimated at **+2.72 W/m²** (with a likely range of 1.96 to 3.48 W/m²) in IPCC AR6. Well-mixed greenhouse gases contribute +3.84 W/m²; aerosols and their cloud interactions contribute approximately −1.1 W/m²; land-use change and other factors contribute smaller amounts. The single largest uncertainty in the total anthropogenic ERF is the aerosol contribution, which ranges from −0.7 to −1.9 W/m² depending on assumptions about pre-industrial aerosol baseline and cloud-aerosol interactions.

**Equilibrium climate sensitivity (ECS)** is the global mean surface warming that would eventually result from a sustained doubling of atmospheric CO₂, after the climate system has fully equilibrated — including the slow adjustment of the deep ocean, which can take centuries to millennia. ECS is not directly observable because the climate system is never truly in equilibrium; it must be inferred from multiple lines of evidence. The IPCC AR6 **best estimate of ECS is 3.0°C**, with a likely range of 2.5–4.0°C and a very likely range of 2.0–5.0°C. Crucially, IPCC AR6 for the first time narrowed the lower bound of the likely range from 1.5°C to 2.5°C, based on the convergence of three independent lines of evidence: process-based model assessments, historical instrumental warming, and paleoclimate reconstructions.

**Transient climate response (TCR)** is a more directly relevant metric for near-term policy: the warming at the moment of CO₂ doubling in a scenario where CO₂ increases at 1% per year (reaching a doubling in ~70 years). Because the deep ocean has not yet absorbed its full complement of heat, TCR is always lower than ECS — the IPCC AR6 best estimate is **~1.8°C** (likely range 1.2–2.4°C). The gap between TCR and ECS reflects **ocean heat uptake**: the ocean is currently absorbing approximately 90% of the excess energy accumulating in the climate system, delaying surface warming relative to the long-run equilibrium. As the rate of CO₂ increase slows or stabilises, the realised warming catches up toward ECS.

The **Planck feedback** is the fundamental stabilising (negative) response that prevents runaway warming: as the Earth's surface warms, it radiates more longwave energy back to space in proportion to T⁴ (Stefan–Boltzmann law). Linearised around Earth\'s mean temperature (~288 K), this gives a Planck feedback parameter of approximately **−3.2 W/m²/°C** — meaning each degree of warming restores 3.2 W/m² of outgoing radiation. In the absence of any other feedbacks, the Planck feedback alone would imply a climate sensitivity of ΔT = RF / |λ_Planck| = 3.7 / 3.2 ≈ **1.15°C** per CO₂ doubling. The fact that ECS is ~3.0°C rather than ~1.15°C indicates that amplifying feedbacks — primarily water vapour, lapse rate, and surface albedo — roughly double the basic Planck response, while cloud feedbacks are less certain but likely slightly positive in the global mean.

**Historical and paleoclimate constraints on ECS.** The instrumental record (1850–present) provides approximately 1.2°C of warming from ~1.0 W/m² of net forcing, yielding an apparent sensitivity consistent with the IPCC range when ocean heat uptake is properly accounted for. Paleoclimate evidence from the Last Glacial Maximum (LGM, ~21,000 years ago) — when global mean temperatures were ~4–7°C colder and CO₂ was ~180 ppm — provides an independent constraint: the forcing changes are large enough to tightly bound ECS from below. Cenozoic proxy records (boron isotopes, stomatal density) extend this further. Emergent constraints — statistical relationships between observable features of present-day climate models and their ECS — particularly tropical low-cloud variability have helped narrow the upper bound.

Despite decades of research, ECS uncertainty has not dramatically narrowed from the 1.5–4.5°C range first proposed by Charney (1979), primarily because **cloud feedbacks** remain the dominant uncertainty source. Low-altitude marine boundary layer clouds (stratocumulus and trade cumulus) in subtropical regions strongly control Earth\'s planetary albedo; small changes in their coverage or optical depth under warming can either amplify or substantially moderate the final warming. Different cloud microphysics parameterisations in climate models produce markedly different cloud feedbacks.

The **Annual Greenhouse Gas Index (AGGI)** — published annually by NOAA — tracks total radiative forcing from all long-lived greenhouse gases relative to the 1990 baseline. In 2022, the AGGI reached 1.49, meaning total greenhouse gas forcing was 49% higher than in 1990. The AGGI uses **CO₂ equivalents (CO₂e)** — a metric that converts the forcing of non-CO₂ gases (CH₄, N₂O, halocarbons) into the equivalent amount of CO₂ that would produce the same forcing. CO₂e values depend critically on the global warming potential (GWP) timescale chosen: CH₄ has a 100-year GWP of ~30 but a 20-year GWP of ~83, reflecting its shorter atmospheric lifetime but more potent instantaneous forcing.`,
      keyTerms: [
        {
          term: 'equilibrium climate sensitivity (ECS)',
          def: `The global mean surface temperature increase that results from a sustained doubling of atmospheric CO₂ after the climate system has fully equilibrated, including deep-ocean heat uptake. IPCC AR6 best estimate: 3.0°C; likely range 2.5–4.0°C. ECS cannot be directly observed and must be inferred from model assessments, historical warming, and paleoclimate evidence. It exceeds TCR because the ocean\'s thermal inertia delays the full surface warming response.`,
        },
        {
          term: 'transient climate response (TCR)',
          def: 'The global mean surface warming at the moment of CO₂ doubling in a scenario where CO₂ increases at 1% per year (doubling in ~70 years). TCR is always lower than ECS because the deep ocean has not yet absorbed its equilibrium share of energy. IPCC AR6 best estimate: ~1.8°C; likely range 1.2–2.4°C. TCR is more relevant for near-term policy because it describes warming over decadal to century timescales rather than at full equilibrium.',
        },
        {
          term: 'radiative forcing',
          def: 'The change in net downward radiative flux at the tropopause after stratospheric adjustment but before surface temperature changes, expressed in W/m². A standardised measure of the energy imbalance imposed by a forcing agent. CO₂ forcing: ~3.7 W/m² per doubling (logarithmic). Total anthropogenic ERF (2019 vs 1750): +2.72 W/m² (IPCC AR6). Positive values warm; negative values cool the planet.',
        },
        {
          term: 'Planck feedback',
          def: 'The fundamental stabilising climate feedback: as the surface warms, increased longwave emission to space restores radiative balance. The Planck feedback parameter is approximately −3.2 W/m²/°C (linearised Stefan–Boltzmann at 288 K). In the absence of other feedbacks, it implies a no-feedback sensitivity of ~1.15°C per CO₂ doubling. It is the reference baseline against which all other climate feedbacks are measured.',
        },
        {
          term: 'CO₂ doubling',
          def: 'The benchmark perturbation used to define ECS and TCR: a doubling of CO₂ from any baseline (commonly 280–560 ppm, or 420–840 ppm for the current atmosphere). The logarithmic forcing relationship means each doubling adds ~3.7 W/m² regardless of starting concentration. Pre-industrial CO₂ was ~280 ppm; current levels (~425 ppm) are 52% of the way to the first doubling in terms of forcing, having already added ~2.1 W/m² of CO₂ forcing alone.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Four concepts that define how the climate responds to forcing',
      body: `**Radiative forcing as the universal currency of climate perturbation.** The power of the RF framework is that it allows physically disparate agents — CO₂, methane, black carbon soot, volcanic aerosols, changes in solar output — to be compared on a single common scale. A volcanic eruption that injects sulphate aerosols into the stratosphere produces a negative RF of −1 to −5 W/m² for one to two years; the CO₂ forcing since 1750 is +2.1 W/m² and growing at ~0.05 W/m² per year; the total WMGHG forcing is +3.84 W/m². The 11-year solar cycle produces only ±0.1–0.2 W/m² of forcing — more than an order of magnitude smaller than the accumulated CO₂ forcing.

**ECS, TCR, and the spectrum of climate sensitivity.** ECS and TCR bracket the range of temperature responses relevant at different policy timescales. TCR governs warming by mid-century; ECS governs long-term equilibrium and determines what temperature the planet will eventually reach under any given CO₂ stabilisation level. For a stabilisation target of 450 ppm (approximately 2× pre-industrial), the long-run equilibrium warming would be ECS × log₂(450/280) ≈ 3.0 × 0.68 ≈ 2.1°C. For 560 ppm (exactly 2× pre-industrial), the long-run equilibrium would be ~3.0°C. The remaining warming not yet realised — the difference between committed future warming and observed warming so far — is sometimes called the **warming in the pipeline**, estimated at ~0.3°C based on current energy imbalance.

**The Planck feedback and the cascade of feedbacks.** The overall climate feedback parameter λ_total = λ_Planck + Σ(other feedbacks). Key feedbacks and their approximate magnitudes in W/m²/°C (CMIP6 model ranges): Planck −3.2 (stabilising, near-constant); water vapour +1.8 (amplifying — warmer air holds more water vapour, a potent greenhouse gas); lapse rate −0.6 (stabilising in global mean — upper troposphere warms faster than surface, reducing temperature gradient and increasing OLR); surface albedo +0.4 (amplifying — ice and snow melt reduces reflectivity); cloud feedbacks +0.42 (net slightly amplifying in AR6 assessment but highly uncertain, ranging from −0.1 to +0.9 across models). The total λ_total ≈ −1.2 W/m²/°C, implying ECS = −3.7 / λ_total ≈ 3.1°C — consistent with the AR6 best estimate.

**Why ECS uncertainty has persisted.** Since the 1979 Charney Report, ECS has remained in the range 1.5–4.5°C — more than 40 years without the uncertainty collapsing. The primary reason is cloud feedbacks. Low-altitude marine clouds over subtropical oceans cool the Earth by reflecting ~50 W/m² of sunlight; a 4% reduction in their coverage under doubled CO₂ would produce +2 W/m² of additional forcing — comparable to the CO₂ forcing itself. Because these clouds form through small-scale turbulent and microphysical processes that cannot be directly resolved by climate models, they must be parameterised, and different parameterisations yield markedly different cloud responses. Emergent constraint studies — particularly those linking present-day observed variability of tropical clouds to their modelled climate sensitivity — helped narrow the lower bound of ECS in AR6, but the upper end remains constrained only weakly.`,
      cards: [
        {
          name: 'Radiative Forcing: Perturbing the Energy Balance',
          icon: Thermometer,
          color: BRAND.accentHot,
          desc: 'RF quantifies energy imbalance at the tropopause in W/m². CO₂ forcing is logarithmic: ~3.7 W/m² per doubling. Total anthropogenic ERF (2019 vs 1750) is +2.72 W/m². The framework enables comparison of all climate agents — GHGs, aerosols, solar, volcanic — on one scale.',
          examples: 'CO₂ forcing since 1750: +2.1 W/m² · CH₄ forcing: +0.54 W/m² · Aerosol ERF: −1.1 W/m² · Pinatubo 1991: ~−3 W/m² for ~2 years · Solar cycle: ±0.1–0.2 W/m²',
        },
        {
          name: 'ECS and TCR: How Sensitive Is the Climate?',
          icon: Globe,
          color: BRAND.accent,
          desc: `ECS (long-run equilibrium, CO₂ doubled): 3.0°C best estimate (2.5–4.0°C likely). TCR (warming at moment of doubling, 1%/yr increase): ~1.8°C (1.2–2.4°C likely). TCR < ECS because the ocean delays full warming. The gap between them represents ~0.3°C of warming already \'committed\' by current forcing.`,
          examples: 'At 450 ppm stabilisation: committed ECS warming ~2.1°C · At 560 ppm (2×CO₂): ~3.0°C eventual warming · Current CO₂ 425 ppm: ~52% toward first doubling in forcing terms · Warming in the pipeline: ~0.3°C above current observed warming',
        },
        {
          name: 'The Planck Feedback: Basic Stabilisation',
          icon: Activity,
          color: BRAND.jade,
          desc: 'As Earth warms, increased longwave emission to space restores balance. Planck parameter: −3.2 W/m²/°C. Without other feedbacks, ECS would be only ~1.15°C per CO₂ doubling. Amplifying feedbacks (water vapour +1.8, albedo +0.4) and cloud feedbacks (+0.42 net) roughly triple the no-feedback sensitivity to ~3.0°C.',
          examples: 'Water vapour feedback: +1.8 W/m²/°C (largest amplifying feedback) · Lapse rate: −0.6 W/m²/°C (stabilising) · Ice-albedo: +0.4 W/m²/°C · Total feedback parameter: ~−1.2 W/m²/°C → ECS ~3.1°C',
        },
        {
          name: 'Aerosol Uncertainty: The Wild Card',
          icon: BarChart,
          color: BRAND.coral,
          desc: 'Aerosol ERF ranges from −0.7 to −1.9 W/m² (IPCC AR6) — the largest single uncertainty in total anthropogenic forcing. Aerosols cool directly (scattering sunlight) and indirectly (modifying cloud brightness and lifetime). Declining aerosol emissions from clean-air policies may unmask hidden GHG warming.',
          examples: 'Direct aerosol effect (scattering/absorption): −0.3 W/m² · Cloud lifetime effect: −0.2 W/m² · Aerosol–cloud interactions (indirect): −0.5 to −1.3 W/m² · AGGI 2022: 1.49 (49% above 1990 GHG forcing) · CH₄ GWP-100: ~30; GWP-20: ~83',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From doubled CO₂ to new equilibrium: the forcing–feedback cascade',
      body: `Follow the energy imbalance created by doubled CO₂ through the climate system\'s response. Each node represents a physical step in the cascade, from the initial instantaneous forcing to the slow feedbacks that ultimately set the equilibrium temperature. The gap between what the Planck feedback alone would predict (~1.15°C) and the full ECS (~3.0°C) is explained by the amplifying feedbacks encountered along the way. Understanding this cascade is the key to interpreting both model projections and paleo-temperature records.`,
      interaction: {
        type: 'flow-simulator' as const,
        description: 'The radiative forcing and climate feedback cascade from doubled CO₂ concentration to new equilibrium surface temperature (ECS)',
        nodes: [
          {
            id: 'doubled-co2',
            label: 'Doubled CO₂ concentration',
            description: 'Atmospheric CO₂ doubles from its reference level (e.g. 280 → 560 ppm, or in the current context, 425 → 850 ppm). Because the forcing relationship is logarithmic, each doubling adds the same increment of forcing (~3.7 W/m²) regardless of starting point. CO₂ is transparent to visible solar radiation but absorbs strongly in the infrared (principally at 15 µm and in the 9–13 µm atmospheric window), reducing outgoing longwave radiation (OLR) and creating a radiative imbalance at the tropopause.',
            color: BRAND.gold,
          },
          {
            id: 'instantaneous-rf',
            label: 'Instantaneous radiative forcing (+3.7 W/m²)',
            description: 'Immediately after CO₂ doubles — before any temperature response — the tropopause receives ~3.7 W/m² less outgoing longwave radiation than it emits. This is the instantaneous RF: the energy imbalance imposed on the system. The stratosphere rapidly cools (in weeks to months) to restore its own radiative balance, slightly modifying the tropopause flux. After stratospheric adjustment, the adjusted RF is ~3.7 W/m², which is the standard definition. Effective RF (ERF) further includes tropospheric rapid adjustments.',
            color: BRAND.accentHot,
          },
          {
            id: 'planck-response',
            label: 'Planck response (surface warms)',
            description: 'The surface and troposphere begin to warm in response to the energy imbalance. By Stefan–Boltzmann, every degree of surface warming increases outgoing LW radiation by ~3.2 W/m² (the Planck feedback). This is the fundamental restoring force. Acting alone, the Planck feedback would restore balance after a warming of 3.7 / 3.2 ≈ 1.15°C — the so-called no-feedback climate sensitivity. All additional warming above 1.15°C is due to amplifying feedbacks.',
            color: BRAND.accent,
          },
          {
            id: 'amplifying-feedbacks',
            label: 'Amplifying feedbacks (WV, lapse rate, albedo)',
            description: 'Three well-understood amplifying feedbacks boost the warming above the Planck-only response. (1) Water vapour (+1.8 W/m²/°C): warmer air holds more water vapour, itself a potent greenhouse gas, adding ~1.8 W/m²/°C of additional warming per degree. (2) Lapse rate (−0.6 W/m²/°C): the upper troposphere warms faster than the surface, increasing OLR — a slight stabilising effect. (3) Surface albedo (+0.4 W/m²/°C): melting snow and ice reduce surface reflectivity, increasing solar absorption. Combined, these feedbacks add roughly +1.6 W/m²/°C to the climate response.',
            color: BRAND.jade,
          },
          {
            id: 'dampening-feedbacks',
            label: 'Dampening feedbacks (clouds)',
            description: 'Cloud feedbacks are the largest source of uncertainty in ECS. Low-altitude marine stratocumulus and trade cumulus clouds reflect large amounts of solar radiation; if warming reduces their coverage or reflectivity, additional solar energy reaches the surface (a positive feedback). If warming increases low cloud coverage, the opposite occurs. IPCC AR6 assesses the net global cloud feedback as slightly positive (+0.42 W/m²/°C, likely range −0.1 to +0.9), meaning clouds modestly amplify warming in the global mean, but uncertainty spans from slight cooling to significant warming.',
            color: BRAND.amethyst,
          },
          {
            id: 'new-equilibrium',
            label: 'New equilibrium temperature (ECS)',
            description: 'After all feedbacks have operated and the deep ocean has fully adjusted (a process taking centuries to millennia), the climate system reaches a new equilibrium. The equilibrium warming ΔT_eq = −RF / λ_total, where λ_total ≈ −1.2 W/m²/°C is the sum of all feedbacks. For a CO₂ doubling (RF = 3.7 W/m²), this gives ECS ≈ 3.1°C — consistent with the IPCC AR6 best estimate of 3.0°C (likely 2.5–4.0°C). The transient climate response (TCR ≈ 1.8°C) is realised first; the additional ~1.2°C is locked in as committed warming that will emerge as ocean heat uptake slows.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'doubled-co2',         to: 'instantaneous-rf',      label: 'logarithmic forcing: RF ≈ 5.35 × ln(C/C₀) ≈ +3.7 W/m²' },
          { from: 'instantaneous-rf',     to: 'planck-response',       label: 'energy imbalance drives surface and tropospheric warming' },
          { from: 'planck-response',      to: 'amplifying-feedbacks',  label: 'surface warming triggers water vapour, lapse rate, and albedo feedbacks' },
          { from: 'amplifying-feedbacks', to: 'dampening-feedbacks',   label: 'net amplifying feedback (+1.6 W/m²/°C) balanced against cloud uncertainty' },
          { from: 'dampening-feedbacks',  to: 'new-equilibrium',       label: 'total feedback parameter λ ≈ −1.2 W/m²/°C → ECS ≈ 3.0°C' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What is radiative forcing and how is it formally defined in climate science?',
          a: [
            'Radiative forcing is the change in net downward radiative flux at the tropopause after stratospheric temperatures have adjusted to the perturbation but before surface or tropospheric temperatures have changed, expressed in W/m²',
            'Radiative forcing is the total increase in global mean surface temperature caused by adding a greenhouse gas to the atmosphere, measured in degrees Celsius after the climate system has reached equilibrium',
            'Radiative forcing is the fraction of outgoing longwave radiation absorbed by a greenhouse gas layer, expressed as a dimensionless number between 0 and 1',
            'Radiative forcing is the rate of change of atmospheric CO₂ concentration per year, used as a proxy for the speed of climate change',
          ],
          correct: 0,
          explain: `Radiative forcing is formally defined as the change in net downward radiative flux at the tropopause, evaluated after stratospheric temperatures have adjusted to the perturbation but before any surface or tropospheric temperature response. This definition deliberately isolates the initial energy imbalance imposed by the forcing agent from the climate system\'s subsequent feedback responses. Option B describes equilibrium temperature change, which is the response to forcing — not forcing itself. Option C describes an absorption fraction (related to optical depth), which is a property of radiative transfer but not the definition of RF. Option D describes the rate of concentration change, which is related to emissions but not RF. The unit W/m² allows diverse forcing agents (CO₂, CH₄, aerosols, solar output changes, volcanic eruptions) to be directly compared on a single energy-flux scale, making RF the universal currency of climate perturbation.`,
        },
        {
          q: 'What does equilibrium climate sensitivity (ECS) represent, and why is it different from what we observe in the instrumental temperature record?',
          a: [
            'ECS represents the warming observed in any given year divided by the cumulative CO₂ forcing since 1750; it can be directly read off the instrumental record by plotting temperature against radiative forcing',
            'ECS represents the global mean surface warming that results from a sustained doubling of CO₂ after the climate system has fully equilibrated, including deep-ocean heat uptake; it exceeds observed warming because the ocean is currently absorbing ~90% of the excess energy, delaying the full surface temperature response — the remaining committed warming will be realised over centuries to millennia',
            'ECS is identical to the transient climate response and represents the warming at the moment CO₂ doubles in any scenario; the difference between observed warming and ECS is due entirely to measurement uncertainty in the temperature record',
            'ECS represents the warming from CO₂ alone, excluding all feedbacks; observed warming exceeds ECS because real-world feedbacks amplify the initial CO₂ forcing beyond what the sensitivity estimate captures',
          ],
          correct: 1,
          explain: `ECS is the equilibrium global mean surface warming per CO₂ doubling — the temperature the planet would reach if CO₂ were doubled and then held constant for long enough for the deep ocean to absorb its full complement of heat. This process takes centuries to millennia because of the ocean\'s enormous heat capacity. The current observed warming (~1.2°C) is substantially less than the ~3.0°C ECS for full CO₂ doubling partly because we have not yet doubled CO₂ (current forcing is roughly half of a doubling\'s forcing), but also because ocean heat uptake is delaying the full surface response. Option A describes the empirical climate sensitivity, which is a rough observational estimate but not the formal definition of ECS. Option C confuses ECS with TCR — ECS explicitly requires full equilibration, which TCR does not. Option D inverts the relationship: ECS by definition includes all feedbacks (water vapour, albedo, clouds, lapse rate); without feedbacks, sensitivity would be only ~1.15°C per doubling.`,
        },
        {
          q: 'Why is the transient climate response (TCR) lower than equilibrium climate sensitivity (ECS), and what physical process accounts for the difference?',
          a: [
            'TCR is lower than ECS because CO₂ forcing is measured at the tropopause and weakens as it propagates down to the surface, so the surface experiences less forcing than the tropopause-level calculation suggests',
            'TCR is lower than ECS because aerosols partially offset greenhouse gas forcing in the short term; as aerosol emissions decline with clean-air policies, TCR and ECS will converge toward the same value',
            'TCR is lower than ECS because the deep ocean absorbs heat on century to millennium timescales, delaying the full surface temperature response; at the moment of CO₂ doubling (realised over ~70 years in the 1%/yr scenario), the ocean has not yet equilibrated, so surface warming is below its long-run equilibrium value — the difference represents committed future warming already locked in by current atmospheric composition',
            'TCR is lower than ECS because TCR is measured at doubled CO₂ while ECS is measured at quadrupled CO₂; the additional forcing from the second doubling drives the higher ECS value',
          ],
          correct: 2,
          explain: 'The TCR–ECS gap is entirely explained by ocean heat uptake. The ocean has a heat capacity approximately 1,000 times larger than the atmosphere; it is currently absorbing ~90% of the energy imbalance accumulating in the climate system (~0.9 W/m² out of the ~1.0 W/m² net imbalance). This uptake continuously draws heat away from the surface and atmosphere, keeping observed warming below equilibrium. TCR captures the realised warming at the moment of doubling in a transient scenario — a moment when the ocean is still far from equilibrium. ECS captures the full equilibrium after the ocean has warmed throughout its depth. Option A is incorrect: radiative forcing is calculated at the tropopause by convention, but this convention does not imply the surface receives less forcing; the full surface energy balance is altered. Option B is incorrect: aerosols do offset GHG forcing and may mask some warming, but this is a separate issue from the TCR–ECS distinction, which would exist even in the complete absence of aerosols. Option D is incorrect: both TCR and ECS are defined relative to the same CO₂ doubling; they differ only in the degree of equilibration required.',
        },
        {
          q: 'What is the IPCC AR6 best estimate of equilibrium climate sensitivity (ECS), and what three independent lines of evidence were used to constrain it?',
          a: [
            'The IPCC AR6 best estimate of ECS is 1.5°C (likely range 1.0–2.5°C), constrained primarily by the satellite temperature record of the past 40 years, which provides sufficient precision to rule out higher values',
            'The IPCC AR6 best estimate of ECS is 3.0°C (likely range 2.5–4.0°C), constrained by three independent lines of evidence: process-based assessment of climate model feedbacks, the historical instrumental warming record combined with estimated forcing, and paleoclimate reconstructions including Last Glacial Maximum and Cenozoic proxy records',
            'The IPCC AR6 best estimate of ECS is 4.5°C (likely range 3.5–6.0°C), based on emergent constraint studies that found earlier assessments systematically underestimated cloud feedbacks',
            'The IPCC AR6 best estimate of ECS is 2.5°C (likely range 1.5–4.0°C), unchanged from the AR5 assessment; the three lines of evidence used were global circulation models, satellite radiative budget measurements, and volcano-forced cooling events',
          ],
          correct: 1,
          explain: 'IPCC AR6 assesses ECS at a best estimate of 3.0°C with a likely range of 2.5–4.0°C and a very likely range of 2.0–5.0°C. This represents a significant advance over AR5, which assessed ECS as likely in the range 1.5–4.5°C with no best estimate. The AR6 assessment synthesised three independent lines of evidence: (1) **Process-based model evidence** — analysing the feedbacks (water vapour, lapse rate, clouds, albedo) in climate models and their physical basis, particularly using emergent constraint relationships between observable cloud variability and model ECS; this narrowed the lower bound by ruling out ECS below ~2.5°C. (2) **Historical instrumental record** — using the observed warming since 1850 combined with estimated ERF and ocean heat uptake to constrain ECS via the energy balance framework; this approach is consistent with the 2.5–4.0°C range after correcting for pattern effects. (3) **Paleoclimate reconstructions** — ECS constraints from the Last Glacial Maximum (large, well-constrained forcing changes), the mid-Pliocene warm period (~400 ppm CO₂, ~2–4°C warmer), and the Cenozoic long-term CO₂-temperature relationship all support ECS in the 2.5–4.0°C range. None of the other options correctly states the AR6 best estimate or the evidence base.',
        },
        {
          q: 'Why is aerosol radiative forcing the largest source of uncertainty in total anthropogenic radiative forcing, and what are the two main mechanisms through which aerosols force climate?',
          a: [
            'Aerosol forcing is the largest uncertainty because aerosols are so short-lived (days to weeks) that they cannot be monitored by satellite; their forcing is estimated only from ground-based measurements at a limited number of stations',
            'Aerosol forcing is uncertain because aerosols are both warming (black carbon absorbs sunlight) and cooling (sulphates scatter sunlight) and these effects exactly cancel, making the net forcing indistinguishable from zero within measurement uncertainty',
            'Aerosol forcing uncertainty arises because aerosols are regionally concentrated over industrial areas and cannot be assigned a globally averaged forcing value; only CO₂ and other well-mixed gases have a meaningful global radiative forcing',
            'Aerosol forcing is the largest uncertainty because the pre-industrial baseline aerosol burden is unknown, and because the indirect effect of aerosols on cloud properties — altering cloud droplet size, reflectivity, and lifetime — involves microphysical processes too small to resolve in global climate models; the two main mechanisms are the direct effect (aerosols scatter and absorb sunlight) and the indirect effect (aerosols act as cloud condensation nuclei, modifying cloud brightness and extent)',
          ],
          correct: 3,
          explain: 'Aerosol ERF is the largest uncertainty in total anthropogenic forcing for two interconnected reasons. First, the pre-industrial aerosol baseline — the abundance and distribution of natural aerosols (sea salt, dust, biogenic particles) before industrialisation — is poorly constrained, yet it determines the reference state against which anthropogenic aerosol forcing is measured. Second, and more fundamentally, aerosols interact with clouds through complex microphysical pathways. The **indirect (cloud) effects** include the first indirect effect (Twomey effect): more aerosol particles → more cloud condensation nuclei → more but smaller cloud droplets → brighter, more reflective clouds (negative forcing). The second indirect effect (Albrecht/lifetime effect): smaller droplets are less likely to coalesce and precipitate → clouds persist longer → increased cloud fraction (negative forcing). These processes involve droplet-scale physics that cannot be directly resolved in global models. IPCC AR6 estimates aerosol ERF at −1.1 W/m² with a likely range of −0.4 to −1.7 W/m². Option A is incorrect: satellites (MODIS, MISR, CERES) do provide aerosol optical depth globally. Option B is incorrect: while black carbon warms and sulphates cool, they do not cancel; sulphate and organic aerosol cooling substantially dominates, producing a net negative (cooling) aerosol forcing. Option C is incorrect: a global mean forcing value is assigned to aerosols in all major assessments, though regional forcing patterns are indeed heterogeneous.',
        },
      ],
    },
  ],
}

export default climateSensitivityForcing
