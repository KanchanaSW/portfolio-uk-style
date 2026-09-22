# UK-Style Developer Portfolio

A restrained, CV-led personal portfolio for UK recruiters and hiring managers. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS and Framer Motion.

## To update your details, edit `config/site.config.ts` only

All personal content — name, role, bio, experience, projects, skills, education, social links, CV URL, SEO — lives in a single typed config file:

```
config/site.config.ts
```

You should not need to touch component code to change jobs, add a project, or swap a link. Look for `// TODO: replace` markers for placeholders (email, social URLs, CV path, photo, SEO site URL).

### Common edits

| Change | Where in `siteConfig` |
| --- | --- |
| Name, role, tagline, location | Top-level fields |
| Download CV button | `cvUrl` (e.g. `/cv.pdf` in `public/`) |
| About copy | `bio` (array of paragraphs) |
| Work history | `experience` |
| Portfolio pieces | `projects` (`featured: true` for primary cards) |
| Skills | `skills` |
| Education section | `education` (omit or empty to hide) |
| Photo | Set `photoUrl` and `showPhoto: true` |
| SEO title / description / OG image | `seo` |

Place assets under `public/`:

- CV: `public/cv.pdf`
- Project images: `public/projects/...` (reference as `/projects/your-image.png`)
- Optional photo / Open Graph image: `public/...`

## Design tokens (colour)

The muted UK palette is defined as CSS variables in [`src/app/globals.css`](src/app/globals.css) and wired through [`tailwind.config.ts`](tailwind.config.ts):

- Light: off-white background, charcoal text, deep green accent (`#1b4332`)
- Dark: charcoal base via `prefers-color-scheme`, sage accent

Retune `--accent`, `--background`, `--foreground`, etc. in one place to restyle the site.

Typography: **Newsreader** (headings) + **IBM Plex Sans** (body) + **JetBrains Mono** (tech tags).

## Scripts

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm start
npm run lint
```

## Deploy on Vercel

1. Push this repository to GitHub / GitLab / Bitbucket.
2. Import the project in [Vercel](https://vercel.com).
3. Framework preset: Next.js (defaults are fine).
4. Deploy. Update `seo.siteUrl` in `config/site.config.ts` to your production URL.

No backend, database or auth is required — the site is fully static content from the config file.
