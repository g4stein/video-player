# Floating Glass Dock — Video.js v10 Skin

An immersive, responsive 3D violet glass dock skin and showcase for Video.js v10. Featuring translucent violet/magenta glass spheres, neon progress scrubber, glowing thumbs, and a floating glass control dock.

The player markup, styles, icons, and showcase are designed as a clean-slate overhaul matching the responsive reference designs:
- **Tablet & Mobile (Reference Image 1):** Center floating 3D glass orb transport (`-10s`, `Play/Pause`, `+10s`) above the video canvas, paired with a bottom floating glass pill dock holding time, straight neon progress scrubber, volume, captions, settings, and fullscreen.
- **Desktop (Reference Image 2):** Inline 3D glass transport orbs inside the bottom floating glass dock arranged in 4 distinct zones separated by vertical glass dividers.

## Features

- **Responsive Breakpoint Logic:** Container query (`container-type: inline-size; container-name: player;`) ensures responsive switching between mobile/tablet and desktop modes both in real viewports and inside framed testing environments like `/workbench.html`.
- **Center 3D Glass Orbs (Mobile/Tablet):** Translucent violet and magenta 3D spheres with neon rim glow and smooth backdrops.
- **Straight Neon Progress Scrubber:** Vivid magenta/purple gradient played fill (`#9333ea` to `#ec4899` to `#f472b6`) with glowing white playhead thumb and buffered indicator.
- **Volume & Utility Cluster:** Dedicated speaker mute toggle with smooth horizontal volume slider, `CC` captions badge button, Settings gear button, and Fullscreen toggle.
- **Settings Speech-Bubble Popover:** Glass popover with caret pointer anchored directly over the settings gear icon, featuring cards for playback speed, quality selector, and a synced purple pill toggle switch for captions.
- **Typography & Styling:** Clean typography powered by `DM Sans`, completely free of legacy Elsewhere acid-lime accents or undulating SVG timeline artifacts.

## Quick Start

```sh
npm install
npm run dev
npm run typecheck
npm run build
```

- `/` serves the dark cinema showcase stage.
- `/workbench.html` provides the Video.js workbench for testing viewports, aspect ratios, RTL, and accessibility.

## Mux Video Integration

Set `MUX_PLAYBACK_ID` in `apps/preview/src/showcase/media.ts` to your public Mux playback ID, or test via the `?playbackId=YOUR_ID` query parameter.

## License

Apache-2.0
