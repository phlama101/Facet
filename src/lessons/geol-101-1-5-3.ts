import { Waves, Layers, Globe } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const riverSystems: Lesson = {
  id: 'geol-101-1-5-3',
  title: 'River Systems and Landscapes',
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 150,
  description: "The Colorado River carved the Grand Canyon — 1.6 km (1.0 mi) deep, 446 km (277 mi) long — through 1.8 billion years of rock. Rivers are Earth's most powerful surface sculptors, and every fluvial landform is a chapter in a river's story.",
  sources: [
    { org: 'USGS', title: 'StreamStats and River Science (Public Domain)', url: 'https://streamstats.usgs.gov' },
    { org: 'USGS', title: 'Water Resources — Rivers and Streams',          url: 'https://www.usgs.gov/mission-areas/water-resources' },
    { org: 'NPS',  title: 'Geology Fieldnotes — Fluvial Processes',        url: 'https://www.nps.gov/subjects/geology/rivers.htm' },
    { org: 'OpenStax', title: 'Physical Geology, 2nd ed. (CC-BY 4.0)',     url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'UCAR Center for Science Education', title: 'Earth surface processes', url: 'https://scied.ucar.edu/learning-zone/earth' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The river as sculptor',
      body: `The Grand Canyon is one of the most studied landscapes on Earth — a 446-km gash in the Colorado Plateau, 1.6 km (1.0 mi) deep, exposing rock layers spanning 1.8 billion years of Earth history. Every stratum visible from the rim is a chapter in the sedimentary and tectonic record that Modules 1.3 and 1.4 introduced. But the canyon itself — the void, the shape, the depth — is the work of a single river. The Colorado River began incising the canyon approximately 5–6 million years ago, when tectonic uplift of the Colorado Plateau elevated the landscape above its former base level, steepening the river's gradient and dramatically increasing its erosive power. Since then, the river has removed enough rock to fill the Grand Canyon roughly 1,000 times over — carrying it grain by grain to the Gulf of California.

Rivers are Earth's dominant surface sculptors over geologic time. They collect water and sediment from entire landscapes, transport material from high elevations to low, and deposit it in deltas, floodplains, and ocean basins. In doing so, they create some of the most recognisable landforms on Earth: V-shaped mountain valleys, meandering lowland rivers with floodplains and oxbow lakes, broad river deltas where great rivers meet the sea. Every fluvial landform — every canyon, meander, delta, and alluvial fan — is the physical record of a river doing its work: eroding where it has energy to spare, depositing where it does not.

This lesson traces a river from its mountain headwaters to the sea, mapping the dominant processes and landforms at each stage. Lesson 1.5.4 will complete Module 1.5 with glacial and coastal landforms — the final two major sculpting agents of Earth's surface.`,
      keyTerms: [
        {
          term: 'Drainage basin',
          def: "The entire area of land that drains into a single river system, bounded by topographic divides (ridgelines) beyond which water flows to a different drainage system. Also called a watershed or catchment. The Mississippi River drainage basin covers ~3.2 million km² (1.2 million sq mi), about 40% of the contiguous United States.",
        },
        {
          term: 'Base level',
          def: "The lowest elevation to which a river can erode — effectively sea level for rivers that reach the ocean, or the level of a lake for rivers that terminate in lakes. A river cannot erode below its base level. Changes in base level (sea level rise/fall, dam construction, lake drainage) trigger adjustments throughout the entire river system.",
        },
        {
          term: 'Stream gradient',
          def: "The slope of a river channel — the vertical drop per unit of horizontal distance. High gradient (steep) rivers in mountain headwaters have high erosive energy. Low gradient (gentle) rivers in coastal lowlands have low energy and deposit their sediment load. A river's gradient profile from headwaters to mouth typically decreases smoothly in a concave-up curve.",
        },
        {
          term: 'Floodplain',
          def: "The flat, low-lying area adjacent to a river channel, built by sediment deposited during periodic floods. Floodplains are natural features of mature river systems — attempts to prevent rivers from accessing their floodplains (levees, channelisation) typically increase flood peaks downstream and starve deltas of sediment.",
        },
        {
          term: 'Alluvial fan',
          def: "A fan-shaped deposit of sediment that forms where a high-gradient mountain stream emerges onto a flat plain or valley floor and abruptly loses velocity, depositing its sediment load. Common at the mouths of canyons in arid and semi-arid regions. The Death Valley bajadas are composed of coalescing alluvial fans.",
        },
      ],
    },
    {
      type: 'concept',
      title: 'From mountain to sea',
      body: `**The drainage basin — a river's territory.** Every river has a **drainage basin**: the total area of land that contributes water and sediment to that river system. Drainage basins are separated from one another by **divides** — topographic ridgelines where water flow splits between two different drainage systems. The continental divide of North America runs along the Rocky Mountains: rain falling on its eastern side eventually reaches the Atlantic Ocean via the Mississippi or other eastward-flowing rivers; rain on its western side reaches the Pacific. Understanding a drainage basin is essential for understanding a river's behaviour — the basin's size, shape, geology, vegetation, and climate all control how much water and sediment the river carries.

**Stream gradient and the energy budget.** A river's capacity to erode, transport, and deposit sediment is determined by its **velocity** and **volume** — together, these set the river's **energy**. Both are largely controlled by **gradient**: steeper rivers flow faster and carry more energy. Mountain headwater streams have steep gradients, high velocities, and abundant energy — they erode their channels actively, cutting V-shaped valleys by **downcutting** (vertical erosion into the bedrock). As a river descends and its gradient decreases, velocity drops and the river's energy budget shifts from erosion to **transport** to **deposition**. By the time a river reaches a coastal plain, its gradient is nearly flat, velocity is low, and it is depositing rather than eroding. This downstream transition from erosion-dominated to deposition-dominated behaviour is the fundamental organising principle of fluvial geomorphology.

**Erosional landforms — the cutting phase.** In steep headwater reaches, rivers cut **V-shaped valleys**: the river erodes downward into the bedrock while weathering and mass wasting widen the valley walls, producing the characteristic V cross-section. Where a river encounters a particularly resistant rock layer, or where tectonic uplift suddenly steepens the gradient, the river may cut a **canyon** — a deep, narrow gorge with nearly vertical walls, as in the Grand Canyon and Zion Canyon. **Waterfalls** form where a river flows over a resistant rock layer underlain by softer rock: the softer rock erodes faster, undermining the resistant cap until it collapses, and the waterfall retreats upstream over time. Niagara Falls retreats approximately 1 metre per year upstream through this process. **Incised meanders** form when a formerly meandering lowland river is uplifted by tectonics — the river rapidly cuts downward, preserving its sinuous planform as entrenched curves in the canyon floor. The Colorado River's Horseshoe Bend is a classic incised meander.

**Sediment transport — carrying the load.** Rivers transport their sediment in three ways. **Bedload** consists of coarse particles (sand, gravel, boulders) that roll, slide, and saltate (bounce) along the channel floor — moved only when the river has enough velocity to overcome gravity. **Suspended load** consists of fine particles (silt, clay) kept aloft by turbulence throughout the water column — the brown colour of many rivers in flood reflects a high suspended load. **Dissolved load** consists of ions in solution — the invisible product of chemical weathering that rivers carry to the ocean. A river's **competence** (the maximum particle size it can move) and **capacity** (the total sediment load it can carry) both increase with velocity and discharge. When a river floods, its velocity and discharge increase dramatically, and it can move much larger boulders and carry vastly more sediment than under normal flow conditions — which is why major floods do most of a river's geological work.

**Depositional landforms — the building phase.** As a river loses velocity — by entering a flat valley, a lake, or the ocean — it deposits its sediment load in a predictable sequence: coarsest first (gravel, sand), finest last (silt, clay). **Floodplains** are the flat, fertile areas flanking mature rivers, built by two processes: **lateral migration** of the channel as meanders shift back and forth across the valley floor, depositing point-bar sand on the inside of bends, and **overbank deposition** of fine silt and clay when floods inundate the floodplain. **Meanders** develop naturally in rivers with gentle gradients and cohesive floodplain sediments. The asymmetry of flow in a bend — faster on the outside, slower on the inside — causes erosion on the **cut bank** (outside of the bend) and deposition on the **point bar** (inside). Over time, meanders migrate downstream and grow in amplitude. When a meander loop becomes so tight that the river cuts through the narrow neck separating it from itself, the loop is abandoned as an **oxbow lake** — a crescent-shaped lake that gradually fills with sediment and vegetation. **Deltas** form where rivers meet standing water (ocean or lake) and deposit their sediment load as velocity drops to near zero. The Mississippi delta builds outward into the Gulf of Mexico at ~100 m (328 ft) per year in some distributary channels; the Nile delta has supported agricultural civilisations for 7,000 years. **Alluvial fans** form at abrupt gradient changes — typically where a steep mountain canyon exits onto a flat plain; the sudden velocity drop causes the river to deposit its load in a fan-shaped apron. Death Valley's margins are fringed with alluvial fans from the surrounding mountains.

**Base level — the river's lower limit.** Every river erodes toward its **base level** — the elevation below which it cannot erode, effectively sea level for rivers reaching the ocean. Base level controls the entire river system: if base level drops (sea level falls, the crust is uplifted), the river has new capacity to erode and incises downward into its own floodplain, producing **stream terraces** — elevated remnants of former floodplains that record past base-level positions. If base level rises (sea level rises, a dam is built), the river deposits sediment upstream to raise its channel to the new level, building a new floodplain at the higher elevation. Building a dam creates an instant local base level: the river deposits a delta in the reservoir upstream and loses most of its sediment load below the dam, leading to channel erosion and starvation of the downstream floodplain and delta.`,
      cards: [
        {
          name: 'Erosional River Landforms',
          icon: Waves,
          color: BRAND.accent,
          desc: "High gradient + high energy → erosion dominates. V-shaped valleys: rivers downcut into bedrock, mass wasting widens walls. Canyons: rapid incision through resistant rock or during tectonic uplift (Grand Canyon: 5–6 Ma of Colorado Plateau uplift). Waterfalls: resistant caprock over softer rock — Niagara retreats ~1 m/yr. Incised meanders: former lowland meanders cut deeply when uplifted (Horseshoe Bend, AZ). Gorges: extreme V-valleys in very resistant rock.",
          examples: "Grand Canyon: 1.6 km (1.0 mi) deep, 1.8 Ga rock · Niagara Falls: retreating upstream · Horseshoe Bend: incised meander · Zion Canyon: sandstone gorge",
        },
        {
          name: 'Depositional River Landforms',
          icon: Layers,
          color: BRAND.gold,
          desc: "Low gradient + low energy → deposition dominates. Floodplains: built by lateral meander migration + overbank flood deposits (fertile silt). Meanders: cut bank erodes (outside), point bar deposits (inside) → meander migrates. Oxbow lakes: meander cutoffs, become crescent ponds. Deltas: river meets ocean/lake → fan of distributaries and sediment (Mississippi, Nile, Ganges-Brahmaputra). Alluvial fans: canyon exits onto flat plain → sudden velocity drop → fan deposit (Death Valley).",
          examples: "Mississippi delta: grows ~100 m/yr · Nile delta: 7,000 yr agriculture · Death Valley fans · Amazon floodplain: world's largest",
        },
        {
          name: 'River Systems',
          icon: Globe,
          color: BRAND.jade,
          desc: "Drainage basin: all land draining to one river system, bounded by divides. Mississippi basin: 3.2 million km² (1.2 million sq mi), 40% of contiguous US. Base level: lower limit of erosion (sea level for ocean rivers); base-level drop → river incises terraces; rise → river aggrades. Gradient profile: steep headwaters (erosion) → gentle lowlands (deposition). Sediment transport: bedload (gravel bouncing), suspended load (silt in water column), dissolved load (ions). Competence and capacity increase with velocity and discharge.",
          examples: "Colorado River basin: Grand Canyon · Amazon basin: world's largest by discharge · Mississippi: 40% of US drains here · Rhine terraces: glacial base-level changes",
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "A river in its mountain headwaters cuts a deep V-shaped valley. The same river 500 km (311 mi) downstream flows in broad meanders across a flat floodplain. What controls this transition from erosion-dominated to deposition-dominated behaviour?",
          a: [
            "The river is older in its lower reaches — rivers erode when young and deposit when old as they gradually run out of erosive energy over geological time",
            "The river changes rock type as it descends — it erodes in hard rock in the mountains and deposits when it reaches softer lowland sediment",
            "Stream gradient decreases downstream: the steep mountain gradient gives the river high velocity and erosive energy for downcutting; as the gradient gentles toward sea level, velocity and energy drop, and the river can no longer transport its full sediment load so it deposits instead",
            "Tributary rivers add so much water in the lowlands that the river becomes too wide and shallow to erode, forcing it to deposit sediment across its broad channel",
          ],
          correct: 2,
          explain: "Rivers do not simply run out of energy with age (A) — a river on a steep gradient will erode vigorously regardless of its age; and many ancient rivers in tectonically active regions remain highly erosive. Rock type (B) does influence erosion rate — resistant rock produces slower erosion and features like waterfalls — but the fundamental transition from erosional to depositional behaviour is controlled by gradient and energy, not rock type; rivers deposit on soft lowland sediment because their energy is low, not because the sediment is soft. The correct answer is C: gradient is the primary control on river velocity and therefore on erosive energy; in the steep mountain headwaters, gravity accelerates water rapidly and the river has abundant kinetic energy to abrade and lift sediment from the bedrock, cutting the characteristic V-shaped valley; as the river descends and the gradient flattens toward its base level (sea level), velocity decreases, kinetic energy drops, and the river progressively loses the ability to transport its sediment load; sediment that can no longer be carried is deposited, building the floodplain; this gradient control explains why virtually all rivers erode in upper reaches and deposit in lower reaches, regardless of their rock type or age. While tributaries do increase discharge (D), increased discharge without increased gradient does not cause deposition — the Amazon carries enormous discharge and still erodes vigorously where its gradient allows.",
        },
        {
          q: "A geologist maps a series of crescent-shaped lakes on a river floodplain, each parallel to the current river channel but no longer connected to it. What process formed these features, and what do they represent?",
          a: [
            "The lakes are kettles — depressions formed by the melting of buried glacial ice blocks, later filled with water; they are unrelated to the current river system",
            "The lakes are former meander loops that were cut off from the river when the river broke through the narrow neck of land separating two adjacent meanders; the isolated loops filled with stagnant water and are now oxbow lakes slowly filling with sediment and vegetation",
            "The lakes are relict river channels abandoned when the main river avulsed — jumped suddenly to a new course — during a catastrophic flood; they retain the original straight channel shape of the pre-avulsion river",
            "The lakes formed by dissolution of limestone beneath the floodplain, creating sinkholes that filled with groundwater; their crescent shape reflects the elongated collapse of cave roofs along fracture zones",
          ],
          correct: 1,
          explain: "Kettle lakes (A) are found in glaciated terrain where buried ice blocks melt; they are typically circular or irregular, not crescent-shaped, and are not associated with active river floodplains in unglaciated regions. The correct answer is B: meanders naturally migrate laterally across floodplains over time as erosion on the cut bank (outside of the bend) and deposition on the point bar (inside) cause each bend to grow in amplitude and shift position; as a meander loop grows tighter, the neck of land separating two adjacent loops narrows; eventually, during a high-flow event, the river cuts through this narrow neck and takes the shorter, straighter path; the abandoned loop is isolated from the main channel and forms an oxbow lake — named for its resemblance to a U-shaped oxbow used on draft animals; the crescent shape precisely reflects the shape of the former meander bend; oxbow lakes gradually fill with fine sediment deposited during floods and with organic matter as they are colonised by vegetation, eventually becoming oxbow marshes or swamps. Avulsion (C) does occur and does produce abandoned channels, but these are typically straight or gently curved, not the tight crescents of oxbow lakes, and avulsion-abandoned channels would retain the form of the pre-avulsion channel pattern. Karst sinkholes (D) form circular or irregular depressions in limestone terrain; they do not form crescent shapes on alluvial floodplains, which are typically composed of clay, silt, and sand, not soluble limestone.",
        },
        {
          q: "Engineers dam a river to create a reservoir. Describe what happens to the river system immediately upstream and downstream of the dam, and explain why using the concept of base level.",
          a: [
            "Upstream: the river erodes its channel more deeply because the dam backs up water pressure, increasing the river's erosive force; downstream: the river deposits more sediment because the dam slows the water",
            "Upstream: the reservoir creates a new, higher local base level; the river deposits sediment (building a delta in the reservoir) as it adjusts to the new base level; downstream: the dam traps sediment so the clear water released has excess erosive energy and erodes the downstream channel and starves the delta",
            "Both upstream and downstream: the river adjusts its gradient by depositing sediment everywhere, raising the floodplain level to match the new water level imposed by the dam",
            "Upstream: the river is unaffected because dams only affect the downstream portion; downstream: the river deposits more sediment because slower water below the dam cannot carry a full load",
          ],
          correct: 1,
          explain: "Backing up water pressure (A) does not increase erosive force upstream — the reservoir is a lake of nearly still water; erosive force requires velocity, and the reservoir dramatically reduces upstream velocity. The correct answer is B: base level is the lower limit to which a river can erode — the elevation below which it loses energy and must deposit; constructing a dam creates a new, artificially elevated local base level (the reservoir surface); upstream of the dam, the river's gradient is now too gentle relative to the new base level, so it loses velocity as it enters the reservoir and deposits its sediment load, building a delta into the reservoir head (the Hoover Dam reservoir, Lake Mead, now has significant sediment accumulation at the Colorado River's inlet); downstream of the dam, the opposite problem occurs — the dam has trapped all the river's sediment load, releasing only clear water; this sediment-starved water is below its sediment transport capacity and has excess erosive energy, which it uses to scour the downstream channel bed and banks (channel incision has been documented below many major dams worldwide); the downstream floodplain and delta are also starved of the sediment they need to maintain themselves and are eroded by waves and currents. Neither upstream nor downstream is unaffected (C, D) — the entire river system adjusts to the new base-level configuration.",
        },
        {
          q: "A river flowing across a flat coastal plain develops a series of increasingly exaggerated meander loops. One meander loop has grown so tight that the river now flows in an almost complete circle, separated from itself by only a narrow neck of floodplain sediment 50 m (164 ft) wide. During the next major flood, the river cuts straight through this neck. What happens to the abandoned loop immediately after the cutoff, and what long-term fate awaits it?",
          a: [
            "The abandoned loop becomes a tributary river that feeds back into the main channel at a downstream location; the increased discharge accelerates erosion of the main channel and straightens the adjacent meanders",
            "The abandoned loop fills instantly with coarse sand deposited by the flood that cut through the neck; the high-energy floodwaters deposit their entire bedload in the low-velocity abandoned channel, converting it to a gravel bar within hours",
            "The abandoned loop is isolated as an oxbow lake — a crescent-shaped body of standing water; deprived of flowing water, it gradually fills with fine sediment deposited during overbank floods and organic material from aquatic vegetation, eventually becoming a marsh or swamp and ultimately dry land",
            "The abandoned loop is permanently sealed at both ends by floodplain sediment during the cutoff event and then drains through the sandy floodplain substrate within weeks, leaving only a shallow scar on the landscape",
          ],
          correct: 2,
          explain: "A cutoff meander does not become an active tributary (A) — both ends of the loop are sealed by sediment deposited as the river re-establishes flow along the shorter new course; there is no sustained flow from the old loop back into the main channel. The abandoned loop does not fill instantly with coarse sand (B) — the cutoff seals the loop's connection to the main channel, so after the flood, the loop contains only standing water; the very fine sediment (silt and clay) deposited during overbank floods is what gradually fills it, not the coarse bedload of the main channel. The correct answer is C: when the river cuts through the meander neck during flood, the old loop is isolated from the main channel — both ends are plugged by sandy deposits where the new channel cross-cuts the neck; the isolated loop fills with water and becomes an oxbow lake (named for its U-shape resembling an ox yoke); over decades to centuries, fine silt and clay deposited during overbank floods slowly fill the oxbow from below; aquatic vegetation colonises the shallows and accelerates organic accumulation; the lake becomes progressively shallower, transitioning to a marsh, then a swamp with emergent vegetation, and eventually to a flat floodplain indistinguishable from the surrounding surface except for its crescent shape visible from the air and subtle differences in soil type. Drainage through the substrate (D) is inhibited by the clay-rich floodplain sediment, which has very low permeability; oxbow lakes typically persist for hundreds to thousands of years before filling, not weeks.",
        },
      ],
    },
  ],
}

export default riverSystems
