# Turn the imported Figma "Home page" into a working React/TypeScript page

## Context
The user imported a Figma frame (`/src/imports/HomePage/index.tsx`, with SVG paths in `svg-v6nn404orb.ts`) — a dark portfolio landing page for "Gijs Willemsen" (cybersecurity). They want it turned into real React/TypeScript code. The current `src/app/App.tsx` is an empty scaffold.

The import is a fixed-pixel desktop layout (~1864×915) built entirely with absolutely-positioned elements. The user chose **scale-to-fit + wire the buttons**: faithfully reproduce the design, scale the whole canvas to fit the viewport, and make the Resume / Projects (and footer) elements actually interactive.

Project facts established during exploration:
- No `@make-kits` design system present → render the import as-is (no DS substitution).
- `@/` aliases to `src/` (vite.config.ts).
- `src/app/components/figma/ImageWithFallback.tsx` exists (not needed here — design is all SVG/text, no raster assets).
- `src/styles/fonts.css` is empty; fonts `DotGothic16` and `Silkscreen` are referenced by the import but not loaded.

## Fonts (note)
The design references **DotGothic16** and **Silkscreen**. Neither arrived with a catalog `fontId`, but both are standard Google Fonts under those exact family names, so they will be loaded from Google Fonts (faithful match, not a substitute). This is the one external dependency introduced.

## Approach

### 1. Load fonts — `src/styles/fonts.css`
Add at the very top of the file (font imports must live only here):
```css
@import url('https://fonts.googleapis.com/css2?family=DotGothic16&family=Silkscreen&display=swap');
```

### 2. Create `src/app/components/home-page.tsx`
This is the adaptation layer (the `imports/` folder stays untouched). It reproduces the import's JSX **faithfully** — same elements, same Tailwind classes, same inline styles — but:
- Imports the SVG path data exactly as the import does: `import svgPaths from "@/imports/HomePage/svg-v6nn404orb";`
- Keeps every `<path>`, `<filter>` (noise/turbulence), ellipse, wave background, the stylized name-header SVG, the info panel (Country/Uptime/Language/Email with their `Vector` icon SVGs), the tagline, and the footer text — nothing pruned.
- Wraps the whole thing in a fixed-size canvas `div` of `1864px × 915px` (the design's intrinsic size) so the absolute coordinates resolve correctly.
- Converts the two button rectangles ("Resume button background" / "Projects button background") plus their text labels into real `<button>` elements (positioned at the same coords) with `onClick` handlers, hover/focus styling, and `cursor-pointer`. Default handlers: Resume → open/download placeholder, Projects → scroll/navigate placeholder (use `console`/`alert` stubs or accept optional `onResume` / `onProjects` props with sensible defaults). The footer `\\gijs willemsen \\WLMSN \\SABLE` becomes a focusable element as well.

### 3. Scale-to-fit wrapper
Add a small inline hook/component (in the same file or `src/app/components/scaled-canvas.tsx`) that:
- Measures the available container width via `ResizeObserver` (fallback: `window` resize listener).
- Computes `scale = containerWidth / 1864`.
- Applies `transform: scale(scale)` with `transform-origin: top left` to the 1864×915 canvas, and sets the outer wrapper height to `915 * scale` so layout flows correctly and there's no clipping/overflow.
- Outer wrapper: full width, `overflow-hidden`, background `#181818` to match the canvas so letterboxing is seamless.

### 4. Wire into the app — `src/app/App.tsx`
Replace the empty scaffold with a default export that renders `<HomePage />` (inside the scaled canvas) filling `size-full`.

## Critical files
- `src/styles/fonts.css` — add Google Fonts import (top of file).
- `src/app/components/home-page.tsx` — new; faithful reproduction + interactive buttons.
- `src/app/components/scaled-canvas.tsx` — new (optional split); responsive scale-to-fit wrapper.
- `src/app/App.tsx` — render the page.
- Read-only references: `src/imports/HomePage/index.tsx`, `src/imports/HomePage/svg-v6nn404orb.ts` (never edited).

## Verification
- The dev server is already running — view the preview surface (do not start vite or open localhost).
- Confirm: the design matches the screenshot (name header, blue noisy ellipses, layered blue waves, tagline, right-side info panel with icons, footer).
- Confirm both fonts render (Silkscreen for body labels, DotGothic16 where referenced) — no fallback serif/sans.
- Resize the preview from wide to narrow: the entire canvas scales proportionally with no clipping or horizontal scrollbar.
- Hover and click Resume / Projects: cursor changes, hover state shows, handlers fire.
