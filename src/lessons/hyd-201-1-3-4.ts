import { Globe, Layers, Activity, Zap, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const integratedWaterManagement: Lesson = {
  id: 'hyd-201-1-3-4',
  title: 'Integrated Water Resource Management',
  track: 'geo',
  trackName: 'Advanced Hydrology',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: 'From basin-scale governance and virtual water trade to desalination, aquifer recharge, and water markets — the institutional, economic, and engineering frameworks for managing freshwater under scarcity and climate change.',
  sources: [
    { org: 'GWP',    title: 'Global Water Partnership — Integrated Water Resources Management',                    url: 'https://www.gwp.org/en/gwp-network/GWP-Toolbox/about/what-is-iwrm/' },
    { org: 'UN',     title: 'UN Water — SDG 6: Clean Water and Sanitation',                                        url: 'https://www.unwater.org/sdgs/sdg6' },
    { org: 'MDBA',   title: 'Murray-Darling Basin Authority — Basin Plan',                                         url: 'https://www.mdba.gov.au/basin-plan' },
    { org: 'USBR',   title: 'US Bureau of Reclamation — Colorado River Drought Contingency Plan',                  url: 'https://www.usbr.gov/dcp/' },
    { org: 'IDA',    title: 'International Desalination Association — Desalination and Water Reuse',               url: 'https://idadesal.org/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Managing water across borders, sectors, and generations — from the Nile to virtual water trade to the SDG 6 access gap',
      body: `Freshwater is simultaneously a local physical resource, a global commodity, a political flashpoint, and the foundation of food and energy systems. Integrated Water Resources Management (IWRM), formalised by the Global Water Partnership in 2000, defines the framework: coordinated management of water, land, and related resources to maximise economic and social welfare equitably while sustaining ecosystem integrity. IWRM recognises that water management failures typically stem not from absolute water scarcity but from fragmented governance — the agricultural ministry maximising irrigation, the energy ministry maximising hydropower, and the environment agency protecting rivers, all operating independently and often at cross-purposes.

Transboundary water governance illustrates both the necessity and difficulty of IWRM. The Nile Basin Initiative — a partnership of 10 riparian countries sharing the world's longest river — has created a forum for negotiation, but tensions remain between Ethiopia (building the Grand Ethiopian Renaissance Dam, reservoir capacity ~74 km³, filling beginning 2020) and downstream Egypt and Sudan (dependent on the Nile for ~97% of freshwater). Jordan and Israel's 1994 peace treaty included a detailed water-sharing annex, a rare example of successful transboundary water diplomacy, allocating 50 million m³/yr to Jordan from Lake Tiberias. The Columbia River Treaty (1964, US-Canada) pioneered international cooperative hydropower and flood control, though both nations reopened negotiations in the 2010s to incorporate ecosystem concerns not originally addressed.

The concept of virtual water — the water embedded in traded goods, introduced by Tony Allan in the 1990s — fundamentally reframes global water use. When the UK imports wheat from Canada, it is effectively importing the ~1,300 litres of water per kilogram of wheat used in Canadian agriculture. The UK imports approximately 70% of its total water footprint as virtual water in food and manufactured goods. Globally, ~76% of virtual water trade is embedded in agricultural products. For water-scarce countries, food imports can be more water-efficient than domestic production, but virtual water trade also transfers agricultural production and water risk to exporting countries.

The water-food-energy nexus is the interdependency that IWRM must navigate. Agriculture accounts for approximately 70% of global freshwater withdrawals. Hydropower reservoirs regulate river flows for energy generation — globally ~1,300 GW of installed capacity — but their operations may conflict with downstream irrigation diversions, flood management, and ecosystem flows. Groundwater over-extraction powers agricultural production in Pakistan, India, the US High Plains, and northern China, but it is depleting aquifers that cannot be replenished on agricultural timescales.

Solutions are increasingly technological and market-based. Managed Aquifer Recharge (MAR) — deliberately recharging depleted aquifers with treated wastewater, stormwater, or seasonally surplus surface water — is practiced at scale in California, Arizona, and the Netherlands. The Los Angeles County Flood Control District uses infiltration basins to recharge groundwater, meeting approximately 70% of the region's drinking water through groundwater extraction supplemented by imported surface water. Desalination — particularly reverse osmosis (RO) — is removing the ocean as a supply constraint for water-scarce coastal nations: Saudi Arabia generates ~70% of its drinking water from desalination; Israel meets ~80% of household water demand through desalination and treated wastewater reuse. RO energy costs have declined to ~3–4 kWh per cubic metre from ~10 kWh/m³ in the 1990s, making coastal desalination increasingly competitive in energy-rich or high-value-water contexts. Water markets — where water rights can be traded — have been pioneered in Australia's Murray-Darling Basin and Chile, creating price signals that encourage efficiency; California's State Water Project uses curtailment and transfer mechanisms that increasingly resemble a managed market. Despite all these tools, 2.2 billion people still lack access to safely managed drinking water — the central challenge of SDG 6, whose universal target of safe water and sanitation by 2030 is now widely acknowledged to be off-track.`,
      keyTerms: [
        {
          term: 'IWRM (Integrated Water Resources Management)',
          def: 'GWP 2000: coordinated development and management of water, land, and related resources to maximise economic and social welfare without compromising ecosystem sustainability.',
        },
        {
          term: 'Virtual Water',
          def: 'The volume of water embedded in traded goods — especially food. Introduced by Tony Allan. Allows water-scarce nations to effectively import water through food imports.',
        },
        {
          term: 'Water-Food-Energy Nexus',
          def: 'The interdependency among water use (70% of withdrawals for agriculture), food production, and energy generation (hydropower, thermoelectric cooling). Trade-offs are central to IWRM.',
        },
        {
          term: 'Managed Aquifer Recharge (MAR)',
          def: 'Deliberate recharge of depleted aquifers via infiltration basins, injection wells, or ASR (aquifer storage and recovery). Restores storage and can create coastal saltwater barriers.',
        },
        {
          term: 'Reverse Osmosis (RO) Desalination',
          def: 'Membrane-based desalination process. Energy cost ~3–4 kWh/m³ for seawater RO. Provides ~70% of Saudi Arabia\'s and ~80% of Israel\'s drinking water.',
        },
        {
          term: 'SDG 6',
          def: 'UN Sustainable Development Goal 6: ensure access to clean water and sanitation for all by 2030. Currently off-track: 2.2 billion people still lack safely managed drinking water.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Transboundary Governance and Virtual Water',
      body: `Water flows across political boundaries through rivers, aquifers, and trade. Effective IWRM requires institutional frameworks that align incentives across states, nations, and sectors — and an understanding of how global trade redistributes water consumption far from where goods are produced.`,
      cards: [
        {
          name: 'Nile Basin Initiative',
          icon: Globe,
          color: BRAND.accent,
          desc: '10 riparian nations sharing the Nile. Ethiopia\'s Grand Ethiopian Renaissance Dam (74 km³ capacity) reshapes downstream flows for Egypt and Sudan. Ongoing negotiation over filling rate and drought protocols. NBI provides scientific and diplomatic coordination framework.',
          examples: 'Egypt has historically claimed ~55.5 km³/yr under a 1959 Nile Waters Agreement. Ethiopia argues the colonial-era agreements must be renegotiated. First GERD filling (2020–2022): ~11 km³ impounded; Egypt and Sudan requested slower filling. Negotiations ongoing under African Union mediation.',
        },
        {
          name: 'Jordan-Israel Water Treaty (1994)',
          icon: ArrowRight,
          color: BRAND.jade,
          desc: 'Peace treaty Annex II allocates 50 million m³/yr of Lake Tiberias water to Jordan; Israel transfers an additional 50 million m³/yr from Israeli desalination. Rare example of water embedded as treaty right rather than a political afterthought. Joint Water Committee manages implementation.',
          examples: 'Jordan is among the world\'s most water-scarce nations (per capita renewable water ~150 m³/yr vs. global average ~6,000 m³/yr). The treaty water transfer materially supports Jordanian domestic and agricultural supply. A 2021 supplemental agreement added 50 million m³/yr from Israeli desalination in exchange for solar electricity exports from Jordan.',
        },
        {
          name: 'Virtual Water and the UK',
          icon: Layers,
          color: BRAND.coral,
          desc: 'The UK imports ~70% of its total water footprint as virtual water embedded in food and manufactured goods. Water-scarce exporters (e.g., Spain, Morocco) bear the water cost. Allan\'s virtual water concept shifted the debate from physical water transfers to trade policy as a water management tool.',
          examples: 'UK beef imports: ~15,000 litres/kg virtual water embedded. One 200g beef burger ≈ ~3,000 litres virtual water. Globally ~76% of virtual water trade is agricultural. Water-scarce nations like Israel and Jordan achieve effective water savings of billions of m³/yr through food imports.',
        },
        {
          name: 'Colorado River: Drought Contingency Plan',
          icon: Activity,
          color: BRAND.gold,
          desc: 'Arizona\'s Drought Contingency Plan (2019): tiered water cuts to Central Arizona Project (CAP) triggered by Lake Mead elevation. Tier 1: Mead < 1,075 ft → 512,000 acre-ft/yr CAP cut. Tier 3: Mead < 1,025 ft → 720,000 acre-ft/yr cut. First US Tier 1 cuts triggered August 2021.',
          examples: 'CAP serves 6 million people and 375,000 acres of farmland. Tier 1 cuts triggered for the first time in 2021; Tier 2a cuts (Mead < 1,050 ft) triggered in 2022. Compact renegotiation discussions intensified as reservoir storage approached dead pool elevations. 2026 post-2026 operating guidelines negotiations ongoing.',
        },
        {
          name: 'Murray-Darling Water Markets',
          icon: Zap,
          color: BRAND.amethyst,
          desc: 'Australia\'s Murray-Darling Basin Plan (2012) caps total diversions at ~10,873 GL/yr (down from pre-plan ~14,000 GL/yr) and allocates environmental water. Water trading market: ~$4 billion/yr in transactions allows water to flow to highest-value uses. Price signals drive irrigation efficiency.',
          examples: 'MDB water prices reached A$800–1,000/ML during the 2019 Millennium Drought. Trading allows dairy farmers in Victoria to lease allocation from cotton irrigators in Queensland. Chile\'s 1981 Water Code created the world\'s oldest tradeable water rights system — increasingly debated as inequitable in drought conditions.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Supply Augmentation: MAR and Desalination',
      body: `Where demand management and allocation reform are insufficient to close the water gap, supply augmentation technologies — managed aquifer recharge, desalination, and treated wastewater reuse — are becoming essential components of integrated water strategies. Understanding their costs, benefits, and limitations is central to advanced water resource management.`,
      cards: [
        {
          name: 'Managed Aquifer Recharge (MAR)',
          icon: Layers,
          color: BRAND.accent,
          desc: 'Methods: surface spreading (infiltration basins, recharge ponds), direct injection wells, ASR (aquifer storage and recovery). Soil-aquifer treatment improves water quality during percolation. ASCE standards govern design and operation. Cost: $0.10–0.50/m³ depending on source water quality.',
          examples: 'Orange County Water District (CA): Groundwater Replenishment System produces 500,000 m³/day of indirect potable reuse water (toilet to tap) recharged to the basin, providing 35% of county supply. Los Angeles: ~70% of drinking water comes from groundwater supplemented by MWD imports; MAR basins in San Gabriel Valley capture winter flood flows.',
        },
        {
          name: 'Aquifer Storage and Recovery (ASR)',
          icon: Activity,
          color: BRAND.jade,
          desc: 'Water injected into an aquifer during wet seasons or surplus periods and recovered during droughts via the same or nearby wells. Provides a subsurface "bank" that avoids reservoir evaporation losses (~2 m/yr in arid SW USA). Arizona: ASR used extensively to bank Colorado River water for future drought.',
          examples: 'Arizona Water Bank Authority: stored >12 billion gallons (45 km³) of Colorado River water in underground banks since 1996. This stored water is recoverable by member utilities during Tier 2+ Colorado River shortage declarations, providing multi-year drought resilience without surface reservoir expansion.',
        },
        {
          name: 'Reverse Osmosis Desalination',
          icon: Globe,
          color: BRAND.coral,
          desc: 'Seawater RO: ~3–4 kWh/m³ energy; capital cost ~$1–2/m³/day capacity. Brine disposal challenge (twice-salinity reject stream). Saudi Arabia: 70% of drinking water from desal (Jubail ~1.4 million m³/day). Israel: Sorek Plant 624,000 m³/day. Global installed capacity: ~100 million m³/day.',
          examples: 'Israel\'s National Water Carrier now flows in reverse: desalinated Mediterranean water pumped south into the Jordan Valley while treated wastewater is pumped north for agriculture. Israel\'s water security transformed from chronic crisis (1990s) to surplus (2020s) primarily through desal + treated wastewater reuse.',
        },
        {
          name: 'Israel: Treated Wastewater Reuse',
          icon: Zap,
          color: BRAND.gold,
          desc: 'Israel treats ~87% of wastewater and reuses ~85% of treated effluent for agricultural irrigation — the highest rate globally. The Dan Region Reclamation Project has operated since 1977. Treated wastewater meets ~25% of total agricultural water demand, freeing freshwater for domestic use.',
          examples: 'Shafdan WWTP (Dan Region): treats 350,000 m³/day, infiltrates through sand dunes for further soil-aquifer treatment, recovers as high-quality irrigation water from wells. The Negev Desert is irrigated primarily with treated wastewater, enabling agriculture in a region with <200 mm/yr of rainfall.',
        },
        {
          name: 'SDG 6: Water Access Gap',
          icon: ArrowRight,
          color: BRAND.amethyst,
          desc: '2.2 billion people lack safely managed drinking water; 3.5 billion lack safely managed sanitation (2022). Progress accelerating in urban areas but stagnating in rural Sub-Saharan Africa. Current trajectory misses 2030 target by decades. Financing gap estimated at $114 billion/yr.',
          examples: 'Sub-Saharan Africa: only 27% of rural population has safely managed drinking water. WASH (water, sanitation, hygiene) interventions have cost-benefit ratios of $5–$10 returned per $1 invested in terms of reduced healthcare costs and economic productivity. Failure to meet SDG 6 undermines food security (SDG 2), health (SDG 3), and gender equity (SDG 5).',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'IWRM Nexus: Linking Water Governance, Trade, and Technology',
      body: 'How integrated water management connects transboundary governance, virtual water trade, demand-side markets, and supply augmentation technologies into a coherent framework for water security under increasing scarcity and climate variability.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how the IWRM framework links transboundary river governance, virtual water trade in agricultural commodities, drought contingency planning, water markets, managed aquifer recharge, and desalination into an integrated response to water scarcity, with SDG 6 as the overarching equity goal',
        nodes: [
          {
            id: 'freshwater-stress',
            label: 'Freshwater Stress & Climate Variability',
            description: 'Climate change reduces renewable freshwater in semi-arid regions by 10–30% by 2100 under high-emission scenarios. Population growth increases demand. 2.2 billion already lack safely managed drinking water. SDG 6 target (universal access by 2030) is currently off-track.',
            color: BRAND.accent,
          },
          {
            id: 'transboundary-governance',
            label: 'Transboundary Basin Governance',
            description: 'River basin organisations (Nile Basin Initiative, US-Canada Columbia River Treaty, Mekong River Commission) coordinate cross-border water allocation and drought response. Effective governance is the precondition for all other IWRM tools. ~261 internationally shared river basins covering 45% of global land area.',
            color: BRAND.jade,
          },
          {
            id: 'virtual-water-trade',
            label: 'Virtual Water Trade & Food Policy',
            description: 'Food imports implicitly import embedded water. Water-scarce nations (Middle East, N. Africa) effectively import 70–80% of their water footprint through food imports. Policy implication: trade liberalisation for food is simultaneously a water management strategy for importing nations.',
            color: BRAND.gold,
          },
          {
            id: 'water-markets',
            label: 'Water Markets & Allocation Efficiency',
            description: 'Tradeable water rights (Australia, Chile, California) allow water to move from lower-value uses (flood irrigation of low-value crops) to higher-value uses (urban supply, high-value crops). Price signals drive adoption of water-efficient technologies. Risk: market concentration and inequity if poorly regulated.',
            color: BRAND.coral,
          },
          {
            id: 'managed-recharge',
            label: 'Managed Aquifer Recharge & Reuse',
            description: 'MAR replenishes depleted groundwater, provides drought storage buffer, and can create coastal saltwater intrusion barriers. Indirect potable reuse (treated wastewater recharged to aquifer) is increasingly accepted globally. Israel reuses 85% of treated wastewater; Singapore\'s NEWater supplies 40% of demand.',
            color: BRAND.ruby,
          },
          {
            id: 'desalination',
            label: 'Desalination & Climate-Independent Supply',
            description: 'Seawater RO at ~3–4 kWh/m³ provides drought-proof supply for coastal nations. Powered by renewables, carbon footprint approaches zero. Saudi Arabia, UAE, Israel, Singapore, Australia, Spain all use large-scale RO. Remaining challenges: brine disposal, energy cost for inland siting, capital cost for low-income nations.',
            color: BRAND.amethyst,
          },
          {
            id: 'sdg6-equity',
            label: 'SDG 6: Universal Water Access',
            description: 'The foundational equity goal: safely managed drinking water and sanitation for all by 2030. Currently 2.2 billion without safe water, 3.5 billion without safe sanitation. Progress requires combining governance reform, technology, and financing. Success on SDG 6 unlocks progress on food security, health, gender equity, and economic development.',
            color: BRAND.accent,
          },
        ],
        edges: [
          { from: 'freshwater-stress',      to: 'transboundary-governance', label: 'Scarcity creates inter-state competition requiring coordinated governance' },
          { from: 'freshwater-stress',      to: 'virtual-water-trade',      label: 'Import food to avoid producing water-intensive crops domestically' },
          { from: 'transboundary-governance', to: 'water-markets',          label: 'Governance frameworks enable legal water trading across sub-national boundaries' },
          { from: 'water-markets',          to: 'managed-recharge',         label: 'Market revenue funds MAR infrastructure; banked water is traded as ASR credit' },
          { from: 'managed-recharge',       to: 'sdg6-equity',              label: 'Aquifer recharge and treated wastewater reuse expand safe water supply' },
          { from: 'freshwater-stress',      to: 'desalination',             label: 'Scarcity justifies high capital and energy cost of seawater RO' },
          { from: 'desalination',           to: 'sdg6-equity',              label: 'Climate-independent supply removes drought as barrier to safe water access' },
          { from: 'virtual-water-trade',    to: 'sdg6-equity',              label: 'Freeing domestic water from low-value agriculture enables reallocation to drinking water' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The "virtual water" concept reframes water scarcity as a trade policy issue. How does a water-scarce nation effectively "import water" through food trade, and what are the distributional consequences of this strategy for exporting nations?',
          a: [
            'A water-scarce nation imports virtual water by purchasing desalination technology from water-rich nations; the exporting nation physically ships the technology, not water, so there is no water depletion impact on the exporting country; the only consequence is a technology transfer payment',
            'A water-scarce nation imports virtual water by purchasing food grown using the exporter\'s water resources; rather than using domestic water to grow crops, the importing nation\'s water footprint is effectively outsourced to the agricultural watershed in the exporting country, which must sustain the water withdrawal from its own renewable or fossil water supplies',
            'A water-scarce nation imports virtual water by building pipelines from water-rich river basins in neighbouring countries; "virtual" refers to the legal framework under which water rights are temporarily transferred across borders, rather than physically piped water',
            'Virtual water imports only affect the importing nation\'s water accounts; the exporting nation\'s water resources are unaffected because crops extract water from rainfall that would otherwise have evaporated anyway, so there is no net depletion of renewable water resources in the exporting country',
          ],
          correct: 1,
          explain: 'Tony Allan\'s virtual water concept (introduced in the early 1990s for the Middle East context) recognises that when a nation imports food, it implicitly imports the water that was used to grow that food in the exporting country. A kilogram of wheat requires approximately 1,300 litres of water; a kilogram of beef requires ~15,000 litres. Water-scarce nations like Jordan, Israel (before desalination), and MENA countries historically would have faced even more severe water crises if they had attempted to produce all their food domestically — they would have needed many times more water than their renewable freshwater resources could supply. By importing food instead, they effectively "import" the water embedded in it from the exporting country. The distributional consequence for exporting nations is real and significant: major agricultural exporters (USA, Australia, Brazil, Argentina, Canada) export enormous volumes of virtual water embedded in food. Where that food is grown using non-renewable groundwater (as in the US High Plains, the Middle East, or northern India), virtual water exports accelerate fossil aquifer depletion. Where grown using renewable water, the burden falls on river systems and rainfall in the exporting nation\'s agricultural regions. This has raised equity and sustainability concerns about whether virtual water trade externalises water risks from wealthy water-scarce importers onto lower-income exporters.',
        },
        {
          q: 'Arizona\'s Drought Contingency Plan uses tiered cuts to Central Arizona Project deliveries triggered by Lake Mead elevation. What principle of water management does this illustrate, and why is tiering more effective than a single crisis-threshold approach?',
          a: [
            'Tiered cuts illustrate the IWRM principle of demand management: by reducing consumption early in a drought cycle, tiered systems prevent over-allocation crises and maintain reservoir storage above critical thresholds; early, moderate cuts are economically less disruptive than late, catastrophic cuts because users can adapt incrementally rather than facing sudden supply loss',
            'Tiered cuts illustrate the principle of water trading: each tier represents a price level at which water rights holders can voluntarily sell their allocations to the highest bidder, ensuring the market allocates scarce water most efficiently during drought',
            'Tiered cuts illustrate the precautionary principle: by imposing the maximum possible water restrictions at the first sign of drought, the DCP prevents any chance of reaching critical low-storage conditions, even though this approach imposes maximum economic cost regardless of actual drought severity',
            'Tiered cuts illustrate the principle of full cost recovery: the cut percentages at each tier are calibrated to the incremental cost of alternative water supplies (desalination, groundwater), ensuring that when cuts are imposed, the cost of alternatives is always below the market value of the curtailed water',
          ],
          correct: 0,
          explain: 'Arizona\'s Drought Contingency Plan (adopted 2019) establishes a ladder of increasingly severe Central Arizona Project delivery reductions triggered by Lake Mead surface elevation: Tier 1 at 1,075 ft (512,000 AF/yr reduction), Tier 2a at 1,050 ft, Tier 2b at 1,025 ft, and Tier 3 at 1,000 ft (720,000 AF/yr reduction). This tiered approach embodies the IWRM principle of graduated demand management: by imposing progressively larger cuts as reservoir storage declines, the system preserves optionality and allows users to adapt over multiple years rather than receiving catastrophic cuts all at once. Early-tier cuts allow agricultural users to fallow fields, switch to less water-intensive crops, or purchase alternative water, while giving time for infrastructure adjustments and groundwater bank drawdowns. Without the tiered approach, policymakers might delay action until reservoir storage reaches crisis level, at which point the required cuts would be so large and sudden that agricultural systems, urban suppliers, and economies could not adapt in time. The DCP also creates symmetrical obligations among the seven basin states and the US Bureau of Reclamation, addressing the collective action problem in which each state has an individual incentive to delay cuts while hoping others reduce consumption first.',
        },
        {
          q: 'Israel meets approximately 80% of household water demand through desalination and treated wastewater reuse. What technological and institutional factors enabled this transformation, and what limitations prevent the same approach from being applied universally?',
          a: [
            'Israel\'s water transformation was enabled primarily by its geographical location on the Mediterranean coast (unlimited seawater) and by a socialist government water ministry that could mandate investment regardless of cost or market signals; the approach cannot be replicated universally because most water-scarce nations are landlocked and lack socialist governance structures',
            'Israel\'s transformation was enabled by sustained government investment in large-scale seawater reverse osmosis plants (including Sorek at 624,000 m³/day), mandatory advanced wastewater treatment, and a national infrastructure integrating desal output with the National Water Carrier; limitations include high energy costs (~3–4 kWh/m³ for seawater RO), the need for coastal access, and capital costs of ~$1–2/m³/day capacity that are prohibitive for low-income nations',
            'Israel\'s transformation was enabled by advances in graphene nano-membrane technology that reduced desalination energy costs to near zero after 2010; the approach cannot be replicated universally only because graphene membranes require rare earth minerals available primarily in Israel\'s Negev Desert',
            'Israel\'s transformation required no government investment — private water companies built all desalination and reuse infrastructure under fully private Build-Operate-Transfer contracts; the approach cannot be replicated universally because most governments lack the regulatory frameworks to enforce such private contracts across multiple water use sectors',
          ],
          correct: 1,
          explain: 'Israel\'s transformation from a chronically water-stressed nation in the 1990s to one with surplus capacity in the 2020s required three mutually reinforcing elements: (1) Large-scale seawater RO investment. The government-owned Mekorot utility built and operates five large coastal RO plants (Sorek I and II, Hadera, Ashkelon, Palmachim) with combined capacity >1.5 million m³/day, making Israel the world\'s most desalination-dependent country per capita. (2) Advanced wastewater treatment and reuse. The Dan Region Shafdan plant and similar facilities treat municipal wastewater to a standard suitable for agricultural irrigation through a soil-aquifer treatment step. Israel reuses 85–90% of treated wastewater, freeing high-quality freshwater for domestic and industrial use. (3) National infrastructure integration. The National Water Carrier — originally built to pump Sea of Galilee water southward — was partially reversed in direction as desalination output exceeded Galilee yields, demonstrating how supply diversification can actually increase system reliability. Limitations preventing universal application: (a) Energy cost: 3–4 kWh/m³ for seawater RO is manageable for Israel\'s well-resourced economy but prohibitive where electricity costs are high or subsidies unavailable; (b) Coastal access: inland water-scarce nations (sub-Saharan Africa interior, Central Asia) cannot access seawater without extremely expensive long-distance piped infrastructure; (c) Capital cost: $1–2/m³/day of capacity requires hundreds of millions to billions of dollars for meaningful scale — financing that low-income nations cannot access without international development support; (d) Brine disposal: coastal discharge of concentrated brine is manageable in the Mediterranean but ecologically problematic in enclosed seas or shallow coastal ecosystems.',
        },
        {
          q: 'Australia\'s Murray-Darling Basin Plan uses water trading to allocate scarce water efficiently. What is the theoretical economic justification for water markets, and what empirical concerns have emerged from the MDB experience?',
          a: [
            'The theoretical justification is that water markets maximise total economic output by allowing water to flow to its highest-value use through voluntary trades; concerns in the MDB include market concentration among large corporate irrigators who can manipulate prices, inadequate environmental water allocations, and failure of the market to account for the third-party impacts of water extraction on downstream users and ecosystems',
            'The theoretical justification is that water markets reduce total water consumption by raising prices to their scarcity value, which automatically eliminates water use below the price level; concerns in the MDB are primarily that the market has failed to raise prices high enough, so over-consumption continues and the environmental water recovery targets have not been met',
            'The theoretical justification is that water markets allow the government to generate revenue through water trading taxes, which can then be redistributed to subsidise water-intensive industries during drought; the empirical concern is that the Murray-Darling market generates insufficient revenue to compensate farmers for drought-related losses, requiring additional government drought support payments',
            'The theoretical justification is that markets are more transparent than administrative allocation because every trade is publicly recorded; the empirical concern in the MDB is that market transparency has been undermined by algorithmic high-frequency trading that allows large operators to exploit price fluctuations faster than individual farmers can respond, creating an unfair advantage',
          ],
          correct: 0,
          explain: 'The theoretical economic argument for water markets draws on standard welfare economics: if water is allocated administratively (e.g., licensed entitlements that cannot be transferred), water flows to whatever use the licensing authority originally assigned it — which may not be the highest-value use as economic conditions change. A tradeable water rights market allows water to move from lower-value to higher-value uses through voluntary transactions, increasing total economic output from the same volume of water. In the Murray-Darling Basin, the 2012 Basin Plan capped total diversions and created a substantial market in water allocations and entitlements, with annual trade volumes reaching A$4+ billion. Documented concerns from the MDB experience include: (1) Market concentration: large corporate farming operations and water-trading intermediaries have accumulated large portfolios of water entitlements, giving them market power to influence prices in ways that disadvantage small family farms; (2) Third-party ecological impacts: trades that move water upstream or across tributaries can deplete flows in the selling region, harming downstream users and ecosystems in ways that the bilateral buyer-seller transaction does not account for (an externality the market price does not capture); (3) Environmental allocation adequacy: the 2,750 GL/yr of environmental water recovery has been controversial, with independent reviews suggesting it is insufficient to maintain river health; and (4) Social impacts on rural communities: water buybacks have contributed to farm aggregation and the decline of rural towns dependent on irrigation agriculture.',
        },
        {
          q: 'SDG 6 aims for universal access to safely managed drinking water by 2030, but 2.2 billion people currently lack it. What factors explain the failure to meet this target, and what would a realistic pathway to closing the gap require?',
          a: [
            'The primary factor is insufficient rainfall in Sub-Saharan Africa and South Asia; since IWRM and water markets cannot create new water where none exists, the only viable pathway is large-scale cloud seeding to increase precipitation over the affected regions',
            'The primary factor is that SDG 6 was poorly worded and set an unrealistic 15-year timeline; closing the gap realistically requires extending the deadline to 2100 and focusing only on urban populations, since providing rural water access is technically impossible at scale',
            'The primary factors include a financing gap (~$114 billion/yr shortfall), governance failures that leave rural and informal urban areas unserved by utilities, and the compounding effects of climate change on rural water sources; a realistic pathway requires a combination of increased international and domestic finance, institutional strengthening, appropriate technology deployment (piped networked systems where feasible, point-of-use treatment where not), and integration of water security into climate adaptation funding streams',
            'The primary factor is cultural resistance: populations without historically piped water infrastructure do not understand or accept modern water treatment systems; the realistic pathway is a 20-year education campaign before any investment in infrastructure can be effective',
          ],
          correct: 2,
          explain: 'The 2.2 billion people currently without safely managed drinking water (and 3.5 billion without safely managed sanitation) represent one of the most consequential development failures of the 21st century. The gap is not primarily a physical water availability problem — most of the unserved population lives in regions with adequate renewable freshwater — but rather a governance, institutional, and financial failure. Key factors include: (1) Financing gap: the UN estimates closing the water and sanitation gap by 2030 would require approximately $114 billion/year more than currently invested, with the largest shortfall in Sub-Saharan Africa where domestic government budgets are small relative to need and international aid flows have been insufficient and poorly targeted. (2) Governance and institutional failure: in many countries, water utilities cover only urban centres; rural populations and informal urban settlements are left to rely on unprotected wells, rivers, or expensive informal vendors. Regulatory frameworks often do not mandate service to rural or peri-urban areas. (3) Climate change compounding: droughts, floods, and groundwater depletion are reducing the reliability of rural water sources — especially shallow wells and small surface water bodies — that currently serve the unserved population. (4) Technology mismatch: piped networked water systems have high capital costs and require skilled maintenance; point-of-use treatment and protected wells are cheaper but provide lower levels of safety assurance. A realistic pathway requires simultaneously increasing finance (blended public-private finance, IDA/World Bank concessional loans, climate adaptation funds), strengthening water utility institutions and regulatory oversight, deploying fit-for-purpose technology matched to community capacity, and embedding water security in national climate adaptation plans to attract climate finance.',
        },
      ],
    },
  ],
}

export default integratedWaterManagement
