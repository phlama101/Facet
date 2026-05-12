import { Gem, Flame, Layers } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const igneousRocks: Lesson = {
  id: 'geol-101-1-3-2',
  title: 'Igneous Rocks',
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 150,
  description: "Obsidian and granite can share the same chemistry yet look nothing alike. The difference is cooling rate — the master variable that controls every igneous rock's texture.",
  sources: [
    { org: 'USGS',        title: 'Rocks and Geology (Public Domain)',                                  url: 'https://pubs.usgs.gov/gip/dynamic/dynamic.html' },
    { org: 'NPS',         title: 'Geology Fieldnotes — Igneous Rocks',                                url: 'https://www.nps.gov/subjects/geology/igneous.htm' },
    { org: 'Smithsonian', title: 'National Museum of Natural History — Geology, Gems and Minerals',   url: 'https://naturalhistory.si.edu/research/geology-gems-and-minerals' },
    { org: 'OpenStax',    title: 'Physical Geology, 2nd ed. (CC-BY 4.0)',                             url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'UCAR Center for Science Education', title: 'Earth materials',                             url: 'https://scied.ucar.edu/learning-zone/earth' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'What cooling rate tells you',
      body: `Pick up a piece of obsidian and a piece of granite. The obsidian is jet-black, smooth, and featureless under ordinary light — a volcanic glass with no visible crystals at all. The granite is speckled with pink feldspar crystals, glassy quartz grains, and dark flakes of biotite mica, each crystal large enough to touch individually with a fingertip. Run a chemical analysis on both rocks and you may find their bulk compositions surprisingly similar — both rich in silica, potassium, and sodium. The dramatic difference in appearance has nothing to do with composition and everything to do with **cooling rate**.

When magma cools slowly — buried deep in the crust, insulated by kilometres of surrounding rock — individual atoms have time to migrate through the melt and attach to growing crystal faces. The result is a rock with large, interlocking crystals that formed over millions of years. When lava erupts at the surface and cools in days, weeks, or years, atoms are locked in place before they can organise into large crystals, producing a fine-grained rock with crystals invisible to the naked eye. When lava is quenched almost instantaneously — by contact with cold seawater, for example — there is no time for any crystal growth at all, and the result is volcanic glass.

Cooling rate is the master variable of igneous petrology, and **texture** — the size, shape, and arrangement of crystals in a rock — is the direct record of that cooling rate. Lesson 1.3.1 introduced the three rock families; this lesson gives igneous rocks their full treatment. A second axis of classification runs perpendicular to texture: **silica content**, which controls the mineralogy, colour, and density of the rock. Together, texture and silica content place any igneous rock precisely within a classification framework built from just two variables.`,
      keyTerms: [
        {
          term: 'Magma',
          def: "Molten rock beneath Earth's surface, including dissolved gases and any suspended crystals. When magma reaches the surface through a volcanic eruption, it is called lava.",
        },
        {
          term: 'Intrusive (plutonic) igneous rock',
          def: "Igneous rock formed by slow cooling of magma underground, within the crust or upper mantle. Slow cooling — over millions of years — allows large crystals to grow. The word plutonic comes from Pluto, the Roman god of the underworld. Examples: granite, gabbro, diorite.",
        },
        {
          term: 'Extrusive (volcanic) igneous rock',
          def: "Igneous rock formed by rapid cooling of lava at or near Earth's surface. Rapid cooling produces small crystals or volcanic glass. The word volcanic refers to the surface eruption process. Examples: basalt, rhyolite, obsidian, pumice.",
        },
        {
          term: 'Texture',
          def: "The size, shape, and arrangement of crystals (or glass) in an igneous rock. Coarse-grained texture (crystals visible to the naked eye) indicates slow intrusive cooling. Fine-grained texture (crystals too small to see without magnification) indicates rapid extrusive cooling. Glassy texture indicates near-instant quenching.",
        },
        {
          term: 'Felsic / Mafic',
          def: "The two ends of the igneous compositional spectrum. Felsic rocks (feldspar + silica) are silica-rich (>65% SiO₂), light-coloured, and less dense — granite is the type example. Mafic rocks (magnesium + ferric/iron) are silica-poor (~45–52% SiO₂), dark-coloured, and denser — basalt is the type example.",
        },
      ],
      interaction: {
        type: 'scientific-diagram' as const,
        id: 'igneous-rock-textures',
        caption: 'Coarse-grained intrusive (granite) vs fine-grained extrusive (basalt): crystal size is determined entirely by cooling rate. The same magma composition produces granite underground or rhyolite at the surface.',
        credit: 'OpenStax Physical Geology',
      },
    },
    {
      type: 'concept',
      title: 'Classifying igneous rocks',
      body: `**Texture records cooling rate — completely.** The single most important observation when identifying an igneous rock is crystal size. If crystals are large enough to see and identify individually — typically greater than 1 mm — the rock is **coarse-grained** (geologists say phaneritic) and cooled slowly underground: it is intrusive. If crystals are too small to see without a hand lens — the rock looks uniformly dense and fine — it is **fine-grained** (aphanitic) and cooled quickly at or near the surface: it is extrusive. If the rock is a smooth, shiny glass with conchoidal (shell-like) fracture and no crystals at all, it quenched almost instantly from lava. The same rule applies everywhere on Earth, in every igneous rock ever formed: slow cooling underground → large crystals; fast cooling at the surface → small or no crystals. There are no exceptions.

**Silica content governs mineralogy, colour, and density.** Silica (SiO₂) is the most abundant oxide in Earth's crust, and its concentration in a magma determines which minerals crystallise when the magma cools. High-silica (felsic) magmas are rich in silicon, aluminium, potassium, and sodium — and crystallise into **quartz**, **orthoclase feldspar**, and **muscovite or biotite mica**. These minerals are pale in colour — white, grey, pink — so felsic rocks are light-coloured overall. Low-silica (mafic) magmas are rich in magnesium and iron — and crystallise into **plagioclase feldspar**, **pyroxene**, and **olivine**. These minerals are dark — black, dark green, grey-green — so mafic rocks are dark-coloured overall. Mafic rocks are also denser than felsic rocks because magnesium and iron are heavier atoms than silicon and aluminium. This density difference has enormous consequences: oceanic crust, made of basalt (mafic), is denser than continental crust, made largely of granite (felsic), which is why oceanic crust subducts beneath continental crust at convergent margins. Module 1.4 will develop this fully.

**The four-cell igneous rock matrix.** Combining the two axes — texture (intrusive or extrusive) and composition (felsic or mafic) — produces four principal igneous rock types. **Granite** is felsic and intrusive: coarse-grained, light-coloured, made of quartz + orthoclase + mica, forming the bulk of continental crust and the cores of mountain ranges. **Rhyolite** is felsic and extrusive: the fine-grained (or glassy) surface equivalent of granite, same composition, same pale colour, produced by explosive silica-rich volcanism (Yellowstone is a rhyolite system). **Gabbro** is mafic and intrusive: coarse-grained, dark, made of plagioclase + pyroxene, forming the lower oceanic crust. **Basalt** is mafic and extrusive: fine-grained, dark grey to black, the most abundant rock type on Earth's surface — it floors all of the world's ocean basins and builds oceanic islands such as Hawaii. In between felsic and mafic lies an intermediate category: **andesite** (extrusive) and **diorite** (intrusive), dominant at subduction-zone volcanic arcs like the Cascades and the Andes.

**Special textures.** Beyond the basic coarse/fine/glassy spectrum, several distinctive textures deserve recognition. A **porphyritic** rock contains large crystals — called phenocrysts — embedded in a finer-grained groundmass. This records two-stage cooling: the phenocrysts grew slowly at depth, then the partially crystallised magma erupted and the remaining melt cooled quickly, producing the fine groundmass. The phenocrysts are often the only visible crystals, making porphyritic rocks easy to recognise in the field. A **vesicular** texture shows small holes — vesicles — that record gas bubbles that were dissolved in the lava and exsolved as the lava approached the surface (just as CO₂ bubbles out of a carbonated drink when the pressure drops). **Pumice** is the extreme case: so many vesicles that the rock is mostly air, giving it a density low enough to float on water. **Obsidian** is volcanic glass — essentially a supercooled liquid that solidified faster than crystals could nucleate — producing the smoothest, sharpest natural cutting edge known, used by many cultures for tools and weapons.

**Where igneous rocks form.** Igneous rocks are not randomly distributed across Earth's surface — they occur at predictable tectonic settings. Basalt erupts at **mid-ocean spreading centres**, where plates pull apart and decompression melting of the mantle produces large volumes of mafic magma. Basalt also erupts at **hotspots** — mantle plumes rising through the plate — creating chains of volcanic islands (Hawaii, Iceland). Granite and andesite dominate at **subduction-zone volcanic arcs**, where the descending oceanic plate releases water that lowers the melting point of the overlying mantle wedge, producing magmas that evolve toward more silica-rich compositions as they rise through the crust. These settings will be mapped in detail in Module 1.4; what matters here is that rock type and tectonic setting are linked: find basalt on the ocean floor or at a hotspot island; find granite in a continental batholith or mountain core.`,
      cards: [
        {
          name: 'Felsic Rocks',
          icon: Gem,
          color: BRAND.gold,
          desc: "High silica (>65% SiO₂), light-coloured (white, grey, pink), lower density. Dominant minerals: quartz, orthoclase feldspar, mica. Intrusive → granite: coarse-grained, the rock of continental crust and mountain roots — the Sierra Nevada batholith, the Scottish Highlands. Extrusive → rhyolite: fine-grained or glassy, pale, produced by explosive silica-rich volcanism (Yellowstone caldera system). Felsic magmas are viscous and erupt explosively.",
          examples: 'Granite: coarse, pale, continental crust · Rhyolite: fine-grained, pale, explosive volcanic · Obsidian: glassy felsic, black sheen',
        },
        {
          name: 'Mafic Rocks',
          icon: Flame,
          color: BRAND.ruby,
          desc: "Low silica (~45–52% SiO₂), dark-coloured (black, dark grey, dark green), higher density. Dominant minerals: plagioclase feldspar, pyroxene, olivine. Intrusive → gabbro: coarse-grained dark rock forming the lower oceanic crust. Extrusive → basalt: fine-grained, dark, the most abundant surface rock on Earth — floors all ocean basins, builds Hawaii and Iceland. Higher density than felsic rocks, which is why oceanic crust subducts beneath continents.",
          examples: 'Basalt: fine-grained, dark, ocean floors · Gabbro: coarse-grained mafic · Andesite: intermediate, volcanic arcs',
        },
        {
          name: 'Special Textures',
          icon: Layers,
          color: BRAND.amethyst,
          desc: "Porphyritic: large phenocrysts in fine groundmass — two-stage cooling, magma started deep then erupted. Vesicular: bubble holes (vesicles) from dissolved gases exsolving as lava decompressed. Pumice: so vesicular it floats on water — frothy volcanic glass. Obsidian: pure volcanic glass, no crystals, instant quench — conchoidal fracture produces the sharpest natural cutting edge. All these textures are readable in the field without any lab equipment.",
          examples: 'Pumice: floats on water · Obsidian: volcanic glass · Porphyry: phenocrysts in fine groundmass · Scoria: dark vesicular lava',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "Two igneous rock samples have identical chemical compositions. Sample A has crystals 2 cm across that are easily visible and identifiable by eye. Sample B looks uniformly dark and dense, with no crystals visible without a magnifier. What accounts for this difference?",
          a: [
            "Sample A has a higher silica content, which promotes larger crystal growth regardless of cooling conditions",
            "Sample A cooled slowly underground (intrusive), giving crystals time to grow; Sample B cooled rapidly at or near the surface (extrusive), freezing atoms in place before large crystals could form",
            "Sample B was metamorphosed after formation, which recrystallised its original large crystals into smaller grains",
            "Crystal size is controlled by the water content of the magma — Sample A had more dissolved water, which accelerates crystal growth",
          ],
          correct: 1,
          explain: "Silica content (A) controls which minerals crystallise, not how large the crystals grow — two rocks of identical composition can have very different textures depending solely on cooling rate. The correct answer is B: crystal size in igneous rocks is a direct record of cooling rate; slow cooling underground (intrusive) gives atoms time to migrate and attach to growing crystal faces over millions of years, producing coarse-grained rock; rapid cooling at the surface (extrusive) locks atoms in place before large crystals can form, producing fine-grained rock. Metamorphism (C) typically recrystallises minerals into new assemblages that are larger or more foliated, not smaller — and metamorphism would not produce a rock with the same chemistry as its intrusive equivalent. Water content (D) does affect the crystallisation temperature and viscosity of magma, but it is not the primary control on crystal size; cooling rate is the dominant variable.",
        },
        {
          q: "A geologist collects a dark-coloured, fine-grained rock from the ocean floor near a mid-ocean spreading centre. Which rock is it, and why is it described as 'mafic'?",
          a: [
            "Granite — granite is the most common rock in Earth's crust, so it is the most likely rock found anywhere, including the ocean floor",
            "Obsidian — ocean floor rocks are quenched rapidly by cold seawater and therefore always form volcanic glass rather than crystalline rock",
            "Basalt — mafic means low in silica and rich in magnesium and iron, producing dark-coloured, dense minerals (pyroxene, plagioclase, olivine) and a fine-grained extrusive texture from rapid cooling at the spreading centre",
            "Rhyolite — rhyolite is fine-grained and extrusive, matching the ocean floor setting and the rapid cooling by seawater",
          ],
          correct: 2,
          explain: "Granite (A) is a felsic intrusive rock and the dominant rock of continental crust — it does not form at mid-ocean spreading centres, which produce mafic magma by partial melting of the mantle. Obsidian (B) does form when lava is quenched rapidly, but ocean floor lavas are not quenched so instantly that no crystals form — they produce fine-grained basalt (pillow basalt), not pure glass. The correct answer is C: basalt is the extrusive mafic rock that floors all of Earth's ocean basins; 'mafic' derives from magnesium and ferric (iron), reflecting the low-silica, high-Mg/Fe composition; this composition produces dark minerals (pyroxene, plagioclase feldspar, olivine), making basalt dark-coloured and denser than continental granite; the fine-grained texture records rapid cooling at the spreading centre or on the seafloor. Rhyolite (D) is the felsic extrusive rock — it has the same composition as granite but erupts at the surface; it is not found on ocean floors, which are underlain entirely by mafic basalt.",
        },
        {
          q: "Pumice is an igneous rock so full of gas-bubble holes that it floats on water. Which textural description fits pumice, and what do those features record about how it formed?",
          a: [
            "Coarse-grained and porphyritic — pumice cooled slowly underground and its large crystals make it light enough to float",
            "Glassy and vesicular — pumice solidified rapidly from gas-rich lava; the frothy glass structure records both the near-instant quench (no crystals) and the abundant vesicles from dissolved volcanic gases that exsolved as the lava decompressed",
            "Fine-grained and foliated — pumice is a low-grade metamorphic rock formed when volcanic ash is compressed, and its foliation creates planes of weakness that trap air",
            "Porphyritic and vesicular — pumice has large phenocrysts surrounded by a vesicular groundmass, recording two-stage cooling with gas exsolution in the final stage",
          ],
          correct: 1,
          explain: "Coarse-grained and porphyritic (A) describes rocks that cooled slowly — pumice is the opposite; it is an extremely rapidly cooled volcanic rock, and 'coarse-grained' is incompatible with floating-on-water density. The correct answer is B: pumice is both glassy (it solidified so fast from silica-rich lava that no crystals nucleated — it is a frothy volcanic glass) and vesicular (it contains so many gas-bubble holes that its bulk density falls below 1 g/cm³, allowing it to float); the vesicles record dissolved gases — primarily water vapour and CO₂ — that exsolved rapidly as the ascending magma decompressed near the surface, much like carbonation bubbling out of a shaken drink; the simultaneous quenching froze this frothy structure permanently. Pumice is not metamorphic (C) — it is a primary volcanic rock; metamorphic foliation and volcanic vesicles are entirely different features with different origins. While some pumice has a porphyritic character (D), the defining and unusual feature that explains its floating ability is the extreme vesicularity, not phenocrysts — and the question asks specifically what allows it to float.",
        },
      ],
    },
  ],
}

export default igneousRocks
