import "@videojs/html/i18n";
import "@videojs/html/video/player";
import "@videojs/html/media/mux-video";
import "@/skin.css";
import "@/video/skin";
import skinTemplate from "@/video/skin.html?raw";
import "./showcase.css";
import { posterUrl, reels, streamUrl, type Reel } from "./media";

const MEDIA_PLACEHOLDER = "<!-- Add a compatible media component here. -->";
const stage = document.getElementById("stage")!;
const available = reels();

/** Build a fresh player for a reel, so every switch starts from a clean state. */
function mount(reel: Reel): void {
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

  player.innerHTML = skinTemplate.replace(MEDIA_PLACEHOLDER, media.outerHTML);

  const i18n = document.createElement("media-i18n");
  i18n.append(player);
  stage.replaceChildren(i18n);
  document.getElementById("reel-note")!.textContent = reel.note;
  document.getElementById("reel-title")!.textContent =
    reel.id === "dark"
      ? "Cosmic Dawn"
      : reel.id === "bright"
        ? "Big Buck Bunny"
        : "Your reel";
}

/** A segmented control: `role="radiogroup"` buttons that move with arrow keys. */
function segmented(
  group: HTMLElement,
  options: { value: string; label: string }[],
  initial: string,
  onChange: (value: string) => void,
): void {
  const buttons = options.map(({ value, label }) => {
    const button = document.createElement("button");
    button.type = "button";
    button.role = "radio";
    button.dataset.value = value;
    button.textContent = label;
    return button;
  });

  const select = (value: string, focus = false) => {
    for (const button of buttons) {
      const on = button.dataset.value === value;
      button.setAttribute("aria-checked", String(on));
      button.tabIndex = on ? 0 : -1;
      if (on && focus) button.focus();
    }
    onChange(value);
  };

  group.addEventListener("click", (event) => {
    const button = (event.target as HTMLElement).closest("button");
    if (button?.dataset.value) select(button.dataset.value);
  });

  group.addEventListener("keydown", (event) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[
      event.key
    ];
    if (!step) return;
    event.preventDefault();
    const index = buttons.findIndex(
      (b) => b.getAttribute("aria-checked") === "true",
    );
    const next = buttons[(index + step + buttons.length) % buttons.length]!;
    select(next.dataset.value!, true);
  });

  group.append(...buttons);
  select(initial);
}

const reelGroup = document.getElementById("reel-switch")!;
const cards = available.map((reel, index) => {
  const button = document.createElement("button");
  button.type = "button";
  button.role = "radio";
  button.className = "reel-card";
  const title =
    reel.id === "dark"
      ? "Cosmic Dawn"
      : reel.id === "bright"
        ? "Big Buck Bunny"
        : "Your reel";
  const category =
    reel.id === "dark"
      ? "NASA / DOCUMENTARY"
      : reel.id === "bright"
        ? "BLENDER FOUNDATION / ANIMATION"
        : "YOUR COLLECTION";
  button.innerHTML = `<div class="reel-image"><img src="${posterUrl(reel)}" alt="" loading="lazy"><span class="reel-stamp">REEL ${String(index + 1).padStart(2, "0")}</span><span class="reel-action" aria-hidden="true">↗</span></div><div class="reel-meta"><div><strong>${title}</strong><small>${category}</small></div><span>${reel.id === "bright" ? "LIGHT STUDY" : "DARK STUDY"}</span></div>`;
  button.setAttribute("aria-label", title);
  button.addEventListener("click", () => selectReel(index));
  button.addEventListener("keydown", (event) => {
    const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[
      event.key
    ];
    if (!step) return;
    event.preventDefault();
    const next = (index + step + cards.length) % cards.length;
    selectReel(next);
    cards[next]!.focus();
  });
  return button;
});
function selectReel(index: number) {
  cards.forEach((card, i) => {
    card.setAttribute("aria-checked", String(i === index));
    card.tabIndex = i === index ? 0 : -1;
  });
  mount(available[index]!);
}
reelGroup.append(...cards);
selectReel(0);

const lights = document.getElementById("lights")!;
lights.addEventListener("click", () => {
  const dimmed = document.body.classList.toggle("lights-out");
  lights.setAttribute("aria-pressed", String(dimmed));
  lights.innerHTML = `<span aria-hidden="true">◐</span> ${dimmed ? "Lights on" : "Lights out"}`;
});

const SIZES: Record<string, string> = {
  wide: "80rem",
  tablet: "40rem",
  phone: "22.5rem",
};

segmented(
  document.getElementById("size-switch")!,
  [
    { value: "wide", label: "Desktop" },
    { value: "tablet", label: "Tablet" },
    { value: "phone", label: "Phone" },
  ],
  "wide",
  (size) => stage.style.setProperty("--stage-width", SIZES[size]!),
);
