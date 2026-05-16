import { Layers, Mountain } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const geologicalMaps: Lesson = {
  id: 'geol-201-2-5-1',
  title: 'Reading Geological Maps and Cross-Sections',
  track: 'geo',
  trackName: 'Geology',
  level: 'Intermediate',
  duration: '20 min',
  xpReward: 250,
  description: 'A geological map is not a description of the surface but a window into the subsurface: rock types, ages, and structures collapsed onto a two-dimensional sheet. This lesson teaches how to read topographic contours and strike-and-dip symbols, interpret standard geological map conventions, apply the V-rule to predict how geological contacts cross valleys and ridges, and identify folds from the map pattern of rock units.',
  sources: [
    { org: 'USGS', title: 'National Geologic Map Database — Public Domain', url: 'https://ngmdb.usgs.gov' },
    { org: 'USGS', title: 'How to Read a Topographic Map (Educational) — Public Domain', url: 'https://www.usgs.gov/faqs/how-do-i-read-topographic-map' },
    { org: 'OpenStax', title: 'Physical Geology, 2nd ed., Ch. 13 (CC-BY 4.0)', url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'PRI', title: 'Earth@Home: Structural Geology', url: 'https://earthathome.org' },
    { org: 'AGI', title: 'Glossary of Geology, 5th ed.', url: 'https://www.americangeosciences.org/pubs/glossary' },
    { org: 'BGS', title: 'Geological Map Reading — British Geological Survey (OGL)', url: 'https://www.bgs.ac.uk/geological-map-reading' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Seeing through the skin of the Earth',
      body: `A geological map is fundamentally different from every other kind of map you have used. A road map shows what is on the surface. A geological map shows what is *beneath* it — the rock types, their ages, their arrangement, and the structures that have deformed them, all collapsed onto a two-dimensional sheet. Every symbol on a geological map represents months or years of fieldwork: geologists who walked the ground, measured the rocks, and recorded what they found. Learning to read a geological map is learning to reconstruct a three-dimensional subsurface from a two-dimensional surface pattern — a skill that is central to exploration geology, engineering geology, hazard assessment, and fundamental research alike.

The starting point is the topographic map: before you can understand the rock, you must understand the shape of the ground surface on which rocks are exposed. Layered on top are the geological data — the colours and boundaries that define rock units, the structural symbols that record how those rocks are oriented, and the lines and patterns that reveal the history of deformation buried beneath the modern landscape.`,
      keyTerms: [
        {
          term: 'topographic contour',
          def: 'A line on a map connecting all points of equal elevation above a reference datum (usually mean sea level). Contour lines never cross each other. Closely spaced contours indicate steep terrain; widely spaced contours indicate gentle terrain. Contours form V-shapes pointing upstream (uphill) where they cross a river valley. Closed contours indicate a hill (or, if marked with inward-pointing tick marks, a depression). The vertical distance between adjacent contours is the contour interval, which must always be stated on the map.',
        },
        {
          term: 'strike',
          def: "The compass bearing of a horizontal line drawn on the surface of a tilted rock layer. Strike describes the orientation of the bed in the horizontal plane — the direction the bed 'runs.' Measured with a compass clinometer. Expressed as a bearing (e.g., N045°E, or 045° using the right-hand rule convention) or as a cardinal direction pair (e.g., NE–SW). The long bar of the strike-and-dip symbol on a geological map shows the strike direction.",
        },
        {
          term: 'dip',
          def: 'The maximum angle (in degrees) at which a rock layer inclines below the horizontal, measured perpendicular to strike in the downslope direction. A dip of 0° = horizontal; 90° = vertical. Always recorded with direction (e.g., 35°SE means the layer dips at 35° toward the southeast). The short tick of the strike-and-dip symbol shows the dip direction; the adjacent number gives the dip angle.',
        },
        {
          term: 'geological contact',
          def: 'The boundary between two different rock units (formations) on a geological map. Contact types: solid line = certain (well-exposed, accurately located at surface); dashed = approximate (position estimated from float, topography, or remote sensing where rock is covered); dotted = inferred or covered. Fault contacts are shown as thick solid lines with additional fault-type symbols. An unconformity (time gap) contact is shown as a wavy or irregular line.',
        },
        {
          term: 'V-rule',
          def: "A rule predicting how the surface trace of a geological contact crosses valleys and ridges on a topographic map. Horizontal layers follow topographic contours exactly, V-ing upstream. Vertical layers cross topography as a straight line with no V. Dipping beds V upstream when dipping upstream or when dipping downstream more gently than the valley walls; the V reverses to point downstream only when the bed dips downstream more steeply than the valley.",
        },
        {
          term: 'anticline',
          def: "A fold in which beds arch upward (convex upward). The oldest rocks are exposed in the eroded core (hinge zone), and the limbs dip away from the axial plane. On an erosional geological map, an anticline appears as older formation in the centre surrounded by progressively younger formations outward. A pericline or dome is a closed anticline in three dimensions.",
        },
        {
          term: 'syncline',
          def: "A fold in which beds sag downward (concave upward). The youngest rocks are preserved in the core, and the limbs dip toward the axial plane. On a geological map, a syncline appears as younger formation in the centre surrounded by older formations outward — the reverse of an anticline. A basin is a closed syncline in three dimensions.",
        },
        {
          term: 'geological cross-section',
          def: 'A vertical slice through the Earth drawn perpendicular to the dominant structural trend, showing the subsurface distribution of rock units and structures. Constructed by: (1) drawing a topographic profile along the section line using contour intersections; (2) projecting surface contacts to the profile; (3) drawing contacts downward at their measured dip angle; (4) connecting contacts while respecting layer continuity and faults. Cross-sections are interpretations — uncertainty increases with depth.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Maps, symbols, and what they mean',
      body: `**Reading topographic maps.** Topographic maps encode the three-dimensional shape of the land surface in two dimensions. Four rules govern contours: (1) contours never cross, because a point can have only one elevation; (2) closely spaced contours indicate steep terrain, widely spaced indicate gentle terrain; (3) contours V upstream where they cross river valleys; (4) closed contours mark hills, and closed contours with inward-pointing tick marks mark depressions. The *contour interval* — the fixed vertical distance between adjacent contours — must always be stated on the map. Reading *relief* (total elevation range) and *gradient* (slope steepness) from the topographic base is the essential first step before any geological interpretation.

**Strike and dip: measuring the orientation of a rock layer.** Strike is the compass bearing of a horizontal line drawn on the surface of a tilted rock layer. Dip is the maximum downslope angle measured perpendicular to strike, always recorded with direction. Together, they fully define the spatial orientation of a planar feature. On geological maps, the strike-and-dip symbol is T-shaped: the long bar shows strike, the short tick shows dip direction, and the adjacent number gives the dip angle. A circle with no tick = horizontal beds (0°). A box = vertical beds (90°). By the right-hand rule convention, facing along strike in the given direction, the dip is always to the right.

**Geological map conventions.** Each rock unit (formation, group, or member) is assigned a distinctive colour or pattern. The International Commission on Stratigraphy recommends standardised colours by geological period (Quaternary = yellow; Cretaceous = green; Carboniferous = grey), though national surveys vary. Contact types encode survey confidence: solid line = precisely located in outcrop; dashed line = approximately positioned from indirect evidence (soil geochemistry, float, topographic inference, remote sensing); dotted line = inferred beneath cover with low confidence. Faults appear as thick solid lines, with teeth on the upper plate of thrust faults, and arrows indicating strike-slip sense. Unconformities are drawn as wavy or irregular lines between units.`,
      cards: [
        {
          name: 'Geological Map Symbols and Conventions',
          icon: Layers,
          color: BRAND.gold,
          desc: 'Topographic contours: (1) never cross; (2) closely-spaced = steep; (3) V upstream in valleys; (4) closed = hill. Contour interval = stated fixed vertical spacing. Formation colours: ICS-recommended by period. Contact types: solid = certain; dashed = approximate; dotted = inferred. Strike-and-dip symbol: T-shape; long bar = strike; short tick = dip direction; adjacent number = dip angle. Horizontal beds: circle; vertical: box. Fault: thick line; thrust: teeth on upper plate; strike-slip: motion arrows. Unconformity: wavy line.',
          examples: 'UK BGS 1:50,000 maps: Jurassic = blue-grey; Triassic = purple; Permian = orange; Carboniferous = grey. Formation contact lines on the same map alternate between solid (quarry/cliff exposures) and dashed (fields, woods) every few hundred metres — even well-surveyed maps mix confidence levels · USGS National Geologic Map Database (ngmdb.usgs.gov) provides downloadable digital geological maps with queryable formation attributes, but the reading skills are identical to paper maps',
        },
        {
          name: 'Strike, Dip, and the V-Rule',
          icon: Mountain,
          color: BRAND.coral,
          desc: "Strike: compass bearing of horizontal line on tilted layer — describes the bed's trend. Dip: maximum downslope angle perpendicular to strike — always recorded with direction. Right-hand rule: face along strike; dip is to the right. V-rule: horizontal beds follow contours exactly (V upstream into valleys). Vertical beds: straight line, no V. Dipping beds: upstream-dipping beds V strongly upstream (more pronounced than topography); downstream-dipping beds gentle than valley walls → V upstream (less pronounced); downstream-dipping steeper than valley → V reverses downstream. Use V-rule to verify or check measured dip direction before constructing a cross-section.",
          examples: 'A 15° east-dipping limestone crossing an east-draining river valley: the V still points upstream (west) because 15° is gentler than the valley walls (30–60° in a typical V-shaped valley), though less pronounced than for horizontal beds · A bed dipping steeply (60°) downstream: the V reverses, pointing downstream, because the dipping surface cuts through topographic contours at a steeper angle than the valley walls — the contact exits the valley floor before reaching the headwaters · Practical check: if a geologist records dip 25°NW and the map shows contact V-ing northward into a north-draining valley, these are consistent (upstream dip → upstream V)',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Reading structure in the map',
      body: `**Constructing a geological cross-section.** A cross-section translates map data into a two-dimensional vertical slice. The procedure: (1) choose a section line perpendicular to the dominant structural trend; (2) draw the topographic profile along that line by plotting every contour intersection; (3) project each geological contact from the surface trace to its position on the profile line; (4) draw each contact downward at the measured dip angle; (5) connect contacts while respecting layer continuity and fault positions. Cross-sections are interpretations — where data are absent, the geologist must extrapolate from structural principles. Uncertainty increases with depth. Multiple valid subsurface geometries may satisfy the same surface observations.

**Anticlines and synclines in map view.** When folded rocks are eroded to a flat landscape, the structure is revealed as a pattern of parallel formation stripes on the map. The key discriminator is the *younging direction* — the rule that in any undisturbed sedimentary sequence, beds become younger upward, and on an eroded surface, younger rocks appear farther from the fold hinge on anticlines, and closer to the hinge on synclines.

An **anticline** has the *oldest formation in the core*: the fold arched rocks upward, so erosion at the crest removed the youngest cover and exposed the oldest rocks. Limbs dip away from the axial trace on the map. A closed anticline (pericline or dome) shows the oldest rock at the centre of a bull's-eye pattern of formation stripes.

A **syncline** has the *youngest formation in the core*: the downward sag preserved the youngest rocks in the trough, sheltered from erosion. Limbs dip toward the axial trace. A closed syncline (basin) has the youngest rock at the centre of the formation bull's-eye. The plunge direction of a fold is indicated by the acute closing end of an elliptical outcrop pattern: the fold is plunging toward that end.`,
      cards: [
        {
          name: 'Reading Structure from Map Patterns',
          icon: Mountain,
          color: BRAND.coral,
          desc: 'Cross-section construction: (1) choose line ⊥ dominant strike; (2) draw topographic profile from contour crossings; (3) project contacts to profile; (4) draw at measured dip angle; (5) connect contacts; acknowledge uncertainty at depth. Fold recognition: anticline = oldest in core, younger outward, limbs dip away from axial trace. Syncline = youngest in core, older outward, limbs dip toward axial trace. Pericline/dome: closed anticline, oldest in centre of ellipse. Basin: closed syncline, youngest in centre. Plunge direction: acute closing end of elliptical formation stripes. Younging direction is the key discriminator between anticline and syncline when dip data are absent.',
          examples: "Appalachian Valley and Ridge (Pennsylvania): corrugated ridges record folded Paleozoic strata — syncline cores preserve younger Pennsylvanian coal measures; anticline cores expose older Ordovician carbonates · Weald–Artois anticline (SE England/N France): the North and South Downs chalk ridges are the eroded limbs of a Cenozoic pericline; the Weald is the eroded core exposing older Cretaceous sands and clays — a textbook dome visible on BGS geological maps · 'Rule of V's' practical use: on a 1:25,000 map with 10 m (33 ft) contour interval, a contact that V's more sharply upstream than the valley contours = beds dipping upstream (good cross-section constraint)",
        },
      ],
    },
    {
      type: 'visualization',
      title: 'The Geological Map-Reading Workflow',
      body: 'Follow the systematic steps a field geologist uses — from reading the topographic base to the final structural interpretation. Click each stage to see what it involves and why the sequence matters.',
      interaction: {
        type: 'flow-simulator',
        description: 'A six-stage workflow showing how geologists move from raw topographic and outcrop data to a finished geological map and cross-section.',
        nodes: [
          {
            id: 'topo',
            label: 'Read Topography',
            description: 'Begin with the topographic base: identify ridges, valleys, and slopes from contour spacing. Closely-spaced contours = steep terrain. V-shaped contours pointing uphill = valleys. Determine the gross topographic relief and drainage pattern. This step constrains where geological contacts will intersect the surface and which exposures are likely to be accessible.',
            color: BRAND.accent,
          },
          {
            id: 'units',
            label: 'Identify Rock Units',
            description: "Map colours and patterns define individual formations. Each colour represents a distinct rock unit with a defined age range. Identify boundaries (contacts) between units — solid lines are directly observed; dashed lines are approximate. Note the formation order to determine the younging direction (which way the sequence gets younger), essential for identifying anticlines vs. synclines.",
            color: BRAND.jade,
          },
          {
            id: 'orientation',
            label: 'Measure Strike & Dip',
            description: 'Read each strike-and-dip symbol: long bar = strike (trend of the bed); short tick = dip direction; number = dip angle. These data record how beds are tilted at each measured point. Consistent data across the map define regional structural domains. Inconsistent data signal folding, faulting, or igneous intrusion. The dip values are essential inputs for cross-section construction.',
            color: BRAND.gold,
          },
          {
            id: 'vrule',
            label: 'Apply the V-Rule',
            description: "Use the V-rule to verify that each contact's V-shape in valleys is consistent with the nearby strike-and-dip measurements. Upstream-dipping beds should V upstream; downstream-dipping beds should V upstream (less pronounced) unless their dip exceeds the valley wall angle. Any inconsistency signals a mapping error, a fault, or an unconformity that needs investigation before the cross-section is drawn.",
            color: BRAND.coral,
          },
          {
            id: 'section',
            label: 'Construct Cross-Section',
            description: 'Draw a vertical slice perpendicular to the dominant structural trend: (1) plot the topographic profile; (2) project each contact point to the profile; (3) draw contacts downward at their measured dip angle; (4) connect contacts, respecting layer continuity. The cross-section reveals the subsurface geometry and shows structures not visible on the map surface. Note that interpretations increase in uncertainty with depth.',
            color: BRAND.amethyst,
          },
          {
            id: 'interpret',
            label: 'Interpret Structures',
            description: "With the map and cross-section complete, identify the geological structures: anticlines (oldest in core, limbs dip outward) and synclines (youngest in core, limbs dip inward); normal, reverse, and strike-slip faults (from displacement direction, fault-plane indicators, and offset markers); unconformities (angular discordance between unit sets). Assign structures to tectonic events in the regional geological history.",
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'topo', to: 'units', label: 'topographic base for contact tracing' },
          { from: 'units', to: 'orientation', label: 'formation units to orient' },
          { from: 'orientation', to: 'vrule', label: 'test strike/dip consistency' },
          { from: 'vrule', to: 'section', label: 'validated data into section' },
          { from: 'section', to: 'interpret', label: 'geometry to interpretation' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'On a geological map, a rock contact is drawn as a dashed line rather than a solid line. What does this indicate about the contact, and why might it be mapped this way?',
          a: [
            'A dashed contact is a normal stratigraphic boundary between two formations of the same geological age; the dash style distinguishes conformable contacts from unconformities',
            'A dashed contact indicates that the boundary is approximate — its position has been estimated from indirect evidence (soil geochemistry, float, aerial photography, topographic inference) rather than directly traced in exposed outcrop. The geologist has not walked the full contact line at the surface. This commonly occurs where the boundary is buried beneath soil, vegetation, scree, or alluvium and its exact position is uncertain to within several metres or more',
            'A dashed contact represents a thrust fault; the teeth symbols on the hanging wall are always accompanied by a dashed line to indicate low-angle transport',
            'A dashed contact is used only in areas never previously geologically surveyed, to indicate that the boundary position is hypothetical and supported by no field evidence whatsoever',
          ],
          correct: 1,
          explain: "Geological maps encode contact confidence in line style. Solid line: the geologist directly observed the contact in outcrop and located it accurately, typically within a few centimetres to metres. Dashed line: the contact is approximately positioned — the geologist infers the formation must be present from indirect evidence (float, geophysical anomaly, topographic expression, remote sensing, soil colour) but did not directly observe the contact at the surface. Dotted line: inferred beneath cover with low confidence. Dashed contacts are extremely common even on well-surveyed maps: glacial till, alluvium, dense vegetation, or urban cover routinely buries contacts that cannot be precisely located without excavation or drilling. A dashed line does not mean the formation boundary is fictitious — it means confidence in the exact position is reduced. Option A is wrong: conformable vs. unconformable contacts are shown by different line types (wavy line = unconformity), not solid vs. dashed. Option C is wrong: thrust faults are shown by thick lines with teeth, not dashed contacts. Option D overstates the uncertainty; even heavily surveyed areas use dashed lines wherever rock exposure is poor.",
        },
        {
          q: 'A geologist measures a sandstone bed with strike 060° and dip 25°SE. Explain what each measurement means physically. If you were standing on the bed looking along strike toward 060° (NNE), which direction does the rock surface slope downward?',
          a: [
            "Strike 060° means the bed dips toward the northeast at an angle of 60°; the dip angle of 25° is measured from the vertical, not from the horizontal",
            "Strike 060° means a horizontal line drawn on the bed surface trends at 060° from north — the NNE–SSW direction. This describes the bed's orientation in the horizontal plane: which way the bed 'runs.' Dip 25°SE means the bed surface inclines downward at 25° measured from horizontal, toward the southeast (roughly 135°). Standing on the bed facing 060° (toward NNE), the dip direction (SE) is approximately 90° to your right. Therefore the rock surface slopes downward to your right — toward the southeast",
            "Strike 060° and dip 25°SE mean the bed makes a 60° angle with the horizontal plane and dips toward the southeast at 25°. Looking along strike toward the NE, the rock slopes directly away from you",
            "Strike is the vertical tilt angle and dip is the horizontal orientation; strike 060° means the bed is tilted 60° from vertical, and looking along 060° the surface slopes uphill toward the NNE",
          ],
          correct: 1,
          explain: "Strike and dip are the two angles that fully define the orientation of any planar geological feature. Strike is a horizontal angle: it describes which compass direction the bed trends along, always measured as a bearing (0–360° from north). A strike of 060° means a perfectly horizontal line drawn on the tilted bed surface trends toward 060° (NNE). Strike is always horizontal regardless of how steeply the bed dips. Dip is the downslope inclination angle measured from horizontal (not from vertical), perpendicular to strike and in the downhill direction. Dip 25°SE means the bed inclines 25° toward SE. By the right-hand rule convention: facing along the strike direction (060°, toward NNE), the dip direction is always to the right. The SE direction (135°) is roughly 75° clockwise from 060°, which is to the right when facing NNE. Therefore the bed slopes down to your right (southeast) when you stand on it facing 060°. Option A confuses the two values and misdefines dip as measured from vertical. Option C correctly identifies the direction but wrongly says the slope is 'away from you' — perpendicular to your facing direction, not directly ahead. Option D inverts both definitions.",
        },
        {
          q: "Explain the V-rule. A limestone bed dips gently east at 15°. The bed crosses a river valley that also drains to the east. Which direction does the contact V in the valley — upstream (west) or downstream (east)?",
          a: [
            "The V-rule states that all geological contacts follow topographic contours exactly, so a 15°-dipping bed would always produce a V pointing upstream (west) regardless of dip because contours V upstream",
            "The V-rule states that the direction a contact V's across a valley depends on the dip of the beds relative to the valley geometry. For beds dipping downstream (east, same as river), the contact V's upstream (west) when the dip is gentler than the valley walls, and V's downstream (east) when the dip is steeper than the valley. A 15° dip is typically gentler than normal valley walls (30–60° in a V-shaped valley), so the contact V's upstream — pointing west, toward the headwaters — though less sharply than for horizontal beds",
            "The contact V's downstream (east) in all cases because the V always points in the direction of dip. A 15° eastward dip means the contact follows the dip direction, crossing the valley toward the east",
            "The V-rule applies only to horizontal or vertical beds. For dipping beds, the contact crosses valleys as a straight line that cannot V in either direction",
          ],
          correct: 1,
          explain: "The V-rule is a geometric consequence of two intersecting planes: the geological contact surface (constant dip and strike) and the irregular land surface. For horizontal beds (dip = 0°), the contact follows elevation contours exactly — both surfaces are horizontal, so they intersect along a line of constant elevation, which follows the V-shaped contour pattern into valleys, always pointing upstream. For vertical beds (dip = 90°), the contact cuts straight across topography — a vertical plane is unaffected by elevation changes. For dipping beds, the result depends on whether the bed dips downstream and how its dip compares to the valley wall angle. When a bed dips downstream (east) at a gentle angle and the valley walls are steeper (e.g., 30–60°), the contact is geometrically 'dragged' partially toward the contour pattern. The contact still V's upstream (west) into the valley — the general upstream-V tendency of topographic surfaces is not overcome until the bed's dip exceeds the valley wall gradient. A 15° dip is moderate and typical valley walls in V-shaped valleys are 30° or steeper, so the 15° eastward dip is gentler than the valley walls. The contact V's upstream (west), less pronounced than for horizontal beds, but still pointing toward the headwaters. The V only reverses to point downstream when the bed dips downstream more steeply than the valley walls. Option A is partially correct in conclusion but wrong in reasoning. Option C is incorrect for gentle dips. Option D contradicts the V-rule entirely.",
        },
        {
          q: 'A series of concentric elliptical formation outcrops appears on a geological map. The centre of the ellipse exposes Ordovician rocks; Silurian, then Devonian rocks appear in concentric bands outward. Is this an anticline or a syncline? Explain from first principles.',
          a: [
            'This is a syncline. Synclines have the youngest rocks in the core; Ordovician (oldest) in the centre surrounded by younger rocks matches the syncline pattern',
            'This is an anticline. Anticlines expose the oldest rocks in their eroded core because beds arch upward and erosion works through the younger cover first to expose the deeper, older rocks at the crest. Ordovician is older than Silurian and Devonian. Having the oldest rock in the centre, surrounded by progressively younger rocks outward, is the diagnostic map signature of an anticline — specifically a pericline or dome where the structure is closed in three dimensions',
            'The fold type cannot be determined from the map pattern alone; you also need to measure the dip direction of the limbs at the outcrop to know whether it is an anticline or syncline',
            'The pattern of oldest in the centre and younger outward indicates a volcanic caldera or impact structure, not a fold; geological folds cannot expose the oldest rocks in the core',
          ],
          correct: 1,
          explain: "The key to reading fold type from a geological map is the younging direction and the age of rocks in the fold core. In any undisturbed sedimentary sequence, beds young upward (younger rocks are deposited on top of older ones). When a fold forms and is then eroded to a roughly flat surface, the erosion surface cuts through different structural levels. For an anticline, the fold hinge is the structurally highest point — it has uplifted the deepest (oldest) rocks closest to the surface. Erosion removes the overlying younger rocks from the arch first, progressively exposing older rocks in the core. On the map, the oldest rocks appear at the centre, surrounded by younger rocks on the limbs. For a syncline, the hinge is the structurally lowest point; the youngest rocks accumulate in the depression and are sheltered from erosion. The map pattern shows youngest in the core, older outward. The question describes Ordovician (the oldest Paleozoic period in the sequence: Ordovician < Silurian < Devonian) in the centre, surrounded by younger periods outward — this is unambiguously an anticline. When the anticline is closed in three dimensions (elliptical formation outcrops), it is called a pericline or dome. Option A applies the syncline rule incorrectly. Option C is wrong: the formation age pattern alone is sufficient to identify the fold type in an unoverturned sequence; dip measurements confirm and quantify the geometry but are not strictly required for the classification. Option D confuses a geological fold with a volcanic or impact structure — both have completely different formation mechanisms and outcrop patterns.",
        },
        {
          q: 'You are constructing a cross-section across a north-dipping sequence of sedimentary rocks. The surface trace of the main contact shows a clear V pointing north (upstream) where it crosses a south-draining valley. Is this consistent with the measured north dip? Apply the V-rule.',
          a: [
            "No — if the beds dip north and the valley drains south, the V should point south (downstream, in the direction of dip). A V pointing north indicates an unmapped fault or an error in the dip measurement",
            "Yes — this is consistent. The beds dip north, which is upstream relative to the south-draining valley. The V-rule predicts that when beds dip upstream (opposite to the stream's flow direction), the contact V's upstream — more strongly and more sharply than for horizontal beds. The V pointing north is exactly what is expected for a north-dipping bed in a south-draining valley. The more pronounced the V relative to the topographic contours, the steeper the upstream dip",
            "The V pointing north is consistent only if the beds are nearly horizontal (dip <5°). Any measurable north dip would produce a V pointing south, so the north-pointing V suggests the dip measurement is in error",
            "The V pointing north means the beds must be horizontal; a truly north-dipping bed always produces east–west V-shapes due to interference between strike direction and the valley axis",
          ],
          correct: 1,
          explain: "When a bed dips upstream (the down-dip direction is opposite to the stream's flow direction), the V-rule predicts that the contact V's in the direction of dip — which in this case is north, the same as upstream. This is the most straightforward and most commonly tested application of the V-rule. The contact is 'steered' by the dipping surface into the valley more strongly than topographic contours alone produce. For beds dipping upstream, the contact V's upstream — in the dip direction — and the V is *more pronounced* than the topographic V for horizontal beds. The steeper the upstream dip, the sharper and more exaggerated the V relative to topographic contours. If the beds were horizontal, the contact would follow the contour lines exactly, V-ing northward (upstream) with exactly the same shape as the topographic V. If the beds dipped downstream (south) but gently, the contact would still V north but less pronounced. Only if the beds dipped south (downstream) more steeply than the valley walls would the V reverse to point south. The observation — V pointing north in a south-draining valley — is entirely consistent with north-dipping beds and serves to *confirm* the measured north dip. Options A and C both incorrectly describe the V-rule for upstream-dipping beds. Option D invents a false rule about strike direction controlling the V orientation.",
        },
      ],
    },
  ],
}

export default geologicalMaps
