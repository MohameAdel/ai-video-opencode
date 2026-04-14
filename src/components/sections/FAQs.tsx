"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const FAQS = [
  {
    question: "Do I need to send the product?",
    answer:
      "No. High-quality photos or a link to your store is all we need to start.",
  },
  {
    question: "Do you require shooting or models?",
    answer:
      "None. We generate everything—visuals, characters, and environments—using AI.",
  },
  {
    question: "What styles of ads can you create?",
    answer:
      "Everything. From talking products and AI characters to UGC-style and cinematic animations.",
  },
  {
    question: "How long does it take?",
    answer: "24–72 hours. Launch-ready ads, delivered in record time.",
  },
  {
    question: "Can this work for my product?",
    answer:
      "Yes. Perfectly engineered for E-commerce and physical product brands.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQS)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-white/[0.06]">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors duration-300 hover:text-[#03fb80]"
      >
        <span className="font-heading text-lg font-medium text-white">{faq.question}</span>
        <motion.svg
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className="h-5 w-5 shrink-0 text-[#03fb80]/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="font-body pb-5 text-white/60">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-[#000000] py-20 sm:py-32">
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-8">
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
              Got questions?{" "}
              <span className="text-[#03fb80]">We got answers.</span>
            </h2>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mx-auto mt-16 max-w-2xl"
        >
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <FAQItem
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#000000] to-transparent" />
    </section>
  );
}
