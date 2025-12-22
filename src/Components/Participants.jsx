import {Users, MessageCircle, Award, Wallet} from "lucide-react";
export default function Participants() {
    const stats = [
        { value: "10K+", label: "Active Learners" },
    { value: "500+", label: "Skills Shared" },
    { value: "25K+", label: "Sessions Completed" },
    { value: "98%", label: "Satisfaction Rate" },
  ];

  const features = [
    {
      icon: Users,
      title: "Skill Exchange",
      description: "Trade your expertise with others. Teach what you know, learn what you need.",
      color: "bg-[#E6F6F2] text-[#2FB7A3]",
    },
    {
      icon: MessageCircle,
      title: "Community Chat",
      description: "Connect in real-time with learners and mentors in topic-based chat rooms.",
      color: "bg-[#FFF1E6] text-[#FF8A3D]",
    },
    {
      icon: Award,
      title: "Achievement Badges",
      description: "Earn recognition for your progress and contributions to the community.",
      color: "bg-[#E9F7F1] text-[#4FBF9A] ",
    },
    {
      icon: Wallet,
      title: "Skill Wallet",
      description: "Track your learning journey and showcase verified skills to the world.",
      color: "bg-[#FFF1E6] text-[#FF8A3D]",
    }
  ];
  
return (
    <>
  <section className="py-16 bg-card ">
        <div className=" mt-9 container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#078987] mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
     {/* Features Section */}
      <section id="features" className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Everything You Need to{" "}
             <span className="bg-gradient-to-r from-[#2FB7A3] to-[#6CBF8E] bg-clip-text text-transparent">
  Learn & Teach
</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform provides all the tools you need for successful skill exchange
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-6 rounded-2xl bg-card border border-[#E9E6E1] hover:border-[#DAD6CF] transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
     
  

</>

);
}