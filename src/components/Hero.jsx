import { profile } from "@/data/profile";
import { ArrowDown, ArrowUpRight } from "lucide-react";

const expertise = [
  "REST APIs",
  "Database Design",
  "Python & Flask",
  "Java & Spring Boot",
  "Full Stack Development",
];

export default function Hero() {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="hero-ambient" aria-hidden="true">
          <span />
          <span />
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span>
              Hi, I’m Siva — a Full Stack Developer building
              <br className="hero-title-break" /> web apps that people love.
            </span>
          </h1>
          <div className="hero-work-row">
            <div className="hero-stamp" aria-hidden="true">
              <svg viewBox="0 0 120 120">
                <defs>
                  <path id="hero-stamp-circle" d="M60 60m-43 0a43 43 0 1 1 86 0a43 43 0 1 1-86 0" />
                </defs>
                <text>
                  <textPath href="#hero-stamp-circle">DEVELOPER · SIVASANKARAN N M · </textPath>
                </text>
              </svg>
              <span>{profile.initials}</span>
            </div>
            <a className="hero-work-button" href="#projects">
              View My Work
            </a>
          </div>
          <div className="hero-contact-panel">
            <a className="hero-contact-link" href={`mailto:${profile.email}`}>
              Let’s Talk <ArrowUpRight size={16} aria-hidden="true" />
            </a>
            <div className="hero-social-links">
              <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer">
                <span aria-hidden="true">GH</span>
              </a>
              <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <span aria-hidden="true">in</span>
              </a>
            </div>
          </div>
          <a className="hero-scroll" href="#projects">
            <ArrowDown size={14} aria-hidden="true" /> Scroll to Explore
          </a>
        </div>
      </section>
      <section className="expertise-strip" aria-label="Areas of expertise">
        <div className="expertise-track">
          {[...expertise, ...expertise].map((item, index) => (
            <span className="expertise-item" key={`${item}-${index}`} aria-hidden={index >= expertise.length}>
              {item}<span className="expertise-star" aria-hidden="true">✦</span>
            </span>
          ))}
        </div>
      </section>
    </>
  );
}
