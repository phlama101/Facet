'use client'

import { useState } from 'react'

export default function PathImageClient({ src, size }: { src: string; size: number }) {
  const [visible, setVisible] = useState(true)
  if (!visible) return null
  return (
    <img
      src={src}
      width={size}
      height={size}
      alt=""
      draggable={false}
      onError={() => setVisible(false)}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' }}
    />
  )
}
