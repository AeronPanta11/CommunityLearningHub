import { ArrowRight, Users } from "lucide-react"

/* Local Button component */
function Button({
  children,
  variant = "primary",
  size = "lg",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300 focus:outline-none rounded-full"

  const variants = {
    primary:
      "bg-[#F9F4E7] text-slate-900 hover:scale-[1.03] hover:shadow-lg",
    secondary:
      "bg-transparent text-white hover:bg-white/10",
  }

  const sizes = {
    lg: "h-14 px-8 text-base",
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* CTA Section */}
      <section id="community" className="pt-20 pb-10 md:pt-32 md:pb-16">
        <div className="container mx-auto px-6">
          <div
            className="
              relative overflow-hidden rounded-3xl p-10 md:p-16
              bg-[linear-gradient(135deg,#2DABA2_0%,#3CB0A9_35%,#8CAD80_70%,#A9AA70_100%)]
            "
          >
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready to Start Your Learning Journey?
              </h2>

              <p className="text-lg text-white/80 mb-8">
                Join thousands of learners exchanging skills every day.
                It's free to get started – no credit card required.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary">
                  Create Free Account
                  <ArrowRight className="w-5 h-5" aria-hidden="true" />
                </Button>

                <Button variant="secondary">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Glow blobs (optional) */}
            {/* <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-white/10 blur-2xl" /> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F6FBF8] flex flex-col justify-between mt-auto">
        {/* Top divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        {/* Footer content */}
        <div className="container mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-[#2DABA2] flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-2xl text-foreground">
              CommunityLearningHub
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground">About</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Contact</a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center md:text-right">
            © 2024 Community Learning Hub. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
