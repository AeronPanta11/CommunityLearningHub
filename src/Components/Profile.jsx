import { Edit, MapPin, Calendar, Award, Activity, Plus } from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Header */}
        <div className="relative rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-400 p-6 h-48">
          <div className="absolute right-6 bottom-6 flex gap-2">
            <button className="bg-white/90 text-emerald-600 px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-white transition">
              <Edit size={16} className="inline mr-1" /> Edit Profile
            </button>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-emerald-700 transition">
              Follow
            </button>
            <button className="bg-white/90 text-slate-700 px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-white transition">
              Message
            </button>
          </div>
        </div>

        {/* Profile Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* LEFT COLUMN */}
          <div className="space-y-6">

            {/* Profile Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm -mt-24">
              <div className="flex items-center gap-4">
                {/* Profile Picture */}
                <div className="absolute -mt-10">
                  <img
                    src="https://i.pravatar.cc/150?img=32"
                    alt="profile"
                    className="w-24 h-24 rounded-full border-4 border-white shadow"
                  />
                  <button className="absolute bottom-0 right-0 bg-emerald-600 text-white rounded-full p-1.5 shadow hover:bg-emerald-700">
                    <Edit size={12} />
                  </button>
                </div>

                {/* Name & Meta */}
                <div className="ml-25 z-10">
                  <h2 className="text-xl font-semibold mt-12 ">Sarah Johnson</h2>
                  <p className="text-slate-500 text-sm">@sarahjohnson</p>

                  <div className="mt-1 space-y-1 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} /> San Francisco, CA
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} /> Joined March 2024
                    </div>
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Passionate about web development and teaching others.
                Currently learning data science and machine learning.
              </p>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-2xl p-6 shadow-sm grid grid-cols-3 text-center">
              <Stat value="234" label="Followers" />
              <Stat value="128" label="Following" />
              <Stat value="45" label="Sessions" />
            </div>

            {/* Badges */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Award size={18} className="text-emerald-500" />
                Badges Earned
              </h3>
              <ul className="space-y-3 text-sm">
                <Badge title="Top Teacher" desc="25+ teaching sessions" />
                <Badge title="Rising Star" desc="Top 10% of learners" />
                <Badge title="Connector" desc="100+ community messages" />
                <Badge title="Quick Learner" desc="5 skills in 30 days" />
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="md:col-span-2 space-y-6">

            {/* Skills */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold">Teaching Skills</h3>
                <button className="text-emerald-600 text-sm flex items-center gap-1">
                  <Plus size={14} /> Add Skill
                </button>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <Skill name="React" level="Expert" students="28" />
                <Skill name="TypeScript" level="Advanced" students="15" />
                <Skill name="UI/UX Design" level="Intermediate" students="12" />
              </div>
            </div>

            {/* Activity */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Activity size={18} className="text-emerald-500" />
                Recent Activity
              </h3>
              <ul className="space-y-4 text-sm text-slate-600">
                <ActivityItem text="Taught React Hooks to Alex" time="2 hours ago" />
                <ActivityItem text="Earned Top Teacher badge" time="1 day ago" />
                <ActivityItem text="Started learning Python" time="3 days ago" />
                <ActivityItem text="Connected with Maya Chen" time="5 days ago" />
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

/* Reusable Components */

function Stat({ value, label }) {
  return (
    <div>
      <p className="text-lg font-semibold">{value}</p>
      <p className="text-xs text-slate-500">{label}</p>
    </div>
  );
}

function Skill({ name, level, students }) {
  return (
    <div className="border rounded-xl p-4 hover:border-emerald-400 transition">
      <div className="flex justify-between items-center mb-1">
        <p className="font-medium">{name}</p>
        <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600">
          {level}
        </span>
      </div>
      <p className="text-xs text-slate-500">{students} students taught</p>
    </div>
  );
}

function Badge({ title, desc }) {
  return (
    <li className="flex items-start gap-3">
      <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-semibold">
        ★
      </span>
      <div>
        <p className="font-medium">{title}</p>
        <p className="text-xs text-slate-500">{desc}</p>
      </div>
    </li>
  );
}

function ActivityItem({ text, time }) {
  return (
    <li className="flex justify-between">
      <span>{text}</span>
      <span className="text-xs text-slate-400">{time}</span>
    </li>
  );
}