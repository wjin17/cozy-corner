# Web App

This is the web frontend for the Cozy Corner application.

## GitHub Pages Deployment

This app is configured to deploy to GitHub Pages automatically through GitHub Actions.

### Setup Instructions

1. Push the code to GitHub
2. Enable GitHub Pages in your repository:
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Build and deployment" section, select "GitHub Actions" as the Source
3. The GitHub Actions workflow will automatically build and deploy the web app when you push to the main branch

### Accessing the Deployed Site

Once deployed, your site will be available at:
`https://[your-github-username].github.io/cozy-corner/`

### Local Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

### Configuration

The app is configured to use the `/cozy-corner/` base path for GitHub Pages. If you're deploying to a custom domain, update the `base` parameter in `vite.config.ts` to `'/'`.
