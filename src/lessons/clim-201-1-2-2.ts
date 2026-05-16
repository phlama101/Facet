import { Thermometer, Globe, Waves, Activity } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const waterVaporLapseRate: Lesson = {
  id: 'clim-201-1-2-2',
  title: 'Water Vapour and Lapse Rate Feedbacks',
  track: 'cli',
  trackName: 'Climate',
  level: 'Intermediate',
  duration: '13 min',
  xpReward: 130,
  description: 'The two most powerful climate feedbacks — water vapour amplification and the lapse rate response that partially offsets it',
  sources: [
    { org: 'IPCC',   title: 'IPCC Sixth Assessment Report WG1',  url: 'https://www.ipcc.ch/' },
    { org: 'Nature', title: 'Nature — Climate Feedbacks',        url: 'https://www.nature.com/' },
    { org: 'AGU',    title: 'AGU — Climate Dynamics',            url: 'https://www.agu.org/' },
    { org: 'NOAA',   title: 'NOAA Climate Variability',          url: 'https://www.noaa.gov/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'The feedbacks that nearly double the Planck response',
      body: `When CO₂ warms the surface, the response is not simply a direct proportional rise in temperature. A cascade of feedbacks amplifies or moderates the initial forcing. The two most important are **water vapour feedback** — the most powerful positive feedback in the climate system — and **lapse rate feedback**, a partially offsetting negative response in the tropics that is a positive feedback at high latitudes. Together they account for close to half of the total equilibrium warming beyond the bare Planck (blackbody) response.

**Water vapour feedback** arises because warmer air holds more moisture. The Clausius-Clapeyron relation — the fundamental thermodynamic law governing the saturation vapour pressure of water — states that the capacity of the atmosphere to hold water vapour increases at approximately **7 % per °C of warming**. As the surface and troposphere warm, evaporation accelerates and the atmosphere loads with additional water vapour. This matters enormously for climate because water vapour (H₂O) is itself a potent greenhouse gas: it absorbs outgoing infrared radiation strongly near 6.3 μm (the H₂O bending vibration band) and across the broad 15–100 μm far-infrared window, partially overlapping and partially supplementing the CO₂ absorption bands. The result is a powerful positive feedback loop: warming → more water vapour → more IR absorption → more warming.

A critical distinction is between **specific humidity** (the mass of water vapour per unit mass of moist air, in g/kg) and **relative humidity** (the ratio of actual to saturation vapour pressure, expressed as %). Observations from radiosondes and the AIRS (Atmospheric Infrared Sounder) and Aura satellite instruments confirm that as the climate warms, **relative humidity remains approximately constant** throughout the troposphere while **specific humidity increases** — meaning the absolute water content rises in proportion to the saturation capacity. This result, anticipated by general circulation models for decades, is the key observational validation of water vapour feedback and was robustly confirmed in analyses of interannual variability and multi-decadal trends. The quantified strength of water vapour feedback is approximately **+1.8 W/m²/°C** — meaning that for every 1°C (1.8°F) of global warming, the additional water vapour adds 1.8 W/m² to the radiative forcing, nearly doubling the initial CO₂ signal alone.

The **ARM (Atmospheric Radiation Measurement) program**, a DOE-funded network of high-resolution radiometric instrumentation at several climate-critical sites (Southern Great Plains, North Slope of Alaska, Tropical Western Pacific), has provided decades of column-integrated water vapour and radiative flux measurements that underpin our quantitative understanding of how water vapour modulates the Earth\'s radiation balance. AIRS (launched 2002 on NASA\'s Aqua satellite) provides near-daily global maps of tropospheric temperature and specific humidity profiles, confirming the predicted moistening of the troposphere with warming over two decades of observations.

**Lapse rate feedback** is more subtle and spatially structured. The atmospheric lapse rate is the rate at which temperature decreases with altitude (in the troposphere, the environmental lapse rate averages ~6.5 °C (~12°F)/km). When surface warming is transmitted upward, the temperature profile changes — and this change affects how effectively the atmosphere radiates energy to space. In the **tropics**, deep convection couples the surface tightly to the upper troposphere through the **moist adiabatic lapse rate**: when air saturated with water vapour rises, it releases latent heat as water condenses, warming the surrounding environment. The moist adiabatic lapse rate (~6°C (~11°F)/km) is less steep than the dry adiabatic rate (~9.8°C (~18°F)/km). In a warming climate, the tropical upper troposphere (∼200–300 hPa) warms at approximately +0.6°C (+1.1°F) for every +1°C (+1.8°F) of surface warming — an enhanced warming aloft. Because the upper troposphere radiates at a higher temperature, it emits more energy to space than a uniform warming would predict, thereby partially offsetting the water vapour amplification. This makes the tropical lapse rate feedback **negative** (approximately −0.5 W/m²/°C in the tropics). In contrast, at **high latitudes** — particularly in the Arctic — strong surface-based temperature inversions mean that warming is concentrated near the surface rather than distributed through the troposphere. The upper atmosphere warms less than the surface, reducing upper-level outgoing longwave radiation and providing a **positive** lapse rate feedback contribution at polar latitudes. Polar amplification is partly driven by this mechanism.

When water vapour feedback (+1.8 W/m²/°C) and lapse rate feedback (approximately −0.6 to −0.8 W/m²/°C globally) are combined, the net result is approximately **+1.0–1.1 W/m²/°C** — a net positive contribution that, together with the Planck (blackbody) response of −3.2 W/m²/°C, means the two feedbacks together significantly reduce the energy imbalance needed to restore equilibrium, effectively amplifying equilibrium climate sensitivity. It is for this reason that the water vapour and lapse rate feedbacks are typically discussed together — they are anti-correlated (models that produce stronger water vapour feedback tend to produce stronger negative lapse rate feedback in the tropics), and their robust combined value gives greater confidence in climate sensitivity estimates than either feedback alone.

The **radiative kernel technique**, developed in the mid-2000s (Soden et al., 2008), provides the standard method for quantifying these feedbacks from model output and observations. A radiative kernel represents the change in top-of-atmosphere or surface radiative flux for a unit change in a climate variable (temperature, specific humidity, surface albedo) at each level in the atmosphere. By multiplying the kernel by the actual change in that variable (from climate model output or reanalysis), the contribution of each feedback to the total radiative response can be decomposed and attributed. This technique has enabled robust inter-model comparisons of feedback strength and has confirmed that, despite large model spread in cloud feedbacks, water vapour and lapse rate feedbacks are among the most robustly constrained — models consistently agree on their signs and within ~20% on their magnitudes, giving high confidence to their role in climate sensitivity.`,
      keyTerms: [
        {
          term: 'water vapour feedback',
          def: 'A positive climate feedback in which initial surface warming increases atmospheric water vapour content (following the Clausius-Clapeyron relation, ~7 %/°C), which enhances the greenhouse effect and amplifies further warming. Quantified at approximately +1.8 W/m²/°C, it is the single largest positive feedback in the climate system. Observationally confirmed by AIRS satellite retrievals and ARM program ground stations showing specific humidity increasing with temperature while relative humidity remains approximately constant.',
        },
        {
          term: 'lapse rate feedback',
          def: 'A climate feedback arising from changes in the vertical temperature gradient (lapse rate) as the climate warms. In the tropics, moist adiabatic adjustment causes the upper troposphere to warm more than the surface, enhancing outgoing longwave radiation and producing a negative feedback (approximately −0.5 W/m²/°C). At high latitudes, surface-based inversions cause the opposite pattern — preferential surface warming — creating a positive feedback component. The global average lapse rate feedback is approximately −0.6 to −0.8 W/m²/°C, partially offsetting water vapour feedback.',
        },
        {
          term: 'Clausius-Clapeyron relation',
          def: 'A fundamental thermodynamic relationship describing how the saturation vapour pressure of water increases with temperature. For the range of Earth surface temperatures, the saturation vapour pressure (and hence the maximum atmospheric water vapour holding capacity) increases at approximately 7 % per °C of warming. Named after Rudolf Clausius and Benoît Paul Émile Clapeyron. Governs the water vapour feedback and is also responsible for the observed intensification of extreme precipitation events with warming.',
        },
        {
          term: 'radiative kernel',
          def: 'A mathematical tool used to decompose climate feedbacks from model output or observations. A radiative kernel represents the partial derivative of top-of-atmosphere radiative flux with respect to a climate variable (specific humidity, temperature, albedo) at each atmospheric level. Multiplying the kernel by the actual change in that variable gives the radiative feedback contribution. Developed by Soden et al. (2008), the technique enables robust comparison of feedback strengths across models and is the standard method for quantifying water vapour, lapse rate, and albedo feedbacks.',
        },
        {
          term: 'upper tropospheric humidity',
          def: 'The water vapour content of the upper troposphere (roughly 200–500 hPa, ~6–12 km (7.5 mi) altitude), which is disproportionately important for the greenhouse effect because at these cold temperatures even small amounts of water vapour strongly absorb outgoing longwave radiation. Historically difficult to measure accurately (cold, dry, sparse radiosonde coverage), upper tropospheric humidity is now monitored by AIRS and Aura MLS instruments. GCMs consistently predict moistening of the upper troposphere with warming; observational confirmation strengthens confidence in model water vapour feedback estimates.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Four pillars of the water vapour and lapse rate story',
      body: `**Water vapour feedback is physically robust and observationally confirmed.** The Clausius-Clapeyron relation is basic thermodynamics; the ~7 %/°C increase in atmospheric moisture capacity is not a model assumption but a physical law. General circulation models have consistently predicted that relative humidity stays approximately constant under warming, implying rising specific humidity. This prediction is now validated by AIRS (2002–present) and ERA5 reanalysis data over two decades of warming and across interannual variability cycles — a stringent test of the physics. The ARM program sites provide surface-to-tropopause column observations that benchmark model representations of moisture and radiation. The feedback strength (+1.8 W/m²/°C) is among the most robustly constrained in climate science.

**The lapse rate feedback partially cancels water vapour feedback in the tropics.** The moist adiabatic lapse rate is governed by condensational heating during ascent. A warmer atmosphere releases more latent heat per unit of ascent (because there is more water vapour to condense), steepening the temperature gradient between the surface and upper troposphere relative to the surface temperature increase alone. The tropical upper troposphere warming amplification (+0.6°C (+1.1°F)/°C surface warming) means the upper troposphere emits more longwave radiation to space than a vertically uniform warming would produce, reducing the net greenhouse trapping. This is the tropical negative lapse rate feedback. At high latitudes, strong inversions suppress vertical mixing, so warming accumulates near the surface; the upper atmosphere barely warms, reducing outgoing longwave radiation — a positive high-latitude lapse rate feedback that contributes to polar amplification.

**Water vapour + lapse rate combined: a robust sum.** The anti-correlation between water vapour and tropical lapse rate feedbacks across climate models is well-documented. Models with stronger tropical upper tropospheric moistening tend to produce a more negative lapse rate feedback, and vice versa. This structural compensation means the combined feedback (+1.0–1.1 W/m²/°C) is more tightly constrained than either component alone. This sum nearly doubles the effective climate sensitivity beyond the bare Planck response. The Planck feedback is −3.2 W/m²/°C (the blackbody increase in outgoing longwave radiation per °C warming that acts to restore energy balance). Adding +1.0–1.1 W/m²/°C from water vapour and lapse rate reduces the net restoring force significantly, implying substantially more warming per unit forcing than the Planck response alone.

**Radiative kernels as the diagnostic standard.** Before the kernel technique, feedback decomposition relied on differencing perturbed vs. control model runs with individual processes fixed — computationally expensive and imprecise. Radiative kernels pre-compute the sensitivity of top-of-atmosphere radiation to each state variable from a single baseline climate, allowing fast and consistent decomposition across any model output. The kernels themselves are model-derived but are insensitive to the choice of base climate — they have been validated against line-by-line radiative transfer calculations. The technique revealed that the large model spread in equilibrium climate sensitivity (2–5°C (3.6–9°F) in CMIP5/6) is dominated by cloud feedback uncertainty, while water vapour and lapse rate feedbacks contribute relatively little to that spread — a key insight for understanding why climate sensitivity uncertainty persists despite decades of model development.`,
      cards: [
        {
          name: 'Water Vapour: The Dominant Amplifying Feedback',
          icon: Waves,
          color: BRAND.accentHot,
          desc: 'Warming raises atmospheric specific humidity ~7 %/°C (Clausius-Clapeyron). H₂O absorbs IR at 6.3 μm and 15–100 μm, amplifying the greenhouse effect. Relative humidity stays ~constant; specific humidity rises. Feedback strength: +1.8 W/m²/°C — the largest positive feedback in the climate system.',
          examples: 'AIRS satellite (2002–present) confirms tropospheric moistening at ~7 %/°C across interannual variability · ARM Southern Great Plains site: column water vapour and downwelling IR flux both increasing with temperature · ERA5 reanalysis: specific humidity rising in every tropospheric layer since 1979',
        },
        {
          name: 'Clausius-Clapeyron: More Water in a Warmer World',
          icon: Thermometer,
          color: BRAND.jade,
          desc: 'Saturation vapour pressure increases ~7 %/°C. In a warmer world the atmosphere holds proportionally more moisture. This governs not only the water vapour feedback but also the intensification of extreme precipitation — heavier downpours because the same storm draws on a moister atmosphere.',
          examples: 'Extreme precipitation scaling: heavy rainfall events intensifying at ~7 %/°C in observations and models · 1 °C (1.8°F) of warming since pre-industrial adds ~7 % more moisture to a global air parcel · Tropical cyclone rainfall rates intensifying consistent with CC scaling in satellite-era records',
        },
        {
          name: 'Lapse Rate Feedback: Partial Counterweight',
          icon: Globe,
          color: BRAND.coral,
          desc: 'Tropics: moist adiabatic adjustment warms upper troposphere ~0.6 °C (~1.1°F) per 1 °C (1.8°F) surface warming → upper troposphere radiates more to space → negative feedback (~−0.5 W/m²/°C). High latitudes: inversions concentrate warming near surface → positive feedback. Net global lapse rate feedback: −0.6 to −0.8 W/m²/°C.',
          examples: 'Tropical radiosonde trends: upper troposphere (300 hPa) warming faster than surface since 1979, consistent with moist adiabatic adjustment · Arctic amplification: surface warms 3–4× global mean partly from positive high-latitude lapse rate feedback · CMIP6 multi-model mean lapse rate feedback: −0.42 W/m²/°C (tropical) + positive polar contribution',
        },
        {
          name: 'Combined Effect: Nearly Doubling Warming',
          icon: Activity,
          color: BRAND.accent,
          desc: 'WV feedback (+1.8) + lapse rate feedback (−0.7) ≈ +1.0–1.1 W/m²/°C combined. Planck response: −3.2 W/m²/°C. Together WV + LR reduce the restoring force by ~33 %, substantially amplifying equilibrium warming. The two feedbacks are anti-correlated across models, making their sum more robustly constrained than either alone.',
          examples: 'Without WV + LR feedbacks, ECS would be ~1.2 °C (~2.2°F) per CO₂ doubling (Planck only); observed ECS ~2.5–4 °C (4.5–7.2°F) demonstrates their combined amplification · Radiative kernel decomposition (Soden et al. 2008): WV + LR contribute ~40 % of total feedback in CMIP models · CMIP6 ensemble: WV + LR combined feedback spread <20 % across models vs >100 % spread in cloud feedback',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'Feedback Chain: From CO₂ Forcing to Net Amplification',
      body: 'How initial CO₂ forcing propagates through water vapour and lapse rate feedbacks to produce amplified warming.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how CO₂ forcing triggers water vapour amplification and lapse rate adjustment to produce a net amplified warming',
        nodes: [
          {
            id: 'co2-forcing',
            label: 'CO₂ Forcing Warms Surface',
            description: 'A CO₂ doubling imposes ~3.7 W/m² of radiative forcing, directly warming the surface. Without any feedbacks the Planck response alone would produce ~1.2°C (~2.2°F) of warming.',
            color: BRAND.coral,
          },
          {
            id: 'clausius-clapeyron',
            label: 'Clausius-Clapeyron: More Water Vapour',
            description: 'Warmer surface and troposphere increase saturation vapour pressure at ~7%/°C. Relative humidity remains approximately constant so specific humidity rises, loading the atmosphere with additional moisture.',
            color: BRAND.jade,
          },
          {
            id: 'wv-feedback',
            label: 'Water Vapour Absorbs More IR (+ve feedback)',
            description: 'Additional H₂O absorbs outgoing infrared radiation at 6.3 μm and 15–100 μm, trapping more heat. Feedback strength: +1.8 W/m²/°C — the single largest amplifying feedback in the climate system.',
            color: BRAND.accentHot,
          },
          {
            id: 'tropical-upper-trop',
            label: 'Tropical Upper Troposphere Warms More',
            description: 'Moist adiabatic lapse rate adjustment causes the tropical upper troposphere (~300 hPa) to warm ~0.6°C (~1.1°F) for every 1°C (1.8°F) of surface warming. Deep convection transmits surface warmth aloft, releasing latent heat from condensing extra moisture.',
            color: BRAND.gold,
          },
          {
            id: 'lapse-rate-feedback',
            label: 'Lapse Rate Decreases (−ve feedback)',
            description: 'Enhanced upper tropospheric warming steepens the temperature aloft, increasing outgoing longwave radiation to space and partially offsetting the water vapour amplification. Lapse rate feedback: −0.6 to −0.8 W/m²/°C globally (negative in tropics, positive at high latitudes).',
            color: BRAND.amethyst,
          },
          {
            id: 'net-amplification',
            label: 'Net Amplification',
            description: 'Combined WV + lapse rate feedback: +1.0–1.1 W/m²/°C. Together with other feedbacks (albedo, cloud) these nearly double the warming from the Planck response alone, driving equilibrium climate sensitivity to ~2.5–4°C (4.5–7.2°F) per CO₂ doubling.',
            color: BRAND.accent,
          },
        ],
        edges: [
          { from: 'co2-forcing',        to: 'clausius-clapeyron',  label: 'Warming raises saturation vapour pressure' },
          { from: 'clausius-clapeyron', to: 'wv-feedback',         label: 'More H₂O → stronger IR absorption' },
          { from: 'wv-feedback',        to: 'net-amplification',   label: '+1.8 W/m²/°C amplification' },
          { from: 'co2-forcing',        to: 'tropical-upper-trop', label: 'Moist convection transmits warming aloft' },
          { from: 'tropical-upper-trop', to: 'lapse-rate-feedback', label: 'Upper troposphere radiates more to space' },
          { from: 'lapse-rate-feedback', to: 'net-amplification',  label: '−0.6 to −0.8 W/m²/°C partial offset' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What is the water vapour feedback and why is it classified as a positive feedback?',
          a: [
            'Water vapour feedback describes the additional greenhouse warming from increased atmospheric moisture as the climate warms; it is positive because more water vapour absorbs more outgoing infrared radiation, amplifying the initial warming that caused the moistening',
            'Water vapour feedback refers to clouds reflecting more sunlight as evaporation increases; it is positive because more clouds cool the planet and reduce warming',
            'Water vapour feedback is the cooling effect of increased evaporation from warmer oceans; it is positive because evaporation removes heat from the surface and deposits it in the upper atmosphere where it radiates away',
            'Water vapour feedback is the increase in precipitation as the atmosphere warms; it is positive because heavier rainfall returns latent heat to the surface faster than it can radiate away',
          ],
          correct: 0,
          explain: 'A positive feedback amplifies the initial perturbation. Water vapour (H₂O) absorbs outgoing longwave radiation at 6.3 μm and across the 15–100 μm far-infrared region. When CO₂ or another forcing warms the surface, the Clausius-Clapeyron relation causes atmospheric specific humidity to rise ~7 %/°C. This additional water vapour traps more outgoing infrared radiation, further warming the surface, which in turn drives more evaporation — a self-reinforcing loop. The feedback strength is approximately +1.8 W/m²/°C, making it the single largest positive feedback in the climate system. Option B describes cloud feedback (a separate, more uncertain feedback). Option C conflates evaporation (a surface energy flux) with the radiative effect of water vapour in the column. Option D describes the precipitation response, not a feedback on surface temperature.',
        },
        {
          q: 'What does the Clausius-Clapeyron relation predict for atmospheric moisture as the climate warms, and how has this been observationally confirmed?',
          a: [
            'Relative humidity increases by ~7 %/°C as warmer air holds more water; confirmed by surface hygrometer networks showing steadily rising relative humidity across all climate zones since 1950',
            'Specific humidity increases by ~7 %/°C while relative humidity remains approximately constant; confirmed by AIRS satellite retrievals and ERA5 reanalysis showing tropospheric moistening in proportion to temperature increases',
            'Total atmospheric water vapour column decreases as warming drives more moisture into clouds rather than the clear-sky column; confirmed by GRACE satellite measurements of reduced clear-sky water vapour content since 2002',
            'Water vapour increases only in the stratosphere by ~7 %/°C; tropospheric water vapour is insensitive to surface temperature because it is controlled by large-scale circulation, not temperature',
          ],
          correct: 1,
          explain: 'The Clausius-Clapeyron relation predicts that saturation vapour pressure — and hence the equilibrium water vapour content — increases approximately 7 % per °C warming. Critically, it is specific humidity (actual mass of water vapour per unit mass of air) that rises, not relative humidity. If relative humidity were to increase substantially, the climate feedback would be even stronger; if it fell significantly, the feedback would be weaker. General circulation models consistently predict ~constant relative humidity. This prediction has been confirmed by: (1) AIRS (Atmospheric Infrared Sounder, 2002–present) global tropospheric humidity profiles; (2) ERA5 reanalysis spanning 1979–present; (3) radiosonde data; (4) ARM program column measurements. These observations show specific humidity increasing at approximately the Clausius-Clapeyron rate across interannual variability and multi-decadal trends, providing strong empirical support for the water vapour feedback mechanism.',
        },
        {
          q: 'Why is the lapse rate feedback negative in the tropics but positive at high latitudes?',
          a: [
            'In the tropics, stronger solar radiation warms the upper atmosphere directly, emitting more radiation to space; at high latitudes, the sun is too weak to heat the upper atmosphere, so warming accumulates near the surface',
            'The tropical lapse rate feedback is negative because tropical oceans absorb more heat than they re-radiate; the high-latitude feedback is positive because frozen surfaces emit more radiation than liquid water surfaces',
            'In the tropics, active deep convection and moist adiabatic adjustment cause the upper troposphere to warm more than the surface per degree of warming, increasing outgoing longwave radiation; at high latitudes, strong surface temperature inversions concentrate warming near the surface, reducing the upper-level warming and hence outgoing longwave radiation',
            'In the tropics the lapse rate feedback is negative because tropical air masses are denser, making it harder for heat to penetrate to the upper troposphere; at high latitudes air is less dense so warming propagates all the way to the stratosphere where it can escape to space',
          ],
          correct: 2,
          explain: 'The lapse rate feedback depends on how warming is vertically distributed relative to the surface. In the tropics, deep convection couples the surface to the upper troposphere. When the surface warms by 1°C (1.8°F), latent heat release from condensing additional water vapour (following Clausius-Clapeyron) heats the rising air column, warming the upper troposphere by ~0.6°C (~1.1°F) — more than surface warming in relative terms. The warmer upper troposphere emits more energy to space, partially offsetting the greenhouse trapping: a negative feedback. In the Arctic and high latitudes, strong temperature inversions (cold air pooled near the surface, warm air aloft) suppress vertical convective mixing. Warming from CO₂ and other forcings accumulates near the surface rather than spreading through the column. The upper troposphere warms less than the surface, reducing outgoing longwave radiation from aloft — a positive feedback contribution. This high-latitude positive lapse rate feedback, combined with ice-albedo feedback, contributes to polar amplification: Arctic warming at 3–4× the global mean rate. Options A and D invoke incorrect physical mechanisms. Option B confuses ocean heat uptake and surface emissivity with the vertical temperature structure mechanism.',
        },
        {
          q: 'Why does relative humidity remain roughly constant as the climate warms, rather than increasing or decreasing substantially?',
          a: [
            'Relative humidity is maintained constant by a physical law analogous to Le Chatelier\'s principle — the climate system resists changes in relative humidity through precise coupling between evaporation rates and precipitation rates that have been validated in every climate model',
            'Relative humidity stays constant because the total amount of water on Earth is fixed; as ocean water evaporates into the atmosphere, an equivalent amount falls as rain, conserving relative humidity globally',
            'Relative humidity is held constant by the stratosphere, which acts as a cold trap that condenses any excess water vapour before it can accumulate; as tropospheric warming tries to raise relative humidity, the stratosphere removes the excess moisture as precipitation at the tropopause',
            'Relative humidity stays roughly constant because atmospheric circulation processes (convection, large-scale overturning) that distribute and remove water vapour scale with the moisture content of air: a moister atmosphere convects and precipitates more efficiently in proportion to its moisture load, maintaining the relative humidity near its current value; this emergent behaviour is robustly reproduced across climate models and confirmed in observations of interannual variability',
          ],
          correct: 3,
          explain: 'There is no single physical law that enforces constant relative humidity — it is an emergent property of atmospheric dynamics. The key insight is that the large-scale circulation processes that transport, condense, and precipitate water vapour scale with the moisture content of the atmosphere. When the atmosphere is moister (at higher temperature), convective processes are more vigorous and efficient at redistributing moisture; regions that are dry (subsidence zones) remain dry in relative terms because subsiding air is still unsaturated relative to the warmer surface. Eddy transport of moisture also scales with moisture gradients. The net effect, confirmed across climate models and in observations, is that relative humidity changes by only a few percent even for several degrees of warming — while specific humidity changes by ~7 %/°C. Option A invokes a physical law that does not exist for relative humidity. Option B conflates the global water cycle (which does balance evaporation and precipitation) with relative humidity, which is a local measure. Option C describes the cold trap at the tropopause that controls stratospheric water vapour, not tropospheric relative humidity.',
        },
        {
          q: 'The combined water vapour and lapse rate feedback has a value of approximately +1.0–1.1 W/m²/°C. What does this imply for equilibrium climate sensitivity, and why is this combined value more robustly constrained than either feedback alone?',
          a: [
            'The combined feedback implies equilibrium climate sensitivity of exactly 3°C (5.4°F) per CO₂ doubling; it is robustly constrained because both feedbacks are governed by the same Clausius-Clapeyron equation and therefore cannot vary independently across models',
            'The combined feedback substantially amplifies warming above the Planck response (−3.2 W/m²/°C): by reducing the net restoring force, it means the climate must warm more to restore energy balance per unit forcing; the combined value is robust because water vapour and lapse rate feedbacks are anti-correlated across models — models with stronger water vapour moistening of the upper troposphere tend to produce a more negative tropical lapse rate feedback, so the sum varies less than either component',
            'The combined feedback implies that equilibrium climate sensitivity is exactly the inverse of the Planck response divided by the combined feedback value; the sum is robust because both feedbacks are measured independently by the same AIRS satellite instrument, which removes instrument bias as a source of inter-model variation',
            'The combined feedback of +1.0–1.1 W/m²/°C is negligible compared to the Planck response (−3.2 W/m²/°C) and cloud feedbacks, so it has little effect on equilibrium climate sensitivity; it is well constrained because small feedbacks have less physical complexity and are therefore easier to model accurately',
          ],
          correct: 1,
          explain: 'The Planck response is the fundamental restoring force: −3.2 W/m²/°C (warmer surface emits more longwave radiation). Adding +1.0–1.1 W/m²/°C from the combined water vapour and lapse rate feedbacks reduces the effective restoring force to approximately −2.1 to −2.2 W/m²/°C, meaning the climate must warm more per unit of forcing to re-establish energy balance. In the simplest feedback framework, equilibrium temperature change ΔT = ΔF / (−λ_Planck − Σλ_feedbacks). With the combined WV + LR reducing the denominator by ~33 %, the warming per CO₂ doubling increases correspondingly. The combined feedback is robust because of anti-correlation: in the tropics, a moister upper troposphere (stronger WV feedback) also implies more latent heat release during convection → greater upper tropospheric warming → stronger negative lapse rate feedback. The two effects partially cancel in individual model variations. Option A incorrectly states a deterministic ECS value (many other feedbacks, especially cloud, also contribute to ECS uncertainty). Option C mischaracterises how AIRS measurements relate to model comparisons. Option D incorrectly characterises the magnitude as negligible — +1.0–1.1 W/m²/°C is a large fraction of the Planck response and is central to why ECS exceeds 1.2°C (2.2°F).',
        },
      ],
    },
  ],
}

export default waterVaporLapseRate
