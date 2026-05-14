import { Thermometer, Globe, Activity, BarChart } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const climateProjectionsScenarios: Lesson = {
  id: 'clim-201-1-3-3',
  title: 'Climate Projections & Emissions Scenarios',
  track: 'cli',
  trackName: 'Climatology',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: 'What the future holds under different emissions pathways — SSP scenarios, 1.5°C vs 2°C thresholds, regional climate projections, sea level rise, and the concept of committed warming.',
  sources: [
    { org: 'IPCC',   title: 'IPCC Sixth Assessment Report WG1 — The Physical Science Basis',    url: 'https://www.ipcc.ch/report/ar6/wg1/' },
    { org: 'NOAA',   title: 'NOAA Global Climate Dashboard — Sea Level and Temperature Trends', url: 'https://www.climate.gov/maps-data/dataset/global-mean-sea-level-noaa-laboratory-satellite-altimetry' },
    { org: 'Nature', title: 'Nature — Remaining carbon budgets and 1.5°C pathways',            url: 'https://www.nature.com/articles/s41558-018-0324-6' },
    { org: 'Science', title: `Science — Tipping elements in the Earth\'s climate system`,      url: 'https://www.science.org/doi/10.1126/science.1149540' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Reading the future: how scientists translate emissions choices into climate outcomes',
      body: `Climate projections are not predictions of a single inevitable future — they are conditional forecasts: given a particular pathway of greenhouse-gas emissions over the coming decades, what does the physical climate system do in response? The translation from human choices to climate outcomes is formalised through **Shared Socioeconomic Pathways (SSPs)**, the scenario framework used in IPCC\'s Sixth Assessment Report (AR6, 2021). SSPs replaced the older Representative Concentration Pathways (RCPs) of AR5 by coupling radiative forcing targets with explicit socioeconomic narratives about land use, energy systems, population, and governance.

Four SSPs bracket the plausible range of human futures. **SSP1-1.9** is the most ambitious mitigation pathway: net-zero CO₂ emissions around 2050, atmospheric CO₂ peaking below 430 ppm, and total radiative forcing held to 1.9 W/m² by 2100. This is the only pathway consistent with limiting warming to 1.5°C above pre-industrial. **SSP2-4.5** is the "middle of the road" scenario: moderate mitigation efforts, CO₂ reaching ~600 ppm by 2100, forcing at 4.5 W/m², and warming of approximately 2.7°C (likely range 2.1–3.5°C). It broadly reflects current national pledges if partially implemented. **SSP3-7.0** represents fragmented governance and regional rivalry, with CO₂ doubling from today\'s ~425 ppm to reach ~800 ppm by 2100 and warming of approximately 3.6°C (2.8–4.6°C). **SSP5-8.5** is the fossil-fuel-intensive high-end scenario: CO₂ exceeding 1000 ppm by 2100, forcing reaching 8.5 W/m², and warming of approximately 4.4°C (3.3–5.7°C) — though most analysts now consider this scenario less likely than it appeared in AR5 given observed energy transitions.

The **Paris Agreement** (2015) enshrined two temperature thresholds — limiting warming to **1.5°C** and a harder limit of **2°C** above pre-industrial — as the dual goals of international climate policy. The physical science rationale for these thresholds comes from the sharp nonlinearity of climate impacts: at 1.5°C, approximately 6% of insects, 8% of plants, and 4% of vertebrates lose more than half their geographic range; at 2°C those fractions approximately double. Coral reef bleaching frequency shifts from once per decade at 1.5°C to annual bleaching at 2°C. Heat extremes that occurred once per 50 years in the pre-industrial climate now occur roughly **1.5 times more frequently at 1.5°C** and approximately **2.8 times more frequently at 2°C**, a near-doubling of extreme heat recurrence with just 0.5°C of additional warming.

As of 2023, global mean surface temperature has already risen approximately 1.2°C above the 1850–1900 pre-industrial baseline. Even if all human CO₂ emissions stopped today, approximately **0.3°C of additional warming is already committed** — locked in by the thermal inertia of the ocean and the atmospheric lifetime of CO₂ already emitted. This **committed warming** or "warming in the pipeline" arises because the deep ocean is still slowly equilibrating to the energy imbalance already imposed by current CO₂ levels. It sets a floor: the world will warm to at least ~1.5°C above pre-industrial even under the most aggressive mitigation scenario.

**Remaining carbon budget** quantifies the maximum cumulative CO₂ emissions still permissible to stay within a temperature threshold at a given probability. IPCC AR6 estimated a remaining budget of approximately **400 Pg C (petagrammes of carbon)** from the start of 2023 to limit warming to 1.5°C with 50% probability (~550 Pg CO₂), or roughly 300 Pg C for 67% probability. At current global emissions of ~10 Pg C/year, the 50% budget is exhausted in about four decades — though the actual timeline is sensitive to methane and aerosol co-emissions.

**Sea level projections** illustrate the scenario dependence of long-term change. IPCC AR6 projects global mean sea level rise of **0.28–0.55 m** by 2100 under SSP1-1.9 (low emissions) and **0.63–1.01 m** under SSP5-8.5 (high emissions), with low-confidence upper bounds extending to **~2.0 m** under SSP5-8.5 if marine ice-sheet instabilities are triggered. Sea level rise is driven by thermal expansion of warming ocean water (~40% of rise) and melting of glaciers, ice caps, the Greenland Ice Sheet, and the West Antarctic Ice Sheet.

**Regional projections** diverge sharply from the global mean. The **Arctic** warms 3–4× faster than the global average — a consequence of ice-albedo and water vapour feedbacks concentrated at high latitudes. The **Mediterranean basin** faces a pronounced drying signal — up to 20–40% reductions in annual precipitation under high-emissions scenarios — driven by a poleward expansion of the subtropical dry zone. **South Asia** faces intensification of the monsoon system: more moisture convergence leads to heavier, more variable monsoon rainfall, with both increased flood risk during wet seasons and longer dry spells between events.

**Climate tipping points** — thresholds beyond which sub-systems shift to new states with limited reversibility — are reached at progressively lower temperatures in higher SSP pathways. The collapse of major Atlantic meridional overturning circulation, the loss of the Greenland Ice Sheet, and the dieback of Amazon rainforest are all triggered at lower probability under SSP1-1.9 than under SSP3-7.0 or SSP5-8.5.

**Ocean acidification** follows CO₂ concentration directly, independent of temperature feedbacks. Surface ocean pH has declined from ~8.2 to ~8.1 since the industrial revolution (a 26% increase in hydrogen ion concentration). Under SSP5-8.5, ocean pH drops to ~7.8 by 2100 — a pH reduction that experiments show will dissolve the aragonite shells of pteropods and severely impair calcification by corals, oysters, and foraminifera. Under SSP1-1.9, pH stabilises near 8.0. The distinction between **mitigation** (reducing emissions to limit future warming) and **adaptation** (adjusting human and natural systems to the warming already underway or committed) is critical: mitigation reduces the magnitude of change; adaptation reduces the harm from the change that still occurs. Both are necessary but operate on different timescales and governance structures.`,
      keyTerms: [
        {
          term: 'Shared Socioeconomic Pathway (SSP)',
          def: 'The scenario framework used in IPCC AR6 that couples radiative forcing targets with socioeconomic narratives about population, land use, energy systems, and governance. Five SSPs bracket plausible futures: SSP1-1.9 (aggressive mitigation, 1.5°C-compatible), SSP2-4.5 (moderate), SSP3-7.0 (regional rivalry), SSP4-6.0, and SSP5-8.5 (fossil-fuel-intensive, ~4.4°C by 2100). Each SSP specifies an emissions trajectory that translates into an atmospheric CO₂ concentration pathway and a radiative forcing level by 2100. SSPs replaced the RCP framework of AR5 by making socioeconomic drivers explicit rather than treating forcing as a free parameter.',
        },
        {
          term: 'Committed warming',
          def: 'The additional global mean temperature rise that is already inevitable due to the thermal inertia of the ocean and the long atmospheric lifetime of CO₂ already emitted, even if all greenhouse-gas emissions were halted immediately. Estimated at approximately 0.3°C above the current ~1.2°C anomaly (i.e., reaching at least ~1.5°C above pre-industrial). Committed warming arises because the deep ocean has not yet equilibrated to the energy imbalance imposed by current atmospheric CO₂ levels; heat continues to flow from atmosphere into the ocean, and the surface must ultimately warm until a new equilibrium is reached. It establishes a floor for future warming regardless of mitigation choices.',
        },
        {
          term: 'Remaining carbon budget',
          def: 'The maximum cumulative amount of CO₂ (or CO₂-equivalent) that can still be emitted globally while maintaining a given probability of staying below a temperature threshold. IPCC AR6 estimated approximately 400 Pg C (petagrammes of carbon, equivalent to ~1,460 Pg CO₂) from the start of 2023 to limit warming to 1.5°C with 50% probability. At current global emissions of ~10 Pg C/year, this budget would be exhausted in roughly four decades without accelerated reductions. The budget is sensitive to methane and aerosol co-emissions, carbon-cycle feedbacks, and the assumed pre-industrial baseline temperature.',
        },
        {
          term: 'Climate tipping point',
          def: 'A threshold in the climate system beyond which a sub-system transitions abruptly or irreversibly to a qualitatively different state, often with self-amplifying feedbacks that sustain the transition even if the initial forcing is removed. Examples include collapse of the West Antarctic Ice Sheet (potential contribution ~3.3 m sea level rise), dieback of the Amazon rainforest (triggered by ~3–4°C global warming), and weakening of the Atlantic Meridional Overturning Circulation. Tipping points are scenario-dependent — they are triggered at higher probability and lower temperature thresholds in high-emissions SSPs than in mitigation scenarios. Their interactions can form "tipping cascades."',
        },
        {
          term: 'Arctic amplification',
          def: 'The observed and projected phenomenon in which the Arctic warms 3–4 times faster than the global mean surface temperature. Driven primarily by the ice-albedo feedback (loss of reflective sea ice exposes dark ocean), the water vapour feedback (a warmer, moister Arctic atmosphere traps more longwave radiation), and the lapse-rate feedback (Arctic temperature inversions concentrate warming near the surface rather than aloft). Arctic amplification has measurable consequences for mid-latitude weather patterns: a reduced equator-to-pole temperature gradient weakens the polar jet stream and may increase the persistence of extreme weather events. It is present in all IPCC AR6 SSP scenarios, with the rate of amplification proportional to the degree of global warming.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Four pillars of climate projection science',
      body: `Climate projections rest on four interconnected pillars that together span from the global emissions trajectory down to regional impact thresholds. Each pillar connects human choices to physical outcomes and carries its own characteristic uncertainties. Together they frame the core policy question: how much warming, how fast, where, and with what consequences?

**Emissions scenarios and forcing pathways.** The SSP framework captures the breadth of plausible human choices. The gap between SSP1-1.9 and SSP5-8.5 represents not merely a temperature difference of ~3°C by 2100, but a qualitative difference in ecosystem integrity, sea level commitment, and the number of tipping systems triggered. Current nationally determined contributions under the Paris Agreement, if fully implemented, track closer to SSP2-4.5 or SSP3-7.0 than to SSP1-1.9 — a ~2.5°C trajectory that falls short of the 1.5°C target.

**Temperature and sea level response.** The 1.5°C and 2°C Paris thresholds mark physically meaningful steps in impact severity, not just round numbers. Sea level rise projections under AR6 span a factor of ~3.5 between SSP1-1.9 and the high-end SSP5-8.5 estimate, with committed multi-century rises extending far beyond 2100 once ice-sheet feedbacks are activated.

**Regional amplification and extremes.** Global mean warming averages over vast regional heterogeneity. The Arctic warming 3–4× faster than the global mean, the Mediterranean drying, and South Asian monsoon intensification illustrate how the same global average conceals radically different local futures. Extreme event frequency scaling — heat extremes occurring ~2.8× more often at 2°C than at pre-industrial — quantifies societal risk in decision-relevant terms.

**Ocean acidification and committed change.** Ocean pH decline tracks atmospheric CO₂ directly and is irreversible on century timescales. The distinction between committed warming and scenario-dependent future warming clarifies the irreducible minimum of climate change humanity has already locked in, separate from the avoidable fraction that mitigation can still prevent.`,
      cards: [
        {
          name: 'SSP Scenarios: Bracketing Human Futures',
          icon: BarChart,
          color: BRAND.accent,
          desc: 'Four SSPs span from aggressive mitigation (SSP1-1.9, 1.5°C-compatible) to fossil-fuel-intensive growth (SSP5-8.5, ~4.4°C). CO₂ ranges from <430 ppm to >1000 ppm by 2100. Current policy pledges track ~SSP2-4.5 to SSP3-7.0, a ~2.5–3°C trajectory.',
          examples: 'SSP1-1.9: net-zero CO₂ ~2050, peak forcing 1.9 W/m² · SSP2-4.5: ~600 ppm CO₂, ~2.7°C by 2100 · SSP3-7.0: ~800 ppm CO₂, ~3.6°C · SSP5-8.5: >1000 ppm CO₂, ~4.4°C · Paris pledges: ~2.5°C gap between current pledges and 1.5°C target',
        },
        {
          name: 'Temperature Thresholds & Committed Warming',
          icon: Thermometer,
          color: BRAND.accentHot,
          desc: 'At 1.5°C heat extremes recur ~1.5× more often; at 2°C ~2.8×. ~0.3°C committed warming is already locked in from current CO₂. Remaining carbon budget: ~400 Pg C for 1.5°C at 50% probability (as of 2023) — ~4 decades at current emissions.',
          examples: '1.2°C above pre-industrial already observed (2023) · +0.3°C committed even with zero emissions today · Annual coral bleaching shifts from once/decade at 1.5°C to annual at 2°C · 50-year heat extreme: 1.5× at 1.5°C, 2.8× at 2°C · Carbon budget exhausted ~2060s at current rates',
        },
        {
          name: 'Regional Amplification & Sea Level Rise',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Arctic warms 3–4× global mean via ice-albedo and water vapour feedbacks. Mediterranean loses 20–40% precipitation. Sea level rises 0.28–0.55 m (SSP1-1.9) to 0.63–2.0 m (SSP5-8.5) by 2100, driven by thermal expansion and ice-sheet melt.',
          examples: 'Arctic: +3–4× global mean warming rate (all scenarios) · Mediterranean: −20–40% annual precipitation (SSP3-7.0, SSP5-8.5) · South Asia monsoon: heavier, more variable rainfall · Sea level 2100: 0.28 m (SSP1-1.9 low) to ~2.0 m (SSP5-8.5 high-end) · Greenland Ice Sheet: committed 7 m over millennia if >1.5°C sustained',
        },
        {
          name: 'Ocean Acidification & Tipping Points',
          icon: Activity,
          color: BRAND.coral,
          desc: 'Surface ocean pH dropped from 8.2 to 8.1 since industrialisation (+26% H⁺). Under SSP5-8.5, pH reaches ~7.8 by 2100 — dissolving aragonite shells. Tipping points (WAIS collapse, Amazon dieback, AMOC weakening) triggered at lower probability under low-emissions SSPs.',
          examples: 'pH 8.2 (pre-industrial) → 8.1 (today) → ~7.8 (SSP5-8.5 2100) · Pteropod shell dissolution below pH 7.9 · AMOC collapse risk: low under SSP1-1.9, elevated under SSP3-7.0+ · Amazon dieback threshold: ~3–4°C global warming · WAIS collapse: committed SLR ~3.3 m if triggered',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From Emissions to Impacts: The SSP Cascade',
      body: 'How greenhouse-gas emissions choices propagate through the climate system — from atmospheric concentration to radiative forcing, global temperature, regional amplification, sea level rise, and finally to threshold-crossing impacts — illustrating why scenario choice matters at every step.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how emissions pathway choice (SSP scenario) propagates through atmospheric CO₂ concentration, radiative forcing, global temperature response, regional amplification, sea level rise, and tipping-point thresholds to produce divergent long-term climate outcomes',
        nodes: [
          {
            id: 'emissions-scenario',
            label: 'Emissions Pathway (SSP Choice)',
            description: 'Human decisions on energy systems, land use, and governance determine cumulative CO₂ and non-CO₂ greenhouse-gas emissions. The four core SSPs span from SSP1-1.9 (net-zero ~2050) to SSP5-8.5 (fossil-fuel-intensive growth). Current policies track ~SSP2-4.5 to SSP3-7.0 — a 2.5–3.6°C trajectory that falls short of Paris Agreement targets.',
            color: BRAND.accent,
          },
          {
            id: 'atmospheric-co2',
            label: 'Atmospheric CO₂ & Radiative Forcing',
            description: 'Cumulative emissions set atmospheric CO₂ concentration (350–1000+ ppm by 2100 across SSPs) and total anthropogenic radiative forcing (1.9–8.5 W/m²). Committed warming (~0.3°C) is locked in at the current ~425 ppm regardless of future choices. The remaining carbon budget for 1.5°C is ~400 Pg C from 2023.',
            color: BRAND.gold,
          },
          {
            id: 'global-temperature',
            label: 'Global Mean Temperature Response',
            description: 'IPCC AR6 projects global warming of 1.0–1.8°C (SSP1-1.9) to 3.3–5.7°C (SSP5-8.5) above pre-industrial by 2100. The 1.5°C and 2°C Paris thresholds mark nonlinear steps in impact severity: heat extremes recur ~1.5× more often at 1.5°C and ~2.8× more often at 2°C than in the pre-industrial climate.',
            color: BRAND.accentHot,
          },
          {
            id: 'regional-amplification',
            label: 'Regional Amplification & Extremes',
            description: 'Global mean warming conceals strong regional heterogeneity. The Arctic warms 3–4× faster than the global mean (ice-albedo + water vapour feedbacks). The Mediterranean loses 20–40% of annual precipitation. South Asian monsoon intensifies with heavier, more variable rainfall. Extreme heat, drought, and flood frequencies all scale with global mean temperature.',
            color: BRAND.jade,
          },
          {
            id: 'sea-level-rise',
            label: 'Sea Level Rise',
            description: 'Global mean sea level rise by 2100 ranges from 0.28–0.55 m (SSP1-1.9) to 0.63–1.01 m (SSP5-8.5), with low-confidence upper bounds reaching ~2.0 m under ice-sheet instability scenarios. Driven by thermal expansion (~40%) and glacier/ice-sheet melt (~60%). Multi-century commitment to Greenland and Antarctic melt extends sea level rise for millennia beyond 2100.',
            color: BRAND.amethyst,
          },
          {
            id: 'tipping-points',
            label: 'Tipping Points & Ocean Acidification',
            description: 'Surface ocean pH falls from 8.1 (today) to ~7.8 under SSP5-8.5 — dissolving aragonite shells and impairing coral calcification. Climate tipping points (West Antarctic Ice Sheet instability, Amazon dieback, AMOC weakening) are triggered at lower probability under SSP1-1.9 than under SSP3-7.0 or SSP5-8.5. Mitigation reduces both the magnitude and the probability of irreversible change.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'emissions-scenario',   to: 'atmospheric-co2',     label: 'Cumulative emissions set CO₂ concentration' },
          { from: 'atmospheric-co2',       to: 'global-temperature',  label: 'Radiative forcing drives surface warming' },
          { from: 'global-temperature',    to: 'regional-amplification', label: 'Arctic 3–4×, Mediterranean drying, monsoon shift' },
          { from: 'global-temperature',    to: 'sea-level-rise',      label: 'Thermal expansion + ice-sheet melt' },
          { from: 'regional-amplification', to: 'tipping-points',     label: 'Arctic warming triggers ice-sheet feedbacks' },
          { from: 'sea-level-rise',        to: 'tipping-points',      label: 'Ice-sheet melt accelerates with warming' },
          { from: 'atmospheric-co2',       to: 'tipping-points',      label: 'Ocean acidification tracks CO₂ directly' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What distinguishes the SSP framework from the older RCP framework used in IPCC AR5, and what do SSP1-1.9 and SSP5-8.5 represent in terms of emissions trajectories?',
          a: [
            'SSPs are purely statistical extrapolations of historical emission trends, while RCPs were based on detailed process models; SSP1-1.9 projects a 1.9°C warming by 2100 and SSP5-8.5 projects an 8.5°C warming, with the numbers indicating absolute temperature outcomes rather than radiative forcing levels',
            'SSPs couple radiative forcing targets with explicit socioeconomic narratives about energy, land use, population, and governance, whereas RCPs specified forcing levels without a linked socioeconomic story; SSP1-1.9 reaches net-zero CO₂ around 2050 and is the only scenario consistent with 1.5°C, while SSP5-8.5 represents fossil-fuel-intensive growth with CO₂ exceeding 1000 ppm and ~4.4°C warming by 2100',
            'SSPs replaced RCPs by focusing exclusively on land-use change emissions rather than fossil-fuel CO₂; SSP1-1.9 and SSP5-8.5 differ only in the rate of deforestation, with all other forcing agents held equal between the two scenarios',
            'RCPs specified both emissions pathways and socioeconomic storylines, while SSPs stripped out the socioeconomic component to focus on radiative forcing alone; SSP1-1.9 represents a scenario with 1.9 billion people and SSP5-8.5 represents one with 8.5 billion, making population the primary variable',
          ],
          correct: 1,
          explain: 'The key innovation of SSPs over RCPs is the explicit coupling of radiative forcing levels with quantitative socioeconomic scenarios — describing not just how much CO₂ the atmosphere will contain, but what kind of world (population, energy system, governance, land use) produces that concentration. RCPs specified the forcing pathway but were agnostic about the socioeconomic route to that pathway, meaning the same RCP4.5 could be achieved through many different policy combinations. SSPs pair forcing outcomes with plausible societal narratives, enabling integrated assessment models to explore how different development pathways produce different emissions. SSP1-1.9 is the sustainability pathway: net-zero CO₂ around 2050, CO₂ peaking below 430 ppm, forcing at 1.9 W/m² — consistent with 1.5°C. SSP5-8.5 is the high fossil-fuel scenario: CO₂ exceeding 1000 ppm, forcing at 8.5 W/m², projected warming ~4.4°C (3.3–5.7°C likely range). The numbers in SSP names refer to radiative forcing in W/m² by 2100, not temperatures or populations. Answer A incorrectly identifies the numbers as temperatures. Answer C incorrectly restricts SSPs to land use. Answer D reverses the characteristics of the two frameworks.',
        },
        {
          q: 'What is "committed warming," and why does it place a floor on future temperature rise even under the most aggressive mitigation scenario?',
          a: [
            'Committed warming is the warming already "paid for" by current CO₂ concentrations due to ocean thermal inertia and the long atmospheric lifetime of CO₂; approximately 0.3°C of additional warming above the current ~1.2°C anomaly is locked in even if all emissions ceased immediately today, because the deep ocean is still equilibrating to the energy imbalance imposed by present CO₂ levels',
            'Committed warming refers to the warming pledged by governments under nationally determined contributions; it is a floor on future temperature rise because countries are legally obligated to emit the greenhouse gases implied by their economic development plans, regardless of future climate agreements',
            'Committed warming is the temperature rise attributable to methane already released from permafrost and wetlands; it creates a floor on warming because methane persists in the atmosphere for over 1000 years and its radiative forcing cannot be reversed by reducing CO₂ emissions',
            'Committed warming equals the current ~1.2°C anomaly and represents warming already observed; it is the floor because, while temperatures could theoretically fall if CO₂ were actively removed from the atmosphere, no current carbon removal technology has sufficient scale to lower temperatures below the current level within this century',
          ],
          correct: 0,
          explain: `Committed warming — also called "warming in the pipeline" — arises from two factors. First, the ocean has enormous heat capacity and absorbs roughly 90% of the excess energy trapped by the greenhouse effect. Because the ocean is still warming toward equilibrium with current radiative forcing, even if CO₂ concentrations were held constant at today\'s ~425 ppm (let alone reduced to zero emissions), the surface would continue to warm as heat redistributes from the atmosphere into the deep ocean. Second, CO₂ already emitted has an atmospheric lifetime of centuries to millennia, so its forcing persists. The combination means approximately 0.3°C of additional warming above the current ~1.2°C is already "committed" — total minimum warming of ~1.5°C above pre-industrial, regardless of mitigation. This is why some scientists and policymakers argue that adaptation measures for 1.5°C of warming are necessary even as mitigation efforts aim to hold the line at that threshold. Answer B confuses physical committed warming with policy commitments. Answer C incorrectly attributes committed warming to methane from permafrost (which is a concern for future feedbacks but not the primary source of committed warming) and wrongly states methane persists over 1000 years (its atmospheric lifetime is ~12 years). Answer D conflates committed warming with current observed warming.`,
        },
        {
          q: 'How does the frequency of extreme heat events change between 1.5°C and 2°C of global warming, and what does this imply about the policy significance of 0.5°C of additional warming?',
          a: [
            'Extreme heat events that occurred once per 50 years in the pre-industrial climate become approximately 1.5 times more frequent at 1.5°C of warming and approximately 2.8 times more frequent at 2°C — a near-doubling of recurrence rate from a mere 0.5°C of additional warming, demonstrating that the 1.5°C and 2°C Paris thresholds correspond to physically meaningful, nonlinear steps in climate risk',
            'Extreme heat events scale linearly with global mean temperature: each additional 0.5°C adds roughly the same fractional increase in extreme heat frequency; the difference between 1.5°C and 2°C is therefore similar in proportional terms to the difference between 1.0°C and 1.5°C, and the Paris thresholds were chosen for political rather than physical reasons',
            'Extreme heat events defined as the once-per-50-year event become approximately 5 times more frequent at 1.5°C and approximately 50 times more frequent at 2°C of global warming, implying an order-of-magnitude change in risk between the two Paris thresholds',
            'The frequency of extreme heat events does not change substantially between 1.5°C and 2°C because the statistical distribution of daily temperatures is dominated by natural variability; the 0.5°C signal is smaller than the noise in most regional temperature records and does not meaningfully shift the tail of the distribution',
          ],
          correct: 0,
          explain: 'IPCC AR6 (and earlier SR1.5) quantified extreme heat event frequency changes precisely because this nonlinearity is central to the policy case for limiting warming to 1.5°C rather than 2°C. A heat extreme that occurred once every 50 years in the pre-industrial climate (i.e., with 2% annual probability) occurs approximately 1.5 times more frequently at 1.5°C of global warming (roughly once every 33 years) and approximately 2.8 times more frequently at 2°C of warming (roughly once every 18 years). This near-doubling of recurrence rate between 1.5°C and 2°C — from just 0.5°C of additional warming — arises because the daily temperature distribution shifts toward the mean warming, but the tail (extreme events) scales more than linearly with mean shift when the threshold is fixed at a pre-industrial exceedance value. The result is highly policy-relevant: an additional half-degree of warming translates into roughly twice as many extreme heat events, with cascading effects on human health, agriculture, and ecosystem function. Answer B incorrectly claims linear scaling. Answer C overstates the frequency change by orders of magnitude relative to AR6 findings. Answer D incorrectly dismisses the signal as lost in variability — the frequency change is statistically robust and detectable in observed records.',
        },
        {
          q: 'What drives the divergence in sea level rise projections between low-emissions (SSP1-1.9) and high-emissions (SSP5-8.5) scenarios, and why do projections carry a wide uncertainty range even within a single scenario?',
          a: [
            'Sea level projections diverge between scenarios primarily because of differences in projected volcanic eruption frequency — high-emissions scenarios correlate with more industrial activity and thus more aerosol injection, which paradoxically cools the ocean and reduces thermal expansion; uncertainty arises mainly from unknown future volcanic activity rather than ice-sheet dynamics',
            'Sea level projections diverge between SSP1-1.9 (0.28–0.55 m) and SSP5-8.5 (0.63–2.0 m by 2100) because both thermal expansion (warmer ocean water is less dense and occupies more volume) and land-ice melt (glaciers, Greenland Ice Sheet, West Antarctic Ice Sheet) are larger under higher emissions; uncertainty within each scenario reflects poorly constrained ice-sheet dynamics — particularly marine ice-sheet instability in West Antarctica and marine ice-cliff instability — which could contribute an additional ~1 m beyond central estimates',
            'Sea level projections are scenario-independent at the decadal scale because sea level is dominated by long-term ocean circulation changes that are not sensitive to emissions on 100-year timescales; any apparent divergence between SSP scenarios is an artifact of different ocean salinity assumptions in the models rather than a real physical signal',
            'Sea level diverges between scenarios primarily because higher emissions warm the atmosphere, which increases evaporation from the ocean surface; the resulting atmospheric moisture is deposited as snow on Antarctica, adding mass to the ice sheet and partially offsetting sea level rise; the uncertainty range reflects disagreement over Antarctic snowfall rates',
          ],
          correct: 1,
          explain: 'Sea level rise has two primary contributors, and both scale with temperature — which in turn scales with the emissions scenario. Thermal expansion accounts for roughly 40% of projected rise: as ocean water warms, it expands (seawater thermal expansion coefficient ≈ 0.2 mm/°C/m of ocean depth). Higher emissions produce greater ocean warming and thus greater expansion. Land-ice melt (glaciers, ice caps, Greenland, and Antarctic ice sheets) accounts for the remaining ~60% and is also larger under higher emissions. The central estimates for 2100 differ by roughly a factor of 2 between SSP1-1.9 (0.28–0.55 m) and SSP5-8.5 (0.63–1.01 m), but the low-confidence high-end under SSP5-8.5 extends to ~2.0 m if marine ice-sheet instabilities are triggered — specifically, marine ice-sheet instability (MISI) and marine ice-cliff instability (MICI) in the West Antarctic Ice Sheet. These mechanisms involve self-reinforcing retreat of marine-based ice sheets once a grounding line retreats past a critical depth, and their rates are poorly constrained by observations and process models. This ice-sheet uncertainty is the primary source of the wide scenario uncertainty range. Answer A incorrectly attributes sea level projections to volcanic activity. Answer C incorrectly claims scenario independence. Answer D describes the Antarctic snowfall feedback (a real but modest effect) as the primary driver, which is incorrect — the snowfall effect partially offsets sea level rise but does not dominate the projection uncertainty.',
        },
        {
          q: 'What is the remaining carbon budget for limiting warming to 1.5°C, and what is the distinction between mitigation and adaptation in climate policy?',
          a: [
            'The remaining carbon budget for 1.5°C is approximately 400 Pg C (from 2023, 50% probability), equivalent to roughly four decades at current emissions; mitigation means reducing greenhouse-gas emissions to limit the magnitude of future warming, while adaptation means adjusting human and natural systems to reduce harm from warming that is already locked in or unavoidable — both strategies are necessary because mitigation cannot prevent all warming and adaptation cannot substitute for reducing emissions',
            'The remaining carbon budget for 1.5°C is approximately 4000 Pg C, meaning humanity has centuries of room before the budget is exhausted; mitigation and adaptation are essentially interchangeable strategies that achieve the same outcome — reduced climate risk — through different means, so countries can choose whichever is more economically convenient',
            'The remaining carbon budget does not apply to the 1.5°C target because that threshold has already been crossed by committed warming; mitigation now exclusively refers to carbon removal technologies such as direct air capture and bioenergy with carbon capture (BECCS), while adaptation refers to all strategies that do not involve carbon removal',
            'The remaining carbon budget for 1.5°C is approximately 40 Pg C, meaning global emissions must reach zero immediately; mitigation refers only to actions taken by developed countries to reduce their historical emissions debt, while adaptation refers to actions taken by developing countries that have contributed little to climate change but face the greatest impacts',
          ],
          correct: 0,
          explain: `IPCC AR6 (and the IPCC Special Report on Global Warming of 1.5°C) estimated the remaining carbon budget from the start of 2023 at approximately 400 Pg C (roughly 1,460 Pg CO₂) to limit warming to 1.5°C with 50% probability, or approximately 300 Pg C for 67% probability. At current global emissions of approximately 10 Pg C per year (about 36 Pg CO₂/year), the 50% budget would be exhausted in roughly four decades without accelerated reductions. The distinction between mitigation and adaptation is fundamental in climate policy: mitigation targets the cause (reducing greenhouse-gas emissions or enhancing sinks to slow the rate and magnitude of warming), while adaptation targets the consequences (adjusting infrastructure, agriculture, health systems, coastal defences, and ecosystems to reduce harm from the warming that does occur). Mitigation is primarily a global public good problem (each country\'s emissions affect the entire planet), while adaptation is often more local and immediate. Both are necessary: mitigation reduces the amount of change that must be adapted to; adaptation reduces the harm from the inevitable portion. Answer B is wrong on the budget magnitude (4000 Pg C would imply centuries, not decades, of remaining budget) and incorrectly treats the strategies as interchangeable. Answer C incorrectly states 1.5°C has already been crossed and restricts mitigation to carbon removal. Answer D has the budget wrong by a factor of 10 (40 Pg C would mean less than 5 years at current rates) and incorrectly restricts the strategies by country type.`,
        },
      ],
    },
  ],
}

export default climateProjectionsScenarios
