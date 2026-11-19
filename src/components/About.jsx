import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="about" className="section-block about-section scroll-mt-16">
      <div className="section-heading">
        <p>About</p>
        <h2>Programmer / Analyst based in {profile.location}.</h2>
      </div>
      <p className="about-summary">{profile.summary}</p>
      <a href={profile.resume} download className="about-resume-link">Download CV</a>
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div>
          <h3 className="mb-5 font-heading text-lg font-semibold">Education</h3>
          <ul>
            {profile.education.map((e) => (
              <li key={e.degree} className="about-list-item py-4 first:pt-0">
                <p className="font-medium">{e.degree}</p>
                <p className="mt-1 text-sm text-muted">{e.school} · {e.years}</p>
                <p className="mt-1 text-sm text-muted">{e.score}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-heading text-lg font-semibold">{profile.award.title}</h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{profile.award.detail}</p>
          <div className="about-list-item mt-6 pt-5">
            <h3 className="mb-3 font-heading text-base font-semibold">Certifications</h3>
            <ul className="space-y-2 text-sm text-muted">
              {profile.certifications.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
          <p className="about-list-item mt-6 pt-5 text-sm text-muted"><span className="font-medium text-ink">Languages:</span> {profile.languages}</p>
        </div>
      </div>
    </section>
  );
}
