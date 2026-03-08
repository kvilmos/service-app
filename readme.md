# Service App

A full-stack JavaScript web application for entrepreneurs with small businesses. The platform helps manage employees and the services they offer, which can be booked by customers.

The application relies on popular libraries and frameworks such as React, React Router, Hono, Drizzle ORM, Better Auth, Zod, Tailwind CSS, and more.

### Planned Features

- [x] Authentication (Better Auth)
- [x] Email verification (Mail Gun)
- [ ] Authorization
- [ ] Hire employees
- [ ] Add services
- [ ] Book appointments

### Installation

```bash
# Install dependencies for all workspaces
bun install
```

## Quickstart

Make sure [bun](https://bun.sh) is installed.
(Version: 1.3.10 or later)

### Development

```bash
# Run all workspaces
bun run dev

# Or run individual workspaces directly
bun run dev:client    # Run the Vite dev server for React
bun run dev:server    # Run the Hono backend
```
