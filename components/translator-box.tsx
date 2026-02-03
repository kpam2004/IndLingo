"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRightLeft } from "lucide-react"
import { translateText } from "@/lib/translate"

export default function TranslatorBox() {
  const [fromLang, setFromLang] = useState("English")
  const [toLang, setToLang] = useState("Kannada")
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const languages = [
    { code: "English", name: "English" },
    { code: "Kannada", name: "Kannada" },
    { code: "Hindi", name: "Hindi" },
  ]

  const swapLanguages = () => {
    const temp = fromLang
    setFromLang(toLang)
    setToLang(temp)
    const tempText = inputText
    setInputText(outputText)
    setOutputText(tempText)
    setError(null)
  }

  const handleTranslate = async () => {
    if (!inputText.trim()) return

    setIsLoading(true)
    setError(null)

    try {
      const result = await translateText(inputText, fromLang, toLang)
      setOutputText(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Translation failed")
      setOutputText("")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="text-sm font-semibold text-slate-700 mb-2 block">From:</label>
          <select
            value={fromLang}
            onChange={(e) => {
              setFromLang(e.target.value)
              setOutputText("")
              setError(null)
            }}
            className="w-full p-3 border-2 border-slate-200 rounded-xl font-semibold"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-end justify-center md:col-span-1">
          <button
            onClick={swapLanguages}
            className="p-3 bg-gradient-to-br from-yellow-400 to-yellow-500 hover:shadow-lg rounded-xl transition-shadow"
          >
            <ArrowRightLeft className="text-white" size={24} />
          </button>
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-700 mb-2 block">To:</label>
          <select
            value={toLang}
            onChange={(e) => {
              setToLang(e.target.value)
              setOutputText("")
              setError(null)
            }}
            className="w-full p-3 border-2 border-slate-200 rounded-xl font-semibold"
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <textarea
            value={inputText}
            onChange={(e) => {
              setInputText(e.target.value)
              setOutputText("")
              setError(null)
            }}
            placeholder="Enter text to translate..."
            className="w-full h-40 p-4 border-2 border-slate-200 rounded-xl resize-none focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div>
          <textarea
            value={outputText}
            readOnly
            placeholder="Translation will appear here..."
            className="w-full h-40 p-4 border-2 border-slate-200 rounded-xl resize-none bg-slate-50"
          />
        </div>
      </div>
      {error && <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">{error}</div>}
      <Button
        onClick={handleTranslate}
        disabled={!inputText.trim() || isLoading}
        className="w-full py-6 text-lg font-bold bg-gradient-to-r from-green-500 to-blue-500 hover:shadow-lg"
      >
        {isLoading ? "Translating..." : "Translate"}
      </Button>
    </div>
  )
}
