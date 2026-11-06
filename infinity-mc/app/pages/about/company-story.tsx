import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

export function CompanyStory() {
  return (
    <section id="our-story" aria-labelledby="story-heading" className="mx-auto grid max-w-360 scroll-mt-8 gap-10 px-6 py-16 sm:px-12 sm:py-24 lg:grid-cols-2 lg:gap-20">
      <SectionHeading id="story-heading" eyebrow="WHO WE ARE" title="Support throughout your business journey." />
      <div className="space-y-5 text-base leading-8 text-[#78685c]">
        <p>Infinity works with new and established businesses, from formation and day-to-day management to protecting their interests and expanding internationally.</p>
        <p>Support includes company restructuring, back-office improvements, expansion financing, and helping overseas businesses establish a Malaysian presence.</p>
        <Link href="/#services" className="inline-flex items-center gap-4 text-sm font-semibold text-[#980e0d] hover:underline hover:underline-offset-4">
          Explore our business support <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
