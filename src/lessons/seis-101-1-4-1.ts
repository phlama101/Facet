import { BarChart, Globe, Layers, TrendingUp, Map } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const probabilisticSeismicHazard: Lesson = {
  id: 'seis-101-1-4-1',
  title: 'Probabilistic Seismic Hazard Analysis',
  track: 'geo',
  trackName: 'Seismology',
  level: 'Beginner',
  duration: '14 min',
  xpReward: 150,
  description: 'How do engineers decide how strong a building must be to survive earthquakes that haven\'t happened yet? Probabilistic Seismic Hazard Analysis (PSHA) transforms centuries of fault data and ground-motion physics into design-ready probabilities, revealing which communities face the greatest long-term risk and why the "Big One" might not be the most important earthquake to prepare for.',
  sources: [
    { org: 'USGS', title: 'USGS — National Seismic Hazard Model (NSHM) 2023', url: 'https://earthquake.usgs.gov/hazards/hazmaps/' },
    { org: 'USGS', title: 'USGS — ShakeMap Science and Technology', url: 'https://earthquake.usgs.gov/data/shakemap/' },
    { org: 'IRIS', title: 'IRIS/EarthScope — Ground Motion and Seismic Hazard Resources', url: 'https://www.iris.edu/hq/programs/education_and_outreach' },
    { org: 'NIST', title: 'NIST — NEHRP Recommended Seismic Provisions for Buildings', url: 'https://www.nehrp.gov/pdf/2020ProvisionsPart1.pdf' },
    { org: 'FEMA', title: 'FEMA — Seismic Hazard and Risk Assessment', url: 'https://www.fema.gov/emergency-managers/risk-management/earthquake' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Quantifying the Unthinkable: Probability, Time, and Ground Motion',
      body: `Probabilistic Seismic Hazard Analysis (PSHA) is the mathematical framework that converts geologic fault data, historical seismicity, and ground-motion physics into the probabilistic statements that drive building codes, insurance rates, and infrastructure investment. Rather than asking "will a large earthquake happen?" — which has no useful answer — PSHA asks "what is the probability that ground shaking will exceed a critical level at this specific site during the next 50 years?" That question has a quantifiable answer.

The cornerstone of PSHA is the **hazard curve**: a graph plotting annual probability of exceedance against peak ground acceleration (PGA) or spectral acceleration. From the hazard curve, engineers extract the **return period** — the average recurrence interval for a given ground-motion level. Building codes in the United States typically require structures to be designed for the 10% in 50 years ground motion, corresponding to a 475-year return period. Critical facilities such as hospitals and nuclear plants use the 2% in 50 years level (~2,475-year return period), accepting less than one chance in fifty that damaging shaking will occur during a structure's service life.

**Ground motion prediction equations (GMPEs)**, also called attenuation relations, are the engine of PSHA. They are empirical models — calibrated on thousands of recorded accelerograms — that relate earthquake magnitude, source-to-site distance, fault mechanism, and **VS30** (shear-wave velocity in the top 30 m, a proxy for site stiffness) to the expected ground-motion intensity and its variability. The 2023 USGS National Seismic Hazard Model uses multiple competing GMPEs within a **logic tree** framework: each branch represents a defensible scientific choice (fault geometry, maximum magnitude, GMPE family), and the final hazard estimate is a weighted average that propagates **epistemic uncertainty** — the uncertainty arising from incomplete knowledge — through to the final product.

**Uniform Hazard Spectra (UHS)** translate hazard curves across a range of structural periods into a single design spectrum. A UHS shows, for each structural period (0.1 s for stiff buildings; 2–3 s for tall ones), the spectral acceleration that has a 10% chance of exceedance in 50 years. Because different faults and magnitudes dominate the hazard at different periods, the UHS is not the response spectrum of any single earthquake — it is an envelope of the worst contributions from all sources. **Site amplification** modifies the bedrock UHS: soft-soil sites (VS30 < 180 m/s) experience 2–5× greater shaking than bedrock at the same probability level, a correction that PSHA incorporates through site-class factors.`,
      keyTerms: [
        {
          term: 'PSHA',
          def: 'Probabilistic Seismic Hazard Analysis: a framework that integrates earthquake occurrence rates, ground-motion prediction equations, and site conditions to compute the probability of exceeding a given shaking level at a specific location over a defined time period.',
        },
        {
          term: 'Hazard Curve',
          def: 'A graph of annual probability of exceedance versus ground-motion intensity (PGA or spectral acceleration) at a site, the fundamental output of PSHA from which return periods and design values are derived.',
        },
        {
          term: 'Return Period',
          def: 'The average recurrence interval for a given ground-motion level; the 475-year return period corresponds to 10% probability of exceedance in 50 years and is the standard design basis for ordinary buildings in US codes.',
        },
        {
          term: 'GMPE',
          def: 'Ground Motion Prediction Equation: an empirical model relating earthquake magnitude, distance, fault type, and site conditions to expected shaking intensity and its standard deviation, calibrated on thousands of strong-motion recordings.',
        },
        {
          term: 'Uniform Hazard Spectrum',
          def: 'A design response spectrum in which each period ordinate corresponds to the same probability of exceedance (e.g., 10% in 50 years); it represents an envelope of hazard contributions from all seismic sources rather than any single earthquake scenario.',
        },
        {
          term: 'Logic Tree',
          def: 'A branching diagram used in PSHA to represent competing scientific choices (fault parameters, maximum magnitudes, GMPEs) with assigned weights, allowing epistemic uncertainty to be propagated into the final hazard estimate.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'The Four Pillars of PSHA',
      body: 'PSHA integrates four distinct scientific inputs. Weaknesses in any one pillar propagate into the final hazard estimate; this is why modern PSHA uses logic trees with alternative models at each stage rather than a single "best" model.',
      cards: [
        {
          name: 'Seismic Source Models',
          icon: Map,
          color: BRAND.coral,
          desc: 'Catalogues of faults (geometry, slip rate, maximum magnitude) and distributed seismicity zones. Each source contributes earthquakes at a rate defined by a **Gutenberg-Richter** relation or characteristic earthquake model.',
          examples: 'USGS NSHM 2023 includes 2,600+ fault sections in the western US and revised recurrence rates for the Cascadia Subduction Zone (M 9.0, ~500-year recurrence) and Wasatch Front, Utah.',
        },
        {
          name: 'Ground Motion Prediction',
          icon: TrendingUp,
          color: BRAND.jade,
          desc: 'GMPEs predict median shaking and log-normal variability (σ) at a site from each source. Because σ is large (~0.6 log units), the tails of the distribution dominate hazard at long return periods — a crucial and counterintuitive feature of PSHA.',
          examples: 'NGA-West2 suite (2014): 5 competing GMPEs each calibrated on 21,000+ recordings. At 2,475-year return period, ground motion can be 3-4× the median prediction, driven by sigma.',
        },
        {
          name: 'Site Amplification',
          icon: Layers,
          color: BRAND.gold,
          desc: 'VS30 maps classify sites from bedrock (A: VS30 >1500 m/s) to very soft soil (E: VS30 <180 m/s). Site factors amplify or de-amplify the reference rock hazard. Nonlinear soil response reduces amplification at very high strain levels.',
          examples: 'San Francisco Bay mud (VS30 ~120 m/s, Site Class E): amplification factor ~3-4× at 1-Hz relative to bedrock. Drives why BART tunnels and Bay Bridge required different design spectra than Caltrain on rock.',
        },
        {
          name: 'Hazard Integration',
          icon: BarChart,
          color: BRAND.amethyst,
          desc: 'Annual exceedance rates from all source–path–site combinations are summed to build the hazard curve. Deaggregation then reveals which magnitude–distance pairs dominate the hazard at a chosen return period — essential for selecting design ground motions.',
          examples: 'Los Angeles at 475-yr return period: hazard dominated by M 6.5-7.0 events on local blind-thrust faults at 10-30 km. At 2,475-yr: M 7.5-8.0 on the southern San Andreas (~60 km) contributes significantly.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'From Hazard Curves to ShakeMaps and Building Codes',
      body: 'PSHA outputs feed directly into two operational products with major societal impact: building code design spectra that specify minimum structural strength, and near-real-time ShakeMaps that support emergency response after each damaging earthquake.',
      cards: [
        {
          name: 'USGS National Seismic Hazard Model',
          icon: Globe,
          color: BRAND.coral,
          desc: 'The NSHM provides probabilistic ground-motion maps for the entire United States, updated approximately every 6 years to incorporate new fault data, seismicity catalogs, and GMPEs. The 2023 update substantially revised Pacific Northwest hazard.',
          examples: '2023 NSHM: First major revision of western US model since 2014. Revised Cascadia zone probabilities; added 50+ new fault sources in intermountain west; adopted NGA-West2 and NGA-Subduction GMPE suites.',
        },
        {
          name: 'Design Spectra and Building Codes',
          icon: TrendingUp,
          color: BRAND.jade,
          desc: 'ASCE 7 (American Society of Civil Engineers) and IBC (International Building Code) convert NSHM hazard maps into site-class-adjusted design spectra. The MCE_R (Risk-Targeted Maximum Considered Earthquake) level targets a 1% collapse probability in 50 years for code-conforming buildings.',
          examples: 'A hospital in Seattle (Site Class D) must be designed for spectral accelerations derived from the 2,475-year hazard, further adjusted for soil amplification. Equivalent demand in Tokyo uses Japan\'s Level 2 spectrum from a similar PSHA framework.',
        },
        {
          name: 'ShakeMap and PSHA Validation',
          icon: Map,
          color: BRAND.gold,
          desc: 'ShakeMaps produced after earthquakes can be compared against PSHA predictions to test whether observed ground motions fall within the expected probabilistic range. Systematic discrepancies drive PSHA model updates.',
          examples: '2019 Ridgecrest, CA sequence (M 7.1): ShakeMap PGAs exceeded PSHA median but remained within expected variability (within ~1.5 sigma), validating NGA-West2 GMPEs for strike-slip ruptures in the eastern California shear zone.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'PSHA Workflow: From Fault to Design Spectrum',
      body: 'The full analytical chain from geological fault data to a building code design spectrum, showing how uncertainties are tracked at each stage.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'The PSHA workflow from seismic source characterisation through ground-motion modelling to the final design spectrum used by engineers',
        nodes: [
          {
            id: 'source-model',
            label: 'Seismic Source Model',
            description: 'Geologists map active faults: geometry, slip rate, paleoseismic recurrence intervals, and maximum magnitude. Distributed seismicity zones fill gaps where faults are uncharacterised. Each source has a magnitude-frequency distribution.',
            color: BRAND.coral,
          },
          {
            id: 'gmpe',
            label: 'Ground Motion Prediction',
            description: 'For each magnitude-distance-site combination, GMPEs predict the median log(PGA) or spectral acceleration and the standard deviation (sigma ~0.6). Large sigma means rare exceedances can be 3-5× the median — critical for long return periods.',
            color: BRAND.gold,
          },
          {
            id: 'logic-tree',
            label: 'Logic Tree',
            description: 'Competing fault models, maximum magnitudes, and GMPE families are represented as branches with weights (e.g., 0.4/0.3/0.3). Epistemic uncertainty — scientific disagreement — propagates through the tree to produce a distribution of hazard curves rather than a single result.',
            color: BRAND.jade,
          },
          {
            id: 'hazard-curve',
            label: 'Hazard Curve',
            description: 'Annual probability of exceedance is plotted against PGA or spectral acceleration. Reading off the 1/475 annual probability (10% in 50 yr) or 1/2475 (2% in 50 yr) gives the design ground-motion levels for standard and critical structures.',
            color: BRAND.amethyst,
          },
          {
            id: 'site-amplification',
            label: 'Site Amplification',
            description: 'VS30 classification (NEHRP A-E) adjusts the reference-rock hazard curve. Soft soils (Class E, VS30 <180 m/s) amplify low-to-moderate shaking 3-5× but may de-amplify at very high strain levels due to nonlinear soil behaviour.',
            color: BRAND.ruby,
          },
          {
            id: 'design-spectrum',
            label: 'Design Spectrum (UHS)',
            description: 'The Uniform Hazard Spectrum assembles the target spectral acceleration at each structural period (0.1–4 s) at the chosen probability level. Engineers use this spectrum to size beams, columns, and isolation systems for the building\'s natural period.',
            color: BRAND.accent,
          },
        ],
        edges: [
          { from: 'source-model', to: 'gmpe', label: 'Magnitude, distance, mechanism' },
          { from: 'gmpe', to: 'logic-tree', label: 'Multiple GMPE branches' },
          { from: 'logic-tree', to: 'hazard-curve', label: 'Weighted hazard integration' },
          { from: 'hazard-curve', to: 'site-amplification', label: 'Reference rock spectrum extracted' },
          { from: 'site-amplification', to: 'design-spectrum', label: 'Site-class factors applied' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'A building code specifies the "10% probability of exceedance in 50 years" ground motion as the design level. What return period does this correspond to, and what does it mean physically?',
          a: [
            'A 50-year return period; the design earthquake occurs once every 50 years on average',
            'A 475-year return period; on average, this ground-motion level is exceeded once every 475 years at the site',
            'A 500-year return period; there is a 10% chance of exceedance in any given year',
            'A 50-year return period; the building must survive 10 earthquakes during its design life',
          ],
          correct: 1,
          explain: 'B is correct because for a Poisson process, a 10% probability of exceedance in 50 years corresponds to an annual probability of exceedance of approximately 0.00211, which is 1/475 — a 475-year mean return period. A is wrong: the 50-year figure is the exposure period (building lifetime), not the return period. C is wrong: the annual exceedance probability is ~0.2%, not 10%. D is wrong: a Poisson process does not guarantee a fixed number of exceedances during any exposure period; 10% in 50 years means the building has a 90% chance of never being subjected to this ground-motion level during its life.',
        },
        {
          q: 'At very long return periods (e.g., 2,475 years), why do PSHA-derived ground motions often reach 3–5 times the median GMPE prediction, even for sites with no unusually large nearby faults?',
          a: [
            'Long return periods preferentially include contributions from distant mega-thrust faults that produce extremely large motions',
            'The log-normal variability (sigma) of GMPEs means rare high-sigma events dominate the tail of the hazard distribution at low annual probabilities',
            'Soil nonlinearity generates anomalous amplification only at very long return periods',
            'PSHA applies a conservatism factor of 3–5× to account for unknown fault sources',
          ],
          correct: 1,
          explain: 'B is correct: GMPEs predict log-normally distributed ground motions with standard deviations of ~0.6 log units. At the 2,475-year level, the hazard is dominated by events that occur at high multiples of sigma above the median. Because the log-normal distribution has heavy tails, even moderate-magnitude nearby earthquakes contribute large ground motions at low annual probabilities when sigma is integrated over all possible residuals. A is partially relevant at specific locations but does not explain the general 3–5× phenomenon. C is wrong: nonlinear soil response actually reduces amplification at high strains. D is wrong: sigma is not a conservatism factor but a physically calibrated measure of ground-motion variability.',
        },
        {
          q: 'What is the purpose of the logic tree in modern PSHA, and what type of uncertainty does it address?',
          a: [
            'It allocates weight between different return periods to create a blended design spectrum',
            'It represents competing scientific models for fault parameters and GMPEs, propagating epistemic uncertainty — uncertainty from incomplete knowledge — through to the final hazard curve',
            'It converts aleatory uncertainty (random variability) in ground-motion recordings into a single best-estimate GMPE',
            'It provides a decision tree for emergency managers to choose between evacuation and shelter-in-place responses',
          ],
          correct: 1,
          explain: 'B is correct: PSHA distinguishes between aleatory uncertainty (inherent randomness, captured by GMPE sigma) and epistemic uncertainty (scientific disagreement about the correct model). Logic trees address epistemic uncertainty by assigning weights to alternative plausible models — different fault geometries, maximum magnitudes, slip rates, and GMPE families. The hazard is computed separately for each branch combination, and results are combined as a weighted mean and fractile distribution. A is wrong: the logic tree does not blend return periods. C is wrong: aleatory uncertainty is handled within each GMPE\'s sigma, not by the logic tree. D is wrong: the logic tree is a scientific tool, not an emergency response protocol.',
        },
        {
          q: 'A PSHA deaggregation for a site in Los Angeles at the 475-year return period shows that M 6.5–7.0 events at 10–30 km dominate the hazard, while the San Andreas fault (M 7.8, 60 km away) contributes only 15%. Why might the San Andreas contribute so little despite its larger magnitude?',
          a: [
            'The San Andreas has a lower slip rate and therefore a much longer recurrence interval than local blind-thrust faults',
            'Distance attenuation and the lower occurrence rate of M 7.8 events make the local moderate faults the dominant hazard contributor at the 475-year return period',
            'PSHA ignores fault sources beyond 50 km regardless of magnitude',
            'The San Andreas fault produces mainly vertical ground motion that is inefficient at structural damage',
          ],
          correct: 1,
          explain: 'B is correct: hazard deaggregation reflects the combined effect of occurrence rate and ground-motion severity at the site. Although the San Andreas produces larger earthquakes, M 7.8 events on the southern San Andreas have a recurrence of ~150–200 years and the fault is 60 km away, where attenuation significantly reduces PGA. The many local blind-thrust faults (Puente Hills, Elysian Park, Hollywood) produce M 6.5–7.0 events more frequently and at shorter distances, collectively dominating the 475-year hazard. A has merit but is not the primary reason at 475-year; the San Andreas has a moderate slip rate of ~20 mm/yr. C is false: PSHA includes all sources regardless of distance. D is false: San Andreas strike-slip motion produces strong horizontal shaking.',
        },
        {
          q: 'How does the Uniform Hazard Spectrum (UHS) differ from the response spectrum of a single scenario earthquake, and why does this matter for engineering design?',
          a: [
            'The UHS is smoother than a scenario spectrum because it averages over all possible earthquake magnitudes at a fixed distance',
            'The UHS represents the same probability of exceedance at every structural period, meaning it envelopes contributions from multiple earthquake scenarios — potentially being more conservative than any single event',
            'The UHS uses deterministic median ground motions rather than probabilistic calculations, making it easier to verify',
            'The UHS is only applicable to bedrock sites; site-class adjustments make it equivalent to a scenario spectrum',
          ],
          correct: 1,
          explain: 'B is correct: the UHS is constructed by extracting the spectral acceleration at each period that corresponds to the target probability level (e.g., 10% in 50 years). Because different faults and magnitudes dominate hazard at different periods — nearby moderate faults for short periods, distant large faults for long periods — the UHS envelope can exceed the response spectrum of any single credible earthquake at some periods. This conservatism is intentional: it ensures design adequacy against whichever source is most critical for each structural period. A is wrong: the UHS is not simply a smooth average. C is wrong: UHS is fully probabilistic. D is wrong: site-class adjustments modify the UHS but do not reduce it to a scenario spectrum.',
        },
      ],
    },
  ],
}

export default probabilisticSeismicHazard
