import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  const { title, stack, description, live, github, tone } = project;
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border-2 border-line bg-card shadow-[6px_6px_0_var(--line)] transition hover:-translate-y-1">
      <div
        className="flex h-36 items-center justify-center px-4 text-center font-heading text-lg font-bold text-[#111]"
        style={{ background: tone }}
      >
        {title}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-muted">{description}</p>
        <ul className="mt-4 flex flex-wrap gap-2 text-xs">
          {stack.map((t) => (
            <li key={t} className="rounded-md bg-tint px-2 py-1">{t}</li>
          ))}
        </ul>
        <div className="mt-5 flex gap-5 pt-1 text-sm">
          {live && (
            <a href={live} className="inline-flex items-center gap-1 border-b border-ink hover:text-accent">
              Live demo <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
          {github && (
            <a href={github} className="inline-flex items-center gap-1 border-b border-ink hover:text-accent">
              GitHub <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
