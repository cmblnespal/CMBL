# Cotton Molecular Biology Lab (CMBL)

A modern, responsive website for the Cotton Molecular Biology Lab at the University of Georgia.

## Features

- 🎨 Modern, accessible design with Tailwind CSS
- 📱 Fully responsive (360px and up)
- ♿ WCAG 2.1 AA compliant
- 📝 Markdown support for news/blog posts
- 🚀 Static site deployment via GitHub Pages

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the main branch. The GitHub Actions workflow:

1. Installs dependencies
2. Builds the site
3. Deploys to the `gh-pages` branch

## Tech Stack

- Vite + React 18
- Tailwind CSS v3
- shadcn/ui components
- react-markdown
- GitHub Actions for CI/CD

## Project Structure

```
CMBL/
├── src/
│   ├── components/    # Reusable UI components
│   ├── pages/        # Route components
│   ├── data/         # JSON/YAML data files
│   ├── content/      # Markdown content
│   └── styles/       # Global styles
├── public/           # Static assets
└── .github/         # GitHub Actions workflow
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

MIT 