import Image from "next/image";
import { ExternalLink, Github, Package } from "lucide-react";
import { siteConfig, type ProjectEntry } from "@config/site.config";
import { FadeIn } from "@/components/FadeIn";
import { cn } from "@/lib/utils";

const statusLabel: Record<ProjectEntry["status"], string> = {
  shipped: "Shipped",
  "in-progress": "In progress",
  concept: "Concept",
};

function ProjectLinks({ project }: { project: ProjectEntry }) {
  return (
    <div className="mt-4 flex flex-wrap gap-3 text-sm no-print">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-accent transition-opacity hover:opacity-80"
        >
          <ExternalLink className="h-3.5 w-3.5" aria-hidden />
          Live site
        </a>
      ) : null}
      {project.repoUrl ? (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-accent transition-opacity hover:opacity-80"
        >
          <Github className="h-3.5 w-3.5" aria-hidden />
          Repository
        </a>
      ) : null}
      {project.npmUrl ? (
        <a
          href={project.npmUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-accent transition-opacity hover:opacity-80"
        >
          <Package className="h-3.5 w-3.5" aria-hidden />
          npm
        </a>
      ) : null}
    </div>
  );
}

function FeaturedProject({
  project,
  index,
}: {
  project: ProjectEntry;
  index: number;
}) {
  return (
    <FadeIn delay={index * 0.05}>
      <article className="border-t border-border py-8 first:border-t-0 first:pt-0">
        <div
          className={cn(
            "grid gap-6",
            project.imageUrl && "sm:grid-cols-[1fr_14rem] sm:items-start"
          )}
        >
          <div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-serif text-xl tracking-tight text-foreground sm:text-2xl">
                {project.title}
              </h3>
              <span className="text-xs uppercase tracking-wider text-muted">
                {statusLabel[project.status]}
              </span>
            </div>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              {project.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech stack">
              {project.techStack.map((tech) => (
                <li key={tech} className="tech-tag">
                  {tech}
                </li>
              ))}
            </ul>
            <ProjectLinks project={project} />
          </div>

          {project.imageUrl ? (
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm border border-border bg-surface">
              <Image
                src={project.imageUrl}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 224px"
              />
            </div>
          ) : null}
        </div>
      </article>
    </FadeIn>
  );
}

export function Projects() {
  const featured = siteConfig.projects.filter((p) => p.featured);
  const more = siteConfig.projects.filter((p) => !p.featured);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-b border-border"
    >
      <div className="section-shell py-16 sm:py-20">
        <FadeIn>
          <h2 id="projects-heading" className="section-heading">
            Projects
          </h2>
          <div className="section-rule" aria-hidden />
          <p className="mt-4 max-w-2xl text-sm text-muted">
            Selected work that demonstrates product thinking and engineering craft.
            Full details and links are available below.
          </p>
        </FadeIn>

        <div className="mt-10">
          {featured.map((project, index) => (
            <FeaturedProject key={project.slug} project={project} index={index} />
          ))}
        </div>

        {more.length > 0 ? (
          <div className="mt-12 border-t border-border pt-10">
            <FadeIn>
              <h3 className="font-serif text-lg tracking-tight text-foreground">
                More projects
              </h3>
            </FadeIn>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {more.map((project, index) => (
                <li key={project.slug}>
                  <FadeIn delay={index * 0.04}>
                    <article className="flex flex-col gap-3 py-5 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-baseline gap-x-3">
                          <h4 className="font-medium text-foreground">
                            {project.title}
                          </h4>
                          <span className="text-xs text-muted">
                            {statusLabel[project.status]}
                          </span>
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted">
                          {project.description}
                        </p>
                        <ul className="mt-3 flex flex-wrap gap-1.5">
                          {project.techStack.map((tech) => (
                            <li key={tech} className="tech-tag">
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="shrink-0">
                        <ProjectLinks project={project} />
                      </div>
                    </article>
                  </FadeIn>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
