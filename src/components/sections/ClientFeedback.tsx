"use client";

import { motion } from "motion/react";

const REVIEWS = [
  { id: 1, src: "/New folder/hgd.jpeg", alt: "Client review showing results" },
  { id: 2, src: "/New folder/ssss.jpeg", alt: "Client feedback on AI ad quality" },
  { id: 3, src: "/New folder/WhatsApp Image 2026-04-11 at 4.08.56 PM.jpeg", alt: "Testimonial about fast turnaround" },
  { id: 4, src: "/New folder/WhatsApp Image 2026-04-11 at 4.12.01 PM.jpeg", alt: "Review highlighting performance" },
];

export function ClientFeedback() {
  return (
    <section id="client-feedback" className="relative overflow-hidden bg-[#000000] py-0 sm:py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#03fb80]/[0.015] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="mt-6 text-center">
          <p className="font-heading text-[clamp(2rem,3vw,2.25rem)] font-semibold text-white">
           Our Results
          </p>
          <div className="mt-8 -mx-4 px-4 flex justify-start gap-6 overflow-x-auto pb-4 scrollbar-hide sm:mx-0 sm:px-0">
            {REVIEWS.map((review, i) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative flex-shrink-0 overflow-hidden rounded-xl border border-white/[0.06] bg-[#0a0a0a] transition-all duration-300 hover:border-[#03fb80]/10 hover:shadow-lg hover:shadow-[#03fb80]/5"
              >
                <div className="h-48 w-72 overflow-hidden">
                  <img
                    src={review.src}
                    alt={review.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}