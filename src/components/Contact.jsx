import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Project in mind?</h2>
      <p>Feel free to reach out for work opportunities, or just to chat</p>
      <div className="contact-links">
        <a href={profile.linkedin} target="_blank" rel="noreferrer">Linkedin</a>
        <a href={`mailto:${profile.email}`}>Email</a>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
      <small>©2026</small>
    </section>
  );
}
