export default function ProjectCard({ description, icon = "ri-folder-line", image, stack = [], title, type, url }) {
  return (
    <div className="slide project-slide w-full min-h-screen flex-shrink-0">
      <article className="project-card">
        <div className="project-preview">
          <img src={image} alt={title} />
        </div>

        <div className="project-content">
          <div className="project-meta">
            <span className="project-icon">
              <i className={icon} aria-hidden="true" />
            </span>
            <span>{type}</span>
          </div>

          <h2>{title}</h2>
          <p>{description}</p>

          <div className="project-stack">
            {stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <a className="project-link" href={url} target="_blank" rel="noreferrer">
            View project
            <i className="ri-arrow-right-up-line" aria-hidden="true" />
          </a>
        </div>
      </article>
    </div>
  );
}
