import { Globe, Layers, Activity, Zap, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const groundwaterSustainability: Lesson = {
  id: 'hyd-101-1-3-4',
  title: 'Groundwater Depletion, Contamination, and Sustainability',
  track: 'cli',
  trackName: 'Hydrology',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 130,
  description: 'Groundwater depletion, land subsidence, seawater intrusion, and chemical contamination are converging threats to the aquifer systems that supply drinking water and irrigation for billions of people. This lesson examines the causes, consequences, and sustainability pathways for the world\'s most critical hidden water resource.',
  sources: [
    { org: 'USGS', title: 'USGS — Groundwater Depletion',                              url: 'https://www.usgs.gov/mission-areas/water-resources/science/groundwater-depletion' },
    { org: 'NASA', title: 'NASA GRACE — Groundwater Depletion',                         url: 'https://grace.jpl.nasa.gov/applications/groundwater/' },
    { org: 'EPA',  title: 'US EPA — Underground Injection Control Program',             url: 'https://www.epa.gov/uic' },
    { org: 'WRI',  title: 'World Resources Institute — Aqueduct Water Risk Atlas',      url: 'https://www.wri.org/aqueduct' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The invisible crisis: groundwater depletion, land subsidence, and the race to sustainable aquifer management',
      body: `Groundwater depletion — extraction exceeding natural recharge rates — is one of the most significant but least visible environmental problems of the 21st century. Global groundwater extraction has tripled since 1950, reaching ~1,000 km³/year, driven primarily by agricultural irrigation (70% of use). The High Plains (Ogallala) Aquifer underlies 450,000 km² of the central US Great Plains and provides water for 30% of all US groundwater-based irrigation. Water levels in heavily pumped areas of Kansas, Texas, and Oklahoma have declined 30–60 m since 1950 — drops that took 10,000+ years of recharge to accumulate. At current depletion rates, portions of the Ogallala may be functionally depleted (unable to sustain economic pumping) within 25–50 years.

Land subsidence — the sinking of the land surface due to compaction of aquifer sediments as pore water is removed — is a direct consequence of groundwater extraction from fine-grained aquifer systems. Clay and silt layers that contributed to aquifer storage compact irreversibly when drained: the compaction is plastic (permanent), unlike the elastic component of storage in coarser sediments. Mexico City has subsided 10 m since the early 20th century due to pumping from the underlying clayey lake bed sediments — some areas are still sinking at 30–40 cm/year. Jakarta, Indonesia subsides 15–25 cm/year in the fastest-declining districts, and portions of the city are now below sea level, increasing flood risk. Houston, Texas, and the Sacramento–San Joaquin Delta have also experienced significant subsidence from groundwater extraction.

Seawater intrusion is the displacement of fresh coastal groundwater by saline ocean water, occurring when pumping lowers the freshwater head below the equilibrium Ghyben-Herzberg interface. The Ghyben-Herzberg principle states that for every metre the freshwater table rises above sea level, the fresh-salt interface lies approximately 40 m below sea level (density ratio ~40:1 for fresh:salt water difference). When coastal pumping lowers the water table by even 0.5 m, the interface rises ~20 m. Saltwater intrusion has contaminated coastal aquifers in Miami-Dade County (Florida), Long Island (New York), Monterey County (California), Dhaka (Bangladesh), Jakarta, and the Maldives, limiting groundwater supplies for millions of people.

Groundwater contamination arises from many sources: agricultural nitrate leaching from fertiliser application, pesticides, volatile organic compounds (VOCs) from industrial sites and underground storage tanks, pharmaceuticals and personal care products (PPCPs), per- and polyfluoroalkyl substances (PFAS — "forever chemicals" from firefighting foams and industrial processes), naturally occurring arsenic (from oxidation of arsenic-bearing minerals in Bangladesh, India, and elsewhere: affecting ~100 million people), and saltwater intrusion. Contamination is often irreversible on human timescales because slow groundwater flow means plumes persist for decades. Managed aquifer recharge (MAR) — deliberately recharging aquifers with treated recycled water, storm water, or surface water during wet periods — is an increasingly important strategy for both replenishing depleted aquifers and creating hydraulic barriers against seawater intrusion.`,
      keyTerms: [
        {
          term: 'Groundwater Depletion',
          def: 'Extraction exceeding natural recharge; permanently lowers water tables. Global rate ~1,000 km³/yr, 70% for agriculture.',
        },
        {
          term: 'Land Subsidence',
          def: 'Irreversible compaction of clay-rich aquifer sediments when groundwater is removed. Mexico City: 10 m since 1900.',
        },
        {
          term: 'Seawater Intrusion',
          def: 'Saltwater displacing fresh coastal groundwater when pumping lowers the freshwater head; Ghyben-Herzberg principle: 1 m freshwater table drop → 40 m interface rise.',
        },
        {
          term: 'PFAS',
          def: 'Per- and polyfluoroalkyl substances ("forever chemicals"); highly persistent groundwater contaminants from firefighting foams and industrial uses.',
        },
        {
          term: 'Managed Aquifer Recharge (MAR)',
          def: 'Deliberate recharge of aquifers with recycled water, stormwater, or surface water to replenish depleted systems or create saltwater barriers.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Groundwater Sustainability Challenges',
      body: `Groundwater sustainability requires matching extraction to recharge over long timescales. Current depletion trajectories in major agricultural aquifers are unsustainable. Solutions involve demand reduction (irrigation efficiency), supply augmentation (managed recharge), pricing reforms (aquifer depletion is often unpriced), and regulatory frameworks that recognise groundwater as a public resource.`,
      cards: [
        {
          name: 'Ogallala Depletion',
          icon: Layers,
          color: BRAND.coral,
          desc: 'High Plains Aquifer: 30-60 m water table decline in Kansas, TX, OK since 1950. Recharge rate ~1 mm/yr. Recovery would take millennia.',
          examples: 'Texas Panhandle: some areas have lost >80% of original saturated thickness. Irrigated farmland abandonment accelerating as pumping costs rise.',
        },
        {
          name: 'Land Subsidence',
          icon: Globe,
          color: BRAND.gold,
          desc: 'Clay compaction from groundwater removal. Permanent, irreversible. Increases flood risk in sinking coastal cities.',
          examples: 'Jakarta: -25 cm/yr; 40% of city below sea level. Mexico City: -10 m total since 1900; historic buildings tilting visibly. Shanghai: -3 m.',
        },
        {
          name: 'Seawater Intrusion',
          icon: ArrowRight,
          color: BRAND.ruby,
          desc: 'Ghyben-Herzberg: 1 m freshwater table drop → 40 m saltwater interface rise. Irreversible contamination of coastal aquifers.',
          examples: 'Miami-Dade: saltwater intrusion front advanced >16 km inland since 1900. Maldives: limited freshwater lens threatened by intrusion and sea level rise.',
        },
        {
          name: 'PFAS Contamination',
          icon: Zap,
          color: BRAND.amethyst,
          desc: 'Fluorinated compounds; extremely persistent in groundwater. Carcinogenic; linked to immune system effects. Detected at >45% of US water sources.',
          examples: 'Camp Lejeune, NC: PFAS-contaminated drinking water 1953-1987 linked to elevated cancer rates. Cleanup will take decades and billions of dollars.',
        },
        {
          name: 'Managed Aquifer Recharge',
          icon: Activity,
          color: BRAND.jade,
          desc: 'Inject treated water, stormwater, or seasonal surplus to aquifers. Replenishes storage; can create saltwater barriers. Increasingly critical in water-stressed regions.',
          examples: 'Orange County Water District (CA): produces 100+ million gallons/day of treated recycled water for aquifer recharge. Supplies 35% of county water.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Groundwater Depletion Spiral: From Extraction to Consequence',
      body: 'How over-extraction of groundwater triggers a cascade of consequences — declining water tables, land subsidence, seawater intrusion, and ecosystem impacts.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how excess groundwater pumping drives a cascade of consequences including water table decline, land subsidence, seawater intrusion, and ecosystem damage, and how sustainability pathways can interrupt this spiral',
        nodes: [
          {
            id: 'excess-pumping',
            label: 'Excess Pumping',
            description: 'Extraction rate exceeds recharge rate. Common in arid and semi-arid agricultural regions. Global rate ~1,000 km³/yr, growing 1-2%/yr.',
            color: BRAND.coral,
          },
          {
            id: 'water-table-decline',
            label: 'Water Table Decline',
            description: 'Head drops progressively. Pumping depths increase; energy costs rise. Springs cease to flow. Streams convert from gaining to losing. Wetlands dry.',
            color: BRAND.gold,
          },
          {
            id: 'land-subsidence',
            label: 'Land Subsidence',
            description: 'Clay layers compress irreversibly. Foundations crack; buildings tilt. Coastal cities sink below sea level. Flood risk increases. Aquifer storage permanently reduced.',
            color: BRAND.ruby,
          },
          {
            id: 'seawater-intrusion',
            label: 'Seawater Intrusion',
            description: 'Ghyben-Herzberg: freshwater head decline → saltwater interface rise. Coastal well fields abandoned. Once contaminated, recovery requires sustained over-recharge for decades.',
            color: BRAND.amethyst,
          },
          {
            id: 'ecosystem-impacts',
            label: 'Ecosystem Impacts',
            description: 'Riparian trees lose groundwater access. Springs and wetlands dry. Cold-water fish lose groundwater-maintained baseflow and temperature refugia. Agricultural soils compact.',
            color: BRAND.jade,
          },
          {
            id: 'solutions',
            label: 'Sustainability Pathways',
            description: 'Irrigation efficiency (drip, precision ag). Managed aquifer recharge. Water pricing reform. Regulatory caps on extraction. Crop transitions to lower water demand.',
            color: BRAND.accent,
          },
        ],
        edges: [
          { from: 'excess-pumping',     to: 'water-table-decline', label: 'Depletion of stored water' },
          { from: 'water-table-decline', to: 'land-subsidence',     label: 'Clay compaction' },
          { from: 'water-table-decline', to: 'seawater-intrusion',  label: 'Coastal head decline' },
          { from: 'water-table-decline', to: 'ecosystem-impacts',   label: 'Springs, baseflow, wetlands fail' },
          { from: 'excess-pumping',     to: 'solutions',            label: 'Recognition drives reform' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Why is groundwater depletion in sedimentary aquifers like the Ogallala often considered irreversible on human timescales?',
          a: [
            'The Ogallala Aquifer lies below the water table; once depleted it refills rapidly from below through artesian pressure',
            'Recharge to deep fossil aquifers is extremely slow (millimetres per year), so water levels depleted by decades of pumping would require centuries to millennia to recover',
            'Groundwater depletion is reversible within 10-20 years if pumping completely stops and precipitation is average or above',
            'Clay compaction in the Ogallala Aquifer is reversible when water returns; the aquifer would refill to original levels if pumping stopped',
          ],
          correct: 1,
          explain: 'The Ogallala Aquifer was largely recharged during wetter, cooler Pleistocene conditions and currently receives only ~1 mm/year of natural recharge in most areas — essentially a "fossil" water resource. At current extraction rates (~21 km³/year), portions that have been depleted by 30–60 m would take thousands to tens of thousands of years to recover naturally. Additionally, clay-rich sediments in the fine-grained portions of the aquifer compact irreversibly when drained, permanently reducing storage capacity. This makes Ogallala depletion functionally permanent on policy-relevant timescales. The decisions made in the next 20–30 years about extraction rates will determine whether Great Plains agriculture can be sustained at anything like current scale through the 21st century.',
        },
        {
          q: 'What is the Ghyben-Herzberg principle and why does it make seawater intrusion so damaging?',
          a: [
            'The Ghyben-Herzberg principle states that tidal fluctuations in coastal aquifers amplify 40× in inland water tables, causing widespread flooding',
            'For every metre the freshwater head drops below sea level, the fresh-saltwater interface rises approximately 40 m; even a small freshwater head decline causes a large saltwater interface rise, contaminating deep portions of coastal aquifers',
            'The principle states that 40% of coastal groundwater is naturally saline; intrusion only contaminates the remaining 60% fresh fraction',
            'Saltwater intrudes at 40 metres per year when coastal pumping begins; once started, intrusion cannot be stopped even if pumping ceases',
          ],
          correct: 1,
          explain: 'The Ghyben-Herzberg (1888/1901) relationship arises from the density difference between fresh (1,000 kg/m³) and salt (1,025 kg/m³) water: a column of freshwater must extend 40 m below sea level for every metre it stands above sea level to balance a column of seawater at the interface. Algebraically: z_f = ρ_s/(ρ_s - ρ_f) × h_f ≈ 40 × h_f. When coastal pumping lowers the freshwater head by 1 m, the interface rises ~40 m. A seemingly small water table decline of 2–3 m can raise the interface 80–120 m, potentially contaminating an entire aquifer. Once saltwater has invaded, restoring the freshwater lens requires sustained water table recovery above sea level for years to decades, which is expensive and difficult in densely developed coastal areas.',
        },
        {
          q: 'Land subsidence from groundwater extraction occurs primarily in which types of geological materials and why is it often irreversible?',
          a: [
            'Subsidence occurs primarily in coarse sand and gravel aquifers because large pore spaces collapse readily when drained',
            'Subsidence is most severe in aquifers with clay and silt interlayers; these fine-grained sediments compact irreversibly (inelastic compaction) when drained, permanently reducing aquifer storage and land surface elevation',
            'Subsidence occurs uniformly in all aquifer types; the rate depends only on how quickly water is extracted, not on sediment type',
            'Subsidence is caused by dissolution of carbonate minerals in limestone aquifers; it is irreversible because dissolved minerals cannot be re-precipitated',
          ],
          correct: 1,
          explain: 'Coarse sands and gravels have elastic storage: they compress slightly under stress and expand when stress is released — this is reversible. Fine-grained clays and silts behave differently: they have high porosity (40–70%) but low hydraulic conductivity. When pore water pressure decreases due to pumping, the effective stress on clay grains increases. Clay platelet rearrangement under this stress is plastic (inelastic), not elastic — it does not recover when water levels are restored. This irreversible compaction is the dominant mechanism of ground subsidence. The problem is compounded because clay layers may constitute only 10–20% of aquifer thickness but contribute 80–90% of total compaction. Mexico City\'s 10 m subsidence since 1900 destroyed the original clay aquifer storage permanently, meaning the city now relies primarily on imported surface water.',
        },
        {
          q: 'PFAS ("forever chemicals") present a particular groundwater contamination challenge. What makes them so persistent?',
          a: [
            'PFAS are negatively charged and repel aquifer mineral surfaces, remaining in solution indefinitely without any degradation pathway',
            'PFAS contain extremely strong carbon-fluorine bonds (among the strongest in organic chemistry) that resist biodegradation, hydrolysis, and photolysis; they persist in groundwater for decades with no natural attenuation',
            'PFAS are heavier than water and sink to the deepest parts of aquifers where natural microbial communities are absent, preventing biodegradation',
            'PFAS contamination persists because it is continuously replenished by atmospheric deposition; removing groundwater contamination requires first eliminating the atmospheric source',
          ],
          correct: 1,
          explain: 'PFAS (per- and polyfluoroalkyl substances) are a family of ~9,000 synthetic chemicals that include PFOA, PFOS, and GenX. Their environmental persistence arises from the C-F bond — fluorine is the most electronegative element, and C-F bonds (bond energy ~485 kJ/mol) are among the strongest in organic chemistry, resisting biological, chemical, and photolytic breakdown. In groundwater, PFAS typically have low soil sorption coefficients, meaning they migrate readily through aquifers and persist for decades or longer. They bioaccumulate in the food chain and are associated with thyroid disease, immune system effects, and certain cancers. The US EPA set enforceable maximum contaminant levels (MCLs) for several PFAS in drinking water in 2024. Groundwater remediation for PFAS is extremely expensive and technically challenging — the primary approach is pump-and-treat with activated carbon filtration or advanced oxidation processes.',
        },
        {
          q: 'What is managed aquifer recharge (MAR) and how can it help address groundwater depletion and seawater intrusion?',
          a: [
            'MAR is a legal framework that restricts new groundwater extraction permits to the annual natural recharge rate of each aquifer',
            'MAR involves deliberately recharging aquifers with treated recycled water, stormwater, or surface water diverted during wet seasons, replenishing depleted storage and maintaining freshwater head against seawater intrusion',
            'MAR is a remote sensing technique using satellite gravity data to measure the rate of natural aquifer recharge from precipitation',
            'MAR refers to managing all groundwater extraction through centralised metering and billing; aquifer recharge is a separate, natural process',
          ],
          correct: 1,
          explain: 'Managed aquifer recharge includes a range of methods to artificially increase aquifer storage: (1) surface spreading — water spread over permeable soils in infiltration basins, recharge ponds, or flood-irrigated fields; (2) direct injection — treated water injected into aquifers through wells; (3) aquifer storage and recovery (ASR) — water injected during wet seasons and pumped out during dry periods. Orange County Water District in California operates the world\'s largest water purification system (100+ million gallons per day), treating recycled wastewater to potable standards for aquifer injection. In coastal aquifers, maintaining positive freshwater head through MAR creates a hydraulic barrier that prevents or reverses seawater intrusion. MAR is increasingly adopted globally as a strategy to store seasonal water surplus for use during drought, improve groundwater quality through soil-aquifer treatment, and sustainably manage depleted aquifer systems.',
        },
      ],
    },
  ],
}

export default groundwaterSustainability
