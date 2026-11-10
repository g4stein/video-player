# Darkroom

A Video.js v10 video skin developed under safelight. Built for the Video.js Skins Design Challenge.

## The idea

Most custom players float a blurred glass panel over the picture. Darkroom grounds the controls on a solid strip
of 35 mm film base instead. Its two sprocket rails are real holes the picture shows through, and while the video
plays the rails roll forward like film through a projector gate. Pause, and the film stops.

Amber, the colour of a darkroom safelight, marks everything you can act on. The timeline is cut into frames, and
the part you've watched glows from safelight red into amber, as if it had been exposed. Hovering the timeline
brings up the preview frame in a paper slide mount with its timecode printed on the card, and tooltips are strips
of masking tape. Because every control sits on a solid strip, the controls keep the same contrast over a white sky
and a black night scene.

## What's in the player

- Play/pause, seek back and forward 10 s, mute with an inline volume slider, elapsed / duration counter
- Framed time slider with buffer, chapters and a thumbnail preview
- Captions toggle, and a settings menu for quality, audio track, speed and captions
- Picture-in-picture, Cast and AirPlay (each appears when the browser supports it), fullscreen
- Error dialog, buffering reel, and on-screen indicators for volume, seeking and toggles
- Every hotkey and gesture from the Video.js skins: Space/K, J/L, arrows, M, C, F, I, < >, 0–9, Home/End

## Accessibility

- Text is 16.4:1 and the amber accent 10.8:1 on the strip, and 14.4:1 and 9.5:1 with a white frame behind it.
  Slider tracks are at least 3.4:1.
- Touch targets are 44 px, and the center transport appears on touch players wide enough for it.
- One focus ring everywhere: a 2 px amber outline with a dark halo, on buttons, slider thumbs and menu items.
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
