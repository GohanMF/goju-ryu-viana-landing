# Deployment Guide for GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

## Automatic Deployment

### Setup Steps

1. **Push your code to GitHub**
   - Connect your repository to GitHub using Lovable's GitHub integration
   - Or manually push your code to a GitHub repository

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Build and deployment"
   - Set Source to "GitHub Actions"

3. **Automatic Deployment**
   - Every push to the `main` branch will automatically trigger a deployment
   - The workflow builds your app and deploys it to GitHub Pages
   - Your site will be available at: `https://[username].github.io/[repository-name]/`

### Viewing Deployment Status

- Go to the "Actions" tab in your GitHub repository
- You'll see all deployment runs and their status
- Click on any run to see detailed logs

## Manual Deployment (Alternative)

If you prefer to deploy manually from your local machine:

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Build and deploy**
   ```bash
   npm run deploy
   ```

This will build your app and push it to the `gh-pages` branch.

## Configuration

The base path is automatically configured based on your repository name. If you need to customize it:

- Edit `vite.config.ts` and change the `base` property
- Or set the `VITE_BASE_PATH` environment variable

## Troubleshooting

### Site shows 404 errors
- Make sure GitHub Pages is enabled in repository settings
- Verify the source is set to "GitHub Actions"
- Check that the workflow has run successfully in the Actions tab

### CSS/JS files not loading
- Verify the base path in `vite.config.ts` matches your repository structure
- For user/org pages (username.github.io), base should be "/"
- For project pages (username.github.io/repo), base should be "/repo/"

### React Router pages show 404
- The `404.html` file in the public folder handles this
- Make sure it was included in your deployment

## Custom Domain

To use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain
2. Configure DNS settings with your domain provider
3. Enable "Enforce HTTPS" in GitHub Pages settings

For more information, visit: https://docs.github.com/en/pages
