# Darkroom

A Video.js v10 video skin developed under safelight. Built for the Video.js Skins Design Challenge.

## The idea

An editorial moving-image archive, with warm paper, oversized typography and a dark screening room.
The player has a real photographic contact strip: twelve frames sampled from the active Mux video
begin in monochrome and develop into color as you watch. The same Video.js time slider handles
pointer and keyboard seeking. Hovering reveals a photographic slide mount with the exact time.

Vermilion marks the transport keys and playhead. Solid surfaces keep controls readable as the picture
changes; sprocket rails advance only during playback. On phones, the showcase gives the picture and
control dock separate space. A lights-out switch dims the surrounding archive.

The contact-strip module lives in `src/video/contact-strip.ts`. It reads the active Mux source and duration;
non-Mux media retains the working timeline without photographic samples. No credentials or canvas
readback are required. Sampled images are decorative and excluded from the accessibility tree.

## What's in the player

- Play/pause, seek back and forward 10 s, mute with an inline volume slider, elapsed / duration counter
- Framed time slider with buffer, chapters and a thumbnail preview
- Captions toggle, and a settings menu for quality, audio track, speed and captions
- Picture-in-picture, Cast and AirPlay (each appears when the browser supports it), fullscreen
- Error dialog, buffering reel, and on-screen indicators for volume, seeking and toggles
- Every hotkey and gesture from the Video.js skins: Space/K, J/L, arrows, M, C, F, I, < >, 0–9, Home/End

## Accessibility

- Opaque control surfaces keep contrast independent of the footage.
  Slider tracks are at least 3.4:1.
- Touch targets are 44 px, and the center transport appears on touch players wide enough for it.
- One focus ring everywhere: a 2 px vermilion outline with a dark halo, on buttons, slider thumbs and menu items.
- With `prefers-reduced-motion`, the film stands still, menus cut instead of sliding, and the spinner stops.
- `prefers-contrast: more`, reduced transparency and forced colours are handled.
- No hardcoded UI text: every label comes from Video.js i18n, and the layout mirrors for right-to-left languages.

See [`design/spec.md`](design/spec.md) for the full spec: tokens, breakpoints, icon rules and motion.

## Develop

```sh
npm install
npm run dev
```

- `/` is the showcase page: the player, a dark/bright footage switch, a size switch and the design notes.
- `/workbench.html` is the Video.js workbench: any width, aspect ratio, language, direction and playback setting.

## Use your own Mux video

Set `MUX_PLAYBACK_ID` in [`apps/preview/src/showcase/media.ts`](apps/preview/src/showcase/media.ts) to your
asset's public playback ID. It becomes the first reel on the showcase. To try one without editing code, open
`/?playbackId=<your id>`.

## Deploy

```sh
npm run deploy vercel   # or: netlify, cloudflare
```

The host's CLI signs you in on the first run and prints the public URL. The build uses relative URLs, so `dist/`
also works on GitHub Pages or any static host.

## Where things live

- `src/`: the skin, and only the skin. Move it into any Video.js v10 HTML app.
  - `src/video/skin.html`: markup. `src/video/skin.css`: styles. `src/video/icons.ts`: the icon set.
  - `src/styles/themes/darkroom.css`: the theme tokens.
- `apps/preview/`: the showcase page and the workbench.
- `design/spec.md`: the design spec.

## Credits

Built on [Video.js v10](https://videojs.org/). Demo footage streams from [Mux](https://www.mux.com/): the NASA
Cosmic Dawn trailer and Big Buck Bunny (© Blender Foundation, CC BY 3.0). Fonts: IBM Plex Sans Condensed and IBM
Plex Mono (SIL Open Font License). Icons drawn for this skin.

## License

Apache License 2.0. See [`LICENSE`](LICENSE).
