import { Waves, Globe, Layers, Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const deepSeaCarbonStorage: Lesson = {
  id: 'ocea-201-1-2-3',
  title: 'Deep-Sea Carbon Storage',
  track: 'oce',
  trackName: 'Oceanography',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: 'The deep ocean as a long-term carbon reservoir — remineralization, sediment burial, carbonate compensation depth, and geological timescales',
  sources: [
    { org: 'MBARI',  title: 'MBARI Deep-Sea Research',       url: 'https://www.mbari.org/' },
    { org: 'NOAA',   title: 'NOAA Deep Ocean',               url: 'https://www.noaa.gov/' },
    { org: 'Nature', title: 'Nature — Carbon Sequestration', url: 'https://www.nature.com/' },
    { org: 'AGU',    title: 'AGU — Geophysical Research',    url: 'https://www.agu.org/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The abyss as archive',
      body: `The ocean is not merely a surface film of blue water. It is a vast three-dimensional reservoir that holds approximately 38,000 petagrams of carbon (Pg C) as dissolved inorganic carbon (DIC) — roughly 44 times the ~860 Pg C currently residing in the atmosphere. This contrast defines one of the most important but least visible facts in Earth\'s carbon cycle: the deep ocean is the largest active carbon reservoir on the planet\'s surface, and the exchange of carbon between ocean and atmosphere over centuries to millennia is a primary control on Earth\'s climate.

Carbon enters the ocean through three pathways and is stored in three principal forms. **Dissolved inorganic carbon** (DIC) — the sum of dissolved CO₂, carbonic acid (H₂CO₃), bicarbonate (HCO₃⁻), and carbonate ions (CO₃²⁻) — makes up roughly 98% of oceanic carbon and is distributed throughout the water column. **Dissolved organic carbon** (DOC) accounts for most of the remaining dissolved fraction, a large fraction of which is ancient, refractory material that persists in deep water for thousands of years. **Particulate organic carbon** (POC), produced by phytoplankton at the surface and exported downward as sinking particles and fecal pellets, represents the biological pump\'s direct export flux; most POC is remineralized by bacteria during its descent, but a small fraction — perhaps 0.1–1% of surface production — reaches the sediment and is buried, representing a permanent carbon sink on geological timescales.

A key boundary in the deep ocean is the **carbonate compensation depth** (CCD) — the depth below which the rate of CaCO₃ dissolution exceeds the rate of accumulation, so that calcareous shells and tests dissolve rather than accumulating in sediments. The CCD lies at approximately 4,000–5,000 m in the Atlantic and somewhat shallower in the Pacific (reflecting differences in deep-water chemistry). Above the CCD, sediments are rich in calcareous ooze (foraminifera, coccoliths); below it, sediments are predominantly clay or siliceous ooze. The **lysocline** is the depth at which dissolution first becomes noticeable, shallower than the CCD. Together, these boundaries control where carbonate carbon is preserved versus recycled.

The **solubility pump** operates because CO₂ is more soluble in cold water than warm water. In polar regions — particularly the North Atlantic (where North Atlantic Deep Water, NADW, forms) and the Southern Ocean (where Antarctic Bottom Water, AABW, forms) — surface waters cool, dissolve large quantities of CO₂, and sink to the deep ocean, carrying that DIC away from contact with the atmosphere. Deep water masses then circulate slowly through the ocean interior, with residence times of approximately 200 years (NADW) to 1,000 years (AABW). This means carbon dissolved at the surface may spend a millennium in the deep ocean before returning to the surface and potentially re-equilibrating with the atmosphere.

Continental margin sediments — particularly in deltaic systems, fjords, and oxygen-minimum zones where organic matter is preserved from degradation — are the primary sites of marine organic carbon burial. Though the deep abyssal plain covers more area, it receives too little organic matter to be a major burial site per unit area; the margins, which are fertile and close to terrestrial organic inputs, dominate the global burial flux.

**Blue carbon** — carbon stored in the living biomass and soils of coastal marine ecosystems including mangroves, seagrasses, and salt marshes — represents a disproportionately important sink given the small area these habitats occupy. Mangrove sediments in particular accumulate organic carbon at rates 10–50 times higher per unit area than terrestrial forests, because anaerobic conditions slow decomposition and allow centuries of organic material to build up. The destruction of these ecosystems releases stored carbon rapidly.

On geological timescales, the deep ocean carbon cycle is governed by the **Urey reaction**: CO₂ + CaSiO₃ ⇌ CaCO₃ + SiO₂. Silicate weathering on land consumes atmospheric CO₂ and delivers bicarbonate to the ocean, where it is incorporated into calcareous shells that settle to the seafloor. Over millions of years, this drawdown is balanced by volcanic degassing. The net result is a geological carbon thermostat that has kept Earth\'s climate habitable for billions of years, operating on timescales of 100,000–1,000,000 years.

On glacial-interglacial timescales (~20,000–100,000 years), the ocean acts as a CO₂ reservoir that amplifies or dampens climate cycles. During ice ages, atmospheric CO₂ drops by ~80–100 ppm; much of this carbon is transferred to the deep ocean, most likely through changes in ocean circulation, biological productivity, and carbonate chemistry. The exact mechanisms remain an active research area. **Benthic foraminifera** — single-celled organisms that live on the seafloor — incorporate the oxygen and carbon isotope signatures of the deep water in their calcite shells; their fossil record in deep-sea sediment cores is the primary proxy used to reconstruct past deep-ocean temperatures, ice volumes, and carbon cycling on these timescales.`,
      keyTerms: [
        {
          term: 'Carbonate compensation depth (CCD)',
          def: 'The depth in the ocean below which the rate of dissolution of calcium carbonate (CaCO₃) equals or exceeds the rate of supply from above, so that no net carbonate accumulates in the sediment. Typically ~4,000–5,000 m in the Atlantic and shallower in the Pacific. Above the CCD, calcareous oozes form; below it, sediments are clay or siliceous. The depth of the CCD is controlled by deep-water temperature, pressure, and carbonate ion concentration.',
        },
        {
          term: 'Solubility pump',
          def: `The physical-chemical mechanism by which CO₂ is transferred from the surface ocean to the deep ocean via the sinking of cold, CO₂-rich dense water in polar regions (NADW, AABW). CO₂ is more soluble in cold water, so polar surface waters absorb more CO₂ before sinking. The solubility pump is responsible for a large fraction of the ocean\'s total DIC inventory and operates on timescales of decades to centuries.`,
        },
        {
          term: 'Deep-water formation',
          def: 'The process by which cold, dense water masses sink from the ocean surface to great depths in polar regions, driving thermohaline circulation. Key sites: Labrador Sea and Nordic Seas (producing NADW) and the Weddell Sea (producing AABW). Deep-water formation carries dissolved gases, including CO₂, to the deep ocean and sets the thermohaline circulation that governs deep-ocean ventilation and heat transport.',
        },
        {
          term: 'Benthic carbon burial',
          def: 'The long-term sequestration of organic carbon in seafloor sediments, primarily on continental margins where organic matter delivery is high and oxygen-limited conditions slow decomposition. Represents the fraction of biological pump export that escapes remineralization and is preserved over geological timescales. The global marine organic carbon burial rate is ~0.2 Pg C yr⁻¹, a small but climatically significant flux on million-year timescales.',
        },
        {
          term: 'Blue carbon',
          def: 'Carbon captured and stored by coastal and marine ecosystems — principally mangroves, seagrasses, and salt marshes. These ecosystems sequester carbon in both living biomass and, most importantly, in soil/sediment organic matter that can persist for centuries to millennia under anaerobic conditions. Per unit area, blue carbon ecosystems are among the most efficient carbon sinks on Earth; their destruction releases stored carbon rapidly.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Four pillars of deep-ocean carbon storage',
      body: `The deep ocean sequesters carbon through physical, chemical, and biological mechanisms that operate across timescales ranging from years to millions of years. These four pillars — the deep reservoir and its pathways, the carbonate compensation depth, the solubility pump, and blue carbon coastal sinks — together define how the ocean moderates atmospheric CO₂.`,
      cards: [
        {
          name: 'The Deep Ocean as a Carbon Reservoir',
          icon: Waves,
          color: BRAND.accent,
          desc: 'The deep ocean holds ~38,000 Pg C as DIC — 44× the atmospheric inventory. Three pathways: dissolved inorganic carbon (DIC, ~98% of total), dissolved organic carbon (DOC, refractory fraction persists thousands of years), and particulate organic carbon (POC) export via the biological pump. Most POC is remineralized during descent; only ~0.1–1% reaches the sediment for burial.',
          examples: 'DIC inventory: ~38,000 Pg C (ocean) vs ~860 Pg C (atmosphere) vs ~600 Pg C (land biosphere) · Deep-water residence time: ~200 yr (NADW) to ~1,000 yr (AABW) · Marine organic carbon burial: ~0.2 Pg C yr⁻¹',
        },
        {
          name: 'The Carbonate Compensation Depth',
          icon: Layers,
          color: BRAND.jade,
          desc: 'The CCD is the horizon below which CaCO₃ dissolves faster than it accumulates (~4,000–5,000 m in the Atlantic, shallower in the Pacific). Above: calcareous oozes (foraminifera, coccoliths). Below: red clay or siliceous ooze. The lysocline marks the onset of significant dissolution, above the CCD. Ocean acidification is shoaling the CCD, threatening carbonate sediment records and shell-forming organisms.',
          examples: 'Atlantic CCD: ~4,500 m · Pacific CCD: ~3,500 m (more corrosive deep water) · CCD during Last Glacial Maximum: ~500 m deeper in some basins, reflecting higher deep-ocean carbonate ion concentrations · Benthic foraminifera dissolve below the lysocline, biasing the fossil record',
        },
        {
          name: 'The Solubility Pump',
          icon: Globe,
          color: BRAND.coral,
          desc: 'CO₂ solubility increases with decreasing temperature. Cold polar surface waters (Labrador Sea, Weddell Sea) absorb atmospheric CO₂ and sink as NADW and AABW, transporting DIC to the abyss. The pump is counteracted by upwelling of CO₂-rich deep water in the tropics and Southern Ocean. Changes in deep-water formation rate directly affect atmospheric CO₂ on glacial-interglacial timescales.',
          examples: 'NADW formation: ~17 Sv; carries ~2,200 µmol/kg DIC · AABW: coldest, densest water; CO₂ content ~2,300 µmol/kg · Glacial CO₂ drawdown: ~80–100 ppm stored in deep ocean, partly via enhanced solubility pump and reduced NADW outgassing',
        },
        {
          name: 'Blue Carbon and Coastal Sequestration',
          icon: Activity,
          color: BRAND.gold,
          desc: 'Mangroves, seagrasses, and salt marshes store carbon in waterlogged, anaerobic soils at rates 10–50× higher per area than terrestrial forests. The anaerobic conditions prevent decomposition, allowing organic matter to accumulate over centuries. Globally, blue carbon ecosystems cover ~50 million ha but sequester ~0.2 Pg C yr⁻¹ — comparable to marine organic carbon burial. Their rapid destruction is a major source of CO₂.',
          examples: 'Mangrove soil C density: up to 1,023 Mg C ha⁻¹ (vs ~150–200 Mg C ha⁻¹ in tropical forests) · Seagrass meadows: cover ~0.1% of ocean but may account for ~15% of marine carbon burial · Global blue carbon loss: ~0.15–1.02 Pg C yr⁻¹ from coastal habitat destruction',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'The Deep-Ocean Carbon Cycle: From Surface Fixation to Sediment Burial',
      body: 'This flow diagram traces the pathways by which carbon moves from the ocean surface to deep storage — through biological export, remineralization, carbonate dissolution at the CCD, and ultimate burial in sediments — and returns to the deep DIC pool.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Follow carbon from surface fixation and dissolution through the water column to sediment burial, remineralization, and the deep-ocean DIC reservoir',
        nodes: [
          {
            id: 'surface-fixation',
            label: 'Surface Carbon Fixation and Dissolution',
            description: 'Phytoplankton fix CO₂ via photosynthesis, producing particulate organic carbon (POC) and, in calcifying organisms (coccolithophores, foraminifera), particulate inorganic carbon (CaCO₃). Simultaneously, cold surface water absorbs CO₂ from the atmosphere via the solubility pump. Net surface production exports ~10 Pg C yr⁻¹ as sinking particles.',
            color: BRAND.accent,
          },
          {
            id: 'sinking-particles',
            label: 'Sinking Organic and Inorganic Particles',
            description: 'Dead phytoplankton, fecal pellets, marine snow aggregates, and calcareous shells sink through the water column at rates of 10–200 m day⁻¹. This particle flux — the biological pump — transfers carbon from the sunlit surface to the dark interior, reducing atmospheric CO₂ relative to a non-biological ocean.',
            color: BRAND.jade,
          },
          {
            id: 'remineralization',
            label: 'Remineralization in the Water Column',
            description: 'Bacteria decompose ~90–99% of sinking organic matter in the upper 1,000 m, releasing CO₂, nutrients, and oxygen back into the water column. This respired CO₂ accumulates as DIC in intermediate and deep waters. The depth at which most remineralization occurs (the "Martin curve" describes the flux attenuation) determines how long carbon is sequestered before returning to the surface.',
            color: BRAND.gold,
          },
          {
            id: 'ccd-dissolution',
            label: 'CCD — Carbonate Dissolution',
            description: 'Calcareous particles (foraminifera, coccoliths) that sink below the lysocline begin to dissolve as pressure and CO₂-rich deep waters increase. Below the carbonate compensation depth (~3,500–5,000 m depending on basin), CaCO₃ dissolves completely, releasing Ca²⁺ and CO₃²⁻ back into the deep water. This natural dissolution buffers ocean pH and recycles carbonate ions.',
            color: BRAND.coral,
          },
          {
            id: 'sediment-burial',
            label: 'Organic Carbon Burial in Sediments',
            description: 'The ~0.1–1% of surface organic production that escapes remineralization reaches the sediment. In oxygen-minimum zones, fjords, and deltaic margins where bottom waters are anoxic or hypoxic, organic matter is preserved from bacterial decay and becomes buried in sediment layers. This burial flux (~0.2 Pg C yr⁻¹) represents a permanent sink on geological timescales.',
            color: BRAND.amethyst,
          },
          {
            id: 'deep-dic-pool',
            label: 'Deep-Ocean DIC Pool',
            description: `The ~38,000 Pg C dissolved inorganic carbon reservoir — the largest active carbon pool at Earth\'s surface. Fed by remineralization, carbonate dissolution, and solubility pump input. Carbon in AABW can remain isolated from the atmosphere for ~1,000 years before upwelling returns it to the surface. Glacial-interglacial shifts in this pool\'s size directly modulate atmospheric CO₂ by 80–100 ppm.`,
            color: BRAND.textDim,
          },
        ],
        edges: [
          { from: 'surface-fixation',  to: 'sinking-particles',  label: 'Biological pump export (~10 Pg C yr⁻¹ as sinking POC and PIC)' },
          { from: 'sinking-particles', to: 'remineralization',    label: 'Bacterial decomposition removes ~90–99% of flux in upper 1,000 m' },
          { from: 'sinking-particles', to: 'ccd-dissolution',     label: 'Calcareous shells dissolve below the lysocline and CCD' },
          { from: 'remineralization',  to: 'deep-dic-pool',       label: 'Respired CO₂ accumulates as DIC in deep water masses' },
          { from: 'ccd-dissolution',   to: 'deep-dic-pool',       label: 'Dissolved carbonate ions raise deep-water DIC and alkalinity' },
          { from: 'sinking-particles', to: 'sediment-burial',     label: 'Residual ~0.1–1% of flux reaches seafloor; buried in anoxic margins' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What is the carbonate compensation depth, and what controls its position in the water column?',
          a: [
            'The CCD is the depth below which all dissolved oxygen is consumed by bacterial remineralization of organic matter; it is controlled by surface productivity — more productivity means more oxygen consumption and a shallower CCD',
            'The CCD is the depth below which carbonate minerals dissolve faster than they accumulate, so no net CaCO₃ is preserved in sediments; it is controlled by the carbonate ion concentration (CO₃²⁻) and CO₂ content of deep water — cold, CO₂-rich deep water has lower carbonate ion concentrations, making it more corrosive to CaCO₃',
            'The CCD is the depth below which the pressure is so great that all biological activity ceases; it is controlled primarily by hydrostatic pressure, which crushes calcareous shells below ~4,000 m regardless of water chemistry',
            'The CCD is the depth below which temperature drops below 0°C, causing CaCO₃ to precipitate rather than dissolve; it is controlled by the geothermal heat flux from the ocean floor, which sets the deep-ocean temperature gradient',
          ],
          correct: 1,
          explain: 'The CCD is not related to oxygen depletion (A) — that describes the oxygen minimum zone, a separate phenomenon. Hydrostatic pressure (C) does increase dissolution rates by slightly increasing CO₂ solubility, but the primary control is carbonate ion chemistry, not mechanical crushing. The CCD does not mark a freezing boundary (D) — most deep ocean water is just above 0°C throughout, and CaCO₃ precipitation does not occur at low temperatures in the deep sea under normal conditions. The correct answer is B: CaCO₃ dissolution in seawater is governed by the saturation state Ω = [Ca²⁺][CO₃²⁻] / K_sp. When Ω < 1, the water is undersaturated with respect to CaCO₃ and dissolution is thermodynamically favoured. Deep water masses, particularly in the Pacific, are enriched in CO₂ from centuries of accumulated organic matter remineralization; this CO₂ reacts with water to produce carbonic acid, which consumes CO₃²⁻ ions, driving Ω below 1. The depth at which Ω = 1 for calcite is the calcite saturation horizon, and the CCD lies somewhat below this (because at the CCD, kinetics, not just thermodynamics, balance supply and dissolution). The Pacific CCD is shallower than the Atlantic because Pacific deep water is older and has accumulated more respired CO₂.',
        },
        {
          q: 'Why does the deep ocean store far more carbon than the atmosphere, and what prevents this carbon from immediately returning to the atmosphere?',
          a: [
            'The deep ocean stores more carbon because seawater has a higher density than air, and carbon sinks to the bottom by gravity; once at depth, carbon cannot return because it is physically too heavy to rise against the weight of the overlying water',
            'The deep ocean stores more carbon primarily because of the high volume of deep water and because CO₂ reacts chemically with seawater to form bicarbonate and carbonate ions, vastly increasing total carbon storage capacity relative to air; return to the atmosphere is prevented by the slow pace of thermohaline circulation — deep water formed in polar regions may not resurface for 200–1,000 years',
            'The deep ocean stores more carbon because photosynthesis by deep-sea algae continuously removes CO₂ from deep water; the algae sink and are buried in sediments, permanently removing carbon from the system; return to the atmosphere does not occur because the carbon is locked in solid organic matter',
            'The deep ocean stores more carbon than the atmosphere because the ocean surface is a one-way valve — CO₂ can dissolve into the ocean but the reverse reaction (CO₂ re-emerging from the ocean) is blocked by the surface microlayer of organic material produced by phytoplankton',
          ],
          correct: 1,
          explain: `Carbon does not sink by gravity (A) — CO₂ and its ionic forms are dissolved in solution, not settling as particles; the relevant physics is chemical equilibrium and ocean circulation, not particle settling. Deep-sea photosynthesis (C) does not occur because there is no sunlight below the photic zone (~200 m), let alone at 1,000–4,000 m depth. The ocean surface is not a one-way valve (D) — gas exchange across the air-sea interface is reversible; upwelling regions are net sources of CO₂ to the atmosphere. The correct answer is B: the ocean\'s vastly greater carbon storage capacity relative to the atmosphere rests on two pillars. First, volume: the ocean\'s mean depth is ~3,700 m and its total volume is ~1.335 × 10⁹ km³; even at the same carbon concentration as the atmosphere, the ocean would hold more total carbon. Second, and more importantly, seawater chemistry: dissolved CO₂ reacts with water to form H₂CO₃, which dissociates to HCO₃⁻ and CO₃²⁻; this speciation means the total DIC in solution is ~100–200× the concentration of dissolved CO₂ alone, vastly increasing the ocean\'s capacity to absorb and store carbon relative to the partial pressure of CO₂ in air. The isolation of deep water from the atmosphere by thermohaline circulation residence times of centuries to a millennium means this stored carbon cannot return to the atmosphere on human timescales without deliberate disruption.`,
        },
        {
          q: 'How does the solubility pump transfer carbon from the atmosphere to the deep ocean, and why are polar regions critical to its operation?',
          a: [
            'The solubility pump works by evaporation: in tropical regions, intense evaporation concentrates dissolved CO₂ in surface water; this concentrated water then sinks and carries the high-concentration CO₂ to the deep ocean; polar regions have less evaporation so they contribute little',
            'The solubility pump operates through sea-ice formation: as seawater freezes at the poles, CO₂ is expelled from the forming ice and dissolves in the underlying water, which then sinks because of its high CO₂ content; the CO₂ itself (being denser than other dissolved gases) drives the sinking',
            'The solubility pump exploits the temperature dependence of CO₂ solubility: CO₂ dissolves more readily in cold water; polar surface waters cool, absorb more atmospheric CO₂ than warmer waters would, and then sink as dense deep-water masses (NADW, AABW), transporting large quantities of DIC away from the atmosphere and into the deep ocean for centuries to a millennium',
            'The solubility pump is driven by biological productivity at the poles: cold polar waters support massive phytoplankton blooms that strip CO₂ from the water; the depletion of surface CO₂ creates a strong concentration gradient that draws CO₂ from the atmosphere into the ocean, which then sinks; this is why the solubility pump and biological pump are the same mechanism',
          ],
          correct: 2,
          explain: 'Evaporation (A) actually warms and concentrates surface water, making it less able to absorb CO₂ — tropical waters are net CO₂ sources, not sinks. Sea-ice brine rejection does drive sinking of dense saline water (B, the haline component of thermohaline circulation) and CO₂ is indeed partly expelled during sea-ice formation, but the primary mechanism of the solubility pump is the temperature-CO₂ solubility relationship, not CO₂ density driving sinking. The solubility pump and biological pump are distinct mechanisms (D) — the biological pump converts CO₂ into organic/inorganic particles that sink, while the solubility pump dissolves CO₂ into cold water that then sinks; they operate simultaneously but are physically and chemically separate. The correct answer is C: CO₂ solubility in seawater increases roughly 3–4% per degree Celsius of cooling. Polar surface waters cooled to near freezing can hold ~2,200–2,300 µmol/kg of total DIC, while tropical surface waters hold ~1,900–2,000 µmol/kg at comparable salinity. As polar surface waters are cooled by heat loss to the atmosphere, they absorb CO₂ until they reach equilibrium with atmospheric CO₂ at the new, colder temperature — absorbing substantially more than warmer waters would. These cold, CO₂-rich waters are also denser and sink to form NADW (in the North Atlantic) and AABW (in the Southern Ocean), transporting their DIC load to the deep ocean and isolating it from atmospheric exchange for 200–1,000 years.',
        },
        {
          q: 'What is blue carbon and why does it matter disproportionately for climate relative to the small area these ecosystems occupy?',
          a: [
            'Blue carbon refers to the carbon stored in the open deep ocean (which appears blue from space); it matters because the deep ocean holds ~38,000 Pg C — far more than any terrestrial ecosystem — and any perturbation to deep-ocean chemistry could release vast quantities of CO₂',
            'Blue carbon refers to carbon fixed by blue-green algae (cyanobacteria) in the open ocean; it matters because cyanobacteria were responsible for the Great Oxidation Event ~2.4 billion years ago and are the dominant primary producers in oligotrophic gyres today',
            'Blue carbon refers to carbon stored in coastal marine ecosystems — mangroves, seagrasses, and salt marshes; it matters disproportionately because these ecosystems accumulate organic carbon in waterlogged, anaerobic soils at rates 10–50× higher per unit area than terrestrial forests, allowing centuries of carbon to build up; their destruction releases this stored carbon rapidly, making habitat loss a significant CO₂ source',
            'Blue carbon refers to dissolved organic carbon in the ocean; it matters because the DOC pool (~700 Pg C) is the second-largest active carbon reservoir after DIC and is entirely composed of ancient, refractory carbon that sequesters carbon for thousands of years',
          ],
          correct: 2,
          explain: `The deep ocean carbon pool (A) is indeed important, but "blue carbon" is a specific term for coastal vegetated ecosystems, not the deep open ocean. Cyanobacteria (B) are called "blue-green algae" colloquially, but blue carbon is not about cyanobacteria or open-ocean primary production. Dissolved organic carbon (D) is an important reservoir, but it is not what the term "blue carbon" refers to. The correct answer is C: blue carbon is the internationally recognised term for carbon stored in living biomass and, crucially, in the soils and sediments of coastal vegetated ecosystems — primarily mangroves, seagrass meadows, and salt marshes. The disproportionate climate relevance arises from the extraordinary carbon density of their soils: under waterlogged, anaerobic conditions, decomposition by aerobic bacteria is severely limited; organic matter from dead roots, leaves, and algae accumulates layer by layer and can persist for hundreds to thousands of years, building soil carbon stocks of up to 1,000 Mg C ha⁻¹ — 5–7× the carbon density of tropical forest soils. Globally, these ecosystems cover only ~50 million hectares (a tiny fraction of Earth\'s surface) but may sequester ~0.2 Pg C yr⁻¹. The problem is that their destruction — through coastal development, shrimp farming, or sea-level rise — rapidly switches them from carbon sinks to carbon sources, releasing stored carbon to the atmosphere at rates far exceeding terrestrial land-use change per unit area.`,
        },
        {
          q: 'How does deep-ocean carbon storage change on glacial-interglacial timescales, and what evidence do scientists use to reconstruct past deep-ocean carbon cycles?',
          a: [
            'During ice ages, glaciers scrape carbonate rock from the continents and deliver it to the ocean, raising deep-ocean DIC by ~80–100 ppm; during interglacials, ice retreat halts this delivery, and DIC gradually outgasses to the atmosphere; benthic foraminifera record atmospheric CO₂ directly in their shells',
            'During ice ages, the deep ocean stores more carbon — atmospheric CO₂ falls by ~80–100 ppm, with the "missing" carbon transferred to the deep ocean through changes in ocean circulation, biological productivity, and carbonate chemistry; benthic foraminifera preserved in sediment cores record past deep-water temperature and δ¹³C (a proxy for deep-water DIC and circulation), providing a key archive of these changes',
            'During ice ages, the deep ocean stores less carbon because colder deep-water temperatures reduce bacterial remineralization; more organic carbon escapes to sediments, reducing deep-water DIC; ice core CO₂ records directly confirm that the ocean absorbs less CO₂ during cold periods',
            'Glacial-interglacial carbon storage in the deep ocean does not change significantly; the ~80–100 ppm CO₂ variations seen in ice cores reflect changes in terrestrial vegetation cover (less forest during cold, dry ice ages) rather than ocean storage; benthic foraminifera record changes in bottom-water salinity, not carbon',
          ],
          correct: 1,
          explain: 'Glaciers scraping carbonate rock (A) is not a recognised mechanism for glacial CO₂ drawdown; this would slightly increase carbonate weathering but is not responsible for the 80–100 ppm CO₂ change seen in ice cores, and benthic foraminifera cannot directly record atmospheric CO₂. Colder deep water slowing remineralization (C) is partially correct — lower temperatures do slow microbial decomposition — but this would increase carbon burial in sediments, not primarily change deep-water DIC; moreover, ice core CO₂ records show the ocean is a stronger CO₂ absorber during cold periods, not a weaker one. Terrestrial vegetation changes (D) do contribute marginally to glacial CO₂ variations, but isotope mass balance demonstrates that the deep ocean is the dominant repository of the "missing" glacial carbon; benthic foraminifera record temperature (via Mg/Ca ratios and δ¹⁸O) and carbon cycling (via δ¹³C of DIC), not primarily salinity. The correct answer is B: ice cores from Antarctica (Vostok, EPICA) show that atmospheric CO₂ was ~180–200 ppm during glacial maxima and ~280 ppm during interglacials — a difference of ~80–100 ppm. Mass balance requires that this carbon was transferred to the deep ocean (the only reservoir large enough). Proposed mechanisms include: enhanced solubility pump from colder deep-water formation; shifts in deep-water circulation patterns (potentially weaker NADW, stronger AABW); increased biological productivity due to enhanced dust-borne iron fertilisation in the Southern Ocean; and changes in the CCD depth that altered carbonate burial. Benthic foraminifera are the primary paleoclimate proxy for these changes: their δ¹⁸O records global ice volume and deep-water temperature; their δ¹³C records the distribution of carbon between the deep Atlantic and Pacific, which is sensitive to changes in the thermohaline circulation and biological pump; their Mg/Ca ratios constrain bottom-water temperature independently of ice volume.',
        },
      ],
    },
  ],
}

export default deepSeaCarbonStorage
