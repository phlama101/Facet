'use client'

import { useState } from 'react'
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
  const [failed, setFailed] = useState(false)

  if (iconId && !failed) {
    return (
      <img
        src={`/icons/${category}/${iconId}.webp`}
        width={size}
        height={size}
        alt=""
        draggable={false}
        onError={() => setFailed(true)}
        style={{ objectFit: 'contain', display: 'block' }}
      />
    )
  }

  return <Fallback size={size} color={color} />
}
