import { Mountain, Layers, Gem, Microscope, Leaf, Diamond, Zap, Thermometer } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

// Sources used in this lesson:
// [USGS-VHP]   USGS Volcano Hazards Program — geothermal gradient data
//              https://www.usgs.gov/programs/VHP
// [USGS-RM]    USGS Rocks & Minerals Educational Resources
//              https://www.usgs.gov/educational-resources
// [OStax-PG]   OpenStax Physical Geology, 2nd ed., Ch. 3 (Igneous Rocks)
//              and Ch. 7 (Metamorphic Rocks). CC-BY 4.0.
//              https://openstax.org/books/physical-geology-2e
// [UCAR]       UCAR Center for Science Education — Energy in Earth Processes
//              https://scied.ucar.edu
// [AGI-GL]     AGI Glossary of Geology, 5th ed.
//              https://americangeosciences.org

const rockCycleIntermediate: Lesson = {
  id: 'rock-cycle-intermediate',
  title: "Driving the Rock Cycle: Bowen's Series and Metamorphic Grades",
  track: 'geo',
  trackName: 'Geology',
  level: 'Intermediate',
  duration: '18 min',
  xpReward: 240,
  description:
    "Quantify the rock cycle — master the crystallization sequence that shapes all igneous rocks, and learn how index minerals act as buried thermometers recording depth and temperature.",
  sources: [
    {
      org: 'USGS',
      title: 'Volcano Hazards Program — Geothermal Gradient',
      url: 'https://www.usgs.gov/programs/VHP',
    },
    {
      org: 'USGS',
      title: 'Rocks and Minerals Educational Resources',
      url: 'https://www.usgs.gov/educational-resources',
    },
    {
      org: 'OpenStax',
      title: 'Physical Geology, 2nd ed., Ch. 3 & 7 (CC-BY 4.0)',
      url: 'https://openstax.org/books/physical-geology-2e',
    },
    {
      org: 'UCAR',
      title: 'Energy in Earth Processes',
      url: 'https://scied.ucar.edu',
    },
    {
      org: 'AGI',
      title: 'Glossary of Geology, 5th ed.',
      url: 'https://americangeosciences.org',
    },
  ],

  sections: [
    // ─── Section 1 of 4 — Intro ───────────────────────────────────
    {
      type: 'intro',
      title: 'Two engines, one cycle',
      body: `You already know the rock cycle's three destinations — igneous, sedimentary, and metamorphic. Now ask a more precise question: **what energy drives each transformation?**

The rock cycle runs on two completely separate engines. The first is **geothermal heat** — thermal energy released by the radioactive decay of uranium, thorium, and potassium deep inside Earth. This engine powers everything that involves melting or high-pressure transformation. The continental geothermal gradient averages **25–30 °C per kilometre of depth** — so at the base of a 35 km crust, temperatures reach roughly 875–1,050 °C (USGS Volcano Hazards Program). That is hot enough to melt crustal rocks.

The second engine is **solar radiation**. Sunlight drives evaporation, rainfall, and freeze-thaw cycles — the agents of physical and chemical weathering that break rocks apart and mobilise sediment. Without the Sun, all sedimentary processes would halt. **Gravity** links the two engines: it transports eroded material downslope toward depositional basins, but it generates no energy of its own.

Knowing which engine controls which step is what separates reading rock history from simply labelling rock types.`,
      keyTerms: [
        {
          term: 'Geothermal gradient',
          def: 'The rate of temperature increase with depth — approximately 25–30 °C per kilometre in continental crust. Source: USGS Volcano Hazards Program.',
        },
        {
          term: 'Fractional crystallization',
          def: 'Progressive removal of early-formed crystals from a cooling magma, continuously shifting the composition of the remaining melt toward more silica-rich types.',
        },
        {
          term: 'Index mineral',
          def: "A mineral whose first appearance in metamorphic rock marks a specific pressure–temperature zone, allowing geologists to reconstruct burial depth and temperature history.",
        },
      ],
    },

    // ─── Section 2 of 4 — Concept: Bowen's Series ────────────────
    {
      type: 'concept',
      title: "Bowen's Reaction Series: the crystallization roadmap",
      body: `In 1922, petrologist Norman L. Bowen published experimental results showing that **minerals crystallize from a cooling magma in a predictable, temperature-controlled sequence** — not all at once. This is Bowen's Reaction Series, and it explains why radically different rocks can form from the same starting material (OpenStax *Physical Geology*, 2nd ed., Ch. 3).

The series has two branches that run simultaneously as magma cools from ~1,300 °C toward ~650 °C.

**Discontinuous branch** (iron–magnesium minerals — each phase reacts with the melt and is replaced by the next):

**Olivine** crystallizes first at ~1,200–1,300 °C, rich in magnesium and iron. Given time, it reacts with the surrounding melt to form **pyroxene** (~1,100–1,200 °C), which in turn reacts to form **amphibole** (~900–1,100 °C), and finally **biotite mica** (~800–900 °C).

**Continuous branch** (plagioclase feldspar — composition shifts gradually throughout cooling):

At high temperature, calcium-rich plagioclase (anorthite, CaAl₂Si₂O₈) crystallizes. As cooling proceeds, plagioclase continuously incorporates more sodium, shifting toward albite (NaAlSi₃O₈) at lower temperatures. A single crystal can preserve this chemical zoning — calcium-rich core, sodium-rich rim — recording the cooling history within its own structure.

**Late-stage minerals** (both branches converge near 650–750 °C):

**Potassium feldspar** and **muscovite mica** appear around 750 °C. **Quartz** — pure SiO₂ — crystallizes last at approximately 650 °C.

**Why this drives compositional diversity:**

As early-forming minerals lock up Mg, Fe, and Ca, the remaining melt becomes progressively enriched in Si, Al, Na, and K. A basaltic melt that undergoes extensive fractional crystallization can eventually yield a residual liquid that produces granite — even though the two rocks look completely different. This process, **fractional crystallization**, explains why a single volcanic complex can erupt both basalt and rhyolite (AGI *Glossary of Geology*, 5th ed.).`,
      cards: [
        {
          name: 'Olivine — first to crystallize',
          icon: Mountain,
          color: BRAND.jade,
          desc: "Crystallizes at ~1,200–1,300 °C. Mg- and Fe-rich. Dominates Earth's upper mantle. Absent in granite — it crystallized out and reacted away long before granite-forming temperatures were reached.",
          examples: 'Peridotite · Dunite · Basalt',
        },
        {
          name: 'Plagioclase — continuous shift',
          icon: Layers,
          color: BRAND.accent,
          desc: 'Shifts from Ca-rich (anorthite) to Na-rich (albite) as cooling proceeds. Zoned crystals record this compositional history. The Ca/Na ratio indicates the temperature at which that part of the crystal grew.',
          examples: 'Gabbro (Ca-rich) · Granite (Na-rich)',
        },
        {
          name: 'Quartz — last to crystallize',
          icon: Gem,
          color: BRAND.amethyst,
          desc: 'Pure SiO₂, crystallizes at ~650 °C — the lowest temperature in the series. Abundant in granite because it forms from the Si-enriched residual melt. Extremely chemically stable at the surface, so it dominates beach sand worldwide.',
          examples: 'Granite · Sandstone · Quartzite',
        },
        {
          name: 'Crystal size = cooling rate',
          icon: Microscope,
          color: BRAND.coral,
          desc: 'The same melt cooled slowly underground (intrusive/plutonic) produces centimetre-scale crystals. Cooled rapidly at the surface (extrusive/volcanic), it produces fine-grained or glassy rock. Two-stage cooling creates porphyritic texture: large phenocrysts set in a fine groundmass.',
          examples: 'Granite (slow) · Basalt (fast) · Porphyry (two-stage)',
        },
      ],
    },

    // ─── Section 3 of 4 — Concept: Metamorphic Grades ───────────
    // Note: the lesson plan specified intro → concept → application → quiz.
    // The current Section type union does not include 'application'.
    // This section uses type 'concept' and is written as an applied
    // interpretation exercise (Barrovian zones as a working tool).
    // A dedicated ApplicationSection type should be added when the
    // full multi-tier structure is implemented.
    {
      type: 'concept',
      title: 'Metamorphic grades: minerals as buried thermometers',
      body: `Metamorphic rocks form without melting, but the minerals they contain permanently record how deep and how hot they were buried. In 1893, British geologist George Barrow mapped **metamorphic zones** across the Scottish Highlands, each zone defined by the **first appearance of a diagnostic index mineral** (OpenStax *Physical Geology*, 2nd ed., Ch. 7). These Barrovian zones are now used on every continent to reconstruct burial histories.

The six zones run from lowest to highest metamorphic grade. The temperatures below use the standard continental geothermal gradient of ~30 °C/km to convert temperature to approximate burial depth (USGS Volcano Hazards Program; UCAR Center for Science Education).

**Zone 1 — Chlorite:** ~250–350 °C · ~8–12 km burial. Lowest grade. Rocks are slates and phyllites — fine-grained with a silky or waxy surface.

**Zone 2 — Biotite:** ~350–400 °C · ~12–15 km burial. Dark biotite mica appears as the rock is pressed deeper.

**Zone 3 — Garnet:** ~400–450 °C · ~15–20 km burial. Red-brown almandine garnet crystals form. Garnet schist is a key marker rock in mountain belts worldwide.

**Zone 4 — Staurolite:** ~500–550 °C · ~20–25 km burial. Staurolite crystals — often forming distinctive cross-shaped twins — appear at this depth.

**Zone 5 — Kyanite:** ~550–600 °C · ~25–35 km burial. Blue, blade-like crystals. Kyanite is pressure-sensitive and forms only under high-pressure conditions.

**Zone 6 — Sillimanite:** above 600 °C · above 30 km burial. Highest Barrovian grade. Finding sillimanite-bearing gneiss at today's surface means a full mountain range once stood above it and has since eroded entirely away.

**Applying the zones:** If a geologist finds staurolite in a field sample, they immediately know that rock was once ~20–25 km underground and reached ~500–550 °C — even if it is now sitting on a flat valley floor. The mountain belt above it was removed by erosion over tens of millions of years, slowly exhuming the rock.

A second metamorphic style operates without deep burial: **contact metamorphism**. Heat from a nearby magma intrusion bakes the surrounding rock. Closest to the intrusion — highest grade (hornfels). Further away — progressively lower grade. The result is a concentric metamorphic aureole rather than the regional zones Barrow described. Same minerals, completely different geometry and energy source.`,
      cards: [
        {
          name: 'Chlorite (Zone 1 — low)',
          icon: Leaf,
          color: BRAND.jade,
          desc: '~250–350 °C · ~8–12 km burial. Lowest Barrovian grade. Produces slates and phyllites. Represents mild burial — equivalent to sediment beneath a young, developing mountain belt.',
          examples: 'Slate · Phyllite · Chlorite schist',
        },
        {
          name: 'Garnet (Zone 3 — medium)',
          icon: Diamond,
          color: BRAND.ruby,
          desc: '~400–450 °C · ~15–20 km burial. Red almandine garnet appears. If you find garnet schist at the surface today, at least 15–20 km of rock above it has since eroded away.',
          examples: 'Garnet schist · Amphibolite',
        },
        {
          name: 'Sillimanite (Zone 6 — high)',
          icon: Zap,
          color: BRAND.amethyst,
          desc: 'Above 600 °C · above 30 km burial. Highest-grade Barrovian mineral. Only exposed at the surface after deep erosional exhumation of ancient mountain roots.',
          examples: 'Sillimanite gneiss · Granulite',
        },
        {
          name: 'Contact metamorphism',
          icon: Thermometer,
          color: BRAND.coral,
          desc: 'Driven by intrusive heat, not burial depth. Highest grade immediately adjacent to the intrusion (hornfels); grade decreases outward. Forms a concentric aureole at any depth — even near the surface where regional metamorphism could never operate.',
          examples: 'Hornfels · Spotted slate · Marble adjacent to granite',
        },
      ],
    },

    // ─── Section 4 of 4 — Quiz ───────────────────────────────────
    {
      type: 'quiz',
      questions: [
        {
          q: "According to Bowen's Reaction Series, which mineral crystallizes LAST from a slowly cooling magma?",
          a: ['Olivine', 'Calcium-rich plagioclase', 'Pyroxene', 'Quartz'],
          correct: 3,
          explain:
            "Quartz (SiO₂) crystallizes at the lowest temperature in Bowen's Reaction Series — approximately 650 °C. Olivine is first at ~1,200–1,300 °C. This sequence was experimentally determined by N.L. Bowen in 1922 and underpins all of igneous petrology (OpenStax Physical Geology, Ch. 3).",
        },
        {
          q: 'Two igneous rocks have identical chemical compositions but very different textures: one has crystals several centimetres across; the other is fine-grained and nearly glassy. What most likely explains this?',
          a: [
            'They formed from different magma sources at different depths',
            'One cooled slowly underground; the other cooled rapidly at the surface',
            'One is much older, giving crystals more time to grow regardless of environment',
            'One was later recrystallised by metamorphism',
          ],
          correct: 1,
          explain:
            'Crystal size is controlled by cooling rate, not age or chemistry. Slow underground cooling (intrusive/plutonic) allows large crystals to grow. Rapid surface cooling (extrusive/volcanic) produces fine-grained or glassy textures. Same bulk composition, different thermal history (OpenStax Physical Geology, Ch. 3).',
        },
        {
          q: "A metamorphic rock contains staurolite crystals. Using the Barrovian zones, what can be inferred about its formation?",
          a: [
            'Shallow burial at low pressure — approximately 150–200 °C',
            'Contact metamorphism immediately adjacent to a granite intrusion',
            'Burial of approximately 20–25 km reaching ~500–550 °C',
            'Burial of less than 5 km — staurolite forms near the surface',
          ],
          correct: 2,
          explain:
            "Staurolite marks the fourth Barrovian zone — approximately 500–550 °C and 20–25 km burial depth. George Barrow established these zones in the Scottish Highlands in 1893. Finding staurolite at the surface today means at least 20 km of overlying rock has since eroded away (OpenStax Physical Geology, Ch. 7).",
        },
        {
          q: 'The continental geothermal gradient averages 25–30 °C per kilometre (USGS). At the base of a 35 km thick continental crust, what is the approximate temperature range?',
          a: ['100–200 °C', '350–500 °C', '875–1,050 °C', '1,300–1,500 °C'],
          correct: 2,
          explain:
            '35 km × 25 °C/km = 875 °C minimum; 35 km × 30 °C/km = 1,050 °C maximum. This range overlaps with the temperatures at which granite-forming melts are generated — explaining why the deepest roots of mountain belts can melt (USGS Volcano Hazards Program).',
        },
        {
          q: 'Which energy source primarily drives weathering, erosion, and sediment transport — the processes that produce sedimentary rocks?',
          a: [
            'Geothermal heat from radioactive decay in the mantle',
            'Tidal friction from the Moon–Earth system',
            'Solar radiation driving the hydrological cycle',
            'Gravitational potential energy alone',
          ],
          correct: 2,
          explain:
            'Solar radiation powers evaporation, rainfall, and freeze-thaw cycles — the agents that break rocks apart and move sediment. Gravity transports material downhill but provides no energy input of its own; it converts potential energy that solar-driven uplift of water already stored. Without the Sun, all surface weathering processes would cease (UCAR Center for Science Education).',
        },
      ],
    },
  ],
}

export default rockCycleIntermediate
