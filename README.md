# tranle.dev

Personal portfolio site. I wanted to make something fun so the whole site is a repo - file-tree on the left, markdown doc on the right. Clicking a file in the tree swaps the doc. You can use the command palette to search as well.

**Live:** [tranle.dev](https://tranle.dev)

---

## stack

| layer | tech |
|---|---|
| framework | Next.js 15 (static export) |
| styling | plain CSS, design tokens |
| type | Inter + JetBrains Mono via `next/font` |
| deploy | GitHub Pages via Actions |

No Tailwind, no Framer Motion, no router - every "page" is a React state switch. Navigation is instant.

---

## design

Designed in [Claude Design](https://claude.ai/design), built with Claude Code.

The concept: the portfolio structure mirrors the repo that contains it - markdown files for each section, a file tree as navigation.

---

## structure

```markdown
src/
  app/
    page.tsx          # single route - all navigation is state
    layout.tsx        # fonts + metadata
    globals.css       # design tokens + component styles
  components/
    PortfolioApp.tsx  # owns active-file state, renders shell
    FileTree.tsx      # left rail, ⌘K trigger
    CommandPalette.tsx
    views/
      ReadmeView.tsx
      MilestoneView.tsx
      RadiantView.tsx
      AboutView.tsx
      ExperienceView.tsx
public/
  design/             # wireframe screenshots + full handoff HTML
  milestone/          # project screenshots
  radiant/            # project screenshots
```

## deploy

Push to `main` → GitHub Actions builds (`npm run build`) → deploys `out/` to GitHub Pages.

Make sure Pages is set to **GitHub Actions** as the source (Settings → Pages → Source).
