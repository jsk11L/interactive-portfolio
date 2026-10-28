# Project identity audit — 27 October 2026

Reviewed public GitHub trees, source assets and existing project documentation through the GitHub connector. No project code was run. Existing identities take precedence; new vector marks are portfolio proposals, not claims that the upstream projects already use them.

| Project | Evidence | Portfolio treatment |
| --- | --- | --- |
| OmniDesk | [`frontend/src/favicon.svg`](https://github.com/jsk11L/omnidesk/blob/ed8992adaa2e69ce4fbb291f512f66e0e99d664c/frontend/src/favicon.svg) | Retain the open circle and separated node. Adapt to a single-color silhouette so the theme controls its presentation. |
| SimulaPUCV | [`frontend/public/favicon.png`](https://github.com/jsk11L/simulapucv/blob/72662490c04aafc480e8d508e807bfecf79cb279/frontend/public/favicon.png), [`backend/make_icon.py`](https://github.com/jsk11L/simulapucv/blob/72662490c04aafc480e8d508e807bfecf79cb279/backend/make_icon.py) | Redraw the existing graduation cap, lower arc and tassel in SVG, without its blue application tile. |
| LoopMania | [`Assets/Sprites/lm icon.png`](https://github.com/Kiziio1/Loop-Mania/blob/196a4f2708bf5df8d23a7efe0d40a5abe91e199b/Assets/Sprites/lm%20icon.png) | Adapt the concentric rings and central four-point spark into a clean, scalable single-color mark. Preserve the symbol rather than the large raster glow/background. |
| InteriorTwin | [Reviewed tree](https://github.com/jsk11L/interior-twin/tree/0d17a0b2e13c16c3d12455198f3e30a565bac41a) | No dedicated project brand found; vendor icon packs are not project logos. New proposal: overlapping isometric rooms/cubes. |
| Judge Bot | [Reviewed tree](https://github.com/jsk11L/judge-bot/tree/b9c47ceb0729532b837a467dbe3c1b58af46ed05) | No project icon found outside dependencies. New proposal: balanced scales with a node. |
| University Timetabling | [Reviewed tree](https://github.com/jsk11L/university-timetabling/tree/b59e0660c1b3e51271b6474fdfc471f045a94bbb) | No dedicated mark found. New proposal: timetable grid with connected slots. |
| Block Breaker | [Reviewed tree](https://github.com/jsk11L/block-breaker/tree/28b86873125ce87586d623a0a628d15d385b7d9e) | No dedicated mark found. New proposal: bricks, ball trajectory and paddle. |
| JamSpace | Follow-up review of the owner's private repository and local planning documents found no logo asset or defined visual identity. The documented concept is a collaborative musical workspace for bands. | Owner-authorized provisional mark: a rounded J containing an audio waveform, with a separate node consistent with the portfolio's personal identity. The monochrome SVG inherits each theme's color. This is a portfolio placeholder, not an upstream product logo. |

All eight marks live in `frontend/public/images/projects/marks/`. Shared line weight, circles/open orbits and a small `js.` signature form the personal identity. Project titles stay outside the artwork to avoid repetition. `ProjectArtwork.vue` uses the same silhouette in home gallery/list views and project detail pages, with ten separate theme treatments. Original reference PNGs are retained under `docs/references/v4/`. The old conceptual covers are kept as historical assets but are no longer displayed as project imagery.

The revised JamSpace placeholder is rendered for inspection in [`references/v4/jamspace-placeholder.png`](references/v4/jamspace-placeholder.png). It adds no external assets, fonts or runtime dependencies.

## Technology marks and fonts

Technology SVGs are local copies from the official [Devicon repository](https://github.com/devicons/devicon); its license is included beside the files. Visible technology names accompany every icon. Shared brand variants (React Native/React, Docker Compose/Docker) intentionally reuse the relevant parent logo. Concepts without a verified technology mark use a generic code symbol, never a fabricated official logo.

Barlow Condensed Bold and Source Sans 3 are bundled from the official [Google Fonts repository](https://github.com/google/fonts), with their SIL Open Font Licenses. Evangelion's display title uses the installed Times family as an open implementation choice; the commercial Matisse font is not bundled.
