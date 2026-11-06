# Jahanzaib — Web Developer Portfolio

A dark, responsive developer portfolio built with React, Vite, Tailwind CSS,
Framer Motion, and GSAP. It features a code-editor hero animation, scroll
reveals, an interactive horizontal Projects showcase on larger screens, and
reduced-motion and mobile fallbacks.

The site uses system fonts and CSS/SVG artwork instead of remote font,
illustration, or 3D services. Project screenshots are provided at 640px and
1200px widths so browsers can choose an appropriate image size.

## Stack

- React 19 and Vite
- Tailwind CSS v4
- Framer Motion
- GSAP ScrollTrigger

## Run locally

On Windows, install dependencies and start the development server:

```powershell
npm.cmd install
npm.cmd run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Build and preview

```powershell
npm.cmd run lint
npm.cmd run build
npm.cmd run preview
```

The production-ready static site is generated in `dist/`.

## Deploy to Netlify

The Netlify build settings are in `netlify.toml`. To enable automatic
deployments:

1. Create a GitHub repository and push this project to its default branch.
   Include `package.json`, `package-lock.json`, `src/`, `public/`, and
   `netlify.toml`. Do not upload `node_modules/` or `dist/`; they are
   generated or installed as part of the build.
2. In Netlify, choose **Add new project** and import the GitHub repository.
3. Keep the detected build command (`npm run build`) and publish directory
   (`dist`), then deploy.
4. Netlify will rebuild the site when you push later changes to the connected
   branch.

The same settings can be used without connecting GitHub: run
`npm.cmd run build` and manually deploy the generated `dist/` folder.

## Projects and assets

Project content and live links are maintained in
`src/components/sections/Projects.jsx`. The four current projects are:

- IGY Marinas — WordPress yacht-booking site
- Absolute Green — Shopify e-commerce store
- GameHub — WordPress gaming site
- For Sale By Owner — WordPress real-estate listings site

The optimized responsive project images and the social preview image are in
`public/`. Avoid reintroducing the original full-size screenshots into
`public/`, since Vite copies every public asset to the production output.

## Contact form behavior

The contact form validates the visitor's name, email, and message, then opens
their configured email application with a message addressed to
`jahanzaibabdulrazzak@gmail.com`. It does not send mail directly from the
website. Direct sending requires a backend or email service.

## Before publishing

- The current production URL is
  `https://jahanzaib-web-portfolio.netlify.app/`; its canonical and social
  image URLs are configured in `index.html`.
- If you connect a custom domain later, update those URLs to the preferred
  canonical domain.
- Deploy the contents of `dist/` to a static host over HTTPS.
- Confirm each live project link and the contact email are still correct.
- Social platform previews may need to be refreshed after the site goes live.
