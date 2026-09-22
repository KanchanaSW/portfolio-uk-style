import { siteConfig } from "@config/site.config";
import { FadeIn } from "@/components/FadeIn";
import { formatDateRange } from "@/lib/utils";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="border-b border-border"
    >
      <div className="section-shell py-16 sm:py-20">
        <FadeIn>
          <h2 id="experience-heading" className="section-heading">
            Experience
          </h2>
          <div className="section-rule" aria-hidden />
        </FadeIn>

        <ol className="relative mt-10 space-y-0 sm:border-l sm:border-border sm:pl-6">
          {siteConfig.experience.map((entry, index) => (
            <li key={`${entry.company}-${entry.startDate}`} className="relative">
              <FadeIn delay={index * 0.05}>
                <article className="grid gap-4 border-b border-border py-8 last:border-b-0 sm:grid-cols-[11rem_1fr] sm:gap-8">
                  <div className="relative text-sm text-muted">
                    <span
                      aria-hidden
                      className="absolute -left-[1.95rem] top-1.5 hidden h-2.5 w-2.5 rounded-full border-2 border-accent bg-background sm:block"
                    />
                    <p className="font-medium text-foreground">
                      {formatDateRange(entry.startDate, entry.endDate)}
                    </p>
                    <p className="mt-1">{entry.location}</p>
                  </div>

                  <div>
                    <h3 className="font-serif text-xl tracking-tight text-foreground">
                      {entry.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {entry.company}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {entry.summary}
                    </p>
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted marker:text-accent">
                      {entry.highlights.map((item) => (
                        <li key={item.slice(0, 40)}>{item}</li>
                      ))}
                    </ul>
                    <ul className="mt-5 flex flex-wrap gap-1.5" aria-label="Technologies used">
                      {entry.techStack.map((tech) => (
                        <li key={tech} className="tech-tag">
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeIn>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
