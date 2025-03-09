# Cozy Corner Application Standards

## Frontend (Web) Standards

- React 19 with TypeScript for UI components
- Component organization in `src/components` directory
- Tailwind CSS for styling with utility functions like `cn()` for class merging
- Vite for build and development with SWC for fast React refreshing
- Component props using ComponentProps<> type extension pattern
- Port 3000 for web development server
- Jest for testing

## UI Component Patterns

- Variants defined as type-safe objects (e.g., `buttonVariants` for style options)
- Size variations defined as type-safe objects (e.g., `buttonSizes`)
- Props typing using React's ComponentProps with extension
- Functional components with FC typing
- className composition with Tailwind utility functions

## Backend (API) Standards

- Hono.js for API routes and server
- OpenAPI/Swagger documentation integration
- Clear route organization under src/routes
- Versioned API endpoints (/v1/...)
- Automatic documentation linking
- Rollup for bundling
- Zod for request/response validation

## Development Practices

- Dev server setup for local API proxying
- Prettier configuration with Tailwind plugin
- Consistent logging through shared lib package
- Shared environment configuration with packages/env
- Standard naming conventions for files

## Architecture Patterns

- Clean separation between frontend and backend
- Monorepo structure with shared packages
- Component-based UI architecture
- API organized by feature/resource
- Type-sharing between frontend and backend with exports
