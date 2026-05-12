import { Metadata } from 'next'
import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import type { QuizQuestion } from '@/types'
import QuizClient from '@/components/features/QuizClient'
import { ChevronLeft, Trophy } from 'lucide-react'

interface Props { params: Promise<{ id: string }> }

export const metadata: Metadata = { title: 'Quiz' }

export default async function QuizPage({ params }: Props) {
  const { id } = await params
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // Try to fetch quiz from Supabase, fall back to mock
  const { data: quiz } = await supabase.from('quizzes').select('*').eq('id', id).single()
  const safeQuiz = quiz as { title: string; xp_reward: number; passing_score: number } | null
  const { data: dbQuestions } = await supabase.from('quiz_questions').select('*').eq('quiz_id', id).order('order_index')
  const safeDbQuestions = dbQuestions as { id: string; quiz_id: string; question: string; options: string[] | string; correct_answer: string; explanation: string | null; order_index: number }[] | null

  const questions: QuizQuestion[] = (safeDbQuestions ?? []).map(q => ({
    ...q,
    options: Array.isArray(q.options) ? q.options : JSON.parse(q.options as string),
  }))

  const quizTitle = safeQuiz?.title ?? 'Earth Science Quiz'
  const xpReward = safeQuiz?.xp_reward ?? 100
  const passingScore = safeQuiz?.passing_score ?? 70

  // Best previous attempt
  let bestScore: number | null = null
  if (user) {
    const { data: attempts } = await supabase.from('user_quiz_attempts').select('score').eq('user_id', user.id).eq('quiz_id', id).order('score', { ascending: false }).limit(1)
    bestScore = (attempts as { score: number }[] | null)?.[0]?.score ?? null
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link href="/courses" className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/10 border border-white/8 flex items-center justify-center text-[#8b949e] hover:text-[#e6edf3] transition-colors">
          <ChevronLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-xl font-black text-[#e6edf3]">{quizTitle}</h1>
          <p className="text-sm text-[#8b949e]">{questions.length} questions · Pass at {passingScore}% · +{xpReward} XP</p>
        </div>
      </div>

      {/* Best score badge */}
      {bestScore !== null && (
        <div className="flex items-center gap-3 p-4 rounded-xl bg-amber-500/10 border border-amber-500/15">
          <Trophy className="w-5 h-5 text-amber-400 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-[#e6edf3]">Your Best Score</p>
            <p className="text-xs text-[#8b949e]">{Math.round(bestScore)}% — {bestScore >= passingScore ? '✓ Passed' : 'Keep practising'}</p>
          </div>
          <span className="ml-auto text-2xl font-black text-amber-400">{Math.round(bestScore)}%</span>
        </div>
      )}

      {/* Quiz */}
      <div className="p-6 md:p-8 rounded-2xl bg-[#161b22] border border-white/5">
        <QuizClient
          questions={questions}
          quizTitle={quizTitle}
          xpReward={xpReward}
          passingScore={passingScore}
          quizId={id}
        />
      </div>
    </div>
  )
}
