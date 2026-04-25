const projectCardClasses =
  "grid w-[min(1120px,100%)] min-h-[620px] grid-cols-[minmax(240px,1.05fr)_minmax(260px,0.95fr)] items-center gap-9 overflow-hidden rounded-lg border border-[rgba(56,90,100,0.18)] bg-white/80 p-7 shadow-[0_24px_70px_rgba(45,49,66,0.12)] max-[900px]:min-h-0 max-[900px]:grid-cols-1 max-[900px]:gap-6 max-[900px]:p-5 max-[520px]:h-[calc(100vh-80px)] max-[520px]:grid-rows-[minmax(0,1fr)_auto] max-[520px]:gap-2 max-[520px]:p-3";

export default function ProjectCard({ description, icon = "ri-folder-line", image, stack = [], title, type, url }) {
  return (
    <div className="slide project-slide w-full min-h-screen flex-shrink-0">
      <article className={projectCardClasses}>
        <div className="project-preview max-[520px]:!h-full max-[520px]:!min-h-0">
          <img className="max-[520px]:!h-full max-[520px]:!max-h-full max-[520px]:!w-full" src={image} alt={title} />
        </div>

        <div className="project-content max-[900px]:min-h-0">
          <div className="project-meta">
            <span className="project-icon max-[520px]:!h-9 max-[520px]:!w-9 max-[520px]:!text-lg">
              <i className={icon} aria-hidden="true" />
            </span>
            <span>{type}</span>
          </div>

          <h2 className="max-[900px]:!mt-3 max-[900px]:!text-[30px] max-[900px]:!leading-none max-[520px]:!text-[24px]">{title}</h2>
          <p className="max-[900px]:!mt-2 max-[900px]:line-clamp-3 max-[900px]:!text-[14px] max-[900px]:!leading-snug max-[520px]:line-clamp-2 max-[520px]:!text-[13px]">{description}</p>

          <div className="project-stack max-[900px]:!mt-3 max-[520px]:!mt-2 max-[520px]:!gap-1.5">
            {stack.map((item) => (
              <span className="max-[520px]:!px-2 max-[520px]:!py-1 max-[520px]:!text-xs" key={item}>{item}</span>
            ))}
          </div>

          <a className="project-link max-[900px]:!mt-4 max-[520px]:!mt-3 max-[520px]:!w-full max-[520px]:!justify-center max-[520px]:!px-3 max-[520px]:!py-2 max-[520px]:!text-sm" href={url} target="_blank" rel="noreferrer">
            View project
            <i className="ri-arrow-right-up-line" aria-hidden="true" />
          </a>
        </div>
      </article>
    </div>
  );
}
