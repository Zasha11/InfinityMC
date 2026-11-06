import { SectionHeading } from "@/components/ui/section-heading";

export function PrincipalConsultant() {
  return (
    <section aria-labelledby="consultant-heading" className="mx-auto grid max-w-360 gap-12 px-6 py-16 sm:px-12 sm:py-24 lg:grid-cols-2 lg:gap-20">
      <SectionHeading
        id="consultant-heading"
        eyebrow="OUR FOUNDER"
        title="Stella Chong"
        description="Founder and Principal Consultant"
      />
      <div className="space-y-5 text-base leading-8 text-[#78685c]">
        <p>With a background in corporate finance, administration, and management across industries, Stella leads a multicultural team.</p>
        <p>She speaks English, Mandarin, and Bahasa Malaysia, supporting the firm's work with overseas investors in Malaysia.</p>
        <a
          href="https://www.imconsultants.com.my/companyProfile.html"
          className="inline-block text-sm font-semibold text-[#980e0d] underline underline-offset-4"
        >
          Read the original company profile
        </a>
      </div>
    </section>
  );
}
