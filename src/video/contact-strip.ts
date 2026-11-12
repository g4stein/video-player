/** Decorative contact prints. The Video.js time slider owns all interaction and state. */
class ContactStrip extends HTMLElement {
  private media: HTMLMediaElement | null = null;
  private signature = "";
  private observer: MutationObserver | null = null;
  private refresh = () => {
    const root = this.closest("video-player");
    const media = root?.querySelector<HTMLMediaElement>("mux-video");
    if (media !== this.media) {
      this.media?.removeEventListener("loadedmetadata", this.refresh);
      this.media?.removeEventListener("durationchange", this.refresh);
      this.media = media ?? null;
      this.media?.addEventListener("loadedmetadata", this.refresh);
      this.media?.addEventListener("durationchange", this.refresh);
    }
    const source = media?.getAttribute("src") ?? "";
    const match = source.match(
      /^https:\/\/stream\.mux\.com\/([a-zA-Z0-9]+)\.m3u8/,
    );
    const duration = media?.duration ?? 0;
    if (!match || !Number.isFinite(duration) || duration <= 0) return;
    const signature = `${match[1]}:${duration}`;
    if (signature === this.signature) return;
    this.signature = signature;
    const rows = [
      document.createElement("span"),
      document.createElement("span"),
    ];
    rows[0]!.className = "contact-unexposed";
    rows[1]!.className = "contact-developed";
    for (let i = 0; i < 12; i++) {
      const image = document.createElement("img");
      image.alt = "";
      image.draggable = false;
      image.decoding = "async";
      image.src = `https://image.mux.com/${match[1]}/thumbnail.webp?time=${(((i + 0.5) * duration) / 12).toFixed(2)}&width=160&height=90&fit_mode=smartcrop`;
      rows[0]!.append(image);
      rows[1]!.append(image.cloneNode());
    }
    this.replaceChildren(...rows);
    this.setAttribute("data-ready", "");
  };
  connectedCallback() {
    this.setAttribute("aria-hidden", "true");
    this.refresh();
    const root = this.closest("video-player");
    if (root) {
      this.observer = new MutationObserver(this.refresh);
      this.observer.observe(root, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["src"],
      });
    }
  }
  disconnectedCallback() {
    this.observer?.disconnect();
    this.media?.removeEventListener("loadedmetadata", this.refresh);
    this.media?.removeEventListener("durationchange", this.refresh);
    this.media = null;
    this.signature = "";
  }
}
if (!customElements.get("dr-contact-strip"))
  customElements.define("dr-contact-strip", ContactStrip);
