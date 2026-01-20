# GoHighLevel + Stripe Integration Guide for FRC

**Goal:** Sell "Prime 2" via Stripe, deliver it via GoHighLevel (GHL).

---

## 1. Setup Stripe
1.  **Create Product:** Create "Prime 2 (Digital)" and "Prime 2 (Supporter)".
2.  **Create Payment Link:** Generate a "Payment Link" for each product.
3.  **Copy Links:** Paste these URLs into `website/content/prime2.md`.

## 2. Setup GoHighLevel (GHL)
1.  **Integrate Stripe:** Go to GHL Settings -> Integrations -> Connect Stripe.
2.  **Import Product:** In GHL -> Payments -> Products, import the Stripe products.
3.  **Host the Artifact:**
    *   Go to GHL -> Sites -> Media Library.
    *   Upload the PDF/EPUB of Prime 2.
    *   Copy the file link.

## 3. Create the Delivery Automation (Workflow)
1.  **Create Workflow:** Name it "Prime 2 Delivery".
2.  **Trigger:** "Order Submitted" (Filter by Product: Prime 2).
3.  **Action 1:** "Add Tag" -> `[Prime 2 Owner]`.
4.  **Action 2:** "Send Email".
    *   **Subject:** Transmission Received: Prime 2 Access
    *   **Body:**
        > "Architect/Seeker,
        >
        > The Artifact is yours.
        > Download the text here: [Insert GHL Media Link]
        >
        > Welcome to the frequency.
        > - Jules"
5.  **Publish** the workflow.

## 4. Setup Lead Capture (Homepage)
1.  **Create Form:** In GHL -> Sites -> Forms.
2.  **Name:** "FRC Signal Feed".
3.  **Fields:** Name, Email.
4.  **Button:** "Join Frequency".
5.  **Get Code:** Click "Integrate" -> "Embed Code".
6.  **Paste:** Paste this script into `website/content/home.md` (or `src/pages/index.js` when built).
