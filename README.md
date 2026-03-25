# REVEAL Arena

Side-by-side outputs from different AI models, deployed via GitHub Pages.

## Live Models

| Model | Path | Source |
|-------|------|--------|
| OpenClaw | `/openclaw` | REVEAL |
| GPT-5.2 | `/gpt-5.2` | REVEAL 2 |
| Claude Code (Opus 4.6) | `/claude-code` | REVEAL 3 |
| OpenCode Simple | `/opencode` | REVEAL 4 |
| OpenCode Enhanced Frontend | `/opencode-enhanced` | REVEAL 5 |
| Stitch UI | `/stitch` | REVEAL 6 |

## Adding a New Model

1. Drop the model's `index.html` and `static/` folder into a new subdirectory:
   ```
   your-model-name/
   ├── index.html
   └── static/
   ```
2. Add an entry to the `models` array in the root `index.html`:
   ```js
   {
     name: "Your Model",
     path: "your-model-name",
     badge: "REVEAL 3",
     meta: "Short description"
   }
   ```
3. Push and you're done.

## Local Preview

```bash
# any static server works
npx serve .
```

## Notes

- All asset paths inside each subdirectory should be **relative** (`./static/...`) not absolute (`/static/...`).
- GitHub Pages is configured to serve from the `main` branch root.
