import { Wind, Globe, Sun } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const solarRadiation: Lesson = {
  id: 'atmo-101-1-1-3',
  title: 'Solar Radiation and the Energy Budget',
  track: 'atm',
  trackName: 'Meteorology',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 140,
  description: "Every joule of energy that drives Earth's weather, climate, and life flows first through the sun's light. Understanding how this energy is distributed, reflected, and absorbed explains why the tropics are hot, why the poles are cold, and why Earth is habitable at all.",
  sources: [
    { org: 'NASA',     title: 'Earth Energy Budget',                                       url: 'https://science.nasa.gov/earth-science/earthexpeditions/energy-budget/' },
    { org: 'NOAA',     title: 'Earth Radiation Budget',                                    url: 'https://www.noaa.gov/' },
    { org: 'OpenStax', title: 'Introduction to Atmospheric Science, Ch. 3 (CC-BY 4.0)',   url: 'https://openstax.org/books/introduction-oceanography' },
    { org: 'UCAR',     title: 'The Sun and Earth\'s Energy Budget',                       url: 'https://scied.ucar.edu/learning-zone/atmosphere' },
    { org: 'NASA',     title: 'CERES Energy Budget Experiment',                            url: 'https://ceres.larc.nasa.gov/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Earth powered by starlight',
      body: `The sun delivers about 1,361 watts of energy to every square metre of space facing it — enough to run a hair dryer continuously. Yet Earth reflects roughly 30% of that straight back to space before it even reaches the surface. The question of where the rest goes, and why Earth isn't either frozen solid or roasting like Venus, is what this lesson answers.\n\nThe sun is 150 million kilometres away, yet it is the ultimate source of nearly all energy that drives Earth's climate, weather, and life. The solar constant — the average amount of solar energy reaching the top of the atmosphere — is approximately 1,361 watts per square metre. Over time, this energy input must be balanced by an equal output of energy back to space, or Earth's temperature would continuously rise or fall. This balance between incoming solar energy and outgoing radiation is Earth's **energy budget**, and understanding it is the foundation of climate science.

But the energy budget is not as simple as: energy in = energy out. The distribution of solar energy across Earth's surface is profoundly unequal. The tropics receive direct solar radiation year-round and absorb vastly more energy than they emit; the poles, tilted away from the sun for much of the year, absorb little but still emit significant infrared radiation. This permanent inequity of the energy budget between tropics and poles is the engine that drives all atmospheric and ocean circulation: the global wind and current systems are fundamentally attempts by Earth's fluid envelopes to redistribute energy from energy-surplus tropical regions to energy-deficit polar regions. Without this redistribution, the tropics would be far hotter and the poles far colder than they are.

The energy budget also involves the atmosphere itself as an active participant. The atmosphere is not simply transparent to solar energy — it absorbs some, reflects some, and transforms some. Clouds, aerosols, and greenhouse gases all modify the flow of energy through the climate system. The most important concept is **albedo**: the fraction of incoming solar radiation that is reflected back to space without being absorbed. Earth's average albedo is about 0.30 — it reflects 30% of incoming solar energy. Changes in albedo (from ice sheets melting, cloud cover changing, or land use change) are among the most powerful feedbacks in the climate system.`,
      keyTerms: [
        { term: 'Solar constant',        def: 'The amount of solar radiation per unit area reaching the top of Earth\'s atmosphere at Earth\'s mean orbital distance: ~1,361 W m⁻². Not truly constant — varies slightly (~0.1%) over the 11-year solar cycle. The effective value for global average calculations is divided by 4 (to distribute over a sphere), giving ~340 W m⁻².' },
        { term: 'Albedo',                def: 'The fraction of incident solar radiation that a surface reflects. Fresh snow: 0.8–0.9 (reflects 80–90%). Ocean: 0.06 (reflects 6%). Forest: 0.1–0.2. Earth\'s average planetary albedo: ~0.30. High-albedo surfaces (ice, clouds) return more energy to space; low-albedo surfaces (ocean, forest) absorb more. Changes in albedo drive powerful climate feedbacks.' },
        { term: 'Insolation',            def: 'Incoming solar radiation at a given location and time. Varies with latitude (sun angle), season (tilt of Earth\'s axis), time of day, and atmospheric conditions. The tropics receive high insolation year-round; polar regions receive low insolation, especially in winter. Insolation is the primary control on surface temperature distribution.' },
        { term: 'Blackbody radiation',   def: 'All objects emit electromagnetic radiation based on their temperature, described by the Stefan-Boltzmann law (power ∝ T⁴) and Wien\'s displacement law (peak wavelength ∝ 1/T). The sun (~5,778 K) emits mostly visible and near-IR light (peak ~0.5 μm). Earth (~288 K) emits entirely in the infrared (peak ~10 μm). These two very different spectra allow the atmosphere to absorb Earth\'s outgoing IR selectively while being largely transparent to incoming solar visible light.' },
        { term: 'Energy balance',        def: 'The equilibrium state in which outgoing longwave radiation (OLR) from Earth exactly equals incoming absorbed solar radiation. At equilibrium, Earth\'s temperature is stable. If more energy enters than leaves (positive imbalance), Earth warms. Current measured energy imbalance: ~0.3–0.9 W m⁻² due to increased greenhouse gases, driving ongoing warming.' },
      ],
    },
    {
      type: 'concept',
      title: 'How solar energy flows through the climate system',
      body: `**The geometry of solar heating.** The sun delivers ~1,361 W m⁻² to the sunward face of Earth (the solar constant), but this energy is distributed over Earth's spherical surface. The effective average insolation is 1,361/4 ≈ 340 W m⁻², because the cross-sectional area intercepting sunlight is πr², while the total surface area is 4πr². Of these 340 W m⁻², about 30% (102 W m⁻²) is reflected back to space by clouds, ice, and land surfaces (**albedo**), leaving about 238 W m⁻² absorbed. For energy balance, Earth must emit 238 W m⁻² back to space as infrared radiation. Using the Stefan-Boltzmann law, this corresponds to an effective radiating temperature of ~255 K (−18°C). Earth's actual average surface temperature is ~288 K (+15°C) — the 33°C difference is the **greenhouse effect**, provided by naturally occurring greenhouse gases.

**Latitudinal energy imbalance and atmospheric transport.** Insolation at the equator can exceed 400 W m⁻² on a clear day, while at the poles it drops to nearly zero in winter. But temperatures are not as extreme as they would be without energy transport — the poles are cold but not as cold as the moon's dark side (−173°C). This is because the atmosphere and ocean continuously transfer heat from the tropics toward the poles. The atmosphere carries about 5 petawatts (5×10¹⁵ W) of heat poleward; the ocean carries another 2 petawatts. The primary atmospheric mechanisms are the large-scale circulation cells (Hadley, Ferrel, and Polar cells) and transient weather systems (midlatitude cyclones) that carry warm tropical air poleward in their warm sectors. This poleward heat transport is one of the reasons life is possible over most of Earth's surface — without it, the tropics would be 10–20°C hotter and the poles 20–30°C colder.

**Solar radiation spectrum and Earth's response.** The sun emits radiation across a spectrum from X-rays through visible light to infrared, with peak emission in the visible (yellow-green, ~0.5 μm). Earth's atmosphere is mostly transparent to this incoming visible radiation, allowing it to reach the surface. At the surface, visible light is absorbed and re-emitted as lower-energy infrared radiation (peak ~10 μm) because the surface is much cooler than the sun. This switch from visible to infrared wavelengths is the key to the greenhouse effect: greenhouse gases are transparent to incoming visible light but absorb outgoing infrared radiation. The atmosphere thus acts as a one-way gate: sunlight passes through, warms the surface, and the resulting infrared radiation is trapped.

**The albedo and its climate role.** Albedo profoundly affects how much solar energy the Earth system absorbs. Fresh snow and ice have albedos of 0.8–0.9; open ocean has an albedo of ~0.06; forests are 0.1–0.2; deserts 0.2–0.35; thick clouds 0.6–0.9. Earth's mean planetary albedo of ~0.30 is dominated by cloud reflection (~20% of the 30%). This is why changes in cloud cover are one of the largest sources of uncertainty in climate projections. The **ice-albedo feedback** is one of the most important climate feedbacks: as ice melts due to warming, it exposes darker ocean or land surface (lower albedo), which absorbs more solar energy, causing more warming and more melting. This positive feedback amplifies warming in polar regions and contributed to past glacial terminations.

**Current energy imbalance.** Earth's energy budget is not in perfect balance today. NASA's CERES satellite instruments measure a current imbalance of approximately +0.3–0.9 W m⁻² — more energy entering Earth's system than leaving it. This imbalance is caused by the increase in greenhouse gases since industrialisation: they have reduced the outgoing longwave radiation, so the planet must warm to restore balance. The ocean absorbs most of this excess energy (~90%), causing measurable ocean heat content increase. The remaining energy goes into melting ice and warming the land surface and atmosphere. The imbalance is small in absolute terms (~0.3% of incoming solar energy) but represents an enormous power input to the climate system: about 17 times the total electricity generation capacity of the entire human civilisation.`,
      cards: [
        {
          name: 'The Energy Budget: Numbers',
          icon: Sun,
          color: BRAND.gold,
          desc: 'Solar constant: 1,361 W m⁻². Divided by 4 for spherical Earth: 340 W m⁻² average. Reflected by albedo (30%): 102 W m⁻². Absorbed: 238 W m⁻². Effective radiating temperature (from Stefan-Boltzmann): 255 K (−18°C). Actual surface temperature: 288 K (+15°C). Greenhouse effect: +33°C. Current anthropogenic imbalance: +0.3–0.9 W m⁻² (net heat gain, mostly into ocean).',
          examples: 'CERES satellite: measures Earth\'s radiation budget continuously since 2000 · Moon comparison: no atmosphere, same distance from sun, but surface swings from 127°C (day) to −173°C (night) — no heat redistribution · Venus: runaway greenhouse effect, surface 465°C despite reflecting 70% of sunlight',
        },
        {
          name: 'Albedo and Climate Feedbacks',
          icon: Globe,
          color: BRAND.jade,
          desc: 'Fresh snow: 0.8–0.9 · Ice: 0.6–0.8 · Cloud (thick): 0.6–0.9 · Desert: 0.2–0.35 · Forest: 0.1–0.2 · Ocean: 0.06. Earth mean: ~0.30. Ice-albedo feedback: ice melts → dark ocean exposed → more absorption → more warming (positive feedback, amplifies polar changes). Cloud feedback: major uncertainty — low clouds cool (high albedo); high cirrus clouds warm (trap IR).',
          examples: 'Arctic sea ice loss: one of largest active albedo feedbacks on Earth · Deforestation in tropics: replaces dark forest (albedo 0.1) with lighter crops/pasture (0.15–0.2), slight regional cooling effect · Fresh snowfall on a sunny day: up to 90% of sunlight reflected, explaining cold "clear blue sky" days after snowfall',
        },
        {
          name: 'Latitudinal Imbalance and Heat Transport',
          icon: Wind,
          color: BRAND.accent,
          desc: 'Tropics: energy surplus (absorb more than emit); poles: energy deficit (emit more than absorb). Requires continuous poleward transport of ~7 petawatts. Atmosphere carries ~5 PW (Hadley cells + midlatitude weather systems); ocean carries ~2 PW (Gulf Stream, Kuroshio). Without transport: tropics +20°C warmer, poles −20–30°C colder. Heat transport is why midlatitude weather is inherently variable.',
          examples: 'Gulf Stream: transports ~1.3 PW poleward, keeps northwestern Europe ~5–10°C warmer than equivalent latitudes without it · ITCZ (Intertropical Convergence Zone): where Hadley cell rising air drives tropical rains — follows the sun northward and southward seasonally · Polar jet stream: driven by the sharp temperature gradient between tropical and polar air',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: "Earth's effective radiating temperature — calculated from the amount of solar energy it absorbs and the Stefan-Boltzmann law — is −18°C, yet Earth's actual average surface temperature is +15°C. What explains the 33°C discrepancy?",
          a: [
            "Earth's core releases significant heat through the crust; this geothermal heat adds to the solar input and explains why Earth's surface is warmer than the simple solar balance predicts; the 33°C difference is the combined effect of solar warming and geothermal heating",
            "The calculation incorrectly assumes Earth is a perfect blackbody; in reality, Earth reflects more radiation than a blackbody would, so it absorbs less solar energy than assumed; correcting for this discrepancy raises the calculated surface temperature to the observed +15°C",
            "Greenhouse gases (primarily water vapour, CO₂, and methane) are largely transparent to incoming shortwave solar radiation but absorb the infrared radiation emitted by the surface; this intercepted energy is re-emitted in all directions, warming the surface above what it would reach if the atmosphere were transparent",
            "The 33°C discrepancy reflects the difference between the global average temperature and the equatorial temperature; the calculation gives a pole-to-equator average that is lower than the equatorial temperature, which is actually +15°C; there is no real discrepancy once the averaging method is corrected",
          ],
          correct: 2,
          explain: "Geothermal heat (A) is real but negligible for global climate — Earth's internal heat flux is ~0.09 W m⁻², compared to the ~240 W m⁻² of absorbed solar radiation; it contributes less than 0.04% of Earth's surface energy and cannot account for a 33°C difference. Earth's albedo (B) is already accounted for in calculating the absorbed solar radiation (238 W m⁻² after reflection), so the discrepancy is not from the blackbody assumption — the 255 K already incorporates albedo. The averaging explanation (D) is incorrect — the effective radiating temperature of −18°C is a global average, as is the +15°C surface temperature; both are properly area-weighted global means, and the 33°C difference is real and not an averaging artefact. The correct answer is C: the greenhouse effect. The surface absorbs solar radiation and warms. It emits this energy as infrared radiation (longwave). Greenhouse gases — primarily water vapour (50%), CO₂ (20%), clouds (25%), and other gases — absorb much of this outgoing IR rather than letting it escape directly to space. The absorbed energy is then re-emitted in all directions, including back toward the surface. This downwelling IR (back-radiation) adds to the surface's energy input, warming it further. The surface must reach a higher temperature than 255 K to emit enough total IR to balance the incoming solar energy, because some of the emitted IR is recycled. The result: Earth's actual surface temperature is ~33°C warmer than it would be with a transparent atmosphere.",
        },
        {
          q: "Earth's measured energy imbalance is approximately +0.6 W m⁻² — more energy entering the system than leaving. This sounds small. Why is even this tiny imbalance climatically significant, and where does most of the excess energy go?",
          a: [
            "The +0.6 W m⁻² imbalance is not actually small — it corresponds to roughly 17 times global electricity generation capacity when summed over Earth's entire surface; most of the excess energy (about 90%) is absorbed by the ocean, measurably increasing ocean heat content at depth, while the remainder warms land, atmosphere, and melts ice",
            "The imbalance is small and of limited consequence; the climate system has natural buffers (ocean currents, cloud feedbacks) that efficiently dissipate the excess; the measured imbalance is within the margin of error of satellite instruments and may not represent a genuine energy surplus",
            "The excess energy goes primarily into warming the atmosphere, which is why global surface air temperatures are rising; the ocean absorbs little of this excess because its high heat capacity means it can absorb large amounts of energy without temperature change, which effectively neutralises the atmospheric warming",
            "The 0.6 W m⁻² imbalance corresponds to an immediate 0.6°C of surface warming per year; it is significant because even this small annual increment compounds to produce 6°C of warming per decade, which aligns with observed warming trends",
          ],
          correct: 0,
          explain: "The imbalance is not within instrument error (B) — CERES measurements have been cross-calibrated against Argo float ocean heat content measurements and are robust; the imbalance is real and has been growing. The ocean does not neutralise warming by having high heat capacity (C) — it is true that the ocean can absorb large amounts of energy without rapid temperature change, but this is the point: it is storing the excess energy, not neutralising it; the ocean has warmed significantly, and the stored heat will influence climate for centuries. The calculation in D is completely wrong — 0.6 W m⁻² does not translate to 0.6°C of warming per year; the actual warming rate is ~0.2°C per decade, and the relationship between W m⁻² and temperature is not a simple 1:1 ratio per year. The correct answer is A: 0.6 W m⁻² averaged over Earth's entire surface area of 5.1×10¹⁴ m² gives a total power imbalance of ~3×10¹⁴ W = 300 terawatts. Global electricity generation capacity is ~8 terawatts. So the energy imbalance is ~37× global electricity capacity (more than the '17×' estimate, which used a slightly different imbalance figure). About 90% of this excess energy is taken up by the ocean, measurably increasing ocean heat content through thousands of metres depth; the remainder (10%) is distributed among land warming, atmospheric warming, and melting ice (glaciers, sea ice, ice sheets). The ocean's enormous heat capacity means it can absorb this energy with relatively modest temperature change, but the process is not reversible on human timescales.",
        },
        {
          q: "The tropics receive far more solar energy per year than the poles, yet Earth's temperature gradient from equator to pole is far less extreme than it would be on an airless, oceanless planet. What process moderates this gradient, and what drives it?",
          a: [
            "Earth's rotation distributes solar energy evenly around the globe; without rotation, one hemisphere would face the sun permanently and overheat while the other froze; the daily rotation of Earth is the primary mechanism moderating the equator-to-pole temperature gradient",
            "The latitudinal temperature gradient is moderated by poleward heat transport by the atmosphere and oceans, which together carry ~7 petawatts of energy from the energy-surplus tropics to the energy-deficit polar regions; this transport is driven by the temperature and pressure difference between tropics and poles, and operates through large-scale wind patterns (Hadley, Ferrel, and Polar cells), midlatitude weather systems, and ocean currents (Gulf Stream, Kuroshio)",
            "Solar radiation scattered by clouds and aerosols is redirected from the tropics to the poles, evening out the latitudinal energy distribution without requiring atmospheric or ocean circulation; this scattering, not heat transport, is the primary reason the poles are not colder than they would otherwise be",
            "The tropics absorb more solar energy but also lose more through evaporation; the latent heat carried by water vapour evaporating in the tropics is released when precipitation falls at the poles, making polar regions warmer than they would be from solar heating alone",
          ],
          correct: 1,
          explain: "Earth's rotation (A) does distribute solar energy around the globe on a daily timescale, preventing one side from becoming permanently scorched, but it does not transport energy from equator to pole; the tropics still receive more annual insolation than the poles regardless of rotation. Radiation scattering by clouds (C) redistributes energy somewhat but cannot deliver 7 petawatts of energy from tropics to poles; scattering primarily affects which way photons go (reflected back to space vs. reaching the surface) rather than transporting heat meridionally. Precipitation at the poles (D) partially describes the water cycle component of latent heat transport, but polar precipitation is minimal (the polar deserts are among the driest places on Earth); the bulk of latent heat from tropical evaporation is released in the tropics and subtropics during precipitation, not at the poles. The correct answer is B: the tropical regions have a persistent energy surplus (absorb more solar energy than they emit as IR), while polar regions have an energy deficit (emit more IR than they absorb from the sun). Thermodynamics requires heat to flow from hot to cold, from surplus to deficit. This is accomplished by the global atmospheric circulation (primarily the Hadley cells in the tropics and extratropical weather systems at midlatitudes, together carrying ~5 PW) and ocean currents (Gulf Stream in the North Atlantic, Kuroshio in the North Pacific, the Antarctic Circumpolar Current, carrying ~2 PW). Without this transport, models show tropical temperatures would be 10–20°C higher and polar temperatures 20–30°C lower than observed — a much harsher world for life outside the equatorial belt.",
        },
      ],
    },
  ],
}

export default solarRadiation
