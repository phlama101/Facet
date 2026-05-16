import { Thermometer, Globe, Waves } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const oceanAcidification: Lesson = {
  id: 'ocea-101-1-4-2',
  title: 'Ocean Acidification: Chemistry, Impacts, and Trajectories',
  track: 'oce',
  trackName: 'Oceanography',
  level: 'Beginner',
  duration: '14 min',
  xpReward: 140,
  description: 'The ocean has absorbed roughly 40 % of all anthropogenic CO₂ since industrialisation — a service that has slowed atmospheric warming but at a cost. Ocean pH has already dropped 0.1 units (a 26 % increase in acidity), and the chemistry is undermining the ability of corals, shellfish, and pteropods to build their calcium carbonate structures.',
  sources: [
    { org: 'NOAA',     title: 'NOAA Ocean Acidification Program',                              url: 'https://oceanacidification.noaa.gov' },
    { org: 'MBARI',    title: 'MBARI — Ocean Acidification Research',                          url: 'https://www.mbari.org/ocean-acidification/' },
    { org: 'NOAA',     title: 'PMEL — Ocean Acidification',                                   url: 'https://www.pmel.noaa.gov/co2/story/Ocean+Acidification' },
    { org: 'OpenStax', title: 'Introduction to Oceanography (CC-BY 4.0)',                      url: 'https://openstax.org/books/introduction-oceanography' },
    { org: 'AGI',      title: 'Glossary of Geology — Ocean Acidification, Aragonite Saturation', url: 'https://www.americangeosciences.org/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The other CO₂ problem',
      body: `In 2003, oceanographer Ken Caldeira coined the phrase "the other CO₂ problem" to draw attention to a consequence of fossil fuel emissions that receives far less public attention than climate warming: ocean acidification. Every year, the world's oceans absorb roughly 25–30 % of annual anthropogenic CO₂ emissions — about 10 billion tonnes (11.0 billion tons) of carbon. This uptake has substantially slowed the build-up of CO₂ in the atmosphere and therefore the rate of warming. But it has come at a hidden cost: the CO₂ dissolves in seawater and drives a set of chemical reactions that produce carbonic acid, lower ocean pH, and reduce the availability of carbonate ions that marine organisms use to build shells and skeletons.

Since the Industrial Revolution, the average pH of the surface ocean has dropped from approximately 8.2 to 8.1 — a decrease of 0.1 pH units. Because pH is a logarithmic scale, this represents a 26 % increase in hydrogen ion concentration, not a 10 % increase as a linear scale would imply. The ocean is still alkaline (neutral pH is 7.0), but the trend is unambiguous: the ocean is becoming more acidic faster than at any point in the last 300 million years, based on evidence from marine sediment cores.

The consequences are not hypothetical. Southern Ocean pteropods (free-swimming sea snails that form a key part of the food chain) are already dissolving at the ocean surface. Pacific Northwest oyster hatcheries nearly collapsed in 2007–2008 when upwelling delivered corrosive water to their tanks, devastating larval oyster production. Coral reefs — already under pressure from warming-driven bleaching — face an additional acidification stress that reduces their calcification rates and weakens their structural integrity. These are observed, documented impacts at the current 0.1-unit pH change; projections for unmitigated emissions suggest a further 0.3-unit drop by 2100.`,
      keyTerms: [
        { term: 'Ocean acidification', def: 'The ongoing decrease in the pH of Earth\'s oceans caused by absorption of CO₂ from the atmosphere. The surface ocean has become ~26 % more acidic (by H⁺ concentration) since pre-industrial times, dropping from pH ~8.2 to ~8.1. Projections under high-emission scenarios (RCP8.5/SSP5-8.5) indicate a further drop to pH ~7.95–8.0 by 2100 — a total 0.3-unit decrease representing a 150 % increase in H⁺. Ocean acidification is occurring at a rate faster than any documented natural change in ocean chemistry in the past 300 million years.' },
        { term: 'Carbonate chemistry', def: 'The suite of reversible chemical equilibria governing the distribution of inorganic carbon in seawater. Key reactions: CO₂(aq) + H₂O ⇌ H₂CO₃ (carbonic acid); H₂CO₃ ⇌ H⁺ + HCO₃⁻ (bicarbonate); HCO₃⁻ ⇌ H⁺ + CO₃²⁻ (carbonate ion). When CO₂ increases, H⁺ increases and CO₃²⁻ decreases (because the excess H⁺ reacts with CO₃²⁻ to form more HCO₃⁻). In modern seawater, ~90 % of dissolved inorganic carbon is HCO₃⁻, ~9 % is CO₃²⁻, and ~1 % is CO₂(aq). Ocean acidification shifts this equilibrium toward higher HCO₃⁻ and lower CO₃²⁻.' },
        { term: 'Aragonite saturation state (Ω)', def: 'A dimensionless index describing the thermodynamic tendency of seawater to precipitate (Ω > 1) or dissolve (Ω < 1) aragonite — the metastable form of calcium carbonate used by corals, pteropods, and many other marine organisms. Ω = [Ca²⁺][CO₃²⁻] / Ksp(aragonite). As ocean pH decreases, [CO₃²⁻] decreases and Ω falls. Pre-industrial Ω in tropical surface waters was ~3.5; currently ~2.8; projected to fall below 1 (undersaturation, dissolution) across the Southern Ocean and Arctic Ocean within decades under high-emission scenarios.' },
        { term: 'Aragonite saturation horizon (ASH)', def: 'The depth below which seawater is undersaturated with respect to aragonite (Ω < 1), causing aragonite shells to spontaneously dissolve. The ASH is shallowest in cold, CO₂-rich polar and subpolar waters and deepest in warm tropical waters. Anthropogenic CO₂ absorption is causing the ASH to shoal (move to shallower depths) at rates of 1–3 m/yr in some regions, including the Southern Ocean and North Pacific. In some areas the ASH has already reached depths where pteropod populations live, exposing them to corrosive water year-round.' },
        { term: 'Pteropod', def: 'A group of free-swimming planktonic gastropod molluscs (sea butterflies and sea angels) that are abundant in polar and subpolar oceans and form an important component of marine food webs — consumed by fish, whales, and seabirds. Thecosomatous pteropods build aragonite shells 0.1–1 cm (0.0–0.4 in) in diameter. Field studies in the Southern Ocean (Bednaršek et al., 2012) documented severe dissolution of pteropod shells at the ocean surface — the first direct evidence of ocean acidification causing dissolution damage to free-living organisms in their natural habitat. Pteropod abundance and distribution are regarded as early biological indicators of ocean acidification.' },
      ],
    },
    {
      type: 'concept',
      title: 'The chemistry, biological impacts, and future trajectories of ocean acidification',
      body: `**The carbonate chemistry of CO₂ absorption.** When CO₂ dissolves in seawater, it reacts with water to form carbonic acid (H₂CO₃), which dissociates into bicarbonate (HCO₃⁻) and carbonate ions (CO₃²⁻), releasing hydrogen ions (H⁺) at each step. The key consequence is a two-part change: pH drops (more H⁺), and carbonate ion concentration falls (excess H⁺ consumes CO₃²⁻ by converting it back to HCO₃⁻). Both changes matter biologically. Calcifying organisms need carbonate ions to precipitate calcium carbonate (CaCO₃) for shells and skeletons. As [CO₃²⁻] falls, the thermodynamic cost of calcification rises; below the aragonite saturation state (Ω = 1), shells and skeletons will spontaneously dissolve. The ocean has absorbed ~40 % of all anthropogenic CO₂ since industrialisation — approximately 170 GtC. This uptake has substantially buffered atmospheric CO₂ concentrations (without it, atmospheric CO₂ would be ~440–450 ppm today instead of ~420 ppm), but the buffering capacity of seawater decreases as CO₂ increases, meaning future uptake efficiency will decline.

**Biological impacts across marine taxa.** The severity of acidification impacts varies enormously across marine organisms. **Corals** (aragonite skeletons) are highly vulnerable: calcification rates in major reef-building corals have already declined ~15–35 % in some reef systems compared to pre-industrial rates; under RCP8.5, most reefs will be experiencing net dissolution (carbonate loss exceeding gain) by 2050. **Pteropods** are among the most exposed organisms: Southern Ocean pteropods already show shell dissolution at the ocean surface, and their habitat is projected to become seasonally undersaturated across the entire Southern Ocean within decades. **Oysters and mussels** (calcite shells, less soluble than aragonite) are affected primarily during their highly vulnerable larval stages — even modest pH decreases significantly impair shell formation in larvae. The Pacific Northwest oyster industry nearly collapsed in 2007–2008 when CO₂-rich upwelling water reached hatcheries; recovery required active pH monitoring and CO₂ scrubbing of water before introduction to larval tanks. **Echinoderms** (sea urchins, starfish) and some fish experience physiological disruption from elevated CO₂ levels (hypercapnia), affecting sensory behaviour, reproduction, and immune function. Not all species are negatively affected — some algae and seagrasses benefit from CO₂ fertilisation, and certain sea urchin populations show local adaptation to high-CO₂ environments around natural volcanic CO₂ vents.

**Future trajectories and carbon cycle feedbacks.** Under the high-emission RCP8.5/SSP5-8.5 pathway, ocean surface pH is projected to fall from the current ~8.08 to approximately 7.95–8.0 by 2100 — a total decrease of ~0.3 units from pre-industrial values representing a 150 % increase in H⁺ concentration. Under RCP2.6 (aggressive mitigation), the decline would be limited to ~0.1–0.15 additional units. A critical feedback operates through the **biological pump**: calcifying organisms form part of the biological carbon pump, producing sinking calcium carbonate particles (shells) that transport carbon to depth. As calcification rates decline and dissolution of carbonate particles increases (the CCD — calcite compensation depth — shoaling), the efficiency of this inorganic carbon pump decreases, reducing the fraction of carbon exported from surface waters. This creates a partial negative feedback on atmospheric CO₂ (less efficient biological pump → more CO₂ remains in surface water → less atmospheric CO₂ removed) that partially counters reduced pH, but models suggest the net effect is a modest amplification of warming rather than a stabilising feedback.`,
      cards: [
        {
          name: 'Carbonate Chemistry of CO₂ Absorption',
          icon: Thermometer,
          color: BRAND.accent,
          desc: 'CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻ → H⁺ + CO₃²⁻. Net effect: pH drops + [CO₃²⁻] drops. Pre-industrial pH ~8.2 → current ~8.1: 0.1 unit = 26 % more H⁺. Ocean absorbs 25–30 % of annual CO₂ emissions; absorbed ~40 % of all anthropogenic CO₂ since ~1850 (≈170 GtC). Without ocean uptake, atmospheric CO₂ would be ~440–450 ppm. Buffering capacity declining: CO₂ uptake efficiency will decrease with continued emissions. Aragonite saturation state (Ω) = [Ca²⁺][CO₃²⁻]/Ksp; pre-industrial tropical Ω ~3.5; current ~2.8; Southern Ocean/Arctic approaching Ω = 1 (dissolution threshold).',
          examples: 'HOT Station ALOHA (Hawaii): continuous pH monitoring since 1988 confirms −0.0017 pH units/yr · BATS Station (Bermuda Atlantic): 30+ year record; surface pH declined 0.1 units since pre-industrial · Aragonite saturation horizon shoaling: N Pacific by ~50–100 m (164–328 ft) since 1800s; now intercepting commercial fishing habitats',
        },
        {
          name: 'Biological Impacts on Marine Organisms',
          icon: Globe,
          color: BRAND.gold,
          desc: 'Corals (aragonite skeletons): calcification −15–35 % already; net dissolution projected by 2050 on most reefs under RCP8.5. Pteropods (free-swimming snails): Southern Ocean shells dissolving now; seasonal undersaturation projected across entire Southern Ocean. Oyster larvae: extreme sensitivity during shell formation; Pacific NW hatchery (Whiskey Creek, OR) near-collapse 2007–08; recovery required CO₂ scrubbing. Fish: sensory disruption, altered schooling and predator avoidance under elevated CO₂ (hypercapnia). Not all negative: seagrasses and some macroalgae benefit from CO₂ fertilisation; some echinoderms show local adaptation near natural CO₂ vents.',
          examples: 'Bednaršek et al. (2012): first field evidence of pteropod shell dissolution in Southern Ocean surface waters — severe dissolution pitting in 53 % of live individuals sampled · Whiskey Creek Hatchery, Oregon: 2007–08 crisis traced to pH 7.6–7.8 upwelling water; now operates real-time pH monitoring + CO₂ scrubbing · Papua New Guinea natural CO₂ vents: corals and calcifiers absent near high-CO₂ sites; non-calcifying species thrive — a natural "experiment" for 2100 conditions',
        },
        {
          name: 'Future Trajectories and Global Feedbacks',
          icon: Waves,
          color: BRAND.ruby,
          desc: 'RCP8.5 (high emissions): pH drops to ~7.95–8.0 by 2100; 150 % increase in H⁺ from pre-industrial. RCP2.6 (strong mitigation): limits additional drop to ~0.1–0.15 pH units. CCD (calcite compensation depth) shoaling: reduces efficiency of inorganic biological pump, modest warming amplification feedback. Arctic Ocean: will be undersaturated year-round for aragonite by 2030s under current emissions — first large ocean region to cross threshold. Southern Ocean: seasonal aragonite undersaturation already occurring. Rate context: current acidification rate is 100× faster than any ocean chemistry change in past 300 Ma (sediment core record).',
          examples: 'Arctic undersaturation: NOAA surveys project year-round aragonite undersaturation across >10 % of Arctic Ocean surface by 2030s — affecting cold-water coral ecosystems and pteropod-dependent food webs · PETM (56 Ma) comparison: rapid ocean acidification documented; ~0.3 pH unit drop occurred over ~20,000 years; current rate is 100× faster, giving calcifiers far less time to adapt · Mesocosm experiments (KOSMOS series, Kiel): document cascade of impacts from reduced calcification to altered food web composition under pH 7.8–8.0 conditions',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From CO₂ emissions to marine carbonate chemistry',
      body: `Ocean acidification unfolds through a chain of chemical reactions that begins with CO₂ entering the ocean and ends with reduced carbonate ion availability that stresses calcifying organisms. Trace the pathway from atmospheric CO₂ to the biological consequences across the marine food web.`,
      interaction: {
        type: 'flow-simulator',
        description: 'Pathway from anthropogenic CO₂ emissions through ocean chemistry changes to biological impacts',
        nodes: [
          {
            id: 'co2atm',
            label: 'Atmospheric CO₂',
            description: 'Current atmospheric CO₂ is ~420 ppm — 50 % higher than the pre-industrial level of ~280 ppm. Anthropogenic emissions add ~10 GtC/yr; about 25–30 % is absorbed by the ocean each year, and ~30 % by land vegetation, with ~45 % remaining in the atmosphere.',
            color: BRAND.ruby,
          },
          {
            id: 'dissolution',
            label: 'CO₂ Dissolution',
            description: `CO₂ dissolves in surface seawater according to Henry\'s Law — the higher the atmospheric concentration, the more dissolves. Cold, polar water absorbs more CO₂ than warm tropical water. The ocean has absorbed ~40 % of all anthropogenic CO₂ since industrialisation.`,
            color: BRAND.coral,
          },
          {
            id: 'carbonic',
            label: 'Carbonic Acid Formation',
            description: 'CO₂ + H₂O → H₂CO₃ (carbonic acid). Carbonic acid rapidly dissociates: H₂CO₃ → H⁺ + HCO₃⁻ (bicarbonate). Some bicarbonate further dissociates: HCO₃⁻ → H⁺ + CO₃²⁻ (carbonate ion). Each step releases hydrogen ions, lowering pH.',
            color: BRAND.gold,
          },
          {
            id: 'phdrop',
            label: 'pH Decrease',
            description: 'Surface ocean pH has dropped from ~8.2 (pre-industrial) to ~8.1 today — a 0.1-unit change that represents a 26 % increase in H⁺ concentration. Under RCP8.5, pH will drop to ~7.95–8.0 by 2100, a total 0.3-unit decrease representing a 150 % H⁺ increase.',
            color: BRAND.accent,
          },
          {
            id: 'carbdrop',
            label: 'Carbonate Ion Depletion',
            description: 'Increased H⁺ reacts with carbonate ions: H⁺ + CO₃²⁻ → HCO₃⁻. This consumes CO₃²⁻, reducing the aragonite and calcite saturation state (Ω). When Ω < 1, shells and skeletons dissolve spontaneously. Pre-industrial tropical Ω ~3.5; current ~2.8; polar Ω approaching 1.',
            color: BRAND.amethyst,
          },
          {
            id: 'calcifiers',
            label: 'Calcifying Organisms',
            description: 'Corals, oysters, mussels, pteropods, sea urchins, coralline algae, and foraminifera all depend on sufficient CO₃²⁻ to build CaCO₃ structures. Reduced Ω increases the energy cost of calcification and eventually causes net dissolution. Pteropod shells are already dissolving in the Southern Ocean.',
            color: BRAND.jade,
          },
          {
            id: 'foodweb',
            label: 'Food Web Disruption',
            description: 'Pteropods are a critical food source for salmon, herring, pollock, whales, and seabirds. Coral reef loss removes habitat for ~25 % of all marine species. Oyster and mussel aquaculture ($billions globally) faces production declines. The Pacific Northwest oyster industry nearly collapsed in 2007–2008 from acidified upwelling water.',
            color: BRAND.textDim,
          },
        ],
        edges: [
          { from: 'co2atm',    to: 'dissolution', label: 'air-sea gas exchange (Henry\'s Law)' },
          { from: 'dissolution',to: 'carbonic',   label: 'CO₂ + H₂O → H₂CO₃' },
          { from: 'carbonic',  to: 'phdrop',      label: 'H⁺ released by acid dissociation' },
          { from: 'carbonic',  to: 'carbdrop',    label: 'H⁺ + CO₃²⁻ → HCO₃⁻' },
          { from: 'phdrop',    to: 'carbdrop',    label: 'more H⁺ consumes more CO₃²⁻' },
          { from: 'carbdrop',  to: 'calcifiers',  label: 'lower Ω increases calcification cost' },
          { from: 'phdrop',    to: 'calcifiers',  label: 'physiological disruption (hypercapnia)' },
          { from: 'calcifiers',to: 'foodweb',     label: 'shell loss, reef degradation, larval mortality' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Ocean surface pH has dropped from ~8.2 to ~8.1 since the Industrial Revolution — a change of 0.1 pH units. A common misconception is that this represents a 10 % change in acidity. What does a 0.1-unit pH decrease actually represent in terms of hydrogen ion concentration?',
          a: [
            'A 10 % increase in hydrogen ion concentration, because pH is measured on a linear scale from 0 to 14 and 0.1/1 = 10 %',
            'A 26 % increase in hydrogen ion concentration, because pH is a logarithmic scale where each unit change represents a 10-fold change in H⁺ concentration; a 0.1-unit decrease therefore means a 10⁰·¹ ≈ 1.26-fold increase in H⁺, equivalent to 26 % more acidic',
            'A doubling of hydrogen ion concentration, because the ocean has shifted from slightly alkaline to nearly neutral across the pre-industrial range',
            'A 0.1 % increase in hydrogen ion concentration, because pH changes are expressed as fractions of the full 14-unit pH scale',
          ],
          correct: 1,
          explain: 'The pH scale is defined as pH = −log₁₀[H⁺], meaning each full unit change represents a 10× change in H⁺ concentration (e.g., pH 7 has 10× more H⁺ than pH 8). A change of 0.1 units therefore represents 10⁰·¹ = 1.259... times more H⁺ — approximately a 26 % increase, not a 10 % change as a linear reading would suggest (A incorrectly treats pH as linear). A doubling (C) would correspond to a ~0.3 pH unit change (10⁰·³ ≈ 2.0), not a 0.1 unit change; while significant, the current change has not doubled H⁺. A 0.1 % change (D) would be negligible and would correspond to a pH change of approximately −log₁₀(1.001) ≈ 0.0004 units — far smaller than the observed change. The correct answer is B: the logarithmic definition of pH means that "small" pH changes in decimal terms correspond to substantial changes in actual H⁺ concentration. The projected total 0.3-unit drop by 2100 under high-emission scenarios represents 10⁰·³ ≈ 2.0-fold more H⁺ than pre-industrial — a doubling — or a 150 % increase. This chemical reality is why ocean acidification is considered a serious threat despite what sounds like a modest numerical change; the carbonate chemistry system is highly sensitive to H⁺ concentration, and a 26 % increase already measurably affects calcification rates and saturation states.',
        },
        {
          q: 'The Pacific Northwest oyster industry experienced near-collapse in 2007–2008 at hatcheries like Whiskey Creek in Oregon. What caused this crisis, and how does it illustrate the mechanism by which ocean acidification harms calcifying organisms?',
          a: [
            'The crisis was caused by a toxic algal bloom that coincided with low-pH conditions; the bloom\'s toxins poisoned oyster larvae, while acidification was a secondary stressor; the industry recovered when the bloom dissipated naturally',
            'The crisis was caused by warming ocean temperatures increasing disease susceptibility in adult oysters; the acidification link was proposed later but has not been confirmed; the Pacific Northwest is not significantly affected by ocean acidification because its cold waters buffer pH changes more effectively than tropical waters',
            'The crisis was caused by naturally occurring upwelling of corrosive, CO₂-enriched deep water reaching the hatchery intake pipes; this water had pH as low as 7.6–7.8, far below what oyster larvae can tolerate during shell formation; the larvae failed to calcify properly, with mortality rates near 100 %; the Pacific NW is especially vulnerable because coastal upwelling brings old CO₂-rich water from depth to the surface, and this water is already enriched with anthropogenic CO₂ absorbed decades ago',
            'The crisis was caused by freshwater runoff from heavy precipitation diluting seawater salinity to levels incompatible with oyster larvae; while pH also declined, the primary driver was osmotic stress from salinity change, not carbonate chemistry',
          ],
          correct: 2,
          explain: 'No toxic algal bloom was identified as the cause of the 2007–2008 Whiskey Creek crisis; the crisis was specifically traced through water chemistry monitoring to the carbonate chemistry of the upwelled water (A incorrectly attributes the cause). Cold Pacific Northwest waters are actually more susceptible to acidification in certain respects — cold water holds more dissolved CO₂ than warm water, and NOAA measurements confirmed that the upwelled deep water reaching the hatcheries was significantly more acidic than typical surface water (B incorrectly claims cold waters buffer acidification better and that the connection to acidification is unconfirmed — it is, in fact, well-documented). Salinity dilution from precipitation is not the documented cause; the hatchery operators and NOAA scientists specifically identified carbonate chemistry through direct measurements of pH, pCO₂, and aragonite saturation state (D misidentifies the stressor). The correct answer is C: the Pacific Northwest upwelling system regularly brings deep water (aged 30–50 years, enriched with both naturally elevated CO₂ from respiration and anthropogenic CO₂ from surface absorption decades ago) to the surface along the continental shelf. When this water entered hatchery intake pipes in 2007–2008, it had pH 7.6–7.8 and aragonite saturation states Ω ≈ 0.4–0.8 — already below the dissolution threshold. Oyster larvae are exquisitely sensitive during their first 48 hours of life when they must rapidly calcify a protective shell; at these pH values, calcification failure caused near-100 % larval mortality. Recovery required installing continuous water chemistry sensors and CO₂ scrubbing systems to pre-treat intake water, demonstrating that acidification has crossed from projections to operational reality for aquaculture.',
        },
        {
          q: 'The aragonite saturation horizon (ASH) is the depth below which aragonite dissolves spontaneously. Why is the Southern Ocean and Arctic Ocean particularly at risk of reaching undersaturation, and what organisms face the greatest exposure?',
          a: [
            'Cold polar waters hold more dissolved CO₂ (higher CO₂ solubility at lower temperatures) and have naturally lower alkalinity than tropical waters; both factors reduce the carbonate ion concentration and aragonite saturation state; as anthropogenic CO₂ continues to be absorbed, polar surface waters will become undersaturated — a threshold already crossed seasonally in parts of the Southern Ocean; pteropods, which build aragonite shells and are abundant in polar waters, face direct dissolution of their shells',
            'The Arctic and Southern Oceans are most at risk because they receive the most anthropogenic CO₂ from industrial pollution in the Northern Hemisphere; proximity to industrial centres means higher CO₂ concentrations; the primary organisms at risk are polar bears and penguins, whose primary prey (fish) experience reduced survival under acidification',
            'Polar oceans are most at risk because their surface temperatures cause alkalinity to decrease seasonally; the risk is primarily to benthic organisms living on the seafloor, not to planktonic organisms; surface waters remain above saturation in all ocean regions',
            'The Southern Ocean is at risk specifically because ozone depletion over Antarctica allows excess UV radiation to break down carbonate ions in the water column; this UV-driven carbonate destruction combines with CO₂ acidification to produce undersaturation; pteropods are the most sensitive indicator organisms',
          ],
          correct: 0,
          explain: `Cold polar waters are indeed more CO₂-soluble (lower temperature → higher gas solubility per Henry\'s Law), and naturally have lower alkalinity relative to tropical waters; combined, these factors mean polar waters begin with a lower carbonate ion concentration and aragonite saturation state, and require less additional CO₂ to reach undersaturation (A correctly states the mechanism). Polar CO₂ concentrations are not primarily driven by proximity to industrial sources — atmospheric CO₂ is well-mixed globally within ~1–2 years; Arctic and Antarctic waters are not receiving disproportionate pollution from northern industry through the atmosphere; and polar bears and penguins are not directly calcifying organisms, though their food web impacts are real (B is incorrect on the mechanism and misidentifies the primary organisms at risk). Surface waters in the Southern Ocean have already crossed seasonal undersaturation in some regions and years, not just the benthos — pteropods live in the surface and mesopelagic water column, not on the seafloor; benthic organisms are also at risk but surface and upper mesopelagic organisms have already been directly impacted (C incorrectly limits the risk to benthic organisms and incorrectly states surface waters remain above saturation). UV radiation does not break down carbonate ions; UV drives photochemical reactions in organic matter but does not affect inorganic carbonate equilibria; ozone depletion is not a driver of ocean acidification chemistry (D describes a non-existent mechanism). The correct answer is A: NOAA surveys document that pteropods in the Southern Ocean are already showing severe shell dissolution in individuals sampled from surface waters, and model projections indicate that the entire Southern Ocean surface will become seasonally undersaturated for aragonite within decades under continued high emissions, exposing the pteropod populations that underpin southern hemisphere food webs.`,
        },
        {
          q: 'The ocean has absorbed ~40 % of all anthropogenic CO₂ since industrialisation. This has buffered atmospheric CO₂ concentrations, but the buffering capacity of seawater is not unlimited. What chemical principle explains why ocean CO₂ uptake efficiency decreases as CO₂ concentrations rise?',
          a: [
            'As CO₂ dissolves in seawater, it reacts with carbonate ions (CO₂ + H₂O + CO₃²⁻ → 2HCO₃⁻), consuming the carbonate ion reservoir that acts as a buffer; as [CO₃²⁻] falls, there are fewer ions available to react with incoming CO₂, reducing the ratio of dissolved CO₂ to total dissolved inorganic carbon, which decreases the ocean\'s ability to take up additional CO₂ relative to atmospheric concentration',
            'The ocean becomes physically saturated with CO₂ molecules once the concentration exceeds a certain limit, similar to the way a sponge becomes saturated with water; at saturation, additional CO₂ bubbles back out of the ocean surface as a gas',
            'Rising sea surface temperatures due to climate warming reduce CO₂ solubility (colder water holds more CO₂); the decrease in uptake efficiency is therefore primarily a thermal effect rather than a chemical buffering effect',
            'The buffering capacity decreases because acidification kills the phytoplankton that biologically pump CO₂ to depth; with fewer phytoplankton, the biological pump weakens, leaving more CO₂ in surface waters; this is the primary feedback reducing ocean CO₂ uptake efficiency',
          ],
          correct: 0,
          explain: `The Revelle factor (or buffer factor) quantitatively describes the ocean\'s declining CO₂ uptake efficiency. When CO₂ dissolves, it reacts with CO₃²⁻ via CO₂ + H₂O + CO₃²⁻ → 2HCO₃⁻, which is the dominant carbonate buffer reaction in seawater. As this reaction proceeds, [CO₃²⁻] falls — which both causes acidification and reduces the ocean\'s chemical capacity to absorb more CO₂ per unit of atmospheric partial pressure increase. A higher Revelle factor means a given increase in atmospheric CO₂ causes a smaller increase in dissolved CO₂, leading to less uptake — A correctly describes this buffering mechanism. The physical saturation analogy (B) misrepresents ocean chemistry — CO₂ absorption is governed by chemical equilibrium (Henry\'s Law and carbonate equilibria), not a fixed saturation limit; the ocean does not "fill up" in the way a sponge does; it can in principle absorb all atmospheric CO₂ given enough time, but equilibrium shifts make this less efficient at higher concentrations. Warming-driven solubility reduction (C) is a real and important secondary effect — ocean warming does reduce CO₂ solubility, contributing to reduced uptake — but this is an additional effect that compounds the chemical buffering reduction, not the primary mechanism of decreasing uptake efficiency; the Revelle factor change is the primary explanation. Phytoplankton die-off (D) is a plausible future concern but is not the established primary mechanism currently driving reduced uptake efficiency; present-day changes in ocean CO₂ uptake efficiency are primarily explained by the carbonate chemistry buffering effect described in A. The Revelle factor has increased from ~9.5 pre-industrial to ~12 today, meaning the ocean now absorbs ~20 % less CO₂ per ppm of atmospheric increase than it did before industrialisation.`,
        },
        {
          q: 'Geologic records from deep-sea sediment cores show that ocean acidification has occurred during past carbon cycle perturbations — including the Paleocene-Eocene Thermal Maximum (PETM, ~56 Ma). However, scientists argue that modern ocean acidification poses a greater biological risk than the PETM event, even though the PETM involved comparable or larger CO₂ inputs. What is the key reason for this concern?',
          a: [
            'Modern ocean acidification is more dangerous because the ocean is colder today than during the PETM, and cold water is more susceptible to acidification; the PETM occurred during a warm period when higher ocean temperatures helped buffer against carbonate dissolution',
            'Modern acidification is occurring approximately 100 times faster than the PETM event; the total amount of CO₂ may be comparable, but the rate at which pH is falling gives calcifying organisms and ecosystems far less time to adapt, migrate, or evolve; rapid rate change exceeds biological response times, increasing extinction risk',
            'The PETM event did not cause significant ocean acidification because the CO₂ was released from submarine volcanic vents rather than the atmosphere, and volcanic CO₂ is chemically different from atmospheric CO₂; modern emissions are more acidifying because they enter the ocean from above',
            'Modern acidification is more dangerous because it combines with oxygen depletion in the deep ocean, producing a synergistic effect not present during the PETM; the simultaneous deoxygenation amplifies the acidification impacts on all marine organisms',
          ],
          correct: 1,
          explain: 'While cold water does hold more CO₂ and polar regions are more vulnerable to reaching undersaturation sooner, this is not the key distinguishing factor between modern acidification and the PETM; if anything, the PETM involved substantially warmer oceans which reduced cold-water buffering, making the thermal argument cut the other direction (A is not the principal reason for modern risk being greater). CO₂ from any carbon source — submarine volcanic, atmospheric, or fossil fuel combustion — follows the same carbonate chemistry once dissolved in seawater; the chemical effects are identical regardless of the CO₂ source (C incorrectly claims chemical differences between CO₂ sources). Deoxygenation is a genuine and serious co-stressor in the modern ocean, and it did occur during some past carbon cycle perturbations, but it is not identified as the primary reason modern acidification poses greater biological risk than the PETM (D correctly identifies a real interaction but misidentifies it as the key differentiating factor). The correct answer is B: the pace of change is the critical variable in extinction risk. The PETM involved a massive carbon injection — perhaps 3,000–10,000 GtC — but geological evidence indicates it occurred over a minimum of ~20,000 years (some estimates extend to ~100,000 years). Modern fossil fuel burning is releasing CO₂ at a rate approximately 100 times faster than the PETM. Even if the eventual pH change is similar, species and ecosystems that could adapt, migrate, or evolve over 20,000 years cannot do so in 200–300 years. Deep-sea sediment records from the PETM do show a global dissolution event (the calcite compensation depth shoaled by ~2 km (1.2 mi)) and significant foraminiferal extinctions, but the recovery took ~170,000 years. Modern rates compress that disruption into a timeframe incompatible with evolutionary adaptation for most calcifying lineages.',
        },
      ],
    },
  ],
}

export default oceanAcidification
