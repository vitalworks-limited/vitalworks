import { spawnSync } from 'node:child_process';
import { checkRelease } from './release-preflight.mjs';

const env = { ...process.env, VITALWORKS_RELEASE: 'production' };
const preflight = checkRelease(process.cwd(), env);
if (!preflight.ok) {
 for (const failure of preflight.failures) console.error('RELEASE BLOCKED:', failure);
 process.exitCode = 1;
} else {
 const npm = process.platform === 'win32' ? 'npm.cmd' : 'npm';
 const result = spawnSync(npm, ['run', 'verify'], { env, stdio: 'inherit', shell: process.platform === 'win32' });
 process.exitCode = result.error ? 1 : result.status ?? 1;
}
