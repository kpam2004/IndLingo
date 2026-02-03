export interface TranslationPair {
  english: string
  kannada: string
  hindi: string
}

export const commonTranslations: TranslationPair[] = [
  { english: "Hello", kannada: "ನಮಸ್ಕಾರ", hindi: "नमस्ते" },
  { english: "Goodbye", kannada: "ವಿದೆ", hindi: "अलविदा" },
  { english: "Thank you", kannada: "ಧನ್ಯವಾದ", hindi: "धन्यवाद" },
  { english: "Good morning", kannada: "ಶುಭೋದಯ", hindi: "सुप्रभात" },
  { english: "Good night", kannada: "ಶುಭರಾತ್ರಿ", hindi: "शुभ रात्रि" },
  { english: "Water", kannada: "ನೀರು", hindi: "पानी" },
  { english: "Food", kannada: "ಆಹಾರ", hindi: "भोजन" },
  { english: "Rice", kannada: "ಅಕ್ಕಿ", hindi: "चावल" },
  { english: "Milk", kannada: "ಹಾಲು", hindi: "दूध" },
  { english: "Tea", kannada: "ಚಾಯ", hindi: "चाय" },
  { english: "One", kannada: "ಒಂದು", hindi: "एक" },
  { english: "Two", kannada: "ಎರಡು", hindi: "दो" },
  { english: "Three", kannada: "ಮೂರು", hindi: "तीन" },
  { english: "Four", kannada: "ನಾಲ್ಕು", hindi: "चार" },
  { english: "Five", kannada: "ಐದು", hindi: "पाँच" },
  { english: "How are you?", kannada: "ನೀವು ಹೇಗಿದ್ದೀರಾ?", hindi: "आप कैसे हो?" },
  { english: "I am fine", kannada: "ನಾನು ಚೆನ್ನಾಗಿದೆ", hindi: "मैं ठीक हूँ" },
  { english: "What is your name?", kannada: "ನಿಮ್ಮ ಹೆಸರೇ ಏನು?", hindi: "आपका नाम क्या है?" },
  { english: "My name is", kannada: "ನನ್ನ ಹೆಸರು", hindi: "मेरा नाम" },
  { english: "I love you", kannada: "ನಾನು ನಿನ್ನನ್ನು ಪ್ರೀತಿಸುತ್ತೇನೆ", hindi: "मैं आपसे प्यार करता हूँ" },
]

export function findTranslation(text: string): TranslationPair | null {
  const normalized = text.toLowerCase().trim()
  return (
    commonTranslations.find(
      (pair) => pair.english.toLowerCase() === normalized || pair.kannada === text || pair.hindi === text,
    ) || null
  )
}

export function translateBetweenLanguages(text: string, fromLang: string, toLang: string): string {
  const translation = findTranslation(text)
  if (!translation) return "Translation not found"

  if (fromLang === "english" && toLang === "kannada") return translation.kannada
  if (fromLang === "english" && toLang === "hindi") return translation.hindi
  if (fromLang === "kannada" && toLang === "english") return translation.english
  if (fromLang === "kannada" && toLang === "hindi") return translation.hindi
  if (fromLang === "hindi" && toLang === "english") return translation.english
  if (fromLang === "hindi" && toLang === "kannada") return translation.kannada

  return text
}
