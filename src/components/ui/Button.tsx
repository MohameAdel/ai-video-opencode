"use client";

import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary";
  href: string;
  children: React.ReactNode;
  className?: string;
  whatsapp?: boolean;
};

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  whatsapp = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold tracking-wide uppercase transition-all duration-300";

  const variants = {
    primary:
      "bg-[#00FF80] text-[#0d0d0d] hover:bg-[#00e673] hover:scale-[1.03]",
    secondary:
      "border border-white/30 text-white hover:border-white/70 hover:scale-[1.03]",
  };

  if (whatsapp) {
    const phoneNumber = "966554085657";
    const message = "Hi! I'm interested in creating AI-powered video ads for my brand. Can you help?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    return (
      <a 
        href={whatsappUrl}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
