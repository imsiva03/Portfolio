
import Image from "next/image";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import "./Projects.css";

function ProjectVisual({ project }) {
  return (
    <div className="project-visual">
      <div className="project-image-backdrop">
        <div className="project-image-frame">
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="project-image"
          />
        </div>
      </div>
    </div>
  );
}

function ProjectDetails({ project }) {
  return (
    <div className="project-details">
      <div className="project-meta">
        <span>{project.number} / {project.year}</span>
      </div>

      <h3 className="project-title">
        {project.title}
      </h3>

      <p className="project-description">
        {project.description}
      </p>

      <div className="project-technologies">
        {project.technologies.map((tech) => (
          <span className="project-tech" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          className="project-view-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
          <ArrowUpRight size={18} />
        </a>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="projects-section"
      aria-labelledby="projects-heading"
    >
      <div className="projects-container">
        {/* SECTION HEADER */}
        <div className="projects-header">
          <div>
            <span className="projects-eyebrow">
              PORTFOLIO / 2024 — 2026
            </span>

            <h2
              id="projects-heading"
              className="projects-heading"
            >
              Selected Work
              <span
                className="projects-heading-star"
                aria-hidden="true"
              >
                ✳
              </span>
            </h2>
          </div>

          <span className="projects-count">
            01 — 03
          </span>
        </div>

        {/* PROJECT TIMELINE */}
        <div className="projects-timeline">
          {/* CENTRAL CURVED LINE */}
          <svg
            className="projects-divider"
            viewBox="0 0 100 1000"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="
                M 50 0
                C 80 100, 20 210, 50 330
                S 80 550, 50 665
                S 20 880, 50 1000
              "
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {projects.map((project, index) => {
            const reverse = index % 2 === 1;

            return (
              <article
                key={project.id}
                className={`project-row ${
                  reverse ? "project-row-reverse" : ""
                }`}
              >
                {/* LEFT COLUMN */}
                <div className="project-column project-column-left">
                  {reverse ? (
                    <ProjectDetails project={project} />
                  ) : (
                    <ProjectVisual project={project} />
                  )}
                </div>

                {/* CENTER DOT */}
                <div
                  className="project-timeline-dot"
                  aria-hidden="true"
                />

                {/* RIGHT COLUMN */}
                <div className="project-column project-column-right">
                  {reverse ? (
                    <ProjectVisual project={project} />
                  ) : (
                    <ProjectDetails project={project} />
                  )}
                </div>
              </article>
            );
          })}
        </div>

        {/* MORE TO COME */}
        <div className="projects-ending">
          <div
            className="projects-ending-line"
            aria-hidden="true"
          />

          <div className="projects-more">
            <span>MORE TO COME</span>

            <ArrowUpRight
              size={28}
              strokeWidth={2.5}
              aria-hidden="true"
            />
          </div>

          <p className="projects-ending-description">
            Always learning. Always building.
            The next project is already in progress.
          </p>
        </div>
      </div>
    </section>
  );
}
