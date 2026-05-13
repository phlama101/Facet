import { Layers, Globe, Activity, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const glacialErosionLandforms: Lesson = {
  id: 'glac-101-1-3-1',
  title: 'Glacial Erosion and the Landscapes Ice Carves',
  track: 'cli',
  trackName: 'Glaciology',
  level: 'Foundations',
  duration: '13 min',
  xpReward: 130,
  description: 'How glaciers erode bedrock through abrasion and plucking, and the spectacular landforms — cirques, arêtes, fjords, and drumlins — they leave behind',
  sources: [
    { org: 'USGS', title: 'USGS — Glacial Landforms',                                    url: 'https://usgs.gov/programs/climate-research-development-program' },
    { org: 'NSIDC', title: 'NSIDC — Glaciers and Climate Change',                        url: 'https://nsidc.org' },
    { org: 'BGS',  title: 'BGS — British Geological Survey: Glacial Geomorphology',      url: 'https://bgs.ac.uk' },
    { org: 'OpenStax', title: 'OpenStax Physical Geography — Glacial Processes',         url: 'https://openstax.org' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Reading the landscape: how glaciers sculpt mountains and valleys over millennia',
      body: `Glaciers are among the most powerful erosional agents on Earth, capable of carving kilometres-deep valleys and reshaping entire mountain ranges over thousands to millions of years. Two fundamental mechanical processes drive glacial erosion. Abrasion occurs when rock fragments — clasts — become entrained in the base of the glacier and act like sandpaper, grinding the bedrock beneath into smooth polished surfaces and producing rock flour: silt-sized particles (0.001–0.1 mm) so fine they remain suspended in meltwater, giving proglacial lakes their characteristic turquoise \'glacial milk\' colour. Plucking (or quarrying) operates differently: basal meltwater penetrates joints and fractures in the bedrock beneath and at the lee side of obstacles, refreezes under pressure changes, and the hydraulic lift of expanding ice prises joint blocks free — incorporating them into the moving glacier and leaving rough, stepped, jagged surfaces behind.

The rate of glacial erosion depends on several interacting factors: ice velocity (faster ice erodes more rapidly), basal shear stress (controlled by ice thickness and slope), the hardness and jointing of the bedrock, and whether the base of the glacier is warm (at pressure-melting point, allowing sliding and erosion) or cold (frozen to the bed, inhibiting erosion). Warm-based glaciers — typical of maritime climates and lower latitudes — are far more erosionally effective than cold-based polar glaciers.

The landforms glaciers produce fall into two broad categories. Erosional landforms are carved directly from bedrock: cirques (armchair-shaped hollows at glacier heads), arêtes (knife-edge ridges between adjacent cirques), horns (pyramidal peaks at multi-cirque intersections), glacial troughs (U-shaped valleys), roche moutonnées (asymmetric bedrock knobs), and striations (parallel scratches recording ice flow direction). Depositional landforms are built from sediment released as the glacier melts: moraines (ridges of unsorted till), outwash plains (sorted glaciofluvial gravels beyond the terminus), kettles (depressions from buried ice blocks), drumlins (streamlined subglacial mounds), and eskers (sinuous ridges of meltwater-deposited gravel from subglacial tunnels).

The world\'s most iconic landscapes bear the unmistakable signature of glacial erosion. The Norwegian fjords — drowned glacial troughs exceeding 1,300 m depth — represent the most extreme glacial carving on Earth. Yosemite Valley in California is a near-perfect U-shaped glacial trough carved 1 km deep in granite by Pleistocene valley glaciers. The Alps preserve classic cirques, arêtes (the Chamonix Aiguilles), and horns (the Matterhorn). Patagonia\'s Torres del Paine and New Zealand\'s Fiordland display troughs and fjords still being modified by active glaciers. As deglaciation continues — whether after a glacial maximum or under modern climate change — these forms emerge progressively, exposing the geological record of ice dynamics written in stone.`,
      keyTerms: [
        {
          term: 'glacial abrasion',
          def: 'Erosion by rock fragments entrained in basal ice grinding bedrock to smooth polished surfaces; produces rock flour and striations.',
        },
        {
          term: 'plucking',
          def: 'Glacial erosion by basal meltwater refreezing in rock joints, hydraulically lifting and quarrying joint blocks into the glacier.',
        },
        {
          term: 'cirque',
          def: 'Armchair-shaped hollow eroded at a glacier head by rotational ice flow, freeze-thaw, and plucking; often contains a tarn lake after deglaciation.',
        },
        {
          term: 'fjord',
          def: 'Deep, narrow sea inlet formed when a glacial trough eroded below sea level is flooded by post-glacial sea level rise.',
        },
        {
          term: 'roche moutonnée',
          def: 'Asymmetric bedrock knob with a smooth abraded stoss (upstream) face and a rough plucked lee (downstream) face; records ice flow direction.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Glacial Erosion Processes and Landforms',
      body: `Glacial erosion produces a distinctive suite of landforms — from polished bedrock surfaces at the metre scale to fjords hundreds of kilometres long. Understanding the two erosion mechanisms (abrasion and plucking) and how they operate on different parts of the landscape unlocks the interpretation of glaciated terrain worldwide.`,
      cards: [
        {
          name: 'Abrasion and Plucking: The Two Erosion Mechanisms',
          icon: Layers,
          color: BRAND.accent,
          desc: 'abrasion — debris entrained in basal ice acts as sandpaper, grinding bedrock into smooth polished surfaces and producing rock flour; plucking — basal meltwater refreezes in rock joints, and hydraulic pressure lifts and quarries joint blocks, creating rough, jagged downstream faces',
          examples: 'Polished roches moutonnées have smooth stoss (upstream) faces from abrasion and rough, plucked lee (downstream) faces. Rock flour (0.001–0.1 mm particles) produced by abrasion creates the turquoise \'glacial milk\' colour of proglacial lakes. Norwegian fjords show polished bedrock walls from intense abrasion during the Last Glacial Maximum.',
        },
        {
          name: 'Cirques, Arêtes, and Horns',
          icon: Globe,
          color: BRAND.jade,
          desc: 'cirques are armchair-shaped hollows eroded at glacier heads by rotational ice flow, freeze-thaw, and plucking; adjacent cirques erode toward each other, leaving knife-edge arêtes between them and pyramidal horn peaks at multiple-cirque intersections',
          examples: 'The Matterhorn (Switzerland/Italy) is a classic glacial horn formed by four cirque glaciers eroding from all sides. Coire an t-Sneachda (Cairngorms, Scotland) is a near-perfect cirque with a shallow tarn lake (lochan) in the basin. Arêtes like the Cuillin Ridge (Isle of Skye) form where parallel valley glaciers eroded toward a central divide.',
        },
        {
          name: 'Glacial Troughs, U-Valleys, and Fjords',
          icon: Activity,
          color: BRAND.coral,
          desc: 'glacier flow transforms V-shaped river valleys into U-shaped glacial troughs by lateral as well as vertical erosion; where troughs were carved below sea level and later flooded by rising seas, deep narrow fjords form; hanging valleys mark smaller tributary glaciers',
          examples: 'Yosemite Valley is a classic U-shaped glacial trough 1 km deep in granite, carved by Pleistocene valley glaciers. Sognefjord (Norway) reaches 1,308 m depth — eroded to this depth because ice remained thick and fast-flowing at sea level. Hanging valleys (e.g., Bridalveil Fall, Yosemite) mark where smaller tributaries joined the main trunk glacier at different levels.',
        },
        {
          name: 'Streamlined Erosional Forms: Drumlins and Roche Moutonnées',
          icon: ArrowRight,
          color: BRAND.gold,
          desc: 'drumlins are elongated mounds of subglacial till streamlined by ice flow; roche moutonnées are bedrock knobs with abraded stoss faces and plucked lee faces; both record ice flow direction with great precision',
          examples: 'The Eden Valley and Clew Bay (Ireland) contain drumlin swarms of thousands of features, indicating past ice flow direction. Roche moutonnée length:height ratio (commonly 3:1 to 10:1) records the dominant ice stress at time of formation. Whalebacks differ from roche moutonnées — both faces are abraded (no plucking), indicating fast, warm-based ice with no lee-side freeze-thaw.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From Pre-glacial Valley to Glacial Landscape: Landform Evolution',
      body: 'Follow how a glacier transforms a mountain landscape from pre-glacial V-valleys to classic glacial landforms',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Follow how a glacier transforms a mountain landscape from pre-glacial V-valleys to classic glacial landforms',
        nodes: [
          {
            id: 'v-valley',
            label: 'Pre-glacial V-Valley',
            description: 'River-carved valley with pointed cross-section. Tributaries join at grade. Bedrock exposed at ridge crests.',
            color: BRAND.accent,
          },
          {
            id: 'cirque-formation',
            label: 'Cirque Formation',
            description: 'Ice accumulates in north-facing hollows. Rotational flow and plucking enlarge the bowl. Headwall steepens.',
            color: BRAND.jade,
          },
          {
            id: 'glacial-trough',
            label: 'Glacial Trough (U-Valley)',
            description: 'Trunk glacier erodes valley floor and walls. Tributaries left as hanging valleys. Width:depth ratio increases.',
            color: BRAND.accentHot,
          },
          {
            id: 'roche-moutonnee',
            label: 'Roche Moutonnée',
            description: 'Bedrock knob: smooth stoss face (abrasion), jagged lee face (plucking). Records ice flow direction.',
            color: BRAND.gold,
          },
          {
            id: 'striations',
            label: 'Striations and Polish',
            description: 'Parallel bedrock scratches from entrained clasts. Measure ice flow direction to within ±5°.',
            color: BRAND.coral,
          },
          {
            id: 'fjord',
            label: 'Fjord (Post-glacial)',
            description: 'Glacial trough below sea level, flooded after deglaciation. Can exceed 1,000 m depth.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'v-valley',        to: 'cirque-formation', label: 'Glacier nucleates in hollow' },
          { from: 'cirque-formation', to: 'glacial-trough',  label: 'Ice fills valley, trunk glacier grows' },
          { from: 'glacial-trough',   to: 'roche-moutonnee', label: 'Erosion of bedrock obstacles' },
          { from: 'glacial-trough',   to: 'striations',      label: 'Basal abrasion leaves scratches' },
          { from: 'glacial-trough',   to: 'fjord',           label: 'Trough eroded below sea level' },
          { from: 'roche-moutonnee',  to: 'striations',      label: 'Same erosion surfaces, finer scale' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What is the mechanical difference between glacial abrasion and glacial plucking, and which produces polished bedrock?',
          a: [
            'Abrasion splits rocks along joints; plucking grinds them into smooth powder. Plucking produces polished surfaces.',
            'Abrasion — entrained clasts sliding over bedrock grind it to a smooth polished surface; plucking — basal meltwater refreezes in joints and hydraulically lifts blocks, producing rough irregular surfaces. Abrasion produces the polish.',
            'Both processes produce polish, but abrasion operates on soft rocks and plucking on hard rocks.',
            'Abrasion and plucking are the same process operating at different scales — both produce striations.',
          ],
          correct: 1,
          explain: 'Glacial abrasion occurs when rock fragments entrained in basal ice act as tools that scratch and grind the bedrock surface. Fine rock flour (silt-sized, ~0.001–0.1 mm) is produced, along with smooth, polished surfaces often bearing parallel striations (scratches 1–100 mm wide, up to metres long). Plucking (quarrying) requires two steps: first, basal meltwater penetrates rock fractures and joint planes and refreezes; second, as the glacier moves forward, the frozen block is hydraulically lifted and entrapped in the moving ice. This produces rough, irregular, stepped surfaces on the lee side of bedrock obstacles. The classic roche moutonnée has an abraded, polished stoss (upstream) face and a plucked, rough lee face — clearly demonstrating both processes on a single feature. Polished, striated bedrock faces preserve ice flow direction records for palaeoglaciological reconstruction.',
        },
        {
          q: 'A cirque glacier erodes its hollow through several mechanisms. Which of the following is NOT a recognised process of cirque enlargement?',
          a: [
            'Rotational sliding of ice deepening the cirque floor',
            'Freeze-thaw (frost shattering) of the headwall above the bergschrund',
            'Plucking of joint blocks from the steep headwall and basin floor',
            'Chemical dissolution (karst) of the granite bedrock by glacial meltwater',
          ],
          correct: 3,
          explain: 'Cirque enlargement involves: (1) rotational glacial flow — the ice in a cirque rotates as it flows, eroding the floor more than the margins, producing the characteristic concave basin; (2) frost shattering (freeze-thaw) — above the bergschrund (the crevasse separating the moving glacier from the headwall), meltwater penetrates rock joints and expands during refreezing, shattering the headwall; (3) plucking — joint blocks loosened by freeze-thaw are incorporated into the glacier and carried away; (4) abrasion — entrained debris polishes the basin floor. Chemical dissolution (karst) is a feature of carbonate rocks (limestone, dolomite) and is not operative in granite, schist, or other silicate rocks that make up most glaciated mountains. While meltwater is slightly acidic (carbonic acid), dissolution is far too slow to contribute meaningfully to cirque deepening.',
        },
        {
          q: 'Fjords are among the deepest sea inlets on Earth, often exceeding 1,000 m depth. What explains why glaciers eroded so far below sea level?',
          a: [
            'Sea level was so much lower during glacial maxima that what is now below sea level was then above sea level during glaciation',
            'Glaciers maintained thick, fast-flowing, erosionally powerful conditions at the coast because global sea level was ~120 m lower during glacial maxima, exposing continental shelves, and the ice flowed to the extended coast — eroding deeply before deglaciation and sea level rise drowned the troughs',
            'Fjords are formed primarily by river erosion, then deepened slightly by glaciers',
            'Tectonic subsidence of the coastline after glaciation is responsible for the great depth of fjords',
          ],
          correct: 1,
          explain: 'During glacial maxima (e.g., Last Glacial Maximum, ~20,000 years ago), global sea level was ~120–130 m lower than today, exposing the continental shelf. Ice sheets extended to the exposed shelf edge, meaning outlet glaciers remained grounded (touching the bed) and erosionally active all the way to the coast and beyond. A grounded glacier with 1–3 km of ice thickness exerts enormous basal stress (~1–3 bars) and, if fast-flowing, produces extreme erosion rates. Sognefjord was eroded to 1,308 m depth because the outlet glacier remained thick and powerful at sea level. After deglaciation (~15,000–8,000 years ago), isostatic rebound lifted some areas, but the fjords were flooded by post-glacial sea level rise that added ~120 m. The remaining depths (>120 m) genuinely represent sub-sea-level erosion by grounded ice.',
        },
        {
          q: 'Roches moutonnées record ice flow direction with great precision. Which face of a roche moutonnée indicates the upstream (stoss) direction?',
          a: [
            'The rough, jagged, steep face — this is the upstream face from which ice quarried blocks',
            'The smooth, polished, gently sloping face — the stoss face was ground smooth by abrasion as ice advanced over it',
            'Both faces are equally smooth — striations must be used to determine flow direction',
            'The side with the deepest striations is always the stoss face',
          ],
          correct: 1,
          explain: 'A roche moutonnée develops asymmetric erosion: on the stoss (upstream, ice-approach) side, the basal ice rides up over the bedrock knob under compression, pressing clasts against the rock and abrading it into a smooth, polished, gently inclined surface bearing striations. On the lee (downstream) side, the ice detaches from the bed as it passes over the crest, creating a low-pressure cavity. Basal meltwater penetrates joints in this cavity and refreezes (regelation), hydraulically wedging and plucking joint blocks into irregular, rough, steep faces. The asymmetry is diagnostic: smooth = stoss = upstream; rough = lee = downstream. This makes roches moutonnées reliable indicators of palaeo-ice flow direction, complementary to striation measurements. Whalebacks, by contrast, are symmetrically abraded on both faces, indicating warm-based, fast-sliding ice without effective plucking.',
        },
        {
          q: 'What distinguishes a hanging valley from the main glacial trough it joins, and what process created the height difference?',
          a: [
            'A hanging valley is always formed by a different type of glacier than the main trough',
            'Tributary glaciers were smaller and less erosionally powerful than the trunk glacier, so they eroded to a higher level. After deglaciation, the tributary valley \'hangs\' above the main trough, often producing spectacular waterfalls.',
            'Hanging valleys are formed by tectonic uplift after glaciation raises tributary valley floors',
            'Hanging valleys form when main valley glaciers deposit moraines that dam and elevate tributary valleys',
          ],
          correct: 1,
          explain: 'In a glaciated mountain system, the trunk (main valley) glacier is much thicker and more erosionally powerful than its tributaries. The trunk glacier erodes its valley floor to a much lower elevation than the tributary glaciers erode theirs. The surface of each glacier was near the same level (tributaries fed ice into the trunk at the ice surface), but the depth of erosion was proportional to ice thickness and velocity. After deglaciation, the main valley floor has been eroded much deeper than the tributary floors, which now \'hang\' above the main valley at their pre-glacial level relative to the trough floor. The mismatch in elevation is bridged by waterfalls — Bridalveil Fall (189 m) and Yosemite Falls (739 m) in Yosemite Valley are iconic examples. The height of hanging valleys directly records the differential erosion between trunk and tributary glaciers.',
        },
      ],
    },
  ],
}

export default glacialErosionLandforms
