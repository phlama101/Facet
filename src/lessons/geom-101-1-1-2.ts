import { Layers, Globe, Activity, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const regolithSoils: Lesson = {
  id: 'geom-101-1-1-2',
  title: 'Regolith, Saprolite, and Soil Formation',
  track: 'geo',
  trackName: 'Geomorphology',
  level: 'Foundations',
  duration: '12 min',
  xpReward: 120,
  description: 'The weathered mantle covering Earth\'s surface — from fresh saprolite to developed soil horizons — and the five factors that control pedogenesis',
  sources: [
    { org: 'USDA NRCS', title: 'USDA Natural Resources Conservation Service — Soils', url: 'https://www.nrcs.usda.gov/conservation-basics/natural-resource-concerns/soils' },
    { org: 'FAO',       title: 'FAO Soils Portal',                                     url: 'https://www.fao.org/soils-portal' },
    { org: 'USGS',      title: 'USGS — Soils and Regolith',                            url: 'https://www.usgs.gov' },
    { org: 'OpenStax',  title: 'OpenStax Physical Geography',                          url: 'https://openstax.org' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The weathered mantle covering Earth\'s surface — from fresh saprolite to developed soil horizons — and the five factors that control pedogenesis',
      body: `Regolith is the collective term for all unconsolidated material at Earth\'s surface — a blanket that can include saprolite, soil, alluvium, colluvium, volcanic ash, and glacial till. Wherever bedrock weathers in place, the first product is saprolite: rock that has been chemically transformed yet retains the original fabric of the parent material, including foliation planes, vein networks, and crystal outlines visible in thin section. In deeply weathered tropical terrains, saprolite may extend 50–100 m below the surface before giving way to fresh rock. Above the saprolite, pedogenic processes reorganise material into a soil profile — a vertical sequence of horizons that serves as a fingerprint of environmental history.

The classic master horizons run from surface downward. The O horizon is organic litter and humus above the mineral soil, best developed under forest. The A horizon is humus-rich topsoil where organic matter and mineral grains are intimately mixed; it is the biologically most active layer. The E horizon, where developed, is the eluviation zone — clay, iron, and aluminium are selectively leached downward, leaving a pale, coarse-textured layer. Below lies the B horizon, the illuviation zone where translocated clays, iron oxides, organic complexes, or carbonates accumulate; its character depends on climate and vegetation. The C horizon is weakly altered parent material retaining much of the original rock structure, grading down to the R horizon of unweathered bedrock.

Hans Jenny\'s 1941 factorial model formalised what field workers had long recognised: soil = f(cl, o, r, p, t), where cl is climate (the master variable controlling weathering rates and biological activity), o is organisms (vegetation type, root chemistry, soil fauna), r is relief (topography affecting drainage, erosion, and microclimate), p is parent material (mineralogy controlling weathering products and nutrient supply), and t is time (degree of profile development). Holding four factors constant while varying one — a clorpt experiment — reveals each factor\'s independent influence.

Key pedogenic processes differentiate soil orders across the globe. Eluviation–illuviation redistributes fine particles and solutes within the profile. Leaching in humid climates removes soluble bases (Ca²⁺, Mg²⁺, K⁺), progressively acidifying and depleting soils. Gleization occurs in waterlogged soils: anaerobic microbial respiration reduces Fe³⁺ to Fe²⁺, producing characteristic blue-grey gley colours. Podzolization dominates under boreal and heathland vegetation: organic acids chelate and mobilise iron and aluminium, stripping the E horizon to a pale ash colour (Swed. podzol = ashy soil) and depositing a rust-red to black Bhs horizon below. Calcification operates in semi-arid soils where limited leaching allows CaCO₃ to accumulate, forming caliche or petrocalcic horizons. These processes produce the twelve USDA soil orders: ultisols (intensely leached red-yellow soils of the humid tropics), oxisols (even more weathered, dominated by Fe/Al oxides), spodosols (podzolized boreal soils), mollisols (dark, base-rich grassland soils), and aridisols (desert soils with carbonate or saline horizons) are among the most areally significant.`,
      keyTerms: [
        {
          term: 'Regolith',
          def: 'All unconsolidated material at Earth\'s surface, including saprolite, soil, alluvium, colluvium, volcanic ash, and glacial sediment.',
        },
        {
          term: 'Saprolite',
          def: 'Chemically weathered rock that retains the original texture, fabric, and structure of the parent material; the basal layer of the regolith in deeply weathered terrains.',
        },
        {
          term: 'Soil Horizon',
          def: 'A roughly parallel layer within a soil profile (O, A, E, B, C, R) that differs from adjacent layers in colour, texture, structure, and chemistry due to pedogenic processes.',
        },
        {
          term: 'Pedogenesis',
          def: 'The suite of physical, chemical, and biological processes — eluviation, illuviation, leaching, gleization, podzolization, calcification — that transform parent material into a differentiated soil profile.',
        },
        {
          term: 'Eluviation',
          def: 'Downward translocation of clay, iron, aluminium, and organic matter out of the A/E horizon; paired with illuviation, the accumulation of translocated material in the B horizon.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Regolith, Soil Horizons, and Pedogenic Processes',
      body: `From the base of the weathering profile to the soil surface, a vertical sequence of layers records the interplay of climate, organisms, relief, parent material, and time. Each concept below unpacks a key dimension of that record.`,
      cards: [
        {
          name: 'Regolith and Saprolite',
          icon: Layers,
          color: BRAND.accent,
          desc: 'Regolith encompasses all unconsolidated surface material; saprolite is its basal layer — chemically altered but structurally intact rock that preserves relict textures of the parent material.',
          examples: 'Tropical saprolite 50–100 m deep in Brazil; saprolite retaining the foliation planes of parent gneiss visible in hand specimen and thin section.',
        },
        {
          name: 'Soil Horizons and Profile Development',
          icon: Globe,
          color: BRAND.jade,
          desc: 'The O/A/E/B/C/R horizon sequence records pedogenic history; each horizon\'s thickness, colour, and texture reflects the dominant processes acting at that depth.',
          examples: 'Classic New England spodosol with bleached white E horizon and rust-coloured Bhs; prairie mollisol with a thick, dark A horizon exceeding 1 m in Illinois.',
        },
        {
          name: 'Jenny\'s Five Soil-Forming Factors',
          icon: Activity,
          color: BRAND.coral,
          desc: 'Soil = f(cl, o, r, p, t). Climate is the master variable; organisms, relief, parent material, and time each modulate the trajectory and rate of pedogenesis.',
          examples: 'The same granitic parent material yields an oxisol under Amazonian climate and an aridisol under Sonoran Desert climate; chronosequences on lava flows show measurable horizon development within centuries.',
        },
        {
          name: 'Pedogenic Processes: Leaching, Illuviation, Gleization',
          icon: ArrowRight,
          color: BRAND.gold,
          desc: 'Eluviation exports material from upper horizons; illuviation deposits it in the B horizon; gleization reduces Fe³⁺ to Fe²⁺ in waterlogged soils; podzolization mobilises Fe–Al complexes under organic acids in cold humid forests.',
          examples: 'Argillic B horizon with dense clay cutans (illuviation coatings) in a Georgia ultisol; blue-grey gley horizon with orange mottles along root channels in a UK lowland soil.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Soil Profile: From Rainfall to Bedrock',
      body: 'Trace the downward cascade of water and dissolved material through the soil profile, from organic litter at the surface to unweathered bedrock.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Trace the downward cascade of water and dissolved material through the soil profile, from organic litter at the surface to unweathered bedrock.',
        nodes: [
          {
            id: 'rainfall',
            label: 'Rainfall',
            description: 'Precipitation delivers water and dissolved CO₂ to the soil surface. Rainfall intensity and seasonality (the cl factor) control leaching depth and weathering rate.',
            color: BRAND.accent,
          },
          {
            id: 'organic-matter',
            label: 'Organic Matter Input',
            description: 'O horizon: plant litter, root exudates, and microbial biomass supply organic acids and carbon. Decomposition rate balances with input under steady climate and vegetation.',
            color: BRAND.jade,
          },
          {
            id: 'eluviation',
            label: 'Eluviation (A/E)',
            description: 'A and E horizons: downward-moving water dissolves soluble bases and translocates fine clay and Fe–Al complexes. The E horizon is the depleted, bleached zone in podzolized profiles.',
            color: BRAND.gold,
          },
          {
            id: 'illuviation',
            label: 'Illuviation (B horizon)',
            description: 'B horizon: translocated clay, iron oxides, organic complexes, or carbonates accumulate here. Horizon type (Bt, Bhs, Bk) reflects the dominant pedogenic process.',
            color: BRAND.coral,
          },
          {
            id: 'weathering-front',
            label: 'Weathering Front (C)',
            description: 'C horizon: weakly altered parent material. Primary minerals are dissolving; the rock structure is still recognisable. This is the saprolite zone in deep tropical profiles.',
            color: BRAND.amethyst,
          },
          {
            id: 'bedrock',
            label: 'Bedrock (R)',
            description: 'R horizon: unweathered parent rock. Its mineralogy (silicic vs. mafic, calcareous vs. siliceous) determines the geochemical character of the overlying regolith.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'rainfall',        to: 'organic-matter',  label: 'Wets O horizon; leaches organic acids' },
          { from: 'organic-matter',  to: 'eluviation',      label: 'Acid-charged water enters A/E' },
          { from: 'eluviation',      to: 'illuviation',     label: 'Translocated clay & Fe–Al move to B' },
          { from: 'illuviation',     to: 'weathering-front', label: 'Percolating water continues to C' },
          { from: 'weathering-front', to: 'bedrock',        label: 'Chemical weathering front advances into R' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What distinguishes saprolite from regolith?',
          a: [
            'Saprolite is chemically weathered rock that retains the original rock\'s texture/structure; regolith is the broader term for all unconsolidated surface material including saprolite, soil, and transported sediment',
            'Saprolite is transported sediment deposited by rivers; regolith is rock weathered in place',
            'Regolith is restricted to organic-rich topsoil; saprolite includes all mineral horizons below',
            'Saprolite and regolith are synonymous terms used interchangeably in soil science',
          ],
          correct: 0,
          explain: `Regolith is the broadest term: any unconsolidated material at Earth\'s surface, whether formed in place or transported. Saprolite is a specific subset — rock that has been chemically weathered in situ to the point of mineralogical alteration but has not been physically disrupted, so it retains the fabric (foliation, jointing, vein patterns, crystal pseudomorphs) of the parent rock. In deeply weathered tropical landscapes, a vertical section may show true soil above, saprolite in the middle, and fresh bedrock at the base — all three are distinct, with saprolite being the in-place chemically altered but structurally intact layer.`,
        },
        {
          q: 'Which soil horizon is enriched by illuviation of clay, iron oxides, and organic matter from above?',
          a: [
            'The O horizon',
            'The A horizon',
            'The B horizon',
            'The C horizon',
          ],
          correct: 2,
          explain: `The B horizon is the illuviation zone where material translocated from overlying horizons accumulates. Depending on the dominant pedogenic process, the B horizon may be designated Bt (argillic — accumulated clay), Bhs or Bs (spodic — accumulated humus and sesquioxides in podzolized soils), or Bk (calcic — accumulated CaCO₃). The E horizon above it is the complementary eluviation zone — depleted of the same materials. The A horizon is where organic matter mixes with mineral soil at the surface; the C horizon is weakly altered parent material below the zone of strong pedogenic activity.`,
        },
        {
          q: 'According to Jenny\'s factorial model, which two factors are generally considered most important in controlling soil type globally?',
          a: [
            'Relief and parent material — they set the local physical and geochemical template',
            'Climate and organisms — temperature, precipitation, and vegetation type exert the strongest global controls on weathering and organic matter dynamics',
            'Parent material and time — mineralogy determines the weathering pathway and time determines its completion',
            'Relief and time — slope position and duration together explain most global soil variability',
          ],
          correct: 1,
          explain: `Climate (temperature and precipitation) controls weathering reaction rates, leaching intensity, and the balance between organic matter production and decomposition. Organisms — particularly vegetation type and root chemistry — determine organic acid input, nutrient cycling, and bioturbation. Together these two factors explain the broad global pattern of soil orders: oxisols and ultisols in hot, humid tropics; spodosols in cold, humid boreal zones; mollisols in temperate grasslands; aridisols in deserts. Parent material and relief create important local variations but do not override the climate–organism signal at the global scale. Time matters most where soils are young (volcanic islands, deglaciated terrain) or very old (ancient Australian cratons).`,
        },
        {
          q: 'Why do ultisols (highly weathered red-yellow soils) dominate the humid tropics while mollisols (dark, organic-rich soils) dominate temperate grasslands?',
          a: [
            'Ultisols form from mafic parent rocks abundant in the tropics; mollisols form from felsic rocks common in temperate regions',
            'Ultisols are young soils recently exposed by erosion; mollisols are ancient relict soils preserved under grassland',
            'Ultisols form in areas of high relief with rapid erosion; mollisols form on flat plains with minimal erosion',
            'Ultisols reflect intense, long-duration leaching that removes bases and concentrates Fe/Al oxides; mollisols accumulate organic matter from grass roots under drier conditions where decomposition is slower than production',
          ],
          correct: 3,
          explain: `In the humid tropics, high temperatures and abundant rainfall drive intense weathering over very long time periods. Leaching removes soluble bases (Ca²⁺, Mg²⁺, K⁺), leaving behind immobile iron and aluminium oxides that give ultisols their characteristic red-yellow colours and low fertility. In temperate grasslands, a seasonal climate with dry summers slows decomposition of grass root biomass, allowing organic carbon to accumulate in the thick A horizon that defines mollisols. Grasses also return Ca²⁺ to the surface through litter, maintaining base saturation. The contrast illustrates how climate and organisms (the two dominant clorpt factors) interact to produce fundamentally different pedogenic trajectories from similar parent materials.`,
        },
        {
          q: 'Gleization produces the blue-grey colours characteristic of waterlogged soils. What chemical process causes this colour?',
          a: [
            'Oxidation of Fe²⁺ to Fe³⁺ under oxygen-rich conditions, forming haematite',
            'Reduction of Fe³⁺ to Fe²⁺ under anaerobic conditions driven by microbial respiration, producing ferrous iron compounds',
            'Precipitation of MnO₂ from reducing groundwater entering the profile',
            'Leaching of all iron from the horizon, leaving only pale silica and aluminium',
          ],
          correct: 1,
          explain: `In waterlogged soils, oxygen is rapidly consumed by aerobic microbes. Facultative and obligate anaerobes then use Fe³⁺ (ferric iron) as an electron acceptor in respiration, reducing it to Fe²⁺ (ferrous iron). Ferric compounds such as haematite and goethite are reddish-brown; ferrous compounds such as siderite and vivianite are blue-grey to greenish, giving gley horizons their distinctive muted colours. Where oxygen periodically penetrates along root channels or desiccation cracks, localised oxidation produces orange-brown mottles (Fe³⁺), creating the mottled redoximorphic features that are diagnostic of seasonally saturated soils. The boundary between reduced (grey) matrix and oxidised (orange) mottles marks the fluctuating water table.`,
        },
      ],
    },
  ],
}

export default regolithSoils
