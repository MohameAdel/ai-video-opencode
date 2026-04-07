"use client";

import { motion } from "motion/react";

const OTHERS = ["Just tools", "Generic outputs", "DIY effort", "No strategy"];

const US = [
  "Marketing-first approach",
  "Built for conversions",
  "Done-for-you execution",
  "Built to scale",
];

export function WhyUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-[#0a1a0a] py-20 sm:py-32">
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 text-center sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white"
        >
          AI creates content.{" "}
          <span className="text-[#00FF80]">We create revenue.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-2"
        >
          {/* Others */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
            <p className="mb-6 text-xs font-semibold tracking-[0.25em] text-[#666666] uppercase">
              Others
            </p>
            <div className="space-y-4">
              {OTHERS.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 rounded-lg bg-white/[0.02] px-4 py-3"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-[#666666]" />
                  <p className="text-[#a0a0a0]">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Us */}
          <div className="relative rounded-2xl border border-[#00FF80]/20 bg-[#00FF80]/[0.03] p-6 sm:p-8">
            {/* Glow effect */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#00FF80]/10" />
            <div className="pointer-events-none absolute -inset-px rounded-2xl bg-[#00FF80]/[0.02] blur-xl" />

            <p className="relative mb-6 text-xs font-semibold tracking-[0.25em] text-[#00FF80]/80 uppercase">
              Us
            </p>
            <div className="relative space-y-4">
              {US.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 rounded-lg bg-[#00FF80]/[0.06] px-4 py-3"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-[#00FF80]" />
                  <p className="text-white">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1a0a] to-transparent" />
    </section>
  );
}
