import Footer from "@/components/footer";
import Header from "@/components/header";
import ProjectOverview from "@/components/ProjectOverview";
import Testimonial, { TestimonalCarousel } from "@/components/Testimonial";
import { projects } from "@/projects";
import Link from "next/link";
import * as React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-stretch">
      <Header />
      <div className="items-stretch bg-white flex w-full flex-col px-16 md:py-12 max-md:max-w-full max-md:px-5">
        <div className="mt-16 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="self-stretch text-black text-6xl font-bold leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
                Experienced Software Developer innovating Solutions
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-black text-lg leading-7 max-md:max-w-full">
                  Welcome to my portfolio! I am passionate about developing
                  cutting-edge software solutions that drive business growth and
                  efficiency. With a strong focus on innovation and
                  user-friendly design, I strive to create impactful and
                  sustainable solutions for my clients. Whether it's web
                  development, mobile applications, or custom software, I am
                  dedicated to exceeding expectations and delivering top-notch
                  results. Thank you for visiting, and I look forward to the
                  opportunity to collaborate with you on your next project!
                </div>{" "}
                <div className="items-stretch flex gap-4 mt-6 pt-4 self-start">
                  <Link href="/about">
                    <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black grow px-6 py-3 border-solid border-black max-md:px-5">
                      Learn More
                    </div>{" "}
                  </Link>
                  <Link href="/contact">
                    <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border grow px-6 py-3 border-solid border-black max-md:px-5">
                      Contact
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <img
          loading="lazy"
          srcSet="hero.png"
          className="object-contain object-center w-full overflow-hidden mt-20 mb-10 max-md:max-w-full max-md:mt-10"
        />
      </div>{" "}
      <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 md:py-12 max-md:max-w-full max-md:px-5">
        <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="self-stretch text-black text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Passionate software developer with extensive expertise
                </div>{" "}
                <div className="self-stretch text-black text-lg leading-7 mt-6 max-md:max-w-full">
                  With years of experience in developing high-quality software,
                  I have a deep understanding of various programming languages
                  and frameworks. My professional background includes working on
                  diverse projects and collaborating with cross-functional teams
                  to deliver exceptional results.
                </div>{" "}
                <div className="items-stretch flex justify-between gap-5 mt-6 pt-4 self-start">
                  {/* <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border grow px-6 py-3 border-solid border-black max-md:px-5">
                    Learn More
                  </div>{" "} */}
                  <div className="justify-center items-stretch flex gap-2 mt-3 self-start">
                    <Link href="/contact">
                      <div className="text-black text-base leading-6 grow whitespace-nowrap">
                        Contact
                      </div>{" "}
                    </Link>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc370c49402d26ed794dc99d559a800013b689b8a2dc3db6de741f4bc814e22b?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src="/me.jpeg"
                className="aspect-[0.96] object-contain object-top w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 md:py-12 max-md:max-w-full max-md:px-5">
        <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="flex flex-col mb-auto items-start max-md:max-w-full max-md:mt-10">
                <div className="self-stretch text-black text-4xl font-bold leading-10 mt-6 max-md:max-w-full">
                  Unleash the Power of Innovation with Expert Software
                  Development Services
                </div>{" "}
                <div className="self-stretch text-black text-lg leading-7 mt-6 max-md:max-w-full">
                  With a focus on cutting-edge technologies and a passion for
                  problem-solving, my software developer portfolio showcases the
                  skills and expertise needed to bring your ideas to life.
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                src="/rowhome.png"
                className="aspect-[0.96] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="items-center bg-white flex w-full flex-col px-16 md:py-12 max-md:max-w-full max-md:px-5">
        <div className="text-black text-center text-base font-semibold leading-6 self-center whitespace-nowrap mt-16 max-md:mt-10">
          Projects
        </div>{" "}
        <div className="self-center text-black text-center text-5xl font-bold leading-[58px] max-w-screen-md mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          Software Project Showcase
        </div>{" "}
        <div className="self-center text-black text-center text-lg leading-7 whitespace-nowrap mt-6 max-md:max-w-full">
          Explore a selection of software projects.
        </div>{" "}
        <div className="self-stretch mt-20 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <ProjectOverview project={projects[0]} />
            <ProjectOverview project={projects[1]} />
            <ProjectOverview project={projects[2]} />
          </div>
        </div>{" "}
        <Link href="/projects">
          <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border self-center mt-16 mb-10 px-7 py-3 border-solid border-black max-md:mt-10 max-md:px-5">
            See more
          </div>
        </Link>
      </div>{" "}
      <TestimonalCarousel />
      <Footer />
    </div>
  );
}
