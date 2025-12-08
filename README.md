# Tetloose Next

A modern, production-ready Next.js framework with a comprehensive component library, built-in Storybook documentation, and full TypeScript support.

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Development](#development)
- [Architecture](#architecture)
- [Component Structure](#component-structure)
- [Available Commands](#available-commands)
- [Testing](#testing)
- [Deployment](#deployment)
- [VSCode Setup](#vscode-setup)
- [Learn More](#learn-more)

## Features

### Core Technologies

- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Storybook](https://storybook.js.org/)** - Component documentation and development
- **[Vitest](https://vitest.dev/)** - Fast unit testing framework
- **[SCSS Modules](https://sass-lang.com/)** - Scoped styling with CSS modules

### Architecture Features

- **Atomic Design Pattern** - Components organized as Atoms, Foundations, Components, and Layouts
- **Server Components** - Async data fetching with Next.js App Router
- **Container/Presentational Pattern** - Clean separation of data fetching and rendering
- **Type-Safe APIs** - Full TypeScript coverage with strict mode
- **Component Generator** - CLI tool for scaffolding new components
- **Code Quality** - ESLint, Prettier, and Husky pre-commit hooks

## Quick Start

### Prerequisites

- Node.js 18+

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:tetloose/tetloose-next.git
   cd tetloose-next
   ```

2. Install VSCode recommended extensions:
   ```
   cmd + shift + p → "recommended"
   ```

3. Run setup (installs packages, sets up Husky, and starts dev server):
   ```bash
   npm run setup
   ```

## Development

### Development Server

Start the Next.js development server with Turbopack:

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Storybook

Launch Storybook for component development and documentation:

```bash
npm run storybook
```

Visit [http://localhost:6006](http://localhost:6006)

### Generate Components

Use the interactive CLI to scaffold new components:

```bash
npm run gen:component
```

Follow the prompts to create a new component with:
- Component file (.component.tsx)
- Types file (.types.ts)
- Stories file (.stories.tsx)
- Styles file (.module.scss)
- Documentation file (.mdx)

## Architecture

### Project Structure

```
app/
├── atoms/              # Basic UI elements (Button, Link, Image)
├── foundations/        # Layout primitives (Grid, Row, Typography)
├── components/         # Complex components (Hero, Navigation, RichText)
├── layouts/            # Page layouts (Header, Footer, NotFound)
├── styles/             # Global styles and SCSS utilities
├── utils/              # Utility functions and helpers
└── global/             # Global types and mocks
```

### Component Patterns

#### Container/Presentational Pattern

For async server components that need Storybook compatibility:

```tsx
// Header.component.tsx (Container - fetches data)
export const Header = async () => {
  const data = await fetchData<HeaderData>({ url: 'header' })
  return <HeaderWrapper {...data} />
}

// Header-wrapper.component.tsx (Presentational - renders UI)
export const HeaderWrapper = ({ image, navigation }: HeaderProps) => {
  return <header>...</header>
}
```

**Benefits:**
- ✅ Clean separation of concerns
- ✅ Storybook compatible (use wrapper component)
- ✅ Easy to test with mock data
- ✅ Production-ready async data fetching

#### Atomic Design

Components are organized by complexity:

1. **Atoms** - Basic building blocks (Button, Link, Image)
2. **Foundations** - Layout primitives (Grid, Row, Typography)
3. **Components** - Business logic components (Hero, Navigation)
4. **Layouts** - Page-level layouts (Header, Footer)

## Component Structure

Each component includes:

```
ComponentName/
├── ComponentName.component.tsx    # Main component
├── ComponentName.types.ts         # TypeScript definitions
├── ComponentName.stories.tsx      # Storybook stories
├── ComponentName.module.scss      # Scoped styles
├── ComponentName.mdx              # Documentation
└── ComponentName.mock.ts          # Mock data (optional)
```

### Example Component

```tsx
// Button.component.tsx
import styles from './Button.module.scss'
import type { ButtonProps } from './Button.types'

export const Button = ({ children, variant = 'primary' }: ButtonProps) => {
  return (
    <button className={styles[variant]}>
      {children}
    </button>
  )
}
```

## Available Commands

### Setup & Development

| Command | Description |
|---------|-------------|
| `npm run setup` | Install packages, setup Husky, and start dev server |
| `npm run dev` | Start Next.js development server with Turbopack |
| `npm run storybook` | Launch Storybook in development mode |
| `npm run gen:component` | Generate a new component with scaffolding |

### Building & Production

| Command | Description |
|---------|-------------|
| `npm run build` | Build production Next.js application |
| `npm run start` | Start production server |
| `npm run build-storybook` | Build static Storybook for deployment |

### Testing & Quality

| Command | Description |
|---------|-------------|
| `npm run test` | Run Vitest in interactive watch mode |
| `npm run test:coverage` | Display test coverage statistics |
| `npm run lint` | Lint TypeScript and SCSS files |
| `npm run lint:fix` | Lint and auto-fix errors |

### Git

| Command | Description |
|---------|-------------|
| `npm run git:commit` | Interactive commit with prompts |

## Testing

### Unit Tests with Vitest

Run tests in watch mode:

```bash
npm run test
```

Generate coverage report:

```bash
npm run test:coverage
```

### Example Test

```tsx
import { render, screen } from '@testing-library/react'
import { Button } from './Button.component'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })
})
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com/new)
3. Deploy automatically on every push

### Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

See [Next.js Environment Variables](https://nextjs.org/docs/app/building-your-application/configuring/environment-variables) for more details.

## VSCode Setup

### Recommended Extensions

Open command palette (`cmd + shift + p`) and type "recommended" to see workspace extensions:

- **ESLint** - JavaScript/TypeScript linting
- **Prettier** - Code formatting
- **SCSS IntelliSense** - SCSS autocomplete
- **TypeScript Error Translator** - Better TS error messages
- **[Workspaces](https://marketplace.visualstudio.com/items?itemName=Fooxly.workspace)** - Show/hide files

### Chrome Extensions

- **[React Developer Tools](https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)** - React component debugging

## Learn More

### Documentation

- **Storybook Docs** - [http://localhost:6006](http://localhost:6006) (when running Storybook)
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Tutorials

- [Learn Next.js](https://nextjs.org/learn) - Interactive Next.js tutorial
- [Next.js App Router](https://nextjs.org/docs/app) - App Router documentation
- [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components) - React Server Components guide

### Community

- [Next.js GitHub](https://github.com/vercel/next.js)
- [Next.js Discord](https://nextjs.org/discord)

## Contributing

1. Create a feature branch: `git checkout -b feature/my-feature`
2. Make your changes
3. Run tests: `npm run test`
4. Run linting: `npm run lint:fix`
5. Commit changes: `npm run git:commit`
6. Push and create a pull request

## License

MIT
