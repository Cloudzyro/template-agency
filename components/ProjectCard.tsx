import Link from "next/link";
import WorkArt from "./WorkArt";
import type { Project } from "@/data/work";

export default function ProjectCard({ project, size = "md" }: { project: Project; size?: "lg" | "md" }) {
  return (
    <article className="group">
      <Link href={`/work/${project.slug}/`} className="block">
        <div className={`overflow-hidden rounded-[4px] bg-raised ${size === "lg" ? "aspect-[4/3] md:aspect-[16/10]" : "aspect-[4/3]"}`}>
          <WorkArt project={project} className="h-full w-full" />
        </div>
        <div className="mt-4 grid gap-1 md:grid-cols-[1fr_auto] md:gap-6">
          <h3 className={`${size === "lg" ? "text-[22px] md:text-[26px]" : "text-[20px]"} display-sm max-w-[28ch]`}>
            <span className="transition-colors group-hover:text-cobalt-deep">{project.client}</span>
          </h3>
          <p className="meta text-muted md:text-right">{project.year}</p>
        </div>
        <p className="mt-2 max-w-[52ch] text-ink-2">{project.title}</p>
        <p className="meta mt-3 text-muted">{project.disciplines.join(", ")}</p>
      </Link>
    </article>
  );
}
