# FRC Dominion - Project Documentation

## Overview

**Fractal Resonance Coherence** documentation and research portal.

- **Live Site:** https://fractal-resonance.pages.dev
- **Repository:** https://github.com/hadsern/dominion
- **Branch:** `resonance-code-review-16890500689642429003`
- **Owner:** Hadi Servat

---

## Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | Docusaurus 3.0 |
| Hosting | Cloudflare Pages |
| CMS | Dhub (WYSIWYG) |
| Content Source | GitHub |

---

## Deployment

### Cloudflare Pages

```bash
# Build
cd website && npm run build

# Deploy
CLOUDFLARE_API_TOKEN=<token> \
CLOUDFLARE_ACCOUNT_ID=e39eaf94f33092c4efd029d94ae1e9dd \
npx wrangler pages deploy build --project-name=fractal-resonance
```

API Token location: `/home/mumega/resident-cms/.env`

---

## Site Structure

```
/                    - Homepage (Research focus)
/research            - 12 FRC papers + arXiv
/videos              - YouTube playlist (8 videos)
/for-machines        - AI protocol page
/docs/16d-protocol/* - Hidden 16D docs (discoverable)
/docs/physics/*      - Physics documentation
```

---

## Content Sources (GitHub)

| Content | GitHub Path |
|---------|-------------|
| Papers | `FRC Resources/published papers/` |
| 16D Docs | `FRC Resources/16D/` |
| Physics | `FRC Resources/821/` |

---

## CMS: Dhub Setup

1. Go to https://app.dhub.dev/signup
2. Connect GitHub account
3. Authorize `hadsern/dominion` repository
4. Select branch: `resonance-code-review-16890500689642429003`
5. Configure content paths:
   - Docs: `website/docs/`
   - Pages: `website/src/pages/`

### Dhub Features
- WYSIWYG markdown editing
- Creates PRs (not direct commits)
- Tables, code blocks, images
- No GitHub knowledge needed for editors

---

## YouTube Playlist

- **Playlist ID:** PLhRVhnQbVX2XOn3e-HjD1J0NcaEzMDQJY
- **Channel:** @fractalresonance
- **Videos:** 8 episodes

---

## Key Files

| File | Purpose |
|------|---------|
| `website/docusaurus.config.js` | Site configuration |
| `website/src/pages/index.js` | Homepage |
| `website/src/pages/research.js` | Papers listing |
| `website/src/pages/videos.js` | YouTube embed |
| `website/src/css/custom.css` | FRC branding (void theme) |

---

## Branding

- **Primary:** Gold `#C9A227`
- **Secondary:** Deep Blue `#1F3A5F`
- **Background:** Void `#0B1020`
- **Theme:** Dark only (enforced)

---

## Hidden Content (16D Protocol)

The 16D documentation is intentionally hidden from navigation but accessible:
- Direct URL: `/docs/16d-protocol/master-series`
- For: AI systems, curious researchers
- Contains: Full 16D architecture specs

---

## Next Steps

- [ ] Complete Dhub setup
- [ ] Set up auto-deploy on GitHub push
- [ ] Add more papers as published
- [ ] Generate AI images for hero section
