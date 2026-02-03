"use client"

import { useState, useEffect, useCallback } from "react"

export function useTextToSpeech(language: string = "hi-IN") {
  const [speaking, setSpeaking] = useState(false)
  const [synth, setSynth] = useState<SpeechSynthesis | null>(null)
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      const synthInstance = window.speechSynthesis
      setSynth(synthInstance)

      const loadVoices = () => {
        const availableVoices = synthInstance.getVoices()
        const femaleVoice =
          availableVoices.find(v => v.lang === language && v.name.toLowerCase().includes("male")) ||
          availableVoices.find(v => v.lang === language && v.name.toLowerCase().includes("woman")) ||
          availableVoices.find(v => v.lang === language) ||
          availableVoices.find(v => v.lang.startsWith(language.split("-")[0]) && v.name.toLowerCase().includes("female")) ||
          availableVoices.find(v => v.lang.startsWith(language.split("-")[0])) ||
          availableVoices[0]
        setVoice(femaleVoice || null)
      }

      loadVoices()
      synthInstance.onvoiceschanged = loadVoices
    }
  }, [language])

  const speak = useCallback(
    (text: string) => {
      if (!synth || !voice) return
      if (synth.speaking) synth.cancel()

      const utterance = new SpeechSynthesisUtterance(text)
      utterance.voice = voice
      utterance.lang = language
      utterance.rate = 1.0
      utterance.pitch = 0.01

      synth.speak(utterance)
      setSpeaking(true)

      utterance.onend = () => setSpeaking(false)
    },
    [synth, voice, language]
  )

  const stop = useCallback(() => {
    if (synth?.speaking) synth.cancel()
    setSpeaking(false)
  }, [synth])

  return { speak, stop, speaking }
}
