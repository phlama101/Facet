import { Layers, Globe, Activity, Zap, ArrowRight } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson } from './types'

const iceShelvesInstability: Lesson = {
  id: 'glac-101-1-2-4',
  title: 'Ice Shelves, Grounding Lines, and Marine Ice Sheet Instability',
  track: 'geo',
  trackName: 'Glaciology',
  level: 'Foundations',
  duration: '12 min',
  xpReward: 120,
  description: 'How floating ice shelves stabilise marine ice sheets, and the physical mechanisms that could trigger irreversible collapse',
  sources: [
    { org: 'BAS',  title: 'British Antarctic Survey',                                                           url: 'https://www.bas.ac.uk' },
    { org: 'IPCC', title: 'IPCC — Special Report on the Ocean and Cryosphere in a Changing Climate',           url: 'https://www.ipcc.ch/srocc' },
    { org: 'AGU',  title: 'AGU — Geophysical Research Letters',                                                url: 'https://agupubs.onlinelibrary.wiley.com' },
    { org: 'SCAR', title: 'SCAR — Scientific Committee on Antarctic Research',                                 url: 'https://scar.org' },
  ],
  sections: [
    {
      type: 'intro',
      title: 'When floating ice disappears: the physics of ice shelf collapse and what follows',
      body: `An ice shelf is the floating extension of a grounded ice sheet — a thick platform of glacier ice that has spread out over the ocean and reached near-ice-density equilibrium with seawater. Where this floating ice joins the bed beneath, the grounding line marks the exact transition from grounded to floating: the boundary where ice lifts off the bedrock and hydrostatic floatation takes over. The position of the grounding line is governed by Archimedes\' principle — ice becomes buoyant when ρ_ice × H_ice ≈ ρ_seawater × H_water, placing grounding lines where ice thickness is roughly ten-elevenths of the local water depth.

Ice shelves are not passive features. They exert buttressing back-stress on the inland glaciers feeding them, slowing the rate at which ice discharges into the ocean. Remove the shelf and the tributary glaciers accelerate, increasing mass loss and sea level contribution. This principle was demonstrated definitively in 2002 when the Larsen B Ice Shelf on the Antarctic Peninsula disintegrated — 3,250 km² of ice vanished in approximately 35 days, and tributary glaciers immediately accelerated 2–8 times their previous velocities.

Marine Ice Sheet Instability (MISI) is a physical feedback first described theoretically by Weertman (1974): on retrograde bed slopes (where the seafloor deepens inland from the coast), a retreating grounding line encounters progressively thicker ice. Because ice flux through the grounding line scales nonlinearly with ice thickness (Q ∝ H^m, m ≈ 3–5), thicker ice drives higher discharge, which causes further retreat — a self-reinforcing positive feedback that can continue without any additional climate forcing until the grounding line reaches the next prograde section. Deep retrograde basins beneath the West Antarctic Ice Sheet, particularly beneath Thwaites and Pine Island glaciers, have made MISI a central concern in sea level projections.

A second, more controversial mechanism is Marine Ice Cliff Instability (MICI): once an ice shelf is removed, the grounding line is exposed directly to the ocean as a vertical ice cliff. For cliffs exceeding roughly 100 m in height, structural stresses are thought to exceed the yield strength of ice, producing rapid calving. DeConto and Pollard (2016) proposed that MICI combined with MISI could raise sea levels by 1–2 m from Antarctica alone by 2100 under high-emission scenarios — though subsequent work by Edwards et al. (2019) disputed the magnitude and the IPCC SROCC treats MICI as a low-likelihood, high-impact scenario.

The Thwaites Glacier — sometimes called the \'Doomsday Glacier\' — has retreated roughly 14 km/yr since the 1990s, and its grounding line moved onto a retrograde sill by 2019. The International Thwaites Glacier Collaboration (ITGC) is conducting intensive field investigations to determine whether MISI is already underway. Thwaites alone contains ~0.5 m of sea level equivalent; its potential to destabilise the broader WAIS basin threatens 3.3 m on millennial timescales. Together, Thwaites and Pine Island Glacier embody the concept of tipping points in the Earth system — thresholds beyond which change may become self-sustaining and irreversible regardless of subsequent emissions trajectories.`,
      keyTerms: [
        {
          term: 'grounding line',
          def: 'The boundary where a grounded ice sheet transitions to a floating ice shelf; position governed by Archimedes\' principle — ice floats when its thickness is ~10/11 of the local water depth.',
        },
        {
          term: 'ice shelf buttressing',
          def: 'The back-stress that a floating ice shelf exerts on tributary glaciers, reducing their flow speed and ice discharge into the ocean; loss of buttressing accelerates glacier flow.',
        },
        {
          term: 'Marine Ice Sheet Instability',
          def: 'A positive feedback on retrograde bed slopes: grounding line retreat encounters thicker ice, increasing flux, driving further retreat — theoretically self-reinforcing without additional climate forcing.',
        },
        {
          term: 'retrograde bed slope',
          def: 'Bed topography that deepens inland from the coast; a necessary condition for Marine Ice Sheet Instability because retreating grounding lines encounter progressively thicker ice columns.',
        },
        {
          term: 'calving',
          def: 'The fracture and detachment of icebergs from the front of a glacier or ice shelf; calving is a primary mechanism of ice mass loss for marine-terminating glaciers and ice shelves.',
        },
      ],
    },
    {
      type: 'concept',
      title: 'Ice Shelves, Grounding Lines, and Instability Mechanisms',
      body: 'The stability of marine ice sheets depends on the interplay of ice shelf geometry, bed topography, ocean heat, and nonlinear ice dynamics. Four interconnected concepts govern how ice shelves form and fail, how grounding lines migrate, and how instability feedbacks can produce rapid and potentially irreversible ice loss.',
      cards: [
        {
          name: 'Ice Shelves: Structure and Formation',
          icon: Layers,
          color: BRAND.accent,
          desc: 'Ice shelves form where glacier ice extends over the ocean and floats; they are in hydrostatic equilibrium with ~10% above water and ~90% submerged; fed by upstream glaciers and surface snow accumulation; lost by calving and basal melt.',
          examples: 'Ross Ice Shelf (~500,000 km², ~200 m thick average) is the world\'s largest floating ice body — roughly the size of France. The Ronne-Filchner Ice Shelf (450,000 km²) in the Weddell Sea receives ice from both EAIS and WAIS outlet glaciers. Ice shelves are typically 100–1,000 m thick where they meet the grounding line, thinning to 100–300 m at the calving front.',
        },
        {
          name: 'The Grounding Line: Where Ice Meets Ocean',
          icon: Globe,
          color: BRAND.jade,
          desc: 'The grounding line marks the transition from ice in contact with the bed (grounded) to floating ice shelf; its position is set by bed topography and sea level; grounding line migration signals ice sheet advance or retreat.',
          examples: 'Grounding line retreat of 14 km/yr was measured at Thwaites Glacier 1996–2011 — among the fastest ever observed. The grounding line can be detected remotely by differential interferometric SAR (DInSAR) using ice flexure in the tidal zone. Seasonal tidal grounding line migration of ~1 km has been documented at some Antarctica glaciers.',
        },
        {
          name: 'Marine Ice Sheet Instability (MISI)',
          icon: Activity,
          color: BRAND.coral,
          desc: 'On retrograde beds (deepening inland), grounding line retreat is unstable — thicker ice flux at the new grounding line exceeds the flux it can sustain, driving further retreat without additional forcing; theoretical prediction by Weertman (1974) confirmed by observations.',
          examples: 'Thwaites\' East Thwaites Ice Shelf grounding line retreated onto a retrograde sill in 2019 — a potential MISI trigger. Schoof (2007) and Gudmundsson (2013) extended Weertman\'s model to include ice streams and buttressing effects. Models suggest Thwaites grounding line could retreat 100+ km into the deep WAIS basin within decades if MISI is underway.',
        },
        {
          name: 'Marine Ice Cliff Instability (MICI) and Tipping Points',
          icon: Zap,
          color: BRAND.gold,
          desc: 'If ice shelf loss exposes tall (~100 m) ice cliffs, structural failure may produce rapid calving (MICI); controversial but high-impact mechanism; combination with MISI could produce rapid WAIS collapse and multi-meter sea level rise.',
          examples: 'DeConto & Pollard (2016) proposed MICI could produce 1–2 m of Antarctic sea level contribution by 2100 under high emissions. Edwards et al. (2019) challenged MICI magnitude estimates; current IPCC treatment assigns it to low-likelihood, high-impact scenario. Ice cliff failures analogous to MICI have been documented at Jakobshavn and other marine-terminating glaciers at smaller scale.',
        },
      ],
    },
    {
      type: 'visualization',
      title: 'From Ice Shelf Thinning to Grounding Line Retreat',
      body: 'Follow the sequence from ice shelf thinning to grounding line retreat and potential runaway ice loss.',
      interaction: {
        type: 'flow-simulator' as const,
        description: 'Follow the sequence from ice shelf thinning to grounding line retreat and potential runaway ice loss',
        nodes: [
          {
            id: 'grounded-ice',
            label: 'Grounded Ice Sheet',
            description: 'Ice resting on bedrock. Weight supported by bed. Flows toward coast under gravity.',
            color: BRAND.accent,
          },
          {
            id: 'grounding-line',
            label: 'Grounding Line',
            description: 'Transition from grounded to floating. Ice lifts off the bed here. Depth set by ice thickness.',
            color: BRAND.jade,
          },
          {
            id: 'ice-shelf',
            label: 'Floating Ice Shelf',
            description: 'Extends over ocean in hydrostatic equilibrium. Provides buttressing to grounded ice.',
            color: BRAND.accentHot,
          },
          {
            id: 'basal-melt',
            label: 'Ocean Basal Melting (CDW)',
            description: 'Warm Circumpolar Deep Water contacts ice shelf base. Melt rates 20–70 m/yr. Thins ice shelf.',
            color: BRAND.coral,
          },
          {
            id: 'calving-front',
            label: 'Calving Front',
            description: 'Ice shelf front where icebergs calve. If shelf collapses, exposes grounding line directly to ocean.',
            color: BRAND.ruby,
          },
          {
            id: 'misi-retreat',
            label: 'MISI: Retrograde Retreat',
            description: 'Grounding line retreats to deeper bed. Thicker ice, higher flux, accelerating retreat — self-reinforcing.',
            color: BRAND.amethyst,
          },
        ],
        edges: [
          { from: 'grounded-ice',   to: 'grounding-line', label: 'Ice flows to floatation depth' },
          { from: 'grounding-line', to: 'ice-shelf',       label: 'Ice goes afloat beyond grounding line' },
          { from: 'ice-shelf',      to: 'basal-melt',      label: 'Ocean water intrudes under shelf' },
          { from: 'basal-melt',     to: 'calving-front',   label: 'Shelf thins, weakens, calves' },
          { from: 'calving-front',  to: 'misi-retreat',    label: 'Back-stress lost — grounding line retreats' },
          { from: 'misi-retreat',   to: 'grounding-line',  label: 'Deeper bed → thicker ice → more flux' },
        ],
      },
    },
    {
      type: 'quiz',
      questions: [
        {
          q: 'What is the grounding line of an ice sheet, and what physical condition determines its position?',
          a: [
            'The highest elevation on the ice sheet where snow accumulation transitions to net ablation',
            'The boundary where the base of the ice sheet loses contact with the bedrock and the ice becomes buoyant — determined by the ratio of ice thickness to water depth (Archimedes\' principle)',
            'The edge of the ice shelf where icebergs calve into the ocean',
            'The equilibrium line between fast-flowing ice streams and slow interior ice',
          ],
          correct: 1,
          explain: `The grounding line marks where grounded ice (resting on the bed, with its full weight supported by the substrate) transitions to floating ice (in hydrostatic equilibrium with seawater). Its position is governed by Archimedes\' principle: ice begins to float when ρ_ice × H_ice = ρ_seawater × H_water, where H_ice is ice thickness and H_water is water depth. Since ρ_ice/ρ_seawater ≈ 0.9, ice begins to float when it is ~10% thicker than the water depth. In practice, grounding lines occur where ice thickness approximately equals the floatation thickness for the local ocean depth. They migrate as the ice sheet thins or thickens and as local sea level changes. Remote sensing (InSAR tidal flexure analysis) can locate grounding lines within tens of metres using satellite radar.`,
        },
        {
          q: 'The buttressing hypothesis predicts that ice shelf removal accelerates tributary glacier flow. What observational evidence most strongly supports this?',
          a: [
            'Ice streams in Antarctica flow faster in summer when surface melt is highest',
            'Following the Larsen B Ice Shelf collapse in 2002, tributary glaciers accelerated 2–8× within months, while glaciers feeding the intact Larsen C shelf showed no change',
            'Thickening of ice shelves during cold years is correlated with slower glacier velocities',
            'Numerical models predict acceleration, providing theoretical support for the hypothesis',
          ],
          correct: 1,
          explain: `The Larsen B collapse (3,250 km² in ~35 days in February–March 2002) provided the most direct natural experiment. Rignot et al. (2004) and Scambos et al. (2004) measured InSAR velocity fields before and after: the Crane Glacier accelerated from ~0.8 to ~3.1 km/yr (a factor of ~4); the Flask and Leppard glaciers similarly accelerated 2–3×. Critically, glaciers that still flowed into the surviving Larsen C portion showed no velocity change. This before-and-after comparison, with a natural control (Larsen C), is considered definitive observational proof of buttressing — ice shelves actively resist the flow of tributary glaciers, and their removal triggers immediate dynamic response. This result directly informs concerns about marine-terminating glaciers in West Antarctica.`,
        },
        {
          q: 'Marine Ice Sheet Instability (MISI) was first theoretically described by Weertman (1974). What is the core physical mechanism?',
          a: [
            'Ocean warming melts the base of marine ice sheets faster than surface accumulation can replace the lost ice',
            'On retrograde bed slopes (bed deepening inland), ice flux at the grounding line increases with thickness, so retreat onto a thicker ice column drives further retreat — the system has no stable equilibrium',
            'Sea level rise from melting glaciers floods the grounding line, causing ice to float off the bed and drift away',
            'Increased calving rates from taller ice cliffs produce a cascade of iceberg production that cannot be replaced',
          ],
          correct: 1,
          explain: `The MISI mechanism (Weertman 1974, extended by Schoof 2007): ice flux through the grounding line (Q ∝ H^m, where H is ice thickness and m ≈ 3–5 from Glen\'s flow law) increases nonlinearly with ice thickness. On a prograde bed (shallowing inland), thinner ice at a retreating grounding line means lower flux, allowing the grounding line to stabilise — negative feedback. On a retrograde bed (deepening inland), a retreating grounding line encounters thicker ice, driving higher ice flux, which causes further retreat — a positive feedback with no equilibrium. The grounding line can only stabilise at the next prograde section (a bedrock ridge). Between ridges, retreat is theoretically unstoppable regardless of subsequent climate. This is why the discovery of deep retrograde basins beneath WAIS (Thwaites, Pine Island) is scientifically alarming.`,
        },
        {
          q: 'Ice shelves can be thinned by two very different processes. What are they, and which is currently dominant in West Antarctica?',
          a: [
            'Surface melt (from warm air) and calving (from ocean waves); surface melt dominates',
            'Basal melting (from warm ocean water infiltrating under the shelf) and surface melt (from warm air); basal melting dominates in West Antarctica',
            'Calving (from warm ocean waves) and internal deformation (ice shelf spreading); calving dominates',
            'Solar radiation absorption and geothermal heat; solar dominates',
          ],
          correct: 1,
          explain: `Ice shelves lose mass by: (1) calving — the periodic detachment of icebergs at the calving front; (2) basal melting — ocean heat fluxed to the ice shelf bottom through cavity circulation; and (3) surface processes (melt, sublimation) — minor for most Antarctic shelves. In West Antarctica, basal melting by intrusion of warm Circumpolar Deep Water (CDW, +1.5°C above freezing point) is the dominant thinning mechanism. Basal melt rates under Pine Island Glacier\'s ice shelf reach ~100 m/yr; under Thwaites ~70 m/yr. This is 10–100× higher than calving flux and >1,000× higher than surface processes. Conversely, on the Antarctic Peninsula (Larsen shelves), surface melt and hydrofracture (meltwater penetrating crevasses and wedging them open) drove the Larsen A (1995) and B (2002) collapses, as warm summer air temperatures exceeded the −9°C annual mean threshold for ice shelf viability.`,
        },
        {
          q: 'Why is Thwaites Glacier in West Antarctica sometimes called the \'Doomsday Glacier\'?',
          a: [
            'It is the largest glacier in Antarctica and contains more ice than any other single glacier',
            'Its potential collapse could trigger broader WAIS destabilisation: the glacier alone contains ~0.5 m of sea level equivalent, and its loss could raise sea level by ~3.3 m (the full WAIS contribution) through dynamic effects',
            'Thwaites is the only glacier currently showing evidence of Marine Ice Sheet Instability',
            'The glacier is located directly above a major Antarctic volcanic hotspot that could accelerate melting',
          ],
          correct: 1,
          explain: `Thwaites Glacier drains ~8% of the Antarctic Ice Sheet through a ~120 km wide calving front. The direct sea level contribution of Thwaites ice above floatation is ~0.5 m. However, its instability concerns scientists for a deeper reason: Thwaites acts as a \'cork\' holding back the broader WAIS basin. Ice flow models show that the destabilisation of Thwaites could progressively unpin adjacent glaciers (Pope, Smith, Kohler, and ultimately the broader Amundsen Sea sector), releasing 3.3 m of WAIS sea level equivalent over centuries to millennia. Its grounding line has retreated ~14 km/yr since the 1990s; the International Thwaites Glacier Collaboration (ITGC) is conducting intensive field studies to determine whether MISI is already underway. The \'Doomsday\' moniker, while journalistically dramatic, captures the scientific concern that Thwaites may be approaching an irreversible tipping point.`,
        },
      ],
    },
  ],
}

export default iceShelvesInstability
