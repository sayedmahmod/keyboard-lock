#!/usr/bin/env node
/**
 * Ad-hoc signs the packaged macOS app.
 *
 * The release workflow builds with CSC_IDENTITY_AUTO_DISCOVERY=false, and
 * electron-builder reads that as "skip signing entirely" rather than "sign
 * without a certificate". The bundle then ships carrying only the Electron
 * binary's linker signature: identifier `Electron`, no sealed resources, no
 * entitlements. Gatekeeper reads that as a *broken* signature and macOS shows
 * "is damaged and can't be opened", which no right-click-Open can bypass.
 *
 * A valid ad-hoc signature demotes that to the ordinary "unidentified
 * developer" prompt, which users can get past. It does not replace notarizing.
 *
 * Runs as an electron-builder `afterPack` hook, before the dmg and zip are
 * assembled. When a real signing identity is configured, electron-builder's own
 * signing step runs afterwards and replaces this signature, so this is a
 * no-op for signed builds rather than something to disable.
 */
import { execFileSync } from 'node:child_process';
import { join } from 'node:path';

export default async function adhocSign(context) {
  if (context.electronPlatformName !== 'darwin') return;

  const appPath = join(context.appOutDir, `${context.packager.appInfo.productFilename}.app`);
  const entitlements = join(context.packager.info.projectDir, 'build', 'entitlements.mac.plist');

  // --deep is deprecated for distribution signing, but it is the supported way
  // to ad-hoc sign the nested helpers and frameworks in one pass, and the
  // result verifies under --strict.
  execFileSync(
    'codesign',
    [
      '--force',
      '--deep',
      '--options',
      'runtime',
      '--entitlements',
      entitlements,
      '--sign',
      '-',
      appPath,
    ],
    { stdio: 'inherit' },
  );

  execFileSync('codesign', ['--verify', '--deep', '--strict', appPath], { stdio: 'inherit' });
  console.log(`  • ad-hoc signed  file=${appPath}`);
}
