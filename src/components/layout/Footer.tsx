import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = [
  { label: "Work", href: "#work" },
  { label: "Why Us", href: "#why-us" },
  { label: "Styles", href: "#styles" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#0a1a0a]">
      <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-8 sm:py-16">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="AIVideo"
              width={180}
              height={60}
              className="h-14 w-auto sm:h-16"
              priority
            />
          </Link>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-medium tracking-wide text-white/40 uppercase transition-colors duration-300 hover:text-[#00FF80]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/966554085657?text=Hi! I'm interested in creating AI-powered video ads for my brand. Can you help?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-xs font-semibold tracking-wide text-white/70 uppercase transition-all duration-300 hover:border-[#00FF80]/30 hover:text-[#00FF80]"
          >
            Get Started
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/[0.06] pt-8 md:flex-row md:justify-between">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} AIVideo. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            AI-powered ads for brands that move fast.
          </p>
        </div>
      </div>
    </footer>
  );
}
