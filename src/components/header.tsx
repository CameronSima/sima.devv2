import Link from "../../node_modules/next/link";

export default function Header() {
  return (
    <div className="justify-center items-stretch bg-white flex w-full flex-col px-16 py-4 border-b-black border-b border-solid max-md:max-w-full max-md:px-5">
      <div className="justify-between items-center flex w-full gap-5 max-md:max-w-full max-md:flex-wrap max-md:mr-1">
        <Link href="/">
          <div className="text-black font-extrabold text-3xl rainbow-text">
            Sima.dev
          </div>
        </Link>

        <div className="justify-between items-center self-stretch flex gap-5 max-md:max-w-full max-md:flex-wrap">
          <div className="items-stretch flex justify-between gap-5 my-auto max-md:justify-center">
            <Link href="/projects">
              <div className="text-black text-base hover:underline leading-6">
                Projects
              </div>
            </Link>
            <Link href="/skills">
              <div className="text-black text-base hover:underline leading-6">
                Skills
              </div>
            </Link>
            <div className="justify-between items-stretch flex gap-1">
              <Link href="/contact">
                <div className="text-black text-base hover:underline leading-6 grow whitespace-nowrap">
                  Contact
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
