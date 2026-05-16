import { Layers, Mountain } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const structuralGeology: Lesson = {
  id: 'geol-201-2-5-2',
  title: 'Structural Geology: Folds and Faults',
  track: 'geo',
  trackName: 'Geology',
  level: 'Intermediate',
  duration: '22 min',
  xpReward: 250,
  description: 'The Himalayan belt records 50 million years of collision in its folds and thrust sheets; the Basin and Range records extension in its normal faults. Every fold and fault in an outcrop is a record of a force applied to rock at a particular depth, temperature, and rate. This lesson covers brittle vs. ductile deformation, fold anatomy, fault kinematics, and the field evidence used to recognise each.',
  sources: [
    { org: 'USGS', title: 'This Dynamic Earth — Plate Tectonics (Public Domain)', url: 'https://pubs.usgs.gov/gip/dynamic/dynamic.html' },
    { org: 'USGS', title: 'Earthquake Hazards and Fault Systems (Public Domain)', url: 'https://earthquake.usgs.gov/hazards/qfaults/' },
    { org: 'OpenStax', title: 'Physical Geology, 2nd ed., Ch. 12 (CC-BY 4.0)', url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'PRI', title: 'Earth@Home: Structural Geology', url: 'https://earthathome.org' },
    { org: 'AGI', title: 'Glossary of Geology, 5th ed.', url: 'https://www.americangeosciences.org/pubs/glossary' },
    { org: 'GSA', title: 'Structural Geology Educational Resources — Geological Society of America', url: 'https://www.geosociety.org' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The rock record of tectonic force',
      body: `The Himalayan mountain belt is the product of two continents colliding at roughly 5 cm (2.0 in) per year for the past 50 million years. The result — visible from space — is 2,500 km (1553 mi) of folded and thrust-faulted rock, piled up in sheets kilometres thick. At the other extreme, the Basin and Range Province of the western United States is being pulled apart: hundreds of normal-fault-bounded basins and uplifted ranges stretching across Nevada, Utah, and Arizona.

Every fold, every fault, every slickenlined surface you find in the field is a record of a force applied to rock at a particular depth, temperature, and rate. Understanding that record — reading the structures to infer the forces — is the core of structural geology. A fault that slipped metres in seconds records brittle failure near the surface; a gently curved fold that once lay 20 km (12 mi) underground records ductile flow of rock over millions of years. Same rock, different conditions — entirely different structures.`,
      keyTerms: [
        {
          term: 'brittle deformation',
          def: 'Rock deformation by fracture rather than flow. Occurs at shallow crustal depths (low confining pressure), low temperatures, and/or high strain rates. Results in faults (displacement along a fracture plane) and joints (fractures without displacement). The brittle behaviour of the same rock that flows ductilely at depth demonstrates that the mode of deformation is controlled by conditions, not solely by rock type.',
        },
        {
          term: 'ductile deformation',
          def: 'Rock deformation by continuous flow without macroscopic fracture, like very stiff putty. Occurs at depth (high confining pressure), high temperatures (typically >300°C (572°F) for quartz-rich crust), and/or slow strain rates. Results in folds, foliation, and mylonite. The brittle–ductile transition in continental crust occurs at roughly 15–20 km (9.3–12 mi) depth under typical geothermal gradients.',
        },
        {
          term: 'fold',
          def: 'A curved or bent rock layer produced by ductile deformation. Key geometric elements: hinge line (line of maximum curvature, the crest or trough); limbs (the flanking dipping panels on either side of the hinge); axial plane (the plane that contains all hinge lines of a fold and divides it approximately symmetrically); plunge (the angle at which the hinge line departs from horizontal). Anticlines arch upward; synclines sag downward.',
        },
        {
          term: 'fault',
          def: 'A fracture or zone of fractures in rock along which one side has moved relative to the other. Classified by the relative motion of the hanging wall (the block above a non-vertical fault plane) and the footwall (the block below). Normal faults: hanging wall moves down (extension). Reverse faults: hanging wall moves up (compression). Strike-slip faults: horizontal motion, sub-vertical plane.',
        },
        {
          term: 'slickenlines',
          def: 'Linear striations or polished ridges on a fault plane (slickenside) produced by friction during slip. Their orientation records the direction of the last movement episode. Asymmetric steps (mineral fibres or tool marks) on the fault surface indicate the sense of motion: the steps "face" in the direction the opposing block moved.',
        },
        {
          term: 'horst and graben',
          def: 'Fault-bounded terrain in extensional tectonic settings. A graben (German: ditch) is a down-dropped block bounded on each side by normal faults, forming a valley. A horst (German: ridge) is an upthrown block between two grabens, forming an elevated range. Together they produce the alternating valley-and-ridge topography characteristic of rift zones such as the East African Rift and the Basin and Range Province.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'How rocks deform: stress, strain, folds',
      body: `**Stress and strain.** Stress is force per unit area applied to a rock body. Three types are relevant to geology: *compressional stress* (squeezing — rock layers shorten and thicken), *tensional stress* (extension — layers lengthen and thin), and *shear stress* (lateral displacement along a plane). Strain is the resulting deformation. Elastic strain is recoverable when stress is removed (seismic waves are transmitted by elastic strain); plastic or permanent strain is not.

**Brittle vs. ductile deformation.** At shallow depths (low confining pressure), low temperatures, and high strain rates, rock responds to stress by fracturing — *brittle deformation*, producing faults and joints. At depth (high confining pressure), high temperatures (>~300°C (572°F) for quartz-dominated crust), and slow strain rates, rock flows continuously without fracturing — *ductile deformation*, producing folds and foliation. The brittle-to-ductile transition is not a sharp boundary but occurs at roughly 15–20 km (9.3–12 mi) depth in typical continental crust. The same quartz-sandstone that fractures at the surface can fold at depth; the conditions, not the rock type alone, determine the deformation style.

**Fold anatomy.** A fold has these geometric elements: the *hinge line* is the line of maximum curvature — the crest of an anticline or the trough of a syncline. The *limbs* are the flanking panels on either side of the hinge. The *axial plane* contains all hinge lines of the fold and divides it approximately symmetrically; where the axial plane intersects the surface is the *axial trace*. The *plunge* is the angle at which the hinge line inclines from horizontal; a plunging fold has a nose that closes (its formation stripes form a curved end) in the plunge direction.

**Fold types.** An *anticline* has beds arching upward (convex up); the oldest rocks are exposed in the eroded core; limbs dip away from the axial plane. A *syncline* has beds sagging downward (concave up); the youngest rocks are preserved in the core; limbs dip toward the axial plane. An *overturned fold* has one limb tilted past vertical so that both limbs dip in the same direction and one limb has inverted (older-over-younger) stratigraphy. A *recumbent fold* has its axial plane nearly horizontal and occurs in high-grade metamorphic terranes and deep fold belts under extreme ductile conditions. An *isocline* is a fold with parallel limbs — a product of very high strain.`,
      cards: [
        {
          name: 'Fold Classification',
          icon: Layers,
          color: BRAND.jade,
          desc: 'Stress types: compressional (shortening/thickening), tensional (extension/thinning), shear (lateral). Brittle: fracture; shallow, low T, fast strain rate → faults, joints. Ductile: flow; deep, high T (>300°C (572°F)), slow strain rate → folds, foliation. Brittle–ductile transition: ~15–20 km (9.3–12 mi) in continental crust. Fold elements: hinge (max curvature), limbs (flanking panels), axial plane (contains all hinges), plunge (hinge angle below horizontal). Anticline: convex up; oldest in core; limbs dip outward. Syncline: concave up; youngest in core; limbs dip inward. Overturned: one limb past vertical; both dip same way; inverted stratigraphy on one limb. Recumbent: axial plane near horizontal; high strain. Isocline: parallel limbs; extreme ductile deformation.',
          examples: "Zagros fold belt (Iran): spectacular anticlines at surface controlled by salt décollement at depth; anticline cores expose Cretaceous carbonates while younger Miocene rocks rim the limbs — visible from satellite imagery as elliptical ridges · Jura Mountains (France/Switzerland): fold-and-thrust belt detached on Triassic evaporites; tight upright anticlines with limestone ridges and syncline valleys hold Jurassic and Cretaceous strata in textbook map patterns · Recumbent folds: Swiss Alps contain recumbent nappes where entire fold trains are rotated 90°, with older-over-younger relationships producing kilometres-scale inverted stratigraphy",
        },
      ],
    },
    {
      type: 'concept',
      title: 'Faults and how to recognise them',
      body: `**Normal faults.** The hanging wall (block above the fault plane) moves *down* relative to the footwall. Caused by tensional (extensional) stress. Fault planes typically dip at 55–70°. Normal faults produce *graben* (down-dropped blocks) and *horst* (upthrown blocks) topography. Common in rift zones (East African Rift, Basin and Range, mid-ocean ridge flanks), passive margins, and continental back-arc basins.

**Reverse faults.** The hanging wall moves *up* relative to the footwall. Caused by compressional stress (horizontal shortening). Fault planes typically dip at >45°. Common in convergent plate margins and orogenic belts. The hanging wall contains older (deeper) rocks thrust above the younger footwall rocks.

**Thrust faults.** A low-angle reverse fault (dip <45°, often <30°). The hanging wall is transported over the footwall over distances of tens to hundreds of kilometres. Characteristic of fold-and-thrust belts (Rockies, Alps, Himalayas, Appalachians). *Décollements* (detachment faults) are sub-horizontal thrusts on which thrust sheets ride above a weak layer (often evaporites or overpressured shale). *Klippe* are isolated remnants of thrust sheets left behind erosion; *windows* are erosional windows through a thrust sheet exposing the footwall below.

**Strike-slip faults.** Horizontal motion, with the fault plane approximately vertical. *Dextral* (right-lateral): the block across the fault moves to the right as you face the fault. *Sinistral* (left-lateral): moves to the left. Common at transform plate boundaries (San Andreas, North Anatolian, Alpine Fault NZ) and as lateral ramps in fold-and-thrust belts.

**Field recognition of faults.** Four key lines of evidence: (1) *Slickenlines* — linear striations or fibrous mineral growths on the polished fault plane; their orientation records the slip direction; asymmetric steps indicate sense of motion. (2) *Fault breccia* — angular rock fragments ground along the fault zone during brittle slip; at greater depth, fine-grained *mylonite* forms by ductile grinding and shows fabric alignment. (3) *Drag folding* — competent beds bent near the fault surface as they were dragged during slip; the fold geometry indicates the sense of motion. (4) *Offset markers* — a previously continuous feature (dyke, bed, stream, road) displaced across the fault; the direction and magnitude of offset define the fault kinematics definitively.`,
      cards: [
        {
          name: 'Fault Kinematics and Field Evidence',
          icon: Mountain,
          color: BRAND.coral,
          desc: 'Normal fault: hanging wall DOWN; extension; dip 55–70°; graben/horst; rift zones, passive margins. Reverse fault: hanging wall UP; compression; dip >45°; convergent margins, orogenic belts. Thrust fault: low-angle reverse (<45°, often <30°); long-distance transport; fold-and-thrust belts; décollement = sub-horizontal detachment. Strike-slip: horizontal motion; near-vertical plane; dextral (right-lateral) or sinistral (left-lateral); transform plate boundaries. Field evidence: (1) slickenlines — slip direction; asymmetric steps = sense; (2) fault breccia / mylonite — brittle vs. ductile grinding; (3) drag folding — indicates slip sense; (4) offset markers — most definitive — direction and magnitude of displacement.',
          examples: 'San Andreas Fault (California): dextral strike-slip; ~6 cm/yr (2.4 in/yr) relative motion; cumulative offset ~315 km (196 mi) since ~18 Ma; offset stream channels (Wallace Creek offset ~130 m (427 ft)) are a textbook example of marker offsets defining fault kinematics · Heart Mountain detachment (Wyoming): one of the largest known sub-horizontal thrusts; ~50 km (31 mi) of transport; Paleozoic carbonates emplaced over younger Eocene volcanic rocks · East African Rift System: active normal fault system producing Lake Tanganyika graben (1,470 m (4823 ft) deep — deepest African lake); fault scarps on west shore reach 1,000 m (3281 ft) in height',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Fault and Fold Classification Explorer',
      body: 'Select any tectonic structure or stress type to see its definition, the conditions that produce it, and its connections to related structures. The connections reveal how each structure relates to the broader stress regime.',
      interaction: {
        type: 'node-explorer',
        nodes: [
          {
            id: 'compressional',
            label: 'Compressional Stress',
            description: 'Horizontal squeezing force that shortens and thickens the crust. Produces reverse faults, thrust faults, and folds. Dominant stress regime at convergent plate margins (subduction zones, continent–continent collision). Also produces mountain belts and fold-and-thrust belts.',
            connections: ['reverse', 'thrust', 'anticline', 'syncline'],
          },
          {
            id: 'extensional',
            label: 'Extensional Stress',
            description: 'Horizontal pulling-apart force that stretches and thins the crust. Produces normal faults, grabens, and horsts. Dominant at divergent plate boundaries (mid-ocean ridges), continental rifts (East African Rift, Basin and Range), and passive margins during rifting.',
            connections: ['normal', 'graben'],
          },
          {
            id: 'shear',
            label: 'Shear Stress',
            description: 'Lateral sliding force parallel to a surface. Produces strike-slip faults. Most common at transform plate boundaries where plates slide past each other horizontally, and as lateral ramps in fold-and-thrust belts.',
            connections: ['strike_slip'],
          },
          {
            id: 'anticline',
            label: 'Anticline',
            description: 'Fold with beds arching upward (convex up). Oldest rocks in eroded core; limbs dip away from axial plane. On a geological map: oldest formation in centre, younger outward. A pericline (dome) is a closed anticline. Produced by compressional shortening — common in fold-and-thrust belts.',
            connections: ['compressional', 'syncline'],
          },
          {
            id: 'syncline',
            label: 'Syncline',
            description: 'Fold with beds sagging downward (concave up). Youngest rocks preserved in core; limbs dip toward axial plane. On a geological map: youngest formation in centre, older outward. A basin is a closed syncline. Synclines and anticlines form together as paired structures in folded terranes.',
            connections: ['compressional', 'anticline'],
          },
          {
            id: 'normal',
            label: 'Normal Fault',
            description: 'The hanging wall (block above the fault plane) moves down relative to the footwall. Caused by extensional stress. Fault planes typically dip at 55–70°. Creates grabens (down-dropped valleys) and horsts (uplifted ranges). Field evidence: footwall exposed at surface, scarp faces downslope; hanging wall contains younger exposed rocks at the fault trace.',
            connections: ['extensional', 'graben'],
          },
          {
            id: 'reverse',
            label: 'Reverse Fault',
            description: 'The hanging wall moves up relative to the footwall. Caused by compressional stress. Fault planes dip >45°. The hanging wall carries older (deeper) rocks over the younger footwall sequence. Common at convergent margins and orogenic belts. Distinguished from thrust faults by dip angle (>45° vs. <45°).',
            connections: ['compressional', 'thrust'],
          },
          {
            id: 'thrust',
            label: 'Thrust Fault',
            description: 'A low-angle reverse fault (dip <45°, often <30°). Transports rock sheets tens to hundreds of km over sub-horizontal décollements (detachment surfaces). Produces klippe (isolated erosional remnants of thrust sheets) and windows (erosional holes through a thrust sheet). Classic structures of the Himalayas, Alps, Rockies, and Appalachians.',
            connections: ['compressional', 'reverse'],
          },
          {
            id: 'strike_slip',
            label: 'Strike-slip Fault',
            description: 'Horizontal motion along a near-vertical fault plane. Dextral (right-lateral): the block across the fault moves right as you face it. Sinistral (left-lateral): moves left. Produces offset streams, ridges, and other linear markers. San Andreas (dextral), North Anatolian (dextral), and Alpine Fault NZ (dextral) are major examples.',
            connections: ['shear'],
          },
          {
            id: 'graben',
            label: 'Graben',
            description: 'A down-dropped crustal block bounded on both sides by inward-dipping normal faults, forming a valley or basin. The Rhine Graben, East African Rift lakes, and Death Valley are active grabens. Half-grabens are bounded by a normal fault on one side only. A horst is the uplifted block flanking a graben.',
            connections: ['extensional', 'normal'],
          },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Under what conditions does rock deform in a brittle manner versus a ductile manner? Give one geological structure produced by each mode.',
          a: [
            'Brittle deformation occurs at high temperatures and deep crustal levels, producing fold nappes and gneissic domes; ductile deformation occurs at the surface under low temperature and pressure, producing joints and landslides',
            'Brittle deformation occurs at shallow crustal depths (low confining pressure), low temperatures, and/or high strain rates, and produces faults and joints. Ductile deformation occurs at depth (high confining pressure, temperatures typically >~300°C (572°F) for quartz-dominated crust), and/or slow strain rates, and produces folds and foliation. The same rock can behave brittlely near the surface and ductilely at depth; the deformation mode is controlled by conditions, not solely by rock type',
            'The difference between brittle and ductile deformation is controlled entirely by rock type: granite always deforms brittlely regardless of depth, while shale always deforms ductilely; conditions of depth and temperature are secondary',
            'Brittle deformation requires water-saturated rocks at all depths; ductile deformation requires dry rocks under any pressure conditions; the transition between the two is controlled by fluid pressure rather than depth or temperature',
          ],
          correct: 1,
          explain: "Brittle vs. ductile deformation is one of the most fundamental contrasts in structural geology. Brittle deformation occurs when confining pressure is low (shallow depths), temperature is low, and/or strain rate is fast — conditions where the cohesive strength of the rock is exceeded and it fractures rather than flows. Products: faults (displacement along a fracture) and joints (fractures without displacement). Ductile deformation occurs when confining pressure is high (deep crustal levels suppress fracture), temperature is high (thermally activated dislocation creep and diffusion mechanisms allow mineral grains to flow), and/or strain rate is very slow (time allows creep mechanisms to operate). Products: folds, foliation, and mylonite. The brittle–ductile transition in typical quartz-dominated continental crust occurs at roughly 15–20 km (9.3–12 mi) depth, where temperatures reach ~300°C (572°F) (the temperature at which quartz begins to deform plastically). The same sandstone layer that fractures at the surface can fold smoothly 20 km (12 mi) underground. Option A inverts the depth-temperature relationships. Option C is incorrect: rock type is secondary to conditions — granite can fold ductilely under sufficient pressure and temperature (as it does in the deep Himalayan crust). Option D introduces a false controlling variable — fluid pressure does affect the brittle–ductile transition, but temperature and confining pressure are the primary controls.",
        },
        {
          q: 'Describe the geometric difference between an anticline and a syncline. If you are standing on the limb of one of these folds in the field and looking at a series of tilted sedimentary beds, what observation most quickly helps you determine which type you are on?',
          a: [
            'Anticlines have steeply dipping limbs and synclines have gently dipping limbs; standing on a limb, you can determine fold type simply by measuring the dip angle — steeper dip means anticline',
            "An anticline has beds arching upward (convex up), with the oldest rocks exposed in the eroded core and limbs dipping away from the axial plane. A syncline has beds sagging downward (concave up), with the youngest rocks in the core and limbs dipping toward the axial plane. Standing on a limb, the most reliable single observation is the younging direction: determine which way beds become younger using sedimentary way-up indicators (graded bedding, cross-bedding, load casts). If beds young toward the fold hinge (in the direction of dip), you are on an anticline limb; if beds young away from the hinge, you are on a syncline limb. Alternatively, walking toward the fold axis and noting whether rocks become older (anticline) or younger (syncline) identifies the fold type",
            'Anticlines always have vertical or near-vertical axial planes while synclines always have overturned (past-vertical) axial planes; you can distinguish them by measuring the tilt of the fold axis with a clinometer',
            "Anticlines and synclines cannot be distinguished in the field by observation alone; you need a geological map of the area to determine which type of fold you are on by reading the regional formation pattern",
          ],
          correct: 1,
          explain: "The geometric definitions of anticline and syncline are based on the direction of curvature and the age distribution of rocks. An anticline (from Greek 'leaning against') has beds arching upward — convex upward — with the oldest rocks at the eroded crest and limbs dipping away from the axial plane. A syncline (from Greek 'leaning together') has beds sagging downward — concave upward — with the youngest rocks preserved in the core and limbs dipping toward the axial plane. In the field, standing on a single limb of either fold, the beds dip in the same direction (toward the fold axis for both limbs of both fold types, from your position on one limb). The key is *younging direction*: sedimentary way-up indicators (graded bedding = coarser at base, finer at top = normal-graded = up-way; cross-bedding foresets = lean in the direction of current flow, tops of sets = up; load casts = on the base of beds, pointing downward) tell you which way is stratigraphically up. If beds young *toward* the fold hinge (in the direction you walk approaching the axial trace), you are on an anticline (oldest in core = beds get older toward hinge, so rocks young *away* from hinge — wait, let me be precise: on an anticline limb, you walk toward the hinge and rocks *get older*; you walk away from the hinge and rocks *get younger*. So younging is away from the anticline hinge). On a syncline limb: walk toward the hinge and rocks *get younger*; walk away and rocks *get older*. Option A is wrong: dip angle depends on the strain and geometry of the fold, not the fold type. Option C inverts the axial plane geometry — both types can have vertical, inclined, or overturned axial planes. Option D is too pessimistic: way-up indicators and stratigraphic age determination allow field classification.",
        },
        {
          q: 'You find a fault in the field. The fault plane dips at 60°. The rocks in the hanging wall (the block above the fault plane) are stratigraphically older than the rocks in the footwall (the block below). What type of fault is this, and what tectonic setting is it consistent with?',
          a: [
            'This is a normal fault. Normal faults always place older rocks above younger rocks because the hanging wall drops down, carrying older rocks from shallow levels into contact with younger rocks at depth',
            'This is a reverse fault. On a reverse fault, the hanging wall moves upward, transporting deep (older) rocks over shallower (younger) footwall rocks. A 60° dip places this in the reverse fault category (dip >45°, distinguishing it from a thrust fault at <45°). This is consistent with a compressional tectonic setting: a convergent plate margin, an orogenic belt, or the shortening limb of a fold-and-thrust system',
            'This is a strike-slip fault. Strike-slip faults juxtapose rocks of different ages because the horizontal motion brings different stratigraphic levels into contact across the fault plane; the 60° dip is typical of strike-slip faults in California',
            'The fault type cannot be determined from dip angle and the relative age of hanging wall vs. footwall rocks alone; you would need slickenline data to identify the kinematics',
          ],
          correct: 1,
          explain: "The key observations here are: (1) fault plane dips at 60°; (2) hanging wall contains older rocks than footwall. The hanging wall is the block above the fault plane; the footwall is below. For a reverse fault, the hanging wall moves upward relative to the footwall during compression. This transports rock from deeper (and therefore older, in an undeformed sedimentary sequence) crustal levels upward over the younger rocks of the footwall. The result is that the hanging wall contains older rocks adjacent to younger footwall rocks — exactly the pattern described. The 60° dip is consistent with a reverse fault (dip >45°) rather than a thrust fault (dip <45°). Tectonic setting: compressional — convergent plate margins, continent–continent collision zones, and orogenic belts are the classic environments. For comparison, a normal fault (extensional) would place *younger* rocks in the hanging wall above *older* footwall rocks, because the hanging wall drops *down*, juxtaposing its shallower (younger) rocks against the deeper (older) footwall. Option A describes the relative age pattern for normal faults incorrectly — normal faults do NOT typically place older rocks above younger; the opposite is true. Option C is wrong: strike-slip faults have near-vertical planes and create age differences by lateral rather than vertical displacement; 60° dip is actually steeper than typical reverse fault but not characteristic of strike-slip. Option D understates the diagnostic power of the observations: hanging-wall age relative to footwall age combined with dip angle is strongly diagnostic.",
        },
        {
          q: 'Describe three independent lines of field evidence you could use to confirm that a contact between two rock units is a fault rather than a normal stratigraphic contact.',
          a: [
            'The three lines of evidence are: (1) different rock types on each side; (2) a change in dip angle across the contact; (3) the presence of igneous intrusions near the contact, which indicate heat from frictional fault movement',
            'Three independent lines of evidence: (1) Slickenlines or slickensides on the contact surface — polished, striated or fibrous surfaces with asymmetric steps indicating the direction and sense of slip; no normal depositional process produces slickenlines. (2) Fault breccia or cataclasite — angular, broken rock fragments or fine-grained crushed rock along the contact zone, produced by brittle grinding during fault movement; mylonite (plastically sheared fine-grained rock with foliation) at greater depths. (3) Offset markers — a formerly continuous feature (dyke, distinctive bed, stream valley, igneous contact) that has been displaced across the contact; the offset direction and magnitude define the fault kinematics. Additional evidence: drag folding of beds adjacent to the contact; missing or repeated stratigraphy across the contact (indicating significant displacement)',
            'The three lines of evidence are: (1) the contact is nearly vertical; (2) different metamorphic grades on each side; (3) the presence of quartz veins along the contact, which indicate fluid flow during faulting',
            'Fault contacts can only be confirmed by geophysical surveying (seismic reflection, gravity anomaly) because surface observations alone cannot distinguish faults from unconformities or intrusive contacts',
          ],
          correct: 1,
          explain: "Each line of evidence in Option B is diagnostic of faulting because no sedimentary depositional process produces it. Slickenlines: sedimentary processes do not produce polished, lineated fault surfaces — the linear striations and asymmetric mineral fibre steps are produced by friction and mineral growth during fault slip, and their orientation directly records the slip vector. Fault breccia and mylonite: angular crushing (breccia) and plastic shearing (mylonite) along a narrow zone are mechanically produced only by fault movement — depositional contacts do not produce these textures. Offset markers: if a geologically distinctive and originally continuous feature (a specific dyke, a marker bed, a distinctive igneous contact, or even a modern topographic feature like a stream valley) is visibly broken and displaced across the contact, this is essentially definitive proof of faulting — no depositional process can produce this. The combination of all three in the same contact is conclusive. Option A describes plausible observations but none is diagnostic of faulting specifically: different rock types on either side is true of any contact (depositional, intrusive, or fault); dip changes occur across unconformities and intrusive contacts; igneous intrusions near contacts are not caused by frictional heat (fault heating is typically 100s of °C for milliseconds, not enough to melt rock except in extreme pseudotachylite formation). Option C lists observations that are consistent with faulting but not exclusively diagnostic: vertical contacts also occur with dykes; metamorphic grade changes can occur at intrusive contacts; quartz veins occur along any fluid pathway, not only faults. Option D is wrong: surface geology provides highly diagnostic evidence for faults.",
        },
        {
          q: 'On a geological map of a continental rift zone you observe a series of tilted fault blocks — alternating uplifted ranges and down-dropped basins. What types of faults bound these blocks? What is the geological terminology for the uplifted and downthrown blocks? Explain the stress regime.',
          a: [
            'The blocks are bounded by reverse faults (which produce uplift); the uplifted blocks are called anticlines and the down-dropped blocks are called synclines; the stress regime is compressional, matching the ridge-push force at mid-ocean ridges',
            'The blocks are bounded by normal faults, typically dipping at 55–70°. The uplifted blocks are called horsts; the down-dropped blocks are called grabens (or half-grabens if bounded by a fault on one side only). The stress regime is tensional (extensional): the crust is being pulled apart horizontally, causing it to thin and fault into a series of tilted blocks. As the hanging wall of each normal fault drops down, the footwall is relatively uplifted, producing the horst-and-graben topography. Continental rifts (East African Rift, Basin and Range, Rhine Graben) are the classic settings',
            'The blocks are bounded by thrust faults that are now inactive and tilting due to isostatic rebound; the uplifted blocks are called horsts and the down-dropped blocks are called grabens; the original stress regime was compressional but has reversed to extensional during cooling',
            'The blocks are bounded by strike-slip faults with a significant dip-slip component; the alternating topography is produced by transpressional (positive flower structure) and transtensional (negative flower structure) deformation along a transform boundary',
          ],
          correct: 1,
          explain: "Continental rift zones are the type example of extensional tectonics. The crust is being pulled apart horizontally (tensional stress), causing it to fail along normal faults. Normal faults dip at 55–70° and have the hanging wall moving downward relative to the footwall. In a rift, a series of normal faults creates alternating down-dropped blocks (grabens) and relatively uplifted blocks (horsts). The term graben (German: ditch) refers to the down-dropped block bounded by inward-dipping normal faults on both sides; a half-graben is bounded by a normal fault on one side only, producing an asymmetric basin. The term horst (German: thicket, ridge) refers to the uplifted block between two grabens. The stress causing this is extensional: the horizontal minimum principal stress (σ₃) is less than the lithostatic (vertical) stress, so rocks fail along steeply dipping normal fault planes. Examples: East African Rift System (Lake Tanganyika graben, ~1,470 m (4823 ft) deep); Basin and Range Province (>300 basins and ranges in Nevada–Utah–Arizona); Rhine Graben (SW Germany). Option A applies the wrong fault type and wrong terminology — reverse faults produce compression and shortening, not extension. Option C introduces an incorrect mechanism — isostatic rebound creates vertical motion, not the specific horst-graben pattern. Option D describes a transform fault setting, not a rift zone.",
        },
      ],
    },
  ],
}

export default structuralGeology
