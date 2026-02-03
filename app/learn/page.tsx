"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"

export default function LearnPage() {
  const languages = [
    {
      name: "Kannada",
      color: "bg-green-500",
      description: "Learn the beautiful Kannada script and language",
      lessons: 12,
      link: "/learn/kannada",
    },
    {
      name: "Hindi",
      color: "bg-blue-500",
      description: "Master Hindi conversations and grammar",
      lessons: 15,
      link: "/learn/hindi",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Choose Your Language</h1>
        <p className="text-lg text-slate-600 mb-12">Select a language to start your learning journey</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {languages.map((lang) => (
            <div
              key={lang.name}
              className={`${lang.color} rounded-3xl p-8 sm:p-12 text-white shadow-xl transform hover:scale-105 transition-transform`}
            >
              <h2 className="text-4xl font-bold mb-2">{lang.name}</h2>
              <p className="text-white/90 mb-4 text-lg">{lang.description}</p>
              <p className="text-white/80 mb-8">{lang.lessons} lessons available</p>

              <Link href={lang.link}>
                <Button className="bg-white text-slate-900 hover:bg-gray-100 font-bold px-8 py-6 rounded-full">
                  Start Learning
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
