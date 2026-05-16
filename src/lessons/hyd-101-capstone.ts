import { Globe } from 'lucide-react'
import type { Lesson } from './types'

const hyd101Capstone: Lesson = {
  id: 'hyd-101-capstone',
  title: 'Hydrology: Path Assessment',
  track: 'geo',
  trackName: 'Hydrology',
  level: 'Advanced',
  duration: '25 min',
  xpReward: 500,
  description: 'A comprehensive assessment spanning all three chapters of the Hydrology learning path. Twenty questions test conceptual understanding, quantitative reasoning, and the ability to apply hydrological principles to real-world water management scenarios.',
  sources: [
    { org: 'USGS', title: 'USGS — Water Science School',              url: 'https://www.usgs.gov/special-topics/water-science-school' },
    { org: 'NOAA', title: 'NOAA — Water Cycle and Freshwater',        url: 'https://oceanservice.noaa.gov/facts/water-cycle.html' },
    { org: 'EPA',  title: 'US EPA — Water Resources',                 url: 'https://www.epa.gov/environmental-topics/water-topics' },
    { org: 'FAO',  title: 'FAO — Water and Food Security',            url: 'https://www.fao.org/water/en/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Comprehensive assessment across all three chapters of Hydrology',
      body: `This capstone covers the full Hydrology learning path: the water cycle and its energy and mass budgets (Chapter 1), rivers, watersheds, and flood hazards (Chapter 2), and groundwater — aquifers, flow, springs, and sustainability (Chapter 3). Twenty questions test conceptual understanding, quantitative reasoning, and the ability to apply hydrological principles to real-world water management scenarios.

You\'ll be asked to interpret water balance equations, apply Darcy\'s Law, reason about flood frequency statistics, evaluate groundwater depletion scenarios, and assess water resource sustainability. A score of 80% or higher earns full XP and path completion. Take your time — each question has exactly one correct answer, and the detailed explanations will reinforce your understanding regardless of outcome.`,
      keyTerms: [],
    },
    {
      type: 'quiz',
      questions: [
        // ── Chapter 1: Water Cycle ────────────────────────────────────────────
        {
          q: 'The water balance equation P = ET + Q + ΔS describes a watershed. Over a 10-year average period, ΔS ≈ 0. If annual precipitation is 800 mm (31.50 in) and evapotranspiration is 520 mm (20.47 in), approximately what is mean annual streamflow?',
          a: [
            '1,320 mm/yr',
            '280 mm/yr',
            '800 mm/yr',
            '520 mm/yr',
          ],
          correct: 1,
          explain: 'With ΔS = 0 over the long-term average, P = ET + Q. Therefore Q = P - ET = 800 - 520 = 280 mm/yr. This is the mean annual streamflow expressed as a depth over the watershed area (runoff depth). To convert to volumetric discharge, multiply by watershed area. In a 10,000 km² (3,861 sq mi) watershed, 280 mm/yr = 280,000 m³/km² × 10,000 km² (3,861 sq mi) = 2.8 km³ (0.67 cu mi)/yr. The water balance is the fundamental accounting framework in hydrology — every drop of precipitation is either evapotranspired, stored, or becomes streamflow. In most humid temperate watersheds, 60-70% of precipitation evapotranspires, leaving 30-40% as streamflow.',
        },
        {
          q: 'Which process returns the most water from land surfaces to the atmosphere globally?',
          a: [
            'Transpiration from vegetation through stomata',
            'Direct soil surface evaporation from bare soils',
            'Open water evaporation from rivers, lakes, and reservoirs',
            'Evapotranspiration (combined evaporation + transpiration), dominated by transpiration in vegetated regions',
          ],
          correct: 3,
          explain: 'Globally, evapotranspiration returns ~73,000 km³ (17,513 cu mi)/yr of land precipitation back to the atmosphere — about 65% of all precipitation over land. Within ET, transpiration through plant stomata dominates in vegetated landscapes: estimates suggest transpiration accounts for 60-80% of total ET globally. Transpiration occurs because plants open stomata to take up CO₂ for photosynthesis, simultaneously losing water vapour. Forests and grasslands transpire huge volumes — the Amazon basin alone transpires enough water to make a significant contribution to its own rainfall through recycling. Direct soil evaporation is important mainly in sparse vegetation (deserts, semi-arid) or after rain events on bare soil. Open water evaporation is locally important but small compared to vegetated land area globally.',
        },
        {
          q: 'The NASA GRACE satellite mission detects groundwater depletion by measuring:',
          a: [
            'Laser altimetry of reservoir water surface levels from orbit',
            'Tiny variations in Earth\'s gravitational field caused by changes in water mass distribution',
            'Microwave reflectance of soil moisture in the top 5 cm (2.0 in) of soil',
            'Optical imagery of land surface colour changes when soil moisture increases',
          ],
          correct: 1,
          explain: 'GRACE (2002-2017) and GRACE-FO (2018-present) carry accelerometers that precisely measure the separation between two satellites flying in tandem ~220 km (137 mi) apart. As the satellite pair passes over a region with more water mass (full aquifers, flooded land) than average, the front satellite is pulled slightly ahead by the greater gravitational attraction; as it passes over depleted regions, the separation changes differently. By inverting these distance changes (measured to nanometre precision by microwave ranging), GRACE reconstructs maps of total water storage change — including groundwater, soil moisture, ice, and surface water — at ~300 km (186 mi) spatial resolution and monthly timescales. GRACE has documented Ogallala Aquifer depletion, Ganges Basin depletion, and accelerating Greenland/Antarctic ice mass loss with unprecedented clarity.',
        },
        {
          q: 'Hortonian overland flow (infiltration-excess runoff) is most likely to occur in which setting?',
          a: [
            'Dense tropical rainforest on well-drained sandy soils during moderate steady rainfall',
            'Compacted urban parking lot surface during an intense convective thunderstorm',
            'Saturated valley bottom peat bog receiving gentle drizzle in a humid climate',
            'Rocky mountain headwater catchment with a deep organic soil horizon',
          ],
          correct: 1,
          explain: 'Hortonian overland flow requires rainfall intensity to exceed soil infiltration capacity. Compacted impervious surfaces like concrete parking lots have essentially zero infiltration capacity — all rainfall becomes immediate overland flow regardless of intensity. Even a gentle rain on a parking lot generates Hortonian runoff. Conversely, dense tropical rainforest on well-drained sandy soils typically has very high infiltration rates (Ks > 50 mm/hr) — only the most extreme convective storms exceed infiltration capacity there. Saturated valley bog generates saturation-excess runoff (Dunne mechanism), not Hortonian. Rocky headwater catchments with deep organic soils typically have very high hydraulic conductivity and rarely generate Hortonian flow.',
        },
        {
          q: 'Snow water equivalent (SWE) is preferable to snow depth for water supply forecasting because:',
          a: [
            'SWE is easier to measure remotely by satellite than snow depth',
            'Snow density varies widely (50-500 kg/m³) making depth alone an unreliable indicator of water volume; SWE directly measures liquid water content',
            'SWE accounts for snowmelt that has already occurred; depth measures only accumulation',
            'SWE can be measured from single point samples; depth requires transect surveys',
          ],
          correct: 1,
          explain: 'A 1-metre-deep snowpack can contain anywhere from 50 mm (1.97 in) of water (if fresh, low-density powder at 50 kg/m³) to 500 mm (if dense spring corn snow at 500 kg/m³). Using depth alone to forecast spring runoff would introduce a factor-of-10 uncertainty. SWE = snow depth × (snow density / water density), capturing this density variability. SNOTEL sensors in the US West automatically measure SWE (via snow pillows that weigh the snowpack) and depth at ~900 sites. April 1 SWE historically explained ~70% of annual streamflow variability in snow-dominated western US basins, making it the primary index for water supply forecasting. The decline in April 1 SWE trends (averaging -25% since 1950 in the Sierra Nevada) directly translates to reduced water supply forecasts.',
        },
        // ── Chapter 2: Rivers and Floods ─────────────────────────────────────
        {
          q: 'When two 3rd-order streams join, what stream order results according to the Strahler system?',
          a: [
            '3rd order — joining lower-order tributaries never changes main-stem order',
            '4th order — two streams of the same order merge to form the next higher order',
            '6th order — orders add together',
            '5th order — one higher than the sum of equal orders',
          ],
          correct: 1,
          explain: `The Strahler (1952) stream order rule: when two streams of equal order n merge, the result is order n+1. When streams of different orders merge, the result is the higher order unchanged. So two 3rd-order streams joining → 4th-order stream. Two 4th-order streams joining → 5th-order. This geometric progression captures the self-similar branching structure of drainage networks. Most naturally ordered stream networks follow Horton\'s bifurcation ratio: the ratio of n-th to (n+1)-th order streams averages 3-5 across many natural basins. First-order streams make up ~80% of total stream length in most networks; large rivers of 8th+ order are rare and represent the convergence of vast contributing areas.`,
        },
        {
          q: `Lane\'s balance (Q_s × D₅₀ ∝ Q_w × S) predicts that building a dam will cause downstream channel:`,
          a: [
            'Aggradation (sediment deposition) as reduced water velocity allows settling of suspended load',
            'Degradation (channel incision) as sediment-free water released from the dam picks up bed material to compensate for the missing sediment supply',
            'Widening, as reduced peak flows decrease bank erosion resistance',
            'No change, as the dam equalises both sediment supply and water discharge proportionally',
          ],
          correct: 1,
          explain: `Lane\'s balance: Q_s × D₅₀ ∝ Q_w × S. A dam traps sediment in the reservoir (Q_s decreases dramatically) while releasing nearly the same water (Q_w roughly maintained). For balance to be restored, the right side must decrease — but water release cannot easily decrease, so slope S must decrease. The channel achieves lower slope by degrading (incising into its bed): the clear, under-saturated water picks up bed sediment to compensate for the missing supply. This "hungry water" effect has been documented below nearly every major dam: the Colorado River bed degraded 7.5 m (25 ft) over 65 km (40 mi) in the first 14 years below Hoover Dam. The Yangtze below Three Gorges Dam is experiencing similar channel incision, threatening downstream bridge foundations and floodplain agriculture.`,
        },
        {
          q: `A building located within FEMA\'s 1% annual chance floodplain has approximately what probability of flooding during a 30-year mortgage?`,
          a: [
            '1% — by definition, buildings in this zone flood once per century',
            'About 26% — cumulative probability of at least one 1% annual chance event in 30 years is 1-(0.99)^30',
            'About 50% — the building is statistically expected to flood once in exactly 50 years in this zone',
            'About 10% — FEMA uses a 10% lifetime probability as its regulatory standard',
          ],
          correct: 1,
          explain: 'The probability of at least one exceedance in N years for a flood with annual probability p is: P = 1 - (1-p)^N. For the 1% annual chance flood (p = 0.01) over N = 30 years: P = 1 - (0.99)^30 = 1 - 0.740 = 0.260 = 26%. This means a property in the 100-year floodplain has a 26% chance of flooding during a typical 30-year mortgage period — higher than most homeowners realise. Over a 50-year design life, the probability rises to ~40%. FEMA changed its public communications from "100-year flood" to "1% annual chance flood" precisely because the return period framing misled people into thinking such events were rare in their lifetimes.',
        },
        {
          q: 'The Hjulström diagram shows that clay particles require higher velocities to erode than fine sand. What explains this paradox?',
          a: [
            'Clay is denser than sand; higher velocity is needed to overcome gravity',
            'Clay particles are bound by cohesion and electrostatic forces that must be overcome to initiate entrainment, even though clay grains are smaller and lighter than sand',
            'Clay settles faster than sand, requiring higher velocities to keep it suspended once it has been eroded',
            'Clay particles are angular while sand is rounded; angular shapes resist rolling and saltation',
          ],
          correct: 1,
          explain: 'The apparent paradox in the Hjulström diagram is that erosion velocity increases for grain sizes below ~0.1 mm (0.00 in). Fine sand (0.1-0.5 mm (0.02 in)) erodes most easily (lowest critical velocity, ~15-25 cm/s). Both coarser grains (gravel, larger inertia) and finer grains (clay, silt — cohesion) require higher velocities. Clay minerals (kaolinite, smectite, illite) carry negative surface charges and bind to each other and to pore-water cations through electrostatic forces and van der Waals attractions. These cohesive forces effectively "glue" clay particles together, requiring substantial shear stress to disrupt the bed surface and entrain particles. Once eroded, however, clay particles settle so slowly (< 1 mm/s) that they remain in suspension at very low flow velocities and travel enormous distances before depositing.',
        },
        {
          q: 'What is the most cost-effective long-term strategy for managing properties that flood repeatedly?',
          a: [
            'Constructing higher, stronger levees around each at-risk property cluster',
            'Acquiring and relocating repeatedly flooded properties through buyout programs, removing them permanently from harm\'s way',
            'Requiring flood-proofing of all structures within the 100-year floodplain through building elevation mandates',
            'Installing permanent flood barriers at all river crossings to prevent floodwaters from reaching urban areas',
          ],
          correct: 1,
          explain: `Managed retreat (property acquisition and relocation) consistently achieves the highest benefit-cost ratios in FEMA flood mitigation analyses. Once a property is acquired, demolished, and returned to open space, it generates no further flood insurance claims, emergency response costs, or rebuilding expenses — ever. FEMA\'s benefit-cost analysis typically requires a ratio > 1.0 for project funding; buyout programs for repeatedly flooded properties routinely achieve ratios of 3-10. In contrast, levees protect existing floodplain development but require maintenance, can fail catastrophically, and encourage further development behind them. Building elevation helps individual properties but preserves the development pattern in the hazard zone, and the structure still faces damage risk from events exceeding its design elevation. The FEMA Hazard Mitigation Grant Program has funded over 45,000 property acquisitions since 1989 with documented success.`,
        },
        // ── Chapter 3: Groundwater ────────────────────────────────────────────
        {
          q: `Darcy\'s Law states Q = -KA(dh/dl). If hydraulic conductivity doubles and gradient halves, what happens to discharge?`,
          a: [
            'Discharge doubles',
            'Discharge stays the same — the increase from doubled K is exactly offset by the decrease from halved gradient',
            'Discharge quadruples',
            'Discharge halves',
          ],
          correct: 1,
          explain: `Darcy\'s Law is linear: Q = -K × A × (dh/dl). If K doubles (×2) and gradient dh/dl halves (×0.5), while A remains constant: Q_new = -(2K) × A × (0.5 × dh/dl) = -K × A × (dh/dl) = Q_original. The factor-of-2 increase from doubled K is exactly cancelled by the factor-of-2 decrease from halved gradient. This linear proportionality is a fundamental property of Darcy flow and is why aquifer characterisation must determine both K and gradient independently — high K with low gradient can yield the same flux as low K with high gradient. In regional groundwater flow analysis, gradients are measured from water table contour maps and K is determined from pumping tests.`,
        },
        {
          q: 'What defines the distinction between a confined and an unconfined aquifer?',
          a: [
            'Confined aquifers are always deeper than 100 m (328 ft); unconfined aquifers are shallower',
            'In a confined aquifer, water is bounded above by an aquitard and under pressure greater than atmospheric (artesian); in an unconfined aquifer, the water table is the upper boundary, free to fluctuate',
            'Confined aquifers are protected from contamination by their depth; unconfined aquifers are always contaminated near the surface',
            'Confined aquifers have higher hydraulic conductivity; unconfined aquifers are in fine-grained sediments',
          ],
          correct: 1,
          explain: 'The confinement distinction relates to whether the aquifer has a free upper surface (water table) or is bounded by an impermeable layer (aquitard). In an unconfined (phreatic or water table) aquifer, the upper boundary is the water table itself — the surface where pore water pressure equals atmospheric pressure. The water table fluctuates freely with recharge and extraction. In a confined aquifer, an overlying aquitard (clay, shale) creates a seal. Water in the aquifer is under pressure greater than atmospheric because it is hydraulically connected to a recharge zone at higher elevation. When a well penetrates a confined aquifer, water rises above the top of the aquifer to the potentiometric surface (artesian head). If this surface is above the land surface, the well flows without pumping — a flowing artesian well.',
        },
        {
          q: 'How does the Ghyben-Herzberg principle explain why coastal aquifers are vulnerable to seawater intrusion?',
          a: [
            'Coastal aquifers are shallower, so saltwater rises more rapidly to reach well screens',
            'The density ratio means that for every 1 m (3 ft) the freshwater head drops, the fresh-salt interface rises ~40 m (131 ft), so even small pumping-induced head declines cause large interface movements',
            'Saltwater is heavier than freshwater and simply fills coastal aquifer pores from below regardless of head conditions',
            'Coastal aquifers have lower hydraulic conductivity than inland aquifers, allowing saltwater to pond instead of being flushed',
          ],
          correct: 1,
          explain: 'The Ghyben-Herzberg relationship derives from hydrostatic pressure balance between freshwater and seawater columns. At the interface, pressure from the freshwater column above must equal pressure from the saltwater below. Because seawater (1,025 kg/m³) is only slightly denser than fresh (1,000 kg/m³), a 1 m (3 ft) freshwater head above sea level is balanced by a 40 m (131 ft) saltwater column below. Any reduction in the freshwater head — from pumping, drought, or sea level rise — allows the interface to rise proportionally: 1 m (3 ft) freshwater decline → 40 m (131 ft) interface rise. In an aquifer 50 m (164 ft) deep, a freshwater head of only 1.25 m (4 ft) above sea level prevents saltwater from reaching the surface. When coastal development draws down the water table by 2-3 m (10 ft), the interface can rise 80-120 m (394 ft), potentially contaminating the entire aquifer depth.',
        },
        {
          q: 'What characteristic makes PFAS ("forever chemicals") particularly difficult to remediate in contaminated groundwater?',
          a: [
            'PFAS are gaseous at groundwater temperatures, requiring special pumping equipment',
            'The extremely strong carbon-fluorine bonds resist all known biodegradation, hydrolysis, and photolysis pathways, leaving no natural attenuation mechanism in aquifers',
            'PFAS molecules are too large to be captured by activated carbon filters, requiring expensive membrane treatment',
            'PFAS contamination sinks to the deepest confined aquifer layer, making it physically inaccessible to remediation wells',
          ],
          correct: 1,
          explain: 'PFAS persistence arises from the C-F bond — one of the strongest bonds in organic chemistry (~485 kJ/mol for C-F vs ~350 kJ/mol for C-C). No known microorganism can completely break down most PFAS compounds, and the activation energy for chemical hydrolysis or oxidation is too high for natural groundwater conditions. This means PFAS plumes do not self-attenuate — they persist and spread for decades. Conventional pump-and-treat with activated carbon can capture some PFAS compounds but leaves behind short-chain variants. Emerging approaches include high-temperature destruction (supercritical water oxidation, sonochemical treatment, electrochemical oxidation), but these are expensive and only cost-effective for concentrated source zones. The recognition that PFAS are widespread, persistent, and bioaccumulative has driven regulatory responses including USEPA MCLs set in 2024.',
        },
        {
          q: 'Karst springs are described as "flashy" compared to springs in sand and gravel aquifers. What causes this?',
          a: [
            'Karst springs are at higher elevations, so they respond to snowmelt faster than lowland springs',
            'Karst conduits transmit water rapidly (1-100 m/hr vs 1-10 m/day for porous media), so storm recharge reaches the spring within hours to days rather than weeks to months',
            'Karst springs are fed by smaller catchment areas, producing more concentrated and faster-responding discharge',
            'Karst rock is non-porous, so all water flows along the surface to collect at spring orifices',
          ],
          correct: 1,
          explain: 'In porous-media aquifers (sand, gravel), water moves through tiny pore spaces at rates of centimetres to metres per day. The large surface area of grains attenuates pressure signals and disperses solute plumes. A storm recharge event may take weeks to months to be "felt" at a downgradient spring. In karst aquifers, solution conduits (cave passages, solution channels) may be metres in diameter and transmit water at hydraulic velocities of 1-100 m/hr — essentially open channel or pipe flow. Storm recharge can appear at a spring kilometres away within hours to days. This explains why karst springs show: (1) rapid, large discharge increases after storms; (2) high turbidity during events (sediment flushed through conduits); (3) rapid changes in water chemistry; and (4) the same extreme vulnerability to surface contamination — pathogens, nitrate, and chemicals injected at a sinkhole can appear at a spring in hours.',
        },
        {
          q: 'What hydrological consequence has been observed when major irrigation aquifers like the Ogallala are over-extracted?',
          a: [
            'Water tables rise near rivers as aquifer pressure increases, causing widespread riverbank flooding',
            'Streams that were historically gaining (groundwater discharging to river) become losing reaches as water tables fall below channel bed elevation, reducing river baseflow',
            'Increased groundwater pressure causes land uplift (isostatic rebound) similar to post-glacial rebound',
            'Reduced groundwater pressure triggers increased seismic activity along buried fault systems',
          ],
          correct: 1,
          explain: 'Gaining streams rely on the water table being above the channel bed — hydraulic head in the aquifer exceeds hydraulic head in the stream, so water flows from aquifer to stream. As the water table drops below the channel bed due to over-extraction, this gradient reverses: the stream now loses water to the aquifer (or the stream dries up entirely). In Nebraska, the Platte River has shifted from predominantly gaining to predominantly losing in many reaches as the Ogallala water table has declined from irrigation pumping since the 1950s. Platte River baseflow in late summer has declined 50-70%, with major impacts on migratory bird habitat (sandhill cranes, whooping cranes). Similar patterns of perennial streams becoming intermittent or ephemeral due to groundwater depletion have been documented in Kansas, Colorado, and the Texas Panhandle.',
        },
        {
          q: 'What is managed aquifer recharge (MAR) and how does Orange County, California use it?',
          a: [
            'MAR is a legal system regulating maximum pumping rates; Orange County limits pumping to 90% of annual natural recharge',
            'MAR involves deliberately injecting or infiltrating water into aquifers during surplus periods; Orange County treats recycled wastewater to potable standards for injection, supplying 35% of local water demand',
            'MAR is a monitoring network using GRACE satellite data to track aquifer storage changes; Orange County uses it for annual water budgeting',
            'MAR refers to managed allocation of recharge rights among competing users; Orange County auctions annual recharge credits to groundwater extractors',
          ],
          correct: 1,
          explain: `Managed aquifer recharge encompasses surface spreading (infiltration basins, stream channel recharge), direct injection (wells), and soil-aquifer treatment. Orange County Water District\'s Groundwater Replenishment System (GWRS) is the world\'s largest water purification system for indirect potable reuse: it takes secondary treated municipal wastewater, purifies it through microfiltration, reverse osmosis, and UV/advanced oxidation, then either spreads it in recharge basins or injects it into the aquifer via injection wells. The system produces ~130 million gallons per day, creating a hydraulic mound that also serves as a seawater intrusion barrier along the Orange County coast. The purified water meets or exceeds all drinking water standards before entering the aquifer, where it blends with natural groundwater and eventually reaches production wells. This closed-loop approach has transformed wastewater from a waste problem to a water supply asset.`,
        },
        {
          q: 'Baseflow — the groundwater contribution to rivers between storm events — is important for which of the following reasons?',
          a: [
            'Baseflow contributes primarily dissolved pollutants from agricultural soils and should be minimised through subsurface drainage',
            'Baseflow sustains perennial stream flow, maintains cool summer water temperatures for cold-water fish species, supports downstream water users during droughts, and maintains aquatic habitats',
            'Baseflow is the dominant source of flood peaks; reducing baseflow would significantly decrease flood risk in most rivers',
            'Baseflow is significant only in humid climates; in arid regions, streams are supported entirely by surface runoff with no groundwater contribution',
          ],
          correct: 1,
          explain: 'Baseflow is the lifeblood of perennial streams between storm events. Its ecological and water supply functions are numerous: (1) flow support — in many rivers, baseflow constitutes 50-80% of mean annual flow, sustaining the stream during dry months when snowmelt and storm runoff are absent; (2) temperature buffering — groundwater temperature ≈ mean annual air temperature, so groundwater-fed streams are cooler in summer than air-warmed surface runoff, providing thermal refugia for cold-water fish (trout, salmon) that cannot survive in streams warmer than ~20°C (68°F); (3) water quality — groundwater is generally cleaner and more chemically stable than surface runoff, diluting pollutants; (4) water supply — municipalities, industries, and irrigators that draw from rivers during summer are heavily dependent on groundwater-sustained baseflow. Declining baseflow from aquifer depletion is one of the most critical water resource challenges in regions like the Great Plains and Mediterranean climates.',
        },
        {
          q: 'What does a high topographic wetness index (TWI = ln(a/tan β)) predict about a location in a watershed?',
          a: [
            'High TWI indicates steep slopes prone to landsliding; such areas generate rapid shallow debris flows',
            'High TWI (large upslope area, gentle slope) indicates locations likely to saturate first during storms and become part of the variable source area generating runoff',
            'High TWI indicates high vegetation transpiration rates; these locations have the largest ET fluxes in the watershed',
            'High TWI indicates deep, permeable soils with high infiltration capacity; these areas generate the least runoff per unit of rainfall',
          ],
          correct: 1,
          explain: 'TWI = ln(a/tan β) combines two controls on soil moisture: a is the upslope drainage area (proxy for how much water drains toward a point) and tan β is local slope (proxy for how fast water drains away). A high TWI means large contributing area and/or gentle slope — the location receives water from a large upland area but drains it slowly. Such locations (valley floors, topographic hollows, areas with shallow soils above impermeable layers) saturate early during storms and remain saturated longest. In the variable source area concept underpinning TOPMODEL, high-TWI areas constitute the expanding-contracting contributing zone that generates saturation-excess overland flow. In practice, field surveys in humid forested catchments consistently find saturated soils, perched water tables, and springs in high-TWI locations, confirming the topographic control on soil moisture distribution.',
        },
        {
          q: 'Which single action would most effectively improve long-term water security in regions dependent on rapidly depleting fossil groundwater?',
          a: [
            'Drilling deeper wells to access lower aquifer layers not yet affected by depletion',
            'Transitioning to more water-efficient irrigation technologies and crops with lower water demand, combined with managed aquifer recharge from alternative sources',
            'Building large surface reservoirs to capture flood water as a complete substitute for groundwater',
            'Restricting population growth in groundwater-dependent regions to reduce per-capita water demand',
          ],
          correct: 1,
          explain: `No single action is sufficient, but the most impactful combination starts with demand reduction: irrigation efficiency improvements (drip/micro irrigation uses 30-70% less water than flood irrigation for the same crop yield), crop transitions to lower water demand varieties or rainfed crops where viable, and pricing reforms that internalise aquifer depletion costs. These reduce the depletion rate, extending the aquifer\'s useful lifespan. Simultaneously, managed aquifer recharge from alternative sources (recycled wastewater, captured stormwater, transferred surface water) can supplement natural recharge. Drilling deeper wells simply extends the depletion timeline briefly while increasing energy costs and eventually hitting impermeable basement. Large reservoirs can supplement supply but cannot replace the hundreds of km³ of fossil groundwater storage. Population restriction is difficult to implement and addresses the symptom rather than the efficiency of water use. Integrated demand management + supply augmentation is the evidence-based approach adopted in successful water security programmes (Israel, Singapore, Australia\'s Murray-Darling Basin reforms).`,
        },
      ],
    },
  ],
}

export default hyd101Capstone
