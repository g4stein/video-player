# Floating glass reference interpretation

The source is the user's generated player image shown in chat, at 1600×900. It supplies surface/color/shape direction; the transport cluster remains centered as shown. Only the bottom capsule is inset above the player edge.

- Violet glass, lavender rims, white glyphs and glossy round playback keys: implemented in CSS, not a flattened screenshot.
- Progress track: smooth violet/magenta gradient, buffered segment and a white illuminated thumb, replacing the former decorative undulating trail.
- Transport: large centered glossy back/play/pause/forward spheres, sized in proportion to the player as shown in the reference. Playback controls are absent from the bottom capsule.
- Dock: visibly inset on all four sides of its bounding box, with a measured bottom gap in browser checks. A maximum width keeps the dock floating within widescreen footage.
- Settings: uses the same glass surfaces; menu, actual submenu values, keyboard return focus, and boundary clamping remain functional. Its offset is adapted to clear both single- and two-row docks.
- Phone: two-row compact layout and an image/dock allowance preserve both viewing space and thumb-sized controls. Reduced motion and forced colors are derived states absent from the reference.
- Site: retains Elsewhere's approved identity and interaction behavior. Only its tiny timeline illustration/copy follows the updated seek design.

The original media, thumbnails, labels and available quality/caption tracks come from real video, not the generated reference image. The reference's font and unavailable state screenshots are unknown; the existing licensed DM Sans and Video.js state behavior are retained.


Measured implementation: a 1316px player has a 1263px bottom capsule, 26px side margins and 99px bottom clearance, matching the reference proportions. Its centered play sphere is 178px, flanked by 118px skip spheres. A 342px phone player has a 298px two-row capsule with 22px clearance. All center buttons remain above the capsule and are centered horizontally. On tablet, the bottom gap compacts to 24px to preserve separation between the cluster and capsule.
