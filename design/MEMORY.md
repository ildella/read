---
schemaVersion: 1
scope: workspace
updatedAt: "2026-05-25T17:36:06.886Z"
workspaceName: "design"
---

# Project Memory

## Project Overview
- Landing page for Frankie Read, a calm reading-and-listening app for saved web articles.
- Product positioning: modern Pocket successor focused on helping readers save, read, and listen to long-form web content.
- Tone: calm, confident, editorial, warm, and restrained; “calm over power.”

## Current State
- First complete visual/web pass has been created.
- `App.jsx` exists and contains the landing page implementation.
- `DESIGN.md` exists and contains the initial design-system baton for the page.
- Runtime preview/verification wrapper failed to load with `ERR_FILE_NOT_FOUND`; no app runtime console errors were surfaced, but final verification could not complete due host wrapper load failure.

## Artifacts
- `App.jsx` — complete React landing page for Frankie Read, including hero, how-it-works flow, why-now section, feature highlights, social proof placeholder, pricing teaser, FAQ, and footer.
- `DESIGN.md` — authoritative design-system artifact for current visual direction, tokens, and component guidance.

## Design Direction
- Editorial warm minimalism inspired by a beautifully typeset book page rather than SaaS dashboards.
- Cream/off-white background, dark warm text, restrained amber/terracotta/gold accents.
- Typography-led design with literary serif character and readable body copy.
- No stock imagery, no fake screenshots, no laptop mockups; uses typography, CSS atmosphere, and minimal inline/CSS illustration.
- Generous whitespace, soft section rhythm, subtle motion, and mobile-first responsiveness.
- Avoids generic AI startup cues, purple/blue gradients, chat/robot imagery, hype language, dense feature grids, and fake social proof.

## User Feedback
- User explicitly requested a calm, editorial landing page for Frankie Read.
- Strong preference for warm, refined typography and restraint.
- Product should not feel like an AI startup, bookmark manager, knowledge base, or hard-sell SaaS page.
- External images should not be used.

## Decisions
- Page structure follows requested sections: full-viewport hero, 3-step flow, why-this-now, emotional feature highlights, trust placeholder, simple pricing, FAQ, and minimal footer.
- Hero headline uses: “Turn the web into your personal podcast.”
- Primary CTA: low-friction free start.
- Secondary CTA scrolls/points to “See how it works.”
- Pricing presented as Free plus Pro at $9/year.
- FAQ covers offline use, TTS support, Pocket replacement, summarization stance, and local/offline-first storage.
- Design system is centralized in `DESIGN.md`; it is the authority for future visual/system changes.

## Open Questions
- Actual public links for Twitter/X, GitHub, email, and privacy policy.
- Whether “Pro $9/year” is final.
- Whether social proof should remain a simple line or later become a real reader counter/testimonial section.
- Final TTS provider list and exact “bring your own API key” wording.
- Whether to create reusable components or keep the single-page artifact simple.

## Next Steps
- Inspect `App.jsx` manually in browser or rerun preview once host wrapper issue is resolved.
- Confirm mobile layout and section spacing on phone-sized viewports.
- Replace placeholder footer links with real destinations.
- Validate final copy with product owner, especially pricing and FAQ claims.
- If the design evolves, update `DESIGN.md` first and keep `App.jsx` aligned.

## Promotion Candidates For DESIGN.md
- Warm editorial palette with cream background, dark brown text, terracotta/gold accents.
- Literary serif-led typography and highly readable body style.
- Generous section spacing and restrained card/illustration styling.
- “Calm over power” as a durable product/design principle.
- No-stock-photo/no-dashboard/no-AI-cliché visual rules.

## Recent History
- 2026-05-25: Created initial Frankie Read landing page in `App.jsx`.
- 2026-05-25: Added initial `DESIGN.md` design-system baton.
- 2026-05-25: Repaired `DESIGN.md` schema issues found by verifier.
- 2026-05-25: Attempted preview/final verification; host verification wrapper failed with `ERR_FILE_NOT_FOUND`.