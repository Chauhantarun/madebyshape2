import { useEffect, useRef } from "react";
import ArrowButton from "./ArrowButton";

const logos = [
  {
    image: "/assets/1.PNG",
    alt: "2A",
  },
  {
    image: "/assets/2.PNG",
    alt: "2A",
  },
  {
    image: "/assets/3.PNG",
    alt: "2A",
  },
  {
    image: "/assets/4.PNG",
    alt: "2A",
  },
];

export default function About() {
  const sliderRef = useRef(null);

  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const animationFrame = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    slider.scrollLeft = slider.scrollWidth / 3;

    const autoSlide = () => {
      if (!isDragging.current) {
        // Auto move to right
        slider.scrollLeft -= 0.5;

        const sectionWidth = slider.scrollWidth / 3;

        if (slider.scrollLeft <= 0) {
          slider.scrollLeft += sectionWidth;
        }

        if (slider.scrollLeft >= sectionWidth * 2) {
          slider.scrollLeft -= sectionWidth;
        }
      }

      animationFrame.current = requestAnimationFrame(autoSlide);
    };

    animationFrame.current = requestAnimationFrame(autoSlide);

    return () => {
      cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  const handlePointerDown = (e) => {
    const slider = sliderRef.current;

    isDragging.current = true;

    startX.current = e.clientX;
    startScrollLeft.current = slider.scrollLeft;

    slider.setPointerCapture(e.pointerId);
    slider.style.cursor = "grabbing";
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;

    const slider = sliderRef.current;

    const distance = e.clientX - startX.current;

    slider.scrollLeft = startScrollLeft.current - distance;
  };

  const handlePointerUp = (e) => {
    const slider = sliderRef.current;

    isDragging.current = false;

    if (slider?.hasPointerCapture(e.pointerId)) {
      slider.releasePointerCapture(e.pointerId);
    }

    if (slider) {
      slider.style.cursor = "grab";
    }
  };

  const infiniteLogos = [...logos, ...logos, ...logos];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-10">
        {/* ABOUT CONTENT */}
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr] lg:items-start">
          <p className="text-[12px] font-medium">• Who are we?</p>

          <div>
            <h2 className="max-w-[950px] text-[36px] font-medium leading-[1.03] tracking-[-0.055em] sm:text-[45px] md:text-[55px]">
              An independent web design and branding agency in Manchester set up
              in 2010 who care, build relationships, have industry experience,
              and win awards.
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">
              <ArrowButton href="#contact">About Shape</ArrowButton>

              <a
                href="#contact"
                className="rounded-full border border-black/10 px-5 py-3 text-[13px] font-medium"
              >
                Meet the Team ↗
              </a>
            </div>
          </div>
        </div>

        {/* LOGO SLIDER */}
        <div className="mt-20 border-t border-black/10 pt-10">
          <div
            ref={sliderRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="
              flex
              cursor-grab
              select-none
              overflow-hidden
              touch-pan-y
            "
          >
            {infiniteLogos.map((logo, index) => (
              <div
                key={`${logo.alt}-${index}`}
                className="
                  flex
                  min-w-[220px]
                  shrink-0
                  items-center
                  justify-center
                  px-8

                  sm:min-w-[280px]
                  md:min-w-[330px]
                  lg:min-w-[370px]
                "
              >
                <img
                  src={logo.image}
                  alt={logo.alt}
                  draggable="false"
                  className="
                    h-[55px]
                    w-auto
                    max-w-[180px]
                    object-contain
                    grayscale
                    transition-all
                    duration-300
                    hover:grayscale-0

                    md:h-[65px]
                    md:max-w-[210px]
                  "
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
