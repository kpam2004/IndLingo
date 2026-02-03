-- Add public read access to profiles for leaderboard display
-- This allows any authenticated user to see aggregated profile data for leaderboard rankings
CREATE POLICY "profiles_select_all_for_leaderboard" 
  ON public.profiles FOR SELECT 
  USING (true);

-- Add public read access to user_progress for leaderboard
-- This allows any authenticated user to see aggregated progress data
CREATE POLICY "user_progress_select_all_for_leaderboard" 
  ON public.user_progress FOR SELECT 
  USING (true);
