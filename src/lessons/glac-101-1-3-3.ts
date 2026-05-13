import { Globe, Layers, Activity, Zap, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const seaLevelIsostasy: Lesson = {
  id: 'glac-101-1-3-3',
  title: 'Sea Level Change, Ice Volume, and Glacial Isostasy',
  track: 'geo',
  trackName: 'Glaciology',
  level: 'Foundations',
  duration: '13 min',
  xpReward: 130,
  description: 'How ice sheets control global sea level through eustasy and how the crust responds to ice loading and unloading through isostasy',
  sources: [
    { org: 'NOAA', title: 'NOAA — Sea Level Change',                        url: 'https://oceanservice.noaa.gov/hazards/sealevelrise' },
    { org: 'NASA', title: 'NASA — Sea Level Change',                        url: 'https://sealevel.nasa.gov' },
    { org: 'PSMSL', title: 'PSMSL — Permanent Service for Mean Sea Level', url: 'https://psmsl.org' },
    { org: 'IPCC', title: 'IPCC AR6 — Chapter 9: Ocean, Cryosphere and Sea Level', url: 'https://ipcc.ch' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Rising seas and rebounding land: the linked story of ice, ocean, and Earth\'s crust',
      body: `Eustasy refers to global mean sea level change driven by changes in the total volume of ocean water. On glacial-interglacial timescales, ice volume changes are the dominant control — glacio-eustasy — while thermal expansion of seawater (steric sea level change) dominates over shorter decadal timescales. At the Last Glacial Maximum (LGM) ~20,000 years ago, so much water was locked in continental ice sheets that global sea level stood approximately 120–130 m below its present level. North Sea, the English Channel, and the Bering Strait were dry land; coastlines lay hundreds of kilometres seaward of their present positions.

Glacial isostasy is the crustal response to ice loading and unloading. When a large ice sheet accumulates, its weight depresses the lithosphere downward into the viscous mantle — a process taking thousands of years controlled by mantle viscosity. When the ice melts, the mantle slowly flows back and the crust rebounds upward in a process called postglacial rebound or glacial isostatic adjustment (GIA). The Holocene transgression — the post-LGM rise in sea level — raised global sea levels from −120 m at ~20,000 BP to near-present levels by ~6,000 BP, representing a mean rate of ~10 mm/yr. Some records indicate brief sea level highstands slightly above present during the mid-Holocene in certain regions.

Current sea level rise stands at ~3.6 mm/yr (IPCC AR6), driven by a combination of thermal expansion (~40%), melting mountain glaciers (~20%), and contributions from the Greenland (~15%) and Antarctic (~10%) ice sheets, with the remainder from land water storage changes. Projections for 2100 range from 0.28–1.01 m (likely range across emissions scenarios, IPCC AR6), with low-likelihood high-impact scenarios potentially exceeding 1.5–2 m if marine ice sheet instabilities accelerate.

Relative sea level (RSL) is the sea level experienced at any specific coastal location, combining eustasy, isostasy, and tectonics: RSL = eustasy + vertical land movement + tectonic effects. Communities do not experience global mean sea level — they experience RSL. In subsiding deltaic cities, RSL rise can vastly exceed global rates: Jakarta, Indonesia subsides at ~25 cm/yr from groundwater extraction, making its RSL rise more than 10 times the global average. New Orleans has subsided 2–3 m since the 1930s from sediment compaction and groundwater withdrawal. Conversely, in formerly glaciated regions still undergoing postglacial rebound, RSL may be falling: Stockholm, Sweden sees RSL falling at ~4 mm/yr, and the Gulf of Bothnia coastline is currently rising at up to +8 mm/yr — GIA uplift exceeding global eustatic rise.`,
      keyTerms: [
        {
          term: 'Eustasy',
          def: 'Change in global mean sea level driven by changes in the total volume of ocean water; dominated by ice volume changes on glacial-interglacial timescales and thermal expansion on decadal timescales.',
        },
        {
          term: 'Glacial Isostatic Adjustment',
          def: 'The ongoing deformation of Earth\'s crust and mantle in response to past ice sheet loading (subsidence) and unloading (rebound); also called postglacial rebound. Timescale is thousands to tens of thousands of years.',
        },
        {
          term: 'Relative Sea Level',
          def: 'Sea level as experienced at a specific coastal location; the net sum of eustatic change, vertical land motion (isostasy, tectonics, compaction), and tectonic effects. RSL determines flood risk for coastal communities.',
        },
        {
          term: 'Last Glacial Maximum',
          def: 'The period ~20,000 years ago when global ice volume was at its maximum, with sea level ~120–130 m below present. North Sea, Bering Strait, and English Channel were dry land.',
        },
        {
          term: 'Postglacial Rebound',
          def: 'The upward movement of Earth\'s crust following the removal of ice sheet load after deglaciation; driven by viscous mantle flow returning to equilibrium. Scandinavia is still rebounding at up to +8 mm/yr.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Ice, Ocean, and Crust: The Linked Systems of Sea Level Change',
      body: `Sea level change operates across multiple linked Earth systems: the cryosphere controls ice volume and glacio-eustasy; the ocean\'s thermal state drives steric sea level change; and the solid Earth responds to ice loading and unloading through isostasy. Understanding how these systems interact — and how they play out differently at local versus global scales — is fundamental to assessing past, present, and future sea level change.`,
      cards: [
        {
          name: 'Eustasy: Global Sea Level and Ice Volume',
          icon: Globe,
          color: BRAND.accent,
          desc: 'eustatic sea level changes reflect changes in the total volume of ocean water; glacial ice volume changes are the dominant driver on glacial-interglacial timescales (glacio-eustasy); thermal expansion of seawater (steric sea level) is dominant over shorter timescales',
          examples: 'LGM sea level was 120–130 m lower than today — North Sea, English Channel, and Bering Strait were dry land. Holocene sea level rose from −120 m at 20,000 BP to near-present levels by ~6,000 BP — a mean rise rate of ~10 mm/yr. Since 1993, satellite altimetry shows global mean sea level rising at 3.3 mm/yr, accelerating to ~4.6 mm/yr in 2023.',
        },
        {
          name: 'Glacial Isostatic Adjustment (GIA)',
          icon: Layers,
          color: BRAND.jade,
          desc: 'under ice sheet loading, the lithosphere flexes downward (subsidence) into the viscous mantle; after deglaciation, the mantle flows back and the crust rebounds upward; the timescale of rebound depends on mantle viscosity (~100–300 km depth upper mantle: ~10²⁰ Pa·s)',
          examples: 'Fennoscandia is currently rebounding at up to 8 mm/yr near the Gulf of Bothnia — still adjusting to ice sheet retreat 10,000 years ago. Hudson Bay, Canada is rebounding at 10–12 mm/yr — the former centre of the Laurentide Ice Sheet, where the crust was depressed ~900 m. Ancient beach terraces (strandlines) rising steeply away from former ice centres record thousands of years of GIA uplift.',
        },
        {
          name: 'Relative Sea Level: The Local Picture',
          icon: Activity,
          color: BRAND.coral,
          desc: 'relative sea level (RSL) at any location is the net effect of eustatic change (global), isostatic change (local crust motion), and tectonic change; communities experience RSL, not global mean sea level; subsiding deltaic cities face compound RSL rise from both climate and land-use',
          examples: 'Jakarta, Indonesia subsides 25–40 cm/yr from groundwater extraction — RSL rising >10× the global average. New Orleans has subsided 2–3 m since the 1930s from sediment compaction and groundwater withdrawal, making it extremely vulnerable to flooding. Stockholm, Sweden has RSL falling at ~4 mm/yr despite global eustatic rise, because GIA uplift exceeds sea level rise.',
        },
        {
          name: 'Future Sea Level Projections and Tipping Points',
          icon: Zap,
          color: BRAND.gold,
          desc: 'IPCC AR6 projects global mean sea level rise of 0.28–1.01 m by 2100 (likely range, 1.5°C–4°C scenarios); contributions from thermal expansion, mountain glaciers, Greenland, and Antarctica; low-likelihood, high-impact scenarios include potential 2+ m by 2100 from ice sheet instabilities',
          examples: 'Under SSP5-8.5 (high emissions), likely GMSL rise by 2100 is 0.63–1.01 m; under SSP1-1.9 (low emissions) it is 0.28–0.55 m. The IPCC low-confidence high-end scenario reaches 1–1.9 m by 2100 under very high warming, factoring in ice cliff instability. At 2°C of warming, Greenland could be committed to 1–3 m of long-term sea level rise over centuries to millennia even if temperatures later fall.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From Ice Sheet to Rebounding Crust: The Glacial Cycle and Sea Level',
      body: `Follow the chain of events from ice sheet growth through sea level fall, isostatic depression, and eventual postglacial rebound.`,
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Follow the chain of events from ice sheet growth through sea level fall, isostatic depression, and eventual postglacial rebound',
        nodes: [
          {
            id: 'ice-accumulation',
            label: 'Ice Sheet Growth',
            description: 'Glaciation begins. Ice sheet builds up over thousands of years. Sea level falls as water is locked as ice.',
            color: BRAND.accent,
          },
          {
            id: 'isostatic-depression',
            label: 'Crustal Depression (Loading)',
            description: 'Weight of ice sheet (10⁶–10⁷ km³) depresses lithosphere into mantle. Depression ~1/3 of ice thickness.',
            color: BRAND.jade,
          },
          {
            id: 'lgm-sea-level',
            label: 'LGM: Sea Level −120 m',
            description: 'Last Glacial Maximum ~20,000 BP. Exposed continental shelves. Bering Land Bridge open. Coastlines 100s km seaward.',
            color: BRAND.accentHot,
          },
          {
            id: 'deglaciation',
            label: 'Deglaciation (15,000–8,000 BP)',
            description: 'Ice sheets melt rapidly. Meltwater pulses add up to 20 mm/yr of sea level rise episodically.',
            color: BRAND.coral,
          },
          {
            id: 'forebulge-collapse',
            label: 'Peripheral Forebulge Collapse',
            description: 'Land beyond the ice margin bulged upward during glaciation. Now subsides as the forebulge migrates inward.',
            color: BRAND.ruby,
          },
          {
            id: 'gia-rebound',
            label: 'GIA Uplift (Ongoing)',
            description: 'Former ice centres still rebounding: Fennoscandia +8 mm/yr, Hudson Bay +10 mm/yr. Will continue for ~10,000 years.',
            color: BRAND.gold,
          },
        ],
        edges: [
          { from: 'ice-accumulation',   to: 'isostatic-depression', label: 'Ice load depresses crust' },
          { from: 'ice-accumulation',   to: 'lgm-sea-level',        label: 'Water stored as ice' },
          { from: 'lgm-sea-level',      to: 'deglaciation',         label: 'Climate warming melts ice' },
          { from: 'deglaciation',       to: 'gia-rebound',          label: 'Ice load removed, mantle rebounds' },
          { from: 'deglaciation',       to: 'forebulge-collapse',   label: 'Forebulge migrates inward' },
          { from: 'gia-rebound',        to: 'forebulge-collapse',   label: 'Coupled elastic/viscous response' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'At the Last Glacial Maximum (~20,000 years ago), global sea level was approximately 120–130 m lower than today. Where did all that water go?',
          a: [
            'It evaporated into the atmosphere, which held much more water vapour during cold glacial periods',
            'It was locked as ice in continental ice sheets, primarily the Laurentide (North America), Fennoscandian (Europe), and expanded Antarctic Ice Sheet',
            'It was absorbed into Earth\'s mantle through subduction zones during the glacial cooling period',
            'It occupied shallow inland seas that formed when ocean water was displaced by isostatic depression of the ocean floor',
          ],
          correct: 1,
          explain: 'At the LGM, approximately 52 million km³ more ice existed on Earth than today — primarily in the Laurentide Ice Sheet (~34 million km³, covering most of Canada and the northern USA to depths of 2–4 km), the Fennoscandian Ice Sheet (~8 million km³, covering Scandinavia and northern Europe), and the expanded Antarctic Ice Sheet and mountain glaciers. Using the conversion factor (361.8 Gt = 1 mm sea level), 52 × 10⁶ km³ × 917 kg/m³ × 10⁹ m³/km³ ÷ (361.8 × 10¹² kg/mm) ≈ 130 m of sea level. The exposed continental shelves formed land bridges (Beringia between Siberia and Alaska, Doggerland connecting Britain to mainland Europe) that were crucial to human migration. Sea level has been rising since deglaciation began ~18,000 years ago.',
        },
        {
          q: 'Glacial Isostatic Adjustment (GIA) refers to the crustal response to ice loading and unloading. What controls how quickly the crust rebounds after deglaciation?',
          a: [
            'The thickness of the crust — thicker continental crust rebounds faster than thin oceanic crust',
            'Mantle viscosity — a more viscous upper mantle means slower flow and slower rebound; typical upper mantle viscosity is ~10²⁰ Pa·s, giving rebound timescales of thousands to tens of thousands of years',
            'The rate of sea level rise — faster sea level rise produces faster rebound due to buoyancy',
            'The temperature of the ice sheet — cold ice depresses the crust more deeply than warm ice',
          ],
          correct: 1,
          explain: 'When an ice sheet loads the lithosphere, the crust flexes down (over timescales of thousands of years) as mantle material flows outward. The elastic part of the lithospheric response is nearly instantaneous (flexural isostasy); the viscous mantle flow (relaxation) determines the rebound timescale. Mantle viscosity (η) controls the relaxation time: τ ≈ η × L / (Δρ × g), where L is wavelength of the loading, Δρ is density contrast between mantle and crust, and g is gravity. Upper mantle viscosity ~10¹⁹–10²¹ Pa·s gives relaxation times of 1,000–100,000 years. Scandinavia began deglaciation ~10,000 years ago and is still rebounding — it won\'t reach equilibrium for another ~5,000–10,000 years. GIA models use GPS uplift data to constrain mantle viscosity structure.',
        },
        {
          q: 'Relative sea level (RSL) is the sea level experienced at a specific coastal location. Why can RSL be falling in some locations while global mean sea level is rising?',
          a: [
            'Global mean sea level is always uniform; local measurements are always wrong due to instrument errors',
            'Where glacial isostatic rebound exceeds eustatic sea level rise, the land is rising faster than the ocean, so RSL falls — experienced as a receding coastline even as global mean sea level increases',
            'Tides cause RSL to fluctuate, masking the true global mean sea level signal',
            'Cold water at high latitudes is denser, so sea surface stands lower near the poles despite global mean sea level rise',
          ],
          correct: 1,
          explain: 'Relative sea level = eustatic sea level + vertical land movement (VLM) + tectonic effects. VLM includes: (1) glacial isostatic adjustment (GIA) uplift in formerly glaciated areas; (2) tectonic uplift or subsidence; (3) sediment compaction; (4) groundwater/oil extraction. In Scandinavia, GIA uplift exceeds +8 mm/yr near the Gulf of Bothnia, while global mean sea level rise is ~3.6 mm/yr — net RSL fall of ~4 mm/yr. Stockholm\'s tide gauge record shows the sea level falling at ~4 mm/yr over the 20th century. The Baltic coastline of Sweden is extending seaward as new land emerges. This is the \'land of the rising coast\' phenomenon. Conversely, in Jakarta (groundwater extraction), New Orleans (sediment compaction), and the Mekong delta (reduced sediment supply), RSL rises at 5–40× the global rate.',
        },
        {
          q: 'During deglaciation, episodic \'meltwater pulses\' caused abrupt rapid sea level rise. The most dramatic, Meltwater Pulse 1A (MWP-1A), is estimated to have raised sea level by ~14–18 m in ~300 years (~50 mm/yr). What is the likely source of this freshwater pulse?',
          a: [
            'Intensified rainfall over the subtropical oceans that temporarily increased ocean volume',
            'Partial collapse of the Laurentide or Antarctic Ice Sheet (or both), releasing ice equivalent to a 14–18 m rise in ~300 years — ~10× the current rate of sea level rise',
            'Eruption of large volcanic provinces that melted extensive snow cover and glacier ice',
            'Thermal expansion of the deep ocean as intermediate water warmed by several degrees in a few centuries',
          ],
          correct: 1,
          explain: 'MWP-1A (~14,500 BP) is recorded in coral terraces, sediment records, and palaeo-shorelines as a rapid sea level jump of 14–18 m within ~300–500 years — a rate of ~40–60 mm/yr, roughly 10–15× current sea level rise rates. The source ice sheet is debated: ice sheet models and geological evidence have implicated both the Laurentide Ice Sheet (from sediment flux records and Heinrich Event timing) and the Antarctic Ice Sheet (from far-field sea level fingerprinting). Recent evidence from New Zealand and the Caribbean suggests a southern hemisphere source for part of MWP-1A. The abrupt freshwater injection may have disrupted the Atlantic Meridional Overturning Circulation (AMOC), triggering the Younger Dryas cold reversal (12,900–11,700 BP). Understanding MWP-1A is critical for assessing whether modern ice sheets could produce similarly rapid pulses this century.',
        },
        {
          q: 'IPCC AR6 projects sea level rise of 0.28–1.01 m by 2100 (likely range). What is the largest source of uncertainty in these projections?',
          a: [
            'Uncertainty in ocean thermal expansion, which is the largest single contributor to projected sea level rise',
            'The behaviour of the Antarctic Ice Sheet, particularly whether Marine Ice Sheet Instability or Marine Ice Cliff Instability mechanisms will cause rapid, non-linear mass loss beyond projections based on current observations',
            'Uncertainty in future greenhouse gas emissions, which is the only variable that matters for sea level projections',
            'Uncertainty in tidal patterns and ocean circulation, which could amplify or suppress regional sea level change',
          ],
          correct: 1,
          explain: 'While future emissions pathways do contribute uncertainty (different scenarios give different central estimates), the dominant scientific uncertainty is the potential for non-linear, rapid ice loss from Antarctica. Current process models based on observed ice dynamics give relatively constrained estimates (~0.03–0.28 m of Antarctic contribution by 2100). However, Marine Ice Sheet Instability (MISI) and especially Marine Ice Cliff Instability (MICI — hypothetical rapid calving from tall ice cliffs after shelf removal) could potentially contribute much more. DeConto & Pollard (2016) suggested up to 1+ m from Antarctica alone under high emissions — approximately doubling the total projection. Later analyses (Edwards et al. 2019) disputed this, and IPCC AR6 treats >1 m scenarios as \'low likelihood but high impact.\' This genuine scientific uncertainty about Antarctic behavior drives the wide upper end of sea level projections and motivates the \'storylines\' approach to planning for low-probability, high-consequence outcomes.',
        },
      ],
    },
  ],
}

export default seaLevelIsostasy
