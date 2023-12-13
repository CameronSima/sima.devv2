import { Project } from "@/models";
import Link from "next/link";
import { SkillTile } from "./skillTile";

export default function ProjectOverview({ project }: { project: Project }) {
  return (
    <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
      <div className="items-start flex grow flex-col max-md:mt-8">
        <Link href={`/project/${project.slug}`}>
          <img
            loading="lazy"
            src={project.image}
            className="aspect-square object-contain object-center w-full self-stretch"
          />{" "}
        </Link>
        <Link href={`/project/${project.slug}`}>
          <div className="self-stretch text-black text-2xl font-bold leading-9 mt-6">
            {project.name}
          </div>{" "}
        </Link>
        <div className="self-stretch text-black text-base leading-6  mt-2">
          {project.descriptionBrief}
        </div>{" "}
        <div className="flex gap-2 pt-4 max-md:pr-5 flex-wrap">
          {project.skills.map((skill) => (
            <SkillTile title={skill} />
          ))}
        </div>{" "}
      </div>
    </div>
  );
}
