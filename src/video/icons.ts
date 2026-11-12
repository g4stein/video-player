/** Elsewhere / Glass Dock: an original icon family with rounded strokes matching reference designs. */
const icon = (body: string) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${body}</svg>`;
const solid = (d: string) =>
  `<path d="${d}" fill="currentColor" stroke="none"/>`;
const speaker = '<path d="M4 9H7L12 5V19L7 15H4Z"/>';

export const elsewhereIcons = {
  play: icon(
    solid("M9 5.8Q8 5.2 8 6.5V17.5Q8 18.8 9 18.2L19 12.8Q20.5 12 19 11.2Z"),
  ),
  pause: icon(
    '<rect x="7" y="5" width="3.5" height="14" rx="1.75" fill="currentColor" stroke="none"/><rect x="13.5" y="5" width="3.5" height="14" rx="1.75" fill="currentColor" stroke="none"/>',
  ),
  restart: icon('<path d="M4 10A8 8 0 1 1 5 17M4 4V10H10"/>'),
  seek: icon('<path d="M18 7A8 8 0 1 1 12 4H17M14 1L17 4L14 7"/>'),
  "volume-high": icon(
    speaker + '<path d="M16 8A6 6 0 0 1 16 16M19 5A10 10 0 0 1 19 19"/>',
  ),
  "volume-low": icon(speaker + '<path d="M16 8A6 6 0 0 1 16 16"/>'),
  "volume-off": icon(speaker + '<path d="M17 9L22 15M22 9L17 15"/>'),
  "captions-off": icon(
    '<rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 10H7V14H10M17 10H14V14H17"/>',
  ),
  "captions-on": icon(
    '<rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor"/><path d="M10 10H7V14H10M17 10H14V14H17" stroke="#141321"/>',
  ),
  "fullscreen-enter": icon(
    '<path d="M4 9V5a1 1 0 0 1 1-1h4M15 4h4a1 1 0 0 1 1 1v4M20 15v4a1 1 0 0 1-1 1h-4M9 20H5a1 1 0 0 1-1-1v-4"/>',
  ),
  "fullscreen-exit": icon(
    '<path d="M9 4v4a1 1 0 0 1-1 1H4M15 4v4a1 1 0 0 0 1 1h4M20 15h-4a1 1 0 0 0-1 1v4M4 15h4a1 1 0 0 0 1-1v-4"/>',
  ),
  "pip-enter": icon(
    '<rect x="2" y="4" width="20" height="16" rx="4"/><rect x="12" y="11" width="7" height="6" rx="1"/>',
  ),
  "pip-exit": icon(
    '<rect x="2" y="4" width="20" height="16" rx="4"/><rect x="12" y="11" width="7" height="6" rx="1" fill="currentColor"/>',
  ),
  gear: icon(
    '<circle cx="12" cy="12" r="3.2"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
  ),
  chevron: icon('<path d="M9 6L15 12L9 18"/>'),
  check: icon('<path d="M5 12L10 17L20 7"/>'),
  speed: icon('<polygon points="6 4 19 12 6 20 6 4" stroke-width="2"/>'),
  monitor: icon(
    '<rect x="2" y="3" width="20" height="13" rx="2" stroke-width="1.8"/><line x1="8" y1="20" x2="16" y2="20" stroke-width="1.8"/><line x1="12" y1="16" x2="12" y2="20" stroke-width="1.8"/>',
  ),
  close: icon(
    '<line x1="18" y1="6" x2="6" y2="18" stroke-width="2"/><line x1="6" y1="6" x2="18" y2="18" stroke-width="2"/>',
  ),
  switches: icon(
    '<rect x="2" y="3" width="20" height="13" rx="2" stroke-width="1.8"/><line x1="8" y1="20" x2="16" y2="20" stroke-width="1.8"/><line x1="12" y1="16" x2="12" y2="20" stroke-width="1.8"/>',
  ),
  speech: icon('<path d="M4 10V14M8 6V18M12 3V21M16 7V17M20 10V14"/>'),
  spinner: icon('<path d="M12 3A9 9 0 1 1 3 12"/>'),
} as const;
