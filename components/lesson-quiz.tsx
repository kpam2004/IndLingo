"use client"

import { useState } from "react"
import type { QuizQuestion } from "@/lib/lesson-data"
import { Button } from "@/components/ui/button"

interface LessonQuizProps {
  questions: QuizQuestion[]
  languageColor: string
  onComplete: (xpEarned: number) => void
  hasCompletedLearning: boolean
  lessonXpReward: number
}

export default function LessonQuiz({
  questions,
  languageColor,
  onComplete,
  hasCompletedLearning,
  lessonXpReward,
}: LessonQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<string | number | null>(null)
  const [isCorrect, setIsCorrect] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false);

  const question = questions[currentQuestion]
  const totalXp = lessonXpReward

  if (!hasCompletedLearning) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-blue-50 border-2 border-blue-300 rounded-2xl p-8 text-center">
          <div className="text-5xl mb-4">📚</div>
          <h2 className="text-2xl font-bold text-blue-900 mb-3">Complete the Lesson First</h2>
          <p className="text-blue-800">
            You need to review the lesson content and understand the material before taking the quiz.
          </p>
        </div>
      </div>
    )
  }

  const handleAnswer = (answer: string | number) => {
    if (answered) return

    setSelectedAnswer(answer)
    const correct = answer === question.correctAnswer
    setIsCorrect(correct)
    setAnswered(true)

    if (correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setAnswered(false)
      setSelectedAnswer(null)
      setIsCorrect(false)
    } else {
      setQuizComplete(true);
      onComplete(score > 0 ? totalXp : 0);
    }
  }

  const isLastQuestion = currentQuestion === questions.length - 1

  if (quizComplete && score === 0) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="bg-red-500 rounded-3xl p-12 text-white shadow-2xl mb-8 text-center">
          <div className="text-7xl mb-4">😢</div>
          <h2 className="text-4xl font-bold mb-4">Lesson Failed</h2>
          <p className="text-2xl mb-6">You didn't answer any questions correctly.</p>
          <p className="text-red-100 mb-6">Try again to improve your score!</p>
          <div className="flex flex-col gap-3 mt-8">
            <Button
              onClick={() => window.location.href = '/learn/hindi'}
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-6"
            >
              Back to Dashboard
            </Button>
            <Button
              onClick={() => {
                setCurrentQuestion(0);
                setScore(0);
                setAnswered(false);
                setSelectedAnswer(null);
                setIsCorrect(false);
                setQuizComplete(false);
              }}
              className="bg-white text-red-600 hover:bg-gray-100 font-bold py-6"
            >
              Repeat Lesson
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="text-sm font-semibold text-slate-600">
            Question {currentQuestion + 1}/{questions.length}
          </span>
          <span className="text-sm font-semibold text-slate-600">
            Score: {score}/{questions.length}
          </span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className={`${languageColor} h-2 rounded-full transition-all duration-300`}
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>
      <div className="bg-white rounded-2xl p-8 shadow-lg mb-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-6">{question.question}</h2>

        {question.type === "multiple-choice" && (
          <div className="space-y-3">
            {question.options?.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={answered}
                className={`w-full p-4 rounded-xl border-2 font-semibold transition-all ${
                  answered
                    ? selectedAnswer === index
                      ? isCorrect
                        ? "border-green-500 bg-green-50 text-green-700"
                        : "border-red-500 bg-red-50 text-red-700"
                      : question.correctAnswer === index
                        ? "border-green-500 bg-green-50 text-green-700"
                        : "border-slate-200 bg-slate-50 text-slate-500"
                    : "border-slate-200 hover:border-slate-400 hover:bg-slate-50 text-slate-900 cursor-pointer"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        )}

        {question.type === "fill-blank" && (
          <div>
            <input
              type="text"
              placeholder="Type your answer..."
              value={typeof selectedAnswer === "string" ? selectedAnswer : ""}
              onChange={(e) => {
                if (!answered) setSelectedAnswer(e.target.value)
              }}
              disabled={answered}
              className="w-full p-4 border-2 rounded-xl font-semibold text-center text-lg mb-4"
              onKeyPress={(e) => {
                if (e.key === "Enter" && !answered && selectedAnswer) {
                  handleAnswer(selectedAnswer)
                }
              }}
            />
            {!answered && (
              <Button onClick={() => handleAnswer(selectedAnswer!)} disabled={!selectedAnswer} className="w-full">
                Check Answer
              </Button>
            )}
          </div>
        )}

        {answered && (
          <div className={`mt-6 p-4 rounded-xl ${isCorrect ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"}`}>
            <div className="font-bold mb-2">{isCorrect ? "Correct!" : "Incorrect"}</div>
            <p className="text-sm">{question.explanation}</p>
          </div>
        )}
      </div>

      {answered && (
        <div className="flex gap-4 justify-between">
          <Button
            onClick={() => {
              setCurrentQuestion(0)
              setScore(0)
              setAnswered(false)
              setSelectedAnswer(null)
            }}
            variant="outline"
            className="px-6 py-3"
          >
            Retry Lesson
          </Button>
          <Button onClick={handleNext} className="px-8 py-3 flex-1">
            {isLastQuestion ? "Complete Lesson" : "Next Question"}
          </Button>
        </div>
      )}
    </div>
  );
}
