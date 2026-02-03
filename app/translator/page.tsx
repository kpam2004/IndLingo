import Navbar from "@/components/navbar"
import TranslatorBox from "@/components/translator-box"

export default function TranslatorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-yellow-50 to-white">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">English ↔ Kannada ↔ Hindi</h1>
          <p className="text-xl text-slate-600">Instantly translate between English, Kannada, and Hindi</p>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <TranslatorBox />
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Common Phrases</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-xl p-4 border-l-4 border-green-500">
              <div className="font-bold text-slate-900">Hello</div>
              <div className="text-green-700">ನಮಸ್ಕಾರ (Namaskar)</div>
              <div className="text-green-600 text-sm">नमस्ते (Namaste)</div>
            </div>
            <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-500">
              <div className="font-bold text-slate-900">Thank You</div>
              <div className="text-blue-700">ಧನ್ಯವಾದ (Dhanyavaada)</div>
              <div className="text-blue-600 text-sm">धन्यवाद (Dhanyavaad)</div>
            </div>
            <div className="bg-yellow-50 rounded-xl p-4 border-l-4 border-yellow-500">
              <div className="font-bold text-slate-900">Good Morning</div>
              <div className="text-yellow-700">ಶುಭೋದಯ (Shubhodyaya)</div>
              <div className="text-yellow-600 text-sm">सुप्रभात (Suprabhat)</div>
            </div>
            <div className="bg-pink-50 rounded-xl p-4 border-l-4 border-pink-500">
              <div className="font-bold text-slate-900">How are you?</div>
              <div className="text-pink-700">ನೀವು ಹೇಗಿದ್ದೀರಾ? (Neevu Hegidira?)</div>
              <div className="text-pink-600 text-sm">आप कैसे हो? (Aap Kaise Ho?)</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
