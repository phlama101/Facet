import { Activity, Globe, Layers, ArrowRight, Zap } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const streamDischarge: Lesson = {
  id: 'hyd-101-1-2-2',
  title: 'Stream Discharge, Rating Curves, and Flood Hydrographs',
  track: 'cli',
  trackName: 'Hydrology',
  level: 'Beginner',
  duration: '12 min',
  xpReward: 120,
  description: 'Measuring rivers: from wading rods to ADCP to the hydrograph that predicts a flood\'s arrival',
  sources: [
    { org: 'USGS', title: 'USGS — Streamflow Measurement',                              url: 'https://www.usgs.gov/special-topics/water-science-school/science/how-usgs-measures-streamflow' },
    { org: 'USGS', title: 'USGS — National Water Information System',                   url: 'https://waterdata.usgs.gov/nwis' },
    { org: 'NOAA', title: 'NOAA — Flood Frequency Analysis',                            url: 'https://www.nws.noaa.gov/ohd/hdsc/' },
    { org: 'AGU',  title: 'AGU — Geophysical Research Letters: Flood Hydrology',        url: 'https://agupubs.onlinelibrary.wiley.com/' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'Measuring rivers: from wading rods to ADCP to the hydrograph that predicts a flood\'s arrival',
      body: `Streamflow — the volume of water passing a cross-section per unit time — is measured as discharge (Q) in cubic metres per second (m³/s) or cubic feet per second (cfs). The fundamental measurement equation is Q = A × V, where A is the cross-sectional area of the channel and V is the mean velocity of the water. Historical streamflow measurement required hydrologists to physically wade into rivers with current meters; today, Acoustic Doppler Current Profilers (ADCPs) mounted on boats or cableways measure velocity profiles across the entire channel width in minutes. The USGS operates over 11,000 active streamgauging stations in the United States, representing one of the world\'s most comprehensive hydrological monitoring networks.

At a permanent gauging station, continuous water level (stage) is measured by a pressure transducer or float gauge every 15 minutes. Stage is converted to discharge using a rating curve — an empirically derived relationship between stage and discharge established by repeated discharge measurements at various flow levels. Rating curves are typically power-law relationships: Q = a(h − h₀)^b, where h is stage, h₀ is the stage at zero flow, and a, b are fitted parameters. Rating curves must be periodically updated because channel geometry changes due to sediment deposition, scour, and vegetation. Manning\'s equation (V = (1/n) × R^(2/3) × S^(1/2), where n is roughness, R is hydraulic radius, S is water surface slope) provides an independent check on velocities.

A flood hydrograph shows the time variation of discharge at a gauging station in response to a storm. Key features include: the rising limb (discharge increases as runoff reaches the channel), peak discharge (maximum flow), the falling limb (recession as stored water drains), and baseflow (groundwater contribution before and after the storm). Hydrograph shape reflects watershed geometry, soil conditions, and storm properties. The unit hydrograph (Sherman, 1932) is the hydrograph produced by 1 unit of effective rainfall uniformly distributed over the watershed — a key concept in design flood estimation. Time of concentration (Tc) is the time for runoff to travel from the farthest point of the watershed to the outlet.

Flood frequency analysis relates flood magnitude to recurrence interval (return period). The "100-year flood" (Q100) has a 1% annual exceedance probability (AEP) — meaning there is a 1% chance of that discharge being exceeded in any given year. This is a probability statement, not a guarantee of 50-100 year spacing. Log-Pearson Type III and GEV (Generalised Extreme Value) distributions are fit to the annual maximum discharge record to estimate Q10, Q50, Q100, and Q500. A 30-year record gives reliable estimates for Q10–Q50 but large uncertainty for Q100. FEMA uses Q100 as the standard for flood insurance and floodplain regulation in the US National Flood Insurance Program (NFIP).`,
      keyTerms: [
        {
          term: 'Discharge (Q)',
          def: 'Volume of water flowing past a cross-section per unit time (m³/s or cfs). Q = Area × Velocity.',
        },
        {
          term: 'Rating Curve',
          def: 'Empirical stage-discharge relationship at a gauging station: Q = a(h-h₀)^b. Must be recalibrated as channel changes.',
        },
        {
          term: 'Unit Hydrograph',
          def: 'Hydrograph produced by 1 unit (e.g., 1 mm) of effective rainfall over a watershed; used to estimate design floods.',
        },
        {
          term: 'Annual Exceedance Probability (AEP)',
          def: 'Probability of a flood of given magnitude being exceeded in any one year. 100-yr flood = 1% AEP.',
        },
        {
          term: 'Time of Concentration (Tc)',
          def: 'Travel time from the farthest watershed point to the outlet; controls hydrograph timing and peak discharge.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Reading a Flood Hydrograph',
      body: `The hydrograph encodes watershed behaviour in its shape. Rising limb steepness reflects drainage efficiency and storm intensity. Peak timing relative to storm end reflects time of concentration. Recession curve shape reveals groundwater contributions. Understanding these elements allows engineers to design flood-safe infrastructure and emergency managers to issue timely flood warnings.`,
      cards: [
        {
          name: 'Rising Limb',
          icon: Zap,
          color: BRAND.coral,
          desc: 'Discharge increases as runoff from across the watershed reaches the gauging point. Steep = flashy urban/mountain basin. Gradual = large flat forested basin.',
          examples: 'Flash flood creek in Phoenix: 0 to 200 m³/s in 20 min. Missouri River rising limb during spring melt: weeks to peak.',
        },
        {
          name: 'Peak Discharge',
          icon: Activity,
          color: BRAND.ruby,
          desc: 'Maximum flow; determines flood inundation extent. Controlled by antecedent wetness, storm intensity × duration, and Tc.',
          examples: 'Mississippi River at St. Louis: 1993 flood peak 30,600 m³/s. Normal summer baseflow: ~2,000 m³/s. 15× difference.',
        },
        {
          name: 'Recession / Falling Limb',
          icon: ArrowRight,
          color: BRAND.jade,
          desc: 'Declining discharge after peak. Initially surface runoff-dominated; later groundwater-fed baseflow controls slow decay.',
          examples: 'Baseflow recession constant K = 0.9-0.99/day for most rivers. Rivers with large groundwater inputs (karst, alluvial) have very slow recession.',
        },
        {
          name: 'Rating Curve',
          icon: Layers,
          color: BRAND.gold,
          desc: 'Stage (water level) measured continuously; converted to Q via Q=a(h-h₀)^b. Must be recalibrated after channel scour or deposition.',
          examples: 'After a large flood scours the channel bed, the same water level produces higher Q. USGS updates rating curves after every major flood event.',
        },
        {
          name: 'Return Period',
          icon: Globe,
          color: BRAND.amethyst,
          desc: '100-yr flood = 1% chance per year, not once every 100 years. Can occur in consecutive years. AEP framing clarifies this.',
          examples: 'Houston had 3 separate "500-year floods" in 3 years (2015, 2016, 2017 Harvey). Each individual event ~0.2% probability; cluster not impossible.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From Storm to Streamflow: Building a Flood Hydrograph',
      body: 'How precipitation translates into a river hydrograph through runoff generation, routing, and baseflow contributions.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'showing how precipitation over a watershed is transformed into a flood hydrograph through runoff generation, channel routing, rising limb, peak discharge, and recession',
        nodes: [
          {
            id: 'storm-rainfall',
            label: 'Storm Rainfall',
            description: 'Precipitation begins over watershed. Effective rainfall = total minus infiltration and interception losses. Intensity × duration controls runoff volume.',
            color: BRAND.accent,
          },
          {
            id: 'runoff-generation',
            label: 'Runoff Generation',
            description: 'Hortonian or saturation-excess overland flow begins. Subsurface stormflow activated. Runoff volume depends on antecedent soil moisture and storm magnitude.',
            color: BRAND.coral,
          },
          {
            id: 'channel-routing',
            label: 'Channel Routing',
            description: 'Runoff reaches stream network; routed downstream. Translation (travel time) and attenuation (peak reduction) transform the input hydrograph. Muskingum or kinematic wave models.',
            color: BRAND.jade,
          },
          {
            id: 'rising-limb',
            label: 'Rising Limb',
            description: 'Streamflow increases as runoff from progressively more distant parts of the watershed arrives. Rate of rise = runoff generation rate minus travel time spread.',
            color: BRAND.gold,
          },
          {
            id: 'peak-flow',
            label: 'Peak Discharge',
            description: 'Maximum streamflow reached when all contributing area is delivering runoff simultaneously. Determined by storm intensity, basin area, and time of concentration.',
            color: BRAND.ruby,
          },
          {
            id: 'recession',
            label: 'Recession & Baseflow',
            description: 'Surface runoff ceases; streamflow declines exponentially. Baseflow (groundwater drainage) sustains the stream during dry periods. Recession rate K = 0.9-0.99/day.',
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'storm-rainfall',    to: 'runoff-generation', label: 'Losses subtracted' },
          { from: 'runoff-generation', to: 'channel-routing',   label: 'Enters stream network' },
          { from: 'channel-routing',   to: 'rising-limb',       label: 'Downstream translation' },
          { from: 'rising-limb',       to: 'peak-flow',         label: 'Full contributing area active' },
          { from: 'peak-flow',         to: 'recession',         label: 'Storm ends; runoff declines' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'Why do stream gauging stations continuously measure water level (stage) rather than directly measuring discharge?',
          a: [
            'Discharge is too expensive to measure directly; stage is a reasonable substitute that does not require calibration',
            'Stage can be measured automatically with simple sensors; discharge requires measuring velocity across the channel, which is done periodically to calibrate the stage-discharge rating curve',
            'Stage measurements are required by law for floodplain mapping; discharge measurements are optional',
            'Stage measurements record flood peaks instantaneously; discharge measurements have a 15-minute delay',
          ],
          correct: 1,
          explain: 'Directly measuring discharge (Q = A × V) requires measuring the velocity at many points across the channel cross-section — historically done by wading with a current meter, now by ADCP. This is expensive, dangerous during floods, and cannot be automated continuously. Stage (water level) can be measured automatically every 15 minutes with inexpensive pressure transducers or float gauges. Hydrologists establish a rating curve — a calibration relationship between stage and discharge — by conducting many direct discharge measurements at various flow levels over years. Once calibrated, the continuously monitored stage is converted to discharge using the rating curve. The rating curve must be periodically updated because channel geometry changes due to erosion, deposition, or vegetation growth.',
        },
        {
          q: 'Manning\'s equation V = (1/n) × R^(2/3) × S^(1/2) relates channel velocity to three variables. What does "n" represent and what affects its value?',
          a: [
            'n is the channel cross-sectional area; increases with flood stage',
            'n is the roughness coefficient; higher n means slower flow. Smooth concrete channels: n ≈ 0.013; natural channels with boulders: n ≈ 0.04-0.10',
            'n is the hydraulic gradient; increases as channel slope steepens downstream',
            'n is the Froude number; below 1 indicates subcritical flow',
          ],
          correct: 1,
          explain: 'Manning\'s roughness coefficient n quantifies the resistance to flow from channel boundary friction. Smooth surfaces have low n (fast flow): concrete flumes ~0.013, straight clean natural channels ~0.025–0.033. Rough, vegetated, or irregular channels have high n: channels with heavy brush and weeds ~0.05–0.10; mountain streams with large boulders ~0.04–0.07. For a given hydraulic radius (R, cross-sectional area / wetted perimeter) and water surface slope (S), doubling n roughly halves the velocity. During floods, vegetation on floodplains dramatically increases effective n, slowing floodplain flows while the main channel carries faster water — an important consideration for flood routing models.',
        },
        {
          q: 'A stream gauge has a 90-year record. How confident should you be in its estimated 100-year flood discharge?',
          a: [
            'Very confident — 90 years of data is more than enough for reliable 100-year return period estimation',
            'Moderately uncertain — 90 years barely exceeds the return period, and the estimate has wide confidence intervals; at least 150-200 years of data would improve confidence significantly',
            'Not at all reliable — return period estimates require at least 1,000 years of data to be statistically valid',
            'Perfectly reliable because the 100-year flood is directly observed in a 90+ year record by definition',
          ],
          correct: 1,
          explain: 'Statistical theory for extreme value distributions (Log-Pearson Type III, GEV) shows that confidence intervals on return period estimates widen dramatically as the return period approaches and exceeds the record length. With a 90-year record, the 95% confidence interval around the Q100 estimate typically spans a factor of 1.5–2.5× the point estimate. A record length of ~150–200 years provides substantially better Q100 constraints. For Q500, even a 100-year record provides poor estimates. This is why USGS flood frequency guidelines require careful attention to confidence intervals, regional regression equations that pool data across gauges, and paleoflood records from geological evidence (high-water marks, slack-water deposits) when long records are needed.',
        },
        {
          q: 'What is the probability that a "100-year flood" will be exceeded at least once during a 50-year building design life?',
          a: [
            '1% — by definition, 100-year floods can only occur once per century',
            'About 40% — the cumulative probability of at least one exceedance in 50 independent trials each with 1% probability',
            'Exactly 50% — the 100-year flood is defined as having a 50% chance of being exceeded in 50 years',
            '100% — in exactly 50 years, the 100-year flood will have occurred exactly half a time',
          ],
          correct: 1,
          explain: 'The probability of the 100-year flood being exceeded at least once in N years is P = 1 - (1 - 1/T)^N where T is the return period. For T = 100 years and N = 50 years: P = 1 - (0.99)^50 = 1 - 0.605 = 0.395, or about 40%. This counterintuitive result — a 40% chance of the 100-year flood occurring in just 50 years — often surprises people who think "100 years" means they are safe for a century after one event. In reality, each year is an independent trial. The 100-year flood designation means 1% AEP per year, and over a 50-year building lifetime, there is a 40% chance of experiencing it. Engineers often use the 500-year flood (0.2% AEP, ~10% chance in 50 years) as the design standard for critical infrastructure.',
        },
        {
          q: 'How does the unit hydrograph concept help engineers design storm drainage systems?',
          a: [
            'It provides a universal hydrograph shape valid for all watersheds above 100 km²',
            'It defines the basin\'s characteristic response to 1 unit of effective rainfall; scaling and superposition allow estimation of the runoff hydrograph from any design storm',
            'It measures actual discharge per unit watershed area; enables direct comparison between gauged and ungauged basins',
            'It separates baseflow from storm runoff automatically; baseflow is defined as the unit hydrograph baseline',
          ],
          correct: 1,
          explain: 'The unit hydrograph (UH) concept (Sherman, 1932) is based on linear systems theory: if the UH is the response to 1 mm of effective rainfall uniformly distributed in time, then the response to any other effective rainfall can be estimated by scaling and time-shifting the UH. For a complex multi-hour storm with varying intensity, the total runoff hydrograph is the sum of UH contributions from each time period, each scaled by that period\'s effective rainfall. This superposition principle allows engineers to compute the design flood hydrograph for any synthetic design storm (e.g., the 24-hour PMP or 100-year 24-hour rainfall) from measurements made during historical storms. Engineers use UH-derived peak flows to design culverts, bridges, detention basins, and spillways.',
        },
      ],
    },
  ],
}

export default streamDischarge
