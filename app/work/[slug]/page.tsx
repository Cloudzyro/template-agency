import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SheetHead from "@/components/SheetHead";
import WorkArt, { canvasColor } from "@/components/WorkArt";
import { getProject, projects } from "@/data/work";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.client} case study`,
    description: p.summary,
    alternates: { canonical: `/work/${p.slug}/` },
    openGraph: { title: `${p.client}: ${p.title}`, description: p.summary, url: `/work/${p.slug}/` },
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();
  const index = projects.indexOf(p);
  const next = projects[(index + 1) % projects.length];

  const facts = [
    { label: "Client", value: p.client },
    { label: "Sector", value: p.sector },
    { label: "Location", value: p.location },
    { label: "Year", value: String(p.year) },
    { label: "Length", value: p.duration },
    { label: "Disciplines", value: p.disciplines.join(", ") },
  ];

  return (
    <article>
      <header className="wrap pt-12 md:pt-20">
        <nav aria-label="Breadcrumb" className="meta text-muted">
          <Link href="/work/" className="link">
            Work
          </Link>
          <span aria-hidden="true"> / </span>
          <span>{p.client}</span>
        </nav>
        <h1 className="display mt-6 max-w-[20ch] text-[38px] md:text-[60px]">{p.title}</h1>
        <p className="mt-8 max-w-[58ch] text-[18px] leading-[28px] text-ink-2">{p.summary}</p>
      </header>

      <div className="wrap mt-12 md:mt-16">
        <div className="aspect-[4/3] overflow-hidden rounded-[4px] md:aspect-[16/8]" style={{ background: canvasColor(p) }}>
          <WorkArt project={p} fit className="h-full w-full" />
        </div>
        <dl className="mt-6 grid grid-cols-2 gap-x-8 gap-y-5 sm:grid-cols-3 lg:grid-cols-6">
          {facts.map((f) => (
            <div key={f.label} className="border-t border-line pt-3">
              <dt className="meta text-muted">{f.label}</dt>
              <dd className="mt-1 text-[15px]">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section aria-labelledby="challenge" className="wrap mt-24 md:mt-32">
        <SheetHead id="challenge" title="The challenge" />
        <div className="mt-8 grid gap-8 md:grid-cols-12">
          <div className="space-y-5 text-[19px] leading-[30px] md:col-span-8 md:col-start-5">
            {p.challenge.map((para) => (
              <p key={para.slice(0, 24)}>{para}</p>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="approach" className="wrap mt-24 md:mt-32">
        <SheetHead id="approach" title="Our approach" />
        <div className="mt-8 grid gap-8 md:grid-cols-12">
          <p className="text-[19px] leading-[30px] md:col-span-8 md:col-start-5">{p.approach.intro}</p>
          <ol className="grid gap-8 md:col-span-8 md:col-start-5 md:grid-cols-2">
            {p.approach.steps.map((s, i) => (
              <li key={s.title} className="border-t border-line pt-4">
                <p className="meta text-muted">Step {i + 1}</p>
                <h3 className="display-sm mt-2 text-[22px]">{s.title}</h3>
                <p className="mt-2 text-ink-2">{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="md:col-span-8 md:col-start-5">
            <h3 className="meta text-muted">What we delivered</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {p.deliverables.map((d) => (
                <li key={d} className="rounded-[4px] border border-line bg-card px-3 py-1.5 text-[14px]">
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="results" className="wrap mt-24 md:mt-32">
        <SheetHead id="results" title="What changed" note="Sample figures for this template" />
        <dl className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {p.results.map((r) => (
            <div key={r.label}>
              <dt className="sr-only">{r.label}</dt>
              <dd>
                <span className="display block text-[56px] tabular-nums md:text-[72px]">{r.value}</span>
                <span className="mt-3 block max-w-[30ch] text-ink-2">{r.label}</span>
              </dd>
            </div>
          ))}
        </dl>
        {p.quote && (
          <figure className="mt-20 grid gap-6 md:grid-cols-12 md:gap-8">
            <blockquote className="display-sm text-[28px] md:col-span-8 md:col-start-5 md:text-[36px]">
              <p>&ldquo;{p.quote.text}&rdquo;</p>
            </blockquote>
            <figcaption className="md:col-span-8 md:col-start-5">
              {p.quote.name}
              <span className="text-muted">, {p.quote.role}</span>
            </figcaption>
          </figure>
        )}
      </section>

      <section aria-labelledby="credits" className="wrap mt-24 md:mt-32">
        <SheetHead id="credits" title="Credits" />
        <dl className="mt-4">
          {p.credits.map((c) => (
            <div key={c.role} className="grid gap-1 border-b border-line py-4 md:grid-cols-12 md:gap-8">
              <dt className="text-muted md:col-span-4">{c.role}</dt>
              <dd className="md:col-span-8">{c.names}</dd>
            </div>
          ))}
        </dl>
      </section>

      <nav aria-label="Next project" className="wrap mt-24 md:mt-32">
        <Link href={`/work/${next.slug}/`} className="group grid gap-6 border-t border-ink pt-6 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="meta text-muted">Next project</p>
            <p className="display mt-3 text-[34px] transition-colors group-hover:text-cobalt-deep md:text-[48px]">{next.client}</p>
            <p className="mt-3 max-w-[40ch] text-ink-2">{next.title}</p>
          </div>
          <div className="aspect-[16/9] overflow-hidden rounded-[4px] md:col-span-7" style={{ background: canvasColor(next) }}>
            <WorkArt project={next} fit className="h-full w-full" />
          </div>
        </Link>
      </nav>
    </article>
  );
}
