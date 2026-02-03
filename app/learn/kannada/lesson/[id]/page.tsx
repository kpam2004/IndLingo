"use client"

import { useRouter } from "next/navigation"
import Navbar from "@/components/navbar"
import LessonQuiz from "@/components/lesson-quiz"
import { getLesson } from "@/lib/lesson-data"
import { Button } from "@/components/ui/button"
import { createClient } from "@/lib/client"
import { useTextToSpeech } from "@/app/useTextToSpeech"
import { kannadaLessons } from "@/lib/lesson-data"
import { useState, useEffect } from "react"


export default function KannadaLessonPage({ params }: { params: Promise<{ id: string }> }) {
  const [mounted, setMounted] = useState(false)
  const [lesson, setLesson] = useState<any>(null)
  const [lessonId, setLessonId] = useState(0)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    let isMounted = true

    params.then(({ id }) => {
      if (!isMounted) return
      const id_num = Number.parseInt(id)
      const foundLesson = getLesson("kannada", id_num)
      if (foundLesson) {
        setLesson(foundLesson)
        setLessonId(id_num)
      } else {
        setNotFound(true)
      }
      setMounted(true)
    })

    return () => {
      isMounted = false
    }
  }, [params])

  if (notFound) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        <Navbar />
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Lesson not found</h1>
          <Button onClick={() => window.history.back()} className="mt-6">
            Go Back
          </Button>
        </div>
      </div>
    )
  }

  if (!lesson) {
    return <div>Loading lesson...</div>
  }

  return <KannadaLessonContent lesson={lesson} lessonId={lessonId} />
}

// Client component to handle state and interactivity
function KannadaLessonContent({ lesson, lessonId }: { lesson: any; lessonId: number }) {
  const router = useRouter()
  const [completed, setCompleted] = useState(false)
  const [earnedXp, setEarnedXp] = useState(0)
  const [isSaving, setIsSaving] = useState(false)
  const [learningCompleted, setLearningCompleted] = useState(false)
  const { speak, stop, speaking } = useTextToSpeech("hi-IN")
  const supabase = createClient()

  const saveXpToDatabase = async (xpEarned: number) => {
    setIsSaving(true)
    try {
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser()
      if (userError || !user) {
        console.error("[v0] User not authenticated")
        return
      }

      const { data: existing, error: fetchError } = await supabase
        .from("user_progress")
        .select("*")
        .eq("user_id", user.id)
        .eq("language", "Kannada")
        .single()

      if (fetchError && fetchError.code !== "PGRST116") {
        console.error("[v0] Error fetching progress:", fetchError)
        return
      }

      if (existing) {
        const { error: updateError } = await supabase
          .from("user_progress")
          .update({
            xp: existing.xp + xpEarned,
            lessons_completed: existing.lessons_completed + 1,
            updated_at: new Date().toISOString(),
          })
          .eq("user_id", user.id)
          .eq("language", "Kannada")

        if (updateError) {
          console.error("[v0] Error updating progress:", updateError)
        }
      } else {
        const { error: insertError } = await supabase.from("user_progress").insert({
          user_id: user.id,
          language: "Kannada",
          xp: xpEarned,
          lessons_completed: 1,
          streak: 1,
        })

        if (insertError) {
          console.error("[v0] Error creating progress:", insertError)
        }
      }

      const { data: profile } = await supabase.from("profiles").select("total_xp").eq("id", user.id).single()

      const { error: profileError } = await supabase
        .from("profiles")
        .update({
          total_xp: (profile?.total_xp || 0) + xpEarned,
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id)

      if (profileError) {
        console.error("[v0] Error updating profile:", profileError)
      }
    } catch (err) {
      console.error("[v0] Error saving XP:", err)
    } finally {
      setIsSaving(false)
    }
  }

  const handleComplete = async (xpEarned: number) => {
    setEarnedXp(xpEarned);
    setCompleted(true);
    if (xpEarned > 0) {
      await saveXpToDatabase(xpEarned);
    }
    // If xpEarned === 0, do not update progress, just show failure page
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!completed ? (
          <>
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900">{lesson.title}</h1>
              <Button
  onClick={() => {
    const fullText =
    (Array.isArray(lesson.content)
      ? lesson.content.join(" ")
      : lesson.content || "") +
    " " +
    (Array.isArray(lesson.keyPoints)
      ? lesson.keyPoints.join(" ")
      : lesson.keyPoints || "") ||
    lesson.title
  
    speaking ? stop() : speak(fullText)
  }}
  className="ml-4"
>
  {speaking ? "🔇 Stop Voice" : "🔊 Play Voice"}
</Button>

              <p className="text-slate-600 mt-2">
                {lesson.difficulty} - {lesson.xpReward} XP available
              </p>
            </div>

            {!learningCompleted ? (
              <div className="max-w-2xl mx-auto">
                <div className="bg-gradient-to-br from-green-100 to-green-50 rounded-2xl p-8 border-2 border-green-300 mb-8">
                  <h2 className="text-2xl font-bold text-green-900 mb-4">Lesson Content</h2>
                  <div className="space-y-4 text-green-900">
                    <p className="text-lg leading-relaxed">{lesson.content || lesson.description}</p>
                    <div className="bg-white rounded-lg p-4 border border-green-200">
                      <h3 className="font-bold text-green-900 mb-2">Key Points:</h3>
                      <ul className="list-disc list-inside space-y-2 text-green-800">
                        {lesson.keyPoints?.map((point: string, idx: number) => <li key={idx}>{point}</li>) || (
                          <>
                            <li>Master the fundamentals of {lesson.title}</li>
                            <li>Practice pronunciation and writing</li>
                            <li>Learn common phrases and vocabulary</li>
                          </>
                        )}
                      </ul>
                    </div>
                  </div>
                  <Button
                    onClick={() => setLearningCompleted(true)}
                    className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-6"
                  >
                    I've Completed the Lesson - Take the Quiz
                  </Button>
                </div>
              </div>
            ) : (
              <LessonQuiz
                questions={lesson.questions}
                languageColor="bg-green-500"
                onComplete={handleComplete}
                hasCompletedLearning={true}
                lessonXpReward={lesson.xpReward} // pass lesson.xpReward to quiz
              />
            )}
          </>
        ) : (
          earnedXp === 0 ? (
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-red-500 rounded-3xl p-12 text-white shadow-2xl mb-8">
                <div className="text-7xl mb-4">😢</div>
                <h2 className="text-4xl font-bold mb-4">Lesson Failed</h2>
                <p className="text-2xl mb-6">You didn't answer any questions correctly.</p>
                <p className="text-red-100 mb-6">Try again to improve your score!</p>
                <div className="flex flex-col gap-3 mt-8">
                  <Button
                    onClick={() => router.push("/learn/kannada")}
                    className="bg-white text-red-600 hover:bg-gray-100 font-bold py-6"
                    disabled={isSaving}
                  >
                    Back to Dashboard
                  </Button>
                  <Button
                    onClick={() => window.location.reload()}
                    className="bg-white text-red-600 hover:bg-gray-100 font-bold py-6"
                    disabled={isSaving}
                  >
                    Repeat Lesson
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-3xl p-12 text-white shadow-2xl mb-8">
                <div className="text-7xl mb-4">🎉</div>
                <h2 className="text-4xl font-bold mb-4">Lesson Complete!</h2>
                <p className="text-2xl mb-6">{earnedXp} XP Earned</p>
                <p className="text-green-100 mb-6">Great job learning {lesson.title}!</p>
                {isSaving && <p className="text-green-100 text-sm">Saving your progress...</p>}

                <div className="flex flex-col gap-3 mt-8">
                  <Button
                    onClick={() => router.push("/learn/kannada")}
                    className="bg-white text-green-600 hover:bg-gray-100 font-bold py-6"
                    disabled={isSaving}
                  >
                    Back to Dashboard
                  </Button>
                  <Button
                    onClick={() => router.push(`/learn/kannada/lesson/${lessonId + 1}`)}
                    className="bg-white text-green-600 hover:bg-gray-100 font-bold py-6"
                    disabled={isSaving}
                  >
                    Next Lesson
                  </Button>
                </div>
              </div>
            </div>
          )
        )}
      </main>
    </div>
  )
}
