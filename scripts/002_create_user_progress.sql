-- Create user_progress table to track XP and streaks per language
CREATE TABLE IF NOT EXISTS public.user_progress (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  language TEXT NOT NULL CHECK (language IN ('Kannada', 'Hindi')),
  xp INTEGER DEFAULT 0,
  streak INTEGER DEFAULT 0,
  last_lesson_date DATE,
  lessons_completed INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(user_id, language)
);

-- Enable RLS on user_progress table
ALTER TABLE public.user_progress ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "user_progress_select_own" 
  ON public.user_progress FOR SELECT 
  USING (auth.uid() = user_id);

CREATE POLICY "user_progress_insert_own" 
  ON public.user_progress FOR INSERT 
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "user_progress_update_own" 
  ON public.user_progress FOR UPDATE 
  USING (auth.uid() = user_id);

CREATE POLICY "user_progress_delete_own" 
  ON public.user_progress FOR DELETE 
  USING (auth.uid() = user_id);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_user_progress_user_id ON public.user_progress(user_id);
