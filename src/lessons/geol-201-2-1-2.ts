import { Layers, Mountain, Globe } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const relativeDating: Lesson = {
  id: 'geol-201-2-1-2',
  title: 'Relative Dating Principles',
  track: 'geo',
  trackName: 'Geology',
  level: 'Intermediate',
  duration: '20 min',
  xpReward: 250,
  description: "William Smith mapped all of England using nothing but rock exposures and fossils. The six principles he and his predecessors formalised — still used in every stratigraphic analysis today — allow geologists to reconstruct the sequence of geological events from any cross-section.",
  sources: [
    { org: 'USGS',     title: 'Stratigraphy and Relative Dating (Public Domain)',  url: 'https://www.usgs.gov/programs/national-cooperative-geologic-mapping-program/science/stratigraphy' },
    { org: 'NPS',      title: 'Grand Canyon Geology — Stratigraphy',               url: 'https://www.nps.gov/grca/learn/nature/geologicformations.htm' },
    { org: 'OpenStax', title: 'Physical Geology, 2nd ed., Ch. 7 (CC-BY 4.0)',     url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'GSA',      title: 'Geologic Time Scale 2020',                          url: 'https://www.geosociety.org/GSA/Education_Careers/Geologic_Time_Scale/GSA/timescale/home.aspx' },
    { org: 'ICS',      title: 'North American Stratigraphic Code (2021)',           url: 'https://www.americangeosciences.org/sites/default/files/db/files/NorthAmericanStratigraphicCode2021.pdf' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Reading strata like pages in a book',
      body: `William Smith was not a university professor. He was a self-educated canal surveyor who spent the 1790s and early 1800s travelling England by horse, examining every rock face, quarry wall, and railway cutting he encountered. In 1815, after nearly two decades of observation, he published A Delineation of the Strata of England and Wales — the first geological map of an entire country, covering 100,000 square kilometres at a scale that required a sheet of paper nearly 2.5 metres tall. The map was hand-coloured, astonishingly accurate, and produced without a single radiometric date, without any laboratory equipment, and without any institutional support. Smith funded it himself and spent time in debtors' prison when the costs exceeded his resources.

His method rested on a single fundamental observation: different rock formations contain different assemblages of fossils, and the same assemblage never repeats at two different positions in the stratigraphic sequence. A formation could be recognised and traced across the country purely by its fossils, regardless of its rock type. This principle — faunal succession — when combined with the geometric principles that Steno had formalised 150 years earlier, gave Smith a complete toolkit for reading stratigraphy.

Those principles remain the foundation of every stratigraphic analysis performed today. They apply equally to a hand specimen, a cliff face, a deep borehole, and a seismic section. Before any radiometric date is run, before any chemical analysis is performed, relative dating principles establish the sequence of events — older, younger, simultaneous — that gives any geological body its temporal context.`,
      keyTerms: [
        {
          term: 'Superposition',
          def: "In an undisturbed sequence of sedimentary rocks, the oldest layers are at the bottom and progressively younger layers lie above. A given layer is younger than everything beneath it and older than everything above it. The most widely applied principle in stratigraphy, formulated by Nicolas Steno in 1669.",
        },
        {
          term: 'Cross-cutting relationships',
          def: "Any geological feature that cuts across a pre-existing feature is younger than it. Intrusions (dikes, sills, batholiths) are younger than the rocks they intrude; faults are younger than the rocks they displace; erosion surfaces are younger than the rocks they cut. Formulated by James Hutton.",
        },
        {
          term: 'Faunal succession',
          def: "Fossil assemblages succeed one another in the rock record in a predictable, non-repeating order. A given species appears, persists for a geological interval, and goes extinct; this sequence is preserved in rocks worldwide and allows rock units of the same age to be identified even when they differ in composition. Observed by William Smith; independently by Georges Cuvier.",
        },
        {
          term: 'Unconformity',
          def: "A surface in the rock record representing a gap — a period during which deposition ceased, erosion removed material, or both. Three types: angular unconformity (lower layers tilted relative to upper), disconformity (erosion surface between parallel layers), nonconformity (sedimentary rocks on crystalline basement). Unconformities can represent millions to hundreds of millions of years of missing time.",
        },
        {
          term: 'Correlation',
          def: "The process of demonstrating that rock units in separate locations are equivalent in age. Lithostratigraphic correlation matches rock type; biostratigraphic correlation matches fossil content (faunal succession); chemostratigraphic correlation matches chemical signatures (isotope ratios, trace elements). Correlation allows local sequences to be assembled into a global relative timescale.",
        },
      ],
      interaction: {
        type: 'scientific-diagram' as const,
        id: 'radiometric-decay',
        caption: 'Exponential radioactive decay curves (all normalised to half-lives). Common geochronology systems — U-238, K-40, Rb-87, C-14 — span timescales from 50 ka (C-14) to billions of years (Rb-87).',
        credit: 'Faure & Mensing (2005) · USGS Geologic Time',
      },
    },
    {
      type: 'concept',
      title: 'The six principles of relative dating',
      body: `**Steno's three geometric principles.** Nicolas Steno, a Danish anatomist working in Florence in the 1660s, was the first to formalise the geometric relationships between rock layers. His three principles remain foundational.

**Superposition** states that in an undisturbed sequence, younger layers overlie older layers. This seems obvious, but its application requires recognising "undisturbed" — in folded or overturned sequences, superposition must be applied after correcting for the deformation. Geopetal structures (objects that settled under gravity during deposition, like the internal fill of a shell) provide independent evidence of original top direction in complexly deformed rocks.

**Original horizontality** states that sediment is deposited in approximately horizontal layers — controlled by gravity, which distributes grains evenly on any depositional surface. Tilted, folded, or vertically dipping strata were originally horizontal and have been deformed after deposition. The angle of tilt is a measure of post-depositional strain, not original depositional geometry.

**Lateral continuity** states that a sedimentary layer was originally continuous in all lateral directions within its depositional environment, thinning at its margins or against a depositional barrier. When two exposures of similar rock are separated by a valley or other gap, they can be presumed to have been part of the same original layer if their position and character match. The principle justifies correlation across areas where the layer has been removed by erosion.

**Cross-cutting relationships**, formalised by Hutton, states that any feature cutting across another is younger than what it cuts. This applies to intrusive igneous bodies (dikes cutting across bedding planes are younger than the bedded strata), faults (displacing pre-existing layers, so the fault is younger), and erosion surfaces (eroding through pre-existing rocks, so the surface is younger). Cross-cutting relationships are among the most powerful tools for relative dating of igneous and tectonic events that leave no primary stratigraphic context.

**Inclusions**: a fragment included within a rock must be older than the host rock — the host could not have enclosed the fragment if it didn't already exist. A granite containing xenoliths (inclusions) of an older basalt: the basalt is older. A sedimentary conglomerate containing pebbles of granite: the granite is older than the conglomerate. The principle of inclusions is particularly useful for establishing relative ages of igneous rocks that are in contact with one another.

**Faunal succession** (William Smith, Georges Cuvier, ~1799–1815): fossil species and assemblages occur in a predictable, non-repeating vertical sequence. A given biozone — defined by the range of a particular species or assemblage — appears only once in the rock record worldwide; it cannot reappear higher in the sequence because extinction is permanent. This makes index fossils — species with short stratigraphic ranges and wide geographic distributions — the most powerful correlation tools available to pre-radiometric geologists and still extremely useful today.

**Unconformities — the gaps that speak.** A conformable sequence is one in which deposition was continuous, with no significant gaps. An unconformity is any surface representing a break — a gap in the record that may represent anything from a few thousand years to a billion years. Three types carry distinct geological implications:

An **angular unconformity** involves tilted or folded lower strata overlain by younger, more gently dipping strata. The geometry requires: (1) deposition of the lower sequence; (2) lithification; (3) tectonic deformation (folding/tilting); (4) uplift and exposure; (5) erosion to a relatively flat surface; (6) subsidence and renewed deposition. The time gap may span tens to hundreds of millions of years. Hutton's Siccar Point is an angular unconformity between Silurian greywackes (~430 Ma) and Devonian sandstone (~370 Ma) — a gap of ~60 Ma.

A **disconformity** is an erosion surface between parallel (sub-horizontal) rock sequences. The layers above and below are not deformed relative to each other, but an erosional surface is present — sometimes marked by an irregular topography, solution surfaces, weathered zones, or pebble lags. Disconformities are harder to recognise than angular unconformities and are frequently discovered only when the fossil record reveals a significant time gap with no corresponding structural explanation.

A **nonconformity** occurs where sedimentary rocks are deposited directly on crystalline basement — igneous or metamorphic rock. The contact represents a major episode of deep erosion that exposed the lower crust before renewed sedimentation. The Great Unconformity of the Grand Canyon, where Cambrian Tapeats Sandstone (~508 Ma) rests on Vishnu Schist (~1,740 Ma), is a nonconformity (and in some locations an angular unconformity above tilted Proterozoic sedimentary rocks): the gap represents ~1.2 billion years of missing time.`,
      cards: [
        {
          name: 'The Six Relative Dating Principles',
          icon: Layers,
          color: BRAND.gold,
          desc: "Steno (1669): Superposition (youngest on top in undisturbed sequence) · Original horizontality (strata deposited flat; tilt = deformation) · Lateral continuity (layers extend until thinning or barrier). Hutton: Cross-cutting relationships (intruding/faulting feature is younger). Inclusions (enclosed fragment is older than its host). Smith/Cuvier (~1815): Faunal succession (fossil assemblages appear once, non-repeating; index fossils = short range + wide distribution).",
          examples: "Grand Canyon: Cambrian Tapeats (508 Ma) on Vishnu Schist (1,740 Ma) — nonconformity · Siccar Point: tilted Silurian greywacke (430 Ma) under flat Devonian sandstone (370 Ma) — angular unconformity",
        },
        {
          name: 'Unconformity Types',
          icon: Mountain,
          color: BRAND.coral,
          desc: "Angular unconformity: lower strata tilted/folded, upper strata horizontal; requires deposition → deformation → erosion → renewed deposition; gap = tens to hundreds of Ma. Disconformity: erosion surface between parallel sequences; no deformation, but significant time gap; identified by fauna, irregular surface, weathering. Nonconformity: sedimentary rocks on crystalline basement (igneous or metamorphic); records deep erosional exhumation before renewed deposition. All types = missing time that is not represented by rock.",
          examples: "Grand Canyon Great Unconformity: ~1.2 Ga missing · Siccar Point: ~60 Ma missing · Great Disconformity: globally recognised in Precambrian-Cambrian transitions",
        },
        {
          name: 'Correlation Methods',
          icon: Globe,
          color: BRAND.jade,
          desc: "Lithostratigraphy: correlate by rock type and physical continuity; works short distances; formation = the basic lithostratigraphic unit. Biostratigraphy: correlate by fossil content (faunal succession); works globally because extinction is irreversible; biozone = rock interval defined by presence of a taxon or assemblage. Chemostratigraphy: correlate by geochemical signature (δ¹³C, δ¹⁸O, ⁸⁷Sr/⁸⁶Sr); powerful in Precambrian where biostratigraphy is limited. Magnetostratigraphy: correlate by magnetic polarity record — introduced in 2.1.4.",
          examples: "William Smith's 1815 map: biostratigraphic correlation across England · Cambrian-Precambrian boundary: identified globally by chemostratigraphy · GSSP at Fortune Head NL: first appearance of Treptichnus pedum (trace fossil) defines base of Cambrian",
        },
      ],
    },
    {
      type: 'concept',
      title: 'Applying the principles: from cross-section to history',
      body: `**A worked example.** Consider a hypothetical cross-section with the following elements (described from what is visible, not in order of formation): near-horizontal limestone beds labelled A (bottom), B (middle), C (top); beneath an unconformity surface, steeply tilted shale layers labelled D; a granite body E that intrudes into D but does not extend into A–C; a basalt dike F that cuts through both E and layers A–C; a fault G that displaces layers A, B, and C but stops below the surface.

Applying the principles systematically:

1. D is the oldest unit visible (it was already tilted when the unconformity formed, and E intrudes it — by inclusions/cross-cutting, D predates E).
2. E intruded D (cross-cutting: E is younger than D).
3. The unconformity surface cuts D and E — both were eroded before A was deposited (cross-cutting: unconformity is younger than D and E).
4. A, B, C were deposited after the unconformity (superposition: C is youngest of the three; A is oldest).
5. F cuts through A, B, C and also through E (cross-cutting: F is younger than all of D, E, A, B, C).
6. G displaces A, B, C and F (cross-cutting: G is the youngest event visible).

Full sequence, oldest to youngest: **D → E → unconformity → A → B → C → F → G**.

This exercise can be performed on any cross-section — from a hand-drawn sketch to a seismic reflection profile — and yields a complete relative sequence before a single isotopic analysis is run. The radiometric dates (Lesson 2.1.3) then attach numbers to this framework.

**The Grand Canyon: a textbook in stone.** The Grand Canyon of the Colorado River provides one of Earth's most accessible demonstrations of these principles. The visible stratigraphy spans nearly 2 billion years and displays all three unconformity types. Reading from bottom to top:

The **Vishnu Schist** (~1,740–1,680 Ma) and associated **Zoroaster Granite** intrusions form the metamorphic and igneous basement. The Vishnu was once a sedimentary and volcanic sequence that was buried to ~20 km depth and metamorphosed during the Yavapai orogeny; the Zoroaster granites intruded the Vishnu during and after metamorphism (cross-cutting: Zoroaster younger than Vishnu).

Above the Vishnu, a non-conformity separates basement from the ~1,200–740 Ma **Grand Canyon Supergroup** — a tilted sequence of Proterozoic sedimentary and minor volcanic rocks preserved in fault-bounded basins. This is an angular unconformity in sections where the tilted Supergroup is overlain by nearly horizontal Cambrian strata.

The **Great Unconformity** — one of Earth's most dramatic stratigraphic surfaces — occurs where the near-horizontal Cambrian **Tapeats Sandstone** (~508 Ma) rests directly on either the Vishnu Schist or on the Supergroup. The gap represented ranges from ~1.2 billion years (where Tapeats rests on Vishnu) to ~230 million years (where it rests on the youngest Supergroup rocks). What happened during those missing billion-plus years? The rock record is silent — the surface records only that deposition, erosion, and possibly glaciation (the Snowball Earth episodes are in this interval) occurred, but left no preserved deposit in this location.

Above the Tapeats, the Paleozoic sequence is largely conformable: Bright Angel Shale, Muav Limestone, Temple Butte Formation, Redwall Limestone, Supai Group, Hermit Shale, Coconino Sandstone, Toroweap Formation, and finally the **Kaibab Limestone** (~270 Ma) at the canyon rim. Each layer is demonstrably younger than the one below by superposition; each records a different environment (beach, shallow sea, dune field, tidal flat) over ~240 million years of Paleozoic time.

**The limits of relative dating.** Relative dating establishes sequence, not duration. The conformable Paleozoic sequence in the Grand Canyon spans ~240 million years — but nothing in the relative framework tells you that. The Great Unconformity could represent 500 million years or 5 million years; the relative principles can only tell you it represents a significant gap, not how large. Two sequences can be identified as contemporaneous by biostratigraphy even if they have very different thicknesses — deposition rate, not thickness, controls duration. These limitations are precisely why radiometric dating (Lesson 2.1.3) is necessary, and why the combination of relative and absolute methods produces the fully calibrated geologic timescale (Lesson 2.1.4).`,
      cards: [
        {
          name: 'Cross-Section Analysis: Step by Step',
          icon: Layers,
          color: BRAND.amethyst,
          desc: "Systematic procedure: (1) Identify all rock bodies and surfaces visible. (2) Apply superposition to layered sequences: oldest at base. (3) Apply cross-cutting: any body cutting another is younger. (4) Apply inclusions: enclosed fragments are older. (5) Identify unconformities: what events do they require? (6) Apply faunal succession to correlate with other sections. (7) Build the event sequence oldest-to-youngest. (8) Note what the relative sequence cannot tell you (duration, absolute ages).",
          examples: "Grand Canyon: Vishnu (1,740 Ma) → Zoroaster intrusion → unconformity → Tapeats (508 Ma) → Kaibab (270 Ma) — 6 events, 3 principles · Scottish Highlands: Lewisian Gneiss → nonconformity → Torridonian → disconformity → Cambrian quartzites",
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "A cross-section shows: horizontal limestone beds (A on the bottom, B above, C on top); below an erosion surface, steeply tilted shale (D); a granite body (E) that intrudes D but not A–C; a basalt dike (F) cutting through E and all of A–C; a fault (G) that displaces A–C and F. Rank all units from oldest to youngest and state which principle(s) you applied.",
          a: [
            "G → F → C → B → A → unconformity → E → D; the fault is youngest because it is the most visible feature in the cross-section",
            "D → E → unconformity → A → B → C → F → G; D is oldest by superposition below the unconformity; E intrudes D (cross-cutting); unconformity cuts both; A–C deposited after by superposition; F cuts all (cross-cutting); G is youngest (cross-cutting, displaces everything including F)",
            "D → A → B → C → E → F → G → unconformity; the unconformity is youngest because it is the most recent erosional event",
            "E → D → A → B → C → F → G; granite intrusions are always older than surrounding sedimentary rocks because they form deep in the crust before being exhumed",
          ],
          correct: 1,
          explain: "The correct sequence applies cross-cutting relationships and superposition systematically. D is oldest — it was tilted and intruded before being eroded. E intrudes D but not A–C, so E predates the unconformity and the deposition of A–C (cross-cutting). The unconformity cuts both D and E, so it post-dates both. A, B, and C were deposited after the unconformity (superposition places A oldest, C youngest of the three). F cuts through all of A–C and through E, so F is younger than everything below the unconformity and all of A–C. G displaces both A–C and F, so G is the youngest event. Option A reverses the order. Option C incorrectly places the unconformity as the youngest feature — unconformities are erosion surfaces, and they were eroded before the overlying sequence was deposited. Option D incorrectly assumes granite is always older than surrounding sediment — cross-cutting relationships establish the relative age, not rock type.",
        },
        {
          q: "What is the difference between an angular unconformity and a disconformity, and what sequence of geological events must have occurred to produce each?",
          a: [
            "An angular unconformity has a steeper erosion surface than a disconformity; both require the same geological events but at different intensities",
            "An angular unconformity involves lower strata that are tilted or folded relative to overlying strata; it requires deposition, lithification, tectonic deformation, uplift, erosion, and renewed deposition — at minimum two full tectonic cycles; a disconformity is an erosion surface between parallel (undeformed) sequences, requiring only non-deposition or erosion without deformation — it may represent uplift, sea-level fall, or simply a pause in deposition",
            "A disconformity involves igneous rocks below the surface and sedimentary rocks above; an angular unconformity involves sedimentary rocks on both sides but at different orientations",
            "The two types are visually identical — the distinction is purely temporal; angular unconformities represent gaps longer than 10 Ma, while disconformities represent shorter gaps",
          ],
          correct: 1,
          explain: "The distinction is geometric and genetic. An angular unconformity requires deformation of the lower sequence before erosion — the tilted or folded lower strata record a tectonic event (folding, faulting, orogenic uplift) between the two phases of deposition; identifying the dip angle of the lower beds and the near-horizontal attitude of the upper beds makes angular unconformities relatively easy to recognise in outcrop. A disconformity lacks this angular discordance — both sequences are parallel — but still represents a gap; recognition requires either an obvious erosional surface (irregular topography, pebble lag) or a biostratigraphic gap (the fossils above the surface are significantly younger than those below). Neither angle nor time duration alone defines the type. Disconformities can represent hundreds of millions of years (the Great Disconformity at many Precambrian-Cambrian contacts). Rock types (C) don't define the distinction — igneous basement defines a nonconformity, not a disconformity.",
        },
        {
          q: "William Smith correlated rock formations across England — exposures separated by hundreds of kilometres with no physical connection — using only field observations. What principle made this possible, and why is it reliable?",
          a: [
            "Smith used original horizontality — he assumed all horizontal rocks at the same elevation belonged to the same layer, so he could trace any formation by mapping its elevation",
            "Smith used faunal succession — the principle that fossil assemblages appear in a predictable, non-repeating vertical sequence; because extinction is permanent, a given assemblage cannot recur higher in the sequence; the same succession of assemblages is therefore preserved worldwide, allowing rocks of the same age to be recognised regardless of their composition or location",
            "Smith used lateral continuity — he assumed that any rock layer visible in one location extended continuously underground to the next exposure, so he simply connected matching rock types on his map",
            "Smith used cross-cutting relationships — by mapping intrusive igneous bodies and the rocks they cut, he could establish a relative sequence that tied distant exposures together through a shared igneous event",
          ],
          correct: 1,
          explain: "Faunal succession is the key to long-distance correlation. Lateral continuity (C) works over short distances where a layer can actually be traced, but breaks down over hundreds of kilometres where the layer may pinch out, change facies, or have been eroded; Smith's formations were not continuously traceable in outcrop. Elevation matching (A) fails because layers are not flat across a country — they dip, fold, and are cut by faults; the same formation may occur at very different elevations in different locations. Cross-cutting igneous bodies (D) are localised events that cannot be used to correlate sedimentary sequences across a country. Faunal succession works because organic evolution is irreversible: once a species goes extinct, it cannot re-evolve in an identical form; therefore a specific assemblage of species defines a unique interval of time; finding the same assemblage in two outcrops — regardless of their rock type, distance apart, or absolute elevation — demonstrates that they were deposited at the same time. This is why the same principle underpins biostratigraphy worldwide today.",
        },
        {
          q: "In the Grand Canyon, near-horizontal Cambrian Tapeats Sandstone (~508 Ma) rests directly on Vishnu Schist (~1,740 Ma) along a sharp, nearly flat contact. What type of unconformity is this, what does it represent, and approximately how much time is missing?",
          a: [
            "Angular unconformity; the Vishnu Schist was tilted before the Tapeats was deposited; the gap represents ~1.2 billion years",
            "Nonconformity; sedimentary rock (Tapeats) rests on crystalline metamorphic/igneous basement (Vishnu Schist); the contact represents ~1.2 billion years of missing time during which the basement was deeply eroded before renewed deposition in the Cambrian",
            "Disconformity; both sequences are near-horizontal, so no deformation is involved; the gap represents ~1.2 billion years of simple non-deposition",
            "Conformity; the contact looks sharp but represents continuous deposition because metamorphic basement is always directly beneath Cambrian sediments globally",
          ],
          correct: 1,
          explain: "Where sedimentary rocks rest directly on crystalline basement (igneous or metamorphic rock), the unconformity is a nonconformity — the defining criterion is the nature of the lower contact (crystalline vs. sedimentary), not the orientation. The Vishnu Schist is a high-grade metamorphic rock (~1,740 Ma) intruded by the Zoroaster Granite; these deep crustal rocks were exhumed by erosion — perhaps 20+ km of overlying rock was removed — before the Cambrian sea transgressed and deposited the Tapeats Sandstone at ~508 Ma; the gap is ~1,230 million years. Where the Tapeats rests on tilted Proterozoic Grand Canyon Supergroup rocks (also within the canyon), the unconformity is angular; where it rests directly on Vishnu it is a nonconformity. An angular unconformity (A) applies where lower strata are tilted — the Vishnu is not a sedimentary layer but a metamorphic complex. A disconformity (C) requires parallel sedimentary sequences, not basement; the Vishnu is not sedimentary. The contact is definitely not a conformity (D) — the 1.2 Ga gap is one of the longest documented unconformities in North America.",
        },
        {
          q: "A geologist finds a conglomerate containing rounded pebbles of red sandstone, grey limestone, and black basalt. The matrix cementing the pebbles together is white quartz sandstone. Which rock is definitely the youngest in this group, and which principle applies?",
          a: [
            "The black basalt is youngest, because volcanic rocks are always more recent than sedimentary rocks",
            "The white quartz sandstone matrix is the youngest; by the principle of inclusions, the pebbles (red sandstone, grey limestone, black basalt) were already in existence before they were incorporated into the conglomerate, and the matrix — which cements them together — was deposited last and is therefore the youngest rock in the assemblage",
            "The grey limestone is youngest; carbonates are always deposited later in a geological sequence than siliciclastic rocks",
            "All rocks in a conglomerate are the same age because they were all deposited at the same moment",
          ],
          correct: 1,
          explain: "The principle of inclusions states that an enclosed fragment must be older than the rock enclosing it. The three pebble types (red sandstone, grey limestone, black basalt) were pre-existing rocks that were eroded, transported, rounded by abrasion, and eventually deposited together; they must all be older than the conglomerate event. The white quartz sandstone is the matrix — it was deposited as sediment that filled the spaces between the already-existing pebbles and later cemented them together; it is therefore the youngest component. Note that the relative ages of the three pebble types relative to each other cannot be determined from the conglomerate alone — they are all simply older than the matrix, but their mutual age relationships require other evidence. Rock type (A, C) does not determine relative age — volcanic rocks are not always younger than sedimentary rocks, and carbonates are not always younger than siliciclastics. Option D is incorrect — the pebbles predate the matrix; they are all part of the same depositional event in the sense that they were deposited together, but the pebbles themselves are older rocks that were incorporated.",
        },
      ],
    },
  ],
}

export default relativeDating
