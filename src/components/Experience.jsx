export default function Experience() {
  return (
    <section id="experience" className="experience-section" aria-labelledby="experience-heading">
      <header>
        <h2 id="experience-heading">Experience</h2>
        <p>Work and education</p>
      </header>
      <div className="experience-map">
        <section className="experience-branch" aria-labelledby="work-history">
          <h3 id="work-history">Work</h3>
          <article>
            <small>Sep 2026 – Present</small>
            <h4>Full Stack Intern</h4>
            <p>Weboin</p>
          </article>
        </section>
        <section className="experience-branch" aria-labelledby="education-history">
          <h3 id="education-history">Education</h3>
          <article>
            <small>2024–2026</small>
            <h4>M.Sc. in Information Technology</h4>
            <p>D. G. Vaishnav College, Chennai</p>
          </article>
          <article>
            <small>2021–2024</small>
            <h4>B.Sc. in Computer Science</h4>
            <p>D. G. Vaishnav College, Chennai</p>
          </article>
        </section>
      </div>
    </section>
  );
}
