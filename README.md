# Tetloose Next

A modern, production-ready, AI-ready Next.js boilerplate with atomic component architecture, Storybook, Tailwind CSS v4, and full TypeScript support.

## Core Tech

- **[Next.js 15](https://nextjs.org/)** — App Router, Turbopack
- **[TypeScript](https://www.typescriptlang.org/)** — strict mode throughout
- **[Tailwind CSS v4](https://tailwindcss.com/)** — utility-first styling via PostCSS
- **[clsx](https://github.com/lukeed/clsx)** — conditional class composition
- **[Storybook 10](https://storybook.js.org/)** — component development and documentation
- **[Vitest](https://vitest.dev/)** — unit testing with coverage
- **[React Hook Form](https://react-hook-form.com/)** — form state and validation
- **[Lucide React](https://lucide.dev/)** — icon library
- **[react-hot-toast](https://react-hot-toast.com/)** — toast notifications
- **[Plop.js](https://plopjs.com/)** — component scaffolding
- **[Husky](https://typicode.github.io/husky/)** + **[lint-staged](https://github.com/okonet/lint-staged)** — pre-commit hooks
- **[ESLint](https://eslint.org/)** + **[Stylelint](https://stylelint.io/)** — code quality
- **[Claude](https://claude.ai/code)** — AI ready, coding standards and project context registered in `.claude/`

## Architecture

**`src/`** is isolated from business logic. UI components are developed and documented in Storybook using mock data. Hooks, services, and utils are unit tested independently.

```
src/
├── atoms/          # Base UI elements (Button, Form, Image, Link, Typography…)
├── molecules/      # Composed atoms
├── components/     # Feature-level UI components
├── layouts/        # Page-level layout components
├── hooks/          # Shared React hooks
├── services/       # API and data-fetching logic
├── context/        # React context providers
├── utils/          # Utility functions
├── global/         # Global types and constants
└── styles/         # Tailwind entry point and global CSS
```

**`app/`** is where all business logic lives. Next.js App Router pages consume finalised `src/` layouts, call services, and handle routing — nothing else.

```
app/
├── layout.tsx
├── page.tsx
├── error.tsx
└── not-found.tsx
```

UI components (atoms → layouts) follow this structure:

```
button/
├── button.component.tsx
├── button.variants.ts
├── button.types.ts
├── button.mock.ts
├── button.stories.tsx
└── button.test.tsx
```

Variants are typed `as const` arrays — types and Storybook options are derived from the same source:

```ts
export const TYPOGRAPHY_SIZE = ['text-xs', 'text-sm', 'text-base', 'text-lg'] as const
export type TypographySize = (typeof TYPOGRAPHY_SIZE)[number]
// → 'text-xs' | 'text-sm' | 'text-base' | 'text-lg'
```

## Quick Start

```bash
git clone git@github.com:tetloose/tetloose-next.git
cd tetloose-next
npm run setup
```

Install VSCode recommended extensions: `cmd + shift + p` → type `recommended`.

## Commands

- `npm run setup` — install, prepare Husky, start dev
- `npm run dev` — Next.js dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — production server
- `npm run storybook` — Storybook dev server
- `npm run build-storybook` — build static Storybook
- `npm run test` — Vitest watch mode
- `npm run test:coverage` — coverage report
- `npm run lint` — lint TS files
- `npm run lint:fix` — lint and auto-fix
- `npm run lint:css` — lint CSS files
- `npm run lint:css:fix` — lint and auto-fix CSS
- `npm run watch` — watch TypeScript, ESLint, and styles concurrently
- `npm run gen:component` — scaffold a new component
- `npm run git:branch` — create a new branch interactively
- `npm run git:commit` — commit with interactive prompts
- `npm run git:pr` — open a pull request interactively
- `npm run lint-staged` — run lint-staged manually (also runs via pre-commit hook)
- `npm run commit-msg` — run commitlint manually (also runs via commit-msg hook)

## Component Generator

Scaffold a new component with all required files:

```bash
npm run gen:component
```

Plop will prompt for the name and type and generate the appropriate file set. Supported types: atom, molecule, component, layout, hook, service, util.

## Git Scripts

Interactive scripts for branch, commit, and PR workflows:

```bash
npm run git:branch   # create and checkout a new branch
npm run git:commit   # commitlint-style interactive commit
npm run git:pr       # push branch and open a PR
```
