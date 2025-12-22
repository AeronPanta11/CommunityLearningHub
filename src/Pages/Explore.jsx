import { Search, Star } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Navbar2 from "../Components/Navbar2.jsx"

/* ---------- EXPLORE SKILLS PAGE ---------- */
export default function ExploreSkills() {
  return (
    <>
      <Navbar2 />

      <div className="bg-slate-50 min-h-screen px-6 py-10">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Explore Skills
          </h2>

          {/* Search */}
          <div className="relative max-w-lg mb-10">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />
            <input
              placeholder="Search skills, topics, or people..."
              className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
            <Filters />
            <SkillGrid />
          </div>
        </div>
      </div>
    </>
  )
}

/* ---------- FILTERS ---------- */
function Filters() {
  return (
    <aside className="bg-white border border-slate-200 rounded-xl p-6 h-fit">
      <h3 className="font-semibold text-slate-900 mb-4">Filters</h3>

      <div className="space-y-6 text-sm">
        <div>
          <p className="font-medium mb-2">Category</p>
          {["Technology", "Design", "Business", "Language", "Marketing"].map(
            (item) => (
              <label
                key={item}
                className="flex items-center gap-2 text-slate-600"
              >
                <input type="checkbox" />
                {item}
              </label>
            )
          )}
        </div>

        <div>
          <p className="font-medium mb-2">Skill Level</p>
          {["Beginner", "Intermediate", "Expert"].map((level) => (
            <label
              key={level}
              className="flex items-center gap-2 text-slate-600"
            >
              <input type="radio" name="level" />
              {level}
            </label>
          ))}
        </div>

        <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg transition">
          Apply Filters
        </button>
      </div>
    </aside>
  )
}

/* ---------- SKILLS GRID ---------- */
function SkillGrid() {
  const skills = [
    { id: 1, title: "React Development", level: "Intermediate", rating: 4.9, reviews: 23 },
    { id: 2, title: "UX/UI Design", level: "Expert", rating: 5.0, reviews: 47 },
    { id: 3, title: "Digital Marketing", level: "Beginner", rating: 4.2, reviews: 15 },
    { id: 4, title: "Data Science", level: "Expert", rating: 4.6, reviews: 28 },
    { id: 5, title: "Photography", level: "Beginner", rating: 4.9, reviews: 19 },
  ]

  return (
    <div>
      <p className="text-sm text-slate-500 mb-4">
        Showing {skills.length} skills
      </p>

      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  )
}

/* ---------- SKILL CARD ---------- */
function SkillCard({ skill }) {
  const navigate = useNavigate()

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-3 mb-4">
        <img
          src={`https://i.pravatar.cc/100?img=${skill.id}`}
          alt="Instructor"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h4 className="font-semibold text-slate-900">{skill.title}</h4>
          <span className="text-xs text-slate-500">Verified Instructor</span>
        </div>
      </div>

      <span className="inline-block mb-3 text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-600">
        {skill.level}
      </span>

      <div className="flex items-center gap-1 text-orange-400 mb-5">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={14} fill="currentColor" />
        ))}
        <span className="text-slate-500 text-sm ml-2">
          {skill.rating} ({skill.reviews} reviews)
        </span>
      </div>

      <button
        onClick={() => navigate(`/profile/${skill.id}`)}
        className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg transition"
      >
        View Profile
      </button>

      <button
        onClick={() => navigate(`/request/${skill.id}`)}
        className="w-full mt-2 border border-orange-400 text-orange-500 hover:bg-orange-50 py-2 rounded-lg transition"
      >
        Request Session
      </button>
    </div>
  )
}