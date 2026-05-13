import { Activity } from 'lucide-react'
import type { Lesson } from './types'

const glac101Capstone: Lesson = {
  id: 'glac-101-capstone',
  title: 'Glaciology: Path Assessment',
  track: 'geo',
  trackName: 'Glaciology',
  level: 'Advanced',
  duration: '25 min',
  xpReward: 500,
  description: 'Comprehensive assessment across all three chapters of Glaciology',
  sources: [
    { org: 'NSIDC', title: 'NSIDC — National Snow and Ice Data Center', url: 'https://nsidc.org' },
    { org: 'WGMS',  title: 'WGMS — World Glacier Monitoring Service', url: 'https://wgms.ch' },
    { org: 'IPCC',  title: 'IPCC — Special Report on the Ocean and Cryosphere', url: 'https://ipcc.ch/srocc' },
    { org: 'BAS',   title: 'BAS — British Antarctic Survey', url: 'https://bas.ac.uk' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Comprehensive assessment across all three chapters of Glaciology',
      body: `This capstone covers the full Glaciology learning path: snow physics and glacier dynamics (Chapter 1), ice sheets and sea ice (Chapter 2), and glacial landforms, sediments, sea level, and paleoclimate (Chapter 3). Twenty questions test conceptual understanding, quantitative reasoning, and the ability to apply glaciological principles to real-world ice and climate challenges. You\'ll be asked to apply Glen\'s flow law, interpret ice core records, reason through Marine Ice Sheet Instability, evaluate sea level projections, and identify glacial landforms. A score of 80% or higher earns full XP and path completion. Take your time — each question has exactly one correct answer, and the explanations will reinforce your understanding regardless of the outcome.`,
      keyTerms: [],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Which type of snow metamorphism produces depth hoar, a coarse-grained layer of faceted crystals with low density?',
          a: [
            'Equi-temperature (ET) metamorphism driven by curvature differences between grains',
            'Kinetic (temperature-gradient) metamorphism driven by steep vapour-pressure gradients across the snowpack',
            'Melt-freeze metamorphism producing rounded, dense crusts',
            'Wind-packing metamorphism that fractures and bonds grains under mechanical stress',
          ],
          correct: 1,
          explain: 'Depth hoar forms when a steep temperature gradient — typically >10°C/m — drives a strong vapour-pressure gradient across the snowpack. Water vapour migrates from warmer, lower layers upward toward colder layers, depositing as large, angular, faceted crystals (depth hoar) that are loosely bonded and structurally weak. This kinetic or temperature-gradient (TG) metamorphism is distinct from equi-temperature (ET) metamorphism, which occurs under uniform temperature and causes grains to round and sinter over time. Depth hoar is a critical weak layer associated with dry-slab avalanche release and is common in continental snowpacks such as those in the Rocky Mountains and Siberia.',
        },
        {
          q: 'At approximately what density does pore close-off occur in a firn column, and what physically happens at this threshold?',
          a: [
            '550 kg/m³ — grains first lose their original crystal facets and begin to bond',
            '830 kg/m³ — air passages connecting pores become sealed, trapping ancient air as discrete bubbles',
            '917 kg/m³ — the firn reaches the density of pure ice and all gas is expelled',
            '680 kg/m³ — meltwater percolation is permanently blocked and refreezing begins',
          ],
          correct: 1,
          explain: 'Pore close-off occurs at approximately 820–840 kg/m³ (commonly cited as ~830 kg/m³). At this density, the interconnected network of air passages between firn grains becomes isolated into discrete, sealed bubbles. This is the moment that ancient atmospheric air is permanently trapped inside the ice, forming the gas archive exploited by ice core palaeoclimatologists. Above this depth the air is still in contact with the atmosphere; below it the gas archive is closed. The depth of pore close-off ranges from ~60–70 m in Greenland to over 100 m at cold, low-accumulation Antarctic sites, introducing a gas age–ice age offset (Δage) that must be modelled when interpreting ice core records.',
        },
        {
          q: 'Glen\'s flow law describes the creep of polycrystalline ice: έ = A τⁿ, where n ≈ 3. If basal shear stress doubles, by what factor does the strain rate increase?',
          a: [
            '2× because stress and strain rate are linearly proportional',
            '4× because the square of the stress ratio governs flow at high stresses',
            '8× because strain rate scales as stress³, so 2³ = 8',
            '6× because the flow exponent n = 3 adds a factor of 3 to the doubling',
          ],
          correct: 2,
          explain: 'Glen\'s flow law is nonlinear: strain rate έ is proportional to τⁿ, with n ≈ 3 for most natural ice deformation conditions. If stress doubles (τ → 2τ), the strain rate scales as (2τ)³ = 8τ³ — an eightfold increase. This strong nonlinearity has profound implications: small variations in driving stress cause disproportionately large changes in ice velocity, making fast-flowing outlet glaciers and ice streams highly sensitive to small perturbations in geometry or basal conditions. The value of A (the rate factor or softness parameter) is temperature-dependent, increasing by approximately three orders of magnitude between −50°C and 0°C, so warm ice at the base deforms far more readily than cold ice above.',
        },
        {
          q: 'In a glacier where ice motion is dominated by internal deformation (creep) rather than basal sliding, where is horizontal velocity at its maximum?',
          a: [
            'At the glacier surface, because shear strain accumulates with depth from the bed upward',
            'At the equilibrium line altitude, where accumulation and ablation balance',
            'At the base of the glacier, immediately above the bedrock interface',
            'At the centre of the ice column, where confining pressure is lowest',
          ],
          correct: 0,
          explain: 'In deformation-dominated glaciers, internal shear strain accumulates from the bed upward. The basal ice experiences the greatest cumulative shear (all the strain from the entire ice column acts on it) but the velocity at any point reflects the integrated shear from the bed to that horizon. Since shear is added layer by layer upward, the total displacement is greatest at the surface — each overlying layer moves slightly faster than the one below. The velocity profile is approximately parabolic, with maximum velocity at the surface and zero velocity (no-slip) at the bed. In contrast, glaciers with significant basal sliding have an additional slip component, altering the velocity profile and often flattening the gradient.',
        },
        {
          q: 'A glacier receives annual accumulation of 1.8 m water equivalent (w.e.) and loses 2.5 m w.e. to ablation. What is the net mass balance, and what does it imply?',
          a: [
            '+0.7 m w.e.; the glacier is gaining mass and advancing',
            '+4.3 m w.e.; total inputs exceed total outputs so the glacier thickens',
            '−4.3 m w.e.; the glacier loses mass at an extreme rate',
            '−0.7 m w.e.; the glacier is losing mass and is likely retreating',
          ],
          correct: 3,
          explain: 'Net mass balance = accumulation − ablation = 1.8 − 2.5 = −0.7 m w.e. per year. A negative net balance means the glacier is losing more mass than it gains, so it will thin and, if this persists, retreat. This is the situation for the vast majority of the world\'s glaciers under current climate conditions. The WGMS global glacier mass balance reference record shows a cumulative loss of over 25 m w.e. since the 1970s. Sustained negative balances raise sea level, reduce freshwater availability for downstream communities, and eventually lead to complete glacier disappearance if the ELA rises above the highest point of the glacier.',
        },
        {
          q: 'What is the equilibrium line altitude (ELA)?',
          a: [
            'The altitude at which a glacier transitions from temperate to polar thermal regime',
            'The altitude separating the upper accumulation zone from the lower ablation zone in a given budget year',
            'The altitude at which annual accumulation exactly equals annual ablation, defining the boundary between gaining and losing zones',
            'The altitude of the snowpack\'s maximum winter extent before spring melt begins',
          ],
          correct: 2,
          explain: 'The ELA is the altitude on a glacier where annual accumulation exactly equals annual ablation, yielding zero net mass balance for that elevation. Above the ELA lies the accumulation zone (net mass gain); below lies the ablation zone (net mass loss). The ELA is a sensitive indicator of climate: a warmer or drier year raises the ELA, shrinking the accumulation zone and often resulting in a negative annual mass balance. In extreme cases the ELA can rise above the glacier\'s highest point, meaning the entire glacier is in the ablation zone and must retreat regardless of its dynamics. Long-term ELA rise is one of the clearest observational signatures of climate warming on mountain glaciers worldwide.',
        },
        {
          q: 'Meltwater drains from the glacier surface through moulins to the subglacial drainage system. What is the immediate dynamical effect on ice velocity?',
          a: [
            'Subglacial water pressure rises, reducing effective stress at the bed and enhancing basal sliding, increasing ice velocity',
            'Cold meltwater freezes at depth, cementing the ice to bedrock and slowing basal motion',
            'Meltwater lubricates englacial fractures, increasing internal deformation rates',
            'Drainage through moulins removes heat from the base, freezing pore water and increasing bed friction',
          ],
          correct: 0,
          explain: 'When surface meltwater reaches the glacier bed via moulins (vertical drainage shafts through the ice), it elevates subglacial water pressure. Effective stress — the difference between ice overburden pressure and water pressure — controls the frictional resistance at the bed. Higher water pressure reduces effective stress, weakening the bed\'s grip on the ice and allowing faster basal sliding. This mechanism drives the well-documented summer speed-up on the Greenland Ice Sheet, where surface melt events cause sudden velocity increases of 10–100%. However, as the drainage system evolves from inefficient distributed cavities to efficient channelised conduits (Röthlisberger channels), water pressure drops and velocities may return toward baseline or even decrease.',
        },
        {
          q: 'The Greenland Ice Sheet contains approximately 2.85 million km³ of ice. What is its sea level equivalent (SLE)?',
          a: [
            '~3.2 m — equivalent to the volume divided by global ocean area',
            '~7.4 m — representing the eustatic sea level rise if the entire ice sheet melted',
            '~12 m — accounting for isostatic rebound of the bedrock after ice removal',
            '~1.8 m — because much of Greenland\'s ice is grounded below sea level and displaces water',
          ],
          correct: 1,
          explain: 'The Greenland Ice Sheet holds approximately 7.2–7.4 m of sea level equivalent, the most commonly cited figure being ~7.4 m (some sources give 7.2 m after accounting for the ice below sea level that already displaces ocean water). This is calculated by converting the ice volume to freshwater equivalent and dividing by the global ocean surface area (~361 million km²). Complete melting would require millennia under any realistic scenario, but even partial loss matters: IPCC projections suggest Greenland could contribute ~0.1–0.23 m to sea level rise by 2100 under high-emissions scenarios. The ~7.4 m figure is a physical upper bound that underscores the long-term stakes of ice sheet stability.',
        },
        {
          q: 'What distinguishes Marine Ice Sheet Instability (MISI) from ordinary glacier retreat driven by surface melting?',
          a: [
            'MISI is triggered exclusively by atmospheric warming, whereas ordinary retreat responds to oceanic warming',
            'MISI involves iceberg calving, while ordinary retreat involves surface ablation only',
            'MISI is a dynamic instability on retrograde bed slopes: as the grounding line retreats into deeper water, the ice column thickens, ice flux accelerates, and retreat becomes self-sustaining without further external forcing',
            'MISI applies only to Arctic ice sheets; Antarctic glaciers are too cold to experience it',
          ],
          correct: 2,
          explain: 'Marine Ice Sheet Instability (MISI) was theorised by Weertman (1974) and Mercer (1978) and formalised in subsequent work. On a retrograde bed (one that deepens inland), if the grounding line retreats even slightly into deeper water, the ice column at the grounding line becomes thicker, which by the shallow-ice approximation increases the driving stress and ice flux. More ice is discharged than is replaced by upstream flow, so the grounding line retreats further — a positive feedback that can continue without any additional external forcing. This makes the West Antarctic Ice Sheet (WAIS), much of which rests on a retrograde bed below sea level, potentially susceptible to irreversible destabilisation. Parts of Thwaites and Pine Island glaciers show evidence of ongoing MISI.',
        },
        {
          q: 'What happens to Earth\'s energy balance when sea ice melts and exposes open ocean, and why does this amplify warming?',
          a: [
            'Open ocean (albedo ~0.06) absorbs far more solar radiation than sea ice (albedo ~0.85), so more energy enters the climate system — a positive feedback that further warms the Arctic',
            'Meltwater from sea ice reduces ocean salinity, suppressing deep-water formation and cooling the North Atlantic',
            'Open ocean emits more longwave radiation than ice, cooling the surface and compensating for the albedo change',
            'Sea ice melt releases trapped methane clathrates, which contribute more to warming than the albedo change itself',
          ],
          correct: 0,
          explain: 'Sea ice albedo feedback is one of the most powerful amplifying mechanisms in the climate system. Sea ice reflects 75–85% of incoming solar radiation (albedo ~0.75–0.85) while open ocean absorbs ~94% of incoming radiation (albedo ~0.06). When ice melts, the surface energy balance shifts dramatically: the newly exposed ocean absorbs far more sunlight, warming the water and inhibiting refreezing — creating a self-reinforcing cycle. This is the primary reason the Arctic is warming approximately 3–4× faster than the global mean (Arctic amplification). Modelling studies attribute roughly half of Arctic surface warming to this single feedback, making Arctic sea ice loss one of the most consequential changes in the cryosphere.',
        },
        {
          q: 'What is the primary mechanism by which ice shelves stabilise the marine portions of ice sheets such as Antarctica?',
          a: [
            'Ice shelves insulate the base of grounded ice from warm ocean water, preventing basal melting',
            'Ice shelves refreeze calved icebergs and recycle them back to the ice sheet',
            'Ice shelves increase surface accumulation by capturing snowfall over the ocean',
            'Ice shelves provide buttressing: back-stress transmitted upstream through the ice shelf slows the flow of tributary ice streams and glaciers feeding it',
          ],
          correct: 3,
          explain: 'Ice shelves — floating extensions of grounded ice — exert a back-stress (buttressing) on the grounded ice upstream because they are constricted by embayment walls and pinned by bathymetric highs (ice rises). This stress is transmitted upstream, effectively slowing the flow of the tributary ice streams and outlet glaciers that feed the shelf. When ice shelves collapse (as with Larsen B in 2002), the buttressing is lost and upstream glaciers accelerate dramatically — Larsen B\'s tributaries sped up 2–8× within months of collapse. Quantifying buttressing and its sensitivity to basal melt from warming Circumpolar Deep Water is central to projecting future ice sheet contributions to sea level rise.',
        },
        {
          q: 'At approximately what temperature does seawater of typical open-ocean salinity (~34 psu) begin to freeze?',
          a: [
            '0°C — the same as pure water, because salinity does not significantly affect the freezing point',
            '−1.8°C — because dissolved salts depress the freezing point below that of pure water',
            '−3.4°C — because each practical salinity unit lowers the freezing point by 0.1°C',
            '−0.5°C — a slight depression caused by pressure at typical Arctic depths',
          ],
          correct: 1,
          explain: 'The freezing point of seawater is depressed below 0°C by dissolved salts according to the relation Tf ≈ −0.0575 × S + 1.710523×10⁻³ × S^(3/2) − 2.154996×10⁻⁴ × S² (UNESCO formula). At standard open-ocean salinity of ~34–35 psu, this yields Tf ≈ −1.8°C. This freezing point depression has important consequences: sea ice forms at temperatures well below 0°C, the ocean can be supercooled under ice shelves where pressure further depresses the freezing point, and as sea ice forms it expels brine, producing dense, salty water that drives thermohaline circulation. In the Arctic, surface waters cool to −1.8°C before freeze-up, a temperature readily achieved in winter.',
        },
        {
          q: 'Which portion of the Antarctic Ice Sheet is grounded predominantly below sea level and is considered most vulnerable to Marine Ice Sheet Instability?',
          a: [
            'East Antarctic Ice Sheet (EAIS) — the larger dome with most ice above sea level',
            'Antarctic Peninsula Ice Sheet — highly sensitive to atmospheric warming at lower latitudes',
            'West Antarctic Ice Sheet (WAIS) — resting largely on a retrograde bed well below sea level',
            'Filchner–Ronne Ice Shelf drainage basin — because it contains the largest ice shelf by area',
          ],
          correct: 2,
          explain: 'The West Antarctic Ice Sheet (WAIS) is considered the most vulnerable component of the Antarctic cryosphere because the majority of its bed lies hundreds to over 2,000 metres below sea level, and large portions slope retrograde (deepening inland). This configuration makes it susceptible to Marine Ice Sheet Instability (MISI). The WAIS holds approximately 3.3 m of sea level equivalent. Pine Island Glacier and Thwaites Glacier — the two largest outlets of the WAIS — are already thinning rapidly under incursion of warm Circumpolar Deep Water beneath their ice shelves. Some modelling studies suggest parts of Thwaites may already be in an unstable retreat phase, though the timescale of potential collapse spans centuries.',
        },
        {
          q: 'Since satellite observations began in 1979, at approximately what rate has the September Arctic sea ice extent minimum been declining?',
          a: [
            '~3% per decade — a modest decline consistent with natural variability',
            '~13% per decade — a statistically robust decline linked to anthropogenic warming',
            '~25% per decade — Arctic sea ice will vanish entirely within five years',
            '~6% per decade — roughly half the rate projected by early climate models',
          ],
          correct: 1,
          explain: 'NSIDC satellite data show that the September Arctic sea ice extent minimum has declined at a linear trend of approximately 12–13% per decade relative to the 1981–2010 average. Since 1979, the Arctic has lost roughly 40% of its September sea ice extent. The decline is not smooth — individual years vary substantially — but the long-term trend is highly statistically significant and cannot be explained by natural variability alone. Attribution studies conclude that anthropogenic greenhouse gas forcing is the dominant driver. Seasonal ice-free Arctic summers are projected for mid-century under high-emissions scenarios, with profound consequences for shipping, ecosystems, and global climate feedbacks.',
        },
        {
          q: 'A roche moutonnée has a smooth, striated stoss (up-glacier) face and a rough, plucked lee (down-glacier) face. What process creates this asymmetry?',
          a: [
            'Abrasion by rock fragments in basal ice polishes the stoss face; pressure release on the lee side drives quarrying (plucking), producing the jagged lee face',
            'Meltwater erosion smooths the stoss face, while freeze-thaw cycles fracture the lee face',
            'The stoss face undergoes chemical weathering; the lee face is mechanically eroded by turbulent subglacial water',
            'Wind erosion polishes the exposed stoss face after deglaciation; the lee face preserves original bedrock roughness',
          ],
          correct: 0,
          explain: 'Roche moutonnée asymmetry reflects two distinct erosional processes. On the stoss side, high ice-bed contact stress forces rock fragments embedded in basal ice to abrade and polish the bedrock, producing smooth striated surfaces — the principal tool of reconstruction of past ice-flow directions. On the lee side, ice pressure drops in the lee of the obstruction, and subglacial water refreezes into bedrock joints (regelation plucking or quarrying). Freeze-thaw cycling in the lee cavity exploits pre-existing fractures and joints, ripping out angular blocks and leaving an irregular, jagged surface. The result — smooth stoss, rough lee — allows geologists to unambiguously determine the direction of former ice flow from these features alone.',
        },
        {
          q: 'Fjords such as Sognefjord in Norway reach depths exceeding 1,300 m, well below current sea level. What explains this glacial overdeepening below sea level?',
          a: [
            'Marine erosion by deep ocean currents scoured the fjord floor after deglaciation',
            'Tectonic rifting created the deep basins that were subsequently reshaped by glaciers',
            'Subglacial meltwater rivers under high pressure eroded deep channels below sea level',
            'During the Last Glacial Maximum, global sea level was ~120 m lower and ice sheets extended to the continental shelf; glaciers remained grounded and actively eroded at the coast, deepening valleys far below modern sea level',
          ],
          correct: 3,
          explain: 'Fjord formation requires sustained glacial erosion at or near sea level. During the Last Glacial Maximum (~20,000 years ago), global sea level was approximately 120–130 m lower than today, and large ice sheets extended to the continental shelf edges. Ice sheets and outlet glaciers remained grounded — and therefore in contact with and eroding the bed — all the way to the coast. Glacial erosion rates are highest where ice velocity and basal stress are greatest, often in narrow, structurally weakened valleys. After deglaciation, sea level rose to flood the deeply eroded valleys, creating fjords. The combination of deep glacial erosion plus post-glacial sea level rise explains why fjords can extend to depths far below modern sea level.',
        },
        {
          q: 'The EPICA Dome C ice core extends the Antarctic CO₂ record to 800,000 years. What was the highest pre-industrial atmospheric CO₂ concentration over this period, and how does it compare to today?',
          a: [
            '~180–200 ppm during glacial maxima; current levels at ~420 ppm are more than double this',
            '~280–300 ppm during warm interglacials; current levels at ~420 ppm are approximately 50% above this natural maximum',
            '~350 ppm during the Holocene Climatic Optimum; current levels are only modestly elevated above natural range',
            '~400 ppm during the warm MIS 11 interglacial; current levels are already within natural variability',
          ],
          correct: 1,
          explain: 'The EPICA Dome C record (Lüthi et al., 2008) shows that over the past 800,000 years CO₂ oscillated between glacial minima of ~170–180 ppm and interglacial maxima of ~280–300 ppm (the highest being ~300 ppm during MIS 11, ~400,000 years ago). Current atmospheric CO₂ levels have exceeded 420 ppm as of 2023 — approximately 40–50% above the highest natural interglacial value in the entire 800,000-year record. The rate of increase (~2–3 ppm/year) is orders of magnitude faster than any natural transition in the ice core record. This unambiguously places modern CO₂ outside the envelope of natural variability and directly implicates anthropogenic emissions.',
        },
        {
          q: 'What is glacial isostatic adjustment (GIA), and why is Fennoscandia still rising at rates up to 10 mm/year today?',
          a: [
            'GIA is tidal flexure of the lithosphere; Fennoscandia rises because North Atlantic tidal forcing is strongest at high latitudes',
            'GIA is the elastic compression of crust under ice load; Fennoscandia rebounds elastically as permafrost thaws and reduces pressure',
            'GIA is the viscous rebound of the mantle following removal of the Fennoscandian Ice Sheet ~10,000 years ago; mantle viscosity of ~10²⁰ Pa·s means the relaxation timescale is thousands of years, so uplift continues today',
            'GIA is thermal expansion of the lithosphere; warming since the last ice age has caused Scandinavian crust to thermally expand upward',
          ],
          correct: 2,
          explain: 'Glacial isostatic adjustment (GIA) is the response of the solid Earth to changes in ice surface loading. During glaciation, the weight of thick ice sheets depresses the lithosphere into the underlying mantle. After deglaciation, the mantle — a viscous fluid on geological timescales (viscosity ~10²⁰–10²¹ Pa·s in the upper mantle) — flows back under the unloaded lithosphere, causing uplift. The Fennoscandian Ice Sheet melted rapidly between ~18,000 and ~8,000 years ago, but the viscous mantle continues to flow in response. Current GPS uplift rates in the Gulf of Bothnia reach ~10 mm/year, with an estimated remaining uplift of ~100 m before equilibrium is reached. GIA modelling is essential for separating ice-sheet-driven sea level signals from local land-level changes.',
        },
        {
          q: 'Varve sequences in glaciolacustrine sediments provide annually resolved records. What are the two distinct layers that form one annual varve couplet?',
          a: [
            'A coarse, light-coloured summer layer deposited by high meltwater discharge, and a thin, dark winter clay layer deposited from suspension under ice-covered, quiescent conditions',
            'A dark organic-rich spring layer and a pale siliciclastic autumn layer reflecting seasonal plant growth cycles',
            'A thick glacigenic diamicton and a thin carbonate layer precipitated chemically during warm summers',
            'An ice-rafted debris layer deposited during spring breakup and a fine silt layer deposited in winter',
          ],
          correct: 0,
          explain: 'Each annual varve couplet records the seasonal contrast in a glacier-fed lake. In summer, high meltwater discharge delivers abundant coarse silt and sand to the lake; these particles settle quickly to form a thick, pale, relatively coarse-grained layer. In autumn and winter, meltwater ceases and the lake surface freezes over, creating calm conditions under ice cover. Fine clay particles that remained in suspension slowly settle as a thin, dark, organic-rich layer. The sharp contact between one winter clay layer and the next summer layer marks a year boundary, enabling varve chronologists to count years directly. Varve sequences have been used to build annually resolved records extending back ~13,000 years in Scandinavia, providing crucial deglaciation chronologies.',
        },
        {
          q: 'Ice cores from Antarctica show a gas age–ice age offset (Δage) that can exceed several thousand years at cold, low-accumulation sites. What causes this offset?',
          a: [
            'Gases diffuse through solid ice over millennia, gradually shifting their apparent age relative to the surrounding ice matrix',
            'Antarctic ice is so old that radioactive decay of atmospheric ¹⁴C alters the apparent age of the gas record',
            'Seasonal melting at the surface introduces modern air downward into the firn column, contaminating older gas records',
            'Air remains in open, interconnected firn pores and exchanges freely with the atmosphere until pore close-off, which occurs decades to centuries after snow deposition in Greenland but thousands of years after deposition at cold, low-accumulation Antarctic sites',
          ],
          correct: 3,
          explain: 'The gas age–ice age offset (Δage) arises because snow is not immediately isolated from the atmosphere. In the firn layer above pore close-off, air circulates freely through open pores, so the gas age at pore close-off equals the modern atmospheric age — but the surrounding ice was deposited much earlier. Δage = ice age − gas age. At warm, high-accumulation Greenland sites the firn is thin and close-off is rapid (~50–150 years), so Δage is small. At cold, low-accumulation East Antarctic sites (e.g., Dome C, Vostok), the firn column is thick and densification is slow: pore close-off occurs 1,500–7,000 years after initial snow deposition, creating large Δage values. Accurate Δage modelling is essential for phase-locking climate variables (temperature from water isotopes in the ice) with greenhouse gas records from the trapped air.',
        },
      ],
    },
  ],
}

export default glac101Capstone
