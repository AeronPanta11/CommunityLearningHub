import { useNavigate, NavLink } from "react-router-dom"

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <nav className="fixed top-0 inset-x-0 z-50 w-screen bg-[#F6FBF8] border-b border-gray-200">
      <div className="flex items-center justify-between px-8 h-16">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal-400 to-green-400 flex items-center justify-center cursor-pointer" onClick={() => navigate("/")}>
            <span className="text-white font-bold text-lg">CL</span>
          </div>
          <span className="text-xl font-semibold text-gray-900 cursor-pointer" onClick={() => navigate("/")}>
            CommunityLearningHub
          </span>
        </div>

        {/* Links */}
        {/* <div className="flex gap-6 font-medium text-slate-500">
          <NavLink to="/explore" className={({ isActive }) =>
            isActive ? "text-emerald-500" : "hover:text-emerald-600"
          }>
            Explore
          </NavLink>

          <NavLink to="/learning" className={({ isActive }) =>
            isActive ? "text-emerald-500" : "hover:text-emerald-600"
          }>
            My Learning
          </NavLink>

          <NavLink to="/teach" className={({ isActive }) =>
            isActive ? "text-emerald-500" : "hover:text-emerald-600"
          }>
            Teach
          </NavLink>

          <NavLink to="/communitygroups" className={({ isActive }) =>
            isActive ? "text-emerald-500" : "hover:text-emerald-600"
          }>
            Community
          </NavLink>
        </div> */}

        {/* Actions */}
        <div className="flex items-center gap-5">
          <button
            className="text-[15px] font-medium text-gray-700 hover:text-gray-900 cursor-pointer"
            onClick={() => navigate("/auth/signin")}
          >
            Sign In
          </button>

          <button
            className="px-5 py-2 rounded-full bg-gradient-to-r from-emerald-400 to-green-500 text-white text-[15px] cursor-pointer hover:opacity-80 font-semibold shadow-sm"
            onClick={() => navigate("/auth/signup")}
          >
            Get Started
          </button>
        </div>

      </div>
    </nav>
  )
}
