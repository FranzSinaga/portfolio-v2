# portfolio-v2

Personal portfolio and blog of Franz Sinaga, live at [franzsinaga.com](https://franzsinaga.com).

Built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4, and shadcn/ui. Blog posts and work experience are managed in a headless [Payload CMS](https://payloadcms.com) instance.

## Getting started

Requirements: Node.js 20.9+ and pnpm (`corepack enable`).

```bash
cp .env.example .env   # then set NEXT_PUBLIC_PAYLOAD_API_URL
pnpm install
pnpm dev               # http://localhost:3000
```

| Variable                      | Description                                          |
| ----------------------------- | ---------------------------------------------------- |
| `NEXT_PUBLIC_PAYLOAD_API_URL` | Base URL of the Payload CMS instance (no trailing /) |

## Scripts

| Command             | Description                                 |
| ------------------- | ------------------------------------------- |
| `pnpm dev`          | Start the dev server (Turbopack)            |
| `pnpm build`        | Production build (`standalone` output)      |
| `pnpm start`        | Run the production build                    |
| `pnpm lint`         | ESLint (flat config in `eslint.config.mjs`) |
| `pnpm format:check` | Check formatting with Prettier              |
| `pnpm format:fix`   | Format the codebase with Prettier           |

Run `pnpm exec tsc --noEmit`, `pnpm lint`, and `pnpm format:check` before pushing — CI runs the same checks and stops the deploy if any of them fail.

## Content

Data is fetched client-side with SWR from the Payload CMS REST API:

- `/api/franz-blogs` — blog list and blog detail (by slug). Post content is Payload's Lexical rich-text JSON, rendered by `src/components/rich-text`.
- `/api/franz-work-experience` — work experience on the About page.

Payload response types live in `src/types/payload.types.ts`.

## Project structure

```
src/
├── app/          # Routes: about, blogs, blogs/[slug], contact, playground, projects, style-guide
├── components/   # Shared components (ui/ = shadcn/ui, magicui/ and aceternity/ = animated effects)
├── context/      # Command menu (Ctrl/⌘ + K) state
├── hooks/        # useTheme and other hooks
├── lib/          # Constants, utils, string helpers (import from "@/lib")
└── types/        # Payload and theme types
```

## Deployment

Every push to `master` triggers a Drone CI pipeline (`.drone.yml`, `type: ssh`) that runs directly on the VPS:

1. **Checkout & Pull** — pull the latest `master`
2. **Verify** — typecheck, lint, and format check in a `node:20-alpine` container
3. **Build** — `docker compose build --no-cache` while the current container keeps serving
4. **Deploy** — `docker compose up -d` swaps in the new container
5. **Cleanup** — `docker system prune -f`

If any step fails, the deploy stops and the running site stays up.

Required Drone secrets: `DEPLOY_HOST`, `DEPLOY_USERNAME`, `DEPLOY_SSH_KEY`, and `APP_DIR` (absolute path to the project on the VPS). The VPS needs Docker with Compose v2 (`docker compose`); the legacy `docker-compose` v1 binary fails when recreating containers.
