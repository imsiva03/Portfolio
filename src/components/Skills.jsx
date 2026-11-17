import { Code2, Database, Layers3, Wrench, BrainCircuit } from "lucide-react";
import { skills } from "@/data/skills";

const icons = [Code2, Layers3, Database, Wrench, BrainCircuit];

export default function Skills() {
  return (
    <section id="skills" className="section-block scroll-mt-16">
      <div className="section-heading">
        <p>Skills</p>
        <h2>Tools I build with</h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, index) => {
          const Icon = icons[index % icons.length];
          return (
            <article key={group.group} className="skill-card">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-accent">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <h3 className="font-heading font-semibold">{group.group}</h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li key={skill} className="rounded-full border border-line bg-bg/70 px-3 py-1.5 text-xs text-muted">
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}
