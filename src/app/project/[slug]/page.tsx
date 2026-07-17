import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import WarbirdsShowcase from "@/components/WarbirdsShowcase";
import { getProjectFromSlug, projects } from "@/projects";

export const generateStaticParams = () =>
  projects.map((project) => ({ slug: project.slug }));

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProjectFromSlug(params.slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.descriptionBrief,
  };
}

export default function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectFromSlug(params.slug);
  if (!project) {
    notFound();
  }

  const isWarbirds = project.slug === "warbirds";

  return (
    <div className="pb-28 pt-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-sm text-slate-400 transition-colors hover:text-white"
          >
            <span aria-hidden>←</span> All projects
          </Link>

          <div className="mt-8 grid gap-12 lg:grid-cols-[1fr_320px]">
            <div>
              <h1 className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
                {isWarbirds ? (
                  <>
                    <span className="text-gradient-fire">WARBIRDS</span>
                    <span className="text-slate-500">.io</span>
                  </>
                ) : (
                  project.name
                )}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">
                {project.descriptionBrief}
              </p>
              <div className="mt-6 flex flex-wrap gap-1.5">
                {project.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>

              {project.image && (
                <div
                  className="relative mt-10 h-72 overflow-hidden rounded-2xl border border-white/10 sm:h-96"
                  style={{
                    backgroundColor: project.imageBackground || "#0a0f1e",
                  }}
                >
                  <Image
                    src={`/${project.image}`}
                    alt={project.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-contain p-4"
                    priority
                  />
                </div>
              )}

              <div className="mt-10 max-w-2xl space-y-6">
                {project.descriptionLong.map((paragraph, i) => (
                  <p key={i} className="leading-8 text-slate-300">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            <aside className="lg:pt-2">
              <div className="card sticky top-24 space-y-6 p-6">
                {project.client && (
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                      Client
                    </p>
                    <p className="mt-1.5 font-semibold text-white">
                      {project.client}
                    </p>
                  </div>
                )}
                {project.role && (
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                      Role
                    </p>
                    <p className="mt-1.5 font-semibold text-white">
                      {project.role}
                    </p>
                  </div>
                )}
                {project.date && (
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                      Date
                    </p>
                    <p className="mt-1.5 font-semibold text-white">
                      {project.date}
                    </p>
                  </div>
                )}
                {(project.link || project.githubLink) && (
                  <div className="space-y-3 border-t border-white/10 pt-6">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary w-full justify-center"
                      >
                        {project.linkText || "Visit site"}
                        <span aria-hidden>↗</span>
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost w-full justify-center"
                      >
                        View source
                      </a>
                    )}
                  </div>
                )}
              </div>
            </aside>
          </div>
        </Reveal>
      </div>

      {isWarbirds && (
        <div className="mt-24">
          <WarbirdsShowcase />
        </div>
      )}
    </div>
  );
}
