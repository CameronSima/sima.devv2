import Footer from "@/components/footer";
import Header from "@/components/header";
import { SkillTile } from "@/components/skillTile";
import { getProjectFromSlug } from "@/projects";
import * as React from "react";

export default function Project({ params }: { params: { slug: string } }) {
  const project = getProjectFromSlug(params.slug as string);

  console.log(params.slug, project);

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
                  {project.skills.map((skill) => (
                    <SkillTile title={skill} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-[38%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                <div className="items-stretch flex justify-between gap-5 max-md:max-w-full max-md:flex-wrap">
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-black text-xl font-bold leading-7 whitespace-nowrap">
                      Client
                    </div>
                    <div className="text-black text-base leading-6 whitespace-nowrap mt-2">
                      {project.client}
                    </div>
                  </div>
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-black text-xl font-bold leading-7 whitespace-nowrap">
                      Date
                    </div>
                    <div className="text-black text-base leading-6 whitespace-nowrap mt-2">
                      March 2023
                    </div>
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-black text-xl font-bold leading-7 whitespace-nowrap">
                      Role
                    </div>
                    <div className="text-black text-base leading-6 whitespace-nowrap mt-2">
                      Lead Developer
                    </div>
                  </div>
                  <div className="items-stretch flex grow basis-[0%] flex-col">
                    <div className="text-black text-xl font-bold leading-7 whitespace-nowrap">
                      Website
                    </div>
                    <div className="text-black text-base leading-6 whitespace-nowrap mt-2">
                      (decommissioned)
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
                loading="lazy"
                src={`/${project.image}`}
                className="aspect-[0.96] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-black text-5xl font-bold leading-[58px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Software Development Portfolio
                </div>
                {project.descriptionLong.map((paragraph, index) => (
                  <div className="text-black text-base leading-6 mt-4 max-md:max-w-full">
                    {paragraph}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="text-black text-center text-base font-semibold leading-6 self-stretch max-md:max-w-full">
                  Solutions
                </div>
                <div className="self-stretch text-black text-5xl font-bold leading-[58px] mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Unlock Your Potential with Our Project
                </div>
                <div className="self-stretch text-black text-lg leading-7 mt-6 max-md:max-w-full">
                  Our project solves the problem by providing innovative
                  solutions that streamline processes and enhance productivity.
                  With our cutting-edge technology, you can achieve your goals
                  faster and more efficiently.
                </div>
                <div className="self-stretch mt-8 py-2 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col items-start max-md:mt-8">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cc22bff2b07e182e7b7e57c9ff8957d767355904bd977e0bc35ef09a299b9db?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
                          className="aspect-square object-contain object-center w-12 overflow-hidden max-w-full"
                        />
                        <div className="self-stretch text-black text-xl font-bold leading-7 whitespace-nowrap mt-4">
                          Efficiency Boost
                        </div>
                        <div className="self-stretch text-black text-base leading-6 mt-4">
                          Experience a significant increase in efficiency with
                          our project's advanced features and functionalities.
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                      <div className="flex grow flex-col items-start max-md:mt-8">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0cc22bff2b07e182e7b7e57c9ff8957d767355904bd977e0bc35ef09a299b9db?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
                          className="aspect-square object-contain object-center w-12 overflow-hidden max-w-full"
                        />{" "}
                        <div className="self-stretch text-black text-xl font-bold leading-7 whitespace-nowrap mt-4">
                          Cost Savings
                        </div>{" "}
                        <div className="self-stretch text-black text-base leading-6 mt-4">
                          Reduce costs and optimize resources with our project's
                          intelligent automation and optimization capabilities.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="items-stretch flex justify-between gap-5 mt-6 pt-4 self-start">
                  <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border grow px-6 py-3 border-solid border-black max-md:px-5">
                    Learn More
                  </div>
                  <div className="justify-center items-stretch flex gap-2 mt-3 self-start">
                    <div className="text-black text-base leading-6 grow whitespace-nowrap">
                      Sign Up
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8807e57e7e8ca6900976a3f7e568076309c8884dd1f003e7678f79ee93bd0e7d?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
                      className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f6a3a21d82c91f3131bd6a56fadedd7f6b0035ca445910406f0580385ae6d0cb?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6a3a21d82c91f3131bd6a56fadedd7f6b0035ca445910406f0580385ae6d0cb?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6a3a21d82c91f3131bd6a56fadedd7f6b0035ca445910406f0580385ae6d0cb?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6a3a21d82c91f3131bd6a56fadedd7f6b0035ca445910406f0580385ae6d0cb?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6a3a21d82c91f3131bd6a56fadedd7f6b0035ca445910406f0580385ae6d0cb?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6a3a21d82c91f3131bd6a56fadedd7f6b0035ca445910406f0580385ae6d0cb?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6a3a21d82c91f3131bd6a56fadedd7f6b0035ca445910406f0580385ae6d0cb?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/f6a3a21d82c91f3131bd6a56fadedd7f6b0035ca445910406f0580385ae6d0cb?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
                className="aspect-[0.96] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="items-stretch bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="justify-between items-stretch flex gap-5 mt-16 max-md:max-w-full max-md:flex-wrap max-md:justify-center max-md:mt-10">
          <div className="justify-center items-center border self-center flex aspect-square flex-col w-12 h-12 my-auto px-3 rounded-[50px] border-solid border-black">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fc028348581b4b53e0d6f911c936b7aeb25fc35676be2b36c3fa98a218664ef7?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
              className="aspect-square object-contain object-center w-full overflow-hidden"
            />
          </div>
          <div className="items-center flex grow basis-[0%] flex-col max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5dfd91be9ebb7b3b1df4c8acf0e84518afe4ad075b2219f9534b3f447551076c?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
              className="aspect-[2.5] object-contain object-center w-[140px] overflow-hidden self-center max-w-full"
            />
            <div className="self-stretch text-black text-center text-2xl font-bold leading-9 mt-8 max-md:max-w-full">
              Our project has been a game-changer for our business. It has
              streamlined our processes and increased our efficiency.
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
              className="aspect-square object-contain object-center w-14 overflow-hidden self-center max-w-full mt-8 rounded-[50%]"
            />
            <div className="self-center text-black text-center text-base font-semibold leading-6 whitespace-nowrap mt-4">
              John Doe
            </div>
            <div className="self-center text-black text-center text-base leading-6 whitespace-nowrap">
              CEO, XYZ Company
            </div>
          </div>
          <div className="justify-center items-center border self-center flex aspect-square flex-col w-12 h-12 my-auto px-3 rounded-[50px] border-solid border-black">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/de53c855838f762190bad37874d9790fe5cbc77caaf9a57b6fe9b8dfb7074ac7?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
              className="aspect-square object-contain object-center w-full overflow-hidden"
            />
          </div>
        </div>
        <div className="items-stretch self-center flex w-24 max-w-full gap-2.5 mt-12 mb-10 p-2.5 max-md:justify-center max-md:mt-10">
          <div className="flex shrink-0 h-2 flex-col flex-1 rounded-[50%]" />
          <div className="flex shrink-0 h-2 flex-col flex-1 rounded-[50%]" />
          <div className="flex shrink-0 h-2 flex-col flex-1 rounded-[50%]" />
          <div className="flex shrink-0 h-2 flex-col flex-1 rounded-[50%]" />
          <div className="flex shrink-0 h-2 flex-col flex-1 rounded-[50%]" />
        </div>
      </div>
      <div className="flex-col items-center overflow-hidden relative flex min-h-[421px] w-full px-20 py-12 max-md:max-w-full max-md:px-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/47a5d808bfdf99c764069712f89ba379ce7c27021cbec7c8e350ee35264fe4b8?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a5d808bfdf99c764069712f89ba379ce7c27021cbec7c8e350ee35264fe4b8?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a5d808bfdf99c764069712f89ba379ce7c27021cbec7c8e350ee35264fe4b8?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a5d808bfdf99c764069712f89ba379ce7c27021cbec7c8e350ee35264fe4b8?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a5d808bfdf99c764069712f89ba379ce7c27021cbec7c8e350ee35264fe4b8?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a5d808bfdf99c764069712f89ba379ce7c27021cbec7c8e350ee35264fe4b8?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a5d808bfdf99c764069712f89ba379ce7c27021cbec7c8e350ee35264fe4b8?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/47a5d808bfdf99c764069712f89ba379ce7c27021cbec7c8e350ee35264fe4b8?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative text-white text-center text-5xl font-bold leading-[58px] max-w-screen-md mt-16 max-md:max-w-full max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
          Explore Our Projects Portfolio
        </div>
        <div className="relative text-white text-center text-lg leading-7 max-w-screen-md mt-6 max-md:max-w-full">
          Check out our GitHub repository for more project examples and code.
        </div>
        <div className="relative items-stretch flex gap-4 mt-6 mb-10 pt-4">
          <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black grow px-6 py-3 border-solid border-black max-md:px-5">
            GitHub
          </div>
          <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border grow px-6 py-3 border-solid border-white max-md:px-5">
            Contact
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
