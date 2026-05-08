import { Wind, Globe, Sun } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const atmosphereLayers: Lesson = {
  id: 'atmo-101-1-1-1',
  title: 'Layers of the Atmosphere',
  track: 'atm',
  trackName: 'Meteorology',
  level: 'Beginner',
  duration: '11 min',
  xpReward: 140,
  description: "Earth's atmosphere is not a uniform shell of air — it is a stack of distinct layers defined by temperature gradients, each with unique chemistry, dynamics, and importance to life on the surface.",
  sources: [
    { org: 'NOAA',     title: 'Layers of the Atmosphere',                                   url: 'https://www.noaa.gov/education/resource-collections/atmosphere' },
    { org: 'NASA',     title: 'Atmospheric Science Data Center',                            url: 'https://eosweb.larc.nasa.gov/' },
    { org: 'OpenStax', title: 'Introduction to Atmospheric Science (CC-BY 4.0)',            url: 'https://openstax.org/books/introduction-oceanography' },
    { org: 'UCAR',     title: 'The Atmosphere: Structure and Behavior',                     url: 'https://scied.ucar.edu/learning-zone/atmosphere' },
    { org: 'NOAA',     title: 'National Weather Service — Atmospheric Basics',              url: 'https://www.weather.gov/jetstream/atm' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'A layered shell of air',
      body: `Earth's atmosphere is a thin envelope of gas held in place by gravity. From the surface to the edge of space, it spans roughly 700 km, yet 99% of its mass is compressed into the lowest 30 km — a layer thinner, relative to Earth's diameter, than the skin of an apple. Despite its thinness, the atmosphere performs an extraordinary range of functions: it supplies the oxygen and carbon dioxide needed for life, absorbs and scatters incoming solar radiation, retains heat through the greenhouse effect, transmits weather, and shields the surface from lethal ultraviolet radiation and the vacuum of space.

The atmosphere is not uniform. Scientists divide it into distinct **layers** based on how temperature changes with altitude. In some layers, temperature decreases as you ascend (as on a mountain); in others, it increases. These temperature inversions — warm layers above cool ones — act as lids that trap gas below them and define the boundary between layers. The boundaries themselves are named with the suffix "-pause": the **tropopause** (top of the troposphere), **stratopause**, **mesopause**, and **thermopause**. Each pause is a temperature minimum or maximum that marks the transition to the layer above.

Understanding the layers of the atmosphere is essential to understanding weather, climate, and aviation. Thunderstorms reach the tropopause and stop. The ozone layer sits in the stratosphere. Meteors burn up in the mesosphere. The Northern and Southern Lights (aurora) glow in the thermosphere. GPS and satellite communications depend on the ionosphere (a region within the thermosphere). Each layer is a distinct physical environment with its own processes, chemistry, and hazards — and each is affected by human activity in ways that interact with the surface in complex ways.`,
      keyTerms: [
        { term: 'Troposphere',   def: 'The lowest atmospheric layer (0–12 km on average, thicker at the equator, thinner at the poles). Contains 75–80% of atmospheric mass and virtually all weather. Temperature decreases with altitude at the environmental lapse rate (~6.5°C per km). Bounded above by the tropopause.' },
        { term: 'Stratosphere',  def: 'The layer from the tropopause (~12 km) to the stratopause (~50 km). Temperature increases with altitude because ozone (O₃) absorbs UV radiation, warming the layer. Contains the ozone layer (15–35 km). Very dry, no weather, but important for aviation and chemistry.' },
        { term: 'Mesosphere',    def: 'The layer from the stratopause (~50 km) to the mesopause (~85 km). Temperature again decreases with altitude; the mesopause (~−90°C) is the coldest point in the atmosphere. Meteors burn up here. Extremely thin air — too thin for aircraft, too dense for satellites.' },
        { term: 'Thermosphere',  def: 'The layer from the mesopause (~85 km) to ~700 km. Temperature increases dramatically (to >1,000°C) because individual gas molecules absorb X-ray and high-energy UV radiation; but the gas is so thin that heat transfer to other materials is minimal. Contains the ionosphere and the International Space Station.' },
        { term: 'Tropopause',    def: 'The boundary between the troposphere and stratosphere, typically at ~12 km altitude (higher in tropics, lower at poles). Marks a temperature minimum (~−60°C). Acts as a lid on convective weather: thunderstorm anvils spread horizontally when they reach the tropopause because the stratosphere above is warmer (more stable).' },
      ],
    },
    {
      type: 'concept',
      title: 'The four main layers and why temperature reverses',
      body: `**Why temperature changes with altitude — and reverses.** In everyday experience, it gets colder as you go up a mountain. This cooling is a fundamental property of the troposphere: air expands as pressure decreases with altitude, and expansion cools air (the dry adiabatic lapse rate). But temperature does not always decrease with altitude in the atmosphere. The driving factor is **where energy is absorbed**. If a layer absorbs radiation from above (from the sun or from space), the top of that layer is warmer than the bottom, creating a temperature inversion. This is why the stratosphere is warm at the top (ozone absorbs UV from above) and the thermosphere is hot at the top (oxygen and nitrogen molecules absorb X-rays from above). Understanding these reversals is the key to understanding the layers.

**The troposphere: where weather lives.** The troposphere extends from the surface to ~12 km (higher in the tropics, ~17 km; lower at poles, ~7 km). Temperature drops from ~15°C at sea level to approximately −60°C at the tropopause. This cooling with altitude makes the troposphere unstable: warm, moist air near the surface is less dense than cold air above, so it rises — creating convection, clouds, and storms. Virtually all weather, all clouds, and all precipitation occur in the troposphere. The tropopause acts as a temperature lid: the stratosphere above is warmer, so air rising from below cools until it reaches the same temperature as the stratosphere and can no longer rise. This is why cumulonimbus (thunderstorm) clouds spread out horizontally into the characteristic anvil shape when they hit the tropopause.

**The stratosphere: ozone shield and stable air.** The stratosphere (12–50 km) is warm at the top because ozone absorbs UV radiation. This temperature inversion (warm above, cool below) makes the stratosphere extremely stable — there is no convection, no weather, and very little vertical mixing. Air that enters the stratosphere stays there for years. This stability is what makes the stratosphere the preferred cruise altitude for long-haul jets (above turbulent tropospheric weather) and also why pollutants that reach the stratosphere — like chlorofluorocarbons (CFCs) — persist long enough to destroy ozone globally. The **ozone layer** (15–35 km) absorbs 97–99% of the sun's biologically damaging UV-B and UV-C radiation; without it, complex life on land would be impossible.

**The mesosphere: cold, dark, and streaked with meteors.** The mesosphere (50–85 km) is the least well-studied atmospheric layer — too high for balloon measurements, too low for orbit. Temperature falls again to the coldest point in the atmosphere: the mesopause at ~85 km reaches −90°C. Most meteoroids (space rocks) entering Earth's atmosphere burn up here due to friction with atmospheric molecules, appearing as shooting stars. At high latitudes in summer, the mesopause is cold enough for ice crystals to form from trace water vapour, producing the rare **noctilucent clouds** (night-shining clouds) visible after sunset near the poles.

**The thermosphere and ionosphere: where satellites and aurora live.** The thermosphere (85–700 km) contains such thin gas that individual gas molecules can travel hundreds of kilometres without colliding. Despite temperatures >1,000°C (measured by average molecular kinetic energy), the gas is so sparse that the atmosphere would feel extremely cold to the touch — there are not enough molecules to transfer significant heat. Within the thermosphere, the **ionosphere** is a region of ionised gas (plasma) created by solar radiation stripping electrons from gas molecules. The ionosphere reflects radio waves, making long-distance radio communication possible, and hosts the aurora borealis and australis — curtains of light produced when charged solar wind particles follow magnetic field lines into polar regions and collide with oxygen and nitrogen atoms at 100–300 km altitude.`,
      cards: [
        {
          name: 'Troposphere and Tropopause',
          icon: Wind,
          color: BRAND.accent,
          desc: '0–12 km (7 km poles, 17 km tropics). 75–80% of atmospheric mass. Temperature drops ~6.5°C per km. Weather, clouds, precipitation: all here. Tropopause: temperature minimum (~−60°C), acts as convective lid — thunderstorm anvils mark it visually. Thickness varies seasonally and with latitude. Jet streams flow near the tropopause.',
          examples: 'Mount Everest summit: 8.8 km, still in the troposphere · Commercial aviation cruise altitude: 10–12 km, near tropopause · Cumulonimbus anvil: cloud spreads horizontally at the tropopause, indicating the top of the storm',
        },
        {
          name: 'Stratosphere and the Ozone Layer',
          icon: Sun,
          color: BRAND.gold,
          desc: '12–50 km. Temperature rises from −60°C at tropopause to 0°C at stratopause. Warming caused by ozone (O₃) absorbing UV radiation. Stable (temperature inversion): no weather, very little vertical mixing. Ozone layer 15–35 km absorbs 97–99% of UV-B/UV-C. CFC-driven ozone hole discovered above Antarctica 1985, peaking in 1990s; recovering under the Montreal Protocol.',
          examples: 'SR-71 Blackbird: cruised at 25 km (stratosphere) · Ozone hole: maximum extent ~28 × 10⁶ km² in 2006, declining since · Stratospheric aerosol injection: proposed geoengineering would mimic volcanic eruptions (sulfur → cooling)',
        },
        {
          name: 'Mesosphere, Thermosphere, Ionosphere',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Mesosphere (50–85 km): coldest atmosphere point (−90°C), meteor burnup zone, noctilucent clouds. Thermosphere (85–700 km): temperature >1,000°C but too sparse to feel hot; ISS orbits at ~400 km. Ionosphere (within thermosphere): ionised by solar UV/X-ray, reflects AM radio waves, site of aurora at 100–300 km altitude; auroral colours = oxygen (green/red) and nitrogen (blue/purple).',
          examples: 'Shooting stars: mesosphere (~80 km) · ISS: lower thermosphere (~400 km) · Aurora borealis: 100–300 km · AM radio skip: ionosphere reflects signals over the horizon for long-distance communication',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "A commercial aircraft at cruise altitude experiences severe turbulence and briefly climbs to escape it, but the pilot notes that above a certain altitude the air becomes completely smooth regardless of storm activity below. What atmospheric feature is responsible, and why does it create such a sharp boundary for turbulence?",
          a: [
            "The aircraft has reached the stratosphere above the tropopause; the stratosphere's temperature inversion (warm above, cool below) makes it extremely stable, preventing the convective mixing that creates turbulence; thunderstorms below cannot penetrate this lid because their air cools to the same temperature as the surrounding stratosphere at the tropopause and can no longer rise",
            "The aircraft has reached the mesosphere, where air is too thin to support turbulent eddies; turbulence requires a minimum air density that only the lower atmosphere possesses, so above the mesosphere the air is perfectly smooth",
            "The aircraft has entered a region above the jet stream; jet streams create turbulence below them but calm air above them because the Coriolis force deflects turbulent eddies downward, preventing them from rising through the jet stream core",
            "At high altitude the air temperature drops so low that air molecules lose kinetic energy and can no longer form turbulent eddies; turbulence requires molecular motion that ceases below −60°C, which is reached at the tropopause",
          ],
          correct: 0,
          explain: "The mesosphere (B) is far above commercial aircraft cruise altitudes (~10–12 km) and is entirely inaccessible to them; aircraft cannot fly above ~30 km. Jet streams do create clear-air turbulence (CAT) around them (C), but this is not the same as the fundamental temperature lid that caps convective weather; the jet stream is embedded near the tropopause, not above it. Cold temperatures (D) do not mechanically prevent turbulent eddies — turbulence is driven by wind shear, convection, and pressure differences, not molecular kinetic energy in the way described. The correct answer is A: the tropopause is a temperature inversion — the stratosphere above it is warmer than the troposphere below. When a thunderstorm's updraft carries air upward, the rising air cools at the dry adiabatic lapse rate. At the tropopause, the rising air has cooled to the same temperature as the surrounding stratosphere; it is now in thermal equilibrium and loses its buoyancy. If it rises further into the stratosphere, it is now cooler than the surrounding air and is pushed back down. This makes the tropopause a hard lid for convective weather: storm tops flatten into anvil shapes exactly at the tropopause, and the stratosphere above is in a different stability regime entirely — calm, horizontally stratified, no weather.",
        },
        {
          q: "The stratospheric ozone layer was severely thinned by chlorofluorocarbons (CFCs) in the 20th century. Why did CFCs, which are chemically inert and harmless at the surface, cause such damage to stratospheric ozone — and why did the ozone hole appear specifically over Antarctica rather than globally?",
          a: [
            "CFCs are denser than air and sink directly from the surface to the stratosphere over Antarctica, where the atmosphere is thinnest; the polar regions receive the most UV radiation because the sun's angle is low, so ozone destruction is most severe there",
            "CFCs are inert at the surface because UV radiation is blocked by the ozone layer below the stratosphere; in the stratosphere, UV breaks CFCs apart, releasing chlorine atoms that catalytically destroy ozone (each Cl atom destroys ~100,000 O₃ molecules); the Antarctic ozone hole is severe because polar stratospheric clouds (PSCs) that form in the extreme cold of Antarctic winter convert inactive chlorine to reactive forms, triggering massive ozone loss in spring",
            "CFCs destroy ozone by direct chemical reaction at the surface, but the destroyed ozone is replenished by photosynthesis; in Antarctica there is no vegetation to replenish ozone, so depletion accumulates over winter when it is dark; the Montreal Protocol worked by banning CFCs, which stopped the ongoing chemical reaction",
            "The ozone hole appears over Antarctica because the polar vortex traps CFC molecules over the continent for decades; CFCs are too heavy to disperse and accumulate at the pole, where they react with ozone directly without needing UV to break them down",
          ],
          correct: 1,
          explain: "CFCs are lighter than air and disperse globally — they do not sink to Antarctica specifically (A); the low-angle sun argument is also incorrect (polar regions receive less UV, not more). Ozone is not replenished by photosynthesis (C) — photosynthesis produces O₂, not O₃; ozone is produced in the stratosphere by UV breaking O₂ apart, not by biological processes. CFCs are not too heavy to disperse (D) — they are volatile organics and mix globally in 1–2 years after emission; direct reaction without UV is not the mechanism. The correct answer is B: at the surface, CFCs are inert because they are below the ozone layer that blocks UV; they survive intact for 50–100 years in the troposphere, slowly mixing into the stratosphere over years. In the stratosphere, UV radiation is intense enough to photodissociate CFC molecules, releasing chlorine atoms. Each Cl atom then participates in a catalytic cycle: Cl + O₃ → ClO + O₂, then ClO + O → Cl + O₂, with the Cl atom regenerated to destroy another O₃ molecule — each Cl atom destroys ~100,000 ozone molecules before being removed. The Antarctic ozone hole is specifically severe because during Antarctic winter, the polar stratosphere cools to below −78°C, forming polar stratospheric clouds (PSCs) of ice and nitric acid. Chemical reactions on PSC particle surfaces convert reservoir chlorine compounds (HCl, ClONO₂) into active Cl₂; when spring sunlight returns in August–September, Cl₂ is photodissociated into Cl atoms, which begin the catalytic destruction cycle. This is why the ozone hole appears each Antarctic spring.",
        },
        {
          q: "Aurora borealis and aurora australis produce spectacular light displays at high latitudes in the thermosphere. What physical process produces the auroral light, and why do auroras appear in different colors in different parts of the display?",
          a: [
            "The aurora is produced by the sun's light reflecting off ice particles in the polar mesosphere; different colors correspond to different ice crystal shapes and sizes that refract sunlight at different angles, similar to how prisms produce rainbows",
            "Charged solar wind particles follow Earth's magnetic field lines into polar regions and collide with thermospheric oxygen and nitrogen atoms at 100–300 km altitude, transferring energy that excites electrons to higher energy states; when these electrons return to lower states they emit photons of specific wavelengths; oxygen emits green (557.7 nm at 100–150 km) and red (630 nm above 200 km); nitrogen emits blue and purple",
            "The aurora is produced by electrical discharges in the ionosphere caused by the accumulation of static charge from solar wind; the different colors correspond to the different atmospheric pressures at different altitudes, which control the wavelength of photons emitted during the discharge",
            "Friction between rapidly moving solar wind particles and atmospheric gas molecules generates heat that causes the gas to glow; different gas molecules glow at different temperatures, producing different colors; the greens and reds correspond to oxygen glowing at different temperatures while the blues correspond to nitrogen at its characteristic temperature",
          ],
          correct: 1,
          explain: "Sunlight reflection off ice (A) cannot produce the aurora — ice-related optical phenomena (halos, pillars) occur in the troposphere and stratosphere, not at 100–300 km altitude; and the aurora is visible at night when the sun is below the horizon. Static charge accumulation and pressure-controlled wavelengths (C) misrepresent the mechanism; atmospheric pressure does affect line broadening, but color is determined by atomic and molecular electron transitions, which are fixed quantum properties of each atom regardless of pressure in the relevant range. Friction and heating to produce glowing (D) partially describes the macroscopic energy input but incorrectly identifies the emission mechanism — atoms glow not because they are heated to incandescence but because specific electron transitions produce photons at specific quantum-defined wavelengths. The correct answer is B: solar wind is a stream of charged particles (primarily electrons and protons) emitted from the sun. Earth's magnetic field deflects most of this stream, but near the poles, field lines converge and dip toward the surface, allowing charged particles to funnel down into the thermosphere. These particles collide with oxygen and nitrogen atoms and molecules, exciting electrons to higher energy levels. When electrons cascade back to their ground states, they emit photons at wavelengths determined by the electron energy gap. For oxygen, the green line (557.7 nm, the most common aurora color) comes from transitions at 100–150 km; the red line (630 nm, seen at the top of tall aurora) comes from oxygen at higher altitudes (>200 km) where the gas is too sparse for collisions to quench the excited state before emission. Nitrogen produces blue and purple emissions from different molecular transitions. The altitude distribution of these atomic species, combined with their quantum-specific emission lines, produces the characteristic color bands observed in auroral displays.",
        },
      ],
    },
  ],
}

export default atmosphereLayers
