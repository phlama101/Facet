import { Activity, Globe, Layers, ArrowRight, Zap } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const sedimentTransportGeomorphodynamics: Lesson = {
  id: 'hyd-201-1-2-3',
  title: 'Sediment Transport and River Geomorphodynamics',
  track: 'geo',
  trackName: 'Advanced Hydrology',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: `Shields parameter, bedload equations, rating curves, Lane\'s balance, knickpoint migration, and the global sediment budget — quantitative river morphodynamics from grain to continent.`,
  sources: [
    { org: 'USGS',   title: 'USGS — Sediment and Erosion Science',                                url: 'https://www.usgs.gov/science/mission-areas/water-resources/science/sediment-and-erosion' },
    { org: 'AGU',    title: 'AGU — Journal of Geophysical Research: Earth Surface',               url: 'https://agupubs.onlinelibrary.wiley.com/journal/21699011' },
    { org: 'Warrick', title: 'Warrick et al. (2015) — Elwha Dam Removal and Sediment Release',   url: 'https://doi.org/10.1002/2014GL062070' },
    { org: 'Syvitski', title: 'Syvitski & Kettner (2011) — Sediment flux and the Anthropocene', url: 'https://doi.org/10.1098/rsta.2010.0332' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The river as a conveyor belt: bedload, suspended load, and the equations that quantify sediment flux from grain to continent',
      body: `Rivers are the primary agents of sediment transport on Earth's surface, connecting erosion in headwaters to deposition in deltas, floodplains, and the ocean floor. Understanding sediment transport is fundamental to predicting channel morphology, designing dams and reservoirs (which fill with sediment), managing coastal erosion (rivers supply beaches and deltas), and evaluating ecosystem health (suspended sediment affects aquatic light regimes and spawning habitat). Quantitative sediment transport science rests on a series of elegant theoretical and empirical relationships developed over the past century.

**Bedload vs suspended load** represent the two principal modes of sediment transport. **Bedload** is coarse sediment (sand, gravel, cobbles) that moves by rolling, sliding, and saltating (bouncing) along the channel bed. It constitutes a small fraction of total sediment volume — typically 10–25% in sand-bed rivers — but represents nearly all of the sediment flux in gravel-bed mountain rivers. Bedload is highly sensitive to discharge and highly variable: it may be nearly zero at low flows and rise by orders of magnitude during a flood. **Suspended load** consists of fine sediment (fine sand, silt, clay) carried in the water column by turbulence; it constitutes the majority of sediment delivered to the ocean by most world rivers. Suspended sediment concentration typically increases with discharge following a power-law rating curve.

**The Hjulström-Sundborg diagram** (1935; modified by Sundborg 1956) provides a qualitative and semi-quantitative framework for understanding sediment entrainment. Plotting mean flow velocity against grain size, it delineates three fields: **erosion** (velocity sufficient to entrain particles), **transport** (velocity sufficient to maintain motion but not entrain new particles from a bed of similar grains), and **deposition** (velocity insufficient to maintain transport). The counterintuitive result — that cohesive fine sediment (clay and silt) requires *higher* velocities to erode than fine sand — reflects the fact that cohesion (electrostatic and van der Waals forces between clay minerals) must be overcome; once suspended, however, clay settles only at extremely low velocities (<0.01 cm/s), remaining in transport over vast distances.

**The Shields parameter** (Shields 1936) provides a dimensionless and theoretically grounded criterion for initiation of sediment motion. The Shields parameter θ is defined as the ratio of the fluid shear stress on the bed (τ) to the submerged weight of a sediment grain:

θ = τ / [(ρₛ − ρ) g D]

where ρₛ is sediment density (~2650 kg/m³ for quartz), ρ is water density, g is gravitational acceleration, and D is grain diameter. Sediment motion begins when θ exceeds a critical value θc. Shields (1936) empirically determined that θc ≈ 0.047 for uniform sand, though subsequent work shows θc varies from ~0.03 for gravel to ~0.06 for fine sand with the grain Reynolds number. The Shields diagram plots θc against the grain Reynolds number Re* = u*D/ν, where u* is the shear velocity and ν is kinematic viscosity.

**Bedload transport equations** quantify the flux of coarse sediment per unit channel width (qb, in kg/m/s or m²/s). The **Einstein (1950) bed-load function** is based on probabilistic turbulent lift theory; grains move when instantaneous upward velocity fluctuations exceed gravitational settling. The empirical **Meyer-Peter-Müller (MPM, 1948) equation** is more widely used in practice:

qb* = 8(θ − θc)^1.5

where qb* = qb / [√((ρₛ/ρ − 1) g D³)] is the dimensionless bedload transport rate. The (θ − θc)^1.5 term reflects the excess shear stress above the threshold of motion; the 1.5 exponent means bedload flux is extremely sensitive to shear stress changes. A 10% increase in shear stress (from higher discharge or slope) produces roughly a 15% increase in bedload flux.

**Suspended sediment transport** is governed by the advection-diffusion equation for concentration. The **Rouse number Z = wₛ / (κ u*)** determines the vertical distribution of suspended sediment, where wₛ is particle settling velocity, κ = 0.41 is von Kármán's constant, and u* is shear velocity. When Z > 2.5, sediment moves as bedload or near-bed saltation. When Z = 1.2–2.5, sediment is concentrated near the bed. When Z < 0.8, sediment is nearly uniformly distributed through the water column. Fine silt (wₛ < 0.01 cm/s, Z << 0.8 at typical u*) is essentially uniformly distributed; coarse sand (wₛ ≈ 5 cm/s) may have Z > 2 even in energetic flows, remaining a bedform-scale feature.

**Global sediment budget**: natural fluvial sediment flux to the ocean is estimated at ~15–19 billion tonnes per year (Gt/yr). However, the **anthropocene sediment budget** is profoundly disturbed. Large dams trap an estimated 25–30% of global river sediment flux — approximately 4–5 Gt/yr — in their reservoirs, creating a massive deficit in coastal sediment budgets. Many deltas are now subsiding (from compaction of old sediment and reduced supply of new sediment from dammed rivers) faster than sea level is rising, creating acute flood and land-loss hazards for hundreds of millions of delta inhabitants (Nile delta, Ganges-Brahmaputra, Yangtze, Mississippi). Simultaneously, deforestation and agricultural land exposure have increased sediment supply from hillslopes in many regions.

**Rating curves** (Q-Qₛ relationships) relate water discharge Q to suspended sediment discharge Qₛ (or concentration) through a power-law: Qₛ = aQᵇ, where b ≈ 1.5–2.5 typically. Rating curves exhibit **hysteresis**: during a rising limb, suspended sediment concentrations are often higher than on the falling limb at the same discharge — **clockwise hysteresis** indicates **first-flush behaviour** (readily available fine sediment near the channel is mobilised first, exhausted by the peak, and the falling limb is supply-limited). **Counterclockwise hysteresis** indicates a **distant sediment source** (coarser sediment arriving from far headwaters after the flood peak). Hysteresis patterns reveal information about sediment source connectivity that simple rating curves miss.

**Lane's balance** (Lane 1955) remains the conceptual centrepiece of alluvial river morphodynamics: Qₛ × D₅₀ ∝ Qw × S. When sediment supply (Qₛ) exceeds transport capacity (set by discharge Qw and slope S), the channel aggrade (raises its bed). When transport capacity exceeds supply, the channel degrades (incises). **Geomorphic effectiveness**: not all flows do equal geomorphic work. The **dominant discharge concept** (Wolman and Miller 1960) recognises that the most geomorphically effective discharge is a trade-off between magnitude (extreme floods do enormous work per event) and frequency (frequent moderate flows do work more often). For most temperate rivers, the **bankfull discharge** (approximately the 1.5-year recurrence interval flow) does the most cumulative sediment transport work over decades to centuries.

**Knickpoints** are abrupt, often waterfall-like breaks in the longitudinal profile of a stream channel. They form in response to base-level lowering: when the outlet (sea level, lake level, or the base of a tributary junction) drops, streams become over-steep relative to their sediment supply and incise rapidly. The knickpoint migrates upstream over time through headward erosion, maintaining a steep face that retreats at rates from cm/yr (hard bedrock) to km/yr (soft substrate). **Dam removal** induces knickpoints that propagate upstream as the channel re-adjusts to the new base level after the dam is gone. The **2011 Elwha River dam removal** (Elwha and Glines Canyon dams, Washington state) — the largest dam removal in US history — released approximately 3.4 million m³ of sediment stored in the reservoirs; the lower river rapidly rebuilt its delta, revegetated its banks, and salmon began recolonising upstream habitat within months.`,
      keyTerms: [
        {
          term: 'Shields Parameter (θ)',
          def: 'Dimensionless ratio of fluid bed shear stress to submerged grain weight: θ = τ / [(ρₛ − ρ)gD]. Sediment motion begins at the critical value θc ≈ 0.047 for sand. The excess parameter (θ − θc) drives bedload transport rate in MPM and similar equations.',
        },
        {
          term: 'Rouse Number (Z)',
          def: 'Dimensionless ratio Z = wₛ/(κu*) that determines vertical distribution of suspended sediment. Z > 2.5: bedload/saltation; Z = 1.2–2.5: near-bed concentration; Z < 0.8: nearly uniform suspension. Controls transition from bedload to suspended load with increasing turbulence.',
        },
        {
          term: 'Meyer-Peter-Müller (MPM) Equation',
          def: 'Empirical bedload transport formula: qb* = 8(θ − θc)^1.5. Relates dimensionless bedload flux to excess Shields stress. The 1.5 power means bedload is highly sensitive to small changes in shear stress; widely used for gravel-bed river design.',
        },
        {
          term: 'Rating Curve Hysteresis',
          def: 'Different suspended sediment concentrations on rising vs falling limb at the same discharge. Clockwise hysteresis = first-flush (near-channel supply exhausted before peak). Counterclockwise hysteresis = distant headwater sediment source arriving after peak. Reveals sediment source connectivity information.',
        },
        {
          term: 'Knickpoint',
          def: `Abrupt break in a river\'s longitudinal profile, often a waterfall or rapid, that migrates upstream in response to base-level lowering. Rate of migration depends on substrate erodibility and discharge. Dam removal triggers knickpoint propagation as the channel re-grades to the new base level.`,
        },
        {
          term: 'Dominant Discharge',
          def: 'The flow magnitude that performs the most cumulative sediment transport work over time, balancing magnitude and frequency. For most temperate rivers, approximately bankfull discharge (~1.5-year return period). Concept of Wolman and Miller (1960); basis for channel-forming discharge in stream restoration design.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Quantitative sediment transport: from Shields threshold to global budget',
      body: `Sediment transport science links grain-scale physics (lift and drag forces on individual particles) to river-basin-scale behaviour (channel geometry, flood peaks, delta growth). The same threshold criterion that predicts when a single sand grain moves also explains why rivers below dams degrade their beds and why removing a dam releases millions of tonnes of stored sediment in years rather than decades.`,
      cards: [
        {
          name: 'Hjulström-Sundborg Diagram',
          icon: Activity,
          color: BRAND.accent,
          desc: 'Velocity vs grain size defines erosion, transport, and deposition fields. Cohesive clays require ~100 cm/s to erode (much more than fine sand at ~20 cm/s) due to cohesion. Once eroded, clay settles only at <0.01 cm/s — transported globally. Gravel requires ~100–200 cm/s to erode; once moving, needs only ~60 cm/s to continue.',
          examples: 'Mississippi suspended load: mostly silt/clay, transported over 3,000 km. Gravel-bed rivers of the Alps move bedload only during peak snowmelt (>200 cm/s). The distinction between erosion and transport thresholds creates "armoured" riverbeds — a protective lag of coarse grains left as fines are selectively removed.',
        },
        {
          name: 'Shields Parameter & Initiation of Motion',
          icon: Zap,
          color: BRAND.jade,
          desc: 'θ = τ/(ρₛ−ρ)gD ≈ 0.047 at threshold for sand. Below θc: no movement. Above θc: increasing bedload. MPM: qb* = 8(θ−θc)^1.5. Shear stress τ = ρgRS (R = hydraulic radius, S = slope). Strong nonlinearity: doubling shear stress roughly triples bedload flux.',
          examples: 'Gravel-bed rivers: θc ≈ 0.03–0.06. Sand-bed rivers: motion nearly continuous during flows above ~25% bankfull. River engineers use Shields criterion to design stable channel linings and riprap sizes for scour protection at bridge piers.',
        },
        {
          name: 'Suspended Sediment & Rating Curves',
          icon: Layers,
          color: BRAND.coral,
          desc: 'Qₛ = aQᵇ (b ≈ 1.5–2.5). Clockwise hysteresis: first-flush near-channel fines exhausted early. Counterclockwise: distant headwater source arrives after peak. USGS NASQAN monitors ~100 stations; turbidity sensors now enable continuous surrogate estimation of suspended sediment.',
          examples: 'Colorado River at Lees Ferry pre-dam: ~100 million t/yr suspended sediment. Post-Hoover Dam: ~0.1 million t/yr (99.9% trapped). Missouri at Hermann: suspended load fell 75% after 1950s reservoir construction — delta starvation and beach erosion downstream.',
        },
        {
          name: 'Lane\'s Balance & Channel Response',
          icon: Globe,
          color: BRAND.gold,
          desc: 'Qₛ × D₅₀ ∝ Qw × S. Dam reduces Qₛ → clear-water erosion → channel degradation (incision) until new equilibrium reached. Deforestation increases Qₛ → aggradation → raised bed → increased flood stage. Gravel mining from bed: reduces Qₛ locally → knickpoint propagation upstream.',
          examples: 'Sacramento River below Shasta Dam: degraded 3–5 m, armoured with coarse lag. Wax Lake Delta, Louisiana: unregulated distributary gains land while main Mississippi channels starved of sediment retreat. Gravel mining from rivers in India: knickpoints migrate km upstream, undermining bridges.',
        },
        {
          name: 'Elwha Dam Removal & Knickpoints',
          icon: ArrowRight,
          color: BRAND.amethyst,
          desc: 'Largest US dam removal (2011–2014): 3.4 M m³ sediment released from reservoirs. Rapid delta rebuilding: Elwha delta grew 15+ ha. Knickpoints migrated upstream as river re-graded. Salmon recolonised >100 km of habitat within 2 years. Template for dam removal geomorphology worldwide.',
          examples: 'Sediment pulse moved as turbid plume to Strait of Juan de Fuca. Fine sediment initially buried salmon spawning gravel, but coarser gravel subsequently rehabilitated riffle habitats. Chinook and coho salmon populations in ongoing recovery. Riffe and pool structure rapidly re-established.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Sediment Cascade: From Mountain Source to Coastal Sink',
      body: `Trace the geomorphic pathway of sediment from hillslope erosion through bedload transport, rating curve dynamics, Lane\'s balance adjustments, and knickpoint migration to eventual coastal deposition — and how dams interrupt this cascade.`,
      interaction: {
        type: 'flow-simulator' as const,
        description: `showing how sediment moves from hillslope erosion through Shields-threshold bedload transport, suspended load rating curves, and Lane\'s balance channel adjustments downstream, with dam trapping interrupting the coastal sediment cascade and knickpoint migration responding to base-level change`,
        nodes: [
          {
            id: 'hillslope-erosion',
            label: 'Hillslope Erosion & Sediment Supply',
            description: 'Weathering, mass wasting (landslides, debris flows), and overland flow detach and deliver sediment to channels. Supply rate (Qs) depends on lithology, climate, slope, and land cover. Global natural supply ~15–19 Gt/yr. Deforestation can increase local sediment yield 10–100×. Landslides deliver episodic large pulses that persist in channels for decades.',
            color: BRAND.accent,
          },
          {
            id: 'shields-threshold',
            label: 'Shields Threshold & Bedload Motion',
            description: 'Fluid shear stress τ = ρgRS must exceed τc = θc(ρₛ−ρ)gD before grains move. Above threshold, MPM equation: qb* = 8(θ−θc)^1.5. Bedload flux extremely sensitive to discharge (and thus slope and hydraulic radius). Gravel moves only in high flows; sand moves almost continuously above a low threshold in sand-bed rivers.',
            color: BRAND.jade,
          },
          {
            id: 'suspended-load',
            label: 'Suspended Load Transport (Rouse Profile)',
            description: 'Fine sediment (Z = ws/κu* < 1.2) distributed nearly uniformly through water column; transported over thousands of km. Rating curve Qs = aQ^b with exponent b ≈ 1.5–2.5. Hysteresis reveals source connectivity. Turbidity surrogates (optical backscatter sensors) now enable continuous real-time suspended sediment monitoring.',
            color: BRAND.gold,
          },
          {
            id: 'lanes-balance',
            label: `Lane\'s Balance & Channel Equilibrium`,
            description: 'Qs × D₅₀ ∝ Qw × S. Imbalance drives morphological adjustment: excess supply → aggradation (bed raises, flood risk increases); deficit supply → degradation (bed lowers, armours with coarse lag). Dominant discharge (bankfull ~1.5 yr RI) does most cumulative work. Channel geometry self-adjusts toward a quasi-equilibrium graded profile.',
            color: BRAND.coral,
          },
          {
            id: 'dam-trapping',
            label: 'Dam Sediment Trapping (Reservoir Trap Efficiency)',
            description: 'Dams create low-velocity reservoirs that trap 80–100% of incoming bedload and 40–70% of suspended load (trap efficiency depends on reservoir capacity:inflow ratio). Globally, dams trap ~25–30% of natural fluvial sediment flux. Clear water released downstream has excess transport capacity → bed degradation, armoring, loss of spawning gravel habitat.',
            color: BRAND.ruby,
          },
          {
            id: 'coastal-delta',
            label: 'Coastal Delivery, Delta, and Knickpoints',
            description: 'River delivers sediment to delta and continental shelf. Delta growth requires sediment supply > compaction + sea-level rise. Dammed rivers starve deltas: Nile delta retreating >10 m/yr since Aswan closure (1964). Dam removal triggers knickpoint propagation upstream and sediment pulse to coast: Elwha delta grew 15+ ha within 3 years of removal.',
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'hillslope-erosion',  to: 'shields-threshold', label: 'Sediment supplied to channel; grain size and supply rate set bedload availability' },
          { from: 'shields-threshold',  to: 'suspended-load',    label: 'Finer fractions above Rouse threshold become suspended; coarser fraction remains as bedload' },
          { from: 'suspended-load',     to: 'lanes-balance',     label: 'Total Qs (bedload + suspended) enters Lane\'s balance equation; channel adjusts slope and geometry' },
          { from: 'lanes-balance',      to: 'dam-trapping',      label: 'Dam intercepts sediment cascade; upstream reservoir traps Qs, clear water released downstream' },
          { from: 'dam-trapping',       to: 'coastal-delta',     label: 'Sediment-starved clear water reaches coast; delta starves; removal reverses trapping and rebuilds delta' },
          { from: 'hillslope-erosion',  to: 'coastal-delta',     label: 'Natural (undammed) sediment cascade: hillslope → stream → delta → shelf over 10²–10⁵ yr timescales' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The Hjulström-Sundborg diagram shows that clay and silt require higher flow velocities to erode than fine sand, despite being much lighter and smaller. What physical mechanism produces this counterintuitive result, and what is its geomorphic significance?',
          a: [
            'Clay and silt are denser than quartz sand because they are composed of heavy metal oxides; the higher density requires greater lift force to entrain the particles, explaining the higher erosion threshold',
            'Cohesive fine sediments are bound by electrostatic and van der Waals forces between clay mineral surfaces, requiring greater applied shear stress to disrupt these bonds and initiate particle motion; once eroded, however, the same cohesion and low settling velocity (wₛ < 0.01 cm/s for clay) means they travel enormous distances in suspension — rivers, estuaries, and ocean — and settle only in nearly still water',
            'Fine particles are physically sheltered from flow forces because they fit into the laminar sublayer of the boundary layer; turbulence cannot reach them because their grain size is below the viscous sublayer thickness; the erosion threshold reflects the flow speed needed to make the sublayer thin enough to expose the grains',
            'Clay and silt form aggregate clusters in natural soils (flocculation); the erosion threshold in the diagram reflects the size of aggregates, not individual particles; the diagram is therefore not applicable to dispersed fine sediment in soft lake or tidal flat deposits',
          ],
          correct: 1,
          explain: 'Clay minerals (kaolinite, illite, smectite) have densities similar to quartz (~2600–2700 kg/m³), not higher; higher density is not the cause (A). The viscous sublayer argument (C) is partially real — particles smaller than sublayer thickness are partially shielded — but this effect alone does not explain the large cohesion-driven threshold; montmorillonite clay in undisturbed beds requires >100 cm/s, far above what sublayer geometry alone would predict; and the Hjulström diagram was developed empirically for natural beds where the sublayer effect is incorporated. Flocculation (D) is real in estuaries and some lakes but does not explain the erosion threshold for consolidated fine-grained beds, which are not composed of weak aggregates; and the statement that the diagram is inapplicable to dispersed fine sediment is incorrect. The correct answer is B: clay mineral surfaces carry a permanent negative charge (from isomorphic substitution in the crystal lattice) and adsorb cations from solution; adjacent clay particles are held by electrostatic attraction, hydrogen bonding, and van der Waals forces. In a consolidated muddy bed, these interparticle forces must be overcome before entrainment can begin — requiring shear stresses (and thus velocities) far exceeding the simple particle-weight calculation that governs non-cohesive sand. The geomorphic significance is profound: clay-rich floodplains and estuarine mudflats are highly resistant to erosion and can persist for geological timescales once deposited; cohesive banks on meandering rivers erode much more slowly than non-cohesive sandy banks; and dredging or disturbance of fine-grained beds (e.g., reservoir sediment flushes) can release decades of stored sediment in a single event, causing major downstream turbidity and habitat impacts.',
        },
        {
          q: 'The Meyer-Peter-Müller (MPM) bedload equation predicts that bedload flux qb* = 8(θ − θc)^1.5. What does the 1.5 power imply for river management, and why is bedload so much harder to measure accurately than suspended sediment?',
          a: [
            'The 1.5 power means bedload flux is approximately linear with shear stress; this makes it easy to predict bedload from discharge measurements with a simple linear regression; bedload is harder to measure than suspended load because it occurs only on the river bottom where sampling is physically difficult',
            'The 1.5 power means bedload transport is highly nonlinear: a 10% increase in shear stress (θ above θc) produces approximately a 15% increase in bedload flux, and the relationship is extremely sensitive near the threshold of motion (θ ≈ θc); this extreme sensitivity, combined with the fact that bedload moves in discrete pulses (dunes, bedform migration) rather than continuously, makes bedload highly variable in space and time and extremely difficult to measure representatively with traditional samplers',
            'The 1.5 power is an empirical constant with no physical basis; it was fitted to data from straight flumes and is known to be invalid in natural rivers with bedforms; bedload measurement difficulty arises from the need to account for bedform migration separately from grain-level transport',
            'The 1.5 power means bedload increases faster than suspended load with discharge; therefore, suspended load dominates at low flows and bedload dominates at high flows; bedload is harder to measure because it must be sampled continuously for 24 hours to account for diurnal discharge variability',
          ],
          correct: 1,
          explain: 'The 1.5 power is decidedly nonlinear (A claims linear — this is incorrect); the relationship is a power law with the excess shear stress, meaning the slope of qb vs (θ − θc) on a log-log plot is 1.5, not 1.0. While the 1.5 exponent has a physical basis in the mechanics of sediment lift and drag that Shields, Einstein, and Meyer-Peter-Müller derived, calling it purely an empirical constant with no physical basis (C) is incorrect; and the statement that it is invalid in natural rivers misstates the literature — MPM performs reasonably well for gravel rivers though with scatter. The generalisation that suspended load dominates at low flows and bedload at high flows (D) is qualitatively correct but the 1.5 power does not uniquely imply this; additionally, bedload measurements with standard Helley-Smith samplers can be made in short deployments, not necessarily 24 hours, though temporal variability does require sampling over flood events. The correct answer is B: the 1.5 exponent means bedload is extremely sensitive to shear stress, particularly near the motion threshold — small changes in discharge, slope, or grain size near θc translate to very large changes in flux. This makes bedload transport highly episodic: during a 100-year flood, more sediment may be moved than in the preceding 99 years combined. The measurement difficulty compounds this: bedload moves as migrating bedforms (dunes, antidunes) — sediment is deposited on the downstream face and transported up the upstream face — so instantaneous bedload measurements are highly variable depending on whether the sampler catches a bedform crest or trough. Traditional samplers (Helley-Smith, Ehrenberger) sample only a small fraction of the channel width for a short time; the spatial variability across the channel width is large; and sampling during large floods (when bedload is highest) is dangerous. Acoustic methods (hydrophones detecting saltating pebbles, acoustic Doppler bedform tracking) now offer continuous, safer bedload surrogate measurements.',
        },
        {
          q: `Lane\'s balance equation (Qₛ × D₅₀ ∝ Qw × S) predicts channel response to perturbations. A river is used for sand and gravel mining, with material extracted from the active channel bed over a 20 km reach. What morphological response does Lane\'s balance predict, and what downstream and upstream effects might you observe?`,
          a: [
            'Extracting sediment from the bed locally reduces D₅₀ (smaller grains exposed as coarse surface layer is removed), which increases transport capacity relative to supply; the channel aggrades upstream as finer sediment is retained, and bank erosion increases downstream from the enlarged cross-section',
            'Local sediment extraction reduces Qₛ in the reach below the mining site; to re-establish balance, the channel downstream of the mining zone must reduce slope (degrade, lower its bed) or reduce D₅₀ by selective transport of fine material; upstream, the channel may experience head-cutting (knickpoint migration) as the lower bed creates a steeper gradient from upstream reaches to the newly lowered bed; bridges and infrastructure over the mined reach are at risk from scour and channel incision',
            'Sediment extraction increases local Qₛ temporarily as the mined material is replaced by collapsing banks; the net effect is channel widening rather than degradation; downstream aggradation occurs as the extra sediment is deposited; the overall Lane\'s balance is maintained without slope change',
            'Lane\'s balance only applies to sand-bed rivers; in gravel-bed rivers (which are the primary target of commercial gravel mining), the channel responds to extraction through armoring alone, with no change in bed elevation or slope; the equation does not predict upstream knickpoint migration in coarse-substrate rivers',
          ],
          correct: 1,
          explain: `Removing coarse surface material exposes finer sediment below, reducing D₅₀ in the active layer, but this actually decreases the settling-velocity-weighted transport threshold rather than increasing transport capacity; and the response to gravel mining is predominantly incision, not aggradation (A misidentifies the primary response). Bank collapse does supply some sediment locally, but this is a secondary, transient effect that does not compensate for extraction volumes in industrial operations (C understates the primary response). Lane\'s balance applies across all substrate sizes; gravel-bed rivers exhibit strong knickpoint migration following gravel extraction, as documented in the Sacramento River, Rhine, and rivers in New Zealand, India, and southern Europe (D\'s claim of inapplicability is incorrect and contradicts extensive documented case studies). The correct answer is B: gravel extraction reduces local Qₛ (the sediment that would have been transported downstream is physically removed). Downstream of the mining zone, clear-water erosion (analogous to conditions below a dam) incises the channel bed as the low-sediment water has excess transport capacity — rates of 10–30 cm/yr of bed lowering have been documented on actively mined rivers. Critical infrastructure consequences include: bridge pier scour exposure as the bed lowers below design depth; loss of shallow groundwater connectivity (lowered bed disconnects floodplain aquifer from channel); and coarsening of spawning gravel habitat as fine material is winnowed. Upstream, the abrupt step in bed elevation created between the mined and unmined reach generates a headcut (knickpoint) that migrates progressively upstream, undermining in-channel structures. These well-documented impacts are the reason most jurisdictions now regulate or ban in-channel gravel mining, redirecting aggregate extraction to alluvial terraces and dry pits.`,
        },
        {
          q: 'The concept of "dominant discharge" (Wolman and Miller 1960) recognises a trade-off between event magnitude and frequency in controlling long-term sediment transport. How does this concept inform stream channel restoration design?',
          a: [
            'Dominant discharge equals mean annual flood (2-year return period) in all rivers; channel restoration should be designed to pass this flow without flood damage; the concept is primarily used for flood control rather than for sediment transport or ecological considerations',
            'Dominant discharge is the flow magnitude that, integrated over time, performs the most cumulative geomorphic work (bedload transport, channel forming); for most temperate rivers this approximates the bankfull discharge at approximately the 1.5-year recurrence interval; restoration designs sized to the dominant discharge create self-maintaining channels that efficiently transport sediment without aggrading or degrading, restoring natural pool-riffle spacing and channel dimensions proportional to the watershed\'s typical flood regime',
            'Dominant discharge is the largest flood in the gaged record; channel restoration must be designed to withstand this maximum event; sizing to smaller flows is inadequate because individual large floods do more work than all other flows combined in most rivers',
            'Dominant discharge applies only to suspended sediment transport, not to bedload; for channel restoration, the relevant design flow is the threshold discharge at which bedload motion begins (the critical Shields discharge), which is typically much lower than the bankfull discharge',
          ],
          correct: 1,
          explain: `Dominant discharge is not always exactly the mean annual flood (A); Wolman and Miller\'s classic analysis showed it varies with climate regime and sediment supply — in flashy arid rivers, rarer, larger events can dominate; in humid temperate rivers with continuous sediment supply, the result approximates the bankfull or 1–2 year flood, not universally the 2-year flood. The largest flood in the gaged record does not necessarily dominate total long-term work (C); extreme events are very powerful but very infrequent; a 500-year flood may move more sediment per event than 1,000 moderate floods, but it occurs so rarely that 1,000 moderate floods collectively still dominate over centuries. Dominant discharge does apply to bedload, not just suspended load (D); the Wolman-Miller framework explicitly calculates total long-term sediment transport as the product of transport rate (increasing with discharge) and exceedance frequency (decreasing with discharge), integrated over all flows — this applies to both transport modes; bedload threshold is incorporated because bedload flux is zero below the threshold and rises steeply above it. The correct answer is B: Wolman and Miller showed that most total sediment transport occurs at intermediate flows — not the biggest floods (rare) or smallest flows (transport negligible) but the moderate, frequent flows near bankfull stage. The bankfull discharge corresponds to the flow that just fills the channel to the tops of the banks, approximately the 1–1.5 year recurrence interval event in many regions, and is empirically correlated with the dominant discharge. Stream restoration practitioners use bankfull discharge to size restored channel width, depth, and slope using regional hydraulic geometry curves; the resulting channel dimensions are self-maintaining because the channel is shaped to the flow it most frequently experiences at geomorphically effective magnitudes. Designing too small (below dominant discharge) results in a channel that aggressively erodes during the common bankfull event; designing too large results in a low-velocity channel that aggrade as sediment falls out of transport.`,
        },
      ],
    },
  ],
}

export default sedimentTransportGeomorphodynamics
