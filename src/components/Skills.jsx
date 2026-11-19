export default function Skills() {
  const items = [
    ["Java", "java"],
    ["Python", "python"],
    ["PHP", "php"],
    ["SQL", "sql"],
    ["Spring Boot", "spring"],
    ["Flask", "flask"],
    ["React", "react"],
    ["REST APIs", "rest"],
    ["HTML", "html"],
    ["CSS", "css"],
    ["MySQL", "mysql"],
    ["SQLite", "sqlite"],
    ["Git", "git"],
    ["GitHub", "github"],
    ["VS Code", "vscode"],
    ["TensorFlow", "tensorflow"],
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>
      <div className="skills-track" aria-label="Skills">
        {[...items, ...items].map(([skill, icon], index) => (
          <article key={`${skill}-${index}`} className="skill-card" aria-hidden={index >= items.length ? "true" : undefined}>
            <img src={`/skills/${icon}.svg`} alt="" />
            <span>{skill}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
