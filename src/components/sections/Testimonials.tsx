"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";

const REVIEWS = [
  { id: 1, src: "/New folder/hgd.jpeg", alt: "Client review showing results" },
  { id: 2, src: "/New folder/ssss.jpeg", alt: "Client feedback on AI ad quality" },
  { id: 3, src: "/New folder/WhatsApp Image 2026-04-11 at 4.08.56 PM.jpeg", alt: "Testimonial about fast turnaround" },
  { id: 4, src: "/New folder/WhatsApp Image 2026-04-11 at 4.12.01 PM.jpeg", alt: "Review highlighting performance" },
];

function ReviewCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mt-16">
      <p className="font-body mb-6 text-center text-xs font-semibold tracking-[0.25em] text-white/40 uppercase">
        Real client feedback
      </p>
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide"
        style={{ scrollBehavior: 'smooth' }}
      >
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
  );
}

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
            <h2 className="font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
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

          <ReviewCarousel />
        </div>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-24 text-center"
        >
          <h2 className="font-heading text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
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
    </section>
  );
}