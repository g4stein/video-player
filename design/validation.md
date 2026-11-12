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
