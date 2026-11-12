# ELSEWHERE

An original player and showcase built from a blank visual brief, with creative direction delegated by the user.

Concept: an invitation to escape into a film. Midnight-violet spatial canvas; pale lilac and warm-white typography; acid-lime interactions; expressive Instrument Serif headlines paired with DM Sans. Rounded, fluid geometry replaces hard archival edges.

Showcase: a quiet wordmark and navigation; oversized asymmetric serif headline and small introductory copy; large immersive nebula screening stage; live film metadata; selectable destinations; an illustrated interaction story; keyboard reference. Theatre mode and ambience are independent, usable controls. Viewport toggles exercise the actual skin.

Player: a floating violet glass capsule with glossy round keys, white glyphs, a magenta-to-lilac seek bar and illuminated white playhead. The reference’s large back/play/pause/forward spheres remain centered in the picture; only time, seek, volume, captions, settings and fullscreen live in the bottom capsule. Source order: title/PiP, centered back/play/forward, then dock time/seek/mute/volume/captions/settings/fullscreen. Existing rounded 24px icons with a rounded gear for Settings. Quality, speed, audio and captions remain real Video.js menus. Hover previews follow the time slider.

Motion: instant press feedback, prompt reveal on pointer movement/tap/focus, subtle idle hiding during playback; all motion settles under reduced motion. No autoplay.

Responsive: the dock compacts by player container width. The showcase gives the picture and controls separate space on phones. Targets are at least 44px. Time and essential controls remain visible; optional captions and seek keys collapse only at narrow widths. Error dialog, translated accessible labels, status announcer, gestures and shortcuts remain supplied by Video.js.

Derived details: #141321 ink, #c3b6ff lilac, #dcf98a lime, #f4f2f8 paper. Dark-backed glass preserves control contrast, with solid accessibility-preference fallbacks. The skin uses a consistent lilac focus ring. Keyboard menus close with Escape and return focus. Fonts are SIL OFL licensed; skin source is Apache 2.0.

## Floating glass refinement

Reference: user's generated 1600 × 900 player image supplied in chat. The image is a visual reference, not embedded into the video. User preference: adjust only the bottom control capsule, keeping the large centered playback controls as shown and retain pointer/touch/keyboard reveal and idle hiding on all sizes. The Elsewhere site typography and overall layout remain.

| Detail | Reference / decision | Source |
| --- | --- | --- |
| Surface | Deep violet translucent glass, lavender edge, soft inner highlights | Observed |
| Playback keys | Circular glossy violet keys; white play/pause and seek glyphs | Observed |
| Progress | Magenta-to-lilac fill, soft white luminous playhead | Observed |
| Settings | Rounded violet glass panel with inset selection surfaces | Observed |
| Placement | Large glossy transport cluster centered; separate floating bottom control capsule | Explicit user correction |
| Desktop dock | max 1536px; side inset 2% capped at 32px; bottom gap 7.5% of width capped at 120px; proportional padding | Derived |
| Phone dock | 22px visible bottom/side clearance, two rows, 44px targets | Derived |
| Main play | 13.5% of player width, capped at 216px desktop, minimum 72px phone; skip keys 9% capped at 144px | Derived from reference |
| Menu | 260px minimum width, 26px corners; lifted clear of dock, viewport-clamped | Derived |
| Focus | 2px lilac ring, 2px offset, dark separation halo | Derived accessibility state |
| Font | Existing licensed DM Sans | Retained site font; screenshot font unknown |
| Hidden states | Existing Video.js controls state, immediate focus reveal, reduced-motion preferences | Retained behavior |

A denser phone layout and small-player menu scrolling adapt the static reference to real responsive video. Error handling, captions, rate, real quality selection, hotkeys and announcements remain live components.
