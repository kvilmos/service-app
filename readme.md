# bhvr (JavaScript) 🦫

A full-stack JavaScript monorepo using Bun, Hono, Vite, and React. Inspired by the original bhvr stack: [bhvr.dev](https://bhvr.dev).

### Installation

```bash
# Install dependencies for all workspaces
bun install
```
## Quickstart

Make sure [bun](https://bun.sh) is installed.

### Development

```bash
# Run all workspaces
bun run dev

# Or run individual workspaces directly
bun run dev:client    # Run the Vite dev server for React
bun run dev:server    # Run the Hono backend
