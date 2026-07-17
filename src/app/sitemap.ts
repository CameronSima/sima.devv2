import { MetadataRoute } from "next";
import { projects } from "../projects";

const DOMAIN = "https://sima.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: DOMAIN,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${DOMAIN}/projects`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${DOMAIN}/skills`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${DOMAIN}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    ...projects.map((project) => ({
      url: `${DOMAIN}/project/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: project.slug === "warbirds" ? 0.9 : 0.7,
    })),
  ];
}
