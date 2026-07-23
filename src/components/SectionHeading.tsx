type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs uppercase tracking-[0.35em] text-[#2b6de0]">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-4xl leading-tight text-[#0d2c5f] md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-sm leading-7 text-[#123b73]/74 md:text-base">{description}</p>
    </div>
  );
}
