"use client";

import {
  ArrowUpRight,
  ArrowUp,
  Mail,
  Asterisk,
  Heart,
} from "lucide-react";

import { useState, useEffect, useRef } from "react";
import "./Footer.css";

/* ==========================================
   GITHUB ICON
========================================== */

function GithubIcon({ size = 19 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 8 18.13V22" />
    </svg>
  );
}

/* ==========================================
   LINKEDIN ICON
========================================== */

function LinkedinIcon({ size = 19 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

/* ==========================================
   FOOTER COMPONENT
========================================== */

export default function Footer() {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const footer = footerRef.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setVisible(true);
      observer.disconnect();
    }, { threshold: 0.08 });

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const [year, setYear] = useState(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: reduceMotion ? "instant" : "smooth",
    });
  };

  return (
    <footer ref={footerRef} className="footer-section" id="contact" data-visible={visible}>
      <div className="footer-container">

        {/* MAIN FOOTER */}

        <div className="footer-main">

          {/* LEFT SIDE */}

          <div className="footer-intro">
            <div className="footer-brand">
              <Asterisk
                size={25}
                strokeWidth={3}
                aria-hidden="true"
              />

              <span>SIVASANKARAN</span>
            </div>

            <h2 className="footer-heading">
              Let's
              <br />
              work
              <br />
              together
              <span>.</span>
            </h2>

            <a
              href="mailto:sivanm.1203@gmail.com"
              className="footer-cta"
            >
              Let's talk

              <ArrowUpRight
                size={19}
                aria-hidden="true"
              />
            </a>
          </div>

          {/* RIGHT SIDE */}

          <div className="footer-contact">
            <span className="footer-label">
              CONNECT
            </span>

            {/* GITHUB */}

            <a
              href="https://github.com/imsiva03"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              <GithubIcon size={19} />

              <span>GitHub</span>

              <ArrowUpRight
                size={16}
                aria-hidden="true"
              />
            </a>

            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/sivasankaran-n-m-4962ba38b/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-link"
            >
              <LinkedinIcon size={19} />

              <span>LinkedIn</span>

              <ArrowUpRight
                size={16}
                aria-hidden="true"
              />
            </a>

            {/* EMAIL */}

            <a
              href="mailto:sivanm.1203@gmail.com"
              className="footer-contact-link"
            >
              <Mail
                size={19}
                aria-hidden="true"
              />

              <span>
                sivanm.1203@gmail.com
              </span>

              <ArrowUpRight
                size={16}
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* BOTTOM BAR */}

        <div className="footer-bottom">
          <p>
            © {year} Sivasankaran.
            All rights reserved.
          </p>

          <div className="footer-bottom-right">
            <span>
              Built with Next.js

              <span className="footer-separator">
                •
              </span>

             
            </span>

            {/* BACK TO TOP BUTTON */}

            <button
              type="button"
              className="footer-back-to-top"
              onClick={scrollToTop}
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp
                size={20}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}