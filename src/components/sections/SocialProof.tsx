"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

const BRANDS = [
  "NOON",
  "NAMSHI",
  "STYLI",
  "SHEIN",
  "OULA",
  "BRANDX",
  "LUXORA",
  "VOGARA",
];

const VIDEOS = [
  { id: 1, title: "Talking Product Ad", style: "UGC", youtubeId: "_7_PYT9S7LI" },
  { id: 2, title: "AI Character Ad", style: "Cinematic", youtubeId: "j4RujPM7E3o" },
  { id: 3, title: "Animation Story", style: "Animated", youtubeId: "TgNtrgitQT4" },
  { id: 4, title: "Product Showcase", style: "3D", youtubeId: "0DpU0N1V2to" },
];

function LogoMarquee() {
  return (
    <div className="relative mt-16 overflow-hidden">
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-[#0a1a0a] to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-[#0a1a0a] to-transparent" />

      <div className="flex animate-marquee gap-16 py-6">
        {[...BRANDS, ...BRANDS].map((brand, i) => (
          <span
            key={i}
            className="shrink-0 text-xl font-bold tracking-[0.2em] text-white/15 uppercase"
          >
            {brand}
          </span>
        ))}
      </div>
    </div>
  );
}

function VideoCard({
  video,
  onClick,
  index,
}: {
  video: (typeof VIDEOS)[0];
  onClick: () => void;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[9/16] overflow-hidden rounded-xl border border-white/[0.06] bg-[#1a1a1a] transition-all duration-300 sm:aspect-[3/4] lg:aspect-[3/4] group-hover:scale-[1.02]">
        <img
          src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
          }}
        />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:border-[#00FF80]/40 group-hover:bg-[#00FF80]/10">
            <svg
              className="ml-0.5 h-5 w-5 text-white transition-colors duration-300 group-hover:text-[#00FF80]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6.3 2.84A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.27l9.344-5.891a1.5 1.5 0 000-2.538L6.3 2.841z" />
            </svg>
          </div>
        </div>

        {/* Style badge */}
        <div className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/50 px-3 py-1 text-[11px] font-medium tracking-wide text-white/70 uppercase backdrop-blur-sm">
          {video.style}
        </div>

        {/* Glow on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/[0.06] transition-all duration-300 group-hover:ring-[#00FF80]/20" />
      </div>

      <p className="mt-3 text-sm font-medium text-white/60 transition-colors duration-300 group-hover:text-white/90">
        {video.title}
      </p>
    </motion.div>
  );
}

function Lightbox({
  video,
  onClose,
}: {
  video: (typeof VIDEOS)[0];
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
        <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-4 w-full max-w-[280px] sm:max-w-md overflow-hidden rounded-2xl border border-white/10 bg-[#1a1a1a]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[9/16] w-full sm:aspect-video">
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/60 backdrop-blur-sm transition-colors hover:text-white"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}

export function SocialProof() {
  const [activeVideo, setActiveVideo] = useState<(typeof VIDEOS)[0] | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const countedRef = useRef(false);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % VIDEOS.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
    setTimeout(() => setIsPaused(false), 5000);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countedRef.current) {
          countedRef.current = true;
          const el = counterRef.current;
          if (!el) return;

          let count = 0;
          const target = 100;
          const duration = 1500;
          const step = target / (duration / 16);

          const timer = setInterval(() => {
            count += step;
            if (count >= target) {
              count = target;
              clearInterval(timer);
            }
            el.textContent = Math.floor(count).toString() + "+";
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="relative overflow-hidden bg-[#0a1a0a] py-20 sm:py-32">
      {/* Subtle glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[#00FF80]/[0.03] blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs font-semibold tracking-[0.25em] text-[#00FF80]/60 uppercase"
          >
            Social Proof
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-white"
          >
            Ads Built to{" "}
            <span className="text-[#00FF80]">Perform</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-md text-lg text-[#a0a0a0]"
          >
            Real creatives. Real results.
          </motion.p>
        </div>

        {/* Video Carousel - Mobile */}
        <div className="mt-16 sm:hidden">
          <div className="relative">
            <div 
              className="overflow-hidden cursor-grab active:cursor-grabbing"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                className="flex"
                animate={{ x: `${currentSlide * -100}%` }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {VIDEOS.map((video) => (
                  <div key={video.id} className="w-full flex-shrink-0 px-8">
                    <div className="mx-auto max-w-xs">
                      <VideoCard
                        video={video}
                        index={0}
                        onClick={() => setActiveVideo(video)}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
            
            {/* Dots indicator */}
            <div className="mt-6 flex justify-center gap-2">
              {VIDEOS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentSlide ? "w-6 bg-[#00FF80]" : "w-2 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Video Grid - Tablet & Desktop */}
        <div className="mx-auto mt-16 hidden max-w-5xl grid-cols-1 gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-4">
          {VIDEOS.map((video, i) => (
            <VideoCard
              key={video.id}
              video={video}
              index={i}
              onClick={() => setActiveVideo(video)}
            />
          ))}
        </div>

        {/* Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 flex max-w-3xl flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent sm:block" />
          <div className="flex flex-col items-center gap-1 sm:flex-row sm:items-baseline sm:gap-2">
            <span
              ref={counterRef}
              className="text-3xl font-bold text-[#00FF80]"
            >
              0+
            </span>
            <span className="text-center text-sm text-[#a0a0a0]">
              High-Performing Ads Delivered to GCC Brands
            </span>
          </div>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-white/10 to-transparent sm:block" />
        </motion.div>

        {/* Logo Marquee */}
        <LogoMarquee />
      </div>

      {/* Lightbox */}
      {activeVideo && (
        <Lightbox video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a1a0a] to-transparent" />
    </section>
  );
}
