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
          is_admin: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          username: string
          display_name?: string | null
          bio?: string | null
          avatar_color?: string
          xp?: number
          level?: number
          streak?: number
          longest_streak?: number
          last_active?: string
          subscription?: 'free' | 'pro' | 'expert'
          stripe_customer_id?: string | null
          is_admin?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          username?: string
          display_name?: string | null
          bio?: string | null
          avatar_color?: string
          xp?: number
          level?: number
          streak?: number
          longest_streak?: number
          last_active?: string
          subscription?: 'free' | 'pro' | 'expert'
          stripe_customer_id?: string | null
          is_admin?: boolean
          created_at?: string
          updated_at?: string
        }
        Relationships: []
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
        Insert: {
          id?: string
          slug: string
          title: string
          description?: string | null
          long_description?: string | null
          category: string
          difficulty: string
          icon: string
          color: string
          gradient: string
          total_xp?: number
          estimated_hours?: number
          prerequisites?: string[]
          tags?: string[]
          is_premium?: boolean
          order_index?: number
          published?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          slug?: string
          title?: string
          description?: string | null
          long_description?: string | null
          category?: string
          difficulty?: string
          icon?: string
          color?: string
          gradient?: string
          total_xp?: number
          estimated_hours?: number
          prerequisites?: string[]
          tags?: string[]
          is_premium?: boolean
          order_index?: number
          published?: boolean
          created_at?: string
        }
        Relationships: []
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
        Insert: {
          id?: string
          course_id: string
          title: string
          description?: string | null
          order_index?: number
          xp_reward?: number
        }
        Update: {
          id?: string
          course_id?: string
          title?: string
          description?: string | null
          order_index?: number
          xp_reward?: number
        }
        Relationships: []
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
        Insert: {
          id?: string
          module_id: string
          title: string
          content: string
          key_concepts?: string[]
          fun_fact?: string | null
          type?: string
          order_index?: number
          xp_reward?: number
          read_time?: number
        }
        Update: {
          id?: string
          module_id?: string
          title?: string
          content?: string
          key_concepts?: string[]
          fun_fact?: string | null
          type?: string
          order_index?: number
          xp_reward?: number
          read_time?: number
        }
        Relationships: []
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
        Insert: {
          id?: string
          module_id: string
          title: string
          description?: string | null
          xp_reward?: number
          passing_score?: number
        }
        Update: {
          id?: string
          module_id?: string
          title?: string
          description?: string | null
          xp_reward?: number
          passing_score?: number
        }
        Relationships: []
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
        Insert: {
          id?: string
          quiz_id: string
          question: string
          type?: string
          options: string[]
          correct_answer: string
          explanation?: string | null
          order_index?: number
        }
        Update: {
          id?: string
          quiz_id?: string
          question?: string
          type?: string
          options?: string[]
          correct_answer?: string
          explanation?: string | null
          order_index?: number
        }
        Relationships: []
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
        Insert: {
          id?: string
          user_id: string
          course_id: string
          enrolled_at?: string
          completed_at?: string | null
          progress_percentage?: number
        }
        Update: {
          id?: string
          user_id?: string
          course_id?: string
          enrolled_at?: string
          completed_at?: string | null
          progress_percentage?: number
        }
        Relationships: []
      }
      user_lesson_progress: {
        Row: {
          id: string
          user_id: string
          lesson_id: string
          completed: boolean
          completed_at: string
        }
        Insert: {
          id?: string
          user_id: string
          lesson_id: string
          completed: boolean
          completed_at: string
        }
        Update: {
          id?: string
          user_id?: string
          lesson_id?: string
          completed?: boolean
          completed_at?: string
        }
        Relationships: []
      }
      user_quiz_attempts: {
        Row: {
          id: string
          user_id: string
          quiz_id: string
          score: number
          passed: boolean
          xp_earned: number
          answers: Record<string, string>
          attempted_at: string
        }
        Insert: {
          id?: string
          user_id: string
          quiz_id: string
          score: number
          passed?: boolean
          xp_earned?: number
          answers?: Record<string, string>
          attempted_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          quiz_id?: string
          score?: number
          passed?: boolean
          xp_earned?: number
          answers?: Record<string, string>
          attempted_at?: string
        }
        Relationships: []
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
        Insert: {
          id?: string
          title: string
          description?: string | null
          icon: string
          color?: string
          xp_reward?: number
          condition_type: string
          condition_value?: number
          rarity?: 'common' | 'rare' | 'epic' | 'legendary'
        }
        Update: {
          id?: string
          title?: string
          description?: string | null
          icon?: string
          color?: string
          xp_reward?: number
          condition_type?: string
          condition_value?: number
          rarity?: 'common' | 'rare' | 'epic' | 'legendary'
        }
        Relationships: []
      }
      user_achievements: {
        Row: {
          id: string
          user_id: string
          achievement_id: string
          earned_at: string
        }
        Insert: {
          id?: string
          user_id: string
          achievement_id: string
          earned_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          achievement_id?: string
          earned_at?: string
        }
        Relationships: []
      }
      cms_lessons: {
        Row: {
          id: string
          title: string
          track: 'geo' | 'oce' | 'atm' | 'vol' | 'cli' | 'ast'
          track_name: string
          level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | 'SME'
          duration: string
          xp_reward: number
          description: string
          sources: unknown[]
          sections: unknown[]
          is_premium: boolean
          status: 'draft' | 'review' | 'published'
          created_at: string
          updated_at: string
          created_by: string | null
        }
        Insert: {
          id: string
          title: string
          track: 'geo' | 'oce' | 'atm' | 'vol' | 'cli' | 'ast'
          track_name: string
          level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | 'SME'
          duration?: string
          xp_reward?: number
          description?: string
          sources?: unknown[]
          sections?: unknown[]
          is_premium?: boolean
          status?: 'draft' | 'review' | 'published'
          created_at?: string
          updated_at?: string
          created_by?: string | null
        }
        Update: {
          id?: string
          title?: string
          track?: 'geo' | 'oce' | 'atm' | 'vol' | 'cli' | 'ast'
          track_name?: string
          level?: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert' | 'SME'
          duration?: string
          xp_reward?: number
          description?: string
          sources?: unknown[]
          sections?: unknown[]
          is_premium?: boolean
          status?: 'draft' | 'review' | 'published'
          created_at?: string
          updated_at?: string
          created_by?: string | null
        }
        Relationships: []
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
        Relationships: []
      }
    }
    Functions: {
      award_xp: {
        Args: { p_user_id: string; p_xp: number; p_now?: string }
        Returns: { new_xp: number; new_level: number; new_streak: number }[]
      }
    }
    Enums: Record<string, never>
    CompositeTypes: Record<string, never>
  }
}
