import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="section-block scroll-mt-16">
      <div className="section-heading">
        <p>About me</p>
        <h2>Thoughtful work, built on a strong foundation.</h2>
      </div>
      <div className="about-highlight mb-5 rounded-3xl p-7 sm:p-10">
        <p className="mb-4 text-xs font-semibold tracking-[.18em] text-accent uppercase">Why I build</p>
        <p className="max-w-5xl font-heading text-2xl font-bold uppercase leading-tight tracking-tight sm:text-4xl">
          I turn practical problems into reliable applications with thoughtful code and data.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="glass-card p-6 sm:p-8">
          <h3 className="mb-6 font-heading text-lg font-semibold">Education</h3>
          <ul className="space-y-6">
            {profile.education.map((e) => (
              <li key={e.degree} className="border-l-2 border-accent/70 pl-4">
                <p className="font-medium">{e.degree}</p>
                <p className="mt-1 text-sm text-muted">{e.school}</p>
                <p className="mt-1 text-xs text-muted">{e.years} · {e.score}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="glass-card p-6 sm:p-8">
          <h3 className="font-heading text-lg font-semibold">{profile.award.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted">{profile.award.detail}</p>
          <div className="mt-7 border-t border-line pt-6">
            <h3 className="mb-3 font-heading text-base font-semibold">Certifications</h3>
            <ul className="space-y-2 text-sm text-muted">
              {profile.certifications.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
          <p className="mt-6 border-t border-line pt-5 text-sm text-muted"><span className="font-medium text-ink">Languages:</span> {profile.languages}</p>
        </div>
      </div>
    </section>
  );
}
