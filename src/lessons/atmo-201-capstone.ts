import type { Lesson } from './types'

const atmo201Capstone: Lesson = {
  id: 'atmo-201-capstone',
  title: 'Climate Dynamics & Variability: Capstone Assessment',
  track: 'atm',
  trackName: 'Atmospheric Science',
  level: 'Advanced',
  duration: '25 min',
  xpReward: 500,
  description:
    'A comprehensive assessment spanning ENSO teleconnections, Pacific Decadal Oscillation, Atlantic Multidecadal Oscillation, NAO and Arctic Oscillation, Asian monsoon dynamics, jet streams and Rossby waves, atmospheric blocking, cyclogenesis, mesoscale convective systems, heat waves, atmospheric rivers, tropical cyclone intensification, and polar vortex dynamics.',
  sources: [
    { org: 'NOAA',  title: 'Climate Prediction Center — ENSO, NAO, PDO, and AO Indices',          url: 'https://www.cpc.ncep.noaa.gov/' },
    { org: 'AMS',   title: 'Glossary of Meteorology — Atmospheric Dynamics & Climate Variability', url: 'https://glossary.ametsoc.org/' },
    { org: 'IPCC',  title: 'AR6 WGI — Chapter 3: Human Influence on the Climate System',           url: 'https://www.ipcc.ch/report/ar6/wg1/' },
    { org: 'ECMWF', title: 'ERA5 Reanalysis Documentation — Rossby Waves and Blocking',            url: 'https://www.ecmwf.int/en/forecasts/dataset/ecmwf-reanalysis-v5' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Climate Dynamics & Variability: Capstone Assessment',
      body: `This capstone assessment draws on the full breadth of the Climate Dynamics & Variability advanced path. Questions span low-frequency modes of variability — ENSO, the PDO, the AMO, the NAO, and the Arctic Oscillation — as well as the physical drivers of the Asian monsoon and the Madden-Julian Oscillation. The second half of the exam tests understanding of the large-scale circulation: polar and subtropical jet streams, Rossby wave propagation, and atmospheric blocking. The final questions cover high-impact weather systems, including bomb cyclones, warm conveyor belts, mesoscale convective systems, atmospheric rivers, tropical cyclone rapid intensification, and sudden stratospheric warming events.

Each of the twenty questions has exactly one correct answer. Distractors are constructed to test mechanistic understanding, not surface recall. Every answer is accompanied by a detailed explanation. Allow yourself the full twenty-five minutes.`,
      keyTerms: [],
    },
    {
      type: 'quiz',
      questions: [
        // ── Q1: Walker Circulation during El Niño — correct: 0 ───────────────
        {
          q: 'During a mature El Niño event, how does the Walker Circulation change relative to neutral conditions?',
          a: [
            'The Walker Circulation weakens: westerly wind anomalies replace the easterly trade winds across the central and eastern Pacific, the upwelling off South America is suppressed, and the centre of deep convection shifts eastward from the Maritime Continent toward the central Pacific',
            'The Walker Circulation intensifies, with stronger easterly trade winds driving enhanced upwelling off the coast of Peru and deeper convection over the western Pacific warm pool',
            'The Walker Circulation collapses completely and is replaced by Hadley cell overturning, eliminating the east-west pressure gradient across the tropical Pacific entirely',
            'The Walker Circulation weakens slightly but maintains its overall structure, with the main anomaly confined to enhanced convection over Indonesia and suppressed rainfall over the central Pacific',
          ],
          correct: 0,
          explain:
            'During El Niño, anomalously warm SSTs in the central and eastern tropical Pacific reduce the east-west SST and pressure gradient that normally sustains the Walker Circulation. The easterly trade winds slacken or develop westerly anomalies, upwelling off Peru weakens, and the belt of deep tropical convection shifts eastward from the western Pacific toward the date line or central Pacific — consistent with Bjerknes feedback. Option B describes La Niña conditions, where the Walker Circulation intensifies. Option C overstates the change; the circulation weakens but is not replaced by Hadley overturning. Option D understates the reorganisation — the eastward convection shift is a fundamental structural change, not a minor modulation.',
        },
        // ── Q2: Southern Oscillation Index (SOI) — correct: 1 ───────────────
        {
          q: 'What does the Southern Oscillation Index (SOI) measure, and what does a sustained strongly negative SOI indicate?',
          a: [
            'The SOI measures the difference in sea-surface temperature anomalies between the Niño 3.4 region and the Indian Ocean; a strongly negative SOI indicates anomalously cool conditions in the central Pacific, consistent with La Niña',
            'The SOI measures the standardised sea-level pressure difference between Darwin, Australia and Tahiti; a sustained strongly negative SOI indicates that Darwin pressure is anomalously high relative to Tahiti, a pattern associated with El Niño conditions and weakened trade winds',
            'The SOI measures upper-tropospheric wind anomalies at 200 hPa averaged across the tropical Pacific; a strongly negative SOI indicates anomalous upper-level easterlies consistent with La Niña Walker Circulation enhancement',
            'The SOI measures the standardised sea-level pressure difference between Darwin and Tahiti; a sustained strongly negative SOI indicates that Tahiti pressure is anomalously high relative to Darwin, a pattern associated with La Niña conditions and intensified trade winds',
          ],
          correct: 1,
          explain:
            'The Southern Oscillation Index is defined as the standardised anomaly of the mean sea-level pressure difference P(Tahiti) − P(Darwin). During neutral or La Niña conditions, high pressure sits near Tahiti and low pressure near Darwin, giving a positive SOI. During El Niño the warming of the central and eastern Pacific drives low pressure anomalies near Tahiti and high pressure anomalies near Darwin, reducing or reversing the difference and producing a negative SOI. A sustained SOI below −8 for two months is one threshold used by the Australian Bureau of Meteorology to identify El Niño. Option A confuses the SOI with SST-based indices such as Niño 3.4. Option C describes a wind-based index, not the SOI. Option D inverts the pressure gradient sign — high Tahiti relative to Darwin is the La Niña pattern (positive SOI).',
        },
        // ── Q3: PDO positive phase — SST pattern — correct: 2 ───────────────
        {
          q: 'Which sea-surface temperature (SST) pattern best describes the positive phase of the Pacific Decadal Oscillation (PDO)?',
          a: [
            'A horseshoe-shaped pattern of anomalously warm SSTs along the western North Pacific rim and across the central North Pacific, with anomalously cool SSTs along the North American coast',
            'Anomalously warm SSTs covering the entire North Pacific basin from 20°N to 60°N uniformly, with no organised east-west contrast',
            'Anomalously cool SSTs forming a horseshoe arc across the central and western North Pacific, surrounding anomalously warm SSTs along the North American coast and in the northeastern Pacific',
            'A uniform warming of the tropical Pacific with little extratropical signal in the North Pacific, resembling a persistent El Niño without a distinct midlatitude structure',
          ],
          correct: 2,
          explain:
            'The PDO is the leading mode of North Pacific SST variability on interdecadal (~20–30 year) timescales. In its positive phase, anomalously warm SSTs appear along the west coast of North America and across the northeastern Pacific, while anomalously cool SSTs form a horseshoe-shaped arc across the central and western North Pacific (roughly 20°N–50°N from the date line westward to Japan). This pattern modulates the Aleutian Low, winter storm tracks, and precipitation over North America. Option A describes the negative PDO phase, in which western Pacific SSTs are warm and eastern coastal SSTs are cool. Option B is incorrect because the PDO is defined by a zonal and coastal contrast, not basin-wide warming. Option D conflates the PDO with ENSO patterns; the PDO has a distinctly extratropical character and a longer timescale.',
        },
        // ── Q4: AMO — period of oscillation — correct: 0 ────────────────────
        {
          q: 'What is the approximate period of the Atlantic Multidecadal Oscillation (AMO), and which ocean basin SSTs does it primarily describe?',
          a: [
            'Approximately 60–80 years; it describes low-frequency, basin-wide SST variability across the full North Atlantic from the equator to Greenland, linked to variations in the Atlantic Meridional Overturning Circulation',
            'Approximately 8–12 years; it describes interdecadal SST variability across both the North Atlantic and North Pacific simultaneously',
            'Approximately 60–80 years; it describes SST variability only in the subpolar North Atlantic north of 50°N, with negligible signal in the tropical or subtropical Atlantic',
            'Approximately 20–30 years; it describes SST variability restricted to the tropical North Atlantic, independent of any overturning circulation signal',
          ],
          correct: 0,
          explain:
            'The AMO is characterised by coherent, basin-wide fluctuations in North Atlantic SSTs spanning roughly 60–80 years from warm to cool and back. The signal encompasses the full North Atlantic — tropical, subtropical, and subpolar — and is strongly linked to low-frequency variations in the AMOC, which transports heat poleward. Warm AMO phases are associated with enhanced Sahel rainfall, shifts toward positive NAO, and modulation of Atlantic hurricane activity. The AMO completed a positive phase roughly from the mid-1990s through the 2010s. Option B gives the ENSO period and incorrectly includes the Pacific. Option C correctly identifies the period but wrongly restricts the signal to the subpolar Atlantic. Option D understates both the period and the spatial extent of the AMO.',
        },
        // ── Q5: NAO positive phase — European weather — correct: 1 ──────────
        {
          q: 'During the positive phase of the North Atlantic Oscillation (NAO), which weather pattern typically prevails over northwestern Europe?',
          a: [
            'Cold, dry winters with frequent blocking anticyclones diverting Atlantic storms southward toward Iberia; Scandinavia and the British Isles experience anomalously cold and dry conditions',
            'Mild, wet, and stormy winters due to an enhanced pressure gradient between the Icelandic Low and the Azores High, which steers strengthened westerly flow and Atlantic storm tracks toward northern Europe',
            'Hot, dry summers caused by persistent high-pressure anomalies centred over the British Isles; the enhanced subtropical jet suppresses convective precipitation across the continent',
            'Neutral conditions across Europe with the primary impact confined to eastern North America, where the positive NAO drives anomalous precipitation over the Gulf States',
          ],
          correct: 1,
          explain:
            'The NAO is defined as the normalised pressure difference between the Azores High and the Icelandic Low. In its positive phase, both centres of action are anomalously strong, steepening the meridional pressure gradient across the North Atlantic. This accelerates the mid-latitude westerlies and shifts the Atlantic storm track northeastward, directing frequent cyclones and precipitation toward the British Isles, Norway, and Iceland. Northern Europe experiences milder and wetter winters than average, while the Mediterranean tends to be drier. Option A describes the negative NAO phase, when a weakened Icelandic Low allows cold Arctic air to penetrate into Europe and blocks the storm track southward. Option C confuses NAO with a summer heat wave driver; the NAO is predominantly a wintertime phenomenon. Option D incorrectly limits the primary NAO impact to North America.',
        },
        // ── Q6: AO negative phase — consequence — correct: 2 ────────────────
        {
          q: 'Which of the following best describes a key consequence of the negative phase of the Arctic Oscillation (AO)?',
          a: [
            'The polar jet stream contracts poleward, confining cold Arctic air to the Arctic basin and reducing the frequency of winter cold-air outbreaks at mid-latitudes',
            'Sea ice extent in the Arctic increases dramatically as the colder temperatures associated with the negative AO promote rapid ice growth across the entire Arctic Ocean',
            'The polar vortex weakens and becomes more wavy, allowing cold Arctic air masses to penetrate deep into mid-latitude North America, Europe, and Asia and increasing the frequency and severity of winter cold-air outbreaks',
            'Tropical cyclone activity in the North Atlantic intensifies because the negative AO reduces vertical wind shear over the main development region',
          ],
          correct: 2,
          explain:
            'The Arctic Oscillation is the dominant mode of sea-level pressure variability in the Northern Hemisphere extratropics. In the positive AO phase, a deep low-pressure anomaly over the Arctic strengthens the circumpolar westerlies and tightens the polar vortex, keeping frigid Arctic air locked at high latitudes. In the negative AO phase, pressure over the Arctic rises relative to the mid-latitudes, weakening the polar jet stream and causing it to meander in large-amplitude Rossby waves. This allows tongues of cold Arctic air to spill southward into mid-latitude continents — the dramatic cold-air outbreaks sometimes called "polar vortex disruptions" in media coverage. The negative AO is also associated with sudden stratospheric warming events that can precede surface impacts by 2–6 weeks. Option A describes positive AO conditions. Option B overstates the sea-ice response; AO phase does not drive dramatic basin-wide changes in a single season. Option D confuses AO phase with ENSO-related shear changes.',
        },
        // ── Q7: Asian monsoon onset driver — correct: 0 ─────────────────────
        {
          q: 'What is the primary thermodynamic driver of the onset of the South Asian (Indian) summer monsoon?',
          a: [
            'Differential heating of the Asian landmass and Tibetan Plateau relative to the Indian Ocean — the continent heats up rapidly in late spring, generating a deep thermal low that draws in moisture-laden southwesterly winds from the Arabian Sea and Bay of Bengal',
            'The northward shift of the ITCZ in late spring, which mechanically pulls moisture from the Indian Ocean northward through large-scale low-level convergence',
            'The seasonal reversal of the Somali Jet from northeasterly to southwesterly, driven purely by changes in the planetary-scale Hadley circulation rather than surface temperature gradients',
            'The El Niño–Southern Oscillation cycle, which every year in late May or early June redirects the Walker Circulation to channel moisture from the central Pacific toward the Indian subcontinent',
          ],
          correct: 0,
          explain:
            'The South Asian monsoon onset is fundamentally a manifestation of differential heating: the Tibetan Plateau and South Asian landmass absorb insolation and warm faster than the Indian Ocean after the spring equinox, generating a strong surface pressure gradient (a thermal low centred over northwest India and Pakistan). Moisture-laden southwesterly winds from the Arabian Sea and Bay of Bengal are drawn in to fill this low. The Tibetan Plateau also acts as an elevated heat source in the mid-troposphere, reinforcing the upper-tropospheric anticyclone and strengthening the monsoon circulation. While the ITCZ shift, Somali Jet, and ENSO all modulate monsoon behaviour, none is the primary driver of onset. Option B overstates ITCZ mechanics. Option C correctly mentions the Somali Jet but misattributes its cause. Option D is incorrect; ENSO modulates interannual monsoon variability but does not cause the annual onset.',
        },
        // ── Q8: MJO timescale — correct: 3 ──────────────────────────────────
        {
          q: 'What is the characteristic period of the Madden-Julian Oscillation (MJO), and in which direction does its convective envelope primarily propagate?',
          a: [
            'Approximately 3–7 days; the MJO propagates westward along the equatorial waveguide, similar to equatorial Rossby waves',
            'Approximately 90–120 days; the MJO propagates northward from the equator into the monsoon trough over South Asia during boreal summer',
            'Approximately 30–60 days; the MJO propagates westward from the central Pacific toward the Indian Ocean, driven by radiative cooling anomalies in the suppressed convective phase',
            'Approximately 30–60 days; the MJO propagates eastward from the Indian Ocean through the Maritime Continent and into the Pacific at roughly 4–8 m/s',
          ],
          correct: 3,
          explain:
            'The Madden-Julian Oscillation, discovered by Roland Madden and Paul Julian in 1971, is the dominant mode of intraseasonal tropical variability. Its coupled pattern of enhanced and suppressed deep convection propagates eastward along the equator from the Indian Ocean across the Maritime Continent and into the western and central Pacific, typically completing one cycle in 30–60 days (most commonly ~45 days) at a propagation speed of ~4–8 m/s (roughly 5 m/s). The MJO modulates the onset and active/break phases of the Asian monsoon, influences tropical cyclone activity across all ocean basins, and produces mid-latitude teleconnections. Option A gives synoptic timescales and the wrong direction. Option B overstates the period and describes the northward-propagating boreal summer ISO, a related but distinct mode. Option C has the propagation direction reversed.',
        },
        // ── Q9: Polar jet stream — pressure level and latitude — correct: 1 ─
        {
          q: 'At approximately which pressure level and latitude range is the Northern Hemisphere polar jet stream typically located during boreal winter?',
          a: [
            'Near 500 hPa (~5.5 km (3.4 mi)), between 60°N and 80°N; the polar jet follows the edge of the polar ice cap throughout the year',
            'Near 200 hPa (~12 km (7 mi)), between 40°N and 70°N; the polar jet sits at the tropopause level near the polar front where temperature gradients between Arctic and subtropical air masses are steepest',
            'Near 850 hPa (~1.5 km (0.9 mi)), between 30°N and 50°N; the polar jet is a low-level feature driven primarily by boundary-layer temperature gradients rather than upper-tropospheric thermal wind balance',
            'Near 200 hPa (~12 km (7 mi)), between 15°N and 30°N; the polar jet migrates equatorward of 30°N during winter because the polar front retreats toward the tropics as the polar vortex strengthens',
          ],
          correct: 1,
          explain:
            'The polar jet stream is an upper-tropospheric feature located near the tropopause, typically at 200–300 hPa (~9–13 km (5.6–8 mi)). It exists because of the thermal wind relationship: large horizontal temperature gradients along the polar front produce strong vertical wind shear, and the integrated shear generates jet-level winds exceeding 50–80 m/s in the jet core. In boreal winter the polar front migrates equatorward, placing the jet between roughly 40°N and 70°N (most variability at 45°N–60°N). Option A gives the correct latitude range but the wrong pressure level; the jet is upper-tropospheric, not mid-tropospheric, and does not simply follow the sea-ice edge. Option C places the jet in the boundary layer, which is incorrect; near-surface fronts are related but do not define the jet. Option D gives the correct pressure level but an incorrect latitude, confusing the polar jet with the subtropical jet found near 25°–35°N.',
        },
        // ── Q10: Rossby waves — restoring force — correct: 2 ────────────────
        {
          q: 'What provides the restoring force that enables the formation and propagation of Rossby (planetary) waves in the atmosphere?',
          a: [
            'Gravity acting on density anomalies between tropospheric air parcels and the surrounding environment; the same buoyancy force that drives convective instability also provides the restoring force for planetary-scale oscillations',
            'Pressure gradient forces generated by mountain ranges and orographic lift; Rossby waves exist only because of major orography such as the Rockies and Tibetan Plateau, and on a flat planet there would be no planetary-scale waves',
            'The meridional gradient of the Coriolis parameter (the β-effect) — as a displaced air parcel moves poleward, the increasing Coriolis parameter induces anticyclonic vorticity, and as it moves equatorward, the decreasing Coriolis parameter induces cyclonic vorticity, driving oscillatory motion about the original latitude',
            'The equator-to-pole gradient in solar radiation flux; differential insolation generates horizontal pressure gradients that propagate as long Rossby waves from the tropics toward the poles',
          ],
          correct: 2,
          explain:
            'Rossby waves arise from the conservation of potential vorticity on a rotating sphere. The key ingredient is the meridional gradient of planetary vorticity (f = 2Ω sin φ), denoted β = df/dy = 2Ω cos φ / R (the beta-effect). When a column of air is displaced northward it encounters a higher Coriolis parameter; to conserve potential vorticity it develops negative relative vorticity (anticyclonic curvature) that pushes it back equatorward. When displaced southward it develops positive relative vorticity (cyclonic curvature) that pushes it back poleward. This restoring mechanism produces westward phase propagation relative to the mean flow — the defining characteristic of Rossby waves. Option A describes the restoring force for gravity waves, not Rossby waves. Option B overstates the topographic requirement; free barotropic Rossby waves exist without any orography — mountains are a source of stationary Rossby waves but not the restoring force itself. Option D conflates the heating gradient with the dynamical restoring mechanism.',
        },
        // ── Q11: Atmospheric blocking — definition criterion — correct: 3 ────
        {
          q: 'Which criterion is most commonly used in the dynamical-meteorology literature to define atmospheric blocking?',
          a: [
            'A sustained period (≥5 days) of 500 hPa geopotential height anomalies exceeding +2 standard deviations in a region poleward of 50°N',
            'A surface high-pressure system with central pressure exceeding 1040 hPa that persists for at least 3 days at latitudes above 45°N',
            'A 200 hPa jet stream wind speed dropping below 15 m/s at a given longitude for at least 5 days, allowing cold air advection from the north to penetrate mid-latitudes',
            'A reversal of the normal westerly upper-level flow at a given longitude — specifically, the 500 hPa zonal wind or geopotential height gradient changing sign so that easterly anomalies appear for ≥5 consecutive days, indicating the jet stream is split or diverted around a quasi-stationary high',
          ],
          correct: 3,
          explain:
            'The standard definition of atmospheric blocking, attributed to Rex (1950) and formalised by Tibaldi and Molteni (1990), requires a reversal of the upper-level westerly flow at a given longitude. The Tibaldi-Molteni index identifies blocking when the 500 hPa meridional geopotential height gradient reverses sign — implying easterly anomalies north of a reference latitude and westerly flow south of it — for at least 5 consecutive days. Physically this corresponds to a quasi-stationary large-amplitude anticyclone that deflects the jet into two branches (split-flow blocking) or around a cut-off high (omega blocking). Option A describes a geopotential height anomaly threshold approach used in some climatological indices but does not capture the essential flow-reversal criterion of the canonical dynamical definition. Option B describes a surface anticyclone criterion; blocking is fundamentally an upper-level phenomenon. Option C describes jet deceleration, which is associated with but does not define blocking.',
        },
        // ── Q12: European 2003 heat wave — primary driver — correct: 3 ───────
        {
          q: 'What was the primary atmospheric dynamical driver of the European heat wave of summer 2003, which caused an estimated 70,000 excess deaths?',
          a: [
            'A strong positive phase of the NAO that directed anomalously warm subtropical air from the Sahara northward into central Europe via enhanced southerly advection in the lower troposphere',
            'An anomalously warm Mediterranean Sea surface temperature event that provided an enhanced source of latent heat and moisture, increasing convective heating and raising dew-point temperatures across the continent',
            'Weakening of the polar vortex in summer 2003, allowing warm mid-tropospheric air to descend adiabatically from the stratosphere into the European lower troposphere and causing widespread surface heating',
            'A persistent atmospheric blocking anticyclone over western Europe that suppressed precipitation for weeks, combined with record soil-moisture deficits that amplified surface warming through reduced latent heat flux and enhanced sensible heat flux',
          ],
          correct: 3,
          explain:
            'The 2003 European heat wave was driven by a persistent blocking high-pressure system over the British Isles and northwestern Europe combined with an exceptional soil-moisture feedback. The blocking anticyclone, which persisted through most of June–August, produced clear skies, suppressed the westerly storm track, and advected hot, dry air northward from North Africa. Critically, the preceding winter and spring had been anomalously dry, leaving European soils with record-low moisture. As the blocking developed, further drying cut evapotranspiration and redirected available energy almost entirely into sensible heat, dramatically amplifying surface temperatures beyond what the atmospheric circulation alone would produce. Seneviratne et al. (2006) showed this soil-moisture–temperature feedback was essential to reproducing observed temperatures in models. Option A confuses NAO phase; the positive NAO increases northern European precipitation and does not produce this type of event. Option B overstates the Mediterranean SST role. Option C is incorrect; stratospheric intrusions are not a significant mechanism for European summer heat waves.',
        },
        // ── Q13: Bomb cyclone — deepening rate threshold — correct: 0 ────────
        {
          q: 'What minimum central-pressure deepening rate, over what time period, is required to classify an extratropical cyclone as a "bomb cyclone" (explosive cyclogenesis)?',
          a: [
            'A deepening of at least 24 hPa in 24 hours, normalised to 60°N using the Sanders and Gyakum (1980) criterion; at lower latitudes the threshold is reduced in proportion to sin(φ)/sin(60°)',
            'A deepening of at least 12 hPa in 12 hours, normalised to 45°N latitude using the Bergeron scale, equivalent to 24 hPa/24 hours as the standard metric',
            'A deepening of at least 12 hPa in 24 hours at any latitude between 20°N and 80°N; no latitude normalisation is applied in the original Sanders and Gyakum (1980) definition',
            'A deepening of at least 24 hPa in 24 hours at any latitude; the threshold is constant regardless of latitude because the Coriolis effect on mid-latitude cyclones is effectively constant between 30°N and 70°N',
          ],
          correct: 0,
          explain:
            'The term "explosive cyclogenesis" was formally defined by Sanders and Gyakum (1980) as a surface extratropical cyclone that deepens by at least 24 hPa in 24 hours, normalised to 60°N latitude. The latitude normalisation is necessary because the Coriolis parameter varies with latitude; the corrected threshold is 24 × sin(60°)/sin(φ) hPa per 24 hours. At lower latitudes (e.g., 30°N) the required actual pressure fall is lower because the Coriolis parameter is smaller. Bomb cyclones owe their explosive deepening to strong upper-level divergence in the jet-stream exit region, intense latent heat release, and vigorous lower-level temperature advection. Option B gives an incorrect reference latitude and time period. Option C is incorrect because the Sanders and Gyakum definition explicitly includes latitude normalisation to 60°N. Option D incorrectly states that no normalisation is applied and that the Coriolis effect is effectively constant across mid-latitudes.',
        },
        // ── Q14: Warm conveyor belt — airflow direction — correct: 2 ─────────
        {
          q: 'In an extratropical cyclone, in which direction does the warm conveyor belt (WCB) transport air, and what characterises this airflow?',
          a: [
            'Downward and poleward: the WCB descends from the upper troposphere into the warm sector, transporting warm subtropical air toward the cold front and generating the surface warm sector temperature structure',
            'Equatorward and downward: the WCB originates in the cold sector aloft and descends adiabatically behind the cold front, warming and drying as it subsides to produce clear skies and the sharp temperature contrast of the post-frontal region',
            'Poleward and upward: the WCB is a broad ascending airstream that originates in the warm-sector boundary layer at low latitudes, flows poleward and ascends along the warm front from the lower troposphere (~900 hPa) to the upper troposphere (~300 hPa), producing extensive cloud shields and warm-sector precipitation',
            'Westward and upward: the WCB transports maritime tropical air from the warm sector westward ahead of the system, rising along isentropic surfaces ahead of the warm front and depositing precipitation in the pre-frontal zone',
          ],
          correct: 2,
          explain:
            'The warm conveyor belt is one of three characteristic airstreams in the Shapiro-Keyser and Norwegian cyclone conceptual models. It originates in the moist boundary layer of the warm sector — typically in the subtropical or tropical oceanic boundary layer — and flows poleward and eastward while ascending from roughly 900 hPa to 300 hPa over a distance of 2,000–3,000 km (1243–1864 mi). As the WCB ascends along the warm front, adiabatic cooling condenses moisture, producing the broad cloud shield and warm-sector precipitation visible on satellite imagery. Near the tropopause it turns anticyclonically, contributing to upper-level ridge building ahead of the trough. Option A and D misrepresent the WCB direction. Option B describes the dry intrusion (DI), which descends from the stratosphere or upper troposphere behind the cold front — a distinct and separate airstream from the WCB.',
        },
        // ── Q15: CAPE — definition — correct: 1 ─────────────────────────────
        {
          q: 'What does Convective Available Potential Energy (CAPE) measure, and what approximately constitutes an "extreme" CAPE environment for severe thunderstorm development?',
          a: [
            'CAPE measures the kinetic energy of the mean tropospheric wind through a storm\'s lifetime; values exceeding 500 J/kg are considered extreme and associated with tornado-producing supercells',
            'CAPE measures the integrated buoyant energy available to a rising air parcel from the Level of Free Convection (LFC) to the Equilibrium Level (EL); values exceeding ~2,500–3,000 J/kg are considered extreme and associated with the most intense supercell thunderstorms and tornado outbreaks',
            'CAPE measures total precipitable water in a column from 850 hPa to 200 hPa; values above 50 mm (1.97 in) are considered extreme and associated with mesoscale convective systems capable of producing flash flooding',
            'CAPE measures the temperature difference between the 500 hPa level and the surface; values greater than 30°C (86°F) represent extreme instability and are used as the primary severe-weather threshold by the Storm Prediction Center',
          ],
          correct: 1,
          explain:
            'CAPE is the vertical integral of parcel buoyancy from the Level of Free Convection (LFC) to the Equilibrium Level (EL): CAPE = ∫(LFC→EL) g × [(Tv,parcel − Tv,env) / Tv,env] dz. It represents the maximum theoretical kinetic energy a convective updraft can acquire (J/kg), directly related to maximum updraft speed: w_max ≈ √(2 × CAPE). Values of 0–1,000 J/kg indicate marginal instability; 1,000–2,500 J/kg moderate; 2,500–4,000 J/kg large; above 4,000 J/kg extreme. CAPE values above ~2,500–3,000 J/kg, particularly when paired with strong wind shear (≥35–40 kt in the 0–6 km (0–3.7 mi) layer), are associated with supercell thunderstorms capable of producing violent tornadoes. Option A describes wind energy, not buoyancy. Option C describes precipitable water (PW), not CAPE. Option D confuses lapse rate indices with the CAPE definition.',
        },
        // ── Q16: Derecho — distinguishing feature — correct: 3 ───────────────
        {
          q: 'What distinguishes a derecho from an ordinary thunderstorm or typical squall line?',
          a: [
            'A derecho produces rotating updrafts (mesocyclones) that distinguish it from linear convective systems; the mesocyclone is responsible for both the damaging straight-line winds and any tornadoes that form along the leading edge',
            'A derecho is defined by the presence of a mesoscale convective vortex (MCV) at the rear of the system that produces the most intense winds; without an MCV, a squall line cannot be classified as a derecho',
            'A derecho is distinguished from ordinary thunderstorms solely by duration — any convective complex persisting for more than 6 hours and producing any wind gusts above 50 km/h (31 mph) qualifies as a derecho, regardless of path length or peak wind speed',
            'A derecho is a long-lived, fast-moving, bow-echo–dominated convective system that produces a swath of widespread damaging straight-line winds of at least 93 km/h (58 mph) extending more than 400 km (249 mi) along its path, with wind damage reports distributed along most of the path length',
          ],
          correct: 3,
          explain:
            'The term "derecho" (from the Spanish for "straight") was coined by Gustavus Hinrichs in 1888 to contrast straight-line convective windstorms with the rotating winds of a tornado. The modern operational definition, formalised by Johns and Hirt (1987) and updated by Evans and Doswell (2001), requires a swath of wind damage and/or gusts ≥93 km/h (50 kt / 58 mph) extending at least 400 km (249 mi) along its path, with reports distributed along most of the corridor — not just isolated wind events. Derechos are typically produced by bow echoes or progressive/serial mesoscale convective systems (MCSs) in a strongly sheared environment where rear-inflow jets reinforce the leading-line winds. Option A incorrectly attributes rotating updrafts (mesocyclones) to derechos; mesocyclones define supercells, not derechos. Option B is incorrect; an MCV is not a defining criterion. Option C understates both the required path length and peak wind thresholds.',
        },
        // ── Q17: Atmospheric river IVT threshold — correct: 2 ───────────────
        {
          q: 'What integrated vapour transport (IVT) threshold is typically used to identify atmospheric rivers, and over what atmospheric depth is IVT calculated?',
          a: [
            'IVT ≥ 100 kg (220 lb) m⁻¹ s⁻¹, integrated from the surface to 100 hPa; atmospheric rivers of this intensity can produce moderate precipitation over coastal mountain ranges',
            'IVT ≥ 500 kg (1102 lb) m⁻¹ s⁻¹, integrated from 850 hPa to 500 hPa only; low-level moisture below 850 hPa is excluded because it contributes negligible horizontal transport',
            'IVT ≥ 250 kg (551 lb) m⁻¹ s⁻¹, integrated from the surface (or 1000 hPa) to 300 hPa; the most extreme atmospheric rivers (AR Cat 5) exceed 1,250 kg (2756 lb) m⁻¹ s⁻¹ and are capable of catastrophic precipitation on orographic terrain',
            'IVT ≥ 50 kg (110 lb) m⁻¹ s⁻¹, integrated from the surface to 700 hPa; the low threshold reflects that moisture transport above 700 hPa is too diffuse to contribute meaningfully to precipitation',
          ],
          correct: 2,
          explain:
            'IVT is computed as the vertically integrated horizontal flux of water vapour, typically from the surface (or 1000 hPa) to 300 hPa: IVT = (1/g) × ∫(300→surface) q·V dp, where q is specific humidity and V is the horizontal wind vector. The NOAA/CW3E AR scale defines atmospheric rivers as features with IVT ≥ 250 kg (551 lb) m⁻¹ s⁻¹ (AR Cat 1) persisting for at least 24 hours with sufficient length and width. The five-category scale by Ralph et al. (2019) extends through Cat 5 (IVT > 1,250 kg (2756 lb) m⁻¹ s⁻¹), capturing extreme events capable of record-setting precipitation and flooding on coastal ranges such as the Sierra Nevada. Option A gives too low a threshold (100 kg (220 lb) m⁻¹ s⁻¹ reflects ordinary enhanced moisture transport). Option B incorrectly restricts integration to 850–500 hPa and uses an IVT threshold of 500, which would exclude many well-documented ARs. Option D gives both a threshold too low and an incorrect integration depth.',
        },
        // ── Q18: Pineapple Express — origin region — correct: 0 ─────────────
        {
          q: 'From which oceanic region does the moisture that characterises a "Pineapple Express" atmospheric river primarily originate?',
          a: [
            'The subtropical central and northeastern Pacific, particularly the waters surrounding the Hawaiian Islands (~20°N, 155°W), where warm SSTs support high precipitable water and fuel a long, narrow moisture corridor directed toward the US West Coast',
            'The western equatorial Pacific warm pool and the South China Sea; the Pineapple Express is a boreal winter monsoon surge that transports moisture from the Maritime Continent across the Pacific',
            'The Gulf of Mexico and Caribbean Sea; the Pineapple Express transports warm, moist Gulf air northwestward over the Rocky Mountains before descending toward the Pacific Coast',
            'The Indian Ocean; long-distance moisture transport from tropical cyclones in the Bay of Bengal feeds the Pineapple Express during El Niño years when the subtropical jet extends across the Pacific',
          ],
          correct: 0,
          explain:
            'The Pineapple Express is an informal name for a particularly intense and persistent atmospheric river that draws moisture from the subtropical Pacific near Hawaii (hence "Pineapple") and directs it in a concentrated corridor toward California and the Pacific Northwest. These events draw moisture from low latitudes (~15°–25°N) where SSTs are warm enough to maintain high specific humidity in the boundary layer. The corridor can stretch 2,000–3,000 km (1243–1864 mi) and transport moisture at rates comparable to or exceeding the mean Amazon River discharge. Pineapple Express events are more common during El Niño years when the subtropical Pacific jet extends farther east, and they can deliver 25–50% of annual California precipitation in just a few events. Options B, C, and D identify incorrect source regions inconsistent with the subtropical central/northeastern Pacific origin that defines this phenomenon.',
        },
        // ── Q19: Rapid intensification threshold — correct: 3 ───────────────
        {
          q: 'What is the standard meteorological threshold for "rapid intensification" (RI) of a tropical cyclone, as defined by NOAA/NHC?',
          a: [
            'An increase in maximum sustained winds of at least 15 knots (28 km/h (17 mph)) in 12 hours, or the onset of a warm-core structure above Category 1 intensity',
            'A decrease in central minimum pressure of at least 20 hPa in 24 hours, irrespective of wind speed changes, because pressure is a more reliable measure of inner-core evolution than flight-level wind estimates',
            'An increase in maximum sustained winds of at least 35 knots (65 km/h (40 mph)) in 48 hours, normalised to a 24-hour rate for storms that are too short-lived to observe over the full period',
            'An increase in maximum sustained winds of at least 30 knots (56 km/h (35 mph)) in 24 hours; this threshold was established because it represents approximately the 95th percentile of 24-hour intensity changes in Atlantic and eastern Pacific tropical cyclones',
          ],
          correct: 3,
          explain:
            'Rapid intensification is defined by NOAA and the National Hurricane Center as an increase in maximum 1-minute sustained surface winds of ≥30 knots (~56 km/h (35 mph) or 35 mph) in a 24-hour period. This threshold was established by Kaplan and DeMaria (2003) based on historical Atlantic tropical cyclone records; it corresponds to approximately the 95th percentile of all 24-hour intensity changes in the climatological record. The physical prerequisites for RI include warm ocean heat content (a deep warm surface layer), low environmental vertical wind shear (≤10–15 kt), moist mid-tropospheric air, and an organised inner-core convective structure. RI is notoriously difficult to forecast even hours in advance and remains one of the primary challenges in operational intensity forecasting. Option A gives a non-standard 12-hour threshold. Option B uses a pressure-based criterion; the NHC RI threshold is wind-based. Option C overstates the threshold and uses a 48-hour window.',
        },
        // ── Q20: SSW downward coupling timescale — correct: 1 ───────────────
        {
          q: 'After a sudden stratospheric warming (SSW) event disrupts the polar vortex, approximately how long does it typically take for the surface climate signal to propagate downward and become detectable at the tropospheric and surface level?',
          a: [
            '1–3 days; the anomalous stratospheric circulation propagates downward almost immediately via adiabatic subsidence of warm stratospheric air, producing near-instantaneous cold-air outbreaks at the surface',
            '2–6 weeks; the stratospheric signal couples to the troposphere through wave-mean flow interactions and anomalous planetary wave reflection, gradually shifting the tropospheric annular mode toward its negative phase and driving the surface AO/NAO toward negative values',
            '6–12 months; the SSW signal must complete a full seasonal cycle before influencing tropospheric circulation, as downward propagation is controlled by the speed of the Brewer-Dobson circulation',
            '1–2 years; the primary mechanism by which SSW events affect surface climate is through their modulation of stratospheric ozone, which takes 12–24 months to fully affect tropopause radiative forcing and surface temperatures',
          ],
          correct: 1,
          explain:
            'Sudden stratospheric warmings are dramatic events in which polar stratospheric temperatures rise by 20–50 K over a few days as planetary-scale Rossby waves break in the stratosphere, decelerating and occasionally reversing the stratospheric polar vortex. The surface impacts — primarily anomalous cold conditions over northern Europe, Siberia, and North America via a negative tropospheric AO/NAO — emerge 2–6 weeks after the stratospheric vortex disruption. The mechanism involves downward propagation of negative zonal wind anomalies through the stratosphere and upper troposphere, southward shifts in the jet stream, anomalous planetary wave reflection back from the stratosphere, and eventual coupling to the surface pressure pattern through eddy-driven processes. Baldwin and Dunkerton (2001) demonstrated using ERA reanalysis that the stratospheric anomaly propagates downward over 2–4 weeks and the surface response is most robust 3–6 weeks after SSW onset. Option A significantly underestimates the timescale. Options C and D vastly overestimate it; neither Brewer-Dobson transport nor ozone recovery mediates the SSW-to-surface coupling.',
        },
      ],
    },
  ],
}

export default atmo201Capstone
