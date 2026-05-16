import { Activity, BarChart2, Droplets, Globe } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const hydrographAnalysis: Lesson = {
  id: 'hyd-201-1-1-2',
  title: 'Hydrograph Analysis and Unit Hydrograph Theory',
  track: 'geo',
  trackName: 'Advanced Hydrology',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: 'Decomposing storm hydrographs into direct runoff and baseflow components, recession analysis, the linear unit hydrograph framework, geomorphological connections to basin morphology, and synthetic UH methods including the SCS curve number approach.',
  sources: [
    { org: 'USGS',   title: 'USGS Streamflow Data and Hydrograph Analysis',               url: 'https://waterdata.usgs.gov/nwis' },
    { org: 'NRCS',   title: 'NRCS National Engineering Handbook — Hydrology (NEH-630)',   url: 'https://www.nrcs.usda.gov/wps/portal/nrcs/detailfull/national/water/manage/hydrology/' },
    { org: 'AGU',    title: 'Water Resources Research — Unit Hydrograph Theory',           url: 'https://agupubs.onlinelibrary.wiley.com/journal/19447973' },
    { org: 'ASCE',   title: 'HEC-HMS Technical Reference Manual',                          url: 'https://www.hec.usace.army.mil/confluence/hmsdocs' },
  ],
  sections: [
    {
      type: 'intro',
      title: `Reading the river\'s autobiography`,
      body: `A storm hydrograph is one of the most information-rich records in hydrology. The shape of the rising limb, the timing and height of the peak, the curvature of the recession — each feature encodes information about the storm, the soils, the channel network, and the antecedent state of the catchment. Learning to decompose and interpret hydrographs is the gateway to predicting catchment response, estimating flood risk, and designing hydraulic infrastructure.

The storm hydrograph records **discharge** (m³/s or cfs) at a stream gauging station as a function of time during and after a rainfall event. It is the convolution of two processes: the **rainfall excess** (the fraction of rainfall that becomes direct runoff, after subtracting infiltration, depression storage, and interception losses) and the **catchment transfer function** (the routing of that excess through the hillslopes, channel network, and floodplain to the gauging station). Separating these two contributions is the central challenge of quantitative hydrology.

**Hydrograph components.** The total streamflow at any moment during a storm comprises two conceptually distinct contributions. **Direct runoff** — also called stormflow or quick flow — includes surface runoff, subsurface stormflow, and interflow; it rises rapidly with rain and recedes within hours to days after the storm. **Baseflow** — the groundwater contribution — sustains streamflow between storms; it responds slowly to recharge events and recedes over weeks to months following a major storm. The total hydrograph is the sum of these two components, and their proportions carry important information: a catchment with a large baseflow-to-direct-runoff ratio is well-buffered by groundwater storage; one where direct runoff dominates is flashy and sensitive to individual storms.

**Baseflow separation** is the process of estimating the baseflow contribution beneath an observed hydrograph, so that the direct runoff volume can be isolated. Several methods exist, ranging from simple graphical approaches to digital filtering algorithms. The **constant slope method** draws a straight line from the start of hydrograph rise to a point on the recession at N days after the peak, where N ≈ A^0.2 (A = drainage area in km²). The **master depletion curve** uses recession data from multiple storms to construct a reference exponential decline Q(t) = Q₀ × e^(−t/k), where k (days) is the recession constant — a property of the aquifer draining to the stream. The **digital Lyne-Hollick filter** is an algorithm applied to the raw flow record that smooths away rapid variations (direct runoff) to isolate the slowly varying component (baseflow), using a recursive forward-backward filter with parameter α (typically 0.925).

**Recession analysis** links hydrograph shape to aquifer properties. During the recession (when no new rain is falling), streamflow declines as the groundwater aquifer drains. For a linear reservoir, the decline is exponential: Q(t) = Q₀ × e^(−t/k), where the recession constant k (the e-folding time in days) reflects aquifer geometry, hydraulic conductivity, and drainage area. Short k (fast recession) indicates shallow, responsive aquifers or steep, highly permeable catchments; long k (slow recession) indicates deep aquifers or low-conductivity storage. **Recession slope analysis** plots −dQ/dt against Q on log-log axes; a slope of 1 indicates a linear reservoir, while slopes of 2 or 3 indicate non-linear storage-discharge relationships typical of more complex systems. The baseflow index (BFI = baseflow volume / total streamflow volume) is a widely used catchment signature that integrates long-run hydrology into a single number.

**Unit Hydrograph (UH) theory**, introduced by Leroy Sherman in 1932, provided the first systematic framework for predicting ungauged storm responses. Sherman's idea was elegant: if the catchment behaves as a **linear time-invariant system**, then the direct runoff hydrograph from any storm can be predicted by convolving the excess rainfall hydrograph with a **unit hydrograph** — the direct runoff response to a single unit (1 mm (0.04 in) or 1 inch) of excess rainfall applied uniformly over the catchment in a unit time interval. Linearity allows superposition: the response to a multi-period storm is the sum of shifted, scaled unit hydrograph responses for each rainfall-excess increment. Time invariance means the UH shape does not change with season or event magnitude. These assumptions are simplifications — real catchments exhibit non-linearity and threshold behaviour — but for many practical flood estimation problems, UH theory provides useful first approximations.

The **geomorphological UH (GIUH)**, developed by Rodriguez-Iturbe and Valdes (1979), established that the UH peak, time-to-peak, and shape could be predicted directly from measurable basin morphological properties — drainage density, Horton stream order ratios (Bifurcation ratio RB, Length ratio RL, Area ratio RA) — without any calibration data. This was transformative for ungauged catchment hydrology. The **SCS Curve Number method** (now NRCS), developed in the 1950s–60s, provides a practical tool for estimating direct runoff volume as a function of total storm rainfall, soil type (hydrologic soil groups A–D), land use, and antecedent moisture condition. The 2019 Midwest flooding in the US illustrated these principles at continental scale: months of above-normal precipitation had driven soil moisture to record highs (antecedent moisture condition III), pushing curve numbers to ~95 across much of the affected area — meaning approximately 90% of additional rainfall became direct runoff, amplifying floods to historic levels.`,
      keyTerms: [
        {
          term: 'direct runoff',
          def: 'The component of stormflow that responds rapidly to rainfall, including surface runoff, subsurface stormflow, and interflow. Rises during the storm and recedes within hours to days after rainfall ceases. Also called stormflow or quick flow. Isolated from baseflow by hydrograph separation techniques. The volume of direct runoff, divided by catchment area, gives the runoff depth — the basis for unit hydrograph analysis.',
        },
        {
          term: 'baseflow',
          def: 'The slowly varying groundwater contribution to streamflow that sustains rivers between storms. Declines exponentially during dry periods following Q(t) = Q₀ × e^(−t/k), where k is the recession constant (days) reflecting aquifer properties. The baseflow index (BFI = baseflow volume / total volume) is a key catchment signature, ranging from ~0.1 in flashy urban catchments to >0.9 in groundwater-dominated chalk streams.',
        },
        {
          term: 'unit hydrograph (UH)',
          def: 'The direct runoff hydrograph produced by 1 unit (typically 1 mm (0.04 in) or 1 inch) of rainfall excess distributed uniformly over a catchment during a unit time period (e.g., 1 hour). Introduced by Leroy Sherman (1932). Based on linearity (response scales proportionally with excess rainfall depth) and time invariance (the shape is constant). Used to predict runoff from storms of arbitrary duration and intensity by convolution.',
        },
        {
          term: 'SCS Curve Number (CN)',
          def: 'A dimensionless runoff coefficient (0–100) that characterises the direct runoff generating potential of a catchment as a function of soil type (hydrologic soil groups A, B, C, D), land use, and antecedent moisture condition (AMC I–III). Direct runoff Q = (P − Ia)² / (P − Ia + S), where S = (25400/CN) − 254 mm (10.00 in) and Ia = 0.2S (initial abstraction). CN ranges from ~30 (sandy forest) to 98 (impervious urban). Developed by NRCS/SCS for small agricultural watersheds; widely applied globally.',
        },
        {
          term: 'geomorphological unit hydrograph (GIUH)',
          def: `A unit hydrograph derived from measurable basin morphological properties rather than from observed rainfall-runoff data. Developed by Rodriguez-Iturbe and Valdes (1979). Uses Horton\'s stream order ratios — Bifurcation ratio RB, Length ratio RL, and Area ratio RA — to predict the width function (the distribution of flow-path lengths to the outlet) and hence the UH peak flow and time to peak. Enables flood estimation at ungauged sites.`,
        },
      ],
    },
    {
      type: 'concept',
      title: 'Baseflow separation, recession analysis, and hydrograph decomposition',
      body: `**Separating direct runoff from baseflow.** No instrument directly measures baseflow or direct runoff — gauges measure total discharge. Separation requires assumptions about the shape of the baseflow contribution during the storm period. The fundamental assumption is that baseflow responds slowly enough that its behaviour during the storm period can be estimated by interpolation or extrapolation from pre-storm recession behaviour.

The **constant slope** (or N-day) method is the most transparent: project the pre-storm recession forward until it intersects a vertical line at N days after the hydrograph peak (N ≈ A^0.2, where A is drainage area in km²). Connect the inflection point on the rising limb to this recession intersection point with a straight line. Everything above this line is direct runoff; everything below is baseflow. Simple and reproducible, though the linear baseflow trajectory is physically arbitrary.

The **master depletion curve** method uses recession data from many storms to build a composite recession that represents the aquifer drainage behaviour. Each individual recession is plotted on log-scale and matched — by shifting along the time axis — to adjacent recession segments until they overlap, constructing a single master curve. The master recession constant k (days) and its non-linearity exponent (from log-log recession slope analysis) characterise the aquifer quantitatively.

The **Lyne-Hollick digital filter** is computationally efficient and reproducible: it passes the streamflow time series through a recursive filter to separate the high-frequency stormflow signal from the low-frequency baseflow. The forward pass: b_f = α × b_{f-1} + (1 − α)/2 × (Q_f + Q_{f-1}), where α ≈ 0.925. The filter is run forwards and backwards and then averaged, removing phase distortion. The parameter α controls the degree of separation: higher α retains more variability in the baseflow estimate.

**Recession constant and aquifer properties.** The e-folding recession constant k (in days) relates to aquifer hydraulic properties through the Boussinesq solution for a linearised aquifer: k ≈ L² S_y / (π² T), where L is aquifer length, S_y is specific yield, and T is transmissivity. This theoretical connection means that recession analysis — applied to stream discharge data collected at low cost — can provide independent estimates of aquifer hydraulic properties that are otherwise expensive to measure with pumping tests.`,
      cards: [
        {
          name: 'Constant Slope Baseflow Separation',
          icon: BarChart2,
          color: BRAND.accent,
          desc: 'Draw a straight line from hydrograph rise onset to the recession at N ≈ A^0.2 days after peak (A = area in km²). Visually interpretable; reproducible for same storm. Direct runoff volume = area above line × catchment area. Runoff depth Q (mm) = direct runoff volume / catchment area. Used as input to UH derivation. Limitation: assumes linear baseflow trajectory during storm — often not physically realistic.',
          examples: '50 km² (19 sq mi) catchment: N ≈ 50^0.2 ≈ 2.2 days after peak · 500 km² (193 sq mi) catchment: N ≈ 500^0.2 ≈ 3.5 days · Comparison of methods shows ±15–30% variation in computed baseflow index depending on separation technique · UK BFIHOST database: BFI ranges from 0.16 (impermeable clay) to 0.97 (chalk aquifer)',
        },
        {
          name: 'Recession Analysis: Q(t) = Q₀ × e^(−t/k)',
          icon: Activity,
          color: BRAND.jade,
          desc: 'Log-linear recession plot: ln Q vs t should be linear for a simple linear reservoir; slope = −1/k. Log-log recession: −dQ/dt vs Q shows power-law exponents b = 1 (linear), b = 2 (non-linear upper zone), b = 3 (storage-limited deep zone). k interpretation: fractured rock aquifers k = 1–10 days; alluvial aquifers k = 30–200 days; deep confined aquifers k > 365 days. Catchment recession constant predicts low-flow statistics and drought vulnerability.',
          examples: 'Rhine at Lobith: k ≈ 45 days (deep alluvial storage) · Chalk streams (UK): k ≈ 80–150 days (high-porosity chalk aquifer) · Scottish peat catchments: k ≈ 3–8 days (shallow, limited storage) · California Sierra Nevada: k bimodal — 20-day snowmelt recession + 150-day bedrock groundwater recession',
        },
        {
          name: 'Digital Filter (Lyne-Hollick α = 0.925)',
          icon: Droplets,
          color: BRAND.gold,
          desc: 'Recursive digital filter separates high-frequency stormflow from low-frequency baseflow. Forward-backward pass removes phase distortion. Parameter α ≈ 0.925 standard; higher α → more high-frequency content assigned to stormflow; lower α → broader baseflow peak. Automated; no subjective judgment. Applied in BFLOW and WHAT software. BFI from digital filter correlates r > 0.9 with hydrogeological indices across 221 UK catchments (Eckhardt 2005 comparison).',
          examples: 'Iowa streams: automated BFI 0.25–0.45 (dominated by till soils, limited groundwater) · Texas Hill Country: BFI 0.70–0.85 (Edwards Aquifer springs maintain high baseflow) · Oregon Coast Range: BFI 0.45–0.65 (shallow volcanic aquifers, good baseflow) · Australian arid zone: BFI 0.05–0.15 (ephemeral systems, negligible baseflow)',
        },
        {
          name: 'Baseflow Index (BFI) as Catchment Signature',
          icon: Globe,
          color: BRAND.amethyst,
          desc: 'BFI = annual baseflow volume / total annual streamflow volume. Dimensionless (0–1). Highly reproducible between years for a given catchment. Controlled by: geology (permeable bedrock → high BFI), soil depth, drainage density, catchment size. Predicts low-flow statistics (Q95, Q10) useful for water resource planning. Climate change reduces BFI in semi-arid catchments (less recharge) but may increase it in cold regions (permafrost thaw releases stored water).',
          examples: 'UK BFI map: chalk downs 0.90–0.97; London Clay 0.20–0.35; Dartmoor granite 0.45–0.60 · New Zealand greywacke: BFI 0.55–0.70 · Australian granite: BFI 0.25–0.40 · Scandinavian till: BFI 0.60–0.80 · Global analysis: BFI decreases from 0.58 (humid) to 0.14 (arid) across the Budyko aridity gradient',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Unit Hydrograph theory, GIUH, and synthetic methods',
      body: `**From observation to prediction.** The unit hydrograph converts the problem of flood prediction from curve-fitting to system identification. Once a catchment's UH is derived from one or more observed storm events, it can be applied to predict the runoff hydrograph from any future storm — at least under the linear, time-invariant assumptions. Deriving the UH from observations requires: (1) selecting storms with simple, approximately uniform rainfall; (2) separating baseflow to isolate direct runoff; (3) computing the rainfall excess hyetograph (total rainfall minus losses); and (4) deconvolving the direct runoff hydrograph by the rainfall excess to obtain the UH.

**Convolution** is the mathematical operation linking rainfall excess, the UH, and direct runoff. For a discrete storm with excess rainfall in n time steps P₁, P₂, ..., Pn and a UH with ordinates U₁, U₂, ..., Um, the direct runoff in time step t is: Q_t = Σ Pᵢ × U_{t−i+1}. Matrix inversion of observed Q and P recovers U. The UH is then standardised: the area under the UH (in mm × time units) equals exactly 1 mm (0.04 in) × catchment area — ensuring conservation of volume.

**The Instantaneous Unit Hydrograph (IUH)** is the theoretical limit of the UH as the rainfall duration approaches zero: it describes the complete impulse response function of the catchment. Real UHs for finite rainfall durations can be derived from the IUH by integration. The **S-curve** (S-hydrograph) is the response to a continuous series of unit rainfall pulses; the UH for any duration T is obtained as the difference between two S-curves offset by T time units.

**GIUH (Rodriguez-Iturbe and Valdes 1979)** linked the UH directly to Horton's laws of drainage composition. The width function W(x) — the distribution of flow distances from all points in the catchment to the outlet — can be derived from stream order ratios and provides the shape of the IUH. Peak discharge of the GIUH: q_p = 1.31 (RA/RB) × (v/L), where v is mean hillslope flow velocity, L is mean stream length, RA is area ratio, and RB is bifurcation ratio. The time to peak: t_p = 0.44 (L/v) × (RB/RA)^0.55. These relationships showed that basin morphology encodes hydrological response — and explained why Hack's law (stream length ∝ area^0.6) and bifurcation ratios converge to similar values across different climates and geologies.

**SCS Curve Number method.** Developed by the Soil Conservation Service in the 1950s–60s, the CN method estimates direct runoff depth Q from total storm rainfall P: Q = (P − Ia)² / (P − Ia + S), where S = maximum potential retention = (25400/CN) − 254 (mm), and Ia = initial abstraction = 0.2S (the portion of rainfall intercepted, stored, and infiltrated before runoff begins). Curve numbers range from 30 (forested sandy A-group soils, dry conditions) to 98 (paved urban surfaces). The NRCS publishes CN tables by soil hydrologic group (A: high infiltration, sandy; B: moderate; C: slow; D: very slow, clays, compacted) and land use. Antecedent Moisture Condition (AMC) I (dry), II (average), and III (wet) shift the CN up or down from the standard tabulated values, profoundly affecting computed runoff. The 2019 Midwest flooding: prolonged spring snowmelt and above-average precipitation had soaked soils to AMC III across much of the Missouri and Mississippi basin; CN values reached 90–95 for agricultural land (standard CN ≈ 75–80), converting 85–90% of storm rainfall directly to runoff. Record flooding on the Missouri River in March 2019 was the direct result — infrastructure losses exceeded $10 billion.`,
      cards: [
        {
          name: 'Unit Hydrograph Derivation by Deconvolution',
          icon: Activity,
          color: BRAND.accent,
          desc: 'Select event: uniform rainfall, isolated storm, simple hyetograph. Separate baseflow → isolate direct runoff Q_t. Compute rainfall excess P_i (total rainfall minus losses via φ-index or CN). Deconvolve: Q = P * U (matrix system). Solve for UH ordinates U by least-squares matrix inversion. Standardise: Σ U × Δt × A = direct runoff volume. Average multiple events for representative UH. Apply to design storms for flood estimation.',
          examples: 'Hubbard Brook 14.4 km² (5.6 sq mi): UH peak ≈ 0.8 m³/s/mm; time-to-peak ≈ 3 hrs · Wye at Builth Wells (904 km² (349 sq mi)): UH tp ≈ 12 hrs; qp ≈ 0.45 m³/s/mm/km² · Urban catchment Chicago: UH tp ≈ 1.5 hrs — 3× faster than rural after urbanisation · HEC-HMS software: automated UH derivation from observed event data',
        },
        {
          name: 'GIUH: Basin Morphology Predicts Flood Response',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Horton ratios: RB (bifurcation) ≈ 3–5; RL (length) ≈ 1.5–3.5; RA (area) ≈ 3–6. GIUH peak: qp = 1.31(RA/RB)(v/L). GIUH time-to-peak: tp = 0.44(L/v)(RB/RA)^0.55. Requires only DEM-derived morphometry + estimated flow velocity. No rainfall-runoff data needed. Validated globally across humid, semi-arid, and tropical basins. Used for PMP (probable maximum precipitation) flood estimation at ungauged dams and bridges.',
          examples: 'Amazon tributaries: GIUH predicts tp within 15% of observed without calibration · Indian peninsular rivers: GIUH applied to 50+ ungauged basins for dam safety · Rodriguez-Iturbe & Valdes (1979): validated on 10 US basins, r²=0.87 for qp · Australia: GIUH combined with regional regressions for ungauged peak flow estimation',
        },
        {
          name: 'SCS Curve Number: Q = (P − 0.2S)² / (P + 0.8S)',
          icon: BarChart2,
          color: BRAND.coral,
          desc: 'S = (25400/CN) − 254 mm (10.00 in). CN = 100 → impervious; CN = 30 → open sandy forest. AMC III raises CN by ~10–15 units (wet antecedent), AMC I lowers by ~10–15 (dry). Soil hydrologic groups: A (sand, gravel, >7.6 mm/hr Ks); B (loam, 3.8–7.6 mm/hr); C (clay loam, 1.3–3.8 mm/hr); D (clay, <1.3 mm/hr). NRCS TR-55 urban hydrology: CN tables for various urban land uses by impervious %. HEC-HMS implements CN loss method.',
          examples: 'Residential (1/4-acre lots, B soils): CN = 75, AMC II → Q = 36 mm (1.42 in) from 100 mm (3.94 in) storm · Corn on B soils, good cover: CN = 72 → Q = 31 mm (1.22 in) · Row crops, straight rows, D soils: CN = 90 → Q = 64 mm (2.52 in) · 2019 Midwest floods: AMC III + CN 93 → 90% runoff ratio on agricultural land',
        },
        {
          name: '2019 Midwest Flooding: CN Theory in Practice',
          icon: Droplets,
          color: BRAND.gold,
          desc: 'March 2019: "bomb cyclone" deposited 25–75 mm (2.95 in) rain on already-saturated, frozen soil across 770,000 km² (297,297 sq mi) of upper Midwest. Antecedent moisture: AMC III across Missouri, Iowa, Nebraska. Effective CN ≈ 92–95 on agricultural land (vs standard AMC II CN = 72–78). Snowmelt contribution added another 25–50 mm (1.97 in) equivalent. Direct runoff ≈ 55–75 mm (2.95 in) from single storm. Missouri River: peak at Omaha = 13,500 m³/s (record); Gavins Point Dam spillway at 95% capacity. Infrastructure losses exceeded $10.8 billion (USACE estimate).',
          examples: 'Computed vs observed: HEC-HMS CN model with AMC III reproduced 85% of peak discharge · Plattsmouth gauge: record crest 9.2 m (30 ft) vs previous record 8.8 m (1952 flood) · Hamburg, Iowa: levee failure inundated 60,000 ha of farmland · Nebraska: 65 of 93 counties declared federal disaster areas · Offutt Air Force Base: 5,000 acres flooded; $800 million damage',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From rainfall to flood peak: the unit hydrograph convolution cascade',
      body: `Trace the transformation of a multi-period storm rainfall excess through the unit hydrograph convolution process to produce a predicted direct runoff hydrograph. Each node represents a computational stage; each edge represents the mathematical operation linking stages. Understanding the flow of information through this cascade explains both how the UH is derived from observations (by deconvolution — working backward through the diagram) and how it is applied to design storms (by convolution — working forward).`,
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Unit hydrograph analysis cascade from storm rainfall through excess computation, convolution, and baseflow addition to total predicted discharge',
        nodes: [
          {
            id: 'gross-rainfall',
            label: 'Gross Rainfall (Hyetograph)',
            description: 'The total rainfall hyetograph — rainfall depth per unit time (mm/hr or mm/time step) over the catchment. Measured by rain gauges, radar, or satellite. For UH analysis, rainfall should be approximately uniform over the catchment (small catchments or spatially coherent frontal events). The hyetograph is the raw input; it must be corrected for losses (infiltration, depression storage, interception) to obtain the rainfall excess that generates direct runoff.',
            color: BRAND.accent,
          },
          {
            id: 'losses',
            label: 'Abstraction of Losses',
            description: 'Losses are removed from gross rainfall to obtain rainfall excess. Three main approaches: (1) φ-index method — subtract a constant loss rate (φ, mm/hr) that makes the computed direct runoff volume equal to the observed; simple but physically arbitrary. (2) SCS CN method — loss rate varies with cumulative infiltration: Q = (P − Ia)² / (P − Ia + S). (3) Green-Ampt or Philip infiltration models — physically based, requires soil hydraulic parameter estimates. The loss function significantly affects UH shape; errors in loss estimation propagate directly to errors in derived UH ordinates.',
            color: BRAND.jade,
          },
          {
            id: 'rainfall-excess',
            label: 'Rainfall Excess (Effective Rainfall)',
            description: 'The residual rainfall after abstracting all losses — the portion that generates direct runoff. Rainfall excess depth (mm) equals direct runoff depth (mm) by definition, ensuring volume conservation. For a multi-period storm, the rainfall excess hyetograph P₁, P₂, ..., Pn drives the convolution with the unit hydrograph. The shape of the excess hyetograph — front-loaded vs back-loaded, single-peak vs complex — determines how the UH responses combine and whether the flood peak is dominated by a single burst or is a composite of multiple pulses.',
            color: BRAND.gold,
          },
          {
            id: 'unit-hydrograph',
            label: 'Unit Hydrograph (1 mm (0.04 in), Unit Duration)',
            description: `The catchment\'s impulse response function for 1 mm (0.04 in) of rainfall excess in one unit time step. Characterised by: (1) time to peak (tp) — controlled by catchment size, drainage density, and channel slope; (2) peak discharge per unit area (qp, m³/s/mm/km²) — indicator of flashiness; (3) recession limb shape — related to catchment storage and aquifer drainage. The UH is derived by deconvolution from observed storms or estimated synthetically using methods such as GIUH (from morphometry), SCS dimensionless UH, or Snyder\'s empirical equations.`,
            color: BRAND.amethyst,
          },
          {
            id: 'convolution',
            label: 'Discrete Convolution',
            description: `Direct runoff hydrograph ordinate at time t: Q_t = Σᵢ Pᵢ × U_{t−i+1}, summed over all rainfall excess time steps i. Each period\'s excess rainfall Pᵢ generates a scaled, time-shifted copy of the unit hydrograph; the direct runoff hydrograph is the sum of all these offset responses. This is the principle of superposition — only valid under linearity assumption. Non-linear catchments (threshold effects, variable contributing area) require more complex approaches (e.g., Clark\'s method, kinematic wave models) that do not rely on strict UH linearity.`,
            color: BRAND.coral,
          },
          {
            id: 'direct-runoff-hyd',
            label: 'Direct Runoff Hydrograph',
            description: 'The predicted stormflow hydrograph, representing only the quick-response component. Its peak and timing are controlled by the convolution of the rainfall excess timing with the UH. Rising limb dominated by the largest rainfall excess pulse(s) and the UH rising limb shape. Recession limb dominated by the UH recession (for single-burst events) or by the trailing rainfall excess (for prolonged storms). Direct runoff hydrograph volume = excess rainfall depth × catchment area (volume conservation check).',
            color: BRAND.accentHot,
          },
          {
            id: 'baseflow-add',
            label: 'Baseflow Addition',
            description: 'The separately estimated (or measured pre-storm) baseflow component is added to the direct runoff hydrograph to produce the total predicted discharge hydrograph. For design flood estimation, baseflow is typically taken as pre-storm discharge (conservative: adds to peak) or estimated from antecedent conditions using a recession model. For real-time flood forecasting, the baseflow component is tracked continuously using a soil moisture accounting model (e.g., the PDM — Probability Distributed Model) that routes slow percolation to groundwater and applies the recession constant k to compute baseflow response.',
            color: BRAND.ruby,
          },
          {
            id: 'total-discharge',
            label: 'Total Discharge Hydrograph',
            description: 'The complete predicted streamflow hydrograph at the gauging station — direct runoff plus baseflow. The peak discharge, time to peak, flood duration, and recession all emerge from the combined convolution and baseflow model. For design applications (dam spillway sizing, bridge design, floodplain mapping), this hydrograph is routed downstream through reservoirs and channel reaches using routing methods (Muskingum, HEC-RAS). For operational flood forecasting, it is compared with real-time gauge observations and updated using data assimilation.',
            color: BRAND.accent,
          },
        ],
        edges: [
          { from: 'gross-rainfall',      to: 'losses',             label: 'subtract infiltration, interception, and depression storage losses (φ-index, CN, or Green-Ampt)' },
          { from: 'losses',              to: 'rainfall-excess',    label: 'residual after losses = effective rainfall that generates direct runoff (volume-conserved)' },
          { from: 'rainfall-excess',     to: 'convolution',        label: 'multi-period excess hyetograph P₁, P₂, ..., Pn drives convolution with UH' },
          { from: 'unit-hydrograph',     to: 'convolution',        label: 'UH ordinates U₁, U₂, ..., Um define catchment impulse response (1 mm (0.04 in), unit duration)' },
          { from: 'convolution',         to: 'direct-runoff-hyd',  label: 'Q_t = Σ Pᵢ × U_{t−i+1} — superposition of scaled, shifted UH copies for each rain pulse' },
          { from: 'direct-runoff-hyd',   to: 'baseflow-add',       label: 'add separately estimated baseflow component (pre-storm recession or groundwater model)' },
          { from: 'baseflow-add',        to: 'total-discharge',    label: 'total Q = direct runoff + baseflow; complete predicted hydrograph at gauging station' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What assumptions underlie the unit hydrograph method, and what are their practical limitations?',
          a: [
            'The unit hydrograph assumes that rainfall is distributed uniformly in time but not in space; non-uniform spatial rainfall is accounted for by applying different UHs to different sub-catchments and routing their outputs to the main channel using Muskingum or kinematic wave methods',
            'The unit hydrograph assumes linearity (runoff is proportional to rainfall excess) and time invariance (the UH shape does not change between events); these assumptions fail when runoff mechanisms switch non-linearly with rainfall intensity or antecedent moisture, causing UHs derived from small events to underestimate peaks from extreme storms',
            'The unit hydrograph assumes that baseflow is zero during storm events and that all streamflow above pre-storm discharge is direct runoff; this is a poor assumption for groundwater-rich catchments where baseflow may increase significantly during storms, causing overestimation of direct runoff and the derived UH',
            'The unit hydrograph assumes that the catchment behaves as a series of linear reservoirs in parallel, each with a different recession constant; this is physically accurate for most catchments but computationally intensive, limiting its application to catchments with fewer than three distinct hydrological units',
          ],
          correct: 1,
          explain: `Option A is partially correct in that spatial non-uniformity of rainfall is a real limitation, but the stated assumption (uniform in time, non-uniform in space) misstates the UH\'s requirements — the UH actually assumes spatial uniformity. The solution described (sub-catchment UHs + routing) is a real engineering workaround, but it does not describe the fundamental UH assumptions. Option C is incorrect: the UH does not assume zero baseflow; rather, baseflow is separated from total discharge before UH derivation (and added back after application). The UH analysis operates specifically on the direct runoff component after baseflow removal. Baseflow increase during storms is accounted for in the separation step, not the UH itself. Option D is incorrect: the UH does not model the catchment as a series of parallel reservoirs. That describes the TOPMODEL or Clark unit hydrograph approach (translating the width function through a linear reservoir), which is a specific implementation, not the general UH assumption. The correct answer is B: Sherman\'s (1932) unit hydrograph rests on two key principles: (1) Linearity — the direct runoff hydrograph from any excess rainfall depth is simply that depth multiplied by the UH ordinates. A storm producing twice the excess rainfall produces twice the direct runoff at every time step. (2) Time invariance — the UH does not change between storms, seasons, or years. In practice, linearity fails because real catchments show non-linear threshold behaviour: at low antecedent wetness, much of the hillslope does not participate in direct runoff generation; at high antecedent wetness, the variable contributing area expands and runoff generation efficiency increases non-linearly. This causes UHs derived from moderate events to systematically underestimate peak discharge for extreme floods — a dangerous bias in design applications. Time invariance fails because seasonal changes in vegetation (leaf-on vs leaf-off interception), soil frost, and antecedent moisture all shift the UH shape. Despite these limitations, the UH remains widely used because it is tractable, requires relatively little data, and provides useful flood estimates for many engineering purposes.`,
        },
        {
          q: 'What is the SCS Curve Number and how does antecedent moisture condition affect it?',
          a: [
            'The SCS Curve Number is a soil texture classification (0–100) based on particle size distribution; sandy soils have low CN values while clay soils have high CN values, and antecedent moisture condition adjusts CN by multiplying by a seasonal correction factor based on the month of the year',
            'The SCS Curve Number is a dimensionless parameter (0–100) representing the runoff-generating potential of a catchment as a function of soil type and land use; CN = 100 is fully impervious; CN = 0 generates no runoff; antecedent moisture condition (AMC I–III) shifts CN by ±10–15 units — AMC III (wet soils) raises CN, dramatically increasing computed runoff',
            'The SCS Curve Number is a physically based infiltration rate (mm/hr) derived from soil texture; it is multiplied by storm duration to obtain total infiltration loss, and antecedent moisture condition reduces the CN proportionally with prior 5-day rainfall — drier soils reduce CN linearly to a minimum of CN/2',
            'The SCS Curve Number has a fixed value of 74 for all natural catchments and varies only with land use modification — urbanisation raises it toward 98 while reforestation lowers it toward 55; antecedent moisture condition is not considered in standard CN applications because CN already integrates long-term average soil moisture',
          ],
          correct: 1,
          explain: 'Option A confuses CN with a soil texture classification. CN is not a soil texture index — it is a combined index of soil type AND land use. A sandy soil under row crops has a very different CN from the same sandy soil under forest. The antecedent moisture adjustment is not a seasonal multiplication factor but rather a tabulated transformation based on 5-day antecedent rainfall. Option C incorrectly describes CN as having units of mm/hr (an infiltration rate). CN is dimensionless, representing runoff potential, not infiltration rate. The relationship to S (potential maximum retention) is non-linear: S = (25400/CN) − 254 mm (10.00 in); the AMC adjustment is a tabulated CN conversion, not a simple proportional reduction. Option D is incorrect: CN varies substantially with land use AND soil type, not just with human land modification. Natural forest on A-group sandy soils might have CN ≈ 36; natural grassland on D-group clay soils might have CN ≈ 80. Antecedent moisture condition is absolutely considered in standard CN applications and is one of the most consequential parameters in flood estimation. The correct answer is B: the SCS (now NRCS) Curve Number is a dimensionless runoff coefficient developed in the 1950s through empirical analysis of many small agricultural watersheds. Direct runoff Q = (P − Ia)² / (P − Ia + S), where S = (25400/CN) − 254 mm (10.00 in) is the maximum potential retention and Ia = 0.2S is the initial abstraction. CN values are tabulated by soil hydrologic group (A, B, C, D — indexed by saturated hydraulic conductivity) and land use (row crops, pasture, residential, etc.). Antecedent Moisture Condition reflects the 5-day antecedent precipitation: AMC I (<35 mm (1.38 in) for dormant season or <13 mm (0.51 in) growing season) is dry, AMC II is average, AMC III (>53 mm (2.09 in) dormant or >28 mm (1.10 in) growing season) is wet. The AMC III adjustment raises CN by approximately 10–15 units: for example, a standard AMC II CN of 75 becomes approximately 89 under AMC III conditions. This shift converts computed runoff from 36 mm (1.42 in) to 59 mm (2.32 in) for a 100 mm (3.94 in) storm — a 64% increase — illustrating how profoundly antecedent moisture controls flood magnitude.',
        },
        {
          q: 'How does the geomorphological unit hydrograph (GIUH) link basin morphometry to flood response?',
          a: [
            'The GIUH uses digital elevation model analysis to directly simulate the travel time of each water molecule from its point of entry to the catchment outlet, summing arrival times to produce the unit hydrograph without any assumptions about Horton\'s stream order laws or drainage composition',
            'The GIUH uses Horton\'s stream order ratios (bifurcation ratio RB, length ratio RL, area ratio RA) to derive the distribution of flow path lengths within the basin (the width function), which — when convolved with an assumed flow velocity — produces the IUH shape including peak discharge and time to peak without requiring any observed rainfall-runoff calibration data',
            'The GIUH is identical to the SCS dimensionless UH method: both express the UH as a function of time-to-peak only, and both are calibrated using the same set of Horton stream order ratios measured from topographic maps; the GIUH is simply the Spanish-language name for the SCS method, reflecting its development in Latin American hydrology',
            'The GIUH requires calibration against at least five years of continuous streamflow data to estimate its free parameters (bifurcation ratio and mean velocity), and it performs no better than simple regression equations for predicting peak discharge at ungauged sites; its main advantage is theoretical elegance rather than practical predictive skill',
          ],
          correct: 1,
          explain: `Option A describes a concept closer to travel time distribution (TTD) or geomorphic instantaneous unit hydrograph by path tracing — which is related but does not accurately describe what Rodriguez-Iturbe and Valdes (1979) did. The GIUH is not a molecule-by-molecule simulation but a probabilistic framework based on the statistical distribution of flow path lengths via stream order categories. Option C is entirely incorrect: the GIUH and SCS dimensionless UH are different methods from different theoretical traditions. The GIUH is a theoretical framework linking morphometry to hydrograph shape; the SCS dimensionless UH is an empirically derived average shape. They are not the same method, and "GIUH" is not a Spanish name for SCS — Rodriguez-Iturbe and Valdes were Venezuelan researchers publishing in Water Resources Research in English. Option D is incorrect: one of the GIUH\'s primary advantages is that it does NOT require calibration against observed streamflow — the Horton ratios are measurable from topographic maps or DEMs, and mean flow velocity is either estimated from regional data or set to a typical value. This makes the GIUH particularly valuable for ungauged basins. The correct answer is B: Rodriguez-Iturbe and Valdes (1979) showed that the geomorphology of a drainage basin — specifically its hierarchical stream network structure as characterised by Horton\'s order ratios — encodes the distribution of flow distances from any point in the catchment to the outlet. A random water drop entering the catchment at any point travels through streams of various orders before reaching the outlet; the probability distribution of this travel time, combined with an assumed mean flow velocity v, produces the IUH. The key morphological inputs are: RB (bifurcation ratio = number of streams of order ω divided by number of order ω+1, typically 3–5); RL (length ratio = mean stream length of order ω+1 divided by order ω, typically 1.5–3.5); RA (area ratio = mean area of order ω+1 basin divided by order ω, typically 3–6). The GIUH peak: qp = 1.31(RA/RB)(v/L) and time to peak: tp = 0.44(L/v)(RB/RA)^0.55, where L is mean first-order stream length. This framework makes hydrograph prediction possible at ungauged basins by morphometric analysis alone — a transformative capability for flood estimation at undammed rivers, bridges, and sites without measurement history.`,
        },
        {
          q: 'How is baseflow separated from total streamflow, and what does the recession constant k represent physically?',
          a: [
            'Baseflow is separated by measuring the electrical conductivity of stream water: high conductivity indicates groundwater (high dissolved solids from long soil contact), while low conductivity indicates surface runoff; the recession constant k is the rate at which conductivity returns to background levels following a storm',
            'Baseflow is separated graphically or by digital filtering, isolating the slowly varying component of the total discharge hydrograph; the recession constant k (days) in Q(t) = Q₀ × e^(−t/k) represents the e-folding decay time of groundwater drainage, which is controlled by aquifer transmissivity, specific yield, and drainage length — long k means well-buffered groundwater storage, short k means flashy drainage',
            'Baseflow is separated by computing the 7-day moving average of discharge: values above the moving average are direct runoff, values below are baseflow; the recession constant k equals the time in days for discharge to drop to 50% of its peak value (half-life), which is useful for comparing aquifer properties between catchments',
            'Baseflow separation requires solving the Richards equation for vadose zone moisture dynamics at multiple soil profile locations across the catchment; the recession constant k is a calibrated parameter of the soil-water characteristic curve, equal to the inverse of the unsaturated hydraulic conductivity at field capacity',
          ],
          correct: 1,
          explain: 'Option A describes hydrochemical tracers (electrical conductivity, specific conductance), which are genuinely used to supplement hydrograph separation, but this is not the primary meaning of baseflow separation or the recession constant. EC-based separation is one method used in conjunction with isotopic tracers, not the standard definition. Option C is partially reasonable (moving averages are related to digital filtering), but the definition of k as the "half-life time to 50% of peak" is incorrect. The recession constant k in the exponential model Q(t) = Q₀ × e^(−t/k) is the e-folding time (time for Q to reach 1/e ≈ 37% of Q₀) — not the half-life (which would be k × ln(2) ≈ 0.693k). Using "half-life" confuses k with a related but different parameter. Option D describes a physically based vadose zone modelling approach that is not what hydrograph separation means in standard hydrological practice. The Richards equation governs unsaturated flow dynamics but is far too data-intensive for routine baseflow separation. The recession constant is not a soil-water characteristic parameter. The correct answer is B: baseflow is isolated using graphical methods (constant slope, concave, or master recession curve methods) or digital filtering algorithms (Lyne-Hollick filter, Eckhardt recursive filter). The exponential recession model Q(t) = Q₀ × e^(−t/k) applies during periods when direct runoff has ceased and the stream is draining the groundwater reservoir. The recession constant k (in days) is the e-folding time — after k days, discharge has dropped to 1/e (≈ 37%) of its initial value Q₀. Physically, k relates to aquifer hydraulic properties through the Boussinesq linearised groundwater model: k ≈ L² S_y / (π² T), where L is aquifer drainage length, S_y is specific yield, and T is transmissivity. Long k (weeks to months) indicates deep, permeable aquifers (chalk, sandstone) with large storage and slow drainage; short k (days) indicates thin, poorly connected aquifers or impermeable bedrock catchments that drain quickly. The baseflow index (BFI = annual baseflow volume / total annual flow) integrates the long-run balance between groundwater storage and direct runoff generation, ranging from near 0 (ephemeral streams, arid regions) to near 1 (chalk streams, spring-fed rivers).',
        },
      ],
    },
  ],
}

export default hydrographAnalysis
