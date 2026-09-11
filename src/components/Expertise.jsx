import ArrowButton from "./ArrowButton";

const services = ["Brand Identity", "Websites", "SEO", "Craft CMS", "Shopify"];

export default function Expertise() {
  return (
    <section id="services" className="bg-black py-20 text-white md:py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
          <p className="text-[12px] text-white/70">• Our Expertise</p>
          <div className="grid gap-8 md:grid-cols-[1.35fr_.65fr]">
            <h2 className="text-[36px] font-medium leading-[.98] tracking-[-0.05em] sm:text-[47px]">
              How we take your
              <br />
              business to the next level
            </h2>
            <div>
              <p className="max-w-[330px] text-[14px] leading-6 text-white/70">
                We are a digital marketing agency with expertise, and we’re on a
                mission to help you take the next step in your business.
              </p>
              <ArrowButton className="mt-5">See all services</ArrowButton>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10">
          {services.map((service, i) => (
            <a
              key={service}
              href="#contact"
              className="group relative flex items-center justify-center border-b border-white/10 py-5 md:py-7"
            >
              <span className="text-center text-[48px] font-medium leading-none tracking-[-0.06em] text-white/45 transition-colors group-hover:text-white sm:text-[64px] md:text-[78px]">
                {service}
              </span>

              <span className="absolute right-0 grid h-12 w-12 shrink-0 place-items-center rounded-full bg-lime text-2xl text-black transition-transform duration-300 group-hover:rotate-45">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
