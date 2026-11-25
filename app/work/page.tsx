import type { Metadata } from "next";
import PageIntro from "@/components/PageIntro";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Case studies in identity, packaging, wayfinding, product design and websites.",
  alternates: { canonical: "/work/" },
};

export default function WorkPage() {
  return (
    <>
      <PageIntro
        label="Work"
        title="Case studies from 2024 to 2026"
        intro="Each one shows what the client needed, how we went about it and what changed after. Photos of the finished work go where the drawings are."
      />
      <div className="wrap mt-16 grid gap-x-8 gap-y-16 md:mt-24 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </>
  );
}
