import { Globe, Activity, Thermometer, BarChart } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const carbonBudget: Lesson = {
  id: 'clim-201-1-1-4',
  title: 'The Carbon Budget and Remaining Emissions',
  track: 'cli',
  trackName: 'Climate',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: 'Cumulative emissions, the remaining carbon budget for 1.5 °C and 2 °C, and the implications for decarbonisation timelines',
  sources: [
    { org: 'IPCC',   title: 'IPCC Sixth Assessment Report',          url: 'https://www.ipcc.ch/' },
    { org: 'GCP',    title: 'Global Carbon Project Annual Budget',    url: 'https://www.globalcarbonproject.org/' },
    { org: 'Nature', title: 'Nature Climate Change',                  url: 'https://www.nature.com/' },
    { org: 'MCC',    title: 'MCC Carbon Clock',                       url: 'https://www.mcc-berlin.net/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'How much CO₂ can humanity still emit?',
      body: `One of the most powerful — and sobering — insights in climate science is that global warming is approximately proportional to the total cumulative amount of CO₂ emitted by human activity, regardless of when those emissions occur. This relationship, known as the **Transient Climate Response to Cumulative Emissions (TCRE)**, links every tonne of CO₂ released to a predictable increment of global warming. IPCC AR6 estimates TCRE at approximately **1.65 °C per 1,000 Pg CO₂** (petagrammes of carbon dioxide; 1 Pg = 1 billion tonnes = 1 Gt). The implication is profound: warming is not primarily a function of emission rates at any given moment but of the total stock of CO₂ accumulated in the atmosphere since industrialisation.

Since approximately 1850, human activity has released roughly **2,400 Pg CO₂** into the atmosphere — primarily through fossil fuel combustion, cement production, and land-use change. This cumulative burden, equivalent to raising atmospheric CO₂ from ~280 ppm to ~422 ppm today, has already delivered approximately 1.2–1.3 °C of global mean warming above pre-industrial levels. The TCRE framework allows scientists to calculate, with quantifiable uncertainty, how much CO₂ humanity can still emit while keeping warming below a given temperature threshold — the **remaining carbon budget**.

IPCC AR6 (2021) estimates the remaining carbon budget for **1.5 °C** at approximately **380 Pg CO₂** for a 50% probability of staying below that threshold, and ~500 Pg CO₂ for a 33% probability. At current global emissions of approximately **37 Pg CO₂ per year** (Global Carbon Project 2023), the 50% chance budget is consumed in roughly **10 years**; the 33% chance budget in roughly 14 years. For the **2 °C** target, the remaining budget is approximately **1,150 Pg CO₂** at 50% probability — around 31 years at current rates. These numbers explain why climate scientists, policymakers, and activists alike treat the late 2020s and early 2030s as a critical window.

**Global emissions by sector** illustrate where the challenge lies: energy supply (electricity and heat) accounts for approximately **34%** of annual CO₂-equivalent greenhouse gas emissions; industry (steel, cement, chemicals) for **24%**; transport for **16%**; agriculture, forestry, and land use for **12%**; buildings for **6%**; with the remainder from waste and other sources. Across countries, emissions are highly concentrated: **China** contributes approximately **31%** of global CO₂ from fossil fuels; the **United States** approximately **14%**; the **EU-27** approximately **8%**. These three actors together account for over half of global emissions.

The **Paris Agreement** (2015) set the goal of limiting warming to well below 2 °C, pursuing efforts toward 1.5 °C. Parties submit **Nationally Determined Contributions (NDCs)** — voluntary national climate plans. Current NDCs, even if fully implemented, are projected to result in approximately 2.5–2.9 °C of warming by 2100 — a significant gap from the 1.5 °C ambition. Bridging this gap requires peak global emissions by approximately **2025** for a credible pathway to 1.5 °C. Delaying peak emissions by even five years dramatically narrows the technological and economic feasibility of remaining below 1.5 °C.

The remaining carbon budget carries significant **uncertainty**, arising from several sources: (1) imprecise knowledge of historical emissions and the carbon cycle response; (2) Earth system feedbacks such as permafrost thaw releasing additional CO₂ and CH₄ as soils warm — the permafrost carbon feedback alone could release 50–100 Pg CO₂-equivalent per degree of warming; (3) the uncertain role of aerosol forcing — industrial aerosols currently partially mask warming, and their reduction under clean-air policies would reveal additional warming; (4) non-CO₂ greenhouse gases (methane, N₂O), which are handled separately from the CO₂ budget and require their own mitigation strategies.

The **IPCC Shared Socioeconomic Pathways (SSPs)** provide a scenario framework for exploring alternative futures. **SSP1-1.9** represents aggressive mitigation consistent with 1.5 °C; **SSP2-4.5** a moderate mitigation pathway reaching ~2.7 °C; **SSP5-8.5** a high-emissions baseline reaching ~4.4 °C by 2100. Under SSP5-8.5, global emissions do not peak until the 2050s and the carbon budget for 1.5 °C is exhausted within the next decade.

Most 1.5 °C scenarios require achieving **net-zero CO₂ emissions** globally by approximately **2050**, with deep reductions in non-CO₂ gases. Net zero means that any residual emissions — from hard-to-abate sectors like aviation, shipping, agriculture, and industrial processes — are balanced by active removal of CO₂ from the atmosphere through **negative emissions**. Carbon Dioxide Removal (CDR) technologies and approaches include Bioenergy with Carbon Capture and Storage (BECCS), Direct Air Capture (DAC), enhanced weathering, and natural sinks (reforestation, soil carbon). In **overshoot scenarios** — where temperature temporarily exceeds 1.5 °C — large-scale CDR in the second half of the century is required to return to target, making negative emissions not merely desirable but mathematically necessary.`,
      keyTerms: [
        {
          term: 'Transient Climate Response to Cumulative Emissions (TCRE)',
          def: 'The approximately linear relationship between total cumulative CO₂ emissions and global mean temperature rise. IPCC AR6 best estimate: ~1.65 °C per 1,000 Pg CO₂. TCRE is near-constant because the fraction of emitted CO₂ absorbed by the ocean and land carbon sinks roughly offsets the declining radiative efficiency of CO₂ at higher concentrations. This linearity allows calculation of a finite carbon budget for any temperature target and means warming is determined by cumulative, not instantaneous, emissions.',
        },
        {
          term: 'Remaining carbon budget',
          def: 'The total cumulative CO₂ that can still be emitted from a given date while keeping global warming below a specified temperature threshold with a specified probability. IPCC AR6 (from 2020 baseline): ~380 Pg CO₂ for 50% chance of 1.5 °C; ~500 Pg CO₂ for 33% chance; ~1,150 Pg CO₂ for 50% chance of 2 °C. At ~37 Pg CO₂/yr current emissions, the 50% budget for 1.5 °C is consumed in roughly a decade. Uncertainties include Earth system feedbacks, historical emission estimates, and non-CO₂ forcing.',
        },
        {
          term: 'Net zero',
          def: 'A state in which anthropogenic greenhouse gas emissions to the atmosphere are balanced by anthropogenic removals (sinks) over a specified period. Net-zero CO₂ by 2050 is a central requirement for 1.5 °C pathways. Residual emissions from hard-to-abate sectors (aviation, cement, agriculture) must be offset by Carbon Dioxide Removal (CDR) methods such as Direct Air Capture, BECCS, or enhanced natural sinks. "Net zero" differs from "zero emissions" — gross emissions continue but are balanced by removals.',
        },
        {
          term: 'Nationally Determined Contribution (NDC)',
          def: 'A country\'s self-determined climate action plan submitted to the UNFCCC under the Paris Agreement, specifying emission reduction targets and adaptation policies for approximately 5-year cycles. NDCs are updated progressively ("ratchet mechanism"). As of 2023, current unconditional NDCs combined put the world on track for ~2.5–2.9 °C, well above the 1.5 °C target. The gap between NDC ambition and 1.5 °C-compatible pathways is the central challenge of international climate diplomacy.',
        },
        {
          term: 'SSP scenario',
          def: 'Shared Socioeconomic Pathway: a scenario framework used by IPCC AR6 combining a narrative of societal development with projected emissions. SSP1-1.9: strong sustainability, ~1.5 °C. SSP1-2.6: sustainability, ~1.8 °C. SSP2-4.5: middle-of-road, ~2.7 °C. SSP3-7.0: regional rivalry, ~3.6 °C. SSP5-8.5: fossil-fuelled development, ~4.4 °C. SSPs replaced the older RCP framework; they are not predictions but explore a range of plausible futures depending on policy, technology, and social choices.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'The physics and politics of the carbon budget',
      body: `**TCRE: why cumulative emissions are what matters.** The near-linear relationship between cumulative CO₂ and warming arises from a remarkable cancellation of two effects in the carbon cycle. As CO₂ concentrations rise, each additional unit of CO₂ produces slightly less radiative forcing (logarithmic relationship). Simultaneously, the fraction of emitted CO₂ absorbed by ocean and land sinks declines as those sinks become more saturated. These two effects roughly cancel, producing an approximately constant warming per cumulative tonne of CO₂. This has a crucial policy implication: it does not matter whether a given quantity of CO₂ is emitted quickly or slowly — the eventual warming contribution is the same. Delaying emissions reductions therefore does not reduce the total warming committed to by those emissions; it only consumes the remaining budget faster.

**Translating the budget into years.** The global remaining carbon budget is a hard physical constraint, but its translation into years depends on the emissions trajectory. If emissions remained flat at 37 Pg CO₂/yr, the 50% chance 1.5 °C budget would be exhausted in approximately 10 years. If emissions are cut linearly to zero by 2040 (a very aggressive pathway), cumulative emissions under that trajectory sum to approximately 370 Pg CO₂ — just within the 50% budget. This arithmetic explains why climate scientists emphasise that emissions must peak not just eventually but by 2025 at the latest for 1.5 °C-aligned pathways. Every year of flat or rising emissions makes the subsequent required rate of decline steeper — what analysts call the "cliff edge" of delayed action.

**The sectoral challenge.** The energy sector\'s 34% share of emissions is the most tractable target: renewable electricity costs have fallen ~90% since 2010, making solar and wind the cheapest new-build electricity sources in most markets. But the remaining 66% — industry, transport, agriculture, buildings — involves harder-to-abate processes: high-temperature industrial heat, aviation fuel density requirements, enteric fermentation in livestock, refrigerant leaks. These sectors are why net zero by 2050 requires negative emissions, not merely reaching zero gross emissions. The concept of **carbon neutrality** (widely claimed by corporations and countries) often relies heavily on contested offset mechanisms rather than genuine elimination of emissions — a distinction with large implications for carbon budget integrity.

**Permafrost and aerosol wildcards.** The carbon budget uncertainties are not merely statistical. Earth system feedbacks — particularly permafrost thaw and the aerosol masking effect — could substantially shrink the effective remaining budget. Northern hemisphere permafrost contains approximately 1,700 Pg of organic carbon, some of which is released as CO₂ and methane as soils warm. Current IPCC estimates suggest permafrost could release 50–100 Pg CO₂-equivalent per °C of warming — equivalent to consuming 10–25% of the remaining 1.5 °C budget per degree. The aerosol masking effect is equally significant: industrial sulfate aerosols from fossil fuel combustion currently reduce warming by approximately 0.5–1.0 °C globally; as emissions fall under decarbonisation, this masking effect will diminish, delivering an "unmasking warming" pulse that could consume additional budget. Neither effect invalidates the carbon budget framework, but both reinforce the case for urgency.`,
      cards: [
        {
          name: 'TCRE: Linking Emissions to Warming',
          icon: Thermometer,
          color: BRAND.accentHot,
          desc: 'Warming ~proportional to cumulative CO₂ emitted. IPCC AR6: ~1.65 °C per 1,000 Pg CO₂. Linearity arises from cancellation of log-CO₂ forcing and declining sink efficiency. Means: every tonne of CO₂ matters equally regardless of when emitted; delaying reductions does not reduce long-run warming.',
          examples: '2,400 Pg CO₂ emitted since 1850 → ~1.2–1.3 °C warming observed. At 1.65 °C/1,000 Pg: 500 more Pg → +0.83 °C additional → total ~2.0 °C. Budget arithmetic is direct and auditable.',
        },
        {
          name: 'Remaining Carbon Budgets for 1.5°C and 2°C',
          icon: BarChart,
          color: BRAND.jade,
          desc: 'IPCC AR6 remaining budget (from 2020): 380 Pg CO₂ for 50% chance of 1.5 °C; 500 Pg CO₂ for 33% chance. For 2 °C: ~1,150 Pg CO₂ at 50%. At 37 Pg/yr current emissions: 1.5 °C 50% budget exhausted ~2030; 2 °C budget ~2051.',
          examples: 'MCC Carbon Clock (Berlin): real-time countdown of remaining 1.5 °C budget. As of 2024, ~6–8 years remain at current rates for 50% chance. Every year of flat emissions spends ~10% of remaining 1.5 °C budget.',
        },
        {
          name: 'Emissions by Sector and Country',
          icon: Globe,
          color: BRAND.coral,
          desc: 'Energy 34%, industry 24%, transport 16%, agriculture 12%, buildings 6%. Top emitters: China 31%, USA 14%, EU 8% of global fossil CO₂. Three actors >50% of global emissions. Hard-to-abate sectors (steel, cement, aviation, agriculture) represent ~30–40% of total — cannot reach zero without CDR.',
          examples: 'China: 12 Gt CO₂/yr; peaked in total but growing per-capita. USA: 5.1 Gt/yr; declining due to gas replacing coal + renewables. EU: 3 Gt/yr; down 30% since 1990 but NDC gap remains.',
        },
        {
          name: 'Paris Agreement and the Net-Zero Challenge',
          icon: Activity,
          color: BRAND.accent,
          desc: 'Paris Agreement: limit warming well below 2 °C, pursue 1.5 °C. NDCs: voluntary national pledges; current NDCs → ~2.5–2.9 °C. Net zero by 2050 required for 1.5 °C. Negative emissions (CDR) needed for residual hard-to-abate sectors and overshoot recovery. Ratchet mechanism: NDCs must be updated every 5 years with increasing ambition.',
          examples: 'Urgenda v. Netherlands (2019): court ordered 25% emission cuts by 2020 based on climate attribution science. Over 140 countries have net-zero targets but fewer than 10% have near-term policies consistent with 1.5 °C-aligned pathways.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From Annual Emissions to Temperature Threshold',
      body: 'How annual CO₂ emissions accumulate in the atmosphere, translate through TCRE into global warming, and ultimately consume the remaining carbon budget until the 1.5 °C threshold is crossed — or negative emissions bring temperatures back down.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how annual CO₂ emissions accumulate, drive warming via TCRE, and consume the remaining carbon budget toward the 1.5 °C threshold — with overshoot requiring negative emissions for return',
        nodes: [
          {
            id: 'annual-emissions',
            label: 'Annual CO₂ Emissions (~37 Pg/yr)',
            description: 'Fossil fuel combustion, cement, and land-use change release approximately 37 Pg CO₂ per year globally. Energy (34%), industry (24%), transport (16%), and agriculture (12%) are the dominant sources. China (31%), USA (14%), and EU (8%) account for over half. Emissions must peak by ~2025 for credible 1.5 °C pathways.',
            color: BRAND.coral,
          },
          {
            id: 'cumulative-co2',
            label: 'Cumulative Atmospheric CO₂ Rise',
            description: 'Only about 44% of emitted CO₂ remains in the atmosphere (airborne fraction); ocean and land absorb the rest. Since 1850 ~2,400 Pg CO₂ emitted; atmospheric CO₂ has risen from 280 ppm to ~422 ppm. Each Pg CO₂ raises atmospheric concentration by ~0.13 ppm. Airborne fraction may increase as ocean and land sinks saturate under higher temperatures.',
            color: BRAND.gold,
          },
          {
            id: 'tcre',
            label: 'TCRE: 1.65 °C per 1,000 Pg CO₂',
            description: 'The Transient Climate Response to Cumulative Emissions (TCRE) converts cumulative CO₂ into warming. Best estimate ~1.65 °C per 1,000 Pg CO₂ (IPCC AR6); likely range 1.0–2.3 °C/1,000 Pg. Linearity holds across a wide range of emission pathways. Earth system feedbacks (permafrost, aerosol unmasking) may effectively increase TCRE by reducing the available budget.',
            color: BRAND.accentHot,
          },
          {
            id: 'budget-consumed',
            label: 'Remaining Budget Consumed',
            description: 'Each year of emissions at current rates (~37 Pg CO₂) consumes approximately 10% of the remaining 50%-probability 1.5 °C budget. The budget is a one-way counter: once emitted, CO₂ persists for centuries. Budget uncertainties (±220 Pg CO₂ at 1-sigma) reflect permafrost feedbacks, aerosol forcing, and historical emission estimates. The MCC Carbon Clock displays real-time budget consumption.',
            color: BRAND.amethyst,
          },
          {
            id: 'threshold',
            label: '1.5 °C Threshold',
            description: 'At 1.5 °C above pre-industrial, coral reef die-offs increase dramatically, 500-million-person exposure to water stress, tropical crop yield losses begin. Difference between 1.5 °C and 2 °C: ~2× frequency of extreme heat events; ~3× more frequent extreme drought; sea level rise ~0.1 m higher by 2100. The 1.5 °C threshold may be temporarily crossed (overshoot) and then brought back below target via CDR.',
            color: BRAND.ruby,
          },
          {
            id: 'overshoot-cdr',
            label: 'Overshoot and Negative Emissions Required',
            description: 'In most 1.5 °C scenarios, global temperature temporarily exceeds 1.5 °C (overshoot) before returning below target via Carbon Dioxide Removal (CDR). CDR methods: Bioenergy with CCS (BECCS), Direct Air Capture (DAC), enhanced weathering, reforestation. IPCC AR6 median scenario removes 1–10 Pg CO₂/yr by 2050. Large-scale CDR is controversial: land requirements for BECCS, energy requirements for DAC, permanence of carbon storage.',
            color: BRAND.jade,
          },
        ],
        edges: [
          { from: 'annual-emissions', to: 'cumulative-co2',  label: 'Airborne fraction (~44%) accumulates' },
          { from: 'cumulative-co2',   to: 'tcre',            label: 'Total CO₂ stock drives TCRE warming' },
          { from: 'tcre',             to: 'budget-consumed', label: '1.65 °C/1,000 Pg consumes remaining budget' },
          { from: 'budget-consumed',  to: 'threshold',       label: 'Budget exhausted → 1.5 °C crossed' },
          { from: 'threshold',        to: 'overshoot-cdr',   label: 'Overshoot triggers CDR requirement' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What is TCRE and why is it useful for climate policy?',
          a: [
            'TCRE (Transient Climate Response to CO₂ Emissions) is the warming from a single year\'s emissions; it is useful because it lets policymakers calculate how much any single country\'s annual emissions contribute to warming, enabling proportional liability assignment',
            'TCRE (Transient Climate Response to Cumulative Emissions) is the approximately linear relationship between total cumulative CO₂ emitted and global mean temperature rise (~1.65 °C per 1,000 Pg CO₂); it is useful because it directly translates a remaining temperature budget into a finite allowable quantity of future CO₂ emissions — making the concept of a carbon budget scientifically rigorous and policy-actionable',
            'TCRE (Total Carbon Response Efficiency) describes how efficiently the ocean absorbs CO₂; a high TCRE means the ocean is absorbing most emissions, leaving little warming; it is useful for identifying years when carbon capture by oceans is likely to be high',
            'TCRE (Transient Carbon Rate Equation) is a formula for calculating the current rate of atmospheric CO₂ increase from Keeling Curve data; it is useful for setting annual emission limits but does not apply to cumulative emissions or long-term temperature targets',
          ],
          correct: 1,
          explain: 'TCRE stands for Transient Climate Response to Cumulative Emissions. Its policy power rests on the near-linear relationship between cumulative CO₂ emitted and warming: for every 1,000 Pg of CO₂ released (cumulatively, from any combination of sources and years), global mean temperature rises by approximately 1.65 °C (IPCC AR6 best estimate; likely range 1.0–2.3 °C/1,000 Pg). This linearity — which arises from the approximate cancellation of the logarithmic CO₂ forcing relationship and the declining ocean/land sink efficiency — means the temperature target can be directly converted into a total carbon budget, which is then simply the maximum cumulative CO₂ humanity can emit. TCRE does not describe annual emissions alone (A mischaracterises it); it is not about ocean absorption efficiency (C); and it is not the Keeling Curve rate equation (D). The critical policy implication of TCRE is that the timing of emissions is secondary to their total quantity — every tonne of CO₂ contributes equally to warming regardless of when it is emitted, which undermines arguments that delaying emission reductions is acceptable because future technology will solve the problem.',
        },
        {
          q: 'What is the remaining carbon budget for a 50% chance of limiting warming to 1.5 °C, and how many years does this represent at current emission rates?',
          a: [
            'Approximately 1,150 Pg CO₂; at 37 Pg/yr this represents roughly 31 years — meaning current emission rates could continue until roughly 2055 before the 1.5 °C budget is consumed',
            'Approximately 50 Pg CO₂; at 37 Pg/yr this represents less than 2 years — meaning the 1.5 °C target has already been effectively foreclosed and only 2 °C pathways remain feasible',
            'Approximately 380 Pg CO₂; at 37 Pg/yr this represents roughly 10 years — meaning emissions must begin declining immediately and reach near-zero by approximately 2050 to stay within a 50% probability of 1.5 °C',
            'Approximately 750 Pg CO₂; at 37 Pg/yr this represents roughly 20 years — there is sufficient budget to allow current emission rates until the mid-2040s before deep cuts are required',
          ],
          correct: 2,
          explain: 'IPCC AR6 (Chapter 5, Table 5.8) estimates the remaining carbon budget from January 2020 for a 50% probability of limiting warming to 1.5 °C at approximately 500 Pg CO₂ (some analyses citing from 2023 give ~380 Pg CO₂ as a more current estimate reflecting emissions since 2020). At current global emissions of approximately 37 Pg CO₂/yr, dividing 380 Pg by 37 Pg/yr gives roughly 10 years. This is why the mid-2030s represents a critical threshold in most analyses. The 1,150 Pg CO₂ figure (A) is the remaining budget for 2 °C at 50% probability, not 1.5 °C. The 50 Pg figure (B) significantly understates the remaining budget and would imply the target is already lost, which is not the IPCC consensus view. The 750 Pg figure (D) does not correspond to any IPCC AR6 stated budget for 1.5 °C at 50% probability. The budget for 1.5 °C at 67% probability (a higher bar) is smaller still — approximately 300 Pg CO₂ — underscoring the urgency of the near-term emission trajectory.',
        },
        {
          q: 'Which sector globally emits the most CO₂, and what does the sectoral breakdown imply for decarbonisation strategy?',
          a: [
            'Agriculture is the largest single sector, accounting for approximately 34% of global CO₂; since agriculture is driven by food demand that cannot easily be reduced, decarbonisation must focus entirely on the other sectors while accepting that agricultural emissions remain near current levels',
            'Transport — particularly aviation and shipping — accounts for approximately 34% of global CO₂ and is the hardest to decarbonise; decarbonisation strategy must prioritise zero-emission aircraft and ships above all other measures',
            'Energy supply (electricity and heat generation) accounts for approximately 34% of global CO₂-equivalent greenhouse gas emissions; because electricity generation is the most technically tractable sector to decarbonise (through solar, wind, nuclear), the strategy of electrifying other sectors (transport, heating, industry) while simultaneously decarbonising the grid is central to most 1.5–2 °C scenarios',
            'Industry (steel, cement, chemicals) accounts for approximately 34% of global CO₂; since these are the hardest to abate, all other sectors (energy, transport) have already been successfully decarbonised and the remaining challenge is entirely industrial',
          ],
          correct: 2,
          explain: 'Energy supply (electricity and heat generation) is the single largest sector at approximately 34% of global CO₂-equivalent emissions (GCP/IEA data). Industry contributes approximately 24%, transport approximately 16%, agriculture approximately 12%, and buildings approximately 6%. The sectoral distribution has direct strategic implications. Energy supply — particularly electricity — is the most tractable sector because (a) renewable electricity costs have fallen ~90% since 2010, (b) solar and wind are now the cheapest new-build generation in most markets, and (c) once the grid is clean, electrification of transport (EVs), buildings (heat pumps), and parts of industry multiplies the decarbonisation benefit. Agriculture (A) contributes ~12%, not 34%, and while hard to reduce, is not the dominant sector. Transport (B) contributes ~16%, not 34%, and while aviation and shipping are particularly hard to abate, they are a subset of transport which is itself a minority sector. Industry (D) contributes ~24%, not 34%, and while it contains hard-to-abate processes, it is incorrect to characterise other sectors as already decarbonised. The core insight is that electrification of the entire economy coupled with grid decarbonisation is the single highest-leverage strategy in most modelled pathways.',
        },
        {
          q: 'What does net zero mean in the context of climate policy, and why do most 1.5 °C scenarios require large-scale negative emissions rather than simply reaching zero gross emissions?',
          a: [
            'Net zero means total global emissions have reached exactly zero — no fossil fuels are burned anywhere on Earth and all land use is carbon-neutral; negative emissions are not required because zero gross emissions by definition means no CO₂ is added to the atmosphere',
            'Net zero means that anthropogenic CO₂ emissions are balanced by anthropogenic removals; large-scale negative emissions are required because some sectors — aviation, cement production, enteric fermentation in livestock, and certain industrial processes — cannot feasibly reach zero emissions by mid-century, so the net balance must be achieved by actively removing CO₂ from the atmosphere to compensate for these residual emissions',
            'Net zero means global GDP growth has decoupled from energy use, so economic growth no longer adds to emissions; negative emissions refer to economic sectors where carbon-intensive activities have been replaced with services, which have lower emissions than manufacturing',
            'Net zero is a legal term with no scientific definition; negative emissions are required because the IPCC has determined that reaching zero gross emissions is physically impossible, so the gap between achievable reductions and zero must be filled by forest planting, which absorbs CO₂ naturally',
          ],
          correct: 1,
          explain: 'Net zero in climate policy means that human-caused CO₂ emissions released into the atmosphere are balanced by human-caused removals of CO₂ from the atmosphere over a given period. It does not require zero gross emissions (A is incorrect — that would be "absolute zero" or "zero emissions"). The reason large-scale Carbon Dioxide Removal (CDR) is required in essentially all 1.5 °C scenarios is that several sectors cannot feasibly reach zero gross emissions by mid-century. Hard-to-abate sectors include: aviation (fuel energy density requirements make battery-electric flight impractical for long-haul in current technology); cement production (approximately 60% of cement emissions come from the chemical decomposition of limestone — CaCO₃ → CaO + CO₂ — which occurs regardless of energy source); livestock agriculture (enteric fermentation in ruminants produces methane that cannot be eliminated through feed or selective breeding alone); some industrial high-temperature processes. CDR methods — Direct Air Capture, Bioenergy with CCS (BECCS), enhanced weathering, reforestation, soil carbon — must compensate for these residual emissions. Additionally, in overshoot scenarios, CDR is needed to bring temperatures back below 1.5 °C after temporary exceedance. Net zero is not about GDP decoupling (C) nor is it merely a legal term (D).',
        },
        {
          q: 'Why does the remaining carbon budget have large uncertainty ranges, and what are the primary sources of that uncertainty?',
          a: [
            'The large uncertainty ranges reflect primarily the difficulty of measuring current annual emissions — different countries use different accounting methods, making it impossible to know how quickly the budget is being consumed; uncertainty about historical emissions since 1850 is negligible because ice-core records provide precise data',
            'Uncertainty in the remaining carbon budget arises entirely from uncertainty in future emission trajectories — scientists cannot predict whether countries will meet their NDC pledges; the physics of the carbon cycle and TCRE are known with high precision and contribute negligible uncertainty',
            'The remaining carbon budget has large uncertainties due to: (1) uncertain TCRE itself (likely range 1.0–2.3 °C/1,000 Pg in AR6); (2) uncertain Earth system feedbacks including permafrost carbon release (50–100 Pg CO₂-eq per °C) and aerosol unmasking (~0.5–1.0 °C warming as industrial aerosols are reduced); (3) uncertain historical emissions and their carbon cycle impact; and (4) non-CO₂ greenhouse gas treatments; these compound to give budget uncertainty of roughly ±220 Pg CO₂ at one standard deviation',
            'The large uncertainty ranges are primarily due to the inherent unpredictability of solar output variability — solar cycles of 11 and 80 years create large swings in Earth\'s energy balance that cannot be forecast, making it impossible to know how much CO₂-forced warming will actually occur; TCRE itself is well-constrained but solar forcing dominates uncertainty',
          ],
          correct: 2,
          explain: 'The remaining carbon budget has genuinely large uncertainties that reflect several distinct physical and observational sources, not simply political uncertainty about future emissions (B is incorrect — the physical science uncertainties are large independent of policy). The major sources are: (1) TCRE uncertainty: IPCC AR6 gives a likely range of 1.0–2.3 °C per 1,000 Pg CO₂, meaning the budget could range by a factor of ~2 depending on which end of the TCRE range applies. (2) Earth system feedbacks not fully included in standard TCRE: permafrost carbon release (frozen Arctic soils contain ~1,700 Pg C; warming releases CO₂ and CH₄, effectively consuming additional budget at ~50–100 Pg CO₂-eq/°C); aerosol masking (industrial sulfate aerosols currently offset ~0.5–1.0 °C of greenhouse warming; as fossil fuel emissions fall under decarbonisation, this masking diminishes, committing additional warming and reducing the effective remaining budget). (3) Historical emissions: estimates of emissions from land-use change since 1850 have uncertainties of ±180 Pg CO₂ cumulatively. (4) Non-CO₂ greenhouse gases: how methane and N₂O are counted affects the CO₂ budget that can be used. Measurement difficulties (A) are a relatively minor contribution to total budget uncertainty. Solar variability (D) is a well-measured forcing that contributes minimal uncertainty to the carbon budget calculation — solar forcing is small (~0.1 W/m²) compared to anthropogenic CO₂ forcing (~2.7 W/m²) and well-monitored by satellites.',
        },
      ],
    },
  ],
}

export default carbonBudget
