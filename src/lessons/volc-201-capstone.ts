import type { Lesson } from './types'

const volc201Capstone: Lesson = {
  id: 'volc-201-capstone',
  title: 'Magma Systems & Igneous Petrology: Capstone Assessment',
  track: 'vol',
  trackName: 'Volcanology',
  level: 'Advanced',
  duration: '25 min',
  xpReward: 500,
  description:
    'A comprehensive assessment covering partial melting mechanisms, Bowen\'s reaction series, magma classification, large igneous provinces, crystal mush systems, calderas and supervolcanoes, oceanic island geochemistry, subduction zone signatures, planetary volcanism, flood basalts, MORB petrogenesis, and isotopic tracers.',
  sources: [
    {
      org: 'USGS',
      title: 'Volcano Hazards Program — Scientific Background',
      url: 'https://volcanoes.usgs.gov/vhp/science.html',
    },
    {
      org: 'Smithsonian Institution',
      title: 'Global Volcanism Program — Volcano Data',
      url: 'https://volcano.si.edu/',
    },
    {
      org: 'NOAA',
      title: 'Hydrothermal Vents and Mid-Ocean Ridge Volcanism',
      url: 'https://oceanexplorer.noaa.gov/facts/volcanism.html',
    },
    {
      org: 'NASA',
      title: 'Solar System Exploration — Planetary Volcanism',
      url: 'https://solarsystem.nasa.gov/planets/mars/in-depth/',
    },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Magma Systems & Igneous Petrology: Capstone Assessment',
      body: `This capstone assessment tests mastery of advanced volcanology and igneous petrology spanning the full breadth of the Magma Systems & Igneous Petrology track. Questions draw on partial melting theory, crystallisation systematics, geochemical tracers, and the planetary context of volcanism.

The 20 questions are designed to probe mechanistic understanding rather than surface recall. Each item requires you to reason from first principles — whether explaining why flux melting lowers the solidus, how isotopic ratios fingerprint mantle source regions, or why a plate-locked planet grows the tallest volcano in the solar system.

Read each question carefully. Distractors are constructed to target the most common conceptual errors. Take your time — every explanation provided after answering is worth reading regardless of whether you answered correctly.`,
      keyTerms: [],
    },
    {
      type: 'quiz',
      questions: [
        // ── Q1: Decompression melting at MOR ────────────────────────────────
        {
          q: 'At mid-ocean ridges, decompression melting generates MORB without any external heat input. Which statement most accurately describes the physical mechanism?',
          a: [
            'Adiabatically upwelling mantle peridotite crosses the pressure-dependent solidus because the solidus temperature falls faster with decreasing pressure than the adiabatic temperature of the ascending rock, initiating partial melting without added heat',
            'Seawater percolates into fractures at the ridge axis, reacts with peridotite to form serpentinite, and releases latent heat that raises local temperatures above the peridotite solidus',
            'Radioactive decay of ²³⁵U and ²³²Th concentrated beneath the ridge provides a focused heat source that elevates asthenospheric temperatures above the melting point of peridotite',
            'Viscous heating from rapid mantle convection generates frictional heat at shear zones beneath the ridge, raising the local temperature above the solidus and producing primary melts',
          ],
          correct: 0,
          explain:
            'The key is the relationship between the mantle adiabat and the peridotite solidus on a pressure–temperature diagram. As asthenosphere rises beneath a mid-ocean ridge, it cools at the adiabatic lapse rate (~0.3 °C/km). The solidus of dry peridotite, however, decreases in temperature much more steeply with falling pressure (~3 °C/km). Consequently, the ascending rock — still essentially at its ambient temperature — intersects the solidus from the solid side as pressure drops, and partial melting commences. No heat addition is required. Option B describes flux melting driven by hydration and serpentinisation, the mechanism relevant to subduction zones, not mid-ocean ridges. Option C incorrectly invokes focused radiogenic heat; radiogenic decay is dispersed throughout the mantle and provides background heat flow, not a ridge-localised trigger. Option D incorrectly identifies viscous heating as significant; frictional dissipation at mantle strain rates is far too small to raise temperatures by the several hundred degrees needed to cross the solidus.',
        },

        // ── Q2: Flux melting at subduction zones ────────────────────────────
        {
          q: 'In subduction zones, slab-derived fluids trigger melting of the overlying mantle wedge. What is the specific thermodynamic effect that lowers the solidus?',
          a: [
            'Subducted fluids carry CO₂ that reacts with silicate minerals to form carbonate, releasing heat through an exothermic reaction that raises mantle wedge temperatures above the dry solidus',
            'The subducting slab refrigerates the overlying mantle wedge, forcing the geotherm into the solidus field from the low-temperature side and generating melts unusually rich in compatible trace elements',
            'Water released by dehydration of hydrous minerals (serpentinite, chlorite, phengite) in the subducting slab dissolves into the overlying mantle peridotite, breaking Si–O–Si and Si–O–Al bonds and thereby reducing the activation energy and temperature required for melting — shifting the solidus to lower temperatures at a given pressure',
            'Reduced pressure in the subarc mantle wedge caused by viscous corner flow creates a decompression melting episode identical in mechanism to mid-ocean ridge magmatism, making slab fluid flux irrelevant',
          ],
          correct: 2,
          explain:
            'Water is the critical agent of flux melting. Hydrous minerals in the subducting slab — principally serpentinite, chlorite, amphibole, and phengite — break down at characteristic pressure–temperature conditions as the slab descends. Released H₂O rises buoyantly into the overlying mantle wedge. In the silicate melt structure, water molecules bond with non-bridging oxygens and disrupt the Si–O–Si and Si–O–Al polymeric networks, dramatically reducing melt viscosity and, more fundamentally, depressing the solidus temperature by up to 200–300 °C at relevant pressures. This shifts the wet solidus well below the ambient mantle wedge temperature, initiating partial melting at depths (80–150 km) where dry peridotite would remain solid. Option A confuses CO₂ flux with water flux; CO₂ actually raises the solidus slightly relative to H₂O-fluxed conditions. Option B inverts the thermal geometry — the slab does locally cool the wedge near the slab interface, but the wedge interior where melting occurs is hot; the effect described does not lead to melting. Option D is partially true in that corner flow does create some pressure variation, but decompression alone cannot account for the volumes and depths of arc magmatism; slab-derived water is the primary melting trigger.',
        },

        // ── Q3: Bowen's reaction series — first mineral ─────────────────────
        {
          q: 'According to Bowen\'s reaction series, which mineral is the first to crystallise from a cooling basaltic melt at atmospheric pressure?',
          a: [
            'Quartz, because it has the simplest silicate structure (isolated SiO₄ tetrahedra) and crystallises at the highest temperature in the continuous series',
            'Plagioclase feldspar (anorthite-rich end), because it forms the backbone of the discontinuous series and anchors all subsequent crystallisation',
            'Hornblende, because its complex hydroxyl-bearing structure allows it to incorporate the widest range of cation sizes at high temperature, making it thermodynamically stable as the first phase',
            'Olivine, because it is the highest-temperature liquidus phase in the discontinuous reaction series for basaltic compositions, crystallising at approximately 1200 °C from mantle-derived melts',
          ],
          correct: 3,
          explain:
            'Norman L. Bowen\'s systematic experiments on silicate melt crystallisation established the reaction series. For basaltic compositions at atmospheric pressure, the liquidus phase — the first mineral to appear on cooling — is olivine (Mg₂SiO₄–Fe₂SiO₄ solid solution), which crystallises at temperatures around 1150–1250 °C depending on Mg/Fe ratio and melt composition. Olivine sits at the high-temperature end of the discontinuous reaction series (olivine → pyroxene → amphibole → biotite) and co-crystallises with Ca-rich plagioclase (anorthite end) from the continuous series. Quartz is at the low-temperature end of Bowen\'s series and is incompatible with olivine — it crystallises last and only in silica-oversaturated compositions like granite or rhyolite, never from a primary basaltic melt. Hornblende requires hydroxyl groups and thus a water-bearing melt; it appears at intermediate temperatures and only after significant crystallisation has enriched the melt in volatiles — it is not a liquidus phase in anhydrous basalt.',
        },

        // ── Q4: Fractional crystallisation and SiO2 ────────────────────────
        {
          q: 'A basaltic magma undergoes fractional crystallisation as it cools in a crustal magma chamber. How does the SiO₂ content of the residual melt change, and why?',
          a: [
            'SiO₂ content decreases progressively because crystallising minerals (olivine, pyroxene) sequester silicon in their crystal structures faster than they remove other oxides, leaving the melt depleted in silica relative to its starting composition',
            'SiO₂ content oscillates because magma mixing periodically replenishes the chamber with fresh basalt, alternately raising and lowering the silica content of the evolving melt without any net trend',
            'SiO₂ content remains essentially constant throughout fractional crystallisation because silicon and oxygen are the most abundant components of both the crystals and the melt, so their ratio is buffered at the original value',
            'SiO₂ content increases progressively because the early-crystallising mafic minerals — olivine (Mg₂SiO₄) and pyroxene (MgSiO₃/CaMgSi₂O₆) — are relatively SiO₂-poor compared to the whole-rock composition and are removed from the melt, concentrating silica and incompatible elements in the residual liquid and driving it toward andesitic, dacitic, and ultimately rhyolitic compositions',
          ],
          correct: 3,
          explain:
            'Fractional crystallisation is one of the primary differentiation engines of igneous petrology. Olivine (Mg₂SiO₄, ~42 wt% SiO₂) and early pyroxenes (~52–55 wt% SiO₂) have lower SiO₂ contents than a typical basaltic melt (~50 wt% SiO₂). When these minerals crystallise and are removed from the melt — either by settling, flotation, or wall-rock accumulation — the SiO₂ that they would have incorporated remains in the residual liquid. Simultaneously, their removal concentrates incompatible elements (K, Na, Ti, P, Rb, Zr) and SiO₂ in the shrinking melt volume. Repeated crystallisation and removal of progressively less mafic minerals (olivine → pyroxene → amphibole → biotite on the discontinuous series; anorthite-rich → albite-rich plagioclase on the continuous series) produces a liquid line of descent from basalt (~50% SiO₂) through andesite (~60%) to dacite (~65%) and rhyolite (~75%). This is the Daly gap and the chemical basis for igneous rock classification. Option A is incorrect: mafic minerals incorporate proportionally less SiO₂ than the melt from which they grow, not more. Option B describes magma replenishment (open-system behaviour) which can occur but is a secondary process; fractional crystallisation in a closed system produces a systematic SiO₂ increase.',
        },

        // ── Q5: Magma type at subduction zones ─────────────────────────────
        {
          q: 'What is the dominant magma type produced at subduction zone volcanic arcs, and what compositional characteristic distinguishes it from mid-ocean ridge basalt?',
          a: [
            'Komatiite; subduction zone melts are ultramafic because the very high pressures above the subducting slab produce extremely large degrees of partial melting that dilute all differentiation products',
            'Calc-alkaline andesite; arc magmas are enriched in large-ion lithophile elements (LILE: Ba, Sr, K, Rb) and depleted in high-field-strength elements (HFSE: Nb, Ta, Ti) relative to MORB, a pattern called the arc signature reflecting slab-fluid metasomatism of the mantle wedge',
            'Tholeiitic basalt chemically identical to MORB; the only difference is tectonic setting — subduction zone tholeiites and MORB share the same source mantle and identical trace element patterns',
            'Carbonatite; the high CO₂ content of subducted carbonate sediments transforms the mantle wedge into a carbonate-rich source that generates carbonate-dominated eruptions at arc volcanoes',
          ],
          correct: 1,
          explain:
            'Subduction zone arcs predominantly produce calc-alkaline magmas ranging in composition from basaltic andesite through andesite (~60 wt% SiO₂) to dacite and rhyolite. The defining geochemical signature — sometimes called the "arc signature" — is enrichment in LILE (Ba, Sr, K, Rb, Pb) relative to MORB and depletion in HFSE (Nb, Ta, Ti, Zr). On a multi-element normalised diagram, this pattern produces a characteristic negative Nb–Ta anomaly. The enrichment arises because LILE are highly soluble in aqueous slab-derived fluids and are efficiently mobilised into the mantle wedge during slab dehydration. HFSE, by contrast, are relatively insoluble in such fluids and are retained in residual rutile and ilmenite in the slab. MORB, generated from relatively undepleted (or depleted MORB mantle) source with no slab fluid input, lacks these enrichments and depletions. Komatiite requires very high-temperature, high-degree melting characteristic of the Archean mantle and is extremely rare today. Carbonatite does exist in rift settings (Oldoinyo Lengai, Tanzania) but is not the dominant product of arc volcanism.',
        },

        // ── Q6: LIP definition — volume threshold ───────────────────────────
        {
          q: 'What minimum erupted volume defines a Large Igneous Province (LIP), and which of the following correctly applies that definition?',
          a: [
            'A LIP requires a minimum of 10,000 km³ of igneous material emplaced over any time period; by this threshold, Yellowstone qualifies as a LIP because its three caldera-forming eruptions together exceed 10,000 km³',
            'A LIP requires a minimum of 100,000 km³ of predominantly mafic igneous material emplaced in less than ~50 million years, usually in one or a few short pulses; the Ontong Java Plateau (~50 × 10⁶ km³) and the Siberian Traps (~3 × 10⁶ km³ surface volcanic material plus extensive sills) qualify, whereas the Cascade volcanic arc (~5,000 km³ total) does not',
            'A LIP requires a minimum erupted volume of 100 km³ of felsic material; the definition specifically excludes mafic provinces because basaltic eruptions cannot sustain the high eruption columns needed to distribute material over continental scale',
            'LIPs are defined solely by areal extent exceeding 1,000,000 km²; volume is not a criterion, and both the Himalayan granites and the Deccan Traps qualify equally as LIPs regardless of composition',
          ],
          correct: 1,
          explain:
            'The definition of a Large Igneous Province, formalised by Bryan and Ernst (2008) and widely adopted, requires a minimum volume of ~100,000 km³ of predominantly mafic (and/or ultramafic) igneous material emplaced in geologically short time intervals (typically <50 Myr, often <5 Myr). The emphasis on mafic composition and rapid emplacement distinguishes LIPs from slow-growing magmatic arcs or granitic batholiths. The Ontong Java Plateau (western Pacific) is the largest known LIP at roughly 50 × 10⁶ km³; the Siberian Traps (~252 Ma, ~3 × 10⁶ km³ of surface lava plus an even larger sill complex intruding the Tunguska Basin) and the Deccan Traps (~66 Ma, ~0.5–1.5 × 10⁶ km³) are canonical continental flood basalt LIPs. Yellowstone\'s three eruptions total only ~3,000–4,000 km³ DRE and are felsic (rhyolitic), disqualifying it on both volume and composition grounds. The Cascade arc is an active continental margin arc, not a LIP.',
        },

        // ── Q7: Siberian Traps — associated extinction ──────────────────────
        {
          q: 'The Siberian Traps flood basalt province is temporally coincident with which mass extinction event, and what is the primary kill mechanism linking the two?',
          a: [
            'The Cretaceous–Paleogene (K–Pg) extinction (~66 Ma); the Siberian Traps injected SO₂ aerosols into the stratosphere that combined with the Chicxulub impact winter to cause a decade-long global freeze',
            'The end-Ordovician extinction (~443 Ma); the Siberian Traps triggered rapid glaciation by drawing down atmospheric CO₂ through weathering of freshly erupted basalt, cooling the planet and causing a brief glacial episode',
            'The end-Permian extinction (~252 Ma); eruption of ~3 × 10⁶ km³ of basalt and intrusion of vast sill complexes through organic-rich sediments released enormous quantities of CO₂, SO₂, CH₄, and halocarbons, causing ocean acidification, anoxia, warming, and ozone destruction that collectively drove ~96% of marine species and ~70% of terrestrial vertebrate species to extinction',
            'The end-Triassic extinction (~201 Ma); the Siberian Traps released silicic tephra that blocked photosynthesis globally for ~500,000 years, causing a cascading collapse of food webs from primary producers upward',
          ],
          correct: 2,
          explain:
            'The Siberian Traps erupted predominantly between 252.2 and 251.9 Ma, precisely coincident with the end-Permian mass extinction — the most severe biotic crisis in the history of complex animal life, eliminating an estimated 81–96% of marine species. The eruptions emplaced ~3 × 10⁶ km³ of surface lava and a volumetrically comparable sill complex through the Tunguska sedimentary basin, which was rich in coal, evaporites, and carbonates. The intrusions volatilised enormous quantities of thermogenic CO₂, CH₄, SO₂, and halocarbons (from evaporite sequences) in addition to magmatic degassing. The resulting cascade of environmental effects included: rapid global warming (4–8 °C), ocean acidification (pH drop ~0.7 units, sufficient to suppress calcification in corals, brachiopods, and foraminifera), widespread oceanic anoxia, and potential ozone depletion. The end-Triassic extinction is associated with the Central Atlantic Magmatic Province (CAMP), not the Siberian Traps. The K–Pg extinction is primarily associated with the Chicxulub impactor, though the contemporaneous Deccan Traps may have contributed. The end-Ordovician extinction is linked to Gondwana glaciation.',
        },

        // ── Q8: Crystal mush — eruptibility threshold ───────────────────────
        {
          q: 'In the crystal mush model of silicic magma reservoirs, what melt fraction threshold is generally required for a magma body to become eruptible (i.e., to mobilise and reach the surface)?',
          a: [
            'Above approximately 40–50% melt fraction (equivalent to less than ~50–60% crystals); below the rheological lock-up threshold — often cited near 40–50 vol% crystals — the mush behaves as a rigid, non-eruptible solid; extraction of eruptible melt requires processes such as melt segregation driven by compaction, volatile fluxing, or injection of new magma to remobilise the crystal framework',
            'Less than 10% melt fraction; highly crystalline mushes are actually easier to erupt because the rigid crystal network acts as a piston that forces melt upward when tectonic stress is applied',
            'Exactly 50% melt fraction; below this value, crystalline solids dominate and the mush cannot flow; above 50% melt the system is indistinguishable from a liquid and erupts freely',
            'Any melt fraction above 1% is sufficient for eruption; even trace amounts of interstitial melt allow crystal mushes to flow under the very high lithostatic pressures present at 5–10 km depth in the crust',
          ],
          correct: 0,
          explain:
            'The crystal mush concept, extensively developed for supervolcanic systems like Yellowstone, Long Valley, and the Taupo Volcanic Zone, posits that large silicic magmatic systems spend most of their time as crystal-rich mushes rather than as large volumes of eruptible magma. Experimental and theoretical work on silicate melt rheology identifies a critical melt fraction — approximately 40–50 vol% melt (or equivalently, 50–60 vol% crystals) — as the rheological lock-up threshold. Above this melt fraction, the system has a "liquid-like" bulk rheology and can flow and erupt. Below it, interlocking crystal frameworks support shear stress as a rigid solid, preventing wholesale mobilisation. For an eruption to occur from a mostly-crystalline mush, a triggering mechanism must locally exceed the lock-up threshold: injection of hot primitive magma melts adjacent crystals, volatile saturation and vesiculation reduce effective viscosity, or compaction-driven melt segregation accumulates a lensoid eruptible melt pocket above the mush. This framework explains the episodic, punctuated nature of supereruptions at long-lived caldera systems.',
        },

        // ── Q9: Yellowstone magmatic system depth ───────────────────────────
        {
          q: 'Geophysical imaging of the Yellowstone magmatic system has revealed a two-tiered architecture. Which description best matches current scientific understanding?',
          a: [
            'A shallow rhyolitic crystal mush reservoir at approximately 5–17 km depth is underlain by a much larger basaltic/gabbroic partial melt zone extending from ~20 to ~50 km depth, which itself sits above the top of the mantle plume; together these represent a vertically connected magmatic system with a total volume of roughly 46,000 km³ of partial melt',
            'A single rhyolitic magma chamber at 5–15 km depth containing ~30% melt fraction underlies the entire caldera; below 15 km the crust is entirely solid and no magmatic material is present',
            'The Yellowstone hotspot is fed directly by a tear in the North American plate that exposes the core–mantle boundary; magma wells up from 2,900 km depth without any crustal storage, explaining the rapid onset of eruptions',
            'Yellowstone\'s magmatic system consists entirely of supercritical CO₂-rich fluid with no silicate melt; the hydrothermal system is powered by conductive heat flow from a purely solidified intrusion, and no eruptions have occurred for more than 2 million years',
          ],
          correct: 0,
          explain:
            'Seismic tomography studies (Farrell et al. 2014; Huang et al. 2015) have imaged a two-level magmatic architecture beneath Yellowstone. The upper crustal reservoir, at roughly 5–17 km depth, is a rhyolitic crystal mush with an estimated 5–15% partial melt fraction and a volume of ~4,000–10,000 km³; this is the source reservoir for rhyolitic eruptions. A deeper, larger basaltic/gabbroic partial melt zone extends from approximately 20 to 50 km depth, with volumes estimated up to ~46,000 km³ at ~2% melt fraction. This deeper body represents basaltic underplating by the Yellowstone mantle plume, which provides the heat that maintains the overlying rhyolitic mush. Heat transfer from the basaltic lower zone periodically remobilises the upper rhyolitic mush toward the lock-up threshold. The two-tier system is connected but separated by a mostly solid crustal region, explaining the time lag between plume heat pulses and surface rhyolitic volcanism. The last major rhyolitic eruption at Yellowstone was the Lava Creek Tuff caldera-forming event ~631,000 years ago.',
        },

        // ── Q10: Caldera formation mechanism ───────────────────────────────
        {
          q: 'Which mechanism best explains the formation of large collapse calderas such as those at Yellowstone, Toba, and Crater Lake (Mount Mazama)?',
          a: [
            'A single catastrophic explosion excavates a hemispherical pit equal in diameter to the explosive energy released; the size of the caldera is therefore proportional to the magnitude of the explosion rather than to the dimensions of any subsurface structure',
            'Prolonged erosion by hydrothermal acid weathering dissolves the summit region of the volcano over tens of thousands of years, creating a topographic depression that eventually collapses under its own weight',
            'Rapid withdrawal of large volumes of magma from a shallow reservoir — either by eruption of ≥100–1,000 km³ of pyroclastic material or by lateral intrusion — removes support from the reservoir roof, which then collapses along ring faults bounding the reservoir margin, creating a broad, flat-floored depression whose diameter reflects the footprint of the evacuated chamber rather than any explosion geometry',
            'Calderas form exclusively at the intersection of two or more active fault systems; tectonic subsidence along these faults creates the depression, and subsequent volcanic activity simply fills the resulting topographic low with lava and ash',
          ],
          correct: 2,
          explain:
            'Caldera collapse is a subsidence process, not an explosion process, even though it is often preceded by or contemporaneous with catastrophic pyroclastic eruptions. As magma is erupted (typically in ignimbrite-forming super-eruptions) or migrates laterally, the magma chamber loses volume and can no longer support its roof. The overlying block of crust collapses downward along inward-dipping ring faults that propagate from the margins of the depressurised chamber upward to the surface. Because the structure is controlled by the geometry of the underlying magma reservoir — which may be 10–100 km across — the resulting caldera is far larger than any explosion crater could be (explosion craters are typically <1–2 km in diameter). The Toba caldera (Indonesia) is ~100 × 30 km, reflecting its enormous reservoir footprint. At Crater Lake/Mount Mazama, ~7,700 years ago, the collapse was triggered by the evacuation of ~50 km³ DRE during a Plinian/ignimbrite eruption. At Yellowstone, the 631 ka Lava Creek Tuff eruption (1,000 km³) formed the present 55 × 72 km caldera. The ring faults bounding these calderas are directly observable in the field and in seismic surveys.',
        },

        // ── Q11: Toba supereruption age and volume ──────────────────────────
        {
          q: 'The Toba supereruption is one of the largest known volcanic events of the past few million years. Which values for its age and erupted volume are correct?',
          a: [
            'Approximately 252 Ma (end-Permian) and ~3 × 10⁶ km³; Toba is another name for the Siberian Traps event and represents the largest single eruption in Earth\'s history',
            'Approximately 640,000 years ago and ~1,000 km³ DRE; Toba is the most recent caldera-forming eruption at Yellowstone, and its ash layer is used to correlate Pleistocene stratigraphic sections across North America',
            'Approximately 26,500 years ago and ~530 km³ DRE; Toba is the correct name for the Oruanui eruption at Lake Taupo, New Zealand, which is the most recent confirmed VEI 8 eruption on Earth',
            'Approximately 74,000 years ago (Marine Isotope Stage 4) and ~2,800 km³ dense-rock equivalent (bulk tephra ~5,000–7,000 km³); it produced a caldera ~100 × 30 km in northern Sumatra and deposited recognisable ash across South Asia, the Indian Ocean, and East Africa',
          ],
          correct: 3,
          explain:
            'The Toba supereruption occurred approximately 73,500–74,000 years ago (U–Pb and ⁴⁰Ar/³⁹Ar dating) during Marine Isotope Stage 4, a glacial period, on the island of Sumatra (Indonesia). It erupted approximately 2,800 km³ DRE (dense-rock equivalent), making it the largest known eruption of the Quaternary. The resulting caldera — now occupied by Lake Toba — measures approximately 100 km × 30 km. The Youngest Toba Tuff is the principal deposit, with thicknesses of several centimetres to metres found across South Asia, the Bay of Bengal, and East Africa. Toba has been proposed (controversially) to have caused a human population bottleneck, though the genetic and archaeological evidence for catastrophic effects on human populations remains debated. The end-Permian Siberian Traps (~252 Ma) and Yellowstone\'s Lava Creek Tuff (~631 ka) are entirely different events. The Oruanui eruption (~26.5 ka, ~530 km³ DRE) is at Taupo, New Zealand — a distinct volcano.',
        },

        // ── Q12: OIB mantle end-member HIMU ─────────────────────────────────
        {
          q: 'In the geochemistry of oceanic island basalts (OIBs), what does the mantle end-member termed HIMU signify?',
          a: [
            'HIMU stands for "High Magnesium Ultramafic" and describes a mantle reservoir that has accumulated MgO from subducted harzburgite over billions of years, producing OIBs with exceptionally high Mg# (>80) and primitive trace element signatures',
            'HIMU stands for "High μ" where μ = ²³⁸U/²⁰⁴Pb; it identifies a mantle reservoir with a high time-integrated U/Pb ratio that has evolved over ~1–2 billion years to produce anomalously radiogenic Pb isotope ratios (high ²⁰⁶Pb/²⁰⁴Pb, ²⁰⁷Pb/²⁰⁴Pb, ²⁰⁸Pb/²⁰⁴Pb), interpreted as ancient subducted oceanic crust from which Pb was removed by dehydration during subduction and U retained',
            'HIMU stands for "Hotspot-Induced Mantle Upwelling" and is a fluid-dynamic term for the shape of the anomalously hot mantle plume conduit beneath ocean islands such as Hawaii; it has no isotopic meaning',
            'HIMU stands for "High Incompatible Metal Uptake" and describes OIBs that are anomalously enriched in platinum-group elements (PGEs) sourced from the liquid outer core, consistent with core–mantle interaction at the D″ layer',
          ],
          correct: 1,
          explain:
            'HIMU is one of the four principal mantle end-member reservoirs identified through Pb–Sr–Nd isotope systematics of OIBs (the others are DMM — depleted MORB mantle — EM1, and EM2). The acronym stands for high-μ, where μ is the parent-to-daughter ratio ²³⁸U/²⁰⁴Pb. A reservoir with high U/Pb that has evolved in isolation for ~1–2 billion years will produce unusually radiogenic Pb: specifically, very high ²⁰⁶Pb/²⁰⁴Pb (>21), ²⁰⁷Pb/²⁰⁴Pb, and ²⁰⁸Pb/²⁰⁴Pb ratios. The HIMU reservoir is best explained by ancient recycled oceanic crust (eclogite) in which Pb was stripped into slab fluids during subduction — raising the residual U/Pb ratio — while U was retained in the residual slab. After ~1–2 Gyr of storage in the deep mantle, radioactive decay of ²³⁵U, ²³⁸U, and ²³²Th builds the anomalous Pb ratios observed at islands like St. Helena and the Cook–Austral chain. HIMU OIBs also tend to have low ⁸⁷Sr/⁸⁶Sr and high ¹⁴³Nd/¹⁴⁴Nd, consistent with a depleted (low Rb/Sr, high Sm/Nd) ancient eclogitic source.',
        },

        // ── Q13: Hawaii-Emperor chain age progression ───────────────────────
        {
          q: 'The Hawaiian-Emperor seamount chain shows a systematic age progression from oldest (Emperor seamounts, northwest) to youngest (active Hawaiian Islands, southeast). What does this progression demonstrate, and what causes the bend in the chain?',
          a: [
            'The age progression demonstrates that the Pacific plate is moving toward the northwest over a fixed hotspot in the mantle; the bend in the chain (~47 Ma) records either a change in Pacific plate motion direction or a southward shift of the Hawaiian hotspot, with ongoing debate about which factor dominates',
            'The age progression demonstrates that hotspots migrate rapidly across the surface following mid-ocean ridge jumps; the Emperor seamounts record a former position of the East Pacific Rise, and the bend marks when the Hawaiian hotspot was captured by the Pacific plate',
            'The age progression has nothing to do with plate motion; the Emperor–Hawaii chain formed by a propagating fracture through the Pacific plate driven by the weight of Mauna Loa and Mauna Kea, with the fracture progressing toward the northwest at the same rate as the apparent hotspot track',
            'The bend in the Hawaiian-Emperor chain records the Cretaceous–Paleogene bolide impact, which deflected the Pacific plate\'s trajectory by ~60° as shock waves propagated through the lithosphere; the chain younger than 66 Ma tracks the post-impact plate motion',
          ],
          correct: 0,
          explain:
            'The Hawaiian-Emperor chain is the classic example of a hotspot track, demonstrating progressive volcanism over a mantle plume as the overlying plate migrates. Radiometric dating (⁴⁰Ar/³⁹Ar) of the seamounts shows a systematic northwest-to-southeast younging: the Emperor seamounts range from ~80 Ma (Detroit Seamount) to ~47 Ma (Daikakuji), and the Hawaiian chain from ~5.1 Ma (Kauai) to present (active Kīlauea and Lōʻihi). The overall rate of Pacific plate motion over the hotspot is approximately 6–9 cm/yr. The prominent bend at ~47 Ma (the Emperor–Hawaii bend) records a change in the direction of Pacific plate motion from roughly north-northwest to west-northwest. However, paleomagnetic studies of the Emperor seamounts suggest the hotspot itself also migrated southward by ~800–1,000 km between ~80 and 47 Ma, complicating the simple fixed-hotspot interpretation. Current consensus holds that both plate motion change and hotspot drift contributed to the bend geometry. The K–Pg impact (66 Ma) had no demonstrable effect on Pacific plate trajectory.',
        },

        // ── Q14: Ba/La ratio in arc lavas ───────────────────────────────────
        {
          q: 'Elevated Ba/La ratios in arc lavas relative to MORB and OIB are used as a geochemical tracer. What does a high Ba/La ratio specifically indicate?',
          a: [
            'A high Ba/La ratio indicates that the arc magmas were contaminated by continental crust during ascent, because Ba is enriched in granites relative to La due to its large ionic radius fitting into K-feldspar sites',
            'A high Ba/La ratio indicates a significant contribution of aqueous fluids derived from the dehydrating subducting slab, because Ba is highly fluid-mobile (large-ion lithophile element) while La is relatively immobile in aqueous fluids (behaves as a high-field-strength-adjacent element); the resulting enrichment of Ba over La fingerprints slab-fluid metasomatism of the mantle wedge source',
            'A high Ba/La ratio is a proxy for eruption temperature; Ba partitions preferentially into the melt at high temperatures while La is concentrated in clinopyroxene at the same conditions, so Ba/La increases with increasing primary melt temperature',
            'A high Ba/La ratio records the age of the subducting slab; older, colder slabs release Ba preferentially over La because their lower thermal gradients stabilise Ba-bearing minerals to greater depths while La-bearing apatite breaks down near the trench',
          ],
          correct: 1,
          explain:
            'The Ba/La ratio (and related ratios such as Ba/Nb, Sr/Nd, and Pb/Ce) are powerful tracers of slab-derived fluid input in arc lavas. Ba is a large-ion lithophile element (LILE) with a large ionic radius (+2, 1.56 Å) that makes it highly soluble in hydrous aqueous fluids released during slab dehydration. La (and other light REE) are relatively immobile in dilute aqueous fluids but more mobile in hydrous silicate melts; they partition more strongly into the mantle wedge solid phases (garnet, clinopyroxene) and are not efficiently transported by low-temperature slab fluids. Consequently, when slab-derived aqueous fluids metasomatise the mantle wedge, they add Ba (and other LILE: K, Rb, Sr, Pb) but not La, elevating the Ba/La ratio in the resulting partial melt above MORB or OIB values (which typically reflect mantle source ratios without slab fluid overprint). High Ba/La in arc lavas therefore directly fingerprints the proportion of the arc magma\'s incompatible element budget derived from slab-fluid vs. mantle-source contributions. Continental crustal contamination would also raise Ba but simultaneously raises many other trace elements (including LREE), and is usually distinguished by Sr–Nd–Pb isotopes.',
        },

        // ── Q15: Adakite formation condition ───────────────────────────────
        {
          q: 'Adakites are a distinctive volcanic rock type found at certain subduction zones. What specific condition is required for their formation?',
          a: [
            'Adakites form when arc magmas pond in the lower crust for >1 million years, allowing extensive fractional crystallisation of amphibole that strips out all middle REE and produces the characteristic Sr/Y and La/Yb enrichment seen in adakites',
            'Adakites form exclusively at ridge–trench collision zones where a mid-ocean ridge subducts, because only the extreme heat of an actively spreading ridge can melt the subducting slab; they are therefore always associated with slab windows in the overriding plate',
            'Adakites form by melting of refractory harzburgite at the base of the mantle wedge under ultra-high pressure conditions (>5 GPa); their high Sr/Y reflects preferential partitioning of Sr into the harzburgite residue at these pressures',
            'Adakites form by melting of eclogitised oceanic crust on the subducting slab itself (rather than the overlying mantle wedge), a condition met only when the slab is young and hot enough that its upper surface reaches garnet-stability conditions before passing beneath the normal slab-fluid dehydration zone; the melt then reacts with and metasomatises the overlying mantle wedge during ascent',
          ],
          correct: 3,
          explain:
            'Adakites (named after Adak Island, Alaska, where they were first characterised by Kay, 1978) are intermediate to felsic volcanic rocks with distinctive geochemical signatures: high Sr/Y (>20–40), high La/Yb, and low Y (<18 ppm) and Yb. These signatures require that garnet was stable in the melt source (garnet concentrates Y and HREE, leaving the melt depleted in those elements and elevated in La/Yb and Sr/Y), and that plagioclase was absent as a residual phase (plagioclase concentrates Sr, so its absence leaves Sr in the melt). These conditions — garnet stable, plagioclase absent — are met in eclogite at pressures above ~2 GPa, corresponding to depths greater than ~50 km. Adakites are therefore interpreted to represent melts of subducted oceanic crust (eclogite) rather than the overlying mantle wedge peridotite. This condition is met when the subducting oceanic lithosphere is sufficiently young (hot) that its thermal gradient allows the slab surface to reach melting temperatures before it dehydrates and cools. Slab melting can also occur at ridge–trench collisions, but adakites are not restricted to that setting; young, hot slab subduction is sufficient.',
        },

        // ── Q16: Olympus Mons — tectonic reason for height ──────────────────
        {
          q: 'Olympus Mons on Mars is approximately 22 km tall — nearly three times the height of Mauna Loa above its base. What is the primary tectonic reason for its exceptional height?',
          a: [
            'Mars has a much weaker gravitational field (~3.7 m/s² vs. Earth\'s 9.8 m/s²), which allows volcanic edifices to grow to much greater heights before gravitational collapse; on Earth, the same volume of lava would build a much lower, broader shield because gravity forces lateral spreading',
            'Olympus Mons sits directly above a subduction zone where rapid crustal thickening elevates the volcanic edifice; the subducting slab also provides a continuous supply of water-fluxed magma that erupts at high rates for billions of years',
            'Mars lacks global plate tectonics; the Martian lithosphere is essentially a single immobile plate, so the volcanic hotspot beneath Olympus Mons has been building on the same spot for billions of years without the lithosphere moving over it — unlike on Earth, where plate motion transports the lithosphere over a hotspot, distributing volcanic output along a chain of islands or seamounts and limiting the height any single edifice can reach',
            'The Martian crust is composed of very low-density pumice generated by early explosive volcanism; this low-density substrate allows enormous edifices to float isostatically to great heights, just as icebergs extend upward because ice is less dense than water',
          ],
          correct: 2,
          explain:
            'Olympus Mons reaches approximately 21–22 km above the Martian datum, with a basal diameter of ~600 km, making it the tallest and most voluminous volcano in the solar system. The fundamental reason is the absence of plate tectonics on Mars. On Earth, hotspot volcanism produces chains of volcanoes (e.g., the Hawaiian-Emperor chain) because the lithospheric plate continuously moves over the stationary hotspot, delivering new volcanic output to successively different surface locations. No single volcano accumulates output for more than a few million years before the plate carries it beyond the hotspot\'s zone of melting. On Mars, there is no lateral plate motion; the Tharsis volcanic province has been erupting over the same region for ~3–4 billion years. Each successive batch of magma adds to the same edifice, allowing Olympus Mons to grow to extraordinary height. Lower Martian gravity (3.7 m/s² vs. 9.8 m/s²) also plays a secondary role by reducing lithostatic pressure, allowing taller edifices before gravitational spreading dominates, but the primary cause is the stationary-plate (one-plate planet) architecture.',
        },

        // ── Q17: Flood basalt emissions — primary climate forcing gas ────────
        {
          q: 'During the emplacement of a continental flood basalt province, which volcanic emission is the primary short-term (years to decades) climate forcing agent, and what is its mechanism?',
          a: [
            'SO₂; when injected into the stratosphere by high-discharge flood basalt eruptions, SO₂ rapidly oxidises to H₂SO₄ aerosol droplets with high albedo that scatter shortwave solar radiation back to space, producing a radiative forcing of −1 to −5 W/m² per major eruptive pulse and causing surface cooling of 1–3 °C lasting 1–3 years per pulse — the short-term forcing opposite to the long-term CO₂ warming',
            'CO₂; flood basalt eruptions release far more CO₂ than SO₂, and CO₂\'s immediate greenhouse warming effect is stronger than any aerosol cooling, causing rapid global warming within months of the first eruptions',
            'Volcanic ash; fine ash particles suspended in the stratosphere reflect incoming solar radiation and cool the planet; flood basalt eruptions produce far more ash than smaller eruptions, sustaining a cooling effect for decades',
            'HCl; halogen-rich flood basalts inject massive quantities of HCl into the stratosphere, where it catalyses ozone destruction through the same mechanism as anthropogenic CFCs, primarily causing UV radiation increases rather than thermal forcing',
          ],
          correct: 0,
          explain:
            'The climate effects of flood basalt eruptions operate on two distinct timescales with opposite signs. On short timescales (years to decades per eruptive pulse), SO₂ is the primary forcing agent. SO₂ injected into the stratosphere is oxidised to H₂SO₄ within weeks, forming submicron aerosol droplets that efficiently scatter incoming shortwave solar radiation (high albedo) while being relatively transparent to outgoing longwave radiation. This produces net cooling analogous to the well-documented effect of Pinatubo (1991, ~0.5 °C cooling) but larger in magnitude for major flood basalt pulses. On long timescales (10³–10⁶ years), cumulative CO₂ outgassing drives warming, as the aerosols settle out (residence time 1–3 years in the stratosphere) while CO₂ accumulates in the atmosphere with a residence time of centuries to millennia. CO₂ is also released in far greater absolute volumes per flood basalt province, but its forcing only becomes climate-significant on the longer timescale of accumulation. Volcanic ash particles are much larger (microns to hundreds of microns) and settle from the troposphere within days to weeks, limiting their climate effect to the immediate eruption period. HCl from eruptions is an important secondary factor for ozone, but is not the primary thermal forcing agent.',
        },

        // ── Q18: MORB spreading rate vs axial structure ──────────────────────
        {
          q: 'At mid-ocean ridges, spreading rate strongly influences axial morphology. Which pairing correctly matches spreading rate with axial structure?',
          a: [
            'Fast-spreading ridges (e.g., East Pacific Rise, ~10 cm/yr full rate) have a prominent axial rift valley 20–40 km wide and 1–3 km deep, caused by the high extension rate pulling the crust apart before magma supply can fill the gap; slow ridges (e.g., Mid-Atlantic Ridge, ~2–3 cm/yr) have a narrow axial high without a rift valley, reflecting the robust melt supply at high spreading rates',
            'Slow-spreading ridges (e.g., Mid-Atlantic Ridge, ~2–3 cm/yr full rate) have a prominent axial rift valley 20–40 km wide and 1–3 km deep, caused by extension exceeding magmatic supply and allowing normal faulting to dominate; fast-spreading ridges (e.g., East Pacific Rise, ~10 cm/yr) have a narrow (<1–2 km wide), low-relief axial high underlain by an axial magma chamber lens, reflecting robust magma supply that keeps pace with or exceeds extension and prevents rift valley formation',
            'Intermediate-spreading ridges exclusively develop transform faults with no axial valley, because the intermediate magma supply exactly balances extension; fast and slow ridges both develop rift valleys of identical depth but different width',
            'All mid-ocean ridges have the same axial morphology regardless of spreading rate; the axial rift valley is a constant feature because it marks the plate boundary, and plate boundaries are always expressed as topographic lows irrespective of magma supply',
          ],
          correct: 1,
          explain:
            'The relationship between spreading rate and axial morphology is one of the most fundamental observations of mid-ocean ridge geology, established by the global survey work of Macdonald, Purdy, and others in the 1970s–1980s. The key variable is the ratio of magmatic heat supply to the rate of extension-driven cooling. At slow-spreading ridges (~1–5 cm/yr full rate, e.g., Mid-Atlantic Ridge, Southwest Indian Ridge), the magma supply is insufficient to keep the ridge thermally robust; the crust cools and becomes brittle, and normal faulting accommodates the extension, creating a pronounced axial rift valley 20–50 km wide and 1–3 km deep bounded by inward-facing fault scarps. Mantle peridotite is commonly exposed on the valley walls. At fast-spreading ridges (~8–16 cm/yr, e.g., East Pacific Rise), continuous robust magma supply maintains high crustal temperatures; the crust is thin and warm enough to deform ductilely rather than by brittle faulting, and the axial zone is an inflated high with a narrow (<1 km), shallow (<200 m deep) axial summit trough rather than a deep rift. Multichannel seismic profiling typically images an axial magma chamber melt lens at 1–3 km depth beneath fast ridges.',
        },

        // ── Q19: Black smoker temperature ──────────────────────────────────
        {
          q: 'Black smoker hydrothermal vents at mid-ocean ridges discharge extremely hot fluids. What is the typical measured temperature range at the vent orifice, and why can the fluid remain liquid at such temperatures?',
          a: [
            '100–120 °C; the fluids are near-boiling freshwater because seawater circulating through the hot oceanic crust is completely desalinated by ion exchange with basalt minerals before venting, and freshwater boils at lower temperatures under ridge pressures',
            '200–250 °C; the temperature is limited by the boiling point of seawater at hydrostatic pressure on the seafloor; any higher temperature would cause immediate flashing to steam at the vent orifice, destroying the chimney structure',
            '350–400 °C (with some superfast smokers recorded above 400 °C); the fluid remains liquid because the hydrostatic pressure of the overlying water column (typically 200–400 bar at 2,000–4,000 m water depth) is sufficient to elevate the boiling point of saline seawater-derived fluid well above 400 °C, preventing phase separation at the vent',
            '600–800 °C; black smoker fluids are molten rock extruded at temperatures close to the basalt liquidus, with the dark colour caused by iron droplets from the partially molten source rock rather than by precipitation of sulfide minerals',
          ],
          correct: 2,
          explain:
            'Black smoker hydrothermal vents discharge fluids typically measured at 350–405 °C at the vent orifice, with the highest reliably measured temperatures around 407 °C (Snake Pit field, Mid-Atlantic Ridge). The fluid remains liquid because of the immense hydrostatic pressure at typical mid-ocean ridge depths of 2,000–3,500 m below sea level. At 2,500 m depth, hydrostatic pressure is approximately 250 bar (25 MPa). The critical point of seawater (above which a distinct liquid phase no longer exists) is approximately 407 °C at 298 bar. Below the critical point, the boiling point of saline fluid is elevated far above 100 °C by pressure; at 250–400 bar, superheated liquid exists up to ~350–400 °C without phase separation. The dark "smoke" that gives black smokers their name is not soot or ash but finely precipitated metal sulfide minerals — primarily pyrite (FeS₂), chalcopyrite (CuFeS₂), sphalerite (ZnS), and wurtzite — that precipitate instantaneously when the hot, metal-rich, H₂S-bearing vent fluid mixes with cold (~2 °C), sulfate-bearing, slightly alkaline seawater at the vent orifice.',
        },

        // ── Q20: 87Sr/86Sr ratio diagnostic of MORB source ──────────────────
        {
          q: 'The ⁸⁷Sr/⁸⁶Sr isotope ratio is widely used to characterise mantle source regions. What ⁸⁷Sr/⁸⁶Sr value is diagnostic of a MORB (depleted MORB mantle, DMM) source, and why is this value lower than that of ocean island basalts or continental crust?',
          a: [
            'MORB has ⁸⁷Sr/⁸⁶Sr ≈ 0.7150–0.7200, higher than OIBs because the mid-ocean ridge environment concentrates radiogenic ⁸⁷Sr by hydrothermal leaching of the oceanic crust, adding radiogenic Sr from basalt alteration products to the primary magmatic signal',
            'MORB has ⁸⁷Sr/⁸⁶Sr ≈ 0.7025–0.7035, distinctly lower than enriched OIBs (~0.7035–0.7060) and continental crust (~0.706–0.720); this low ratio reflects the depleted MORB mantle source (DMM), which has a low time-integrated Rb/Sr ratio because Rb is an incompatible element that was preferentially extracted into the melt during early Earth differentiation events (continental crust extraction), leaving the residual mantle with little Rb to generate radiogenic ⁸⁷Sr by decay of ⁸⁷Rb',
            'MORB has ⁸⁷Sr/⁸⁶Sr ≈ 0.7000 exactly; this round number reflects the primordial solar system value that was "reset" to zero when the oceanic crust formed at the ridge axis 4.56 billion years ago and has not changed since because the seafloor is too young for measurable ⁸⁷Rb decay',
            'The ⁸⁷Sr/⁸⁶Sr ratio is identical in all mantle-derived rocks (0.7049 ± 0.0001) because the mantle is well-mixed by convection on timescales shorter than ⁸⁷Rb decay; isotopic variation in oceanic rocks reflects only crustal contamination during eruption, not source differences',
          ],
          correct: 1,
          explain:
            '⁸⁷Sr is produced by beta decay of ⁸⁷Rb (half-life ~4.88 × 10¹⁰ years). Over geological time, the ⁸⁷Sr/⁸⁶Sr ratio in a rock or reservoir evolves in proportion to its Rb/Sr ratio: high Rb/Sr → high ⁸⁷Sr/⁸⁶Sr; low Rb/Sr → low ⁸⁷Sr/⁸⁶Sr. The depleted MORB mantle (DMM) has a characteristically low ⁸⁷Sr/⁸⁶Sr of approximately 0.7023–0.7035. This reflects its long history of Rb depletion: Rb is a highly incompatible element that partitions strongly into melt during partial melting. Episodes of melt extraction — particularly the formation of continental crust over Earth\'s history — removed Rb preferentially from the mantle residue, leaving behind a DMM with very low Rb/Sr. With little Rb remaining in the source, very little radiogenic ⁸⁷Sr has been produced over billions of years. By contrast, continental crust (which received the Rb extracted from the mantle) has high Rb/Sr and thus high ⁸⁷Sr/⁸⁶Sr (0.706–0.750+). Enriched OIB sources (EM1, EM2) also have higher ⁸⁷Sr/⁸⁶Sr than DMM (0.703–0.706), reflecting either recycled continental crust, recycled oceanic sediments, or ancient metasomatised lithosphere incorporated into their plume sources. The combined Sr–Nd isotope diagram ("mantle array") elegantly demonstrates the inverse correlation between ⁸⁷Sr/⁸⁶Sr and ¹⁴³Nd/¹⁴⁴Nd across mantle reservoirs.',
        },
      ],
    },
  ],
}

export default volc201Capstone
