# Render (Free) deploy notes - devinsights-redesign

This project uses **Bun** for install + scripts.

## Render settings

- Environment: **Node** (native)
- Branch: `main` (or `ralph/devinsights-ui-revamp` for WIP)
- Build command:

```bash
curl -fsSL https://bun.sh/install | bash
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"
bun install --frozen-lockfile
bun run build
```

- Start command:

```bash
export BUN_INSTALL="$HOME/.bun"
export PATH="$BUN_INSTALL/bin:$PATH"
# Render provides $PORT; Next must bind to it
bun run start
```

## Notes
- Render Free services may spin down on inactivity; first request after idle can be slow.
- Node version is pinned via `.nvmrc` and `package.json#engines`.
