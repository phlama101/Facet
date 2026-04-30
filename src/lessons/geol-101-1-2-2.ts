import { Diamond, Feather, Layers } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const identifyingMinerals: Lesson = {
  id: 'geol-101-1-2-2',
  title: 'Identifying Minerals — Hardness, Streak, and Cleavage',
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 150,
  description: "A fingernail, a penny, and a porcelain tile are all a geologist needs to identify most minerals — because crystalline structure guarantees that every sample of the same mineral behaves identically.",
  sources: [
    { org: 'USGS',        title: 'Mineral Resources Program',                                   url: 'https://www.usgs.gov/programs/mineral-resources-program' },
    { org: 'Smithsonian', title: 'National Museum of Natural History — Geology, Gems and Minerals', url: 'https://naturalhistory.si.edu/research/geology-gems-and-minerals' },
    { org: 'NPS',         title: 'Geology Fieldnotes — Minerals',                               url: 'https://www.nps.gov/subjects/geology/minerals.htm' },
    { org: 'OpenStax',    title: 'Physical Geology, 2nd ed. (CC-BY 4.0)',                       url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'UCAR Center for Science Education', title: 'Earth materials and minerals',          url: 'https://scied.ucar.edu/learning-zone/earth' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Reading the clues',
      body: `Imagine you are handed an unlabelled fragment of an unknown mineral. No context, no hints. In a field geology kit you have: a fingernail, a copper coin, a piece of glass, a steel nail file, and a small tile of unglazed porcelain. That is all. Within two minutes, an experienced geologist can use those five objects to narrow the mineral down to a handful of candidates — and often identify it precisely.

This is not guesswork. It is the direct consequence of something we established in Lesson 1.2.1: every sample of a given mineral has the same **crystalline lattice**. The same lattice means the same bond geometry throughout the crystal. The same bond geometry means the same resistance to scratching, the same tendency to break in particular directions, and the same way the surface interacts with light — everywhere, every time, in every sample of that species on Earth. Identification is possible because consistency is built into the physics.

This lesson introduces the four main physical properties used to identify minerals in the field — **hardness**, **streak**, **cleavage**, and **luster** — along with the supporting properties that help when the main four are ambiguous. Together they form an identification toolkit that geologists have been refining for two centuries, and that still works as well today as it did when Friedrich Mohs published his hardness scale in 1812.`,
      keyTerms: [
        {
          term: 'Hardness',
          def: "A mineral's resistance to being scratched, determined by the strength and geometry of bonds in its crystal lattice. Measured on the Mohs scale from 1 (softest — talc) to 10 (hardest — diamond). A harder mineral will always scratch a softer one.",
        },
        {
          term: 'Streak',
          def: "The colour of a mineral when powdered — determined by dragging the mineral across an unglazed porcelain plate. Streak is more reliable than surface colour for identification because trace impurities can change a mineral's surface colour while leaving its streak unchanged.",
        },
        {
          term: 'Cleavage',
          def: "The tendency of a mineral to break along flat, smooth planes in specific directions, controlled by planes of weaker chemical bonds running through the crystal lattice. Cleavage planes are reproducible: every break in that direction produces the same flat surface at the same angle.",
        },
        {
          term: 'Luster',
          def: "The quality and character of light reflected from a mineral's surface — not its colour, but how the surface handles light. The two primary categories are metallic (shiny, opaque, like polished metal) and non-metallic (which includes vitreous/glassy, waxy, pearly, silky, and adamantine).",
        },
      ],
    },
    {
      type: 'concept',
      title: 'The identification toolkit',
      body: `**Why consistency makes identification possible.** Lesson 1.2.1 established that every sample of a given mineral species has the same crystalline lattice — the same atoms arranged in the same repeating three-dimensional pattern. That shared structure means the same types and strengths of chemical bonds throughout the crystal. Bond strength determines how hard it is to scratch a surface. Bond direction determines where the crystal will preferentially break. Bond geometry and electron arrangement determine how the surface interacts with light. Because the lattice is universal across all samples of a species, so are all the physical properties derived from it. A grain of quartz formed 500 million years ago in the Sahara and a grain of quartz crystallising today in a Vermont quarry are physically indistinguishable. That universal reproducibility is what turns physical property testing from guesswork into science.

**Hardness — the Mohs scale.** Hardness measures resistance to scratching — not to breaking. A mineral can be hard but brittle (hard to scratch, but shatters when struck) or soft but tough (easy to scratch, but difficult to fracture). The Mohs hardness scale, published by German mineralogist Friedrich Mohs in 1812, ranks ten reference minerals from 1 (softest) to 10 (hardest):

**1 — Talc** · **2 — Gypsum** · **3 — Calcite** · **4 — Fluorite** · **5 — Apatite** · **6 — Orthoclase feldspar** · **7 — Quartz** · **8 — Topaz** · **9 — Corundum** · **10 — Diamond**

The scale is ordinal and relative, not linear. The jump in absolute hardness from corundum (9) to diamond (10) is enormous — diamond is roughly four times harder than corundum by absolute measurement, not just one step. The scale is a ranking, not a ruler.

A harder mineral will always scratch a softer one. If quartz (7) scratches feldspar (6), but topaz (8) scratches quartz, that is consistent with the scale. The test always goes both ways: scratch the unknown with the reference, then scratch the reference with the unknown, and confirm which left a mark on which.

You do not need all ten reference minerals to do useful field testing. **Everyday objects serve as calibrated reference points**: a human fingernail has hardness approximately **2.5**; a copper coin is approximately **3.5**; a glass plate is approximately **5.5**; a steel nail file is approximately **6.5**. By working through these in sequence, you can bracket any mineral's hardness without specialised equipment. A mineral that scratches glass (5.5) but is scratched by a steel file (6.5) has a hardness between 5.5 and 6.5 — consistent with orthoclase feldspar at 6.

**Streak — more reliable than colour.** Streak is the colour of a mineral's powder, produced by dragging the mineral across an unglazed porcelain plate (hardness ~6.5). The powder strip left behind is the streak. It sounds simple, but it solves one of the most persistent problems in mineral identification: the unreliability of surface colour.

The colour of an intact mineral surface can be altered by many things: trace amounts of chemical impurities, oxidation on the surface, tarnish, or coatings from other minerals. **Quartz** is the classic example of colour variability. Pure quartz is colourless. Trace amounts of manganese produce purple quartz — the variety called amethyst. Trace iron produces yellow quartz (citrine). Trace titanium produces pink quartz (rose quartz). Radiation-induced defects produce smoky brown quartz. All of these look completely different on the surface — but all of them, dragged across a streak plate, produce the same **white streak**. The powder eliminates surface effects and reveals the mineral's fundamental pigment.

Some minerals are even more dramatically different between surface and streak. **Pyrite** — iron sulphide — has a bright, metallic golden surface that has fooled prospectors for centuries into thinking they found gold (hence "fool's gold"). Its streak is a distinctive **greenish-black**, immediately distinguishing it from real gold, whose streak is golden yellow. **Hematite** can appear black or dark metallic grey at the surface, but its streak is a characteristic **brick red** — the same iron oxide pigment that colours rust. In both cases, streak does in seconds what visual colour inspection cannot.

Note that streak only works when the mineral is harder than the porcelain plate. Minerals harder than ~6.5 (quartz, topaz, corundum, diamond) will scratch the plate rather than leaving a streak. For those minerals, other properties take priority.

**Cleavage and fracture — two ways to break.** When a mineral breaks, it does so in one of two fundamental ways, and which way it breaks tells you something important about its internal structure.

**Cleavage** is breakage along flat, parallel planes corresponding to directions where chemical bonds in the crystal lattice are weaker than in other directions. Because the lattice repeats uniformly throughout the crystal, these planes of weakness run parallel across the entire specimen. Every time you break the mineral in that direction — no matter how many fragments you produce — you get the same flat, smooth surface at the same angle. The number of cleavage directions and the angles between them are characteristic of the mineral species.

**Mica** has one perfect cleavage direction, running parallel to its flat faces. This is why mica peels into thin, flexible sheets: each peel is a cleavage break. **Calcite** has three cleavage directions at specific angles, which is why a broken calcite crystal — no matter its original shape — can always be cleaved into a characteristic rhombohedron (a shape like a skewed cube). **Feldspar** has two cleavage directions at nearly right angles, producing blocky fragments with two sets of flat faces. **Halite** has three cleavage directions at right angles — it always cleaves into perfect cubes, which is why table salt has cubic crystals.

**Fracture** is what happens when a mineral breaks in a direction that has no cleavage plane — where bonds are roughly equal in strength, or simply in directions not governed by lattice weakness. **Quartz** has no cleavage at all: its silicon-oxygen bonds are equally strong in all directions. When quartz breaks, it fractures irregularly, producing curved, smooth, shell-like surfaces called **conchoidal fracture** — the same distinctive pattern as broken glass. Conchoidal fracture was extraordinarily useful to prehistoric humans: obsidian (a volcanic glass, technically a mineraloid) fractures conchoidally too, and skilled toolmakers could control the fracture pattern to produce razor-sharp edges. Flint — a microcrystalline form of quartz — was the foundation of Stone Age technology for the same reason.

A mineral can exhibit both properties: it may have well-defined cleavage in some directions and fracture in others. The distinction between cleavage (flat, reproducible, controlled by lattice) and fracture (irregular, not lattice-controlled) is one of the first things an experienced mineralogist notes when examining a broken specimen.

**Luster — how the surface handles light.** Luster is not colour — it is the quality and character of light reflected from a mineral's surface. The primary division is between **metallic** and **non-metallic**. Metallic luster is the reflective, opaque appearance of polished metal: galena (lead sulphide), pyrite, native copper, and native gold all show metallic luster. Non-metallic minerals cover a broader range:

- **Vitreous** (glassy): the most common; quartz and most silicate minerals appear glassy in transmitted and reflected light
- **Pearly**: iridescent, like the inner surface of a shell; mica and some calcite surfaces show this
- **Silky**: fine, parallel internal fibres that scatter light directionally; fibrous gypsum (satin spar) is the textbook example
- **Waxy**: soft, subdued shine like candle wax; flint and some serpentine minerals
- **Adamantine**: extremely brilliant, very high refractive index; diamond is the reference mineral, and some zircon and cassiterite show this
- **Resinous**: like amber or dried resin; some sulphur and sphalerite samples

Luster alone rarely identifies a mineral uniquely, but in combination with hardness, streak, and cleavage it often eliminates most candidates immediately. A metallic-lustered mineral with a greenish-black streak and cubic cleavage is almost certainly galena, before any other test is run.

**Colour, crystal form, and specific gravity.** Several properties supplement the main four without replacing them. **Colour** is always worth noting as a starting observation, but must be treated with caution: it is the least reliable identifier used alone. Record colour, then immediately check streak to confirm whether the colour is consistent with the mineral's fundamental pigment. **Crystal form** — the external geometric shape produced by the internal lattice — can be diagnostic when well-formed crystals are present: hexagonal prisms with pyramidal terminations (quartz), perfect cubes (halite, galena), rhombohedra (calcite), octahedra (magnetite, fluorite). **Specific gravity** — how many times denser a mineral is than water — distinguishes heavy minerals (galena ~7.6, gold ~19.3) from light ones (quartz ~2.65) when other tests are ambiguous; even without a scale, experienced geologists often detect anomalous density just by hefting a sample in the hand.

**Using the toolkit together.** The power of mineral identification comes from combining properties, not from any single test. A systematic field approach works like this: observe luster first (metallic or non-metallic — this immediately eliminates half the mineral world); test hardness using everyday reference points to bracket the range; drag across a streak plate and record the colour; examine how the mineral breaks for cleavage planes and fracture patterns; note colour and any special properties — effervescence in dilute acid (calcite), magnetism (magnetite), distinctive smell (sulphur). With four or five properties recorded and cross-referenced, most common minerals resolve to a single identity. Lesson 1.2.3 will apply this toolkit directly to the thirty or so minerals that make up the overwhelming majority of Earth's crust and mantle.`,
      cards: [
        {
          name: 'Hardness — Mohs Scale',
          icon: Diamond,
          color: BRAND.gold,
          desc: "Resistance to scratching, measured on a 1–10 ordinal scale: Talc(1) · Gypsum(2) · Calcite(3) · Fluorite(4) · Apatite(5) · Orthoclase(6) · Quartz(7) · Topaz(8) · Corundum(9) · Diamond(10). The scale is relative, not linear — diamond is ~4× harder than corundum in absolute terms. Field reference points: fingernail ~2.5 · penny ~3.5 · glass ~5.5 · steel file ~6.5. Always test in both directions to confirm which scratches which.",
          examples: 'Fingernail ~2.5 · Penny ~3.5 · Glass ~5.5 · Steel file ~6.5',
        },
        {
          name: 'Streak',
          icon: Feather,
          color: BRAND.accent,
          desc: "The colour of a mineral's powder, produced by dragging it across an unglazed porcelain plate (~6.5 hardness). Streak is more reliable than surface colour because trace impurities alter surface appearance but not the fundamental pigment. All quartz varieties (clear, amethyst, citrine, rose) give a white streak. Pyrite's golden surface gives a greenish-black streak — instantly distinguishing it from gold. Hematite's grey-black surface gives a brick-red streak. Minerals harder than ~6.5 scratch the plate instead of streaking.",
          examples: 'Pyrite: gold surface → greenish-black streak · Hematite: grey → red streak · Quartz: any colour → white streak',
        },
        {
          name: 'Cleavage & Fracture',
          icon: Layers,
          color: BRAND.amethyst,
          desc: "Cleavage: breakage along flat, reproducible planes defined by weaker bonds in the crystal lattice. Mica has one perfect plane (peels into sheets). Calcite has three planes (always cleaves into rhombohedra). Halite has three at right angles (perfect cubes). Fracture: irregular breakage where no cleavage planes exist. Quartz has no cleavage — it fractures conchoidally (curved, shell-like surfaces), a property exploited in prehistoric stone toolmaking. A single mineral can show both: cleavage in some directions, fracture in others.",
          examples: 'Mica: 1 plane → sheets · Calcite: 3 planes → rhombohedra · Quartz: no cleavage → conchoidal fracture',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "A mineral scratches a glass plate (~5.5 Mohs) but is scratched by a steel nail file (~6.5 Mohs). What is the mineral's approximate hardness, and which reference mineral does this match?",
          a: [
            'Between 2 and 3 — softer than a copper coin; consistent with gypsum',
            'Between 5.5 and 6.5 — harder than glass but softer than a steel file; consistent with orthoclase feldspar',
            'Exactly 7 — the same hardness as quartz, since it scratches glass',
            'Between 8 and 9 — harder than topaz, since steel files are generally very hard',
          ],
          correct: 1,
          explain: "A hardness between 2 and 3 (A) would mean the mineral is softer than a copper coin (~3.5) and far softer than glass — it would not scratch glass at all. The correct answer is B: a mineral that scratches glass (~5.5) but cannot scratch a steel file (~6.5) must have a hardness greater than 5.5 and less than 6.5 — this brackets it at approximately 6, which matches orthoclase feldspar. The result is not exactly 7 (C): quartz at 7 would scratch both glass and a steel file, not just glass. Steel files are approximately 6.5 (D), not 8–9 — topaz (8) and corundum (9) are far harder than any common tool steel.",
        },
        {
          q: "Why is streak a more reliable identification property than the surface colour of a mineral?",
          a: [
            'Streak colour is always identical to the mineral\'s surface colour, making it easier to match against reference charts',
            'Surface colour can be altered by trace chemical impurities, oxidation, or tarnish, while streak reflects the mineral\'s fundamental structural pigment',
            'Streak is measured with precision instruments, whereas colour is only observed by the unaided human eye',
            'Streak is only useful for metallic minerals, making it a more specific and therefore more precise test',
          ],
          correct: 1,
          explain: "Streak colour is often dramatically different from surface colour — pyrite has a golden surface and a greenish-black streak, and hematite has a grey-black surface and a red streak, so (A) is wrong. The correct answer is B: surface colour is affected by trace impurities, oxidation, tarnish, and surface coatings, all of which alter the visual appearance without changing the mineral's fundamental chemistry; powdering the mineral on a streak plate eliminates these surface effects and reveals the true pigment of the mineral species. No precision instrument is involved in either test (C) — both are direct visual observations. Streak is actually less useful for minerals harder than ~6.5 because they scratch the porcelain plate rather than leaving a powder line, so it is not restricted to metallic minerals and in fact cannot be obtained from the hardest minerals at all (D is wrong).",
        },
        {
          q: "A mineral breaks into smooth, flat-faced fragments that always meet at the same angle, regardless of how many times it is broken or in which part of the specimen. Which property does this demonstrate, and what does it reveal about the mineral's internal structure?",
          a: [
            'Conchoidal fracture — the curved, shell-like pattern that forms when chemical bonds are equally strong in all directions throughout the crystal',
            'Hardness — the resistance of chemical bonds to scratching causes the mineral to break in geometrically predictable patterns',
            'Cleavage — the mineral is breaking along flat planes that correspond to directions of weaker chemical bonds repeating uniformly through the crystal lattice',
            'Streak — the flat, smooth faces left by breaking produce a visible colour similar to the mineral\'s powder',
          ],
          correct: 2,
          explain: "Conchoidal fracture (A) produces curved, smooth surfaces — like broken glass — not flat-faced fragments meeting at consistent angles; conchoidal fracture occurs precisely when bonds are equally strong in all directions, leaving no flat cleavage planes. Hardness (B) measures resistance to scratching, not how a mineral breaks; a hard mineral can shatter irregularly while a soft one can cleave perfectly. The correct answer is C: cleavage occurs when the crystal lattice has repeating planes where bonds are weaker than in surrounding directions; because the lattice is uniform throughout, those weak planes run parallel across the entire specimen, producing the same flat surface and the same inter-face angle every time the mineral is broken anywhere in the crystal. Streak (D) refers to the colour of powdered mineral dragged across a porcelain plate — it has nothing to do with the geometry of how intact specimens break.",
        },
      ],
    },
  ],
}

export default identifyingMinerals
