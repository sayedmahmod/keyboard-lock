const DEFAULT_SETTINGS = {
  locale: 'system',
  accent: 'indigo',
  defaultDurationMs: 60_000,
  unlockShortcut: 'Control+Alt+U',
  confirmThresholdMs: 300_000,
  allowMouseUnlock: true,
  mouseUnlockHoldMs: 1_500,
  blockSystemShortcuts: true,
  playSound: true,
  keepDisplayAwake: true,
};

const environment = (locale, platform = 'darwin') => ({
  platform,
  appVersion: '1.0.0',
  electronVersion: '38.0.0',
  systemLocale: locale,
  displayCount: 1,
  homepage: 'https://github.com/schafskaese/keyboard-lock',
});

const APP_WIDTH = 440;
const APP_HEIGHT = 624;
const LOCK_WIDTH = 1280;
const LOCK_HEIGHT = 800;

/** Wait for a paint after a scripted interaction so the capture is not mid-transition. */
const settle = `await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));`;

const SCENARIOS = [
  {
    name: 'setup',
    page: 'index',
    width: APP_WIDTH,
    height: APP_HEIGHT,
    settings: { ...DEFAULT_SETTINGS, defaultDurationMs: 60_000 },
    environment: environment('en'),
  },
  {
    name: 'confirm',
    page: 'index',
    width: APP_WIDTH,
    height: APP_HEIGHT,
    settings: { ...DEFAULT_SETTINGS, defaultDurationMs: 600_000 },
    environment: environment('en'),
    script: `document.getElementById('start-lock').click(); ${settle}`,
  },
  {
    name: 'settings',
    page: 'index',
    width: APP_WIDTH,
    height: APP_HEIGHT,
    settings: { ...DEFAULT_SETTINGS, accent: 'teal' },
    environment: environment('en'),
    script: `document.getElementById('open-settings').click(); ${settle}`,
  },
  {
    name: 'lock',
    page: 'lock',
    width: LOCK_WIDTH,
    height: LOCK_HEIGHT,
    settings: DEFAULT_SETTINGS,
    environment: environment('en'),
    status: {
      active: true,
      durationMs: 120_000,
      remainingMs: 78_000,
      endsAt: Date.now() + 78_000,
      blockedKeys: 37,
      shortcutsDegraded: false,
    },
  },
  {
    name: 'setup-de',
    page: 'index',
    width: APP_WIDTH,
    height: APP_HEIGHT,
    settings: { ...DEFAULT_SETTINGS, locale: 'de', accent: 'violet', defaultDurationMs: 120_000 },
    environment: environment('de-DE'),
  },
  {
    name: 'setup-ja',
    page: 'index',
    width: APP_WIDTH,
    height: APP_HEIGHT,
    settings: { ...DEFAULT_SETTINGS, locale: 'ja', accent: 'amber', defaultDurationMs: 30_000 },
    environment: environment('ja-JP'),
  },
].map((scenario) => ({
  status: {
    active: false,
    durationMs: 0,
    remainingMs: 0,
    endsAt: 0,
    blockedKeys: 0,
    shortcutsDegraded: false,
  },
  ...scenario,
}));

module.exports = { SCENARIOS };
