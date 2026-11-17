import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="py-12">
      <h2 className="mb-8 font-heading text-3xl font-bold">About</h2>
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="mb-4 font-heading text-lg font-semibold">Education</h3>
          <ul className="space-y-5">
            {profile.education.map((e) => (
              <li key={e.degree} className="border-l-2 border-line pl-4">
                <p className="font-medium">{e.degree}</p>
                <p className="text-sm text-muted">{e.school}</p>
                <p className="text-sm text-muted">{e.years} · {e.score}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 font-heading text-lg font-semibold">{profile.award.title}</h3>
            <p className="text-sm leading-relaxed text-muted">{profile.award.detail}</p>
          </div>
          <div>
            <h3 className="mb-3 font-heading text-lg font-semibold">Certifications</h3>
            <ul className="space-y-1 text-sm text-muted">
              {profile.certifications.map((c) => (<li key={c}>{c}</li>))}
            </ul>
          </div>
          <p className="text-sm text-muted">Languages: {profile.languages}</p>
        </div>
      </div>
    </section>
  );
}
