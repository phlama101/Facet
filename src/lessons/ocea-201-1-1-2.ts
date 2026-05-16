import { Waves, Activity, Thermometer, Globe } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const oceanAcidification: Lesson = {
  id: 'ocea-201-1-1-2',
  title: 'Ocean Acidification',
  track: 'oce',
  trackName: 'Oceanography',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: 'How rising atmospheric CO₂ is acidifying the ocean, and the consequences for marine organisms and ecosystems',
  sources: [
    { org: 'NOAA',   title: 'NOAA Ocean Acidification Program',    url: 'https://oceanacidification.noaa.gov/' },
    { org: 'MBARI',  title: 'MBARI Ocean Chemistry',               url: 'https://www.mbari.org/' },
    { org: 'IPCC',   title: 'IPCC Sixth Assessment Report',        url: 'https://www.ipcc.ch/' },
    { org: 'Nature', title: 'Nature — Ocean Acidification Research', url: 'https://www.nature.com/' },
  ],
  sections: [
    {
      type: 'intro',
      title: `The ocean\'s shifting chemistry`,
      body: `Since the Industrial Revolution began, the ocean has absorbed roughly 40 % of all anthropogenic CO₂ emitted — approximately 160 billion tonnes (176.3 billion tons) of carbon. This uptake has been an enormous service to the climate system, slowing atmospheric warming considerably. But every molecule of CO₂ that dissolves in seawater sets off a chain of chemical reactions that lowers pH. Since pre-industrial times, mean surface ocean pH has fallen from approximately 8.2 to 8.1 — a seemingly modest shift of 0.1 pH units. Because pH is logarithmic, however, this corresponds to a 26 % increase in hydrogen ion (H⁺) concentration. Under high-emission trajectories (SSP5-8.5), pH is projected to decline to 7.95–7.8 by 2100 — a total shift four to five times larger than what has already occurred, and a rate of change unprecedented in at least 56 million years.

The chemistry is straightforward. CO₂ dissolves to form carbonic acid (H₂CO₃), which dissociates to bicarbonate (HCO₃⁻) and carbonate (CO₃²⁻) ions. As CO₂ rises, equilibrium shifts: carbonate ion concentration falls. Carbonate matters enormously to marine life because it is the feedstock for calcium carbonate (CaCO₃) shells and skeletons. Corals build their frameworks from aragonite (a metastable CaCO₃ polymorph); pteropods — free-swimming sea snails central to polar food webs — also use aragonite. Oysters, mussels, and most bivalves secrete calcite (a more stable polymorph). Foraminifera build calcite tests. The saturation state Ω (omega) quantifies how thermodynamically stable a given CaCO₃ mineral is in the surrounding seawater: when Ω < 1, the mineral dissolves spontaneously. Aragonite is more soluble than calcite, so aragonite-secreting organisms are the first casualties of acidification.

Laboratory and field experiments have made the effects visceral. Pteropod shells collected from the Southern Ocean already show pitting and thinning under current conditions; a landmark 2012 paper showed that aragonite undersaturation in the Southern Ocean was dissolving the shells of live *Limacina helicina* specimens in situ. Oyster hatcheries in the US Pacific Northwest nearly failed in 2007–2009 when upwelling events delivered corrosive, low-pH water from depth — water that had absorbed CO₂ decades earlier — into their larval tanks. The US shellfish aquaculture industry faces estimated losses on the order of $110 million per year under projected acidification scenarios. Coral calcification rates drop measurably as pH falls, compounding the bleaching stress imposed by warming; the two stresses are distinct — bleaching occurs when symbiotic zooxanthellae are expelled under heat stress, while acidification reduces the ability to build and maintain carbonate structures. Both can occur simultaneously.

The long-term monitoring record confirms the trend is real and accelerating. The Hawaii Ocean Time-series (HOT) at Station ALOHA has measured a continuous 20-year decline in surface ocean pH, tracking closely with rising atmospheric CO₂. Similar records exist at the Bermuda Atlantic Time-series Study (BATS) and at the European Station for Time Series in the Ocean (ESTOC) in the Canary Islands. Together these records show a coherent global signal: the ocean\'s pH is falling in lockstep with atmospheric CO₂, and the rate of pH change since 1980 exceeds that reconstructed from any interval in the Cenozoic record.

Terminology matters: the ocean remains alkaline (pH > 7). The term **ocean acidification** refers to the direction of the trend — increasing acidity, decreasing pH — not to the ocean becoming acid in an absolute sense. A seawater sample at pH 8.0 is still distinctly basic. The distinction is important for communicating accurately with the public but does not diminish the ecological significance of the shift.

Two regions face particular urgency. The Southern Ocean and the Arctic Ocean are, by virtue of cold temperatures (cold water dissolves more CO₂) and reduced buffering capacity, on track to become seasonally undersaturated in aragonite by the 2030s–2040s under moderate emissions — decades ahead of the global average. The Arctic summer of 2008 already recorded surface waters corrosive to aragonite in parts of the Beaufort Sea. These are not projections for future generations; they are occurring now.

The geological record provides both warning and context. The Paleocene-Eocene Thermal Maximum (PETM), approximately 56 million years ago, was the closest deep-time analogue to modern OA: a massive pulse of carbon (estimated at 3,000–10,000 Pg C over ~20,000 years from volcanism and methane clathrate release) drove a global warming of 5–8°C (41–46°F) and a rapid ocean acidification event evidenced by a sharp dissolution horizon in deep-sea sediment cores — a layer where the normally abundant foraminifera tests simply vanish, replaced by red clay. The PETM carbon input rate was, however, at least an order of magnitude slower than today\'s anthropogenic emissions, giving marine ecosystems more time to adapt. That the PETM still caused measurable carbonate dissolution and ecosystem disruption is sobering; that modern emissions are faster makes the modern situation potentially more severe.

Monitoring now spans the globe. The Argo float network deploys thousands of autonomous profilers measuring temperature, salinity, and increasingly carbonate chemistry (pH sensors, total alkalinity). The Global Ocean Ship-based Hydrographic Investigations Program (GO-SHIP) conducts decadal full-depth ocean sections measuring the complete carbonate system. These networks are the backbone of our understanding of how rapidly the ocean\'s chemistry is evolving.`,
      keyTerms: [
        {
          term: 'Ocean acidification',
          def: 'The process by which seawater pH decreases as the ocean absorbs rising atmospheric CO₂. Since pre-industrial times, mean surface pH has fallen from ~8.2 to ~8.1 (a 26 % increase in H⁺ concentration). The ocean remains alkaline; "acidification" refers to the direction of change, not an absolute acid state.',
        },
        {
          term: 'Aragonite undersaturation',
          def: 'Condition in which the carbonate ion concentration is too low to maintain aragonite (a CaCO₃ polymorph) in solution; saturation state Ω < 1. Aragonite spontaneously dissolves when Ω < 1. Affects corals, pteropods, and other aragonite-secreting organisms. Southern Ocean and Arctic regions are approaching this threshold first.',
        },
        {
          term: 'Pteropod',
          def: 'Free-swimming, holoplanktonic sea snail (order Pteropoda) that builds a thin aragonite shell. Key prey for salmon, whales, seabirds, and other fish in polar and sub-polar ecosystems. Among the most vulnerable organisms to ocean acidification; shell dissolution experiments and field observations already document damage at current pH levels.',
        },
        {
          term: 'Coral calcification',
          def: 'The biological process by which reef-building (hermatypic) corals deposit aragonite to build their hard skeletons, using carbonate and calcium ions from seawater. Calcification rate declines measurably as pH and carbonate ion concentration fall. Distinct from coral bleaching (loss of zooxanthellae due to heat stress), though both stresses can operate simultaneously.',
        },
        {
          term: 'PETM (Paleocene-Eocene Thermal Maximum)',
          def: 'A geologically abrupt global warming and ocean acidification event ~56 Ma ago, caused by rapid injection of thousands of petagrams of carbon. The best deep-time analogue for modern OA. Marked by a dissolution horizon in deep-sea sediment cores (foraminifera test disappearance). Carbon input rate was at least 10× slower than current anthropogenic emissions.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Key mechanisms and affected organisms',
      body: `Ocean acidification operates through chemistry and propagates through biology. Understanding the mechanisms at each link in this chain is essential for assessing risk and designing responses.

**The carbonate system.** Seawater\'s resistance to pH change is provided by its carbonate buffering system. When CO₂ enters the ocean, it reacts: CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻. The H⁺ then reacts with CO₃²⁻: H⁺ + CO₃²⁻ → HCO₃⁻, consuming carbonate ions. The result: more bicarbonate, less carbonate, more acid. This is exactly the wrong direction for calcifying organisms, which need carbonate to build CaCO₃. The saturation state Ω = [Ca²⁺][CO₃²⁻] / Ksp; as [CO₃²⁻] falls, Ω falls. For aragonite, the critical threshold Ω = 1 will be crossed first in cold, high-latitude oceans, where CO₂ is more soluble and buffering capacity is lower.

**Corals and reef ecosystems.** Scleractinian corals build frameworks of aragonite. Under elevated CO₂ and reduced pH, net calcification declines — in some experiments dramatically. At pH 7.8 (projected for 2100 under high emissions), calcification rates of some coral species drop 50 % or more in controlled experiments. In combination with warming-driven bleaching (which has already caused mass bleaching events on the Great Barrier Reef in 2016, 2017, 2020, and 2022), acidification reduces the reef\'s ability to grow faster than it erodes. At some threshold, reefs shift from net accretion to net dissolution. Reef fish and invertebrates that depend on the three-dimensional structure of the reef for habitat are indirectly affected.

**Pteropods and the polar food web.** The aragonite shells of pteropods are only ~1–10 µm thick — extremely vulnerable to dissolution. In the Southern Ocean, aragonite saturation horizon (the depth below which aragonite dissolves) has shoaled from ~800 m (2,625 ft) in the 1990s to less than ~200 m (656 ft) in parts of the Southern Ocean today. Some surface waters are already seasonally undersaturated. Pteropods form up to 45 % of pink salmon diet in the Gulf of Alaska and are important prey for whales and seabirds. Their disruption propagates broadly through polar food webs.

**Shellfish aquaculture.** Oysters, mussels, and clams secrete calcite and aragonite. Larval stages are particularly sensitive — larval oysters cannot form their first shell (prodissoconch) in undersaturated water. The Pacific oyster (*Crassostrea gigas*) industry in the US Pacific Northwest provides a real-world case study: hatcheries in Oregon and Washington saw near-total larval mortality during 2007–2009 upwelling events that brought low-pH water from depth to the surface. Hatcheries now monitor pH continuously and add sodium carbonate to buffer larval tanks. Estimated economic impact to US shellfish aquaculture: ~$110 million per year under projected OA scenarios.

**Adaptation and resilience.** Not all marine organisms respond to OA identically. Some species of algae and seagrasses show increased growth under elevated CO₂ (they benefit from the carbon fertilisation effect). Sea urchins and some echinoderms can partially compensate by increasing calcification effort. Nongeniculate crustose coralline algae, which cement reefs together, are among the most vulnerable. Evolutionary adaptation is possible but requires many generations; the current rate of pH change is far faster than most marine evolutionary timescales, making rapid genetic adaptation unlikely to save the most vulnerable species. The distinction between acclimatisation (short-term physiological adjustment within one organism\'s lifetime) and adaptation (evolutionary change across generations) is important for projecting future outcomes.`,
      cards: [
        {
          name: 'The Chemistry of Ocean Acidification',
          icon: Waves,
          color: BRAND.accent,
          desc: 'CO₂ absorption drives carbonic acid formation, raising H⁺ and consuming CO₃²⁻ ions. The saturation state Ω = [Ca²⁺][CO₃²⁻] / Ksp falls below 1 when carbonate is too depleted to stabilise CaCO₃ minerals, causing spontaneous dissolution of shells and skeletons.',
          examples: 'Pre-industrial surface pH: ~8.2 · Current: ~8.1 (26 % more H⁺) · Projected 2100 (high emissions): 7.95–7.8 · Aragonite Ω at ALOHA has fallen ~15 % since pre-industrial; Southern Ocean surface already seasonally Ω < 1 for aragonite in parts',
        },
        {
          name: 'Impacts on Calcifying Organisms',
          icon: Activity,
          color: BRAND.coral,
          desc: 'Aragonite-secreting organisms (corals, pteropods) are most vulnerable because aragonite is more soluble than calcite. Reef coral calcification declines ~15–50 % at pH 7.8. Pteropod shells show in situ dissolution at current Southern Ocean pH levels. Oyster larvae cannot form their first shell in undersaturated water.',
          examples: 'Pacific Northwest oyster hatchery collapse: 2007–2009, driven by upwelled corrosive water · US shellfish aquaculture economic losses: ~$110M/yr projected · Pteropods: up to 45 % of pink salmon diet in Gulf of Alaska — losses cascade through polar food webs',
        },
        {
          name: 'Polar Seas — First to Be Affected',
          icon: Thermometer,
          color: BRAND.accentHot,
          desc: 'Cold high-latitude seawater dissolves more CO₂ and has lower buffering capacity, bringing polar oceans closest to aragonite undersaturation first. Southern Ocean and Arctic surface waters are projected to become seasonally undersaturated in aragonite by the 2030s–2040s under moderate emissions — decades ahead of tropical oceans.',
          examples: 'Beaufort Sea, Arctic: surface aragonite undersaturation recorded in summer 2008 · Southern Ocean: aragonite saturation horizon has shoaled from ~800 m (2,625 ft) (1990s) to <200 m (656 ft) in parts today · Arctic pteropod (*Limacina helicina*) shell dissolution confirmed in live specimens, 2012',
        },
        {
          name: 'Historical Analogues: The PETM',
          icon: Globe,
          color: BRAND.jade,
          desc: `The Paleocene-Eocene Thermal Maximum (~56 Ma) involved a rapid carbon pulse of 3,000–10,000 Pg C over ~20,000 years, driving global warming of 5–8°C (41–46°F) and a major OA event. Sediment cores show a sharp carbonate dissolution horizon — foraminifera tests simply vanish. Today\'s anthropogenic carbon release rate is at least 10× faster.`,
          examples: 'PETM dissolution horizon: visible as a red clay layer in deep-sea cores from the Atlantic and Pacific · Carbon isotope excursion (CIE): −3 to −5 ‰ δ¹³C globally · Modern CO₂ emissions: ~10 Pg C/yr vs. PETM estimated ~0.3–1.7 Pg C/yr — rate is the key risk factor',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From Atmospheric CO₂ to Shell Dissolution',
      body: 'Ocean acidification is a cascade: rising atmospheric CO₂ enters the ocean, drives chemical reactions that lower pH and reduce carbonate availability, ultimately threatening calcifying organisms from corals to pteropods.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing the chain of causes and effects connecting rising atmospheric CO₂ to carbonate shell dissolution and ecosystem impacts in the ocean',
        nodes: [
          {
            id: 'rising-co2',
            label: 'Rising atmospheric CO₂',
            description: 'Fossil fuel combustion, deforestation, and industrial processes have raised atmospheric CO₂ from ~280 ppm (pre-industrial) to over 420 ppm today. The ocean absorbs roughly 25–30 % of annual emissions — about 10 Pg C per year.',
            color: BRAND.gold,
          },
          {
            id: 'ocean-absorption',
            label: 'Increased ocean CO₂ absorption',
            description: 'CO₂ is highly soluble in cold seawater. As atmospheric concentration rises, more CO₂ diffuses into the surface ocean, forming carbonic acid (H₂CO₃ → H⁺ + HCO₃⁻). Cold, high-latitude oceans absorb disproportionately more CO₂.',
            color: BRAND.accent,
          },
          {
            id: 'ph-decline',
            label: 'pH decline (more H⁺)',
            description: 'As CO₂ dissolves, H⁺ concentration rises and pH falls. Surface ocean pH has dropped from ~8.2 to ~8.1 since pre-industrial times — a 26 % increase in acidity. Under high-emission scenarios (SSP5-8.5), pH could fall to 7.95–7.8 by 2100.',
            color: BRAND.coral,
          },
          {
            id: 'carbonate-decline',
            label: 'Lower carbonate (CO₃²⁻)',
            description: 'Rising H⁺ reacts with CO₃²⁻ ions (H⁺ + CO₃²⁻ → HCO₃⁻), consuming carbonate. Carbonate ion concentration in the surface ocean has fallen ~30 % since pre-industrial times and continues to decline. Bicarbonate increases; carbonate — the feedstock for shells — decreases.',
            color: BRAND.amethyst,
          },
          {
            id: 'saturation-state',
            label: 'Reduced saturation state (Ω)',
            description: 'The carbonate saturation state Ω = [Ca²⁺][CO₃²⁻] / Ksp determines whether CaCO₃ minerals are stable. As [CO₃²⁻] falls, Ω falls. When Ω < 1, aragonite and calcite dissolve spontaneously. Aragonite (used by corals and pteropods) reaches Ω < 1 before calcite.',
            color: BRAND.accentHot,
          },
          {
            id: 'shell-dissolution',
            label: 'Shell dissolution and bleaching',
            description: 'Below aragonite saturation (Ω < 1), pteropod shells thin and pit; oyster larvae cannot form their first shell; coral calcification rates drop 15–50 %. Coral bleaching from warming acts simultaneously, compounding the acidification stress. Polar food webs, reef ecosystems, and shellfish aquaculture all face measurable damage.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'rising-co2',       to: 'ocean-absorption', label: 'Air-sea CO₂ diffusion driven by partial pressure gradient' },
          { from: 'ocean-absorption', to: 'ph-decline',        label: 'Carbonic acid formation lowers pH' },
          { from: 'ph-decline',       to: 'carbonate-decline', label: 'H⁺ + CO₃²⁻ → HCO₃⁻ consumes carbonate ions' },
          { from: 'carbonate-decline', to: 'saturation-state', label: 'Ω = [Ca²⁺][CO₃²⁻] / Ksp falls toward undersaturation' },
          { from: 'saturation-state', to: 'shell-dissolution', label: 'Ω < 1 triggers spontaneous dissolution of aragonite structures' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'By how much has ocean pH declined since pre-industrial times, and what does this change mean in terms of hydrogen ion concentration?',
          a: [
            'pH has declined by 1.0 unit, representing a 100 % increase in hydrogen ion concentration — the ocean is now ten times more acidic',
            'pH has declined by 0.1 units, representing a 26 % increase in hydrogen ion concentration, because pH is a logarithmic scale',
            'pH has declined by 0.01 units, representing a 2.3 % increase in hydrogen ion concentration — a negligible chemical change',
            'pH has declined by 0.5 units, representing a 215 % increase in hydrogen ion concentration — the ocean is now three times more acidic',
          ],
          correct: 1,
          explain: 'Surface ocean pH has fallen from ~8.2 (pre-industrial) to ~8.1 today — a decline of 0.1 pH units. Because pH is defined as the negative logarithm of hydrogen ion concentration (pH = −log[H⁺]), a decrease of 0.1 units corresponds to a factor of 10^0.1 ≈ 1.26 increase in [H⁺] — that is, a 26 % increase in acidity. This is not 10 % (which a linear scale would suggest) and not 100 % (which would require a full 1-unit drop). The ocean remains alkaline — pH 8.1 is well above the neutral point of 7.0 — but the direction and rate of change are the ecological concern. Under high-emission scenarios, a further 0.3–0.4 unit decline is projected by 2100, which would represent roughly a 100–150 % increase in [H⁺] relative to pre-industrial values.',
        },
        {
          q: 'Why are pteropods particularly vulnerable to ocean acidification compared to most other calcifying marine organisms?',
          a: [
            'Pteropods are vulnerable because they are large, slow-moving animals that cannot migrate away from acidified water masses fast enough to escape shell dissolution',
            'Pteropods secrete shells made of aragonite — the more soluble form of calcium carbonate — and their shells are only 1–10 µm thick, making them among the first organisms to experience dissolution as the aragonite saturation horizon shoals toward the surface',
            'Pteropods are vulnerable because they lack any physiological mechanism for regulating internal pH, unlike corals and foraminifera, which can maintain calcifying fluid chemistry independently of ambient seawater',
            'Pteropods are vulnerable because they only inhabit very shallow water (less than 10 m (33 ft) depth) where CO₂ concentrations are highest due to surface warming',
          ],
          correct: 1,
          explain: 'Pteropods (planktonic sea snails) build their shells from aragonite, which is thermodynamically less stable than calcite and dissolves at higher carbonate ion concentrations — that is, at less acidic conditions. Aragonite-secreting organisms therefore reach the critical undersaturation threshold (Ω < 1) earlier than calcite-secreting organisms as the ocean acidifies. Compounding this, pteropod shells are extremely thin (1–10 µm), providing minimal material buffer against dissolution. A 2012 study documented in situ shell dissolution of live Southern Ocean pteropods (*Limacina helicina antarctica*) at current ocean conditions — demonstrating that this is not a future risk but a present reality. Pteropods occupy a critical ecological position as prey for salmon, whales, seabirds, and many fish species, so their decline propagates widely through polar food webs.',
        },
        {
          q: 'Which ocean regions will become aragonite-undersaturated first, and why?',
          a: [
            'Tropical oceans near the equator, because warm surface waters release CO₂ less efficiently and accumulate more carbonic acid near the surface',
            'The Southern Ocean and Arctic Ocean, because cold high-latitude seawater dissolves more CO₂ and has lower carbonate buffering capacity, bringing these regions closest to undersaturation first',
            'The deep ocean below 3,000 m (9,843 ft) in all basins, because hydrostatic pressure increases CO₂ solubility uniformly at depth regardless of latitude',
            'Semi-enclosed marginal seas like the Mediterranean and Baltic, because restricted circulation prevents dilution of acidified surface water',
          ],
          correct: 1,
          explain: 'Cold seawater dissolves more CO₂ than warm seawater (CO₂ solubility increases as temperature decreases), so high-latitude polar oceans take up disproportionately more CO₂ per unit area. Additionally, polar waters have lower total alkalinity and lower carbonate ion concentrations to begin with, meaning their buffering capacity is lower — a given addition of CO₂ produces a larger pH and saturation-state change. The Southern Ocean and Arctic Ocean are therefore on course to become seasonally undersaturated in aragonite (Ω < 1) in the 2030s–2040s under moderate emissions scenarios, decades before tropical and subtropical oceans reach this threshold. Observational evidence already shows seasonal aragonite undersaturation in parts of the Beaufort Sea (Arctic, summer 2008) and declining Ω values in the Southern Ocean surface layer. These regions host the pteropod and foraminifera communities most immediately at risk.',
        },
        {
          q: 'What is the PETM and why is it considered the most relevant geological analogue for modern ocean acidification?',
          a: [
            'The PETM (Paleocene-Eocene Thermal Maximum) was an ice age ~56 Ma ago during which ocean pH rose sharply as CO₂ was drawn down by increased phytoplankton productivity; it is relevant because it shows how the ocean can recover from chemical perturbations',
            'The PETM was a rapid carbon release event ~56 Ma ago causing global warming of 5–8°C (41–46°F) and ocean acidification; it is relevant because it is the closest deep-time analogue to modern CO₂ injection, though today\'s emission rate is at least 10× faster than the PETM carbon release rate',
            'The PETM was a mass extinction event caused by asteroid impact ~66 Ma ago that acidified the ocean by injecting sulfur dioxide; it is relevant because it shows how sudden acidification can collapse carbonate platforms globally',
            'The PETM was a volcanic episode ~56 Ma ago that caused temporary ocean alkalinisation; it is relevant because it shows that the ocean naturally buffers large carbon inputs without significant biological damage',
          ],
          correct: 1,
          explain: `The Paleocene-Eocene Thermal Maximum (PETM, ~56 Ma ago) is the most widely cited geological analogue for modern OA because it involved a large, geologically rapid injection of carbon into the ocean-atmosphere system — estimated at 3,000–10,000 Pg C from volcanism, methane clathrates, or a combination, over roughly 20,000 years. This drove global mean temperatures up by 5–8°C (41–46°F) and produced a marked ocean acidification event, recorded in deep-sea sediment cores as a sharp carbonate dissolution horizon: layers otherwise rich in foraminifera tests are replaced by barren red clay, indicating that the carbonate compensation depth (CCD) shoaled dramatically and dissolved pre-existing carbonate. The PETM is relevant because it documents the ocean\'s biological and chemical response to a major rapid carbon pulse. Crucially, even though the PETM carbon release was fast by geological standards, current anthropogenic CO₂ emissions (roughly 10 Pg C/yr) represent a rate at least 10 times faster than the PETM release rate, suggesting the modern ocean has less time to buffer the perturbation through chemical weathering feedbacks.`,
        },
        {
          q: 'How does ocean acidification differ from ocean warming in its primary biological mechanism of harm to reef-building corals?',
          a: [
            'Ocean warming and ocean acidification are biologically identical in mechanism: both kill coral polyps by disrupting their cellular metabolism at the same threshold temperature and pH values simultaneously',
            'Ocean warming primarily causes coral bleaching — the expulsion of symbiotic zooxanthellae algae from coral tissue under heat stress, cutting off the coral\'s primary food supply — while ocean acidification reduces the availability of carbonate ions needed to build and maintain aragonite skeletons, lowering calcification rates and structural integrity',
            'Ocean acidification primarily causes coral bleaching by making seawater too acidic for zooxanthellae to survive, while ocean warming reduces calcification by increasing the rate of CaCO₃ dissolution at higher temperatures',
            'There is no biological difference: both stressors simply increase the coral\'s metabolic rate until it exhausts its energy reserves, at which point the skeleton dissolves and the polyp dies',
          ],
          correct: 1,
          explain: 'Coral bleaching and the effects of acidification are distinct biological mechanisms that can act simultaneously, compounding each other. **Bleaching** is triggered by elevated sea-surface temperature (typically 1–2°C (34–36°F) above the seasonal maximum for several weeks): heat stress causes the symbiotic algae (zooxanthellae, genus *Symbiodinium*) living inside coral tissue to produce reactive oxygen species; the coral expels the algae, losing its primary photosynthetic food source and its characteristic colour — hence "bleaching." If temperatures remain elevated, the coral may starve and die. **Acidification** operates through a different pathway: lower pH and reduced carbonate ion concentration lower the aragonite saturation state (Ω) at the site where corals deposit their CaCO₃ skeleton. Calcification rates decline, skeletons become less dense and more porous, and net reef accretion can shift to net erosion. At pH 7.8, some coral species show 50 % reductions in calcification. The two stressors reinforce each other: a bleached coral that has lost most of its photosynthetic energy income has less metabolic energy available to actively upregulate internal pH and maintain calcification against ambient acidification.',
        },
      ],
    },
  ],
}

export default oceanAcidification
