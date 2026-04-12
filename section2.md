import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Market Research",        desc: "We analyze your product, audience, and competitors." },
  { number: "02", title: "Script & Hooks",          desc: "We build high-converting angles and hooks." },
  { number: "03", title: "AI Production",           desc: "We create scroll-stopping visuals." },
  { number: "04", title: "Voice & Sound",           desc: "We design audio that amplifies impact." },
  { number: "05", title: "Editing & Optimization",  desc: "We refine every frame for performance." },
];

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function OurAIExperience() {
  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 50% 20%, #3b1a6e 0%, #1a0a3a 45%, #0d0520 100%)" }}>

      {/* Grid */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#a78bfa" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Glow orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)", transform: "translate(25%,-25%)" }} />
      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)", transform: "translate(-30%,30%)" }} />

      <div className="flex-1 flex flex-col justify-center relative z-10 px-8 md:px-20 py-16 max-w-6xl mx-auto w-full">

        {/* Eyebrow */}
        <motion.p initial={{ opacity:0, y:-10 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.4 }}
          className="text-xs tracking-widest uppercase text-violet-400 mb-5 flex items-center gap-2">
          <span className="inline-block w-6 h-px bg-violet-500" /> Our AI Experience
        </motion.p>

        {/* Headline */}
        <motion.h1 initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.1 }}
          className="text-4xl md:text-5xl font-bold text-white leading-tight mb-2">
          Built on a{" "}
          <span style={{ background:"linear-gradient(135deg,#e879f9 0%,#a78bfa 45%,#60a5fa 90%)",
            WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
            performance system
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div initial={{ scaleX:0 }} animate={{ scaleX:1 }} transition={{ duration:0.7, delay:0.25, ease:"easeOut" }}
          style={{ transformOrigin:"left" }}
          className="h-px bg-gradient-to-r from-violet-500 via-indigo-400 to-transparent mt-6 mb-10 w-full" />

        {/* Steps */}
        <motion.div variants={containerVariants} initial="hidden" animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, i) => (
            <motion.div key={i} variants={itemVariants}
              className="relative flex flex-col gap-3 p-5 rounded-2xl group"
              style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(167,139,250,0.15)", backdropFilter:"blur(8px)" }}>
              <span className="text-3xl font-black leading-none"
                style={{ background:"linear-gradient(135deg,#e879f9,#a78bfa)",
                  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>
                {step.number}
              </span>
              <p className="text-white font-semibold text-sm leading-snug">{step.title}</p>
              <div className="h-px w-8 bg-violet-500/40" />
              <p className="text-white/55 text-xs leading-relaxed">{step.desc}</p>
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                style={{ background:"radial-gradient(circle at 50% 0%, rgba(167,139,250,0.12) 0%, transparent 70%)" }} />
            </motion.div>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.8 }}
          className="mt-10 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
          <p className="text-center text-white/70 text-sm px-4">
            <span className="text-white font-semibold">All optimized to drive results.</span> Not just content.
          </p>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
        </motion.div>

      </div>
    </div>
  );
}