import { Mountain, Waves, Wind, Flame, Thermometer, Telescope } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { BRAND } from '@/lib/brand'
import type { Lesson, TrackId } from './types'

import rockCycle             from './rock-cycle'
import rockCycleIntermediate  from './rock-cycle-intermediate'
import plateTectonics         from './plate-tectonics'
import minerals               from './minerals'
import oceanCurrents          from './ocean-currents'
import cloudTypes             from './cloud-types'
import earthInternalStructure      from './geol-101-1-1'
import crustContinentalVsOceanic   from './geol-101-1-2'
import mantleConvection            from './geol-101-1-3'

export const LESSONS: Record<string, Lesson> = {
  'rock-cycle':              rockCycle,
  'rock-cycle-intermediate': rockCycleIntermediate,
  'plate-tectonics':         plateTectonics,
  'minerals':                minerals,
  'ocean-currents':          oceanCurrents,
  'cloud-types':             cloudTypes,
  'geol-101-1-1':            earthInternalStructure,
  'geol-101-1-2':            crustContinentalVsOceanic,
  'geol-101-1-3':            mantleConvection,
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
