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
        {
          q: 'What did the 1953 Miller-Urey experiment demonstrate about the origin of life?',
          a: [
            'That life could be spontaneously generated from seawater within days under UV irradiation',
            'That amino acids and other organic molecules can form abiotically from simple inorganic gases under simulated early-Earth conditions',
            'That RNA can replicate itself without the aid of protein enzymes in a warm pond',
            'That the first cells formed in deep-sea hydrothermal vents rather than surface environments',
          ],
          correct: 1,
          explain: 'Stanley Miller and Harold Urey circulated a mixture of water vapour, methane, ammonia, and hydrogen — then thought to represent the early atmosphere — through a closed apparatus subjected to electrical sparks simulating lightning. Within one week, several amino acids including glycine and alanine had accumulated, along with other organic compounds. The experiment was the first laboratory demonstration that the chemical building blocks of life can be synthesised abiotically from simple inorganic precursors under plausible prebiotic conditions. Later reanalysis of sealed 1953 vials using modern mass spectrometry found over 20 amino acids, more than Miller had detected at the time.',
        },
        {
          q: 'Why is RNA central to the RNA World hypothesis for the origin of life?',
          a: [
            'RNA is more thermally stable than DNA and can survive the extreme temperatures of volcanic environments where life first arose',
            'RNA molecules can both store genetic information and catalyse chemical reactions, suggesting they may have preceded the separation of these functions into DNA and proteins',
            'RNA is the only nucleic acid capable of forming the phospholipid membranes required for the first protocells',
            'RNA polymerises spontaneously on mineral surfaces without any template, providing a self-starting genetic system',
          ],
          correct: 1,
          explain: 'The RNA World hypothesis, developed through the work of Carl Woese, Francis Crick, and later Thomas Cech and Sidney Altman (who won the 1989 Nobel Prize for discovering ribozymes), proposes that life passed through a stage in which RNA served as both genome and catalyst. This resolves the chicken-and-egg problem: modern DNA requires proteins to replicate, and proteins require DNA to be encoded. RNA\'s dual capacity — it carries sequence information like DNA and can fold into three-dimensional structures that catalyse reactions like proteins — makes it uniquely suited to have been the first self-replicating, evolving molecule. The ribosome, the universal cellular machine for protein synthesis, is itself largely RNA, suggesting a deep evolutionary memory of this earlier world.',
        },
        {
          q: 'What do Jack Hills zircon crystals from Western Australia tell us about early Earth?',
          a: [
            'They record the magnetic polarity of Earth\'s early field, confirming that plate tectonics began by 4.4 Ga',
            'Their oxygen isotope ratios indicate that liquid water existed on Earth\'s surface as early as 4.4 billion years ago — within 150 million years of Earth\'s formation',
            'They contain microfossils of early archaea, pushing the origin of life back to at least 4.2 Ga',
            'Their uranium-lead ages confirm that the Late Heavy Bombardment completely sterilised Earth between 4.1 and 3.8 Ga',
          ],
          correct: 1,
          explain: 'Zircons (ZrSiO₄) from the Jack Hills of Western Australia are the oldest known terrestrial minerals, with uranium-lead ages up to 4.404 billion years. Crucially, their oxygen isotope ratios (δ¹⁸O values of ~7‰, elevated above mantle values of ~5.3‰) are consistent with interaction between the protolith and liquid water at or near Earth\'s surface. This indicates that despite models predicting a hellishly hot Hadean Earth, liquid water was present on the surface within ~150 million years of Earth\'s formation. The Jack Hills zircons are the primary geological evidence for the "cool early Earth" model, which has significant implications for the habitability of the early planet and the possible timing of life\'s emergence.',
        },
        {
          q: 'What do banded iron formations (BIFs) record about the composition of Earth\'s early atmosphere?',
          a: [
            'They formed from volcanic dust layers and record the frequency of large eruptions in the Archean',
            'Their alternating iron-rich and silica-rich bands record seasonal variation in Archean ocean chemistry but carry no atmospheric signal',
            'The massive deposition of BIFs before 2.4 Ga indicates that the early ocean and atmosphere were largely anoxic, because dissolved ferrous iron (Fe²⁺) can only accumulate in the absence of free oxygen',
            'BIFs formed exclusively in glacial settings and record repeated Snowball Earth events during the Proterozoic',
          ],
          correct: 2,
          explain: 'Banded iron formations are chemically precipitated sedimentary rocks consisting of alternating iron-oxide-rich (hematite, magnetite) and silica-rich (chert) layers. They are abundant in Archean and early Proterozoic successions (3.8–1.8 Ga) but virtually absent after ~1.8 Ga. Their formation requires large amounts of dissolved ferrous iron (Fe²⁺) to accumulate in seawater. Under modern oxygenated conditions, Fe²⁺ is rapidly oxidised to insoluble Fe³⁺ and precipitates immediately. The extensive BIF record before 2.4 Ga is compelling evidence that the Archean ocean and atmosphere contained negligible free oxygen, allowing iron to dissolve and transport globally. The termination of major BIF deposition around 1.8 Ga is linked to the Great Oxidation Event.',
        },
        {
          q: 'What temperature range characterises hyperthermophiles such as Pyrolobus fumarii, and where are they typically found?',
          a: [
            '50–70 °C; they inhabit hot springs and geothermal soils in volcanic regions',
            '80–121 °C; they are found in deep-sea hydrothermal vents and can survive brief exposure to autoclaving temperatures',
            '40–60 °C; they are the dominant microorganisms in composting heaps and thermophilic digesters',
            '100–150 °C; they require superheated water under pressure and cannot reproduce below boiling point at atmospheric pressure',
          ],
          correct: 1,
          explain: 'Hyperthermophiles are microorganisms with optimal growth temperatures above 80 °C. Pyrolobus fumarii, an archaeon isolated from hydrothermal vent chimneys on the Mid-Atlantic Ridge, grows optimally at 106 °C and can tolerate temperatures up to 121 °C — the standard autoclaving temperature used to sterilise laboratory equipment. It cannot grow below 90 °C. These organisms thrive in deep-sea black smoker vent environments where superheated water (up to 400 °C) mixes with cold seawater, creating steep thermal gradients. The discovery of hyperthermophiles dramatically expanded our understanding of the limits of life and strengthened arguments for the possibility of life in high-temperature environments on other worlds such as hydrothermal systems beneath icy moons.',
        },
        {
          q: 'What makes Deinococcus radiodurans one of the most radiation-resistant organisms known?',
          a: [
            'It produces a thick silica shell that physically blocks ionising radiation from penetrating to its DNA',
            'It contains uniquely high concentrations of the carotenoid pigment deinoxanthin that absorbs and quenches radiation energy before it can damage biomolecules',
            'It possesses extraordinarily efficient DNA repair machinery, multiple genome copies, and high intracellular manganese concentrations that protect proteins from oxidative damage during irradiation',
            'Its DNA is permanently cross-linked into a crystalline lattice that is impervious to strand breaks caused by ionising radiation',
          ],
          correct: 2,
          explain: 'Deinococcus radiodurans can survive doses of ionising radiation up to 5,000 Gy (a lethal dose for humans is ~5 Gy) and can reassemble its genome from hundreds of fragments. Its extraordinary resistance arises from multiple mechanisms acting together: (1) an unusually efficient DNA repair system (RecA-dependent double-strand break repair) that can reassemble shattered chromosomes within hours; (2) multiple genome copies (4–10 per cell) that provide undamaged templates; (3) uniquely high intracellular manganese-to-iron ratios that scavenge reactive oxygen species generated by radiation, protecting repair enzymes from oxidative inactivation; and (4) a desiccation-tolerance mechanism (radiation and desiccation damage DNA similarly) that co-evolved with radiation resistance. This organism has become a model for panspermia research and Mars habitability discussions.',
        },
        {
          q: 'What was the Great Oxidation Event (GOE) and approximately when did it occur?',
          a: [
            'The catastrophic release of volcanic CO₂ at ~3.0 Ga that triggered a global greenhouse and melted the first Snowball Earth',
            'The permanent rise of free molecular oxygen in Earth\'s atmosphere to levels above ~0.001% (~2.4–2.3 Ga), driven primarily by oxygenic photosynthesis by cyanobacteria',
            'The oxidation of the mantle at ~4.5 Ga as Earth accreted from oxidised planetesimals, setting the redox state for subsequent outgassing',
            'The sudden oxygenation of the deep ocean at ~0.6 Ga that triggered the Cambrian explosion of animal life',
          ],
          correct: 1,
          explain: 'The Great Oxidation Event (~2.4–2.3 billion years ago) marks the first sustained rise of free molecular oxygen (O₂) in Earth\'s atmosphere from effectively zero to detectable concentrations (~0.001% or higher). The primary driver was oxygenic photosynthesis by cyanobacteria, which split water (H₂O) to reduce CO₂ and released O₂ as a by-product. Before the GOE, geological proxies including mass-independent fractionation of sulfur isotopes (MIF-S), the presence of detrital pyrite and uraninite in river sediments, and the disappearance of BIFs all indicate an anoxic atmosphere. The GOE caused a mass extinction of anaerobic life (for which O₂ is toxic), the formation of oxidised red-bed sediments, and ultimately set the stage for complex eukaryotic and eventually animal life.',
        },
        // ── Chapter 2: Mars, Europa, Titan, Venus ────────────────────────────
        {
          q: 'What did NASA\'s Curiosity rover discover at Gale Crater that is significant for ancient Mars habitability?',
          a: [
            'Living microbial mats were detected in the mudstones of the crater floor using the SAM instrument suite',
            'Gale Crater\'s mudstone sediments contain clay minerals, sulfate salts, organic molecules, and chemical energy sources, indicating that the crater once held a freshwater lake capable of supporting life',
            'Large subsurface ice deposits were found beneath the crater floor, suggesting Mars still has accessible liquid water today',
            'Ancient stromatolite-like structures were imaged by the Mastcam, providing tentative evidence of Noachian-era biofilms',
          ],
          correct: 1,
          explain: 'Since landing in 2012, the Curiosity rover has transformed our understanding of early Mars habitability using Gale Crater as a field site. The mudstone sedimentary rocks at Yellowknife Bay and subsequent drill sites contain: (1) smectite clay minerals (indicative of water-rock interaction at near-neutral pH); (2) sulfate and sulfide minerals providing chemical energy gradients; (3) carbon, hydrogen, nitrogen, oxygen, phosphorus, and sulfur — the CHNOPS elements essential for life; (4) complex organic molecules including thiophenes, benzene, and toluene preserved in the rocks. The SAM and CheMin instruments established that Gale Crater hosted a sustained, habitable freshwater lake environment approximately 3.5 billion years ago — not just a brief wet period, but a stable lake system lasting potentially millions of years.',
        },
        {
          q: 'What is ALH84001 and why did it generate scientific controversy in 1996?',
          a: [
            'A carbonaceous chondrite found in Antarctica that contained the highest concentration of amino acids yet detected in any meteorite, sparking debate about contamination versus true extraterrestrial organics',
            'A Mars meteorite found in Antarctica that a NASA team claimed contained structures and chemical signatures suggestive of ancient Martian microbial life, though subsequent research largely attributed these features to abiotic processes',
            'An Allende meteorite fragment in which isotopically anomalous grains were discovered, suggesting presolar origin and challenging models of the early solar nebula',
            'A lunar meteorite in which researchers believed they had identified fossilised nanobacteria, which were later shown to be mineral artefacts at the resolution limit of electron microscopy',
          ],
          correct: 1,
          explain: 'ALH84001 is a 4.09-billion-year-old orthopyroxenite meteorite from Mars, recovered from the Allan Hills ice field in Antarctica in 1984. In August 1996, McKay et al. published a landmark paper in Science claiming the meteorite contained four lines of evidence for ancient Martian life: (1) polycyclic aromatic hydrocarbons (PAHs) concentrated near carbonate globules; (2) carbonate minerals formed at low temperatures consistent with biology; (3) magnetite crystals resembling those produced by magnetotactic bacteria; and (4) nanoscale rod-shaped structures resembling fossilised bacteria. The claim triggered intense scientific debate. Over the following decade, most of the community concluded that each feature had plausible abiotic explanations — PAHs from contamination, carbonates from hydrothermal rather than biological processes, and the structures being too small to be cells. The controversy remains instructive for biosignature assessment methodology.',
        },
        {
          q: 'What evidence did the Galileo spacecraft\'s magnetometer provide for a liquid ocean beneath Europa\'s icy surface?',
          a: [
            'The magnetometer detected a permanent intrinsic magnetic field generated by a molten iron core within Europa, indicating ongoing geological activity',
            'During Europa flybys, Galileo detected a time-varying induced magnetic field consistent with a highly electrically conductive layer — most likely a salty liquid-water ocean — beneath the ice shell',
            'The magnetometer recorded magnetic field anomalies caused by iron-rich compounds in Europa\'s surface ice, revealing the composition of the buried ocean',
            'Galileo measured disruptions to Jupiter\'s magnetic field lines at Europa\'s orbital position, which were modelled as caused by an ocean generating its own convection currents',
          ],
          correct: 1,
          explain: 'During its multiple Europa flybys between 1996 and 1999, the Galileo spacecraft\'s magnetometer detected a magnetic field signature inconsistent with a permanent intrinsic dipole (Europa lacks a large iron core). Instead, the field varied in both magnitude and direction in synchrony with Jupiter\'s rotating magnetosphere — the defining signature of electromagnetic induction. A time-varying external magnetic field induces eddy currents in electrically conductive material, which generate a secondary field opposing the change. The strength and geometry of the induced field at Europa required a highly conductive global shell near the surface. A salty liquid-water ocean (salinity >1 g/L) provides the necessary conductivity, while pure water ice or rock cannot. This magnetometer evidence, corroborated by the fractured and tectonically active surface imaged by SSI, constitutes the strongest evidence for Europa\'s subsurface ocean.',
        },
        {
          q: 'What did the Cassini spacecraft find in the plume material ejected from Enceladus\'s south pole?',
          a: [
            'Plume material consisted solely of water vapour and fine ice crystals with no dissolved minerals, indicating a cold, geologically inactive subsurface reservoir',
            'The plumes contained water vapour, ice particles, sodium salts, silica nanoparticles, molecular hydrogen, and complex organic molecules — collectively indicating a warm, chemically active subsurface ocean in contact with rock',
            'Cassini detected methane clathrates in the plumes that had formed from ancient organic material frozen into the ice shell billions of years ago',
            'The plume composition matched that of Jupiter\'s Io volcanic plumes, suggesting tidal heating drives sulfurous volcanism rather than water-based geysers',
          ],
          correct: 1,
          explain: 'Cassini\'s multiple direct plume fly-throughs using the Ion and Neutral Mass Spectrometer (INMS) and Cosmic Dust Analyser (CDA) revealed a remarkable chemical inventory in Enceladus\'s E-ring-forming plumes: water vapour (~90%), molecular hydrogen (H₂, ~1%), CO₂ (~0.8%), methane, ammonia, and complex organic molecules including aromatic compounds. The silica nanoparticles detected by CDA could only form by precipitation from hydrothermal fluids at ~90 °C reacting with rock, implying active serpentinisation. The molecular hydrogen is particularly significant: on Earth, H₂ production by water-rock reactions (serpentinisation) at hydrothermal vents supports chemolithotrophic microbial communities. Together, these detections indicate that Enceladus possesses a warm subsurface ocean in active chemical contact with its rocky core — making it one of the most compelling targets for life detection in the solar system.',
        },
        {
          q: 'Why is Titan\'s atmosphere considered astrobiologically interesting despite surface temperatures of around −179 °C?',
          a: [
            'Titan\'s thick nitrogen-methane atmosphere creates a greenhouse effect that may warm subsurface regions to temperatures where water-based life is possible near the core',
            'Titan\'s atmosphere is the only one besides Earth\'s dominated by molecular nitrogen and contains a rich organic haze; its methane-ethane lakes and rivers represent a potential solvent for non-water-based life and an analog for prebiotic chemistry',
            'The Cassini-Huygens probe detected chiral amino acids in Titan\'s stratosphere, suggesting that life-like chemistry is already underway in the gas phase',
            'Titan\'s atmosphere blocks cosmic radiation so effectively that complex organic molecules from cometary impacts are preserved intact on the surface',
          ],
          correct: 1,
          explain: 'Titan is unique in the outer solar system for its thick, optically opaque atmosphere of nitrogen (~95%) and methane (~5%), with surface pressure 1.45 atm — the only body besides Earth with such a substantial nitrogen atmosphere. Photochemistry driven by solar UV and Saturn\'s magnetospheric particles converts methane and nitrogen into a complex orange haze of tholins — nitrogen-bearing organic polymers whose chemistry partially parallels prebiotic organic synthesis on early Earth. On the surface, Cassini and Huygens confirmed lakes, rivers, and rain of liquid methane and ethane, predominantly at the poles. Some researchers have proposed that such non-aqueous solvents could support exotic life with membrane chemistry based on acrylonitrile or similar compounds. While extremely cold by terrestrial standards, Titan represents the most chemically complex prebiotic environment currently accessible in the solar system and a laboratory for non-water solvent astrobiology.',
        },
        {
          q: 'What does Venus\'s elevated D/H ratio (deuterium-to-hydrogen) reveal about the planet\'s history?',
          a: [
            'The high D/H ratio confirms that Venus accreted from deuterium-enriched planetesimals from the outer solar system rather than from the same material as Earth',
            'Venus\'s D/H ratio (~150 times Earth\'s ocean value) indicates that the planet once possessed a large ocean of liquid water, most of which was subsequently lost to space as the planet underwent a runaway greenhouse effect',
            'The elevated D/H ratio is a product of ongoing volcanic outgassing of deuterium-rich fluids from Venus\'s mantle, unrelated to any surface water history',
            'Venus\'s D/H ratio records a brief period of water delivery by late-stage cometary bombardment approximately 1 billion years ago',
          ],
          correct: 1,
          explain: 'Venus\'s atmospheric D/H ratio, measured by Pioneer Venus and subsequently confirmed by ground-based spectroscopy, is approximately 150 times the standard mean ocean water (SMOW) value of Earth. This extreme enrichment results from hydrodynamic escape: as water molecules in the upper atmosphere are photodissociated by UV radiation, the lighter hydrogen (protium, ¹H) escapes to space more readily than heavier deuterium (²H = D), leaving the residual water progressively enriched in D. The magnitude of Venus\'s D/H enrichment, modelled with atmospheric escape rates, implies that Venus may have possessed a surface ocean equivalent to a global layer several tens of metres to a few hundred metres deep. This was lost over ~2–4 billion years as the planet transitioned into the runaway greenhouse state inferred from its current surface temperature (~465 °C) and dense CO₂ atmosphere.',
        },
        // ── Chapter 3: Exoplanets, Habitable Zones, Biosignatures ────────────
        {
          q: 'What does the transit photometry method measure, and how does it allow detection of exoplanets?',
          a: [
            'It measures the Doppler shift of stellar spectral lines caused by a planet gravitationally tugging its host star, revealing the planet\'s minimum mass and orbital period',
            'It measures the periodic, fractional dimming of a star\'s light flux as an orbiting planet passes in front of the stellar disk, with the depth of the dimming proportional to the square of the planet-to-star radius ratio',
            'It uses interferometric nulling to suppress the star\'s light and directly image the thermal emission of warm planets in wide orbits',
            'It records the gravitational microlensing brightening event that occurs when an exoplanet\'s gravity focuses background starlight, revealing the planet\'s mass and distance',
          ],
          correct: 1,
          explain: 'Transit photometry detects exoplanets by monitoring the brightness of stars with high precision. When a planet\'s orbital plane is aligned with our line of sight, it periodically crosses (transits) the stellar disk, blocking a fraction of the star\'s light. The fractional flux decrease is ΔF/F = (R_p/R_*)², where R_p and R_* are the planet and stellar radii respectively. For an Earth-sized planet transiting a Sun-like star, ΔF/F ≈ (6,371/696,000)² ≈ 0.0084% — detectable by precise space-based photometry but not from the ground. The Kepler and TESS missions have used this technique to discover thousands of exoplanets. Transit timing variations (TTVs) can reveal additional planets, and transit spectroscopy — measuring wavelength-dependent dimming — probes planetary atmospheric composition.',
        },
        {
          q: 'What determines the inner edge of a star\'s classical habitable zone?',
          a: [
            'The inner edge is set by the Roche limit, inside which tidal forces would break apart any rocky planet',
            'The inner edge is determined by the moist-greenhouse and runaway-greenhouse thresholds, where increasing stellar flux causes water vapour feedback loops that irreversibly desiccate a planet\'s surface',
            'The inner edge is defined by the minimum orbital period at which a planet can maintain a magnetic field strong enough to deflect stellar wind stripping its atmosphere',
            'The inner edge is set by the point at which a planet\'s surface temperature exceeds 100 °C, ensuring oceans boil away',
          ],
          correct: 1,
          explain: 'The classical habitable zone (Kopparapu et al. 2013, building on Kasting et al. 1993) defines its inner boundary by two thresholds. The moist-greenhouse limit occurs when increasing stellar flux warms the lower atmosphere enough that the cold-trap (the stratospheric minimum temperature that condenses and traps water) fails — stratospheric water abundance rises, UV photodissociation accelerates, and hydrogen escapes to space, slowly desiccating the planet. The more conservative runaway-greenhouse limit occurs when incoming stellar flux cannot be radiated away fast enough regardless of surface temperature, causing a catastrophic feedback where all surface water evaporates. Both limits depend on stellar luminosity, spectral type, and atmospheric composition. Venus is thought to have crossed one of these thresholds. For the Sun, the moist-greenhouse inner edge is approximately 0.95 AU.',
        },
        {
          q: 'Why is the simultaneous detection of O₂ and CH₄ in an exoplanet atmosphere considered a stronger biosignature than detecting either gas alone?',
          a: [
            'Because O₂ and CH₄ have overlapping spectral features that constructively interfere, making both easier to detect simultaneously than separately',
            'Because O₂ and CH₄ rapidly react with each other abiotically, so their co-existence at detectable levels in chemical disequilibrium requires a continuous biological source replenishing both faster than they can be consumed',
            'Because geological sources can produce O₂ alone but cannot produce CH₄, so the combination is uniquely biological',
            'Because the simultaneous presence of both gases rules out photochemical production, which can only generate one at a time',
          ],
          correct: 1,
          explain: 'The concept of chemical disequilibrium as a biosignature was articulated by James Lovelock in 1965 and developed quantitatively by many subsequent workers. O₂ and CH₄ react spontaneously: CH₄ + 2O₂ → CO₂ + 2H₂O. At equilibrium, you cannot have substantial concentrations of both simultaneously — thermodynamics drives the system to consume whichever is in deficit. On Earth, O₂ is maintained at 21% by oxygenic photosynthesis, and CH₄ at ~1.8 ppm by methanogenic archaea. Their co-existence represents a profound chemical disequilibrium that requires continuous biological sources. An atmosphere in thermochemical equilibrium with surface rocks cannot maintain both. False positives exist for each individually (O₂ from photolysis of CO₂ on low-gravity worlds; CH₄ from serpentinisation), but the combination is robust against most known abiotic scenarios.',
        },
        {
          q: 'What is the vegetation red edge and at what wavelength does it occur?',
          a: [
            'It is the absorption feature at 760 nm caused by oxygen in Earth\'s atmosphere, used as a reference for atmospheric retrievals in exoplanet spectroscopy',
            'It is the sharp increase in reflectance by land vegetation from ~5% in the red (~670–700 nm) to ~50% in the near-infrared (~700–750 nm), caused by chlorophyll absorption cutoff and leaf internal scattering',
            'It is the red-shifted emission peak of bacteriochlorophyll in anoxic phototrophic bacteria, occurring at ~870 nm and indicative of anaerobic photosynthesis',
            'It is a spectral feature at 630 nm that marks the transition between carotenoid and chlorophyll absorption in photosynthetic organisms',
          ],
          correct: 1,
          explain: 'The vegetation red edge (VRE) is one of the most discussed potential surface biosignatures for exoplanets. Chlorophyll molecules strongly absorb red light (~680 nm) for photosynthesis but are transparent to near-infrared radiation. Plant leaves also have a complex internal spongy mesophyll architecture that strongly backscatters NIR light. The result is a sharp, order-of-magnitude reflectance increase from ~2–5% at 670–700 nm to ~40–50% at 700–750 nm. This feature is detectable in Earth\'s disk-integrated spectrum and in Earthshine spectra. Theoretical models suggest that photosynthetic organisms on exoplanets would exhibit analogous sharp reflectance edges at wavelengths determined by their host star\'s spectral energy distribution — redder stars might drive photosynthesis with pigments absorbing at longer wavelengths, potentially producing a "far-red" or infrared edge detectable in reflected light spectra.',
        },
        {
          q: 'Which term in the Drake Equation carries the greatest scientific uncertainty?',
          a: [
            'R* (the rate of star formation in the galaxy), because stellar surveys have only been conducted for a small fraction of the Milky Way',
            'f_p (the fraction of stars with planetary systems), which remained unconstrained before the Kepler mission era',
            'f_l (the fraction of habitable planets on which life actually arises), because we have exactly one data point and no understanding of the probability of abiogenesis',
            'L (the average lifetime of a communicating civilisation), because historical records of technological civilisations span only decades',
          ],
          correct: 2,
          explain: 'Frank Drake introduced his equation in 1961 as a framework for estimating N, the number of communicating civilisations in the Milky Way: N = R* × f_p × n_e × f_l × f_i × f_c × L. Successive terms become progressively less constrained. R* is now well-measured (~3 new stars per year in the Milky Way). f_p (~1, essentially all sun-like stars have planets per Kepler) and n_e (perhaps 0.1–1 habitable-zone rocky planets per star) are increasingly well-constrained. But f_l — the probability that life arises on a habitable planet — spans at least 40 orders of magnitude in published estimates. We have one confirmed example of abiogenesis (Earth) and no theoretical first-principles calculation of its probability. Whether life\'s origin is near-inevitable given suitable conditions or an astronomically rare accident remains the central unresolved question of astrobiology, making f_l the most uncertain Drake Equation term.',
        },
        {
          q: 'In one sentence, what does the Fermi Paradox observe?',
          a: [
            'The universe is so large that any extraterrestrial civilisation is too distant to communicate with, given the finite speed of light',
            'Given the age and size of the Milky Way galaxy and the high probability estimates for life in the Drake Equation, we should expect evidence of extraterrestrial civilisations to be widespread — yet we observe none',
            'The energy requirements for interstellar travel are so prohibitive that no civilisation, however advanced, could colonise the galaxy within its lifetime',
            'Radio communication is the wrong search paradigm because advanced civilisations would use quantum communication channels invisible to current SETI instruments',
          ],
          correct: 1,
          explain: 'Enrico Fermi posed his famous question at Los Alamos in 1950: "Where is everybody?" The Fermi Paradox (formalised by Michael Hart in 1975) identifies a profound contradiction. Given: (1) the Milky Way is ~13 billion years old and contains ~200–400 billion stars; (2) a significant fraction appear to have rocky planets in habitable zones; (3) even at 1% of the speed of light, a civilisation could colonise the entire galaxy in ~10 million years — just 0.1% of galactic history; (4) therefore any civilisation arising more than ~10 Myr before us should, if it exists, have already colonised or at minimum made its presence unambiguously detectable. Yet we see no convincing evidence of extraterrestrial intelligence in SETI searches, Dyson spheres, or any other signature across the electromagnetic spectrum or in our cosmic neighbourhood.',
        },
        {
          q: 'The Great Filter hypothesis attempts to explain the Fermi Paradox. What does it imply if the Filter lies ahead of us?',
          a: [
            'It implies that humanity will soon develop the technology necessary to filter through the barriers to interstellar travel, and should accelerate space programme investment',
            'It implies that some extremely unlikely or catastrophic step lies in humanity\'s future — an existential barrier that nearly all civilisations fail to cross — making our long-term survival and galactic colonisation very improbable',
            'It implies that other civilisations exist but have chosen to filter their communications to avoid detection by less advanced species, explaining the silence',
            'It implies that the physical constants of the universe are fine-tuned to filter out complex chemistry, making abiogenesis rare but not impossible',
          ],
          correct: 1,
          explain: 'Robin Hanson introduced the Great Filter concept in 1998 as a resolution to the Fermi Paradox. The argument holds that somewhere between dead matter and galaxy-colonising civilisation there must be one or more extraordinarily improbable steps — the "filter" — that nearly all life-candidate worlds fail to pass. The Filter can lie in the past (abiogenesis, eukaryogenesis, multicellularity, complex nervous systems) or in the future. If the Filter is mostly behind us — if those steps are already completed in our evolutionary history — humanity may be among the rare survivors and the future could be open. However, if the Filter lies ahead — perhaps in the transition from planetary to interstellar civilisation — it implies that virtually all civilisations that reach our level are subsequently destroyed by nuclear war, self-replicating AI, engineered pandemic, or some other existential catastrophe before colonising space. This possibility is considered among the most alarming implications of the Fermi Paradox.',
        },
      ],
    },
  ],
}

export default abio101Capstone
