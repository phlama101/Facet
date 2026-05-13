import { Sun, Wind, Zap, Leaf, TrendingDown } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const energyTransition: Lesson = {
  id: 'clim-101-1-4-1',
  title: 'The Energy Transition: Decarbonizing Power and Heat',
  track: 'cli',
  trackName: 'Climate Science',
  level: 'Beginner',
  duration: '14 min',
  xpReward: 150,
  description: 'Decarbonizing the energy system is the single largest lever available to limit global warming — electricity and heat together account for roughly 40 % of global CO₂ emissions. Solar PV and wind costs have collapsed more than 90 % since 2010, making clean electricity the cheapest new power source in most of the world, yet translating cheap electrons into a net-zero energy system still requires solving storage, grid integration, and the electrification of stubborn industrial heat.',
  sources: [
    { org: 'IEA',           title: 'IEA Net Zero by 2050: A Roadmap for the Global Energy Sector (2021, updated 2023)', url: 'https://www.iea.org/reports/net-zero-by-2050' },
    { org: 'IPCC',          title: 'IPCC AR6 WGIII — Mitigation of Climate Change, Chapter 6: Energy Systems (2022)',    url: 'https://www.ipcc.ch/report/ar6/wg3/' },
    { org: 'IEA',           title: 'IEA World Energy Outlook 2023',                                                      url: 'https://www.iea.org/reports/world-energy-outlook-2023' },
    { org: 'IRENA',         title: 'IRENA Renewable Power Generation Costs in 2022',                                     url: 'https://www.irena.org/Publications/2023/Aug/Renewable-Power-Generation-Costs-in-2022' },
    { org: 'Carbon Brief',  title: 'Carbon Brief — Solar and Wind: The Numbers Behind the Energy Transition',            url: 'https://www.carbonbrief.org/solar-and-wind-cheapest-sources-of-power-in-history/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The fastest cost collapse in energy history',
      body: `In 2010, a solar photovoltaic module cost around $5 per watt of capacity. By 2023, the same watt of solar could be purchased for less than $0.25 — a 95 % reduction in thirteen years. No energy technology in history has fallen in cost so rapidly, and the consequences are reshaping electricity systems on every continent. The IEA's World Energy Outlook 2023 documented that solar power is now the cheapest source of electricity in history in good-resource locations, and that more investment flowed into clean energy in 2023 ($1.8 trillion) than into fossil fuel supply for the first time.

The core physics of the energy transition is straightforward: the climate constraint requires reaching **net-zero CO₂ emissions** from the global energy system by approximately 2050 (IEA NZE scenario) to preserve a 50 % probability of limiting warming to 1.5 °C. Energy supply — electricity generation, heat, and industrial processes — is responsible for roughly **34 % of global greenhouse gas emissions** (IPCC AR6 WGIII, 2022). Electricity generation alone is the largest single sectoral source, at approximately **26 % of global CO₂**, and is also the most tractable: unlike aviation or steel production, electricity generation from wind and solar is technically mature, commercially deployed, and already cheaper than coal or gas in most markets.

Yet the transition from cheap renewable electricity to a fully decarbonized energy system is more complex than deploying solar panels and wind turbines. Electricity accounts for only about **20 % of final energy consumption** globally — the rest is direct combustion of fossil fuels for heat, transport, and industrial processes. The transition requires **electrifying everything** (vehicles, buildings, industrial processes) and generating that electricity from zero-carbon sources. This in turn requires solving grid integration (matching variable solar and wind output with demand), **long-duration energy storage**, transmission infrastructure, and the particular challenge of high-temperature industrial heat above 400 °C, where electrification is still technically demanding.

The IEA's NZE scenario specifies that **no new coal plants** should be approved anywhere from 2021 onward, **no new oil and gas fields** beyond those already approved should be developed, and that clean electricity generation must reach near-zero carbon intensity globally by 2035 in advanced economies and by 2040 globally. These timelines are ambitious relative to current policy trajectories — but the technology costs now make them economically viable in ways that were not true even a decade ago.`,
      keyTerms: [
        {
          term: 'Levelized Cost of Electricity (LCOE)',
          def: 'The lifetime cost of building and operating a power plant divided by its total expected electricity output, expressed in $/MWh or €/MWh. LCOE enables comparison across technologies with different capital costs, fuel costs, and capacity factors. As of 2023, utility-scale solar PV LCOE reaches as low as $20–30/MWh in high-irradiance regions (Middle East, India, Chile); onshore wind reaches $25–50/MWh globally; new coal plants range from $65–150/MWh; new gas combined-cycle plants from $40–90/MWh. LCOE does not account for the system-integration costs of variable renewables (backup, storage, grid balancing), so it understates the full system cost of high-variable-renewable grids — but even system-cost comparisons increasingly favour renewables over new fossil fuel plants in most geographies.',
        },
        {
          term: 'Capacity factor',
          def: 'The ratio of actual electricity output over a period to the theoretical maximum output if the plant operated at full rated capacity continuously. Capacity factor reflects how reliably and intensely a generator runs. Typical values: coal ~50–70%; nuclear ~90–92% (baseload); natural gas combined-cycle ~50–60%; onshore wind ~25–40% (location-dependent); offshore wind ~40–55%; solar PV ~10–25% (latitude and climate dependent). Variable renewable technologies (wind, solar) have lower capacity factors than dispatchable fossil plants — their rated capacity overstates available energy — requiring either overbuilding, storage, or dispatchable backup to meet demand at all hours.',
        },
        {
          term: 'Grid integration and system flexibility',
          def: 'The set of mechanisms that allow an electricity grid to balance supply and demand in real time despite the variability of wind and solar generation. Flexibility tools include: demand response (shifting industrial and building loads to periods of high renewable output); battery storage (lithium-ion: short-duration, 1–8 hours; flow batteries and other long-duration storage: 8+ hours); pumped hydropower (accounts for ~90% of current global grid-scale storage capacity); interconnection (long-distance transmission spreading variability across regions); and dispatchable clean sources (hydropower, nuclear, geothermal, hydrogen turbines). As variable renewable share exceeds ~30–40% of annual generation on a grid, integration costs rise and the marginal value of additional wind/solar can fall sharply — the "curtailment problem".',
        },
        {
          term: 'Green hydrogen',
          def: 'Hydrogen gas (H₂) produced by electrolysis of water powered by renewable electricity. Electrolysis splits water molecules into H₂ and O₂ with no direct CO₂ emissions, and the H₂ can be stored and used as a fuel or industrial feedstock. Green hydrogen is the primary proposed pathway for decarbonizing sectors where direct electrification is difficult or impossible: high-temperature industrial heat (steel, cement, glass), long-haul shipping, aviation, and long-duration energy storage. As of 2023, green hydrogen costs ~$3–8/kg — 3–8× more expensive than fossil-derived "grey" hydrogen ($0.5–2/kg). IEA projects costs falling below $2/kg in most regions by 2030 with scale-up.',
        },
        {
          term: 'Hard-to-abate sectors',
          def: 'Industrial and transport sectors where eliminating CO₂ emissions is technically difficult or extremely expensive given current technology. These sectors together account for roughly 30 % of global CO₂ emissions and include: steelmaking (requires temperatures >1500 °C for iron ore reduction; currently depends on metallurgical coal); cement production (about 60 % of emissions are from limestone calcination — a chemical process that releases CO₂ regardless of heat source); aviation (requires energy-dense liquid fuels; current battery energy density insufficient for long-haul); and shipping (similar to aviation; exploring ammonia and methanol as low-carbon fuels). Decarbonizing these sectors requires a combination of green hydrogen, carbon capture and storage, process redesign, and circular economy approaches — none of which is yet cost-competitive with current technology at scale.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'The technology revolution in renewable electricity',
      body: `**Solar PV: from niche to dominant.** The photovoltaic effect — electricity generation from light — has been understood since 1839 and demonstrated in silicon cells since 1954. Yet for decades, solar PV remained a high-cost technology deployed primarily in off-grid and satellite applications. The transformation came from a combination of Chinese manufacturing scale-up, technological improvements in cell efficiency and module design, competitive procurement through auctions, and learning-by-doing cost reductions that followed a consistent "learning rate" of approximately 20–24 % cost reduction per doubling of cumulative installed capacity (the "solar learning curve"). Between 2010 and 2023, global solar PV capacity grew from ~40 GW to over 1,400 GW — a 35-fold increase. IRENA reported that the global weighted-average LCOE for utility-scale solar fell 89 % between 2010 and 2022. Solar is now the cheapest electricity ever generated in historical records in high-resource locations.

**Wind power: onshore and offshore.** Onshore wind turbines have similarly benefited from scale, technology, and experience: the average turbine capacity has grown from ~1 MW in the early 2000s to 4–6 MW today, with hub heights above 100 m capturing stronger and more consistent wind resources. Offshore wind harnesses stronger, more consistent winds over ocean surfaces with less visual impact and better proximity to coastal population centres; it is more expensive than onshore (~$80–110/MWh LCOE vs. $30–60/MWh for onshore in good locations) but costs have fallen dramatically and it is now commercially deployed at gigawatt scale in Europe, the UK, and increasingly in Asia. The IEA projects offshore wind capacity growing from ~65 GW in 2022 to ~380 GW by 2030 in its Announced Pledges Scenario.

**The variability challenge: storage and grid design.** Solar generates only during daylight and peaks at solar noon; wind is intermittent and driven by weather systems. Both are non-dispatchable — they cannot be switched on when demand requires it. As their share of electricity generation increases, grids require increasing flexibility to avoid both supply shortfalls (when output is low) and curtailment (when output exceeds demand and there is nowhere to send the electricity). Lithium-ion batteries have emerged as the dominant short-duration storage technology, with costs falling from ~$1,500/kWh in 2010 to ~$130/kWh in 2023 (BNEF). Pumped hydropower — pumping water uphill when electricity is cheap, releasing it through turbines when expensive — still provides ~90 % of global grid-scale storage capacity (~170 GW). Long-duration storage (>12 hours, needed for seasonal balancing in high-renewable systems) remains a major technological gap: options under development include iron-air batteries, compressed air storage, and underground hydrogen storage.`,
      cards: [
        {
          name: 'Solar PV: The 89% Cost Collapse',
          icon: Sun,
          color: BRAND.gold,
          desc: 'Global weighted-average LCOE for utility-scale solar PV fell 89 % from $0.417/kWh (2010) to $0.049/kWh (2022) — IRENA data. Driven by: Chinese manufacturing scale (>80 % global module production), silicon cell efficiency gains (6 % in 1954 → 22–25 % commercial today), competitive auction mechanisms, and a learning rate of ~20–24 % per capacity doubling. Global installed capacity: ~40 GW (2010) → 1,400+ GW (2023). Record-low contract prices: ~$10–15/MWh in UAE, Saudi Arabia, Chile, and India. Solar now cheapest electricity source in history in good-resource locations.',
          examples: 'Al Dhafra Solar Farm (UAE, 2022): 2 GW capacity; contract price $13.5/MWh — world record. India 2023: solar auctions clearing at ₹2.15/kWh (~$0.026/MWh). Germany 2023: rooftop solar payback periods 6–8 years at retail electricity prices €0.30/kWh. China 2023: added 217 GW of solar in a single year — more than the total capacity of Germany\'s entire electricity system.',
        },
        {
          name: 'Wind Power: Onshore and Offshore Scale-Up',
          icon: Wind,
          color: BRAND.accent,
          desc: 'Onshore wind LCOE: $0.033/kWh globally weighted average (IRENA 2022); fallen 69 % since 2010. Offshore wind LCOE: $0.081/kWh (2022); fallen 60 % since 2010. Average turbine capacity: ~1 MW (2000) → 5–6 MW (2023) onshore; 12–15 MW offshore (Vestas V236: 236 m rotor diameter). Global wind installed capacity: ~740 GW (2022). IEA NZE scenario: wind must reach ~8,000 GW by 2030 — a 10× scale-up from 2020 in a decade. Offshore wind expanding to Asia: Taiwan, Japan, South Korea, USA East Coast all developing large pipelines.',
          examples: 'Hornsea 2 (UK, 2022): 1.3 GW offshore wind farm, 165 turbines; powers 1.4 million homes. Texas: onshore wind generates ~26 % of state electricity in 2023 — largest wind capacity in USA. Denmark 2023: wind + solar generated 88 % of electricity in annual average. IEA 2023: wind + solar added more power capacity globally in 2023 than all other sources combined.',
        },
        {
          name: 'Electrification and System Integration',
          icon: Zap,
          color: BRAND.jade,
          desc: 'Electricity is only ~20 % of global final energy today; decarbonization requires electrifying transport (EVs), buildings (heat pumps), and industry. IEA NZE: electricity share must reach ~50 % of final energy by 2050. Key integration tools: lithium-ion batteries (costs fell $1,500/kWh → $130/kWh, 2010–2023); pumped hydro (~170 GW existing, ~90 % of grid storage); demand response; HVDC long-distance transmission. Critical gap: long-duration storage (>12 h) for seasonal balancing — iron-air batteries, H₂ storage, compressed air under development. Curtailment rising on high-penetration grids: California regularly curtails solar midday; Germany curtails wind at times of low demand.',
          examples: 'IEA NZE 2050: 90 % of electricity from renewables globally. California 2023: hit 100 % renewable electricity briefly on 47 days; curtailed 2.5 TWh. UK 2023: 50 % of electricity from wind + solar + nuclear. Battery storage BNEF: $130/kWh in 2023; projected <$90/kWh by 2026. Pumped hydro Bath County (USA): 3 GW — largest grid-scale battery in the world by energy stored.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Decarbonizing heat: the harder half of energy',
      body: `Heat — for buildings, industry, and processes — represents the majority of global final energy consumption and is often the most technically challenging part of the decarbonization problem. Industrial processes require temperatures ranging from 60 °C (food processing, low-temperature drying) to well above 1,000–1,500 °C (steelmaking, glassmaking, cement kilns). Below about 200 °C, electric heat pumps are effective and highly efficient, achieving **coefficient of performance (COP)** values of 3–5 (delivering 3–5 units of heat per unit of electricity consumed). Above 400 °C, direct electrification becomes increasingly difficult, and green hydrogen or biomass-derived fuels become the primary pathways.

Building heat decarbonization is technically straightforward in principle — replace gas boilers with electric heat pumps — but faces enormous deployment challenges. Global building stock is large and slow to turn over (~1–2 % of buildings replaced per year), and heat pump retrofits can be expensive in poorly insulated older buildings. Still, the IEA estimates that banning new fossil fuel boiler sales from 2025 and scaling heat pump deployment to ~600 million units by 2030 (from ~180 million in 2021) is necessary for the NZE scenario.

The hardest problems are in heavy industry. **Steelmaking** using the conventional blast furnace route (which combines coking coal and iron ore at ~1,500 °C) is responsible for ~7–9 % of global CO₂ emissions. Two primary pathways for green steel exist: (1) direct reduced iron (DRI) using green hydrogen as the reductant, replacing coal — this route can reduce steel sector emissions by ~95 %; (2) electric arc furnaces (EAF) powered by renewable electricity, using steel scrap as feedstock — already ~70 % less carbon-intensive than blast furnaces. Global green steel production remained near zero in 2023, though projects like H2 Green Steel (Sweden) and HYBRIT aim to scale significantly by 2026–2030. **Cement** faces an additional challenge: ~60 % of its CO₂ comes from the chemical calcination of limestone (CaCO₃ → CaO + CO₂), a process-inherent emission that cannot be eliminated by switching fuel sources — requiring carbon capture or novel low-clinker cement chemistries.`,
      cards: [
        {
          name: 'Heat Pumps: Electrifying Buildings',
          icon: Zap,
          color: BRAND.coral,
          desc: 'Heat pumps move heat from outdoors to indoors (or vice versa for cooling) using a refrigerant cycle powered by electricity. COP = 3–5 for air-source heat pumps in moderate climates (delivering 3–5 kWh of heat per kWh of electricity). Ground-source heat pumps: COP 4–6 (more stable ground temperature). Already dominant in heating in Norway, Sweden, Finland (~60 % of homes). IEA NZE: no new fossil fuel boiler sales from 2025 onward; heat pump stock must reach ~1.8 billion by 2050. 2023 heat pump sales: ~180 million globally; accelerating but well below NZE trajectory. Cost barrier: retrofit installation $5,000–20,000 USD; operating costs lower than gas boiler if electricity is cheap.',
          examples: 'Norway: 60 % of homes have heat pumps; electricity mostly hydropower → near-zero heating emissions. EU 2022 heat pump sales: 3 million units — fastest growth year on record, driven by gas price spike. Passive House standard: reduces heat demand by ~70–90 % with insulation and air sealing — reduces heat pump sizing and cost. US IRA (2022): $8,000–14,000 subsidies for heat pump installation for low/moderate income households.',
        },
        {
          name: 'Green Hydrogen for Hard-to-Abate Industry',
          icon: Leaf,
          color: BRAND.amethyst,
          desc: 'Green hydrogen: produced by electrolysis of water using renewable electricity. 2023 cost: $3–8/kg; grey hydrogen (steam methane reforming from gas): $0.5–2/kg. IEA projects green H₂ costs falling below $2/kg in 2030 with scale-up. Primary industrial uses: (1) DRI steelmaking replacing coking coal — HYBRIT project (Sweden) produced world\'s first fossil-free steel in 2021; (2) ammonia synthesis for fertilizers (currently ~1.8 % of global CO₂); (3) refinery feedstock; (4) long-haul shipping and aviation via e-fuels (synthetic kerosene, ammonia, methanol). Current global green H₂ production: ~0.1 Mt/yr vs. 94 Mt/yr total H₂ demand — scale-up of 1,000× needed.',
          examples: 'HYBRIT (Sweden, Vattenfall/SSAB/LKAB): produced first commercial green steel delivery 2021; commercial scale by 2026. H₂ Green Steel (Sweden): €3.5B plant, 5 Mt/yr green steel by 2030. Hysata electrolyser (Australia): claims 95 % efficiency — close to theoretical maximum. EU Hydrogen Bank: €800M pilot auction in 2023 to subsidise green H₂ production to close cost gap with grey H₂.',
        },
        {
          name: 'Industrial Decarbonization: Steel and Cement',
          icon: TrendingDown,
          color: BRAND.ruby,
          desc: 'Steel (7–9 % of global CO₂): blast furnace route ~2.0 tCO₂/t steel; green H₂-DRI route ~0.1 tCO₂/t steel (95 % reduction); EAF with scrap + renewables ~0.4 tCO₂/t steel (80 % reduction). Scrap availability limits: EAF covers ~30 % of steel today; not enough scrap for all production until ~2060s. Cement (8 % of global CO₂): ~60 % from calcination chemistry (inescapable without CCS or alternative chemistry); 40 % from fuel. Solutions: carbon capture at kiln (~$60–120/tCO₂); supplementary cementitious materials (fly ash, slag) reduce clinker ratio; novel cements (geopolymers, calcium sulfoaluminate). Both sectors need carbon prices >$100–150/tCO₂ to make green alternatives cost-competitive without subsidy.',
          examples: 'Global steel: 1.9 Gt produced in 2022; ~3.6 GtCO₂/yr. Every tonne of green steel saves ~1.9 tCO₂ vs. blast furnace. Global cement: 4.1 Gt produced in 2022; ~2.6 GtCO₂/yr. EU Emissions Trading System (ETS): covers steel and cement from 2026 (free allowances phased out); currently €70–80/tCO₂ — approaching threshold for green premium competitiveness in some applications. First commercial DAC + cement CCS plant (CarbFix, Iceland): small scale; demonstrating geological mineralisation of CO₂ in basalt.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From solar panel to zero-carbon economy: the energy flow',
      body: `Decarbonizing the energy system is not simply a matter of installing solar panels and wind turbines — it requires transforming how electricity is generated, stored, distributed, and used across every sector of the economy. The flow below traces how renewable electricity generation must connect to storage, grids, electrification, and green fuels to displace fossil energy in power, buildings, transport, and hard-to-abate industry by 2050.`,
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Energy transition pathway from renewable generation through grid integration and end-use decarbonization',
        nodes: [
          {
            id: 'renewable-gen',
            label: 'Renewable Generation (Solar, Wind)',
            description: 'Solar PV and wind turbines convert sunlight and kinetic wind energy into electricity with no direct CO₂ emissions. Solar PV LCOE has fallen 89 % since 2010 to below $25/MWh in the best locations; onshore wind LCOE has fallen 69 % to below $35/MWh. Global installed capacity reached ~2,100 GW (solar + wind combined) in 2023. These sources are variable — solar peaks midday and is absent at night; wind output fluctuates with weather — requiring downstream storage and flexibility to match demand at all times. IEA NZE scenario requires solar and wind to generate ~65 % of global electricity by 2030, up from ~12 % in 2022.',
            color: BRAND.gold,
          },
          {
            id: 'grid-storage',
            label: 'Grid Storage and Balancing',
            description: 'When renewable output exceeds demand, electricity must be stored or curtailed; when output falls short, stored energy or dispatchable backup must cover the gap. Lithium-ion battery storage has fallen in cost from $1,500/kWh (2010) to ~$130/kWh (2023) and is ideal for short-duration balancing (1–8 hours). Pumped hydropower provides ~90 % of existing grid-scale storage globally (~170 GW). Long-duration storage for seasonal balancing — needed when solar is low in winter or during wind droughts lasting days to weeks — remains a critical technology gap. Green hydrogen can serve as long-duration storage: electricity → electrolysis → H₂ → fuel cell or turbine back to electricity (round-trip efficiency ~30–40 %).',
            color: BRAND.accent,
          },
          {
            id: 'clean-grid',
            label: 'Low-Carbon Electricity Grid',
            description: 'The electricity grid connects generators (renewable, nuclear, hydro) to consumers via transmission and distribution networks. Decarbonizing the grid requires: retiring coal plants (global coal power: ~2,100 GW in 2022; IEA NZE: phase out entirely by 2040 globally); building long-distance high-voltage DC (HVDC) transmission to move renewable energy from high-resource regions to population centres; smart grid technology to manage bidirectional power flows from rooftop solar and EV batteries; and maintaining sufficient dispatchable clean capacity (nuclear, hydropower, gas with CCS as transition) to cover periods of low wind and solar. IEA NZE: electricity generation must be ~90 % renewable globally by 2050.',
            color: BRAND.jade,
          },
          {
            id: 'electrification',
            label: 'Electrification of Buildings and Transport',
            description: 'Electric vehicles (EVs) and electric heat pumps are the primary pathways for electrifying transport and buildings — currently responsible for ~20 % and ~10 % of global CO₂ respectively. EVs convert ~85 % of battery energy into motion vs. ~20 % for internal combustion engines, are 3–4× more efficient overall, and have zero tailpipe emissions. Global EV sales reached 14 million in 2023 (~18 % of new car sales). Heat pumps (COP 3–5) can electrify space heating and hot water with 2–4× better efficiency than direct electric resistance heating. IEA NZE: no new ICE vehicle sales from 2035; no new fossil fuel boiler sales from 2025.',
            color: BRAND.coral,
          },
          {
            id: 'green-hydrogen',
            label: 'Green Hydrogen for Hard-to-Abate Sectors',
            description: 'Green hydrogen — produced by water electrolysis using renewable electricity — is the primary solution for sectors that cannot be directly electrified: steelmaking via direct reduced iron (replacing coking coal), ammonia fertilizer synthesis, long-haul aviation (via synthetic kerosene), shipping (via ammonia or methanol), and high-temperature industrial heat above 400 °C. Green H₂ currently costs $3–8/kg vs. $0.5–2/kg for fossil-derived hydrogen. At $2/kg green H₂ (projected by mid-2020s in good locations), the green premium for key applications becomes competitive with carbon prices of $60–100/tCO₂. IEA NZE requires green H₂ to reach 90 Mt/yr by 2030 — from near-zero in 2023.',
            color: BRAND.amethyst,
          },
          {
            id: 'netzero-economy',
            label: 'Net-Zero Energy Economy (~2050)',
            description: 'An energy system where CO₂ emissions from energy use have fallen to near-zero, with any residual hard-to-abate emissions offset by carbon dioxide removal. IEA NZE scenario characteristics for 2050: ~90 % of electricity from renewables; electricity provides ~50 % of final energy (up from ~20 % today); green hydrogen and e-fuels handle the remaining hard-to-abate energy uses; all new vehicles sold are electric; heat pump deployment eliminates fossil heating in buildings; industrial emissions near zero through hydrogen, CCS, and electrification. Total energy system investment required: ~$4 trillion/year globally in clean energy by 2030, vs. ~$1.8 trillion in 2023.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'renewable-gen',   to: 'grid-storage',     label: 'excess generation stored; deficit covered by discharge' },
          { from: 'grid-storage',    to: 'clean-grid',        label: 'stored energy dispatched to balance variable renewable output' },
          { from: 'renewable-gen',   to: 'clean-grid',        label: 'direct transmission of renewable electricity to consumers' },
          { from: 'clean-grid',      to: 'electrification',   label: 'zero-carbon electricity powers EVs and heat pumps' },
          { from: 'clean-grid',      to: 'green-hydrogen',    label: 'renewable electricity drives water electrolysis for H₂ production' },
          { from: 'green-hydrogen',  to: 'netzero-economy',   label: 'H₂ and e-fuels decarbonize steel, aviation, shipping, and industrial heat' },
          { from: 'electrification', to: 'netzero-economy',   label: 'electrified transport and buildings eliminate most fossil fuel combustion' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Solar PV LCOE fell approximately 89 % between 2010 and 2022. What combination of factors drove this cost reduction, and why does falling LCOE not automatically solve the grid integration challenge?',
          a: [
            'The cost reduction was driven entirely by government subsidies in China and Europe that temporarily suppressed prices below true cost; the costs will rise back toward 2010 levels once subsidies are removed, and integration is not a challenge because modern grids can absorb any amount of solar without modification',
            'The cost reduction resulted from manufacturing scale (particularly Chinese production), cell efficiency improvements, competitive auctions, and the solar learning rate (~20–24 % cost reduction per doubling of cumulative capacity); however, falling LCOE measures only the cost of the generator, not the system-level costs of storage, backup capacity, and grid infrastructure needed to balance variable output — high-penetration solar grids require additional investment that partly offsets the LCOE advantage',
            'The cost reduction was driven by using cheaper, lower-efficiency materials that reduce the upfront cost but require replacement every 5 years rather than 25–30 years; on a lifecycle basis, solar is not actually cheaper than coal when replacement costs are included',
            'LCOE captures total lifetime costs including integration costs, so falling solar LCOE fully accounts for storage and grid balancing needs; the 89 % cost reduction means solar is cheaper than coal on every metric including system integration, and no additional investment in storage is needed',
          ],
          correct: 1,
          explain: 'A incorrectly claims the cost reductions were primarily subsidy-driven and temporary — while policy support accelerated deployment, the cost reductions reflect genuine manufacturing learning and technology improvements that have persisted as markets matured. Crystalline silicon panels are durable (25–30-year warranties are standard) and do not need replacement every 5 years, making C factually wrong about module lifetime. D is incorrect because LCOE is defined as the cost of the generator alone (capital, operations, fuel) divided by output — it explicitly excludes grid balancing, backup capacity, and storage costs; integration costs are real and significant at high penetration levels. B correctly identifies the multi-factor explanation for cost reduction and the important distinction between LCOE (generator cost) and system cost (total cost to reliably serve all demand). As solar penetration on a grid increases beyond ~30–40 % of annual generation, the value of additional solar decreases (curtailment increases), while backup and storage requirements grow — these system costs are not captured in LCOE comparisons.',
        },
        {
          q: 'About 60 % of cement\'s CO₂ emissions come from the calcination of limestone (CaCO₃ → CaO + CO₂). Why does this make cement harder to decarbonize than steel, and what are the primary technological pathways to address this process-inherent emission?',
          a: [
            'Cement is harder to decarbonize than steel because cement plants operate at higher temperatures (>2,000 °C) than steel plants (~1,500 °C), requiring more powerful and expensive electric arc furnaces; the primary solution is to replace all limestone with synthetic calcium silicate that does not release CO₂ when heated',
            'The calcination emission arises from the chemistry of converting limestone to clinker — it releases CO₂ regardless of whether the energy source is coal, gas, or renewable electricity, making fuel switching alone insufficient; primary pathways are: (1) carbon capture and storage (CCS) applied to kiln exhaust gases; (2) supplementary cementitious materials (fly ash, slag, calcined clay) that replace high-clinker Portland cement and reduce calcination per tonne of concrete; (3) novel low-clinker or clinker-free cement chemistries (geopolymers); and (4) circular economy approaches reducing concrete demand',
            'Cement calcination emissions can be eliminated by switching from coal to natural gas as the kiln fuel, which reduces process CO₂ by 40 %; the remaining calcination CO₂ is small relative to the fuel-switching savings, making cement one of the easier sectors to decarbonize through simple fuel substitution',
            'The process-inherent calcination CO₂ is actually captured naturally by concrete during curing and use: over the 50–100 year lifetime of a concrete structure, CO₂ is reabsorbed from the air by the calcium oxide in the hardened cement through a process called carbonation, making cement production carbon-neutral on a lifecycle basis',
          ],
          correct: 1,
          explain: 'A incorrectly states that cement requires temperatures >2,000 °C — cement kilns operate at ~1,450 °C, lower than steelmaking; the comparison about electric arc furnace applicability is also confused. C is wrong: switching from coal to gas reduces fuel combustion CO₂ by roughly 40 %, but the calcination chemistry releases ~0.52 tCO₂ per tonne of clinker regardless of fuel type — this is the dominant emission and is completely unaffected by fuel switching. D contains a partial truth (concrete does undergo carbonation and does reabsorb some CO₂) but grossly overstates the effect: carbonation reabsorbs approximately 20–40 % of the original calcination CO₂ over a building\'s lifetime — not 100 %; the concrete must be crushed and exposed to air for efficient reabsorption; and the process takes decades to centuries, not the years between production and claimed lifecycle neutrality. B correctly identifies the process-inherent nature of calcination CO₂ and the genuine technological pathways: CCS can capture kiln exhaust (technically feasible, adding ~$60–120/tCO₂ to cost); supplementary cementitious materials can reduce the clinker-to-cement ratio from ~75 % today to ~50–60 %, directly reducing calcination emissions; and novel chemistries (geopolymers using industrial alkali activation rather than calcium silicate clinker) avoid calcination entirely but face durability certification barriers.',
        },
        {
          q: 'Green hydrogen currently costs $3–8/kg to produce, while fossil-derived "grey" hydrogen costs $0.5–2/kg. The IEA NZE scenario requires green hydrogen production to scale from near-zero to 90 Mt/yr by 2030. What must happen for green hydrogen to become cost-competitive, and what is its most appropriate role in a net-zero energy system?',
          a: [
            'Green hydrogen will become cost-competitive when renewable electricity prices reach zero — as solar and wind operate with near-zero marginal cost, electrolyser running costs approach zero and green H₂ production becomes essentially free; green hydrogen is the universal energy carrier that should replace electricity grids, pipelines, and all fossil fuels in every sector by 2035',
            'Green hydrogen costs will fall with electrolyser manufacturing scale, high capacity-factor operation using dedicated renewable electricity, and technology improvements; it is best deployed where direct electrification is genuinely not feasible — steelmaking, ammonia fertilizers, long-haul aviation, shipping — rather than in applications where batteries and electric motors already provide a cheaper, more efficient solution (passenger vehicles, residential heating)',
            'Green hydrogen cannot be cost-competitive with grey hydrogen because electrolysis is thermodynamically limited to about 40 % efficiency, making it always more expensive than steam methane reforming which operates at ~80 % efficiency; the IEA NZE green hydrogen targets are unachievable and should be replaced with blue hydrogen (natural gas with CCS)',
            'Green hydrogen costs are already competitive at $3–8/kg because the health and climate externalities of grey hydrogen from fossil gas add an effective cost of $50/kg that is not reflected in grey hydrogen\'s market price; therefore no further cost reduction is needed, only carbon pricing',
          ],
          correct: 1,
          explain: 'A is wrong in two respects: first, electricity costs for electrolysis never reach zero — there are capital costs for electrolysers, maintenance, and balance-of-plant even at near-zero electricity cost; second, proposing green hydrogen as a universal replacement for electricity grids ignores the thermodynamic losses in the hydrogen pathway (electricity → H₂ → storage → reconversion: ~30–40 % round-trip efficiency vs. ~85–95 % for direct battery storage and use), making it deeply inefficient for applications where direct electrification already works well. C is incorrect about electrolysis efficiency: modern alkaline and PEM electrolysers achieve 65–80 % efficiency (lower heating value basis), not 40 %; steam methane reforming is ~65–75 % efficient (not 80 %); and the comparison ignores that grey H₂ is cheap partly because its CO₂ is unpriced; blue hydrogen with CCS has its own significant costs and leakage concerns. D overstates the externality calculation: health and climate damages from fossil gas production add costs that vary widely by region and carbon price assumption — they do not uniformly add $50/kg; and market pricing already does not reflect externalities, so claiming current costs are already "competitive" when accounting for externalities is not a substitute for achieving actual market cost reductions. B correctly identifies the cost-reduction pathway (scale-up of electrolyser manufacturing, learning-by-doing, high capacity factor operation) and the appropriate role: green hydrogen makes sense where direct electrification fails (steel DRI, ammonia, aviation, shipping) but not where batteries and motors are already efficient (EVs, heat pumps), because the hydrogen pathway loses 2–3× as much energy per unit of useful output compared to direct electric use.',
        },
        {
          q: 'The IEA\'s Net Zero Emissions by 2050 scenario states that no new oil and gas fields beyond those already approved should be developed, starting from 2021. Critics argue this is unrealistic. What is the scientific and economic basis for this guideline?',
          a: [
            'The guideline is based on geological scarcity: proven oil and gas reserves are expected to be exhausted by 2040 at current production rates, so new fields would produce oil and gas that arrives too late to be useful; the NZE scenario\'s timing aligns with natural depletion of existing reserves',
            'The remaining carbon budget for 1.5 °C (approximately 500 GtCO₂ from 2020) is already more than fully accounted for by the CO₂ embedded in currently operating fossil fuel infrastructure; developing new fields would add additional locked-in emissions that exceed what the carbon budget allows, while the economics of the transition mean that demand for fossil fuels should fall rapidly enough that new fields are not needed to meet residual demand',
            'The guideline primarily reflects energy security concerns rather than climate science: diversifying energy supply away from geopolitically unstable regions (Middle East, Russia) by developing domestic renewables makes new fossil fuel development strategically unnecessary for most OECD nations; the climate rationale is secondary to the energy security rationale',
            'New oil and gas fields are prohibited because the environmental destruction caused by drilling and extraction — habitat destruction, methane leaks, spills — exceeds the climate damage from burning the extracted fuels; if oil and gas could be extracted cleanly with zero methane leaks, new field development would be compatible with the NZE scenario',
          ],
          correct: 1,
          explain: 'A is factually wrong: proven oil reserves are approximately 1.7 trillion barrels (BP Statistical Review 2022), which at 2022 consumption rates of ~100 million barrels/day would last approximately 47 years — far beyond 2040; the NZE guideline has nothing to do with geological scarcity. C is partially true (energy security is an important co-benefit of the transition) but mischaracterises the primary basis of the NZE guideline, which is explicitly the carbon budget constraint, not energy security. D is incorrect: the NZE guideline is based on the carbon budget (combustion emissions) not on extraction-side environmental impacts; methane leaks are a climate concern but are not the primary reason new fields are incompatible with 1.5 °C. B correctly states the carbon budget rationale: a 2021 analysis by Carbon Tracker and others found that the CO₂ content of already-operating fossil fuel infrastructure (if run to end of its normal economic lifetime) is sufficient to consume approximately all of the 1.5 °C carbon budget. This means no new fossil fuel infrastructure — fields, pipelines, or power plants — is consistent with 1.5 °C unless existing infrastructure is retired early. The IEA made this logic explicit in its May 2021 NZE report, which drew intense criticism from fossil fuel industry groups but represented a straightforward application of carbon budget arithmetic.',
        },
        {
          q: 'In 2023, approximately $1.8 trillion was invested globally in clean energy — more than the investment in fossil fuel supply for the first time. Yet emissions continued to rise. How is this possible, and what does it reveal about the pace required for the energy transition?',
          a: [
            'The $1.8 trillion figure is misleading because most clean energy investment goes to replacing existing renewable capacity as old turbines and panels reach end of life, rather than adding new capacity; net new zero-carbon capacity additions are still smaller than additions of fossil fuel capacity, explaining why emissions continue to rise',
            'Even though annual clean energy investment is now larger than fossil fuel investment, the existing stock of fossil fuel infrastructure is enormous — hundreds of billions of tonnes of CO₂ have been emitted from infrastructure built over 150 years, and new clean energy additions in a single year still represent a small fraction of total global energy supply; emissions rise because the new clean capacity is still smaller than growth in energy demand from the developing world and because existing fossil infrastructure continues operating; the transition requires clean energy additions to exceed not just new fossil capacity, but also the growth in total energy demand',
            'Emissions continue to rise because $1.8 trillion in investment is entirely ineffective at reducing CO₂ — wind turbines and solar panels require so much embodied energy in their manufacturing that they produce more CO₂ over their lifetime than they displace from fossil fuels; clean energy investments are therefore not actually reducing emissions',
            'The investment figures are not comparable because clean energy projects have much shorter lifespans than fossil fuel projects; $1.8 trillion in solar and wind provides 10 years of energy before replacement while $1.7 trillion in oil and gas provides 40 years; on a lifetime-adjusted basis, fossil fuel investment still exceeds clean energy investment by a factor of four',
          ],
          correct: 1,
          explain: 'A is factually incorrect: the vast majority of clean energy investment in 2023 was for new capacity additions, not replacements of end-of-life systems; global solar and wind capacity has grown rapidly year after year, confirming net additions dominate. C is factually wrong: lifecycle analyses of wind turbines and solar panels consistently show that the CO₂ emitted in manufacturing is paid back in 1–4 years of clean electricity generation (compared to 25–30-year operational lifetimes), yielding a >90 % CO₂ reduction vs. fossil fuel generation over the full lifetime; the "energy payback" concern is a well-studied and thoroughly debunked misconception. D is incorrect on lifespans: modern wind turbines and solar panels have 25–30-year design lifetimes, not 10 years; oil and gas field lifetimes vary from 10–40 years; the comparison is not as extreme as claimed, and adjusting for it would still show a large clean energy investment advantage. B correctly identifies the key structural reason: the total installed base of fossil fuel infrastructure built over 150 years is measured in tens of trillions of dollars and continues generating energy and emissions during its remaining service life. Clean energy additions in any single year — however large — displace only a small fraction of total global energy supply (~1–2 % annually). For emissions to peak and fall, clean energy growth must outpace both: (1) growth in total energy demand (particularly in developing economies); and (2) the operating life of existing fossil infrastructure. This requires clean energy to grow faster than the energy system as a whole expands, while fossil fuel use in absolute terms must begin declining — not just its share.',
        },
      ],
    },
  ],
}

export default energyTransition
