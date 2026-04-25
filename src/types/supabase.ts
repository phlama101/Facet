export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
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
          subscription: 'free' | 'pro' | 'expert'
          stripe_customer_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: Partial<Database['public']['Tables']['profiles']['Row']> & { id: string; username: string }
        Update: Partial<Database['public']['Tables']['profiles']['Row']>
      }
      courses: {
        Row: {
          id: string
          slug: string
          title: string
          description: string | null
          long_description: string | null
          category: string
          difficulty: string
          icon: string
          color: string
          gradient: string
          total_xp: number
          estimated_hours: number
          prerequisites: string[]
          tags: string[]
          is_premium: boolean
          order_index: number
          published: boolean
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['courses']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['courses']['Row']>
      }
      modules: {
        Row: {
          id: string
          course_id: string
          title: string
          description: string | null
          order_index: number
          xp_reward: number
        }
        Insert: Omit<Database['public']['Tables']['modules']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['modules']['Row']>
      }
      lessons: {
        Row: {
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
        }
        Insert: Omit<Database['public']['Tables']['lessons']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['lessons']['Row']>
      }
      quizzes: {
        Row: {
          id: string
          module_id: string
          title: string
          description: string | null
          xp_reward: number
          passing_score: number
        }
        Insert: Omit<Database['public']['Tables']['quizzes']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['quizzes']['Row']>
      }
      quiz_questions: {
        Row: {
          id: string
          quiz_id: string
          question: string
          type: string
          options: string[]
          correct_answer: string
          explanation: string | null
          order_index: number
        }
        Insert: Omit<Database['public']['Tables']['quiz_questions']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['quiz_questions']['Row']>
      }
      user_course_enrollments: {
        Row: {
          id: string
          user_id: string
          course_id: string
          enrolled_at: string
          completed_at: string | null
          progress_percentage: number
        }
        Insert: Omit<Database['public']['Tables']['user_course_enrollments']['Row'], 'id' | 'enrolled_at'>
        Update: Partial<Database['public']['Tables']['user_course_enrollments']['Row']>
      }
      achievements: {
        Row: {
          id: string
          title: string
          description: string | null
          icon: string
          color: string
          xp_reward: number
          condition_type: string
          condition_value: number
          rarity: 'common' | 'rare' | 'epic' | 'legendary'
        }
        Insert: Omit<Database['public']['Tables']['achievements']['Row'], 'id'>
        Update: Partial<Database['public']['Tables']['achievements']['Row']>
      }
    }
    Views: {
      leaderboard: {
        Row: {
          id: string
          username: string
          display_name: string | null
          avatar_color: string
          xp: number
          level: number
          streak: number
          rank: number
        }
      }
    }
  }
}
