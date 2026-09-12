# Zepco Technologies — Astro homepage

Native Astro conversion of the supplied **Homepage layout design** Figma Make export. It preserves the navy-and-gold palette, Barlow Condensed headings, Inter body text, drone hero, section order, content, card grids, and hover treatments.

## Run locally

Requires Node.js **22.12+** (an even-numbered LTS release) and pnpm **10.28.2**.

```sh
npm install --global pnpm@10.28.2
pnpm install --frozen-lockfile
pnpm dev
```

Open the local address printed by Astro. For production:

```sh
pnpm check
pnpm build
pnpm preview
```

The static, deployable website is generated in `dist/`. Upload that directory to any static host. No React renderer, React hydration, server adapter, database, or Figma account is needed to run the finished website.

## Project structure

| Location | Purpose |
| --- | --- |
| `src/pages/index.astro` | Homepage route; composes the page sections. |
| `src/layouts/BaseLayout.astro` | Document shell, metadata, font preloads, and accessibility skip link. |
| `src/components/` | Header, footer, eight homepage sections, and shared Brand, Icon, and Link components. |
| `src/data/homepage.ts` | Typed content arrays and optional destinations for capabilities, solutions, and stories. |
| `src/data/site.ts` | Site metadata, navigation, and optional company/contact/social URLs. |
| `src/styles/global.css` | Tailwind v4, original design tokens, responsive rules, CSS hover states, and reduced-motion support. |
| `src/styles/fonts.css` | Self-hosted font declarations. |
| `public/images/` | Original hero image and locally downloaded copies of the images referenced by the export. |
| `public/icons/` | Arrow, menu, and close glyphs extracted from the supplied source. |
| `public/fonts/` | Local fonts and their license notices. |
| `docs/assets.json` | Provenance for downloaded image and font files. |
| `docs/implementation.md` | Conversion decisions, scope, and verification notes. |

## How this uses Astro

The `.astro` components render HTML at build time. Typed arrays are mapped into HTML on the build side. Reusable components receive props and slots. The header's small TypeScript script handles the mobile navigation; decorative hover effects are handled by CSS. Tailwind integrates through its Vite plugin in `astro.config.mjs`.

The original React/Vite entry point, React dependencies, and Figma Make development plugins have been removed. This is an Astro application with a standard Astro directory layout and static build, rather than a React application wrapped inside Astro.

## Connect the remaining destinations

The uploaded design contains only the homepage. It does **not** include working product/story detail routes, a contact email or endpoint, career pages, or social profile URLs.

- Set `site.links.contact` to the real contact URL or `mailto:` address in `src/data/site.ts`.
- Set `site.links.careers`, `linkedin`, and `twitter` when those destinations are known.
- Set the `href` values in `src/data/homepage.ts` to the real detail pages.
- `undefined` destinations render with `aria-disabled="true"` and a “More information coming soon” title. They never pretend to submit a message or jump to the top of the page.
- Header navigation and available section links work now. The company-story and all-stories links currently point to their corresponding homepage sections and can be replaced with dedicated routes later.

## GitHub

Repository: [skvijay052/zepco-astro](https://github.com/skvijay052/zepco-astro). The default branch is `main`.

```sh
git clone https://github.com/skvijay052/zepco-astro.git
cd zepco-astro
pnpm install --frozen-lockfile
pnpm dev
```

The GitHub Actions workflow checks the Astro types and production build on pushes to `main` and pull requests. Dependencies, build output, secrets, and local Git history are excluded from source control.

## Reference and documentation

- [Supplied Figma Make reference](https://www.figma.com/make/eodFXxYvv2MZUEWnUCnCQj/Homepage-layout-design)
- [Astro project setup](https://docs.astro.build/en/install-and-setup/)
- [Astro styles and Tailwind integration](https://docs.astro.build/en/guides/styling/)
- [Astro scripts and event handling](https://docs.astro.build/en/guides/client-side-scripts/)

The attached export is the implementation reference: the connected Figma account could not retrieve the live file because it lacked edit access. Brand text, imagery, company statements, and story titles are supplied content, not independently verified claims.
