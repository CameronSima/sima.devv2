import Footer from "@/components/footer";
import Header from "@/components/header";
import { SkillTile } from "@/components/skillTile";
import { projects } from "@/projects";
import * as React from "react";
import ProjectOverview from "./ProjectOverview";

export default function Projects() {
  return (
    <div className="flex flex-col items-stretch">
      <Header />
      <div className="items-center bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="text-black text-center text-base font-semibold leading-6 whitespace-nowrap mt-16 max-md:mt-10">
          Projects
        </div>
        <div className="text-black text-center text-5xl font-bold leading-[58px] max-w-screen-md mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          Showcasing My Work
        </div>
        <div className="text-black text-center text-lg leading-7 max-w-screen-md mt-6 max-md:max-w-full">
          Explore my portfolio of projects and see my skills in action.
        </div>

        {projects.map((project, index) => (
          <ProjectOverview
            key={`project-${project.name}-${index}`}
            project={project}
          />
        ))}

        <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border mt-16 mb-10 px-7 py-3 border-solid border-black max-md:mt-10 max-md:px-5">
          Button
        </div>
      </div>
      <div className="items-center bg-white flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
        <div className="text-black text-center text-2xl font-bold leading-9 max-w-screen-md mt-8 max-md:max-w-full">
          The work done by the team on my project was exceptional. They
          delivered a high-quality product that exceeded my expectations.
        </div>

        <div className="text-black text-center text-base font-semibold leading-6 whitespace-nowrap mt-4">
          John Doe
        </div>
        <div className="text-black text-center text-base leading-6 whitespace-nowrap mb-10">
          CEO, ABC Inc.
        </div>
      </div>

      <Footer />
    </div>
  );
}
