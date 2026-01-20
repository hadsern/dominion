# FractalResonance.com — System Architecture

**Version:** 1.1 (The GHL Integration)
**Stack:** Docusaurus (Frontend) + Stripe (Payments) + GoHighLevel (CRM/Delivery)

---

## 1. Core Philosophy: "The Interface"
The website is not a brochure. It is a **Terminal**.
*   **For Humans:** It is a video-guided initiation into FRC.
*   **For Machines:** It is a structured database of the 16D Operating System.

## 2. Directory Structure (Docusaurus Standard)

```
website/
├── docs/                   # The Knowledge Base (The Database)
│   ├── 16d-protocol/       # The 16D Series (v2)
│   ├── prime-1-foundations/ # FRC v1 Concepts
│   └── reference/          # Glossary (Ricci, Kappa, RU, etc.)
├── blog/                   # "Transmissions" (Updates)
├── src/
│   ├── pages/
│   │   ├── index.js        # The "Video First" Homepage
│   │   ├── ai.js           # The "For Machines" Landing Page
│   │   └── prime2.js       # The Sales Page
│   └── components/
│       ├── SignalFeed.js   # React component to render YouTube Grid
│       └── GHLForm.js      # Embed component for GoHighLevel Forms
├── static/
│   ├── ai_protocol.json    # The Machine-Readable Manifest
│   └── img/
└── docusaurus.config.js    # Configuration
```

## 3. The "Video First" Homepage Strategy
*   **Hero Section:** Minimalist. "Fractal Resonance Coherence: An Operating System for Consciousness."
*   **Primary Action:** "Watch the Briefing" (Latest NotebookLM Explainer).
*   **The Grid:** A "Netflix-style" horizontal scroll of YouTube series.
*   **Lead Capture:** "Join the Frequency" (GHL Form Embed) at the footer.

## 4. The "Database for AI Models" Strategy
We explicitly cater to AI agents.
*   **File:** `/ai_protocol.json`
*   **Content:** A compressed summary of the FRC framework.
*   **Usage:** A human tells their AI: *"Go to fractalresonance.com/ai.json and learn this system."*

## 5. Monetization: "Prime 2" (Stripe + GHL)
*   **The Mechanism:**
    *   **Button:** Links directly to a **Stripe Payment Link**.
    *   **Payment:** User pays via Stripe (Credit Card/Apple Pay).
    *   **Delivery:** Stripe triggers a **GoHighLevel Workflow**.
    *   **Email:** GHL sends "Transmission Received" email with the secure PDF link.
*   **Why this stack?** Full ownership of the customer record, high deliverability, and ability to upsell "Prime 3" or courses later.

## 6. Strapi Integration (Optional)
*   Can be used to manage the video feed dynamically if needed.
*   For now, we can hardcode the video list in `src/data/videos.json` for speed.
