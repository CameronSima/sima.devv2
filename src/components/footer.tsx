import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="items-stretch bg-white flex w-full flex-col px-16 py-12 max-md:max-w-full max-md:px-5">
      <div className="mt-8 pb-2 max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[44%] max-md:w-full max-md:ml-0">
            <div className="items-start flex flex-col max-md:max-w-full max-md:mt-10">
              <Link href="/">
                <div className="text-black font-bold text-3xl rainbow-text">
                  Sima.dev
                </div>
              </Link>{" "}
            </div>
          </div>{" "}
          <div className="flex flex-col items-stretch w-[56%] ml-5 max-md:w-full max-md:ml-0">
            <div className="grow max-md:max-w-full max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex flex-col pb-2 max-md:mt-10">
                    <div className="text-black text-base font-semibold leading-6 whitespace-nowrap">
                      Links
                    </div>{" "}
                    <Link href="/projects">
                      <div className="text-black text-sm leading-5 whitespace-nowrap mt-4">
                        Projects
                      </div>{" "}
                    </Link>
                    <Link href="/skills">
                      <div className="text-black text-sm leading-5 whitespace-nowrap mt-4">
                        Skills
                      </div>{" "}
                    </Link>
                    <Link href="/contact">
                      <div className="text-black text-sm leading-5 whitespace-nowrap mt-4">
                        Contact
                      </div>{" "}
                    </Link>
                  </div>
                </div>{" "}
                <div className="flex flex-col items-stretch w-[33%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="items-stretch flex grow flex-col max-md:mt-10">
                    <div className="text-black text-base font-semibold leading-6 whitespace-nowrap">
                      Social
                    </div>{" "}
                    <div className="items-stretch flex justify-between gap-3 py-2">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/489f6383710b027a0fa9bce5d3ba6c3d2d92dbf504ccbbf107bda824799f67e6?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
                        className="aspect-square object-contain object-center w-7 overflow-hidden shrink-0 max-w-full"
                      />{" "}
                      <Link href="https://linkedin.com/in/cameronsima">
                        <div className="text-black text-sm leading-5">
                          LinkedIn
                        </div>
                      </Link>
                    </div>{" "}
                    <div className="items-stretch flex justify-between gap-3 py-2">
                      <img
                        loading="lazy"
                        src="/github-mark.svg"
                        className="aspect-square ml-0.5 object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                      />{" "}
                      <Link href="https://github.com/cameronsima">
                        <div className="text-black text-sm leading-5">
                          Github
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[56%] ml-5 max-md:w-full max-md:ml-0">
            <img src="/christchurch.png" />{" "}
          </div>
        </div>
      </div>{" "}
      <div className="bg-black flex shrink-0 h-px flex-col mt-20 max-md:max-w-full max-md:mt-10" />{" "}
      <div className="justify-between items-stretch flex w-full gap-5 mt-8 mb-8 max-md:max-w-full max-md:flex-wrap">
        <div className="text-black text-sm leading-5">
          © {year} sima.dev. All rights reserved.
        </div>{" "}
        <div className="items-stretch flex justify-between gap-5 max-md:justify-center">
          <div className="text-black text-sm leading-5 underline grow whitespace-nowrap">
            Privacy Policy
          </div>{" "}
          <div className="text-black text-sm leading-5 underline">
            Terms of Service
          </div>{" "}
          <div className="text-black text-sm leading-5 underline grow whitespace-nowrap">
            Cookies Settings
          </div>
        </div>
      </div>
    </div>
  );
}
