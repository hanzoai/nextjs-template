# nextjs-template

Starter template for Hanzo apps: Next.js App Router + `@hanzo/ui` components on the `@hanzo/gui` substrate, theme tokens as plain CSS custom properties, dark mode via `@hanzogui/next-theme`. No Tailwind, no Radix, no vendored shadcn tree — components are imported from `@hanzo/ui`, never copied in. Scaffold with `npx create-next-app -e https://github.com/hanzoai/nextjs-template`.

## Structure
- `src/app/` — App Router pages; `providers.tsx` mounts `GuiProvider` (with `@hanzo/ui/gui-config`) + `NextThemeProvider`.
- `src/components/` — app chrome (header, nav, icons) built from `@hanzo/ui` imports.
- `src/style/globals.css` — app-level CSS on top of `@hanzo/ui/theme.css` tokens.
- `next.config.mjs` — transpiles `@hanzo/gui` / `@hanzo/ui` / every installed `@hanzogui/*`, aliases `react-native` → `react-native-web`, resolves `.web.*` first.

## Commands
- Dev: `pnpm dev`
- Build: `pnpm build`
- Typecheck: `pnpm tc`

Full docs: README.md
