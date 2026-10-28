# Visual continuity and universe navigation

## Direction

Extend each title scene through the reading area, retaining the existing palette, professional typefaces, upright text and project-list interaction. Recurring illustrations stay at the margins; stronger themed surfaces mark skills, experience and contact. The center remains legible and the ten universes keep their individual section order.

| Universe | Reading treatment |
| --- | --- |
| Kingdom Hearts II | Shoreline curves, crowns, blue chapter rules and translucent journal paper. |
| Persona 5 | Halftone fragments, red cut-paper edges, pale skill sheets and black/red experience strips. |
| Bloodborne | Pointed arches, cathedral tracery, brass rules, dark archival surfaces and an arched contact panel. |
| Daydream Nation | Record grooves, candle/smoke line art, printed-paper grain and double liner rules. |
| Animals | Power-station silhouettes, pipework, rivets and structural steel borders. |
| MASS OF THE FERMENTING DREGS | Colored ink marks, curved cables and offset cyan/red print layers. |
| Twin Peaks | Curtain folds, mountain outlines, restrained red panels and a chevron contact border. |
| Evangelion | Violet technical diagrams, signal traces and green/violet instrument dividers. |
| Cyberpunk: Edgerunners | Illuminated circuits, cyan rails, scanline texture and yellow signal accents. |
| 20th Century Boys | City sketches, screentone, hatching and black panel frames. The hand/eye remains exclusive to the cursor. |

Ten original, code-native SVG ornaments live in `frontend/public/images/reading/`; no additional bitmap generation, font or dependency was needed. They repeat through the full reading area and crop to one margin on mobile. Decorative layers ignore pointer input and do not add spoken or visible copy.

The [ornament contact sheet](previews/v6/reading-motifs.png) is a direct SVG render on the theme palettes, not a browser screenshot.

## Navigation behavior

- Every full opening/reload draws a random universe, excluding the last stored universe when storage is available. Old manual preferences, session persistence and a stale `?theme=` URL no longer pin the opening style. The URL is updated to match the new selection. Internal page navigation retains the active universe.
- The new shuffle button is directly beside the color palette. Each click excludes the current universe; it does not need the palette to be open.
- Theme-only query changes return `false` from the router's scroll handler. The layout observes actual path/hash navigation separately from theme changes, so a stale `#projects` no longer pulls a visitor back into that section.
- Before switching, capture the current section or project/experience row and its screen offset. Restore it after Vue updates the layout, then correct once more when active fonts settle. This retains the reading location even when sections reorder. Without a matching anchor, retain the previous pixel position.
- Returning keyboard focus uses `preventScroll`; overlapping switches are disabled until the current one settles. Motion preferences retain their existing storage behavior.

## Verification

`node --test scripts/theme-navigation.test.mjs` checks all nine alternative choices for each universe, query-only navigation with and without an old hash, a project-row offset after reordering, missing-anchor fallback and the top-of-page case. All three tests passed.

The existing static verification also checks that the lower reading treatment, direct shuffle control and all ten safe SVG resources are generated. Browser visual/interaction review remains distinct from these checks; the in-app browser was unavailable for observation in the preceding revision.
