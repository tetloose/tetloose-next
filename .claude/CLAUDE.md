# Coding Standards

## Version Control

Always use the interactive git scripts — never raw git commands:

- `npm run git:branch` — create a new branch before starting any work
- `npm run git:commit` — commit using the structured prompt (type, scope, message)
- `npm run git:pr` — push and open a pull request

Branch naming follows `{type}/{slug}` (e.g. `feat/button-variants`). Commit format follows `{type}({scope}): {description}`.

## Generating New Files

Always use the generator — never create files by hand:

```bash
npm run gen:component
```

Supported types: `atom`, `molecule`, `component`, `layout`, `hook`, `context`, `service`, `util`.

This scaffolds the correct file set for the type. Do not skip or partially generate — every file in the set serves a purpose.

## Architecture

### `src/` — isolated, no business logic

Everything in `src/` is built and tested in isolation using mock data. No API calls, no data fetching, no router dependencies.

- UI (atoms → molecules → components → layouts) is developed in Storybook with mock data from `.mock.ts` files
- Hooks, utils, services, and context are unit tested independently

### `app/` — business logic only

All business logic lives in `app/`. Next.js pages in `app/` import finalised layouts from `src/layouts/`, call services, and pass data down as props. Nothing else belongs here.

## Component Hierarchy

- **Atoms** — base HTML elements, single responsibility, fully typed variants
- **Molecules** — composed from atoms only, no raw HTML
- **Components** — composed from atoms and molecules only, no raw HTML
- **Layouts** — composed from components, molecules, and atoms only, no raw HTML

After atoms, write no raw HTML. Compose existing pieces.

## Atomic Styles

Do not override or extend atomic styles from outside the atom. If a variant or modifier is needed, add it inside the atom's own `.variants.ts`.

The only acceptable exception is when a parent component genuinely owns the layout relationship — for example, `Form.Checkbox` and `Form.Radio` using `Form.Label` with a `className` that adjusts layout context, not the atom's visual style.

## File Structure

Each module has co-located files:

```
name/
├── name.component.tsx   # UI only, clsx for class composition
├── name.variants.ts     # Tailwind class strings, as const arrays or Records
├── name.types.ts        # Props types, derived from variants where possible
├── name.mock.ts         # Typed mock data for stories and tests
├── name.stories.tsx     # Storybook story, always uses mock data
└── name.test.tsx        # Vitest + React Testing Library
```

Hooks, utils, services, and context follow the same principle — co-located types and tests, no stories.

## Variants Pattern

Use `as const` arrays as the source of truth for option sets. Derive types and Storybook options from them — never duplicate manually:

```ts
export const TYPOGRAPHY_SIZE = ['text-xs', 'text-sm', 'text-base', 'text-lg'] as const
export type TypographySize = (typeof TYPOGRAPHY_SIZE)[number]
```

For components with a fixed set of named variants, use a `Record`:

```ts
export const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-black text-white ...',
  secondary: 'bg-white text-black ...'
}
```

Type Tailwind classes directly — never use mapping records to translate abstract values into classes.

## Storybook

Every atom, molecule, component, and layout must have a story. Stories must:

- Import args from the co-located `.mock.ts` file
- Infer Storybook `options` from `as const` arrays, not hardcoded strings
- Use a `render` function when the component needs hooks or context

## TypeScript

- Strict mode — no `any`
- Always use `import type` for type-only imports
- Derive types from constants where possible — avoid duplicating values as types
- Props are `Readonly<{}>` for objects

## ESLint and Imports

Follow all ESLint rules. Import order is enforced by `simple-import-sort`:

1. React / Next.js
2. Third-party packages
3. Context (`@context/*`)
4. Hooks (`@hooks/*`)
5. Utils (`@utils/*`)
6. Components (`@atoms/*`, `@molecules/*`, etc.)
7. Styles / images
8. Relative (`./`)

Always use path aliases (`@atoms/`, `@hooks/`, etc.) unless importing from within the same directory — then `./` is correct.

## Testing

Every component, hook, util, service, and context must have a test. Test what the component does, not how it does it:

- Components: render output, class application, conditional rendering
- Hooks: return values and state changes via `renderHook`
- Context: initial state, state updates, throws when used outside provider
- Utils: input → output, edge cases

## CSS

- Tailwind v4 via PostCSS — no `tailwind.config.ts`
- `@source` in `src/styles/source.css` tells Tailwind which files to scan
- Write Tailwind classes directly — no abstract values mapped to classes
- `clsx` for conditional class composition in components
- Stylelint enforces CSS file quality
