export default function SkillItem({ description, icon = "ri-stack-line", skills = [], title }) {
  return (
    <article className="skill-card">
      <div className="skill-card__top">
        <div className="skill-card__icon">
          <i className={icon} aria-hidden="true" />
        </div>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
      <div className="skill-tags">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </article>
  );
}
