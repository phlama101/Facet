// Maps icon name strings to LucideIcon components.
// Used to hydrate cms_lessons JSONB sections where ConceptCard.icon is stored
// as a string name instead of the un-serialisable LucideIcon component.

import type { LucideIcon } from 'lucide-react'
import {
  Activity, AlertTriangle, Atom, BarChart2, BookOpen,
  ArrowLeftRight, ArrowRightLeft, ArrowUpDown,
  Circle, Clock, Cloud, CloudFog, Cpu, Crosshair,
  Diamond, Droplets, Earth, Eye, Feather, Fish,
  Flame, FlaskConical, Gem, Globe, HelpCircle,
  Hash, Heart, Home, Info, Layers, Leaf, Lightbulb,
  Link, Lock, Magnet, Map, Maximize, Microscope,
  Minimize, Moon, Mountain, Move, Navigation, Package,
  PieChart, Power, Radio, RefreshCw, RotateCw, Save,
  Scale, Search, Send, Settings, Shield, Shuffle,
  Sliders, Snowflake, Square, Star, Sun, Target,
  Telescope, Thermometer, TrendingDown, TrendingUp,
  Triangle, Unlock, Upload, User, Waves, Wind,
  Wrench, X, Zap, ZoomIn,
} from 'lucide-react'

const ICON_MAP: Record<string, LucideIcon> = {
  Activity, AlertTriangle, Atom, BarChart2, BookOpen,
  ArrowLeftRight, ArrowRightLeft, ArrowUpDown,
  Circle, Clock, Cloud, CloudFog, Cpu, Crosshair,
  Diamond, Droplets, Earth, Eye, Feather, Fish,
  Flame, FlaskConical, Gem, Globe,
  Hash, Heart, Home, Info, Layers, Leaf, Lightbulb,
  Link, Lock, Magnet, Map, Maximize, Microscope,
  Minimize, Moon, Mountain, Move, Navigation, Package,
  PieChart, Power, Radio, RefreshCw, RotateCw, Save,
  Scale, Search, Send, Settings, Shield, Shuffle,
  Sliders, Snowflake, Square, Star, Sun, Target,
  Telescope, Thermometer, TrendingDown, TrendingUp,
  Triangle, Unlock, Upload, User, Waves, Wind,
  Wrench, X, Zap, ZoomIn,
}

export function resolveIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? HelpCircle
}

export const ICON_NAMES = Object.keys(ICON_MAP).sort()
