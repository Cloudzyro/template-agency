import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import SheetHead from "@/components/SheetHead";
import WorkArt from "@/components/WorkArt";
import { home } from "@/data/site";
import { clients, process, services, team } from "@/data/studio";
import { getProject, projects } from "@/data/work";

export default function HomePage() {
  const hero = getProject(home.heroProject) ?? projects[0];
  const selected = projects.filter((p) => p.slug !== hero.slug).slice(0, 4);

  return (
    <>
      <section className="wrap pt-16 md:pt-24">
        <h1 className="display max-w-[22ch] text-[40px] md:text-[64px] lg:text-[76px]">{home.headline}</h1>
        <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-4">
            <p className="max-w-[36ch] text-[18px] leading-[28px] text-ink-2">{home.intro}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={home.primary.href} className="btn btn-primary">
                {home.primary.label}
              </Link>
              <Link href={home.secondary.href} className="btn btn-secondary">
                {home.secondary.label}
              </Link>
            </div>
          </div>
          <figure className="md:col-span-8">
            <Link href={`/work/${hero.slug}/`} className="group block">
              <div className="aspect-[4/3] overflow-hidden rounded-[4px] bg-raised md:aspect-[16/10]">
                <WorkArt project={hero} className="h-full w-full" />
              </div>
              <figcaption className="mt-3 flex flex-wrap justify-between gap-2">
                <span className="text-[15px] transition-colors group-hover:text-cobalt-deep">
                  {hero.client}, {hero.disciplines.slice(0, 2).join(" and ").toLowerCase()}
                </span>
                <span className="meta text-muted">{hero.year}</span>
              </figcaption>
            </Link>
          </figure>
        </div>
      </section>

      <section aria-labelledby="selected" className="wrap mt-28 md:mt-40">
        <SheetHead id="selected" title={home.selectedTitle} note={`${projects.length} case studies`} />
        <div className="mt-10 grid gap-x-8 gap-y-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <ProjectCard project={selected[0]} size="lg" />
          </div>
          <div className="md:col-span-5 md:pt-32">
            <ProjectCard project={selected[1]} />
          </div>
          <div className="md:col-span-5">
            <ProjectCard project={selected[2]} />
          </div>
          <div className="md:col-span-7 md:pt-24">
            <ProjectCard project={selected[3]} size="lg" />
          </div>
        </div>
        <p className="mt-12">
          <Link href="/work/" className="link text-[17px]">
            All case studies
          </Link>
        </p>
      </section>

      <section aria-labelledby="services" className="wrap mt-28 md:mt-40">
        <SheetHead id="services" title={home.servicesTitle} note={`${services.length} disciplines`} />
        <ul className="mt-4">
          {services.map((s) => (
            <li key={s.slug} className="grid gap-2 border-b border-line py-6 md:grid-cols-12 md:gap-8">
              <h3 className="display-sm text-[24px] md:col-span-5 md:text-[30px]">
                <Link href={`/services/#${s.slug}`} className="transition-colors hover:text-cobalt-deep">
                  {s.name}
                </Link>
              </h3>
              <p className="max-w-[56ch] text-ink-2 md:col-span-7 md:pt-1">{s.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="process" className="wrap mt-28 md:mt-40">
        <SheetHead id="process" title={home.processTitle} note="Most projects take 3 to 9 months" />
        <ol className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {process.map((step, i) => (
            <li key={step.name} className="border-t border-line pt-5">
              <p className="meta text-muted">{step.weeks}</p>
              <h3 className="display-sm mt-4 text-[28px]">
                <span className="text-muted">{i + 1}</span> {step.name}
              </h3>
              <p className="mt-3 text-ink-2">{step.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="clients" className="wrap mt-28 md:mt-40">
        <SheetHead id="clients" title={home.clientsTitle} note={`${clients.length} of them`} />
        <ul className="mt-8 grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
          {clients.map((c) => (
            <li key={c.name} className="flex items-baseline justify-between gap-4 border-b border-line py-4">
              <span className="text-[19px]">{c.name}</span>
              <span className="meta shrink-0 text-muted">{c.sector}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="team" className="wrap mt-28 md:mt-40">
        <SheetHead id="team" title={home.teamTitle} note={`${team.length} people`} />
        <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="display-sm max-w-[20ch] text-[28px] md:text-[34px]">{home.teamText}</p>
            <p className="mt-8">
              <Link href="/studio/" className="link text-[17px]">
                Meet the studio
              </Link>
            </p>
          </div>
          <ul className="md:col-span-7">
            {team.slice(0, 6).map((m) => (
              <li key={m.name} className="grid grid-cols-[1fr_auto] gap-4 border-b border-line py-3 first:border-t">
                <span>
                  {m.name}
                  <span className="text-muted">, {m.role}</span>
                </span>
                <span className="meta text-muted">Since {m.since}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="contact" className="wrap mt-28 md:mt-40">
        <div className="border-t border-ink pt-12 md:grid md:grid-cols-12 md:gap-8">
          <h2 id="contact" className="display text-[40px] md:col-span-7 md:text-[64px]">
            {home.contactTitle}
          </h2>
          <div className="mt-6 md:col-span-5 md:mt-3">
            <p className="max-w-[40ch] text-[18px] leading-[28px] text-ink-2">{home.contactText}</p>
            <Link href="/contact/" className="btn btn-primary mt-8">
              Send a brief
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
