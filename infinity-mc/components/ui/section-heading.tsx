interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  id: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, id, description }: SectionHeadingProps) {
  return (
    <div className="max-w-180">
      <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-gold-dark">{eyebrow}</p>
      <h2 id={id} className="font-[Georgia,serif] text-3xl leading-tight tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-5 text-base leading-8 text-[#78685c]">{description}</p>}
    </div>
  );
}
