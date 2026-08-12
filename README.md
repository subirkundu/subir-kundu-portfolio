# Subir Kundu - Software QA Engineer Portfolio

A professional, QA-focused portfolio built with Next.js, TypeScript, a centralized CSS design system, Framer Motion, Lucide Icons, and Playwright.

## Run locally

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. To preview the production build locally, run `pnpm build` followed by `pnpm start`.

## VS Code

Open this folder directly in VS Code:

```text
subirkundu-portfolio
```

The included VS Code tasks let you run the development server, production build, and Playwright suite from **Terminal → Run Task**. Install the recommended extensions when VS Code prompts you.

## Quality checks

```bash
pnpm build
pnpm test:e2e
```

Before the first browser-test run, install its local browser binary:

```bash
pnpm exec playwright install chromium
```

Content is intentionally maintained in `src/content`. Contact links and the downloadable resume are configured in `src/content/profile.ts` and `public/resume/` respectively. The project is ready to deploy to Vercel.
