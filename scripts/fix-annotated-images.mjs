/**
 * Replaces Wikimedia image srcs in all annotated-image interactions
 * with locally-hosted SVG files in /public/visuals/.
 * Each discipline gets a single canonical SVG with 5 carefully-placed annotations.
 */

import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const LESSONS_DIR = resolve(process.cwd(), 'src/lessons')

// ─── Per-discipline annotation configs ────────────────────────────────────────

const CONFIGS = {
  // abio-101-1-1-* → Alkaline hydrothermal vent SVG
  abio: {
    src: '/visuals/abio.svg',
    alt: 'Alkaline hydrothermal vent cross-section showing vent chimneys, microbial mats, micropores, RNA/protocell, and proton gradient',
    aspectRatio: '16/9',
    credit: 'Facet Earth Sciences',
    annotations: [
      { id: 'vent-chimney', x: 44, y: 47, label: 'Alkaline Vent Chimney', description: 'Towering structures of carbonate and brucite minerals precipitated where alkaline vent fluid contacts cold seawater. Lost City chimneys reach 60 m tall. Their porous interiors contain cell-sized micropores where organic chemistry can concentrate, and their iron-sulfide walls can catalyse reactions relevant to the origin of life. Fluid temperatures here are 40–90°C — cool enough for fragile RNA chemistry.' },
      { id: 'fluid-plume', x: 34, y: 22, label: 'Alkaline Fluid Plume', description: 'Hydrogen-rich, alkaline (pH 9–11) fluid produced by serpentinisation — the exothermic reaction of seawater with ultramafic mantle rocks (peridotite). This reaction produces H₂ gas as a chemical energy source and raises the pH dramatically, creating a proton gradient across the thin mineral membranes that separate vent fluid from the mildly acidic (pH ~5–6) early ocean water.' },
      { id: 'microbial-mats', x: 37, y: 82, label: 'Microbial Mats', description: 'Dense communities of chemolithotrophic microorganisms that form visible mats on the seafloor around hydrothermal vents. These organisms obtain energy not from sunlight but from chemical reactions — oxidising H₂, methane, or sulfide compounds. Chemolithotrophs are thought to be among the most ancient life forms and may closely resemble the earliest cells that evolved at similar alkaline vents.' },
      { id: 'micropores', x: 43, y: 60, label: 'Iron-Sulfide Micropores', description: 'Tiny cell-sized cavities (micrometres across) in iron-sulfide mineral matrices within vent chimney walls. These natural micro-reactors concentrate organic molecules, maintain pH gradients, and provide catalytic surfaces. The \'iron-sulfur world\' hypothesis proposes that these surfaces drove the first metabolic chemistry before true lipid-membrane cells evolved.' },
      { id: 'rna-protocell', x: 26, y: 44, label: 'RNA / Protocell', description: 'Self-replicating RNA molecules and fatty-acid vesicles (protocells) floating in the alkaline vent water represent key stages in the transition from chemistry to biology. RNA is the only known molecule that can both store genetic information and catalyse chemical reactions. Fatty acid vesicles spontaneously form closed bilayer membranes in water and can encapsulate RNA — a model for the first cells.' },
    ],
  },

  // astr-101-1-1-* → Solar system SVG
  astr: {
    src: '/visuals/ast.svg',
    alt: 'Schematic diagram of the solar system showing the Sun, inner planets, asteroid belt, Jupiter, Saturn, and Uranus',
    aspectRatio: '16/9',
    credit: 'Facet Earth Sciences',
    annotations: [
      { id: 'sun', x: 8, y: 50, label: 'The Sun', description: 'The Sun contains 99.86% of the solar system\'s total mass and provides virtually all the energy that drives planetary climates, geology, and biology. Its core temperature reaches 15 million°C, where nuclear fusion converts hydrogen into helium at ~620 million tonnes per second, releasing the energy that has sustained life on Earth for 4.5 billion years.' },
      { id: 'earth', x: 44, y: 50, label: 'Earth', description: 'The third planet from the Sun, at 1 AU (149.6 million km), orbiting in the habitable zone where liquid water can exist on the surface. Earth is the only known world with abundant liquid water, a breathable oxygen atmosphere, plate tectonics, and confirmed life. Its large Moon stabilises Earth\'s axial tilt, helping maintain relatively stable climate conditions over geological timescales.' },
      { id: 'asteroid-belt', x: 52, y: 40, label: 'Asteroid Belt', description: 'A region of rocky and metallic debris between Mars and Jupiter, containing millions of asteroids ranging from dust particles to the 940-km dwarf planet Ceres. Jupiter\'s gravity prevented this material from accreting into a planet. Carbonaceous chondrite meteorites from the asteroid belt contain amino acids and water, providing clues to the early solar system\'s organic chemistry.' },
      { id: 'jupiter', x: 67, y: 50, label: 'Jupiter', description: 'The largest planet (318 Earth masses), a gas giant of hydrogen and helium with no solid surface. Jupiter\'s powerful gravity acts as the solar system\'s gravitational shield, deflecting or capturing many comets and asteroids. Its moon Europa harbours a subsurface ocean beneath an ice shell and is considered a prime candidate for extraterrestrial life in our solar system.' },
      { id: 'saturn', x: 82, y: 50, label: 'Saturn & Rings', description: 'The sixth planet, famous for its spectacular ring system of ice and rock particles. Saturn is the least dense planet (density 0.69 g/cm³ — less than water). Its moon Titan has a thick nitrogen atmosphere and hydrocarbon lakes, while Enceladus erupts water ice from subsurface oceans — making both moons targets in the search for habitable environments.' },
    ],
  },

  // atmo-101-1-1-* → Atmospheric layers SVG
  atmo: {
    src: '/visuals/atm.svg',
    alt: 'Diagram of Earth\'s atmospheric layers from the troposphere through the thermosphere with temperature profile and key altitude markers',
    aspectRatio: '16/9',
    credit: 'Facet Earth Sciences',
    annotations: [
      { id: 'troposphere', x: 50, y: 80, label: 'Troposphere', description: 'The lowest atmospheric layer (0–12 km) containing 75% of Earth\'s atmospheric mass and virtually all its water vapour. Temperature decreases with altitude at ~6.5°C/km. All weather phenomena — clouds, rain, storms, wind — occur exclusively in the troposphere. Commercial aircraft cruise near the tropopause at ~10–12 km to minimise air resistance and turbulence.' },
      { id: 'stratosphere', x: 50, y: 58, label: 'Stratosphere', description: 'Extending from 12–50 km altitude, the stratosphere is characterised by temperature inversion: temperature rises with altitude because ozone absorbs UV radiation and warms the air. This stable temperature profile suppresses vertical mixing (convection), giving the stratosphere its name (stratified = layered) and allowing ozone to accumulate in a persistent layer.' },
      { id: 'ozone-layer', x: 74, y: 62, label: 'Ozone Layer', description: 'Concentrated at 15–35 km in the lower stratosphere, the ozone (O₃) layer absorbs 97–99% of the Sun\'s harmful UV-B and UV-C radiation. Without it, surface UV levels would destroy DNA and prevent most terrestrial life. Ozone depletion by chlorofluorocarbons (CFCs) created the Antarctic \'ozone hole\' detected in the 1980s; the 1987 Montreal Protocol has since produced measurable recovery.' },
      { id: 'mesosphere', x: 50, y: 38, label: 'Mesosphere', description: 'From 50–85 km altitude, the mesosphere is the coldest region of the atmosphere (temperatures as low as −90°C at the mesopause). Most meteors burn up here as friction with the increasingly dense air vaporises them. Noctilucent clouds — the highest clouds on Earth, composed of ice crystals — form near the mesopause and are visible after sunset from high latitudes.' },
      { id: 'thermosphere', x: 50, y: 18, label: 'Thermosphere', description: 'Above 85 km, the extremely tenuous thermosphere absorbs high-energy X-ray and UV radiation, heating to 500–2,000°C (though air density is so low that objects feel cold). The International Space Station orbits in the thermosphere at ~400 km altitude. Auroras borealis and australis are produced here when energetic solar wind particles excite atmospheric gas molecules.' },
    ],
  },

  // clim-101-1-1-* → Greenhouse effect SVG
  clim: {
    src: '/visuals/cli.svg',
    alt: 'Diagram of the greenhouse effect showing the Sun, incoming solar radiation, atmospheric greenhouse gases, infrared re-emission, and back-radiation warming Earth\'s surface',
    aspectRatio: '16/9',
    credit: 'Facet Earth Sciences',
    annotations: [
      { id: 'solar-input', x: 11, y: 16, label: 'Solar Radiation', description: 'The Sun delivers ~1,361 W/m² of electromagnetic energy to Earth\'s outer atmosphere (the solar constant). About 30% is immediately reflected to space by clouds, ice, and bright surfaces (the albedo effect). The remaining 70% is absorbed by the atmosphere, land, and oceans, heating the planet and driving all weather systems, ocean circulation, and the water cycle.' },
      { id: 'greenhouse-gases', x: 40, y: 55, label: 'Greenhouse Gases', description: 'Carbon dioxide (CO₂), methane (CH₄), nitrous oxide (N₂O), and water vapour (H₂O) are the principal greenhouse gases. Their molecular structure allows them to absorb and re-emit infrared (heat) radiation that Earth\'s surface radiates upward, trapping heat that would otherwise escape to space. Without any greenhouse effect, Earth\'s average temperature would be −18°C rather than +15°C.' },
      { id: 'infrared-emission', x: 53, y: 67, label: 'Infrared Re-emission', description: 'Earth\'s surface absorbs solar radiation, warms up, and radiates energy back upward as infrared (heat) radiation — longer wavelengths invisible to human eyes. This is fundamentally different from the short-wavelength sunlight that arrived: the atmosphere is largely transparent to incoming shortwave solar radiation but absorbs and re-emits the outgoing longwave infrared, creating the greenhouse warming effect.' },
      { id: 'back-radiation', x: 63, y: 71, label: 'Back-Radiation', description: 'Greenhouse gases absorb upward-moving infrared radiation and re-emit it in all directions — including back down toward the surface. This \'back-radiation\' provides an additional heat flux to Earth\'s surface (around 333 W/m² on average). Increasing greenhouse gas concentrations intensify this back-radiation flux, driving the global warming observed since industrialisation.' },
      { id: 'earth-surface', x: 80, y: 84, label: 'Earth\'s Surface', description: 'Land and ocean surfaces absorb 70% of incoming solar radiation, warming and radiating heat upward. Oceans cover 71% of Earth and act as a massive heat reservoir, moderating climate by absorbing solar energy and releasing it slowly. Land surfaces respond more rapidly to solar heating, creating temperature contrasts that drive winds, monsoons, and weather patterns.' },
    ],
  },

  // geol-101-1-1, geol-101-1-3, geol-101-1-4, geol-101-1-2-1 to geol-101-1-2-4 → Earth interior SVG
  'geol-interior': {
    src: '/visuals/geo-interior.svg',
    alt: 'Cross-section of Earth\'s interior showing the crust, mantle, outer core, and inner core with depth labels',
    aspectRatio: '16/9',
    credit: 'Facet Earth Sciences',
    annotations: [
      { id: 'crust', x: 73, y: 33, label: 'Crust', description: 'The outermost solid shell of Earth, ranging from ~5 km thick beneath oceans (oceanic crust, basaltic, ~3.0 g/cm³) to ~70 km beneath mountain ranges (continental crust, granitic, ~2.7 g/cm³). All known life and human civilisation exists within or on this thin outer layer. The crust is separated from the mantle by the Mohorovičić discontinuity (Moho), where seismic wave speeds jump abruptly.' },
      { id: 'mantle', x: 17, y: 44, label: 'Mantle', description: 'Earth\'s largest layer by volume (84%), extending from the base of the crust to 2,900 km depth. The mantle is solid rock but flows plastically over geological timescales, driving tectonic plate movement via convection currents. Temperature ranges from ~600°C at the top to ~4,000°C at the base, and composition transitions from peridotite (upper mantle) to bridgmanite-dominated rock (lower mantle).' },
      { id: 'lower-mantle', x: 50, y: 56, label: 'Lower Mantle', description: 'The deeper portion of the mantle (660–2,900 km), where extreme pressure compresses rock into high-density mineral phases such as bridgmanite and ferropericlase. Seismic waves travel faster here, revealing increasing rock rigidity under confining pressure despite rising temperatures. The lower mantle is relatively stable and difficult for tectonic convection currents to penetrate.' },
      { id: 'outer-core', x: 50, y: 78, label: 'Outer Core', description: 'A layer of liquid iron-nickel alloy extending from 2,900 to 5,100 km depth. Its liquid state is confirmed by the inability of S-waves (shear waves) to pass through it. Convective flow of the conducting liquid outer core generates Earth\'s magnetic field via the geodynamo — our planet\'s protective shield against harmful solar wind particles that would otherwise strip away the atmosphere.' },
      { id: 'inner-core', x: 50, y: 89, label: 'Inner Core', description: 'A solid sphere of iron-nickel alloy at Earth\'s centre, approximately 1,220 km in radius. Despite temperatures of ~5,000–6,000°C, extreme pressure (360 GPa) keeps it solid. The inner core rotates slightly faster than the rest of Earth and shows seismic anisotropy — its crystal structure is preferentially aligned along Earth\'s rotation axis, detectable by subtle differences in seismic wave travel times.' },
    ],
  },

  // geol-101-1-2 (tectonic plates lesson) → geo-tectonics SVG
  'geol-tectonics': {
    src: '/visuals/geo-tectonics.svg',
    alt: 'Cross-section of a subduction zone showing oceanic crust descending beneath continental crust, creating a volcanic arc, trench, and mantle wedge',
    aspectRatio: '16/9',
    credit: 'Facet Earth Sciences',
    annotations: [
      { id: 'continental-crust', x: 18, y: 55, label: 'Continental Crust', description: 'The thicker, less dense, silica-rich crust that forms continental landmasses. At 30–70 km thick and composed mainly of granite and related rocks (density ~2.7 g/cm³), continental crust is too buoyant to subduct — it always overrides the denser, thinner oceanic crust at convergent plate boundaries. The oldest continental crust preserves rocks up to 4.0 billion years old.' },
      { id: 'subduction-trench', x: 50, y: 75, label: 'Subduction Trench', description: 'The deepest features of the ocean floor, formed where dense oceanic crust bends downward and descends beneath the overriding plate. The Mariana Trench (Pacific Ocean) reaches 11,034 m depth — the deepest known point on Earth\'s surface. Trenches mark the surface expression of subduction zones and are associated with the world\'s largest earthquakes (megathrust events, M9+).' },
      { id: 'subducting-plate', x: 48, y: 88, label: 'Subducting Oceanic Plate', description: 'Dense oceanic crust (basalt, ~3.0 g/cm³, 5–10 km thick) descends into the mantle at 2–8 cm/year. As it sinks, increasing heat and pressure release water and other volatiles from hydrated minerals, triggering partial melting of the overlying mantle wedge and fuelling arc volcanism. The subducting slab can be traced seismically to depths of 700 km (the Wadati-Benioff zone).' },
      { id: 'volcanic-arc', x: 36, y: 22, label: 'Volcanic Arc', description: 'A chain of volcanoes formed above the subducting plate, typically 100–150 km inland from the trench where the slab reaches depths of ~100 km. Fluids released from the slab lower the melting point of the overlying mantle wedge, producing magma that rises through the overriding plate to erupt. The Andes, Cascades, and Japan\'s volcanic arc are classic examples, producing explosive stratovolcanoes.' },
      { id: 'mantle-wedge', x: 45, y: 55, label: 'Mantle Wedge', description: 'The triangular section of upper mantle rock between the subducting slab and the base of the overriding plate. Water and CO₂ released from the subducting plate infiltrate this wedge, lowering its melting point and triggering partial melting. The resulting basaltic magma is less dense than surrounding rock and rises buoyantly to feed arc volcanoes. This process continuously recycles crustal material back into the mantle.' },
    ],
  },

  // geom-101-1-1-* → Hillslope processes SVG
  geom: {
    src: '/visuals/geom.svg',
    alt: 'Cross-section of a hillslope showing soil horizon layers, frost wedging, a landslide failure plane, colluvial debris, and a stream channel at the base',
    aspectRatio: '16/9',
    credit: 'Facet Earth Sciences',
    annotations: [
      { id: 'soil-profile', x: 25, y: 60, label: 'Soil Horizon A', description: 'The uppermost soil layer (A horizon or topsoil), dark with organic matter derived from decomposed plant material (humus). This biologically active zone contains most soil organisms — bacteria, fungi, earthworms — and is the source of nutrients for plant growth. A horizon formation requires thousands of years; its loss to erosion or agricultural compaction severely degrades productivity and accelerates runoff.' },
      { id: 'failure-plane', x: 55, y: 70, label: 'Landslide Failure Plane', description: 'The surface along which a landslide or slump mass slides relative to stable material below. Failure planes often coincide with geological boundaries — clay layers, bedding planes, fractures, or the base of the regolith above bedrock. Water saturation increases pore pressure, reducing effective friction along the plane and triggering mass movement. The 2014 Oso (Washington) landslide killed 43 people along a saturated clay failure plane.' },
      { id: 'frost-wedging', x: 67, y: 56, label: 'Frost Wedging', description: 'A mechanical weathering process where water entering rock cracks freezes and expands by ~9%, exerting pressures up to 200 MPa. Repeated freeze-thaw cycles progressively widen cracks and shatter rock into angular fragments. Frost wedging is most active in periglacial environments where temperature repeatedly cycles around 0°C, and is responsible for the jagged appearance of alpine rock faces and talus slopes.' },
      { id: 'colluvium', x: 68, y: 88, label: 'Colluvium & Debris', description: 'Poorly sorted, mixed sediment accumulated at the slope base by gravity-driven mass movements: rockfall, landslides, debris flows, and soil creep. Unlike river-sorted alluvium, colluvium preserves no grain-size stratification. It signals past slope instability and can be remobilised by heavy rainfall, making colluvium-covered slopes hazardous for construction and vulnerable to debris flows during intense storm events.' },
      { id: 'stream-channel', x: 50, y: 94, label: 'Stream Channel', description: 'The channel at the base of the hillslope collects runoff and eroded sediment, transferring them downslope toward larger rivers and the ocean. The stream exerts basal erosion on the hillslope — if it incises downward, it steepens the slope above and increases mass movement frequency. Stream channels are the ultimate sediment sink and the basal boundary condition controlling long-term hillslope evolution.' },
    ],
  },

  // glac-101-1-1-* → Glacier anatomy SVG
  glac: {
    src: '/visuals/glac.svg',
    alt: 'Diagram of glacier anatomy and mass balance showing the accumulation zone, ablation zone, equilibrium line altitude, crevasses, moraines, and proglacial lake',
    aspectRatio: '16/9',
    credit: 'Facet Earth Sciences',
    annotations: [
      { id: 'accumulation-zone', x: 18, y: 35, label: 'Accumulation Zone', description: 'The upper glacier where snowfall exceeds melt — net annual mass gain. Fresh snow compacts to firn (granular, partially metamorphosed snow, ~550 kg/m³) and eventually to glacier ice (~917 kg/m³) as air pockets are expelled under the weight of overlying layers. The accumulation zone is the glacier\'s \'engine\', providing the ice mass that flows downhill under gravity.' },
      { id: 'ablation-zone', x: 65, y: 55, label: 'Ablation Zone', description: 'The lower glacier where melt exceeds snowfall — net annual mass loss. Ice is lost by surface melt (dominant in most glaciers), sublimation, calving of icebergs into lakes or sea, and basal melt by geothermal heat and friction. A consistently negative mass balance (ablation > accumulation) means the glacier is shrinking; globally, mountain glaciers have lost an estimated 9,000 km³ of ice since 1900.' },
      { id: 'ela', x: 40, y: 37, label: 'Equilibrium Line Altitude', description: 'The elevation (ELA) where annual snowfall exactly balances annual melt — the boundary between accumulation and ablation zones, shown here by the dashed orange line. The ELA rises as climate warms: when it rises above the glacier\'s highest elevation, the entire glacier is in the ablation zone and will eventually disappear. Monitoring ELA change is a direct proxy for climate change impact on glaciers.' },
      { id: 'crevasses', x: 57, y: 54, label: 'Crevasses', description: 'Deep, open fractures in glacial ice formed where the glacier flows over a bedrock irregularity and stretches under tension. Crevasses can be 30–40 m deep (below which confining ice pressure closes them) and are most common at icefalls and zones of extending flow. They represent a major hazard for glacial travel and mountaineering, and their patterns reveal the flow dynamics of the glacier.' },
      { id: 'proglacial-lake', x: 89, y: 77, label: 'Proglacial Lake', description: 'A lake formed between the glacier terminus and its terminal moraine ridge (deposited debris). As glaciers retreat, they leave behind moraine dams that impound meltwater. Proglacial lakes are growing globally in size and number as glaciers retreat. They pose a glacial lake outburst flood (GLOF) risk: if the moraine dam fails suddenly, catastrophic floods can inundate valleys downstream.' },
    ],
  },

  // hyd-101-1-1-* → Water cycle SVG
  hyd: {
    src: '/visuals/hyd.svg',
    alt: 'Diagram of the hydrological (water) cycle showing evaporation from the ocean, cloud formation, precipitation, surface runoff, infiltration, and groundwater flow',
    aspectRatio: '16/9',
    credit: 'Facet Earth Sciences',
    annotations: [
      { id: 'evaporation', x: 8, y: 55, label: 'Evaporation', description: 'Solar energy drives water from ocean surfaces into the atmosphere as water vapour — the primary input to the water cycle. Globally, ~505,000 km³ evaporate per year from the oceans, equivalent to a global ocean layer ~1.4 m thick. Sea surface temperature directly controls the evaporation rate, making the ocean\'s energy budget central to understanding precipitation patterns and hurricane intensification.' },
      { id: 'cloud-formation', x: 30, y: 21, label: 'Cloud Formation', description: 'Rising, moisture-laden air cools adiabatically (~10°C/km for unsaturated air). When it cools to the dew point, water vapour condenses onto tiny aerosol particles (dust, sea salt, pollen) forming cloud droplets. Clouds store only ~0.001% of the hydrosphere\'s water but play a crucial role in reflecting solar radiation (cooling effect) and trapping outgoing infrared radiation (warming effect).' },
      { id: 'precipitation', x: 37, y: 37, label: 'Precipitation', description: 'Water returns to Earth\'s surface as rain, snow, sleet, or hail when cloud droplets combine into drops large enough to fall. Global average precipitation is ~990 mm/year but distributed very unevenly: tropical rainforests receive >2,000 mm/year while deserts receive <250 mm. The monsoon systems of South and East Asia deliver 70–80% of the year\'s rain in just 3–4 months.' },
      { id: 'surface-runoff', x: 62, y: 67, label: 'Surface Runoff', description: 'Precipitation that flows across the land surface rather than infiltrating into the soil, reaching rivers and eventually the ocean. Runoff is increased by compacted or frozen soils, impervious urban surfaces (asphalt, concrete), and intense rainfall exceeding infiltration capacity. Rivers carry dissolved nutrients, sediment, and pollutants to the ocean, shaping landscapes through erosion and deposition.' },
      { id: 'groundwater', x: 40, y: 90, label: 'Groundwater Flow', description: 'Water that infiltrates through soil and rock, slowly flowing through porous aquifer formations toward the ocean or emerging as springs. Groundwater is the world\'s largest reservoir of unfrozen fresh water (~10.6 million km³) and supplies ~50% of global drinking water and 40% of irrigation. Aquifer recharge takes years to millennia; over-pumping causes irreversible compaction and land subsidence in cities worldwide.' },
    ],
  },

  // ocea-101-1-1-* → Ocean floor topography SVG
  ocea: {
    src: '/visuals/oce.svg',
    alt: 'Cross-section of the ocean floor showing the continental shelf, continental slope, abyssal plain, mid-ocean ridge, deep-sea trench, and seamount with depth scale',
    aspectRatio: '16/9',
    credit: 'Facet Earth Sciences',
    annotations: [
      { id: 'continental-shelf', x: 8, y: 48, label: 'Continental Shelf', description: 'The gently sloping underwater extension of the continent, reaching depths of 0–200 m over widths of 50–350 km. Continental shelves are geologically part of the continent (continental crust), biologically rich due to sunlight penetration and nutrient upwelling, and economically critical for fisheries and offshore hydrocarbon resources. They end abruptly at the shelf break, where the slope steepens dramatically.' },
      { id: 'abyssal-plain', x: 35, y: 63, label: 'Abyssal Plain', description: 'The vast, remarkably flat deep-ocean floor at 3,000–6,000 m depth, blanketed by slow-settling sediment — clay particles, siliceous ooze from diatom shells, and calcareous ooze from foraminifera — that smooths all topographic features. Abyssal plains cover ~50% of Earth\'s surface, making them the largest geographic feature on the planet, yet they were essentially unknown until sonar mapping in the 20th century.' },
      { id: 'mid-ocean-ridge', x: 64, y: 37, label: 'Mid-Ocean Ridge', description: 'A continuous underwater mountain range where new oceanic crust is created by seafloor spreading — molten rock wells up between separating plates and solidifies. The global mid-ocean ridge system is 65,000 km long, the longest mountain range on Earth. Hydrothermal vents along the ridge support unique ecosystems powered by chemosynthesis rather than photosynthesis, independent of sunlight.' },
      { id: 'trench', x: 82, y: 84, label: 'Ocean Trench', description: 'The deepest ocean features, formed where dense oceanic crust subducts beneath another plate. Trenches reach depths exceeding 10,000 m (the Mariana Trench is 11,034 m). They are geologically active zones of frequent large earthquakes, including megathrust events (M9+). Despite crushing pressures and total darkness, hadal zones (>6,000 m) host specially adapted organisms including amphipods and snailfish.' },
      { id: 'seamount', x: 91, y: 57, label: 'Seamount', description: 'An underwater volcano rising more than 1,000 m from the seafloor but not reaching the ocean surface. Seamounts are typically extinct hot-spot volcanoes carried away from their magma source by plate movement. They serve as biodiversity hotspots, concentrating marine life that feeds on currents deflected upward by the seamount\'s flanks. There are estimated to be over 100,000 seamounts worldwide.' },
    ],
  },

  // seis-101-1-1-* → Seismogram SVG
  seis: {
    src: '/visuals/seis.svg',
    alt: 'Seismogram showing P-wave arrival, S-wave arrival, and surface wave train with amplitude and time axes',
    aspectRatio: '16/9',
    credit: 'Facet Earth Sciences',
    annotations: [
      { id: 'p-wave', x: 27, y: 49, label: 'P-Wave Arrival', description: 'The first seismic energy to reach the seismograph, appearing as a small, high-frequency oscillation. P-waves (primary/compressional waves) travel at 5–8 km/s in continental crust by alternately compressing and expanding rock in the direction of propagation — like a sound wave in air. They can travel through solids, liquids, and gases, including Earth\'s liquid outer core, making them detectable globally.' },
      { id: 's-wave', x: 55, y: 37, label: 'S-Wave Arrival', description: 'The second wave to arrive, with significantly larger amplitude than the P-wave. S-waves (shear waves) travel at 3–5 km/s by shaking rock perpendicular to the direction of propagation. The time gap between P and S arrivals (S-P time) encodes the distance to the earthquake: distance ≈ S-P time (seconds) × ~8 km. S-waves cannot pass through liquids, which is how seismologists proved Earth has a liquid outer core.' },
      { id: 'surface-waves', x: 76, y: 27, label: 'Surface Waves', description: 'The largest, slowest arrivals — Love and Rayleigh waves — with periods of 1–30 seconds and amplitudes many times those of body waves. They travel at 2–4 km/s trapped near Earth\'s surface. Their amplitude decays more slowly with distance (1/r rather than 1/r²), making them the dominant signal at large distances and the primary cause of building collapse in major earthquakes.' },
      { id: 'noise-floor', x: 12, y: 49, label: 'Pre-Event Noise', description: 'Background seismic noise recorded before the earthquake waves arrive, produced by ocean microseisms (2–20 s period waves generated by ocean swell), wind, human activity, and distant storms. Modern broadband seismometers are sensitive enough to detect ground movements of ~1 nanometre against this noise background — equivalent to the width of a few atoms.' },
      { id: 'amplitude-axis', x: 6, y: 49, label: 'Ground Motion Scale', description: 'The vertical axis records ground velocity or displacement. The dramatic amplitude difference between the P-wave onset and the surface-wave train — often a factor of 10–100 — reflects different geometric spreading rates: body waves lose energy as 1/r² with distance, while surface waves lose energy more slowly as 1/r, concentrating their damage potential at large epicentral distances.' },
    ],
  },

  // volc-101-1-1-* → Stratovolcano SVG
  volc: {
    src: '/visuals/vol.svg',
    alt: 'Cross-section of a stratovolcano showing the magma chamber, central conduit, crater, eruption column, lava flows, pyroclastic layers, and parasitic vent',
    aspectRatio: '16/9',
    credit: 'Facet Earth Sciences',
    annotations: [
      { id: 'eruption-column', x: 50, y: 14, label: 'Eruption Column', description: 'A plume of ash, gas, and rock fragments (tephra) propelled upward by expanding volcanic gases during explosive eruptions. Eruption columns from major events like the 1991 Pinatubo eruption can reach 35+ km into the stratosphere, injecting sulfur dioxide that forms reflective aerosols and causes temporary global cooling of ~0.5°C for 1–2 years. Collapsing columns produce deadly pyroclastic flows.' },
      { id: 'crater', x: 50, y: 24, label: 'Summit Crater', description: 'The bowl-shaped depression at the volcano summit, formed by explosive eruptions or collapse into the conduit below. Active craters may contain lava lakes, fumaroles (gas vents), or a growing lava dome that builds pressure for future explosive eruptions. Monitoring crater deformation — via GPS, InSAR satellites, and tiltmeters — is central to volcanic hazard assessment and eruption forecasting.' },
      { id: 'central-conduit', x: 53, y: 45, label: 'Central Conduit', description: 'The pipe-like channel through which magma rises from the chamber to the vent at the surface. Conduits are typically 1–50 m in diameter and maintained by repeated magma passage that bakes and strengthens surrounding rock. Conduit geometry controls eruption style: wide open conduits favour effusive lava flows; narrower or plugged conduits build pressure for explosive Plinian eruptions that eject ash globally.' },
      { id: 'magma-chamber', x: 50, y: 82, label: 'Magma Chamber', description: 'A reservoir of partially molten rock stored in the crust, typically 5–15 km below the surface. Magma chambers are complex crystal mush zones — not simple liquid-filled cavities — where 50–80% of the material may be solid. As magma differentiates (heavier minerals sink, lighter ones rise), dissolved gases concentrate, building the overpressure that eventually drives eruptions through the overlying conduit.' },
      { id: 'lava-flow', x: 15, y: 70, label: 'Lava Flow', description: 'Molten rock that erupts relatively gently and flows across the surface, cooling and solidifying as it travels. Basaltic lava flows are hot (~1,100–1,200°C) and fluid, travelling at 1–30 km/h over great distances; silica-rich andesitic and rhyolitic lavas are cooler and more viscous. Lava flows from stratovolcanoes are typically shorter and slower than those from shield volcanoes like those of Hawaii.' },
    ],
  },
}

// ─── File-to-config mapping ────────────────────────────────────────────────────

function getConfig(filename) {
  if (filename.startsWith('abio-101-1-1'))   return CONFIGS.abio
  if (filename.startsWith('astr-101-1-1'))   return CONFIGS.astr
  if (filename.startsWith('atmo-101-1-1'))   return CONFIGS.atmo
  if (filename.startsWith('clim-101-1-1'))   return CONFIGS.clim
  if (filename === 'geol-101-1-2.ts')        return CONFIGS['geol-tectonics']
  if (filename.startsWith('geol-101-1-2-'))  return CONFIGS['geol-interior']  // minerals → interior fallback
  if (filename.startsWith('geol-101-1'))     return CONFIGS['geol-interior']
  if (filename.startsWith('geom-101-1-1'))   return CONFIGS.geom
  if (filename.startsWith('glac-101-1-1'))   return CONFIGS.glac
  if (filename.startsWith('hyd-101-1-1'))    return CONFIGS.hyd
  if (filename.startsWith('ocea-101-1-1'))   return CONFIGS.ocea
  if (filename.startsWith('seis-101-1-1'))   return CONFIGS.seis
  if (filename.startsWith('volc-101-1-1'))   return CONFIGS.volc
  return null
}

// ─── Regex replacement ─────────────────────────────────────────────────────────

/**
 * Replaces the annotated-image block in a lesson file.
 * Matches from `type: 'annotated-image'` through the closing `},` of annotations array.
 */
function buildAnnotatedImageBlock(cfg) {
  const annotationsStr = cfg.annotations
    .map(a => `          {
            id: '${a.id}',
            x: ${a.x},
            y: ${a.y},
            label: '${a.label.replace(/'/g, "\\'")}',
            description: '${a.description.replace(/'/g, "\\'")}',
          }`)
    .join(',\n')

  return `type: 'annotated-image' as const,
        src: '${cfg.src}',
        alt: '${cfg.alt.replace(/'/g, "\\'")}',
        aspectRatio: '${cfg.aspectRatio}',
        credit: '${cfg.credit}',
        annotations: [
${annotationsStr},
        ]`
}

// ─── Main ──────────────────────────────────────────────────────────────────────

import { readdirSync } from 'fs'

const files = readdirSync(LESSONS_DIR).filter(f => f.endsWith('.ts'))

let updated = 0
let skipped = 0
let noMatch = 0

for (const filename of files) {
  const cfg = getConfig(filename)
  if (!cfg) { skipped++; continue }

  const filePath = resolve(LESSONS_DIR, filename)
  let content = readFileSync(filePath, 'utf8')

  // Only process files that have a Wikimedia annotated-image
  if (!content.includes('wikimedia') && !content.includes('upload.wikimedia')) {
    skipped++
    continue
  }

  // Build the replacement block
  const replacement = buildAnnotatedImageBlock(cfg)

  // Match the entire annotated-image object from `type: 'annotated-image'` to the end of `annotations: [...]`
  // The pattern handles different indentation and src URL formats
  const pattern = /type:\s*'annotated-image'\s+as\s+const,\s*\n\s*src:\s*'[^']*',\s*\n\s*alt:\s*'[^']*',\s*\n\s*aspectRatio:\s*'[^']*',\s*\n\s*credit:\s*'[^']*',\s*\n\s*annotations:\s*\[[^\]]*(?:\[[^\]]*\][^\]]*)*\]/s

  if (!pattern.test(content)) {
    // Try alternative: src might be on same line or annotations block might differ
    // Try a broader match
    const broaderPattern = /type:\s*'annotated-image'\s+as\s+const,[\s\S]*?annotations:\s*\[[\s\S]*?\]/

    if (!broaderPattern.test(content)) {
      console.log(`  NO MATCH: ${filename}`)
      noMatch++
      continue
    }
    content = content.replace(broaderPattern, replacement)
  } else {
    content = content.replace(pattern, replacement)
  }

  writeFileSync(filePath, content, 'utf8')
  console.log(`  UPDATED: ${filename}`)
  updated++
}

console.log(`\nDone: ${updated} updated, ${skipped} skipped, ${noMatch} no-match`)
