import { Activity, Layers, Globe, Droplets } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const streamflowRouting: Lesson = {
  id: 'hyd-201-1-1-3',
  title: 'Streamflow Routing and Open Channel Hydraulics',
  track: 'geo',
  trackName: 'Advanced Hydrology',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: `Manning\'s equation, rating curves, Saint-Venant equations and their approximations, Muskingum channel routing, reservoir flood routing, and 2D hydraulic modelling for floodplain inundation mapping — illustrated by the 2017 Oroville Dam spillway crisis.`,
  sources: [
    { org: 'USACE',  title: 'HEC-RAS Hydraulic Reference Manual',                       url: 'https://www.hec.usace.army.mil/software/hec-ras/documentation.aspx' },
    { org: 'USACE',  title: 'HEC-HMS Technical Reference Manual',                       url: 'https://www.hec.usace.army.mil/confluence/hmsdocs' },
    { org: 'FEMA',   title: 'National Flood Insurance Program — Flood Map Service',      url: 'https://msc.fema.gov' },
    { org: 'AGU',    title: 'Water Resources Research — Open Channel Hydraulics',        url: 'https://agupubs.onlinelibrary.wiley.com/journal/19447973' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The river as a hydraulic machine',
      body: `Water moving downstream through a river channel is simultaneously a physical fluid obeying Newton's laws and a geomorphic agent reshaping its own boundaries. Open channel hydraulics — the mechanics of free-surface flow — describes how water depth, velocity, and discharge relate to channel geometry, slope, and roughness. These relationships are the foundation for predicting where floods will go, how high they will rise, and how fast they will arrive.

**Manning's equation** is the workhorse of open channel hydraulics, used daily in engineering offices and hydrology laboratories around the world. In uniform flow — where channel geometry and roughness do not change along the reach, and water surface slope equals bed slope — the mean cross-sectional velocity is: V = (1/n) R^(2/3) S^(1/2), where n is Manning's roughness coefficient (dimensionless), R is the hydraulic radius (cross-sectional area divided by wetted perimeter, in metres), and S is the energy slope (dimensionless, equal to bed slope for uniform flow). Manning's n ranges from about 0.011 for smooth concrete conduits to 0.025–0.035 for natural sand-bed rivers, 0.04–0.07 for boulder-strewn mountain streams, and 0.08–0.15 for densely vegetated floodplains. Discharge Q = V × A, where A is the cross-sectional area. Manning's equation encodes the essential physics: steeper channels carry water faster (higher S); larger channels (higher R) carry water faster; rougher channels (higher n) slow the flow.

**Rating curves** convert between stage (water level above a datum, measured in metres) and discharge (m³/s). They are established at streamflow gauging stations by performing current-meter measurements at various flow levels and fitting a power-law relationship: Q = a(h − h₀)^b, where h is stage, h₀ is zero-flow stage, and a and b are empirical constants. Once established, continuous electronic stage records can be translated to discharge records without constant field work. A critical limitation is **extrapolation above measured flows**: rating curves are typically measured up to bankfull or moderate flood conditions, but design floods may be far outside the measurement range. Extrapolation using Manning's equation with surveyed cross-sections provides the best available estimate, but errors of 20–50% are common for very high flows. Hysteresis in the rating curve — where the same stage corresponds to higher discharge on the rising limb than the falling limb — reflects the non-uniform flow conditions during a flood wave (the backwater effects and slope variations analysed by the Saint-Venant equations).

**The Saint-Venant equations** provide the complete description of unsteady, gradually varied flow in open channels. They comprise two partial differential equations derived from conservation of mass (continuity) and conservation of linear momentum. The continuity equation: ∂A/∂t + ∂Q/∂x = q_L, where A is cross-sectional area, Q is discharge, x is distance downstream, and q_L is lateral inflow per unit length. The momentum equation: ∂Q/∂t + ∂(Q²/A)/∂x + gA(∂h/∂x) + gA(S_f − S₀) = 0, where g is gravitational acceleration, h is water surface elevation, S_f is friction slope (computed using Manning's or Chezy's resistance law), and S₀ is bed slope. The full dynamic wave equations are solved numerically (implicit finite difference schemes: Preissmann, Abbott-Ionescu) in software such as HEC-RAS (1D and 2D), MIKE 11, and LISFLOOD-FP.

**Simplifications of the Saint-Venant equations** are used when full dynamic wave solutions are not needed or not computationally feasible. The **kinematic wave** approximation drops the inertia and pressure terms from the momentum equation, retaining only the friction-slope term: S_f ≈ S₀. This is valid when channel slopes are steep enough that friction dominates inertia — typically S₀ > 0.001. The kinematic wave propagates downstream without distortion or attenuation, which makes it simple but limits its applicability in flat reaches, backwater-affected areas, or near confluences. The **diffusion wave** approximation retains the pressure gradient term (∂h/∂x) in addition to friction, allowing for flood wave attenuation. It performs well for most natural rivers except those with strong inertial effects (very rapid flow changes, dam breaks, tidal backwater). The full **dynamic wave** is needed only for rapidly varying flows such as dam-break scenarios, tidal estuaries, and bore propagation.

**Muskingum channel routing** transforms an upstream hydrograph into a downstream hydrograph without solving the full Saint-Venant equations. The method assumes that the volume of water in a river reach (storage S) can be expressed as a linear combination of inflow I and outflow O: S = K[XI + (1−X)O], where K is the travel time of the flood wave through the reach (hours) and X is a weighting factor (0–0.5) balancing inflow vs. outflow in determining storage. When X = 0, the storage depends only on outflow (simple linear reservoir); when X = 0.5, storage equals K × mean flow (pure translation). The routing equations are explicit: O_{j+1} = C₀ I_{j+1} + C₁ Iⱼ + C₂ Oⱼ, where C₀, C₁, C₂ are functions of K, X, and time step Δt. Muskingum parameters are typically calibrated from paired upstream-downstream hydrographs observed during flood events.

The 2017 **Oroville Dam spillway failure** in California provided a dramatic real-world demonstration of hydraulic engineering under crisis conditions. In February 2017, sustained inflows following record precipitation overwhelmed the main concrete spillway, eroding a 15-m deep cavern in the hillside below the chute. HEC-RAS 2D hydraulic models were operated in real time to evaluate downstream flood scenarios and guide the decision to evacuate 188,000 residents from the Feather River valley below the dam — the largest peacetime evacuation in California history. Though the dam itself did not fail, the episode exposed the consequences of deferred spillway maintenance and the value of rapid hydraulic modelling in emergency decision-making.`,
      keyTerms: [
        {
          term: 'Manning\'s equation',
          def: `V = (1/n) R^(2/3) S^(1/2), relating mean channel velocity V (m/s) to Manning\'s roughness coefficient n (dimensionless), hydraulic radius R = A/P (cross-sectional area divided by wetted perimeter, m), and energy slope S (dimensionless). Combined with Q = V × A, it gives discharge. n ranges from 0.011 (smooth concrete) to 0.15 (floodplain forest). Discharge scales as Q ∝ R^(5/3) S^(1/2) / n. Widely used for rating curve extrapolation and flood inundation mapping.`,
        },
        {
          term: 'Saint-Venant equations',
          def: 'The system of two coupled partial differential equations governing unsteady, gradually varied free-surface flow: (1) continuity: ∂A/∂t + ∂Q/∂x = q_L; (2) momentum: ∂Q/∂t + ∂(Q²/A)/∂x + gA(∂h/∂x) + gA(S_f − S₀) = 0. Full dynamic wave solution captures flood wave acceleration, attenuation, and backwater effects. Simplifications: kinematic wave (S_f = S₀), diffusion wave (adds ∂h/∂x pressure term). Solved numerically in HEC-RAS, MIKE 11, LISFLOOD-FP.',
        },
        {
          term: 'Muskingum routing',
          def: 'A linear storage-routing method that transforms an upstream inflow hydrograph to a downstream outflow hydrograph without solving the Saint-Venant equations. Storage S = K[XI + (1−X)O], where K is wave travel time (hours) and X (0–0.5) weights inflow vs outflow contributions. Routing equation: O_{j+1} = C₀I_{j+1} + C₁Iⱼ + C₂Oⱼ. Parameters K and X calibrated from observed hydrograph pairs. Simple, efficient, and widely used in HEC-HMS for channel routing in large river systems.',
        },
        {
          term: 'rating curve',
          def: 'The empirical relationship between stream stage h (water level above a datum, m) and discharge Q (m³/s) at a gauging station: Q = a(h − h₀)^b. Established by current-meter velocity-area measurements across the range of observed flows. Enables continuous discharge records from cheap stage measurements. Extrapolation above measured range introduces significant uncertainty (20–50% errors common). Hysteresis in Q–h during floods reflects dynamic backwater effects not captured by a simple static curve.',
        },
        {
          term: 'hydraulic geometry',
          def: 'The systematic relationships between stream discharge Q and channel dimensions (width W, depth d, velocity V) at a cross-section (at-a-station) or along a river network from headwaters to mouth (downstream). At-a-station: W ∝ Q^b, d ∝ Q^f, V ∝ Q^m, where b + f + m = 1 (Leopold and Maddock 1953). Downstream: all three dimensions increase with increasing discharge (mean annual flood). Reflects geomorphic adjustment of channel form to impose transport capacity consistent with sediment supply.',
        },
      ],
    },
    {
      type: 'concept',
      title: `Manning\'s equation, rating curves, and hydraulic geometry`,
      body: `**The mechanics of uniform flow.** Manning's equation is derived from Chezy's formula (V = C√(RS)) combined with the empirical observation that C ∝ R^(1/6). The resulting n = R^(1/6) / C relationship yields Manning's: V = R^(2/3) S^(1/2) / n. The equation is dimensionally non-homogeneous — the n values cited above are for SI units (metres and seconds); for US customary units, a conversion factor of 1.486 is applied. The equation assumes steady, uniform flow — a rarely achieved ideal, but a useful approximation for reaches with relatively constant geometry over several channel widths.

**Rating curve establishment and uncertainty.** Establishing a rating curve requires repeated current-meter measurements: the stream cross-section is divided into vertical segments; velocity is measured at each (typically at 0.6 of depth for a single-point measurement, or at 0.2 and 0.8 depth for a two-point average); and discharge is computed as the sum of velocity × area across all segments. Modern acoustic Doppler current profilers (ADCPs) measure velocity continuously across the cross-section using the Doppler effect, dramatically speeding up the process. High-flow measurements are the most difficult and most important: floods move fast, carry debris, and often destroy equipment. Many rating curves have fewer than five measurements above bankfull, making extrapolation to design flood levels highly uncertain.

**Hydraulic geometry** reveals the self-organising principle of river channels. Leopold and Maddock (1953) showed from analysis of hundreds of US stream gauging stations that width, depth, and velocity all follow power laws in discharge (W ∝ Q^b, d ∝ Q^f, V ∝ Q^m) with exponents summing to 1 (b + f + m = 1). Typical values at a station: b ≈ 0.26, f ≈ 0.4, m (13 ft) ≈ 0.34. Downstream hydraulic geometry (how channels widen, deepen, and accelerate from headwaters to mouth in response to increasing mean discharge) follows similar power laws but with different exponents reflecting the cumulative effects of sediment supply, bank erodibility, and valley width. The hydraulic geometry relationships encode the geomorphic equilibrium between water, sediment, and channel form — and are used to detect human impacts (channelisation, urbanisation) that shift channels away from expected dimensions.`,
      cards: [
        {
          name: 'Manning\'s Equation: V = (1/n) R^(2/3) S^(1/2)',
          icon: Activity,
          color: BRAND.accent,
          desc: 'R = A/P (hydraulic radius, m). n values: smooth concrete 0.011; clean natural channel 0.025–0.030; irregular natural channel 0.035–0.050; dense vegetation 0.060–0.100; floodplain forest 0.100–0.150. Q = V × A. Composite n for compound channel: area-weighted average. Conveyance K = (1/n) A R^(2/3); Q = K√S. Critical flow: Fr = V/√(gd) = 1; subcritical Fr < 1; supercritical Fr > 1.',
          examples: 'Steep mountain stream (n=0.04, R=0.5m (2 ft), S=0.01): V = 3.5 m/s · Lowland river (n=0.030, R=2m (7 ft), S=0.0003): V = 1.4 m/s · Urban concrete channel (n=0.013, R=1m (3 ft), S=0.005): V = 8.2 m/s · Mississippi at St Louis: Manning analysis gives Q ≈ 16,000 m³/s at flood stage',
        },
        {
          name: 'Rating Curves: Stage–Discharge Relationships',
          icon: Layers,
          color: BRAND.jade,
          desc: 'Q = a(h − h₀)^b. Established from current-meter or ADCP measurements. Log-log plot of Q vs (h−h₀) should be linear with slope b. Breaks in slope indicate overbank flow or bedform changes. Shifting control: channel scour/fill changes rating; must re-survey after large floods. Hysteresis: rising limb gives higher Q than falling limb at same stage (energy slope > bed slope during flood passage). Loop rating curves account for hysteresis in dynamic flow conditions.',
          examples: 'Amazon at Manaus: rating spans 50,000–220,000 m³/s; extrapolation uncertainty ±20% · Thames at Teddington: weir-controlled section gives stable, well-defined rating · Platte River, NE: sand-bed shifting causes seasonal rating shifts of ±30% · USGS maintains >8,000 active streamflow gauges with continuous stage-to-Q conversion',
        },
        {
          name: 'Hydraulic Geometry (Leopold & Maddock 1953)',
          icon: Globe,
          color: BRAND.gold,
          desc: 'At-a-station: W ∝ Q^0.26, d ∝ Q^0.40, V ∝ Q^0.34. Downstream (bankfull Q): W ∝ Q^0.50, d ∝ Q^0.40, V ∝ Q^0.10. Regime equations for gravel rivers (Bray 1982): W = 3.8 Q^0.5; d = 0.33 Q^0.36. Deviation from expected dimensions signals anthropogenic impact (channelisation, dams, urbanisation). Downstream fining of bedload: D50 ∝ e^(−bx) where x is downstream distance. Used for river restoration design and morphological prediction.',
          examples: 'Gravel-bed reach, bankfull Q = 50 m³/s: expected W ≈ 27m (89 ft), d ≈ 1.4m (5 ft) · Mississippi headwaters to delta: W increases from 30m (98 ft) to 1,000m (3281 ft); d from 1m (3 ft) to 12m (39 ft) · Post-dam downstream: channel narrows 30–60% below major dams (sediment starvation) · Urban stream: impervious cover increase → Q^2 increases → channel incision and widening',
        },
        {
          name: 'Froude Number and Flow Regime',
          icon: Droplets,
          color: BRAND.amethyst,
          desc: 'Fr = V / √(gd) = ratio of flow velocity to shallow-water wave speed. Fr < 1: subcritical (tranquil) — disturbances propagate upstream and downstream; typical in lowland rivers. Fr = 1: critical — standing wave; transition between regimes. Fr > 1: supercritical (shooting) — disturbances propagate only downstream; typical at waterfalls, steep mountain streams. Hydraulic jump: abrupt transition from super to subcritical, dissipating kinetic energy. Critical depth: y_c = (Q²/gW²)^(1/3) for rectangular channel.',
          examples: 'Mountain stream (V=4 m/s, d=0.5m (2 ft)): Fr = 4/√(9.81×0.5) = 1.81 (supercritical) · Lowland river (V=1.5 m/s, d=3m (10 ft)): Fr = 1.5/√(9.81×3) = 0.28 (subcritical) · Hydraulic jump on spillway: Fr1=5 → sequent depth ratio d2/d1 = 0.5(√(1+8Fr²)−1) ≈ 6.6 · Oroville Dam chute: supercritical flow Fr ≈ 3–4 caused destructive cavitation',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Saint-Venant equations, Muskingum routing, and dam-break hydraulics',
      body: `**From full dynamics to practical approximations.** The Saint-Venant equations are mathematically complete for gradually varied open channel flow, but their numerical solution requires considerable computational resources and high-quality topographic data. For many practical flood routing problems — particularly in large river networks — simpler approximations provide adequate accuracy at far lower cost.

**Kinematic wave** approximation: retains continuity exactly but simplifies momentum to S_f = S₀. Valid when: S₀ > 0.001, flood wave period >> L/c (where L is reach length and c = wave celerity), and backwater effects are absent. Kinematic wave celerity = 5V/3 (for Manning's), meaning flood waves travel at 5/3 times the mean flow velocity. No attenuation: the wave translates downstream unchanged in shape. Useful for hillslope overland flow routing and steep headwater channels but fails in flat river reaches.

**Diffusion wave** (non-inertia wave): retains the pressure gradient term ∂h/∂x from the momentum equation. Allows flood wave attenuation — wider, lower peaks as the wave propagates downstream. Valid for most natural rivers with gradual slopes. Diffusion coefficient: D = Q / (2W S₀), where W is channel width. Attenuation and dispersion increase with D. The diffusion wave is the basis for the approximation used in most large-scale continental hydrological models (e.g., the routing scheme in VIC, mHM, and LISFLOOD).

**Level-pool (modified Puls) reservoir routing** treats the reservoir or pond as a storage element with a known storage–outflow relationship (from the spillway rating curve and reservoir bathymetry). The continuity equation I − O = ΔS/Δt is rearranged into the modified Puls form: (2S_{t+1}/Δt + O_{t+1}) = (2S_t/Δt − O_t) + (I_t + I_{t+1}), which can be solved step-by-step if the storage-outflow relationship (2S/Δt + O) vs O is tabulated. This method routes flood hydrographs through reservoirs and detention ponds for design of spillway capacity and emergency action planning.

**2D hydraulic modelling** with HEC-RAS 2D and LISFLOOD-FP has transformed floodplain mapping since the 2000s. LiDAR-derived digital elevation models (0.5–2 m (7 ft) resolution, vertical accuracy 10–15 cm (5.9 in)) provide the terrain on which the 2D diffusion or dynamic wave equations are solved on structured or unstructured grids. Flow spreads naturally across floodplains, around buildings, and through bridge openings without needing to pre-specify flow paths. The 2017 Oroville Dam crisis (California) demonstrated the value of this capability: CDFW and USACE ran HEC-RAS 2D in near-real time to assess downstream inundation scenarios for the 188,000-person evacuation zone below the dam.`,
      cards: [
        {
          name: 'Muskingum Routing: K, X Parameters',
          icon: Activity,
          color: BRAND.accent,
          desc: 'S = K[XI + (1−X)O]. Routing: O_{t+Δt} = C₀I_{t+Δt} + C₁I_t + C₂O_t. C₀ = (−KX + Δt/2) / D; C₁ = (KX + Δt/2) / D; C₂ = (K − KX − Δt/2) / D; D = K(1−X) + Δt/2. C₀+C₁+C₂ = 1 (volume conservation). K = wave travel time through reach (calibrated). X = 0 → maximum attenuation (reservoir); X = 0.5 → pure translation (no attenuation). Δt < 2KX to avoid negative C coefficients (oscillation).',
          examples: 'Ohio River, reach K=24hr, X=0.20: peak attenuation ~15% per reach · Muskingum-Cunge: physically based extension; K and X computed from channel properties · HEC-HMS: Muskingum routing applied to each sub-reach · Missouri River: calibrated K=18–36 hr depending on reach geometry and flood magnitude',
        },
        {
          name: 'Level-Pool Reservoir Routing (Modified Puls)',
          icon: Layers,
          color: BRAND.jade,
          desc: 'Applies continuity I − O = dS/dt over discrete time steps. (2S_{t+Δt}/Δt + O_{t+Δt}) = (2S_t/Δt − O_t) + (I_t + I_{t+Δt}). Storage S computed from reservoir bathymetry. Outflow O from spillway rating (broad-crested weir: O = C_d L h^1.5; ogee spillway: exponent 1.5–1.67). Emergency spillways: free crest or gated. Detention pond design: size pond to limit post-development peak to pre-development peak. Attenuation increases with reservoir volume / inflow hydrograph volume ratio.',
          examples: 'Hoover Dam: 35 km³ (8.4 cu mi) storage; 100-yr inflow peak 2,300 m³/s → attenuated to 1,100 m³/s · Small detention pond (0.01 km² (0.00 sq mi)): can reduce 10-yr peak by 40% for 100 ha urban catchment · Oroville reservoir (4.4 km³ (1.1 cu mi)): incoming Feb 2017 peak ≈ 1,600 m³/s; dam held but spillway failed · Table lookup: pre-computed (2S/Δt + O) vs O curve for each routing step',
        },
        {
          name: 'Oroville Dam 2017: HEC-RAS 2D in Emergency Mode',
          icon: Globe,
          color: BRAND.coral,
          desc: 'February 2017: 155 mm (6.10 in) rainfall in 7 days (record); Lake Oroville inflows peaked at 4,600 m³/s. Main spillway concrete chute failed on Feb 7, exposing compressible fill underneath — 14 m (46 ft) deep erosion chasm formed. Emergency spillway used for first time: unlined hillside began eroding. Evacuation of 188,000 ordered Feb 12. HEC-RAS 2D simulated dam-breach and emergency spillway failure scenarios for Feather River valley using 1m (3 ft) LiDAR DEM. Inundation depth maps guided evacuation zone boundaries.',
          examples: 'Without evacuation models: downstream Oroville, Gridley, Marysville — population 188,000 at risk · Dam did NOT fail; controlled releases managed crisis · Post-crisis: $1.1 billion spillway reconstruction (2018–2019) · Independent Forensic Team report: unlined emergency spillway was permitted without adequate geotechnical analysis · USACE HEC-RAS 2D: 10m (33 ft) unstructured mesh; 9 breach scenarios simulated in <4 hours',
        },
        {
          name: 'FEMA Floodplain Mapping: 100-Year Flood',
          icon: Droplets,
          color: BRAND.gold,
          desc: '100-year flood = 1% annual exceedance probability (AEP) flood. FEMA National Flood Insurance Program (NFIP) maps Special Flood Hazard Area (SFHA) — land with 1% AEP flood. Zone A: approximate; Zone AE: detailed study with BFE (base flood elevation); Zone X: outside 500-yr floodplain. Mapping method: HEC-HMS generates design hydrograph → HEC-RAS steady-flow profiles → floodplain boundary digitised on aerial imagery. LiDAR-based remapping (Cooperating Technical Partners) improving accuracy from ±1m (3 ft) to ±15cm (5.9 in) vertical. 37 million US structures in SFHA; $1.3 trillion at risk.',
          examples: 'Houston (Harvey, 2017): 500-yr rainfall event; most FEMA Zone X flooded — maps outdated · Sacramento: detailed HEC-RAS models update every 5–10 years; channel modifications trigger remapping · FEMA Risk MAP program: $185M/yr for flood map modernisation · LiDAR DEMs reduce SFHA mapping error by 60% vs traditional surveying · Hurricane Sandy (2012): Advisory Base Flood Elevations raised 1–4 feet in NYC post-event',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Flood routing cascade: from inflow hydrograph through reach and reservoir to downstream flooding',
      body: `Follow a flood wave from its catchment-generated inflow peak through two types of routing — channel reach routing using Muskingum methods and reservoir routing using level-pool methods — to the downstream hydraulic model that maps floodplain inundation. Each node represents a storage or routing element; each edge represents a transfer process with characteristic attenuation and delay properties.`,
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Flood routing cascade from catchment runoff through Muskingum channel routing and level-pool reservoir routing to downstream 2D hydraulic inundation mapping',
        nodes: [
          {
            id: 'inflow-hydrograph',
            label: 'Inflow Hydrograph (Catchment Output)',
            description: 'The flood hydrograph generated by the catchment model (unit hydrograph convolution or rainfall-runoff simulation). Characterised by peak discharge Qp (m³/s), time to peak tp (hours), and total volume V (m³ = Qp × effective duration). This is the upstream boundary condition for all downstream routing. In design applications, the inflow is a synthetic hydrograph derived from a design storm with specified return period (e.g., 100-year AEP). In real-time forecasting, it is the modelled or observed flow at the most upstream gauge.',
            color: BRAND.accent,
          },
          {
            id: 'muskingum-reach',
            label: 'Muskingum Channel Routing',
            description: 'The inflow hydrograph is routed through one or more channel reaches using the Muskingum method: O_{t+Δt} = C₀I_{t+Δt} + C₁Iₜ + C₂Oₜ. Each reach is characterised by its travel time K (hours — typically the observed time lag between upstream and downstream hydrograph peaks) and attenuation parameter X (0–0.5). Multiple reaches in series each introduce additional travel time and attenuation. The method conserves volume (C₀+C₁+C₂=1) and is computationally trivial. Extended Muskingum-Cunge method derives K and X from channel properties (slope, width, wave celerity) rather than calibration.',
            color: BRAND.jade,
          },
          {
            id: 'reservoir-routing',
            label: 'Level-Pool Reservoir Routing',
            description: 'A reservoir, detention pond, or natural lake attenuates the flood wave by storing water temporarily in proportion to the difference between inflow and outflow rates. The modified Puls method uses the storage-outflow (2S/Δt + O vs O) curve computed from reservoir bathymetry and spillway hydraulics. Large reservoirs can reduce peak inflows by 50–90%; small detention ponds reduce peaks by 20–50%. Dam safety analysis requires routing the Probable Maximum Flood (PMF) — typically 2–5× the 100-year flood — through the reservoir to ensure the spillway capacity is sufficient to prevent dam overtopping.',
            color: BRAND.amethyst,
          },
          {
            id: 'channel-network',
            label: 'Downstream Channel Network',
            description: 'Below the reservoir or routing reaches, the attenuated and translated hydrograph enters the downstream channel network. Additional routing through tributaries, floodplains, and tidal reaches continues to modify the hydrograph. At stream confluences, tributary hydrographs are added; timing of tributary peak relative to mainstem peak determines whether confluence amplifies or dampens the downstream peak. Backwater effects from ocean tides, dam pools, or channel constrictions can increase water levels far above what the discharge alone would predict — a critical issue in coastal flood mapping.',
            color: BRAND.gold,
          },
          {
            id: 'hec-ras-1d',
            label: 'HEC-RAS 1D Steady/Unsteady Flow',
            description: 'One-dimensional hydraulic models solve the Saint-Venant equations (or steady backwater equations for design applications) along the channel thalweg, with cross-sections sampled at regular intervals (50–500 m (1640 ft)). Water surface profiles are computed iteratively from downstream (subcritical) or upstream (supercritical) boundary conditions. Results include water surface elevation, velocity, and shear stress at each cross-section. Standard engineering application: compute 100-year flood water surface profile for FEMA flood insurance rate mapping. HEC-RAS 1D is the FEMA standard method for detailed flood insurance studies.',
            color: BRAND.coral,
          },
          {
            id: 'hec-ras-2d',
            label: 'HEC-RAS 2D / LISFLOOD-FP Inundation',
            description: 'Two-dimensional hydraulic models solve the 2D diffusion or dynamic wave equations on a fine computational mesh covering the floodplain. Water flows freely in two dimensions around buildings, through road culverts, and over levees. Required inputs: high-resolution terrain model (LiDAR DEM, 0.5–2 m (7 ft) resolution), roughness coefficients for floodplain land cover, and the 1D boundary conditions from channel routing. Output: depth and velocity grids covering the entire floodplain, updated at each time step (typically 1–60 seconds for explicit solvers). Used for: FEMA remapping, dam-break analysis, real-time emergency evacuation mapping (Oroville 2017), property-level flood risk assessment.',
            color: BRAND.ruby,
          },
          {
            id: 'flood-map',
            label: 'Floodplain Inundation Map',
            description: `The final product: a spatial map of flood depth, velocity, and extent for specified return periods (2-year, 10-year, 100-year, 500-year). FEMA flood insurance rate maps (FIRMs) delineate the Special Flood Hazard Area (Zone AE: 100-year, or 1% AEP flood). Modern probabilistic flood mapping (e.g., the UK Environment Agency\'s National Flood Risk Assessment NAFRA2) produces depth-probability curves for every property. Emergency management agencies use real-time inundation maps from operational hydraulic models for flood warning, evacuation routing, and post-flood damage assessment.`,
            color: BRAND.accentHot,
          },
        ],
        edges: [
          { from: 'inflow-hydrograph', to: 'muskingum-reach',   label: 'upstream peak Qp routed through channel reach (travel time K, attenuation X)' },
          { from: 'inflow-hydrograph', to: 'reservoir-routing',  label: 'inflow enters reservoir; outflow controlled by spillway rating curve' },
          { from: 'muskingum-reach',   to: 'reservoir-routing',  label: 'translated, attenuated hydrograph arrives at reservoir or lake' },
          { from: 'reservoir-routing', to: 'channel-network',    label: 'controlled or uncontrolled reservoir outflow re-enters downstream channel' },
          { from: 'muskingum-reach',   to: 'channel-network',    label: 'multiple channel reaches in series; confluences add tributary flows' },
          { from: 'channel-network',   to: 'hec-ras-1d',         label: 'reach-averaged discharge becomes upstream boundary for 1D backwater computation' },
          { from: 'hec-ras-1d',        to: 'hec-ras-2d',         label: 'channel water surface elevation from 1D analysis provides lateral boundary for 2D floodplain model' },
          { from: 'hec-ras-2d',        to: 'flood-map',          label: 'depth and velocity grids exported as spatial datasets for FEMA mapping and emergency management' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: `In Manning\'s equation V = (1/n)R^(2/3)S^(1/2), what does increasing the hydraulic radius R represent physically, and how does it affect discharge?`,
          a: [
            'Increasing hydraulic radius R represents a narrower, deeper channel where the wetted perimeter is small relative to cross-sectional area; since velocity scales as R^(2/3) and discharge Q = V × A, a larger R increases both velocity and area, causing discharge to scale approximately as Q ∝ R^(5/3) — meaning doubling hydraulic radius nearly triples discharge at fixed slope and roughness',
            'Increasing hydraulic radius R represents a wider, shallower channel where the surface area exposed to friction is greater relative to the water volume; a larger R therefore means more friction resistance, reducing velocity and discharge — opposite to what the equation might suggest',
            'Increasing hydraulic radius R represents higher turbulence intensity in the flow; turbulent channels have larger R because energy dissipation is spread across more of the cross-section; Manning\'s equation predicts that velocity decreases with R because turbulent momentum transfer is less efficient than laminar flow',
            'The hydraulic radius R = cross-sectional area / surface area of the channel; it has units of m² / m² = dimensionless; since R^(2/3) always equals 1 for natural channels, Manning\'s equation simplifies to V = S^(1/2)/n with discharge determined solely by slope and roughness',
          ],
          correct: 0,
          explain: `Option B has the physics backwards. A larger hydraulic radius R = A/P (where P is the wetted perimeter) corresponds to a relatively efficient channel cross-section — more cross-sectional area carrying flow per unit length of wetted boundary that creates friction. A deep, narrow channel has large R (large A, small P); a wide, shallow channel has small R (large P relative to A). Larger R means less friction loss per unit volume of water, so velocity increases. Option C is incorrect: hydraulic radius is not a turbulence intensity indicator. Manning\'s n (the roughness coefficient) accounts for turbulence effects; R is a purely geometric quantity. Option D is incorrect on multiple counts: R = A/P (cross-sectional area divided by wetted perimeter — both in metres — so R has units of m, not dimensionless), and R^(2/3) is definitely not equal to 1 for natural channels (a 1m (3 ft) wide, 1m (3 ft) deep rectangular channel has R = 1×1/(1+2×1) = 0.33m (1 ft); R^(2/3) = 0.48). The correct answer is A: hydraulic radius R = A/P is the ratio of cross-sectional area (m²) to wetted perimeter (m), giving units of m. It measures how efficiently a channel cross-section is "filled" relative to the frictional boundary. A wide river at flood stage has A increasing roughly proportionally with depth while P increases mainly from width (which doesn\'t change much), so R = depth (roughly). Velocity V ∝ R^(2/3) increases with R, and discharge Q = V × A ∝ R^(2/3) × A. Since for a wide rectangular channel R ≈ d (depth) and A = W × d, we get Q ∝ d^(5/3) × W. The exponent 5/3 means discharge increases faster than depth — a small stage rise at high flows produces a disproportionately large discharge increase. This is why flood peaks can be so sensitive to small changes in river cross-section geometry (such as from floodplain encroachment or bridge constriction).`,
        },
        {
          q: 'What is the kinematic wave approximation and when is it valid for flood routing?',
          a: [
            'The kinematic wave approximation assumes that all floodwater moves at the kinematic wave speed c = (5/3)V (where V is mean flow velocity), rather than at the depth-averaged current velocity V; it is valid for all rivers because water molecules travel at V but the flood wave always moves at c',
            'The kinematic wave approximation drops the pressure gradient and inertia terms from the momentum equation of the Saint-Venant equations, retaining only the friction-slope term (S_f = S₀); it produces a flood wave that translates downstream without attenuation or change in shape, valid only for steep channels where friction dominates inertia (S₀ > ~0.001) and where backwater effects and tidal influence are absent',
            'The kinematic wave approximation is a simplification of the diffusion wave that further removes the gravity term from the momentum equation; it is the most accurate of the three wave approximations (kinematic, diffusion, dynamic) because it avoids numerical instabilities associated with pressure and inertia terms',
            'The kinematic wave approximation replaces the Saint-Venant equations with the Manning\'s equation applied at each time step without solving for water surface slope; it is always more accurate than the full dynamic wave because it avoids the amplification of numerical errors in the pressure gradient term',
          ],
          correct: 1,
          explain: `Option A is partially correct in identifying the kinematic wave celerity c = (5/3)V (derived from Manning\'s equation for a wide channel), but the claim that it is "valid for all rivers" is wrong — and conflates the concept with its limitations. The statement also misstates what the approximation does. Option C has the hierarchy inverted: the kinematic wave is the most approximate (least accurate) of the three — it drops both pressure gradient and inertia terms. The diffusion wave retains the pressure term (∂h/∂x) and is more accurate than kinematic wave; the full dynamic wave retains all terms and is most complete. Kinematic wave does NOT avoid numerical instabilities — in fact, its non-linearity can introduce numerical diffusion. Option D incorrectly states that Manning\'s equation applied at each time step gives kinematic wave; this misrepresents the derivation. The kinematic wave equation ∂Q/∂t + c(∂Q/∂x) = 0 is derived by combining continuity with the simplified momentum S_f = S₀, then using a Q–A relationship (from Manning\'s) to express A as a function of Q, giving a non-linear advection equation. The correct answer is B: the full Saint-Venant momentum equation contains four terms: (1) local acceleration ∂Q/∂t, (2) convective acceleration ∂(Q²/A)/∂x, (3) pressure gradient gA(∂h/∂x), and (4) friction and gravity gA(S_f − S₀). The kinematic wave approximation eliminates terms 1, 2, and 3, retaining only term 4 in the form S_f = S₀. This means the flood wave translates at speed c = dQ/dA = (5/3)V (for Manning\'s in a wide channel) without any attenuation — the wave shape does not change as it propagates downstream. This is physically reasonable when: channel slopes are steep enough that gravity dominates acceleration and pressure effects (S₀ > ~0.001); the flood wave is long relative to the channel reach; and there are no downstream controls (dams, tidal boundaries) that create backwater. It fails in: flat channels where pressure gradients dominate friction (Mississippi floodplain, tidal reaches); at confluences with backwater; and for dam-break flows where inertia is critical.`,
        },
        {
          q: 'What is Muskingum routing and what do the parameters K and X represent?',
          a: [
            'Muskingum routing is a numerical solution of the full Saint-Venant equations discretised using the Preissmann implicit finite-difference scheme; K is the Courant number (celerity × Δt / Δx) controlling numerical stability, and X is the spatial weighting factor between upstream and downstream node values',
            'Muskingum routing is a linear reservoir method that assumes storage S = K[XI + (1−X)O], where K represents the travel time of the flood wave through the channel reach (hours) and X (0–0.5) weights the influence of inflow vs outflow on reach storage; when X→0 the reach behaves as a simple linear reservoir (maximum attenuation); when X→0.5 the wave translates without attenuation',
            'Muskingum routing is an energy-balance method that equates potential energy loss along a reach to kinetic energy gain; K is the kinetic energy coefficient (Coriolis parameter, typically 1.0–1.10) and X is the energy dissipation factor determined by the Darcy-Weisbach friction factor for the reach',
            'Muskingum routing is a method that applies Manning\'s equation at each upstream cross-section and routes water downstream through sequential rating curve lookups; K is the Manning\'s roughness coefficient for the main channel and X is the ratio of floodplain width to total channel width, accounting for compound channel geometry',
          ],
          correct: 1,
          explain: `Option A describes the Preissmann implicit scheme, which is a numerical method for solving the full Saint-Venant equations — not Muskingum routing. The Courant number and spatial weighting factor α in the Preissmann scheme are related concepts but are completely different from the Muskingum parameters K and X. Muskingum routing does not solve the Saint-Venant equations at all; it uses a simple storage equation. Option C describes a physically implausible energy-balance approach. The Coriolis (or energy) coefficient α_k (typically 1.0–1.10 for natural channels) is a real hydraulic parameter, but it is unrelated to Muskingum routing. Muskingum has no connection to the Darcy-Weisbach friction factor. Option D confuses Muskingum with a rating-curve sequential routing approach. Manning\'s n is a roughness coefficient used to compute velocity; it is not a Muskingum parameter. The floodplain width ratio is also not a Muskingum parameter — compound channel hydraulics is handled in HEC-RAS cross-section analysis, not Muskingum routing. The correct answer is B: Muskingum routing was developed in the 1930s–1940s for routing floods through the Muskingum Valley in Ohio and is one of the most widely used hydrological routing methods. The storage-outflow relationship S = K[XI + (1−X)O] combines two hypothetical storage types: the X fraction is correlated with inflow I (wedge storage in the reach during the rising limb), and the (1−X) fraction is correlated with outflow O (prism storage — the storage below a horizontal plane at the outlet stage). K is the ratio of total reach storage to discharge — physically, the travel time of the flood peak through the reach. X represents the relative influence of inflow versus outflow on storage: X = 0 means storage responds only to outflow (the reach acts as a simple linear reservoir, producing maximum attenuation); X = 0.5 means inflow and outflow are weighted equally (Muskingum degenerates to pure translation with no attenuation — the flood peak passes through the reach unchanged in shape, just delayed by K). In practice, natural river reaches have X ≈ 0.1–0.3, and K = wave travel time for the reach (hours to days depending on reach length and flow velocity).`,
        },
        {
          q: 'How are 2D hydraulic models used for floodplain inundation mapping, and what data do they require?',
          a: [
            '2D hydraulic models such as HEC-RAS 2D solve the two-dimensional shallow water equations (or their diffusion wave approximation) on a computational mesh covering the floodplain, computing water depth and velocity at every cell; they require a high-resolution terrain model (LiDAR DEM at 0.5–2 m (7 ft)), land cover roughness coefficients, channel bathymetry, and boundary conditions (inflow hydrograph + downstream stage), producing depth-velocity maps used for FEMA floodplain mapping, dam-break analysis, and real-time flood emergency response',
            '2D hydraulic models solve the two-dimensional groundwater flow equation (Dupuit-Forchheimer approximation) simultaneously with surface flow, computing shallow water table depths that predict areas where flooding occurs by groundwater rise; the main data requirement is borehole logs and hydraulic conductivity measurements across the floodplain',
            '2D hydraulic models replace LiDAR terrain data with satellite radar altimetry (SRTM at 30 m (98 ft) resolution), which provides sufficient accuracy for floodplain mapping in all environments including heavily vegetated tropical rivers; they require no field data because all roughness values are derived from satellite multispectral imagery using machine learning algorithms',
            '2D hydraulic models are only used for post-event flood mapping after the flood has receded, because real-time computation is too slow for operational forecasting; pre-event probabilistic flood hazard maps are generated exclusively using 1D HEC-RAS models that can be updated within minutes when inflow forecasts change',
          ],
          correct: 0,
          explain: `Option B describes a groundwater flow model, not a surface hydraulic model. While there is coupling between groundwater and surface flooding in some environments (e.g., floodplain inundation from below when the water table rises), 2D hydraulic models like HEC-RAS 2D solve the shallow water equations (Saint-Venant in 2D or their diffusion wave simplification) for surface overland flow — not the Dupuit-Forchheimer groundwater equation. Option C is incorrect on multiple counts: SRTM 30 m (98 ft) resolution is generally too coarse for detailed floodplain mapping in many environments (especially in flat terrain with floodplain features smaller than 30 m (98 ft), or in areas with dense vegetation that biases SRTM elevations upward). LiDAR (0.5–2 m (7 ft) resolution, ±10–15 cm (5.9 in) vertical accuracy) is the standard for detailed flood mapping. Roughness values are not reliably derived from satellite imagery alone; they require field calibration. Option D is incorrect: 2D hydraulic models are increasingly used for real-time operational flood forecasting. Advances in GPU-accelerated computing (e.g., LISFLOOD-FP GPU, HEC-RAS 2D with GPU support) now enable real-time 2D simulations for catchment-scale events. The Oroville Dam crisis (2017) demonstrated real-time 2D modelling in an emergency. Furthermore, pre-computed scenario libraries allow instant lookup of inundation maps during operational forecasting. The correct answer is A: 2D hydraulic models solve the 2D shallow water equations (or diffusion wave approximation) on a mesh covering the floodplain domain. HEC-RAS 2D (USACE), MIKE FLOOD (DHI), and LISFLOOD-FP (Bristol) are the most widely used codes. Key inputs: (1) LiDAR DEM (0.5–2 m (7 ft), ±10–15 cm (5.9 in) vertical accuracy) processed to remove vegetation and buildings for bare-earth terrain; (2) channel bathymetry (surveyed cross-sections merged with terrain model); (3) Manning\'s n roughness coefficients by land cover class (buildings, urban, forest, agricultural, water); (4) upstream inflow hydrograph(s) from 1D channel routing or catchment model; (5) downstream boundary condition (stage-discharge rating curve, tidal stage record, or uniform flow assumption). Output: time-varying grids of depth (m), velocity (m/s), and flood hazard index across the entire modelled domain — suitable for FEMA flood insurance rate mapping, hydraulic infrastructure design, and real-time emergency response flood zone delineation.`,
        },
      ],
    },
  ],
}

export default streamflowRouting
