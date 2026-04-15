"use client";

import { motion } from "motion/react";

interface ChevronProps {
  custom: number;
  variants: import("motion/react").Variants;
  color?: string;
  size?: number;
}

export function Chevron({ custom, variants, color = "#3b82f6", size = 40 }: ChevronProps) {
  return (
    <motion.svg
      width={size}
      height={size * 1.5}
      viewBox="0 0 40 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      custom={custom}
      variants={variants}
      initial="initial"
      animate="animate"
      className="drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
    >
      <path
        d="M5 5L35 30L5 55"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}