Flow402 Landing
==============

Standalone marketing site for [flow402.com](https://flow402.com). Built with Next.js App Router, TypeScript, and Tailwind to introduce Flow402 and capture interest for the private beta.

## Stack

- Next.js 16 (App Router, static export)
- React 19 + TypeScript
- Tailwind CSS (v4, via `@import "tailwindcss"`)
- Optional analytics via Plausible

## Local development

```bash
pnpm install
pnpm dev
```

Then visit [http://localhost:3000](http://localhost:3000). The main entry point is `app/page.tsx`. Tailwind utilities live inline—no separate config file.

### Useful scripts

```bash
pnpm lint   # eslint
pnpm build  # production build (webpack)
pnpm start  # preview the production build
```

> Note: `package.json` pins `next build --webpack` to avoid Turbopack networking issues in certain environments.

## Content quick-reference

- **Hero copy**: `app/page.tsx` (look for “Make 402 invisible.” section).  
- **CTA buttons**: handled via `components/apply-button.tsx`; all CTAs open the Tally form in a new tab and smooth-scroll to `#apply`. Update the URL there.  
- **How it works / Why Flow402 / Use cases / FAQ**: arrays at the top of `app/page.tsx`.  
- **Code snippets**: `curlSnippet` and `tsSnippet` constants in `app/page.tsx`.  
- **Privacy & Terms**: boilerplate pages at `app/privacy/page.tsx` and `app/terms/page.tsx`. Update copy there when legal text is finalized.  
- **OpenGraph asset**: `public/og.png`. Replace with your own 1200x630 card when ready.

## Configuration

| Variable           | Purpose                                              | Default |
|--------------------|------------------------------------------------------|---------|
| `PLAUSIBLE_DOMAIN` | If set, embeds `https://plausible.io/js/script.js`.  | unset   |

Add env vars via Vercel project settings or a `.env.local` file (never commit secrets).

## Deployment

1. Push to the Vercel-connected repo or run `vercel` from the CLI.  
2. Verify the preview build, then promote to production.  
3. Attach `flow402.com` as the primary domain on the Vercel project.  
4. Run Lighthouse against production to confirm performance and accessibility.

Everything renders statically, so no additional API routes or database setup is required.
