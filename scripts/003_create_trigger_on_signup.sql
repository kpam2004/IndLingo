-- Create trigger function to auto-create profile and progress on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE PLPGSQL
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, first_name, last_name, email, avatar_initial)
  VALUES (
    new.id,
    COALESCE(new.raw_user_meta_data ->> 'first_name', 'User'),
    COALESCE(new.raw_user_meta_data ->> 'last_name', ''),
    new.email,
    SUBSTRING(COALESCE(new.raw_user_meta_data ->> 'first_name', 'User'), 1, 1)
  )
  ON CONFLICT (id) DO NOTHING;

  INSERT INTO public.user_progress (user_id, language, xp, streak)
  VALUES (new.id, 'Kannada', 0, 0)
  ON CONFLICT (user_id, language) DO NOTHING;

  INSERT INTO public.user_progress (user_id, language, xp, streak)
  VALUES (new.id, 'Hindi', 0, 0)
  ON CONFLICT (user_id, language) DO NOTHING;

  RETURN new;
END;
$$;

-- Drop existing trigger if it exists
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

-- Create trigger that fires after user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();
