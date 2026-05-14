import { Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const abio101Capstone: Lesson = {
  id: 'abio-101-capstone',
  title: 'Astrobiology: Path Assessment',
  track: 'ast',
  trackName: 'Astrobiology',
  level: 'Advanced',
  duration: '25 min',
  xpReward: 500,
  description: 'Comprehensive assessment across all three chapters of Astrobiology',
  sources: [
    { org: 'NASA',   title: 'NASA Astrobiology Program',        url: 'https://astrobiology.nasa.gov/' },
    { org: 'SETI',   title: 'SETI Institute',                   url: 'https://www.seti.org/' },
    { org: 'Nature', title: 'Nature — Astrobiology Collection', url: 'https://www.nature.com/' },
    { org: 'ESA',    title: 'ESA — Astrobiology',               url: 'https://www.esa.int/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Comprehensive assessment across all three chapters of Astrobiology',
      body: `This capstone covers the full Astrobiology learning path: the origins of life and early Earth biochemistry (Chapter 1), habitable worlds within our solar system including Mars, Europa, Titan, and Venus (Chapter 2), and the search for life beyond our solar system through exoplanet detection, habitable-zone theory, biosignatures, and the Fermi Paradox (Chapter 3). Twenty questions test your conceptual understanding, ability to interpret observational evidence, and fluency with the core ideas that define modern astrobiology as a discipline.

You will be asked to reason about prebiotic chemistry, evaluate the astrobiological significance of specific discoveries by spacecraft and rovers, interpret spectroscopic and photometric data from extrasolar systems, and assess the logic behind arguments such as the Drake Equation and the Great Filter hypothesis. Questions draw on landmark experiments, mission results, and theoretical frameworks from across the field.

A score of 80% or higher (16 out of 20 correct) earns full XP and marks the Astrobiology path as complete. Take your time with each question — the detailed explanations provided after submission will reinforce your understanding regardless of outcome.`,
      keyTerms: [],
    },
    {
      type: 'quiz',
      questions: [
        // ── Chapter 1: Origins of Life, Extremophiles, GOE ───────────────────
        // Q1 — correct: 1
        {
          q: 'What did the Miller-Urey experiment (1953) demonstrate about the chemistry of early Earth?',
          a: [
            'That self-replicating RNA molecules could form spontaneously from a warm pond rich in phosphate minerals',
            'That amino acids and other organic molecules can form abiotically from simple inorganic gases under simulated early-Earth conditions',
            'That the first cells originated in deep-sea hydrothermal vents where temperature gradients drive membrane formation',
            'That ultraviolet radiation from the young Sun was strong enough to drive synthesis of purines and pyrimidines from CO₂',
          ],
          correct: 1,
          explain: 'Stanley Miller and Harold Urey circulated a mixture of water vapour, methane, ammonia, and hydrogen — then thought to represent the early atmosphere — through a closed apparatus subjected to electrical sparks simulating lightning. Within one week, several amino acids including glycine and alanine had accumulated, along with other organic compounds. The experiment was the first laboratory demonstration that the chemical building blocks of life can be synthesised abiotically from simple inorganic precursors under plausible prebiotic conditions. Later reanalysis of sealed 1953 vials using modern mass spectrometry detected over 20 amino acids, more than Miller had originally identified. The experiment opened the field of prebiotic chemistry and established that organic complexity does not require living organisms to get started.',
        },
        // Q2 — correct: 0
        {
          q: 'Why is RNA central to the RNA World hypothesis for the origin of life?',
          a: [
            'RNA molecules can both store genetic information and catalyse chemical reactions, suggesting they may have preceded the separation of these functions into DNA and proteins',
            'RNA is more thermally stable than DNA and can survive the extreme temperatures of volcanic environments where life first arose',
            'RNA is the only nucleic acid capable of forming the phospholipid membranes required for the first protocells',
            'RNA polymerises spontaneously on mineral surfaces without any template, providing a self-starting genetic system',
          ],
          correct: 0,
          explain: `The RNA World hypothesis, advanced through the work of Carl Woese, Francis Crick, Leslie Orgel, and later Thomas Cech and Sidney Altman (who won the 1989 Nobel Prize for discovering ribozymes), proposes that life passed through a stage in which RNA served as both genome and catalyst. This resolves the chicken-and-egg problem: modern DNA requires protein enzymes to replicate, and proteins require DNA to be encoded. RNA\'s dual capacity — it carries sequence information like DNA and can fold into three-dimensional structures that catalyse reactions like proteins — makes it uniquely suited to have been the first self-replicating, evolving molecule. The ribosome, the universal cellular machine for protein synthesis, is itself largely RNA, suggesting a deep evolutionary memory of this earlier world.`,
        },
        // Q3 — correct: 2
        {
          q: 'What do Jack Hills zircon crystals from Western Australia reveal about conditions on early Earth?',
          a: [
            'They record the magnetic polarity of Earth\'s early field, confirming that plate tectonics began by 4.4 Ga',
            'They contain microfossils of early archaea, pushing the origin of life back to at least 4.2 Ga',
            'Their oxygen isotope ratios indicate that liquid water existed on Earth\'s surface as early as 4.4 billion years ago — within 150 million years of Earth\'s formation',
            'Their uranium-lead ages confirm that the Late Heavy Bombardment completely sterilised Earth between 4.1 and 3.8 Ga',
          ],
          correct: 2,
          explain: `Zircons (ZrSiO₄) from the Jack Hills of Western Australia are the oldest known terrestrial minerals, with uranium-lead ages up to 4.404 billion years. Crucially, their oxygen isotope ratios (δ¹⁸O values of ~7‰, elevated above mantle values of ~5.3‰) are consistent with interaction between the protolith and liquid water at or near Earth\'s surface. This indicates that despite models predicting a hellishly hot Hadean Earth, liquid water was present within ~150 million years of Earth\'s formation. The Jack Hills zircons are the primary geological evidence for the "cool early Earth" model, which has significant implications for the habitability of the early planet and the possible timing of life\'s emergence. The conclusion is supported by Ti-in-zircon thermometry indicating crystallisation temperatures of ~680 °C — far below magma temperatures — consistent with a hydrated crustal environment.`,
        },
        // Q4 — correct: 1
        {
          q: `What do banded iron formations (BIFs) record about the composition of Earth\'s early atmosphere?`,
          a: [
            'They formed from volcanic dust layers and record the frequency of large eruptions in the Archean',
            'The massive deposition of BIFs before 2.4 Ga indicates that the early ocean and atmosphere were largely anoxic, because dissolved ferrous iron (Fe²⁺) can only accumulate in the absence of free oxygen',
            'Their alternating iron-rich and silica-rich bands record seasonal variation in Archean ocean chemistry but carry no atmospheric signal',
            'BIFs formed exclusively in glacial settings and record repeated Snowball Earth events during the Proterozoic',
          ],
          correct: 1,
          explain: 'Banded iron formations are chemically precipitated sedimentary rocks consisting of alternating iron-oxide-rich (hematite, magnetite) and silica-rich (chert) layers. They are abundant in Archean and early Proterozoic successions (3.8–1.8 Ga) but virtually absent after ~1.8 Ga. Their formation requires large amounts of dissolved ferrous iron (Fe²⁺) to accumulate in seawater and be transported globally through ocean circulation. Under modern oxygenated conditions, Fe²⁺ is rapidly oxidised to insoluble Fe³⁺ and precipitates immediately upon entering oxygenated water. The extensive BIF record before 2.4 Ga is compelling evidence that the Archean ocean and atmosphere contained negligible free oxygen. The termination of major BIF deposition around 1.8 Ga is directly linked to the Great Oxidation Event and the progressive oxygenation of deep ocean water.',
        },
        // Q5 — correct: 3
        {
          q: 'What temperature range characterises hyperthermophiles such as Pyrolobus fumarii, and in what environments are they typically found?',
          a: [
            '50–70 °C; they inhabit hot springs and geothermal soils at continental volcanic fields',
            '40–60 °C; they are dominant microorganisms in industrial composting heaps and thermophilic anaerobic digesters',
            '100–150 °C; they require superheated supercritical water and cannot reproduce below 100 °C at any pressure',
            '80–121 °C; they are found at deep-sea hydrothermal vents and can survive brief autoclaving temperatures that sterilise standard lab equipment',
          ],
          correct: 3,
          explain: 'Hyperthermophiles are microorganisms with optimal growth temperatures above 80 °C. Pyrolobus fumarii, an archaeon first isolated from hydrothermal vent chimney walls on the Mid-Atlantic Ridge by Blöchl et al. (1997), grows optimally at 106 °C and can tolerate temperatures up to 121 °C — the standard autoclaving temperature used to sterilise laboratory equipment. It cannot grow below 90 °C. These organisms thrive in deep-sea black smoker environments where superheated water (up to 400 °C at the vent orifice) mixes with cold seawater (~2 °C), creating steep thermal gradients across centimetres. Their discovery dramatically expanded the known temperature limits of life and reinforced the plausibility of microbial habitats in high-temperature subsurface environments on other worlds, particularly within hydrothermal systems beneath the icy shells of Europa and Enceladus.',
        },
        // Q6 — correct: 0
        {
          q: 'What makes Deinococcus radiodurans exceptionally resistant to ionising radiation?',
          a: [
            'It possesses extraordinarily efficient DNA repair machinery, multiple genome copies, and high intracellular manganese concentrations that protect proteins from oxidative damage during irradiation',
            'It produces a thick silica shell that physically blocks ionising radiation from penetrating to its DNA',
            'It contains uniquely high concentrations of deinoxanthin pigment that absorbs and quenches ionising radiation before it can damage biomolecules',
            'Its DNA is permanently cross-linked into a crystalline lattice that is structurally impervious to strand breaks caused by ionising radiation',
          ],
          correct: 0,
          explain: `Deinococcus radiodurans can survive doses of ionising radiation up to 5,000 Gy — a dose lethal to humans is ~5 Gy — and can reassemble its shattered genome from hundreds of double-strand break fragments within hours. Its extraordinary resistance arises from several mechanisms: (1) highly efficient RecA-dependent and RecFOR-dependent double-strand break repair pathways that precisely reassemble chromosomal fragments; (2) multiple genome copies (4–10 per cell) providing undamaged templates; (3) uniquely high intracellular Mn²⁺/Fe²⁺ ratios that scavenge reactive oxygen species, protecting repair enzymes from oxidative inactivation — the key insight from Michael Daly\'s work; and (4) a desiccation-resistance mechanism that co-evolved with radiation resistance because both stresses damage DNA by similar mechanisms. D. radiodurans has become a model organism for panspermia research and Mars surface habitability assessments.`,
        },
        // Q7 — correct: 1
        {
          q: 'What was the Great Oxidation Event (GOE) and approximately when did it occur?',
          a: [
            'The catastrophic release of volcanic CO₂ at ~3.0 Ga that triggered a global greenhouse warming and melted the first proposed Snowball Earth',
            'The permanent rise of free molecular oxygen in Earth\'s atmosphere to levels above ~0.001% (~2.4–2.3 Ga), driven primarily by oxygenic photosynthesis by cyanobacteria',
            'The oxidation of the mantle at ~4.5 Ga as Earth accreted from oxidised outer-solar-system planetesimals',
            'The sudden oxygenation of the deep ocean at ~0.6 Ga that coincided with and possibly triggered the Cambrian explosion of animal life',
          ],
          correct: 1,
          explain: `The Great Oxidation Event (~2.4–2.3 billion years ago) marks the first sustained rise of free molecular oxygen (O₂) in Earth\'s atmosphere from effectively zero to detectable concentrations (~0.001% or higher). The primary driver was oxygenic photosynthesis by cyanobacteria, which oxidised water (H₂O) to generate O₂ as a by-product of fixing CO₂. Before the GOE, multiple geological proxies confirm an anoxic atmosphere: mass-independent fractionation of sulfur isotopes (MIF-S) in pre-GOE rocks requires an O₂-free atmosphere for UV photochemistry to produce; detrital pyrite (FeS₂) and uraninite (UO₂) in river sediments confirm they were transported without oxidation; and the global disappearance of BIFs marks ocean oxygenation. The GOE caused a mass extinction of obligate anaerobes, triggered the "Huronian glaciation" by removing the greenhouse gas methane, and ultimately enabled complex eukaryotic and animal life.`,
        },
        // ── Chapter 2: Mars, Europa, Titan, Venus ────────────────────────────
        // Q8 — correct: 2
        {
          q: `What did NASA\'s Curiosity rover discover at Gale Crater that is most significant for ancient Mars habitability?`,
          a: [
            'Living microbial mats were tentatively detected in the mudstones of the crater floor using the SAM instrument suite\'s life-detection experiment',
            'Ancient stromatolite-like laminated structures were imaged by the Mastcam, providing the first tentative evidence of Noachian-era biofilms on Mars',
            'Gale Crater\'s mudstone sediments contain clay minerals, sulfate salts, preserved organic molecules, and chemical energy sources, indicating the crater once hosted a freshwater lake capable of supporting life',
            'Large subsurface brine pockets were detected beneath the crater floor by the RIMFAX ground-penetrating radar, suggesting liquid water persists at Gale Crater today',
          ],
          correct: 2,
          explain: 'Since landing in 2012, the Curiosity rover has transformed understanding of early Mars habitability. Drill analyses of mudstone sedimentary rocks at Yellowknife Bay and subsequent sites using CheMin (X-ray diffraction) and SAM (mass spectrometry / gas chromatography) found: (1) smectite clay minerals indicative of water-rock interaction at near-neutral pH; (2) sulfate and sulfide minerals providing chemical energy gradients analogous to those supporting chemolithotrophic life on Earth; (3) all six CHNOPS elements essential for life; and (4) complex organic molecules including thiophenes, benzene, and toluene preserved in 3.5-billion-year-old rock. The SAM and CheMin instruments established that Gale Crater hosted a sustained, habitable freshwater lake environment — not a brief wet episode, but a stable lake system potentially lasting millions of years in the Noachian–Hesperian transition.',
        },
        // Q9 — correct: 0
        {
          q: 'What is meteorite ALH84001 and why did it generate major scientific controversy in 1996?',
          a: [
            'A 4.09-billion-year-old Mars meteorite found in Antarctica that a NASA team claimed contained structures and chemical signatures suggestive of ancient Martian microbial life, though subsequent research largely attributed these features to abiotic processes',
            'A carbonaceous chondrite from Antarctica that contained the highest amino acid concentration detected in any meteorite, sparking debate between contamination and genuine extraterrestrial organics',
            'An Allende meteorite fragment in which isotopically anomalous presolar grains were found, challenging models of the early solar nebula composition',
            'A lunar meteorite in which researchers initially identified fossilised nanobacteria, later shown to be mineral artefacts at the resolution limit of scanning electron microscopy',
          ],
          correct: 0,
          explain: 'ALH84001 is a 4.09-billion-year-old orthopyroxenite meteorite ejected from Mars and recovered from the Allan Hills ice field in Antarctica in 1984. In August 1996, McKay et al. published in Science claiming four lines of evidence for ancient Martian life: (1) polycyclic aromatic hydrocarbons (PAHs) concentrated near carbonate globules; (2) carbonate minerals apparently formed at low temperatures consistent with biological activity; (3) magnetite crystals morphologically resembling those produced by magnetotactic bacteria; and (4) nanoscale elongated structures resembling fossilised bacteria (~100 nm). The announcement generated global media attention and prompted US Congress hearings. Over the following decade, the scientific community largely concluded that each feature had plausible abiotic explanations — PAHs from terrestrial contamination, carbonates from high-temperature hydrothermal fluids, and the structures too small to be viable cells. The controversy remains the definitive case study in biosignature methodology.',
        },
        // Q10 — correct: 1
        {
          q: `What evidence did the Galileo spacecraft\'s magnetometer provide for a subsurface liquid ocean on Europa?`,
          a: [
            'The magnetometer detected a permanent intrinsic magnetic dipole generated by a convecting iron core within Europa, indicating active internal geological dynamics',
            'During Europa flybys, Galileo detected a time-varying induced magnetic field consistent with a highly electrically conductive layer — most likely a global salty liquid-water ocean — beneath the ice shell',
            'The magnetometer recorded magnetic anomalies from iron-rich minerals in Europa\'s fractured ice surface, whose distribution was consistent with fluid-driven resurfacing',
            'Galileo measured perturbations of Jupiter\'s magnetospheric flux tubes at Europa\'s orbital position, modelled as eddy currents generated by ocean convection in a subsurface brine',
          ],
          correct: 1,
          explain: `During multiple Europa flybys between 1996 and 1999, Galileo\'s magnetometer detected a magnetic field signature inconsistent with a permanent intrinsic dipole (Europa lacks a large iron core). Instead, the field varied in both magnitude and direction in synchrony with Jupiter\'s rotating magnetosphere — the defining signature of electromagnetic induction. A time-varying external magnetic field induces eddy currents in electrically conductive material, generating a secondary opposing field. The strength and geometry of Europa\'s induced field required a highly conductive global shell close to the surface. A salty liquid-water ocean (salinity >1 g/L) provides the necessary conductivity; pure water ice or silicate rock cannot. This magnetometer evidence, corroborated by Galileo\'s imaging of Europa\'s chaotically fractured and tectonically active surface, constitutes the strongest physical evidence for Europa\'s ~100 km-deep subsurface ocean.`,
        },
        // Q11 — correct: 3
        {
          q: `What did the Cassini spacecraft detect in the plume material ejected from Enceladus\'s south pole?`,
          a: [
            'The plumes consisted solely of water vapour and fine ice crystals with no dissolved minerals, indicating a cold and geologically inactive reservoir near the surface',
            'Cassini detected methane clathrates whose isotopic composition matched ancient cometary material frozen into the ice shell billions of years ago',
            'Plume material was dominated by CO₂ and sulfurous compounds, resembling the composition of Europa\'s putative ocean more than terrestrial seawater',
            'The plumes contained water vapour, sodium salts, silica nanoparticles, molecular hydrogen, and complex organics — collectively indicating a warm, chemically active ocean in contact with a rocky core',
          ],
          correct: 3,
          explain: `Cassini\'s direct plume fly-throughs using the Ion and Neutral Mass Spectrometer (INMS) and Cosmic Dust Analyser (CDA) revealed a remarkable chemical inventory in Enceladus\'s plumes: water vapour (~90%), molecular hydrogen (H₂, ~1%), CO₂ (~0.8%), methane, ammonia, and complex organic molecules including aromatic and aliphatic compounds with masses exceeding 200 atomic mass units. The silica nanoparticles (nano-SiO₂) detected by CDA could only have formed by high-temperature (≥90 °C) hydrothermal fluid precipitating against silica-saturated water at alkaline pH — implying active serpentinisation reactions. Molecular hydrogen is particularly compelling because H₂ produced by water-rock serpentinisation at hydrothermal vents fuels chemolithotrophic microbial communities on Earth. Together, these detections indicate Enceladus harbours a warm subsurface ocean in active chemical contact with its rocky core — one of the highest-priority astrobiology targets in the solar system.`,
        },
        // Q12 — correct: 1
        {
          q: `Why is Titan\'s atmosphere considered astrobiologically significant despite its surface temperature of approximately −179 °C?`,
          a: [
            'Titan\'s thick nitrogen-methane atmosphere creates a greenhouse effect strong enough to warm subsurface regions to habitable temperatures near the rocky core',
            'Titan\'s atmosphere is the only one besides Earth\'s dominated by molecular nitrogen and is laden with complex organic tholins; its methane-ethane surface lakes represent a potential non-aqueous solvent for exotic life and an analogue for prebiotic chemistry',
            'The Cassini-Huygens probe detected chiral organic molecules in Titan\'s stratosphere, suggesting that biochemistry-like asymmetric synthesis is already occurring in the gas phase',
            'Titan\'s dense atmosphere shields the surface so effectively from cosmic radiation that intact cometary organics accumulate to concentrations relevant to prebiotic synthesis',
          ],
          correct: 1,
          explain: `Titan is unique in the outer solar system: it possesses a thick, opaque atmosphere of nitrogen (~95%) and methane (~5%) with a surface pressure of 1.45 atm — the only world besides Earth with such a substantial N₂ atmosphere. Solar UV and Saturn\'s magnetospheric particles drive photochemistry converting methane and nitrogen into tholins — complex nitrogen-bearing organic polymers and aerosols whose laboratory analogues partially reproduce Titan\'s orange haze and whose chemistry parallels some steps in prebiotic synthesis. Cassini and Huygens confirmed hydrocarbon lakes, rivers, and rainfall at the poles. Theoretical work (Stevenson; Lunine; Sandström et al.) has proposed that acrylonitrile and similar molecules could form cell-membrane analogues in liquid methane, enabling a fundamentally different, non-aqueous biochemistry. Even if life is absent, Titan provides the richest accessible laboratory for studying nitrogen-bearing organic chemistry at planetary scale.`,
        },
        // Q13 — correct: 0
        {
          q: `What does Venus\'s anomalously high D/H ratio (deuterium-to-hydrogen) reveal about the planet\'s history?`,
          a: [
            'Venus\'s D/H ratio (~150 times Earth\'s ocean value) indicates that the planet once possessed a substantial surface ocean that was subsequently lost to space as the planet underwent a runaway greenhouse effect',
            'The high D/H ratio confirms that Venus accreted from deuterium-rich outer-solar-system planetesimals rather than from rocky material like Earth',
            'The enrichment is a product of ongoing volcanic outgassing of deuterium-enriched fluids from Venus\'s mantle, unrelated to any past surface water history',
            'Venus\'s D/H records a brief pulse of water delivery by a late-stage cometary bombardment approximately 1 billion years ago',
          ],
          correct: 0,
          explain: `Venus\'s atmospheric D/H ratio, first measured by Pioneer Venus in 1978 and confirmed by ground-based spectroscopy, is approximately 150 times the standard mean ocean water (SMOW) value. This extreme enrichment results from preferential escape of light hydrogen (¹H) over deuterium (²H = D) during hydrodynamic escape driven by UV photodissociation of water vapour in the upper atmosphere. The lighter isotope escapes more readily, leaving the residual water vapour progressively enriched in D. Modelling the cumulative fractionation effect at estimated escape rates implies that Venus may have originally possessed a global water equivalent of several tens to a few hundred metres depth — enough for an early ocean. This reservoir was subsequently lost over ~2–4 billion years as the planet entered a runaway greenhouse state, reaching its current surface temperature of ~465 °C and CO₂-dominated atmosphere of 92 bar.`,
        },
        // Q14 — correct: 2
        {
          q: 'What does the transit photometry method measure and how does it enable detection of exoplanets?',
          a: [
            'It measures the Doppler shift of stellar absorption lines caused by a planet gravitationally tugging its host star radially, revealing the planet\'s minimum mass and orbital period',
            'It uses adaptive optics to directly image planets in reflected starlight by suppressing the stellar glare through coronagraphic techniques',
            'It measures the periodic, fractional dimming of stellar flux as an orbiting planet crosses the stellar disk, with the dimming depth proportional to the square of the planet-to-star radius ratio',
            'It records the gravitational microlensing amplification that occurs when an exoplanet\'s gravity focuses light from a background source star, revealing the planet\'s mass and orbital radius',
          ],
          correct: 2,
          explain: `Transit photometry detects exoplanets by monitoring stellar brightness with high photometric precision. When a planet\'s orbital plane is aligned with our line of sight, it periodically crosses (transits) the stellar disk, blocking a fraction of starlight. The fractional flux decrease is ΔF/F = (R_p/R_*)², where R_p and R_* are the planet and stellar radii. For an Earth-sized planet transiting a Sun-like star, ΔF/F ≈ (6,371/696,000)² ≈ 0.0084% — requiring space-based photometry (Kepler, TESS). The transit duration, period, and depth together constrain orbital semi-major axis, planetary radius, and inclination. Transit timing variations (TTVs) reveal gravitational interactions with additional planets. Transit spectroscopy — comparing in-transit versus out-of-transit spectra — probes atmospheric composition: at wavelengths where atmospheric gases absorb, the planet appears larger. This is how water vapour, CO₂, and CH₄ have been detected on gas giants and, recently, on smaller worlds.`,
        },
        // Q15 — correct: 1
        {
          q: 'What physical processes determine the inner edge of the classical stellar habitable zone?',
          a: [
            'The inner edge is set by the Roche limit, inside which tidal forces would prevent stable rocky planet formation',
            'The inner edge is defined by the moist-greenhouse and runaway-greenhouse thresholds, where increasing stellar flux drives water vapour feedback loops that irreversibly desiccate a planet\'s surface',
            'The inner edge is determined by the orbital period at which a rocky planet becomes tidally locked, causing permanent day-side heating that evaporates any surface ocean',
            'The inner edge is the distance at which surface temperature exceeds 100 °C at standard atmospheric pressure, causing oceans to boil',
          ],
          correct: 1,
          explain: 'The classical habitable zone (Kasting et al. 1993; Kopparapu et al. 2013) defines its inner boundary by two conservative thresholds. The moist-greenhouse limit: increasing stellar flux warms the surface enough that the stratospheric cold trap fails — stratospheric water vapour rises, UV photodissociation of H₂O accelerates, and hydrogen escapes to space, eventually desiccating the planet on geological timescales. The runaway-greenhouse limit: incoming stellar flux exceeds the maximum outgoing longwave radiation a water-vapour atmosphere can emit (~310 W m⁻²), causing a catastrophic positive feedback that evaporates all surface water regardless of surface temperature. Both thresholds depend on stellar spectral type, atmospheric composition, and planetary properties. Venus is thought to reside inside the moist-greenhouse threshold. For the modern Sun, the conservative inner edge lies near ~0.95 AU, and the optimistic inner edge near ~0.75 AU.',
        },
        // Q16 — correct: 0
        {
          q: 'Why is the simultaneous presence of O₂ and CH₄ in an exoplanet atmosphere considered a more compelling biosignature than detecting either gas alone?',
          a: [
            'O₂ and CH₄ react spontaneously with each other, so their co-existence at detectable concentrations represents a chemical disequilibrium that requires continuous biological production of both, faster than abiotic reactions can destroy them',
            'O₂ and CH₄ have overlapping near-infrared spectral bands that constructively amplify their combined detection signal above individual detectability thresholds',
            'Geological volcanism produces O₂ abundantly but cannot produce CH₄, so the co-detection uniquely implicates a biological methane source',
            'The simultaneous presence rules out photochemical production pathways, which are known to generate only one of the two gases at a time under any stellar irradiation model',
          ],
          correct: 0,
          explain: 'The concept of atmospheric chemical disequilibrium as a biosignature was articulated by James Lovelock in 1965 and developed quantitatively by Sagan et al. (1993) and later workers. O₂ and CH₄ react irreversibly: CH₄ + 2O₂ → CO₂ + 2H₂O, with an atmospheric lifetime of CH₄ of only ~10 years in an oxygenated atmosphere. At thermodynamic equilibrium in contact with surface rocks, you cannot maintain substantial concentrations of both simultaneously. On Earth, O₂ (21%) is sustained by oxygenic photosynthesis and CH₄ (~1.8 ppm) by methanogenic archaea; their co-existence is maintained entirely by biology replenishing both faster than chemistry destroys them. Known false positives exist individually — abiotic O₂ from CO₂ photolysis on H₂-poor worlds, abiotic CH₄ from serpentinisation — but the simultaneous combination at biologically relevant concentrations is robust against most known abiotic scenarios and therefore a high-priority composite biosignature for future space telescopes.',
        },
        // Q17 — correct: 3
        {
          q: 'What is the vegetation red edge and at what wavelengths does it occur?',
          a: [
            'It is the O₂ absorption band at 760 nm used as a reference feature for atmospheric retrieval modelling in exoplanet transit spectroscopy',
            'It is the red-shifted fluorescence emission peak of bacteriochlorophyll in anoxic purple bacteria, occurring near 870 nm and diagnostic of anaerobic photosynthesis',
            'It is a spectral discontinuity at ~630 nm marking the transition between carotenoid pigment absorption and chlorophyll-a absorption in oxygenic photosynthetic membranes',
            'It is the abrupt increase in plant reflectance from ~5% in the red (~670–700 nm) to ~50% in the near-infrared (~700–750 nm), caused by chlorophyll\'s absorption cutoff combined with strong NIR scattering by leaf internal structure',
          ],
          correct: 3,
          explain: `The vegetation red edge (VRE) is one of the most discussed candidate surface biosignatures for exoplanets. Chlorophyll molecules strongly absorb red light (~680 nm) for photosynthesis but are largely transparent to near-infrared radiation. Plant leaves also have a complex spongy mesophyll architecture that strongly scatters NIR light multiple times before it exits the leaf, dramatically increasing NIR reflectance. The combined result is an order-of-magnitude jump in reflectance from ~2–5% at 670–700 nm to ~40–50% at 700–750 nm — detectable in Earth\'s disk-integrated spectrum and in Earthshine (lunar reflected Earthlight) observations. Models suggest that photosynthetic organisms on exoplanets orbiting stars of different spectral types might evolve pigments absorbing at different wavelengths, producing analogous sharp reflectance edges potentially in the red or near-infrared. Such a "surface biosignature" could in principle be detected in reflected light spectra from future large space telescopes such as HabEx or LUVOIR.`,
        },
        // Q18 — correct: 1
        {
          q: 'Which term in the Drake Equation is subject to the greatest scientific uncertainty?',
          a: [
            'R* (the Milky Way star formation rate), because large-scale stellar population surveys remain incomplete for the outer galactic disk',
            'f_l (the fraction of habitable planets on which life actually arises), because we have exactly one confirmed example of abiogenesis and no theoretical first-principles estimate of its probability',
            'f_p (the fraction of stars hosting planetary systems), which was essentially unconstrained before the Kepler and TESS exoplanet survey missions',
            'n_e (the average number of habitable-zone rocky planets per planetary system), because current planet detection methods are insensitive to Earth twins at 1 AU around Sun-like stars',
          ],
          correct: 1,
          explain: 'Frank Drake introduced his equation in 1961: N = R* × f_p × n_e × f_l × f_i × f_c × L. Successive terms become progressively less empirically constrained. R* is well-measured (~1–3 solar-mass-equivalent stars per year). f_p (~1, essentially all Sun-like stars host planets per Kepler statistics) and n_e (perhaps 0.1–1 Earth-like planets per star in habitable zones) are increasingly well-constrained. But f_l — the probability that life arises on a suitable planet — spans at minimum 40 orders of magnitude in serious published estimates, ranging from near-certainty (life is a near-inevitable consequence of chemistry) to astronomically small (life is a once-in-universe accident). We have one confirmed example of abiogenesis on Earth and zero elsewhere, providing essentially no statistical leverage. No theoretical framework can currently calculate the probability of abiogenesis from first principles, making f_l the defining uncertainty in astrobiology and the entire Drake Equation calculation.',
        },
        // Q19 — correct: 2
        {
          q: 'What contradiction does the Fermi Paradox identify?',
          a: [
            'The universe is so vast that even if extraterrestrial civilisations are common, the finite speed of light makes contact effectively impossible on any meaningful timescale',
            'The energy cost of interstellar travel is so prohibitive that no civilisation, however advanced, could achieve galaxy-wide colonisation within the lifetime of its star',
            'Given the age, size, and apparent habitability of the Milky Way, we should expect abundant detectable evidence of extraterrestrial civilisations — yet no such evidence has been found despite extensive searching',
            'Radio communication is the wrong SETI paradigm because sufficiently advanced civilisations would use quantum-entanglement channels that are undetectable by current radio telescopes',
          ],
          correct: 2,
          explain: `Enrico Fermi posed his famous question at Los Alamos in 1950: "Where is everybody?" The Fermi Paradox (formally developed by Michael Hart in 1975) identifies a profound contradiction. Given: (1) the Milky Way is ~13 billion years old, far older than Earth\'s 4.5 Ga; (2) it contains 200–400 billion stars, a large fraction apparently with rocky habitable-zone planets; (3) even at 0.1% of light speed, a spacefaring civilisation could colonise the entire galaxy in ~100 million years — just ~1% of galactic history; therefore any civilisation arising even modestly before us should have already permeated the galaxy and made its presence unmistakably detectable. Yet decades of SETI searches across radio, optical, and infrared wavelengths have detected nothing convincingly artificial. No Dyson spheres, no radio transmissions, no directed energy signals, no astroengineering signatures. The silence is the paradox — and explaining it requires either life is rare, civilisations are short-lived, or something else we have not yet understood.`,
        },
        // Q20 — correct: 0
        {
          q: 'The Great Filter hypothesis addresses the Fermi Paradox. What does it imply if the Filter lies ahead of us rather than behind?',
          a: [
            'It implies that a catastrophic barrier lies in humanity\'s future — something nearly all civilisations fail to survive — making our long-term persistence and galaxy-wide expansion extremely improbable',
            'It implies that humanity will soon develop the technologies to pass through all remaining barriers to interstellar expansion and should rapidly accelerate its space programme',
            'It implies that other civilisations exist but have elected to filter their electromagnetic emissions to avoid detection by civilisations not yet ready for contact',
            'It implies that the physical constants of the universe are fine-tuned in a way that filters out complex chemistry beyond a certain threshold, making multicellularity cosmically rare',
          ],
          correct: 0,
          explain: 'Robin Hanson introduced the Great Filter in 1998 as a resolution to the Fermi Paradox. The argument: somewhere on the path from dead matter to galaxy-colonising civilisation lies one or more steps so astronomically improbable that virtually no world traverses them. The "filter" can lie in our evolutionary past — abiogenesis, the emergence of the eukaryotic cell, multicellularity, intelligence — or in our future. The location of the Filter carries starkly different implications. If most of the Filter lies behind us (past steps were rare), we may be among the rare civilisations that made it, and the future is open. If the Filter lies ahead, it implies that nearly every civilisation reaching our technological level is subsequently annihilated — by nuclear war, misaligned artificial intelligence, engineered pandemic, climate collapse, or some hazard we have not yet identified — before achieving interstellar presence. Robin Hanson argued that discovering microbial or complex life on Mars would therefore be deeply disturbing news: it would push the Filter into our future.',
        },
      ],
    },
  ],
}

export default abio101Capstone
