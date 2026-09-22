import { siteConfig } from "@config/site.config";
import { FadeIn } from "@/components/FadeIn";

export function Education() {
  if (!siteConfig.education?.length) {
    return null;
  }

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="border-b border-border"
    >
      <div className="section-shell py-16 sm:py-20">
        <FadeIn>
          <h2 id="education-heading" className="section-heading">
            Education
          </h2>
          <div className="section-rule" aria-hidden />
        </FadeIn>

        <ul className="mt-10 space-y-6">
          {siteConfig.education.map((entry, index) => (
            <li key={`${entry.institution}-${entry.qualification}`}>
              <FadeIn delay={index * 0.04}>
                <article className="grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-8">
                  <p className="text-sm text-muted">
                    {entry.startYear} – {entry.endYear}
                  </p>
                  <div>
                    <h3 className="font-serif text-lg tracking-tight text-foreground">
                      {entry.qualification}
                    </h3>
                    <p className="mt-1 text-sm text-muted">{entry.institution}</p>
                  </div>
                </article>
              </FadeIn>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
