
import Image from "next/image";
import "./About.css";

/* ==========================================
   TECHNOLOGY LOGOS
========================================== */

const skills = [
  { name: "React", type: "react" },
  { name: "Next.js", type: "next" },
  { name: "JavaScript", type: "javascript" },
  { name: "Node.js", type: "node" },
  { name: "MongoDB", type: "mongodb" },
  { name: "HTML5", type: "html" },
  { name: "CSS3", type: "css" },
];

/* ==========================================
   SKILL LOGO COMPONENT
========================================== */

function SkillLogo({ type }) {
  switch (type) {
    case "react":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <g
            fill="none"
            stroke="#61DAFB"
            strokeWidth="2.5"
          >
            <ellipse
              cx="24"
              cy="24"
              rx="19"
              ry="8"
            />
            <ellipse
              cx="24"
              cy="24"
              rx="19"
              ry="8"
              transform="rotate(60 24 24)"
            />
            <ellipse
              cx="24"
              cy="24"
              rx="19"
              ry="8"
              transform="rotate(120 24 24)"
            />
          </g>
          <circle
            cx="24"
            cy="24"
            r="4"
            fill="#61DAFB"
          />
        </svg>
      );

    case "next":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <circle
            cx="24"
            cy="24"
            r="21"
            fill="#f7f4e7"
          />
          <path
            d="M15 34V14l19 21V14"
            fill="none"
            stroke="#1b1d14"
            strokeWidth="3.6"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "javascript":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <rect
            x="4"
            y="4"
            width="40"
            height="40"
            rx="5"
            fill="#F7DF1E"
          />
          <text
            x="24"
            y="34"
            textAnchor="middle"
            fontSize="23"
            fontWeight="900"
            fill="#1b1d14"
          >
            JS
          </text>
        </svg>
      );

    case "node":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path
            d="M24 3 43 14v20L24 45 5 34V14Z"
            fill="#78B65B"
          />
          <path
            d="M16 33V15l16 18V15"
            fill="none"
            stroke="#fff"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "mongodb":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path
            d="M24 3C13 15 12 24 16 33c2 5 5 8 8 10 3-2 6-5 8-10 4-9 3-18-8-30Z"
            fill="#47A248"
          />
          <path
            d="M24 9v34"
            fill="none"
            stroke="#f7f4e7"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      );

    case "html":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path
            d="M7 4h34l-3 36-14 4-14-4Z"
            fill="#E34F26"
          />
          <path
            d="M24 40 35 37l2.5-29H24Z"
            fill="#F16529"
          />
          <path
            d="M15 13h18l-.5 5H21l.4 5h10.7l-1 10-7.1 2-7-2-.5-6h5l.2 2 2.3.7 2.5-.7.3-3H17l-1-13Z"
            fill="#fff"
          />
        </svg>
      );

    case "css":
      return (
        <svg viewBox="0 0 48 48" aria-hidden="true">
          <path
            d="M7 4h34l-3 36-14 4-14-4Z"
            fill="#1572B6"
          />
          <path
            d="M24 40 35 37l2.5-29H24Z"
            fill="#33A9DC"
          />
          <path
            d="M15 13h18l-.5 5H21l.3 5h10.8L31 33l-7 2-7-2-.5-6h5l.2 2 2.3.7 2.5-.7.3-3H17l-1-13Z"
            fill="#fff"
          />
        </svg>
      );

    default:
      return null;
  }
}

/* ==========================================
   SKILL ITEMS
========================================== */

function SkillGroup({ duplicate = false }) {
  return (
    <div
      className="about-skills-group"
      aria-hidden={duplicate ? true : undefined}
    >
      {skills.map((skill) => (
        <div
          className="about-skill-item"
          key={skill.type}
        >
          <span className="about-skill-icon">
            <SkillLogo type={skill.type} />
          </span>

          <span className="about-skill-name">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ==========================================
   MOVING SKILLS CAROUSEL
========================================== */

function MovingSkills() {
  return (
    <div className="about-skills-section">
      <span className="about-skills-label">
        TECHNOLOGIES I WORK WITH
      </span>

      <div className="about-skills-viewport">
        <div className="about-skills-track">
          <SkillGroup />
          <SkillGroup duplicate />
          <SkillGroup duplicate />
          <SkillGroup duplicate />
        </div>
      </div>
    </div>
  );
}

/* ==========================================
   ABOUT COMPONENT
========================================== */

export default function About() {
  return (
    <section
      id="about"
      className="about-section"
      aria-labelledby="about-heading"
    >
      <div className="about-container">

        {/* LEFT CONTENT */}

        <div className="about-content">
          <div className="about-label">
            <span>ABOUT ME</span>

            <span
              className="about-label-line"
              aria-hidden="true"
            />
          </div>

          <h2
            id="about-heading"
            className="about-heading"
          >
            <span className="about-heading-line">
              THINK.
            </span>

            <span className="about-heading-line">
              BUILD.
            </span>

            <span className="about-heading-line about-heading-accent">
              INNOVATE.
            </span>
          </h2>

          <p className="about-intro">
            I'm Siva, a full-stack developer who enjoys
            turning ideas into practical, user-friendly
            web applications.
          </p>

          <p className="about-description">
            With a background in Computer Science and
            Information Technology, I enjoy solving
            real-world problems through thoughtful design
            and reliable development. I focus on creating
            digital experiences that are intuitive,
            functional, and built to last.
          </p>

          <blockquote className="about-quote">
            <span
              className="about-quote-mark"
              aria-hidden="true"
            >
              “
            </span>

            <p>
              Thoughtful by design,
              <br />
              built with purpose.
            </p>
          </blockquote>

          {/* MOVING TECHNOLOGY LOGOS */}


        </div>

        {/* RIGHT IMAGE */}

        <div className="about-visual">
          <div className="about-image-card">

            {/* CARD HEADER */}

            <div className="about-card-header">
              <span className="about-card-name">
                S I V A
              </span>

              <span className="about-card-category">
                DESIGN × DEVELOPMENT
              </span>
            </div>

            {/* DEVELOPER IMAGE */}

            <div className="about-card-image">
              <Image
                src="/images/about-developer.webp"
                alt="Illustration of a developer workspace"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className="about-illustration"
              />
            </div>

            {/* CARD FOOTER */}

            <div className="about-card-footer">
              <span>
                THOUGHTFUL BY DESIGN
              </span>

              <span aria-hidden="true">
                ↗
              </span>
            </div>
          </div>

          {/* FLOATING BADGE */}

          <div className="about-card-badge">
            BUILT WITH CARE

            <span
              className="about-badge-dot"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
      <MovingSkills />
    </section>
  );
}
