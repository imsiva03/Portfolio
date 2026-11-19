export default function ProjectCard({ project, index }) {
  const { title, category, year, live, github } = project;
  const destination = live || github;
  const content = (
    <>
      <div className={`project-art project-art-${(index % 3) + 1}`} aria-hidden="true">
        <span>Project screenshot</span>
      </div>
      <div className="project-card-details">
        <div className="project-card-heading">
          <h3>{title}</h3>
          <span>{year}</span>
        </div>
        <p>{category}</p>
      </div>
    </>
  );

  return destination ? (
    <a className="project-card" href={destination} target="_blank" rel="noreferrer">
      {content}
    </a>
  ) : (
    <article className="project-card">
      {content}
    </article>
  );
}
