import { NavLink } from "react-router-dom"
import { Bell, MessageCircle } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Navbar2() {
  const navigate = useNavigate(); // <-- IMPORTANT
  return (
    <nav className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between border-b border-gray-200 ">
      {/* Logo */}
      <span className="text-xl font-bold text-emerald-500 cursor-pointer" onClick={() => navigate("/")}>CommunityLearning Hub</span>

      {/* Navigation Links */}
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

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <MessageCircle className="w-5 h-5 text-slate-400 hover:text-emerald-600 cursor-pointer" onClick={() => navigate("/message")} />
        <Bell className="w-5 h-5 text-slate-400 hover:text-emerald-600 cursor-pointer" onClick={() => navigate("/notifications")} />
        <img
          src="https://i.pravatar.cc/40"
          alt="Profile"
          className="w-8 h-8 rounded-full hover:opacity-80 cursor-pointer"
          onClick={() => navigate("/profile")}
        />
      </div>
    </nav>
  )
}