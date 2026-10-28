# Visual refinement v5

## Direction

Preserve the ten established worlds, professional upright typography and existing project identities. Give every world the selectable project list and an accompanying section index. Keep detailed descriptions on secondary pages and introduce Javier briefly before the technology section.

- Typography: Source Sans 3 for reading and controls; existing theme display families remain. Navigation is 18 px on desktop and 16 px on small screens; primary reading text is 18 px or larger. Persona's condensed headings stay distinct from its larger body copy.
- Layout: desktop uses a sticky index beside the reading column, with the selected project artwork alongside the list. Ferment and Edgerunners put the index on the right; Kingdom Hearts and Daydream put the artwork before the list. Small screens stack the selected project and list and retain the existing bottom section navigation.
- Material: watercolor chapter marks, Persona's red offset paper, Bloodborne's brass archive borders, Daydream's liner rules, Animals' industrial edges, Ferment's print layers, Twin Peaks' red curtain lines, Evangelion's violet instruments, Edgerunners' illuminated rails and manga's black ink frames.
- Evangelion colors: hangar `#100c17`, deep violet `#1c1229`, purple `#9e7abe`, lilac `#c2a1e5`, near-white `#f7f0ff`, restrained green `#c6de8e`. Other worlds retain their established palettes.

The shared list is deliberate because the owner preferred that interaction. Theme-specific borders, placement, type and color carry the variation. No new font, animation or runtime dependency was introduced.

## Changes

- All universes start with the project list; the optional gallery switch remains.
- The section index follows the actual content order, includes skills and indicates the current section.
- Larger, opaque controls make résumé and discovery actions readable over illustrations. The universe trigger contains only the three-color icon, retaining its accessible name.
- A short professional summary precedes skills.
- Kingdom Hearts gains droplets and expanding water ripples; Bloodborne gains a flickering highlight layer aligned with its lamps and windows; Ferment gains slowly appearing paint impressions; Edgerunners gains changing illuminated city highlights. Existing candle, smoke and other scene animations remain.
- The manga hand-and-eye motif moves out of its panel into a native SVG cursor on fine-pointer devices. Text inputs retain their normal text cursor.
- Decorative `✳` symbols had no informational meaning and were removed. Long dashes in application text were replaced with middle-dot separators.
- New motion respects the animation pause control and reduced-motion preference. No whole-screen flash or continuously moving text was added.

## Generated illustration

Built-in ImageGen was used for a new background, then Sharp converted the result to WebP without changing the composition. Project asset: `frontend/public/images/artwork/eva-hangar-v5.webp` (1672 × 941, approximately 108 KiB). This is generated fan-inspired artwork, not an official asset.

Final prompt:

> Use case: stylized-concept. Create a wide 16:9 atmospheric anime background illustration for a professional personal portfolio inspired by Neon Genesis Evangelion. Recognizable Evangelion Unit-01, enormous angular purple biomechanical mecha, narrow green luminous eyes and restrained acid green armor accents, long forehead horn, exposed angular jaw, standing half concealed in a dark industrial hangar over Tokyo-3. Frame its head and shoulders in the RIGHTMOST 40 percent, dramatic low angle, silhouette with restrained highlights. The LEFT 55 percent is very dark quiet plum-black atmospheric negative space, suitable for large white text that will be added in HTML. Palette deep aubergine #160d24, violet #7654ab, muted lilac #bd9bdc, a little #b4cf74 green. 1990s hand-painted anime cel background, architectural detail, tactile shadows, thin violet rim light, elegant and ominous, no cyberpunk neon city, no yellow background. No lettering, no logos, no UI, no typography, no watermarks. Background must feel complete as a cinematic wide illustration.

## Verification

The static verification now checks the summary-before-skills order, the list default for every universe, both new image assets, all generated routes and the absence of long dashes and decorative asterisks. Browser interaction and visual motion checks must be distinguished from these static assertions; the in-app browser inventory currently reports a connection-error page rather than the portfolio.
