import { Globe, Waves, Mountain } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const plateTectonicsTheory: Lesson = {
  id: 'geol-101-1-4-1',
  title: 'The Theory of Plate Tectonics',
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 150,
  description: "In 1912, Wegener said the continents move. Geologists laughed. Fifty years later, seafloor spreading proved him right — and gave Earth science its unifying theory.",
  sources: [
    { org: 'USGS',        title: 'This Dynamic Earth (Public Domain)',          url: 'https://pubs.usgs.gov/gip/dynamic/dynamic.html' },
    { org: 'USGS',        title: 'Plate Tectonics and People',                  url: 'https://www.usgs.gov/educational-resources' },
    { org: 'NPS',         title: 'Geology Fieldnotes — Plate Tectonics',        url: 'https://www.nps.gov/subjects/geology/plate-tectonics.htm' },
    { org: 'OpenStax',    title: 'Physical Geology, 2nd ed. (CC-BY 4.0)',       url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'UCAR Center for Science Education', title: 'Plate tectonics',       url: 'https://scied.ucar.edu/learning-zone/earth/plate-tectonics' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The map that moves',
      body: `In 1912, a German meteorologist named Alfred Wegener published one of the most consequential — and initially most ridiculed — ideas in the history of science. He proposed that the continents were not fixed in place but had once been assembled into a single supercontinent he called **Pangaea**, and had since drifted apart. His evidence was striking: South America and Africa fit together like the torn halves of a piece of paper. Identical fossils of the freshwater reptile *Mesosaurus* appeared on both sides of the Atlantic — an animal that could not have crossed an open ocean. The same coal-forming plant *Glossopteris* grew across South America, Africa, India, Australia, and Antarctica, lands now separated by thousands of kilometres of ocean. Ancient glacial deposits scarred the bedrock of tropical Africa, India, and South America. All of this made sense if the continents had once been joined.

The geological establishment was not persuaded. Not because the evidence was wrong — it was overwhelming — but because Wegener had no mechanism. No known force could move a continent through the solid rock of the ocean floor. For fifty years, continental drift was treated as a fascinating curiosity rather than a serious theory.

The resolution came from an unlikely direction: the bottom of the ocean. During and after World War II, the US Navy mapped the ocean floor in unprecedented detail to support submarine operations. What emerged was the mid-ocean ridge system — a continuous mountain chain running 65,000 kilometres through every ocean basin, the longest mountain range on Earth. Harry Hess, a Princeton geologist and Navy officer, proposed in 1960 that these ridges were sites where new ocean floor was being created: magma rising from the mantle, solidifying, and spreading outward in both directions. **Seafloor spreading** gave Wegener's continental drift a mechanism. Within a decade, the evidence was irrefutable, and the theory of **plate tectonics** — a synthesis incorporating continental drift, seafloor spreading, and the behaviour of Earth's outer shell — became the unifying framework of the earth sciences.`,
      keyTerms: [
        {
          term: 'Plate tectonics',
          def: "The theory that Earth's outer shell is divided into a mosaic of rigid lithospheric plates that move relative to one another, driven by heat from Earth's interior. Plate interactions at boundaries produce earthquakes, volcanoes, mountain ranges, and ocean trenches — and control where all three rock families form.",
        },
        {
          term: 'Lithosphere',
          def: "The rigid outer layer of Earth comprising the crust and the uppermost mantle. Broken into tectonic plates. Thickness varies: ~7 km for young oceanic lithosphere at mid-ocean ridges, up to ~200 km for old, cold continental cratons.",
        },
        {
          term: 'Asthenosphere',
          def: "The mechanically weak, partially molten layer of the upper mantle directly below the lithosphere, extending to roughly 660 km depth. It flows slowly under sustained stress (over thousands to millions of years), allowing the rigid lithospheric plates above it to move.",
        },
        {
          term: 'Continental drift',
          def: "Wegener's 1912 hypothesis that the continents had once been assembled into the supercontinent Pangaea and had since drifted apart. The hypothesis had strong geological and palaeontological support but lacked a mechanism until seafloor spreading was discovered in the 1960s.",
        },
        {
          term: 'Seafloor spreading',
          def: "The process by which new oceanic crust is continuously created at mid-ocean ridges as magma rises from the mantle, solidifies into basalt and gabbro, and is pushed laterally away from the ridge axis. The discovery of seafloor spreading provided the mechanism that continental drift had lacked.",
        },
      ],
      interaction: {
        type: 'scientific-diagram' as const,
        id: 'plate-boundaries',
        caption: 'Three types of plate boundaries: divergent (new crust forms at mid-ocean ridges), convergent (oceanic crust subducts under continental), and transform (plates slide past each other horizontally).',
        credit: 'USGS / Tarbuck & Lutgens',
      },
    },
    {
      type: 'concept',
      title: 'Evidence and mechanism',
      body: `**Wegener's four lines of evidence.** Wegener assembled his continental drift case from four independent data types, each pointing to the same conclusion. First, the **geometric fit** of the continents — not just Africa and South America, but the fit of all the Pangaean fragments — is too precise to be coincidental; when geologists match the true edges of the continents (the continental shelves) rather than the current shorelines, the fit is even better. Second, **matching geology**: rock formations, mountain belts, and mineral deposits that end abruptly at one coastline begin again on the opposite coastline when the continents are reconstructed. The Appalachian Mountains of eastern North America connect directly to the Caledonian Mountains of Scotland and Norway; the Cape Fold Belt of South Africa continues into the Sierras of Buenos Aires province in Argentina. Third, **fossil distributions**: identical fossil assemblages appear on continents now separated by thousands of kilometres of deep ocean — assemblages including species that could not have dispersed across open ocean by any known means. *Mesosaurus* was a small freshwater reptile; *Glossopteris* was a seed fern; neither could cross an ocean. The only explanation is that they lived on a single, connected landmass. Fourth, **paleoclimate anomalies**: coal seams in Antarctica record ancient tropical forests; glacial striations and tillites (lithified glacial debris) in tropical Africa, India, and South America record ice sheets on land that is now near the equator. Under Pangaea reconstruction, all the glacial evidence clusters around the South Pole — exactly where a continental ice sheet should be.

**Why it was rejected — and what changed.** Wegener's fatal weakness was mechanism. In the 1910s through 1950s, the ocean floor was largely unmapped and thought to be ancient, stable, and featureless. No force was known that could drive a continent through solid oceanic rock. Critics pointed out that Wegener's proposed mechanism — centrifugal force from Earth's rotation — was orders of magnitude too weak. Without a mechanism, drift remained speculation. What changed was ocean-floor mapping. The global network of seismograph stations installed after World War II to detect nuclear tests also detected earthquakes, and those earthquakes clustered in narrow zones that traced the mid-ocean ridges and ocean trenches. Sonar surveys revealed the mid-ocean ridge system in detail. Harry Hess's 1960 paper "History of Ocean Basins" proposed seafloor spreading as the mechanism: hot mantle material rises under ridges, melts partially, erupts as basalt, and the solidified rock spreads away from the ridge, carrying the continents with it like conveyor belts. Continents do not plough through ocean floor — they ride on top of it.

**The paleomagnetic clincher.** The definitive confirmation of seafloor spreading came from paleomagnetism. When basaltic lava solidifies, iron-bearing minerals (magnetite) align with Earth's magnetic field at the time of cooling, recording its direction permanently. Earth's magnetic field reverses polarity at irregular intervals — what was magnetic north becomes magnetic south. If seafloor spreading is real, the ocean floor on either side of a mid-ocean ridge should display a symmetric pattern of alternating normal and reversed magnetic polarity strips, recording the successive reversals as new crust formed. In 1963, Vine and Matthews showed that precisely this pattern exists — perfectly symmetric magnetic anomaly stripes on both sides of every mid-ocean ridge on Earth. The stripes match the known timescale of magnetic reversals. This was the proof. The ocean floor is a continuous magnetic tape recording the history of both seafloor spreading and the reversals of Earth's magnetic field.

**Age of the ocean floor.** A further confirmation: the age of ocean floor rocks increases symmetrically away from ridge crests. The youngest rocks — essentially still being formed — occur at ridge axes. The oldest ocean floor anywhere on Earth is approximately 200 million years old, found in the far western Pacific near subduction zones. Compare this to continental rocks, which can be up to 4 billion years old. The ocean floor is geologically young because it is continuously created at ridges and destroyed at subduction zones. This constant recycling is why the ocean floor preserves no record of ancient Earth history — that record is in the continents.

**The plate tectonic synthesis.** By the early 1970s, the scientific community had assembled seafloor spreading, paleomagnetism, seismicity, and Wegener's original evidence into a unified theory: plate tectonics. Earth's lithosphere is divided into approximately 15 major plates (and several smaller ones). Some plates carry only oceanic crust (the Pacific Plate is almost entirely oceanic). Others carry both (the North American Plate carries the North American continent plus the western half of the Atlantic Ocean floor). Plates move at rates of 1–15 cm per year — roughly the rate at which fingernails grow. Over millions of years, this motion opens and closes ocean basins, builds mountain ranges, and drives the volcanic and seismic activity that concentrates at plate boundaries.

**Lithosphere, asthenosphere, and what drives the plates.** The distinction between the lithosphere and asthenosphere is not compositional but mechanical. Both are made of mantle rock (peridotite). What differs is temperature and therefore strength. The lithosphere is cold enough to behave rigidly on geological timescales — it fractures rather than flows. The asthenosphere is hot enough (near but below the melting point) to flow plastically under sustained stress, like extremely stiff putty over millions of years. The plates move across the top of the flowing asthenosphere. The driving forces are primarily **ridge push** (the elevated mid-ocean ridge creates a gravitational slope down which the plate slides) and **slab pull** (old, cold, dense oceanic lithosphere at subduction zones sinks into the mantle under its own weight, pulling the rest of the plate behind it). Mantle convection — the slow circulation of hot mantle material (introduced in Lesson 1.1.3) — contributes to the overall motion but is now understood to be more a consequence of plate motion than its primary cause.

**The rock cycle, unified.** Plate tectonics explains where all three rock families form and why they are distributed as they are. Basalt (extrusive mafic igneous rock) floors every ocean basin because it is continuously generated at mid-ocean ridges by partial melting of the mantle. Granite (felsic intrusive igneous rock) dominates continental crust because silica-rich magmas generated at subduction zones intrude into and build up the continents. Sedimentary rocks accumulate in passive margin basins, continental shelves, and the abyssal ocean floor. Metamorphic rocks form at convergent margins — in the deep roots of mountain belts generated by collision, and in the high-pressure, relatively low-temperature conditions of subducting slabs. Lessons 1.4.2 through 1.4.4 will develop each of these settings in detail.`,
      cards: [
        {
          name: 'Continental Drift Evidence',
          icon: Globe,
          color: BRAND.jade,
          desc: "Wegener's four lines: (1) Geometric fit — Africa and South America (and all Pangaea fragments) fit together at the continental shelf edges. (2) Matching geology — Appalachian Mountains connect to Caledonides of Scotland/Norway; Cape Fold Belt connects to Argentina. (3) Fossils — Mesosaurus (freshwater reptile) and Glossopteris (seed fern) on now-separated continents. (4) Paleoclimate — coal (ancient tropics) in Antarctica; glacial deposits in tropical Africa and India. All consistent with Pangaea, assembled ~335 Ma, breaking up ~175 Ma.",
          examples: 'Mesosaurus: freshwater, both Atlantic coasts · Glossopteris: all Gondwana continents · Appalachians → Caledonides: same mountain belt',
        },
        {
          name: 'Seafloor Spreading',
          icon: Waves,
          color: BRAND.accent,
          desc: "Hess (1960): magma rises at mid-ocean ridges, solidifies as basalt, spreads symmetrically outward. Confirmed by paleomagnetism: iron minerals in solidifying basalt record Earth's magnetic field direction; field reversals preserved as symmetric magnetic anomaly stripes on both sides of every ridge (Vine & Matthews, 1963). Ocean floor age confirms spreading: youngest rocks at ridge crests, oldest (~200 Ma) near continents. Ocean floor is recycled at subduction zones — hence no ocean floor older than ~200 Ma anywhere on Earth.",
          examples: 'Mid-Atlantic Ridge: spreading 2.5 cm/yr · East Pacific Rise: spreading 15 cm/yr · Magnetic stripes: mirror image either side of ridge',
        },
        {
          name: 'Plate Structure',
          icon: Mountain,
          color: BRAND.coral,
          desc: "~15 major lithospheric plates move at 1–15 cm/yr. Lithosphere (~100 km thick) is rigid; asthenosphere below flows slowly. Two crust types: oceanic (mafic basalt/gabbro, dense ~3.0 g/cm³, thin ~7 km, max ~200 Ma old) vs continental (felsic granite, less dense ~2.7 g/cm³, thick 30–70 km, up to 4 Ga old). Density contrast controls convergent boundary behaviour: denser oceanic crust subducts beneath less dense continental crust. Driving forces: slab pull (sinking dense slab) and ridge push (gravitational slide off elevated ridge).",
          examples: 'Pacific Plate: mostly oceanic · North American Plate: continent + ocean floor · Oldest crust: NW Pacific ~200 Ma · Oldest continent: >4 Ga',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "Alfred Wegener proposed continental drift in 1912 with substantial geological and palaeontological evidence. Why was the hypothesis rejected for decades, and what eventually resolved the debate?",
          a: [
            "Wegener's evidence was later shown to be flawed — the fossil and geological matches across ocean basins were coincidental, and a completely new evidence base was required to establish plate tectonics",
            "The hypothesis was rejected on political grounds during two world wars; it was only accepted when international scientific institutions resumed normal operations in the 1950s",
            "Wegener had compelling evidence but no mechanism to explain how continents moved; seafloor spreading, proposed by Hess in 1960 and confirmed by paleomagnetic evidence, provided the missing mechanism and vindicated the hypothesis",
            "Wegener's hypothesis applied only to the Southern Hemisphere continents; it was extended globally only after new geological surveys of the Northern Hemisphere were completed in the 1950s",
          ],
          correct: 2,
          explain: "Wegener's evidence was not flawed (A) — the fossil matches, geological correlations, geometric fit, and paleoclimate anomalies are all real and are now explained by plate tectonics; no new evidence base was required, only a mechanism. Political factors (B) were not the primary obstacle — the scientific objection was purely mechanistic; the continental drift debate was active and scientific throughout the interwar period. The correct answer is C: Wegener's four lines of evidence (geometric fit, matching geology, fossil distributions, paleoclimate anomalies) were compelling but could not overcome the objection that no known force was strong enough to drive continents through solid oceanic rock; Harry Hess's 1960 seafloor spreading hypothesis provided the mechanism — continents ride passively on spreading oceanic plates rather than ploughing through them; paleomagnetic evidence (symmetric magnetic anomaly stripes on both sides of mid-ocean ridges, confirmed by Vine and Matthews in 1963) then provided unambiguous proof of spreading. The hypothesis was not limited to the Southern Hemisphere (D) — Wegener's evidence included correlations across the North Atlantic (Appalachians to Caledonides) from the beginning.",
        },
        {
          q: "Paleomagnetic surveys of the ocean floor reveal perfectly symmetric stripes of alternating normal and reversed magnetic polarity on both sides of every mid-ocean ridge, with the youngest rocks at the ridge crest and progressively older rocks away from it. What process do these patterns demonstrate?",
          a: [
            "The magnetic stripes record lateral variations in mantle composition that produce different magnetic signatures across a stationary ocean floor — the symmetry is a coincidence of mantle structure",
            "New oceanic crust forms continuously at mid-ocean ridges as magma solidifies and the iron minerals within it record Earth's magnetic field at that moment; as the crust spreads away from the ridge and Earth's field periodically reverses, successive stripes of opposite polarity are recorded symmetrically on both sides — confirming seafloor spreading",
            "Mid-ocean ridges are sites of subduction where oceanic crust descends into the mantle; the magnetic stripes record the heating and cooling of rock as it is drawn downward, producing alternating zones",
            "The stripes are produced by hydrothermal circulation of seawater through the ocean floor, which alternately oxidises and reduces iron minerals, creating bands of different magnetic signatures unrelated to plate motion",
          ],
          correct: 1,
          explain: "Lateral compositional variations in the mantle (A) do not produce the precise, symmetric, age-progressive striping observed — the symmetry about the ridge axis and the exact match to the independently established timeline of magnetic reversals cannot be explained by static compositional variation. The correct answer is B: as magma erupts at mid-ocean ridges and solidifies into basalt, magnetite and other iron-bearing minerals align with Earth's magnetic field at the time of cooling, permanently recording its direction; Earth's magnetic field reverses polarity at irregular intervals (roughly every 200,000–500,000 years on average); as the ocean floor spreads away from the ridge and successive reversals occur, new strips of crust record each new polarity, producing mirror-image stripes of alternating normal and reversed polarity on both sides of the ridge; the age progression (youngest at the ridge, oldest near continents) confirms continuous creation and spreading. Mid-ocean ridges are sites of creation, not subduction (C) — subduction occurs at ocean trenches, typically at the opposite end of the plate. Hydrothermal circulation (D) does affect seafloor chemistry but does not produce the large-scale, symmetric, age-progressive magnetic stripe pattern observed globally.",
        },
        {
          q: "At convergent plate boundaries where oceanic and continental crust meet, the oceanic plate always subducts beneath the continental plate. What property of oceanic crust explains this, and why does it matter for Earth's surface geology?",
          a: [
            "Oceanic crust is thinner than continental crust (~7 km vs 30–70 km), so it is mechanically weaker and bends downward under the compressive force of the converging plates",
            "Oceanic crust is always older than the continental crust it meets, and older rock is denser due to thermal contraction; age, not composition, determines which plate subducts",
            "Oceanic crust is composed of mafic rock (basalt and gabbro) and is denser (~3.0 g/cm³) than felsic continental crust (~2.7 g/cm³); the denser oceanic plate sinks into the mantle at convergent boundaries, producing ocean trenches, volcanic arcs, and the recycling of oceanic crust back into the mantle",
            "Ocean water adds weight to the oceanic plate — the hydrostatic pressure of the overlying ocean forces the crust to subduct at continental margins, while continental crust, being above sea level, experiences no such downward force",
          ],
          correct: 2,
          explain: "Thickness and mechanical weakness (A) are not the primary control on subduction — the Pacific Plate, which subducts under South America, is not mechanically weaker than the South American Plate; density, not thickness, determines buoyancy. Age does affect density through thermal contraction (B) — older, colder oceanic crust is denser than young oceanic crust — but the fundamental reason oceanic crust subducts beneath continental crust is compositional density difference, not age; where two continental plates converge (e.g. India and Asia), neither subducts easily because both are composed of low-density felsic rock, and the result is collision and mountain building rather than subduction. The correct answer is C: oceanic crust consists of basalt and gabbro (mafic rocks, density ~3.0 g/cm³) while continental crust consists largely of granite and other felsic rocks (density ~2.7 g/cm³); when these meet at a convergent boundary, the denser oceanic plate sinks into the mantle under gravity, generating ocean trenches (the deepest places on Earth), volcanic arcs from melting of the subducting slab, and earthquakes along the subduction zone; the subducted oceanic crust is eventually recycled into the mantle — which is why no ocean floor older than ~200 Ma exists anywhere. Ocean water does not provide significant downward force on the crust (D) — the hydrostatic pressure of seawater acts equally in all directions and does not preferentially drive subduction.",
        },
      ],
    },
  ],
}

export default plateTectonicsTheory
