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
  name: "Kanchana Walagambahu",
  role: "Senior Software Engineer – Frontend",
  tagline:
    "4+ years building scalable React and Next.js products — mentoring teams, shaping frontend architecture, and shipping enterprise SaaS with care.",
  location: "Colombo, Sri Lanka (Remote-friendly)",
  email: "sachithrakanchana.ks@gmail.com",
  phone: "+94771556815",
  cvUrl: "/Kanchana_Walagambahu.pdf",
  photoUrl: "/profile_pic.jpg",
  showPhoto: true,
  availability:
    "Open to senior frontend and tech-lead opportunities — remote or hybrid.",
  bio: [
    "I am a Senior Software Engineer and emerging Tech Lead with 4+ years of experience delivering scalable React and Next.js applications for enterprise SaaS products. I drive end-to-end feature delivery — from facilitating product feasibility discussions and translating requirements into structured developer guides, to coordinating parallel FE/BE workstreams that fast-track releases without compromising quality.",
    "I have mentored engineering teams, led internal tech talks, architected modular frontend systems, and implemented performance and caching solutions that reduce costs and improve user experience. I am adept at bridging Product, Design, QA, and Engineering to ship the right thing, fast.",
    "Alongside day-job work at Axiata Digital Labs, I ship personal products such as jsonshare.org and the open-source doodleui-react library, and I contribute to full-stack platforms like Wildwood Packiyo for Tribird.",
  ],
  socialLinks: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/connectskw/",
      icon: "Linkedin",
    },
    {
      label: "GitHub",
      url: "https://github.com/KanchanaSW",
      icon: "Github",
    },
  ],
  experience: [
    {
      company: "Axiata Digital Labs",
      role: "Senior Software Engineer",
      location: "Colombo, Sri Lanka",
      startDate: "2022-10",
      endDate: "Present",
      summary:
        "Promoted from Software Engineer (Oct 2022 – Mar 2025) to Senior Software Engineer (Mar 2025 – Present). Own frontend delivery across Axonect and SmartNas products — architecture, mentoring, performance, and cross-team coordination.",
      highlights: [
        "Conducted technical feasibility discussions with Product and UI/UX before sprint planning, reducing mid-sprint rework across feature releases.",
        "Resolved a critical performance bottleneck by decomposing a monolithic API into fine-grained endpoints and adding CMS-driven dynamic TTL caching — cutting API costs and speeding up data-heavy screens.",
        "Facilitated feature kickoffs with Business, then translated outcomes into structured implementation guides (build steps, developer testing checklists, QA handoff) — zero rework, minimal bugs, on-time releases.",
        "Fast-tracked a time-sensitive business feature by parallelising FE/BE development with mocked APIs, staged QA handoffs, and progressive integration — delivered on schedule without compromising quality.",
        "Delivered an internal tech talk, “Exploring the Future of Coding with Cursor AI”, with a live demo that drove team-wide adoption of AI-assisted development.",
        "Mentored juniors and interns through weekly 1:1s, PR reviews, and coding standards — improving PR cycle time and reducing post-merge defects.",
        "Co-led frontend architecture for the Axonect Enterprise Product Catalog, introducing a modular component strategy that reduced UI duplication and accelerated delivery.",
        "Resolved 20+ critical frontend bugs across Axonect products; diagnosed SmartNas Android Crashlytics issues; integrated Adjust SDK funnel events; cleared SonarQube quality-gate findings.",
      ],
      techStack: [
        "React",
        "TypeScript",
        "Ant Design",
        "SCSS",
        "Android",
        "Kotlin",
        "Firebase",
        "SonarQube",
      ],
    },
    {
      company: "Tribird",
      role: "Frontend Developer",
      location: "Norway · Part-time, Remote",
      startDate: "2025-03",
      endDate: "2025-08",
      summary:
        "Part-time remote frontend engineer building Wildwood Packiyo — a full-stack inventory and packaging management platform for Tribird’s Norway operations.",
      highlights: [
        "Engineered Wildwood Packiyo with Next.js 15, React 19, TypeScript, and Tailwind CSS for real-time inventory tracking and streamlined order workflows.",
        "Integrated GraphQL with React Query and Zustand for type-safe fetching, optimistic updates, and intelligent caching on high-traffic screens.",
        "Built interactive dashboards and data tables (Recharts, React Table) with advanced filtering, bulk operations, and real-time updates.",
        "Leveraged Next.js SSR, dynamic routing, and code splitting to improve SEO and reduce initial page load times.",
      ],
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "GraphQL",
        "React Query",
        "Zustand",
      ],
    },
    {
      company: "Informatics International",
      role: "Associate Software Engineer",
      location: "Colombo, Sri Lanka",
      startDate: "2022-03",
      endDate: "2022-10",
      summary:
        "Built enterprise product UIs in React and TypeScript, partnering with UX and backend in Agile sprints.",
      highlights: [
        "Developed user interfaces using React, TypeScript, Material UI, and Redux with design consistency and cross-browser compatibility.",
        "Partnered with 2 UX designers and backend teams to define API contracts and component specs before development.",
        "Optimised Redux state management and resolved 10+ front-end issues, improving usability and reducing reported UI defects.",
      ],
      techStack: ["React", "TypeScript", "Material UI", "Redux"],
    },
  ],
  projects: [
    {
      slug: "sl-stocks-analysis",
      title: "Sri Lankan Stock Analysis (AI-Assisted)",
      description:
        "Full-stack Colombo Stock Exchange (CSE) analytics platform evaluating equities across three investment horizons, powered by real-time data and Groq Llama 3.3 70B AI.",
      longDescription:
        "Tracks the top 50 profitable stocks on the CSE with live TradingView feeds, automated weekly scrapers, Convex reactive database, interactive Recharts visualization, and context-aware AI insights across 5-year buy-and-hold, stability, and short-term momentum tiers.",
      techStack: [
        "Next.js 14",
        "React",
        "TypeScript",
        "Convex",
        "Groq API (Llama 3.3)",
        "Recharts",
        "Tailwind CSS",
        "Netlify",
      ],
      liveUrl: "https://slstocks.netlify.app/",
      repoUrl: "https://github.com/KanchanaSW/Sri-Lankan-Stock-Analysis-App--AI-Assisted-",
      featured: true,
      status: "shipped",
    },
    {
      slug: "mechanical-3d-keyboard",
      title: "Mechanical — 3D Keyboard Teardown",
      description:
        "A scroll-driven 3D interactive teardown of a 60% mechanical keyboard, disassembling keycaps, switches, plate, PCB, and chassis in real-time.",
      longDescription:
        "Engineered with Three.js, GSAP ScrollTrigger, and Lenis smooth scrolling. Features dynamic canvas-rendered dual keycap legends, layer-by-layer exploded perspective views, chapter navigation, and hardware spec callouts.",
      techStack: [
        "Three.js",
        "GSAP",
        "ScrollTrigger",
        "Lenis",
        "JavaScript",
        "HTML5 Canvas",
        "Vite",
      ],
      liveUrl: "https://mechanical3dkeyboard.netlify.app/",
      repoUrl: "https://github.com/KanchanaSW/Mechanical-3D-site",
      featured: true,
      status: "shipped",
    },
    {
      slug: "tabletop-jigsaw",
      title: "Tabletop Jigsaw",
      description:
        "Browser-based interactive jigsaw puzzle game featuring irregular tab-and-blank procedural piece generation, tactile snap physics, and curated Pexels photography.",
      longDescription:
        "Built with Next.js 14 App Router, @dnd-kit drag-and-drop, Zustand state management, and Framer Motion. Generates non-uniform interlocking cuts, scatter trays, peek-at-box ghost guides, elapsed timer tracking, and adaptive difficulty modes.",
      techStack: [
        "Next.js 14",
        "React 18",
        "TypeScript",
        "@dnd-kit",
        "Zustand",
        "Framer Motion",
        "Tailwind CSS",
        "Vitest",
      ],
      liveUrl: "https://tabletopjigsaw.netlify.app/",
      repoUrl: "https://github.com/KanchanaSW/Jigsaw-puzzle",
      featured: true,
      status: "shipped",
    },
    {
      slug: "json-vibe",
      title: "JSON Vibe",
      description:
        "A production-ready, shareable JSON editor with real-time validation, format conversion, and ERD-style schema visualisation — live at jsonshare.org.",
      longDescription:
        "Built with a zero-backend architecture: client-side encryption, URL-based state with LZ-String compression, JSONPath filtering, diff viewer, and a data model generator for 6+ languages. Fully responsive with QR code sharing and Web Share API integration.",
      techStack: [
        "Next.js 14",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "CodeMirror 6",
        "React Flow",
        "Web Crypto API",
        "LZ-String",
      ],
      liveUrl: "https://jsonshare.org",
      featured: true,
      status: "shipped",
    },
    {
      slug: "doodleui-react",
      title: "doodleui-react",
      description:
        "Open-source sketch-styled React component library (55+ components) with CLI, theming, dark mode, and an MCP server for AI coding agents.",
      longDescription:
        "Built on Radix with WCAG 2.1 AA contrast auditing. Ships a shadcn-style CLI (npx doodleui-react add …) that copies component source into consumer apps across npm/pnpm/yarn/bun, plus an MCP server so agents can discover components, read prop docs, and install correctly.",
      techStack: [
        "TypeScript",
        "React 18+",
        "rough.js",
        "Radix UI",
        "Framer Motion",
        "Next.js",
        "Turborepo",
        "pnpm",
        "MCP",
        "Netlify",
      ],
      liveUrl: "https://doodle-ui.netlify.app/",
      repoUrl: "https://github.com/KanchanaSW/doodle-ui",
      npmUrl: "https://www.npmjs.com/package/doodleui-react",
      featured: true,
      status: "shipped",
    },
    {
      slug: "wildwood-packiyo",
      title: "Wildwood Packiyo",
      description:
        "Full-stack inventory and packaging management platform for Tribird’s Norway operations — real-time tracking, dashboards, and bulk workflows.",
      longDescription:
        "Features real-time data updates, advanced dashboard reporting, and bulk operations for business users. Built with GraphQL, shadcn/ui, React Hook Form, and Framer Motion.",
      techStack: [
        "Next.js",
        "React",
        "GraphQL",
        "shadcn/ui",
        "React Hook Form",
        "Tailwind CSS",
        "TypeScript",
        "Framer Motion",
      ],
      featured: true,
      status: "shipped",
    },
    {
      slug: "serendib-gem-vault",
      title: "Serendib Gem Vault",
      description:
        "Artisanal showcase and catalog for authentic Ceylon gemstones, designed with a hand-drawn rough aesthetic powered by doodleui-react.",
      longDescription:
        "Utilises doodleui-react (55+ sketch-styled components) with rough.js styling, featuring interactive monsoon harvest quota tracking, filterable loose and mounted gemstone catalog, bespoke lapidary inquiry flows, and Ceylon gemological lab sheet viewer.",
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "doodleui-react",
        "rough.js",
        "Radix UI",
        "Tailwind CSS",
      ],
      liveUrl: "https://sl-gem.netlify.app/",
      repoUrl: "https://github.com/KanchanaSW/gem-store",
      featured: false,
      status: "shipped",
    },
    {
      slug: "interview-prep-ai",
      title: "AI Interview Question Generator",
      description:
        "Adaptive technical interview preparation platform with instant MCQ quizzes, background question generation, AI coaching, and resume-tailored mock sessions.",
      longDescription:
        "Provides multi-mode practice (MCQ Quiz, AI Interview Coach, Flashcards, and Resume-based mock interviews) across React, Next.js, JavaScript, TypeScript, and System Design with tiered difficulty levels and continuous background generation.",
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "AI Integration",
        "Netlify",
      ],
      liveUrl: "https://interviewprpz.netlify.app/",
      repoUrl: "https://github.com/KanchanaSW/AI-interview-question-generator",
      featured: false,
      status: "shipped",
    },
    {
      slug: "cheerfill",
      title: "Cheerfill",
      description:
        "Vibrant SaaS marketing landing page for a customer delight platform, featuring playful micro-interactions, journey flows, and tiered pricing.",
      longDescription:
        "Designed with high-conversion landing page architecture: animated delight flow walkthroughs, mood-aware campaign breakdowns, customer smile dashboard previews, and responsive pricing tier selectors.",
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Netlify",
      ],
      liveUrl: "https://cheerfill-page.netlify.app/",
      repoUrl: "https://github.com/KanchanaSW/marketing-landing-page",
      featured: false,
      status: "shipped",
    },
    {
      slug: "veloura-cake",
      title: "Veloura Cake",
      description:
        "Bespoke patisserie and artisanal cake boutique showcase featuring curated collections, flavor profiles, and custom event order inquiries.",
      longDescription:
        "Crafted with an elegant luxury editorial aesthetic, showcasing signature multi-tier cakes, seasonal patisserie menus, customer testimonials, and an interactive celebration inquiry flow.",
      techStack: [
        "React",
        "TypeScript",
        "Vite",
        "Tailwind CSS",
        "Netlify",
      ],
      liveUrl: "https://velouracake.netlify.app/",
      repoUrl: "https://github.com/KanchanaSW/cake-website",
      featured: false,
      status: "shipped",
    },
    {
      slug: "smartnas",
      title: "SmartNas",
      description:
        "Android application for Smart Axiata — Home 4.0, 5G journeys, multi-account, Crashlytics, and Adjust attribution analytics.",
      longDescription:
        "Built and maintained with Kotlin and MVP architecture. Led Home 4.0 customisable layout and plans/usage; built 5G prepaid/postpaid/hybrid flows with coverage map and Dynamic Links; multi-account add/switch/sign-out with AuthInterceptor 401 session recovery.",
      techStack: [
        "Android",
        "Kotlin",
        "XML",
        "Firebase",
        "Retrofit",
        "MVP",
        "Material Design",
        "Dagger",
        "Glide",
        "OkHttp",
        "SonarQube",
      ],
      featured: false,
      status: "shipped",
    },
    {
      slug: "smartnas-revamp",
      title: "SmartNas Revamp",
      description:
        "Flutter revamp of SmartNas — in-app notifications, FCM push, Adjust product events, and Crashlytics.",
      longDescription:
        "Delivered the in-app notification list and announcement detail sheets, mark-as-read, unread badge on the home bell, and FCM push (device token, Firebase Android/iOS setup). Integrated Adjust product events (login, SmartVIP, plans, notifications, Smart Roam) and environment tokens.",
      techStack: [
        "Flutter",
        "Dart",
        "Firebase FCM",
        "Firebase Crashlytics",
        "Adjust Events",
      ],
      featured: false,
      status: "shipped",
    },
    {
      slug: "axonect-customer-explore",
      title: "Axonect Customer Explore",
      description:
        "RnD UI for user management, trouble tickets, and self-onboarding workflows on the Axonect platform.",
      longDescription:
        "Implemented User Management with full CRUD, role assignment, and granular permissions; Trouble Ticket Management with complete CRUD; and a self-onboarding workflow that reduced administrative overhead.",
      techStack: ["React", "TypeScript", "Ant Design", "SCSS", "CSS"],
      featured: false,
      status: "shipped",
    },
    {
      slug: "axonect-enterprise-product-catalog",
      title: "Axonect Enterprise Product Catalog",
      description:
        "RnD product catalog UI with federation, canvas-based drag-and-drop product design, and RBAC.",
      longDescription:
        "Implemented product federation for BSS/OSS integration, a canvas UI with drag-and-drop to design product structures, and Role-Based Access Control for platform security and governance.",
      techStack: ["React", "TypeScript", "Ant Design", "SCSS", "CSS"],
      featured: false,
      status: "shipped",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "HTML", "CSS", "SASS", "Java", "Kotlin", "SQL"],
    },
    {
      category: "Frontend Frameworks",
      items: ["React", "Next.js"],
    },
    {
      category: "State Management & Data",
      items: ["Redux", "Zustand", "React Query", "GraphQL"],
    },
    {
      category: "UI & Animation",
      items: [
        "Tailwind CSS",
        "shadcn/ui",
        "Radix UI",
        "Framer Motion",
        "Three.js",
        "GSAP",
        "Ant Design",
        "Material UI",
      ],
    },
    {
      category: "Backend & Cloud",
      items: [
        "Node.js",
        "Express.js",
        "Firebase",
        "Supabase",
        "Convex",
        "Spring Boot",
      ],
    },
    {
      category: "Mobile",
      items: ["Android (Kotlin, Java, XML)", "Retrofit", "Dagger", "Glide"],
    },
    {
      category: "Analytics & Quality",
      items: [
        "Firebase Crashlytics",
        "Adjust SDK",
        "SonarQube",
        "Storybook",
        "CI/CD",
      ],
    },
  ],
  education: [
    {
      institution: "Staffordshire University (APIIT Sri Lanka)",
      qualification: "Bachelor of Engineering with Honours in Software Engineering",
      startYear: "",
      endYear: "2022",
    },
  ],
  seo: {
    title:
      "Kanchana Walagambahu — Senior Software Engineer | React, Next.js, TypeScript",
    description:
      "Curriculum Vitae and selected work of Kanchana Walagambahu, a Senior Software Engineer specialised in React, Next.js and TypeScript. Based in Colombo, Sri Lanka.",
    ogImage: "/og.png",
    // Set to your production portfolio URL when you deploy
    siteUrl: undefined,
  },
};
