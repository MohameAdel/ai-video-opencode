"use client";

import { motion } from "motion/react";

interface GlowingArrowProps {
  color?: string;
  size?: number;
  className?: string;
}

export function GlowingArrow({
  color = "#a855f7",
  size = 48,
  className = "",
}: GlowingArrowProps) {
  return (
    <motion.div
      className={className}
      initial={{ x: -10, opacity: 0.4 }}
      animate={{ x: 10, opacity: 1 }}
      transition={{
        duration: 1.2,
        repeat: Infinity,
        repeatType: "mirror",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        style={{
          filter: `drop-shadow(0 0 8px ${color}) drop-shadow(0 0 16px ${color}) drop-shadow(0 0 24px ${color})`,
        }}
      >
        <path
          d="M5 12h14M13 5l7 7-7 7"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.div>
  );
}