import { Layers, Mountain, Waves } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const sedimentaryFacies: Lesson = {
  id: 'geol-201-2-2-1',
  title: 'Sedimentary Sequences and Facies',
  track: 'geo',
  trackName: 'Geology',
  level: 'Intermediate',
  duration: '22 min',
  xpReward: 250,
  description: "Every sedimentary rock layer is a frozen snapshot of an ancient environment — a river, a beach, a deep-sea floor. Sedimentary facies are the language that lets geologists read those snapshots and reconstruct the geography of Earth's past.",
  sources: [
    { org: 'USGS',     title: 'Sedimentary Rock Classification and Environments',  url: 'https://www.usgs.gov/geology-and-ecology-national-parks/sedimentary-rocks' },
    { org: 'OpenStax', title: 'Physical Geology, 2nd ed., Ch. 9 (CC-BY 4.0)',      url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'GSA',      title: 'Geologic Time Scale 2020',                          url: 'https://www.geosociety.org/GSA/Education_Careers/Geologic_Time_Scale/GSA/timescale/home.aspx' },
    { org: 'AGI',      title: 'Glossary of Geology, 5th ed.',                      url: 'https://www.americangeosciences.org/pubs/glossary' },
  ],
  sections: [
    {
      type: 'intro',
      title: "Every rock layer is a snapshot",
      body: `Pick up any piece of limestone and you are holding a frozen snapshot of a shallow tropical sea — the chemistry of the water, the organisms that lived in it, even the direction of the waves that rippled across its surface. Pick up a red mudstone and you are holding a floodplain that dried and cracked in the sun perhaps 250 million years ago. Sedimentary rocks are not just records of time; they are records of place. Stratigraphy — the study of layered rocks — is the discipline that reads those records, reconstructing the ancient geography and environments of Earth from the rocks preserved beneath our feet.

The key concept is the **sedimentary facies** — a body of rock with a distinctive set of characteristics (grain size, mineralogy, sedimentary structures, fossils) that reflects the environment in which it was deposited. The concept was introduced by the Swiss geologist Amanz Gressly in 1838: rocks of the same age deposited in different environments have different facies. A shallow-marine limestone and a river-channel sandstone might be exactly the same age, but their facies signatures are completely different.

**Walther's Law**, formulated by Johannes Walther in 1894, is the cornerstone of stratigraphic interpretation: in a conformable vertical succession, the facies stacked above and below each other were once deposited side by side in laterally adjacent environments. This law connects spatial patterns (different environments existing at the same time) to temporal patterns (those environments shifting through time), making it possible to read the history of a landscape from a vertical section through its rocks.`,
      keyTerms: [
        {
          term: 'Sedimentary facies',
          def: "A body of sedimentary rock with a distinctive combination of lithology, sedimentary structures, and fossils that reflects the conditions of a particular depositional environment. Introduced by Amanz Gressly (1838). Facies are the fundamental unit of environmental interpretation — every sedimentary rock carries a facies signature that encodes information about the energy, water depth, chemistry, and biology of the environment where it formed.",
        },
        {
          term: "Walther's Law",
          def: "The principle, formulated by Johannes Walther (1894), that in a conformable vertical succession of sedimentary rocks, the facies found above and below one another were originally deposited in laterally adjacent environments. Consequence: knowing the spatial arrangement of modern depositional environments (fluvial → coastal → shallow marine → deep marine) allows prediction of vertical facies successions in ancient rocks. The law holds only where the succession is conformable — unconformities break it.",
        },
        {
          term: 'Depositional environment',
          def: "The physical, chemical, and biological setting in which sediment accumulates — for example, a river channel, beach, tidal flat, delta, continental shelf, or deep-sea basin. Each environment produces a characteristic facies assemblage. Interpreting ancient depositional environments from their rock record is the central task of sedimentary geology and is essential for reconstructing paleogeography, understanding the fossil record, and locating economic resources.",
        },
        {
          term: 'Transgression / Regression',
          def: "A transgression occurs when sea level rises relative to the land, causing the shoreline to migrate landward and marine facies to be deposited over terrestrial or coastal facies. A regression is the reverse — sea level falls or sediment supply overwhelms accommodation space, causing the shoreline to migrate seaward and shallow/terrestrial facies to prograde over deeper-water facies. Transgressive-regressive cycles are the fundamental building blocks of the stratigraphic record.",
        },
        {
          term: 'Accommodation space',
          def: "The space available for sediment to accumulate, controlled by two main factors: subsidence (the sinking of the basin floor, driven by tectonic loading or thermal cooling) and eustasy (global sea-level change). When accommodation space increases faster than sediment can fill it (transgression), water deepens and facies step landward. When sediment supply exceeds accommodation creation (regression), the basin shallows and facies prograde basinward. Accommodation space is the master variable controlling stratigraphic architecture.",
        },
        {
          term: 'Bouma sequence',
          def: "The idealised vertical sequence of sedimentary structures produced by a single turbidity current event in deep water, described by Arnold Bouma in 1962. From base to top: (Ta) massive graded sand → (Tb) parallel-laminated sand → (Tc) ripple cross-laminated sand → (Td) parallel-laminated silt → (Te) hemipelagic mud. Complete Bouma sequences are rare; proximal deposits preserve Ta–Tc; distal deposits preserve only Td–Te. Turbidites — beds deposited by turbidity currents — are the primary mechanism for transporting sand into deep-water basins.",
        },
      ],
    },
    {
      type: 'concept',
      title: 'Depositional environments and their diagnostic signatures',
      body: `**Fluvial environments.** Rivers produce some of the most recognisable facies assemblages in the rock record. A classic fluvial sequence is **fining-upward**: a channel migrates laterally, depositing a coarse gravel or sand lag at its base (cut into the underlying floodplain by channel scour), followed by cross-bedded sand from migrating bedforms, then climbing to interbedded sand and silt from point-bar lateral accretion, and finally capped by fine overbank mud and silt deposited during floods. **Cross-bedding** is the hallmark of fluvial sands — the dip direction of cross-beds records paleoflow direction. Overbank floodplain deposits often show **red colouration** from oxidation in a well-drained terrestrial setting, with **root traces** (rhizoliths), **desiccation cracks**, and **caliche** (pedogenic carbonate) developed in ancient soils. The entire package records the repeated avulsion and migration of river channels across a floodplain.

**Deltaic environments.** Where a river meets a standing body of water, it drops its sediment load as a delta. Deltas produce **coarsening-upward** sequences — the opposite of fluvial sequences — because the delta progrades outward over deeper water: at the base, offshore mudstone grades up through prodelta silt and delta-front sand into distributary channel sands at the top. Deltas are transitional: they contain both fluvial structures (channel cross-bedding, root traces) and marine or lacustrine structures (wave ripples, marine bioturbation). Ancient deltas are among the most economically important environments in the rock record — most of the world's coal and many major petroleum reservoirs formed in deltaic and paralic (marginal marine) settings.

**Shallow marine environments.** The shallow marine realm — beach, shoreface, and shelf — produces clean, well-sorted sandstones with distinctive hydrodynamic structures. **Symmetric wave ripples** form where oscillating wave motion moves sand back and forth; they distinguish wave-dominated shallow settings from unidirectional river flow (which produces asymmetric current ripples). **Hummocky cross-stratification (HCS)** — large-scale, low-angle undulating laminae with no preferred direction — is the diagnostic product of storm waves and is restricted to the shoreface below fair-weather wave base but above storm wave base (~5–200 m depth). Marine fossils (bivalves, brachiopods, echinoids, foraminifera), abundant **bioturbation** by burrowing organisms, and the presence of **glauconite** (an authigenic green mineral that forms only in marine settings) confirm a marine origin.

**Deep marine environments.** Below storm wave base, in the deep-water slope and basin setting, suspension settling of fine clay and calcareous ooze is the background process, interrupted by episodic high-energy events. **Turbidity currents** — dense, sediment-laden flows that cascade down the continental slope — deposit **turbidites** with the graded Bouma sequence. Turbidite beds are recognisable by their sharp erosive bases, graded bedding (coarse at base to fine at top), and the succession of sedimentary structures from massive through laminated to rippled. In deep basins above the **carbonate compensation depth (CCD)** (~4–5 km), calcareous ooze accumulates as planktonic organisms rain to the seafloor; below the CCD, carbonate dissolves and only red clay accumulates. Very fine-grained, thinly laminated black shales with no bioturbation indicate anoxic bottom conditions where oxygen is insufficient for burrowing organisms.

**Carbonate environments.** In warm, clear, shallow tropical seas where siliciclastic sediment input is low, carbonate sedimentation dominates. Reefs (built by corals, stromatoporoids, rudists, or other frame-building organisms depending on geological age), **ooid shoals** (where concentrically layered carbonate grains form in agitated, supersaturated water), and **lagoonal muds** create a characteristic facies belt running from open ocean → fore-reef → reef core → back-reef lagoon → tidal flat. **Tidal flat** carbonates show mudcracks, bird's-eye fabric, and **stromatolites** — laminated structures built by microbial mats. Stromatolites are the dominant carbonate facies in Precambrian rocks, providing direct evidence of microbial life. Carbonate environments are particularly sensitive to sea-level change: even a small rise floods tidal flats; a small fall exposes and dissolves reef tops, producing **karstification**.`,
      cards: [
        {
          name: 'Reading Facies',
          icon: Layers,
          color: BRAND.gold,
          desc: "Walther's Law: vertical facies sequence = record of lateral environment migration through time. Fining-upward = fluvial channel fill (coarse lag → cross-bedded sand → overbank mud). Coarsening-upward = deltaic/shoreface progradation (offshore mud → prodelta → delta front → distributary channel). Deepening-upward = transgression (terrestrial → coastal → marine). Shallowing-upward = regression (marine → coastal → terrestrial). Sharp contacts = abrupt environmental change; gradational contacts = gradual environmental shift.",
          examples: "Point bar deposit: fining-upward gravel→sand→mud · Delta sequence: coarsening-upward offshore mud→prodelta→delta front · Transgressive lag: sharp contact with reworked gravel above fluvial sand",
        },
        {
          name: 'Depositional Environments',
          icon: Mountain,
          color: BRAND.coral,
          desc: "Fluvial: cross-bedding (paleoflow), fining-upward, red oxidised muds, root traces, caliche. Deltaic: coarsening-upward, mixed fluvial+marine, coal-bearing. Shallow marine: symmetric wave ripples, hummocky cross-stratification (storm wave base), bioturbation, glauconite, marine fossils. Deep marine: turbidites (Bouma sequence Ta–Te), graded bedding, sharp erosive bases, black anoxic shale. Carbonate: ooids, coral reefs, stromatolites, mudcracks on tidal flats, karstification on exposure.",
          examples: "HCS = storm deposits between fair-weather wave base and storm wave base (5–200 m) · Bouma sequence: Ta massive → Tb parallel laminae → Tc ripples → Td silt laminae → Te mud · Ooids = CaCO₃ grains with concentric layers, form in <2 m agitated water",
        },
        {
          name: 'Transgressions and Regressions',
          icon: Waves,
          color: BRAND.accent,
          desc: "Accommodation space = subsidence + eustatic sea-level rise. Transgression: accommodation > sediment supply → sea deepens → shoreline steps landward → marine over terrestrial facies → deepening-upward sequence. Regression: sediment supply > accommodation → shoreline progrades seaward → shallowing-upward sequence. T-R cycles repeat in response to: glacio-eustasy (10⁴–10⁵ yr), tectonic subsidence (10⁶–10⁷ yr), mantle convection/ridge volume changes (10⁷–10⁸ yr). Transgressive surface = sharp contact marking abrupt deepening; maximum flooding surface = deepest, most distal facies.",
          examples: "Cretaceous Interior Seaway transgression: shallow marine chalk over terrestrial redbeds across central N. America · Carboniferous cyclothems: repeated coal-marine shale-limestone cycles driven by Gondwana glaciations",
        },
      ],
    },
    {
      type: 'concept',
      title: 'Reading stratigraphic columns and reconstructing environmental history',
      body: `**The stratigraphic column.** A stratigraphic column is a scaled vertical diagram representing a sequence of rock layers as they appear in an outcrop, borehole, or measured section. Standard lithological symbols convey rock type at a glance: limestone is shown by brick pattern, shale by horizontal lines, sandstone by dots, conglomerate by circles. Column width often encodes grain size — wider columns represent coarser sediment. Sedimentary structures (cross-beds, ripples, HCS), fossil occurrences, colour, and interpreted environments are annotated at the appropriate horizons.

Reading a stratigraphic column from bottom to top is reading time from oldest to youngest. A succession of stacked coarsening-upward packages, each beginning with offshore mudstone and shallowing to wave-rippled sandstone, records repeated episodes of shoreface progradation (regression) — the delta or shoreline advanced into the basin multiple times, leaving behind packages that record a systematic shallowing of water. Abrupt deepening at the base of each package (a marine flooding surface) records the sea-level rise that followed each regression and reset the cycle.

**Walther's Law in practice.** Consider a vertical section showing, from base to top: (1) red mudstone with root traces and desiccation cracks; (2) cross-bedded sandstone with a scoured base; (3) fossiliferous limestone with symmetric wave ripples; (4) black shale with abundant marine microfossils. Walther's Law tells us these four facies were once laterally adjacent environments. At the time the red mudstone was forming, a river channel (now the cross-bedded sandstone) lay just seaward of the floodplain, a beach or shoreface (the fossiliferous limestone) lay beyond that, and the open shelf (the black shale) lay further offshore. The section records a **transgression**: as sea level rose, each environment migrated landward, depositing its characteristic facies on top of the one that preceded it. The same logic applies in reverse to read a regression.

**Worked example: the Cretaceous of the Western Interior Basin.** The Cretaceous Interior Seaway of North America provides a textbook example of repeated transgressive-regressive cycles. During peak transgression, chalk and dark organic-rich marine shales (the Greenhorn and Niobrara Formations) were deposited across the entire basin. As sea level fell, shorelines prograded from the west (driven by sediment from the Sevier orogenic belt), depositing the coarsening-upward Mesaverde Group: offshore shale → shoreface sandstone → beach → fluvial/coastal plain with coal seams. This progradational package is then sharply overlain by the next marine flooding surface — the transgressive lag of the next T-R cycle. The repeated stacking of these packages, each driven by glacio-eustatic and tectonic processes, built up thousands of metres of stratigraphy that now form the coal and gas reservoirs of the Rocky Mountain region.

**What controls the cycle?** Transgressive-regressive cycles operate at multiple timescales. **Short-period cycles** (~20–400 kyr) are driven by orbital forcing of ice volume (Milankovitch cycles), which controls the volume of water stored in ice sheets and hence global sea level. These cycles are recognisable in the rock record as repeated metre-scale alternations, particularly in the Carboniferous (cyclothems) and Cretaceous. **Longer-period cycles** (~1–10 Myr) reflect tectonic controls: the rate of ocean-floor spreading changes the volume of mid-ocean ridges, displacing seawater and changing global sea level by tens to hundreds of metres. Even longer cycles (~10–100 Myr) reflect the large-scale flooding and draining of continental interiors driven by the long-term movement of plates and changes in mantle dynamics.`,
      cards: [
        {
          name: 'Stratigraphic Column Toolkit',
          icon: Layers,
          color: BRAND.jade,
          desc: "Standard symbols: dots = sandstone · horizontal lines = shale/mudstone · brick pattern = limestone · circles = conglomerate · coal = black band. Reading rules: bottom = oldest, top = youngest; column width ∝ grain size; annotate structures and fossils at horizon. Coarsening-upward = regression/progradation. Fining-upward = transgression or fluvial channel fill. Sharp basal contact = flooding surface or channel scour. Gradational contact = gradual environmental shift. Repeated packages = cyclic sea-level or climate forcing.",
          examples: "Mesaverde Group (Cretaceous, Rocky Mountains): offshore shale → shoreface sand → beach → coastal plain coal; repeated 3× = 3 T-R cycles · Carboniferous cyclothems: coal → marine shale → limestone → coal; repeated dozens of times driven by Gondwana glaciation",
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "What is a sedimentary facies, and what information does it encode about the rock?",
          a: [
            "A sedimentary facies is the age of a rock unit determined by its fossil content; it tells you when the rock was deposited but not where",
            "A sedimentary facies is a body of rock with a distinctive combination of grain size, sedimentary structures, mineralogy, and fossils that reflects the conditions of a specific depositional environment; it encodes information about the energy level, water depth, water chemistry, and biological community present when the sediment was deposited",
            "A sedimentary facies is the colour of a rock unit; red facies are oxidised terrestrial deposits and grey facies are marine; colour is the primary diagnostic tool",
            "A sedimentary facies is a formal stratigraphic unit equivalent to a formation; it is defined by its thickness and lateral extent rather than its environmental characteristics",
          ],
          correct: 1,
          explain: "A sedimentary facies (from the Latin for 'face' or 'aspect') is defined by the totality of its physical and biological characteristics: grain size and sorting, sedimentary structures (ripples, cross-beds, bioturbation), mineralogy, colour, and fossils. Together these characteristics encode the environment of deposition — a beach facies records high energy, oscillating wave motion, and a shoreline position; a deep-water mudstone facies records quiet, low-energy, oxygen-depleted conditions far from shore. The concept was introduced by Amanz Gressly in 1838 specifically to describe how rocks of the same age look completely different when deposited in different environments. Option A confuses facies with biostratigraphy — biostratigraphy uses fossils for age, while facies analysis uses them for environment. Option C is partially true (colour is one indicator) but vastly oversimplified; many carbonate and marine rocks are also red or pale, and colour alone is insufficient for facies interpretation. Option D confuses facies with lithostratigraphic formations, which are formal named units defined by mappable rock characteristics, not environmental interpretation.",
        },
        {
          q: "A vertical section shows the following sequence from bottom to top: marine black shale with abundant microfossils → fossiliferous limestone with symmetric wave ripples → cross-bedded sandstone with a scoured base → red mudstone with root traces and desiccation cracks. Applying Walther's Law, what does this sequence record?",
          a: [
            "A transgression — sea level rose, causing the shoreline to migrate landward and marine facies to be deposited over terrestrial facies",
            "A regression — sea level fell or sediment prograded seaward, causing terrestrial and shallow facies to be deposited over deeper-water marine facies",
            "A period of tectonic uplift that raised the seafloor above sea level, converting a marine basin into a fluvial system without any change in sea level",
            "Random facies mixing caused by a major storm event that reworked all environments simultaneously and deposited the sediments out of their normal sequence",
          ],
          correct: 1,
          explain: "Walther's Law states that in a conformable succession, facies found above and below each other were deposited in laterally adjacent environments. Reading the section from bottom to top: open marine shelf (black shale) → shallow wave-dominated marine (fossiliferous limestone with wave ripples) → river or tidal channel (cross-bedded sandstone) → floodplain or tidal flat (red mudstone with roots and desiccation cracks). Each successive facies represents a more landward environment. For a landward environment to be deposited on top of a seaward environment, the entire system must have migrated in the direction of decreasing water depth — this is a regression. The shoreline prograded seaward (or sea level fell), stacking progressively shallower and eventually terrestrial facies on top of the deeper marine ones. This is the opposite of a transgression, which would produce deepening-upward (marine on top of terrestrial). Option A describes a transgression, which would produce the reverse stack. Option C (tectonic uplift) is possible in principle but Walther's Law specifically invokes lateral facies migration, not tectonic forcing; and the gradual facies transition argues against a single tectonic event. Option D is incorrect — a storm event would produce a single reworked bed, not a conformable systematic facies progression.",
        },
        {
          q: "A geologist describes a sandstone with the following features: symmetric ripple marks, hummocky cross-stratification, abundant trace fossils (burrows), and occasional shell fragments of marine invertebrates. What depositional environment does this indicate, and what is the significance of the hummocky cross-stratification?",
          a: [
            "A fluvial (river) environment; hummocky cross-stratification is produced by migrating river dunes during high-discharge flood events",
            "A shallow marine shoreface environment, specifically between fair-weather wave base and storm wave base; hummocky cross-stratification (HCS) is the diagnostic product of oscillatory storm-wave motion and is restricted to this depth zone (~5–200 m), making it one of the most useful bathymetric indicators in the rock record",
            "A deep marine turbidite environment; hummocky cross-stratification is the uppermost division of the Bouma sequence (division Tc) produced by waning turbidity current flow",
            "A tidal flat environment; symmetric ripples are formed by tidal reversals, and hummocky cross-stratification forms when tidal currents are deflected by coastal topography",
          ],
          correct: 1,
          explain: "Hummocky cross-stratification (HCS) is one of the most useful depth indicators in shallow marine stratigraphy. It forms exclusively under oscillatory storm-wave motion — not river currents, not tidal currents, and not turbidity currents. The depth zone for HCS is specifically between fair-weather wave base (the maximum depth disturbed by normal wave action, typically ~5–20 m) and storm wave base (the maximum depth disturbed by storm waves, typically ~50–200 m depending on storm intensity and shelf width). Below storm wave base, waves cannot stir the sediment; above fair-weather wave base, normal wave action reworks HCS into ordinary ripples. The combination of symmetric ripples (wave oscillation), HCS (storm waves), marine bioturbation (oxygenated marine water with burrowing organisms), and shell fragments confirms a shallow marine shoreface to inner-shelf setting. Option A is wrong — fluvial dunes produce planar or trough cross-bedding, not HCS; fluvial settings are also inconsistent with marine fossils and bioturbation. Option C is wrong — HCS is not part of the Bouma sequence; the Tc division is current ripple cross-lamination, not HCS. Option D is wrong — tidal flats produce current ripples and mudcracks, not HCS.",
        },
        {
          q: "What is accommodation space, and how does it change during a marine transgression?",
          a: [
            "Accommodation space is the volume of sediment available to fill a basin; during a transgression, sediment supply increases, filling more of the basin and causing the water to shallow",
            "Accommodation space is the space available for sediment to accumulate, controlled by subsidence and eustatic sea-level change; during a transgression, sea level rises faster than sediment can fill the space, so accommodation space increases, water deepens, and the shoreline migrates landward — facies step in a landward direction (retrogradation)",
            "Accommodation space is a fixed property of a sedimentary basin determined by its tectonic origin; it does not change during transgressions or regressions",
            "Accommodation space is the depth of water in a marine basin; during a transgression it decreases as sediment fills the basin from the margins inward",
          ],
          correct: 1,
          explain: "Accommodation space is the master variable of stratigraphic architecture. It represents the space between the sediment surface (or water surface in subaqueous settings) and the base level above which sediment cannot be permanently stored. The two main controls are: (1) subsidence — as the basin floor sinks (by tectonic loading, thermal cooling, or sediment compaction), new space is created below sea level; (2) eustasy — a rise in global sea level directly increases accommodation. During a transgression, the rate of accommodation creation (subsidence + sea-level rise) exceeds the rate of sediment supply. The result is that water deepens over time — the sediment surface falls further below sea level — and the zone where each environment can exist migrates landward. On a stratigraphic column, transgression appears as a deepening-upward sequence: each successive facies represents a deeper or more distal environment. The shoreline steps landward in what is called retrogradation. When sea level falls or sediment supply exceeds accommodation (regression), the reverse occurs: progradation, shallowing-upward sequences. Option A confuses accommodation with sediment supply — they are independent variables. Option C is wrong — accommodation changes continuously in response to tectonics and sea level. Option D has the direction of change backwards.",
        },
        {
          q: "A vertical succession shows three identical packages, each consisting of (from base to top): black organic-rich shale → silty mudstone → hummocky cross-stratified sandstone → wave-rippled sandstone. What process most likely produced this repeated pattern?",
          a: [
            "Three separate turbidity current events deposited each package; the repetition reflects the frequency of submarine landslides on the continental slope",
            "Three repeated transgressive-regressive cycles caused by cyclic sea-level change; each package records a shallowing-upward regression (deepening offshore shale → storm-wave zone → shallow wave ripples) followed by an abrupt flooding surface at the base of the next black shale, representing the sea-level rise that began the next cycle",
            "Three episodes of tectonic uplift progressively raised the seafloor, converting an initially deep basin into a shallow wave-dominated environment three times in succession",
            "The repetition is diagenetic — the original single package was fractured and repeated by thrust faulting during later mountain building",
          ],
          correct: 1,
          explain: "The stacking pattern described is a classic shallowing-upward coarsening-upward sequence: black anoxic shale (deepest, most distal, oxygen-poor) → silty mudstone (slightly shallower, more oxygenated) → hummocky cross-stratified sandstone (storm wave base, ~50–100 m) → wave-rippled sandstone (fairweather wave zone, <20 m). This is a regression — the depositional environment became progressively shallower as sediment prograded into the basin. The abrupt return to black shale at the base of each successive package is a marine flooding surface — sea level rose, drowning the shallow environment and resetting to deep-water conditions. Three repetitions = three T-R cycles, each driven by some cyclic forcing. The most common cause for packages of this thickness (typically metres to tens of metres) is orbital forcing (Milankovitch cycles at ~20–400 kyr periods), which drove repeated cycles of glaciation and sea-level fall (regression) followed by deglaciation and sea-level rise (transgression). Option A is wrong — turbidites produce Bouma sequences in deep water, not the shallowing-upward shallow-marine sequence described. Option C is possible in principle but three identical tectonic events with identical magnitudes would be a remarkable coincidence; cyclic orbital forcing is by far the more parsimonious explanation. Option D (thrust repetition) would produce identical rock compositions, not the systematic facies changes described.",
        },
      ],
    },
  ],
}

export default sedimentaryFacies
