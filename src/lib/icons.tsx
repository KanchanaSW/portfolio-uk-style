import {
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Twitter,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Linkedin,
  Github,
  Twitter,
  Mail,
  ExternalLink,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? ExternalLink;
}
