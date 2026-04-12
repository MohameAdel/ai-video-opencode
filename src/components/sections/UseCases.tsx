"use client";

import { motion } from "motion/react";

const USE_CASES = [
  "Launching new products",
  "Scaling winning ads",
  "Testing creatives fast",
  "Replacing expensive shoots",
];

export function UseCases() {
  return (
    <section id="use-cases" className="relative overflow-hidden bg-[#000000] py-20 sm:py-32">
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-8">
        {/* Use Cases */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-body mb-4 text-xs font-semibold tracking-[0.25em] text-[#03fb80]/60 uppercase">
            </p>
            <h2 className="font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
              Built for brands that{" "}
              <span className="text-[#03fb80]">move fast</span>
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
                className="font-body rounded-full border border-white/[0.06] bg-[#0a0a0a] px-5 py-2.5 text-sm text-white/60 transition-colors duration-300 hover:border-[#03fb80]/10 hover:bg-[#03fb80]/[0.02] hover:text-white"
              >
                {useCase}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#000000] to-transparent" />
    </section>
  );
}
