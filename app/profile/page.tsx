"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/client"

interface UserProfile {
  id: string
  first_name: string
  last_name: string
  email: string
  avatar_initial: string
  total_xp: number
  best_streak: number
}

interface LanguageProgress {
  name: string
  color: string
  lessonsCompleted: number
  totalLessons: number
  xp: number
  streak: number
}

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isResetting, setIsResetting] = useState(false)
  const [resetConfirm, setResetConfirm] = useState(false)
  const [userRank, setUserRank] = useState<number | null>(null)
  const [hasWeekStreak, setHasWeekStreak] = useState(false)
  const [isLanguageMaster, setIsLanguageMaster] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser()
        if (userError || !user) {
          router.push("/auth/login")
          return
        }

        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single()

        if (profileError) {
          console.error("[v0] Profile fetch error:", profileError)
          setError("Failed to load profile")
          return
        }

        setProfile({
          id: user.id,
          first_name: profileData?.first_name || user.user_metadata?.first_name || "User",
          last_name: profileData?.last_name || user.user_metadata?.last_name || "",
          email: user.email || "",
          avatar_initial: profileData?.avatar_initial || (user.user_metadata?.first_name || "U")[0].toUpperCase(),
          total_xp: profileData?.total_xp || 0,
          best_streak: profileData?.best_streak || 0,
        })
      } catch (err) {
        console.error("[v0] Error fetching profile:", err)
        setError("An error occurred while loading your profile")
      } finally {
        setIsLoading(false)
      }
    }

    fetchUserProfile()
  }, [supabase, router])

  const [languages, setLanguages] = useState<LanguageProgress[]>([])

  useEffect(() => {
    const fetchLanguageProgress = async () => {
      if (!profile) return

      try {
        const { data: progressData, error: progressError } = await supabase
          .from("user_progress")
          .select("*")
          .eq("user_id", profile.id)

        if (progressError) {
          console.error("[v0] Progress fetch error:", progressError)
          return
        }

        const langProgress: LanguageProgress[] = [
          {
            name: "Kannada",
            color: "from-green-400 to-green-600",
            lessonsCompleted: progressData?.find((p) => p.language === "Kannada")?.lessons_completed || 0,
            totalLessons: 25,
            xp: progressData?.find((p) => p.language === "Kannada")?.xp || 0,
            streak: progressData?.find((p) => p.language === "Kannada")?.streak || 0,
          },
          {
            name: "Hindi",
            color: "from-blue-400 to-blue-600",
            lessonsCompleted: progressData?.find((p) => p.language === "Hindi")?.lessons_completed || 0,
            totalLessons: 25,
            xp: progressData?.find((p) => p.language === "Hindi")?.xp || 0,
            streak: progressData?.find((p) => p.language === "Hindi")?.streak || 0,
          },
        ]

        setLanguages(langProgress)
        const totalLessonsCompleted = langProgress.reduce((sum, l) => sum + l.lessonsCompleted, 0)
        const hasLanguageMaster = totalLessonsCompleted >= 10
        setIsLanguageMaster(hasLanguageMaster)
      } catch (err) {
        console.error("[v0] Error fetching language progress:", err)
      }
    }

    fetchLanguageProgress()
  }, [profile, supabase])

  useEffect(() => {
    const fetchUserRank = async () => {
      if (!profile) return

      try {
        const response = await fetch('/api/leaderboard')
        const leaderboardData = await response.json()
        
        const rank = leaderboardData.findIndex((user: any) => user.name === profile.first_name) + 1
        setUserRank(rank)
      } catch (err) {
        console.error("[v0] Error fetching leaderboard:", err)
      }
    }

    fetchUserRank()
  }, [profile])

  useEffect(() => {
    if (profile) {
      const hasWeekWarrior = (profile.best_streak ?? 0) >= 7
      setHasWeekStreak(hasWeekWarrior)
    }
  }, [profile])

  const handleResetProgress = async () => {
    if (!profile) return

    setIsResetting(true)
    try {
      const { error: deleteError } = await supabase.from("user_progress").delete().eq("user_id", profile.id)

      if (deleteError) {
        console.error("[v0] Error deleting progress:", deleteError)
        setError("Failed to reset progress")
        setIsResetting(false)
        return
      }

      const { error: updateError } = await supabase
        .from("profiles")
        .update({
          total_xp: 0,
          best_streak: 0,
          updated_at: new Date().toISOString(),
        })
        .eq("id", profile.id)

      if (updateError) {
        console.error("[v0] Error updating profile:", updateError)
        setError("Failed to reset profile")
        setIsResetting(false)
        return
      }

      setProfile({
        ...profile,
        total_xp: 0,
        best_streak: 0,
      })

      setLanguages([
        {
          name: "Kannada",
          color: "from-green-400 to-green-600",
          lessonsCompleted: 0,
          totalLessons: 25,
          xp: 0,
          streak: 0,
        },
        {
          name: "Hindi",
          color: "from-blue-400 to-blue-600",
          lessonsCompleted: 0,
          totalLessons: 25,
          xp: 0,
          streak: 0,
        },
      ])

      setResetConfirm(false)
    } catch (err) {
      console.error("[v0] Error resetting progress:", err)
      setError("An error occurred while resetting progress")
    } finally {
      setIsResetting(false)
    }
  }

  const badges = [
    { name: "Getting Started", icon: "🚀", description: "Completed first lesson", earned: (profile?.total_xp ?? 0) > 0 },
    { name: "Week Warrior", icon: "⚔️", description: "7-day streak achieved", earned: hasWeekStreak },
    {
      name: "Language Master",
      icon: "🎓",
      description: "Completed 10 lessons",
      earned: isLanguageMaster,
    },
    { name: "Social Butterfly", icon: "🦋", description: "Reached top 5 leaderboard", earned: (userRank !== null && userRank <= 5) },
  ]

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut()
      router.push("/")
    } catch (err) {
      console.error("[v0] Logout error:", err)
      setError("Failed to logout")
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-slate-600">Loading profile...</div>
        </main>
      </div>
    )
  }

  if (error || !profile) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
        <Navbar />
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center text-red-600">{error || "Failed to load profile"}</div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 sm:p-12 text-white mb-12 shadow-xl">
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
              <div className="text-4xl font-bold text-purple-600">{profile.avatar_initial}</div>
            </div>
            <div>
              <h1 className="text-4xl font-bold">
                {profile.first_name} {profile.last_name}
              </h1>
              <p className="text-white/80">{profile.email}</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/20 rounded-xl p-4">
              <div className="text-sm opacity-80 mb-1">Total XP</div>
              <div className="text-3xl font-bold">{profile.total_xp}</div>
            </div>
            <div className="bg-white/20 rounded-xl p-4">
              <div className="text-sm opacity-80 mb-1">Best Streak</div>
              <div className="text-3xl font-bold">{profile.best_streak} days</div>
            </div>
            <div className="bg-white/20 rounded-xl p-4">
              <div className="text-sm opacity-80 mb-1">Badges</div>
              <div className="text-3xl font-bold">{badges.filter((badge) => badge.earned).length}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-3xl font-bold text-slate-900">Language Progress</h2>

            {languages.map((lang) => {
              const percentage = (lang.lessonsCompleted / lang.totalLessons) * 100
              return (
                <div key={lang.name} className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">{lang.name}</h3>
                      <p className="text-slate-600">
                        {lang.lessonsCompleted}/{lang.totalLessons} lessons completed
                      </p>
                    </div>
                    <Link href={`/learn/${lang.name.toLowerCase()}`}>
                      <Button className="bg-slate-100 text-slate-900 hover:bg-slate-200">Continue Learning</Button>
                    </Link>
                  </div>
                  <div className="mb-6">
                    <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
                      <div
                        className={`bg-gradient-to-r ${lang.color} h-full rounded-full transition-all duration-500`}
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className={`bg-gradient-to-br ${lang.color} rounded-xl p-4 text-white`}>
                      <div className="text-sm opacity-90 mb-1">XP Earned</div>
                      <div className="text-2xl font-bold">{lang.xp}</div>
                    </div>
                    <div className={`bg-gradient-to-br ${lang.color} rounded-xl p-4 text-white`}>
                      <div className="text-sm opacity-90 mb-1">Current Streak</div>
                      <div className="text-2xl font-bold">{lang.streak} days</div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Achievements</h2>
            <div className="space-y-4">
              {badges.map((badge) => (
                <div
                  key={badge.name}
                  className={`rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow ${
                    badge.earned ? "bg-white" : "bg-gradient-to-br from-slate-100 to-slate-50 opacity-60"
                  }`}
                >
                  <div className={`text-4xl mb-2 ${badge.earned ? "" : "grayscale opacity-50"}`}>{badge.icon}</div>
                  <h3 className={`font-bold ${badge.earned ? "text-slate-900" : "text-slate-500"}`}>{badge.name}</h3>
                  <p className={`text-sm ${badge.earned ? "text-slate-600" : "text-slate-400"}`}>{badge.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg border-t-4 border-purple-500">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Settings</h2>
          <div className="space-y-4">
            {!resetConfirm ? (
              <Button
                onClick={() => setResetConfirm(true)}
                variant="outline"
                className="w-full justify-start p-4 h-auto bg-transparent text-orange-600 hover:bg-orange-50"
              >
                Reset Progress
              </Button>
            ) : (
              <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <p className="text-sm text-orange-800 font-semibold mb-3">
                  Are you sure? This will delete all your progress data.
                </p>
                <div className="flex gap-2">
                  <Button
                    onClick={handleResetProgress}
                    disabled={isResetting}
                    className="bg-red-600 hover:bg-red-700 text-white flex-1"
                  >
                    {isResetting ? "Resetting..." : "Confirm Reset"}
                  </Button>
                  <Button
                    onClick={() => setResetConfirm(false)}
                    variant="outline"
                    disabled={isResetting}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
            <Button
              onClick={handleLogout}
              variant="outline"
              className="w-full justify-start p-4 h-auto text-red-600 bg-transparent hover:bg-red-50"
            >
              Logout
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}
