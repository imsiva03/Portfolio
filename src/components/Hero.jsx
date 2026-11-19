import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-name">{profile.name.split(" ")[0].toUpperCase()}.</span>
          <span className="hero-role">DEVELOPER.</span>
        </h1>
        <p className="hero-description">
          <span>I build database-driven web applications with Java, Spring</span>
          <span>Boot, Python and React. Explore my projects, skills, and</span>
          <span>education.</span>
        </p>
      </div>
    </section>
  );
}
