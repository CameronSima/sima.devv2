import Image from "next/image";
import Footer from "@/components/footer";
import Header from "@/components/header";
import * as React from "react";
import Link from "next/link";

export default function Skills() {
  return (
    <div className="flex flex-col items-stretch">
      <Header />
      <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="items-stretch flex justify-between gap-5 mt-16 mb-10 max-md:max-w-full max-md:flex-wrap max-md:mr-1 max-md:mt-10">
          <div className="text-black text-6xl font-bold leading-[67px] grow  max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            Technical Skills
          </div>
          <div className="text-black text-lg leading-7 grow shrink basis-auto self-start max-md:max-w-full">
            In over 8 years as a full-stack software developer, I have
            experience working for fortune 500 companies, lean startups, and
            everything in between. I have worked on projects ranging from small
            websites to large enterprise applications. I have experience working
            with a wide range of technologies and frameworks, and I am always
            eager to learn new things.
          </div>
        </div>
      </div>{" "}
      <div className="items-center bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="text-black text-center text-base font-semibold leading-6 self-center  mt-16 max-md:mt-10">
          Skills
        </div>{" "}
        <div className="self-center text-black text-center text-5xl font-bold leading-[58px] max-w-screen-md mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          Proficient Programming Languages, Tools, Frameworks, and Libraries
        </div>{" "}
        <div className="self-center text-black text-center text-lg leading-7 max-w-screen-md mt-6 max-md:max-w-full">
          I'm highly skilled in a wide range of programming languages, tools,
          and frameworks. This expertise allows me to tackle various projects
          with ease and efficiency.
        </div>{" "}
        <div className="justify-center self-stretch mt-20 px-px max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[33%] max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:mt-10">
                <img
                  alt="An image"
                  loading="lazy"
                  src="/logos/node.png"
                  className="aspect-[1.69] p-6 object-contain object-center w-full overflow-hidden"
                />{" "}
                <div className="text-black text-center text-3xl font-bold leading-10  mt-8">
                  Programming Languages
                </div>{" "}
                <div className="text-black text-center text-base leading-6 mt-6">
                  My favorite languages to are TypeScript and Python. I am also
                  familiar with Go, Java and C#.
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col p-6 items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:mt-10">
                <img
                  alt="An image"
                  loading="lazy"
                  src="/logos/nextjs.png"
                  className="aspect-[1.69] object-contain object-center w-full overflow-hidden"
                />{" "}
                <div className="text-black text-center text-3xl font-bold leading-10  mt-8">
                  Tools and Frameworks
                </div>{" "}
                <div className="text-black text-center text-base leading-6 mt-6">
                  I believe in using the right tool for the job. Some of my
                  favorites are NextJS, FastAPI, and Prisma.
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:mt-10">
                <img
                  alt="An image"
                  loading="lazy"
                  src="/awscert.png"
                  className="aspect-[1.69] object-contain object-center w-full overflow-hidden"
                />{" "}
                <div className="text-black text-center text-3xl font-bold leading-10  mt-8">
                  Infrastructure
                </div>{" "}
                <div className="text-black text-center text-base leading-6 mt-6">
                  As an AWS Certified Solutions Architect, I love building
                  efficient, scalable, and secure cloud infrastructure on the
                  AWS platform.
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="items-stretch self-center flex justify-between gap-5 mt-12 mb-10 pt-4 max-md:mt-10">
          <Link href="/projects">
            <div className="text-black text-base leading-6 hover:underline justify-center items-stretch border grow px-6 py-3 border-solid border-black max-md:px-5">
              See some of the cool stuff I've built!
            </div>{" "}
          </Link>
        </div>
      </div>{" "}
      <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-black text-4xl font-bold leading-10 max-md:max-w-full">
                  Database and Data Management
                </div>{" "}
                <div className="text-black text-lg leading-7 mt-6 max-md:max-w-full">
                  I have extensive experience in various database technologies
                  as well as data management. I can design and optimize
                  efficient database structures and implement effective data
                  management solutions.
                </div>{" "}
                <div className="mt-8 py-2 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                      <div className="items-stretch flex grow flex-col max-md:mt-8">
                        <div className="text-black text-xl font-bold leading-7 ">
                          Database Expert
                        </div>{" "}
                        <div className="text-black text-base leading-6 mt-4">
                          I have experience working with various database
                          technologies, including SQL, NoSQL, and MongoDB.
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                      <div className="items-stretch flex grow flex-col max-md:mt-8">
                        <div className="text-black text-xl font-bold leading-7 ">
                          Data Management
                        </div>{" "}
                        <div className="text-black text-base leading-6 mt-4">
                          I can ensure data integrity, implement data governance
                          policies, and optimize data workflows.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                alt="An image"
                loading="lazy"
                src="/logos/dynamodb.webp"
                className="object-contain object-top w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
              <img
                alt="An image"
                loading="lazy"
                src="/logos/mongodb.jpeg"
                className="object-contain object-top w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="items-stretch flex w-full justify-between gap-5 mt-16 mb-10 max-md:max-w-full max-md:flex-wrap max-md:mr-1 max-md:mt-10">
          <div className="items-stretch flex flex-col max-md:max-w-full">
            <div className="text-black text-4xl font-bold leading-10 max-md:max-w-full">
              Explore My Technical Skills
            </div>
            <div className="text-black text-lg leading-7  mt-6 max-md:max-w-full">
              See my skills in action on my portfolio
            </div>
          </div>
          <div className="items-stretch self-center flex gap-4 my-auto">
            <Link href="/projects">
              <div className="text-white text-base leading-6  justify-center items-stretch border bg-black grow px-6 py-3 border-solid border-black max-md:px-5">
                Portfolio
              </div>
            </Link>
            <Link href="/contact">
              <div className="text-black text-base leading-6  justify-center items-stretch border grow px-6 py-3 border-solid border-black max-md:px-5">
                Contact
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
