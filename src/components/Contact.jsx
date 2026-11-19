import { profile } from "@/data/profile";
import { ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="footer-top">
        <a className="footer-wordmark" href="#home">
          <span aria-hidden="true">✦</span> {profile.name}
        </a>
        <div className="footer-column">
          <h3>Work</h3>
          <a href="#projects">Portfolio</a>
        </div>
        <div className="footer-column">
          <h3>Connect</h3>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </div>
      <div className="footer-callout">
        <h2>Let’s work<br />together</h2>
        <a href={`mailto:${profile.email}`} className="footer-cta">
          Let’s talk <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </div>
      <small className="footer-copyright">©2026 {profile.name} · Chennai, India</small>
    </section>
  );
}
