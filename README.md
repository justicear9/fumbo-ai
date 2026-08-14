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

## Contact form (SMTP)

Copy `.env.example` to `.env.local` and fill in your mail server details:

```bash
cp .env.example .env.local
```

| Variable | What it is |
| --- | --- |
| `SMTP_HOST` | SMTP server, e.g. `smtp.gmail.com` or your host’s SMTP |
| `SMTP_PORT` | Usually `587` (STARTTLS) or `465` (SSL) |
| `SMTP_SECURE` | `true` only if the port is `465` |
| `SMTP_USER` | SMTP username |
| `SMTP_PASS` | SMTP password (for Gmail/Google Workspace, use an [App Password](https://support.google.com/accounts/answer/185833)) |
| `SMTP_FROM` | From header, e.g. `"Fumbo Ai <hello@fumbo.ai>"` |
| `CONTACT_TO` | Inbox that should receive demo requests |

Restart `npm run dev` after saving. On Render, add the same keys in the service **Environment** tab.

The form uses a honeypot field, a minimum fill-time check, origin checks, and per-IP rate limiting so bots are less likely to land in your inbox.

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
