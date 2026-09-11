const logos = [
  {
    name: "Rise at Seven",
    image: "/images/rise-at-seven.svg",
  },
  {
    name: "YMU",
    image: "/images/ymu.svg",
  },
  {
    name: "Capital Centric",
    image: "/images/capital-centric.svg",
  },
  {
    name: "BlackBerry",
    image: "/images/blackberry.svg",
  },
  {
    name: "BBC",
    image: "/images/bbc.svg",
  },
];

export default function Marquee() {
  return (
    <section className="w-full overflow-hidden py-12">
      <div className="logo-marquee flex w-max">
        {/* First Set */}
        <div className="flex shrink-0 items-center gap-20 pr-20 md:gap-32 md:pr-32">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex w-[140px] shrink-0 items-center justify-center md:w-[180px]"
            >
              <img
                src={logo.image}
                alt={logo.name}
                className="max-h-[38px] max-w-[130px] object-contain md:max-w-[160px]"
              />
            </div>
          ))}
        </div>

        {/* Duplicate Set for infinite animation */}
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-20 pr-20 md:gap-32 md:pr-32"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex w-[140px] shrink-0 items-center justify-center md:w-[180px]"
            >
              <img
                src={logo.image}
                alt=""
                className="max-h-[38px] max-w-[130px] object-contain md:max-w-[160px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
