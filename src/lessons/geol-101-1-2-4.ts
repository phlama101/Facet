import { Gem, Snowflake, Layers } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const crystalSystems: Lesson = {
  id: 'geol-101-1-2-4',
  title: 'Crystal Systems — Introduction',
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 150,
  description: "Every snowflake has six sides for the same reason every halite grain is a cube — the external shape of a crystal is the public face of its internal atomic geometry.",
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
      title: 'Why snowflakes have six sides',
      body: `Every snowflake has six arms, six sides, six-fold symmetry. No snowflake has five arms or eight. This is not a coincidence or a visual trick — it is a direct consequence of how water molecules pack together when ice forms. Ice belongs to the **hexagonal crystal system**: its internal atomic lattice has six-fold rotational symmetry, and every crystal of ice, from the smallest frost needle to the most elaborate snowflake, must express that symmetry on its surface. The external shape of a crystal is the public face of its internal atomic order.

The same principle applies to every crystalline mineral. The flat-faced cubes of halite, the perfect rhombohedra of calcite, the six-sided prisms of quartz — these are all external expressions of internal atomic geometry. Lesson 1.2.1 established that a crystalline structure is required for a substance to qualify as a mineral, and Lesson 1.2.2 showed that cleavage planes are governed by the geometry of that structure. This lesson takes the next step: classifying that geometry. All possible crystalline arrangements in nature reduce to **seven crystal systems**, each defined by the symmetry of its repeating unit cell. Knowing a mineral's crystal system tells you what shapes its crystals will take, how many cleavage directions it has, and at what angles those cleavage planes intersect.`,
      keyTerms: [
        {
          term: 'Crystal system',
          def: "One of seven categories that classify all possible crystalline lattices by their axial symmetry — specifically the relative lengths of and angles between the three unit cell axes. Every mineral belongs to exactly one crystal system, which governs its crystal form, cleavage geometry, and optical properties.",
        },
        {
          term: 'Unit cell',
          def: "The smallest repeating structural building block of a crystal lattice. Stack unit cells in three dimensions and you get the full crystal. The shape of the unit cell — the lengths of its three edges and the angles between them — is what defines the crystal system.",
        },
        {
          term: 'Symmetry',
          def: "The property of appearing identical after certain geometric transformations such as rotation or reflection. A cube has high symmetry: rotating it 90° around any face-to-face axis produces an indistinguishable result. A triclinic crystal has low symmetry: only a full 360° rotation restores its original appearance.",
        },
        {
          term: 'Crystal form',
          def: "The set of geometrically equivalent faces expressed on a crystal, determined entirely by its internal symmetry. Examples: perfect cubes (isometric), six-sided prisms (hexagonal), rhombohedra (trigonal). Crystal form is a free identification clue whenever well-formed crystals are present.",
        },
      ],
      interaction: {
        type: 'annotated-image' as const,
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Schist_detail.jpg/800px-Schist_detail.jpg',
        alt: 'Close-up photograph of schist showing foliated texture with aligned mica crystals and visible mineral layers',
        aspectRatio: '4/3',
        credit: 'Wikimedia Commons',
        annotations: [
          {
            id: '1',
            x: 50,
            y: 25,
            label: 'Foliation Planes',
            description: 'The parallel planar fabric running across the rock is called foliation — it forms when heat and pressure cause platy minerals like mica to recrystallise with their flat faces aligned perpendicular to the direction of maximum stress. Foliation is the defining textural feature of schist.',
          },
          {
            id: '2',
            x: 25,
            y: 45,
            label: 'Mica (Muscovite/Biotite)',
            description: 'The shiny, reflective flakes are mica crystals aligned along the foliation planes. Mica\'s perfect single cleavage — a direct result of its monoclinic sheet-silicate structure — makes it naturally split into the thin, flat flakes that define the foliated texture of schist.',
          },
          {
            id: '3',
            x: 70,
            y: 55,
            label: 'Quartz/Feldspar Lenses',
            description: 'Light-coloured, elongated lenses or pods of quartz or feldspar are squeezed and recrystallised between the mica layers. Their shapes record the direction and magnitude of the tectonic forces that metamorphosed the rock.',
          },
          {
            id: '4',
            x: 45,
            y: 75,
            label: 'Crystal Size (Grain Coarsening)',
            description: 'The visible crystal size in schist indicates medium- to high-grade metamorphism. As temperature increases, crystals grow larger through recrystallisation. Very fine grain size indicates lower-grade metamorphism; coarse crystals indicate higher temperatures.',
          },
        ],
      },
    },
    {
      type: 'callout' as const,
      variant: 'insight',
      headline: 'Every snowflake has six sides for the same reason every halite grain is a cube — the external shape echoes the internal atomic geometry',
      body: "When water freezes, its molecules lock into a hexagonal lattice — producing the six-fold symmetry visible in every snowflake. When sodium and chloride ions crystallise from seawater, they stack into a cubic lattice — producing perfect cubes every time. These are not coincidences: the external shape of any well-formed crystal is a direct, physical expression of the geometry of its internal atomic arrangement. The seven crystal systems are simply the seven possible geometries that repeating atomic lattices can take.",
    },
    {
      type: 'concept',
      title: 'The seven crystal systems',
      body: `**What defines a crystal system.** Every crystal is built by stacking a unit cell — the smallest repeating building block — in three dimensions. That unit cell has three edges, labelled a, b, and c, and three angles between them, labelled α (alpha), β (beta), and γ (gamma). The relative lengths of those edges and the angles between them completely define the crystal's symmetry — and therefore its system. There are exactly seven distinct combinations of lengths and angles that produce valid, space-filling crystalline lattices. Every mineral on Earth fits into one of these seven.

**1 — Isometric (Cubic).** Three axes of equal length meeting at right angles (a = b = c; α = β = γ = 90°). This three-way equality produces the highest possible symmetry among the seven systems. The signature crystal forms are **cubes**, **octahedra** (eight triangular faces), and **dodecahedra** (twelve rhombus-shaped faces). The cubic symmetry is precisely why halite always cleaves into perfect cubes — its three equal, perpendicular cleavage planes mirror its three equal, perpendicular crystal axes exactly. Other isometric minerals: **galena** (cubes, very high density), **pyrite** (cubes, often with striated faces), **magnetite** (octahedra, magnetic), **fluorite** (octahedra), **diamond** (octahedra), **garnet** (dodecahedra).

**2 — Tetragonal.** Three axes at right angles, but one (the c-axis, vertical) is a different length from the other two, which remain equal (a = b ≠ c; α = β = γ = 90°). Think of a cubic crystal stretched or compressed along one axis. Crystal forms: square prisms and pyramids. Key minerals: **zircon** (square prisms with pyramidal terminations — the mineral used for uranium-lead geochronology) and **rutile** (TiO₂, a common titanium ore).

**3 — Orthorhombic.** Three axes at right angles, all of different lengths (a ≠ b ≠ c; α = β = γ = 90°). No two axes are equal. Crystal forms: rectangular prisms of varying proportions, resembling a brick. Key minerals: **olivine** (typically forms stubby, rectangular grains in basalt and peridotite), **topaz**, and **sulphur**.

**4 — Hexagonal.** Four axes are used to describe this system: three of equal length lying in a horizontal plane and meeting at 60° angles, plus one vertical axis of different length perpendicular to the plane. The 60° spacing of the three horizontal axes is the geometric source of six-fold symmetry. Crystal forms: six-sided prisms with pyramidal terminations — the classic shape of a quartz crystal. Key minerals: **quartz** (six-sided prisms), **beryl** (emerald and aquamarine — also six-sided prisms), **apatite**. And critically: **ice** — water molecules organise into the hexagonal lattice when they freeze, which is the direct and complete explanation for why every snowflake has six-fold symmetry.

**5 — Trigonal (Rhombohedral).** Trigonal is technically a subdivision of the hexagonal system — it uses the same four-axis description but has three-fold rather than six-fold rotational symmetry. Its signature crystal form is the **rhombohedron**: a shape like a cube that has been leaned over, with six parallelogram faces. **Calcite** is the textbook trigonal mineral. Its three rhombohedral cleavage planes — which always produce the same skewed, parallelogram-faced fragments no matter how the crystal is broken — are a direct expression of its three-fold trigonal lattice. Other trigonal minerals: **dolomite**, **tourmaline**.

**6 — Monoclinic.** Three axes of unequal length; two meet at right angles, but the third is oblique (a ≠ b ≠ c; α = γ = 90°, β ≠ 90°). That single oblique angle is the only asymmetry — hence "mono" (one) "clinic" (inclined). Crystal forms are prism-like but with slanted end faces. Despite appearing unremarkable, monoclinic is actually the **most common crystal system** by number of mineral species — a majority of all known minerals crystallise in it. Key minerals: **orthoclase feldspar** (granite's pink crystals), **muscovite** and **biotite** mica, **augite** (pyroxene), **hornblende** (amphibole), **gypsum**. The slightly non-90° angles sometimes observed on orthoclase cleavage faces, and the slight asymmetry of augite and hornblende crystals, both reflect the monoclinic lattice's single oblique axis.

**7 — Triclinic.** Three axes of unequal length, none meeting at right angles (a ≠ b ≠ c; α ≠ β ≠ γ ≠ 90°). No right angles anywhere. This is the lowest-symmetry system — only a full 360° rotation returns a triclinic crystal to its original appearance. Crystal forms tend to be irregular, tabular, or bladed rather than exhibiting obvious geometric regularity. Key minerals: **plagioclase feldspar** (the dominant feldspar of oceanic crust and basalt) and **kyanite**. The fine parallel striations visible on plagioclase cleavage surfaces — the field distinction from orthoclase noted in Lesson 1.2.3 — are caused by polysynthetic twinning that is a direct consequence of the triclinic lattice geometry. Despite its low symmetry, plagioclase still has two well-developed cleavage planes, because cleavage depends on bond density in particular directions, which can still be organised even in a triclinic lattice.

**Crystal system to cleavage — the connection.** In Lesson 1.2.2, cleavage planes were defined as directions of weaker bonds in the crystal lattice. The crystal system governs precisely which directions are weakest. In the isometric system, three mutually perpendicular planes are equivalent, producing three cleavage directions at 90° (halite, galena). In the trigonal system, three equivalent planes inclined at specific non-90° angles produce three rhombohedral cleavage planes (calcite). The distinction between pyroxene (augite, monoclinic, ~90° cleavage) and amphibole (hornblende, monoclinic, ~60°/120° cleavage) that was introduced as a field rule in Lesson 1.2.3 ultimately traces back to subtle differences in their monoclinic unit-cell geometries that position their weak-bond planes at different angles. The crystal system is the underlying reason the cleavage rules are what they are.

**Using crystal form in the field.** Whenever well-formed crystals are present, crystal form is a fast identification shortcut that costs nothing extra to observe: perfect cubes → isometric (halite, pyrite, galena, fluorite); six-sided prisms with pyramidal tips → hexagonal (quartz, beryl); flat rhombohedral fragments → trigonal (calcite); flexible peeling sheets → monoclinic sheet structure (mica); irregular tabular grains with fine surface striations → triclinic (plagioclase). When crystals are not well-formed — as is typical in most rocks, where minerals crystallise crowded against their neighbours — the physical property tests from Lesson 1.2.2 take over.

**Chapter 2 — complete.** This lesson closes the second chapter of Earth Foundations. We have moved from defining what a mineral is (Lesson 1) to testing its physical properties (Lesson 2) to learning the 30 minerals that build Earth's rocks (Lesson 3) to classifying the geometric basis for all of those properties (Lesson 4). Chapter 3 zooms back out to the rock scale: armed with this mineral vocabulary, we will now examine how igneous, sedimentary, and metamorphic rocks form, and how to tell them apart.`,
      cards: [
        {
          name: 'Isometric & Tetragonal',
          icon: Gem,
          color: BRAND.gold,
          desc: "Isometric (cubic): three equal axes at 90° — the highest symmetry system. Forms cubes, octahedra, dodecahedra. The three equal perpendicular axes explain why halite and galena have three cleavage planes at exactly 90°. Key minerals: halite, pyrite, galena, magnetite, diamond, fluorite, garnet. Tetragonal: like cubic but one axis is stretched — two equal axes + one different, all at 90°. Forms square prisms. Key minerals: zircon, rutile.",
          examples: 'Halite: perfect cubes · Pyrite: striated cubes · Magnetite: octahedra · Zircon: square prisms',
        },
        {
          name: 'Hexagonal & Trigonal',
          icon: Snowflake,
          color: BRAND.accent,
          desc: "Hexagonal: three equal horizontal axes at 60° + one perpendicular — produces six-fold symmetry. Every ice crystal (snowflake) is hexagonal, which is why they always have six sides. Forms six-sided prisms with pyramidal tips. Key minerals: quartz, beryl (emerald/aquamarine), apatite, ice. Trigonal: three-fold subdivision of hexagonal. Forms rhombohedra — the skewed parallelogram-faced shape calcite always cleaves into. Key minerals: calcite, dolomite, tourmaline.",
          examples: 'Quartz: 6-sided prisms · Ice/snowflake: hexagonal · Calcite: rhombohedra · Tourmaline: hexagonal prisms',
        },
        {
          name: 'Orthorhombic, Monoclinic & Triclinic',
          icon: Layers,
          color: BRAND.amethyst,
          desc: "Orthorhombic: three unequal axes, all at 90° — forms rectangular brick-like prisms. Key minerals: olivine, topaz. Monoclinic: three unequal axes, one oblique — the most common crystal system by number of species. The single oblique angle produces slightly asymmetric crystal forms. Key minerals: orthoclase feldspar, all micas, augite, hornblende, gypsum. Triclinic: three unequal axes, no right angles — lowest symmetry. Forms irregular tabular crystals, often with surface striations. Key minerals: plagioclase feldspar, kyanite.",
          examples: 'Olivine: orthorhombic · Orthoclase + micas: monoclinic · Plagioclase: triclinic (striations)',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "Every snowflake displays six-fold symmetry — six arms, six sides, never five or eight. What is the correct explanation for this?",
          a: [
            "Water molecules are attracted to each other in groups of exactly six, creating six arms through a chemical preference unique to liquid water",
            "Ice belongs to the hexagonal crystal system; its internal atomic lattice has six-fold rotational symmetry, which every ice crystal must express in its external form",
            "Snowflakes begin as spherical droplets, and spheres naturally develop six protrusions when they freeze due to the physics of surface tension",
            "The six-fold pattern is random, but it is so visually striking that humans preferentially notice and remember six-sided snowflakes over asymmetric ones",
          ],
          correct: 1,
          explain: "Water molecules are not attracted in groups of six in liquid form — water is largely disordered as a liquid; the six-fold pattern appears only when it freezes into a crystal, so (A) is wrong. The correct answer is B: when water freezes, its molecules organise into the hexagonal crystal lattice, which has inherent six-fold rotational symmetry; the external faces of any crystal must be consistent with the internal symmetry of the lattice, so every ice crystal — from microscopic frost to elaborate snowflakes — expresses that six-fold geometry. Surface tension on liquid droplets (C) does not produce geometric six-fold patterns; it produces spheres. Snowflakes are not randomly shaped — virtually all show six-fold symmetry because all ice belongs to the same crystal system (D is wrong).",
        },
        {
          q: "A mineral grows as perfect cubes regardless of the conditions under which it crystallises — in seawater, in a laboratory, and in ancient evaporite beds. Which crystal system does this indicate, and what feature of that system produces the cube form?",
          a: [
            "Hexagonal — the six equal faces of a cube correspond to the six horizontal axes in the hexagonal system",
            "Isometric (cubic) — three axes of equal length meeting at right angles produce the highest symmetry and generate cube-shaped crystals as a natural expression of that three-way equality",
            "Monoclinic — two right-angle axes combined with one oblique axis create a rectangular symmetry that expresses itself as cubes",
            "Trigonal — three-fold symmetry generates three pairs of parallel faces, which combine to form a six-faced cube",
          ],
          correct: 1,
          explain: "The hexagonal system (A) uses four axes — three in a plane at 60° and one perpendicular — which produces six-sided prisms and pyramids, not cubes; hexagonal minerals like quartz form six-sided prisms, not cubes. The correct answer is B: the isometric (cubic) system has three axes of identical length meeting at exactly 90° angles; this three-way equality means the crystal grows at the same rate in all three principal directions, naturally producing the cube as the simplest expression of that symmetry — which is exactly why halite always forms cubes. Monoclinic (C) has one oblique axis, which breaks the rectangular symmetry and prevents cube formation; monoclinic minerals form asymmetric prisms, not cubes. Trigonal (D) has three-fold symmetry and forms rhombohedra — skewed parallelogram-faced shapes — not cubes; only the isometric system produces perfect cubes.",
        },
        {
          q: "Calcite always cleaves into rhombohedra — fragments with six faces that look like a cube leaned over to one side, with all faces being parallelograms. Which crystal system is consistent with this cleavage geometry, and why?",
          a: [
            "Isometric — the three equal perpendicular axes of the cubic system produce three cleavage planes at right angles, making cube-shaped fragments, not rhombohedra",
            "Orthorhombic — three unequal axes all at right angles produce rectangular fragments with varying proportions that could appear rhombohedron-like",
            "Trigonal — calcite's three-fold lattice symmetry produces three sets of cleavage planes at specific non-90° angles, always yielding the characteristic rhombohedral shape regardless of the original crystal form",
            "Monoclinic — the single oblique axis in the monoclinic system produces skewed crystal forms including rhombohedra as a common output",
          ],
          correct: 2,
          explain: "Isometric minerals (A) cleave along three planes at exactly 90° to each other, producing cube-shaped fragments — not the tilted, parallelogram-faced rhombohedra of calcite. Orthorhombic minerals (B) have three unequal axes all at right angles, producing rectangular brick-like fragments with straight edges — olivine is orthorhombic, and its fragments are blocky, not rhombohedral. The correct answer is C: calcite belongs to the trigonal system, which has three-fold symmetry with three symmetrically equivalent atomic planes inclined at specific non-90° angles; cleavage follows these planes because they are the directions of weakest bonding; the result is always the same rhombohedral shape — a skewed parallelogram-faced solid — regardless of how large the original crystal was or how it was broken. Monoclinic minerals (D) have one oblique axis producing asymmetric prisms and often two cleavage planes at non-90° angles; monoclinic cleavage does not systematically produce rhombohedra.",
        },
        {
          q: "A student is told that monoclinic is the most common crystal system by number of mineral species, yet most introductory geology courses spend more time on the isometric and hexagonal systems. Which statement best explains why so many minerals crystallise in the monoclinic system?",
          a: [
            'The monoclinic system is the most common because it has the lowest symmetry of all seven systems, making it the default for any mineral whose atoms fail to organise into a more ordered arrangement',
            'The monoclinic system allows three axes of unequal length with one oblique angle — this intermediate level of symmetry accommodates a wide range of different atom sizes and bond configurations, making it geometrically flexible enough to be adopted by a large and diverse set of mineral compositions',
            'The monoclinic system is most common simply because it was the first crystal system described by mineralogists, and the original naming convention biased mineral classification toward the monoclinic category',
            'The monoclinic system is the most common because all silicate minerals with sheet structures must crystallise in it — and sheet silicates are so abundant that they dominate the mineral count',
          ],
          correct: 1,
          explain: "Triclinic (A) is the lowest-symmetry system — not monoclinic; monoclinic has one oblique angle while triclinic has no right angles at all; mineral systems are not assigned by default to low-symmetry categories. The correct answer is B: the monoclinic system has three axes of unequal length with two right angles and one oblique angle; this configuration offers a geometrically flexible unit-cell shape that can accommodate a wide variety of ionic radii and bond lengths without requiring the strict equivalence of the isometric system or the specific angle relationships of the hexagonal or trigonal systems; many compositionally diverse minerals — including orthoclase feldspar, all the common micas (muscovite, biotite), augite (pyroxene), hornblende (amphibole), and gypsum — find the monoclinic geometry compatible with their particular arrangements of atoms, making the system species-rich. The history of classification (C) does not determine how many minerals crystallise in a system — the crystal system is determined by internal atomic geometry, not by how mineralogists historically named categories. Sheet silicates (D) include muscovite and biotite, which are monoclinic, but many sheet silicates also belong to other systems (some clay minerals are triclinic); and the claim that all sheet silicates must be monoclinic is incorrect — the monoclinic abundance reflects broad compositional compatibility, not a structural requirement specific to any one silicate group.",
        },
      ],
    },
  ],
}

export default crystalSystems
