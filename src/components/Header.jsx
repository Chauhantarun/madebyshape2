import { ArrowUpRight, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const nav = ["Services", "Work", "About", "Blog", "Contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 lg:px-9 lg:pt-6">
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "max-w-[1185px] rounded-full bg-white/90 px-7 py-4 shadow-nav backdrop-blur-xl"
            : "max-w-[1840px] bg-transparent px-0 py-1"
        }`}
      >
        <a
          href="#"
          className="text-[32px] font-bold leading-none tracking-[-0.06em] lg:text-[38px]"
        >
          Shape.
        </a>

        <nav className="hidden items-center gap-11 lg:flex">
          {nav.map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-[18px] font-medium tracking-[-0.035em] hover:opacity-60"
            >
              {item}
              {i === 0 && (
                <span className="absolute -right-4 -top-3 rounded-full bg-acid px-1.5 py-0.5 text-[11px] font-semibold leading-none">
                  13
                </span>
              )}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <Moon className="h-5 w-5 fill-black stroke-black" />
          <a
            style={{ backgroundColor: "#D0FF71" }}
            href="#contact"
            className="group flex items-center rounded-full bg-acid pl-6 pr-2 py-2 text-[17px] font-medium tracking-[-0.035em]"
          >
            Start a project
            <span className="ml-4 grid h-9 w-9 place-items-center rounded-full bg-acid transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-[18px] w-[18px]" />
            </span>
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="grid h-11 w-11 place-items-center rounded-full bg-black text-white lg:hidden"
          aria-label="Menu"
        >
          <span className="text-lg">{open ? "×" : "☰"}</span>
        </button>
      </div>

      {open && (
        <div className="mx-4 mt-2 rounded-[26px] bg-black p-6 text-white shadow-xl lg:hidden">
          {nav.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block border-b border-white/15 py-3 text-2xl"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
