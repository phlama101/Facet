import { Wind, Globe, Layers, Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const aeolianDeserts: Lesson = {
  id: 'geom-101-1-3-1',
  title: 'Wind Erosion, Deflation, and Desert Landforms',
  track: 'geo',
  trackName: 'Geomorphology',
  level: 'Foundations',
  duration: '13 min',
  xpReward: 130,
  description: 'How wind shapes desert landscapes through erosion, deflation, and the creation of ventifacts, yardangs, and desert pavements',
  sources: [
    { org: 'USGS', title: 'USGS — Desert Geology',                                   url: 'https://www.usgs.gov' },
    { org: 'USDA', title: 'USDA — Wind Erosion Research',                            url: 'https://www.ars.usda.gov' },
    { org: 'GSA',  title: 'Geological Society of America',                            url: 'https://www.geosociety.org' },
    { org: 'Elsevier', title: 'Aeolian Research journal',                             url: 'https://www.journals.elsevier.com' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'How wind shapes desert landscapes through erosion, deflation, and the creation of ventifacts, yardangs, and desert pavements',
      body: `Aeolian (wind-driven) processes are the dominant geomorphic force in hyperarid and arid environments, shaping roughly one-third of Earth\'s land surface. Wind transports sediment in three modes: saltation — grains hop 10–60 cm above the surface after aerodynamic lift, accounting for 70–80% of total sand transport; suspension — fine dust and silt (<0.1 mm) are carried aloft over continental and oceanic distances; and reptation/surface creep — coarse grains roll forward under impact from saltating grains, accounting for roughly 25% of transport. The threshold wind velocity for entraining medium sand (~0.25 mm) is approximately 5 m/s at surface level.

Deflation is the lowering of a land surface by the wind removal of fine particles, leaving behind coarser lag material. Sustained deflation creates deflation hollows — shallow closed depressions, sometimes exceeding 100 m depth — as well as playas (seasonally inundated flat floors) and desert pavements. Desert pavements (termed reg in North Africa and the Middle East, serir in Libya, gibber in Australia) are closely interlocked mosaics of pebbles and gravels that armour the underlying finer material. Two competing hypotheses explain pavement formation: the classical lag-deposit model (deflation removes fines, concentrating coarse residuals) and the inflation model (aeolian silt infiltrates below stones and accumulates as a loessic vesicular A horizon, progressively lifting stones to maintain a surface position).

Erosional landforms of aeolian origin include ventifacts — pebbles and cobbles abraded and faceted by saltating sand, with smooth, polished faces (facets) oriented into the dominant wind; multiple facets record changes in wind direction over time. Yardangs are streamlined ridges of rock or indurated sediment sculpted by wind abrasion, aligned parallel to the dominant wind direction with a characteristic length:width ratio of approximately 10:1. Mega-yardangs in the central Sahara and Lut Desert of Iran reach 150 m in height and many kilometres in length. Blowouts are shallow elliptical deflation scours that develop where vegetation or surface crusts are breached.

Desert varnish — a dark, lustrous coating of iron and manganese oxides (birnessite, MnO₂) on exposed rock surfaces — is now understood to form primarily through microbial mediation: Mn-oxidising bacteria concentrate manganese from rainwater and dust far above crustal abundance, enabling radiocarbon dating of rock surfaces. Rock pediments (gently inclined bedrock slopes at mountain bases) and inselbergs (isolated residual hills) are characteristic macro-scale desert landforms shaped by a combination of chemical weathering and fluvial stripping under episodic rainfall.

On a global scale, aeolian processes are a significant geochemical transport mechanism: approximately 2 billion tonnes of dust are mobilised per year. The Sahara — principally the Bodélé Depression of Chad — supplies roughly 40 million tonnes per year of dust to the Amazon basin, delivering ~22,000 tonnes of phosphorus annually to nutrient-poor Oxisol soils and sustaining rainforest productivity. Saharan dust also fertilises the North Atlantic with iron, stimulating marine primary production. Dust preserved in polar ice cores records glacial-interglacial aridity cycles. Wind-deposited loess sequences (Chinese Loess Plateau: >200 m thick) are among the world\'s most fertile agricultural soils and provide continuous palaeoclimate records spanning millions of years. Aeolian processes operate on Mars, where global dust storms, dune fields, and yardang-like features have been imaged by orbital and surface missions.`,
      keyTerms: [
        {
          term: 'Saltation',
          def: 'Dominant aeolian transport mode (70–80%) in which sand grains are lifted by wind, arc through the air, and impact the surface, splashing other grains forward.',
        },
        {
          term: 'Deflation',
          def: 'Progressive lowering of a land surface by wind removal of fine particles, leaving a lag of coarser material; creates deflation hollows and desert pavements.',
        },
        {
          term: 'Ventifact',
          def: 'Rock or pebble abraded and faceted by saltating sand; smooth polished faces (facets) are oriented into the dominant wind direction.',
        },
        {
          term: 'Yardang',
          def: 'Streamlined ridge of rock or indurated sediment sculpted by wind abrasion, aligned parallel to dominant wind; length:width ratio ~10:1.',
        },
        {
          term: 'Desert Pavement',
          def: 'Tightly interlocked surface mosaic of pebbles (reg/serir/gibber) that armours underlying fines; formed by deflation or stone inflation through accumulating loess.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Aeolian Transport, Deflation, and Desert Landforms',
      body: `Wind shapes deserts through a cascade of processes: entrainment of grains above threshold velocity, transport by saltation and suspension, and deposition where energy falls. The resulting landforms — pavements, ventifacts, yardangs — record wind direction, intensity, and duration over geologic time.`,
      cards: [
        {
          name: 'Aeolian Transport: Saltation, Suspension, and Creep',
          icon: Wind,
          color: BRAND.accent,
          desc: 'Saltation dominates (70–80%): grains hop 10–60 cm above surface, splash other grains on landing. Suspension carries silt and clay globally. Reptation/creep rolls large grains forward under saltation impact.',
          examples: 'Dust storms (haboobs) in Sudan and Arizona; dust devils in desert basins; Saharan dust plumes reaching the Caribbean and Amazon each year.',
        },
        {
          name: 'Deflation and Desert Pavements',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Wind removes fine particles below threshold size, leaving a lag deposit of pebbles that forms desert pavement (reg in North Africa, gibber in Australia). Hamadas are bare rock surfaces stripped of fines. Deflation hollows can exceed 100 m depth.',
          examples: 'Qattara Depression, Egypt (−133 m, 19,605 km²) — one of the largest deflation basins on Earth; Australian gibber plains of the Simpson and Strzelecki deserts.',
        },
        {
          name: 'Ventifacts and Yardangs: Wind-Sculpted Rock',
          icon: Layers,
          color: BRAND.coral,
          desc: 'Ventifacts develop smooth, faceted surfaces facing the dominant wind direction; multiple faces record wind direction changes over time. Yardangs align with dominant wind at ~10:1 length:width ratio; km-scale \'mega-yardangs\' occur in the Sahara and Lut Desert, Iran.',
          examples: 'Lut Desert, Iran — largest known yardang field on Earth, with ridges reaching 150 m height; ventifacts in Antarctic Dry Valleys sculpted by katabatic winds exceeding 300 km/h.',
        },
        {
          name: 'Global Dust Cycle and Aeolian Geochemistry',
          icon: Activity,
          color: BRAND.gold,
          desc: '~2 billion tonnes of dust mobilised globally per year. Sahara is the dominant source. Dust fertilises oceans (iron) and the Amazon (phosphorus). Dust in ice cores records glacial-interglacial aridity. Loess soils are among the world\'s most fertile.',
          examples: 'Saharan dust supplies ~22,000 tonnes of phosphorus to the Amazon annually; Chinese Loess Plateau loess is 200+ m thick and preserves a continuous palaeoclimate record spanning ~22 million years.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Aeolian Process Cascade: From Wind Acceleration to Dust Export',
      body: 'How increasing wind velocity initiates sand entrainment, drives deflation of fine particles, builds desert pavements, and sculpts ventifacts and yardangs before exporting dust globally.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how wind acceleration triggers saltation and deflation, progressively creating desert pavements, ventifacts, and yardangs, with fine dust exported globally',
        nodes: [
          {
            id: 'wind-acceleration',
            label: 'Wind Acceleration',
            description: 'Wind speed exceeds threshold velocity (~5 m/s for medium sand). Turbulent boundary layer lifts grains through aerodynamic drag and lift. Fluid threshold: initial entrainment from rest. Impact threshold: lower velocity sustains transport once saltation is underway.',
            color: BRAND.accent,
          },
          {
            id: 'sand-saltation',
            label: 'Sand Saltation',
            description: 'Grains arc 10–60 cm above the surface; on impact they splash multiple surface grains (reptation) and eject others into saltation. Transport rate scales roughly with the cube of wind speed above threshold. Saltation accounts for 70–80% of total aeolian sand transport.',
            color: BRAND.jade,
          },
          {
            id: 'deflation-fines',
            label: 'Deflation of Fines',
            description: 'Saltation impacts and direct aerodynamic lift remove silt and clay from the surface into suspension. Progressive removal of fines lowers the land surface (deflation). Deflation hollows and playas develop in closed basins. Rates can reach centimetres per century in exposed settings.',
            color: BRAND.gold,
          },
          {
            id: 'desert-pavement',
            label: 'Desert Pavement Formation',
            description: 'Removal of fines concentrates coarse lag pebbles into an interlocking armour (lag-deposit model) or aeolian silt accumulates below stones, inflating the surface and lifting stones (inflation model). Once formed, pavement inhibits further deflation. Vesicular A horizon develops beneath pavement under the inflation model.',
            color: BRAND.coral,
          },
          {
            id: 'ventifact-yardang',
            label: 'Ventifact / Yardang Development',
            description: 'Saltating sand abrades exposed rock surfaces. Ventifacts acquire smooth facets oriented into the wind; multiple facets record changing wind regimes. Yardangs develop from initial bedrock irregularities; wind scours flanks and accelerates in gaps, producing streamlined 10:1 ridges over thousands of years.',
            color: BRAND.amethyst,
          },
          {
            id: 'dust-export',
            label: 'Dust Export',
            description: 'Silt and clay in suspension are transported thousands of kilometres. Saharan dust reaches the Amazon (~40 Mt/yr) and fertilises iron-limited ocean regions. Dust settles as loess in downwind areas, building fertile agricultural soils. Dust flux in ice cores tracks past aridity and atmospheric circulation.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'wind-acceleration', to: 'sand-saltation',    label: 'Grain entrainment above threshold velocity' },
          { from: 'sand-saltation',    to: 'deflation-fines',   label: 'Impact splash mobilises fine particles' },
          { from: 'deflation-fines',   to: 'desert-pavement',   label: 'Lag concentration / stone inflation' },
          { from: 'sand-saltation',    to: 'ventifact-yardang', label: 'Abrasion of exposed rock surfaces' },
          { from: 'deflation-fines',   to: 'dust-export',       label: 'Fine particles enter long-range suspension' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Saltation accounts for approximately 70–80% of aeolian sand transport. What happens when a saltating grain lands on a sandy surface?',
          a: [
            'The grain stops immediately; its kinetic energy is absorbed by static friction with surface grains and no secondary movement occurs',
            'Impact splash: the landing grain transfers momentum to surface grains, ejecting multiple grains in a splash cratering effect; some ejected grains enter saltation themselves (chain reaction), while others roll forward (reptation/creep); this cascade amplifies total transport far beyond direct aerodynamic lift and explains why sand transport rates increase nonlinearly with wind speed above threshold',
            'The saltating grain bounces vertically and re-enters exactly the same saltation arc height, with no energy transferred to neighbouring grains',
            'All energy is converted to heat through grain-to-grain friction; surface grains are compressed but not displaced',
          ],
          correct: 1,
          explain: 'When a saltating grain strikes a sandy bed, it does not simply stop. The impact transfers momentum to surrounding surface grains in a process called splash cratering or reptation: the impacting grain ejects several grains sideways and forward, some of which are launched high enough to enter saltation themselves, while others roll short distances (reptation or creep). This chain-reaction mechanism is critical — it means that once saltation is established, wind speeds below the initial fluid threshold can sustain transport (the lower impact threshold), and that sand transport flux scales roughly with the cube of wind speed because each faster grain triggers a larger splash. The cascade of impacts also explains why saltation transport is so efficient: the aerodynamic lift of the wind alone accounts for only a fraction of grains in motion; most are entrained by grain-to-grain impact energy.',
        },
        {
          q: 'A desert pavement is a closely packed layer of pebbles and gravels that protects the underlying finer material. What is the primary mechanism of desert pavement formation according to the inflation model?',
          a: [
            'Gradual upward migration of stones through accumulating fine sediment: aeolian silt (loess) accumulates below the surface by infiltrating through stone gaps; as the fine layer thickens, stones are progressively lifted by wetting-drying and freeze-thaw cycles, rising through the accumulating fines to maintain a surface position; the result is a well-developed pavement atop a loessic vesicular A horizon — contrasting with the earlier lag-deposit model',
            'Wind deflation removes all particles below a critical size, leaving only the coarsest pebbles behind as a residual lag; the pebbles gradually interlock under gravity to form the pavement surface',
            'Chemical weathering of the bedrock produces a clay-rich horizon that swells when wet, forcing pebbles upward to concentrate at the surface',
            'Rainfall splash erosion transports fine particles away from the surface, concentrating coarse grains; the pebbles then imbricate under repeated raindrop impact',
          ],
          correct: 0,
          explain: 'The inflation model, championed by McFadden, Wells, and Jessup (among others), proposes that desert pavements are not simply lag deposits left after deflation removes fines. Instead, aeolian dust and silt infiltrate downward through the gaps between surface stones and accumulate as a loessic layer beneath the pavement. As this fine layer thickens, physical processes (wetting-drying expansion, occasional frost, and bioturbation) lift the stones upward through the accumulating fines, maintaining them at the surface. The diagnostic evidence for this model is the presence of a vesicular A horizon (Av horizon) — a silt-rich layer with characteristic bubble-like pores — directly beneath desert pavements in many arid regions. The Av horizon is a primary loessic deposit, not a residual. Clast surfaces in well-developed pavements also show desert varnish and weathering rinds that would be destroyed by burial if the lag model were correct.',
        },
        {
          q: 'Yardangs in the Sahara and Lut Desert align with the dominant wind direction, with a length:width ratio of approximately 10:1. What process creates this streamlined shape?',
          a: [
            'Chemical dissolution along fractures perpendicular to wind flow removes rock preferentially on the sides, leaving a narrow resistant core',
            'Deposition of sand on the downwind side of an obstacle progressively buries and protects the leeward face while the windward face is deflated away',
            'Differential erosion: the blunt upstream face is abraded by saltating sand, while the flanks and tail are eroded by wind acceleration in the gap between yardangs; the shape that minimises drag is self-maintained as a streamlined form; yardangs grow from initial irregularities (hard rock outcrops, compacted sediment) and develop over thousands of years; mega-yardangs in the Lut Desert reach 150 m height and kilometres in length',
            'Tectonic fracturing along the dominant wind azimuth creates parallel joint sets that are subsequently exploited by deflation, producing ridges that happen to align with wind',
          ],
          correct: 2,
          explain: 'Yardangs are aerodynamically sculpted by the combination of abrasion on their windward faces (where saltating sand is most energetic) and wind acceleration in the corridors between adjacent ridges (which scours the flanks). The resulting streamlined teardrop or whale-back form is essentially the shape that presents minimum aerodynamic resistance to the prevailing wind — analogous to an airfoil or hull shape — and is therefore self-reinforcing: any protrusion is abraded away, any concavity that slows wind-carried abrasion is protected. Initial irregularities in rock or indurated sediment (erodibility contrasts, topographic bumps) act as nuclei. Mega-yardangs of the Lut Desert in Iran, imaged by NASA and ESA satellites, are among the largest aeolian erosional landforms on Earth, with crests at ~150 m elevation above the intervening corridors and lengths of several kilometres.',
        },
        {
          q: 'How does Saharan dust transported across the Atlantic contribute to the ecology of the Amazon rainforest?',
          a: [
            'Iron supply: the Amazon basin lacks sufficient iron for plant enzyme function; Saharan dust delivers soluble iron that directly limits primary productivity in the forest',
            'Seed dispersal: dust storms carry plant propagules from African savanna species that have colonised the Amazon since the last glacial maximum',
            'pH buffering: alkaline Saharan dust neutralises the naturally acidic Amazon soils, allowing a wider range of crop plants to grow in agricultural clearings',
            'Phosphorus fertilisation: the Amazon basin is underlain by old, highly weathered Oxisol soils that are severely phosphorus-limited; Saharan dust (derived principally from the Bodélé Depression, Chad) carries ~22,000 tonnes of phosphorus per year across the Atlantic, replacing phosphorus lost by leaching and river export; satellite-tracked dust plumes have been linked directly to productivity patterns in the Amazon; iron in the dust also fertilises the equatorial Atlantic ocean',
          ],
          correct: 3,
          explain: 'The Amazon\'s extraordinarily high biodiversity and productivity sit atop some of the world\'s most nutrient-poor soils. Oxisols — deeply weathered tropical soils — have lost virtually all their original calcium, potassium, and phosphorus through millions of years of leaching in the humid tropics. Phosphorus is a critical macronutrient for plant growth (ATP, DNA, cell membranes) and there is no atmospheric source of phosphorus equivalent to nitrogen fixation. Research by Koren et al. (2006) and Yu et al. (2015) used MODIS satellite aerosol data to quantify the Sahara-to-Amazon dust flux and geochemical analysis to confirm phosphorus delivery rates of ~22,000 tonnes/year. The primary source region is the Bodélé Depression — a dried lake bed in northern Chad rich in diatomite (fossilised diatom silica) that is the world\'s most productive dust source. Without this trans-Atlantic fertilisation, Amazon forest productivity would be significantly lower.',
        },
        {
          q: 'Desert varnish is a dark coating of iron and manganese oxides that develops on rock surfaces in arid environments. What is now understood to be the primary formation mechanism?',
          a: [
            'Inorganic precipitation: evaporation of thin films of rainwater concentrates dissolved Fe²⁺ and Mn²⁺ from rock weathering until they reach saturation and precipitate as oxide films',
            'Microbial mediation: varnish is formed by Mn-oxidising bacteria that concentrate Mn²⁺ from rainwater, dust, and rock weathering solutions onto rock surfaces; the Mn oxidises to MnO₂ (birnessite); the bacteria inhabit the varnish surface layer; purely abiotic precipitation cannot explain the strong Mn enrichment (Mn/Fe ratios 50–100× crustal abundance); radiocarbon in varnish organic matter enables age dating of rock surfaces',
            'Wind abrasion polishing: saltating sand grains mechanically polish the rock surface and smear iron-bearing minerals into a thin continuous coating that oxidises in UV light',
            'Dew condensation cycling: nocturnal dew dissolves surface minerals and, upon daytime evaporation, precipitates oxides from the rock\'s own mineral content, requiring no external source',
          ],
          correct: 1,
          explain: 'The strongly anomalous geochemistry of desert varnish — Mn/Fe ratios 50–100 times higher than the underlying rock or crustal average — cannot be explained by simple evaporative concentration of local weathering solutions, because Mn is not abundant in most host rocks. The biogenic hypothesis, supported by decades of work by Dorn, Oberlander, and others, proposes that chemolithotrophic Mn-oxidising bacteria (genera such as Metallogenium and Pedomicrobium) catalyse the oxidation of dissolved Mn²⁺ (sourced from dust, rainwater, and trace rock weathering) to insoluble MnO₂ (birnessite), which accumulates as a laminated film. Scanning electron microscopy and molecular analyses have confirmed microbial communities living within the varnish. The practical importance of varnish is that organic matter trapped within successive varnish layers can be radiocarbon-dated, providing minimum ages for rock surface stability — this technique has been used to date petroglyphs, fault scarps, and desert pavement formation across the American Southwest and Arabia.',
        },
      ],
    },
  ],
}

export default aeolianDeserts
