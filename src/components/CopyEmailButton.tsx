"use client";

import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyEmailButtonProps {
  email: string;
  className?: string;
  /** Visual variant for different contexts */
  variant?: "inline" | "button";
}

export function CopyEmailButton({
  email,
  className,
  variant = "inline",
}: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* fallback: select via temporary textarea */
      const el = document.createElement("textarea");
      el.value = email;
      el.setAttribute("readonly", "");
      el.style.position = "absolute";
      el.style.left = "-9999px";
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  }

  if (variant === "button") {
    return (
      <button
        type="button"
        onClick={handleCopy}
        className={cn("btn-secondary", className)}
        aria-label={copied ? "Email copied" : `Copy ${email} to clipboard`}
      >
        {copied ? (
          <>
            <Check className="h-4 w-4 text-accent" aria-hidden />
            Copied
          </>
        ) : (
          <>
            <Copy className="h-4 w-4" aria-hidden />
            Copy email
          </>
        )}
      </button>
    );
  }

  return (
    <span className={cn("inline-flex flex-wrap items-center gap-2", className)}>
      <a
        href={`mailto:${email}`}
        className="inline-flex items-center gap-2 text-base font-medium text-foreground transition-colors hover:text-accent"
      >
        <Mail className="h-4 w-4 text-accent" aria-hidden />
        {email}
      </a>
      <button
        type="button"
        onClick={handleCopy}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-sm border border-border px-2 py-1 text-xs font-medium text-muted transition-colors",
          "hover:border-accent hover:text-accent active:scale-[0.98]",
          copied && "border-accent text-accent"
        )}
        aria-label={copied ? "Email copied" : `Copy ${email} to clipboard`}
      >
        {copied ? (
          <>
            <Check className="h-3 w-3" aria-hidden />
            Copied
          </>
        ) : (
          <>
            <Copy className="h-3 w-3" aria-hidden />
            Copy
          </>
        )}
      </button>
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? "Email copied to clipboard" : ""}
      </span>
    </span>
  );
}
