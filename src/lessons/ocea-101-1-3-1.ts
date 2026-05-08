import { Waves, Globe, Sun } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const marineEcosystems: Lesson = {
  id: 'ocea-101-1-3-1',
  title: 'Marine Ecosystems and Food Webs',
  track: 'oce',
  trackName: 'Oceanography',
  level: 'Beginner',
  duration: '11 min',
  xpReward: 140,
  description: "From microscopic phytoplankton to blue whales, the ocean's food webs are the largest interconnected biological system on Earth — and the most efficient solar-energy harvester ever evolved.",
  sources: [
    { org: 'NOAA',     title: 'Marine Ecosystems',                                       url: 'https://oceanservice.noaa.gov/facts/marineecosystems.html' },
    { org: 'NOAA',     title: 'Pelagic and Benthic Habitats',                            url: 'https://oceanexplorer.noaa.gov/facts/marine-habitats.html' },
    { org: 'OpenStax', title: 'Introduction to Oceanography, Ch. 12 (CC-BY 4.0)',         url: 'https://openstax.org/books/introduction-oceanography' },
    { org: 'WHOI',     title: 'Marine Food Webs and Ocean Productivity',                 url: 'https://www.whoi.edu/' },
    { org: 'IPCC',     title: 'Special Report on Ocean and Cryosphere',                  url: 'https://www.ipcc.ch/srocc/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'A planet of plankton',
      body: `If you drew a global food web that included every organism on Earth, the largest and most interconnected component would be in the ocean. The ocean covers 71% of Earth's surface and contains 97% of its water; its photosynthetic productivity rivals all terrestrial ecosystems combined. But unlike land, where most photosynthesis is done by trees and grasses you can see with the naked eye, ocean photosynthesis is dominated by single-celled organisms — **phytoplankton** — too small to see without a microscope. A single litre of seawater from a productive ocean can contain billions of these cells.

The ocean food web that builds on this microscopic foundation supports every other marine organism, from copepods (tiny crustaceans that may be the most numerous animals on Earth) to fish, squid, seabirds, seals, dolphins, and the great whales. Each step up the food chain involves a roughly tenfold loss of energy, which is why apex predators are rare and base producers are abundant. The blue whale — the largest animal that has ever lived, weighing up to 200 tonnes — feeds almost exclusively on krill, small crustaceans typically just a few centimetres long. The whale's vast bulk requires the ocean to produce enormous quantities of phytoplankton at the base of the food chain.

Marine ecosystems are organised vertically (by depth) and horizontally (by latitude, distance from shore, and proximity to upwelling zones). The pelagic zone (open water) contains plankton, fish, and large predators. The benthic zone (the seafloor) hosts entirely different communities of sessile and burrowing organisms. Coastal ecosystems — coral reefs, kelp forests, salt marshes, mangroves, estuaries — are the most biologically diverse marine habitats, fuelled by the meeting of land and sea.`,
      keyTerms: [
        { term: 'Phytoplankton', def: 'Microscopic photosynthetic organisms that drift in the sunlit surface ocean. Include diatoms, dinoflagellates, coccolithophores, and cyanobacteria. Account for ~50% of global photosynthetic production despite making up <1% of Earth\'s photosynthetic biomass.' },
        { term: 'Zooplankton',   def: 'Small drifting animals that feed on phytoplankton or each other. Include copepods (the most abundant animals on Earth), krill, jellyfish, and the larvae of nearly every marine animal. Form the critical link between primary production and higher trophic levels.' },
        { term: 'Trophic level',  def: 'The position of an organism in a food chain. Primary producers (phytoplankton) are level 1; herbivores (zooplankton) are level 2; small fish are level 3; large fish 4; apex predators (sharks, tuna) 4–5. Each step loses ~90% of the energy.' },
        { term: 'Pelagic zone',   def: 'The open water column of the ocean, away from the seafloor and coast. Subdivided by depth: epipelagic (0–200 m, sunlit), mesopelagic (200–1,000 m, twilight), bathypelagic (1,000–4,000 m, dark), abyssopelagic (4,000–6,000 m), hadalpelagic (>6,000 m).' },
        { term: 'Benthic zone',   def: 'The seafloor and the organisms living on or in it. Includes coral reefs, soft-sediment communities, kelp forests, deep-sea vent ecosystems. Distinct from pelagic ecosystems but coupled through the rain of sinking organic matter.' },
      ],
    },
    {
      type: 'concept',
      title: 'Productivity, food chains, and ocean zones',
      body: `**Photosynthesis at the base.** All marine ecosystems (with the rare exception of chemosynthetic communities at hydrothermal vents and methane seeps) are ultimately powered by photosynthesis. Phytoplankton — single-celled algae and cyanobacteria — capture solar energy and use it to convert CO₂ and nutrients into organic carbon. Globally, marine phytoplankton fix approximately 50 billion tonnes of carbon per year, roughly equivalent to all terrestrial photosynthesis. The dominant phytoplankton groups are **diatoms** (silica-shelled, rapid bloomers in nutrient-rich water), **dinoflagellates** (motile, sometimes toxin-producing), **coccolithophores** (calcium carbonate plates, important to climate), and **cyanobacteria** (especially *Prochlorococcus*, the most abundant photosynthetic organism on Earth).

**Food chain efficiency.** Each transfer of energy up the food chain loses about 90% of the available energy as heat (the **10% rule**). This is why marine food chains are short — typically 4–5 trophic levels — and why apex predators are rare. To support 1 kg of bluefin tuna requires roughly 10 kg of small fish, which requires 100 kg of zooplankton, which requires 1,000 kg of phytoplankton, which requires 10,000 kg of nutrient-rich seawater. The blue whale feeds at trophic level 3.4 (just above the herbivores) — by skipping intermediate levels, baleen whales can sustain massive bodies on a relatively modest food supply.

**The vertical structure of pelagic ecosystems.** The open ocean is divided into vertical zones based on light and pressure. The **epipelagic** (0–200 m) is the only zone with enough light for photosynthesis; nearly all primary production happens here. The **mesopelagic** (200–1,000 m, "twilight zone") is dimly lit and home to bizarre adaptations: bioluminescent fish, transparent shrimp, animals that vertically migrate hundreds of metres each night to feed in surface waters and retreat to depth by day. The **bathypelagic** (1,000–4,000 m) is in permanent darkness; food arrives only as marine snow from above. **Abyssopelagic** and **hadalpelagic** (deeper still) are the least explored ecosystems on Earth.

**Benthic ecosystems.** The seafloor hosts ecosystems entirely different from those of the water column. **Coral reefs** are the rainforests of the sea — built by colonial cnidarians whose limestone skeletons accumulate over thousands of years to form structures that house ~25% of all known marine species despite covering <1% of the seafloor. **Kelp forests** in cold temperate waters host sea urchins, sea otters, fish, and abalone. **Salt marshes, mangroves, and estuaries** are biological filters at the land-sea interface; they nurse juvenile fish and protect coasts from erosion. **Hydrothermal vents and cold seeps** support chemosynthetic communities independent of sunlight.

**Why some areas are more productive than others.** Productivity varies enormously across the ocean. The most productive areas are **coastal upwelling zones** (Humboldt, California, Benguela, Canary), the **equatorial upwelling belts**, and the **polar oceans during summer** when ice melts and stratification breaks down. The least productive areas are the **subtropical gyres** — vast warm regions with strong stratification that prevents nutrients from reaching the surface; here the water is the famous deep blue colour because there is so little phytoplankton. Productivity controls fisheries: ~20% of the world's fish catch comes from upwelling zones that occupy <1% of the ocean surface.`,
      cards: [
        {
          name: 'Phytoplankton Groups',
          icon: Sun,
          color: BRAND.gold,
          desc: 'Diatoms (silica frustules, bloom rapidly in nutrient pulses, dominate productive waters); coccolithophores (CaCO₃ plates, climate-relevant via carbonate cycle); dinoflagellates (motile, some bioluminescent, some toxic — red tides); cyanobacteria (Prochlorococcus is the most abundant photosynthetic organism on Earth, ~10²⁷ cells globally).',
          examples: 'Spring bloom, North Atlantic: diatoms erupt in mass blooms · Coccolithophore bloom: visible from satellites as turquoise patches · HAB (harmful algal bloom): toxic dinoflagellates kill fish, contaminate shellfish',
        },
        {
          name: 'Vertical Zones',
          icon: Waves,
          color: BRAND.accent,
          desc: 'Epipelagic (0–200 m, sunlit, 10% of pelagic volume but ~90% of biomass); Mesopelagic (200–1,000 m, twilight, vertical migrators, lanternfish); Bathypelagic (1,000–4,000 m, dark, sparse, anglerfish); Abyssopelagic (4,000–6,000 m); Hadalpelagic (>6,000 m, only in trenches). Diel vertical migration: largest daily migration of biomass on Earth.',
          examples: 'Lanternfish: most abundant vertebrate on Earth (10⁹+ tonnes), live in mesopelagic, migrate to surface nightly · Vampire squid: bathypelagic, "living fossil" · Deep scattering layer: sonar sees mesopelagic biomass',
        },
        {
          name: 'Productivity Hotspots',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Coastal upwelling: Humboldt (~20% global fish catch from 0.1% of ocean), California, Benguela, Canary. Equatorial upwelling: tropical Pacific, Atlantic. Polar summer: ice melt, stratification breakdown. Continental shelves: nutrient input from rivers. Subtropical gyres: ocean deserts, deep blue water = low productivity.',
          examples: 'Peruvian anchoveta: largest single-species fishery in history (>10 Mt/yr at peak) · Antarctic krill: keystone species, biomass ~400 Mt · Sargasso Sea: lowest productivity, clearest open-ocean water',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'A blue whale weighs up to 200 tonnes and is the largest animal in Earth\'s history. It feeds almost exclusively on krill — small crustaceans typically a few centimetres long. How can such an enormous animal sustain itself on tiny prey, and why couldn\'t it instead feed on the largest fish in the ocean?',
          a: [
            'Krill are easier to catch than fish, so the blue whale prefers them despite the smaller size of each individual; it could equally well feed on fish if it chose to',
            'The blue whale feeds at a low trophic level (level 3, just above herbivores) by eating krill that eat phytoplankton; each step up a food chain loses ~90% of the energy, so feeding low on the chain provides far more total energy than feeding on large fish at high trophic levels would',
            'Blue whales evolved before large fish existed, so they retain an ancient feeding strategy from a time when only small prey was available; modern blue whales could in principle adapt to feed on large fish but have not yet done so',
            'Krill contain a special biochemical (krill oil) that uniquely supports the metabolic needs of large mammals; large fish lack this compound, which is why blue whales cannot feed on them',
          ],
          correct: 1,
          explain: 'The choice is not behavioural preference (A) — it is energetic necessity. Evolutionary timing (C) is incorrect; large fish predate baleen whales by hundreds of millions of years, and other large marine animals do feed on large fish. Krill oil (D) is not a uniquely required nutrient for whales; krill are food because they are abundant and energy-rich, not because of unique biochemistry. The correct answer is B: each trophic level transfer loses about 90% of the available energy (the 10% rule). To produce 1 kg of bluefin tuna (level 4–5) requires ~10 kg of small fish, ~100 kg of zooplankton, ~1,000 kg of phytoplankton. By feeding directly on krill (level 2), baleen whales bypass several steps and access ~100× more energy per unit primary production than they would by eating fish; this is why all the largest filter-feeding marine animals (blue whale, fin whale, whale shark, basking shark, manta ray) are low trophic-level feeders.',
        },
        {
          q: 'The mesopelagic zone (200–1,000 m) is the largest ecosystem on Earth by volume and may contain the largest fish biomass of any ocean zone. Yet it receives no light for photosynthesis. How does so much life thrive in perpetual twilight?',
          a: [
            'The mesopelagic zone has its own primary production driven by chemosynthetic bacteria oxidising methane and other reduced compounds, which form a self-sustaining ecosystem independent of the surface',
            'Mesopelagic organisms feed on a continuous rain of marine snow (dead phytoplankton, fecal pellets) sinking from the productive surface, and many also undertake daily vertical migrations to feed in the surface layer at night, returning to depth by day to avoid predators',
            'Mesopelagic fish absorb dissolved organic matter directly through their skin, using the high concentration of organic compounds in deep water to meet their energetic needs',
            'The faint blue light reaching the upper mesopelagic zone (around 200 m) is sufficient for photosynthesis by specialised low-light algae that live there, providing the food base for the entire ecosystem',
          ],
          correct: 1,
          explain: 'Chemosynthetic primary production (A) does occur at hydrothermal vents and seeps but is not the basis of the broader mesopelagic ecosystem; methane and reduced compounds are not abundant enough in the open mesopelagic to support the observed biomass. Skin absorption of DOM (C) is not a viable energy source for fish; dissolved organic matter is too dilute and most of it is refractory to direct uptake. Photosynthesis at 200 m (D) is essentially zero; even the most efficient low-light algae cannot make a living below ~150 m in the clearest ocean. The correct answer is B: the mesopelagic is fed by two coupled mechanisms — passive marine snow (continuous rain of organic particles from above) and active diel vertical migration, in which mesopelagic organisms swim hundreds of metres up to surface waters at night to feed on plankton, then return to dark depths by day; the migration is the largest daily movement of biomass on Earth and effectively delivers surface productivity to the deep ocean every 24 hours.',
        },
        {
          q: "Coral reefs cover less than 1% of the ocean floor but host approximately 25% of all known marine species. What ecological feature of coral reefs explains their disproportionate biodiversity?",
          a: [
            'Coral reefs are located primarily in nutrient-rich upwelling zones, which support exceptionally high primary productivity and therefore high biodiversity',
            'Coral reefs receive a continuous influx of species from the deep ocean as deep-sea organisms migrate upward; the constant arrival of new species inflates reef biodiversity beyond what the local environment alone could sustain',
            'Reef-building corals create complex three-dimensional physical structures with countless niches, crevices, and microhabitats; this structural complexity supports an enormous diversity of fish, invertebrates, and microorganisms — combined with the corals\' symbiotic algae (zooxanthellae) providing primary production in nutrient-poor tropical waters',
            'Coral reefs occur exclusively in regions where the ocean is shallowest and warmest year-round, allowing tropical species from multiple ocean basins to converge in the same locations',
          ],
          correct: 2,
          explain: 'Coral reefs are not in upwelling zones (A) — they thrive in oligotrophic (nutrient-poor) tropical waters; high productivity is not their basis. Migration from the deep ocean (B) does not explain reef biodiversity; reef species are largely endemic to the reef habitat. Convergence of species from multiple basins (D) is not the mechanism; while some reefs do bridge biogeographic regions, this is not the primary explanation for the disproportionate biodiversity of all coral reefs. The correct answer is C: coral reefs combine two unusual features — extreme structural complexity and an internal source of primary production. The corals themselves are colonial cnidarians that secrete calcium carbonate skeletons, building three-dimensional structures with countless cracks, holes, and surfaces; these provide habitats for fish (over 4,000 species), molluscs, crustaceans, sea stars, and many others. Each coral hosts symbiotic zooxanthellae (dinoflagellate algae) that perform photosynthesis inside the coral tissue, providing the coral with sugars in exchange for nutrients; this internal primary production allows reefs to thrive in nutrient-poor tropical waters where other ecosystems would starve.',
        },
      ],
    },
  ],
}

export default marineEcosystems
