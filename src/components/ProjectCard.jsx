export default function ProjectCard({
  project,
  tall = false,
  workLabel,
  workTitle,
}) {
  return (
    <article className="group">
      {/* Show only when props have values */}
      {(workLabel || workTitle) && (
        <div className="mb-12 grid gap-6 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
          {workLabel && <p className="text-[12px] font-medium">{workLabel}</p>}

          {workTitle && (
            <h5 className="mt-1 max-w-[680px] text-[23px] font-medium leading-[1.02] tracking-[-0.045em] sm:text-[27px]">
              {workTitle}
            </h5>
          )}
        </div>
      )}

      <div
        className={`overflow-hidden rounded-[24px] bg-[#ecece8] ${
          tall ? "aspect-[1.16/1]" : "aspect-[1.45/1]"
        }`}
      >
        <img
          src={project.image}
          alt={project.client}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />
      </div>

      <div className="mt-4">
        <div className="flex flex-wrap items-center gap-2 text-[11px] text-black/70">
          <span>{project.year}</span>
          <span>•</span>
          <span>{project.client}</span>
        </div>

        <h5 className="mt-1 max-w-[680px] text-[23px] font-medium leading-[1.02] tracking-[-0.045em] sm:text-[27px]">
          {project.title}
        </h5>
      </div>
    </article>
  );
}
