
import Image from "next/image";
import "./About.css";

export default function About() {
  return (
    <section
      id="about"
      className="about-section"
      aria-labelledby="about-heading"
    >
      <div className="about-container">
        <div className="about-content">
          <div className="about-label">
            <span>ABOUT ME</span>
            <span
              className="about-label-line"
              aria-hidden="true"
            />
          </div>

          <h2 id="about-heading" className="about-heading">
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
        </div>

        <div className="about-visual">
          <div className="about-image-card">
            <div className="about-card-header">
              <span className="about-card-name">
                S I V A
              </span>

              <span className="about-card-category">
                DESIGN × DEVELOPMENT
              </span>
            </div>

            <div className="about-card-image">
              <Image
                src="/images/about-developer.webp"
                alt="Illustration of a developer workspace"
                fill
                sizes="(max-width: 900px) 100vw, 45vw"
                className="about-illustration"
              />
            </div>

            <div className="about-card-footer">
              <span>THOUGHTFUL BY DESIGN</span>
              <span aria-hidden="true">↗</span>
            </div>
          </div>

          <div className="about-card-badge">
            BUILT WITH CARE
            <span
              className="about-badge-dot"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

