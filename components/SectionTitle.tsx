export default function SectionTitle({
  eyebrow,
  title,
  subtitle
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-xs uppercase tracking-[0.35em] text-zinc-400">{eyebrow}</p>
      <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300 md:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
