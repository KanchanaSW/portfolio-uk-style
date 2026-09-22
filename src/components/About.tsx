import { siteConfig } from "@config/site.config";
import { FadeIn } from "@/components/FadeIn";

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="border-b border-border"
    >
      <div className="section-shell py-16 sm:py-20">
        <FadeIn>
          <h2 id="about-heading" className="section-heading">
            About
          </h2>
          <div className="section-rule" aria-hidden />
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-muted">
            {siteConfig.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
