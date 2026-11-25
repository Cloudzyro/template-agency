import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import SheetHead from "@/components/SheetHead";
import { clients, studioPage, team, values } from "@/data/studio";

export const metadata: Metadata = {
  title: "Studio",
  description: "The people at Plumbline, how we work and the organizations we've worked with.",
  alternates: { canonical: "/studio/" },
};

export default function StudioPage() {
  return (
    <>
      <PageIntro label="Studio" title={studioPage.title} intro={studioPage.intro} />

      <section aria-labelledby="values" className="wrap mt-24 md:mt-32">
        <SheetHead id="values" title="How we work" />
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {values.map((v) => (
            <div key={v.title}>
              <h3 className="display-sm text-[24px]">{v.title}</h3>
              <p className="mt-3 text-ink-2">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="people" className="wrap mt-24 md:mt-32">
        <SheetHead id="people" title="People" note={`${team.length} of us`} />
        <ul className="mt-4">
          {team.map((m) => (
            <li key={m.name} className="grid grid-cols-[1fr_auto] gap-x-6 gap-y-1 border-b border-line py-5 md:grid-cols-12 md:gap-8">
              <span className="display-sm text-[22px] md:col-span-5 md:text-[26px]">{m.name}</span>
              <span className="col-start-1 text-ink-2 md:col-span-5 md:col-start-6 md:pt-1">{m.role}</span>
              <span className="meta col-start-2 row-start-1 text-muted md:col-span-2 md:col-start-11 md:pt-1.5 md:text-right">
                Since {m.since}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="clients" className="wrap mt-24 md:mt-32">
        <SheetHead id="clients" title="Clients" note="A selection since 2014" />
        <ul className="mt-8 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((c) => (
            <li key={c.name} className="flex items-baseline justify-between gap-4 border-b border-line py-4">
              <span className="text-[19px]">{c.name}</span>
              <span className="meta shrink-0 text-muted">{c.sector}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
