import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section-block scroll-mt-16">
      <div className="section-heading">
        <p>Latest work</p>
        <h2>Selected projects</h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => <ProjectCard key={project.title} project={project} index={index} />)}
      </div>
    </section>
  );
}
