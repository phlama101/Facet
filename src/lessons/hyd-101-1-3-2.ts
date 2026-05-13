import { ArrowRight, Layers, Globe, Activity, Zap } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const groundwaterFlow: Lesson = {
  id: 'hyd-101-1-3-2',
  title: 'Groundwater Flow, Darcy\'s Law, and Well Hydraulics',
  track: 'geo',
  trackName: 'Hydrology',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 130,
  description: 'Darcy\'s Law and the cone of depression: the physics that governs groundwater movement',
  sources: [
    { org: 'USGS', title: 'USGS — Groundwater Flow',                                                    url: 'https://www.usgs.gov/special-topics/water-science-school/science/groundwater-flow' },
    { org: 'USGS', title: 'USGS — Groundwater and Surface Water: A Single Resource',                    url: 'https://pubs.usgs.gov/circ/circ1139/' },
    { org: 'EPA',  title: 'US EPA — Groundwater Flow Basics',                                           url: 'https://www.epa.gov/ground-water-and-drinking-water' },
    { org: 'AGU',  title: 'AGU — Water Resources Research: Well Hydraulics',                            url: 'https://agupubs.onlinelibrary.wiley.com/journal/19447973' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Darcy\'s Law and the cone of depression: the physics that governs groundwater movement',
      body: `Groundwater flow is governed by Darcy\'s Law, formulated by Henry Darcy in 1856 from experiments on sand filters in Dijon, France. Darcy observed that the volumetric flow rate (Q) through a porous medium is proportional to the cross-sectional area (A), the hydraulic gradient (dh/dl — the change in hydraulic head per unit distance in the flow direction), and the hydraulic conductivity of the material (K): Q = -K × A × (dh/dl). The negative sign indicates flow from high to low hydraulic head. Darcy flux (q = Q/A) has units of velocity (m/s) but represents volume flux per unit area, not the actual velocity of water molecules through pores (which is q/φ, where φ is effective porosity — typically 3–10× faster than the Darcy flux).

Hydraulic head (h) is the mechanical energy per unit weight of groundwater, combining elevation head (z) and pressure head (ψ): h = z + ψ. In an unconfined aquifer, h equals the water table elevation. In a confined aquifer, h is the level to which water rises in a tightly cased piezometer — the potentiometric surface. Groundwater flows from areas of high head to low head, following the negative gradient of the head field. Flow nets — graphical solutions showing equipotential lines (equal head) and flow lines (perpendicular to equipotentials in isotropic media) — visualise regional groundwater flow patterns and were the primary analysis tool before numerical models.

When a well pumps from an aquifer, it creates a cone of depression — a funnel-shaped lowering of the water table (unconfined) or potentiometric surface (confined) around the well. The Theis equation (1935) describes the transient drawdown distribution around a pumping well in an ideal confined aquifer: s = (Q/4πT) × W(u), where s is drawdown, T is transmissivity, W(u) is the well function (a tabulated function), and u = r²S/(4Tt). At steady state in an unconfined aquifer, the Dupuit-Thiem equation applies. Aquifer testing — pumping at a known rate and measuring drawdown versus time at observation wells — is the standard method for determining T and S in the field.

Regional groundwater systems include gaining streams (where groundwater discharges to the stream, supporting baseflow), losing streams (where stream water recharges the aquifer), and flow-through lakes (recharging on one side, discharging on the other). In the eastern US, most streams are gaining; in the arid West, many streams are losing. The hyporheic zone is the shallow subsurface region where surface water and groundwater mix, with ecological significance: this biogeochemically active zone filters nutrients, processes organic matter, and provides critical fish habitat for hyporheic invertebrates and spawning salmon. Pumping wells too close to streams can induce streamflow capture — drawing water from the stream into the aquifer.`,
      keyTerms: [
        {
          term: 'Darcy\'s Law',
          def: 'Q = -KA(dh/dl); volumetric flow is proportional to hydraulic conductivity, cross-section, and hydraulic gradient.',
        },
        {
          term: 'Hydraulic Head',
          def: 'h = z + ψ; mechanical energy per unit weight of groundwater. Groundwater flows from high head to low head.',
        },
        {
          term: 'Cone of Depression',
          def: 'Funnel-shaped drawdown in the water table or potentiometric surface around a pumping well.',
        },
        {
          term: 'Theis Equation',
          def: 'Analytical solution for transient drawdown around a pumping well; used to determine aquifer transmissivity and storage coefficient.',
        },
        {
          term: 'Hyporheic Zone',
          def: 'Subsurface zone of mixing between surface water and groundwater; biogeochemically active; critical fish habitat.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Groundwater Movement: From Recharge to Discharge',
      body: `Groundwater flow is driven by head gradients and resisted by the hydraulic conductivity of the medium. Regional flow systems can extend hundreds of kilometres from recharge zones in uplands to discharge zones at springs, rivers, and coastlines. Understanding flow patterns is essential for managing well interference, protecting springs, and predicting contaminant transport.`,
      cards: [
        {
          name: 'Darcy\'s Law',
          icon: ArrowRight,
          color: BRAND.coral,
          desc: 'Q = -KA(dh/dl). Flow proportional to K × gradient. Applies to laminar flow through porous media (not karst conduits).',
          examples: 'A sand aquifer (K=10⁻⁴ m/s) with gradient 0.01 transmits 10⁻⁶ m³/s per m² cross-section. Doubles if gradient doubles.',
        },
        {
          name: 'Flow Nets',
          icon: Layers,
          color: BRAND.jade,
          desc: 'Equipotential lines (equal head) + flow lines (perpendicular in isotropic media) = graphical flow solution. Head drop equal between each pair of equipotentials.',
          examples: 'Flow nets used to assess seepage beneath dams. Each flow tube carries equal Q; equipotential drops are equal fractions of total head loss.',
        },
        {
          name: 'Cone of Depression',
          icon: Zap,
          color: BRAND.gold,
          desc: 'Pumping lowers head around well. Grows until inflows (recharge + leakage + stream capture) balance pumping rate.',
          examples: 'Central Arizona Project aquifer: cones of depression from major well fields have merged to form a regional water table decline of 50-100 m since 1940.',
        },
        {
          name: 'Gaining vs Losing Streams',
          icon: Globe,
          color: BRAND.amethyst,
          desc: 'Gaining: groundwater head > stream stage → GW discharges to stream. Losing: stream stage > GW head → stream recharges aquifer.',
          examples: 'Platte River, Nebraska: changes from gaining to losing due to aquifer depletion from irrigation. Base flow has declined 50-70% since 1950s.',
        },
        {
          name: 'Hyporheic Zone',
          icon: Activity,
          color: BRAND.accent,
          desc: 'Zone of surface water-groundwater mixing in streambed gravels. Biogeochemically active: removes nitrate, processes organic matter, hosts invertebrates.',
          examples: 'Salmon eggs incubated in hyporheic gravels require oxygenated groundwater flow; hyporheic zone impairment from fine sediment deposition reduces salmon recruitment.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Regional Groundwater Flow System',
      body: 'How groundwater flows from upland recharge zones through the aquifer system to discharge at rivers, springs, wells, and the coast.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'How groundwater flows from upland recharge zones through the aquifer system to discharge at rivers, springs, wells, and the coast.',
        nodes: [
          {
            id: 'upland-recharge',
            label: 'Upland Recharge Zone',
            description: 'Precipitation infiltrates in permeable upland soils and rock outcrops. High elevation = high hydraulic head. Drives regional groundwater flow.',
            color: BRAND.jade,
          },
          {
            id: 'vadose-zone',
            label: 'Vadose Zone',
            description: 'Unsaturated zone between land surface and water table. Water moves downward under gravity and capillary pressure. Residence time: days to centuries.',
            color: BRAND.gold,
          },
          {
            id: 'water-table',
            label: 'Water Table / Phreatic Surface',
            description: 'Upper boundary of saturated zone in unconfined aquifer. Mounds under recharge areas; depressed by pumping and towards discharge areas.',
            color: BRAND.accent,
          },
          {
            id: 'regional-flow',
            label: 'Regional Groundwater Flow',
            description: 'Water flows along hydraulic gradient from recharge to discharge zones. May travel hundreds of km and take hundreds to thousands of years.',
            color: BRAND.coral,
          },
          {
            id: 'discharge-zones',
            label: 'Discharge Zones',
            description: 'Water table intersects surface at springs, river banks (gaining reaches), and lake beds. Sustains streamflow during droughts. Coastal discharge as submarine groundwater.',
            color: BRAND.ruby,
          },
          {
            id: 'pumping-well',
            label: 'Pumping Well',
            description: 'Artificial discharge point. Cone of depression draws water from surrounding aquifer. Can capture streamflow if cone extends to gaining stream. Lowers regional water table if over-extracted.',
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'upland-recharge', to: 'vadose-zone',    label: 'Infiltration' },
          { from: 'vadose-zone',     to: 'water-table',    label: 'Reaches saturated zone' },
          { from: 'water-table',     to: 'regional-flow',  label: 'Head gradient drives flow' },
          { from: 'regional-flow',   to: 'discharge-zones', label: 'Natural discharge' },
          { from: 'regional-flow',   to: 'pumping-well',   label: 'Artificial extraction' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'According to Darcy\'s Law (Q = -KA dh/dl), what happens to groundwater discharge through a cross-section if the hydraulic gradient doubles while K and A remain constant?',
          a: [
            'Discharge decreases by half because the gradient creates more resistance',
            'Discharge doubles because flow is proportional to the hydraulic gradient',
            'Discharge increases by a factor of 4 because the relationship is quadratic',
            'Discharge stays the same because Darcy\'s Law only applies to steady-state conditions',
          ],
          correct: 1,
          explain: 'Darcy\'s Law is a linear relationship: Q = -K × A × (dh/dl). Doubling the hydraulic gradient dh/dl while holding K (hydraulic conductivity) and A (cross-sectional area) constant doubles the discharge Q. This linear relationship holds for laminar flow through porous media, which applies for virtually all natural groundwater flow (Reynolds numbers << 10). It breaks down in karst conduits and very coarse gravels where turbulent flow occurs. The linear relationship is a key insight: it means that regional groundwater flow patterns scale predictably with the head gradient, and that pumping wells in aquifers with higher gradients to the well (steeper cones of depression) capture proportionally more water.',
        },
        {
          q: 'What is a "cone of depression" and what factors control its size?',
          a: [
            'A natural topographic depression in an unconfined aquifer where evapotranspiration has lowered the water table',
            'The funnel-shaped drawdown of the water table (or potentiometric surface) around a pumping well, controlled by pumping rate, aquifer transmissivity, and storage coefficient',
            'A depression in the land surface caused by subsidence when groundwater is extracted from a confined aquifer',
            'A conical groundwater mound that forms around an injection well, the inverse of a pumping cone',
          ],
          correct: 1,
          explain: 'When a well pumps from an aquifer, it removes water faster than it can flow in from surrounding sediments, creating a localised drop in head called the cone of depression. The cone spreads outward over time as the head gradient steepens to drive more water toward the well. The cone\'s size is controlled by: (1) pumping rate Q — higher rate = larger cone; (2) transmissivity T — low T (tight aquifer) = steep, narrow cone; high T (productive aquifer) = shallow, wide cone; (3) storage coefficient S — low S (confined aquifer) = cone spreads rapidly; high S (unconfined) = cone spreads slowly. Multiple wells with overlapping cones of depression compete for the same groundwater — well interference that reduces individual well yields in densely developed aquifer systems.',
        },
        {
          q: 'What is the hyporheic zone and why does it matter ecologically?',
          a: [
            'The zone of capillary fringe above the water table where vadose-zone water is retained in tension',
            'The subsurface zone where streamwater and groundwater actively mix in stream gravels, forming a biogeochemically active habitat critical for nutrient cycling and aquatic life',
            'The deep confined aquifer zone below a river valley where artesian pressure supports upwelling of warm water',
            'The floodplain sediment zone that retains flood water after overbank events, slowly releasing it back to the stream over weeks',
          ],
          correct: 1,
          explain: 'The hyporheic zone is the saturated subsurface environment beneath and adjacent to stream channels where river water and groundwater mix. It can extend from centimetres to tens of metres into streambed and bank sediments. Ecologically, it is critically important for: (1) biogeochemical processing — denitrifying bacteria in hyporheic gravels convert nitrate to nitrogen gas, protecting downstream water quality; (2) oxygen supply — hyporheic flow delivers oxygenated water to fish eggs (salmon, trout) incubating in streambed gravels; (3) temperature buffering — groundwater moderates hyporheic temperatures, creating thermal refugia for cold-water fish in summer; (4) macroinvertebrate habitat — hundreds of specialist invertebrate species live exclusively in hyporheic zones. Fine sediment clogging or loss of riparian vegetation that drives the hyporheic exchange can devastate these ecological services.',
        },
        {
          q: 'How is the Theis equation used in groundwater resource assessment?',
          a: [
            'It calculates steady-state spring discharge from aquifer head measurements at a single well',
            'It models transient drawdown around a pumping well and, when fitted to pumping test data, yields aquifer transmissivity (T) and storage coefficient (S)',
            'It predicts the time required for an aquifer to fully recover after all pumping stops, based on recharge rate and aquifer thickness',
            'It quantifies the rate of saltwater intrusion in coastal aquifers as a function of freshwater pumping rate and aquifer conductivity',
          ],
          correct: 1,
          explain: 'The Theis equation (1935): s = (Q/4πT) W(u), where u = r²S/(4Tt), describes how drawdown (s) changes with time (t) and distance (r) from a pumping well in a confined aquifer. During an aquifer pumping test, a well pumps at a known constant rate Q while observers measure drawdown at one or more observation wells over time. By matching the measured time-drawdown data to the theoretical Theis curve (a type-curve fitting procedure), hydrogeologists determine T (transmissivity, controlling how widely drawdown spreads) and S (storage coefficient, controlling how rapidly head responds). These parameters are essential for designing well fields, predicting sustainable yield, estimating aquifer depletion timescales, and computing capture zones for contaminant remediation.',
        },
        {
          q: 'What is "induced streamflow capture" and when is it a concern?',
          a: [
            'A phenomenon where pumping wells near gaining streams eventually draw stream water through the aquifer to the well, effectively reducing river flow',
            'A regulatory mechanism where water rights holders can require that a new well compensate them for reduced spring flows within their water right area',
            'A process where flood-stage rivers force water into adjacent aquifers faster than the natural recharge rate, over-pressurising confined zones',
            'A technique where irrigation return flows are deliberately routed to losing stream reaches to recharge depleted aquifers',
          ],
          correct: 0,
          explain: 'When a pumping well creates a cone of depression that extends to a nearby gaining stream, it can reverse the head gradient between the stream and the aquifer, inducing the stream to lose water to the aquifer — which is then captured by the well. This is called induced recharge or streamflow capture. The result is that pumping the well effectively "mines" river water, reducing downstream flow. In water-scarce regions, this creates legal and hydrological conflicts between groundwater users (who may not need a stream water right) and surface water rights holders (whose water is being captured). US western water law increasingly recognises hydraulic connectivity between groundwater and surface water, requiring wells to account for their streamflow depletion impacts.',
        },
      ],
    },
  ],
}

export default groundwaterFlow
