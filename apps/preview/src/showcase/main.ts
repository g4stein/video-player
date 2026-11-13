import "@videojs/html/i18n";
import "@videojs/html/video/player";
import "@videojs/html/media/mux-video";
import "@/skin.css";
import "@/video/skin";
import template from "@/video/skin.html?raw";
import "./showcase.css";
import { reels, posterUrl, streamUrl, type Reel } from "./media";

const stage = document.getElementById("stage")!;
const collection = reels();
const details = (reel: Reel) =>
  reel.id === "dark"
    ? {
        title: "Cosmic Dawn",
        category: "DOCUMENTARY",
        note: "A journey to the edge of what we know. NASA / Cosmic Dawn trailer.",
        subtitle: "Into the unknown.",
        mood: "WONDER",
      }
    : reel.id === "bright"
      ? {
          title: "Big Buck Bunny",
          category: "ANIMATION",
          note: "A brighter kind of escape. © Blender Foundation / CC BY 3.0.",
          subtitle: "A lighter world.",
          mood: "DELIGHT",
        }
      : {
          title: "Your world",
          category: "YOUR FILM",
          note: "Your film, delivered by Mux.",
          subtitle: "A place of your own.",
          mood: "EXPLORE",
        };

function mount(reel: Reel, index: number) {
  const player = document.createElement("video-player");
  player.setAttribute("poster", posterUrl(reel));
  const media = document.createElement("mux-video");
  media.setAttribute("src", streamUrl(reel));
  media.setAttribute("playsinline", "");
  media.setAttribute("crossorigin", "");
  media.setAttribute("preload", "metadata");
  if (reel.chapters) {
    const track = document.createElement("track");
    Object.assign(track, {
      kind: "chapters",
      label: "English",
      srclang: "en",
      src: reel.chapters,
      default: true,
    });
    media.append(track);
  }
  player.innerHTML = template.replace(
    "<!-- Add a compatible media component here. -->",
    media.outerHTML,
  );
  const provider = document.createElement("media-i18n");
  provider.append(player);
  stage.replaceChildren(provider);
  const info = details(reel);
  document.getElementById("film-title")!.textContent = info.title;
  document.getElementById("film-note")!.textContent = info.note;
  document.getElementById("film-tag")!.textContent = info.category;
  document.getElementById("film-index")!.textContent = String(
    index + 1,
  ).padStart(2, "0");
}

const cards = collection.map((reel, index) => {
  const info = details(reel);
  const button = document.createElement("button");
  button.type = "button";
  button.role = "radio";
  button.className = "destination-card";
  button.textContent = info.title;
  button.setAttribute("aria-label", info.title);
  button.addEventListener("click", () => choose(index));
  button.addEventListener("keydown", (event) => {
    const direction = {
      ArrowRight: 1,
      ArrowDown: 1,
      ArrowLeft: -1,
      ArrowUp: -1,
    }[event.key];
    if (!direction) return;
    event.preventDefault();
    const next = (index + direction + cards.length) % cards.length;
    choose(next);
    cards[next]!.focus();
  });
  return button;
});
function choose(index: number) {
  cards.forEach((card, i) => {
    card.setAttribute("aria-checked", String(i === index));
    card.tabIndex = i === index ? 0 : -1;
  });
  mount(collection[index]!, index);
}
document.getElementById("destinations-grid")!.append(...cards);
choose(0);

const widths: Record<string, string> = {
  desktop: "100%",
  tablet: "44rem",
  mobile: "23rem",
};
const sizes = Object.keys(widths).map((size) => {
  const button = document.createElement("button");
  button.type = "button";
  button.role = "radio";
  button.dataset.size = size;
  button.textContent = size[0]!.toUpperCase() + size.slice(1);
  button.addEventListener("click", () => selectSize(size));
  button.addEventListener("keydown", (event) => {
    const direction = {
      ArrowRight: 1,
      ArrowLeft: -1,
      ArrowDown: 1,
      ArrowUp: -1,
    }[event.key];
    if (!direction) return;
    event.preventDefault();
    const next =
      sizes[(sizes.indexOf(button) + direction + sizes.length) % sizes.length]!;
    selectSize(next.dataset.size!);
    next.focus();
  });
  return button;
});
function selectSize(size: string) {
  sizes.forEach((button) => {
    const selected = button.dataset.size === size;
    button.setAttribute("aria-checked", String(selected));
    button.tabIndex = selected ? 0 : -1;
  });
  stage.style.setProperty("--stage-width", widths[size]!);
}
document.getElementById("size-switch")!.append(...sizes);
selectSize("desktop");
