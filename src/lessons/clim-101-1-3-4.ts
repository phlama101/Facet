import { Thermometer, Globe, Wind } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const lesson: Lesson = {
  id: 'clim-101-1-3-4',
  title: 'Mitigation, Adaptation, and Climate Policy',
  track: 'cli',
  trackName: 'Climate Science',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 140,
  description: 'The physics, economics, and politics of reducing greenhouse gas emissions, adapting to inevitable climate change, and the international frameworks governing global climate action from Kyoto to Paris.',
  sources: [
    { org: 'IPCC',     title: 'IPCC AR6 WGIII — Mitigation of Climate Change (2022)',                            url: 'https://www.ipcc.ch/report/ar6/wg3/' },
    { org: 'IEA',      title: 'IEA Net Zero by 2050 — A Roadmap for the Global Energy Sector',                  url: 'https://www.iea.org/reports/net-zero-by-2050' },
    { org: 'UNFCCC',   title: 'UNFCCC — Paris Agreement Text and NDC Registry',                                  url: 'https://unfccc.int/process-and-meetings/the-paris-agreement' },
    { org: 'OpenStax', title: 'Environmental Science — Climate Policy and International Agreements (CC-BY 4.0)', url: 'https://openstax.org/books/environmental-science-ap' },
    { org: 'AGI',      title: 'Glossary of Geology — Carbon Capture, Adaptation Limits, Loss and Damage',       url: 'https://www.americangeosciences.org/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The two pillars of the climate response',
      body: `Climate science describes the problem; climate policy must organise the response. That response rests on two foundations: **mitigation** — reducing greenhouse gas emissions to limit how much warming occurs — and **adaptation** — adjusting human and natural systems to manage the consequences of warming that is already locked in or unavoidable. The two are not alternatives but complements: more aggressive mitigation reduces the adaptation burden, but even the most ambitious mitigation scenario leaves substantial warming requiring adaptation.

Mitigation requires restructuring the global energy system more fundamentally and rapidly than any previous industrial transition in history. The core arithmetic is stark: to limit warming to 1.5 °C, net CO₂ emissions must reach zero by approximately 2050, and emissions of other greenhouse gases must be rapidly reduced. Solar and wind energy costs have fallen more than 90 % since 2010, making clean electricity cheaper than fossil fuels in most of the world — but energy is only ~35 % of global emissions. Industry, agriculture, land use, and transport each require distinct solutions, and the hardest-to-abate sectors (steel, cement, shipping, aviation) remain far from decarbonised.

Adaptation is unavoidable even under the most aggressive mitigation scenario, because ~0.3–0.5 °C of committed warming remains in the pipeline from existing GHG concentrations. But adaptation has limits: some changes exceed the capacity of social-ecological systems to adjust, creating **hard adaptation limits** where harm cannot be prevented regardless of resources or technology. The international climate governance framework — from the 1992 UNFCCC through the 1997 Kyoto Protocol to the 2015 Paris Agreement — provides the scaffolding within which both mitigation and adaptation commitments are negotiated and implemented, though the gap between current pledges and the 1.5 °C pathway remains substantial.`,
      keyTerms: [
        { term: 'Net-zero emissions', def: 'A state in which the amount of greenhouse gases added to the atmosphere by human activities equals the amount removed by natural and technological carbon sinks. Reaching net-zero CO₂ by approximately 2050 globally is the central requirement for limiting warming to 1.5 °C. Net-zero is distinct from "zero emissions" — some residual emissions from hard-to-abate sectors (aviation, shipping, agriculture) are offset by carbon dioxide removal (CDR). The IPCC AR6 assessed that delaying net-zero by 10 years roughly doubles the remaining cumulative emissions and makes 1.5 °C unachievable.' },
        { term: 'Carbon dioxide removal (CDR)', def: 'Technologies and practices that actively remove CO₂ from the atmosphere and store it durably. Methods include: afforestation and reforestation (biological); enhanced weathering (spreading crushed silicate rock to accelerate natural CO₂ absorption); bioenergy with carbon capture and storage (BECCS); direct air capture (DAC) using chemical sorbents; and ocean fertilisation (controversial). IPCC AR6 1.5 °C pathways require 2–10 GtCO₂/yr of CDR by mid-century; current global CDR capacity is ~0.002 GtCO₂/yr — a 1,000-fold gap requiring massive scale-up.' },
        { term: 'Nationally Determined Contributions (NDCs)', def: 'Voluntary national emission reduction pledges submitted by countries under the Paris Agreement (2015). Each country determines its own level of ambition; pledges are reviewed every five years with the expectation of progressive increase (the "ratchet mechanism"). As of 2023, current NDCs (if fully implemented) are projected to lead to ~2.5–3.0 °C of warming by 2100 — well above the Paris targets of 1.5–2 °C. The difference between NDC trajectories and the 1.5 °C pathway is the "ambition gap"; the difference between NDC pledges and actual policy implementation is the "implementation gap."' },
        { term: 'Hard adaptation limit', def: 'A situation where adaptation to climate change is not possible — where the biophysical, social, or ecological system cannot function in the changed climate regardless of resources, technology, or governance improvements. Examples: permanent inundation of low-lying atoll islands; extinction of species that cannot migrate; outdoor labour becoming physiologically impossible in regions with wet-bulb temperatures >35 °C. Contrasts with "soft adaptation limits" — where constraints arise from finance, technology, or institutions but are potentially surmountable. The distinction matters for policy: hard limits require managed retreat, relocation, and compensation; soft limits require investment and technology transfer.' },
        { term: 'Loss and Damage', def: 'Climate harms that exceed adaptation capacity and cannot be prevented or compensated by conventional risk management — including economic losses (destroyed assets, reduced productivity) and non-economic losses (cultural heritage, biodiversity, traditional ways of life, human displacement and mortality). Distinct from adaptation finance. COP27 (Sharm el-Sheikh, 2022) established the first dedicated Loss and Damage Fund, responding to years of advocacy by small island states and vulnerable nations. Funding levels, eligibility criteria, and governance structure remained contested as of 2023–2024.' },
      ],
    },
    {
      type: 'concept',
      title: 'Decarbonisation pathways, adaptation frameworks, and international governance',
      body: `**Mitigation: decarbonising the global economy.** IPCC AR6 WGIII identified the structural changes required across sectors to reach net-zero CO₂ by ~2050:

**Energy:** Electricity generation must become nearly zero-carbon by 2035 in high-income countries and globally by 2040. Solar PV and wind — now the cheapest sources of new electricity in most of the world after >90 % cost reductions since 2010 — must scale rapidly alongside battery storage, long-distance transmission, and demand management. Coal must be phased out fastest; natural gas faces more complex transition dynamics.

**Industry:** Steel (requires high-temperature reduction of iron ore) and cement (releases CO₂ from limestone calcination) are the most challenging sectors. Mitigation options include: green hydrogen (produced from renewable electricity) as a reductant; carbon capture and storage (CCS) at point sources; electrolysis-based alternative routes; and circular economy approaches (recycling reduces energy by ~70 % for steel).

**Land use and agriculture:** Halting deforestation (~10 % of global emissions) and restoring degraded forests and wetlands provide immediate co-benefits. Agriculture emissions (CH₄ from enteric fermentation, N₂O from nitrogen fertilisers, CH₄ from rice paddies) require separate strategies — precision fertiliser management, livestock feed additives, and dietary shifts toward lower-emission foods.

**Carbon dioxide removal:** Most 1.5 °C modelled pathways require 2–10 GtCO₂/yr of CDR by 2050. Current CDR capacity is ~0.002 GtCO₂/yr. Scaling CDR by a factor of 1,000 in 30 years is one of the most demanding technology challenges humanity faces.

**Adaptation: managing unavoidable change.** Adaptation operates at multiple scales, from individual farmers changing crop varieties to multi-billion-dollar coastal infrastructure projects. **Hard adaptation limits** arise where no measure can prevent harm — permanent submersion of atoll islands, species extinction, physiological heat thresholds. **Soft limits** reflect insufficient finance, technology, or institutions, and are potentially surmountable. **Loss and Damage** — recognised formally at COP27 (2022) — addresses harms that exceed both mitigation and adaptation, requiring compensation rather than prevention.

**International climate governance.** The **UNFCCC** (1992) established the foundational principle of "common but differentiated responsibilities" (CBDR) and near-universal participation. The **Kyoto Protocol** (1997) imposed binding emission reduction targets on developed (Annex I) countries but excluded developing nations and was undermined by the US non-ratification. The **Paris Agreement** (2015) achieved near-universal participation through Nationally Determined Contributions (NDCs) — voluntary pledges reviewed every five years under a ratchet mechanism. Paris lacks enforcement mechanisms but creates transparency obligations and political accountability. Current NDCs project ~2.5–3.0 °C by 2100 — well above the 1.5–2 °C targets. Bridging this ambition gap while ensuring equity is the defining challenge of the current decade.`,
      cards: [
        {
          name: 'Mitigation Pathways: Net-Zero by 2050',
          icon: Wind,
          color: BRAND.accent,
          desc: 'Net-zero CO₂ by ~2050 required for 1.5 °C. Energy sector: solar PV + wind costs down >90 % since 2010; cheapest new electricity globally; electricity generation must reach near-zero carbon by 2035 (high income), 2040 (global). Hardest sectors: steel, cement, shipping, aviation; require green H₂, CCS, alternative chemistry. Land use: halting deforestation = 10 % global emissions eliminated; forest restoration provides major sinks. CDR: 2–10 GtCO₂/yr required by 2050; current capacity 0.002 GtCO₂/yr — 1,000× scale-up needed. Methane and N₂O reductions (agriculture, fossil fuels) provide rapid near-term climate benefit.',
          examples: 'Hinkley Point C nuclear: $35B, 15-year construction; contrast with offshore wind farms built in 3–4 years · India: 500 GW renewables target by 2030; solar costs now 40 % below coal LCOE · Germany Energiewende: 60 % renewable electricity 2023; still reliant on gas and coal for winter peaks · Direct Air Capture (Orca plant, Iceland): 4,000 tCO₂/yr capacity; $400–1,000/tCO₂; target <$100 by 2030',
        },
        {
          name: 'Adaptation: Frameworks and Hard Limits',
          icon: Thermometer,
          color: BRAND.coral,
          desc: 'Adaptation unavoidable: 0.3–0.5 °C committed warming + impacts locked in at current 1.2 °C. Infrastructure: sea walls, surge barriers (Thames Barrier, Rotterdam Maeslant Gate), mangrove restoration, managed retreat. Agriculture: heat/drought-tolerant varieties, shifted planting dates, crop diversification. Hard limits: permanent inundation of atoll nations (Tuvalu, Kiribati); physiological heat limits (Tw >35 °C); irreversible species extinction. Soft limits: addressable with sufficient finance + technology + governance. Loss and Damage Fund (COP27, 2022): formal recognition of irreversible climate harms; funding governance contested. Green Climate Fund: supports adaptation in developing nations.',
          examples: 'Netherlands Delta Works: $5B coastal defence; now expanding to accommodate 2 m SLR · Bangladesh Cyclone Preparedness Programme: reduced mortality per cyclone from 500,000 (1970) to <1,000 despite stronger storms · Maldives: building artificial island Hulhumalé above SLR projections; also negotiating sovereign territory relocation · Bangladesh coastal embankments: protecting 30 % of country from flooding; require regular upgrading as SLR accelerates',
        },
        {
          name: 'International Governance: UNFCCC to Paris',
          icon: Globe,
          color: BRAND.jade,
          desc: 'UNFCCC (1992): 198 parties; CBDR principle; established architecture. Kyoto Protocol (1997): binding targets for Annex I nations; US never ratified; Canada withdrew; CDM carbon markets; covered ~12 % global emissions after US exit. Paris Agreement (2015): NDCs — voluntary, nationally determined pledges; reviewed every 5 years; ratchet mechanism; aims "well below 2 °C, pursue 1.5 °C"; $100B/yr finance pledge (largely unmet); transparency framework. Current NDCs → ~2.5–3.0 °C by 2100. Implementation gap: pledges vs. actual policies. Ambition gap: pledges vs. 1.5 °C pathway. IPCC: policy-relevant but not policy-prescriptive.',
          examples: 'Paris 2015: 195 nations signed; first universal climate agreement; US withdrew (2017), rejoined (2021) · COP26 Glasgow (2021): "phasedown" coal; methane pledge; COP27 Sharm el-Sheikh (2022): Loss and Damage Fund; COP28 Dubai (2023): tripling renewables pledge · EU ETS: oldest carbon market; ~€80/tCO₂ in 2023; covers ~40 % EU emissions; extended to shipping 2024 · US Inflation Reduction Act (2022): ~$370B clean energy investment; largest US climate legislation in history',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Most IPCC 1.5 °C scenarios require 2–10 GtCO₂/yr of carbon dioxide removal by mid-century, but current CDR capacity is only ~0.002 GtCO₂/yr. What does this gap imply?',
          a: [
            'Rapid CDR scale-up is a critical dependency in modelled 1.5 °C pathways; failing to develop it would require even steeper near-term emission cuts to compensate',
            'The 1.5 °C target is already unachievable and should be abandoned in favour of 2 °C',
            'CDR is only needed if solar and wind fail to deploy at projected rates, making it a backup with no urgency',
            'CDR cannot count toward carbon budgets because it is not yet deployed at commercial scale',
          ],
          correct: 0,
          explain: 'The CDR gap is one of the most significant implementation risks in current climate policy. Integrated Assessment Models that produce 1.5 °C scenarios treat CDR as a balancing item — typically to offset residual hard-to-abate emissions. If CDR fails to scale, the same warming target requires even faster decarbonisation of energy, industry, and land use.',
        },
        {
          q: `The Paris Agreement uses voluntary NDCs reviewed every five years, unlike Kyoto\'s binding targets. What is the primary tradeoff of this approach?`,
          a: [
            'Paris achieves near-universal participation by making pledges nationally determined and non-binding, but sacrifices the enforcement mechanism that binding targets would provide',
            'Paris requires deeper cuts than Kyoto because targets are reviewed every five instead of ten years',
            'Paris eliminates the need for carbon markets since national targets replace market-based compliance',
            'Paris is more enforceable than Kyoto because the International Court of Justice can sanction nations that miss their NDCs',
          ],
          correct: 0,
          explain: 'The Paris architecture solved the participation problem that doomed Kyoto (only Annex I nations; US never ratified). But the pledge-and-review system has no enforcement mechanism — no international body can sanction a nation for missing its NDC. The ratchet mechanism relies on political pressure, transparency, and domestic policy rather than legal obligation.',
        },
        {
          q: '"Hard adaptation limits" describe situations where adaptation to climate change is not possible. Which is the best example?',
          a: [
            'Permanent inundation of low-lying atoll islands as sea level rises beyond island elevation — no adaptation measure can substitute for land that no longer exists above water',
            'High cost of sea wall construction that exceeds current government budgets in a coastal city',
            'Lack of heat-tolerant crop varieties, which could be developed given sufficient research funding',
            'Insufficient early warning systems for tropical cyclones in a developing nation, which could be improved with technology transfer',
          ],
          correct: 0,
          explain: 'Hard limits are biophysical or existential — the system cannot function in the changed climate regardless of resources or technology. Permanent submersion is the clearest example. High cost, lack of crop varieties, or absent early warning systems are soft limits — constrained by finance, technology, or governance — but addressable in principle with sufficient resources.',
        },
        {
          q: 'The concept of "common but differentiated responsibilities" (CBDR) is a foundational principle of the UNFCCC, reflecting that all countries share responsibility for addressing climate change but that developed nations bear greater historical responsibility for cumulative emissions. How does the operationalisation of CBDR in the Kyoto Protocol versus the Paris Agreement differ, and what are the scientific and equity arguments for and against treating developing nations differently in climate commitments?',
          a: [
            'CBDR is not a meaningful distinction in climate science — the greenhouse effect does not depend on which country emitted a given molecule of CO₂; a tonne of CO₂ emitted in China has exactly the same warming effect as a tonne emitted in Germany; climate science therefore supports treating all nations identically with equal per-capita emission limits from a given baseline date, regardless of historical emissions; the CBDR principle introduces political considerations that undermine scientifically optimal mitigation',
            'Kyoto operationalised CBDR by imposing legally binding emission reduction targets on Annex I (developed) nations while excluding developing nations entirely from binding commitments; Paris operationalised CBDR by allowing all nations to submit self-determined pledges (NDCs) with no legally binding emission targets but with transparency requirements and a universal expectation of progressive ambition; the scientific argument for differentiation is that developed nations have higher cumulative historical emissions (which dominate current atmospheric CO₂ concentrations) and higher per-capita emissions; the equity argument is that developing nations have lower capacity to finance mitigation and adaptation and lower historical responsibility; the counterargument is that rapid economic growth in China, India, and others means that future emissions from developing nations now dominate the global budget, making targets that exclude them insufficient to achieve 1.5–2 °C goals regardless of developed-nation action',
            'The Paris Agreement eliminated CBDR entirely — it replaced differentiated responsibilities with identical obligations for all nations, requiring every country to reduce emissions by 45 % below 2010 levels by 2030; developing nations accepted this equal standard in exchange for $100 billion per year in climate finance from developed nations; the shift from differentiated to universal equal obligations is the primary reason Paris achieved more widespread participation than Kyoto',
            'CBDR means that the top 5 fossil fuel producing companies bear more responsibility for climate change than any national government, because they have directly controlled the extraction and sale of fossil fuels; the UNFCCC should therefore focus its enforcement mechanisms on corporate emitters rather than national governments; the Kyoto and Paris distinction between developed and developing nations is irrelevant because the real distinction is between fossil fuel companies and all other actors',
          ],
          correct: 1,
          explain: `The claim that climate science supports equal per-capita emission limits from a given baseline date ignores the cumulative nature of CO₂ forcing: CO₂ persists in the atmosphere for centuries, so current atmospheric concentrations reflect the entire history of emissions; a nation that emitted heavily for 200 years has contributed more to current warming than a nation that emitted the same amount per capita only in recent decades; cumulative responsibility is a scientifically coherent concept (A incorrectly dismisses the physical basis for historical responsibility). Paris did not impose identical obligations on all nations — NDCs are explicitly "nationally determined," which means developing nations can set targets that reflect their development context; the $100 billion climate finance pledge does exist but has largely not been met; the characterisation of Paris as having "eliminated CBDR and replaced it with equal obligations" is factually incorrect (C misrepresents both the Paris text and the climate finance commitment). The corporate responsibility argument in D is a real and active area of climate litigation and policy debate, but it does not render the national government distinction irrelevant — governments set the policy frameworks within which companies operate; moreover, the UNFCCC architecture is built around national sovereignty; the framing in D conflates different scales of responsibility and actor types (D introduces a legitimate consideration in a way that dismisses rather than enriches the governance question). The correct answer is B: the Kyoto-Paris contrast illustrates the central tension in international climate governance between effectiveness (reducing global emissions enough to avoid dangerous warming) and equity (distributing the burden of action fairly). Kyoto\'s strict Annex I/non-Annex I distinction had a scientific basis — developed nations account for the vast majority of cumulative historical emissions that explain current atmospheric CO₂ levels — but it failed as a governance model because: it excluded nations that now account for >60% of global emissions (China, India); the US never ratified; and Canada withdrew. Paris\'s universal NDC approach achieved participation but relies on voluntary ambition. The scientific equity argument for CBDR is strong: the UK, USA, and Germany industrialised on cheap fossil fuels for 150 years; asking newly industrialising nations to forgo the same development pathway without financial compensation is both politically untenable and ethically questionable. The counterargument is equally scientific: given the carbon budget arithmetic (~500 GtCO₂ remaining for 1.5 °C), even perfect compliance by all developed nations cannot achieve the Paris temperature goals if developing nation emissions continue on current trajectories; universal rapid action is required even if differentiated in terms of burden-sharing and finance.`,
        },
      ],
    },
  ],
}

export default lesson
