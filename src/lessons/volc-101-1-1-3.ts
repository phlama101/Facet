import { Flame, Globe, Mountain } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const intrusiveBodies: Lesson = {
  id: 'volc-101-1-1-3',
  title: 'Intrusive Igneous Bodies and Plutonism',
  track: 'vol',
  trackName: 'Volcanology',
  level: 'Beginner',
  duration: '11 min',
  xpReward: 140,
  description: "Not all magma reaches the surface. Most cools and crystallises underground, forming the coarse-grained intrusive (plutonic) igneous bodies that underlie every volcanic system and make up the bulk of the continental crust — from tiny veins to batholith complexes the size of countries.",
  sources: [
    { org: 'USGS',     title: 'Geologic Provinces — Intrusive Igneous Bodies',             url: 'https://www.usgs.gov/programs/VHP/volcano-basics' },
    { org: 'OpenStax', title: 'Physical Geology — Plutonic Rocks (CC-BY 4.0)',             url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'AGI',      title: 'Glossary of Geology — Batholiths, Sills, Dykes',           url: 'https://www.americangeosciences.org/' },
    { org: 'USGS',     title: 'National Geologic Map — Plutonic Rocks',                   url: 'https://www.usgs.gov/programs/national-cooperative-geologic-mapping-program' },
    { org: 'NASA',     title: 'Earth Observatory — Igneous Rocks',                        url: 'https://earthobservatory.nasa.gov/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The underground fire',
      body: `A volcano is the visible manifestation of magmatism at the surface — a spectacular and dangerous event. But most of Earth's magma never reaches the surface. It intrudes into the surrounding rock, slowly cools over thousands to millions of years, crystallises into coarse-grained igneous rock, and becomes part of the deep architecture of the crust. The study of these underground igneous bodies is called **plutonism** (named after Pluto, the Roman god of the underworld), and the rocks they produce are **plutonic rocks** or **intrusive igneous rocks**.

The physical difference between intrusive and extrusive (volcanic) rocks is grain size, and grain size reflects cooling rate. Magma that erupts onto the surface and cools in minutes to hours produces tiny crystals or volcanic glass — basalt, rhyolite, obsidian. Magma that cools slowly underground over thousands to millions of years allows crystals to grow centimetres across, producing coarse-grained rocks like gabbro (the intrusive equivalent of basalt) and granite (the intrusive equivalent of rhyolite). This principle — slow cooling = coarse grains, fast cooling = fine grains or glass — is one of the most powerful interpretive tools in geology, allowing geologists to reconstruct the depth and cooling history of ancient igneous rocks from their texture alone.

Plutonic rocks are not just academic curiosities — they compose the deep basement of the continental crust, including the **cratons** (the ancient, stable cores of continents) that are billions of years old. The Sierra Nevada in California, the Coast Ranges in British Columbia, the Precambrian shields of Canada and Africa — all are enormous exposures of plutonic igneous rocks (granites and related rocks) that were once the deep magmatic plumbing of ancient volcanic arcs, now exhumed by hundreds of millions of years of erosion. The granite batholith underlying the Sierras, for example, was the magmatic root of a Mesozoic arc that produced volcanoes now completely eroded away.`,
      keyTerms: [
        { term: 'Plutonic rock',         def: 'Igneous rock that formed by slow cooling of magma underground (intrusive). Characterised by coarse grain size (crystals visible to the naked eye, typically >1 mm). Examples: granite (felsic), diorite (intermediate), gabbro (mafic), peridotite (ultramafic). Grain size increases with cooling time and depth of emplacement.' },
        { term: 'Batholith',             def: 'A large body of intrusive igneous rock (>100 km² exposed at the surface) composed of multiple plutons (discrete intrusive bodies) emplaced over millions of years. Typically granitic to dioritic in composition. Examples: the Sierra Nevada Batholith (California, ~650 km long), the Coast Mountains Batholith (British Columbia/Alaska), the Patagonian Batholith (Argentina/Chile).' },
        { term: 'Dyke (dike)',           def: 'A tabular (sheet-like) intrusion that cuts across the bedding or foliation of the surrounding rock, intruded along fractures. Represents a conduit through which magma travelled. A swarm of dykes radiating from a centre (a dyke swarm) indicates a volcanic centre. Found at all scales from millimetres to hundreds of kilometres long.' },
        { term: 'Sill',                  def: 'A tabular intrusion that is emplaced parallel to the bedding or foliation of the surrounding rock. Distinguished from a dyke by its concordant (parallel to layering) nature. The Palisades Sill (diabase) exposed along the Hudson River in New Jersey is a classic example, ~300 m thick and 90 km long, intruded into Triassic sedimentary rocks.' },
        { term: 'Laccolith',             def: 'A lens-shaped intrusion with a flat base and a domed top, formed when magma intrudes between rock layers and inflates them upward. Creates a topographic dome at the surface. The Henry Mountains of Utah are classic laccoliths. Small laccoliths can form in months to years during unrest at volcanic systems and can drive significant ground deformation before any surface eruption.' },
      ],
      interaction: {
        type: 'annotated-image' as const,
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Pahoehoe_toe.jpg/1200px-Pahoehoe_toe.jpg',
        alt: 'A pāhoehoe lava toe advancing over older cooled basalt, showing ropy surface texture and incandescent interior',
        aspectRatio: '16/9',
        credit: 'USGS / Wikimedia Commons',
        annotations: [
          {
            id: 'pahoehoe-toe',
            x: 50,
            y: 60,
            label: 'Pāhoehoe toe advancing',
            description: 'A lobe of fluid basaltic lava breaking through the cooled outer crust and advancing over the surface. Individual toes typically measure 30–60 cm across; the flow advances by inflating existing lobes and budding new ones rather than flowing as a continuous sheet.',
          },
          {
            id: 'ropy-surface',
            x: 30,
            y: 45,
            label: 'Ropy surface texture',
            description: 'The characteristic wrinkled, rope-like surface of pāhoehoe forms when the partially solidified crust is dragged forward by the still-moving interior melt, creating folds and wrinkles that record the direction of flow.',
          },
          {
            id: 'cooling-crust',
            x: 70,
            y: 40,
            label: 'Cooling outer crust',
            description: 'The thin, dark, solidified shell of basalt that insulates the molten interior. This crust allows pāhoehoe flows to travel long distances — the insulating crust keeps the interior molten even kilometres from the vent.',
          },
          {
            id: 'glowing-interior',
            x: 50,
            y: 55,
            label: 'Glowing molten interior',
            description: 'The incandescent orange-red interior is still molten at 1,050–1,150°C. As volatiles escape and the lava cools during transport, pāhoehoe can transition to the rougher a\'ā texture mid-flow — the same basaltic composition behaving differently due to cooling and degassing.',
          },
          {
            id: 'flow-direction',
            x: 20,
            y: 70,
            label: 'Flow direction',
            description: 'The lava advances downslope, guided by gravity. Pāhoehoe flows are typically slow-moving (metres per hour) but can travel tens of kilometres from the vent because the insulating crust keeps the interior fluid.',
          },
        ],
      },
    },
    {
      type: 'callout' as const,
      variant: 'insight',
      headline: 'Pāhoehoe and a\'ā: the same lava, different behaviour',
      body: "Pahoehoe ('smooth' in Hawaiian) and a'ā ('rough') are two forms of the same basaltic lava — the difference is entirely due to cooling rate and viscosity. A lava flow can transition from one type to the other mid-flow as it cools and loses gases.",
    },
    {
      type: 'concept',
      title: 'Intrusive body types, crystallisation, and the magmatic plumbing system',
      body: `**The magmatic plumbing system.** Every active volcano is underlain by a magmatic plumbing system: a network of magma chambers, conduits, dykes, and sills through which magma ascends from its source region to the surface. Understanding this system is critical to volcanic hazard assessment, because the geometry and state (solid/liquid fraction) of the plumbing system controls: how quickly magma can be mobilised and erupted; how much energy is available for explosive eruptions; and how ground deformation, seismicity, and gas emissions change during volcanic unrest. Modern volcano monitoring uses seismic networks, GPS, and satellite interferometry (InSAR) to detect the movement of magma through the intrusive system even when no surface eruption occurs.

**Crystallisation and Bowen's Reaction Series.** When basaltic magma cools, minerals crystallise in a predictable sequence determined by their melting temperatures — a sequence documented by geologist N. L. Bowen in the 1920s (**Bowen's Reaction Series**). The first minerals to crystallise are calcium-rich plagioclase feldspar, pyroxene, and olivine (high melting points). As these minerals are removed from the melt, the residual melt becomes progressively enriched in silica, sodium, potassium, and aluminium. Later-crystallising minerals include more sodium-rich plagioclase, amphibole, biotite, and finally quartz, potassium feldspar, and muscovite (low melting points). This sequence explains why a basaltic parent melt can produce progressively more silicic rocks through fractional crystallisation — the mineralogical diversity of Earth's igneous rocks reflects different degrees of fractional crystallisation from common parental magmas.

**Types of intrusive bodies and their recognition.** Intrusive bodies are classified by their shape relative to the surrounding rock (host rock or country rock). **Concordant bodies** — sills, laccoliths, lopoliths (downward-bowing), and phacoliths (fold-conformant) — are emplaced parallel to existing rock structures. **Discordant bodies** — dykes and plutons — cut across the structure of the surrounding rock. **Plutons** are irregular to roughly equidimensional bodies formed by the cooling of a large magma body; they range from small stocks (< 100 km²) to vast batholiths. Batholiths are typically composed of multiple plutons of slightly different composition and age, reflecting episodic magma injection over millions of years. The Peninsular Ranges Batholith of California-Baja California, for example, was constructed over ~30 million years of arc magmatism.

**How do plutons make room for themselves?** A long-standing geological puzzle is how large volumes of viscous, dense magma force their way into solid rock to form plutons. Three main mechanisms are recognised: (1) **Stoping**: blocks of country rock break off and sink into the magma, effectively creating space above; the blocks may be assimilated into the magma or survive as **xenoliths** (fragments of country rock included in the intrusion). (2) **Ballooning**: the magma body inflates as new magma is injected, mechanically pushing aside the surrounding rock through ductile deformation; the country rock around large batholiths often shows strong foliation parallel to the pluton margin from this process. (3) **Dyking/fracture intrusion**: the magma propagates upward as dyke swarms, effectively accreting new magma incrementally rather than displacing a single large block. Most large plutons probably use all three mechanisms to varying degrees.

**The rock record of deep volcanic systems.** When ancient volcanic systems are deeply eroded, the surface lavas are removed, and what remains is the intrusive plumbing — the batholiths, stocks, and dyke swarms that represent the "fossilised" magmatic system. This is why the Colorado Rockies contain granitic cores, why the Scottish Highlands expose Caledonian plutons, and why the oldest continental rocks (Acasta Gneisses of Canada, >4 Ga) are metamorphosed granitic rocks. Each batholith is a window into the magmatic roots of a now-vanished volcanic arc or collisional orogeny. By studying the chemistry, age, and isotopic composition of batholiths, geologists reconstruct the history of ancient subduction zones, crustal growth, and tectonic events that shaped the continents.`,
      cards: [
        {
          name: 'Intrusive Body Types',
          icon: Mountain,
          color: BRAND.coral,
          desc: 'Dyke: discordant tabular intrusion; cuts across bedding; volcanic conduit; can be cm to km wide, km to hundreds km long. Sill: concordant tabular; parallel to bedding; cools into diabase (dolerite). Laccolith: concordant, lens/dome-shaped, domes overlying strata. Pluton: large discordant body, irregular shape. Stock: pluton <100 km². Batholith: >100 km², multiple plutons, commonly granodiorite-granite. Xenolith: fragment of country rock enclosed in intrusion.',
          examples: 'Palisades Sill, NJ: 300 m thick diabase, tilted river cliffs · Shiprock, NM: volcanic neck + radiating dykes exposed by erosion · Half Dome, Yosemite: exposed pluton of Sierra Nevada Batholith · Dartmoor, UK: exposed Variscan granite batholith',
        },
        {
          name: "Bowen's Reaction Series",
          icon: Flame,
          color: BRAND.ruby,
          desc: 'High-T first crystals from basaltic melt: olivine (Fo-rich), Ca-plagioclase, pyroxene. Intermediate: amphibole, Na-plagioclase, biotite. Low-T last: K-feldspar, quartz, muscovite. Continuous branch: plagioclase solid solution (Ca→Na with cooling). Discontinuous branch: olivine→pyroxene→amphibole→biotite (structural rearrangement). Residual melt after mafic mineral removal: enriched in SiO₂, K, Na → granitic composition. Explains magmatic differentiation.',
          examples: 'Granite: end-product of extreme differentiation (quartz + K-feldspar + plagioclase + biotite) · Dunite (all olivine): product of early olivine crystallisation and accumulation · Cumulate: rock formed from early-crystallised minerals settling to bottom of magma chamber',
        },
        {
          name: 'Modern Magmatic Plumbing Systems',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Not liquid magma pools: geophysics (seismics, GPS, InSAR) shows mostly crystal mush (>70% solid) with small melt pockets. Yellowstone: magmatic reservoir 40–90 km × 40 km, 5–15% melt fraction; below it, basaltic crustal magma body 4.5 km deep. Magma ascent triggers: fresh mafic injection from below heats mush, increases melt fraction; volatile exsolution; tectonic stress changes. Dyke intrusion events observable as seismic swarms + GPS extension even without eruption.',
          examples: 'Mt. St. Helens pre-1980: cryptodome (shallow intrusion) deformed north flank → collapse → eruption · Krafla, Iceland 1975–84: 9-yr rifting episode, magma injected laterally in dykes 80 km from caldera · Long Valley Caldera: active magmatic intrusion (uplift, CO₂ emissions) despite last eruption 760,000 yr ago',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "A geologist maps a sequence of rocks in the field and finds the following pattern from north to south: horizontal sedimentary layers (sandstone, shale, limestone), then a 50-metre-thick body of dark, coarse-grained igneous rock (gabbro) lying parallel to the sedimentary layers, then more sedimentary layers above. The contact between the gabbro and the overlying sedimentary rock is sharp and the overlying limestone shows signs of baking (contact metamorphism). What type of intrusive body is this, and what does the baking of the overlying limestone tell us?",
          a: [
            "The body is a dyke — a discordant intrusion cutting across the sedimentary layers; the baking proves that the gabbro is intrusive because a sedimentary rock would not produce contact metamorphism; however, dykes are by definition parallel to rock layers so this identification is consistent with the field evidence",
            "The body is a sill — a concordant tabular intrusion emplaced parallel to the sedimentary layers; the baking of the overlying limestone by contact metamorphism proves that the gabbro was intruded as hot magma into already-existing sedimentary rock (rather than being a lava flow with sediments deposited above it); if it were a lava flow, the overlying limestone could not have been baked by the contact because limestone was not yet present when the lava flowed",
            "The body is a lava flow — the gabbro's parallel orientation to the sedimentary layers is consistent with lava flowing laterally; coarse grain size in gabbro indicates that this was a very thick, slowly cooled lava flow; the baking of the overlying limestone is caused by hydrothermal fluids that circulated through the gabbro after its emplacement",
            "The body is a batholith, characterised by its large scale and concordant orientation; the gabbro represents the base of a much larger pluton whose upper portions were removed by erosion; the baking of the overlying limestone is consistent with contact metamorphism around a large magmatic body",
          ],
          correct: 1,
          explain: "A dyke (A) is by definition discordant (cuts across rock layers), not parallel to them; option A contradicts the definition it states, and the identification is therefore inconsistent with the field evidence. A lava flow (C) cannot produce contact metamorphism in the overlying rock — a lava flow cools from above when the overlying sedimentary rock is deposited on top of it after the lava has solidified; there is no mechanism for a lava flow to heat the limestone above it. The coarse grain size (gabbro) also rules out a lava flow, which would produce fine-grained basalt. A batholith (D) is a body >100 km² — a 50-metre-thick concordant body is definitively not a batholith by any geological definition; also, a batholith would be discordant (cutting across country rock structures), not concordant. The correct answer is B: the body is a sill — the canonical example of a concordant intrusion. The diagnostic field evidence is: (1) it is parallel to the surrounding sedimentary layers (concordant); (2) it is dark and coarse-grained (gabbro, the intrusive equivalent of basalt); (3) the overlying limestone shows contact metamorphism (baking). The baking is the decisive criterion distinguishing a sill from a lava flow: a sill was intruded as hot (1,100°C) magma into already-existing rock, and the heat conducted outward baked the adjacent sedimentary rock into hornfels or marble. A lava flow on top of limestone would bake the limestone below it (a lava-flow contact with underlying rock), not above it. The Palisades Sill (Hudson River, New Jersey), ~300 m thick diabase, is one of the world's most studied sills and shows exactly this field relationship.",
        },
        {
          q: "The Sierra Nevada Batholith — a ~650 km long × 100 km wide body of granite exposed at the surface in California — was the magmatic root of a subduction zone arc active from ~220 Ma to ~80 Ma. Today we see only the plutonic core, with no overlying volcanic rocks. What processes explain the absence of the original volcanic arc above the batholith, and what does this tell us about the relationship between surface volcanoes and their subsurface magmatic systems?",
          a: [
            "The volcanic rocks are absent because the Sierran arc erupted very small volumes of magma that were easily removed by erosion; the large batholith reflects a long-lived magmatic system but with a very low eruption efficiency; most of the magma stalled underground as intrusions, and the small volumes that did erupt were quickly eroded from the soft, easily weathered volcanic edifices",
            "The original volcanic arc has been removed by approximately 7–10 km of erosion since the arc became inactive ~80 Ma; the remaining batholith represents the deep magmatic plumbing (the roots) of the ancient arc; this demonstrates that every volcano is underlain by a much larger intrusive system, and the surface volcanic edifice is only a small fraction of the total magmatic volume produced — the majority cools underground as plutons",
            "The Sierra Nevada was never a volcanic arc at the surface; the batholith formed by in-situ melting of the continental crust during a collisional orogeny without surface volcanism; volcanic arcs do not develop intrusive roots, so the presence of the batholith proves that the Sierras formed by crustal collision, not subduction",
            "The volcanic rocks were subducted along with the Juan de Fuca plate; as the arc became inactive when subduction ended, the volcanic edifices slid toward the trench and were carried into the mantle; the batholith remained because it was too large to subduct, but all surface volcanic products were carried away",
          ],
          correct: 1,
          explain: "The suggestion that small eruption volumes are the reason for the absence of volcanic cover (A) is not consistent with the evidence: arc volcanoes at active subduction zones (like the modern Cascades or Andes) produce large-volume edifices; the 140 million years of Sierran arc activity would have produced enormous volcanic cover, not small easily-eroded amounts. Subduction zones always produce surface volcanic arcs — the batholith cannot have formed without accompanying surface volcanism (C); the correlation between active subduction, surface arcs, and underlying batholiths is well-established globally. Volcanic edifices cannot be subducted (D) — subduction occurs at the ocean trench, not in the continental interior above the arc; the volcanic rocks are above the arc, not at the subduction zone, and they are eroded (not subducted). The correct answer is B: the answer is erosion. The Sierra Nevada has been eroding since arc activity ended ~80 Ma. Given average erosion rates in mountain belts and the exhumation history recorded in thermochronology (using isotopic dating of minerals sensitive to different temperatures), geologists calculate that approximately 7–10 km of material has been eroded from the top of the Sierras since the arc was active. The original volcanic arc — its stratovolcanoes, calderas, ash deposits — was at the surface ~7–10 km above the current surface and has been completely removed. What remains is the magmatic plumbing system that fed the volcanoes. This is a profound illustration of the relationship between volcanism and plutonism: surface volcanoes are the visible tips of much larger underground magmatic systems; the intrusive volume typically exceeds the eruptive volume by 5–10:1 or more. Studying exposed ancient batholiths therefore reveals the hidden anatomy of volcanic arcs that cannot be directly imaged at active systems.",
        },
        {
          q: "N. L. Bowen's Reaction Series predicts the order in which minerals crystallise from a cooling basaltic melt. A geologist studying a layered mafic intrusion (a body of magma that cooled slowly in place) finds, from bottom to top: a dense layer of olivine-rich rock (dunite), then a pyroxene-rich layer (pyroxenite), then a layer of plagioclase and pyroxene (gabbro), then a thin layer of more felsic rock at the top. What process produced this vertical layering, and what does it tell us about the physical behaviour of a large, slowly cooling magma chamber?",
          a: [
            "The layers represent successive lava flows from different eruptions, each of different composition; the bottom layer (dunite) is the oldest eruption, and the top felsic layer is the youngest; the layering records sequential eruptions of progressively more silicic magma from a volcano that evolved over time",
            "The layering is produced by gravitational settling of early-crystallising dense minerals: as the basaltic magma cooled, olivine crystallised first (highest density) and settled to the chamber floor, forming the dunite layer; pyroxene crystallised next and accumulated above the olivine layer; plagioclase (lower density) crystallised later and accumulated higher in the chamber; the residual, most-evolved (felsic) melt pooled at the top; this is a **cumulate** sequence produced by crystal settling in a slowly cooling magma chamber",
            "The layers represent different magma batches injected at different times; the dunite layer was a magma batch of ultramafic composition; successive injections of progressively more silicic magma added the overlying layers; the thin felsic top represents the last injection, which was the most differentiated",
            "The vertical zonation is produced by hydrothermal alteration: hot fluids circulating through the cooled intrusion leached magnesium and iron upward, concentrating them near the top; the bottom dunite represents the original unaltered basaltic composition, and the top felsic layer represents the original magma that was stripped of its mafic components by the fluids",
          ],
          correct: 1,
          explain: "Successive lava flows (A) cannot produce a single continuous layered intrusion — each flow would be a separate cooling unit with chilled margins; there is no eruption involved in the formation of a layered intrusion, which by definition forms underground. Multiple magma batches (C) could produce distinct injections, but the continuous and systematic bottom-to-top progression from olivine → pyroxene → gabbro → felsic is consistent with a single magmatic system differentiating in place, not multiple injections; and ultramafic magma batches injecting into a chamber would produce more complex mixing patterns. Hydrothermal alteration (D) does not concentrate magnesium and iron upward; hydrothermal fluids leach metals and deposit them in veins, typically moving elements from hot to cool regions; they do not reproduce the systematic mineral zonation predicted by Bowen's sequence. The correct answer is B: the layered intrusion is a **cumulate** sequence produced by gravitational settling in a slowly cooling magma chamber. This process — called crystal settling or cumulate formation — operates as follows: as the large body of mafic magma cools slowly at depth, minerals crystallise in the sequence predicted by Bowen's Reaction Series. Olivine and high-calcium pyroxene crystallise first at the highest temperatures; they are denser than the melt (olivine density ~3,300 kg/m³ vs. basaltic melt ~2,700 kg/m³) and settle to the floor of the chamber, forming the cumulate dunite layer. Pyroxene continues to crystallise and accumulates above the olivine. As temperature drops further, plagioclase crystallises (it is less dense than the melt and may actually float or remain suspended), forming the gabbro layer. The final residual melt — enriched in SiO₂, Na, K — remains at the top and crystallises into a thin felsic (tonalitic or granophyric) layer. The Bushveld Complex of South Africa and the Skaergaard Intrusion of Greenland are world-class examples of layered mafic intrusions showing exactly this gravitational cumulate stratigraphy.",
        },
        {
          q: 'A geologist working in an ancient orogen finds a large exposure of granite with a sharp, irregular lower contact against surrounding schist. Within the granite, angular fragments of the schist are preserved — some showing evidence of partial melting around their edges. The schist immediately adjacent to the granite contact is harder and more crystalline than schist farther away. Which emplacement mechanism is primarily indicated by these field relationships, and what do the partially melted schist fragments reveal about the magma?',
          a: [
            'The sharp, irregular contact and angular schist fragments (xenoliths) showing partial melting around their edges indicate emplacement primarily by stoping: blocks of country rock fractured off the surrounding rock mass and sank into the magma; the partial melting of the xenolith margins indicates the magma was hot enough to begin assimilating the engulfed country rock; the harder contact schist (hornfels) records contact metamorphism caused by heat conducted outward from the intrusion',
            'The field evidence indicates emplacement by ballooning — the sharp contact and angular fragments record the magma pushing outward against the schist; partial melting of the schist fragments occurred because the magma was under very high pressure from inflation, and the pressure melted the surrounding rock; the hornfels at the contact is a pressure-metamorphic rock formed by the mechanical stress of ballooning',
            'The angular schist fragments and sharp contact indicate that the granite is not a true intrusion but a metasomatic replacement — fluids from the granite replaced the minerals of the schist in place; the partially melted appearance of the fragments is caused by chemical dissolution of schist minerals by granitic fluids; the hornfels is recrystallised schist that has been chemically altered but not thermally heated',
            'The angular schist fragments prove emplacement by fracture intrusion (dyking), with magma forcing open fractures and pushing fragments apart; partial melting at fragment edges never occurs at intrusive contacts because temperature contrasts between intrusion and country rock are too small to cause melting',
          ],
          correct: 0,
          explain: 'Ballooning (B) does produce sharp contacts and deforms country rock, but it does so by ductile outward flow — ballooning contacts show foliation wrapping around the pluton margin, not angular fragments preserved inside the intrusion; and pressure-induced melting at crustal depths is not a recognised contact metamorphic mechanism. Metasomatic replacement (C) — once called granitisation — has been largely rejected as a primary granite-forming mechanism; it cannot explain contact metamorphism (hornfels) that requires thermal heating of adjacent rock, and metasomatic fronts do not produce angular unassimilated fragments. Partial melting at intrusive contacts does occur (D is factually incorrect) — at temperatures of 700–900°C, a crystallising granite can partially melt adjacent schist that is near its own solidus; this is well-documented in natural exposures worldwide. The correct answer is A: the field relationships are diagnostic of stoping combined with assimilation. In stoping, the advancing magma causes overlying and surrounding country rock to fracture — thermally (differential thermal expansion), mechanically (hydraulic fracturing by magmatic overpressure), or along pre-existing joints. Angular blocks of host rock (xenoliths) detach and sink into the less dense magma. If the magma is sufficiently hot, the outer surfaces of the xenolith begin to melt — partial assimilation occurs. The partially melted xenolith margins represent incomplete assimilation: the block was engulfed but the thermal energy budget of the magma was insufficient to completely dissolve and homogenise it. The hornfels zone records heat conducted outward from the intrusion, baking the surrounding schist into a hard, fine-grained contact metamorphic rock within a thermal aureole. Together — angular xenoliths with melt rims, sharp irregular contacts, contact metamorphic aureole — these features are the classic diagnostic evidence for stoping as a pluton emplacement mechanism.',
        },
      ],
    },
  ],
}

export default intrusiveBodies
