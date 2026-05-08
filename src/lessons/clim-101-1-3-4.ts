import { Thermometer, Globe, Wind } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const lesson: Lesson = {
  id: 'clim-101-1-3-4',
  title: 'Mitigation, Adaptation, and Climate Policy',
  description: 'The physics, economics, and politics of reducing greenhouse gas emissions, adapting to inevitable change, and the international frameworks that govern global climate action.',
  track: 'cli',
  trackName: 'Climate Science',
  xpReward: 140,
  level: 'Beginner',
  type: 'concept',
  icon: Wind,
  color: BRAND.jade,
  cards: [
    {
      title: 'Mitigation Pathways: Decarbonising the Global Economy',
      body: `Mitigation means reducing the sources of greenhouse gas emissions or enhancing their removal. Reaching net-zero CO₂ emissions globally by approximately 2050 is the central requirement for limiting warming to 1.5 °C. Modelled 1.5 °C pathways share common structural elements:\n\n**Energy system:** Rapid electrification of end uses (transport, heating, industry) powered by solar PV, wind, and storage. Solar and wind costs have fallen >90 % since 2010, making them the cheapest new electricity source in most of the world. Fossil fuel power generation must approach zero by 2035 in advanced economies.\n\n**Industry:** Steel and cement production rely on high-temperature heat and process chemistry that are difficult to electrify; mitigation options include green hydrogen, carbon capture and storage (CCS), and electrolysis-based processes. Industry is the hardest-to-abate sector.\n\n**Land use:** Halting deforestation (~10 % of global emissions) and restoring forests and wetlands provide natural carbon sinks. Agriculture emissions (methane from livestock, N₂O from fertilisers) require separate strategies — dietary change, improved fertiliser management, rice paddy management.\n\n**Carbon dioxide removal (CDR):** Most 1.5 °C scenarios require 2–10 GtCO₂/yr of CDR by mid-century via afforestation, enhanced weathering, direct air capture (DAC), or bioenergy with CCS (BECCS). Current CDR capacity is ~0.002 GtCO₂/yr. Scaling CDR in time requires massive land, water, and energy investments.`,
      icon: Wind,
      color: BRAND.jade,
    },
    {
      title: 'Adaptation: Managing Unavoidable Change',
      body: `Even under aggressive mitigation, ~1.5–2 °C of warming is effectively committed. Adaptation — adjusting human and natural systems to reduce harm from current and future climate change — is therefore unavoidable. Adaptation operates across multiple scales:\n\n**Infrastructure:** Coastal cities are investing in sea walls, surge barriers (Thames Barrier, Rotterdam's Maeslant gate), mangrove restoration as living shorelines, and managed retreat for the most exposed communities. Urban heat island mitigation uses green roofs, urban trees, and cool pavements.\n\n**Agriculture:** Breeding heat- and drought-tolerant crop varieties; shifting planting dates; precision irrigation; crop diversification; climate-smart agronomy. The Green Climate Fund supports smallholder adaptation in developing nations.\n\n**Limits to adaptation:** Some changes exceed the capacity of social-ecological systems to adapt. Permanent inundation of low-lying island nations, irreversible species extinction, and physiological heat limits that prevent outdoor labour are examples of **hard adaptation limits**. Other limits are **soft** — constrained by finance, technology, or governance rather than biophysical boundaries.\n\n**Loss and Damage:** Harms from climate change that exceed adaptation capacity — ecosystem loss, forced migration, cultural heritage loss — are captured under the UNFCCC "loss and damage" framework. The Glasgow (COP26) and Sharm el-Sheikh (COP27) agreements advanced this concept; COP27 established a dedicated Loss and Damage Fund, though funding and governance remain contested.`,
      icon: Thermometer,
      color: BRAND.jade,
    },
    {
      title: 'International Climate Governance: From Kyoto to Paris',
      body: `**UNFCCC (1992):** The United Nations Framework Convention on Climate Change established the principle of "common but differentiated responsibilities" (CBDR) — all nations share responsibility for the climate system, but historical emitters bear greater obligations. The UNFCCC has near-universal ratification (198 parties).\n\n**Kyoto Protocol (1997):** Set binding emission reduction targets for developed (Annex I) countries for 2008–2012. The US never ratified; Canada withdrew; the Clean Development Mechanism (CDM) generated carbon credits of contested additionality. Kyoto established the architecture of international carbon accounting but covered only ~12 % of global emissions after the US withdrawal.\n\n**Paris Agreement (2015):** All parties submit Nationally Determined Contributions (NDCs) — voluntary emission reduction pledges — reviewed every five years with a ratchet mechanism. Aims to hold warming "well below 2 °C" above pre-industrial and pursue 1.5 °C. Includes provisions for adaptation, finance ($100B/yr pledge from developed to developing nations — largely unmet), and loss and damage. The pledge-and-review architecture is more inclusive than Kyoto but relies on political will rather than legal enforcement.\n\n**IPCC:** The Intergovernmental Panel on Climate Change synthesises scientific literature for policymakers. Assessment Reports (AR6 completed 2021–2023) inform but do not set policy. The science-policy interface is explicit: IPCC is policy-relevant but not policy-prescriptive.`,
      icon: Globe,
      color: BRAND.jade,
    },
  ],
  quiz: [
    {
      question: 'Most IPCC 1.5 °C scenarios require 2–10 GtCO₂/yr of carbon dioxide removal (CDR) by mid-century, but current CDR capacity is only ~0.002 GtCO₂/yr. What does this gap imply?',
      options: [
        'Rapid CDR scale-up is a critical dependency in modelled 1.5 °C pathways, and failing to develop it would require even steeper near-term emission cuts to compensate',
        'The 1.5 °C target is already unachievable and should be abandoned in favour of 2 °C',
        'CDR technologies are only needed if solar and wind fail to deploy at projected rates, so it is a backup option with no urgency',
        'CDR cannot be counted toward carbon budgets because it is not yet deployed at commercial scale',
      ],
      correctIndex: 0,
      explain: 'The CDR gap is one of the most significant implementation risks in current climate policy. Integrated Assessment Models that produce 1.5 °C scenarios treat CDR as a balancing item — typically to offset residual hard-to-abate emissions. If CDR fails to scale, the same warming target requires even faster decarbonisation of energy, industry, and land use.',
    },
    {
      question: 'The Paris Agreement uses Nationally Determined Contributions (NDCs) reviewed every five years, unlike the Kyoto Protocol\'s binding targets. What is the primary tradeoff of this approach?',
      options: [
        'Paris achieves near-universal participation (including major emitters like the US, China, and India) by making pledges nationally determined and non-binding, but sacrifices the enforcement mechanism that binding targets would provide',
        'Paris requires deeper cuts than Kyoto because the targets are reviewed every five years instead of every ten years',
        'Paris eliminates the need for carbon markets since national targets replace market-based compliance mechanisms',
        'Paris is more enforceable than Kyoto because the International Court of Justice can sanction countries that miss their NDCs',
      ],
      correctIndex: 0,
      explain: 'The Paris architecture solved the participation problem that doomed Kyoto (only Annex I nations, US never ratified). But the pledge-and-review system has no enforcement mechanism — there is no international body that can sanction a nation for missing its NDC. The ratchet mechanism relies on political pressure, transparency, and domestic policy rather than legal obligation.',
    },
    {
      question: 'The concept of "hard adaptation limits" describes situations where adaptation to climate change is not possible. Which of the following is the best example of a hard adaptation limit?',
      options: [
        'Permanent inundation of low-lying atoll islands as sea level rises beyond the island\'s elevation — no adaptation measure can substitute for land that no longer exists above water',
        'High cost of sea wall construction that exceeds current government budgets in a coastal city',
        'Lack of heat-tolerant crop varieties, which could be developed given sufficient research funding',
        'Insufficient early warning systems for tropical cyclones in a developing nation, which could be improved with technology transfer',
      ],
      correctIndex: 0,
      explain: 'Hard limits are biophysical or existential — the system cannot function in the changed climate regardless of resources or technology. Permanent submersion is the clearest example. High cost, lack of crop varieties, or absent early warning systems are soft limits — constrained by finance, technology, or governance — but addressable in principle with sufficient resources.',
    },
  ],
}

export default lesson
