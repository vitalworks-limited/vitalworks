# Vitalworks Limited — Corporate Brand Audit and Website Tokens

**Date:** 2026-10-13  
**Source:** 16 PNG files in user-supplied LOGO archive (1–14, 16–17).

## Findings supported by artwork
All variants consistently employ a distinctive angular three-piece mark, the uppercase **VITALWORKS** wordmark and the **PURPOSE DRIVEN** strapline. The supplied materials contain no formal brand standards PDF identifying an officially approved master or fixed Pantone/CMYK values. The palette below is **measured/approximated from PNG pixels**, and the selection is our recommendation—not an assertion of formal corporate approval.

| Token | Digital value | Application |
|---|---|---|
| Brand Navy | `#0B2032` (approx. pixel quantization) | Wordmark, primary typography, dark footer, dark backgrounds |
| Brand Orange | `#F58220` (approx. pixel quantization) | Symbol and emphasis, restrained CTAs, navigation accents |
| White | `#FFFFFF` | Reversed marks and contrast |
| Warm canvas | `#FFFDFB` | Near-white website backgrounds (support color, not measured corporate master) |
| Light surface | `#F7F9FA` | Section transitions (support color) |
| Muted slate | `#586673` | Secondary interface text (support color) |

Exact source pixel colors may vary with anti-aliasing and embedded export profiles; obtain original vector brand masters for definitive values.

## Asset use recommendations
- `1.png`: Recommended **primary** light-background brand lockup: orange symbol, navy VITALWORKS, orange PURPOSE DRIVEN.
- `3.png`: Alternate navy symbol with orange tagline on white.
- `9.png`: Compact horizontal orange symbol / light wordmark; choose only on verified dark-background contrast.
- `10.png`, `2.png`: White reversed marks for dark surfaces; assess contrast first.
- `11.png` and `12.png`: Navy symbol plus white lettering for dark surfaces.
- `13.png`: Navy symbol only.
- `14.png`: Orange symbol only.
- `16.png` and `17.png`: Wordmark-only / reversed text compositions.
- `4.png` through `7.png`: Background illustrations / presentation mockups; not primary logo sources.
- `8.png`: Brand symbol exploration sheet; not for header use.

## Rules
1. Preserve source aspect ratios, mark geometry, letterforms, spacing and tagline; never reconstruct the logo with type or CSS when the authentic raster/vector asset is available.
2. Primary logo on warm white backgrounds, genuine reversed logo on sufficiently dark navy.
3. The primary mark is a **graphic**, not a background pattern. Do not distort, tint, apply glow, extrude or gradients to it.
4. Orange is a distinguishing accent, not the default body-text color. On white, orange text may fail WCAG contrast; use darker orange for small functional text.
5. Maintain at least 0.5x the mark height as logo clear space unless official guidelines supersede this interim recommendation.
6. Add a real SVG master generated from verified vector artwork if available. Do not auto-trace a PNG as though it were official.
7. Add native light/dark logo assets to `public/brand/` through a binary-safe repo upload. Current GitHub connector text updates cannot attach the original PNG binary directly in this operation.
8. Replace temporary website wordmark/CSS-symbol fallback with approved originals before claiming a complete brand integration.

## Website design refinements
- Editorial typography, generous whitespace, non-card service lists and calm blue/white surfaces.
- Use navy for header/footer and body text, orange for active state, slim dividers, links and distinctive calls to action.
- Convert decorative generic geometric backgrounds into bespoke diagrams or authentic product photography after content approval.
- Header: original horizontal lockup, not a font-generated logo.
- Favicon: approved symbol-only mark, ideally `14.png` or `13.png` converted to properly sized icons.
- Keep all CTAs concise and restrained.

## Review gates
- Approve the master logo variant and exact palette with Vitalworks corporate representative.
- Approve legal company naming in site header/footer and public-contact data.
- Test visual fidelity desktop/mobile and document contrast values.
- Audit downloaded/served logo files for transparent edges, compression, sharpness and LCP impact.
