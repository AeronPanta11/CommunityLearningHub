import { Wallet, ArrowUpRight, ArrowDownRight, Sparkles } from "lucide-react";

export default function SkillWallet() {
  const stats = [
    {
      label: "Points Earned",
      value: "3,280",
      sub: "+120 this week",
      icon: ArrowUpRight,
      color: "emerald",
    },
    {
      label: "Points Spent",
      value: "830",
      sub: "-50 this week",
      icon: ArrowDownRight,
      color: "orange",
    },
    {
      label: "Current Balance",
      value: "2,450",
      sub: "Last updated today",
      icon: Sparkles,
      color: "blue",
    },
  ];

  const activities = [
    { title: "Taught: JavaScript Basics", date: "Dec 12, 2024", pts: "+150" },
    { title: "Learned: Digital Marketing", date: "Dec 10, 2024", pts: "-120" },
    { title: "Taught: UI/UX Design", date: "Dec 8, 2024", pts: "+200" },
    { title: "Learned: Python Programming", date: "Dec 5, 2024", pts: "-180" },
    { title: "Taught: Data Analysis", date: "Dec 3, 2024", pts: "+170" },
  ];

  const skills = [
    { name: "React Development", desc: "Advanced React concepts", pts: 250, available: true },
    { name: "Financial Planning", desc: "Personal finance management", pts: 180, available: true },
    { name: "Graphic Design", desc: "Adobe Creative Suite", pts: 220, available: true },
    { name: "Video Editing", desc: "Professional video production", pts: 300, available: false },
  ];

  return (
    <section className="bg-slate-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500 flex items-center justify-center">
              <Wallet className="text-white" />
            </div>
            <h2 className="text-xl font-semibold text-slate-900">Skill Wallet</h2>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-500">Available Balance</p>
            <p className="text-2xl font-bold text-indigo-600">2,450 Points</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm text-slate-500">{s.label}</p>
                  <div className={`w-8 h-8 rounded-full bg-${s.color}-100 flex items-center justify-center`}>
                    <Icon className={`w-4 h-4 text-${s.color}-500`} />
                  </div>
                </div>
                <p className="text-2xl font-semibold text-slate-900">{s.value}</p>
                <p className="text-xs text-slate-500 mt-1">{s.sub}</p>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-4">Recent Activity</h3>
            <ul className="space-y-4">
              {activities.map((a, i) => (
                <li key={i} className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-900">{a.title}</p>
                    <p className="text-xs text-slate-500">{a.date}</p>
                  </div>
                  <span className={`text-sm font-semibold ${a.pts.startsWith('+') ? 'text-emerald-500' : 'text-orange-500'}`}>
                    {a.pts} pts
                  </span>
                </li>
              ))}
            </ul>
            <button className="mt-4 text-sm text-indigo-600 hover:underline">View All Transactions</button>
          </div>

          {/* Available Skills */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-semibold text-slate-900 mb-1">Available Skills</h3>
            <p className="text-xs text-slate-500 mb-4">Redeem your points to learn new skills</p>
            <div className="space-y-4">
              {skills.map((s) => (
                <div key={s.name} className="flex items-center justify-between border border-slate-200 rounded-xl p-4">
                  <div>
                    <p className="text-sm font-medium text-slate-900">{s.name}</p>
                    <p className="text-xs text-slate-500">{s.desc}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-indigo-600">{s.pts} pts</p>
                    {s.available ? (
                      <button className="mt-1 px-3 py-1 text-xs rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white">
                        Redeem
                      </button>
                    ) : (
                      <span className="mt-1 inline-block px-3 py-1 text-xs rounded-lg bg-slate-200 text-slate-400">
                        Insufficient
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
