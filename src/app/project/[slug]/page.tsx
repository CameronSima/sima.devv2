import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { SkillTile } from "@/components/skillTile";
import { getProjectFromSlug, projects } from "@/projects";
import { Project } from "@/models";

import * as React from "react";
import TechLogo from "@/components/TechLogo";

export const generateStaticParams = () =>
  projects.map((project) => ({
    params: {
      slug: project.slug,
    },
  }));

export default function Project({ params }: { params: { slug: string } }) {
  const project = getProjectFromSlug(params.slug);
  if (!project) {
    return null;
  }

  return (
    <div className="flex flex-col items-stretch">
      <Header />
      <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[62%] max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-black text-6xl font-bold leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  {project.name}
                </div>
                <div className="text-black text-lg leading-7 mt-5 max-md:max-w-full">
                  {project.descriptionBrief}
                </div>
                <div className="items-stretch flex gap-2 mt-6 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                  {project.skills.map((skill, index) => (
                    <SkillTile key={`skill-${skill}-${index}`} title={skill} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[38%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  {project.client && (
                    <div className="items-stretch flex grow basis-[0%] flex-col">
                      <div className="text-black text-xl font-bold leading-7 ">
                        Client
                      </div>
                      <div className="text-black text-base leading-6  mt-2">
                        {project.client}
                      </div>
                    </div>
                  )}
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-black text-xl font-bold leading-7 ">
                      Date
                    </div>
                    <div className="text-black text-base leading-6  mt-2">
                      {project.date || "March 2023"}
                    </div>
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-black text-xl font-bold leading-7 ">
                      Role
                    </div>
                    <div className="text-black text-base leading-6  mt-2">
                      {project.role || "Lead Developer"}
                    </div>
                  </div>
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-black text-xl font-bold leading-7">
                      {project.link && project.githubLink ? "Links" : "Link"}
                    </div>
                    <div className="text-black text-base leading-6  mt-2">
                      <ProjectLink project={project} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <img
                alt="An image"
                style={{ backgroundColor: project.imageBackground + "30" }}
                loading="lazy"
                src={`/${project.image}`}
                className="aspect-[0.96] object-contain object-top w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                {project.descriptionLong.map((paragraph, index) => (
                  <div
                    key={`desc-para-${index}`}
                    className={`text-black text-base leading-6 ${
                      index !== 0 && "mt-4"
                    } max-md:max-w-full`}>
                    {paragraph}
                  </div>
                ))}
              </div>
              <div className="flex flex-row flex-wrap gap-6 items-start justify-center mt-8">
                {project.logos &&
                  project.logos.map((logo, index) => (
                    <TechLogo key={`tech-logo-${index}`} name={logo} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function ProjectLink({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-2 flex-wrap">
      {project.link && (
        <a className="underline" href={project.link}>
          {project.linkText || project.link}
        </a>
      )}
      {project.githubLink && <a href={project.githubLink}>GitHub</a>}
      {!project.link && !project.githubLink && <>{"(decommissioned)"}</>}
    </div>
  );
}
