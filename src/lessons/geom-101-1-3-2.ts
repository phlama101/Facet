import { Wind, Layers, Globe, Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const duneCycles: Lesson = {
  id: 'geom-101-1-3-2',
  title: 'Dune Types, Loess, and Desertification',
  track: 'cli',
  trackName: 'Geomorphology',
  level: 'Foundations',
  duration: '13 min',
  xpReward: 130,
  description: 'Sand dune morphology controlled by wind regime and sand supply, loess as a global paleoclimate archive, and the drivers and consequences of desertification',
  sources: [
    { org: 'USGS',  title: 'USGS — Aeolian Processes and Dune Systems',                           url: 'https://www.usgs.gov' },
    { org: 'FAO',   title: 'FAO — Land Degradation Assessment and Monitoring',                     url: 'https://www.fao.org' },
    { org: 'Elsevier', title: 'Aeolian Research — Journal of Wind and Desert Geomorphology',      url: 'https://journals.elsevier.com' },
    { org: 'UNCCD', title: 'UNCCD — UN Convention to Combat Desertification',                      url: 'https://www.unccd.int' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Sand dune morphology controlled by wind regime and sand supply, loess as a global paleoclimate archive, and the drivers and consequences of desertification',
      body: `Sand dunes are classified primarily by wind regime (unidirectional, bimodal, or multidirectional) and sand supply (sparse to abundant), producing a predictable matrix of dune forms. Barchan dunes form under low sand supply and a unidirectional wind: the characteristic crescent shape develops because the low, thin horns migrate faster than the massive central mound, extending downwind. Barchans migrate 1–30 m/yr depending on size and wind energy. Transverse dunes develop with moderate sand supply under a unidirectional wind, forming ridges perpendicular to dominant wind direction — essentially coalesced barchans. Linear (seif) dunes require a bimodal wind and moderate sand supply; sand moves obliquely up both flanks alternately, building ridges parallel to the resultant wind that can extend hundreds of kilometres. Star dunes grow under multidirectional wind regimes with high sand supply; sand feeds multiple radiating arms and the dune grows vertically but migrates very little. Parabolic dunes are anchored by vegetation at their trailing arms, with the nose migrating downwind — the inverse of a barchan in planform.

Internally, every dune shares the same anatomy. The stoss slope is the gentle windward face (5–15°) where saltating grains travel upslope, abrading and sorting sediment. At the brink, the topographic high, grains avalanche onto the lee face when the slope exceeds ~34° — the angle of repose for dry sand. The lee face is the slip face: an avalanche face maintaining ~30–34° angle. Thin foreset laminae deposited by avalanching are preserved as cross-beds at 30–34°, dipping in the downwind direction. Ancient dune fields (ergs) preserved in the rock record — such as the Navajo Sandstone of Utah, a Jurassic erg — reveal paleowind directions from cross-bedding orientation.

Loess is wind-deposited silt (grain size 20–60 μm), transported from glacial outwash plains, river floodplains, and desert margins. The Chinese Loess Plateau is the world\'s best aeolian archive: over 200 m thick and 2.6 million years of continuous record. Loess accumulates rapidly during cold, dry, windy glacial periods (coarser grain size, high mass accumulation rate) and is converted to reddish-brown paleosols during warm, moist interglacials via pedogenesis. The resulting loess-paleosol sequences correlate directly with marine oxygen isotope stages. In the US Midwest, Peoria Loess deposited from Laurentide glacial outwash plains during the Last Glacial Maximum underlies the Corn Belt — among the world\'s most productive agricultural soils (mollisols).

Desertification affects 24% of global land area and directly threatens 250 million people. It is driven by the removal of vegetation cover through overgrazing, dryland agriculture, and fuelwood collection, which reduces infiltration, increases surface runoff, accelerates wind and water erosion, and locks in soil loss through positive feedbacks. The Sahel experienced catastrophic droughts from 1968–1984, pushing the Sahara 200–300 km southward in places. Since then, increased rainfall and farmer-managed natural regeneration (FMNR) — particularly in Niger — have reversed degradation across millions of hectares. The Great Green Wall of Africa initiative aims to restore an 8,000 km belt of vegetation across the Sahel from Senegal to Djibouti.`,
      keyTerms: [
        {
          term: 'Barchan Dune',
          def: 'Crescent-shaped dune formed under low sand supply and unidirectional wind; horns extend downwind and migrate faster than the central crest.',
        },
        {
          term: 'Star Dune',
          def: 'Multi-armed, stationary dune formed under multidirectional wind regimes with high sand supply; grows vertically rather than migrating.',
        },
        {
          term: 'Loess',
          def: 'Wind-deposited silt (20–60 μm) forming thick, fertile deposits downwind of glacial outwash plains; preserves long paleoclimate records as loess-paleosol sequences.',
        },
        {
          term: 'Angle of Repose',
          def: 'The steepest stable slope angle for dry granular material (~34° for sand); governs slip face angle and produces cross-bedding in dune foresets.',
        },
        {
          term: 'Desertification',
          def: 'Land degradation in dryland environments driven by vegetation removal, overgrazing, and climate variability, affecting 24% of global land area.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Aeolian Systems: Dunes, Loess, and Desertification',
      body: `Wind shapes landscapes through erosion, transport, and deposition. Dune morphology faithfully records the wind regime and sand supply at the time of formation; loess sequences preserve millions of years of glacial-interglacial cycling; and desertification represents the collapse of dryland ecosystems under human pressure and climate stress.`,
      cards: [
        {
          name: 'Dune Classification: Wind Regime and Sand Supply',
          icon: Wind,
          color: BRAND.accent,
          desc: 'Fryberger sand drift potential matrix links wind regime to dune type. Barchan: sparse supply, unidirectional wind → crescent, migrating. Transverse: moderate supply, unidirectional → ridges ⊥ wind. Linear/seif: bimodal wind, moderate supply → ridges ∥ resultant wind. Star: multidirectional wind, high supply → stationary, multi-armed. Parabolic: vegetated margins anchor trailing arms, nose migrates downwind.',
          examples: 'Namibian barchans migrating 15 m/yr; Empty Quarter (Rub\' al Khali) star dunes 250 m tall.',
        },
        {
          name: 'Dune Anatomy: Stoss, Brink, and Slip Face',
          icon: Layers,
          color: BRAND.jade,
          desc: 'Stoss slope: gentle (5–15°), abrasion by saltation. Brink: sand avalanches when angle exceeds 34° (angle of repose). Slip face: foresets at 30–34°; thin avalanche sheets preserved as cross-beds dipping downwind. Cross-bedding preserved in ancient erg deposits records paleowind direction and dune migration.',
          examples: 'Navajo Sandstone (Jurassic erg, Utah); dune migration rates and cross-bedding orientation as paleowind indicators.',
        },
        {
          name: 'Loess: Wind-Blown Silt as Paleoclimate Archive',
          icon: Globe,
          color: BRAND.coral,
          desc: 'Grain size 20–60 μm; sourced from glacial outwash, river floodplains, deserts. Chinese Loess Plateau: 200+ m thick, 2.6 Ma continuous record. Loess-paleosol sequences alternate with glacial stages — coarser, high-accumulation-rate loess during glacials; reddish paleosols during interglacials. Peoria Loess (Iowa-Nebraska) deposited from Laurentide outwash; underlies US Corn Belt mollisols.',
          examples: 'Chinese Loess Plateau: 2.6 Ma of continuous glacial-interglacial record; Nebraska sandhills (dunes stabilised by prairie grass); US Corn Belt underlain by Peoria Loess.',
        },
        {
          name: 'Desertification: Causes, Extent, and Mitigation',
          icon: Activity,
          color: BRAND.gold,
          desc: '24% of global land area degraded by desertification; dryland agriculture, overgrazing, and fuelwood collection remove vegetation; increased erosion → soil loss → positive feedback. Sahel famine 1968–1984 illustrates vulnerability. Farmer-managed natural regeneration (FMNR) and Great Green Wall initiative demonstrate recovery is possible when land use pressure is reduced.',
          examples: 'Aral Sea desiccation: 60,000 km² of new desert; Sahel: 200–300 km southward shift of Sahara during droughts; China\'s Three-North Shelterbelt (\'Green Wall\') planted 35 billion trees.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Aeolian System: From Wind and Sand to Paleoclimate Archive',
      body: 'How unidirectional wind and sand supply drive dune formation, migration, cross-bed preservation, and ultimately loess deposition downwind — creating a long-term paleoclimate archive.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'How unidirectional wind and sand supply drive dune formation, migration, cross-bed preservation, and ultimately loess deposition downwind — creating a long-term paleoclimate archive.',
        nodes: [
          {
            id: 'wind-sand-supply',
            label: 'Unidirectional Wind + Sand Supply',
            description: 'Dominant wind direction and sand availability set the stage for dune morphology. Low supply → barchan; moderate → transverse; bimodal wind → linear; multidirectional + high supply → star dunes.',
            color: BRAND.accent,
          },
          {
            id: 'dune-formation',
            label: 'Dune Formation',
            description: 'Sand grains saltate up the stoss slope and avalanche down the slip face when the angle of repose (~34°) is exceeded. The dune body grows as foreset laminae accumulate on the lee face.',
            color: BRAND.jade,
          },
          {
            id: 'dune-types',
            label: 'Barchan / Transverse / Linear',
            description: 'Wind regime and sand supply determine dune plan-form: crescent barchans under sparse supply, transverse ridges under moderate supply, and elongate linear/seif dunes under bimodal winds.',
            color: BRAND.coral,
          },
          {
            id: 'migration-crossbeds',
            label: 'Migration and Cross-bed Preservation',
            description: 'Dunes migrate downwind as the slip face advances. Foresets preserved at 30–34° become cross-beds in ancient sandstones (e.g. Navajo Sandstone), recording paleowind direction and erg extent.',
            color: BRAND.gold,
          },
          {
            id: 'loess-deposition',
            label: 'Loess Deposition Downwind',
            description: 'Fine silt (20–60 μm) carried beyond the dune field settles downwind of desert margins and glacial outwash plains, blanketing landscapes in loess during cold, windy glacial periods.',
            color: BRAND.amethyst,
          },
          {
            id: 'paleoclimate-archive',
            label: 'Paleoclimate Archive',
            description: 'Alternating loess (glacial) and paleosol (interglacial) layers record millions of years of climate change. The Chinese Loess Plateau\'s 2.6 Ma sequence rivals deep-sea oxygen isotope records as a continental climate archive.',
            color: BRAND.ruby,
          },
        ],
        edges: [
          { from: 'wind-sand-supply',    to: 'dune-formation',        label: 'Saltation and avalanching' },
          { from: 'dune-formation',      to: 'dune-types',            label: 'Morphology set by regime' },
          { from: 'dune-types',          to: 'migration-crossbeds',   label: 'Downwind advance' },
          { from: 'migration-crossbeds', to: 'loess-deposition',      label: 'Fines transported beyond erg' },
          { from: 'loess-deposition',    to: 'paleoclimate-archive',  label: 'Glacial-interglacial cycling' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Barchan dunes form in environments with low sand supply and a unidirectional wind. What happens to a barchan\'s horns (tips) compared to its central crest?',
          a: [
            'The horns migrate more slowly than the crest because they are exposed to stronger lateral winds that impede forward motion',
            'The horns migrate faster than the crest: the horns are lower and have less mass to move; they extend downwind more rapidly than the higher, more massive central part',
            'The horns and crest migrate at exactly the same rate, maintaining a fixed crescent geometry as a consequence of mass conservation',
            'The crest migrates faster than the horns because maximum wind speed and sand transport occur at the dune apex, not the margins',
          ],
          correct: 1,
          explain: 'The horns migrate faster than the crest: the horns are lower and have less mass to move; they extend downwind more rapidly than the higher, more massive central part; this maintains the characteristic crescent shape with horns pointing downwind; barchan size is limited by sand supply — large barchans in areas with higher sand supply transition to transverse ridges as sand availability increases.',
        },
        {
          q: 'Cross-bedding in ancient desert sandstones (ergs) such as the Navajo Sandstone (Jurassic) dips at approximately 30–34° in the direction of ancient wind transport. Why this specific angle?',
          a: [
            'Angle of repose: sand avalanches down the slip face when the angle exceeds ~34°, the internal friction angle of dry sand; sand is continually swept up the stoss face and deposited on the brink, then avalanches as thin sheets maintaining the slip face at the angle of repose; the resulting foresets are preserved at this angle and directly record the downwind direction of the paleodune field',
            'Grain-size sorting: coarser grains roll to the base of the slip face and fine grains accumulate near the brink, and the 30–34° angle represents the equilibrium slope for mixed grain sizes in saltation transport',
            'Wind speed threshold: 30–34° is the slope angle at which wind shear stress on the lee face equals the saltation threshold, so sand is neither deposited nor eroded at steeper angles',
            'Compaction angle: loose sand deposited at any angle consolidates to 30–34° during diagenesis; the cross-bed dip is a post-burial artifact rather than a primary depositional feature',
          ],
          correct: 0,
          explain: 'Angle of repose: sand avalanches down the slip face when the angle exceeds ~34°, the internal friction angle of dry sand; sand is continually swept up the stoss face and deposited on the brink, then avalanches as thin sheets maintaining the slip face at the angle of repose; the resulting foresets are preserved at this angle and directly record the downwind direction of the paleodune field.',
        },
        {
          q: 'The Chinese Loess Plateau contains over 2.6 million years of continuous aeolian sedimentation. How do scientists use this record to reconstruct past climate?',
          a: [
            'Cosmogenic isotope dating: cosmic-ray-produced ¹⁰Be concentrations in loess layers directly measure past solar output and atmospheric circulation strength, independent of grain size or pedogenic alteration',
            'Pollen assemblages: fossil pollen grains preserved in loess layers record past vegetation communities and seasonal temperature, providing a direct biological proxy for past climate conditions on the plateau',
            'Loess-paleosol sequences: during glacial periods (cold, dry, windy), loess is deposited rapidly (coarser grain size, high mass accumulation rates); during interglacials (warm, moist), pedogenesis produces paleosols with finer texture, higher magnetic susceptibility, and weathering indices indicating wetter conditions; the alternating loess-paleosol couplets correlate directly with marine oxygen isotope stages, providing a continuous continental climate record rivalling deep-sea cores',
            'Thermochronology: fission track dating of zircon grains within loess layers records the thermal history of source rocks and indirectly constrains ice sheet volume and erosion rates in upwind source regions',
          ],
          correct: 2,
          explain: 'Loess-paleosol sequences: during glacial periods (cold, dry, windy), loess is deposited rapidly (coarser grain size, high mass accumulation rates); during interglacials (warm, moist), pedogenesis produces paleosols with finer texture, higher magnetic susceptibility, and weathering indices indicating wetter conditions; the alternating loess-paleosol couplets correlate directly with marine oxygen isotope stages, providing a continuous continental climate record rivalling deep-sea cores.',
        },
        {
          q: 'Linear (seif) dunes are among the longest dunes on Earth, sometimes exceeding 200 km. What wind regime creates parallel linear ridges rather than the transverse or crescent forms?',
          a: [
            'Unidirectional wind with very high sand supply: abundant sand overwhelms the barchan form, causing lateral coalescence of horns into elongate ridges parallel to the dominant wind direction',
            'Seasonally reversing wind: a monsoon-like wind that blows from exactly opposite directions in summer and winter, depositing sand on both sides of the ridge and building it symmetrically upward along its length',
            'Onshore coastal wind: sea breezes force sand inland perpendicular to the coast; topographic deflection around coastal headlands then rotates transport to produce linear ridges parallel to the shoreline',
            'Bimodal wind: two dominant wind directions at an acute angle produce a resultant wind direction parallel to the dune crests; sand moves obliquely up both flanks alternately, building the ridge longitudinally; seif dunes can extend for hundreds of km across the Rub\' al Khali and Australian deserts; in contrast, purely unimodal winds create transverse ridges and (with low sand supply) barchans',
          ],
          correct: 3,
          explain: 'Bimodal wind: two dominant wind directions at an acute angle produce a resultant wind direction parallel to the dune crests; sand moves obliquely up both flanks alternately, building the ridge longitudinally; seif dunes can extend for hundreds of km across the Rub\' al Khali and Australian deserts; in contrast, purely unimodal winds create transverse ridges and (with low sand supply) barchans.',
        },
        {
          q: 'Desertification in the Sahel accelerated dramatically during the 1968–1984 drought. However, recent satellite data shows the Sahel has partially \'re-greened\' since then. What explains this recovery?',
          a: [
            'Large-scale afforestation programmes funded by international aid organisations planted fast-growing exotic tree species across the Sahel, providing immediate canopy cover that stabilised soil and reduced wind erosion',
            'Increased rainfall from shifting ITCZ patterns plus farmer-managed natural regeneration (FMNR): farmers in Niger and elsewhere protected and managed natural tree regeneration rather than clearing, dramatically increasing vegetation cover without expensive tree planting; satellite NDVI (vegetation index) data shows 3–5 million ha greened since the 1980s; climate recovery from the drought was necessary but insufficient alone — land management was critical; this demonstrates the resilience of dryland ecosystems when grazing pressure is reduced and trees are protected',
            'Widespread adoption of drip irrigation technology reduced dependence on rain-fed agriculture, allowing degraded lands to be taken out of production and naturally revegetate over two to three decades',
            'Global warming extended the West African monsoon season by three to four weeks, delivering significantly higher rainfall totals that overwhelmed the degradation feedbacks and restored vegetation without any change in land management',
          ],
          correct: 1,
          explain: 'Increased rainfall from shifting ITCZ patterns plus farmer-managed natural regeneration (FMNR): farmers in Niger and elsewhere protected and managed natural tree regeneration rather than clearing, dramatically increasing vegetation cover without expensive tree planting; satellite NDVI (vegetation index) data shows 3–5 million ha greened since the 1980s; climate recovery from the drought was necessary but insufficient alone — land management was critical; this demonstrates the resilience of dryland ecosystems when grazing pressure is reduced and trees are protected.',
        },
      ],
    },
  ],
}

export default duneCycles
