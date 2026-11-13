# Violet Glass

A Video.js v10 skin with floating 3D violet glass controls, DM Sans typography, and a straight neon magenta/purple timeline. All controls sit over the video inside its 16:9 frame.

Desktop players wider than 900px, in viewports wider than 1024px, place 44px rewind/forward orbs and a 56px play/pause orb inside the 72px floating dock. Tablet and mobile layouts place the transport orbs over the picture above a pill dock. Tablet docks are 56px tall; phone docks are 48px with one row of controls and a 44px seek target. On very narrow players, captions remain available in Settings.

Settings stay inside the video canvas and scroll when space is limited. Center transport hides while settings is open. Settings provide real speed and quality options and a captions toggle synchronized with the dock CC button. Video.js supplies playback, keyboard navigation, translated labels, status announcements, gestures, buffering and error handling. Focus remains visible; reduced motion, contrast and transparency preferences are respected.

## Development

```sh
npm install
npm run dev
npm run typecheck
npm run build
```

`/` opens the minimal dark cinema showcase with film and device size selectors. `/workbench.html` tests widths, ratios, languages, RTL and playback settings. `/preview.html` opens the isolated skin. Source lives in `src/` and does not depend on the showcase.

## Mux

Set `MUX_PLAYBACK_ID` in `apps/preview/src/showcase/media.ts` or supply `?playbackId=YOUR_ID` on the showcase or standalone preview. Use your own live Mux asset for the challenge bonus. Demo footage belongs to its respective providers.

## Deployment

```sh
npm run deploy vercel
```

The build outputs `dist/`. Connected Vercel branches may deploy automatically.

## Credits

Video.js v10 / Mux; NASA Cosmic Dawn trailer; Big Buck Bunny, © Blender Foundation, CC BY 3.0. DM Sans: SIL Open Font License. Original SVG controls. Skin source: Apache 2.0, see LICENSE. Third-party footage is not relicensed.

The existing Cloudflare deployment project name is retained to preserve the hosting configuration.
