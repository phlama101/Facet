import { AlertTriangle, Layers, Activity, Shield, TrendingDown } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const landslidesAndMassWasting: Lesson = {
  id: 'geom-101-1-4-2',
  title: 'Landslides and Mass Wasting Hazards',
  track: 'cli',
  trackName: 'Geomorphology',
  level: 'Beginner',
  duration: '14 min',
  xpReward: 150,
  description: 'Explore the mechanics, classification, and hazard assessment of mass wasting — from slow soil creep to catastrophic debris avalanches — and how engineers and scientists monitor, predict, and manage slope instability in an era of changing precipitation and land use.',
  sources: [
    { org: 'USGS',      title: 'USGS — Landslide Hazards Program',                      url: 'https://landslides.usgs.gov' },
    { org: 'BGS',       title: 'BGS — National Landslide Database UK',                  url: 'https://www.bgs.ac.uk/research/engineering/landslides/' },
    { org: 'ICL',       title: 'International Consortium on Landslides',                url: 'https://icl.iplhq.org' },
    { org: 'ESA',       title: 'ESA — Copernicus InSAR Ground Deformation Services',   url: 'https://www.copernicus.eu/en/services/land' },
    { org: 'AGU',       title: 'JGR Earth Surface — American Geophysical Union',        url: 'https://agupubs.onlinelibrary.wiley.com/journal/21699011' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'When slopes fail: mechanics, triggers, and the full spectrum of mass movement',
      body: `Mass wasting encompasses all downslope movement of rock, debris, or soil driven by gravity — from imperceptibly slow soil creep to catastrophic rock avalanches that travel tens of kilometres. It is one of Earth's most deadly geomorphic hazards: between 2004 and 2016, landslides killed more than 55,000 people globally, with the highest death toll in South and Southeast Asia where steep, seismically active terrain combines with intense monsoon rainfall and growing mountain populations.

The fundamental control on slope stability is the **Mohr-Coulomb failure criterion**: shear strength τ = c + (σ − u) tan φ, where c is cohesion, σ is total normal stress, u is pore water pressure, and φ is the internal friction angle of the material. The term (σ − u) is the **effective normal stress** — the part of the normal force actually transmitted through grain contacts rather than the pore fluid. This equation has profound consequences for understanding landslide triggering. Rising **pore water pressure** (u) during rainfall reduces effective stress, weakening the slope without any change in slope geometry or loading. When pore pressure equals the total normal stress (u = σ), effective stress collapses to zero, and even a cohesionless, flat-lying material will flow — a condition called **undrained loading** that is responsible for many catastrophic failures in saturated soils and sensitive marine clays.

The **Varnes classification** (1978, updated by Hungr et al. 2014) organises mass movements by material type and movement mechanism into five principal classes: **falls** (free flight of rock or debris from steep faces), **topples** (forward rotation of rock blocks), **slides** (translational or rotational movement on a discrete failure surface), **flows** (continuous deformation with behaviour resembling a viscous fluid), and **complex** movements (combinations of two or more mechanisms, the most common in practice). Slides on planar failure surfaces (translational slides) are controlled by the orientation of pre-existing discontinuities — bedding planes, faults, joints — relative to the slope face. Rotational slides develop a spoon-shaped, curved failure surface (slip surface) through weak, homogeneous material such as clay-rich soil.

The **2014 Oso landslide** in Washington State, USA, on 22 March 2014, is one of the most studied slope failures in North American history. A 5–7 m of winter rainfall had saturated the regolith overlying weak glaciolacustrine silt and clay, dramatically reducing effective stress. A large rotational-translational slide on the hillside above the North Fork of the Stillaguamish River liquefied on impact with the valley floor and transformed into a high-mobility debris flow that overwhelmed the Steelhead Haven community, killing **43 people** and running out **8 km** across the floodplain at speeds estimated at 40–60 km/hr. Post-event mapping revealed that the slope had experienced multiple prehistoric failures, creating a hummocky topographic record that should have been a warning signal.

**Sturzstrom** — the German term for long-runout rock avalanches — describes a class of catastrophic failures characterised by mobility far exceeding predictions from simple frictional models. The Heim coefficient (H/L, the ratio of vertical drop to horizontal runout) for sturzstrom is typically 0.1–0.2, compared to 0.5–0.7 for ordinary rock slides. Proposed mechanisms for this anomalous mobility include acoustic fluidisation (high-frequency vibrations reduce intergranular friction), air cushion lubrication (trapped air beneath the debris), and fragmentation-induced energy dissipation. The **Frank Slide** (1903, Alberta) and **Elm slide** (1881, Switzerland) are classic examples, with H/L ratios of 0.14–0.18.

Engineering geomorphologists use **Newmark displacement analysis** to quantify seismically triggered slope failure risk. The method treats a potential slide block as a rigid body on a friction surface: when earthquake-induced acceleration exceeds the critical (yield) acceleration of the slope, the block slides permanently. Integrating the double-excess acceleration record gives total permanent displacement (Newmark displacement, D_n); empirical correlations relate D_n to slope failure probability, making this a standard tool in regional seismic landslide hazard zonation. Modern **InSAR** (Interferometric Synthetic Aperture Radar) monitoring detects millimetre-scale surface displacements over hundreds of square kilometres, identifying slowly creeping slope instabilities months to years before they accelerate to failure — as demonstrated in monitoring programs in the Italian Apennines, Himalayas, and Pacific Northwest.`,
      keyTerms: [
        {
          term: 'Mohr-Coulomb Failure Criterion',
          def: 'Defines shear strength of a material as τ = c + (σ − u) tan φ; increasing pore water pressure u reduces effective normal stress and can trigger slope failure without any geometric change to the slope.',
        },
        {
          term: 'Varnes Classification',
          def: 'Standard system organising mass movements by material and mechanism into falls, topples, slides, flows, and complex types; updated by Hungr et al. (2014); the basis for international landslide hazard mapping.',
        },
        {
          term: 'Pore Water Pressure',
          def: 'The pressure of water within the pore spaces of soil or rock; elevated pore pressure during rainfall or undrained loading reduces effective normal stress and is the dominant trigger of most landslides worldwide.',
        },
        {
          term: 'Sturzstrom',
          def: 'Long-runout rock avalanche characterised by anomalously low Heim coefficients (H/L ~0.1–0.2); proposed mechanisms for excessive mobility include acoustic fluidisation and fragmentation; known from large prehistoric events and historic tragedies including Frank Slide (1903).',
        },
        {
          term: 'Newmark Displacement Analysis',
          def: `Engineering method estimating permanent slope displacement during earthquakes by double-integrating seismic acceleration records that exceed the slope\'s critical yield acceleration; used in regional seismic landslide hazard zonation.`,
        },
        {
          term: 'InSAR',
          def: 'Interferometric Synthetic Aperture Radar; satellite technique detecting millimetre-scale ground surface displacements over wide areas; used to map slowly moving landslides and identify precursory deformation before catastrophic failure.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Mass Movement Types: The Varnes Classification in Practice',
      body: `The Varnes classification distinguishes mass movements by both the nature of the material and the style of movement. These categories are not merely academic — they predict travel distance, velocity, impact energy, and therefore the appropriate mitigation strategy. A rock fall requires different engineered defences than a slow-moving earthflow, and emergency planners must know which type of failure threatens a given community.`,
      cards: [
        {
          name: 'Falls and Topples',
          icon: TrendingDown,
          color: BRAND.ruby,
          desc: 'Rock falls involve free flight or bouncing of individual blocks or masses from steep cliffs; velocities can exceed 100 km/hr. Topples involve forward rotation of rock columns or slabs about a pivot at their base, driven by water in fractures or ice expansion. Both are driven by undercutting of cliffs (by rivers, waves, or freeze-thaw), stress relief along joints, and seismic shaking. Run-out controlled by block size, slope angle below cliff, and energy absorption by talus.',
          examples: '2009 rock fall at Yosemite Valley (El Capitan) sent 1,000-tonne boulders 500 m across the meadow floor. Rock fall from Vajont reservoir canyon walls, Italy (1963), generated a wave overtopping the dam and killing ~2,000 people in the valley below — the catastrophe was driven by the reservoir raising pore pressures in the adjacent slope. Topple failures are common in columnar-jointed basalt sea cliffs in Iceland and northern Scotland.',
        },
        {
          name: 'Slides: Translational and Rotational',
          icon: Layers,
          color: BRAND.accent,
          desc: 'Translational slides move on planar failure surfaces parallel to pre-existing discontinuities (bedding planes, faults, foliation). Rotational slides (slumps) develop curved slip surfaces through weak homogeneous material; the slide mass rotates backward as it descends, often preserving original stratigraphy in the block. Both types accelerate when pore water pressure rises; Mohr-Coulomb analysis is applied directly to design remediation. Key parameters: shear strength on failure surface, slope angle, water table depth.',
          examples: 'The Aberfan disaster (1966, Wales): a rotational slide in a colliery spoil tip saturated by rainfall killed 116 children and 28 adults. Portuguese Bend (California): a large slow-moving translational slide on Miocene marine clay at ~30 mm/yr has been moving continuously since 1956, displacing roads and buildings. The 2014 Oso landslide (Washington) began as a rotational slide that transformed into a debris flow, killing 43 people and running out 8 km.',
        },
        {
          name: 'Flows: Debris Flows, Earthflows, and Mudflows',
          icon: Activity,
          color: BRAND.gold,
          desc: 'Flows involve internal deformation throughout the moving mass, behaving as a viscous or plastic fluid. Debris flows are highly mobile mixtures of rock, soil, and water (water content 20–60%) that travel at 10–30 m/s in steep channels; peak discharges can be 10–100× bankfull stream flow. Earthflows move more slowly (mm/yr to m/yr) in clay-rich soils. Lahars are volcanic debris flows of pyroclastic material mixed with water. Jökulhlaup-driven hyperconcentrated flows are a hybrid category. All flows are dangerous because they travel rapidly, follow channels, and can travel far beyond the initial source area.',
          examples: '2018 Atami-area debris flows in Japan (triggered by Typhoon Hagibis rainfall) damaged thousands of structures. 1985 Nevado del Ruiz lahar (Colombia) killed ~23,000 people in Armero, 74 km from the volcano. Debris flows in the San Gabriel Mountains, California, recur every 10–25 years and require engineered debris basins to protect downstream communities; individual events deposit 10,000–500,000 m³ of material.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Hazard Assessment: Triggers, Monitoring, and Mitigation',
      body: `Effective landslide hazard assessment requires understanding both the predisposing factors that create susceptible conditions and the triggering factors that initiate failure. Modern practice combines susceptibility mapping, rainfall threshold analysis, real-time sensor networks, and remote sensing to move from reactive post-disaster response toward probabilistic early warning.`,
      cards: [
        {
          name: 'Rainfall Thresholds and Early Warning',
          icon: AlertTriangle,
          color: BRAND.coral,
          desc: 'Empirical intensity-duration thresholds define the rainfall conditions beyond which debris flows and shallow slides are commonly triggered. Thresholds are defined in log-log space: cumulative rainfall over a given duration; exceeding the threshold triggers an alert. Antecedent moisture (soil saturation state from prior rainfall) strongly modulates the threshold: a slope already near saturation fails at lower rainfall intensity than a dry slope. Real-time rain gauge networks and weather radar feed into operational early warning systems in Japan, Italy, Hong Kong, and the USA.',
          examples: `Hong Kong\'s Geotechnical Engineering Office issues landslide warnings when 70 mm/hr or 175 mm/24 hr thresholds are exceeded; this system, combined with extensive slope stabilisation, has reduced landslide fatalities from ~100/yr (1960s–70s) to <5/yr in recent decades. The Italian Protezione Civile operates a national early warning system with 34 regional alert zones based on rainfall thresholds calibrated to historical landslide databases.`,
        },
        {
          name: 'InSAR Monitoring and Precursory Creep',
          icon: Shield,
          color: BRAND.amethyst,
          desc: `Satellite InSAR (Sentinel-1, ALOS-2) detects millimetre-scale line-of-sight displacement across entire mountain ranges with revisit times of 6–12 days. By comparing SAR phase images from multiple passes, displacement maps reveal slowly creeping slopes that have not yet failed catastrophically. Machine learning classification of InSAR velocity time series can distinguish accelerating (pre-failure) from seasonally fluctuating (stable) patterns. ESA\'s Copernicus Ground Motion Service provides continental-scale deformation maps as an open dataset.`,
          examples: 'InSAR detected precursory deformation on the Maoxian slope (Sichuan, China) for 6 months before its catastrophic failure in 2017 killed 83 people. Sentinel-1 InSAR maps slow-moving landslides in the Italian Apennines at rates of 5–50 mm/yr over thousands of slope units, enabling prioritised inspection programs. In the UK, InSAR was used to monitor reactivation of the Mam Tor landslide (Derbyshire) during wet winters, quantifying 20–40 mm/yr of displacement.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Slope Failure Cascade: From Predisposition to Disaster',
      body: 'How predisposing geological and morphological factors combine with triggering events to produce mass wasting — tracing the chain from initial susceptibility through failure mechanics to runout and impact, and where monitoring and mitigation can interrupt the cascade.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'tracing the chain of conditions and processes from geological predisposition through slope failure to hazard impact and mitigation opportunities',
        nodes: [
          {
            id: 'predisposing-factors',
            label: 'Predisposing Factors',
            description: 'Geological and morphological conditions that create slope susceptibility: steep terrain (>25°), weak or fractured rock, clay-rich regolith, unfavourably oriented discontinuities (bedding dipping out of slope), previous landslide history, and proximity to active faults. These factors alone do not cause failure but determine how close the slope is to its limit-equilibrium condition.',
            color: BRAND.gold,
          },
          {
            id: 'triggering-event',
            label: 'Triggering Event',
            description: 'The event that pushes the slope past its shear strength: intense or prolonged rainfall (most common globally), earthquake shaking, rapid snowmelt, undercutting by rivers or waves, volcanic activity, or human excavation. Triggers act primarily by raising pore water pressure (rainfall) or increasing driving stress (loading, seismic acceleration). Many slopes fail only after repeated triggering events have progressively reduced residual strength.',
            color: BRAND.ruby,
          },
          {
            id: 'mohr-coulomb-exceedance',
            label: 'Mohr-Coulomb Failure',
            description: 'When shear stress on the failure surface exceeds shear strength (τ = c + (σ−u) tan φ), failure initiates. In undrained loading, pore pressure can rise to equal total normal stress, causing liquefaction. The safety factor F = shear strength / shear stress falls below 1.0. Progressive failure may propagate along the failure surface for seconds to hours before catastrophic displacement begins.',
            color: BRAND.coral,
          },
          {
            id: 'movement-type',
            label: 'Movement Mechanism',
            description: 'Material properties and geometry determine whether the failure is a fall (free flight), slide (discrete surface), flow (distributed deformation), or complex. Many failures begin as slides and transform into flows as material disaggregates and mixes with water. Debris flows travel at 10–30 m/s; rotational slides at 0.5–5 m/s. Velocity determines impact energy and warning time available.',
            color: BRAND.accent,
          },
          {
            id: 'runout',
            label: 'Runout and Impact Zone',
            description: 'The distance the moving mass travels from its source to its final deposit. Controlled by volume (larger = longer runout), water content (wetter = farther), and valley morphology (confined channels focus and accelerate flow). The 2014 Oso slide ran out 8 km; the Frank Slide ran out 3 km. Impact areas can extend far beyond the slope itself, threatening communities in valley floors downstream.',
            color: BRAND.amethyst,
          },
          {
            id: 'monitoring-mitigation',
            label: 'Monitoring and Mitigation',
            description: 'Intervention points in the cascade: InSAR and GPS detect precursory creep before failure; rainfall thresholds and real-time monitoring trigger evacuations; slope drainage reduces pore pressure; rock bolts, retaining walls, and catchment barriers reduce runout impact; land-use planning excludes communities from high-hazard zones. The 2014 Oso slope had multiple prehistoric failure deposits that, if mapped, could have supported evacuation planning.',
            color: BRAND.jade,
          },
        ],
        edges: [
          { from: 'predisposing-factors',    to: 'triggering-event',        label: 'Susceptible slopes approach limit equilibrium' },
          { from: 'triggering-event',         to: 'mohr-coulomb-exceedance', label: 'Pore pressure rise or stress increase exceeds strength' },
          { from: 'mohr-coulomb-exceedance',  to: 'movement-type',           label: 'Failure mechanism determined by material and geometry' },
          { from: 'movement-type',            to: 'runout',                  label: 'Velocity and volume control travel distance' },
          { from: 'predisposing-factors',     to: 'monitoring-mitigation',   label: 'Susceptibility mapping identifies hazard zones' },
          { from: 'runout',                   to: 'monitoring-mitigation',   label: 'Impact zone informs land-use planning and barriers' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The Mohr-Coulomb failure criterion states that shear strength τ = c + (σ − u) tan φ. During a heavy rainfall event, which variable changes most directly to trigger slope failure, and how?',
          a: [
            'Cohesion c decreases as clay minerals in the slope absorb water and swell, reducing their bonding strength to near zero within hours of rainfall beginning',
            'Total normal stress σ increases as the weight of rainwater adds to the overburden on the slope, pushing the shear stress above the shear strength',
            'Pore water pressure u increases as the water table rises and unsaturated pores fill, reducing effective normal stress (σ − u) and therefore shear strength, while the shear stress driving failure remains unchanged; when effective stress falls sufficiently, the safety factor F = τ / shear stress drops below 1.0',
            'Internal friction angle φ decreases as water lubricates mineral grain contacts, reducing the frictional component of strength from typical values of 25–35° to near 0° in saturated conditions',
          ],
          correct: 2,
          explain: 'Rainfall-triggered slope failure operates primarily through pore water pressure (u). As rain infiltrates, the water table rises and unsaturated soil suction (which was providing apparent cohesion) is lost; in undrained conditions, rapid loading can generate excess pore pressures. The term (σ − u) — the effective normal stress — decreases, directly reducing the frictional component of shear strength (σ − u) tan φ. The gravitational driving stress (determined by slope geometry and weight) remains essentially constant during a rainfall event. The safety factor F = [c + (σ − u) tan φ] / τ_drive decreases as u rises until F < 1.0 and failure occurs. Option A has some truth (clay softening does reduce cohesion over longer timescales through chemical processes), but this operates over days to months, not the hours relevant to a rainfall trigger. Option B is partially true — rainfall does add weight — but the added mass is small compared to the reduction in effective stress from pore pressure. Option D is incorrect: friction angle φ is a material constant determined by grain shape and mineralogy, not lubrication in the classical Mohr-Coulomb sense.',
        },
        {
          q: 'The 2014 Oso landslide in Washington State had a runout of ~8 km across the flat valley floor, far exceeding what simple friction models would predict from a slope of that height. What process allowed this exceptional mobility?',
          a: [
            'The debris was primarily composed of coarse gravel and boulders, which have lower friction angles than fine-grained material, allowing the mass to slide further on the valley floor',
            'The landslide initiated as a dry rock fall from a high cliff, meaning it had built up kinetic energy over a long free-fall distance before impacting the valley floor',
            'On impact with the saturated valley floor sediment and the North Fork Stillaguamish River, the debris underwent liquefaction and undrained flow transformation: pore pressures within the rapidly loaded, water-saturated material spiked to near-lithostatic levels, collapsing effective stress, drastically reducing basal friction, and converting the slide mass into a high-speed debris flow that travelled 8 km',
            'The Oso slope was underlain by permafrost at depth; impact with the valley floor fractured the frozen layer, releasing pressurised meltwater that acted as a lubricant for the runout',
          ],
          correct: 2,
          explain: `The Oso failure exemplifies undrained loading and flow transformation. The slide originated in water-saturated glaciolacustrine silts and clays above a weaker sand and gravel layer. As the slide mass impacted the flat valley floor — itself saturated from exceptional winter rainfall — two critical processes occurred simultaneously. First, the rapid loading of saturated valley sediments generated large excess pore water pressures (undrained response) that essentially eliminated frictional resistance between the debris and the substrate. Second, the slide mass itself, which had been a coherent rotational slide on the hillside, disaggregated and mixed with water upon impact, transforming into a highly mobile debris flow with water content approaching that of a slurry. This flow transformation — from slide to flow — dramatically increased mobility. Post-event analysis of sediment deposits confirmed flow behaviour throughout the runout zone. The exceptional mobility of Oso (H/L ≈ 0.12) places it in the sturzstrom category of long-runout failures. Option A is incorrect: fine-grained saturated materials actually have lower effective friction angles in undrained conditions than coarse materials. Option B is incorrect: Oso was a translational-rotational slide, not a rock fall. Option D is incorrect: the Pacific Northwest at Oso's elevation does not have permafrost.`,
        },
        {
          q: 'Sturzstrom (long-runout rock avalanches) travel much farther than simple friction models predict, with Heim coefficients (H/L) of 0.1–0.2 compared to 0.5–0.7 for ordinary rock slides. Which proposed mechanism best explains this anomalous mobility?',
          a: [
            'Sturzstrom always travel over water — rivers, lakes, or ocean — which provides a frictionless substrate; the anomalous runout is entirely explained by aquaplaning on the water surface',
            'The enormous volume of sturzstrom (>10⁶ m³) means that the ratio of potential energy to frictional resistance is much higher than for small slides; larger volumes always produce proportionally longer runouts simply due to scaling of gravitational energy',
            'Acoustic fluidisation: high-frequency vibrations generated by internal rock fragmentation reduce time-averaged contact forces between fragments, effectively lowering the apparent friction angle of the moving mass from ~35° (static rock-on-rock) to ~5–10°; this mechanism is consistent with the volume dependence of runout and the preservation of original rock stratigraphy observed in some sturzstrom deposits',
            'Sturzstrom entrain sufficient air between the fragments to form a cushion of compressed air beneath the moving mass; this air lubrication reduces basal friction to near zero and is why sturzstrom can only occur in open, unconfined terrain with access to fresh air',
          ],
          correct: 2,
          explain: 'Acoustic fluidisation, proposed by Melosh (1979), remains one of the most mechanically coherent explanations for sturzstrom mobility. During rapid rock mass fragmentation, vibrations are generated at seismic frequencies (10–1,000 Hz). These vibrations cause rapid alternation between high and low contact forces at grain boundaries; averaged over time, the effective normal stress at contacts — and therefore friction — is reduced. The mechanism predicts a volume dependence (larger masses generate more vibration energy), consistent with the empirical observation that H/L decreases with increasing volume. The preservation of original rock stratigraphy in inverted or minimally mixed form in some sturzstrom deposits (e.g., Heart Mountain slide, Wyoming) suggests that the mass moves with low internal shear, consistent with acoustic fluidisation rather than turbulent flow. Option A is incorrect: many sturzstrom, including the Frank Slide and prehistoric Himalayan rock avalanches, travelled over dry land surfaces. Option B correctly notes volume dependence but does not constitute a mechanism — larger volumes do produce longer runouts empirically, but the physics require an explanation for why effective friction decreases. Option D describes the air cushion hypothesis, which is not generally supported — many sturzstrom travel over rough terrain where air cannot be retained beneath the mass.',
        },
        {
          q: 'InSAR monitoring of a hillside shows that average surface displacement velocity has increased from 3 mm/yr to 15 mm/yr over the past 6 months, with the acceleration concentrated after a wet winter. What is the most appropriate next step for hazard managers?',
          a: [
            'Ignore the acceleration because 15 mm/yr is still very slow, and only velocities above 1 m/yr are considered precursors to catastrophic failure in established slope monitoring protocols',
            'Immediately evacuate all people within 10 km downslope, as any acceleration in InSAR velocity indicates imminent catastrophic failure within days',
            'Conduct a detailed field investigation to characterise the failure mechanism, material type, and water table conditions; install GPS benchmarks and piezometers to monitor pore pressure; prepare contingency evacuation plans for downslope communities; and set velocity threshold levels for escalated alerts, because acceleration is a meaningful early warning signal but timing of catastrophic failure is highly uncertain',
            'Apply emergency slope drainage works immediately without further investigation, since the wet-winter correlation confirms that pore pressure is the driver and drainage will stop the acceleration',
          ],
          correct: 2,
          explain: 'Acceleration of a slowly moving landslide is one of the most important early warning signals in slope hazard management, but the time to catastrophic failure is notoriously difficult to predict. The five-fold velocity increase (3 to 15 mm/yr) over six months, correlated with a wet winter, strongly suggests pore pressure as the driver and indicates that the slope has moved further from its stable state. Best practice (informed by the IUGS-WGL guidelines and case histories including Vajont, Italy, and Maoxian, China) is to: (1) characterise the problem with field investigation; (2) install real-time monitoring (GPS, piezometers, inclinometers) to track pore pressure and deformation rate; (3) establish velocity thresholds for tiered alerts and evacuations; and (4) communicate risk to local authorities. Option A is dangerously complacent — failure can occur at velocities much lower than 1 m/yr depending on material and slope geometry; the acceleration trend matters more than the absolute rate. Option B overcorrects — InSAR velocity acceleration does not predict imminent failure with any precision; evacuating 10 km radius from all accelerating slopes would cause enormous disruption. Option D has merit (drainage is often the right treatment) but acting without diagnosis risks missing other contributing factors, implementing the wrong remedy, or disturbing an already marginal slope.',
        },
        {
          q: 'Newmark displacement analysis is used to estimate permanent slope displacement during earthquake shaking. What is the critical acceleration in this method, and what does it represent physically?',
          a: [
            'The peak ground acceleration (PGA) recorded at a strong motion seismograph station nearest to the slope; Newmark displacement is calculated by integrating PGA over the duration of shaking',
            'The acceleration at which a slope block begins to move on its failure surface, calculated as g × (F−1) × tan α, where F is the static safety factor and α is the slope angle; it represents the minimum seismic acceleration that permanently displaces the slope block',
            'The acceleration value corresponding to the slope\'s natural resonant frequency; Newmark displacement accumulates when earthquake frequency content matches the slope\'s resonant frequency, causing amplified shaking',
            'The threshold acceleration for liquefaction of saturated sands within the slope; once liquefaction occurs, the critical acceleration drops to zero and all subsequent shaking produces permanent displacement',
          ],
          correct: 1,
          explain: `In Newmark\'s (1965) sliding block model, the critical (yield) acceleration k_c is the horizontal ground acceleration (expressed as a fraction of g) just sufficient to reduce the slope\'s factor of safety to exactly 1.0. For a simple planar slide, k_c ≈ (F_s − 1) × g × sin α / cos α, where F_s is the static safety factor (typically 1.1–1.5) and α is the slope angle. Physically, it is the minimum earthquake acceleration that begins permanently displacing the slope block. When earthquake acceleration exceeds k_c, the block slides downhill; when it falls below k_c, sliding stops. Integrating the double-excess acceleration (i.e., accelerations above k_c, twice, to get displacement from acceleration → velocity → displacement) gives the total Newmark displacement D_n. Empirical equations (e.g., Jibson 2007) then relate D_n to probability of failure: D_n < 2 cm → low failure probability; D_n 5–15 cm → moderate; D_n > 15 cm → high. This makes Newmark analysis a practical regional screening tool. Option A confuses PGA with critical acceleration — the method requires knowing both, and sliding occurs only when PGA exceeds k_c. Option C is incorrect: resonance-based amplification is a site effect consideration, not the Newmark method. Option D describes liquefaction triggering, which is a different failure mode not represented in the original Newmark method (though extensions of the method address saturated materials).`,
        },
      ],
    },
  ],
}

export default landslidesAndMassWasting
