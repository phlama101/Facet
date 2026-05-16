import { Droplets, Zap, Globe, AlertTriangle, Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const irrigationAndFoodWater: Lesson = {
  id: 'hyd-101-1-4-3',
  title: 'Agriculture, Irrigation, and the Water–Food–Energy Nexus',
  track: 'geo',
  trackName: 'Hydrology',
  level: 'Beginner',
  duration: '14 min',
  xpReward: 150,
  description: `Agriculture is the world's largest water consumer, accounting for roughly 70% of all freshwater withdrawals globally. From the expansion of canal irrigation that built ancient civilisations to modern drip systems and satellite-guided precision farming, the technologies and governance structures humans use to deliver water to crops have shaped landscapes, geopolitics, and food security for millennia — and now drive one of the planet's most urgent water crises.`,
  sources: [
    { org: 'FAO',   title: 'AQUASTAT — FAO Global Information System on Water and Agriculture',      url: 'https://www.fao.org/aquastat/en/' },
    { org: 'IWMI',  title: 'International Water Management Institute — Water and Food',               url: 'https://www.iwmi.cgiar.org/' },
    { org: 'USGS',  title: 'USGS — Irrigation and Water Use',                                        url: 'https://www.usgs.gov/mission-areas/water-resources/science/irrigation' },
    { org: 'WRI',   title: 'World Resources Institute — Creating a Sustainable Food Future',         url: 'https://www.wri.org/research/creating-sustainable-food-future' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The Aral Sea and the true cost of irrigation',
      body: `In 1960, the Aral Sea was the fourth-largest lake on Earth — a 68,000 km² (26,255 sq mi) inland sea supporting a thriving fishing industry in the Soviet republics of Kazakhstan and Uzbekistan. By 2007, it had lost more than 90% of its volume. The cause was not drought: it was irrigation. Soviet engineers had diverted the two rivers feeding the Aral — the Amu Darya and the Syr Darya — into an 45,000 km (27963 mi) canal network to irrigate cotton fields across Central Asia. The rivers stopped flowing to the sea. The exposed lakebed became a salt flat, generating toxic salt and pesticide dust storms that poison 5 million people annually. The fishing industry collapsed. What remains is one of the worst environmental disasters in history, born from the world's most efficient agricultural water user and its most destructive overreach.

The Aral Sea disaster illustrates the core tension in agricultural water management: irrigation transformed arid and semi-arid regions into the world's most productive agricultural zones, but at a hydrological cost that is rarely fully priced. Agriculture accounts for approximately **70% of global freshwater withdrawals** — about 2,700 km³ (648 cu mi)/year — compared to 20% for industry and 10% for municipal use. Irrigated agriculture, which occupies only about **20% of global cropland**, produces roughly **40% of global food supply** because yields on irrigated land are 2–3× higher than rainfed equivalents. Without irrigation, feeding the current global population of 8 billion people would be impossible.

Irrigation systems divert water from rivers, pump groundwater, or capture rainfall, and deliver it to crops through four main methods: **flood (surface) irrigation**, where water flows across the field surface by gravity — the oldest and most widespread method (~65% of global irrigated area), requiring no energy but losing 30–50% of applied water to runoff and evaporation; **furrow irrigation**, where water flows along small channels between crop rows — more efficient than flood but still only 50–70% application efficiency; **sprinkler systems**, which distribute water through pressurised pipes and rotating heads, achieving 70–85% efficiency but requiring significant energy; and **drip (micro) irrigation**, which delivers water directly to the root zone through emitters, achieving 85–95% efficiency with 30–50% lower water use than flood irrigation. Despite drip irrigation's proven efficiency gains — Israeli agriculture pioneered it after 1950 to make the Negev Desert bloom — it accounts for only about 6% of global irrigated area because upfront costs can exceed $1,000/ha for installation.

A second major consequence of intensive irrigation is **soil salinization**: when irrigation water evaporates from soil, it leaves behind dissolved salts. In poorly drained soils, salts accumulate over decades until they become toxic to crops. Approximately **20% of all irrigated land worldwide** — about 60 million hectares — has been degraded by secondary salinization, with an additional ~3 million hectares lost to agricultural production each year. Ancient Mesopotamia, the "cradle of civilisation" between the Tigris and Euphrates rivers, experienced catastrophic agricultural decline around 2000 BCE due to irrigation-induced salinization — a cautionary tale embedded in the world's oldest agricultural landscapes.

The concept of **virtual water** (coined by British geographer John Allan in 1993) reframes international food trade as water trade. Producing one kilogram of beef requires approximately 15,000 litres of water (mostly for feed crops); one kg of wheat ~1,300 litres; one kg of rice ~2,500 litres. When water-scarce nations import food rather than growing it domestically, they effectively import the water that would have been needed to produce that food. Global agricultural trade transfers approximately **2,300 km³ (552 cu mi)/yr** of virtual water — more than the annual flow of the Mississippi River. For water-stressed nations like Egypt, Jordan, and Saudi Arabia, food imports serve as a hidden water management strategy: it is more hydrologically rational to import wheat than to pump the Nile dry or exhaust fossil aquifers to grow it domestically.

The **water–food–energy nexus** captures the three-way interdependence that makes agricultural water management so complex. Food production requires water; water delivery through pumping and treatment requires energy; and energy production (hydropower, thermoelectric cooling, biofuel crops) requires water. Increasing crop yields with fertiliser and machinery requires energy; that energy often comes from hydropower that shares the same river system with irrigation diversions. Biofuel expansion — growing corn, sugarcane, or oil palm for fuel — converts food-calorie water use into energy-calorie water use, competing directly with food production. In the western United States, energy used for agricultural pumping accounts for approximately **30% of California's electricity consumption**, making irrigation a major driver of energy demand and associated greenhouse gas emissions.`,
      keyTerms: [
        {
          term: 'Irrigation efficiency',
          def: 'The fraction of applied irrigation water actually used by crops. Flood irrigation: 40–65%; furrow: 50–70%; sprinkler: 70–85%; drip: 85–95%. Inefficiency results in waterlogging, salinization, groundwater recharge, and downstream flow reduction.',
        },
        {
          term: 'Soil salinization',
          def: 'Accumulation of salts in the root zone as irrigation water evaporates, leaving dissolved minerals behind. Affects ~20% of global irrigated land (~60 Mha). Reduces crop yields and eventually renders land uncultivable. Ancient Mesopotamia lost its agricultural productivity to salinization c. 2000 BCE.',
        },
        {
          term: 'Virtual water',
          def: 'The water embedded in the production of food and goods. Beef: ~15,000 L/kg; wheat: ~1,300 L/kg; rice: ~2,500 L/kg. Global food trade transfers ~2,300 km³ (552 cu mi)/yr of virtual water — allowing water-scarce nations to "import" water through food imports rather than depleting domestic resources.',
        },
        {
          term: 'Water–food–energy nexus',
          def: 'The interdependence between water, food, and energy systems: food production requires water; water delivery requires energy; energy production requires water. Managing one resource without considering the others leads to trade-offs and unintended consequences.',
        },
        {
          term: 'Evapotranspiration (ET)',
          def: 'The sum of water evaporated from soil surfaces and transpired through plant leaves. Represents the "productive" use of water in agriculture. In irrigated agriculture, ET consumes 50–90% of applied water; the remainder may percolate to groundwater or run off.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Irrigation systems, efficiency, and consequences',
      body: `The choice of irrigation system determines not just how much water is used, but where it goes, how it affects soils, and what energy it consumes. Globally, the transition from flood to drip irrigation could theoretically reduce agricultural water consumption by 30–50% while maintaining yields — but cost, infrastructure, and institutional barriers have slowed adoption.`,
      cards: [
        {
          name: 'Flood and Furrow Irrigation',
          icon: Droplets,
          color: BRAND.accent,
          desc: 'Oldest methods: gravity-fed water covers fields or flows in furrows. Application efficiency 40–70%. Requires no pumping energy if terrain allows. Water losses through deep percolation, field runoff, and evaporation. Dominant in South and East Asia, Africa, Middle East.',
          examples: 'India: 85% of irrigated area uses surface methods. Pakistan Indus canal system: ~14.5 Mha irrigated, world\'s largest contiguous irrigation system; also one of the most waterlogged and salinized. Egypt: Nile delta flood irrigation for 5,000 years; now converted largely to drip after Aswan High Dam ended annual flooding.',
        },
        {
          name: 'Drip Irrigation: Efficiency Revolution',
          icon: Activity,
          color: BRAND.jade,
          desc: 'Delivers water directly to root zone via emitters. Efficiency 85–95% — 30–50% less water than flood for same yield. Reduces salinization, waterlogging, and evaporation losses. Upfront cost: $500–3,000/ha. Only ~6% of global irrigated area despite proven benefits.',
          examples: 'Israel: pioneered drip irrigation post-1950; now 75% of irrigated area uses drip/sprinkler; 75% of wastewater recycled for agriculture. California almonds: drip reduced water use 25–35% vs flood. India\'s Pradhan Mantri Krishi Sinchayee Yojana: target to convert 4.8 Mha to micro-irrigation. Morocco: subsidised drip adoption reduced agricultural water use 20% in 2015–2020.',
        },
        {
          name: 'Soil Salinization',
          icon: AlertTriangle,
          color: BRAND.coral,
          desc: '~60 Mha irrigated land salinized globally (20% of total); 3 Mha lost/yr. Salinization occurs when irrigation water evaporates, concentrating dissolved salts. Impedes osmotic water uptake by roots. Remediation: leaching with large volumes of freshwater; tile drainage; salt-tolerant crop varieties.',
          examples: 'Mesopotamia: grain yields fell 65% between 2400–1700 BCE from salinization; cities abandoned. Colorado River Basin: irrigation return flows raise salinity from ~50 mg/L in headwaters to ~850 mg/L at Mexican border, costing US agriculture ~$330M/yr in crop damage. Pakistan: 6 Mha (25% of irrigated area) significantly salinized, reducing yields 25–40%.',
        },
        {
          name: 'Virtual Water and Food Trade',
          icon: Globe,
          color: BRAND.gold,
          desc: 'Importing food = importing the water to grow it. Water-scarce nations reduce domestic water demand by importing water-intensive crops. Global virtual water trade: ~2,300 km³ (552 cu mi)/yr. Major exporters: USA, Canada, Brazil, Argentina (water-abundant). Major importers: Middle East, North Africa, Japan, South Korea (water-scarce).',
          examples: 'Saudi Arabia: domestic wheat production using fossil groundwater abandoned 2016 after 3 decades of depletion; now imports 100% of wheat (~3.5 Mt/yr = ~4.5 km³ (1.1 cu mi) virtual water). Egypt: 60% self-sufficient in food; virtual water imports equivalent to 1.5× annual Nile River flow. Netherlands: largest EU agricultural exporter, yet one of Europe\'s smallest nations — highly efficient water use plus imports of water-intensive products.',
        },
        {
          name: 'Water–Food–Energy Nexus',
          icon: Zap,
          color: BRAND.amethyst,
          desc: 'Food needs water; water pumping needs energy; energy generation needs water. Corn ethanol (biofuel) requires 1,000–4,000 L water/L fuel. California agriculture: 30% of state electricity consumed by water/irrigation sector. Hydropower dams alter river hydrology, affecting downstream irrigation diversions.',
          examples: 'Colorado River: 7 major dams store 4.5× annual runoff for power and irrigation — but chronic over-allocation means the river rarely reaches the Gulf of California. Zambia–Zimbabwe: Kariba Dam on Zambezi provides 50% of both nations\' electricity AND enables irrigation; 2019 drought dropped reservoir to 9% capacity, triggering blackouts and food shortages simultaneously. EU biofuel mandate 2003–2015: land reallocation to energy crops reduced food production and raised grain prices.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From Source to Crop: The Agricultural Water Pathway',
      body: 'How water is diverted, delivered, and consumed across the agricultural cycle — and where losses, salinization, and governance challenges arise.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how freshwater is extracted from rivers and aquifers, delivered to crops through different irrigation systems, consumed by evapotranspiration, and how return flows, salinization, and virtual water trade interact with the agricultural water cycle',
        nodes: [
          {
            id: 'source',
            label: 'Water Sources',
            description: 'Agricultural water is drawn from three main sources: (1) river diversions (surface water) — ~60% of global irrigation withdrawals; (2) groundwater pumping — ~40%, often from non-renewable fossil aquifers like the Ogallala or Arabian aquifer; (3) harvested rainfall (rainfed farming, not requiring infrastructure). Over-extraction of groundwater for irrigation is the primary driver of global aquifer depletion, particularly in India, China, the US Great Plains, and North Africa.',
            color: BRAND.accent,
          },
          {
            id: 'delivery',
            label: 'Irrigation Delivery Systems',
            description: 'Water is conveyed from source to field via canals, pipes, and pumps. Conveyance losses (evaporation and seepage from unlined canals) can reach 30–50% before water even arrives at the field. Lining canals with concrete reduces seepage but increases cost. Field-level application efficiency varies: flood 40–65%, furrow 50–70%, sprinkler 70–85%, drip 85–95%. Overall system efficiency (source to crop root) is typically 35–55% for surface irrigation systems — meaning less than half the water diverted from the source reaches the crop.',
            color: BRAND.gold,
          },
          {
            id: 'crop-uptake',
            label: 'Crop Evapotranspiration',
            description: 'Crops absorb water through roots and transpire it through leaf stomata — the productive use of irrigation water. Reference evapotranspiration (ET₀) quantifies the "atmospheric demand" for water (typically 3–8 mm/day in irrigated regions). Actual crop ET depends on crop type (maize: ~500 mm/season; cotton: ~700 mm/season; rice: ~900–1,200 mm/season), growth stage, and canopy cover. Excess water beyond ET needs is "wasted" — either evaporated, percolated to groundwater, or returned as drainage.',
            color: BRAND.jade,
          },
          {
            id: 'salinization',
            label: 'Salt Accumulation',
            description: 'As irrigation water evaporates from soil, dissolved salts are left behind. Natural rainfall in humid climates leaches salts downward, but in arid regions — where irrigation is most needed — evaporation rates are high and leaching rainfall is absent. Without adequate drainage, salts accumulate in the root zone year after year. ~3 million hectares of irrigated land are abandoned annually due to salinization. The fix — excess irrigation to flush salts — requires even more water and creates waterlogging if drainage is inadequate.',
            color: BRAND.coral,
          },
          {
            id: 'return-flow',
            label: 'Return Flows and Downstream Effects',
            description: 'Water not consumed by crops (deep percolation, field runoff, drainage) eventually returns to rivers or recharges groundwater — "return flows." These are often degraded in quality: higher salinity, elevated nitrate from fertilisers, pesticide residues, and elevated temperature (from ponding). Colorado River salinization costs downstream users ~$330M/yr; Pakistan\'s Indus return flows have created vast waterlogged wastelands. In some basins, return flows support downstream users who depend on them, creating complex water rights conflicts when upstream efficiency improvements reduce return flows.',
            color: BRAND.amethyst,
          },
          {
            id: 'governance',
            label: 'Water Allocation and Governance',
            description: 'Who has the right to divert water for irrigation — and how much — is determined by water law, ranging from riparian rights (landowners adjacent to rivers can use water) to prior appropriation ("first in time, first in right") to state-managed allocation. In many developing nations, informal water rights prevail, with large farmers capturing disproportionate shares. Groundwater is often unregulated, with individual farmers drilling competing wells. Collective action to manage irrigation at basin scale — setting pumping limits, maintaining shared canals, resolving disputes — is among the hardest governance challenges in water management.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'source',     to: 'delivery',    label: 'Diversion and conveyance (30–50% loss)' },
          { from: 'delivery',   to: 'crop-uptake',  label: 'Field application (40–95% efficiency)' },
          { from: 'crop-uptake', to: 'salinization', label: 'Evaporation concentrates salts in root zone' },
          { from: 'delivery',   to: 'return-flow',  label: 'Deep percolation and field drainage' },
          { from: 'return-flow', to: 'source',      label: 'Degraded water returns to river/aquifer' },
          { from: 'governance', to: 'source',       label: 'Allocation rules determine extraction limits' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Drip irrigation achieves 85–95% application efficiency compared to 40–65% for flood irrigation, yet drip accounts for only about 6% of global irrigated area. What best explains this gap between proven efficiency and adoption?',
          a: [
            'Drip irrigation systems require specialised salinity-resistant soils not found in most agricultural regions; flood irrigation is more widely applicable across soil types',
            'Drip systems are technically incompatible with most staple crops (wheat, rice, maize) because their root architectures require full soil saturation; they are only suitable for orchard and vineyard crops',
            'Upfront capital costs for drip irrigation ($500–3,000/ha) are prohibitive for smallholder farmers who dominate irrigated agriculture in developing countries; combined with operational complexity, lack of technical support, and subsidy structures favouring water quantity over efficiency, adoption barriers have slowed diffusion despite proven water savings',
            'Drip irrigation only reduces evaporation losses, which are minor compared to transpiration; since the total evapotranspiration demand of crops is fixed by climate, drip irrigation saves little water compared to flood methods',
          ],
          correct: 2,
          explain: `A is wrong: drip systems can be adapted to a wide range of soils; the application is through point-source emitters at or below the soil surface, independent of the underlying soil chemistry. B is incorrect: drip and subsurface drip irrigation have been successfully applied to wheat (Israel, California), rice (requiring modification), maize (US Corn Belt), cotton, and virtually all major crops, not just orchards. D misunderstands the water balance: drip reduces both non-productive evaporation from wet soil between plants and deep percolation below the root zone (which is lost for crop use). Total crop evapotranspiration demand is indeed set by climate and crop type, but flood irrigation delivers far more water than ET requires, with the excess lost to evaporation and percolation. C correctly identifies the primary barriers: the smallholder farmer — who manages >75% of irrigated area in South Asia, sub-Saharan Africa, and South Asia — typically cannot afford the installation cost without subsidies or credit access. Many governments subsidise water price (keeping irrigation water cheap, reducing the incentive to save it) rather than technology (subsidising efficiency equipment). Technical maintenance challenges and lack of spare parts in rural areas also limit adoption. Israel's success with drip arose from a unique combination of extreme water scarcity (creating a strong economic incentive), a government-led technology development programme, and cooperative agricultural institutions — conditions absent in most developing world contexts.`,
        },
        {
          q: 'The Aral Sea shrank by over 90% in volume between 1960 and 2010, primarily as a result of irrigation diversions from the Amu Darya and Syr Darya rivers. What aspect of this disaster best illustrates the concept of "externalities" in water management?',
          a: [
            'The Aral Sea disaster illustrates that Soviet central planning was inherently inefficient at water allocation; market-based water pricing would have prevented over-diversion by assigning monetary value to water based on supply and demand',
            'The Aral Sea fishery collapse illustrates that freshwater fisheries are more economically valuable than irrigated cotton, so planners made an economically irrational trade-off that any proper cost-benefit analysis would have rejected',
            'The diversion of the Amu Darya and Syr Darya imposed massive costs — fishery collapse, salt and pesticide dust storms, collapsed regional economy, human health impacts — on communities living near the sea who had no voice in the irrigation decisions; these uncompensated costs borne by third parties (externalities) were not included in the economic calculus of the irrigation expansion, making diversion appear profitable while destroying enormous social and ecological value',
            'The Aral Sea disaster demonstrates that rivers should never be diverted for irrigation because the ecological value of maintaining river flow always exceeds the economic value of irrigated agriculture',
          ],
          correct: 2,
          explain: `A presents an ideological argument not directly supported by the Aral Sea case; water markets exist in some regions and also produce over-extraction (e.g., California groundwater) when third-party effects are not regulated. B makes a comparative value claim that is contestable (cotton irrigation supported millions of agricultural jobs, albeit at enormous environmental cost) and is not the core lesson of the disaster. D overgeneralises to a rule that is not universally true and would ban all river irrigation. C correctly identifies the central failure: in Soviet planning (and in most national water governance systems globally), the costs of diversion fall on parties — downstream communities, the lake ecosystem, fishing communities — who are not the decision-makers and who received no compensation for the costs imposed on them. The irrigators and cotton planners did not bear the cost of the Aral Sea's destruction; instead, those costs fell on the 35 million people in the Aral Sea basin who experienced salt storms, increased infant mortality, collapsed fisheries, and extreme poverty. This is the classic externality problem in natural resource management: when decision-makers can impose costs on others without compensation, they systematically under-price the resource and over-extract. The Aral Sea disaster is among the largest externality failures in environmental history.`,
        },
        {
          q: 'Pakistan imports large quantities of wheat despite having the world\'s largest contiguous irrigation system (the Indus Canal system). Saudi Arabia abandoned domestic wheat production entirely in 2016. What concept best explains why importing food can be a rational water management strategy for water-scarce nations?',
          a: [
            'Comparative advantage in economics: Pakistan and Saudi Arabia are better at manufacturing than agriculture, so they should specialise in manufacturing and trade for food; water scarcity is incidental to this economic specialisation',
            'Virtual water trade: by importing water-intensive crops like wheat, water-scarce nations effectively import the water that would have been needed to grow those crops domestically, conserving their scarce freshwater for higher-value or more critical uses — or avoiding the depletion of non-renewable aquifers',
            'Water recycling: both countries can treat and recycle irrigation return flows, so importing food reduces the volume of water that needs to be recycled; domestic grain production would generate more wastewater than the countries can manage',
            'Food security: importing food is always preferable to domestic production in arid regions because drought can destroy domestic harvests but import contracts guarantee year-round supply regardless of local rainfall',
          ],
          correct: 1,
          explain: `A partially applies (comparative advantage exists) but misses the specifically hydrological dimension that explains the food-water link. C is incorrect — water recycling is a separate strategy unrelated to whether food is grown domestically or imported. D presents food security as a universal rule when in fact many water-scarce nations (e.g., Egypt) strongly resist food import dependence for national security reasons, even at hydrological cost. B correctly identifies the virtual water framework: producing one tonne of wheat requires approximately 1,300 cubic metres of water; one tonne of beef requires approximately 15,000 m³. When Saudi Arabia was producing 3 million tonnes of wheat per year domestically (before the 2016 withdrawal), it was effectively "exporting" ~3.9 km³ (0.94 cu mi) of fossil groundwater per year — water from aquifers that recharge in geological, not human, timescales. The geopolitical and food security logic favoured domestic production, but the hydrological reality was that the nation was permanently depleting a non-renewable resource. By importing wheat — equivalent to importing the water needed to grow it — nations redirect that water demand to water-abundant countries (major wheat exporters like Canada, Australia, USA, and France, which have rainfed surpluses or sustainable irrigation). This does not mean food imports are always optimal, but virtual water accounting reveals a hidden dimension of food trade: it is simultaneously water trade.`,
        },
        {
          q: 'Soil salinization affects approximately 20% of irrigated land globally and destroys ~3 million hectares of agricultural productivity annually. What physical process causes salinization, and why is it particularly severe in arid regions?',
          a: [
            'Salinization is caused by salt-rich irrigation water; only rivers with naturally high salt content produce salinization, so it is a problem confined to regions with inherently salty rivers like the Colorado or Indus; rivers with low salinity (e.g., the Amazon) cannot cause salinization even with poor drainage',
            'Salinization occurs when soil waterlogging raises the water table to the root zone; the high water table kills crop roots by oxygen deprivation (not salt), and the term "salinization" is a misnomer for what is really a drainage problem; salt accumulation is a consequence, not a cause, of root damage',
            'When irrigation water evaporates from the soil surface and is transpired by crops, water molecules depart but dissolved mineral salts remain behind, progressively concentrating in the root zone; in arid regions, high evaporation rates and low natural rainfall mean there is insufficient precipitation to leach salts downward through the soil profile, so salts accumulate year after year until concentrations reach phytotoxic levels',
            'Salinization is caused by capillary rise of saline groundwater into the root zone; it is entirely a groundwater problem and is unrelated to irrigation water quality or application method; drip irrigation prevents salinization because it does not raise the water table',
          ],
          correct: 2,
          explain: `A is partly wrong: while river salinity does contribute (the Colorado delivers ~850 mg/L of dissolved salts at its lower reaches, adding ~0.8 tonnes (0.9 tons) of salt per 1,000 m³ of irrigation water), even low-salinity rivers cause salinization in poorly drained arid soils because the mechanism is evaporative concentration, not the initial salinity of the water alone. Even "clean" water contains small quantities of dissolved minerals; over many decades of irrigation, these accumulate. B incorrectly identifies waterlogging as the cause — waterlogging and salinization are related problems (poor drainage leads to both) but are distinct; salinization can occur in well-drained soils if evaporation concentrates salts near the surface. D captures one pathway (capillary rise of shallow saline water tables) but misses the primary surface evaporation mechanism and incorrectly claims drip irrigation prevents salinization — drip can reduce waterlogging but still delivers salts that concentrate unless drainage is maintained. C correctly describes the dominant mechanism: water is the carrier of dissolved salts; when the water molecule leaves the soil through evaporation (solar energy drives water from soil surface to atmosphere) or transpiration (roots take up water but leave salt ions behind), salts remain and accumulate. In humid climates, natural rainfall events leach accumulated salts below the root zone and eventually to rivers or groundwater. In arid regions — where irrigation is most needed because rainfall is insufficient — annual precipitation rarely exceeds ~200–400 mm (15.75 in), far less than annual evapotranspiration of ~1,000–2,000 mm (78.74 in), so natural leaching is insufficient. The historical decline of Mesopotamian civilisation (third millennium BCE) from salinization demonstrates this process operating across millennia.`,
        },
        {
          q: 'The water–food–energy nexus describes the interdependencies between water, food production, and energy systems. Which scenario best illustrates a nexus trade-off where a decision made in one sector creates unintended consequences in another?',
          a: [
            'Installing solar panels on farmland in Arizona to generate electricity, which then powers drip irrigation pumps, reduces both water use and greenhouse gas emissions — a classic win-win with no nexus trade-offs',
            'The European Union\'s 2003 Renewable Energy Directive mandating 5.75% biofuel in transport fuel by 2010 increased demand for energy crops (rapeseed, maize, palm oil), converting food-producing land and diverting crops from food markets, contributing to the 2007–2008 global food price spike; simultaneously, palm oil expansion in Indonesia drove deforestation that disrupted regional hydrology and released large carbon stores',
            'Constructing a hydropower dam on a river provides renewable electricity but has no effect on downstream irrigation because dams store water that was already in the river, simply releasing it in a more controlled manner; the total volume of water available for irrigation is unchanged',
            'Improving irrigation efficiency through drip systems reduces agricultural water withdrawals but has no effect on energy use or food production; the three systems (water, food, energy) are independent at the farm scale',
          ],
          correct: 1,
          explain: `A describes a genuinely beneficial synergy, not a trade-off; the nexus concept encompasses both synergies and conflicts. C is incorrect: dams change the timing and amount of downstream river flow, which profoundly affects irrigation. Dams trap sediment (reducing downstream soil fertility that rainfed farmers depend on), alter seasonal flow patterns (potentially disrupting traditional flood-recession agriculture), increase evaporation from the reservoir surface (consuming water that would otherwise flow downstream), and change water temperature. Large dams often reduce total downstream water availability relative to natural conditions — the Colorado River, for example, essentially dries up before reaching the Gulf of California because reservoir evaporation and irrigation losses consume the full flow. D is incorrect: irrigation efficiency improvements affect energy use (less pumping needed), and by freeing up water for additional irrigated area, can affect food production; the systems interact at multiple scales. B correctly illustrates a nexus trade-off: biofuel mandates created energy policy that reverberated through food (higher grain prices, food insecurity for the poor) and water systems (palm oil expansion in water-stressed tropical regions; thirstier energy-crop varieties replacing food crops). The 2007–2008 global food crisis had multiple causes, but the sudden expansion of biofuel demand — roughly tripling US corn ethanol output between 2005–2010 — diverted ~15–20% of US corn from food/feed markets, contributing to a 125% rise in maize prices over 2007–2008 that triggered food riots in over 30 countries. This illustrates how energy policy decisions propagate through the water and food systems in ways that are often not analysed at the time of the decision.`,
        },
      ],
    },
  ],
}

export default irrigationAndFoodWater
