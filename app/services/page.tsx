import type { Metadata } from "next";
import Link from "next/link";
import PageIntro from "@/components/PageIntro";
import SheetHead from "@/components/SheetHead";
import { engagement, process, services } from "@/data/studio";
import { projects } from "@/data/work";

export const metadata: Metadata = {
  title: "Services",
  description: "Brand identity, packaging, wayfinding, product design and websites, and how a project with us runs.",
  alternates: { canonical: "/services/" },
};

const serviceWork: Record<string, string[]> = {
  identity: ["Identity"],
  packaging: ["Packaging"],
  wayfinding: ["Wayfinding", "Signage"],
  product: ["Product design"],
  engineering: ["Website", "Engineering"],
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        label="Services"
        title="Five disciplines, one table"
        intro="Most projects mix two or three of these. A wayfinding job needs lettering, a product needs writing, packaging needs a print run that works. We staff each project with the people it needs."
      />

      <section aria-label="Services" className="wrap mt-16 md:mt-24">
        {services.map((s) => {
          const related = projects.filter((p) => p.disciplines.some((d) => serviceWork[s.slug]?.includes(d)));
          return (
            <div id={s.slug} key={s.slug} className="grid scroll-mt-8 gap-6 border-t border-ink py-10 md:grid-cols-12 md:gap-8">
              <h2 className="display-sm text-[30px] md:col-span-4 md:text-[36px]">{s.name}</h2>
              <div className="md:col-span-4">
                <p className="text-[18px] leading-[28px]">{s.summary}</p>
                {related.length > 0 && (
                  <p className="mt-5 text-[15px] text-muted">
                    See{" "}
                    {related.map((p, i) => (
                      <span key={p.slug}>
                        {i > 0 && (i === related.length - 1 ? " and " : ", ")}
                        <Link href={`/work/${p.slug}/`} className="link text-ink-2">
                          {p.client}
                        </Link>
                      </span>
                    ))}
                  </p>
                )}
              </div>
              <ul className="md:col-span-4">
                {s.includes.map((item) => (
                  <li key={item} className="border-b border-line py-2.5 text-ink-2 first:border-t">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>

      <section id="process" aria-labelledby="process-title" className="wrap mt-24 scroll-mt-8 md:mt-32">
        <SheetHead id="process-title" title="How a project runs" note="A typical 4 month project" />
        <ol className="mt-10">
          {process.map((step, i) => (
            <li key={step.name} className="grid gap-3 border-b border-line py-8 md:grid-cols-12 md:gap-8">
              <p className="meta text-muted md:col-span-2">{step.weeks}</p>
              <h3 className="display-sm text-[28px] md:col-span-3">
                <span className="text-muted">{i + 1}</span> {step.name}
              </h3>
              <p className="max-w-[60ch] text-[17px] leading-[27px] text-ink-2 md:col-span-7">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="engage" className="wrap mt-24 md:mt-32">
        <SheetHead id="engage" title="Ways to work with us" />
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {engagement.map((e) => (
            <div key={e.name}>
              <h3 className="display-sm text-[24px]">{e.name}</h3>
              <p className="mt-3 text-ink-2">{e.text}</p>
            </div>
          ))}
        </div>
        <Link href="/contact/" className="btn btn-primary mt-12">
          Send a brief
        </Link>
      </section>
    </>
  );
}
