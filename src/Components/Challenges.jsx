import ChallengeCard from "../components/ChallengeCard"
import Achievement from "./Achievement.jsx"
import Navbar2 from "./Navbar2.jsx"

export default function Challenges() {
  return (
    <>
    <Navbar2/>
    <div className="min-h-screen bg-slate-50 p-8">

      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">
            Challenges & Achievements
          </h1>
          <p className="text-slate-500 mt-1">
            Complete challenges and unlock badges to level up your skills
          </p>
        </div>

        <div className="flex gap-4">
          <div className="bg-white rounded-xl px-6 py-4 shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500">Total Points</p>
            <p className="text-xl font-bold text-emerald-600">2,450</p>
          </div>
          <div className="bg-white rounded-xl px-6 py-4 shadow-sm border border-slate-200">
            <p className="text-sm text-slate-500">Badges Earned</p>
            <p className="text-xl font-bold text-emerald-600">12/24</p>
          </div>
        </div>
      </div>

      {/* Weekly Challenges */}
      <section className="max-w-7xl mx-auto mb-14">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-slate-900">
            Weekly Challenges
          </h2>
          <span className="text-sm text-slate-400">
            ⏳ 4 days remaining
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ChallengeCard
            icon="🎓"
            title="Teaching Master"
            description="Teach 3 sessions this week and share your expertise"
            progress={2}
            total={3}
            points={150}
            accent="blue"
            action="Continue Challenge"
          />

          <ChallengeCard
            icon="📘"
            title="Eager Learner"
            description="Attend 5 learning sessions from different teachers"
            progress={3}
            total={5}
            points={100}
            accent="emerald"
            action="Continue Challenge"
          />

          <ChallengeCard
            icon="👥"
            title="Community Builder"
            description="Help 10 community members with feedback"
            progress={0}
            total={10}
            points={75}
            accent="orange"
            action="Join Challenge"
            outlined
          />
        </div>
      </section>

      {/* Community Challenges */}
      <section className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-slate-900">
            Community Challenges
          </h2>
          <a className="text-sm text-orange-400 hover:text-orange-500 cursor-pointer">
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ChallengeCard
            icon="🌍"
            title="Global Collaboration"
            description="Connect with members from different countries and exchange skills"
            progress={1}
            total={5}
            points={200}
            participants={1234}
            accent="orange"
            action="Continue Challenge"
          />

          <ChallengeCard
            icon="⭐"
            title="5-Star Mentor"
            description="Receive 5-star ratings from 15 different learners"
            progress={8}
            total={15}
            points={250}
            participants={892}
            accent="emerald"
            action="Continue Challenge"
          />
        </div>
      </section>

    </div>
    <Achievement/>
    </>
  )
}



