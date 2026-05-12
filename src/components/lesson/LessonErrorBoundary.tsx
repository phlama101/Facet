'use client'

import { Component, type ErrorInfo, type ReactNode } from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'
import { BRAND } from '@/lib/brand'

interface Props {
  children: ReactNode
}

interface State {
  error: Error | null
}

export default class LessonErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('[LessonErrorBoundary]', error, info.componentStack)
  }

  render() {
    const { error } = this.state
    if (!error) return this.props.children

    return (
      <div
        className="my-8 p-6 rounded-sm flex flex-col items-center gap-4 text-center"
        style={{ border: `1px solid ${BRAND.ruby}35`, backgroundColor: `${BRAND.ruby}08` }}
      >
        <div
          className="w-12 h-12 rounded-sm flex items-center justify-center"
          style={{ backgroundColor: `${BRAND.ruby}15`, border: `1px solid ${BRAND.ruby}30` }}
        >
          <AlertTriangle size={20} color={BRAND.ruby} />
        </div>
        <div>
          <p className="font-medium text-sm" style={{ color: BRAND.text }}>
            This section couldn&apos;t be displayed
          </p>
          <p className="text-xs mt-1" style={{ color: BRAND.textDim }}>
            The rest of your lesson is unaffected. Try reloading if this persists.
          </p>
        </div>
        <button
          onClick={() => this.setState({ error: null })}
          className="flex items-center gap-1.5 px-4 py-2 rounded-sm text-[11px] tracking-[0.1em] uppercase font-semibold transition-opacity hover:opacity-80"
          style={{ backgroundColor: BRAND.surfaceHi, border: `1px solid ${BRAND.borderHi}`, color: BRAND.text }}
        >
          <RefreshCw size={11} /> Retry
        </button>
      </div>
    )
  }
}
