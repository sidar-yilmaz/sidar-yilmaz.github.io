import { spawnSync } from 'node:child_process';

// CI_PAGES_URL is the instance-provided URL, including any project subpath.
// An explicit NEXT_PUBLIC_BASE_PATH (including an empty string) overrides it.
let basePath = process.env.NEXT_PUBLIC_BASE_PATH;
if (basePath === undefined) {
  if (!process.env.CI_PAGES_URL) {
    throw new Error('CI_PAGES_URL is required, or set NEXT_PUBLIC_BASE_PATH explicitly.');
  }
  basePath = new URL(process.env.CI_PAGES_URL).pathname.replace(/\/+$/, '');
}
if (basePath && (!basePath.startsWith('/') || basePath.endsWith('/'))) {
  throw new Error('NEXT_PUBLIC_BASE_PATH must be empty or start with / and have no trailing /.');
}
console.log(`Building GitLab Pages with base path: ${basePath || '/'}`);
const build = spawnSync(process.execPath, ['node_modules/next/dist/bin/next', 'build'], {
  stdio: 'inherit',
  env: { ...process.env, NEXT_PUBLIC_BASE_PATH: basePath },
});
if (build.error) throw build.error;
process.exit(build.status ?? 1);
