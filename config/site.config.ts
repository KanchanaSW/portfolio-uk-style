export interface SocialLink {
  label: string; // "LinkedIn", "GitHub", "X"
  url: string;
  icon: string; // lucide-react icon name
}

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  startDate: string; // "2023-06"
  endDate: string | "Present";
  summary: string;
  highlights: string[]; // bullet points, achievement-focused
  techStack: string[];
}

export interface ProjectEntry {
  slug: string;
  title: string;
  description: string; // 1–2 sentences, recruiter-facing
  longDescription?: string; // optional, for a project detail view
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
  npmUrl?: string;
  imageUrl?: string; // path under /public/projects/
  featured: boolean; // controls homepage vs "more projects" placement
  status: "shipped" | "in-progress" | "concept";
}

export interface SkillCategory {
  category: string; // "Languages", "Frameworks", "Tools", "Concepts"
  items: string[];
}

export interface EducationEntry {
  institution: string;
  qualification: string;
  startYear: string;
  endYear: string;
}

export interface SiteConfig {
  name: string;
  role: string; // "Senior Software Engineer"
  tagline: string; // one line, under the name
  location: string;
  email: string;
  phone?: string;
  cvUrl: string; // path to /public/cv.pdf, or hosted link
  photoUrl?: string; // optional — leave undefined to render a photo-free layout
  showPhoto: boolean;
  availability: string;
  bio: string[]; // paragraphs for the About section
  socialLinks: SocialLink[];
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  skills: SkillCategory[];
  education?: EducationEntry[];
  seo: {
    title: string;
    description: string;
    ogImage?: string;
    siteUrl?: string;
  };
}

export const siteConfig: SiteConfig = {
  // TODO: replace with your name
  name: "Alex Morgan",
  role: "Senior Software Engineer",
  tagline:
    "Specialised in React, Next.js and TypeScript — building precise, accessible product interfaces for UK and remote teams.",
  location: "London, United Kingdom (Remote-friendly)",
  // TODO: replace with your email
  email: "hello@example.com",
  // TODO: replace with path to your CV, e.g. "/cv.pdf"
  cvUrl: "/cv.pdf",
  // TODO: replace with your photo path under /public, or leave undefined
  photoUrl: undefined,
  showPhoto: false,
  availability: "Available for permanent roles and select contract engagements across the UK and remote.",
  bio: [
    "I am a Senior Software Engineer with a frontend focus, specialising in React, Next.js and TypeScript. I care about clear information architecture, accessible interfaces and maintainable component systems that product and engineering teams can ship against with confidence.",
    "Over the past several years I have led interface work for product-led organisations — from design-system foundations and performance-sensitive dashboards through to AI-assisted tools used daily by operators and customers. I favour understated craft over novelty: readable code, measured motion and interfaces that recruiters and users alike can navigate without friction.",
    "I work comfortably with product managers, designers and backend engineers, and I am equally at home reviewing pull requests, shaping technical programmes of work, or rolling my sleeves up in the codebase.",
  ],
  socialLinks: [
    {
      label: "LinkedIn",
      // TODO: replace with your LinkedIn URL
      url: "https://www.linkedin.com/in/your-profile",
      icon: "Linkedin",
    },
    {
      label: "GitHub",
      // TODO: replace with your GitHub URL
      url: "https://github.com/your-username",
      icon: "Github",
    },
    {
      label: "X",
      // TODO: replace with your X/Twitter URL
      url: "https://x.com/your-handle",
      icon: "Twitter",
    },
  ],
  experience: [
    {
      company: "Northbridge Digital",
      role: "Senior Software Engineer (Frontend)",
      location: "London, UK · Hybrid",
      startDate: "2023-06",
      endDate: "Present",
      summary:
        "Lead frontend engineer for a B2B SaaS platform serving regulated UK organisations, owning the React/Next.js application layer and shared UI kit.",
      highlights: [
        "Led a redesign of the core product shell in Next.js App Router, reducing median interaction latency by ~35% and improving Lighthouse accessibility scores to the mid-90s.",
        "Established a typed design-system programme (Radix + Tailwind) adopted by three product squads, cutting duplicate UI work and review cycles.",
        "Partnered with design and compliance to ship WCAG 2.2 AA-aligned flows for high-stakes customer onboarding.",
      ],
      techStack: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "GraphQL"],
    },
    {
      company: "Harbour Labs",
      role: "Software Engineer",
      location: "Remote · UK",
      startDate: "2020-09",
      endDate: "2023-05",
      summary:
        "Full-stack leaning frontend engineer on a multi-tenant analytics product used by mid-market UK retailers.",
      highlights: [
        "Owned the customer-facing dashboard rewrite in React and TypeScript, introducing code-splitting and virtualised tables for large datasets.",
        "Introduced Storybook and visual regression checks that halved UI-related production incidents year-on-year.",
        "Mentored two mid-level engineers and chaired fortnightly frontend guild sessions on performance and accessibility.",
      ],
      techStack: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS", "Storybook"],
    },
    {
      company: "Brightform Studio",
      role: "Frontend Developer",
      location: "Manchester, UK",
      startDate: "2018-01",
      endDate: "2020-08",
      summary:
        "Built marketing sites and lightweight web applications for agencies and early-stage startups.",
      highlights: [
        "Delivered 20+ client projects in React and modern CSS, with a focus on responsive layout and clean component APIs.",
        "Standardised a shared component library that reduced average project kick-off time by roughly a week.",
      ],
      techStack: ["React", "JavaScript", "Sass", "Webpack", "Netlify"],
    },
  ],
  projects: [
    {
      slug: "doodleui-react",
      title: "doodleui-react",
      description:
        "A hand-drawn, sketch-style React component library published on npm, with an accompanying documentation site for designers and engineers.",
      longDescription:
        "doodleui-react provides accessible, Radix-backed primitives styled with a distinctive hand-drawn aesthetic. Built for teams that want character without sacrificing keyboard support or TypeScript ergonomics.",
      techStack: ["React", "TypeScript", "Radix UI"],
      // TODO: replace with live docs URL if available
      liveUrl: "https://example.com/doodleui",
      // TODO: replace with repository URL
      repoUrl: "https://github.com/your-username/doodleui-react",
      // TODO: replace with npm package URL
      npmUrl: "https://www.npmjs.com/package/doodleui-react",
      featured: true,
      status: "shipped",
    },
    {
      slug: "jsonshare",
      title: "jsonshare.org",
      description:
        "A JSON sharing and mock API tool with OCR and AI vision — the project I reach for most days when prototyping or debugging payloads.",
      longDescription:
        "jsonshare.org lets you paste, share and mock JSON endpoints quickly, with optional OCR and vision models to extract structured data from screenshots and documents.",
      techStack: ["Next.js", "Groq"],
      // TODO: replace with live URL
      liveUrl: "https://jsonshare.org",
      // TODO: replace with repository URL
      repoUrl: "https://github.com/your-username/jsonshare",
      featured: true,
      status: "shipped",
    },
    {
      slug: "zolo",
      title: "Zolo",
      description:
        "An AI-powered multilingual gift concierge for e-commerce, supporting English, Sinhala, Tamil and Tanglish voice input.",
      longDescription:
        "Zolo helps shoppers discover gifts through natural conversation and voice, routing intent through Vercel AI SDK and Gemini across multiple languages used by Sri Lankan and diaspora customers.",
      techStack: ["Next.js", "Vercel AI SDK", "Gemini"],
      // TODO: replace with live URL
      liveUrl: "https://example.com/zolo",
      // TODO: replace with repository URL
      repoUrl: "https://github.com/your-username/zolo",
      featured: true,
      status: "shipped",
    },
    {
      slug: "geography-video-generator",
      title: "Geography Video Generator",
      description:
        "A tool that converts written scripts into animated geography explainer videos for educational content.",
      techStack: ["Next.js", "Three.js", "Remotion"],
      // TODO: replace with repository URL
      repoUrl: "https://github.com/your-username/geography-video-generator",
      featured: false,
      status: "in-progress",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["TypeScript", "JavaScript", "HTML", "CSS", "SQL"],
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Next.js", "Node.js", "Tailwind CSS", "Radix UI", "Framer Motion"],
    },
    {
      category: "Architecture & Tooling",
      items: [
        "Design systems",
        "Component APIs",
        "Accessibility (WCAG)",
        "Performance budgets",
        "CI/CD",
        "Storybook",
        "Vitest / Jest",
        "Vercel",
      ],
    },
    {
      category: "Practices",
      items: [
        "Technical mentoring",
        "Code review",
        "Product partnership",
        "Agile delivery",
        "Documentation",
      ],
    },
  ],
  education: [
    {
      // TODO: replace with your institution
      institution: "University of Example",
      // TODO: replace with your qualification
      qualification: "BSc Computer Science",
      startYear: "2014",
      endYear: "2017",
    },
  ],
  seo: {
    // TODO: replace with your preferred page title
    title: "Alex Morgan — Senior Software Engineer | React, Next.js, TypeScript",
    description:
      "Curriculum Vitae and selected work of Alex Morgan, a Senior Software Engineer specialised in React, Next.js and TypeScript. Based in the United Kingdom.",
    // TODO: replace with your Open Graph image path, e.g. "/og.png"
    ogImage: "/og.png",
    // TODO: replace with your production site URL
    siteUrl: "https://example.com",
  },
};
