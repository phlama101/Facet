import { Factory, Globe, TrendingDown, Activity, Layers } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const humanGeomorphology: Lesson = {
  id: 'geom-101-1-4-4',
  title: 'Human Geomorphology: How We Reshape the Land',
  track: 'cli',
  trackName: 'Geomorphology',
  level: 'Beginner',
  duration: '14 min',
  xpReward: 150,
  description: `Humanity has become the planet\'s dominant geomorphic agent — moving more sediment than all rivers combined, creating new landforms at unprecedented rates, and fundamentally altering Earth\'s surface processes in ways that amplify natural hazards and reshape landscapes for millennia.`,
  sources: [
    { org: 'USGS',   title: 'USGS — Land Subsidence in the United States',             url: 'https://pubs.usgs.gov/circ/circ1182/' },
    { org: 'AGU',    title: `AGU — Earth\'s Future: Anthropocene Geomorphology`,        url: 'https://agupubs.onlinelibrary.wiley.com/journal/23284277' },
    { org: 'WCD',    title: 'World Commission on Dams — Dams and Development',         url: 'https://www.internationalrivers.org' },
    { org: 'UNEP',   title: 'UNEP — Global Land Outlook: Soil Erosion and Sediment',  url: 'https://www.unep.org/resources/global-land-outlook' },
    { org: 'Nature', title: 'Nature Geoscience — Anthropocene Geomorphic Change',      url: 'https://www.nature.com/ngeo' },
  ],
  sections: [
    {
      type: 'intro',
      title: `The Anthropocene geomorphologist: how humanity became the Earth\'s dominant sculptor`,
      body: `We live in the **Anthropocene** — an epoch in which human activities have become the dominant force reshaping Earth's land surface. Geologists and geomorphologists increasingly recognise that the speed, scale, and permanence of human-induced landscape change now rivals, and in many respects exceeds, that of natural processes. The statistics are striking: humans now move approximately **57 billion tonnes (62.8 billion tons) of sediment and rock per year** through mining, construction, agriculture, and land clearing — nearly four times the estimated **15 Gt/yr (16.5 billion tons/yr)** moved by all the world's rivers combined. This makes Homo sapiens the single most powerful geomorphic agent in Earth's history, surpassing even the ice sheets of glacial maxima in the total volume of material displaced annually.

The scale of human landscape modification spans from the molecular (soil chemistry) to the continental (dam-trapped sediment flux). **Strip mining** and open-cast extraction — for coal, copper, iron ore, and gravel — excavate landscapes on a scale comparable to major tectonic events: the Hull-Rust-Mahoning open-pit iron mine in Minnesota (the world's largest open-pit iron mine) is 8 km (5.0 mi) long, 3 km (1.9 mi) wide, and 190 m (623 ft) deep, a human-made canyon visible from the International Space Station. Mine tailings — the fine waste material left after ore extraction — create artificial hillslopes that are highly susceptible to erosion and can release acid mine drainage into river systems for centuries after mine closure.

**Reservoir sedimentation** is one of the most geomorphically significant consequences of dam construction. The world's ~60,000 large dams (>15 m (49 ft) height) impound more than 6,500 km³ (1,559 cu mi) of water behind their walls. They also trap an estimated **25% of the global fluvial sediment flux** — approximately 4–5 Gt/yr — that would otherwise reach the coast to nourish beaches, deltas, and wetlands. As reservoirs fill with sediment (most large reservoirs will lose 50–80% of their storage capacity to sedimentation within 100–300 years at current rates), their flood storage and hydropower capacity declines and the downstream river is transformed: robbed of its sediment load, the clear water released below the dam has excess erosive capacity and incises the channel bed — a phenomenon called **hungry water** — cutting gorges through formerly deposited alluvium and undermining bridge foundations and river banks downstream.

**Ground subsidence** from groundwater extraction is a hazard that affects more than 50 major cities globally. The physics are described by Karl Terzaghi's **consolidation theory**: when groundwater is withdrawn from a confined aquifer, the effective stress on the compressible clay layers above increases, compressing the sediment irreversibly and lowering the ground surface. Houston, Texas has subsided up to **3 m (10 ft)** over the 20th century due to groundwater and oil extraction, creating zones of chronic flooding. Venice, Italy has subsided **23 cm (9 in)** since 1900, with ~12 cm (5 in) from natural compaction and ~11 cm (4 in) from industrial groundwater extraction at Porto Marghera that was halted in the 1970s, since when subsidence has slowed to ~1–2 mm/yr natural compaction. Jakarta, Indonesia continues to sink at up to **250 mm/yr (9.8 in/yr)** in its northern districts — the fastest rate of human-induced subsidence of any major city. By 2100, an estimated 19% of the global population will live in areas affected by significant land subsidence.

**Urban geomorphology** addresses the ways in which cities transform hillslope and fluvial processes. The replacement of permeable natural surfaces with **impervious cover** — roads, rooftops, parking lots — dramatically increases the proportion of precipitation that becomes direct runoff rather than infiltrating to groundwater. A natural forest might have 10–20% of rainfall as surface runoff; an urban area with 60–80% impervious cover converts 60–80% of rainfall to runoff, shortening time-to-peak flood from days to hours. This urban hydrological transformation amplifies flood peaks by 2–10× and increases stream bank erosion, channel widening, and downstream sediment deposition. The process of **river channelisation** — straightening, lining with concrete, and confining rivers within levees — accelerated in the 20th century, increasing flow velocities, eliminating floodplain connectivity, and destroying riparian habitat. Recognition of these consequences has driven a wave of river **de-channelisation** and restoration projects that attempt to restore natural channel geometry and meander patterns.`,
      keyTerms: [
        {
          term: 'Anthropocene',
          def: `Proposed geological epoch beginning with the onset of significant human impact on Earth\'s geology and ecosystems; humans now move ~57 Gt/yr (62.8 billion tons/yr) of sediment — roughly 4× the natural fluvial sediment flux of ~15 Gt/yr (16.5 billion tons/yr).`,
        },
        {
          term: 'Hungry Water',
          def: 'The increased erosive capacity of water released from a dam, which is depleted of its natural sediment load; the clear water scours the downstream channel bed and banks, incising gorges and destabilising infrastructure.',
        },
        {
          term: 'Terzaghi Consolidation',
          def: 'The irreversible compaction of clay-rich sediment when groundwater is extracted and effective stress increases; the primary mechanism driving land subsidence in cities built on soft alluvial sediment, including Houston, Venice, and Jakarta.',
        },
        {
          term: 'Impervious Cover',
          def: 'Roads, rooftops, and paved surfaces that prevent precipitation infiltration; urban areas with 60–80% impervious cover convert most rainfall to rapid surface runoff, amplifying flood peaks 2–10× and accelerating stream bank erosion.',
        },
        {
          term: 'Reservoir Sedimentation',
          def: 'The trapping of ~25% of global river sediment flux (~4–5 Gt/yr) behind dams; reduces reservoir storage capacity over decades to centuries and starves downstream channels, coasts, and deltas of their natural sediment supply.',
        },
        {
          term: 'River Channelisation',
          def: 'Artificial straightening, lining, and embanking of rivers to control flooding and navigation; increases flow velocity, eliminates floodplain connectivity, destroys habitat, and is increasingly being reversed by restoration projects.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Human Sediment Movement: Mining, Construction, and Agriculture',
      body: `To put humanity's geomorphic impact in context: natural processes have moved sediment at rates of ~15 Gt/yr through rivers and ~2 Gt/yr through wind over the last 10,000 years of relatively stable Holocene climate. Humans have doubled, then quadrupled, this flux in roughly 200 years of industrialisation. The concentration of this movement in specific types of land use reveals where geomorphic impact is most intense.`,
      cards: [
        {
          name: 'Mining and Quarrying: Terraforming at Industrial Scale',
          icon: Factory,
          color: BRAND.ruby,
          desc: 'Surface mining (open-cast, strip mining, quarrying) removes overburden, excavates ore, and creates waste dumps that collectively constitute some of the largest human-made landforms on Earth. Copper mining alone generates ~1.5 Gt of waste rock per year globally. Mine tailings dams — containing fine, often acid-generating waste — are among the most catastrophic failure risks in geomorphology: the 2019 Brumadinho tailings dam failure (Brazil) killed 270 people and released 12 million m³ of iron ore waste. Acid mine drainage oxidises iron sulphide minerals, generating sulphuric acid that can contaminate rivers for 500–1,000 years.',
          examples: 'The Athabasca Oil Sands (Alberta, Canada) operations mine ~300 km² (116 sq mi) of boreal forest, moving 1 Gt of overburden per year — the largest volume of earth moved by any single industrial operation. The Berkeley Pit (Montana, USA) is an open-pit copper mine whose acid lake (pH 2.5) has been accumulating since 1982 and requires perpetual treatment. Mountaintop removal coal mining in Appalachia has buried >3,000 km of headwater streams under valley fills.',
        },
        {
          name: 'Agriculture and Soil Erosion',
          icon: TrendingDown,
          color: BRAND.gold,
          desc: 'Agriculture is responsible for accelerating soil erosion 10–100× above natural background rates on cultivated land globally. Tillage disrupts soil structure, removing vegetation cover and exposing bare soil to rainsplash and overland flow. Agricultural erosion contributes ~70% of global suspended sediment in rivers. Topsoil loss reduces agricultural productivity: it takes ~500 years to form 2.5 cm of topsoil, yet agricultural erosion removes 2.5 cm in 15–25 years on many cultivated slopes. The global cost of soil erosion is estimated at $400 billion per year in lost productivity.',
          examples: `The 1930s Dust Bowl (USA) was triggered by drought combined with deep tillage of native prairie: wind erosion removed up to 75% of topsoil from 400,000 km² (154,440 sq mi) of the Great Plains, producing dust storms visible from the Atlantic coast. China\'s Loess Plateau has experienced some of the world\'s highest erosion rates (5,000–20,000 t/km²/yr under traditional agriculture), but reforestation and terracing since the 1990s has reduced Yellow River sediment load by >50%. Contour ploughing and cover cropping can reduce erosion rates by 50–80% on vulnerable slopes.`,
        },
        {
          name: 'Urban Construction and Landform Creation',
          icon: Layers,
          color: BRAND.accent,
          desc: 'Urban construction involves grading (flattening or reshaping terrain), importing fill material, and creating entirely new landforms. The volume of material moved during urban expansion globally is estimated at 57 Gt/yr when combined with all extractive activities. Artificial hills, reclaimed land, levelled valley fills, and deepened harbours represent permanent landscape modifications. Landfill sites create hills of compacted waste that will persist in the geological record for millions of years — future stratigraphers will identify the "technosphere" as a distinct layer in Anthropocene sediments.',
          examples: `Dubai\'s Palm Jumeirah and World Islands were created by dredging and depositing 385 million m³ of sand from the seabed — reclaimed land of 56 km² with no historical precedent in scale or speed. Hong Kong has reclaimed 70 km² from Victoria Harbour since the 1840s; the airport is built entirely on reclaimed land. The Netherlands has reclaimed 7,000 km² from the North Sea since the 13th century through poldering — arguably the most sustained large-scale geomorphic engineering project in human history.`,
        },
      ],
    },
    {
      type: 'concept',
      title: 'Urban Hydrology, Subsidence, and River Management',
      body: `Cities transform not just the solid land surface but also the hydrological processes that shape it. By sealing surfaces, straightening rivers, and extracting groundwater, urbanisation creates new geomorphic regimes that amplify flooding, accelerate channel erosion, and literally sink the ground beneath our feet.`,
      cards: [
        {
          name: 'Urbanisation and Flood Amplification',
          icon: Activity,
          color: BRAND.coral,
          desc: 'The urban flood response curve is characterised by higher peaks, shorter lag times, and greater flash flood frequency compared to pre-urban catchments. The primary cause is impervious surface cover replacing infiltrating soil and vegetation. A 1 km² catchment at 70% impervious cover generates flood peaks 5–7× higher than the same area at 5% impervious cover for the same rainfall event. Urban stream channels widen and deepen in response to increased flood frequency; within 10–20 years of urbanisation, channel cross-sections commonly double or triple. Combined sewer systems — carrying both stormwater and sewage — overflow into rivers during heavy rainfall, adding water quality to the geomorphic problem.',
          examples: `2021 Zhengzhou floods (China) produced 201 mm (7.9 in) of rain in one hour — equivalent to Beijing\'s entire annual rainfall; the combination of extreme rainfall and urban impervious cover killed 292 people in the subway system. Houston\'s 2017 Hurricane Harvey caused $125 billion damage partly because rapid urbanisation of the Cypress Creek floodplain had replaced prairie with impervious surfaces and reduced the watershed\'s infiltration capacity by ~50%. Singapore has addressed urban flooding through underground storm drain tunnels capable of storing 1.4 million m³ of stormwater during peak events.`,
        },
        {
          name: 'Groundwater Extraction and Subsidence',
          icon: Globe,
          color: BRAND.amethyst,
          desc: `Land subsidence from groundwater extraction follows Terzaghi\'s consolidation: withdrawal reduces pore fluid pressure, increasing effective stress on compressible clay layers, causing irreversible compaction. Subsidence is permanent — unlike elastic aquifer compression, clay consolidation cannot be reversed by recharging the aquifer. The maximum global subsidence rate is ~250 mm/yr (9.8 in/yr) (Jakarta). Houston has subsided up to 3 m (10 ft); Mexico City up to 10 m (33 ft); Shanghai up to 2.9 m; Tehran up to 25 cm/yr. By 2040, an estimated 1.6 billion people will live in areas of significant subsidence from groundwater extraction.`,
          examples: `Mexico City has subsided up to 10 m (33 ft) over the 20th century, tilting and cracking the Metropolitan Cathedral (built 1573–1813) which now leans measurably due to differential subsidence. Houston\'s Baytown area has subsided 3 m (10 ft) since 1930, converting what was dry coastal land into open bay, dramatically increasing hurricane storm surge penetration. Venice stopped most of its industrial groundwater extraction in the 1970s; subsidence slowed from ~5 mm/yr to ~1–2 mm/yr, but the 23 cm (9 in) of 20th century sinking is irreversible and MOSE flood barriers now protect the lagoon from Adriatic storms.`,
        },
      ],
    },
    {
      type: 'visualization',
      title: `The Anthropocene Sediment Cascade: Human Dominance of Earth\'s Surface Processes`,
      body: 'How human activities intercept, accelerate, and redirect the global sediment cycle — from accelerated erosion through dam trapping to urban flood amplification — and where in the cascade opportunities exist for restoration and mitigation.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'tracing how human activities have altered the global sediment cycle from accelerated hillslope erosion through dam interception to coast sediment starvation, and identifying restoration opportunities',
        nodes: [
          {
            id: 'accelerated-erosion',
            label: 'Accelerated Hillslope Erosion',
            description: 'Agriculture, mining, construction, and deforestation expose bare soil and rock, accelerating erosion 10–100× above natural background rates. Humans move ~57 Gt/yr (62.8 billion tons/yr) of sediment and rock — 4× the natural river flux of ~15 Gt/yr (16.5 billion tons/yr). This material enters river systems as increased suspended load, raising turbidity, damaging aquatic habitat, and increasing flood risk downstream through channel aggradation.',
            color: BRAND.ruby,
          },
          {
            id: 'dam-interception',
            label: 'Dam Interception (~25% of Flux)',
            description: '~60,000 large dams trap an estimated 25% of the global fluvial sediment flux (~4–5 Gt/yr). Reservoirs behind dams fill with sediment at rates that will consume 50–80% of their storage capacity within 100–300 years, reducing hydropower output and flood storage. Meanwhile, the river below the dam receives clear, sediment-free "hungry water" that incises the channel bed by 1–10 m over decades, undermining bridges, bank-reinforcing vegetation, and river-dependent ecosystems.',
            color: BRAND.coral,
          },
          {
            id: 'urban-transformation',
            label: 'Urban Hydrological Transformation',
            description: 'Impervious cover (60–80% in mature urban areas) converts infiltration-dominated hillslope hydrology to rapid surface runoff. Flood peaks are amplified 2–10×, time-to-peak is shortened from hours to minutes, and baseflow (sustained by groundwater) is reduced. Urban streams widen and deepen in response to increased flood frequency. Combined sewer overflow adds pollutants to flash flood pulses. Groundwater extraction causes irreversible land subsidence at 10–250 mm/yr.',
            color: BRAND.gold,
          },
          {
            id: 'coastal-starvation',
            label: 'Delta and Coastal Starvation',
            description: 'Sediment trapped behind dams fails to reach deltas and coasts. Without their natural sediment supply, deltas subside without replenishment (Mississippi: −75 km²/yr land loss; Nile: 30–60 m/yr erosion near mouth), beaches erode, and wetlands cannot keep pace with sea level rise. The combined effect of reduced sediment supply, subsidence from extraction, and rising sea level creates a coastal squeeze that threatens hundreds of millions of delta inhabitants.',
            color: BRAND.accent,
          },
          {
            id: 'geomorphic-legacies',
            label: 'Long-Duration Geomorphic Legacies',
            description: 'Human landscape modifications persist in the geological record. Mine tailings, dredge spoil islands, reservoir sediment deposits, and levelled urban surfaces will be recognisable in the rock record millions of years hence. Acid mine drainage persists for 500–1,000 years after mine closure. Subsided urban land is permanently lowered. River channels adjusted to urban runoff regimes recover naturally on timescales of decades to centuries after urbanisation, if given space to do so.',
            color: BRAND.amethyst,
          },
          {
            id: 'restoration-pathways',
            label: 'Restoration and Mitigation',
            description: 'Restoration strategies targeting different nodes of the cascade: reforestation and cover cropping reduce hillslope erosion; sediment bypass tunnels at dams route sediment to downstream channels; green infrastructure (rain gardens, permeable pavement, urban wetlands) reduce impervious cover runoff; managed realignment creates new coastal sediment sinks; river de-channelisation restores meander capacity and floodplain connectivity. Each approach directly targets a node in the human-modified sediment cascade.',
            color: BRAND.jade,
          },
        ],
        edges: [
          { from: 'accelerated-erosion', to: 'dam-interception',     label: 'Rivers carry elevated sediment load to reservoirs' },
          { from: 'dam-interception',    to: 'coastal-starvation',   label: 'Trapped sediment never reaches delta or coast' },
          { from: 'dam-interception',    to: 'urban-transformation', label: 'Hungry water scours urban reaches below dams' },
          { from: 'urban-transformation', to: 'coastal-starvation',  label: 'Urban channels deliver flash flood pulses to estuaries' },
          { from: 'coastal-starvation',  to: 'geomorphic-legacies',  label: 'Delta loss and shoreline recession are permanent at human timescales' },
          { from: 'restoration-pathways', to: 'accelerated-erosion', label: 'Reforestation and cover crops reduce source erosion' },
          { from: 'restoration-pathways', to: 'urban-transformation', label: 'Green infrastructure reduces impervious cover runoff' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Humans move approximately 57 Gt of sediment per year through all their activities. Approximately how does this compare to the natural sediment flux delivered by all rivers to the ocean, and what is the significance of this comparison?',
          a: [
            'Human sediment movement is roughly equal to the natural river flux (~15 Gt/yr), confirming that anthropogenic and natural processes are now approximately in balance for the first time in geological history',
            'Human movement (~57 Gt/yr (62.8 billion tons/yr)) is approximately 4× the natural river sediment flux (~15 Gt/yr (16.5 billion tons/yr)); this means Homo sapiens has become the dominant geomorphic agent on Earth\'s surface — a defining characteristic of the Anthropocene — with implications for soil loss, river sediment budgets, coastal starvation, and the long-term geological record',
            'Human sediment movement is only 10–15% of the natural background flux when glacial erosion and aeolian transport are included, making human impacts relatively minor on a planetary scale',
            'The comparison is not meaningful because human sediment movement is concentrated in construction and is immediately redeposited nearby, whereas river sediment moves hundreds of kilometres; only long-distance transport constitutes meaningful geomorphic work',
          ],
          correct: 1,
          explain: 'The ~57 Gt/yr (62.8 billion tons/yr) of human sediment movement (Wilkinson and McElroy 2007, revised by later studies) versus ~15 Gt/yr (16.5 billion tons/yr) of natural river delivery to the coast is one of the most quoted statistics in Anthropocene science. The four-fold excess establishes humans as the dominant geomorphic agent, surpassing rivers, wind, glaciers, and tectonic processes in annual sediment mobilisation. The significance extends beyond the numbers: human sediment movement is concentrated in specific locations (mines, construction sites, agricultural fields) and is often poorly managed, leading to local catastrophic erosion, river siltation, reservoir filling, and coastal sediment deficits. The comparison also underpins the argument for formalising the Anthropocene as a geological epoch — future geologists will find a distinct stratigraphic signature of this sediment redistribution. Option A is incorrect: 57 Gt ≠ 15 Gt. Option C is incorrect: while glacial erosion during ice ages was comparable in scale, current interglacial glacial erosion is a small fraction of human activity. Option D contains a partial truth (proximity matters for geomorphic effectiveness) but does not negate the fundamental significance of the comparison — much human sediment does travel long distances through river systems and reaches coasts.',
        },
        {
          q: 'Large dams are estimated to trap ~25% of the global fluvial sediment flux behind their reservoirs. What is the downstream geomorphic consequence of this sediment trapping for rivers below the dam?',
          a: [
            'Rivers below dams aggrade (deposit sediment) because the clear water released from the dam has reduced velocity and deposits its remaining load on the channel bed, raising the floodplain elevation',
            'Rivers below dams are unaffected because the reduced sediment load is compensated by the regulated (steadier) flow released from the dam, which maintains equilibrium channel geometry without net erosion or deposition',
            'Rivers below dams incise (cut downward) their channel beds because the clear, sediment-free water released from the dam has excess erosive capacity — "hungry water" — which erodes the channel bed and banks until the river re-equilibrates its sediment load by eroding new material from the channel; this incision can lower beds by 1–10 m over decades, undermine bridges and bank protection, and reduce groundwater levels in adjacent floodplains',
            'Rivers below dams widen their channels because reduced peak floods no longer maintain the channel shape; without large floods to flush sediment, material accumulates in pools and riffles, forcing the river to widen around the obstructions',
          ],
          correct: 2,
          explain: 'The concept of "hungry water" (Kondolf 1997) describes the erosion caused by sediment-depleted flow below dams. Rivers in dynamic equilibrium carry a sediment load that approximately matches their transport capacity at a given discharge. When a dam traps essentially all incoming sediment but releases the same (or regulated) water discharge, the outflow has the energy to transport sediment but virtually none to carry — it is "hungry" for sediment. To satisfy this capacity, the flow erodes the channel bed and banks immediately below the dam, extracting sediment from the alluvium that was deposited before dam construction. This incision progresses downstream (though attenuating with distance as tributaries add sediment), lowering the water table in adjacent floodplains, undermining bridge foundations, reducing the elevation of gravel bars important for fish spawning, and destabilising river banks. The Hoover Dam caused up to 7.5 m of bed incision below the dam; the Three Gorges Dam caused 12 m of incision in some reaches within 10 years of closure. Option A is incorrect: clear water has more, not less, erosive potential for a given discharge because it is not already carrying a sediment load. Option B is incorrect: the regulated flow does not compensate for sediment deficit. Option D partially describes a different phenomenon (channel widening from reduced flood frequency) that can also occur but is secondary to the dominant incision response.',
        },
        {
          q: 'Houston, Texas has subsided up to 3 m over the 20th century due to groundwater and oil extraction. Why is this subsidence essentially irreversible, even if extraction is stopped and aquifer water levels recover?',
          a: [
            'The extraction wells have physically removed material from beneath the surface, leaving permanent voids; the overlying sediment then falls into these voids and cannot be returned to its original elevation',
            'Clay layers in confined aquifer systems compact irreversibly under Terzaghi consolidation: when groundwater is extracted and effective stress increases, clay particles rearrange into a denser packing; when the aquifer is later recharged, elastic rebound recovers only a tiny fraction (<10%) of total settlement because the clay fabric has been permanently rearranged — bulk of the subsidence is plastic, not elastic',
            'Oil extraction removes the buoyancy that oil provides to surrounding sediment; once the oil is removed and replaced by water, the sediment is denser and heavier, causing permanent additional downward loading on the deeper substrate',
            'Subsidence is irreversible because it triggers a positive feedback: as the ground sinks, more groundwater is needed to pump against greater hydrostatic head, requiring continued extraction to maintain the same water supply; stopping extraction therefore causes water shortages that force resumption',
          ],
          correct: 1,
          explain: `The irreversibility of groundwater-induced subsidence is rooted in soil mechanics and specifically in the distinction between elastic and plastic (permanent) deformation. Aquifer systems consist of interbedded coarse-grained (sand, gravel) and fine-grained (clay, silt) layers. When groundwater is extracted, effective stress in the clay layers increases. Clays respond in two ways: (1) elastic compression — reversible changes in pore water pressure in the clay, which can be recovered when groundwater is recharged; and (2) plastic (inelastic) consolidation — irreversible rearrangement of clay platelets into a denser, more compact fabric as water is squeezed out along with the particles repositioning. Typically, elastic responses account for only 5–20% of total measured subsidence; the remainder is inelastic and permanent. This is why the USGS reports that even if groundwater extraction in the Houston-Galveston area were completely stopped, only a few centimetres of the 3 m of subsidence could be recovered. The same principle explains why Mexico City\'s 10 m of subsidence and Shanghai\'s 2.9 m are essentially permanent alterations to the urban landscape. Option A is physically incorrect: wells do not leave voids — the porous medium deforms as water is extracted. Option C is incorrect: oil is denser than water, and its replacement by water changes buoyancy only marginally and not in the direction described. Option D describes an economic/management feedback, not the geomechanical reason for irreversibility.`,
        },
        {
          q: `Urbanisation replaces permeable natural surfaces with impervious cover (roads, rooftops, parking lots). A catchment\'s impervious cover increases from 5% to 70% as a city develops. How does this change the flood response, and why?`,
          a: [
            'Flood peaks decrease because urban storm drain systems efficiently route water away from the surface, preventing surface flooding; the urban drainage infrastructure outpaces the increase in runoff',
            'Flood peaks increase 2–10× and peak arrival time shortens from hours to minutes, because impervious surfaces eliminate infiltration into the soil; rainfall becomes direct surface runoff almost immediately, concentrating the same rainfall volume into a much shorter, more intense discharge peak; baseflow (groundwater contribution) is also reduced because groundwater recharge is cut off, making summer low flows lower as well as storm flows higher',
            'Flood peaks remain similar but flood duration extends significantly, because the smooth urban surfaces slow water movement compared to rough natural vegetation, causing water to pond over larger areas for longer periods',
            'The urban heat island effect creates more intense local rainfall over cities than surrounding areas, so flood increases are driven primarily by increased precipitation rather than by changes in surface hydrology',
          ],
          correct: 1,
          explain: 'Urbanisation profoundly transforms the rainfall-runoff relationship through two main mechanisms. First, impervious surfaces eliminate infiltration: instead of 80–90% of a rainfall event soaking into the soil (as in a forested catchment), 70–80% becomes immediate surface runoff in a highly urbanised area. Second, the engineered drainage network — gutters, storm drains, concrete-lined channels — is designed to remove water as quickly as possible, which means the travel time from where rain falls to the catchment outlet is dramatically shortened. The combination of higher runoff fraction and shorter travel time produces flood hydrographs with much higher, sharper peaks arriving much sooner after rainfall. The ratio of peak urban discharge to peak natural discharge for the same storm is commonly 5–10× for catchments at 70% impervious cover. This Urban Runoff Effect (also called the Urban Flood Amplification) has been measured in hundreds of catchments globally and is the primary driver of the increased urban flooding that has accompanied 20th and 21st century urbanisation. The reduced groundwater recharge also lowers baseflow in urban streams during dry periods, producing "flashy" streams with extreme high-low discharge contrast. Option A is incorrect: drainage infrastructure moves water faster, amplifying rather than reducing flood peaks. Option C is incorrect: smooth urban surfaces reduce travel time, not increase it. Option D has partial truth (urban heat islands do enhance convective rainfall locally) but this effect is secondary to the surface hydrology change for typical rainfall events.',
        },
        {
          q: `A proposed large dam on a major delta-feeding river is expected to trap 85% of the river\'s sediment load. Which downstream geomorphic consequence would be most severe over a 50-year timescale, and why?`,
          a: [
            'Increased flooding immediately below the dam due to higher water levels caused by the backed-up reservoir water overtopping the banks along the reservoir margins and flooding tributary valleys',
            'Rapid delta progradation as the river channel below the dam aggressively erodes its bed and carries this new sediment supply out to the sea, building a larger delta than existed before dam construction',
            'Delta subsidence and coastal recession accelerating beyond natural rates as the sediment that previously sustained the delta surface against compaction and supplied beaches is intercepted behind the dam; the delta coast, already subsiding under its own weight, loses its external sediment supply, causing net land loss, increased saltwater intrusion, loss of wetlands and fisheries, and greater vulnerability to sea level rise and storm surge — with severe consequences for delta populations',
            'The primary effect over 50 years is reservoir siltation: the dam\'s reservoir fills rapidly with trapped sediment, reducing hydropower output and water storage to near zero within 50 years, making the dam economically worthless while causing minimal effects on the downstream delta',
          ],
          correct: 2,
          explain: 'On a 50-year timescale, the most geographically extensive and humanly significant consequence of sediment trapping is delta deterioration and coastal recession. Deltas are built from and sustained by riverine sediment: each year, the natural river replenishes the delta surface against compaction of young sediment (typically 5–10 mm/yr for recently deposited delta material) and supplies sand and mud to delta-front beaches and offshore bars. When 85% of this supply is intercepted, the delta experiences a severe sediment deficit. The results are documented in post-dam deltas worldwide: the Nile Delta has lost 30–60 m/yr of coastline near the Rosetta and Damietta mouths since the Aswan High Dam began operations (1970), reversing the slow progradation of the previous centuries. The Colorado Delta (USA/Mexico) has virtually ceased to exist as a functioning delta ecosystem since the river rarely reaches the sea due to upstream dams and diversions. The Ebro Delta (Spain) loses ~12 m/yr of beach. Populations of tens of millions on affected deltas face increased flooding, saltwater intrusion into agricultural land, and eventual land loss. Option A describes a reservoir bank effect that is real but localised to the reservoir margins, not a 50-year downstream consequence. Option B is incorrect: the channel below the dam incises rather than aggrading (hungry water effect), and incised sediment is largely reworked channel alluvium rather than new sediment delivered to the delta. Option D is partially true — reservoir siltation is a real concern at ~85% trap efficiency — but on a 50-year scale for a large reservoir, and with some reservoirs designed for longevity, the delta effects begin immediately at dam closure and are more geographically widespread.',
        },
      ],
    },
  ],
}

export default humanGeomorphology
