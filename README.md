# Fumbo Ai website

Marketing site for [fumbo.ai](https://fumbo.ai), built with Next.js, Tailwind CSS, and shadcn/ui.

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- shadcn/ui (`/components/ui`)
- Spline 3D hero (`@splinetool/react-spline`)
- Framer Motion
- Brand tokens: mint `#24eda4`, blue `#0096f6`, Poppins

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Notes

- Brand assets live in `public/brand/`
- Spline scene URL is configured in `src/components/site/hero.tsx`

## Contact form

Demo requests are posted to **Fumbo Hunter** as inbound leads. SMTP is optional backup.

Copy `.env.example` to `.env.local`:

```bash
cp .env.example .env.local
```

| Variable | What it is |
| --- | --- |
| `HUNTER_LEAD_URL` | Hunter webhook, usually `https://bdr.fumbo.ai/api/webhooks/site-lead` |
| `HUNTER_LEAD_SECRET` | Same value as Hunter’s `SITE_LEAD_SECRET` |
| `SMTP_HOST` | Optional. Mail server if you also want an email copy |
| `SMTP_PORT` | Usually `587` (STARTTLS) or `465` (SSL) |
| `SMTP_SECURE` | `true` only if the port is `465` |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password (Gmail/Workspace: [App Password](https://support.google.com/accounts/answer/185833)) |
| `SMTP_FROM` | From header, e.g. `"Fumbo Ai <hello@fumbo.ai>"` |
| `CONTACT_TO` | Inbox for the optional email copy |

On Hunter, set `SITE_LEAD_SECRET` to the same secret and restart.

Spam protection: two honeypots, minimum fill-time, same-origin check, per-IP and per-email rate limits, disposable-mail block, and a cap on links in the message. Bots that fill a hidden field get a fake success and never reach Hunter.

## Deploy

### Render (Node)

Build command: `npm run build`  
Start command: `npm start`  
Add the SMTP keys in Environment.

### cPanel

**Option A — shared hosting (most common):** static files + PHP mailer.

```bash
npm run build:cpanel
```

That writes an `out/` folder. Upload everything in `out/` to `public_html` (File Manager, FTP, or Git). Then on the server:

1. Copy `contact.config.example.php` to `contact.config.php` (same folder).
2. Put your cPanel mailbox SMTP details in it — usually `mail.yourdomain.com`, port `587`, user `hello@fumbo.ai`.
3. `.htaccess` already blocks `contact.config.php` from the web.

**Option B — cPanel “Setup Node.js App”:** same app as Render.

1. Create a Node.js application (Node 20 if available).
2. Application root: the project folder (not only `public_html`).
3. Startup file: `server.js`
4. Run `npm install` and `npm run build` in the app.
5. Add the same SMTP keys in the Node.js app environment.

cPanel mailbox SMTP and Gmail SMTP both work. Use whichever inbox should receive demo requests.
