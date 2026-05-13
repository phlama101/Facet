import { Flame, Waves, Globe, Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const midOceanRidgeVolcanism: Lesson = {
  id: 'volc-201-1-3-3',
  title: 'Mid-Ocean Ridge Volcanism & MORB',
  track: 'vol',
  trackName: 'Volcanology',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: 'Earth\'s most voluminous volcanic system — how seafloor spreading generates MORB, axial magma chamber structure, hydrothermal systems and black smokers, and what MORB geochemistry tells us about the mantle.',
  sources: [
    { org: 'NOAA',        title: 'NOAA Ocean Exploration — Mid-Ocean Ridges and Hydrothermal Vents',         url: 'https://oceanexplorer.noaa.gov/facts/mid-ocean-ridges.html' },
    { org: 'Woods Hole',  title: 'WHOI — Seafloor Spreading and the Global Ridge System',                   url: 'https://www.whoi.edu/know-your-ocean/ocean-topics/seafloor-below/seafloor-spreading/' },
    { org: 'Nature',      title: 'Rubin & Sinton — Inferences on mid-ocean ridge thermal and magmatic structure from MORB compositions, Nature Geoscience (2007)', url: 'https://www.nature.com/articles/ngeo177' },
    { org: 'Science',     title: 'Kelley et al. — An off-axis hydrothermal vent field near the Mid-Atlantic Ridge at 30°N, Science (2001)',                       url: 'https://www.science.org/doi/10.1126/science.1070325' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Earth\'s hidden volcanic engine',
      body: `The global mid-ocean ridge (MOR) system is by far the most productive volcanic system on Earth — yet it operates almost entirely out of sight, hidden beneath 2,500 metres of seawater. Stretching approximately **60,000 km** through every ocean basin, mid-ocean ridges form a continuous underwater mountain chain where tectonic plates diverge and new oceanic crust is generated. At an average output of roughly **21 km³ of magma per year**, MOR volcanism dwarfs all subaerial volcanism combined; it is responsible for the creation of the entire oceanic crust, the renewal of the ocean floor on a ~180 million-year timescale, and the transfer of enormous quantities of heat and chemical elements from Earth\'s mantle into the oceans.

The volcanic products of mid-ocean ridges — **mid-ocean ridge basalts (MORB)** — are the most abundant rock type on Earth\'s surface, covering more than 60% of the planet\'s surface area beneath the oceans. MORB originates from the **depleted MORB mantle (DMM)**: the upper mantle that has been repeatedly melted over billions of years, stripping out incompatible elements (those that preferentially enter the melt) until the residual source is chemically impoverished relative to the bulk mantle. This depletion is recorded in MORB\'s geochemical fingerprints: low **⁸⁷Sr/⁸⁶Sr ratios** (~0.7025, indicating ancient depletion of Rb relative to Sr) and high **εNd values** of ~+8 to +10 (reflecting elevated ¹⁴³Nd/¹⁴⁴Nd ratios from ancient Sm/Nd fractionation in the source). These isotopic signatures make MORB a powerful tracer of mantle composition and circulation.

**Spreading rate** fundamentally controls ridge morphology, magmatic plumbing, and eruptive style. Slow-spreading ridges such as the **Mid-Atlantic Ridge (MAR)**, diverging at 2–3 cm/yr, have deep, fault-bounded axial rift valleys up to 30 km wide and 1–2 km deep — the result of tensional faulting dominating over volcanic construction when magma supply is limited. Fast-spreading ridges such as the **East Pacific Rise (EPR)**, spreading at 10–20 cm/yr, have a narrow axial high — a gentle topographic dome only a few kilometres wide — because the high magma supply rate keeps the lithosphere warm, thin, and buoyant, allowing volcanic construction to outpace tectonic extension.

Beneath the axial zone, the **axial magma chamber (AMC)** (sometimes called the axial melt lens) is the immediate staging ground for eruptions. At fast-spreading ridges, the AMC is a thin (<100 m tall), wide (~few km) body of partially molten material detectable by multichannel seismic surveys at depths of 1–3 km below the seafloor. At slow-spreading ridges, a steady-state AMC is often absent; instead, magma is supplied episodically, solidifying between pulses. Beneath the AMC, the **lower crustal mush zone** (the crystal-melt mush, sometimes called the "MUSH" model region) represents a much larger volume of partially crystallised basaltic material that records the cumulative thermal and chemical evolution of the system.

Where ocean water circulates through the hot, fractured oceanic crust surrounding the axial zone, **hydrothermal systems** develop. Seawater penetrates kilometres into the crust along fractures, is progressively heated toward 350–400°C as it approaches the AMC heat source, reacts with basalt (gaining Mg, Si, and transition metals; losing Ca and gaining H₂S and other reduced species), and returns to the seafloor as superheated, metal-rich fluid through **black smoker** hydrothermal vents. Black smokers precipitate dense plumes of iron-, copper-, zinc-, and manganese-sulfide minerals that create the characteristic black "smoke." **White smokers**, by contrast, emit lower-temperature (100–300°C) fluids rich in silica, barium, and calcium, producing white anhydrite and silica precipitates. These vent systems support extraordinary chemosynthetic ecosystems — giant tube worms, vent crabs, and sulfur-oxidising bacteria — that derive energy from chemical gradients rather than photosynthesis.

Hydrothermal circulation through mid-ocean ridges is geochemically significant at the global scale: it accounts for approximately **32% of Earth\'s total oceanic heat flux** and exchanges enormous quantities of cations between seawater and the oceanic crust, helping to regulate seawater chemistry over geological time.`,
      keyTerms: [
        {
          term: 'MORB (Mid-Ocean Ridge Basalt)',
          def: 'The tholeiitic basalt erupted at mid-ocean ridges, forming the uppermost oceanic crust. MORB is subdivided into N-MORB (Normal-MORB: depleted in incompatible elements, most common), E-MORB (Enriched-MORB: slightly elevated incompatible elements, erupted near hotspots or anomalous ridge segments), and T-MORB (Transitional-MORB: intermediate). N-MORB has ⁸⁷Sr/⁸⁶Sr ~0.7025 and εNd ~+8 to +10, reflecting derivation from the depleted MORB mantle (DMM). MORB typically has ~50 wt% SiO₂, ~8–12 wt% MgO, and low K₂O (<0.15 wt%).',
        },
        {
          term: 'Axial Magma Chamber (AMC)',
          def: 'The shallow crustal magma reservoir beneath mid-ocean ridge axes from which eruptions are directly fed. At fast-spreading ridges (EPR), the AMC is a thin (~50–100 m), laterally continuous melt lens at ~1–3 km depth, detectable by seismic reflection as a bright reflector. At slow-spreading ridges (MAR), persistent AMC reflectors are rarely observed; magma is supplied intermittently and the system cools between pulses. The AMC overlies the lower crustal mush zone, a broader region of partially crystallised gabbroic material.',
        },
        {
          term: 'Depleted MORB Mantle (DMM)',
          def: 'The upper mantle reservoir that is the dominant source of MORB magmas. DMM has been depleted in incompatible elements (Ba, Rb, Th, U, light rare earth elements) by repeated partial melting episodes throughout Earth\'s history, leaving a residue enriched in compatible elements (Ni, Cr, Os) and with characteristic low ⁸⁷Sr/⁸⁶Sr (~0.7025) and high εNd (+8 to +10) isotopic compositions. DMM consists predominantly of harzburgite and lherzolite that has undergone melt extraction.',
        },
        {
          term: 'Black Smoker',
          def: 'A high-temperature (350–400°C) hydrothermal vent at mid-ocean ridges that emits particle-laden fluid rich in dissolved metals (Fe, Cu, Zn, Mn) and H₂S. As the hot vent fluid mixes with cold seawater, metal sulfides (pyrite, chalcopyrite, sphalerite) precipitate immediately, forming the black "smoke" and building chimneys of sulfide minerals up to tens of metres tall. Black smoker systems support chemosynthetic ecosystems and deposit volcanogenic massive sulfide (VMS) ore deposits.',
        },
        {
          term: 'Ophiolite',
          def: 'A section of oceanic crust and upper mantle that has been tectonically emplaced (obducted) onto continental crust, providing an on-land cross-section through what was once a mid-ocean ridge. The classic ophiolite sequence from bottom to top: peridotite (mantle residue) → layered gabbros (lower crust crystallised from magma) → sheeted dike complex (feeder dikes) → pillow basalts (uppermost extrusive crust) → pelagic sediments. Key examples include the Troodos ophiolite (Cyprus) and the Samail (Semail) ophiolite (Oman), the world\'s largest at ~600 km long.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Spreading rates, MORB types, lava morphology, and hydrothermal systems',
      body: `**Spreading rate controls on ridge structure and magmatism.** The most fundamental variable in mid-ocean ridge geology is half-spreading rate — the velocity at which each plate moves away from the ridge axis. Slow-spreading ridges (half-rate <20 mm/yr: Mid-Atlantic Ridge, Southwest Indian Ridge) are melt-starved, with infrequent eruptions, thick lithosphere, and a deep axial valley controlled by normal faulting. Fast-spreading ridges (half-rate >60 mm/yr: East Pacific Rise, northern East Pacific) are magmatically robust, with a near-continuous AMC, thin lithosphere, and a smooth axial high. Intermediate ridges (half-rate 20–60 mm/yr: Juan de Fuca Ridge, Galápagos Spreading Centre) show transitional morphology. This spreading-rate continuum was first systematically described by Macdonald (1982) and subsequently explained thermally: a high magma supply maintains a warm, weak lithosphere that cannot sustain the tensional faulting that creates axial rift valleys.

**MORB geochemistry and mantle heterogeneity.** The three MORB sub-types reflect varying degrees of mantle source depletion and potential contamination by enriched mantle components. N-MORB (Normal-MORB) — the most common variety, dominant at ridge segments far from hotspots — has low (La/Sm)N ratios (<1), reflecting derivation from DMM. E-MORB (Enriched-MORB) occurs where ridge segments overlie mantle plumes or anomalously enriched mantle domains; it has higher (La/Sm)N (>1), elevated ⁸⁷Sr/⁸⁶Sr, and lower εNd. Iceland — where the Mid-Atlantic Ridge passes directly over the Iceland mantle plume — is the archetype of ridge-plume interaction, producing thick oceanic crust (up to 40 km, vs. normal ~7 km) and transitional to E-MORB compositions. T-MORB (Transitional-MORB) represents intermediate compositions between N-MORB and E-MORB and is commonly found at the boundaries of enriched ridge segments.

**Pillow basalts and sheet flows.** Submarine lava erupted at mid-ocean ridges takes two dominant forms controlled by effusion rate. **Pillow basalts** — rounded, bulbous lava bodies (0.5–1.5 m diameter) with glassy selvages formed by rapid quenching against seawater — form during low-effusion-rate eruptions. The pillow structure forms because a chilled outer skin confines the lava, which inflates and eventually ruptures at its toe to extrude a new lobe. **Sheet flows** (lobate and hackly flows) form during high-effusion-rate eruptions when lava outpaces the formation of a stable skin; they cover larger areas with smoother surfaces. Rapid ROV surveys and seafloor mapping (e.g., by the NeMO observatory at Axial Seamount) have documented the transition from pillow basalt-dominated eruptive centres during small, point-source eruptions to sheet flow-dominated systems during larger, fissure-fed events.

**Hydrothermal circulation and vent chemistry.** The hydrothermal system at mid-ocean ridges operates as a convective heat engine: cold, oxidised seawater (~2°C) enters the crust through fractures in the flanks of the ridge, heats up as it descends toward the AMC (the "recharge zone"), reacts with basalt (gaining Fe, Mn, Si, H₂S; losing Mg and sulfate), and ascends through focused high-permeability zones to vent at the seafloor (the "discharge zone"). The heat output of this system is enormous: global hydrothermal flux at mid-ocean ridges removes approximately 32% of Earth\'s total oceanic heat flow, equivalent to ~8 TW of heat annually. Chemically, black smoker vents (350–400°C, pH ~3–4) deliver Fe, Cu, Zn, Co, and Mn to the deep ocean; hydrothermal plumes transport these metals thousands of kilometres before dilution and precipitation. The discovery of hydrothermal vents in 1977 at the Galápagos Rift by the Alvin submersible revolutionised our understanding of deep-sea biology (revealing chemosynthetic ecosystems) and marine geochemistry.`,
      cards: [
        {
          name: 'Spreading Rate & Ridge Morphology',
          icon: Activity,
          color: BRAND.accent,
          desc: 'Fast ridges (EPR, 10–20 cm/yr): continuous AMC, axial high, thin lithosphere, smooth seafloor. Slow ridges (MAR, 2–3 cm/yr): episodic magma supply, deep rift valley, thick lithosphere, abundant normal faults. Spreading rate sets the thermal regime that governs everything else.',
          examples: 'East Pacific Rise: 13 cm/yr, ~1 km wide axial high, AMC at 1.5 km depth · Mid-Atlantic Ridge: 2.5 cm/yr, axial valley 30 km wide, 2 km deep · Juan de Fuca Ridge: intermediate 5.6 cm/yr, transitional morphology',
        },
        {
          name: 'MORB Types & DMM Source',
          icon: Globe,
          color: BRAND.jade,
          desc: 'N-MORB: depleted, (La/Sm)N <1, ⁸⁷Sr/⁸⁶Sr ~0.7025, εNd +8–10. E-MORB: enriched, near hotspots, higher Sr/Nd ratio. T-MORB: transitional. All derive from DMM — the repeatedly melt-extracted upper mantle that is Earth\'s largest, most homogeneous mantle reservoir.',
          examples: 'N-MORB dominates 80%+ of ridge length · Iceland ridge segment: E-MORB to T-MORB, 40 km crustal thickness vs. normal 7 km · Lucky Strike and Rainbow segments (MAR): E-MORB with anomalously enriched signatures',
        },
        {
          name: 'Pillow Basalts & Sheet Flows',
          icon: Flame,
          color: BRAND.coral,
          desc: 'Pillows (low effusion rate): glassy-skinned lobes 0.5–1.5 m, build lobate mounds. Sheet flows (high rate): flat, rippled or hackly surface, cover km² rapidly. Both quench instantly against 2°C seawater; glassy margins preserve melt composition. Pillow basalts preserved in ophiolites are field evidence of past submarine volcanism.',
          examples: 'Axial Seamount 2015 eruption: sheet flows covered 50 km² in days · Troodos ophiolite Cyprus: pillow basalts at summit of 90 Ma oceanic crust section · Mid-Atlantic Ridge: near-exclusively pillow basalt due to slow, low-flux eruptions',
        },
        {
          name: 'Hydrothermal Vents & Black Smokers',
          icon: Waves,
          color: BRAND.amethyst,
          desc: 'Seawater penetrates fractures → heated to 350–400°C near AMC → reacts with basalt (gains Fe, Mn, H₂S; loses Mg) → vents as black smoker (sulfide precipitation) or white smoker (anhydrite/silica, 100–300°C). Global heat flux ~32% of oceanic total. Chemosynthetic ecosystems thrive; VMS ore deposits form.',
          examples: 'TAG hydrothermal field (MAR 26°N): active mound 200 m across, millions of tonnes of Cu-Fe sulfide · Lost City (MAR 30°N): off-axis white smoker field, carbonate chimneys to 60 m, extremophile-rich · Galápagos Rift 1977: first hydrothermal vents ever discovered, aboard Alvin',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Mid-Ocean Ridge System: From Mantle Upwelling to Black Smoker',
      body: 'How decompression melting in the mantle generates MORB magma, feeds the axial magma chamber, erupts on the seafloor, and drives hydrothermal circulation back through the crust.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing the complete cycle of mid-ocean ridge volcanism from mantle upwelling through magma chamber emplacement, seafloor eruption, and hydrothermal circulation back to the deep ocean',
        nodes: [
          {
            id: 'mantle-upwelling',
            label: 'Mantle Upwelling (DMM)',
            description: 'Plate divergence causes passive upwelling of depleted MORB mantle (DMM). As peridotite ascends, pressure drops below the solidus — decompression melting begins at ~60–80 km depth without any temperature increase. Melt fraction reaches ~8–15% by the time it segregates from the residue.',
            color: BRAND.ruby,
          },
          {
            id: 'melt-focusing',
            label: 'Melt Segregation & Focusing',
            description: 'Partial melt segregates from the peridotite residue along grain boundaries and collects into melt-rich channels. Melt migrates upward and laterally toward the ridge axis, focused by the thermal and mechanical structure of the lithosphere. The residual harzburgite/lherzolite becomes the depleted mantle lithosphere.',
            color: BRAND.gold,
          },
          {
            id: 'axial-magma-chamber',
            label: 'Axial Magma Chamber (AMC)',
            description: 'Melt accumulates in the axial magma chamber at 1–4 km depth below the seafloor. At fast ridges, the AMC is a thin (~100 m), laterally continuous melt lens. Fractional crystallisation of olivine, plagioclase, and pyroxene occurs here, modifying melt composition toward final MORB chemistry.',
            color: BRAND.coral,
          },
          {
            id: 'seafloor-eruption',
            label: 'Seafloor Eruption',
            description: 'Magma erupts along the ridge axis through fissures and central vents, quenching instantly against 2°C seawater to form pillow basalts (low effusion) or sheet flows (high effusion). The erupted MORB builds the upper volcanic layer (Layer 2A) of oceanic crust, ~500 m thick.',
            color: BRAND.accent,
          },
          {
            id: 'hydrothermal-recharge',
            label: 'Hydrothermal Recharge',
            description: 'Cold seawater (~2°C) percolates into the fractured upper oceanic crust along normal faults and cooling cracks adjacent to the axis. Seawater descends through the permeable basaltic layer, progressively heated as it approaches the AMC heat source — the recharge limb of the hydrothermal convection cell.',
            color: BRAND.jade,
          },
          {
            id: 'black-smoker-vent',
            label: 'Black Smoker Vent',
            description: 'Seawater heated to 350–400°C and enriched in Fe, Mn, Cu, Zn, H₂S (having lost Mg and sulfate by reaction with basalt) rises buoyantly and vents at the seafloor. Metal sulfides precipitate on contact with cold seawater, forming black "smoke" and building sulfide chimneys. Chemosynthetic ecosystems colonise the vent field.',
            color: BRAND.textDim,
          },
        ],
        edges: [
          { from: 'mantle-upwelling',      to: 'melt-focusing',          label: 'Decompression melting; melt segregates from residue' },
          { from: 'melt-focusing',          to: 'axial-magma-chamber',    label: 'Focused melt migration to ridge axis' },
          { from: 'axial-magma-chamber',    to: 'seafloor-eruption',      label: 'Dike intrusion and fissure eruption' },
          { from: 'seafloor-eruption',      to: 'hydrothermal-recharge',  label: 'Cooling cracks open recharge pathways' },
          { from: 'hydrothermal-recharge',  to: 'axial-magma-chamber',    label: 'Seawater heated toward AMC (recharge limb)' },
          { from: 'axial-magma-chamber',    to: 'black-smoker-vent',      label: 'Heated, reacted fluid ascends to seafloor' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'The East Pacific Rise (EPR) spreads at ~13 cm/yr and has a narrow axial high with a seismically imaged axial magma chamber at ~1.5 km depth, while the Mid-Atlantic Ridge (MAR) spreads at ~2.5 cm/yr and has a deep, fault-bounded axial rift valley with no persistent AMC reflector. What is the primary physical reason for these morphological and magmatic differences, and why does spreading rate control them?',
          a: [
            'The EPR sits above a much hotter mantle plume than the MAR, supplying more heat and melt; the axial high reflects the elevated topography of the plume swell; the MAR\'s rift valley forms because the colder Atlantic mantle produces denser, more mafic magma that subsides rather than forming a high',
            'Spreading rate controls the thermal regime of the lithosphere at the ridge axis: at fast-spreading rates, the high magma supply rate maintains a hot, thin, weak lithosphere that behaves plastically and is built up volcanically faster than it is pulled apart, creating an axial high and sustaining a steady-state AMC; at slow-spreading rates, the low magma supply allows the lithosphere to cool, thicken, and become mechanically strong between eruptions, so tensional normal faulting dominates over volcanic construction, creating a rift valley; the episodic magma supply at slow ridges means no steady-state AMC can be maintained',
            'The difference is primarily driven by water depth: the EPR is shallower than the MAR because the Pacific Ocean is smaller and the water pressure difference reduces hydrostatic loading on the ridge; lower water pressure at the EPR allows the AMC to remain molten while the greater water pressure at the MAR causes rapid crystallisation and prevents AMC formation',
            'The MAR\'s axial rift valley forms because Atlantic oceanic crust is older and denser than Pacific oceanic crust, causing greater subsidence; old, dense crust pulls down the ridge flanks and creates the rift; the EPR\'s younger, hotter crust is buoyant and forms an axial high; the AMC difference simply reflects crustal age rather than spreading rate',
          ],
          correct: 1,
          explain: 'The mantle beneath both the EPR and MAR is broadly similar in temperature (both are passive upwelling systems without large plumes directly beneath most of their length); the primary difference is the magma supply rate, which is set by spreading rate, not by mantle plume anomalies (A conflates plume and spreading-rate effects). Water depth at mid-ocean ridges is controlled by the age and thermal state of the oceanic crust, not by ocean basin size; water pressure differences between shallow and deep ridges are geologically insignificant for AMC stability, which depends on thermal balance between magma supply and conductive cooling (C introduces a physically incorrect mechanism). Oceanic crust age differences between the EPR and MAR flanks exist, but the ridge axis itself is always young oceanic crust; subsidence due to crust density is not the mechanism driving axial valley formation, which is fundamentally a tectonic-versus-magmatic balance problem (D misidentifies the mechanism). The correct answer is B: the key insight is that ridge morphology reflects a competition between volcanic construction (which builds topography) and tectonic extension (which creates rift valleys through normal faulting). This balance is set by the ratio of magma supply to spreading rate — essentially the magmatic budget. At fast-spreading ridges, magma supply is high; the crust at the axis is kept hot and weak by frequent injection of magma into the AMC; the lithosphere is too thin and ductile to sustain large normal faults; and volcanic construction outpaces rifting, building an axial high. The AMC is detectable as a continuous bright seismic reflector because it never fully solidifies between eruptive cycles. At slow-spreading ridges, eruptions are infrequent (perhaps every 100–10,000 years at any given ridge segment); between eruptions the crust cools and thickens; the lithosphere becomes mechanically strong enough to sustain large throw normal faults that create the rift valley topography; and the AMC crystallises between eruptive pulses so no steady-state melt lens exists.',
        },
        {
          q: 'N-MORB has an ⁸⁷Sr/⁸⁶Sr ratio of ~0.7025 and εNd of ~+8 to +10, making it the most isotopically "depleted" of the common mantle reservoirs. What geological process created the depleted MORB mantle (DMM), and why do these specific isotopic values indicate ancient depletion rather than recent melt extraction?',
          a: [
            'DMM was created by the loss of continental crust material back into the mantle at subduction zones; when subducted slabs sink into the mantle, the continental crust dissolves and its incompatible elements are redistributed; the low ⁸⁷Sr/⁸⁶Sr reflects the absence of radiogenic Sr added by subducted carbonate; this process has operated since Archean time',
            'DMM was created by repeated partial melting of the upper mantle throughout Earth\'s history, each melting event extracting incompatible elements (including the parent isotopes Rb and Nd) into the melt and leaving behind a residue enriched in compatible elements; the low ⁸⁷Sr/⁸⁶Sr reflects a long-term low Rb/Sr ratio — because Rb was extracted early, little radiogenic ⁸⁷Sr (from ⁸⁷Rb decay) has accumulated over billions of years; the high εNd (+8 to +10) reflects a high ¹⁴³Nd/¹⁴⁴Nd ratio from elevated Sm/Nd in the residue (Nd was extracted more than Sm, leaving a high Sm/Nd source that produces excess ¹⁴³Nd over time)',
            'DMM has low ⁸⁷Sr/⁸⁶Sr because mantle peridotite is Sr-poor by composition, not because of ancient depletion; the εNd values simply reflect the bulk silicate Earth composition before any differentiation; the isotopic ratios in MORB tell us about present-day mantle composition rather than its history',
            'The DMM was created by the gravitational separation of the iron core from the silicate mantle during Earth\'s formation 4.5 Ga ago; the core extraction removed Rb, Th, and U preferentially into the metallic phase, leaving the residual mantle depleted in these elements; the low ⁸⁷Sr/⁸⁶Sr reflects the absence of the Rb that went into the core',
          ],
          correct: 1,
          explain: 'The creation of DMM by subducted crustal dissolution is incorrect — continental crust does not dissolve into the mantle at subduction zones; instead, subducted oceanic crust and sediments add enriched components to the mantle wedge, which is the source of arc magmas, not MORB; if subduction were responsible, DMM would be enriched rather than depleted (A inverts the actual geochemical effect). The low ⁸⁷Sr/⁸⁶Sr in MORB is not simply a reflection of low Sr abundance in peridotite — the ratio ⁸⁷Sr/⁸⁶Sr is dimensionless and independent of absolute Sr concentration; it reflects the time-integrated Rb/Sr ratio of the source; peridotite can have high Sr and still have low ⁸⁷Sr/⁸⁶Sr if it has had low Rb/Sr for a long time (C misunderstands isotope ratio systematics). Core formation does segregate siderophile elements (Fe, Ni, Co, S) but Rb, Th, U, and the rare earth elements are lithophile — they remain in the silicate mantle, not in the metallic core; Rb is not a core-forming element (D is factually incorrect about elemental partitioning during core formation). The correct answer is B: radiogenic isotope ratios in MORB are powerful tools precisely because they record the time-integrated history of parent/daughter element ratios in the mantle source, not just present-day compositions. The Rb-Sr system works as follows: ⁸⁷Rb decays to ⁸⁷Sr with a half-life of 48.8 Ga. If a mantle domain has had a low Rb/Sr ratio for billions of years (because Rb was preferentially extracted into partial melts that went to form the crust), then ⁸⁷Sr has not accumulated in that domain, producing low ⁸⁷Sr/⁸⁶Sr. In the Sm-Nd system, ¹⁴⁷Sm decays to ¹⁴³Nd (half-life 106 Ga). During partial melting, Nd is more incompatible than Sm (Nd partitions more strongly into the melt), so melt extraction leaves the residue with elevated Sm/Nd. Over billions of years, this elevated Sm/Nd produces excess ¹⁴³Nd — expressed as positive εNd. The fact that MORB has both low ⁸⁷Sr/⁸⁶Sr and high εNd is internally consistent with ancient, repeated melt extraction: both indicators point to a source that lost its incompatible elements (Rb and Nd) to partial melts long ago, and the magnitude of the deviations from bulk silicate Earth values constrains when this depletion occurred.',
        },
        {
          q: 'Ophiolite complexes such as the Samail (Semail) Ophiolite of Oman and the Troodos Ophiolite of Cyprus preserve a sequence from mantle peridotite through gabbros, sheeted dike complexes, to pillow basalts. How do ophiolites constrain our understanding of mid-ocean ridge processes, and what ambiguity exists in their interpretation as direct analogs for modern ridges?',
          a: [
            'Ophiolites are perfect analogs for mid-ocean ridges; the Samail Ophiolite records the exact same processes operating at the modern East Pacific Rise; there is no ambiguity because isotopic dating shows ophiolites formed at spreading centers identical to those of today; their geochemistry matches N-MORB exactly, confirming identical mantle sources',
            'Ophiolites preserve the only on-land cross-sections through what was once oceanic crust, confirming the layered structure predicted by seismic refraction studies of modern oceanic crust (Layer 2A pillow basalts, Layer 2B sheeted dikes, Layer 3 gabbros, Layer 4 mantle peridotite), providing field constraints on processes inferred from remote geophysical surveys; however, many well-studied ophiolites — including Samail and Troodos — have geochemical signatures (elevated Si, low Ti, subduction-like trace element patterns) suggesting they formed above subduction zones (supra-subduction zone ophiolites) rather than at open-ocean mid-ocean ridges, creating ambiguity about how directly they represent typical MORB ridge processes',
            'Ophiolites are not useful analogs for mid-ocean ridges because they have been significantly metamorphosed and tectonically disrupted during obduction; the original igneous textures and compositions are completely overprinted by regional metamorphism and deformation; geochemical data from ophiolites cannot be used to constrain mantle source compositions because all primary mineralogy has been replaced',
            'The pillow basalt layer in ophiolites was not erupted at a mid-ocean ridge but was deposited as submarine volcanic flows from nearby arc volcanoes and later incorporated into the ophiolite during accretion at a continental margin; the presence of sheeted dikes is coincidental and does not indicate a spreading center origin',
          ],
          correct: 1,
          explain: 'Ophiolites are not perfect analogs for modern mid-ocean ridges — significant ambiguity exists, as described in option B; claiming they are "perfect analogs" with N-MORB geochemistry that "exactly matches" is factually incorrect, as many ophiolites show subduction-influenced geochemistry (A overstates the case and ignores the supra-subduction zone problem). Ophiolites are partially metamorphosed during emplacement, but not completely — primary igneous textures, mineral assemblages, and geochemical signatures are often well preserved, especially in the deeper gabbroic and ultramafic sections; the statement that "all primary mineralogy has been replaced" is an extreme overstatement (C is factually incorrect). Sheeted dike complexes — 100% intrusive rocks with chilled margins on both sides of each dike — are diagnostic of a spreading center environment; they form exclusively where constant extension requires each new dike to intrude into the center of the previous one; this structure cannot form at a continental margin or arc setting, and it is definitively diagnostic of a spreading center (D is factually incorrect about the origin of sheeted dike complexes). The correct answer is B: ophiolites provide the only place on Earth where geologists can walk across what was once oceanic crust and upper mantle, observing directly the rock types, textures, and structural relationships that are otherwise only inferred from seismic refraction profiles of modern oceanic crust. The classic ophiolite sequence — mantle harzburgite → cumulate gabbros → isotropic gabbros → sheeted dike complex → pillow basalts → pelagic sediment — matches the seismically inferred layering of oceanic crust (Layers 1–4) with remarkable consistency. However, the "supra-subduction zone ophiolite" problem is significant: geochemical studies of Samail, Troodos, and many other major ophiolites show arc-like trace element signatures (elevated Th/Nb, depleted Nb and Ti relative to N-MORB, elevated SiO₂), consistent with formation in a back-arc basin or forearc setting above a young subduction zone rather than at an open-ocean mid-ocean ridge. This has led to the recognition that ophiolite emplacement may be preferentially associated with subduction initiation rather than with normal seafloor spreading, and that the most accessible on-land sections of ancient oceanic crust may not represent the most common (N-MORB-generating) type of ridge environment.',
        },
        {
          q: 'Hydrothermal black smoker vent fields at mid-ocean ridges have been proposed to account for approximately 32% of the global oceanic heat flux and deliver substantial quantities of Fe, Mn, Cu, and H₂S to the deep ocean. What are the geochemical consequences of this hydrothermal flux for seawater composition over geological timescales, and why does the hydrothermal circulation also extract certain elements from seawater?',
          a: [
            'Hydrothermal vents only add elements to seawater; the hot fluids dissolve minerals from basalt and carry them to the ocean; there is no mechanism by which seawater elements are removed by hydrothermal circulation because seawater is too dilute to react with the hot rocks',
            'Hydrothermal circulation involves a two-way chemical exchange between seawater and basalt: during the high-temperature reaction zone near the AMC, seawater loses Mg²⁺ and SO₄²⁻ (precipitated as anhydrite and incorporated into secondary minerals like chlorite and serpentine) while gaining Fe²⁺, Mn²⁺, Si, H₂S, and CO₂; over geological time this flux removes Mg from the oceans (contributing to seawater Mg/Ca evolution), delivers Fe and Mn to the deep ocean (influencing Fe-Mn nodule formation and biological productivity), and transfers reduced sulfur to the crust; black smoker fluids are therefore not just additions to seawater but represent the output of a major geochemical exchange reactor',
            'The 32% heat flux figure is for all hydrothermal activity on Earth including continental geothermal systems and volcanic arcs, not specifically for mid-ocean ridge hydrothermal vents; the MOR contribution to oceanic heat flux is less than 5%; the geochemical impact on seawater is negligible compared to river input and atmospheric exchange',
            'Hydrothermal circulation removes all metals from seawater and deposits them on the seafloor; this is why the deep ocean is depleted in Cu, Zn, and Fe compared to surface waters; the black smoker output is entirely recycled seawater metals, not material derived from basalt dissolution',
          ],
          correct: 1,
          explain: 'The claim that hydrothermal vents only add elements — with no removal from seawater — contradicts well-established seawater-basalt reaction geochemistry; Mg²⁺ removal from seawater by hydrothermal systems is one of the most robustly documented elemental fluxes in marine geochemistry, demonstrated by the complete absence of Mg in end-member black smoker fluids (A is factually incorrect). The 32% figure cited refers specifically to the heat flux through oceanic crust via hydrothermal circulation at and near mid-ocean ridges — this is well established in the literature (e.g., Elderfield & Schultz, 1996) and is not a combined continental and oceanic value; the MOR hydrothermal flux is a major component of total oceanic heat loss, not a minor contribution (C misquotes the accepted literature). While black smoker vents do deliver some metals (particularly Fe and Mn) to the deep ocean and contribute to seafloor metalliferous sediments and Fe-Mn nodules, these metals are predominantly derived from basalt dissolution rather than recycled from seawater; deep ocean waters are not depleted in Cu and Zn relative to surface waters by hydrothermal removal — rather, biological uptake and vertical cycling dominate the distribution of these micronutrients (D presents an incorrect description of deep ocean metal distributions and flux directionality). The correct answer is B: hydrothermal circulation at mid-ocean ridges functions as a geochemical exchange system where seawater is chemically transformed as it passes through hot basalt. The most quantitatively important removal from seawater is Mg²⁺: at high temperatures (>200°C), Mg is completely incorporated into secondary silicate minerals (chlorite, serpentine, talc) through reactions with olivine and pyroxene, so that end-member black smoker fluids contain essentially zero Mg. This makes hydrothermal circulation a major sink for oceanic Mg over geological time, and variations in ridge spreading rates (and thus hydrothermal flux rates) have been proposed to drive long-term secular changes in seawater Mg/Ca ratios — with consequences for which carbonate polymorph (calcite or aragonite) organisms preferentially precipitate ("calcite seas" vs. "aragonite seas" in the geological record). Simultaneously, elements that are insoluble in hot, reduced, acidic hydrothermal fluids — including Au, Cu, Zn, Fe, and Mn — are leached from basalt and delivered to the cold deep ocean.',
        },
        {
          q: 'Iceland sits directly on the Mid-Atlantic Ridge and is the only place on Earth where the MOR emerges above sea level, yet Iceland produces both N-MORB-like and E-MORB-like lavas and has anomalously thick oceanic crust (~40 km vs. the normal ~7 km). What does Iceland tell us about the interaction between mantle plumes and spreading ridges, and what geochemical and geophysical evidence distinguishes plume-influenced from normal ridge magmatism?',
          a: [
            'Iceland proves that all mid-ocean ridges are underlain by mantle plumes; the presence of a ridge at Iceland is coincidental; the thick crust and E-MORB compositions are normal for all ridges; what appears anomalous at Iceland is simply the result of Iceland being above sea level, which changes the pressure on the magma and allows more complete crystallisation',
            'Iceland represents ridge-plume interaction: the Iceland mantle plume (a relatively fixed, deep-rooted anomaly of anomalously hot mantle, ~100–200°C hotter than ambient upper mantle) supplies excess melt to the Mid-Atlantic Ridge, producing anomalously thick oceanic crust by generating higher melt fractions during decompression; the geochemical evidence for plume involvement includes E-MORB and T-MORB compositions with elevated ³He/⁴He ratios (reflecting a less degassed, deep mantle source), higher (La/Sm)N, elevated Nb and Ti, and higher ⁸⁷Sr/⁸⁶Sr than typical N-MORB; geophysically, seismic tomography images a low-velocity zone extending >400 km below Iceland, and the systematic V-shaped ridges extending from Iceland along the MAR record the southward migration of excess magmatism as the ridge spread away from the plume centre',
            'Iceland\'s anomalous crust thickness is caused by the ridge slowing its spreading rate as it passes over Iceland; the thicker crust simply reflects a longer period of magma accumulation at reduced spreading rates; there is no mantle plume and the E-MORB compositions reflect contamination of MORB by Icelandic continental basement inherited from when Iceland was part of Greenland before rifting',
            'Iceland\'s thick crust and E-MORB compositions indicate subduction of hydrated oceanic crust beneath Iceland, which releases water and lowers the mantle solidus, generating excess melt; the E-MORB signature reflects crustal contamination from the subducted slab; ³He/⁴He ratios at Iceland are lower than N-MORB because subducted oceanic crust has lost most of its primordial ³He',
          ],
          correct: 1,
          explain: 'Not all mid-ocean ridges are underlain by mantle plumes — the thermally and geochemically anomalous character of Iceland compared to most other ridge segments is precisely the evidence that it is exceptional; equating Iceland\'s character with normal ridge behaviour ignores the fundamental observational contrast between N-MORB ridges and plume-influenced ridges (A is internally contradictory and factually wrong). The spreading rate of the Mid-Atlantic Ridge near Iceland is not anomalously slow — it spreads at a similar rate to other MAR segments; thick crust at slower spreading rates would actually be the opposite of what is observed (slow ridges tend to produce thinner, more variable crust); there is no Icelandic continental basement to contaminate the magmas as Iceland is entirely built of oceanic/volcanic rocks (C is factually incorrect on multiple points). Iceland is not above a subduction zone; there is no subducting slab beneath Iceland; it is a divergent plate boundary; the ³He/⁴He ratios at Iceland are actually higher than N-MORB (R/Ra up to 37 at some Icelandic volcanic systems vs. ~8 for N-MORB), which is the opposite of what would be expected from slab contamination and is one of the strongest indicators of a deep, primordial mantle plume source (D inverts the isotopic relationship and misidentifies the tectonic setting). The correct answer is B: Iceland is the type example of ridge-plume interaction and provides multiple independent lines of evidence for a deep mantle plume: (1) Excess crustal thickness — 40 km vs. 7 km normal — requires ~5× the normal melt production rate, explicable only by elevated mantle temperature (~100–150°C excess) generating higher melt fractions during adiabatic decompression; (2) E-MORB and T-MORB compositions with elevated (La/Sm)N, (Nb/Y), and (Zr/Y) ratios indicating a less-depleted, more "enriched" mantle source than normal DMM; (3) Elevated ³He/⁴He ratios (up to 37 R/Ra) indicating contribution from a less-degassed, deep mantle reservoir that has retained primordial ³He from Earth\'s formation — the hallmark signature of deep plume material that has not circulated through the degassed upper mantle; (4) Seismic tomography showing a broad low-velocity anomaly extending to depths of 400+ km below Iceland, interpreted as hot plume material; (5) V-shaped ridges — paired topographic and geochemical anomalies extending from Iceland along the MAR in both directions — recording the history of plume-ridge interaction as the ridge migrated relative to the fixed plume over the past ~60 million years.',
        },
      ],
    },
  ],
}

export default midOceanRidgeVolcanism
