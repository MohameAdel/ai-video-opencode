"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";

function EtherealCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ 
        opacity: 1, 
        y: 0, 
        scale: 1 
      }}
      transition={{ 
        duration: 1.2, 
        ease: [0.16, 1, 0.3, 1],
        delay: 0.5
      }}
      className="group relative mx-auto mt-12 max-w-md cursor-pointer"
    >
      {/* Ambient glow */}
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-[#db90ff] via-[#ff6e80] to-[#db90ff] opacity-0 blur-xl transition-all duration-700 group-hover:opacity-60" />
      
      {/* Card container */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d16]/80 backdrop-blur-xl">
        {/* Surface layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#db90ff]/5 to-[#ff6e80]/5" />
        
        {/* Inner glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#db90ff]/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        
        {/* Content */}
        <div className="relative p-8 text-center">
          <div className="mb-4 inline-flex items-center justify-center rounded-full bg-white/5 px-4 py-1.5 text-xs font-medium text-white/60">
            ✨ Ethereal Animation
          </div>
          
          <h3 className="mb-3 text-xl font-semibold text-white">
            Floating Card
          </h3>
          
          <p className="mb-6 text-sm text-white/50">
            Hover to see the gradient glow effect
          </p>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#db90ff] to-[#ff6e80] px-6 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(219,144,255,0.3)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(219,144,255,0.5)]"
          >
            Primary CTA
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </div>
        
        {/* Rim light effect */}
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover:ring-[#db90ff]/30" />
      </div>
      
      {/* Shadow with tint */}
      <div className="absolute -bottom-4 left-1/2 h-8 w-3/4 -translate-x-1/2 rounded-full bg-[#db90ff]/20 blur-xl transition-all duration-500 group-hover:bg-[#db90ff]/40" />
    </motion.div>
  );
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="hero" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0d0d16]">
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

        {/* Ethereal Card Animation */}
        <EtherealCard />
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
