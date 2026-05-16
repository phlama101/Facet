import { Wind, Globe, Sun } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const atmosphereComposition: Lesson = {
  id: 'atmo-101-1-1-2',
  title: 'Atmospheric Composition and Trace Gases',
  track: 'atm',
  trackName: 'Meteorology',
  level: 'Beginner',
  duration: '11 min',
  xpReward: 140,
  description: "The air we breathe is mostly nitrogen and oxygen, but it is the trace gases — comprising less than 1% of the atmosphere — that regulate climate, shield life from radiation, and record the chemical fingerprints of life and industry.",
  sources: [
    { org: 'NOAA',     title: 'Global Monitoring Laboratory — Atmospheric Composition',     url: 'https://gml.noaa.gov/' },
    { org: 'NASA',     title: 'Atmospheric Chemistry and Composition Science',              url: 'https://science.nasa.gov/earth-science/focus-areas/climate-variability-change' },
    { org: 'OpenStax', title: 'Introduction to Atmospheric Science, Ch. 2 (CC-BY 4.0)',    url: 'https://openstax.org/books/introduction-oceanography' },
    { org: 'UCAR',     title: 'Chemistry of the Atmosphere',                               url: 'https://scied.ucar.edu/learning-zone/atmosphere' },
    { org: 'NOAA',     title: 'Trends in Atmospheric Carbon Dioxide',                      url: 'https://gml.noaa.gov/ccgg/trends/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'More than just air',
      body: `The air filling your lungs right now is roughly 78% nitrogen — a gas so chemically inert it does almost nothing inside you — yet without those trace gases making up the remaining fraction of a percent, Earth's surface would be a frozen wasteland at −18°C (0°F). How did less than 1% of the atmosphere end up controlling everything?\n\nBreathe in. You have just inhaled a mixture of gases that has been shaped by 4.5 billion years of geological, chemical, and biological processes. Earth's atmosphere was not always what it is today — the earliest atmosphere, 4.4 billion years ago, was likely dominated by hydrogen and helium that quickly escaped to space. The second atmosphere, outgassed from volcanoes, was rich in water vapour, carbon dioxide, and nitrogen — with essentially no free oxygen. The transformation to our current oxygen-rich atmosphere began ~2.7 billion years ago when cyanobacteria evolved oxygenic photosynthesis and began releasing O₂ as a metabolic waste product. The **Great Oxidation Event** (~2.4 billion years ago) saw atmospheric oxygen rise from near zero to measurable concentrations, fundamentally changing Earth's chemistry and enabling the evolution of complex aerobic life.

Today, the atmosphere is approximately 78% nitrogen (N₂), 21% oxygen (O₂), and about 1% argon (Ar). Everything else — water vapour, carbon dioxide, methane, ozone, nitrous oxide, and dozens of other compounds — makes up less than 1% of the atmosphere by volume. Yet these **trace gases** are enormously important. Water vapour is the most powerful greenhouse gas and the carrier of the latent heat that drives storms. Carbon dioxide is the primary long-term thermostat of Earth's climate. Ozone in the stratosphere shields life from ultraviolet radiation while ozone at the surface is a harmful pollutant. Methane, though present at just 2 parts per million, is 80× more potent than CO₂ as a greenhouse gas over 20 years.

Understanding atmospheric composition is the foundation of understanding climate, air quality, and the chemistry of the sky. The atmosphere is not static — its composition changes on geological, human, and even daily timescales. The seasonal "breathing" of the atmosphere as northern hemisphere forests grow and shed leaves is visible in the Keeling Curve of CO₂ measurements. The rise of anthropogenic greenhouse gases since industrialisation is one of the most significant changes to the atmosphere in millions of years.`,
      keyTerms: [
        { term: 'Nitrogen (N₂)',         def: 'Makes up 78.09% of the atmosphere. Chemically inert under most atmospheric conditions; does not absorb infrared radiation (not a greenhouse gas). Cycles through soil bacteria that fix N₂ into bioavailable forms (ammonium, nitrate). Atmospheric N₂ is the ultimate source of all biological nitrogen.' },
        { term: 'Oxygen (O₂)',           def: 'Makes up 20.95% of the atmosphere. Required for aerobic respiration and combustion. Produced by oxygenic photosynthesis; consumed by respiration and decay. Its current level has been maintained in a rough balance for ~500 million years. Absent from the early Earth atmosphere; accumulated due to biological activity.' },
        { term: 'Water vapour (H₂O)',    def: 'Highly variable trace gas (0–4% of atmosphere by volume). The most powerful greenhouse gas in the atmosphere. Cycles through the atmosphere via evaporation, condensation, and precipitation — the global water cycle. Its short residence time (~9 days) makes it a rapid feedback amplifier, not a primary forcing agent.' },
        { term: 'Carbon dioxide (CO₂)',  def: 'Currently ~422 ppm (parts per million) in the atmosphere (2024), up from ~280 ppm pre-industrial. A greenhouse gas that absorbs infrared radiation. The primary long-term climate control on geological timescales. Exchanged between atmosphere, ocean, biosphere, and rock through the carbon cycle over timescales from seconds to millions of years.' },
        { term: 'Ozone (O₃)',           def: 'Triatomic oxygen. In the stratosphere (15–35 km (9–22 mi)): shields surface life by absorbing UV-B and UV-C radiation. In the troposphere (near surface): a harmful pollutant formed from car exhaust and industrial emissions reacting in sunlight. Same molecule, very different role depending on altitude — "good up high, bad nearby."' },
      ],
    },
    {
      type: 'callout' as const,
      variant: 'insight',
      headline: 'A bathtub of CO₂ in an Olympic swimming pool',
      body: "Carbon dioxide makes up only 0.042% of the atmosphere by volume — a concentration so small that if the atmosphere were an Olympic swimming pool, CO₂ would fill just a single bathtub. Yet this trace gas drives most of Earth's greenhouse warming.",
    },
    {
      type: 'concept',
      title: 'Major gases, trace gases, and atmospheric chemistry',
      body: `**Nitrogen and oxygen: the bulk of the atmosphere.** Dinitrogen (N₂) dominates the atmosphere because it is stable, relatively inert, and continuously recycled without being strongly absorbed at the surface or space. It has no significant greenhouse effect. Oxygen's presence at 21% is biologically remarkable — it is far above the chemical equilibrium level for a planet without life (which would be essentially zero O₂). Atmospheric O₂ is maintained by the balance between photosynthesis (which produces O₂) and respiration and decay (which consumes it). Geologically, the burning of fossil fuels is measurably decreasing O₂ concentration, though the change is tiny compared to total oxygen abundance.

**Water vapour: the most abundant greenhouse gas.** Water vapour (H₂O) is the most abundant greenhouse gas and the dominant absorber of infrared radiation in the lower troposphere. It accounts for roughly half of Earth's natural greenhouse effect — more than CO₂, methane, and all other greenhouse gases combined. Its concentration in the atmosphere is highly variable, ranging from near zero in cold, dry air to around 4% by volume in hot, humid tropical air.

**Water vapour as a feedback, not a forcing.** Despite its potency, water vapour does not control its own concentration — temperature does. Warmer air can hold more water vapour (following the **Clausius-Clapeyron relationship**, roughly 7% more per degree of warming); if the atmosphere cools, water vapour condenses out and its greenhouse contribution falls. This is why water vapour is a **feedback**, not a forcing: it amplifies warming or cooling initiated by other agents (like CO₂) but cannot itself start a climate change. If CO₂ were removed and Earth cooled, water vapour would condense out as well, removing its own warming contribution. In the other direction, when CO₂ drives warming, the air holds more water vapour, which drives further warming — the water vapour feedback roughly doubles the warming caused by CO₂ alone.

**Carbon dioxide: the long-term thermostat.** CO₂ controls Earth's temperature on geological timescales through the **carbonate-silicate cycle**. Think of it like a thermostat with a very slow response time: volcanism turns up the CO₂ "dial," silicate weathering turns it back down — and on million-year timescales, these two processes have kept Earth from permanently freezing or boiling.: volcanic outgassing releases CO₂; chemical weathering of silicate rocks draws CO₂ down from the atmosphere and eventually deposits it as carbonate rocks on the seafloor (ultimately subducted back into the mantle). This cycle regulates CO₂ over millions of years and explains why Earth has not frozen permanently despite evidence that the young sun was ~30% dimmer than today (the **Faint Young Sun Paradox** — higher CO₂ compensated). Current atmospheric CO₂ (~422 ppm, 2024) is higher than at any point in the past 800,000 years and is rising at ~2.5 ppm/year due to fossil fuel combustion and deforestation. The Keeling Curve, a continuous record of atmospheric CO₂ at Mauna Loa, Hawaii since 1958, is one of the most important datasets in climate science.

**Methane and nitrous oxide: potent trace gases.** Methane (CH₄) is present at only ~1,930 ppb (parts per billion) but has a global warming potential 80× that of CO₂ over 20 years (and 30× over 100 years) because it absorbs infrared radiation more efficiently per molecule. Sources include wetlands, rice paddies, livestock digestion (enteric fermentation), landfills, and fossil fuel extraction. It is removed primarily by reaction with hydroxyl radicals (OH) in the troposphere, with a residence time of ~9 years. Nitrous oxide (N₂O), at ~336 ppb, has a global warming potential ~273× that of CO₂ over 100 years and also destroys stratospheric ozone; it is produced primarily by agricultural soils, fertilisers, and livestock waste. Both methane and nitrous oxide have increased substantially since pre-industrial times due to agriculture and industry.

**Ozone: two stories at two altitudes.** Just as chlorine is essential in a dilute swimming pool disinfectant but lethal if you inhale concentrated chlorine gas, the same O₃ molecule plays opposite roles depending on where it is. In the stratosphere, ozone absorbs UV-B (280–315 nm) and UV-C (100–280 nm), preventing these wavelengths from reaching the surface where they would cause DNA damage, skin cancer, and cataracts and disrupt photosynthesis. Stratospheric ozone is created by UV breaking O₂ apart (O₂ + UV → 2O; O + O₂ → O₃) and destroyed by catalytic cycles involving halogen radicals from CFCs. In the troposphere, ozone is formed secondarily when nitrogen oxides (NOₓ, from combustion) and volatile organic compounds (VOCs) react in sunlight — **photochemical smog**. Ground-level ozone irritates the respiratory system, damages crops, and reduces the growth of forests. The separation between "good" stratospheric ozone and "bad" tropospheric ozone is one of the clearest examples of why understanding altitude context is essential in atmospheric chemistry.`,
      cards: [
        {
          name: 'Major Gases: N₂, O₂, Ar',
          icon: Wind,
          color: BRAND.accent,
          desc: 'N₂ (78.09%): inert, no greenhouse effect, biological nitrogen source via fixation. O₂ (20.95%): supports aerobic life, produced by photosynthesis, consumed by respiration; anomalously high for a non-living planet. Ar (0.93%): noble gas, inert, no biologically active role. Together these three constitute 99.96% of the dry atmosphere by volume. Remaining ~0.04% contains all climatically active trace gases.',
          examples: 'O₂ decline from fossil fuels: ~−4 ppm/yr, trivial compared to 209,000 ppm total · Early Earth atmosphere: no O₂, ~CO₂-rich similar to Venus · Great Oxidation Event (2.4 Ga): O₂ rose from ~0 to 1–2%, triggering "snowball Earth" episodes and mass extinctions of anaerobes',
        },
        {
          name: 'Greenhouse Trace Gases',
          icon: Sun,
          color: BRAND.gold,
          desc: 'Water vapour (H₂O): 0–4%, most powerful GHG, rapid feedback (doubles CO₂ forcing), drives weather. CO₂ (422 ppm 2024, +50% since pre-industrial): long-term thermostat, absorbs 15 μm IR band. CH₄ (1,930 ppb): 80× CO₂ potency/20yr, 9-yr residence time, sources: wetlands/agriculture/fossil fuels. N₂O (336 ppb): 273× CO₂/100yr, ozone destroyer, source: agriculture.',
          examples: `Keeling Curve (1958–present): continuous CO₂ rise at Mauna Loa, with seasonal oscillation from NH vegetation · Ice core record: CO₂ ranged 180–280 ppm through 800,000 yr of glacial cycles, never approached today\'s 422 ppm · CH₄ and Arctic permafrost: warming permafrost releases stored CH₄ and CO₂ as positive feedback`,
        },
        {
          name: 'Ozone: Good Up High, Bad Nearby',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Stratospheric (15–35 km (9–22 mi)): shield absorbing UV-B/UV-C, created by O₂ photodissociation + recombination, destroyed by Cl/Br radicals from CFCs/HCFCs. Tropospheric: secondary pollutant from NOₓ + VOC + sunlight → O₃; harms respiratory system, damages crops, reduces plant growth; O₃ also a greenhouse gas. Montreal Protocol 1987: CFCs phased out; ozone hole recovering, projected to close ~2060–2070.',
          examples: 'Antarctic ozone hole peak: 28 million km² in 2006 · Smog alert: ground-level O₃ exceeds 70 ppb triggers health warnings in US cities · Dobson unit (DU): unit measuring total column ozone; healthy ~300 DU, Antarctic spring minimum <100 DU during hole',
        },
      ],
      interaction: {
        type: 'annotated-image' as const,
        src: '/visuals/atm.svg',
        alt: 'Diagram of Earth\'s atmospheric layers from the troposphere through the thermosphere with temperature profile and key altitude markers',
        aspectRatio: '16/9',
        credit: 'Facet Earth Sciences',
        annotations: [
          {
            id: 'troposphere',
            x: 50,
            y: 80,
            label: 'Troposphere',
            description: 'The lowest atmospheric layer (0–12 km (0–7 mi)) containing 75% of Earth\'s atmospheric mass and virtually all its water vapour. Temperature decreases with altitude at ~6.5°C/km (11.7°F/1,000 ft). All weather phenomena — clouds, rain, storms, wind — occur exclusively in the troposphere. Commercial aircraft cruise near the tropopause at ~10–12 km (6–7 mi) to minimise air resistance and turbulence.',
          },
          {
            id: 'stratosphere',
            x: 50,
            y: 58,
            label: 'Stratosphere',
            description: 'Extending from 12–50 km (7–31 mi) altitude, the stratosphere is characterised by temperature inversion: temperature rises with altitude because ozone absorbs UV radiation and warms the air. This stable temperature profile suppresses vertical mixing (convection), giving the stratosphere its name (stratified = layered) and allowing ozone to accumulate in a persistent layer.',
          },
          {
            id: 'ozone-layer',
            x: 74,
            y: 62,
            label: 'Ozone Layer',
            description: 'Concentrated at 15–35 km (9–22 mi) in the lower stratosphere, the ozone (O₃) layer absorbs 97–99% of the Sun\'s harmful UV-B and UV-C radiation. Without it, surface UV levels would destroy DNA and prevent most terrestrial life. Ozone depletion by chlorofluorocarbons (CFCs) created the Antarctic \'ozone hole\' detected in the 1980s; the 1987 Montreal Protocol has since produced measurable recovery.',
          },
          {
            id: 'mesosphere',
            x: 50,
            y: 38,
            label: 'Mesosphere',
            description: 'From 50–85 km (31–53 mi) altitude, the mesosphere is the coldest region of the atmosphere (temperatures as low as −90°C (−130°F) at the mesopause). Most meteors burn up here as friction with the increasingly dense air vaporises them. Noctilucent clouds — the highest clouds on Earth, composed of ice crystals — form near the mesopause and are visible after sunset from high latitudes.',
          },
          {
            id: 'thermosphere',
            x: 50,
            y: 18,
            label: 'Thermosphere',
            description: 'Above 85 km (53 mi), the extremely tenuous thermosphere absorbs high-energy X-ray and UV radiation, heating to 500–2,000°C (932–3,632°F) (though air density is so low that objects feel cold). The International Space Station orbits in the thermosphere at ~400 km (249 mi) altitude. Auroras borealis and australis are produced here when energetic solar wind particles excite atmospheric gas molecules.',
          },
        ],
      },
    },
    {
      type: 'concept',
      title: 'Key takeaways',
      interaction: {
        type: 'scientific-diagram' as const,
        id: 'greenhouse-mechanism',
        caption: 'Greenhouse mechanism: shortwave solar passes through GHG-transparent atmosphere; surface emits longwave IR; GHGs absorb and re-emit ~50% back toward the surface (back-radiation ~333 W m⁻²).',
        credit: 'Trenberth, Fasullo & Kiehl (2009) · IPCC AR6',
      },
      body: `• **The distinction between *forcings* (what starts warming) and *feedbacks* (what amplifies it) is foundational to climate science**: CO₂ is a forcing — it drives temperature change regardless of what temperature is doing. Water vapour, ice-albedo, and cloud changes are feedbacks — they respond to temperature and determine how severe the final warming becomes. Without understanding this distinction, it is impossible to reason clearly about why small changes in trace gases can produce large changes in climate.

• **The same ozone molecule is both shield and pollutant depending on altitude**: Stratospheric ozone (15–35 km (9–22 mi)) blocks UV-B that would otherwise shred DNA; tropospheric ozone formed from car exhaust and sunlight directly damages lung tissue and crop yields — a vivid reminder that molecular context determines whether a substance is beneficial or harmful.

• **Methane packs 80× the short-term warming punch of CO₂ but disappears in ~9 years**: This makes it uniquely powerful for near-term climate policy — cutting methane emissions produces measurable temperature relief within a decade, whereas the CO₂ already emitted will persist for centuries regardless of what we do next.`,
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "The Keeling Curve shows CO₂ concentration at Mauna Loa rising steadily since 1958, but superimposed on this rise is a regular sawtooth oscillation with an amplitude of ~6 ppm — concentration falls every northern hemisphere summer and rises every winter. What causes this seasonal oscillation, and what does it reveal about the biosphere's relationship with the atmosphere?",
          a: [
            "The seasonal oscillation is caused by the tilt of Earth's axis, which changes the distance from Earth to the sun; in northern summer, Earth is slightly closer to the sun, increasing photosynthesis globally and drawing down CO₂; in winter, Earth is farther away and respiration dominates",
            "In northern hemisphere summer, the large land area with vegetation north of the equator undergoes intense photosynthesis, drawing CO₂ out of the atmosphere; in winter, photosynthesis stops but respiration, decomposition, and fossil fuel combustion continue, returning CO₂ to the atmosphere; the oscillation reflects the breath of the northern hemisphere biosphere",
            "The seasonal oscillation is caused by the annual cycle of ocean uptake and outgassing of CO₂; the ocean absorbs CO₂ in summer when surface water is warm and photosynthesis is high, and releases it in winter when cold water upwells from the deep; the Mauna Loa station picks up this ocean signal because it is surrounded by ocean",
            "In summer, increased solar radiation photo-oxidises CO₂ molecules at high altitude, converting them to CO and O₂ and reducing the measured CO₂; in winter, the reverse reaction dominates; this atmospheric photochemistry drives the seasonal cycle independently of biological or oceanic processes",
          ],
          correct: 1,
          explain: "Earth's axial tilt does affect seasonal insolation, but Earth is actually slightly farther from the sun in northern summer (perihelion is in January); also, photosynthesis rate is not primarily controlled by distance from the sun but by temperature, light, and nutrients, and global photosynthesis does not peak when Earth is closest to the sun (A is wrong on the mechanism). Ocean uptake and outgassing (C) does contribute a signal, but the dominant oscillation at Mauna Loa is terrestrial biosphere-driven; ocean CO₂ solubility actually increases in cold water (winter), not warm, so the ocean signal is opposite to what is described. CO₂ photo-oxidation (D) does not occur — CO₂ is already fully oxidised and is not further broken down by visible or UV radiation in the atmosphere under normal conditions. The correct answer is B: the northern hemisphere contains ~70% of Earth's land area and the bulk of its forests, grasslands, and croplands. During the boreal spring and summer, these billions of plants photosynthesize intensively, incorporating atmospheric CO₂ into plant tissue; the net uptake is large enough to draw down global atmospheric CO₂ by ~6 ppm. In autumn and winter, photosynthesis ceases but respiration and microbial decomposition of soil organic matter continue, releasing CO₂; combined with continuing fossil fuel emissions, CO₂ rises again. The oscillation is literally the biosphere breathing — and the fact that it is visible in global CO₂ concentration demonstrates how tightly coupled the biosphere and atmosphere are, and how significant the northern hemisphere terrestrial biosphere is relative to the whole atmosphere.",
        },
        {
          q: "Methane has a global warming potential 80 times that of CO₂ over 20 years, yet it receives less policy attention than CO₂. What characteristic of methane makes it both more immediately potent and yet less persistent in the atmosphere than CO₂, and what are the implications for climate policy?",
          a: [
            "Methane's higher potency is because it directly heats the atmosphere by combustion rather than by greenhouse absorption; it is less persistent because it burns and is converted to CO₂ relatively quickly; reducing methane emissions would therefore reduce heat production but would increase CO₂ levels slightly as methane converts",
            "Methane absorbs infrared radiation more efficiently per molecule than CO₂ and is present in smaller concentrations, meaning the atmosphere is less saturated in its absorption bands; it is removed by reaction with hydroxyl radicals (OH) in the troposphere with a residence time of ~9 years; this means reducing methane emissions produces rapid climate benefit (within decades) while CO₂ reductions take centuries to manifest, since CO₂ persists for 300–1,000 years",
            "Methane's higher potency is simply due to its greater abundance in recent decades; it has always had the same greenhouse warming potential per molecule as CO₂ but was not significant until agricultural methane from livestock and rice cultivation grew large enough to matter; its lower persistence is because it outgasses into space more quickly than CO₂ due to its lighter molecular weight",
            "Methane's higher short-term potency is largely a measurement artefact — over 100-year timescales, methane and CO₂ have similar warming potentials per molecule, and the 80× figure applies only to a 20-year window that is not relevant to long-term climate policy; both gases require the same priority of reduction",
          ],
          correct: 1,
          explain: "Methane is not flammable in the atmosphere in the way described (A) — it is not burning in the air; it acts as a greenhouse gas by absorbing IR radiation. Its conversion to CO₂ via OH reaction does produce some CO₂, but this is not a primary consideration and does not change the fundamental atmospheric physics. Methane does not outgas into space more quickly due to molecular weight (C) — atmospheric escape of light gases is relevant mainly for hydrogen and helium, not CH₄; and methane's per-molecule potency is an intrinsic property of its molecular absorption cross-section and has been known and consistent since it was first measured. The 100-year GWP of methane (~30×) is significantly lower than its 20-year GWP (~80×) because of its ~9-year residence time (D partially addresses this), but it is incorrect to say the difference is an 'artefact' or that they have 'similar' potentials — methane is substantially more potent than CO₂ at all relevant timescales. The correct answer is B: methane absorbs strongly in infrared wavelength bands (particularly the 7.7 μm band) where CO₂ does not absorb, and because methane concentrations are low (~2 ppm vs. CO₂'s 422 ppm), the atmosphere is far from saturated in methane's absorption bands — each additional molecule has full effect. It is removed primarily by oxidation with hydroxyl radical (OH) in the troposphere, with a half-life of ~9 years (full residence time ~9–12 years). The policy implication is profound: reducing CO₂ emissions slows the rate of additional warming, but CO₂ already emitted will persist for 300–1,000 years regardless; reducing methane would produce measurable climate benefit within a decade or two, making it a high-priority short-term lever for limiting near-term warming.",
        },
        {
          q: "Ground-level ozone is classified as a harmful air pollutant, while stratospheric ozone is essential for life. Both involve the same O₃ molecule. What produces each type of ozone, and why is the same molecule considered beneficial in one location and dangerous in another?",
          a: [
            "The two types of ozone are chemically different: stratospheric ozone (O₃) has three oxygen atoms while tropospheric 'ozone' (O₂⁻) is actually a reactive oxygen ion; the different names for the same molecular formula cause confusion, but the stratospheric form is produced biologically by plants and the tropospheric form is a combustion product",
            "Stratospheric ozone is produced naturally by solar UV splitting O₂ molecules; the free oxygen atoms combine with O₂ to form O₃; its role is to absorb incoming UV-B and UV-C radiation before it reaches the surface. Ground-level ozone is produced secondarily by photochemical reactions between nitrogen oxides (from combustion) and volatile organic compounds (VOCs) in sunlight; once formed, it irritates airways, oxidises plant tissue, and damages materials; the same molecule causes harm at the surface because organisms evolved in the relative absence of strong oxidants at the surface",
            "Stratospheric ozone is beneficial because it is dilute; ground-level ozone is harmful because it is more concentrated; any gas in high concentration can be toxic, but in the stratosphere, ozone is spread through a thick layer so no single organism is exposed to high concentrations",
            "The distinction between 'good' and 'bad' ozone is a public health communication simplification; chemically, stratospheric and tropospheric ozone are identical, and both are toxic to lung tissue; the protective benefit of stratospheric ozone is real, but describing it as 'good' is misleading because if that same ozone were at the surface it would be equally harmful",
          ],
          correct: 1,
          explain: "Ozone is always O₃ regardless of altitude — there is no different ionic form (A). The concentration argument (C) is partially true but incomplete: ground-level ozone is harmful not simply because it is at higher local concentrations, but because organisms at the surface are exposed to it directly during respiration and surface contact; in the stratosphere, ozone is interacting with radiation before it reaches organisms, not with organisms directly. While D contains a kernel of truth (ozone is harmful to lung tissue at any altitude if organisms are exposed to it), the framing misrepresents the functional distinction: stratospheric ozone prevents biologically damaging UV from reaching organisms on the surface — it performs a shielding function; the same gas at the surface is inhaled and causes oxidative damage. The mechanism is what matters, not just the molecule. The correct answer is B: stratospheric ozone is produced by the Chapman mechanism — solar UV-C (240 nm) photodissociates O₂ into two O atoms; each O atom then combines with O₂ (in a three-body collision with a third molecule M) to form O₃. This stratospheric ozone absorbs UV-B (280–315 nm) and UV-C, preventing these wavelengths from penetrating to the surface where they would damage DNA, protein, and other biological molecules. Tropospheric ozone is produced by a completely different mechanism: combustion from vehicles and industry emits NO and NO₂ (NOₓ); volatile organic compounds (VOCs) from combustion and vegetation react with NOₓ in the presence of sunlight to produce O₃; the resulting O₃ at concentrations above ~70 ppb irritates the respiratory epithelium, reduces lung function, and damages plant surfaces through oxidation. The functional distinction is therefore one of context: the UV-shielding action of stratospheric ozone benefits all surface life, while ground-level ozone is a direct oxidant that harms the organisms in contact with it.",
        },
        {
          q: "Atmospheric nitrogen (N₂) makes up 78% of the atmosphere yet plays almost no direct role in weather, climate, or biological metabolism as a gas. However, it is essential to all life on Earth. How does nitrogen move from the largely inert atmospheric reservoir into the biosphere, and why is this pathway biologically constrained in a way that limits ecosystem productivity?",
          a: [
            "Plants absorb atmospheric N₂ directly through their leaves during photosynthesis, incorporating it into amino acids alongside CO₂; nitrogen and carbon are fixed simultaneously; the process is limited only by light availability, which is why nitrogen fertilisers speed plant growth in the same way that artificial lighting does",
            "Atmospheric N₂ is fixed into biologically usable forms (ammonium, NH₄⁺, or nitrate, NO₃⁻) primarily by nitrogen-fixing bacteria — either free-living soil bacteria or those living in symbiotic root nodules of legumes — using the enzyme nitrogenase; this biological process requires breaking the extremely strong N≡N triple bond (945 kJ/mol), which makes it energetically costly and limits the rate of natural nitrogen fixation; because fixed nitrogen is often the scarcest nutrient in ecosystems, it limits plant productivity over most of Earth's land surface",
            "Lightning strikes fix atmospheric N₂ into nitrogen oxides (NOₓ) that dissolve in rainwater to form nitrate, which plants absorb; this is the dominant pathway for fixed nitrogen entering ecosystems; biological nitrogen fixation by bacteria is a minor supplement that only matters in agricultural settings where legumes are deliberately planted",
            "Nitrogen enters the biosphere when volcanic outgassing releases ammonia (NH₃) directly from magmatic rocks; the ammonia dissolves in rainwater as ammonium and is taken up by plants; atmospheric N₂ is simply the reservoir of this volcanic ammonia that has been returned to the atmosphere by bacterial denitrification over geological time",
          ],
          correct: 1,
          explain: "Plants cannot fix atmospheric N₂ directly through photosynthesis (A) — photosynthesis incorporates only CO₂ and water to produce glucose; nitrogen fixation is an entirely separate biochemical process requiring different enzymes; this conflation is a fundamental misunderstanding of plant biochemistry. Lightning does fix a small amount of N₂ into NOₓ (C), and this does contribute to ecosystem nitrogen budgets, but it is a minor pathway compared to biological nitrogen fixation — globally, biological fixation accounts for roughly 120 Tg N/yr while lightning contributes only ~5 Tg N/yr; lightning is not the dominant pathway. Volcanic outgassing of NH₃ (D) is negligible in the modern nitrogen cycle; most volcanic nitrogen is released as N₂ and smaller amounts of NOₓ; the biosphere does not primarily depend on volcanic ammonia for its fixed nitrogen supply. The correct answer is B: the N≡N triple bond in atmospheric N₂ is one of the strongest bonds in chemistry (945 kJ/mol), making N₂ nearly chemically inert under ambient conditions. Biological nitrogen fixation — performed by bacteria possessing the enzyme nitrogenase — is the primary natural pathway by which atmospheric N₂ is converted to NH₄⁺ (ammonium), which plants and other organisms can assimilate. This includes free-living soil bacteria (Azotobacter, Clostridium), cyanobacteria (important in marine and freshwater ecosystems), and symbiotic bacteria (Rhizobium in legume root nodules). The process requires 16 ATP per N₂ molecule fixed — making it metabolically expensive. Because fixed nitrogen is scarce in most natural soils and waters, nitrogen limitation controls productivity over large areas of Earth's land and ocean surface. This is why the invention of the Haber-Bosch industrial nitrogen fixation process (1913) — which synthesises NH₃ from N₂ and H₂ using high temperature and pressure with an iron catalyst — was transformative for agriculture: it broke the biological bottleneck, enabling synthetic fertilisers that now support roughly half of humanity's food supply.",
        },
      ],
    },
  ],
}

export default atmosphereComposition
