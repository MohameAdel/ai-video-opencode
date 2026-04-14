"use client";

import { motion } from "motion/react";
import { Sparkles } from "@/components/ui/sparkles";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const COMPARISON = [
  {
    title: "Others",
    highlight: false,
    items: [
      "Just tools",
      "Generic outputs",
      "DIY effort",
      "No strategy",
    ],
  },
  {
    title: "Us",
    highlight: true,
    items: [
      "Full-service solution",
      "Custom outputs",
      "We handle everything",
      "Growth strategy",
    ],
  },
];

export default function PricingSection() {
  return (
    <div className="min-h-screen mx-auto relative bg-black overflow-x-hidden">
      {/* Sparkles Background */}
      <div className="absolute top-0 h-96 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#ffffff2c_1px,transparent_1px),linear-gradient(to_bottom,#3a3a3a01_1px,transparent_1px)] bg-[size:70px_80px]" />
        <Sparkles density={1800} speed={1} color="#FFFFFF" className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]" />
      </div>

      {/* Background glow */}
      <div
        className="absolute top-0 left-[10%] right-[10%] w-[80%] h-full z-0"
        style={{
          backgroundImage: `radial-gradient(circle at center, #206ce8 0%, transparent 70%)`,
          opacity: 0.6,
          mixBlendMode: "multiply",
        }}
      />

      {/* Header */}
      <article className="text-center mb-16 pt-32 max-w-3xl mx-auto space-y-6 relative">
        <h2 className="text-5xl font-bold text-white leading-tight flex flex-wrap justify-center gap-x-3">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
            }}
          >
            AI creates content We create
          </VerticalCutReveal>
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.15}
            staggerFrom="first"
            reverse={true}
            containerClassName="justify-center"
            transition={{
              type: "spring",
              stiffness: 250,
              damping: 40,
            }}
            className="text-green-400"
          >
            revenue
          </VerticalCutReveal>
        </h2>
      </article>

      {/* Comparison Grid */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 pb-32">
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {COMPARISON.map((column, colIndex) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: colIndex * 0.15 }}
              className={column.highlight ? "relative" : ""}
            >
              {/* Glow effect behind Us card */}
              {column.highlight && (
                <div className="absolute -inset-4 rounded-2xl bg-green-500/10 blur-2xl" />
              )}
              <Card
                className={`h-full transition-all duration-500 ${column.highlight
                    ? "bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900 shadow-[0_0_60px_-15px_rgba(34,197,94,0.3)] z-20 ring-1 ring-green-500/40 border-green-500/20"
                    : "bg-gradient-to-b from-neutral-800/50 via-neutral-900/50 to-neutral-800/50 z-10 border-neutral-700/50"
                  }`}
              >
                <CardHeader className={`text-left pb-6 ${column.highlight ? "pt-8 px-8" : "pt-8 px-8"}`}>
                  <h3 className={`text-3xl font-bold ${column.highlight ? 'text-green-400' : 'text-neutral-500'}`}>
                    {column.title}
                  </h3>
                </CardHeader>
                <CardContent className={`space-y-5 ${column.highlight ? "px-8 pb-8" : "px-8 pb-8"}`}>
                  {column.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: colIndex * 0.1 + itemIndex * 0.08 }}
                      className="flex items-center gap-4"
                    >
                      <span className={`h-2 w-2 rounded-full flex-shrink-0 ${column.highlight ? 'bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]' : 'bg-neutral-600'}`} />
                      <span className={`text-base ${column.highlight ? 'text-white font-medium' : 'text-neutral-500'}`}>
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button href="#start" variant="primary" whatsapp>
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
