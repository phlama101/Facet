import { Layers, Mountain, Clock } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const stratigraphicColumn: Lesson = {
  id: 'geol-201-2-2-4',
  title: 'Reading a Stratigraphic Column',
  track: 'geo',
  trackName: 'Geology',
  level: 'Intermediate',
  duration: '20 min',
  xpReward: 250,
  description: "A stratigraphic column is the most fundamental document in sedimentary geology — a scaled, annotated vertical diagram of a rock sequence that condenses hours of field measurement into a single graphic that reconstructs the history of an ancient landscape.",
  sources: [
    { org: 'USGS',     title: 'Geologic Field Methods — Public Domain',        url: 'https://www.usgs.gov/science/science-explorer/geology' },
    { org: 'OpenStax', title: 'Physical Geology, 2nd ed., Ch. 9 (CC-BY 4.0)', url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'AGI',      title: 'Glossary of Geology, 5th ed.',                  url: 'https://www.americangeosciences.org/pubs/glossary' },
  ],
  sections: [
    {
      type: 'intro',
      title: "The geologist's field notebook",
      body: `A stratigraphic column — also called a measured section — is the most fundamental document in sedimentary geology. It is a scaled, annotated vertical diagram of a rock sequence, drawn in the field by walking up an outcrop with a measuring tape and a notebook, recording every change in rock type, grain size, sedimentary structure, colour, and fossil content. The result is a graphic that can be read by any geologist anywhere in the world, instantly: from a good stratigraphic column you can reconstruct the history of an ancient landscape without ever visiting the outcrop yourself.

The conventions for drawing and reading stratigraphic columns are internationally standardised. Older rocks go at the bottom, younger at the top — the law of superposition expressed graphically. The width of the column encodes grain size: the wider the column, the coarser the sediment. The shape of the left margin traces the grain-size curve — a record of how energy changed through time. Lithological symbols (dots for sandstone, lines for shale, bricks for limestone) tell you the rock type at a glance. Contact types (gradational, sharp, erosional) tell you whether the environment changed slowly or abruptly. Sedimentary structure symbols (cross-beds, ripples, hummocky lamination) tell you the energy and style of deposition. Fossils tell you the biological community. Together, these elements allow reconstruction of depositional environment, sea-level history, and sometimes even climate — all from a sketch and a scale bar.

This lesson is a practical guide to reading that document.`,
      keyTerms: [
        {
          term: 'Measured section (stratigraphic column)',
          def: "A scaled vertical graphic representation of a sedimentary sequence, measured in the field by recording every change in lithology, grain size, sedimentary structures, colour, fossils, and contacts from base to top of an outcrop. The vertical scale is proportional to true stratigraphic thickness (corrected for structural dip if necessary). Standard conventions include: oldest at bottom, youngest at top; column width proportional to grain size; internationally agreed lithological symbols; annotated sedimentary structures and fossils at their occurrence horizons.",
        },
        {
          term: 'Grain-size curve',
          def: "The left margin of a stratigraphic column, which traces the change in grain size from bottom to top. Because column width is proportional to grain size, the margin curves left for fine-grained intervals (shale) and right for coarse-grained intervals (sand, gravel). Fining-upward trends appear as the margin moving left with height; coarsening-upward trends move right. The grain-size curve is the most immediately readable environmental signal on the column — it records changes in depositional energy through time.",
        },
        {
          term: 'Fining-upward sequence',
          def: "A stratigraphic interval in which grain size decreases upward, expressed as the column narrowing toward the top. Records decreasing depositional energy through time. Classic fining-upward packages include: fluvial point bar (coarse lag → cross-bedded sand → overbank silt/mud); turbidite Bouma sequence (massive graded sand → laminated sand → rippled sand → silt → mud); transgressive marine (sand → siltstone → shale as water deepens).",
        },
        {
          term: 'Coarsening-upward sequence',
          def: "A stratigraphic interval in which grain size increases upward, expressed as the column widening toward the top. Records increasing depositional energy or shallowing water through time — progradation of a higher-energy system over a deeper, quieter one. Classic coarsening-upward packages: delta progradation (offshore mud → prodelta silt → delta-front sand → distributary channel); shoreface progradation (offshore shale → storm sand → shoreface sand); submarine fan lobe switching.",
        },
        {
          term: 'Contact type',
          def: "The nature of the boundary between two rock units in a stratigraphic column. Three main types: (1) Gradational — lithology or grain size changes progressively over centimetres to metres; continuous deposition with gradual environmental change; drawn as a wavy or diffuse line. (2) Sharp — abrupt change with no transition; rapid environmental shift or brief pause in deposition; drawn as a straight line. (3) Erosional — sharp contact with physical evidence of removal: irregular or scoured base, rip-up clasts of underlying rock at the base of the overlying unit; indicates a channel scour, unconformity, or turbidite base; drawn as a jagged or irregular line.",
        },
        {
          term: 'Correlation',
          def: "The process of establishing time equivalence between rock units in different sections or boreholes. Correlation relies on matching distinctive horizons — volcanic ash layers (isochrons that are the same age everywhere), index fossil zones, geochemical anomalies, or recognisable sequence boundaries — between columns from different locations. Successful correlation demonstrates either lateral continuity of a facies (the same environment extended between the two sections) or lateral facies change (the same time interval records different environments in different places, consistent with Walther's Law and sequence stratigraphy).",
        },
      ],
    },
    {
      type: 'concept',
      title: 'Anatomy of a stratigraphic column: symbols, contacts, and grain-size curves',
      body: `**Structure and width convention.** The vertical axis of a stratigraphic column is always depth or height, with the oldest rock at the base and the youngest at the top. The horizontal axis encodes grain size: by international convention, the column is widest for the coarsest sediment (conglomerate) and narrowest for the finest (shale or mudstone). The left margin of the column — the grain-size curve — is therefore a continuous record of how depositional energy changed through time. A column that narrows upward (fining-upward) records decreasing energy; one that widens upward (coarsening-upward) records increasing energy or shallowing water. This single graphical convention conveys more environmental information at a glance than any written description.

**Lithological symbols.** Every rock type has an internationally standardised symbol that allows geologists worldwide to read each other's columns without needing written descriptions. The most important are: horizontal lines for shale and mudstone (the finest, most horizontally laminated rocks); dashes for siltstone; fine dots for fine sandstone; coarser dots for medium to coarse sandstone; circles or ovals for conglomerate (representing individual pebbles); a brick pattern for limestone; rhombuses for dolomite; a solid black band for coal; and triangles or a stippled band for volcanic ash (tuff). Colour conventions also carry information: red and brown colours indicate oxidising terrestrial conditions (iron as haematite); grey and black indicate reducing conditions (organic matter preserved, often marine or swamp); green indicates marine minerals such as glauconite or chlorite.

**Contact types.** The boundary between two rock units reveals as much as the units themselves. A **gradational contact** — where lithology and grain size change progressively over several centimetres or metres — records continuous deposition during a gradual environmental change, such as a slow deepening or shallowing of water. A **sharp contact** — an abrupt change with no transition — records either a rapid environmental shift (a storm event, a sudden sea-level change) or a brief pause in deposition. An **erosional contact** — sharp, irregular, jagged, with fragments of the underlying rock incorporated as rip-up clasts at the base of the overlying unit — records physical removal of material: a river channel cutting into its floodplain, a turbidity current eroding the seafloor, or a wave ravinement surface during transgression. Erosional contacts are the field expression of unconformities or intraformational scour surfaces.

**Annotated features.** Beyond lithology and contacts, a stratigraphic column records the sedimentary structures present at each horizon, because structures are the most direct indicators of depositional process. Cross-bedding (chevron symbols inclined in the dip direction) records migrating bedforms under unidirectional flow; the dip direction gives paleoflow. Ripple lamination records lower-velocity flow or wave oscillation. Hummocky cross-stratification (dome-shaped symbols) records storm-wave action below fair-weather wave base. Parallel lamination records high-velocity plane-bed flow or settling from suspension. Bioturbation symbols (spirals for Skolithos pipe burrows, asterisks for star-shaped traces) record the activity of burrowing organisms — a proxy for water oxygenation and sedimentation rate. Graded bedding (a triangle widening downward, representing grains getting coarser at the base) is the hallmark of turbidites. Mudcracks (inverted V symbols) record subaerial exposure and desiccation. Fossils — marine shells, plant material, vertebrate fragments — are marked at their occurrence horizons and provide direct biological context.`,
      cards: [
        {
          name: 'Reading the Column',
          icon: Layers,
          color: BRAND.gold,
          desc: "Vertical axis: height/depth; oldest at base, youngest at top. Width = grain size: wide = conglomerate, narrow = shale; left margin = grain-size curve. Fining-upward = column narrows = decreasing energy or deepening. Coarsening-upward = column widens = increasing energy or shallowing. Lithological symbols: horizontal lines = shale · dashes = siltstone · fine dots = fine sandstone · coarser dots = coarse sandstone · circles = conglomerate · brick pattern = limestone · solid black = coal · triangles = volcanic ash/tuff. Colour: red/brown = terrestrial oxidising · grey/black = reducing, marine or swamp · green = marine glauconite.",
          examples: "Fining-upward turbidite: wide base (massive graded sand) → narrowing column (laminated sand → rippled sand → silt → mud) · Coarsening-upward delta: narrow base (offshore shale) → widening column (prodelta silt → delta front sand → distributary channel)",
        },
        {
          name: 'Contact Types',
          icon: Mountain,
          color: BRAND.coral,
          desc: "Gradational contact: grain size changes progressively over cm–m; drawn as diffuse or wavy line; indicates continuous deposition, gradual environmental change. Sharp contact: abrupt lithological change with no transition; drawn as straight line; indicates rapid environmental shift or brief pause in deposition. Erosional contact: sharp + irregular/jagged base + rip-up clasts of underlying rock; drawn as jagged line; indicates channel scour, unconformity, turbidite base, or ravinement surface — material physically removed before new deposition. Key rule: identify contact type first, then interpret — a gradational deepening and a sharp deepening record very different geological events.",
          examples: "Gradational: fine sand → silt → shale over 2 m (7 ft) = progressive offshore deepening · Sharp: shale directly on limestone with no transition = abrupt flooding event or brief exposure · Erosional: scoured base with limestone rip-ups in overlying sandstone = river channel cutting into limestone floodplain",
        },
        {
          name: 'Annotated Features',
          icon: Clock,
          color: BRAND.amethyst,
          desc: "Sedimentary structures as process indicators: cross-bedding (chevrons) = migrating bedforms, unidirectional flow, dip = paleoflow direction · ripple lamination = lower velocity flow or wave oscillation · hummocky cross-stratification (dome symbols) = storm waves below fair-weather wave base · parallel lamination = plane-bed high velocity or suspension settling · graded bedding (tapering triangle) = turbidite/waning flow · mudcracks (inverted V) = subaerial exposure, desiccation · bioturbation (spirals, asterisks) = oxygenated water, burrowing organisms. Fossils at horizon: marine shells = marine conditions · plant/rootlet traces = terrestrial · palaeosol (P symbol) = prolonged exposure and soil formation.",
          examples: "Bioturbation index: BI 0 = no burrows (anoxic or rapid deposition) → BI 6 = completely homogenised (slow deposition, oxygenated) · Paleoflow from cross-bedding dip direction: consistent NE dip across 10 km (6.2 mi) = ancient river flowing NE · Mudcracks above limestone = lake or tidal flat exposure between carbonate deposition events",
        },
      ],
    },
    {
      type: 'concept',
      title: 'Reconstructing history and correlating between sections',
      body: `**Reading a composite column: a worked example.** Consider a 40-metre composite section measured in an outcrop (described from base to top). The lowest 5 metres are grey-black shale with horizontal lamination and pyrite nodules, containing sparse marine microfossils — this records a quiet, oxygen-poor offshore shelf, below storm wave base. From 5 to 12 metres, interbedded siltstone and fine sandstone with hummocky cross-stratification and marine bioturbation records the storm-influenced shoreface, between fair-weather and storm wave base. From 12 to 18 metres, medium sandstone with symmetric wave ripples and shell fragments — with a sharp but non-erosional base — records the upper shoreface or beach, in the high-energy wave zone. These three intervals together represent a **coarsening-upward regression**: the column widens progressively from 0 to 18 metres as the shoreface prograded basinward.

At 18–19 metres, a jagged erosional contact with sandstone rip-up clasts marks a major change. From 19 to 28 metres, red-brown mudstone with carbonate nodules (caliche), root traces, and desiccation cracks records a **terrestrial floodplain** with a developed palaeosol — clear evidence of prolonged subaerial exposure. This interval, taken together with the erosional contact below it, is the **sequence boundary**: the sea retreated, the shoreface was eroded, and the exposed surface was colonised by vegetation and developed a soil. From 28 to 32 metres, cross-bedded medium to coarse sandstone with a scoured base and fining-upward profile is a **fluvial channel fill** — a river cutting across the exposed shelf during lowstand. At 32 metres, a gradational contact leads upward into grey marine shale with diverse marine microfossils by 40 metres — this gradual deepening records the **next transgression**, as the sea flooded back over the fluvial system.

The complete section records: offshore shelf (HST distal) → regressive shoreface (HST) → sequence boundary → terrestrial floodplain (FSST/LST) → fluvial channel (LST) → renewed transgression (TS and base of TST). One complete depositional sequence, readable from a 40-metre column.

**Correlation between sections.** The real power of a stratigraphic column is unlocked when two or more sections from different locations are compared. Correlation — establishing which intervals in different sections are the same age — requires distinctive tie points. The most reliable is a **volcanic ash layer** (tuff): ash from a single eruption settles globally within days to years and is therefore the same age everywhere. If the same distinctive ash chemistry appears in two sections 50 km (31 mi) apart, every bed above the ash in one section is correlative with the beds above the ash in the other. The difference in height of the ash within each section reflects differences in local sedimentation rate: if the ash is 10 metres above the base in section A and 5 metres above the base in section B, section A accumulated twice as much sediment in the same pre-ash time interval — either a higher sedimentation rate or a greater accommodation.

Other correlation tools include **index fossil zones** (the first or last appearance of a distinctive organism at the same geological moment everywhere it lived), **geochemical anomalies** (the iridium spike at the K-Pg boundary), and **sequence boundaries** (which should correlate between sections if driven by the same eustatic fall). In the subsurface, correlation is done between borehole logs — the same principles apply, but the data come from wireline measurements of resistivity, gamma-ray, and density rather than from direct observation. Fence diagrams — multiple columns displayed side by side with correlation lines connecting equivalent surfaces — allow the three-dimensional geometry of basins to be reconstructed from point data.`,
      cards: [
        {
          name: 'Correlation and Interpretation',
          icon: Layers,
          color: BRAND.jade,
          desc: "Correlation tools: volcanic ash (tuff) = isochron, same age everywhere — most reliable tie point; index fossil FAD/LAD = same biological event; geochemical anomalies (iridium, δ¹³C excursion); sequence boundaries (correlate if eustatic). Correlation reveals: (a) lateral continuity — same facies in both sections at same time = environment extended between them; (b) lateral facies change — different lithologies at same time = different environments coexisted (Walther's Law in action). Fence diagrams: multiple columns side by side with correlation lines = 3D basin reconstruction. Sedimentation rate from ash height: if same ash is 10 m (33 ft) up in section A and 5 m (16 ft) up in section B, section A had 2× the sedimentation rate pre-ash.",
          examples: "Correlation using Cretaceous bentonites (altered ash): same distinctive orange bentonite traced 400 km (249 mi) across Western Interior Basin seaway · K-Pg iridium layer: correlated between marine and continental sections on 6 continents — defines the boundary globally · Book Cliffs, Utah: HST shoreface sandstones correlated 200 km (124 mi) along cliff face using sequence boundaries and MFS shale markers",
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "On a standard stratigraphic column, what does column width represent, and why is this convention useful for environmental interpretation?",
          a: [
            "Column width represents stratigraphic thickness — a wider column means more rock was deposited in that interval; this shows which intervals had the highest sedimentation rates",
            "Column width represents grain size — the column is widest for the coarsest sediment (conglomerate) and narrowest for the finest (shale); this allows the grain-size curve (left margin) to be read at a glance as a record of changing depositional energy, making fining-upward and coarsening-upward trends immediately visible without reading a written description",
            "Column width represents time — a wider column means more time elapsed during that interval; this allows absolute ages to be read directly from the column width",
            "Column width represents the lateral extent of the rock unit — wider columns indicate more regionally extensive deposits, narrower columns indicate local lenses",
          ],
          correct: 1,
          explain: "Grain size is the primary environmental signal encoded in the width of a stratigraphic column. By international convention, conglomerate (coarsest) plots at maximum width and shale/mudstone (finest) plots at minimum width. This means the left margin of the column — the grain-size curve — is a continuous record of how depositional energy changed through time: a column that narrows upward is a fining-upward sequence (decreasing energy, typical of deepening water, channel abandonment, or waning turbidity current); a column that widens upward is a coarsening-upward sequence (increasing energy, typical of shallowing, delta progradation, or shoreface advance). This single graphic convention encodes more environmental information than a written description and allows any trained geologist to read the section instantly. Option A confuses width with thickness — thickness is represented by the vertical scale, not the horizontal. Option C incorrectly equates width with time. Option D confuses stratigraphic column conventions with map symbols.",
        },
        {
          q: "A stratigraphic column shows a sharp, jagged contact with fragments of underlying mudstone incorporated at the base of an overlying sandstone. What type of contact is this, and what does it indicate about the depositional history?",
          a: [
            "A gradational contact, because the transition from mudstone to sandstone represents a gradual increase in energy; the fragments are bioturbated structures rather than rip-up clasts",
            "An erosional contact, indicating that physical erosion removed some of the underlying mudstone before the sandstone was deposited; the mudstone fragments (rip-up clasts) were torn from the substrate by the eroding agent — a river current, turbidity current, or wave ravinement — and redeposited at the base of the overlying sand; this contact may represent a channel scour surface, a turbidite base, a transgressive ravinement, or an unconformity",
            "A conformable sharp contact, indicating an abrupt environmental change from mudstone to sandstone deposition with no erosion; the fragments at the base are early diagenetic concretions within the sandstone",
            "A tectonic contact (fault), because abrupt grain-size changes always indicate displacement; the mudstone fragments are fault breccia rather than sedimentary rip-up clasts",
          ],
          correct: 1,
          explain: "An erosional contact is defined by three criteria, all present here: (1) sharpness — no gradational transition; (2) irregularity — the jagged or scoured geometry of the contact itself records the morphology of the erosion surface; (3) rip-up clasts — fragments of the underlying rock incorporated at the base of the overlying unit, proving that the substrate was physically torn apart and redeposited. These clasts are the definitive indicator of erosion rather than abrupt environmental change. The eroding agent could be a river channel cutting into muddy floodplain sediment (leaving a channel lag conglomerate), a turbidity current eroding the seafloor (leaving a turbidite base with mudstone clasts), a wave ravinement surface during transgression, or the erosion surface forming an unconformity (sequence boundary). Option A describes a gradational contact, which is defined by a progressive change over distance — inconsistent with the sharp, jagged description. Option C calls it conformable but an erosional contact with rip-ups is, by definition, not conformable. Option D incorrectly interprets a sedimentary contact as a fault.",
        },
        {
          q: "A column shows, from base to top: fine sandstone with marine fossils → siltstone → grey shale → organic-rich dark shale with diverse marine microfossils. The column narrows progressively upward. What does this succession record?",
          a: [
            "A regression — as grain size decreases upward the environment is becoming shallower and higher energy; organic-rich shale at the top records a beach or tidal flat",
            "A transgression — the fining-upward succession records deepening water as the shoreline migrated landward; fine sandstone (shallow shoreface) grades up through siltstone (lower shoreface/offshore transition) to grey shale (inner shelf) to organic-rich dark shale (deeper shelf or approaching maximum flooding), consistent with a rising sea level and retrogradational stacking of the Transgressive Systems Tract",
            "A turbidite sequence — fining upward from sand to shale is the Bouma sequence, and the diverse microfossils at the top are deep-water pelagic organisms characteristic of abyssal conditions",
            "A fluvial succession — fine sandstone is a river channel, siltstone is overbank, grey shale is floodplain mud, and the dark shale with organic material is a swamp or coal-forming environment",
          ],
          correct: 1,
          explain: "The four key observations all point in the same direction: (1) fining upward — the column narrows, grain size decreases, energy decreases, water deepens; (2) the base has marine fossils in fine sandstone — a shallow marine (shoreface or inner shelf) setting; (3) the succession grades progressively upward through siltstone to grey shale to organic-rich dark shale — these represent progressively deeper and more distal environments; (4) the organic-rich dark shale with diverse marine microfossils is the typical facies associated with a maximum flooding surface — slow, deep-water deposition in oxygen-poor water that preserves organic matter, with diverse planktonic microfossil communities. This is the Transgressive Systems Tract: as sea level rose, the shoreline stepped landward and each successive time horizon recorded a deeper environment than the one before. Option A gets the direction completely backwards — decreasing grain size means decreasing energy and deepening, not shallowing. Option B correctly identifies the Bouma sequence pattern but misapplies it — the section has marine invertebrate fossils and diverse microfossils, not the abyssal pelagic fauna of truly deep water; also, Bouma sequences are individual beds (centimetre to metre scale), not the environmental succession described. Option D is inconsistent with the marine fossils throughout.",
        },
        {
          q: "A column shows three identical packages, each consisting of (base to top): grey offshore shale → hummocky sandstone → wave-rippled sandstone → sharp erosional surface with rip-up clasts. What geological process produces this repeated pattern, and what is the stratigraphic significance of the erosional surfaces?",
          a: [
            "Each package represents one turbidite event; the erosional surface at the top is the scouring base of the next turbidity current; three packages = three submarine landslide events",
            "Each package records a shallowing-upward regression — deepwater shale prograding to storm-wave hummocky sand to shallow wave-rippled sand — followed by a sequence boundary (the sharp erosional surface with rip-ups) when sea level fell and the exposed shoreface was eroded; three packages = three transgressive-regressive cycles with three sequence boundaries, most likely driven by repeated eustatic sea-level falls",
            "Each package represents one storm event; the offshore shale is calm-weather deposition, the hummocky sand is storm deposition, the wave-rippled sand is post-storm reworking, and the erosional surface is the base of the next storm — three packages = three storms",
            "The pattern is purely diagenetic — burial compaction alternately consolidated and loosened the sediment, producing repeated apparent grain-size changes with no environmental significance",
          ],
          correct: 1,
          explain: "The package architecture is a classic shallowing-upward coarsening-upward regression: grey offshore shale (below storm wave base, quiet deep water) → hummocky cross-stratified sandstone (storm wave base zone, ~50–100 m (164–328 ft) depth) → wave-rippled sandstone (fair-weather wave zone, <20 m (66 ft)). Each upward step represents a shallower environment — the shoreface prograded basinward as sea level fell or sediment supply exceeded accommodation. The sharp erosional surface with rip-up clasts at the top of each package is the sequence boundary: sea level fell, the shoreface was exposed to erosion, and the wave-reworked sandstone was stripped back. The erosional clasts (rip-ups) in the contact zone are fragments of the shoreface sandstone incorporated at the base of the overlying package. Three repetitions = three eustatic cycles — the most common driver for packages of this thickness (metres to tens of metres) is orbital forcing (Milankovitch cycles). Option A misidentifies the succession as turbidites — turbidites have a Bouma sequence (massive graded base → laminated sand → rippled sand → silt → mud) and are not preceded by hummocky sand or offshore shale in this repeated way; also, erosional surfaces in turbidites are at the base of each bed, not the top. Option C misidentifies individual storm beds with what is actually a succession of depositional environments — a storm event produces a single amalgamated bed, not a multi-metre coarsening-upward package.",
        },
        {
          q: "Two stratigraphic sections 50 km (31 mi) apart both contain the same distinctive 10 cm (3.9 in) white volcanic ash layer, but the ash is 15 metres above the base of section A and only 8 metres above the base of section B. What does the ash layer allow geologically, and what does the height difference tell you?",
          a: [
            "The ash layer confirms that the two sections are in different stratigraphic sequences — same-age deposits cannot appear at different heights in different sections, so the ash must represent two separate eruptions",
            "The ash layer is an isochron — it was deposited globally at the same instant from a single eruption, so every bed below the ash in both sections is older than every bed above it; this correlation ties the two sections to a common time datum; the height difference (15 m (49 ft) vs. 8 m (26 ft)) indicates that section A accumulated nearly twice as much sediment as section B in the same pre-ash time interval — section A had a higher sedimentation rate, greater accommodation, or was in a more proximal, higher-energy setting",
            "The height difference proves that section A was tilted by faulting after deposition — in the original horizontal state, the ash would have been at the same height in both sections; the 7 m (23 ft) discrepancy is a structural offset",
            "The ash layer is useful only if the two sections are within 1 km (0.6 mi) of each other; at 50 km (31 mi), wind dispersal would have produced two ash layers of different ages at different elevations, and they cannot be correlated",
          ],
          correct: 1,
          explain: "Volcanic ash layers are among the most powerful stratigraphic tools available because a single explosive eruption deposits ash globally within days to years — geologically instantaneous. The ash is therefore a true time-marker (isochron): every rock below the ash in any section predates the eruption; every rock above it postdates the eruption. This allows perfect time correlation between sections regardless of how different the sediment looks above and below the ash in each section. The height difference does not mean the ash is at different ages — it means different amounts of sediment accumulated before the ash in each location. Section A has 15 m (49 ft) of pre-ash sediment; section B has only 8 m (26 ft). If both started at the same time (same base), section A accumulated 15/8 ≈ 1.9 times more sediment before the eruption — a higher local sedimentation rate, deeper accommodation, or a more proximal (closer to source) position. This information is itself geologically valuable: it constrains the geometry of the basin and the distribution of depositional environments at the time. Option A is wrong — the same eruption absolutely can appear at different heights in different sections (that is the point); the heights record local sedimentation rates, not different eruptions. Option C misinterprets sedimentary thickness variation as tectonic offset — structural tilt would require the ash to be physically inclined, not simply at different elevations in two vertical sections. Option D is wrong — volcanic ash from large eruptions is routinely correlated across thousands of kilometres; some major tephras are identified on multiple continents.",
        },
      ],
    },
  ],
}

export default stratigraphicColumn
