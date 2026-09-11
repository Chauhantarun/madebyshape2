const logos = [
  {
    name: "Rise at Seven",
    image: "/images/rise-at-seven.png",
  },
  {
    name: "YMU",
    image: "/images/ymu.png",
  },
  {
    name: "Capital & Centric",
    image: "/images/capital.png",
  },
  {
    name: "BlackBerry",
    image: "/images/blackberry.png",
  },
  {
    name: "BBC",
    image: "/images/bbc.png",
  },
];

export default function LogoSlider() {
  return (
    <>
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }

            100% {
              transform: translateX(-50%);
            }
          }

          .marquee-track {
            display: flex;
            width: max-content;
            animation: marquee 15s linear infinite;
          }
        `}
      </style>

      <section className="w-full overflow-hidden py-10">
        <div className="marquee-track">
          {/* First copy */}
          <div className="flex shrink-0 items-center">
            {logos.map((logo, index) => (
              <div
                key={`first-${index}`}
                className="flex w-[220px] shrink-0 items-center justify-center px-8"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-h-[50px] max-w-[160px] object-contain"
                />
              </div>
            ))}
          </div>

          {/* Second copy */}
          <div className="flex shrink-0 items-center">
            {logos.map((logo, index) => (
              <div
                key={`second-${index}`}
                className="flex w-[220px] shrink-0 items-center justify-center px-8"
              >
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-h-[50px] max-w-[160px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
