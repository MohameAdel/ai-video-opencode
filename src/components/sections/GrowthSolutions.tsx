"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/Button";

interface IconProps {
  width?: number;
  height?: number;
  className?: string;
}

export function ExpertGuidanceIllustration({
  width = 180,
  height = 150,
  className = "",
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 150"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="20" y="20" width="110" height="90" rx="10" fill="#000000" stroke="#03fb80" strokeWidth="1.5" />
      <circle cx="12" cy="12" r="3" fill="#03fb80" transform="translate(30 28)" />
      <circle cx="20" cy="12" r="3" fill="#03fb80" transform="translate(30 28)" />
      <circle cx="28" cy="12" r="3" fill="#03fb80" transform="translate(30 28)" />
      <rect x="40" y="52" width="40" height="6" rx="3" fill="#03fb80" opacity="0.8" />
      <rect x="40" y="62" width="55" height="5" rx="2.5" fill="#03fb80" />
      <rect x="40" y="71" width="48" height="5" rx="2.5" fill="#03fb80" />
      <rect x="40" y="80" width="52" height="5" rx="2.5" fill="#03fb80" opacity="0.7" />
      <rect x="40" y="89" width="38" height="5" rx="2.5" fill="#03fb80" opacity="0.5" />
      <circle cx="145" cy="50" r="22" fill="#000000" stroke="#03fb80" strokeWidth="1.5" />
      <circle cx="145" cy="44" r="10" fill="#000000" />
      <path d="M130 70 Q145 60 160 70" stroke="#03fb80" strokeWidth="1.5" fill="none" />
      <circle cx="145" cy="44" r="7" fill="#000000" />
      <circle cx="145" cy="41" r="3" fill="#03fb80" opacity="0.7" />
    </svg>
  );
}

export function FastSetupIllustration({
  width = 180,
  height = 150,
  className = "",
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 150"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="90" cy="65" r="48" fill="none" stroke="#03fb80" strokeWidth="1.5" strokeDasharray="4 3" />
      <circle cx="90" cy="65" r="32" fill="none" stroke="#03fb80" strokeWidth="1" />
      <rect x="74" y="49" width="32" height="32" rx="6" fill="#000000" stroke="#03fb80" strokeWidth="1.5" transform="rotate(10 90 65)" />
      <rect x="79" y="54" width="22" height="22" rx="4" fill="#000000" />
      <circle cx="140" cy="100" r="12" fill="#000000" stroke="#03fb80" strokeWidth="1.5" />
      <circle cx="140" cy="100" r="6" fill="#03fb80" opacity="0.5" />
      <circle cx="45" cy="95" r="10" fill="#000000" stroke="#03fb80" strokeWidth="1.5" />
      <circle cx="45" cy="95" r="5" fill="#03fb80" opacity="0.5" />
      <circle cx="115" cy="30" r="8" fill="#000000" stroke="#03fb80" strokeWidth="1.5" />
      <circle cx="115" cy="30" r="3.5" fill="#03fb80" opacity="0.6" />
      <line x1="90" y1="17" x2="90" y2="30" stroke="#03fb80" strokeWidth="1" strokeDasharray="2 2" />
      <polygon points="90,10 86,20 94,20" fill="#03fb80" opacity="0.6" />
    </svg>
  );
}

export function AdvancedAnalyticsIllustration({
  width = 180,
  height = 150,
  className = "",
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 150"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="analyticsGrad" x1="72" y1="60" x2="132" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#03fb80" />
          <stop offset="100%" stopColor="#03fb80" />
        </linearGradient>
        <linearGradient id="magnifyGrad" x1="125" y1="80" x2="165" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#03fb80" />
          <stop offset="100%" stopColor="#03fb80" />
        </linearGradient>
      </defs>
      <circle cx="110" cy="60" r="38" fill="none" stroke="#03fb80" strokeWidth="1.5" />
      <polyline points="72,78 88,55 100,68 118,42 132,50" stroke="url(#analyticsGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="148" cy="92" r="22" fill="none" stroke="url(#magnifyGrad)" strokeWidth="3" />
      <line x1="163" y1="107" x2="175" y2="119" stroke="url(#magnifyGrad)" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="88" cy="55" r="4" fill="#03fb80" />
      <circle cx="100" cy="68" r="4" fill="#03fb80" />
      <circle cx="118" cy="42" r="4" fill="#03fb80" />
      <circle cx="132" cy="50" r="4" fill="#03fb80" />
    </svg>
  );
}

export function SeamlessIntegrationIllustration({
  width = 340,
  height = 140,
  className = "",
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 340 140"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="10" y="15" width="200" height="110" rx="10" fill="#000000" stroke="#03fb80" strokeWidth="1.5" />
      <circle cx="22" cy="26" r="3" fill="#03fb80" />
      <circle cx="30" cy="26" r="3" fill="#03fb80" />
      <circle cx="38" cy="26" r="3" fill="#03fb80" />
      <polyline points="20,80 50,55 75,70 100,45 130,58 160,40 195,52" stroke="#03fb80" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      <rect x="220" y="15" width="110" height="50" rx="8" fill="#000000" stroke="#03fb80" strokeWidth="1.5" />
      <circle cx="232" cy="26" r="3" fill="#03fb80" />
      <circle cx="240" cy="26" r="3" fill="#03fb80" />
      <circle cx="248" cy="26" r="3" fill="#03fb80" />
      <rect x="220" y="75" width="110" height="50" rx="8" fill="#000000" stroke="#03fb80" strokeWidth="1.5" />
      <circle cx="232" cy="86" r="3" fill="#03fb80" />
      <circle cx="240" cy="86" r="3" fill="#03fb80" />
      <circle cx="248" cy="86" r="3" fill="#03fb80" />
      <circle cx="155" cy="88" r="24" fill="#000000" stroke="#03fb80" strokeWidth="2.5" opacity="0.9" />
      <circle cx="155" cy="88" r="14" fill="#000000" stroke="#03fb80" strokeWidth="1" opacity="0.6" />
      <path d="M148 82 C150 76 160 76 162 82 C164 88 154 94 155 88 C156 82 168 82 168 88" stroke="#03fb80" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function CustomizableSolutionsIllustration({
  width = 200,
  height = 140,
  className = "",
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 140"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="card1Grad" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#03fb80" />
          <stop offset="100%" stopColor="#03fb80" />
        </linearGradient>
        <linearGradient id="card2Grad" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#03fb80" />
          <stop offset="100%" stopColor="#03fb80" />
        </linearGradient>
        <linearGradient id="card3Grad" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#000000" />
          <stop offset="100%" stopColor="#000000" />
        </linearGradient>
        <linearGradient id="card4Grad" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#03fb80" />
          <stop offset="100%" stopColor="#03fb80" />
        </linearGradient>
      </defs>
      <rect x="80" y="10" width="55" height="75" rx="10" fill="url(#card1Grad)" transform="rotate(-12 107 47)" />
      <rect x="70" y="15" width="55" height="75" rx="10" fill="url(#card2Grad)" transform="rotate(-6 97 52)" />
      <rect x="60" y="20" width="55" height="75" rx="10" fill="url(#card3Grad)" transform="rotate(0 87 57)" />
      <rect x="50" y="25" width="55" height="75" rx="10" fill="url(#card4Grad)" transform="rotate(5 77 62)" />
    </svg>
  );
}

export function ScalableInfrastructureIllustration({
  width = 180,
  height = 150,
  className = "",
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 150"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="scaleGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#03fb80" />
          <stop offset="100%" stopColor="#03fb80" />
        </linearGradient>
      </defs>
      <path d="M30 130 L50 90 L70 105 L90 60 L110 75 L130 40 L150 20" fill="none" stroke="url(#scaleGrad)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="30" cy="130" r="5" fill="#03fb80" />
      <circle cx="50" cy="90" r="5" fill="#03fb80" />
      <circle cx="70" cy="105" r="5" fill="#03fb80" />
      <circle cx="90" cy="60" r="5" fill="#03fb80" />
      <circle cx="110" cy="75" r="5" fill="#03fb80" />
      <circle cx="130" cy="40" r="5" fill="#03fb80" />
      <circle cx="150" cy="20" r="5" fill="#03fb80" />
      <rect x="10" y="135" width="160" height="8" rx="4" fill="#03fb80" />
    </svg>
  );
}

export const Illustrations = {
  ExpertGuidance: ExpertGuidanceIllustration,
  FastSetup: FastSetupIllustration,
  AdvancedAnalytics: AdvancedAnalyticsIllustration,
  SeamlessIntegration: SeamlessIntegrationIllustration,
  CustomizableSolutions: CustomizableSolutionsIllustration,
  ScalableInfrastructure: ScalableInfrastructureIllustration,
};

const CARDS = [
  {
    icon: "expert",
    title: "Weeks of waiting",
    description: "Traditional production is slow and kills your momentum.",
  },
  {
    icon: "setup",
    title: "Burned budgets",
    description: "High costs with no guarantee of performance.",
  },

  {
    icon: "integration",
    title: "Unpredictable results",
    description: "Content that looks good but doesn’t convert.",
  },

];

function ImageIcon({ width = 140, height = 110, className = "" }: IconProps) {
  return (
    <img
      src="/media/icon1.png"
      alt="Weeks of waiting"
      width={width}
      height={height}
      className={className}
    />
  );
}

function BurnedBudgetsIcon({ width = 140, height = 110, className = "" }: IconProps) {
  return (
    <img
      src="/media/icon6.png"
      alt="Burned budgets"
      width={width}
      height={height}
      className={className}
    />
  );
}

function UnpredictableResultsIcon({ width = 140, height = 110, className = "" }: IconProps) {
  return (
    <img
      src="/media/icon7.png"
      alt="Unpredictable results"
      width={width}
      height={height}
      className={className}
    />
  );
}

const ICONS = {
  expert: ImageIcon,
  setup: BurnedBudgetsIcon,
  analytics: AdvancedAnalyticsIllustration,
  integration: UnpredictableResultsIcon,
  customizable: CustomizableSolutionsIllustration,
  scale: ScalableInfrastructureIllustration,
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: keyof typeof ICONS;
  index: number;
}

function FeatureCard({ title, description, icon, index }: FeatureCardProps) {
  const IconComponent = ICONS[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#0a0a0a] to-[#050505] p-6 transition-all duration-500 hover:border-white/20"
    >
      <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-sm" />

      <div className="absolute -bottom-4 left-1/2 h-6 w-3/4 -translate-x-1/2 rounded-full bg-[#03fb80]/10 blur-xl transition-all duration-500 group-hover:bg-[#03fb80]/20" />

      <div className="relative mb-4 flex justify-center">
        <div className="scale-75 sm:scale-100">
          <IconComponent width={140} height={110} />
        </div>
      </div>

      <h3 className="font-heading relative mb-2 text-center text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="font-body relative text-center text-sm leading-relaxed text-white/50">
        {description}
      </p>

      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover:ring-[#03fb80]/15" />
    </motion.div>
  );
}

interface GrowthSolutionsProps {
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
}

export function GrowthSolutions({
  title = "Traditional production is broken",
  subtitle = "",
  showCTA = true
}: GrowthSolutionsProps) {
  return (
    <section id="growth" className="relative overflow-hidden bg-[#000000] py-16 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#000000_70%)]" />

      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-[#03fb80]/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-[#03fb80]/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 h-24 w-24 rounded-full bg-[#03fb80]/3 blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="text-center">

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-[clamp(1.75rem,4vw,3.5rem)] font-bold leading-[1.15] tracking-[-0.02em]"
          >
            <span className="text-[#03fb80] text-[clamp(2rem,5vw,4.5rem)]">
              Traditional production
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-[clamp(1.5rem,3vw,2.5rem)] font-semibold text-white mt-6"
          >
            is broken. Here's why we're the fix.
          </motion.p>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((card, i) => (
            <FeatureCard
              key={card.title}
              title={card.title}
              description={card.description}
              icon={card.icon as keyof typeof ICONS}
              index={i}
            />
          ))}
        </div>

        {showCTA && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-16 text-center"
          >
            <Button href="#start" variant="primary" whatsapp>
              Get Started Today
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}