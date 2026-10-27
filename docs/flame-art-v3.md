# Photographic candle flame, v3

- Created: 2026-10-27.
- Final asset: `frontend/public/images/artwork/candle-flame-v3.png`.
- Dimensions: 171 × 256 pixels; RGBA PNG with preserved transparency.
- Generation mode: built-in `image_gen.imagegen` with `transparent_background: true`; no API/CLI fallback.
- Default generated source: `C:/Users/psofi/.codex/generated_images/01a17ebd-83b8-7ef3-a486-ea7b84c6add4/exec-1144992a-7734-448f-a38e-65034284dd9c.png`.
- Processing: Pillow RGBA size conversion with Lanczos resampling, then optimized PNG; no content edits.

## Visual and transparency verification

The selected result has an irregular, tapered photographic yellow/white flame, blue base, tiny charred wick and soft halo. No candle body or smoke is present. Source and final alpha channels were inspected programmatically: fully transparent pixels exist, four final image corners have alpha 0, and graded partial alpha preserves the halo. The final asset was visually inspected. It replaces the illustrated flame shape; smoke and subtle movement can remain independent page animation layers.

## Final prompt

Use case: photorealistic-natural. Asset type: transparent photographic candle-flame cutout for compositing over an existing dark candle illustration. Primary request: a macro photograph of one real burning candle flame, isolated on a genuinely transparent alpha background. A thin irregular luminous flame, tapered and slightly leaning, realistic asymmetrical air-driven contour, small white-hot core blending into translucent yellow and warm amber at the tip, faint blue base, a tiny dark charred wick at the very bottom. Physically believable combustion rather than a cartoon or illustrated teardrop. Subtle soft photographic halo integrated into alpha, very restrained. Vertical composition with flame occupying about two-thirds of canvas height, modest transparent padding all around. No candle wax or candle body, no holder, no smoke, no sparks, no surroundings. Absolutely transparent background around the flame, no white/gray/black rectangular background, no graphic outline, no text, no watermark. Preserve photographic tonal detail in the flame.
