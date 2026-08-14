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
cd web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Notes

- Brand assets live in `public/brand/`
- Spline scene URL is configured in `src/components/site/hero.tsx`
- Contact form currently validates client-side only; wire to your CRM/email endpoint before production
