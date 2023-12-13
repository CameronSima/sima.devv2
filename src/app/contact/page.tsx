import Footer from "@/components/footer";
import Header from "@/components/header";
import * as React from "react";

export default function Contact() {
  return (
    <div className="flex flex-col items-stretch">
      <Header />
      <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="items-stretch flex justify-between gap-5 mt-16 mb-10 max-md:max-w-full max-md:flex-wrap max-md:mr-1 max-md:mt-10">
          <div className="text-black text-6xl font-bold leading-[67px] grow whitespace-nowrap max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
            Get in Touch
          </div>
          <div className="text-black text-lg leading-7 grow shrink basis-auto self-start max-md:max-w-full">
            Welcome to our website. If you have any questions or would like to
            discuss a project, please feel free to contact us.
          </div>
        </div>
      </div>
      <div className="items-stretch bg-white flex w-full flex-col justify-center px-16 py-12 max-md:max-w-full max-md:px-5">
        <div className="mt-16 mb-10 max-md:max-w-full max-md:mr-1 max-md:mt-10">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <div className="items-stretch flex flex-col pb-2 max-md:max-w-full max-md:mt-10">
                <div className="text-black text-center text-base font-semibold leading-6 max-md:max-w-full">
                  Get in touch
                </div>
                <div className="text-black text-5xl font-bold leading-[58px] whitespace-nowrap mt-4 max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
                  Contact us
                </div>
                <div className="text-black text-lg leading-7 whitespace-nowrap mt-6 max-md:max-w-full">
                  Have a question? We're here to help!
                </div>{" "}
                <div className="items-stretch flex gap-4 mt-10 self-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/746978f36e80ebe9e99058950b36ee82dba1334bf0835f41ce73a5132ac77347?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <div className="text-black text-base leading-6 grow whitespace-nowrap">
                    contact@companyname.com
                  </div>
                </div>{" "}
                <div className="items-stretch flex gap-4 mt-4 self-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b1fbafccef8aac382e04ab6e71e06078268d2d6b311f719b85225f94149bff5?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <div className="text-black text-base leading-6">
                    +1 (555) 123-4567
                  </div>
                </div>{" "}
                <div className="items-stretch flex gap-4 mt-4 self-start">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e8de0bcf0be1c33a0793926a31c6fc71aa4d9be051ae1af1d29db638f5f11b62?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
                    className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                  />{" "}
                  <div className="text-black text-base leading-6 grow whitespace-nowrap">
                    123 Main Street, Anytown, USA
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="items-start flex grow flex-col max-md:max-w-full max-md:mt-10">
                <div className="self-stretch text-black text-base leading-6 whitespace-nowrap max-md:max-w-full">
                  Name
                </div>{" "}
                <div className="text-neutral-600 text-base leading-6 whitespace-nowrap items-stretch self-stretch border bg-white justify-center mt-2 p-3 border-solid border-black max-md:max-w-full">
                  Placeholder
                </div>{" "}
                <div className="self-stretch text-black text-base leading-6 whitespace-nowrap mt-6 max-md:max-w-full">
                  Email
                </div>{" "}
                <div className="text-neutral-600 text-base leading-6 whitespace-nowrap items-stretch self-stretch border bg-white justify-center mt-2 p-3 border-solid border-black max-md:max-w-full">
                  Placeholder
                </div>{" "}
                <div className="self-stretch text-black text-base leading-6 whitespace-nowrap mt-6 max-md:max-w-full">
                  Message
                </div>{" "}
                <div className="text-neutral-600 text-base leading-6 whitespace-nowrap items-stretch self-stretch border bg-white mt-2 pt-3 pb-28 px-3 border-solid border-black max-md:max-w-full max-md:pb-10">
                  Type your message...
                </div>{" "}
                <div className="flex gap-2 mt-6 pr-11 pb-4 self-start items-start max-md:pr-5">
                  <div className="border bg-white flex w-[18px] shrink-0 h-[18px] flex-col border-solid border-black" />{" "}
                  <div className="text-black text-base leading-6 self-stretch grow whitespace-nowrap">
                    Checkbox
                  </div>
                </div>{" "}
                <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black mt-6 px-7 py-3 border-solid border-black self-start max-md:px-5">
                  Button
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
}
