# Verification — typography, skills and project identities

Date: 27 October 2026. Local static build; no production deployment.

## Scope

- Preserve the ten distinct compositions and approved scene illustrations.
- Replace comic/distressed typography in Persona and Manga with Barlow Condensed and Source Sans 3. Keep all reading surfaces upright, including résumé panels and hover states.
- Rebuild Evangelion around a black serif title card and amber MAGI navigation; retain a compact biographical project grid below.
- Place 26 labeled technology badges immediately after every opening, grouped by the existing CV categories. Use local Devicon SVGs, including icons on the full résumé and project pages.
- Replace all eight project covers with a reusable SVG identity stage. Existing marks in three repositories were adapted; five new proposals and their evidence/limits are documented in the [identity audit](project-identities-v4.md).
- Reduce home copy by removing the repeated introductory essay, full career bullet lists, duplicate toolkit, project status labels and expanded record-view descriptions. All original career bullets and project descriptions remain on secondary pages.
- Present ten text-free color swatches through the original universe trigger. Keep numbered accessible names, selected states, Escape/outside dismissal and focus restoration. Random selection and animation control use labeled icons.

## Automated verification

`npm --prefix frontend run generate` completes and prerenders 24 routes, including eleven content pages. `node scripts/check-static.mjs` checks all eleven pages, initial English, language controls, local links/assets, all project marks and scene illustrations, every technology SVG and its mapping, complete project detail highlights, the prominent skills placement, month-only dates and ten distinct composition registries. `git diff --check` reports no whitespace errors.

No dependency was added. Open fonts and technology SVGs include their licenses. Public repository trees and assets were read through the GitHub connector; no project repository code was executed.

## Browser review

Reviewed in the in-app browser at its default desktop width (1280px) and at 390 × 844 for mobile. The audit records:

- Ten opening scenes and catalogs, each containing eight projects, with no document-level horizontal overflow or broken image elements.
- Twenty-six skill labels and logos in all themes; no text rotation in the principal home content or résumé panels.
- Complete screen résumés: six sections, four career entries and eight projects in every theme; CV paragraphs/list items are at least 16px on screen.
- Direct project anchors restored below the header, and `/cv#skills` restored to the visible skills section.
- English → Spanish → English through the floating selector, discovery through the color palette, keyboard Escape/focus restoration and motion pause.
- Mobile Evangelion catalog uses one column to avoid clipped names. Opening scene height follows its content so MAGI navigation does not overlap the inspiration caption. Manga reserves extra mobile space below its final panel for the caption.
- Solid-surface contrast samples cover project descriptions, technology labels, career dates, main navigation, résumé body/headings and contacts. Small text uses a 4.5:1 threshold; large text uses 3:1. Alpha backgrounds are composited before measurement. This is a targeted review, not a certification of every possible image/background state.

Screenshots and measurements are in the [review index](previews/v4/index.md). Capture review uses the app's pause control to avoid saving unfinished entrance animations. Motion can be resumed normally.

## Limits

Physical printing, OS-level reduced-motion emulation and a full screen-reader session were not exercised. New creative copy continues to use Spanish or English where complete German/Russian translations are not available. JamSpace repositories could not be accessed, so its proposed identity is based only on the existing résumé description. The publication still needs its bibliographic reference.

The temporary preview binds only to `127.0.0.1` and is stopped after review. Git changes remain on `codex/distinct-universe-designs`; no merge or production deployment is part of this revision.
