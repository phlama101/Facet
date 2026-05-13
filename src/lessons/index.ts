import { Mountain, Layers, Waves, Wind, Flame, Thermometer, Telescope, Activity, Snowflake } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson, TrackId, Chapter, LearningPath } from './types'

import earthInternalStructure      from './geol-101-1-1'
import crustContinentalVsOceanic   from './geol-101-1-2'
import mantleConvection            from './geol-101-1-3'
import coreAndMagneticField        from './geol-101-1-4'
import whatDefinesAMineral         from './geol-101-1-2-1'
import identifyingMinerals         from './geol-101-1-2-2'
import rockFormingMinerals         from './geol-101-1-2-3'
import crystalSystems              from './geol-101-1-2-4'
import rockCycleOverview           from './geol-101-1-3-1'
import igneousRocks               from './geol-101-1-3-2'
import sedimentaryRocks           from './geol-101-1-3-3'
import metamorphicRocks           from './geol-101-1-3-4'
import plateTectonicsTheory        from './geol-101-1-4-1'
import plateBoundaries             from './geol-101-1-4-2'
import subductionOrogenesis        from './geol-101-1-4-3'
import hotspotsAndPlumes           from './geol-101-1-4-4'
import volcanicLandforms           from './geol-101-1-5-1'
import weatheringErosion           from './geol-101-1-5-2'
import riverSystems                from './geol-101-1-5-3'
import glacialCoastalLandforms     from './geol-101-1-5-4'
import geol101Capstone             from './geol-101-capstone'
import deepTime                    from './geol-201-2-1-1'
import relativeDating              from './geol-201-2-1-2'
import radiometricDating           from './geol-201-2-1-3'
import calibratingTimescale        from './geol-201-2-1-4'
import sedimentaryFacies           from './geol-201-2-2-1'
import unconformities              from './geol-201-2-2-2'
import sequenceStratigraphy        from './geol-201-2-2-3'
import stratigraphicColumn         from './geol-201-2-2-4'
import howFossilsForm              from './geol-201-2-3-1'
import biostratigraphy             from './geol-201-2-3-2'
import traceFossils                from './geol-201-2-3-3'
import lagerstatten                from './geol-201-2-3-4'
import cambrianExplosion           from './geol-201-2-4-1'
import massExtinctions             from './geol-201-2-4-2'
import conquestOfLand              from './geol-201-2-4-3'
import cenozoic                    from './geol-201-2-4-4'
import geologicalMaps              from './geol-201-2-5-1'
import structuralGeology           from './geol-201-2-5-2'
import stratigraphicSections       from './geol-201-2-5-3'
import rockMineralIdentification   from './geol-201-2-5-4'
import geol201Capstone             from './geol-201-capstone'
import oceanFloorGeography         from './ocea-101-1-1-1'
import midOceanRidges              from './ocea-101-1-1-2'
import oceanTrenches               from './ocea-101-1-1-3'
import seafloorSediments           from './ocea-101-1-1-4'
import seawaterSalinity            from './ocea-101-1-2-1'
import oceanDensityStructure       from './ocea-101-1-2-2'
import oceanCirculation            from './ocea-101-1-2-3'
import wavesAndTides               from './ocea-101-1-2-4'
import atmosphereLayers            from './atmo-101-1-1-1'
import atmosphereComposition       from './atmo-101-1-1-2'
import solarRadiation              from './atmo-101-1-1-3'
import greenhouseEffect            from './atmo-101-1-1-4'
import airMassesFronts             from './atmo-101-1-2-1'
import midLatitudeCyclone          from './atmo-101-1-2-2'
import thunderstorms               from './atmo-101-1-2-3'
import tropicalCyclones            from './atmo-101-1-2-4'
import originOfMagma              from './volc-101-1-1-1'
import magmaComposition           from './volc-101-1-1-2'
import intrusiveBodies            from './volc-101-1-1-3'
import volcanicLandformsLesson    from './volc-101-1-1-4'
import eruptionClassification      from './volc-101-1-2-1'
import effusiveEruptions           from './volc-101-1-2-2'
import explosiveEruptions          from './volc-101-1-2-3'
import volcanicGases               from './volc-101-1-2-4'
import laharsHydrologicalHazards   from './volc-101-1-3-1'
import volcanicTsunamis            from './volc-101-1-3-2'
import volcanicWinter              from './volc-101-1-3-3'
import volcanicMonitoring          from './volc-101-1-3-4'
import volcanoesAndClimate         from './volc-101-1-4-1'
import supervolcanoesAndCalderas   from './volc-101-1-4-2'
import volcanicResources           from './volc-101-1-4-3'
import monitoringVolcanoes         from './volc-101-1-4-4'
import climateSystemOverview       from './clim-101-1-1-1'
import atmosphericCirculation      from './clim-101-1-1-2'
import carbonCycle                 from './clim-101-1-1-3'
import extremeWeatherClimate       from './clim-101-1-1-4'
import iceAgesAndMilankovitch      from './clim-101-1-2-1'
import abruptClimateChange         from './clim-101-1-2-2'
import holoceneAndLIA              from './clim-101-1-2-3'
import deepTimeClimate             from './clim-101-1-2-4'
import observedWarming             from './clim-101-1-3-1'
import seaLevelRise                from './clim-101-1-3-2'
import climateImpacts              from './clim-101-1-3-3'
import mitigationAdaptation        from './clim-101-1-3-4'
import energyTransition            from './clim-101-1-4-1'
import carbonDioxideRemoval        from './clim-101-1-4-2'
import adaptation                  from './clim-101-1-4-3'
import solarGeoengineering         from './clim-101-1-4-4'
import clim101Capstone             from './clim-101-capstone'
import solarSystemFormation        from './astr-101-1-1-1'
import differentiationLHB          from './astr-101-1-1-2'
import theSun                      from './astr-101-1-1-3'
import comparativePlanetology      from './astr-101-1-1-4'
import mercuryAndVenus             from './astr-101-1-2-1'
import marsGeology                 from './astr-101-1-2-2'
import theMoon                     from './astr-101-1-2-3'
import asteroidsAndMeteorites      from './astr-101-1-2-4'
import jupiterInternalAtmosphereMagnetosphere from './astr-101-1-3-1'
import galileanMoons               from './astr-101-1-3-2'
import saturnRingsAtmosphere       from './astr-101-1-3-3'
import titanEnceladus              from './astr-101-1-3-4'
import uranusIceGiant              from './astr-101-1-4-1'
import neptuneSupersonicWinds      from './astr-101-1-4-2'
import kuiperBeltPluto             from './astr-101-1-4-3'
import cometsOortCloud             from './astr-101-1-4-4'
import astr101Capstone             from './astr-101-capstone'
import cloudFormation              from './atmo-101-1-3-1'
import precipitation               from './atmo-101-1-3-2'
import atmosphericStability        from './atmo-101-1-3-3'
import weatherPrediction           from './atmo-101-1-3-4'
import tropicalCyclonesFormation   from './atmo-101-1-4-1'
import tornadoesConvection         from './atmo-101-1-4-2'
import heatWavesDroughtBlocking    from './atmo-101-1-4-3'
import blizzardsWinterHazards      from './atmo-101-1-4-4'
import atmo101Capstone             from './atmo-101-capstone'
import volc101Capstone             from './volc-101-capstone'
import marineEcosystems            from './ocea-101-1-3-1'
import phytoplanktonProduction     from './ocea-101-1-3-2'
import coralReefs                  from './ocea-101-1-3-3'
import polarOceans                 from './ocea-101-1-3-4'
import hydrothermalVents           from './ocea-101-1-4-1'
import oceanAcidification          from './ocea-101-1-4-2'
import bioluminescence             from './ocea-101-1-4-3'
import deepOceanSediments          from './ocea-101-1-4-4'
import ocea101Capstone             from './ocea-101-capstone'
import seismicWaveTypes            from './seis-101-1-1-1'
import seismicWavePropagation      from './seis-101-1-1-2'
import seismographsLocating        from './seis-101-1-1-3'
import earthInteriorSeismology     from './seis-101-1-1-4'
import faultsElasticRebound        from './seis-101-1-2-1'
import seismicMagnitude            from './seis-101-1-2-2'
import focalMechanisms             from './seis-101-1-2-3'
import earthquakeCycle             from './seis-101-1-2-4'
import groundMotionAmplification   from './seis-101-1-3-1'
import liquefactionLandslides      from './seis-101-1-3-2'
import seismicTsunamis             from './seis-101-1-3-3'
import earthquakeEarlyWarning      from './seis-101-1-3-4'
import probabilisticSeismicHazard      from './seis-101-1-4-1'
import earthquakeEarlyWarningSystems   from './seis-101-1-4-2'
import seismicEngineeringBuildingCodes from './seis-101-1-4-3'
import inducedSeismicity               from './seis-101-1-4-4'
import seis101Capstone             from './seis-101-capstone'
import globalWaterCycle           from './hyd-101-1-1-1'
import precipitationET            from './hyd-101-1-1-2'
import infiltrationRunoff         from './hyd-101-1-1-3'
import snowHydrology              from './hyd-101-1-1-4'
import drainageBasins             from './hyd-101-1-2-1'
import streamDischarge            from './hyd-101-1-2-2'
import fluvialGeomorphology       from './hyd-101-1-2-3'
import floodHazards               from './hyd-101-1-2-4'
import aquifersGroundwater        from './hyd-101-1-3-1'
import groundwaterFlow            from './hyd-101-1-3-2'
import springsGeothermal          from './hyd-101-1-3-3'
import groundwaterSustainability  from './hyd-101-1-3-4'
import globalFreshwaterScarcity        from './hyd-101-1-4-1'
import damsReservoirs                  from './hyd-101-1-4-2'
import groundwaterDepletionContamination from './hyd-101-1-4-3'
import floodsRiskFuture                from './hyd-101-1-4-4'
import hyd101Capstone             from './hyd-101-capstone'
import snowMetamorphism          from './glac-101-1-1-1'
import glacierDynamics           from './glac-101-1-1-2'
import glacierMassBalance        from './glac-101-1-1-3'
import glacierTypes              from './glac-101-1-1-4'
import greenlandIceSheet         from './glac-101-1-2-1'
import antarcticIceSheet         from './glac-101-1-2-2'
import seaIceArctic              from './glac-101-1-2-3'
import iceShelvesInstability     from './glac-101-1-2-4'
import glacialErosionLandforms   from './glac-101-1-3-1'
import glacialSedimentsDeposits  from './glac-101-1-3-2'
import seaLevelIsostasy          from './glac-101-1-3-3'
import iceCoresPaleoclimate      from './glac-101-1-3-4'
import measuringGlacierRetreat    from './glac-101-1-4-1'
import iceSheetsSeaLevel          from './glac-101-1-4-2'
import permafrostThaw             from './glac-101-1-4-3'
import glacialHazards             from './glac-101-1-4-4'
import glac101Capstone           from './glac-101-capstone'
import chemicalPhysicalWeathering from './geom-101-1-1-1'
import regolithSoils              from './geom-101-1-1-2'
import massWasting                from './geom-101-1-1-3'
import hillslopeEvolution         from './geom-101-1-1-4'
import channelMorphology          from './geom-101-1-2-1'
import floodplainsTerraces        from './geom-101-1-2-2'
import deltasEstuaries            from './geom-101-1-2-3'
import coastalEvolution           from './geom-101-1-2-4'
import aeolianDeserts             from './geom-101-1-3-1'
import duneCycles                 from './geom-101-1-3-2'
import karstCaves                 from './geom-101-1-3-3'
import periglacialPermafrost      from './geom-101-1-3-4'
import tectonicGeomorphology        from './geom-101-1-4-1'
import landslidesAndMassWasting     from './geom-101-1-4-2'
import coastalGeomorphology         from './geom-101-1-4-3'
import humanGeomorphology           from './geom-101-1-4-4'
import geom101Capstone            from './geom-101-capstone'
import chemicalEvolutionLife      from './abio-101-1-1-1'
import earlyEarthLife             from './abio-101-1-1-2'
import extremophiles              from './abio-101-1-1-3'
import photosynthesisOxygenation  from './abio-101-1-1-4'
import marsHabitability           from './abio-101-1-2-1'
import europaIcyMoons             from './abio-101-1-2-2'
import titanAstrobiology          from './abio-101-1-2-3'
import venusRunawayGreenhouse     from './abio-101-1-2-4'
import exoplanetDetection         from './abio-101-1-3-1'
import habitableZones             from './abio-101-1-3-2'
import biosignatures              from './abio-101-1-3-3'
import fermiDrake                 from './abio-101-1-3-4'
import marsModernSearch            from './abio-101-1-4-1'
import oceanWorlds                 from './abio-101-1-4-2'
import atmosphericBiosignatures    from './abio-101-1-4-3'
import fermiTechnoSignatures       from './abio-101-1-4-4'
import abio101Capstone            from './abio-101-capstone'
import seawaterCarbonateChemistry  from './ocea-201-1-1-1'
import oceanAcidification201       from './ocea-201-1-1-2'
import dissolvedOxygenDeadZones    from './ocea-201-1-1-3'
import marineNutrientCycles        from './ocea-201-1-1-4'
import biologicalPump              from './ocea-201-1-2-1'
import marinePrimaryProduction     from './ocea-201-1-2-2'
import deepSeaCarbonStorage        from './ocea-201-1-2-3'
import methaneHydrates             from './ocea-201-1-2-4'
import ensoOceanAtmosphere         from './ocea-201-1-3-1'
import oceanHeatContent            from './ocea-201-1-3-2'
import amocThermohaline            from './ocea-201-1-3-3'
import seaIcePolarOceans           from './ocea-201-1-3-4'
import marineHeatWaves              from './ocea-201-1-4-1'
import oceanDeoxygenation           from './ocea-201-1-4-2'
import oceanCDR                     from './ocea-201-1-4-3'
import futureOceanProjections       from './ocea-201-1-4-4'
import ocea201Capstone             from './ocea-201-capstone'
import globalCarbonCycle           from './clim-201-1-1-1'
import landCarbonSinks             from './clim-201-1-1-2'
import oceanCarbonUptake           from './clim-201-1-1-3'
import carbonBudget                from './clim-201-1-1-4'
import climateSensitivityForcing   from './clim-201-1-2-1'
import waterVaporLapseRate         from './clim-201-1-2-2'
import cloudAlbedoFeedbacks        from './clim-201-1-2-3'
import carbonCycleFeedbacks        from './clim-201-1-2-4'
import climateTippingPoints        from './clim-201-1-3-1'
import earthSystemModels           from './clim-201-1-3-2'
import climateProjectionsScenarios from './clim-201-1-3-3'
import carbonRemovalGeoengineering from './clim-201-1-3-4'
import iceCoreArchives              from './clim-201-1-4-1'
import oceanSedimentsSpeleothems    from './clim-201-1-4-2'
import treeRingsPollenProxies       from './clim-201-1-4-3'
import multiProxySynthesis          from './clim-201-1-4-4'
import clim201Capstone             from './clim-201-capstone'
import partialMeltingMagmaGenesis  from './volc-201-1-1-1'
import bowensReactionSeries        from './volc-201-1-1-2'
import magmaTypesTectonicSettings  from './volc-201-1-1-3'
import largeIgneousProvinces       from './volc-201-1-1-4'
import magmaChambersMushSystems    from './volc-201-1-2-1'
import calderasSupervolcanoes      from './volc-201-1-2-2'
import oceanicIslandVolcanism      from './volc-201-1-2-3'
import subductionZoneGeochemistry  from './volc-201-1-2-4'
import planetaryVolcanism          from './volc-201-1-3-1'
import floodBasaltsMassExtinctions from './volc-201-1-3-2'
import midOceanRidgeVolcanism      from './volc-201-1-3-3'
import volcanicGeochemistryTracers from './volc-201-1-3-4'
import eruptionColumnPhysics        from './volc-201-1-4-1'
import lavaFlowModeling             from './volc-201-1-4-2'
import volcanicGasMonitoring        from './volc-201-1-4-3'
import volcanicHazardMapping        from './volc-201-1-4-4'
import volc201Capstone             from './volc-201-capstone'
import ensoAtmosphericCoupling            from './atmo-201-1-1-1'
import pacificDecadalAMO                  from './atmo-201-1-1-2'
import naoArcticOscillation               from './atmo-201-1-1-3'
import asianMonsoonTropicalCirculations   from './atmo-201-1-1-4'
import jetStreamsRossbyWaves              from './atmo-201-1-2-1'
import atmosphericBlocking                from './atmo-201-1-2-2'
import cyclogenesisExplosive              from './atmo-201-1-2-3'
import mesoscaleConvectiveSystems         from './atmo-201-1-2-4'
import heatWavesDrought                   from './atmo-201-1-3-1'
import atmosphericRivers                  from './atmo-201-1-3-2'
import tropicalCycloneIntensification     from './atmo-201-1-3-3'
import polarVortexSSW                     from './atmo-201-1-3-4'
import dataAssimilationObservationNetworks from './atmo-201-1-4-1'
import ensembleForecastingUncertainty     from './atmo-201-1-4-2'
import predictabilityLimitsChaosTheory    from './atmo-201-1-4-3'
import machineLearningWeatherForecasting  from './atmo-201-1-4-4'
import atmo201Capstone                    from './atmo-201-capstone'

export const LESSONS: Record<string, Lesson> = {
  'geol-101-1-1':            earthInternalStructure,
  'geol-101-1-2':            crustContinentalVsOceanic,
  'geol-101-1-3':            mantleConvection,
  'geol-101-1-4':            coreAndMagneticField,
  'geol-101-1-2-1':          whatDefinesAMineral,
  'geol-101-1-2-2':          identifyingMinerals,
  'geol-101-1-2-3':          rockFormingMinerals,
  'geol-101-1-2-4':          crystalSystems,
  'geol-101-1-3-1':          rockCycleOverview,
  'geol-101-1-3-2':          igneousRocks,
  'geol-101-1-3-3':          sedimentaryRocks,
  'geol-101-1-3-4':          metamorphicRocks,
  'geol-101-1-4-1':          plateTectonicsTheory,
  'geol-101-1-4-2':          plateBoundaries,
  'geol-101-1-4-3':          subductionOrogenesis,
  'geol-101-1-4-4':          hotspotsAndPlumes,
  'geol-101-1-5-1':          volcanicLandforms,
  'geol-101-1-5-2':          weatheringErosion,
  'geol-101-1-5-3':          riverSystems,
  'geol-101-1-5-4':          glacialCoastalLandforms,
  'geol-101-capstone':       geol101Capstone,
  'geol-201-2-1-1':          deepTime,
  'geol-201-2-1-2':          relativeDating,
  'geol-201-2-1-3':          radiometricDating,
  'geol-201-2-1-4':          calibratingTimescale,
  'geol-201-2-2-1':          sedimentaryFacies,
  'geol-201-2-2-2':          unconformities,
  'geol-201-2-2-3':          sequenceStratigraphy,
  'geol-201-2-2-4':          stratigraphicColumn,
  'geol-201-2-3-1':          howFossilsForm,
  'geol-201-2-3-2':          biostratigraphy,
  'geol-201-2-3-3':          traceFossils,
  'geol-201-2-3-4':          lagerstatten,
  'geol-201-2-4-1':          cambrianExplosion,
  'geol-201-2-4-2':          massExtinctions,
  'geol-201-2-4-3':          conquestOfLand,
  'geol-201-2-4-4':          cenozoic,
  'geol-201-2-5-1':          geologicalMaps,
  'geol-201-2-5-2':          structuralGeology,
  'geol-201-2-5-3':          stratigraphicSections,
  'geol-201-2-5-4':          rockMineralIdentification,
  'geol-201-capstone':       geol201Capstone,
  'ocea-101-1-1-1':          oceanFloorGeography,
  'ocea-101-1-1-2':          midOceanRidges,
  'ocea-101-1-1-3':          oceanTrenches,
  'ocea-101-1-1-4':          seafloorSediments,
  'ocea-101-1-2-1':          seawaterSalinity,
  'ocea-101-1-2-2':          oceanDensityStructure,
  'ocea-101-1-2-3':          oceanCirculation,
  'ocea-101-1-2-4':          wavesAndTides,
  'atmo-101-1-1-1':          atmosphereLayers,
  'atmo-101-1-1-2':          atmosphereComposition,
  'atmo-101-1-1-3':          solarRadiation,
  'atmo-101-1-1-4':          greenhouseEffect,
  'atmo-101-1-2-1':          airMassesFronts,
  'atmo-101-1-2-2':          midLatitudeCyclone,
  'atmo-101-1-2-3':          thunderstorms,
  'atmo-101-1-2-4':          tropicalCyclones,
  'atmo-101-1-3-1':          cloudFormation,
  'atmo-101-1-3-2':          precipitation,
  'atmo-101-1-3-3':          atmosphericStability,
  'atmo-101-1-3-4':          weatherPrediction,
  'atmo-101-1-4-1':          tropicalCyclonesFormation,
  'atmo-101-1-4-2':          tornadoesConvection,
  'atmo-101-1-4-3':          heatWavesDroughtBlocking,
  'atmo-101-1-4-4':          blizzardsWinterHazards,
  'atmo-101-capstone':       atmo101Capstone,
  'volc-101-1-1-1':          originOfMagma,
  'volc-101-1-1-2':          magmaComposition,
  'volc-101-1-1-3':          intrusiveBodies,
  'volc-101-1-1-4':          volcanicLandformsLesson,
  'volc-101-1-2-1':          eruptionClassification,
  'volc-101-1-2-2':          effusiveEruptions,
  'volc-101-1-2-3':          explosiveEruptions,
  'volc-101-1-2-4':          volcanicGases,
  'volc-101-1-3-1':          laharsHydrologicalHazards,
  'volc-101-1-3-2':          volcanicTsunamis,
  'volc-101-1-3-3':          volcanicWinter,
  'volc-101-1-3-4':          volcanicMonitoring,
  'volc-101-1-4-1':          volcanoesAndClimate,
  'volc-101-1-4-2':          supervolcanoesAndCalderas,
  'volc-101-1-4-3':          volcanicResources,
  'volc-101-1-4-4':          monitoringVolcanoes,
  'clim-101-1-1-1':          climateSystemOverview,
  'clim-101-1-1-2':          atmosphericCirculation,
  'clim-101-1-1-3':          carbonCycle,
  'clim-101-1-1-4':          extremeWeatherClimate,
  'clim-101-1-2-1':          iceAgesAndMilankovitch,
  'clim-101-1-2-2':          abruptClimateChange,
  'clim-101-1-2-3':          holoceneAndLIA,
  'clim-101-1-2-4':          deepTimeClimate,
  'clim-101-1-3-1':          observedWarming,
  'clim-101-1-3-2':          seaLevelRise,
  'clim-101-1-3-3':          climateImpacts,
  'clim-101-1-3-4':          mitigationAdaptation,
  'clim-101-1-4-1':          energyTransition,
  'clim-101-1-4-2':          carbonDioxideRemoval,
  'clim-101-1-4-3':          adaptation,
  'clim-101-1-4-4':          solarGeoengineering,
  'clim-101-capstone':       clim101Capstone,
  'astr-101-1-1-1':          solarSystemFormation,
  'astr-101-1-1-2':          differentiationLHB,
  'astr-101-1-1-3':          theSun,
  'astr-101-1-1-4':          comparativePlanetology,
  'astr-101-1-2-1':          mercuryAndVenus,
  'astr-101-1-2-2':          marsGeology,
  'astr-101-1-2-3':          theMoon,
  'astr-101-1-2-4':          asteroidsAndMeteorites,
  'astr-101-1-3-1':          jupiterInternalAtmosphereMagnetosphere,
  'astr-101-1-3-2':          galileanMoons,
  'astr-101-1-3-3':          saturnRingsAtmosphere,
  'astr-101-1-3-4':          titanEnceladus,
  'astr-101-1-4-1':          uranusIceGiant,
  'astr-101-1-4-2':          neptuneSupersonicWinds,
  'astr-101-1-4-3':          kuiperBeltPluto,
  'astr-101-1-4-4':          cometsOortCloud,
  'astr-101-capstone':       astr101Capstone,
  'volc-101-capstone':       volc101Capstone,
  'ocea-101-1-3-1':          marineEcosystems,
  'ocea-101-1-3-2':          phytoplanktonProduction,
  'ocea-101-1-3-3':          coralReefs,
  'ocea-101-1-3-4':          polarOceans,
  'ocea-101-1-4-1':          hydrothermalVents,
  'ocea-101-1-4-2':          oceanAcidification,
  'ocea-101-1-4-3':          bioluminescence,
  'ocea-101-1-4-4':          deepOceanSediments,
  'ocea-101-capstone':       ocea101Capstone,
  'seis-101-1-1-1':          seismicWaveTypes,
  'seis-101-1-1-2':          seismicWavePropagation,
  'seis-101-1-1-3':          seismographsLocating,
  'seis-101-1-1-4':          earthInteriorSeismology,
  'seis-101-1-2-1':          faultsElasticRebound,
  'seis-101-1-2-2':          seismicMagnitude,
  'seis-101-1-2-3':          focalMechanisms,
  'seis-101-1-2-4':          earthquakeCycle,
  'seis-101-1-3-1':          groundMotionAmplification,
  'seis-101-1-3-2':          liquefactionLandslides,
  'seis-101-1-3-3':          seismicTsunamis,
  'seis-101-1-3-4':          earthquakeEarlyWarning,
  'seis-101-1-4-1':          probabilisticSeismicHazard,
  'seis-101-1-4-2':          earthquakeEarlyWarningSystems,
  'seis-101-1-4-3':          seismicEngineeringBuildingCodes,
  'seis-101-1-4-4':          inducedSeismicity,
  'seis-101-capstone':       seis101Capstone,
  'hyd-101-1-1-1':           globalWaterCycle,
  'hyd-101-1-1-2':           precipitationET,
  'hyd-101-1-1-3':           infiltrationRunoff,
  'hyd-101-1-1-4':           snowHydrology,
  'hyd-101-1-2-1':           drainageBasins,
  'hyd-101-1-2-2':           streamDischarge,
  'hyd-101-1-2-3':           fluvialGeomorphology,
  'hyd-101-1-2-4':           floodHazards,
  'hyd-101-1-3-1':           aquifersGroundwater,
  'hyd-101-1-3-2':           groundwaterFlow,
  'hyd-101-1-3-3':           springsGeothermal,
  'hyd-101-1-3-4':           groundwaterSustainability,
  'hyd-101-1-4-1':           globalFreshwaterScarcity,
  'hyd-101-1-4-2':           damsReservoirs,
  'hyd-101-1-4-3':           groundwaterDepletionContamination,
  'hyd-101-1-4-4':           floodsRiskFuture,
  'hyd-101-capstone':        hyd101Capstone,
  'glac-101-1-1-1':          snowMetamorphism,
  'glac-101-1-1-2':          glacierDynamics,
  'glac-101-1-1-3':          glacierMassBalance,
  'glac-101-1-1-4':          glacierTypes,
  'glac-101-1-2-1':          greenlandIceSheet,
  'glac-101-1-2-2':          antarcticIceSheet,
  'glac-101-1-2-3':          seaIceArctic,
  'glac-101-1-2-4':          iceShelvesInstability,
  'glac-101-1-3-1':          glacialErosionLandforms,
  'glac-101-1-3-2':          glacialSedimentsDeposits,
  'glac-101-1-3-3':          seaLevelIsostasy,
  'glac-101-1-3-4':          iceCoresPaleoclimate,
  'glac-101-1-4-1':          measuringGlacierRetreat,
  'glac-101-1-4-2':          iceSheetsSeaLevel,
  'glac-101-1-4-3':          permafrostThaw,
  'glac-101-1-4-4':          glacialHazards,
  'glac-101-capstone':       glac101Capstone,
  'geom-101-1-1-1':          chemicalPhysicalWeathering,
  'geom-101-1-1-2':          regolithSoils,
  'geom-101-1-1-3':          massWasting,
  'geom-101-1-1-4':          hillslopeEvolution,
  'geom-101-1-2-1':          channelMorphology,
  'geom-101-1-2-2':          floodplainsTerraces,
  'geom-101-1-2-3':          deltasEstuaries,
  'geom-101-1-2-4':          coastalEvolution,
  'geom-101-1-3-1':          aeolianDeserts,
  'geom-101-1-3-2':          duneCycles,
  'geom-101-1-3-3':          karstCaves,
  'geom-101-1-3-4':          periglacialPermafrost,
  'geom-101-1-4-1':          tectonicGeomorphology,
  'geom-101-1-4-2':          landslidesAndMassWasting,
  'geom-101-1-4-3':          coastalGeomorphology,
  'geom-101-1-4-4':          humanGeomorphology,
  'geom-101-capstone':       geom101Capstone,
  'abio-101-1-1-1':          chemicalEvolutionLife,
  'abio-101-1-1-2':          earlyEarthLife,
  'abio-101-1-1-3':          extremophiles,
  'abio-101-1-1-4':          photosynthesisOxygenation,
  'abio-101-1-2-1':          marsHabitability,
  'abio-101-1-2-2':          europaIcyMoons,
  'abio-101-1-2-3':          titanAstrobiology,
  'abio-101-1-2-4':          venusRunawayGreenhouse,
  'abio-101-1-3-1':          exoplanetDetection,
  'abio-101-1-3-2':          habitableZones,
  'abio-101-1-3-3':          biosignatures,
  'abio-101-1-3-4':          fermiDrake,
  'abio-101-1-4-1':          marsModernSearch,
  'abio-101-1-4-2':          oceanWorlds,
  'abio-101-1-4-3':          atmosphericBiosignatures,
  'abio-101-1-4-4':          fermiTechnoSignatures,
  'abio-101-capstone':       abio101Capstone,
  'ocea-201-1-1-1':          seawaterCarbonateChemistry,
  'ocea-201-1-1-2':          oceanAcidification201,
  'ocea-201-1-1-3':          dissolvedOxygenDeadZones,
  'ocea-201-1-1-4':          marineNutrientCycles,
  'ocea-201-1-2-1':          biologicalPump,
  'ocea-201-1-2-2':          marinePrimaryProduction,
  'ocea-201-1-2-3':          deepSeaCarbonStorage,
  'ocea-201-1-2-4':          methaneHydrates,
  'ocea-201-1-3-1':          ensoOceanAtmosphere,
  'ocea-201-1-3-2':          oceanHeatContent,
  'ocea-201-1-3-3':          amocThermohaline,
  'ocea-201-1-3-4':          seaIcePolarOceans,
  'ocea-201-1-4-1':          marineHeatWaves,
  'ocea-201-1-4-2':          oceanDeoxygenation,
  'ocea-201-1-4-3':          oceanCDR,
  'ocea-201-1-4-4':          futureOceanProjections,
  'ocea-201-capstone':       ocea201Capstone,
  'clim-201-1-1-1':          globalCarbonCycle,
  'clim-201-1-1-2':          landCarbonSinks,
  'clim-201-1-1-3':          oceanCarbonUptake,
  'clim-201-1-1-4':          carbonBudget,
  'clim-201-1-2-1':          climateSensitivityForcing,
  'clim-201-1-2-2':          waterVaporLapseRate,
  'clim-201-1-2-3':          cloudAlbedoFeedbacks,
  'clim-201-1-2-4':          carbonCycleFeedbacks,
  'clim-201-1-3-1':          climateTippingPoints,
  'clim-201-1-3-2':          earthSystemModels,
  'clim-201-1-3-3':          climateProjectionsScenarios,
  'clim-201-1-3-4':          carbonRemovalGeoengineering,
  'clim-201-1-4-1':          iceCoreArchives,
  'clim-201-1-4-2':          oceanSedimentsSpeleothems,
  'clim-201-1-4-3':          treeRingsPollenProxies,
  'clim-201-1-4-4':          multiProxySynthesis,
  'clim-201-capstone':       clim201Capstone,
  'volc-201-1-1-1':          partialMeltingMagmaGenesis,
  'volc-201-1-1-2':          bowensReactionSeries,
  'volc-201-1-1-3':          magmaTypesTectonicSettings,
  'volc-201-1-1-4':          largeIgneousProvinces,
  'volc-201-1-2-1':          magmaChambersMushSystems,
  'volc-201-1-2-2':          calderasSupervolcanoes,
  'volc-201-1-2-3':          oceanicIslandVolcanism,
  'volc-201-1-2-4':          subductionZoneGeochemistry,
  'volc-201-1-3-1':          planetaryVolcanism,
  'volc-201-1-3-2':          floodBasaltsMassExtinctions,
  'volc-201-1-3-3':          midOceanRidgeVolcanism,
  'volc-201-1-3-4':          volcanicGeochemistryTracers,
  'volc-201-1-4-1':          eruptionColumnPhysics,
  'volc-201-1-4-2':          lavaFlowModeling,
  'volc-201-1-4-3':          volcanicGasMonitoring,
  'volc-201-1-4-4':          volcanicHazardMapping,
  'volc-201-capstone':       volc201Capstone,
  'atmo-201-1-1-1':          ensoAtmosphericCoupling,
  'atmo-201-1-1-2':          pacificDecadalAMO,
  'atmo-201-1-1-3':          naoArcticOscillation,
  'atmo-201-1-1-4':          asianMonsoonTropicalCirculations,
  'atmo-201-1-2-1':          jetStreamsRossbyWaves,
  'atmo-201-1-2-2':          atmosphericBlocking,
  'atmo-201-1-2-3':          cyclogenesisExplosive,
  'atmo-201-1-2-4':          mesoscaleConvectiveSystems,
  'atmo-201-1-3-1':          heatWavesDrought,
  'atmo-201-1-3-2':          atmosphericRivers,
  'atmo-201-1-3-3':          tropicalCycloneIntensification,
  'atmo-201-1-3-4':          polarVortexSSW,
  'atmo-201-1-4-1':          dataAssimilationObservationNetworks,
  'atmo-201-1-4-2':          ensembleForecastingUncertainty,
  'atmo-201-1-4-3':          predictabilityLimitsChaosTheory,
  'atmo-201-1-4-4':          machineLearningWeatherForecasting,
  'atmo-201-capstone':       atmo201Capstone,
}

export const LESSON_LIST: Lesson[] = Object.values(LESSONS)

export interface Track {
  id: TrackId
  name: string
  icon: LucideIcon
  color: string
}

export const TRACKS: Track[] = [
  { id: 'geo', name: 'Geology',      icon: Mountain,    color: BRAND.coral },
  { id: 'oce', name: 'Oceanography', icon: Waves,       color: BRAND.accent },
  { id: 'atm', name: 'Meteorology',  icon: Wind,        color: BRAND.gold },
  { id: 'vol', name: 'Volcanology',  icon: Flame,       color: BRAND.ruby },
  { id: 'cli', name: 'Climate',      icon: Thermometer, color: BRAND.jade },
  { id: 'ast', name: 'Planetary',    icon: Telescope,   color: BRAND.amethyst },
]

export const TRACK_MAP = Object.fromEntries(TRACKS.map(t => [t.id, t])) as Record<TrackId, Track>

export interface Institution {
  name: string
  abbr: string
  type: string
  url: string
  contributes: string
  color: string
}

// CourseModule is an alias for backwards compatibility with existing consumers.
export type CourseModule = Chapter
export type { Chapter, LearningPath }

// ─── Learning paths ───────────────────────────────────────────────────────────
// Single source of truth. Legacy named exports below are derived from this array.
// To add new content: append a Chapter to an existing path, or append a new LearningPath.
// Icons: drop /public/icons/chapters/{iconId}.webp or /public/icons/paths/{iconId}.webp.

export const LEARNING_PATHS: LearningPath[] = [
  {
    id: 'earth-foundations',
    title: 'Earth Foundations',
    subtitle: 'How our planet is built — from deep interior to the minerals, rocks, and tectonic forces that shape its surface.',
    tagline: 'Start here.',
    track: 'geo',
    level: 'Foundations',
    color: BRAND.coral,
    icon: Mountain,
    iconId: 'path-earth-foundations',
    chapters: [
      {
        id: 'earth-interior',
        title: "Earth's Interior",
        description: 'Crust, mantle, outer core, inner core — and the geophysical methods that revealed them.',
        lessonIds: ['geol-101-1-1', 'geol-101-1-2', 'geol-101-1-3', 'geol-101-1-4'],
        iconId: 'chapter-earth-interior',
      },
      {
        id: 'minerals-crystals',
        title: 'Minerals & Crystals',
        description: 'The five criteria that define a mineral, identification techniques, and how crystals grow.',
        lessonIds: ['geol-101-1-2-1', 'geol-101-1-2-2', 'geol-101-1-2-3', 'geol-101-1-2-4'],
        iconId: 'chapter-minerals-crystals',
      },
      {
        id: 'rock-families',
        title: 'The Rock Families',
        description: 'Igneous, sedimentary, and metamorphic rocks — how they form and how to read them.',
        lessonIds: ['geol-101-1-3-1', 'geol-101-1-3-2', 'geol-101-1-3-3', 'geol-101-1-3-4'],
        iconId: 'chapter-rock-families',
      },
      {
        id: 'plate-tectonics',
        title: 'Plate Tectonics',
        description: 'The theory that unified geology — moving plates, divergent and convergent boundaries, and hotspots.',
        lessonIds: ['geol-101-1-4-1', 'geol-101-1-4-2', 'geol-101-1-4-3', 'geol-101-1-4-4'],
        iconId: 'chapter-plate-tectonics',
      },
      {
        id: 'surface-processes',
        title: 'Surface Processes',
        description: 'Weathering, erosion, rivers, glaciers, and coastlines — how landscapes are sculpted over time.',
        lessonIds: ['geol-101-1-5-1', 'geol-101-1-5-2', 'geol-101-1-5-3', 'geol-101-1-5-4'],
        iconId: 'chapter-surface-processes',
      },
      {
        id: 'earth-foundations-assessment',
        title: 'Path Assessment',
        description: 'Test your knowledge across all five chapters of Earth Foundations.',
        lessonIds: ['geol-101-capstone'],
        iconId: 'chapter-assessment',
      },
    ],
  },
  {
    id: 'deep-time',
    title: 'Deep Time',
    subtitle: 'Billions of years of Earth history — reading the rock record, dating ancient events, and tracing life\'s story.',
    tagline: 'Intermediate geology.',
    track: 'geo',
    level: 'Intermediate',
    color: BRAND.coral,
    icon: Layers,
    iconId: 'path-deep-time',
    prerequisites: ['earth-foundations'],
    chapters: [
      {
        id: 'geologic-time',
        title: 'Geologic Time',
        description: 'Relative and absolute dating, the geologic timescale, and how we measure deep time.',
        lessonIds: ['geol-201-2-1-1', 'geol-201-2-1-2', 'geol-201-2-1-3', 'geol-201-2-1-4'],
        iconId: 'chapter-geologic-time',
      },
      {
        id: 'stratigraphy',
        title: 'Rock Records & Stratigraphy',
        description: 'Sedimentary facies, unconformities, sequence stratigraphy, and stratigraphic columns.',
        lessonIds: ['geol-201-2-2-1', 'geol-201-2-2-2', 'geol-201-2-2-3', 'geol-201-2-2-4'],
        iconId: 'chapter-stratigraphy',
      },
      {
        id: 'fossil-record',
        title: 'The Fossil Record',
        description: 'How fossils form, biostratigraphy, trace fossils, and extraordinary preservation sites.',
        lessonIds: ['geol-201-2-3-1', 'geol-201-2-3-2', 'geol-201-2-3-3', 'geol-201-2-3-4'],
        iconId: 'chapter-fossil-record',
      },
      {
        id: 'life-through-ages',
        title: 'Life Through the Ages',
        description: 'The Cambrian explosion, mass extinctions, the conquest of land, and the Cenozoic.',
        lessonIds: ['geol-201-2-4-1', 'geol-201-2-4-2', 'geol-201-2-4-3', 'geol-201-2-4-4'],
        iconId: 'chapter-life-through-ages',
      },
      {
        id: 'field-methods',
        title: 'Field Methods',
        description: 'Geological maps, structural geology, stratigraphic sections, and rock identification in the field.',
        lessonIds: ['geol-201-2-5-1', 'geol-201-2-5-2', 'geol-201-2-5-3', 'geol-201-2-5-4'],
        iconId: 'chapter-field-methods',
      },
      {
        id: 'deep-time-assessment',
        title: 'Path Assessment',
        description: 'Test your knowledge across all five chapters of Deep Time.',
        lessonIds: ['geol-201-capstone'],
        iconId: 'chapter-assessment',
      },
    ],
  },
  {
    id: 'ocean-systems',
    title: 'Ocean Systems',
    subtitle: 'The ocean floor, seawater chemistry, global circulation, waves, and the ecosystems that depend on it all.',
    track: 'oce',
    level: 'Foundations',
    color: BRAND.accent,
    icon: Waves,
    iconId: 'path-ocean-systems',
    chapters: [
      {
        id: 'ocean-basin',
        title: 'The Ocean Basin',
        description: 'Mid-ocean ridges, trenches, abyssal plains, and the sediments that blanket the seafloor.',
        lessonIds: ['ocea-101-1-1-1', 'ocea-101-1-1-2', 'ocea-101-1-1-3', 'ocea-101-1-1-4'],
        iconId: 'chapter-ocean-basin',
      },
      {
        id: 'seawater-structure',
        title: 'Seawater & Ocean Structure',
        description: 'Salinity, density, thermohaline circulation, waves, and tides.',
        lessonIds: ['ocea-101-1-2-1', 'ocea-101-1-2-2', 'ocea-101-1-2-3', 'ocea-101-1-2-4'],
        iconId: 'chapter-seawater-structure',
      },
      {
        id: 'marine-life',
        title: 'Marine Life',
        description: 'Ocean ecosystems from surface to hadal zone — phytoplankton, coral reefs, and polar seas.',
        lessonIds: ['ocea-101-1-3-1', 'ocea-101-1-3-2', 'ocea-101-1-3-3', 'ocea-101-1-3-4'],
        iconId: 'chapter-marine-life',
      },
      {
        id: 'deep-ocean',
        title: 'The Deep Ocean',
        description: 'Hydrothermal vents, ocean acidification, bioluminescence, and the sediments and mineral resources of the abyssal seafloor.',
        lessonIds: ['ocea-101-1-4-1', 'ocea-101-1-4-2', 'ocea-101-1-4-3', 'ocea-101-1-4-4'],
        iconId: 'chapter-deep-ocean',
      },
      {
        id: 'ocean-systems-assessment',
        title: 'Path Assessment',
        description: 'Test your knowledge across all four chapters of Ocean Systems.',
        lessonIds: ['ocea-101-capstone'],
        iconId: 'chapter-assessment',
      },
    ],
  },
  {
    id: 'atmosphere-weather',
    title: 'Atmosphere & Weather',
    subtitle: 'The invisible ocean above us — atmospheric layers, the energy budget, weather systems, and forecasting.',
    track: 'atm',
    level: 'Foundations',
    color: BRAND.gold,
    icon: Wind,
    iconId: 'path-atmosphere-weather',
    chapters: [
      {
        id: 'atmospheric-structure',
        title: 'Atmospheric Structure',
        description: 'The layers of the atmosphere, composition, solar radiation, and the greenhouse effect.',
        lessonIds: ['atmo-101-1-1-1', 'atmo-101-1-1-2', 'atmo-101-1-1-3', 'atmo-101-1-1-4'],
        iconId: 'chapter-atmospheric-structure',
      },
      {
        id: 'weather-systems',
        title: 'Weather Systems',
        description: 'Air masses, fronts, mid-latitude cyclones, thunderstorms, and tropical cyclones.',
        lessonIds: ['atmo-101-1-2-1', 'atmo-101-1-2-2', 'atmo-101-1-2-3', 'atmo-101-1-2-4'],
        iconId: 'chapter-weather-systems',
      },
      {
        id: 'clouds-forecasting',
        title: 'Clouds & Forecasting',
        description: 'Cloud formation, precipitation processes, atmospheric stability, and weather prediction.',
        lessonIds: ['atmo-101-1-3-1', 'atmo-101-1-3-2', 'atmo-101-1-3-3', 'atmo-101-1-3-4'],
        iconId: 'chapter-clouds-forecasting',
      },
      {
        id: 'extreme-weather-events',
        title: 'Extreme Weather Events',
        description: 'Tropical cyclones, tornadoes, heat waves, drought, and winter storms — the most dangerous and destructive weather phenomena on Earth.',
        lessonIds: ['atmo-101-1-4-1', 'atmo-101-1-4-2', 'atmo-101-1-4-3', 'atmo-101-1-4-4'],
        iconId: 'chapter-extreme-weather-events',
      },
      {
        id: 'atmosphere-weather-assessment',
        title: 'Path Assessment',
        description: 'Test your knowledge across all four chapters of Atmosphere & Weather.',
        lessonIds: ['atmo-101-capstone'],
        iconId: 'chapter-assessment',
      },
    ],
  },
  {
    id: 'volcanoes',
    title: 'Volcanoes',
    subtitle: 'Where the interior meets the surface — magma generation, eruption styles, and the hazards that follow.',
    track: 'vol',
    level: 'Foundations',
    color: BRAND.ruby,
    icon: Flame,
    iconId: 'path-volcanoes',
    chapters: [
      {
        id: 'magma-volcanism',
        title: 'Magma & Volcanism',
        description: 'How magma originates, its composition and viscosity, intrusive bodies, and volcanic landforms.',
        lessonIds: ['volc-101-1-1-1', 'volc-101-1-1-2', 'volc-101-1-1-3', 'volc-101-1-1-4'],
        iconId: 'chapter-magma-volcanism',
      },
      {
        id: 'eruption-styles',
        title: 'Eruption Styles',
        description: 'Effusive versus explosive eruptions, eruption classification, pyroclastic flows, and volcanic gases.',
        lessonIds: ['volc-101-1-2-1', 'volc-101-1-2-2', 'volc-101-1-2-3', 'volc-101-1-2-4'],
        iconId: 'chapter-eruption-styles',
      },
      {
        id: 'volcanic-hazards',
        title: 'Volcanic Hazards',
        description: 'Lahars, volcanic tsunamis, volcanic winter, and modern monitoring systems.',
        lessonIds: ['volc-101-1-3-1', 'volc-101-1-3-2', 'volc-101-1-3-3', 'volc-101-1-3-4'],
        iconId: 'chapter-volcanic-hazards',
      },
      {
        id: 'volcanic-legacy',
        title: 'Volcanic Legacy',
        description: 'Climate forcing, supervolcanoes, volcanic soils and mineral wealth, and the science of eruption forecasting.',
        lessonIds: ['volc-101-1-4-1', 'volc-101-1-4-2', 'volc-101-1-4-3', 'volc-101-1-4-4'],
        iconId: 'chapter-volcanic-legacy',
      },
      {
        id: 'volcanoes-assessment',
        title: 'Path Assessment',
        description: 'Test your knowledge across all four chapters of Volcanoes.',
        lessonIds: ['volc-101-capstone'],
        iconId: 'chapter-assessment',
      },
    ],
  },
  {
    id: 'climate-past-future',
    title: 'Climate, Past & Future',
    subtitle: 'The climate system, its history over millions of years, and what rising CO₂ means for the planet ahead.',
    track: 'cli',
    level: 'Foundations',
    color: BRAND.jade,
    icon: Thermometer,
    iconId: 'path-climate-past-future',
    chapters: [
      {
        id: 'climate-system',
        title: 'The Climate System',
        description: 'Climate drivers, atmospheric and ocean circulation, the carbon cycle, and extreme weather.',
        lessonIds: ['clim-101-1-1-1', 'clim-101-1-1-2', 'clim-101-1-1-3', 'clim-101-1-1-4'],
        iconId: 'chapter-climate-system',
      },
      {
        id: 'climate-history',
        title: 'Climate Through History',
        description: 'Ice ages, Milankovitch cycles, abrupt climate shifts, the Holocene, and deep-time climates.',
        lessonIds: ['clim-101-1-2-1', 'clim-101-1-2-2', 'clim-101-1-2-3', 'clim-101-1-2-4'],
        iconId: 'chapter-climate-history',
      },
      {
        id: 'modern-climate-change',
        title: 'Modern Climate Change',
        description: 'Observed warming, sea level rise, climate impacts, and the pathways for mitigation.',
        lessonIds: ['clim-101-1-3-1', 'clim-101-1-3-2', 'clim-101-1-3-3', 'clim-101-1-3-4'],
        iconId: 'chapter-modern-climate-change',
      },
      {
        id: 'responding-to-climate-change',
        title: 'Responding to Climate Change',
        description: 'The energy transition, carbon dioxide removal, climate adaptation, and solar geoengineering — the full toolkit for navigating a warming world.',
        lessonIds: ['clim-101-1-4-1', 'clim-101-1-4-2', 'clim-101-1-4-3', 'clim-101-1-4-4'],
        iconId: 'chapter-responding-to-climate-change',
      },
      {
        id: 'climate-assessment',
        title: 'Path Assessment',
        description: 'Test your knowledge across all four chapters of Climate, Past & Future.',
        lessonIds: ['clim-101-capstone'],
        iconId: 'chapter-assessment',
      },
    ],
  },
  {
    id: 'solar-system',
    title: 'Solar System',
    subtitle: 'From dust to worlds — how our solar system formed, and what comparative planetology reveals about each body.',
    track: 'ast',
    level: 'Foundations',
    color: BRAND.amethyst,
    icon: Telescope,
    iconId: 'path-solar-system',
    chapters: [
      {
        id: 'solar-system-formation',
        title: 'Solar System Formation',
        description: 'Nebular hypothesis, planetesimal accretion, differentiation, the Late Heavy Bombardment, and the Sun.',
        lessonIds: ['astr-101-1-1-1', 'astr-101-1-1-2', 'astr-101-1-1-3', 'astr-101-1-1-4'],
        iconId: 'chapter-solar-system-formation',
      },
      {
        id: 'terrestrial-worlds',
        title: 'Terrestrial Worlds',
        description: 'Mercury, Venus, Mars, the Moon, and asteroids — geology and surface evolution of rocky bodies.',
        lessonIds: ['astr-101-1-2-1', 'astr-101-1-2-2', 'astr-101-1-2-3', 'astr-101-1-2-4'],
        iconId: 'chapter-terrestrial-worlds',
      },
      {
        id: 'gas-giants',
        title: 'Gas Giants',
        description: 'Jupiter and Saturn — metallic hydrogen interiors, banded atmospheres, ring systems, and the magnetospheres that dwarf every other structure in the Solar System.',
        lessonIds: ['astr-101-1-3-1', 'astr-101-1-3-2', 'astr-101-1-3-3', 'astr-101-1-3-4'],
        iconId: 'chapter-gas-giants',
      },
      {
        id: 'ice-giants-beyond',
        title: 'Ice Giants & Beyond',
        description: 'Uranus and Neptune — tilted worlds with exotic magnetic fields; the Kuiper Belt and Pluto; comets, the Oort Cloud, and the first interstellar visitors.',
        lessonIds: ['astr-101-1-4-1', 'astr-101-1-4-2', 'astr-101-1-4-3', 'astr-101-1-4-4'],
        iconId: 'chapter-ice-giants-beyond',
      },
      {
        id: 'solar-system-assessment',
        title: 'Path Assessment',
        description: 'Test your knowledge across all four chapters of the Solar System path.',
        lessonIds: ['astr-101-capstone'],
        iconId: 'chapter-assessment',
      },
    ],
  },
  {
    id: 'earthquakes-seismology',
    title: 'Earthquakes & Seismology',
    subtitle: 'From P-waves to fault rupture — seismic waves, earthquake mechanics, ground motion hazards, and the science of keeping communities safe.',
    track: 'geo',
    level: 'Foundations',
    color: BRAND.coral,
    icon: Activity,
    iconId: 'path-earthquakes-seismology',
    chapters: [
      {
        id: 'seismic-waves',
        title: 'Seismic Waves',
        description: 'P-waves, S-waves, surface waves, seismographs, and how wave propagation reveals Earth\'s deep interior.',
        lessonIds: ['seis-101-1-1-1', 'seis-101-1-1-2', 'seis-101-1-1-3', 'seis-101-1-1-4'],
        iconId: 'chapter-seismic-waves',
      },
      {
        id: 'earthquake-mechanics',
        title: 'Earthquake Mechanics',
        description: 'Fault types, elastic rebound, magnitude scales, focal mechanisms, and the seismic cycle.',
        lessonIds: ['seis-101-1-2-1', 'seis-101-1-2-2', 'seis-101-1-2-3', 'seis-101-1-2-4'],
        iconId: 'chapter-earthquake-mechanics',
      },
      {
        id: 'earthquake-hazards',
        title: 'Earthquake Hazards & Resilience',
        description: 'Ground motion amplification, liquefaction, landslides, tsunamis, early warning systems, and community resilience.',
        lessonIds: ['seis-101-1-3-1', 'seis-101-1-3-2', 'seis-101-1-3-3', 'seis-101-1-3-4'],
        iconId: 'chapter-earthquake-hazards',
      },
      {
        id: 'seismic-risk-society',
        title: 'Seismic Risk and Society',
        description: 'Probabilistic hazard analysis, earthquake early warning systems, seismic building codes, and induced seismicity from human activity.',
        lessonIds: ['seis-101-1-4-1', 'seis-101-1-4-2', 'seis-101-1-4-3', 'seis-101-1-4-4'],
        iconId: 'chapter-seismic-risk-society',
      },
      {
        id: 'earthquakes-assessment',
        title: 'Path Assessment',
        description: 'Test your knowledge across all four chapters of Earthquakes & Seismology.',
        lessonIds: ['seis-101-capstone'],
        iconId: 'chapter-assessment',
      },
    ],
  },
  {
    id: 'hydrology',
    title: 'Hydrology',
    subtitle: 'The water cycle, rivers and floods, and groundwater — how freshwater moves through, shapes, and sustains our world.',
    track: 'geo',
    level: 'Foundations',
    color: BRAND.accent,
    icon: Waves,
    iconId: 'path-hydrology',
    chapters: [
      {
        id: 'water-cycle',
        title: 'The Water Cycle',
        description: 'Global water budget, precipitation and evapotranspiration, infiltration and runoff, and snow hydrology.',
        lessonIds: ['hyd-101-1-1-1', 'hyd-101-1-1-2', 'hyd-101-1-1-3', 'hyd-101-1-1-4'],
        iconId: 'chapter-water-cycle',
      },
      {
        id: 'rivers-watersheds',
        title: 'Rivers & Watersheds',
        description: 'Drainage basins, stream networks, discharge and hydrographs, fluvial geomorphology, and flood hazards.',
        lessonIds: ['hyd-101-1-2-1', 'hyd-101-1-2-2', 'hyd-101-1-2-3', 'hyd-101-1-2-4'],
        iconId: 'chapter-rivers-watersheds',
      },
      {
        id: 'groundwater',
        title: 'Groundwater',
        description: 'Aquifer types, Darcy\'s Law, well hydraulics, springs, geothermal systems, and groundwater sustainability.',
        lessonIds: ['hyd-101-1-3-1', 'hyd-101-1-3-2', 'hyd-101-1-3-3', 'hyd-101-1-3-4'],
        iconId: 'chapter-groundwater',
      },
      {
        id: 'water-resources-society',
        title: 'Water Resources and Society',
        description: 'Global freshwater scarcity, dams and river management, groundwater depletion and contamination, and the future of flood risk.',
        lessonIds: ['hyd-101-1-4-1', 'hyd-101-1-4-2', 'hyd-101-1-4-3', 'hyd-101-1-4-4'],
        iconId: 'chapter-water-resources-society',
      },
      {
        id: 'hydrology-assessment',
        title: 'Path Assessment',
        description: 'Test your knowledge across all four chapters of Hydrology.',
        lessonIds: ['hyd-101-capstone'],
        iconId: 'chapter-assessment',
      },
    ],
  },
  {
    id: 'geomorphology',
    title: 'Geomorphology',
    subtitle: 'How landscapes form and evolve — weathering, rivers, coasts, dunes, karst, and permafrost shaping Earth\'s surface over millions of years.',
    track: 'cli',
    level: 'Foundations',
    color: BRAND.coral,
    icon: Mountain,
    iconId: 'path-geomorphology',
    chapters: [
      {
        id: 'hillslopes-weathering',
        title: 'Weathering, Soils, and Hillslopes',
        description: 'Chemical and physical weathering, regolith and soil formation, mass wasting, and the geomorphic transport laws that shape hillslope profiles.',
        lessonIds: ['geom-101-1-1-1', 'geom-101-1-1-2', 'geom-101-1-1-3', 'geom-101-1-1-4'],
        iconId: 'chapter-hillslopes-weathering',
      },
      {
        id: 'fluvial-coastal',
        title: 'Rivers, Coasts, and Deltas',
        description: 'Channel morphology and bedload transport, floodplains and river terraces, delta systems and estuaries, and coastal evolution under sea-level rise.',
        lessonIds: ['geom-101-1-2-1', 'geom-101-1-2-2', 'geom-101-1-2-3', 'geom-101-1-2-4'],
        iconId: 'chapter-fluvial-coastal',
      },
      {
        id: 'aeolian-karst-periglacial',
        title: 'Aeolian, Karst, and Periglacial',
        description: 'Aeolian processes, dune types and loess, karst and cave systems, periglacial environments, and permafrost dynamics.',
        lessonIds: ['geom-101-1-3-1', 'geom-101-1-3-2', 'geom-101-1-3-3', 'geom-101-1-3-4'],
        iconId: 'chapter-aeolian-karst-periglacial',
      },
      {
        id: 'tectonic-geomorphology-hazards',
        title: 'Tectonic Geomorphology and Hazards',
        description: 'Fault-driven landscapes, knickpoints and tectonic uplift, landslides and mass wasting, coastal change under sea-level rise, and how human activity now rivals geological forces in reshaping Earth\'s surface.',
        lessonIds: ['geom-101-1-4-1', 'geom-101-1-4-2', 'geom-101-1-4-3', 'geom-101-1-4-4'],
        iconId: 'chapter-tectonic-geomorphology-hazards',
      },
      {
        id: 'geomorphology-assessment',
        title: 'Path Assessment',
        description: 'Test your knowledge across all four chapters of Geomorphology.',
        lessonIds: ['geom-101-capstone'],
        iconId: 'chapter-assessment',
      },
    ],
  },
  {
    id: 'glaciology',
    title: 'Glaciology',
    subtitle: 'From snowflake to ice sheet — the physics of glaciers, the dynamics of polar ice, and what frozen archives reveal about Earth\'s climate history.',
    track: 'cli',
    level: 'Foundations',
    color: BRAND.accentHot,
    icon: Snowflake,
    iconId: 'path-glaciology',
    chapters: [
      {
        id: 'snow-glaciers',
        title: 'Snow, Ice, and Glacier Dynamics',
        description: 'Snow metamorphism, firnification, Glen\'s flow law, basal sliding, mass balance, and the global distribution of glacier types.',
        lessonIds: ['glac-101-1-1-1', 'glac-101-1-1-2', 'glac-101-1-1-3', 'glac-101-1-1-4'],
        iconId: 'chapter-snow-glaciers',
      },
      {
        id: 'ice-sheets-sea-ice',
        title: 'Ice Sheets and Sea Ice',
        description: 'The Greenland and Antarctic ice sheets, sea ice formation and albedo feedback, ice shelves, and Marine Ice Sheet Instability.',
        lessonIds: ['glac-101-1-2-1', 'glac-101-1-2-2', 'glac-101-1-2-3', 'glac-101-1-2-4'],
        iconId: 'chapter-ice-sheets-sea-ice',
      },
      {
        id: 'glacial-record',
        title: 'Glacial Landforms and Climate Archives',
        description: 'Erosional and depositional landforms, glacial sediments, sea level change and isostasy, and reading past climates from ice cores.',
        lessonIds: ['glac-101-1-3-1', 'glac-101-1-3-2', 'glac-101-1-3-3', 'glac-101-1-3-4'],
        iconId: 'chapter-glacial-record',
      },
      {
        id: 'ice-in-warming-world',
        title: 'Ice in a Warming World',
        description: 'Measuring glacier retreat from orbit and in the field, ice sheet contributions to sea level rise, thawing permafrost as a carbon feedback, and glacial outburst floods and ice-dam hazards.',
        lessonIds: ['glac-101-1-4-1', 'glac-101-1-4-2', 'glac-101-1-4-3', 'glac-101-1-4-4'],
        iconId: 'chapter-ice-in-warming-world',
      },
      {
        id: 'glaciology-assessment',
        title: 'Path Assessment',
        description: 'Test your knowledge across all four chapters of Glaciology.',
        lessonIds: ['glac-101-capstone'],
        iconId: 'chapter-assessment',
      },
    ],
  },
  {
    id: 'marine-chemistry-biogeochemistry',
    title: 'Marine Chemistry & Biogeochemistry',
    subtitle: 'The ocean as a chemical reactor — carbonate equilibria, nutrient cycles, the biological pump, methane hydrates, and how the ocean regulates Earth\'s climate on million-year timescales.',
    track: 'oce',
    level: 'Intermediate',
    color: BRAND.accent,
    icon: Waves,
    iconId: 'path-marine-chemistry-biogeochemistry',
    prerequisites: ['ocean-systems'],
    chapters: [
      {
        id: 'ocean-chemistry',
        title: 'Ocean Chemistry & Dissolved Gases',
        description: 'Carbonate equilibria, ocean acidification, oxygen minimum zones, and the marine nutrient cycles that sustain all ocean life.',
        lessonIds: ['ocea-201-1-1-1', 'ocea-201-1-1-2', 'ocea-201-1-1-3', 'ocea-201-1-1-4'],
        iconId: 'chapter-ocean-chemistry',
      },
      {
        id: 'marine-carbon-export',
        title: 'Marine Carbon Export & Storage',
        description: 'The biological pump, marine primary production, deep-sea carbon storage, and methane hydrates as a vast submarine carbon reservoir.',
        lessonIds: ['ocea-201-1-2-1', 'ocea-201-1-2-2', 'ocea-201-1-2-3', 'ocea-201-1-2-4'],
        iconId: 'chapter-marine-carbon-export',
      },
      {
        id: 'ocean-climate-coupling',
        title: 'Ocean–Climate Coupling',
        description: 'ENSO and the ocean\'s role in global climate, ocean heat content trends, AMOC and thermohaline circulation, and sea ice dynamics in polar oceans.',
        lessonIds: ['ocea-201-1-3-1', 'ocea-201-1-3-2', 'ocea-201-1-3-3', 'ocea-201-1-3-4'],
        iconId: 'chapter-ocean-climate-coupling',
      },
      {
        id: 'anthropocene-ocean',
        title: 'The Anthropocene Ocean',
        description: 'Marine heat waves, ocean deoxygenation, ocean-based carbon dioxide removal strategies, and what IPCC projections reveal about the ocean\'s future under different emissions scenarios.',
        lessonIds: ['ocea-201-1-4-1', 'ocea-201-1-4-2', 'ocea-201-1-4-3', 'ocea-201-1-4-4'],
        iconId: 'chapter-anthropocene-ocean',
      },
      {
        id: 'marine-chemistry-assessment',
        title: 'Path Assessment',
        description: 'Test your knowledge across all four chapters of Marine Chemistry & Biogeochemistry.',
        lessonIds: ['ocea-201-capstone'],
        iconId: 'chapter-assessment',
      },
    ],
  },
  {
    id: 'carbon-cycle-climate-feedbacks',
    title: 'Carbon Cycle & Climate Feedbacks',
    subtitle: 'How carbon moves between reservoirs, amplifies warming through feedbacks, and how the remaining carbon budget defines the climate challenge of the century.',
    track: 'cli',
    level: 'Intermediate',
    color: BRAND.jade,
    icon: Thermometer,
    iconId: 'path-carbon-cycle-climate-feedbacks',
    prerequisites: ['climate-past-future'],
    chapters: [
      {
        id: 'global-carbon-cycle',
        title: 'The Global Carbon Cycle',
        description: 'Atmospheric CO₂ reservoirs and fluxes, land carbon sinks, ocean carbon uptake, and the global carbon budget.',
        lessonIds: ['clim-201-1-1-1', 'clim-201-1-1-2', 'clim-201-1-1-3', 'clim-201-1-1-4'],
        iconId: 'chapter-global-carbon-cycle',
      },
      {
        id: 'climate-feedbacks',
        title: 'Climate Sensitivity & Feedbacks',
        description: 'Radiative forcing and climate sensitivity, water vapor and lapse rate feedbacks, cloud and albedo feedbacks, and carbon cycle amplification.',
        lessonIds: ['clim-201-1-2-1', 'clim-201-1-2-2', 'clim-201-1-2-3', 'clim-201-1-2-4'],
        iconId: 'chapter-climate-feedbacks',
      },
      {
        id: 'climate-futures',
        title: 'Tipping Points, Models & Futures',
        description: 'Climate tipping elements, Earth system models and CMIP6, emissions scenarios and projections, carbon removal and solar geoengineering.',
        lessonIds: ['clim-201-1-3-1', 'clim-201-1-3-2', 'clim-201-1-3-3', 'clim-201-1-3-4'],
        iconId: 'chapter-climate-futures',
      },
      {
        id: 'paleoclimate-proxies',
        title: 'Paleoclimate Proxies and Model-Data Comparison',
        description: 'Ice core archives, ocean sediment and speleothem records, tree rings and pollen, and how multi-proxy synthesis validates Earth system models.',
        lessonIds: ['clim-201-1-4-1', 'clim-201-1-4-2', 'clim-201-1-4-3', 'clim-201-1-4-4'],
        iconId: 'chapter-paleoclimate-proxies',
      },
      {
        id: 'carbon-cycle-assessment',
        title: 'Path Assessment',
        description: 'Test your knowledge across all four chapters of Carbon Cycle & Climate Feedbacks.',
        lessonIds: ['clim-201-capstone'],
        iconId: 'chapter-assessment',
      },
    ],
  },
  {
    id: 'magma-systems-igneous-petrology',
    title: 'Magma Systems & Igneous Petrology',
    subtitle: 'The deep origin and evolution of magma — from partial melting and crystallization to crystal mush systems, supervolcanoes, and the geochemical fingerprints that identify mantle source regions.',
    track: 'vol',
    level: 'Intermediate',
    color: BRAND.ruby,
    icon: Flame,
    iconId: 'path-magma-systems-igneous-petrology',
    prerequisites: ['volcanoes'],
    chapters: [
      {
        id: 'magma-genesis',
        title: 'Magma Genesis & Differentiation',
        description: 'Partial melting mechanisms, Bowen\'s reaction series, magma classification by tectonic setting, and large igneous provinces.',
        lessonIds: ['volc-201-1-1-1', 'volc-201-1-1-2', 'volc-201-1-1-3', 'volc-201-1-1-4'],
        iconId: 'chapter-magma-genesis',
      },
      {
        id: 'magmatic-systems',
        title: 'Magmatic Systems & Calderas',
        description: 'Crystal mush systems, calderas and supervolcanoes, oceanic island volcanism, and subduction zone geochemistry.',
        lessonIds: ['volc-201-1-2-1', 'volc-201-1-2-2', 'volc-201-1-2-3', 'volc-201-1-2-4'],
        iconId: 'chapter-magmatic-systems',
      },
      {
        id: 'planetary-volcanology',
        title: 'Planetary Volcanology & Tracers',
        description: 'Volcanic processes across the solar system, flood basalts and mass extinctions, mid-ocean ridge volcanism, and isotopic tracers of mantle sources.',
        lessonIds: ['volc-201-1-3-1', 'volc-201-1-3-2', 'volc-201-1-3-3', 'volc-201-1-3-4'],
        iconId: 'chapter-planetary-volcanology',
      },
      {
        id: 'eruption-dynamics-applied-volcanology',
        title: 'Eruption Dynamics and Applied Volcanology',
        description: 'Eruption column physics and ash dispersal, lava flow modeling, volcanic gas monitoring, and probabilistic hazard mapping and crisis communication.',
        lessonIds: ['volc-201-1-4-1', 'volc-201-1-4-2', 'volc-201-1-4-3', 'volc-201-1-4-4'],
        iconId: 'chapter-eruption-dynamics',
      },
      {
        id: 'magma-systems-assessment',
        title: 'Path Assessment',
        description: 'Test your knowledge across all four chapters of Magma Systems & Igneous Petrology.',
        lessonIds: ['volc-201-capstone'],
        iconId: 'chapter-assessment',
      },
    ],
  },
  {
    id: 'climate-dynamics-variability',
    title: 'Climate Dynamics & Variability',
    subtitle: 'The engine of weather and climate — ENSO, multidecadal oscillations, monsoons, jet streams, blocking, cyclogenesis, and the extremes that define a changing atmosphere.',
    track: 'atm',
    level: 'Intermediate',
    color: BRAND.gold,
    icon: Wind,
    iconId: 'path-climate-dynamics-variability',
    prerequisites: ['atmosphere-weather'],
    chapters: [
      {
        id: 'climate-modes',
        title: 'Climate Modes & Teleconnections',
        description: 'ENSO atmospheric teleconnections, PDO and AMO multidecadal variability, NAO and Arctic Oscillation, and the Asian monsoon system.',
        lessonIds: ['atmo-201-1-1-1', 'atmo-201-1-1-2', 'atmo-201-1-1-3', 'atmo-201-1-1-4'],
        iconId: 'chapter-climate-modes',
      },
      {
        id: 'dynamic-meteorology',
        title: 'Dynamic Meteorology',
        description: 'Jet streams and Rossby waves, atmospheric blocking, cyclogenesis and bomb cyclones, and mesoscale convective systems.',
        lessonIds: ['atmo-201-1-2-1', 'atmo-201-1-2-2', 'atmo-201-1-2-3', 'atmo-201-1-2-4'],
        iconId: 'chapter-dynamic-meteorology',
      },
      {
        id: 'atmospheric-extremes',
        title: 'Atmospheric Extremes',
        description: 'Heat waves and drought, atmospheric rivers, tropical cyclone intensification, and polar vortex dynamics and sudden stratospheric warming.',
        lessonIds: ['atmo-201-1-3-1', 'atmo-201-1-3-2', 'atmo-201-1-3-3', 'atmo-201-1-3-4'],
        iconId: 'chapter-atmospheric-extremes',
      },
      {
        id: 'numerical-weather-prediction',
        title: 'Numerical Weather Prediction and Predictability',
        description: 'Data assimilation and global observation networks, ensemble forecasting and uncertainty quantification, chaos theory and the limits of predictability, and machine learning in modern weather forecasting.',
        lessonIds: ['atmo-201-1-4-1', 'atmo-201-1-4-2', 'atmo-201-1-4-3', 'atmo-201-1-4-4'],
        iconId: 'chapter-numerical-weather-prediction',
      },
      {
        id: 'climate-dynamics-assessment',
        title: 'Path Assessment',
        description: 'Test your knowledge across all four chapters of Climate Dynamics & Variability.',
        lessonIds: ['atmo-201-capstone'],
        iconId: 'chapter-assessment',
      },
    ],
  },
  {
    id: 'astrobiology',
    title: 'Astrobiology',
    subtitle: 'From the origin of life on Earth to the search for it elsewhere — prebiotic chemistry, habitable worlds, and the cosmos as a life-detection problem.',
    track: 'ast',
    level: 'Foundations',
    color: BRAND.amethyst,
    icon: Activity,
    iconId: 'path-astrobiology',
    chapters: [
      {
        id: 'origins-of-life',
        title: 'Origins of Life',
        description: 'Chemical evolution and abiogenesis, early Earth and the first microfossils, extremophiles and the limits of life, and the Great Oxidation Event.',
        lessonIds: ['abio-101-1-1-1', 'abio-101-1-1-2', 'abio-101-1-1-3', 'abio-101-1-1-4'],
        iconId: 'chapter-origins-of-life',
      },
      {
        id: 'habitable-worlds',
        title: 'Habitable Worlds in the Solar System',
        description: 'Mars habitability past and present, Europa and icy ocean worlds, Titan\'s organic chemistry, and Venus as a runaway greenhouse cautionary tale.',
        lessonIds: ['abio-101-1-2-1', 'abio-101-1-2-2', 'abio-101-1-2-3', 'abio-101-1-2-4'],
        iconId: 'chapter-habitable-worlds',
      },
      {
        id: 'exoplanets-biosignatures',
        title: 'Exoplanets and the Search for Life',
        description: 'Detecting exoplanets, habitable zone theory, atmospheric biosignatures and false positives, and the Fermi paradox.',
        lessonIds: ['abio-101-1-3-1', 'abio-101-1-3-2', 'abio-101-1-3-3', 'abio-101-1-3-4'],
        iconId: 'chapter-exoplanets-biosignatures',
      },
      {
        id: 'search-for-life-beyond-earth',
        title: 'The Search for Life Beyond Earth',
        description: 'Mars habitability past and present, icy ocean worlds, atmospheric biosignatures detectable by JWST, and the Fermi paradox — why we haven\'t heard from anyone yet.',
        lessonIds: ['abio-101-1-4-1', 'abio-101-1-4-2', 'abio-101-1-4-3', 'abio-101-1-4-4'],
        iconId: 'chapter-search-for-life',
      },
      {
        id: 'astrobiology-assessment',
        title: 'Path Assessment',
        description: 'Test your knowledge across all four chapters of Astrobiology.',
        lessonIds: ['abio-101-capstone'],
        iconId: 'chapter-assessment',
      },
    ],
  },
]

// ─── Legacy named exports (derived from LEARNING_PATHS) ───────────────────────
// Kept for backwards compatibility with skill-tree/page.tsx and profile/page.tsx.

export const GEOL_101_MODULES = LEARNING_PATHS.find(p => p.id === 'earth-foundations')!.chapters
export const GEOL_201_MODULES = LEARNING_PATHS.find(p => p.id === 'deep-time')!.chapters
export const OCEA_101_MODULES = LEARNING_PATHS.find(p => p.id === 'ocean-systems')!.chapters
export const ATMO_101_MODULES = LEARNING_PATHS.find(p => p.id === 'atmosphere-weather')!.chapters
export const VOLC_101_MODULES = LEARNING_PATHS.find(p => p.id === 'volcanoes')!.chapters
export const CLIM_101_MODULES = LEARNING_PATHS.find(p => p.id === 'climate-past-future')!.chapters
export const ASTR_101_MODULES = LEARNING_PATHS.find(p => p.id === 'solar-system')!.chapters
export const SEIS_101_MODULES = LEARNING_PATHS.find(p => p.id === 'earthquakes-seismology')!.chapters
export const HYD_101_MODULES  = LEARNING_PATHS.find(p => p.id === 'hydrology')!.chapters
export const GLAC_101_MODULES = LEARNING_PATHS.find(p => p.id === 'glaciology')!.chapters
export const GEOM_101_MODULES = LEARNING_PATHS.find(p => p.id === 'geomorphology')!.chapters
export const ABIO_101_MODULES = LEARNING_PATHS.find(p => p.id === 'astrobiology')!.chapters
export const OCEA_201_MODULES = LEARNING_PATHS.find(p => p.id === 'marine-chemistry-biogeochemistry')!.chapters
export const CLIM_201_MODULES = LEARNING_PATHS.find(p => p.id === 'carbon-cycle-climate-feedbacks')!.chapters
export const VOLC_201_MODULES = LEARNING_PATHS.find(p => p.id === 'magma-systems-igneous-petrology')!.chapters
export const ATMO_201_MODULES = LEARNING_PATHS.find(p => p.id === 'climate-dynamics-variability')!.chapters

export const INSTITUTIONS: Institution[] = [
  { name: 'U.S. Geological Survey',                abbr: 'USGS',       type: 'Federal Agency · Public Domain',   url: 'usgs.gov',                  contributes: 'Rocks, minerals, volcanoes, earthquakes, tectonics, water resources', color: BRAND.jade },
  { name: 'National Aeronautics and Space Administration', abbr: 'NASA', type: 'Federal Agency · Public Domain', url: 'science.nasa.gov/earth',     contributes: 'Planetary science, climate data, Earth observation, atmospheric research', color: BRAND.accent },
  { name: 'National Oceanic and Atmospheric Administration', abbr: 'NOAA', type: 'Federal Agency · Public Domain', url: 'noaa.gov',               contributes: 'Ocean circulation, weather, climate, atmospheric dynamics', color: BRAND.accentHot },
  { name: 'National Science Foundation',            abbr: 'NSF',        type: 'Federal Agency · Public Domain',   url: 'nsf.gov',                   contributes: 'Research-grade curricular resources, field programs', color: BRAND.amethyst },
  { name: 'American Geosciences Institute',         abbr: 'AGI',        type: 'Nonprofit Federation',             url: 'americangeosciences.org',    contributes: 'Glossary of Geology, career resources, workforce data', color: BRAND.gold },
  { name: 'Paleontological Research Institution',   abbr: 'PRI',        type: 'Nonprofit · Earth@Home',           url: 'priweb.org',                 contributes: 'Digital Encyclopedia of Earth Science, fossil records, deep time', color: BRAND.coral },
  { name: 'OpenStax (Rice University)',             abbr: 'OpenStax',   type: 'CC-BY Licensed Textbooks',         url: 'openstax.org',               contributes: 'Peer-reviewed introductory textbook material', color: BRAND.accent },
  { name: 'UCAR Center for Science Education',      abbr: 'UCAR',       type: 'NSF-Funded Consortium',            url: 'scied.ucar.edu',             contributes: 'Atmospheric science, clouds, weather systems', color: BRAND.accentHot },
  { name: 'Smithsonian Global Volcanism Program',   abbr: 'SI-GVP',     type: 'Smithsonian Institution',          url: 'volcano.si.edu',             contributes: 'Volcano databases, eruption records', color: BRAND.ruby },
  { name: 'EarthScope Consortium (IRIS)',           abbr: 'EarthScope', type: 'NSF-Funded Consortium',            url: 'earthscope.org',             contributes: 'Seismology data, geophysics education', color: BRAND.amethyst },
]
