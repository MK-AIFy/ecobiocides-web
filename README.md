# Ecobiocides & Botanicals

The production website for Ecobiocides & Botanicals Private Limited, presenting its neem-based Azagro crop-protection range, specialty botanical inputs, technical data sheets, field media, certifications, and company information.

## Local development

```bash
npm ci
npm run dev
```

Open `http://127.0.0.1:3000` in a browser.

## Validation

```bash
npm run lint
npm run build
```

The production build is a static export written to `out/`.

## Deployment

GitHub Actions deploys the `main` branch to GitHub Pages. Production builds use the `/ecobiocides-web` base path configured in `next.config.ts`.

Product media is stored under `public/media/`, and downloadable technical data sheets are stored under `public/resources/technical-data-sheets/`.
