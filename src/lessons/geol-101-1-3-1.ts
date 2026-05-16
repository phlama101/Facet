import { Flame, Layers, Thermometer } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const rockCycleOverview: Lesson = {
  id: 'geol-101-1-3-1',
  title: 'The Rock Cycle Overview',
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 150,
  description: "Every rock has a biography. The rock cycle is the framework for reading it — a continuous system of transformation that has been running since Earth formed.",
  sources: [
    { org: 'USGS', title: 'Rocks and Geology in the San Francisco Bay Region', url: 'https://pubs.usgs.gov/gip/dynamic/dynamic.html' },
    { org: 'USGS', title: 'The Rock Cycle (Educational Resources)', url: 'https://www.usgs.gov/educational-resources' },
    { org: 'NPS',  title: 'Geology Fieldnotes — Rocks', url: 'https://www.nps.gov/subjects/geology/rocks.htm' },
    { org: 'OpenStax', title: 'Physical Geology, 2nd ed. (CC-BY 4.0)', url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'UCAR Center for Science Education', title: 'Earth materials', url: 'https://scied.ucar.edu/learning-zone/earth' },
  ],
  sections: [
    {
      type: 'intro',
      title: "A rock's life story",
      body: `Look closely at a granite countertop — or at any granite outcrop in the mountains — and you will see distinct crystals: pale pink or white potassium feldspar, glassy grey quartz, black flakes of biotite mica. Those crystals grew slowly, over millions of years, as a mass of magma cooled deep underground. The granite was later pushed upward by tectonics, exposed at the surface by erosion, and subjected to rain, frost, and chemical weathering that broke the feldspar crystals into clay minerals and freed the more durable quartz grains. Those quartz grains travelled downstream in rivers, eventually settling in a coastal delta or desert dune. Given enough time and burial, they could be compressed and cemented into sandstone. If that sandstone were later subducted or buried deeply enough to encounter high heat and pressure, it would recrystallise into quartzite — a metamorphic rock. The granite in your kitchen is, in a very real sense, a frozen moment in an ongoing story.

That story is the **rock cycle**: the continuous set of processes by which material is cycled through Earth's three great rock families — igneous, sedimentary, and metamorphic — over geologic time. The rock cycle is not a loop with a single starting point and a single path. It is more like a network of roads: material can travel between any two family types directly, and the journey can be interrupted, reversed, or rerouted at any point. A volcanic eruption can rapidly convert mantle rock into igneous basalt. That basalt, exposed at the ocean floor, can be weathered, transported, and deposited as sediment. Buried sedimentary rock can be metamorphosed without ever melting. Metamorphic rock can melt directly into magma without returning to the surface first. Every pathway is available, and all of them are operating simultaneously somewhere on Earth right now.

Module 1.2 gave you the mineral vocabulary for reading rocks — the 30 or so rock-forming minerals that compose nearly all of Earth's crust, and the tools for identifying them. Module 1.3 zooms out to the rock scale. This lesson introduces the three families and the cycle that connects them. Lessons 1.3.2 through 1.3.4 will give each family its own detailed treatment.`,
      keyTerms: [
        {
          term: 'Rock',
          def: "A naturally occurring solid aggregate of one or more minerals (or, in some cases, glass or organic material). The key distinction from a mineral: a mineral has a fixed chemical composition and crystal structure; a rock is an assemblage that can vary in mineral proportions and texture.",
        },
        {
          term: 'Rock cycle',
          def: "The continuous, interconnected set of geological processes — melting, crystallisation, weathering, erosion, deposition, burial, heat, and pressure — by which rock material is transformed among the three rock families over geologic time. There is no fixed starting point or obligatory sequence.",
        },
        {
          term: 'Igneous rock',
          def: "Rock formed by the cooling and crystallisation of molten rock. If cooling occurs underground (slowly), the result is intrusive igneous rock with large, visible crystals. If cooling occurs at the surface (rapidly), the result is extrusive igneous rock with small crystals or volcanic glass.",
        },
        {
          term: 'Sedimentary rock',
          def: "Rock formed at or near Earth's surface by the accumulation and lithification of sediment — loose fragments of pre-existing rock or minerals, chemically precipitated minerals, or organic material — followed by compaction and cementation.",
        },
        {
          term: 'Metamorphic rock',
          def: "Rock formed when pre-existing rock (of any family) is subjected to elevated temperature and/or pressure — conditions intense enough to alter its mineral assemblage or texture — without fully melting it. The original rock is transformed in the solid state.",
        },
      ],
    },
    {
      type: 'concept',
      title: 'Three families, one cycle',
      body: `**The three rock families.** Every rock belongs to one of three families, defined by how it formed — not by what it looks like or what minerals it contains. The same mineral (quartz, for example) appears in all three families: as a crystallised component of granite (igneous), as the detrital grains of sandstone (sedimentary), and as the recrystallised fabric of quartzite (metamorphic). The family label tells you the process that made the rock, which in turn tells you the conditions it has experienced in Earth's history.

**Igneous rocks — born from fire.** When rock melts, it becomes magma. When magma cools and crystallises, it produces an igneous rock. The texture of the igneous rock — the size of its crystals — records the cooling rate, which records the depth. Magma that intrudes into the crust and cools slowly over millions of years produces coarse-grained rocks like **granite** and **gabbro**, with crystals large enough to see with the naked eye. Magma that reaches the surface as lava and cools within days to years produces fine-grained rocks like **basalt** and **rhyolite**, whose crystals are too small to see without magnification. Lava that quenches almost instantaneously — into water, for example — can produce volcanic glass with no crystals at all. The crystal size is therefore a direct record of the rock's thermal history. Intrusive igneous rocks form the roots of mountain belts and the cratons of ancient continents. Extrusive igneous rocks coat the ocean floors (basalt is the most abundant rock in Earth's crust) and build volcanic islands and continental volcanic arcs.

**Sedimentary rocks — built at the surface.** Sedimentary rocks form through a sequence of surface and near-surface processes: **weathering** (physical and chemical breakdown of pre-existing rock at the surface), **erosion** (transport of the resulting fragments by water, wind, ice, or gravity), **deposition** (settling out of the transport medium), and **lithification** (compaction and cementation of the deposited sediment into rock). There are three broad types: **clastic** sedimentary rocks, made of fragments of pre-existing minerals and rocks (sandstone, shale, conglomerate); **chemical** sedimentary rocks, formed by precipitation of dissolved minerals from water (limestone precipitated by marine organisms, rock salt formed by evaporation of seawater); and **organic** sedimentary rocks, formed from accumulated organic material (coal, some limestones). Because sedimentary rocks form at the surface under known temperature and pressure conditions, and because they often preserve fossils and other environmental indicators, they are the primary archive of Earth's surface history — climate, sea level, life, and geography over time.

**Metamorphic rocks — transformed under pressure.** Metamorphic rocks form when pre-existing rock is subjected to conditions significantly different from those under which it formed — primarily elevated temperature, elevated pressure, or both — without melting. Heat and pressure cause minerals to recrystallise into new assemblages that are stable under the new conditions. Shale, a clastic sedimentary rock rich in clay minerals, progressively transforms with increasing temperature and pressure through a sequence: shale → slate → phyllite → schist → gneiss. Each step reflects higher metamorphic grade and involves the growth of progressively coarser, higher-temperature minerals. Many metamorphic rocks develop **foliation** — a planar fabric caused by parallel alignment of flat or elongated minerals such as micas — which records the direction of the pressure that deformed them. Marble (from limestone) and quartzite (from sandstone) are non-foliated metamorphic rocks; schist and gneiss are classic foliated examples.

**Why the cycle has no fixed starting point.** Geology textbooks sometimes draw the rock cycle as a triangle, with arrows going igneous → sedimentary → metamorphic → (melt) → igneous. This is pedagogically convenient but misleading. Any rock type can transform directly into any other: a metamorphic rock that melts becomes an igneous rock directly; an igneous rock that is exposed at the surface weathers into sediment without passing through metamorphism; a sedimentary rock can be buried so deep and so quickly that it metamorphoses before it is ever lithified into a well-consolidated rock. The three-step "triangle" is just one possible path among many. The cycle is better understood as a network in which all transformations are available and material is constantly moving — just at timescales of millions to hundreds of millions of years.

**Two energy sources drive the whole system.** The rock cycle runs on two entirely separate energy budgets. The **igneous and metamorphic side** is powered by **Earth's internal heat** — the residual heat from planetary formation (accretion and differentiation) and the ongoing heat produced by radioactive decay of uranium, thorium, and potassium in the mantle and crust. This heat drives mantle convection, which in turn drives plate tectonics, which creates the conditions for melting (at spreading centres and subduction zones) and deep burial (at convergent margins). The **sedimentary side** is powered by **solar energy** — the sun drives atmospheric circulation and the water cycle, which in turn drive the weathering, erosion, and deposition that produce sedimentary rocks. Without solar energy, the hydrological cycle would stop, rivers and wind would cease, and sedimentation would effectively halt. Without internal heat, mantle convection would stop, plate tectonics would cease, and the igneous and metamorphic sides of the cycle would wind down. Earth's rock cycle is uniquely vigorous among the inner planets precisely because it is still running on both energy sources simultaneously.

**The rock cycle as a geologic clock.** Because each rock family forms under specific conditions of temperature, pressure, and surface environment, a rock's family membership — and the details of its texture, mineral assemblage, and structure — is a record of the conditions it has experienced. Reading that record is what geologists do in the field and in the lab. Modules 1.3 through 1.5 will develop the tools for reading each rock type. Module 1.4 will show how plate tectonics provides the tectonic engine that controls where in the cycle rocks currently reside.`,
      interaction: {
        type: 'scientific-diagram' as const,
        id: 'rock-cycle',
        caption: "The rock cycle connects all three rock families through geological processes. There is no single direction — any rock family can transform into any other, and the same material may cycle repeatedly over billions of years.",
        credit: 'USGS / OpenStax Physical Geology',
      },
      cards: [
        {
          name: 'Igneous Rocks',
          icon: Flame,
          color: BRAND.ruby,
          desc: "Formed by cooling and crystallisation of magma (underground) or lava (at the surface). Crystal size records cooling rate: slow cooling underground → coarse-grained intrusive rocks (granite, gabbro); fast cooling at surface → fine-grained extrusive rocks (basalt, rhyolite); near-instant quenching → volcanic glass (obsidian). Intrusive rocks make up continental cratons and mountain roots. Extrusive basalt is Earth's most abundant crustal rock, covering all ocean floors.",
          examples: 'Granite: coarse-grained intrusive · Basalt: fine-grained extrusive · Gabbro: intrusive mafic · Obsidian: volcanic glass',
        },
        {
          name: 'Sedimentary Rocks',
          icon: Layers,
          color: BRAND.gold,
          desc: "Formed at or near Earth's surface by weathering, erosion, deposition, and lithification (compaction + cementation). Three types: clastic (fragments of pre-existing rock — sandstone, shale, conglomerate), chemical (precipitated from solution — limestone, rock salt, chert), and organic (from accumulated organic material — coal). Sedimentary rocks preserve Earth's surface history: fossils, ancient climates, sea levels, and environments are all recorded in sedimentary layers.",
          examples: 'Sandstone: clastic (quartz grains) · Limestone: chemical/biogenic · Shale: fine-grained clastic · Coal: organic',
        },
        {
          name: 'Metamorphic Rocks',
          icon: Thermometer,
          color: BRAND.amethyst,
          desc: "Formed when pre-existing rock is transformed by heat and/or pressure without melting. Mineral assemblages change to those stable under the new conditions. Many develop foliation — parallel alignment of flat minerals (micas) due to directed pressure. Metamorphic grade increases from low (slate, phyllite) to high (schist, gneiss). Non-foliated examples: marble (from limestone) and quartzite (from sandstone). Foliated examples record the direction of the tectonic stress that formed them.",
          examples: 'Marble: from limestone · Quartzite: from sandstone · Schist: foliated, medium grade · Gneiss: foliated, high grade',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "A geologist finds a coarse-grained rock with interlocking crystals of quartz, potassium feldspar, and biotite mica — each crystal large enough to see with the naked eye. The rock shows no layering or foliation. Which rock family does it belong to, and what does the coarse crystal size indicate?",
          a: [
            "Sedimentary — the interlocking crystals are cemented grains of quartz and feldspar derived from weathered source rock, and large grain size indicates deposition by high-energy water",
            "Metamorphic — large interlocking crystals are characteristic of high-grade metamorphism, and the absence of foliation means it recrystallised under uniform pressure",
            "Igneous — the rock crystallised from magma; the coarse grain size indicates slow cooling underground (intrusive igneous), giving crystals time to grow large before the melt solidified",
            "The rock cannot be classified without a chemical analysis, because crystal size alone does not distinguish igneous from metamorphic rocks",
          ],
          correct: 2,
          explain: "Sedimentary rocks (A) are made of grains that were deposited and then cemented — they do not form by crystallisation from melt, and their grains would not interlock in the way described; large grain size in a clastic sedimentary rock reflects transport energy, not cooling history. Metamorphic rocks (B) do recrystallise under heat and pressure, and some non-foliated metamorphic rocks (marble, quartzite) do have large interlocking crystals — but a quartz-feldspar-mica assemblage without foliation in a coarse rock is the textbook description of granite, an intrusive igneous rock, not a metamorphic one. The correct answer is C: the rock is an igneous rock, specifically an intrusive (plutonic) igneous rock; the coarse grain size — crystals large enough to see without magnification — records slow cooling underground, where the magma was insulated by surrounding rock and had millions of years to crystallise; faster surface cooling produces the fine-grained texture of basalt or rhyolite. Chemical analysis (D) can confirm composition but is not necessary here — texture is diagnostic.",
        },
        {
          q: "The rock cycle is powered by two distinct and independent energy sources. Which answer correctly identifies them and matches each to the side of the cycle it drives?",
          a: [
            "Tidal energy (from the Moon's gravity) drives the sedimentary side; solar energy drives the igneous and metamorphic side through atmospheric heating",
            "Earth's internal heat (radioactive decay and primordial heat) drives the igneous and metamorphic side; solar energy (which powers the water cycle and weather) drives the sedimentary side",
            "Solar energy drives both sides — it heats the atmosphere to drive weathering and erosion, and it heats the crust to cause melting and metamorphism at depth",
            "Earth's internal heat drives all three rock families equally, because all rock transformation ultimately depends on heat from the mantle",
          ],
          correct: 1,
          explain: "Tidal energy (A) does generate some heat in Earth's interior through tidal flexing, but it is far too small to drive the rock cycle, and the Moon does not drive the sedimentary side; the sedimentary side is driven by solar-powered weather and the water cycle. The correct answer is B: Earth's internal heat — generated by residual accretionary heat and ongoing radioactive decay of uranium, thorium, and potassium — drives mantle convection and plate tectonics, which in turn create the conditions for melting (igneous) and deep burial with elevated temperature and pressure (metamorphic); solar energy drives the atmospheric and hydrological cycles, which power the weathering, erosion, and deposition that produce sedimentary rocks. Solar energy (C) does not reach deep enough to cause crustal melting or metamorphism at depth — the Sun's heat penetrates only the outermost metres of the crust. Earth's internal heat (D) does not equally drive the sedimentary side — sedimentation would halt if solar-powered weather and the water cycle stopped, regardless of how hot Earth's interior remained.",
        },
        {
          q: "Which statement best describes the rock cycle?",
          a: [
            "A fixed three-step sequence in which igneous rocks always weather into sedimentary rocks, which are always metamorphosed, which are always melted back into magma to begin again",
            "A process that applies only to surface rocks, because metamorphic and igneous processes occur too deep underground to be part of a cycle that returns material to the surface",
            "A continuous network of transformations in which rock of any family can be converted to rock of any other family depending on the conditions it encounters, with no obligatory starting point or fixed sequence",
            "A cycle that has slowed significantly since early Earth and will eventually stop when Earth's internal heat is fully exhausted within the next few million years",
          ],
          correct: 2,
          explain: "The fixed three-step sequence (A) is a common oversimplification — while the igneous→sedimentary→metamorphic→melt pathway does occur, it is just one of many possible paths; a metamorphic rock can melt directly to form igneous rock without first returning to the surface, and an igneous rock can be buried and metamorphosed without first being weathered into sediment. The cycle applies to all rocks including those deep underground (B is wrong) — the return of material to the surface via uplift and tectonics is part of the cycle, and deep burial followed by melting and volcanism is a complete cycle pathway. The correct answer is C: the rock cycle is a network, not a single loop; all three transformation pathways (weathering to sedimentary, melting to igneous, heat/pressure to metamorphic) are available from any starting rock type, and the cycle operates continuously with material on all pathways simultaneously. Earth's internal heat is not expected to be exhausted within a few million years (D) — estimates place the continued operation of plate tectonics at billions of years into the future, and the sedimentary side (driven by solar energy) will continue as long as the Sun provides energy to drive the water cycle.",
        },
        {
          q: "A chunk of basalt erupted on the ocean floor is eventually subducted at a convergent margin, where it is buried to 40 km (25 mi) depth and subjected to high temperature and pressure. It never melts. What rock family does the resulting rock belong to, and what rock family was the starting material?",
          a: [
            'Starting material: sedimentary. Result: igneous — burial of sediment always produces igneous rock because the compressional heat is equivalent to the heat of a magma body',
            'Starting material: igneous. Result: metamorphic — the original basalt (igneous) is transformed by heat and pressure in the solid state into a new rock (metamorphic) without melting; it does not pass through the sedimentary family at any point',
            'Starting material: igneous. Result: sedimentary — deep burial compacts and cements the basalt into a sedimentary rock the same way sand grains are lithified into sandstone',
            'Starting material: metamorphic. Result: igneous — all rocks that have been buried deeply were already metamorphic before subduction, so the starting material is metamorphic and the result, if it heats enough, becomes igneous',
          ],
          correct: 1,
          explain: "Burial of sediment does not produce igneous rock (A) — igneous rocks require a melt to solidify; compressional heat at 40 km (25 mi) depth without melting produces metamorphic rock, not igneous rock. The correct answer is B: the starting material is basalt, which formed by cooling and crystallisation of lava — it is an igneous rock; when subducted and subjected to elevated temperature and pressure without melting, the basalt undergoes solid-state recrystallisation and mineral transformation, converting it into a metamorphic rock (high-pressure metamorphism of basalt produces blueschist or eclogite depending on conditions); this transformation is direct — igneous to metamorphic — without any intervening sedimentary stage; this is one of the many non-sequential pathways in the rock cycle that make the simple three-step triangle an oversimplification. Deep burial does not convert any rock into sedimentary rock (C) — lithification (compaction and cementation) produces sedimentary rock only from loose sediment; a solid basalt block cannot be 'lithified' further. The basalt described is an igneous rock, not a metamorphic one (D) — it erupted as lava and cooled, a purely igneous process; its later subduction and metamorphism is the first metamorphic episode in its history.",
        },
      ],
    },
  ],
}

export default rockCycleOverview
