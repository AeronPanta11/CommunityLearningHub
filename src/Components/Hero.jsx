import heroBg from "../assets/hero-bg.jpeg";

export default function Hero() {
  return (
    <section className="">

      {/* Background image */}
      <img
        src={heroBg}
        alt=""
        className="absolute w-screen h-[600px] object-cover top-0 left-0"
      />

      {/* White + gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 via-white/60 to-white/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-24">
        
        {/* Badge */}
        <div className=" relative mb-[55px] inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-100 text-emerald-600 text-sm font-medium">
          ✨ Join 10,000+ learners worldwide
        </div>

        {/* Heading */}
        <h1 className=" max-w-4xl text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Learn Together,{" "}
          <span className="bg-gradient-to-r from-emerald-400 to-yellow-400 bg-clip-text text-transparent">
            Grow Together
          </span>
        </h1>

        {/* Description */}
        <p className="relative mt-6 max-w-2xl text-lg text-gray-600 leading-relaxed">
          Exchange skills with your community. Whether you're teaching or
          learning, our platform connects passionate people to share knowledge
          and grow together.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-5">
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-400 to-yellow-400 text-white font-semibold shadow-md hover:opacity-90 transition flex items-center gap-2">
            Start Learning Free →
          </button>

          <button className="px-8 py-3 rounded-full border-2 border-emerald-400 text-emerald-600 font-semibold hover:bg-emerald-50 transition">
            Watch Demo
          </button>
        </div>

      </div>
    </section>
  );
}
