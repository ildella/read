---
schemaVersion: 1
scope: workspace
updatedAt: "2026-05-25T18:53:39.644Z"
workspaceName: "design"
---

# Project Memory

## Project Overview
- Landing page for Frankie Read, a calm reading-and-listening app for saved web articles.
- Product positioning: modern Pocket successor focused on helping readers save, read, and listen to long-form web content.
- Tone: calm, confident, editorial, warm, and restrained; “calm over power.”

## Current State
- First complete visual/web pass exists in `App.jsx`.
- Fine-tuning iterations have been applied to `App.jsx`.
- Latest update adds clearer product usage copy: Frankie is a web app/PWA for phone and desktop, plus a browser extension for saving articles.
- `DESIGN.md` exists and remains the authoritative design-system baton; it was updated with the usage-copy decision.
- Preview/final verifier still fails because the host wrapper cannot load with `ERR_FILE_NOT_FOUND`; no app-specific console errors were surfaced.
- Page is still implemented as a React single-page artifact; user asked whether it can be rebuilt with SvelteKit + TailwindCSS in pure JavaScript, but that migration has not yet been performed.

## Artifacts
- `App.jsx` — React landing page for Frankie Read, including hero, preserved how-it-works flow, feature highlights, simplified trust statement, pricing teaser, FAQ, and footer.
- `DESIGN.md` — authoritative design-system artifact for current visual direction, tokens, component guidance, and stable copy/usage decisions.

## Design Direction
- Editorial warm minimalism inspired by a beautifully typeset book page rather than SaaS dashboards.
- Cream/off-white background, dark warm text, restrained amber/terracotta/gold accents.
- Typography-led design with literary serif character and readable body copy.
- No stock imagery, no fake screenshots, no laptop mockups; uses typography, CSS atmosphere, and minimal inline/CSS illustration.
- Generous whitespace, soft section rhythm, subtle motion, and mobile-first responsiveness.
- Avoids generic AI startup cues, purple/blue gradients, chat/robot imagery, hype language, dense feature grids, and fake social proof.
- Explain practical usage simply, without overloading visitors with technical PWA/native-install language.

## User Feedback
- User likes the color tone, fonts, general layout, and most of the copy.
- User explicitly loves the “Save — Listen — Understand” / how-it-works section and said it is “perfection”; do not change that section.
- User found “Pocket is gone. Millions of readers need a new home.” and the whole “Why this, why now” section too investor-pitch-like; remove/avoid that angle.
- User prefers not to mention AI directly except possibly in negative “not AI” positioning.
- “Built by readers, for readers.” felt banal and was removed from the trust statement.
- Feature copy for voice/TTS should clarify that Frankie provides beautiful built-in TTS while also allowing users to bring their own provider/API key.
- User wants it clear that Frankie is a PWA/web app for mobile and desktop, with a Web Extension to grab articles, but not explained in a technical or heavy way.
- Strong preference remains: warm refined typography, restraint, no external images, no hard-sell SaaS feel.

## Decisions
- Hero headline remains: “Turn the web into your personal podcast.”
- Primary CTA remains low-friction free start; secondary CTA points to “See how it works.”
- The how-it-works section must remain intact with Save, Listen, Understand.
- The “Why this, why now” section has been removed from rendering because it felt too much like investor-pitch copy.
- Trust/social-proof area is simplified to the smaller statement: “No fake logos. No inflated claims. Just a patient tool for people who still love the web.”
- Voice/TTS feature direction now emphasizes built-in beautiful TTS plus flexibility to bring a preferred provider/API key.
- A FAQ entry now explains usage in simple terms: open Frankie in the browser on phone or desktop; install the browser extension to save articles in one click.
- Pricing currently remains Free plus Pro at $9/year.
- Design system is centralized in `DESIGN.md`; it is the authority for future visual/system changes.

## Open Questions
- Whether to migrate/rebuild the page with SvelteKit + TailwindCSS in pure JavaScript.
- Actual public links for Twitter/X, GitHub, email, and privacy policy.
- Whether “Pro $9/year” is final.
- Whether any future trust/social-proof section should remain minimal or later become a real reader counter/testimonial section.
- Final TTS provider list and exact “built-in voices / bring your own API key” wording.
- Whether to create reusable components or keep the single-page artifact simple.
- Exact future Get Started flow for explaining web app/PWA and extension setup.

## Next Steps
- Decide whether to convert the current React `App.jsx` implementation to SvelteKit + TailwindCSS, pure JavaScript.
- If migrating, preserve the approved visual direction and keep the entire how-it-works section unchanged.
- Inspect the page manually in browser or rerun preview once host wrapper issue is resolved.
- Confirm mobile layout and section spacing on phone-sized viewports after recent FAQ and section changes.
- Replace placeholder footer links with real destinations.
- Validate final copy with product owner, especially pricing, FAQ claims, TTS wording, and setup wording.
- Design the future Get Started page to show, rather than over-explain, web app and extension setup.
- If the design evolves, update `DESIGN.md` first and keep source aligned.

## Promotion Candidates For DESIGN.md
- “Save — Listen — Understand” section is now a locked/approved product narrative and should be preserved.
- Warm editorial palette with cream background, dark brown text, terracotta/gold accents.
- Literary serif-led typography and highly readable body style.
- Generous section spacing and restrained card/illustration styling.
- “Calm over power” as a durable product/design principle.
- No-stock-photo/no-dashboard/no-AI-cliché visual rules.
- Avoid investor-pitch copy and explicit AI framing in the main landing narrative.
- Usage explanation should stay plain-language: web app on phone/desktop, browser extension for saving.

## Recent History
- 2026-05-25: Created initial Frankie Read landing page in `App.jsx`.
- 2026-05-25: Added initial `DESIGN.md` design-system baton.
- 2026-05-25: Repaired `DESIGN.md` schema issues found by verifier.
- 2026-05-25: Attempted preview/final verification; host verification wrapper failed with `ERR_FILE_NOT_FOUND`.
- 2026-05-25: Applied first fine-tuning iteration: removed rendered why-now section, simplified trust statement, clarified TTS/voice feature copy, preserved how-it-works section.
- 2026-05-25: Preview/final verification again failed due host wrapper `ERR_FILE_NOT_FOUND`.
- 2026-05-25: Added FAQ copy clarifying Frankie as a web app for phone/desktop plus browser extension for saving; updated `DESIGN.md`; verification still failed due host wrapper `ERR_FILE_NOT_FOUND`.