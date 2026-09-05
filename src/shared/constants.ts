import type { AppSettings } from './types.js';

/**
 * Project home, shown in the settings footer and opened in the system browser.
 * Change this and the `repository` field in package.json when you fork.
 */
export const APP_HOMEPAGE = 'https://github.com/schafskaese/keyboard-lock';

/** Shortest lock a user can pick. Anything below is not worth a fullscreen takeover. */
export const MIN_DURATION_MS = 10_000;

/** Longest lock a user can pick. A hard ceiling keeps the app from becoming a trap. */
export const MAX_DURATION_MS = 60 * 60_000;

/** Presets offered as one-tap chips on the setup screen. */
export const DURATION_PRESETS_MS = [30_000, 60_000, 120_000, 300_000, 600_000] as const;

/** Locks at or above this length ask the user to reconsider before starting. */
export const DEFAULT_CONFIRM_THRESHOLD_MS = 5 * 60_000;

/** How long the "hold to confirm" button has to be held before a long lock starts. */
export const CONFIRM_HOLD_MS = 2_000;

export const DEFAULT_SETTINGS: AppSettings = {
  locale: 'system',
  accent: 'indigo',
  defaultDurationMs: 60_000,
  unlockShortcut: 'Control+Alt+U',
  confirmThresholdMs: DEFAULT_CONFIRM_THRESHOLD_MS,
  allowMouseUnlock: true,
  mouseUnlockHoldMs: 1_500,
  blockSystemShortcuts: true,
  playSound: true,
  keepDisplayAwake: true,
};

/**
 * Shortcuts that are grabbed while a lock is running so a stray swipe cannot
 * quit apps, switch windows or change the volume. Registration is best effort:
 * the OS owns some of these and will simply refuse.
 */
export const SWALLOWED_SHORTCUTS = [
  'CommandOrControl+Q',
  'CommandOrControl+W',
  'CommandOrControl+N',
  'CommandOrControl+T',
  'CommandOrControl+M',
  'CommandOrControl+H',
  'CommandOrControl+Tab',
  'CommandOrControl+Shift+Tab',
  'CommandOrControl+Space',
  'CommandOrControl+Alt+Escape',
  'Alt+F4',
  'Super',
  'VolumeUp',
  'VolumeDown',
  'VolumeMute',
  'MediaPlayPause',
  'MediaNextTrack',
  'MediaPreviousTrack',
] as const;

/** IPC channel names. Kept in one place so main, preload and renderer cannot drift. */
export const IPC = {
  getSettings: 'settings:get',
  setSettings: 'settings:set',
  resetSettings: 'settings:reset',
  getEnvironment: 'env:get',
  startLock: 'lock:start',
  stopLock: 'lock:stop',
  getLockStatus: 'lock:status',
  checkShortcut: 'shortcut:check',
  closeWindow: 'window:close',
  minimizeWindow: 'window:minimize',
  openExternal: 'shell:open-external',
  // main -> renderer
  onLockTick: 'lock:tick',
  onLockStarted: 'lock:started',
  onLockEnded: 'lock:ended',
  onSettingsChanged: 'settings:changed',
} as const;

/** Tick interval of the countdown broadcast, in milliseconds. */
export const TICK_INTERVAL_MS = 200;
