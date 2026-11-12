# Elsewhere validation

Validated against the production Vite bundle in headless Chromium on 12 November 2026.

- TypeScript: `npm run typecheck` passed.
- Production build: `npm run build` passed, with a bundle-size advisory for the shared player bundle.
- Whitespace: `git diff --check` passed.
- Real Mux playback starts from the dock play key. All playback controls remain in the floating dock.
- Play/pause and mute changed the actual media state; volume icon variants reflected the state.
- Keyboard Home, End and ArrowRight sought to the expected positions. Pointer seeking changed media time.
- Settings opened actual available options. Selecting 1.5× changed the media playback rate.
- Escape closed settings and restored focus to its trigger.
- Fullscreen entered and exited successfully.
- Ambience and theatre controls updated their pressed states and the page presentation.
- Both dark NASA footage and bright Big Buck Bunny footage loaded successfully.
- At a 390px viewport the page had no horizontal overflow; play, mute, settings, fullscreen, time and seek remained visible.
- Primary controls fit inside actual player widths of 240, 320, 384, 480, 768 and 1360px.
- Reduced motion sets the skin's motion duration to zero; the page disables decorative motion.
- Forced-colors presentation was captured and reviewed.
- Arabic language and a 384px portrait player were loaded via the workbench's hash parameters; right-to-left control order was reviewed.
- No browser JavaScript errors occurred during the interaction checks.

The browser harness used curl for HTTPS requests through the environment's trusted proxy, preserving certificate validation. This is test infrastructure outside the product. Safari, Firefox and physical mobile devices have not been tested in this session.

Preview images are in `design/previews/`.

## Pre-merge audit

- Fixed the mobile Theatre button's missing accessible name with an explicit label.
- Enlarged seek hit areas to 44px and viewing controls to at least 44px; reserved additional phone dock space.
- axe-core found no automatic violations in the final desktop, settings-menu, phone and error-dialog scans. Its incomplete checks for gradients, captions and the dynamically mounted menu relationship required manual review.
- Measured contrast: control text 13.85:1, muted control text 8.50:1, seek track 4.34:1, page muted text against its violet surface 6.07:1, and lilac-card secondary text 4.85:1.
- Confirmed the settings trigger's aria-controls target exists while its menu is open.
- Keyboard focus was verified on the actual interactive slider thumb and play key; ArrowRight on the timeline thumb advanced media from 30 to 31 seconds.
- Ended state announces Replay, shows the replay icon and restarts playback.
- Captions toggle selected the English subtitle track in showing mode.
- Simulated a failed media request: the error dialog opened with a meaningful title; its accessibility scan reported no automatic violations.
- No browser JavaScript errors occurred during this audit.
- `npm audit --omit=dev` reported zero known production dependency vulnerabilities.


## Floating glass refinement checks

The floating glass dock was checked in the production bundle with desktop (1440×1100), touch-enabled tablet (820×1180), and touch-enabled phone (390×844) browser contexts.

- Measured dock bottom clearance: desktop 52px, tablet 29.75px, phone 22px. The dock never sits flush against the video edge.
- Idle hiding during real playback and pointer/tap reveal passed on all three contexts. Keyboard focus restores controls and remains visible.
- Keyboard play/pause, native timeline thumb seeking, mute and Settings Escape/focus return passed.
- Measured settings-panel clearance above the dock: desktop 15px, tablet 17px, phone 19px; panels remained within the player.
- No automatic WCAG A/AA violations in the three accessibility scans. Contrast, dynamic menu ownership and caption completeness retain the manual-review limitations described above.
- Primary controls fit actual player widths of 240, 320, 390, 576, 768, 832, 1024 and 1360px.
- Reduced-motion duration is zero in each context. Forced-colors presentation was captured.
- Glass is backed by a dark surface; reduced transparency or increased contrast switches the dock/menu to a solid surface. White text and the muted text palette retain at least 8.52:1 and 6.41:1 against a conservative bright violet surface (#494566).
- No browser JavaScript errors occurred in these checks. Touch contexts are browser emulation, not physical-device validation.
- Seek preview cards remain within the player near 2%, 50% and 98% of the timeline. Fullscreen entry and exit passed after the dock change.
- A later follow-up run encountered HTTP 503 responses from some Mux segment CDN endpoints after the successful three-context playback checks. Follow-up static preview checks used the available metadata and poster. The media source is unchanged by this refinement.
