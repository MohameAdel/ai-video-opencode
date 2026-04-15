import Link from "next/link";
import Image from "next/image";

const FOOTER_LINKS = [
  { label: "Work", href: "#work" },
  { label: "The Challenge", href: "#growth" },
  { label: "We VS Them", href: "#pricing" },
  { label: "Solutions", href: "#ai-experience" },
  { label: "Our Approach", href: "#styles" },
  { label: "Results", href: "#results" },
  { label: "FAQ", href: "#faq" },
  { label: "Testimonials", href: "#testimonials" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-[#050505]">
      <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-8 sm:py-18">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Flux"
              width={200}
              height={66}
              className="h-16 w-auto sm:h-[72px]"
              priority
            />
          </Link>

          {/* Links */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            {FOOTER_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-body text-sm font-medium tracking-wide text-white/50 uppercase transition-colors duration-300 hover:text-[#03fb80]"
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
            className="font-body inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-semibold tracking-wide text-white uppercase transition-all duration-300 hover:border-[#03fb80]/50 hover:bg-[#03fb80]/10 hover:text-[#03fb80]"
          >
            Get Started
          </a>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center gap-4 border-t border-white/[0.06] pt-8 md:flex-row md:justify-between">
          <p className="font-body text-[13px] text-white/35">
            &copy; {new Date().getFullYear()} Flux. All rights reserved.
          </p>
          <p className="font-body text-[13px] text-white/35">
            AI-powered ads for brands that move fast.
          </p>
        </div>
      </div>
    </footer>
  );
}
