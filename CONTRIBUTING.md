# Contributing

Thanks for wanting to help. This is a small, deliberately single-purpose app, so
the bar for changes is "does this make locking a keyboard for a wipe better?"

## Getting set up

```bash
git clone https://github.com/schafskaese/keyboard-lock.git
cd keyboard-lock
npm ci
npm run dev
```

Node 20.19 or newer. There are no native modules, so no build toolchain is
needed beyond Node itself.

## Everyday commands

| Command               | What it does                                              |
| --------------------- | --------------------------------------------------------- |
| `npm run dev`         | Runs the app with hot reload for the renderer             |
| `npm test`            | Runs the unit tests once                                  |
| `npm run test:watch`  | Runs the unit tests in watch mode                         |
| `npm run lint`        | ESLint over the whole repository                          |
| `npm run typecheck`   | Type-checks the main/preload project and the renderer one |
| `npm run format`      | Prettier, in place                                        |
| `npm run build`       | Type-checks, then builds into `out/`                      |
| `npm run icons`       | Regenerates `build/icon.png`                              |
| `npm run screenshots` | Rebuilds the README screenshots from the real UI          |
| `npm run dist`        | Packages installers for the current platform into `dist/` |

Run `npm run lint`, `npm run typecheck` and `npm test` before opening a pull
request. CI runs all three on macOS, Windows and Linux.

## How the code is laid out

```
src/
├── main/       Electron main process: windows, the lock itself, IPC, settings
├── preload/    The single, typed bridge exposed to the renderers
├── renderer/   Two windows — the setup card and the fullscreen lock overlay
└── shared/     Pure logic used by all three: durations, accelerators, i18n
scripts/        Icon generation and the screenshot harness
tests/          Unit tests for everything in src/shared
```

`src/shared` is free of Electron and DOM imports on purpose: it is the part that
can be unit tested, and both the main process and the renderers depend on it.
Anything that decides _whether a lock can end_ belongs there or in
`src/main/lock-controller.ts`, and wants a test.

## The rule that matters most

**A user must always be able to get their keyboard back.** Every change is
measured against that. In practice:

- Never remove an unlock path without adding an equivalent one.
- Never let a setting persist a value that would disable every unlock path —
  `sanitizeSettings` exists for exactly this, and is tested.
- Never hold a lock longer than `MAX_DURATION_MS`.
- Never introduce state outside the process that outlives a crash.

## Adding or changing a string

Every user-facing string lives in `src/shared/i18n/locales/`. Add the key to
`en.json` first, then to every other locale. `npm test` fails if a locale is
missing a key, has an extra one, has a blank value, or drops a `{placeholder}`.
See [docs/TRANSLATING.md](docs/TRANSLATING.md).

## Screenshots

The README images are real captures of the built UI, not mock-ups. If your
change alters the interface:

```bash
npm run build
npm run screenshots
```

Scenarios live in `scripts/screenshot/scenarios.cjs`. Run this on a HiDPI
display — the captures come out at the display's scale factor, and the committed
images are 2x.

## Publishing your own fork

Two places carry the repository slug: the `repository`, `homepage` and `bugs`
fields in `package.json`, and `APP_HOMEPAGE` in `src/shared/constants.ts`. The
README badges point at the same slug. Tagging `v1.2.3` and pushing the tag runs
the release workflow, which builds on all three platforms and uploads the
installers to a draft GitHub release.

## Commit messages

Short, imperative, and about the change rather than the file:
`fix: keep the overlay covering a monitor unplugged mid-lock`.
