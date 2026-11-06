import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export function AboutHero() {
  return (
    <section aria-labelledby="about-heading" className="border-b border-(--brand-gold-border) bg-[linear-gradient(120deg,#fffdf9,var(--brand-gold-soft))]">
      <div className="mx-auto max-w-360 px-6 py-12 sm:px-12 sm:py-20">
        <nav aria-label="Breadcrumb" className="mb-12 text-xs text-[#78685c]">
          <ol className="flex gap-3">
            <li><Link href="/" className="hover:text-[#980e0d]">Home</Link></li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">About us</li>
          </ol>
        </nav>
        <div className="grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="mb-5 text-xs font-semibold tracking-[0.18em] text-gold-dark">ABOUT INFINITY</p>
            <h1 id="about-heading" className="max-w-200 font-[Georgia,serif] text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Business is a journey.<br /><span className="text-[#980e0d]">Let’s move forward together.</span>
            </h1>
            <p className="mt-7 max-w-150 text-base leading-8 text-[#78685c]">
              One place for corporate secretarial, accounting, taxation, intellectual property, and business advisory support.
            </p>
            <a href="#our-story" className="mt-8 inline-flex items-center gap-5 border-b border-gold pb-2 text-sm font-semibold text-[#980e0d]">
              Get to know us <ArrowDown size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="relative border border-gold/40 bg-[#980e0d] p-8 text-[#fff6eb] sm:p-12">
            <span aria-hidden="true" className="block font-[Georgia,serif] text-8xl leading-none text-gold-light">∞</span>
            <p className="mt-8 font-[Georgia,serif] text-3xl leading-snug">A clearer perspective.<br />A lasting partnership.</p>
            <div className="mt-10 flex items-end justify-between gap-4 border-t border-white/25 pt-6">
              <p className="text-xs leading-6 tracking-widest">INFINITY<br />MANAGEMENT CONSULTANTS</p>
              <ArrowUpRight size={28} className="text-gold-light" aria-hidden="true" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
