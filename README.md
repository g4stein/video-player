# Elsewhere

An immersive, original Video.js v10 skin and showcase. Midnight violet, lilac, expressive serif typography and rounded glass controls create a space for uninterrupted viewing.

The player markup, theme, CSS, rounded icon family and showcase are designed as one coherent experience. Video.js components and the workbench supply the playback and accessibility foundation.

## The interface

Large glossy back/play/pause/forward spheres sit in the center of the picture. A separate floating violet glass dock holds time, a smooth luminous seek bar, mute/volume, captions, settings and fullscreen. Its white playhead and gradient fill reflect the actual playback position, with frame previews on hover. The bottom capsule has a visible gap below it. The dock uses one row on desktop and two compact rows on phones.

Settings expose actual available quality, speed, audio and caption options. Video.js supplies keyboard navigation, translated control labels, a status announcer, gestures, buffering and error handling. Controls have 44px targets, a consistent visible focus ring and contrast-preserving glass surfaces with opaque preference fallbacks. Reduced motion disables decorative and control motion. Phone showcase layouts reserve separate space for the image and dock.

## Run

```sh
npm install
npm run dev
npm run typecheck
npm run build
```

`/` shows the experience. `/workbench.html` tests widths, aspect ratios, languages, RTL and preferences. Skin source is entirely in `src/`; it has no dependency on the showcase.

## Your Mux video

Set `MUX_PLAYBACK_ID` in `apps/preview/src/showcase/media.ts` to your public playback ID, or use `?playbackId=YOUR_ID`. The bundled demo assets belong to their respective providers; use your own asset for the challenge's Mux bonus.

## Deployment

```sh
npm run deploy vercel
```

Vercel-connected GitHub branches may create previews automatically. A challenge submission must use a publicly accessible URL without sign-in.

## Credits and licensing

Video.js v10 / Mux. NASA Cosmic Dawn trailer and Big Buck Bunny, © Blender Foundation, CC BY 3.0. Fonts: DM Sans and Instrument Serif, SIL Open Font License. Original rounded SVG icons. Skin source: Apache License 2.0; see LICENSE. Third-party footage is not relicensed by this project.
