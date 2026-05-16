import { Waves, Globe, Mountain } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const oceanTrenches: Lesson = {
  id: 'ocea-101-1-1-3',
  title: 'Trenches and the Deep Ocean',
  track: 'oce',
  trackName: 'Oceanography',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 145,
  description: "The deep ocean trench — where one tectonic plate slides beneath another — is Earth's most extreme environment. Cold, dark, and under pressures that collapse unprepared vessels, it is still teeming with life.",
  sources: [
    { org: 'NOAA',     title: 'Ocean Trenches',                                          url: 'https://oceanservice.noaa.gov/facts/oceantrenches.html' },
    { org: 'NOAA',     title: 'Hadal Zone — Deep-Ocean Exploration',                    url: 'https://oceanexplorer.noaa.gov' },
    { org: 'USGS',     title: 'Subduction and Convergent Margins',                      url: 'https://www.usgs.gov/educational-resources' },
    { org: 'OpenStax', title: 'Introduction to Oceanography, Ch. 4 (CC-BY 4.0)',         url: 'https://openstax.org/books/introduction-oceanography' },
    { org: 'Schmidt Ocean Institute', title: 'Hadal Trench Expeditions',               url: 'https://schmidtocean.org/cruise/beyond-the-hadal-zone/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Where plates descend',
      body: `At the bottom of the Mariana Trench, pressure exceeds 1,100 atmospheres — equivalent to the weight of 50 jumbo jets stacked on a single square metre. Yet even here, life persists. The deep ocean trenches, where one tectonic plate dives beneath another, are not just the deepest places on Earth — they are the source of its most destructive earthquakes and tsunamis.

On 23 January 1960, Swiss oceanographer Jacques Piccard and US Navy Lieutenant Don Walsh climbed into the bathyscaphe *Trieste* and descended into the Challenger Deep — the deepest known point in the Mariana Trench, in the western Pacific Ocean. Five hours of descent. At 10,916 metres (later surveys have measured slightly varying depths, with recent estimates converging around 10,935 m (35,878 ft)), they touched the seafloor and reported the most astonishing thing: a flatfish — a sole, they thought — resting on the sediment. Life at the extreme bottom of the ocean. The observation, later disputed by scientists who suggested the animal might have been a sea cucumber, nonetheless established that even the deepest ocean is inhabited.

The Mariana Trench represents one end of a geological process that also produces the most destructive earthquakes and tsunamis on Earth: **subduction**. Where two tectonic plates converge and one descends into the mantle, the collision creates an asymmetric topography — a deep ocean trench on the ocean side and a volcanic arc on the overriding plate. The trench and its associated subduction zone are not passive scars in the seafloor; they are active machinery. The descending slab carries oceanic sediment and water into the hot mantle, which returns to the surface as arc volcanism. Great megathrust earthquakes occur when the two plates lock and then suddenly release — the 2004 Indian Ocean earthquake (magnitude 9.1), the 2011 Tōhoku earthquake in Japan (magnitude 9.0), and the 1960 Valdivia earthquake in Chile (magnitude 9.5, the largest ever recorded) all occurred on subduction zone faults adjacent to ocean trenches.

The deepest ocean — conventionally defined as water below 6,000 metres (19,686 ft), called the **hadal zone** — represents only about 0.15% of the total ocean area, yet it has emerged as a scientifically fascinating environment with distinct biology, chemistry, and geophysics. The trenches and the hadal zone are among the least explored places on Earth.`,
      keyTerms: [
        {
          term: 'Subduction zone',
          def: `The region where one tectonic plate descends beneath another into the mantle. Subduction zones are the sites of ocean trenches, volcanic arcs, and the world\'s largest earthquakes (megathrust earthquakes). Oceanic plates subduct preferentially because their mafic rock (density ~3.0 g/cm³) is denser than the felsic continental crust (~2.7 g/cm³) they encounter.`,
        },
        {
          term: 'Megathrust earthquake',
          def: 'The largest type of earthquake, occurring on the thrust fault interface between a subducting plate and the overriding plate. The two plates lock together due to friction; strain accumulates over decades to centuries; when the lock breaks, the sudden elastic rebound generates seismic waves and, often, tsunamis. Megathrust earthquakes can reach magnitude 9.0–9.5.',
        },
        {
          term: 'Hadal zone',
          def: 'Ocean depth below 6,000 m (19,686 ft), corresponding to the deepest ocean trenches. Named after Hades (the underworld). Characterised by extreme hydrostatic pressure (the weight of the overlying water column, 600–1,100 atm), near-freezing temperatures (1–4°C (34–39°F)), complete darkness, and low but not zero food availability. About 0.15% of total ocean area.',
        },
        {
          term: 'Accretionary prism',
          def: 'A wedge of sediment and crustal rock scraped off the top of the subducting plate and accreted to the leading edge of the overriding plate. Grows over millions of years as subduction continues. Can build up significant topographic features on the landward wall of ocean trenches.',
        },
        {
          term: 'Volcanic arc',
          def: 'A chain of volcanoes formed on the overriding plate above a subduction zone, roughly parallel to the trench. Oceanic arcs form where oceanic crust overrides oceanic crust (e.g. the Aleutian Islands, the Mariana Islands). Continental arcs form where oceanic crust subducts beneath a continent (e.g. the Andes, the Cascades of the US Pacific Northwest).',
        },
      ],
    },
    {
      type: 'callout' as const,
      variant: 'insight',
      headline: "Earth's slowest conveyor belt",
      body: "The thermohaline circulation — Earth's 'global ocean conveyor belt' — moves a volume of water equivalent to 100 Amazon Rivers and takes roughly 1,000 years to complete one full circuit of the planet.",
    },
    {
      type: 'concept',
      title: 'Trench structure, subduction dynamics, and hadal life',
      body: `**Anatomy of an ocean trench.** An ocean trench is a long, narrow, V-shaped depression formed at a convergent plate boundary. A helpful analogy: think of the oceanic plate as a cold, stiff slab sliding off a table at the subduction zone — as it peels downward and descends, it drags the edge of the table (the seafloor) down with it, creating the trench; the table on the other side (the overriding plate) bears the weight and bulges upward into a volcanic arc. The trench itself is the surface expression of the line along which one plate bends and descends into the mantle. It is typically 2,000–4,000 km (1,243–2,486 mi) long, 50–100 km (31–62 mi) wide, and 2,000–4,000 m (6,562–13,124 ft) deeper than the surrounding abyssal plain — which is itself already 3,000–5,000 m (9,843–16,405 ft) below sea level, making total trench depths of 8,000–11,000 m (26,248–36,091 ft) at the deepest points. The trench floor is covered by a thin layer of fine-grained sediment — turbidites and fine pelagic particles that settle from the water above and drain off the adjacent slopes.

The trench is asymmetric: the **oceanic side** (where the subducting plate bends down) has a gently sloping outer wall, while the **arc side** (the overriding plate) has a steeper inner wall that may feature an **accretionary prism** — a wedge of sediment scraped off the subducting plate and piled up against the overriding plate like material pushed by a bulldozer blade. The inner wall may be hundreds of kilometres wide and rise several kilometres above the trench floor.

**The subduction process.** As oceanic lithosphere moves away from the mid-ocean ridge where it was created, it cools, thickens, and becomes denser. After roughly 100–200 million years, it may be dense enough to sink into the mantle when it encounters a convergent boundary. The plate bends downward at the trench and descends at angles of 25–70° into the mantle. As it descends, the increasing pressure forces water out of the hydrated minerals in the subducting slab — serpentinite, amphibolite, and sediments all release water as they are heated and compressed. This water lowers the melting point of the mantle rock above the descending slab (a process called **flux melting**), generating magma that rises through the overriding plate and erupts at the surface as volcanoes.

**Megathrust earthquakes and tsunamis.** The interface between the subducting plate and the overriding plate is called the **subduction thrust** (or megathrust). In its shallower portions (roughly 10–50 km (6.2–31 mi) depth), this interface is locked by friction as the plates attempt to move past each other. Strain accumulates over decades to centuries.

When the lock suddenly fails, the overriding plate springs back upward and seaward in what is called **elastic rebound**. If the fault ruptures over a large area — the 2011 Tōhoku earthquake ruptured a patch roughly 500 km (311 mi) long and 200 km (124 mi) wide — the energy release can equal the combined energy of thousands of nuclear weapons, generating both seismic waves and, if the fault extends to shallow water, a **tsunami**: a series of waves generated by the sudden vertical displacement of the ocean floor.

The 2004 Indian Ocean tsunami, generated by a magnitude 9.1 megathrust earthquake off northern Sumatra, reached wave heights of 30 m (98 ft) onshore and killed approximately 230,000 people.

Beyond the catastrophic earthquakes and tsunamis, the extreme physical environment of trenches presents its own distinct challenges.

**Pressure in the deep ocean.** Hydrostatic pressure in the ocean increases by approximately 1 atmosphere (atm) for every 10 metres (33 ft) of depth. At the deepest point of the Mariana Trench (approximately 11,000 m (36,091 ft)), pressure is about 1,100 atm — more than 1,100 times atmospheric pressure at sea level. This has profound effects on any object or organism not adapted to it: a Styrofoam cup sent down on a research submersible emerges the size of a thimble, its air cells crushed to nothing by the pressure. For biology, however, high pressure is not inherently lethal if an organism evolved within it. Deep-sea organisms are **piezophiles** (pressure-lovers) — their cellular membranes, proteins, and metabolic enzymes are adapted to function at high pressure and would actually malfunction at surface pressure.

**Hadal biology.** The hadal zone — water depths greater than 6,000 m (19,686 ft) — exists almost exclusively within ocean trenches. Despite the extreme conditions (cold, dark, high pressure, low food supply), trenches are not barren. Food arrives in the form of **marine snow** — a continuous shower of organic particles sinking from surface waters above: dead phytoplankton, faecal pellets, dead organisms. In trenches, topographic funnelling concentrates this material: particles that settle on the trench walls and flanks roll or slump down to the trench floor, making the deepest point of a trench more food-rich than surrounding abyssal plain. Hadal organisms exploit this concentrated food supply. **Amphipods** (small crustaceans resembling shrimp) are the dominant animal in most trenches, reaching densities of thousands per square metre; they are so numerous and active that researchers have described amphipod swarms engulfing baited landers within minutes of deployment. Holothurians (sea cucumbers), polychaete worms, foraminifera (single-celled amoebae with shells), and various fish species also occupy the hadal zone.

**Trench geography.** All of Earth's ocean trenches except one are in the Pacific Ocean or its marginal seas — a reflection of the fact that the Pacific basin is almost entirely bordered by subduction zones (the Ring of Fire). The major Pacific trenches include the Mariana (11,034 m (36,203 ft)), Tonga (10,882 m (35,704 ft)), Philippine (10,540 m (34,582 ft)), Kuril-Kamchatka (10,542 m (34,588 ft)), Kermadec (10,047 m (32,964 ft)), and Japan (9,000 m (29,529 ft)). In the Atlantic, the Puerto Rico Trench reaches 8,376 m (27,482 ft). The only significant Indian Ocean trench is the Sunda (Java) Trench at 7,290 m (23,918 ft), which was the source of the 2004 megathrust earthquake.`,
      cards: [
        {
          name: 'Subduction Zone Anatomy',
          icon: Mountain,
          color: BRAND.coral,
          desc: 'Trench (ocean floor depressed 2,000–4,000 m (6,562–13,124 ft) below abyssal plain) → accretionary prism (scraped sediment wedge on inner wall) → forearc basin (sediment-filled trough landward of the prism) → volcanic arc (magma generated by flux melting, 100–200 km (62–124 mi) landward of trench) → backarc basin (extensional basin behind the arc). The descending slab releases water that triggers melting in the mantle wedge above it.',
          examples: 'Mariana Trench: 11,034 m (36,203 ft) at Challenger Deep, named for HMS Challenger (1875 sounding) · Cascadia Subduction Zone: Juan de Fuca Plate beneath North America, M9+ earthquake risk for Pacific Northwest · Tonga Trench: fastest subduction rate (~24 cm/yr), 10,882 m (35,704 ft) deep',
        },
        {
          name: 'Mega­thrust Earthquakes',
          icon: Globe,
          color: BRAND.gold,
          desc: 'Largest earthquakes on Earth (M 9.0–9.5). The subduction thrust locks for decades to centuries, accumulating elastic strain. Sudden rupture over hundreds of km causes elastic rebound: overriding plate springs upward metres, displacing water and generating tsunamis. Recurrence intervals: 200–1,000 years for M9 events, depending on subduction rate.',
          examples: '1960 Valdivia, Chile: M9.5 — largest ever recorded · 2004 Indian Ocean: M9.1, ~230,000 deaths · 2011 Tōhoku, Japan: M9.0, 15,000 deaths, Fukushima nuclear accident',
        },
        {
          name: 'Hadal Life',
          icon: Waves,
          color: BRAND.accent,
          desc: 'Hadal zone (>6,000 m (19,686 ft)): 0.15% of ocean area, exists entirely within trenches. Pressure 600–1,100 atm. Food arrives as marine snow, funnelled to trench floor. Key fauna: amphipods (dominant, up to thousands/m²), holothurians, polychaetes, foraminifera. No photosynthesis — all energy from sinking organic matter. Organisms are piezophilic: adapted to high pressure, malfunction at surface.',
          examples: 'Hirondellea gigas: amphipod found at >10,000 m (32,810 ft), deepest-living crustacean · Pseudoliparis belyaevi (hadal snailfish): deepest fish recorded, found at 8,336 m (27,350 ft) in the Mariana · Giant xenophyophores: single-celled organisms reaching 20 cm (7.9 in) wide, abundant in hadal sediments',
        },
      ],
      interaction: {
        type: 'annotated-image' as const,
        src: '/visuals/oce.svg',
        alt: 'Cross-section of the ocean floor showing the continental shelf, continental slope, abyssal plain, mid-ocean ridge, deep-sea trench, and seamount with depth scale',
        aspectRatio: '16/9',
        credit: 'Facet Earth Sciences',
        annotations: [
          {
            id: 'continental-shelf',
            x: 8,
            y: 48,
            label: 'Continental Shelf',
            description: 'The gently sloping underwater extension of the continent, reaching depths of 0–200 m (0–656 ft) over widths of 50–350 km (31–217 mi). Continental shelves are geologically part of the continent (continental crust), biologically rich due to sunlight penetration and nutrient upwelling, and economically critical for fisheries and offshore hydrocarbon resources. They end abruptly at the shelf break, where the slope steepens dramatically.',
          },
          {
            id: 'abyssal-plain',
            x: 35,
            y: 63,
            label: 'Abyssal Plain',
            description: 'The vast, remarkably flat deep-ocean floor at 3,000–6,000 m (9,843–19,686 ft) depth, blanketed by slow-settling sediment — clay particles, siliceous ooze from diatom shells, and calcareous ooze from foraminifera — that smooths all topographic features. Abyssal plains cover ~50% of Earth\'s surface, making them the largest geographic feature on the planet, yet they were essentially unknown until sonar mapping in the 20th century.',
          },
          {
            id: 'mid-ocean-ridge',
            x: 64,
            y: 37,
            label: 'Mid-Ocean Ridge',
            description: 'A continuous underwater mountain range where new oceanic crust is created by seafloor spreading — molten rock wells up between separating plates and solidifies. The global mid-ocean ridge system is 65,000 km (40,391 mi) long, the longest mountain range on Earth. Hydrothermal vents along the ridge support unique ecosystems powered by chemosynthesis rather than photosynthesis, independent of sunlight.',
          },
          {
            id: 'trench',
            x: 82,
            y: 84,
            label: 'Ocean Trench',
            description: 'The deepest ocean features, formed where dense oceanic crust subducts beneath another plate. Trenches reach depths exceeding 10,000 m (32,810 ft) (the Mariana Trench is 11,034 m (36,203 ft)). They are geologically active zones of frequent large earthquakes, including megathrust events (M9+). Despite crushing pressures and total darkness, hadal zones (>6,000 m (19,686 ft)) host specially adapted organisms including amphipods and snailfish.',
          },
          {
            id: 'seamount',
            x: 91,
            y: 57,
            label: 'Seamount',
            description: 'An underwater volcano rising more than 1,000 m (3,281 ft) from the seafloor but not reaching the ocean surface. Seamounts are typically extinct hot-spot volcanoes carried away from their magma source by plate movement. They serve as biodiversity hotspots, concentrating marine life that feeds on currents deflected upward by the seamount\'s flanks. There are estimated to be over 100,000 seamounts worldwide.',
          },
        ],
      },
    },
    {
      type: 'concept',
      title: 'The global ocean conveyor belt',
      body: 'The thermohaline circulation connects all ocean basins in a continuous flow driven by differences in water temperature and salinity.',
      interaction: {
        type: 'scientific-diagram' as const,
        id: 'thermohaline-circulation',
        caption: 'Global thermohaline circulation (ocean conveyor belt): warm surface flow (coral) carries heat poleward; cold, dense deep water forms in the North Atlantic (NADW) and Antarctica and returns equatorward. ~1,000-year overturning timescale.',
        credit: 'Broecker (1991) · RAPID array · AMOC',
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What process generates volcanism above a subduction zone, and why is the resulting magma generally more silica-rich (andesitic to rhyolitic) than the basalt produced at mid-ocean ridges?',
          a: [
            'Friction between the subducting and overriding plates generates enormous heat that directly melts the overriding plate, producing magma that is rich in silica because continental crust is felsic; at mid-ocean ridges, the mantle melts without frictional heating, producing mafic basalt',
            'Water released from hydrated minerals in the descending slab lowers the melting point of the mantle wedge above the slab, causing flux melting; the resulting magma picks up silica as it rises through and partially melts the continental or arc crust, producing more silicic compositions than mantle-derived basalt',
            'The subducting plate carries carbonate-rich sediments into the mantle; when these sediments melt, they release CO₂ and calcium, which reacts with mantle silicates to produce silica-enriched magma above the trench',
            'Subduction zone volcanism and mid-ocean ridge volcanism produce identical basaltic magma from the same mantle source; the more silicic composition of arc volcanoes is a result of the erupting magma mixing with seawater as it rises through the ocean',
          ],
          correct: 1,
          explain: 'Frictional melting (A) has been proposed historically but is not the primary mechanism — the subduction interface is too cold and the friction too limited to generate the volume of magma produced by arc volcanism; the mantle wedge above the slab is the actual melting source. Carbonate reactions (C) do occur and contribute to arc magma chemistry, but they are a minor pathway — the dominant mechanism is hydrous flux melting, not carbonate melting. Seawater mixing (D) does not occur at depth in the mantle; the subduction system is entirely within the solid Earth at the depths where melting occurs. The correct answer is B: the descending slab contains abundant water stored in hydrated minerals formed during seafloor alteration (serpentinite, chlorite, amphibolite); as the slab descends to depths of 80–120 km (50–75 mi) and heats up, these minerals break down and release water; the water rises into the mantle wedge above the slab, lowering its melting point and causing partial melting (flux melting); the resulting magma, richer in water and initially basaltic, rises through the overlying plate; as it stalls in magma chambers within the continental or arc crust, it differentiates and assimilates silica-rich crustal material, producing the more silicic (andesitic, dacitic, rhyolitic) compositions typical of arc volcanoes.',
        },
        {
          q: 'Hadal amphipods are found in the deepest ocean trenches at pressures exceeding 1,000 atmospheres. What physiological adaptations allow them to survive, and why would the same organisms die if brought rapidly to the ocean surface?',
          a: [
            'Hadal amphipods have rigid, pressure-resistant exoskeletons reinforced with heavy minerals that prevent crushing; at the surface, these same minerals become too dense for the organism to move in low-pressure seawater',
            'Hadal amphipods are hollow inside — their body cavities are maintained as near-vacuum to offset the external pressure; brought to the surface, the vacuum collapses under the sudden pressure reduction',
            'Hadal organisms are piezophilic: their cell membranes incorporate modified lipids that remain fluid at high pressure, and their enzymes are structurally adapted to function under compression; at surface pressure, these same membranes become too fluid and enzyme structures malfunction because they evolved under very different pressure conditions',
            'Hadal amphipods maintain internal pressure by pumping high-pressure fluid into their tissues; brought to the surface, this internal pressure causes them to explode from the pressure differential',
          ],
          correct: 2,
          explain: 'Rigid mineral-reinforced exoskeletons (A) do not describe the actual adaptation — amphipod exoskeletons are flexible arthropod chitin, and heavy minerals would increase metabolic costs enormously; the "too dense at surface" claim has no physiological basis. Hollow near-vacuum body cavities (B) is incorrect — no animal uses internal vacuum to counteract external pressure; biological tissues are largely incompressible water-based systems. Internal explosive pressure (D) misunderstands the physiology — organisms at high pressure do not accumulate internal overpressure; they are in equilibrium with their environment. The correct answer is C: pressure affects biology primarily through its effects on cell membranes and protein structure; at high pressure, lipid bilayers compress and could become too rigid for normal membrane function; piezophilic organisms counter this by incorporating polyunsaturated fatty acids (PUFAs) in their membranes, which remain fluid under compression; similarly, enzymes (proteins) change shape under pressure — hadal organisms have evolved enzyme variants whose active sites function correctly at high pressure but are mis-folded at low pressure; this is the same principle by which deep-sea fish proteins (e.g. trimethylamine oxide, TMAO) stabilise proteins under pressure; rapid decompression denatures these adapted proteins and disrupts membrane fluidity, killing the organism.',
        },
        {
          q: 'The 2004 Indian Ocean tsunami was generated by the sudden rupture of a megathrust fault. Why do megathrust earthquakes at ocean trenches generate particularly dangerous tsunamis compared to other large earthquakes?',
          a: [
            'Megathrust faults occur at greater depths than other earthquakes, and deeper earthquakes generate seismic waves that travel faster through the ocean floor, reaching tsunamigenic speeds',
            'Ocean trenches are located far from coastlines, so a megathrust earthquake gives coastal populations more time to evacuate than earthquakes near shore',
            'Megathrust earthquakes occur on shallowly dipping fault planes that extend beneath the ocean floor; when they rupture, the sudden vertical displacement of hundreds of square kilometres of ocean floor moves an enormous volume of water upward, generating tsunamis; the fault geometry, shallow depth, and large rupture area are all optimised for maximum water displacement',
            'Megathrust earthquakes generate tsunamis primarily because trenches act as topographic funnels that amplify seismic energy, redirecting it upward through the water column rather than horizontally through the crust',
          ],
          correct: 2,
          explain: 'Wave speed is not the key factor (A) — all seismic waves travel at similar speeds regardless of depth; and tsunami generation depends on water displacement, not wave speed. The claim that trenches are far from coasts providing evacuation time (B) is partly true for some far-field events but is false as a general statement — the Cascadia trench, Hikurangi trench, and many others are close to major coastlines, and tsunamis can reach shore in minutes for near-source events. Topographic funnelling (D) does not apply to seismic energy in this way — the trench topography influences wave propagation in the water column somewhat but is not the primary tsunami generation mechanism. The correct answer is C: megathrust earthquakes occur on the subduction thrust interface — a gently dipping fault plane that may extend from near the seafloor surface to 50–60 km (31–37 mi) depth, spanning hundreds of kilometres along the trench; when this interface ruptures, elastic rebound causes the overriding plate to suddenly spring upward by 5–15 metres (16–49 ft) over an area potentially hundreds of kilometres long and wide; this vertical displacement of a large area of seafloor pushes up an equivalent column of water, generating a long-wavelength, fast-moving wave; the shallow origin (< 30 km (19 mi)), large rupture area, and geometry of dip-slip (vertical) motion are all properties that maximise water displacement and hence tsunami generation.',
        },
        {
          q: 'Hadal trenches contain up to ten times more organic carbon in their sediments than the surrounding abyssal plains at equivalent depths. Why are the deepest points of ocean trenches more food-rich than the flat abyssal plain nearby?',
          a: [
            'Trenches are located near continental margins where rivers supply large amounts of organic material directly to the trench floor; the greater proximity to land explains the higher organic carbon concentrations',
            'The extreme pressure in trenches chemically synthesises organic carbon from dissolved CO₂ and methane in the sediment pore water; this abiotic carbon synthesis is unique to hadal depths and supplements the rain of organic particles from above',
            'Trenches act as topographic funnels: organic particles (marine snow, dead organisms, fecal pellets) that settle on the broad surrounding slopes and walls of the trench roll and slump downward under gravity to accumulate at the deepest point; the trench concentrates organic material from a much larger collection area into a small floor, making the hadal zone disproportionately food-rich',
            'Hadal organisms produce unusually high quantities of mucus and other organic secretions compared to abyssal organisms; these secretions accumulate faster than they decompose at high pressure, creating an internally generated organic carbon reservoir',
          ],
          correct: 2,
          explain: 'Continental proximity (A) is partly true for some trenches near land (e.g. the Japan Trench receives material from land), but it does not explain the general pattern across all trenches, including those far from land; the funnel mechanism is the primary explanation. Abiotic carbon synthesis from CO₂ and methane (B) does occur through serpentinisation reactions in some settings, but this is not the explanation for the elevated organic carbon in trench sediments, which is clearly biogenic in origin. Mucus secretion accumulation (D) is not a recognised mechanism; while some deep-sea organisms do produce mucus, this does not explain the order-of-magnitude enrichment in organic carbon relative to surrounding plains. The correct answer is C: the geometry of ocean trenches creates a natural collection mechanism for organic particles. Marine snow sinking through the water column lands not just on the narrow trench floor but also on the expansive sloping walls and the surrounding seafloor at shallower depths; gravity then causes this material to slide, roll, and slump down the steep trench walls and accumulate at the deepest point; sediment transport along trench axes further concentrates material; the result is that the deepest point of a trench collects organic matter from a catchment area many times larger than the trench floor itself, producing organic carbon concentrations and biological densities — including enormous swarms of scavenging amphipods — that rival productive continental shelf environments despite being thousands of metres deeper.',
        },
      ],
    },
  ],
}

export default oceanTrenches
