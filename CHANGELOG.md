# Changelog

All notable changes to this project are documented here. The format follows
[Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project
adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2026-09-06

### Fixed

- macOS builds refused to open with "is damaged and can't be opened". The
  release workflow builds without a signing certificate, and electron-builder
  treated that as "skip signing" rather than "sign ad-hoc", so the app shipped
  with an invalid signature that no right-click-Open could get past. Release
  builds are now ad-hoc signed, which also applies the hardened runtime and
  entitlements that had silently never reached the artifact.

## [1.0.0] - 2026-09-06

First release.

### Added

- Timed keyboard lock with a dark fullscreen overlay on every connected display.
- Duration picker from 10 seconds to 1 hour, with presets and a non-linear slider.
- Three ways out of a lock: it expires, a configurable shortcut, or a held
  on-screen button.
- A confirmation step for long locks, on by default from 5 minutes.
- Optional grabbing of system shortcuts (quit, window switching, media keys)
  for the duration of the lock.
- 12 languages, following the system locale by default.
- Five accent colours.
- Keeps the display awake for the duration of a lock.
- Reproducible app icon and README screenshots, both generated from source.

[1.0.1]: https://github.com/sayedmahmod/keyboard-lock/releases/tag/v1.0.1
[1.0.0]: https://github.com/sayedmahmod/keyboard-lock/releases/tag/v1.0.0
