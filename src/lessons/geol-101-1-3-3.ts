import { Layers, Waves, Leaf } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const sedimentaryRocks: Lesson = {
  id: 'geol-101-1-3-3',
  title: 'Sedimentary Rocks',
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 150,
  description: "The Grand Canyon's layered walls are 1.8 billion years of Earth history written in sediment. Each layer is a snapshot — an ancient sea, desert, or river frozen in stone.",
  sources: [
    { org: 'USGS',        title: 'Sedimentary Rocks (Public Domain)',                                url: 'https://www.usgs.gov/educational-resources' },
    { org: 'NPS',         title: 'Geology Fieldnotes — Sedimentary Rocks',                          url: 'https://www.nps.gov/subjects/geology/sedimentary.htm' },
    { org: 'Smithsonian', title: 'National Museum of Natural History — Geology, Gems and Minerals', url: 'https://naturalhistory.si.edu/research/geology-gems-and-minerals' },
    { org: 'OpenStax',    title: 'Physical Geology, 2nd ed. (CC-BY 4.0)',                           url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'UCAR Center for Science Education', title: 'Earth materials',                           url: 'https://scied.ucar.edu/learning-zone/earth' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Built at the surface',
      body: `Stand at the South Rim of the Grand Canyon and look at the walls. Each horizontal band of colour is a different rock layer — a different chapter in Earth's surface history. The buff-coloured Coconino Sandstone near the top records ancient desert dunes from 275 million years ago. The red Hermit Shale below it preserves a coastal mudflat. The massive Redwall Limestone halfway down is a warm shallow sea from 340 million years ago. Every one of these layers is a **sedimentary rock**: material that accumulated at Earth's surface and was lithified into stone. The walls of the Grand Canyon are not just rock — they are 1.8 billion years of Earth history you can read one layer at a time.

Sedimentary rocks differ fundamentally from igneous and metamorphic rocks in one crucial way: they form at Earth's surface, under ordinary temperatures and pressures, through processes you can watch happening today — rivers carrying sand, lakes accumulating mud, shallow seas building reefs. Because they form under liveable conditions, they are also the only rocks that regularly preserve **fossils**: the remains and traces of organisms that lived at the surface when the sediment was deposited. This makes sedimentary rocks the primary archive of Earth's biological and environmental history.

This lesson introduces the three sedimentary rock types — clastic, chemical, and organic — and the four-step process that produces them all: weathering, erosion, deposition, and lithification. Lesson 1.3.4 will complete Module 1.3 with metamorphic rocks, which often form when sedimentary rocks are buried deeply enough to encounter elevated heat and pressure.`,
      keyTerms: [
        {
          term: 'Sediment',
          def: "Loose particles of mineral or rock material — or organic material — that have been transported by water, wind, ice, or gravity and deposited at Earth's surface. Sediment becomes sedimentary rock through lithification.",
        },
        {
          term: 'Lithification',
          def: "The conversion of loose sediment into solid rock through two main processes: compaction (the weight of overlying sediment squeezes grains together, reducing pore space) and cementation (minerals precipitated from groundwater — commonly calcite, silica, or iron oxides — coat and bind grains).",
        },
        {
          term: 'Clastic sedimentary rock',
          def: "Rock formed from fragments (clasts) of pre-existing minerals and rocks that were weathered, transported, and deposited. Classified primarily by grain size: coarse grains (conglomerate), medium (sandstone), fine (siltstone), very fine (shale).",
        },
        {
          term: 'Chemical sedimentary rock',
          def: "Rock formed by the precipitation of minerals directly from solution in water — by evaporation, changes in water chemistry, or biological organisms extracting dissolved ions to build shells. Examples: limestone, rock salt (halite), gypsum, chert.",
        },
        {
          term: 'Organic sedimentary rock',
          def: "Rock formed primarily from accumulated organic material — the compressed remains of plants or organisms. Coal forms from compressed terrestrial plant material; some limestones consist almost entirely of accumulated shell and skeletal material from marine organisms.",
        },
      ],
    },
    {
      type: 'concept',
      title: 'Three types, one archive',
      body: `**The four-step sequence.** All sedimentary rocks share the same origin story, regardless of type. It begins with **weathering** — the physical and chemical breakdown of pre-existing rock at Earth's surface. Frost shattering breaks granite into fragments; carbonic acid in rainwater dissolves calcium carbonate from limestone, releasing calcium and bicarbonate ions into solution. The products of weathering are then moved by **erosion** — transport by water (rivers, waves, ocean currents), wind, or glacial ice. Eventually the transported material loses energy and settles out: **deposition**. River currents slow where a river enters a lake or the sea; wind loses speed in a valley; glaciers melt. Finally, accumulating sediment buries earlier deposits, and **lithification** converts loose material into rock through compaction and cementation. This four-step sequence is running continuously across Earth's surface right now.

**Clastic rocks — fragments in motion.** Clastic sedimentary rocks are built from pieces of pre-existing rock or mineral grains. The most important variable is **grain size**, because grain size directly records the energy of the depositional environment: it takes fast-moving, high-energy water to carry large grains, and only calm, low-energy water allows fine particles to settle. From coarsest to finest: **conglomerate** contains rounded pebbles, cobbles, or boulders cemented in a finer matrix — recording high-energy deposition in fast rivers or wave-battered beaches. **Sandstone** is composed of sand-sized grains (typically quartz, the most durable common mineral) — recording moderate-energy environments like river channels, beaches, and deserts. **Siltstone** has grains finer than sand but still gritty to the touch. **Shale** is composed of clay-sized particles — the finest fraction, deposited only in very calm water: deep-sea floors, lakes, river floodplains, tidal mudflats. Shale is by far the most abundant sedimentary rock, making up roughly half of the sedimentary rock record.

**Chemical rocks — precipitated from solution.** Chemical sedimentary rocks form when minerals come out of solution rather than being transported as solid fragments. **Limestone** is the most common chemical sedimentary rock. It forms in two ways: by direct precipitation of calcium carbonate from warm, supersaturated seawater (abiotic limestone), and — more commonly — by the accumulation of carbonate shells and skeletons of marine organisms (biogenic limestone). Coral reefs, shell beds, and accumulations of microscopic plankton skeletons all become limestone after burial and lithification. Limestone is therefore both a chemical and, in many cases, an organic rock — the boundary between types is not sharp. **Evaporites** form when water bodies evaporate, leaving dissolved minerals behind. **Rock salt** (halite) and **gypsum** are the most common evaporites — they form in enclosed basins with high evaporation rates, such as the ancient inland seas that produced the vast salt flats of Utah and the gypsum deposits of New Mexico. **Chert** is a microcrystalline silica rock, extremely hard, forming from the accumulation of siliceous microfossils (radiolarians, diatoms) or from silica precipitation in deep-sea environments.

**Organic rocks — life compressed.** **Coal** is the type example of an organic sedimentary rock. It forms from the accumulation and progressive burial of terrestrial plant material in swampy environments — ancient coal forests that dominated the landscape during the Carboniferous Period (359–299 million years ago). As plant material is buried deeper, water and volatile gases are driven out, and the carbon content progressively increases: peat → lignite (brown coal) → bituminous coal → anthracite. Each step represents greater burial depth and temperature. Coal seams are therefore not just fuel — they are records of ancient tropical forests and the climatic and tectonic conditions that preserved them.

**Sedimentary structures — reading the environment.** Beyond rock type and grain size, sedimentary rocks preserve **structures** that record the physical environment of deposition. **Horizontal bedding** — the parallel layers so visible in the Grand Canyon walls — records continuous, uniform deposition in calm water or wind. **Cross-bedding** (inclined layers at an angle to the main bedding) records migrating dunes or subaqueous sand waves driven by currents — the Coconino Sandstone's sweeping cross-beds record ancient desert dunes. **Ripple marks** preserved on bedding surfaces record the oscillating motion of shallow water or wind. **Graded bedding** — coarse grains at the bottom of a layer grading upward to finer material — records a single depositional pulse that waned in energy, such as a turbidity current on a submarine slope. Each structure is an environmental indicator, allowing geologists to reconstruct ancient settings from rock alone.

**Fossils and the rock record.** Fossils are found almost exclusively in sedimentary rocks for a straightforward reason: igneous rocks form from melt (which destroys any organic material) and metamorphic rocks form under heat and pressure (which also destroys organic material). Sedimentary rocks form at low temperatures at Earth's surface, and when an organism is buried rapidly by sediment, its hard parts — shells, bones, teeth, wood — can be preserved by permineralisation (replacement of organic material by minerals from groundwater) or as moulds and casts. The sequence of fossils in sedimentary layers — the **stratigraphic record** — is the primary evidence for biological evolution over geologic time. The principle of superposition states that in undisturbed sedimentary sequences, older layers lie below younger ones, making the rock column a time series readable from bottom to top.`,
      cards: [
        {
          name: 'Clastic Rocks',
          icon: Layers,
          color: BRAND.gold,
          desc: "Built from fragments of pre-existing rock and minerals. Grain size records depositional energy: conglomerate (pebbles, high energy), sandstone (sand grains, moderate energy — rivers, beaches, deserts), siltstone (gritty, low energy), shale (clay particles, very low energy — deep water, lake floors). Shale is Earth's most abundant sedimentary rock. The quartz grains in sandstone are the most durable survivors of long transport — quartz resists weathering better than almost any other common mineral.",
          examples: 'Conglomerate: rounded pebbles · Sandstone: quartz grains · Shale: clay particles, most common sedimentary rock · Siltstone: between sand and clay',
        },
        {
          name: 'Chemical Rocks',
          icon: Waves,
          color: BRAND.accent,
          desc: "Precipitated from solution rather than deposited as fragments. Limestone: carbonate from marine shells and chemical precipitation — the most common chemical rock; covers vast areas of continents that were once shallow seas. Evaporites: rock salt (halite) and gypsum form when enclosed water bodies evaporate — record ancient arid climates and enclosed basins. Chert: microcrystalline silica, extremely hard, forms from siliceous microfossils or deep-sea silica precipitation.",
          examples: 'Limestone: shells + chemical carbonate · Rock salt: evaporite · Gypsum: evaporite · Chert: silica, very hard',
        },
        {
          name: 'Organic Rocks & Structures',
          icon: Leaf,
          color: BRAND.jade,
          desc: "Coal: compressed terrestrial plant material from ancient swamp forests; carbon content increases with burial depth (peat → lignite → bituminous → anthracite). Fossils: preserved only in sedimentary rock — igneous melt and metamorphic heat destroy organic material. Sedimentary structures record ancient environments: horizontal bedding (calm water), cross-bedding (dunes or currents), ripple marks (shallow moving water), graded bedding (turbidity currents).",
          examples: 'Coal: ancient forests compressed · Fossils: shells, bones, wood · Cross-beds: ancient dunes · Ripple marks: shallow water',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "Sand grains are deposited on a beach, buried under subsequent layers, and over millions of years are converted into a solid rock. What is the process that converts loose sediment into rock, and what two mechanisms drive it?",
          a: [
            "Metamorphism — elevated temperature and pressure recrystallise the sand grains into interlocking crystals, producing quartzite",
            "Crystallisation — minerals in the groundwater grow between the sand grains, fusing them together in the same way magma crystallises into igneous rock",
            "Lithification — compaction from the weight of overlying sediment reduces pore space between grains, and cementation occurs when minerals precipitated from groundwater (commonly calcite or silica) coat and bind the grains, producing sandstone",
            "Lithification requires complete burial to mantle depths — shallow burial produces only poorly consolidated sediment, not true rock",
          ],
          correct: 2,
          explain: "Metamorphism (A) does convert sandstone into quartzite, but that is a separate, higher-temperature/pressure process — ordinary burial and lithification of beach sand produces sandstone, not quartzite. Crystallisation from solution (B) describes the cementation step only, not the full process — and the mechanism is fundamentally different from magma crystallisation; igneous crystallisation occurs from a melt, while cementation occurs at low temperatures from groundwater. The correct answer is C: lithification is the two-step conversion of loose sediment into rock; compaction occurs as the weight of overlying sediment squeezes grains together, driving out water and reducing pore space; cementation occurs when dissolved minerals in groundwater — typically calcite, silica, or iron oxides — precipitate between grains, bonding them into solid rock; beach sand becomes sandstone through this process. Lithification does not require mantle depths (D) — it occurs at relatively shallow burial depths of hundreds to a few thousand metres under ordinary crustal conditions.",
        },
        {
          q: "A geologist finds two sedimentary layers deposited in the same ancient river system. Layer A is conglomerate with rounded pebbles. Layer B directly above it is shale with clay-sized particles. What does the upward change in grain size indicate about the depositional history?",
          a: [
            "Layer A is younger than Layer B — coarser grains always settle faster and are therefore deposited later in a depositional sequence",
            "The change records a decrease in depositional energy over time: Layer A was deposited by fast-moving, high-energy water capable of carrying large clasts; Layer B records quieter, low-energy conditions (such as a floodplain or standing water) where only fine clay particles could settle",
            "Grain size reflects the composition of the source rock, not depositional energy — the coarser layer came from a granite source and the finer layer from a shale source",
            "The coarse-to-fine upward sequence always indicates a marine transgression — rising sea level pushing the shoreline inland",
          ],
          correct: 1,
          explain: "In undisturbed sedimentary sequences, Layer B above Layer A is younger (principle of superposition) — (A) has the depositional logic backwards; there is no rule that coarser grains are deposited later. The correct answer is B: grain size in clastic sedimentary rocks is a direct record of the energy of the transport medium; water moving fast enough to carry pebble-sized clasts (conglomerate) has much higher energy than slow or still water where only clay particles settle (shale); the upward coarsening-to-fining sequence in this example records a decrease in energy over time — possibly a river channel (high energy, conglomerate) that migrated away and was replaced by a quiet floodplain or lake (low energy, shale). Grain size does reflect source-rock composition to some degree (C), but the size of clasts is primarily controlled by transport energy, not source composition — clay particles and pebbles can both come from the same granite source given different transport distances and energies. A coarse-to-fine upward sequence (D) can occur in many settings, not exclusively marine transgressions; the interpretation requires additional sedimentary structure and fossil evidence.",
        },
        {
          q: "A paleontologist finds a well-preserved trilobite fossil in a limestone layer. A geologist working nearby finds rocks of the same age that are granite and schist — but neither contains fossils. Why are fossils found in the sedimentary rock but not in the igneous or metamorphic rocks?",
          a: [
            "Fossils can form in all rock types, but geologists only search for them in sedimentary rocks by convention, overlooking fossils in igneous and metamorphic rocks",
            "Igneous and metamorphic rocks are always much older than sedimentary rocks, so they predate the evolution of complex life and naturally contain no fossils",
            "Sedimentary rocks form at low temperatures at Earth's surface, allowing organic remains to be buried intact and preserved; granite forms from melt that would instantly incinerate any organism, and the heat and pressure of schist metamorphism destroys organic structures",
            "Fossils only occur in limestone specifically because calcium carbonate is chemically compatible with shell preservation — other sedimentary rocks like sandstone and shale do not contain fossils",
          ],
          correct: 2,
          explain: "Fossils are not restricted to sedimentary rocks by geologist convention (A) — they genuinely cannot survive the physical conditions under which igneous and metamorphic rocks form. Igneous and metamorphic rocks are not always older than sedimentary rocks (B) — volcanic eruptions and metamorphic events have occurred throughout Earth's history, including recently; age is irrelevant to whether a rock can preserve fossils. The correct answer is C: sedimentary rocks form at Earth's surface at low temperatures and pressures, the same conditions in which organisms live; when an organism is buried by sediment rapidly, its hard parts (shells, bones, wood) can be preserved by gradual mineral replacement or as moulds and casts; in contrast, granite forms from magma at temperatures exceeding 700°C (1292°F), which would instantly destroy any organic material, and schist forms under temperatures and pressures (typically 400–650°C (752–1202°F), several kilobars) that decompose organic molecules completely. Fossils occur in many sedimentary rock types beyond limestone (D) — shale preserves soft-tissue impressions and plant material; sandstone preserves bones, tracks, and shells; limestone is simply one of the most fossiliferous because it often forms in shallow marine environments where organisms are abundant.",
        },
        {
          q: "Cross-bedded sandstone layers in a cliff face show sets of inclined laminae at angles of 20–30° to the main horizontal bedding, all dipping in the same direction. What sedimentary structure is this, what does it indicate about the depositional environment, and why is the dip direction geologically significant?",
          a: [
            "Graded bedding — the inclined layers record a single turbidity current that deposited coarse grains first and fine grains last; the dip direction points toward the deep-water basin where the current came to rest",
            "Cross-bedding — the inclined laminae were deposited on the lee (downflow) faces of migrating dunes or subaqueous sand waves; the direction of dip indicates the direction the current or wind was flowing at the time of deposition",
            "Ripple marks — the 20–30° angles record the back-and-forth oscillation of shallow water; the dip direction alternates between two opposing directions, recording the oscillatory motion",
            "Horizontal bedding — all sedimentary layers are horizontal at the time of deposition, so the apparent inclination must be a product of later tectonic tilting unrelated to the depositional environment",
          ],
          correct: 1,
          explain: "Graded bedding (A) is a horizontal structure in which grain size decreases upward within a single layer — it does not produce inclined laminae at 20–30° to the main bedding; graded bedding dip direction does not indicate flow direction in the same direct way as cross-bedding. The correct answer is B: cross-bedding forms when sediment is transported by a unidirectional current (wind or water) and deposited on the downstream (lee) face of a migrating dune or ripple; each set of inclined foresets records the downstream face of an ancient dune or sand wave advancing in the direction of dip; because all the foresets dip in the same direction, they record a consistent, unidirectional paleocurrent; this information is used by geologists to reconstruct ancient current or wind directions — for example, the Coconino Sandstone in the Grand Canyon has cross-beds dipping consistently to the south, recording ancient desert trade winds. Ripple marks (C) are a surface texture, not a set of inclined internal laminae; oscillation ripples do form symmetric bidirectional structures but these appear as surface undulations, not as thick sets of 20–30° foresets; the question describes internal cross-stratification, not surface ripples. While tectonic tilting (D) does rotate original horizontal layers, field geologists distinguish primary sedimentary cross-bedding from tectonic tilting by observing that the foreset laminae are inclined relative to the bounding surfaces of the cross-bed set, not inclined uniformly as a single tilted slab would be.",
        },
      ],
    },
  ],
}

export default sedimentaryRocks
