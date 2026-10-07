// Regenerates public/Salah-ud-Din-Resume.pdf and public/og/<slug>.png with headless Chrome/Edge.
// Usage: start the site (`npm run dev` or `npm run preview`), then `npm run assets`.
// Env: SITE_URL (default http://localhost:3000), CHROME_PATH (auto-detected on Windows/macOS/Linux).
import { execFileSync } from 'node:child_process'
import { existsSync, mkdirSync, mkdtempSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const root = resolve(import.meta.dirname, '..')
const site = process.env.SITE_URL ?? 'http://localhost:3000'

const candidates = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium'
].filter(Boolean)
const chrome = candidates.find(path => existsSync(path))
if (!chrome) throw new Error('Chrome/Edge not found. Set CHROME_PATH.')

const profileDir = mkdtempSync(join(tmpdir(), 'portfolio-assets-'))
const run = args => execFileSync(chrome, ['--headless=new', '--disable-gpu', '--hide-scrollbars', `--user-data-dir=${profileDir}`, ...args], { stdio: 'inherit' })

// Resume PDF (light theme, print stylesheet)
run(['--no-pdf-header-footer', '--virtual-time-budget=8000', `--print-to-pdf=${join(root, 'public', 'Salah-ud-Din-Resume.pdf')}`, `${site}/resume`])

// Per-project Open Graph cards
const { projects } = await import(pathToFileURL(join(root, 'app', 'data', 'portfolio.ts')).href).catch(() => ({ projects: null }))
const list = projects ?? JSON.parse(process.env.OG_PROJECTS ?? '[]')
const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c])
mkdirSync(join(root, 'public', 'og'), { recursive: true })

for (const p of list) {
  const html = `<!doctype html><html><head><meta charset="utf-8"><style>
  *{margin:0;box-sizing:border-box}body{width:1200px;height:630px;background:#070b14;color:#f8fafc;font-family:Inter,'Segoe UI',Arial,sans-serif;position:relative;overflow:hidden}
  .c1{position:absolute;right:-120px;top:-170px;width:520px;height:520px;border-radius:50%;background:#0d2a2e}
  .c2{position:absolute;right:-60px;bottom:-260px;width:520px;height:520px;border-radius:50%;background:#1a1734}
  .w{position:relative;padding:72px 84px;height:100%;display:flex;flex-direction:column}
  .k{color:#52e6d8;font-weight:800;font-size:22px;letter-spacing:.12em;text-transform:uppercase}
  h1{font-size:68px;line-height:1.05;letter-spacing:-.03em;margin-top:22px;max-width:900px}
  .r{margin-top:26px;font-size:28px;color:#c2ccda;max-width:900px;line-height:1.4}
  .f{margin-top:auto;display:flex;align-items:center;gap:18px;font-size:24px;color:#a8b3c4}
  .b{width:56px;height:56px;border-radius:14px;background:linear-gradient(135deg,#52e6d8,#7c6cff);color:#071015;display:grid;place-items:center;font-weight:900;font-size:20px}
  strong{color:#f8fafc}</style></head><body><div class="c1"></div><div class="c2"></div><div class="w">
  <div class="k">Case study · ${esc(p.kicker)}</div><h1>${esc(p.title)}</h1><div class="r">${esc(p.result)}</div>
  <div class="f"><div class="b">SD</div><div><strong>Salah ud Din</strong> · Senior Laravel + Vue/Nuxt Developer · salahuddin.pk</div></div>
  </div></body></html>`
  const file = join(profileDir, `${p.slug}.html`)
  writeFileSync(file, html)
  run(['--window-size=1200,630', `--screenshot=${join(root, 'public', 'og', `${p.slug}.png`)}`, pathToFileURL(file).href])
}

console.log(`Done: resume PDF + ${list.length} OG images`)
