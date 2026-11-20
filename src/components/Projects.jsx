
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import "./Projects.css";

/* ==========================================
   PROJECT IMAGE PATHS
========================================== */

const PROJECT_IMAGES = {
  ecommerce: "/images/projects/ecommerce.webp",
  smartcardio: "/images/projects/smartcardio.webp",
  music: "/images/projects/music.webp",
};

/* ==========================================
   GET PROJECT IMAGE
========================================== */

function getProjectImage(project) {
  const identifier = `${project.id ?? ""} ${project.title ?? ""}`
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");

  if (
    identifier.includes("ecommerce") ||
    identifier.includes("buyora")
  ) {
    return PROJECT_IMAGES.ecommerce;
  }

  if (
    identifier.includes("smartcardio") ||
    identifier.includes("smartcadio")
  ) {
    return PROJECT_IMAGES.smartcardio;
  }

  if (identifier.includes("music")) {
    return PROJECT_IMAGES.music;
  }

  return project.image;
}

/* ==========================================
   PROJECT VISUAL
========================================== */

function ProjectVisual({ project }) {
  const imageSrc = getProjectImage(project);

  return (
    <div className="project-visual">
      <div className="project-image-backdrop">
        <div className="project-image-frame">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={
                project.imageAlt ||
                `${project.title} project illustration`
              }
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="project-image"
              draggable={false}
            />
          )}
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   PROJECT DETAILS
========================================== */

function ProjectDetails({ project }) {
  return (
    <div className="project-details">
      <div className="project-meta">
        <span>
          {project.number} / {project.year}
        </span>
      </div>

      <h3 className="project-title">
        {project.title}
      </h3>

      <p className="project-description">
        {project.description}
      </p>

      <div className="project-technologies">
        {(project.technologies || []).map((tech) => (
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

          <ArrowUpRight
            size={18}
            aria-hidden="true"
          />
        </a>
      )}
    </div>
  );
}

/* ==========================================
   CURVED TIMELINE LINE
========================================== */

function ProjectTimelineLine() {
  return (
    <svg
      className="project-row-line"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="
          M 50 0
          C 72 16, 72 34, 50 50
          C 28 66, 28 84, 50 100
        "
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/* ==========================================
   INDIVIDUAL PROJECT ROW
========================================== */

function ProjectRow({ project, index }) {
  const reverse = index % 2 === 1;

  return (
    <article
      className={`project-row ${
        reverse ? "project-row-reverse" : ""
      }`}
    >
      {/* CONNECTED CURVED LINE */}

      <ProjectTimelineLine />

      {/* LEFT COLUMN */}

      <div className="project-column project-column-left">
        {reverse ? (
          <ProjectDetails project={project} />
        ) : (
          <ProjectVisual project={project} />
        )}
      </div>

      {/* CENTER TIMELINE DOT */}

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
}

/* ==========================================
   PROJECTS SECTION
========================================== */

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
            01 — {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        {/* PROJECT TIMELINE */}

        <div className="projects-timeline">
          {projects.map((project, index) => (
            <ProjectRow
              key={project.id ?? project.title}
              project={project}
              index={index}
            />
          ))}
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
