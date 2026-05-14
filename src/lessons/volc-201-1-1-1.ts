import { Flame, Mountain, Layers, Thermometer } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const partialMeltingMagmaGenesis: Lesson = {
  id: 'volc-201-1-1-1',
  title: 'Partial Melting & Magma Genesis',
  track: 'vol',
  trackName: 'Volcanology',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: 'How rocks melt to generate magma — decompression melting at mid-ocean ridges, flux melting in subduction zones, heat-transfer melting at hotspots, and factors controlling melt composition.',
  sources: [
    { org: 'USGS',     title: 'Volcano Hazards Program — Magma Genesis and Partial Melting',  url: 'https://volcanoes.usgs.gov/vhp/magma.html' },
    { org: 'AGU',      title: 'Journal of Geophysical Research — Solid Earth: Mantle Melting', url: 'https://agupubs.onlinelibrary.wiley.com/journal/21699356' },
    { org: 'OpenStax', title: 'Physical Geology 2e — Igneous Rocks and Magma (CC-BY 4.0)',    url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'GSA',      title: 'Geological Society of America — Mantle Petrology Resources',    url: 'https://www.geosociety.org/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'How does solid rock become magma?',
      body: `The mantle makes up roughly 84% of Earth\'s volume and is, paradoxically, nearly entirely solid despite temperatures exceeding 1,300°C at 100 km depth. The reason is pressure: the weight of overlying rock elevates the melting temperature of mantle minerals far above any local temperature. Melt forms only where that balance is disrupted — and understanding exactly how and where that disruption occurs is the central problem of magma genesis.

Geologists recognise three distinct mechanisms by which the mantle crosses its solidus — the temperature at which rock begins to melt. Each mechanism dominates in a different tectonic setting, produces magma of different composition, and ultimately controls the style and distribution of volcanic activity at the surface. Together they explain why ~21 km³ of new igneous rock is generated on Earth every year, why roughly 30% of all mantle melting happens at mid-ocean ridges, and why island arc volcanoes erupt explosively while ocean floor basalts ooze quietly onto the seafloor.

The mantle\'s primary rock type is **peridotite**, a coarse-grained assemblage dominated by olivine (~60%), orthopyroxene, clinopyroxene, and an aluminous phase — either plagioclase (shallow), spinel (intermediate), or garnet (deep, >65–75 km). This transition from spinel lherzolite to garnet lherzolite at ~65–75 km is not merely mineralogical bookkeeping: garnet retains heavy rare-earth elements far more effectively than spinel, so the depth of melting leaves a distinct chemical fingerprint in the resulting magma — a tool exploited by petrologists to infer melting depth from lava chemistry.

When peridotite heats above its solidus, not all minerals melt simultaneously. Because different minerals have different melting temperatures, rock melts progressively — a process called **partial melting**. The fraction of melt produced, denoted F, typically ranges from 1–30% in geological settings. At F ~1–5%, the melt is enriched in incompatible elements and has a distinct alkalic character; at F ~20–30%, as occurs at fast-spreading mid-ocean ridges, the melt is more magnesian and approaches primary olivine-saturated compositions. A **primary magma** is one that has not been modified by fractional crystallisation or contamination since it left the source region — it preserves the most direct record of melting conditions.

Two end-member melting models govern how partial melts are extracted. In **batch melting**, the melt remains in equilibrium with the residue until some threshold melt fraction is reached, then segregates all at once; the result is a single melt composition reflecting the integrated equilibrium. In **fractional melting**, each increment of melt is removed from the system as soon as it forms, preventing further reaction with the residue; this progressively depletes the source of fusible components and produces a spectrum of melt compositions. Real magmatic systems fall between these extremes, with **dunite channels** — networks of melt-saturated olivine conduits cutting through harzburgite residue — acting as fast pathways that allow small melt fractions to escape before re-equilibrating. The thermodynamic MELTS model (Ghiorso & Sack, 1995; updated as pMELTS and alphaMELTS) provides a quantitative framework for calculating melt composition and volume as a function of pressure, temperature, and bulk composition, and has become the standard computational tool in igneous petrology.

The residue left behind after partial melting is equally informative. Moderate degrees of melting (~10–20%) leave **harzburgite** — a clinopyroxene-poor, olivine-orthopyroxene rock depleted in incompatible elements. Higher degrees of melting leave **dunite**, consisting of nearly pure olivine. These depleted residues form the lower portion of the oceanic lithosphere and are sampled in ophiolites (slices of oceanic crust obducted onto continents), providing direct access to the products of mantle melting that normally remain below the seafloor.`,
      keyTerms: [
        {
          term: 'Partial melting',
          def: 'The process by which a rock melts incrementally — lower-melting-point minerals melt first while others remain solid. Melt fraction F (1–30%) controls the composition of the resulting magma: low F yields alkalic, incompatible-element-enriched melts; high F yields more magnesian, olivine-saturated melts. Partial melting of peridotite at typical mantle conditions produces basaltic melt at ~50% SiO₂.',
        },
        {
          term: 'Solidus',
          def: 'The pressure-temperature curve below which a rock is entirely solid. Above the solidus, some melt coexists with crystals (partial melting zone); above the liquidus, the rock is entirely molten. The dry peridotite solidus at 100 km is ~1,300°C; adding ~0.1 wt% H₂O lowers it by ~100°C, explaining flux melting in subduction zones.',
        },
        {
          term: 'Decompression melting',
          def: 'Melting triggered by a decrease in pressure — not an increase in temperature. As mantle rock rises adiabatically, pressure falls faster than the solidus temperature drops, so the rock eventually crosses the solidus and begins to melt. The dominant mechanism at mid-ocean ridges and mantle hotspots; described by the concept of mantle potential temperature (Tp).',
        },
        {
          term: 'Flux melting',
          def: 'Melting caused by the addition of volatiles — primarily water — which lower the solidus of mantle peridotite by ~100°C per wt% H₂O added. The primary melting mechanism in subduction zones: hydrous minerals in the subducting slab dehydrate at 80–120 km depth, releasing water into the hot overlying mantle wedge and triggering partial melting.',
        },
        {
          term: 'Primary magma',
          def: 'A melt that has been derived directly from its mantle source without subsequent modification by fractional crystallisation, mixing, or crustal contamination. Primary magmas are typically olivine-saturated basalts that preserve the temperature, pressure, and volatile content of the melting region. Identifying true primary magmas from lava suites is a key challenge in igneous petrology.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Key Concepts',
      body: 'Three distinct physical mechanisms drive mantle rock past its solidus. Each operates in a characteristic tectonic environment and imprints a diagnostic chemical signature on the resulting magma, from the olivine-saturated basalts of mid-ocean ridges to the volatile-rich andesites of subduction zones.',
      cards: [
        {
          name: 'Decompression Melting',
          icon: Mountain,
          color: BRAND.accent,
          desc: 'Rising mantle crosses the solidus as pressure drops faster than temperature during adiabatic ascent. Governed by mantle potential temperature (Tp ~1,280°C at MOR). Generates ~21 km³/yr globally; ~30% of all mantle melting occurs at mid-ocean ridges. Produces olivine-saturated primary basalt at ~50% SiO₂.',
          examples: 'Mid-Atlantic Ridge: ~2–3 cm/yr half-spreading, continuous basalt generation · Iceland: MOR + plume, anomalously thick crust (30 km vs. 7 km normal) from elevated Tp · Hawaii: hotspot plume decompression, shield-building tholeiitic basalt',
        },
        {
          name: 'Flux Melting',
          icon: Thermometer,
          color: BRAND.ruby,
          desc: 'Water released by slab dehydration at 80–120 km depth lowers the peridotite solidus by ~100°C per wt% H₂O, triggering melting in the overlying wedge. Produces volatile-rich, silica-enriched magmas (andesite to dacite). Drives Ring of Fire volcanism and explosive eruption styles due to high dissolved H₂O and CO₂.',
          examples: 'Cascades: Juan de Fuca slab dehydration at ~90 km depth, Mt. St. Helens dacite · Andes: Nazca plate subduction, andesitic-dacitic stratovolcanoes · Sumatra-Java arc: 130+ active volcanoes above subducting Indo-Australian plate',
        },
        {
          name: 'Heat-Transfer Melting',
          icon: Flame,
          color: BRAND.gold,
          desc: 'Conductive or advective heat from mantle intrusions melts the overlying crust directly. Rare compared to decompression and flux melting; most significant where a mantle plume impinges on thick continental lithosphere. Produces high-SiO₂ crustal melts (rhyolite, 70–75% SiO₂) by melting lower continental crust.',
          examples: 'Yellowstone: basaltic plume magma heats lower crust, generating rhyolitic calderas (Lava Creek Tuff ~0.64 Ma, ~1,000 km³) · Snake River Plain: track of heat-transfer melting as North American plate overrides Yellowstone hotspot',
        },
        {
          name: 'Melt Fraction & Residue',
          icon: Layers,
          color: BRAND.jade,
          desc: 'Melt fraction F ranges 1–30% in geological settings. Low F (~1–5%): alkalic, incompatible-element-rich melts; high F (~20–30%): tholeiitic, olivine-saturated melts. Harzburgite residue (depleted of cpx) forms at F ~10–20%; dunite channels (pure olivine) act as fast melt-extraction pathways. Spinel vs. garnet lherzolite stability changes at ~65–75 km.',
          examples: 'MORB tholeiites: F ~15–25%, harzburgite residue, ~50% SiO₂ · Ocean island alkali basalts (Hawaii): F ~3–8%, garnet lherzolite source > 75 km depth · Ophiolite peridotites (Oman, Cyprus): harzburgite and dunite residues directly exposed at surface',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Magma Genesis: From Mantle Source to Surface',
      body: 'This flow diagram traces the journey of magma from initial partial melting in the mantle through melt segregation, ascent, and eventual eruption — highlighting the key processes and phase transitions at each stage.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Follow melt generation from peridotite source rock through partial melting, segregation into dunite channels, magma chamber processing, and finally eruption at the surface in three tectonic settings',
        nodes: [
          {
            id: 'peridotite-source',
            label: 'Peridotite Source Rock',
            description: 'Spinel or garnet lherzolite in the asthenospheric mantle. Composed of olivine (~60%), orthopyroxene, clinopyroxene, and aluminous phase. Solidus at ~1,300°C at 100 km depth. Contains trace H₂O (~50–200 ppm) and CO₂ stored in nominally anhydrous minerals.',
            color: BRAND.textDim,
          },
          {
            id: 'melting-trigger',
            label: 'Melting Trigger',
            description: 'One of three mechanisms pushes rock past the solidus: (1) Decompression — pressure drop during adiabatic ascent at MOR or hotspot; (2) Flux — H₂O from slab dehydration lowers solidus by ~100°C/wt%; (3) Heat transfer — mantle plume thermally erodes thick continental crust.',
            color: BRAND.ruby,
          },
          {
            id: 'partial-melt-zone',
            label: 'Partial Melt Zone (F = 1–30%)',
            description: 'Melt fraction F accumulates in grain boundaries and pore spaces of the residual solid. At F < ~3%, melt is interconnected along grain edges; above ~8%, melt segregates efficiently. Batch vs. fractional melting determines how much the melt equilibrates with residue before extraction.',
            color: BRAND.accent,
          },
          {
            id: 'dunite-channels',
            label: 'Dunite Channels & Melt Segregation',
            description: 'Melt focuses into dunite-lined conduits (pure olivine channels) that cut through harzburgite residue, allowing primary melt to ascend rapidly without re-equilibrating. Channel networks are observed in ophiolites and inferred from geochemical disequilibrium signatures in MORB.',
            color: BRAND.gold,
          },
          {
            id: 'magma-chamber',
            label: 'Crustal Magma Reservoir',
            description: 'Primary basaltic melt ponds at the base of the crust or in a shallow axial magma chamber. Fractional crystallisation, magma mixing, and assimilation of wall rock modify composition. At MOR, the chamber is largely crystal mush with small melt lenses at 1–4 km depth.',
            color: BRAND.coral,
          },
          {
            id: 'eruption',
            label: 'Volcanic Eruption',
            description: 'Magma ascends through dykes and conduits to the surface. MOR: basaltic pillow lavas and sheet flows quenched by seawater at >2,500 m depth. Subduction zones: volatile-rich andesitic to dacitic magmas drive explosive plinian eruptions. Hotspots: shield-building tholeiitic basalt flows.',
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'peridotite-source',  to: 'melting-trigger',    label: 'Tectonic forcing: plate divergence, slab dehydration, or plume impingement' },
          { from: 'melting-trigger',    to: 'partial-melt-zone',  label: 'Solidus crossed — partial melting begins, F increases with continued ascent or flux addition' },
          { from: 'partial-melt-zone',  to: 'dunite-channels',    label: 'Melt segregates at F > ~2–3% and focuses into olivine-lined conduit networks' },
          { from: 'dunite-channels',    to: 'magma-chamber',      label: 'Primary olivine-saturated melt pools in crustal reservoir; crystallisation and mixing begin' },
          { from: 'magma-chamber',      to: 'eruption',           label: 'Volatile exsolution and buoyancy drive magma through dykes to the surface' },
          { from: 'partial-melt-zone',  to: 'peridotite-source',  label: 'Harzburgite / dunite residue remains as depleted lithospheric mantle' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'A geophysicist studying a fast-spreading mid-ocean ridge segment measures seismic velocities that indicate a thin, lens-shaped region of low-velocity material at ~2 km below the ridge axis. The region is interpreted as a melt-rich zone. What melting mechanism generated this melt, and why does the melt accumulate at this particular depth rather than continuing to ascend?',
          a: [
            'The melt was generated by decompression melting: as the plates diverge, asthenospheric mantle rises adiabatically, crosses the peridotite solidus at ~60–80 km depth, and produces basaltic melt; as this primary melt ascends, it ponds in an axial magma chamber at ~1–4 km depth because the surrounding oceanic crust at that level is cool enough and rigid enough to form a density trap, and because the melt has partially crystallised and lost buoyancy',
            'The melt was generated by flux melting: seawater circulating through the hot oceanic crust releases water at depth, lowering the solidus of the basaltic crust and triggering melting; the melt ponds at 2 km because the overlying crust is too cold and brittle to allow further dyke propagation until sufficient magmatic pressure builds',
            'The melt was generated by heat-transfer melting: the adjacent transform faults bring anomalously hot mantle into contact with the cooler ridge flank, and conductive heat transfer melts the lower oceanic crust; the melt ponds at 2 km because that is the depth at which crustal density equals melt density, creating neutral buoyancy',
            'The melt at 2 km depth is not newly generated magma but rather ancient mantle that was never fully solidified; fast-spreading ridges preserve pockets of primordial melt within the crust because rapid crustal accretion insulates the interior from heat loss; the seismic anomaly reflects this relict melt, not active magmatic processes',
          ],
          correct: 0,
          explain: 'Flux melting (B) is the mechanism at subduction zones, not mid-ocean ridges; seawater hydrothermal circulation does alter the oceanic crust but does not generate significant volumes of new melt. Heat-transfer melting (C) occurs where a mantle plume impinges on thick continental crust and is not the dominant mechanism at fast-spreading ridges; transform faults do not supply anomalously hot mantle that melts the crust. Relict primordial melt (D) is not consistent with the petrological and geochemical evidence from mid-ocean ridge basalts, which show fresh, recently fractionated compositions, not ancient unmodified melts. The correct answer is A: decompression melting begins at ~60–80 km below the ridge axis as the diverging plates drive passive upwelling of the asthenosphere. The rising peridotite crosses the dry solidus and begins producing basaltic melt; F increases to ~15–25% by the time the residue reaches the base of the lithosphere. The melt segregates into dunite channels and ascends rapidly. It ponds at ~1–4 km depth in an axial magma lens because at that level the surrounding gabbroic crust is cold and rigid enough to arrest further ascent until dyking events carry melt to the surface. Seismic surveys of the East Pacific Rise confirm this geometry: a bright reflector at ~1.2–2.5 km sub-axial depth marks the top of the melt lens, underlain by a broader region of crystal mush (60–90% crystals) to ~5–7 km depth. This magmatic plumbing system produces all the oceanic crust generated along the ~65,000 km global ridge network.',
        },
        {
          q: 'Geochemists analysing lavas from two different volcanic settings find that Sample A has a strong negative europium (Eu) anomaly and relatively low Ni content, while Sample B has no Eu anomaly, high Ni content (~400 ppm), and high MgO (>12 wt%). What do these geochemical signatures tell us about the magmatic history of each sample?',
          a: [
            'Sample A is a primary magma from a garnet lherzolite source — garnet preferentially incorporates Eu, producing the Eu anomaly; high Ni indicates no olivine fractionation; Sample B has experienced extensive crustal contamination which diluted the Ni and produced the Eu anomaly by assimilating plagioclase-bearing continental crust',
            'Sample A has undergone significant fractional crystallisation, including plagioclase fractionation — plagioclase preferentially incorporates Eu²⁺, removing it from the melt and creating a negative Eu anomaly; low Ni indicates olivine has also fractionated, as Ni strongly partitions into olivine; Sample B with its high Ni, high MgO, and no Eu anomaly is close to a primary mantle melt that has experienced little fractional crystallisation since leaving its source',
            'The Eu anomaly in Sample A indicates melting in the presence of garnet, which retains heavy rare-earth elements but not Eu; Sample B\'s high Ni and MgO indicate a subduction zone origin where slab-derived fluids enrich the mantle wedge in compatible elements before melting',
            'Sample A was generated at a slow-spreading mid-ocean ridge where melt spends more time in the magma chamber, causing stronger Eu anomalies through longer residence; Sample B is from a fast-spreading ridge where rapid eruption preserves primary compositions; spreading rate directly controls Eu anomaly magnitude',
          ],
          correct: 1,
          explain: 'Garnet produces a negative heavy-REE pattern but does not cause a Eu anomaly (A is incorrect on this point); Eu anomalies are a plagioclase signature, not a garnet signature. Slab-derived fluids (C) do enrich the mantle wedge, but they primarily add large-ion lithophile elements (Ba, K, Pb, Sr) not compatible transition metals like Ni in the way described; and slab fluids do not cause Eu anomalies. Spreading rate (D) does influence residence time, but Eu anomaly magnitude is controlled by the extent of plagioclase crystallisation, not spreading rate directly. The correct answer is B: europium is unusual among the rare earth elements in that it can exist as Eu²⁺ in addition to Eu³⁺ under relatively reducing conditions. Eu²⁺ has an ionic radius similar to Ca²⁺ and Sr²⁺ and is therefore strongly partitioned into plagioclase feldspar during crystallisation. When plagioclase crystallises from a melt and is removed by fractional crystallisation or cumulate settling, it carries Eu with it, depleting the residual melt in Eu relative to the adjacent REEs (Sm and Gd) — producing a negative Eu anomaly. Nickel is a highly compatible element that partitions strongly into olivine (partition coefficient D_Ni ~10–20); as olivine crystallises and settles, Ni is rapidly extracted from the melt. A sample with low Ni (well below the ~300–500 ppm expected in primary mantle-derived basalt) has therefore experienced olivine fractionation. Sample B, with ~400 ppm Ni, high MgO, and no Eu anomaly, has undergone minimal fractional crystallisation and closely resembles the composition of melt in equilibrium with mantle olivine — the hallmarks of a near-primary magma.',
        },
        {
          q: 'Why does the addition of water lower the melting temperature (solidus) of peridotite, and why is this effect central to understanding subduction zone volcanism?',
          a: [
            'Water lowers the melting temperature because it reacts with silicate minerals to form hydrated phases (amphibole, chlorite, serpentine) that have lower melting points than anhydrous olivine and pyroxene; these new minerals melt preferentially, producing the first melt fraction at lower temperatures and explaining why subduction zone magmas are generated at cooler temperatures than MOR magmas',
            'Water does not directly lower the solidus; instead, water-saturated melts are less dense than the surrounding mantle and therefore rise faster through the mantle wedge; the apparent lower melting temperature is an observational artifact caused by magmas sampling a broader depth range of the wedge when water is present, averaging to a lower apparent temperature',
            'Water lowers the melting temperature by breaking Si–O–Si bonds in the silicate melt network, reducing the polymerisation and viscosity of the melt; this makes it thermodynamically easier for atoms to enter the melt phase from the solid, shifting the solidus to lower temperatures by ~100°C per wt% H₂O; in subduction zones, slab dehydration at 80–120 km releases water into the mantle wedge (T ~1,200°C) that is below the dry solidus — water addition drops the solidus below ambient temperature, triggering flux melting',
            'Water lowers the melting temperature by increasing the thermal conductivity of the mantle wedge, allowing heat to flow more efficiently from the hot mantle toward the cool slab; this elevates the temperature of the wedge closest to the slab, pushing it above the solidus; subduction zones therefore melt because of improved heat transfer caused by water, not because water changes the solidus itself',
          ],
          correct: 2,
          explain: `Option A is partly correct in identifying hydrous minerals as important carriers of water into the subduction zone, but it misidentifies the mechanism: the direct lowering of the solidus is not because hydrous minerals have lower melting points per se, but because dissolved water in the silicate melt changes the thermodynamic activity of melt components. Option B is incorrect: the density argument describes a consequence of melting (buoyant melt rises) but not the cause; water demonstrably and measurably shifts the experimentally determined solidus curve to lower temperatures — this is a thermodynamic effect, not an observational artifact. Option D is incorrect: water does not significantly change the thermal conductivity of the mantle, and heat conduction is not the mechanism of flux melting. The correct answer is C: water dissolved in silicate melt breaks the polymerised Si–O–Si network, reducing the configurational entropy difference between the melt and the crystal phases. This thermodynamically stabilises the melt relative to the crystal aggregate, shifting the solidus to lower temperatures. Experimental petrology has quantified this as approximately –100°C per wt% H₂O added at upper mantle pressures. In subduction zones, the slab enters the mantle at temperatures 200–400°C cooler than the ambient wedge, so the wedge directly above the slab at 80–120 km depth is at ~900–1,100°C — below the dry solidus (~1,300°C). When slab dehydration releases water into this wedge, the solidus drops below the ambient temperature and melting begins — even though no heat has been added. This is the essence of flux melting, and it is the reason that subduction zones generate ~35% of Earth\'s arc magmatism despite being settings where relatively cool material is being recycled into the mantle.`,
        },
        {
          q: 'A petrology student is examining a suite of mantle xenoliths (fragments of mantle rock carried to the surface by rapidly ascending magmas) from a continental intraplate volcano. Some xenoliths are spinel lherzolites and others are garnet lherzolites. What does the coexistence of both types tell us about the lithospheric column being sampled, and what is the significance of the ~65–75 km depth boundary between these two mineral assemblages?',
          a: [
            'The coexistence of spinel and garnet lherzolites indicates that the xenoliths were derived from two completely different tectonic plates that were juxtaposed by a past subduction event; spinel lherzolites come from oceanic lithosphere and garnet lherzolites come from continental lithosphere; their presence together indicates a suture zone beneath the volcano',
            'The ~65–75 km boundary represents the base of the crust; spinel lherzolites are crustal rocks derived from the lower crust and garnet lherzolites are sub-crustal mantle rocks; the coexistence of both types indicates that the erupting magma sampled both the lower crust and the underlying mantle during its rapid ascent',
            'The difference between spinel and garnet lherzolite xenoliths is purely a product of magmatic differentiation during ascent: both started as identical garnet lherzolite but the spinel lherzolites reacted with the host magma at shallow crustal levels, converting garnet to spinel through decompression; the boundary at 65–75 km therefore records the depth at which significant magma-xenolith reaction begins',
            'The coexistence of both assemblages indicates that the xenoliths sample different depths of the lithospheric mantle column beneath the volcano: spinel lherzolite is stable at shallower depths (roughly <65–75 km) where the aluminous phase is MgAl₂O₄ spinel, while garnet lherzolite is stable at greater depths (>65–75 km) where the higher pressure stabilises pyrope-rich garnet instead; the depth of this transition is sensitive to temperature and bulk composition, and the two xenolith types together constrain the depth extent of the lithospheric keel sampled by the eruption',
          ],
          correct: 3,
          explain: 'Option A incorrectly attributes the mineralogical difference to tectonic provenance rather than pressure-temperature stability; spinel and garnet lherzolites are defined by their aluminous phase, not their tectonic setting. Option B incorrectly places the transition at the crust-mantle boundary (Moho); the Moho beneath continental crust is typically at 30–50 km depth, well above the ~65–75 km spinel-garnet transition, which is entirely within the mantle. Option C partially describes a real process (retrograde conversion of garnet to spinel during decompression can occur in slowly ascending xenoliths) but this is not the primary interpretation — the coexistence of both pristine assemblages without pervasive reaction textures indicates sampling from two different pressure regimes. The correct answer is D: the aluminium phase in peridotite changes systematically with pressure because the thermodynamic stability of the three Al-bearing phases depends on the P-T conditions. At the lowest pressures (roughly <30 km), plagioclase feldspar (CaAl₂Si₂O₈) is stable. At intermediate pressures (roughly 30–75 km), aluminium is incorporated into spinel (MgAl₂O₄), which is denser than plagioclase. At greater pressures (>65–75 km), garnet (specifically pyrope-rich garnet, Mg₃Al₂Si₃O₁₂) becomes the stable aluminous phase because its denser, more compact structure is favoured by high pressure. The exact depth of the spinel-garnet transition varies with temperature (hotter geotherms push the boundary deeper) and bulk composition. Crucially, garnet strongly retains the heavy rare-earth elements (HREE: Dy, Er, Yb) due to their ionic radius match with the garnet dodecahedral site, while spinel does not; magmas generated in the garnet stability field therefore show HREE depletion, providing a geochemical barometer for melting depth.',
        },
        {
          q: 'The global mid-ocean ridge system generates approximately 21 km³ of new basaltic crust per year, and roughly 30% of all mantle melting on Earth occurs at ridges. Given that Iceland sits at the intersection of the Mid-Atlantic Ridge and the Iceland mantle plume, it has anomalously thick oceanic crust (~30 km vs. the typical ~7 km). What does this crustal thickness anomaly tell us about the melting process beneath Iceland, and how does the concept of mantle potential temperature (Tp) explain it?',
          a: [
            'The thick crust beneath Iceland results from flux melting: the Iceland plume carries large amounts of water from the deep mantle, and this water lowers the solidus sufficiently to generate the extra melt needed for 30 km of crust; the potential temperature concept is irrelevant here because the extra melting is driven by volatiles, not heat',
            'The thick crust beneath Iceland indicates that the mantle beneath the island is anomalously hot relative to normal ridge mantle; mantle potential temperature (Tp) is the temperature a parcel of mantle would have if brought adiabatically to the surface without melting; normal MORB-source mantle has Tp ~1,280°C; the Iceland plume has estimated Tp ~1,480–1,530°C; higher Tp means the mantle crosses the solidus at greater depth and continues melting over a longer pressure interval, producing a much higher total melt fraction F and therefore thicker crust',
            'The 30 km crust beneath Iceland is not anomalous in thickness — all oceanic crust formed at slow-spreading ridges like the Mid-Atlantic Ridge is ~30 km thick because slow spreading allows more time for melt to pool and crystallise before the plates separate; fast-spreading ridges like the East Pacific Rise produce thinner crust (~7 km) because rapid divergence spreads the melt over a larger area',
            'The thick crust beneath Iceland results from the ridge acting as a conduit for plume material to spread laterally along the ridge axis; the plume does not add heat — it adds volume — and the extra material is simply intruded mechanically into the lower crust without additional melting; potential temperature is irrelevant because melting extent is controlled by spreading rate, not temperature',
          ],
          correct: 1,
          explain: 'Flux melting by plume-derived water (A) is not the mechanism; the Iceland plume is a thermal (high Tp) anomaly, not primarily a volatile-enriched one; volatile-driven (flux) melting is the mechanism in subduction zones. Slow-spreading ridge crust (C) is actually slightly thinner or comparable to fast-spreading crust, not thicker; spreading rate primarily controls the morphology of the ridge (axial valley vs. axial high) rather than crustal thickness; and the Mid-Atlantic Ridge at non-Iceland segments generates standard ~7 km crust despite being slow-spreading. Mechanical injection of plume volume without melting (D) is not consistent with the geochemical and petrological evidence; Iceland lavas show higher degrees of partial melting (higher F), not just more material. The correct answer is B: mantle potential temperature (Tp), introduced by Dan McKenzie and colleagues in the 1980s, is the key parameter linking mantle temperature to melt productivity. Tp is defined as the temperature a mantle parcel would have at the surface if brought up adiabatically along the mantle adiabat without crossing the solidus — it is essentially a normalised temperature that allows comparison of mantle parcels at different depths. Normal MORB-source mantle has Tp ~1,280°C; the associated melting column extends from the solidus intersection (~60 km) to the base of the lithosphere (~7 km), generating ~15–20% total melt fraction and ~7 km of oceanic crust. The Iceland plume, with Tp ~1,480–1,530°C, intersects the solidus at ~120–150 km depth — much deeper — and the melting column is correspondingly longer. The total integrated melt fraction is 4–5× larger, consistent with the observed ~30 km crustal thickness. This relationship between Tp, melting column length, and crustal thickness is one of the quantitative successes of simple mantle melting theory (the McKenzie-Bickle 1988 parameterisation) and explains why large igneous provinces (LIPs) — where Tp may reach ~1,600°C — generate flood basalt volumes of hundreds of thousands of cubic kilometres.',
        },
      ],
    },
  ],
}

export default partialMeltingMagmaGenesis
