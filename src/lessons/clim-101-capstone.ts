import type { Lesson } from './types'

const clim101Capstone: Lesson = {
  id: 'clim-101-capstone',
  title: 'Climate, Past & Future — Final Exam',
  track: 'cli',
  trackName: 'Climate Science',
  level: 'Beginner',
  duration: '30 min',
  xpReward: 500,
  description:
    'Test your knowledge of the full Climate Science 101 path — from the climate system components and feedbacks through 800,000 years of ice core history to the observed and projected impacts of modern warming.',
  sources: [
    { org: 'IPCC',    title: 'Sixth Assessment Report — Physical Science Basis (AR6 WGI, 2021)',           url: 'https://www.ipcc.ch/report/ar6/wg1/' },
    { org: 'NOAA',    title: 'Global Climate Change Indicators',                                           url: 'https://www.climate.gov/news-features/understanding-climate/climate-change-global-temperature' },
    { org: 'NASA',    title: 'GISS Surface Temperature Analysis (GISTEMP)',                                url: 'https://data.giss.nasa.gov/gistemp/' },
    { org: 'PAGES',   title: 'Past Global Changes — Ice Core & Paleoclimate Synthesis',                    url: 'https://pastglobalchanges.org/' },
    { org: 'OpenStax', title: 'Earth Science (CC-BY 4.0)',                                                 url: 'https://openstax.org/books/earth-science' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Climate, Past & Future — Final Exam',
      body: `This final exam covers all three chapters of Climate Science 101. Questions 1–7 test Chapter 1 (The Climate System), questions 8–13 test Chapter 2 (Climate Through History), and questions 14–20 test Chapter 3 (Modern Climate Change). Questions are cumulative — later questions occasionally draw on concepts introduced in earlier chapters.

Each question has exactly one correct answer. The distractors are carefully designed to probe the depth of your understanding, not just surface recall. Every question is followed by a detailed explanation covering why the correct answer is right and why each alternative is wrong.

Take your time — precision matters in climate science.`,
    },
    {
      type: 'quiz',
      questions: [
        // ── CHAPTER 1 — THE CLIMATE SYSTEM ───────────────────────────────────

        {
          q: "Earth's equilibrium climate sensitivity (ECS) is most accurately described as which of the following?",
          a: [
            "The total warming observed since pre-industrial times, currently measured at approximately 1.1 °C above the 1850–1900 baseline",
            "The global mean surface temperature increase that results from a sustained doubling of atmospheric CO₂, once all slow feedbacks have equilibrated; best-estimate ~3 °C",
            "The rate of warming per decade, currently approximately 0.2 °C per decade as measured by surface thermometer networks",
            "The temperature difference between the equator and the poles, which determines the strength of the atmospheric heat engine",
          ],
          correct: 1,
          explain:
            "Equilibrium climate sensitivity (ECS) is defined as the equilibrium global mean surface temperature change caused by a sustained doubling of atmospheric CO₂ from pre-industrial levels (~280 ppm to ~560 ppm). The IPCC AR6 assessed the likely range as 2.5–4 °C with a best estimate of ~3 °C. Option A describes transient observed warming, not ECS. Option C describes the observed trend rate, which is a transient quantity reflecting current forcing rather than the equilibrated response to doubled CO₂. Option D describes the equator-to-pole temperature gradient, which is a factor in atmospheric circulation but is not the definition of ECS.",
        },
        {
          q: "The ocean currently absorbs roughly what fraction of the excess heat accumulating in the Earth system due to the greenhouse-gas-driven energy imbalance?",
          a: [
            "Approximately 30%, with the remainder split evenly between the atmosphere and the land surface",
            "Approximately 60%, primarily in the surface mixed layer down to 100 m depth",
            "Approximately 93%, with the ocean acting as the dominant heat reservoir; the atmosphere, land, and cryosphere together absorb the remaining ~7%",
            "Approximately 50%, matching the ocean's fractional contribution to Earth's surface area",
          ],
          correct: 2,
          explain:
            "Because of its enormous heat capacity, the ocean absorbs roughly 93% of the extra energy trapped by greenhouse gases. Earth's top-of-atmosphere energy imbalance is currently measured at approximately +0.87 W/m² (averaged over the full surface). The deep ocean's capacity to absorb and store this heat means surface temperatures rise more slowly than they would on a planet covered only by land or atmosphere. Option A underestimates ocean uptake. Option B is too low and ignores deep-ocean heat uptake below the mixed layer. Option D anchors on area fraction, but heat capacity per unit volume — not area — drives the ocean's dominance.",
        },
        {
          q: "Which of the following correctly identifies Earth's strongest positive climate feedback and its primary negative feedback?",
          a: [
            "Strongest positive feedback: ice-albedo feedback; primary negative feedback: cloud feedback",
            "Strongest positive feedback: water vapour feedback; primary negative feedback: Planck (blackbody radiation) feedback",
            "Strongest positive feedback: lapse-rate feedback; primary negative feedback: carbon-cycle feedback",
            "Strongest positive feedback: cloud feedback; primary negative feedback: water vapour feedback",
          ],
          correct: 1,
          explain:
            "Water vapour is the strongest positive feedback in the climate system: as the planet warms, evaporation increases, raising atmospheric water vapour concentration; since water vapour is itself a powerful greenhouse gas, this amplifies the initial warming. The Planck feedback (also called the blackbody or Stefan-Boltzmann feedback) is the primary stabilising negative feedback: a warmer surface radiates more energy to space as infrared radiation proportional to T⁴, eventually restoring energy balance. Ice-albedo feedback (Option A) is a significant positive feedback but smaller than water vapour. Lapse-rate feedback (Option C) is a negative feedback in the tropics but positive at high latitudes and is not primary. Cloud feedbacks (Option D) have both positive and negative components and their net effect was assessed as likely positive in AR6, but they are not the primary negative feedback.",
        },
        {
          q: "The solar constant is approximately 1,361 W/m². What is the global mean absorbed solar radiation at Earth's surface, and what two factors reduce it from the solar constant?",
          a: [
            "Approximately 1,361 W/m²; the solar constant already represents the global mean because it is measured at the top of the atmosphere",
            "Approximately 680 W/m²; the only reduction is geometric — the hemisphere facing the Sun at any moment receives half the total flux",
            "Approximately 240 W/m²; the solar constant is reduced by a factor of 4 (spherical geometry distributes flux over the full sphere, not a disc) and further reduced by ~30% because Earth's albedo reflects roughly 30% of incoming solar radiation back to space",
            "Approximately 340 W/m²; the solar constant is divided by 4 for geometry, and clouds reflect 100% of the solar radiation back before it reaches the surface",
          ],
          correct: 2,
          explain:
            "The cross-sectional area of Earth (πR²) intercepts solar radiation, but that energy is distributed over the full sphere (4πR²), giving a geometric reduction factor of 4: 1,361 ÷ 4 ≈ 340 W/m² at the top of the atmosphere globally averaged. Earth's Bond albedo is approximately 0.30, meaning ~30% is reflected back to space by clouds, ice, and the surface, leaving ~240 W/m² absorbed globally on average. Option A ignores both the geometric factor and albedo. Option B applies only the factor-of-2 hemisphere correction and ignores albedo. Option D correctly identifies the 340 W/m² intermediate step but then incorrectly states that clouds reflect 100% — in reality only ~30% is reflected by the combined albedo of Earth.",
        },
        {
          q: "Arctic amplification describes the observed fact that the Arctic is warming at roughly 3–4 times the global mean rate. Which mechanism is the single largest contributor to this amplification?",
          a: [
            "Increased black carbon (soot) deposition on Arctic sea ice from shipping routes opened by warming, which reduces ice albedo and accelerates local melting",
            "Poleward heat transport by ocean currents has increased as tropical waters warm, delivering disproportionately more heat to the Arctic basin",
            "The loss of sea ice and snow cover exposes dark ocean and land surfaces that absorb far more solar radiation than reflective ice and snow, dramatically reducing Arctic albedo — the ice-albedo feedback",
            "The thinning of the stratospheric ozone layer over the Arctic allows more UV radiation to penetrate to the surface, directly heating polar regions",
          ],
          correct: 2,
          explain:
            "The ice-albedo feedback is the dominant driver of Arctic amplification. Sea ice has an albedo of roughly 0.6–0.9 (reflecting 60–90% of sunlight); open ocean has an albedo of roughly 0.06 (absorbing 94% of sunlight). As warming melts sea ice, the exposed ocean surface absorbs vastly more solar energy, accelerating local warming — a powerful positive feedback loop. Black carbon deposition (Option A) is a real process but a secondary contributor. Increased poleward ocean heat transport (Option B) does play a role, particularly through Atlantic Meridional Overturning changes, but is secondary to ice-albedo feedback. Ozone thinning (Option D) reduces UV filtering but does not supply significant additional energy to the surface over the wavelengths that drive warming.",
        },
        {
          q: "ENSO (El Niño–Southern Oscillation) operates on what timescale, and what characterises the El Niño phase in terms of Pacific sea surface temperatures?",
          a: [
            "ENSO operates on a 20–30 year cycle; El Niño is characterised by anomalously cool sea surface temperatures in the central and eastern equatorial Pacific",
            "ENSO operates on a 3–7 year irregular cycle; El Niño is characterised by anomalously warm sea surface temperatures in the central and eastern equatorial Pacific, weakening of the trade winds, and suppressed upwelling of cold water along the South American coast",
            "ENSO operates on an annual cycle tied to the seasonal migration of the Intertropical Convergence Zone; El Niño occurs every boreal summer when the ITCZ shifts northward",
            "ENSO operates on a 50–100 year multidecadal cycle; El Niño is characterised by a sudden strengthening of the trade winds that pushes warm water into the western Pacific",
          ],
          correct: 1,
          explain:
            "ENSO is an irregular coupled ocean-atmosphere oscillation with a recurrence interval of 3–7 years, driven by feedbacks between trade wind strength and Pacific sea surface temperature gradients (the Bjerknes feedback). During El Niño, trade winds weaken, allowing the warm pool of water usually confined to the western Pacific to spread eastward across the central and eastern equatorial Pacific; this suppresses coastal upwelling off Peru and Ecuador and shifts global rainfall patterns. Option A gives the wrong period and the wrong SST anomaly sign. Option C conflates ENSO with the seasonal cycle. Option D gives a multidecadal period that describes the Pacific Decadal Oscillation, not ENSO, and reverses the trade-wind signal.",
        },
        {
          q: "In the global carbon cycle, which of the following best describes the role of the terrestrial biosphere as a carbon sink, and what threatens to turn it into a net carbon source?",
          a: [
            "The terrestrial biosphere is currently a net carbon source because deforestation and agricultural land-use change release more carbon than photosynthesis sequesters; this has been true throughout the industrial era",
            "The terrestrial biosphere currently acts as a net carbon sink, absorbing roughly 30% of anthropogenic CO₂ emissions through photosynthesis and soil uptake; warming, drought, wildfires, and permafrost thaw all threaten to reduce this sink or reverse it",
            "The terrestrial biosphere is carbon-neutral on decadal timescales because plant respiration exactly balances photosynthesis; only the ocean acts as a meaningful sink",
            "The terrestrial biosphere acts as a net sink only during glacial periods when cooler temperatures slow soil respiration; during interglacials it is always a net source",
          ],
          correct: 1,
          explain:
            "Despite ongoing deforestation, the terrestrial biosphere as a whole currently takes up a net ~3 GtC/yr — roughly 30% of annual anthropogenic CO₂ emissions — primarily through CO₂ fertilisation of photosynthesis and regrowth of vegetation in some regions. Threats to this sink include increased drought stress reducing photosynthesis, intensified wildfires releasing stored carbon, permafrost thaw releasing ancient organic carbon as CO₂ and CH₄, and ecosystem respiration accelerating faster than photosynthesis at higher temperatures. Option A confuses land-use emissions (a gross source) with the net biospheric balance. Option C is incorrect — net ecosystem production is positive (sink) in many regions. Option D misrepresents the glacial-interglacial biosphere balance, which is more complex and driven largely by temperature and CO₂ co-variation.",
        },

        // ── CHAPTER 2 — CLIMATE THROUGH HISTORY ──────────────────────────────

        {
          q: "Milankovitch cycles describe three periodic variations in Earth's orbital and axial geometry. Which option correctly names all three cycles and their approximate periods?",
          a: [
            "Eccentricity (~100,000 years), obliquity (~41,000 years), and precession (~26,000 years)",
            "Eccentricity (~400,000 years), obliquity (~100,000 years), and precession (~41,000 years)",
            "Eccentricity (~100,000 years), axial tilt variation (~26,000 years), and perihelion shift (~41,000 years)",
            "Eccentricity (~23,000 years), obliquity (~100,000 years), and axial wobble (~41,000 years)",
          ],
          correct: 0,
          explain:
            "The three Milankovitch cycles are: (1) eccentricity — the variation in the ellipticity of Earth's orbit, with a dominant cycle of ~100,000 years (and a longer ~400,000-year cycle); (2) obliquity — the variation in the tilt of Earth's rotational axis between ~22.1° and 24.5°, with a period of ~41,000 years; and (3) precession — the wobble of the rotational axis like a spinning top, with a period of ~26,000 years (sometimes cited as ~23,000 years for the climatic precession). Option B assigns the 400 kyr cycle to eccentricity's primary period and shifts the other periods incorrectly. Option C uses informal terms but assigns the wrong periods to each. Option D swaps the periods of eccentricity and precession.",
        },
        {
          q: "During the last glacial period (approximately 110,000 to 12,000 years ago), Greenland ice cores record more than 25 episodes in which temperatures rose abruptly by 5–15 °C within decades and then gradually cooled over centuries. These are called:",
          a: [
            "Milankovitch oscillations — the glacial period's response to the 41,000-year obliquity cycle, subdivided into discrete warming pulses",
            "Dansgaard-Oeschger (D-O) events — millennial-scale abrupt warming and cooling cycles driven by rapid reorganisations of the Atlantic Meridional Overturning Circulation (AMOC) and associated atmospheric teleconnections",
            "Heinrich events — episodes of massive iceberg discharge from the Laurentide Ice Sheet that cooled the North Atlantic and triggered brief warm interludes in Greenland",
            "Bond cycles — 1,500-year climate oscillations that persist into the Holocene and are driven by solar variability",
          ],
          correct: 1,
          explain:
            "D-O events are the most prominent millennial-scale climate variability of the glacial period, recorded as sawtooth-shaped temperature oscillations in the Greenland ice core record (GISP2, NGRIP, etc.). More than 25 such events occurred between ~110 ka and ~12 ka. Greenland warmed by 5–15 °C within decades to centuries, then cooled more gradually over centuries to millennia. The leading mechanism involves rapid shifts in the strength and geometry of AMOC, which redistributes heat between hemispheres (the bipolar seesaw). Milankovitch oscillations (Option A) operate on 10,000–100,000-year timescales, far too slow to explain these abrupt changes. Heinrich events (Option C) are episodes of iceberg discharge that produce cold stadials, not the warm interstadials. Bond cycles (Option D) describe 1,500-year Holocene variability — a related but distinct phenomenon.",
        },
        {
          q: "The Younger Dryas was an abrupt cold reversal that interrupted the last deglaciation. Which set of dates and characteristics correctly describes it?",
          a: [
            "Approximately 18,000–15,000 years BP; caused by peak ice-sheet extent at the Last Glacial Maximum; Greenland cooled by ~3 °C over several thousand years",
            "Approximately 12,900–11,700 years BP; Greenland temperatures dropped by roughly 10 °C within a few decades and then rebounded by a similar magnitude within roughly 50 years at the termination; likely triggered by a slowdown or collapse of AMOC following meltwater input to the North Atlantic",
            "Approximately 8,200 years BP; a brief 200-year cold event caused by the catastrophic drainage of glacial Lake Agassiz into Hudson Bay; primarily a Northern Hemisphere phenomenon with minimal global impact",
            "Approximately 6,000–5,000 years BP; a mid-Holocene cooling linked to weakening summer insolation in the Northern Hemisphere and expansion of the Sahara Desert",
          ],
          correct: 1,
          explain:
            "The Younger Dryas spans ~12,900–11,700 years BP (before present), during which Greenland cooled by roughly 10 °C in decades at its onset and then warmed by a similar amount within ~50 years at its abrupt termination — one of the most dramatic climate transitions in the ice core record. The leading causal mechanism is a meltwater pulse (possibly from the Laurentide Ice Sheet drainage routes) that freshened the North Atlantic and disrupted AMOC, dramatically reducing poleward heat transport. Option A describes the Last Glacial Maximum, not the Younger Dryas. Option C correctly describes the 8.2 ka event, a different (shorter and weaker) cold episode. Option D describes mid-Holocene climate change driven by orbital forcing, not the Younger Dryas.",
        },
        {
          q: "Ice core records from Antarctica (Vostok, EPICA Dome C) preserve climate data spanning roughly 800,000 years. Which statement about what these records show is most accurate?",
          a: [
            "CO₂ and temperature vary completely independently over ice ages, demonstrating that CO₂ is a consequence of warming rather than a cause; temperature leads CO₂ by approximately 5,000 years at every glacial termination",
            "CO₂ and temperature are tightly coupled across glacial-interglacial cycles, with CO₂ ranging from ~180 ppm (glacial) to ~280 ppm (interglacial); Antarctic temperature lags CO₂ at some transitions and leads at others — the relationship is a feedback loop, not a simple cause-and-effect chain",
            "CO₂ concentration has never exceeded 300 ppm in the past 800,000 years, confirming that today's ~420 ppm levels are entirely within the range of natural variability",
            "Temperature cycles over the past 800,000 years are driven entirely by eccentricity (100,000-year cycles) with no contribution from obliquity or precession",
          ],
          correct: 1,
          explain:
            "Ice core records from EPICA Dome C and Vostok reveal eight complete glacial cycles over 800,000 years. CO₂ and Antarctic temperature are tightly co-varying, with CO₂ ranging from ~180 ppm in glacial maxima to ~280 ppm in interglacials. The phasing between CO₂ and temperature is complex: in the Southern Hemisphere, temperature slightly leads CO₂ at terminations (by ~800 years on average), but this reflects the bipolar seesaw and Southern Ocean outgassing, not disproof of CO₂'s forcing role — CO₂ amplifies and sustains warming as a feedback. Option A overstates the lead time and misrepresents the mechanism. Option C is incorrect — today's ~420 ppm is ~50% above any value in the 800,000-year record. Option D overstates eccentricity's dominance; both obliquity (41 kyr) and precession (23 kyr) are clearly present in the record.",
        },
        {
          q: "The Eemian interglacial (Last Interglacial, ~125,000 years ago) is a key paleo-analogue for studying sea level response to warming. What does the geological record indicate about global mean sea level during the Eemian?",
          a: [
            "Sea level during the Eemian was approximately 1–2 m above present, attributable solely to thermal expansion of a slightly warmer ocean",
            "Sea level during the Eemian was approximately 6–9 m above present, requiring significant contributions from melting of both the Greenland Ice Sheet and parts of the West Antarctic Ice Sheet; global mean temperature was ~1–2 °C warmer than pre-industrial",
            "Sea level during the Eemian was approximately 30–40 m above present; the full collapse of both the Greenland and Antarctic ice sheets contributed roughly equal amounts to this rise",
            "Sea level during the Eemian was approximately 2–4 m below present, because the Eemian was actually cooler than today and supported slightly larger polar ice sheets",
          ],
          correct: 1,
          explain:
            "The Eemian interglacial peaked around 125,000 years ago with global mean temperatures roughly 1–2 °C above pre-industrial levels (similar to where we are heading in the near-term). Sea level indicators — submerged coral reefs, coastal notches, raised beach deposits — consistently indicate global mean sea level was approximately 6–9 m above present, sometimes cited as a minimum of +6 m. This requires significant net loss from the Greenland Ice Sheet (contributing ~2–3 m) and from marine-based sectors of the West Antarctic Ice Sheet (contributing several additional metres). Option A drastically underestimates Eemian sea level by attributing it only to thermal expansion. Option C overstates the rise by an order of magnitude; full ice sheet collapse would yield ~65 m but there is no evidence for that. Option D has the sign wrong — the Eemian was warmer and had higher sea levels than today.",
        },
        {
          q: "The Paleocene-Eocene Thermal Maximum (PETM) is studied as an analogue for rapid greenhouse warming. Which description is most accurate?",
          a: [
            "The PETM occurred approximately 34 million years ago, was triggered by the opening of the Drake Passage, caused ~2 °C of global warming, and lasted approximately 100,000 years",
            "The PETM occurred approximately 56 million years ago, was triggered by a massive input of isotopically light carbon to the atmosphere and ocean over roughly 20,000 years, caused global warming of 5–8 °C, and was associated with ocean acidification and deep-sea extinction of benthic foraminifera",
            "The PETM occurred approximately 66 million years ago, coinciding with the Chicxulub impact event; the ~10 °C warming resulted from soot and aerosols trapping outgoing longwave radiation",
            "The PETM occurred approximately 3 million years ago, was driven by Northern Hemisphere glaciation amplifying feedbacks, caused ~3 °C cooling rather than warming, and is characterised by the first appearance of tundra ecosystems",
          ],
          correct: 1,
          explain:
            "The PETM (~56 Ma) represents one of the best geological analogues for modern anthropogenic carbon release, though on a far slower timescale. A negative carbon isotope excursion (CIE) of ~3–4‰ in both marine and terrestrial records indicates a massive influx of isotopically light carbon (likely from volcanic degassing, methane hydrate destabilisation, or a combination). Global temperatures rose by 5–8 °C over approximately 20,000 years; deep-ocean temperatures rose ~4–5 °C, and bottom waters became corrosive enough to dissolve carbonate, causing a dramatic shoaling of the calcite compensation depth and mass extinction of benthic foraminifera. Option A misidentifies the timing (34 Ma was the Eocene-Oligocene boundary and Antarctic glaciation onset), trigger (Drake Passage), and magnitude. Option C conflates the PETM with the Cretaceous-Paleogene boundary. Option D describes Pliocene-Pleistocene climate, not the PETM.",
        },

        // ── CHAPTER 3 — MODERN CLIMATE CHANGE ────────────────────────────────

        {
          q: "Global mean sea level has risen by approximately how much since 1880, and what is the current rate of rise as measured by satellite altimetry?",
          a: [
            "Approximately 5–7 cm since 1880; current rate approximately 1.0 mm/yr and decelerating as ice sheet contributions diminish",
            "Approximately 21–24 cm since 1880; current rate approximately 3.6 mm/yr and accelerating, with ice sheet melt increasingly dominant",
            "Approximately 50 cm since 1880; current rate approximately 10 mm/yr and accelerating due to accelerating Antarctic ice sheet collapse",
            "Approximately 10–12 cm since 1880; current rate approximately 2.0 mm/yr and stable, driven almost entirely by thermal expansion with negligible ice contributions",
          ],
          correct: 1,
          explain:
            "The tide gauge and satellite record shows global mean sea level has risen approximately 21–24 cm since 1880. The rate has accelerated through the 20th and 21st centuries: from ~1.4 mm/yr in the early 20th century to ~1.9 mm/yr over 1971–2006 to the current satellite-era rate of approximately 3.6 mm/yr (2006–2018 average per IPCC AR6). The acceleration reflects growing contributions from the Greenland and Antarctic ice sheets, which now contribute roughly as much as thermal expansion and mountain glacier melt combined. Option A dramatically underestimates total rise and current rate. Option C overestimates by more than a factor of two. Option D underestimates total rise and current rate and understates ice sheet contributions.",
        },
        {
          q: "Coral reef ecosystems are particularly sensitive to ocean warming. What do projections indicate about the fate of tropical coral reefs at 1.5 °C and 2 °C of global warming above pre-industrial levels?",
          a: [
            "At 1.5 °C, approximately 10–20% of tropical coral reefs will experience bleaching; at 2 °C, approximately 50% will bleach; these projections assume bleaching is always fatal to the reef",
            "At 1.5 °C, approximately 70–90% of tropical coral reefs will experience severe bleaching or mortality; at 2 °C, more than 99% will experience severe bleaching, effectively eliminating coral reefs as functioning ecosystems at the higher warming level",
            "At 1.5 °C, coral reefs can adapt through symbiont shuffling and genetic selection; bleaching events will remain rare and reefs will fully recover between events; significant reef loss is not projected until 3 °C",
            "Coral reef projections are highly uncertain; the range spans 10–90% loss at 1.5 °C, making any specific estimate scientifically unsupportable",
          ],
          correct: 1,
          explain:
            "The stark difference between 1.5 °C and 2 °C is one of the clearest examples of why half a degree matters in climate impacts. At 1.5 °C above pre-industrial, projections indicate 70–90% of tropical coral reefs will experience severe bleaching or mortality. At 2 °C, this rises to more than 99% — effectively the functional loss of tropical coral reef ecosystems globally. Bleaching occurs when ocean temperatures exceed the coral's thermal tolerance threshold, causing the expulsion of symbiotic algae (zooxanthellae) and eventual mortality if the event is prolonged. Option A severely underestimates the sensitivity. Option C is overly optimistic — while some genetic and symbiont adaptation is possible, the pace of warming outstrips the rate of evolutionary adaptation for most reef systems. Option D mischaracterises scientific confidence; multiple independent modelling lines converge on the 70–90%/>99% estimates.",
        },
        {
          q: "Which statement most accurately describes the projected impact of 1 °C of warming on staple crop yields?",
          a: [
            "A 1 °C warming uniformly increases global crop yields by approximately 5% through CO₂ fertilisation and extended growing seasons, benefiting high-latitude agricultural regions more than tropical ones",
            "A 1 °C warming is projected to reduce global average wheat yields by approximately 6% and maize yields by approximately 7%, driven by heat stress on flowering and pollination, increased evapotranspiration, and more frequent extreme heat events",
            "Crop yield impacts of 1 °C are negligible and within normal interannual variability; significant impacts only emerge above 3 °C where crop production zones shift poleward",
            "A 1 °C warming causes 20–30% yield losses for all major staple crops because of mandatory irrigation increases in tropical regions",
          ],
          correct: 1,
          explain:
            "Meta-analyses of field experiments, crop models, and observed yield trends converge on approximately 6% reduction in global wheat yields and 7% reduction in maize yields per degree Celsius of warming. These losses arise from multiple pathways: heat stress during flowering and grain fill (which has a sharp temperature threshold), increased vapour pressure deficit driving water stress, higher respiration rates at night, and greater frequency of compound heat-drought events. CO₂ fertilisation provides a partial offset for C3 crops (wheat, rice, soybean) but not for C4 crops (maize). Option A conflates the CO₂ fertilisation benefit (which is real but partial) with the net yield outcome, and warming does not uniformly increase yields. Option C ignores observed attribution studies showing yield impacts already detectable at current ~1.2 °C warming. Option D overstates the losses by 3–5×.",
        },
        {
          q: "The wet-bulb temperature threshold of 35 °C is considered a critical physiological limit. What does this mean, and which regions are most at risk of exceeding it?",
          a: [
            "A wet-bulb temperature of 35 °C means the dry-bulb (air) temperature is 35 °C; regions in the mid-latitudes with cool oceanic climates are most at risk because their populations are unacclimatised",
            "A wet-bulb temperature of 35 °C represents the combination of heat and humidity at which a healthy, resting adult human in the shade cannot dissipate metabolic heat through sweating alone, even with unlimited water, making survival impossible beyond roughly 6 hours; the Persian Gulf, South Asia, and parts of coastal China are most at risk",
            "A wet-bulb temperature of 35 °C is the threshold above which crops fail from heat stress, not a direct human physiological limit; agricultural regions in the Sahel are most at risk",
            "A wet-bulb temperature of 35 °C represents conditions under which open-water evaporation ceases; lake and reservoir systems in arid subtropical regions are most at risk from water loss",
          ],
          correct: 1,
          explain:
            "Wet-bulb temperature accounts for both air temperature and humidity: at a wet-bulb temperature of 35 °C, the combination of heat and humidity is so extreme that even a healthy, unclothed, resting adult in shade with unlimited water cannot maintain core body temperature because the ambient wet-bulb temperature equals skin temperature, eliminating the thermal gradient required for evaporative cooling. Exposure for more than roughly 6 hours is fatal. Today, brief exceedances above 35 °C TW have already been recorded in the Persian Gulf and South Asian coastal cities; at 2–4 °C of global warming, such events become regular occurrences. Option A confuses wet-bulb with dry-bulb temperature; 35 °C dry-bulb is warm but tolerable at low humidity. Option C is incorrect — the 35 °C wet-bulb limit is a human physiological limit, not primarily a crop threshold. Option D describes a different physical process unrelated to human thermoregulation.",
        },
        {
          q: "Climate mortality risk from warming is not distributed equally across nations. Which statement best characterises the disparity?",
          a: [
            "High-income nations face the greatest mortality risk from climate change because they have larger populations living in coastal megacities exposed to sea level rise and storm surge",
            "Climate mortality risk is approximately evenly distributed globally because greenhouse gases mix uniformly in the atmosphere and expose all regions to similar temperature increases",
            "At +2 °C of global warming, mortality risk from climate-related causes is projected to be approximately 10 times higher in low-income nations than in high-income nations, reflecting differences in adaptive capacity, healthcare infrastructure, exposure to heat and infectious disease, and economic dependence on climate-sensitive sectors",
            "Low-income nations face only slightly higher risk than high-income nations — approximately 20–30% higher — because improvements in global public health infrastructure have largely equalised vulnerability",
          ],
          correct: 2,
          explain:
            "The disparity in climate mortality risk between high- and low-income nations reflects the intersection of two factors: differential exposure (low-income nations are disproportionately located in tropical and subtropical regions already near physiological tolerance limits) and differential adaptive capacity (healthcare systems, infrastructure, disaster preparedness, and economic buffers to cope with impacts). At +2 °C, IPCC AR6 WG2 projects that mortality risk from climate-related causes is approximately 10 times higher in low-income nations than in high-income nations. Option A incorrectly identifies high-income nations as bearing the greatest burden; while coastal exposure is real, adaptive capacity dramatically reduces realised mortality. Option B ignores the well-documented geographic and socioeconomic gradients in climate vulnerability. Option D drastically underestimates the disparity documented in the literature.",
        },
        {
          q: "Compound climate events — situations where two or more hazards co-occur or closely follow each other — have become more frequent as the climate has warmed. What does the observational record show about their trend since 1950?",
          a: [
            "Compound events such as concurrent heat and drought have increased in frequency by approximately 5–10% globally since 1950, mostly confined to subtropical drylands",
            "Compound events have approximately doubled in frequency since 1950, with the combination of marine heatwaves and concurrent terrestrial heat extremes showing some of the strongest increases; both natural variability and anthropogenic forcing contribute, but attribution studies show the trend cannot be explained by natural variability alone",
            "No statistically significant trend in compound event frequency has been detected since 1950 when data quality uncertainties are properly accounted for; the apparent increase reflects improved observational coverage",
            "Compound events have increased in frequency by approximately 500% since 1950 across all regions and all hazard types, with the increase accelerating sharply after 1990",
          ],
          correct: 1,
          explain:
            "Analysis of observational records shows that compound climate events — defined as combinations of multiple drivers and hazards that cause more damage than the sum of their parts — have approximately doubled in frequency globally since 1950. This includes concurrent marine and terrestrial heatwaves, compound flood-drought sequences, and simultaneous extreme events affecting multiple breadbasket regions. Formal attribution studies (e.g., Zscheischler et al., 2020) demonstrate that the observed trends exceed what can be attributed to natural variability alone, implicating anthropogenic forcing as the driver. Option A underestimates the observed increase and incorrectly restricts it geographically. Option C misrepresents the state of detection and attribution science — the trend is statistically robust across multiple independent datasets. Option D exaggerates the magnitude by an order of magnitude.",
        },
        {
          q: "In the hierarchy of climate mitigation strategies, which of the following correctly distinguishes mitigation from adaptation, and identifies the primary mechanism by which carbon dioxide removal (CDR) differs from emissions reductions?",
          a: [
            "Mitigation and adaptation are synonymous — both aim to reduce climate risk; CDR is simply a faster form of emissions reduction achieved through technology deployment",
            "Mitigation reduces the magnitude of future climate change by cutting greenhouse gas emissions or enhancing sinks; adaptation reduces the harm caused by climate change that is already locked in; CDR is a subset of mitigation that actively removes CO₂ already in the atmosphere, rather than preventing new emissions — it can in principle reverse a portion of historical forcing if deployed at scale",
            "Adaptation reduces future emissions by changing energy systems; mitigation reduces current damage through infrastructure improvements; CDR is a form of adaptation that removes pollution from the local environment",
            "Mitigation applies only to industrial emitters and CDR only to land use; adaptation refers exclusively to sea level rise responses; no single strategy addresses all three climate risks simultaneously",
          ],
          correct: 1,
          explain:
            "Mitigation refers to any action that reduces the magnitude of future climate change — primarily by cutting greenhouse gas emissions (transitioning away from fossil fuels, improving energy efficiency) or by enhancing natural and technological carbon sinks. Adaptation refers to adjustments in natural or human systems in response to actual or expected climate effects — building sea walls, heat-health early warning systems, drought-resistant crops — to reduce harm from changes that are already committed. Carbon dioxide removal (CDR), including both natural approaches (afforestation, soil carbon sequestration, enhanced weathering) and technological approaches (direct air capture, bioenergy with CCS), is a subset of mitigation that uniquely reduces the atmospheric stock of CO₂ rather than merely slowing the rate of addition; this means CDR can in principle reduce cumulative warming over time, not just slow its trajectory. Option A incorrectly equates the two strategies and mischaracterises CDR. Option C reverses the definitions. Option D incorrectly siloes the strategies by sector when in reality all three operate across the full economy.",
        },
      ],
    },
  ],
}

export default clim101Capstone
