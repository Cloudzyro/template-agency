export default function PageIntro({ label, title, intro }: { label: string; title: string; intro?: string }) {
  return (
    <section className="wrap pt-16 md:pt-24">
      <p className="meta text-muted">{label}</p>
      <h1 className="display mt-4 max-w-[20ch] text-[40px] md:text-[64px]">{title}</h1>
      {intro && <p className="mt-8 max-w-[56ch] text-[18px] leading-[28px] text-ink-2">{intro}</p>}
    </section>
  );
}
