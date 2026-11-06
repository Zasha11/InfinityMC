import { Compass, Handshake, MessagesSquare } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const values = [
  { icon: MessagesSquare, title: "Personal attention", description: "Understanding each client's concerns and tailoring support to their needs." },
  { icon: Compass, title: "Professional commitment", description: "Combining business expertise with information technology and adaptable approaches." },
  { icon: Handshake, title: "Trust and quality", description: "Building lasting relationships through the quality of the work delivered." },
];

export function CompanyValues() {
  return (
    <section aria-labelledby="values-heading" className="border-y border-(--brand-gold-border) bg-(--brand-gold-soft)">
      <div className="mx-auto max-w-360 px-6 py-16 sm:px-12 sm:py-24">
        <SectionHeading id="values-heading" eyebrow="WHAT GUIDES US" title="Good advice starts with good principles." />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {values.map(({ icon: Icon, title, description }) => (
            <article key={title} className="border-t border-gold/50 pt-7">
              <Icon size={30} strokeWidth={1.4} className="mb-6 text-[#980e0d]" aria-hidden="true" />
              <h3 className="font-[Georgia,serif] text-2xl leading-snug">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-[#78685c]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
