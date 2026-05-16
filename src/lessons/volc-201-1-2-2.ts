import { Flame, Mountain, Activity, Radio } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const calderasSupervolcanoes: Lesson = {
  id: 'volc-201-1-2-2',
  title: 'Calderas & Supervolcanoes',
  track: 'vol',
  trackName: 'Volcanology',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: 'The most powerful eruptions on Earth — how calderas form through roof collapse, the global record of supereruptions, pyroclastic density currents, ignimbrites, and monitoring restless calderas.',
  sources: [
    { org: 'USGS',    title: 'Yellowstone Volcano Observatory — Caldera & Supereruption Research',        url: 'https://www.usgs.gov/observatories/yvo' },
    { org: 'SI-GVP',  title: 'Smithsonian GVP — Global Volcanism Program Eruption Catalog',              url: 'https://volcano.si.edu/search_eruption.cfm' },
    { org: 'INGV',    title: 'INGV — Campi Flegrei Monitoring and Bradyseism Research',                  url: 'https://www.ingv.it/en/research-and-teaching/research-departments/volcanoes' },
    { org: 'GNS',     title: 'GNS Science — Taupo Volcanic Zone & Oruanui Supereruption',                url: 'https://www.gns.cri.nz/our-science/natural-hazards/volcanic-hazards/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'When the roof falls in: calderas and supereruptions',
      body: `Most people picture a volcano as a cone — but the largest volcanic events on Earth produce exactly the opposite landform: a vast, flat-floored depression called a **caldera**, formed when a magma chamber empties so rapidly that the overlying crust collapses downward into the void. Calderas are not the product of an explosion blowing the top off a volcano; they are the scar left when the ground sinks into its own basement. The difference matters enormously for understanding the scale and style of the most powerful eruptions ever recorded.

Caldera formation begins with a **ring-fault**: as a shallow magma reservoir drains through one or more eruptive vents during a large explosive eruption, the pressure support beneath the overlying rock is removed. The roof sags, then fractures along an approximately circular ring-fault that outlines the margins of the magma body. The block between the ring-faults — the **caldera floor** — subsides, sometimes by hundreds of metres, while pyroclastic material erupts from the ring-fracture itself as well as from the original vent. This piston-like collapse can occur incrementally or catastrophically within hours of the eruption onset. The 2018 collapse of Kilauea’s Halemaʻumaʻu crater — though modest in size — provided a rare opportunity to observe ring-fault collapse in near-real-time: over three months, the crater floor dropped more than 500 m (1640 ft) as lava drained from the summit reservoir to feed the lower East Rift Zone eruption.

The **Volcanic Explosivity Index (VEI)** scale tops out at VEI 8, defined by an erupted volume exceeding 1,000 km³ (240 cu mi) of dense-rock equivalent (DRE). Eruptions at this scale are called **supereruptions**, and the volcanoes capable of producing them are popularly (if loosely) called supervolcanoes. The global record of supereruptions over the past few million years is sobering: Toba in Sumatra erupted ~2,500 km³ (600 cu mi) DRE approximately 74,000 years ago — the largest known Quaternary eruption — and produced a volcanic winter estimated to have lasted several years. The Yellowstone hotspot system has produced three supereruptions: 2.08 Ma (1,280 km³ (307 cu mi)), 1.3 Ma (280 km³ (67 cu mi), technically sub-VEI-8 by some estimates), and 0.64 Ma (1,000 km³ (240 cu mi)). The Long Valley Caldera in California formed 760,000 years ago during the Bishop Tuff eruption (~600 km³ (144 cu mi)). New Zealand’s Taupo Volcanic Zone produced the Oruanui supereruption at 26,500 years ago (~530 km³ (127 cu mi)).

The products of supereruptions are dominated by **pyroclastic density currents (PDCs)**: fast-moving, ground-hugging avalanches of hot gas, ash, pumice, and lithic fragments that pour outward from the collapsing eruption column and the ring-fault at speeds of 100–700 km/h (435 mph) and temperatures of 300–800°C (1472°F). Where PDCs come to rest and weld under their own weight, they form **ignimbrite** sheets — often tens of metres thick, sometimes hundreds — that can cover tens of thousands of square kilometres. The Bishop Tuff ignimbrite blankets much of the Basin and Range province of the western United States; the Fish Canyon Tuff of the La Garita Caldera in Colorado (~28 Ma, ~5,000 km³ (1200 cu mi) — the largest known ignimbrite on Earth) extends across much of the central Rockies.

The global atmospheric effects of supereruptions are profound. Stratospheric injection of sulfur dioxide (SO₂) produces sulfate aerosol that reflects incoming solar radiation, driving **volcanic winter**: a period of global cooling lasting months to years. The Toba eruption is estimated to have injected 6,000–10,000 Mt of SO₂ into the stratosphere — roughly 100 times more than the 1991 Pinatubo eruption, which itself cooled the planet by ~0.5°C (33°F) for two years. Some researchers have proposed that the Toba volcanic winter nearly drove humanity to extinction, reducing global human population to as few as 10,000–30,000 individuals (the **genetic bottleneck hypothesis**); this hypothesis remains debated, with some genetic and archaeological evidence supporting a severe population crash and others suggesting regional refugia allowed larger populations to survive.

Today, the most intensely monitored caldera systems include Yellowstone (USGS Yellowstone Volcano Observatory, continuous seismic, GPS, and gas monitoring), Campi Flegrei near Naples, Italy (INGV monitoring, population 500,000 within the caldera’s resurgent dome), and Taupo in New Zealand (GNS Science). Caldera **unrest** — episodes of seismicity, ground deformation, and increased gas flux — is common and does not necessarily precede eruption; distinguishing genuine eruption precursors from transient unrest driven by hydrothermal system fluctuations is one of the central challenges of modern volcanology.`,
      keyTerms: [
        {
          term: 'Caldera',
          def: 'A large, roughly circular depression formed by the collapse of a volcanic edifice into a partially drained magma reservoir along ring-faults. Distinct from a crater (formed by explosion or simple vent excavation). Diameter ranges from a few kilometres (Pinatubo, ~2.5 km (1.6 mi)) to >70 km (La Garita, Colorado). Resurgent calderas show post-collapse doming of the floor as the magma chamber re-pressurises; Yellowstone and Long Valley both display resurgent domes.',
        },
        {
          term: 'Supereruption',
          def: 'A volcanic eruption producing >1,000 km³ (240 cu mi) of magma in dense-rock equivalent (DRE), corresponding to VEI 8 on the Volcanic Explosivity Index. Supereruptions produce large calderas, continent-scale ignimbrite sheets, and stratospheric SO₂ injections sufficient to force years-long volcanic winter. Recurrence interval: roughly once per 100,000 years globally. Known examples: Toba (74 ka, ~2,500 km³ (600 cu mi)), Yellowstone (0.64 Ma, ~1,000 km³ (240 cu mi); 2.08 Ma, ~1,280 km³ (307 cu mi)), Oruanui (26.5 ka, ~530 km³ (127 cu mi)).',
        },
        {
          term: 'Pyroclastic density current (PDC)',
          def: 'A fast-moving (100–700 km/h (435 mph)), ground-hugging avalanche of hot gas, ash, pumice, and rock fragments generated by the collapse of a Plinian eruption column or by explosive disruption of a lava dome. Temperatures reach 300–800°C (1472°F). Two end-members: pyroclastic flows (dense, valley-confined, high particle concentration) and pyroclastic surges (dilute, can overtop topography). PDCs are the primary kill mechanism in large explosive eruptions and can travel >100 km (62 mi) from the vent during supereruptions.',
        },
        {
          term: 'Ignimbrite',
          def: 'The rock deposit formed by emplacement and cooling of a pyroclastic density current from a large explosive eruption. Typically dominated by pumice lapilli, ash matrix, and lithic fragments in a glassy groundmass. Welded ignimbrites form when the deposit is hot enough to fuse under its own weight, producing a dense, hard rock. Thickness can reach hundreds of metres near the vent. Ignimbrite volume is the primary basis for estimating supereruption magnitude from the geological record.',
        },
        {
          term: 'Bradyseism',
          def: 'Slow, episodic ground uplift and subsidence in a caldera system driven by fluctuations in hydrothermal fluid pressure or shallow magma intrusion. Named after the classic example at Campi Flegrei (Italy), where the Roman market of Serapeum was repeatedly submerged and re-emerged over 2,000 years. Episodes of bradyseismic uplift at Campi Flegrei — including significant unrest in 1969–72, 1982–84 (1.8 m (6 ft) uplift), and renewed rapid uplift in 2023–24 — are monitored continuously for signs of imminent eruptive activity.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Caldera systems, eruption products, and global supereruptions',
      body: `**Caldera collapse mechanics.** Caldera-forming eruptions unfold in several stages that often overlap. Initial Plinian activity excavates the vent and generates a high eruption column; as eruption rate increases and the column height exceeds the convective stability limit, the column collapses, sending PDCs radially outward from the vent. Simultaneously, the ring-fault propagates and the caldera floor begins to subside, opening new vents along the ring-fracture that produce additional PDCs (co-ignimbrite eruption). The co-ignimbrite **ash column** — a buoyant plume of fine ash that rises from the cooling ignimbrite sheet — can rise to 30–40 km (25 mi) altitude and distribute fine ash globally, contributing significantly to stratospheric aerosol loading even after the main Plinian column has collapsed. Total eruption duration for a VEI 8 event may span hours to days.

**Ignimbrites as proxy records.** Because supervolcanic systems erupt infrequently, much of what we know about them comes from reading the ignimbrite record in the geological stratigraphy. The volume, composition, and geographic extent of an ignimbrite sheet allow geologists to reconstruct eruption magnitude, column height, and flow dynamics. The **Bishop Tuff** (Long Valley, 760 ka) shows a systematic upward change from rhyolite pumice with few phenocrysts at the base (the earliest, most evolved magma) to more crystal-rich, slightly less evolved pumice at the top — recording the progressive tapping of a compositionally zoned magma chamber from roof to floor during the eruption. This zoning is diagnostic of a large, long-lived magma reservoir that had time to differentiate chemically before eruption.

**Monitoring restless calderas.** The principal observational pillars of caldera monitoring are: (1) **seismicity** — swarms of small earthquakes (M < 3) along ring-faults or beneath the caldera reflect fluid movement, fault reactivation, or magma intrusion; (2) **ground deformation** — GPS networks, InSAR satellite radar, and tiltmeters track millimetre-scale uplift or subsidence of the caldera floor; (3) **gas flux** — measurements of CO₂, SO₂, and H₂S emission rates (by DOAS spectrometers and airborne surveys) track the degassing state of the underlying magmatic system; high SO₂ is particularly diagnostic of fresh magmatic input because SO₂ is scrubbed by hydrothermal systems at low temperatures but passes through at high temperatures. The challenge is that caldera unrest — sometimes dramatic — is far more common than eruption; Campi Flegrei has experienced multiple unrest episodes in the past 50 years without erupting.`,
      cards: [
        {
          name: 'Caldera Formation',
          icon: Mountain,
          color: BRAND.coral,
          desc: 'Ring-fault collapse after magma withdrawal during large explosive eruption. Caldera floor subsides piston-like into drained reservoir. Distinct from summit collapse (e.g. Kilauea 2018, drainage-driven). Resurgent domes form as magma chamber re-pressurises. Co-ignimbrite ash columns rise from cooling PDC sheets, adding to stratospheric loading.',
          examples: 'Kilauea 2018: 500 m (1640 ft) floor drop over 3 months as lava drained to LERZ — ring-fault collapse observable in real time · Long Valley: 600 km³ (144 cu mi) Bishop Tuff 760 ka, 17 × 32 km (20 mi) caldera, resurgent dome still active · Pinatubo 1991: ~2.5 km (1.6 mi) caldera formed within hours of climactic June 15 eruption',
        },
        {
          name: 'Pyroclastic Density Currents & Ignimbrites',
          icon: Flame,
          color: BRAND.ruby,
          desc: 'PDCs: ground-hugging avalanches 100–700 km/h (435 mph), 300–800°C (1472°F); dense pyroclastic flows (valley-following) and dilute surges (topography-overriding). Ignimbrite: welded or unwelded PDC deposit, metres to hundreds of metres thick, can extend >100 km (62 mi). Co-ignimbrite plume: buoyant fine-ash column rising from cooling ignimbrite sheet, distributes distal tephra globally.',
          examples: 'Bishop Tuff (Long Valley, 760 ka): zoned ignimbrite recording compositional draw-down of magma chamber, covers >2,000 km² (772 sq mi) · Fish Canyon Tuff (La Garita, 28 Ma): ~5,000 km³ (1200 cu mi), largest known ignimbrite on Earth · Toba 74 ka: PDCs covered all of Sumatra; distal ash layer traceable to India and South China Sea',
        },
        {
          name: 'Global Supereruptions Record',
          icon: Activity,
          color: BRAND.amethyst,
          desc: 'Toba (74 ka): ~2,500 km³ (600 cu mi), Lake Toba caldera 100 × 30 km (19 mi), volcanic winter, genetic bottleneck debate. Yellowstone: three supereruptions (2.08 Ma/1,280 km³ (307 cu mi); 1.3 Ma/280 km³ (67 cu mi); 0.64 Ma/1,000 km³ (240 cu mi)). Long Valley (0.76 Ma): Bishop Tuff 600 km³ (144 cu mi). Oruanui, Taupo (26.5 ka): ~530 km³ (127 cu mi), largest eruption of the past 70 ka. VEI 8 = >1,000 km³ (240 cu mi) DRE; recurrence ~1 per 100 kyr globally.',
          examples: 'Toba: stratospheric SO₂ ~6,000–10,000 Mt, global cooling ~3–10°C (50°F) for years; genetic data suggest human bottleneck though debated · Yellowstone 0.64 Ma: Lava Creek Tuff ignimbrite extends across Wyoming, Idaho, Nebraska · Oruanui: ash dispersed across New Zealand and Pacific, lake system today occupies the caldera',
        },
        {
          name: 'Monitoring & Caldera Unrest',
          icon: Radio,
          color: BRAND.jade,
          desc: 'Four monitoring pillars: seismicity (swarms along ring-faults), ground deformation (GPS/InSAR uplift or subsidence), gas flux (SO₂ and CO₂ rates), and hydrothermal changes. Bradyseism at Campi Flegrei: up to 1.8 m (6 ft) uplift in 1982–84; renewed uplift 2023–24, ~500,000 people within caldera. Unrest far more common than eruption. SO₂ breakthrough to surface signals fresh magmatic input. Eruption probability assessment uses all four observational pillars.',
          examples: 'Yellowstone: 3,000+ earthquakes/yr, continuous GPS deformation; last eruptive activity ~70 ka (rhyolite) and 2.1 ka (hydrothermal explosions) · Campi Flegrei 2023–24: accelerating bradyseism, M4.2 earthquake December 2023, civil protection alert raised to Yellow · Taupo 2019: earthquake swarm (700+ events) and 10 cm (3.9 in) uplift, no eruption followed',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From magma reservoir to caldera: the supereruption cycle',
      body: 'Follow the sequence of processes that transform a large silicic magma system into a caldera-forming supereruption and its long-term aftermath. Each stage feeds into the next, and the cycle may repeat over hundreds of thousands of years at the same hotspot or tectonic setting.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'A six-stage cycle showing how a large silicic magma system accumulates, erupts catastrophically, and evolves into a monitored caldera that may eventually erupt again.',
        nodes: [
          {
            id: 'reservoir',
            label: 'Magma Reservoir Accumulation',
            description: 'Over tens to hundreds of thousands of years, silicic (rhyolitic) magma accumulates in a shallow crustal reservoir at 5–15 km (9.3 mi) depth. Repeated injection of hot basaltic magma from below provides heat and volatiles (H₂O, CO₂, SO₂). The reservoir differentiates: lighter, more evolved rhyolite floats to the top, forming a compositionally zoned magma body with a high-crystal mush zone at depth and a nearly crystal-free, volatile-saturated rhyolitic cap near the roof. When the reservoir exceeds a critical volume and volatile saturation threshold, overpressure builds toward the ring-fault failure pressure.',
            color: BRAND.ruby,
          },
          {
            id: 'plinian',
            label: 'Plinian Column Onset',
            description: 'Ring-fault failure or conduit opening allows volatile-rich rhyolitic magma to ascend rapidly. Decompression drives vigorous vesiculation and fragmentation, launching a towering Plinian eruption column that reaches 30–45 km (28 mi) altitude. The column injects SO₂, ash, and aerosol precursors into the stratosphere. At supereruption discharge rates (>10⁸ kg/s), the column rapidly becomes unstable and too dense to remain buoyant, setting the stage for catastrophic column collapse within minutes to hours.',
            color: BRAND.accentHot,
          },
          {
            id: 'collapse',
            label: 'Column Collapse & PDC Emplacement',
            description: 'When the eruption column exceeds its convective stability limit, it fountains back to the ground, generating pyroclastic density currents (PDCs) that radiate outward at 100–700 km/h (435 mph). Ring-fault subsidence simultaneously opens new vents around the caldera perimeter, producing additional PDC pulses. The collapsing caldera floor descends tens to hundreds of metres. PDCs travel across the landscape at lethal temperatures (300–800°C (1472°F)), ponding in topographic lows and mantling ridge crests with unwelded ash. The emplaced material is the future ignimbrite.',
            color: BRAND.gold,
          },
          {
            id: 'ignimbrite',
            label: 'Ignimbrite Deposition & Co-ignimbrite Plume',
            description: 'As the dense, hot PDC comes to rest, the deposit compacts and welds under its own weight (welded ignimbrite) or cools slowly to an unconsolidated ash-and-pumice tuff (unwelded). The cooling ignimbrite sheet elutriated fine ash into a rising co-ignimbrite plume that reaches the stratosphere, distributing tephra globally over days to weeks. The total thickness of the ignimbrite may reach hundreds of metres near the caldera and thin to centimetres or millimetres at distances of hundreds to thousands of kilometres. Ignimbrite volume is the primary proxy for eruption magnitude.',
            color: BRAND.coral,
          },
          {
            id: 'winter',
            label: 'Volcanic Winter & Global Cooling',
            description: 'Stratospheric SO₂ injected during the Plinian phase and co-ignimbrite plume oxidises to sulfate aerosol within weeks, scattering incoming solar radiation. Global mean surface temperature drops by 3–10°C (50°F) for months to years depending on SO₂ mass. Agricultural failure and ecosystem disruption cascade through food webs. The Toba eruption injected an estimated 6,000–10,000 Mt SO₂, producing a volcanic winter that may have reduced global human population drastically. The cooling signal is recorded in ice cores as a prominent sulfate spike.',
            color: BRAND.accent,
          },
          {
            id: 'unrest',
            label: 'Post-Eruption Caldera & Long-Term Unrest',
            description: 'The caldera floor, now a depression of 10–100 km (62 mi) diameter, slowly resurges as residual magma re-pressurises the chamber beneath. Hydrothermal systems develop, producing geysers, fumaroles, and hot springs. Bradyseismic uplift and subsidence cycles reflect episodic injection of magmatic fluids. Monitoring networks track seismicity, ground deformation, gas flux, and thermal output. Episodes of accelerating unrest require probabilistic assessment of eruption likelihood against the baseline of frequent non-eruptive unrest. The cycle may eventually repeat.',
            color: BRAND.jade,
          },
        ],
        edges: [
          { from: 'reservoir',  to: 'plinian',   label: 'overpressure and ring-fault failure trigger rapid magma ascent' },
          { from: 'plinian',    to: 'collapse',   label: 'discharge rate exceeds column stability threshold; fountaining begins' },
          { from: 'collapse',   to: 'ignimbrite', label: 'PDCs emplace hot pyroclastic material across landscape' },
          { from: 'ignimbrite', to: 'winter',     label: 'co-ignimbrite plume and Plinian SO₂ enter stratosphere' },
          { from: 'winter',     to: 'unrest',     label: 'eruption ends; caldera floor subsided; residual magma begins to resurge' },
          { from: 'unrest',     to: 'reservoir',  label: 'renewed basaltic injection recharges silicic reservoir over millennia' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'A caldera is most accurately described as which of the following, and what is the primary mechanism that distinguishes it from a volcanic crater formed by explosion?',
          a: [
            'A caldera is a depression formed primarily by the collapse of a volcanic edifice into a partially emptied magma reservoir along ring-faults; it is not the product of an outward explosion but of inward subsidence; the driving mechanism is the removal of pressure support as magma is rapidly evacuated through eruptive vents, causing the overlying crustal block to founder downward',
            'A caldera is a large depression formed by a powerful explosion that blows the top off a stratovolcano; it differs from a simple crater only in scale, with calderas defined as craters wider than 1 km (0.6 mi); the Krakatau 1883 eruption is the textbook example of caldera formation by summit explosion',
            'A caldera is a depression formed by the long-term erosion of a dormant stratovolcano summit by glacial or hydrothermal processes; it is genetically unrelated to magmatic activity and is simply the erosional remnant of a former cone; the distinction from a crater is that calderas are erosional features while craters are constructional features',
            'A caldera is a submarine volcanic depression formed when mid-ocean ridge segments collapse during periods of reduced mantle plume activity; they are restricted to oceanic settings and should not be confused with terrestrial volcanic craters, which are always constructional features on the summits of subaerial volcanoes',
          ],
          correct: 0,
          explain: 'The explosion hypothesis (B) is a historically discarded misconception. Krakatau 1883 is frequently cited as a caldera-forming explosion, but modern volcanological understanding is that the main mechanism was ring-fault collapse following rapid drainage of the magma chamber, not a single outward explosion. Although explosive activity accompanied the eruption, the floor subsided; an explosion disperses material outward and upward but cannot excavate a subsurface void large enough to explain calderas tens of kilometres across. The erosion hypothesis (C) is incorrect — while hydrothermal and glacial erosion do modify caldera morphology, caldera origin is fundamentally magmatic. Calderas are not restricted to oceanic settings (D) — many of the most important calderas are continental (Yellowstone, Long Valley, Campi Flegrei, Taupo). The correct answer is A: the essential physics of caldera formation is the removal of magmatic pressure support from below, causing the roof block to collapse downward along ring-faults as a piston or series of pistons. This inward collapse motion is the defining distinction from explosion-generated craters. Evidence includes the coherent down-dropped blocks preserved in the geological record, the ring-fault-controlled geometry of eruption vents during caldera-forming eruptions, and the direct observation of ring-fault collapse at Kilauea 2018.',
        },
        {
          q: 'The Toba supereruption (~74,000 years ago) has been proposed as the cause of a severe genetic bottleneck in the human population. What is the mechanism proposed, what is the key evidence for and against this hypothesis, and what is the current scientific consensus?',
          a: [
            'The genetic bottleneck hypothesis proposes that Toba’s volcanic winter (global cooling of ~3–10°C (50°F) for years driven by stratospheric sulfate aerosol) severely reduced food sources globally, causing a collapse in human population to perhaps 10,000–30,000 individuals; evidence for comes from reduced genetic diversity in human mitochondrial DNA and Y-chromosome lineages dated to ~70–80 ka, and from evidence of population disruption in South Asian archaeological sites; evidence against includes archaeological continuity at some African sites through the Toba ash layer and the finding of stone tools above and below the Toba ash in India suggesting cultural survival; current scientific debate continues, with some researchers supporting a significant bottleneck and others arguing for regional refugia with larger surviving populations',
            'The bottleneck hypothesis proposes that Toba lava flows directly killed most of the human population in Africa and Asia; evidence for the hypothesis comes from geochemical fingerprinting of Toba ash in human campsites; evidence against is that lava flows cannot travel from Sumatra to Africa; the current consensus is that the hypothesis is false',
            'The bottleneck hypothesis proposes that Toba directly produced a new volcanic island arc in the Indian Ocean that blocked migration routes between Africa and Asia, isolating human populations for 10,000 years until the island arc eroded; genetic evidence shows a marked decline in gene flow between African and Asian populations exactly 74,000 years ago; current consensus strongly supports the geographic isolation hypothesis',
            'The Toba bottleneck refers not to a reduction in human population size but to the extinction of all other Homo species (H. erectus, H. heidelbergensis) by the volcanic winter, leaving H. sapiens as the sole surviving human lineage; the bottleneck in the hypothesis is taxonomic, not demographic; current genetic evidence strongly supports this view, as all non-Sapiens Homo lineages disappear from the fossil record at approximately 74 ka',
          ],
          correct: 0,
          explain: 'Toba produced no significant lava flows beyond Sumatra (B is factually incorrect about mechanism and evidence). The isolation-by-new-island-arc hypothesis (C) is not a real scientific proposal and has no geological basis — Toba is a continental hotspot caldera in northern Sumatra, not a mid-ocean ridge, and no island arc was formed. The extinction-of-other-Homo-species interpretation (D) misidentifies the bottleneck as taxonomic rather than demographic, and the timing of other Homo extinctions does not align precisely with 74 ka in the fossil record. The correct answer is A: the Toba bottleneck hypothesis, developed primarily from genetic population genetics analyses, proposes that volcanic winter caused by Toba’s enormous stratospheric SO₂ injection (estimated 6,000–10,000 Mt) drove global cooling sufficient to collapse the food base across Africa and Asia, reducing the human population to a few tens of thousands. The hypothesis draws support from: (1) reduced genetic diversity in human mtDNA and Y-chromosome lineages, consistent with a severe population bottleneck dated to ~70–80 ka; (2) gaps in South Asian archaeological records near the Toba ash layer in some sites. Challenges to the hypothesis include: (1) stone tools found both below and above the Toba ash at Dhaba, India, suggesting cultural and presumably demographic continuity; (2) evidence that some African populations may have survived in tropical refugia buffered from the worst cooling effects; (3) difficulty separating the Toba signal from other demographic fluctuations in this period. The current scientific position is genuinely contested, with no consensus.',
        },
        {
          q: 'Campi Flegrei near Naples has experienced repeated episodes of bradyseismic uplift and subsidence over the past 2,000 years. What drives bradyseism, why does uplift at Campi Flegrei not necessarily indicate imminent eruption, and what monitoring signals would most convincingly indicate that the system is approaching eruptive conditions?',
          a: [
            'Bradyseism is driven by tidal forcing — the gravitational pull of the Moon and Sun flexes the caldera floor in 12-hour cycles that accumulate to produce measurable net uplift over years; it does not indicate volcanic unrest; the monitoring signal most indicative of impending eruption is an increase in ocean tidal amplitude in the Bay of Naples, which amplifies caldera flexure',
            'Bradyseism is caused by the slow crystallisation of magma at depth — as magma crystallises, it releases latent heat and water that expand the overlying rock upward; the deformation is irreversible and accumulates toward eruption; any measured uplift at Campi Flegrei is therefore a direct indicator of approaching eruption, and continuous uplift since 2005 makes an eruption within the next decade highly likely according to INGV',
            'Bradyseism at Campi Flegrei is driven primarily by fluctuations in hydrothermal fluid pressure in the shallow (<3 km (1.9 mi)) hydrothermal system — heated groundwater and steam pressure can lift the caldera floor by metres without any fresh magma input; this is why uplift alone is not diagnostic of magma ascent; the monitoring signals most indicative of approaching eruptive conditions would be a combination of: (1) accelerating uplift rate that cannot be modelled by hydrothermal pressure alone; (2) SO₂ breakthrough to the surface (SO₂ is scrubbed by hydrothermal water at <300°C (572°F) but passes through above that temperature, indicating magmatic temperatures); (3) seismicity migrating progressively shallower toward the surface; and (4) geochemical changes in fumarole gases (increasing CO₂/H₂O and SO₂/H₂S ratios)',
            'Bradyseism is unique to Campi Flegrei and is caused by a shallow salt diapir beneath the caldera that expands and contracts seasonally with groundwater table fluctuations; it has no volcanic significance and INGV monitoring is precautionary; the only monitoring signal with any predictive value for Campi Flegrei is the frequency of felt earthquakes (M > 2) per year',
          ],
          correct: 2,
          explain: 'Tidal forcing (A) does modulate volcanic systems at the sub-millimetre level at some volcanoes, but it is not the primary driver of the metre-scale, decadal bradyseism at Campi Flegrei — the tidal hypothesis has no support in the volcanological literature. Crystallisation-driven uplift (B) is a real process but overstates the relationship between any uplift and imminent eruption — the record at Campi Flegrei shows multiple major uplift episodes (1969–72: ~0.7 m (2 ft); 1982–84: ~1.8 m (6 ft); 2005–present: ~1 m (3 ft) and ongoing as of 2024) none of which led to eruption; INGV does not describe eruption as "highly likely" on a decade timescale from current data alone. The salt diapir hypothesis (D) is entirely fictional. The correct answer is C: bradyseism at Campi Flegrei is driven primarily by pressure changes in the shallow hydrothermal system, which can be forced by magmatic gas supply from depth without direct magma ascent. This explains why the system can show dramatic deformation (the Roman market at Serapeum rose and fell by ~12 m (39 ft) over 2,000 years) without erupting. The multi-parameter approach to eruption forecast is the standard in modern volcanology: no single signal is sufficient. SO₂ surface breakthrough is particularly diagnostic because SO₂ is highly soluble in water and is efficiently scrubbed by the hydrothermal system at temperatures below ~300°C (572°F); its appearance at the surface indicates that hydrothermal fluids have reached magmatic temperatures, implying either direct magma ascent or a greatly intensified heat flux from below. Combined with shallowing seismicity and geochemical changes, this would constitute a credible precursory sequence.',
        },
        {
          q: 'Ignimbrites are the primary deposit used to estimate the magnitude of prehistoric supereruptions. What information can geologists extract from an ignimbrite sheet, and what are the key uncertainties in converting ignimbrite volume to erupted magma volume (DRE)?',
          a: [
            'Geologists can only determine the age of the ignimbrite from radiometric dating; no information about eruption magnitude, temperature, or emplacement dynamics can be recovered from an ignimbrite because the high-temperature welding process destroys all primary textures and geochemical signals; volume estimation requires counting the number of pyroclastic layers, not measuring ignimbrite thickness',
            'Ignimbrites record only the final temperature of emplacement, from which geologists can infer the original eruption column height using thermodynamic modelling; volume is irrelevant because the VEI scale is based on eruption column height, not volume; the DRE calculation is straightforward: multiply the measured ignimbrite area by the standard global ignimbrite thickness of 50 m (164 ft)',
            'Ignimbrite volume is directly equivalent to DRE without any corrections because ignimbrites form only from dense, degassed lava; they contain no vesicles or void space; the term "dense-rock equivalent" refers to the rock type (dense ignimbrite) rather than a porosity correction; the only uncertainty in magnitude estimation is the difficulty of mapping the ignimbrite extent under younger sedimentary cover',
            'Ignimbrite sheets record eruption magnitude (from measured volume), eruption temperature (from glass composition and welding grade), emplacement velocity (from grain-size grading), magma composition and zoning (from pumice geochemistry), and approximate eruption duration (from multiple flow units); the key uncertainties in converting bulk ignimbrite volume to DRE include: (1) the compaction and welding correction — ignimbrites are ~50–70% void space when emplaced, so bulk volume must be corrected for porosity; (2) distal tephra fallout not included in mapped ignimbrite outcrops must be added; (3) co-ignimbrite ash dispersed globally is often very difficult to quantify; (4) erosion of the original deposit may have removed substantial volume; combined, these corrections can change the estimated DRE by factors of 2–5',
          ],
          correct: 3,
          explain: 'Ignimbrites preserve rich volcanological information (A is incorrect in claiming otherwise): welded zones retain glass compositions, phenocryst assemblages, pumice textures, and even paleotemperature estimates from pyroxene thermometry; unwelded ignimbrites preserve primary grain-size distributions that record flow dynamics and emplacement velocities. VEI is based primarily on erupted volume, not eruption column height alone (B is incorrect in prioritising column height, and no standard "50 m (164 ft) global thickness" exists). Ignimbrites are not void-free dense lava (C is incorrect) — they are vesicular pumice-dominated deposits with 40–65% porosity when emplaced, and welded ignimbrites have had this porosity reduced by compaction, not eliminated. The correct answer is D: ignimbrites are a remarkable archive of eruption parameters. Volume-to-DRE conversion is genuinely uncertain for several reasons: (1) bulk ignimbrite volume includes primary vesicle porosity of pumice (typically 60–75%) which must be corrected to get the volume of original melt; (2) the distal tephra fallout (the ash that fell beyond the PDC runout limit) must be mapped and added — for large eruptions this can represent 20–40% of total erupted mass; (3) co-ignimbrite ash is extremely fine-grained and dispersed globally, making quantification very difficult; (4) post-emplacement erosion over tens to hundreds of thousands of years may have removed 30–60% of the original deposit in some cases. For Toba, estimates of total erupted volume range from ~2,000 to ~2,800 km³ (672 cu mi) DRE depending on how these corrections are applied — a factor of ~1.4 uncertainty in magnitude for one of the best-studied supereruptions.',
        },
        {
          q: 'Yellowstone has produced three supereruptions in the past 2.1 million years (2.08 Ma, 1.3 Ma, and 0.64 Ma). Some media reports state that Yellowstone "erupts every 600,000 years" and is therefore "overdue." What is wrong with this reasoning, and what does the actual monitoring record show about the current state of the Yellowstone volcanic system?',
          a: [
            'The reasoning is correct — volcanic systems do erupt on highly regular schedules controlled by the rate of magma injection from the mantle plume; the 600,000-year cycle at Yellowstone is well-established and represents the time required for the magma chamber to refill after each supereruption; the USGS Yellowstone Volcano Observatory has confirmed that the chamber is currently at ~90% capacity, making a near-term supereruption a significant concern',
            'The "overdue" reasoning is flawed because: (1) three data points cannot establish a regular recurrence interval — the intervals were 780,000 and 660,000 years, which is not a fixed cycle; (2) volcanic systems do not operate on fixed timers — the timing of eruptions depends on stochastic processes including magma supply rate, tectonic stress, and the non-linear dynamics of magma chamber pressurisation; (3) Yellowstone’s current monitoring (seismic, GPS, gas) shows no signs of precursory unrest consistent with an approaching supereruption; the magma body beneath Yellowstone is estimated to be only 5–15% melt (the rest is solid crystal mush), far below the ~50% melt fraction generally required for eruptive mobilisation; and (4) the most likely future eruptive activity at Yellowstone, if any, would be a relatively modest rhyolite lava flow (as occurred ~70,000 years ago), not a supereruption',
            'The reasoning is flawed only because Yellowstone’s eruption cycle has accelerated: the intervals have decreased from 780,000 to 660,000 years, implying the next eruption is expected within 300,000–400,000 years rather than 600,000 years; the USGS has updated its hazard assessments accordingly; current monitoring shows the system is in early-stage recharge with no immediate concern but a medium-term (100,000-year) horizon for the next supereruption',
            'The reasoning is correct in its conclusion but wrong in mechanism: Yellowstone does not erupt every 600,000 years because of magma accumulation, but because the North American tectonic plate moves over the Yellowstone hotspot at a rate that positions a new area of thin crust over the plume every 600,000 years; when thin crust is over the plume, eruption is inevitable within decades; the plate is currently positioned such that the next eruption is expected within 100,000 years',
          ],
          correct: 1,
          explain: 'The claim that the magma chamber is at "90% capacity" (A) is not supported by any USGS Yellowstone Volcano Observatory publication — this is a media fabrication. The accelerating-cycle argument (C) extrapolates a trend from two intervals, which is statistically invalid, and USGS has not updated hazard assessments to predict a supereruption within 300,000–400,000 years. The plate-movement-over-hotspot mechanism (D) describes a real phenomenon (the Snake River Plain hotspot track does record the migration of the Yellowstone hotspot relative to North America) but the claim that new thin-crust positioning causes eruption "within decades" is not supported — the relationship between crustal thickness and eruption timing is far more complex. The correct answer is B: the popular "overdue" framing commits multiple logical errors. First, with only three data points (intervals of 780 ka and 660 ka), the notion of a "regular 600,000-year cycle" is statistically meaningless — these two intervals are not equal, and no statistical test can establish periodicity from two measurements. Second, and more fundamentally, volcanic systems do not operate as clocks or pressure vessels that fill on schedule — the timing of eruption depends on non-linear dynamics of magma supply, crystallisation, volatile saturation, and tectonic perturbation. The current state of the Yellowstone system, as reported by the USGS YVO, is: ~5–15% partial melt in the upper crustal magma body (far below the ~50% threshold associated with eruptable magma); seismicity consistent with hydrothermal and tectonic activity rather than magmatic unrest; GPS deformation showing episodic uplift and subsidence consistent with hydrothermal fluid dynamics. There is no current scientific evidence for approaching supereruption.',
        },
      ],
    },
  ],
}

export default calderasSupervolcanoes
