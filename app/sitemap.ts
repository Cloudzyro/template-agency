import type { MetadataRoute } from "next";
import { projects } from "@/data/work";
import { site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/work/", "/services/", "/studio/", "/contact/"].map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : 0.7,
  }));
  const work = projects.map((p) => ({
    url: `${site.url}/work/${p.slug}/`,
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));
  return [...pages, ...work];
}
