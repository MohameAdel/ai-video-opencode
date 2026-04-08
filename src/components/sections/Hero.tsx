"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black">
      {/* Full Screen Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/media/999.mp4" type="video/mp4" />
      </video>

      {/* Video Overlay - Dark gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Grid lines overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,255,128,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,128,0.08) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Subtle gradient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00FF80]/[0.05] blur-[120px]" />
      </div>

      {/* Text content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-4 pt-24 pb-8 text-center sm:px-8 sm:pt-32 sm:pb-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white"
        >
          Transform Your Product into
          <br />
          <span className="text-[#00FF80]">High-Performance Ads</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-[#a0a0a0]"
        >
          No studios. No models. Just sales.
          <br />
          Test fast. Scale faster.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex items-center justify-center"
        >
          <Button href="#start" variant="primary" whatsapp>
            Start Your First Ad
          </Button>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}