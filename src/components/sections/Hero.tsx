"use client";

import { useRef } from "react";
import { motion } from "motion/react";

import { GlowingArrow } from "@/components/ui/GlowingArrow";
import { NeonArrowSequence } from "@/components/ui/NeonArrowSequence";

export function Hero() {
  const scrollRef = useRef<HTMLButtonElement>(null);

  return (
    <section id="hero" className="relative flex min-h-[100vh] md:min-h-screen flex-col items-center justify-start overflow-hidden bg-black pt-16 pb-8 md:pt-0 md:pb-0 md:justify-center">
      {/* Full Screen Video Background */}
      <video
        className="pointer-events-none absolute inset-0 w-full h-full bg-black object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/media/999.mp4" type="video/mp4" />
      </video>

      {/* Video Overlay - Dark gradient for text readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Grid lines overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.02]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(3,251,128,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(3,251,128,0.04) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Subtle gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#03fb80]/[0.02] blur-[120px]" />
      </div>

      {/* Text content */}
      <div className="relative z-10 mx-auto w-full px-4 pt-[45vh] pb-8 text-center md:px-8 md:pt-36 md:pb-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-[clamp(1.5rem,4vw,4rem)] md:text-[clamp(2rem,5vw,4rem)] font-heading font-bold leading-[1.2] tracking-[-0.01em] text-white"
        >
          Transform Your Product into
          <br className="my-0.5" />
          <span className="text-[#03fb80]">High-Performance Ads</span>
        </motion.h1>



        
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-t from-black to-transparent" />

      {/* Scroll indicator at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <button
          ref={scrollRef}
          onClick={() => {
            const target = document.getElementById("work");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="flex items-center justify-center p-3 cursor-pointer bg-transparent border-0"
          aria-label="Scroll to next section"
        >
          <NeonArrowSequence count={3} color="#03fb80" size={40} />
        </button>
      </motion.div>
    </section>
  );
}