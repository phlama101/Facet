export type Difficulty = 'beginner' | 'intermediate' | 'advanced' | 'expert'
export type Category = 'geology' | 'oceanography' | 'meteorology' | 'volcanology' | 'paleontology' | 'climatology'
export type Subscription = 'free' | 'pro' | 'expert'
export type Rarity = 'common' | 'rare' | 'epic' | 'legendary'

export interface Profile {
  id: string
  username: string
  display_name: string | null
  bio: string | null
  avatar_color: string
  xp: number
  level: number
  streak: number
  longest_streak: number
  last_active: string
  subscription: Subscription
  created_at: string
}

export interface Course {
  id: string
  slug: string
  title: string
  description: string
  long_description?: string
  category: Category
  difficulty: Difficulty
  icon: string
  color: string
  gradient: string
  total_xp: number
  estimated_hours: number
  tags: string[]
  is_premium: boolean
  order_index: number
  module_count?: number
  lesson_count?: number
  enrolled?: boolean
  progress?: number
}

export interface Module {
  id: string
  course_id: string
  title: string
  description: string | null
  order_index: number
  xp_reward: number
  lessons?: Lesson[]
  quiz?: Quiz | null
}

export interface Lesson {
  id: string
  module_id: string
  title: string
  content: string
  key_concepts: string[]
  fun_fact: string | null
  type: string
  order_index: number
  xp_reward: number
  read_time: number
  completed?: boolean
}

export interface Quiz {
  id: string
  module_id: string
  title: string
  description: string | null
  xp_reward: number
  passing_score: number
}

export interface QuizQuestion {
  id: string
  quiz_id: string
  question: string
  options: string[]
  correct_answer: string
  explanation: string | null
  order_index: number
}

export interface QuizAttempt {
  id: string
  user_id: string
  quiz_id: string
  score: number
  passed: boolean
  xp_earned: number
  answers: Record<string, string>
  attempted_at: string
}

export interface Achievement {
  id: string
  title: string
  description: string | null
  icon: string
  color: string
  xp_reward: number
  condition_type: string
  condition_value: number
  rarity: Rarity
  earned_at?: string
}

export interface LeaderboardEntry {
  id: string
  username: string
  display_name: string | null
  avatar_color: string
  xp: number
  level: number
  streak: number
  rank: number
}

export interface UserStats {
  xp: number
  level: number
  streak: number
  longest_streak: number
  enrolled_courses: number
  completed_courses: number
  completed_lessons: number
  quizzes_passed: number
  achievements_earned: number
  xp_progress: number
}
