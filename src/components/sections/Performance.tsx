"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";

const STATS = [
  { value: 3.5, suffix: "x", label: "ROAS", description: "Return on ad spend" },
  { value: 40, suffix: "%", label: "CTR", description: "Click-through rate increase" },
  { value: 72, suffix: "h", label: "Delivery", description: "Production turnaround" },
];

function AnimatedCounter({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) {
  const counterRef = useRef<HTMLSpanElement>(null);
  const countedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countedRef.current) {
          countedRef.current = true;
          const el = counterRef.current;
          if (!el) return;

          let count = 0;
          const target = value;
          const duration = 1500;
          const step = target / (duration / 16);
          const isDecimal = value % 1 !== 0;

          const timer = setInterval(() => {
            count += step;
            if (count >= target) {
              count = target;
              clearInterval(timer);
            }
            el.textContent = (isDecimal ? count.toFixed(1) : Math.floor(count).toString()) + suffix;
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => observer.disconnect();
  }, [value, suffix]);

  return (
    <span ref={counterRef} className="text-4xl font-bold text-[#00FF80] md:text-5xl">
      0{suffix}
    </span>
  );
}

export function Performance() {
  return (
    <section id="results" className="relative overflow-hidden bg-[#0a1a0a] py-20 sm:py-32">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#00FF80]/[0.03] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 text-center sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#00FF80]/60 uppercase">
            Results
          </p>
          <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white">
            Performance,{" "}
            <span className="text-[#00FF80]">not promises.</span>
          </h2>
        </motion.div>

        <div className="mx-auto mt-16 grid max-w-4xl gap-6 md:grid-cols-3">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#00FF80]/20 hover:bg-[#00FF80]/[0.03]"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm font-semibold tracking-wide text-white uppercase">
                {stat.label}
              </p>
              <p className="mt-1 text-xs text-[#666666]">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1a0a] to-transparent" />
    </section>
  );
}
