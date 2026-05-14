'use client'

import { useState } from 'react'

export default function PathImageClient({ src, size }: { src: string; size: number }) {
  const [loaded, setLoaded] = useState(false)
  const [errored, setErrored] = useState(false)
  if (errored) return null
  return (
    <img
      src={src}
      width={size}
      height={size}
      alt=""
      draggable={false}
      onLoad={() => setLoaded(true)}
      onError={() => setErrored(true)}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        objectFit: 'contain',
        opacity: loaded ? 1 : 0,
      }}
    />
  )
}
