import { Layers, Mountain } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const stratigraphicSections: Lesson = {
  id: 'geol-201-2-5-3',
  title: 'Measuring and Recording Stratigraphic Sections',
  track: 'geo',
  trackName: 'Geology',
  level: 'Intermediate',
  duration: '20 min',
  xpReward: 250,
  description: `A measured stratigraphic section — a systematic, metre-by-metre record of every bed, its thickness, its grain size, its colour, its sedimentary structures, and its contacts — is the primary data product of sedimentary fieldwork. This lesson covers the Jacob\'s staff technique, the Wentworth grain-size scale, Munsell colour notation, the six most common sedimentary structures, and how to construct a graphic log.`,
  sources: [
    { org: 'USGS', title: 'Field Methods in Sedimentary Geology — Public Domain', url: 'https://pubs.usgs.gov/of/2003/of03-191/' },
    { org: 'USDA', title: 'Munsell Soil Color Charts — reference standard', url: 'https://www.nrcs.usda.gov/resources/guides-and-instructions/munsell-soil-color-charts' },
    { org: 'OpenStax', title: 'Physical Geology, 2nd ed., Ch. 9 (CC-BY 4.0)', url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'PRI', title: 'Earth@Home: Sedimentary Environments', url: 'https://earthathome.org' },
    { org: 'AGI', title: 'Glossary of Geology, 5th ed.', url: 'https://www.americangeosciences.org/pubs/glossary' },
    { org: 'SEPM', title: 'Sedimentary Structures — Educational Resources (SEPM)', url: 'https://www.sepm.org' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The section is the data',
      body: `Before any geological interpretation can be made, someone has to measure and describe the rock. A measured stratigraphic section — a systematic, metre-by-metre record of every bed, its thickness, its grain size, its colour, its sedimentary structures, and its contacts — is the primary data product of sedimentary fieldwork. Everything else — palaeoenvironmental reconstruction, sequence stratigraphic analysis, biostratigraphic correlation — depends on having an accurate, complete, reproducible physical description of what is actually there.

This is painstaking work. A 30 m (98 ft) section can take a full day. But the discipline pays off: a measured section recorded by a geologist in 1967 can still be used directly by a geologist in 2025 if it was recorded correctly — same bed thicknesses, same grain sizes, same Munsell colours, same sedimentary structures. That reproducibility, achieved through standardised methods and notations, is what makes geological data scientific rather than merely observational.`,
      keyTerms: [
        {
          term: 'measured section',
          def: "A quantitative, bed-by-bed description of a stratigraphic sequence from a defined base to a defined top, including true bed thickness, lithology, grain size, colour, sedimentary structures, contact types, and fossil content. Distinguished from a 'sketch section' (approximate) or a 'described section' (qualitative) by its use of instruments (Jacob's staff, tape measure, compass) to measure true thicknesses rather than apparent or paced thicknesses.",
        },
        {
          term: "Jacob's staff",
          def: "A measuring rod of fixed length (1.5 m (5 ft) or 1.0 m (3 ft)) with a clinometer attachment fixed at one end. When the clinometer is set to the measured dip angle of the beds and the staff held at that angle, the top of the staff represents the same stratigraphic horizon as the base — the staff length equals the true stratigraphic thickness of the interval traversed, without trigonometric correction for topographic slope.",
        },
        {
          term: 'Wentworth scale',
          def: 'The standard grain-size classification scheme for sedimentary particles, based on powers of 2 in millimetres. Main divisions: clay (<0.004 mm (0.00 in), 4 μm); silt (0.004–0.063 mm (0.00–0.00 in)); sand (0.063–2 mm (0.00–0.08 in), subdivided into very fine/fine/medium/coarse/very coarse); granule (2–4 mm (0.08–0.16 in)); pebble (4–64 mm (0.16–2.52 in)); cobble (64–256 mm (2.52–10.08 in)); boulder (>256 mm (10.08 in)). Named for Chester Wentworth (1922). Provides the grain-size axis of a graphic log.',
        },
        {
          term: 'Munsell colour notation',
          def: 'A standardised three-parameter colour description system used in geology and soil science to remove observer subjectivity from colour description. Parameters: Hue (the spectral colour family, e.g., 10YR = yellow-red); Value (lightness, 0 = black to 10 = white); Chroma (colour saturation, 0 = grey). Written as: Hue Value/Chroma (e.g., 10YR 6/4 = light yellowish brown — a common sandstone colour). The rock chip is matched visually to printed colour standards in the Munsell Geological Rock Color Chart under consistent, preferably natural-daylight conditions.',
        },
        {
          term: 'graphic log (graphic column)',
          def: 'A standardised visual representation of a measured stratigraphic section. Columns from left to right typically include: cumulative thickness, bed number, lithology symbol column (width may represent grain size), grain-size column, Munsell colour, sedimentary structures (drawn symbolically), contact types, fossil content, and field notes. Standard lithology symbols: shale = horizontal lines; siltstone = dashes; sandstone = dots (coarser = larger dots); limestone = brick pattern; conglomerate = circles; coal = solid black.',
        },
        {
          term: 'contact (sedimentary)',
          def: 'The boundary between two successive beds in a sedimentary succession. Types: sharp (boundary located within <1 cm (0.4 in); abrupt change in lithology); gradational (boundary diffuse over several cm to >1 m (3 ft), with beds merging gradually); erosive (the base of the upper bed incises into the lower bed, indicating a scour surface — a common base for channel sands); conformable (no time gap; beds parallel); unconformable (time gap, beds may be discordant in dip).',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Measuring and describing a stratigraphic section',
      body: `**The Jacob's staff technique.** The Jacob's staff is a 1.5 m (5 ft) (or 1.0 m (3 ft)) measuring rod with a clinometer fixed at the top end. To use it: (1) measure the dip of the beds at the section locality; (2) set the clinometer to the measured dip angle; (3) hold the base of the staff on the current stratigraphic horizon and the top of the staff in the upward stratigraphic direction. Because the clinometer angle matches the bed dip, the top of the staff projects along the same dipping surface as the base — meaning the vertical height traversed by one staff length equals the true stratigraphic thickness (1.5 m (5 ft)). This eliminates the need for a trigonometric correction when measuring on a slope. Record each staff placement as one increment on the cumulative thickness log. For flat-lying sections, a horizontal tape measure with GPS georeferencing suffices.

**The Wentworth grain-size scale.** Classification by grain size is the primary basis for naming clastic sedimentary rocks. The Wentworth scale divides grains by successive factors of 2 in millimetres: Clay (<0.004 mm (0.00 in)): lithifies to mudstone/shale; settles from suspension in very low-energy environments. Silt (0.004–0.063 mm (0.00–0.00 in)): lithifies to siltstone; deposited in low-energy settings (distal floodplains, prodelta, deep-marine). Sand (0.063–2 mm (0.00–0.08 in)): lithifies to sandstone; subdivided as very fine/fine/medium/coarse/very coarse; deposited in moderate-energy environments (rivers, beaches, aeolian dunes, turbidite currents). Gravel (2–256 mm (0.08–10.08 in)): lithifies to conglomerate (rounded) or breccia (angular); deposited in high-energy settings (braided rivers, alluvial fans, beaches, glacial outwash). Field determination: sand grains are visible and feel gritty; silt feels slightly gritty; clay feels smooth and plastic when wet. A printed grain-size card held against the rock in raking light is the standard field tool.

**Munsell colour notation.** Colour is a key descriptive variable in sedimentary geology — reflecting iron oxidation state, carbonate content, and organic content — but colour perception varies between observers and under different lighting. Munsell provides an objective notation with three parameters: *Hue* (spectral colour family, e.g., 10YR = yellow-red); *Value* (lightness 0–10, where 0 = black and 10 = white); *Chroma* (saturation, where 0 = neutral grey). Written as: Hue Value/Chroma (e.g., 10YR 6/4 = light yellowish brown; 5YR 5/6 = yellowish red). To use: compare a freshly broken, moist chip of the rock to the Munsell chips under consistent (preferably natural daylight) lighting. Record both dry and moist colours if they differ significantly.

**Contact types.** Each bed boundary is described by its contact type. Sharp contacts (<1 cm (0.4 in) transition) indicate abrupt environmental change — storm events, sudden current pulses, or erosional surfaces. Gradational contacts (diffuse over several cm to >1 m (3 ft)) indicate gradual changes in depositional energy. Erosive contacts show the base of the upper bed incising into the lower, indicating a scour surface (common at the base of river channel sands). Marker beds — distinctive laterally continuous layers (bentonite ash beds, coal seams, distinctive limestones) — serve as correlation datums between sections and are noted on every measured section.`,
      cards: [
        {
          name: 'Measuring Sections and the Wentworth Scale',
          icon: Layers,
          color: BRAND.gold,
          desc: "Jacob's staff: 1.5 m (5 ft) rod; clinometer set to bed dip; one staff = 1.5 m (5 ft) true stratigraphic thickness (no trig correction). Alternative: horizontal tape + GPS for flat-lying sections. Wentworth scale (grain size in mm): clay <0.004; silt 0.004–0.063; sand 0.063–2 (very fine/fine/medium/coarse/very coarse); granule 2–4; pebble 4–64; cobble 64–256; boulder >256. Field test: sand = gritty; silt = slightly gritty; clay = smooth, plastic when wet. Munsell: Hue Value/Chroma (e.g., 10YR 6/4 = light yellowish brown). Match moist broken chip to Munsell chart in natural daylight. Contact types: sharp (<1 cm (0.4 in)), gradational (diffuse), erosive (scour base), conformable (no gap), unconformable (time gap). Marker beds: distinctive laterally continuous layers used as correlation datums.",
          examples: 'Bentonite (volcanic ash) beds are the gold standard marker bed: a 1 cm (0.4 in) white bentonite layer in the Western Interior Seaway (Cretaceous, western USA) has been traced for hundreds of kilometres and provides a synchronous time datum for biostratigraphic and radiometric calibration · Munsell in practice: two geologists both describe a sandstone as "reddish-brown" but one means 5YR 5/4 (yellowish red) and the other 2.5YR 4/6 (red) — a significant difference in iron oxidation state. Munsell notation makes these comparable across time and geography · Wentworth field test: a coarse sand grain (~0.5 mm (0.02 in)) is visible as an individual particle with the naked eye; a medium sand (~0.25 mm (0.01 in)) is barely visible; fine sand (~0.125 mm (0.00 in)) is felt as gritty but individual grains require a 10× loupe',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Sedimentary structures and facies interpretation',
      body: `**Cross-bedding (cross-stratification).** Inclined laminae within a bed, dipping in the direction of current flow at the time of deposition. The foresets — the inclined laminae themselves — indicate palaeocurrent direction. The scale of cross-bedding relates to the bedform size: ripple cross-lamination (small-scale, <3 cm (1.2 in) set thickness) records ripple migration; dune cross-bedding (large-scale, up to metres) records dune migration. Environments: rivers, beaches, aeolian dune fields, tidal channels, and turbidite currents. In drill core, cross-bedding dip angle indicates transport direction.

**Graded bedding.** A systematic decrease in grain size from base (coarser) to top (finer) within a single bed. Produced by turbidity currents — dense, sediment-laden flows that move along the seafloor and decelerate as they spread out, sorting grains by settling velocity. The *Bouma sequence* (Ta–Tb–Tc–Td–Te) describes the full suite of structures in an idealised turbidite: Ta = massive sand (deposited from suspension en masse); Tb = planar laminated sand; Tc = ripple cross-laminated sand; Td = laminated mud; Te = pelagic mud. Graded bedding is a reliable way-up indicator: coarser at base, finer at top = normal grading = stratigraphically upward direction.

**Ripple marks.** Small, regular bedforms with wavelength typically <10 cm (3.9 in). *Current ripples* are asymmetric: steep downstream lee face (foreset) and gentle upstream stoss face; the crest is sinuous; asymmetry indicates current direction. *Wave ripples* are symmetric: both faces equally steep; straight to sinusoidal crest; indicate oscillation (wave) rather than unidirectional current. Ripple marks preserved on bedding surfaces record palaeocurrent or wave direction.

**Mud cracks (desiccation cracks).** Polygonal fracture patterns in fine-grained sediment formed when it dries out and contracts after subaerial exposure. Edges of polygons curl upward on drying. Indicate periodic subaerial exposure: intertidal flats, floodplains, playa lakes, ephemeral ponds. A key environmental discriminator — their presence rules out permanent aquatic conditions during deposition.

**Bioturbation.** Disruption of primary sedimentary structures by organism burrowing, feeding, or locomotion. The *Bioturbation Index* (BI 0–5) ranges from no disruption (BI 0, rapid deposition or anoxic bottom water with no benthic life) to complete homogenisation (BI 5, slow steady deposition, abundant benthic fauna). In deep-marine settings, turbidite Ta divisions often show BI 0 (too rapid for colonisation); the overlying Te hemipelagic mud shows BI 3–5 (slow background deposition, well-oxygenated).

**Flute casts.** Bulbous, elongate, asymmetric scour marks on the bases of sandstone beds, formed by turbulent eddies at the leading edge of a turbidity current. They are sole marks — preserved on the underside of the overlying sandstone (which fills the scoured hollow as a cast). The blunt, bulbous end of each flute points in the up-current direction, making them excellent palaeocurrent indicators in deep-marine sequences.

**Constructing a graphic log.** Standard column organisation (left to right): cumulative thickness scale | bed number | lithology symbol column | grain-size column | Munsell colour column | sedimentary structures (drawn in margin) | contact type notation | fossil content | field notes. Two graphic log styles: (1) fixed-width column with all lithologies equal width — simpler; (2) grain-size column where column width represents grain size (wider = coarser) — more informative for environmental interpretation. Key facies patterns to recognise: *fining-upward cycles* (coarse base to mud top) = fluvial channel fill or decelerating turbidite; *coarsening-upward cycles* (mud base to sand top) = delta progradation or shallowing-upward shallow marine.`,
      cards: [
        {
          name: 'Sedimentary Structures and Environmental Interpretation',
          icon: Mountain,
          color: BRAND.jade,
          desc: 'Cross-bedding: inclined laminae in direction of flow; foreset dip = palaeocurrent direction; ripple scale vs. dune scale. Graded bedding: coarse base → fine top = turbidity current deceleration; Bouma sequence Ta (massive) → Tb (planar lam) → Tc (ripple) → Td (lam mud) → Te (pelagic); normal grading = way-up indicator. Ripple marks: current ripples = asymmetric (steep lee face = downstream); wave ripples = symmetric (oscillatory flow). Mud cracks: polygonal desiccation fractures; subaerial exposure; intertidal/floodplain/playa. Bioturbation index BI 0–5: BI 0 = rapid deposit or anoxic; BI 4–5 = slow steady oxic sedimentation. Flute casts: sole marks; blunt end = up-current. Graphic log: fixed-width or grain-size column; fining-upward = channel fill; coarsening-upward = delta progradation.',
          examples: 'Bouma sequence in Carboniferous flysch (Aberystwyth Grits, Wales): Ta massive sandstone → Tc ripple lamination → Te dark pelagic shale repeating at dm–m scale; outcrop confirms deep-marine turbidite fan setting from foreset orientations measuring palaeocurrent consistently toward the SW · Desiccation cracks in Triassic Mercia Mudstone (UK): polygonal crack networks with upturned edges preserved on red mudstone bedding planes; combined with absence of marine fossils and evaporite nodules, indicate seasonal playa lake environment · Bioturbation in chalk: the Upper Cretaceous chalk of NW Europe shows BI 5 throughout most of its thickness — the original pelagic carbonate lamination is completely disrupted by burrowing echinoids and worms — consistent with the slow (~5 cm/ka), well-oxygenated deep seafloor deposition',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'A Measured Stratigraphic Section: Fluvial Channel-Floodplain Sequence',
      body: 'This graphic log represents a 2 m (7 ft) measured section through a typical fluvial sequence. Beds are displayed youngest at top (as in a real section), oldest at base. Click each unit to read the full description, grain size, sedimentary structures, and environmental interpretation.',
      interaction: {
        type: 'layered-visual',
        description: 'A 2 m (7 ft) measured stratigraphic section showing a fining-upward fluvial channel sequence capped by a floodplain coal seam. Youngest beds are at the top, oldest at the base.',
        layers: [
          {
            id: 'coal',
            label: 'Coal Seam',
            sublabel: 'Marker bed · 0.1 m (0 ft)',
            color: BRAND.amethyst,
            thickness: 5,
            state: 'Solid (organic)',
            temperature: 'Surface',
            description: 'Black, shiny, lightweight; very low density. Composed of compressed, coalified plant material (vitrinite, inertinite). Forms in waterlogged swamp or mire environments where organic matter accumulates faster than it oxidises. Represents a prolonged period of stable, low-energy, wetland conditions. Serves as a regional marker bed — laterally extensive coal seams are used as stratigraphic datums for correlation.',
            facts: [
              'Munsell: N 2/0 (near-black)',
              'Hardness: ~1–2 (soft, can be scratched by fingernail)',
              'Sharp lower contact on floodplain mudstone',
              'Lateral extent: typically tens to hundreds of metres in fluvial settings',
              'Stratigraphic significance: marks transition from clastic floodplain to swamp — used as correlation datum across the section',
            ],
          },
          {
            id: 'mudstone',
            label: 'Mudstone with Desiccation Cracks',
            sublabel: 'Floodplain · 0.3 m (1 ft)',
            color: BRAND.ruby,
            thickness: 15,
            state: 'Solid (fine-grained)',
            temperature: 'Surface',
            description: 'Red-brown mudstone (clay-grade, <0.004 mm (0.00 in)) with polygonal desiccation crack networks on bedding surfaces. Crack edges are upturned, widths 1–3 mm (0.04–0.12 in), polygon diameters 5–20 cm (2.0–7.9 in). Root traces (rhizoliths) penetrate vertically downward into the bed. Indicates periodic subaerial exposure and soil development on a floodplain between flood events. The red colour indicates oxidising (well-drained) conditions.',
            facts: [
              'Grain size: clay (<0.004 mm (0.00 in)) — smooth, plastic when wet',
              'Munsell: 5YR 5/6 (yellowish red)',
              'Desiccation cracks: polygonal, 5–20 cm (2.0–7.9 in) diameter, edges upturned',
              'Root traces present: bioturbation BI 2–3',
              'Gradational upper contact into coal seam; sharp lower contact on siltstone',
            ],
          },
          {
            id: 'siltstone',
            label: 'Siltstone (Overbank Deposit)',
            sublabel: 'Overbank flood · 0.25 m (1 ft)',
            color: BRAND.gold,
            thickness: 12,
            state: 'Solid (fine-grained)',
            temperature: 'Surface',
            description: 'Pale yellow-grey siltstone (0.004–0.063 mm (0.00–0.00 in) grain size), slightly gritty to touch. Deposited from suspension during flood events when the river overtops its banks and fine sediment settles from slowly moving floodwater. Horizontally laminated (low energy after initial deposition). No desiccation cracks in this bed — remained waterlogged between flood events. Gradational contact with the overlying mudstone reflects decreasing energy as flood waters recede.',
            facts: [
              'Grain size: silt (0.004–0.063 mm (0.00–0.00 in)) — slightly gritty to touch',
              'Munsell: 10YR 7/2 (light grey)',
              'Horizontal lamination; no large-scale structures',
              'Gradational upper contact into mudstone; sharp lower contact on sandstone',
              'Depositional energy: low — settling from suspension in standing floodwater',
            ],
          },
          {
            id: 'ripple_sand',
            label: 'Ripple-Laminated Sandstone',
            sublabel: 'Bar margin · 0.3 m (1 ft)',
            color: BRAND.coral,
            thickness: 15,
            state: 'Solid (medium-grained)',
            temperature: 'Surface',
            description: 'Fine-to-medium sandstone (0.125–0.25 mm (0.00–0.01 in)) with abundant small-scale current ripple cross-lamination (set thickness 0.5–2 cm (0.2–0.8 in), foreset dip 15–20° toward SW). Asymmetric ripples indicate unidirectional current flow. Represents deposition on the margins of a river bar or in the channel tail where current velocity decreases. The transition from cross-bedded channel sand below to ripple-laminated sand here records the decrease in flow energy from the channel axis to the bar margin.',
            facts: [
              'Grain size: fine-medium sand (0.125–0.25 mm (0.00–0.01 in))',
              'Munsell: 10YR 7/3 (very pale brown)',
              'Ripple cross-lamination: foreset dip 15–20°, set thickness 0.5–2 cm (0.2–0.8 in)',
              'Palaeocurrent: SW (from foreset orientation)',
              'Gradational upper contact into siltstone; gradational lower contact into cross-bedded sand',
            ],
          },
          {
            id: 'xbedded_sand',
            label: 'Cross-Bedded Sandstone',
            sublabel: 'River channel · 0.8 m (3 ft)',
            color: BRAND.coral,
            thickness: 40,
            state: 'Solid (coarse-grained)',
            temperature: 'Surface',
            description: 'Well-sorted, medium-to-coarse sandstone (0.25–0.5 mm (0.01–0.02 in)) with large-scale planar cross-bedding (set thickness 20–40 cm (7.9–15.7 in), foreset dip 25–30° toward SW). Cross-bed sets separated by reactivation surfaces. Represents deposition in the active river channel axis over migrating dunes. The dominant unit of the section; its sharp erosive base marks the channel scour surface where the river eroded into older floodplain deposits.',
            facts: [
              'Grain size: medium-coarse sand (0.25–0.5 mm (0.01–0.02 in)) — clearly gritty, individual grains visible',
              'Munsell: 10YR 7/4 (very pale brown to pale yellow)',
              'Cross-bed sets: 20–40 cm (7.9–15.7 in) thick; foreset dip 25–30° toward SW',
              'Sorting: well-sorted (narrow grain-size range — winnowed by sustained current)',
              'Sharp erosive base: incises up to 5 cm (2.0 in) into underlying conglomerate',
            ],
          },
          {
            id: 'conglomerate',
            label: 'Conglomerate (Channel Lag)',
            sublabel: 'Erosive base · 0.15 m (0 ft)',
            color: BRAND.jade,
            thickness: 8,
            state: 'Solid (very coarse-grained)',
            temperature: 'Surface',
            description: 'Clast-supported pebble conglomerate with rounded clasts 4–30 mm (0.16–1.18 in), set in a coarse sandy matrix. Clasts are well-rounded (long transport distance). Sharp, irregular erosive lower contact incises up to 10 cm (3.9 in) into subjacent floodplain deposits. Represents the coarsest material transported by the river during peak discharge — deposited as a lag when velocity dropped slightly after the initial erosive pulse. The base of the fining-upward sequence and the beginning of the channel fill cycle.',
            facts: [
              'Grain size: pebble (4–64 mm (0.16–2.52 in) clasts), well-rounded — long-distance fluvial transport',
              'Munsell: matrix 10YR 6/3 (pale brown); clasts vary',
              'Contact: sharp, erosive lower boundary (incises 5–10 cm (2.0–3.9 in) into underlying floodplain)',
              'Clast composition: quartz, quartzite, chert — durable lithologies resistant to abrasion',
              'Depositional energy: very high — peak channel discharge; lag deposit',
            ],
          },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "What is the purpose of a Jacob's staff in measuring a stratigraphic section, and how does it account for the dip of the beds being measured?",
          a: [
            "A Jacob's staff is used to pace out horizontal distance along a section; it accounts for dip by adding a trigonometric correction factor to each pace that is applied afterwards in the lab",
            "A Jacob's staff is a measuring rod of fixed length (typically 1.5 m (5 ft)) with a clinometer attached at one end. The clinometer is set to the measured dip angle of the beds. When the staff is held so that the clinometer aligns with the dip angle, the top of the staff lies on the same bedding plane as the base — meaning the length of the staff equals the true stratigraphic thickness of the interval traversed, regardless of the topographic slope. This eliminates the need for trigonometric correction of apparent thicknesses on slopes: one staff placement always records exactly 1.5 m (5 ft) of true stratigraphic thickness",
            "A Jacob's staff is used to measure the dip of individual beds using the clinometer; it does not measure bed thickness directly but allows the geologist to calculate thickness from dip and measured length using trigonometry",
            "A Jacob's staff is a 1 m (3 ft) rod used as a scale marker in field photographs; it does not measure thickness directly but provides a reference length for photogrammetric thickness calculations",
          ],
          correct: 1,
          explain: "The Jacob's staff is an elegant solution to the problem of measuring true stratigraphic thickness in dipping beds on a sloped terrain. Without correction, measuring bed thickness along a slope produces an apparent thickness that can be significantly different from the true (perpendicular-to-bedding) stratigraphic thickness. If you measure vertically up a slope with a tape measure while beds are dipping at an angle, you get a compound of topographic slope and bed dip that yields neither the vertical stratigraphic thickness nor the perpendicular-to-bedding thickness. The Jacob's staff solves this elegantly: by setting the clinometer to the measured bed dip and holding the staff at that angle, the top of the staff is always on the same bedding plane as the base. The staff therefore measures exactly one stratigraphic increment (1.5 m (5 ft) or 1.0 m (3 ft) of true stratigraphic thickness) regardless of topographic slope. This works because the staff and the bedding plane are co-planar — a consistent geometric relationship that eliminates the trigonometric correction. In practice, the geologist plants the staff base on one bedding surface, reads the meter mark at the top, records that as 1.5 m (5 ft) of section, moves the base to the top position, and repeats. Option A describes pacing with a correction — not the Jacob's staff method. Option C describes a clinometer function, not the instrument's primary use. Option D describes a photographic scale bar — an entirely different tool.",
        },
        {
          q: 'A geologist describes a sandstone bed as: "Well-sorted, medium-grained (0.3–0.5 mm (0.01–0.02 in)) sandstone with large-scale planar cross-beds (dipping 25° toward the NNE, foreset height 40 cm (15.7 in)), sharp erosive base, gradational top into overbank siltstone." Using the Wentworth scale and the significance of the sedimentary structures, what depositional environment does this description indicate?',
          a: [
            'The well-sorted medium sand with symmetric cross-beds and gradational base indicates a beach environment with swash and backwash reworking; the gradational top into siltstone records the transition to a lagoon behind a barrier beach',
            'This description indicates a fluvial (river) channel deposit. Medium-grained well-sorted sand (0.3–0.5 mm (0.01–0.02 in), Wentworth medium sand grade) is consistent with sustained unidirectional current transport. Large-scale planar cross-beds with 40 cm (15.7 in) foreset height record migration of river dunes — bedforms that form at current velocities of ~0.3–1.0 m/s in sandy channels. The NNE-dipping foresets indicate palaeocurrent flow toward the NNE. The sharp erosive base records the channel scour surface where the river eroded into older deposits. The gradational top into overbank siltstone records deposition on the bar margin or channel tail as flow velocity decreased, followed by fine-grained overbank flood suspension settling — the classic fining-upward signature of a fluvial channel-fill sequence',
            'The large-scale cross-bedding and well-sorted medium sand indicate an aeolian (wind-blown) desert dune environment; the gradational top into siltstone records deposition of interdune silt during low-wind periods; the erosive base is caused by the advancing dune eroding the interdune flat',
            'The well-sorted medium sand with cross-bedding and sharp erosive base indicates a submarine turbidite channel; the 25° foreset dip is the dip of the turbidite bed rather than cross-lamination; the gradational top into siltstone is the Td division of the Bouma sequence',
          ],
          correct: 1,
          explain: "Each element of the description points to a fluvial channel environment. Medium-grained (0.3–0.5 mm (0.01–0.02 in)) well-sorted sand: medium sand requires sustained unidirectional current transport to sort it to this narrow grain-size range. Beach environments can also produce well-sorted sand, but beach sands typically show lower-angle cross-stratification and wave ripples rather than large-scale planar cross-beds. Large-scale planar cross-beds with 40 cm (15.7 in) foreset height: bedforms with 40 cm (15.7 in) foreset height are dunes (bedforms with height > ~5 cm (2.0 in) in the classic Simons, Richardson and Nordin classification) rather than ripples. River dunes form at current velocities of approximately 0.3–1.0 m/s and produce large-scale cross-bedding with foreset dip in the current direction (here, NNE). Planar cross-bedding (as opposed to trough cross-bedding) forms from 2D dunes with straight or gently curved crests. Sharp erosive base: erosion of the substrate by the active channel cutting downward — the scour surface. Gradational top into overbank siltstone: as the river overflows its banks, current velocity drops and fine-grained sediment is deposited as overbank flood deposits. This fining-upward package (conglomerate or coarse sand → medium sand → siltstone → mudstone) is the fundamental fluvial channel-fill sequence. Option A (beach) is inconsistent with the large-scale cross-bed height and foreset geometry — beach swash-backwash produces low-angle (<15°) bedding, and the presence of a sharp erosive base is not typical of beach accretion. Option C (aeolian) is possible for some features but aeolian dunes produce higher-angle foresets (25–34°) and the contact with overlying siltstone would be a deflation surface rather than a gradational contact. Option D (turbidite) is ruled out by the large cross-bed scale — turbidite Ta is massive (no cross-stratification), and turbidites do not show sharp erosive bases within an alternating sandstone-siltstone succession in the way described.",
        },
        {
          q: `What does the Munsell notation 5YR 5/6 tell you about a rock sample\'s colour? Why is standardised colour notation preferable to descriptive terms like "reddish-brown" in geological field records?`,
          a: [
            '5YR 5/6 means the rock is in the yellow-red spectral family (5YR), has medium lightness (Value 5 on a scale of 0–10), and moderate-to-strong colour saturation (Chroma 6 on a scale of 0–8+). This corresponds to yellowish red — the characteristic colour of iron-oxide-rich (haematite-bearing) red bed sedimentary rocks. Standardised notation is preferable because it is reproducible: two geologists comparing the same chip to a Munsell chart under consistent lighting conditions will record the same notation. Descriptive terms like "reddish-brown" are subjective and variable — one observer\'s "reddish-brown" is another\'s "brownish red," making direct comparison between sections or between publications unreliable',
            "5YR 5/6 means the rock is 5% yellow, 5% red, and 6% brown; the notation provides a quantitative chemical analysis of the colour pigments present in the rock. Standardised notation is preferable because it allows geochemical interpretation of iron content directly from the field description",
            "5YR 5/6 means the rock has a spectral reflectance of 5% in the yellow-red wavelength band, a 5 nm wavelength peak, and 6% total reflectance. Standardised notation is preferable because it can be measured instrumentally with a spectrophotometer without the need for a Munsell chart",
            "5YR 5/6 means the sample is from the Silurian period (5YR = 5th era, Young Rock); Value 5 = depth of 5 m (16 ft); Chroma 6 = 6th core interval. The notation is used in borehole logging rather than surface fieldwork",
          ],
          correct: 0,
          explain: "The Munsell colour system uses three parameters that together unambiguously specify a colour. Hue (5YR): the spectral colour family. The YR (yellow-red) hues range from 10YR (more yellow) to 2.5YR (more red), with 5YR in the middle of this range — a reddish-orange family. Value (5): lightness on a scale from 0 (absolute black) to 10 (absolute white). Value 5 is mid-lightness. Chroma (/6): colour saturation or purity, from 0 (neutral grey, no saturation) to values of /8 or higher (vivid, highly saturated). Chroma 6 is moderately strong saturation. Together, 5YR 5/6 is 'yellowish red' in Munsell nomenclature — a medium-lightness, moderately saturated reddish-orange, the characteristic colour of haematite (Fe₂O₃)-bearing red beds (Triassic desert sediments, Permian red beds, continental red bed formations globally). Standardised notation matters because colour perception is subjective and dependent on lighting, observer, cultural background, and fatigue. A published description of '5YR 5/6' in 1970 can be directly compared to a description of '5YR 5/6' in 2025 anywhere in the world, because both refer to the same physical colour chip. 'Reddish-brown' or 'brick red' cannot be compared between observers without seeing the original sample. In stratigraphic correlation, where geologists match beds in different sections, colour is a key discriminator — but only if it is measured reproducibly. Option B misinterprets the notation as percentage chemistry. Option C misinterprets it as spectrophotometric reflectance. Option D invents a stratigraphic coding system that does not exist.",
        },
        {
          q: 'Describe the formation mechanism of graded bedding and explain what it tells you about the depositional process. In what environments are well-developed graded beds found, and how are they used to determine stratigraphic way-up?',
          a: [
            'Graded bedding forms by slow settling of particles from a uniform suspension cloud, with all particles settling simultaneously over months; it is found in lakes and lagoons. Way-up cannot be determined from graded bedding because the coarse base and fine top appear identical when inverted',
            'Graded bedding — the systematic decrease in grain size from coarse at the base to fine at the top of a single bed — forms when a turbidity current (a dense, sediment-laden underwater flow) decelerates. As the flow slows, grains settle out in order of decreasing settling velocity (Stokes\' law): coarser, denser grains settle first, forming the sandy base; finer grains settle last, forming the muddy top. Well-developed graded beds (turbidites) are found in deep-marine turbidite fan systems, deep lake basins, and submarine canyon fills. For way-up: normal grading (coarse base, fine top) indicates that the section is right-way-up — the coarse base is stratigraphically older (deposited first). If the section is overturned (inverted stratigraphy), the grading would appear reversed (fine below, coarse above — inverse grading), indicating structural inversion. This makes graded bedding one of the most reliable way-up indicators in strongly deformed terranes',
            'Graded bedding forms in shallow coastal environments by wave action that sorts grains by size, with heavy minerals concentrating at the base during swash and light minerals deposited at the top during backwash; it is found in beaches and deltas; way-up is determined by which shore the bed was deposited on',
            'Graded bedding forms by diagenetic (post-burial) size segregation as coarse grains sink and fine grains float during compaction; it is found in all sedimentary environments equally; it cannot be used for way-up determination because it forms after deposition',
          ],
          correct: 1,
          explain: "Graded bedding is one of the most important structures in sedimentary geology, both as an environmental indicator and as a way-up tool. The formation mechanism: a turbidity current is a turbulent, sediment-laden underwater density flow — denser than ambient water because it contains suspended particles. It flows along the seafloor (or lake floor) under gravity. As the flow decelerates (spreading out onto a flat abyssal plain, losing confinement, or losing gradient), particles begin to settle. According to Stokes' law, settling velocity is proportional to the square of the particle radius. Coarse sand settles first, forming the base of the turbidite bed (the Ta massive division or coarse-grained graded layer). Fine sand and silt settle progressively later. Clay-sized particles remain in suspension longest, forming the finest-grained top. This produces the characteristic graded layer: coarse at base, fine at top. The Bouma sequence (Ta–Te) describes the complete internal structure of a turbidite. The key environments: deep-marine turbidite fans (the deep-water analogue of river deltas — submarine fans in the abyssal ocean), submarine canyon fill, and deep lacustrine basins (glacial lakes, large rift lakes). Way-up determination: normal grading (coarse base, fine top) is a primary way-up indicator of exceptional value in strongly folded or faulted terranes where beds are vertical or overturned. If you find that 'coarse' is at what appears to be the top and 'fine' is at the apparent base, the stratigraphy is inverted — the section has been overturned. This is used routinely in the Scottish Caledonides, the Alps, and other complexly deformed orogens to establish younging direction. Option A describes a different (slower) process and incorrectly states that way-up cannot be determined. Option C describes beach sorting, not turbidite grading. Option D invents a diagenetic mechanism for graded bedding, which is incorrect.",
        },
        {
          q: 'You observe a 20 m (66 ft) section of alternating sandstones and mudstones. Each sandstone bed has a sharp erosive base, internal cross-bedding, and a gradational top into the overlying mudstone. The mudstones show desiccation cracks and root traces. Describe the depositional environment and the sedimentary facies model that explains this repetitive pattern.',
          a: [
            'The section records a deep-marine turbidite system: the sandstones are turbidite Ta–Tc divisions with sharp erosive bases from submarine channel incision; the mudstones are Te pelagic muds; desiccation cracks and root traces are absent from real turbidites, so these must have been misidentified and are actually flute casts and trace fossils',
            'This is a fluvial channel-floodplain system. Each sandstone represents an active river channel deposit: the sharp erosive base records the channel scour surface where the river cut down into older floodplain deposits; the internal cross-bedding records dune migration in the active channel at moderate-to-high current velocity; the gradational top into siltstone/mudstone records decreasing flow velocity as the channel fills or the river migrates away. Each mudstone represents an abandoned floodplain surface: deposition of fine-grained sediment from overbank floods, followed by subaerial exposure (desiccation cracks = periodic drying), and plant colonisation (root traces). The repetitive stacking of channel-floodplain couplets records repeated episodes of channel occupation, fill, and migration — the fundamental cycle of a meandering or braided fluvial system building a floodplain',
            'The alternating pattern records a tidal flat environment: sandstones are tidal channel sands deposited during spring tides; mudstones are intertidal flat deposits; desiccation cracks form during low tide; root traces indicate saltmarsh plants. The erosive contacts are tidal scour surfaces that form when tidal channels migrate across the flat',
            'The section records a turbidite-capped shallow shelf system: sandstones are storm sands (tempestites) deposited by hurricane-force waves; mudstones are fair-weather shelfal muds; desiccation cracks indicate episodes when the shelf was exposed during glacioeustatic sea-level fall; the repetitive pattern records glacio-eustatic sea level oscillations',
          ],
          correct: 1,
          explain: "Every element of the description points to a fluvial channel-floodplain system. Sharp erosive base on sandstone: the active river channel scours into older, softer floodplain deposits during high-discharge events. The scour produces an irregular, incised contact — one of the most diagnostic features of fluvial channel sands. Cross-bedding in sandstone: dunes migrating in the channel axis at moderate to high current velocities (typically 0.3–1.0 m/s for medium-coarse sand) produce large-scale cross-stratification with foresets pointing in the palaeocurrent direction. Gradational top of sandstone into mudstone: as the channel fills or migrates, current velocity decreases, grain size fines upward, and eventually fine-grained overbank deposits (siltstone, mudstone) are deposited on the abandoned bar surface or bank. Desiccation cracks in mudstone: the floodplain surface is periodically dry between flood events. The polygonal crack networks with upturned edges form as the clay-rich mud dries and contracts. This rules out any permanently aquatic environment (deep marine, lacustrine) — no marine or lacustrine mudstone shows desiccation cracks. Root traces in mudstone: vascular land plants colonise the stable floodplain surface between floods. Root traces penetrate vertically and are often preserved as grey or reddish reduced zones in otherwise oxidised red beds. The repetitive stacking of channel sand + floodplain mudstone represents the fundamental fluvial cycle: (1) active channel deposits sand during high discharge; (2) channel migrates or abandons; (3) floodplain accumulates fine-grained overbank sediment; (4) surface dries and is colonised by plants; (5) new channel cuts in, restarting the cycle. Option A misidentifies the structures — turbidite mudstones show no desiccation cracks or root traces. Option C (tidal flat) is inconsistent: root traces indicate terrestrial plant colonisation not found on tidal flats; and tidal channel sands typically show herringbone cross-stratification (bidirectional foresets) from alternating flood and ebb tides, not the unidirectional cross-bedding described. Option D is inconsistent: storm sands (tempestites) have hummocky cross-stratification (a distinctive 3D structure) rather than planar cross-beds, and desiccation cracks on a storm-dominated shelf require unrealistically large sea-level changes.",
        },
      ],
    },
  ],
}

export default stratigraphicSections
