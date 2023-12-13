import Discover from "@/components/Discover";
import Footer from "@/components/footer";
import Header from "@/components/header";
import * as React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-stretch">
      <Header />
      <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="self-stretch text-black text-6xl font-bold leading-[67px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
                Passionate Software Developer
              </div>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="self-stretch text-black text-lg leading-7 max-md:max-w-full max-md:mt-10">
                Welcome to my portfolio website! I specialize in creating
                innovative software solutions that solve real-world problems.
                Take a look at my projects below.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="items-center bg-white flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
        <div className="text-black text-center text-base font-semibold leading-6 whitespace-nowrap mt-16 max-md:mt-10">
          Experienced
        </div>
        <div className="text-black text-center text-5xl font-bold leading-[58px] max-w-screen-md mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
          Crafting Innovative Solutions to Drive Success
        </div>
        <div className="text-black text-center text-lg leading-7 max-w-screen-md mt-6 max-md:max-w-full">
          With a passion for software development and a strong expertise in
          various programming languages, I have embarked on a professional
          journey to create impactful solutions that drive success. My skills
          and experience enable me to deliver innovative and efficient software
          solutions that meet the unique needs of businesses and individuals
          alike.
        </div>
        <div className="items-stretch flex justify-between gap-5 mt-6 mb-10 pt-4">
          <div className="text-black text-base leading-6 whitespace-nowrap justify-center items-stretch border grow px-6 py-3 border-solid border-black max-md:px-5">
            Learn More
          </div>
          <div className="justify-center items-stretch flex gap-2 mt-3 self-start">
            <div className="text-black text-base leading-6 grow whitespace-nowrap">
              Contact
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/961a2abd7543ab7a5a18e1dc06fd4889604c1526d85916def45a309db9fccb37?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
              className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="self-stretch text-black text-4xl font-bold leading-10 max-md:max-w-full max-md:mt-10">
                Showcasing the Developer's Achievements in this Feature Section
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="text-black text-lg leading-7 max-md:max-w-full">
                  With years of experience, numerous completed projects, and
                  proficiency in multiple programming languages, the developer
                  has a proven track record of success.
                </div>{" "}
                <div className="mt-8 py-2 max-md:max-w-full">
                  <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                    <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                      <div className="items-stretch flex grow flex-col max-md:mt-8">
                        <div className="text-black text-5xl font-bold leading-[58px] whitespace-nowrap max-md:text-4xl max-md:leading-[54px]">
                          50%
                        </div>{" "}
                        <div className="text-black text-base leading-6 mt-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros.
                        </div>
                      </div>
                    </div>{" "}
                    <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                      <div className="items-stretch flex grow flex-col max-md:mt-8">
                        <div className="text-black text-5xl font-bold leading-[58px] whitespace-nowrap max-md:text-4xl max-md:leading-[54px]">
                          50%
                        </div>{" "}
                        <div className="text-black text-base leading-6 mt-2">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Suspendisse varius enim in eros.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="items-stretch bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="self-center text-black text-center text-5xl font-bold leading-[58px] whitespace-nowrap mt-16 max-md:max-w-full max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
          Project Showcase
        </div>{" "}
        <div className="self-center text-black text-center text-lg leading-7 max-w-screen-md mt-6 max-md:max-w-full">
          Explore the developer's work environment and interests.
        </div>
        <div className="mt-20 mb-10 max-md:max-w-full max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d4462df6a075f5d4e0975fc5f23f2ea36c2f2bcd84225bdeb6c5670a9fc4d4e9?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4462df6a075f5d4e0975fc5f23f2ea36c2f2bcd84225bdeb6c5670a9fc4d4e9?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4462df6a075f5d4e0975fc5f23f2ea36c2f2bcd84225bdeb6c5670a9fc4d4e9?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4462df6a075f5d4e0975fc5f23f2ea36c2f2bcd84225bdeb6c5670a9fc4d4e9?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4462df6a075f5d4e0975fc5f23f2ea36c2f2bcd84225bdeb6c5670a9fc4d4e9?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4462df6a075f5d4e0975fc5f23f2ea36c2f2bcd84225bdeb6c5670a9fc4d4e9?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4462df6a075f5d4e0975fc5f23f2ea36c2f2bcd84225bdeb6c5670a9fc4d4e9?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4462df6a075f5d4e0975fc5f23f2ea36c2f2bcd84225bdeb6c5670a9fc4d4e9?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
                className="aspect-square object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-8"
              />
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d4462df6a075f5d4e0975fc5f23f2ea36c2f2bcd84225bdeb6c5670a9fc4d4e9?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4462df6a075f5d4e0975fc5f23f2ea36c2f2bcd84225bdeb6c5670a9fc4d4e9?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4462df6a075f5d4e0975fc5f23f2ea36c2f2bcd84225bdeb6c5670a9fc4d4e9?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4462df6a075f5d4e0975fc5f23f2ea36c2f2bcd84225bdeb6c5670a9fc4d4e9?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4462df6a075f5d4e0975fc5f23f2ea36c2f2bcd84225bdeb6c5670a9fc4d4e9?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4462df6a075f5d4e0975fc5f23f2ea36c2f2bcd84225bdeb6c5670a9fc4d4e9?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4462df6a075f5d4e0975fc5f23f2ea36c2f2bcd84225bdeb6c5670a9fc4d4e9?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d4462df6a075f5d4e0975fc5f23f2ea36c2f2bcd84225bdeb6c5670a9fc4d4e9?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
                className="aspect-square object-contain object-center w-full overflow-hidden max-md:max-w-full max-md:mt-8"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="items-center bg-white flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8bd9daf5068994a50f469eb83824b81e16b573de84403166478e45474b4469e?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
          className="aspect-[2.5] object-contain object-center w-[140px] overflow-hidden max-w-full mt-16 max-md:mt-10"
        />
        <div className="text-black text-center text-2xl font-bold leading-9 max-w-screen-md mt-8 max-md:max-w-full">
          The developer's work exceeded our expectations. They delivered
          high-quality solutions that were both efficient and user-friendly.
        </div>{" "}
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9571f06d69f6ac41f1888653fc8d63a3afe9cbd1f491596b7c2a40c8b6101c0a?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
          className="aspect-square object-contain object-center w-14 overflow-hidden max-w-full mt-8 rounded-[50%]"
        />{" "}
        <div className="text-black text-center text-base font-semibold leading-6 whitespace-nowrap mt-4">
          John Doe
        </div>{" "}
        <div className="text-black text-center text-base leading-6 whitespace-nowrap mb-10">
          CTO, ABC Company
        </div>
      </div>{" "}
      <Discover />
      <Footer />
    </div>
  );
}
