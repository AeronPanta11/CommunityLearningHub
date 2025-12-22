import { useNavigate } from "react-router-dom";
import { Trophy, Star, BookOpen, Crown, Heart, Globe, Zap, Medal, Clock, MessageCircle, Brain, GraduationCap } from "lucide-react";

const badges = [
  {
    id: "first-steps",
    title: "First Steps",
    desc: "Complete first session",
    status: "earned",
    icon: GraduationCap,
    route: "/sessions",
  },
  {
    id: "rising-star",
    title: "Rising Star",
    desc: "Get 10 five-stars",
    status: "earned",
    icon: Star,
    route: "/reviews",
  },
  {
    id: "knowledge-seeker",
    title: "Knowledge Seeker",
    desc: "Attend 20 sessions",
    status: "earned",
    icon: BookOpen,
    route: "/learning",
  },
  {
    id: "master-teacher",
    title: "Master Teacher",
    desc: "Teach 50 sessions",
    status: "locked",
    icon: Crown,
    route: "/teach",
  },
  {
    id: "community-hero",
    title: "Community Hero",
    desc: "Help 100 members",
    status: "locked",
    icon: Heart,
    route: "/community",
  },
  {
    id: "global-connector",
    title: "Global Connector",
    desc: "Connect globally",
    status: "locked",
    icon: Globe,
    route: "/global",
  },
  {
    id: "skill-sharer",
    title: "Skill Sharer",
    desc: "Share 3 skills",
    status: "earned",
    icon: Medal,
    route: "/skills",
  },
  {
    id: "speed-learner",
    title: "Speed Learner",
    desc: "5 skills in 30 days",
    status: "locked",
    icon: Zap,
    route: "/progress",
  },
  {
    id: "early-bird",
    title: "Early Bird",
    desc: "First month member",
    status: "earned",
    icon: Clock,
    route: "/profile",
  },
  {
    id: "consistency-king",
    title: "Consistency King",
    desc: "30-day streak",
    status: "locked",
    icon: Trophy,
    route: "/streak",
  },
  {
    id: "feedback-champion",
    title: "Feedback Champion",
    desc: "Give 50 reviews",
    status: "locked",
    icon: MessageCircle,
    route: "/feedback",
  },
  {
    id: "polymath",
    title: "Polymath",
    desc: "Master 10 skills",
    status: "locked",
    icon: Brain,
    route: "/skills",
  },
];

export default function AchievementSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-slate-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-slate-900">Achievement Badges</h2>
          <div className="flex gap-2">
            <span className="px-3 py-1 text-sm rounded-full bg-emerald-500 text-white">All</span>
            <span className="px-3 py-1 text-sm rounded-full bg-white border border-slate-200 text-slate-500">Earned</span>
            <span className="px-3 py-1 text-sm rounded-full bg-white border border-slate-200 text-slate-500">Locked</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {badges.map((badge) => {
            const Icon = badge.icon;
            const earned = badge.status === "earned";

            return (
              <button
                key={badge.id}
                onClick={() => navigate(badge.route)}
                className={`text-left rounded-2xl border p-5 transition-all duration-200 shadow-sm
                  ${earned
                    ? "bg-white border-orange-400 hover:shadow-md"
                    : "bg-white border-slate-200 opacity-70 hover:opacity-100"}`}
              >
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full mb-4
                    ${earned ? "bg-orange-400" : "bg-slate-200"}`}
                >
                  <Icon className={`w-6 h-6 ${earned ? "text-white" : "text-slate-400"}`} />
                </div>

                <h3 className="font-semibold text-slate-900">{badge.title}</h3>
                <p className="text-sm text-slate-500 mb-3">{badge.desc}</p>

                {earned ? (
                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-emerald-400 text-white">
                    Earned
                  </span>
                ) : (
                  <span className="inline-block text-xs px-3 py-1 rounded-full bg-slate-200 text-slate-500">
                    Locked
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 text-center shadow-sm">
          <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-emerald-100">
            <Trophy className="w-7 h-7 text-emerald-500" />
          </div>
          <h3 className="text-lg font-semibold text-slate-900">More Challenges Coming Soon!</h3>
          <p className="text-slate-500 text-sm mt-2">
            Keep participating in the community to unlock new challenges and earn exclusive badges.
          </p>
          <button className="mt-5 inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white transition">
            Notify Me
          </button>
        </div>
      </div>
    </section>
  );
}
