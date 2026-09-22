import { siteConfig } from "@config/site.config";
import { FadeIn } from "@/components/FadeIn";

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="border-b border-border"
    >
      <div className="section-shell py-16 sm:py-20">
        <FadeIn>
          <h2 id="skills-heading" className="section-heading">
            Skills
          </h2>
          <div className="section-rule" aria-hidden />
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {siteConfig.skills.map((group, index) => (
            <FadeIn key={group.category} delay={index * 0.04}>
              <div className="h-full rounded-sm border border-border p-5 transition-colors hover:border-accent">
                <h3 className="text-sm font-medium text-accent">
                  {group.category}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-1.5" aria-label={group.category}>
                  {group.items.map((item) => (
                    <li key={item} className="tech-tag">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
