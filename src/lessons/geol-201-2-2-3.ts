import { Layers, Mountain, Clock } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const sequenceStratigraphy: Lesson = {
  id: 'geol-201-2-2-3',
  title: 'Sequence Stratigraphy Basics',
  track: 'geo',
  trackName: 'Geology',
  level: 'Intermediate',
  duration: '22 min',
  xpReward: 250,
  description: "In the 1970s, Exxon geoscientists discovered that sedimentary rocks form discrete packages bounded by unconformities — packages controlled by cycles of sea-level change. Sequence stratigraphy turned this observation into a global correlation framework that now underpins petroleum exploration and basin analysis worldwide.",
  sources: [
    { org: 'USGS',     title: 'Sequence Stratigraphy Web Resources',          url: 'https://www.usgs.gov/centers/astrogeology-science-center/sequence-stratigraphy' },
    { org: 'OpenStax', title: 'Physical Geology, 2nd ed., Ch. 9 (CC-BY 4.0)', url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'GSA',      title: 'Geologic Time Scale 2020',                     url: 'https://www.geosociety.org/GSA/Education_Careers/Geologic_Time_Scale/GSA/timescale/home.aspx' },
    { org: 'AGI',      title: 'Glossary of Geology, 5th ed.',                 url: 'https://www.americangeosciences.org/pubs/glossary' },
  ],
  sections: [
    {
      type: 'intro',
      title: "Packages of time",
      body: `In the 1970s, a group of Exxon geoscientists — Peter Vail, Robert Mitchum, and colleagues — were analysing seismic reflection profiles from continental margins around the world. They noticed something remarkable: sedimentary rocks did not simply pile up layer by layer in an undifferentiated accumulation. Instead they formed discrete packages, each bounded above and below by surfaces that could be traced continuously across hundreds of kilometres of seismic data. These bounding surfaces were unconformities at the basin margin, or surfaces conformable with them in the basin centre where deposition had been continuous. The packages between them recorded a coherent history of sea-level rise and fall, from lowstand to transgression to highstand and back.

Vail, Mitchum, and their team called these packages **depositional sequences**, and the discipline they founded — **sequence stratigraphy** — transformed sedimentary geology. For the first time, geologists had a framework that connected the fragmented outcrop record of basin margins (where unconformities are exposed) to the continuous subsurface record of basin centres (where only seismic and well data are available). The same sequence boundary that is an unconformity on the shelf is a conformable surface far out in the basin — both can be picked on seismic data and traced between wells. This means that rock packages can be correlated across entire basins using a geometric framework rather than depending solely on fossils.

The practical consequences were immediate and large. Sequence stratigraphy predicts where reservoir sandstones accumulate (in lowstand fans and highstand prograding wedges), where organic-rich source shales occur (at maximum flooding surfaces), and where traps form (against sequence boundaries and stratigraphic pinch-outs). It remains one of the primary tools of petroleum basin analysis and is increasingly applied to climate reconstruction, sea-level history, and understanding major events in Earth history.`,
      keyTerms: [
        {
          term: 'Depositional sequence',
          def: "A relatively conformable succession of genetically related strata bounded above and below by unconformities (at the basin margin) or their correlative conformities (in the basin centre). One depositional sequence records one complete cycle of relative sea-level change — fall through lowstand, rise through transgression, and highstand followed by renewed fall. The sequence concept was formalised by Vail and Mitchum (1977) from analysis of seismic reflection profiles of continental margins worldwide.",
        },
        {
          term: 'Sequence boundary (SB)',
          def: "The bounding surface of a depositional sequence, formed when relative sea level falls and the shelf is subaerially exposed and eroded. At the basin margin it is an unconformity (with a hiatus); in the basin centre it grades laterally into a conformable surface (the correlative conformity) where deposition continued without interruption. Sequence boundaries are recognisable in outcrop by erosional truncation, incised valleys, and basal lags; on seismic profiles by onlap of overlying reflectors and truncation of underlying reflectors.",
        },
        {
          term: 'Systems tract',
          def: "A linkage of contemporaneous depositional systems — a package of sediments deposited during a specific phase of the relative sea-level cycle. The four systems tracts of a complete depositional sequence are: Falling-Stage (FSST), Lowstand (LST), Transgressive (TST), and Highstand (HST). Each has a characteristic position in the sequence, characteristic facies assemblage, and characteristic stacking pattern (progradational, aggradational, or retrogradational).",
        },
        {
          term: 'Maximum flooding surface (MFS)',
          def: "The stratigraphic surface recording the maximum landward extent of marine conditions — the moment when the shoreline was at its most landward position and water was deepest over the shelf. The MFS separates the Transgressive Systems Tract (below) from the Highstand Systems Tract (above). It is typically marked by organic-rich condensed marine shale (a petroleum source rock), maximum gamma-ray response on wireline logs, the most diverse and offshore fossil assemblage, and the most distal (finest) sediment across the section.",
        },
        {
          term: 'Transgressive surface (TS)',
          def: "The first significant flooding surface above a sequence boundary; marks the base of the Transgressive Systems Tract. Often expressed as a ravinement surface — a wave-cut erosion surface formed as the shoreline stepped rapidly landward during transgression, reworking beach and shoreface sand. Above the transgressive surface, facies deepen upward; below it lie the lowstand deposits or the eroded sequence boundary. Also called the transgressive ravinement surface (TRS).",
        },
        {
          term: 'Wheeler diagram',
          def: "A chronostratigraphic chart that plots stratigraphy with geological time on the vertical axis and geographic position on the horizontal axis, rather than rock thickness. Conformable deposits appear as filled rectangles; unconformities and hiatuses appear as white (empty) spaces representing missing time. Wheeler diagrams reveal what conventional cross-sections cannot: where time is missing (hiatus), how long it is missing for, and whether two packages at different locations were deposited at the same time. The maximum flooding surface appears as a true time-line extending across the entire basin.",
        },
      ],
    },
    {
      type: 'concept',
      title: 'Sequence architecture: accommodation, systems tracts, and key surfaces',
      body: `**The accommodation equation.** The fundamental control on sequence architecture is the balance between the space available for sediment to accumulate (**accommodation**) and the rate at which sediment is supplied. Accommodation is created by two processes: **subsidence** of the basin floor (driven by tectonic loading, thermal cooling, or compaction) and **eustatic sea-level rise** (a global increase in ocean volume). It is destroyed by eustatic sea-level fall and tectonic uplift. Relative sea level — the level of the sea surface relative to the basin floor — is the sum of eustasy and subsidence, and it directly controls how much accommodation exists at any moment.

When accommodation is created faster than sediment fills it (A > S), water deepens and the shoreline migrates landward: **transgression**. When sediment supply exceeds accommodation creation (S > A), the shoreline migrates seaward even as sea level rises: **normal regression**, producing a prograding shoreline with coarsening-upward facies. When sea level actually falls — when eustasy decreases faster than subsidence can compensate — the shelf is exposed to erosion regardless of sediment supply: **forced regression**, producing the sequence boundary.

**The four systems tracts.** A complete depositional sequence is subdivided into four systems tracts, each representing a phase of the relative sea-level cycle.

The **Falling-Stage Systems Tract (FSST)** is deposited during the falling limb of the sea-level curve. As the sea retreats, the shoreline is forced basinward — a forced regression. The exposed shelf is eroded, rivers incise into their earlier deposits, and sediment that formerly accumulated on the shelf is delivered directly to the shelf edge and slope. Sandy lowstand fans may accumulate on the basin floor. The FSST is bounded at its base by the previous maximum flooding surface and at its top by the sequence boundary.

The **Lowstand Systems Tract (LST)** is deposited when relative sea level is at or near its minimum. Sea level has stopped falling but has not yet begun to rise significantly. Rivers that incised valleys across the exposed shelf continue to deliver sediment to the basin margin; lowstand deltas prograde at the shelf edge. Deep-water fans and slope aprons accumulate at the base of the slope. The LST is bounded at its base by the sequence boundary.

The **Transgressive Systems Tract (TST)** is deposited during the rising limb of the sea-level curve as accommodation is created rapidly. The shoreline retreats landward (retrogrades) faster than sediment can fill the space. Estuaries and back-barrier lagoons trap much of the incoming sediment; the open shelf receives only fine-grained suspension sediment. Each successive shoreface position is landward of the previous one, so the stacking pattern is retrogradational — deepening upward. The TST begins at the transgressive surface (the ravinement surface formed as the sea flooded the lowstand deposits) and ends at the maximum flooding surface.

The **Highstand Systems Tract (HST)** is deposited when sea level has risen to its maximum and begins to decelerate. As the rate of accommodation creation slows, sediment supply begins to outpace it — normal regression. The shoreline progrades basinward, stacking coarsening-upward shoreface sequences in a progradational pattern. The HST begins at the maximum flooding surface and ends at the next sequence boundary.

**The key surfaces in detail.** The **sequence boundary** is the most important surface in the framework — it is the unconformity that defines the base and top of each sequence. In outcrop, it is recognised by incised valley fills, a basal lag of reworked clasts, and an abrupt change to shallower or more terrestrial facies. On seismic data, reflectors below the SB are truncated (erosional truncation); reflectors above onlap onto the surface. The **transgressive surface** is the first flooding surface above the SB, typically a wave-cut ravinement with a thin pebbly lag above it and deepening-upward facies above that. The **maximum flooding surface** is the most laterally continuous surface in the sequence framework — it is the only surface that is approximately time-equivalent across the entire basin, making it the primary correlation horizon. In practice, the MFS is identified by the highest gamma-ray peak on wireline logs (maximum shale content), the deepest-water fossil assemblage, and the thinnest, most condensed section (slowest deposition relative to the rest of the sequence).`,
      cards: [
        {
          name: 'The Sequence Framework',
          icon: Layers,
          color: BRAND.gold,
          desc: "One sequence = one relative sea-level cycle (fall → lowstand → rise → highstand → fall). Bounded above and below by sequence boundaries (SB): unconformity on shelf margin, correlative conformity in basin centre. Accommodation = subsidence + eustatic rise. Three outcomes: A > S → transgression; S > A → normal regression; sea level falls → forced regression → SB. Stacking patterns: retrogradational (TST, deepening-up) · progradational (HST/FSST, shallowing-up) · aggradational (near maximum flooding, vertical stacking).",
          examples: "Cretaceous Interior Seaway (N. America): multiple 3rd-order sequences driven by ~1–10 Myr eustatic cycles; each sequence = Greenhorn-type marine shale (MFS) capped by Mesaverde-type prograding shoreline (HST) · North Sea Basin: Paleocene sequences traced from well logs across entire basin using MFS gamma-ray peaks",
        },
        {
          name: 'Systems Tracts',
          icon: Mountain,
          color: BRAND.coral,
          desc: "FSST (Falling-Stage): sea level falling; forced regression; shelf exposed and eroded; sand delivered to slope and basin floor; lowstand fans begin to form. LST (Lowstand): sea level at minimum; incised valley fills; shelf-edge deltas; deep-water fans; progradational. TST (Transgressive): sea level rising; shoreline retreats landward (retrogrades); deepening-upward; sediment trapped in estuaries; fine-grained shelf; bounded below by TS, above by MFS. HST (Highstand): sea level decelerating; sediment supply > accommodation; normal regression; shoreline progrades; coarsening-upward.",
          examples: "LST sand: Gulf of Mexico Pleistocene lowstand fans — major petroleum reservoirs deposited when sea level was 120 m lower during glacial maxima · TST: Cretaceous Greenhorn Formation — fine limestone and chalk deposited during maximum transgression of the Interior Seaway · HST: Mesaverde Group — prograding shoreface sandstones of the highstand",
        },
        {
          name: 'Key Surfaces',
          icon: Clock,
          color: BRAND.amethyst,
          desc: "Sequence Boundary (SB): unconformity at shelf; correlative conformity in basin; truncation below, onlap above on seismic; incised valleys, basal lag in outcrop. Transgressive Surface (TS): first flooding surface; ravinement (wave-cut erosion) during transgression; thin pebbly lag above. Maximum Flooding Surface (MFS): deepest water; finest sediment; most offshore fossils; organic-rich condensed section (source rock); maximum gamma-ray peak on wireline log; most laterally continuous time-equivalent surface across basin — primary correlation horizon. Order in sequence: SB → (LST) → TS → (TST) → MFS → (HST) → SB.",
          examples: "MFS in subsurface: Kimmeridge Clay MFS (North Sea, ~155 Ma) — world-class petroleum source rock at maximum flooding surface · SB in outcrop: sequence boundaries in Cretaceous Book Cliffs, Utah — traced 100+ km along cliff face as coastal plain erosion surfaces",
        },
      ],
    },
    {
      type: 'concept',
      title: 'Wheeler diagrams and practical applications',
      body: `**What Wheeler diagrams reveal.** A conventional stratigraphic cross-section is plotted with depth (or thickness) on the vertical axis and geographic position on the horizontal axis. It shows the spatial distribution of rock types but compresses time: a thin section may represent a long time (slow deposition) while a thick section may represent a short time (rapid deposition), and unconformities occupy zero thickness despite representing large amounts of missing time. This makes conventional cross-sections misleading for understanding the temporal relationships between coeval deposits.

A **Wheeler diagram** — also called a chronostratigraphic chart or time-space diagram — solves this by using geological time on the vertical axis. Every horizontal line in a Wheeler diagram is a time-line — all points on it were deposited at the same moment. The width of a filled block represents the spatial extent of deposition at that time; white gaps represent hiatuses where no rock was deposited or where rock was removed by erosion. Three things become immediately apparent that are invisible in conventional cross-sections: (1) **where time is missing** — unconformities appear as wedge-shaped gaps that are widest at the basin margin (most erosion) and narrow to zero toward the basin centre (where deposition was continuous); (2) **the correlation between coeval deposits** — the transgressive systems tract on the shelf is the same age as the lowstand fan in the basin, even though they are spatially separated and lithologically different; (3) **the geometry of key surfaces** — the maximum flooding surface plots as a near-horizontal line extending continuously from the basin margin to the basin centre, confirming its status as the primary correlation horizon.

**Practical applications.** Sequence stratigraphy is the conceptual backbone of petroleum basin analysis because it predicts the spatial distribution of reservoir, source, and seal rocks before drilling. **Lowstand fans** (LST) are prime exploration targets: they are thick packages of clean sand deposited in deep water during sea-level lowstands, potentially sourced by turbidity currents from the exposed shelf. They are sealed above by the transgressive mudstones of the TST. **Maximum flooding surfaces** are associated with the organic-rich condensed sections that become petroleum source rocks — slow deposition in oxygen-poor deep water concentrates organic matter. **Highstand prograding wedges** (HST) create stratigraphic traps: as sand bodies pinch out basinward into mudstone, hydrocarbons generated in the underlying MFS shale can migrate up-dip into the sandstone and be trapped where it terminates against the overlying mudstone.

Beyond petroleum, sequence stratigraphy provides a global correlation framework. Because sequence boundaries form in response to eustatic sea-level change (a global signal), the same sequence boundary should appear — at least approximately — in every basin that was connected to the global ocean at that time. This allows rock packages on different continents to be correlated using the sequence framework even where biostratigraphic correlation is difficult. The Vail curve — a global eustatic sea-level curve derived from the sequence record of continental margins worldwide — remains one of the most ambitious attempts to reconstruct the history of global sea level through the Phanerozoic, though its accuracy is debated because distinguishing eustasy from local subsidence is inherently difficult.`,
      cards: [
        {
          name: 'Reading Sequences in Practice',
          icon: Layers,
          color: BRAND.jade,
          desc: "Wheeler diagram: time on vertical axis, space on horizontal; filled = rock deposited; white = hiatus (no deposition or erosion); makes missing time visible as gaps; MFS = continuous horizontal line across basin. Outcrop identification: SB = incised valley, lag conglomerate, erosional truncation; TS = ravinement, pebbly lag, abrupt deepening; MFS = finest facies, most marine fossils, organic shale. Wireline log signature: SB = abrupt coarsening or erosional surface; TS = sharp base of cleaning; MFS = maximum gamma-ray (shale) peak — most widely used pick in subsurface correlation. Seismic: SB = truncation below + onlap above; MFS = continuous high-amplitude reflector.",
          examples: "Book Cliffs, Utah: world's best outcrop example of sequence stratigraphy; Cretaceous sequences traced for 200+ km along cliff face; each sequence = SB → LST fluvial → TS → TST estuarine → MFS shale → HST shoreface → SB · Gulf of Mexico subsurface: LST fans (Wilcox, Frio, Miocene) = major gas and oil reservoirs sealed by TST shale",
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "What is a depositional sequence, and what surfaces form its boundaries?",
          a: [
            "A depositional sequence is any package of sedimentary rock bounded by unconformities; the bounding surfaces are always erosional gaps visible in outcrop as missing fossil zones",
            "A depositional sequence is a relatively conformable succession of genetically related strata recording one complete relative sea-level cycle; it is bounded above and below by sequence boundaries — unconformities at the basin margin that grade laterally into correlative conformities in the basin centre where deposition was continuous throughout",
            "A depositional sequence is a lithostratigraphic unit equivalent to a formation; it is bounded by changes in rock type rather than by time surfaces or erosional gaps",
            "A depositional sequence is always exactly one million years in duration; longer cycles are called supersequences and shorter ones are called parasequences, each distinguished purely by duration",
          ],
          correct: 1,
          explain: "The definition of a depositional sequence (Vail and Mitchum, 1977) has two key components: internal conformability (the strata within it are genetically related and relatively conformable with each other) and bounding surfaces (sequence boundaries). The sequence boundary is an unconformity where sea level fell and eroded the shelf — but in the basin centre, where the sea never retreated, the equivalent surface is a conformity. This dual nature (unconformity at margin, conformity in basin) is critical: it means the sequence boundary can be traced from exposed outcrops at the basin edge all the way into the deep subsurface where it is a conformable surface. Option A is too narrow — it requires unconformities everywhere, ignoring the correlative conformity. Option C confuses sequences with lithostratigraphic formations, which are defined by rock type, not time surfaces. Option D is completely wrong — sequences span a wide range of durations from ~0.1 Myr (4th-order) to ~10 Myr (3rd-order) to ~100 Myr (2nd-order), and are not defined by fixed time intervals.",
        },
        {
          q: "A stratigraphic section shows, from base to top: coarse-grained delta sandstone with incised valley fill → ravinement surface with pebble lag → deepening-upward dark shale → maximum flooding surface → coarsening-upward shoreface sandstone → sharp erosional surface with basal conglomerate. Match each unit to its systems tract and explain the sea-level event that produced each boundary.",
          a: [
            "All units belong to the HST; the vertical changes from coarse to fine to coarse simply record changing sediment supply without any sea-level change",
            "Incised valley delta = LST (sea level at minimum, rivers incise shelf); ravinement + pebble lag = transgressive surface (sea level begins rising, wave erosion as shoreline steps landward); deepening-upward shale = TST (sea level rising, retrogradational stacking); maximum flooding surface = MFS (sea level at maximum, finest facies); coarsening-upward shoreface = HST (sea level decelerating, sediment supply > accommodation, normal regression); sharp erosional surface with conglomerate = sequence boundary (sea level falls again, shelf exposed to erosion)",
            "Incised valley delta = TST; ravinement = MFS; deepening shale = HST; maximum flooding surface = SB; shoreface sandstone = LST; erosional surface = TS",
            "The sequence is upside down — in sequence stratigraphy, coarse sediment is always at the top of a sequence and fine sediment at the base; the section must have been overturned by faulting",
          ],
          correct: 1,
          explain: "This question traces a complete depositional sequence from base to top. The incised valley fill (coarse-grained delta) represents the LST: sea level was at its minimum, rivers had cut valleys across the exposed shelf, and deltas prograded at the shoreline or shelf margin. The ravinement surface with pebble lag is the transgressive surface (TS): as sea level began rising, wave erosion cut a planation surface across the LST deposits, and the pebble lag is the coarse residuum left as the shoreface migrated rapidly landward. The deepening-upward dark shale is the TST: sea level is rising, accommodation is created faster than sediment fills it, the shoreline retreats, and fine-grained sediment accumulates in increasingly deep water. The maximum flooding surface is the moment of deepest water — the boundary between TST below and HST above. The coarsening-upward shoreface sandstone is the HST: sea level has reached its maximum and begins to decelerate, sediment supply outpaces accommodation creation, and the shoreline progrades basinward in a normal regression. The sharp erosional surface with basal conglomerate is the sequence boundary: sea level falls again, the shelf is exposed to erosion, the conglomerate is a lag of reworked HST material.",
        },
        {
          q: "What is the difference between a forced regression and a normal regression? Which systems tract does each produce, and what field evidence distinguishes them?",
          a: [
            "A forced regression occurs faster than a normal regression; both produce the same systems tract (HST) but forced regressions leave thicker deposits because more sediment is delivered in less time",
            "A normal regression occurs when sediment supply exceeds the rate of accommodation creation while sea level is still rising or stable — the shoreline progrades despite positive accommodation, producing the Highstand Systems Tract; a forced regression occurs when sea level is actually falling, destroying accommodation regardless of sediment supply — the shoreline is forced basinward, producing the Falling-Stage Systems Tract; field evidence: FSST deposits step down basinward (lower elevation with each successive shoreface position), show erosional truncation at the top, and lack the estuarine/backshore facies typical of HST progradation",
            "A forced regression is driven by increased sediment supply (e.g., a glacial outwash event), while a normal regression is driven by tectonic uplift of the source area; both produce the Lowstand Systems Tract",
            "There is no meaningful distinction — both forced and normal regressions produce identical rock records; the difference is purely conceptual and has no outcrop or seismic expression",
          ],
          correct: 1,
          explain: "The distinction is fundamental and reflects different driving mechanisms with different geological consequences. A normal regression is supply-driven: sea level is rising (or stable), but the sediment arriving at the shoreline fills accommodation faster than it is created. The shoreline progrades basinward but successive shoreface positions are at the same or higher elevation — this is the HST. A forced regression is accommodation-driven: sea level is actually falling. Even with zero sediment supply, the shoreline would move seaward because the water is retreating. Successive shoreface positions step down to lower elevations — this is the FSST. The field distinction is important: FSST shoreface sandstones form inclined sheets that thin basinward and are bounded at the top by the sequence boundary (an erosion surface); HST shoreface sandstones prograde but do not step down in elevation and are topped by coastal-plain facies rather than erosion surfaces. In seismic, FSST deposits show clinoforms stepping down basinward; HST clinoforms prograde but maintain approximately the same topset elevation.",
        },
        {
          q: "Why is the maximum flooding surface (MFS) particularly important in petroleum geology, and how is it identified in the subsurface?",
          a: [
            "The MFS is important because it is the thickest part of the sequence, providing the most reservoir sand; it is identified by the thickest sand package on wireline logs",
            "The MFS is important for two reasons: (1) it is associated with organic-rich condensed sections — slow deposition in deep, oxygen-poor water concentrates organic matter, forming petroleum source rocks; (2) it is the most laterally continuous time-equivalent surface across a basin, making it the primary correlation horizon in subsurface well correlation; in the subsurface it is identified by the maximum gamma-ray (highest shale content) peak on wireline logs, the deepest-water microfossil assemblage, and the thinnest, most condensed interval",
            "The MFS is important because it marks the top of the lowstand fans where petroleum reservoir sands are thickest; it is identified by the lowest gamma-ray (cleanest sand) reading on wireline logs",
            "The MFS has no particular importance in petroleum geology; it is purely an academic concept used in theoretical sequence stratigraphy but not applied in industry",
          ],
          correct: 1,
          explain: "The MFS is commercially important for two distinct reasons. First, as a source rock horizon: the maximum flooding surface is associated with the condensed section — a thin but time-expanded package of slowly-deposited, fine-grained, organic-rich sediment. In deep, stratified, oxygen-poor water, organic matter is preserved rather than oxidised, and very slow sedimentation rates concentrate it further. Major petroleum source rocks — the Kimmeridge Clay (North Sea), the Devonian Marcellus Shale (Appalachians), and many others — occur at or near maximum flooding surfaces. Second, as a correlation horizon: because the MFS records a global event (maximum transgression), it is approximately time-equivalent across the basin and even between basins. In practical subsurface work, the MFS is the most widely picked horizon in wireline log correlation because it produces a distinctive maximum gamma-ray peak (highest clay and organic content) that is reproducible between wells. Option A incorrectly associates the MFS with reservoir sands — the MFS is actually the finest-grained part of the sequence. Option C reverses the log signature — clean sand produces low gamma-ray, but the MFS is shale (high gamma-ray). Option D is demonstrably wrong — the MFS is one of the most actively used concepts in the petroleum industry.",
        },
        {
          q: "What does a Wheeler diagram show that a conventional stratigraphic cross-section cannot, and why is this useful for understanding basin history?",
          a: [
            "A Wheeler diagram shows the three-dimensional geometry of sedimentary bodies, which conventional two-dimensional cross-sections cannot capture; this allows volume calculations for reservoir estimation",
            "A Wheeler diagram plots geological time on the vertical axis instead of rock thickness, making hiatuses (unconformities) visible as empty white spaces proportional to the time missing; this reveals: (1) where and when time is missing across the basin; (2) that coeval deposits in different locations (e.g., a lowstand fan in the basin and a shoreface on the shelf) were deposited at the same time even though they are spatially separated; (3) the maximum flooding surface as a true time-line extending continuously across the basin — the primary correlation surface",
            "A Wheeler diagram shows palaeocurrent directions and sediment transport pathways, which cannot be derived from a simple thickness cross-section; this allows reconstruction of ancient drainage systems",
            "A Wheeler diagram and a conventional stratigraphic cross-section show exactly the same information, just plotted differently; neither has an advantage over the other for interpreting basin history",
          ],
          correct: 1,
          explain: "The Wheeler diagram (introduced by Harry Wheeler in 1958) is specifically designed to make time — including missing time — visible. In a conventional stratigraphic cross-section, an unconformity is a line (zero thickness) despite representing, say, 50 million years of erosion. In a Wheeler diagram, that same unconformity is a wedge-shaped white gap 50 million years tall on the time axis. Three insights follow immediately: (1) The lateral variation of hiatuses is visible — the gap is widest at the basin margin (most erosion) and pinches out toward the basin centre (where deposition was continuous). (2) The time-equivalence of geometrically separate deposits is revealed — the basin-floor fan deposited during the lowstand occupies the same horizontal time band as the ravinement surface on the shelf margin, confirming they are the same age even though they look nothing alike and are 200 km apart. (3) The maximum flooding surface appears as a true horizontal time-line, confirming it is the best correlation surface. These insights are completely invisible in a conventional cross-section, which distributes all this information only spatially, not temporally.",
        },
      ],
    },
  ],
}

export default sequenceStratigraphy
