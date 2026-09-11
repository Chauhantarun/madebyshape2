import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import ArrowButton from "./ArrowButton";

export default function Work() {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1500px] px-5 md:px-8 lg:px-10">
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
          <ProjectCard project={projects[0]} />
          <ProjectCard
            project={projects[1]}
            workLabel="• Our Work"
            workTitle={
              <>
                Take a look at
                <br />
                our projects
              </>
            }
            tall
          />
          <ProjectCard project={projects[2]} />
          <ProjectCard project={projects[3]} tall />
        </div>

        <div className="mt-16 flex flex-col items-center text-center">
          <h3 className="text-[44px] font-medium leading-[.95] tracking-[-0.055em]">
            Like what
            <br />
            you see?
          </h3>
          <ArrowButton className="mt-5">Contact us</ArrowButton>
          <div className="mt-5 text-[11px] text-black/55">
            <span className="tracking-[2px] text-[#e3b700]">★★★★★</span>{" "}
            <span className="ml-2">Google reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
