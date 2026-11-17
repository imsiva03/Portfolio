import { ArrowUpRight, Code2 } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const { title, stack, description, live, github } = project;
  return (
    <article className="project-card flex flex-col">
      <div className={`project-art project-art-${(index % 3) + 1} relative flex h-44 items-center justify-center overflow-hidden border-b border-line`}>
        <div aria-hidden="true" className="absolute -right-7 -top-12 h-52 w-52 rounded-full border border-white/35" />
        <div aria-hidden="true" className="absolute -right-1 top-[-1.5rem] h-40 w-40 rounded-full border border-white/30" />
        <span className="absolute left-5 top-5 text-xs font-semibold tracking-[.16em] text-white/80">0{index + 1} / SELECTED WORK</span>
        <Code2 size={42} strokeWidth={1.3} className="relative text-white/90" aria-hidden="true" />
        <span className="absolute bottom-4 right-5 max-w-[75%] text-right font-heading text-sm font-bold text-white">{title}</span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="mb-2 font-heading text-lg font-semibold">{title}</h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {stack.map((technology) => (
            <li key={technology} className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-[11px] text-accent">
              {technology}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex gap-5 border-t border-line pt-5">
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-muted transition hover:text-accent">
              Live demo <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-muted transition hover:text-accent">
              <Code2 size={14} aria-hidden="true" /> Source <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
