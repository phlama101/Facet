import { Waves, Globe, Sun } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const coralReefs: Lesson = {
  id: 'ocea-101-1-3-3',
  title: 'Coral Reefs and Tropical Marine Ecosystems',
  track: 'oce',
  trackName: 'Oceanography',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 140,
  description: "Coral reefs are the most biodiverse ecosystems in the ocean — structures built grain by grain over millennia by tiny colonial animals whose relationship with light-harvesting algae fuels one of the greatest productivity paradoxes in nature.",
  sources: [
    { org: 'NOAA',     title: 'Coral Reef Ecosystems',                                       url: 'https://oceanservice.noaa.gov/facts/coralreef.html' },
    { org: 'NOAA',     title: 'National Coral Reef Monitoring Program',                      url: 'https://coralreef.noaa.gov/' },
    { org: 'OpenStax', title: 'Introduction to Oceanography, Ch. 13 (CC-BY 4.0)',            url: 'https://openstax.org/books/introduction-oceanography' },
    { org: 'IPCC',     title: 'Special Report on Ocean and Cryosphere (SROCC)',              url: 'https://www.ipcc.ch/srocc/' },
    { org: 'AIMS',     title: 'Long-Term Monitoring of the Great Barrier Reef',              url: 'https://www.aims.gov.au/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Rainforests of the sea',
      body: `Coral reefs occupy less than 0.2% of the ocean floor yet shelter an estimated 25% of all known marine species — a concentration of biodiversity surpassed only by tropical rainforests on land. The analogy is apt: both ecosystems are extraordinarily productive biological engines operating in nutrient-poor environments, and both are extraordinarily sensitive to human disturbance. In the ocean, the reef is the rainforest canopy, the forest floor, and the soil food web rolled into one three-dimensional carbonate structure built by tiny animals whose architecture has been accumulating for thousands of years.

The architects of this structure are **reef-building corals** — colonial cnidarians (related to sea anemones and jellyfish) that secrete calcium carbonate (aragonite) skeletons around themselves. Each coral colony is composed of hundreds or thousands of genetically identical polyps, each just a few millimetres wide, each harbouring photosynthetic algae called **zooxanthellae** inside their tissue. This symbiosis is the engine of reef productivity: the algae provide the coral with up to 90% of its energy via photosynthesis, while the coral provides the algae with shelter and a supply of nutrients. This internal solar panel allows corals to thrive in the warm, clear, nutrient-poor tropical waters where most other ecosystems would starve.

Coral reefs are concentrated in the "coral triangle" of the Indo-Pacific (Indonesia, Philippines, Papua New Guinea), the Great Barrier Reef, the Caribbean, and the Red Sea. They require warm water (18–30°C), sunlight (hence shallow water, typically <30 m), low nutrients (excess nutrients favour algae that smother corals), and a firm substrate. These constraints make reefs geographically limited — and acutely vulnerable to climate change, pollution, and overfishing, all of which push conditions outside the narrow envelope corals can tolerate.`,
      keyTerms: [
        { term: 'Coral polyp',    def: 'The individual living unit of a coral colony — a tiny cylindrical animal with a ring of tentacles around a central mouth. Each polyp secretes a calcium carbonate cup (corallite) beneath itself. Thousands of polyps together build a coral head over decades to centuries.' },
        { term: 'Zooxanthellae',  def: 'Photosynthetic dinoflagellate algae (genus Symbiodinium) that live endosymbiotically inside coral tissue. They provide the coral with sugars and oxygen via photosynthesis and give corals their brown/golden colour. Expelled when corals are stressed, producing coral bleaching.' },
        { term: 'Coral bleaching', def: 'The whitening of coral caused by expulsion or loss of zooxanthellae under thermal or other environmental stress. Without zooxanthellae, the coral\'s white skeleton shows through its transparent tissue. Bleached coral is not dead but is severely stressed and will die if stress persists for weeks.' },
        { term: 'Reef zonation', def: 'The spatial organisation of reef communities by exposure to waves, light, and water motion. Classic zones include the reef flat (shallow, high energy), reef crest (the most exposed), fore-reef slope (seaward face, most species-rich), and back-reef/lagoon (calmer, sandy substrate).' },
        { term: 'Carbonate framework', def: 'The calcium carbonate skeleton that constitutes the physical structure of a reef. Built by corals, coralline algae, molluscs, and other calcifying organisms over centuries to millennia. Ocean acidification weakens carbonate frameworks by reducing the availability of carbonate ions.' },
      ],
    },
    {
      type: 'concept',
      title: 'Reef biology, structure, and threats',
      body: `**The paradox of reef productivity.** Tropical surface waters around coral reefs are among the least nutrient-rich in the ocean — yet reefs teem with life. This is the "Darwin paradox," first noted by Charles Darwin who was struck by the lushness of atolls rising from barren tropical seas. The resolution lies in tight nutrient recycling: the reef community retains and recycles nutrients with near-perfect efficiency. Zooxanthellae photosynthesis inside the coral converts sunlight and the coral's own metabolic waste into carbohydrates. Benthic algae fix nitrogen from the water. Filter feeders capture dissolved organic matter. Dead organic material is immediately recycled by bacteria and invertebrates. Almost no nutrients escape into the water column. This internal cycling — not external nutrient supply — sustains reef productivity.

**Reef architecture and zonation.** A mature coral reef is a three-dimensional city. The **reef crest** is the highest-energy zone, battered by waves; here, dense, encrusting corals and coralline algae dominate. The **fore-reef slope** descends seaward into deeper water; this is the most biodiverse zone, where plate and branching corals form galleries and overhangs sheltering hundreds of fish species. The **reef flat** is the shallow, sometimes exposed zone behind the crest; corals here must tolerate low tide exposure. The **back-reef and lagoon** are calmer and often sandy, home to sea grass beds, sea cucumbers, and juvenile fish. The physical framework of the reef is not just coral: **coralline algae** cement the structure, **sponges** filter enormous volumes of water, and the skeletons of dead corals provide the bulk of the reef's mass, which may be tens of metres thick even though living coral covers only the surface few centimetres.

**Reef biodiversity and species interactions.** No ecosystem on Earth packs more species interactions into a smaller area. Cleaner wrasse operate at fixed "cleaning stations" where larger fish queue to have parasites removed — a mutualism documented across hundreds of reef species. **Parrotfish** graze living coral with their beak-like teeth, excreting the calcium carbonate as fine white sand; a single large parrotfish produces hundreds of kilograms of sand per year. **Crown-of-thorns starfish** (*Acanthaster planci*) are normally a minor predator, but population outbreaks (linked to excess nutrient run-off that boosts larval survival) can strip reef sections of live coral cover in months. **Herbivores** (surgeonfish, urchins, parrotfish) are critical ecosystem engineers: they graze algae that would otherwise smother corals; removing herbivores from a reef through overfishing reliably produces a phase shift from coral to algae domination.

**Coral bleaching and climate change.** When sea surface temperatures rise more than ~1°C above the normal summer maximum for weeks, corals expel their zooxanthellae in a stress response — the coral turns stark white (bleaching). Without their photosynthetic partners, corals survive only on the small amount of food they can capture by stinging passing zooplankton. If temperatures return to normal within a few weeks, zooxanthellae may recolonise and the coral recovers. If thermal stress persists for longer, the coral dies. Mass bleaching events have increased dramatically since the 1980s: the 2016 bleaching event killed over half the coral in the northern Great Barrier Reef's shallow zones in a single season. At current warming trajectories, projections suggest annual bleaching conditions for most of the world's reefs by 2050, which would not allow the years needed for recovery between events.

**Ocean acidification and calcification.** Reef corals don't just face temperature stress — they face chemical stress. As the ocean absorbs CO₂, it becomes more acidic (lower pH), reducing the availability of carbonate ions that corals use to build their skeletons. Studies show calcification rates in many reef-building corals have declined 15–30% since pre-industrial times, and the rate of reef erosion is beginning to exceed the rate of reef building in some locations. At CO₂ concentrations projected for mid-century under high-emission scenarios, conditions may cross a threshold where net reef erosion exceeds accretion globally — meaning the physical reef structure begins to dissolve faster than corals can build it. This is separate from, and compounding, the bleaching problem.`,
      cards: [
        {
          name: 'Zooxanthellae and the Reef Engine',
          icon: Sun,
          color: BRAND.gold,
          desc: 'Coral polyps host endosymbiotic dinoflagellates (Symbiodinium spp.) in their gastrodermal cells. Algae fix CO₂ via photosynthesis, transferring ~90% of photosynthate to the coral host as lipids and sugars. Corals in return provide algae with shelter, CO₂, and inorganic nutrients (N, P) from polyp metabolism. Nutrient recycling within the coral-algae unit is the basis of the "Darwin paradox" — productivity in nutrient-poor tropical waters.',
          examples: 'Healthy coral: golden-brown from zooxanthellae pigment · Bleached coral: white skeleton visible through transparent tissue · Night feeding: tentacles extended to capture zooplankton, supplementing photosynthetic energy',
        },
        {
          name: 'Reef Structure and Zonation',
          icon: Waves,
          color: BRAND.accent,
          desc: 'Fore-reef slope (most diverse, branching/plate corals, thousands of fish species); reef crest (high wave energy, encrusting corals, coralline algae); reef flat (periodic exposure, rubbly); back-reef/lagoon (calm, sea grass, nursery habitat). Physical mass is mostly dead carbonate; living coral covers only the top few centimetres. Coralline algae cement the structure. A reef framework can be 10–50 m thick, accumulating at ~1 m/1,000 yr.',
          examples: 'Great Barrier Reef: 2,300+ individual reefs, 344,400 km² · Belize Barrier Reef: second largest, UNESCO World Heritage · Indo-Pacific coral triangle: highest coral species diversity (~500 coral species vs. 70 in the Caribbean)',
        },
        {
          name: 'Threats: Bleaching, Acidification, Overfishing',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Thermal bleaching: >1°C above seasonal maximum for weeks triggers zooxanthellae expulsion. Ocean acidification: rising CO₂ reduces carbonate ion concentration, slowing calcification and weakening reef framework. Overfishing of herbivores (parrotfish, surgeonfish, urchins) allows algal overgrowth and phase shifts to algae-dominated reef. Sedimentation and nutrient run-off from land further stress corals by reducing light and promoting algae.',
          examples: '2016 bleaching: >50% of northern Great Barrier Reef corals killed in one season · Phase shift example: Jamaican reefs shifted from coral to algae dominance after overfishing + 1980 hurricane removed urchins · Outlook: IPCC projects 70–90% of reefs lost at 1.5°C warming, >99% at 2°C',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "Coral reefs flourish in warm tropical waters that are extremely low in dissolved nutrients — yet they are the most biologically productive and diverse marine ecosystems. This seems contradictory. What is the correct explanation for this 'Darwin paradox'?",
          a: [
            "Tropical sunlight is so intense that it compensates for low nutrient availability; photosynthesis can proceed at maximum rate regardless of nutrients when light is high enough, allowing exceptional productivity",
            "Coral reefs are actually not productive — they appear diverse because tropical waters have high species richness globally, and reefs serve merely as shelter; primary production occurs offshore and washes onto the reef",
            "Reef communities recycle nutrients internally with near-perfect efficiency through tight symbioses (especially coral-zooxanthellae) and rapid recycling by microbes and invertebrates; little nutrient escapes, so the same atoms cycle through the ecosystem repeatedly rather than being lost to the water column",
            "Deep upwelling beneath reef atolls brings cold, nutrient-rich water up through the porous carbonate framework into the reef ecosystem; this hidden nutrient supply fuels reef productivity without making the surface water appear nutrient-rich",
          ],
          correct: 2,
          explain: "High light alone (A) does not overcome nutrient limitation — phytoplankton experiments consistently show productivity collapses without nitrogen and phosphorus regardless of light. The claim that reefs are not productive (B) is factually wrong; reef gross primary production can exceed 2 g C m⁻² day⁻¹, among the highest of any marine ecosystem. Deep upwelling through atolls (D) does occur as a minor mechanism in some specific atoll systems ('Darcy flow') but is not the general explanation for all reef productivity. The correct answer is C: the coral-zooxanthellae symbiosis is the core mechanism — the algae perform photosynthesis inside the coral tissue and pass nutrients directly to the coral, eliminating the need for external nutrient supply for primary production. Superimposed on this, the entire reef community — bacteria, sponges, tunicates, invertebrates — recycles dead organic matter so rapidly that nutrients are retained within the system rather than being flushed into surrounding ocean. This tight internal cycling is why a reef can be a biological oasis in a nutrient-poor tropical ocean.",
        },
        {
          q: "A coral reef is observed to transition over a decade from 60% coral cover to 5% coral cover and 70% algae cover. Fish are still present. What sequence of events most likely caused this phase shift, and what does it suggest about reef management?",
          a: [
            "Ocean warming bleached the corals; the algae colonised the bare space; the transition is irreversible because algae are more thermally tolerant than corals and will permanently dominate warm-water reefs",
            "Overfishing removed herbivorous fish (parrotfish, surgeonfish) and urchins; without grazers, algae grew unchecked on dead coral surfaces; the shift demonstrates that herbivore recovery — through fishing restrictions — can potentially reverse algal dominance",
            "The reef ran out of calcium carbonate substrate for coral settlement; algae colonised because they can grow on any surface; restoring coral requires artificial substrate installation, which is the primary management tool",
            "Coral spawning failed for a decade due to temperature anomalies preventing gamete release; without new recruits, existing corals aged and died; the algae filled the gap, but the reef will recover naturally once coral spawning resumes",
          ],
          correct: 1,
          explain: "Bleaching can contribute to coral loss, but phase shifts (A) are not inherently irreversible — Caribbean reefs that experienced phase shifts after urchin die-offs in 1983–84 (from a pathogen) showed partial coral recovery where fishing pressure was later controlled. Substrate limitation (C) is not a primary driver of phase shifts; coral larvae can settle on many hard surfaces including coralline algae, and algal overgrowth actually prevents larval settlement, making it a consequence rather than a substrate problem. Spawning failure (D) can reduce recruitment but is not the primary mechanism described. The correct answer is B: the classic herbivore-removal mechanism is the most documented driver of coral-to-algae phase shifts. When parrotfish, surgeonfish, and urchins are removed by overfishing, algae — which continuously produce spores that land on any available surface — grow rapidly over dead coral and bare rock. They then chemically and physically inhibit coral larval settlement. Critically, this phase shift is potentially reversible with appropriate management: fishing restrictions that allow herbivore populations to recover have been shown to tip the competitive balance back toward corals in some systems, particularly when combined with coral restoration and nutrient run-off control.",
        },
        {
          q: "Ocean acidification is described as a threat to coral reefs independent of and compounding with ocean warming. What is the specific mechanism by which acidification threatens reefs, and why is it distinct from the bleaching threat?",
          a: [
            "Acidification kills zooxanthellae directly by denaturing their photosynthetic enzymes at lower pH; without zooxanthellae, corals bleach; acidification therefore causes the same bleaching seen during thermal events but through a chemical rather than thermal pathway",
            "Acidification increases the solubility of calcium carbonate and reduces carbonate ion concentration in seawater; this slows or reverses the calcification by which corals build their skeletons, weakening the reef framework physically — separate from bleaching, which affects the coral's living tissue and energy supply",
            "Acidification causes coral disease by favouring pathogenic bacteria that thrive at lower pH; diseased corals become more susceptible to bleaching during thermal events, so the two threats are linked through a disease pathway",
            "Acidification reduces the salinity tolerance of corals; in lower-pH water, corals cannot regulate their internal ion balance as effectively and die when freshwater input from storms or river run-off lowers local salinity",
          ],
          correct: 1,
          explain: "Acidification does not directly kill zooxanthellae (A) — zooxanthellae bleaching is triggered by temperature-induced reactive oxygen species, not pH; while acidification affects algal photosynthesis at extreme pH values, the bleaching mechanism is thermally driven. Disease pathways (C) are documented in some studies but are not the primary mechanism by which acidification threatens reef structure. Salinity tolerance (D) is not a recognized mechanism of acidification damage. The correct answer is B: coral calcification is a chemical process in which corals extract calcium (Ca²⁺) and carbonate (CO₃²⁻) ions from seawater to deposit aragonite. As the ocean absorbs CO₂, more CO₂ reacts with water to form carbonic acid, which dissociates to produce H⁺ and bicarbonate (HCO₃⁻); this H⁺ then reacts with CO₃²⁻ to form more HCO₃⁻, reducing the concentration of free carbonate ions. With fewer carbonate ions available, corals must spend more energy pumping ions internally to maintain the supersaturation needed for calcification, and the rate of skeleton deposition slows. At sufficiently low pH, aragonite becomes undersaturated and existing reef structures begin to dissolve. This is entirely distinct from bleaching: bleaching affects the coral's energy budget and living tissue; acidification attacks the physical structure of the reef skeleton, reducing the reef's ability to grow upward to keep pace with sea-level rise and recover from damage.",
        },
      ],
    },
  ],
}

export default coralReefs
