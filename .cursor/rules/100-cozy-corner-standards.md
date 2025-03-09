# Cozy Corner Project Standards

## TypeScript Standards

- Target: ES2022
- Module: ESNext
- Strict type checking is required
- No unchecked indexed access
- No unused locals or parameters
- No unchecked side effect imports

## ESLint Standards

- TypeScript validation enabled
- Indent: 2 spaces
- Semi colons: required
- Quotes: double quotes
- Brace style: 1tbs (one true brace style)
- Comma dangle: only in multiline
- Consistent type definitions using `type` over `interface`
- No console logs (warning)
- No direct process.env access (use @packages/env instead)
- Imports must be sorted
- Filenames must use kebab-case

## Project Structure

- Monorepo structure with shared packages
- Environment variables managed through @packages/env
- Database interactions through @packages/db
- Shared utilities in @packages/lib
- Consistent ESLint and TypeScript configurations

## Environment Management

- Environment variables validated with Zod schemas
- Template files (.env.template) should be maintained
- Environment variables should be properly documented
- Database connections configured through environment

## Database Standards

- Use Drizzle ORM for database operations
- Maintain migration files appropriately
- Schema defined in @packages/db
