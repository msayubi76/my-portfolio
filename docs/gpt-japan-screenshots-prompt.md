# Task: capture portfolio screenshots of the Japan–UK Vehicle Exporter SaaS using DEMO data only

You are working in my local repo `C:\xampp\htdocs\japan-exporter-transport` (Laravel 12 API in `backend/`, Nuxt 4 apps in `apps/japan/` and `apps/uk/`). Read `README.md`, `AGENTS.md` and `CLAUDE.md` first and follow their rules.

The goal is 7 clean screenshots for my public portfolio. The client has approved screenshots, **but no real client data may appear in any image**.

## Hard rules (do not break any of these)

1. **Never touch the existing database `transport_platform`.** Do not run `migrate:fresh`, `db:wipe`, `db:seed` or any write against it. Before every artisan command, confirm it targets `transport_demo`.
2. **Do not change application source code** (no edits under `backend/app`, `backend/routes`, `backend/config`, `apps/*/app`). If something only works with a code change, stop and tell me instead.
3. **Do not commit, push or deploy anything.** Do not edit `backend/.env`.
4. **No real names, companies, logos, emails, phone numbers, chassis numbers, BL numbers or amounts.** Every value must be obviously fake (e.g. "Demo Motors KK", "Sample Customer Ltd", chassis `DEMO-ZVW30-0001`, BL `DEMOBL240117`).
5. Do not show the client's company name, logo or the production domain (anything containing `zynauto`) in any screenshot. If the UI shows one, tell me which screen; don't hack the code to hide it.
6. OpenAI calls are allowed **only** for the two AI screens, **on fake demo documents you create**, at most 3 calls per feature. Never upload a real document.

## Step 1: separate demo environment

- Start MySQL from XAMPP if it isn't running.
- Create database `transport_demo`.
- Create `backend/.env.demo` by copying `backend/.env` and changing only: `DB_DATABASE=transport_demo`, `APP_ENV=local`. Keep the existing OpenAI settings so the AI features work. (Laravel loads `.env.demo` when commands get `--env=demo`.)
- Run `php artisan migrate --env=demo --force`, then `php artisan db:seed --env=demo --force` (the `RolePermissionSeeder` and `DummyDataSeeder`). Read `DummyDataSeeder.php` first; if it uses realistic-looking real names, create the demo data through the app or a throwaway script in `backend/storage/app/demo/` instead.
- Serve the API: `php artisan serve --env=demo --port=8000`.
- Port 3000 is used by another project. Run the Japan app on port **3001** and the UK app on port **3020** (both are already in `SANCTUM_STATEFUL_DOMAINS`), with `NUXT_PUBLIC_BACKEND_BASE=http://localhost:8000` and `NUXT_PUBLIC_API_BASE=http://localhost:8000/api/v1`.
- Use a demo supplier login. Put any credentials you create in `backend/storage/app/demo/CREDENTIALS.md`, not in your chat reply.

## Step 2: realistic demo data (so screens don't look empty)

In `transport_demo`, through the app UI or the API:
- 1 Japan supplier workspace: "Demo Motors KK"
- 4 customers with country GB, e.g. "Sample Customer Ltd", "Northfield Autos (Demo)"
- 12–15 vehicles across all stages (at auction, bought, shipped, arrived), real model names (Toyota Prius, Nissan Leaf, Honda Fit, Toyota Hiace) with fake chassis numbers, every cost part filled
- 2 vessels / BL numbers with ETD/ETA dates
- 6–8 customer payments in JPY and GBP so balances and rates show
- 1 UK workspace synced to one GB customer, with a UK commission override on 2 vehicles

## Step 3: fake documents for the AI screens

Create both in `backend/storage/app/demo/`:
- `demo-bill-of-lading.pdf`: a realistic one-page BL (shipper "Demo Motors KK", consignee "Sample Customer Ltd", vessel "Sample Voyage 12", Yokohama → Southampton, BL no `DEMOBL240117`, 6 chassis numbers). Use 4 chassis that already exist in demo data, 1 that doesn't, and 1 that already exists on a **different** BL, so the result shows matched, new and conflict.
- `demo-auction-sheet.png`: a Japanese-auction-style sheet for one demo car (grade, mileage, year, chassis, colour, auction house "Demo Auction"), clearly fake.

## Step 4: screenshots

Use Playwright (Chromium), viewport **1440×900**, device scale factor 1, **light theme**, no browser chrome. Wait for network idle and for skeleton loaders to disappear. Close toasts and modals unless they're the subject. Save PNGs to `C:\xampp\htdocs\japan-exporter-transport\portfolio-screenshots\` (create it and add it to `.git/info/exclude`, not `.gitignore`).

| File | Screen | Must be visible |
|---|---|---|
| `01-bl-ai-result.png` | Japan app: Bill of Lading upload result | Extracted BL fields, vessel/ports, and the matched / new / **conflict** vehicle rows. Most important shot; keep the important content in the **top 60%** of the frame |
| `02-auction-sheet-ai.png` | Japan app: auction sheet extraction | The sheet next to (or above) the pre-filled create-vehicle form |
| `03-vehicle-detail.png` | Japan app: one vehicle | Lifecycle/status, full cost breakdown, ETD/ETA, customer |
| `04-customer-finance.png` | Japan app: customer payments/balance | JPY and GBP amounts, calculated rate, outstanding balance |
| `05-invoice-pdf.png` | A generated PDF invoice or statement | Open the PDF in the browser and capture the first page |
| `06-uk-app.png` | UK app: the same vehicle | UK commission override visible |
| `07-customer-portal.png` | Customer portal: vehicle list | Read-only list for the demo customer |

Also save `full-page/` versions (`fullPage: true`) of 01, 03 and 04.

## Step 5: report back

Reply with:
1. The list of files created, each with a one-line description.
2. Confirmation that `transport_platform` was not modified (show the command you used to check, e.g. row counts before and after).
3. Any screen that shows a client name, logo or `zynauto` domain, or that you couldn't capture, and why.
4. How many OpenAI calls you made.
5. How to shut down everything you started.

Do not paste credentials or API keys into your reply.
