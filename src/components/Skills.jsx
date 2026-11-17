import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-12">
      <h2 className="mb-8 font-heading text-3xl font-bold">Skills</h2>
      <div className="space-y-6">
        {skills.map((g) => (
          <div key={g.group} className="flex flex-col gap-3 sm:flex-row sm:items-start">
            <h3 className="w-32 shrink-0 pt-2 text-sm font-semibold">{g.group}</h3>
            <ul className="flex flex-wrap gap-3">
              {g.items.map((s) => (
                <li key={s} className="rounded-full border-2 border-line bg-card px-4 py-2 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
