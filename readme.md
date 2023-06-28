# nuxt issue: missing css in production build

## reproduction

- `npm install`
- `npm build`
- `npm preview`

no stylesheets are included

## workaround 1

- `rm i18n.config.ts`

## workaround 2

- add `experimental: { inlineSSRStyles: false }` to `nuxt.config.ts`

## workaround 3

- downgrade `nuxt` to `3.5.3`
