type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <header className="max-w-3xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-brand)]">{eyebrow}</p>
      <h2 className="font-[var(--font-geist)] text-3xl font-extrabold leading-tight text-[var(--color-ink)] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-[var(--color-ink-muted)] sm:text-lg">{description}</p>
    </header>
  );
}
