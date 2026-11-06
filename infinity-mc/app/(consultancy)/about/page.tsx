import type { Metadata } from "next";
import { AboutHero } from "@/app/pages/about/about-hero";
import { CompanyStory } from "@/app/pages/about/company-story";
import { CompanyValues } from "@/app/pages/about/company-values";
import { PrincipalConsultant } from "@/app/pages/about/principal-consultant";

export const metadata: Metadata = {
  title: "About us | Infinity Management Consultants",
  description: "Company profile, services, values, and founder of Infinity Management Consultants in Malaysia.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 bg-[#fffdf9] text-[#38251b] [&_a:focus-visible]:outline-3 [&_a:focus-visible]:outline-gold-dark [&_a:focus-visible]:outline-offset-4">
      <AboutHero />
      <PrincipalConsultant />
      <CompanyStory />
      <CompanyValues />
    </main>
  );
}
