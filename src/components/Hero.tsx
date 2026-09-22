import Image from "next/image";
import { Download, Mail, MapPin } from "lucide-react";
import { siteConfig } from "@config/site.config";
import { FadeIn } from "@/components/FadeIn";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="border-b border-border">
      <div className="section-shell py-16 sm:py-24 lg:py-28">
        <FadeIn>
          <div
            className={
              siteConfig.showPhoto && siteConfig.photoUrl
                ? "grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"
                : "max-w-3xl"
            }
          >
            <div>
              <p className="text-sm font-medium tracking-wide text-accent">
                {siteConfig.role}
              </p>
              <h1
                id="hero-heading"
                className="mt-3 font-serif text-4xl leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]"
              >
                {siteConfig.name}
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                {siteConfig.tagline}
              </p>

              <div className="mt-6 flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:gap-6">
                <p className="inline-flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  <span>{siteConfig.location}</span>
                </p>
                <p className="sm:border-l sm:border-border sm:pl-6">
                  {siteConfig.availability}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 no-print">
                <a
                  href={siteConfig.cvUrl}
                  className="btn-primary"
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="h-4 w-4" aria-hidden />
                  Download CV
                </a>
                <a href={`mailto:${siteConfig.email}`} className="btn-secondary">
                  <Mail className="h-4 w-4" aria-hidden />
                  Email me
                </a>
              </div>
            </div>

            {siteConfig.showPhoto && siteConfig.photoUrl ? (
              <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-sm border border-border sm:h-48 sm:w-48">
                <Image
                  src={siteConfig.photoUrl}
                  alt={`Portrait of ${siteConfig.name}`}
                  fill
                  className="object-cover"
                  sizes="192px"
                  priority
                />
              </div>
            ) : null}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
