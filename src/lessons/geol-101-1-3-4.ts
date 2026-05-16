import { Layers, Gem, Thermometer } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const metamorphicRocks: Lesson = {
  id: 'geol-101-1-3-4',
  title: 'Metamorphic Rocks',
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 150,
  description: "Michelangelo's David began as a seashell. Marble is metamorphosed limestone — recrystallised by heat and pressure into something entirely new, without ever melting.",
  sources: [
    { org: 'USGS',        title: 'Metamorphic Rocks (Public Domain)',                                url: 'https://www.usgs.gov/educational-resources' },
    { org: 'NPS',         title: 'Geology Fieldnotes — Metamorphic Rocks',                          url: 'https://www.nps.gov/subjects/geology/metamorphic.htm' },
    { org: 'Smithsonian', title: 'National Museum of Natural History — Geology, Gems and Minerals', url: 'https://naturalhistory.si.edu/research/geology-gems-and-minerals' },
    { org: 'OpenStax',    title: 'Physical Geology, 2nd ed. (CC-BY 4.0)',                           url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'UCAR Center for Science Education', title: 'Earth materials',                           url: 'https://scied.ucar.edu/learning-zone/earth' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Rock transformed',
      body: `Carrara marble — the smooth, white, translucent stone used by Michelangelo to carve the David and the Pietà — was once ordinary limestone on an ancient seafloor, built from the compressed shells of marine organisms. When the African plate began closing the Tethys Ocean tens of millions of years ago, that seafloor limestone was buried under kilometres of rock, heated, and squeezed. The calcite grains recrystallised into large interlocking crystals without ever melting, erasing the original shell textures and producing a sparkling, uniform stone. The David was once a seashell. Metamorphic rocks are the most dramatic evidence that no rock is permanent — every rock is subject to transformation by Earth's relentless internal processes.

The word **metamorphism** comes from the Greek for "change of form." It describes a process fundamentally different from igneous rock formation: where igneous rocks form by the solidification of a melt, metamorphic rocks form entirely in the solid state. Atoms migrate through the crystal lattice or along grain boundaries, minerals dissolve and reprecipitate, and new mineral assemblages grow — all without the rock ever becoming liquid. The driving forces are heat (which speeds atomic diffusion) and pressure (which determines which minerals are thermodynamically stable).

This lesson introduces the two settings where metamorphism occurs, the key textural feature — **foliation** — that distinguishes most metamorphic rocks in the field, the sequence of rock types produced as metamorphic intensity increases, and the common metamorphic rocks you are most likely to encounter. With this lesson, Chapter 3 is complete: you now have the vocabulary for all three rock families. Chapter 4 will show how plate tectonics controls where in the rock cycle rocks currently sit.`,
      keyTerms: [
        {
          term: 'Metamorphism',
          def: "The transformation of pre-existing rock (of any family) by elevated temperature and/or pressure, without fully melting the rock. Minerals recrystallise in the solid state into new assemblages that are stable under the new conditions.",
        },
        {
          term: 'Protolith',
          def: "The original rock from which a metamorphic rock formed. Marble's protolith is limestone; quartzite's protolith is sandstone; schist's protolith is typically shale. Identifying the protolith is a key step in interpreting a metamorphic rock's history.",
        },
        {
          term: 'Foliation',
          def: "A planar fabric in metamorphic rock produced by the parallel alignment of flat or elongated minerals — micas, chlorite, amphiboles — under directed pressure. Foliation planes are perpendicular to the direction of maximum compressive stress and give foliated rocks their characteristic layered or fissile appearance.",
        },
        {
          term: 'Metamorphic grade',
          def: "The intensity of metamorphism a rock has experienced, reflecting the maximum temperature and pressure conditions it reached. Low-grade rocks (slate, phyllite) formed at relatively low temperatures; high-grade rocks (schist, gneiss) formed at much higher temperatures and pressures.",
        },
        {
          term: 'Contact metamorphism',
          def: "Metamorphism driven primarily by heat from a nearby igneous intrusion, without significant directed pressure. Produces a zone of altered rock (aureole) surrounding the intrusion; typically non-foliated because there is no directed stress.",
        },
        {
          term: 'Regional metamorphism',
          def: "Metamorphism driven by both elevated temperature and directed pressure across a large region, typically in the root zone of a mountain belt where rocks are deeply buried during continental collision. Produces foliated rocks (slate, schist, gneiss) over areas of thousands of square kilometres.",
        },
      ],
    },
    {
      type: 'concept',
      title: 'Pressure, heat, transformation',
      body: `**How metamorphism works.** When rock is buried deeply enough, or exposed to heat from a nearby magma body, the minerals in the rock become thermodynamically unstable — they exist outside the pressure-temperature conditions under which they originally crystallised. Atoms respond by migrating along grain boundaries and through crystal lattices, breaking old bonds and forming new ones. New minerals grow; old minerals shrink or disappear. This solid-state recrystallisation continues until the rock reaches a new equilibrium with its environment. The result is a metamorphic rock whose mineral assemblage records the peak conditions it experienced — like a natural thermometer and pressure gauge frozen in stone.

**Two metamorphic settings.** Metamorphism occurs in two fundamentally different geological settings, producing different rock types. **Contact metamorphism** occurs when magma intrudes into cooler country rock. The heat from the cooling intrusion bakes the surrounding rock in a concentric zone called a **thermal aureole** or contact aureole. Because the heat source is local and there is no significant directed pressure (the stress from burial is roughly equal in all directions), the resulting rocks are typically **non-foliated** — they recrystallise but do not develop a planar fabric. The most common contact metamorphic rock is **hornfels**: a dense, fine-grained, dark rock that forms when shale or mudstone is baked by an intrusion. Contact aureoles range from metres to kilometres in width depending on the size and temperature of the intrusion. **Regional metamorphism** occurs across vast areas in mountain belt root zones, where continental collision drives thick sequences of rock to depths of 15–50 km (9.3–31 mi). At these depths, both temperature and directed pressure are extreme — and it is the directed pressure that is the key difference. When rocks are squeezed more strongly in one direction than another, flat and elongated minerals — micas, chlorite, amphiboles — grow with their flat faces perpendicular to the maximum compressive stress. This produces the characteristic planar fabric of **foliation**. Regional metamorphic rocks cover thousands of square kilometres in ancient mountain belts like the Appalachians, the Scottish Highlands, and the Himalayas.

**Foliation — reading pressure direction.** Foliation is the most distinctive and diagnostic feature of regionally metamorphosed rocks. It develops because flat minerals like micas have a strong preference to grow with their sheets perpendicular to compressive stress — this orientation minimises strain energy. The degree of foliation and the size of the minerals visible in it increase with metamorphic grade. At low grades, foliation is microscopic — the rock splits along smooth flat planes but individual minerals are invisible without a microscope. At higher grades, individual mica flakes become visible, then grow to centimetre scale. At the highest grades, foliation may become irregular or indistinct as the rock approaches partial melting.

**The shale-to-gneiss sequence.** Shale — a fine-grained clastic sedimentary rock composed primarily of clay minerals — is the classic protolith for demonstrating the metamorphic grade sequence, because clay minerals are highly reactive and transform progressively through well-defined stages. **Slate** is the lowest-grade product: fine-grained, splitting along perfectly flat cleavage planes (making it ideal for roofing tiles and chalkboards), with individual minerals too small to see. **Phyllite** is the next step: slightly coarser, with a characteristic silky or satiny sheen on cleavage surfaces from fine-grained micas, and a gentle waviness to the foliation. **Schist** is medium-grade: individual mica flakes — muscovite, biotite — are clearly visible, often with distinctive porphyroblasts of garnet, staurolite, or kyanite that grew within the foliated matrix. Schist is the most common regional metamorphic rock encountered in the field. **Gneiss** is high-grade: coarse-grained with a striking banded appearance — alternating light-coloured bands of feldspar and quartz and dark bands of biotite, hornblende, or pyroxene. Gneiss represents some of the deepest and hottest conditions a rock can experience without melting, and forms the cores of ancient cratons and deeply eroded mountain belts.

**Non-foliated metamorphic rocks.** Not all metamorphic rocks develop foliation. When the protolith lacks flat or elongated minerals, there is nothing to align under pressure, and the resulting rock is **non-foliated** even under regional conditions. **Marble** forms from limestone or dolostone: the calcite or dolomite grains recrystallise into a mosaic of interlocking equidimensional crystals — smooth, sparkling, with no preferred orientation. The original fossil and bedding structures of the limestone are usually destroyed. Marble ranges from pure white (Carrara) to coloured by impurities (green from chlorite, pink from iron oxides). **Quartzite** forms from quartz-rich sandstone: the quartz grains fuse together under heat and pressure into an extremely hard, dense rock that breaks through the grains rather than around them (unlike the original sandstone, which breaks around grains). Quartzite is one of the hardest common rocks and forms prominent ridges in eroded mountain belts.

**Index minerals — grade markers.** Geologists use **index minerals** — minerals that first appear at specific temperature-pressure conditions — to map metamorphic zones in the field. The classic sequence from low to high grade in metapelites (metamorphosed shales) is: **chlorite** → **biotite** → **garnet** → **staurolite** → **kyanite** → **sillimanite**. Each mineral marks a specific P-T threshold. Drawing lines through field localities where each index mineral first appears produces **isograds** — metamorphic contours that map the intensity of past metamorphism across a region, revealing the ancient thermal structure of mountain belts long since eroded to their roots.`,
      interaction: {
        type: 'scientific-diagram' as const,
        id: 'metamorphic-grade',
        caption: 'Pressure–temperature diagram showing metamorphic facies and the Barrovian index mineral sequence (chlorite → biotite → garnet → staurolite → kyanite → sillimanite) at ~3 kbar.',
        credit: 'After Barrow (1912) · Winter (2001)',
      },
      cards: [
        {
          name: 'Foliated Rocks',
          icon: Layers,
          color: BRAND.amethyst,
          desc: "Form under directed pressure; flat minerals (micas, chlorite, amphiboles) align perpendicular to stress, producing planar fabric. Grade sequence from shale protolith: Slate (low grade) — fine-grained, perfect flat cleavage, used for roofing tiles. Phyllite — silky sheen, wavy foliation. Schist (medium grade) — visible mica flakes, often with garnet porphyroblasts. Gneiss (high grade) — coarse, alternating light/dark bands of quartz-feldspar and mica-amphibole.",
          examples: 'Slate: roofing tiles, fine cleavage · Phyllite: silky sheen · Schist: visible micas + garnet · Gneiss: high-grade banded',
        },
        {
          name: 'Non-Foliated Rocks',
          icon: Gem,
          color: BRAND.gold,
          desc: "Form when the protolith lacks flat minerals, so there is nothing to align under pressure. Marble: recrystallised limestone — interlocking equidimensional calcite crystals, smooth and sparkling, no foliation. White (Carrara) to coloured by impurities. Used in sculpture and architecture for millennia. Quartzite: recrystallised sandstone — fused quartz grains, extremely hard, breaks through grains not around them; forms resistant ridges in eroded mountain belts.",
          examples: `Marble: recrystallised limestone, Michelangelo\'s medium · Quartzite: fused quartz, very hard, ridge-forming · Hornfels: baked shale near intrusions`,
        },
        {
          name: 'Metamorphic Conditions',
          icon: Thermometer,
          color: BRAND.ruby,
          desc: "Contact metamorphism: heat from igneous intrusion bakes surrounding rock in a thermal aureole (metres to kilometres wide). No directed pressure → non-foliated hornfels. Regional metamorphism: heat + directed pressure in mountain belt roots — produces foliated rocks over thousands of km². Index minerals map grade zones: chlorite (low) → biotite → garnet → staurolite → kyanite → sillimanite (high). Isograds connect localities of equal metamorphic grade.",
          examples: 'Contact aureole: baked zone around granite · Regional: Appalachians, Scottish Highlands · Garnet schist: medium-grade marker',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "What is the fundamental difference between metamorphism and igneous rock formation?",
          a: [
            "Metamorphism only occurs near Earth's surface under low pressure; igneous rocks form deep underground under high pressure",
            "Metamorphism transforms rock in the solid state through heat and/or pressure without melting it; igneous rock forms by the cooling and crystallisation of a melt",
            "Metamorphism always requires water to transport ions between minerals; igneous rock formation is always dry",
            "There is no fundamental difference — both involve mineral recrystallisation driven by high temperatures, and the distinction is purely historical",
          ],
          correct: 1,
          explain: "Metamorphism does not occur only near the surface (A) — regional metamorphism occurs at depths of 15–50 km (9.3–31 mi) in mountain roots, far underground; conversely, contact metamorphism can occur at shallow depths near volcanic intrusions. The correct answer is B: the defining distinction is state of matter; metamorphism is a solid-state process — atoms migrate through crystal lattices and grain boundaries, minerals recrystallise, and new assemblages grow, all without the rock becoming liquid; igneous rock formation, by contrast, requires a melt (magma or lava) that cools and solidifies; if the temperature rises high enough to melt the rock, metamorphism ends and igneous processes begin. Water does play a role in metamorphism (C) — hydrothermal fluids catalyse many metamorphic reactions — but water is not required; many high-grade metamorphic rocks form under dry conditions, and some igneous rocks contain significant water. The two processes are fundamentally different (D) because the presence or absence of a melt defines an entirely different physical regime with different mineral reactions, textures, and rock types.",
        },
        {
          q: "Shale metamorphosed under regional conditions develops strong foliation and becomes schist. Limestone metamorphosed under the same conditions becomes marble with no foliation. Why does shale develop foliation but limestone does not?",
          a: [
            "Marble forms at higher metamorphic temperatures that destroy foliation after it develops; schist forms at lower temperatures that preserve the planar fabric permanently",
            "Shale contains flat clay minerals and sheet silicates (micas) that grow with their flat faces perpendicular to compressive stress, producing foliation; limestone is composed of equidimensional calcite grains that recrystallise without any preferred orientation, so no foliation develops",
            "Limestone is too soft (calcite hardness 3) to sustain the brittle fractures needed to develop foliation; shale contains harder minerals that can develop the planar fabric",
            "Marble always forms by contact metamorphism, which lacks directed pressure; schist always forms by regional metamorphism, which has directed pressure — the rock type determines the metamorphic setting",
          ],
          correct: 1,
          explain: "Foliation is not destroyed at higher temperatures (A) — in fact, higher-grade rocks like gneiss retain their banding at even higher temperatures than schist; the absence of foliation in marble is not a temperature effect but a mineralogical one. The correct answer is B: foliation develops when flat or elongated minerals grow with a preferred orientation perpendicular to compressive stress; shale contains clay minerals (which transform to micas and chlorite during metamorphism) — these sheet silicates have strongly anisotropic shapes and preferentially grow perpendicular to the applied stress, producing the planar fabric; limestone contains calcite, which has an equidimensional (roughly cubic or rhombohedral) crystal form; when calcite recrystallises under pressure, grains grow in all directions equally with no preferred orientation, so no planar fabric develops. The hardness argument (C) is incorrect — foliation is not a brittle fracture phenomenon but a recrystallisation texture; soft minerals like micas actually develop foliation more readily than hard ones. Marble can and does form by regional metamorphism (D is wrong) — the key factor is mineralogy, not metamorphic setting.",
        },
        {
          q: "A geologist maps a zone of dense, non-foliated, fine-grained rock surrounding a granite pluton. The altered zone is 150 metres wide and grades back to unaltered shale beyond that distance. Which type of metamorphism does this describe?",
          a: [
            "Regional metamorphism — the large scale of the granite body produced regional-scale pressure that metamorphosed the surrounding rock without foliation",
            "Contact metamorphism — the heat from the cooling granite pluton baked the surrounding shale in a thermal aureole; the absence of foliation reflects the lack of directed pressure, as burial stress is roughly equal in all directions near the intrusion",
            "Dynamic metamorphism — frictional heat generated along the fault that allowed the granite to intrude produced the altered zone through shear heating",
            "Burial metamorphism — the weight of the granite pluton above the shale compressed it sufficiently to recrystallise the minerals without heat from the magma",
          ],
          correct: 1,
          explain: "Regional metamorphism (A) affects vast areas — thousands of square kilometres — and is driven by burial during mountain-building, not by individual intrusions; a 150-metre aureole around a single pluton is the textbook scale of contact, not regional, metamorphism. The correct answer is B: contact metamorphism occurs when magma intrudes into cooler country rock and the heat from the cooling igneous body bakes the surrounding rock in a thermal aureole; the key characteristics match — a local zone of alteration centred on the intrusion, grading back to unaltered rock at a finite distance, and the absence of foliation, which reflects the absence of directed stress (near-surface intrusions impose roughly isotropic burial pressure, not the strongly directed stress of regional mountain-building); the resulting rock is hornfels, a dense non-foliated rock formed from baked shale. Dynamic metamorphism (C) occurs along fault zones through frictional heating and produces mylonites — highly deformed, lineated rocks very different from the non-foliated hornfels described. Burial metamorphism (D) refers to low-grade metamorphism caused by deep burial alone; it does not produce a localised aureole around an intrusion.",
        },
        {
          q: "A field geologist finds a metamorphic rock with coarse, visible mica flakes, a well-developed planar fabric, and scattered dark red crystals several millimetres across that are harder than the surrounding matrix. The rock splits easily along its foliation planes. Which rock name and metamorphic grade does this describe, and what are the dark red crystals?",
          a: [
            "Slate — low metamorphic grade; the dark red crystals are iron-oxide nodules precipitated from groundwater after metamorphism, not index minerals grown during metamorphism",
            "Gneiss — high metamorphic grade; the dark red crystals are potassium feldspar megacrysts that grew during high-temperature recrystallisation in alternating light and dark compositional bands",
            "Schist — medium metamorphic grade; the dark red crystals are garnet porphyroblasts, an index mineral that grows within the foliated mica matrix at pressures and temperatures above those needed for biotite but below those needed for staurolite or kyanite",
            "Quartzite — medium metamorphic grade from a quartz-rich sandstone protolith; the dark red crystals are hematite grains that grew in pore spaces as iron-bearing fluids circulated through the rock during burial",
          ],
          correct: 2,
          explain: "Slate (A) is a low-grade metamorphic rock with microscopic minerals too fine to see with the naked eye — individual mica flakes are not visible and no porphyroblasts occur; the rock described has visible mica and large distinct crystals, ruling out slate. Gneiss (B) is a high-grade rock characterised by coarse banding of alternating light (quartz-feldspar) and dark (mica-amphibole) layers — it does not typically split easily along foliation planes the way schist does; and potassium feldspar megacrysts in gneiss are pale pink or white, not dark red. The correct answer is C: schist is the medium-grade regional metamorphic rock produced from shale or mudstone protoliths; its defining features are visible mica flakes (muscovite and/or biotite), a well-developed foliation that allows the rock to split into roughly parallel slabs, and porphyroblasts — larger crystals of index minerals that grew within the finer-grained foliated matrix; garnet (dark red to reddish-brown, equant, isometric crystals harder than mica) is one of the classic index minerals of the garnet zone, forming at conditions above the biotite isograd in the Barrovian sequence; this places the rock in the middle of the metamorphic grade sequence, above phyllite and below staurolite-bearing schist. Quartzite (D) is a non-foliated rock composed almost entirely of fused quartz grains — it does not split along foliation planes, contains no mica, and would not have scattered dark red crystals in a mica matrix.",
        },
      ],
    },
  ],
}

export default metamorphicRocks
