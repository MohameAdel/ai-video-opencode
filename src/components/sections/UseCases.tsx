"use client";

import { motion } from "motion/react";

const USE_CASES = [
  "Launching new products",
  "Scaling winning ads",
  "Testing creatives fast",
  "Replacing expensive shoots",
];

const PROCESS_STEPS = [
  {
    number: "1",
    title: "Send your product",
    description: "Share your product details, photos, or store link.",
  },
  {
    number: "2",
    title: "We create your ads",
    description: "Our AI system builds high-converting ad creatives.",
  },
  {
    number: "3",
    title: "You launch & scale",
    description: "Deploy ads and watch your revenue grow.",
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="relative overflow-hidden bg-[#0a1a0a] py-20 sm:py-32">
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-8">
        {/* Use Cases */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#00FF80]/60 uppercase">
              Use Cases
            </p>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
              Built for brands that{" "}
              <span className="text-[#00FF80]">move fast</span>
            </h2>
          </motion.div>

          <div className="mx-auto mt-12 flex max-w-2xl flex-wrap items-center justify-center gap-4">
            {USE_CASES.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-full border border-white/[0.06] bg-white/[0.02] px-5 py-2.5 text-sm text-[#a0a0a0] transition-colors duration-300 hover:border-[#00FF80]/20 hover:bg-[#00FF80]/[0.03] hover:text-white"
              >
                {useCase}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-24 text-center"
        >
          <h3 className="text-2xl font-bold text-white">
            Our AI Experience
          </h3>

          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-3">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-[#00FF80]/20 hover:bg-[#00FF80]/[0.03]"
              >
                {/* Arrow connector (hidden on last item) */}
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden -translate-y-1/2 md:block">
                    <svg
                      className="h-6 w-6 text-[#00FF80]/30"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </div>
                )}

                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#00FF80]/20 bg-[#00FF80]/10 text-xl font-bold text-[#00FF80]">
                  {step.number}
                </div>
                <h4 className="mb-2 text-lg font-semibold text-white">
                  {step.title}
                </h4>
                <p className="text-sm text-[#a0a0a0]">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1a0a] to-transparent" />
    </section>
  );
}
