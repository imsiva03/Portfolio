import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects({ heading = "Selected Work" }) {
  return (
    <section id="projects" className="projects-section scroll-mt-16">
      <p className="projects-eyebrow">Portfolio</p>
      <h2>{heading}</h2>
      <div className="project-list">
        {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
      </div>
    </section>
  );
}
