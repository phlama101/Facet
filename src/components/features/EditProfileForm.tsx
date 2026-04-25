'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Save, Check } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

const AVATAR_COLORS = ['#06b6d4','#f97316','#10b981','#8b5cf6','#f59e0b','#ef4444','#3b82f6','#ec4899']

interface Props { currentDisplayName: string; currentBio: string; currentColor: string }

export default function EditProfileForm({ currentDisplayName, currentBio, currentColor }: Props) {
  const router = useRouter()
  const [displayName, setDisplayName] = useState(currentDisplayName)
  const [bio, setBio] = useState(currentBio)
  const [color, setColor] = useState(currentColor)
  const [loading, setLoading] = useState(false)
  const [saved, setSaved] = useState(false)

  async function save(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return
    await (supabase.from('profiles') as any).update({ display_name: displayName, bio, avatar_color: color }).eq('id', user.id)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
    setLoading(false)
    router.refresh()
  }

  return (
    <form onSubmit={save} className="space-y-4">
      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-[#8b949e] uppercase tracking-wide">Display Name</label>
        <input value={displayName} onChange={e => setDisplayName(e.target.value)}
          className="w-full bg-white/5 border border-white/8 focus:border-cyan-500/50 focus:outline-none text-[#e6edf3] placeholder-[#8b949e] rounded-xl px-4 py-3 text-sm transition-colors" />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-semibold text-[#8b949e] uppercase tracking-wide">Bio</label>
        <textarea value={bio} onChange={e => setBio(e.target.value)} rows={3}
          placeholder="Tell us about your interest in earth sciences..."
          className="w-full bg-white/5 border border-white/8 focus:border-cyan-500/50 focus:outline-none text-[#e6edf3] placeholder-[#8b949e] rounded-xl px-4 py-3 text-sm transition-colors resize-none" />
      </div>

      <div className="space-y-2">
        <label className="text-xs font-semibold text-[#8b949e] uppercase tracking-wide">Avatar Color</label>
        <div className="flex flex-wrap gap-2">
          {AVATAR_COLORS.map(c => (
            <button key={c} type="button" onClick={() => setColor(c)}
              className="w-9 h-9 rounded-full border-2 transition-all"
              style={{ background: c, borderColor: color === c ? '#fff' : 'transparent', transform: color === c ? 'scale(1.15)' : 'scale(1)' }}
            />
          ))}
        </div>
      </div>

      <button type="submit" disabled={loading}
        className="flex items-center gap-2 px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-60 text-[#0d1117] rounded-xl text-sm font-bold transition-all">
        {saved ? <><Check className="w-4 h-4" /> Saved!</> : loading ? <span className="w-4 h-4 border-2 border-[#0d1117]/30 border-t-[#0d1117] rounded-full animate-spin" /> : <><Save className="w-4 h-4" /> Save Changes</>}
      </button>
    </form>
  )
}
