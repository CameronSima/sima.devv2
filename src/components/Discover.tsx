export default function Discover() {
  return (
    <div
      style={{ backgroundColor: "rgb(255 125 129)" }}
      className="flex-col overflow-hidden relative flex min-h-[421px] w-full pl-16 pr-20 py-12 items-start max-md:max-w-full max-md:px-5">
      <img
        style={{ filter: "blur(1px) saturate(3.5)", opacity: 0.2 }}
        loading="lazy"
        src="boathouse.png"
        className="absolute h-full w-full object-cover object-center inset-0"
      />{" "}
      <div className="relative text-white text-5xl font-bold leading-[58px] w-[768px] max-w-full mt-16 max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
        Discover My Work and Skills
      </div>{" "}
      <div className="relative text-white text-lg leading-7 w-[768px] max-w-full mt-6">
        I am a software developer with a passion for creating innovative
        solutions.
      </div>{" "}
      <div className="relative items-stretch flex gap-4 mt-6 mb-10 pt-4">
        <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border bg-black grow px-6 py-3 border-solid border-black max-md:px-5">
          Portfolio
        </div>{" "}
        <div className="text-white text-base leading-6 whitespace-nowrap justify-center items-stretch border grow px-6 py-3 border-solid border-white max-md:px-5">
          Contact
        </div>
      </div>
    </div>
  );
}
