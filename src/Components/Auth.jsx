import { Link } from "react-router-dom"
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useParams,useNavigate } from "react-router-dom"
import { useEffect,useState } from "react"

export default function AuthPage() {
  const { mode: routeMode } = useParams()
  const navigate = useNavigate()
  const [mode, setMode] = useState("signin")
  const [showPassword, setShowPassword] = useState(false)

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  useEffect(() => {
    if (routeMode === "signup"|| routeMode === "signin") {
      setMode(routeMode)
    }
    else {navigate('/auth/signin',{replace:true})}
  }, [routeMode])

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.email || !form.password) {
      alert("Email and password are required")
      return
    }

    if (mode === "signup" && form.password !== form.confirmPassword) {
      alert("Passwords do not match")
      return
    }

    console.log("Submitted:", { mode, form })
    navigate("/home")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FAF7F2] px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8"
      >
        {/* Tabs */}
        <div className="flex bg-[#F3F1EC] rounded-full p-1 mb-8">
          {["signin", "signup"].map((item) => (
            <button
              key={item}
              onClick={() => setMode(item)}
              className={`flex-1 py-2 rounded-full text-sm font-semibold transition ${
                mode === item
                  ? "bg-emerald-500 text-white"
                  : "text-slate-600"
              }`}
            >
              {item === "signin" ? "Sign In" : "Sign Up"}
            </button>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-900">
            {mode === "signin" ? "Welcome Back!" : "Create Account"}
          </h1>
          <p className="text-slate-500 text-sm mt-2">
            {mode === "signin"
              ? "Sign in to continue your learning journey"
              : "Join us and start learning today"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <AnimatePresence mode="wait">
            {mode === "signup" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <label className="text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <div className="relative mt-1">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full pl-10 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-400"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Email Address
            </label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full pl-10 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-slate-700">
              Password
            </label>
            <div className="relative mt-1">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full pl-10 pr-12 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-400"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {mode === "signup" && (
            <div>
              <label className="text-sm font-medium text-slate-700">
                Confirm Password
              </label>
              <input
                name="confirmPassword"
                type="password"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-400"
              />
            </div>
          )}

          {mode === "signin" && (
            <div className="text-right">
              <Link
                to="/forgot-password"
                className="text-sm text-emerald-600 hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          )}

          <button
            type="submit" onClick={handleSubmit}
            className="w-full py-3 rounded-full font-semibold text-white bg-gradient-to-r from-emerald-500 to-orange-400 shadow-lg hover:opacity-90"
          >
            {mode === "signin" ? "Sign In →" : "Create Account →"}
          </button>
        </form>
      </motion.div>
    </div>
  )
}