# Elsewhere validation

Validated against the production Vite bundle in headless Chromium on 12 November 2026.

- TypeScript: `npm run typecheck` passed.
- Production build: `npm run build` passed, with a bundle-size advisory for the shared player bundle.
- Whitespace: `git diff --check` passed.
- Real Mux playback started from the central play key; the initial key then disappeared.
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
