import { Sun, Waves, Globe } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const phytoplankton: Lesson = {
  id: 'ocea-101-1-3-2',
  title: 'Phytoplankton and Primary Production',
  track: 'oce',
  trackName: 'Oceanography',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 150,
  description: "Microscopic algae drifting in sunlit ocean water produce roughly half of all the oxygen in Earth's atmosphere — and form the base of every marine food web above the seafloor.",
  sources: [
    { org: 'NASA',     title: 'Ocean Color and Phytoplankton',                            url: 'https://oceancolor.gsfc.nasa.gov/' },
    { org: 'NOAA',     title: 'What are phytoplankton?',                                   url: 'https://oceanservice.noaa.gov/facts/phyto.html' },
    { org: 'OpenStax', title: 'Introduction to Oceanography, Ch. 13 (CC-BY 4.0)',          url: 'https://openstax.org/books/introduction-oceanography' },
    { org: 'NOAA AOML', title: 'Phytoplankton and Marine Productivity',                   url: 'https://www.aoml.noaa.gov/' },
    { org: 'WHOI',     title: 'Marine Microbes and Biogeochemistry',                      url: 'https://www.whoi.edu/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The invisible forest',
      body: `If every tree on Earth disappeared overnight, the air you breathe would still be roughly half oxygen — because half the oxygen comes from the sea. Specifically, it comes from **phytoplankton**: microscopic, single-celled photosynthetic organisms drifting in the sunlit upper layer of the ocean. There are an estimated 10²⁷ phytoplankton cells in the global ocean — a number so large it exceeds the total number of stars in the observable universe by a factor of a million. Despite making up less than 1% of Earth's photosynthetic biomass, phytoplankton perform approximately 50% of all photosynthesis on the planet, fixing roughly 50 billion tonnes (55.1 billion tons) of carbon per year. Every other breath you take comes from the ocean.

Phytoplankton occupy a paradoxical position in earth science: they are simultaneously among the most studied and most poorly understood organisms in the natural world. Studied, because their importance for climate, fisheries, and biogeochemistry is unmatched; poorly understood, because the diversity of phytoplankton groups, their interactions with grazers, the controls on their geographic distribution, and the biochemistry of carbon and nutrient cycling within their cells all remain active research areas. Even basic questions — how many species exist, what controls their geographic ranges, how they will respond to ocean warming — are still being answered.

The history of phytoplankton science is the history of asking how something so small can matter so much. Christian Ehrenberg first identified diatoms in seawater under a microscope in the 1830s. The modern understanding of marine primary production was assembled gradually through the twentieth century, culminating in NASA's launch of CZCS (1978) and SeaWiFS (1997) — satellites that for the first time mapped the colour of the ocean from space, revealing chlorophyll concentrations and phytoplankton biomass continuously across the entire global ocean. We now know that the ocean's productivity is not uniform: it is concentrated in coastal upwelling zones, polar oceans, and the equatorial Pacific, while the centres of subtropical gyres are oligotrophic deserts.`,
      keyTerms: [
        {
          term: 'Phytoplankton',
          def: 'Microscopic, single-celled photosynthetic organisms that drift in the surface ocean. Includes diatoms, coccolithophores, dinoflagellates, cyanobacteria, and many smaller groups. Responsible for ~50% of global photosynthesis. Concentration measured by chlorophyll-a, visible from space as ocean colour.',
        },
        {
          term: 'Primary production',
          def: 'The conversion of inorganic carbon (CO₂) into organic compounds through photosynthesis (or chemosynthesis). Net primary production (NPP): gross production minus respiration by the organism itself. Marine NPP ≈ 50 Gt C/yr — comparable to all terrestrial NPP combined.',
        },
        {
          term: 'Photic zone',
          def: 'The upper layer of ocean water that receives enough sunlight for photosynthesis. Defined as the depth at which light is reduced to 1% of surface irradiance. Typically 0–200 m (0–656 ft) in clear ocean water; <50 m (164 ft) in turbid coastal waters; <10 m (33 ft) in highly productive blooms (where phytoplankton itself blocks light).',
        },
        {
          term: 'HNLC region',
          def: 'High-Nutrient, Low-Chlorophyll region — areas where macronutrients (nitrate, phosphate) are abundant but phytoplankton biomass is low. Caused by iron limitation. Three main HNLC regions: Southern Ocean, equatorial Pacific, subarctic Pacific. Together cover ~30% of the ocean.',
        },
        {
          term: 'Biological pump',
          def: 'The process by which photosynthetically fixed carbon is exported from the surface ocean to depth via sinking organic particles (dead cells, fecal pellets, marine snow). Removes ~10 Gt C/year from the surface to depths >1,000 m (3,281 ft), where it is sequestered for centuries to millennia. Without it, atmospheric CO₂ would be ~200 ppm higher.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Diversity, productivity, and the controls on plankton growth',
      body: `**Major groups of phytoplankton.** Phytoplankton are a polyphyletic assemblage drawn from many lineages of life. **Diatoms** (10–200 μm) are the most striking: large, rapidly growing algae with intricate silica shells (frustules). They dominate cold, nutrient-rich, turbulent waters — high latitudes, upwelling zones, and seasonal blooms in temperate seas. Their fast growth and large size make them efficient at exporting carbon when blooms collapse and cells sink. **Coccolithophores** (5–20 μm) build calcium carbonate plates (coccoliths) that lock carbon into a long-lived mineral pool; they thrive in stratified, nutrient-poor subtropical waters and form blooms visible from space as turquoise patches. **Dinoflagellates** are flagellated cells that can swim, allowing vertical migration to access nutrients at night and light by day; they include both photosynthetic species and toxic species responsible for harmful algal blooms (HABs) like red tides. **Cyanobacteria** — especially *Prochlorococcus* and *Synechococcus* — are tiny (<1 μm) but enormously abundant; *Prochlorococcus* may be the most numerous photosynthetic organism on Earth, with ~10²⁷ cells globally. It accounts for ~5% of global photosynthesis on its own.

**Photosynthesis at the foundation of marine life.** Phytoplankton perform the same fundamental reaction as terrestrial plants: 6 CO₂ + 6 H₂O + light → C₆H₁₂O₆ + 6 O₂. They extract dissolved CO₂ from seawater, use chlorophyll-a to capture sunlight, and produce organic carbon and oxygen. The total marine primary production is approximately 50 Gt C per year, comparable to all terrestrial production. But there are profound differences from land ecosystems: terrestrial primary production accumulates as long-lived biomass (trees, soil) that may persist for decades to centuries, while marine primary production turns over rapidly — phytoplankton typically divide every 1–3 days, are eaten or sink within days to weeks, and the entire global standing stock of phytoplankton biomass is replaced roughly every week. This rapid turnover is why phytoplankton respond quickly to environmental change and why they can support large fisheries despite low standing biomass.

**What controls phytoplankton growth?** Three factors dominate everywhere in the ocean: **light**, **nutrients**, and **grazing pressure**. Light penetrates only the upper 100–200 m (328–656 ft) of clear ocean (the photic zone); below this depth, photosynthesis is impossible. **Nutrients** — primarily **nitrate**, **phosphate**, **iron**, and **silicate** (for diatoms) — are essential for cell building. The surface ocean is typically depleted in nutrients because phytoplankton consume them faster than mixing can replenish them. Areas where deep, nutrient-rich water reaches the surface (upwelling zones, polar regions, high-latitude winter mixing) are the most productive. Grazing by zooplankton constantly removes phytoplankton biomass; in steady-state ecosystems, growth balances grazing, holding standing stocks low even when production is high.

**The iron limitation puzzle.** In about 30% of the ocean (the HNLC regions — Southern Ocean, equatorial Pacific, subarctic Pacific), nitrate and phosphate are abundant but phytoplankton remain scarce. The mystery was solved by John Martin in the late 1980s, who showed that **iron** — present in seawater at trace concentrations of <1 nmol/kg — is the limiting nutrient. Iron is essential for nitrogen fixation, nitrate reductase, and electron transport in photosynthesis. Without iron, phytoplankton cannot use the abundant nitrate. Ocean iron comes mostly from atmospheric dust (Saharan dust fertilises the Atlantic; Asian dust fertilises the Pacific) and from continental shelves. Martin's iron-fertilisation experiments — adding iron to HNLC waters — consistently triggered massive blooms, leading to ongoing controversy about whether iron fertilisation could be used to draw down atmospheric CO₂ as a climate intervention.

**The biological pump.** Photosynthesis at the surface fixes CO₂ into organic matter; most of that organic matter is rapidly recycled near the surface, but a fraction (~10%) sinks as dead cells, fecal pellets, and aggregates ("**marine snow**"). As particles sink, they decompose, releasing CO₂ and nutrients in the deep ocean. Particles that reach below ~1,000 m (3,281 ft) are effectively sequestered for centuries — the timescale of thermohaline circulation. The biological pump removes approximately 10 Gt of carbon from the surface ocean annually — comparable to current fossil fuel emissions. Without the biological pump, atmospheric CO₂ would be roughly 200 ppm higher than today (i.e., ocean and atmosphere would be near equilibrium with the deep ocean carbon reservoir, drastically shifting Earth's climate).

**Bloom dynamics and seasonal cycles.** Phytoplankton biomass varies enormously through the year, especially at high latitudes. The classic **spring bloom** in temperate and subpolar oceans follows a predictable pattern: through winter, deep mixing brings nutrients to the surface but also keeps phytoplankton mixed below the photic zone, suppressing growth; in spring, the water column stratifies (warmer surface), trapping phytoplankton in the well-lit upper layer; with abundant nutrients and now-sufficient light, growth explodes; the bloom continues until nutrients are depleted (often as nitrate runs out by mid-summer); after the bloom, smaller phytoplankton species and less-productive grazing-based food webs dominate until winter mixing resets the system. The intensity, timing, and species composition of these blooms govern the productivity of fisheries downstream.`,
      cards: [
        {
          name: 'Diatoms & Coccolithophores',
          icon: Waves,
          color: BRAND.jade,
          desc: 'Diatoms: 10–200 μm, silica frustules (SiO₂), chain-forming. Cold/turbulent/nutrient-rich preference. Spring bloom dominators. Fast carbon export when sink. Coccolithophores: 5–20 μm, calcium carbonate plates. Stratified subtropical waters. Visible from space as turquoise patches. Lock carbon in mineral form.',
          examples: 'Diatom spring bloom (N Atlantic): chlorophyll 30+ mg/m³ peak · Emiliania huxleyi (coccolithophore): single-species blooms cover 100,000+ km² · Diatom oozes form below productive Southern Ocean',
        },
        {
          name: 'Cyanobacteria & DOC',
          icon: Sun,
          color: BRAND.gold,
          desc: 'Prochlorococcus (<1 μm): smallest known photosynthesiser, most abundant photosynthetic cell on Earth (~10²⁷ globally), accounts for ~5% of global photosynthesis. Synechococcus: slightly larger, more nutrient-tolerant. Cyanobacteria perform nitrogen fixation in oligotrophic waters. Dissolved organic carbon (DOC) released supports microbial loop.',
          examples: 'Prochlorococcus discovered only in 1986 (Sallie Chisholm) · Trichodesmium: filamentous N-fixing cyanobacterium, blooms in tropical Atlantic · Genome of P. marinus: among the smallest in any free-living organism (1.7 Mb)',
        },
        {
          name: 'Iron & Biological Pump',
          icon: Globe,
          color: BRAND.accent,
          desc: 'HNLC regions: ~30% of ocean (Southern Ocean, equatorial Pacific, subarctic Pacific). Iron limits productivity despite abundant N and P. Sources: dust (Saharan, Asian), shelf upwelling, hydrothermal vents. Biological pump exports ~10 Gt C/yr to depth via marine snow. Without it, atmospheric CO₂ would be ~200 ppm higher.',
          examples: 'Saharan dust fertilises Atlantic productivity; visible from space crossing Atlantic · IronEx II (1995): iron addition → 50× chlorophyll increase in 4 days · Sediment traps measure carbon flux at 100–4,000 m (328–13,124 ft) depth globally',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "Vast areas of the open ocean — including the Southern Ocean, the equatorial Pacific, and the subarctic Pacific — have abundant nitrate and phosphate at the surface but very low phytoplankton biomass. Why are these regions productive 'deserts' despite having macronutrients available?",
          a: [
            'These regions have surface waters that are too cold for phytoplankton growth; cold water inhibits photosynthetic enzymes and the cells cannot grow despite available nutrients',
            'These are HNLC (High-Nutrient, Low-Chlorophyll) regions where iron — a trace nutrient essential for photosynthesis and nitrogen assimilation — is limiting; without sufficient iron, phytoplankton cannot use the abundant nitrate and phosphate',
            'These regions are too deep for phytoplankton to survive; the surface layer is below the photic zone in these areas, so photosynthesis is impossible regardless of nutrient availability',
            'Grazing pressure from extreme zooplankton abundance keeps phytoplankton biomass low in these regions; nutrients accumulate because nothing can grow long enough to consume them',
          ],
          correct: 1,
          explain: `Cold-water enzymatic limitation (A) is incorrect — many phytoplankton species are well adapted to cold water and thrive in polar regions; the Southern Ocean has high productivity in localised blooms when iron is supplied. Photic zone depth (C) is wrong — surface waters in these regions are well within the photic zone; depth is not the limit. Grazing pressure (D) does affect standing biomass but does not explain the persistent HNLC condition globally; the fundamental limit is bottom-up, not top-down, although grazing by microzooplankton does contribute to keeping biomass low. The correct answer is B: John Martin\'s iron hypothesis (1990) revealed that iron, present at trace concentrations in surface seawater (<1 nmol/kg), limits phytoplankton growth in 30% of the ocean; iron is required for chlorophyll synthesis, nitrate reductase enzymes, and the electron transport chain in photosynthesis; HNLC regions are typically far from continental dust and shelf sources of iron, so they receive insufficient iron supply; experimental iron fertilisation in these regions consistently triggers massive phytoplankton blooms, confirming the limitation. The implication for climate intervention is significant: deliberately adding iron to HNLC regions could in principle increase carbon export, but field experiments show the carbon export is much smaller than the gross production stimulated, and the side effects (community shifts, oxygen depletion, sub-surface methane and nitrous oxide) are poorly understood.`,
        },
        {
          q: 'How does the biological pump contribute to atmospheric CO₂ regulation, and what would happen if it stopped functioning?',
          a: [
            'The biological pump physically pumps water from the surface to the deep ocean using the metabolic energy of phytoplankton; without it, ocean circulation would stop and CO₂ would accumulate in surface waters',
            'Phytoplankton convert atmospheric CO₂ into organic carbon through photosynthesis; a fraction (~10%) of this organic matter sinks as particles to the deep ocean, sequestering carbon for centuries; without this export, atmospheric CO₂ would be approximately 200 ppm higher than current levels',
            'The biological pump dissolves CO₂ from the atmosphere into seawater chemically through phytoplankton membranes; without it, the ocean would not absorb any CO₂ at all',
            'Phytoplankton release calcium carbonate that neutralises atmospheric CO₂ through chemical reactions in the water column; the biological pump operates by acid-base buffering rather than carbon export',
          ],
          correct: 1,
          explain: "Physical water pumping (A) misunderstands the mechanism — phytoplankton don't pump water; circulation is driven by wind and density differences. CO₂ dissolution through membranes (C) describes the solubility pump, a separate physical-chemical process that is also important but distinct from the biological pump; the biological pump specifically refers to biological transformation and export. CaCO₃ neutralisation (D) is partly relevant — coccolithophores and other organisms do produce CaCO₃, contributing to alkalinity dynamics — but this is the carbonate counter-pump, which actually releases CO₂ during precipitation; it is not the main biological pump mechanism. The correct answer is B: phytoplankton fix CO₂ via photosynthesis at the surface; when they die, are eaten and pelletised by zooplankton, or aggregate into marine snow, organic particles eventually sink; particles reaching below ~1,000 m (3,281 ft) are sequestered for the ~1,000-year overturning timescale; the pump removes ~10 Gt C/year and maintains atmospheric CO₂ approximately 200 ppm below what it would otherwise be in equilibrium with the deep ocean carbon reservoir. Modeling studies show that abrupt cessation of the biological pump (e.g., by removing all phytoplankton) would cause atmospheric CO₂ to rise by ~150–200 ppm over a few thousand years as the ocean equilibrates, a profound climate consequence.",
        },
        {
          q: 'Diatoms and coccolithophores are both common phytoplankton groups, but they thrive in dramatically different ocean environments. What ecological factors favour each group, and what biogeochemical consequences follow from these distributions?',
          a: [
            'Diatoms favour deep, dark waters; coccolithophores favour shallow, sunlit waters — the difference reflects each group\'s photosynthetic adaptations to different light levels',
            'Diatoms thrive in cold, nutrient-rich, turbulent waters (high latitudes, upwelling, spring blooms) where their fast growth and silica shells are advantageous; coccolithophores thrive in warm, stratified, nutrient-poor subtropical waters where their smaller size, calcium carbonate shells, and low nutrient demand are favoured. The shift between diatom-dominated and coccolithophore-dominated communities affects both the silica and carbonate cycles and the efficiency of carbon export',
            'Diatoms only grow in coastal waters near continents; coccolithophores only grow in the open ocean — the distinction is geographic distance from land, not water properties',
            'Diatoms and coccolithophores have identical environmental requirements; their distributions are random and reflect historical contingencies of where each group first dispersed',
          ],
          correct: 1,
          explain: 'Light-level adaptation alone (A) is incorrect — both groups are surface dwellers within the photic zone; depth does not differentiate them. Geographic distance from land (C) is too simplistic — both groups occur in coastal and open ocean waters; water properties matter more than geography. Identical requirements (D) is wrong — these groups have measurably different optima and dominate different regions of the global ocean. The correct answer is B: diatoms have large silica frustules and require silicate as a nutrient; they grow fastest at cold temperatures with abundant nitrate, phosphate, silicate, and iron, in turbulent water that suspends their relatively dense cells; their large size makes them effective at exporting carbon when blooms end and cells aggregate and sink — a single large diatom can sink hundreds of metres in a day, much faster than a small cell. Coccolithophores have calcium carbonate plates, are smaller, thrive at low nutrient levels, and tolerate strong stratification; in warm subtropical waters where diatoms cannot find silicate, coccolithophores dominate. Biogeochemical consequences: diatom-dominated systems (high productivity, cold seas) drive efficient carbon export and are major sinks for silicate and CO₂; coccolithophore-dominated systems lock carbon into long-lived calcium carbonate sediments, but the precipitation of CaCO₃ itself releases CO₂, partially offsetting their photosynthetic uptake. Climate change is shifting community composition: warmer, more stratified oceans favour smaller phytoplankton (cyanobacteria, picoplankton) over diatoms, potentially weakening the biological pump.',
        },
        {
          q: 'At high latitudes, phytoplankton experience a characteristic seasonal cycle: very low biomass in winter, an explosive spring bloom, and a crash by mid-summer. What combination of factors controls each phase of this cycle?',
          a: [
            'Winter darkness prevents photosynthesis; spring warmth increases metabolic rates, causing the bloom; the mid-summer crash occurs because high temperatures denature photosynthetic enzymes, killing phytoplankton',
            'In winter, cold temperatures inhibit growth; in spring, warming accelerates growth and the bloom occurs; by mid-summer, ocean currents shift direction and carry phytoplankton away from their growing area, causing the apparent population crash',
            'In winter, deep wind-driven mixing keeps phytoplankton below the photic zone and light is too low; in spring, increased sunlight and water column stratification trap phytoplankton in the well-lit surface layer alongside nutrients supplied by winter mixing, triggering explosive growth; by mid-summer, phytoplankton exhaust surface nutrients (especially nitrate), and grazer populations catch up, crashing the bloom',
            'Winter cold freezes surface phytoplankton, which sink to the seafloor and overwinter as resting spores; in spring they germinate and bloom; the mid-summer crash is caused by increased UV radiation that destroys chlorophyll in the now-ice-free surface layer',
          ],
          correct: 2,
          explain: 'Enzymatic denaturation from summer heat (A) does not occur at realistic mid-latitude ocean temperatures; surface waters at high latitudes in summer remain well below the thermal tolerance thresholds of phytoplankton; temperature is not why blooms crash in summer. Current advection carrying phytoplankton away (B) does occur to some extent but is not the dominant mechanism explaining the universal mid-summer crash seen across high-latitude systems globally regardless of current direction; nutrient depletion is the consistent explanation. Freezing and resting spores (D) does happen for some diatom species in polar regions, but this describes a survival mechanism, not the general cause of the seasonal productivity crash in temperate and subpolar seas; UV radiation does not destroy chlorophyll in unfrozen open-ocean surface waters. The correct answer is C: the seasonal cycle is governed by three interacting factors — light, stratification, and nutrient availability. In winter at high latitudes, light is low (short days, low sun angle) and strong winds mix the water column deeply, keeping phytoplankton suspended well below the compensation depth (where photosynthesis equals respiration); growth is impossible. In spring, the sun rises higher, days lengthen, and surface warming creates a stable stratified layer that traps phytoplankton in the photic zone; crucially, winter mixing has also loaded the surface with nutrients (nitrate, phosphate, silicate); with plentiful light and nutrients and little grazing pressure (zooplankton populations have not yet built up), the bloom erupts rapidly. By mid-summer, the phytoplankton have consumed available nitrate, the primary limiting nutrient in most temperate seas; productivity collapses until autumn storms break stratification and deep mixing again replenishes nutrients, sometimes triggering a smaller autumn bloom.',
        },
      ],
    },
  ],
}

export default phytoplankton
