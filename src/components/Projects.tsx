"use client";

import { useMemo, useState } from "react";
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

const statusClass: Record<ProjectEntry["status"], string> = {
  shipped: "border-accent bg-accent-muted text-accent",
  "in-progress": "border-border bg-surface text-muted",
  concept: "border-border bg-surface text-muted",
};

type FilterId = "all" | "featured" | "saas" | "opensource";

const filters: { id: FilterId; label: string }[] = [
  { id: "all", label: "All" },
  { id: "featured", label: "Featured" },
  { id: "saas", label: "Full-Stack & SaaS" },
  { id: "opensource", label: "Open Source & Tools" },
];

function ProjectLinks({ project }: { project: ProjectEntry }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2 text-sm no-print">
      {project.liveUrl ? (
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-sm border border-border px-2.5 py-1.5 text-foreground transition-colors hover:border-accent hover:text-accent"
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
          className="inline-flex items-center gap-1.5 rounded-sm border border-border px-2.5 py-1.5 text-foreground transition-colors hover:border-accent hover:text-accent"
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
          className="inline-flex items-center gap-1.5 rounded-sm border border-border px-2.5 py-1.5 text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <Package className="h-3.5 w-3.5" aria-hidden />
          npm
        </a>
      ) : null}
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: ProjectEntry;
  index: number;
}) {
  return (
    <FadeIn delay={Math.min(index * 0.04, 0.2)}>
      <article className="project-card h-full">
        <div
          className={cn(
            "grid gap-5",
            project.imageUrl && "sm:grid-cols-[1fr_11rem] sm:items-start"
          )}
        >
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-serif text-xl tracking-tight text-foreground sm:text-2xl">
                {project.title}
              </h3>
              <span
                className={cn("status-badge", statusClass[project.status])}
              >
                {statusLabel[project.status]}
              </span>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
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
                sizes="(max-width: 640px) 100vw, 176px"
              />
            </div>
          ) : null}
        </div>
      </article>
    </FadeIn>
  );
}

function matchesFilter(project: ProjectEntry, filter: FilterId): boolean {
  if (filter === "all") return true;
  if (filter === "featured") return project.featured;
  if (filter === "saas") return project.category === "saas";
  if (filter === "opensource") return project.category === "opensource";
  return true;
}

export function Projects() {
  const [filter, setFilter] = useState<FilterId>("all");

  const filtered = useMemo(
    () => siteConfig.projects.filter((p) => matchesFilter(p, filter)),
    [filter]
  );

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
            Filter by type to find what matters for your brief.
          </p>
        </FadeIn>

        <div
          role="tablist"
          aria-label="Project categories"
          className="mt-8 flex flex-wrap gap-2"
        >
          {filters.map((item) => {
            const selected = filter === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={selected}
                id={`project-tab-${item.id}`}
                onClick={() => setFilter(item.id)}
                className={cn(
                  "rounded-sm border px-3 py-1.5 text-sm transition-colors active:scale-[0.98]",
                  selected
                    ? "border-accent bg-accent-muted text-accent"
                    : "border-border text-muted hover:border-accent hover:text-foreground"
                )}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        <div
          role="tabpanel"
          aria-labelledby={`project-tab-${filter}`}
          className="mt-8 grid gap-4"
        >
          {filtered.length === 0 ? (
            <p className="py-8 text-sm text-muted">
              No projects in this category yet.
            </p>
          ) : (
            filtered.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
