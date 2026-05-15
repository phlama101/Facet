import { Suspense } from 'react'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { BRAND } from '@/lib/brand'
import ReviewClient from './ReviewClient'

export const metadata = { title: 'Review · Facet' }

export default async function ReviewPage() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/login')
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center py-24 text-sm" style={{ color: BRAND.textDim }}>
          Loading review cards…
        </div>
      }
    >
      <ReviewClient />
    </Suspense>
  )
}
