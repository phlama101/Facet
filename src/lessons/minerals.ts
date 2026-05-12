import type { Lesson } from './types'

const minerals: Lesson = {

  id: 'minerals',
  title: 'Minerals & Rocks: The Building Blocks',
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 200,
  description:
    'Discover what defines a mineral, how geologists identify them in the field, and how minerals combine to form the rocks beneath your feet.',
  sections: [
    {
      type: 'intro',
      title: 'The building blocks',
      body: `People use "rock" and "mineral" interchangeably — but to a geologist, they mean very different things.

A **mineral** is a single, chemically pure substance with a fixed formula and an ordered crystalline internal structure. A **rock** is a mixture of one or more minerals fused together.

Granite, for example, is a rock. Examine it closely and you can pick out three distinct minerals: pink potassium feldspar grains, glassy white quartz, and flat black flakes of mica — each with its own chemistry, hardness, and crystal form.

There are over 5,500 known minerals, but fewer than a dozen — quartz, feldspar, mica, calcite, olivine, pyroxene — make up roughly 95% of Earth's crust. Understanding minerals is the foundation of all geology.

Use the simulation below to explore the **Mohs hardness scale** — the most practical mineral identification tool in the field.`,
      interaction: {
        type: 'slider-simulation',
        label: 'Mohs Hardness',
        min: 1,
        max: 10,
        step: 0.5,
        unit: '',
        defaultValue: 5,
        outputLabel: 'Field Reference',
        formula: (h: number) => {
          if (h <= 1) return 'Talc (1) — softest known mineral; feels soapy; scratched effortlessly by a fingernail'
          if (h <= 2) return 'Gypsum (2) — just scratched by a fingernail (~2.5); the main mineral in drywall'
          if (h <= 3) return 'Calcite (3) — scratched by a copper coin (~3.5); fizzes in dilute HCl; makes up limestone'
          if (h <= 4) return 'Fluorite (4) — scratched by a steel knife; forms perfect octahedral crystals'
          if (h <= 5) return 'Apatite (5) — hardness of tooth enamel; barely scratched by a steel knife'
          if (h <= 6) return 'Orthoclase feldspar (6) — scratches glass; most abundant mineral in the continental crust'
          if (h <= 7) return 'Quartz (7) — scratches glass easily; the hardest common crustal mineral; dominates beach sand'
          if (h <= 8) return 'Topaz (8) — scratches quartz; prized as a gemstone; Al₂SiO₄(F,OH)₂'
          if (h <= 9) return 'Corundum (9) — ruby and sapphire; scratched only by diamond'
          return 'Diamond (10) — hardest natural substance; pure carbon; scratches everything'
        },
        description:
          'Drag to any hardness value to see the reference mineral, field-testing method, and a real-world example. The scale is relative — diamond is ~4× harder than corundum in absolute terms, not merely one step.',
      },
    },
    {
      type: 'concept',
      title: 'The five criteria for a mineral',
      body: 'To qualify as a mineral (per AGI and USGS definitions), a substance must satisfy all five requirements simultaneously. Fail even one, and it is not a mineral.',
      points: [
        'Naturally occurring — must form through geological processes without human synthesis. Lab-grown diamonds are chemically identical to natural ones, but are not minerals.',
        'Inorganic — not produced by living organisms. Pearls (secreted by mollusks), kidney stones, and coal fail this criterion. Ice, however, qualifies fully.',
        'Solid — liquids and gases are excluded. Mercury is the only common element liquid at room temperature, disqualifying it. Ice is solid and therefore a mineral.',
        'Definite chemical formula — fixed or narrowly constrained composition. Quartz is always SiO₂. Halite is always NaCl. Olivine ranges slightly ((Mg,Fe)₂SiO₄) but within defined limits.',
        'Crystalline structure — atoms arranged in an ordered, repeating 3D lattice. This internal order gives each mineral its characteristic shape, cleavage, and optical properties. Obsidian (volcanic glass) fails this — it is a mineraloid, not a mineral.',
      ],
    },
    {
      type: 'visualization',
      title: 'Mineral identification network',
      body: 'Geologists use a set of physical properties to identify unknowns in the field. Select any node to see how each property connects to specific tests and mineral examples.',
      interaction: {
        type: 'node-explorer',
        nodes: [
          {
            id: 'hardness',
            label: 'Hardness',
            description:
              "Resistance to scratching, measured on the 1–10 Mohs scale. The single most useful field-identification property. A harder mineral always scratches a softer one. If two minerals don't scratch each other, their hardness is equal.",
            connections: ['scratch-test', 'quartz', 'calcite', 'gypsum'],
          },
          {
            id: 'cleavage',
            label: 'Cleavage',
            description:
              'Tendency to break along flat planes of weakness in the crystal lattice. Described by number of planes and angles between them. Halite: 3 planes at 90° (cubic). Calcite: 3 planes at 75° (rhombohedral). Mica: 1 perfect plane (basal).',
            connections: ['calcite', 'feldspar', 'mica', 'crystal-lattice'],
          },
          {
            id: 'luster',
            label: 'Luster',
            description:
              'How a mineral reflects light from its surface. Types: metallic (polished metal appearance), vitreous (glassy), pearly, silky, resinous, adamantine (diamond-like brilliance), and earthy (dull, chalky). Luster is described, not measured.',
            connections: ['quartz', 'pyrite', 'mica'],
          },
          {
            id: 'crystal-lattice',
            label: 'Crystal Lattice',
            description:
              'The internal 3D arrangement of atoms that defines all physical properties of a mineral — hardness, cleavage, optical behavior, and symmetry. Seven crystal systems exist: cubic, tetragonal, orthorhombic, hexagonal, trigonal, monoclinic, and triclinic.',
            connections: ['cleavage', 'quartz', 'calcite'],
          },
          {
            id: 'quartz',
            label: 'Quartz (SiO₂)',
            description:
              "Hardness 7, vitreous luster, no cleavage (conchoidal fracture instead), white streak. Hardest common crustal mineral. Chemically stable at the surface — the main component of beach sand worldwide. Varieties include amethyst (purple), rose quartz (pink), and chert (cryptocrystalline).",
            connections: ['hardness', 'luster', 'crystal-lattice'],
          },
          {
            id: 'calcite',
            label: 'Calcite (CaCO₃)',
            description:
              'Hardness 3, vitreous to pearly luster, 3-plane rhombohedral cleavage, white streak. Reacts vigorously with dilute hydrochloric acid — a definitive field test. The main mineral in limestone and marble. Dissolves in slightly acidic rainwater, carving karst caves and sinkholes.',
            connections: ['hardness', 'cleavage', 'crystal-lattice'],
          },
          {
            id: 'mica',
            label: 'Mica (sheet silicates)',
            description:
              'Hardness 2–3, pearly or silky luster, perfect basal cleavage into thin flexible sheets, white streak. Biotite (black, iron-rich) and muscovite (silver, aluminum-rich) are the two most common types. The single perfect cleavage plane reflects the layered silicate sheet structure.',
            connections: ['cleavage', 'luster'],
          },
          {
            id: 'scratch-test',
            label: 'Scratch Test',
            description:
              "Field method to bracket hardness: fingernail (~2.5), copper coin (~3.5), glass plate (~5.5), steel file (~6.5), quartz crystal (~7). Always test in both directions — if mineral A scratches mineral B, A is harder. If they don't scratch each other, they're approximately equal.",
            connections: ['hardness', 'gypsum'],
          },
          {
            id: 'gypsum',
            label: 'Gypsum (CaSO₄·2H₂O)',
            description:
              'Hardness ~2, silky or pearly luster, 3-plane cleavage, white streak. The softest common mineral after talc. Forms in evaporite deposits when ancient seawater evaporated. Used in drywall and plaster of Paris. Selenite is the clear, blade-like variety; alabaster is the fine-grained white form.',
            connections: ['hardness', 'scratch-test'],
          },
          {
            id: 'pyrite',
            label: 'Pyrite (FeS₂)',
            description:
              "Hardness 6–6.5, strong metallic luster, no cleavage, black/greenish-black streak. Known as \"fool's gold\" for its golden color, but immediately distinguished by streak (gold is golden-yellow; pyrite is black) and crystal form (cubic, striated faces). Common in metamorphic and hydrothermal rocks.",
            connections: ['luster'],
          },
          {
            id: 'feldspar',
            label: 'Feldspars (KAlSi₃O₈ group)',
            description:
              "Hardness 6–6.5, vitreous luster, 2-plane cleavage at ~90°, white streak. The most abundant mineral group in Earth's crust — roughly 60% by volume. Two main types: potassium feldspar (orthoclase, typically pink or salmon) and plagioclase (white to gray). The dominant mineral in granite.",
            connections: ['cleavage', 'hardness'],
          },
        ],
      },
    },
    {
      type: 'visualization',
      title: 'Milestones in mineral science',
      body: 'Systematic mineralogy spans millennia of observation, from ancient craftspeople to X-ray crystallography. Scrub through key moments that shaped our understanding.',
      interaction: {
        type: 'timeline-scrubber',
        events: [
          {
            year: '~3000 BCE',
            label: 'Ancient hardness knowledge',
            description:
              'Egyptian and Mesopotamian craftspeople discovered empirically that diamond, corundum, and quartz could cut softer stones. Hardness was understood as a practical property millennia before it was formalized — gemstone trade required reliable identification.',
          },
          {
            year: '1556',
            label: 'De Re Metallica',
            description:
              "Georg Agricola publishes the first systematic treatise on mineralogy and mining. He describes mineral properties — hardness, luster, cleavage — in rigorous terms, separating the field from alchemy. The book remains the authoritative mining reference for over 200 years.",
          },
          {
            year: '1812',
            label: 'Mohs hardness scale',
            description:
              'Friedrich Mohs proposes a 10-point relative hardness scale anchored by 10 reference minerals from talc to diamond. Requiring no instruments beyond common objects, it immediately becomes the universal field standard — and still is, over 200 years later.',
          },
          {
            year: '1912',
            label: 'X-ray crystallography',
            description:
              "Max von Laue demonstrates that X-rays diffract through crystals, revealing their atomic structure for the first time. The Braggs refine the technique to determine precise atomic positions. The crystal lattice becomes the fundamental scientific definition of a mineral, explaining all physical properties from first principles.",
          },
          {
            year: '1959',
            label: 'IMA mineral approval system',
            description:
              "The International Mineralogical Association establishes the formal system for proposing, reviewing, and approving new mineral species. Standardizes names and definitions globally. Today it recognizes over 5,900 valid mineral species, with dozens of new ones approved each year.",
          },
          {
            year: 'Present',
            label: 'Nanomineralogy',
            description:
              'Electron microscopy, synchrotron X-ray tomography, and atom-probe techniques now reveal mineral structures at the nanometer scale. New mineral phases are discovered in meteorites, deep-mantle xenoliths, and even within living organisms (biomineralization). The mineral count continues to grow.',
          },
        ],
      },
    },
    {
      type: 'lab',
      title: 'Identify four mystery minerals',
      premise:
        'A field geologist has collected four unlabeled mineral samples. Using hardness tests, cleavage observation, streak color, and luster, work through each identification.',
      steps: [
        {
          instruction:
            'Sample A is pink with a vitreous (glassy) luster. It scratches a glass plate easily but is scratched by a steel file (~6.5). It shows two flat cleavage planes meeting at roughly 90°. Streak is white. Identify this mineral and name one common rock it forms a major part of.',
          hint: 'Hardness ~6, two cleavage planes at ~90°, pink color, white streak — this is the diagnostic set for the most abundant group of minerals in the continental crust, a key ingredient in granite.',
        },
        {
          instruction:
            'Sample B is colorless and glassy. It is not scratched by a steel file (hardness > 6.5). It shows no cleavage — instead it has a smooth, curved (conchoidal) fracture. Streak is white. What mineral is this, and why is it so dominant in beach sand worldwide?',
          hint: 'No cleavage, conchoidal fracture, hardness 7, and white streak identify the hardest common crustal mineral. Its abundance in beach sand reflects its chemical stability during long transport from mountain source to coastline.',
        },
        {
          instruction:
            'Sample C is flat and black, splits into very thin, flexible sheets, and feels slightly silky. It is scratched easily by a fingernail (hardness ~2.5). One perfect cleavage plane is obvious. Streak is white. What mineral is this, and what crystal structural feature explains its perfect sheet-like cleavage?',
          hint: 'Splitting into thin flexible sheets + low hardness + pearly/silky luster + white streak points to one of the mica family. The perfect basal cleavage reflects layered silicate sheets within the crystal lattice — the bonds between layers are far weaker than those within them.',
        },
        {
          instruction:
            "Sample D has a bright metallic golden color. Its streak is jet-black. It forms as small interlocking cubic crystals with striated faces. Hardness is ~6 — it scratches glass. What is this mineral, and what single test definitively rules out gold?",
          hint: "Metallic golden luster and cubic crystals could fool a novice. The streak test is definitive: this mineral's true color when powdered is black, while real gold produces a golden-yellow streak. This is the origin of the phrase \"fool's gold.\"",
        },
      ],
      xpReward: 65,
    },
    {
      type: 'challenge',
      title: 'Mineral identification sandbox',
      prompt:
        'Adjust the three measured properties to match an unknown mineral sample. The system will identify the most likely candidate. Try to find as many minerals as you can.',
      interaction: {
        type: 'sandbox-simulator',
        prompt: 'Set the measured hardness, number of cleavage planes, and luster type to identify the mineral.',
        variables: [
          { id: 'hardness', label: 'Hardness (Mohs)', min: 1, max: 10, default: 5, unit: '' },
          { id: 'cleavage', label: 'Cleavage Planes', min: 0, max: 4, default: 2, unit: 'planes' },
          { id: 'luster', label: 'Luster Type (1=earthy → 5=metallic)', min: 1, max: 5, default: 3, unit: '' },
        ],
        outputDescription: (vars) => {
          const h = Math.round(vars.hardness)
          const c = Math.round(vars.cleavage)
          const l = Math.round(vars.luster)

          if (h <= 1 && c === 0 && l <= 2) return 'Likely: Talc (H=1, no cleavage, earthy/pearly luster). Softest known mineral — the diagnostic soapy feel is unmistakable. Used in cosmetic powder and ceramics.'
          if (h <= 2 && c >= 1 && l <= 3) return 'Likely: Gypsum (H≈2, cleavage present, silky/pearly luster). Test: scratched by fingernail. Forms in evaporite deposits. Selenite variety is clear and blade-like.'
          if (h <= 3 && c === 3 && l <= 3) return 'Likely: Calcite (H=3, 3-plane rhombohedral cleavage, vitreous luster). Definitive test: fizzes vigorously in dilute HCl. Makes up limestone and marble.'
          if (h >= 2 && h <= 3 && c >= 1 && l === 4) return 'Likely: Mica — biotite or muscovite (H=2–3, perfect basal cleavage, pearly luster). Splits into thin flexible sheets. Common in granite and metamorphic rocks.'
          if (h >= 5 && h <= 7 && c === 2 && l <= 3) return 'Likely: Feldspar group (H=6–6.5, 2 cleavage planes at ~90°, vitreous luster). Most abundant mineral in the crust. Pink = K-feldspar; white/gray = plagioclase. Key component of granite.'
          if (h >= 7 && c === 0 && l <= 3) return 'Likely: Quartz (H=7, no cleavage — conchoidal fracture, vitreous luster). Hardest common crustal mineral. Chemically stable; dominates beach sand globally.'
          if (h >= 6 && h <= 7 && l === 5 && c === 0) return "Likely: Pyrite (H=6–6.5, no cleavage, strong metallic luster). \"Fool's gold\" — but streak is black, not golden. Cubic crystals with striated faces."
          if (h >= 8 && h <= 9 && c >= 1 && l >= 4) return 'Likely: Topaz (H=8, 1 perfect basal cleavage, vitreous-to-adamantine luster). Prized gemstone. Al₂SiO₄(F,OH)₂. Often colorless, blue, or yellow.'
          if (h >= 9 && l >= 4 && c === 0) return 'Likely: Corundum (H=9, no cleavage, adamantine luster). Ruby (red Cr-bearing) or sapphire (blue Ti-bearing). Second hardest natural mineral. Used as an industrial abrasive.'
          if (h >= 10 && l >= 5) return 'Likely: Diamond (H=10, 4 octahedral cleavage planes, adamantine luster). Hardest natural substance. Pure carbon in a cubic lattice. The only mineral that scratches all others.'
          return `No close match for H=${h}, ${c} cleavage planes, luster ${l}/5. Try adjusting values — or this may be an uncommon mineral requiring streak color and crystal form to distinguish.`
        },
      },
      xpReward: 80,
    },
    {
      type: 'quiz',
      xpPerQuestion: 20,
      questions: [
        {
          q: 'Which of the following is a rock, not a mineral?',
          a: ['Quartz (SiO₂)', 'Granite', 'Halite (NaCl)', 'Calcite (CaCO₃)'],
          correct: 1,
          explain:
            'Granite is a rock — a mixture of multiple minerals including quartz, potassium feldspar, and mica. Each component is a distinct mineral with its own fixed composition and crystal structure. Quartz, halite, and calcite are all minerals (single substances with definite formulas).',
        },
        {
          q: 'Ice is a mineral, but liquid water is not. Which mineral criterion does liquid water fail?',
          a: [
            'It is not naturally occurring',
            'It is not inorganic',
            'It is not solid and does not have a crystalline structure',
            'It lacks a definite chemical formula',
          ],
          correct: 2,
          explain:
            'A mineral must be solid with an ordered crystalline structure. Ice (H₂O solid) has a hexagonal crystal lattice and meets all five criteria. Liquid water has the same formula but no crystal structure and is not solid — it fails the solid + crystalline requirement.',
        },
        {
          q: 'A mineral has a Mohs hardness of roughly 3 (scratched by a copper coin, but not by a fingernail). Which mineral fits best?',
          a: ['Talc', 'Quartz', 'Calcite', 'Corundum'],
          correct: 2,
          explain:
            'Calcite has a Mohs hardness of 3 — right at the copper coin boundary (~3.5). Talc is 1, quartz is 7, corundum is 9. Calcite also fizzes in dilute HCl, providing a second rapid field confirmation.',
        },
        {
          q: 'What structural feature of a mineral determines the number and angles of its cleavage planes?',
          a: [
            'Its color and streak color',
            'Planes of weak chemical bonding in the crystal lattice',
            'Impurities trapped during crystallization',
            'The rate at which it cooled from magma',
          ],
          correct: 1,
          explain:
            "Cleavage occurs along planes where chemical bonds are weakest within the crystal lattice. Mica's perfect basal cleavage reflects its layered silicate sheet structure — bonds between layers are far weaker than bonds within them. The lattice geometry fully determines where and how a mineral breaks.",
        },
        {
          q: "A mineral has a golden color but produces a jet-black streak. The most likely identification is:",
          a: [
            'Native gold',
            'Pyrite (FeS₂)',
            'Chalcopyrite (CuFeS₂)',
            'Yellow sulfur',
          ],
          correct: 1,
          explain:
            "Pyrite (FeS₂) is the classic \"fool's gold.\" Its metallic golden color can deceive, but the streak test is definitive: pyrite's streak is greenish-black to black, while gold's streak is golden-yellow. The streak reveals a mineral's true color in powdered form, free of surface effects.",
        },
        {
          q: 'Which of the following substances is NOT a valid mineral under the five-criteria definition?',
          a: [
            'Ice (H₂O crystalline solid, formed in glaciers)',
            'Halite (NaCl, mined from ancient evaporite beds)',
            'Pearl (secreted by a mollusk)',
            'Quartz (SiO₂, found in granite)',
          ],
          correct: 2,
          explain:
            "Pearls are secreted by living organisms (mollusks), failing the \"inorganic\" criterion. They are composed largely of aragonite (a calcium carbonate mineral) — but the pearl as a whole is a biogenic structure. Coral skeletons and shells have the same disqualification.",
        },
      ],
    },
  ],
}

export default minerals
