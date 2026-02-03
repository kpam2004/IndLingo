"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import ProgressBar from "@/components/progress-bar"
import LeaderboardCard from "@/components/leaderboard-card"
import { createClient } from "@/lib/client"
import { hindiLessons } from "@/lib/lesson-data"

interface Learner {
  rank: number
  name: string
  xp: number
  highlight?: boolean
}

export default function HindiDashboard() {
  const [userStats, setUserStats] = useState({
    xp: 0,
    streak: 0,
    lessonsCompleted: 0,
    totalLessons: Object.keys(hindiLessons).length,
  })

  const [topLearners, setTopLearners] = useState<Learner[]>([])
  const [currentUserId, setCurrentUserId] = useState<string>("")
  const supabase = createClient()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser()

        if (!user) return

        setCurrentUserId(user.id)

        const { data: userProgress } = await supabase
          .from("user_progress")
          .select("*")
          .eq("user_id", user.id)
          .eq("language", "Hindi")
          .single()

        if (userProgress) {
          setUserStats({
            xp: userProgress.xp,
            streak: userProgress.streak,
            lessonsCompleted: userProgress.lessons_completed,
            totalLessons: Object.keys(hindiLessons).length,
          })
        }

        const { data: allProfiles } = await supabase
          .from("profiles")
          .select("id, first_name, last_name, total_xp")
          .order("total_xp", { ascending: false })
          .limit(10)

        if (allProfiles) {
          const learners: Learner[] = allProfiles.map((profile, index) => ({
            rank: index + 1,
            name: `${profile.first_name} ${profile.last_name}`,
            xp: profile.total_xp,
            highlight: profile.id === user.id,
          }))

          if (!learners.find((l) => l.highlight)) {
            const { data: userProfile } = await supabase
              .from("profiles")
              .select("id, first_name, last_name, total_xp")
              .eq("id", user.id)
              .single()

            if (userProfile) {
              learners.push({
                rank: learners.length + 1,
                name: `${userProfile.first_name} ${userProfile.last_name}`,
                xp: userProfile.total_xp,
                highlight: true,
              })
            }
          }

          setTopLearners(learners)
        }
      } catch (err) {
        console.error("[v0] Error fetching dashboard data:", err)
      }
    }

    fetchData()
  }, [supabase])

  const lessons = Object.values(hindiLessons).map((lesson) => ({
    id: lesson.id,
    title: lesson.title,
    difficulty: lesson.difficulty,
    xpReward: lesson.xpReward,
    completed: false,
  }))

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Hindi Learning</h1>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
            <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-blue-500">
              <div className="text-sm text-slate-600 font-semibold">XP Points</div>
              <div className="text-3xl font-bold text-blue-600">{userStats.xp}</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-orange-500">
              <div className="text-sm text-slate-600 font-semibold">Streak</div>
              <div className="text-3xl font-bold text-orange-600">{userStats.streak}d</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-pink-500">
              <div className="text-sm text-slate-600 font-semibold">Lessons</div>
              <div className="text-3xl font-bold text-pink-600">{userStats.lessonsCompleted}</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md border-l-4 border-purple-500">
              <div className="text-sm text-slate-600 font-semibold">Progress</div>
              <div className="text-3xl font-bold text-purple-600">
                {Math.round((userStats.lessonsCompleted / userStats.totalLessons) * 100)}%
              </div>
            </div>
          </div>

          <ProgressBar current={userStats.lessonsCompleted} total={userStats.totalLessons} language="Hindi" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-blue-400 to-blue-500 rounded-2xl p-8 text-white mb-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Continue Your Journey</h2>
              <p className="mb-6">Next: {lessons[userStats.lessonsCompleted]?.title || "Devanagari Script"}</p>
              <Link href={`/learn/hindi/lesson/${userStats.lessonsCompleted + 1}`}>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-6 rounded-full">
                  Continue Lesson
                </Button>
              </Link>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Available Lessons</h3>
              {lessons.map((lesson) => (
                <Link key={lesson.id} href={`/learn/hindi/lesson/${lesson.id}`}>
                  <div className="p-6 rounded-xl border-2 bg-white border-slate-200 cursor-pointer hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="text-lg font-bold text-slate-900">{lesson.title}</h4>
                        <p className="text-sm text-slate-600">{lesson.difficulty}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <div className="text-yellow-500 font-bold">+{lesson.xpReward} XP</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <LeaderboardCard learners={topLearners} />
        </div>
      </main>
    </div>
  )
}
