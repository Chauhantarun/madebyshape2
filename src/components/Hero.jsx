import ArrowButton from "./ArrowButton";

export default function Hero() {
  return (
    <section id="top" className="overflow-hidden pb-20 pt-12 md:pt-20 lg:pb-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-10">
        <div className="relative min-h-[660px] lg:min-h-[720px]">
          <div className="relative z-20 max-w-[900px] pt-10 md:ml-[12%] md:pt-20 lg:ml-[17%] ">
            <p className=" text-[13px] font-medium  bg-white">
              • Hiya, we’re Shape <span className="ml-1 bg-white">👋</span>
            </p>
            <h1 className="max-w-[850px] text-[56px] font-medium leading-[0.92] tracking-[-0.065em] sm:text-[70px] md:text-[83px] lg:text-[96px] bg-white">
              A web design and
              <br />
              branding agency
              <br />
              in Manchester
            </h1>
            <div className="mt-5 flex flex-wrap items-center  gap-3">
              <ArrowButton dark href="#work">
                View our work
              </ArrowButton>
              <a
                href="#about"
                className="rounded-full bg-white px-5 py-3 text-[13px] font-medium shadow-soft transition hover:-translate-y-0.5"
              >
                Meet the team ↗
              </a>
            </div>
          </div>

          <div className="absolute bottom-0 left-[2%] z-0 hidden h-[360px] w-[130px] overflow-hidden rounded-[24px] bg-[#e6d4a1] md:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,#f6e2dd_0,transparent_35%),linear-gradient(155deg,#f0e7c8,#d9bc71)]" />
          </div>

          <div className="absolute bottom-0 right-[2%] top-0 z-0 w-[98%] overflow-hidden rounded-[28px] bg-[#e8ddd0] max-lg:top-[300px] max-md:static max-md:mt-12 max-md:h-[500px] max-md:w-full">
            <video
              autoPlay
              muted
              loop
              playsInline
              poster="/assets/hero-poster.jpg"
              className="h-full w-full object-cover"
            >
              <source
                src="https://servd-made-byshape.b-cdn.net/production/uploads/videos/showreel-2024-portrait_cropped.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/12 via-transparent to-white/10" />
            <div className="absolute bottom-6 right-6 rounded-full bg-white px-4 py-3 text-[11px] font-medium shadow-soft">
              <span className="mr-2 inline-grid h-6 w-6 place-items-center rounded-full bg-black text-white">
                A
              </span>
              Hear from Andy
              <br />
              <span className="pl-8 text-black/55">Co-Founder of Shape</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
