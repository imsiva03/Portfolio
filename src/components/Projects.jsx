import Image from "next/image";
import { projects } from "@/data/projects";
import "./Gallery.css";

export default function Projects() {
  return (
    <section id="projects" className="work-gallery">
      <p>Portfolio</p>
      <h2>My Works</h2>
      <div className="project-stack">
      {projects.map(project => (
        <article key={project.id}>
          <div className="work-image">
            <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) 90vw, 1050px" />
          </div>
          <header><h3>{project.title}</h3><time>{project.year}</time></header>
          <small>{project.technologies.join(" · ")}</small>
          <p>{project.description}</p>
          {project.link && <a href={project.link}>View project ↗</a>}
        </article>
      ))}
      </div>
    </section>
  );
}
