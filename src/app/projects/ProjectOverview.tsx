import { SkillTile } from "@/components/skillTile";
import { Project } from "@/models";
import Image from "next/image";
import Link from "next/link";

export default function ProjectOverview({ project }: { project: Project }) {
  return (
    <div className="mt-10">
      {project.image && (
        <Link href={`/project/${project.slug}`}>
          <img
            style={{
              backgroundColor: project.imageBackground + "30",
              height: "500px",
              width: "100vw",
            }}
            loading="lazy"
            src={project.image}
            className="aspect-square object-contain object-center w-full self-stretch"
          />
        </Link>
      )}

      <div className="items-stretch self-stretch flex justify-between gap-5 mt-6 mb-10 max-md:max-w-full max-md:flex-wrap">
        <div className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
          <Link href={`/project/${project.slug}`}>
            <div className="text-black text-2xl font-bold leading-9 whitespace-nowrap max-md:max-w-full">
              {project.name}
            </div>
          </Link>
          <div className="items-stretch flex gap-2 mt-4 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
            {project.skills.map((skill, index) => (
              <SkillTile key={`skill-${index}-${skill}`} title={skill} />
            ))}
          </div>
        </div>
        <div className="text-black text-base leading-6 grow shrink basis-auto self-start max-md:max-w-full">
          {project.descriptionBrief}
        </div>
      </div>
    </div>
  );
}
