import { Flame, Mountain, Globe } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const volcanicLandforms: Lesson = {
  id: 'geol-101-1-5-1',
  title: 'Volcanic Landforms',
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 150,
  description: "A volcano's silhouette is its autobiography. The gentle dome of Mauna Loa, the steep cone of Fuji, the sunken depression of Yellowstone — each shape is the accumulated record of magma composition and eruption history.",
  sources: [
    { org: 'USGS',        title: 'Volcanic Landforms and Eruption Styles (Public Domain)', url: 'https://www.usgs.gov/programs/VHP' },
    { org: 'USGS',        title: 'Hawaiian Volcano Observatory',                           url: 'https://www.usgs.gov/observatories/hvo' },
    { org: 'NPS',         title: 'Geology Fieldnotes — Volcanic Features',                 url: 'https://www.nps.gov/subjects/geology/volcanic-features.htm' },
    { org: 'Smithsonian', title: 'Global Volcanism Program',                               url: 'https://volcano.si.edu' },
    { org: 'OpenStax',    title: 'Physical Geology, 2nd ed. (CC-BY 4.0)',                  url: 'https://openstax.org/books/physical-geology-2e' },
  ],
  sections: [
    {
      type: 'intro',
      title: "Reading a volcano's shape",
      body: `A geologist who has never visited a volcano can read its eruption history from a photograph of its silhouette. The barely perceptible 5° slopes of Mauna Loa — a dome so broad and gentle it looks more like a hill than a mountain from a distance — communicate instantly: basaltic magma, fluid lava flows, effusive eruptions, hotspot origin. The near-perfect 35° cone of Mt. Fuji — steep, symmetrical, snow-capped, the archetypal volcano shape — says: andesitic magma, alternating lava and ash layers, moderately explosive eruptions, subduction arc. The flat, bowl-shaped depression of the Yellowstone caldera — a hole in the landscape where a mountain used to be, 72 km (45 mi) across — says: rhyolitic magma, cataclysmic collapse, continental hotspot. A volcano's shape is not arbitrary. It is the physical consequence of thousands to millions of years of eruptions, each one depositing material according to the rules set by magma composition.

The key variable is **silica content**. Lesson 1.3.2 introduced the felsic-mafic spectrum: felsic magmas are silica-rich (>65% SiO₂), mafic magmas are silica-poor (~45–52%). Silica content controls viscosity — the resistance of a fluid to flow. Basaltic magma is like hot syrup: it flows easily, travels long distances from the vent before solidifying, and builds low, broad landforms. Rhyolitic magma is like cold tar: it barely moves, piles up near the vent, traps dissolved gases, and when pressure exceeds the strength of the overlying rock, erupts catastrophically. Every volcanic landform on Earth is an expression of where its magma sits on this spectrum.

Module 1.5 applies the tools of Modules 1.1–1.4 to the visible landscape. This lesson maps the five major volcanic landform types to their magma compositions and tectonic settings. Lessons 1.5.2–1.5.4 will extend this approach to the erosional, fluvial, and glacial landscapes that shape Earth's non-volcanic surface.`,
      keyTerms: [
        {
          term: 'Shield volcano',
          def: "A broad, gently sloping volcanic edifice built by repeated effusive eruptions of low-viscosity basaltic lava. Named for its resemblance to a warrior's shield lying flat on the ground. Slopes 2–10°. Despite gentle slopes, shield volcanoes are among the largest volcanic structures on Earth by volume. Examples: Mauna Loa (Hawaii), Skjaldbreiður (Iceland).",
        },
        {
          term: 'Stratovolcano (composite volcano)',
          def: "A steep, conical volcanic edifice built by alternating layers of lava flows and pyroclastic material (ash, cinders, volcanic bombs). Formed by intermediate to felsic magma with moderately to highly explosive eruptions. Slopes 25–35°. The most iconic volcano shape. Examples: Mt. Fuji, Mt. Rainier, Mt. St. Helens, Mt. Pinatubo, Vesuvius.",
        },
        {
          term: 'Cinder cone',
          def: "A small, steep-sided volcanic cone built entirely from pyroclastic fragments (cinders, scoria, lapilli) ejected from a single vent. Typically forms in a single eruptive episode lasting weeks to years. Rarely exceeds 300 m (984 ft) height. The simplest and most common volcanic landform. Examples: Parícutin (Mexico, grew 424 m (1391 ft) in 9 years), Sunset Crater (Arizona).",
        },
        {
          term: 'Caldera',
          def: "A large, roughly circular depression formed by the collapse of a volcanic edifice into a partially emptied magma chamber. Distinguished from a crater (which forms by explosion) by its origin through subsidence. Calderas range from 1 km (0.6 mi) to over 100 km (62 mi) across. Examples: Crater Lake (Oregon, 10 km (6.2 mi)), Yellowstone (72×55 km (34 mi)), Campi Flegrei (Italy).",
        },
        {
          term: 'Lava plateau',
          def: "A broad, flat landform built by repeated eruptions of very fluid basaltic lava from fissures rather than a central vent. Individual flows are thin but extensive; successive flows stack to great thickness over large areas. Examples: Columbia River Plateau (210,000 km² (81,081 sq mi)), Deccan Plateau (India), Iceland's interior highlands.",
        },
      ],
    },
    {
      type: 'concept',
      title: 'Five volcanic landforms',
      body: `**The silica-viscosity-eruption chain.** Every volcanic landform ultimately traces back to a single variable: silica content. In basaltic magma (~47–52% SiO₂), the silicon-oxygen tetrahedra that make up the silicate structure are largely unlinked, allowing the melt to flow freely. In rhyolitic magma (~72–77% SiO₂), extensive cross-linking of tetrahedra creates a highly polymerised, viscous melt — more like glass than liquid. Viscosity has two critical consequences. First, it controls how far lava travels from the vent: low-viscosity basalt can flow tens to hundreds of kilometres; high-viscosity rhyolite barely moves. Second, it controls whether dissolved gases (primarily water vapour, CO₂, and SO₂) can escape: in fluid basalt, gas bubbles rise and escape easily; in viscous rhyolite, gas is trapped as pressure builds, ultimately driving explosive fragmentation of the magma into ash, cinders, and pyroclastic flows. The entire spectrum of volcanic landforms flows from this single chain.

**Shield volcanoes — built by flow.** Shield volcanoes are the product of sustained effusive volcanism from a central vent or cluster of vents, fed by low-viscosity basaltic magma. Each eruption adds thin sheets of lava that flow far from the vent and cool as thin layers. Over hundreds of thousands to millions of years and thousands of individual eruptions, these layers accumulate into an enormous, low-profile edifice. **Mauna Loa** on the Big Island of Hawaii is the largest volcano on Earth by volume — approximately 75,000 km³ (17,992 cu mi) of basalt. Measured from its base on the ocean floor to its summit, it rises 9 km (5.6 mi) — taller than Mt. Everest measured from sea level. Yet its flanks are so gentle that driving up them feels like driving up a modest hill. The Hawaiian shield volcanoes have three eruptive zones: summit eruptions that build the caldera and crater area, and two rift zones (linear fractures in the edifice) along which flank eruptions occur. Kīlauea, on Mauna Loa's southeastern flank, erupts almost continuously through this rift system.

**Stratovolcanoes — the iconic cone.** Stratovolcanoes are built by the alternation of two eruptive products: **lava flows** (which form strong, resistant layers) and **pyroclastic deposits** — loose, easily eroded material including ash, lapilli (pea-sized fragments), volcanic bombs (large ejected blobs that solidify in flight), and cinders (scoriaceous fragments). The lava flows armour the cone and hold it together; the pyroclastic layers fill in and build up the slopes. The result is a steep, layered structure — hence "composite volcano" — that can grow to 3,000–4,000 m (9843–13124 ft) above its base in geologically short time. Stratovolcanoes are associated with intermediate (andesitic) magma at subduction arcs, where the water-fluxed melting process produces magmas with higher silica content than pure mantle-derived basalt. **Mt. St. Helens** provided the most-studied example of stratovolcano behaviour in the modern era: on 18 May 1980, a magnitude 5.1 earthquake triggered the collapse of the north flank, decompressing the magma chamber and producing a lateral blast that devastated 600 km² (232 sq mi) of forest. The eruption removed 400 m (1312 ft) from the summit and deposited ash across 11 states.

**Cinder cones — fast and simple.** Cinder cones are the simplest and most numerous volcanic landform on Earth. They form when moderately gas-rich basaltic to andesitic magma erupts from a single vent in a sustained fountaining or Strombolian eruption, ejecting fragments into the air. These fragments cool during flight and fall as cinders (scoria) around the vent, building a conical pile with slopes at the angle of repose (~33°). Most cinder cones form in a single eruptive episode lasting days to years, then go extinct — they are **monogenetic** (single-eruption) volcanoes. **Parícutin** in Mexico is the most famous example: it erupted from a cornfield in 1943, grew 424 m (1391 ft) in its first year, and built a 424-m cone over 9 years of nearly continuous activity before going permanently silent in 1952. The eruption buried two villages and the witnesses who saw it begin from a flat field are among the only people in history to watch a new volcano grow from scratch. Cinder cones often cluster in volcanic fields — the San Francisco Volcanic Field in Arizona contains over 600 cinder cones.

**Calderas — collapse, not explosion.** Calderas are widely misunderstood as explosion craters. They are not. A caldera forms when a large volume of magma is erupted in a short time, partially emptying the magma chamber below. The overlying volcanic edifice loses its support and collapses inward — a subsidence event, not a blast. The resulting depression can be many times larger than any explosion could excavate. **Crater Lake** in Oregon formed ~7,700 years ago when Mt. Mazama erupted approximately 50 km³ (12.0 cu mi) of magma in a major eruption and then collapsed into the evacuated chamber, creating a 10-km caldera that subsequently filled with water. The eruption was witnessed by Indigenous peoples of the Pacific Northwest, whose oral traditions describe the collapse. **Yellowstone** is the largest caldera system in North America — 72 km (45 mi) × 55 km (34 mi) — formed by a supereruption 640,000 years ago that ejected ~1,000 km³ (240 cu mi) of magma. The caldera floor has since been partially filled by subsequent lava flows and is still actively deforming as the magma system below remains active. **Campi Flegrei** (Phlegraean Fields) west of Naples, Italy, is a supervolcanic caldera that has shown episodes of uplift and unrest and poses significant risk to the surrounding region.

**Lava plateaus — fissure flooding.** Rather than erupting from a central vent, some volcanic systems erupt from long fissures — linear cracks in the crust that can extend tens to hundreds of kilometres. When very fluid basalt erupts from such fissures in large volumes, it does not pile up into a cone but instead floods the surrounding landscape, filling valleys and low areas and building a broad, flat plateau of stacked lava flows. The **Columbia River Basalt Group** of the Pacific Northwest erupted between 17 and 6 million years ago from a system of fissures in what is now Oregon, Washington, and Idaho, covering 210,000 km² (81,081 sq mi) with basalt up to 3.5 km (2.2 mi) thick — the product of the Yellowstone plume head arriving beneath North America. Individual flows travelled up to 600 km (373 mi) from the vent system. Iceland's interior is an active modern example: fissure eruptions periodically flood sections of the interior with basalt, building the flat lava plains visible from any flight over the island.

**Reading compound volcanic landscapes.** Real volcanic regions rarely contain just one landform type. The Cascade Range contains stratovolcanoes (Mt. Rainier, Mt. Hood, Mt. Shasta), lava fields, cinder cone clusters, and the caldera of Crater Lake — all reflecting different phases and locations of subduction-zone magmatism. The Snake River Plain is a lava plateau (basalt fissure eruptions) dotted with cinder cones, produced by the Yellowstone plume as the North American Plate moved over it. Iceland combines shield volcanoes (Skjaldbreiður), fissure systems (Laki, which erupted in 1783 and killed a quarter of Iceland's population through famine and fluorine poisoning), and the emergent mid-ocean ridge. Reading a volcanic landscape means identifying each feature type, inferring the magma composition that built it, and reconstructing the tectonic history that placed that magma source there.`,
      interaction: {
        type: 'scientific-diagram' as const,
        id: 'volcanic-cone-types',
        caption: 'Three volcanic morphologies compared: shield volcano (gentle, basaltic effusive), stratovolcano (steep, alternating lava and ash), and cinder cone (small, scoriaceous, monogenetic). Profiles are schematic, not to scale with each other.',
        credit: 'USGS / Schmincke (2004)',
      },
      cards: [
        {
          name: 'Effusive Landforms',
          icon: Flame,
          color: BRAND.ruby,
          desc: "Low-silica basalt → low viscosity → lava flows far from vent → gentle slopes. Shield volcanoes: slopes 2–10°, enormous volume. Mauna Loa: 75,000 km³ (17,992 cu mi), 9 km (5.6 mi) from seafloor — tallest mountain on Earth from base to summit. Kīlauea: near-continuous eruption through rift zones. Lava plateaus: fissure eruptions flood hundreds of thousands of km². Columbia River Basalt: 210,000 km² (81,081 sq mi), up to 3.5 km (2.2 mi) thick, flows 600 km (373 mi) from vent. Iceland's interior: active fissure fields, 1/3 of Earth's recent surface lava.",
          examples: 'Mauna Loa: largest volcano by volume · Kīlauea: near-continuous · Columbia River Basalt: 210,000 km² (81,081 sq mi) · Laki 1783: fissure eruption',
        },
        {
          name: 'Explosive Landforms',
          icon: Mountain,
          color: BRAND.coral,
          desc: "High-silica andesite/rhyolite → high viscosity → gas trapped → explosive. Stratovolcanoes: steep cones (25–35°), alternating lava + pyroclastic layers, most iconic volcano shape. Fuji, Rainier, St. Helens (1980 eruption removed 400 m (1312 ft) from summit), Pinatubo, Vesuvius. Cinder cones: monogenetic, form in days-years, slopes ~33°. Parícutin: grew 424 m (1391 ft) from a cornfield in 1943. Calderas: collapse into emptied magma chamber — not explosion holes. Crater Lake: 10 km (6.2 mi), 7,700 BP. Yellowstone: 72×55 km (34 mi), last eruption 640 Ka.",
          examples: 'Mt. St. Helens: 1980 lateral blast · Parícutin: new cone 1943 · Crater Lake: caldera collapse · Yellowstone: 72×55 km (34 mi) caldera',
        },
        {
          name: 'Tectonic Signatures',
          icon: Globe,
          color: BRAND.jade,
          desc: "Oceanic hotspot → shield volcanoes (Hawaii: basalt, effusive, broad domes). Flood basalt/plume head → lava plateau (Columbia River Basalt: Yellowstone plume; Deccan Traps: Réunion plume). Subduction arc, oceanic-continental → stratovolcanoes (Cascades, Andes, Kamchatka, Japan). Continental hotspot → calderas + rhyolite (Yellowstone) + Snake River Plain basalt (plume tail). Monogenetic volcanic fields → cinder cone clusters (San Francisco Volcanic Field: 600+ cones). Mixed settings → compound landscapes.",
          examples: 'Hawaii: hotspot → shields · Cascades: subduction → stratovolcanoes · Yellowstone: continental hotspot → calderas · Iceland: ridge + hotspot',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "Mauna Loa (Hawaii) has slopes of approximately 5° and a volume of ~75,000 km³ (17,992 cu mi). Mt. St. Helens (Washington) has slopes of ~30° and is dramatically smaller. What accounts for this fundamental difference in volcanic shape?",
          a: [
            "Mauna Loa is much older than Mt. St. Helens and has been eroded to a gentle profile over millions of years; Mt. St. Helens is geologically young and still retains its original steep constructional form",
            "Mauna Loa erupts low-viscosity basaltic lava that flows tens to hundreds of kilometres from the vent before solidifying, building a broad, gently sloping shield; Mt. St. Helens erupts higher-viscosity andesitic to dacitic magma that piles up near the vent and interbeds with pyroclastic deposits, building a steep composite cone",
            "The difference is eruption frequency — Mauna Loa erupts so often that successive flows smooth out the flanks; Mt. St. Helens erupts rarely, so each episode adds a steep discrete layer without subsequent smoothing",
            "Mauna Loa sits directly above its magma source (vertical supply) which spreads lava evenly in all directions; Mt. St. Helens receives magma from an angled subduction zone conduit which builds the cone asymmetrically into a steep shape",
          ],
          correct: 1,
          explain: "Erosion (A) cannot flatten a volcano from steep to 5° slopes — even ancient shield volcanoes like those in the Hawaiian chain retain their gentle form because they were built with low slopes from the start; and some Hawaiian volcanoes are older than Mt. St. Helens yet still retain shield profiles. The correct answer is B: the controlling variable is magma viscosity, which is set by silica content; Mauna Loa erupts basalt (~47–52% SiO₂), which has low viscosity and flows far from the vent — each flow travels tens of kilometres and adds a thin, nearly horizontal layer to the edifice; accumulated over hundreds of thousands of eruptions, this produces the broad, gently sloping shield shape; Mt. St. Helens erupts andesitic to dacitic magma (~60–65% SiO₂) with much higher viscosity — flows are shorter and thicker, and a large fraction of the erupted material is fragmented into pyroclastic debris that falls near the vent; the combination of short lava flows and proximal pyroclastic deposits builds the steep layered cone. Eruption frequency (C) is not the primary control — Hawaii's frequent eruptions did not create gentle slopes; the lava's fluidity did. The geometry of the magma supply (D) does not determine slope angle — the slope is set by how far the lava travels, which depends on viscosity.",
        },
        {
          q: "Crater Lake in Oregon occupies a circular depression ~10 km (6.2 mi) across and ~600 m (1969 ft) deep. It formed approximately 7,700 years ago when the ancient volcano Mt. Mazama underwent a major eruption. What process specifically created the depression, and why is it called a caldera rather than a crater?",
          a: [
            "The eruption of Mt. Mazama was so large and explosive that it blasted away the top of the volcano, excavating the circular depression by force; it is called a caldera rather than a crater because of its exceptional size — calderas are defined as explosion holes larger than 1 km (0.6 mi)",
            "The magma chamber beneath Mt. Mazama partially emptied during a large pyroclastic eruption; without support from below, the overlying volcanic edifice collapsed inward by subsidence into the evacuated space, forming a caldera — a collapse depression, not an explosion hole; subsequent smaller eruptions built Wizard Island within the caldera before it filled with water",
            "Glacial erosion during the last ice age carved a bowl into the summit of Mt. Mazama; the 7,700-year-old eruption removed overlying lava, exposing the glacial basin; it is called a caldera because it occurs at a volcanic summit",
            "The depression is a tectonic graben — a block of crust that dropped between parallel normal faults when the crust beneath Mt. Mazama extended during a period of regional rifting; subsequent volcanic activity partly filled the graben before water accumulated",
          ],
          correct: 1,
          explain: "Calderas are not formed by explosion (A) — an explosion excavates material outward and upward, which could not produce the circular, inward-sloping walls of a caldera; the term 'caldera' (from the Spanish/Portuguese for 'cauldron') specifically refers to a collapse feature, not an explosion pit; a crater is an explosion hole at a vent, which is much smaller. The correct answer is B: during the major eruption of Mt. Mazama approximately 7,700 years ago, ~50 km³ (12.0 cu mi) of magma was rapidly expelled as pyroclastic material; this rapid evacuation of the magma chamber removed the structural support for the overlying edifice; the summit and upper flanks of the volcano collapsed inward and downward into the partially emptied chamber in a subsidence event; the circular depression formed by this collapse is the caldera; after the main collapse, smaller eruptions built Wizard Island — the cinder cone visible in today's lake — before the caldera filled with rainwater and snowmelt to become Crater Lake. Glacial erosion (C) did occur at Mt. Mazama but shaped the pre-eruption flanks, not the caldera itself — the caldera formed in the eruption and collapse event. The Cascade Range is a subduction-related volcanic arc, not a rift zone, and the depression is clearly volcanic and circular, inconsistent with a tectonic graben (D).",
        },
        {
          q: "A volcanic region contains three distinct features: (1) a broad, gently sloping dome of dark basalt with 4° flanks; (2) a chain of steep symmetrical cones with andesitic lava flows and thick layers of ash; (3) a flat plain of stacked horizontal basalt flows extending 200 km (124 mi) from a system of ancient linear fractures. Which combination of tectonic settings most likely produced these three features?",
          a: [
            "Feature 1: subduction volcanic arc; Feature 2: oceanic hotspot; Feature 3: continental rift valley",
            "Feature 1: oceanic hotspot; Feature 2: subduction volcanic arc; Feature 3: flood basalt from a mantle plume head erupted through fissures",
            "Feature 1: continental hotspot producing rhyolite caldera; Feature 2: transform boundary generating frictional melting; Feature 3: back-arc basin behind a subduction zone",
            "Feature 1: divergent spreading centre; Feature 2: continental hotspot; Feature 3: the accretionary wedge of a subduction zone",
          ],
          correct: 1,
          explain: "Subduction arcs (A option 1) produce andesitic to dacitic magma that builds stratovolcanoes — not broad basaltic shields; oceanic hotspots produce basaltic shields, not steep andesitic cones; continental rifts can produce basalt but in fissure or monogenetic settings, not the broad stacked-flow plateau described. The correct answer is B: Feature 1 (broad basaltic dome with 4° slopes) matches a shield volcano produced by an oceanic hotspot — the fluid basalt flows far from the vent building gentle slopes; Feature 2 (steep andesitic cones with ash layers) matches a subduction volcanic arc — water-fluxed melting produces intermediate to felsic magma that erupts explosively, building stratovolcanoes with steep slopes and pyroclastic interlayers; Feature 3 (flat plain of stacked basalt from linear fractures) matches a flood basalt province produced by a mantle plume head erupting through a fissure system — individual flows are thin and travel far, stacking into a flat plateau. Continental hotspots produce rhyolitic calderas (not shields), transform boundaries produce no volcanism, and accretionary wedges are not volcanic — eliminating options C and D.",
        },
        {
          q: "Mt. St. Helens erupted catastrophically on 18 May 1980, when a magnitude 5.1 earthquake triggered the collapse of the volcano's north flank. The collapse was immediately followed by a lateral blast that devastated 600 km² (232 sq mi) of forest and removed 400 m (1312 ft) from the summit. Why did the flank collapse trigger such a violent eruption, and what does this mechanism reveal about the nature of silica-rich magma?",
          a: [
            "The earthquake shook the volcano hard enough to crack open the magma chamber, allowing the magma to drain rapidly through the new fractures and erupt from the lateral vent created by the collapse",
            "The flank collapse rapidly removed overburden from the pressurised magma beneath, causing sudden decompression; the silica-rich dacitic magma, which had been held under pressure with abundant dissolved gases, flashed explosively as gas exsolved instantaneously — like uncorking a shaken bottle of carbonated water",
            "The collapse exposed the magma chamber directly to the atmosphere, allowing air to mix with the magma and ignite the volcanic gases in a combustion reaction that produced the explosive blast",
            "The collapsing north flank compressed the magma chamber from above, generating hydraulic pressure that forced the magma sideways through the weakest point in the volcano's structure and out of the newly opened lateral vent",
          ],
          correct: 1,
          explain: "Cracks from the earthquake (A) did not directly trigger the eruption — prior to the collapse, the magma system was already highly pressurised with dissolved gases; the critical factor was the sudden removal of the confining pressure that had been keeping those gases in solution, not the creation of new fractures per se. The correct answer is B: the silica-rich dacitic magma at Mt. St. Helens was saturated with dissolved gases (primarily water vapour, CO₂, and SO₂) held in solution by the high pressure of the overlying rock and magma column; when the north flank collapsed and removed hundreds of metres of overburden in seconds, the confining pressure on the magma dropped catastrophically; the dissolved gases exsolved instantaneously, expanding to hundreds of times their dissolved volume and fragmenting the magma into ash, cinders, and pyroclastic debris — the same process that causes carbonation to erupt explosively from a shaken bottle when opened; the low viscosity of basaltic magma allows gases to escape gradually and gently, but the high viscosity of dacitic magma traps gas until explosive pressures build; this is why silica-rich volcanoes are so much more dangerous than basaltic ones. Air mixing with magma (C) is not the mechanism of volcanic explosions — volcanic blasts do not involve combustion; the gases involved (water vapour, CO₂, SO₂) are not flammable, and the energy comes from the rapid expansion of exsolving volcanic gases, not from a chemical reaction with atmospheric oxygen. Compression from above (D) would require the collapsing flank to act as a piston pressing down on the magma — in reality, the collapse removed material and reduced pressure; the magma was already overpressured relative to the volcanic structure and the collapse simply released the confining force.",
        },
      ],
    },
  ],
}

export default volcanicLandforms
