interface Learner {
  rank: number
  name: string
  xp: number
  highlight?: boolean
}

interface LeaderboardCardProps {
  learners: Learner[]
}

export default function LeaderboardCard({ learners }: LeaderboardCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg h-fit sticky top-24">
      <h3 className="text-2xl font-bold text-slate-900 mb-6">Top Learners</h3>

      <div className="space-y-3">
        {learners.map((learner) => {
          let rowBg = "bg-slate-50 border border-slate-200";
          let nameText = "text-slate-700";
          if (learner.rank === 1) {
            rowBg = "bg-gradient-to-r from-yellow-400 to-yellow-200 border-2 border-yellow-500";
            nameText = "text-yellow-900";
          } else if (learner.rank === 2) {
            rowBg = "bg-gradient-to-r from-gray-300 to-gray-100 border-2 border-gray-400";
            nameText = "text-gray-800";
          } else if (learner.rank === 3) {
            rowBg = "bg-gradient-to-r from-orange-400 to-orange-200 border-2 border-orange-500";
            nameText = "text-orange-900";
          }

          let rankBg = "bg-slate-300";
          if (learner.rank === 1) rankBg = "bg-yellow-500";
          else if (learner.rank === 2) rankBg = "bg-gray-400";
          else if (learner.rank === 3) rankBg = "bg-orange-600";

          return (
            <div
              key={learner.rank}
              className={`flex items-center justify-between p-4 rounded-lg ${rowBg}`}
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white flex-shrink-0 ${rankBg}`}
                >
                  {learner.rank}
                </div>
                <span className={`font-semibold ${nameText} break-words`}>
                  {learner.name}
                </span>
              </div>
              <span className="font-bold text-slate-900 ml-2 flex-shrink-0">{learner.xp} XP</span>
            </div>
          );
        })}
      </div>
    </div>
  )
}
