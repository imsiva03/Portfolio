export default function ProjectCard({ project, index }) {
  const { title, stack, live, github } = project;
  const category = stack[0];

  return (
    <a className="project-card" href={live || github || "#"} target={live || github ? "_blank" : undefined} rel={live || github ? "noreferrer" : undefined}>
      <div className={`project-art project-art-${(index % 4) + 1}`} aria-hidden="true" />
      <h3>{title}</h3>
      <p>{category} · 2026</p>
    </a>
  );
}
