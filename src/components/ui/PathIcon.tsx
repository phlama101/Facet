import PathImageClient from './PathImageClient'
import type { LucideIcon } from 'lucide-react'

export default function PathIcon({
  iconId,
  category,
  fallback: Fallback,
  color,
  size = 16,
}: {
  iconId?: string
  category: 'paths' | 'chapters'
  fallback: LucideIcon
  color: string
  size?: number
}) {
  return (
    <span
      style={{
        position: 'relative',
        width: size,
        height: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}
    >
      <Fallback size={size} color={color} />
      {iconId && (
        <PathImageClient src={`/icons/${category}/${iconId}.webp`} size={size} />
      )}
    </span>
  )
}
