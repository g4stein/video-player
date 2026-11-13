import '@videojs/html/video/player';
import '@videojs/html/media/mux-video';
import '@/video/skin';
import skinTemplate from '@/video/skin.html?raw';

import { reels, streamUrl, posterUrl } from '../showcase/media';
const reel = reels()[0]!;
const SRC = streamUrl(reel);
const POSTER = posterUrl(reel);
const CHAPTERS = reel.chapters;

const MEDIA_PLACEHOLDER = '<!-- Add a compatible media component here. -->';

export function createPlayer(): HTMLElement {
  const player = document.createElement('video-player');
  player.setAttribute('poster', POSTER);

  player.innerHTML = skinTemplate.replace(
    MEDIA_PLACEHOLDER,
    `<mux-video src="${SRC}" playsinline crossorigin>${CHAPTERS ? `<track kind="chapters" label="English" srclang="en" src="${CHAPTERS}" default>` : ""}</mux-video>`
  );

  return player;
}
