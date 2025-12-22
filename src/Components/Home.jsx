import { NavLink, useNavigate } from "react-router-dom";
import { Bell, MessageCircle, Trophy } from "lucide-react";
import Navbar2 from "./Navbar2";
import ProfilePage from "./Profile";

export default function Home() {
  const navigate = useNavigate();

  return (
    <>
    <Navbar2 />
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      {/* <nav className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between">
        <span className="text-xl font-bold text-emerald-500 cursor-pointer" onClick={() => navigate("/")}>Community Learning Hub</span>

        <div className="flex gap-6 font-medium text-slate-500">
          <NavLink
            to="/explore"
            className={({ isActive }) =>
              isActive ? "text-emerald-500" : "hover:text-emerald-600"
            }
          >
            Explore
          </NavLink>
          <NavLink
            to="/learning"
            className={({ isActive }) =>
              isActive ? "text-emerald-500" : "hover:text-emerald-600"
            }
          >
            My Learning
          </NavLink>
          <NavLink
            to="/teach"
            className={({ isActive }) =>
              isActive ? "text-emerald-500" : "hover:text-emerald-600"
            }
          >
            Teach
          </NavLink>
          <NavLink
            to="/communitygroups"
            className={({ isActive }) =>
              isActive ? "text-emerald-500" : "hover:text-emerald-600"
            }
          >
            Community
          </NavLink>
        </div>

        <div className="flex items-center gap-4">
          <MessageCircle className="w-5 h-5 text-slate-400 hover:text-slate-600 cursor-pointer" onClick={()=>navigate("/message")} />
          <Bell className="w-5 h-5 text-slate-400 hover:text-slate-600 cursor-pointer" onClick={()=>navigate("/notifications")} />
          <img src="https://i.pravatar.cc/40" className="w-8 h-8 rounded-full cursor-pointer hover:opacity-80" onClick={() => navigate("/profile")} />
        </div>
      </nav> */}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-emerald-500 to-emerald-400 text-white p-6 rounded-xl mb-6">
          <h2 className="text-2xl font-semibold">Welcome back, Sarah!</h2>
          <p className="text-sm opacity-90">
            Ready to share your knowledge and learn something new today?
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 ">
          <StatCard title="Skills Teaching" value="5" className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition-shadow" />
          <StatCard title="Skills Learning" value="3" className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition-shadow" />
          <StatCard title="Points Earned" value="2,450" className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition-shadow" />
          <StatCard title="Badges Achieved" value="12" className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition-shadow" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
          {/* Recommended Matches */}
          <div className="lg:col-span-2 bg-white rounded-xl p-4 shadow ">
            <h3 className="font-semibold mb-4 text-slate-900">Recommended Matches</h3>
            <Match 
              name="JavaScript Fundamentals"
              level="Beginner"
              action="View Profile"
              link="/profile"
            />
            <Match
              name="Digital Marketing"
              level="Expert"
              action="Request Session"
              link="/message"
            />
            <Match
              name="Photography Basics"
              level="Intermediate"
              action="View Profile"
              link="/profile"
            />
          </div>

          {/* Weekly Challenge */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-500 text-white rounded-xl p-6 flex flex-col items-center justify-center ">
            <Trophy className="w-10 h-10 mb-3" />
            <h3 className="text-lg font-semibold">Weekly Challenge</h3>
            <p className="text-sm text-center my-2">
              Teach 3 new skills this week and earn bonus points!
            </p>
            <button  className="mt-3 bg-white text-orange-500 cursor-pointer px-4 py-2 rounded-lg font-semibold hover:bg-orange-400 hover:text-white transition-colors" onClick={() => navigate("/challenges")  }>
              Join Challenge
            </button>
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="mt-6 bg-white rounded-xl p-4 shadow">
          <h3 className="font-semibold mb-2 text-slate-900">Upcoming Sessions</h3>
          <p className="text-sm text-slate-500">React Components Workshop</p>
          <span className="text-xs text-emerald-400 font-medium">Confirmed</span>
        </div>
      </div>
    </div>
    </>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <p className="text-sm text-slate-500">{title}</p>
      <p className="text-xl font-bold text-slate-900">{value}</p>
    </div>
  );
}

function Match({ name, level, action, link }) {
  const navigate = useNavigate();

  // Dynamic button colors
  const isRequest = action === "Request Session" ;
  const baseColor = isRequest ? "bg-orange-400" : "bg-emerald-500";
  const hoverColor = isRequest ? "hover:bg-orange-500" : "hover:bg-emerald-600";

  return (
    <div className="flex justify-between items-center py-3 border-b border-slate-200 last:border-none hover:bg-slate-200 px-2 rounded-lg z-0">
      <div className="flex items-center gap-3">
        {/* Photo Placeholder */}
        <img
          src="https://i.pravatar.cc/40"
          alt={name}
          className="w-10 h-10 rounded-full"
        />
        <div>
          <p className="font-medium text-slate-900">{name}</p>
          <p className="text-xs text-slate-500">{level} Level</p>
        </div>
      </div>
      <button
        onClick={() => navigate(link)}
        className={`text-sm ${baseColor} ${hoverColor} text-white px-3 py-1 rounded-lg transition-colors cursor-pointer`}
      >
        {action}
      </button>
    </div>
  );
}