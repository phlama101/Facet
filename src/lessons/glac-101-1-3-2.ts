import { Layers, Globe, Activity, ArrowRight, Zap } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const glacialSedimentsDeposits: Lesson = {
  id: 'glac-101-1-3-2',
  title: 'Glacial Sediments, Till, and Depositional Landforms',
  track: 'cli',
  trackName: 'Glaciology',
  level: 'Foundations',
  duration: '13 min',
  xpReward: 130,
  description: 'The sediments glaciers carry and deposit — till, moraines, outwash, eskers, and kettles — and what they reveal about past glaciations',
  sources: [
    { org: 'USGS', title: 'USGS — Glacial Processes and Landforms',                   url: 'https://www.usgs.gov' },
    { org: 'BGS',  title: 'BGS — British Geological Survey: Glacial Deposits',         url: 'https://www.bgs.ac.uk' },
    { org: 'SEPM', title: 'SEPM — Society for Sedimentary Geology',                    url: 'https://www.sepm.org' },
    { org: 'OpenStax', title: 'OpenStax Physical Geography',                           url: 'https://openstax.org' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'What glaciers leave behind: a guide to glacial sediments and depositional landforms',
      body: `Glaciers are powerful agents of erosion and deposition, and the sediments and landforms they leave behind preserve a detailed archive of past ice sheet configurations and climate change. Till is debris deposited directly by ice — an unsorted, unstratified diamicton containing everything from clay-sized rock flour to house-sized boulders, all mixed together without the sorting action of water. Glaciofluvial sediments, by contrast, are stratified and sorted: meltwater streams beyond the ice margin transport and redeposit glacial debris, producing cross-bedded sands and gravels graded by particle size and transport distance. Glaciolacustrine sediments (deposited in proglacial lakes) and glaciomarine sediments (deposited in ice-proximal seas) add further complexity, often preserving annual laminations (varves) or ice-rafted debris layers that record episodic calving events.

The path a clast takes through a glacier depends on its entrainment location. Subglacial debris — plucked from or abraded off the bedrock — is transported at the glacier base, where clasts become rounded and striated by continued abrasion. Englacial debris is incorporated into the ice interior, carried passively without modification. Supraglacial debris arrives from rockfall and avalanche onto the ice surface; these clasts remain angular because they experience no abrasion after deposition on the ice. The transport history of individual clasts can therefore be inferred from their shape, surface texture, and petrographic composition.

At the ice margin and beyond, characteristic depositional landforms develop. Moraines are ridges or mounds of till and other glacial debris: terminal moraines mark the maximum extent of advance; lateral moraines border valley glacier margins; medial moraines form where two glaciers merge and their lateral moraines combine; recessional moraines record stillstand positions during overall retreat. Drumlins are streamlined, elongated hills of till moulded under moving ice, their long axes parallel to ice flow direction and their steep stoss ends facing up-ice. Eskers are sinuous ridges of sand and gravel deposited in subglacial or englacial meltwater tunnels; they can extend hundreds of kilometres and record ancient subglacial drainage networks. Kames are mounds or terraces of stratified drift deposited in ice-contact environments — against stagnant ice blocks or in crevasses. Kettles are bowl-shaped depressions formed where buried \'dead ice\' blocks melt after being covered by outwash sediment. Outwash plains (sandurs) are broad, gently sloping sheets of stratified glaciofluvial sediment deposited by braided meltwater streams beyond the ice margin.

Together, these sediments and landforms allow geologists to reconstruct the geometry, dynamics, and retreat history of past ice sheets with impressive precision. Mapping moraine systems, dating till exposures with cosmogenic nuclide or optically stimulated luminescence methods, and counting varves in proglacial lake records have produced detailed chronologies of the Pleistocene and Holocene ice sheets of North America, Eurasia, and Patagonia.`,
      keyTerms: [
        {
          term: 'Till',
          def: 'Sediment deposited directly by glacier ice without water sorting; a diamicton with a wide particle-size distribution from clay to boulders.',
        },
        {
          term: 'Moraine',
          def: 'A ridge or mound of till and other glacial debris deposited at or near an ice margin; types include terminal, lateral, medial, and recessional moraines.',
        },
        {
          term: 'Outwash Plain',
          def: 'A broad, gently sloping sheet of stratified glaciofluvial sediment (sandur) deposited by braided meltwater streams beyond the ice margin.',
        },
        {
          term: 'Esker',
          def: 'A sinuous ridge of sand and gravel deposited in a subglacial or englacial meltwater tunnel; records ancient subglacial drainage networks.',
        },
        {
          term: 'Varve',
          def: 'An annual sediment couplet in a glacial lake: a thick, coarse summer layer deposited during high meltwater discharge and a thin, fine winter layer deposited under ice cover.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Glacial Sediments and Depositional Landforms',
      body: `Glacial deposition produces a distinctive suite of sediments and landforms that record the position, dynamics, and retreat of past ice. Recognising till, moraines, outwash, eskers, kames, kettles, and varves in the field and in borehole cores is fundamental to Quaternary geology and palaeoglaciological reconstruction.`,
      cards: [
        {
          name: 'Till: Unsorted Glacial Diamicton',
          icon: Layers,
          color: BRAND.accent,
          desc: 'till is debris deposited directly by glacier ice without water sorting; it is a diamicton — a mixture of clast sizes from clay to boulders; lodgement till (deposited under moving ice) vs. melt-out till (released by stagnant melting ice); erratic boulders are transported far from their source',
          examples: `Erratics carried by Pleistocene ice sheets can be traced hundreds of km: the \'Boulders of Beekmantown\' in New York originated from Ontario, Canada. Lodgement till has a preferred clast orientation parallel to ice flow — useful for reconstructing palaeoglaciology. The \'Claygate Beds\' under London are Anglian glaciation till (MIS 12, ~450,000 years ago) compressed by ice overburden.`,
        },
        {
          name: 'Moraines: Ice-Contact Ridges',
          icon: Globe,
          color: BRAND.jade,
          desc: 'moraines are ridges or mounds of till and other glacial debris marking positions of ice margins; terminal moraines mark the maximum extent; lateral moraines border valley glacier margins; medial moraines form where two glaciers merge; recessional moraines mark stillstand positions during retreat',
          examples: 'The terminal moraine of the Laurentide Ice Sheet forms a ridge across Long Island, Cape Cod, and Nantucket — the southern limit of the last glaciation in the northeast USA. Lateral moraines of Alpine glaciers (e.g., Mer de Glace, France) stand 50–200 m above current ice surfaces, recording 19th century ice levels before retreat. Medial moraines from two merging Alaskan glaciers are visible as dark stripes of debris on the ice surface.',
        },
        {
          name: 'Outwash Plains, Eskers, and Kames',
          icon: Activity,
          color: BRAND.coral,
          desc: 'meltwater streams beyond the ice margin deposit stratified glaciofluvial sediment in a broad outwash plain (sandur); eskers are sinuous ridges of sand and gravel deposited in subglacial or englacial meltwater tunnels; kames are mounds of stratified drift deposited in ice-contact environments',
          examples: `Iceland\'s Skeiðarársandur is the world\'s largest active sandur (~1,000 km²), regularly flooded by jökulhlaups (glacial outburst floods) from Vatnajökull. The Brampton esker system in Ontario is 250 km long — one of North America\'s longest, formed in subglacial tunnels under the Laurentide Ice Sheet. Kettle lakes form when buried ice blocks melt: Minnesota\'s 10,000 lakes are predominantly kettle lakes from Laurentide deglaciation.`,
        },
        {
          name: 'Varves and Glaciolacustrine Records',
          icon: ArrowRight,
          color: BRAND.gold,
          desc: 'varves are couplets of coarse summer and fine winter sediment layers deposited annually in glacial lakes; varve counting provides a precise chronology (varve chronology) extending thousands of years before radiocarbon; glaciolacustrine and glaciomarine sediments preserve detailed climate signals',
          examples: 'The Swedish varve chronology (De Geer, 1880s–1930s) extends from 12,680 to 9,300 years BP, documenting the retreat of the Fennoscandian Ice Sheet with annual resolution. Glaciomarine sediments in the Irish Sea record the rapid drawdown of the Irish Ice Sheet ~16,000–14,000 years ago from ice-rafted debris concentrations. Lake Suigetsu (Japan) varves provide a master record used to calibrate the radiocarbon timescale.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Glacial Sediment Transport and Deposition',
      body: 'Follow glacial debris from its entrainment in basal ice through transport and final deposition as characteristic landforms.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Follow glacial debris from its entrainment in basal ice through transport and final deposition as characteristic landforms',
        nodes: [
          {
            id: 'bedrock-erosion',
            label: 'Bedrock Erosion',
            description: 'Abrasion and plucking entrain rock fragments into the glacier. Rock flour, gravel, and boulders mobilised.',
            color: BRAND.accent,
          },
          {
            id: 'subglacial-transport',
            label: 'Subglacial Transport',
            description: 'Debris carried at glacier base: clasts rounded and striated by abrasion against bedrock.',
            color: BRAND.jade,
          },
          {
            id: 'supraglacial-transport',
            label: 'Supraglacial Transport',
            description: 'Rockfall from valley walls adds debris to ice surface. Angular clasts, little modification.',
            color: BRAND.accentHot,
          },
          {
            id: 'till-lodgement',
            label: 'Till Deposition (Lodgement)',
            description: 'Clasts deposited under moving ice when drag exceeds driving stress. Preferred orientation preserved.',
            color: BRAND.gold,
          },
          {
            id: 'moraine-ridge',
            label: 'Moraine Ridge',
            description: 'Debris accumulates at ice margin as terminal or lateral moraine. Marks ice extent.',
            color: BRAND.coral,
          },
          {
            id: 'outwash-esker',
            label: 'Outwash / Esker / Kettle',
            description: 'Meltwater sorts and deposits glaciofluvial sediment beyond the ice. Stratified layers, kettles form.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'bedrock-erosion',      to: 'subglacial-transport', label: 'Basal entrainment' },
          { from: 'subglacial-transport', to: 'till-lodgement',       label: 'Lodgement under ice' },
          { from: 'subglacial-transport', to: 'moraine-ridge',        label: 'Pushed to margin' },
          { from: 'supraglacial-transport', to: 'moraine-ridge',      label: 'Rockfall accumulates at margin' },
          { from: 'till-lodgement',       to: 'outwash-esker',        label: 'Meltwater reworks till' },
          { from: 'moraine-ridge',        to: 'outwash-esker',        label: 'Proglacial meltwater carries fine material' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What is the key sedimentological characteristic that distinguishes till from glaciofluvial (outwash) sediment?',
          a: [
            'Till contains only fine-grained material (clay and silt); outwash contains only coarse material (sand and gravel)',
            'Till is poorly sorted (diamicton — a mixture from clay to boulders) deposited directly by ice without water sorting; outwash is well-sorted and stratified, deposited by meltwater streams',
            'Till is always red-brown and outwash is always grey due to oxidation differences',
            'Till forms sharp, angular fragments and outwash forms rounded clasts',
          ],
          correct: 1,
          explain: 'The defining characteristic of till is that it is deposited directly by ice, without the sorting action of water. The result is a diamicton — a sediment with a wide, poorly-graded particle size distribution from clay (< 2 μm) to large boulders (> 256 mm), all mixed together with no distinct layers. This contrasts completely with glaciofluvial (outwash) sediment, where meltwater streams sort particles by size and velocity, depositing coarser material near the ice margin and finer material distally, creating cross-bedded stratified deposits. Grain rounding is also different: till clasts are angular to sub-angular (limited transport), while outwash clasts are rounded by hydraulic abrasion. Identifying till vs. outwash in exposures or borehole cores is fundamental to reconstructing past glacial environments.',
        },
        {
          q: 'Terminal moraines of the Pleistocene ice sheets can be traced across thousands of kilometres. What do they record?',
          a: [
            'The speed at which ice sheets advanced across the landscape',
            'The maximum geographic extent of ice sheet advance during a glacial maximum — the line where the ice margin was in equilibrium between advance and ablation for a sustained period',
            'The composition of bedrock underlying the ice sheet at the time of glaciation',
            'The boundary between warm-based and cold-based ice within a glacier',
          ],
          correct: 1,
          explain: 'Terminal (end) moraines mark the outermost limit of glacier advance — the position where the ice margin was in equilibrium (or at least stable long enough to accumulate a significant ridge). At this position, ablation at the terminus balanced ice influx from the accumulation zone. Debris transported to the margin by internal ice flow accumulated as a ridge. The terminal moraine is therefore the most distal glacial deposit and marks the maximum ice extent. Examples: the Würm/Wisconsin terminal moraines form a prominent ridge across the US Midwest (Missouri River) and northern Europe (German Bight coast). Dating terminal moraines with radiocarbon, OSL, or cosmogenic nuclide methods constrains the timing of glacial maxima. Multiple recessional moraines mark pauses during retreat.',
        },
        {
          q: 'Eskers are sinuous ridges of sand and gravel that can extend hundreds of kilometres. Under what conditions do they form?',
          a: [
            'At the margins of glaciers where meltwater streams deposit sediment as ice recedes',
            'Within or beneath the glacier, deposited in subglacial or englacial meltwater tunnels under hydrostatic pressure — the tunnel sediment is left as a ridge when the ice melts',
            'On the surfaces of glaciers in supraglacial streams that eventually freeze into the ice',
            'In ice-marginal lakes where delta sedimentation builds sandy ridges',
          ],
          correct: 1,
          explain: `Eskers form from sediment deposited in meltwater conduits (tunnels or channels) within or at the base of glaciers. Subglacial meltwater flows under hydrostatic pressure — the water pressure equals or approaches the ice overburden pressure, allowing it to flow upslope if necessary (Röthlisberger channels). These conduits transport large volumes of meltwater and sediment. When the glacier thins or melts, the conduit sediment is let down onto the substrate as a sinuous ridge (esker). The ridge\'s long-axis direction records the subglacial drainage direction, which is not always parallel to ice flow. The Brampton esker (Ontario, 250 km), Punkaharju esker (Finland, 25 km), and the esker systems of central Sweden are classic examples. Eskers are important sand and gravel resources and good aquifers.`,
        },
        {
          q: `Kettle lakes form a large proportion of the lakes in glaciated regions of North America (e.g., Minnesota\'s \'10,000 lakes\'). How do kettles form?`,
          a: [
            'Kettles are depressions carved by the rotational flow of small cirque glaciers',
            'As ice sheets retreated, isolated ice blocks were buried by outwash sediment. When these \'dead ice\' blocks eventually melted, they left bowl-shaped depressions (kettles) that filled with water.',
            'Kettles form by the plucking of bedrock by subglacial ice, leaving circular depressions',
            'Kettle lakes are formed by meteorite impacts that coincidentally cluster in glaciated regions',
          ],
          correct: 1,
          explain: `Kettle formation occurs during deglaciation when ice blocks become detached from the retreating glacier margin and are buried (partially or fully) by outwash sediment deposited by proglacial meltwater streams. These isolated \'dead ice\' blocks may be insulated by sediment and persist for decades before melting. When they finally melt, the overlying sediment collapses into the void, leaving a circular to oval depression (kettle). If the water table is high enough, the kettle fills with water to form a kettle lake. Kettle lakes have no inflow streams, are typically circular, and have sandy or gravelly shores. They can range from a few metres to several kilometres in diameter. The Minnesota lake district, the Finger Lakes region of New York, and the lake-rich landscapes of Finland and Sweden are products of this process.`,
        },
        {
          q: 'Varve chronologies provide annual-resolution records of glacial retreat. What are the two layers in a single annual varve couplet?',
          a: [
            'A dark winter layer of ice crystals and a light summer layer of mineral grains',
            'A coarse, light-coloured summer layer (sand/silt deposited during high meltwater discharge) and a thin, dark winter layer (clay settled during ice-covered, low-energy conditions)',
            'An organic-rich spring layer and a mineral-rich autumn layer from leaf fall',
            'A calcium carbonate summer layer and a quartz winter layer reflecting seasonal weathering',
          ],
          correct: 1,
          explain: 'In a glacial lake (proglacial lake receiving meltwater), sedimentation is highly seasonal. In summer, meltwater discharge is high, carrying coarse mineral particles (fine sand, silt) that settle quickly to form a thick, light-coloured layer. In winter, the lake surface freezes and input nearly ceases; the remaining fine clay particles (suspended from summer) slowly settle through the quiet water to form a thin, dark, organic-rich layer. Together, these two layers form one varve — a couplet recording one year. Gerard De Geer systematically counted varves in Swedish lake sediments from the 1880s onward, building a floating chronology from Lake Ragunda (southern Sweden) northward as the Fennoscandian Ice Sheet retreated. Cross-correlating regional varve records ultimately produced a continuous 12,680-year chronology of ice sheet retreat, one of the earliest applications of annual-resolution geological dating.',
        },
      ],
    },
  ],
}

export default glacialSedimentsDeposits
