// Work around Hugo 0.162 / pnpm Windows wrapper resolution without changing source content.
const fs = require('node:fs');
const path = require('node:path');
const { spawnSync } = require('node:child_process');
const site = path.resolve(__dirname, '..');
if (process.platform === 'win32') {
  const wrapper = path.join(site, 'node_modules', '.bin', 'tailwindcss.cmd');
  const cli = path.join(site, 'node_modules', '@tailwindcss', 'cli', 'dist', 'index.mjs');
  if (!fs.existsSync(cli)) throw new Error('Install the locked dependencies before building.');
  fs.writeFileSync(wrapper, '@ECHO OFF\r\nnode "%~dp0\\..\\@tailwindcss\\cli\\dist\\index.mjs" %*\r\n');
}
const result = spawnSync('hugo', ['--minify', ...process.argv.slice(2)], { cwd: site, stdio: 'inherit' });
if (result.error) throw result.error;
process.exit(result.status ?? 1);
