import { Layers, Globe, Activity, Zap, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const snowMetamorphism: Lesson = {
  id: 'glac-101-1-1-1',
  title: 'Snow Metamorphism and Ice Formation',
  track: 'cli',
  trackName: 'Glaciology',
  level: 'Foundations',
  duration: '12 min',
  xpReward: 120,
  description: 'How snowflakes transform into glacier ice through metamorphism, compaction, and recrystallisation',
  sources: [
    { org: 'NSIDC', title: 'NSIDC — National Snow and Ice Data Center', url: 'https://nsidc.org' },
    { org: 'USGS',  title: 'USGS — Glaciers and Ice Sheets',            url: 'https://usgs.gov/programs/climate-research-development-program' },
    { org: 'NASA',  title: 'NASA — Ice, Cloud and Land Elevation Satellite', url: 'https://icesat.gsfc.nasa.gov' },
    { org: 'IPCC',  title: 'IPCC — The Cryosphere',                     url: 'https://ipcc.ch' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'From a single snowflake to a kilometre of ice: the birth of a glacier',
      body: `A single snowflake is an intricate dendrite of hexagonal ice with a density of just 50–100 kg/m³ — more than 90% air. Yet given sufficient time and burial beneath new snowfall, that delicate crystal will be transformed, grain by grain, into glacier ice denser than 830 kg/m³. The driving force is snow metamorphism: the continual reorganisation of ice crystals in response to temperature gradients and vapor pressure differences within the snowpack.

Two end-member metamorphic regimes govern this transformation. Equi-temperature (ET) metamorphism operates under near-isothermal conditions; vapor migrates from the convex surfaces of dendrite tips — where vapor pressure is highest — to concave necks and grain boundaries, rounding grains and strengthening inter-grain bonds over days to weeks. Kinetic growth (temperature gradient, or TG) metamorphism operates where steep temperature gradients exceed roughly 10°C/m; vapor diffuses preferentially along preferred crystallographic faces, building large, angular faceted crystals and ultimately depth hoar — a weak, sugary layer that is a leading cause of avalanche formation.

As snow accumulates and older layers are buried, the process of firnification begins. Firn is the intermediate material between fresh snow and glacier ice: granular, recrystallised, and with a density of roughly 400–550 kg/m³. Air can still percolate freely through firn\'s interconnected pore network. Continued overburden pressure and vapor transport compress and recrystallise the firn toward denser states.

At approximately 830 kg/m³, a critical threshold is crossed: pore close-off. The interconnected air passages seal off into isolated bubbles, cutting the firn column\'s connection to the atmosphere. The material is now glacier ice. Those sealed bubbles trap a sample of ancient atmosphere — including CO₂, CH₄, and N₂O — making deep glacier ice one of the most valuable paleoclimate archives on Earth.

The time-scales of this journey vary dramatically. In warm, wet temperate alpine glaciers — the Alps, the Cascades, Patagonia — liquid meltwater accelerates metamorphism and pore close-off can occur in as little as 25–40 years. In the cold, dry interior of Antarctica or central Greenland, where temperatures rarely approach 0°C, the same process takes 1,000–2,500 years, and the firn layer may extend 60–100 m deep before giving way to true glacier ice. Beneath roughly 500–1,000 m of ice overburden, pressure is sufficient to convert air bubbles into solid clathrate hydrates, in which gas molecules are locked within cage-like ice crystal structures — deepening the paleoclimate record and complicating the retrieval of ice cores.`,
      keyTerms: [
        {
          term: 'Snow Metamorphism',
          def: 'The physical transformation of snow crystals driven by temperature gradients and vapor pressure differences, progressively changing crystal shape, size, and density.',
        },
        {
          term: 'Firn',
          def: 'Granular recrystallised snow that has survived at least one melt season; density ~400–550 kg/m³, with interconnected air pores still open to the atmosphere.',
        },
        {
          term: 'Densification',
          def: 'The progressive increase in snow and firn density driven by overburden pressure, vapor transport, and recrystallisation as material is buried beneath new accumulation.',
        },
        {
          term: 'Pore Close-Off',
          def: 'The transition at ~830 kg/m³ when interconnected air passages in firn seal into isolated bubbles, marking the firn–glacier ice boundary and trapping ancient atmosphere.',
        },
        {
          term: 'Glacier Ice',
          def: 'Ice with density ≥ 830 kg/m³ in which air pores are sealed as discrete bubbles; formed by the progressive metamorphism and densification of accumulated snow and firn.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'The Four Stages of Snow-to-Ice Transformation',
      body: 'From fresh dendrites to deep glacier ice, each stage of the transformation is governed by distinct physical processes. Temperature, overburden pressure, and the presence or absence of liquid water all control how rapidly the transition occurs.',
      cards: [
        {
          name: 'Snow Crystal Metamorphism',
          icon: Layers,
          color: BRAND.accent,
          desc: 'Temperature gradient drives vapor diffusion from convex to concave surfaces, rounding grains and growing facets. Equi-temperature metamorphism strengthens the snowpack; kinetic (depth hoar) metamorphism weakens it.',
          examples: 'Fresh dendrites (50–100 kg/m³) round into equiaxed grains within days at 0°C. Steep temperature gradients (>10°C/m) produce angular depth-hoar crystals that weaken snowpack. Melt-freeze cycles produce hard, rounded melt-freeze crusts on Alpine snowpack.',
        },
        {
          name: 'Firnification and Densification',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Progressive compaction and recrystallisation from snow to firn to ice; role of overburden pressure and vapor transport. Firn retains open pore spaces that allow air communication with the atmosphere.',
          examples: 'Firn (400–550 kg/m³) accumulates in the percolation zone where meltwater refreezes. Annual layers are identifiable in firn by density and chemistry contrasts. Antarctica\'s cold, dry firn takes 1,000–2,500 years to reach pore close-off at 830 kg/m³.',
        },
        {
          name: 'Pore Close-Off and Air Bubble Trapping',
          icon: Activity,
          color: BRAND.coral,
          desc: 'At ~830 kg/m³ isolated air bubbles form, trapping ancient atmosphere. Bubbles transform to clathrate hydrates under pressure below ~1,000 m, preserving but altering the physical state of the gas archive.',
          examples: 'Vostok ice core air bubbles contain CO₂ records spanning 420,000 years. Bubble pressure increases with depth until clathrate transformation at ~500–1,000 m. Clathrate formation causes crystal cracking (horizontal fractures) during ice core retrieval.',
        },
        {
          name: 'From Firn to Glacier: The Birth Threshold',
          icon: Zap,
          color: BRAND.gold,
          desc: 'Once ice density exceeds ~917 kg/m³ and air permeability reaches zero, the material is glacier ice. The accumulation zone builds mass above the equilibrium line altitude (ELA); the ablation zone loses it below.',
          examples: 'Temperate alpine glaciers reach ice density in 25–40 years; polar ice sheets take centuries. The ELA marks where annual accumulation equals ablation — the glacier\'s \'break-even\' line. Below the ELA, blue glacier ice is exposed where firn has been stripped by summer melting.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Snow to Glacier Ice: The Metamorphic Pathway',
      body: 'Follow the transformation of a snowflake into glacier ice through successive metamorphic stages.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Follow the transformation of a snowflake into glacier ice through successive metamorphic stages',
        nodes: [
          {
            id: 'fresh-snow',
            label: 'Fresh Snow',
            description: 'New snowflakes: dendrites, plates, columns. Density 50–100 kg/m³. High surface area.',
            color: BRAND.accent,
          },
          {
            id: 'settled-snow',
            label: 'Settled Snow',
            description: 'Grain rounding by vapor diffusion. Density 100–300 kg/m³. Days to weeks.',
            color: BRAND.accentHot,
          },
          {
            id: 'firn',
            label: 'Firn',
            description: 'Granular recrystallised ice. Density 400–550 kg/m³. Air still percolates through.',
            color: BRAND.gold,
          },
          {
            id: 'late-firn',
            label: 'Late Firn / Dense Firn',
            description: 'Interlocking grains under overburden. Density 550–830 kg/m³. Pores closing.',
            color: BRAND.jade,
          },
          {
            id: 'glacier-ice',
            label: 'Glacier Ice',
            description: 'Pore close-off complete. Density ≥ 830 kg/m³. Air sealed in bubbles.',
            color: BRAND.coral,
          },
          {
            id: 'deep-ice',
            label: 'Deep Glacier Ice',
            description: 'Bubbles compress to clathrates at depth. Density ~917 kg/m³. Paleoclimate archive.',
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'fresh-snow',   to: 'settled-snow', label: 'Metamorphism (days–weeks)' },
          { from: 'settled-snow', to: 'firn',         label: 'Compaction & recrystallisation' },
          { from: 'firn',         to: 'late-firn',    label: 'Overburden pressure' },
          { from: 'late-firn',    to: 'glacier-ice',  label: 'Pore close-off ~830 kg/m³' },
          { from: 'glacier-ice',  to: 'deep-ice',     label: 'Clathrate transformation >500 m' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Which type of snow metamorphism produces angular depth-hoar crystals that can create weak layers in the snowpack?',
          a: [
            'Equi-temperature (ET) metamorphism driven by grain rounding',
            'Kinetic growth (TG) metamorphism driven by steep temperature gradients',
            'Melt-freeze metamorphism from diurnal surface melting',
            'Pressure sintering from overburden weight',
          ],
          correct: 1,
          explain: `Kinetic growth (temperature gradient) metamorphism occurs when steep temperature gradients (typically >10°C/m) drive vapor diffusion from warmer to cooler grains, depositing vapor on grain facets in preferred crystallographic orientations. This produces the large, angular depth-hoar crystals (up to 5–10 mm) characteristic of continental snowpacks. Depth hoar has low strength and high porosity, creating persistent weak layers that can propagate as slab avalanches months after formation. The Rocky Mountains and Cascades are particularly prone to depth-hoar formation due to cold, clear winters. In contrast, equi-temperature metamorphism (near-isothermal conditions) rounds and bonds grains, strengthening the snowpack.`,
        },
        {
          q: 'At what approximate density does firn transition to glacier ice, and what physically happens at this threshold?',
          a: [
            '~550 kg/m³ — firn grains begin to interlock under overburden pressure',
            '~830 kg/m³ — pore close-off isolates air bubbles from the atmosphere',
            '~700 kg/m³ — vapor transport ceases and only plastic deformation continues',
            '~917 kg/m³ — the ice reaches maximum crystalline density',
          ],
          correct: 1,
          explain: `Pore close-off — the transition from firn to glacier ice — occurs at approximately 830 kg/m³, when the interconnected air passages (pores) become isolated into discrete bubbles. Below this density, air can still diffuse through the firn column, meaning the air inside is in communication with the atmosphere and reflects the contemporary atmospheric composition. Above ~830 kg/m³, bubbles are sealed and the trapped air becomes a time capsule. This is why ice cores can record past atmospheric CO₂ and CH₄ concentrations: the gas dates to the time of pore close-off. The firn–ice transition density of ~830 kg/m³ is well below the density of pure ice (~917 kg/m³) because bubbles still occupy significant volume even after close-off.`,
        },
        {
          q: 'Why does glacier ice in polar ice sheets take much longer to form from snow than in temperate alpine glaciers?',
          a: [
            'Polar snow has lower initial density due to smaller crystal sizes',
            'Polar temperatures are far below 0°C year-round, suppressing the liquid water-assisted metamorphism and sintering that accelerates densification in temperate settings',
            'Polar accumulation rates are much higher, creating more overburden pressure',
            'Polar firn never reaches pore close-off — it remains firn throughout the ice sheet',
          ],
          correct: 1,
          explain: `In temperate alpine glaciers, summer melt produces percolating liquid water that dramatically accelerates firn densification through capillary bonding, refreezing, and direct crystal growth from liquid — pore close-off can occur in 25–40 years. In cold polar firn (Antarctic interior, central Greenland), temperatures rarely approach 0°C; there is no liquid water to enhance metamorphism, and densification proceeds only by vapor diffusion, plastic deformation, and pressure sintering. At Summit, Greenland (accumulation rate ~23 cm ice-eq/yr), pore close-off occurs at ~70 m depth after ~200 years. At Dome C, Antarctica (accumulation rate ~2.5 cm ice-eq/yr), it occurs at ~100 m depth after ~2,500 years. This means the gas age and the ice age differ by hundreds to thousands of years in polar cores.`,
        },
        {
          q: 'What happens to air bubbles trapped in glacier ice as depth (and pressure) increases below ~500–1,000 m?',
          a: [
            'Bubbles expand as ice pressure decreases with depth',
            'Bubbles transform into solid clathrate hydrates as pressure forces gas molecules into the ice crystal lattice',
            'Bubble gas escapes through microfractures in the ice',
            'Bubbles migrate upward through the ice via pressure-gradient diffusion',
          ],
          correct: 1,
          explain: `Below approximately 500–1,000 m depth in an ice sheet (depending on temperature and ice pressure), the hydrostatic pressure becomes sufficient to destabilize air bubbles and force gas molecules into the ice crystal lattice, forming clathrate hydrates. Clathrates are cage-like ice structures in which gas molecules (N₂, O₂, CO₂, Ar) occupy interstitial sites. This transition is important practically: when ice cores containing clathrates are brought to the surface and depressurized, clathrates decompose and can cause the core to crack (horizontal fractures) and microbubbles to form, releasing ancient gases. Researchers must work quickly to collect gas samples from deep cores. Clathrate formation does not destroy the paleoclimate record — the gas composition is preserved — but core handling requires care.`,
        },
        {
          q: 'Which of the following best describes the equilibrium line altitude (ELA) on a glacier?',
          a: [
            'The altitude above which all precipitation falls as snow rather than rain',
            'The altitude where annual accumulation equals annual ablation — the mass-balance zero line of a glacier',
            'The altitude above which glacier ice flow switches from extending to compressive flow',
            'The altitude of maximum ice thickness within a glacier',
          ],
          correct: 1,
          explain: `The ELA (equilibrium line altitude) is the elevation on a glacier where, over a mass-balance year, accumulation of new snow exactly equals ablation (melting, calving, sublimation). Above the ELA is the accumulation zone, where firn accumulates and net mass is positive; below is the ablation zone, where ice is lost to melt. The ELA is not a fixed physical feature but shifts year to year with climate — a warm summer raises the ELA, shrinking the accumulation zone and potentially causing negative mass balance. On alpine glaciers, the ELA can be identified visually at summer\'s end as the boundary between the dirty, blue ablation ice below and the white firn above. In global glacier monitoring, the ELA is a key diagnostic: rising ELAs over decades indicate sustained mass loss. The ELA is distinct from the firn line (boundary between firn and ice) and snowline (transient feature during melt season).`,
        },
      ],
    },
  ],
}

export default snowMetamorphism
