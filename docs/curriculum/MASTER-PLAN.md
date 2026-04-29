[MASTER-PLAN.md](https://github.com/user-attachments/files/27214370/MASTER-PLAN.md)
# Facet — Master Curriculum Plan

> The single source of truth for all lesson content production. Every Claude Code session that creates lesson content must reference this document and follow its structure exactly.

**Document version:** 1.0
**Last updated:** Set when you commit
**Status:** Approved baseline — edits require explicit version bump

---

## How to Use This Document

1. Lessons are written **one at a time**, in the sequence specified within each module.
2. Each lesson must trace its source citations to the tier permitted at its course level (see *Source Tier Hierarchy* below).
3. The **master plan does not change mid-stream**. If you discover a structural problem during lesson writing, flag it for a separate planning session — never silently restructure during content production.
4. Track progress in `docs/curriculum/PROGRESS.md` after each completed lesson.

---

## Source Tier Hierarchy

The source tier required scales with course level. Higher levels can use everything below them; lower levels cannot use higher-tier sources as primary citations.

| Tier | Source Type | Required At |
|------|-------------|-------------|
| 1 | US government scientific agencies (USGS, NASA, NOAA, NSF, USDA, EPA, USFS), Smithsonian, National Park Service | All levels |
| 2 | Open-licensed academic content (OpenStax CC-BY, MIT OpenCourseWare, PRI/Earth@Home, UCAR Center for Science Education) | All levels |
| 3 | Professional society publications (AGI, AGU/Eos, GSA, AMS, AAS, MSA) | 200-level and above |
| 4 | Peer-reviewed journals with DOI links (Nature, Science, JGR, EPSL, Geology, GSA Bulletin, Reviews of Geophysics, Annual Review of Earth and Planetary Sciences) | 300-level only |
| 5 | International scientific assessments (IPCC AR6, NCA5, WMO State of the Global Climate, IPBES) | Climate Science 300-level required; other tracks optional |

### Source Citation Rules

- Every factual claim ties to a specific source. Not "scientists believe" — specifically "per USGS Earthquake Hazards Program (2023)" or "Wilde et al. (2001), Nature 409:175-178."
- Direct quotes under 15 words; maximum one direct quote per source per lesson; default to paraphrasing.
- Each lesson lists 3–6 sources at the bottom — the same sources cited inline.
- 300-level lessons require DOI links for all peer-reviewed citations.
- If a fact cannot be verified from a primary source within 3 search attempts, **flag and skip**, never substitute a guess.

---

## Lesson Tier Structure

Each lesson belongs to one of three course levels. The structure, depth, and assessment differ by level.

| Aspect | 100-level | 200-level | 300-level |
|--------|-----------|-----------|-----------|
| Audience | Curious adults, high school graduates | Undergraduates, serious hobbyists | Graduate students, professionals |
| Duration per lesson | 10–15 min | 15–25 min | 25–40 min |
| Sections per lesson | 3 (intro → concept → quiz) | 4 (intro → concept → application → quiz) | 5 (intro → theory → case study → data lab → quiz) |
| Mathematical content | Conceptual only | Basic equations, data interpretation | Full quantitative reasoning, calculation |
| Source tiers | 1, 2 | 1, 2, 3 | 1, 2, 3, 4, 5 |
| XP per lesson | 120–180 | 200–280 | 320–500 |
| Quiz length | 3 questions | 5 questions | 8–10 questions |
| Capstone? | Course-end checkpoint (25 questions) | Course-end exam (40 questions) | Course-end exam (50 questions) + applied project |

---

## Track 1 — Geology

### Track Overview

A graduate of the Geology track will be able to identify common rocks and minerals from hand specimens, explain the major processes that shape Earth's surface and interior, read a geologic map, interpret stratigraphic sequences, and engage with current research on plate tectonics, geochronology, and economic geology. They will understand the deep-time framework within which all earth science operates and be able to apply geologic reasoning to real-world questions about natural hazards, resources, and landscape evolution.

### GEOL 101 — Reading the Earth

**Course summary.** A foundational course introducing Earth's structure, materials, and the processes that transform them. Students leave this course able to identify the three rock families, understand the rock cycle, recognize basic plate tectonic settings, and read elementary geologic features in landscape.

- **Prerequisites:** None
- **Estimated study time:** 8–10 hours
- **Source tiers permitted:** 1, 2

**Learning objectives.** Upon completion, students will be able to:

1. Describe Earth's internal structure (crust, mantle, outer core, inner core) and explain the evidence for each layer.
2. Identify igneous, sedimentary, and metamorphic rocks from key visual and textural features.
3. Explain the rock cycle and the processes that drive transformations between rock families.
4. Distinguish the three plate boundary types (divergent, convergent, transform) and the geologic features each produces.
5. Apply the principle of superposition to interpret simple stratigraphic sequences.
6. Recognize common rock-forming minerals and their basic identification properties.

**Modules:**

#### Module 1.1 — What Earth Is Made Of (~2 hours)
1. Lesson 1.1.1: Earth's Internal Structure
2. Lesson 1.1.2: The Crust — Continental vs. Oceanic
3. Lesson 1.1.3: The Mantle and Its Convection
4. Lesson 1.1.4: Earth's Core and Magnetic Field

#### Module 1.2 — Minerals: The Building Blocks (~2 hours)
1. Lesson 1.2.1: What Defines a Mineral *(existing — refine)*
2. Lesson 1.2.2: Identifying Minerals (Mohs, Streak, Cleavage)
3. Lesson 1.2.3: The Rock-Forming Minerals
4. Lesson 1.2.4: Crystal Systems Introduction

#### Module 1.3 — The Three Rock Families (~2 hours)
1. Lesson 1.3.1: The Rock Cycle Overview *(existing — refine)*
2. Lesson 1.3.2: Igneous Rocks — Born from Fire
3. Lesson 1.3.3: Sedimentary Rocks — Built from Debris
4. Lesson 1.3.4: Metamorphic Rocks — Transformed Under Pressure

#### Module 1.4 — Earth in Motion (~2 hours)
1. Lesson 1.4.1: Plate Tectonics Fundamentals *(existing — refine)*
2. Lesson 1.4.2: Divergent Boundaries and Mid-Ocean Ridges
3. Lesson 1.4.3: Convergent Boundaries and Subduction
4. Lesson 1.4.4: Transform Faults and the San Andreas

#### Module 1.5 — Reading the Landscape (~2 hours)
1. Lesson 1.5.1: Weathering and Erosion
2. Lesson 1.5.2: Rivers and Drainage Patterns
3. Lesson 1.5.3: Glaciers and Glacial Landforms
4. Lesson 1.5.4: Reading a Geologic Map (introduction)

**Capstone:** GEOL 101 Final Exam (25 questions, mixed-format) covering all five modules. Passing threshold: 75%.

---

### GEOL 201 — Earth Through Time

**Course summary.** Builds on GEOL 101 with a focus on geologic time, dating methods, the fossil record, and the major events in Earth's 4.5-billion-year history. Introduces stratigraphy and basic field methods.

- **Prerequisites:** GEOL 101
- **Estimated study time:** 12–15 hours
- **Source tiers permitted:** 1, 2, 3

**Learning objectives.**

1. Explain the principles of relative and absolute dating, including specific radiometric dating methods.
2. Apply stratigraphic principles to interpret rock sequences in cross-section.
3. Identify the major divisions of geologic time and the events that define their boundaries.
4. Explain the role of mass extinctions in shaping the fossil record.
5. Read and interpret a geologic map, including identifying folds, faults, and contacts.
6. Calculate isotope ages from given decay constants and parent/daughter ratios.
7. Describe the major chapters in the history of life on Earth.

**Modules:**

#### Module 2.1 — Telling Geologic Time (~3 hours)
1. Lesson 2.1.1: Deep Time — From Hutton to Today
2. Lesson 2.1.2: Relative Dating Principles
3. Lesson 2.1.3: Radiometric Dating Methods
4. Lesson 2.1.4: Calibrating the Geologic Timescale

#### Module 2.2 — Stratigraphy and the Rock Record (~3 hours)
1. Lesson 2.2.1: Sedimentary Sequences and Facies
2. Lesson 2.2.2: Unconformities and Missing Time
3. Lesson 2.2.3: Sequence Stratigraphy Basics
4. Lesson 2.2.4: Reading a Stratigraphic Column

#### Module 2.3 — The Fossil Record (~3 hours)
1. Lesson 2.3.1: How Fossils Form
2. Lesson 2.3.2: Index Fossils and Biostratigraphy
3. Lesson 2.3.3: Trace Fossils and Behavior
4. Lesson 2.3.4: Lagerstätten — Windows of Exceptional Preservation

#### Module 2.4 — Major Events in Earth History (~3 hours)
1. Lesson 2.4.1: The Hadean and Archean — Earth's First Two Billion Years
2. Lesson 2.4.2: The Great Oxidation Event
3. Lesson 2.4.3: The Cambrian Explosion
4. Lesson 2.4.4: The Big Five Mass Extinctions

#### Module 2.5 — Field Methods Introduction (~3 hours)
1. Lesson 2.5.1: Reading a Geologic Map
2. Lesson 2.5.2: Strike and Dip
3. Lesson 2.5.3: Folds and Faults in Cross-Section
4. Lesson 2.5.4: Building a Geologic History from Field Evidence

**Capstone:** GEOL 201 Final Exam (40 questions) plus a map-interpretation exercise where the student reconstructs the geologic history of an unfamiliar cross-section.

---

### GEOL 301 — Advanced Topics in Earth Science

**Course summary.** Graduate-level course engaging with current research questions, primary literature, and quantitative methods. Topics rotate based on active areas of investigation.

- **Prerequisites:** GEOL 101, GEOL 201
- **Estimated study time:** 18–22 hours
- **Source tiers permitted:** 1, 2, 3, 4

**Learning objectives.**

1. Read and critically evaluate peer-reviewed research papers in geology.
2. Apply geochronology to constrain the timing of geologic events with quantitative uncertainty.
3. Explain current debates in plate tectonics, including driving forces and supercontinent cycles.
4. Analyze isotope systematics for petrologic and provenance applications.
5. Engage with active research questions in economic geology and critical minerals.
6. Synthesize multidisciplinary evidence to address an open scientific question.

**Modules:**

#### Module 3.1 — Geochronology in Depth (~4 hours)
1. Lesson 3.1.1: U-Pb Dating and Zircon Geochronology
2. Lesson 3.1.2: Ar-Ar Dating and Volcanic Calibration
3. Lesson 3.1.3: Cosmogenic Nuclides and Surface Exposure
4. Lesson 3.1.4: Bayesian Age Modeling

#### Module 3.2 — The Engine of Plate Tectonics (~4 hours)
1. Lesson 3.2.1: Slab Pull, Ridge Push, and Mantle Drag
2. Lesson 3.2.2: Mantle Convection Models
3. Lesson 3.2.3: Hotspots and Mantle Plumes
4. Lesson 3.2.4: Supercontinent Cycles and Wilson Cycles

#### Module 3.3 — Igneous Petrology and Geochemistry (~4 hours)
1. Lesson 3.3.1: Partial Melting and Magma Generation
2. Lesson 3.3.2: Bowen's Reaction Series and Magma Differentiation
3. Lesson 3.3.3: Trace Element and Isotope Geochemistry
4. Lesson 3.3.4: Tectonic Discrimination Diagrams

#### Module 3.4 — Economic Geology and Critical Minerals (~3 hours)
1. Lesson 3.4.1: Ore Deposit Classification
2. Lesson 3.4.2: Porphyry Copper and Hydrothermal Systems
3. Lesson 3.4.3: Critical Minerals for the Energy Transition
4. Lesson 3.4.4: USGS Mineral Commodity Summaries Analysis

#### Module 3.5 — Capstone Research Project (~3 hours)
1. Lesson 3.5.1: Reading a Scientific Paper
2. Lesson 3.5.2: Synthesizing Multiple Sources
3. Lesson 3.5.3: Identifying Open Questions
4. Lesson 3.5.4: The Capstone Synthesis

**Capstone:** GEOL 301 Final Exam (50 questions) plus a written synthesis on one of three open research topics, citing at least 8 peer-reviewed sources.

---

## Track 2 — Oceanography

### Track Overview

A graduate of the Oceanography track will understand the physical, chemical, and biological systems of the global ocean, including circulation patterns, marine biogeochemistry, ocean-atmosphere coupling, and the ocean's role in climate. They will be able to read oceanographic data products, interpret water-column profiles, and engage with current research on ocean acidification, deoxygenation, and circulation change.

### OCEA 101 — Foundations of the Sea

**Course summary.** Introduction to the global ocean — what's in it, how it moves, and how it shapes climate. Covers physical oceanography fundamentals and the basic chemistry and biology of seawater.

- **Prerequisites:** None
- **Estimated study time:** 8–10 hours
- **Source tiers permitted:** 1, 2

**Learning objectives.**

1. Describe the structure of the ocean (surface layer, thermocline, deep ocean) and the gradients that define them.
2. Explain wind-driven surface currents and the formation of the five major gyres.
3. Describe the global thermohaline conveyor and its role in climate.
4. Identify the major divisions of marine life by depth and habitat.
5. Explain seawater chemistry including salinity, dissolved gases, and basic carbonate chemistry.
6. Describe the major sources of ocean energy (waves, tides, currents).

**Modules:**

#### Module 1.1 — The Ocean Basin (~2 hours)
1. Lesson 1.1.1: Mapping the Seafloor — From Lead Lines to Multibeam Sonar
2. Lesson 1.1.2: Ocean Basins and Their Features
3. Lesson 1.1.3: Coastal Margins and Shelves
4. Lesson 1.1.4: Hydrothermal Vents and Cold Seeps

#### Module 1.2 — Seawater Properties (~2 hours)
1. Lesson 1.2.1: What Makes Water Salty
2. Lesson 1.2.2: Temperature, Density, and the Thermocline
3. Lesson 1.2.3: Dissolved Gases — Oxygen and CO₂
4. Lesson 1.2.4: Light and Sound in the Ocean

#### Module 1.3 — Ocean Currents (~2 hours)
1. Lesson 1.3.1: Wind-Driven Surface Currents *(existing — refine; promote from "Ocean Circulation")*
2. Lesson 1.3.2: The Five Ocean Gyres
3. Lesson 1.3.3: Upwelling and Coastal Productivity
4. Lesson 1.3.4: The Coriolis Effect Explained

#### Module 1.4 — The Global Conveyor (~2 hours)
1. Lesson 1.4.1: Thermohaline Circulation Basics
2. Lesson 1.4.2: North Atlantic Deep Water Formation
3. Lesson 1.4.3: The Antarctic Circumpolar Current
4. Lesson 1.4.4: The Conveyor and Climate

#### Module 1.5 — Life in the Sea (~2 hours)
1. Lesson 1.5.1: Marine Habitats by Depth Zone
2. Lesson 1.5.2: Plankton — The Base of the Food Web
3. Lesson 1.5.3: Coral Reefs as Ecosystems
4. Lesson 1.5.4: Deep-Sea Life

**Capstone:** OCEA 101 Final Exam (25 questions).

---

### OCEA 201 — Ocean Processes and Methods

**Course summary.** Quantitative introduction to physical, chemical, and biological oceanography. Students work with real datasets from NOAA buoys, Argo floats, and satellite altimetry.

- **Prerequisites:** OCEA 101
- **Estimated study time:** 12–15 hours
- **Source tiers permitted:** 1, 2, 3

**Learning objectives.**

1. Read and interpret CTD profiles, T-S diagrams, and density sections.
2. Apply geostrophic balance to estimate currents from sea surface height.
3. Explain Ekman transport and its role in upwelling.
4. Calculate basic ocean carbon system parameters.
5. Describe ocean-atmosphere interactions including ENSO, PDO, and NAO.
6. Use real Argo and satellite datasets to characterize an ocean region.

**Modules:**

#### Module 2.1 — Physical Oceanography Methods (~3 hours)
1. Lesson 2.1.1: CTD Profiles and Water Masses
2. Lesson 2.1.2: T-S Diagrams Explained
3. Lesson 2.1.3: Geostrophic Currents from SSH
4. Lesson 2.1.4: The Argo Float Network

#### Module 2.2 — Wind, Waves, and Mixing (~3 hours)
1. Lesson 2.2.1: Ekman Transport
2. Lesson 2.2.2: Wind-Wave Generation
3. Lesson 2.2.3: Internal Waves
4. Lesson 2.2.4: Ocean Mixing and the Mixed Layer

#### Module 2.3 — Climate Oscillations (~3 hours)
1. Lesson 2.3.1: ENSO — The Driver of Global Variability
2. Lesson 2.3.2: The Pacific Decadal Oscillation
3. Lesson 2.3.3: The North Atlantic Oscillation
4. Lesson 2.3.4: The Indian Ocean Dipole

#### Module 2.4 — Ocean Chemistry (~3 hours)
1. Lesson 2.4.1: The Carbonate System
2. Lesson 2.4.2: Ocean Acidification Fundamentals
3. Lesson 2.4.3: Nutrients and Productivity
4. Lesson 2.4.4: Ocean Deoxygenation

#### Module 2.5 — Reading Ocean Data (~3 hours)
1. Lesson 2.5.1: NOAA World Ocean Atlas
2. Lesson 2.5.2: Satellite Altimetry
3. Lesson 2.5.3: Sea Surface Temperature Products
4. Lesson 2.5.4: Building a Regional Ocean Profile

**Capstone:** OCEA 201 Final Exam (40 questions) plus a regional analysis using real Argo data for an assigned ocean basin.

---

### OCEA 301 — Advanced Marine Science

**Course summary.** Graduate-level engagement with current research in marine science, including circulation change, paleoceanography, and biogeochemical cycling.

- **Prerequisites:** OCEA 101, OCEA 201
- **Estimated study time:** 18–22 hours
- **Source tiers permitted:** 1, 2, 3, 4, 5

**Learning objectives.**

1. Read and critically evaluate primary literature in oceanography.
2. Quantitatively analyze AMOC observations and projections.
3. Explain paleoceanographic proxies and their applications.
4. Engage with current research on ocean carbon uptake.
5. Apply ocean modeling concepts to specific scientific questions.

**Modules:**

#### Module 3.1 — AMOC and Climate Change (~4 hours)
1. Lesson 3.1.1: The RAPID Array and AMOC Monitoring
2. Lesson 3.1.2: AMOC Variability vs. Trend
3. Lesson 3.1.3: Paleoclimate Evidence for AMOC Collapse
4. Lesson 3.1.4: AMOC in IPCC AR6

#### Module 3.2 — Paleoceanography (~4 hours)
1. Lesson 3.2.1: Foraminiferal Proxies
2. Lesson 3.2.2: δ¹⁸O and Ice Volume
3. Lesson 3.2.3: Mg/Ca Paleothermometry
4. Lesson 3.2.4: Sediment Cores and Time Series

#### Module 3.3 — The Carbon Pumps (~4 hours)
1. Lesson 3.3.1: Solubility Pump Mechanics
2. Lesson 3.3.2: Biological Pump and Export Production
3. Lesson 3.3.3: Carbonate Counter Pump
4. Lesson 3.3.4: Future Ocean Carbon Uptake

#### Module 3.4 — Ocean Modeling (~3 hours)
1. Lesson 3.4.1: General Circulation Models
2. Lesson 3.4.2: Boundary Conditions and Forcing
3. Lesson 3.4.3: CMIP and Model Intercomparison
4. Lesson 3.4.4: Reading a Model Output Plot

#### Module 3.5 — Capstone (~3 hours)
1. Lesson 3.5.1: Reading an Oceanography Paper
2. Lesson 3.5.2: Open Questions in Modern Oceanography
3. Lesson 3.5.3: Synthesis Methods
4. Lesson 3.5.4: Capstone Synthesis Project

**Capstone:** OCEA 301 Final Exam (50 questions) plus a literature synthesis on an assigned current research question.

---

## Track 3 — Meteorology

### Track Overview

A graduate of the Meteorology track will understand atmospheric structure and circulation, the physics of weather systems, the formation of severe weather, and the principles of weather forecasting. They will be able to read surface and upper-air weather charts, interpret radar and satellite imagery, and engage with current research in atmospheric science.

### METR 101 — Reading the Sky

**Course summary.** Introduction to atmospheric science. What clouds tell us, why weather happens, and how to forecast at a basic level.

- **Prerequisites:** None
- **Estimated study time:** 8–10 hours
- **Source tiers permitted:** 1, 2

**Learning objectives.**

1. Describe the layered structure of Earth's atmosphere.
2. Identify the ten major cloud types and what weather they signal.
3. Explain the formation of fronts and their associated weather.
4. Describe how thunderstorms, tornadoes, and hurricanes form.
5. Read a basic surface weather map (isobars, fronts, station data).
6. Explain the global circulation cells (Hadley, Ferrel, Polar).

**Modules:**

#### Module 1.1 — Earth's Atmosphere (~2 hours)
1. Lesson 1.1.1: Atmospheric Layers (Troposphere to Exosphere)
2. Lesson 1.1.2: Atmospheric Composition
3. Lesson 1.1.3: Pressure, Temperature, and Density
4. Lesson 1.1.4: Solar Radiation and the Energy Budget

#### Module 1.2 — Clouds and Precipitation (~2 hours)
1. Lesson 1.2.1: The Three Cloud Families *(existing — refine)*
2. Lesson 1.2.2: The Ten Cloud Types
3. Lesson 1.2.3: How Clouds Form
4. Lesson 1.2.4: Types of Precipitation

#### Module 1.3 — Weather Systems (~2 hours)
1. Lesson 1.3.1: Air Masses and Their Origins
2. Lesson 1.3.2: Cold Fronts, Warm Fronts, Occluded Fronts
3. Lesson 1.3.3: Mid-Latitude Cyclones
4. Lesson 1.3.4: Global Circulation Cells

#### Module 1.4 — Severe Weather (~2 hours)
1. Lesson 1.4.1: How Thunderstorms Form
2. Lesson 1.4.2: Tornadoes and Tornado Alley
3. Lesson 1.4.3: Hurricane Anatomy and Genesis
4. Lesson 1.4.4: Winter Storms and Ice Events

#### Module 1.5 — Forecasting Basics (~2 hours)
1. Lesson 1.5.1: Reading a Surface Weather Map
2. Lesson 1.5.2: Reading a Satellite Image
3. Lesson 1.5.3: Basic Radar Interpretation
4. Lesson 1.5.4: How a Forecast Is Made

**Capstone:** METR 101 Final Exam (25 questions).

---

### METR 201 — Atmospheric Dynamics and Methods

**Course summary.** Quantitative introduction to atmospheric dynamics, thermodynamics, and modern observation systems.

- **Prerequisites:** METR 101
- **Estimated study time:** 12–15 hours
- **Source tiers permitted:** 1, 2, 3

**Learning objectives.**

1. Apply atmospheric thermodynamics including adiabatic processes and stability.
2. Read a Skew-T log-P diagram to assess atmospheric stability.
3. Calculate basic atmospheric quantities (CAPE, lifted index, lapse rate).
4. Explain numerical weather prediction principles.
5. Interpret radar products including velocity and dual-polarization data.
6. Describe the role of the jet stream in mid-latitude weather.

**Modules:**

#### Module 2.1 — Atmospheric Thermodynamics (~3 hours)
1. Lesson 2.1.1: Adiabatic Processes
2. Lesson 2.1.2: Atmospheric Stability
3. Lesson 2.1.3: The Skew-T Log-P Diagram
4. Lesson 2.1.4: Calculating CAPE

#### Module 2.2 — Atmospheric Dynamics (~3 hours)
1. Lesson 2.2.1: Forces in the Atmosphere
2. Lesson 2.2.2: Geostrophic Wind
3. Lesson 2.2.3: Vorticity and Divergence
4. Lesson 2.2.4: The Jet Stream

#### Module 2.3 — Severe Weather Science (~3 hours)
1. Lesson 2.3.1: Supercell Dynamics
2. Lesson 2.3.2: Tornado Formation Theory
3. Lesson 2.3.3: Hurricane Intensification
4. Lesson 2.3.4: Mesoscale Convective Systems

#### Module 2.4 — Modern Observation (~3 hours)
1. Lesson 2.4.1: Doppler Radar Principles
2. Lesson 2.4.2: Dual-Polarization Radar
3. Lesson 2.4.3: GOES Satellite Products
4. Lesson 2.4.4: Radiosondes and Upper-Air Observations

#### Module 2.5 — Forecasting Methods (~3 hours)
1. Lesson 2.5.1: Numerical Weather Prediction
2. Lesson 2.5.2: Ensemble Forecasting
3. Lesson 2.5.3: Forecast Verification
4. Lesson 2.5.4: Building a Regional Forecast

**Capstone:** METR 201 Final Exam (40 questions) plus a stability analysis using a real radiosonde sounding.

---

### METR 301 — Advanced Atmospheric Science

**Course summary.** Graduate-level engagement with current atmospheric research including climate dynamics, air quality, and atmospheric chemistry.

- **Prerequisites:** METR 101, METR 201
- **Estimated study time:** 18–22 hours
- **Source tiers permitted:** 1, 2, 3, 4

**Learning objectives.**

1. Read primary literature in atmospheric science.
2. Apply atmospheric chemistry to air quality questions.
3. Engage with current research on hurricane intensification trends.
4. Explain stratospheric processes including ozone and the QBO.
5. Synthesize multiple lines of evidence on extreme weather attribution.

**Modules:**

#### Module 3.1 — Atmospheric Chemistry (~4 hours)
1. Lesson 3.1.1: Tropospheric Ozone Chemistry
2. Lesson 3.1.2: Aerosols and Air Quality
3. Lesson 3.1.3: The Ozone Hole and the Montreal Protocol
4. Lesson 3.1.4: Atmospheric Methane

#### Module 3.2 — Hurricane Science (~4 hours)
1. Lesson 3.2.1: Genesis and Maximum Potential Intensity
2. Lesson 3.2.2: Rapid Intensification
3. Lesson 3.2.3: Storm Surge and Compound Flooding
4. Lesson 3.2.4: Hurricanes in a Warming World

#### Module 3.3 — Climate Dynamics (~4 hours)
1. Lesson 3.3.1: General Circulation Reorganization
2. Lesson 3.3.2: Hadley Cell Expansion
3. Lesson 3.3.3: Jet Stream Wave Dynamics
4. Lesson 3.3.4: Extreme Heat Events

#### Module 3.4 — Extreme Weather Attribution (~3 hours)
1. Lesson 3.4.1: Attribution Science Framework
2. Lesson 3.4.2: Heatwave Attribution Methods
3. Lesson 3.4.3: Precipitation Extreme Attribution
4. Lesson 3.4.4: Reading a World Weather Attribution Study

#### Module 3.5 — Capstone (~3 hours)
1. Lesson 3.5.1: Reading an Atmospheric Science Paper
2. Lesson 3.5.2: Open Questions in Modern Meteorology
3. Lesson 3.5.3: Synthesis Methods
4. Lesson 3.5.4: Capstone Synthesis Project

**Capstone:** METR 301 Final Exam (50 questions) plus a synthesis project on an assigned current atmospheric research question.

---

## Track 4 — Volcanology

### Track Overview

A graduate of the Volcanology track will understand volcanic systems from magma generation through eruption to climatic effects, including how volcanoes are monitored, how hazards are assessed, and how volcanic activity has shaped Earth's history.

### VOLC 101 — Fire from the Earth

**Course summary.** Introduction to volcanic systems — what volcanoes are, how they form, why they erupt, and what hazards they pose.

- **Prerequisites:** None (GEOL 101 strongly recommended)
- **Estimated study time:** 8–10 hours
- **Source tiers permitted:** 1, 2

**Learning objectives.**

1. Describe the global distribution of volcanoes and their tectonic settings.
2. Identify the major volcano morphologies (shield, composite, caldera, cinder cone).
3. Explain the Volcanic Explosivity Index (VEI) and what it measures.
4. Describe the major volcanic hazards and how they affect humans.
5. Recognize the basic monitoring tools used by volcano observatories.
6. Explain why some volcanoes erupt explosively and others gently.

**Modules:**

#### Module 1.1 — What Is a Volcano? (~2 hours)
1. Lesson 1.1.1: Volcanoes Around the World
2. Lesson 1.1.2: The Anatomy of a Volcano *(existing — refine)*
3. Lesson 1.1.3: Volcano Types — Shield, Composite, Caldera, Cinder Cone
4. Lesson 1.1.4: Where Volcanoes Form (Tectonic Settings)

#### Module 1.2 — Magma and Eruption Style (~2 hours)
1. Lesson 1.2.1: What Is Magma? *(existing — refine)*
2. Lesson 1.2.2: Why Some Volcanoes Erupt Gently
3. Lesson 1.2.3: Why Some Volcanoes Erupt Violently
4. Lesson 1.2.4: The Volcanic Explosivity Index *(existing — refine)*

#### Module 1.3 — Volcanic Hazards (~2 hours)
1. Lesson 1.3.1: Lava Flows
2. Lesson 1.3.2: Pyroclastic Flows — The Deadliest Hazard
3. Lesson 1.3.3: Ash Fall and Aviation
4. Lesson 1.3.4: Lahars — Volcanic Mudflows

#### Module 1.4 — Watching Volcanoes (~2 hours)
1. Lesson 1.4.1: Volcano Monitoring Basics *(existing — refine)*
2. Lesson 1.4.2: Seismic Monitoring
3. Lesson 1.4.3: Ground Deformation (GPS, InSAR)
4. Lesson 1.4.4: Gas Emissions Monitoring

#### Module 1.5 — Famous Eruptions (~2 hours)
1. Lesson 1.5.1: Mount St. Helens 1980
2. Lesson 1.5.2: Pinatubo 1991 — Lives Saved
3. Lesson 1.5.3: Eyjafjallajökull 2010 — Volcanoes and Aviation
4. Lesson 1.5.4: Hunga Tonga-Hunga Ha'apai 2022

**Capstone:** VOLC 101 Final Exam (25 questions).

---

### VOLC 201 — Volcanic Processes and Methods

**Course summary.** Quantitative introduction to volcanic processes, monitoring methods, and hazard assessment.

- **Prerequisites:** VOLC 101 (GEOL 101 strongly recommended)
- **Estimated study time:** 12–15 hours
- **Source tiers permitted:** 1, 2, 3

**Learning objectives.**

1. Calculate eruption volumes and apply the VEI quantitatively.
2. Interpret real-time monitoring data from active volcanoes.
3. Read a volcanic hazard map and assess risk.
4. Explain the petrologic and geochemical evolution of magma.
5. Describe the architecture of magma plumbing systems.
6. Apply tephrochronology to date geologic events.

**Modules:**

#### Module 2.1 — Magma Plumbing (~3 hours)
1. Lesson 2.1.1: Magma Storage and Crystal Mush
2. Lesson 2.1.2: Magma Ascent and Decompression
3. Lesson 2.1.3: Volatile Saturation and Bubble Nucleation
4. Lesson 2.1.4: Triggers for Eruption

#### Module 2.2 — Eruption Dynamics (~3 hours)
1. Lesson 2.2.1: Effusive Eruption Mechanics
2. Lesson 2.2.2: Plinian Column Dynamics
3. Lesson 2.2.3: Pyroclastic Flow Generation
4. Lesson 2.2.4: Phreatomagmatic Eruptions

#### Module 2.3 — Monitoring in Practice (~3 hours)
1. Lesson 2.3.1: Reading a Real-Time Seismic Stream
2. Lesson 2.3.2: Interpreting GPS Time Series
3. Lesson 2.3.3: Gas Ratios and Eruption Forecasting
4. Lesson 2.3.4: Alert Levels and Communication

#### Module 2.4 — Hazard Assessment (~3 hours)
1. Lesson 2.4.1: Probabilistic Volcanic Hazard Assessment
2. Lesson 2.4.2: Mapping Lahar Inundation
3. Lesson 2.4.3: Ash Dispersion Modeling
4. Lesson 2.4.4: Evacuation Planning Case Studies

#### Module 2.5 — Tephrochronology (~3 hours)
1. Lesson 2.5.1: Tephra as a Time Marker
2. Lesson 2.5.2: Major Element Fingerprinting
3. Lesson 2.5.3: Tephra in Ice Cores
4. Lesson 2.5.4: Linking Distant Records

**Capstone:** VOLC 201 Final Exam (40 questions) plus a hazard assessment exercise for an assigned active volcano.

---

### VOLC 301 — Advanced Volcanology

**Course summary.** Graduate-level engagement with current research in volcanology, including supervolcano dynamics, climate effects, and large igneous provinces.

- **Prerequisites:** VOLC 101, VOLC 201
- **Estimated study time:** 18–22 hours
- **Source tiers permitted:** 1, 2, 3, 4

**Learning objectives.**

1. Read primary literature in volcanology.
2. Quantitatively assess super-eruption hazards.
3. Explain volcanic influences on climate at multiple time scales.
4. Engage with current research on Large Igneous Provinces.
5. Apply isotope and trace-element geochemistry to magmatic systems.

**Modules:**

#### Module 3.1 — Supervolcano Science (~4 hours)
1. Lesson 3.1.1: What Is a Supervolcano? *(existing — refine)*
2. Lesson 3.1.2: Yellowstone in Detail
3. Lesson 3.1.3: Toba 74 ka and the Genetic Bottleneck Debate
4. Lesson 3.1.4: Recurrence Statistics and Risk

#### Module 3.2 — Volcanoes and Climate (~4 hours)
1. Lesson 3.2.1: Volcanic Aerosols and Radiative Forcing
2. Lesson 3.2.2: Tambora 1815 and the Year Without Summer
3. Lesson 3.2.3: Pinatubo's Climate Signature
4. Lesson 3.2.4: Stratospheric Aerosol Injection — Lessons from Volcanoes

#### Module 3.3 — Large Igneous Provinces (~4 hours)
1. Lesson 3.3.1: What Are LIPs?
2. Lesson 3.3.2: Siberian Traps and the End-Permian Extinction
3. Lesson 3.3.3: Deccan Traps and the End-Cretaceous
4. Lesson 3.3.4: CAMP and the End-Triassic

#### Module 3.4 — Magmatic Geochemistry (~3 hours)
1. Lesson 3.4.1: Trace Elements as Magma Tracers
2. Lesson 3.4.2: Sr, Nd, Pb Isotope Systems
3. Lesson 3.4.3: Olivine Diffusion Chronometry
4. Lesson 3.4.4: Reconstructing Magma Histories

#### Module 3.5 — Capstone (~3 hours)
1. Lesson 3.5.1: Reading a Volcanology Paper
2. Lesson 3.5.2: Open Questions in Modern Volcanology
3. Lesson 3.5.3: Synthesis Methods
4. Lesson 3.5.4: Capstone Synthesis Project

**Capstone:** VOLC 301 Final Exam (50 questions) plus a synthesis project.

---

## Track 5 — Climate Science

### Track Overview

A graduate of the Climate Science track will understand the physical basis of climate, the methods used to study past and future climate, the major drivers of climate change, observed and projected impacts, and the policy framework within which climate science operates. They will be able to read IPCC reports critically and engage with current research.

### CLIM 101 — Climate Foundations

**Course summary.** Introduction to climate science — what climate is, what controls it, what's changing, and why.

- **Prerequisites:** None
- **Estimated study time:** 8–10 hours
- **Source tiers permitted:** 1, 2

**Learning objectives.**

1. Distinguish weather from climate.
2. Explain the greenhouse effect and the role of CO₂.
3. Describe major climate feedbacks (water vapor, ice-albedo, clouds).
4. Read a climate reconstruction (ice cores, tree rings, etc.).
5. Describe the major observed changes in Earth's climate.
6. Explain the basics of climate models.

**Modules:**

#### Module 1.1 — What Climate Is (~2 hours)
1. Lesson 1.1.1: Weather vs. Climate *(existing — refine)*
2. Lesson 1.1.2: The Climate System
3. Lesson 1.1.3: Climate Normals and Baselines
4. Lesson 1.1.4: Climate Variability vs. Change

#### Module 1.2 — Why Climate Changes (~2 hours)
1. Lesson 1.2.1: The Greenhouse Effect *(existing — refine)*
2. Lesson 1.2.2: The Keeling Curve
3. Lesson 1.2.3: Solar and Orbital Variations
4. Lesson 1.2.4: Volcanoes, Aerosols, and Albedo

#### Module 1.3 — Climate Feedbacks (~2 hours)
1. Lesson 1.3.1: Climate Feedbacks Introduction *(existing — refine)*
2. Lesson 1.3.2: Water Vapor Feedback
3. Lesson 1.3.3: Ice-Albedo Feedback
4. Lesson 1.3.4: Cloud Feedbacks — The Big Uncertainty

#### Module 1.4 — Reading the Past (~2 hours)
1. Lesson 1.4.1: Ice Cores Tell the Story *(existing — refine)*
2. Lesson 1.4.2: Tree Rings as Climate Archives
3. Lesson 1.4.3: Marine Sediments
4. Lesson 1.4.4: The Last Glacial Maximum

#### Module 1.5 — Modeling the Future (~2 hours)
1. Lesson 1.5.1: Climate Models *(existing — refine)*
2. Lesson 1.5.2: Emission Scenarios Explained
3. Lesson 1.5.3: What Models Can and Can't Tell Us
4. Lesson 1.5.4: Reading an IPCC Figure

**Capstone:** CLIM 101 Final Exam (25 questions).

---

### CLIM 201 — Climate Methods and Impacts

**Course summary.** Quantitative climate science with a focus on observations, attribution, and impacts.

- **Prerequisites:** CLIM 101
- **Estimated study time:** 12–15 hours
- **Source tiers permitted:** 1, 2, 3

**Learning objectives.**

1. Calculate radiative forcing for given GHG concentrations.
2. Apply attribution methods to specific extreme events.
3. Read paleoclimate proxy records quantitatively.
4. Explain climate impacts by sector (water, agriculture, health).
5. Apply downscaling to translate global projections to local scales.
6. Engage with the National Climate Assessment.

**Modules:**

#### Module 2.1 — Radiative Forcing (~3 hours)
1. Lesson 2.1.1: Radiative Forcing Quantified
2. Lesson 2.1.2: GHG Forcing Calculations
3. Lesson 2.1.3: Aerosol Forcing
4. Lesson 2.1.4: Climate Sensitivity

#### Module 2.2 — Attribution Science (~3 hours)
1. Lesson 2.2.1: Attribution Framework
2. Lesson 2.2.2: Heatwave Attribution
3. Lesson 2.2.3: Drought and Flood Attribution
4. Lesson 2.2.4: Reading a WWA Study

#### Module 2.3 — Climate Impacts (~3 hours)
1. Lesson 2.3.1: Sea Level Rise
2. Lesson 2.3.2: Water Resources
3. Lesson 2.3.3: Agriculture and Food Security
4. Lesson 2.3.4: Climate and Human Health

#### Module 2.4 — Regional Climate (~3 hours)
1. Lesson 2.4.1: Downscaling Methods
2. Lesson 2.4.2: Reading the National Climate Assessment
3. Lesson 2.4.3: Coastal Climate Change
4. Lesson 2.4.4: Arctic Amplification

#### Module 2.5 — Climate Solutions Overview (~3 hours)
1. Lesson 2.5.1: Mitigation Pathways
2. Lesson 2.5.2: Adaptation Strategies
3. Lesson 2.5.3: Negative Emissions Technologies
4. Lesson 2.5.4: The Paris Agreement Framework

**Capstone:** CLIM 201 Final Exam (40 questions) plus a regional climate analysis project.

---

### CLIM 301 — Advanced Climate Science

**Course summary.** Graduate-level engagement with current climate research, primary literature, and the IPCC assessment process.

- **Prerequisites:** CLIM 101, CLIM 201
- **Estimated study time:** 18–22 hours
- **Source tiers permitted:** 1, 2, 3, 4, 5

**Learning objectives.**

1. Read primary climate science literature critically.
2. Apply quantitative methods to climate model output.
3. Engage deeply with IPCC AR6 working group reports.
4. Synthesize evidence on tipping points.
5. Evaluate climate intervention proposals scientifically.

**Modules:**

#### Module 3.1 — Tipping Points and Cascades (~4 hours)
1. Lesson 3.1.1: Defining a Climate Tipping Point
2. Lesson 3.1.2: AMOC as a Tipping Element
3. Lesson 3.1.3: Greenland and Antarctic Ice Sheets
4. Lesson 3.1.4: Permafrost and Carbon Feedbacks

#### Module 3.2 — Carbon Cycle Science (~4 hours)
1. Lesson 3.2.1: The Global Carbon Budget
2. Lesson 3.2.2: Land Carbon Sinks
3. Lesson 3.2.3: Ocean Carbon Sinks
4. Lesson 3.2.4: Carbon Cycle Feedbacks

#### Module 3.3 — IPCC Deep Dive (~4 hours)
1. Lesson 3.3.1: How the IPCC Works
2. Lesson 3.3.2: Reading IPCC AR6 WG1 (Physical Science)
3. Lesson 3.3.3: Reading IPCC AR6 WG2 (Impacts)
4. Lesson 3.3.4: Reading IPCC AR6 WG3 (Mitigation)

#### Module 3.4 — Climate Intervention (~3 hours)
1. Lesson 3.4.1: Carbon Dioxide Removal Methods
2. Lesson 3.4.2: Stratospheric Aerosol Injection
3. Lesson 3.4.3: Marine Cloud Brightening
4. Lesson 3.4.4: The Governance Question

#### Module 3.5 — Capstone (~3 hours)
1. Lesson 3.5.1: Reading a Climate Science Paper
2. Lesson 3.5.2: Open Questions in Climate Science
3. Lesson 3.5.3: Synthesis Methods
4. Lesson 3.5.4: Capstone Synthesis Project

**Capstone:** CLIM 301 Final Exam (50 questions) plus a synthesis project.

---

## Track 6 — Planetary Science

### Track Overview

A graduate of the Planetary Science track will understand the formation and structure of the solar system, the geology and atmospheres of major planetary bodies, the methods used to study them, and the search for habitable worlds and life beyond Earth.

### PLAN 101 — Worlds of the Solar System

**Course summary.** Tour of the solar system. What's there, how it formed, and what we know about each major body.

- **Prerequisites:** None
- **Estimated study time:** 8–10 hours
- **Source tiers permitted:** 1, 2

**Learning objectives.**

1. Describe the structure of the solar system and the major populations of bodies.
2. Distinguish terrestrial planets, gas giants, and ice giants.
3. Explain Moon formation and lunar geology.
4. Describe Mars exploration findings.
5. Identify the major moons of Jupiter and Saturn.
6. Explain the basic methods of exoplanet detection.

**Modules:**

#### Module 1.1 — The Solar System (~2 hours)
1. Lesson 1.1.1: Solar System Tour *(existing — refine)*
2. Lesson 1.1.2: Solar System Formation
3. Lesson 1.1.3: Planet Types *(existing — refine)*
4. Lesson 1.1.4: Asteroids, Comets, and Kuiper Belt Objects

#### Module 1.2 — Earth's Moon (~2 hours)
1. Lesson 1.2.1: Moon Formation *(existing — refine)*
2. Lesson 1.2.2: Lunar Geology
3. Lesson 1.2.3: Apollo Sample Science
4. Lesson 1.2.4: Returning to the Moon — Artemis

#### Module 1.3 — Mars (~2 hours)
1. Lesson 1.3.1: Mars Today *(existing — refine)*
2. Lesson 1.3.2: Mars Geology
3. Lesson 1.3.3: Water on Mars — Past and Present
4. Lesson 1.3.4: Mars Rover Findings

#### Module 1.4 — Outer Solar System (~2 hours)
1. Lesson 1.4.1: Jupiter and Its Moons
2. Lesson 1.4.2: Saturn — Rings and Titan
3. Lesson 1.4.3: Uranus, Neptune, and the Ice Giants
4. Lesson 1.4.4: Pluto and the Kuiper Belt

#### Module 1.5 — Worlds Beyond (~2 hours)
1. Lesson 1.5.1: Exoplanets Introduction *(existing — refine)*
2. Lesson 1.5.2: Detection Methods Overview
3. Lesson 1.5.3: The Habitable Zone
4. Lesson 1.5.4: Notable Exoplanet Systems (TRAPPIST-1, etc.)

**Capstone:** PLAN 101 Final Exam (25 questions).

---

### PLAN 201 — Planetary Methods and Missions

**Course summary.** Quantitative introduction to planetary science methods, including spacecraft missions, remote sensing, and sample analysis.

- **Prerequisites:** PLAN 101
- **Estimated study time:** 12–15 hours
- **Source tiers permitted:** 1, 2, 3

**Learning objectives.**

1. Explain spacecraft trajectory design (Hohmann transfers, gravity assists).
2. Read planetary spectra to determine surface composition.
3. Apply crater counting to estimate surface ages.
4. Explain exoplanet detection mathematics (transits, RV).
5. Engage with current planetary missions.

**Modules:**

#### Module 2.1 — Mission Design (~3 hours)
1. Lesson 2.1.1: Orbital Mechanics Basics
2. Lesson 2.1.2: Hohmann Transfers
3. Lesson 2.1.3: Gravity Assists
4. Lesson 2.1.4: Mission Architecture Trade-offs

#### Module 2.2 — Remote Sensing (~3 hours)
1. Lesson 2.2.1: Reflectance Spectroscopy
2. Lesson 2.2.2: Thermal Imaging
3. Lesson 2.2.3: Radar Sounding
4. Lesson 2.2.4: Reading Hyperspectral Data

#### Module 2.3 — Surface Geology (~3 hours)
1. Lesson 2.3.1: Crater Counting and Surface Ages
2. Lesson 2.3.2: Volcanism on Other Worlds
3. Lesson 2.3.3: Tectonics on Other Worlds
4. Lesson 2.3.4: Erosion and Sedimentary Processes

#### Module 2.4 — Exoplanet Methods (~3 hours)
1. Lesson 2.4.1: Transit Photometry Mathematics
2. Lesson 2.4.2: Radial Velocity Method
3. Lesson 2.4.3: Direct Imaging
4. Lesson 2.4.4: Microlensing

#### Module 2.5 — Current Missions (~3 hours)
1. Lesson 2.5.1: Mars Sample Return Architecture
2. Lesson 2.5.2: Europa Clipper
3. Lesson 2.5.3: JWST Exoplanet Observations
4. Lesson 2.5.4: Future Mission Concepts

**Capstone:** PLAN 201 Final Exam (40 questions) plus a mission design or data analysis project.

---

### PLAN 301 — Advanced Planetary Science

**Course summary.** Graduate-level engagement with current planetary research, primary literature, and astrobiology.

- **Prerequisites:** PLAN 101, PLAN 201
- **Estimated study time:** 18–22 hours
- **Source tiers permitted:** 1, 2, 3, 4

**Learning objectives.**

1. Read primary planetary science literature.
2. Apply atmospheric retrieval methods to exoplanet data.
3. Engage with current astrobiology research.
4. Synthesize evidence on past habitability of Mars.
5. Evaluate planetary defense strategies.

**Modules:**

#### Module 3.1 — Astrobiology (~4 hours)
1. Lesson 3.1.1: Defining Life
2. Lesson 3.1.2: Extremophiles and Habitability
3. Lesson 3.1.3: Biosignatures
4. Lesson 3.1.4: The Drake Equation Revisited

#### Module 3.2 — Mars Science in Depth (~4 hours)
1. Lesson 3.2.1: Mars Climate History
2. Lesson 3.2.2: Mars Methane Mystery
3. Lesson 3.2.3: Subsurface Habitability
4. Lesson 3.2.4: Mars Sample Return Science

#### Module 3.3 — Ocean Worlds (~4 hours)
1. Lesson 3.3.1: Europa's Subsurface Ocean
2. Lesson 3.3.2: Enceladus and Its Plumes
3. Lesson 3.3.3: Titan's Methane Cycle
4. Lesson 3.3.4: The Search for Life on Ocean Worlds

#### Module 3.4 — Planetary Defense (~3 hours)
1. Lesson 3.4.1: Near-Earth Object Surveys
2. Lesson 3.4.2: The DART Mission
3. Lesson 3.4.3: Deflection Strategies
4. Lesson 3.4.4: Impact Hazard Assessment

#### Module 3.5 — Capstone (~3 hours)
1. Lesson 3.5.1: Reading a Planetary Science Paper
2. Lesson 3.5.2: Open Questions in Modern Planetary Science
3. Lesson 3.5.3: Synthesis Methods
4. Lesson 3.5.4: Capstone Synthesis Project

**Capstone:** PLAN 301 Final Exam (50 questions) plus a synthesis project.

---

## Production Summary

### Total scope

| Track | Courses | Modules | Lessons |
|-------|---------|---------|---------|
| Geology | 3 | 15 | 60 |
| Oceanography | 3 | 15 | 60 |
| Meteorology | 3 | 15 | 60 |
| Volcanology | 3 | 15 | 60 |
| Climate Science | 3 | 15 | 60 |
| Planetary Science | 3 | 15 | 60 |
| **Total** | **18** | **90** | **360** |

### Existing content

15 lessons already drafted (5 core lessons referenced as *existing* throughout this document, plus 10 additional from earlier expansion). These will be refined to fit their assigned position, not rewritten from scratch.

### Recommended production sequence

1. **Phase 1 — One course end-to-end as proof of concept** (GEOL 101, ~20 lessons). Validates the workflow before scaling.
2. **Phase 2 — Complete Geology track** (GEOL 201 + GEOL 301, ~40 lessons). Establishes the depth pattern.
3. **Phase 3 — Climate Science track in full** (~60 lessons). High-demand topic; benefits most from this depth.
4. **Phase 4 — Remaining tracks in parallel or sequential** based on user demand signals after Phase 3 launch.

### Realistic timeline at one-lesson-per-session pace

- 3–5 lessons per week (part-time pace) → ~80–130 lessons per year.
- Full curriculum (360 lessons) at this pace: ~3 years.
- With a content team of 2–3: ~12–18 months.

This is the right pace for academic-grade content. Do not compress at the cost of source rigor.

---

## Document Maintenance

- Edits to module structure, course objectives, or lesson sequencing require a version bump and explicit commit.
- Adding a new lesson within an existing module is a non-versioning edit.
- The PROGRESS.md file tracks completion status and is updated after every committed lesson.
- Quarterly review of the master plan against user data and content performance is recommended.

**End of master plan v1.0.**
