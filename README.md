# html css js vite starter [![CI](https://github.com/daggerok/html-css-js-vite-starter/actions/workflows/github-pages.yaml/badge.svg)](https://github.com/daggerok/html-css-js-vite-starter/actions/workflows/github-pages.yaml)
Vite HTML SCSS JS starter uses font-awesome

## Quick start

```bash
npm_config_yes=true npx degit daggerok/html-css-js-vite-starter vite-site-html-css-js
```

## Usage

install packages:

```bash
npm i -E
```

run server in dev mode listening port 5173:

```bash
npm run dev
```

build and run locally listening port 3000:

```bash
npm run build ; npm_config_yes=true npx serve dist
```

## Deployment

To deploy GitHub repository settings you must update `Pages` section:
Build and deployment:
`Source` -> `Deploy from branch`
`Branch` -> `gh-pages / (root)`

## RTFM

- https://fonts.google.com/?subset=cyrillic&preview.size=24
