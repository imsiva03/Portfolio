import { skills } from "@/data/skills";

const concepts = skills
  .flatMap((group) => group.items.map((skill) => ({ skill, category: group.group })))
  .slice(0, 8);

export default function Concepts() {
  return (
    <section id="concepts" className="section-block concepts-section scroll-mt-16">
      <div className="section-heading">
        <h2>Concepts</h2>
      </div>
      <div className="concept-gallery" role="list" aria-label="Selected technologies">
        {concepts.map(({ skill, category }, index) => (
          <article
            key={skill}
            className={`concept-tile concept-card-${(index % 5) + 1}`}
            aria-label={`${skill}, ${category}`}
            role="listitem"
          >
            <div className="concept-art">
              <span className="concept-art-mark" aria-hidden="true">{category}</span>
              <div className="concept-orbit concept-orbit-one" aria-hidden="true" />
              <div className="concept-orbit concept-orbit-two" aria-hidden="true" />
              <div className="concept-art-copy">
                <p>{category}</p>
                <h3>{skill}</h3>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
