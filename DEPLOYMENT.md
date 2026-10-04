# Deployment Guide for GitHub

This guide covers how to deploy the Cobalt web frontend to **GitHub Pages** and how to package the API server with **GitHub Container Registry (GHCR)**.

---

## 1. Deploying the Web Frontend to GitHub Pages

The repository is configured with an automated GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) that builds and deploys the SvelteKit frontend to GitHub Pages upon pushing to the `main` branch.

### Step 1: Enable GitHub Pages in Repository Settings
1. Open your repository on GitHub: `https://github.com/vrajakbari30/cobaltvraj`
2. Go to **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.

### Step 2: Configure Environment Variables (Optional)
By default, the web client will use `https://api.cobalt.tools/` for processing requests.

If you host your own Cobalt API instance and want the web client to point to it:
1. Go to **Settings** > **Secrets and variables** > **Actions** > **Variables** tab.
2. Click **New repository variable**.
3. Name: `WEB_DEFAULT_API`
4. Value: `https://your-api-domain.com/`
5. Click **Add variable**.

### Step 3: Trigger Deployment
- **Automatic:** Push any commit to the `main` branch.
- **Manual:**
  1. Go to the **Actions** tab on GitHub.
  2. Select **Deploy Web to GitHub Pages** in the left sidebar.
  3. Click **Run workflow**, optionally specify a custom API URL, and click **Run workflow**.

Your site will be live at:
`https://vrajakbari30.github.io/cobaltvraj/`

---

## 2. Deploying the API Backend via Docker / GHCR

The repository includes Docker support and a workflow (`.github/workflows/docker.yml`) to publish containers directly to GitHub Packages / Container Registry (`ghcr.io`).

### Manual Container Build
1. Go to **Actions** > **Build release Docker image**.
2. Click **Run workflow**.
3. Once completed, your container image will be published at `ghcr.io/vrajakbari30/cobaltvraj:latest`.

### Running the API Container on a Server / VPS
To run the API on any cloud server or VPS:
```bash
docker run -d \
  -p 9000:9000 \
  --name cobalt-api \
  --restart unless-stopped \
  ghcr.io/vrajakbari30/cobaltvraj:latest
```

---

## 3. Local Development & Testing

```bash
# Install dependencies
pnpm install

# Run web frontend in development mode
pnpm run dev

# Build web frontend for production
pnpm run build

# Start local API backend
pnpm run start:api
```
