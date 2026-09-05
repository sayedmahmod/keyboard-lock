# Security policy

## Supported versions

The latest release is the supported one. Fixes land on `main` and go out in the
next tagged release.

## Reporting a vulnerability

Please report privately through
[GitHub Security Advisories](https://github.com/schafskaese/keyboard-lock/security/advisories/new)
rather than opening a public issue. You can expect an acknowledgement within a
few days.

## What this app touches

Keeping the attack surface small is a design goal, so it is worth stating what
the app actually does:

- **No network access.** The app makes no requests. The only outbound action is
  handing a `https://` URL to your system browser when you click the source-code
  link in the settings.
- **No runtime dependencies.** `package.json` has no `dependencies`, only build
  tooling. Everything that ships is Electron plus this repository's own code.
- **No key logging.** While a lock is running the app counts how many key events
  it swallowed. The count is a number in memory. Which keys were pressed is
  never inspected, stored or written anywhere — except the unlock combination,
  which is compared and discarded.
- **One file on disk.** `settings.json` in the OS application-data directory.
  Nothing else is written.
- **Renderers are sandboxed.** `contextIsolation` is on, `nodeIntegration` is
  off, `sandbox` is on, and the preload bridge exposes a fixed list of typed
  calls. A Content-Security-Policy blocks remote code in both windows.
- **The lock is reversible by construction.** It is a focused overlay plus
  temporary shortcut grabs held by the process. No driver, no OS input hook, no
  persistent system state. Killing the process, logging out or pulling the power
  all leave the keyboard working.
