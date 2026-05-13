import { Layers, Waves, Mountain } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const weatheringErosion: Lesson = {
  id: 'geol-101-1-5-2',
  title: 'Weathering and Erosion Landforms',
  track: 'geo',
  trackName: 'Geology',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 150,
  description: "Arches National Park's 2,000+ stone arches weren't carved by rivers or hands — ice expanded in cracks and acid dissolved cement. Weathering is the invisible sculptor of every landscape.",
  sources: [
    { org: 'USGS', title: 'Landslides and Mass Wasting (Public Domain)', url: 'https://www.usgs.gov/programs/landslide-hazards' },
    { org: 'NPS',  title: 'Geology Fieldnotes — Weathering and Erosion',  url: 'https://www.nps.gov/subjects/geology/weathering.htm' },
    { org: 'USGS', title: 'Water Science — Karst',                        url: 'https://www.usgs.gov/special-topics/water-science-school/science/karst-topography' },
    { org: 'OpenStax', title: 'Physical Geology, 2nd ed. (CC-BY 4.0)',   url: 'https://openstax.org/books/physical-geology-2e' },
    { org: 'UCAR Center for Science Education', title: 'Earth surface processes', url: 'https://scied.ucar.edu/learning-zone/earth' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The invisible sculptor',
      body: `Arches National Park in Utah contains more than 2,000 natural stone arches — the highest concentration on Earth. None were carved by rivers. None were cut by human hands. They formed through two processes so slow they are imperceptible on human timescales: water freezing in cracks and expanding with enough force to split rock, and slightly acidic rainwater dissolving the mineral cement that binds sandstone grains together. Remove the cement and the grains fall away; repeat the process selectively along fractures and weak zones for millions of years, and arches, fins, and towers emerge from what was once a flat sandstone plateau.

This is **weathering** — the breakdown of rock at Earth's surface — and it is the first step in every surface process that shapes landscapes. Without weathering, there would be no sediment for rivers to carry, no clay minerals for soils, no dissolved calcium for limestone-building organisms in the sea. Weathering feeds the sedimentary side of the rock cycle (Lesson 1.3.3) and prepares material for transport by water, wind, ice, and gravity.

Weathering comes in two fundamental forms. **Mechanical (physical) weathering** breaks rock into smaller pieces without changing its chemical composition — the same minerals are present, just in smaller fragments. **Chemical weathering** alters the minerals themselves, converting them into new substances stable under surface conditions. Both operate simultaneously on every exposed rock surface, but climate and rock type determine which dominates and how fast the landscape changes. This lesson maps the major weathering processes to the landforms they create — from the granite domes of Yosemite to the disappearing limestone landscapes of karst country.`,
      keyTerms: [
        {
          term: 'Mechanical weathering',
          def: "The physical breakdown of rock into smaller fragments without changing the chemical composition of the minerals. Processes include frost wedging, thermal expansion and contraction, pressure release, salt crystallisation, and biological forces. Increases surface area, accelerating chemical weathering.",
        },
        {
          term: 'Chemical weathering',
          def: "The alteration of rock-forming minerals by chemical reactions at Earth's surface, converting them into new, more stable substances. Main processes: dissolution (minerals dissolve in water or acid), hydrolysis (minerals react with water to form clay minerals), oxidation (iron-bearing minerals react with oxygen to form iron oxides). Rate increases with temperature and moisture.",
        },
        {
          term: 'Erosion',
          def: "The transport of weathered material (sediment) away from its source by water, wind, ice, or gravity. Weathering produces the material; erosion moves it. Together they lower landscapes over geologic time.",
        },
        {
          term: 'Mass wasting',
          def: "The downslope movement of rock, soil, and sediment under gravity, without a fluid transport medium. Ranges from slow (soil creep, ~1 cm/year) to catastrophic (rockfall, debris flow, landslide). The primary process shaping steep slopes.",
        },
        {
          term: 'Karst',
          def: "A landscape formed primarily by the chemical dissolution of soluble rock — typically limestone or dolomite — by slightly acidic groundwater. Characterised by sinkholes, caves, disappearing streams, springs, and (in tropical settings) steep limestone towers. Underlies ~20% of Earth's land surface.",
        },
      ],
    },
    {
      type: 'concept',
      title: 'Breaking rock, shaping landscapes',
      body: `**Mechanical weathering — breaking without changing.** The most powerful mechanical weathering process in cold climates is **frost wedging**. Water expands approximately 9% in volume when it freezes. When water seeps into a crack in rock and freezes overnight, the expansion exerts pressures of up to 200 MPa — enough to split almost any rock. Repeated freeze-thaw cycles progressively widen cracks and pry off fragments. The angular blocks of rock that accumulate at the base of cliff faces — **talus slopes** or scree — are the direct product of frost wedging. The sharp angularity of the fragments reflects the mechanical nature of the breakage: no chemical alteration has rounded the edges. **Pressure release** (exfoliation) is the second major mechanical process. Deep underground, rock is compressed by the weight of kilometres of overlying material. When erosion removes that overburden, the rock expands upward and outward, developing curved fractures parallel to the surface called **sheet joints**. As weathering peels away the outer sheets along these joints, the result is a rounded dome — the process that shaped Yosemite's Half Dome and El Capitan, the granite domes of the Brazilian highlands, and Stone Mountain in Georgia. **Thermal expansion** occurs where extreme temperature swings between day and night (desert environments, dark-coloured rock surfaces) cause repeated expansion and contraction that eventually fatigue and crack the outer layer. **Salt crystallisation** occurs in arid coastal and desert environments: saline water wicks into pores, evaporates, and growing salt crystals exert pressure that disaggregates the rock.

**Chemical weathering — changing the minerals.** While mechanical weathering breaks rock apart, chemical weathering converts the minerals into new substances. The most dramatic example is **dissolution**: limestone (calcium carbonate, CaCO₃) reacts with carbonic acid (CO₂ dissolved in rainwater, forming H₂CO₃) to produce calcium and bicarbonate ions that are carried away in solution. The limestone is literally eaten away, grain by grain and crystal by crystal. **Hydrolysis** attacks silicate minerals: feldspar (the most common mineral in continental crust) reacts with water to produce clay minerals, silicic acid, and dissolved cations. This is why granite weathers to gritty, sandy regolith — the feldspar crystals hydrolyse to clay while the more resistant quartz grains survive. **Oxidation** converts iron-bearing minerals (pyroxene, olivine, biotite, pyrite) to iron oxides and hydroxides — the rust-coloured staining visible on many rock faces and the source of the red and orange colour of tropical soils and the classic red rock landscapes of the American Southwest.

**Climate and rock type control weathering rate.** Chemical weathering requires water and proceeds faster at higher temperatures — reaction rates roughly double for every 10°C temperature increase. Hot, wet tropical climates produce the most intense chemical weathering: granite weathers to deep profiles of clay-rich regolith tens of metres thick; basalt weathers to bright red laterite soils rich in iron and aluminium oxides. Cold, dry polar and desert climates produce minimal chemical weathering — ancient granites in Antarctica have been exposed for millions of years with almost no chemical alteration. Mechanical weathering dominates in cold climates (frost action) and in extreme temperature-swing deserts. Rock type matters equally: limestone dissolves readily under any moist climate; granite is highly resistant to chemical weathering; sandstone weathers by loss of its cement, liberating the quartz grains; basalt weathers rapidly in tropical settings where the olivine and pyroxene are highly reactive.

**Karst topography — landscape consumed from within.** When limestone underlies a landscape and rainfall is sufficient to keep groundwater slightly acidic, dissolution progressively hollows out the rock from below and within. **Sinkholes** form where the roof of a dissolving cavity collapses, creating circular depressions that can appear suddenly in developed areas. **Caves** develop as acidic groundwater follows fractures and bedding planes, dissolving the limestone to create passages — some of the largest caves on Earth (Mammoth Cave, Kentucky; Lechuguilla Cave, New Mexico) formed this way. Where the water table drops, cave passages become air-filled and speleothems (stalactites and stalagmites) grow from calcium carbonate precipitating out of solution. In humid tropical climates where dissolution is extreme, limestone landscapes can develop into dramatic **tower karst** — isolated steep-sided limestone hills rising abruptly from a flat plain, like the famous landscapes of Guilin in China and Halong Bay in Vietnam. Karst landscapes underlie roughly 20% of Earth's land surface and supply drinking water to ~25% of the world's population through karst aquifers.

**Erosion landforms — the sculptural results.** When mechanical and chemical weathering operate on different rock types within the same landscape, differential resistance creates distinctive landforms. **Tors** are rounded, isolated clusters of boulders on hilltops or slopes, typically in granite terrain. They form when subsurface chemical weathering attacks the rock along intersecting fracture systems, rounding the corners of blocks (spheroidal weathering); subsequent erosion removes the surrounding weathered material (saprolite), leaving the more resistant core boulders standing proud — the classic landscape of Dartmoor in England. **Hoodoos** are tall, thin spires of rock capped by a harder resistant layer that protects the softer rock below from rain erosion; the soft material beneath weathers and erodes faster than the cap, producing the mushroom or goblin shape. Bryce Canyon's vivid red and orange hoodoos are the most famous example, formed in soft Eocene lake sediments capped by harder layers. **Natural arches** form in sandstone when slightly acidic water dissolves the cement along intersecting fractures and erosion progressively removes material, leaving a freestanding arch when the wall thins to a passageway.`,
      cards: [
        {
          name: 'Physical Weathering',
          icon: Layers,
          color: BRAND.gold,
          desc: "Breaks rock without changing mineral chemistry. Frost wedging: water expands 9% on freezing → splits rock along cracks → talus slopes of angular fragments. Pressure release (exfoliation): removal of overburden → curved sheet joints develop → rounded domes (Yosemite's Half Dome, El Capitan). Thermal expansion: day-night temperature cycles crack desert rock surfaces. Salt crystallisation: evaporating saline water grows crystals in pores → disaggregation. Dominant in cold and arid climates.",
          examples: "Talus slopes: frost-wedged angular blocks · Half Dome: exfoliation dome · Arches NP: frost + cement dissolution · Dartmoor tors: spheroidal weathering",
        },
        {
          name: 'Chemical Weathering & Karst',
          icon: Waves,
          color: BRAND.accent,
          desc: "Alters mineral chemistry. Dissolution: limestone + carbonic acid → calcium ions in solution → karst (sinkholes, caves, towers). Hydrolysis: feldspar + water → clay minerals + dissolved ions → granite weathers to sandy grus. Oxidation: iron minerals + oxygen → iron oxides → red/orange soils and rock. Rate doubles per 10°C warming. Dominates in hot, wet tropics. Karst: ~20% of Earth's land surface; Mammoth Cave (KY), tower karst (Guilin China), Halong Bay (Vietnam).",
          examples: "Mammoth Cave: karst dissolution · Guilin tower karst: tropical limestone · Laterite: tropical basalt weathering · Rust staining: iron oxidation",
        },
        {
          name: 'Erosion Landforms & Mass Wasting',
          icon: Mountain,
          color: BRAND.coral,
          desc: "Mass wasting: downslope movement under gravity — soil creep (slow, ~1 cm/yr), rockfall, landslide, debris flow. Differential weathering creates distinctive landforms: Tors — rounded granite boulders left after saprolite erosion (Dartmoor). Hoodoos — soft rock capped by resistant layer, erodes into spires (Bryce Canyon). Natural arches — cement dissolution along fractures in sandstone (Arches NP, 2,000+ arches). Scree/talus — angular frost-wedged blocks at cliff base.",
          examples: "Bryce Canyon hoodoos · Arches NP: 2,000+ arches · Dartmoor tors: granite · Rockfall talus: cliff base accumulation",
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "A hiker in the Scottish Highlands notices angular blocks of granite scattered across a hillside, while in the Amazon Basin a geologist finds granite buried under 20 metres of red clay-rich soil. Both are granite. What accounts for the difference in weathering character?",
          a: [
            "The Scottish granite is younger than the Amazonian granite; older rocks weather chemically while younger rocks break apart mechanically",
            "The Scottish Highlands have cold winters with many freeze-thaw cycles and relatively dry summers, promoting mechanical frost wedging that produces angular fragments; the Amazon has constant heat and heavy rainfall that drives intense chemical weathering — hydrolysis converts feldspar to clay while oxidation produces the red iron-oxide-rich laterite",
            "Granite in the Scottish Highlands is more resistant to weathering than Amazonian granite because it contains less feldspar; the chemical composition of the rock, not the climate, determines whether weathering is mechanical or chemical",
            "Both environments produce the same type of weathering — the angular blocks in Scotland and the clay in the Amazon are both products of chemical dissolution of the granite's feldspar crystals",
          ],
          correct: 1,
          explain: "Rock age (A) does not determine weathering type — the same granite exposed in two different climates will weather differently regardless of its age; climate is the controlling variable for weathering style. The correct answer is B: weathering type and intensity are primarily controlled by climate — specifically temperature and moisture availability; the Scottish Highlands have cold winters with many freeze-thaw cycles (water enters cracks, freezes, expands, and pries apart the rock) producing angular frost-wedged fragments that accumulate as scree or talus; the Amazon Basin has high temperatures year-round and extremely high rainfall that maintains continuous moisture, driving intense chemical weathering — hydrolysis progressively converts feldspar crystals to clay minerals, and oxidation of iron-bearing biotite mica produces the iron oxides that give the laterite soil its red colour; after millions of years of this intense chemical attack, the weathered profile can extend 20 m or more below the surface. Granite composition varies somewhat (C) but Scottish and Amazonian granites are mineralogically similar; the climate difference, not composition, drives the different weathering regimes. The two environments do not produce the same type of weathering (D) — angular frost-wedged blocks and clay-rich laterite are fundamentally different products of mechanical and chemical weathering respectively.",
        },
        {
          q: "A road crew in Kentucky discovers a sinkhole has opened overnight in a field, swallowing a vehicle. The bedrock is limestone. What process caused the sinkhole, and what does this reveal about the subsurface geology?",
          a: [
            "An underground river eroded away the soil from below; sinkholes in limestone areas are always caused by subsurface stream erosion rather than chemical processes",
            "Slightly acidic groundwater (rainwater charged with dissolved CO₂) has been slowly dissolving the limestone along fractures and bedding planes, forming a subsurface cavity; when the roof of the cavity became too thin to support itself, it collapsed suddenly, producing the sinkhole — revealing that the limestone beneath is honeycombed with solution cavities characteristic of karst topography",
            "The limestone was compressed by the weight of overlying soil until it fractured and collapsed; sinkholes form wherever limestone bedrock is too weak to support the soil above it regardless of water chemistry",
            "Frost wedging at depth cracked the limestone during the previous winter; the spring thaw released the fragments and the overlying soil collapsed into the resulting void",
          ],
          correct: 1,
          explain: "Subsurface streams do contribute to karst development (A), but the primary agent of limestone dissolution is chemical — carbonic acid formed when CO₂ dissolves in rainwater; the statement that sinkholes are 'always' caused by stream erosion rather than chemical processes is incorrect. The correct answer is B: Kentucky sits on the Interior Low Plateaus, underlain by thick Mississippian-age limestone; rainfall absorbs CO₂ from the soil and atmosphere, forming weak carbonic acid (H₂CO₃); this acidic groundwater percolates along fractures and bedding planes in the limestone, slowly dissolving the calcium carbonate and carrying it away in solution; over thousands to millions of years, this process creates a network of underground cavities, tunnels, and caves (Kentucky contains Mammoth Cave, the world's longest known cave system at 676 km); when a cavity roof becomes too thin to support the overlying material, it collapses suddenly — producing a sinkhole that can appear without warning; the sudden sinkhole opening reveals the honeycombed karst aquifer system beneath. Limestone is not unusually weak under compressive stress (C) — it fractures under tension but supports heavy overburden for millions of years; collapse occurs only when dissolution has removed material. Frost wedging (D) requires freeze-thaw cycles and operates primarily near the surface; it does not penetrate to the depths where karst cavities form, and Kentucky's climate does not produce frost penetration sufficient to collapse bedrock.",
        },
        {
          q: "Bryce Canyon's hoodoos are tall, thin spires of reddish rock with wider, harder capstones protecting narrower columns below. Natural arches in the same region form when thin walls of sandstone develop holes that grow into spanning arches. What single underlying process drives the formation of both landforms?",
          a: [
            "Wind abrasion — sand grains carried by wind sandblast the rock surface, preferentially eroding softer layers and leaving harder layers as caps; arch formation occurs where wind erosion bores completely through thin walls",
            "Differential weathering and erosion — harder rock layers or more resistant zones weather and erode more slowly than surrounding softer material; in hoodoos the cap protects the column below; in arches the cement dissolves preferentially along fractures, and erosion removes the weakened material leaving the spanning arch when a wall thins to a hole",
            "Stream erosion — ancient rivers carved both features by flowing through slots and around pillars of rock; the hoodoo caps are stream-deposited gravel bars and the arches are former river meander cutoffs",
            "Frost wedging alone — repeated freeze-thaw cycles progressively remove material from the sides of rock columns leaving hoodoos, and bore through thin walls leaving arches; differential hardness plays no role",
          ],
          correct: 1,
          explain: "Wind abrasion (A) does occur in arid environments and can polish rock surfaces, but it is not strong enough to produce the tall hoodoos of Bryce Canyon — wind abrasion operates most effectively near the ground where sand concentration is highest, which would undercut columns rather than preserve them; and arches form in locations with minimal wind abrasion relative to water-driven weathering. The correct answer is B: both hoodoos and natural arches are products of differential weathering and erosion — the process by which rocks of different composition or structure weather and erode at different rates, leaving the resistant material standing while the less resistant material is removed; in hoodoos, a harder capstone layer (more resistant limestone or dolomite) protects the softer material directly beneath it from rain splash and direct dissolution, while the exposed sides of the softer rock weather and erode more rapidly, producing the characteristic mushroom or goblin shape; in sandstone arches, slightly acidic water dissolves the mineral cement (iron oxide or calcium carbonate) that binds the sand grains, with dissolution proceeding fastest along fractures; erosion removes the disaggregated grains, and where a fin of sandstone thins along two intersecting fracture zones, a hole forms and grows into an arch. Stream erosion (C) did not form Bryce Canyon's hoodoos — Bryce is an eroded edge of the Paunsaugunt Plateau, shaped by rainwater and frost, not ancient rivers; natural arches also form without rivers. Frost wedging (D) does contribute to hoodoo formation in Bryce Canyon (which sits at ~2,400 m elevation with many freeze-thaw cycles per year), but differential hardness is essential — without the resistant capstone, frost wedging would erode the column uniformly without producing the cap-and-column shape.",
        },
        {
          q: "Yosemite Valley's granite walls show large curved sheets of rock that have progressively peeled away from the cliff face, leaving smooth, rounded surfaces. On the valley floor below, fresh angular slabs lie where they fell. What process produced the curved fractures that allow these sheets to peel off, and what originally triggered it?",
          a: [
            "Chemical weathering — slightly acidic rainwater has dissolved the mineral cement between crystal grains along curved planes parallel to the surface, weakening the rock until sheets detach under gravity",
            "Frost wedging — water repeatedly freezes in curved cracks running parallel to the cliff face; the 9% volume expansion of ice progressively widens these cracks over thousands of freeze-thaw cycles until sheets are pried loose",
            "Pressure release (exfoliation) — when erosion removes the kilometres of overlying rock that once compressed the granite, the unloading allows the granite to expand outward; this expansion generates curved sheet joints parallel to the newly exposed surface along which rock progressively peels away",
            "Tectonic faulting — the Sierra Nevada batholith is cut by curved reverse faults that formed when horizontal compressive stress from the adjacent subduction zone buckled the granite; erosion subsequently exposed these fault planes",
          ],
          correct: 2,
          explain: "Chemical weathering (A) can round rock surfaces over time (spheroidal weathering) but operates grain by grain through dissolution and hydrolysis — it does not produce the large, curved, parallel sheet joints that extend metres to tens of metres into the rock face; the sheets described are thick rock slabs defined by structural fractures, not chemically disaggregated surfaces. Frost wedging (B) does produce rock fracturing and contributes to debris accumulation at cliff bases, but it operates in pre-existing cracks rather than creating new curved fractures parallel to the surface; frost wedging produces angular fragments, not the smooth curved exfoliation sheets described. The correct answer is C: pressure release (also called exfoliation or unloading) is the dominant process forming curved sheet joints in massive rock like granite; during its formation, the Sierra Nevada granite was buried under kilometres of overlying rock and subjected to enormous compressive stress; as erosion over millions of years removed the overburden, the confining pressure on the granite decreased; rock that was compressed under great weight expands when the load is removed — the expansion is primarily outward (perpendicular to the new free surface), generating tensile stress and curved fractures called sheet joints parallel to the topographic surface; progressive peeling along these joints produces the characteristic smooth, onion-skin domes and rounded cliff faces of Yosemite. Reverse faults (D) are produced by compressive tectonic forces and dip at angles to the surface — they are not curved and parallel to the topography; the Sierra Nevada's structural geology does record compressional tectonics during Mesozoic subduction, but the exfoliation joints that produce the peeling sheets are not tectonic faults.",
        },
      ],
    },
  ],
}

export default weatheringErosion
