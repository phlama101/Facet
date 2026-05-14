import { Globe, Droplets, Search, Activity, Shield } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const marsModernSearch: Lesson = {
  id: 'abio-101-1-4-1',
  title: 'Mars: From Ancient Habitability to Modern Search',
  track: 'ast',
  trackName: 'Astrobiology',
  level: 'Beginner',
  duration: '14 min',
  xpReward: 150,
  description: `Mars was once warm enough for liquid rivers and lakes — a world transformed from potential cradle of life to frozen desert. Follow the geological evidence from Noachian valley networks to Perseverance\'s Jezero delta, and examine what the Mars Sample Return mission may finally reveal.`,
  sources: [
    { org: 'NASA',               title: 'Mars Exploration Program — Perseverance Rover',         url: 'https://mars.nasa.gov/mars2020/' },
    { org: 'NASA',               title: 'Curiosity Rover — Gale Crater Science',                 url: 'https://mars.nasa.gov/msl/' },
    { org: 'ESA',                title: 'ESA Mars Express — OMEGA and HRSC Data',                url: 'https://www.esa.int/Science_Exploration/Space_Science/Mars_Express' },
    { org: 'Nature Astronomy',   title: 'Grotzinger et al. — Habitable Fluvio-Lacustrine Environment at Gale Crater', url: 'https://www.nature.com/natastron' },
    { org: 'Astrobiology',       title: 'Farley et al. — Astrobiological Objectives of Mars 2020', url: 'https://www.liebertpub.com/journal/ast' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'A world that lost its oceans: Mars from the Noachian era to Jezero Crater',
      body: `Mars today is a frigid, radiation-bombarded desert where the atmospheric pressure averages only 0.6% of Earth\'s sea level — far too low for liquid water to persist at the surface. Yet the geological record speaks clearly of a radically different past. Between about **4.1 and 3.7 billion years ago**, during the epoch geologists call the **Noachian period**, Mars was shaped by flowing water on a planetary scale. Valley networks — dendritic systems of river channels thousands of kilometres long — dissect the ancient southern highlands, carved by precipitation-fed runoff or groundwater sapping over timescales of millions of years. The **Hellas basin**, a 2,300-km-diameter impact crater depressed 8 km below datum, may have hosted a standing lake rivalling Earth\'s Mediterranean Sea in volume. The **Mars Orbital Laser Altimeter (MOLA)** aboard Mars Global Surveyor, which mapped the entire planet\'s topography from 1997 onwards, revealed the subtle terracing and shoreline-like contours that record this ancient hydrological era. Isotopic and mineralogical analyses from orbit and from rovers have confirmed that liquid water was not merely ephemeral but persisted in environments chemically suitable for life.

The mineralogical evidence for ancient water is compelling. **Phyllosilicates** — clay minerals including smectite, nontronite, and chlorite — form by prolonged water-rock interaction at near-neutral pH and temperatures that are broadly habitable by terrestrial microorganisms. The **OMEGA** spectrometer on ESA\'s Mars Express and the **CRISM** instrument on NASA\'s Mars Reconnaissance Orbiter have mapped phyllosilicates extensively across Noachian terrains: in Mawrth Vallis, one of the oldest and most mineralogically diverse regions on Mars, phyllosilicate-bearing deposits span hundreds of kilometres. Younger **sulfate** minerals — jarosite, gypsum, and calcium sulfate — record an acidic, evaporitic water environment in the Hesperian era (3.7–3.0 Ga), analogous to the acid rock drainage environments on Earth that still support life. The sequential stratigraphy — phyllosilicates below, sulfates above — records a planet transitioning from relatively benign, pH-neutral waters to harsher, more acidic conditions as volcanism declined and the atmosphere thinned.

The **Curiosity rover**, which landed in **Gale Crater** in August 2012, provided the first ground-truth confirmation of a habitable ancient Martian environment. Gale Crater contains a central mound, **Aeolis Mons (Mount Sharp)**, built of layered sedimentary deposits laid down over hundreds of millions of years. At the base of the crater, Curiosity drilled into mudstone beds at a site called **Yellowknife Bay** (2013) and found sediments with the key signatures of habitability: the rock was deposited in a fluvio-lacustrine (river-lake) setting with neutral pH, low salinity, moderate temperature, and the presence of both oxidised and reduced chemical species — providing the energy gradient that chemolithotrophic microorganisms on Earth exploit. The carbon, hydrogen, oxygen, sulfur, phosphorus, and nitrogen — the **CHNOPS elements** of life — were all present. Curiosity detected **organic molecules** including thiophenes, benzene, and short-chain alkanes in the 3.5-billion-year-old mudstones — though whether these are biological or abiotic in origin remains unresolved.

The **Perseverance rover** landed in **Jezero Crater** on 18 February 2021, choosing a site that from orbital imagery had been identified as an ancient river delta — arguably the highest-priority astrobiological target on Mars. Jezero (crater diameter 49 km) hosted a lake fed by an inlet river system; the preserved fan-delta deposit at the western rim, imaged in detail by the CRISM spectrometer, shows distinctive carbonate and olivine mineralogy consistent with deposition in a habitable lake environment. Perseverance carries the **SHERLOC** ultraviolet Raman spectrometer for in situ organic detection and has been coring and caching samples from the delta's most promising geochemical units. The mission's most transformative goal is providing samples for the **Mars Sample Return** (MSR) campaign: tubes filled with Jezero delta sediments and igneous rocks will eventually be collected by a future retrieval lander and returned to Earth\'s laboratories, where they can be subjected to the full arsenal of analytical chemistry — isotopic analyses, mass spectrometry, transmission electron microscopy — that cannot yet be miniaturised onto a rover.

Two unresolved questions define the modern Mars habitability debate. First, the **present-day habitability** question: liquid brines — highly concentrated salt solutions with depressed freezing points — may exist transiently in the subsurface, and some interpretations of radar data from MARSIS (Mars Express) suggest a buried liquid body near the south polar cap at ~1.5 km depth, though alternative explanations (conductive basal sediments) have been proposed. The **Recurring Slope Lineae (RSL)**, dark streaks that advance down crater walls in warm seasons, were once thought to be brine flows, but more recent analyses favour dry granular flows triggered by CO₂ sublimation. Second, the question of **why Mars became uninhabitable**: Mars lost its global magnetic dynamo approximately 4 billion years ago when its small iron core cooled and ceased convection, ending the planetary magnetic field that had shielded the atmosphere from **solar wind stripping**. Without this protection, solar wind particles — primarily energetic protons — gradually ablated the upper atmosphere, particularly during the young Sun\'s intense early activity. Models suggest Mars lost most of its nitrogen, CO₂, and water vapour over the following billion years, collapsing the greenhouse effect and freezing the remaining surface water. The remaining CO₂ is sequestered in polar ice and carbonate rocks; the water inventory is divided between polar ice caps, permafrost, and hydrated minerals at depth.`,
      keyTerms: [
        {
          term: 'Noachian period',
          def: 'The oldest geological era on Mars, spanning approximately 4.1 to 3.7 billion years ago, characterised by widespread valley networks, basin lakes, and hydrated mineral formation. Noachian terrains preserve the most compelling evidence for sustained liquid water on the Martian surface and are considered the most astrobiologically significant geological epoch on the planet.',
        },
        {
          term: 'phyllosilicates',
          def: `A class of clay minerals — including smectite, nontronite, and chlorite — that form when silicate rocks interact with liquid water at near-neutral pH over extended timescales. Detected extensively across Mars\'s Noachian highlands by orbital infrared spectrometers, phyllosilicates are considered strong indicators of past aqueous environments with conditions broadly compatible with terrestrial microbial life.`,
        },
        {
          term: 'Mars Global Surveyor / MOLA',
          def: `NASA\'s Mars Global Surveyor spacecraft (1997–2006) carried the Mars Orbital Laser Altimeter (MOLA), which produced a global topographic map of Mars at ~460-metre horizontal resolution and decimetric vertical precision. MOLA data revealed valley network morphology, basin depths (including Hellas at −8 km), and subtle features interpreted as ancient shorelines, fundamentally reshaping understanding of Mars\'s hydrological history.`,
        },
        {
          term: 'Jezero Crater delta',
          def: 'A preserved fan-delta deposit at the western rim of Jezero Crater (Mars), formed when a river system debouched into a standing lake approximately 3.5–3.9 billion years ago. Identified from orbit by carbonate and olivine mineralogy indicative of lake-bottom deposition, Jezero was selected as the landing site for the Perseverance rover in 2021 because fan deltas on Earth concentrate and preserve biosignatures from the catchment watershed.',
        },
        {
          term: 'Mars Sample Return',
          def: `A planned multi-mission campaign by NASA and ESA to retrieve sample tubes cached by the Perseverance rover from Jezero Crater and return them to Earth for analysis. The samples would be the first Mars materials returned since the Apollo era\'s lunar sample programme and would enable isotopic, microscopic, and biochemical analyses impossible to perform in situ — representing the most direct test of ancient Mars habitability achievable before a crewed mission.`,
        },
        {
          term: 'solar wind stripping',
          def: `The process by which energetic charged particles in the solar wind transfer momentum to atmospheric particles at the upper boundary of a planetary atmosphere, ejecting them into space. On Mars, the absence of a global magnetic field since ~4 Ga removed the planetary magnetosphere that would otherwise deflect the solar wind, allowing it to gradually erode the atmosphere — a process studied by NASA\'s MAVEN spacecraft (2014–present), which has measured atmospheric escape rates directly.`,
        },
      ],
    },
    {
      type: 'concept',
      title: 'Evidence for Ancient Habitability: Minerals, Craters, and Rovers',
      body: 'The case for ancient Martian habitability is built from three converging lines of evidence: orbital mineralogy (identifying water-altered rocks from space), morphological geology (valley networks and basin shorelines visible in imagery and altimetry), and in situ rover geochemistry (direct measurement of sediment composition and habitability indicators at ground level). Each approach is independently powerful; together they make the ancient habitability of Mars one of the most robustly supported conclusions in planetary science.',
      cards: [
        {
          name: 'Orbital Mineralogy: Phyllosilicates and Sulfates',
          icon: Search,
          color: BRAND.accent,
          desc: `Infrared spectrometers on Mars Express (OMEGA) and Mars Reconnaissance Orbiter (CRISM) have mapped two distinct mineral suites that record sequential water episodes. Noachian-era phyllosilicates (clays) record prolonged neutral-pH water-rock interaction; younger Hesperian sulfates record acidic, evaporitic conditions. This mineralogical stratigraphy narrates Mars\'s transition from a wetter, more hospitable past to the modern arid state.`,
          examples: 'Mawrth Vallis: one of the most mineralogically diverse Noachian sites, hundreds of km of clay-rich outcrops. Gale Crater: CRISM detected smectite clays before Curiosity landing. Opportunity rover (Meridiani Planum): jarosite sulfate — forms only in acidic aqueous conditions, T > 0°C. ESA ExoMars Trace Gas Orbiter (2016–): improved spatial resolution mineral mapping.',
        },
        {
          name: 'Gale Crater: Curiosity\'s Habitable Ancient Lake',
          icon: Droplets,
          color: BRAND.jade,
          desc: 'At Yellowknife Bay (2013), Curiosity found mudstone sediments from a lake that was habitable by Earth-life standards: neutral pH (~7), low salinity, moderate temperature (~0–50°C), and a redox gradient between oxidised and reduced iron. These conditions match the niche of chemolithotrophic bacteria — microbes that extract energy from inorganic chemical reactions rather than sunlight. CHNOPS elements were all present, and organic molecules were preserved in the 3.5-Ga rock.',
          examples: `Yellowknife Bay mudstone: drilled 2013, first Mars rock drilled by a rover. Mineral assemblages: smectite, magnetite, pyrite, calcium sulfate. Organic molecules detected (2018): thiophenes, 500 ppb chlorobenzene. Mount Sharp strata: ~5 km of sedimentary record spanning Noachian through Amazonian. Curiosity\'s SAM instrument: detected seasonal CH₄ fluctuations — source unresolved.`,
        },
        {
          name: 'Jezero Delta: Perseverance and Sample Return',
          icon: Globe,
          color: BRAND.amethyst,
          desc: `Jezero Crater\'s ancient river delta is the prime sample target for Mars Sample Return. Fan deltas concentrate organic matter, microbial mats, and biosignature-bearing minerals washed from the watershed. Perseverance\'s SHERLOC Raman spectrometer detects aromatic organics in situ; the rover is caching 43 titanium sample tubes of drill cores and atmosphere for eventual Earth return by a joint NASA-ESA campaign, planned for the 2030s.`,
          examples: 'Perseverance landing: 18 February 2021. SHERLOC: detected organics in Wildcat Ridge mudstone (2022). Carbonate minerals in delta front: inorganic or biological precipitation? Sample tube caching: 43 tubes planned. Mars Sample Return Phase A: Earth Entry Vehicle and Capture-Containment-Return System in development.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'The Collapse of Habitable Mars: Magnetic Field Loss and Atmospheric Escape',
      body: `Understanding why Mars is no longer habitable requires tracing the linked failures of its magnetic dynamo, its atmospheric pressure, and its surface liquid water inventory. These were not independent catastrophes but a cascade triggered by the rapid cooling of a small planetary core — a consequence of Mars\'s lower mass relative to Earth.`,
      cards: [
        {
          name: 'Dynamo Shutdown and Atmospheric Loss',
          icon: Shield,
          color: BRAND.coral,
          desc: `Mars\'s iron core cooled and solidified ~4 Ga, shutting down the convection-driven magnetic dynamo and eliminating the global magnetic field. Without this magnetospheric shield, the solar wind — particularly intense from the young, more active Sun — began sputtering and ionising the upper atmosphere. The MAVEN spacecraft has measured present-day atmospheric escape rates of ~100 g/s, extrapolating to multi-bar atmosphere loss over 4 Gyr.`,
          examples: 'MAVEN (2014–): measures ion escape via solar wind interaction. Current escape rate: ~100 g/s (CO₂, O, N, Ar). Crustal magnetic anomalies: remnant of the ancient field, preserved in Noachian highlands. Young Sun XUV flux: ~100× modern value at 3.5 Ga, driving higher escape rates. Mars atmosphere today: 95% CO₂, ~6 mbar total — insufficient for surface liquid water.',
        },
        {
          name: 'Present-Day Brines and Subsurface Habitability',
          icon: Activity,
          color: BRAND.gold,
          desc: `Perchlorate and chloride salts found by Phoenix, Curiosity, and Insight can depress water\'s freezing point to −70°C, making transient brines possible in the present Martian shallow subsurface despite the frigid surface temperatures. Radar data from MARSIS (Mars Express) showed a potential radar-bright reflector at 1.5 km depth near the south pole, interpreted by some as a subglacial brine lake, though the debate remains open. If liquid brines persist today, they represent the last potential refuge for extant Martian life.`,
          examples: 'Phoenix lander (2008): detected perchlorates (ClO₄⁻) in soil at ~0.5 wt%. Eutectic temperature of Mg(ClO₄)₂ brines: −67°C. MARSIS radar anomaly (Orosei et al. 2018, Science): 20 km wide reflector at 1.5 km depth. Recurring Slope Lineae: now attributed to dry granular flows, not liquid brines. Insight seismometer: revealed liquid outer core — Mars not fully solid.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Mars Habitability Through Time: A Planetary Cascade',
      body: `The story of Mars habitability is a linked chain of planetary processes: from the Noachian warm-wet era through the loss of the magnetic field and atmosphere, to today\'s cold desert and the question of what the Mars Sample Return may yet reveal. Each node in this flow represents a major transition in Martian habitability.`,
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Trace the arc of Mars habitability from its Noachian warm-wet past through the collapse of its magnetic dynamo and atmosphere to the modern search for preserved biosignatures and possible subsurface brines',
        nodes: [
          {
            id: 'noachian',
            label: 'Noachian Mars (4.1–3.7 Ga)',
            description: 'Early Mars had a thicker CO₂ atmosphere, a global magnetic field protecting it from solar wind, and surface conditions permitting liquid water. Valley networks carved by precipitation-fed rivers drained into lakes such as the Hellas basin sea. Phyllosilicate clay minerals — detected from orbit by OMEGA and CRISM — formed in prolonged neutral-pH water-rock interactions. Whether the climate was persistently warm or episodically warm (with ice ages between volcanic outgassing events) is debated, but the mineralogical and morphological record is unambiguous: liquid water shaped the Noachian surface for millions to hundreds of millions of years.',
            color: BRAND.accent,
          },
          {
            id: 'dynamo-loss',
            label: 'Magnetic Dynamo Shutdown (~4.0 Ga)',
            description: `Mars\'s smaller mass (~10.7% of Earth\'s) meant its iron core cooled and solidified much faster. The convective motion in the molten outer core that had generated the global magnetic dynamo ceased ~4.0 billion years ago — preserved in the remaining crustal magnetic anomalies mapped by Mars Global Surveyor, which record the ancient field frozen into Noachian igneous rocks. Without the magnetosphere\'s protection, solar wind particles began directly interacting with the ionosphere and upper atmosphere, initiating the long process of atmospheric escape that would ultimately render the surface uninhabitable.`,
            color: BRAND.ruby,
          },
          {
            id: 'atmosphere-loss',
            label: 'Atmospheric Stripping (4.0–3.0 Ga)',
            description: `With no magnetic shield and a young Sun ~30% more magnetically active than today, solar wind sputtering and photochemical escape gradually stripped Mars\'s atmosphere. MAVEN spacecraft measurements (2014–present) have quantified the present-day escape rate (~100 g/s) and shown how it accelerates during solar storms — allowing backwards extrapolation to estimate total historical losses. Mars transitioned from a multi-bar CO₂ atmosphere capable of greenhouse warming to the current 6 mbar relic. As atmospheric pressure fell below the triple point of water (6.1 mbar), surface liquid water became thermodynamically impossible across most of the planet.`,
            color: BRAND.coral,
          },
          {
            id: 'rover-exploration',
            label: 'Rover Exploration: Gale and Jezero',
            description: `NASA\'s rovers have provided ground-truth confirmation of habitability indicators. Curiosity at Gale Crater (2012–) found 3.5-Ga lacustrine mudstones with neutral pH, a redox energy gradient from iron cycling, and preserved organic molecules — satisfying all key criteria for a past habitable environment. Perseverance at Jezero Crater (2021–) is drilling the ancient river delta, where organic-rich sediments and carbonate minerals have been detected by SHERLOC and PIXL instruments. Both missions establish that Mars did not merely have water — it had geochemically complex, energy-rich aqueous environments that would support microbial life by Earth standards.`,
            color: BRAND.jade,
          },
          {
            id: 'sample-return',
            label: 'Mars Sample Return and Future Questions',
            description: `The Mars Sample Return campaign — Perseverance\'s cached tubes collected by a future NASA lander and returned to Earth by an ESA Earth Return Orbiter — represents the pivotal next step. Earth-based laboratories can perform isotopic analyses (e.g., δ¹³C, δ³⁴S) to distinguish biotic from abiotic carbon and sulfur cycling, transmission electron microscopy to search for microfossil morphologies, and ATP assays or nucleic acid extraction to test for extant life in the samples. The question of whether ancient Mars life ever existed will not be definitively answered by any rover instrument — it requires the sample return.`,
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'noachian',       to: 'dynamo-loss',      label: 'Small planetary mass → rapid core cooling → dynamo shutdown ~4.0 Ga' },
          { from: 'dynamo-loss',    to: 'atmosphere-loss',   label: 'Loss of magnetic shield → solar wind sputtering → multi-bar CO₂ stripped over ~1 Gyr' },
          { from: 'atmosphere-loss', to: 'rover-exploration', label: 'Preserved Noachian and Hesperian sediments in craters record the habitable era — targeted by Curiosity and Perseverance' },
          { from: 'rover-exploration', to: 'sample-return',  label: 'In situ organic detection and sample caching → MSR campaign to return Jezero delta cores to Earth laboratories' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: `Phyllosilicate clay minerals are detected extensively across Mars\'s ancient Noachian terrain. Why are phyllosilicates specifically considered strong indicators of past habitability, rather than simply evidence of past water?`,
          a: [
            'Phyllosilicates require liquid water to form, and liquid water at any temperature or pH is sufficient for all known life on Earth; the detection of clays therefore directly proves Mars once harboured life, since all conditions required for life were simultaneously present wherever clays formed',
            'Phyllosilicates form only through prolonged aqueous alteration of silicate rocks under near-neutral pH and moderate temperature conditions — precisely the geochemical niche occupied by chemolithotrophic microorganisms on Earth; this distinguishes them from sulfates and perchlorates that form under harsh acidic or highly oxidising conditions that are broadly hostile to life as we understand it',
            'Phyllosilicates are biosignatures because they are produced exclusively by the metabolic activity of silicate-dissolving bacteria; no abiotic geochemical pathway can produce the smectite clays detected on Mars without biological mediation, making the OMEGA and CRISM detections direct evidence of past microbial life on the planet',
            'Phyllosilicates are favoured as habitability indicators because they form rapidly in flash-flood events lasting only hours or days; the extensive distribution of clay minerals across Noachian terrain therefore records an extremely high frequency of transient water events, demonstrating that surface water was essentially continuous throughout the Noachian era',
          ],
          correct: 1,
          explain: `Phyllosilicates are habitability indicators because of the specific geochemical conditions they require for formation: sustained water-rock interaction at near-neutral pH (roughly pH 5–9), moderate temperatures (roughly 0–80°C), and timescales of thousands to millions of years. These conditions overlap substantially with the temperature-pH envelope inhabited by the broadest diversity of terrestrial microorganisms, particularly chemolithotrophs — bacteria and archaea that extract energy from inorganic mineral redox reactions. By contrast, sulfate minerals such as jarosite (detected by Opportunity at Meridiani Planum) form under acidic conditions (pH < 4) that severely limit microbial diversity on Earth, and highly oxidising perchlorate environments are toxic to most known metabolisms. Option A is incorrect because liquid water at extreme temperatures or pH extremes (e.g., boiling acid or pH 1 sulfuric acid) is not broadly habitable even though it is liquid. Option C is entirely wrong — phyllosilicates are formed by abiotic hydrothermal and weathering processes throughout Earth\'s geological record; they are not biosignatures but geochemical habitability proxies. Option D mischaracterises the timescale — phyllosilicates require sustained, not transient, aqueous alteration, which is precisely why they indicate prolonged habitability rather than brief flood events.`,
        },
        {
          q: `The Curiosity rover\'s 2013 analysis of Yellowknife Bay mudstone established Gale Crater as an ancient habitable environment. What specific combination of chemical properties made this environment "habitable by Earth-life standards," and why was this finding scientifically significant beyond simply confirming past water?`,
          a: [
            'Yellowknife Bay was declared habitable because Curiosity detected amino acids and lipids directly in the mudstone — the molecular building blocks of Earth life — proving that biological chemistry had actually occurred at Gale Crater and that the sediments preserve the remains of ancient Martian microorganisms',
            'Yellowknife Bay was habitable because it recorded a lacustrine environment with neutral pH (~7), low salinity, moderate temperature, and both oxidised and reduced iron species providing a redox energy gradient — the combination required not just by liquid water but by the metabolic chemistry of chemolithotrophic life; the CHNOPS elements were all present, and the SAM instrument detected organic molecules, establishing habitability as distinct from mere water presence',
            'Curiosity declared Yellowknife Bay habitable solely because the mineralogy indicated the presence of liquid water at some point; habitability in planetary science is defined simply as the former presence of liquid water regardless of temperature, pH, or chemical composition, and the finding was significant because it was the first direct geochemical confirmation of past liquid water on the Mars surface rather than just orbital inference',
            'The habitable designation required the detection of microfossils in the Yellowknife Bay mudstone by Curiosity\'s MAHLI camera; the significance of the discovery was that fossil morphologies identical to Archaean-era terrestrial bacterial stromatolites were imaged in the drill hole, providing the first visual evidence of past microbial life on Mars pending independent verification',
          ],
          correct: 1,
          explain: 'The Yellowknife Bay habitability assessment was scientifically significant precisely because it went beyond confirming past liquid water to characterise the geochemical quality of that environment. The key properties assessed by Curiosity were: (1) pH — neutral, around pH 6–8, inferred from the calcium sulfate veins, smectite clay mineralogy, and absence of strongly acidic or alkaline alteration assemblages; (2) salinity — low, consistent with freshwater rather than hypersaline brine; (3) redox chemistry — the presence of both magnetite (Fe₃O₄, reduced iron) and jarosite precursors alongside smectite indicated simultaneous oxidised and reduced iron species, creating the electrochemical energy gradient that lithotrophic microorganisms exploit; (4) CHNOPS elements — all six biologically essential elements were measurably present in the rock; (5) energy sources — sulfur cycling between sulfate and sulfide forms provides the electron donor-acceptor pair used by sulfate-reducing bacteria on Earth. Option A is wrong because Curiosity did not detect amino acids or confirmed lipids — it detected simpler organics (thiophenes, benzene) whose biological vs. abiotic origin is unresolved. Option C incorrectly defines habitability as merely requiring past liquid water. Option D is false — no microfossils were detected by any rover instrument; MAHLI has insufficient resolution and is not a biosignature detector.',
        },
        {
          q: 'Why did Mars lose its ability to support surface liquid water while Earth has maintained it for over 4 billion years? What role did the magnetic dynamo play in this divergence?',
          a: [
            'Mars lost surface water because it is positioned further from the Sun than Earth, placing it in a region where stellar flux is too low to prevent water from freezing; Earth retains liquid surface water because its position at 1 AU delivers exactly the right amount of solar energy, and the magnetic dynamo plays no role in this outcome since atmospheric heating is determined purely by solar flux and albedo',
            'Mars lost its magnetic dynamo ~4 Ga when its smaller iron core cooled and ceased convection; without a magnetosphere to deflect the solar wind, solar energetic particles sputtered and ionised the upper atmosphere, gradually stripping it over ~1 Gyr; as atmospheric pressure fell below the triple point of water (6.1 mbar), surface liquid water became unstable; Earth, with a larger actively convecting core, retains its geodynamo and magnetosphere, protecting its thicker atmosphere and sustaining surface oceans to the present day',
            'Mars lost its atmosphere because its lower gravity allowed atmospheric molecules to escape thermally (Jeans escape) more easily than from Earth; since Mars has 38% of Earth\'s surface gravity, all atmospheric gases gradually leak into space regardless of magnetic field, and the dynamo is irrelevant because the primary escape mechanism is gravitational rather than magnetic — the same process would eventually strip Earth\'s atmosphere but over a much longer timescale',
            'Mars lost habitability because a large asteroid impact ~3.9 Ga (the Late Heavy Bombardment) vaporised its oceans and volatilised its crust, releasing so much CO₂ that a runaway greenhouse ensued; the subsequent loss of water vapour by UV photolysis stripped the planet of its water inventory, analogous to Venus; Earth survived the Late Heavy Bombardment because its larger mass allowed the crust to reprocess impactor-derived volatiles back into the mantle through subduction',
          ],
          correct: 1,
          explain: `The fate of Mars\'s atmosphere and surface water is fundamentally linked to the early loss of its magnetic dynamo. Mars\'s mass is only ~10.7% of Earth\'s, so its iron core cooled and solidified much faster — shutting down the geodynamo approximately 4 billion years ago. This is recorded in the remnant crustal magnetic anomalies mapped by Mars Global Surveyor, preserved in Noachian-era igneous rocks but absent from younger terrains. Without a magnetosphere, the young Sun\'s intense solar wind (significantly more energetic in the first billion years of the Solar System, when solar XUV flux was ~100× the modern level) directly interacted with Mars\'s ionosphere, sputtering ions from the upper atmosphere. The MAVEN spacecraft has measured present-day atmospheric escape rates and demonstrated their sensitivity to solar storm events. Over ~1 Gyr, this process stripped the equivalent of a multi-bar CO₂ atmosphere, dropping pressure below the triple point of water (6.1 mbar) and making surface liquid water unstable everywhere. Option A incorrectly ignores the atmosphere-loss mechanism and falsely credits solar distance as the sole factor (Mars is only 1.52 AU from the Sun; its current atmosphere could in principle support liquid water if the pressure were sufficient). Option C overstates the role of Jeans escape — it is a minor pathway for Mars atmosphere loss compared to solar wind sputtering and ion pick-up; and lower gravity enhances but does not dominate the escape rate. Option D describes a partially real event (the Late Heavy Bombardment) but misidentifies it as the primary cause; Mars was already transitioning to drier conditions before the LHB ended, and the Venus analogy (runaway greenhouse) does not apply to Mars.`,
        },
        {
          q: `Why is a returned sample from Jezero Crater\'s delta deposits considered more scientifically definitive for detecting ancient Mars life than any measurement a rover instrument can make in situ?`,
          a: [
            'Returned samples are necessary because Martian life would only be detectable using immunoassay antibody-based tests that require refrigeration during transit and cannot withstand the thermal cycling of a rover\'s electronics bay; the Earth\'s laboratory cold chain is the only environment in which these biomolecular detection reagents remain stable for the months needed to complete a Mars mission',
            'Returned samples allow Earth laboratory instruments — isotopic mass spectrometers, transmission electron microscopes, and nanoscale ion probes — to detect life signatures with sensitivity and specificity orders of magnitude beyond rover-scale instruments; for instance, carbon isotope ratios (δ¹³C) can distinguish biological fractionation from abiotic carbonate chemistry at sub-permil precision, and TEM can resolve potential microfossil structures at nanometre scale; no currently deployable rover instrument approaches this capability',
            'Returned samples are more definitive than rover measurements because contamination from Earth is eliminated once the samples are in orbit; rover instruments carry Earth-origin organic molecules on their surfaces and in their hardware that inevitably mask any indigenous Martian organics, whereas samples collected in hermetically sealed tubes and returned to clean-room Earth laboratories are free from this contamination problem',
            'A returned sample is more definitive because Mars life, if it exists, would be RNA-based rather than DNA-based, and the only technique capable of sequencing RNA from ancient rock samples is nanopore sequencing, which requires a tabletop instrument too large and power-hungry to be included on a rover; once the sample is in an Earth laboratory, standard Oxford Nanopore instruments can sequence any surviving RNA molecules directly from the rock matrix',
          ],
          correct: 1,
          explain: `The scientific case for Mars Sample Return rests on the irreplaceable analytical power of Earth-based laboratories relative to rover-deployable instruments. The most compelling example is stable isotope geochemistry: on Earth, bulk and compound-specific carbon isotope ratios (δ¹³C) are one of the most reliable discriminators between biogenic and abiogenic organic carbon. Living organisms preferentially incorporate ¹²C over ¹³C during metabolism, producing δ¹³C values typically −20 to −30‰ (relative to the Vienna PDB standard); abiotic organic synthesis (Fischer-Tropsch-type or Strecker reactions) produces less negative or variable values. The multi-collector isotope ratio mass spectrometers that perform these measurements at ±0.03‰ precision fill a room — they cannot be miniaturised. Similarly, transmission electron microscopy (TEM) at atomic resolution can reveal cell-wall-like structures, mineral replacement patterns, and ultrastructural biosignatures that are invisible to any rover camera at any magnification. Raman spectroscopy (deployed on Perseverance\'s SHERLOC) can detect organic molecular classes but cannot distinguish biological from abiotic organics at the molecular precision available from NanoSIMS or SIMS on Earth. Option C has a kernel of truth (organic contamination is a real concern for rover instruments) but it is not the primary reason returned samples are more definitive — rover instruments are designed with blank checks and careful contamination protocols. Option D is pure invention: there is no scientific basis for assuming Mars life is RNA-based rather than DNA-based, and biological molecules would not survive in intact sequenceable form over 3.5 billion years regardless of chemical basis.`,
        },
        {
          q: `The hypothesis that a liquid brine lake exists beneath Mars\'s south polar ice cap was proposed based on MARSIS radar data (Orosei et al. 2018). What physical mechanism could maintain liquid water under these conditions, and what are the strongest arguments against this interpretation?`,
          a: [
            'The south polar brine lake hypothesis requires geothermal heat from active volcanism beneath the polar cap; the strongest counter-argument is that Mars shows no evidence of present-day volcanic activity, and without a local magmatic heat source the base of the polar cap should be well below the eutectic temperature of any plausible brine composition',
            'A subglacial brine could be maintained by the combination of the freezing point depression from dissolved perchlorates and chlorides (depressing the eutectic to ~−67°C) and the overlying pressure of the 1.5-km-thick ice column; the strongest counter-arguments are that the estimated geothermal heat flux on Mars is too low to provide sufficient basal melting even for a perchlorate brine, and that the same radar bright reflector is consistent with conductive basal sediments or CO₂ ice rather than liquid water',
            'The south polar brine is maintained by solar energy concentrated by the polar cap acting as a parabolic reflector that focuses sunlight to the base of the ice; counter-arguments include the fact that the polar cap surface is concave rather than parabolic and that solar radiation cannot penetrate 1.5 km of water ice regardless of surface geometry',
            'The brine hypothesis requires that Mars\'s magnetic field deflects cosmic ray heating into the polar regions; the counter-argument is that Mars lost its magnetic dynamo 4 Ga and therefore lacks the magnetospheric current system necessary to concentrate cosmic ray energy at the poles, so the proposed heat source does not exist on present-day Mars',
          ],
          correct: 1,
          explain: `The Orosei et al. (2018) Science paper reported a 20-km-wide radar-bright reflector at approximately 1.5 km depth beneath the south polar layered deposits of Mars, with reflectivity properties similar to subglacial lakes on Earth (e.g., Lake Vostok, Antarctica). The proposed mechanism for liquid persistence involves two factors: (1) freezing point depression — perchlorate salts (ClO₄⁻) detected at the Martian surface by Phoenix and other missions form eutectic brines with freezing points as low as −67°C for magnesium perchlorate; if such salts are concentrated at the ice-bedrock interface by freeze-out processes, a liquid film could persist at temperatures far below 0°C; (2) pressure from the overlying ice column, which further depresses the melting point. However, the hypothesis has faced strong quantitative challenges. Theoretical models of Mars\'s geothermal heat flux (estimated at ~20 mW/m², far below the ~50–70 mW/m² at Antarctic subglacial lakes) suggest insufficient basal heating to keep even perchlorate brines liquid at this depth — requiring additional local heating that has no clear source. Furthermore, Bierson et al. (2021) and Lauro et al. (2021) showed that the radar-bright reflector is actually consistent with clay-rich sediments or CO₂ ice rather than brine, since both can produce high basal radar reflectivity. Option A identifies geothermal heat as a necessary ingredient but overstates its certainty; modern models suggest geothermal flux alone is insufficient even with a hypothetical local volcanic source. Option C invents a physically impossible "parabolic reflector" mechanism. Option D conflates magnetic fields with cosmic-ray heating, which is not a mechanism for subglacial melting.`,
        },
      ],
    },
  ],
}

export default marsModernSearch
