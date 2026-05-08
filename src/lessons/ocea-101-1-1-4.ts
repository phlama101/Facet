import { Waves, Globe, Mountain } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const seafloorSediments: Lesson = {
  id: 'ocea-101-1-1-4',
  title: 'Seafloor Sediments and the Ocean Record',
  track: 'oce',
  trackName: 'Oceanography',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 145,
  description: "The ocean floor is the world's best archive. Sediment cores pulled from the deep sea contain layer-by-layer records of climate, evolution, and oceanographic history spanning tens of millions of years.",
  sources: [
    { org: 'NOAA',     title: 'Ocean Sediment Records and Climate History',              url: 'https://www.ncei.noaa.gov/products/paleoclimatology/marine-records' },
    { org: 'USGS',     title: 'Marine Sediment Types and Distribution',                  url: 'https://www.usgs.gov/educational-resources' },
    { org: 'IODP',     title: 'International Ocean Discovery Program — Core Archive',    url: 'https://www.iodp.org/resources/core-repositories' },
    { org: 'OpenStax', title: 'Introduction to Oceanography, Ch. 5 (CC-BY 4.0)',         url: 'https://openstax.org/books/introduction-oceanography' },
    { org: 'NOAA NCEI', title: 'World Ocean Sediment Flux and Deep-Sea Records',        url: 'https://www.ncei.noaa.gov' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Pages of stone beneath the sea',
      body: `Every day, a silent rain of particles falls through the ocean water column and settles on the seafloor. Dead phytoplankton, the shells of foraminifera and coccolithophores, the remains of diatoms and radiolarians, fine clay carried by wind from continents, volcanic ash from eruptions, and even microscopic cosmic dust from space — all accumulate layer by layer on the ocean floor. In the deep ocean far from any continent, sedimentation proceeds at extraordinary geological slowness: 2–20 millimetres per 1,000 years. A layer the thickness of a penny might represent 10,000 years of Earth history.

These sediments, however mundane they sound, are the planet's most complete and continuous archive of its recent geological history. Unlike rocks on land, which are constantly being eroded, weathered, buried, and metamorphosed, the deep-sea sediment record is largely undisturbed — laid down in cool, dark, quiet water and left to accumulate. A sediment core pulled from the deep North Atlantic might contain a continuous record of ocean temperatures, ice volume, atmospheric CO₂, ocean circulation patterns, and plankton evolution extending back 50 million years. No other geological archive matches this: ice cores from Antarctica reach back 800,000 years, tree rings a few thousand, coral records a few centuries. The deep-sea sediment record is in a class of its own.

The international effort to drill and recover these sediment cores — the **Deep Sea Drilling Project** (DSDP, 1968–1983), succeeded by the **Ocean Drilling Program** (ODP, 1985–2003) and the **Integrated Ocean Drilling Program / International Ocean Discovery Program** (IODP, 2003–present) — has produced one of the most productive archives in the history of science. Cores from around the world are stored in refrigerated repositories in the United States, Germany, and Japan, available to any researcher who applies for access.`,
      keyTerms: [
        {
          term: 'Pelagic sediment',
          def: 'Sediment that settles slowly through the water column from the surface ocean, far from any continental source. Includes calcareous ooze (from foraminifera, coccolithophores, pteropods), siliceous ooze (from diatoms and radiolarians), and red clay (fine mineral particles remaining after all biogenic material dissolves). Accumulates at 1–20 mm per 1,000 years.',
        },
        {
          term: 'Calcareous ooze',
          def: 'A pelagic sediment composed predominantly of calcium carbonate (CaCO₃) shells of planktonic foraminifera and coccolithophores. Covers about 48% of the deep ocean floor. Does not form below the carbonate compensation depth (CCD), where the rate of dissolution exceeds the rate of supply and CaCO₃ dissolves before reaching the seafloor.',
        },
        {
          term: 'Carbonate compensation depth (CCD)',
          def: 'The depth (typically 4,000–5,000 m, variable by ocean basin) below which seawater is so corrosive to calcium carbonate that CaCO₃ dissolves faster than it can accumulate. Below the CCD, the seafloor is covered by red clay rather than calcareous ooze. Foraminifera shells above the CCD sink slowly; as they pass through the CCD they dissolve.',
        },
        {
          term: 'Turbidite',
          def: 'A sedimentary deposit formed by a turbidity current — a dense, sediment-laden flow that rushes down the continental slope and fans out across the abyssal plain. Turbidites are recognisable as graded beds (coarser at the base, finer at the top) interbedded with fine pelagic sediment. They can transport continental sediment thousands of kilometres into the deep ocean.',
        },
        {
          term: 'δ¹⁸O (oxygen isotope ratio)',
          def: 'The ratio of the heavy oxygen isotope (¹⁸O) to the lighter (¹⁶O) in a sample, expressed relative to a standard. In foraminifera shells, δ¹⁸O reflects both ocean temperature and the volume of ice on land (which preferentially sequesters ¹⁶O). Changes in δ¹⁸O down a sediment core record glacial-interglacial cycles over millions of years.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Sediment types, distribution, and the ocean record',
      body: `**Four major sediment types.** Deep-sea sediments are divided into four broad types based on their origin and composition. **Lithogenous (terrigenous) sediment** consists of mineral grains eroded from continents and transported to the sea by rivers, wind, or ice. River-borne sediment is deposited mostly on continental shelves and slopes; the finest particles — clay minerals — can travel far across the open ocean in suspension or be swept down by turbidity currents. Wind-blown (aeolian) dust from deserts and volcanic ash from eruptions falls directly onto the deep ocean surface and slowly settles. **Biogenous sediment** is composed of the skeletal remains of marine organisms. **Calcareous ooze** — built from the calcium carbonate shells of foraminifera, coccolithophores, and pteropods — is the most widespread deep-sea sediment, covering about 48% of the seafloor. **Siliceous ooze** — built from the silica (SiO₂) skeletons of diatoms (in cold, productive waters) and radiolarians (in warmer, tropical waters) — covers about 15% of the seafloor, concentrated in the Antarctic Ocean and an equatorial belt in the Pacific. **Hydrogenous sediment** precipitates directly from seawater: manganese nodules (polymetallic nodules containing manganese, iron, nickel, cobalt, and copper), ferromanganese crusts on seamounts, and evaporites in restricted marine basins. **Cosmogenous sediment** — microscopic spherules of extraterrestrial origin — is a minor but fascinating component found in red clay.

**The carbonate compensation depth (CCD).** One of the most important controls on deep-sea sediment distribution is the CCD — the depth below which seawater dissolves calcium carbonate (CaCO₃) faster than it can settle. Above the CCD, calcareous ooze accumulates because the supply of shells from plankton above exceeds the rate of dissolution. Below the CCD, the dissolution rate exceeds supply, and calcareous material disappears, leaving only the most dissolution-resistant sediments: red clay and siliceous ooze. The CCD varies by ocean basin and over geological time. It is shallower in the Pacific (~3,500 m) than the Atlantic (~4,500 m), in part because Pacific bottom water is older and more saturated with CO₂ (which makes seawater more acidic and corrosive to carbonate). The CCD also varies on geological timescales: during glacial periods, when atmospheric CO₂ was lower, the CCD deepened, allowing calcareous sediment to accumulate at greater depths. These depth variations are preserved in the sediment record.

**The sediment archive: reading climate history.** The power of deep-sea sediment cores for reconstructing past climate was first demonstrated by Cesare Emiliani in the 1950s, who measured the oxygen isotope ratio (δ¹⁸O) in foraminiferal shells from sediment cores and showed that it oscillated regularly — recording the glacial-interglacial cycles of the Pleistocene ice ages. The technique works because when foraminifera build their shells, they incorporate oxygen isotopes in proportions that reflect the temperature of the water and the volume of ice on land. Water molecules containing the lighter isotope ¹⁶O evaporate more readily and are preferentially sequestered in glacial ice sheets; during glacials, the remaining ocean water is enriched in ¹⁸O, and foraminifera shells built then record a high δ¹⁸O value. During interglacials, ice melts, returns ¹⁶O to the ocean, and δ¹⁸O decreases. The oscillations in δ¹⁸O down a sediment core are a direct record of ice volume and temperature change over millions of years — the **benthic δ¹⁸O stack** compiled from hundreds of cores around the world shows 50+ glacial cycles over the last 5 million years.

Beyond temperature, sediment cores preserve records of **ocean circulation** (through the chemistry and species composition of foraminiferal assemblages), **productivity** (through the abundance of biogenic silica and organic carbon), **sea level** (through the timing of turbidite deposition on continental margins), **volcanic activity** (through ash layers, which also provide precise date markers by correlating with dateable eruptions), **cosmic events** (through iridium enrichments, such as the global layer marking the Cretaceous-Paleogene mass extinction 66 million years ago), and **evolutionary change** (through the appearance, diversification, and extinction of planktonic species).

**Turbidites and catastrophic events.** While pelagic sedimentation is slow and continuous, turbidity currents are episodic and dramatic. A turbidity current is triggered when a large volume of sediment on a continental slope — accumulated gradually by normal sedimentation, or suddenly deposited by a submarine landslide, earthquake, or storm wave loading — becomes unstable and flows rapidly downslope as a dense, turbid mixture of sediment and water. These currents can reach speeds of 25 km/h and travel thousands of kilometres before their sediment load settles out in a characteristic **graded bed** (the Bouma sequence): coarse sand at the base (deposited when the current slows), grading up through finer sand and silt to clay at the top. The 1929 Grand Banks earthquake off Newfoundland generated a turbidity current that snapped twelve transatlantic telegraph cables in sequence over a ten-hour period, allowing geologists to calculate the current's speed as it travelled 600 km down the continental slope. Turbidite beds interbedded with pelagic sediment serve as markers of past earthquake and submarine landslide events.

**Economic importance of deep-sea sediments.** Deep-sea sediments are increasingly of economic interest. **Polymetallic nodules** — potato-sized lumps of manganese, iron, nickel, cobalt, and copper that grow layer by layer at rates of a few millimetres per million years — litter the abyssal plain of the Pacific Ocean in concentrations that, if harvested, could supply global demand for these metals for centuries. **Cobalt-rich ferromanganese crusts** on seamount flanks contain concentrations of cobalt, platinum, and rare earth elements far above crustal averages. **Methane hydrates** — ice-like structures trapping methane in the sediment at high pressure and low temperature along continental slopes — represent the largest reservoir of natural gas on Earth, though their extraction remains technically challenging. These resources are the subject of increasing geopolitical interest, and their potential extraction raises major environmental concerns.`,
      cards: [
        {
          name: 'Sediment Types & Distribution',
          icon: Mountain,
          color: BRAND.jade,
          desc: 'Calcareous ooze: 48% of seafloor, above CCD (~3,500–4,500 m), foraminifera + coccolithophores. Siliceous ooze: ~15%, polar and equatorial upwelling zones, diatoms + radiolarians. Red clay: below CCD on abyssal plains, the most widespread but least studied. Turbidites: graded beds from continental slope failures, can travel >1,000 km across abyssal plains.',
          examples: 'Pacific equatorial belt: siliceous ooze from high productivity · North Atlantic: calcareous ooze, relatively shallow CCD (~4,500 m) · Red clay: central Pacific abyssal plains below CCD',
        },
        {
          name: 'δ¹⁸O and Climate Records',
          icon: Waves,
          color: BRAND.accent,
          desc: 'Oxygen isotope ratio in foraminiferal shells records both temperature and ice volume. High δ¹⁸O = glacial (ice sequesters light ¹⁶O, ocean enriched in ¹⁸O). Low δ¹⁸O = interglacial (ice melts, ¹⁶O returns to ocean). The LR04 benthic stack (compiled from 57 cores globally) resolves 50+ glacial cycles over 5.3 million years. Orbital cycles drive the pattern (Milankovitch cycles: 100 kyr, 41 kyr, 23 kyr).',
          examples: 'Last Glacial Maximum (21,000 yr ago): δ¹⁸O ~1.8‰ heavier than today · Pliocene (3 Ma): ocean ~2–3°C warmer, sea level ~25 m higher · K-Pg boundary layer: iridium anomaly at 66 Ma in cores worldwide',
        },
        {
          name: 'Deep-Sea Resources',
          icon: Globe,
          color: BRAND.amethyst,
          desc: 'Polymetallic nodules: Mn, Fe, Ni, Co, Cu; grow 1–10 mm/Myr; densest in the Clarion-Clipperton Zone (Pacific). Cobalt-rich ferromanganese crusts: seamount flanks, high Co, Pt, REEs. Methane hydrates: continental slopes, largest CH₄ reservoir on Earth, potential energy source but extraction risk (slope destabilisation, greenhouse gas release). All subject to developing international seabed law under UNCLOS.',
          examples: 'Clarion-Clipperton Zone: ~17 billion tonnes nodules, largest known deposit · Gas hydrate estimates: 1,000s of Gt carbon equivalent · ISA (International Seabed Authority): governs deep-sea mining rights',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Below the carbonate compensation depth (CCD), calcareous ooze is absent from the seafloor even in areas where calcareous plankton are abundant at the surface. What happens to the calcareous shells as they sink through the water column below the CCD?',
          a: [
            'Below the CCD, the temperature is too low for calcareous shells to maintain their mineral structure; they undergo phase transformation from calcite to a softer mineral (aragonite) and disintegrate mechanically before reaching the seafloor',
            'Below the CCD, seawater becomes undersaturated with respect to calcium carbonate; the carbonate shells of foraminifera and other organisms dissolve as they descend because the dissolution rate exceeds the rate of supply, leaving only non-carbonate material on the seafloor',
            'The CCD represents a pressure threshold at which the shells are crushed by hydrostatic pressure, releasing calcium and carbonate ions that remain dissolved in the water column rather than settling to the seafloor',
            'Below the CCD, shells are consumed by filter-feeding organisms that are specially adapted to cold, deep water and can digest carbonate minerals that organisms at shallower depths cannot',
          ],
          correct: 1,
          explain: 'Temperature-driven phase transformation (A) does not occur — both calcite and aragonite are stable carbonate minerals at low temperatures; temperature alone does not dissolve carbonate shells in the deep ocean. Mechanical crushing (C) does not occur — calcareous shells are not crushed by hydrostatic pressure; pressure of the deep ocean is hydrostatic (equal in all directions) and does not preferentially fracture small shells, though it does affect carbonate chemistry indirectly by increasing CO₂ solubility. Biological consumption (D) does not explain the absence of carbonate below the CCD — while some organisms do consume carbonate, the CCD pattern is a basin-wide chemical phenomenon unrelated to filter-feeder distributions. The correct answer is B: the solubility of calcium carbonate in seawater increases with depth (and therefore with pressure and decreasing temperature), because cooler water can dissolve more CO₂, which makes the water more acidic (carbonic acid, H₂CO₃) and corrosive to CaCO₃; above the CCD, seawater is supersaturated with respect to CaCO₃ and shells accumulate intact; below the CCD, seawater is undersaturated, and the shells dissolve as they sink — at rates faster than the supply from above — leaving the seafloor free of calcareous material; what remains is the more dissolution-resistant clay minerals and silica, forming red clay or siliceous ooze.',
        },
        {
          q: 'A sediment core from the deep North Pacific shows alternating layers of calcareous ooze and red clay repeated many times over 5 million years. What does this alternating pattern indicate?',
          a: [
            'The alternation records cycles of tectonic uplift and subsidence of the seafloor: when the seafloor was shallower (above the CCD), calcareous ooze accumulated; when it subsided below the CCD, red clay accumulated',
            'The alternation records changes in surface ocean productivity: calcareous ooze layers formed when warm interglacial conditions increased phytoplankton blooms; red clay layers formed during cold glacial periods when productivity was low',
            'The alternation records fluctuations in the depth of the carbonate compensation depth (CCD): during periods when the CCD deepened (e.g. glacials), calcareous material accumulated even at the site depth; when the CCD shoaled above the site depth, carbonate dissolved and only red clay accumulated',
            'The alternation records periodic eruptions of nearby seamounts: calcareous layers are volcanic ash mixed with shell fragments, and red clay layers are hydrothermally altered basalt between eruptions',
          ],
          correct: 2,
          explain: 'Tectonic uplift and subsidence (A) is a real process but operates on longer timescales (tens to hundreds of millions of years) and is not cyclic at the frequency seen in Pleistocene-Pliocene sediment records; a single submerging site would show a one-way transition, not repeated oscillations. Productivity cycles (B) contribute to organic carbon variations in sediment but do not directly control the calcareous/red clay alternation — the key control is CCD depth, not productivity alone; high productivity can cause CaCO₃ to accumulate even below the CCD if supply outpaces dissolution, but this is a secondary effect. Seamount eruptions (D) do produce ash layers, but these are thin, episodic markers, not repeated thick alternating sequences. The correct answer is C: the CCD depth fluctuates in response to oceanographic and climatic changes; during glacial periods, lower atmospheric CO₂ means less CO₂ dissolved in seawater, making the water less corrosive to carbonate, which deepens the CCD and allows calcareous ooze to accumulate at greater depths; during interglacials, higher CO₂ shallows the CCD; if a site is near the CCD, it will alternately be above it (calcareous ooze) and below it (red clay) as the CCD fluctuates through glacial-interglacial cycles, producing the repeating alternation observed.',
        },
        {
          q: 'How did the 1929 Grand Banks turbidity current demonstrate the speed and scale of submarine sediment flows, and what physical process causes a turbidity current to travel so far from its source?',
          a: [
            'The Grand Banks turbidity current was tracked by acoustic instruments that detected its sound signature as it moved; the current\'s speed was calculated from the timing of the acoustic signal reaching different stations on the seafloor',
            'The Grand Banks turbidity current was photographed by underwater cameras installed along the continental slope; its speed was calculated by comparing the time stamps on photographs showing the advancing sediment cloud',
            'The Grand Banks earthquake triggered a submarine landslide that became a turbidity current; it snapped transatlantic telegraph cables in sequence along the seafloor over several hours, allowing its speed (~25 km/h) to be calculated; the current travelled ~600 km because the dense sediment-water mixture is more dense than the surrounding water and flows downslope under gravity, maintaining momentum over long distances like an underwater avalanche',
            'The Grand Banks turbidity current was detected by a ship that happened to be anchored in its path; the ship was dragged off position by the current and, from the rate of cable paying out and the known water depth, geologists calculated the current\'s speed and trajectory',
          ],
          correct: 2,
          explain: 'Acoustic instruments (A) were not used in 1929 — this technology did not exist at the time; the discovery of the turbidity current was entirely reconstructed after the fact from the cable damage record. Underwater cameras (B) did not exist in 1929 and were not deployed on the seafloor; the entire reconstruction was made from the cable record. Ship dragging (D) is not how turbidity currents interact with ships — a turbidity current flows on the seafloor and would not move a deeply anchored ship; the reconstruction was from cable data. The correct answer is C: the magnitude 7.2 earthquake off Newfoundland triggered a massive submarine landslide on the continental slope, which immediately became a dense, sediment-laden turbidity current; this current severed twelve transatlantic telegraph cables in sequence; each cable break was time-stamped, and the spacing of the cables allowed geologists to calculate that the current had travelled at approximately 25 km/h (7 m/s) at its fastest point, later slowing as it spread across the abyssal plain; the physical mechanism is density-driven gravity flow — the dense mixture of sediment and water is heavier than the surrounding clear seawater and flows continuously downslope under gravity, maintaining turbulent suspension that keeps the sediment in motion over great distances, analogous to a subaqueous avalanche.',
        },
      ],
    },
  ],
}

export default seafloorSediments
