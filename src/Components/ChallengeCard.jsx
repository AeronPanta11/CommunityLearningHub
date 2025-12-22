export default function ChallengeCard({
  icon,
  title,
  description,
  progress,
  total,
  points,
  accent = "emerald",
  action,
  outlined = false,
  participants,
}) {
  const percent = Math.round((progress / total) * 100)

  const accentMap = {
    emerald: "bg-emerald-500",
    orange: "bg-orange-400",
    blue: "bg-blue-400",
  }

  return (
    <div className="relative bg-white border border-slate-200 rounded-xl p-6 space-y-4 shadow-sm">

      {/* Points badge */}
      {points && (
        <span className="absolute top-4 right-4 text-xs font-medium bg-orange-100 text-orange-500 px-2 py-0.5 rounded-full">
          +{points} pts
        </span>
      )}

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center text-white text-lg ${accentMap[accent]}`}
      >
        {icon}
      </div>

      {/* Title & description */}
      <div>
        <h3 className="font-semibold text-slate-900">{title}</h3>
        <p className="text-sm text-slate-500 mt-1">{description}</p>
      </div>

      {/* Participants (community challenges only) */}
      {participants && (
        <p className="text-xs text-slate-400">
          {participants.toLocaleString()} participants
        </p>
      )}

      {/* Progress */}
      <div className="flex justify-between text-sm text-slate-500">
        <span>Progress</span>
        <span className="font-medium text-slate-900">
          {progress}/{total}
        </span>
      </div>

      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${accentMap[accent]}`}
          style={{ width: `${percent}%` }}
        />
      </div>

      {/* Action */}
      <button
        className={`w-full py-2.5 rounded-lg text-sm font-medium transition
          ${
            outlined
              ? "border border-emerald-500 text-emerald-600 hover:bg-emerald-50"
              : "bg-emerald-500 text-white hover:bg-emerald-600"
          }
        `}
      >
        {action}
      </button>
    </div>
  )
}



