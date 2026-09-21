# Ceeny — Community Manager Portfolio

A single-page portfolio for Ceeny, a community manager focused on moderation, customer support, onboarding, content, crisis response, analytics, and operations.

## Local development

```bash
pnpm install
pnpm dev
```

## Production build

```bash
pnpm run build
```

The `main` branch deploys to GitHub Pages through `.github/workflows/deploy.yml`.

The proof-of-work image is kept in `media/` and referenced from the public GitHub raw URL so it works in both the Manus preview and the GitHub Pages deployment.
