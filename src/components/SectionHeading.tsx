type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-[2.1rem] leading-tight text-[#0d2c5f] sm:text-[2.5rem] md:text-[3.1rem]">
        {title}
      </h2>
      <div className="subtle-divider mt-5 max-w-24" />
      <p className="mt-5 max-w-2xl text-sm leading-7 text-[#123b73]/72 md:text-base">{description}</p>
    </div>
  );
}
