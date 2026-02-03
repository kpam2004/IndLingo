import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"

export async function getAllUsers() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("profiles")
    .select("first_name, total_xp")
    .order("total_xp", { ascending: false });
  if (error) throw error;
  return (data ?? []).map((user, idx) => ({
    rank: idx + 1,
    name: user.first_name,
    xp: user.total_xp ?? 0,
  }));
}

export async function createClient() {
  const cookieStore = await cookies()

  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
        }
      },
    },
  })
}
