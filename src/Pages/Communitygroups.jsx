import { useNavigate } from "react-router-dom";
import { Search, Plus } from "lucide-react";
import Achievement from "../Components/Achievement.jsx";

/* ---------- SIDEBAR ITEM ---------- */
function SidebarItem({ label, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`px-3 py-2 rounded-lg cursor-pointer text-sm transition
        ${active ? "bg-emerald-50 text-emerald-600 font-medium" : "text-slate-700 hover:bg-slate-100"}`}
    >
      {label}
    </div>
  );
}

/* ---------- GROUP CARD ---------- */
function GroupCard({ title, category, members }) {
  return (
    <div className="bg-white border border-slate-200 rounded-xl p-5 h-[220px] flex flex-col justify-between">
      <div>
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-semibold text-slate-900">{title}</h3>
            <p className="text-xs text-slate-500">{category}</p>
          </div>
          <span className="text-xs bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full">
            Active
          </span>
        </div>
        <p className="text-xs text-slate-500 mt-2">• {members} members</p>
      </div>

      <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg text-sm">
        Join Group
      </button>
    </div>
  );
}

/* ---------- MAIN PAGE ---------- */
export default function CommunityGroups() {
  const navigate = useNavigate(); // <-- IMPORTANT
  const menuItems = [
    { label: "Dashboard", path: "/home" },
    { label: "Community Groups", path: "/communitygroups" },
    { label: "Messages", path: "/message" },
    { label: "Events", path: "/challenges" },
    { label: "Skills", path: "/skillwallet" },
  ];

  return (
    <div className="min-h-screen w-full flex bg-slate-50 overflow-x-hidden">
      {/* Sidebar */}
      <aside className="w-64 fixed inset-y-0 left-0 bg-white border-r border-slate-200 p-4">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center text-white font-bold">
            S
          </div>
          <div>
            <p className="font-semibold text-slate-900">CommunityLearningHub</p>
            <p className="text-xs text-slate-500">Community Platform</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-8 space-y-2 text-sm">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.label}
              label={item.label}
              active={item.path === window.location.pathname}
              onClick={() => navigate(item.path)}
            />
          ))}
        </nav>

        {/* My Groups */}
        <div className="mt-8">
          <p className="text-xs text-slate-400 mb-2">My Groups</p>
          <SidebarItem label="Web Dev Masters" onClick={() => navigate("/community-groups/web-dev")} />
          <SidebarItem label="Design Thinking" onClick={() => navigate("/community-groups/design")} />
          <SidebarItem label="Marketing Pro" onClick={() => navigate("/community-groups/marketing")} />
        </div>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-6 overflow-x-hidden">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold text-slate-900">
              Community Groups
            </h1>
            <p className="text-sm text-slate-500">
              Discover and join skill-based communities
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                placeholder="Search groups..."
                className="pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <button className="flex items-center gap-1 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm">
              <Plus size={16} /> Create Group
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6">
          {["All Groups", "My Groups", "Recommended", "Trending"].map((tab) => (
            <button
              key={tab}
              className="px-4 py-1.5 text-sm rounded-full bg-white border border-slate-200 hover:bg-slate-100"
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Group Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <GroupCard
            title="Web Development Masters"
            category="Programming & Tech"
            members="2,847"
          />
          <GroupCard
            title="UI/UX Design Hub"
            category="Design & Creative"
            members="1,923"
          />
          <GroupCard
            title="Digital Marketing Pro"
            category="Marketing & Growth"
            members="3,412"
          />
        </div>
      </main>
    </div>
  );
}



