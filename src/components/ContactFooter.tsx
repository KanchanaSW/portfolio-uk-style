import { Download } from "lucide-react";
import { siteConfig } from "@config/site.config";
import { FadeIn } from "@/components/FadeIn";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import { getIcon } from "@/lib/icons";

export function ContactFooter() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-surface" aria-labelledby="contact-heading">
      <div className="section-shell py-16 sm:py-20">
        <FadeIn>
          <h2 id="contact-heading" className="section-heading">
            Contact
          </h2>
          <div className="section-rule" aria-hidden />
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">
            For roles, collaborations or a conversation about frontend engineering,
            please get in touch by email or via the profiles below.
          </p>
        </FadeIn>

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-3">
            <CopyEmailButton email={siteConfig.email} />

            <ul className="flex flex-wrap gap-4 pt-1">
              {siteConfig.socialLinks.map((link) => {
                const Icon = getIcon(link.icon);
                return (
                  <li key={link.label}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
                    >
                      <Icon className="h-4 w-4" aria-hidden />
                      {link.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <a
            href={siteConfig.cvUrl}
            className="btn-primary w-fit no-print"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="h-4 w-4" aria-hidden />
            Download CV
          </a>
        </div>

        <div className="mt-14 border-t border-border pt-6 text-xs text-muted">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
