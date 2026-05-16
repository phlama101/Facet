import { Waves, Thermometer, Globe } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const oceanDensityStructure: Lesson = {
  id: 'ocea-101-1-2-2',
  title: 'Temperature, Density, and Ocean Structure',
  track: 'oce',
  trackName: 'Oceanography',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 150,
  description: "The ocean is not a uniform body of water. Temperature and salinity create layers that barely mix — driving a global circulation system that distributes heat, oxygen, and nutrients around the planet.",
  sources: [
    { org: 'NOAA',     title: 'Ocean Temperature and Density Structure',                 url: 'https://oceanservice.noaa.gov/education/tutorial_currents/04thermohaline1.html' },
    { org: 'NOAA',     title: 'How does ocean temperature affect climate?',               url: 'https://oceanservice.noaa.gov/facts/oceantempclimate.html' },
    { org: 'OpenStax', title: 'Introduction to Oceanography, Ch. 7 (CC-BY 4.0)',          url: 'https://openstax.org/books/introduction-oceanography' },
    { org: 'NASA',     title: 'Ocean Surface Temperature — Argo Float Programme',        url: 'https://argo.ucsd.edu/' },
    { org: 'WHOI',     title: 'Deep Ocean Structure and Thermohaline Circulation',       url: 'https://www.whoi.edu/ocean/circulation/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'A layered ocean',
      body: `Drop an ice cube into a glass of warm water and watch. The cold water melting from the ice sinks to the bottom; warm water at the top stays at the top. The same principle governs the structure of the entire ocean. Water density — the mass per unit volume — is controlled primarily by temperature (cold water is denser) and secondarily by salinity (saltier water is denser). In the ocean, these density differences create layering that is extraordinarily stable and resists vertical mixing. Water that formed at the surface under cold, salty conditions thousands of years ago can still be found at depth, essentially unchanged, because there is no physical mechanism powerful enough to mix it back to the surface against the density gradient.

This layered structure has profound consequences. The bottom 75% of the ocean volume — the **deep ocean** — is almost completely isolated from the surface. It is cold (1–4°C everywhere), dark, and its water was last in contact with the atmosphere somewhere between a few hundred and about 1,000 years ago. The oxygen dissolved in deep water was added at the surface long ago; once consumed by organisms decomposing organic material, it is not replenished until that water eventually upwells somewhere. The nutrients in deep water, similarly, accumulate from remineralisation of sinking particles and are only returned to productive surface waters by upwelling. The vertical structure of the ocean — the **water column** — is therefore the primary control on ocean productivity, gas exchange, and the cycling of nutrients and carbon.

Understanding the vertical structure of the ocean has become urgently important in the context of climate change. The ocean absorbs over 90% of the excess heat trapped by greenhouse gases, and this heat is distributed through the water column in ways that determine how quickly surface temperatures rise, how much heat eventually reaches deep water, and how ocean circulation patterns might change as the planet warms.`,
      keyTerms: [
        {
          term: 'Thermocline',
          def: 'A layer in the ocean characterised by a rapid decrease in temperature with depth, separating the warm, sunlit surface mixed layer from the cold, dark deep ocean. In tropical and subtropical regions, the permanent thermocline lies at 200–1,000 m depth. In polar regions, the thermocline is weak or absent because the surface water is as cold as the deep water.',
        },
        {
          term: 'Pycnocline',
          def: 'A layer of rapid change in water density with depth. Usually co-located with the thermocline in most of the ocean (since temperature is the dominant control on density), but can reflect salinity changes in some regions. A strong pycnocline acts as a physical barrier that prevents vertical mixing between surface and deep water.',
        },
        {
          term: 'Mixed layer',
          def: 'The uppermost layer of the ocean, typically 20–200 m thick, where wind-driven turbulence and convection homogenise temperature and salinity. Temperature, salinity, and density are nearly uniform throughout this layer. Its depth varies seasonally: deeper in winter (strong winds, surface cooling) and shallower in summer (surface warming stratifies the water).',
        },
        {
          term: 'Thermohaline circulation',
          def: 'The large-scale ocean circulation driven by density differences created by temperature (thermo) and salinity (haline) variations. Cold, salty water in polar regions sinks to the deep ocean and slowly spreads through the ocean basins; it is eventually warmed and upwells elsewhere. The global thermohaline circulation (often called the ocean conveyor belt) moves water around the world on timescales of ~1,000 years.',
        },
        {
          term: 'Deep water formation',
          def: 'The process by which surface water becomes dense enough to sink to the deep ocean. Occurs primarily in the North Atlantic (North Atlantic Deep Water, NADW) and around Antarctica (Antarctic Bottom Water, AABW). Requires a combination of cold temperatures and high salinity. Deep water formation is the "sinking" arm of thermohaline circulation and the primary mechanism for ventilating the deep ocean with oxygen.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Water masses, vertical structure, and the thermohaline conveyor',
      body: `**Three-layer structure of the ocean.** Oceanographers conventionally divide the water column into three layers. The **surface ocean** (epipelagic zone, 0–200 m) is warmed by sunlight, stirred by wind, and in active exchange with the atmosphere for heat, gases, and moisture. Its temperature varies enormously by latitude and season: surface water in the tropics reaches 28–30°C; in the polar regions, surface water can be at or below 0°C (seawater freezes at about −1.8°C, lower than freshwater due to its salt content). The **thermocline** (mesopelagic zone, approximately 200–1,000 m) is the transition zone where temperature drops sharply from surface values to near-bottom temperatures of 2–4°C. Below 1,000 m, the **deep ocean** (bathypelagic zone to hadopelagic) is uniformly cold, with temperatures from 0–4°C and very little variation with depth or location. This three-layer structure is most pronounced in tropical and mid-latitude regions; in polar regions, the surface water is as cold as the deep ocean and the stratification is weak.

**Equation of state: how temperature and salinity control density.** Seawater density is primarily a function of temperature, salinity, and pressure (depth). Temperature has the strongest effect: water density increases as temperature decreases. Near 4°C, freshwater has its maximum density; seawater behaves similarly but the maximum density occurs below the freezing point. Salinity also increases density: a 1 PSU increase in salinity increases density by approximately 0.8 kg/m³. These two effects combine to produce the density of a water mass. In the ocean, the relationship is captured by the **equation of state of seawater** — a complex empirical function that specifies density as a function of temperature, salinity, and pressure. The concept of **potential density** (density corrected for compression due to pressure) is used to compare water masses at different depths.

**Water masses.** A **water mass** is a body of ocean water with a characteristic temperature–salinity combination that records where and when it descended from the surface; because this signature persists for centuries, water masses act as tracers of deep circulation. The deep ocean is filled by identifiable water masses with distinct temperature-salinity (T-S) combinations that were set when the water was last at the surface. Each water mass is like a label tracking where and when that water subducted into the interior. The two most important are **North Atlantic Deep Water (NADW)** and **Antarctic Bottom Water (AABW)**. NADW forms in the North Atlantic (especially the Labrador Sea and the Nordic Seas north of the Greenland-Scotland Ridge), where warm, salty Gulf Stream water cools in winter, becomes dense, and sinks to depths of 1,000–3,500 m. It spreads southward through the Atlantic at these depths, and its oxygen content (relatively high, since it has recently been at the surface) is the reason the deep North Atlantic is generally better oxygenated than the deep Pacific. AABW is even colder and denser — formed around Antarctica where sea ice formation (which rejects salt into the underlying water, increasing its salinity) and extremely cold air temperatures combine to produce the densest water in the ocean. AABW sinks to the ocean bottom (>3,500 m) and spreads through all the major ocean basins, filling the abyssal depths. It can be identified by its characteristic temperature (near 0°C) and slightly higher salinity compared to overlying water.

**Thermohaline circulation: the global conveyor.** The sinking of cold, dense water in polar regions and its slow spread through the deep ocean drives the **thermohaline circulation** — sometimes called the ocean conveyor belt (a useful but oversimplified analogy). The classic picture: warm surface water flows poleward (the Gulf Stream in the North Atlantic, for example, carrying warm tropical water to Northwestern Europe), cools and sinks to become NADW, flows southward at depth through the Atlantic, eventually upwells in the Southern Ocean and Indo-Pacific, and returns as surface flow to complete the loop. The full circuit takes approximately 1,000 years — a single parcel of water that sinks as NADW today will not return to the Atlantic surface for a millennium.

The thermohaline circulation has enormous climatic importance. The northward transport of warm water by the Gulf Stream and North Atlantic Current is responsible for Northwestern Europe being significantly warmer than equivalent latitudes in North America. London (51°N) rarely experiences temperatures below −10°C; Calgary at the same latitude in Canada regularly reaches −30°C. This heat transport depends on the sinking of water in the North Atlantic. If global warming increases Arctic freshwater input (from melting ice sheets and enhanced precipitation), the resulting freshening of surface water would reduce its density and potentially slow or disrupt deep water formation — weakening the **Atlantic Meridional Overturning Circulation (AMOC)** and cooling Northwestern Europe even as the rest of the world warms.

**Seasonal thermocline.** Even in the tropics, the thermocline and mixed layer depth vary seasonally. In summer, surface heating creates a shallow, warm mixed layer capped by a strong seasonal thermocline. In winter, surface cooling destroys stratification, deepening the mixed layer as convection mixes surface and deeper water. This seasonal cycle is critical for productivity: in summer, the mixed layer is isolated from nutrients below the thermocline; in winter, deep mixing replenishes surface nutrients, setting up the spring phytoplankton bloom as light returns.

**Oxygen minimum zones.** Between approximately 200 and 1,000 m depth in many parts of the ocean, there is a pronounced **oxygen minimum zone (OMZ)** — a layer where dissolved oxygen falls to very low levels (less than 20 μmol/kg) or even to hypoxic/anoxic conditions. OMZs form because bacterial decomposition of sinking organic matter consumes oxygen faster than physical mixing can replenish it. The OMZ is too deep to be ventilated from the surface (the pycnocline blocks mixing) and too shallow to receive the well-oxygenated AABW from below. OMZs are expanding as ocean warming reduces oxygen solubility and stratification increases. They represent a major challenge for marine life, compressing the habitable water column and stressing organisms that cannot tolerate low oxygen.`,
      cards: [
        {
          name: 'Three-Layer Structure',
          icon: Waves,
          color: BRAND.accent,
          desc: 'Surface layer (0–200 m): warm, well-mixed, sunlit, temperature varies by latitude. Thermocline (200–1,000 m): rapid temperature drop (warm to cold); acts as barrier to mixing. Deep ocean (>1,000 m): cold (0–4°C), dark, uniform, nearly homogenous. Structure most pronounced at low latitudes; absent at poles where surface = deep temperatures. Seasonal thermocline develops in summer everywhere except polar regions.',
          examples: 'Tropical surface: 28–30°C · Below thermocline: 2–4°C (same in tropics as poles) · Mixed layer depth: 20 m (tropical summer) to 200 m (N Atlantic winter)',
        },
        {
          name: 'Water Masses',
          icon: Globe,
          color: BRAND.jade,
          desc: 'AABW (Antarctic Bottom Water): coldest, densest (~0°C, ~34.7 PSU); fills ocean below 3,500 m; formed off Weddell Sea and Ross Sea by brine rejection during sea ice formation. NADW (N Atlantic Deep Water): 2–4°C, 34.9 PSU; formed in Labrador Sea and Nordic Seas; better oxygenated than Pacific deep water. Identified on T-S diagrams by their characteristic temperature-salinity signatures.',
          examples: 'AABW formation: sea ice forms → brine rejection → surface water becomes dense → sinks · NADW: occupies 1,000–3,500 m in N Atlantic · Pacific deep water: older, more depleted in O₂, enriched in nutrients',
        },
        {
          name: 'AMOC & Climate',
          icon: Thermometer,
          color: BRAND.gold,
          desc: 'AMOC (Atlantic Meridional Overturning Circulation): northward warm surface flow, southward cold deep flow. Transports ~1.3 PW of heat poleward in N Atlantic (≈ 35% of total northward heat transport). Keeps NW Europe ~5–10°C warmer than same-latitude locations. Weakening detected since ~2000; linked to Arctic freshwater input from melting Greenland ice sheet. Model projections: 20–40% weakening by 2100 under high emissions.',
          examples: 'Gulf Stream: 30 Sv transport (30 million m³/s) · London: avg Jan 5°C; Newfoundland at same latitude: avg Jan −8°C · AMOC weakening: palaeoclimate evidence shows abrupt shutdowns during ice ages (Younger Dryas)',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'In the deep ocean below 1,000 m depth, temperature is nearly uniform at 2–4°C regardless of latitude — tropical deep water and polar deep water are at the same temperature. What process explains this uniformity, and why does deep water have similar temperatures worldwide?',
          a: [
            'The geothermal heat from the seafloor warms deep water to a uniform temperature; the volcanic activity at mid-ocean ridges maintains a consistent heat source that prevents the deep ocean from cooling below 2°C in any region',
            'Deep ocean water is isolated from sunlight and is therefore not affected by the surface temperature differences between tropical and polar regions; uniform temperature results from the complete absence of any heat source in the deep ocean',
            'Deep ocean water was formed at high latitudes (polar regions) where surface water cooled to near-freezing and sank; this cold, dense water spreads through all ocean basins via thermohaline circulation, filling the deep ocean with water that originated from polar surface conditions; deep water is cold and uniform because all of it was cold at the surface when it formed',
            'Pressure compresses water molecules at depth, releasing compression heat that raises the temperature uniformly to about 4°C in all deep ocean basins regardless of latitude',
          ],
          correct: 2,
          explain: 'Geothermal heat from mid-ocean ridges (A) does add a tiny amount of heat to bottom water, but this is negligible — it warms water by approximately 0.001°C over the average ridge system; it cannot maintain a globally uniform temperature. Complete absence of heat sources (B) is incorrect — geothermal heat does exist; and if the deep ocean were simply isolated with no heat input, temperatures would vary depending on when and where the water formed. Pressure compression (D) does affect temperature slightly (adiabatic lapse rate of about 0.1°C per 1,000 m in seawater), but this is a minor effect and does not cause uniform 2–4°C temperatures globally. The correct answer is C: the deep ocean is filled by water that sank from the surface in polar regions — North Atlantic Deep Water forms in the North Atlantic as Gulf Stream water cools and sinks, and Antarctic Bottom Water forms around Antarctica; both source regions produce water at near-polar surface temperatures (0–4°C); this cold water spreads through the Atlantic, Pacific, and Indian Ocean basins via thermohaline circulation; because the deep ocean is uniformly filled from these same cold polar sources, its temperature is nearly uniform worldwide; the deep Pacific is slightly colder on average than the deep Atlantic because AABW (formed at near 0°C) is denser and fills the Pacific bottom, while slightly warmer NADW (~2–4°C) fills the Atlantic.',
        },
        {
          q: "Why is there an oxygen minimum zone (OMZ) at intermediate depths (200–1,000 m) in the ocean, and why don't the much shallower mixed layer or the very deep water share this oxygen depletion?",
          a: [
            'The OMZ exists because decomposing organic matter releases toxic chemicals at these depths that poison and kill oxygen-releasing phytoplankton; the mixed layer and deep water are unaffected because phytoplankton live above the OMZ and deep water is too cold for decomposition to occur',
            'The OMZ is caused by the concentration of oxygen-consuming animal respiration in the mesopelagic zone, where zooplankton and fish congregate; the deep ocean has less biomass, and the surface mixed layer is replenished by wave action',
            'At intermediate depths, bacterial decomposition of sinking organic matter consumes oxygen faster than physical ventilation can replenish it; the surface mixed layer is replenished constantly by gas exchange with the atmosphere, and the deep ocean is periodically ventilated by sinking dense polar water, but the intermediate depths are sandwiched between these renewal mechanisms and receive neither',
            'The OMZ forms because iron and manganese precipitating from hydrothermal vents at mid-ocean ridges chemically strip oxygen from seawater at specific depth horizons; the mixed layer and deep water are unaffected because the precipitation occurs only within a narrow depth range',
          ],
          correct: 2,
          explain: 'Toxic chemical release from decomposition (A) does not describe the formation of OMZs — bacterial decomposition produces CO₂ and consumes O₂ but does not release oxygen-poisoning toxins that affect phytoplankton. Concentrated animal respiration (B) does occur in the mesopelagic zone and contributes to oxygen consumption, but it is not the dominant mechanism; bacterial decomposition of sinking particles is the primary oxygen consumer, and the deep ocean does have significant biological activity (lower biomass but still present). Hydrothermal iron/manganese precipitation (D) does not occur at oxygen-consuming rates across broad depth horizons — hydrothermal activity is concentrated near ridges, not globally distributed at specific depths. The correct answer is C: the OMZ is a balance between oxygen supply and oxygen demand at intermediate depths; at the surface, the mixed layer is in direct contact with the atmosphere, so O₂ evaporates into or dissolves from the air continuously — even at low concentrations, gas exchange quickly replenishes oxygen; in the deep ocean, cold, well-oxygenated water formed in polar regions (NADW, AABW) periodically fills the deep basins from below, maintaining some oxygen level; but the intermediate depths (200–1,000 m) are below the reach of surface gas exchange and above the reach of deep ventilation — they receive only the oxygen initially dissolved when the water was last at the surface (which was consumed during its descent) and are continuously depleted by bacterial decomposition of the large flux of organic particles raining down from productive surface waters.',
        },
        {
          q: "The Atlantic Meridional Overturning Circulation (AMOC) is driven by the sinking of cold, salty water in the North Atlantic. How might accelerated melting of the Greenland ice sheet weaken or disrupt this circulation?",
          a: [
            'Melting of the Greenland ice sheet would lower sea level in the North Atlantic, allowing more warm tropical water to enter, which would heat the surface too much for deep water formation to occur',
            'Meltwater from Greenland is cold and therefore denser than existing North Atlantic surface water; this additional dense water would enhance rather than weaken AMOC by providing more water for sinking',
            'Greenland meltwater is fresh (low salinity) and therefore less dense than the salty North Atlantic surface water; the freshwater influx would reduce surface salinity and density in the North Atlantic, inhibiting the sinking of surface water and weakening the deep water formation that drives AMOC',
            "Greenland meltwater would increase the total volume of water in the North Atlantic, diluting the nutrients available for phytoplankton; reduced biological productivity would lower the ocean's ability to pump carbon downward, indirectly weakening the density-driven circulation",
          ],
          correct: 2,
          explain: 'Sea level changes from ice melt (A) are global and would not selectively raise North Atlantic temperatures enough to stop deep water formation; the mechanism proposed is not how AMOC works. Cold meltwater enhancing AMOC (B) is incorrect — although the meltwater is cold, it is fresh; the critical factor for sinking is density, which depends on both temperature and salinity; cold but fresh (low-density) water is less dense than cold and salty water; the salinity reduction outweighs the temperature effect. Nutrient dilution (D) is a secondary effect at best — biological productivity does influence carbon cycling, but it is not the primary mechanism for deep water formation; AMOC is driven by density, not biological productivity. The correct answer is C: deep water formation in the North Atlantic depends on water reaching high enough density to sink; the key process is that warm, salty Gulf Stream water flows north, loses heat to the atmosphere, and becomes cold and dense; but it remains salty (high salinity keeps it dense even as it cools); the addition of large volumes of freshwater (low salinity) from melting Greenland ice would reduce the salinity — and therefore the density — of North Atlantic surface water; if surface water is not dense enough to sink, deep water formation weakens, the northward transport of warm water decreases, and AMOC slows; this is exactly what palaeoclimate evidence from the Younger Dryas (~12,900–11,700 years ago) suggests happened when North American meltwater drained into the North Atlantic and temporarily shut down AMOC.',
        },
        {
          q: 'Oxygen minimum zones (OMZs) are expanding in extent and intensity under current ocean warming. Which two physical consequences of warming directly cause this expansion, and how do they act on oxygen concentrations?',
          a: [
            'Warming increases volcanic activity on the seafloor, which releases CO₂ that chemically displaces dissolved oxygen; and warmer water is denser, causing it to sink faster and carry oxygen out of the OMZ depth range',
            'Warmer water holds less dissolved oxygen (lower solubility), so the initial oxygen content of surface water that subducts is lower; and increased stratification from surface warming reduces vertical mixing, slowing the delivery of oxygenated water to intermediate depths and trapping OMZ water in place longer',
            'Higher sea-surface temperatures increase evaporation, which raises salinity and density, causing more rapid sinking that consumes oxygen faster; and warmer deep water accelerates bacterial decomposition rates in the OMZ, consuming oxygen more quickly',
            'Warming causes coral bleaching, which releases large quantities of organic matter that sinks into the OMZ and is decomposed by bacteria, consuming oxygen; the reduced coral cover also lowers photosynthetic oxygen production in coastal areas adjacent to OMZs',
          ],
          correct: 1,
          explain: 'Seafloor volcanic CO₂ displacing oxygen (A) is not a recognised mechanism for OMZ expansion; volcanic CO₂ venting is localised near ridges and vent fields and cannot explain basin-wide OMZ changes; and warmer water is less dense, not more dense, so the second part of A is also incorrect. Salinity-driven rapid sinking (C) is partly backwards — increased surface evaporation in some regions does raise salinity but the dominant effect of warming on ocean stratification is increased temperature contrast, not salinity-driven enhanced sinking; also, bacterial decomposition rates do increase with temperature, which is a real but secondary effect not included in C correctly. Coral bleaching driving OMZ expansion (D) is too localised and indirect to explain the broad, basin-wide expansion of OMZs; while reef organic matter does decompose, it is concentrated in shallow coastal areas and does not drive OMZ formation at 200–1,000 m depth across ocean basins. The correct answer is B: oxygen solubility in water decreases as temperature rises — warm water simply cannot hold as much dissolved gas as cold water; this means that as the surface ocean warms, the water that eventually subducts carries less oxygen than it did historically; simultaneously, global warming strengthens the density contrast between the warm surface layer and the cold deep ocean, increasing stratification and reducing vertical mixing; the pycnocline acts as a stronger barrier to downward oxygen transport; the result is a double blow to OMZs — less oxygen added by subduction and less replenishment by mixing — causing their boundaries to expand vertically and horizontally.',
        },
      ],
    },
  ],
}

export default oceanDensityStructure
