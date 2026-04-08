"use client"

import { motion, type Variants } from "motion/react"
import { useRef, type ReactNode } from "react"

interface TimelineContentProps {
  animationNum?: number
  className?: string
  children: ReactNode
}

const revealVariants: Variants = {
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.4,
      duration: 0.5,
    },
  }),
  hidden: {
    filter: "blur(10px)",
    y: -20,
    opacity: 0,
  },
}

export function TimelineContent({
  animationNum = 0,
  className = "",
  children,
}: TimelineContentProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={revealVariants}
      custom={animationNum}
      className={className}
    >
      {children}
    </motion.div>
  )
}
