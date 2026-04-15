"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";

const TESTIMONIALS = [
  {
    quote:
      "We went from 1.2x to 3.5x ROAS in just two weeks. The AI ads outperformed everything we tried before.",
    name: "Ahmed K.",
    role: "E-commerce Brand Owner",
  },
  {
    quote:
      "I used to spend weeks waiting for production. Now I get launch-ready ads in 48 hours. Game changer.",
    name: "Sarah M.",
    role: "DTC Founder",
  },
  {
    quote:
      "The quality is insane. Our customers think we hired a full production team. Nope, just AI.",
    name: "Omar R.",
    role: "Marketing Director",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#000000] py-20 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-[#03fb80]/[0.02] blur-[200px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-8">
        {/* Testimonials */}
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
              What our{" "}
              <span className="text-[#03fb80]">clients say</span>
            </h2>
          </motion.div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-white/[0.06] bg-[#0a0a0a] p-6 text-left transition-all duration-300 hover:border-[#03fb80]/10 hover:bg-[#0d0d0d]"
              >
                {/* Quote icon */}
                <div className="mb-4 text-[#03fb80]/50">
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                  </svg>
                </div>

                <p className="font-body mb-6 text-white/60">{testimonial.quote}</p>

                <div>
                  <p className="font-body font-semibold text-white">{testimonial.name}</p>
                  <p className="font-body text-xs text-white/40">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mt-24 text-center"
          >
            <h2 className="font-heading text-[clamp(1.5rem,4vw,3rem)] font-bold leading-[1.15] tracking-[-0.02em] text-white">
              Ready to turn your product into a{" "}
              <span className="text-[#03fb80]">sales machine?</span>
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-10"
            >
              <Button href="#start" variant="primary" whatsapp>
                Start Your First Ad
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}