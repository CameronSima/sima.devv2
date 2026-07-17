import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import { projects } from "@/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Client work and side projects by Cam Sima — games, AR experiences, real-time systems, and more.",
};

export default function Projects() {
  const [warbirds, ...rest] = [
    projects.find((p) => p.slug === "warbirds")!,
    ...projects.filter((p) => p.slug !== "warbirds"),
  ];

  return (
    <div className="mx-auto max-w-6xl px-5 pb-28 pt-32 md:px-8">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-contrail">
          Flight log
        </p>
        <h1 className="mt-4 font-display text-5xl font-bold tracking-tight sm:text-6xl">
          Projects
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">
          Games, AR installations, streaming tools, and client work for brands
          like Nike, AT&amp;T, and Lockheed Martin.
        </p>
      </Reveal>

      {/* Featured: Warbirds */}
      <Reveal className="mt-12">
        <Link
          href={`/project/${warbirds.slug}`}
          className="group card relative block overflow-hidden p-8 transition-colors hover:border-tracer/40 md:p-12"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(700px circle at 15% 0%, rgba(251,191,36,0.12), transparent 55%), radial-gradient(700px circle at 90% 100%, rgba(56,189,248,0.1), transparent 55%)",
            }}
          />
          <div className="relative">
            <span className="chip border-tracer/40 text-tracer">
              ★ Featured — my best current project
            </span>
            <h2 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="text-gradient-fire">WARBIRDS</span>
              <span className="text-slate-500">.io</span>
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-slate-400">
              {warbirds.descriptionBrief}. Five theaters of war, one browser
              tab: Sky Ring, Naval, Ground, Combined Arms, and a walkable
              1:1-scale USS New Jersey.
            </p>
            <div className="mt-6 flex flex-wrap gap-1.5">
              {warbirds.skills.map((skill) => (
                <span key={skill} className="chip">
                  {skill}
                </span>
              ))}
            </div>
            <span className="mt-7 inline-flex items-center gap-2 font-semibold text-tracer">
              Mission briefing
              <span
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden
              >
                →
              </span>
            </span>
          </div>
        </Link>
      </Reveal>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {rest.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 60}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
