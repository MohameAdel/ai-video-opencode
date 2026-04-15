"use client";

import { motion } from "motion/react";

interface NeonArrowSequenceProps {
  count?: number;
  color?: string;
  size?: number;
  className?: string;
}

export function NeonArrowSequence({
  count = 10,
  color = "#3b82f6",
  size = 40,
  className = "",
}: NeonArrowSequenceProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-0.5 ${className}`}
    >
      {[...Array(count)].map((_, i) => (
        <motion.svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 40 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0.2, filter: "brightness(0.5) blur(1px)" }}
          animate={{
            opacity: [0.2, 1, 0.2],
            filter: [
              "brightness(0.5) blur(1px)",
              "brightness(1.5) blur(0px)",
              "brightness(0.5) blur(1px)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
          className="drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
        >
          <path
            d="M5 5L20 35L35 5"
            stroke={color}
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      ))}
    </div>
  );
}