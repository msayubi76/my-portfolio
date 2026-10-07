# Task: capture portfolio screenshots of Munshi Wala (my own transport accounting SaaS)

The app is my repo `C:\xampp\htdocs\msayubi76-transport-sass-system` (Laravel 12 API in `backend/`, Nuxt 4 app in `frontend/`, Tauri in `frontend/src-tauri/`, Capacitor in `frontend/android/`). Read `AGENTS.md` and `CLAUDE.md` first and follow their rules.

The app is **already running at http://localhost:3000**. Before doing anything, open it and confirm it is Munshi Wala. If it is a different app, stop and tell me.

Sign in with the trial account:
- Email: `trial.salah@gmail.com`
- Password: `PASTE-PASSWORD-HERE`

The goal is 8 clean screenshots for my public portfolio.

## Hard rules

1. **Use the existing data in the trial account. Do not create, edit or delete any records**, and do not run migrations, seeders or any artisan or SQL command that writes. The only exception is step 4's offline entry, which must never reach the server.
2. **Do not change application source code.** Do not commit, push, deploy or build release packages.
3. **Check every screenshot for real personal data** (real people's names, phone numbers, CNIC numbers, real company names, real vehicle registration numbers). If the trial account contains any, don't capture that screen. List it in your report and tell me, so I can replace the data myself.
4. Do not sign into or open any other account. Do not change account settings, subscription, password or permissions.
5. Never print the password in your reply or in any file.

## Screenshots

Use Playwright (Chromium), viewport **1440×900** (except where noted), device scale factor 1, **light theme**, no browser chrome. Wait for network idle and for loading skeletons to disappear. Close toasts unless they're the subject. Save PNGs to `C:\xampp\htdocs\msayubi76-transport-sass-system\portfolio-screenshots\` and add that folder to `.git/info/exclude`.

| File | Screen | Must be visible |
|---|---|---|
| `01-dashboard.png` | Main dashboard | Summary figures (trips, income/expense, balances), with real-looking numbers and not an empty state |
| `02-trips.png` | Trips list | Several trips with vehicle, route, date, freight amount |
| `03-ledger.png` | A ledger / account statement | Proper debit, credit and running-balance columns; totals that balance |
| `04-partnership.png` | Vehicle partnership screen | Partners, date-ranged share percentages, profit split or settlement |
| `05-report-pdf.png` | One printable report or statement as PDF | Open the generated PDF in the browser and capture the first page; crop to the page if possible |
| `06-urdu.png` | Same as 01 or 03 with the language switched to **Urdu** | Urdu text and right-to-left layout. Switch the language back to English afterwards |
| `07-offline-pending.png` | Offline entry (see below) | The app's offline / pending-sync indicator and the queued entry |
| `08-mobile.png` | Dashboard at **390×844** viewport (mobile) | The mobile layout the Android app (Capacitor) uses |

### How to capture 07 safely (nothing may reach the server)

1. Open a **new, separate** Playwright browser context and sign in.
2. While online, open the voucher or entry screen and the lists it needs, so the IndexedDB read cache is filled.
3. Call `context.setOffline(true)`.
4. Create one entry clearly marked as demo (e.g. note "DEMO – offline sync screenshot") and take the screenshot showing it as pending / queued and the offline indicator.
5. **Close that browser context while still offline**, without ever calling `setOffline(false)`, so the queued write is discarded and never synced.
6. Afterwards, in a normal context, confirm the demo entry does **not** exist on the server, and report that.

If the app has no visible offline indicator, capture the pending entry anyway and say so in the report.

### Optional extras (only if easy, and without building anything)

- `09-windows-app.png`: if a built Windows (Tauri) app already exists and opens, a screenshot of its window showing the same dashboard. Do not run a release build.
- `10-update-prompt.png`: the forced-update / new-version prompt, but only if you can see it without changing any data or release records.

## Report back

Reply with:
1. The files created, each with a one-line description.
2. Any screen you skipped because of real personal data, and what to replace.
3. Confirmation that no records were created, edited or deleted, including the offline entry check from step 6.
4. Anything that didn't work and why.

Don't include the password in your reply.
