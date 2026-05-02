import { Layers, Mountain, Clock } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const unconformities: Lesson = {
  id: 'geol-201-2-2-2',
  title: 'Unconformities and Missing Time',
  track: 'geo',
  trackName: 'Geology',
  level: 'Intermediate',
  duration: '20 min',
  xpReward: 250,
  description: "Some of the most important surfaces in geology are not rock at all — they are gaps. Unconformities are surfaces of erosion or non-deposition where millions, sometimes hundreds of millions, of years of geological history are simply absent from the record.",
  sources: [
    { org: 'USGS',     title: 'Geology of the Grand Canyon — Public Domain',     url: 'https://www.nps.gov/grca/learn/nature/geologicformations.htm' },
    { org: 'OpenStax', title: 'Physical Geology, 2nd ed., Ch. 9 (CC-BY 4.0)',    url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'GSA',      title: 'Geologic Time Scale 2020',                        url: 'https://www.geosociety.org/GSA/Education_Careers/Geologic_Time_Scale/GSA/timescale/home.aspx' },
    { org: 'AGI',      title: 'Glossary of Geology, 5th ed.',                    url: 'https://www.americangeosciences.org/pubs/glossary' },
  ],
  sections: [
    {
      type: 'intro',
      title: "The pages torn from the book",
      body: `Imagine a book with pages torn out. The story jumps from chapter three to chapter seven with no warning, no explanation — just a ragged edge where the missing pages once were. Sedimentary rock sequences have exactly this problem. Across the world, in canyon walls and sea cliffs and road cuts, there are surfaces where millions, sometimes hundreds of millions, of years of geological history are simply absent. The rock record is not a complete archive; it is a fragmented one, full of gaps.

James Hutton recognised one of the most famous of these surfaces at Siccar Point, Scotland, in 1788. There, tilted Silurian greywackes, eroded flat, are buried under gently dipping Devonian red sandstone. Hutton grasped what he was looking at: the lower rocks had been deposited, squeezed into mountain ranges, bevelled by erosion, and only then had the upper beds been deposited on top. The gap between the two rock bodies represented an unimaginably vast interval of geological time — one that required the kind of "deep time" he had been theorising about. His companion John Playfair later wrote that the mind "seemed to grow giddy by looking so far into the abyss of time."

These surfaces — unconformities — are among the most geologically informative features in the rock record. Each one is the physical trace of a missing chapter: uplift, erosion, and the destruction of whatever sedimentary record once existed. They complicate correlation, break the simple rules of stratigraphic succession, and mark the boundaries of major tectonic and climatic events. Learning to recognise and interpret them is one of the central skills of stratigraphy.`,
      keyTerms: [
        {
          term: 'Unconformity',
          def: "A surface of erosion or non-deposition that separates younger strata above from older strata below, representing a gap (hiatus) in the geological record. During the hiatus, sediment was being removed by erosion, or deposition simply did not occur, or both. The amount of time missing can range from a few thousand years (a brief exposure) to more than a billion years (a major erosion surface separating ancient basement from overlying Phanerozoic sediments). Unconformities are recognised by truncation of underlying beds, a basal conglomerate or weathering profile, angular discordance, or an abrupt change in fossil assemblage.",
        },
        {
          term: 'Disconformity',
          def: "An unconformity in which the beds above and below are parallel (no angular discordance), but the contact between them is a clear erosion surface — often wavy or irregular, with a basal conglomerate, palaeosol, or weathered horizon. Disconformities form when a region is uplifted and eroded without significant tilting, then re-submerged. They are common in stable cratonic settings and can be difficult to recognise if the erosion surface is not well exposed — the beds may appear conformable until the fossil record reveals the gap.",
        },
        {
          term: 'Angular unconformity',
          def: "An unconformity in which the beds below dip at a different angle from the beds above, which truncate against the older tilted or folded rocks. The angular discordance records a complete orogenic cycle in the gap: lower beds deposited → tilted and folded by mountain building → bevelled by erosion → submerged for renewed deposition of the upper beds. The angle of discordance reflects the intensity of the intervening deformation. Siccar Point, Scotland, is the type example: near-vertical Silurian greywackes beneath gently dipping Devonian red sandstone.",
        },
        {
          term: 'Nonconformity',
          def: "An unconformity in which sedimentary rocks rest directly on igneous or metamorphic basement (plutonic or high-grade metamorphic rocks that were never sedimentary). A nonconformity requires deep erosion that removed all overlying sedimentary cover and exhumed the crystalline basement before renewed deposition. Nonconformities typically represent the largest time gaps of all three types. The contact between Cambrian sandstone and Precambrian crystalline basement in the Grand Canyon is a nonconformity representing ~1.2 billion years of missing history.",
        },
        {
          term: 'Hiatus',
          def: "The interval of geological time not represented by sedimentary rock at a given location — the 'missing time' at an unconformity. The hiatus is the difference between the age of the youngest rock below the unconformity and the oldest rock above it. The duration of the hiatus must be determined from radiometric dates on both sides, not from the unconformity surface itself. A hiatus may be highly variable laterally: the same unconformity surface may represent 10 Myr in one location and 200 Myr elsewhere, depending on how deeply erosion cut into the pre-unconformity sequence.",
        },
        {
          term: 'Great Unconformity',
          def: "A major stratigraphic surface, most famously exposed in the Grand Canyon, where Cambrian sandstone (~505 Ma) rests on Precambrian crystalline basement (~1,740 Ma) or on tilted Precambrian sedimentary rocks (~740–1,250 Ma). The gap is up to ~1.2 billion years in some locations. The Great Unconformity is recognised across much of North America and may correlate with similar surfaces on other continents. Its origin is debated but likely involves the Snowball Earth glaciations (~720–635 Ma) and the breakup of the Rodinia supercontinent, which produced continental erosion on a vast scale.",
        },
      ],
    },
    {
      type: 'concept',
      title: 'Types of unconformity and how they form',
      body: `**The three types.** Not all unconformities look alike, because not all form the same way. The geometry of the contact between the rocks above and below encodes the tectonic history of the gap.

A **disconformity** is the subtlest type. The beds above and below are parallel — they appear conformable at first glance — but the contact between them is an erosion surface: irregular, wavy, sometimes marked by a basal conglomerate of reworked clasts from below, a fossil soil (palaeosol), or a zone of chemical weathering. Disconformities form when a region is gently uplifted and exposed, eroded, and then re-submerged without significant tilting of the underlying rocks. They are common in stable continental interiors (cratons) where tectonic deformation is mild but sea-level changes repeatedly expose and flood the surface. The hiatus may be difficult to quantify without biostratigraphy, because the beds look parallel; only the fossil record reveals how much time is missing.

An **angular unconformity** is immediately recognisable: the beds below are tilted or folded, truncated against a flat erosion surface, with horizontal or gently dipping beds above. Producing this geometry requires an entire tectonic cycle compressed into the gap: (1) the lower beds are deposited; (2) tectonic forces — a plate collision, the growth of a fold-and-thrust belt, or a period of regional compression — tilt, fold, and uplift the lower sequence into a mountain range; (3) the mountains are bevelled by erosion over millions of years; (4) the region subsides and is buried by new sediment, which is deposited horizontally on the eroded surface. The angle of discordance between the upper and lower bedding is a direct measure of the deformation the lower rocks experienced. Siccar Point in Scotland shows near-vertical Silurian turbidites truncated by a flat erosion surface, with gently dipping Devonian red sandstones above — an angular discordance of nearly 90°, recording the complete cycle of the Caledonian Orogeny.

A **nonconformity** is the most extreme type: sedimentary rocks resting directly on crystalline basement — igneous or high-grade metamorphic rocks that were never sedimentary. Creating a nonconformity requires eroding away the entire sedimentary cover and cutting into the underlying basement before burial. This implies either that very little sedimentary rock was ever deposited above the basement, or that an enormous thickness of older sedimentary rock was removed. Nonconformities typically represent the longest time gaps. In the Grand Canyon, the Tapeats Sandstone (Cambrian, ~505 Ma) rests on the Vishnu Schist (Precambrian metamorphic basement, ~1,740 Ma) — a gap of ~1,235 Ma in some locations.

**The unconformity cycle.** Every unconformity records the same four-stage history: (1) **deposition** — sediment accumulates below base level in a basin; (2) **uplift** — tectonic forces raise the region above base level, exposing the rocks to weathering and erosion; (3) **erosion** — the exposed rocks are stripped back at rates of millimetres per year; the longer this phase lasts, the more time is missing from the record; (4) **subsidence and burial** — the region sinks back below base level and new sediment blankets the erosion surface, sealing the unconformity into the rock record. The type of unconformity produced depends on what happened during step 2: gentle uplift without tilting → disconformity; uplift with folding and tilting → angular unconformity; deep erosion into basement → nonconformity.

**Unconformities break Walther's Law.** Walther's Law states that vertically adjacent facies were once laterally adjacent. This holds only where the succession is conformable. An unconformity severs that relationship: the environment above the unconformity may be completely unrelated to the environment below. Marine limestone below an angular unconformity may be followed above by a fluvial red sandstone deposited millions of years later in a completely different tectonic setting. Reading across an unconformity as if the sequence were conformable would lead to a fundamentally wrong environmental reconstruction.`,
      cards: [
        {
          name: 'Types of Unconformity',
          icon: Layers,
          color: BRAND.gold,
          desc: "Disconformity: parallel beds above and below; erosion surface with basal conglomerate, palaeosol, or weathering zone; no angular discordance; cratonic settings; hiatus hard to see without biostratigraphy. Angular unconformity: lower beds truncated at angle to upper beds; records complete orogenic cycle (deposition → folding/uplift → erosion → burial); angle of discordance ∝ intensity of deformation. Nonconformity: sedimentary rock on crystalline basement (plutonic or metamorphic); requires deep erosion of entire sedimentary cover; largest time gaps.",
          examples: "Disconformity: Devonian–Mississippian contact in much of the US Midwest (up to 30 Myr gap, parallel beds) · Angular: Siccar Point, Scotland (Silurian greywackes ~80° dip truncated by Devonian sandstone ~15° dip; Caledonian Orogeny) · Nonconformity: Grand Canyon Tapeats Sandstone on Vishnu Schist (505 Ma on 1,740 Ma; ~1.2 Ga gap)",
        },
        {
          name: 'The Unconformity Cycle',
          icon: Mountain,
          color: BRAND.coral,
          desc: "Stage 1 — Deposition: sediment accumulates in basin below base level. Stage 2 — Uplift: tectonics raise region above base level; if folding occurs → angular unconformity; if gentle → disconformity. Stage 3 — Erosion: exposed rocks stripped at ~0.01–1 mm/yr; duration of erosion = duration of hiatus; deeper erosion into basement → nonconformity. Stage 4 — Subsidence and burial: region sinks; new sediment blankets erosion surface → unconformity preserved. Duration of hiatus: determined only by radiometric dating of rocks above and below, not from the surface itself.",
          examples: "Caledonian Orogeny (Scotland): ~430 Ma collision → Silurian rocks folded → Devonian erosion → Devonian red beds deposited on erosion surface; Siccar Point records this entire cycle · Grand Canyon: Rodinia breakup + Snowball Earth (720–635 Ma) → deep erosion of Precambrian cover",
        },
        {
          name: 'Siccar Point and the Great Unconformity',
          icon: Clock,
          color: BRAND.amethyst,
          desc: "Siccar Point (Scotland): angular unconformity between near-vertical Silurian greywackes (~425 Ma) and gently dipping Devonian Old Red Sandstone (~370 Ma); gap ~55 Myr; records Caledonian Orogeny; discovered by Hutton 1788 — first clear recognition of deep time. Great Unconformity (Grand Canyon and elsewhere): Cambrian Tapeats Sandstone (505 Ma) on Precambrian basement (1,740 Ma) or Precambrian sediments (740–1,250 Ma); gap up to ~1.2 Ga; present on most continents; likely reflects Snowball Earth glaciation and Rodinia breakup.",
          examples: "Hutton's 1788 observation: 'the mind seemed to grow giddy by looking so far into the abyss of time' (John Playfair) · Grand Canyon: 1,235 Ma missing where Tapeats rests on Vishnu Schist · Similar surfaces: Basal Cambrian unconformity on every continent — global synchrony suggests global cause",
        },
      ],
    },
    {
      type: 'concept',
      title: 'Recognising and interpreting unconformities',
      body: `**Field recognition.** Identifying an unconformity requires looking for a combination of physical evidence at the contact between two rock units. The most definitive indicator is **angular discordance**: if bedding above and below dips in different directions or at different angles, the beds are not conformable. But even where beds appear parallel (as in a disconformity), several features betray the erosion surface: a **basal lag or conglomerate** at the base of the upper unit (coarse fragments reworked from the underlying rock); a **palaeosol** — a fossil soil horizon developed on the eroded surface during subaerial exposure; a **weathering profile** with chemical alteration (iron-staining, clay enrichment) in the uppermost part of the lower unit; or an abrupt, non-gradational change in lithology, fossil content, or metamorphic grade across the contact.

The absence of expected fossil zones is also telling. If biostratigraphy shows that the fossils immediately below the contact are from biozones much older than the fossils immediately above it — with intermediate biozones absent — the gap is confirmed even where the physical erosion surface is subtle.

**Quantifying the hiatus.** The duration of missing time cannot be read from the unconformity surface itself. It must be calculated from the ages of the rocks on both sides: the age of the youngest rock below (which gives the minimum age of the start of the hiatus) and the oldest rock above (which gives the maximum age of the end of the hiatus). If the youngest rock below is dated at 400 Ma and the oldest rock above at 350 Ma, the hiatus lasted at least 50 Myr. The actual hiatus may be longer if the uppermost pre-unconformity rocks were themselves removed by erosion — you are only dating what survives, not what was there.

Importantly, the hiatus is often variable laterally. An unconformity that cuts 500 metres deep into an underlying sequence in one location may thin to a few metres of removed section just kilometres away. The same unconformity surface may represent 100 Myr of missing time in an uplifted core and only 10 Myr at the same level on a stable flank where less erosion occurred.

**Tectonic and stratigraphic significance.** Major unconformities are not random — they correspond to recognisable geological events. Continental collision produces angular unconformities as orogens rise and erode. Global sea-level falls (driven by glaciation or changes in ocean-floor spreading rates) expose continental shelves, producing widespread disconformities that can be correlated across entire basins. The largest unconformities — like the Great Unconformity — may record global events: the assembly and breakup of supercontinents, or glaciations so severe that continental ice sheets scoured exposed cratons to bedrock.

In practical terms, unconformities are targets in petroleum exploration. The erosion surface often places porous, permeable reservoir rock directly against impermeable cap rock above it, creating a structural trap. The irregular topography of the unconformity surface itself may form pockets that trap hydrocarbons. Some of the world's largest oil fields (e.g., in the Middle East and West Texas) are partly controlled by unconformity traps.`,
      cards: [
        {
          name: 'Field Recognition Guide',
          icon: Layers,
          color: BRAND.jade,
          desc: "Angular discordance → angular unconformity (definitive). Parallel beds but: (a) basal conglomerate/lag of reworked fragments; (b) palaeosol — fossil soil horizon with root traces, clay enrichment; (c) chemical weathering profile (iron-staining, silicification) in upper part of lower unit; (d) abrupt non-gradational lithological change; (e) missing biozone(s) confirmed by fossil record → disconformity. Sedimentary rock directly on crystalline rock (plutonic/metamorphic, no primary sedimentary fabric) → nonconformity. Quantify hiatus: radiometric dates immediately above and below; hiatus ≥ (age below) − (age above); may be laterally variable.",
          examples: "Palaeosol recognition: root traces, mottled reddish-grey clay, caliche nodules at top of a limestone → karst surface (hiatus + exposure) · Basal conglomerate: angular clasts of underlying rock in a sandy matrix at base of upper unit → lag deposit, confirms erosion · Missing biozones: only zones 1–3 present below, zones 6–9 above → zones 4–5 missing = hiatus of 2 biozones",
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "What is an unconformity, and what does it represent in terms of geological time?",
          a: [
            "An unconformity is a fault surface where rocks on opposite sides moved past each other; it represents a period of tectonic activity rather than missing time",
            "An unconformity is a surface of erosion or non-deposition separating younger strata above from older strata below, representing a hiatus — a gap in the geological record during which sediment was removed by erosion, not deposited, or both; the rocks above and below may differ in age by thousands to billions of years",
            "An unconformity is a gradational contact between two rock types of different composition; it represents a gradual change in depositional environment rather than missing time",
            "An unconformity is any contact between sedimentary rocks of different ages; it is equivalent to a stratigraphic boundary and always represents exactly one geological period of missing time",
          ],
          correct: 1,
          explain: "An unconformity is specifically a surface of erosion or non-deposition — not just any age difference between rocks. The key is that during the hiatus, material that was once there (or could have been deposited) was removed or never accumulated, leaving a gap in the record. The time gap can range from trivially short (a seasonal exposure) to enormous (>1 Ga at the Great Unconformity). Option A describes a fault, not an unconformity — faults involve displacement, not just a temporal gap. Option C describes a gradational conformable contact, the opposite of an unconformity. Option D is too broad and wrong in the 'exactly one period' claim — hiatuses are variable and are measured in actual time (Ma), not in fixed stratigraphic periods.",
        },
        {
          q: "A road cut exposes sandstone beds dipping 40° to the east. Above a sharp, planar erosion surface, horizontal limestone rests directly on the eroded tops of the sandstone beds, with a thin basal conglomerate of sandstone clasts at the base of the limestone. What type of unconformity is this, and what sequence of events does it record?",
          a: [
            "A disconformity, because both units are sedimentary rocks; the basal conglomerate indicates rapid deposition, not erosion",
            "An angular unconformity, because the sandstone below dips at 40° while the limestone above is horizontal, indicating angular discordance; the sequence of events is: (1) sandstone deposited horizontally, (2) tilted to 40° by tectonic compression, (3) uplifted and eroded flat — the conglomerate records reworking of sandstone during erosion — (4) submerged and covered by horizontal limestone",
            "A nonconformity, because the limestone (carbonate) rests on sandstone (siliciclastic), which represents a contact between igneous and sedimentary rock",
            "A paraconformity, because the erosion surface is planar and the time gap is too short to qualify as a true unconformity",
          ],
          correct: 1,
          explain: "The defining feature of an angular unconformity is the angular discordance between beds above and below — here, 40° dip in the sandstone vs. horizontal limestone. This geometry requires folding or tilting of the lower unit before deposition of the upper unit. The sequence of events is: (1) sandstone deposited as horizontal beds; (2) regional compression or mountain building tilted the sandstone to 40°; (3) the tilted sequence was uplifted and exposed to erosion — the basal conglomerate of sandstone clasts at the base of the limestone is the lag deposit, physical proof of erosion; (4) the region subsided and the limestone was deposited horizontally on the eroded surface. Option A misidentifies the type — a disconformity requires parallel beds above and below; 40° vs. 0° is definitively angular. Option C incorrectly defines nonconformity as a contact between different sedimentary rock types; a nonconformity specifically involves crystalline (igneous or metamorphic) basement. Option D invents 'paraconformity' as a category in a way not consistent with its technical meaning (which refers to parallel-bedded unconformities with very subtle or no physical evidence of the erosion surface).",
        },
        {
          q: "Why does an unconformity break Walther's Law, and what stratigraphic problem does this create?",
          a: [
            "Unconformities break Walther's Law because they represent a change in sediment grain size; coarse sediment above and fine sediment below violates the expected fining-upward trend",
            "Unconformities break Walther's Law because the law states that vertically adjacent facies were once laterally adjacent environments — but an unconformity severs this continuity; the environment represented by the facies above the unconformity may be completely unrelated to the one below, deposited millions of years later in a totally different tectonic and geographic setting; applying Walther's Law across an unconformity would produce a fictitious environmental reconstruction",
            "Unconformities break Walther's Law because they represent periods of rapid sea-level change, which Walther's Law cannot accommodate; the law only applies to slow, steady sea-level conditions",
            "Unconformities do not break Walther's Law; the law applies to both conformable sequences and unconformities because both involve vertical facies changes",
          ],
          correct: 1,
          explain: "Walther's Law states that in a conformable vertical succession, the facies found above and below each other were originally deposited in laterally adjacent environments — the law works because a conformable succession records the lateral migration of a continuous environmental system through time. An unconformity breaks the key assumption: conformability. When there is an erosional gap, the facies above and below were not part of the same continuous environmental system. A marine shale deposited at 400 Ma may be directly overlain, across an unconformity, by a fluvial sandstone deposited at 350 Ma — these two environments were never laterally adjacent; they are separated by 50 Myr of geological history in which the region was uplifted, eroded, and tectonically reorganised. Reading across the unconformity as if applying Walther's Law would imply a conformable environmental transition from offshore marine to river, which would be geologically nonsensical. This is why recognising unconformities before applying environmental interpretation is essential.",
        },
        {
          q: "In the Grand Canyon, the Cambrian Tapeats Sandstone (~505 Ma) rests directly on the Precambrian Vishnu Schist (~1,740 Ma) in some locations. What type of unconformity is this, and approximately what time gap does it represent?",
          a: [
            "An angular unconformity representing ~1.2 Ga of missing time; the Vishnu Schist is a folded and metamorphosed sedimentary rock that was tilted before the Tapeats was deposited",
            "A nonconformity representing approximately 1,235 Ma (~1.2 Ga) of missing time; the Vishnu Schist is a high-grade metamorphic rock (crystalline basement), so sedimentary rock resting directly on it constitutes a nonconformity by definition; this is one of the largest time gaps in North American stratigraphy",
            "A disconformity representing ~1.2 Ga of missing time; because the Tapeats Sandstone beds are horizontal and the Vishnu Schist foliation is also approximately horizontal in outcrop, there is no angular discordance",
            "A conformable contact — the Tapeats Sandstone was deposited continuously on top of the cooling Vishnu Schist; the age difference reflects the time required for the metamorphic rock to cool sufficiently to accept sediment",
          ],
          correct: 1,
          explain: "A nonconformity is specifically defined as sedimentary rock resting on crystalline basement — intrusive igneous or metamorphic rock. The Vishnu Schist is a high-grade metamorphic complex (originally marine sediments metamorphosed at ~1,740 Ma during a Proterozoic orogeny), not a sedimentary rock. It is crystalline basement. The Tapeats Sandstone (a shallow marine beach/shoreface sandstone deposited during the Cambrian transgression) resting directly on the Vishnu Schist therefore constitutes a nonconformity. The time gap is 1,740 − 505 = ~1,235 Ma — roughly 1.2 billion years of geological history absent from the record. Option A incorrectly calls it an angular unconformity; angular unconformities involve tilted or folded sedimentary rocks below, not crystalline metamorphic basement. Option C is wrong — the lack of visible angular discordance between the Tapeats bedding and the Schist foliation does not make it a disconformity; the defining criterion is that the lower unit is crystalline basement, not sedimentary. Option D is geologically impossible — a cooling metamorphic rock does not continuously transition into an overlying sedimentary deposit; there is no such thing as continuous deposition across 1.2 Ga.",
        },
        {
          q: "How would a geologist estimate the duration of the hiatus represented by an unconformity? What limits the precision of this estimate?",
          a: [
            "The duration is measured by the thickness of rock missing — thicker unconformities represent longer gaps; at a standard sedimentation rate of 1 mm/yr, the thickness of the erosion surface in metres gives the duration in thousands of years",
            "The duration is estimated by obtaining radiometric dates from the rocks immediately below the unconformity (giving the minimum age of when the gap began) and immediately above it (giving the maximum age of when deposition resumed); the hiatus is at least as long as the difference between these two ages; precision is limited by: (a) analytical uncertainty in the radiometric dates; (b) the fact that the topmost pre-unconformity rocks may have been removed by erosion so the dated rocks may be older than the onset of the gap; (c) lateral variability — the same unconformity surface may represent different time gaps in different locations",
            "The duration is estimated from the number of missing biostratigraphic zones above and below the unconformity; each biozonal boundary represents exactly 1 million years so counting the missing zones gives the gap in Ma",
            "The duration cannot be estimated at all because no material from the hiatus is preserved — the erosion surface contains no datable rock, so the gap is permanently unknown",
          ],
          correct: 1,
          explain: "Quantifying a hiatus requires radiometric ages from the rocks on both sides of the unconformity — specifically, from the youngest rocks surviving below it and the oldest rocks above it. The difference in age gives a minimum estimate of the hiatus: minimum because the topmost pre-unconformity rocks may themselves have been eroded away, so the rocks dated below the unconformity may be older than the moment when erosion actually began. Several factors limit precision: (1) analytical uncertainty in radiometric measurements (typically ±0.1–1%, which at 400 Ma translates to ±0.4–4 Myr); (2) stratigraphic uncertainty — if the closest datable ash layer is 50 metres above the unconformity, there is additional stratigraphic time between the dated horizon and the surface itself; (3) lateral variability — the same unconformity may represent very different time gaps along its extent, depending on how deeply erosion cut at each location. Option A is wrong — there is no standard sedimentation rate applicable across geological settings; rates vary by orders of magnitude. Option C is wrong — biozone durations are not exactly 1 Myr; they range from <0.5 to >5 Myr and are defined by fossil appearances, not by fixed time intervals. Option D is wrong — although the erosion surface itself contains no datable rock from the hiatus, the ages of rocks on both sides bracket the gap and give a minimum estimate.",
        },
      ],
    },
  ],
}

export default unconformities
