import { Layers, Waves, Gem } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const rockFormingMinerals: Lesson = {
  id: 'geol-101-1-2-3',
  title: 'The Rock-Forming Minerals',
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '14 min',
  xpReward: 150,
  description: "~5,500 mineral species exist, but fewer than 30 build virtually all of Earth's rocks. Learn the short list — and what each mineral tells you about the rock it came from.",
  sources: [
    { org: 'USGS',        title: 'Mineral Resources Program',                                    url: 'https://www.usgs.gov/programs/mineral-resources-program' },
    { org: 'Smithsonian', title: 'National Museum of Natural History — Geology, Gems and Minerals', url: 'https://naturalhistory.si.edu/research/geology-gems-and-minerals' },
    { org: 'NPS',         title: 'Geology Fieldnotes — Minerals',                                url: 'https://www.nps.gov/subjects/geology/minerals.htm' },
    { org: 'OpenStax',    title: 'Physical Geology, 2nd ed. (CC-BY 4.0)',                        url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'UCAR Center for Science Education', title: 'Earth materials and minerals',           url: 'https://scied.ucar.edu/learning-zone/earth' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'A short list for a whole planet',
      body: `Mineralogists have catalogued roughly 5,500 distinct mineral species. That is an impressive number — but geology does not require you to know all of them. The overwhelming majority of Earth's crust and mantle is built from fewer than 30. If you narrow further to the minerals that account for most of the crust's volume, you get a list of perhaps a dozen species. This lesson covers that short list — the **rock-forming minerals** — and by the end of it you will be able to look at most common rocks and read them the way a geologist does.

In Module 1.1, we described Earth's interior using shorthand: "silicate rock" for the crust and mantle, "iron-nickel alloy" for the core. In Lesson 1.1.2, we introduced mafic and felsic as descriptions of the two crust types. Now we can cash in that shorthand. "Silicate rock" means rock built from **silicate minerals** — and there are only a handful of silicate mineral groups that do most of the building. "Mafic" and "felsic" describe not just rocks but specific minerals: olivine and pyroxene are mafic; quartz and orthoclase feldspar are felsic. The mineral level is where the geological vocabulary becomes concrete.

This lesson is organised into two parts. First, the silicates — the dominant group, making up roughly 90% of the crust by volume — with the six mineral families you will encounter repeatedly throughout this course. Second, the non-silicates — carbonates, oxides, sulphides, and evaporites — which are less abundant in the crust overall but include some of the most geologically and economically important minerals on Earth.`,
      keyTerms: [
        {
          term: 'Silicate mineral',
          def: "A mineral whose fundamental structural unit is the silica tetrahedron (SiO₄) — one silicon atom bonded to four oxygen atoms. Silicates make up roughly 90% of Earth's crust and the vast majority of the mantle. They are the most abundant mineral group by far because silicon and oxygen are the two most abundant elements in the crust.",
        },
        {
          term: 'Silica tetrahedron',
          def: "The SiO₄ building unit: one silicon atom surrounded by four oxygen atoms at the corners of a tetrahedron. These units link together in different ways — sharing corners, edges, or forming chains, sheets, or frameworks — producing the structural diversity of the silicate mineral family.",
        },
        {
          term: 'Mafic minerals',
          def: "Silicate minerals rich in magnesium and iron: olivine, pyroxene, and amphibole. They are dark-coloured (black, dark green, or dark brown), relatively dense, and dominant in oceanic crust and the upper mantle. The term 'mafic' was introduced in Lesson 1.1.2 to describe oceanic crust; here it applies at the individual mineral level.",
        },
        {
          term: 'Felsic minerals',
          def: "Silicate minerals rich in silicon and aluminium: quartz, feldspars, and most micas. They are light-coloured (white, grey, pink, or colourless), less dense than mafic minerals, and dominant in continental crust. The term 'felsic' was introduced in Lesson 1.1.2 to describe continental crust.",
        },
      ],
    },
    {
      type: 'concept',
      title: 'The minerals that build the planet',
      body: `**Why silicon and oxygen?** Earth's crust is approximately 46% oxygen and 28% silicon by mass — together nearly three-quarters of everything in the crust. These two elements combine to form the **silica tetrahedron** (SiO₄): one silicon atom bonded to four oxygen atoms at the corners of a four-sided pyramid. Tetrahedra can link to each other in different ways: they may remain isolated, join in chains, form double chains, stack into sheets, or link into a full three-dimensional framework. Each of these linking patterns produces a different silicate mineral family. The diversity of silicate minerals — from the glassy simplicity of quartz to the complex layered sheets of mica — is entirely a consequence of the many ways the same fundamental SiO₄ unit can be assembled. No other mineral group comes close to silicates in crustal abundance simply because no other element combination is so overwhelmingly common.

**Quartz (SiO₂)** is the purest silicate — silicon and oxygen only, with every tetrahedron linked to four others in a continuous three-dimensional framework. This complete linkage creates a crystal that is exceptionally hard (Mohs 7), has no cleavage (the bonds are equally strong in all directions, so it breaks conchoidally), and is chemically extremely resistant to weathering. Quartz is one of the last minerals to dissolve when rock is eroded. This is why most of the sand on Earth's beaches is quartz: after rain, rivers, and waves have dissolved the feldspars and altered the micas, the quartz grains remain. Quartz is the dominant mineral of sandstone, a major component of granite, and the parent material of flint and chert.

**Feldspar** is the single most abundant mineral group in Earth's crust — roughly 60% of the crust by volume. All feldspars are framework silicates (like quartz) but incorporate aluminium and one or more larger cations. They share a family resemblance: hardness around 6, two cleavage planes at nearly right angles (giving blocky fragments), and vitreous luster. Two main varieties:

**Orthoclase** (K-feldspar, KAlSi₃O₈) is typically pink, white, or cream and is the dominant feldspar of granite and the continental crust in general. When you see the pink crystals in a granite countertop, you are looking at orthoclase.

**Plagioclase** (a solid-solution series between NaAlSi₃O₈ and CaAl₂Si₂O₈) is typically white to grey and is the dominant feldspar of basalt and oceanic crust. The key field distinction: plagioclase cleavage surfaces commonly show fine parallel lines called **striations**, caused by crystal twinning — orthoclase shows no such lines. Feldspar weathers relatively quickly compared to quartz; this is why granite outcrops, over millions of years, shed their feldspars as clay minerals while the quartz grains survive to become sandstone.

**Mica** minerals are sheet silicates — their tetrahedra are linked into continuous flat sheets, creating layers of strong bonds within the sheets and relatively weak bonds between them. This structure is the direct cause of mica's one perfect cleavage plane: the weak interlayer bonds break easily, while the sheets themselves are held together tightly. The result is the characteristic peeling into thin, flexible, reflecting sheets. Two main varieties: **muscovite** (white or silvery mica) is aluminium-rich, colourless to silvery, found in granite and many metamorphic rocks; **biotite** (black or dark brown mica) contains iron and magnesium in addition to aluminium, giving it its dark colour. Both have hardness around 2–3. Mica's pearly luster and perfect cleavage into flexible sheets make it essentially unmistakable in hand specimen.

**Pyroxene and amphibole** are the dark, iron-and-magnesium-rich silicates that dominate mafic igneous rocks. Both form dark green to black crystals of similar hardness (~5–6) and are common enough that distinguishing them is an essential field skill.

**Pyroxenes** (the most common is **augite**) are single-chain silicates. They cleave in two directions at angles close to **90°** — their cleavage fragments look like stubby rectangles, and the cleavage faces meet at nearly right angles. Pyroxenes are dominant in basalt, gabbro (the coarse-grained equivalent of basalt), and the lower portions of the oceanic lithosphere.

**Amphiboles** (the most common is **hornblende**) are double-chain silicates. They also cleave in two directions but at angles of approximately **60° and 120°** — a diamond-shaped cross-section rather than a rectangular one. This cleavage angle is the definitive field test for distinguishing amphibole from pyroxene when both appear dark and similar in hardness. Amphiboles are common in granite, diorite, and a wide range of metamorphic rocks.

**Olivine ((Mg,Fe)₂SiO₄)** sits at the opposite structural extreme from quartz: its tetrahedra are isolated, not linked to each other at all (they are held together by magnesium and iron cations between them). This structure gives olivine its distinctive properties: glassy green colour, hardness 6.5–7, no cleavage (irregular to conchoidal fracture), and relatively high density. Olivine is the dominant mineral of the **upper mantle** — the rock of the uppermost mantle (called peridotite) is made mostly of olivine and pyroxene. Olivine also occurs in basalt and gabbro, where it crystallises early from cooling mafic magma. Its presence in a rock is a reliable indicator of mafic or ultramafic composition and high-temperature origin. Connecting back to Lesson 1.1.2: when we said the upper mantle is "solid silicate rock," we meant primarily olivine.

**Reading a rock by its minerals — three key assemblages.** The minerals present in a rock are a direct record of its origin:

- **Granite (continental crust):** quartz + orthoclase feldspar + muscovite or biotite mica — the felsic assemblage. The speckled appearance of granite is these three minerals side by side: glassy quartz (grey), pink orthoclase, and flecks of shiny mica.
- **Basalt (oceanic crust):** plagioclase feldspar + pyroxene (augite) + olivine — the mafic assemblage. Basalt is fine-grained (crystals are too small to see without a lens) but its dark colour and density are entirely from these three mafic and mixed minerals.
- **Peridotite (upper mantle):** olivine + pyroxene — the ultramafic assemblage. Dense, dark green, heavy.

These three assemblages will reappear constantly in Module 1.3 (rocks) and Module 1.4 (plate tectonics). Recognising them is foundational.

**The non-silicate minerals.** Silicates dominate by volume, but the non-silicates include minerals critical to understanding sedimentary geology, ore formation, and many geochemical processes.

**Carbonates** contain the carbonate ion (CO₃²⁻). **Calcite (CaCO₃)** is the dominant mineral of limestone and marble — the most abundant non-silicate mineral in the crust. Hardness 3, three rhombohedral cleavage planes, white or colourless, vitreous to pearly luster. Its single most diagnostic field property is effervescence: drop dilute hydrochloric acid on calcite and it fizzes vigorously as the carbonate reacts with the acid to produce carbon dioxide gas. This reaction is the fastest and most reliable single-mineral field test in all of geology. **Dolomite (CaMg(CO₃)₂)** looks very similar to calcite but reacts with acid only weakly — usually only when powdered or when warm acid is used. Dolomite forms thick sequences in ancient sedimentary basins.

**Oxides** are minerals in which oxygen bonds to metal cations. **Hematite (Fe₂O₃)** can appear black, metallic grey, or earthy red, but its defining property is its **brick-red streak** — consistent regardless of surface appearance. Hematite is the primary iron ore and the mineral responsible for the red colour of red sandstones, red soils, and the surface of Mars. **Magnetite (Fe₃O₄)** is jet black, has a black streak, and is **strongly magnetic** — it will deflect a compass needle and attract iron filings, a uniquely diagnostic property among common minerals. Both hematite and magnetite are important iron ores and occur in many igneous, metamorphic, and sedimentary settings.

**Sulphides** contain sulphur bonded to metal. **Pyrite (FeS₂)** — "fool's gold" — has a bright, pale brass-yellow, metallic surface that has deceived miners for centuries, but its **greenish-black streak** immediately distinguishes it from real gold (which has a golden streak). Pyrite is extremely common, forming in everything from hydrothermal veins to marine sediments. **Galena (PbS)** is the primary ore of lead: bright metallic luster, perfect cubic cleavage producing perfectly flat faces, very high density (specific gravity ~7.6 — noticeably heavy), and grey streak. Its cubic cleavage and exceptional density make it essentially unmistakable.

**Evaporites** are minerals that precipitate when water evaporates. **Halite (NaCl)** — table salt — has three perfect cleavage planes at right angles, always cleaving into perfect cubes. Hardness ~2.5, colourless to white, salty taste (the one case where tasting a mineral is standard field practice). Halite forms thick beds in ancient dried-up seas and salt lakes. **Gypsum (CaSO₄·2H₂O)** has hardness ~2 — soft enough to be scratched by a fingernail, making it one of the most easily identified minerals in the field. White or colourless, vitreous to silky luster (the silky variety, satin spar, has a fibrous texture). Gypsum forms in evaporite sequences alongside halite and is the mineral from which plaster of Paris is made.

In the next lesson we look at the internal geometry that underlies all of these minerals — the seven crystal systems that classify the different ways atoms can arrange themselves into regular three-dimensional lattices.`,
      cards: [
        {
          name: 'Silicates — The Dominant Group',
          icon: Layers,
          color: BRAND.accent,
          desc: "Built on the SiO₄ tetrahedron; ~90% of Earth's crust. Six key families: Quartz (SiO₂, H=7, no cleavage, conchoidal fracture — the stable end product of weathering) · Feldspar (most abundant group, ~60% of crust; two cleavage planes at 90°; orthoclase = pink/white, granite; plagioclase = grey-white, basalt) · Mica (perfect single cleavage → thin sheets; muscovite = silver; biotite = black) · Pyroxene (dark, 90° cleavage, mafic rocks) · Amphibole (dark, 60°/120° cleavage — the key distinction from pyroxene) · Olivine (green, glassy, dominant in upper mantle and basalt).",
          examples: 'Quartz H=7 · Feldspar H=6 · Mica H=2–3 · Pyroxene 90° cleavage · Amphibole 60°/120° · Olivine: mantle mineral',
        },
        {
          name: 'Carbonates & Oxides',
          icon: Waves,
          color: BRAND.jade,
          desc: "Carbonates contain CO₃. Calcite (CaCO₃): H=3, rhombohedral cleavage, fizzes vigorously in dilute acid — the single most diagnostic field test in geology; dominant in limestone and marble. Dolomite: similar but reacts only weakly with cold acid. Oxides bond oxygen to metals. Hematite (Fe₂O₃): brick-red streak regardless of surface colour; the pigment of red rocks, red soils, and Mars. Magnetite (Fe₃O₄): jet black, strongly magnetic — deflects a compass; one of the most distinctive minerals in the field.",
          examples: 'Calcite: fizzes in acid · Hematite: brick-red streak · Magnetite: magnetic',
        },
        {
          name: 'Sulphides & Evaporites',
          icon: Gem,
          color: BRAND.coral,
          desc: "Sulphides bond sulphur to metals. Pyrite (FeS₂): metallic gold surface, greenish-black streak — 'fool's gold'; extremely common in many geological settings. Galena (PbS): bright metallic luster, perfect cubic cleavage, very high density (SG ~7.6); the primary ore of lead. Evaporites precipitate from evaporating water. Halite (NaCl): perfect cubic cleavage, salty taste, H=2.5. Gypsum (CaSO₄·2H₂O): softest of the group at H=2, scratched by a fingernail; forms thick beds in ancient evaporite basins; source of plaster of Paris.",
          examples: 'Pyrite: gold surface + green-black streak · Galena: dense + cubic · Halite: cubic + salty · Gypsum: H=2',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "Silicate minerals make up roughly 90% of Earth's crust by volume. What is the primary reason for this dominance?",
          a: [
            "Silicate minerals are the hardest mineral group on average, so they resist weathering and accumulate while other minerals are destroyed",
            "Silicon and oxygen are the two most abundant elements in Earth's crust, so the mineral built from their fundamental unit — the silica tetrahedron — naturally dominates",
            "Silicate minerals were the first to crystallise when Earth formed, giving them billions of years to accumulate before other mineral groups appeared",
            "Silicate minerals are the only group that can form at the high temperatures found in Earth's interior, restricting all other minerals to rare surface conditions",
          ],
          correct: 1,
          explain: "Silicates include minerals across the full range of hardness — olivine and quartz are hard, but mica is very soft — so weathering resistance alone cannot explain the group's dominance (A is wrong). The correct answer is B: oxygen (~46% of crustal mass) and silicon (~28%) together account for nearly three-quarters of everything in Earth's crust; the silica tetrahedron (SiO₄) is the natural consequence of these two overwhelmingly abundant elements bonding together, and the diversity of ways those tetrahedra can link produces the entire silicate family. The timing of crystallisation (C) is not the reason — many non-silicate minerals also crystallise from magma at high temperatures; carbonates, oxides, and sulphides all form at elevated temperatures too. Many non-silicate minerals form at very high temperatures in the mantle and in igneous systems, so (D) is also wrong.",
        },
        {
          q: "A geologist picks up a coarse-grained, light-coloured igneous rock. Under a hand lens, she identifies glassy grey grains, blocky pink crystals with two cleavage planes at roughly 90°, and thin shiny flakes that peel into sheets. Which mineral assemblage does she most likely have?",
          a: [
            "Plagioclase feldspar + pyroxene + olivine — the classic mafic assemblage of oceanic crust and basalt",
            "Calcite + dolomite + halite — an evaporite assemblage from a dried-up inland sea",
            "Quartz + orthoclase feldspar + mica — the felsic assemblage characteristic of granite and continental crust",
            "Hematite + magnetite + pyrite — an iron-rich assemblage from a hydrothermal ore deposit",
          ],
          correct: 2,
          explain: "Plagioclase + pyroxene + olivine (A) describes basalt and oceanic crust — dark-coloured, dense, mafic; the rock described is light-coloured and coarse-grained, the opposite of basalt. Calcite + dolomite + halite (B) is a sedimentary evaporite assemblage — none of these are described: glassy grey grains are quartz, blocky pink crystals with 90° cleavage are orthoclase feldspar, and peeling flakes are mica. The correct answer is C: quartz (glassy grey, hardness 7, no cleavage), orthoclase feldspar (blocky, pink, two cleavage planes at ~90°, hardness 6), and mica (perfect single cleavage into flexible sheets, pearly luster) are the three defining minerals of granite — the felsic igneous rock of the continental crust. Hematite + magnetite + pyrite (D) are metallic oxides and a sulphide; none would appear as light-coloured glassy grains, blocky pink crystals, or flexible sheets.",
        },
        {
          q: "In the field, a geologist drips a small amount of dilute hydrochloric acid onto a white, medium-grained rock. The surface fizzes vigorously. Which mineral is almost certainly responsible, and what reaction is occurring?",
          a: [
            "Quartz — the SiO₂ framework dissolves in acid, releasing silicon dioxide as a gas that produces the fizz",
            "Orthoclase feldspar — its potassium and aluminium components react with acid to produce a potassium gas",
            "Halite — sodium chloride dissolves rapidly in any aqueous solution, including dilute acid, producing the fizzing sound",
            "Calcite — calcium carbonate reacts with dilute acid to produce carbon dioxide gas (CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂), which is the source of the fizz",
          ],
          correct: 3,
          explain: "Quartz (A) is chemically highly resistant — it does not react with dilute hydrochloric acid at room temperature; SiO₂ does not produce a gas under these conditions. Orthoclase feldspar (B) also does not react with dilute HCl to produce a gas; potassium and aluminium do not volatilise under field conditions. Halite (C) does dissolve readily in water, but dissolution is not the same as fizzing — it produces no gas, just a clear salt solution with no visible effervescence. The correct answer is D: calcite (CaCO₃) reacts with dilute hydrochloric acid in a classic acid-carbonate reaction that produces carbon dioxide gas; the CO₂ bubbles are what cause the vigorous fizzing. This reaction is so reliable and immediate that it is the standard field test for calcite — and by extension for limestone (which is made primarily of calcite) and marble.",
        },
        {
          q: "Two dark, iron- and magnesium-rich silicate minerals look almost identical in hand specimen — both are black, both have a hardness of about 5–6, and both are common in igneous and metamorphic rocks. A geologist examines a freshly broken fragment under a hand lens and measures the angle between the two sets of cleavage faces. One sample shows cleavage planes meeting at roughly 90°; the other shows planes meeting at approximately 60° and 120°. Which minerals are these, and what determines the different cleavage angles?",
          a: [
            'Both are pyroxene — the 60°/120° sample is a weathered variety whose cleavage angles have been distorted by alteration, while the 90° sample is fresh',
            'The 90° sample is pyroxene (augite) and the 60°/120° sample is amphibole (hornblende) — the cleavage angles differ because pyroxene is a single-chain silicate and amphibole is a double-chain silicate, producing unit cells with different geometries and therefore different weak-bond directions',
            'The 90° sample is olivine and the 60°/120° sample is pyroxene — olivine has right-angle cleavage because its isolated tetrahedra produce three perpendicular planes of weakness',
            'Both are amphibole — the 90° sample formed at higher temperature where the crystal lattice contracts to more perpendicular geometry, while the 60°/120° sample formed at lower temperature',
          ],
          correct: 1,
          explain: "Weathering (A) does not alter cleavage angles — cleavage is a fundamental property of the crystal lattice and cannot be distorted by surface alteration; the angles are fixed by internal crystal geometry. The correct answer is B: pyroxenes (single-chain silicates, exemplified by augite) and amphiboles (double-chain silicates, exemplified by hornblende) are the two dominant mafic silicate groups, and both are dark, hard, and superficially similar; the key field distinction is their cleavage angles — pyroxenes cleave in two directions at nearly 90°, producing stubby rectangular fragments, while amphiboles cleave in two directions at approximately 60° and 120°, producing diamond-shaped cross-sections; these different angles are a direct consequence of the different internal geometry of single-chain versus double-chain silicate structures, which position the planes of weakest bonding at different angles. Olivine (C) has no cleavage at all — its isolated silica tetrahedra produce no systematic planes of weakness, and it breaks with conchoidal fracture, not flat-faced cleavage planes. Temperature (D) does not systematically alter cleavage angles within a mineral species — both pyroxene and amphibole have fixed cleavage geometries determined by their crystal structures, not by formation temperature.",
        },
      ],
    },
  ],
}

export default rockFormingMinerals
