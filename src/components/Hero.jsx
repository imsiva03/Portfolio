
import "./Hero.css";

import { profile } from "@/data/profile";
import { ChevronsDown, ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-ambient" aria-hidden="true">
        <span />
        <span />
      </div>

      <div className="hero-content">
        {/* Main heading */}
        <h1 className="hero-title">
          <span>
            Hi, I'm Siva — a Full Stack Developer
            <br className="hero-title-break" />
            {" "}building web apps that people love.
          </span>
        </h1>

        {/* Buttons and developer stamp */}
        <div className="hero-actions">
          <div className="hero-stamp" aria-label="Siva developer logo">
            <svg
              viewBox="0 0 120 120"
              width="110"
              height="110"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="hero-stamp-circle"
                  d="M60,60 m-43,0 a43,43 0 1,1 86,0 a43,43 0 1,1 -86,0"
                />
              </defs>

              <text>
                <textPath href="#hero-stamp-circle">
                  FULL STACK DEV · SIVASANKARAN ·
                </textPath>
              </text>
            </svg>

            <span className="hero-stamp-center">
              {profile.initials}
            </span>
          </div>

          <a className="hero-work-button" href="#projects">
            View My Work
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>

          <div className="hero-contact-panel">
            <a
              className="hero-contact-link"
              href={`mailto:${profile.email}`}
            >
              Let's Talk
              <ArrowUpRight size={17} aria-hidden="true" />
            </a>

            <div className="hero-social-links">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                GH
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <a className="hero-scroll" href="#about">
          <ChevronsDown
            className="hero-scroll-icon"
            size={24}
            aria-hidden="true"
          />

          <span className="hero-scroll-text">
            Scroll To Explore
          </span>
        </a>
      </div>
    </section>
  );
}
