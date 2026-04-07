"use client";

import { motion } from "motion/react";

const PAIN_POINTS = [
  "Weeks of waiting.",
  "Burned budgets.",
  "Unpredictable results.",
];

export function TheProblem() {
  return (
    <section id="problem" className="relative overflow-hidden bg-[#0a1a0a] py-20 sm:py-32">
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 text-center sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white"
        >
          Traditional production is{" "}
          <span className="text-red-400">broken</span>
        </motion.h2>

        <div className="mx-auto mt-12 max-w-lg space-y-6">
          {PAIN_POINTS.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 py-4 transition-all duration-300 hover:border-red-400/20 hover:bg-red-400/[0.03]"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-400/10">
                <svg
                  className="h-4 w-4 text-red-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <p className="text-lg text-[#a0a0a0]">{point}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-12 max-w-xl"
        >
          <p className="text-sm text-[#666666]">
            And still… no guarantee it will sell.
          </p>
          <p className="mt-4 text-xl font-semibold text-white">
            You don&apos;t need more content.{" "}
            <span className="text-[#00FF80]">You need content that converts.</span>
          </p>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1a0a] to-transparent" />
    </section>
  );
}
