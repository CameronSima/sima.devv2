import Image from "next/image";
import Link from "next/link";
import { Project } from "@/models";
import SpotlightCard from "./SpotlightCard";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/project/${project.slug}`} className="group block h-full">
      <SpotlightCard className="flex h-full flex-col overflow-hidden">
        <div
          className="relative h-44 w-full overflow-hidden border-b border-white/10"
          style={{ backgroundColor: project.imageBackground || "#0a0f1e" }}
        >
          {project.image ? (
            <Image
              src={`/${project.image}`}
              alt={project.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center font-display text-5xl font-bold text-white/10">
              {project.name.charAt(0)}
            </div>
          )}
          {project.client && (
            <span className="absolute left-3 top-3 rounded-md border border-white/15 bg-night/70 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-slate-300 backdrop-blur">
              {project.client}
            </span>
          )}
        </div>
        <div className="relative z-10 flex flex-1 flex-col p-5">
          <div className="flex items-baseline justify-between gap-3">
            <h3 className="font-display text-lg font-bold tracking-tight text-white">
              {project.name}
            </h3>
            {project.date && (
              <span className="font-mono text-xs text-slate-500">
                {project.date}
              </span>
            )}
          </div>
          <p className="mt-2 flex-1 text-sm leading-6 text-slate-400">
            {project.descriptionBrief}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.skills.slice(0, 4).map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </SpotlightCard>
    </Link>
  );
}
