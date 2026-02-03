interface ProgressBarProps {
  current: number
  total: number
  language: string
}

export default function ProgressBar({ current, total, language }: ProgressBarProps) {
  const percentage = (current / total) * 100

  return (
    <div className="bg-white rounded-xl p-6 shadow-md">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-slate-900">{language} Learning Progress</h3>
        <span className="text-sm font-semibold text-slate-600">
          {current}/{total}
        </span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-3 overflow-hidden">
        <div
          className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
