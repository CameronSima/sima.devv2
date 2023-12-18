export function TestimonalCarousel() {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <Testimonial
          name="Aleister Wilders"
          content="I am extremely impressed with Cam's services. His
          expertise and attention to detail have greatly benefited my projects."
          company="PSYLKO"
          position="CEO"
          image="/aleister.png"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <Testimonial
          content="The work done by Cam on my project was exceptional. He delivered a
          high-quality product that exceeded my expectations."
          name="Mike Sabolick"
          position="CEO"
          image="mike.png"
          company="Party Headquarters"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <Testimonial
          name="Aleister Wilders"
          content="I am extremely impressed with Cam's services. His
          expertise and attention to detail have greatly benefited my projects."
          company="PSYLKO"
          position="CEO"
          image="/aleister.png"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <Testimonial
          content="The work done by Cam on my project was exceptional. He delivered a
          high-quality product that exceeded my expectations."
          name="Mike Sabolick"
          position="CEO"
          image="mike.png"
          company="Party Headquarters"
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Testimonial({
  company,
  position,
  name,
  content,
  image,
}: {
  company: string;
  position: string;
  name: string;
  content: string;
  image: string;
}) {
  return (
    <div className="items-center bg-white flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
      <div className="items-stretch flex w-[116px] max-w-full gap-1 mt-16 max-md:justify-center max-md:mt-10">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={`star-${index}`} />
        ))}
      </div>{" "}
      <div className="text-black text-center text-2xl font-bold leading-9 max-w-screen-md mt-8 max-md:max-w-full">
        {content}
      </div>
      <div className="items-center flex justify-between gap-5 mt-8 mb-10 py-1 max-md:justify-center">
        <img
          loading="lazy"
          src={image}
          className="aspect-square object-contain object-center w-14 overflow-hidden self-stretch shrink-0 max-w-full rounded-[50%]"
        />
        <div className="items-stretch flex grow basis-[0%] flex-col my-auto">
          <div className="text-black text-base font-semibold leading-6">
            {name}
          </div>
          <div className="text-black text-base leading-6 whitespace-nowrap">
            {position}, {company}
          </div>
        </div>
      </div>
    </div>
  );
}

function Star() {
  return (
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d210cbcd585872c1933ec816a262f2741c2d1bd3676dfa169aea41ec25eeffeb?apiKey=743de8c190c34c4cbb3bf38ac8b5b69c&"
      className="aspect-[1.05] object-contain object-center w-full fill-black overflow-hidden shrink-0 flex-1"
    />
  );
}
