# Official Vitalworks brand assets

The corporate logo artwork was supplied in a 16-image PNG archive. The approved-looking recommended primary asset is `1.png` (orange symbol, navy VITALWORKS wordmark, orange PURPOSE DRIVEN strapline). Confirm final corporate approval before deployment.

The web-ready export package prepared during implementation has this structure:

```
public/brand/
  logo-primary.png
  logo-reversed.png
  brand-symbol-orange.png
  brand-symbol-navy.png
```

**IMPORTANT:** The original image binaries have not been uploaded into this GitHub branch, because the binary GitHub connector operation was blocked. Files must be added from the provided brand asset archive through an authorized binary-capable Git client.

Until those files exist, DO NOT replace the header with a broken image reference. Then update `src/components/header.tsx` to use `next/image` with `src="/brand/logo-primary.png"`, correct intrinsic dimensions, useful alternative text and `priority`. Adjust the displayed logo width and height for crisp rendering.

Replace the CSS-based interim wordmark after the actual file is present and verified. Use only the genuine supplied image; do not recreate the symbol through HTML, CSS polygons or guessed SVG path geometry. Verify logo contrast on both light and dark backgrounds and add the approved symbol/favicon set.
