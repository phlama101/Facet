import type { Lesson } from './types'

const geol101Capstone: Lesson = {
  id: 'geol-101-capstone',
  title: 'Earth Foundations Final Exam',
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '45 min',
  xpReward: 500,
  description: `A 25-question cumulative assessment covering all five Earth Foundations chapters: Earth\'s interior, minerals, the three rock families, plate tectonics, and reading the landscape.`,
  sources: [
    { org: 'USGS',     title: 'Science Topics — Geology (Public Domain)',        url: 'https://www.usgs.gov/science/science-explorer/geology' },
    { org: 'NPS',      title: 'Geology Fieldnotes series',                        url: 'https://www.nps.gov/subjects/geology/index.htm' },
    { org: 'EarthScope', title: 'Seismology education resources',                 url: 'https://www.earthscope.org/education' },
    { org: 'OpenStax', title: 'Physical Geology, 2nd ed. (CC-BY 4.0)',            url: 'https://openstax.org/books/physical-geology-2e' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Earth Foundations Final Exam',
      body: `This final exam covers all five chapters of Earth Foundations. Five questions test each chapter in sequence: Earth's Interior (Ch. 1), Minerals & Crystals (Ch. 2), The Three Rock Families (Ch. 3), Plate Tectonics (Ch. 4), and Reading the Landscape (Ch. 5). Questions are cumulative — later questions draw on concepts from earlier chapters. Each question is followed by a full explanation covering why the correct answer is right and why the alternatives are not.

Take your time. Every question has one unambiguously correct answer, but the distractors are designed to test the depth of your understanding, not just surface recall.`,
    },
    {
      type: 'quiz',
      questions: [
        // ── MODULE 1.1 — EARTH'S INTERNAL STRUCTURE ──────────────────────────
        {
          q: "A seismograph station 120° from a major earthquake records P-waves but no S-waves. What does the absence of S-waves reveal about Earth's interior?",
          a: [
            "S-waves attenuate more rapidly than P-waves in all Earth materials and simply fade out beyond ~100° from a seismic source",
            "The outer core is liquid; S-waves cannot propagate through fluids because fluids have no shear strength, so they are absorbed at the core-mantle boundary",
            "S-waves are converted entirely to P-waves at the mantle transition zone at 660 km depth and arrive as P-waves rather than disappearing",
            "The earthquake was too shallow to generate S-waves that could penetrate to the core; only deep-focus earthquakes produce both wave types",
          ],
          correct: 1,
          explain: "S-waves are shear waves — they require a solid medium with shear strength to propagate; fluids transmit pressure (P-waves) but not shear stress. The liquid outer core therefore acts as a barrier that absorbs S-waves completely, creating the S-wave shadow zone beyond ~105° from the source. Attenuation (A) does not explain the sharp shadow-zone boundary — S-waves would fade gradually, not disappear abruptly. Wave conversion (C) does occur at discontinuities but does not eliminate S-waves entirely. Earthquake depth (D) affects the wave path but not whether S-waves can travel through the core.",
        },
        {
          q: "Why does oceanic crust subduct beneath continental crust at convergent margins, rather than the reverse?",
          a: [
            "Oceanic crust is always older at convergent margins, and older rocks are always denser; density increases with age regardless of rock type",
            "Oceanic crust (basaltic, ~3.0 g/cm³) is denser than continental crust (granitic, ~2.7 g/cm³); when the two converge, the denser oceanic plate sinks into the mantle while the lighter continental crust remains buoyant",
            "Continental crust is so thick (~35 km) that it floats high and physically cannot be pushed down; oceanic crust subducts only because it is thin enough to be bent by tectonic forces",
            "Oceanic crust absorbs water from the ocean floor, which makes it heavier by the time it reaches a convergent margin",
          ],
          correct: 1,
          explain: "Buoyancy is controlled by density: basaltic oceanic crust at ~3.0 g/cm³ is denser than the mantle transition zone (~3.3 g/cm³) only at depth, but it is consistently denser than granitic continental crust (~2.7 g/cm³); when the two meet, the oceanic plate subducts. Age does contribute (older oceanic crust is cooler and denser), but age alone doesn't explain the asymmetry — it is always oceanic crust that subducts. Thickness (C) is a consequence, not a cause, of the density difference. Hydration (D) does slightly increase density but is secondary to compositional density.",
        },
        {
          q: "Mantle rock is solid, yet it flows over millions of years. What drives mantle convection and how does it relate to plate motion?",
          a: [
            "The mantle is actually a very viscous liquid — at mantle temperatures and pressures, all silicate rock melts, allowing conventional liquid convection",
            "Heat from the core and radioactive decay creates temperature differences; hotter rock is less dense and rises, cooler rock sinks — convection cells form, and combined with slab pull at subduction zones, they drive plate motion",
            "Mantle convection is driven by tidal forces from the Moon pulling unevenly on rock at different depths, creating differential movement",
            "Convection is driven entirely by slab pull; heat plays no role because the mantle is uniformly hot throughout",
          ],
          correct: 1,
          explain: "The mantle is solid in the sense that it transmits S-waves, but over millions of years it deforms plastically under heat and pressure — a process called solid-state creep. Heat from Earth's core (conducted outward) and from radioactive decay of U, Th, and K creates density-driven buoyancy differences that drive convection; this convection, combined with the negative buoyancy of cold subducting slabs (slab pull), drives plate motion. The mantle is not liquid (A) — it transmits shear waves. Tidal forces (C) are negligible compared with thermal buoyancy. Slab pull alone (D) cannot operate without the underlying thermal structure that creates cold, dense slabs to begin with.",
        },
        {
          q: "What generates Earth's magnetic field, and why is a liquid outer core essential to the process?",
          a: [
            "The solid inner core acts as a giant permanent magnet fixed at the time of Earth's formation; the geomagnetic field is simply this primordial magnetism",
            "Convection in the liquid iron-nickel outer core generates electrical currents; combined with Earth's rotation (Coriolis effect), these currents sustain the geomagnetic field through the dynamo mechanism",
            "Friction between the rotating inner core and the mantle induces an electromagnetic field at the core-mantle boundary",
            "Radioactive decay in the core produces charged particles that circulate along Earth's rotation axis, generating a magnetic field",
          ],
          correct: 1,
          explain: "The geodynamo requires a conducting fluid in motion: the liquid iron-nickel outer core is the conducting fluid; convection (driven by heat from the inner core boundary and compositional buoyancy as iron solidifies onto the inner core) creates the motion; Earth's rotation organises the flow into columnar structures (Coriolis effect) that generate and maintain large-scale magnetic loops. Permanent magnetism (A) cannot explain field reversals or secular variation. Friction (C) is not the mechanism — it is convective flow, not boundary friction. Radioactive charged particles (D) are not a significant source of the dynamo effect.",
        },
        {
          q: "What is the Mohorovičić discontinuity, and how was it discovered?",
          a: [
            "The Moho is the boundary between the inner and outer core at ~2,900 km depth, discovered when S-waves disappear on distant seismograms",
            "The Moho is the crust-mantle boundary; Mohorovičić discovered it in 1909 by noticing that P-waves from a Croatian earthquake arrived at distant stations faster than expected — refracted waves traveling through the denser, faster mantle overtook direct crustal waves beyond ~200 km",
            "The Moho is the upper-lower mantle boundary at 660 km depth, where olivine transforms to perovskite under extreme pressure",
            "The Moho is the base of the asthenosphere, identified from temperature measurements in deep boreholes where rock becomes too hot to behave rigidly",
          ],
          correct: 1,
          explain: "Mohorovičić noticed an anomaly in 1909: two sets of P-wave arrivals appeared at stations beyond ~200 km from a Croatian earthquake — one traveling directly through the crust and one that had refracted through the faster, denser underlying mantle; beyond a critical distance the mantle-refracted wave arrived first, revealing the velocity discontinuity that bears his name. The S-wave disappearance (A) identifies the core-mantle boundary, not the Moho. The 660 km discontinuity (C) is the upper-lower mantle boundary. The asthenosphere (D) is defined by mechanical behaviour, not a seismic velocity discontinuity at depth.",
        },

        // ── MODULE 1.2 — MINERALS ─────────────────────────────────────────────
        {
          q: "A student finds a piece of amber (fossilised tree resin) and asks whether it is a mineral. Which property disqualifies amber?",
          a: [
            "Amber is too soft — minerals must have a Mohs hardness of at least 3",
            "Amber is organic in origin (fossilised plant resin); minerals must be inorganic; amber also lacks a crystalline atomic structure",
            "Amber's chemical composition varies between specimens; minerals require a fixed chemical formula",
            "Amber forms at Earth's surface; minerals must form under elevated pressure underground",
          ],
          correct: 1,
          explain: "The five mineral requirements are: naturally occurring, inorganic, solid, crystalline structure, and definite chemical composition. Amber fails on two counts: it is organic (produced by a living organism) and amorphous (no crystalline lattice). Hardness (A) is not a criterion for mineral status — talc (hardness 1) is a mineral. Variable composition (C) does disqualify some materials, but amber's primary disqualifier is its organic origin. Surface formation (D) is irrelevant — many minerals form at the surface.",
        },
        {
          q: "A metallic-looking mineral has a silvery-black surface but leaves a red-brown powder on a streak plate. Which mineral is this, and why is streak more diagnostic than surface colour?",
          a: [
            "Galena (lead sulfide); galena always leaves a dark grey streak — the red-brown result means contamination; streak and colour should match for metallic minerals",
            "Hematite (iron oxide); its surface can appear silver, red, or black depending on crystal form, but its streak is always red-brown because the powder reflects the mineral's intrinsic iron oxide composition; streak is more reliable because surface colour is easily altered by oxidation, impurities, and thin-film optical effects",
            "Magnetite (iron oxide); magnetite always gives a red streak despite its black surface because powdering removes the surface oxidation layer",
            "Pyrite (iron sulfide); pyrite's golden surface is fool's gold, but its red-brown streak reveals its true iron content",
          ],
          correct: 1,
          explain: "Hematite is the classic demonstration that surface colour is unreliable: specular hematite looks silver-grey, earthy hematite looks dull red, and botryoidal hematite looks black — yet all produce the same red-brown streak because the powder always reflects the Fe₂O₃ composition. Galena (A) gives a grey streak and is silver in both colour and streak. Magnetite (C) gives a black streak, not red. Pyrite (D) gives a greenish-black streak, not red-brown, and its defining property is its brassy yellow surface colour.",
        },
        {
          q: "Silicon and oxygen together make up ~74% of Earth's crust by mass. How does this explain the dominance of silicate minerals?",
          a: [
            "Silicates are the densest common minerals; they sink through the mantle and concentrate at the base of the crust",
            "Si and O bond into SiO₄ tetrahedra that polymerise into chains, sheets, and frameworks; because Si and O are the two most abundant crustal elements, silicates built from these structures dominate — feldspars and quartz alone account for over half the crust by volume",
            "Silicates resist weathering better than all other mineral groups; over billions of years, non-silicate minerals have been dissolved away, leaving silicates as the residual material",
            "Earth's silicate crust reflects the temperature at which Earth condensed from the solar nebula; other rocky planets have carbonate-dominated crusts",
          ],
          correct: 1,
          explain: "Because Si (~28%) and O (~46%) are the two most abundant elements in the crust, minerals built from their combination — the silicate tetrahedra SiO₄, which polymerise into the full range of mineral structures — inevitably dominate. Feldspars (~41% of crust) and quartz (~12%) alone illustrate the point. Density (A) has it backwards — less dense felsic minerals float up, they don't sink. Weathering resistance (C) contributes but cannot explain the initial dominance. Other rocky planets (D) actually also have silicate-dominated crusts, not carbonate.",
        },
        {
          q: "Two rock samples have identical mineral compositions (plagioclase, pyroxene, olivine). Sample A has 5 mm crystals; Sample B has no visible crystals. What does this reveal?",
          a: [
            "Sample A cooled faster — larger crystals form when minerals have less time to organise; Sample B cooled slowly, producing a dense fine-grained texture",
            "Sample A cooled slowly deep underground (intrusive): atoms had time to migrate to growing crystal faces, producing coarse grains; Sample B cooled rapidly at the surface (extrusive): fast cooling froze the melt before large crystals could form; the same composition means the same original magma, with different cooling environments",
            "Sample A is metamorphic — the large crystals grew by recrystallisation under heat and pressure; Sample B is the original igneous rock before metamorphism enlarged its crystals",
            "Sample A's magma had more water, which acted as a flux promoting large crystal growth; Sample B was dry magma that crystallised without a flux, producing fine grains regardless of cooling rate",
          ],
          correct: 1,
          explain: "Crystal size is the primary record of cooling rate in igneous rocks: slow cooling (km-deep intrusive bodies, cooling over millions of years) allows atoms to diffuse to crystal nuclei and grow large crystals; rapid cooling (lava flows, pyroclastic deposits) quenches the melt before crystals can grow, producing fine-grained or glassy texture. The mineral composition being identical is the key clue that both derive from the same magma — only the cooling environment differs. A reverses the relationship. C misidentifies the process; metamorphic rocks have distinctive fabrics. D is a minor secondary effect, not the primary control.",
        },
        {
          q: "Mica cleaves perfectly into thin sheets; quartz fractures with a curved, glass-like surface. What structural difference explains this?",
          a: [
            "Mica is softer than quartz on the Mohs scale; softer minerals always cleave because softer atomic bonds break along flat planes",
            "Mica has silicate sheets held together by weak interlayer bonds; breakage follows these weak bond planes, producing perfect cleavage; quartz has a fully connected 3-D SiO₄ framework with bonds of similar strength in all directions — no single weak plane exists, so it fractures randomly",
            "Mica contains water molecules between its layers; the water lubricates the boundaries, allowing clean separation; quartz contains no water and therefore cannot separate cleanly",
            "Mica's flat plate shape forces splitting along the plate face; quartz's hexagonal prism shape forces fracture because no face is weaker than the others",
          ],
          correct: 1,
          explain: "Cleavage reflects the atomic bond geometry: mica's sheet silicate structure has strong Si-O bonds within each silicate sheet but weak K⁺ or Na⁺ ionic bonds between sheets — these interlayer planes are consistently the weakest path through the crystal, so it cleaves there every time. Quartz (SiO₂) is a three-dimensional network of Si-O bonds equally strong in all directions — there is no plane of weakness, so fracture follows the path of least resistance through the random stress field, producing conchoidal fracture. Hardness (A) describes bond strength overall, not anisotropy. Water (C) is not the mechanism — muscovite mica has no structural water. Shape (D) is a result of the crystal structure, not an independent cause.",
        },

        // ── MODULE 1.3 — THE THREE ROCK FAMILIES ─────────────────────────────
        {
          q: "A granite pluton is uplifted, eroded to sand and gravel, buried and lithified, then subducted and partially melted. What rock type is produced at each stage?",
          a: [
            "Granite (igneous) → breccia (sedimentary) → lava (igneous); the cycle goes directly from erosion to volcanism without metamorphism",
            "Granite (intrusive igneous) → sediment → sandstone or conglomerate (clastic sedimentary) → possibly quartzite or metasandstone (metamorphic, if further buried) → partial melt → new igneous rock; the rock cycle is continuous and all three families are interconvertible",
            "Granite (metamorphic, since it forms under pressure) → gravel → limestone (chemical sedimentary) → basalt (igneous); the rock cycle always proceeds in this fixed direction",
            "Granite is already a sedimentary rock (compressed mineral grains), so the sequence begins as sedimentary and never produces a truly igneous rock",
          ],
          correct: 1,
          explain: "The rock cycle has no fixed direction: any rock type can be transformed into any other given the right conditions. Granite is intrusive igneous; erosion produces clastic sediment that lithifies to sandstone or conglomerate; burial and heating produce metamorphic rocks; subduction and partial melting regenerate igneous rock. Option A skips the sedimentary stage and misidentifies breccia's origin. Option C incorrectly classifies granite as metamorphic — granite forms by slow cooling of magma, not by metamorphism. Option D misidentifies granite, which crystallises from silica-rich melt, not from compacted grains.",
        },
        {
          q: "What two variables classify igneous rocks, and what do basalt and granite represent at their extremes?",
          a: [
            "Colour (light vs dark) and density; basalt is dark and dense; granite is light-coloured and less dense",
            "Texture (grain size, reflecting cooling rate) and composition (SiO₂ content); basalt = fine-grained + mafic (~50% SiO₂, rich in Fe/Mg); granite = coarse-grained + felsic (~70% SiO₂, rich in K/Na/Al); they sit at opposite ends of both scales",
            "Origin (volcanic vs plutonic) and age; basalt is always young and volcanic; granite is always old and plutonic",
            "Crystal system and depth of formation; basalt crystallises in the cubic system at shallow depths; granite crystallises in the hexagonal system at depth",
          ],
          correct: 1,
          explain: "Igneous classification requires both texture and composition because two rocks can have the same mineralogy at different grain sizes (basalt vs gabbro) or the same grain size at different compositions (granite vs gabbro). Basalt and rhyolite are the fine-grained equivalents of gabbro and granite respectively. Colour (A) is a useful field proxy for composition but is not a classification variable. Age (C) is not a classification criterion — modern granites and ancient granites are classified identically. Crystal system (D) is used in mineralogy, not igneous rock classification.",
        },
        {
          q: "Three sedimentary rocks: (1) coarse quartz-feldspar fragments cemented by calcite; (2) fizzes in acid, made of tiny shell fragments; (3) banded pure silica with no grains. Identify each and its formation mechanism.",
          a: [
            "All three are clastic sedimentary rocks formed from physical weathering — grain size is the only difference",
            "(1) Sandstone/arkose — clastic: physical erosion produced fragments transported and cemented; (2) limestone — biogenic: marine skeletal carbonate accumulated on the seafloor; (3) chert — chemical/biochemical: silica precipitated from solution or from siliceous microfossils (radiolaria, diatoms); the three types reflect mechanical, biological, and chemical formation",
            "(1) Granite — actually igneous; (2) dolomite — chemically precipitated; (3) obsidian — volcanic glass; all three have been misidentified",
            "(1) Conglomerate; (2) rock salt (evaporite); (3) coal; none of the descriptions match these rocks' diagnostic properties",
          ],
          correct: 1,
          explain: "The three sedimentary subtypes differ in origin: clastic rocks form from pre-existing rock fragments transported and cemented (the fizzing rules out #1 being carbonate — #1 is arkosic sandstone with a calcite cement); biogenic rocks form from organic skeletal material (the shell-fragment limestone fizzes in acid because of CaCO₃); chemical/biochemical rocks precipitate from solution (chert's banded pure silica is either direct precipitation or diagenetically altered siliceous ooze). A conflates all three mechanisms. C and D assign incorrect rock names that don't match the described properties.",
        },
        {
          q: "Why are garnet, staurolite, and kyanite called index minerals in metamorphic geology?",
          a: [
            "They are index minerals because they first appear in the fossil record at specific geological time periods",
            "Each index mineral is stable only within a specific temperature-pressure range; finding one in a metamorphic rock indicates the rock reached at least those conditions; mapping where each mineral first appears across a terrain reveals the spatial pattern of metamorphic grade, from lower-grade chlorite and biotite zones to higher-grade garnet, staurolite, and kyanite/sillimanite zones",
            "Index minerals contain radioactive isotopes in fixed proportions that allow precise radiometric dating of metamorphic events",
            "They are the most volumetrically abundant minerals in metamorphic rocks — 'index' means representative of the dominant component",
          ],
          correct: 1,
          explain: "Index minerals are diagnostic of metamorphic grade because each is only thermodynamically stable within a specific P-T window; outside that window, it reacts to form a different assemblage. By mapping the first appearance of each index mineral across an eroded metamorphic belt, geologists reconstruct the paleo-thermal structure — the isograds (lines connecting equal metamorphic grade) reveal ancient geothermal gradients and tectonic settings. Stratigraphic index fossils (A) are a different concept entirely. Radiometric dating (C) uses isotope decay, not mineral stability. Abundance (D) is not the defining property.",
        },
        {
          q: "A schist from a metamorphic belt splits easily into platy sheets (foliation). Marble from the same belt shows no preferred splitting direction. Both reached similar temperatures. Why does one foliate and the other not?",
          a: [
            "The schist was under directed (shear) stress while the marble was under only uniform pressure; both rocks have foliation, but marble's is microscopic",
            "Foliation develops when platy or elongate minerals — micas and amphiboles in schist — grow perpendicular to directed pressure, aligning their flat faces; marble is recrystallised calcite, which forms equidimensional blocky crystals with no preferred growth direction, so pressure cannot align them into a visible fabric",
            "Marble did not reach high enough temperature for foliation; foliation requires >600 °C, which calcite cannot sustain without decomposing",
            "Sedimentary rocks always develop foliation during metamorphism because original bedding is enhanced; limestone had no original layering, so marble has none",
          ],
          correct: 1,
          explain: "Foliation is a mineral alignment fabric produced when platy or elongate minerals crystallise or recrystallise with their long axes perpendicular to the maximum principal stress. Mica and amphibole are the key foliation-forming minerals in schists and gneisses. Calcite in marble recrystallises into equidimensional polygonal grains with no shape anisotropy — even under directed stress, there is no preferred growth direction, so marble remains massive. Option A is partly right about directed stress but overstates marble's response. Option C is incorrect — calcite does not decompose at metamorphic temperatures under lithostatic pressure. Option D has the sedimentary reasoning reversed.",
        },

        // ── MODULE 1.4 — PLATE TECTONICS ─────────────────────────────────────
        {
          q: "Which combination correctly identifies three independent lines of evidence for plate tectonics?",
          a: [
            "(1) Continents look like puzzle pieces; (2) all earthquakes occur at plate boundaries; (3) volcanoes only occur on continents",
            "(1) Symmetric magnetic stripes parallel to mid-ocean ridges record seafloor spreading and geomagnetic reversals; (2) systematic increase in ocean floor age away from ridges; (3) matching fossil assemblages, rock types, and mountain belts across now-separated continents",
            "(1) GPS measurements show plates moving today; (2) continental rocks are always older than oceanic rocks; (3) the mantle must convect because it is liquid",
            "(1) Wegener proposed continental drift in 1912; (2) mid-ocean ridges are warm; (3) subduction zones have deep earthquakes",
          ],
          correct: 1,
          explain: "The three pillars of plate tectonics evidence are paleomagnetism (symmetric magnetic anomaly stripes confirmed seafloor spreading by the 1960s), geochronology (ocean floor systematically younger at ridges), and geological correlations across oceans (Mesosaurus fossils in South America and Africa; Appalachian-Caledonian orogen match; Gondwana glacial deposits). Option A is partly right (continental fit) but overstates the boundaries claim and is wrong about volcanoes. Option C is partly right (GPS) but incorrect that all continental rocks are older than oceanic. Option D lists real observations but they are consequences of the theory, not independent evidence.",
        },
        {
          q: "Match each plate boundary type to its correct set of features.",
          a: [
            "Divergent → fold mountains and deep trenches; Convergent → rift valleys and basaltic volcanism; Transform → island arcs and back-arc basins",
            "Divergent → rift valleys or mid-ocean ridges, basaltic volcanism, normal faults, new crust created; Convergent → subduction zones, trenches, volcanic arcs or fold mountains, old crust consumed; Transform → strike-slip faults, earthquakes, no volcanism, crust neither created nor destroyed",
            "Divergent → strike-slip faults, no volcanism; Convergent → rift valleys and shallow earthquakes only; Transform → deep trenches, andesitic volcanoes, thrust faults",
            "All three boundary types produce similar features — the difference is only in plate motion direction, not geological output",
          ],
          correct: 1,
          explain: "Each boundary type has a diagnostic geological signature: divergent boundaries pull plates apart → rifts on continents, mid-ocean ridges at sea, normal faults, basaltic volcanism from decompression melting; convergent boundaries push plates together → subduction (oceanic-continental: volcanic arc + trench; oceanic-oceanic: island arc + trench; continental-continental: mountain belt, no volcanism); transform boundaries slide plates past each other → strike-slip faults, seismicity, no magma generation because no decompression or flux melting occurs. The other options mix features across boundary types.",
        },
        {
          q: "Mid-ocean ridge volcanoes erupt basalt. Volcanic arcs above subduction zones mostly erupt andesite and dacite — more silicic and more explosive. What explains the compositional difference?",
          a: [
            "The subducting oceanic crust melts directly to produce silica-rich magma; the arc simply erupts this slab-derived melt unchanged",
            "The subducting slab releases water as it dehydrates; water lowers the melting point of the overlying mantle wedge (flux melting), generating basaltic primary melt; as this melt rises through and assimilates overlying arc or continental crust, it evolves toward intermediate compositions through fractional crystallisation and crustal contamination — higher SiO₂ = higher viscosity = more explosive eruptions",
            "Arc volcanoes are at higher elevation than mid-ocean ridges, so magma must travel further and has time to evolve compositionally en route",
            "MOR basalts erupt hotter and melt more completely, producing mafic compositions; arc magmas erupt cooler, producing silica-enriched partial melts",
          ],
          correct: 1,
          explain: "The subducting slab does not itself melt in most settings; instead, dehydration reactions release water into the overlying mantle wedge, lowering its solidus (melting point) and triggering flux melting that produces basaltic melt. This melt then evolves as it ascends through the thick overlying crust: fractional crystallisation removes Mg-Fe minerals first, enriching the residual melt in SiO₂; crustal assimilation adds more silicic material; the result is intermediate (andesitic) to felsic (dacitic/rhyolitic) compositions. Option A (slab melting) does occur in rare hot-slab environments but is not the dominant arc mechanism. Travel distance (C) is not a compositional control. Temperature (D) is a symptom, not the cause.",
        },
        {
          q: "The Himalayas and the Andes are both convergent-margin mountain belts — yet one has active arc volcanoes and the other does not. What explains the difference?",
          a: [
            "The Himalayas have no volcanoes because they are too high — volcanic gases cannot escape at high altitude",
            "The Andes formed by oceanic-continental convergence (Nazca Plate subducting under South America) → subducting oceanic slab generates arc volcanism; the Himalayas formed by continental-continental collision (India into Eurasia) → continental crust is too buoyant to subduct, so no oceanic slab descends to flux-melt the mantle → no volcanic arc, only crustal thickening and the Tibetan Plateau",
            "The Himalayas formed more recently than the Andes and have not yet reached the volcanic stage of mountain building",
            "The Andes have volcanoes because the active Pacific spreading ridge is nearby; the Himalayas lack them because the Indian Ocean spreading centre is too far away",
          ],
          correct: 1,
          explain: "Arc volcanism requires a subducting slab to deliver water to the mantle wedge — no slab, no arc. The Andes sit above the Nazca Plate, which subducts eastward beneath South America, generating the Chilean-Peruvian volcanic arc and deep offshore trench. In the Himalayas, India collided with Eurasia ~50 Ma ago; because both are continental, neither plate can subduct (continental crust is too buoyant), so collision thickens the crust to ~70 km, lifting the Tibetan Plateau, but no slab descends to trigger volcanism. Altitude (A) does not suppress volcanism. Age (C) is irrelevant — arc volcanism can begin as soon as subduction starts. Spreading-ridge proximity (D) is not the mechanism.",
        },
        {
          q: "The Hawaiian Islands show a systematic northwest age increase: the Big Island (~0 Ma) sits at the southeast end; Kauai (~5 Ma) at the northwest. The Emperor Seamounts extend the chain further northwest, becoming progressively older. What does this pattern reveal?",
          a: [
            "The hotspot itself migrates slowly across the Pacific; the oldest seamounts record the hotspot's starting position",
            "The Hawaiian hotspot is a fixed mantle plume; the Pacific Plate moves northwest over it at ~7–9 cm/yr; each part of the plate that passes over the plume builds a new volcano; the age progression records the plate's velocity and direction; the bend between the Hawaiian chain and the Emperor Seamounts records a Pacific Plate motion-direction change ~47 Ma ago",
            "The chain records seafloor spreading from a ridge to the southeast; islands grow at the ridge and move northwest as new seafloor forms behind them",
            "Lava flows from the Big Island travel northwest along crustal fracture zones, building up the older islands; no mantle plume is required",
          ],
          correct: 1,
          explain: "The hotspot model (Morgan, 1971) explains the age-distance relationship precisely: a fixed deep-mantle plume melts through the lithosphere as the plate moves over it; each successive volcano records the plate's position at the time of formation; dividing age difference by distance gives plate velocity (~7–9 cm/yr for the Pacific Plate). The Emperor-Hawaiian bend at ~47 Ma records a documented change in Pacific Plate motion direction. The hotspot itself is not entirely stationary (recent models show slow hotspot drift), but the plate motion dominates the signal. Seafloor spreading (C) would produce symmetric age patterns on both sides of a ridge, not a linear chain. Lava flow transport (D) cannot move material thousands of km and build seamounts.",
        },

        // ── MODULE 1.5 — READING THE LANDSCAPE ───────────────────────────────
        {
          q: "Mauna Loa (Hawaii) has gentle slopes and erupts quiet lava flows. Mount Pinatubo (Philippines) has steep slopes and produced a catastrophic 1991 eruption. What controls this fundamental difference?",
          a: [
            "Oceanic volcanoes are always effusive because ocean water cools lava quickly; continental volcanoes are always explosive because there is no cooling effect",
            "Magma composition controls viscosity, which controls eruption style; Mauna Loa erupts low-silica basalt (~50% SiO₂) with low viscosity — gas escapes easily, producing fluid lava flows; Pinatubo erupts high-silica dacite (~65% SiO₂) with high viscosity — gas cannot escape, pressure builds, and eruption is explosive; low viscosity = effusive = shield shape; high viscosity + trapped gas = explosive = steep stratovolcano",
            "Mauna Loa is young and has not yet built enough internal pressure for explosive eruptions; older volcanoes accumulate pressure over millions of years",
            "Eruption style is controlled by the depth of the magma chamber; Mauna Loa's shallow chamber allows frequent small eruptions; Pinatubo's deep chamber allows pressure to build for a single large event",
          ],
          correct: 1,
          explain: "The viscosity-explosivity relationship is fundamental to volcanology: silica polymerises the magma melt structure, increasing viscosity; high viscosity traps dissolved gases; when pressure exceeds the tensile strength of the magma, explosive fragmentation occurs. Low-silica basaltic magmas are fluid enough that gas bubbles rise and escape continuously, producing effusive eruptions and the broad, low-angle shield volcano profile. High-silica andesitic/dacitic magmas resist gas escape and build pressure until catastrophic decompression. Option A ignores composition — oceanic hotspot basalts and subduction-related andesites in the ocean behave completely differently. Age (C) and chamber depth (D) are secondary factors, not the primary control.",
        },
        {
          q: "A limestone plateau in Vietnam has caves, sinkholes, and limestone towers. A granite outcrop in Greenland has frost-shattered boulders and angular talus. What explains the contrasting weathering at each site?",
          a: [
            "Vietnam has more weathering because proximity to the equator accelerates all weathering rates regardless of rock type",
            "Vietnam: warm, wet climate promotes chemical weathering; limestone (CaCO₃) dissolves readily in slightly acidic rainwater → karst topography (caves, sinkholes, towers); Greenland: cold climate with freeze-thaw cycles promotes physical weathering; granite resists dissolution but fractures when water expands ~9% on freezing in joints → angular boulders and talus; both climate and rock type together determine the dominant weathering process",
            "Vietnam's towers are erosional remnants of a former seabed; Greenland's boulders are glacial erratics, not weathering products",
            "Rock type alone determines weathering style — limestone always forms karst and granite always frost-shatters regardless of climate",
          ],
          correct: 1,
          explain: "Weathering is controlled by the interaction of climate and rock type: hot, wet climates maximise liquid water availability and reaction rates → chemical weathering of soluble rocks (limestone → karst) and hydrolysis of silicates; cold climates maximise freeze-thaw cycles → physical frost wedging; hot, dry climates produce minimal chemical weathering. Rock type sets what's possible: granite resists dissolution but fractures mechanically; limestone dissolves but resists mechanical breakdown. Neither factor alone is sufficient (D is wrong — limestone in cold dry deserts develops minimal karst; granite in warm wet tropics weathers chemically to thick red laterite soils).",
        },
        {
          q: "A river cuts a deep gorge in its steep mountain headwaters and meanders broadly across a coastal plain 400 km downstream. A recent flood cut through a tight meander loop, leaving an isolated crescent-shaped pond. What is this pond, and what process formed it?",
          a: [
            "A kettle lake — formed by the melting of a buried glacial ice block left on the floodplain",
            "An oxbow lake — formed when the river broke through the narrow neck of land separating two adjacent meander loops during a high-flow event; the loop was abandoned as the river took the shorter straight path, and the isolated crescent filled with stagnant water",
            "A plunge pool — left by a waterfall that migrated upstream and abandoned a circular depression in the valley floor",
            "A lagoon — trapped behind a barrier island where the river meets the coast; the crescent shape reflects the shape of the former inlet",
          ],
          correct: 1,
          explain: "Meanders migrate laterally across floodplains over time — erosion on the cut bank (outside of bends) and deposition on the point bar (inside) cause loops to grow in amplitude and narrow their necks; eventually the neck is breached and the river takes the shorter straight path, abandoning the loop; the isolated crescent is an oxbow lake (named for the U-shaped frame on a draft animal's yoke). Kettles (A) are found in glaciated terrain and are not crescent-shaped. Plunge pools (C) are at the base of waterfalls, not on floodplains. Lagoons (D) form behind coastal barriers, not inland on alluvial floodplains.",
        },
        {
          q: "A dam is built on a river, creating a reservoir. Describe what happens upstream (in the reservoir) and downstream over the next 50 years, using the concept of base level.",
          a: [
            "Upstream: still water prevents sediment deposition — the reservoir stays clear; downstream: the dam slows water velocity, causing sediment to deposit below the structure",
            "Upstream: the dam creates a new, higher local base level — the river loses velocity as it enters the reservoir and deposits a growing delta at the reservoir head; downstream: sediment-free water released below the dam has excess erosive energy and scours the channel bed, causing incision and coarsening; the downstream floodplain and delta are sediment-starved",
            "Both upstream and downstream effects are negligible — dams only affect water level, not sediment dynamics",
            "Upstream: water backed up by the dam increases the river's erosive force, causing it to cut downward through the reservoir floor; downstream: clear water deposits sediment because lower velocity below the dam reduces transport capacity",
          ],
          correct: 1,
          explain: "Base level is the elevation below which a river cannot erode. A dam raises the local base level upstream: the river approaching the reservoir loses its gradient, velocity drops to nearly zero, and sediment is deposited — a delta builds progressively toward the dam (Lake Mead has accumulated substantial sediment at the Colorado River inflow). Below the dam, only sediment-free water is released; this 'hungry water' is below its sediment capacity and scours the channel aggressively, incising the bed and removing fine sediment, leaving a coarser armoured lag. The Colorado River's downstream channel below Hoover Dam shows metres of incision since 1935. Options A and C misstate basic sediment dynamics. Option D inverts the upstream mechanism.",
        },
        {
          q: "During the Last Glacial Maximum (~20,000 years ago), global sea level was ~120 m lower than today. What caused this drop, and what landforms — one glacial, one coastal — preserve a record of it?",
          a: [
            "Sea level dropped because ocean basins expanded as seafloor spreading accelerated during the glacial period; mid-ocean ridges (glacial record) and wave-cut platforms (coastal record) preserve this history",
            "Sea level dropped because water evaporated from the ocean accumulated as snow and built continental ice sheets — the Laurentide, Fennoscandian, and Antarctic ice sheets stored enough water to lower global sea level ~120 m (glacio-eustasy); as ice melted, meltwater returned to the ocean; glacial record: terminal moraines, cirques, or U-shaped valleys (marking former ice extent); coastal record: fjords (glacial troughs flooded by rising sea), drowned river valleys (estuaries), or barrier islands built on the newly flooded continental shelf",
            "Sea level dropped because cold temperatures caused the ocean to thermally contract; warming since the LGM has raised sea level through thermal expansion alone; coral reefs (glacial) and sea cliffs (coastal) preserve this history",
            "Sea level dropped because continental ice sheets depressed the crust isostatically, lowering coastlines relative to the sea; rebound since glaciation raised sea level; raised beaches (coastal) and drumlins (glacial) record this",
          ],
          correct: 1,
          explain: "The mechanism is glacio-eustasy: water evaporated from the ocean precipitates as snow at high latitudes; during glacial periods it accumulates in ice sheets rather than returning to the ocean via rivers, directly reducing ocean volume. The ~120 m LGM drop represents ~52 million km³ of ice above modern levels. Seafloor spreading (A) does affect sea level over millions of years but not on glacial-interglacial timescales of ~100,000 years. Thermal contraction (C) is real but contributes only ~3–5 m over the full temperature change — insufficient for 120 m. Isostasy (D) affects relative sea level (land up or down) but not global eustatic sea level — the ocean itself is unaffected by crustal movement.",
        },
      ],
    },
  ],
}

export default geol101Capstone
