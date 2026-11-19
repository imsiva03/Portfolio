import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects({ heading = "Featured projects", showAllLink = true }) {
  return (
    <section id="projects" className="section-block scroll-mt-16">
      <h2>{heading}</h2>
      <div className="project-list">
        {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
      </div>
    </section>
  );
}
