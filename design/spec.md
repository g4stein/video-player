# Darkroom — design spec

A Video.js v10 video skin built like a strip of 35 mm film running under a safelight.

## Concept

Most glass-and-gradient players float a blurred panel over the picture. Darkroom grounds the controls on a
**solid strip of film base** that runs edge to edge along the bottom of the player. Its two sprocket rails are
real holes: the picture shows through them, and while the video plays the rails advance like film through a
gate. The amber of a darkroom safelight marks everything you can act on, and the developed part of the timeline
glows from safelight red into amber, as if it had been exposed.

Because every control sits on that solid strip (or on its own dark chip at the top), text and icons keep the
same contrast over a white sky and a black night scene.

## Layout and control order

Source order equals visual order (focus order).

- **Top bar** (screen controls): title chip on the start side; AirPlay, Cast, Picture-in-picture on the end side.
  AirPlay and Cast render only when the browser supports them.
- **Center** (touch, and before first play on desktop): seek back 10, play (large), seek forward 10.
- **Strip** (bottom, full width):
  - Row 1: time slider ("frames" timeline) with hover preview mounted like a slide.
  - Row 2, start: play, seek back 10, seek forward 10, mute, inline volume slider, time counter.
  - Row 2, end: captions, settings, fullscreen.
- **Settings menu**: Quality, Audio track (only when there is more than one), Speed, Captions.

## Container breakpoints (derived)

| Player width | Changes |
| --- | --- |
| < 26rem | single time value (tap toggles elapsed/remaining) |
| < 30rem | slimmer strip: 8 px rails, tighter padding; no center transport |
| ≥ 30rem | center transport on touch, and before the first play with a mouse |
| ≥ 34rem | inline volume slider (hover pointers) |
| ≥ 38rem | seek buttons in the strip (fine pointers) |
| ≥ 48rem | 44 px buttons, 48 px play key, 14 px rails |

Touch pointers always get a 44 px hit area and the center transport.

## Color (tokens in `src/styles/themes/darkroom.css`)

| Token | Value | Use |
| --- | --- | --- |
| `--dr-base` | `#110d0b` | Film base: strip, chips, menus |
| `--dr-paper` | `#f4ebe1` | Primary text and icons (16.4:1 on base, 14.4:1 over a white frame) |
| `--dr-paper-dim` | `#b9a99b` | Secondary text, duration (8.5:1 on base) |
| `--dr-amber` | `#ffb340` → `--media-accent-color` | Safelight accent, play key, thumb, focus ring |
| `--dr-safelight` | `#ff4d2e` | Start of the exposure gradient, error accents |
| `--dr-ink` | `#1a120c` | Text on amber and on paper labels |

Controls stay dark in both color schemes, as video controls should.

## Type

- Labels: IBM Plex Sans Condensed 500 (OFL), falling back to the system UI font. Condensed so long
  translations such as German fit.
- Numbers: IBM Plex Mono 500 (OFL), always `tabular-nums`.
- The skin itself only sets `--media-font-family` and `--dr-font-mono` stacks; the demo page loads the fonts.

## Icons

One set drawn for this skin on a 24 × 24 grid, 2 px stroke, square caps, miter joins.
Transport glyphs (play, pause) are solid. Active states gain a solid fill (captions on, PiP exit, AirPlay and
Cast connected). The buffering spinner is a film reel.

## Surfaces and shape

- Strip: solid `--dr-base` at 94 % with sprocket rails masked out of it. No backdrop blur.
- Buttons: 10 px radius, transparent; hover tint `paper / 10 %`.
- Play key: amber, 12 px radius, ink glyph — the one "exposure button".
- Tooltips: paper "masking-tape" labels with ink text, 4 px radius, one offset for all.
- Menus: base surface, 1 px paper / 12 % hairline, 14 px radius, amber values in mono.
- Slider preview: the thumbnail sits in a paper slide mount with the time printed on the mount.

## Slider

- Time slider: 28 px hit area, 8 px track divided into frames by 2 px gaps every 22 px; unplayed frames
  `paper / 40 %` (3.4:1), buffered `paper / 62 %`, played = safelight → amber gradient. Thumb: 4 × 20 px amber cut
  mark with an ink outline, widening while dragged.
- Volume: 4 px track (`paper / 40 %`), amber fill, 14 px paper thumb with ink ring.

## Focus

Every focusable part shows the same ring: 2 px amber outline at 2 px offset plus a 4 px ink halo, so it reads
over bright and dark frames.

## Motion

All durations use the theme motion tokens, which collapse under `prefers-reduced-motion`.

- Controls hide with a short fade and 6 px slide; return at once.
- Sprocket rails advance (transform only) while playing; static under reduced motion and when paused.
- Menus and tooltips grow from their trigger; play key has a 94 % press scale.
- Reel spinner rotates; static under reduced motion.

## Preferences

- `prefers-contrast: more` / `prefers-reduced-transparency`: strip and chips go fully opaque, hairlines strengthen.
- `forced-colors`: system colors, outlines on every surface.

## Copy

No hardcoded UI text. Every label, tooltip and accessible name comes from Video.js i18n.
