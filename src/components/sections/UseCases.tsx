"use client";

import { motion } from "motion/react";

const USE_CASES = [
  { text: "Launching new products", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#03fb80]"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg> },
  { text: "Scaling winning ads", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#03fb80]"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg> },
  { text: "Testing creatives fast", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#03fb80]"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> },
  { text: "Replacing expensive shoots", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#03fb80]"><rect width="18" height="18" x="3" y="3" rx="1"/><circle cx="9" cy="9" r="1"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg> },
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
            <h2 className="font-heading text-[clamp(1.5rem,4vw,3rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white">
              Built for brands that{" "}
              <span className="text-[#03fb80]">move fast</span>
            </h2>
          </motion.div>

          <div className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-5">
            {USE_CASES.map((useCase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.06 }}
                className="group cursor-pointer relative font-body rounded-full border border-[#03fb80]/25 bg-gradient-to-b from-[#0f0f0f] to-[#080808] px-8 py-4 text-[16px] font-semibold text-white backdrop-blur-sm transition-all duration-300 ease-out hover:border-[#03fb80]/60 hover:from-[#0f0f0f] hover:to-[#0a0a0a] hover:shadow-[0_0_35px_-10px_rgba(3,251,128,0.25)]"
              >
                <span className="flex items-center gap-3">
                  <span className="flex-shrink-0 text-[#03fb80] group-hover:drop-shadow-[0_0_6px_rgba(3,251,128,0.5)] transition-all duration-300">
                    {useCase.icon}
                  </span>
                  <span className="text-white group-hover:text-white transition-colors duration-300">{useCase.text}</span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#000000] to-transparent" />
    </section>
  );
}
