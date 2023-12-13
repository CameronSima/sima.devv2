import Footer from "@/components/footer";
import Header from "@/components/header";
import { SkillTile } from "@/components/skillTile";
import * as React from "react";

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
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cabcee2c86a280370bb8d29fc095f262741ebe4f11a3ae075542695e8ab26312?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cabcee2c86a280370bb8d29fc095f262741ebe4f11a3ae075542695e8ab26312?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cabcee2c86a280370bb8d29fc095f262741ebe4f11a3ae075542695e8ab26312?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cabcee2c86a280370bb8d29fc095f262741ebe4f11a3ae075542695e8ab26312?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cabcee2c86a280370bb8d29fc095f262741ebe4f11a3ae075542695e8ab26312?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cabcee2c86a280370bb8d29fc095f262741ebe4f11a3ae075542695e8ab26312?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cabcee2c86a280370bb8d29fc095f262741ebe4f11a3ae075542695e8ab26312?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cabcee2c86a280370bb8d29fc095f262741ebe4f11a3ae075542695e8ab26312?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
          className="aspect-[2.05] object-contain object-center w-full self-stretch overflow-hidden mt-20 max-md:max-w-full max-md:mt-10"
        />
        <div className="items-stretch self-stretch flex justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
          <div className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
            <div className="text-black text-2xl font-bold leading-9 whitespace-nowrap max-md:max-w-full">
              Project One
            </div>
            <div className="items-stretch flex gap-2 mt-4 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
              <div className="text-black text-sm font-semibold leading-5 whitespace-nowrap items-stretch bg-zinc-100 grow justify-center px-2 py-1">
                Web Design
              </div>
              <SkillTile title="JavaScript" />
              <div className="text-black text-sm font-semibold leading-5 whitespace-nowrap items-stretch bg-zinc-100 grow justify-center px-2 py-1">
                Responsive
              </div>
            </div>
          </div>
          <div className="text-black text-base leading-6 grow shrink basis-auto self-start max-md:max-w-full">
            A visually appealing website with a focus on user experience and
            responsive design.
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cabcee2c86a280370bb8d29fc095f262741ebe4f11a3ae075542695e8ab26312?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cabcee2c86a280370bb8d29fc095f262741ebe4f11a3ae075542695e8ab26312?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cabcee2c86a280370bb8d29fc095f262741ebe4f11a3ae075542695e8ab26312?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cabcee2c86a280370bb8d29fc095f262741ebe4f11a3ae075542695e8ab26312?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cabcee2c86a280370bb8d29fc095f262741ebe4f11a3ae075542695e8ab26312?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cabcee2c86a280370bb8d29fc095f262741ebe4f11a3ae075542695e8ab26312?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cabcee2c86a280370bb8d29fc095f262741ebe4f11a3ae075542695e8ab26312?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cabcee2c86a280370bb8d29fc095f262741ebe4f11a3ae075542695e8ab26312?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
          className="aspect-[2.05] object-contain object-center w-full self-stretch overflow-hidden mt-20 max-md:max-w-full max-md:mt-10"
        />
        <div className="items-stretch self-stretch flex justify-between gap-5 mt-6 max-md:max-w-full max-md:flex-wrap">
          <div className="items-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
            <div className="text-black text-2xl font-bold leading-9 whitespace-nowrap max-md:max-w-full">
              Project Two
            </div>
            <div className="items-stretch flex gap-2 mt-4 pr-20 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
              <div className="text-black text-sm font-semibold leading-5 whitespace-nowrap items-stretch bg-zinc-100 grow justify-center px-2 py-1">
                Mobile App
              </div>
              <div className="text-black text-sm font-semibold leading-5 whitespace-nowrap items-stretch bg-zinc-100 aspect-[1.3103448275862069] justify-center px-2 py-1">
                iOS
              </div>
              <div className="text-black text-sm font-semibold leading-5 whitespace-nowrap items-stretch bg-zinc-100 aspect-[2.2758620689655173] justify-center px-2 py-1">
                Android
              </div>
            </div>
          </div>
          <div className="text-black text-base leading-6 grow shrink basis-auto self-start max-md:max-w-full">
            A mobile app designed for both iOS and Android platforms, providing
            a seamless user experience.
          </div>
        </div>
        <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border mt-16 mb-10 px-7 py-3 border-solid border-black max-md:mt-10 max-md:px-5">
          Button
        </div>
      </div>
      <div className="items-center bg-white flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8bd9daf5068994a50f469eb83824b81e16b573de84403166478e45474b4469e?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
          className="aspect-[2.5] object-contain object-center w-[140px] overflow-hidden max-w-full mt-16 max-md:mt-10"
        />
        <div className="text-black text-center text-2xl font-bold leading-9 max-w-screen-md mt-8 max-md:max-w-full">
          The work done by the team on my project was exceptional. They
          delivered a high-quality product that exceeded my expectations.
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
          className="aspect-square object-contain object-center w-14 overflow-hidden max-w-full mt-8 rounded-[50%]"
        />
        <div className="text-black text-center text-base font-semibold leading-6 whitespace-nowrap mt-4">
          John Doe
        </div>
        <div className="text-black text-center text-base leading-6 whitespace-nowrap mb-10">
          CEO, ABC Inc.
        </div>
      </div>
      <div className="flex-col overflow-hidden relative flex min-h-[479px] w-full pl-16 pr-20 py-12 items-start max-md:max-w-full max-md:px-5">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b24d8dae0b86aed17f5340cd6b50f3f83f7cb736e2a5050b001da6c8bdd3b8ef?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b24d8dae0b86aed17f5340cd6b50f3f83f7cb736e2a5050b001da6c8bdd3b8ef?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b24d8dae0b86aed17f5340cd6b50f3f83f7cb736e2a5050b001da6c8bdd3b8ef?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b24d8dae0b86aed17f5340cd6b50f3f83f7cb736e2a5050b001da6c8bdd3b8ef?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b24d8dae0b86aed17f5340cd6b50f3f83f7cb736e2a5050b001da6c8bdd3b8ef?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b24d8dae0b86aed17f5340cd6b50f3f83f7cb736e2a5050b001da6c8bdd3b8ef?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b24d8dae0b86aed17f5340cd6b50f3f83f7cb736e2a5050b001da6c8bdd3b8ef?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b24d8dae0b86aed17f5340cd6b50f3f83f7cb736e2a5050b001da6c8bdd3b8ef?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
          className="absolute h-full w-full object-cover object-center inset-0"
        />
        <div className="relative text-white text-5xl font-bold leading-[58px] w-[768px] max-w-full mt-16 max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
          Showcasing my Software Development Projects
        </div>
        <div className="relative text-white text-lg leading-7 w-[768px] max-w-full mt-6">
          I am passionate about building innovative software solutions. Check
          out my work!
        </div>
        <div className="relative items-stretch flex gap-4 mt-6 mb-10 pt-4">
          <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black grow px-6 py-3 border-solid border-black max-md:px-5">
            Contact
          </div>
          <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border grow px-6 py-3 border-solid border-white max-md:px-5">
            Collaborate
          </div>
        </div>
      </div>
      <div className="items-stretch bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="mt-16 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-[59%] max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-black text-center text-base font-semibold leading-6 max-md:max-w-full">
                  Connect
                </div>
                <div className="text-black text-5xl font-bold leading-[58px] whitespace-nowrap mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Get in Touch
                </div>
                <div className="text-black text-lg leading-7 mt-6 max-md:max-w-full">
                  We'd love to hear from you. Feel free to reach out with any
                  questions or inquiries.
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col py-2 max-md:max-w-full max-md:mt-10">
                <div className="flex justify-between gap-4 items-start max-md:max-w-full max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/55704429eed427129111df0ffa6b3a256c167294ff59c0b344d21f24fb39b5d2?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <div className="items-stretch self-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                    <div className="text-black text-xl font-bold leading-7 whitespace-nowrap max-md:max-w-full">
                      Email
                    </div>{" "}
                    <div className="text-black text-base leading-6 underline whitespace-nowrap mt-2 max-md:max-w-full">
                      info@yourwebsite.com
                    </div>
                  </div>
                </div>{" "}
                <div className="flex justify-between gap-4 mt-6 items-start max-md:max-w-full max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c895854187fc8d2a01c54fbf265cd95234a8114d10bb7ed91ad3099b643b67b?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <div className="items-stretch self-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                    <div className="text-black text-xl font-bold leading-7 whitespace-nowrap max-md:max-w-full">
                      Phone
                    </div>{" "}
                    <div className="text-black text-base leading-6 underline whitespace-nowrap mt-2 max-md:max-w-full">
                      +1 (123) 456-7890
                    </div>
                  </div>
                </div>{" "}
                <div className="flex justify-between gap-4 mt-6 items-start max-md:max-w-full max-md:flex-wrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/1be30b3b473aabb3968c9664d97e552faf4e3d0088fa11ee09001517b6fa5794?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <div className="items-stretch self-stretch flex grow basis-[0%] flex-col max-md:max-w-full">
                    <div className="text-black text-xl font-bold leading-7 whitespace-nowrap max-md:max-w-full">
                      Office
                    </div>{" "}
                    <div className="text-black text-base leading-6 whitespace-nowrap mt-2 max-md:max-w-full">
                      123 Main Street, New York, NY 10001
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9e2bd77a956f733cd93c4a25abdaa5e5819f9e02ac968b8b383f997f9c4e7ef3?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e2bd77a956f733cd93c4a25abdaa5e5819f9e02ac968b8b383f997f9c4e7ef3?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e2bd77a956f733cd93c4a25abdaa5e5819f9e02ac968b8b383f997f9c4e7ef3?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e2bd77a956f733cd93c4a25abdaa5e5819f9e02ac968b8b383f997f9c4e7ef3?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e2bd77a956f733cd93c4a25abdaa5e5819f9e02ac968b8b383f997f9c4e7ef3?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e2bd77a956f733cd93c4a25abdaa5e5819f9e02ac968b8b383f997f9c4e7ef3?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e2bd77a956f733cd93c4a25abdaa5e5819f9e02ac968b8b383f997f9c4e7ef3?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9e2bd77a956f733cd93c4a25abdaa5e5819f9e02ac968b8b383f997f9c4e7ef3?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
          className="aspect-[1.78] object-contain object-center w-full overflow-hidden mt-20 mb-10 max-md:max-w-full max-md:mt-10"
        />
      </div>{" "}
      <Footer />
    </div>
  );
}
