const MYMEMORY_API = "https://api.mymemory.translated.net/get"

interface TranslationResponse {
  responseStatus: number
  responseDetails?: string
  matches?: Array<{
    translation: string
    match: number
  }>
}

export async function translateText(text: string, sourceLang: string, targetLang: string): Promise<string> {
  if (!text.trim()) return ""

  try {
    const langMap: Record<string, string> = {
      English: "en",
      Kannada: "kn",
      Hindi: "hi",
    }

    const source = langMap[sourceLang] || "en"
    const target = langMap[targetLang] || "kn"

    if (source === target) return text

    const params = new URLSearchParams({
      q: text,
      langpair: `${source}|${target}`,
    })

    const response = await fetch(`${MYMEMORY_API}?${params}`, {
      method: "GET",
      headers: {
        "User-Agent": "Indlingo-App/1.0 (Language Learning App)",
      },
    })

    if (!response.ok) {
      throw new Error("Translation service unavailable")
    }

    const data: TranslationResponse = await response.json()

    if (data.responseStatus !== 200) {
      throw new Error(data.responseDetails || "Translation failed")
    }

    if (data.matches && data.matches.length > 0) {
      return data.matches[0].translation
    }

    return text
  } catch (error) {
    console.error("[v0] Translation error:", error)
    return text
  }
}

export async function translateBatch(texts: string[], sourceLang: string, targetLang: string): Promise<string[]> {
  const translations = await Promise.all(texts.map((text) => translateText(text, sourceLang, targetLang)))
  return translations
}
