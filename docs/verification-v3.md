# Verification — distinct compositions

Date: 27 October 2026. Local static build; no production deployment.

## Build and content

- `npm --prefix frontend run generate`: completes; 24 generated routes including eleven content pages and payload/fallback routes.
- `node scripts/check-static.mjs`: validates eleven English pages, the floating language control, internal resources, all project/scene assets, the photographic flame, CV experience, month-only dates and ten unique composition definitions.
- Every composition retains biography, projects and experience. Each of the ten screen résumés contains six sections, four experiences and eight projects.
- No dependency was added. The existing Nuxt/Vue stack and native SVG/CSS implement the new compositions and motion.

## Browser review

- Opening scenes: reviewed at 390 × 844 and 1440 × 1000. English appears initially; no broken images or document-level horizontal overflow were detected in those sizes. Daydream intentionally has a visually hidden heading because its first screen is the candle artwork.
- All ten mobile project catalogs contain eight projects and fit horizontally. Section order matches the composition registry.
- Direct `?theme=...#projects` links are restored after theme hydration, with the section positioned below the fixed header. Navigation order follows the theme’s actual section order.
- The floating selector changes between English and Spanish, updates the document language and preserves an explicit choice. Old implicit Spanish preferences use a separate legacy key, so the new initial language is English.
- The ten screen résumés were checked at desktop width. Their composition classes, complete section counts and absence of horizontal overflow were verified.
- Saved screenshots and measurements: [review index](previews/v3/index.md), [DOM audit](previews/v3/audit.json).

## Motion and accessibility

The implementation was checked against the [Web Interface Guidelines](https://raw.githubusercontent.com/vercel-labs/web-interface-guidelines/main/command.md). The personal first-person voice intentionally follows the brief rather than the guidelines’ generic product-copy preference.

Decorative SVGs are hidden from assistive technology; images have dimensions and meaningful alternative text where appropriate. Buttons retain keyboard focus indicators. Programmatically focused sections highlight their headings rather than drawing a large default outline around the entire catalog. Menus close with Escape and restore trigger focus. Pause and reduced-motion rules cover decorative loops; the KH turbulence animation is removed when motion is disabled.

Print styling remains separate from the screen résumé compositions. A physical printout and OS-level reduced-motion emulation were not exercised. The project repositories were not executed; their descriptive evidence remains in [project-sources.md](project-sources.md).

## Versioning

Changes live on `codex/distinct-universe-designs`, with a recoverable baseline commit preceding the new implementation. The README maps active source, design directions, artwork evidence and static hosting instructions. Generated build output, dependencies and environment files remain outside Git.
