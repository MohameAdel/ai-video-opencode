"use client";

import { motion } from "motion/react";

const STEPS = [
  {
    number: "01",
    title: "Market Research",
    description: "We analyze your product, audience, and competitors.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Script & Hooks",
    description: "We build high-converting angles and hooks.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "AI Production",
    description: "We create scroll-stopping visuals.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Voice & Sound",
    description: "We design audio that amplifies impact.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Editing & Optimization",
    description: "We refine every frame for performance.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
      </svg>
    ),
  },
];

export function TheSystem() {
  return (
    <section id="process" className="relative overflow-hidden bg-[#0a1a0a] py-20 sm:py-32">
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#00FF80]/60 uppercase">
            Our Process
          </p>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            Built on a{" "}
            <span className="text-[#00FF80]">performance system</span>
          </h2>
          <p className="mx-auto mt-5 max-w-md text-lg text-[#a0a0a0]">
            All optimized to drive results. Not just content.
          </p>
        </motion.div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-[#00FF80]/20 via-[#00FF80]/10 to-transparent md:block" />

            <div className="space-y-6">
              {STEPS.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative flex items-start gap-6 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-left transition-all duration-300 hover:border-[#00FF80]/20 hover:bg-[#00FF80]/[0.03] md:pl-20"
                >
                  {/* Step number */}
                  <div className="absolute left-6 top-6 hidden md:flex">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#00FF80]/20 bg-[#00FF80]/10 text-xs font-bold text-[#00FF80]">
                      {step.number}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00FF80]/10 text-[#00FF80] transition-colors duration-300 group-hover:bg-[#00FF80]/20">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="mb-1 text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#a0a0a0]">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1a0a] to-transparent" />
    </section>
  );
}
