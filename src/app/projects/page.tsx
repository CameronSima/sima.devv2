import Footer from "@/components/footer";
import Header from "@/components/header";
import Testimonial from "@/components/Testimonial";
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
          <div className="mt-6">
            <ProjectOverview
              key={`project-${project.name}-${index}`}
              project={project}
            />
          </div>
        ))}
      </div>
      <Testimonial
        content="The work done by Cam on my project was exceptional. He delivered a
          high-quality product that exceeded my expectations."
        name="Mike Sabolick"
        position="CEO"
        image="mike.png"
        company="Party Headquarters"
      />

      <Footer />
    </div>
  );
}
