import { Flame, Globe, Layers, Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const mantlePlumesSlabs: Lesson = {
  id: 'seis-201-1-1-4',
  title: 'Mantle Plumes and Subducting Slabs in Tomographic Images',
  track: 'geo',
  trackName: 'Advanced Seismology',
  level: 'Intermediate',
  duration: '16 min',
  xpReward: 200,
  description: 'Mantle plumes and subducting slabs are the two key agents of whole-mantle heat transfer. Seismic tomography images slabs as fast (cold) curtains — some penetrating to the CMB — and plumes as slow (hot) narrow conduits that challenge the resolution limits of global models. The debate over plume depth and slab fate defines the frontier of mantle dynamics.',
  sources: [
    { org: 'Science',  title: 'Grand et al. (1997) — Global seismic tomography: a snapshot of convection in the Earth, GSA Today', url: 'https://doi.org/10.1130/1052-5173(1997)007<0004:GSTASO>2.3.CO;2' },
    { org: 'Nature',   title: 'Wolfe et al. (1997) — Seismic structure of the Iceland mantle plume, Nature',                     url: 'https://doi.org/10.1038/385245a0' },
    { org: 'GRL',      title: 'Fukao & Obayashi (2013) — Subducted slabs stagnant above, penetrating through, and trapped below the 660 km discontinuity, JGR', url: 'https://doi.org/10.1002/jgrb.50188' },
    { org: 'USGS',     title: 'USGS — Hawaiian Volcano Observatory: Mantle Plumes and Hotspots',                                 url: 'https://www.usgs.gov/observatories/hvo/science/mantle-plumes' },
    { org: 'AGU',      title: 'Anderson (2001) — Top-down tectonics?, Science',                                                  url: 'https://doi.org/10.1126/science.1065360' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The restless mantle: plumes rising, slabs sinking',
      body: `Two complementary flows drive whole-mantle heat transport: subducting slabs carry cold oceanic lithosphere down from the surface, cooling the mantle; mantle plumes carry hot material upward from the deep mantle (perhaps the core-mantle boundary) to the surface, heating the crust and producing hotspot volcanism. In the tomographic colour scheme we established in Lesson 1.1.1, these two flows appear in opposite colours — slabs as blue (fast, cold) curtains, plumes as red (slow, hot) conduits — and their presence or absence in global models has been at the centre of one of the most vigorous debates in Earth science.

The mantle plume hypothesis, proposed by W. Jason Morgan in 1971, offered an elegant explanation for the systematic age progression along oceanic hotspot tracks: if a hotspot is a fixed, deep-rooted thermal upwelling from the lower mantle, and the tectonic plate moves over it, the chain of volcanic islands produced will age systematically in the direction of plate motion. The Hawaiian-Emperor seamount chain, with volcanism that ages from 0 Ma at Kilauea to ~80 Ma at the northernmost Emperor seamounts, was the canonical example. The 43 Ma bend in the chain — the Emperor-Hawaiian knee — was interpreted as recording a change in Pacific plate motion direction ~43 Ma ago.

But plume tomography has proved far harder than slab tomography. Plume conduits in the lower mantle are expected to be ~100–200 km in diameter — near or below the resolution limit of global body-wave models. The slow velocity anomaly of a hot plume (~+100–200°C excess temperature → −0.5 to −1% dVs) is smaller than the anomaly of a cold slab (−500 to −800°C → +2 to +3% dVp). And the debate extends deeper: are plumes deep-rooted conduits from the CMB, as Morgan proposed, or are they shallow thermal instabilities originating in the upper mantle, as Don Anderson argued from the mid-1990s?`,
      keyTerms: [
        {
          term: 'Mantle plume',
          def: 'A column of anomalously hot mantle material rising from the deep mantle (possibly the core-mantle boundary or the D" layer) as a buoyant thermal upwelling. Morgan (1971) proposed plumes as the cause of hotspot volcanism. Plume heads are large (~2,000 km diameter) and produce flood basalt eruptions when they first impinge on the lithosphere; plume tails are narrow (~100–200 km) and sustain hotspot volcanism as plates move over them. Whether all or even most hotspots are caused by deep mantle plumes remains debated.',
        },
        {
          term: 'Hotspot track',
          def: 'A chain of volcanic islands or seamounts that ages systematically in one direction, produced by a tectonic plate moving over a relatively fixed mantle plume. The Hawaiian-Emperor chain is 6,000 km long and shows age progression from 0 Ma (active Kilauea) to ~80 Ma at Detroit Seamount at the northern end. The 43 Ma bend — where the chain changes direction from N-NW to W — records either a change in Pacific plate motion or a shift in the plume position.',
        },
        {
          term: 'Stagnant slab',
          def: 'A subducted oceanic slab that has flattened and spread out horizontally at or near the 660 km discontinuity rather than sinking directly into the lower mantle. Stagnant slabs are imaged as fast, horizontal anomalies in the transition zone, particularly beneath East Asia (the Pacific and Philippine Sea plates stagnating under China and Japan). Stagnation may be caused by the negative Clapeyron slope of the 660 km transition or by a viscosity increase at 660 km that deflects the slab horizontally.',
        },
        {
          term: 'Farallon slab',
          def: 'The ancient oceanic plate that subducted beneath western North America from ~170 Ma to ~30 Ma before being largely consumed at the trench. Grand (1994) imaged the remnant Farallon slab as a near-continuous fast (cold) anomaly in the lower mantle beneath eastern North America, extending from ~100 km to ~2,800 km depth — one of the most dramatic demonstrations of whole-mantle slab penetration in global tomography.',
        },
        {
          term: 'Plume debate (Morgan vs Anderson)',
          def: 'The ongoing scientific controversy over whether intraplate hotspots are caused by deep mantle plumes (Morgan 1971: fixed deep-rooted thermal upwellings from the CMB) or shallow processes (Anderson 2001: lithospheric-scale thermal and tectonic instabilities; "top-down tectonics"). The debate has been partly resolved in favour of at least some deep plumes (Iceland, Hawaii, Tristan da Cunha imaged to >400 km), but the depth of most plume roots and the fraction of hotspots attributable to deep plumes vs shallow causes remains uncertain.',
        },
        {
          term: 'Tonga trench',
          def: 'The fastest subducting slab on Earth, with convergence rates of ~24 cm/yr (absolute; ~15–17 cm/yr of actual plate convergence plus rollback). The Tonga slab is imaged as an intensely fast (blue) anomaly in tomographic models, with complex geometry including stagnation in parts of the transition zone and penetration into the lower mantle in others. The high subduction rate produces a wide swath of fast material in the upper mantle and transition zone beneath the western Pacific.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Slab tomography: penetration, stagnation, and the Farallon curtain',
      body: `**Three slab fates at 660 km.** Fukao & Obayashi (2013) reviewed decades of global P-wave tomography of western Pacific subduction zones and identified three distinct slab behaviours at the 660 km transition: (1) direct penetration into the lower mantle; (2) stagnation in the transition zone with flat-lying fast anomalies extending horizontally hundreds of kilometres from the trench; (3) accumulation near 660 km followed by avalanche-like penetration into the lower mantle. These different outcomes reflect the competition between the negative buoyancy of the cold slab (driving it down), the resistance of the 660 km phase transition (negative Clapeyron slope), and the viscosity increase at 660 km (which slows lower-mantle sinking rates).

**The Farallon slab — a ghost in the lower mantle.** The most famous example of slab penetration in global tomography is the Farallon slab, imaged by Grand (1994) and Grand et al. (1997) as a near-continuous fast P-wave and S-wave anomaly beneath North America. The Farallon plate was a major oceanic plate that occupied most of the eastern Pacific; it began subducting beneath western North America in the Jurassic (~170 Ma) and was largely consumed at the trench by the Oligocene (~30 Ma) when the East Pacific Rise was overridden. The remnant slab sank through the mantle and now lies as a cold curtain from ~100 km depth under the eastern US to ~2,800 km at the CMB beneath the Atlantic — a geological memory of 170 million years of subduction, visible as a blue anomaly of +0.5 to +1% in dVs models. This single image, spanning 2,700 km of mantle depth, is among the most powerful arguments for whole-mantle convection.

**East Asian stagnant slabs.** In contrast, beneath eastern China, the Pacific plate appears to stagnate at the 660 km boundary rather than penetrating directly into the lower mantle. Tomographic images (Fukao et al. 2001; Fukao & Obayashi 2013) show a broad, flat fast anomaly extending horizontally 1,000–2,000 km from the Japan-Kuril-Mariana trenches into the transition zone, with relatively little fast material immediately below 660 km in the lower mantle. This stagnation is attributed to the deflecting effect of the negative Clapeyron slope and viscosity increase, with the flat slab possibly accumulating in the transition zone before eventually avalanching into the lower mantle as episodic pulses. The stagnant slab geometry may also be stabilised by dehydration and compositional changes as the slab absorbs transition zone minerals.

**The Tonga slab.** The Tonga-Kermadec subduction system has the fastest convergence rate on Earth (~24 cm/yr at the northern Tonga trench) and produces one of the most intensely imaged slab anomalies in global tomography. The Tonga slab appears in multiple models as a sharp, coherent fast anomaly descending steeply into the mantle, with evidence of both stagnation and penetration at 660 km depending on the specific location along the arc. The rapid subduction rate means large volumes of cold material enter the mantle quickly, producing anomalies detectable to great depths even in global-resolution models.`,
      cards: [
        {
          name: 'Farallon Slab: Evidence for Whole-Mantle Penetration',
          icon: Layers,
          color: BRAND.coral,
          desc: 'Grand (1994) S-wave model: Farallon slab imaged as fast anomaly from ~100 km to ~2,800 km under North America. Grand et al. (1997) P-wave model: same feature confirmed. Slab temperature ~300–500 K below ambient mantle → dVs ~ +0.5 to +1%. The slab is ~100–300 km wide and roughly corresponds to the expected volume of subducted Farallon lithosphere (170 Ma × 6–8 cm/yr convergence). This is the strongest tomographic evidence that (at least some) subducted material passes through the 660 km barrier and descends to the CMB on geological timescales (~50–100 Ma to sink from 660 km to CMB at lower mantle sinking rates).',
          examples: 'Grand (1994) JGR: S-wave model showing Farallon to 2,800 km · van der Hilst et al. (1997) Nature: P-wave confirmation of lower-mantle slab · Estimated slab sinking rate in lower mantle: ~1–2 cm/yr → 170 Ma to sink 2,700 km',
        },
        {
          name: 'Stagnant Slabs and Slab Avalanches (East Asia)',
          icon: Globe,
          color: BRAND.accent,
          desc: 'Pacific plate subducting at Japan-Kuril-Mariana trenches produces stagnant slab anomaly in transition zone under eastern China: fast horizontal anomaly extending 1,000–2,000 km westward at 400–700 km depth. Interpretation: slab flattens at 660 km due to negative Clapeyron slope resistance + viscosity increase. Episodic avalanche model (Tackley et al. 1993): slabs accumulate above 660 then periodically break through as a thermal-compositional avalanche into the lower mantle, temporarily increasing lower-mantle heating. Evidence: some lower-mantle fast anomalies beneath East Asia may represent previous avalanche events.',
          examples: 'Fukao & Obayashi (2013) JGR: survey of Pacific slab tomography — identifies stagnant, penetrating, and mixed types · Mariana: slab penetrates 660 km · Japan: slab stagnates above 660 km → Chinese platform · Fast lower-mantle anomaly (1,000–2,000 km, 800–1,500 km depth) possibly avalanche',
        },
        {
          name: 'Tonga: Fastest Slab, Complex Geometry',
          icon: Activity,
          color: BRAND.jade,
          desc: 'Tonga-Kermadec: ~24 cm/yr convergence at northern Tonga — fastest subduction on Earth. Imaged as intense fast anomaly (dVp > 2%) from ~50 km to >800 km depth. Highly arcuate geometry with back-arc extension (Lau Basin) and slab rollback. Tomographic complexity: slab appears to stagnate in the transition zone in some sections (northern Tonga) while penetrating in others. Large volume of subducted material inferred from fast anomaly size. Tonga slab provides stringent test for global tomographic resolution: at ~24 cm/yr, slab is refreshed every few Ma, maintaining intense thermal anomaly.',
          examples: 'van der Hilst (1995): Tonga slab imaged to >600 km; shows stagnation in parts · Schellart et al. (2006): Tonga rollback rate ~16 cm/yr, slab width decreasing · dVp of Tonga slab at 200 km: ~ +2 to +3%, among the strongest anomalies in global models',
        },
        {
          name: 'Three Fates of Subducting Slabs',
          icon: Layers,
          color: BRAND.gold,
          desc: 'Classification (Fukao & Obayashi 2013): (1) Penetrating: slab descends through 660 km into lower mantle as a coherent fast anomaly — Farallon, Cocos, Mariana. (2) Stagnating: slab flattens at or above 660 km, extending horizontally for hundreds to thousands of km — Pacific under East Asia, Cascadia remnant. (3) Mixed: slab partially penetrates, partially stagnates depending on along-strike position — Tonga, Izu-Bonin. Controls: subduction rate (fast = more likely to penetrate), slab age and thickness (old thick slab more negative buoyancy), trench geometry, time of subduction initiation.',
          examples: 'Penetrating: Farallon (North America), Cocos (Mexico-Central America), Marianas · Stagnating: Pacific (East Asia), possible Cascadia · Mixed: Tonga, Izu-Bonin · Statistical survey: ~50% of western Pacific slabs show stagnation at 660 (Fukao & Obayashi 2013)',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Plume tomography: Iceland, Yellowstone, and the depth question',
      body: `**The resolution challenge.** Global body-wave tomography models have typical horizontal resolution of 300–500 km in well-sampled regions. The expected diameter of a mantle plume tail is ~100–200 km — at or below this resolution. This means that plume conduits, if they exist as narrow features, will appear broadened and weakened in global models (the smoothing of the inversion spreads a narrow anomaly over a larger area while reducing its amplitude). This is why the absence of a clear plume conduit in a global model does not prove the plume doesn't exist.

**Iceland plume.** Iceland is the most robustly tomographically imaged hotspot. Wolfe et al. (1997) deployed a temporary broadband seismograph array across Iceland and performed regional P and S wave tomography with much higher resolution than global models can achieve. They imaged a slow Vp/Vs anomaly extending at least 400 km below Iceland, consistent with a thermal plume with ~100–150 K excess temperature. The Iceland anomaly also appears in global S-wave models as a slow feature extending from the surface to at least 400 km depth and possibly connecting to the base of the transition zone. Iceland's anomalously thick oceanic crust (~30 km vs ~7 km for normal ocean crust) and high magma production rate support the plume interpretation.

**Yellowstone.** The Yellowstone hotspot in the western United States has been imaged by multiple studies using USArray data. Body-wave tomography (Smith et al. 2009; Schmandt & Humphreys 2010) shows a slow P and S wave anomaly tilted to the NW beneath Yellowstone, interpreted as a plume conduit deflected by the southwestward motion of the North American plate. The slow anomaly extends to ~200 km depth in P-wave models and to ~500–600 km in some S-wave models. The tilted geometry is consistent with plate motion dragging the upwelling conduit: if the mantle source is fixed and the plate moves at ~2.5 cm/yr to the SW, the conduit would be tilted that direction. The Yellowstone hotspot track — a chain of calderas aging NE from Yellowstone — confirms plate motion over a relatively fixed source.

**The Morgan vs Anderson debate.** W. Jason Morgan (1971) proposed that 20–40 mantle plumes originating at the CMB are fixed relative to each other and to the lower mantle, and that hotspot tracks record absolute plate motion over these fixed sources. Don Anderson (2001, 2005) challenged this vigorously: he argued that (1) the "fixity" of hotspots is not well supported — hotspots do move relative to each other; (2) tomographic evidence for deep plume conduits is weak; (3) the geochemical anomalies of hotspot lavas can be explained by shallow lithospheric sources; (4) "top-down tectonics" driven by plate motions and lithospheric heterogeneity can explain most volcanism without deep plumes. The scientific community has partially converged: deep plumes probably do exist for Iceland, Hawaii, and Tristan da Cunha based on convergent geochemical and tomographic evidence, but the majority of the ~50 catalogued hotspots may not require deep-rooted plumes.`,
      cards: [
        {
          name: 'Iceland Plume: Best-Constrained Hotspot',
          icon: Flame,
          color: BRAND.coral,
          desc: 'Iceland sits astride the Mid-Atlantic Ridge, producing anomalously thick crust (~30 km) and copious basaltic volcanism — evidence for strong, persistent heat source. Wolfe et al. (1997) ICEMELT array: slow Vp/Vs anomaly to ≥400 km depth, 100–150 K excess temperature. Global models (e.g., Montelli et al. 2004 finite-frequency tomography) show slow anomaly extending to at least 660 km. Geochemical anomalies (elevated ³He/⁴He — "primitive" mantle signature — in Iceland basalts) suggest source deep enough to be undegassed, consistent with origin near CMB. The combination of seismological, geochemical, and topographic evidence makes Iceland the strongest case for a deep mantle plume.',
          examples: 'Iceland crustal thickness: 30 km (vs 7 km normal ocean) → anomalous magma flux · Wolfe et al. (1997) Nature: regional array reveals plume to ≥400 km · ³He/⁴He in Iceland: 35 Ra (vs 8 Ra MORB) — argues for undegassed deep reservoir · Montelli et al. (2004): finite-frequency model images Iceland to 660+ km',
        },
        {
          name: 'Yellowstone: Tilted Plume Under North America',
          icon: Flame,
          color: BRAND.amethyst,
          desc: 'Yellowstone supervolcano sits above a slow P/S wave anomaly tilted NW at depth — the upper part of the anomaly is directly below Yellowstone caldera (44.5°N, 110.9°W), but at 200–500 km depth the slow region is displaced NW, consistent with the North American plate moving SW at ~2.5 cm/yr over a stationary deep source. The Yellowstone hotspot track: Snake River Plain volcanic field (15 Ma at Nevada-Oregon border) → Bruneau-Jarbidge (10 Ma, NW Idaho) → Twin Falls (8 Ma) → Yellowstone (2 Ma–present). Track spacing (~5 cm/yr average) consistent with North American plate velocity. USArray enabled 100 km resolution: Schmandt & Humphreys (2010) resolve the plume conduit to ~500 km depth.',
          examples: 'Snake River Plain: 700 km chain of calderas from 15 Ma to present, ageing NE to SW · Smith et al. (2009) JGR: Yellowstone plume to 250+ km in P-wave, 500+ km in S-wave · Heat flow at Yellowstone: up to 2,000 mW/m² (100× average continental) · Yellowstone caldera: 3 supereruptions at 2.1, 1.3, 0.64 Ma',
        },
        {
          name: 'The Plume Debate: Morgan vs Anderson',
          icon: Globe,
          color: BRAND.gold,
          desc: 'Morgan (1971) Science: 20 deep mantle plumes, fixed in the lower mantle, produce hotspot tracks as plates move over them. Plumes originate at CMB or D" layer. Predictions: hotspot fixity, plume conduits visible in tomography, primitive geochemical signatures. Anderson (2001) Science: "top-down tectonics" — plate tectonics and lithospheric heterogeneity drive volcanism; many "hotspots" are simply areas of thin/extensional lithosphere over fertile mantle; no deep plumes needed. Scientific consensus (2020s): Iceland, Hawaii, Tristan da Cunha probably deep-plume sourced; ~20–30 of the ~50 catalogued hotspots may have deep origins; the rest may be shallow. Plume conduits are resolved to 200–600 km in best regional studies; CMB origin remains unconfirmed tomographically.',
          examples: 'Morgan (1971): original 20 hotspot plumes; now catalogue includes 50+ · Anderson (2001) Science: \'Some hotspots are real, some are real estate\' · Courtillot et al. (2003) review: criteria for identifying primary (CMB-rooted) plumes; only 7–9 meet all criteria · Burke & Torsvik (2004): hotspot tracks project to LLSVP margins at CMB — argues for plume origin at LLSVP edges',
        },
        {
          name: 'Hawaiian-Emperor Chain and the 43 Ma Bend',
          icon: Activity,
          color: BRAND.jade,
          desc: 'The Hawaiian-Emperor chain is the canonical hotspot track: 6,000 km of seamounts aging from 0 Ma (Kilauea) to ~82 Ma (Detroit Seamount) — average plate motion of ~7 cm/yr relative to the hotspot. The 43 Ma bend (where the chain turns from NNW-trending Emperor chain to WNW-trending Hawaiian chain) was originally interpreted as recording a change in Pacific plate motion direction at 43 Ma. Revised interpretation: paleomagnetic data show the Hawaiian plume itself moved southward during the Cretaceous and early Paleogene before becoming fixed; the bend reflects both plume motion and plate motion change. Body-wave tomography images a slow anomaly beneath Hawaii extending to at least 400 km (Wolfe et al. 2009), with some models suggesting connection to a deeper source.',
          examples: 'Kilauea: currently active · Oahu (Honolulu): 3.7 Ma · Midway: 27.7 Ma · Detroit Seamount: 76–82 Ma · Emperor-Hawaiian bend: 43 Ma at 30.5°N, 172.5°E · Torsvik et al. (2017): Hawaiian plume fixed since ~48 Ma; earlier southward motion explains Emperor trend',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Mantle convection: plumes, slabs, and the whole-mantle system',
      body: 'Trace the interconnected flow of material through the whole mantle — from subducting slabs sinking through the transition zone to rising plumes bringing heat from the CMB to the surface. Each node is a key component of the mantle convection system as imaged by seismic tomography.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Whole-mantle convection: slab subduction, transition zone dynamics, and plume upwelling as revealed by seismic tomography',
        nodes: [
          {
            id: 'oceanic-lithosphere',
            label: 'Oceanic Lithosphere (Cold, Dense, Fast)',
            description: 'Old oceanic lithosphere is ~7–10 km of basaltic crust plus ~80–100 km of cold, depleted peridotite. As it ages, it cools and densifies — by ~80–100 Ma it is denser than the underlying asthenosphere and will subduct wherever plate convergence forces it down. In tomographic images, the cold lithosphere appears as fast (blue) material in the shallow mantle. At a subduction zone, this cold material begins sinking; its thermal anomaly (−300 to −800°C relative to ambient mantle) persists for tens of millions of years as it sinks through the mantle.',
            color: BRAND.accent,
          },
          {
            id: 'subduction-zone',
            label: 'Subduction Zone: Slab Entry into Mantle',
            description: 'At a convergent margin, the dense oceanic plate bends and sinks into the mantle. Seismicity defines the slab geometry: the Wadati-Benioff zone of intermediate and deep focus earthquakes (to ~700 km) marks the slab interior. In P-wave tomography, the slab appears as a sharp fast anomaly — dVp of +1 to +3% — beginning at the trench and extending steeply into the mantle. The slab carries water in hydrous minerals; dehydration at 50–150 km depth fluxes the mantle wedge above, lowering its solidus and causing arc volcanism at the surface.',
            color: BRAND.coral,
          },
          {
            id: 'transition-zone-660',
            label: '660-km Transition Zone Boundary: Penetrate or Stagnate?',
            description: 'The 660 km discontinuity — where ringwoodite breaks down to bridgmanite + ferropericlase — is the key dynamic filter for slab penetration into the lower mantle. The negative Clapeyron slope creates upward buoyancy in cold slabs at this boundary; combined with the factor 10–30 viscosity increase across 660 km, some slabs flatten and spread horizontally (stagnant slabs: Pacific under East Asia). Others overcome the resistance and penetrate into the lower mantle (Farallon, Cocos, Mariana). The 660 km boundary is the most important dynamic interface in the mantle for controlling whole-mantle vs layered convection.',
            color: BRAND.amethyst,
          },
          {
            id: 'lower-mantle-slab',
            label: 'Lower Mantle Slab: Cold Curtain to the CMB',
            description: 'Slabs that penetrate 660 km sink slowly through the lower mantle at ~1–2 cm/yr (limited by high viscosity). They remain coherent, cold anomalies for tens of millions of years before thermally equilibrating with the surrounding mantle. The Farallon slab, subducted from ~170 to ~30 Ma and now resting at ~2,800 km depth under eastern North America, is the most dramatic example. In global P-wave tomography, it appears as a blue curtain extending the full depth of the mantle — a geological snapshot of 170 Ma of subduction history preserved in the cold interior of the lower mantle.',
            color: BRAND.jade,
          },
          {
            id: 'cmb-plume-origin',
            label: 'Core-Mantle Boundary: Plume Generation',
            description: 'The CMB is the hottest interface in the solid Earth (~4,000 K at the base of the mantle, ~5,000 K in the outer core). Heat flowing from the iron outer core heats the lowermost mantle, generating thermal instabilities that rise as plumes. The D" layer and LLSVPs are concentrated at the CMB; the edges of LLSVPs are proposed as preferred plume generation sites — where hot material at the boundary between the LLSVP and colder surrounding mantle becomes buoyant. ULVZs (partially molten patches) at the CMB may be plume incubation zones.',
            color: BRAND.accentHot,
          },
          {
            id: 'plume-conduit',
            label: 'Plume Conduit: Slow, Hot Upwelling in the Mantle',
            description: 'A plume conduit is a narrow (~100–200 km diameter) column of anomalously hot mantle rising buoyantly from the deep mantle. Its Vs anomaly is −0.5 to −2% relative to ambient mantle — smaller than slab anomalies, making detection harder. In global tomography, plume conduits appear as diffuse slow (red) anomalies or may be missed entirely due to resolution limits. Regional high-density arrays (e.g. ICEMELT in Iceland, USArray for Yellowstone) can resolve them to 200–600 km depth. Plumes rise at ~1–10 cm/yr, roughly balancing the sinking of subducted slabs in the mantle heat engine.',
            color: BRAND.gold,
          },
          {
            id: 'hotspot-surface',
            label: 'Hotspot: Surface Expression of Plume',
            description: 'When a plume head impinges on the base of the lithosphere, it melts extensively: the first arrival of a new plume produces a Large Igneous Province (LIP) — flood basalts erupting millions of km³ of lava in <1 Ma. The Deccan Traps (66 Ma, India) and Siberian Traps (252 Ma, Russia) are examples. The subsequent plume tail produces a hotspot: sustained intraplate volcanism (Hawaii, Yellowstone, Iceland) that creates a hotspot track as the plate moves. Hotspot lavas often have primitive geochemical signatures (high ³He/⁴He) suggesting a source undegassed since Earth\'s formation.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'oceanic-lithosphere',  to: 'subduction-zone',    label: 'dense old lithosphere bends and subducts at convergent margin; slab geometry defined by Wadati-Benioff seismicity and tomographic fast anomaly' },
          { from: 'subduction-zone',      to: 'transition-zone-660', label: 'slab sinks through upper mantle (fast anomaly +1 to +3% dVp), encounters 660 km barrier: negative Clapeyron slope + viscosity jump' },
          { from: 'transition-zone-660',  to: 'lower-mantle-slab',  label: 'penetrating slabs overcome buoyancy resistance and enter lower mantle; stagnating slabs spread horizontally at transition zone' },
          { from: 'lower-mantle-slab',    to: 'cmb-plume-origin',   label: 'cold slab material eventually accumulates at CMB (e.g. Farallon), cooling the CMB locally and modulating heat flux from outer core' },
          { from: 'cmb-plume-origin',     to: 'plume-conduit',      label: 'excess heat at CMB (from outer core + compositional convection) generates thermal instabilities that rise as narrow plume conduits' },
          { from: 'plume-conduit',        to: 'hotspot-surface',    label: 'plume head spreads beneath lithosphere, producing LIP flood basalt or sustained hotspot volcanism; hotspot track records plate motion history' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Morgan\'s original (1971) mantle plume hypothesis predicted that hotspot tracks record absolute plate motion over fixed deep-mantle plumes. What is the evidence from the Hawaiian-Emperor chain that both supports and complicates this hypothesis?',
          a: [
            'The Hawaiian chain supports Morgan exactly: the chain shows a perfectly linear age progression from 0 Ma to 80 Ma at constant rate; no bend exists in the chain; the plume has been fixed throughout and records Pacific plate motion without any complications',
            'The chain supports the general idea: age progression from 0 Ma (Kilauea) to ~82 Ma (Detroit Seamount) is systematic, requiring a long-lived relatively fixed heat source — a plate-tectonic mechanism (ridge volcanism, transform faulting) would not produce this 6,000 km chain; but the 43 Ma bend — the change from the NNW-trending Emperor chain to the WNW-trending Hawaiian chain — complicates the fixed-plume model, as paleomagnetic data now show the Hawaiian plume itself moved southward during the Cretaceous before stabilising, so both the plume and the plate changed motions near 43 Ma',
            'The Hawaiian chain disproves Morgan\'s hypothesis entirely: radiometric dating of the chain shows no systematic age progression; all seamounts from Midway to Kilauea have similar ages (~3 Ma), indicating the chain was formed by a different process than hotspot volcanism',
            'The chain supports Morgan but only in the Pacific; in other ocean basins (Atlantic, Indian), hotspot tracks show no age progression and plume fixity is not observed, demonstrating that the Hawaiian case is an anomaly rather than evidence for a global plume system',
          ],
          correct: 1,
          explain: 'The Hawaiian-Emperor chain provides the most compelling evidence for long-lived intraplate hotspot volcanism driven by a relatively fixed deep mantle source. The systematic age progression — 0 Ma at Kilauea to ~82 Ma at Detroit Seamount — over 6,000 km of chain cannot be explained by ridge-related processes or transform faulting; it requires a heat source that has been active continuously for ~80 Ma as the Pacific plate moved over it. The average plate velocity implied (~7 cm/yr) is consistent with other independent estimates of Pacific plate motion. However, the 43 Ma Emperor-Hawaiian bend complicates a simple fixed-plume model. Paleomagnetic studies (Tarduno et al. 2003) of Emperor seamounts show they formed at latitudes progressively farther north than their current positions, consistent with the Hawaiian plume having been at ~30°N latitude during the Cretaceous and moving southward to its current position (~19°N) by ~43 Ma. This means both the plate and the plume changed configuration near 43 Ma, making the bend a composite record of plume motion (before 43 Ma) and plate motion change (contributing to the bend geometry). The chain therefore supports deep-plume volcanism but demonstrates that "fixed hotspot" is an approximation — hotspots do move, though slowly relative to plate speeds. Option A is incorrect — the 43 Ma bend is one of the most precisely documented features of the chain. Option C contradicts the well-established radiometric dating of the chain. Option D is an overgeneralisation — the Atlantic and Indian oceans also contain hotspot tracks with age progressions (Tristan da Cunha, Réunion).',
        },
        {
          q: 'Grand et al. (1997) described the Farallon slab in global tomography as "a snapshot of convection in the Earth." Why is this image scientifically significant for the debate between layered-mantle convection and whole-mantle convection?',
          a: [
            'The Farallon slab is significant because it is the only slab that penetrates through 660 km; all other subducted slabs stagnate at the transition zone, providing strong evidence for layered convection that is occasionally punctuated by slab avalanches',
            'The Farallon slab image is significant because it shows subducted oceanic material as a coherent fast anomaly from ~100 km depth to ~2,800 km (the CMB) beneath North America — spanning the entire mantle depth — demonstrating that mass exchange between the upper and lower mantle does occur, and that at least this slab has undergone whole-mantle convection; this is direct evidence against a rigid chemical boundary at 660 km and supports models in which mantle convection is at least partly whole-mantle in character',
            'The Farallon slab image is significant because it shows that P-wave tomography cannot distinguish temperature from compositional effects; the fast anomaly could equally be explained by a chemically distinct (dense) reservoir in the lower mantle unrelated to subduction, demonstrating the limitation of tomography for inferring dynamics',
            'The Farallon image is scientifically significant because it proves that the Farallon plate was subducted in the last 5 Ma and is still in the upper mantle — the image shows material that has not yet sunk below 660 km, meaning the 660 is an absolute barrier and subducted material cannot penetrate it',
          ],
          correct: 1,
          explain: 'The layered-mantle convection model, which was influential through the 1980s, proposed that the 660 km discontinuity acts as a near-impermeable boundary between two separately convecting shells: the upper mantle (above 660 km) and the lower mantle (below 660 km). This model was supported by geochemical arguments (distinct noble gas and isotope signatures in MORB vs ocean island basalts, suggesting separate reservoirs) and by the impeding effect of the negative Clapeyron slope at 660 km. The Farallon slab image is a decisive argument against a rigid layered-mantle model: the fast anomaly spans from the shallow upper mantle all the way to the CMB as a single coherent feature. The Farallon plate subducted primarily from ~170 to ~30 Ma; if the 660 were impermeable, the slab material would have had to pile up at 660 km for 140 Ma — but no such enormous accumulation is seen at 660 km beneath North America. Instead, the coherent slab has sunk through 660 km and reached the CMB, demonstrating that mass transfer across 660 km does occur. Modern consensus acknowledges that some slabs stagnate at 660 km while others penetrate, but the Farallon image is the strongest single piece of evidence for at least partial whole-mantle convection. Option A is incorrect — many slabs penetrate 660 km (Farallon, Cocos, Mariana, ancient Tethyan slabs), and stagnation is the exception rather than the rule for the whole-mantle debate. Option C is possible in principle but is not the scientific interpretation — the geometry, continuity, and scale of the anomaly match predictions for subducted Farallon lithosphere far better than any alternative. Option D contradicts the observation — the Farallon plate was subducted from 170 to 30 Ma; material subducted 30 Ma ago has had time to sink thousands of kilometres.',
        },
        {
          q: 'Don Anderson (2001) proposed "top-down tectonics" as an alternative to the mantle plume hypothesis. What is the core of his argument, and what observational evidence most challenges it?',
          a: [
            'Anderson argues that all volcanism on Earth is driven by the same mechanism — plate boundary processes — and that there are no intraplate volcanoes at all; the challenge is the existence of Hawaii, which is indisputably located in the middle of the Pacific plate far from any plate boundary',
            'Anderson argues that hotspot volcanism is caused by shallow lithospheric processes (thin spots, extensional tectonics, lithospheric-scale thermal anomalies) rather than deep mantle plumes; plates generate their own volcanism through plate motion and lithospheric heterogeneity without requiring deep hot upwellings; the most challenging observational evidence is the systematic age progression along hotspot tracks (implying a long-lived, sub-plate heat source), primitive geochemical signatures in hotspot lavas (high ³He/⁴He indicating an undegassed deep reservoir), and seismic tomographic images of slow velocity anomalies extending to hundreds of kilometres depth beneath some hotspots (Iceland, Hawaii, Yellowstone)',
            'Anderson argues that the mantle is entirely molten below 660 km and that "plumes" are simply vertical conduits through this magma ocean that passively feed surface volcanism; he is challenged by PREM, which shows that shear waves do propagate through the lower mantle (proving it is solid) and that Vs increases steadily with depth',
            'Anderson argues that plate tectonics does not exist and that continental drift is an illusion created by systematic errors in GPS measurements; the challenge to this is the directly measured plate velocities by satellite geodesy',
          ],
          correct: 1,
          explain: 'Anderson\'s "top-down tectonics" hypothesis is a substantive scientific critique, not a fringe argument. Its core is that the thermal and chemical anomalies of hotspot lavas can be explained without invoking narrow, deep-rooted plumes from the CMB. Anderson argued: (1) the upper mantle and lithosphere are compositionally heterogeneous ("enriched blobs" from ancient subduction and delamination), so hotspot geochemistry does not require a deep undegassed reservoir; (2) plate stress states and lithospheric thickness control where magma is generated — thin or extending lithosphere allows existing melt to erupt without a deep heat source; (3) "hotspot fixity" is not well demonstrated — hotspots move relative to each other; (4) narrow plume conduits visible in tomography can be explained by lithospheric small-scale convection. The strongest challenges to this view are: (a) Systematic age progressions over 6,000+ km (Hawaii) require a sub-lithospheric, long-lived heat source; extensional tectonics and thin spots do not predict a directed age progression. (b) High ³He/⁴He ratios in Iceland, Hawaii, and Samoa basalts (up to 50 Ra vs 8 Ra for MORB) require a mantle source that has been isolated from volcanic degassing for billions of years — inconsistent with recycled oceanic crust (which is well-degassed) and pointing toward a deep, primitive reservoir. (c) Regional tomographic studies of Iceland (Wolfe et al. 1997), Hawaii (Wolfe et al. 2009), and Yellowstone (Schmandt & Humphreys 2010) image slow velocity anomalies to 200–600 km depth — below the lithosphere and asthenosphere, into the transition zone. Anderson\'s model predicts shallow (< 100 km) anomalies, not deep ones. Option A misrepresents Anderson — he accepts that Hawaii exists as intraplate volcanism; he disputes the deep-plume mechanism, not the observation. Option C and D are not Anderson\'s arguments.',
        },
        {
          q: 'Tomographic images show some slabs stagnating horizontally in the transition zone (e.g. Pacific under East Asia) while others penetrate directly into the lower mantle (e.g. Farallon). What physical factors determine which fate a given slab experiences?',
          a: [
            'Slab fate is determined entirely by the age and thickness of the subducting plate: slabs older than 80 Ma always penetrate, younger slabs always stagnate; there is a sharp threshold based on slab negative buoyancy',
            'The key factors are the competition between the slab\'s negative buoyancy (driving penetration) and the resistance at 660 km from the negative Clapeyron slope (which creates anomalous positive buoyancy in the cold slab material at that depth) and the mantle viscosity increase (which dramatically slows sinking into the lower mantle); slabs with faster subduction rates, older and denser ages, and steeper dip angles are more likely to penetrate, while slower, younger, or flat-lying slabs are more susceptible to stagnation; trench retreat (rollback) also promotes horizontal slab flattening',
            'Slab penetration is controlled by the subduction zone\'s distance from the nearest LLSVP: slabs subducting above an LLSVP always stagnate because the hot LLSVP provides upward buoyancy, while slabs far from LLSVPs always penetrate because there is no counteracting heat source',
            'All slabs stagnate at 660 km in the present-day mantle; what appears as lower-mantle slab penetration in tomographic images (e.g. Farallon) is actually a smearing artefact of inversion regularisation, which spreads upper-mantle fast anomalies downward; the true lower mantle is essentially uniform',
          ],
          correct: 1,
          explain: 'Slab dynamics at 660 km depth involves several competing forces. Driving force for penetration: the negative buoyancy of cold, dense slab material relative to ambient mantle (ΔT × α × ρ × g, where α is thermal expansivity). Resistive forces: (1) the negative Clapeyron slope of the ringwoodite→bridgmanite transition at 660 km creates anomalous positive buoyancy in the cold slab (which is still in ringwoodite phase while ambient mantle is in bridgmanite, making the slab less dense than surrounding lower mantle); (2) the viscosity of the lower mantle is ~30–100× higher than the upper mantle, which dramatically increases the viscous resistance to slab sinking; (3) if the slab is dipping shallowly or trench rollback is occurring, the lateral component of motion increases and can cause the slab to "pile up" horizontally rather than penetrating. Factors favoring penetration: high convergence rate (more kinetic energy, less time for thermal equilibration at 660 km), old dense slab (more negative buoyancy), steep dip angle, rapid subduction history. Factors favoring stagnation: young slab (less negative buoyancy), trench rollback (slab is moving backward while subducting, flattening it), slow convergence rate, high lower-mantle viscosity. Statistical surveys show ~50% of western Pacific slabs show evidence of stagnation, with considerable along-strike variability even for a single slab. Option A is incorrect — there is no sharp age threshold; both old and young slabs can penetrate or stagnate depending on other factors. Option C is incorrect — LLSVP locations do not directly control which slabs stagnate, and the Farallon slab penetrated in a region without overlying LLSVP material. Option D contradicts the independent evidence from multiple tomographic groups using different datasets and methods, all of which image lower-mantle fast anomalies beneath North America.',
        },
        {
          q: 'Wolfe et al. (2009) used a temporary broadband seismograph array deployed on ocean-bottom seismometers around the Hawaiian Islands to image the mantle beneath Hawaii. Why is such a regional high-density array necessary to image a plume conduit that global tomographic models largely miss?',
          a: [
            'Ocean-bottom seismometers are necessary because the Hawaiian plume is entirely in the oceanic mantle and terrestrial seismometers cannot record waves from beneath the ocean; global models miss Hawaii because they only use land-based stations and the Hawaiian signal is therefore absent from the dataset',
            'A regional high-density array provides much higher spatial resolution than global tomography: the plume conduit diameter (~100–200 km) is at or below the ~300–500 km horizontal resolution of global models; a regional array with ~50–100 km station spacing can resolve features of that scale; additionally, ocean-bottom seismometers sample the mantle directly beneath Hawaii from all azimuths, providing dense ray coverage of the specific mantle volume of interest; global models, with sparse stations in the central Pacific, have poor resolution there and smear or miss the narrow plume conduit',
            'A regional array is necessary because the Hawaiian plume emits seismic energy in a different frequency band than tectonic earthquakes; ocean-bottom seismometers detect 0.001 Hz "plume tremor" that is invisible to standard broadband seismometers at global distances; without this special frequency band, the plume is seismically invisible',
            'Ocean-bottom seismometers are necessary to detect the core-mantle boundary reflections (ScS and PcP phases) that are the only seismic phases sensitive to plume structure below 200 km; surface-based seismometers cannot record these deep-sampling phases because they arrive at angles too steep for surface stations to detect',
          ],
          correct: 1,
          explain: 'This question highlights the resolution limitation that is central to plume tomography. Global body-wave tomography models have horizontal resolution of ~300–500 km in well-sampled continental regions and ~500–1,000 km in oceanic regions where station coverage is sparse. A plume conduit in the lower mantle is expected to be ~100–200 km in diameter based on fluid dynamics calculations. Even in the best-sampled continental regions, global models would see a 150 km diameter plume conduit as a broadened, amplitude-reduced anomaly; in the poorly covered central Pacific beneath Hawaii, it might be entirely missed. A regional ocean-bottom seismometer (OBS) array deployed around Hawaii addresses both problems. First, station spacing of 50–150 km provides the geometric aperture to resolve features at the 100 km scale. Second, the OBS stations are positioned directly above and beside the plume volume, providing dense ray coverage from many azimuthal directions — the critical ingredient for tomographic resolution. Third, by analysing waveforms from many teleseismic earthquakes using all available ray paths through the local volume, the inversion has far more constraints per unit volume than global models. Wolfe et al. (2009) used this approach to image a slow anomaly beneath Hawaii extending to at least 1,500 km depth — the deepest imaging of the Hawaiian plume and a significant contribution to the plume existence debate. Option A is incorrect — while ocean coverage does limit global models, terrestrial stations worldwide do record seismic waves that sample beneath Hawaii; the issue is resolution, not absence of data. Option C describes a non-existent "plume tremor" — no such special low-frequency signal unique to plumes is known. Option D incorrectly states that surface seismometers cannot record core-interacting phases; ScS and PcP are routinely recorded at global surface stations.',
        },
      ],
    },
  ],
}

export default mantlePlumesSlabs
