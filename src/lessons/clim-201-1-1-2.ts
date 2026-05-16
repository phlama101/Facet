import { Globe, Activity, Thermometer, Layers } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const landCarbonSinks: Lesson = {
  id: 'clim-201-1-1-2',
  title: 'Land Carbon Sinks and Sources',
  track: 'cli',
  trackName: 'Climate',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: 'Terrestrial ecosystems as carbon sinks and sources — photosynthesis, respiration, permafrost, and the vulnerability of land carbon under warming',
  sources: [
    { org: 'IPCC',   title: 'IPCC Sixth Assessment Report',    url: 'https://www.ipcc.ch/' },
    { org: 'GCP',    title: 'Global Carbon Project',           url: 'https://www.globalcarbonproject.org/' },
    { org: 'Nature', title: 'Nature — Terrestrial Carbon',     url: 'https://www.nature.com/' },
    { org: 'NASA',   title: 'NASA Carbon Monitoring',          url: 'https://carbon.nasa.gov/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'How land breathes carbon',
      body: `The terrestrial biosphere is the planet\'s largest active carbon cycling engine. Every year, land plants fix roughly **123 petagrams of carbon** (Pg C/yr) from the atmosphere via gross primary production (GPP) — the total rate of photosynthesis across all land vegetation. Of that, approximately half is immediately returned to the atmosphere by the plants themselves through autotrophic respiration (growth and maintenance costs), yielding **net primary production (NPP) of ~59 Pg C/yr** — the carbon that actually accumulates in plant tissues and enters the food web. The remainder of the cycle is completed by heterotrophic respiration: soil microbes, fungi, and animals break down dead organic matter, releasing CO₂ and a smaller amount of methane (CH₄). The net balance — gross photosynthesis minus all respiration — is called **net ecosystem production (NEP)**, and it is only when NEP is positive (photosynthesis exceeds all respiration) that an ecosystem acts as a carbon sink.

Globally, the terrestrial biosphere currently absorbs a net **~3.1 Pg C/yr** from the atmosphere — a substantial service that offsets roughly 30% of annual fossil-fuel emissions. But this headline figure conceals enormous internal fluxes and a delicate balance that is being disrupted in several ways simultaneously.

**Land-use change** is the most direct human perturbation. Deforestation (primarily in tropical regions — the Amazon, Congo Basin, Southeast Asia) and the conversion of native grasslands and wetlands to agriculture release ~**1.2 Pg C/yr** by burning or decomposing biomass and disturbing organic-rich soils. Importantly, land-use change emissions continue even after active clearing stops: logging residues decompose for decades, and the organic-matter stocks in cleared soils slowly oxidise. REDD+ (Reducing Emissions from Deforestation and Forest Degradation) is the UN framework that attempts to compensate tropical nations for preserving forest carbon stocks.

**CO₂ fertilization** — the enhancement of plant growth by elevated atmospheric CO₂ — is a genuine but limited negative feedback. Higher CO₂ concentrations increase the efficiency of the Calvin cycle (photosynthesis), reducing the amount of water plants must transpire per unit of carbon fixed. Satellite observations of the Normalized Difference Vegetation Index (NDVI) show a global **greening trend of ~12% since 1982**, partly attributable to CO₂ fertilization. However, this benefit is constrained by nutrient limitation: in nitrogen- and phosphorus-poor soils (much of the boreal forest and tropics), plants cannot sustain enhanced growth even with more CO₂ available. Warming also accelerates soil respiration, potentially releasing carbon faster than fertilization can sequester it — a carbon-cycle feedback that most Earth-system models struggle to constrain.

**Permafrost** represents the largest and most dangerous carbon pool in the system. Arctic and sub-Arctic permafrost soils — frozen ground that has accumulated organic matter over thousands of years — contain an estimated **1,700 Pg C**, roughly twice the amount currently in the atmosphere. As the Arctic warms (at ~3–4 times the global average rate), permafrost thaws from the surface downward. Microbial decomposition of previously frozen organic matter releases CO₂ under aerobic conditions and **CH₄** under anaerobic conditions (waterlogged thermokarst lakes) — methane being ~84 times more potent than CO₂ over a 20-year horizon. Unlike other carbon-cycle feedbacks, permafrost thaw is largely irreversible on human timescales.

**Tropical peatlands** — the Congo Basin peatlands (~30 Pg C) and the Southeast Asian peat swamp forests of Borneo and Sumatra (~70 Pg C) — are similarly fragile. When drained for agriculture (primarily palm oil in Southeast Asia), peat oxidises rapidly; the 1997–98 Indonesian peat fires alone released ~2 Pg C in a single year. Fire is a globally significant land carbon source (~2–3 Pg C/yr in large fire years), acting as a rapid pathway from living biomass to atmospheric CO₂.

**Amazon dieback** poses a potential tipping point: deforestation and warming may push the eastern Amazon past a threshold where the forest can no longer maintain its own rainfall recycling, leading to a self-reinforcing transition from rainforest to savanna — a shift that would release hundreds of Pg C and eliminate one of Earth\'s most important biodiversity reservoirs.

Scientists quantify land–atmosphere carbon exchange using **eddy covariance flux towers** — instruments that measure the turbulent vertical flux of CO₂ at high frequency (10 Hz) above ecosystem canopies. The FLUXNET global network now includes over 900 sites spanning boreal forests, tropical rainforests, grasslands, croplands, and wetlands, providing ground-truth measurements of ecosystem-scale NEP that are used to validate satellite products and constrain global carbon budget models. Complementing tower data, satellite-derived NDVI and solar-induced chlorophyll fluorescence (SIF) allow mapping of global GPP trends.

A persistent puzzle in carbon cycle science was the **missing sink**: accounting for all known sources and sinks left an apparent imbalance — more carbon was emitted than could be explained by measured atmospheric accumulation and ocean uptake. The resolution came from improved recognition of carbon uptake by temperate and tropical forests across three continents, with regrowth on abandoned agricultural land (particularly in mid-latitude Northern Hemisphere forests that are regrowing following 20th-century agricultural abandonment) playing a larger role than previously appreciated.

Whether the land sink will continue at its current rate under continued warming is uncertain. Several models show **land carbon sink saturation** — a reduction in the efficiency of land carbon uptake per unit of atmospheric CO₂ — at high warming levels, as respiration and disturbance (fire, drought, pest outbreaks) accelerate faster than GPP. Under some scenarios, land ecosystems shift from net sink to net source before 2100.`,
      keyTerms: [
        {
          term: 'net primary production (NPP)',
          def: 'The rate at which plants accumulate organic carbon after subtracting their own autotrophic respiration from gross photosynthesis (GPP). Globally ~59 Pg C/yr. NPP is the carbon available to consumers, decomposers, and long-term storage. The difference between NPP and heterotrophic respiration (decomposition) determines whether an ecosystem is a net carbon sink or source.',
        },
        {
          term: 'CO₂ fertilization',
          def: 'The enhancement of plant photosynthesis and growth rates caused by rising atmospheric CO₂ concentrations. Higher CO₂ increases carbon fixation efficiency in the Calvin cycle and reduces stomatal conductance (water use per unit carbon fixed). Satellite NDVI data show ~12% global greening since 1982 partly attributable to this effect. Constrained by nutrient (N, P) limitation in many ecosystems and partially offset by warming-accelerated soil respiration.',
        },
        {
          term: 'permafrost carbon',
          def: 'Organic carbon stored in permanently frozen Arctic and sub-Arctic soils, estimated at ~1,700 Pg C — roughly twice the atmospheric carbon pool. When permafrost thaws, microbial decomposition releases CO₂ (aerobic) and CH₄ (anaerobic/thermokarst). A major positive feedback to warming: permafrost thaw is largely irreversible on human timescales, and CH₄ release from waterlogged thermokarst is ~84× more potent than CO₂ over 20 years.',
        },
        {
          term: 'eddy covariance',
          def: 'A micrometeorological technique that measures the net vertical turbulent flux of CO₂, heat, and water vapour between an ecosystem and the atmosphere. Instruments (fast-response CO₂ analysers and 3-D sonic anemometers) sample at 10–20 Hz atop towers above the canopy. Integrating flux measurements over time gives net ecosystem production (NEP). The FLUXNET network comprises 900+ sites globally, providing the primary observational constraint on ecosystem-scale carbon exchange.',
        },
        {
          term: 'land carbon sink',
          def: 'The net uptake of atmospheric CO₂ by terrestrial ecosystems globally. Currently ~3.1 Pg C/yr — roughly 30% of annual fossil-fuel emissions. Driven by CO₂ fertilization, forest regrowth, and ecosystem recovery, partially offset by land-use change, fire, and respiration. Vulnerable to saturation or reversal under high warming as respiration, drought, fire, and permafrost thaw accelerate.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Key mechanisms: productivity, permafrost, deforestation, and fertilization',
      body: `**Terrestrial carbon flux: GPP, NPP, NEP, and the net land sink.** The land carbon cycle is best understood as a set of nested fluxes. Gross primary production (GPP) is the total CO₂ fixed by photosynthesis — ~123 Pg C/yr globally, concentrated in tropical forests (~34 Pg C/yr), temperate forests (~10 Pg C/yr), and tropical savannas (~20 Pg C/yr). Plants consume roughly half of GPP to power their own metabolism (growth, maintenance, reproduction), leaving NPP of ~59 Pg C/yr. Decomposers (bacteria, fungi, soil invertebrates) then break down dead plant material and soil organic matter, releasing CO₂ and CH₄ through heterotrophic respiration (~57 Pg C/yr). The residual — net ecosystem production (NEP = GPP − autotrophic respiration − heterotrophic respiration) — represents actual ecosystem carbon storage. Globally, after accounting for disturbance losses (fire ~2 Pg C/yr, land-use change ~1.2 Pg C/yr), the net land sink is ~3.1 Pg C/yr. This net figure is the small difference between two very large opposing fluxes: even modest changes in either direction can convert a sink to a source. A warmer world tends to accelerate heterotrophic respiration more than GPP (Q₁₀ effect: respiration rate roughly doubles per 10 °C (18°F) warming), which is why carbon-cycle feedbacks under strong warming risk eroding or reversing the land sink.

**Permafrost: the sleeping giant.** Arctic warming is already transforming the permafrost landscape. Thermokarst — the collapse of ground when ice-rich permafrost thaws — creates lakes, ponds, and waterlogged depressions across millions of square kilometres of Siberia, Alaska, and Canada. These wet environments favour methanogenic archaea: decomposing organic matter in anaerobic conditions produces CH₄ rather than CO₂. Even though CH₄ is ultimately oxidised to CO₂ in the atmosphere over years to decades, its initial forcing (~84 GWP over 20 years) amplifies near-term warming. Active-layer deepening (the annual thaw penetrating deeper each year) exposes previously frozen carbon to aerobic decomposition. Abrupt permafrost thaw (distinct from gradual active-layer deepening) can expose deep, ancient carbon (radiocarbon-dated to >10,000 years old) within years. Borehole temperature measurements across the Arctic document clear permafrost warming of 0.3–0.5 °C (0.5–0.9°F) per decade since the 1980s. The IPCC AR6 estimates that permafrost thaw could release 40–160 Pg C by 2100 under high-emission scenarios — a range reflecting deep uncertainty in thaw dynamics, not confidence that the low end is safe.

**Deforestation as a carbon source: immediate and legacy emissions.** When tropical forest is cleared by fire, the carbon in above-ground biomass (typically 150–250 Mg C/ha in mature Amazon forest) is released almost immediately. But the legacy continues: logging residues and roots decompose for 10–20 years; the remaining soil carbon, destabilised by loss of tree cover and altered hydrology, oxidises over decades; and the land may be managed in ways (repeated burning for pasture) that prevent resequestration. The Amazon holds ~150–200 Pg C in vegetation and an additional ~50–100 Pg C in soil. A tipping point analysis (Lovejoy & Nobre, 2018) suggested that 20–25% Amazon deforestation (current level: ~20% in the Brazilian Amazon) could trigger a biome-wide moisture recycling breakdown, converting the forest to a degraded savanna over decades and releasing hundreds of Pg C — an irreversible transition given the timescales of forest regrowth. REDD+ attempts to create financial incentives for avoided deforestation by paying tropical governments and communities for the carbon services of standing forest, verified by satellite monitoring and ground-based inventories.

**CO₂ fertilization and its nutrient ceiling.** Free-Air CO₂ Enrichment (FACE) experiments — in which ecosystems are exposed to elevated CO₂ (550–700 ppm) by continuously fumigating open-air plots — have tested CO₂ fertilization under realistic field conditions. Boreal and temperate forests growing in nitrogen-limited soils showed initial growth stimulation that declined over years as nitrogen became the limiting constraint; the plants grew larger per unit nitrogen, but nitrogen availability set the ceiling. Tropical forests (phosphorus-limited) show similarly attenuated responses. The satellite greening signal is real and significant (~12% since 1982, documented in Zhu et al. 2016 using three independent NDVI datasets), but the geographic pattern shows the strongest greening in China and India (attributed partly to large-scale tree-planting and intensified agriculture) and the Sahel (rainfall recovery post-drought), not only in CO₂-rich environments. Browning trends — vegetation decline under warming-induced drought stress — are visible in parts of the Amazon, western North America, and the Mediterranean, partially offsetting the greening signal. The net effect is that CO₂ fertilization is a real but diminishing return: its benefit relative to cumulative emissions decreases as CO₂ rises and nutrient constraints tighten.`,
      cards: [
        {
          name: 'Terrestrial GPP and NPP',
          icon: Activity,
          color: BRAND.jade,
          desc: 'Gross primary production (GPP ~123 Pg C/yr) is total photosynthesis. Autotrophic respiration returns ~half to the atmosphere, leaving NPP ~59 Pg C/yr. Net ecosystem production (NEP = GPP − all respiration) determines sink/source status. Global net land sink: ~3.1 Pg C/yr after fire and land-use change losses.',
          examples: 'Amazon basin GPP: ~8 Pg C/yr in ~6 million km² (2.32 million sq mi) · Boreal forests: large biomass, low NPP per area due to cold temperatures · Croplands: high NPP but most harvested carbon rapidly respired; net near-zero sink · Temperate forest regrowth (eastern USA, Europe): ~0.5 Pg C/yr net uptake',
        },
        {
          name: 'Permafrost and Soil Carbon Vulnerability',
          icon: Thermometer,
          color: BRAND.accentHot,
          desc: 'Arctic permafrost stores ~1,700 Pg C — twice the atmospheric carbon pool. Warming causes active-layer deepening, thermokarst, and abrupt thaw, releasing CO₂ (aerobic) and CH₄ (anaerobic). Permafrost borehole temps rising 0.3–0.5 °C (0.5–0.9°F)/decade since 1980s. Projected release: 40–160 Pg C by 2100 under high emissions.',
          examples: 'Siberian yedoma: ice-rich permafrost up to 30 m (98 ft) deep; rapid collapse on thaw · Thermokarst lakes, Alaska: CH₄ ebullition (bubbling) measured at >10 g CH₄/m²/yr in some hotspot lakes · Radiocarbon dating: thawed Siberian permafrost releasing carbon fixed >25,000 years ago',
        },
        {
          name: 'Deforestation as a Carbon Source',
          icon: Globe,
          color: BRAND.coral,
          desc: 'Land-use change releases ~1.2 Pg C/yr. Tropical deforestation emits 150–250 Mg C/ha immediately; legacy decomposition continues 10–20 yr. Amazon tipping point risk at ~20–25% deforestation (current ~20% in Brazilian Amazon). REDD+ uses satellite monitoring and financial incentives to compensate for avoided deforestation.',
          examples: '1997–98 Indonesian peat fires: ~2 Pg C released in a single year from drained peatlands · Brazilian Amazon: deforestation peaked 2004 (~27,000 km² (0.00 sq mi)/yr), reduced to ~5,000–12,000 km² (0.00 sq mi)/yr by 2012; uptick since 2019 · Congo Basin peatlands: ~30 Pg C; largely intact but under pressure from agricultural expansion',
        },
        {
          name: 'CO₂ Fertilization and Its Limits',
          icon: Layers,
          color: BRAND.accent,
          desc: 'Elevated CO₂ enhances Calvin-cycle efficiency and reduces water use per unit carbon fixed. NDVI shows ~12% global greening since 1982 partly attributable to CO₂ fertilization. FACE experiments show response declines over years as N and P become limiting. Warming-driven browning (drought, beetle outbreaks) partially offsets greening.',
          examples: 'FACE experiment, Duke Forest (NC): initial 20% growth increase at 550 ppm CO₂; declined to ~5% after nitrogen became limiting · NDVI satellite trend (Zhu et al. 2016): >25–50% of global vegetated area greening; strongest signal in China (afforestation + intensive farming) and Sahel · Western Amazon browning: drought stress from rising VPD offsetting CO₂ fertilization',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'The terrestrial carbon cascade',
      body: 'Carbon flows through the land system in a cycle of fixation, allocation, decomposition, and disturbance. Human activities perturb multiple points in this cascade simultaneously — accelerating release pathways while threatening the productivity of the uptake pathway.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing the movement of carbon through the terrestrial biosphere from atmospheric CO₂ through photosynthesis, plant biomass, soil organic matter, and back to the atmosphere via respiration, fire, and permafrost thaw',
        nodes: [
          {
            id: 'atm-co2',
            label: 'Atmospheric CO₂',
            description: 'The atmospheric CO₂ pool (~870 Pg C today, rising ~5 Pg C/yr net). Terrestrial ecosystems interact with this pool via photosynthetic uptake (~123 Pg C/yr gross) and respiratory/disturbance release (~120 Pg C/yr gross), leaving a net land sink of ~3.1 Pg C/yr.',
            color: BRAND.gold,
          },
          {
            id: 'photosynthesis',
            label: 'Photosynthesis (GPP)',
            description: 'Gross primary production: ~123 Pg C/yr globally. Plants fix atmospheric CO₂ using solar energy and water, storing carbon in sugars that fuel growth, reproduction, and tissue construction. Concentrated in tropical forests (~34 Pg C/yr), savannas, and boreal forests. Constrained by light, temperature, water, and nutrient availability.',
            color: BRAND.jade,
          },
          {
            id: 'autotrophic-resp',
            label: 'Autotrophic respiration',
            description: 'Plants return ~64 Pg C/yr to the atmosphere by oxidising sugars to power their own metabolism (root growth, tissue maintenance, reproduction). Roughly half of GPP is consumed this way. Autotrophic respiration accelerates with temperature, reducing NPP under warming in many ecosystems.',
            color: BRAND.accent,
          },
          {
            id: 'npp',
            label: 'Net primary production (NPP)',
            description: 'The carbon that accumulates in plant tissues after autotrophic respiration: ~59 Pg C/yr globally. Allocated to leaves, wood, roots, seeds. Enters the food web (herbivory) and eventually the dead organic matter pool. The base of the terrestrial carbon sink: only NPP that is not eaten or decomposed remains as ecosystem carbon storage.',
            color: BRAND.accentHot,
          },
          {
            id: 'soil-om',
            label: 'Soil organic matter',
            description: 'The largest active land carbon pool: ~1,500 Pg C in the top 1 m (3 ft) of soil globally (and ~2,400 Pg C to 2 m (7 ft) depth). Composed of fresh litter, partially decomposed humus, and stabilised mineral-associated organic matter. Turnover times range from days (labile fractions) to millennia (mineral-stabilised fractions). The permafrost pool (~1,700 Pg C) is an additional, largely frozen reservoir.',
            color: BRAND.amethyst,
          },
          {
            id: 'decomp-fire-thaw',
            label: 'Decomposition / fire / permafrost thaw',
            description: 'Three pathways return soil and biomass carbon to the atmosphere. (1) Heterotrophic respiration by microbes and fungi: ~57 Pg C/yr; accelerates with warming (Q₁₀ effect). (2) Fire: ~2–3 Pg C/yr globally; converts plant biomass to CO₂, black carbon, and trace gases within hours. (3) Permafrost thaw: releases previously frozen organic matter; produces CO₂ (aerobic) and CH₄ (anaerobic thermokarst); positive feedback to warming.',
            color: BRAND.coral,
          },
          {
            id: 'co2-back',
            label: 'CO₂ (and CH₄) returned to atmosphere',
            description: 'Carbon released from decomposition, fire, and permafrost thaw returns to the atmospheric pool, completing the terrestrial cycle. Under current conditions, ~3.1 Pg C/yr less is returned than is taken up — the net land sink. Under high warming scenarios, accelerated respiration, fire, and permafrost thaw risk closing or reversing this gap, converting land from sink to source.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'atm-co2',         to: 'photosynthesis',    label: 'CO₂ fixed by chloroplasts via the Calvin cycle' },
          { from: 'photosynthesis',   to: 'autotrophic-resp',  label: '~52% of GPP consumed by plant metabolism' },
          { from: 'photosynthesis',   to: 'npp',               label: '~48% of GPP stored as plant biomass (NPP ~59 Pg C/yr)' },
          { from: 'npp',              to: 'soil-om',           label: 'Dead plant material (litter, roots) enters soil organic matter pool' },
          { from: 'soil-om',          to: 'decomp-fire-thaw',  label: 'Microbial decomposition, fire disturbance, and permafrost thaw mobilise stored carbon' },
          { from: 'decomp-fire-thaw', to: 'co2-back',          label: 'CO₂ and CH₄ released to atmosphere via respiration, combustion, and methanogenesis' },
          { from: 'autotrophic-resp', to: 'co2-back',          label: 'Plant respiration returns CO₂ directly to atmosphere (~64 Pg C/yr)' },
          { from: 'co2-back',         to: 'atm-co2',           label: 'Released CO₂/CH₄ re-enters the atmospheric pool' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What is the difference between GPP, NPP, and NEP, and which of these quantities best represents whether a terrestrial ecosystem is a net carbon sink or source?',
          a: [
            'GPP, NPP, and NEP are identical in meaning — all three measure the total amount of carbon that plants fix via photosynthesis each year; they differ only in the units used (GPP in mol/m², NPP in g/m², NEP in Pg/yr); NEP is just the global aggregate of GPP',
            'GPP is total photosynthesis (~123 Pg C/yr globally); NPP is GPP minus autotrophic (plant) respiration (~59 Pg C/yr), representing carbon that enters the food web and soil; NEP is NPP minus heterotrophic respiration (decomposition), representing the ecosystem\'s net carbon balance — NEP best indicates sink or source status because it accounts for all carbon in and out',
            'GPP is total photosynthesis; NPP is GPP minus all respiration (both plant and microbial), representing net ecosystem carbon storage; NEP is a separate metric that only counts carbon in woody biomass and excludes soils; NEP is therefore less useful than NPP for assessing sink/source status because it ignores soil carbon fluxes',
            'GPP measures daytime photosynthesis only; NPP adds nighttime dark fixation by soil microbes; NEP subtracts the carbon lost to animal feeding and harvest; the three metrics are additive layers and NEP is always smaller than NPP, which is always smaller than GPP',
          ],
          correct: 1,
          explain: 'The three terms form a nested hierarchy of increasing biological and ecological accounting. GPP (~123 Pg C/yr) is the total rate of carbon fixation by photosynthesis — the gross intake. NPP (~59 Pg C/yr) subtracts only autotrophic respiration (the metabolic costs borne by the plants themselves), leaving the carbon that is available to heterotrophs and for accumulation in plant tissues. NEP completes the accounting by also subtracting heterotrophic respiration — the decomposition of dead organic matter by microbes, fungi, and soil organisms (~57 Pg C/yr). When NEP is positive, the ecosystem is storing more carbon than it is releasing; when negative, it is a net source. In practice, NEP is further modified by lateral carbon exports and disturbance losses (fire, logging, erosion) to give the net biome production (NBP) — the true sink/source status at landscape or regional scale. The global land sink of ~3.1 Pg C/yr represents NBP after accounting for deforestation and fire losses against the backdrop of GPP/NPP/heterotrophic respiration fluxes that are each 10–40 times larger.',
        },
        {
          q: 'How much carbon does global permafrost store, and why is its fate considered one of the most critical uncertainties in projecting 21st-century climate?',
          a: [
            'Permafrost stores approximately 170 Pg C — about 20% of the atmospheric carbon pool; its fate is uncertain but not critical because permafrost thaw releases carbon very slowly (millennial timescales) and the ocean can absorb most of the released CO₂ before it accumulates in the atmosphere',
            'Permafrost stores approximately 1,700 Pg C — roughly twice the current atmospheric carbon pool; its fate is critical because thawing releases CO₂ and the potent greenhouse gas CH₄, this feedback is largely irreversible on human timescales, and current models disagree substantially on thaw rates and carbon release magnitude, creating a major source of climate projection uncertainty',
            'Permafrost stores approximately 17,000 Pg C — about 20 times the current atmospheric carbon pool; if all of it thawed, it would release enough CO₂ to raise atmospheric concentration to over 10,000 ppm; however, complete thaw is impossible within a century so it is not considered a near-term risk',
            'Permafrost stores approximately 1,700 Pg C but this carbon is chemically recalcitrant (resistant to decomposition) because it has been frozen for millennia; thawing does not release it to the atmosphere because the organic molecules are too old and structurally degraded for microbes to decompose, so permafrost thaw is primarily a physical hazard (infrastructure damage) rather than a climate feedback',
          ],
          correct: 1,
          explain: `Arctic and sub-Arctic permafrost soils contain approximately 1,700 Pg C — a figure that represents organic matter accumulated over tens of thousands of years in frozen conditions that prevented microbial decomposition. This is roughly twice the amount of carbon currently in the atmosphere (~870 Pg C). The fate of permafrost carbon is a critical climate uncertainty for three reinforcing reasons. First, scale: even a partial release — say, 10% by 2100 (170 Pg C) — would represent a positive feedback equivalent to several decades of current fossil-fuel emissions, substantially accelerating warming beyond what is captured by models that do not include permafrost feedbacks. Second, mechanism diversity: thaw produces both CO₂ (aerobic decomposition in dry, drained soils) and CH₄ (anaerobic decomposition in waterlogged thermokarst), and CH₄\'s near-term warming potency (~84× CO₂ over 20 years) amplifies the near-term impact. Third, irreversibility: once permafrost thaws and the organic carbon is oxidised, it cannot be refrozen on human timescales even if temperatures stabilise — it is a one-way release. The IPCC AR6 acknowledges that most current generation Earth-system models underestimate permafrost carbon feedbacks, meaning that official projections likely understate warming under high-emission scenarios.`,
        },
        {
          q: 'What is CO₂ fertilization, and why is it not a guaranteed or indefinitely expanding land carbon sink?',
          a: [
            'CO₂ fertilization is the process by which plants grow faster at higher CO₂ concentrations; it is a guaranteed and expanding land carbon sink because higher CO₂ always increases photosynthesis rates, and as long as CO₂ continues to rise, plant growth — and therefore carbon storage — will continue to increase indefinitely with no limiting factors',
            'CO₂ fertilization is the enhancement of plant photosynthesis and growth by elevated CO₂; it is not a guaranteed sink because it is constrained by nutrient limitation (nitrogen and phosphorus availability sets a ceiling on growth response), because warming accelerates soil respiration (which may release carbon faster than fertilization sequesters it), and because drought and heat stress in some regions are causing browning trends that offset greening elsewhere',
            'CO₂ fertilization is a laboratory phenomenon that does not occur in field conditions; FACE experiments have conclusively shown that ecosystems under elevated CO₂ show no measurable growth increase when all limiting factors are present; satellite NDVI trends attributed to CO₂ fertilization are actually caused by changes in precipitation patterns, not CO₂ itself',
            'CO₂ fertilization is a real and large effect, but it is not a carbon sink because all the extra carbon fixed by fertilized plants is immediately returned to the atmosphere by the same plants through enhanced respiration; the net carbon balance of fertilized plants is always zero because plant respiration scales proportionally with photosynthesis',
          ],
          correct: 1,
          explain: 'CO₂ fertilization is a genuine biophysical phenomenon with real-world evidence: elevated CO₂ increases the rate of carboxylation in the Calvin cycle (the enzyme RuBisCO fixes CO₂ more efficiently relative to its competing oxygenation reaction at higher CO₂), and it reduces stomatal conductance, improving water-use efficiency. The satellite record documents a global greening trend (~12% increase in NDVI-measured leaf area since 1982), with modelling studies attributing 70% of this trend primarily to CO₂ fertilization. However, several mechanisms limit or erode this benefit: (1) Nutrient co-limitation — FACE experiments in nitrogen-poor boreal and temperate forests show initial growth enhancement that attenuates over 5–10 years as nitrogen becomes limiting; phosphorus limits tropical response. (2) Thermal respiration acceleration — the Q₁₀ effect means that warming stimulates soil microbial respiration (releasing stored soil carbon) faster than it stimulates GPP in many ecosystems, reducing or reversing net carbon storage gains. (3) Drought and heat stress — parts of the Amazon, Mediterranean, and western North America are experiencing browning due to vapour pressure deficit increases and drought, partially offsetting CO₂-driven greening. (4) Diminishing returns — as CO₂ rises above current levels, the relative benefit per additional ppm declines (RuBisCO becomes increasingly CO₂-saturated), while nutrient constraints become more binding.',
        },
        {
          q: 'Why does land-use change continue to release CO₂ even years or decades after active deforestation in an area has stopped?',
          a: [
            'Land-use change does not release CO₂ after active clearing stops; all CO₂ from deforestation is released at the moment of burning; there are no legacy emissions because dead wood and roots do not decompose significantly in tropical climates where high temperatures and humidity keep organic matter in equilibrium',
            'After active deforestation stops, CO₂ continues to be released through decomposition of logging residues and coarse woody debris (10–20 year timescale), gradual oxidation of soil organic matter destabilised by loss of forest cover and altered hydrology, ongoing burning of cleared land for pasture maintenance, and continued peat oxidation in drained wetlands — legacy emissions can persist for decades',
            'Legacy emissions after deforestation are caused exclusively by the death of tree roots; intact roots continue to respire for years after the above-ground forest is removed; once all roots have decomposed (typically 2–3 years), CO₂ emissions from the site return to zero regardless of land use',
            'After deforestation, CO₂ release continues only in regions where soil erosion is severe; when topsoil erodes, it exposes deeper mineral soil that reacts with atmospheric oxygen to produce CO₂; in non-eroding sites, emissions cease within months of clearing because microbes are deactivated by increased sunlight and temperatures',
          ],
          correct: 1,
          explain: 'The legacy carbon emissions from deforestation operate through multiple distinct pathways with different timescales, making them a persistent rather than instantaneous flux. (1) Coarse woody debris: when forest is cleared by logging rather than burning, the logging residues (branches, stumps, damaged trunks) are left in situ and decompose over 10–30 years, releasing stored biomass carbon gradually. Even in burned areas, incompletely combusted material continues decomposing post-fire. (2) Root decomposition: fine and coarse roots represent 20–30% of forest biomass; they decompose over years to decades after tree death, releasing carbon continuously. (3) Soil organic matter destabilisation: intact forest cover maintains a stable microclimate (shade, moisture retention, continuous litter input) that regulates soil carbon stocks; clearance disrupts this microclimate, increases soil temperature and moisture fluctuation, and reduces litter input, causing previously stabilised soil organic matter to become more vulnerable to microbial oxidation over years to decades. (4) Peat oxidation: when tropical peatlands are drained for agriculture, the water table drops and previously anaerobic peat is exposed to oxygen; peat oxidation rates of 20–50 Mg CO₂-eq/ha/yr can persist indefinitely as long as the land remains drained — the 1997–98 Indonesian fires are an extreme case, but ongoing peat drainage in Borneo and Sumatra continues to emit 200–600 Mt CO₂/yr even in non-fire years. (5) Repeated burning: pasture and agricultural land in deforested tropical regions is often burned annually to clear dry vegetation and add nutrients, continuously releasing the small amount of biomass carbon re-accumulated since the last burn.',
        },
        {
          q: 'What do eddy covariance towers measure, and why are they important for understanding the global carbon budget?',
          a: [
            'Eddy covariance towers measure tree height and canopy density using LiDAR pulses emitted from the tower top; by tracking changes in canopy structure over time, scientists can infer carbon accumulation rates in above-ground biomass; they are important because above-ground biomass is the largest carbon pool in most terrestrial ecosystems',
            'Eddy covariance towers measure the turbulent vertical flux of CO₂ (and other trace gases) between the ecosystem and the atmosphere at high frequency, yielding direct observations of net ecosystem production (NEP) — the actual sink or source strength of an ecosystem; the FLUXNET network of 900+ towers provides ground-truth measurements used to calibrate satellite products and constrain global carbon budget models',
            'Eddy covariance towers measure soil CO₂ efflux using chambers that capture gas emitted from the soil surface; they isolate heterotrophic respiration from autotrophic respiration by deploying separate chambers on bare soil versus vegetated plots; they are important because soil respiration is the largest single terrestrial carbon flux, exceeding GPP in magnitude',
            'Eddy covariance towers are purely atmospheric measurement platforms that record CO₂ concentration at multiple heights above the ground; by measuring the vertical CO₂ concentration gradient, scientists calculate the diffusion flux of CO₂ into or out of the canopy using Fick\'s law; the FLUXNET network provides atmospheric CO₂ profiles that are assimilated into global atmospheric inversion models',
          ],
          correct: 1,
          explain: `Eddy covariance (or eddy correlation) is a micrometeorological technique that exploits the fact that carbon exchange between an ecosystem and the atmosphere occurs through turbulent eddies — rotating air masses that transport CO₂-enriched air upward from the ecosystem or carry CO₂-depleted air downward toward it. The method simultaneously measures vertical wind velocity (w, using a 3-dimensional sonic anemometer sampling at 10–20 Hz) and CO₂ mole fraction (using a fast-response infrared gas analyser). The covariance of these two time series — averaged over 30–60 minutes — gives the net vertical CO₂ flux. When the ecosystem is photosynthesising faster than it is respiring (daytime in a healthy forest), the flux is negative (downward, toward the ecosystem = sink). When respiration dominates (night, winter, drought), the flux is positive (upward = source). Integrating half-hourly fluxes over a year gives annual NEP — the ecosystem\'s net sink or source strength in Mg C/ha/yr. The FLUXNET global network (900+ sites spanning tropical forests, boreal forests, temperate forests, grasslands, croplands, wetlands, and tundra) provides the only direct, continuous observations of ecosystem-scale carbon exchange. This is critical because: (1) it validates and corrects satellite-based estimates of GPP and NDVI; (2) it provides the training data for machine-learning upscaling of local flux measurements to global carbon budgets; (3) it detects interannual variability in sink strength associated with climate anomalies (droughts, heat waves, wet years) that explain a large fraction of year-to-year variation in atmospheric CO₂ growth rate; and (4) it constrains Earth-system model simulations of land carbon feedbacks.`,
        },
      ],
    },
  ],
}

export default landCarbonSinks
