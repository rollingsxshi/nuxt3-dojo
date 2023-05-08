# Nuxt tutorial

## Setup
- run `pnpm dlx nuxi init <project-name>`
- `pnpm install`
- start dev server `pnpm dev -o`

## Adding pages
- create a `pages` directory
- in pages dir, create <pageName>.vue (eg. index.vue is '/' & about.vue is '/about')
- if folder is created in pages, name of folder will be added to route path

## Layouts
- components common pages
- create `layouts` folder in root
- `default.vue` applied to all pages
- `definePageMeta()` for custom layouts for certain pages

## Nuxt modules (tailwind)
- add 3rd party packages
- `pnpm add --save-dev @nuxtjs/tailwindcss`
- Add `@nuxtjs/tailwindcss` to the modules section of `nuxt.config.{ts,js}`
- create `./assets/css/tailwind.css` to customise tailwind

## Metadata
- default metadata in `nuxt.config.ts` file
- page-specific metadata with `useHead()` or `<Head></Head>`

## Server routes
- create `server/api/` directory in root
- create `<fileName>.js` in `api` folder
- api endpoint would be `/api/<fileName>`

## Env variables
- update `nuxt.config.ts` with `runtimeConfig`