/**
 * Darkroom icon set.
 *
 * One hand: 24 × 24 grid, 2 px stroke, square caps, miter joins. Transport glyphs (play, pause) are solid, and
 * active states gain a solid fill. Every icon is `aria-hidden`; its control supplies the accessible name.
 */

const svg = (body: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="miter" aria-hidden="true" focusable="false">${body}</svg>`;

const solid = (d: string, extra = '') => `<path fill="currentColor" stroke="none" ${extra} d="${d}"/>`;

const speaker = '<path d="M3.5 9h3.5l5-4v14l-5-4H3.5z"/>';
const screen = '<path d="M2.5 4.5h19v15h-19z"/>';
const castFrame =
  '<path d="M2.5 8V4.5h19v15H14"/><path d="M2.5 11.5a8 8 0 0 1 8 8" stroke-linecap="butt"/><path d="M2.5 15.5a4 4 0 0 1 4 4" stroke-linecap="butt"/>' +
  solid('M1.5 18.5h2v2h-2z');
const airplayFrame = '<path d="M6 17.5H2.5v-13h19v13H18"/>';

export const darkroomIcons = {
  play: svg(solid('M8 4l13 8-13 8z')),
  pause: svg(solid('M6.5 4.5h4v15h-4zM13.5 4.5h4v15h-4z')),
  restart: svg('<path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.5 3.5v5h5"/>' + solid('M10 8.75l5.5 3.25-5.5 3.25z')),
  // Forward; the skin mirrors it for the backward button, and prints the seconds in its middle.
  seek: svg('<path d="M19.5 12A7.5 7.5 0 1 1 12 4.5h2.5"/><path d="M12.5 1.5l3 3-3 3"/>'),

  'volume-high': svg(speaker + '<path d="M15.5 9.5a3.5 3.5 0 0 1 0 5" stroke-linecap="butt"/><path d="M18 6.5a7.5 7.5 0 0 1 0 11" stroke-linecap="butt"/>'),
  'volume-low': svg(speaker + '<path d="M15.5 9.5a3.5 3.5 0 0 1 0 5" stroke-linecap="butt"/>'),
  'volume-off': svg(speaker + '<path d="M16 9.5l5 5M21 9.5l-5 5"/>'),

  'captions-off': svg(
    '<path d="M2.5 5h19v14h-19z"/><path d="M11.5 10H8v4h3.5M17.5 10H14v4h3.5" stroke-linecap="butt"/>'
  ),
  'captions-on': svg(
    solid(
      'M1.5 4h21v16h-21z M7 9v6h4.5v-2H9v-2h2.5V9z M13 9v6h4.5v-2H15v-2h2.5V9z',
      'fill-rule="evenodd"'
    )
  ),

  'fullscreen-enter': svg('<path d="M3.5 9V3.5H9M15 3.5h5.5V9M20.5 15v5.5H15M9 20.5H3.5V15"/>'),
  'fullscreen-exit': svg('<path d="M9 3.5V9H3.5M20.5 9H15V3.5M15 20.5V15h5.5M3.5 15H9v5.5"/>'),

  'pip-enter': svg(screen + '<path d="M12.5 12.5h6v4h-6z"/>'),
  'pip-exit': svg(screen + solid('M11.5 11.5h8v6h-8z')),

  'cast-enter': svg(castFrame),
  'cast-exit': svg(castFrame + solid('M6 7.5h12.5v9H13A10.5 10.5 0 0 0 6 9.5z')),

  'airplay-enter': svg(airplayFrame + '<path d="M12 13l5.5 7h-11z"/>'),
  'airplay-exit': svg(airplayFrame + solid('M12 12l6.5 8.5h-13z')),

  gear: svg(
    '<path d="M10.19 5.24V2.67h3.62v2.57A7 7 0 0 1 15.5 5.94l1.81-1.82 2.57 2.57-1.82 1.81a7 7 0 0 1 .7 1.69h2.57v3.62h-2.57a7 7 0 0 1-.7 1.69l1.82 1.81-2.57 2.57-1.81-1.82a7 7 0 0 1-1.69.7v2.57h-3.62v-2.57a7 7 0 0 1-1.69-.7l-1.81 1.82-2.57-2.57 1.82-1.81a7 7 0 0 1-.7-1.69H2.67v-3.62h2.57a7 7 0 0 1 .7-1.69L4.12 6.69l2.57-2.57L8.5 5.94a7 7 0 0 1 1.69-.7z"/><circle cx="12" cy="12" r="3"/>'
  ),
  chevron: svg('<path d="M9 5.5l6.5 6.5L9 18.5"/>'),
  check: svg('<path d="M4.5 12.5l4.5 4.5 10.5-10.5"/>'),
  speed: svg('<path d="M4.6 18A8.5 8.5 0 1 1 19.4 18" stroke-linecap="butt"/><path d="M12 13.5l4.5-5"/>' + solid('M10.5 12h3v3h-3z')),
  // Quality: two square-knob faders.
  switches: svg('<path d="M3.5 7h9M17.5 7h3M3.5 17h3M11.5 17h9"/><path d="M12.5 4.5h5v5h-5zM6.5 14.5h5v5h-5z"/>'),
  // Audio track: a waveform.
  speech: svg('<path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 10.5v3"/>'),
  // Buffering: a film reel.
  spinner: svg(
    '<circle cx="12" cy="12" r="9"/>' +
      solid('M10.5 10.5h3v3h-3z') +
      '<g fill="currentColor" stroke="none"><circle cx="12" cy="6.5" r="2"/><circle cx="7.24" cy="14.75" r="2"/><circle cx="16.76" cy="14.75" r="2"/></g>'
  ),
} as const;
