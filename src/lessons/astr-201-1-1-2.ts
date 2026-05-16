import { Circle, Mountain, Orbit } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const craterMorphologyAndClassification: Lesson = {
  id: 'astr-201-1-1-2',
  title: 'Crater Morphology and Classification',
  track: 'ast',
  trackName: 'Planetary Geology',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: 'Impact craters are not all alike — their shape encodes the size of the impact, the gravity of the target body, and billions of years of subsequent modification. From simple bowl-shaped depressions to multi-ring basins 1,000 km (621 mi) across, each morphological class reveals distinct physics of crater collapse and planetary evolution.',
  sources: [
    { org: 'LPI', title: 'Lunar and Planetary Institute — Crater Morphology and Structure (Melosh 1989, Chapter 5)', url: 'https://www.lpi.usra.edu/publications/books/impact_cratering/' },
    { org: 'NASA', title: 'IODP Expedition 364 — Drilling the Chicxulub Peak Ring (Morgan et al. 2016, Science)', url: 'https://doi.org/10.1126/science.aah6561' },
    { org: 'USGS', title: 'USGS Astrogeology — Earth Impact Database and Terrestrial Impact Structures', url: 'https://astrogeology.usgs.gov/' },
    { org: 'Icarus', title: 'Pike, R.J. (1977) — Size-Dependence in the Shape of Fresh Impact Craters on the Moon, Icarus 31', url: 'https://doi.org/10.1016/0019-1035(77)90037-4' },
    { org: 'Nature', title: 'Morgan et al. (2016) — The formation of peak rings in large impact craters, Science 354', url: 'https://doi.org/10.1126/science.aah6561' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Shape as a window into impact physics and planetary gravity',
      body: `When the Apollo astronauts looked down from lunar orbit, they saw a surface blanketed with circular depressions of every conceivable size — from pits barely visible with the naked eye to multi-ring basins spanning hundreds of kilometres. Yet these craters are not random in their morphology: their shapes follow precise, predictable patterns governed by the laws of physics. A crater's form is a frozen record of its formation mechanics, and reading that record tells planetary scientists the size of the impactor, the gravity of the target, and sometimes the composition of the rock kilometres below the surface.

The most fundamental classification divides impact craters into **simple craters**, **complex craters**, and **multi-ring basins**. Simple craters are bowl-shaped depressions with smooth floors and relatively steep walls — they form when the crater is small enough that rock strength prevents the transient cavity from collapsing. Complex craters form above a gravity- and size-dependent threshold: here, the transient crater floor rebounds upward and the walls collapse inward, producing a shallower, wider depression with a central peak of uplifted deep target material. At the grandest scale, **multi-ring basins** such as the lunar Orientale Basin (930 km (578 mi) diameter) or Callisto's Valhalla (3,800 km (2361 mi) outer ring diameter) develop multiple concentric fault-bounded rings, and the innermost ring likely represents a collapsed peak ring structure rather than a simple crater rim.

The **transition diameter** between simple and complex craters is one of the most useful planetary parameters a geologist can measure from orbit. Because it scales inversely with surface gravity (D_trans ∝ g⁻¹), the transition diameter differs dramatically between bodies: ~2–4 km (2.5 mi) on Earth, ~4 km (2.5 mi) on the Moon, ~8 km (5.0 mi) on Mars. By measuring the transition diameter on an unknown body, one can calculate its surface gravity without needing a spacecraft in orbit — a powerful remote-sensing tool. The fact that Earth's transition diameter is so low (due to high gravity) means that most large terrestrial impact structures are complex craters, while on the Moon even relatively modest-sized craters retain simple morphology. Understanding these morphological classes, their diagnostic features, and the processes that blur them over time is essential groundwork for using craters as chronological tools across the Solar System.`,
      keyTerms: [
        { term: 'simple crater', def: 'The most morphologically straightforward impact crater form, characterised by a bowl-shaped depression with a smoothly curved floor, continuous rim, and relatively steep walls. Simple craters form when the transient crater is small enough that rock strength can support the cavity walls without significant collapse. The depth-to-diameter ratio d/D ≈ 0.2 is approximately constant for simple craters across all planetary bodies. The transition from simple to complex morphology occurs at diameters of ~2–4 km (2.5 mi) on Earth, ~4 km (2.5 mi) on the Moon, ~8 km (5.0 mi) on Mars, and ~15 km (9.3 mi) on the Moon for craters in competent rock — with the transition diameter scaling approximately inversely with surface gravity. The floor of a simple crater is typically coated with a thin layer of breccia (broken rock) and impact melt, overlying fractured but otherwise intact target rock.' },
        { term: 'complex crater', def: 'An impact crater larger than the simple-to-complex transition diameter, characterised by a central peak or central pit, terraced walls, and a shallower depth-to-diameter ratio than simple craters (d/D ≈ 0.1–0.05, decreasing with size). Complex craters form because gravity overcomes rock strength during modification: the transient crater floor rebounds upward (by kilometres in seconds for large impacts), forming the central peak, while the crater walls collapse inward along listric faults to produce the characteristic terraces. The central peak exposes material that was originally kilometres below the pre-impact surface — in some cases bringing lower crustal or even mantle rocks to the surface. Well-preserved examples include Tycho (86 km (53 mi), Moon), Copernicus (93 km (58 mi), Moon), and Gosses Bluff (22 km (14 mi), Australia, ~142 Ma).' },
        { term: 'multi-ring basin', def: 'The largest class of impact structure, characterised by multiple concentric topographic rings beyond the main crater rim, formed in impacts large enough to involve the entire thickness of the target body\'s crust. The innermost ring of a multi-ring basin corresponds to a peak ring structure (the collapsed remnant of a rebounded central peak); outer rings are fault-bounded ridges produced by inward collapse of enormous volumes of target material. The three canonical lunar multi-ring basins are Orientale (930 km (578 mi), ~3.72 Ga), Imbrium (1,160 km (721 mi), ~3.85 Ga), and South Pole-Aitken (2,500 km (1553 mi), >4 Ga — the largest impact structure in the Solar System). On Callisto, the Valhalla multi-ring system extends to 3,800 km (2361 mi) in outer ring diameter, reflecting the icy, low-strength target.' },
        { term: 'ejecta blanket', def: 'The deposit of material thrown out of the transient crater during excavation, distributed around the crater in a roughly continuous sheet that thins with distance from the rim. The proximal ejecta blanket (within 1–2 crater radii) is a thick, hummocky deposit of brecciated and shocked target rock, overlying the pre-impact stratigraphy in inverted order (deepest ejecta lands closest to the rim). Distal ejecta extends to greater distances as thin layers of impact spherules, shocked mineral grains, and tektites. Secondary craters — formed by the impact of large ejecta blocks — surround many fresh craters and can contaminate crater size-frequency distributions used for age dating if not identified and excluded. Thickness of continuous ejecta blanket: t(r) ≈ 0.14 R_c (r/R_c)^(−3) where R_c is crater radius and r is distance from centre.' },
        { term: 'peak ring', def: 'A ring of hills inside the main rim of a large complex crater, located roughly halfway between the crater centre and the rim, formed by the collapse of an over-heightened central peak during the modification stage. Peak rings are found in craters typically larger than ~30–50 km (31 mi) in diameter, depending on target gravity and composition. The formation mechanism was confirmed by the 2016 International Ocean Discovery Program (IODP) drilling of the Chicxulub peak ring off Mexico\'s Yucatán coast: the peak ring consists of suevite (impact breccia), impact melt rock, and shocked granite from the lower crust that was uplifted ~8–10 km (6.2 mi) and then collapsed outward and downward to form the ring. The Chicxulub peak ring rocks have anomalously low density and seismic velocity, consistent with shock-induced fracturing and porosity increase.' },
        { term: 'preservation state', def: 'The degree to which a crater retains its original morphological features after formation, ranging from pristine (fresh-appearing with sharp rims, visible ejecta, and undegraded interior) to heavily degraded (subdued rim topography, filled floor, eroded ejecta). On the Moon, where erosion is extremely slow (micrometeorite gardening at ~1 mm/Myr), craters from 3.8 Ga remain morphologically recognisable. On Earth, active erosion, tectonic deformation, burial by sediment, and subduction of oceanic crust have destroyed the vast majority of the impact record: only ~200 confirmed terrestrial impact structures are known, compared to the thousands that must have formed. On Mars, preservation varies dramatically with terrain age — ancient highlands are heavily cratered, while young volcanic plains (e.g., Amazonis Planitia) are nearly crater-free.' },
      ],
    },
    {
      type: 'concept',
      title: 'Simple, complex, and multi-ring: the morphological spectrum',
      body: `The three morphological classes of impact craters span nine orders of magnitude in diameter and reflect fundamentally different physics of gravitational collapse. Each class has a characteristic set of diagnostic features recognisable from orbital imagery and surface geology.

**Simple craters** are the archetypal impact crater: a bowl-shaped hole in the ground with a raised rim and a flat to slightly curved floor. The raised rim — typically 3–5% of the crater diameter in height — is composed of overturned ejecta, with the original surface stratigraphy now inverted (the deepest excavated layers are on top, the shallowest on the bottom). Simple craters have a depth-to-diameter ratio of approximately 0.2, and this ratio remains remarkably constant across all planetary bodies for craters below the transition diameter. Below the rim lies a lens of breccia (fractured rock) and impact melt up to 30% of the crater depth. Simple craters can themselves be subdivided by preservation: a "fresh" simple crater like Meteor Crater (Barringer), Arizona — only 50,000 years old — retains all these features in excellent condition. The Moon's Mare Tranquillitatis is dotted with thousands of simple craters ranging from metres to kilometres in diameter.

**Complex craters** begin to appear above the simple-to-complex transition diameter and display a progressively richer set of morphological features as diameter increases. The central peak — a mountain of uplifted target rock rising from the crater floor — is the hallmark of mid-sized complex craters. For Copernicus (93 km (58 mi), Moon), the central peak rises ~1.2 km (0.7 mi) above the floor and exposes material from depths of ~10 km (6.2 mi) below the pre-impact surface, providing a window into the lunar deep crust. Terraced walls — a series of concentric inward-facing fault scarps — surround the crater interior, marking where large blocks of the crater rim slid inward along listric faults during modification. As diameter increases further, the central peak itself becomes unstable and collapses outward to form a **central pit** (in ice-rich targets like Ganymede) or a **peak ring** (in rock targets).

**Multi-ring basins** are the geological superlatives of the Solar System. Lunar Orientale, at 930 km (578 mi) diameter, is the youngest and best-preserved lunar multi-ring basin, formed ~3.72 Ga. Its structure consists of three main rings: the Montes Rook inner ring (~480 km (298 mi)), the Montes Rook outer ring (~620 km (385 mi)), and the Montes Cordillera (~930 km (578 mi)). The interior of the basin was flooded by mare basalt volcanism in some regions but the ring structure remains clearly visible in topographic data from the Lunar Reconnaissance Orbiter (LRO). South Pole-Aitken Basin (SPA) at 2,500 km (1553 mi) diameter and 8 km (5.0 mi) depth is the largest and oldest confirmed impact structure in the Solar System, predating most of the preserved lunar crater record. On Callisto, the Valhalla multi-ring system (outer ring ~3,800 km (2361 mi) diameter) formed in a body with a differentiated icy crust, producing a more subdued ring structure due to viscous relaxation of the ice over geological time.`,
      cards: [
        {
          name: 'Simple Craters: Bowl-Shaped Benchmarks',
          icon: Circle,
          color: BRAND.accent,
          desc: 'Diameter below transition (~2–4 km (2.5 mi) on Earth, ~4 km (2.5 mi) on Moon). Bowl-shaped, d/D ≈ 0.2 (constant across bodies). Raised rim of inverted ejecta stratigraphy. Floor lens of breccia + impact melt, up to 0.3× crater depth. Smooth, continuous walls without terracing. On Earth, very few simple craters preserved due to rapid erosion; Moon retains simple craters from Archean-equivalent ages. Transition diameter D_trans ∝ g⁻¹: D_trans(Moon) ≈ 4 km (2.5 mi), D_trans(Earth) ≈ 2–3 km (1.9 mi), D_trans(Mars) ≈ 8 km (5.0 mi) — ratio matches g ratios precisely.',
          examples: 'Meteor Crater (Barringer), Arizona: 1.2 km (0.7 mi) diameter, 175 m (574 ft) deep, 50,000 years old — best-preserved terrestrial simple crater; iron meteorite fragments found in surrounding plains · Linné Crater, Moon: 2.2 km (1.4 mi) diameter, pristine simple crater on Mare Serenitatis; LRO images reveal sharp rim and smooth bowl interior · Pingualuit Crater, Quebec: 3.4 km (2.1 mi) diameter, ~1.4 Ma; nearly perfectly circular lake-filled simple crater; water in the lake is among the purest on Earth due to minimal inflow',
        },
        {
          name: 'Complex Craters: Peaks, Terraces, and Rings',
          icon: Mountain,
          color: BRAND.gold,
          desc: 'Diameter above transition; d/D decreases from ~0.1 at transition to ~0.04 for largest craters (gravitational collapse shallows floor). Central peak of uplifted deep target rock (exposed from depths = 0.1× crater diameter). Terraced walls from listric fault block slumping. As D increases: central peak → peak ring → multi-ring. Central peak exposes subcrater geology: mantle material exposed at Kaguya/Grail-identified lunar craters. IODP 2016 Chicxulub drilling: peak ring = shocked granite uplifted from ~8–10 km (6.2 mi) depth, with suevite cap.',
          examples: 'Tycho Crater, Moon (86 km (53 mi), ~108 Ma): iconic central peak and terraced walls; rays extend >1,500 km (932 mi) across lunar surface; Apollo 17 boulder sampled from Tycho ejecta may date to ~108 Ma · Chicxulub, Mexico (180 km (112 mi), 66 Ma): peak ring drilled by IODP 364 expedition (2016); recovered shocked granite, suevite, impact melt rock; magnetic anomaly from melt sheet still detectable · Gosses Bluff, Australia (22 km (14 mi), ~142 Ma): central uplift ring ~5 km (3.1 mi) diameter exposed at surface; surrounding rim eroded away — illustrates how terrestrial complex craters degrade',
        },
        {
          name: 'Multi-Ring Basins and Ejecta Systematics',
          icon: Orbit,
          color: BRAND.amethyst,
          desc: 'Diameter >300 km (186 mi) on Moon; multiple concentric fault-bounded rings form by inward collapse of entire crustal volumes. Innermost ring = collapsed peak ring. Outer rings = outer rim equivalents of progressively larger transient craters. Ejecta blanket thickness: t(r) ≈ 0.14 R_c (r/R_c)^(−3). Secondary craters from large ejecta blocks (>1 km (0.6 mi)) can form 100-km chains. Oblique impacts (<15° from horizontal): produce elliptical craters and characteristic butterfly ejecta pattern (forbidden zone downrange and uprange); <5° required for distinctly elliptical crater shape.',
          examples: 'Orientale Basin, Moon (930 km (578 mi), ~3.72 Ga): youngest preserved multi-ring basin; LRO gravity data (GRAIL) reveals deeply buried basin structure · Valhalla, Callisto (outer ring ~3,800 km (2361 mi)): formed in differentiated ice crust; ring topography subdued by viscous relaxation of warm ice over 4 Ga · Hellas Basin, Mars (2,300 km (1429 mi), >4 Ga): deepest point on Mars at ~7 km (4.3 mi) below datum; floor may preserve ancient valley networks buried by impact melt · Davy Crater Chain, Moon: 47-km chain of secondary craters from large Imbrium ejecta blocks — illustrates secondary cratering contamination of isochron databases',
        },
      ],
    },
    {
      type: 'concept',
      title: "Preservation, erosion, and Earth's missing craters",
      body: `The contrast between the lunar and terrestrial cratering records is one of the most striking illustrations of how surface processes control geological memory. The Moon preserves craters formed over 4 billion years because its surface processes are extraordinarily slow: micrometeorite gardening overturns the top centimetre of the regolith on timescales of ~10 million years, and there is no wind, water, or plate tectonics to bury or destroy larger structures. Even the oldest lunar basins — South Pole-Aitken at >4 Ga, Nectaris at ~3.9 Ga — remain morphologically recognisable in LOLA (Lunar Orbiter Laser Altimeter) topographic data, though heavily degraded. As a result, the lunar surface carries a nearly complete record of the last 4 billion years of Solar System bombardment — which is why Apollo samples from specific basins are so valuable as chronological anchors.

Earth, in stark contrast, has experienced every geological process hostile to crater preservation: active tectonics, erosion by wind and water, burial by sediment, volcanic resurfacing, and subduction of oceanic crust. The result is that only approximately **200 confirmed impact structures** are known on Earth, despite the planet having experienced tens of thousands of significant impacts over its 4.5 Ga history. The oldest well-preserved impact structure is the Vredefort Dome, South Africa (~300 km (186 mi) original diameter, 2.02 Ga), though its rim has been completely eroded away — only the central uplift remains. Most confirmed terrestrial impact structures are recognised by geochemical evidence (shocked quartz, coesite, siderophile element anomalies) rather than morphology alone. Approximately 70% of Earth's surface has been subducted since the Cretaceous — meaning any pre-K-Pg oceanic impact record has been completely destroyed. This strongly biases the known terrestrial impact database toward continental craters, toward the last ~600 Ma, and toward structures that were buried and thus protected from erosion.

**Oblique impacts** add morphological complexity across all crater classes. At angles less than ~15° from horizontal, the ejecta pattern becomes asymmetric, with a "forbidden zone" of reduced ejecta deposition in the downrange direction — creating the characteristic butterfly ejecta pattern. At angles below ~5°, the crater itself becomes measurably elliptical. Roughly 50% of all impacts occur at angles between 30° and 60° from horizontal (the geometrically most probable range), and these produce essentially circular craters with minor ejecta asymmetries; only ~10% of impacts are oblique enough (<15°) to produce a clearly asymmetric ejecta pattern. The Ries Crater, Germany (26 km (16 mi), ~14.8 Ma), shows a slightly asymmetric ejecta blanket (Bunte Breccia) suggesting an oblique impactor trajectory from the southwest.`,
      cards: [
        {
          name: 'Earth vs Moon: Preservation Contrast',
          icon: Circle,
          color: BRAND.coral,
          desc: 'Moon: micrometeorite gardening at ~1 mm/Myr; no wind, water, or tectonics; craters >4 Ga preserved. ~300,000 craters >1 km (0.6 mi) diameter on Moon. Earth: ~200 confirmed structures (all recognition methods combined). Erosion removes ~1 km (0.6 mi) of rock per ~10–100 Myr depending on climate; burial by sediment protects some craters (Manson, Iowa, 74 Ma, discovered by drilling). Subduction destroys oceanic crust every ~200 Ma. Bias in terrestrial record: continental, last ~600 Ma, larger structures. Recognition criteria: shocked quartz, coesite, Ni-Ir-Pt anomalies, shatter cones, suevite — morphology alone insufficient for eroded structures.',
          examples: 'Vredefort Dome, South Africa: 2.02 Ga, originally >200 km (124 mi); only central uplift remains; largest confirmed terrestrial impact structure by original diameter · Chicxulub: largely subsurface under Gulf of Mexico sediments; identified in 1991 from aeromagnetic anomaly and confirmed by drilling · Manson Impact Structure, Iowa: 74 Ma, 37 km (23 mi), buried under 30 m (98 ft) of glacial till; discovered by geophysical survey in 1953 and confirmed by shocked quartz in 1980s',
        },
        {
          name: 'Oblique Impacts and Ejecta Patterns',
          icon: Orbit,
          color: BRAND.ruby,
          desc: 'Impact angle distribution: ~50% of impacts at 30°–60° (most probable geometrically); ~10% at <15° (oblique). At <15°: butterfly ejecta pattern (forbidden zones downrange and uprange of impact trajectory); at <5°: measurably elliptical crater. Herringbone ridges in ejecta indicate impact direction. Central peak offset from crater centre diagnostic of oblique impact. Melt distribution asymmetric in oblique impacts: concentrated downrange. Oblique impacts important for volatile delivery: low-angle cometary impacts may preferentially deliver water ice to polar cold traps on Moon/Mercury.',
          examples: 'Tycho Crater: slightly asymmetric ray system indicating ~30–45° oblique impact from northwest · Messier and Messier A (Moon): classic double crater from very oblique impact (<5°); elongated ejecta extends 120 km (75 mi) downrange in twin rays · Ries Crater, Germany (26 km (16 mi), 14.8 Ma): Bunte Breccia ejecta distribution asymmetric, indicating oblique impact from ~SW direction; Moldavite tektites found 450 km (280 mi) to NE along trajectory',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Crater Morphology Across Scales',
      body: 'This flow diagram illustrates the progression from simple through complex to multi-ring basin morphology, showing the key diagnostic features and the physical processes that create each transition.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Trace the morphological evolution of impact craters from small simple forms through complex craters to large multi-ring basins, following the physics of gravitational collapse',
        nodes: [
          {
            id: 'transient',
            label: 'Transient Crater',
            description: 'Common starting point for all crater sizes: a hemispherical cavity with depth/diameter ≈ 1/3, produced by the excavation flow field. The transient crater maximum defines the reference geometry before gravity-driven modification begins. Diameter controlled by Pi-group scaling: D_tc ∝ g^(−1/3) v^(2/3) m^(1/3).',
            color: BRAND.textDim,
          },
          {
            id: 'simple',
            label: 'Simple Crater (D < transition)',
            description: 'Rock strength exceeds gravitational stresses; walls slump minimally. Final form: bowl-shaped, d/D ≈ 0.2, smooth floor with breccia lens. Raised rim of inverted ejecta stratigraphy. Transition diameter: ~2–4 km (2.5 mi) (Earth), ~4 km (2.5 mi) (Moon), ~8 km (5.0 mi) (Mars) — scales as g^(−1).',
            color: BRAND.accent,
          },
          {
            id: 'complex',
            label: 'Complex Crater (D > transition)',
            description: 'Gravity overcomes rock strength. Floor rebounds upward (central peak uplift, km-scale); walls collapse inward on listric faults (terraces). d/D decreases from ~0.1 to ~0.04. Central peak exposes deep target material (~0.1× D depth). Examples: Copernicus (93 km (58 mi)), Tycho (86 km (53 mi)).',
            color: BRAND.gold,
          },
          {
            id: 'peak-ring',
            label: 'Peak Ring Basin (D ~ 100–300 km (186 mi))',
            description: 'Central peak collapses outward to form a ring of hills (peak ring) at ~0.5× crater radius from centre. Peak ring = suevite-capped shocked granite uplifted from 8–10 km (6.2 mi) depth (confirmed by IODP 364 drilling at Chicxulub). Floor: coherent impact melt sheet. Examples: Chicxulub (180 km (112 mi)), Schrödinger (320 km (199 mi), Moon).',
            color: BRAND.coral,
          },
          {
            id: 'multi-ring',
            label: 'Multi-Ring Basin (D > 300 km (186 mi))',
            description: 'Entire crustal thickness involved in collapse. Multiple concentric fault-bounded rings form beyond crater rim. Innermost ring = peak ring equivalent. Outer rings = progressively larger rim structures. Examples: Orientale (930 km (578 mi), Moon), Valhalla (3,800 km (2361 mi) outer ring, Callisto), South Pole-Aitken (2,500 km (1553 mi), Moon).',
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'transient', to: 'simple', label: 'D < transition diameter; strength > gravity' },
          { from: 'transient', to: 'complex', label: 'D > transition; gravity overcomes strength' },
          { from: 'complex', to: 'peak-ring', label: 'central peak collapses outward' },
          { from: 'peak-ring', to: 'multi-ring', label: 'crustal-scale collapse; multiple rings' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The simple-to-complex crater transition diameter scales approximately as D_trans ∝ g⁻¹ with surface gravity. On the Moon (g = 1.62 m/s²), the transition occurs at ~4 km (2.5 mi). What would you predict for the transition diameter on Mars (g = 3.72 m/s²)?',
          a: [
            'About 1.7 km (1.1 mi) on Mars, because D_trans ∝ g⁻¹ gives D_Mars = D_Moon × (g_Moon/g_Mars) = 4 × (1.62/3.72) ≈ 1.74 km (1.1 mi)',
            'About 9.2 km (5.7 mi) on Mars, because lower gravity than Earth means larger craters collapse; D_Mars = D_Moon × (g_Mars/g_Moon) = 4 × (3.72/1.62) ≈ 9.2 km (5.7 mi)',
            'About 4 km (2.5 mi) on Mars, the same as the Moon, because the transition diameter is a universal property of rock strength that does not vary with gravity',
            'About 24 km (15 mi) on Mars, because Mars craters are always larger than lunar craters due to the higher impact velocity in the inner Solar System',
          ],
          correct: 0,
          explain: `The transition diameter scales as D_trans ∝ g⁻¹ (not g^(−1/3) as for crater size scaling — the transition is controlled by the ratio of gravitational stress to rock strength). Mars has g = 3.72 m/s², which is 3.72/1.62 = 2.30× the Moon\'s gravity. Therefore D_trans(Mars) = D_trans(Moon) / 2.30 = 4 / 2.30 ≈ 1.74 km (1.1 mi). In practice, observed Mars transition diameters are ~6–8 km (5.0 mi) due to target properties (weaker, possibly ice-bearing substrate), but the directional prediction — that higher gravity means a smaller transition diameter — is correct. Option B inverts the ratio; higher gravity should give a smaller transition (less collapse distance before gravity wins), not larger. Option C incorrectly treats transition diameter as a universal constant. Option D confuses crater size with transition diameter.`,
        },
        {
          q: `The 2016 IODP Expedition 364 drilled into the Chicxulub peak ring off Mexico's Yucatán coast. What was the most scientifically significant finding about the composition and origin of the peak ring rocks?`,
          a: [
            'The peak ring consists of shocked granite uplifted from ~8–10 km (6.2 mi) depth below the original surface, capped by suevite and impact melt rock — confirming that peak rings form by dynamic collapse of an uplifted central peak rather than by simple inward collapse of the crater rim',
            'The peak ring consists of carbonate rocks melted by the impact and re-solidified in a ring shape, confirming that the high CO₂ released from Cretaceous limestone was the primary cause of the K-Pg mass extinction rather than the impact itself',
            'The peak ring contains abundant extraterrestrial material including fragments of the impactor itself, allowing direct chemical and isotopic characterisation of the Chicxulub asteroid for the first time',
            'The peak ring is composed of unshocked basement rock that was never significantly displaced from its original depth, suggesting that peak rings form by a fundamentally different mechanism than previously modelled',
          ],
          correct: 0,
          explain: 'IODP Expedition 364 (2016) drilled 1,335 metres into the Chicxulub peak ring and recovered a sequence from top to bottom: post-impact Paleogene sediment → suevite (impact breccia with melt glass) → impact melt rock → shocked granite (granodiorite) basement. The shocked granite shows abundant planar deformation features and high porosity (30% vs typical 1–2% for unshocked granite), consistent with shock-induced dilation of the rock framework. Crucially, this granite was originally at ~8–10 km (6.2 mi) depth below the Cretaceous surface and was uplifted during formation of the central uplift, then collapsed outward to form the peak ring — exactly as predicted by hydrocode simulations. Option B is incorrect: the IODP cores were not used to argue for CO₂ release as the primary extinction mechanism (though sulphur release from target evaporites is discussed in other studies). Option C is incorrect: the impactor itself was completely vaporised; no meteoritic fragments were recovered. Option D is directly contradicted by the evidence of shocked granite uplifted from great depth.',
        },
        {
          q: 'Approximately how many confirmed impact structures are known on Earth, and what combination of geological processes explains why this number is so much smaller than the number of significant impacts Earth must have experienced in its history?',
          a: [
            'About 200 confirmed structures; erosion, burial by sediment, tectonic deformation, and subduction of oceanic crust have destroyed the vast majority of the impact record, and most remaining structures require geochemical evidence (shocked quartz, iridium anomaly) rather than morphology for recognition',
            'About 5,000 confirmed structures; most are buried under post-Jurassic sediment but have been identified by satellite gravity surveys and confirmed by drilling programs',
            'About 200 confirmed structures; the low number reflects the fact that Earth has been geologically protected by its large Moon, which gravitationally shields Earth from most impacts via tidal resonance',
            'About 2,000 confirmed structures; the rest of the impact record is preserved in the oceanic crust but has not yet been mapped because the ocean floor is poorly explored relative to the continents',
          ],
          correct: 0,
          explain: `As of the mid-2020s, the Earth Impact Database lists approximately 200 confirmed impact structures. This number is dramatically lower than the expected number of impacts because: (1) erosion removes ~0.3–3 km (1.9 mi) of rock per million years, obliterating most craters; (2) ~70% of Earth\'s surface is oceanic crust, which is subducted every ~200 Ma, destroying any oceanic impact record; (3) tectonic deformation and volcanic resurfacing destroy additional structures; (4) many remaining structures are identified only by geochemical signatures (shocked quartz, coesite, siderophile element anomalies, shatter cones), not by morphology — meaning that heavily eroded structures are often missed entirely. Option B (5,000) is an overestimate by ~25×. Option C is incorrect: the Moon does NOT significantly shield Earth from impacts via tidal resonance — Earth\'s large Moon modestly reduces bombardment from Jupiter-family comets but does not protect against asteroidal impactors. Option D incorrectly suggests the oceanic record survives — subduction ensures it does not.`,
        },
        {
          q: 'At what impact angle from the horizontal does an impact begin to produce a distinctly elliptical crater shape, and what ejecta pattern appears at somewhat larger (but still oblique) angles below ~15°?',
          a: [
            'Elliptical craters form at angles below ~5° from horizontal; the butterfly ejecta pattern (with forbidden zones downrange and uprange) appears at angles below ~15°',
            'Elliptical craters form at angles below ~45° from horizontal (all impacts steeper than this are circular); asymmetric ejecta appears at angles below ~30°',
            'Elliptical craters form at angles below ~15° from horizontal; the butterfly ejecta pattern requires angles below ~5°, the reverse of the crater shape threshold',
            'All impacts at angles below ~60° from horizontal produce elliptical craters; circular craters only form from near-vertical (>60°) impacts',
          ],
          correct: 0,
          explain: 'Empirical observations from planetary craters, experimental impacts, and hydrocode modelling show that: (1) the crater outline becomes measurably elliptical only at very low impact angles, below ~5° from horizontal; (2) at angles between ~5° and ~15°, the crater remains essentially circular but the ejecta distribution becomes strongly asymmetric, with the characteristic butterfly pattern — two lobes of enhanced ejecta perpendicular to the impact direction, and forbidden zones (ejecta depletion) both downrange and uprange of the trajectory. At typical impact angles (30°–60°), craters are circular and ejecta is nearly symmetric. Option B incorrectly places the thresholds at much larger angles (45° and 30°). Option C reverses the two thresholds (elliptical crater requires a lower angle than butterfly ejecta, not the reverse). Option D dramatically overstates the obliquity required for circular craters — virtually all craters at >15° from horizontal appear circular.',
        },
        {
          q: `What is the depth of origin of the rocks forming the central peak of a complex crater, as a fraction of the crater\'s final diameter? If Copernicus Crater (93 km (58 mi) diameter) has a central peak rising 1.2 km (0.7 mi) above its floor, approximately how deep below the pre-impact surface did the peak rock originate?`,
          a: [
            'Central peak rocks originate from ~0.1× the crater diameter in depth; for Copernicus (93 km (58 mi)), this gives approximately 9–10 km (6.2 mi) below the pre-impact lunar surface',
            'Central peak rocks originate from the same depth as the crater floor (0.2× diameter); for Copernicus the rocks come from ~18 km (11 mi) depth, equivalent to the present crater depth',
            'Central peak rocks originate from approximately 0.5× the crater diameter; for Copernicus this would be ~46 km (29 mi) — equivalent to the entire lunar crust thickness',
            'Central peak height directly equals the depth of origin: the peak rises 1.2 km (0.7 mi) above the floor, so the rocks came from 1.2 km (0.7 mi) below the pre-impact surface',
          ],
          correct: 0,
          explain: `Empirical scaling relationships established by Cintala & Grieve (1998) and confirmed by spectral and sample studies show that the depth of origin of central peak material scales as approximately 0.1× the crater diameter. For Copernicus (93 km (58 mi)), this gives an origin depth of ~9–10 km (6.2 mi) below the pre-impact lunar surface. This is a critical property: central peaks provide natural "boreholes" into the crust, exposing material that would otherwise be inaccessible. Remote sensing spectroscopy of lunar central peaks (using Kaguya/SELENE and Lunar Reconnaissance Orbiter DIVINER data) has been used to map the composition of the deep lunar crust. Option B confuses crater depth with origin depth of central peak material; the crater depth is ~0.04–0.1× D, but peak rocks come from greater depth. Option C (0.5× D) would imply that Copernicus excavated to ~46 km (29 mi) depth — far exceeding the Moon\'s entire crustal thickness (~30–60 km (37 mi)). Option D confuses the peak\'s topographic height above the crater floor with its depth of origin; the uplift of km-scale is achieved by the rebound of rock that was originally much deeper.`,
        },
      ],
    },
  ],
}

export default craterMorphologyAndClassification
