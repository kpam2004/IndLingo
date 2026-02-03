"use client";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import LeaderboardCard from '@/components/leaderboard-card'

async function getLeaderboard() {
  const res = await fetch('/api/leaderboard')
  return res.json()
}

import { useEffect, useState } from "react";

export default function HomePage() {
  const [learners, setLearners] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getLeaderboard();
      console.log('Leaderboard data:', data);
      setLearners(data);
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-12 sm:pt-20 pb-16 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 mb-6">
            Learn <span className="text-green-500">Kannada</span> & <span className="text-blue-500">Hindi</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Master Indian languages the fun way with interactive lessons, gamification, and real-world translations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/learn/kannada">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full">
                Start Kannada
              </Button>
            </Link>
            <Link href="/learn/hindi">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-6 text-lg rounded-full">
                Start Hindi
              </Button>
            </Link>
          </div>
        </div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200">
            <div className="text-4xl mb-4">🎮</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Gamified Learning</h3>
            <p className="text-slate-600">Earn XP, build streaks, and compete on the leaderboard as you learn.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
            <div className="text-4xl mb-4">📚</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Interactive Lessons</h3>
            <p className="text-slate-600">Multiple-choice quizzes, fill-in-the-blank, and matching exercises.</p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200">
            <div className="text-4xl mb-4">🔄</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Live Translator</h3>
            <p className="text-slate-600">Translate between English, Kannada, and Hindi instantly.</p>
          </div>
        </div>
        <LeaderboardCard learners={learners} />
      </main>
    </div>
  )
}
