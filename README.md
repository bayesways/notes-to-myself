# Notes to Myself

A personal blog built with React and Vite, featuring markdown posts with LaTeX math support and syntax highlighting.

## Tech Stack

- **React 19** + **Vite** - Frontend framework and build tool
- **react-markdown** - Markdown rendering
- **KaTeX** - LaTeX math rendering
- **rehype-highlight** - Code syntax highlighting
- **react-router-dom** - Client-side routing

## Project Structure

```
├── src/
│   ├── posts/          # Markdown blog posts (YYYY-MM-DD-slug.md format)
│   ├── pages/          # React page components (Home, Post)
│   ├── assets/         # Static assets
│   ├── App.jsx         # Main app with routing
│   └── main.jsx        # Entry point
├── public/             # Static files (favicon, etc.)
├── scripts/            # Utility scripts (transform-posts.js)
├── .github/workflows/  # GitHub Actions deployment
└── dist/               # Build output
```

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Adding Posts

 - Create a file in Obsidian using Templater 
 - Move the note in the folder `src/posts/` with the naming format `YYYY-MM-DD-slug.md` and include frontmatter:

Templater template 

```
---
title: "<%tp.file.title %>"
date: "<% tp.date.now("YYYY-MM-DD") %>"
---
<%*
const date = tp.file.creation_date("YYYY-MM-DD");
const slug = tp.file.title
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "");
const newName = `${date}-${slug}`;
await tp.file.rename(newName);
%>


## References
```