import { Waves, Wind, Globe } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const oceanCirculation: Lesson = {
  id: 'ocea-101-1-2-3',
  title: 'Ocean Circulation: Wind Gyres and Deep Currents',
  track: 'oce',
  trackName: 'Oceanography',
  level: 'Beginner',
  duration: '13 min',
  xpReward: 150,
  description: "Two great engines move the ocean: wind on the surface and density differences at depth. Together they redistribute heat, nutrients, and carbon across the entire planet.",
  sources: [
    { org: 'NOAA',     title: 'Ocean Currents',                                          url: 'https://oceanservice.noaa.gov/education/tutorial_currents/welcome.html' },
    { org: 'NOAA',     title: `What drives the ocean\'s surface currents?`,              url: 'https://oceanservice.noaa.gov/education/tutorial_currents/02wind1.html' },
    { org: 'NASA',     title: 'Physical Oceanography Distributed Active Archive Center', url: 'https://podaac.jpl.nasa.gov/' },
    { org: 'OpenStax', title: 'Introduction to Oceanography, Ch. 8 (CC-BY 4.0)',          url: 'https://openstax.org/books/introduction-oceanography' },
    { org: 'NOAA AOML', title: 'Surface Drifter Program — Ocean Circulation Data',      url: 'https://www.aoml.noaa.gov/phod/dac/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Moving water',
      body: `If you could drain the ocean and watch the path water has taken over the last thousand years, you would see an intricate web of surface rivers and deep countercurrents linking every ocean basin on Earth. On the surface, wind-driven gyres spin clockwise in the Northern Hemisphere and counterclockwise in the Southern Hemisphere — enormous rotating systems of current that encircle the ocean basins, driven by the same atmospheric pressure patterns that govern global weather. Embedded within these gyres are the great western boundary currents: the Gulf Stream (North Atlantic), the Kuroshio (North Pacific), the Brazil Current (South Atlantic), the East Australian Current (South Pacific), and the Agulhas (Indian Ocean). These narrow, fast, warm rivers of ocean water carry enormous quantities of heat poleward, moderating the climate of the land masses they pass.

Beneath the surface gyres, a slower but vaster system moves water on a completely different timescale. Cold, dense water formed in the polar regions sinks and spreads through the ocean at depths of 1,000–5,000 m (3,281–16,405 ft), eventually upwelling somewhere far away and returning to the surface. This **thermohaline circulation** involves roughly 1,500 times more water than the Amazon River, moves at speeds a thousand times slower than surface currents, and operates on timescales of centuries to millennia.

Understanding ocean circulation matters for reasons far beyond academic curiosity. The Gulf Stream and its extension, the North Atlantic Current, carry enough heat to warm Northwestern Europe by 5–10°C (41–50°F) above what it would otherwise be at those latitudes. The Humboldt Current off South America, an eastern boundary upwelling system, drives some of the world's most productive fisheries. And changes to ocean circulation — already occurring as the planet warms — are among the most consequential potential climate feedbacks of this century.`,
      keyTerms: [
        {
          term: 'Subtropical gyre',
          def: 'A large, wind-driven system of ocean surface currents circling an ocean basin in the subtropics. Driven by trade winds and westerlies. Rotates clockwise in the Northern Hemisphere and counterclockwise in the Southern Hemisphere. The centre of a subtropical gyre is convergent and oligotrophic (low in nutrients). Five major gyres: North/South Atlantic, North/South Pacific, Indian Ocean.',
        },
        {
          term: 'Western boundary current',
          def: 'A fast, narrow, deep, warm ocean current on the western edge of subtropical gyres, flowing poleward. Forms because Sverdrup transport pushes water toward the western boundary where it intensifies. Examples: Gulf Stream (North Atlantic), Kuroshio (North Pacific), Brazil Current (South Atlantic), East Australian Current (South Pacific), Agulhas (Indian Ocean). Maximum speeds: 1–2 m/s; widths: 50–100 km (31–62 mi); depths: 500–1,000 m (1,640–3,281 ft).',
        },
        {
          term: 'Ekman transport',
          def: 'The net motion of water driven by wind, directed 90° to the right of the wind direction in the Northern Hemisphere (and to the left in the Southern Hemisphere) due to the Coriolis effect. Integrated over the Ekman layer (~100 m (328 ft) depth), water transport is perpendicular to the wind. Critical for understanding upwelling (where Ekman transport moves surface water away from the coast, drawing deep water up) and gyre dynamics.',
        },
        {
          term: 'Upwelling',
          def: 'The rising of deep, cold, nutrient-rich water to replace surface water moved away by wind-driven Ekman transport. Coastal upwelling occurs along the eastern boundaries of ocean basins where trade winds drive Ekman transport offshore (equatorward winds on the west side of the continent). Equatorial upwelling occurs along the equator. Upwelling zones are among the most biologically productive areas of the ocean.',
        },
        {
          term: 'El Niño–Southern Oscillation (ENSO)',
          def: "A coupled ocean-atmosphere climate pattern centred in the tropical Pacific. In La Niña (cool phase), trade winds are strong, the western Pacific is warm, and upwelling is vigorous along the South American coast. In El Niño (warm phase), trade winds weaken, warm water spreads eastward, suppressing upwelling; this reduces Pacific fisheries productivity and alters precipitation patterns worldwide. Cycles every 2–7 years.",
        },
      ],
    },
    {
      type: 'concept',
      title: 'Wind-driven gyres, western intensification, and global upwelling',
      body: `**Wind-driven surface circulation.** The primary driver of surface ocean circulation is wind stress — the friction exerted by moving air on the ocean surface. Global wind patterns are not random: they are organised by the differential heating of the atmosphere between the equator and poles. **Trade winds** blow from the northeast (Northern Hemisphere) and southeast (Southern Hemisphere) toward the equator. **Westerlies** blow from west to east in mid-latitudes (30–60°). **Polar easterlies** blow from east to west at high latitudes. These persistent wind patterns drive the ocean's surface circulation through a combination of direct wind forcing and the **Coriolis effect** — the deflection of moving objects (including water and air) to the right in the Northern Hemisphere and to the left in the Southern Hemisphere, due to Earth's rotation.

**Ekman transport and gyre formation.** When wind blows over the ocean surface, it drives a spiral of currents that rotate with depth — the **Ekman spiral**. The integrated effect across the top ~100 m (328 ft) of the ocean (the Ekman layer) is that water moves at 90° to the wind direction: to the right in the Northern Hemisphere, to the left in the Southern Hemisphere. In the subtropical gyres, the trade winds (blowing westward in the tropics) cause northward Ekman transport, while the westerlies (blowing eastward at mid-latitudes) cause southward Ekman transport. This convergence of water toward the centre of the gyre raises sea level slightly in the gyre interior and causes the water to flow downward (**downwelling**) — which is why the centre of subtropical gyres is depressed below the thermocline and nutrient-poor. The pressure gradient created by the raised centre drives the circulation of the gyre itself.

**Western boundary intensification.** An important and non-obvious feature of ocean gyres is that they are asymmetric: currents on the western edge of each gyre (the Gulf Stream in the North Atlantic, the Kuroshio in the North Pacific) are much faster, narrower, and deeper than currents on the eastern edge. This **western intensification** results from the variation of the Coriolis effect with latitude — a consequence of the spherical shape of Earth that makes circulation more efficient on the western sides of basins. Western boundary currents carry warm water poleward in concentrated streams. The Gulf Stream, for example, transports approximately 30 million cubic metres of water per second (30 Sv, where 1 Sverdrup = 10⁶ m³/s) — more than 1,500 times the flow of the Amazon. It carries heat equivalent to about 10% of incoming solar radiation from the tropics to the North Atlantic. As it flows north and east, it releases this heat to the atmosphere over Northwest Europe, profoundly moderating that region's climate.

**Eastern boundary currents and upwelling.** On the eastern edges of subtropical gyres, currents flow equatorward — these are the cold **eastern boundary currents**: the California Current (North Pacific), the Canary Current (North Atlantic), the Humboldt/Peru Current (South Pacific), the Benguela Current (South Atlantic), and the Leeuwin Current (Indian Ocean, anomalously warm). Where these currents flow along the coast, **equatorward winds** cause Ekman transport directed offshore (away from the coast), drawing cold, nutrient-rich water up from depth to replace the surface water moved away — **coastal upwelling**. The Humboldt Current system, driven by persistent South Pacific trade winds along the coast of Peru and Chile, is the most productive marine fishery system in the world — at times producing more fish biomass per unit area than anywhere else on Earth. It supports the anchovy fishery that feeds much of the world's aquaculture industry. **El Niño events** — when trade winds weaken and warm water floods east across the equatorial Pacific — suppress this upwelling, causing massive fishery collapses with global economic repercussions.

**Equatorial circulation.** At the equator, the Coriolis effect is zero. Trade winds blow westward along the equator, driving westward surface flow. However, there is a narrow, shallow **Equatorial Counter-Current** flowing eastward between the trade wind belts, driven by the pressure gradient created by warm water piling up in the western Pacific. Beneath the surface, the **Equatorial Undercurrent** (Cromwell Current) flows strongly eastward at approximately 100–200 m (328–656 ft) depth, carrying cool, nutrient-rich water to the eastern equatorial Pacific. Together, these currents set up the conditions for equatorial upwelling — where Ekman transport in both hemispheres (each directed away from the equator due to Coriolis deflection) diverges at the equator, drawing cold water to the surface.

**The biological pump and ocean circulation.** Ocean circulation is not only important for heat transport — it is the engine of the **biological pump**, the mechanism by which CO₂ is absorbed at the surface, incorporated into organic matter by phytoplankton, and exported as sinking particles to the deep ocean. Upwelling zones supply nutrients to phytoplankton; phytoplankton fix CO₂; when they die, they sink; CO₂ is sequestered at depth. Without ocean circulation delivering nutrients to the surface, this pump would fail. Ocean biology removes approximately 10 Gt of carbon per year from the surface ocean via the biological pump — roughly equivalent to current annual global fossil fuel emissions. Changes to ocean circulation therefore directly affect the ocean's capacity to absorb anthropogenic CO₂.`,
      cards: [
        {
          name: 'Surface Gyres',
          icon: Wind,
          color: BRAND.jade,
          desc: 'Five subtropical gyres: N Atlantic, S Atlantic, N Pacific, S Pacific, Indian Ocean. CW in NH, CCW in SH. Centre: convergent, warm, nutrient-poor, clear blue water (oligotrophic). Driven by trade winds + westerlies + Coriolis. Western edges: fast, narrow, warm (Gulf Stream, Kuroshio, Brazil, EAC, Agulhas). Eastern edges: slow, broad, cold, upwelling (California, Canary, Humboldt, Benguela).',
          examples: 'Gulf Stream: 30 Sv, speeds up to 2 m/s, transports 1.3 PW of heat northward · North Pacific Gyre: contains the Great Pacific Garbage Patch · Sargasso Sea: calm centre of N Atlantic Gyre, no land coasts',
        },
        {
          name: 'Upwelling Systems',
          icon: Waves,
          color: BRAND.accent,
          desc: 'Coastal upwelling: equatorward wind → Ekman transport offshore → cold, nutrient-rich deep water rises to replace it. Equatorial upwelling: trade winds → Ekman divergence at equator → cold water rises. Key upwelling zones: California, Humboldt, Benguela, Canary, Somalia. Upwelling water: cold, nutrient-rich, high CO₂, low O₂. Phytoplankton blooms → large fisheries. ENSO suppresses Humboldt upwelling → anchovy collapses.',
          examples: 'Humboldt: ~20% of world fish catch from 1% of ocean · California upwelling: supports salmon, sardine, squid · Benguela: anchovy, sardine off SW Africa · Mombasa upwelling: seasonal, driven by monsoon winds',
        },
        {
          name: 'ENSO',
          icon: Globe,
          color: BRAND.gold,
          desc: 'La Niña: strong trade winds, warm pool W Pacific, vigorous Humboldt upwelling, cool eastern Pacific, dry California, wet Australia. El Niño: weakened trade winds, warm water moves east, suppressed upwelling, floods Peru/Ecuador, droughts in Australia, Indonesia, India. Cycle: every 2–7 years. Teleconnections: affects rainfall globally. 1997–98 El Niño: +0.8°C (33°F) global temperature anomaly, >$35 billion economic damage.',
          examples: '1997–98 El Niño: strongest of 20th century, Peru anchovy catch collapsed · 2010–11 La Niña: Queensland floods, East Africa drought · 2015–16 El Niño: global coral bleaching event',
        },
      ],
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Western boundary currents like the Gulf Stream are much faster, narrower, and deeper than eastern boundary currents in the same gyre. What physical mechanism produces this asymmetry, known as western boundary intensification?',
          a: [
            'Western boundary currents are channelled by the steep continental shelves on the western sides of ocean basins, which funnel the gyre circulation into a narrow, deep stream; eastern boundaries lack comparable topographic funnelling',
            'The Coriolis effect is stronger at higher latitudes, and the western edges of gyres flow poleward (to higher latitudes) while the eastern edges flow equatorward; the higher-latitude Coriolis effect accelerates western boundary currents',
            'Western intensification arises from the variation of the Coriolis effect with latitude (the beta effect): the mathematical solution to wind-driven circulation on a rotating sphere requires that vorticity input from wind be dissipated primarily on the western boundary, concentrating the return flow into a narrow, fast current on the west side of the basin',
            'Trade winds blow predominantly westward and directly accelerate water on the western side of the basin; eastern boundary currents flow against the wind and are therefore slower',
          ],
          correct: 2,
          explain: 'Continental shelf topography (A) does play some role in guiding boundary currents, but it is not the fundamental cause of western intensification — the asymmetry would exist even in an ocean with no shelf topography, as demonstrated by theoretical ocean models with flat bottoms. The Coriolis effect being stronger at higher latitudes (B) is true, but it applies to both eastern and western boundary currents; the explanation does not specifically predict western intensification. Trade winds blowing westward (D) is correct that trade winds drive the circulation, but this drives the equatorial current, not the western boundary current; and the net wind-driven transport is what creates the gyre; the gyre would be symmetric if it were simply a direct response to local wind. The correct answer is C: the beta effect (the change in the Coriolis parameter with latitude) means that ocean gyres conserve a quantity called **potential vorticity** as they circulate; the mathematical solution to the Sverdrup balance (which describes the interior gyre circulation driven by wind) requires a return flow that cannot be satisfied by the interior alone — it must be concentrated in a narrow western boundary current; this is a fundamental result of geophysical fluid dynamics and applies to any rotating sphere with wind forcing, producing fast, narrow western boundary currents regardless of the specific geometry of coastlines.',
        },
        {
          q: `Coastal upwelling along the Humboldt Current system supports some of the world\'s most productive fisheries. What exactly happens during an El Niño event to suppress this upwelling, and what is the direct biological consequence?`,
          a: [
            'During El Niño, the Humboldt Current reverses direction and flows southward instead of northward; this reversal brings warm oligotrophic water from the tropics to replace the normally cold, nutrient-rich coastal water',
            'During El Niño, atmospheric pressure decreases over the eastern Pacific, which reduces the density of seawater at the surface and prevents upwelling from breaking through to the surface; biological productivity declines because phytoplankton cannot survive in less dense surface water',
            'During El Niño, trade winds along the South American coast weaken; reduced Ekman transport means less offshore displacement of surface water; without surface water being removed, cold deep water is not drawn up to replace it; the surface remains covered by warm, nutrient-poor water; phytoplankton productivity collapses and the fish populations that depend on them crash',
            'El Niño causes heavy rainfall over the eastern Pacific, which freshens the surface ocean along the South American coast; the fresh surface layer forms a density barrier that blocks upwelling; phytoplankton die because freshwater is toxic to marine organisms',
          ],
          correct: 2,
          explain: 'The Humboldt Current does not reverse during El Niño (A) — it still flows equatorward, but its intensity and associated upwelling are greatly reduced; the change is not a reversal of current direction. Atmospheric pressure changes affecting seawater density (B) is not how upwelling suppression works; changes in barometric pressure have negligible effects on seawater density; the mechanism is through wind stress changes. Freshwater toxicity (D) is incorrect — marine phytoplankton are salt-tolerant by evolution and freshwater is not toxic to them; reduced salinity does reduce density and can affect stratification, but rainfall is not the primary mechanism of upwelling suppression during El Niño. The correct answer is C: normally, persistent equatorward trade winds along the South American coast drive Ekman transport directed offshore (westward) in the Southern Hemisphere; this removes surface water from the coast, and cold, nutrient-rich water from 50–200 m (164–656 ft) depth wells up to replace it; during El Niño, the Walker Circulation weakens — trade winds diminish across the equatorial Pacific; along the South American coast, reduced wind stress means less Ekman offshore transport; without the offshore removal of surface water, upwelling weakens or ceases; the coastal surface is covered by warm, nutrient-poor water that has spread eastward from the western Pacific warm pool; phytoplankton blooms collapse because there are no nutrients in the warm surface water; anchovies, sardines, and other fish that depend on phytoplankton lose their food base, migrate away, or die in enormous numbers.',
        },
        {
          q: 'The biological pump removes approximately 10 Gt of carbon per year from the surface ocean. How does ocean circulation enable this pump, and what would happen to ocean carbon uptake if circulation stopped?',
          a: [
            'Ocean circulation physically transports dissolved CO₂ from the surface to the deep ocean through downwelling currents; without circulation, dissolved CO₂ would remain in surface water and be re-emitted to the atmosphere',
            'Ocean circulation keeps the surface ocean cold, and cold water dissolves more CO₂; without circulation, the surface would warm and release CO₂',
            'Upwelling delivers nutrients (nitrate, phosphate, iron) to the sunlit surface layer, enabling phytoplankton growth; phytoplankton fix CO₂ into organic carbon; their dead cells and fecal pellets sink into deep water, exporting carbon out of contact with the atmosphere; without upwelling to supply nutrients, phytoplankton productivity would collapse and the biological pump would fail',
            'The biological pump depends on circulation to deliver oxygen to deep water for the bacteria that break down sinking organic matter; without oxygen delivery, organic carbon would accumulate on the seafloor as undecomposed matter, which would actually sequester more carbon than the current pump',
          ],
          correct: 2,
          explain: `Physical transport of dissolved CO₂ by downwelling (A) does occur — this is called the solubility pump and is a real mechanism — but it is not the biological pump; the biological pump specifically refers to the biological transformation of CO₂ into organic particles that sink. Temperature and CO₂ solubility (B) is a real effect (the solubility pump) but is not the mechanism of the biological pump. Oxygen delivery for bacteria (D) is partially true — deep ocean oxygenation does depend on circulation — but the biological pump does not require oxygen for its carbon export function; organic particles sink whether or not deep water is oxygenated, and in anoxic conditions they actually decompose more slowly, but this is not the primary mechanism. The correct answer is C: the biological pump operates through photosynthesis in the surface ocean, where phytoplankton use sunlight and nutrients to fix CO₂ into organic molecules; but phytoplankton in the sunlit surface layer quickly exhaust the available nutrients (nitrate, phosphate, iron), and productivity would collapse if there were no nutrient supply; upwelling brings deep, nutrient-rich water to the surface, continuously replenishing the supply; without ocean circulation, upwelling would cease, the surface layer would become nutrient-depleted, phytoplankton growth would be minimal, and the biological pump would effectively stop; this would drastically reduce the ocean\'s capacity to absorb anthropogenic CO₂, accelerating atmospheric accumulation.`,
        },
        {
          q: 'In the Northern Hemisphere, surface wind blows southward along the western coast of a continent. In which direction does the net Ekman transport drive surface water, and what oceanographic consequence follows for the coastal water column?',
          a: [
            'Ekman transport drives water southward in the same direction as the wind; water piles up against the coast, deepening the thermocline and suppressing nutrient delivery to the surface',
            'Ekman transport drives water 90° to the right of the wind direction in the Northern Hemisphere — in this case, offshore (westward, away from the coast); removing surface water draws cold, nutrient-rich water upward from depth to replace it, producing coastal upwelling',
            'Ekman transport drives water 90° to the left of the wind direction in the Northern Hemisphere — in this case, onshore (eastward, toward the coast); this piles up warm water against the coast, producing a coastal downwelling that depresses the thermocline',
            'Ekman transport acts in the same direction as the wind in coastal regions because the Coriolis effect is cancelled by friction with the continental shelf; southward wind therefore produces a southward surface current with no cross-shore component',
          ],
          correct: 1,
          explain: 'Ekman transport in the same direction as the wind (A) is incorrect — the defining feature of Ekman transport is that the net water motion is 90° from the wind, not parallel to it; water does not pile against the coast from southward wind in the Northern Hemisphere. Leftward deflection (C) describes the Southern Hemisphere rule, not the Northern Hemisphere; in the Northern Hemisphere, the Coriolis effect deflects moving objects (including wind-driven water) to the right, not the left; leftward deflection would produce onshore transport, which is the opposite of the upwelling scenario. Coriolis cancellation by shelf friction (D) is incorrect — the Coriolis effect operates throughout the ocean regardless of proximity to a continental shelf; coastal boundaries modify current structure but do not cancel the Coriolis deflection that governs net Ekman transport. The correct answer is B: in the Northern Hemisphere, any moving fluid is deflected 90° to the right of its direction of motion by the Coriolis effect; when wind blows southward along a west coast, Ekman transport integrates to a net offshore (westward) direction; as this surface water moves away from the coast, cold, nutrient-rich water from depths of 50–200 m (164–656 ft) rises to replace it — this is coastal upwelling; the upwelled water fuels phytoplankton blooms, supports high fisheries productivity, and has a lower sea surface temperature than surrounding water; this is exactly the mechanism operating along the California, Humboldt, Benguela, and Canary Current upwelling systems, all of which are on the eastern (west coast) sides of their respective ocean basins where equatorward winds prevail.',
        },
      ],
    },
  ],
}

export default oceanCirculation
