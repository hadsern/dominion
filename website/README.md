# Fractal Resonance Coherence — Website Deployment

This directory contains the Docusaurus-based website for `fractalresonance.com`.

## 🚀 Cloudflare Pages Configuration

To deploy this site on Cloudflare Pages:

1.  **Connect Git:** Connect your GitHub repository (`servathadi/sos`).
2.  **Build Settings:**
    *   **Framework Preset:** Docusaurus
    *   **Build command:** `npm run build`
    *   **Build output directory:** `build`
    *   **Root directory:** `website` (Important!)
3.  **Environment Variables:**
    *   `NODE_VERSION`: `18` (Recommended)

## 📁 Directory Structure

*   `docs/`: The "Database" (16D Papers, Physics, Foundations).
*   `src/pages/`: Top-level pages (Home, Prime 2, Transmissions).
*   `static/`: Assets (`ai_protocol.json`, Images).
*   `docusaurus.config.js`: Site configuration.

## 🤖 AI Protocol

The file `static/ai_protocol.json` is the machine-readable manifest of the FRC system.
It is served at `https://fractalresonance.com/ai_protocol.json`.
