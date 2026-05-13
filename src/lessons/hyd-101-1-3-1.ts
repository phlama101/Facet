import { Layers, Globe, Activity, Zap, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const aquifersGroundwater: Lesson = {
  id: 'hyd-101-1-3-1',
  title: 'Aquifers, Porosity, and Groundwater Hydraulic Properties',
  track: 'cli',
  trackName: 'Hydrology',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 130,
  description: 'Below the water table: how rock porosity, aquifer type, and hydraulic properties control the hidden half of the freshwater cycle',
  sources: [
    { org: 'USGS', title: 'USGS — Aquifers and Groundwater',                        url: 'https://www.usgs.gov/special-topics/water-science-school/science/aquifers-and-groundwater' },
    { org: 'USGS', title: 'USGS — Principal Aquifers of the United States',         url: 'https://www.usgs.gov/mission-areas/water-resources/science/principal-aquifers-united-states' },
    { org: 'EPA',  title: 'US EPA — Groundwater and Drinking Water',                url: 'https://www.epa.gov/ground-water-and-drinking-water' },
    { org: 'IAH',  title: 'International Association of Hydrogeologists',            url: 'https://iah.org/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Below the water table: how rock porosity, aquifer type, and hydraulic properties control the hidden half of the freshwater cycle',
      body: `Groundwater — water occupying the saturated zone below the water table — is the world\'s largest store of liquid freshwater, comprising about 30.8% of all fresh water (10.6 million km³). It supplies ~50% of global drinking water, ~40% of irrigation water, and sustains baseflow to rivers and lakes during dry periods. Groundwater is stored in and flows through aquifers — geological formations with sufficient porosity and permeability to store and yield significant quantities of water to wells.

Porosity (φ) is the fraction of total rock volume occupied by void space. Total porosity includes all pore space; effective porosity (or specific yield, Sy) is the fraction that actually drains under gravity — relevant for unconfined aquifer storage. Well-sorted coarse sand and gravel have high porosity (~25–40%) and excellent permeability. Fractured crystalline rock (granite, gneiss) has low primary porosity (~1–3%) but can have high secondary porosity through interconnected fractures. Hydraulic conductivity (K) — the ease with which water moves through a medium — ranges from 10⁻¹² m/s for unfractured granite to 10⁻² m/s for well-sorted gravel: a 10-billion-fold range. Transmissivity (T = K × b, where b is saturated aquifer thickness) is the depth-integrated hydraulic conductivity used in well performance calculations.

Aquifer classification by confinement is fundamental to understanding groundwater behaviour. An unconfined (water table) aquifer is directly recharged from the surface; its upper boundary is the water table, which rises and falls in response to recharge and pumping. A confined aquifer is bounded above and below by aquitards (low-permeability layers) and is under pressure greater than atmospheric — an artesian well drilled into a confined aquifer causes water to rise above the top of the aquifer; a flowing artesian well occurs where the pressure head exceeds the ground surface elevation. A semi-confined (leaky) aquifer is bounded by a semi-pervious layer that allows slow vertical leakage.

Karst aquifers — developed in soluble rocks (limestone, dolomite, gypsum) by dissolution along fractures and bedding planes — behave fundamentally differently from porous-media aquifers. Karst conduits (caves, solution channels) transmit water at high velocities (~1–100 m/hr vs. ~0.1–10 m/day for porous media), with turbulent flow and rapid, unpredictable responses to recharge events. The Floridan Aquifer System (Florida and adjacent states), the Edwards Aquifer (Texas), and the Dinaric karst (Balkans) are major karst systems. Contaminants introduced into karst systems can travel 10–100 km in days, making karst springs highly vulnerable to pollution.`,
      keyTerms: [
        {
          term: 'Porosity (φ)',
          def: 'Fraction of rock volume occupied by void space. Total porosity ≠ effective porosity (specific yield) that drains under gravity.',
        },
        {
          term: 'Hydraulic Conductivity (K)',
          def: 'Ease of water flow through a porous medium (m/s). Ranges 10¹⁰× from fractured granite to clean gravel.',
        },
        {
          term: 'Confined Aquifer',
          def: 'Aquifer bounded above by an aquitard; water under pressure greater than atmospheric. Artesian wells tap confined aquifers.',
        },
        {
          term: 'Specific Storage (Ss)',
          def: 'Volume of water released from storage per unit volume of aquifer per unit decline in hydraulic head; reflects elastic compression.',
        },
        {
          term: 'Karst Aquifer',
          def: 'Aquifer in soluble rock (limestone) with solution conduits; turbulent fast-flowing groundwater. Highly vulnerable to contamination.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Aquifer Types and Their Properties',
      body: `Aquifer type determines how groundwater responds to pumping, recharge events, and contamination. Unconfined aquifers respond slowly but store large volumes in thick saturated zones. Confined aquifers respond rapidly (pressure transmission, not drainage) but store less water. Karst aquifers are fast, unpredictable, and pollution-vulnerable.`,
      cards: [
        {
          name: 'Unconfined Aquifer',
          icon: Layers,
          color: BRAND.accent,
          desc: 'Water table is upper boundary; rises/falls with recharge/pumping. Sy = 0.1-0.30 for sand/gravel. Large storage volume.',
          examples: 'High Plains (Ogallala) Aquifer: unconfined, up to 300 m saturated thickness. Supplies 30% of US groundwater used for irrigation.',
        },
        {
          name: 'Confined Aquifer',
          icon: ArrowRight,
          color: BRAND.jade,
          desc: 'Bounded by aquitards; water under artesian pressure. Ss = 10⁻⁴-10⁻⁶ per metre. Rapid pressure response to pumping.',
          examples: 'Great Artesian Basin (Australia): 22 million km² confined aquifer. Natural artesian flow sustained remote pastoral industry since 1880s.',
        },
        {
          name: 'Hydraulic Conductivity',
          icon: Zap,
          color: BRAND.gold,
          desc: 'K (m/s) varies 10¹⁰× from granite (10⁻¹²) to clean gravel (10⁻²). Darcy\'s law: q = -K(dh/dl). Controls well yield.',
          examples: 'Sand aquifer K = 10⁻⁵ m/s; silty sand K = 10⁻⁷ m/s. A 100× reduction in K reduces well yield ~100× at same drawdown.',
        },
        {
          name: 'Karst Aquifer',
          icon: Globe,
          color: BRAND.coral,
          desc: 'Solution conduits in limestone/dolomite. Turbulent flow at 1-100 m/hr. Rapid response; spring discharge varies 1000× in storms.',
          examples: 'Edwards Aquifer, Texas: supplies San Antonio (2 million people). Barton Springs discharge: 0.3-23 m³/s depending on recharge.',
        },
        {
          name: 'Specific Yield vs Ss',
          icon: Activity,
          color: BRAND.amethyst,
          desc: 'Unconfined: Sy (0.05-0.30) = drainage porosity. Confined: Ss (10⁻⁴-10⁻⁶) = elastic storage. Storage coefficient S = Ss × b.',
          examples: 'Pumping 1,000 m³ from unconfined aquifer (Sy=0.2) lowers water table ~5,000 m³/volume. Same from confined aquifer: enormous pressure decline.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Groundwater System: From Recharge to Discharge',
      body: 'How groundwater moves from recharge zones through confined and unconfined aquifers to discharge at springs, rivers, and wells.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how groundwater moves from recharge zones through confined and unconfined aquifers to discharge at springs, rivers, and production wells',
        nodes: [
          {
            id: 'recharge-zone',
            label: 'Recharge Zone',
            description: 'Precipitation infiltrates permeable surface (outcrops, losing streams). Vadose zone transmits water down to the water table. Recharge rates: 1-300 mm/yr depending on climate and geology.',
            color: BRAND.jade,
          },
          {
            id: 'unconfined-aquifer',
            label: 'Unconfined Aquifer',
            description: 'Saturated zone with water table as upper boundary. Phreatic zone: pores fully saturated. Water table rises after recharge events, declines under pumping.',
            color: BRAND.accent,
          },
          {
            id: 'aquitard',
            label: 'Aquitard / Confining Layer',
            description: 'Low-permeability layer (clay, shale) separating aquifers. Can be semi-permeable (leaky aquitard) allowing slow vertical exchange.',
            color: BRAND.gold,
          },
          {
            id: 'confined-aquifer',
            label: 'Confined Aquifer',
            description: 'Bounded above and below by aquitards. Piezometric surface above aquifer top. Artesian conditions where piezometric surface exceeds land surface.',
            color: BRAND.coral,
          },
          {
            id: 'springs-baseflow',
            label: 'Springs & Baseflow',
            description: 'Groundwater discharges to surface where water table intersects topography (springs) or where rivers are gaining reaches. Sustains streamflow during droughts.',
            color: BRAND.ruby,
          },
          {
            id: 'wells',
            label: 'Production Wells',
            description: 'Pump water from aquifer. Cone of depression forms around pumping well. Artesian wells flow without pumping. Over-extraction causes water table decline.',
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'recharge-zone',      to: 'unconfined-aquifer', label: 'Infiltration below water table' },
          { from: 'unconfined-aquifer', to: 'aquitard',           label: 'Downward leakage (slow)' },
          { from: 'aquitard',           to: 'confined-aquifer',   label: 'Reaches confined zone' },
          { from: 'unconfined-aquifer', to: 'springs-baseflow',   label: 'Water table intersects surface' },
          { from: 'confined-aquifer',   to: 'springs-baseflow',   label: 'Artesian discharge at outcrop' },
          { from: 'confined-aquifer',   to: 'wells',              label: 'Artesian or pumped extraction' },
          { from: 'unconfined-aquifer', to: 'wells',              label: 'Pumped extraction' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What is the difference between total porosity and effective porosity (specific yield)?',
          a: [
            'Total porosity is measured in the lab; effective porosity is estimated in the field from well tests',
            'Total porosity includes all void space; effective porosity is the fraction that drains under gravity (excluding water held by capillary and adhesive forces in small pores)',
            'Total porosity applies to unconfined aquifers; effective porosity applies to confined aquifers under artesian pressure',
            'Total porosity decreases with depth due to compaction; effective porosity increases with depth as pressure removes capillary water',
          ],
          correct: 1,
          explain: 'Total porosity is simply the ratio of void space to total rock volume, including pores of all sizes. However, not all pore water drains under gravity when the water table drops — water in very small pores is held by capillary forces against drainage and by adhesion to mineral surfaces. Specific yield (Sy, also called effective porosity or drainable porosity) is the fraction of aquifer volume that releases water under gravity drainage. For well-sorted coarse sand, Sy ≈ 0.25–0.30, close to total porosity. For fine-grained materials, Sy can be much lower than total porosity: fine sand Sy ≈ 0.20, silty clay Sy ≈ 0.05–0.10, even though their total porosity may be 35–50%. Specific yield is the quantity used when calculating how much an unconfined water table drops per unit of water extracted.',
        },
        {
          q: 'What makes a confined aquifer "artesian" and what conditions create a flowing artesian well?',
          a: [
            'A confined aquifer is artesian when its recharge zone is at a higher elevation than the pumping well, creating hydraulic pressure; flowing artesian wells occur when this pressure head exceeds the ground surface elevation at the well',
            'A confined aquifer is artesian when it is completely sealed with no connection to the surface; flowing artesian wells require pressurised gas pockets above the water',
            'An artesian condition develops only in tropical climates where heavy rainfall creates enough hydrostatic pressure to push water upward through the confining layer',
            'Artesian conditions require the aquifer to be at least 1,000 m below the surface; shallower confined aquifers cannot develop artesian pressure',
          ],
          correct: 0,
          explain: 'Confined aquifers are bounded above and below by low-permeability layers (aquitards). Recharge occurs where the aquifer outcrops at the surface, often in a topographically elevated area. The hydraulic head (energy level) in the confined aquifer is set by the elevation of the recharge zone — this creates the potentiometric surface, an imaginary surface representing where water would stand in tightly cased wells. When the potentiometric surface is above the top of the aquifer, the water is under positive pressure (artesian condition). When the potentiometric surface rises above the land surface at a well location, water flows freely from the well without pumping — a flowing artesian well. The Great Artesian Basin of Australia, one of the world\'s largest and deepest artesian basins, has sustained pastoral activities in arid Australia since the 1880s through naturally flowing wells.',
        },
        {
          q: 'Why are karst aquifers more vulnerable to contamination than porous-media aquifers of similar size?',
          a: [
            'Karst aquifers have lower hydraulic conductivity, causing contaminants to accumulate rather than flush out',
            'Karst conduits transmit water at very high velocities (metres per hour to kilometres per day), so contaminants travel rapidly over long distances with little natural attenuation',
            'Karst aquifers have higher mineralogy, which chemically deactivates contaminants and makes them more persistent',
            'Karst aquifers are shallower than porous-media aquifers, so surface contamination reaches them more quickly',
          ],
          correct: 1,
          explain: 'In a conventional porous-media aquifer (sand, gravel), groundwater moves slowly through tiny pores (centimetres to metres per day) and the large surface area of grains provides extensive contact for natural attenuation processes: sorption of contaminants onto mineral surfaces, biodegradation by microbial communities, and dilution over long flow paths. In karst aquifers, solution conduits (essentially underground rivers) carry water at velocities of 1–100 m/hr, bypassing the filtering and attenuation of the rock matrix entirely. Contaminants introduced at a sinkhole or losing stream can appear at a spring 10–100 km away within hours to days. This is why dye-tracing studies in karst routinely demonstrate rapid, direct connections between input points and springs, and why spring water in karst regions often shows rapid turbidity increases after storm events.',
        },
        {
          q: 'What is hydraulic conductivity (K) and how many orders of magnitude does it vary across natural geological materials?',
          a: [
            'K is the rate of water-table decline under pumping; it varies by about 3 orders of magnitude across geological materials',
            'K is the ease of water flow through a porous medium (m/s); it varies about 10 billion-fold (10¹⁰×) from unfractured crystalline rock to clean gravel',
            'K is the ratio of saturated to unsaturated water content; it varies by 2-3 orders of magnitude in most sedimentary aquifers',
            'K is the recharge rate to an aquifer (m/yr); it varies by about 5 orders of magnitude from desert (0.1 mm/yr) to humid tropics (500 mm/yr)',
          ],
          correct: 1,
          explain: 'Hydraulic conductivity (K) quantifies how easily water flows through a material, combining the effects of grain size, sorting, pore connectivity, and fluid viscosity. It is used in Darcy\'s law: q = -K × dh/dl (Darcy flux = K × hydraulic gradient). K spans roughly 10 orders of magnitude (10¹⁰×): unfractured granite/shale: ~10⁻¹² m/s; silty clay: ~10⁻⁹ m/s; silty sand: ~10⁻⁶ m/s; clean sand: ~10⁻⁵ to 10⁻⁴ m/s; clean gravel: ~10⁻² m/s; karst conduits (equivalent K): ~10⁻¹ m/s and higher. This extraordinary range — greater than for almost any other physical rock property — explains why groundwater well yields in different geological settings differ by equally dramatic factors: a well in gravel may yield 10,000× more water than an identical well in silty clay.',
        },
        {
          q: 'Groundwater provides approximately what fraction of global drinking water, and which type of aquifer system stores the most water?',
          a: [
            'About 10%; deep confined aquifers under major continental sedimentary basins hold most groundwater',
            'About 50%; unconsolidated alluvial and sedimentary aquifers in major river basins store the largest volumes of accessible groundwater',
            'About 90%; most of the world relies exclusively on groundwater because surface water is too polluted for direct use',
            'About 25%; glacial aquifers formed during the last ice age contain most of the world\'s fresh groundwater',
          ],
          correct: 1,
          explain: 'Groundwater supplies approximately 50% of global drinking water (ranging from ~25% in developed nations with diversified supply to >90% in many developing nations without surface water treatment infrastructure). The largest volumes of accessible groundwater are stored in major unconsolidated sedimentary aquifer systems: alluvial valley fill along major river systems, coastal plain sedimentary sequences (Atlantic Coastal Plain aquifers), and continental interior sedimentary basins (High Plains Ogallala Aquifer, Paris Basin, North Africa\'s Nubian Sandstone, Arabian Peninsula aquifers). Unconsolidated sand and gravel aquifers dominate both volume and extraction because their high hydraulic conductivity allows wells to yield large quantities of water with modest drawdown.',
        },
      ],
    },
  ],
}

export default aquifersGroundwater
