"use client";

import { motion } from "motion/react";

const STYLES = [
  {
    title: "Market Research",
    description: "We analyze your product, audience, and competitors.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 1 0 10 10" /><path d="M12 8v4l3 3" />
        <circle cx="18" cy="6" r="3" fill="currentColor" stroke="none" opacity="0.3" />
        <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    title: "Script & Hooks",
    description: "We build high-converting angles and hooks.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
        <path d="M18 8c1.1 0 2 .9 2 2s-.9 2-2 2" />
      </svg>
    ),
  },
  {
    title: "AI Production",
    description: "We create scroll-stopping visuals.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3" />
      </svg>
    ),
  },
  {
    title: "Voice & Sound",
    description: "We design audio that amplifies impact.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="4" height="10" rx="1" />
        <rect x="10" y="4" width="4" height="16" rx="1" />
        <rect x="18" y="9" width="4" height="8" rx="1" />
      </svg>
    ),
  },
  {
    title: "Editing & Optimization",
    description: "We refine every frame for performance.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
  },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.35 } },
};

export function Styles() {
  return (
    <section id="styles" className="relative overflow-hidden min-h-screen">
      <div
        className="absolute inset-0"
        style={{
          background: "#000000",
        }}
      />

      <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.03 }}>
        <defs>
          <pattern id="finegrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#03fb80" strokeWidth="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#finegrid)" />
      </svg>

      <div className="absolute pointer-events-none"
        style={{
          top: "-10%", right: "-8%", width: "560px", height: "560px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(3,251,128,0.08) 0%, rgba(3,251,128,0.04) 40%, transparent 70%)"
        }} />
      <div className="absolute pointer-events-none"
        style={{
          bottom: "-12%", left: "-8%", width: "420px", height: "420px", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(3,251,128,0.06) 0%, transparent 65%)"
        }} />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-16 py-14 lg:py-20">
        <div className="w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 w-full flex flex-col">
            <motion.div variants={fadeUp(0)} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="inline-flex items-center self-start mb-6">

            </motion.div>

            <motion.h1 variants={fadeUp(0.08)} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white leading-[1.1] tracking-tight mb-6">
              Our AI<br />
              <span style={{ color: "#03fb80" }}>
                experience
              </span>
            </motion.h1>

            <motion.div variants={fadeUp(0.12)} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="h-px w-20 bg-gradient-to-r from-[#03fb80] to-transparent mb-6" />

            <motion.p variants={fadeUp(0.16)} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="text-base md:text-lg font-body font-medium text-white/60 mb-8 leading-snug">
              {" "}
              <span className="text-white/90 font-body font-semibold">Built on a performance system</span>
            </motion.p>

            <motion.ul variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="flex flex-col gap-3">
              {STYLES.map((style, i) => (
                <motion.li key={i} variants={fadeUp(0)}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  className="group flex items-center gap-5 px-6 py-5 rounded-2xl cursor-default touch-manipulation"
                  style={{
                    background: "rgba(255,255,255,0.02)", border: "1px solid rgba(3,251,128,0.08)",
                    backdropFilter: "blur(12px)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)"
                  }}>
                    <div className="flex-shrink-0 w-12 h-12 min-w-[48px] rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: "rgba(3,251,128,0.1)", border: "1px solid rgba(3,251,128,0.15)", color: "#03fb80"
                      }}>
                    {style.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-body font-semibold text-base leading-tight mb-1">{style.title}</p>
                    <p className="text-white/60 text-sm leading-relaxed font-body truncate">{style.description}</p>
                  </div>
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: "#03fb80" }}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          <div className="hidden lg:block lg:w-1/2 lg:flex-shrink-0 lg:h-[600px]">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full rounded-2xl overflow-hidden"
            >
              <img
                src="/media/147741.jpg"
                alt="Flux Experience"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#03fb80]/20 via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-[#03fb80]/10 rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
        style={{ background: "linear-gradient(to top, #000000 0%, transparent 100%)" }} />
    </section>
  );
}