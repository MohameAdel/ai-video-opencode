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
      <rect x="20" y="20" width="110" height="90" rx="10" fill="#131c35" stroke="#1e2d52" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="3" fill="#374151" transform="translate(30 28)"/>
      <circle cx="20" cy="12" r="3" fill="#374151" transform="translate(30 28)"/>
      <circle cx="28" cy="12" r="3" fill="#374151" transform="translate(30 28)"/>
      <rect x="40" y="52" width="40" height="6" rx="3" fill="#6366f1" opacity="0.8"/>
      <rect x="40" y="62" width="55" height="5" rx="2.5" fill="#4b5563"/>
      <rect x="40" y="71" width="48" height="5" rx="2.5" fill="#374151"/>
      <rect x="40" y="80" width="52" height="5" rx="2.5" fill="#ec4899" opacity="0.7"/>
      <rect x="40" y="89" width="38" height="5" rx="2.5" fill="#6366f1" opacity="0.5"/>
      <circle cx="145" cy="50" r="22" fill="#0e1628" stroke="#1e2d52" strokeWidth="1.5"/>
      <circle cx="145" cy="44" r="10" fill="#1a2444"/>
      <path d="M130 70 Q145 60 160 70" stroke="#374151" strokeWidth="1.5" fill="none"/>
      <circle cx="145" cy="44" r="7" fill="#2d3a5e"/>
      <circle cx="145" cy="41" r="3" fill="#6366f1" opacity="0.7"/>
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
      <circle cx="90" cy="65" r="48" fill="none" stroke="#1e2d52" strokeWidth="1.5" strokeDasharray="4 3"/>
      <circle cx="90" cy="65" r="32" fill="none" stroke="#1e2d52" strokeWidth="1"/>
      <rect x="74" y="49" width="32" height="32" rx="6" fill="#131c35" stroke="#2d3a6e" strokeWidth="1.5" transform="rotate(10 90 65)"/>
      <rect x="79" y="54" width="22" height="22" rx="4" fill="#1a2444"/>
      <circle cx="140" cy="100" r="12" fill="#131c35" stroke="#1e2d52" strokeWidth="1.5"/>
      <circle cx="140" cy="100" r="6" fill="#ec4899" opacity="0.5"/>
      <circle cx="45" cy="95" r="10" fill="#131c35" stroke="#1e2d52" strokeWidth="1.5"/>
      <circle cx="45" cy="95" r="5" fill="#6366f1" opacity="0.5"/>
      <circle cx="115" cy="30" r="8" fill="#131c35" stroke="#1e2d52" strokeWidth="1.5"/>
      <circle cx="115" cy="30" r="3.5" fill="#8b5cf6" opacity="0.6"/>
      <line x1="90" y1="17" x2="90" y2="30" stroke="#2d3a6e" strokeWidth="1" strokeDasharray="2 2"/>
      <polygon points="90,10 86,20 94,20" fill="#6366f1" opacity="0.6"/>
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
          <stop offset="0%" stopColor="#ec4899"/>
          <stop offset="100%" stopColor="#8b5cf6"/>
        </linearGradient>
        <linearGradient id="magnifyGrad" x1="125" y1="80" x2="165" y2="120" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#ec4899"/>
          <stop offset="100%" stopColor="#8b5cf6"/>
        </linearGradient>
      </defs>
      <circle cx="110" cy="60" r="38" fill="none" stroke="#1e2d52" strokeWidth="1.5"/>
      <polyline points="72,78 88,55 100,68 118,42 132,50" stroke="url(#analyticsGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="148" cy="92" r="22" fill="none" stroke="url(#magnifyGrad)" strokeWidth="3"/>
      <line x1="163" y1="107" x2="175" y2="119" stroke="url(#magnifyGrad)" strokeWidth="3.5" strokeLinecap="round"/>
      <circle cx="88" cy="55" r="4" fill="#ec4899"/>
      <circle cx="100" cy="68" r="4" fill="#a78bfa"/>
      <circle cx="118" cy="42" r="4" fill="#8b5cf6"/>
      <circle cx="132" cy="50" r="4" fill="#ec4899"/>
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
      <rect x="10" y="15" width="200" height="110" rx="10" fill="#0b1223" stroke="#1e2d52" strokeWidth="1.5"/>
      <circle cx="22" cy="26" r="3" fill="#374151"/>
      <circle cx="30" cy="26" r="3" fill="#374151"/>
      <circle cx="38" cy="26" r="3" fill="#374151"/>
      <polyline points="20,80 50,55 75,70 100,45 130,58 160,40 195,52" stroke="#6366f1" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"/>
      <rect x="220" y="15" width="110" height="50" rx="8" fill="#0b1223" stroke="#1e2d52" strokeWidth="1.5"/>
      <circle cx="232" cy="26" r="3" fill="#374151"/>
      <circle cx="240" cy="26" r="3" fill="#374151"/>
      <circle cx="248" cy="26" r="3" fill="#374151"/>
      <rect x="220" y="75" width="110" height="50" rx="8" fill="#0b1223" stroke="#1e2d52" strokeWidth="1.5"/>
      <circle cx="232" cy="86" r="3" fill="#374151"/>
      <circle cx="240" cy="86" r="3" fill="#374151"/>
      <circle cx="248" cy="86" r="3" fill="#374151"/>
      <circle cx="155" cy="88" r="24" fill="#131c35" stroke="#6366f1" strokeWidth="2.5" opacity="0.9"/>
      <circle cx="155" cy="88" r="14" fill="#1a2444" stroke="#8b5cf6" strokeWidth="1" opacity="0.6"/>
      <path d="M148 82 C150 76 160 76 162 82 C164 88 154 94 155 88 C156 82 168 82 168 88" stroke="#6366f1" strokeWidth="2" fill="none" strokeLinecap="round"/>
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
          <stop offset="0%" stopColor="#6366f1"/>
          <stop offset="100%" stopColor="#8b5cf6"/>
        </linearGradient>
        <linearGradient id="card2Grad" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#ec4899"/>
          <stop offset="100%" stopColor="#f97316"/>
        </linearGradient>
        <linearGradient id="card3Grad" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#1e3a8a"/>
          <stop offset="100%" stopColor="#1e2d52"/>
        </linearGradient>
        <linearGradient id="card4Grad" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="#374151"/>
          <stop offset="100%" stopColor="#1f2937"/>
        </linearGradient>
      </defs>
      <rect x="80" y="10" width="55" height="75" rx="10" fill="url(#card1Grad)" transform="rotate(-12 107 47)"/>
      <rect x="70" y="15" width="55" height="75" rx="10" fill="url(#card2Grad)" transform="rotate(-6 97 52)"/>
      <rect x="60" y="20" width="55" height="75" rx="10" fill="url(#card3Grad)" transform="rotate(0 87 57)"/>
      <rect x="50" y="25" width="55" height="75" rx="10" fill="url(#card4Grad)" transform="rotate(5 77 62)"/>
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
          <stop offset="0%" stopColor="#db90ff"/>
          <stop offset="100%" stopColor="#8acbff"/>
        </linearGradient>
      </defs>
      <path d="M30 130 L50 90 L70 105 L90 60 L110 75 L130 40 L150 20" fill="none" stroke="url(#scaleGrad)" strokeWidth="3" strokeLinecap="round" />
      <circle cx="30" cy="130" r="5" fill="#db90ff" />
      <circle cx="50" cy="90" r="5" fill="#db90ff" />
      <circle cx="70" cy="105" r="5" fill="#db90ff" />
      <circle cx="90" cy="60" r="5" fill="#de6aff" />
      <circle cx="110" cy="75" r="5" fill="#de6aff" />
      <circle cx="130" cy="40" r="5" fill="#de6aff" />
      <circle cx="150" cy="20" r="5" fill="#8acbff" />
      <rect x="10" y="135" width="160" height="8" rx="4" fill="#1e2d52" />
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
    title: "Expert Guidance",
    description: "Our team of AI specialists provides end-to-end support, from strategy development to campaign optimization.",
  },
  {
    icon: "setup",
    title: "Fast and Easy Setup",
    description: "Get started in minutes with our intuitive platform. No technical expertise required.",
  },
  {
    icon: "analytics",
    title: "Advanced Analytics",
    description: "Track performance in real-time with detailed insights and actionable recommendations.",
  },
  {
    icon: "integration",
    title: "Seamless Integration",
    description: "Connect with your existing tools and workflows through our powerful API.",
  },
  {
    icon: "customizable",
    title: "Customizable Solutions",
    description: "Tailor every aspect of your campaigns to match your brand identity and goals.",
  },
  {
    icon: "scale",
    title: "Scalable Infrastructure",
    description: "Grow without limits. Our infrastructure scales with your business needs.",
  },
];

const ICONS = {
  expert: ExpertGuidanceIllustration,
  setup: FastSetupIllustration,
  analytics: AdvancedAnalyticsIllustration,
  integration: SeamlessIntegrationIllustration,
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
      className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-gradient-to-br from-[#131c35] to-[#0b1223] p-6 transition-all duration-500 hover:border-white/20"
    >
      <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-sm" />
      
      <div className="absolute -bottom-4 left-1/2 h-6 w-3/4 -translate-x-1/2 rounded-full bg-[#6366f1]/20 blur-xl transition-all duration-500 group-hover:bg-[#6366f1]/40" />
      
      <div className="relative mb-4 flex justify-center">
        <div className="scale-75 sm:scale-100">
          <IconComponent width={140} height={110} />
        </div>
      </div>
      
      <h3 className="relative mb-2 text-center text-lg font-semibold text-white">
        {title}
      </h3>
      
      <p className="relative text-center text-sm leading-relaxed text-white/50">
        {description}
      </p>
      
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 transition-all duration-500 group-hover:ring-[#6366f1]/30" />
    </motion.div>
  );
}

interface GrowthSolutionsProps {
  title?: string;
  subtitle?: string;
  showCTA?: boolean;
}

export function GrowthSolutions({ 
  title = "Powerful growth solutions", 
  subtitle = "Everything you need to scale your advertising with AI.",
  showCTA = true 
}: GrowthSolutionsProps) {
  return (
    <section className="relative overflow-hidden bg-[#0d0d16] py-20 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0d0d16_70%)]" />
      
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-[#6366f1]/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-40 w-40 rounded-full bg-[#ec4899]/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/4 h-24 w-24 rounded-full bg-[#8b5cf6]/5 blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-8">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs font-semibold tracking-[0.25em] text-white/40 uppercase"
          >
            Solutions
          </motion.p>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-[1.1] tracking-[-0.02em]"
          >
            <span className="bg-gradient-to-r from-[#6366f1] via-[#ec4899] to-[#8b5cf6] bg-clip-text text-transparent">
              Powerful
            </span>
            <span className="ml-3 text-[#dcd8f2]">growth solutions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-lg text-lg text-white/50"
          >
            {subtitle}
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