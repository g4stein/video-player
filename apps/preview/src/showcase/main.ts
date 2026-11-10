import '@videojs/html/i18n';
import '@videojs/html/video/player';
import '@videojs/html/media/mux-video';
import '@/skin.css';
import '@/video/skin';
import skinTemplate from '@/video/skin.html?raw';
import { darkroomIcons } from '@/video/icons';
import './showcase.css';
import { posterUrl, reels, streamUrl, type Reel } from './media';

const MEDIA_PLACEHOLDER = '<!-- Add a compatible media component here. -->';
const stage = document.getElementById('stage')!;
const available = reels();

/** Build a fresh player for a reel, so every switch starts from a clean state. */
function mount(reel: Reel): void {
  const player = document.createElement('video-player');
  player.setAttribute('poster', posterUrl(reel));

  const media = document.createElement('mux-video');
  media.setAttribute('src', streamUrl(reel));
  media.setAttribute('playsinline', '');
  media.setAttribute('crossorigin', '');
  media.setAttribute('preload', 'metadata');

  if (reel.chapters) {
    const track = document.createElement('track');
    Object.assign(track, { kind: 'chapters', label: 'English', srclang: 'en', src: reel.chapters, default: true });
    media.append(track);
  }

  player.innerHTML = skinTemplate.replace(MEDIA_PLACEHOLDER, media.outerHTML);

  const i18n = document.createElement('media-i18n');
  i18n.append(player);
  stage.replaceChildren(i18n);
  document.getElementById('reel-note')!.textContent = reel.note;
}

/** A segmented control: `role="radiogroup"` buttons that move with arrow keys. */
function segmented(
  group: HTMLElement,
  options: { value: string; label: string }[],
  initial: string,
  onChange: (value: string) => void
): void {
  const buttons = options.map(({ value, label }) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.role = 'radio';
    button.dataset.value = value;
    button.textContent = label;
    return button;
  });

  const select = (value: string, focus = false) => {
    for (const button of buttons) {
      const on = button.dataset.value === value;
      button.setAttribute('aria-checked', String(on));
      button.tabIndex = on ? 0 : -1;
      if (on && focus) button.focus();
    }
    onChange(value);
  };

  group.addEventListener('click', (event) => {
    const button = (event.target as HTMLElement).closest('button');
    if (button?.dataset.value) select(button.dataset.value);
  });

  group.addEventListener('keydown', (event) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[event.key];
    if (!step) return;
    event.preventDefault();
    const index = buttons.findIndex((b) => b.getAttribute('aria-checked') === 'true');
    const next = buttons[(index + step + buttons.length) % buttons.length]!;
    select(next.dataset.value!, true);
  });

  group.append(...buttons);
  select(initial);
}

segmented(
  document.getElementById('reel-switch')!,
  available.map(({ id, label }) => ({ value: id, label })),
  available[0]!.id,
  (id) => mount(available.find((reel) => reel.id === id)!)
);

const SIZES: Record<string, string> = { wide: '64rem', tablet: '40rem', phone: '22.5rem' };

segmented(
  document.getElementById('size-switch')!,
  [
    { value: 'wide', label: 'Desktop' },
    { value: 'tablet', label: 'Tablet' },
    { value: 'phone', label: 'Phone' },
  ],
  'wide',
  (size) => stage.style.setProperty('--stage-width', SIZES[size]!)
);

// The icon sheet renders the skin's own set, so the page and the player can never drift apart.
const sheet = document.getElementById('icon-sheet')!;
for (const [name, svg] of Object.entries(darkroomIcons)) {
  const cell = document.createElement('li');
  cell.innerHTML = `${svg}<span>${name}</span>`;
  sheet.append(cell);
}
