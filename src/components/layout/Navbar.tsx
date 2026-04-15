"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Our Work", href: "#work" },
  { label: "The Challenge", href: "#growth" },
  { label: "We VS Them", href: "#pricing" },
  { label: "Solutions", href: "#ai-experience" },
  { label: "Our Approach", href: "#styles" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? "bg-[#000000]/95 backdrop-blur-xl border-b border-[#03fb80]/10 shadow-[0_4px_30px_rgba(3,251,128,0.03)]"
        : "bg-[#000000]/80 backdrop-blur-md"
        }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-4 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/logo.png"
            alt="Flux"
            width={180}
            height={60}
            className="h-14 w-auto sm:h-[60px]"
            priority
          />
        </Link>

        {/* Nav Links */}
        <div className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body relative text-[13px] font-semibold tracking-wide text-white/70 uppercase transition-colors duration-300 hover:text-white group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#03fb80] transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <a
          href="https://wa.me/966554085657?text=Hi! I'm interested in creating AI-powered video ads for my brand. Can you help?"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body hidden md:inline-flex items-center gap-2.5 rounded-full bg-[#03fb80] px-6 py-2.5 text-[13px] font-bold tracking-wide text-[#000000] uppercase transition-all duration-300 hover:bg-[#03fb80] hover:shadow-[0_0_30px_rgba(3,251,128,0.25)] hover:scale-[1.03] active:scale-[0.98]"
        >
          Get Started
        </a>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex md:hidden flex-col gap-1.5 p-2"
        >
          <span className={`block h-0.5 w-5 bg-white/80 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-5 bg-white/80 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-white/80 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${mobileOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col gap-1 px-4 pb-6 sm:px-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-body py-3 text-sm font-semibold tracking-wide text-white/70 uppercase border-b border-white/5 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/966554085657?text=Hi! I'm interested in creating AI-powered video ads for my brand. Can you help?"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="font-body mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-[#03fb80] px-6 py-3 text-sm font-bold tracking-wide text-[#000000] uppercase"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
