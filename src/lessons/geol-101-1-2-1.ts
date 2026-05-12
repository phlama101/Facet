import { Globe, Atom, Snowflake, FlaskConical, Gem } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const whatDefinesAMineral: Lesson = {
  id: 'geol-101-1-2-1',
  title: 'What Defines a Mineral',
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 150,
  description: "Five criteria separate a true mineral from coal, glass, pearl, and thousands of other solids — and the distinction unlocks everything about how rocks are built.",
  sources: [
    { org: 'USGS',        title: 'Mineral Resources Program',                          url: 'https://www.usgs.gov/programs/mineral-resources-program' },
    { org: 'Smithsonian', title: 'National Museum of Natural History — Geology, Gems and Minerals', url: 'https://naturalhistory.si.edu/research/geology-gems-and-minerals' },
    { org: 'NPS',         title: 'Geology Fieldnotes — Minerals',                      url: 'https://www.nps.gov/subjects/geology/minerals.htm' },
    { org: 'OpenStax',    title: 'Physical Geology, 2nd ed. (CC-BY 4.0)',              url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'UCAR Center for Science Education', title: 'Earth materials and minerals', url: 'https://scied.ucar.edu/learning-zone/earth' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Not just any solid',
      body: `Pick up a piece of granite and look at it closely. You will see distinct specks of different colours: pale pink crystals, glassy translucent grains, and tiny plates of shimmering black. The granite itself is not a single substance — it is a mixture. Each speck is a different material with its own chemistry, its own internal structure, and its own set of physical properties. Those specks are **minerals**. Granite is a rock. The distinction matters more than it might seem.

In Module 1.1, we described Earth's crust as "silicate rock" and the mantle as "solid silicate rock" without ever defining what those materials are at the molecular level. Now we can zoom in. Silicate rock is built from silicate minerals — specific substances with specific chemical formulas. The crust's most abundant mineral, feldspar, is a silicate. So is quartz, the glassy grain you just spotted in that granite. The mantle is dominated by olivine and pyroxene — also silicates. Every layer we studied in Module 1.1 resolves, at closer inspection, into a collection of minerals.

But not everything that looks mineral-like is actually a mineral. Coal looks like a rock, forms underground, and is solid — yet it is not a mineral. Pearl is a hard, shiny, natural solid — yet it is not a mineral. Obsidian is a naturally occurring black glass that fills museum display cases — yet it is not technically a mineral either. The difference in each case comes down to one or more of five specific criteria that every mineral must meet.

This lesson establishes those five criteria precisely, explores the edge cases that make the definition interesting, and introduces a handful of common minerals by name and formula — the building blocks that will reappear throughout this course.`,
      keyTerms: [
        {
          term: 'Mineral',
          def: "A naturally occurring, inorganic, solid substance with a definite chemical composition and an ordered crystalline structure. All five criteria must be met simultaneously. There are over 5,500 known mineral species, but fewer than 30 make up the bulk of Earth's crust and mantle.",
        },
        {
          term: 'Crystal',
          def: "A solid in which atoms are arranged in a regular, repeating three-dimensional pattern — a crystalline lattice. This internal order is what gives every sample of a given mineral the same consistent properties: the same hardness, the same way it breaks, the same optical behaviour, regardless of where it formed.",
        },
        {
          term: 'Chemical formula',
          def: "A shorthand notation specifying which elements are present in a substance and in what ratio. Quartz is always SiO₂ (one silicon, two oxygen). Halite is always NaCl (one sodium, one chlorine). A definite formula is one of the five criteria a mineral must have.",
        },
        {
          term: 'Mineraloid',
          def: "A naturally occurring, inorganic solid that resembles a mineral but lacks a fully ordered crystalline structure — its atoms are arranged randomly rather than in a repeating lattice. Obsidian (volcanic glass) and opal are the most common examples. Mineraloids pass four of the five criteria but fail the crystalline test.",
        },
      ],
      interaction: {
        type: 'scientific-diagram' as const,
        id: 'mohs-hardness-scale',
        caption: "Mohs scale of mineral hardness (1–10) with reference objects. The scale is ordinal — each step doesn't represent an equal increase in hardness.",
        credit: 'Mohs (1812) · USGS',
      },
    },
    {
      type: 'concept',
      title: 'The five criteria — and the edge cases that test them',
      body: `Why does mineralogy need such a precise definition? Because geology is full of solid natural materials that look mineral-like but form by very different processes, behave differently, and require different analytical approaches. A definition that is too loose would lump coal in with quartz. A definition that is too strict might accidentally exclude ice. The five-criteria definition has been refined over two centuries of mineralogical work to draw the line in exactly the right place.

All five criteria must be satisfied simultaneously. A substance that passes four out of five is not a mineral — it is something else.

**Criterion 1 — Naturally occurring.** A mineral must form through natural geological processes, not in a laboratory or factory. This criterion is straightforward in concept but produces some surprising outcomes. **Synthetic diamond** is chemically and structurally identical to natural diamond — the atoms are arranged in exactly the same lattice, and the hardness is exactly the same. Yet synthetic diamond is not a mineral, because it was produced by human technology rather than by geological forces. The same applies to laboratory-grown gemstones, industrial silicon, and any other substance deliberately manufactured by humans. If it came from a factory, it is not a mineral, regardless of how "natural" its composition looks.

**Criterion 2 — Inorganic.** A mineral must not be produced primarily by living organisms. This criterion excludes a wide range of natural solids that people often mistake for minerals. **Coal** is a black, hard solid that forms underground from compressed plant material over millions of years — organic in origin, not a mineral. **Amber** is fossilised tree resin — beautiful, ancient, natural, but organic. **Pearls** are produced by molluscs secreting layers of calcium carbonate around a particle — even though calcium carbonate (as calcite) is a mineral, the pearl itself is not, because a living organism made it. **Coral** and **shell** share this exclusion. The key question is always: did a living organism produce this, or did it form by inorganic geological processes?

**Criterion 3 — Solid.** A mineral must be solid at standard conditions. This excludes both gases and liquids. **Liquid mercury** occurs naturally in the environment, is inorganic, has the formula Hg, and is highly crystalline when frozen — but at room temperature it is liquid, so it is not a mineral. Water (H₂O) as a liquid is not a mineral. But here is one of geology's best edge cases: **ice is a mineral**. Ice is naturally occurring (it falls from the sky), inorganic, solid, has the fixed formula H₂O, and has a beautifully ordered crystalline structure — the hexagonal lattice responsible for the six-sided symmetry of snowflakes. Ice meets all five criteria perfectly. It is formally classified as a mineral species, just one that happens to melt easily at the temperatures most of us live in.

**Criterion 4 — Definite chemical composition.** A mineral must have a fixed, or narrowly restricted, chemical formula. Every grain of **quartz** on Earth has the formula SiO₂ — one silicon atom bonded to two oxygen atoms, in an endlessly repeating tetrahedral network. Every grain of **halite** (table salt) is NaCl. Every grain of **calcite** is CaCO₃. Some minerals allow limited substitution: in **olivine**, magnesium (Mg) and iron (Fe) can swap places in the crystal lattice, giving a range from pure Mg₂SiO₄ to pure Fe₂SiO₄ — but the overall formula structure, (Mg,Fe)₂SiO₄, is consistent, and both end-members are still minerals. **Coal** fails this criterion: its composition varies enormously depending on the source plant material, the burial pressure, and the age of the deposit. It has no single fixed formula. Variable composition means no mineral status.

**Criterion 5 — Crystalline structure.** A mineral's atoms must be arranged in an ordered, repeating three-dimensional lattice — a crystal structure. This is the criterion most people find surprising, because many natural solids look crystalline from the outside (shiny, angular, glass-like) but are actually disordered at the atomic level. **Obsidian** is the classic example: it is naturally occurring, inorganic, solid, and has a broadly silica-rich composition. But obsidian cooled so rapidly from lava that its atoms never had time to organise into a lattice. They froze in place randomly — an amorphous solid, like a liquid that stopped moving. Obsidian is therefore a **mineraloid**: it passes four criteria but fails the fifth. **Opal** is another mineraloid — it has a partially ordered microstructure, but not a fully crystalline one in the strict sense. Neither is a true mineral.

**Why crystalline structure matters so much.** The requirement for crystalline structure is not bureaucratic pedantry. It reflects something fundamental about what makes minerals geologically useful. Because every sample of quartz has the same atomic lattice, every sample of quartz has exactly the same hardness (7 on the Mohs scale), the same distinctive glassy fracture pattern, the same melting point, and the same optical properties. A geologist in Norway and a geologist in Brazil can pick up a fragment of quartz, test its hardness, and reach the same conclusion — because the lattice guarantees it. Obsidian, lacking that lattice, has properties that vary depending on how fast the lava cooled and what trace elements were present. It cannot be "identified" by the same kind of consistent property testing that works for true minerals.

This consistency is what makes mineralogy a science rather than a collection of individual descriptions — and it is why the crystalline criterion exists.

**Minerals vs. rocks.** A **rock** is an aggregate of one or more minerals bonded together. Granite is a rock composed of three main mineral species: quartz, feldspar, and mica. Limestone is a rock composed mainly of calcite. A single, pure mineral grain is not a rock. The boundary matters because minerals and rocks are studied and classified by entirely different frameworks: **mineralogy** examines individual mineral species and their properties; **petrology** examines rocks as assemblages and asks about the processes that formed them. Module 1.3 is about rocks; Module 1.2 is about minerals. They are related but separate.

**Five minerals to know now.** Only about 30 mineral species make up the vast majority of Earth's crust and mantle. These five will reappear constantly throughout this course:
- **Quartz** (SiO₂) — hard, glassy, abundant in continental crust, the main component of sand
- **Feldspar** (complex silicates, varies) — the single most abundant mineral group in Earth's crust; gives granite its pink or white colour
- **Calcite** (CaCO₃) — the main mineral in limestone and marble; fizzes in dilute acid
- **Olivine** ((Mg,Fe)₂SiO₄) — the dominant mineral of the upper mantle; green, dense, found in basalt
- **Halite** (NaCl) — table salt; forms by evaporation of seawater in enclosed basins

Each of these will be explored in full detail in Lesson 1.2.3. For now, knowing their names and formulas is enough.`,
      cards: [
        {
          name: '1 — Naturally Occurring',
          icon: Globe,
          color: BRAND.jade,
          desc: "Forms through geological processes, not in a laboratory or factory. Synthetic diamond is chemically and structurally identical to natural diamond — same lattice, same hardness — yet it is not a mineral because human technology produced it. Natural diamond is a mineral. The origin, not the composition, determines this criterion.",
          examples: 'Natural diamond ✓ · Synthetic diamond ✗ · Lab sapphire ✗ · Ice (from snow) ✓',
        },
        {
          name: '2 — Inorganic',
          icon: Atom,
          color: BRAND.accent,
          desc: "Not produced primarily by living organisms. Coal formed from compressed plant material — organic, not a mineral. Amber is fossilised tree resin. Pearl is secreted by a mollusc. Coral and shell are biologically produced calcium carbonate. Even though calcite (CaCO₃) is a mineral, a pearl made of calcium carbonate is not — because a living organism assembled it. The key question: did a geological process make it, or did life?",
          examples: 'Quartz ✓ · Coal ✗ (plant) · Amber ✗ (resin) · Pearl ✗ (mollusc)',
        },
        {
          name: '3 — Solid',
          icon: Snowflake,
          color: BRAND.amethyst,
          desc: "Must be solid at standard conditions. Liquid mercury — naturally occurring, inorganic, element Hg — is not a mineral because it is liquid at room temperature. The famous edge case: ice is a mineral. It is naturally occurring, inorganic, solid, has the formula H₂O, and has a hexagonal crystalline lattice responsible for the six-sided symmetry of snowflakes. Liquid water is not a mineral; ice is.",
          examples: 'Ice ✓ · Liquid water ✗ · Liquid mercury ✗ · Frozen CO₂ (dry ice) ✓',
        },
        {
          name: '4 — Definite Composition',
          icon: FlaskConical,
          color: BRAND.coral,
          desc: "Must have a fixed or narrowly restricted chemical formula. Quartz is always SiO₂; halite is always NaCl; calcite is always CaCO₃. Some minerals allow limited element substitution — olivine permits iron and magnesium to swap — but the formula structure remains consistent. Coal fails this criterion: its composition varies enormously depending on plant source, burial conditions, and age. No fixed formula, no mineral status.",
          examples: 'Quartz SiO₂ ✓ · Halite NaCl ✓ · Coal (variable) ✗ · Olivine (Mg,Fe)₂SiO₄ ✓',
        },
        {
          name: '5 — Crystalline Structure',
          icon: Gem,
          color: BRAND.gold,
          desc: "Atoms must be arranged in an ordered, repeating three-dimensional lattice. This is the criterion that excludes volcanic glass: obsidian cooled so rapidly from lava that its atoms froze in place randomly — an amorphous solid. Obsidian is a mineraloid: naturally occurring, inorganic, solid, and broadly silica-rich, but not crystalline. Opal is another mineraloid for the same reason. The crystalline lattice is what guarantees consistent, identifiable physical properties across all samples of a given mineral.",
          examples: 'Quartz (ordered lattice) ✓ · Obsidian (amorphous) ✗ · Opal ✗ · Ice ✓',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Four substances are described below. Which one qualifies as a mineral?',
          a: [
            'Coal — a black, hard solid that forms underground from compressed plant material over millions of years',
            'Halite — a naturally occurring, inorganic, solid crystal with the formula NaCl, found in ancient evaporite deposits',
            'Obsidian — a naturally occurring, inorganic, solid volcanic glass with a broadly silica-rich composition',
            'Synthetic sapphire — an aluminium oxide crystal grown in a laboratory furnace at controlled temperatures',
          ],
          correct: 1,
          explain: "Coal (A) fails the inorganic criterion: it formed from compressed plant material and is therefore organic in origin, regardless of how hard or underground it is. Halite (B) is correct: it is naturally occurring (geological process), inorganic, solid, has the definite formula NaCl, and has an ordered cubic crystalline structure — all five criteria are satisfied. Obsidian (C) fails the crystalline criterion: it cooled from lava so rapidly that its atoms never organised into a lattice, making it an amorphous mineraloid rather than a true mineral. Synthetic sapphire (D) fails the naturally occurring criterion: it was produced deliberately in a laboratory, not by a geological process, even though its composition and structure are identical to natural corundum.",
        },
        {
          q: 'Ice qualifies as a mineral, but liquid water does not. Which criteria explain this difference?',
          a: [
            'Ice is rarer than liquid water, and geological rarity is one of the five mineral criteria',
            'Ice forms only in polar regions, which counts as a specialised geological environment that liquid water lacks',
            'Ice is solid and has an ordered crystalline structure — two criteria that liquid water fails to meet',
            'Liquid water contains dissolved minerals that prevent it from qualifying as a mineral in its own right',
          ],
          correct: 2,
          explain: "Rarity (A) is not one of the five criteria — there is no requirement that a mineral be uncommon; quartz is one of the most abundant minerals on Earth. The geographic location of formation (B) is also not a criterion — minerals can form anywhere geological conditions allow it, and liquid water in polar regions is still liquid water. The correct answer is C: ice is solid (criterion 3) and has an ordered hexagonal crystalline structure (criterion 5) — the same lattice responsible for the six-fold symmetry of snowflakes. Liquid water fails both of these: it is not solid, and its molecules are not arranged in a fixed repeating lattice. Dissolved minerals in water (D) are irrelevant to water's own classification — the question is whether water itself meets the five criteria, not what it carries.",
        },
        {
          q: "Obsidian is naturally occurring, inorganic, and solid, with a broadly silica-rich composition. Why is it classified as a mineraloid rather than a mineral?",
          a: [
            'Obsidian forms from volcanic eruptions, and volcanic processes are classified as biological rather than geological',
            'Obsidian is an amorphous solid — its atoms are frozen in a disordered, random arrangement rather than in an ordered crystalline lattice',
            'Obsidian contains impurities of many different elements with no consistent formula from one sample to the next',
            'Obsidian was classified before the modern mineral definition existed and has not been reclassified out of tradition',
          ],
          correct: 1,
          explain: "Volcanic eruptions are emphatically geological processes, not biological ones — the naturally occurring criterion (A) is not the problem; obsidian passes that test. The correct answer is B: obsidian cooled from lava so rapidly that its silicon and oxygen atoms never had time to organise into a repeating crystalline lattice; they locked into a random, glassy arrangement — an amorphous solid. It passes four of the five criteria but fails the crystalline structure test, which is why it is called a mineraloid. While obsidian does have some compositional variation (C), this is not the primary reason for its exclusion; the amorphous structure is the definitive disqualifier. The classification (D) is not based on historical convention — it reflects the precise technical failure to meet the crystalline criterion.",
        },
      ],
    },
  ],
}

export default whatDefinesAMineral
