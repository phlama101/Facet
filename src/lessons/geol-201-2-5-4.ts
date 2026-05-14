import { Layers, Mountain } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const rockMineralIdentification: Lesson = {
  id: 'geol-201-2-5-4',
  title: 'Rock and Mineral Identification in the Field',
  track: 'geo',
  trackName: 'Geology',
  level: 'Intermediate',
  duration: '20 min',
  xpReward: 250,
  description: 'In a laboratory you have X-ray diffractometers and electron microprobes. In the field, you have your eyes, a hand lens, a knife, a coin, a streak plate, and a few drops of dilute HCl. This lesson teaches the systematic field identification of the eight most common rock-forming minerals and the hand-sample classification of igneous, sedimentary, and metamorphic rocks.',
  sources: [
    { org: 'USGS', title: 'Mineral and Rock Identification Resources — Public Domain', url: 'https://www.usgs.gov/minerals' },
    { org: 'Smithsonian', title: 'Mineral Sciences Collection (educational) — Smithsonian NMNH Public Domain', url: 'https://naturalhistory.si.edu/research/mineral-sciences' },
    { org: 'OpenStax', title: 'Physical Geology, 2nd ed., Ch. 3–5 (CC-BY 4.0)', url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'PRI', title: 'Earth@Home: Minerals and Rocks', url: 'https://earthathome.org' },
    { org: 'AGI', title: 'Glossary of Geology, 5th ed.', url: 'https://www.americangeosciences.org/pubs/glossary' },
    { org: 'USDA', title: 'Soil Survey Manual — Rock and Mineral Descriptions (Public Domain)', url: 'https://www.nrcs.usda.gov/resources/guides-and-instructions/soil-survey-manual' },
  ],
  sections: [
    {
      type: 'intro',
      title: "The field geologist's toolkit",
      body: `In a laboratory you have access to X-ray diffractometers, electron microprobes, and mass spectrometers. In the field, you have your eyes, a hand lens (×10 loupe), a knife, a copper coin, a piece of streak plate (unglazed porcelain), a small bottle of dilute HCl, and everything you have learnt about geology. Field identification is not guesswork — it is a systematic process of observing properties in a defined sequence and narrowing the possibilities.

This lesson teaches that process. For minerals: hardness first (using the Mohs scale with field tools), then streak, then cleavage and lustre, then acid test. For rocks: texture first (grain size and fabric), then mineralogy and colour. The sequence matters. Running through it consistently prevents misidentification and ensures that each diagnostic test is applied before a conclusion is reached. Field identification is the first analytical step in every geological campaign — the step that tells you what you are dealing with before any sample reaches a laboratory.`,
      keyTerms: [
        {
          term: 'Mohs hardness scale',
          def: 'A relative scale of scratch resistance for minerals, numbered 1 (talc, softest) to 10 (diamond, hardest), devised by Friedrich Mohs in 1812. A mineral with a higher Mohs number scratches any mineral with a lower number. Field tools proxy: fingernail ~2.5; copper coin ~3; glass plate ~5.5; steel pocket-knife blade ~5.5; tungsten carbide hardness card ~9. To determine hardness: scratch the unknown with each tool in sequence; the lowest-hardness tool that leaves a true scratch (confirmed by wiping clean and checking) gives the upper-bound hardness.',
        },
        {
          term: 'streak',
          def: "The colour of the powdered mineral on a streak plate (unglazed porcelain, hardness ~6.5). More diagnostic than surface colour because it is unaffected by surface oxidation and reflects the intrinsic mineral chemistry. Haematite: red-brown streak despite variable grey-to-red surface colour. Pyrite: black streak despite metallic gold surface. Quartz: white streak (harder than the streak plate — the plate produces powder, not the mineral). Minerals harder than the streak plate (~>6.5) leave no streak.",
        },
        {
          term: 'cleavage (mineral)',
          def: "A mineral's tendency to break along flat planes controlled by atomic bonding — the mineral splits parallel to planes of weak bonds. The number of cleavage planes and the angles between them are diagnostic. Halite: three planes at 90° (cubic). Calcite: three planes at 75°/105° (rhombohedral). Amphibole: two planes at 60°/120°. Pyroxene: two planes at 87°/93° (nearly rectangular). Feldspar: two planes at ~90°. Mica: one perfect basal plane. Cleavage is distinguished from fracture (irregular non-planar breakage, as in quartz's conchoidal fracture) by the flat, reflective surface it produces.",
        },
        {
          term: 'lustre',
          def: 'The quality and character of light reflected from a mineral surface. Main types: metallic (opaque, mirror-like — sulphides, native metals); vitreous (glassy — quartz, feldspars, garnets); resinous (amber-like — sphalerite); pearly (pearl-like iridescence — micas, selenite gypsum cleavage faces); silky (fibrous lustre — fibrous gypsum/selenite, asbestos); adamantine (brilliant — diamond, zircon). Distinguishing metallic from non-metallic lustre is the first step in lustre identification.',
        },
        {
          term: 'acid test',
          def: 'Application of one drop of 10% HCl to a mineral surface. Vigorous effervescence (CO₂ bubbles) = calcite (CaCO₃ + 2HCl → CO₂ + H₂O + CaCl₂). Slow or no effervescence on the surface, but fizzes when powdered with a knife = dolomite (CaMg(CO₃)₂ — less reactive than calcite because the Ca–Mg ordering slows surface reaction rate). No reaction = quartz, feldspar, most silicates, sulphides. The acid test distinguishes calcite from dolomite and identifies carbonate rocks (limestone vs. dolostone).',
        },
        {
          term: 'igneous texture',
          def: "The size, shape, and arrangement of crystals in an igneous rock, reflecting the cooling history of the magma. Phaneritic (coarse-grained, >1 mm): slow cooling at depth — plutonic rocks. Aphanitic (fine-grained, <0.1 mm, crystals not visible without magnification): rapid cooling at the surface — volcanic rocks. Porphyritic: large crystals (phenocrysts) in a fine-grained groundmass — two-stage cooling (partial crystallisation at depth, then eruption). Glassy (obsidian, tachylite): quenching of melt with no crystal growth. Vesicular: gas-bubble voids trapped on eruption.",
        },
        {
          term: 'foliation (metamorphic)',
          def: 'A planar fabric in a metamorphic rock produced by the preferred alignment of platy or prismatic minerals (micas, amphiboles, chlorite) under directed pressure. Grades from slaty cleavage (very fine-grained, planar fracture, low metamorphic grade) through schistosity (aligned micas visible to the naked eye, medium grade) to gneissic banding (alternating light felsic and dark mafic layers, high grade). Foliation is absent in contact metamorphic (hornfels) and non-foliated metamorphic rocks (quartzite, marble).',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Mineral identification: properties and tests',
      body: `**The Mohs hardness scale and field tools.** Hardness measures resistance to scratching. The scale: Talc (1), Gypsum (2), Calcite (3), Fluorite (4), Apatite (5), K-feldspar/Orthoclase (6), Quartz (7), Topaz (8), Corundum (9), Diamond (10). Field tools and their approximate hardness: fingernail ~2.5; copper coin ~3; glass plate ~5.5; steel pocket-knife blade ~5.5; tungsten carbide card ~9. Method: scratch the unknown with each tool in sequence from softest to hardest; the lowest-hardness tool that leaves a true scratch gives the upper-bound hardness. Always clean the surface and confirm it is a genuine scratch, not powder from the tool (especially with soft metals like copper on hard minerals).

Key hardness discriminations: (1) Calcite (3) vs. quartz (7) — quartz cannot be scratched by a knife; calcite can. (2) Gypsum (2) vs. muscovite (~2.5) — both soft, but gypsum has distinctive pearly lustre on cleavage faces. (3) Feldspar (6) vs. quartz (7) — a steel knife barely scratches feldspar but cannot scratch quartz; quartz scratches glass, feldspar does not.

**Streak.** On a streak plate (unglazed porcelain, hardness ~6.5): haematite → red-brown streak despite variable grey-to-red surface colour; pyrite → black streak despite metallic gold surface; magnetite → black streak (also magnetic); limonite → yellow-brown streak. Minerals harder than ~6.5 (quartz, feldspar, pyroxene, amphibole) leave a white streak or no streak (they abrade the plate rather than leaving a powder).

**Cleavage and lustre.** Cleavage planes are diagnostic: halite = three planes at 90° (cubic); calcite = three planes at 75°/105° (rhombohedral); amphibole = two planes at 60°/120°; pyroxene = two planes at 87°/93° (nearly rectangular — key discriminator from amphibole); feldspar = two planes at ~90°; mica = one perfect basal plane (books split easily). Quartz has no cleavage — conchoidal fracture instead. Lustre types: metallic (sulphides, native metals), vitreous (quartz, feldspars), pearly (mica cleavage faces, selenite), silky (fibrous minerals), adamantine (diamond, zircon).

**Acid test.** One drop of 10% HCl: vigorous effervescence = calcite; slow effervescence only when powdered = dolomite; no reaction = everything else. The acid test is essential for distinguishing limestone (calcite) from dolostone (dolomite), and for confirming carbonate minerals in hand sample.

**The eight common rock-forming minerals.** The QAFPO-BCM set: *Quartz* (vitreous, conchoidal fracture, no cleavage, hardness 7, white streak); *K-feldspar* (pink or white, two cleavages ~90°, vitreous, hardness 6, white streak); *Plagioclase* (white to grey, two cleavages ~90°, striations on cleavage surface from twinning, hardness 6); *Biotite* (black-brown, one perfect cleavage basal, flexible sheets, hardness 2.5–3); *Muscovite* (colourless to silver, one perfect cleavage, elastic sheets, hardness 2.5); *Amphibole* (hornblende — black-dark green, two cleavages at 60°/120°, hardness 5–6); *Pyroxene* (augite — dark green to black, two cleavages at ~90°, hardness 5–6, shorter crystals than amphibole); *Olivine* (olive-green, no cleavage, conchoidal fracture, vitreous, hardness 6.5–7).`,
      cards: [
        {
          name: 'Mineral Identification Tests',
          icon: Layers,
          color: BRAND.gold,
          desc: 'Mohs scale: Talc(1), Gypsum(2), Calcite(3), Fluorite(4), Apatite(5), K-feldspar(6), Quartz(7), Topaz(8), Corundum(9), Diamond(10). Field tools: fingernail ~2.5; coin ~3; glass/knife ~5.5; tungsten carbide ~9. Key tests: Knife scratches it? → hardness <5.5. Scratches glass? → hardness >5.5. Red-brown streak → haematite. Black streak + magnetic → magnetite. Yellow-brown streak → limonite. Black streak, metallic gold surface → pyrite. Vigorous HCl effervescence → calcite. HCl only when powdered → dolomite. Cleavage: cubic 3×90° → halite; rhombohedral 3×75°/105° → calcite; 2×60°/120° → amphibole; 2×87°/93° → pyroxene; 1 perfect basal → mica. No cleavage, conchoidal fracture → quartz.',
          examples: `Pyrite vs. gold: both metallic gold; gold is soft (hardness 2.5–3, scratched by a knife) and has no streak; pyrite is hard (hardness 6–6.5, not scratched by a knife) and has a black streak on the streak plate — the streak test definitively separates "fool\'s gold" from actual gold · Amphibole vs. pyroxene: both dark, similar hardness (~5–6); discriminate by cleavage angle: amphibole cleavage at 60°/120° produces diamond-shaped cross-section; pyroxene cleavage at ~90° produces nearly square cross-section. View cross-section of broken crystal end-on with a ×10 loupe · Calcite vs. dolomite: add HCl directly to clean surface; calcite fizzes immediately and vigorously; dolomite does not fizz unless surface is first powdered with a knife — a field-reliable discrimination`,
        },
      ],
    },
    {
      type: 'concept',
      title: 'Identifying rocks in hand sample',
      body: `**Igneous rocks: texture first, mineralogy second.** Grain size (texture) is the primary igneous classifier because it directly reflects cooling rate, which in turn reveals the setting (plutonic vs. volcanic).

*Coarse-grained (phaneritic, >1 mm):* Individual crystals visible to the naked eye; slow cooling at depth → plutonic. **Granite**: quartz + K-feldspar (pink or white) + plagioclase + biotite ± hornblende; light-coloured, felsic. **Gabbro**: plagioclase + pyroxene ± olivine; dark, mafic; no quartz. **Diorite**: plagioclase + hornblende; intermediate, grey; rare quartz.

*Fine-grained (aphanitic, <0.1 mm):* Crystals microscopic; rapid cooling at surface → volcanic. **Rhyolite**: felsic, light-coloured (cream, pink, grey); equivalent to granite in composition. **Andesite**: intermediate, grey. **Basalt**: mafic, dark grey to black; may have olivine microphenocrysts.

*Porphyritic:* Phenocrysts (large early-formed crystals) set in a fine-grained or glassy groundmass; two-stage cooling history (partial crystallisation at depth in a magma chamber, then rapid eruption). Extremely common in volcanic rocks.

*Vesicular:* Gas bubbles trapped on eruption (volatile exsolution). **Scoria**: basaltic, dark, highly vesicular, heavy. **Pumice**: rhyolitic, pale, extremely vesicular, so low density it floats. Vesicles filled by later secondary minerals (chlorite, calcite, zeolites) are called **amygdales**.

*Felsic vs. mafic:* Light-coloured, quartz-rich, high silica = felsic (granite/rhyolite). Dark, pyroxene/olivine-rich, low silica = mafic (gabbro/basalt). Intermediate = grey, hornblende/plagioclase-dominated (diorite/andesite).

**Sedimentary rocks: grain size first, then chemical tests.**

*Clastic rocks (Wentworth scale):* Conglomerate (>2 mm, rounded clasts) or breccia (>2 mm, angular clasts — shorter transport). Sandstone (0.063–2 mm). Siltstone (0.004–0.063 mm). Mudstone (<0.004 mm, blocky) or shale (fissile — splits into thin sheets along bedding planes).

*Chemical/biochemical rocks:* Limestone: fizzes vigorously in HCl; white to grey; may contain fossils (bioclastic), be fine-grained (micritic), or coarsely crystalline (sparitic). Dolostone: fizzes only when powdered; often has saddle-shaped crystals. Chert: microcrystalline SiO₂; very hard (7); conchoidal fracture; waxy lustre; no HCl reaction; occurs as nodules in limestone or bedded layers. Rock salt (halite): cubic cleavage; salty taste; very soft (2.5). Coal: black, light, greasy lustre; high carbon content.

**Metamorphic rocks: foliation first, then grade and index minerals.**

*Non-foliated:* **Quartzite** (metamorphosed sandstone — interlocking quartz, very hard, no HCl reaction, often white to pink). **Marble** (metamorphosed limestone — interlocking calcite crystals, fizzes in HCl, variety of colours, sugary texture).

*Foliated — ordered by increasing metamorphic grade:* **Slate** (very fine-grained; smooth slaty cleavage; dull lustre; no visible crystals; low grade; protolith = shale). **Phyllite** (fine-grained; silky sheen on cleavage surfaces from aligned sericite/chlorite; slightly higher grade than slate). **Schist** (medium to coarse-grained; strong schistosity — aligned micas visible to naked eye; index minerals indicate grade: chlorite → biotite → garnet → staurolite → kyanite → sillimanite). **Gneiss** (coarse-grained; gneissic banding — alternating light felsic and dark mafic layers; high grade; migmatite at partial-melt conditions).`,
      cards: [
        {
          name: 'Rock Classification in Hand Sample',
          icon: Mountain,
          color: BRAND.coral,
          desc: 'Igneous (texture first): phaneritic = plutonic; granite (Q+Kfsp+Plag+bio, light), gabbro (Plag+Pyx, dark), diorite (Plag+hbl, grey). Aphanitic = volcanic; rhyolite (felsic, pale), andesite (intermediate, grey), basalt (mafic, dark). Porphyritic = phenocrysts in groundmass; two-stage cooling. Vesicular = scoria (basaltic) / pumice (rhyolitic). Sedimentary (grain size then acid): conglomerate (>2 mm rounded) / breccia (angular), sandstone (0.063–2 mm), siltstone, mudstone/shale. Chemical: limestone (vigorous HCl), dolostone (HCl when powdered), chert (hard, waxy, no reaction), halite (cubic cleavage, salty). Metamorphic (foliation and grade): non-foliated: quartzite (hard, no HCl), marble (HCl reaction). Foliated (low→high): slate (smooth cleavage) → phyllite (silky) → schist (visible micas, index minerals) → gneiss (banding).',
          examples: "Granite vs. rhyolite: same composition (quartz + K-feldspar + plagioclase + biotite) but vastly different texture — granite has crystals 2–10 mm (slow plutonic cooling over millions of years); rhyolite has invisible crystals or glass (rapid volcanic quenching over days to years) · Marble vs. quartzite: both non-foliated white metamorphic rocks often confused in hand sample. Key test: HCl. Marble fizzes immediately (calcite parent rock = limestone). Quartzite does not fizz at all (quartz parent rock = sandstone). Marble also feels slightly 'greasy' due to interlocking calcite and has a slightly lower hardness (~3) than quartzite (~7) · Index minerals as grade indicators in schist: chlorite schist = greenschist facies (~300–450°C); garnet schist = upper greenschist to amphibolite (~450–550°C); kyanite schist = amphibolite facies (~550–650°C); sillimanite schist/gneiss = upper amphibolite to granulite (>650°C)",
        },
      ],
    },
    {
      type: 'visualization',
      title: 'The Mohs Hardness Scale: Field Tests',
      body: 'Drag the slider to any Mohs hardness value to see which mineral occupies that position, which field tool can (or cannot) scratch it, and the key diagnostic properties that distinguish it from similarly hard minerals.',
      interaction: {
        type: 'slider-simulation',
        label: 'Mohs hardness',
        min: 1,
        max: 10,
        step: 0.5,
        unit: '',
        defaultValue: 5,
        outputLabel: 'Mineral and field test',
        formula: (v: number) => {
          if (v <= 1.5) return 'Talc (1) — softest known mineral. Scratched by anything, including fingernails. Greasy or soapy feel. Platy cleavage. White to pale green. Used in talcum powder and cosmetics. Common in low-grade metamorphic rocks (talc schist).'
          if (v <= 2.5) return 'Gypsum (2) / Fingernail (~2.5) — scratched by fingernail (hardness ~2.5). Gypsum: pearly lustre on cleavage faces; fibrous variety = selenite; alabaster = massive. Halite (rock salt): also hardness 2.5; cubic cleavage; salty taste. Both easily scratched by a copper coin.'
          if (v <= 3.5) return 'Calcite (3) / Copper coin (~3) — scratched by a copper coin (hardness ~3). Three perfect cleavage planes at 75°/105° (rhombohedral). Vigorous effervescence in HCl. White to clear. Distinguished from dolomite (same appearance) by immediate HCl reaction. Distinguished from quartz (hardness 7) by easily scratched by a coin.'
          if (v <= 4.5) return 'Fluorite (4) — scratched by copper coin but not easily by fingernail. Four perfect octahedral cleavage planes. Wide colour range (purple, green, yellow, colourless). Vitreous lustre. No acid reaction. Distinguished from calcite by four cleavage directions vs. three, and no HCl effervescence.'
          if (v <= 5.5) return 'Apatite (5) / Glass and steel knife (~5.5) — barely scratched by a steel pocket-knife (~5.5). Cannot easily scratch glass. Apatite: hexagonal crystals; varied colour; common accessory in igneous and metamorphic rocks; main mineral in bones and teeth. Glass plate hardness ~5.5 — minerals harder than glass scratch it; minerals softer cannot.'
          if (v <= 6.5) return 'K-feldspar / Orthoclase (6) — barely scratched by a steel knife (~5.5); cannot be scratched by a fingernail or coin. Does NOT scratch glass easily. Two perfect cleavage planes at ~90°. Often pink, white, or cream. Vitreous lustre. Distinguished from quartz (7) by cleavage (quartz has none) and by being scratched by a knife (quartz is not).'
          if (v <= 7.5) return 'Quartz (7) — CANNOT be scratched by a steel knife, glass plate, or coin. SCRATCHES glass easily. No cleavage — conchoidal (curved, shell-like) fracture. Vitreous lustre. White streak (or no streak — abrades the plate). Hardness 7 is the critical discriminator: quartz vs. feldspar vs. calcite can all look similar in colour, but only quartz is harder than the knife.'
          if (v <= 8.5) return 'Topaz (8) — scratches quartz and all common silicates. One perfect basal cleavage direction. Often colourless, blue, or yellow-green. Vitreous to adamantine lustre. Only tungsten carbide or diamond can scratch it in the field. Used as gemstone; common in granitic pegmatites and metamorphic quartzite.'
          if (v <= 9.5) return 'Corundum (9) / Tungsten carbide (~9) — second hardest natural mineral. Scratches all common minerals except diamond. Ruby and sapphire are gem-quality corundum. Hexagonal habit; no cleavage (parting instead). Used as industrial abrasive (emery = corundum + magnetite mixture). Requires a diamond or tungsten carbide tool to scratch in the field.'
          return 'Diamond (10) — hardest natural substance; scratches everything. Perfect octahedral cleavage in four directions. Adamantine (brilliant) lustre. Used as industrial cutting and drilling tool. Only another diamond can scratch it. Occurs in kimberlite pipes and alluvial placers. Its hardness makes it irreplaceable as a drilling abrasive.'
        },
        description: 'Remember: Mohs hardness measures resistance to scratching, not brittleness or toughness. Diamond (10) shatters more easily than steel (hardness ~5–6) even though it cannot be scratched by steel. A mineral scratches another only if it is harder — so always scratch the unknown mineral WITH the tool (look for a groove in the mineral), not scratch the tool with the mineral.',
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'You find a dark-coloured mineral in a rock. It leaves a red-brown streak on the streak plate, scratches easily with a copper coin, and produces no reaction with dilute HCl. What is the most likely mineral, and which three properties together identify it?',
          a: [
            'The mineral is pyrite. Pyrite has a metallic golden surface colour that can appear dark in some lights, and produces a red-brown streak; it is soft enough to be scratched by a coin and does not react with HCl at room temperature',
            'The mineral is haematite (Fe₂O₃). The three diagnostic properties are: (1) red-brown streak — haematite produces a characteristic red-brown streak regardless of whether its surface colour is metallic silver-grey (specular haematite), earthy red (ochre), or dark grey-black. Streak is more reliable than surface colour because it reflects the intrinsic mineral chemistry. (2) Low hardness (≤3, scratched by a copper coin) — haematite in its earthy or powdery form can be soft, and even specular haematite is ~5.5–6.5, but the question specifies the coin scratches it, indicating the earthy variety. (3) No HCl reaction — haematite is an iron oxide and does not effervesce in dilute HCl at room temperature, distinguishing it from calcite (carbonate). Together these three properties — red-brown streak + dark surface colour + no acid reaction — identify haematite',
            'The mineral is magnetite. Magnetite has a very dark, nearly black streak rather than red-brown, but it also fails to react with HCl; the copper coin test suggests it is soft; magnetite is typically magnetic',
            'The mineral is biotite mica. Biotite is dark-coloured, has a hardness of ~2.5–3 (scratched by a coin), and does not react with HCl. Biotite\'s streak is grey-brown rather than red-brown, but in the field these are easily confused',
          ],
          correct: 1,
          explain: "The three properties given form a diagnostic triad that points uniquely to haematite among common dark minerals. Red-brown streak: this is the single most diagnostic property of haematite. Many minerals have variable surface colours depending on grain size, oxidation state, and inclusions, but streak (the colour of the powdered mineral on a porcelain streak plate) reflects the fundamental mineral chemistry. Haematite (Fe₂O₃) consistently produces a red-brown streak whether the specimen is metallic silver (specular haematite), earthy red (ochre), or dark grey-black (some varieties). This is why streak is tested even when the mineral looks black or metallic. Low hardness scratched by coin (~3): haematite's hardness varies by form — specular/crystalline haematite is 5.5–6.5 (not scratched by a coin), while earthy or ochreous haematite can be 1–5 (scratched by a coin). The question specifies earthy/soft haematite. No HCl reaction: haematite is an iron oxide, not a carbonate. It does not effervesce in dilute HCl at room temperature. This rules out calcite (which fizzes vigorously), siderite (iron carbonate, which fizzes), and ankerite. Option A is incorrect: pyrite's streak is black (greenish-black), not red-brown — the classic fool's-gold test is the black pyrite streak. Option C is partially correct about dark colour but magnetite has a black streak, not red-brown, and is magnetic. Option D: biotite's streak is grey-brown (lighter than red-brown) and biotite has perfect basal cleavage producing flexible sheets — a distinctive property not mentioned in the question.",
        },
        {
          q: 'A rock sample is coarse-grained with crystals approximately 3–5 mm across, light grey, containing clear glassy quartz, pink K-feldspar, white plagioclase, and black biotite. Name the rock and explain which textural and mineralogical properties led to your identification.',
          a: [
            'This is a rhyolite. The light colour and quartz-rich mineralogy indicate a felsic volcanic composition equivalent to granite, and rhyolite can occasionally develop visible crystals if cooled slowly near the surface',
            'This is granite. Textural evidence: the crystals are 3–5 mm and visible to the naked eye (phaneritic texture), indicating slow cooling at depth in a plutonic (intrusive) setting — magma crystallised over hundreds of thousands to millions of years in a magma chamber several kilometres below the surface. Mineralogical evidence: the presence of all four minerals (quartz + K-feldspar + plagioclase + biotite) is the classic granite assemblage. Quartz (clear glassy, no cleavage, conchoidal fracture, hardness 7) is the definitive indicator of a silica-oversaturated felsic melt; K-feldspar (pink, two cleavages at ~90°, hardness 6) and plagioclase (white, two cleavages at ~90° but with striations from polysynthetic twinning, hardness 6) together give the feldspathic character of granite; biotite (black, one perfect basal cleavage, flexible sheets, hardness 2.5–3) is the most common mafic mineral in granite',
            'This is a gabbro. Gabbro has coarse-grained texture (phaneritic) identical to granite, and the presence of black biotite indicates a mafic composition; the light colour is simply surface weathering that has bleached the darker primary minerals',
            'This is a schist. The visible crystal size indicates metamorphic recrystallisation rather than igneous crystallisation; the quartz, feldspar, and biotite are typical of a pelitic (shale-derived) schist that has reached amphibolite-facies metamorphism',
          ],
          correct: 1,
          explain: "Rock identification in hand sample requires the systematic application of texture first, then mineralogy. Texture: the crystals are 3–5 mm — clearly visible to the naked eye without magnification. This is phaneritic (coarse-grained) texture, produced only by slow cooling at depth (plutonic intrusion). Volcanic rocks (rhyolite, basalt) cool in days to years at the surface and produce aphanitic (microscopic) or glassy textures. A phaneritic rock must be plutonic. Mineralogy: the four minerals present — quartz, K-feldspar, plagioclase, biotite — are the canonical granite assemblage. Granite is defined modally as having >20% quartz and subequal K-feldspar + plagioclase. Quartz: its clear glassy appearance, conchoidal fracture (no cleavage), and hardness 7 are distinctive. K-feldspar: the pink colour, two cleavages at approximately 90°, and hardness 6 (scratched by a knife) are characteristic; pink K-feldspar is one of the most recognisable minerals in the field. Plagioclase: white to grey, two cleavages at ~90°, but crucially shows fine parallel striations on cleavage faces from polysynthetic twinning — a definitive plagioclase feature invisible in K-feldspar. Biotite: black, one perfect basal cleavage producing flexible sheets. The combination of phaneritic texture + quartz + K-feldspar + plagioclase + biotite = granite, unambiguously. Option A (rhyolite) has the same chemistry but aphanitic texture. Option C (gabbro) is dark-coloured (no quartz, plagioclase + pyroxene/olivine). Option D (schist) is metamorphic — it would show foliation (schistosity), not random crystal arrangement.",
        },
        {
          q: 'Two rock samples both produce bubbles when dilute HCl is applied. Sample A fizzes vigorously when HCl is applied directly to the surface. Sample B fizzes only when the surface is first powdered with a knife. What are the two minerals, and what is the chemical reason for the difference in reactivity?',
          a: [
            'Sample A is dolomite and Sample B is calcite. Dolomite fizzes vigorously because its Mg content makes it more reactive than the Mg-free calcite; when calcite is powdered, the reaction actually slows because fine powder absorbs the acid',
            'Sample A is calcite (CaCO₃) and Sample B is dolomite (CaMg(CO₃)₂). Both are carbonate minerals and both react with HCl to produce CO₂ gas. The chemical difference: calcite reacts vigorously on direct HCl application because the Ca²⁺–CO₃²⁻ bonds are readily broken by H⁺ ions from the acid. Dolomite contains both Ca²⁺ and Mg²⁺ cations in an ordered alternating-layer structure. The Mg²⁺ ion is smaller and has a higher charge density than Ca²⁺, creating stronger bonds with the carbonate groups. This ordering slows the surface reaction rate dramatically — dolomite reacts negligibly with cold dilute HCl on a fresh unbroken surface but reacts measurably when the surface is powdered (greatly increasing surface area and exposing fresh reactive sites), or when warm/concentrated acid is used',
            'Sample A is calcite (CaCO₃) and Sample B is aragonite, a polymorph of calcite with the same chemistry but different crystal structure; aragonite is denser and reacts more slowly because its denser packing slows ion diffusion to the surface',
            'Sample A is siderite (FeCO₃) and Sample B is calcite (CaCO₃). Siderite contains iron and reacts immediately with HCl; calcite is less reactive and requires powdering; both are carbonate minerals and produce CO₂',
          ],
          correct: 1,
          explain: "The acid test (10% HCl applied by dropper) is a field-standard discrimination between the two most common carbonate minerals, calcite and dolomite. The reaction for calcite: CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂↑. The vigorous bubbling visible on the surface of limestone is CO₂ gas released by this reaction proceeding rapidly at room temperature on the unbroken mineral surface. Dolomite has the formula CaMg(CO₃)₂ — a double carbonate where Ca²⁺ and Mg²⁺ alternate in layers within the crystal structure. The Mg²⁺ ion has the same charge (+2) as Ca²⁺ but is significantly smaller (ionic radius 0.72 Å vs. 1.00 Å for Ca²⁺). This smaller size means Mg²⁺ has a higher charge density — it binds more tightly to the surrounding oxygen atoms of the carbonate group, and the dolomite crystal structure has a higher ordering energy than calcite. The result is that H⁺ ions from HCl cannot break the Mg–CO₃ bonds as readily at room temperature. On an unbroken dolomite surface, essentially no visible reaction occurs with cold dilute HCl. When the surface is powdered with a knife, the enormous increase in surface area (more fresh, reactive lattice sites exposed) allows the reaction to proceed at a measurable rate, producing slow, weak effervescence. This is the definitive field test: vigorous HCl on fresh surface = calcite; HCl reaction only when powdered = dolomite. Option A inverts the samples — dolomite does NOT react vigorously. Option C: aragonite is indeed a CaCO₃ polymorph and does react slightly differently from calcite, but the cold-dilute-HCl distinction between the two polymorphs is not reliable in the field and this is not the standard field test. Option D inverts the reactivity: siderite (FeCO₃) actually reacts slowly with cold HCl and calcite reacts rapidly.",
        },
        {
          q: 'You are given three metamorphic rock samples. Sample 1 has a smooth planar fracture with a dull lustre and no visible crystals. Sample 2 has a silky sheen on its cleavage surfaces. Sample 3 has a coarse foliation defined by aligned biotite and garnet porphyroblasts. Identify each rock, place them in order from lowest to highest metamorphic grade, and give the most likely protolith for Samples 1 and 2.',
          a: [
            'Sample 1 = marble (metamorphosed limestone), Sample 2 = quartzite (metamorphosed sandstone), Sample 3 = gneiss; grade order from lowest: marble < quartzite < gneiss; both marbles and quartzites form at lower temperatures than gneiss',
            'Sample 1 = slate; Sample 2 = phyllite; Sample 3 = schist. Grade order from lowest to highest: slate < phyllite < schist. Protolith for both 1 and 2: shale or mudstone (pelite — a fine-grained, clay-rich sedimentary rock). Slate forms at the lowest grade of regional metamorphism (chlorite zone, ~150–300°C): the original clay minerals have been partially recrystallised into chlorite and sericite, producing the characteristic smooth slaty cleavage, but individual crystals are not visible to the naked eye. Phyllite represents slightly higher grade than slate (~300–400°C): sericite (fine-grained white mica) and chlorite are coarser and their alignment on the foliation planes produces the diagnostic silky or satiny sheen. Schist forms at medium to high grade (~400–650°C): biotite, garnet, and other index minerals are large enough to see without magnification; the coarse schistosity (aligned micas) and garnet porphyroblasts indicate amphibolite facies',
            'Sample 1 = phyllite, Sample 2 = slate, Sample 3 = gneiss; grade order: phyllite < slate < gneiss; phyllite has a silky sheen indicating lower grade than the dull-lustre slate; both have shale protoliths',
            'Sample 1 = schist (very fine-grained variety), Sample 2 = phyllite, Sample 3 = gneiss; grade order: schist < phyllite < gneiss; the smooth fracture in Sample 1 is a fine-grained schist with chlorite rather than mica defining the foliation; both have igneous protoliths',
          ],
          correct: 1,
          explain: "Metamorphic rocks form a continuous sequence of increasing grade, and the foliated rocks slate → phyllite → schist → gneiss record progressively higher temperature and pressure metamorphism of a pelitic (clay-rich sedimentary) protolith. Sample 1 (slate): the key properties are (1) smooth, planar fracture — the slaty cleavage; (2) dull lustre — individual crystals are too fine-grained (generally <0.01 mm) to reflect light individually, producing an aggregate dull surface; (3) no visible crystals — confirms very low grade metamorphism. Slate forms in the chlorite zone (approximately 150–300°C, 2–5 km depth). The protolith shale has its clay minerals recrystallised into chlorite and sericite (fine muscovite), and the new foliation (slaty cleavage) is usually at an angle to the original bedding. Sample 2 (phyllite): the silky or satin sheen is the single diagnostic property — it results from aligned sericite (fine muscovite) and chlorite crystals that are slightly coarser than in slate (roughly 0.01–0.1 mm), large enough to reflect light specularly from the foliation surface. Grade is slightly higher than slate (~300–400°C). Same protolith as slate: shale or mudstone. Sample 3 (schist): aligned biotite (which requires ~400°C to form stably), plus garnet porphyroblasts (which typically grow at ~450–550°C in the almandine garnet zone of amphibolite facies). The coarseness of the crystals, visible to the naked eye, and the garnet growth are together diagnostic of medium-to-high grade metamorphism. Grade order: slate (lowest, ~150–300°C) < phyllite (~300–400°C) < schist (~400–650°C). Options A and C confuse marble and quartzite — non-foliated metamorphic rocks with different protoliths (limestone and sandstone respectively). Option D inverts the slate and phyllite definitions.",
        },
        {
          q: 'A volcanic rock contains approximately 3 mm hornblende and plagioclase crystals (phenocrysts) set in a fine-grained dark groundmass, with 10–20% vesicles partially filled by green chlorite. Identify the rock and explain what the texture tells you about its cooling history and what the vesicles tell you about the eruption conditions.',
          a: [
            'This is a pumice. Pumice is rhyolitic, highly vesicular, and has the porphyritic texture described; it floats on water because of the vesicle content; the chlorite filling indicates post-depositional hydrothermal alteration of the glass shards',
            'This is a porphyritic andesite (or basaltic andesite). The rock is identified by: porphyritic texture (phenocrysts in a fine-grained groundmass); hornblende + plagioclase phenocrysts (intermediate mineralogy — hornblende requires moderate water content in the melt and is characteristic of andesitic to dacitic compositions); dark fine-grained groundmass (mafic to intermediate bulk composition). Cooling history: the hornblende and plagioclase phenocrysts grew slowly in a magma chamber at depth (the first, slow stage of cooling) before the magma was erupted. Rapid eruption then quenched the remaining melt to a fine-grained or glassy groundmass (the second, fast stage). The vesicles record volatile-rich magma: as the magma rose and pressure decreased, dissolved gases (H₂O, CO₂, SO₂) exsolved and formed bubbles. These were trapped when the groundmass solidified rapidly on eruption. The green chlorite partially filling the vesicles (forming amygdales) is a secondary hydrothermal mineral, not a primary magmatic one — it precipitated from hydrothermal fluids circulating through the rock after eruption and cooling',
            'This is an obsidian. Obsidian is a volcanic glass with no visible crystals; the "phenocrysts" described are actually xenocrysts (foreign crystals incorporated from the country rock); the vesicles and chlorite are diagnostic of obsidian hydration during weathering',
            'This is a scoria. Scoria is highly vesicular basalt; the porphyritic texture and hornblende phenocrysts confirm it is basaltic; hornblende is the characteristic phenocryst phase of scoria and distinguishes it from pumice, which contains pyroxene instead',
          ],
          correct: 1,
          explain: "This rock combines multiple diagnostic features that together identify it unambiguously. Rock name: porphyritic andesite (or porphyritic basaltic andesite — the presence of hornblende phenocrysts alongside plagioclase in an intermediate-to-mafic groundmass indicates an andesitic to basaltic-andesitic composition). In some classifications with vesicles, this would be noted as a vesicular porphyritic andesite. Porphyritic texture and its meaning: the phenocrysts (3 mm — clearly visible to the naked eye) represent minerals that nucleated and grew in the magma chamber at depth over thousands to hundreds of thousands of years. The surrounding fine-grained groundmass represents the remaining melt that crystallised rapidly on eruption — grains too small to see without magnification, formed in days to years at or near the surface. This two-stage cooling history is recorded in the two-component texture — phenocrysts = slow deep cooling; groundmass = fast surface cooling. Hornblende as a phenocryst is significant: hornblende (an amphibole) is a hydrous mineral containing OH groups in its structure. It crystallises in magmas that have moderate water content (typically andesitic to dacitic compositions). Vesicles and chlorite: as the magma ascended in the volcanic conduit, decreasing pressure caused dissolved volatiles (primarily H₂O and CO₂) to exsolve, forming bubbles. These were trapped in the rapidly-solidifying groundmass as vesicles. After eruption and cooling, hydrothermal fluids (heated groundwater) percolated through the rock and deposited chlorite (a Mg-Fe sheet silicate, characteristically green) in the open vesicle space, converting them to amygdales. Chlorite crystallising in vesicles is a very common secondary alteration product in mafic and intermediate lavas. Option A (pumice) is rhyolitic, pale-coloured, and extremely vesicular (>50%) — it floats. Option C (obsidian) is glassy with no phenocrysts. Option D (scoria) is basaltic with little or no hornblende — hornblende is not a common scoria phenocryst.",
        },
      ],
    },
  ],
}

export default rockMineralIdentification
